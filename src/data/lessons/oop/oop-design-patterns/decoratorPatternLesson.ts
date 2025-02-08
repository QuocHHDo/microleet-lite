import { Difficulty } from '@/common/commonConcept';
import { Curriculum, LessonContent, LessonsTab, PriorityLevel } from '@/common/commonLesson';

export const decoratorPatternCurriculum: Curriculum = {
  title: 'Decorator Pattern Curriculum',
  description:
    'Attach additional responsibilities to an object dynamically without modifying its structure.',
  sections: [
    {
      id: 1,
      title: 'Key Concepts',
      topics: [
        {
          id: 'decorator-purpose',
          title: 'Purpose',
          description:
            'Enhance functionality at runtime via composition rather than inheritance.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'benefits-tradeoffs',
          title: 'Benefits & Trade-Offs',
          description:
            'Supports open-closed principle, but can lead to many small wrapper classes.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 2,
      title: 'Use Cases & Examples',
      topics: [
        {
          id: 'io-streams',
          title: 'I/O Streams Example',
          description:
            'Java/C# streams as classic Decorator usage (e.g., BufferedStream).',
          priority: PriorityLevel.Essential,
        },
      ],
    },
  ],
};

// 1) Purpose
const decoratorPurposeData: LessonContent = {
  title: 'Purpose',
  content: `
The **Decorator Pattern** lets you attach new responsibilities to an object dynamically. It\'s a flexible alternative to subclassing for extending functionality.

<h3>
Enhance Functionality at Runtime
</h3>

You wrap an original object in a decorator class that implements the same interface but adds behavior before or after delegating to the wrapped object.

<h3>
Composition, Not Inheritance
</h3>

Instead of creating subclasses for every new feature, decorators can be stacked or combined to add multiple behaviors without altering existing code.
`,
  exercises: [
    {
      prompt: `Write a Python example of a base "Notifier" class with a "send()" method, then create a "NotifierDecorator" that logs messages before sending. Show how you can layer multiple decorators.`,
      initialCode: '',
      solution: `"""
class Notifier:
    def send(self, msg):
        print(f"Sending: {msg}")

class NotifierDecorator(Notifier):
    def __init__(self, notifier):
        self.notifier = notifier

    def send(self, msg):
        print("Logging: about to send message.")
        self.notifier.send(msg)

# Layering multiple decorators
class EncryptionDecorator(NotifierDecorator):
    def send(self, msg):
        encrypted = f"<encrypted>{msg}</encrypted>"
        super().send(encrypted)

# Usage
basic_notifier = Notifier()
log_decorator = NotifierDecorator(basic_notifier)
encrypt_and_log = EncryptionDecorator(log_decorator)
encrypt_and_log.send("Hello!")  # logs, then encrypts, then sends
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `In a short paragraph, explain why decorators avoid modifying existing classes\' code, relating to the open-closed principle.`,
      initialCode: '',
      solution: `"""
Decorators wrap objects at runtime instead of changing their source code. 
Thus, you can extend or modify behavior without editing the original class, 
which remains 'closed' to modification but 'open' to extension through composition.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Why is the Decorator Pattern considered a more flexible alternative to subclassing?',
      options: [
        'It modifies the original class directly',
        'It allows adding functionality at runtime without altering the existing class hierarchy',
        'It enforces a single global instance of a class',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Decorators don\'t modify original classes directly; they wrap them.',
        'Correct! Decorators let you combine or stack behaviors dynamically.',
        'Incorrect. That\'s related to the Singleton pattern.'
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 2) Benefits & Trade-Offs
const decoratorBenefitsTradeoffsData: LessonContent = {
  title: 'Benefits & Trade-Offs',
  content: `
Decorators promote **open-closed** design, allowing you to add responsibilities without modifying existing code. However, they can lead to many small wrapper classes.

<h3>
Supports OCP
</h3>

Because you can layer decorators, you avoid changing the original code base each time you add a new feature.

<h3>
Trade-Off: Complexity
</h3>

Decorators may create stacks of wrapped objects, complicating debugging since behavior is spread across multiple classes. You might have to unwrap or trace multiple decorators.

<h3>
Example (Python)
</h3>

\`\`\`python
class BorderDecorator(WidgetDecorator):
    def draw(self):
        # draw border
        super().draw()
\`\`\`
`,
  exercises: [
    {
      prompt: `Give a code snippet illustrating multiple decorators stacked around a 'Widget' object in Python, e.g., 'ScrollDecorator(ShadowDecorator(widget))'.`,
      initialCode: '',
      solution: `"""
class Widget:
    def draw(self):
        print("Drawing base widget")

class WidgetDecorator(Widget):
    def __init__(self, widget):
        self.widget = widget

    def draw(self):
        self.widget.draw()

class ShadowDecorator(WidgetDecorator):
    def draw(self):
        print("Adding shadow...")
        super().draw()

class ScrollDecorator(WidgetDecorator):
    def draw(self):
        print("Adding scrollbars...")
        super().draw()

# Usage
base_widget = Widget()
decorated = ScrollDecorator(ShadowDecorator(base_widget))
decorated.draw()
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `In a paragraph, discuss how the abundance of small decorator classes can make the design more granular but also more complex to trace at runtime.`,
      initialCode: '',
      solution: `"""
Each decorator adds a single responsibility, which keeps individual classes simple. 
However, stacking many decorators means every operation flows through multiple layers, 
making debugging or understanding the final behavior more challenging, 
as you must check each decorator\'s contribution in turn.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'What is a main drawback of using many decorators?',
      options: [
        'They cannot be applied at runtime in Python',
        'They can lead to deep wrapping layers that complicate debugging',
        'They require a custom syntax in all languages',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Decorators can be applied at runtime in Python via composition.',
        'Correct! Multiple decorator layers can be confusing to trace.',
        'Incorrect. Decorator usage doesn\'t require special syntax beyond normal class usage.'
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 3) I/O Streams Example
const decoratorIoStreamsData: LessonContent = {
  title: 'I/O Streams Example',
  content: `
A classic usage is **I/O streams** in languages like Java or C#. You might wrap an input stream with buffering, compression, encryption, etc.

<h3>
Python Perspective
</h3>

While Python\'s I/O library is not strictly designed as a classic decorator, you can replicate this approach by wrapping file objects with buffering or compression logic.

<h3>
Example
</h3>

\`\`\`python
class FileStream:
    def read(self):
        pass

class BufferedStream:
    def __init__(self, stream):
        self.stream = stream

    def read(self):
        # add buffering logic, then delegate to self.stream.read()
        pass
\`\`\`
`,
  exercises: [
    {
      prompt: `Demonstrate a simple "BufferedReader" decorator in Python that wraps an existing "Reader" object, caching data in a buffer. Provide minimal code to convey the concept.`,
      initialCode: '',
      solution: `"""
class Reader:
    def read(self):
        return "data"

class BufferedReader:
    def __init__(self, reader):
        self.reader = reader
        self.buffer = None

    def read(self):
        if self.buffer is None:
            # Simulate reading
            self.buffer = self.reader.read()
        return self.buffer

# Usage
base_reader = Reader()
buffered = BufferedReader(base_reader)
print(buffered.read())  # "data"
print(buffered.read())  # Still "data", from buffer
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Explain how layering encryption on top of this buffered reader might exemplify a stack of decorators, each adding a responsibility.`,
      initialCode: '',
      solution: `"""
You could create an EncryptionReader that wraps any Reader, encrypting/decrypting data. 
If you wrap a BufferedReader with an EncryptionReader, you get both buffering and encryption. 
Each decorator handles its part, stacking seamlessly without modifying the original readers.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'How do I/O stream classes in many languages demonstrate the Decorator pattern?',
      options: [
        'They define global variables storing the stream data',
        'They wrap a base stream with additional behaviors like buffering, compression, etc.',
        'They override the main method in the base class automatically',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. That\'s not how typical I/O streams are implemented.',
        'Correct! Each wrapper adds new functionality around the underlying stream.',
        'Incorrect. Overriding the base class method is not the core concept here; it\'s about wrapping.'
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const decoratorPatternLessons: Record<string, LessonContent> = {
  'decorator-purpose': decoratorPurposeData,
  'benefits-tradeoffs': decoratorBenefitsTradeoffsData,
  'io-streams': decoratorIoStreamsData
}
export const decoratorPatternLessonsTab: LessonsTab = {
  curriculum: decoratorPatternCurriculum,
  lessons: decoratorPatternLessons
}