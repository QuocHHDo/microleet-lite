import { Difficulty } from '@/common/commonConcept';
import { Curriculum, LessonContent, LessonsTab, PriorityLevel } from '@/common/commonLesson';

export const inheritanceCurriculum: Curriculum = {
  title: 'Inheritance Curriculum',
  description:
    'Explore how child classes derive properties and behaviors from parent classes.',
  sections: [
    {
      id: 1,
      title: 'Basics of Inheritance',
      topics: [
        {
          id: 'inheritance-purpose',
          title: 'Purpose',
          description:
            'Explains code reuse and hierarchical class relationships.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'inheritance-syntax',
          title: 'Syntax & Mechanisms',
          description:
            'Demonstrates how to extend classes in languages like Java, C#, and TypeScript.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 2,
      title: 'Advanced Concepts',
      topics: [
        {
          id: 'multiple-inheritance',
          title: 'Multiple Inheritance & Alternatives',
          description:
            'Highlights challenges and approaches like interfaces or mixins to simulate multiple inheritance.',
          priority: PriorityLevel.Beneficial,
        },
        {
          id: 'inheritance-tradeoffs',
          title: 'Trade-Offs & Best Practices',
          description:
            'When to favor composition over inheritance and how deep inheritance trees can harm readability.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 3,
      title: 'Interview Preparation',
      topics: [
        {
          id: 'inheritance-interview',
          title: 'Common Questions & Examples',
          description:
            'Questions about parent-child relationships, overriding methods, and relevant pitfalls.',
          priority: PriorityLevel.Essential,
        },
      ],
    },
  ],
};

const inheritancePurposeData: LessonContent = {
  title: 'Purpose of Inheritance',
  content: `
Inheritance is a fundamental OOP feature enabling code reuse by letting a child class derive properties and behaviors from a parent class. It establishes an *is-a* relationship, simplifying the design of hierarchical systems.

<h3>Why Use Inheritance?</h3>

- **Code Reuse:** Common functionality in the parent class doesn't need to be rewritten in each child.
- **Hierarchical Classification:** Models real-world relationships, such as *Car* inheriting from *Vehicle*.
- **Polymorphism Support:** Child classes can override methods for specialized behavior, yet still share the same interface.

<h3>Example (Python)</h3>

\`\`\`python
class Vehicle:
    def __init__(self, make, model):
        self.make = make
        self.model = model

    def start_engine(self):
        print("Engine started")

class Car(Vehicle):
    def __init__(self, make, model, seats):
        super().__init__(make, model)
        self.seats = seats

my_car = Car("Toyota", "Camry", 5)
my_car.start_engine()  # Inherited method
\`\`\`
`,
  exercises: [
    {
      prompt: `Create a parent class \`Animal\` with attributes \`name\` and \`age\`. Then create a child class \`Dog\` that adds a method \`bark()\`. Demonstrate usage.`,
      initialCode: `# Your code here
`,
      solution: `class Animal:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def info(self):
        print(f"Name: {self.name}, Age: {self.age}")

class Dog(Animal):
    def bark(self):
        print(f"{self.name} says: Woof!")

dog = Dog("Buddy", 3)
dog.info()
dog.bark()
`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: `In a short paragraph, describe how inheritance can reduce duplicate code in a large project with multiple related classes.`,
      initialCode: ``,
      solution: `"""
By placing shared logic (like common attributes or methods) in a parent class, 
child classes automatically inherit those features. This removes the need to 
repeat the same code in every subclass and ensures consistent behavior across 
all related classes.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following best describes inheritance?',
      options: [
        'A way for unrelated classes to share the same name',
        'A technique where a child class derives behavior and attributes from a parent class',
        'A method for writing scripts without any classes',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Inheritance establishes a parent-child relationship, not just sharing names.',
        'Correct! Inheritance allows a child class to inherit from a parent class.',
        'Incorrect. Inheritance pertains to OOP class structures, not standalone scripts.'
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What is the main benefit of inheritance in OOP?',
      options: [
        'It automatically optimizes memory usage',
        'It facilitates code reuse and hierarchical organization',
        'It allows classes to be executed in parallel',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Inheritance does not directly affect memory usage optimization.',
        'Correct! Inheritance is primarily about reusing code and creating logical class hierarchies.',
        'Incorrect. Inheritance does not control concurrency or parallel execution.'
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const inheritanceSyntaxMechanismsData: LessonContent = {
  title: 'Syntax & Mechanisms of Inheritance',
  content: `
Different languages implement inheritance in slightly varying ways, but the principle remains the same: a child class extends or derives from a parent class.

<h3>Common Syntax Examples</h3>

1. **Python**  
   \`\`\`python
   class Parent:
       pass

   class Child(Parent):
       pass
   \`\`\`

2. **Java**  
   \`\`\`java
   class Parent {
   }

   class Child extends Parent {
   }
   \`\`\`

3. **C#**  
   \`\`\`csharp
   class Parent {
   }

   class Child : Parent {
   }
   \`\`\`

4. **TypeScript**  
   \`\`\`typescript
   class Parent {
   }

   class Child extends Parent {
   }
   \`\`\`

<h3>Overriding vs. Overloading</h3>

- **Overriding:** Redefining a parent class\'s method in the child class to provide specialized behavior.
- **Overloading:** Having multiple methods with the same name but different parameter lists (supported in languages like Java/C#; not the same as overriding).

<h3>Usage Tips</h3>

- Always call super (or equivalent) in the child constructor to initialize parent attributes.
- Keep inheritance trees shallow for readability.
`,
  exercises: [
    {
      prompt: `In Python, demonstrate how to override a parent method in a child class. The parent class \`Vehicle\` should have a \`start_engine()\` method, and the child class \`ElectricCar\` should override it with specific logic.`,
      initialCode: ``,
      solution: `class Vehicle:
    def start_engine(self):
        print("Generic engine start procedure")

class ElectricCar(Vehicle):
    def start_engine(self):
        print("Activating electric motor, no gas engine needed")

ecar = ElectricCar()
ecar.start_engine()  # Should print the overridden message
`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Explain the difference between overriding and overloading in a paragraph. Provide an example (in a language of your choice) to illustrate the difference.`,
      initialCode: ``,
      solution: `"""
Overriding happens when a subclass provides a new implementation for a method with the same signature as in its parent class. 
Overloading is defining multiple methods with the same name but different parameter lists. 
Example (C#):

public class MathOperations {
    // Overloading: multiple Sum() methods with different signatures
    public int Sum(int a, int b) => a + b;
    public double Sum(double a, double b) => a + b;
}

public class AdvancedMath : MathOperations {
    // Overriding: modifying the behavior of a method from parent class
    public override double Sum(double a, double b) {
        // custom logic
        return base.Sum(a, b) + 1.0;
    }
}
"""`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a hallmark of method overriding?',
      options: [
        'Having multiple methods with the same name but different parameter types in the same class',
        'Providing a new implementation in a child class for a parent class\'s method',
        'Writing a static method in the parent class',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. That describes overloading, not overriding.',
        'Correct! Overriding redefines the parent method in the child class.',
        'Incorrect. Static methods aren\'t inherently related to overriding.'
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const multipleInheritanceData: LessonContent = {
  title: 'Multiple Inheritance & Alternatives',
  content: `
Multiple inheritance occurs when a class inherits from more than one parent. Some languages (like Python) allow it, while others (like Java) do not. When not supported or too complex, alternatives like interfaces or mixins are used.

<h3>Challenges of Multiple Inheritance</h3>

- **Diamond Problem:** The issue where a child class inherits from two parents that share a common ancestor, causing ambiguity in method resolution.
- **Increased Complexity:** More complicated to debug or trace calls when a class has multiple parents.

<h3>Alternatives</h3>

- **Interfaces:** Let a class “implement” multiple contracts without inheriting their implementation.
- **Mixins:** Provide small, reusable pieces of functionality without creating deep hierarchies.

<h3>Python Example</h3>

\`\`\`python
class A:
    def action(self):
        print("A action")

class B:
    def action(self):
        print("B action")

class C(A, B):
    pass

c = C()
c.action()  # MRO (Method Resolution Order) will decide whose action() is called
\`\`\`
`,
  exercises: [
    {
      prompt: `In Python, create two parent classes \`Flyer\` (with method \`fly()\`) and \`Swimmer\` (with method \`swim()\`). Then create a class \`Duck\` that inherits from both. Demonstrate how to resolve any name collisions if both classes had a method called \`move()\`.`,
      initialCode: ``,
      solution: `class Flyer:
    def fly(self):
        print("Flying...")

    def move(self):
        print("Flyer moving...")

class Swimmer:
    def swim(self):
        print("Swimming...")

    def move(self):
        print("Swimmer moving...")

class Duck(Flyer, Swimmer):
    def move(self):
        # Explicitly choose one or combine logic
        Flyer.move(self)
        Swimmer.move(self)

d = Duck()
d.fly()
d.swim()
d.move()
`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Explain, in a short paragraph, how interfaces (in languages like Java) or protocols (in Python 3.8+) can serve as an alternative to multiple inheritance.`,
      initialCode: ``,
      solution: `"""
Interfaces or protocols define a set of methods a class must implement without providing the code. 
They allow classes to promise certain behaviors (e.g., 'Drawable', 'Serializable'), 
avoiding the complexity of inheriting from multiple concrete parent classes. 
This promotes flexible design without deep inheritance.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Why is multiple inheritance often discouraged?',
      options: [
        'It never compiles in any language',
        'It can cause ambiguity, especially with the diamond problem',
        'It allows the child class to override final methods in the parent',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Some languages (like Python) do allow multiple inheritance.',
        'Correct! Multiple inheritance can introduce complexity and ambiguity.',
        'Incorrect. Final methods cannot be overridden, which is unrelated to multiple inheritance.'
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const inheritanceTradeoffsData: LessonContent = {
  title: 'Trade-Offs & Best Practices',
  content: `
While inheritance is powerful, it's not always the best solution. Overusing it can lead to rigid designs and deep hierarchies that are hard to maintain.

<h3>Favor Composition Over Inheritance (Sometimes)</h3>

- **Composition**: Instead of inheriting from a class, include an instance of the class as a field, then delegate calls to it.
- **Reduced Coupling**: Changes in one class won't necessarily ripple through an entire inheritance chain.

<h3>Best Practices</h3>

1. **Keep Hierarchies Shallow**: Avoid many levels of inheritance, which can obscure the flow of logic.
2. **Use Inheritance for *Is-A* Relationship**: If a child really *is a* specialized version of the parent, inheritance is appropriate. Otherwise, composition may be better.

<h3>Example: Composition Instead of Inheritance</h3>

\`\`\`python
class Engine:
    def start(self):
        print("Engine started")

class Car:
    def __init__(self):
        self.engine = Engine()  # Composition

    def start_car(self):
        self.engine.start()
\`\`\`
`,
  exercises: [
    {
      prompt: `Refactor a simple \`Printer\` class that inherits from \`FileLogger\` to use composition instead, explaining why composition might be preferred in this scenario.`,
      initialCode: `class FileLogger:
    def log(self, message):
        print(f"Logging to file: {message}")

class Printer(FileLogger):
    def print_document(self, content):
        self.log("Printing document")
        print(content)
`,
      solution: `class FileLogger:
    def log(self, message):
        print(f"Logging to file: {message}")

class Printer:
    def __init__(self):
        self.logger = FileLogger()  # Composition

    def print_document(self, content):
        self.logger.log("Printing document")
        print(content)

"""
Explanation:
By using composition, Printer can still use FileLogger's functionality 
without creating an is-a relationship that might limit future changes.
"""`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'When is composition often preferred over inheritance?',
      options: [
        'When the child class is truly a specialized version of the parent class',
        'When you want a loosely coupled design and the relationship is more "has-a" than "is-a"',
        'Whenever you need to share private attributes across multiple classes',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. If something truly "is-a" specialized version, inheritance can be appropriate.',
        'Correct! Composition is ideal when the relationship is "has-a" and looser coupling is desired.',
        'Incorrect. Accessing private attributes is not the primary reason to choose composition.'
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const inheritanceInterviewData: LessonContent = {
  title: 'Common Interview Questions & Examples on Inheritance',
  content: `
Inheritance is a popular interview topic. Interviewers often want to see if you understand when to use it, how to implement it, and potential pitfalls.

<h3>Typical Interview Prompts</h3>

- **Conceptual**: "Explain the difference between inheritance and composition."
- **Implementation**: "Show how to override a method and call the parent version."
- **Pitfalls**: "Discuss why deep inheritance trees can become problematic."

<h3>Sample Question</h3>

\`\`\`python
class Shape:
    def area(self):
        pass

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    # Interviewer might ask you to override area() here
\`\`\`

**Answer Approach**:
- Demonstrate overriding, possibly using super if relevant.
- Emphasize best practices: shallow hierarchies, minimal overrides, etc.
`,
  exercises: [
    {
      prompt: `Refactor the \`Rectangle\` class to properly override the parent \`Shape\` method \`area()\`. Include a small usage example.`,
      initialCode: `class Shape:
    def area(self):
        pass

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
`,
      solution: `class Shape:
    def area(self):
        pass

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

# Usage
rect = Rectangle(5, 3)
print(rect.area())  # 15
`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following questions might you encounter about inheritance in an interview?',
      options: [
        'How do you call the parent constructor or method from the child?',
        'How do you share global variables across multiple scripts?',
        'What are the differences between string and integer data types?',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct! This is a common question testing your understanding of inheritance mechanics.',
        'Incorrect. That\'s a separate topic about variable scope, not inheritance.',
        'Incorrect. Data type differences are unrelated to the concept of inheritance.'
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};


const inheritanceLesson: Record<string, LessonContent> = {
  'inheritance-purpose': inheritancePurposeData,
  'inheritance-syntax': inheritanceSyntaxMechanismsData,
  'multiple-inheritance': multipleInheritanceData,
  'inheritance-tradeoffs': inheritanceTradeoffsData,
  'inheritance-interview': inheritanceInterviewData
}

export const inheritanceLessonsTab: LessonsTab = {
  curriculum: inheritanceCurriculum,
  lessons: inheritanceLesson
}