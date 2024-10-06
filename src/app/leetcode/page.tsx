'use client';
import React, { useEffect, useState } from 'react';
import '../../styles/globals.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTree,
  faCode,
  faChartBar,
  faPuzzlePiece,
  faCogs,
  faGraduationCap,
  faChevronDown,
  faChevronUp,
  faSearch,
  faCheck,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { config, dom } from '@fortawesome/fontawesome-svg-core';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useRouter } from 'next/navigation';

config.autoAddCss = false;

interface RoadmapSection {
  title: string;
  icon: any;
  items: string[];
  progress: number;
}

const LeetcodePage: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [completedItems, setCompletedItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(dom.css()));
    document.head.appendChild(style);
    const timer = setTimeout(() => setIsLoading(false), 100);
    return () => {
      clearTimeout(timer);
      document.head.removeChild(style);
    };
  }, []);

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
      icon: faTree,
      items: [
        'Arrays',
        'Strings',
        'Dictionaries',
        'Tuples',
        'Sets',
        'Linked Lists',
        'Stacks',
        'Queues',
        'Trees',
        'Heaps',
        'Graphs',
      ],
      progress: 0,
    },
    {
      title: '2. Basic Algorithms and Problem-Solving Techniques',
      icon: faCode,
      items: [
        'Time and Space Complexity Analysis',
        'Searching Algorithms',
        'Sorting Algorithms',
        'Two Pointers Technique',
        'Sliding Window Technique',
        'Frequency Counter Technique',
      ],
      progress: 0,
    },
    {
      title: '3. Intermediate Data Structures',
      icon: faChartBar,
      items: [
        'Advanced Linked List Operations',
        'Tree Traversals and Operations',
        'Graph Representations and Traversals',
        'Advanced Heap Operations',
      ],
      progress: 0,
    },
    {
      title: '4. Advanced Problem-Solving Techniques',
      icon: faPuzzlePiece,
      items: [
        'Recursion',
        'Dynamic Programming',
        'Greedy Algorithms',
        'Backtracking',
      ],
      progress: 0,
    },
    {
      title: '5. Graph Algorithms',
      icon: faChartBar,
      items: [
        'Depth-First Search (DFS)',
        'Breadth-First Search (BFS)',
        'Shortest Path Algorithms',
        'Minimum Spanning Tree',
      ],
      progress: 0,
    },
    {
      title: '6. Advanced Data Structures and Algorithms',
      icon: faCogs,
      items: [
        'Trie',
        'Disjoint Set (Union-Find)',
        'Advanced Sorting and Searching',
        'Binary Search Variations',
      ],
      progress: 0,
    },
    {
      title: '7. System Design and Object-Oriented Design',
      icon: faGraduationCap,
      items: [
        'Introduction to System Design',
        'Object-Oriented Design',
        'Designing Data Structures',
      ],
      progress: 0,
    },
  ];

  const filteredSections = roadmapSections.filter(section =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    section.items.some(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-6">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            LeetCode Learning Journey
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Master algorithms and data structures step by step. Track your progress and build your skills systematically.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="relative flex-1 max-w-md w-full">
              <FontAwesomeIcon 
                icon={faSearch} 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
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
                <TabsTrigger value="grid" onClick={() => setView('grid')}>Grid View</TabsTrigger>
                <TabsTrigger value="list" onClick={() => setView('list')}>List View</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </header>

        <div className={view === 'grid' ? 'grid gap-6 md:grid-cols-2 lg:grid-cols-3' : 'space-y-6'}>
          {filteredSections.map((section, index) => (
            <Card 
              key={index} 
              className={`transition-all duration-200 hover:shadow-lg ${
                expandedSections.includes(section.title) ? 'ring-2 ring-blue-200' : ''
              }`}
            >
              <CardHeader 
                className="cursor-pointer flex items-center justify-between p-4"
                onClick={() => toggleSection(section.title)}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50">
                    <FontAwesomeIcon icon={section.icon} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{section.title}</h3>
                    <p className="text-sm text-gray-500">{section.items.length} topics</p>
                  </div>
                </div>
                <FontAwesomeIcon 
                  icon={expandedSections.includes(section.title) ? faChevronUp : faChevronDown}
                  className="text-gray-400"
                />
              </CardHeader>

              <CardContent className={expandedSections.includes(section.title) ? 'block' : 'hidden'}>
                <Progress 
                  value={Array.from(completedItems).filter(item => 
                    section.items.includes(item)
                  ).length / section.items.length * 100} 
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
                      <FontAwesomeIcon icon={faArrowRight} className="text-blue-500" />
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