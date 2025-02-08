import { Difficulty } from '@/common/commonConcept';
import { Curriculum, LessonContent, LessonsTab, PriorityLevel } from '@/common/commonLesson';

export const strategyPatternCurriculum: Curriculum = {
  title: 'Strategy Pattern Curriculum',
  description:
    'Define a family of algorithms and make them interchangeable at runtime.',
  sections: [
    {
      id: 1,
      title: 'Overview',
      topics: [
        {
          id: 'strategy-intro',
          title: 'Introduction & Motivation',
          description:
            'Why encapsulating algorithms behind an interface fosters flexibility.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'common-use-cases',
          title: 'Common Use Cases',
          description:
            'Real-world scenarios like payment processing or sorting strategies.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 2,
      title: 'Implementation & Interview',
      topics: [
        {
          id: 'strategy-implementation',
          title: 'Implementation Details',
          description:
            'How to define a context class and strategy interface with concrete strategies.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'comparison-other-patterns',
          title: 'Comparison with Other Patterns',
          description:
            'Distinguish from State, Template Method, and other related patterns.',
          priority: PriorityLevel.Beneficial,
        },
      ],
    },
  ],
};

// 1) Introduction & Motivation
const strategyIntroData: LessonContent = {
  title: 'Introduction & Motivation',
  content: `
The **Strategy Pattern** defines a family of algorithms, encapsulates each one, and makes them interchangeable at runtime. 

<h3>
Why Encapsulate Algorithms?
</h3>

It allows you to swap logic (e.g., different sorting, validation, or payment methods) without changing the code using those algorithms.

<h3>
Python Example
</h3>

\`\`\`python
class PaymentStrategy:
    def pay(self, amount):
        raise NotImplementedError

class PayPalStrategy(PaymentStrategy):
    def pay(self, amount):
        print(f"Paying \${amount} via PayPal")

class CreditCardStrategy(PaymentStrategy):
    def pay(self, amount):
        print(f"Charging \${amount} to credit card")
\`\`\`
`,
  exercises: [
    {
      prompt: `Create a Python "SortingContext" class that can be assigned different "SortStrategy" objects (e.g., QuickSortStrategy, MergeSortStrategy). Provide a method "sort_data(data)" that delegates to the strategy.`,
      initialCode: '',
      solution: `"""
from abc import ABC, abstractmethod

class SortStrategy(ABC):
    @abstractmethod
    def sort(self, data):
        pass

class QuickSortStrategy(SortStrategy):
    def sort(self, data):
        print("QuickSort logic here")
        return sorted(data)

class MergeSortStrategy(SortStrategy):
    def sort(self, data):
        print("MergeSort logic here")
        return sorted(data)

class SortingContext:
    def __init__(self, strategy: SortStrategy):
        self.strategy = strategy

    def set_strategy(self, strategy: SortStrategy):
        self.strategy = strategy

    def sort_data(self, data):
        return self.strategy.sort(data)
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Explain in a paragraph how substituting one strategy for another can happen at runtime, referencing real examples like toggling sorting algorithms or payment methods on user preference.`,
      initialCode: '',
      solution: `"""
Because strategies implement the same interface, the context can accept a new strategy object at any time. 
For instance, if a user chooses 'quick sort' from a menu, the context swaps in QuickSortStrategy. 
If they switch to 'merge sort', you replace it with MergeSortStrategy. 
No changes are needed in the context\'s code, just a new strategy assignment.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Why is the Strategy Pattern powerful for runtime algorithm selection?',
      options: [
        'It forces you to compile code multiple times',
        'You can plug in different algorithms without modifying the client or context code',
        'It disables polymorphism completely',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Strategy doesn\'t require multiple compilations.',
        'Correct! Strategies can be swapped dynamically via the same interface.',
        'Incorrect. Strategy relies on polymorphism for different implementations.'
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 2) Common Use Cases
const strategyCommonUseCasesData: LessonContent = {
  title: 'Common Use Cases',
  content: `
Common scenarios for strategy include:

<h3>
Payment Processing
</h3>

Different payment methods (PayPal, credit card, bank transfer), each implementing the same pay method.

<h3>
Sorting Algorithms
</h3>

Choose an algorithm at runtime based on data size or user preference.

<h3>
Validation or Filtering
</h3>

Swap out different validation routines without changing main code logic.
`,
  exercises: [
    {
      prompt: `Provide a snippet showing a "PaymentContext" in Python, set initially to "PayPalStrategy". Then switch to "CreditCardStrategy" mid-execution to illustrate the dynamic nature.`,
      initialCode: '',
      solution: `"""
class PaymentContext:
    def __init__(self, strategy):
        self.strategy = strategy

    def set_strategy(self, strategy):
        self.strategy = strategy

    def pay_bill(self, amount):
        self.strategy.pay(amount)

# Strategies
class PayPalStrategy:
    def pay(self, amount):
        print(f"Paying \${amount} via PayPal")

class CreditCardStrategy:
    def pay(self, amount):
        print(f"Charging \${amount} to credit card")

# Usage
context = PaymentContext(PayPalStrategy())
context.pay_bill(100)  # Pay via PayPal
context.set_strategy(CreditCardStrategy())
context.pay_bill(50)   # Now pay via credit card
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `In a short paragraph, discuss how the Strategy pattern helps code remain open for extension but closed for modification, referencing the OCP principle again.`,
      initialCode: '',
      solution: `"""
Because strategies implement a common interface, you can add a new strategy class (e.g., 'CryptoPaymentStrategy') 
without editing the context code that uses it. 
The context can simply accept any new strategy, fulfilling the OCP by avoiding changes in core logic.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which is a common real-world use for the Strategy pattern?',
      options: [
        'Forcing a single instance globally',
        'Integrating incompatible interfaces via a wrapper',
        'Allowing multiple interchangeable algorithms (e.g., sorting, payment methods) at runtime',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. That describes the Singleton pattern.',
        'Incorrect. That\'s the Adapter pattern\'s domain.',
        'Correct! Strategy is about interchangeable algorithms at runtime.'
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 3) Implementation Details
const strategyImplementationData: LessonContent = {
  title: 'Implementation Details',
  content: `
Implementing Strategy in Python:

<h3>
Context Class
</h3>

Holds a reference to a **Strategy** object, delegating operations to it. Often provides a setter to change strategies at runtime.

<h3>
Strategy Interface
</h3>

An abstract class or protocol with methods that concrete strategies must implement. In Python, this might be an ABC or simple duck typing if consistent method signatures are guaranteed.

<h3>
Concrete Strategies
</h3>

Each strategy class provides a distinct implementation of the interface method(s).
`,
  exercises: [
    {
      prompt: `Write a minimal Python context "AuthContext" with a "login()" method. The "AuthStrategy" interface has a "login(username, password)" method. Then create a "DatabaseAuth" and an "LDAPAuth" strategy.`,
      initialCode: '',
      solution: `"""
from abc import ABC, abstractmethod

class AuthStrategy(ABC):
    @abstractmethod
    def login(self, username, password):
        pass

class DatabaseAuth(AuthStrategy):
    def login(self, username, password):
        print(f"Authenticating {username} with DB")

class LDAPAuth(AuthStrategy):
    def login(self, username, password):
        print(f"Authenticating {username} with LDAP")

class AuthContext:
    def __init__(self, strategy: AuthStrategy):
        self.strategy = strategy

    def set_strategy(self, strategy: AuthStrategy):
        self.strategy = strategy

    def login(self, username, password):
        self.strategy.login(username, password)
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Explain in a short paragraph how Python\'s duck typing might enable you to skip formal ABCs and just rely on consistent method signatures for strategies, while acknowledging the trade-off (less compile-time safety).`,
      initialCode: '',
      solution: `"""
In Python, you can simply assume each strategy has a 'login' method without using an ABC. 
As long as each strategy implements 'login', the context can call it without issue. 
However, there's no compiler check, so a missing 'login' method in a strategy will only fail at runtime.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'What does the context class typically do in a Strategy Pattern?',
      options: [
        'Directly implements all algorithms itself',
        'Holds a reference to a strategy and delegates work to it',
        'Provides multiple constructors, one per strategy',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. The whole point is to defer algorithm implementation to the strategies.',
        'Correct! The context delegates the relevant operation to its current strategy.',
        'Incorrect. A single constructor or setter can handle switching strategies at runtime.'
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 4) Comparison with Other Patterns
const strategyComparisonData: LessonContent = {
  title: 'Comparison with Other Patterns',
  content: `
**Strategy** shares similarities with patterns like **State** and **Template Method**, but has distinct goals.

<h3>
State vs. Strategy
</h3>

Both encapsulate behavior. **State** changes behavior based on internal state transitions, while **Strategy** changes behavior based on external choice or context setting.

<h3>
Template Method
</h3>

Template Method defines a skeleton of an algorithm in a base class, letting subclasses override certain steps. Strategy typically allows swapping entire algorithms at runtime.

<h3>
Pythonic Differences
</h3>

Because Python is dynamic, you can implement these patterns with fewer structural constraints, but the conceptual distinctions remain useful for clean design.
`,
  exercises: [
    {
      prompt: `Provide a short paragraph explaining a scenario where "State" might be confused with "Strategy," clarifying the difference in how state transitions occur vs. external strategy setting.`,
      initialCode: '',
      solution: `"""
In a 'State' pattern, an object transitions among states (like a vending machine going from 'idle' to 'hasCoin' to 'dispensing') 
based on internal conditions. 
In 'Strategy', the choice of algorithm is typically set externally, e.g., a user picks 'PayPal' or 'Credit Card.' 
State transitions are often internal and triggered by the object\'s own logic, 
while strategies are chosen by outside context or configuration.
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `In a short paragraph, contrast how "Template Method" might be used for a sorting algorithm vs. "Strategy" in Python. Focus on how Template Method has a fixed workflow with subclass hooks.`,
      initialCode: '',
      solution: `"""
Template Method defines the overall sorting steps in a base class, 
with subclasses overriding hooks (like 'partition' in a QuickSort). 
Strategy, on the other hand, would have distinct classes for QuickSort, MergeSort, etc., 
and the context can pick which one to use. 
Template Method uses inheritance-based extension, 
while Strategy is about runtime swapping of independent classes.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'How does the Strategy Pattern differ from the State Pattern?',
      options: [
        'State patterns always use inheritance, while Strategy uses composition',
        'Strategy is about choosing algorithms externally, while State focuses on internal transitions between states',
        'They are identical patterns with different names',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Both can use inheritance or composition in different ways.',
        'Correct! Strategy typically chooses an algorithm externally; State transitions happen within the object\'s logic.',
        'Incorrect. They serve related but distinct purposes.'
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const strategyPatternLessons: Record<string, LessonContent> = {
  'strategy-intro': strategyIntroData,
  'common-use-cases': strategyCommonUseCasesData,
  'strategy-implementation': strategyImplementationData,
  'comparison-other-patterns': strategyComparisonData
}

export const strategyPatternLessonsTab: LessonsTab = {
  curriculum: strategyPatternCurriculum,
  lessons: strategyPatternLessons
}


