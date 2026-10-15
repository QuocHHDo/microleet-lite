'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { CheckCircle2, XCircle, Loader2, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { EDGE_DRILLS, type EdgeDrill } from '@/data/drills/edgeCases';
import { MOCK_INFO } from '@/data/drills/mockRounds';
import {
  PHASES,
  TOTAL_SECONDS,
  addRecord,
  buildSuite,
  checkComplexity,
  detectClarifyTopics,
  formatClock,
  loadHistory,
  paceOf,
  pickDrill,
  runSuite,
  saveHistory,
  starterCode,
  summarizeSuite,
  type MockRecord,
  type SuiteResult,
} from '@/utils/mockRound';

type Stage = 'intro' | 'running' | 'finishing' | 'done';

const show = (v: unknown) => JSON.stringify(v);
const textareaClass =
  'w-full rounded-md border border-input bg-transparent p-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring';

export default function MockRoundPage() {
  const [history, setHistory] = useState<MockRecord[]>([]);
  const [stage, setStage] = useState<Stage>('intro');
  const [drill, setDrill] = useState<EdgeDrill | null>(null);
  const [phaseIdx, setPhaseIdx] = useState(0);
  const [now, setNow] = useState(0);
  const [phaseSeconds, setPhaseSeconds] = useState<number[]>([0, 0, 0, 0]);
  const [clarifyText, setClarifyText] = useState('');
  const [approachText, setApproachText] = useState('');
  const [timeAns, setTimeAns] = useState('');
  const [spaceAns, setSpaceAns] = useState('');
  const [code, setCode] = useState('');
  const [results, setResults] = useState<SuiteResult[] | null>(null);
  const [running, setRunning] = useState(false);
  const [asked, setAsked] = useState<boolean[]>([]);

  const roundStart = useRef(0);
  const phaseStart = useRef(0);
  const finishing = useRef(false);
  const latest = useRef({
    phaseIdx: 0,
    phaseSeconds: [0, 0, 0, 0],
    code: '',
    clarifyText: '',
    timeAns: '',
    spaceAns: '',
  });
  latest.current = {
    phaseIdx,
    phaseSeconds,
    code,
    clarifyText,
    timeAns,
    spaceAns,
  };

  useEffect(() => setHistory(loadHistory()), []);

  const info = drill ? MOCK_INFO[drill.id] : null;

  const start = () => {
    const d = pickDrill(history);
    const t = Date.now();
    setDrill(d);
    setCode(starterCode(d));
    setClarifyText('');
    setApproachText('');
    setTimeAns('');
    setSpaceAns('');
    setResults(null);
    setPhaseSeconds([0, 0, 0, 0]);
    setPhaseIdx(0);
    setNow(t);
    roundStart.current = t;
    phaseStart.current = t;
    finishing.current = false;
    setStage('running');
  };

  const finish = useCallback(async () => {
    if (finishing.current || !drill || !info) return;
    finishing.current = true;
    const t = Date.now();
    const cur = latest.current;
    const seconds = [...cur.phaseSeconds];
    seconds[cur.phaseIdx] = (t - phaseStart.current) / 1000;
    setPhaseSeconds(seconds);
    setStage('finishing');

    const suite = buildSuite(drill, info);
    const full = await runSuite(cur.code, drill, suite);
    setResults(full);

    const detected = detectClarifyTopics(cur.clarifyText, info.clarify);
    setAsked(detected);
    const ex = summarizeSuite(full, 'example');
    const edge = summarizeSuite(full, 'edge');
    const record: MockRecord = {
      drillId: drill.id,
      title: drill.title,
      date: t,
      phaseSeconds: seconds,
      clarifyAsked: detected.filter(Boolean).length,
      clarifyTotal: info.clarify.length,
      timeVerdict: checkComplexity(cur.timeAns, info.time),
      spaceVerdict: checkComplexity(cur.spaceAns, info.space),
      examplesPassed: ex.passed,
      examplesTotal: ex.total,
      edgePassed: edge.passed,
      edgeTotal: edge.total,
    };
    setHistory((h) => {
      const next = addRecord(h, record);
      saveHistory(next);
      return next;
    });
    setStage('done');
  }, [drill, info]);

  // Clock: ticks while running and ends the round at 45:00.
  useEffect(() => {
    if (stage !== 'running') return;
    const id = setInterval(() => {
      const t = Date.now();
      setNow(t);
      if ((t - roundStart.current) / 1000 >= TOTAL_SECONDS) finish();
    }, 500);
    return () => clearInterval(id);
  }, [stage, finish]);

  const advance = () => {
    const t = Date.now();
    const seconds = [...phaseSeconds];
    seconds[phaseIdx] = (t - phaseStart.current) / 1000;
    if (phaseIdx >= PHASES.length - 1) {
      finish();
      return;
    }
    setPhaseSeconds(seconds);
    setPhaseIdx(phaseIdx + 1);
    phaseStart.current = t;
    setNow(t);
  };

  const runTests = async (onlyExamples: boolean) => {
    if (!drill || !info) return;
    setRunning(true);
    try {
      const suite = buildSuite(drill, info).filter(
        (t) => !onlyExamples || t.kind === 'example',
      );
      setResults(await runSuite(code, drill, suite));
    } finally {
      setRunning(false);
    }
  };

  const toggleAsked = (i: number) => {
    const next = asked.map((a, k) => (k === i ? !a : a));
    setAsked(next);
    setHistory((h) => {
      if (!h.length) return h;
      const updated = [
        { ...h[0], clarifyAsked: next.filter(Boolean).length },
        ...h.slice(1),
      ];
      saveHistory(updated);
      return updated;
    });
  };

  const phase = PHASES[phaseIdx];
  const phaseElapsed = (now - phaseStart.current) / 1000;
  const phaseRemaining = phase.minutes * 60 - phaseElapsed;
  const totalRemaining = TOTAL_SECONDS - (now - roundStart.current) / 1000;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <header className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Timed Mock Round</h1>
          <p className="text-gray-600 mt-2">
            45 minutes: clarify, approach, code, test. Same order as a real
            interview.
          </p>
        </header>

        {stage === 'intro' && (
          <>
            <Card>
              <CardHeader>
                <CardTitle>How it works</CardTitle>
                <CardDescription>
                  You get one problem and a clock. Each stage has a time budget;
                  the clock keeps running if you go over, just like the real
                  thing.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-gray-700">
                <ul className="divide-y border rounded-lg">
                  {PHASES.map((p) => (
                    <li key={p.id} className="flex justify-between gap-4 p-3">
                      <span>
                        <span className="font-medium">{p.label}</span>:{' '}
                        {p.instruction}
                      </span>
                      <span className="text-gray-500 shrink-0">
                        {p.minutes} min
                      </span>
                    </li>
                  ))}
                </ul>
                <p>
                  Code runs in JavaScript/TypeScript. Nothing is graded until
                  the end, then you get a debrief.
                </p>
                <Button size="lg" onClick={start}>
                  Start 45-minute round
                </Button>
              </CardContent>
            </Card>
            {history.length > 0 && <History history={history} />}
          </>
        )}

        {(stage === 'running' || stage === 'finishing') && drill && info && (
          <>
            <Card className="sticky top-2 z-10">
              <CardContent className="pt-4 space-y-2">
                <div className="flex gap-1">
                  {PHASES.map((p, i) => (
                    <div
                      key={p.id}
                      className={`flex-1 rounded px-2 py-1 text-center text-xs ${
                        i === phaseIdx
                          ? 'bg-blue-600 text-white'
                          : i < phaseIdx
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {p.label}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between font-mono text-sm">
                  <span className={phaseRemaining < 0 ? 'text-red-600' : ''}>
                    {phase.label}:{' '}
                    {phaseRemaining < 0
                      ? `+${formatClock(phaseRemaining)} over`
                      : `${formatClock(phaseRemaining)} left`}
                  </span>
                  <span className={totalRemaining < 300 ? 'text-red-600' : ''}>
                    Total {formatClock(Math.max(totalRemaining, 0))} left
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{drill.title}</CardTitle>
                <CardDescription className="text-gray-800">
                  {drill.statement}
                </CardDescription>
                <p className="font-mono text-sm bg-gray-100 rounded px-2 py-1 w-fit">
                  {drill.signature}
                </p>
              </CardHeader>
              {phaseIdx >= 2 && (
                <CardContent className="text-sm font-mono space-y-1">
                  {info.examples.map((e, i) => (
                    <p key={i}>
                      Example {i + 1}: {show(e.input)} → {show(e.expected)}
                    </p>
                  ))}
                </CardContent>
              )}
            </Card>

            {stage === 'finishing' ? (
              <Card>
                <CardContent className="pt-6 flex items-center gap-2 text-sm">
                  <Loader2 className="h-4 w-4 animate-spin" /> Running your
                  solution against everything…
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{phase.label}</CardTitle>
                  <CardDescription>{phase.instruction}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {phase.id === 'clarify' && (
                    <textarea
                      aria-label="Clarifying questions"
                      className={textareaClass}
                      rows={6}
                      placeholder={
                        'Can the input be empty?\nWhat is the largest input size?'
                      }
                      value={clarifyText}
                      onChange={(e) => setClarifyText(e.target.value)}
                    />
                  )}

                  {phase.id === 'approach' && (
                    <>
                      <textarea
                        aria-label="Approach"
                        className={textareaClass}
                        rows={7}
                        placeholder="Brute force first, then the improvement. What data structure and why?"
                        value={approachText}
                        onChange={(e) => setApproachText(e.target.value)}
                      />
                      <div className="flex gap-2">
                        <Input
                          aria-label="Time complexity"
                          placeholder="Time, e.g. O(n)"
                          value={timeAns}
                          onChange={(e) => setTimeAns(e.target.value)}
                        />
                        <Input
                          aria-label="Space complexity"
                          placeholder="Space, e.g. O(1)"
                          value={spaceAns}
                          onChange={(e) => setSpaceAns(e.target.value)}
                        />
                      </div>
                    </>
                  )}

                  {(phase.id === 'code' || phase.id === 'test') && (
                    <>
                      <div className="border rounded-md overflow-hidden">
                        <CodeMirror
                          value={code}
                          height="320px"
                          extensions={[javascript({ typescript: true })]}
                          onChange={setCode}
                          theme="light"
                        />
                      </div>
                      <Button
                        onClick={() => runTests(phase.id === 'code')}
                        disabled={running}
                        className="gap-2"
                      >
                        {running ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <Play className="h-4 w-4" />
                        )}
                        {phase.id === 'code'
                          ? 'Run examples'
                          : 'Run full suite'}
                      </Button>
                      {results && <SuiteList results={results} compact />}
                    </>
                  )}

                  <Button
                    onClick={advance}
                    variant={
                      phaseIdx === PHASES.length - 1 ? 'default' : 'outline'
                    }
                  >
                    {phaseIdx === PHASES.length - 1
                      ? 'Finish round'
                      : `Done with ${phase.label.toLowerCase()}, next`}
                  </Button>
                </CardContent>
              </Card>
            )}
          </>
        )}

        {stage === 'done' && drill && info && results && (
          <Debrief
            drill={drill}
            info={info}
            phaseSeconds={phaseSeconds}
            clarifyText={clarifyText}
            approachText={approachText}
            timeAns={timeAns}
            spaceAns={spaceAns}
            asked={asked}
            onToggleAsked={toggleAsked}
            results={results}
            onAgain={() => setStage('intro')}
          />
        )}
      </div>
    </div>
  );
}

function SuiteList({
  results,
  compact = false,
}: {
  results: SuiteResult[];
  compact?: boolean;
}) {
  return (
    <div className="space-y-2 text-sm">
      {results.map(({ test, result }, i) => (
        <div
          key={i}
          className={`border rounded-lg p-2 ${result.passed ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}
        >
          <div className="flex items-center gap-2">
            {result.passed ? (
              <CheckCircle2 className="h-4 w-4 text-green-600" />
            ) : (
              <XCircle className="h-4 w-4 text-red-600" />
            )}
            <span className="font-medium">{test.label}</span>
          </div>
          {!result.passed && (
            <div className="font-mono text-xs mt-1 space-y-0.5">
              <p>Input: {show(test.input)}</p>
              <p>Expected: {show(test.expected)}</p>
              <p>
                {result.error
                  ? `Error: ${result.error}`
                  : `Got: ${show(result.actual)}`}
              </p>
              {!compact && test.why && (
                <p className="font-sans text-gray-700 pt-1">{test.why}</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

const verdictText = {
  match: 'Matches the reference.',
  differs: 'Differs from the reference. Check yours is equivalent.',
  blank: 'You left this blank.',
} as const;

function Debrief({
  drill,
  info,
  phaseSeconds,
  clarifyText,
  approachText,
  timeAns,
  spaceAns,
  asked,
  onToggleAsked,
  results,
  onAgain,
}: {
  drill: EdgeDrill;
  info: (typeof MOCK_INFO)[string];
  phaseSeconds: number[];
  clarifyText: string;
  approachText: string;
  timeAns: string;
  spaceAns: string;
  asked: boolean[];
  onToggleAsked: (i: number) => void;
  results: SuiteResult[];
  onAgain: () => void;
}) {
  const ex = summarizeSuite(results, 'example');
  const edge = summarizeSuite(results, 'edge');
  const used = phaseSeconds.reduce((a, b) => a + b, 0);
  const timeVerdict = checkComplexity(timeAns, info.time);
  const spaceVerdict = checkComplexity(spaceAns, info.space);
  const failures = results.filter((r) => !r.result.passed);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Round complete: {drill.title}</CardTitle>
          <CardDescription>
            {formatClock(used)} of 45:00 used. Examples {ex.passed}/{ex.total},
            edge cases {edge.passed}/{edge.total}.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Pacing</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="text-sm divide-y border rounded-lg">
            {PHASES.map((p, i) => {
              const pace =
                phaseSeconds[i] === 0
                  ? null
                  : paceOf(phaseSeconds[i], p.minutes * 60);
              return (
                <li key={p.id} className="flex justify-between p-3">
                  <span className="font-medium">{p.label}</span>
                  <span className="text-gray-700">
                    {formatClock(phaseSeconds[i])} of {p.minutes}:00
                    <span
                      className={`ml-2 ${pace === 'over' ? 'text-red-600' : 'text-gray-500'}`}
                    >
                      {pace === null
                        ? 'not reached'
                        : pace === 'over'
                          ? 'over budget'
                          : pace === 'under'
                            ? 'quick'
                            : 'on pace'}
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Clarifying questions</CardTitle>
          <CardDescription>
            Matched by keyword, so correct any we got wrong.{' '}
            {asked.filter(Boolean).length} of {info.clarify.length} covered.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          {info.clarify.map((t, i) => (
            <label
              key={i}
              className="flex items-start gap-2 border rounded-lg p-2"
            >
              <input
                type="checkbox"
                className="mt-1"
                checked={asked[i] ?? false}
                onChange={() => onToggleAsked(i)}
              />
              <span>
                <span className="font-medium">{t.question}</span>
                <span className="block text-gray-600">{t.why}</span>
              </span>
            </label>
          ))}
          {clarifyText.trim() && (
            <div className="text-gray-600">
              <p className="font-medium">What you wrote</p>
              <p className="whitespace-pre-wrap">{clarifyText}</p>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Approach</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div>
            <p className="font-medium">Reference approach</p>
            <p className="text-gray-700">{info.approach}</p>
          </div>
          <div>
            <p className="font-medium">What you wrote</p>
            <p className="whitespace-pre-wrap text-gray-700">
              {approachText.trim() || '(nothing)'}
            </p>
          </div>
          <div className="space-y-1">
            <p>
              <span className="font-medium">Time:</span> you said{' '}
              {timeAns.trim() || '(blank)'}, reference {info.time[0]}.{' '}
              {verdictText[timeVerdict]}
            </p>
            <p>
              <span className="font-medium">Space:</span> you said{' '}
              {spaceAns.trim() || '(blank)'}, reference {info.space[0]}.{' '}
              {verdictText[spaceVerdict]}
            </p>
            {info.complexityNote && (
              <p className="text-gray-600">{info.complexityNote}</p>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Your solution</CardTitle>
          <CardDescription>
            {failures.length === 0
              ? 'Every example and edge case passed.'
              : `${failures.length} of ${results.length} tests failed.`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SuiteList results={results} />
        </CardContent>
      </Card>

      <div className="flex gap-2">
        <Button onClick={onAgain}>Done</Button>
      </div>
    </div>
  );
}

function History({ history }: { history: MockRecord[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Recent rounds</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="text-sm divide-y border rounded-lg">
          {history.slice(0, 5).map((r) => (
            <li key={r.date} className="p-3 flex justify-between gap-4">
              <span>
                <span className="font-medium">{r.title}</span>
                <span className="block text-xs text-gray-500">
                  {new Date(r.date).toLocaleDateString()}
                </span>
              </span>
              <span className="text-right text-gray-700">
                Edge cases {r.edgePassed}/{r.edgeTotal}
                <span className="block text-xs text-gray-500">
                  Clarify {r.clarifyAsked}/{r.clarifyTotal},{' '}
                  {Math.round(r.phaseSeconds.reduce((a, b) => a + b, 0) / 60)}{' '}
                  min
                </span>
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
