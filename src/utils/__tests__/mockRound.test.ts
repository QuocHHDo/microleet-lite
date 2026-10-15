import { EDGE_DRILLS } from '@/data/drills/edgeCases';
import { MOCK_INFO } from '@/data/drills/mockRounds';
import {
  PHASES,
  TOTAL_SECONDS,
  addRecord,
  buildSuite,
  checkComplexity,
  detectClarifyTopics,
  formatClock,
  paceOf,
  pickDrill,
  runSuite,
  starterCode,
  summarizeSuite,
  type MockRecord,
} from '../mockRound';
import { fakeWorker } from '../testing/fakeWorker';

describe('timing', () => {
  it('budgets 45 minutes', () => {
    expect(TOTAL_SECONDS).toBe(45 * 60);
    expect(PHASES.map((p) => p.id)).toEqual([
      'clarify',
      'approach',
      'code',
      'test',
    ]);
  });

  it('formats clocks', () => {
    expect(formatClock(65)).toBe('1:05');
    expect(formatClock(-30)).toBe('0:30');
  });

  it('judges pace with a 10% grace window', () => {
    expect(paceOf(300, 300)).toBe('on-time');
    expect(paceOf(325, 300)).toBe('on-time');
    expect(paceOf(340, 300)).toBe('over');
    expect(paceOf(100, 300)).toBe('under');
  });
});

describe('mock round data', () => {
  it('has info for every edge drill', () => {
    for (const d of EDGE_DRILLS) expect(MOCK_INFO[d.id]).toBeDefined();
    expect(Object.keys(MOCK_INFO).sort()).toEqual(
      EDGE_DRILLS.map((d) => d.id).sort(),
    );
  });

  for (const drill of EDGE_DRILLS) {
    it(`${drill.title}: examples match the reference and the whole suite passes it`, async () => {
      const info = MOCK_INFO[drill.id];
      expect(info.clarify.length).toBeGreaterThanOrEqual(3);
      const suite = buildSuite(drill, info);
      const results = await runSuite(drill.reference, drill, suite, {
        workerFactory: fakeWorker(),
      });
      const failed = results
        .filter((r) => !r.result.passed)
        .map((r) => r.test.label);
      expect(failed).toEqual([]);
      expect(summarizeSuite(results, 'example').total).toBe(
        info.examples.length,
      );
      expect(summarizeSuite(results, 'edge').total).toBe(
        drill.categories.length,
      );
    });

    it(`${drill.title}: starter code defines the entry point`, () => {
      expect(starterCode(drill)).toContain(`function ${drill.signature}`);
    });
  }
});

describe('detectClarifyTopics', () => {
  const topics = MOCK_INFO['valid-parentheses'].clarify;

  it('matches questions by keyword, one per line', () => {
    const asked = detectClarifyTopics(
      'Can the input be empty?\nHow long can it be?',
      topics,
    );
    expect(asked).toEqual([true, false, false, true]);
  });

  it('finds nothing in unrelated text or blank input', () => {
    expect(detectClarifyTopics('', topics)).toEqual([
      false,
      false,
      false,
      false,
    ]);
    expect(detectClarifyTopics('hello there', topics).some(Boolean)).toBe(
      false,
    );
  });
});

describe('checkComplexity', () => {
  it('accepts equivalent spellings', () => {
    expect(checkComplexity('O(n)', ['O(n)'])).toBe('match');
    expect(checkComplexity('o( N )', ['O(n)'])).toBe('match');
    expect(checkComplexity('n', ['O(n)'])).toBe('match');
    expect(checkComplexity('O(amount × coins)', ['O(amount*coins)'])).toBe(
      'match',
    );
  });
  it('reports differences and blanks', () => {
    expect(checkComplexity('O(n^2)', ['O(n)'])).toBe('differs');
    expect(checkComplexity('  ', ['O(n)'])).toBe('blank');
  });
});

describe('suite against a flawed solution', () => {
  it('fails the edge case a careless solution misses', async () => {
    const drill = EDGE_DRILLS.find((d) => d.id === 'maximum-subarray')!;
    const buggy = `function maxSubArray(nums){let cur=0,best=0;for(const x of nums){cur=Math.max(0,cur+x);best=Math.max(best,cur)}return best}`;
    const results = await runSuite(
      buggy,
      drill,
      buildSuite(drill, MOCK_INFO[drill.id]),
      { workerFactory: fakeWorker() },
    );
    const failed = results
      .filter((r) => !r.result.passed)
      .map((r) => r.test.label);
    expect(failed).toContain('All numbers negative');
    expect(summarizeSuite(results, 'example')).toEqual({ passed: 2, total: 2 });
  });
});

describe('history and problem choice', () => {
  const rec = (drillId: string, date: number): MockRecord => ({
    drillId,
    title: drillId,
    date,
    phaseSeconds: [0, 0, 0, 0],
    clarifyAsked: 0,
    clarifyTotal: 0,
    timeVerdict: 'blank',
    spaceVerdict: 'blank',
    examplesPassed: 0,
    examplesTotal: 0,
    edgePassed: 0,
    edgeTotal: 0,
  });

  it('keeps newest first and caps at 20', () => {
    let h: MockRecord[] = [];
    for (let i = 0; i < 25; i++) h = addRecord(h, rec('a', i));
    expect(h).toHaveLength(20);
    expect(h[0].date).toBe(24);
  });

  it('prefers untried problems, then the least recently tried', () => {
    const all = EDGE_DRILLS.map((d, i) => rec(d.id, 100 + i));
    expect(pickDrill(all.slice(1)).id).toBe(EDGE_DRILLS[0].id);
    expect(pickDrill(all).id).toBe(EDGE_DRILLS[0].id);
  });
});
