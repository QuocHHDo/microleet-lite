import { EDGE_DRILLS, type EdgeCategory, type EdgeDrill } from '@/data/drills/edgeCases';
import { runJsTests } from '@/utils/jsRunner';
import { boxOf, nextBox } from '@/utils/spacedReview';

export const STATS_KEY = 'microleet.drills.edge-cases.v1';

export interface TestRow {
  argsText: string;
  expectedText: string;
}

export type RowStatus =
  | { kind: 'invalid'; message: string }
  | { kind: 'reference-error'; message: string }
  | { kind: 'correct'; args: any[]; expected: any }
  | { kind: 'wrong-expectation'; args: any[]; expected: any; answer: any };

export interface CategoryResult {
  category: EdgeCategory;
  /** Indices of the user's (non-blank) rows that exercise this category. */
  rows: number[];
}

export interface Evaluation {
  rows: RowStatus[];
  categories: CategoryResult[];
  covered: number;
  total: number;
}

export function getDrill(id: string): EdgeDrill | undefined {
  return EDGE_DRILLS.find((d) => d.id === id);
}

export function parseRow(row: TestRow, paramCount?: number): { args: any[]; expected: any } | { error: string } {
  let args: any;
  let expected: any;
  try {
    args = JSON.parse(row.argsText);
  } catch {
    return { error: 'Input is not valid JSON. Write the arguments as a JSON array, e.g. [[1, 2], 3].' };
  }
  if (!Array.isArray(args)) return { error: 'Input must be a JSON array of the arguments, in order.' };
  if (paramCount !== undefined && args.length !== paramCount) {
    return { error: `Expected ${paramCount} argument${paramCount === 1 ? '' : 's'} but got ${args.length}.` };
  }
  try {
    expected = JSON.parse(row.expectedText);
  } catch {
    return { error: 'Expected output is not valid JSON (strings need double quotes).' };
  }
  return { args, expected };
}

const paramCountOf = (drill: EdgeDrill) => {
  const inside = drill.signature.slice(drill.signature.indexOf('(') + 1, drill.signature.indexOf('):'));
  return inside.trim() === '' ? 0 : inside.split(/,\s*(?=\w+:)/).length;
};

/**
 * Check the user's tests against the reference solution, then work out which edge-case
 * categories their inputs exercise. Blank rows are ignored.
 */
export async function evaluate(
  drill: EdgeDrill,
  rows: TestRow[],
  opts: { workerFactory?: () => any; timeoutMs?: number } = {},
): Promise<Evaluation> {
  const filled = rows.filter((r) => r.argsText.trim() || r.expectedText.trim());
  const parsed = filled.map((r) => parseRow(r, paramCountOf(drill)));

  const runnable = parsed.flatMap((p, i) => ('error' in p ? [] : [{ i, args: p.args, expected: p.expected }]));
  const statuses: RowStatus[] = parsed.map((p) => ('error' in p ? { kind: 'invalid', message: p.error } : { kind: 'reference-error', message: 'Not run' }));
  const answers: any[] = new Array(filled.length).fill(undefined);

  if (runnable.length) {
    const run = await runJsTests(
      drill.reference,
      runnable.map((r) => ({ input: r.args, expectedOutput: r.expected })),
      { entryPoint: drill.entryPoint, timeoutMs: opts.timeoutMs, workerFactory: opts.workerFactory },
    );
    runnable.forEach((r, k) => {
      const res = run.results[k];
      if (res.error) {
        statuses[r.i] = { kind: 'reference-error', message: res.error };
      } else {
        answers[r.i] = res.actual;
        statuses[r.i] = res.passed
          ? { kind: 'correct', args: r.args, expected: r.expected }
          : { kind: 'wrong-expectation', args: r.args, expected: r.expected, answer: res.actual };
      }
    });
  }

  const categories = drill.categories.map((category): CategoryResult => {
    const hit: number[] = [];
    statuses.forEach((s, i) => {
      if (s.kind !== 'correct' && s.kind !== 'wrong-expectation') return;
      try {
        if (category.covers(s.args, answers[i])) hit.push(i);
      } catch {
        // an input of the wrong shape simply doesn't count
      }
    });
    return { category, rows: hit };
  });

  return {
    rows: statuses,
    categories,
    covered: categories.filter((c) => c.rows.length > 0).length,
    total: categories.length,
  };
}

export interface DrillStats {
  attempts: number;
  bestCovered: number;
  /** Most recent attempt, and the Leitner box for spaced review. */
  lastAttempt?: number;
  lastCovered?: number;
  box?: number;
  /** How many times each category was missed. */
  missed: Record<string, number>;
}
export type EdgeStats = Record<string, DrillStats>;

/**
 * View of an edge drill's stats for the review scheduler. An attempt counts as a success only if
 * every edge case was covered. Stats saved before `lastCovered` existed fall back to best coverage.
 */
export function edgeSchedulable(s: DrillStats, total?: number) {
  const covered = s.lastCovered ?? s.bestCovered;
  return {
    seen: s.attempts,
    correct: total !== undefined && covered === total ? s.attempts : 0,
    lastSeen: s.lastAttempt ?? 0,
    box: s.box,
  };
}

export function recordAttempt(stats: EdgeStats, drillId: string, ev: Evaluation, now = Date.now()): EdgeStats {
  const prev = stats[drillId] ?? { attempts: 0, bestCovered: 0, missed: {} };
  const full = ev.covered === ev.total;
  const missed = { ...prev.missed };
  for (const c of ev.categories) if (c.rows.length === 0) missed[c.category.id] = (missed[c.category.id] ?? 0) + 1;
  return {
    ...stats,
    [drillId]: {
      attempts: prev.attempts + 1,
      bestCovered: Math.max(prev.bestCovered, ev.covered),
      lastAttempt: now,
      lastCovered: ev.covered,
      box: nextBox(boxOf(edgeSchedulable(prev)), full),
      missed,
    },
  };
}

export function loadStats(): EdgeStats {
  try {
    const raw = window.localStorage.getItem(STATS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveStats(stats: EdgeStats) {
  try {
    window.localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch {
    // storage unavailable; progress just isn't kept
  }
}
