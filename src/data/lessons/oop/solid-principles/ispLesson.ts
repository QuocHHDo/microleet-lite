import { Difficulty } from '@/common/commonConcept';
import {
  Curriculum,
  LessonContent,
  LessonsTab,
  PriorityLevel,
} from '@/common/commonLesson';

export const ispCurriculum: Curriculum = {
  title: 'ISP Curriculum',
  description:
    'Stay consistent with small, specialized interfaces to prevent implementing unneeded functionalities.',
  sections: [
    {
      id: 1,
      title: 'ISP Overview',
      topics: [
        {
          id: 'isp-definition2',
          title: 'Definition & Reasoning',
          description:
            'Ensuring no client should be forced to depend on methods it does not use.',
          priority: PriorityLevel.Essential,
        },
      ],
    },
  ],
};

const ispDefinition2Data: LessonContent = {
  title: 'Definition & Reasoning',
  content: `
The Interface Segregation Principle (ISP) states that **no client should be forced to implement methods it does not use**. 

<h3>
Why ISP?
</h3>

Bloated interfaces can burden implementers with irrelevant methods, increasing coupling and maintenance overhead. ISP encourages designing smaller, more focused interfaces, which in Python often means using multiple ABCs for different responsibilities.

<h3>
Simple Python Example
</h3>

\`\`\`python
from abc import ABC, abstractmethod

class PrinterInterface(ABC):
    @abstractmethod
    def print_document(self):
        pass

class ScannerInterface(ABC):
    @abstractmethod
    def scan_document(self):
        pass
\`\`\`

A multifunction device might implement both. A simple printer implements only the printing interface, not scanning.
`,
  exercises: [
    {
      prompt: `Given a single interface with methods print_document(), scan_document(), and fax_document(), split it into smaller ABCs so that classes only implement what they need.`,
      initialCode: '',
      solution: `"""
class PrinterInterface(ABC):
    @abstractmethod
    def print_document(self):
        pass

class ScannerInterface(ABC):
    @abstractmethod
    def scan_document(self):
        pass

class FaxInterface(ABC):
    @abstractmethod
    def fax_document(self):
        pass
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `In a short paragraph, explain how a class (like 'OldPrinter') that only prints avoids implementing scanning or faxing methods under the ISP approach.`,
      initialCode: '',
      solution: `"""
Under ISP, 'OldPrinter' implements only 'PrinterInterface' and provides print_document(). 
It doesn't need to handle scanning or faxing, which are separate interfaces. 
Hence, it isn't forced to implement irrelevant methods, preventing boilerplate or NotImplementedError stubs.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'What is a key sign that an interface might violate the ISP?',
      options: [
        'It has fewer than five methods',
        'Classes often implement placeholder or “NotImplementedError” stubs for unused methods',
        'It is defined in multiple files',
      ],
      correctAnswer: 1,
      explanations: [
        "Incorrect. Method count alone doesn't necessarily signal a violation.",
        'Correct! Stub methods indicate the interface forces unused methods on classes.',
        "Incorrect. Definition location doesn't inherently affect ISP compliance.",
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const ispLessons: Record<string, LessonContent> = {
  'isp-definition2': ispDefinition2Data,
};

export const ispLessonsTab: LessonsTab = {
  curriculum: ispCurriculum,
  lessons: ispLessons,
};
