'use client';
import React, { useEffect, useState } from 'react';
import { CheckCircle2, XCircle, AlertTriangle, Plus, Trash2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { EDGE_DRILLS, type EdgeDrill } from '@/data/drills/edgeCases';
import {
  evaluate,
  loadStats,
  recordAttempt,
  saveStats,
  type EdgeStats,
  type Evaluation,
  type TestRow,
} from '@/utils/edgeCaseDrill';

const emptyRows = (): TestRow[] => [1, 2, 3].map(() => ({ argsText: '', expectedText: '' }));
const show = (v: unknown) => JSON.stringify(v);

export default function EdgeCasesPage() {
  const [stats, setStats] = useState<EdgeStats>({});
  const [drill, setDrill] = useState<EdgeDrill | null>(null);
  const [rows, setRows] = useState<TestRow[]>(emptyRows());
  const [result, setResult] = useState<Evaluation | null>(null);
  const [checking, setChecking] = useState(false);

  useEffect(() => {
    setStats(loadStats());
    // /drills/edge-cases?drill=<id> opens that problem directly (used by the review page)
    const id = new URLSearchParams(window.location.search).get('drill');
    const wanted = EDGE_DRILLS.find((d) => d.id === id);
    if (wanted) {
      setDrill(wanted);
      setRows(emptyRows());
      setResult(null);
    }
  }, []);

  const start = (d: EdgeDrill) => {
    setDrill(d);
    setRows(emptyRows());
    setResult(null);
  };

  const randomDrill = () => start(EDGE_DRILLS[Math.floor(Math.random() * EDGE_DRILLS.length)]);

  const setRow = (i: number, patch: Partial<TestRow>) =>
    setRows((rs) => rs.map((r, k) => (k === i ? { ...r, ...patch } : r)));

  const check = async () => {
    if (!drill) return;
    setChecking(true);
    try {
      const ev = await evaluate(drill, rows);
      setResult(ev);
      const next = recordAttempt(loadStats(), drill.id, ev);
      saveStats(next);
      setStats(next);
    } finally {
      setChecking(false);
    }
  };

  const hasInput = rows.some((r) => r.argsText.trim() || r.expectedText.trim());

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <header className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Edge-Case Drill</h1>
          <p className="text-gray-600 mt-2">
            Write the tests before you write the solution. Then see which edge cases you missed.
          </p>
        </header>

        {!drill && (
          <Card>
            <CardHeader>
              <CardTitle>Pick a problem</CardTitle>
              <CardDescription>About 5 minutes each. You won&apos;t write any solution code.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button onClick={randomDrill}>Surprise me</Button>
              <ul className="divide-y border rounded-lg">
                {EDGE_DRILLS.map((d) => {
                  const s = stats[d.id];
                  return (
                    <li key={d.id} className="flex items-center justify-between p-3">
                      <div>
                        <p className="font-medium">{d.title}</p>
                        {s && (
                          <p className="text-xs text-gray-500">
                            Best {s.bestCovered}/{d.categories.length} edge cases, {s.attempts} attempt
                            {s.attempts === 1 ? '' : 's'}
                          </p>
                        )}
                      </div>
                      <Button size="sm" variant="outline" onClick={() => start(d)}>
                        Start
                      </Button>
                    </li>
                  );
                })}
              </ul>
            </CardContent>
          </Card>
        )}

        {drill && !result && (
          <Card>
            <CardHeader>
              <CardTitle>{drill.title}</CardTitle>
              <CardDescription className="text-gray-800">{drill.statement}</CardDescription>
              <p className="font-mono text-sm bg-gray-100 rounded px-2 py-1 w-fit">{drill.signature}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-gray-700">
                <p>
                  Write the tests you&apos;d want before trusting a solution. <strong>Input</strong> is a JSON array of
                  the arguments in order, for example <code className="bg-gray-100 px-1 rounded">{drill.inputExample}</code>
                  . <strong>Expected</strong> is the JSON value the function should return.
                </p>
                <p className="mt-1">Aim for cases that would break a careless solution, not just typical ones.</p>
              </div>

              <div className="space-y-2">
                {rows.map((r, i) => (
                  <div key={i} className="flex gap-2 items-center">
                    <Input
                      aria-label={`Test ${i + 1} input`}
                      placeholder={`Input, e.g. ${drill.inputExample}`}
                      value={r.argsText}
                      onChange={(e) => setRow(i, { argsText: e.target.value })}
                      className="font-mono text-sm"
                    />
                    <Input
                      aria-label={`Test ${i + 1} expected output`}
                      placeholder="Expected"
                      value={r.expectedText}
                      onChange={(e) => setRow(i, { expectedText: e.target.value })}
                      className="font-mono text-sm w-40"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label={`Remove test ${i + 1}`}
                      onClick={() => setRows((rs) => (rs.length > 1 ? rs.filter((_, k) => k !== i) : rs))}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setRows((rs) => [...rs, { argsText: '', expectedText: '' }])}
                  className="gap-1"
                >
                  <Plus className="h-4 w-4" /> Add test
                </Button>
              </div>

              <div className="flex gap-2">
                <Button onClick={check} disabled={!hasInput || checking} className="gap-2">
                  {checking && <Loader2 className="h-4 w-4 animate-spin" />}
                  Check my tests
                </Button>
                <Button variant="ghost" onClick={() => setDrill(null)}>
                  Back
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {drill && result && (
          <Results
            drill={drill}
            result={result}
            rows={rows.filter((r) => r.argsText.trim() || r.expectedText.trim())}
            onRetry={() => setResult(null)}
            onNew={() => setDrill(null)}
          />
        )}
      </div>
    </div>
  );
}

function Results({
  drill,
  result,
  rows,
  onRetry,
  onNew,
}: {
  drill: EdgeDrill;
  result: Evaluation;
  rows: TestRow[];
  onRetry: () => void;
  onNew: () => void;
}) {
  const missed = result.categories.filter((c) => c.rows.length === 0);
  const problems = result.rows
    .map((status, i) => ({ status, i }))
    .filter(({ status }) => status.kind !== 'correct');

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>
            You covered {result.covered} of {result.total} edge cases
          </CardTitle>
          <CardDescription>{drill.title}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          {result.categories.map(({ category, rows: hit }) => (
            <div key={category.id} className="flex items-start gap-2 text-sm">
              {hit.length > 0 ? (
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
              ) : (
                <XCircle className="h-4 w-4 text-red-600 mt-0.5 shrink-0" />
              )}
              <span className={hit.length > 0 ? 'text-gray-700' : 'font-medium'}>
                {category.label}
                {hit.length > 0 && <span className="text-gray-500"> (your test {hit.map((i) => i + 1).join(', ')})</span>}
              </span>
            </div>
          ))}
        </CardContent>
      </Card>

      {problems.length > 0 && (
        <Card className="border-amber-300">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-600" /> Problems with your tests
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            {problems.map(({ status, i }) => (
              <div key={i} className="border rounded-lg p-3">
                <p className="font-medium">Test {i + 1}</p>
                <p className="font-mono text-xs text-gray-600 break-all">
                  {rows[i].argsText} → {rows[i].expectedText || '(no expected output)'}
                </p>
                {status.kind === 'wrong-expectation' && (
                  <p className="text-amber-800 mt-1">
                    The correct output for this input is <code className="font-mono">{show(status.answer)}</code>, not{' '}
                    <code className="font-mono">{show(status.expected)}</code>. Check the problem statement.
                  </p>
                )}
                {(status.kind === 'invalid' || status.kind === 'reference-error') && (
                  <p className="text-amber-800 mt-1">{status.message}</p>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {missed.length > 0 ? (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">What you missed</CardTitle>
            <CardDescription>A test for each one, and why an interviewer would ask.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            {missed.map(({ category }) => (
              <div key={category.id} className="border rounded-lg p-3 space-y-1">
                <p className="font-medium">{category.label}</p>
                <p className="font-mono text-xs bg-gray-100 rounded px-2 py-1 break-all">
                  {show(category.hidden.input)} → {show(category.hidden.expected)}
                </p>
                <p className="text-gray-700">{category.why}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="pt-6 text-sm text-gray-700">
            You hit every edge case we know of for this problem. Try another one.
          </CardContent>
        </Card>
      )}

      <div className="flex gap-2">
        <Button onClick={onRetry}>Edit my tests</Button>
        <Button variant="outline" onClick={onNew}>
          Another problem
        </Button>
      </div>
    </div>
  );
}
