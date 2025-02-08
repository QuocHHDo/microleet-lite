import { Difficulty } from '@/common/commonConcept';
import {
  Curriculum,
  LessonContent,
  LessonsTab,
  PriorityLevel,
} from '@/common/commonLesson';

export const singletonPatternCurriculum: Curriculum = {
  title: 'Singleton Pattern Curriculum',
  description:
    'Restrict a class to a single global instance, often used for centralized management.',
  sections: [
    {
      id: 1,
      title: 'Core Principles',
      topics: [
        {
          id: 'singleton-definition',
          title: 'Definition & Implementation',
          description:
            'Common ways to enforce a single instance in various languages.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'thread-safety',
          title: 'Thread Safety & Lazy Loading',
          description:
            'Approaches to ensure singletons work correctly in multithreaded environments.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 2,
      title: 'Critiques & Alternatives',
      topics: [
        {
          id: 'testability-issues',
          title: 'Testability Concerns',
          description:
            'How singletons can hinder testing and what patterns can help (e.g., DIP).',
          priority: PriorityLevel.Important,
        },
      ],
    },
  ],
};

// 1) Definition & Implementation
const singletonDefinitionData: LessonContent = {
  title: 'Definition & Implementation',
  content: `
A **Singleton** ensures a class has only one global instance, providing a single point of access.

<h3>
Common Approaches
</h3>

- **Module-Level** (Pythonic): Because Python modules are singleton-like by default.  
- **Classic Singleton**: Overriding \`__new__\` or using a metaclass to ensure only one instance.

<h3>
Example
</h3>

\`\`\`python
class Singleton:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(Singleton, cls).__new__(cls)
        return cls._instance
\`\`\`
`,
  exercises: [
    {
      prompt: `Write a simple Python singleton class "Logger" using the __new__ approach. Demonstrate that creating multiple Logger() objects yields the same instance.`,
      initialCode: '',
      solution: `"""
class Logger:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

    def log(self, msg):
        print(f"Logger: {msg}")

logger1 = Logger()
logger2 = Logger()
print(logger1 is logger2)  # True
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Explain in a short paragraph how Python\'s module system can sometimes substitute for a formal singleton pattern, referencing how modules maintain state across imports.`,
      initialCode: '',
      solution: `"""
Each Python module is initialized once, and subsequent imports return the same module object. 
Hence, any state or data stored at the module level is effectively a singleton for that module, 
often eliminating the need for a dedicated singleton class.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'Which is a typical implementation approach for a Python singleton?',
      options: [
        'Declaring a top-level function in the class',
        'Overriding __new__ or using a metaclass to ensure only one instance',
        'Using the "singleton" keyword in Python',
      ],
      correctAnswer: 1,
      explanations: [
        "Incorrect. A top-level function doesn't inherently enforce single instance creation.",
        'Correct! Overriding __new__ or using metaclasses are standard ways to do it.',
        'Incorrect. Python does not have a "singleton" keyword.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 2) Thread Safety & Lazy Loading
const singletonThreadSafetyData: LessonContent = {
  title: 'Thread Safety & Lazy Loading',
  content: `
Singleton patterns often address **thread safety** to ensure two threads don\'t create separate instances simultaneously. **Lazy loading** delays instance creation until needed.

<h3>
Thread Safety in Python
</h3>

Due to the Global Interpreter Lock (GIL), pure Python code sees limited parallelism, but it\'s still possible to have race conditions in certain scenarios (e.g., multi-process or some external libraries). Using locks can ensure safe initialization.

<h3>
Lazy Loading
</h3>

Creating the singleton instance only when first requested can save resources. If the instance is never used, it\'s never created.
`,
  exercises: [
    {
      prompt: `Demonstrate a thread-safe Python singleton. Use a threading lock when creating the instance to avoid race conditions. Provide minimal code that conveys the concept.`,
      initialCode: '',
      solution: `"""
import threading

class ThreadSafeSingleton:
    _instance = None
    _lock = threading.Lock()

    def __new__(cls):
        if cls._instance is None:
            with cls._lock:
                if cls._instance is None:
                    cls._instance = super().__new__(cls)
        return cls._instance
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Explain in a paragraph how lazy loading might be helpful in Python for heavy resources (like database connections) that you want to instantiate only if needed.`,
      initialCode: '',
      solution: `"""
If creating an object is expensive (e.g., establishing a DB connection), 
lazy loading ensures you only incur that cost if you actually need it. 
In Python, checking if the instance is None before creating it defers any setup steps until first use, 
potentially saving startup time or resources.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'How can you prevent two threads from creating separate singleton instances in Python?',
      options: [
        "Don't use classes",
        'Use a lock to synchronize instance creation',
        "It's impossible to have concurrency in Python",
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Classes can be used with thread safety measures.',
        'Correct! A lock ensures only one thread can create the instance at a time.',
        'Incorrect. Python can have concurrency via threads, albeit with GIL limitations or multi-process setups.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 3) Testability Issues
const singletonTestabilityData: LessonContent = {
  title: 'Testability Concerns',
  content: `
Singletons can complicate testing because they introduce a **global state**. If tests depend on a single instance with shared state, it may be harder to isolate tests or reset the instance between runs.

<h3>
How to Mitigate?
</h3>

- Provide a way to reset or override the instance in test code.  
- Use dependency injection or a factory so you can inject mocks instead of referencing a direct singleton.

<h3>
Python Example
</h3>

\`\`\`python
class Singleton:
    ...
    @classmethod
    def reset_for_tests(cls):
        cls._instance = None
\`\`\`
`,
  exercises: [
    {
      prompt: `Describe in a short paragraph how using DIP (Dependency Inversion Principle) or factories might reduce the reliance on direct singleton references in production code, improving testability.`,
      initialCode: '',
      solution: `"""
If client code depends on an abstract interface, it doesn\'t need to directly call SingletonClass.get_instance(). 
A factory or DI container can supply a mock or alternate instance for testing. 
This avoids global, hard-coded singleton access that impedes test isolation.
"""`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: `Suggest how you'd structure a test teardown to reset a Python singleton between tests, assuming you have a "Logger" singleton with a "reset()" method.`,
      initialCode: '',
      solution: `"""
def teardown_function():
    Logger.reset()
# This ensures each test starts fresh, 
# so previous test logs or state won't leak into subsequent tests.
"""`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is one common criticism of singletons regarding testing?',
      options: [
        'They automatically generate test doubles',
        'They enforce purely functional code',
        'They introduce global state, making it harder to isolate tests',
      ],
      correctAnswer: 2,
      explanations: [
        "Incorrect. Singletons don't create test doubles automatically.",
        'Incorrect. Singletons are more about shared state, not purely functional code.',
        'Correct! The shared, global nature complicates test isolation.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const singletonPatternLessons: Record<string, LessonContent> = {
  'singleton-definition': singletonDefinitionData,
  'thread-safety': singletonThreadSafetyData,
  'testability-issues': singletonTestabilityData,
};

export const singletonPatternLessonsTab: LessonsTab = {
  curriculum: singletonPatternCurriculum,
  lessons: singletonPatternLessons,
};
