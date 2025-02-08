import { Difficulty } from '@/common/commonConcept';
import {
  Curriculum,
  LessonContent,
  LessonsTab,
  PriorityLevel,
} from '@/common/commonLesson';

export const abstractionCurriculum: Curriculum = {
  title: 'Abstraction Curriculum',
  description:
    'Deep dive into how abstractions simplify complex systems by modeling relevant details.',
  sections: [
    {
      id: 1,
      title: 'Core Concepts',
      topics: [
        {
          id: 'abstraction-definition',
          title: 'Definition & Purpose',
          description:
            'What is Abstraction and how does it reduce complexity in software design?',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'abstraction-realworld',
          title: 'Real-World Examples',
          description:
            'Everyday analogies, such as using a car interface without knowing its engine details.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 2,
      title: 'Techniques & Implementation',
      topics: [
        {
          id: 'abstracting-data',
          title: 'Abstracting Data & Behavior',
          description:
            'Separating interface from implementation using abstract classes or interfaces (where applicable).',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'effective-abstraction',
          title: 'Effective Abstraction',
          description:
            'How to decide what details to expose and what to hide in complex systems.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 3,
      title: 'Interview Prep',
      topics: [
        {
          id: 'abstraction-questions',
          title: 'Typical Interview Questions',
          description:
            'Common prompts about abstract classes, interfaces, and real-world design usage.',
          priority: PriorityLevel.Essential,
        },
      ],
    },
  ],
};

const abstractionDefinitionData: LessonContent = {
  title: 'Abstraction: Simplifying Complexity',
  content: `
Abstraction in OOP is the concept of hiding internal details while exposing only the necessary functionality. It answers the question: *What does this object do?* rather than *How does it do it?*

<h3>What is Abstraction and How Does It Reduce Complexity?</h3>

- **Focus on Relevant Details:** Abstraction allows you to model only what you need from a system.
- **Hide Implementation Details:** Users of a class or function don't need to know the intricate logic behind it.
- **Improve Maintainability:** By separating interface from implementation, changes in internal code won't affect external usage.

<h3>Basic Example</h3>
Imagine a **Shape** class that defines an abstract method \`area()\`, but not *how* to calculate the area. Each subclass like \`Circle\` or \`Rectangle\` implements the \`area()\` method in its own way.

\`\`\`python
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height
\`\`\`
`,
  exercises: [
    {
      prompt: `Create an abstract class \`Animal\` with an abstract method \`make_sound()\`. Then implement two subclasses that each define \`make_sound()\` differently.`,
      initialCode: `from abc import ABC, abstractmethod

# Your code here
`,
      solution: `from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod
    def make_sound(self):
        pass

class Dog(Animal):
    def make_sound(self):
        print("Bark!")

class Cat(Animal):
    def make_sound(self):
        print("Meow!")
`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Explain in a short paragraph how abstraction helps reduce dependencies between different parts of a system. Provide a simple Python snippet to illustrate your point.`,
      initialCode: ``,
      solution: `"""
Abstraction allows components to interact through defined interfaces, so changes in one part don't force updates in other parts. 
For instance, we can change how 'payment processing' works internally without altering how it\'s called externally.

Example snippet:
"""

class PaymentProcessor:
    def pay(self, amount):
        # Implementation hidden; user only cares about calling pay()
        print(f"Processing payment of \${amount}")
`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Why does abstraction help reduce software complexity?',
      options: [
        'It automatically generates code for all your classes',
        'It hides unnecessary details and focuses on high-level behavior',
        'It forces you to write longer, more detailed code',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Abstraction does not generate code automatically.',
        'Correct! Abstraction aims to hide complexity and keep focus on essential behavior.',
        'Incorrect. Abstraction generally leads to clearer, more concise code.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What is an abstract method?',
      options: [
        'A method with a default implementation',
        'A method with no implementation, meant to be overridden by subclasses',
        'A method that cannot be called from within a class',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. An abstract method does not provide a default implementation.',
        'Correct! Abstract methods define a contract but no actual code, requiring subclasses to implement.',
        'Incorrect. An abstract method can still be called on instances of concrete subclasses.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const abstractionRealWorldData: LessonContent = {
  title: 'Real-World Examples of Abstraction',
  content: `
Abstraction is everywhere in daily life. We often use complex tools without needing to understand their inner workings.

<h3>Everyday Analogies</h3>

1. **Car Interface:**  
   You can drive a car by using the steering wheel, pedals, and dashboard, without knowing how the engine or transmission is implemented.
2. **Coffee Machine:**  
   You press a button to brew coffee without knowing each step of heating, grinding, or filtering.
3. **Smartphone Apps:**  
   You tap icons to launch apps without seeing how the software interacts with the operating system or hardware.

By drawing parallels to real-world scenarios, you can better understand how abstraction in code focuses on *what* something does, not *how* it does it.
`,
  exercises: [
    {
      prompt: `Think of a real-world example of a complex device you use daily (not a car or coffee machine) and describe how its public interface is separate from its internal details. Then, provide a brief Python class to illustrate this concept.`,
      initialCode: ``,
      solution: `"""
Example: A Washing Machine 
- Public interface: Buttons for settings and start/pause
- Internal details: Water pump, drum rotation, temperature control, etc.

Code Example:
"""

class WashingMachine:
    def start_cycle(self, mode):
        print(f"Starting {mode} wash cycle...")
        self.__fill_water()
        self.__rotate_drum()

    def __fill_water(self):
        print("Filling water internally...")

    def __rotate_drum(self):
        print("Rotating drum internally...")
`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following best illustrates abstraction in the real world?',
      options: [
        'Driving a car without knowing how the engine is built',
        'Taking an engine apart to learn how it works',
        'Writing detailed plans for every gear in a transmission',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct! You focus on the car interface instead of its inner machinery.',
        'Incorrect. This is the opposite of abstraction—going into all the internal details.',
        'Incorrect. Again, this is diving deep into implementation details.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const abstractingDataBehaviorData: LessonContent = {
  title: 'Abstracting Data & Behavior',
  content: `
In software design, abstraction separates what operations an object can perform from how these operations are carried out. This is often done using abstract classes or interfaces (in languages that support them).

<h3>Separating Interface from Implementation</h3>

- **Interfaces (or Protocols):** Define *what* methods or properties an object must have, without specifying *how*.
- **Abstract Classes:** Can include shared behavior (partially implemented) while leaving specific details to subclasses.

In Python, we typically use the abc module for abstract classes. Although Python doesn't have a formal "interface" keyword, we often simulate interfaces by defining abstract methods in a base class.

<h3>Example: Abstract Base Class</h3>

\`\`\`python
from abc import ABC, abstractmethod

class PaymentProcessor(ABC):
    @abstractmethod
    def pay(self, amount):
        pass

class CreditCardProcessor(PaymentProcessor):
    def pay(self, amount):
        print(f"Paying \${amount} via credit card")
\`\`\`
`,
  exercises: [
    {
      prompt: `Create an abstract base class \`Logger\` with one abstract method \`log(message)\`. Implement two subclasses: \`FileLogger\` and \`ConsoleLogger\`, each handling the log differently.`,
      initialCode: `from abc import ABC, abstractmethod

# Your code here
`,
      solution: `from abc import ABC, abstractmethod

class Logger(ABC):
    @abstractmethod
    def log(self, message):
        pass

class FileLogger(Logger):
    def log(self, message):
        # Example of writing to a file
        print(f"Writing to file: {message}")

class ConsoleLogger(Logger):
    def log(self, message):
        print(f"Console log: {message}")
`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Explain how abstract classes promote code reusability and cleaner architecture in a brief paragraph. Optionally, provide a short code snippet to support your explanation.`,
      initialCode: ``,
      solution: `"""
By allowing shared logic (common methods) in an abstract class while forcing subclasses to implement details, 
we avoid code duplication and keep the design cohesive. Each subclass must fulfill the abstract class\'s contract, 
leading to well-defined architecture.

Code Snippet:
"""

class BaseParser(ABC):
    def parse_header(self, data):
        # Shared logic for parsing headers
        pass

    @abstractmethod
    def parse_body(self, data):
        pass
`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary benefit of using abstract classes?',
      options: [
        'They allow objects to access private members directly',
        'They force subclasses to follow a certain contract while enabling shared behavior',
        'They automatically handle all subclass methods with no additional code',
        'They prevent any class from being instantiated',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Abstract classes do not grant special access to private members.',
        'Correct! Abstract classes define the common structure and require implementations for abstract methods.',
        'Incorrect. Subclasses must still provide implementations.',
        "Incorrect. Abstract classes can't be instantiated, but that's not their primary benefit.",
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'How do you create an abstract method in Python?',
      options: [
        'Use the @abstractmethod decorator inside a class inheriting from ABC',
        'Name the method “abstract_” followed by the method name',
        'Use triple underscores for the method name',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct! Python provides the @abstractmethod decorator in the abc module.',
        'Incorrect. This naming convention has no special meaning to Python.',
        'Incorrect. Underscores do not convert a method into an abstract method.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const effectiveAbstractionData: LessonContent = {
  title: 'Effective Abstraction',
  content: `
Abstraction is most useful when it carefully balances the right details to hide and expose. Too little abstraction can lead to a cluttered interface, while too much can make the system difficult to understand.

<h3>How to Decide What to Expose or Hide</h3>

- **Identify Core Responsibilities:** Show only what's necessary to accomplish a task.
- **Hide Irrelevant Details:** Users of your class shouldn\'t need to see internal logic that doesn\'t affect them.
- **Keep Interfaces Minimal:** Fewer public methods mean fewer ways for clients to misuse your class.

<h3>Trade-Offs in Complex Systems</h3>

- Over-abstraction can lead to confusion if the interface doesn\'t reveal enough.
- Under-abstraction leads to a “kitchen sink” interface, exposing every detail to external code.

<h3>Tip</h3>
Use abstraction layers thoughtfully. For instance, a web app might have a service layer that hides data persistence details from the UI layer, reducing coupling.
`,
  exercises: [
    {
      prompt: `Outline the public interface for a hypothetical 'EmailService' class. Decide which methods or attributes should be private and which should be public, based on the principle of effective abstraction. Provide a short Python example.`,
      initialCode: '',
      solution: `"""
Example Outline:
- send_email() -> Public
- _validate_email_format() -> Protected or private
- connect_to_mail_server() -> Private or only internally used

Short Example:
"""

class EmailService:
    def send_email(self, to_address, subject, body):
        if not self._validate_email_format(to_address):
            print("Invalid email address.")
            return
        self.__connect_to_server()
        print(f"Sending email to {to_address} with subject '{subject}'")

    def _validate_email_format(self, address):
        return "@" in address  # Simplistic example

    def __connect_to_server(self):
        print("Connecting to mail server internally...")
`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a sign of under-abstraction?',
      options: [
        'Having a minimal set of public methods that cover necessary functionality',
        'Revealing all internal methods and attributes in the public interface',
        'Using abstract classes to hide implementation details from consumers',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. A minimal set of public methods is typically good abstraction.',
        'Correct! Under-abstraction means exposing unnecessary details.',
        'Incorrect. Using abstract classes usually supports good abstraction.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const abstractionQuestionsData: LessonContent = {
  title: 'Typical Interview Questions on Abstraction',
  content: `
Many technical interviews include questions about abstraction. They might ask you to explain the concept, compare it to encapsulation, or solve design problems that test your ability to abstract away details.

<h3>Common Prompts</h3>

- **“Explain abstraction vs. encapsulation.”**
- **“Design an abstract class or interface for a scenario (e.g., shape rendering, payment processing).”**
- **“Discuss a time you used abstraction to simplify a complex codebase.”**

<h3>Scenario Question Example</h3>

\`\`\`python
# Interviewer: "Create an abstract base class for different
# types of notifications (email, SMS, push), ensuring each
# type has a send() method with its own logic."
\`\`\`

**Best Practices for Interview Answers:**
- Highlight how abstraction improves maintainability and testability.
- Use simple examples to illustrate your points (e.g., shapes, payment methods, etc.).
- Emphasize real-world parallels: car controls, electronic devices, etc.
`,
  exercises: [
    {
      prompt: `Refactor the following "Notification" class to be an abstract base class. Then, create concrete subclasses "EmailNotification" and "SMSNotification" each implementing a different "send" method.`,
      initialCode: `class Notification:
    def send(self, message):
        print("Sending notification:", message)
`,
      solution: `from abc import ABC, abstractmethod

class Notification(ABC):
    @abstractmethod
    def send(self, message):
        pass

class EmailNotification(Notification):
    def send(self, message):
        print(f"Emailing message: {message}")

class SMSNotification(Notification):
    def send(self, message):
        print(f"Sending SMS: {message}")
`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which description best fits abstraction in an interview context?',
      options: [
        'A technique for strictly hiding all data without offering any public methods',
        'A design principle that highlights essential aspects while suppressing unnecessary details',
        'An approach that ensures code runs twice as fast by skipping details',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. That describes a misunderstanding of data hiding rather than true abstraction.',
        'Correct! Abstraction emphasizes the core logic while hiding unneeded complexity.',
        'Incorrect. Abstraction does not inherently improve performance.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const abstractionLesson: Record<string, LessonContent> = {
  'abstraction-definition': abstractionDefinitionData,
  'abstraction-realworld': abstractionRealWorldData,
  'abstracting-data': abstractingDataBehaviorData,
  'effective-abstraction': effectiveAbstractionData,
  'abstraction-questions': abstractionQuestionsData,
};

export const abstractionLessonsTab: LessonsTab = {
  curriculum: abstractionCurriculum,
  lessons: abstractionLesson,
};
