# Microleet Vision

## Why this exists

Microleet exists to help software engineers do better in coding interviews. It is free and needs no signup.

## The problem

Studying for coding interviews is a solved problem. NeetCode, Striver's A2Z, LeetCode and AI tutors already teach the material, and most of them do it for free.

Yet well-prepared candidates still fail. Usually it isn't because they don't know the material. It's because they can't **perform** under interview conditions:

- They freeze on an unfamiliar problem and can't map it to a pattern they know.
- They start coding without asking clarifying questions.
- They miss edge cases: empty input, duplicates, negatives, overflow.
- They can't state and justify time and space complexity.
- They run out of time, or code in silence.
- They stall on follow-up questions.

Existing resources teach the material. **Microleet trains the performance.**

## What Microleet is

**Interview practice, not interview study.** Short, focused drills that each train one interview skill, built on the problems we already have:

| Drill | Trains |
| --- | --- |
| **Pattern spotting** | Reading a problem and picking the approach in 30 seconds |
| **Clarifying questions** | Surfacing constraints and assumptions before coding |
| **Edge cases** | Writing the tests before the solution |
| **Complexity** | Stating Big-O *and* the reasoning behind it |
| **Timed mock round** | Pacing through clarify, approach, code and test in 45 minutes |
| **Think-aloud** (later) | Explaining your approach out loud |

The existing lessons, concepts and cheat sheets stay as **reference material**: something to look up while you drill, not the main product.

## Principles

1. **Practice over content.** A new drill beats a new lesson.
2. **Short sessions.** A useful session takes 5–10 minutes.
3. **Free and frictionless.** No signup, no paywall, no ads. Progress stays in the browser.
4. **Complement the big resources, don't compete with them.** Learn on NeetCode or Striver. Sharpen on Microleet.
5. **Honest feedback.** Show the user exactly what they missed, not just pass or fail.

## What we stop doing

- Writing new long-form lessons or adding new topics.
- Adding features that don't directly train an interview skill.
- Adding dependencies "just in case."

## How we measure success

Not traffic. The measure is **whether people perform better in real interviews**.

First milestone: 5–10 people who are actively interviewing use Microleet for two weeks and report whether it helped.

## Near-term roadmap

1. **Make the code runner reliable.** Run code in a Web Worker with a timeout, and have each problem declare its entry point.
2. **Pattern-spotting drill.** Build it on the existing problem data.
3. **Edge-case drill.** Users write tests first, then see the hidden cases they missed.
4. **Spaced review.** Resurface patterns the user hasn't practiced recently.
5. **Timed mock round.**

Anything not on this list waits until these ship.
