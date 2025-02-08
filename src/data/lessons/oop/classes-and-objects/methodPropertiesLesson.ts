import { Difficulty } from '@/common/commonConcept';
import {
  Curriculum,
  LessonContent,
  LessonsTab,
  PriorityLevel,
} from '@/common/commonLesson';

export const methodsPropertiesCurriculum: Curriculum = {
  title: 'Methods & Properties Curriculum',
  description:
    'Dive into how methods encapsulate behavior and properties hold data, with best-practice approaches.',
  sections: [
    {
      id: 1,
      title: 'Defining Methods & Properties',
      topics: [
        {
          id: 'method-signatures',
          title: 'Method Signatures',
          description: 'Return types, parameter lists, and naming conventions.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'property-getset',
          title: 'Getter/Setter Patterns',
          description:
            'When to use direct property access vs. encapsulated getters and setters.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 2,
      title: 'Best Practices & Performance',
      topics: [
        {
          id: 'method-pitfalls',
          title: 'Common Pitfalls',
          description:
            'Long parameter lists, side effects, and performance considerations.',
          priority: PriorityLevel.Important,
        },
        {
          id: 'immutability',
          title: 'Encouraging Immutability',
          description:
            'Strategies to reduce side effects, especially in functional OOP hybrids.',
          priority: PriorityLevel.Beneficial,
        },
      ],
    },
  ],
};

const methodSignaturesData: LessonContent = {
  title: 'Method Signatures',
  content: `
A method signature defines a function's name, its parameters, and (optionally) its return type. In Python, type hints help clarify intent even though they are not enforced at runtime.

<h3>
Defining Methods in Python
</h3>

  
Python methods are defined with the \`def\` keyword, and type hints can be added for parameters and return values. For example, if a method calculates a sum, its signature can indicate it accepts two integers and returns an integer.

<h3>
Example: Method with Type Hints
</h3>

\`\`\`python
class Calculator:
    def add(self, a: int, b: int) -> int:
        return a + b
\`\`\`

<h3>
Naming and Parameter Considerations
</h3>

  
Good method signatures use descriptive names and keep parameter lists concise. Avoid overly long lists by grouping related parameters into objects if needed.
`,
  exercises: [
    {
      prompt: `Write a Python method named "convert_temperature" that takes a temperature value and a unit ("C" for Celsius or "F" for Fahrenheit) and returns the converted temperature. Include type hints in your signature.`,
      initialCode: ``,
      solution: `def convert_temperature(value: float, unit: str) -> float:
    if unit == "C":
        # Convert Celsius to Fahrenheit
        return (value * 9/5) + 32
    elif unit == "F":
        # Convert Fahrenheit to Celsius
        return (value - 32) * 5/9
    else:
        raise ValueError("Unit must be 'C' or 'F'")`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `In a short paragraph, explain why clear method signatures (with descriptive names and type hints) are important for maintainability in Python.`,
      initialCode: ``,
      solution: `"""
Clear method signatures improve readability and ease future modifications. 
They serve as a form of documentation, helping developers understand what inputs are expected and what type of output to anticipate. 
This is especially valuable in Python, where runtime type enforcement is minimal.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'What is one benefit of using type hints in Python method signatures?',
      options: [
        'They enforce types at compile time like in Java',
        'They improve code readability and aid in documentation',
        'They prevent all runtime errors automatically',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Python type hints are not enforced at compile time.',
        'Correct! Type hints serve as useful documentation and improve readability.',
        'Incorrect. They help but do not prevent runtime errors.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const propertyGetSetData: LessonContent = {
  title: 'Getter/Setter Patterns',
  content: `
Getter and setter methods encapsulate access to an object's properties. In Python, direct attribute access is common, but using getters and setters (or the @property decorator) adds validation and flexibility.

<h3>
Direct vs. Encapsulated Access
</h3>

  
Direct access is simple and idiomatic in Python, but for sensitive data or where extra processing is required, getters and setters provide controlled access.

<h3>
Using the @property Decorator
</h3>

  
The @property decorator lets you define methods that are accessed like attributes. This makes your code cleaner while allowing you to add logic when getting or setting a value.

<h3>
Example: BankAccount with Property
</h3>

\`\`\`python
class BankAccount:
    def __init__(self, balance: float):
        self.__balance = balance

    @property
    def balance(self) -> float:
        return self.__balance

    @balance.setter
    def balance(self, amount: float) -> None:
        if amount >= 0:
            self.__balance = amount
        else:
            raise ValueError("Balance cannot be negative")
\`\`\`
`,
  exercises: [
    {
      prompt: `Refactor the following class to use the @property decorator instead of explicit getter and setter methods.`,
      initialCode: `"""
class Product:
    def __init__(self, price):
        self.__price = price

    def get_price(self):
        return self.__price

    def set_price(self, new_price):
        if new_price > 0:
            self.__price = new_price
        else:
            raise ValueError("Price must be positive")
"""`,
      solution: `class Product:
    def __init__(self, price: float):
        self.__price = price

    @property
    def price(self) -> float:
        return self.__price

    @price.setter
    def price(self, new_price: float) -> None:
        if new_price > 0:
            self.__price = new_price
        else:
            raise ValueError("Price must be positive")`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `In a short paragraph, describe the benefits of using encapsulated getters and setters instead of direct attribute access, particularly in a large-scale Python project.`,
      initialCode: ``,
      solution: `"""
Using getters and setters provides a controlled interface for attribute access. 
This encapsulation allows for validation, logging, or other processing when attributes are modified, 
which is especially important in larger projects where data integrity and consistency are critical.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'What is one advantage of using the @property decorator in Python?',
      options: [
        'It enforces compile-time type checking',
        'It allows method-like control over attribute access while using a simple attribute syntax',
        'It eliminates the need for classes',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Type checking is not enforced at compile time in Python.',
        'Correct! @property offers a way to add logic during attribute access without changing the calling code.',
        'Incorrect. It does not remove the need for classes.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const methodPitfallsData: LessonContent = {
  title: 'Common Pitfalls',
  content: `
Poorly designed methods can lead to hard-to-maintain code. Common pitfalls include long parameter lists, hidden side effects, and performance issues.

<h3>
Long Parameter Lists
</h3>

  
Having too many parameters makes a method hard to use and understand. Group related parameters into a single object or use defaults where possible.

<h3>
Hidden Side Effects
</h3>

  
Methods should ideally not change global state or modify inputs unexpectedly. Pure functions (without side effects) are easier to test and debug.

<h3>
Performance Considerations
</h3>

  
Avoid unnecessary computations or operations inside frequently called methods. Strive for clarity and efficiency.
`,
  exercises: [
    {
      prompt: `Refactor the following Python function to reduce its parameter list by grouping related parameters into a dictionary or a simple object.`,
      initialCode: `"""
def register_user(username, password, email, phone, address):
    pass
"""`,
      solution: `"""
def register_user(user_data):
    # user_data is expected to be a dict with keys: username, password, email, phone, address
    pass

# Example usage:
user_info = {
    "username": "alice",
    "password": "secret",
    "email": "alice@example.com",
    "phone": "1234567890",
    "address": "123 Main St"
}
register_user(user_info)
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Explain in a short paragraph why hidden side effects in methods are problematic, particularly in unit testing and debugging.`,
      initialCode: ``,
      solution: `"""
Hidden side effects can alter global state or modify inputs without clear indication, making it hard to predict and test method behavior. 
This can lead to flaky tests and obscure bugs since the method's outcome depends on external factors that aren’t apparent from its signature.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'What is a major downside of methods with long parameter lists?',
      options: [
        'They are more secure',
        'They reduce readability and increase the risk of errors',
        'They automatically optimize performance',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Long parameter lists do not inherently increase security.',
        'Correct! They make the code harder to read and more error-prone.',
        'Incorrect. Performance is not automatically improved by having more parameters.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const immutabilityData: LessonContent = {
  title: 'Encouraging Immutability',
  content: `
Immutability reduces side effects by ensuring that once an object is created, its state cannot be changed. This is especially useful in functional programming or when working in concurrent environments.

<h3>
Benefits of Immutability
</h3>

  
Immutable objects simplify reasoning about code, prevent accidental modifications, and improve thread-safety.

<h3>
Strategies in Python
</h3>

  
- Use tuples instead of lists for fixed collections.  
- Avoid providing setters or mutable methods.  
- Use frozen dataclasses (\`@dataclass(frozen=True)\`) for simple immutable objects.

<h3>
Example: Frozen Dataclass
</h3>

\`\`\`python
from dataclasses import dataclass

@dataclass(frozen=True)
class Point:
    x: float
    y: float

p = Point(1.0, 2.0)
# p.x = 3.0  # This would raise a FrozenInstanceError
\`\`\`
`,
  exercises: [
    {
      prompt: `Create an immutable Python class "Coordinate" using @dataclass with frozen=True that has fields "latitude" and "longitude". Demonstrate that modifying an instance raises an error.`,
      initialCode: '',
      solution: `from dataclasses import dataclass

@dataclass(frozen=True)
class Coordinate:
    latitude: float
    longitude: float

coord = Coordinate(40.7128, -74.0060)
# Uncommenting the following line should raise an error:
# coord.latitude = 41.0
print(coord)`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `In a short paragraph, discuss the trade-offs of immutability in Python, particularly regarding ease of debugging versus flexibility in state changes.`,
      initialCode: '',
      solution: `"""
Immutability simplifies debugging because objects cannot change state unexpectedly, making them easier to reason about. 
However, it can reduce flexibility when state changes are needed, requiring the creation of new objects rather than updating existing ones. 
This trade-off often leads developers to use immutability where predictable behavior is paramount and mutable structures where performance is critical.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'What is one benefit of using immutable objects in Python?',
      options: [
        'They allow accidental modifications to go unnoticed',
        'They simplify reasoning about program state and improve thread-safety',
        'They eliminate the need for error handling',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Immutability prevents accidental modifications from occurring.',
        'Correct! Immutable objects are easier to reason about and are inherently thread-safe.',
        'Incorrect. Error handling is still necessary in all programming paradigms.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const methodPropertiesLessons: Record<string, LessonContent> = {
  'method-signatures': methodSignaturesData,
  'property-getset': propertyGetSetData,
  'method-pitfalls': methodPitfallsData,
  immutability: immutabilityData,
};
export const methodPropertiesLessonsTab: LessonsTab = {
  curriculum: methodsPropertiesCurriculum,
  lessons: methodPropertiesLessons,
};
