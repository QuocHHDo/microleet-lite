'use client';
import React, { useEffect, useState } from 'react';
import '../../styles/globals.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faCogs,
  faLayerGroup,
  faChessKnight,
  faShieldAlt,
  faSearch,
  faChevronDown,
  faChevronUp,
  faArrowRight,
  faBoxes,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
import { config, dom } from '@fortawesome/fontawesome-svg-core';
import { useRouter } from 'next/navigation';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

config.autoAddCss = false;

interface OOPModule {
  title: string;
  icon: any;
  description?: string;
  items: string[];
  progress: number;
}

const OOPPage: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [expandedModules, setExpandedModules] = useState<string[]>([]);
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

  const toggleModule = (moduleTitle: string) => {
    setExpandedModules((prev) =>
      prev.includes(moduleTitle)
        ? prev.filter((m) => m !== moduleTitle)
        : [...prev, moduleTitle],
    );
  };

  const navigateToTopic = (topic: string) => {
    const formattedTopic = topic.toLowerCase().replace(/\s+/g, '-');
    // Example route: /oop/topics/[topic]
    router.push(`/oop/topics/${formattedTopic}`);
  };

  const oopModules: OOPModule[] = [
    {
      title: '1. Foundations of OOP',
      icon: faCode,
      description:
        'Discover the principles of Encapsulation, Abstraction, Inheritance, Polymorphism, Overloading, and Overriding',
      items: [
        'Encapsulation',
        'Abstraction',
        'Inheritance',
        'Polymorphism',
        'Overloading & Overriding',
      ],
      progress: 0,
    },
    {
      title: '2. Classes & Objects',
      icon: faCogs,
      description:
        'Dig into how classes and objects interact, focusing on composition vs. inheritance best practices',
      items: [
        'Class Anatomy',
        'Constructors',
        'Methods & Properties',
        'Object Lifecycles',
        'Composition vs. Inheritance',
      ],
      progress: 0,
    },
    {
      title: '3. Interfaces & Abstract Classes',
      icon: faLayerGroup,
      description:
        'Dive deeper into advanced OOP constructs crucial for flexible and robust designs',
      items: [
        'Interface Definition & Purpose',
        'Abstract Classes vs. Concrete Classes',
        'Interface vs. Implementation Inheritance',
        'Interface Segregation Principle',
      ],
      progress: 0,
    },
    {
      title: '4. SOLID Principles',
      icon: faLayerGroup,
      description:
        'Adopt the best practices that keep your code clean and maintainable',
      items: [
        'Single Responsibility Principle (SRP)',
        'Open/Closed Principle (OCP)',
        'Liskov Substitution Principle (LSP)',
        'Interface Segregation Principle (ISP)',
        'Dependency Inversion Principle (DIP)',
      ],
      progress: 0,
    },
    {
      title: '5. OOP Design Patterns',
      icon: faChessKnight,
      description:
        'Learn patterns for creational, structural, and behavioral design solutions',
      items: [
        'Factory',
        'Singleton',
        'Strategy',
        'Observer',
        'Adapter',
        'Decorator',
        'Composite',
        'Facade',
      ],
      progress: 0,
    },
    {
      title: '6. Error Handling & Exceptions',
      icon: faShieldAlt,
      description:
        'Build robust applications by properly managing error flows, domain-specific exceptions, and clean-up patterns',
      items: [
        'Exception Hierarchies',
        'Custom Exceptions',
        'Try-Catch-Finally',
        'Logging Practices',
        'Resource Management',
      ],
      progress: 0,
    },
  ];

  const filteredModules = oopModules.filter(
    (module) =>
      module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      module.items.some((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
            Object-Oriented Programming Curriculum
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Gain a solid foundation in OOP principles with concise lessons,
            interactive examples, and practice exercises.
          </p>

          {/* Search Bar and View Toggle */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="relative flex-1 max-w-md w-full">
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <Input
                type="text"
                placeholder="Search modules or topics..."
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
        </header>

        {/* Main Content */}
        <div
          className={
            view === 'grid'
              ? 'grid gap-6 md:grid-cols-2 lg:grid-cols-3'
              : 'space-y-6'
          }
        >
          {filteredModules.map((module, index) => (
            <Card
              key={index}
              className={`transition-all duration-200 hover:shadow-lg ${
                expandedModules.includes(module.title)
                  ? 'ring-2 ring-indigo-200'
                  : ''
              }`}
            >
              <CardHeader
                className="cursor-pointer flex items-center justify-between p-4"
                onClick={() => toggleModule(module.title)}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-gradient-to-r from-purple-50 to-indigo-50">
                    <FontAwesomeIcon
                      icon={module.icon}
                      className="text-purple-600"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {module.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {module.items.length} topics
                    </p>
                  </div>
                </div>
                <FontAwesomeIcon
                  icon={
                    expandedModules.includes(module.title)
                      ? faChevronUp
                      : faChevronDown
                  }
                  className="text-gray-400"
                />
              </CardHeader>

              <CardContent
                className={
                  expandedModules.includes(module.title)
                    ? 'block p-4'
                    : 'hidden'
                }
              >
                {module.description && (
                  <p className="text-sm text-gray-700 mb-4">
                    {module.description}
                  </p>
                )}
                <Progress
                  value={
                    (Array.from(completedItems).filter((item) =>
                      module.items.includes(item),
                    ).length /
                      module.items.length) *
                    100
                  }
                  className="mb-4"
                />

                <div className="space-y-2">
                  {module.items.map((item, i) => (
                    <Button
                      key={i}
                      variant="ghost"
                      className="w-full justify-between hover:bg-purple-50 text-left h-auto py-3"
                      onClick={() => navigateToTopic(item)}
                    >
                      <span className="font-medium">{item}</span>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-purple-500"
                      />
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Action */}
        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 hover:opacity-90"
          >
            View Full OOP Roadmap
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OOPPage;
