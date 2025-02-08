import { Difficulty } from '@/common/commonConcept';
import {
  Curriculum,
  LessonContent,
  LessonsTab,
  PriorityLevel,
} from '@/common/commonLesson';

export const overloadingOverridingCurriculum: Curriculum = {
  title: 'Overloading & Overriding Curriculum',
  description:
    'Differentiate between compile-time method overloading and run-time method overriding for flexible OOP designs.',
  sections: [
    {
      id: 1,
      title: 'Core Definitions',
      topics: [
        {
          id: 'method-overloading',
          title: 'Method Overloading',
          description:
            'Creating methods with the same name but different signatures or parameter types.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'method-overriding',
          title: 'Method Overriding',
          description:
            'Subclasses providing a specific implementation of a parent class method.',
          priority: PriorityLevel.Essential,
        },
      ],
    },
    {
      id: 2,
      title: 'Practical Insights',
      topics: [
        {
          id: 'usecases',
          title: 'Use Cases & Examples',
          description:
            'Shows typical patterns where overloading and overriding are beneficial.',
          priority: PriorityLevel.Important,
        },
        {
          id: 'common-confusions',
          title: 'Common Confusions',
          description:
            'Discusses naming, parameter mismatch, and annotation usage (e.g., @Override).',
          priority: PriorityLevel.Important,
        },
      ],
    },
  ],
};

