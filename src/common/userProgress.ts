/**
 * Centralized user progress data structure
 * All localStorage data is managed through this interface
 */

import { Language } from './commonLanguage';

export interface TopicProgress {
  points: number;
  completedConcepts: string[];
  lastAccessed?: string;
}

export interface ProblemUnderstanding {
  [problemId: string]: number; // 1-5 scale
}

export interface UserPreferences {
  darkMode?: boolean;
  viewMode?: 'grid' | 'list';
  language?: Language; // Preferred programming language for code examples
}

export interface UserProgress {
  version: number; // For future migrations
  topics: {
    [topicName: string]: TopicProgress;
  };
  problemUnderstanding: ProblemUnderstanding;
  preferences: UserPreferences;
  lastSync?: string;
}

export const DEFAULT_USER_PROGRESS: UserProgress = {
  version: 1,
  topics: {},
  problemUnderstanding: {},
  preferences: {
    viewMode: 'grid',
    language: 'python', // Default to Python (most lessons start with Python)
  },
};

export const STORAGE_KEY = 'microleet_user_progress';

/**
 * Topic names for reference
 */
export const TOPICS = {
  // Data Structures
  ARRAYS: 'arrays',
  STRINGS: 'strings',
  DICTIONARIES: 'dictionaries',
  TUPLES: 'tuples',
  SETS: 'sets',
  LINKED_LISTS: 'linked-lists',
  STACKS: 'stacks',
  QUEUES: 'queues',
  HEAPS: 'heaps',
  TREES: 'trees',
  TRIES: 'tries',
  GRAPHS: 'graphs',
  // OOP Topics (add as needed)
  OOP_ABSTRACTION: 'oop-abstraction',
  OOP_ENCAPSULATION: 'oop-encapsulation',
  OOP_INHERITANCE: 'oop-inheritance',
  OOP_POLYMORPHISM: 'oop-polymorphism',
} as const;

export type TopicName = (typeof TOPICS)[keyof typeof TOPICS];
