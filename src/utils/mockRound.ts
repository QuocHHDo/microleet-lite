import { EDGE_DRILLS, type EdgeDrill } from '@/data/drills/edgeCases';
import type { ClarifyTopic, MockInfo } from '@/data/drills/mockRounds';
import { runJsTests, type TestResult } from '@/utils/jsRunner';

export type PhaseId = 'clarify' | 'approach' | 'code' | 'test';

export interface Phase {
  id: PhaseId;
  label: string;
  minutes: number;
  instruction: string;
}

export const PHASES: Phase[] = [
  {
    id: 'clarify',
    label: 'Clarify',
    minutes: 5,
    instruction: 'Write the questions you would ask the interviewer before solving. One per line.',
  },
  {
    id: 'approach',
    label: 'Approach',
    minutes: 10,
    instruction: 'Explain your plan in words, then state time and space complexity.',
  },
  {
    id: 'code',
    label: 'Code',
    minutes: 20,
    instruction: 'Implement it. Run against the examples as often as you like.',
  },
  {
    id: 'test',
    label: 'Test',
    minutes: 10,
    instruction: 'Hunt for bugs: run the full suite, read the failures and fix your code.',
  },
];

export const TOTAL_SECONDS = PHASES.reduce((s, p) => s + p.minutes * 60, 0);
export const HISTORY_KEY = 'microleet.mock-round.v1';

export const formatClock = (seconds: number) => {
  const s = Math.abs(Math.round(seconds));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
};

/** Which clarifying topics the user's questions touch on. One boolean per topic. */
export function detectClarifyTopics(text: string, topics: ClarifyTopic[]): boolean[] {
  const lines = text
    .toLowerCase()
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);
  return topics.map((t) => lines.some((line) => t.keywords.some((k) => line.includes(k))));
}

const normalizeComplexity = (s: string) => {
  let n = s
    .toLowerCase()
    .replace(/[×·]/g, '*')
    .replace(/\*\*/g, '^')
    .replace(/\s+/g, '');
  if (n && !n.startsWith('o(')) n = `o(${n})`;
  return n;
};

export type ComplexityVerdict = 'match' | 'differs' | 'blank';

/** Exact-text style check. "differs" is not "wrong": equivalent forms like O(2n) are not recognized. */
export function checkComplexity(answer: string, accepted: string[]): ComplexityVerdict {
  if (!answer.trim()) return 'blank';
  const a = normalizeComplexity(answer);
  return accepted.some((x) => normalizeComplexity(x) === a) ? 'match' : 'differs';
}

export const starterCode = (drill: EdgeDrill) => `function ${drill.signature} {\n  // your code here\n}\n`;

export interface SuiteTest {
  kind: 'example' | 'edge';
  label: string;
  why?: string;
  input: any[];
  expected: any;
}

export function buildSuite(drill: EdgeDrill, info: MockInfo): SuiteTest[] {
  return [
    ...info.examples.map((e, i): SuiteTest => ({ kind: 'example', label: `Example ${i + 1}`, input: e.input, expected: e.expected })),
    ...drill.categories.map(
      (c): SuiteTest => ({ kind: 'edge', label: c.label, why: c.why, input: c.hidden.input, expected: c.hidden.expected }),
    ),
  ];
}

export interface SuiteResult {
  test: SuiteTest;
  result: TestResult;
}

export async function runSuite(
  code: string,
  drill: EdgeDrill,
  tests: SuiteTest[],
  opts: { workerFactory?: () => any; timeoutMs?: number } = {},
): Promise<SuiteResult[]> {
  const run = await runJsTests(
    code,
    tests.map((t) => ({ input: t.input, expectedOutput: t.expected })),
    { entryPoint: drill.entryPoint, ...opts },
  );
  return tests.map((test, i) => ({ test, result: run.results[i] }));
}

export const summarizeSuite = (results: SuiteResult[], kind: SuiteTest['kind']) => {
  const rel = results.filter((r) => r.test.kind === kind);
  return { passed: rel.filter((r) => r.result.passed).length, total: rel.length };
};

export type Pace = 'under' | 'on-time' | 'over';

/** Within 10% of the budget counts as on time. */
export function paceOf(spentSeconds: number, budgetSeconds: number): Pace {
  if (spentSeconds > budgetSeconds * 1.1) return 'over';
  if (spentSeconds < budgetSeconds * 0.5) return 'under';
  return 'on-time';
}

export interface MockRecord {
  drillId: string;
  title: string;
  date: number;
  phaseSeconds: number[];
  clarifyAsked: number;
  clarifyTotal: number;
  timeVerdict: ComplexityVerdict;
  spaceVerdict: ComplexityVerdict;
  examplesPassed: number;
  examplesTotal: number;
  edgePassed: number;
  edgeTotal: number;
}

export function loadHistory(): MockRecord[] {
  try {
    const raw = window.localStorage.getItem(HISTORY_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveHistory(history: MockRecord[]) {
  try {
    window.localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, 20)));
  } catch {
    // storage unavailable; the round just isn't remembered
  }
}

/** Newest first, capped at 20. */
export const addRecord = (history: MockRecord[], record: MockRecord) => [record, ...history].slice(0, 20);

/** Prefer problems the user hasn't tried in a mock round yet, then the least recently tried. */
export function pickDrill(history: MockRecord[], rng: () => number = Math.random): EdgeDrill {
  const lastTried = new Map<string, number>();
  for (const r of history) if (!lastTried.has(r.drillId)) lastTried.set(r.drillId, r.date);
  const untried = EDGE_DRILLS.filter((d) => !lastTried.has(d.id));
  if (untried.length) return untried[Math.floor(rng() * untried.length)];
  const oldest = Math.min(...Array.from(lastTried.values()));
  const candidates = EDGE_DRILLS.filter((d) => lastTried.get(d.id) === oldest);
  return candidates[Math.floor(rng() * candidates.length)];
}
