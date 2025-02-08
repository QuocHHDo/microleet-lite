import { Difficulty } from '@/common/commonConcept';
import { Curriculum, LessonContent, LessonsTab, PriorityLevel } from '@/common/commonLesson';

export const lspCurriculum: Curriculum = {
  title: 'LSP Curriculum',
  description:
    'Ensure that subclasses can substitute for their base classes without altering correct behavior.',
  sections: [
    {
      id: 1,
      title: 'Definition & Examples',
      topics: [
        {
          id: 'lsp-definition',
          title: 'Definition',
          description:
            'Objects of a superclass should be replaceable with objects of a subclass.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'violations',
          title: 'Violation Examples',
          description:
            'Square vs. Rectangle example, and other real-world scenarios.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 2,
      title: 'Best Practices',
      topics: [
        {
          id: 'designing-subclasses',
          title: 'Designing Subclasses',
          description: 'How to avoid breaking the contract of the base class.',
          priority: PriorityLevel.Important,
        },
      ],
    },
  ],
};

// 1) Definition
const lspDefinitionData: LessonContent = {
  title: 'Definition',
  content: `
The Liskov Substitution Principle (LSP) states: **Subtypes must be substitutable for their base types** without altering the correctness of the program.

<h3>
Core Idea
</h3>

If \`B\` is a subclass of \`A\`, then anywhere you use an \`A\`, you should be able to use a \`B\` without unexpected results.

<h3>
Implications for Python
</h3>

Even though Python is dynamically typed, you can still violate LSP by changing expected behaviors or method signatures in a subclass, leading to broken assumptions.
`,
  exercises: [
    {
      prompt: `Show a Python class \`Bird\` with a method \`fly()\` that returns a distance. Then create a subclass \`Ostrich\` that overrides \`fly()\` by raising an exception. Demonstrate how this might violate LSP.`,
      initialCode: '',
      solution: `class Bird:
    def fly(self, distance):
        print(f"Flying {distance} meters")
        return distance

class Ostrich(Bird):
    def fly(self, distance):
        raise Exception("Ostrich cannot fly!")  # LSP violation

# Usage
def let_bird_fly(bird: Bird, distance):
    bird.fly(distance)  # Fails for Ostrich, breaking the assumption that Bird can fly
`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Explain in a short paragraph why forcing an Ostrich to behave like a Bird that can fly violates the principle\'s intended contract, referencing real code usage.`,
      initialCode: '',
      solution: `"""
The LSP implies a subclass should meet the expectations set by its superclass. 
If the code expects all 'Birds' to fly, substituting an 'Ostrich' that throws an exception breaks that expectation, 
disrupting any function relying on the Bird's 'fly()' behavior.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which statement best reflects the Liskov Substitution Principle?',
      options: [
        'Subclasses should override all methods of the superclass',
        'A subclass should be usable anywhere the parent class is expected, without breaking the system',
        'All classes must have the same methods as their parents, regardless of behavior',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. LSP doesn\'t demand overriding all methods, just maintaining correct behavior.',
        'Correct! This is the essence of LSP: no unexpected side effects when substituting a subclass.',
        'Incorrect. LSP focuses on behavior, not identical method sets or ignoring logic changes.'
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 2) Violation Examples
const lspViolationsData: LessonContent = {
  title: 'Violation Examples',
  content: `
LSP violations occur when a subclass changes the behavior so drastically that it no longer fits the parent\'s contract.

<h3>
Square vs. Rectangle
</h3>

This classic example: a rectangle has independent width/height, but a square\'s width and height are always equal. Substituting a square in place of a rectangle might break logic expecting independent dimension changes.

<h3>
Other Real-World Scenarios
</h3>

- Overriding a method to throw exceptions where the parent never would.  
- Changing return types or drastically altering results.  
- Subclass introducing constraints that the parent didn\'t have.
`,
  exercises: [
    {
      prompt: `Briefly code a Python 'Rectangle' with 'set_width()' and 'set_height()'. Then create 'Square' that overrides them. Show how using Square as a Rectangle can lead to inconsistent state.`,
      initialCode: '',
      solution: `class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def set_width(self, w):
        self.width = w

    def set_height(self, h):
        self.height = h

    def area(self):
        return self.width * self.height

class Square(Rectangle):
    def set_width(self, w):
        self.width = w
        self.height = w  # Forces height to match

    def set_height(self, h):
        self.width = h
        self.height = h

# Usage demonstration
def test_area(rect: Rectangle):
    rect.set_width(2)
    rect.set_height(3)
    print("Expected area = 6, got:", rect.area())

sq = Square(5, 5)
test_area(sq)  # Unexpected result, LSP violation
`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `In a short paragraph, explain how the above example can result in code that sets width and height expecting a rectangle, but ends up with a shape that doesn't behave as intended.`,
      initialCode: '',
      solution: `"""
Because 'Square' ties width and height together, the operation 'set_width(2); set_height(3)' results in both dimensions becoming 3. 
The code expects independent changes but gets a shape with the same dimension, yielding an area or behavior that differs from the rectangle contract.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'How does the Square-Rectangle example illustrate a common LSP violation?',
      options: [
        'Square extends Rectangle but breaks the contract by binding width and height together',
        'Rectangle and Square have the exact same behavior in all cases',
        'Subclasses should only add new methods, never override',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct! The rectangle\'s contract is that width and height can vary independently, which is violated by Square.',
        'Incorrect. That\'s the opposite of the problem; they differ significantly.',
        'Incorrect. Overriding is allowed, but it shouldn\'t break the parent\'s assumptions.'
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 3) Designing Subclasses
const designingSubclassesData: LessonContent = {
  title: 'Designing Subclasses',
  content: `
To avoid LSP violations, ensure a subclass\'s behavior aligns with the parent\'s expectations.

<h3>
Avoid Surprising Overrides
</h3>

Don\'t override a method in a way that breaks assumptions. If the parent method says “this always returns a positive value,” your override shouldn\'t return negative.

<h3>
Keep Contracts Consistent
</h3>

Document (or rely on docstrings) to clarify constraints. Subclasses must uphold these constraints—if the parent says a function never raises \`ValueError\`, the subclass shouldn\'t introduce it arbitrarily.

<h3>
Composition Over Inheritance
</h3>

If you can\'t honestly fulfill the parent\'s contract, consider using composition or an entirely separate class instead.
`,
  exercises: [
    {
      prompt: `Write a short snippet showing how you might document a parent class method's expected behavior in Python docstrings, so that subclasses can maintain that behavior (e.g., no exceptions).`,
      initialCode: '',
      solution: `"""
class Database:
    def connect(self):
        \"""
        Connects to the database.
        Guaranteed not to raise exceptions; returns True if success, False if fail.
        \"""
        return True

# Subclass must uphold: not raising exceptions unexpectedly.
class TestDatabase(Database):
    def connect(self):
        # Must not raise exceptions to respect parent's contract
        return False
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Explain in a paragraph why composition might be a safer alternative if your subclass drastically changes the parent's behavior, referencing the Square-Rectangle example.`,
      initialCode: '',
      solution: `"""
If the subclass can't maintain the parent's contract, composition is safer. 
For Square vs. Rectangle, instead of inheriting from Rectangle, Square could hold a Rectangle or dimensions internally, 
allowing specialized logic without conflicting parent assumptions. 
Thus, you avoid presenting 'Square' as a subtype when it fails to meet that specification.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following steps helps ensure LSP compliance when designing subclasses?',
      options: [
        'Subclasses should catch all exceptions silently',
        'Subclasses should maintain the same method contracts promised by the parent',
        'Subclasses must never override any methods',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Catching exceptions silently could hide errors and break expectations differently.',
        'Correct! Consistent method contracts keep the parent-child relationship valid.',
        'Incorrect. Overriding is allowed; it just must not violate the contract.'
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};


const lspLessons: Record<string, LessonContent> = {
  'lsp-definition': lspDefinitionData,
  'violations': lspViolationsData,
  'designing-subclasses': designingSubclassesData
}
export const lspLessonsTab: LessonsTab = {
  curriculum: lspCurriculum,
  lessons: lspLessons
}