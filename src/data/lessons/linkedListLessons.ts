import { Difficulty } from '@/common/commonConcept';
import { Curriculum, LessonContent, LessonsTab } from '@/common/commonLesson';

const linkedListCurriculum: Curriculum = {
  title: 'Linked List Curriculum',
  description:
    'A comprehensive guide to mastering linked list concepts and algorithms',
  sections: [
    {
      id: 1,
      title: 'Linked List Fundamentals',
      topics: [
        {
          id: 'list-basics',
          title: 'Introduction to Linked Lists',
          description: 'Understanding basic concepts and types of linked lists',
        },
        {
          id: 'node-structure',
          title: 'Node Structure',
          description:
            'Creating and understanding node structure and references',
        },
        {
          id: 'list-vs-array',
          title: 'Linked Lists vs Arrays',
          description: 'Understanding differences and use cases for each',
        },
      ],
    },
    {
      id: 2,
      title: 'Basic Operations',
      topics: [
        {
          id: 'list-traversal',
          title: 'List Traversal',
          description: 'Methods for traversing linked lists',
        },
        {
          id: 'insertion',
          title: 'Insertion Operations',
          description: 'Adding nodes at beginning, end, and middle',
        },
        {
          id: 'deletion',
          title: 'Deletion Operations',
          description: 'Removing nodes from different positions',
        },
        {
          id: 'searching',
          title: 'Searching Elements',
          description: 'Finding elements in linked lists',
        },
      ],
    },
    {
      id: 3,
      title: 'Types of Linked Lists',
      topics: [
        {
          id: 'singly-linked',
          title: 'Singly Linked Lists',
          description: 'Working with singly linked lists',
        },
        {
          id: 'doubly-linked',
          title: 'Doubly Linked Lists',
          description: 'Understanding and implementing doubly linked lists',
        },
        {
          id: 'circular-linked',
          title: 'Circular Linked Lists',
          description: 'Circular list concepts and operations',
        },
      ],
    },
    {
      id: 4,
      title: 'Two-Pointer Techniques',
      topics: [
        {
          id: 'fast-slow',
          title: 'Fast and Slow Pointers',
          description: "Floyd's cycle detection and applications",
        },
        {
          id: 'multiple-pointers',
          title: 'Multiple Pointers',
          description: 'Using multiple pointers for various problems',
        },
        {
          id: 'distance-k',
          title: 'K Distance Apart',
          description: 'Maintaining pointers at fixed distances',
        },
      ],
    },
    {
      id: 5,
      title: 'Common Problems',
      topics: [
        {
          id: 'cycle-detection',
          title: 'Cycle Detection',
          description: 'Finding and handling cycles in linked lists',
        },
        {
          id: 'intersection',
          title: 'Finding Intersection',
          description: 'Detecting intersection points of two lists',
        },
        {
          id: 'palindrome',
          title: 'Palindrome Check',
          description: 'Verifying if a linked list is palindromic',
        },
      ],
    },
    {
      id: 6,
      title: 'List Manipulation',
      topics: [
        {
          id: 'list-reversal',
          title: 'List Reversal',
          description: 'Different approaches to reverse linked lists',
        },
        {
          id: 'list-sorting',
          title: 'Sorting Lists',
          description: 'Sorting algorithms for linked lists',
        },
        {
          id: 'merging-lists',
          title: 'Merging Lists',
          description: 'Combining multiple linked lists',
        },
      ],
    },
    {
      id: 7,
      title: 'Advanced Techniques',
      topics: [
        {
          id: 'recursive-operations',
          title: 'Recursive Approaches',
          description: 'Solving linked list problems recursively',
        },
        {
          id: 'in-place-operations',
          title: 'In-place Operations',
          description: 'Modifying lists without extra space',
        },
        {
          id: 'dummy-node',
          title: 'Dummy Node Pattern',
          description: 'Using dummy nodes for easier list manipulation',
        },
      ],
    },
    {
      id: 8,
      title: 'Complex Operations',
      topics: [
        {
          id: 'list-rotation',
          title: 'List Rotation',
          description: 'Rotating linked lists by K positions',
        },
        {
          id: 'list-partitioning',
          title: 'List Partitioning',
          description: 'Partitioning lists around a value',
        },
        {
          id: 'list-flattening',
          title: 'Flattening Lists',
          description: 'Working with nested or multi-level lists',
        },
      ],
    },
    {
      id: 9,
      title: 'Special List Types',
      topics: [
        {
          id: 'skip-lists',
          title: 'Skip Lists',
          description: 'Understanding and implementing skip lists',
        },
        {
          id: 'xor-lists',
          title: 'XOR Linked Lists',
          description: 'Memory-efficient doubly linked lists',
        },
        {
          id: 'unrolled-lists',
          title: 'Unrolled Linked Lists',
          description: 'Lists with array-based nodes',
        },
      ],
    },
    {
      id: 10,
      title: 'List-based Data Structures',
      topics: [
        {
          id: 'stack-implementation',
          title: 'Stack Implementation',
          description: 'Implementing stacks using linked lists',
        },
        {
          id: 'queue-implementation',
          title: 'Queue Implementation',
          description: 'Implementing queues using linked lists',
        },
        {
          id: 'lru-cache',
          title: 'LRU Cache',
          description: 'Implementing LRU cache with linked lists',
        },
      ],
    },
    {
      id: 11,
      title: 'Advanced Problems',
      topics: [
        {
          id: 'deep-copy',
          title: 'Deep Copy Problems',
          description: 'Creating deep copies of complex linked structures',
        },
        {
          id: 'reordering',
          title: 'List Reordering',
          description: 'Complex reordering and rearrangement problems',
        },
        {
          id: 'arithmetic',
          title: 'List-based Arithmetic',
          description: 'Performing arithmetic operations on number lists',
        },
      ],
    },
  ],
} as const;

