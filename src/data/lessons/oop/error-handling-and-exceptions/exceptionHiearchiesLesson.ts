import { Difficulty } from '@/common/commonConcept';
import { Curriculum, LessonContent, LessonsTab, PriorityLevel } from '@/common/commonLesson';

export const exceptionHierarchiesCurriculum: Curriculum = {
  title: 'Exception Hierarchies Curriculum',
  description:
    'Understand how exceptions inherit from base classes and how to structure custom hierarchies effectively.',
  sections: [
    {
      id: 1,
      title: 'Core Concepts',
      topics: [
        {
          id: 'checked-vs-unchecked',
          title: 'Checked vs. Unchecked Exceptions (where applicable)',
          description:
            'Differences in languages like Java, and how it impacts error handling.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'hierarchy-design',
          title: 'Designing Exception Classes',
          description:
            'Creating meaningful exception hierarchies that reflect domain errors.',
          priority: PriorityLevel.Important,
        },
      ],
    },
  ],
};

// 1) Checked vs. Unchecked Exceptions
const checkedVsUncheckedData: LessonContent = {
  title: 'Checked vs. Unchecked Exceptions (where applicable)',
  content: `
Some languages (like Java) distinguish **checked exceptions** (must be declared or handled) and **unchecked exceptions** (runtime errors). Python treats all exceptions similarly at runtime.

<h3>
Checked Exceptions (Java, etc.)
</h3>

Forces explicit handling in method signatures. This can help ensure errors are not ignored, but may clutter code.

<h3>
Unchecked Exceptions (Python, Java\'s RuntimeException)
</h3>

No explicit requirement to declare them, so less boilerplate but also can lead to silent failures if not handled carefully.
`,
  exercises: [
    {
      prompt: `Write a short paragraph about how Python\'s model, where all exceptions are “unchecked,” impacts how developers approach error handling, referencing potential pitfalls if exceptions aren\'t caught.`,
      initialCode: '',
      solution: `"""
In Python, any exception can be raised at runtime without compile-time checks, 
giving developers flexibility but requiring diligence. 
If exceptions aren\'t caught or handled, they propagate and can crash the program. 
Unlike languages with checked exceptions, Python\'s approach relies on documentation, testing, 
and best practices to ensure errors are addressed.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which statement best describes Python\'s approach to exceptions compared to Java\'s checked/unchecked model?',
      options: [
        'Python enforces compile-time checks for all exceptions',
        'Python does not have a concept of checked exceptions; all are effectively unchecked',
        'Python requires a throws clause in every function signature',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Python does no compile-time checks for exceptions.',
        'Correct! Python treats all exceptions as unchecked at runtime.',
        'Incorrect. That\'s a Java pattern, not Python.'
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 2) Designing Exception Classes
const hierarchyDesignData: LessonContent = {
  title: 'Designing Exception Classes',
  content: `
When creating multiple custom exceptions, structure them to reflect your domain. You might have a **base exception** and several specialized child exceptions.

<h3>
Meaningful Hierarchies
</h3>

Example:

\`\`\`python
class AppError(Exception):
    pass

class DatabaseError(AppError):
    pass

class ValidationError(AppError):
    pass
\`\`\`

This approach helps you catch **AppError** for a broad range of issues, or catch specific errors like **DatabaseError** if needed.
`,
  exercises: [
    {
      prompt: `Create a base Python exception "MyAppError" and two subclasses "ConfigError" and "DataProcessingError". Show minimal usage of each.`,
      initialCode: '',
      solution: `"""
class MyAppError(Exception):
    pass

class ConfigError(MyAppError):
    pass

class DataProcessingError(MyAppError):
    pass

def load_config():
    raise ConfigError("Configuration file missing")

def process_data():
    raise DataProcessingError("Data format invalid")
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `In a short paragraph, explain the advantage of catching "MyAppError" in some blocks while more specific exceptions in others, referencing code clarity and fallback logic.`,
      initialCode: '',
      solution: `"""
Catching the base 'MyAppError' lets you handle all application-specific issues in one place if needed (e.g., logging or rollback). 
In other cases, you may catch 'ConfigError' to retry loading or 'DataProcessingError' to notify the user. 
This layered approach balances granularity with simplicity.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'How can a base exception class help in designing a custom exception hierarchy?',
      options: [
        'It forces all code to ignore exceptions',
        'It provides a common parent to catch all related errors or define shared logic',
        'It strictly removes the need for specialized exceptions',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. It doesn\'t force ignoring exceptions.',
        'Correct! A base class can unify exception handling or shared logic among child exceptions.',
        'Incorrect. Specialized exceptions are often still valuable for clarity.'
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};


const exceptionHiearchiesLessons: Record<string, LessonContent> = {
  'checked-vs-unchecked': checkedVsUncheckedData,
  'hiearchy-design': hierarchyDesignData
}

export const exceptionHiearchiesLessonsTab: LessonsTab = {
  curriculum: exceptionHierarchiesCurriculum,
  lessons: exceptionHiearchiesLessons
}