import { Difficulty } from '@/common/commonConcept';
import {
  Curriculum,
  LessonContent,
  LessonsTab,
  PriorityLevel,
} from '@/common/commonLesson';

export const srpCurriculum: Curriculum = {
  title: 'SRP Curriculum',
  description:
    'Focuses on ensuring each class or module has one and only one reason to change.',
  sections: [
    {
      id: 1,
      title: 'SRP Overview',
      topics: [
        {
          id: 'srp-definition',
          title: 'Definition & Origin',
          description:
            'Explains what “one responsibility” means and highlights benefits of SRP.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'violations',
          title: 'Common Violations',
          description:
            'Signs that a class is doing too much, leading to brittle code.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 2,
      title: 'Practical Techniques',
      topics: [
        {
          id: 'refactoring-srp',
          title: 'Refactoring to SRP',
          description:
            'How to split a bloated class into multiple smaller, focused classes.',
          priority: PriorityLevel.Important,
        },
      ],
    },
  ],
};

// 1) Definition & Origin
const srpDefinitionData: LessonContent = {
  title: 'Definition & Origin',
  content: `
The Single Responsibility Principle (SRP) states: **A class should have only one reason to change.** 

<h3>
What Does “One Responsibility” Mean?
</h3>

It means focusing on a single, well-defined purpose. If multiple unrelated concerns are handled in one class, changes to one concern can break or complicate the other.

<h3>
Benefits of SRP
</h3>

- Easier Maintenance: Smaller classes are simpler to understand.  
- Reduced Coupling: Fewer side effects when making changes.  
- Enhanced Reusability: Classes that do one thing well can be reused elsewhere.
`,
  exercises: [
    {
      prompt: `Write a Python class that violates SRP by both handling database logic (e.g., saving user info) and sending emails (e.g., notifying user). Then describe how you might separate these concerns.`,
      initialCode: '',
      solution: `"""
class UserManager:
    def save_user_to_db(self, user):
        print(f"Saving {user} to database")
        # DB logic...
    
    def notify_user(self, user):
        print(f"Sending email to {user}")
        # Email logic...

# Refactoring: separate these into a DatabaseService and EmailService. 
# Then, a higher-level class can coordinate them instead of bundling both in one place.
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Explain in a paragraph why the concept of SRP originated from older design contexts (like mainframe systems) but remains relevant in modern Python microservices.`,
      initialCode: '',
      solution: `"""
SRP was first articulated in a time when code changes were risky and expensive. 
Keeping each component focused minimized errors. 
In modern microservices, small, targeted services and code modules remain vital for quick deployments and isolation of failures. 
Hence, SRP is still a cornerstone of maintainable design in Python and beyond.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which best describes the Single Responsibility Principle?',
      options: [
        'A class should have multiple responsibilities to increase reuse',
        'A class should have exactly one clear purpose, avoiding unrelated functionalities',
        'All classes must inherit from one central base class',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Multiple unrelated responsibilities violate SRP.',
        'Correct! SRP is about focusing each class on a single reason to change.',
        'Incorrect. SRP is unrelated to a requirement for a single base class.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 2) Common Violations
const srpViolationsData: LessonContent = {
  title: 'Common Violations',
  content: `
Classes often accumulate extra tasks over time, leading to violations of SRP. 

<h3>
Signs of Doing Too Much
</h3>

- The class name includes “and,” “manager,” or multiple domain concepts (e.g., UserOrderManager).  
- Frequent commits with unrelated changes in the same file.  
- Large method counts or unclear responsibilities.

<h3>
Why Is This Harmful?
</h3>

A change in one responsibility could break another. Testing also becomes harder if you must set up multiple unrelated domains in a single class.
`,
  exercises: [
    {
      prompt: `Give a Python example of a class named 'OrderAndShippingManager' that lumps order processing and shipping label printing. Then mention how you'd detect that it's doing too much.`,
      initialCode: '',
      solution: `"""
class OrderAndShippingManager:
    def process_order(self, order):
        # order logic
        pass
    
    def print_shipping_label(self, order):
        # shipping logic
        pass

# It's doing two distinct tasks: 
# 1) order processing 
# 2) shipping/label tasks
# The name '...And...' is often a giveaway that it violates SRP.
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Explain in a short paragraph how large classes with many responsibilities can hinder unit testing in Python, referencing typical setup and teardown complexities.`,
      initialCode: '',
      solution: `"""
If a class has multiple distinct concerns, its tests require setting up all dependencies for each concern. 
This leads to cumbersome test fixtures, increased flakiness, and slower test runs. 
Focusing each class on a single area of responsibility streamlines test setups and improves reliability.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which scenario indicates an SRP violation?',
      options: [
        'A class dedicated solely to calculating tax amounts',
        'A class that handles both user authentication and sending system notifications',
        'Two small classes each focusing on distinct tasks',
      ],
      correctAnswer: 1,
      explanations: [
        "Incorrect. That's a single, clear task.",
        'Correct! Authentication and notifications are unrelated concerns combined.',
        'Incorrect. Splitting tasks is usually aligned with SRP.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 3) Refactoring to SRP
const refactoringSrpData: LessonContent = {
  title: 'Refactoring to SRP',
  content: `
When a class does too much, **refactoring** means splitting its responsibilities into smaller, more focused classes.

<h3>
Practical Steps
</h3>

1. Identify each responsibility.  
2. Create new classes for those responsibilities.  
3. Update references to use the new classes.  
4. Test thoroughly to ensure functionality remains intact.

<h3>
Example Refactor
</h3>

\`\`\`python
# Before:
class AuthNotificationService:
    def authenticate_user(self, user):
        pass
    def send_email(self, user):
        pass

# After splitting:
class AuthService:
    def authenticate_user(self, user):
        pass

class EmailService:
    def send_email(self, user):
        pass
\`\`\`
`,
  exercises: [
    {
      prompt: `Take the 'OrderAndShippingManager' from earlier and split it into 'OrderProcessor' and 'ShippingService'. Provide minimal Python code to show the final structure.`,
      initialCode: '',
      solution: `"""
class OrderProcessor:
    def process_order(self, order):
        # order logic
        pass

class ShippingService:
    def print_shipping_label(self, order):
        # shipping label logic
        pass
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Discuss how to ensure you don't break existing code when performing this refactoring, focusing on transitional patterns like the 'Facade' pattern to provide a combined interface if needed.`,
      initialCode: '',
      solution: `"""
You can introduce a Facade or wrapper class that delegates to the new classes, 
preserving the old interface while gradually updating clients. 
This ensures existing code remains functional until you've fully migrated 
to the more granular components.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'Which step is crucial after refactoring a class into multiple SRP-compliant classes?',
      options: [
        'Deleting all unit tests to start fresh',
        'Updating references and thoroughly testing to confirm nothing is broken',
        'Combining them back into a single class',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. You typically keep existing tests, adapting them as needed.',
        'Correct! Ensuring references are updated and retested is key to a smooth refactoring.',
        'Incorrect. That would undo the SRP improvements.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const srpLessons: Record<string, LessonContent> = {
  'srp-definition': srpDefinitionData,
  violations: srpViolationsData,
  'refactoring-srp': refactoringSrpData,
};

export const srpLessonsTab: LessonsTab = {
  curriculum: srpCurriculum,
  lessons: srpLessons,
};
