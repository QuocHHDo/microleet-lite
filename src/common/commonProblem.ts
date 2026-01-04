import { CodeContent } from './commonLanguage';

export interface Solution {
  code: string | CodeContent; // Support both legacy (string) and new (CodeContent) formats
  timeComplexity: string;
  spaceComplexity: string;
  explanation?: string;
}

export interface Problem {
  title: string;
  difficulty: string;
  description: string;
  solutions: Solution[];
  hint: string;
  link: string;
}

export const createProblem = (
  title: string,
  difficulty: string,
  description: string,
  solutions: Solution[],
  hint: string = '',
  link: string = '',
): Problem => {
  return {
    title,
    difficulty,
    description,
    solutions,
    hint,
    link,
  };
};
