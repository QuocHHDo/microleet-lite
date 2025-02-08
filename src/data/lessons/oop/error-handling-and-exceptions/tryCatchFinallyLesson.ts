import { Difficulty } from '@/common/commonConcept';
import {
  Curriculum,
  LessonContent,
  LessonsTab,
  PriorityLevel,
} from '@/common/commonLesson';

export const tryCatchFinallyCurriculum: Curriculum = {
  title: 'Try-Catch-Finally Curriculum',
  description:
    'Master the control flow of exception handling, guaranteeing resource cleanup and stable applications.',
  sections: [
    {
      id: 1,
      title: 'Basic Flow',
      topics: [
        {
          id: 'flow-control',
          title: 'Flow Control',
          description:
            'How exceptions jump to the nearest catch block and finally always executes.',
          priority: PriorityLevel.Essential,
        },
      ],
    },
    {
      id: 2,
      title: 'Common Patterns',
      topics: [
        {
          id: 'nested-trycatch',
          title: 'Nested Try-Catch & Multiple Catches',
          description: 'How to handle multiple exception types distinctly.',
          priority: PriorityLevel.Important,
        },
      ],
    },
  ],
};

// 1) Flow Control
const flowControlData: LessonContent = {
  title: 'Flow Control',
  content: `
A **try-catch-finally** sequence manages exceptions and resource cleanup. Python uses **try-except-finally**, ensuring the finally block runs regardless of exceptions (except system-level interruptions).

<h3>
How Exceptions Jump
</h3>

- If an exception is raised in the try block, Python looks for a matching except block.
- If none matches, the exception propagates up the call stack.
- The finally block executes whether an exception occurred or not.

<h3>
Example
</h3>

\`\`\`python
try:
    risky_operation()
except ValueError as e:
    handle_value_error(e)
finally:
    cleanup()
\`\`\`
`,
  exercises: [
    {
      prompt: `Demonstrate a Python try-except-finally block where you open a file, catch a specific IOError, and close the file in finally. Show minimal code.`,
      initialCode: '',
      solution: `"""
f = None
try:
    f = open("somefile.txt", "r")
    data = f.read()
except IOError as e:
    print(f"Error reading file: {e}")
finally:
    if f:
        f.close()
        print("File closed in finally block")
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Explain in a paragraph how the "finally" block ensures code runs even if an exception is thrown or if a return statement is hit in the try block.`,
      initialCode: '',
      solution: `"""
If a return statement executes or an exception is raised inside try, Python still executes the finally block before returning or propagating the exception. 
This ensures critical cleanup (closing files or releasing locks) always happens, preventing resource leaks or leaving the system in an inconsistent state.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'What is the primary purpose of the finally block in a try-catch-finally construct?',
      options: [
        'It only runs if no exceptions occurred',
        'It always runs, exception or not, for cleanup or final actions',
        'It replaces any catch blocks',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. finally runs even if an exception happens.',
        'Correct! finally is used for guaranteed execution of cleanup code.',
        "Incorrect. finally doesn't replace catch/except blocks; it complements them.",
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 2) Nested Try-Catch & Multiple Catches
const nestedTryCatchData: LessonContent = {
  title: 'Nested Try-Catch & Multiple Catches',
  content: `
You can nest try blocks or catch multiple exception types distinctly.

<h3>
Nested Try-Except
</h3>

One try-except block inside another. Usually indicates you have separate operations that can fail differently.

<h3>
Multiple Except Blocks
</h3>

Catch different exceptions with separate handlers. Python supports multiple except clauses or a single except with a tuple of exceptions.

\`\`\`python
try:
    risky_io()
except (IOError, OSError) as e:
    handle_io(e)
except ValueError as ve:
    handle_value(ve)
\`\`\`
`,
  exercises: [
    {
      prompt: `Create a Python snippet with a nested try-except: 
- Outer try reading a file
- Inner try parsing the file content 
Catching FileNotFoundError separately from ValueError (on parse).`,
      initialCode: '',
      solution: `"""
try:
    with open("data.txt") as f:
        content = f.read()
    try:
        value = int(content)
        print("Parsed value:", value)
    except ValueError:
        print("The file content was not an integer!")
except FileNotFoundError:
    print("data.txt not found!")
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Explain how multiple except blocks help you handle different error types more precisely, referencing code clarity.`,
      initialCode: '',
      solution: `"""
Different exceptions often require different recovery strategies. 
By catching them separately, you can tailor your response (e.g., re-try file access vs. prompt user for a valid number). 
This precision keeps your code clear on what exactly went wrong.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'How do multiple except clauses improve error handling?',
      options: [
        'They force the code to recompile each time',
        'They let you react differently to each exception type',
        'They prevent code from running if more than one error is possible',
      ],
      correctAnswer: 1,
      explanations: [
        "Incorrect. Multiple except blocks don't require recompilation.",
        'Correct! Each exception class can have a distinct response.',
        'Incorrect. They do not block code execution for multiple potential errors.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const tryCatchFinallyLessons: Record<string, LessonContent> = {
  'flow-control': flowControlData,
  'nested-trycatch': nestedTryCatchData,
};

export const tryCatchFinallyLessonsTab: LessonsTab = {
  curriculum: tryCatchFinallyCurriculum,
  lessons: tryCatchFinallyLessons,
};
