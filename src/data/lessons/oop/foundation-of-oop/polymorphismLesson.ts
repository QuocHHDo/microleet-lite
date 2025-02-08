import { Difficulty } from '@/common/commonConcept';
import {
  Curriculum,
  LessonContent,
  LessonsTab,
  PriorityLevel,
} from '@/common/commonLesson';

export const polymorphismCurriculum: Curriculum = {
  title: 'Polymorphism Curriculum',
  description:
    'Learn how objects can take many forms to enable flexible code and dynamic behavior.',
  sections: [
    {
      id: 1,
      title: 'Fundamentals',
      topics: [
        {
          id: 'compiletime-runtime',
          title: 'Compile-Time vs. Run-Time Polymorphism',
          description:
            'Explains method overloading vs. method overriding, and how dynamic dispatch works.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'polymorphism-benefits',
          title: 'Advantages in Code',
          description:
            'Showcases how polymorphism leads to simpler and more extensible code.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 2,
      title: 'Usage & Best Practices',
      topics: [
        {
          id: 'interfaces-abstract-classes',
          title: 'Using Interfaces & Abstract Classes',
          description:
            'Demonstrates how to properly design polymorphic hierarchies.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'common-pitfalls',
          title: 'Common Pitfalls',
          description:
            'Misusing polymorphism, creating overly complex hierarchies, or performance issues.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 3,
      title: 'Interview Tips',
      topics: [
        {
          id: 'practical-questions',
          title: 'Practical Scenarios',
          description:
            'How to demonstrate polymorphism in whiteboard interviews or coding exercises.',
          priority: PriorityLevel.Essential,
        },
      ],
    },
  ],
};

const compileTimeRunTimeData: LessonContent = {
  title: 'Compile-Time vs. Run-Time Polymorphism',
  content: `
Polymorphism means "many forms." In OOP, it refers to the ability of objects to respond differently to the same method call. 

<h3>Method Overloading vs. Method Overriding</h3>

- **Compile-Time Polymorphism (Method Overloading):**  
  Occurs when multiple methods share the same name but differ in parameter type or count. Common in statically typed languages like Java or C#, allowing the compiler to choose the correct method signature at compile time.

- **Run-Time Polymorphism (Method Overriding):**  
  Occurs when a child class provides a specific implementation of a method already defined in its parent class. The decision on which implementation to call happens at run time through dynamic dispatch.

<h3>Dynamic Dispatch</h3>
This is the mechanism by which a call to an overridden method is resolved at runtime, based on the object's actual type rather than the reference type.

<h3>Examples</h3>

1. **Method Overloading (Java)**  
\`\`\`java
public class MathUtils {
    public int add(int a, int b) {
        return a + b;
    }

    public double add(double a, double b) {
        return a + b;
    }
}
\`\`\`

2. **Method Overriding (Python)**  
\`\`\`python
class Animal:
    def make_sound(self):
        print("Some generic sound")

class Dog(Animal):
    def make_sound(self):
        print("Bark!")
\`\`\`
`,
  exercises: [
    {
      prompt: `Explain in a brief paragraph how compile-time polymorphism differs from run-time polymorphism, using an example of each in any language you prefer.`,
      initialCode: ``,
      solution: `"""
Compile-time polymorphism resolves which method to call based on the method signature at compile time (e.g., method overloading).
Run-time polymorphism decides which overridden method to call based on the object's actual type at runtime (e.g., child class overriding a parent class method).

Example:
- Overloading (Java):
  public int sum(int a, int b) {...}
  public double sum(double a, double b) {...}

- Overriding (Python):
  class Base:
      def do_something(self):
          print("Base implementation")

  class Derived(Base):
      def do_something(self):
          print("Derived implementation")
"""`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: `In Python, create two classes \`Shape\` and \`Circle\`. \`Shape\` has a method \`draw()\`. \`Circle\` overrides \`draw()\`. Show a short code snippet to demonstrate run-time polymorphism in action.`,
      initialCode: ``,
      solution: `class Shape:
    def draw(self):
        print("Drawing a generic shape")

class Circle(Shape):
    def draw(self):
        print("Drawing a circle")

def draw_any_shape(shape):
    shape.draw()

my_shape = Shape()
my_circle = Circle()

draw_any_shape(my_shape)    # "Drawing a generic shape"
draw_any_shape(my_circle)   # "Drawing a circle"  (run-time polymorphism)
`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'What is the key difference between compile-time and run-time polymorphism?',
      options: [
        'Compile-time polymorphism resolves method calls based on signatures at compile time, while run-time polymorphism resolves calls based on the actual object type at execution.',
        'They are the same concept but in different languages.',
        'Compile-time polymorphism always refers to polymorphism, while run-time polymorphism refers to global functions.',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct! Compile-time binds the method at compile time, while run-time binds it during execution.',
        'Incorrect. They are related but distinct concepts within OOP.',
        'Incorrect. Inheritance and global functions are unrelated to this distinction.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which mechanism resolves which overridden method to call at runtime in many OOP languages?',
      options: ['Static binding', 'Dynamic dispatch', 'Reflection'],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Static binding is associated with compile-time decisions.',
        'Correct! Dynamic dispatch determines the actual method implementation at runtime.',
        'Incorrect. Reflection is a separate technique for inspecting code at runtime, not for resolving overridden methods.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 2) Advantages in Code
const polymorphismBenefitsData: LessonContent = {
  title: 'Advantages in Code',
  content: `
Polymorphism greatly increases the flexibility and extensibility of a codebase. By allowing objects of different classes to be treated uniformly, polymorphism reduces code duplication and simplifies maintenance.

<h3>Why Polymorphism Leads to Simpler, More Extensible Code</h3>

- **Uniform Interfaces:** You can write code expecting a parent type (or interface) and pass in any subtype without modifying the client code.
- **Reduced Conditionals:** Instead of large if/else blocks checking types, overridden methods handle type-specific behavior.
- **Easier Extensibility:** Add a new subclass, override relevant methods, and existing code can utilize it without significant changes.

<h3>Example</h3>

\`\`\`python
class Document:
    def print_content(self):
        pass

class PDFDocument(Document):
    def print_content(self):
        print("Printing PDF content")

class WordDocument(Document):
    def print_content(self):
        print("Printing Word document content")

def print_any(doc: Document):
    doc.print_content()
\`\`\`
By leveraging polymorphism, we can pass either a PDFDocument or WordDocument to print_any and get the correct behavior.
`,
  exercises: [
    {
      prompt: `Using the above Document example, add another subclass (e.g., \`TextDocument\`) and show how you can extend the system without modifying the \`print_any\` function.`,
      initialCode: ``,
      solution: `class Document:
    def print_content(self):
        pass

class PDFDocument(Document):
    def print_content(self):
        print("Printing PDF content")

class WordDocument(Document):
    def print_content(self):
        print("Printing Word document content")

class TextDocument(Document):
    def print_content(self):
        print("Printing plain text content")

def print_any(doc: Document):
    doc.print_content()

# Usage
doc = TextDocument()
print_any(doc)  # "Printing plain text content"
`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: `In your own words, describe how polymorphism reduces the need for long if/else type checks and provides an example in any OOP language.`,
      initialCode: ``,
      solution: `"""
Polymorphism enables each subclass to handle its own behavior, so we don't need explicit conditionals to determine the object's type before deciding what to do.

Example (C#):
public abstract class Animal {
    public abstract void Speak();
}

public class Dog : Animal {
    public override void Speak() {
        Console.WriteLine("Woof!");
    }
}

public class Cat : Animal {
    public override void Speak() {
        Console.WriteLine("Meow!");
    }
}

In a method:
public void LetAnimalSpeak(Animal animal) {
    animal.Speak(); // No need for if-animal-is-Dog-else-if-animal-is-Cat
}
"""`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a key advantage of polymorphism?',
      options: [
        'It eliminates the need for all error handling',
        'It allows objects with different implementations to be used interchangeably via a shared interface',
        'It guarantees faster execution time in every scenario',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Polymorphism does not handle or eliminate errors automatically.',
        'Correct! Polymorphism lets different classes conform to a common interface and be used interchangeably.',
        'Incorrect. Polymorphism does not inherently guarantee better performance in every case.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'How does polymorphism typically reduce code duplication?',
      options: [
        'By keeping all code in a single class',
        'By replacing object-oriented code with procedural code',
        'By allowing shared interfaces and overridden methods instead of separate specialized functions for each type',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Single-class solutions often lead to monolithic designs, not real polymorphism.',
        'Incorrect. Reverting to procedural code does not leverage polymorphism at all.',
        'Correct! A shared interface with overridden methods avoids writing type-specific logic repeatedly.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 3) Using Interfaces & Abstract Classes
const interfacesAbstractClassesData: LessonContent = {
  title: 'Using Interfaces & Abstract Classes',
  content: `
Polymorphic hierarchies commonly rely on abstract classes and interfaces (or protocols in Python) to define *what* methods must exist. Concrete subclasses implement *how*.

<h3>Designing Polymorphic Hierarchies</h3>

1. **Interfaces/Protocols**:  
   - Specify method signatures without providing default implementations.  
   - Ideal when different classes share behavior but not implementation details.

2. **Abstract Classes**:  
   - May contain partial implementation along with abstract methods.  
   - Useful when subclasses share some logic but also need unique behaviors.

<h3>Usage Examples</h3>

- **Interface (Java)**  
\`\`\`java
interface Shape {
    double area();
}

class Circle implements Shape {
    private double radius;
    public Circle(double r) { this.radius = r; }
    public double area() { return Math.PI * radius * radius; }
}
\`\`\`

- **Abstract Class (Python)**  
\`\`\`python
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14 * (self.radius ** 2)
\`\`\`
`,
  exercises: [
    {
      prompt: `Create an interface (in Java) called \`PaymentMethod\` with one method \`pay(double amount)\`. Then implement two classes: \`CreditCardPayment\` and \`PayPalPayment\`, each providing a different \`pay\` implementation.`,
      initialCode: `// PaymentMethod interface and two implementations`,
      solution: `public interface PaymentMethod {
    void pay(double amount);
}

public class CreditCardPayment implements PaymentMethod {
    @Override
    public void pay(double amount) {
        System.out.println("Paying $" + amount + " via Credit Card.");
    }
}

public class PayPalPayment implements PaymentMethod {
    @Override
    public void pay(double amount) {
        System.out.println("Paying $" + amount + " via PayPal.");
    }
}
`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `In Python, create an abstract base class \`Database\` with an abstract method \`connect()\` and a concrete \`disconnect()\` method. Then create two subclasses, \`MySQLDatabase\` and \`PostgreSQLDatabase\`, each implementing \`connect()\`. Demonstrate usage.`,
      initialCode: ``,
      solution: `from abc import ABC, abstractmethod

class Database(ABC):
    @abstractmethod
    def connect(self):
        pass

    def disconnect(self):
        print("Disconnecting from database")

class MySQLDatabase(Database):
    def connect(self):
        print("Connecting to MySQL database")

class PostgreSQLDatabase(Database):
    def connect(self):
        print("Connecting to PostgreSQL database")

# Demonstration
db1 = MySQLDatabase()
db1.connect()
db1.disconnect()

db2 = PostgreSQLDatabase()
db2.connect()
db2.disconnect()
`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'What is the main difference between an interface and an abstract class?',
      options: [
        'An interface can have both abstract and concrete methods, whereas an abstract class cannot have any methods at all',
        'An interface strictly defines method signatures without implementation, while an abstract class can include some default implementations and state',
        'There is no difference; they are the same concept in all languages',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Interfaces typically have no concrete methods (though modern languages sometimes allow default methods), while abstract classes can have actual code.',
        'Correct! Interfaces list required methods, abstract classes can offer partial implementations.',
        'Incorrect. They are distinct concepts, and their specifics differ by language.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Why might you choose to use an abstract class instead of an interface?',
      options: [
        'You need to provide some shared functionality or fields while still enforcing abstract methods',
        'You want the freedom to skip implementing mandatory methods',
        'You plan never to instantiate any class in your application',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct! Abstract classes allow partial implementations plus mandatory overrides.',
        'Incorrect. Abstract classes still require subclasses to implement abstract methods.',
        'Incorrect. Not instantiating classes is unrelated to the choice between an interface and an abstract class.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 4) Common Pitfalls
const commonPitfallsData: LessonContent = {
  title: 'Common Pitfalls',
  content: `
Polymorphism is powerful, but misusing it can introduce complexity or performance overhead. Below are some pitfalls to avoid.

<h3>Misusing Polymorphism</h3>

- **Overly Complex Hierarchies**: Too many levels of polymorphism or interfaces can make code difficult to follow.
- **Forcing a Relationship**: Using polymorphism when classes do not truly share a conceptual relationship leads to confusion.

<h3>Performance Concerns</h3>

- Method overriding can involve dynamic dispatch, which is slightly slower than direct calls, though usually negligible. Still, in performance-critical code, it might be a concern.

<h3>Maintainability Issues</h3>

- If you rely on polymorphic behavior but fail to keep method signatures consistent or break Liskov Substitution Principle, you can introduce runtime errors or unexpected behavior.

<h3>Best Practices</h3>

- Keep hierarchies shallow and meaningful.
- Use polymorphism only for genuinely shared behaviors or interfaces.
- Regularly refactor to ensure your design remains clear.
`,
  exercises: [
    {
      prompt: `Describe a scenario where too many layers of polymorphism (e.g., multiple polymorphism levels, numerous interfaces) can make maintenance difficult. Provide a short code example (in any language) illustrating an excessively deep class hierarchy.`,
      initialCode: ``,
      solution: `"""
Scenario: A GUI framework with multiple layers of abstraction like Widget -> Container -> InteractiveContainer -> ScrollableContainer -> DraggableContainer -> ...
Each layer overrides or extends behavior, making it very hard to track changes or debug.

Example (simplified pseudo-code):
class BaseWidget { ... }
class ContainerWidget extends BaseWidget { ... }
class ScrollableWidget extends ContainerWidget { ... }
class DraggableScrollableWidget extends ScrollableWidget { ... }

Excessively deep hierarchies often create confusion and tight coupling.
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `In a short paragraph, explain how violating the Liskov Substitution Principle can lead to polymorphism-related bugs. Provide a quick snippet to illustrate the problem.`,
      initialCode: ``,
      solution: `"""
Liskov Substitution Principle states that derived classes should be substitutable for their base classes without altering expected behavior. 
Violations happen when a subclass changes behavior so drastically that the parent class\'s contract is broken, causing runtime errors or logical inconsistencies.

Example:
class Bird:
    def fly(self):
        return "Flying"

class Ostrich(Bird):
    def fly(self):
        raise Exception("Ostrich can't fly")

Here, 'Ostrich' breaks the assumption that all Birds can fly, potentially breaking code that relies on Bird's 'fly()' method working.
"""`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'What is a potential drawback of creating overly complex polymorphic hierarchies?',
      options: [
        'They always run faster',
        'They make code simpler to read',
        'They can become difficult to maintain or debug',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Complex hierarchies typically do not improve performance.',
        'Incorrect. Having many layers can obscure the logic.',
        'Correct! Deep or overly abstract hierarchies can complicate maintenance and debugging.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 5) Practical Scenarios (Interview Tips)
const practicalQuestionsData: LessonContent = {
  title: 'Practical Scenarios',
  content: `
In interviews, demonstrating polymorphism usually involves writing a small code snippet where multiple classes share a base and override certain methods. You might be asked to design or modify an existing structure on the spot.

<h3>Common Interview Exercises</h3>

- **"Shape" Example**: Show how different shapes implement an \`area()\` method.
- **"Payment" Example**: Demonstrate multiple payment methods with a shared interface.
- **"Notification System"**: Various notification types (Email, SMS, Push) all implement a send() method.

<h3>Whiteboard Tips</h3>

- Emphasize how each subclass overrides methods to provide unique behavior.
- Show how a function can handle all objects via a parent type or interface.
- Mention the importance of the Liskov Substitution Principle and consistent method signatures.

<h3>Example Scenario</h3>

\`\`\`python
class Notification:
    def send(self, message):
        raise NotImplementedError

class EmailNotification(Notification):
    def send(self, message):
        print(f"Sending email: {message}")

class SMSNotification(Notification):
    def send(self, message):
        print(f"Sending SMS: {message}")

def broadcast(notification: Notification, msg):
    notification.send(msg)
\`\`\`
`,
  exercises: [
    {
      prompt: `In a mock interview scenario, your interviewer asks you to create a polymorphic \`Animal\` hierarchy. Each subclass overrides a method \`speak()\`. Provide a short example showcasing at least two subclasses, and a function demonstrating polymorphism.`,
      initialCode: ``,
      solution: `class Animal:
    def speak(self):
        raise NotImplementedError("Subclasses must implement this method")

class Dog(Animal):
    def speak(self):
        print("Woof!")

class Cat(Animal):
    def speak(self):
        print("Meow!")

def animal_speak(animal: Animal):
    animal.speak()

dog = Dog()
cat = Cat()
animal_speak(dog)  # "Woof!"
animal_speak(cat)  # "Meow!"
`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'Which interview question might demonstrate an understanding of polymorphism?',
      options: [
        '“How do you configure a CI/CD pipeline?”',
        '“Explain how multiple subclasses can share the same interface but provide different implementations.”',
        '“Describe the differences between relational and non-relational databases.”',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. CI/CD is not primarily about polymorphism.',
        'Correct! This directly relates to polymorphism principles.',
        'Incorrect. This focuses on database architecture, not polymorphism.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const polymorphismLesson: Record<string, LessonContent> = {
  'compiletime-runtime': compileTimeRunTimeData,
  'polymorphism-benefits': polymorphismBenefitsData,
  'interfaces-abstract-classes': interfacesAbstractClassesData,
  'common-pitfalls': commonPitfallsData,
  'practical-questions': practicalQuestionsData,
};

export const polymorphismLessonsTab: LessonsTab = {
  curriculum: polymorphismCurriculum,
  lessons: polymorphismLesson,
};
