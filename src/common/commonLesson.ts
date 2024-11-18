import { Difficulty } from './commonConcept';

export enum PriorityLevel {  
  MustKnow,           // Essential for all interviews
  HighlyRecommended,  // Important for FAANG/top tech companies
  Recommended,        // Good to know, commonly appears
  Optional            // Helpful but not critical
}
export interface Exercise {
  prompt: string;
  initialCode: string;
  solution: string;
  difficulty?: Difficulty;
}
export interface Quiz {
  question: string;
  options: string[];
  correctAnswer: number;
  explanations?: string[];
  difficulty?: Difficulty;
}
export interface LessonContent {
  title: string;
  content: string;
  codeExample: string;
  exercises: Exercise[];
  quizzes: Quiz[];
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  priority?: PriorityLevel;
}

export interface Section {
  id: number;
  title: string;
  topics: Topic[];
  icon?: React.ReactNode;
}

export interface Curriculum {
  title: string;
  description: string;
  sections: Section[];
}

export interface LessonsTab {
  curriculum: Curriculum;
  lessons: Record<string, LessonContent>;
}
export interface DataStructureMetadata {
  description: string;
  prerequisites: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
}
