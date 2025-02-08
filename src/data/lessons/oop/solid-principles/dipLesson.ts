import { Difficulty } from '@/common/commonConcept';
import {
  Curriculum,
  LessonContent,
  LessonsTab,
  PriorityLevel,
} from '@/common/commonLesson';

export const dipCurriculum: Curriculum = {
  title: 'DIP Curriculum',
  description:
    'Depend on abstractions, not on concrete implementations, to create loosely coupled systems.',
  sections: [
    {
      id: 1,
      title: 'Fundamentals',
      topics: [
        {
          id: 'dip-definition',
          title: 'Definition & Purpose',
          description:
            'High-level modules should not depend on low-level modules; both should depend on abstractions.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'benefits',
          title: 'Key Benefits',
          description:
            'How DIP fosters testability, maintainability, and modular design.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 2,
      title: 'Practical Use',
      topics: [
        {
          id: 'frameworks-tools',
          title: 'Frameworks & Tools',
          description: 'Dependency injection containers and their role in DIP.',
          priority: PriorityLevel.Important,
        },
      ],
    },
  ],
};

// 1) Definition & Purpose
const dipDefinitionData: LessonContent = {
  title: 'Definition & Purpose',
  content: `
The Dependency Inversion Principle (DIP) states: **High-level modules should not depend on low-level modules; both should depend on abstractions.**

<h3>
Why DIP?
</h3>

It aims to reduce coupling by introducing an abstraction layer. In Python, this often means depending on abstract classes (via the \`abc\` module) or protocols (in newer Python versions) rather than concrete classes directly. This approach makes code more modular and testable.

<h3>
Simple Python Example
</h3>

\`\`\`python
from abc import ABC, abstractmethod

class PaymentProcessor(ABC):
    @abstractmethod
    def pay(self, amount):
        pass

class CreditCardProcessor(PaymentProcessor):
    def pay(self, amount):
        print(f"Paid \${amount} with credit card")

# High-level code:
class OrderService:
    def __init__(self, payment_processor: PaymentProcessor):
        self.payment_processor = payment_processor
    
    def checkout(self, amount):
        self.payment_processor.pay(amount)
\`\`\`

By depending on **\`PaymentProcessor\`**, \`OrderService\` doesn\'t need to know which specific payment method is used.
`,
  exercises: [
    {
      prompt: `Create a Python interface (ABC) named \`Notifier\` with a method \`notify(message)\`. Then implement:
1) \`EmailNotifier\`
2) \`SMSNotifier\`

Write a \`NotificationService\` class that depends on \`Notifier\` rather than concrete notifiers.`,
      initialCode: '',
      solution: `from abc import ABC, abstractmethod

class Notifier(ABC):
    @abstractmethod
    def notify(self, message):
        pass

class EmailNotifier(Notifier):
    def notify(self, message):
        print(f"Sending email: {message}")

class SMSNotifier(Notifier):
    def notify(self, message):
        print(f"Sending SMS: {message}")

class NotificationService:
    def __init__(self, notifier: Notifier):
        self.notifier = notifier

    def send_alert(self, msg):
        self.notifier.notify(msg)
`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Explain in a short paragraph how DIP helps when adding a new type of notifier, e.g., PushNotification, focusing on not modifying existing code in \`NotificationService\`.`,
      initialCode: '',
      solution: `"""
DIP ensures the high-level component (NotificationService) depends on an abstraction (Notifier). 
If we add a new PushNotification notifier, we just implement the Notifier interface. 
The NotificationService can use it without any code changes, adhering to the open-closed principle as well.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following captures the essence of DIP?',
      options: [
        'High-level modules depend on low-level concrete classes',
        'High-level modules and low-level modules both depend on abstractions',
        'Dependencies should be resolved globally with singletons',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. This violates the principle, making high-level code tightly coupled.',
        'Correct! Both high-level and low-level modules rely on interfaces/ABCs rather than each other directly.',
        'Incorrect. DIP does not mandate singletons or global resolutions.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 2) Key Benefits
const dipBenefitsData: LessonContent = {
  title: 'Key Benefits',
  content: `
DIP leads to more testable, maintainable, and extendable codebases. By inverting dependencies, you decouple high-level logic from low-level details.

<h3>
Testability
</h3>

You can replace real implementations with mocks or stubs during testing, since the code references interfaces (ABCs in Python) instead of concrete classes.

<h3>
Maintainability
</h3>

Changes in low-level modules (e.g., a new database driver) don\'t force changes in high-level business logic. Only the abstraction remains stable.

<h3>
Extensibility
</h3>

Add new features by implementing the same abstraction. The high-level code doesn\'t need rewriting; it just uses the new low-level class through the shared interface.
`,
  exercises: [
    {
      prompt: `Briefly show how you'd inject a mock or stub payment processor into the \`OrderService\` from your earlier DIP example, illustrating improved testability.`,
      initialCode: '',
      solution: `class MockPaymentProcessor:
    def pay(self, amount):
        print(f"Mock pay with amount {amount}")

# In a test scenario:
order_service = OrderService(MockPaymentProcessor())
order_service.checkout(100)  # "Mock pay with amount 100"
`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `In a paragraph, explain how DIP can reduce the impact of a major refactor in the low-level code, referencing Python\'s flexible module imports and class structure.`,
      initialCode: '',
      solution: `"""
If high-level code depends on an abstract interface, it doesn't matter how the low-level implementation changes internally. 
A major refactor (e.g., new class structure, different module path) can still present the same interface to high-level code, 
minimizing disruptions. Python\'s import statements and flexible class definitions become simpler to update behind that abstraction.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Why does DIP commonly improve testability?',
      options: [
        'It ensures all classes are final and cannot be changed',
        'It allows swapping out concrete dependencies with test doubles that implement the same interface',
        'It forbids using any external libraries in the code',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. DIP does not require final classes.',
        'Correct! Mock or stub classes can fulfill the same ABC, making tests easier.',
        "Incorrect. DIP doesn't dictate external library usage.",
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 3) Frameworks & Tools
const dipFrameworksToolsData: LessonContent = {
  title: 'Frameworks & Tools',
  content: `
In some languages, **Dependency Injection (DI) containers** automatically create objects and inject their dependencies. Python typically doesn't require full DI frameworks due to its dynamic nature, but libraries like **inject** or **dependency-injector** exist.

<h3>
DI Containers in Python
</h3>

They can help manage complex object graphs by binding interfaces to implementations. However, many Python devs prefer simpler approaches, e.g., manually passing dependencies in \`__init__\`.

<h3>
When to Consider a DI Container
</h3>

- Large applications with many dependencies  
- Multiple environment configurations (e.g., production vs. testing vs. staging)  
- Frequent swapping of implementations

<h3>
Minimal Example
</h3>

\`\`\`python
from dependency_injector import containers, providers

class Container(containers.DeclarativeContainer):
    payment_processor = providers.Factory(CreditCardProcessor)
    order_service = providers.Factory(OrderService, payment_processor=payment_processor)
\`\`\`
`,
  exercises: [
    {
      prompt: `Explain in a short paragraph why Python\'s dynamic typing can reduce the need for a formal DI container, compared to statically typed languages where injecting dependencies can be more cumbersome.`,
      initialCode: '',
      solution: `"""
Python code often injects dependencies by directly passing objects into constructors or functions. 
There's no compiler-enforced type system that demands a DI framework to resolve types. 
This flexibility lowers the barrier to manual dependency injection. 
However, large, complex apps might still benefit from a DI library for structured configuration.
"""`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: `Provide a minimal code snippet using the "inject" or "dependency-injector" library to inject a PaymentProcessor into an OrderService, focusing on how it aligns with DIP.`,
      initialCode: '',
      solution: `"""
from dependency_injector import containers, providers

class PaymentProcessor:
    def pay(self, amount):
        print(f"Paying \${amount}...")

class OrderService:
    def __init__(self, payment_processor):
        self.payment_processor = payment_processor
    def checkout(self, amount):
        self.payment_processor.pay(amount)

class MyContainer(containers.DeclarativeContainer):
    payment_processor = providers.Factory(PaymentProcessor)
    order_service = providers.Factory(OrderService, payment_processor=payment_processor)

container = MyContainer()
service = container.order_service()
service.checkout(50)  # "Paying $50..."
"""`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is a reason Python developers might not always use a DI container?',
      options: [
        'Python forbids importing external libraries',
        'Dependency injection is impossible in Python',
        "Python's dynamic nature and simpler injection patterns often suffice without a formal container",
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Python supports many external libraries.',
        'Incorrect. Dependency injection is quite feasible in Python.',
        "Correct! Python's flexibility reduces the necessity for a DI framework.",
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const dipLessons: Record<string, LessonContent> = {
  'dip-definition': dipDefinitionData,
  benefits: dipBenefitsData,
  'frameworks-tools': dipFrameworksToolsData,
};
export const dipLessonsTab: LessonsTab = {
  curriculum: dipCurriculum,
  lessons: dipLessons,
};
