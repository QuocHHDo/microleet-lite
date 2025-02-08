import { Difficulty } from '@/common/commonConcept';
import { Curriculum, LessonContent, LessonsTab, PriorityLevel } from '@/common/commonLesson';

export const interfaceDefinitionCurriculum: Curriculum = {
  title: 'Interface Definition & Purpose Curriculum',
  description:
    'Explore how interfaces define contracts without dictating implementation details.',
  sections: [
    {
      id: 1,
      title: 'Interface Basics',
      topics: [
        {
          id: 'interface-contracts',
          title: 'Contracts in OOP',
          description:
            'How interfaces enforce a set of methods or properties that must be implemented.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'loose-coupling',
          title: 'Loose Coupling & Testability',
          description:
            'How interfaces make software components more modular and testable.',
          priority: PriorityLevel.Important,
        },
      ],
    },
  ],
};

// 1) Contracts in OOP
const interfaceContractsData: LessonContent = {
  title: 'Contracts in OOP',
  content: `
An **interface** defines the methods (and possibly properties) a class must implement, serving as a contract. In Python, there's no formal “interface” keyword, but we can use **Abstract Base Classes (ABCs)** to enforce similar constraints.

<h3>How Interfaces Enforce Contracts</h3>

They ensure any implementing class provides the specified methods. This decouples “what” a class can do from “how” it does it, promoting flexible design.

<h3>Python Example</h3>

\`\`\`python
from abc import ABC, abstractmethod

class PaymentInterface(ABC):
    @abstractmethod
    def pay(self, amount):
        pass
\`\`\`

Any class inheriting **PaymentInterface** must implement **pay**. 
`,
  exercises: [
    {
      prompt: `Implement a Python abstract class \`LoggerInterface\` with an abstract method \`log(message)\`. Then create a \`ConsoleLogger\` class that implements it. Demonstrate usage.`,
      initialCode: '',
      solution: `from abc import ABC, abstractmethod

class LoggerInterface(ABC):
    @abstractmethod
    def log(self, message):
        pass

class ConsoleLogger(LoggerInterface):
    def log(self, message):
        print(f"[Console Log]: {message}")

# Usage
logger = ConsoleLogger()
logger.log("Hello World")`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Explain in a paragraph why Python doesn't have an explicit 'interface' keyword, referencing the historical emphasis on duck typing and the newer abc approach.`,
      initialCode: '',
      solution: `"""
Historically, Python uses duck typing ("if it quacks like a duck..."), 
so you don't need a formal interface to treat objects polymorphically. 
However, the 'abc' module provides a structured way to define abstract methods for stronger contracts. 
There's no separate keyword for interfaces, but Abstract Base Classes fill that role if needed.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'What is the main advantage of using an interface (or ABC) for a payment processing system?',
      options: [
        'To generate random encryption keys',
        'To enforce that each payment method (credit card, PayPal, etc.) implements a common pay method',
        'To reduce the performance overhead of dynamic typing',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Key generation is unrelated to basic interface concepts.',
        'Correct! Interfaces ensure consistent method signatures across different implementations.',
        'Incorrect. Performance overhead is not the primary rationale for interfaces.'
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 2) Loose Coupling & Testability
const looseCouplingData: LessonContent = {
  title: 'Loose Coupling & Testability',
  content: `
Interfaces promote **loose coupling** by exposing only the contract, not the implementation details. This makes it easier to swap out implementations or mock them in testing.

<h3>Why Does This Increase Testability?</h3>

If code depends on an interface rather than a concrete class, you can inject a mock or stub implementation during tests without altering the production code.

<h3>Example (Python)</h3>

\`\`\`python
class PaymentInterface(ABC):
    @abstractmethod
    def pay(self, amount):
        pass

class MockPayment(PaymentInterface):
    def pay(self, amount):
        print(f"Mock pay called with {amount}")
\`\`\`

Now, your application code can reference **PaymentInterface** and doesn\'t need to know whether it\'s talking to a real or mock payment processor.
`,
  exercises: [
    {
      prompt: `Create a small example in Python illustrating a class \`OrderService\` that accepts a \`PaymentInterface\` in its constructor. Demonstrate how passing a mock payment object can help in testing without real external calls.`,
      initialCode: '',
      solution: `from abc import ABC, abstractmethod

class PaymentInterface(ABC):
    @abstractmethod
    def pay(self, amount):
        pass

class OrderService:
    def __init__(self, payment_processor: PaymentInterface):
        self.payment_processor = payment_processor

    def checkout(self, amount):
        print("Processing order...")
        self.payment_processor.pay(amount)

# Mock Payment
class MockPayment(PaymentInterface):
    def pay(self, amount):
        print(f"MockPayment: Pretend paying \${amount}")

# Usage for testing
mock_pay = MockPayment()
order_service = OrderService(mock_pay)
order_service.checkout(50)  # "MockPayment: Pretend paying $50"
`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Explain in a short paragraph how the concept of "loose coupling" aligns with the Pythonic preference for simple and readable code, referencing both duck typing and ABC-based interfaces.`,
      initialCode: '',
      solution: `"""
Python's philosophy encourages writing clear, modular code where components can be easily swapped. 
Loose coupling via interfaces or duck typing means classes only rely on method signatures, not concrete implementations. 
This fosters simpler test setups and refactoring, leading to more maintainable code overall.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'How do interfaces help in testing?',
      options: [
        'They reduce the number of unit tests needed',
        'They allow you to substitute real implementations with mock or stub classes that adhere to the same contract',
        'They automatically generate test cases based on the interface methods',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Interfaces don\'t affect how many tests you write, just how easy it is to swap dependencies.',
        'Correct! Interfaces let you inject different implementations for testing vs. production.',
        'Incorrect. Interfaces do not generate tests automatically.'
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const interfaceDefinitionLessons: Record<string, LessonContent> = {
  'interface-contracts': interfaceContractsData,
  'loose-coupling': looseCouplingData
}

export const interfaceDefinitionLessonsTab: LessonsTab = {
  curriculum: interfaceDefinitionCurriculum,
  lessons: interfaceDefinitionLessons
}