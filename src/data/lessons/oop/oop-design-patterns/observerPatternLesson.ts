import { Difficulty } from '@/common/commonConcept';
import {
  Curriculum,
  LessonContent,
  LessonsTab,
  PriorityLevel,
} from '@/common/commonLesson';

export const observerPatternCurriculum: Curriculum = {
  title: 'Observer Pattern Curriculum',
  description:
    'Establish a one-to-many dependency so that when one object changes state, its dependents are notified.',
  sections: [
    {
      id: 1,
      title: 'Core Mechanics',
      topics: [
        {
          id: 'observer-subject',
          title: 'Subject & Observers',
          description:
            'Roles of the subject (publisher) and observers (subscribers).',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'push-vs-pull',
          title: 'Push vs. Pull Models',
          description:
            'Different ways the subject can deliver state changes to observers.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 2,
      title: 'Common Implementations',
      topics: [
        {
          id: 'event-listeners',
          title: 'Event Listener Systems',
          description:
            'GUI frameworks and messaging systems that follow the observer principle.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'reactive-streams',
          title: 'Reactive Streams',
          description:
            'Modern libraries like RxJS and Project Reactor that build on observer fundamentals.',
          priority: PriorityLevel.Beneficial,
        },
      ],
    },
  ],
};

// 1) Subject & Observers
const observerSubjectData: LessonContent = {
  title: 'Subject & Observers',
  content: `
In the **Observer Pattern**, the **Subject** (or publisher) maintains a list of **Observers** (subscribers). When the subject\'s state changes, it notifies all observers.

<h3>
Subject (Publisher)
</h3>

- Holds a list of observers  
- Provides methods to **attach** or **detach** observers  
- On changes, calls an update/notify method on each observer

<h3>
Observers (Subscribers)
</h3>

- Implement an **update** method  
- React to the subject\'s changes (e.g., refresh UI, log data, etc.)
`,
  exercises: [
    {
      prompt: `Implement a Python Subject class "NewsPublisher" that manages observers. Provide attach_observer(), detach_observer(), and notify_observers(news). Also define a simple Observer interface with update(news).`,
      initialCode: '',
      solution: `"""
class Observer:
    def update(self, news):
        pass

class NewsPublisher:
    def __init__(self):
        self.observers = []

    def attach_observer(self, observer: Observer):
        self.observers.append(observer)

    def detach_observer(self, observer: Observer):
        self.observers.remove(observer)

    def notify_observers(self, news):
        for obs in self.observers:
            obs.update(news)
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `In a short paragraph, explain how "push" notifications (sending the updated data) vs. "pull" (observers read state from subject) differ in typical observer usage.`,
      initialCode: '',
      solution: `"""
With a push model, the subject passes updated data (like 'news') directly to observers via the update call. 
In a pull model, the subject notifies observers of a change, and observers query the subject for details. 
Push is simpler for small changes, while pull can be more flexible if observers only fetch what they need.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which are the primary roles in the observer pattern?',
      options: [
        'Controller and Model',
        'Subject and Observers',
        'Producer and Consumer',
      ],
      correctAnswer: 1,
      explanations: [
        "Incorrect. That's more an MVC concept.",
        'Correct! Observer is about a subject (publisher) and multiple observers (subscribers).',
        'Incorrect. Producer/consumer can be relevant but is not the classic naming for observer roles.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 2) Push vs. Pull Models
const observerPushPullData: LessonContent = {
  title: 'Push vs. Pull Models',
  content: `
In **push** model, the subject sends updated data directly to observers. In **pull** model, the subject only notifies a change occurred, and observers pull data as needed.

<h3>
Push Model
</h3>

- Simpler for small or uniform updates  
- Observers might receive data they don\'t need  

<h3>
Pull Model
</h3>

- Observers decide what to fetch from the subject  
- More flexible, but requires a subject interface to expose the data
`,
  exercises: [
    {
      prompt: `Write a Python example of a "pull" observer. The "NewsPublisher" only calls "observer.update()", but the observer calls a method "get_latest_headline()" on publisher to retrieve data.`,
      initialCode: '',
      solution: `"""
class PullNewsPublisher:
    def __init__(self):
        self.observers = []
        self.latest_news = None

    def attach(self, obs):
        self.observers.append(obs)

    def set_news(self, news):
        self.latest_news = news
        self.notify()

    def notify(self):
        for obs in self.observers:
            obs.update(self)

    def get_latest_headline(self):
        return self.latest_news

class PullObserver:
    def update(self, publisher):
        headline = publisher.get_latest_headline()
        print(f"PullObserver got headline: {headline}")
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Explain in a short paragraph which model might be preferable for small updates vs. large data sets, referencing performance considerations.`,
      initialCode: '',
      solution: `"""
Push model is simpler for small updates, since the subject directly sends the needed data. 
But if you have large or varied data, pushing everything might be inefficient. 
A pull model can be more efficient if observers can selectively fetch only what they require, reducing unnecessary data transmission.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which statement describes the pull model?',
      options: [
        'The subject sends the updated data directly to each observer',
        'Observers receive a notification and then request any needed data from the subject',
        'The system loads all data at startup',
      ],
      correctAnswer: 1,
      explanations: [
        "Incorrect. That's the push model definition.",
        'Correct! Pull model is where observers query the subject after getting a change notification.',
        "Incorrect. That's unrelated to observer logic.",
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 3) Event Listener Systems
const observerEventListenersData: LessonContent = {
  title: 'Event Listener Systems',
  content: `
GUI frameworks and messaging systems often implement the observer pattern under the hood.

<h3>
GUI Listeners
</h3>

Widgets (subjects) maintain a list of event handlers (observers). When an event occurs, they notify handlers.

<h3>
Messaging Systems
</h3>

A publish-subscribe model is effectively observer: publishers post messages, subscribers get notified.

<h3>
Python Example
</h3>

In Python GUIs (like Tkinter, PyQt), you can bind event callbacks to widgets. Those callbacks function as observers reacting to widget state changes.
`,
  exercises: [
    {
      prompt: `Give a Python snippet using a simple callback-based observer for a "Button" class that calls "on_click" methods of its listeners when clicked.`,
      initialCode: '',
      solution: `"""
class Button:
    def __init__(self):
        self.listeners = []

    def add_listener(self, callback):
        self.listeners.append(callback)

    def click(self):
        # Notifies all callbacks (observers)
        for cb in self.listeners:
            cb()

# Usage
def on_button_click():
    print("Button was clicked!")

btn = Button()
btn.add_listener(on_button_click)
btn.click()
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `In a short paragraph, describe how event listener systems in Python (e.g., in GUI frameworks) reflect the observer pattern, focusing on callback functions as observers.`,
      initialCode: '',
      solution: `"""
GUI frameworks let you attach callback functions to widget events (like clicks). 
When the event occurs, the widget notifies those callbacks, akin to how a subject notifies observers. 
Each callback is effectively an observer responding to the event.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'How does a GUI button and its click event exemplify the observer pattern?',
      options: [
        'The button class is the subject, and any onClick callbacks are observers notified upon a click event',
        'All code is placed in a single function',
        'Observers must run in a separate process',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct! This matches the subject-observer roles perfectly.',
        "Incorrect. That's not related to observer structure.",
        'Incorrect. Observer pattern does not mandate separate processes.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 4) Reactive Streams
const observerReactiveStreamsData: LessonContent = {
  title: 'Reactive Streams',
  content: `
Modern **Reactive** libraries (like RxJS, Reactor) build on the observer concept, often adding features like backpressure, asynchronous processing, and transformations on the stream of events.

<h3>
Backpressure
</h3>

Allows an observer to signal it can\'t handle events as fast as they arrive.

<h3>
Asynchronous Observables
</h3>

Events flow over time; observers can attach transformations or filters to handle them in a pipeline (e.g., “map”, “filter”).

<h3>
Python Tools
</h3>

Libraries like **RxPy** implement similar patterns, letting you chain reactive operators on observables.
`,
  exercises: [
    {
      prompt: `Show a minimal RxPy snippet in Python that demonstrates a reactive "Observable" pushing data, and an "Observer" subscribing to it. Provide a short explanation.`,
      initialCode: '',
      solution: `"""
import rx
from rx import operators as ops

source = rx.from_([1,2,3])

# Observer
source.pipe(
    ops.map(lambda i: i * 10)
).subscribe(
    on_next=lambda x: print(f"Received {x}"),
    on_error=lambda e: print(f"Error {e}"),
    on_completed=lambda: print("Done")
)

# Explanation:
# The source (observable) emits 1,2,3. 
# We map each value by *10, then subscribe with a callback that prints results.
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `In a short paragraph, contrast traditional observer usage (subject/observer) with reactive streams, mentioning how backpressure and operators extend the basic observer idea.`,
      initialCode: '',
      solution: `"""
Traditional observer patterns notify observers when changes occur, but don't inherently manage event rates or transformations. 
Reactive streams extend this by adding operators for data processing in-flight and backpressure controls 
so observers aren't overwhelmed, making it a richer model for asynchronous and streaming scenarios.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'Which feature do reactive streams commonly add on top of the classical observer pattern?',
      options: [
        'No references to observers are allowed',
        'They run only in single-threaded environments',
        'They include operators for transforming data streams and managing backpressure',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Observers still exist, and references are used to manage them.',
        'Incorrect. Reactive systems are often multi-threaded or asynchronous.',
        'Correct! Reactive frameworks enhance observer with operators and backpressure support.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const observerPatternLessons: Record<string, LessonContent> = {
  'observer-subject': observerSubjectData,
  'push-vs-pull': observerPushPullData,
  'event-listeners': observerEventListenersData,
  'reactive-streams': observerReactiveStreamsData,
};
export const observerPatternLessonsTab: LessonsTab = {
  curriculum: observerPatternCurriculum,
  lessons: observerPatternLessons,
};
