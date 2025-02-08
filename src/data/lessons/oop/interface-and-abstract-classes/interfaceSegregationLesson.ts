import { Difficulty } from '@/common/commonConcept';
import { Curriculum, LessonContent, LessonsTab, PriorityLevel } from '@/common/commonLesson';

export const interfaceSegregationCurriculum: Curriculum = {
  title: 'Interface Segregation Principle Curriculum',
  description:
    'A deeper look into designing small, specific interfaces to avoid forcing dependencies on unused methods.',
  sections: [
    {
      id: 1,
      title: 'ISP Basics',
      topics: [
        {
          id: 'isp-definition',
          title: 'Definition & Reasoning',
          description:
            'Ensuring that no client is forced to implement methods it doesn\'t use.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'benefits-examples',
          title: 'Benefits & Examples',
          description:
            'Real-life scenarios showing how segregated interfaces enhance maintainability.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 2,
      title: 'Practical Implementation',
      topics: [
        {
          id: 'splitting-interfaces',
          title: 'Splitting Interfaces',
          description:
            'How to refactor large interfaces into smaller, more coherent ones.',
          priority: PriorityLevel.Important,
        },
        {
          id: 'common-mistakes',
          title: 'Common Mistakes',
          description:
            'Creating too many tiny interfaces or misunderstanding interface separation.',
          priority: PriorityLevel.Important,
        },
      ],
    },
  ],
};

// 1) Definition & Reasoning
const ispDefinitionData: LessonContent = {
  title: 'Definition & Reasoning',
  content: `
The **Interface Segregation Principle (ISP)** states that no client should be forced to depend on methods it does not use. 

<h3>What Does This Mean?</h3>

If an interface becomes too large, classes that only need part of its functionality must still implement or ignore the rest. Smaller, more specific interfaces prevent bloated contracts.

<h3>Why ISP Matters</h3>

- Improves maintainability: changes to large interfaces can impact classes that only need a fraction of the methods.  
- Encourages cohesive interface design: each interface focuses on a distinct purpose.
`,
  exercises: [
    {
      prompt: `Write a short paragraph with a real-world analogy explaining ISP. For instance, a giant 'KitchenAppliance' interface might have many unused methods if you only care about microwaving.`,
      initialCode: '',
      solution: `"""
Analogy: A "KitchenAppliance" interface that includes blending, toasting, brewing, etc. 
A user who only needs a microwave function doesn't want to implement or even see methods for blending or toasting. 
Breaking it into smaller interfaces ("MicrowaveAppliance", "BlenderAppliance") ensures each device only cares about methods it actually uses.
"""`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: `Give a brief Python snippet showing a large interface (ABC) that violates ISP, and how you might refactor it into multiple smaller interfaces. Provide minimal code that conveys the concept.`,
      initialCode: '',
      solution: `"""
from abc import ABC, abstractmethod

# Violates ISP
class KitchenAppliance(ABC):
    @abstractmethod
    def blend(self): pass
    @abstractmethod
    def toast(self): pass
    @abstractmethod
    def microwave(self): pass

# Refactor into smaller interfaces
class BlenderInterface(ABC):
    @abstractmethod
    def blend(self): pass

class ToasterInterface(ABC):
    @abstractmethod
    def toast(self): pass

class MicrowaveInterface(ABC):
    @abstractmethod
    def microwave(self): pass
"""`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the core message of the Interface Segregation Principle?',
      options: [
        'Combine all functionalities into a single super-interface for convenience',
        'Ensure classes implement only the methods they actually need from an interface',
        'Mandate inheritance over composition',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. This violates ISP by creating a bloated interface.',
        'Correct! Smaller, more specific interfaces avoid forcing unwanted methods on implementers.',
        'Incorrect. ISP doesn\'t dictate inheritance or composition directly.'
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 2) Benefits & Examples
const benefitsExamplesData: LessonContent = {
  title: 'Benefits & Examples',
  content: `
By splitting large interfaces into more specific ones, you minimize dependencies, reduce change impact, and enhance clarity.

<h3>Common Benefits</h3>

- **Reduced Implementation Overhead**: Classes implement only relevant methods.  
- **Improved Readability**: Smaller interfaces are simpler to understand.  
- **Less Fragile Code**: Changes to one interface won't break classes that don't depend on it.

<h3>Practical Example</h3>

\`\`\`python
class ScannerInterface(ABC):
    @abstractmethod
    def scan(self):
        pass

class PrinterInterface(ABC):
    @abstractmethod
    def print_document(self):
        pass

# Instead of one big "MultiFunctionDevice" interface that lumps all methods together.
\`\`\`
`,
  exercises: [
    {
      prompt: `Imagine a single "MultiFunctionDevice" ABC that includes scanning, printing, faxing, emailing. Provide a short snippet showing how splitting it into separate ABCs (ScanInterface, PrintInterface, etc.) makes sense. Include a short reason why it's beneficial.`,
      initialCode: '',
      solution: `"""
# Single bloated interface
class MultiFunctionDevice(ABC):
    @abstractmethod
    def scan(self): pass

    @abstractmethod
    def print_document(self): pass

    @abstractmethod
    def fax(self): pass

    @abstractmethod
    def send_email(self): pass

# Split into smaller interfaces
class ScanInterface(ABC):
    @abstractmethod
    def scan(self): pass

class PrintInterface(ABC):
    @abstractmethod
    def print_document(self): pass

class FaxInterface(ABC):
    @abstractmethod
    def fax(self): pass

class EmailInterface(ABC):
    @abstractmethod
    def send_email(self): pass

# Benefit: A device that only prints doesn't need to implement scanning or emailing.
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Explain in a short paragraph how using small interfaces can reduce the impact of changes on a codebase, referencing Python code. E.g., updating a "FaxInterface" won't affect "PrinterInterface" implementers.`,
      initialCode: '',
      solution: `"""
When you separate responsibilities into smaller interfaces, altering one interface (like adding a method to FaxInterface) 
won't break classes that only implement PrintInterface. 
This isolation limits the scope of changes and reduces the chance of errors or forced updates in unrelated code.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a direct benefit of applying ISP?',
      options: [
        'Classes become larger and more monolithic',
        'Classes implement only the methods they need, reducing unnecessary overhead',
        'All functionality is grouped together in one place',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. ISP aims for smaller, cohesive interfaces.',
        'Correct! ISP ensures each class deals with relevant methods only.',
        'Incorrect. That\'s actually the opposite of ISP\'s goal.'
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 3) Splitting Interfaces
const splittingInterfacesData: LessonContent = {
  title: 'Splitting Interfaces',
  content: `
**Splitting interfaces** means refactoring a large interface into multiple smaller, more focused ones. 

<h3>When to Split?</h3>

- If many classes implement an interface but leave some methods unimplemented or raise "NotImplementedError."  
- If different groups of methods serve distinct use cases that rarely overlap.

<h3>Python Implementation</h3>

You can define multiple ABCs, each addressing a specific concern. Classes can implement multiple ABCs if they need those capabilities.

<h3>Step-by-Step Approach</h3>

1. Identify coherent method groups.  
2. Create new ABCs for each group.  
3. Update classes to implement the ABC(s) relevant to them.
`,
  exercises: [
    {
      prompt: `Refactor the following single ABC into two:
class Device(ABC):
    @abstractmethod
    def turn_on(self): pass

    @abstractmethod
    def connect_wifi(self): pass

    @abstractmethod
    def turn_off(self): pass

One for power methods, one for network. Show the resulting ABCs and explain in a comment why it's helpful.`,
      initialCode: '',
      solution: `"""
from abc import ABC, abstractmethod

# Original
# class Device(ABC):
#     @abstractmethod
#     def turn_on(self): pass
#     @abstractmethod
#     def connect_wifi(self): pass
#     @abstractmethod
#     def turn_off(self): pass

class PowerInterface(ABC):
    @abstractmethod
    def turn_on(self): pass

    @abstractmethod
    def turn_off(self): pass

class NetworkInterface(ABC):
    @abstractmethod
    def connect_wifi(self): pass

# Helpful because devices without network capability (like a basic lamp) 
# only implement PowerInterface, not forced to provide connect_wifi method.
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `In a paragraph, describe why partial or empty method implementations (like NotImplementedError) in Python can signal a need to split an interface.`,
      initialCode: '',
      solution: `"""
If classes implementing an interface often have to define placeholder methods that raise NotImplementedError, 
it suggests they don\'t genuinely need that functionality. 
This mismatch indicates the interface might be too broad, 
and splitting it would let each class implement only what's relevant.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'What is a common sign that an interface needs splitting under ISP guidelines?',
      options: [
        'All classes fully use every method without fail',
        'Classes must define placeholder methods (e.g., NotImplementedError) for features they don\'t actually need',
        'The interface has fewer than five methods',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. If all classes use all methods, the interface is probably cohesive.',
        'Correct! This indicates the interface is forcing unwanted methods on implementers.',
        'Incorrect. There is no strict method count threshold for splitting interfaces.'
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 4) Common Mistakes
const commonMistakesData: LessonContent = {
  title: 'Common Mistakes',
  content: `
While the Interface Segregation Principle encourages smaller interfaces, it\'s possible to go too far or misunderstand how to apply it.

<h3>Creating Too Many Tiny Interfaces</h3>

Splitting an interface for every single method can lead to **interface explosion**, making code more cumbersome. Each method might end up in a separate interface, creating overhead.

<h3>Misunderstanding Separation</h3>

Some related methods **should** stay together if they form a natural group. Over-segmentation can hurt cohesion and discoverability.

<h3>Example</h3>

A “PrinterInterface” might keep methods like \`print_document\` and \`cancel_print\` together rather than splitting them into separate interfaces.

`,
  exercises: [
    {
      prompt: `Write a brief snippet showing an "interface explosion": too many small interfaces. Then provide a single combined interface that\'s more reasonable.`,
      initialCode: '',
      solution: `"""
# Over-segmentation
class PrintInterface(ABC):
    @abstractmethod
    def print_document(self): pass

class CancelInterface(ABC):
    @abstractmethod
    def cancel_print(self): pass

# More reasonable combined:
class PrinterInterface(ABC):
    @abstractmethod
    def print_document(self): pass

    @abstractmethod
    def cancel_print(self): pass
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `In a paragraph, discuss how a balanced approach is key: large monolithic interfaces are bad, but so are overly granular micro-interfaces.`,
      initialCode: '',
      solution: `"""
Finding a middle ground is essential. 
Overly large interfaces force classes to implement methods they don't need, 
while an excessive number of micro-interfaces can clutter the design with barely distinct contracts. 
The goal is to group methods that logically belong together, 
splitting interfaces only when distinct responsibilities emerge.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'What is one possible drawback of creating too many tiny interfaces?',
      options: [
        'It solves all modularity issues automatically',
        'It can lead to confusion and overhead in managing numerous small interfaces',
        'It is always considered the best practice and has no drawbacks',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Over-segmentation can introduce problems rather than solving them all.',
        'Correct! Too many micro-interfaces create complexity rather than clarity.',
        'Incorrect. ISP does not advocate infinite segmentation; it seeks a balance.'
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const interfaceSegregationLessons: Record<string, LessonContent> = {
  'isp-definition': ispDefinitionData,
  'benefits-examples': benefitsExamplesData,
  'splitting-interfaces': splittingInterfacesData,
  'common-mistakes': commonMistakesData
}

export const interfaceSegregationLessonsTab: LessonsTab = {
  curriculum: interfaceSegregationCurriculum,
  lessons: interfaceSegregationLessons
}