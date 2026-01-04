'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Brain, Rocket, BookOpen, Target, Zap } from 'lucide-react';

export default function HomePage() {
  const router = useRouter();

  const features = [
    {
      icon: BookOpen,
      title: 'Structured Learning',
      description: 'Follow a carefully designed curriculum that builds your knowledge systematically.',
    },
    {
      icon: Code,
      title: 'Hands-On Practice',
      description: 'Solve LeetCode-style problems with detailed solutions and explanations.',
    },
    {
      icon: Brain,
      title: 'Concept Mastery',
      description: 'Deep dive into core concepts with interactive lessons and quizzes.',
    },
    {
      icon: Zap,
      title: 'Quick Reference',
      description: 'Access cheat sheets with code examples and complexity analysis.',
    },
    {
      icon: Target,
      title: 'Track Progress',
      description: 'Monitor your learning journey with points and completion tracking.',
    },
    {
      icon: Rocket,
      title: 'Interview Ready',
      description: 'Prepare for technical interviews with industry-standard problems.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Microleet Lite
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Master Data Structures, Algorithms, and Object-Oriented Programming through
              interactive lessons and hands-on practice
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-6 text-lg hover:opacity-90 transition-opacity"
                onClick={() => router.push('/leetcode')}
              >
                <Code className="mr-2 h-5 w-5" />
                Start Learning Data Structures
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg border-2 border-purple-600 text-purple-600 hover:bg-purple-50"
                onClick={() => router.push('/oop')}
              >
                <Brain className="mr-2 h-5 w-5" />
                Explore OOP Concepts
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive learning platform designed to help you master technical interview
            skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-2 hover:border-purple-200 hover:shadow-lg transition-all duration-200"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* LeetCode Path */}
            <Card className="bg-white/95 backdrop-blur hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-full bg-gradient-to-r from-blue-50 to-blue-100">
                    <Code className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl">Data Structures & Algorithms</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Master the fundamentals with 12 comprehensive topics
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    Arrays & Strings
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    Trees & Graphs
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    Stacks & Queues
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    Heaps & Tries
                  </div>
                </div>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  size="lg"
                  onClick={() => router.push('/leetcode')}
                >
                  Explore Data Structures
                </Button>
              </CardContent>
            </Card>

            {/* OOP Path */}
            <Card className="bg-white/95 backdrop-blur hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-full bg-gradient-to-r from-purple-50 to-purple-100">
                    <Brain className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-2xl">Object-Oriented Programming</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Learn OOP principles with 30+ in-depth topics
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    OOP Fundamentals
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    SOLID Principles
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    Design Patterns
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    Error Handling
                  </div>
                </div>
                <Button
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                  size="lg"
                  onClick={() => router.push('/oop')}
                >
                  Explore OOP Concepts
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready to Level Up Your Skills?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your journey today and master the concepts that top companies are looking for
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8"
              onClick={() => router.push('/leetcode')}
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
