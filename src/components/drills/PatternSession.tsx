'use client';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { CheckCircle2, XCircle, Clock, Timer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PATTERNS } from '@/data/drills/patterns';
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
  QUESTIONS_PER_SESSION,
  SECONDS_PER_QUESTION,
  buildQuestions,
  getPattern,
  loadStats,
  recordAnswer,
  saveStats,
  summarizeMisses,
  type Answer,
  type DrillQuestion,
  type PatternStats,
} from '@/utils/patternDrill';

const ALL_PROBLEMS = [
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

type Phase = 'intro' | 'question' | 'feedback' | 'done';

interface PatternSessionProps {
  /** Restrict questions to these patterns (used by spaced review). */
  onlyPatterns?: string[];
  count?: number;
  /** Shown on the start card. */
  introTitle?: string;
  introText?: string;
  startLabel?: string;
  /** Called with the updated stats after every answer. */
  onStatsChange?: (stats: PatternStats) => void;
}

export default function PatternSession({
  onlyPatterns,
  count = QUESTIONS_PER_SESSION,
  introTitle = '10 problems, about 5 minutes',
  introText = "You'll see a problem statement with no title and no solution. Choose the pattern you'd reach for first. Patterns you miss come up more often.",
  startLabel = 'Start',
  onStatsChange,
}: PatternSessionProps) {
  const [phase, setPhase] = useState<Phase>('intro');
  const [stats, setStats] = useState<PatternStats>({});
  const [questions, setQuestions] = useState<DrillQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [secondsLeft, setSecondsLeft] = useState(SECONDS_PER_QUESTION);
  const startedAt = useRef(0);
  const statsRef = useRef<PatternStats>({});

  useEffect(() => {
    const loaded = loadStats();
    statsRef.current = loaded;
    setStats(loaded);
  }, []);

  const question = questions[index];
  const lastAnswer = answers[answers.length - 1];

  const submit = useCallback(
    (picked: string | null) => {
      if (!question) return;
      const answer: Answer = {
        question,
        picked,
        elapsedMs: Math.min(
          Date.now() - startedAt.current,
          SECONDS_PER_QUESTION * 1000,
        ),
      };
      const next = recordAnswer(statsRef.current, answer);
      statsRef.current = next;
      saveStats(next);
      setStats(next);
      onStatsChange?.(next);
      setAnswers((a) => [...a, answer]);
      setPhase('feedback');
    },
    [question, onStatsChange],
  );

  // Countdown for the current question; timing out counts as a miss.
  useEffect(() => {
    if (phase !== 'question') return;
    const tick = () => {
      const left =
        SECONDS_PER_QUESTION -
        Math.floor((Date.now() - startedAt.current) / 1000);
      if (left <= 0) {
        setSecondsLeft(0);
        submit(null);
      } else {
        setSecondsLeft(left);
      }
    };
    const id = setInterval(tick, 250);
    return () => clearInterval(id);
  }, [phase, submit]);

  const startQuestion = () => {
    startedAt.current = Date.now();
    setSecondsLeft(SECONDS_PER_QUESTION);
    setPhase('question');
  };

  const startSession = () => {
    setQuestions(
      buildQuestions(
        ALL_PROBLEMS,
        statsRef.current,
        count,
        Math.random,
        onlyPatterns,
      ),
    );
    setAnswers([]);
    setIndex(0);
    startQuestion();
  };

  const next = () => {
    if (index + 1 >= questions.length) {
      setPhase('done');
    } else {
      setIndex(index + 1);
      startQuestion();
    }
  };

  const weakest = useMemo(
    () =>
      Object.entries(stats)
        .filter(([, s]) => s.seen >= 2)
        .map(([id, s]) => ({ id, rate: s.correct / s.seen, seen: s.seen }))
        .sort((a, b) => a.rate - b.rate)
        .slice(0, 3),
    [stats],
  );

  return (
    <div className="space-y-6">
      {phase === 'intro' && (
        <Card>
          <CardHeader>
            <CardTitle>{introTitle}</CardTitle>
            <CardDescription>{introText}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {weakest.length > 0 && (
              <div className="text-sm text-gray-700">
                <p className="font-medium mb-1">Your weakest patterns so far</p>
                <ul className="list-disc ml-5">
                  {weakest.map((w) => (
                    <li key={w.id}>
                      {getPattern(w.id).name}: {Math.round(w.rate * 100)}% over{' '}
                      {w.seen} tries
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <Button onClick={startSession} size="lg">
              {startLabel}
            </Button>
          </CardContent>
        </Card>
      )}

      {(phase === 'question' || phase === 'feedback') && question && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>
                Question {index + 1} of {questions.length}
              </span>
              {phase === 'question' ? (
                <span
                  className={`flex items-center gap-1 font-mono ${secondsLeft <= 5 ? 'text-red-600' : ''}`}
                  aria-live="off"
                >
                  <Timer className="h-4 w-4" />
                  {secondsLeft}s
                </span>
              ) : (
                lastAnswer && (
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {(lastAnswer.elapsedMs / 1000).toFixed(1)}s
                  </span>
                )
              )}
            </div>
            <div className="flex items-center gap-2 pt-2">
              <span className="text-xs rounded-full bg-gray-100 px-2 py-0.5 text-gray-700">
                {question.difficulty}
              </span>
              {phase === 'feedback' && (
                <CardTitle className="text-lg">{question.title}</CardTitle>
              )}
            </div>
            <p className="text-gray-800 pt-2">{question.description}</p>
          </CardHeader>
          <CardContent className="space-y-3">
            {question.choices.map((id) => {
              const isCorrect = id === question.correct;
              const isPicked = lastAnswer?.picked === id;
              const reveal = phase === 'feedback';
              const style = reveal
                ? isCorrect
                  ? 'border-green-400 bg-green-50'
                  : isPicked
                    ? 'border-red-400 bg-red-50'
                    : 'opacity-60'
                : 'hover:bg-gray-50';
              return (
                <button
                  key={id}
                  disabled={reveal}
                  onClick={() => submit(id)}
                  className={`w-full text-left border rounded-lg p-3 flex items-center gap-2 transition ${style}`}
                >
                  {reveal && isCorrect && (
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  )}
                  {reveal && isPicked && !isCorrect && (
                    <XCircle className="h-4 w-4 text-red-600" />
                  )}
                  <span className="font-medium">{getPattern(id).name}</span>
                </button>
              );
            })}

            {phase === 'feedback' && lastAnswer && (
              <div className="mt-4 space-y-3 text-sm">
                <p className="font-medium">
                  {lastAnswer.picked === null
                    ? `Time's up. It was ${getPattern(question.correct).name}.`
                    : lastAnswer.picked === question.correct
                      ? 'Correct.'
                      : `Not quite. You picked ${getPattern(lastAnswer.picked).name}; the answer is ${getPattern(question.correct).name}.`}
                </p>
                <p>
                  <span className="font-medium">The giveaway:</span>{' '}
                  {question.signal}
                </p>
                <p>
                  <span className="font-medium">
                    Use {getPattern(question.correct).name} when:
                  </span>{' '}
                  {getPattern(question.correct).cue}
                </p>
                {lastAnswer.picked &&
                  lastAnswer.picked !== question.correct && (
                    <p>
                      <span className="font-medium">
                        Use {getPattern(lastAnswer.picked).name} when:
                      </span>{' '}
                      {getPattern(lastAnswer.picked).cue}
                    </p>
                  )}
                <Button onClick={next}>
                  {index + 1 >= questions.length ? 'See results' : 'Next'}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {phase === 'done' && (
        <Results answers={answers} onRestart={startSession} />
      )}

      <Card className="bg-gray-50">
        <CardContent className="pt-6 text-xs text-gray-500">
          Covers {PATTERNS.length} patterns. Progress is saved in this browser
          only.
        </CardContent>
      </Card>
    </div>
  );
}

function Results({
  answers,
  onRestart,
}: {
  answers: Answer[];
  onRestart: () => void;
}) {
  const correct = answers.filter((a) => a.picked === a.question.correct);
  const avg =
    answers.reduce((s, a) => s + a.elapsedMs, 0) /
    Math.max(answers.length, 1) /
    1000;
  const misses = summarizeMisses(answers);

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {correct.length} / {answers.length} correct
        </CardTitle>
        <CardDescription>
          Average {avg.toFixed(1)}s per question
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {misses.length === 0 ? (
          <p className="text-sm text-gray-700">
            No misses this round. Go again for new problems.
          </p>
        ) : (
          <div className="space-y-3 text-sm">
            <p className="font-medium">What you missed</p>
            {misses.map(({ pattern, misses: list }) => (
              <div key={pattern.id} className="border rounded-lg p-3">
                <p className="font-medium">{pattern.name}</p>
                <p className="text-gray-700">{pattern.cue}</p>
                <ul className="list-disc ml-5 mt-2 text-gray-700">
                  {list.map((m: Answer) => (
                    <li key={m.question.title}>
                      <span className="font-medium">{m.question.title}</span>
                      {m.picked
                        ? ` (you said ${getPattern(m.picked).name})`
                        : ' (timed out)'}
                      : {m.question.signal}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        <Button onClick={onRestart}>Another round</Button>
      </CardContent>
    </Card>
  );
}
