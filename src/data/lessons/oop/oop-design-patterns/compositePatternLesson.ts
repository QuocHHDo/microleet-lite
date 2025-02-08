import { Difficulty } from '@/common/commonConcept';
import { Curriculum, LessonContent, LessonsTab, PriorityLevel } from '@/common/commonLesson';

export const compositePatternCurriculum: Curriculum = {
  title: 'Composite Pattern Curriculum',
  description:
    'Compose objects into tree structures to represent part-whole hierarchies, enabling uniform treatment of individual and composite objects.',
  sections: [
    {
      id: 1,
      title: 'Overview',
      topics: [
        {
          id: 'composite-structure',
          title: 'Structure',
          description:
            'How leaf objects and composite objects implement the same interface.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'hierarchical-data',
          title: 'Hierarchical Data Handling',
          description:
            'Tree-like data such as file systems, UI components, or organizational charts.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 2,
      title: 'Implementation',
      topics: [
        {
          id: 'implementation-details',
          title: 'Implementation Details',
          description:
            'Defining component, leaf, and composite classes with typical methods like add, remove, and display.',
          priority: PriorityLevel.Essential,
        },
      ],
    },
  ],
};

// 1) Structure
const compositeStructureData: LessonContent = {
  title: 'Structure',
  content: `
The **Composite Pattern** composes objects into tree structures to represent part-whole hierarchies. 

<h3>
How Leaf and Composite Objects Work
</h3>

- **Leaf** objects: End nodes of the tree (no children).
- **Composite** objects: Nodes that can contain leaves or other composites.

<h3>
Uniform Interface
</h3>

Both leaves and composites implement the same interface, so clients treat them uniformly. In Python, this might be an abstract class or simply a set of shared methods.

<h3>
Example
</h3>

\`\`\`python
class Component:
    def operation(self):
        pass

class Leaf(Component):
    def operation(self):
        print("Leaf operation")

class Composite(Component):
    def __init__(self):
        self.children = []

    def add(self, component):
        self.children.append(component)

    def operation(self):
        for child in self.children:
            child.operation()
\`\`\`
`,
  exercises: [
    {
      prompt: `Create a Python "FileSystemComponent" ABC with a method "show_info()". 
Then have "FileLeaf" represent a file and "DirectoryComposite" represent a directory (containing multiple files or directories). Show minimal usage.`,
      initialCode: '',
      solution: `from abc import ABC, abstractmethod

class FileSystemComponent(ABC):
    @abstractmethod
    def show_info(self, indent=0):
        pass

class FileLeaf(FileSystemComponent):
    def __init__(self, name):
        self.name = name

    def show_info(self, indent=0):
        print(" " * indent + f"File: {self.name}")

class DirectoryComposite(FileSystemComponent):
    def __init__(self, name):
        self.name = name
        self.children = []

    def add(self, component):
        self.children.append(component)

    def show_info(self, indent=0):
        print(" " * indent + f"Directory: {self.name}")
        for child in self.children:
            child.show_info(indent + 2)

# Usage
root = DirectoryComposite("root")
root.add(FileLeaf("file1.txt"))
subdir = DirectoryComposite("subdir")
subdir.add(FileLeaf("file2.txt"))
root.add(subdir)
root.show_info()
`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `In a short paragraph, explain how treating files and directories uniformly (via the same interface) simplifies code, especially for hierarchical or recursive operations.`,
      initialCode: '',
      solution: `"""
By sharing the same interface, you can write a single function (like show_info) 
that operates on all components without special-casing files vs. directories. 
This uniformity greatly simplifies handling nested structures, enabling recursion naturally.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which describes the essence of the Composite Pattern?',
      options: [
        'Storing global data in a singleton object',
        'Combining objects into tree structures where leaves and composites share the same interface',
        'Encrypting messages at runtime',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Composite is unrelated to global data or singletons.',
        'Correct! Composite organizes objects into a tree-like hierarchy with a uniform interface.',
        'Incorrect. Encryption is typically unrelated to composite structures.'
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 2) Hierarchical Data Handling
const hierarchicalDataData: LessonContent = {
  title: 'Hierarchical Data Handling',
  content: `
Composite is ideal for **tree-like** data: file systems, organizational charts, UI elements, etc.

<h3>
File Systems
</h3>

Directories contain files or other directories. Using a composite design treats both uniformly as “components.”

<h3>
UI Components
</h3>

A GUI might have containers (composites) and individual widgets (leaves). Clients can render or manage them the same way.

<h3>
Organizational Charts
</h3>

An employee might be a leaf, while a manager is a composite containing multiple employees.
`,
  exercises: [
    {
      prompt: `Give a Python code snippet illustrating a basic organizational chart using the Composite pattern: "Manager" as composite, "Employee" as leaf. Provide a method to display names with indentation to show hierarchy.`,
      initialCode: '',
      solution: `"""
class OrgComponent:
    def show_hierarchy(self, indent=0):
        raise NotImplementedError

class Employee(OrgComponent):
    def __init__(self, name):
        self.name = name

    def show_hierarchy(self, indent=0):
        print(" " * indent + self.name)

class Manager(OrgComponent):
    def __init__(self, name):
        self.name = name
        self.reports = []

    def add_report(self, component: OrgComponent):
        self.reports.append(component)

    def show_hierarchy(self, indent=0):
        print(" " * indent + f"Manager: {self.name}")
        for r in self.reports:
            r.show_hierarchy(indent + 2)
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Explain how the Composite pattern aids in hierarchical data traversal (e.g., recursively iterating sub-elements) without needing special checks for leaf vs. composite in user code.`,
      initialCode: '',
      solution: `"""
By defining a common interface, we can call show_hierarchy() (or similar) on any component, 
and if it's a composite, it delegates to its children. 
We don't need conditionals checking if something is a leaf or composite; 
the object handles traversal internally.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'What common data structures benefit from a composite-like approach?',
      options: [
        'Arrays of primitive values only',
        'Hierarchies like file systems, GUI containers, or organizational charts',
        'Strictly linear flows with no branching',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Arrays of primitives don\'t typically require a composite pattern for iteration.',
        'Correct! These are classic use cases for the Composite pattern.',
        'Incorrect. Composite is intended for tree or hierarchical structures, not linear flows.'
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 3) Implementation Details
const compositeImplementationData: LessonContent = {
  title: 'Implementation Details',
  content: `
When implementing the Composite pattern in Python:

<h3>
Defining the Component
</h3>

An abstract base class or at least a shared interface. Usually includes methods that both leaf and composite will implement (like \`operation\` or \`show_info\`).

<h3>
Leaf
</h3>

Implements the interface with no child management. Leaf objects handle the base behavior.

<h3>
Composite
</h3>

Maintains a collection of children, each of which is also a “component.” It implements the interface by delegating to children as needed, sometimes adding \`add\` or \`remove\` methods.
`,
  exercises: [
    {
      prompt: `Demonstrate the minimal methods a "Composite" in Python might expose: e.g., "add(component)" and "operation()". Use a dummy code snippet to show how it might delegate to child components.`,
      initialCode: '',
      solution: `"""
class Component:
    def operation(self):
        pass

class Composite(Component):
    def __init__(self):
        self.children = []

    def add(self, component):
        self.children.append(component)

    def operation(self):
        for child in self.children:
            child.operation()
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `In a paragraph, discuss how Python\'s dynamic typing can simplify the composite approach (no need for explicit typecasting), but also how it might mask errors if the added child object lacks the required interface.`,
      initialCode: '',
      solution: `"""
Python's duck typing means we can simply call child.operation() without worrying about a common parent class or interface. 
However, if a developer accidentally adds an object that doesn't have operation(), 
there will be a runtime error instead of a compile-time warning. 
Testing and code reviews become crucial to ensure correct usage of the composite structure.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'In Python\'s Composite implementation, what role does the composite class typically play?',
      options: [
        'It is the final leaf node',
        'It stores and manages child components, delegating operations to them',
        'It prevents any method calls from reaching the leaf nodes',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. The composite is not a leaf node; it holds children.',
        'Correct! The composite organizes and delegates to child components.',
        'Incorrect. Composite forward calls, not block them.'
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const compositePatternLessons: Record<string, LessonContent> = {
  'composite-structure': compositeStructureData,
  'hiearchical-data': hierarchicalDataData,
  'implementation-details': compositeImplementationData
}

export const compositePatternLessonsTab: LessonsTab = {
  curriculum: compositePatternCurriculum,
  lessons: compositePatternLessons
}