const linkedListBasicsData: LessonContent = {
  title: 'Introduction to Linked Lists',
  content: `<p>
  A Linked List is a linear data structure where each element, called a node, contains a data part and a reference to the next node. Unlike arrays, linked lists do not store elements in contiguous memory locations.
  </p>`,
  codeExample: `# Basic Linked List Node and Structure in Python
  class Node:
      def __init__(self, data):
          self.data = data
          self.next = None
  
  # Creating nodes and linking them
  node1 = Node(1)
  node2 = Node(2)
  node1.next = node2  # Links node1 to node2
  
  # Traverse and print linked list
  current = node1
  while current:
      print(current.data)
      current = current.next`,
  exercises: [
    {
      prompt: 'Write a function to count the number of nodes in a linked list.',
      initialCode: `# Define count_nodes() function to traverse list and count nodes`,
      solution: `# Expected solution: iterates through list, counts nodes, and returns count`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'What are the two main components of a Linked List node?',
      options: [
        'Data and memory address',
        'Data and next node reference',
        'Data and a pointer to the previous node',
        'Only data',
      ],
      correctAnswer: 1,
      explanations: [
        'Correct. Each node in a linked list typically contains data and a reference to the next node.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const nodeStructureData: LessonContent = {
  title: 'Node Structure',
  content: `<p>
  The Node is the fundamental building block of a linked list. Each node consists of a data field and a pointer, or reference, that links it to the next node in the list.
  </p>`,
  codeExample: `# Node Class Implementation
  class Node:
      def __init__(self, data):
          self.data = data  # Data contained in the node
          self.next = None  # Reference to the next node
  
  # Example of creating nodes and linking
  head = Node(5)
  second = Node(10)
  head.next = second  # head now points to second node
  `,
  exercises: [
    {
      prompt:
        'Modify the Node class to include a reference to the previous node for a doubly linked list.',
      initialCode: `# Add previous reference to Node class for doubly linked list support`,
      solution: `# Expected solution has self.previous = None added to the Node class`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary role of the "next" attribute in a node?',
      options: [
        'To store data for the next element',
        'To link the current node to the next node',
        'To keep track of the last element',
        'To perform data operations',
      ],
      correctAnswer: 1,
      explanations: [
        'Correct. The "next" attribute in a node references the subsequent node in the list.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const listVsArrayData: LessonContent = {
  title: 'Linked Lists vs Arrays',
  content: `<p>
  Linked Lists and Arrays are both linear data structures, but they differ in terms of memory allocation, performance, and flexibility. Linked Lists provide dynamic memory usage, while arrays require contiguous memory.
  </p>`,
  codeExample: `# Comparing Linked List with Array
  # Array-based implementation
  array = [1, 2, 3, 4]
  array.append(5)  # Fast appending at the end
  
  # Linked List-based implementation
  class Node:
      def __init__(self, data):
          self.data = data
          self.next = None
  
  head = Node(1)
  current = head
  for i in range(2, 6):
      current.next = Node(i)
      current = current.next  # Slower than appending to an array`,
  exercises: [
    {
      prompt:
        'Create a linked list and compare its memory usage with an array of the same size.',
      initialCode: `# Implement memory comparison for array and linked list`,
      solution: `# Expected solution creates both structures and examines space allocation`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is an advantage of linked lists over arrays?',
      options: [
        'Constant-time access to any element',
        'Dynamic size without reallocating memory',
        'Uses less memory per element',
        'Supports direct access to elements',
      ],
      correctAnswer: 1,
      explanations: [
        'Correct. Linked lists dynamically adjust in size, which can reduce memory overhead in dynamic data applications.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const linkedListLessons: Record<string, LessonContent> = {
  'list-basics': linkedListBasicsData,
  'node-structure': nodeStructureData,
  'list-vs-array': listVsArrayData,
};
export const linkedListLessonsTab: LessonsTab = {
  curriculum: linkedListCurriculum,
  lessons: linkedListLessons,
};
