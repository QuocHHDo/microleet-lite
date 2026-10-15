'use client';
import React from 'react';
import PatternSession from '@/components/drills/PatternSession';
import { SECONDS_PER_QUESTION } from '@/utils/patternDrill';

export default function PatternSpottingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <header className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Pattern Spotting</h1>
          <p className="text-gray-600 mt-2">Read the problem. Pick the approach in {SECONDS_PER_QUESTION} seconds.</p>
        </header>
        <PatternSession />
      </div>
    </div>
  );
}
