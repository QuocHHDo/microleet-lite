'use client';
import React, { useState } from 'react';
import '../../styles/globals.css';
import {
  TreePine,
  TrendingUp,
  Search,
  ArrowRight,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { LanguageSelector } from '@/components/LanguageSelector';
import { useRouter } from 'next/navigation';

// Problem counts per topic
const problemCounts: Record<string, number> = {
  'Arrays': 9,
  'Strings': 11,
  'Tuples': 6,
  'Linked Lists': 7,
  'Stacks': 7,
  'Queues': 7,
  'Hash Maps': 11,
  'Hash Sets': 10,
  'Trees': 9,
  'Heaps': 9,
  'Tries': 7,
  'Graphs': 8,
  'Union-Find': 4,
  'Dynamic Programming': 19,
};

interface TopicSection {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  items: string[];
}

const LeetcodePage: React.FC = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const navigateToTopic = (topic: string) => {
    const formattedTopic = topic.toLowerCase().replace(/\s+/g, '-');
    router.push(`/leetcode/topics/${formattedTopic}`);
  };

  const sections: TopicSection[] = [
    {
      title: 'Data Structures',
      icon: TreePine,
      description: 'Master the building blocks of programming and problem-solving',
      items: [
        'Arrays',
        'Strings',
        'Tuples',
        'Linked Lists',
        'Stacks',
        'Queues',
        'Hash Maps',
        'Hash Sets',
        'Trees',
        'Heaps',
        'Tries',
        'Graphs',
      ],
    },
    {
      title: 'Advanced Techniques',
      icon: TrendingUp,
      description: 'Learn powerful algorithmic techniques for complex problems',
      items: [
        'Union-Find',
        'Dynamic Programming',
      ],
    },
  ];

  // Filter topics based on search
  const getFilteredItems = (items: string[]) => {
    if (!searchTerm) return items;
    return items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const hasResults = sections.some(
    (section) => getFilteredItems(section.items).length > 0
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-6">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            LeetCode Learning Journey
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Master algorithms and data structures step by step. Track your
            progress and build your skills systematically.
          </p>

          <div className="flex flex-col gap-4 items-center">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full"
              />
            </div>
            <LanguageSelector className="mt-2" />
          </div>
        </header>

        {sections.map((section) => {
          const filteredItems = getFilteredItems(section.items);
          if (filteredItems.length === 0) return null;

          return (
            <div key={section.title} className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100">
                  <section.icon className="text-blue-600 h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {section.title}
                  </h2>
                  <p className="text-sm text-gray-500">{section.description}</p>
                </div>
              </div>

              <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {filteredItems.map((topic) => (
                  <Card
                    key={topic}
                    className="group cursor-pointer transition-all duration-200 hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5"
                    onClick={() => navigateToTopic(topic)}
                  >
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                          {topic}
                        </span>
                        <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-blue-500 transition-colors" />
                      </div>
                      <span className="text-xs text-gray-400">
                        {problemCounts[topic] || 0} problems
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}

        {!hasResults && (
          <div className="text-center py-12 text-gray-500">
            No topics found matching &ldquo;{searchTerm}&rdquo;
          </div>
        )}
      </div>
    </div>
  );
};

export default LeetcodePage;