// 1) Method Overloading
const methodOverloadingData: LessonContent = {
  title: 'Method Overloading',
  content: `
Method overloading involves creating multiple methods with the same name in the same class, but with different parameter lists (type, number, or both). The compiler selects which method to call based on the argument types or count at **compile time**.

<h3>Key Points</h3>

- **Compile-Time Polymorphism:** The method to invoke is determined during compilation.
- **Flexibility:** Allows a single method name to handle a variety of input scenarios.
- **Language Differences:** Common in statically typed languages like Java or C#. Python simulates this by default parameters or type checks, rather than true overloading.

<h3>Example (Java)</h3>

\`\`\`java
class MathUtils {
    // Overloaded methods: same name, different signatures
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }
}
\`\`\`
`,
  exercises: [
    {
      prompt: `Explain in a brief paragraph how method overloading reduces the need for multiple differently named methods (e.g. addInt, addDouble) in a codebase. Provide an example in any OOP language demonstrating overloaded methods.`,
      initialCode: ``,
      solution: `"""
Method overloading allows using one logical method name for different parameter types, making code more intuitive and flexible. 
For instance, a 'calculateArea' method can accept either (int side) or (int length, int width).

Java example:
class ShapeArea {
    int calculateArea(int side) {
        return side * side;
    }

    int calculateArea(int length, int width) {
        return length * width;
    }
}
"""`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: `In C#, create a \`Calculator\` class with overloaded \`Multiply\` methods:
- One accepts two int parameters
- One accepts three int parameters
- Demonstrate calling each.`,
      initialCode: ``,
      solution: `public class Calculator {
    public int Multiply(int a, int b) {
        return a * b;
    }

    public int Multiply(int a, int b, int c) {
        return a * b * c;
    }
}

// Usage
var calc = new Calculator();
int result1 = calc.Multiply(2, 3);     // Calls 2-arg version
int result2 = calc.Multiply(2, 3, 4);  // Calls 3-arg version
`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which statement best describes method overloading?',
      options: [
        'Defining multiple methods with the same name and exact same parameter list',
        'Defining multiple methods with the same name but different parameter signatures, resolved at compile time',
        'Having a child class implement a method with the same signature as the parent class',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. The signatures must differ (type, count, or order).',
        'Correct! Overloading relies on distinct parameter signatures and is resolved at compile time.',
        'Incorrect. That describes method overriding, not overloading.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'In which scenario would method overloading be most useful?',
      options: [
        'When you need slightly different versions of a method based on parameter types or count',
        'When the subclass wants to provide a new implementation for a method defined in the parent class',
        'When you want to change the return type but keep the same parameters',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct! Overloading is about handling different parameter signatures under the same method name.',
        "Incorrect. That's method overriding in inheritance, not overloading.",
        'Incorrect. Changing only the return type typically does not qualify as overloading.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 2) Method Overriding
const methodOverridingData: LessonContent = {
  title: 'Method Overriding',
  content: `
Method overriding occurs when a child (sub) class provides a specific implementation of a method that is already defined in its parent (super) class. The decision on which implementation to call is made at **run time** based on the actual object\'s type.

<h3>Key Points</h3>

- **Run-Time Polymorphism:** The actual method called depends on the object\'s runtime type, not the reference type.
- **Inheritance Relationship:** Overriding requires a parent-child class hierarchy.
- **@Override Annotation (Java/C#)**: Used to indicate that a method in a subclass is overriding a parent method.

<h3>Example (Python)</h3>

\`\`\`python
class Animal:
    def speak(self):
        print("Generic animal sound")

class Dog(Animal):
    def speak(self):
        print("Bark!")

# Run-time decision
def let_animal_speak(animal: Animal):
    animal.speak()
\`\`\`
`,
  exercises: [
    {
      prompt: `Create a parent class \`Shape\` in Python with a method \`draw()\` that prints "Drawing a generic shape...". Then create \`Rectangle\` and \`Circle\` subclasses that override \`draw()\` with shape-specific messages.`,
      initialCode: ``,
      solution: `class Shape:
    def draw(self):
        print("Drawing a generic shape...")

class Rectangle(Shape):
    def draw(self):
        print("Drawing a rectangle...")

class Circle(Shape):
    def draw(self):
        print("Drawing a circle...")

def draw_any_shape(shape: Shape):
    shape.draw()

rect = Rectangle()
circle = Circle()
draw_any_shape(rect)    # "Drawing a rectangle..."
draw_any_shape(circle)  # "Drawing a circle..."
`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `In Java, demonstrate method overriding by creating a parent class \`Vehicle\` with a method \`startEngine()\`, and a child class \`ElectricCar\` that overrides it with a different message. Show a short main usage.`,
      initialCode: ``,
      solution: `class Vehicle {
    public void startEngine() {
        System.out.println("Starting a generic vehicle engine...");
    }
}

class ElectricCar extends Vehicle {
    @Override
    public void startEngine() {
        System.out.println("Activating electric motor, no gas engine required...");
    }
}

public class Main {
    public static void main(String[] args) {
        Vehicle genericVehicle = new Vehicle();
        Vehicle myEV = new ElectricCar();

        genericVehicle.startEngine();  // Generic engine
        myEV.startEngine();            // Electric motor
    }
}
`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which best defines method overriding?',
      options: [
        'Writing multiple methods with the same name but different parameters in a single class',
        'Having a subclass provide a new implementation for a method from its parent class',
        'Replacing all methods in a class with global functions',
      ],
      correctAnswer: 1,
      explanations: [
        "Incorrect. That's method overloading, not overriding.",
        'Correct! Overriding redefines a method from the parent class in the subclass.',
        'Incorrect. Overriding pertains to inheritance, not global functions.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'At which time is it decided which overridden method to call?',
      options: ['Compile time', 'Run time', 'Linker time'],
      correctAnswer: 1,
      explanations: [
        "Incorrect. Overriding decisions aren't made at compile time.",
        'Correct! Method overriding uses dynamic dispatch determined at run time.',
        'Incorrect. Linker time typically pertains to combining compiled modules, not choosing overridden methods.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 3) Use Cases & Examples
const useCasesData: LessonContent = {
  title: 'Use Cases & Examples',
  content: `
Both method overloading and overriding serve important but distinct purposes.

<h3>Method Overloading Use Cases</h3>

- **Utility Functions:** e.g., print() methods that handle int, float, or string parameters differently.
- **Convenience Methods:** e.g., parse() from a string or from a file.

<h3>Method Overriding Use Cases</h3>

- **Subclass Specialization:** e.g., different ways of calculating area() for various shapes.
- **Framework Extension:** e.g., overriding callback methods in GUI/event-driven systems.

<h3>Examples</h3>

- **Overloading**: A calculate method that handles either integer or floating-point operations.
- **Overriding**: Subclassing a Logger class with custom log method behaviors.
`,
  exercises: [
    {
      prompt: `Provide a real-world example in which method overloading helps simplify an API (e.g., reading different data formats with the same function name but different parameters). Code snippet optional.`,
      initialCode: ``,
      solution: `"""
Real-world example: A 'FileReader' class might have methods:
read(String filepath), read(String filepath, int offset), and read(byte[] dataBuffer).

These represent the same conceptual operation (reading), 
but the user can choose which parameter set fits their scenario without learning different method names.
"""`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: `Give an example scenario where method overriding is necessary to adapt a base class's functionality in a library or framework (e.g., an event handler or a lifecycle method).`,
      initialCode: ``,
      solution: `"""
Scenario: In a GUI framework, you might have a base class 'Window' with an onClose() method.
A subclass 'DialogBox' overrides onClose() to show a "Save changes?" prompt 
before actually closing.

Method overriding ensures each subclass can run its unique logic 
while conforming to the overall interface provided by the base class.
"""`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following best describes a scenario for method overloading?',
      options: [
        'Providing distinct implementations of a parent method in a subclass',
        'Allowing multiple constructors or methods with different parameters but the same name',
        'Replacing a private method in a parent class with a public method',
      ],
      correctAnswer: 1,
      explanations: [
        "Incorrect. That's an example of overriding, not overloading.",
        'Correct! Overloading uses the same method name with different parameter lists.',
        "Incorrect. You cannot override a private method, and changing visibility isn't typical overloading.",
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'When is method overriding typically more beneficial than overloading?',
      options: [
        'When you need different parameter types but the same method name',
        'When you want a subclass to refine or change the behavior of a parent method at run time',
        'When you must define multiple methods in the same class for performance reasons',
      ],
      correctAnswer: 1,
      explanations: [
        "Incorrect. That's overloading's domain.",
        "Correct! Overriding is about providing a specialized version of a parent's method.",
        'Incorrect. Overriding is unrelated to multiple methods in the same class for performance.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 4) Common Confusions
const commonConfusionsData: LessonContent = {
  title: 'Common Confusions',
  content: `
Developers often confuse overloading and overriding due to their similar terminology. However, each has distinct rules and usage contexts.

<h3>Common Pitfalls & Points of Confusion</h3>

1. **Parameter List vs. Return Type**  
   Changing only the return type does *not* constitute overloading.  
2. **Inheritance Requirement**  
   Overriding always involves inheritance. Overloading does not.  
3. **Annotations (e.g., @Override)**  
   In languages like Java, forgetting to use @Override can lead to subtle bugs if you accidentally use different parameters or misspell the method name.  
4. **Runtime vs. Compile-Time**  
   - Overloading decisions: made at compile time.  
   - Overriding decisions: made at runtime.

<h3>Example (Misconception)</h3>

\`\`\`java
// Incorrect "overload" attempt by just changing return type
int sum(int a, int b) { return a + b; }
double sum(int a, int b) { return (double) (a + b); }
// This won't compile in many languages because the parameter signature is the same
\`\`\`

<h3>Tips</h3>

- Always check method signatures carefully.  
- Use appropriate annotations or decorators if the language supports them.  
- Keep method names intuitive to avoid confusion (e.g., overloading \`calculate()\` with too many variants can be confusing).
`,
  exercises: [
    {
      prompt: `In a brief paragraph, clarify the difference between overloading and overriding in terms of inheritance requirements, runtime vs. compile time, and parameter lists.`,
      initialCode: ``,
      solution: `"""
Overloading: 
- No inheritance needed; methods in the same class with different parameter lists.
- Decided at compile time.
- Parameter lists must differ; simply changing return type is not enough.

Overriding:
- Requires inheritance; a subclass method overrides a parent method.
- Resolved at run time.
- The method signature must match the parent's exactly (besides annotation or visibility).
"""`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: `Give an example in any language that illustrates a common confusion: a developer thinks they are overloading but are actually just redefining the same method with a different return type, leading to a compilation error. Show how to fix it properly.`,
      initialCode: ``,
      solution: `"""
Java Example (Incorrect):
int multiply(int x, int y) { return x * y; }
double multiply(int x, int y) { return x * y * 1.0; } // Error: same parameter signature

Fixed by changing parameter list:
int multiply(int x, int y) { return x * y; }
double multiply(double x, double y) { return x * y; }
"""`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is a common cause of confusion between overloading and overriding?',
      options: [
        "One requires changing the method's parameter list and the other requires matching the signature in an inherited class",
        'Both are identical concepts in all languages',
        'They always produce compiler errors',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct! Overloading changes parameters in the same class, while overriding matches the parent signature in a subclass.',
        'Incorrect. They are separate concepts, each with unique rules.',
        'Incorrect. Properly used, they do not inherently produce errors.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'Why is using an @Override annotation (in Java) beneficial?',
      options: [
        'It automatically overloads all methods in a class',
        'It ensures the method is actually overriding a parent method rather than accidentally creating a new one',
        'It eliminates the need to define any parameters for the method',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. @Override is for overriding, not overloading multiple methods.',
        'Correct! It helps catch mistakes like mismatched parameter lists or typos.',
        'Incorrect. Parameters still must be declared normally.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const overloadingOverridingLesson: Record<string, LessonContent> = {
  'method-overloading': methodOverloadingData,
  'method-overriding': methodOverridingData,
  usecases: useCasesData,
  'common-confusions': commonConfusionsData,
};

export const overloadingOverridingLessonsTab: LessonsTab = {
  curriculum: overloadingOverridingCurriculum,
  lessons: overloadingOverridingLesson,
};
