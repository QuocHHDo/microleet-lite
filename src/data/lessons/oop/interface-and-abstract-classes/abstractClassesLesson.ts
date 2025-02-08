import { Difficulty } from '@/common/commonConcept';
import { Curriculum, LessonContent, LessonsTab, PriorityLevel } from '@/common/commonLesson';

export const abstractClassesCurriculum: Curriculum = {
  title: 'Abstract Classes vs. Concrete Classes Curriculum',
  description:
    'Distinguish between partially implemented (abstract) classes and fully implemented (concrete) classes.',
  sections: [
    {
      id: 1,
      title: 'When to Use Abstract Classes',
      topics: [
        {
          id: 'partial-implementation',
          title: 'Partial Implementation',
          description:
            'Shared logic and enforced contracts without requiring full implementations.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'inheritance-constraints',
          title: 'Inheritance Constraints',
          description:
            'Why abstract classes can only be extended, not instantiated.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 2,
      title: 'Concrete Classes & Polymorphism',
      topics: [
        {
          id: 'full-implementation',
          title: 'Full Implementation',
          description:
            'Classes with all details implemented, ready for instantiation.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'extension',
          title: 'Extension vs. Final',
          description:
            'When to allow further inheritance and when to mark classes as final (sealed).',
          priority: PriorityLevel.Important,
        },
      ],
    },
  ],
};

// 1) Partial Implementation
const partialImplementationData: LessonContent = {
  title: 'Partial Implementation',
  content: `
In many languages, **abstract classes** provide a foundation of shared logic while marking certain methods as abstract (i.e., required but not fully implemented). 

<h3>What Does "Partial Implementation" Mean?</h3>

An abstract class might implement some methods or hold common attributes, but it declares at least one abstract method that subclasses must implement. Python uses the **\`abc\`** module (Abstract Base Classes) to achieve this.

<h3>Example in Python</h3>

\`\`\`python
from abc import ABC, abstractmethod

class Shape(ABC):
    def __init__(self, color):
        self.color = color

    @abstractmethod
    def area(self):
        pass
\`\`\`

This **Shape** class partially implements the concept of a shape (storing color) but doesn\'t define how to compute the area. Subclasses must override \`area\`.
`,
  exercises: [
    {
      prompt: `Create a Python abstract class \`Animal\` with:
1) a concrete __init__ storing \`name\`,
2) an abstract method \`make_sound()\`,
3) a concrete method \`describe()\` that prints the name.`,
      initialCode: `# Use the 'abc' module and decorate the abstract method`,
      solution: `from abc import ABC, abstractmethod

class Animal(ABC):
    def __init__(self, name):
        self.name = name

    @abstractmethod
    def make_sound(self):
        pass

    def describe(self):
        print(f"This is {self.name}.")`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Explain in a short paragraph why partial implementation can help reduce code duplication in a codebase. Provide a brief Python snippet as an example if desired.`,
      initialCode: '',
      solution: `"""
Abstract classes allow developers to centralize shared functionality, 
such as logging or utility methods, while forcing subclasses to define their unique parts. 
This approach keeps the code DRY (Don't Repeat Yourself). 
For instance, if multiple shapes need a 'color' attribute, 
it can live in the abstract 'Shape' class rather than repeated in each subclass.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'What best describes a partial implementation in the context of abstract classes?',
      options: [
        'A class with no methods defined at all',
        'A class that has some common code but also abstract methods that subclasses must implement',
        'A class that can be instantiated but has empty methods',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Having no methods defined is more akin to an interface with no implementation.',
        'Correct! This is the essence of an abstract class with partial implementation.',
        'Incorrect. Abstract classes generally cannot be instantiated directly.'
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 2) Inheritance Constraints
const inheritanceConstraintsData: LessonContent = {
  title: 'Inheritance Constraints',
  content: `
Abstract classes **cannot be instantiated** directly. They\'re meant to be extended by concrete subclasses that fill in the missing pieces.

<h3>Why Abstract Classes Cannot Be Instantiated</h3>

They may have abstract methods with no implementation, so creating an instance wouldn\'t make sense. Python enforces this by raising an error if you try to instantiate an abstract class.

<h3>Python Example</h3>

\`\`\`python
shape = Shape("red")  # Raises TypeError if Shape is abstract and has unimplemented methods
\`\`\`

Python\'s **\`abc\`** module ensures at least one abstract method remains unimplemented to keep the class abstract.
`,
  exercises: [
    {
      prompt: `Try writing code that instantiates a Python abstract class with an abstract method. Show the error you get, and then fix it by creating a concrete subclass.`,
      initialCode: '',
      solution: `"""
Example Code:

from abc import ABC, abstractmethod

class Vehicle(ABC):
    @abstractmethod
    def drive(self):
        pass

# Attempt to instantiate
# v = Vehicle()  # TypeError: Can't instantiate abstract class Vehicle with abstract method drive

# Fix by creating a concrete subclass:
class Car(Vehicle):
    def drive(self):
        print("Car is driving!")

c = Car()
c.drive()  # "Car is driving!"
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Explain in a paragraph how other languages (like Java or C#) enforce the same rule that abstract classes cannot be instantiated, and compare it briefly to Python\'s approach.`,
      initialCode: '',
      solution: `"""
Java and C# designate classes with the 'abstract' keyword, which prevents instantiation at compile time. 
Python enforces this rule at runtime through the abc module. 
All these languages share the same design principle: forcing developers to extend abstract classes 
and implement missing pieces before creating actual objects.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'What happens if you try to instantiate an abstract class in Python?',
      options: [
        'It succeeds, but all abstract methods are skipped',
        'Python automatically implements the abstract methods with pass',
        'A TypeError is raised at runtime',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Abstract methods cannot be “skipped.”',
        'Incorrect. Python will not implement them automatically.',
        'Correct! Python refuses to instantiate classes with unimplemented abstract methods.'
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 3) Full Implementation
const fullImplementationData: LessonContent = {
  title: 'Full Implementation',
  content: `
A **concrete class** is fully implemented and ready to be instantiated. It contains no abstract methods and provides all details necessary for object creation and usage.

<h3>Concrete Classes in Python</h3>

Any class that does not use the **\`@abstractmethod\`** decorator or that implements all inherited abstract methods is considered concrete. You can call it directly to create instances.

<h3>Example</h3>

\`\`\`python
class Circle(Shape):
    def __init__(self, color, radius):
        super().__init__(color)
        self.radius = radius

    def area(self):
        return 3.14 * self.radius * self.radius

c = Circle("blue", 5)
print(c.area())  # Concrete usage
\`\`\`

This Circle class fully implements the \`area\` method, so it\'s no longer abstract.
`,
  exercises: [
    {
      prompt: `Create a fully implemented Python class called \`Rectangle\` that extends an abstract \`Shape\` class. The \`Rectangle\` needs width and height fields, plus an area method returning width * height.`,
      initialCode: '',
      solution: `from abc import ABC, abstractmethod

class Shape(ABC):
    def __init__(self, color):
        self.color = color

    @abstractmethod
    def area(self):
        pass

class Rectangle(Shape):
    def __init__(self, color, width, height):
        super().__init__(color)
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Explain in a paragraph why some classes in a codebase remain concrete and never become abstract, referencing typical Python use cases.`,
      initialCode: '',
      solution: `"""
Some classes are naturally complete because they provide all needed functionality. 
For example, a 'Logger' class that includes methods for writing to console or files might not need extension. 
It's fully usable as-is, so no abstract methods are necessary. 
In Python, such classes are the majority: they solve a specific task without requiring further subclass overrides.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'What distinguishes a “concrete” class from an abstract class?',
      options: [
        'It cannot define any methods',
        'It has no unimplemented abstract methods, making it instantiable',
        'It uses special decorators for every method',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Concrete classes can define many methods.',
        'Correct! Concrete classes fully implement all methods, so they can be instantiated.',
        'Incorrect. Decorators are optional; not required for a class to be concrete.'
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 4) Extension vs. Final
const extensionData: LessonContent = {
  title: 'Extension vs. Final',
  content: `
Some languages allow you to mark classes as **final** (or sealed), preventing further inheritance. In Python, there\'s no built-in keyword for “final,” but you can **communicate** or enforce it via convention or external tools.

<h3>When to Allow Extension</h3>

If you expect others to subclass your class to add or modify behavior, ensure it\'s designed for inheritance, with documented extension points (like certain methods).

<h3>When to Mark as Final</h3>

If a class\'s behavior should not be overridden—maybe it\'s critical for system integrity—some languages use final classes to prevent misuse. Python typically relies on **naming conventions** or docstrings to discourage extending.

<h3>Example</h3>

\`\`\`python
# There's no true final keyword in Python, but you can do:
class _MyInternalClass:
    """Indicates it's for internal use, not intended for subclassing."""
\`\`\`
`,
  exercises: [
    {
      prompt: `Describe how you might communicate in Python that a class isn't meant to be subclassed (though it's not enforced by the language). Give a brief example of naming or docstring conventions.`,
      initialCode: '',
      solution: `"""
You can prefix the class with an underscore or add a docstring note:
class _InternalClass:
    "This class is for internal usage only and not intended for subclassing."

These are conventions rather than hard enforcement, 
relying on developer discipline to respect them.
"""`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: `In a short paragraph, compare how Java or C# might use final or sealed classes to accomplish the same goal (no further subclassing), highlighting how Python differs.`,
      initialCode: '',
      solution: `"""
Java's final and C#'s sealed keywords explicitly prevent subclassing. 
This is enforced by the compiler. 
Python lacks a built-in mechanism, so final-like behavior relies on conventions or third-party libraries (e.g., 'typing.final' decorator), 
but it's not strictly enforced by the interpreter.
"""`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which statement accurately describes “final” (or sealed) classes in Python?',
      options: [
        'They are declared using the final keyword in the class definition',
        'There is no built-in final mechanism; it\'s typically done by convention or external tools',
        'They are the default type of class in Python',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Python has no final keyword for classes in standard usage.',
        'Correct! Python relies on naming conventions, docstrings, or external libraries to simulate final behavior.',
        'Incorrect. By default, Python classes are extendable unless indicated otherwise by convention.'
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const abstractClassesLessons: Record<string, LessonContent> = {
  'partial-implementation': partialImplementationData,
  'inheritance-constraints': inheritanceConstraintsData,
  'full-implementation': fullImplementationData,
  'extension': extensionData
}

export const abstractClassesLessonsTab: LessonsTab = {
  curriculum: abstractClassesCurriculum,
  lessons: abstractClassesLessons
}