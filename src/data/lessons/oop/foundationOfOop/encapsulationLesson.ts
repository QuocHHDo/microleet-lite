import {
  Curriculum,
  LessonContent,
  LessonsTab,
  PriorityLevel,
} from '@/common/commonLesson';

export const encapsulationCurriculum: Curriculum = {
  title: 'Encapsulation Curriculum',
  description:
    'A focused guide to mastering Encapsulation, one of the core pillars of OOP, ensuring data integrity and maintainable code.',
  sections: [
    {
      id: 1,
      title: 'Encapsulation Fundamentals',
      topics: [
        {
          id: 'encapsulation-definition',
          title: 'Definition & Purpose',
          description:
            'Explains the concept of bundling data and methods together while restricting direct access to internal data.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'encapsulation-benefits-analogy',
          title: 'Benefits & Real-World Analogies',
          description:
            'Highlights how Encapsulation improves maintainability, security, and clarity, with everyday examples (e.g., vending machine).',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'encapsulation-mechanics',
          title: 'How It Works',
          description:
            'Covers how classes expose behaviors (methods) while keeping properties hidden or restricted.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 2,
      title: 'Implementation & Best Practices',
      topics: [
        {
          id: 'access-modifiers',
          title: 'Access Modifiers',
          description:
            'Explores public, private, and protected scopes, and how they reinforce Encapsulation.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'getter-setter-pattern',
          title: 'Getters, Setters, and Control Methods',
          description:
            'Discusses how accessors and mutators enforce data integrity and logging requirements.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'over-encapsulation',
          title: 'Avoiding Over-Encapsulation',
          description:
            'Explains when private fields or too many set/get methods can become cumbersome.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 3,
      title: 'Interview Preparation & Pitfalls',
      topics: [
        {
          id: 'common-misconceptions',
          title: 'Common Misconceptions',
          description:
            'Clarifies misconceptions about data hiding and how Encapsulation differs from other OOP pillars.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'mock-questions',
          title: 'Typical Interview Questions',
          description:
            'Lists sample interviewer prompts and real scenarios like “Refactor a class to encapsulate fields.”',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'pitfalls-practices',
          title: 'Pitfalls & Best Practices',
          description:
            'Covers examples of encapsulation done poorly, and best practices to highlight during interviews.',
          priority: PriorityLevel.Important,
        },
      ],
    },
  ],
};

const encapsulationDefinitionData: LessonContent = {
  title: '',
  content: '',
  exercises: [],
  quizzes: [],
};
const encapsulationBenefitsAnalogyData: LessonContent = {
  title: '',
  content: '',
  exercises: [],
  quizzes: [],
};
const encapsulationMechanicsData: LessonContent = {
  title: '',
  content: '',
  exercises: [],
  quizzes: [],
};
const accessModifiersData: LessonContent = {
  title: '',
  content: '',
  exercises: [],
  quizzes: [],
};
const getterSetterPatternData: LessonContent = {
  title: '',
  content: '',
  exercises: [],
  quizzes: [],
};
const overEncapsulationData: LessonContent = {
  title: '',
  content: '',
  exercises: [],
  quizzes: [],
};
const commonMisconceptionsData: LessonContent = {
  title: '',
  content: '',
  exercises: [],
  quizzes: [],
};
const mockQuestionsData: LessonContent = {
  title: '',
  content: '',
  exercises: [],
  quizzes: [],
};
const pitfallsPracticesData: LessonContent = {
  title: '',
  content: '',
  exercises: [],
  quizzes: [],
};
const encapsulationLesson: Record<string, LessonContent> = {
  'encapsulation-definition': encapsulationDefinitionData,
  'encapsulation-benefits-analogy': encapsulationBenefitsAnalogyData,
  'encapsulation-mechanics': encapsulationMechanicsData,
  'access-modifiers': accessModifiersData,
  'getter-setter-pattern': getterSetterPatternData,
  'over-encapsulation': overEncapsulationData,
  'common-misconceptions': commonMisconceptionsData,
  'mock-questions': mockQuestionsData,
  'pitfalls-practices': pitfallsPracticesData,
};

export const encapsulationLessonsTab: LessonsTab = {
  curriculum: encapsulationCurriculum,
  lessons: encapsulationLesson,
};
