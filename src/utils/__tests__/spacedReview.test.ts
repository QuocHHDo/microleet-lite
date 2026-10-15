import {
  DAY_MS,
  INTERVAL_DAYS,
  MAX_BOX,
  describeDue,
  dueAt,
  dueQueue,
  isDue,
  legacyBox,
  nextBox,
} from '../spacedReview';

const T0 = 1_000_000 * DAY_MS;

describe('boxes', () => {
  it('advances on success up to the max and resets on a miss', () => {
    expect(nextBox(0, true)).toBe(1);
    expect(nextBox(MAX_BOX, true)).toBe(MAX_BOX);
    expect(nextBox(4, false)).toBe(0);
  });

  it('estimates a box for stats saved before review existed', () => {
    expect(legacyBox({ seen: 0, correct: 0 })).toBe(0);
    expect(legacyBox({ seen: 5, correct: 5 })).toBe(2);
    expect(legacyBox({ seen: 2, correct: 2 })).toBe(1);
    expect(legacyBox({ seen: 4, correct: 1 })).toBe(0);
  });
});

describe('due dates', () => {
  it('is due once the box interval has elapsed', () => {
    const s = { seen: 1, correct: 1, lastSeen: T0, box: 2 };
    expect(dueAt(s)).toBe(T0 + INTERVAL_DAYS[2] * DAY_MS);
    expect(isDue(s, T0 + 3 * DAY_MS)).toBe(false);
    expect(isDue(s, T0 + 4 * DAY_MS)).toBe(true);
  });

  it('never treats an unseen item as due', () => {
    expect(isDue({ seen: 0, correct: 0, lastSeen: 0 }, T0)).toBe(false);
  });

  it('describes timing', () => {
    const s = { seen: 1, correct: 1, lastSeen: T0, box: 0 };
    expect(describeDue(s, T0 + DAY_MS)).toBe('due now');
    expect(describeDue(s, T0 + 3 * DAY_MS)).toBe('2 days overdue');
    expect(describeDue(s, T0 + 0.2 * DAY_MS)).toBe('due in 1 day');
  });
});

describe('dueQueue', () => {
  it('lists only due items, most overdue first, then weakest', () => {
    const now = T0 + 10 * DAY_MS;
    const q = dueQueue(
      [
        {
          id: 'fresh',
          stat: { seen: 3, correct: 3, lastSeen: now - DAY_MS / 2, box: 0 },
        },
        {
          id: 'slightly',
          stat: { seen: 3, correct: 3, lastSeen: now - 2 * DAY_MS, box: 0 },
        },
        {
          id: 'very',
          stat: { seen: 3, correct: 3, lastSeen: now - 8 * DAY_MS, box: 0 },
        },
        {
          id: 'very-weak',
          stat: { seen: 3, correct: 0, lastSeen: now - 8 * DAY_MS, box: 0 },
        },
      ],
      now,
    );
    expect(q.map((x) => x.id)).toEqual(['very-weak', 'very', 'slightly']);
  });
});
