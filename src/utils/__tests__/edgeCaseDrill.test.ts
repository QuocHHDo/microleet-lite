import { EDGE_DRILLS } from '@/data/drills/edgeCases';
import {
  edgeSchedulable,
  evaluate,
  parseRow,
  recordAttempt,
} from '../edgeCaseDrill';
import { fakeWorker } from '../testing/fakeWorker';

const opts = () => ({ workerFactory: fakeWorker() });

describe('edge-case data', () => {
  for (const drill of EDGE_DRILLS) {
    describe(drill.title, () => {
      it('has unique category ids and a valid entry point', () => {
        const ids = drill.categories.map((c) => c.id);
        expect(new Set(ids).size).toBe(ids.length);
        expect(drill.reference).toContain(`function ${drill.entryPoint}`);
      });

      it('hidden tests match the reference and are covered by their own category', async () => {
        const ev = await evaluate(
          drill,
          drill.categories.map((c) => ({
            argsText: JSON.stringify(c.hidden.input),
            expectedText: JSON.stringify(c.hidden.expected),
          })),
          opts(),
        );
        ev.rows.forEach((row, i) => {
          expect({ id: drill.categories[i].id, kind: row.kind }).toEqual({
            id: drill.categories[i].id,
            kind: 'correct',
          });
        });
        ev.categories.forEach((c, i) => {
          expect({ id: c.category.id, own: c.rows.includes(i) }).toEqual({
            id: c.category.id,
            own: true,
          });
        });
        expect(ev.covered).toBe(ev.total);
      });
    });
  }
});

describe('parseRow', () => {
  it('accepts a JSON args array and expected value', () => {
    expect(parseRow({ argsText: '[[1,2],3]', expectedText: '5' })).toEqual({
      args: [[1, 2], 3],
      expected: 5,
    });
  });
  it('rejects non-array args, bad JSON and wrong arity', () => {
    expect(parseRow({ argsText: '5', expectedText: '1' })).toHaveProperty(
      'error',
    );
    expect(parseRow({ argsText: '[1', expectedText: '1' })).toHaveProperty(
      'error',
    );
    expect(parseRow({ argsText: '[1]', expectedText: 'abc' })).toHaveProperty(
      'error',
    );
    expect(parseRow({ argsText: '[1]', expectedText: '1' }, 2)).toHaveProperty(
      'error',
    );
  });
});

describe('evaluate', () => {
  const vp = EDGE_DRILLS.find((d) => d.id === 'valid-parentheses')!;

  it('reports covered and missed categories', async () => {
    const ev = await evaluate(
      vp,
      [
        { argsText: '["()"]', expectedText: 'true' },
        { argsText: '[""]', expectedText: 'true' },
        { argsText: '[""]', expectedText: 'false' }, // wrong expectation
        { argsText: '', expectedText: '' }, // blank rows are ignored
        { argsText: 'nope', expectedText: 'true' },
      ],
      opts(),
    );
    expect(ev.rows.map((r) => r.kind)).toEqual([
      'correct',
      'correct',
      'wrong-expectation',
      'invalid',
    ]);
    const by = Object.fromEntries(
      ev.categories.map((c) => [c.category.id, c.rows]),
    );
    expect(by.empty).toEqual([1, 2]);
    expect(by['mismatched-types']).toEqual([]);
    expect(ev.covered).toBe(1);
  });

  it('uses the reference answer for result-dependent categories', async () => {
    const coin = EDGE_DRILLS.find((d) => d.id === 'coin-change')!;
    const ev = await evaluate(
      coin,
      [{ argsText: '[[2], 3]', expectedText: '0' }],
      opts(),
    );
    expect(ev.rows[0].kind).toBe('wrong-expectation');
    expect(
      ev.categories.find((c) => c.category.id === 'impossible')!.rows,
    ).toEqual([0]);
  });

  it('flags a hung reference as an error without covering anything', async () => {
    const coin = EDGE_DRILLS.find((d) => d.id === 'coin-change')!;
    const ev = await evaluate(
      coin,
      [{ argsText: '[[1], 5]', expectedText: '5' }],
      {
        workerFactory: fakeWorker(true),
        timeoutMs: 30,
      },
    );
    expect(ev.rows[0].kind).toBe('reference-error');
    expect(ev.covered).toBe(0);
  });
});

describe('recordAttempt', () => {
  it('tracks attempts, best coverage and misses', async () => {
    const vp = EDGE_DRILLS.find((d) => d.id === 'valid-parentheses')!;
    const ev = await evaluate(
      vp,
      [{ argsText: '[""]', expectedText: 'true' }],
      opts(),
    );
    const s = recordAttempt(recordAttempt({}, vp.id, ev), vp.id, ev);
    expect(s[vp.id].attempts).toBe(2);
    expect(s[vp.id].bestCovered).toBe(1);
    expect(s[vp.id].missed.single).toBe(2);
    expect(s[vp.id].missed.empty).toBeUndefined();
  });
});

describe('edge-case scheduling', () => {
  const drill = EDGE_DRILLS.find((d) => d.id === 'valid-parentheses')!;

  it('counts only full coverage as a success', async () => {
    const partial = await evaluate(
      drill,
      [{ argsText: '[""]', expectedText: 'true' }],
      opts(),
    );
    const full = await evaluate(
      drill,
      drill.categories.map((c) => ({
        argsText: JSON.stringify(c.hidden.input),
        expectedText: JSON.stringify(c.hidden.expected),
      })),
      opts(),
    );
    let s = recordAttempt({}, drill.id, partial, 100);
    expect(s[drill.id]).toMatchObject({
      lastAttempt: 100,
      lastCovered: 1,
      box: 0,
    });
    s = recordAttempt(s, drill.id, full, 200);
    expect(s[drill.id]).toMatchObject({
      lastAttempt: 200,
      lastCovered: drill.categories.length,
      box: 1,
    });
    s = recordAttempt(s, drill.id, partial, 300);
    expect(s[drill.id].box).toBe(0);
  });

  it('exposes stats to the scheduler', () => {
    const stat = {
      attempts: 2,
      bestCovered: 6,
      lastCovered: 3,
      lastAttempt: 50,
      missed: {},
    };
    expect(edgeSchedulable(stat, 6)).toEqual({
      seen: 2,
      correct: 0,
      lastSeen: 50,
      box: undefined,
    });
    expect(edgeSchedulable({ ...stat, lastCovered: 6 }, 6).correct).toBe(2);
  });
});
