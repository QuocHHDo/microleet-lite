import { Difficulty } from '@/common/commonConcept';
import { Curriculum, LessonContent, LessonsTab, PriorityLevel } from '@/common/commonLesson';

export const classAnatomyCurriculum: Curriculum = {
  title: 'Class Anatomy Curriculum',
  description:
    'Break down the internal structure of a class, covering fields, methods, and nested classes.',
  sections: [
    {
      id: 1,
      title: 'Fundamental Components',
      topics: [
        {
          id: 'class-fields',
          title: 'Fields & Properties',
          description:
            'How variables are declared and managed within the class scope.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'class-methods',
          title: 'Methods',
          description: 'Defining behaviors and logic within classes.',
          priority: PriorityLevel.Essential,
        },
      ],
    },
    {
      id: 2,
      title: 'Advanced Structures',
      topics: [
        {
          id: 'nested-classes',
          title: 'Nested & Inner Classes',
          description:
            'Scenarios where classes can exist within other classes, and why that\'s useful.',
          priority: PriorityLevel.Important,
        },
        {
          id: 'class-annotations',
          title: 'Annotations & Metadata',
          description:
            'Overview of how metadata can be attached to classes (e.g., @Entity).',
          priority: PriorityLevel.Beneficial,
        },
      ],
    },
  ],
};

