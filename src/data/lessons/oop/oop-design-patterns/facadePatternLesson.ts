import { Difficulty } from '@/common/commonConcept';
import {
  Curriculum,
  LessonContent,
  LessonsTab,
  PriorityLevel,
} from '@/common/commonLesson';

export const facadePatternCurriculum: Curriculum = {
  title: 'Facade Pattern Curriculum',
  description:
    'Provide a simplified interface to a complex subsystem, making it easier to use.',
  sections: [
    {
      id: 1,
      title: 'Concept & Rationale',
      topics: [
        {
          id: 'facade-definition',
          title: 'Definition',
          description:
            'Why a single entry point to a complex library or subsystem is valuable.',
          priority: PriorityLevel.Essential,
        },
      ],
    },
    {
      id: 2,
      title: 'Implementation Nuances',
      topics: [
        {
          id: 'api-wrapping',
          title: 'Wrapping APIs',
          description:
            'Combining multiple function calls into a single, high-level method for the client.',
          priority: PriorityLevel.Important,
        },
      ],
    },
  ],
};

// 1) Definition
const facadeDefinitionData: LessonContent = {
  title: 'Definition',
  content: `
A **Facade** provides a unified interface to a complex subsystem, making it easier to use by offering a higher-level API.

<h3>
Why a Single Entry Point?
</h3>

Complex libraries or systems can have many classes and methods. A facade centralizes common tasks, so clients don\'t need deep knowledge of the subsystem\'s details.

<h3>
Value
</h3>

- Simplifies usage for most clients  
- Hides implementation changes behind a stable interface  
- Reduces coupling by directing calls through one “front door”
`,
  exercises: [
    {
      prompt: `Write a small Python facade for a hypothetical "VideoConversionSystem" consisting of multiple classes (Codec, BitrateOptimizer, AudioMixer). The facade should provide a single method "convert_video()" that orchestrates them.`,
      initialCode: '',
      solution: `"""
class Codec:
    def init_codec(self, video_path):
        print("Initializing codec for", video_path)

class BitrateOptimizer:
    def optimize(self, video_path):
        print("Optimizing bitrate for", video_path)

class AudioMixer:
    def mix(self, video_path):
        print("Mixing audio for", video_path)

# Facade
class VideoConverterFacade:
    def __init__(self):
        self.codec = Codec()
        self.bitrate_optimizer = BitrateOptimizer()
        self.audio_mixer = AudioMixer()

    def convert_video(self, video_path):
        self.codec.init_codec(video_path)
        self.bitrate_optimizer.optimize(video_path)
        self.audio_mixer.mix(video_path)
        print("Video conversion complete.")
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Explain in a paragraph how this facade hides subsystem complexity from clients who just call "convert_video()", referencing the "single entry point" concept.`,
      initialCode: '',
      solution: `"""
The facade wraps each of the subsystem classes (Codec, BitrateOptimizer, AudioMixer), 
exposing only a single convert_video() method. 
Clients no longer need to individually interact with these classes or understand their APIs. 
They simply call the facade, which orchestrates everything behind the scenes.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: "Which best summarizes the Facade pattern's benefit?",
      options: [
        'It modifies all subsystem classes to reduce their public interfaces',
        'It provides a simpler, higher-level interface that wraps complex subsystem operations',
        'It splits one large interface into multiple smaller ones to avoid forced dependencies',
      ],
      correctAnswer: 1,
      explanations: [
        "Incorrect. Facade doesn't usually modify subsystem classes themselves.",
        'Correct! A facade is a single entry point, simplifying interaction with a complex system.',
        "Incorrect. That's closer to the Interface Segregation Principle, not Facade.",
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 2) Wrapping APIs
const facadeApiWrappingData: LessonContent = {
  title: 'Wrapping APIs',
  content: `
A facade can wrap multiple function calls into a single high-level method, concealing complex steps from the client.

<h3>
API Wrapping in Python
</h3>

You can create a Python class that internally calls various modules or external libraries, presenting a single, simpler method externally.

<h3>
Benefits
</h3>

- **Reduced Learning Curve**: Clients only learn the facade\'s methods.  
- **Easier Maintenance**: Subsystem changes remain hidden as long as the facade\'s methods remain consistent.
`,
  exercises: [
    {
      prompt: `Write a Python facade that wraps two external APIs (e.g., PaymentAPI and ShippingAPI). Provide one method "process_order()" that calls both in the correct sequence.`,
      initialCode: '',
      solution: `"""
class PaymentAPI:
    def pay(self, amount):
        print(f"Paying \${amount}")

class ShippingAPI:
    def create_shipment(self, address):
        print(f"Shipping to {address}")

class OrderFacade:
    def __init__(self):
        self.payment_api = PaymentAPI()
        self.shipping_api = ShippingAPI()

    def process_order(self, amount, address):
        self.payment_api.pay(amount)
        self.shipping_api.create_shipment(address)
        print("Order processed.")
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `In a short paragraph, discuss how the facade approach might evolve if the underlying PaymentAPI or ShippingAPI changes, and why it protects client code from these modifications.`,
      initialCode: '',
      solution: `"""
If PaymentAPI or ShippingAPI alter their method signatures or add new steps, 
the facade can adapt internally without exposing these changes to the client. 
Clients continue calling process_order(), unaware of the behind-the-scenes modifications, 
thus insulating them from change.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'How does wrapping multiple subsystem calls in a single facade method benefit clients?',
      options: [
        'They must directly import and instantiate each subsystem class',
        'They see only the facade interface, without dealing with complex subsystem details',
        'They have to override the facade to access each subsystem separately',
      ],
      correctAnswer: 1,
      explanations: [
        "Incorrect. That's the opposite of what a facade is for.",
        'Correct! The facade coordinates subsystem calls, hiding complexity.',
        'Incorrect. Facade usage typically involves no overrides from the client side.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const facadePatternsLessons: Record<string, LessonContent> = {
  'facade-definition': facadeDefinitionData,
  'api-wrapping': facadeApiWrappingData,
};
export const facadePatternLessonsTab: LessonsTab = {
  curriculum: facadePatternCurriculum,
  lessons: facadePatternsLessons,
};
