'use client';
import React, { useState } from 'react';
import '../../styles/globals.css';
import {
  TreePine,
  Puzzle,
  Settings,
  ChevronDown,
  ChevronUp,
  Search,
  ArrowRight,
  Boxes,
  Lightbulb,
  Calculator,
  TrendingUp,
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LanguageSelector } from '@/components/LanguageSelector';
import { useRouter } from 'next/navigation';

interface RoadmapSection {
  title: string;
  icon: any;
  description?: string;
  items: string[];
  progress: number;
}

const LeetcodePage: React.FC = () => {
  const router = useRouter();
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [completedItems, setCompletedItems] = useState<Set<string>>(new Set());

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section],
    );
  };

  const navigateToTopic = (topic: string) => {
    const formattedTopic = topic.toLowerCase().replace(/\s+/g, '-');
    router.push(`/leetcode/topics/${formattedTopic}`);
  };

  const roadmapSections: RoadmapSection[] = [
    {
      title: '1. Fundamentals of Data Structures',
      icon: TreePine,
      description:
        'Master the building blocks of programming and problem-solving',
      items: [
        'Arrays',
        'Strings',
        'Hash Maps',
        'Hash Sets',
        'Linked Lists',
        'Stacks',
        'Queues',
        'Trees',
        'Heaps / Priority Queues',
        'Tries',
        'Graphs',
        'Union-Find',
      ],
      progress: 0,
    },
    // {
    //   title: '2. Essential Problem-Solving Patterns',
    //   icon: faPuzzlePiece,
    //   description: 'Learn fundamental techniques for solving algorithmic problems',
    //   items: [
    //     'Two Pointers',
    //     'Sliding Window',
    //     'Binary Search',
    //     'Fast and Slow Pointers',
    //     'Merge Intervals',
    //     'Cyclic Sort',
    //     'In-place Reversal',
    //     'Breadth-First Search',
    //     'Depth-First Search',
    //     'Recursion',
    //     'Greedy Algorithm',
    //     'Backtracking'
    //   ],
    //   progress: 0

    // },
    // {
    //   title: '3. Advanced Data Structure Operations',
    //   icon: faCubes,
    //   description: 'Deep dive into complex operations and manipulations',
    //   items: [
    //     'Matrix Operations',
    //     'Bit Manipulation',
    //     'Complex Tree Operations',
    //     'Advanced Graph Algorithms',
    //     'Trie Operations',
    //     'Union Find',
    //     'Monotonic Stack/Queue',
    //     'Segment Trees',
    //     'Binary Index Trees',
    //     'Suffix Trees/Arrays'
    //   ],
    //   progress: 0

    // },
    {
      title: '2. Dynamic Programming',
      icon: TrendingUp,
      description: 'Master the art of solving problems through optimal substructure',
      items: [
        'Dynamic Programming',
      ],
      progress: 0
    },
    // {
    //   title: '5. System Design Concepts',
    //   icon: faCogs,
    //   description: 'Learn to design scalable systems and optimize solutions',
    //   items: [
    //     'Object-Oriented Design',
    //     'Database Schema Design',
    //     'API Design',
    //     'Microservices',
    //     'Caching Strategies',
    //     'Load Balancing',
    //     'Distributed Systems',
    //     'Message Queues',
    //   ],
    //   progress: 0

    // },
    // {
    //   title: '6. Mathematical and Logical Concepts',
    //   icon: faCalculator,
    //   description: 'Develop strong mathematical foundations for problem-solving',
    //   items: [
    //     'Number Theory',
    //     'Probability',
    //     'Combinatorics',
    //     'Geometric Algorithms',
    //     'Game Theory',
    //     'Mathematical Proofs',
    //     'Bit Operations',
    //   ],
    //   progress: 0
    // },
    // {
    //   title: '7. Interview Strategy and Optimization',
    //   icon: faLightbulb,
    //   description: 'Learn techniques for successful technical interviews',
    //   items: [
    //     'Time Complexity Analysis',
    //     'Space Optimization',
    //     'Problem-Solving Framework',
    //     'Code Organization',
    //     'Testing Strategies',
    //     'Edge Cases',
    //     'Communication Skills',
    //     'Whiteboarding Techniques',
    //   ],
    //   progress: 0
    // }
  ] as const;

  const filteredSections = roadmapSections.filter(
    (section) =>
      section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      section.items.some((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-6">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            LeetCode Learning Journey
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Master algorithms and data structures step by step. Track your
            progress and build your skills systematically.
          </p>

          <div className="flex flex-col gap-4 items-center mb-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
              <div className="relative flex-1 max-w-md w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full"
                />
              </div>
              <Tabs defaultValue="grid" className="w-auto">
                <TabsList>
                  <TabsTrigger value="grid" onClick={() => setView('grid')}>
                    Grid View
                  </TabsTrigger>
                  <TabsTrigger value="list" onClick={() => setView('list')}>
                    List View
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <LanguageSelector className="mt-2" />
          </div>
        </header>

        <div
          className={
            view === 'grid'
              ? 'grid gap-6 md:grid-cols-2 lg:grid-cols-3'
              : 'space-y-6'
          }
        >
          {filteredSections.map((section, index) => (
            <Card
              key={index}
              className={`transition-all duration-200 hover:shadow-lg ${
                expandedSections.includes(section.title)
                  ? 'ring-2 ring-blue-200'
                  : ''
              }`}
            >
              <CardHeader
                className="cursor-pointer flex items-center justify-between p-4"
                onClick={() => toggleSection(section.title)}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50">
                    <section.icon className="text-blue-600 h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {section.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {section.items.length} topics
                    </p>
                  </div>
                </div>
                {expandedSections.includes(section.title) ? (
                  <ChevronUp className="text-gray-400 h-4 w-4" />
                ) : (
                  <ChevronDown className="text-gray-400 h-4 w-4" />
                )}
              </CardHeader>

              <CardContent
                className={
                  expandedSections.includes(section.title) ? 'block' : 'hidden'
                }
              >
                <Progress
                  value={
                    (Array.from(completedItems).filter((item) =>
                      section.items.includes(item),
                    ).length /
                      section.items.length) *
                    100
                  }
                  className="mb-4"
                />

                <div className="space-y-2">
                  {section.items.map((item, i) => (
                    <Button
                      key={i}
                      variant="ghost"
                      className="w-full justify-between hover:bg-blue-50 text-left h-auto py-3"
                      onClick={() => navigateToTopic(item)}
                    >
                      <span className="font-medium">{item}</span>
                      <ArrowRight className="text-blue-500 h-4 w-4" />
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 hover:opacity-90"
          >
            Track Your Progress
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LeetcodePage;
