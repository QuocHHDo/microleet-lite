import { Difficulty } from '@/common/commonConcept';
import {
  Curriculum,
  LessonContent,
  LessonsTab,
  PriorityLevel,
} from '@/common/commonLesson';

export const constructorsCurriculum: Curriculum = {
  title: 'Constructors Curriculum',
  description:
    'Understand the role of constructors in initializing class instances and enforcing invariants.',
  sections: [
    {
      id: 1,
      title: 'Constructor Basics',
      topics: [
        {
          id: 'default-constructor',
          title: 'Default & Parameterized',
          description:
            'Explains default constructors, constructor overloading, and passing arguments.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'object-initialization',
          title: 'Object Initialization',
          description:
            'Discusses best practices for preparing object state during construction.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 2,
      title: 'Advanced Concepts',
      topics: [
        {
          id: 'copy-constructors',
          title: 'Copy Constructors',
          description:
            'When and how to create a new instance from an existing instance.',
          priority: PriorityLevel.Beneficial,
        },
        {
          id: 'exceptions-in-constructors',
          title: 'Exceptions in Constructors',
          description:
            'How to handle failures or invalid states at construction time.',
          priority: PriorityLevel.Important,
        },
      ],
    },
  ],
};

// 1) Default & Parameterized
const defaultParameterizedConstructorsData: LessonContent = {
  title: 'Default & Parameterized Constructors',
  content: `
In many languages, a **default constructor** initializes objects with no arguments, while a **parameterized constructor** accepts arguments to set initial values. 

<h3>Python Perspective</h3>

- Python doesn't call it a "constructor"; instead it has the **\`__init__\`** method.
- You can simulate a “default constructor” by giving default parameter values in \`__init__\`.
- Parameterized constructors in Python are just \`__init__\` methods with required arguments.

<h3>Example</h3>

\`\`\`python
class Car:
    def __init__(self, make="Generic", model="Car"):
        self.make = make
        self.model = model

# Default-like usage
c1 = Car()
# Parameterized usage
c2 = Car("Tesla", "Model S")
\`\`\`
`,
  exercises: [
    {
      prompt: `Create a Python class \`Person\` that has:
1) A default-like \`__init__\` accepting no arguments, setting \`name\` to "Unknown".
2) A parameterized \`__init__\` that overrides the default if a name is provided.
Demonstrate usage with both approaches.`,
      initialCode: `# Your code here`,
      solution: `class Person:
    def __init__(self, name=None):
        if name:
            self.name = name
        else:
            self.name = "Unknown"

# Usage
p1 = Person()
p2 = Person("Alice")

print(p1.name)  # "Unknown"
print(p2.name)  # "Alice"
`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: `Explain in a short paragraph how some statically typed languages differ from Python regarding default and parameterized constructors.`,
      initialCode: '',
      solution: `"""
In statically typed languages (e.g., Java or C#), you might explicitly define multiple constructors. 
A "default constructor" has no parameters, and a "parameterized constructor" takes arguments. 
If none is defined, the compiler can generate a default constructor. 
Python, by contrast, only has the __init__ method, and constructor "overloads" 
are simulated using default parameter values or conditional logic within __init__.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'How do you simulate a default constructor in Python?',
      options: [
        'Declare multiple __init__ methods with different signatures',
        'Use default parameter values in a single __init__ method',
        'Call a magic function named __constructor__',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Python does not support multiple __init__ methods overloading.',
        'Correct! Default values allow calling the class without arguments.',
        "Incorrect. Python's constructor entry point is __init__, not __constructor__.",
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which statement best describes parameterized constructors in Python?',
      options: [
        'They must be declared with the @parameterized decorator',
        'They are not possible in Python',
        'They are simply __init__ methods that require arguments',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. There is no such decorator in standard Python.',
        'Incorrect. Python can accept parameters in __init__ just fine.',
        "Correct! Python's __init__ with arguments is considered a parameterized constructor equivalent.",
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

// 2) Object Initialization
const objectInitializationData: LessonContent = {
  title: 'Object Initialization',
  content: `
Object initialization sets up the state of an object when it is first created. Python's **\`__init__\`** is where you initialize attributes and ensure that the object is ready to use.

<h3>Best Practices in Python</h3>

1. **Validate Input Early**: If parameters are invalid, raise an exception in \`__init__\`.
2. **Establish All Attributes**: Avoid creating new attributes outside \`__init__\`.
3. **Minimal Logic**: Keep \`__init__\` simpler rather than coding complex logic.

<h3>Example</h3>

\`\`\`python
class BankAccount:
    def __init__(self, account_number, balance):
        if balance < 0:
            raise ValueError("Balance cannot be negative at initialization.")
        self.account_number = account_number
        self.balance = balance
\`\`\`

Compared to some other languages, Python\'s initialization is more flexible. You can even create attributes dynamically, though that may reduce clarity.
`,
  exercises: [
    {
      prompt: `Create a Python class \`UserProfile\` that:
1) Takes a username and email in \`__init__\`
2) Validates that email contains '@'
3) Raises an exception if email is invalid`,
      initialCode: '',
      solution: `class UserProfile:
    def __init__(self, username, email):
        if '@' not in email:
            raise ValueError("Invalid email format.")
        self.username = username
        self.email = email

# Usage example:
# valid_user = UserProfile("Bob", "bob@example.com")
# invalid_user = UserProfile("Bob", "bobexample.com")  # Will raise ValueError
`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `In a short paragraph, discuss why some developers recommend limiting complex logic within Python's __init__ method. Provide an example of what might be considered "too much logic."`,
      initialCode: '',
      solution: `"""
If __init__ becomes too large, it can obscure the class\'s purpose and make debugging harder. 
Complex database calls, heavy computations, or extensive conditionals are best refactored into separate methods 
so that object creation remains straightforward. For example, an __init__ that opens files, reads data, 
and transforms it all at once can become unwieldy and make unit testing more difficult.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'What is a recommended approach to handling invalid arguments in __init__?',
      options: [
        'Automatically fix the data by setting default values silently',
        'Raise an exception so that invalid objects are never created',
        'Ignore the invalid data and allow the object to remain in a half-initialized state',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Silently fixing data can hide errors.',
        'Correct! Raising exceptions prevents objects from existing in invalid states.',
        'Incorrect. Having half-initialized objects can lead to runtime bugs.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 3) Copy Constructors
const copyConstructorsData: LessonContent = {
  title: 'Copy Constructors',
  content: `
A **copy constructor** creates a new instance from an existing instance. In languages like C++ or Java, you might see explicit copy constructors. Python typically relies on:
- The **copy** module (shallow vs. deep copy).
- Manual creation of a new object by passing attributes of the old one.

<h3>Python Approach</h3>

- Python does not have an official "copy constructor." 
- You can implement something similar by writing a class method or function that takes an existing object and returns a new instance with duplicated data.

<h3>Example</h3>

\`\`\`python
import copy

class Document:
    def __init__(self, title, content):
        self.title = title
        self.content = content

    @classmethod
    def from_existing(cls, doc):
        # Manual 'copy constructor'
        return cls(doc.title, copy.copy(doc.content))
\`\`\`

This replicates part of the data and can be extended for deeper copying if needed.
`,
  exercises: [
    {
      prompt: `Create a Python class \`Employee\` with attributes \`name\` and \`skills\` (list). Add a class method \`clone\` that returns a new Employee, duplicating name but shallow-copying skills. Demonstrate how changing the skill list in one instance might affect the other.`,
      initialCode: '',
      solution: `import copy

class Employee:
    def __init__(self, name, skills):
        self.name = name
        self.skills = skills

    @classmethod
    def clone(cls, other_employee):
        # Shallow copy of skills
        return cls(other_employee.name, copy.copy(other_employee.skills))

# Demonstration
emp1 = Employee("Alice", ["Python", "Git"])
emp2 = Employee.clone(emp1)

emp2.skills.append("Docker")

print(emp1.skills)  # Notice 'Docker' if shallow copy not used or if reference is shared
print(emp2.skills)
`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Explain why Python doesn't rely on a formal "copy constructor" keyword or syntax like in C++. Give a short example how you'd do a deep copy if needed.`,
      initialCode: '',
      solution: `"""
Python\'s data model is dynamic and does not require a formal copy constructor concept. 
Instead, we can use the copy module, or manually replicate fields, granting more flexibility. 
For a deep copy:

import copy
obj2 = copy.deepcopy(obj1)

This recursively copies nested objects rather than referencing them.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which statement best describes copy constructors in Python?',
      options: [
        'They are provided natively as __copy__ methods in all Python classes by default',
        'They must be called automatically whenever an assignment is made',
        'They are not built into Python as a language feature; developers usually use copy or define a custom method',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Python does not auto-generate __copy__ in that manner.',
        'Incorrect. An assignment in Python just binds another reference, not a copy.',
        'Correct! Python typically uses the copy module or custom solutions for copying.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 4) Exceptions in Constructors
const exceptionsInConstructorsData: LessonContent = {
  title: 'Exceptions in Constructors',
  content: `
During object construction, invalid or missing data might prompt an exception. Python\'s \`__init__\` can raise exceptions freely. If an exception occurs, the object is never fully initialized.

<h3>Why Throw Exceptions in __init__?</h3>

- Enforces invariants (e.g., no negative balances or invalid email formats).
- Prevents partially constructed objects.

<h3>Handling Failures</h3>

- In Python, there's no special destructor call if \`__init__\` fails; the partial object is discarded once out of scope.
- Resources acquired before failure might need cleanup, ideally done before raising or using a context manager.

<h3>Example</h3>

\`\`\`python
class SafeValue:
    def __init__(self, number):
        if number < 0:
            raise ValueError("number cannot be negative!")
        self.number = number
\`\`\`
`,
  exercises: [
    {
      prompt: `Create a Python class \`SecureFile\` that:
1) Opens a file in \`__init__\`
2) Raises an exception if the file cannot be opened
3) Ensures the file is closed before the exception is propagated.`,
      initialCode: '',
      solution: `class SecureFile:
    def __init__(self, filepath):
        self.file = None
        try:
            self.file = open(filepath, 'r')
        except Exception as e:
            # Cleanup (if partially opened)
            if self.file:
                self.file.close()
            raise e  # Re-raise the exception

    def read_data(self):
        return self.file.read()

    def close(self):
        if self.file:
            self.file.close()
`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Explain in a short paragraph why Python's constructor exceptions might be simpler to handle compared to languages that have more rigid object lifecycles (e.g., C++), focusing on cleanup and partial construction issues.`,
      initialCode: '',
      solution: `"""
In Python, if an exception is raised in __init__, the object is not fully created and is soon eligible for garbage collection. 
You can handle any needed cleanup (like closing files) before re-raising the exception. 
Languages like C++ must handle destructors or rollback logic in case of partially constructed objects, 
which can be more complex.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'How does Python handle an object whose __init__ raises an exception?',
      options: [
        'It partially constructs the object but continues with default values',
        'It discards the object, and the reference goes out of scope once the exception propagates',
        'It silently handles the exception, resulting in a valid but empty object',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. The process stops; no default values are assigned automatically.',
        'Correct! The object is never fully created, and Python discards it as the exception is raised.',
        'Incorrect. Python does not silently handle exceptions during __init__.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const constructorsLessons: Record<string, LessonContent> = {
  'default-constructor': defaultParameterizedConstructorsData,
  'object-initialization': objectInitializationData,
  'copy-constructors': copyConstructorsData,
  'exceptions-in-constructors': exceptionsInConstructorsData,
};

export const constructorsLessonsTab: LessonsTab = {
  curriculum: constructorsCurriculum,
  lessons: constructorsLessons,
};
