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
}

export const createLesson = (
  title: string,
  content: string,
  codeExample: string,
  exercisePrompt: string,
  exerciseInitialCode: string,
  exerciseSolution: string,
  quizQuestion: string,
  quizOptions: string[],
  correctAnswerIndex: number,
): Lesson => {
  return {
    title,
    content,
    codeExample,
    exercise: {
      prompt: exercisePrompt,
      initialCode: exerciseInitialCode,
      solution: exerciseSolution,
    },
    quiz: {
      question: quizQuestion,
      options: quizOptions,
      correctAnswer: correctAnswerIndex,
    },
  };
};
