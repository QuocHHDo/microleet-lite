import { PATTERNS, PROBLEM_PATTERNS } from '@/data/drills/patterns';
import { arrayProblems } from '@/data/problems/arrayProblems';
import { dictionaryProblems } from '@/data/problems/dictionaryProblems';
import { dpProblems } from '@/data/problems/dpProblems';
import { graphProblems } from '@/data/problems/graphProblems';
import { heapProblems } from '@/data/problems/heapProblems';
import { linkedListProblems } from '@/data/problems/linkedListProblems';
import { queueProblems } from '@/data/problems/queueProblems';
import { setProblems } from '@/data/problems/setProblems';
import { stackProblems } from '@/data/problems/stackProblems';
import { stringProblems } from '@/data/problems/stringProblems';
import { treeProblems } from '@/data/problems/treeProblems';
import { trieProblems } from '@/data/problems/trieProblems';
import { unionFindProblems } from '@/data/problems/unionFindProblems';
import {
  CHOICES_PER_QUESTION,
  buildQuestions,
  canonicalTitle,
  getDrillProblems,
  recordAnswer,
  summarizeMisses,
} from '../patternDrill';

const ALL = [
  ...arrayProblems,
  ...dictionaryProblems,
  ...dpProblems,
  ...graphProblems,
  ...heapProblems,
  ...linkedListProblems,
  ...queueProblems,
  ...setProblems,
  ...stackProblems,
  ...stringProblems,
  ...treeProblems,
  ...trieProblems,
  ...unionFindProblems,
];

describe('pattern data', () => {
  it('only references known patterns', () => {
    const ids = new Set(PATTERNS.map((p) => p.id));
    for (const [title, tag] of Object.entries(PROBLEM_PATTERNS)) {
      expect({ title, ok: ids.has(tag.pattern) }).toEqual({ title, ok: true });
    }
    for (const p of PATTERNS)
      for (const c of p.confusableWith ?? []) expect(ids.has(c)).toBe(true);
  });

  it('every tagged title matches a real problem', () => {
    const titles = new Set(ALL.map((p) => canonicalTitle(p.title)));
    const missing = Object.keys(PROBLEM_PATTERNS).filter((t) => !titles.has(t));
    expect(missing).toEqual([]);
  });

  it('has enough problems for a session', () => {
    expect(getDrillProblems(ALL).length).toBeGreaterThanOrEqual(30);
  });

  it('drops problems whose text names the pattern', () => {
    const titles = getDrillProblems(ALL).map((p) => p.title);
    expect(titles).not.toContain('Implement Trie (Prefix Tree)');
  });
});

describe('canonicalTitle', () => {
  it('strips leetcode suffixes', () => {
    expect(canonicalTitle('Two Sum (Leetcode 1)')).toBe('Two Sum');
    expect(canonicalTitle('Valid Palindrome (LC-125)')).toBe(
      'Valid Palindrome',
    );
    expect(canonicalTitle('Coin Change (LeetCode 322)')).toBe('Coin Change');
    expect(canonicalTitle('String to Integer (atoi) (LC-8)')).toBe(
      'String to Integer (atoi)',
    );
  });
});

describe('buildQuestions', () => {
  const qs = buildQuestions(ALL, {}, 10);

  it('builds unique questions with the answer among distinct choices', () => {
    expect(qs).toHaveLength(10);
    expect(new Set(qs.map((q) => q.title)).size).toBe(10);
    for (const q of qs) {
      expect(q.choices).toHaveLength(CHOICES_PER_QUESTION);
      expect(new Set(q.choices).size).toBe(CHOICES_PER_QUESTION);
      expect(q.choices).toContain(q.correct);
    }
  });

  it('favors patterns the user keeps missing', () => {
    // Everything mastered except union-find, so its weight is 3 against 1 for the rest.
    const stats: Record<
      string,
      { seen: number; correct: number; lastSeen: number; totalMs: number }
    > = {};
    for (const p of PATTERNS)
      stats[p.id] = { seen: 10, correct: 10, lastSeen: 0, totalMs: 0 };
    stats['union-find'] = { seen: 10, correct: 0, lastSeen: 0, totalMs: 0 };
    let seed = 12345;
    const rng = () =>
      (seed = (seed * 1664525 + 1013904223) % 4294967296) / 4294967296;
    let hits = 0;
    for (let i = 0; i < 500; i++) {
      if (buildQuestions(ALL, stats, 1, rng)[0].correct === 'union-find')
        hits++;
    }
    const pool = getDrillProblems(ALL);
    const base =
      pool.filter((p) => p.pattern === 'union-find').length / pool.length;
    expect(hits / 500).toBeGreaterThan(base * 2);
  });
});

describe('stats and misses', () => {
  const q = buildQuestions(ALL, {}, 1)[0];
  const wrong = q.choices.find((c) => c !== q.correct)!;

  it('records correct and wrong answers', () => {
    let s = recordAnswer(
      {},
      { question: q, picked: q.correct, elapsedMs: 1000 },
      5,
    );
    s = recordAnswer(s, { question: q, picked: wrong, elapsedMs: 2000 }, 6);
    expect(s[q.correct]).toMatchObject({
      seen: 2,
      correct: 1,
      lastSeen: 6,
      totalMs: 3000,
    });
  });

  it('summarizes only misses, including timeouts', () => {
    const out = summarizeMisses([
      { question: q, picked: q.correct, elapsedMs: 1 },
      { question: q, picked: null, elapsedMs: 30000 },
    ]);
    expect(out).toHaveLength(1);
    expect(out[0].misses).toHaveLength(1);
  });
});

describe('spaced review integration', () => {
  const q = buildQuestions(ALL, {}, 1)[0];
  const wrong = q.choices.find((c) => c !== q.correct)!;

  it('moves a pattern up a box on success and back to 0 on a miss', () => {
    let s = recordAnswer(
      {},
      { question: q, picked: q.correct, elapsedMs: 1 },
      5,
    );
    expect(s[q.correct].box).toBe(1);
    s = recordAnswer(s, { question: q, picked: q.correct, elapsedMs: 1 }, 6);
    expect(s[q.correct].box).toBe(2);
    s = recordAnswer(s, { question: q, picked: wrong, elapsedMs: 1 }, 7);
    expect(s[q.correct].box).toBe(0);
  });

  it('continues from an estimated box for stats saved before boxes existed', () => {
    const legacy = {
      [q.correct]: { seen: 5, correct: 5, lastSeen: 1, totalMs: 1 },
    };
    expect(
      recordAnswer(legacy, { question: q, picked: q.correct, elapsedMs: 1 })[
        q.correct
      ].box,
    ).toBe(3);
  });

  it('can restrict questions to chosen patterns while keeping distractors from others', () => {
    const only = ['hash-map', 'heap'];
    const qs = buildQuestions(ALL, {}, 6, Math.random, only);
    expect(qs.length).toBe(6);
    for (const x of qs) {
      expect(only).toContain(x.correct);
      expect(x.choices).toHaveLength(CHOICES_PER_QUESTION);
    }
  });
});
