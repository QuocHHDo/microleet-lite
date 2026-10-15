import type { Problem } from '@/common/commonProblem';
import { PATTERNS, PROBLEM_PATTERNS, type Pattern } from '@/data/drills/patterns';
import { boxOf, nextBox } from '@/utils/spacedReview';

export const CHOICES_PER_QUESTION = 4;
export const SECONDS_PER_QUESTION = 30;
export const QUESTIONS_PER_SESSION = 10;
export const STATS_KEY = 'microleet.drills.pattern-spotting.v1';

export interface PatternStat {
  seen: number;
  correct: number;
  lastSeen: number;
  totalMs: number;
  /** Leitner box for spaced review; absent in stats saved before review existed. */
  box?: number;
}
export type PatternStats = Record<string, PatternStat>;

export interface DrillQuestion {
  title: string;
  difficulty: string;
  description: string;
  hint: string;
  correct: string;
  signal: string;
  choices: string[];
}

export interface Answer {
  question: DrillQuestion;
  picked: string | null; // null = timed out
  elapsedMs: number;
}

type Rng = () => number;

const patternById = new Map<string, Pattern>(PATTERNS.map((p) => [p.id, p]));
export const getPattern = (id: string): Pattern => {
  const p = patternById.get(id);
  if (!p) throw new Error(`Unknown pattern: ${id}`);
  return p;
};

/** "Two Sum (Leetcode 1)" -> "Two Sum" */
export const canonicalTitle = (title: string) => title.replace(/\s*\((?:leetcode|lc)[\s-]*\d+\)\s*$/i, '').trim();

function shuffle<T>(items: T[], rng: Rng): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** One entry per tagged problem, deduplicated across topic files, minus ones whose text gives the answer away. */
export function getDrillProblems(allProblems: Problem[]) {
  const seen = new Set<string>();
  const out: { problem: Problem; title: string; pattern: string; signal: string }[] = [];
  for (const problem of allProblems) {
    const title = canonicalTitle(problem.title);
    const tag = PROBLEM_PATTERNS[title];
    if (!tag || seen.has(title)) continue;
    const leaks = getPattern(tag.pattern).leakWords ?? [];
    const text = `${title} ${problem.description}`.toLowerCase();
    if (leaks.some((w) => text.includes(w))) continue;
    seen.add(title);
    out.push({ problem, title, pattern: tag.pattern, signal: tag.signal });
  }
  return out;
}

/** Higher weight for patterns the user misses, or has never seen. */
function weightFor(pattern: string, stats: PatternStats): number {
  const s = stats[pattern];
  if (!s || s.seen === 0) return 2;
  return 1 + 2 * (1 - s.correct / s.seen);
}

function buildChoices(correct: string, available: Set<string>, rng: Rng): string[] {
  const confusable = (getPattern(correct).confusableWith ?? []).filter((id) => available.has(id));
  const others = Array.from(available).filter((id) => id !== correct);
  const picked: string[] = [];
  if (confusable.length) picked.push(shuffle(confusable, rng)[0]);
  for (const id of shuffle(others, rng)) {
    if (picked.length >= CHOICES_PER_QUESTION - 1) break;
    if (!picked.includes(id)) picked.push(id);
  }
  return shuffle([correct, ...picked], rng);
}

export function buildQuestions(
  allProblems: Problem[],
  stats: PatternStats = {},
  count = QUESTIONS_PER_SESSION,
  rng: Rng = Math.random,
  /** Ask only about these patterns (distractors still come from every pattern). */
  onlyPatterns?: string[],
): DrillQuestion[] {
  const pool = getDrillProblems(allProblems);
  const available = new Set(pool.map((p) => p.pattern));
  const remaining = onlyPatterns ? pool.filter((p) => onlyPatterns.includes(p.pattern)) : [...pool];
  const questions: DrillQuestion[] = [];

  while (questions.length < count && remaining.length) {
    const weights = remaining.map((p) => weightFor(p.pattern, stats));
    let r = rng() * weights.reduce((a, b) => a + b, 0);
    let idx = 0;
    for (; idx < remaining.length - 1; idx++) {
      r -= weights[idx];
      if (r < 0) break;
    }
    const [chosen] = remaining.splice(idx, 1);
    questions.push({
      title: chosen.title,
      difficulty: chosen.problem.difficulty,
      description: chosen.problem.description,
      hint: chosen.problem.hint,
      correct: chosen.pattern,
      signal: chosen.signal,
      choices: buildChoices(chosen.pattern, available, rng),
    });
  }
  return questions;
}

export function recordAnswer(stats: PatternStats, a: Answer, now = Date.now()): PatternStats {
  const prev = stats[a.question.correct] ?? { seen: 0, correct: 0, lastSeen: 0, totalMs: 0 };
  const wasCorrect = a.picked === a.question.correct;
  return {
    ...stats,
    [a.question.correct]: {
      seen: prev.seen + 1,
      correct: prev.correct + (wasCorrect ? 1 : 0),
      lastSeen: now,
      totalMs: prev.totalMs + a.elapsedMs,
      box: nextBox(boxOf(prev), wasCorrect),
    },
  };
}

export function loadStats(): PatternStats {
  try {
    const raw = window.localStorage.getItem(STATS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveStats(stats: PatternStats) {
  try {
    window.localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch {
    // storage unavailable; progress just isn't kept
  }
}

/** Patterns the user got wrong in this session, with the problems that exposed them. */
export function summarizeMisses(answers: Answer[]) {
  const byPattern = new Map<string, Answer[]>();
  for (const a of answers) {
    if (a.picked === a.question.correct) continue;
    byPattern.set(a.question.correct, [...(byPattern.get(a.question.correct) ?? []), a]);
  }
  return Array.from(byPattern.entries()).map(([pattern, misses]) => ({ pattern: getPattern(pattern), misses }));
}
