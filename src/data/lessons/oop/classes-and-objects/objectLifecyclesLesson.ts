import { Difficulty } from '@/common/commonConcept';
import {
  Curriculum,
  LessonContent,
  LessonsTab,
  PriorityLevel,
} from '@/common/commonLesson';

export const objectLifecyclesCurriculum: Curriculum = {
  title: 'Object Lifecycles Curriculum',
  description:
    'Examine how objects are born, live, and die—covering memory management and lifecycle callbacks.',
  sections: [
    {
      id: 1,
      title: 'Lifecycle Stages',
      topics: [
        {
          id: 'instantiation',
          title: 'Instantiation',
          description: 'How objects are allocated and constructed in memory.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'initialization',
          title: 'Initialization',
          description:
            'Steps the runtime or language takes to finalize object creation.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 2,
      title: 'Destruction & Cleanup',
      topics: [
        {
          id: 'garbage-collection',
          title: 'Garbage Collection',
          description:
            'How high-level languages handle deallocation automatically.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'destructors-finalize',
          title: 'Destructors & Finalizers',
          description:
            'Explains finalizers in C++, or .NET/Java equivalents, along with their best practices.',
          priority: PriorityLevel.Important,
        },
      ],
    },
  ],
};

// 1) Instantiation
const instantiationData: LessonContent = {
  title: 'Instantiation',
  content: `
**Instantiation** is the process of allocating space for an object and preparing it for use. In Python, instantiation occurs when you call a class like a function, e.g., \`obj = MyClass()\`. This calls the class\'s \`__new__\` method (rarely overridden) and then \`__init__\`.

<h3>Python Instantiation Steps</h3>

1. **\`__new__\`**: Allocates memory and returns a new instance (uncommon to override, but possible).
2. **\`__init__\`**: Initializes the instance\'s attributes.

<h3>Example</h3>

\`\`\`python
class MyClass:
    def __init__(self):
        print("Instance being initialized")

obj = MyClass()  # Instantiation triggers __new__ then __init__
\`\`\`
`,
  exercises: [
    {
      prompt: `Create a simple Python class \`Counter\` that prints a message when an instance is created (in \`__init__\`). Instantiate it and confirm the message appears.`,
      initialCode: '',
      solution: `class Counter:
    def __init__(self):
        print("Counter instance created!")

c = Counter()  # "Counter instance created!"
`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: `Explain in a paragraph how Python's instantiation differs from languages where constructors are called automatically by the runtime, focusing on Python's \`__new__\` and \`__init__\` roles.`,
      initialCode: '',
      solution: `"""
In Python, object instantiation is a two-step process. First, __new__ is a special method that actually creates the object 
in memory. Then, __init__ is called to initialize the attributes of the newly created instance. 
Many other languages merge these steps into a single constructor call. 
In Python, developers rarely override __new__ unless they need fine-grained control over object creation itself, 
like implementing a singleton pattern or returning instances of different classes.
"""`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which Python method is responsible for actually creating a new instance in memory before initialization?',
      options: ['__init__', '__new__', '__del__'],
      correctAnswer: 1,
      explanations: [
        'Incorrect. __init__ initializes the instance but does not create it.',
        'Correct! __new__ allocates and returns a new object instance.',
        'Incorrect. __del__ is a finalizer method called when the object is about to be destroyed.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

// 2) Initialization
const initializationData: LessonContent = {
  title: 'Initialization',
  content: `
After an object is instantiated, **initialization** completes any setup tasks, typically in Python\'s **\`__init__\`** method. This step sets attributes, checks invariants, or loads resources.

<h3>Python\'s __init__ Method</h3>

- Runs after \`__new__\` returns a new instance.
- Prepares the object for immediate usage, raising exceptions if conditions aren\'t met.

<h3>Example</h3>

\`\`\`python
class User:
    def __init__(self, username):
        if not username:
            raise ValueError("Username cannot be empty.")
        self.username = username
\`\`\`

This ensures that a \`User\` can\'t exist without a valid username, finalizing initialization.
`,
  exercises: [
    {
      prompt: `Create a Python class \`DatabaseConnection\` that:
1) Accepts a \`connection_string\` in __init__
2) Validates that the connection_string is non-empty
3) Provides a method \`connect()\` that prints "Connecting to {connection_string}..."`,
      initialCode: '',
      solution: `class DatabaseConnection:
    def __init__(self, connection_string):
        if not connection_string:
            raise ValueError("connection_string cannot be empty.")
        self.connection_string = connection_string

    def connect(self):
        print(f"Connecting to {self.connection_string}...")
`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Explain how an object might be left partially initialized if an exception is raised partway through Python's __init__ method, and what typically happens to that object afterward.`,
      initialCode: '',
      solution: `"""
If an exception is thrown inside __init__, initialization aborts, and the object is discarded. 
Python does not store a reference to the partially constructed object unless it's stored somewhere else. 
This helps prevent logically incomplete instances from persisting in the system.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is a reason to perform validation in __init__?',
      options: [
        'To ensure the object cannot be misused or left in an invalid state',
        'To automatically generate documentation for the class',
        'To rename the class at runtime',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct! Proper validation prevents invalid objects from existing.',
        'Incorrect. Docstrings or external tools handle documentation, not __init__ validation.',
        'Incorrect. Class renaming at runtime is not standard practice.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 3) Garbage Collection
const garbageCollectionData: LessonContent = {
  title: 'Garbage Collection',
  content: `
In Python, **garbage collection** automatically frees memory when objects are no longer needed. Python primarily uses reference counting plus a cyclic garbage collector to handle objects with circular references.

<h3>Reference Counting</h3>

- Each object tracks how many references point to it.
- When the count drops to zero, Python deallocates the object immediately in CPython.

<h3>Cyclic Garbage Collector</h3>

- Handles objects that reference each other in a cycle, which reference counting alone can\'t free.

<h3>Example</h3>

\`\`\`python
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

# If two nodes reference each other, only the cyclic GC can free them.
\`\`\`
`,
  exercises: [
    {
      prompt: `Explain how reference counting works in CPython and why circular references require a separate cycle-detection algorithm. Provide a short code snippet demonstrating a circular reference scenario.`,
      initialCode: '',
      solution: `"""
Reference counting increments an object's count whenever a new reference is made, 
and decrements it when references go out of scope. If objects point to each other in a loop, 
the count never drops to zero automatically. CPython's cycle collector identifies these loops and reclaims them.

Example:
class A:
    def __init__(self):
        self.ref = None

obj1 = A()
obj2 = A()
obj1.ref = obj2
obj2.ref = obj1  # circular reference
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `In a short paragraph, describe why a developer typically doesn't have to worry about manually freeing objects in Python, but might still need to handle other resources (files, network sockets) explicitly.`,
      initialCode: '',
      solution: `"""
Python's garbage collector automatically frees memory for objects no longer used. 
However, resources like open files or network sockets aren't purely memory objects; 
they hold external resources requiring explicit closure. 
Python provides context managers (the 'with' statement) to ensure such resources 
are properly released even in the face of exceptions.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the main reason Python needs a cycle-detection mechanism in addition to reference counting?',
      options: [
        "Reference counting by itself can't free objects that reference each other in a cycle",
        'It makes Python code always run faster',
        'It ensures Python supports dynamic typing',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct! Cycles break the simple reference-count=0 rule.',
        "Incorrect. GC mechanisms don't always relate directly to speed improvements.",
        'Incorrect. Dynamic typing is unrelated to cycle detection.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 4) Destructors & Finalizers
const destructorsFinalizersData: LessonContent = {
  title: 'Destructors & Finalizers',
  content: `
In some languages, destructors or finalizers are called when an object is destroyed. Python offers the **\`__del__\`** method, but its usage is discouraged due to unpredictability in timing. Resource management is typically handled via context managers or explicit close methods.

<h3>Python\'s __del__ Method</h3>

- Called when an object\'s reference count hits zero or the GC finalizes it.
- Not guaranteed to be called immediately or at all if cyclic references exist.
- Can complicate code if it tries to do important work.

<h3>Best Practices</h3>

- Use **with** statement and context managers to manage resources (files, locks, etc.).
- Avoid relying on __del__ for essential logic. 

<h3>Example</h3>

\`\`\`python
class Example:
    def __del__(self):
        print("Object being finalized, but timing not guaranteed!")
\`\`\`
`,
  exercises: [
    {
      prompt: `Create a Python class \`TempFile\` that opens a temporary file in __init__. 
Implement a __del__ method that tries to close the file. 
Then explain why using a 'with' context manager is still better.`,
      initialCode: '',
      solution: `import tempfile

class TempFile:
    def __init__(self):
        self.file = tempfile.TemporaryFile(mode='w+')
        print("TempFile created, file opened.")

    def __del__(self):
        print("TempFile __del__ called. Closing file if still open.")
        if not self.file.closed:
            self.file.close()

# Explanation:
# Because Python doesn't guarantee when __del__ is called, 
# the file might remain open longer than expected. 
# Using "with" ensures prompt cleanup.
`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Briefly describe the pitfalls of relying on __del__ for critical cleanup in Python, comparing it to languages like C++ that have deterministic destructors.`,
      initialCode: '',
      solution: `"""
Python's garbage collection does not guarantee when an object is finalized, 
so __del__ might not run immediately or at all if there are reference cycles. 
In contrast, C++ destructors are called deterministically when an object goes out of scope, 
making it easier to rely on them for cleanup. 
Python favors context managers for deterministic cleanup.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'Why is relying on __del__ for releasing important resources risky in Python?',
      options: [
        '__del__ is guaranteed to run exactly when the object goes out of scope',
        '__del__ can run at an unpredictable time or not at all if reference cycles exist',
        '__del__ automatically logs all calls to stdout',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Python does not guarantee timely calling of __del__.',
        'Correct! The time and certainty of __del__ are not guaranteed in Python.',
        'Incorrect. No automatic logging is performed by default.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const objectLifecyclesLessons: Record<string, LessonContent> = {
  instantiation: instantiationData,
  initialization: initializationData,
  'garbage-collection': garbageCollectionData,
  'destructors-finalize': destructorsFinalizersData,
};

export const objectLifecyclesLessonsTab: LessonsTab = {
  curriculum: objectLifecyclesCurriculum,
  lessons: objectLifecyclesLessons,
};
