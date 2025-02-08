import { Difficulty } from '@/common/commonConcept';
import {
  Curriculum,
  LessonContent,
  LessonsTab,
  PriorityLevel,
} from '@/common/commonLesson';

export const interfaceVsImplementationCurriculum: Curriculum = {
  title: 'Interface vs. Implementation Inheritance Curriculum',
  description:
    'Delve into the distinction between inheriting signatures (interfaces) and inheriting concrete behavior (classes).',
  sections: [
    {
      id: 1,
      title: 'Core Distinctions',
      topics: [
        {
          id: 'interface-inheritance',
          title: 'Interface Inheritance',
          description: 'Inheritance of method signatures and structure only.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'implementation-inheritance',
          title: 'Implementation Inheritance',
          description:
            'Subclasses adopting concrete code from parent classes, with optional overrides.',
          priority: PriorityLevel.Essential,
        },
      ],
    },
    {
      id: 2,
      title: 'Pros & Cons',
      topics: [
        {
          id: 'flexibility',
          title: 'Flexibility vs. Complexity',
          description:
            'How purely interface-based designs can reduce coupling but sometimes lead to boilerplate code.',
          priority: PriorityLevel.Important,
        },
        {
          id: 'diamond-problem',
          title: 'Multiple Inheritance & Diamond Problem',
          description:
            'Differences between language approaches to multiple interfaces vs. multiple class inheritance.',
          priority: PriorityLevel.Beneficial,
        },
      ],
    },
  ],
};

