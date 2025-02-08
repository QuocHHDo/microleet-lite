import { Difficulty } from '@/common/commonConcept';
import {
  Curriculum,
  LessonContent,
  LessonsTab,
  PriorityLevel,
} from '@/common/commonLesson';

export const resourceManagementCurriculum: Curriculum = {
  title: 'Resource Management Curriculum',
  description:
    'Ensure resources like files, network connections, or database handles are properly released.',
  sections: [
    {
      id: 1,
      title: 'Core Techniques',
      topics: [
        {
          id: 'try-with-resources',
          title: 'Try-With-Resources / Using Statement',
          description:
            'Language-specific constructs that automate resource cleanup.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'manual-closers',
          title: 'Manual Closers',
          description:
            'Handling resources in languages without automatic disposal features.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 2,
      title: 'Potential Pitfalls',
      topics: [
        {
          id: 'memory-leaks',
          title: 'Memory Leaks & Zombie Objects',
          description:
            'How unclosed resources can lead to issues in long-running applications.',
          priority: PriorityLevel.Important,
        },
      ],
    },
  ],
};

// 1) Try-With-Resources / Using Statement
const tryWithResourcesData: LessonContent = {
  title: 'Try-With-Resources / Using Statement',
  content: `
Some languages (Java, C#, etc.) provide a **try-with-resources** or **using** statement ensuring resources are closed automatically.

<h3>
Java\'s Try-With-Resources
</h3>

\`\`\`java
try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {
    // use br
} // br automatically closed
\`\`\`

<h3>
C# Using Statement
</h3>

\`\`\`csharp
using (var file = new StreamReader("file.txt")) {
    // file automatically disposed
}
\`\`\`

<h3>
Python Equivalent
</h3>

\`\`\`python
with open("file.txt", "r") as file:
    data = file.read()
# file closed automatically
\`\`\`
`,
  exercises: [
    {
      prompt: `Show a Python example using "with open(...)" to read a file and discuss how it parallels Java\'s try-with-resources approach in ensuring closure.`,
      initialCode: '',
      solution: `"""
with open("example.txt", "r") as f:
    content = f.read()
print("File is automatically closed after exiting the with block")

# Explanation:
# Similar to Java's try-with-resources, 
# Python's 'with' ensures the file resource is released on block exit, 
# even if an exception occurs.
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `In a short paragraph, mention how custom objects can also implement Python\'s context manager protocol (__enter__, __exit__) to mimic this pattern.`,
      initialCode: '',
      solution: `"""
Any Python class defining __enter__ and __exit__ can be used in a 'with' statement. 
__enter__ initializes or acquires the resource, and __exit__ handles cleanup or release. 
This extends the automatic resource management concept to custom objects, not just built-in file I/O.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        "What is the Python counterpart to Java's try-with-resources or C# using statement?",
      options: [
        'import statement',
        'with statement (context manager)',
        'global keyword',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. import is for modules.',
        'Correct! The with statement context manager ensures resource cleanup.',
        'Incorrect. global is for variable scope, not resource management.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 2) Manual Closers
const manualClosersData: LessonContent = {
  title: 'Manual Closers',
  content: `
In languages without automatic resource management blocks, or when you need finer control, you manually close or dispose of resources.

<h3>
Python\'s close Methods
</h3>

For instance, a socket or file object has a **.close()** method you can call explicitly if you\'re not using a “with” block.

<h3>
Caveats
</h3>

Forgetting to close resources can lead to memory leaks or locked file handles, especially in long-running applications.
`,
  exercises: [
    {
      prompt: `Demonstrate a scenario in Python where you manually close a file if you cannot use "with" for some reason. Highlight the risk if an exception interrupts the code before closure.`,
      initialCode: '',
      solution: `"""
def read_file_manually(filename):
    f = open(filename, 'r')
    try:
        data = f.read()
        return data
    finally:
        f.close()  # ensure closure even if an exception is raised

# If we forgot 'finally: f.close()', an exception would leave 'f' open.
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `In a paragraph, discuss how manual closing can give more granular control but is prone to human error, referencing best practices like using "try/finally" blocks.`,
      initialCode: '',
      solution: `"""
Manual closers let you handle partial operations or special conditions before releasing resources, 
but if a developer forgets to call close(), it can lead to leaks or locked files. 
Using 'try/finally' mitigates this risk, ensuring closure even if exceptions occur.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'Why is manual resource closing more error-prone than using language features like with/try-with-resources?',
      options: [
        'It always requires advanced frameworks to function',
        'Developers can forget to call close(), leading to leaks or locked resources',
        'It prevents any debug logs from being created',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. No advanced framework is strictly required.',
        'Correct! The biggest risk is human error if explicit closure is omitted.',
        "Incorrect. Logging can still happen, but that's unrelated to resource closure.",
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 3) Memory Leaks & Zombie Objects
const memoryLeaksData: LessonContent = {
  title: 'Memory Leaks & Zombie Objects',
  content: `
Improperly closed resources can linger, causing memory leaks or “zombie objects” that remain in memory or keep file handles open.

<h3>
Long-Running Apps
</h3>

Servers or daemons running for months might accumulate unclosed resources, eventually causing performance issues or exhaustion of file descriptors.

<h3>
Prevention
</h3>

- Always use \`with\` in Python for files or network resources.  
- Track resource usage in logs or monitoring if closures are critical.
`,
  exercises: [
    {
      prompt: `Explain in a short paragraph how a Web server in Python might leak resources if each incoming request opens a file without ensuring closure, referencing potential system file descriptor limits.`,
      initialCode: '',
      solution: `"""
If each HTTP request opens a file but fails to close it, eventually the server might exceed the OS limit on file descriptors. 
Requests will then fail, or the server might crash. 
Proper resource management (e.g., 'with open(...)') is vital to keep the server stable long-term.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'What is a memory leak or “zombie object” scenario in the context of resource management?',
      options: [
        'The OS forcibly reclaims every resource automatically',
        'Unused or unclosed resources remain allocated, gradually consuming system resources',
        'It indicates normal garbage collection operation',
      ],
      correctAnswer: 1,
      explanations: [
        "Incorrect. If the OS reclaimed everything automatically, it wouldn't be a leak.",
        'Correct! Resources not properly closed linger in memory or keep handles open.',
        "Incorrect. Normal GC can't handle external resources if you never release them properly.",
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const resourceManagementLessons: Record<string, LessonContent> = {
  'try-with-resources': tryWithResourcesData,
  'manual-closers': manualClosersData,
  'memory-leaks': memoryLeaksData,
};

export const resourceManagementLessonsTab: LessonsTab = {
  curriculum: resourceManagementCurriculum,
  lessons: resourceManagementLessons,
};
