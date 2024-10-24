export interface Lesson {
  title: string;
  content: string;
  codeExample: string;
  exercise: {
    prompt: string;
    initialCode: string;
    solution: string;
  };
  quiz: {
    question: string;
    options: string[];
    correctAnswer: number;
  };
  tags?: string[];
  category?: 'concept' | 'implementation' | 'algorithm';
  relatedTopcis?: string[];
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
}

export interface LessonContent {
  title: string;
  content: string;
  codeExample: string;
  exercise: {
    prompt: string;
    initialCode: string;
    solution: string;
  };
  quiz: {
    question: string;
    options: string[];
    correctAnswer: number;
  };
}
export interface Topic {
  id: string;
  title: string;
  description: string;
  // lessons: Lesson[];
  // requiredForCompletion: boolean;
  // dependsOn?: string[]; // IDs of prerequisite topics
}

export interface Section {
  id: number;
  title: string;
  topics: Topic[];
  icon?: React.ReactNode;
}

export interface Curriculum {
  title: string,
  description: string,
  sections: Section[],
}

export interface LessonsTab {
  curriculum: Curriculum,
  lessons: Record<string, LessonContent>
}
export interface DataStructureMetadata {
  description: string;
  prerequisites: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
}
