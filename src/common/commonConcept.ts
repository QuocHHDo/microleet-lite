export enum Difficulty {
  Beginner,
  Intermediate,
  Advanced,
}
export interface Concept {
  id: number;
  title: string;
  description: string;
  difficulty: Difficulty;
}

export const createConcept = (
  id: number,
  title: string,
  description: string,
  difficulty: Difficulty,
): Concept => {
  return {
    id,
    title,
    description,
    difficulty,
  };
};
