import { Difficulty } from './commonConcept';

export enum PriorityLevel {
  Unset = -1,
  Essential = 1,   // A foundational topic required for all technical interviews. These are the "must-know" topics that form the core of problem-solving skills.
  Important = 2,   // Topics frequently covered in interviews, especially by most companies. Knowing these can greatly boost your chances of success.
  Beneficial = 3,  // Advanced or specialized topics that are more likely to appear in interviews for top-tier companies like FAANG. These demonstrate depth of knowledge and expertise.
  Optional = 4,    // Supplementary topics that enhance understanding but are rarely required in interviews. Great for personal growth or deep diving.
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
