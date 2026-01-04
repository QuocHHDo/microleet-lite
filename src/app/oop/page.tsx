'use client';
import React, { useEffect } from 'react';
import '../../styles/globals.css';
import {
  Code,
  Settings,
  Layers,
  Crown,
  Shield,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const CustomFontLoader = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return null;
};

interface OOPModule {
  title: string;
  icon: any;
  description?: string;
  items: string[];
  progress: number;
}

const OOPPage: React.FC = () => {
  const router = useRouter();

  const navigateToTopic = (topic: string) => {
    const topicMapping: Record<string, string> = {
      "SRP (Single Responsibility Principle)": "srp",
      "OCP (Open-Closed Principle)": "ocp",
      "LSP (Liskov Substitution Principle)": "lsp",
      "ISP (Interface Segregation Principle)": "isp",
      "DIP (Dependency Inversion Principle)": "dip"
    };
  
    if (topicMapping[topic]) {
      router.push(`/oop/topics/${topicMapping[topic]}`);
      return;
    }
    const cleanedTopic = topic.replace(/\s*\(.*?\)\s*/g, '').trim();
    const formattedTopic = cleanedTopic.toLowerCase().replace(/\s*&\s*|\s+/g, '-');
    
    router.push(`/oop/topics/${formattedTopic}`);
  };

  const oopModules: OOPModule[] = [
    {
      title: '1. Foundations of OOP',
      icon: Code,
      description:
        'Master core principles such as Encapsulation, Abstraction, Inheritance, and Polymorphism.',
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
      icon: Settings,
      description:
        'Understand how classes and objects interact, focusing on best practices and lifecycle management.',
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
      icon: Layers,
      description:
        'Explore advanced OOP concepts that improve flexibility and robustness in design.',
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
      icon: Layers,
      description:
        'Learn the five SOLID principles that help create scalable and maintainable applications.',
      items: [
        'SRP (Single Responsibility Principle)',
        'OCP (Open/Closed Principle)',
        'LSP (Liskov Substitution Principle)',
        'ISP (Interface Segregation Principle)',
        'DIP (Dependency Inversion Principle)',
      ],
      progress: 0,
    },
    {
      title: '5. OOP Design Patterns',
      icon: Crown,
      description:
        'Discover common patterns for solving design challenges in object-oriented programming.',
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
      icon: Shield,
      description:
        'Learn how to handle errors effectively to build reliable and maintainable applications.',
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

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-[Poppins]">
      <CustomFontLoader />

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20 px-6 text-center shadow-md">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
            Object-Oriented Programming Mastery
          </h1>
          <p className="text-lg text-purple-200 mt-6 leading-relaxed max-w-2xl mx-auto">
            Gain a deep understanding of OOP concepts, principles, and patterns
            to excel in your software engineering journey.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-16 px-6 sm:px-8 md:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {oopModules.map((module, index) => (
            <Card
              key={index}
              className="relative rounded-2xl shadow-lg border-l-8 border-purple-500 bg-white transition-all transform hover:scale-105 hover:shadow-2xl"
            >
              <CardHeader className="p-6 border-b border-gray-200">
                <div className="flex items-center gap-5">
                  <div className="p-4 rounded-full bg-gradient-to-r from-purple-50 to-indigo-50 shadow-sm">
                    <module.icon className="text-purple-600 h-8 w-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {module.title}
                    </h2>
                    <p className="text-sm text-gray-500 font-medium">
                      {module.items.length} Topics
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed mb-5 text-base">
                  {module.description}
                </p>

                <Progress value={module.progress} className="mb-4" />

                <div className="space-y-2">
                  {module.items.map((item, i) => (
                    <Button
                      key={i}
                      variant="ghost"
                      className="w-full flex justify-between items-center text-left py-3 px-4 rounded-md bg-gray-50 hover:bg-purple-100 transition-all font-medium text-gray-800"
                      onClick={() => navigateToTopic(item)}
                    >
                      <span>{item}</span>
                      <ArrowRight className="text-purple-500 h-4 w-4" />
                    </Button>
                  ))}
                </div>

                <div className="flex justify-end mt-4">
                  <span className="text-sm text-gray-600 font-medium">
                    {module.progress}% Completed
                    <CheckCircle
                      className={`ml-2 h-4 w-4 inline ${
                        module.progress === 100
                          ? 'text-green-500'
                          : 'text-gray-400'
                      }`}
                    />
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default OOPPage;
