import { Difficulty } from '@/common/commonConcept';
import { Curriculum, LessonContent, LessonsTab, PriorityLevel } from '@/common/commonLesson';

export const adapterPatternCurriculum: Curriculum = {
  title: 'Adapter Pattern Curriculum',
  description:
    'Convert the interface of a class into another interface clients expect, facilitating compatibility.',
  sections: [
    {
      id: 1,
      title: 'Purpose & Motivation',
      topics: [
        {
          id: 'adapter-intro',
          title: 'Intro to Adapter',
          description:
            'Why adapters are useful for integrating legacy code or third-party libraries.',
          priority: PriorityLevel.Essential,
        },
      ],
    },
    {
      id: 2,
      title: 'Implementation',
      topics: [
        {
          id: 'wrapper-class',
          title: 'Wrapper Class Concept',
          description:
            'Wrapping an incompatible interface with one that is compatible.',
          priority: PriorityLevel.Important,
        },
      ],
    },
  ],
};

// 1) Intro to Adapter
const adapterIntroData: LessonContent = {
  title: 'Intro to Adapter',
  content: `
An **Adapter** helps integrate classes with incompatible interfaces by translating calls from the client\'s expected interface to the target\'s actual interface.

<h3>
Why Adapters?
</h3>

They are especially useful when working with legacy systems or third-party libraries whose interfaces cannot be changed. Adapters allow you to wrap a class with a new interface that the rest of your code can use seamlessly.

<h3>
Python Example
</h3>

\`\`\`python
class LegacyRectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def draw_rect(self):
        print(f"Drawing rectangle {self.width} x {self.height}")

class IShape:
    def draw_shape(self):
        raise NotImplementedError

class RectangleAdapter(IShape):
    def __init__(self, legacy_rectangle: LegacyRectangle):
        self.legacy_rectangle = legacy_rectangle

    def draw_shape(self):
        # Translate to the method expected by IShape
        self.legacy_rectangle.draw_rect()
\`\`\`
`,
  exercises: [
    {
      prompt: `Create an adapter in Python for a hypothetical \`OldPaymentAPI\` that has a method \`process_payment(amount)\`. The new interface, \`NewPaymentInterface\`, expects a method \`pay(amount)\`. Show how the adapter wraps \`OldPaymentAPI\`.`,
      initialCode: '',
      solution: `"""
class OldPaymentAPI:
    def process_payment(self, amount):
        print(f"Old API processing {amount}")

class NewPaymentInterface:
    def pay(self, amount):
        raise NotImplementedError

class PaymentAdapter(NewPaymentInterface):
    def __init__(self, old_api: OldPaymentAPI):
        self.old_api = old_api

    def pay(self, amount):
        self.old_api.process_payment(amount)

# Usage
old_api = OldPaymentAPI()
adapter = PaymentAdapter(old_api)
adapter.pay(100)  # Translates to old_api.process_payment(100)
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Explain in a paragraph how adapters differ from wrappers used for decoration (Decorator Pattern), focusing on interface compatibility vs. additional behavior.`,
      initialCode: '',
      solution: `"""
In the Adapter Pattern, the primary goal is to make two incompatible interfaces work together by translating calls from the expected interface to the existing one. 
In contrast, the Decorator Pattern focuses on adding or extending functionality at runtime without changing the interface itself. 
Adapters solve mismatch issues, whereas decorators augment behavior.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which statement best describes the Adapter Pattern\'s purpose?',
      options: [
        'To modify the internal logic of an existing class',
        'To provide a new interface for a class whose original interface is incompatible with the current system',
        'To encrypt and decrypt data at runtime',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Adapter does not alter internal logic; it wraps it.',
        'Correct! Adapters wrap existing classes, translating calls to a new interface.',
        'Incorrect. Encryption can be done with other patterns (e.g., decorator), not typically adapter.'
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 2) Wrapper Class Concept
const wrapperClassData: LessonContent = {
  title: 'Wrapper Class Concept',
  content: `
The Adapter Pattern is often called a **wrapper** because it wraps an existing class to convert its interface. 

<h3>
Wrapping an Incompatible Interface
</h3>

You create a class (the adapter) that holds a reference to the original class (the adaptee). Calls come into the adapter\'s methods, which delegate or translate them to the adaptee\'s methods.

<h3>
Pythonic Implementation
</h3>

In Python, the adapter is straightforward: just store the adaptee as a field and provide the needed interface. Because Python is dynamically typed, you often only need to implement the methods the client expects, calling into the adaptee.

<h3>
Example
</h3>

\`\`\`python
class ModernClient:
    def do_stuff(self, shape):
        shape.draw_shape()

# shape could be a RectangleAdapter, CircleAdapter, etc., 
# each wrapping a legacy or incompatible shape object.
\`\`\`
`,
  exercises: [
    {
      prompt: `Construct a "wrapper class" in Python that adapts a \`LegacyAudioPlayer\` with a method \`play_file(filename)\` into a new interface "IAudioPlayer" that requires "play(track)". Provide minimal code.`,
      initialCode: '',
      solution: `"""
class LegacyAudioPlayer:
    def play_file(self, filename):
        print(f"Playing {filename}")

class IAudioPlayer:
    def play(self, track):
        raise NotImplementedError

class AudioPlayerAdapter(IAudioPlayer):
    def __init__(self, legacy_player: LegacyAudioPlayer):
        self.legacy_player = legacy_player

    def play(self, track):
        # Just translate track to filename
        self.legacy_player.play_file(track)
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Explain in a paragraph why a wrapper-based adapter approach in Python might be simpler than in strongly typed languages, referencing Python\'s dynamic nature.`,
      initialCode: '',
      solution: `"""
Because Python doesn't require explicit type declarations, you don't need to define rigid interfaces or cast types. 
You simply implement the methods the client expects, storing the legacy object and calling its methods. 
This flexibility often reduces boilerplate compared to strongly typed languages.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Why is a wrapper class used in the Adapter Pattern?',
      options: [
        'To encrypt all data in transit',
        'To encapsulate an incompatible interface and expose a compatible one',
        'To store global variables',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. That\'s more related to security or the Decorator Pattern for encryption.',
        'Correct! Wrapper classes convert existing interfaces to match the desired new interface.',
        'Incorrect. Wrappers are not about global state management.'
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const adapterPatternLessons: Record<string, LessonContent> = {
  'adapter-intro': adapterIntroData,
  'wrapper-class': wrapperClassData

}
export const adapterPatternLessonsTab: LessonsTab = {
  curriculum: adapterPatternCurriculum,
  lessons: adapterPatternLessons 
}
