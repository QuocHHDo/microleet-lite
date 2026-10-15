'use client';
import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import PatternSession from '@/components/drills/PatternSession';
import { EDGE_DRILLS } from '@/data/drills/edgeCases';
import { PATTERNS } from '@/data/drills/patterns';
import {
  edgeSchedulable,
  loadStats as loadEdgeStats,
  type EdgeStats,
} from '@/utils/edgeCaseDrill';
import {
  loadStats as loadPatternStats,
  type PatternStats,
} from '@/utils/patternDrill';
import {
  describeDue,
  dueAt,
  dueQueue,
  isDue,
  INTERVAL_DAYS,
  boxOf,
} from '@/utils/spacedReview';

const MAX_REVIEW_QUESTIONS = 8;

export default function ReviewPage() {
  const [patternStats, setPatternStats] = useState<PatternStats | null>(null);
  const [edgeStats, setEdgeStats] = useState<EdgeStats>({});
  // The patterns this visit started with; fixed so the session isn't pulled out from under you.
  const [sessionPatterns, setSessionPatterns] = useState<string[]>([]);
  const [now, setNow] = useState(0);

  useEffect(() => {
    const p = loadPatternStats();
    const t = Date.now();
    setPatternStats(p);
    setEdgeStats(loadEdgeStats());
    setNow(t);
    setSessionPatterns(
      dueQueue(
        Object.entries(p).map(([id, stat]) => ({ id, stat })),
        t,
      ).map((d) => d.id),
    );
  }, []);

  const patternName = (id: string) =>
    PATTERNS.find((p) => p.id === id)?.name ?? id;

  const { duePatterns, upcomingPatterns, dueEdge, upcomingEdge } =
    useMemo(() => {
      const entries = Object.entries(patternStats ?? {})
        .filter(([id]) => PATTERNS.some((p) => p.id === id))
        .map(([id, stat]) => ({ id, stat }));
      const edgeEntries = EDGE_DRILLS.filter((d) => edgeStats[d.id]).map(
        (d) => ({
          id: d.id,
          title: d.title,
          stat: edgeSchedulable(edgeStats[d.id], d.categories.length),
        }),
      );
      return {
        duePatterns: dueQueue(entries, now),
        upcomingPatterns: entries
          .filter((e) => !isDue(e.stat, now))
          .sort((a, b) => dueAt(a.stat) - dueAt(b.stat)),
        dueEdge: dueQueue(edgeEntries, now),
        upcomingEdge: edgeEntries
          .filter((e) => !isDue(e.stat, now))
          .sort((a, b) => dueAt(a.stat) - dueAt(b.stat)),
      };
    }, [patternStats, edgeStats, now]);

  const loaded = patternStats !== null;
  const nothingStarted =
    loaded &&
    Object.keys(patternStats).length === 0 &&
    Object.keys(edgeStats).length === 0;
  const nothingDue = loaded && duePatterns.length === 0 && dueEdge.length === 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <header className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Review</h1>
          <p className="text-gray-600 mt-2">
            Patterns and edge cases come back after 1, 2, 4, 8, 16, then 32
            days. A miss starts them over.
          </p>
        </header>

        {!loaded && <p className="text-center text-gray-500">Loading…</p>}

        {nothingStarted && (
          <Card>
            <CardHeader>
              <CardTitle>Nothing to review yet</CardTitle>
              <CardDescription>
                Do a round of a drill first and it will show up here when
                it&apos;s time to revisit.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex gap-2">
              <Link href="/drills/pattern-spotting">
                <Button>Pattern spotting</Button>
              </Link>
              <Link href="/drills/edge-cases">
                <Button variant="outline">Edge cases</Button>
              </Link>
            </CardContent>
          </Card>
        )}

        {loaded &&
          !nothingStarted &&
          nothingDue &&
          sessionPatterns.length === 0 && (
            <Card>
              <CardHeader>
                <CardTitle>You&apos;re all caught up</CardTitle>
                <CardDescription>
                  Nothing is due. Come back when something shows up below.
                </CardDescription>
              </CardHeader>
            </Card>
          )}

        {sessionPatterns.length > 0 && (
          <div className="space-y-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Patterns due ({sessionPatterns.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1">
                  {sessionPatterns.map((id) => {
                    const stat = patternStats?.[id];
                    return (
                      <li key={id} className="flex justify-between">
                        <span className="font-medium">{patternName(id)}</span>
                        {stat && (
                          <span className="text-gray-500">
                            {Math.round((stat.correct / stat.seen) * 100)}% over{' '}
                            {stat.seen} tries, {describeDue(stat, now)}
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
            <PatternSession
              onlyPatterns={sessionPatterns}
              count={Math.min(
                MAX_REVIEW_QUESTIONS,
                Math.max(3, sessionPatterns.length * 2),
              )}
              introTitle="Review round"
              introText="Fresh problems on the patterns that are due. Get one right and it moves out to a longer gap; miss it and it comes back tomorrow."
              startLabel="Start review"
              onStatsChange={setPatternStats}
            />
          </div>
        )}

        {dueEdge.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Edge-case drills due ({dueEdge.length})
              </CardTitle>
              <CardDescription>
                A drill counts as passed only when you covered every edge case.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="divide-y border rounded-lg text-sm">
                {dueEdge.map(({ id, stat }) => {
                  const drill = EDGE_DRILLS.find((d) => d.id === id)!;
                  return (
                    <li
                      key={id}
                      className="flex items-center justify-between p-3"
                    >
                      <div>
                        <p className="font-medium">{drill.title}</p>
                        <p className="text-xs text-gray-500">
                          Last{' '}
                          {edgeStats[id].lastCovered ??
                            edgeStats[id].bestCovered}
                          /{drill.categories.length} covered,{' '}
                          {stat.lastSeen ? describeDue(stat, now) : 'due now'}
                        </p>
                      </div>
                      <Link href={`/drills/edge-cases?drill=${id}`}>
                        <Button size="sm" variant="outline">
                          Review
                        </Button>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </CardContent>
          </Card>
        )}

        {(upcomingPatterns.length > 0 || upcomingEdge.length > 0) && (
          <Card className="bg-gray-50">
            <CardHeader>
              <CardTitle className="text-base">Coming up</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1 text-gray-700">
                {upcomingPatterns.map(({ id, stat }) => (
                  <li key={id} className="flex justify-between">
                    <span>{patternName(id)}</span>
                    <span className="text-gray-500">
                      box {boxOf(stat) + 1}/{INTERVAL_DAYS.length},{' '}
                      {describeDue(stat, now)}
                    </span>
                  </li>
                ))}
                {upcomingEdge.map(({ id, title, stat }) => (
                  <li key={id} className="flex justify-between">
                    <span>{title} (edge cases)</span>
                    <span className="text-gray-500">
                      {describeDue(stat, now)}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