// 1) Fields & Properties
const classFieldsData: LessonContent = {
  title: 'Fields & Properties',
  content: `
In Python, **fields** are typically defined either as **class attributes** (shared by all instances) or **instance attributes** (unique per instance, usually initialized in \`__init__\`). Python does not enforce private fields like some languages, but naming conventions (e.g., an underscore prefix) signal intent.

<h3>Defining Fields</h3>

- **Instance Attributes:** Declared within the \`__init__\` method. Each instance of the class gets its own copy.
- **Class Attributes:** Declared directly in the class body. All instances share this attribute.

<h3>Properties and Encapsulation</h3>

- Python uses the **\`@property\` decorator** to define getters and setters, allowing you to implement validation or logic behind attribute access.
- Private fields are not strictly enforced, but **\`__dunder\`** (double underscore) naming triggers **name mangling**, making direct access from outside the class less convenient.

<h3>Example: Basic Fields & Properties</h3>

\`\`\`python
class Person:
    population_count = 0  # class attribute

    def __init__(self, name, age):
        self.name = name      # instance attribute
        self._age = age       # protected-like by convention
        Person.population_count += 1

    @property
    def age(self):
        return self._age

    @age.setter
    def age(self, value):
        if value >= 0:
            self._age = value
        else:
            print("Age cannot be negative!")
\`\`\`
`,
  exercises: [
    {
      prompt: `1) Create a Python class \`Car\` with a class attribute \`total_cars\` that tracks the number of Car instances created.
2) Add an \`__init__\` that sets instance-level attributes like \`make\` and \`model\`. 
3) Optionally include a @property for \`make\` to ensure it isn't an empty string.`,
      initialCode: `class Car:
    # Your implementation here
    pass
`,
      solution: `class Car:
    total_cars = 0  # class attribute

    def __init__(self, make, model):
        Car.total_cars += 1
        self._make = make
        self.model = model

    @property
    def make(self):
        return self._make

    @make.setter
    def make(self, value):
        if value.strip():
            self._make = value
        else:
            print("Make cannot be empty.")
`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Explain in a short paragraph how Python's approach to fields differs from a statically typed language where you explicitly define private/protected/public fields.`,
      initialCode: '',
      solution: `"""
Unlike languages that enforce private or protected access at compile time (e.g., Java or C#), Python relies on naming conventions and decorators for encapsulation. 
All attributes are public by default, but prefixing with an underscore signals "protected," 
and prefixing with double underscores triggers name mangling to discourage direct external access. 
There's no compiler-level enforcement, making Python more flexible but relying on developer discipline.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following best describes a class attribute in Python?',
      options: [
        'An attribute defined in __init__ that each instance owns',
        'A variable at the module level, shared across all modules',
        'A variable defined directly in the class body, shared by all instances',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Attributes defined in __init__ are instance attributes.',
        'Incorrect. That describes a module-level variable, not a class attribute.',
        'Correct! Class attributes appear in the class definition, not inside methods.'
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'Why might you use a property (@property) in Python rather than directly accessing an attribute?',
      options: [
        'To rename the attribute throughout the entire codebase automatically',
        'To allow validation or logic upon getting/setting an attribute',
        'Because @property is mandatory for all attributes in Python',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. A property does not auto-rename attributes.',
        'Correct! Properties let you run code (validation, logging, etc.) upon reading or modifying a value.',
        'Incorrect. @property is optional and used only when needed.'
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 2) Methods
const classMethodsData: LessonContent = {
  title: 'Methods',
  content: `
Methods in Python are functions defined inside a class, typically taking self as the first parameter (except for static or class methods). Python does not enforce an explicit visibility model (public/private), but naming conventions still apply (e.g., underscore prefixes).

<h3>Types of Methods in Python</h3>

1. **Instance Methods**: Must include self as the first argument, operate on a specific instance.  
2. **Class Methods**: Use @classmethod and receive cls instead of self. They can modify class-level state.  
3. **Static Methods**: Use @staticmethod, do not receive self or cls. Essentially namespace-scoped functions within a class.

<h3>Example Methods in Python</h3>

\`\`\`python
class Calculator:
    def add(self, a, b):
        return a + b  # instance method

    @classmethod
    def info(cls):
        return "This is a Calculator class"

    @staticmethod
    def multiply(a, b):
        return a * b
\`\`\`
`,
  exercises: [
    {
      prompt: `Create a Python class \`BankAccount\` that includes:
- an \`__init__\` with a \`self.balance\` attribute
- an instance method \`deposit\` to add funds
- an instance method \`withdraw\` to remove funds if sufficient
- a class method \`bank_info\` returning a string about the bank name`,
      initialCode: `# Your code here
`,
      solution: `class BankAccount:
    bank_name = "Python Bank"

    def __init__(self, balance=0):
        self.balance = balance

    def deposit(self, amount):
        if amount > 0:
            self.balance += amount

    def withdraw(self, amount):
        if 0 < amount <= self.balance:
            self.balance -= amount

    @classmethod
    def bank_info(cls):
        return f"Welcome to {cls.bank_name}!"
`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `In a short paragraph, describe how you might simulate "private" methods in Python. Why doesn't Python enforce a strict private method concept?`,
      initialCode: '',
      solution: `"""
In Python, you simulate private methods by prefixing the name with an underscore (e.g., _my_method). 
This is a convention signaling it's internal and not intended for external use, but nothing prevents direct access. 
Python's philosophy is more flexible, relying on developers' discipline rather than strict compiler checks for private access.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which Python decorator would you use to define a method that operates on the class rather than a specific instance?',
      options: [
        '@staticmethod',
        '@classmethod',
        '@abstractmethod',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. @staticmethod does not receive a cls or self reference.',
        'Correct! @classmethod methods receive the class as the first parameter, allowing them to modify class attributes.',
        'Incorrect. @abstractmethod is used in abstract classes, not specifically for class-level operations.'
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the purpose of including `self` in an instance method signature?',
      options: [
        'It\'s a keyword in Python that activates the method at runtime',
        'It refers to the current instance of the class, allowing access to instance attributes and other methods',
        'It is required for all types of methods, including static',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. `self` is not a Python keyword but a naming convention for the instance reference.',
        'Correct! `self` is how Python passes the current instance to a method.',
        'Incorrect. Static methods don\'t include `self` at all.'
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

// 3) Nested & Inner Classes
const nestedClassesData: LessonContent = {
  title: 'Nested & Inner Classes',
  content: `
In Python, it's possible to define a class inside another class. Although less common than in languages like Java, nested classes can be useful for organizing code or creating objects scoped strictly within a containing class.

<h3>When to Use Nested Classes in Python</h3>

- **Encapsulation of Helper Logic**: If a class is only relevant within a particular context, nesting can reduce clutter.
- **Logical Grouping**: Show that a class is strongly tied to the outer class's functionality.

<h3>Access and Scope</h3>

- Unlike Java, Python doesn't have special "inner class" constructs. A nested class is just another class defined within the code block of the outer class.
- You can still reference outer class attributes or methods, but it\'s typically done by passing references (e.g., passing self).

<h3>Example</h3>

\`\`\`python
class Outer:
    def __init__(self, data):
        self.data = data

    class Inner:
        def process_data(self, outer_instance):
            return outer_instance.data.upper()
\`\`\`
`,
  exercises: [
    {
      prompt: `1) Create a Python class \`Museum\` with a nested class \`Exhibit\`.
2) \`Exhibit\` has a method \`show_info(museum_instance)\` that prints something about the museum, referencing a \`museum_name\` attribute.
3) Demonstrate usage by creating a \`Museum\` and \`Exhibit\`.`,
      initialCode: `# Your code here
`,
      solution: `class Museum:
    def __init__(self, museum_name):
        self.museum_name = museum_name

    class Exhibit:
        def show_info(self, museum_instance):
            print(f"Exhibit in museum: {museum_instance.museum_name}")

# Usage
museum = Museum("Python Heritage")
exhibit = Museum.Exhibit()
exhibit.show_info(museum)
`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Explain in a short paragraph why Python does not distinguish between "static nested classes" and "inner classes" the way Java does. How is scoping handled differently?`,
      initialCode: '',
      solution: `"""
Python treats nested classes as normal classes within a function scope. 
They don't automatically capture a reference to an instance (like Java's inner classes), 
nor do they differentiate between static or non-static contexts. 
Any reference or data sharing must be explicitly passed, so scoping is more explicit and flexible.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following best describes a nested class in Python?',
      options: [
        'A class defined at the module level but with a special static flag',
        'A regular class defined within another class\'s code block',
        'A global function for scoping logic inside a class',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Python does not have a “static” class definition like Java does.',
        'Correct! Python nested classes are just classes inside another class\'s body.',
        'Incorrect. Functions and classes have different syntaxes, and Python doesn\'t treat them the same as nested classes.'
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 4) Annotations & Metadata
const classAnnotationsData: LessonContent = {
  title: 'Annotations & Metadata',
  content: `
In Python, **annotations** often refer to *type hints* or decorators providing metadata about a class or its methods. While Python doesn't have built-in Java-style annotations, *decorators* can attach additional behavior or information.

<h3>Common Python "Annotation" Mechanisms</h3>

1. **Type Hints/Annotations**: e.g., name: str, def method(a: int) -> str:  
2. **Decorators**: e.g., @dataclass from dataclasses module, @property, @classmethod.

<h3>Why Use Annotations/Decorators?</h3>

- **Runtime Metadata**: Tools like IDEs or libraries (mypy, pydantic) use them to validate or auto-generate code.
- **Cleaner Code**: Decorators can simplify repetitive tasks (e.g., generating __init__ via @dataclass).

<h3>Example: Python Decorators as Metadata</h3>

\`\`\`python
from dataclasses import dataclass

@dataclass
class Book:
    title: str
    author: str
    price: float
\`\`\`
This automatically creates an \\_\\_init\\_\\_, \\_\\_repr\\_\\_, and other utility methods based on the annotated fields.
`,
  exercises: [
    {
      prompt: `Create a Python class \`Employee\` using \`@dataclass\`. It should have fields \`name: str\` and \`salary: float\`. Showcase how the auto-generated __init__ and __repr__ work.`,
      initialCode: ``,
      solution: `from dataclasses import dataclass

@dataclass
class Employee:
    name: str
    salary: float

# Demonstration
emp = Employee("Alice", 50000.0)
print(emp)  # Shows Employee(name='Alice', salary=50000.0)
`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Explain in a short paragraph why Python decorators (e.g., @dataclass, @property) can be viewed as metadata that modifies or enhances class behavior.`,
      initialCode: '',
      solution: `"""
Decorators let you attach logic or transformations to a class (or function) at definition time. 
They effectively "wrap" the class, adding methods or altering behaviors based on the annotated fields or code. 
Hence, they act as metadata, informing Python or external tools how to handle that class differently than a normal class.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a common way to add metadata or behavior to a Python class?',
      options: [
        'Defining a global variable with the same name as the class',
        'Using a decorator (e.g., @dataclass) at class definition time',
        'Modifying the class .pyc file after compilation',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. A global variable doesn\'t attach metadata to the class structure.',
        'Correct! Decorators can add or alter functionality and store metadata about the class.',
        'Incorrect. .pyc files are compiled bytecode; direct modification is not typical or recommended.'
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const classAnnotationsLesson: Record<string, LessonContent> = {
  'class-fields': classFieldsData,
  'class-methods': classMethodsData,
  'nested-classes': nestedClassesData,
  'class-annotations': classAnnotationsData,
}

export const classAnnotationsLessonsTab: LessonsTab = {
  curriculum: classAnatomyCurriculum,
  lessons: classAnnotationsLesson
}