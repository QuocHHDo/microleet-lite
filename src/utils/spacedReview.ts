export const DAY_MS = 24 * 60 * 60 * 1000;

/** Days to wait after a success, indexed by Leitner box. A miss sends the item back to box 0. */
export const INTERVAL_DAYS = [1, 2, 4, 8, 16, 32];
export const MAX_BOX = INTERVAL_DAYS.length - 1;

export interface Schedulable {
  seen: number;
  correct: number;
  lastSeen: number;
  box?: number;
}

/** Stats saved before boxes existed: estimate a box from the overall record. */
export function legacyBox(s: { seen: number; correct: number }): number {
  if (s.seen === 0) return 0;
  const rate = s.correct / s.seen;
  if (s.seen >= 3 && rate >= 0.8) return 2;
  return rate >= 0.5 ? 1 : 0;
}

export const boxOf = (s: Schedulable) => s.box ?? legacyBox(s);

export const nextBox = (box: number, wasCorrect: boolean) => (wasCorrect ? Math.min(box + 1, MAX_BOX) : 0);

export const dueAt = (s: Schedulable) => s.lastSeen + INTERVAL_DAYS[boxOf(s)] * DAY_MS;

/** Anything practiced at least once is on the schedule; never-seen items are "new", not "due". */
export const isDue = (s: Schedulable, now = Date.now()) => s.seen > 0 && now >= dueAt(s);

/** How many intervals past due (0 = just due). Used to order the review queue. */
export const overdueRatio = (s: Schedulable, now = Date.now()) =>
  (now - dueAt(s)) / (INTERVAL_DAYS[boxOf(s)] * DAY_MS);

/** Human text such as "due now", "1 day overdue", "due in 3 days". */
export function describeDue(s: Schedulable, now = Date.now()): string {
  const days = Math.round((dueAt(s) - now) / DAY_MS);
  if (now >= dueAt(s)) {
    const over = Math.floor((now - dueAt(s)) / DAY_MS);
    return over < 1 ? 'due now' : `${over} day${over === 1 ? '' : 's'} overdue`;
  }
  return `due in ${Math.max(days, 1)} day${Math.max(days, 1) === 1 ? '' : 's'}`;
}

/** Due items first, most overdue first; ties go to the weaker record. */
export function dueQueue<T extends Schedulable>(items: { id: string; stat: T }[], now = Date.now()) {
  return items
    .filter(({ stat }) => isDue(stat, now))
    .sort(
      (a, b) =>
        overdueRatio(b.stat, now) - overdueRatio(a.stat, now) ||
        a.stat.correct / a.stat.seen - b.stat.correct / b.stat.seen,
    );
}