// 1) Interface Inheritance
const interfaceInheritanceData: LessonContent = {
  title: 'Interface Inheritance',
  content: `
**Interface inheritance** means inheriting only the method signatures or structure that a class must implement, without inheriting concrete code. 

<h3>Python\'s Take on Interface Inheritance</h3>

Python accomplishes this via **Abstract Base Classes** (ABCs). A child class inherits abstract methods from the parent ABC, but must provide the actual implementations.

<h3>Example</h3>

\`\`\`python
class PaymentABC(ABC):
    @abstractmethod
    def pay(self, amount):
        pass

class PayPal(PaymentABC):
    def pay(self, amount):
        print(f"Paying \${amount} via PayPal")
\`\`\`

PayPal “inherits” the signature of **pay**, but not any implementation code, because PaymentABC doesn\'t provide it.
`,
  exercises: [
    {
      prompt: `Create a Python ABC \`ShapeInterface\` with methods \`draw()\` and \`get_area()\`. Then make a class \`Triangle\` that inherits this interface, providing concrete implementations.`,
      initialCode: '',
      solution: `from abc import ABC, abstractmethod

class ShapeInterface(ABC):
    @abstractmethod
    def draw(self):
        pass

    @abstractmethod
    def get_area(self):
        pass

class Triangle(ShapeInterface):
    def __init__(self, base, height):
        self.base = base
        self.height = height

    def draw(self):
        print("Drawing a triangle.")

    def get_area(self):
        return 0.5 * self.base * self.height
`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Explain in a short paragraph why "interface inheritance" focuses on the contract (what methods exist) instead of the code (how the methods work), referencing Python's ABC module.`,
      initialCode: '',
      solution: `"""
Interface inheritance ensures each subclass provides the required methods. 
By using abstract methods with no implementation, an ABC states "You must define how these methods work." 
The focus is on method signatures (the contract), leaving the "how" to each concrete class. 
This aligns with Python's ABC approach to specifying minimal method skeletons.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'What does interface inheritance typically not provide?',
      options: [
        'Method signatures and required properties',
        'Concrete code for each method',
        'A contract that subclasses must fulfill',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Interface inheritance does include method signatures.',
        'Correct! The interface only provides signatures, not the actual implementation.',
        'Incorrect. Interfaces do define a contract for implementing classes.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 2) Implementation Inheritance
const implementationInheritanceData: LessonContent = {
  title: 'Implementation Inheritance',
  content: `
**Implementation inheritance** occurs when a class inherits concrete code from its parent, potentially overriding or extending it. 

<h3>Python Example</h3>

\`\`\`python
class Animal:
    def make_sound(self):
        print("Generic sound")

class Dog(Animal):
    def make_sound(self):
        print("Bark!")
\`\`\`

Dog inherits the **make_sound** method from Animal but overrides it. If **Dog** doesn't override, it can use the parent's existing implementation.

<h3>Key Points</h3>

- Encourages reuse of existing logic.
- Can lead to tighter coupling if the child depends heavily on parent internals.
`,
  exercises: [
    {
      prompt: `Create a Python class \`BaseLogger\` with a method \`log()\` that prints a message. Then create a \`FileLogger\` subclass overriding \`log()\` to write the message to a file (in a simulated way).`,
      initialCode: '',
      solution: `class BaseLogger:
    def log(self, message):
        print(f"Base logger: {message}")

class FileLogger(BaseLogger):
    def log(self, message):
        print(f"Writing '{message}' to a file (simulated).")
`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `In a short paragraph, describe the trade-off: code reuse via inheritance vs. risking potential fragility when the parent class changes.`,
      initialCode: '',
      solution: `"""
Inheritance can save effort by reusing parent logic. 
However, if the parent class changes internal structures or method behavior, child classes relying on those details may break. 
This fragility is a key downside to deep or frequent reliance on implementation inheritance.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is characteristic of implementation inheritance?',
      options: [
        'A parent class provides only method signatures, no implementation',
        'A child class inherits concrete behavior, potentially overriding or extending it',
        'It cannot use any code from the parent',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. That describes interface inheritance.',
        'Correct! Implementation inheritance inherits actual code.',
        'Incorrect. Implementation inheritance specifically involves using parent code.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 3) Flexibility vs. Complexity
const flexibilityData: LessonContent = {
  title: 'Flexibility vs. Complexity',
  content: `
**Interface-based designs** can offer more flexibility because classes only rely on the required method signatures. **Implementation inheritance** can reduce code duplication but introduces tighter coupling.

<h3>Purely Interface-Based Design</h3>

Can lead to **loose coupling** but might increase boilerplate since each class must provide its own implementation for shared behavior.

<h3>Implementation-Based Design</h3>

Simplifies reuse (the parent\'s code is inherited) but can create complex inheritance structures that are harder to maintain.

<h3>Pythonic Balance</h3>

Python developers often mix both, leaning on ABCs for clear contracts and using some inheritance for partial reuse, while also using composition where suitable.
`,
  exercises: [
    {
      prompt: `Write a paragraph comparing how you might design a "Shape" hierarchy purely with interfaces (ABCs) versus using a common base class with partial implementations in Python. Illustrate the trade-off briefly.`,
      initialCode: '',
      solution: `"""
Pure interface approach: Each shape (Circle, Square, etc.) implements all methods individually, 
ensuring minimal coupling but more repeated code. 
A partial implementation in a 'ShapeBase' class can handle shared logic (e.g., color management), 
reducing duplication at the cost of tighter inheritance coupling. 
Python's flexibility allows either approach, 
but many prefer balancing partial code reuse with composition for more robust designs.
"""`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: `Give a short code snippet showing an ABC approach for shapes vs. a base class approach, highlighting the difference in structure.`,
      initialCode: '',
      solution: `"""
# ABC approach:
class ShapeInterface(ABC):
    @abstractmethod
    def draw(self): pass
    @abstractmethod
    def area(self): pass

class Circle(ShapeInterface):
    def draw(self):
        ...
    def area(self):
        ...

# Base class approach:
class ShapeBase:
    def __init__(self, color):
        self.color = color
    def draw_outline(self):
        print("Generic outline")

class Square(ShapeBase):
    def draw_outline(self):
        print("Square outline")
"""`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'What is one downside of using purely interface-based designs for multiple classes in Python?',
      options: [
        'They automatically load external libraries',
        "They can lead to repeated code if many classes share the same logic but can't inherit it",
        'They force you to override final methods',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Interfaces do not directly load libraries.',
        'Correct! Reusing code is harder if everything is just method signatures without shared implementations.',
        'Incorrect. The concept of final methods is separate from interface usage.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 4) Multiple Inheritance & Diamond Problem
const diamondProblemData: LessonContent = {
  title: 'Multiple Inheritance & Diamond Problem',
  content: `
**Multiple inheritance** allows a class to inherit from more than one parent. However, this can create the **diamond problem** when two parents share a common ancestor.

<h3>Multiple Interfaces vs. Multiple Implementations</h3>

- **Multiple Interfaces**: Generally harmless in Python if those interfaces are ABCs (no conflicting method implementations).
- **Multiple Concrete Classes**: Potentially leads to confusion about which parent\'s method to use, especially if they define the same method name.

<h3>The Diamond Problem in Python</h3>

Python uses the **Method Resolution Order (MRO)** to determine which parent method is called first. This can be complex but is well-defined.

<h3>Example</h3>

\`\`\`python
class A:
    def greet(self):
        print("Hello from A")

class B(A):
    def greet(self):
        print("Hello from B")

class C(A):
    def greet(self):
        print("Hello from C")

class D(B, C):
    pass

d = D()
d.greet()  # MRO decides whether B or C is called first
\`\`\`
`,
  exercises: [
    {
      prompt: `Demonstrate a simple Python diamond problem scenario. Show the resulting MRO or how Python decides which greet() to call first. Optionally, print the D.__mro__ to illustrate it.`,
      initialCode: '',
      solution: `"""
class A:
    def greet(self):
        print("Hello from A")

class B(A):
    def greet(self):
        print("Hello from B")

class C(A):
    def greet(self):
        print("Hello from C")

class D(B, C):
    pass

d = D()
d.greet()       # Likely "Hello from B"
print(D.__mro__)  # Shows (<class '__main__.D'>, <class '__main__.B'>, 
                  #       <class '__main__.C'>, <class '__main__.A'>, <class 'object'>)
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Explain in a paragraph why multiple interface inheritance is less problematic than multiple implementation inheritance, referencing the diamond problem.`,
      initialCode: '',
      solution: `"""
Interfaces typically provide no concrete code, so there's no conflict over which implementation to call. 
Multiple classes implementing the same abstract methods do not clash. 
However, with multiple concrete parent classes, conflicting methods can cause ambiguity in the call order, 
leading to the diamond problem. 
Thus, multiple interface inheritance is simpler than multiple implementation inheritance.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'Which mechanism does Python use to resolve methods in the case of multiple inheritance?',
      options: [
        'Random selection of parent classes',
        'Method Resolution Order (MRO)',
        'It disallows multiple inheritance altogether',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. The resolution is deterministic, not random.',
        'Correct! Python follows a specific MRO to avoid ambiguity.',
        'Incorrect. Python allows multiple inheritance, but organizes it via MRO.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const interfaceVsImplementationLessons: Record<string, LessonContent> = {
  'interface-inheritance': interfaceInheritanceData,
  'implementation-inheritance': implementationInheritanceData,
  flexibility: flexibilityData,
  'diamond-problem': diamondProblemData,
};

export const interfaceVsImplementationLessonsTab: LessonsTab = {
  curriculum: interfaceVsImplementationCurriculum,
  lessons: interfaceVsImplementationLessons,
};
