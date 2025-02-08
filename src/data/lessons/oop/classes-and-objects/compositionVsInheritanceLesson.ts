import { Difficulty } from '@/common/commonConcept';
import {
  Curriculum,
  LessonContent,
  LessonsTab,
  PriorityLevel,
} from '@/common/commonLesson';

export const compositionVsInheritanceCurriculum: Curriculum = {
  title: 'Composition vs. Inheritance Curriculum',
  description:
    "Know when to embed objects within a class (composition) vs. extend a class's functionality (inheritance).",
  sections: [
    {
      id: 1,
      title: 'Fundamental Differences',
      topics: [
        {
          id: 'relationship-types',
          title: 'Has-A vs. Is-A',
          description:
            'Explains when composition (has-a) is preferable over inheritance (is-a).',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'coupling-tradeoffs',
          title: 'Coupling & Complexity Trade-Offs',
          description:
            'How each approach impacts code reusability and complexity.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 2,
      title: 'Practical Guidance',
      topics: [
        {
          id: 'refactoring-inheritance',
          title: 'Refactoring Inheritance to Composition',
          description:
            'Detecting inheritance misuse and converting it into composition properly.',
          priority: PriorityLevel.Important,
        },
        {
          id: 'design-examples',
          title: 'Design Patterns & Examples',
          description:
            'Real-world cases where composition or inheritance is most suitable (e.g., Strategy pattern).',
          priority: PriorityLevel.Beneficial,
        },
      ],
    },
  ],
};

// 1) Has-A vs. Is-A
const relationshipTypesData: LessonContent = {
  title: 'Has-A vs. Is-A',
  content: `
**Composition** (has-a) and **Inheritance** (is-a) represent different relationships in OOP design. 

<h3>Python Perspective</h3>

- **Has-A Relationship**: One object holds a reference to another. Python easily supports this by assigning an instance of a class to a field in another class.
- **Is-A Relationship**: One class inherits from another. In Python, it\'s done by specifying a parent in parentheses (e.g., \`class Child(Parent):\`).

<h3>Examples</h3>

- **Composition**: A Car has a Engine object.
- **Inheritance**: A Car is a Vehicle.

In Python, both approaches are straightforward due to the language\'s dynamic nature, but design considerations remain the same as in other languages.
`,
  exercises: [
    {
      prompt: `Create two Python classes: 
1) \`Engine\`
2) \`Car\` that *has* an \`Engine\` as an attribute. 
Demonstrate how you'd instantiate a Car with a new Engine, emphasizing the has-a relationship.`,
      initialCode: '',
      solution: `class Engine:
    def __init__(self, horsepower):
        self.horsepower = horsepower

class Car:
    def __init__(self, make, model, engine: Engine):
        self.make = make
        self.model = model
        self.engine = engine

# Demonstration
my_engine = Engine(150)
my_car = Car("Toyota", "Corolla", my_engine)
`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: `In a short paragraph, compare how you\'d represent an is-a relationship for a \`Car\` if it inherits from a \`Vehicle\` class in Python.`,
      initialCode: '',
      solution: `"""
class Vehicle:
    def drive(self):
        pass

class Car(Vehicle):
    def __init__(self, make, model):
        self.make = make
        self.model = model

Here, Car "is-a" Vehicle by inheriting from Vehicle. Car extends or specializes Vehicle\'s behavior, 
but it can also override or add methods.
"""`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which scenario best illustrates a “has-a” relationship?',
      options: [
        'A Square is a Rectangle',
        'A Manager is an Employee',
        'A Library has a collection of Books',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. That is “is-a,” as Square can be seen as a specialized Rectangle.',
        'Incorrect. A Manager also “is-a” specialized Employee.',
        'Correct! A Library includes or contains Books, which is composition.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 2) Coupling & Complexity Trade-Offs
const couplingTradeoffsData: LessonContent = {
  title: 'Coupling & Complexity Trade-Offs',
  content: `
Inheritance and composition both serve code reuse but have different implications for coupling and complexity.

<h3>Inheritance (Is-A)</h3>

- **Pros**: Straightforward for specialized objects, reuses base-class logic, fosters polymorphism.
- **Cons**: Tighter coupling to the parent\'s structure and changes, can lead to brittle code with deep inheritance chains.

<h3>Composition (Has-A)</h3>

- **Pros**: Looser coupling, easier to swap out or modify the composed parts, often simpler to maintain.
- **Cons**: May require more boilerplate for delegating methods to embedded objects, less direct polymorphism if many classes share logic.

<h3>Python-Specific Note</h3>

Python\'s flexible nature often nudges developers to prefer composition over inheritance to avoid complex MRO (Method Resolution Order) issues in multiple inheritance.
`,
  exercises: [
    {
      prompt: `Provide a brief code snippet in Python showing how you might delegate a method call from a parent object to a composed object. For example, a "Car" delegating "start" to its "Engine."`,
      initialCode: '',
      solution: `class Engine:
    def start(self):
        print("Engine starting...")

class Car:
    def __init__(self):
        self.engine = Engine()

    def start_engine(self):
        self.engine.start()
`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: `Discuss in a short paragraph how deep inheritance can complicate a Python codebase, referencing Python's MRO if multiple inheritance is involved.`,
      initialCode: '',
      solution: `"""
Deep inheritance chains can become confusing, especially in Python if multiple parent classes share methods. 
Python resolves method lookups using the Method Resolution Order (MRO), 
which determines the sequence of classes it checks. With multiple inheritance, the MRO can become non-intuitive, 
increasing maintenance complexity.
"""`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'What is a potential downside of inheritance compared to composition?',
      options: [
        'It always requires more lines of code',
        'It can introduce tighter coupling, making changes in the parent ripple through the child classes',
        'It eliminates the possibility of polymorphic behavior',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Sometimes inheritance is shorter in terms of code lines.',
        'Correct! Child classes depend heavily on the parent structure, risking ripple effects.',
        'Incorrect. Inheritance actually often enables polymorphism.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 3) Refactoring Inheritance to Composition
const refactoringInheritanceData: LessonContent = {
  title: 'Refactoring Inheritance to Composition',
  content: `
When an inheritance hierarchy becomes unmanageable, or the “is-a” relationship isn't genuinely correct, it may be better to **refactor** to composition. 

<h3>Signs You Should Refactor</h3>

- Subclass doesn\'t really need all the parent\'s features.
- Overridden methods extensively alter or ignore parent behavior.
- Future changes to the parent break or complicate the child.

<h3>Python Steps for Refactoring</h3>

1. **Identify** which features from the parent class are actually used.
2. **Extract** those features into a new helper class or incorporate them as a field (has-a).
3. **Remove** the inheritance link and delegate calls to the new helper.

<h3>Example: Basic Sketch</h3>

\`\`\`python
# Before
class EmailNotification(Notification):
    def notify(self, message):
        # Overriding with significantly different logic
        pass

# After (Composition)
class EmailNotification:
    def __init__(self, notifier: BaseNotifier):
        self.notifier = notifier

    def notify(self, message):
        # delegate or handle logic with self.notifier
\`\`\`
`,
  exercises: [
    {
      prompt: `Suppose we have:
class Animal:
    def make_sound(self): ...

class RobotDog(Animal):
    ... # but not all Animal features make sense

Refactor RobotDog to remove inheritance if it doesn't truly share Animal\'s behaviors, using composition to embed only the needed logic.`,
      initialCode: '',
      solution: `"""
Possible Refactoring:

class AnimalSound:
    def make_sound(self):
        print("Generic animal sound")

class RobotDog:
    def __init__(self):
        self.sound_module = AnimalSound()  # has-a relationship

    def bark(self):
        self.sound_module.make_sound()  # or custom logic

Now RobotDog no longer "is-an" Animal, avoiding irrelevant features or states.
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `In a paragraph, describe a real scenario (outside of animals or notifications) where you realized inheritance was misused, and how you might shift to composition in Python.`,
      initialCode: '',
      solution: `"""
Example: A 'FileLogger' inherited from 'Printer' just because they both "output" data. 
But the printer logic had methods for rendering content, which didn't apply to file logging. 
Refactoring to composition: Create a 'PrinterEngine' class for the printing logic, 
and 'FileLogger' can hold an instance of it if it needs certain aspects, or avoid it altogether if it doesn't.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following suggests an inheritance relationship might be wrong?',
      options: [
        'The subclass reuses almost all parent functionality with minor extensions',
        "The subclass has many overridden methods that ignore or contradict the parent's behavior",
        "The subclass logically extends the parent class's domain without any conflicts",
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. That typically indicates good use of inheritance.',
        'Correct! If the subclass heavily overrides or ignores parent logic, composition might be better.',
        'Incorrect. This scenario supports inheritance as a good design choice.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 4) Design Patterns & Examples
const designExamplesData: LessonContent = {
  title: 'Design Patterns & Examples',
  content: `
Some well-known design patterns highlight when to favor composition over inheritance or vice versa. In Python, these patterns are often simpler due to dynamic typing and first-class functions.

<h3>Examples</h3>

1. **Strategy Pattern (Composition)**: Inject different “strategies” as objects to alter behavior at runtime.
2. **Template Method Pattern (Inheritance)**: A base class defines a workflow, and subclasses override steps.

<h3>Pythonic Implementations</h3>

- **Strategy** might use function references or small classes passed as fields.
- **Template Method** might define a parent class method with placeholders that child classes override.

<h3>When to Choose Composition</h3>

- You want to swap components easily.
- You do not need or want to expose the entire parent\'s interface.

<h3>When to Choose Inheritance</h3>

- You have a clear is-a relationship and can exploit polymorphism with minimal changes.
- You want a uniform interface or flow (like a template method).
`,
  exercises: [
    {
      prompt: `Demonstrate a simple "Strategy Pattern" in Python:
- A \`PaymentProcessor\` class that accepts a "payment strategy" object
- Two strategies: \`CreditCardStrategy\` and \`PayPalStrategy\``,
      initialCode: '',
      solution: `class CreditCardStrategy:
    def pay(self, amount):
        print(f"Paying \${amount} with credit card.")

class PayPalStrategy:
    def pay(self, amount):
        print(f"Paying \${amount} via PayPal.")

class PaymentProcessor:
    def __init__(self, strategy):
        self.strategy = strategy

    def process_payment(self, amount):
        self.strategy.pay(amount)

# Usage
processor = PaymentProcessor(CreditCardStrategy())
processor.process_payment(100)
`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `In a short paragraph, explain how a "Template Method" pattern might look in Python if using inheritance. Give a brief code snippet showing a base class with a 'run' method and a 'step()' method overridden by subclasses.`,
      initialCode: '',
      solution: `"""
The Template Method pattern in Python might have a base class that provides a 'run' method orchestrating steps. 
A placeholder 'step()' is then implemented by each subclass.

Example:

class ProcessTemplate:
    def run(self):
        print("Starting process")
        self.step()
        print("Ending process")

    def step(self):
        raise NotImplementedError

class ConcreteProcess(ProcessTemplate):
    def step(self):
        print("Performing the concrete step")

This enforces a workflow, letting each subclass define the step details.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'Which design pattern typically demonstrates composition in action?',
      options: [
        'Template Method Pattern',
        'Strategy Pattern',
        'Factory Method Pattern',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Template Method often uses inheritance.',
        'Correct! Strategy composes behavior objects for flexible runtime changes.',
        'Incorrect. Factory Method is more about object creation, can be used with or without composition.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const compositionVsInheritanceLessons: Record<string, LessonContent> = {
  'relationship-types': relationshipTypesData,
  'coupling-tradeoffs': couplingTradeoffsData,
  'refactoring-inheritance': refactoringInheritanceData,
  'design-examples': designExamplesData,
};

export const compositionVsInheritanceLessonsTab: LessonsTab = {
  curriculum: compositionVsInheritanceCurriculum,
  lessons: compositionVsInheritanceLessons,
};
