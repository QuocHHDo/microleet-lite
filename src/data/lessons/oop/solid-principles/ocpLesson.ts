import { Difficulty } from '@/common/commonConcept';
import { Curriculum, LessonContent, LessonsTab, PriorityLevel } from '@/common/commonLesson';

export const ocpCurriculum: Curriculum = {
  title: 'OCP Curriculum',
  description:
    'Learn to design modules that are open for extension but closed for modification.',
  sections: [
    {
      id: 1,
      title: 'Core Idea',
      topics: [
        {
          id: 'ocp-definition',
          title: 'Definition & Rationale',
          description:
            'Explains how to extend functionality without altering existing code.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'common-approaches',
          title: 'Common Approaches',
          description:
            'Abstract classes, interfaces, and design patterns like Strategy and Decorator.',
          priority: PriorityLevel.Important,
        },
      ],
    },
  ],
};

// 1) Definition & Rationale
const ocpDefinitionData: LessonContent = {
  title: 'Definition & Rationale',
  content: `
The Open-Closed Principle (OCP) states that **classes or modules should be open for extension but closed for modification**.

<h3>
Why OCP?
</h3>

It prevents frequent changes to existing code when adding new features. By using abstractions or design patterns, you extend the behavior externally without altering stable, tested code.

<h3>
Example in Python
</h3>

\`\`\`python
class DiscountCalculator:
    def apply_discount(self, price):
        return price  # By default, no discount

# Instead of modifying this class, we can extend it:
class SeasonalDiscount(DiscountCalculator):
    def apply_discount(self, price):
        return price * 0.9  # 10% off
\`\`\`

We\'re **extending** behavior via subclass, not modifying the original code.
`,
  exercises: [
    {
      prompt: `Create a Python class \`Logger\` that logs to console by default. Then create a subclass \`FileLogger\` to extend it. Demonstrate how this aligns with OCP if we never modify the original 'Logger' code.`,
      initialCode: '',
      solution: `class Logger:
    def log(self, message):
        print(f"Console log: {message}")

class FileLogger(Logger):
    def log(self, message):
        with open("logfile.txt", "a") as f:
            f.write(f"File log: {message}\\n")
`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Explain in a paragraph why languages with dynamic typing (like Python) can sometimes achieve OCP more naturally through duck typing or composition, but may still need design patterns in larger systems.`,
      initialCode: '',
      solution: `"""
Python can swap behaviors at runtime via duck typing (any object with the needed methods suffices), 
often avoiding direct code modifications. 
However, large systems still benefit from formal design patterns or well-structured classes 
to maintain clarity and consistent extension points, ensuring they're truly "closed" for modification.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'How does the Open-Closed Principle reduce disruptions in a codebase?',
      options: [
        'By making classes impossible to instantiate',
        'By allowing new features through extensions instead of changing tested core classes',
        'By hiding all methods from external code',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Instantiation is unrelated to OCP\'s main idea.',
        'Correct! OCP fosters adding new behavior without editing existing logic.',
        'Incorrect. Encapsulation is different from OCP\'s extension-based concept.'
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 2) Common Approaches
const ocpCommonApproachesData: LessonContent = {
  title: 'Common Approaches',
  content: `
Developers apply OCP using various patterns and design techniques.

<h3>
Abstract Classes & Interfaces
</h3>

Defining base classes or ABCs allows new subclasses to extend behavior. The parent class remains closed to modifications.

<h3>
Design Patterns (e.g., Strategy, Decorator)
</h3>

- **Strategy**: Swap out different algorithms without changing the context class.  
- **Decorator**: Add extra functionality at runtime by wrapping objects, rather than editing the original code.

<h3>
Python Example: Strategy
</h3>

\`\`\`python
class ShippingStrategy:
    def calculate_cost(self, order):
        raise NotImplementedError

class GroundShipping(ShippingStrategy):
    def calculate_cost(self, order):
        return 5.00

class AirShipping(ShippingStrategy):
    def calculate_cost(self, order):
        return 10.00
\`\`\`
`,
  exercises: [
    {
      prompt: `Show a brief Python snippet using the Decorator pattern to extend the behavior of a \`MessageSender\` class without modifying it.`,
      initialCode: '',
      solution: `"""
class MessageSender:
    def send(self, msg):
        print(f"Sending: {msg}")

# Decorator
class EncryptedSender:
    def __init__(self, sender):
        self.sender = sender

    def send(self, msg):
        encrypted = f"<encrypted>{msg}</encrypted>"
        self.sender.send(encrypted)

# Usage
sender = MessageSender()
decorated_sender = EncryptedSender(sender)
decorated_sender.send("Hello!")  # Original MessageSender is unchanged
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Explain in a short paragraph how inheritance (subclassing a base class) and composition (decorator/strategy) both enable OCP, but with different trade-offs.`,
      initialCode: '',
      solution: `"""
Inheritance modifies behavior by creating a new subclass, leaving the base untouched. 
Composition wraps or injects new logic around existing objects. 
Both avoid changing the original code directly, adhering to OCP. 
However, inheritance can lead to deeper hierarchies, while composition offers more flexible runtime configuration.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which design pattern often helps achieve OCP by allowing new behaviors without altering existing classes?',
      options: [
        'Singleton',
        'Strategy',
        'Spaghetti code approach',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Singleton limits instantiation but doesn\'t inherently address extension.',
        'Correct! Strategy enables plugging in new algorithms or behaviors easily.',
        'Incorrect. Spaghetti code is a design anti-pattern.'
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const ocpLessons: Record<string, LessonContent> = {
  'ocp-definition': ocpDefinitionData,
  'common-approaches': ocpCommonApproachesData,
}
export const ocpLessonsTab: LessonsTab = {
  curriculum: ocpCurriculum,
  lessons: ocpLessons
}
