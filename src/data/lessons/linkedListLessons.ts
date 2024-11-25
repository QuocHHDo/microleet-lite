import { Difficulty } from '@/common/commonConcept';
import { Curriculum, LessonContent, LessonsTab, PriorityLevel } from '@/common/commonLesson';

const linkedListCurriculum: Curriculum = {
  title: 'Linked List Curriculum',
  description: 'A comprehensive guide to mastering linked list concepts and algorithms for technical interviews',
  sections: [
    {
      id: 1,
      title: 'Linked List Fundamentals',
      topics: [
        {
          id: 'list-basics',
          title: 'Introduction to Linked Lists',
          description: 'Understanding basic concepts and types of linked lists',
          priority: PriorityLevel.Essential
        },
        {
          id: 'node-structure',
          title: 'Node Structure',
          description: 'Creating and understanding node structure and references',
          priority: PriorityLevel.Essential
        },
        {
          id: 'list-vs-array',
          title: 'Linked Lists vs Arrays',
          description: 'Understanding differences, time complexities, and use cases for each',
          priority: PriorityLevel.Essential
        }
      ]
    },
    {
      id: 2,
      title: 'Basic Operations',
      topics: [
        {
          id: 'list-traversal',
          title: 'List Traversal',
          description: 'Methods for traversing linked lists, including edge cases',
          priority: PriorityLevel.Essential
        },
        {
          id: 'insertion',
          title: 'Insertion Operations',
          description: 'Adding nodes at beginning, end, and middle with time complexity analysis',
          priority: PriorityLevel.Essential
        },
        {
          id: 'deletion',
          title: 'Deletion Operations',
          description: 'Removing nodes from different positions, handling edge cases',
          priority: PriorityLevel.Essential
        },
        {
          id: 'searching',
          title: 'Searching Elements',
          description: 'Finding elements and implementing efficient search strategies',
          priority: PriorityLevel.Essential
        }
      ]
    },
    {
      id: 3,
      title: 'Types of Linked Lists',
      topics: [
        {
          id: 'singly-linked',
          title: 'Singly Linked Lists',
          description: 'Working with singly linked lists and their applications',
          priority: PriorityLevel.Essential
        },
        {
          id: 'doubly-linked',
          title: 'Doubly Linked Lists',
          description: 'Understanding and implementing doubly linked lists',
          priority: PriorityLevel.Important
        },
        {
          id: 'circular-linked',
          title: 'Circular Linked Lists',
          description: 'Circular list concepts and operations',
          priority: PriorityLevel.Beneficial
        }
      ]
    },
    {
      id: 4,
      title: 'Two-Pointer Techniques',
      topics: [
        {
          id: 'fast-slow',
          title: 'Fast and Slow Pointers',
          description: "Floyd's cycle detection and applications",
          priority: PriorityLevel.Essential
        },
        {
          id: 'multiple-pointers',
          title: 'Multiple Pointers',
          description: 'Using multiple pointers for various problems',
          priority: PriorityLevel.Important
        },
        {
          id: 'distance-k',
          title: 'K Distance Apart',
          description: 'Maintaining pointers at fixed distances',
          priority: PriorityLevel.Beneficial
        }
      ]
    },
    {
      id: 5,
      title: 'Common Interview Problems',
      topics: [
        {
          id: 'cycle-detection',
          title: 'Cycle Detection',
          description: 'Finding and handling cycles in linked lists',
          priority: PriorityLevel.Essential
        },
        {
          id: 'intersection',
          title: 'Finding Intersection',
          description: 'Detecting intersection points of two lists',
          priority: PriorityLevel.Important
        },
        {
          id: 'palindrome',
          title: 'Palindrome Check',
          description: 'Verifying if a linked list is palindromic',
          priority: PriorityLevel.Important
        }
      ]
    },
    {
      id: 6,
      title: 'List Manipulation',
      topics: [
        {
          id: 'list-reversal',
          title: 'List Reversal',
          description: 'Different approaches to reverse linked lists',
          priority: PriorityLevel.Essential
        },
        {
          id: 'list-sorting',
          title: 'Sorting Lists',
          description: 'Sorting algorithms for linked lists, especially merge sort',
          priority: PriorityLevel.Important
        },
        {
          id: 'merging-lists',
          title: 'Merging Lists',
          description: 'Combining multiple linked lists, including K-way merge',
          priority: PriorityLevel.Important
        }
      ]
    },
    {
      id: 7,
      title: 'Advanced Techniques',
      topics: [
        {
          id: 'recursive-operations',
          title: 'Recursive Approaches',
          description: 'Solving linked list problems recursively',
          priority: PriorityLevel.Important
        },
        {
          id: 'in-place-operations',
          title: 'In-place Operations',
          description: 'Modifying lists without extra space',
          priority: PriorityLevel.Important
        },
        {
          id: 'dummy-node',
          title: 'Dummy Node Pattern',
          description: 'Using dummy nodes for easier list manipulation',
          priority: PriorityLevel.Important
        }
      ]
    },
    {
      id: 8,
      title: 'Complex Operations',
      topics: [
        {
          id: 'list-rotation',
          title: 'List Rotation',
          description: 'Rotating linked lists by K positions',
          priority: PriorityLevel.Beneficial
        },
        {
          id: 'list-partitioning',
          title: 'List Partitioning',
          description: 'Partitioning lists around a value',
          priority: PriorityLevel.Beneficial
        },
        {
          id: 'list-flattening',
          title: 'Flattening Lists',
          description: 'Working with nested or multi-level lists',
          priority: PriorityLevel.Beneficial
        }
      ]
    },
    {
      id: 9,
      title: 'List-based Data Structures',
      topics: [
        {
          id: 'stack-implementation',
          title: 'Stack Implementation',
          description: 'Implementing stacks using linked lists',
          priority: PriorityLevel.Important
        },
        {
          id: 'queue-implementation',
          title: 'Queue Implementation',
          description: 'Implementing queues using linked lists',
          priority: PriorityLevel.Important
        },
        {
          id: 'lru-cache',
          title: 'LRU Cache',
          description: 'Implementing LRU cache with linked lists',
          priority: PriorityLevel.Beneficial
        }
      ]
    }
  ]
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

const listTraversalData: LessonContent = {
  title: 'List Traversal',
  content: `<p>
List traversal is a fundamental operation in linked lists, allowing you to visit each node in the list. 
There are several methods to traverse a linked list, including iterative and recursive approaches.
</p>

<ul>
<li><strong>Iterative traversal:</strong> Use a loop to iterate through the list, updating the current node until the end is reached.</li>
<li><strong>Recursive traversal:</strong> Use a recursive function to visit each node, passing the next node to the function until the end is reached.</li>
</ul>`,
  codeExample: `# Iterative traversal
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def traverse(self):
        current = self.head
        while current:
            print(current.data, end=' ')
            current = current.next
        print()

# Recursive traversal
def traverse_recursive(node):
    if node is None:
        return
    print(node.data, end=' ')
    traverse_recursive(node.next)

# Example usage
linked_list = LinkedList()
linked_list.head = Node(1)
linked_list.head.next = Node(2)
linked_list.head.next.next = Node(3)

linked_list.traverse()  # Output: 1 2 3
traverse_recursive(linked_list.head)  # Output: 1 2 3`,
  exercises: [
    {
      prompt:
        'Create a linked list with three nodes and traverse it using an iterative approach.',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def traverse(self):
        current = self.head
        while current:
            print(current.data, end=' ')
            current = current.next
        print()

linked_list = LinkedList()
linked_list.head = Node(1)
linked_list.head.next = Node(2)
linked_list.head.next.next = Node(3)

linked_list.traverse()`,
      solution: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def traverse(self):
        current = self.head
        while current:
            print(current.data, end=' ')
            current = current.next
        print()

linked_list = LinkedList()
linked_list.head = Node(1)
linked_list.head.next = Node(2)
linked_list.head.next.next = Node(3)

linked_list.traverse()`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a linked list with three nodes and traverse it using a recursive approach.',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

def traverse_recursive(node):
    if node is None:
        return
    print(node.data, end=' ')
    traverse_recursive(node.next)

linked_list = LinkedList()
linked_list.head = Node(1)
linked_list.head.next = Node(2)
linked_list.head.next.next = Node(3)

traverse_recursive(linked_list.head)`,
      solution: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

def traverse_recursive(node):
    if node is None:
        return
    print(node.data, end=' ')
    traverse_recursive(node.next)

linked_list = LinkedList()
linked_list.head = Node(1)
linked_list.head.next = Node(2)
linked_list.head.next.next = Node(3)

traverse_recursive(linked_list.head)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to traverse a linked list iteratively?',
      options: [
        'Using a loop to iterate through the list, updating the current node until the end is reached',
        'Using a recursive function to visit each node, passing the next node to the function until the end is reached',
        'Using a stack to push and pop nodes',
        'None of the above',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. Iterative traversal uses a loop to iterate through the list.',
        'This is incorrect. This describes recursive traversal.',
        'This is incorrect. Stacks are not typically used for iterative traversal.',
        'This is incorrect. The correct answer is iterative traversal using a loop.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following is the correct way to traverse a linked list recursively?',
      options: [
        'Using a loop to iterate through the list, updating the current node until the end is reached',
        'Using a recursive function to visit each node, passing the next node to the function until the end is reached',
        'Using a stack to push and pop nodes',
        'None of the above',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. This describes iterative traversal.',
        'This is correct. Recursive traversal uses a recursive function to visit each node.',
        'This is incorrect. Stacks are not typically used for recursive traversal.',
        'This is incorrect. The correct answer is recursive traversal using a recursive function.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const insertionData: LessonContent = {
  title: 'Insertion Operations',
  content: `<p>
Insertion operations in linked lists involve adding new nodes at different positions: beginning, end, and middle. 
Each insertion operation has its own approach and complexity.
</p>

<ul>
<li><strong>Insert at the beginning:</strong> Create a new node and make it the new head of the list.</li>
<li><strong>Insert at the end:</strong> Traverse the list to find the last node and append the new node.</li>
<li><strong>Insert at the middle:</strong> Traverse the list to find the desired position and insert the new node.</li>
</ul>`,
  codeExample: `# Insertion operations
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def insert_at_beginning(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def insert_at_end(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            return
        last = self.head
        while last.next:
            last = last.next
        last.next = new_node

    def insert_at_middle(self, middle_node, data):
        if middle_node is None:
            print("Middle node is not found")
            return
        new_node = Node(data)
        new_node.next = middle_node.next
        middle_node.next = new_node

# Example usage
linked_list = LinkedList()
linked_list.insert_at_beginning(1)
linked_list.insert_at_end(3)
linked_list.insert_at_middle(linked_list.head, 2)

current = linked_list.head
while current:
    print(current.data, end=' ')
    current = current.next
# Output: 1 2 3`,
  exercises: [
    {
      prompt:
        'Create a linked list and insert a node at the beginning. Print the list to verify the insertion.',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def insert_at_beginning(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

linked_list = LinkedList()
linked_list.insert_at_beginning(1)

current = linked_list.head
while current:
    print(current.data, end=' ')
    current = current.next
# Output: 1`,
      solution: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def insert_at_beginning(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

linked_list = LinkedList()
linked_list.insert_at_beginning(1)

current = linked_list.head
while current:
    print(current.data, end=' ')
    current = current.next
# Output: 1`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a linked list and insert a node at the end. Print the list to verify the insertion.',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def insert_at_end(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            return
        last = self.head
        while last.next:
            last = last.next
        last.next = new_node

linked_list = LinkedList()
linked_list.insert_at_end(1)

current = linked_list.head
while current:
    print(current.data, end=' ')
    current = current.next
# Output: 1`,
      solution: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def insert_at_end(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            return
        last = self.head
        while last.next:
            last = last.next
        last.next = new_node

linked_list = LinkedList()
linked_list.insert_at_end(1)

current = linked_list.head
while current:
    print(current.data, end=' ')
    current = current.next
# Output: 1`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to insert a node at the beginning of a linked list?',
      options: [
        'Create a new node and make it the new head of the list',
        'Traverse the list to find the last node and append the new node',
        'Traverse the list to find the desired position and insert the new node',
        'None of the above',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. Inserting at the beginning involves creating a new node and making it the new head.',
        'This is incorrect. This describes inserting at the end.',
        'This is incorrect. This describes inserting at the middle.',
        'This is incorrect. The correct answer is inserting at the beginning.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following is the correct way to insert a node at the end of a linked list?',
      options: [
        'Create a new node and make it the new head of the list',
        'Traverse the list to find the last node and append the new node',
        'Traverse the list to find the desired position and insert the new node',
        'None of the above',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. This describes inserting at the beginning.',
        'This is correct. Inserting at the end involves traversing the list to find the last node and appending the new node.',
        'This is incorrect. This describes inserting at the middle.',
        'This is incorrect. The correct answer is inserting at the end.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const deletionData: LessonContent = {
  title: 'Deletion Operations',
  content: `<p>
Deletion operations in linked lists involve removing nodes from different positions: beginning, end, and middle. 
Each deletion operation has its own approach and complexity.
</p>

<ul>
<li><strong>Delete at the beginning:</strong> Remove the head node and update the head to the next node.</li>
<li><strong>Delete at the end:</strong> Traverse the list to find the last node and remove it.</li>
<li><strong>Delete at the middle:</strong> Traverse the list to find the desired position and remove the node.</li>
</ul>`,
  codeExample: `# Deletion operations
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def delete_at_beginning(self):
        if self.head is None:
            return
        self.head = self.head.next

    def delete_at_end(self):
        if self.head is None:
            return
        if self.head.next is None:
            self.head = None
            return
        second_last = self.head
        while second_last.next.next:
            second_last = second_last.next
        second_last.next = None

    def delete_at_middle(self, key):
        if self.head is None:
            return
        if self.head.data == key:
            self.head = self.head.next
            return
        current = self.head
        while current.next and current.next.data != key:
            current = current.next
        if current.next is None:
            return
        current.next = current.next.next

# Example usage
linked_list = LinkedList()
linked_list.head = Node(1)
linked_list.head.next = Node(2)
linked_list.head.next.next = Node(3)

linked_list.delete_at_beginning()
linked_list.delete_at_end()
linked_list.delete_at_middle(2)

current = linked_list.head
while current:
    print(current.data, end=' ')
    current = current.next
# Output: 2`,
  exercises: [
    {
      prompt:
        'Create a linked list and delete a node at the beginning. Print the list to verify the deletion.',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def delete_at_beginning(self):
        if self.head is None:
            return
        self.head = self.head.next

linked_list = LinkedList()
linked_list.head = Node(1)
linked_list.head.next = Node(2)
linked_list.head.next.next = Node(3)

linked_list.delete_at_beginning()

current = linked_list.head
while current:
    print(current.data, end=' ')
    current = current.next
# Output: 2 3`,
      solution: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def delete_at_beginning(self):
        if self.head is None:
            return
        self.head = self.head.next

linked_list = LinkedList()
linked_list.head = Node(1)
linked_list.head.next = Node(2)
linked_list.head.next.next = Node(3)

linked_list.delete_at_beginning()

current = linked_list.head
while current:
    print(current.data, end=' ')
    current = current.next
# Output: 2 3`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a linked list and delete a node at the end. Print the list to verify the deletion.',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def delete_at_end(self):
        if self.head is None:
            return
        if self.head.next is None:
            self.head = None
            return
        second_last = self.head
        while second_last.next.next:
            second_last = second_last.next
        second_last.next = None

linked_list = LinkedList()
linked_list.head = Node(1)
linked_list.head.next = Node(2)
linked_list.head.next.next = Node(3)

linked_list.delete_at_end()

current = linked_list.head
while current:
    print(current.data, end=' ')
    current = current.next
# Output: 1 2`,
      solution: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def delete_at_end(self):
        if self.head is None:
            return
        if self.head.next is None:
            self.head = None
            return
        second_last = self.head
        while second_last.next.next:
            second_last = second_last.next
        second_last.next = None

linked_list = LinkedList()
linked_list.head = Node(1)
linked_list.head.next = Node(2)
linked_list.head.next.next = Node(3)

linked_list.delete_at_end()

current = linked_list.head
while current:
    print(current.data, end=' ')
    current = current.next
# Output: 1 2`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to delete a node at the beginning of a linked list?',
      options: [
        'Remove the head node and update the head to the next node',
        'Traverse the list to find the last node and remove it',
        'Traverse the list to find the desired position and remove the node',
        'None of the above',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. Deleting at the beginning involves removing the head node and updating the head to the next node.',
        'This is incorrect. This describes deleting at the end.',
        'This is incorrect. This describes deleting at the middle.',
        'This is incorrect. The correct answer is deleting at the beginning.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following is the correct way to delete a node at the end of a linked list?',
      options: [
        'Remove the head node and update the head to the next node',
        'Traverse the list to find the last node and remove it',
        'Traverse the list to find the desired position and remove the node',
        'None of the above',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. This describes deleting at the beginning.',
        'This is correct. Deleting at the end involves traversing the list to find the last node and removing it.',
        'This is incorrect. This describes deleting at the middle.',
        'This is incorrect. The correct answer is deleting at the end.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const searchingData: LessonContent = {
  title: 'Searching Elements',
  content: `<p>
Searching elements in linked lists involves finding a specific node based on its data. 
This operation can be performed iteratively or recursively.
</p>

<ul>
<li><strong>Iterative search:</strong> Use a loop to iterate through the list, comparing each node's data with the target value.</li>
<li><strong>Recursive search:</strong> Use a recursive function to compare each node's data with the target value, passing the next node to the function until the end is reached.</li>
</ul>`,
  codeExample: `# Searching elements
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def search_iterative(self, key):
        current = self.head
        while current:
            if current.data == key:
                return True
            current = current.next
        return False

    def search_recursive(self, node, key):
        if node is None:
            return False
        if node.data == key:
            return True
        return self.search_recursive(node.next, key)

# Example usage
linked_list = LinkedList()
linked_list.head = Node(1)
linked_list.head.next = Node(2)
linked_list.head.next.next = Node(3)

print(linked_list.search_iterative(2))  # Output: True
print(linked_list.search_recursive(linked_list.head, 2))  # Output: True`,
  exercises: [
    {
      prompt:
        'Create a linked list and search for an element using an iterative approach. Print whether the element is found or not.',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def search_iterative(self, key):
        current = self.head
        while current:
            if current.data == key:
                return True
            current = current.next
        return False

linked_list = LinkedList()
linked_list.head = Node(1)
linked_list.head.next = Node(2)
linked_list.head.next.next = Node(3)

print(linked_list.search_iterative(2))  # Output: True`,
      solution: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def search_iterative(self, key):
        current = self.head
        while current:
            if current.data == key:
                return True
            current = current.next
        return False

linked_list = LinkedList()
linked_list.head = Node(1)
linked_list.head.next = Node(2)
linked_list.head.next.next = Node(3)

print(linked_list.search_iterative(2))  # Output: True`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a linked list and search for an element using a recursive approach. Print whether the element is found or not.',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def search_recursive(self, node, key):
        if node is None:
            return False
        if node.data == key:
            return True
        return self.search_recursive(node.next, key)

linked_list = LinkedList()
linked_list.head = Node(1)
linked_list.head.next = Node(2)
linked_list.head.next.next = Node(3)

print(linked_list.search_recursive(linked_list.head, 2))  # Output: True`,
      solution: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def search_recursive(self, node, key):
        if node is None:
            return False
        if node.data == key:
            return True
        return self.search_recursive(node.next, key)

linked_list = LinkedList()
linked_list.head = Node(1)
linked_list.head.next = Node(2)
linked_list.head.next.next = Node(3)

print(linked_list.search_recursive(linked_list.head, 2))  # Output: True`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to search for an element in a linked list iteratively?',
      options: [
        'Use a loop to iterate through the list, comparing each node\'s data with the target value',
        'Use a recursive function to compare each node\'s data with the target value, passing the next node to the function until the end is reached',
        'Use a stack to push and pop nodes',
        'None of the above',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. Iterative search uses a loop to iterate through the list.',
        'This is incorrect. This describes recursive search.',
        'This is incorrect. Stacks are not typically used for iterative search.',
        'This is incorrect. The correct answer is iterative search using a loop.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following is the correct way to search for an element in a linked list recursively?',
      options: [
        'Use a loop to iterate through the list, comparing each node\'s data with the target value',
        'Use a recursive function to compare each node\'s data with the target value, passing the next node to the function until the end is reached',
        'Use a stack to push and pop nodes',
        'None of the above',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. This describes iterative search.',
        'This is correct. Recursive search uses a recursive function to compare each node\'s data.',
        'This is incorrect. Stacks are not typically used for recursive search.',
        'This is incorrect. The correct answer is recursive search using a recursive function.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const singlyLinkedData: LessonContent = {
  title: 'Singly Linked Lists',
  content: `<p>
Singly linked lists are a fundamental data structure where each node contains data and a reference (or link) to the next node in the sequence. 
This type of linked list allows for efficient insertion and deletion operations at the beginning of the list.
</p>

<ul>
<li><strong>Node structure:</strong> Each node contains data and a reference to the next node.</li>
<li><strong>Head and tail:</strong> The head is the first node, and the tail is the last node (which points to None).</li>
<li><strong>Operations:</strong> Insertion, deletion, traversal, and searching.</li>
</ul>`,
  codeExample: `# Singly Linked List
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class SinglyLinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            return
        last = self.head
        while last.next:
            last = last.next
        last.next = new_node

    def traverse(self):
        current = self.head
        while current:
            print(current.data, end=' ')
            current = current.next
        print()

# Example usage
linked_list = SinglyLinkedList()
linked_list.append(1)
linked_list.append(2)
linked_list.append(3)

linked_list.traverse()  # Output: 1 2 3`,
  exercises: [
    {
      prompt:
        'Create a singly linked list and append three nodes. Traverse the list to print the nodes.',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class SinglyLinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            return
        last = self.head
        while last.next:
            last = last.next
        last.next = new_node

    def traverse(self):
        current = self.head
        while current:
            print(current.data, end=' ')
            current = current.next
        print()

linked_list = SinglyLinkedList()
linked_list.append(1)
linked_list.append(2)
linked_list.append(3)

linked_list.traverse()`,
      solution: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class SinglyLinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            return
        last = self.head
        while last.next:
            last = last.next
        last.next = new_node

    def traverse(self):
        current = self.head
        while current:
            print(current.data, end=' ')
            current = current.next
        print()

linked_list = SinglyLinkedList()
linked_list.append(1)
linked_list.append(2)
linked_list.append(3)

linked_list.traverse()`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a function that inserts a node at the beginning of a singly linked list. Print the list to verify the insertion.',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class SinglyLinkedList:
    def __init__(self):
        self.head = None

    def insert_at_beginning(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def traverse(self):
        current = self.head
        while current:
            print(current.data, end=' ')
            current = current.next
        print()

linked_list = SinglyLinkedList()
linked_list.insert_at_beginning(1)
linked_list.insert_at_beginning(2)
linked_list.insert_at_beginning(3)

linked_list.traverse()`,
      solution: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class SinglyLinkedList:
    def __init__(self):
        self.head = None

    def insert_at_beginning(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def traverse(self):
        current = self.head
        while current:
            print(current.data, end=' ')
            current = current.next
        print()

linked_list = SinglyLinkedList()
linked_list.insert_at_beginning(1)
linked_list.insert_at_beginning(2)
linked_list.insert_at_beginning(3)

linked_list.traverse()`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to define a node in a singly linked list?',
      options: [
        'class Node: def __init__(self, data): self.data = data self.next = None',
        'class Node: def __init__(self, data): self.data = data self.prev = None self.next = None',
        'class Node: def __init__(self, data): self.data = data self.next = self.prev = None',
        'None of the above',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. A singly linked list node contains data and a reference to the next node.',
        'This is incorrect. This describes a doubly linked list node.',
        'This is incorrect. This describes a doubly linked list node.',
        'This is incorrect. The correct answer is the first option.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following operations is most efficient in a singly linked list?',
      options: [
        'Insertion at the beginning',
        'Insertion at the end',
        'Deletion at the beginning',
        'Deletion at the end',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. Insertion at the beginning is O(1) in a singly linked list.',
        'This is incorrect. Insertion at the end is O(n) in a singly linked list.',
        'This is correct. Deletion at the beginning is O(1) in a singly linked list.',
        'This is incorrect. Deletion at the end is O(n) in a singly linked list.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const doublyLinkedData: LessonContent = {
  title: 'Doubly Linked Lists',
  content: `<p>
Doubly linked lists are a type of linked list where each node contains data and references to both the next and previous nodes. 
This allows for more flexible operations, such as efficient traversal in both directions.
</p>

<ul>
<li><strong>Node structure:</strong> Each node contains data, a reference to the next node, and a reference to the previous node.</li>
<li><strong>Head and tail:</strong> The head is the first node, and the tail is the last node.</li>
<li><strong>Operations:</strong> Insertion, deletion, traversal (forward and backward), and searching.</li>
</ul>`,
  codeExample: `# Doubly Linked List
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None

class DoublyLinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            return
        last = self.head
        while last.next:
            last = last.next
        last.next = new_node
        new_node.prev = last

    def traverse_forward(self):
        current = self.head
        while current:
            print(current.data, end=' ')
            current = current.next
        print()

    def traverse_backward(self):
        last = None
        if self.head is None:
            return
        current = self.head
        while current:
            last = current
            current = current.next
        while last:
            print(last.data, end=' ')
            last = last.prev
        print()

# Example usage
linked_list = DoublyLinkedList()
linked_list.append(1)
linked_list.append(2)
linked_list.append(3)

linked_list.traverse_forward()  # Output: 1 2 3
linked_list.traverse_backward()  # Output: 3 2 1`,
  exercises: [
    {
      prompt:
        'Create a doubly linked list and append three nodes. Traverse the list forward and backward to print the nodes.',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None

class DoublyLinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            return
        last = self.head
        while last.next:
            last = last.next
        last.next = new_node
        new_node.prev = last

    def traverse_forward(self):
        current = self.head
        while current:
            print(current.data, end=' ')
            current = current.next
        print()

    def traverse_backward(self):
        last = None
        if self.head is None:
            return
        current = self.head
        while current:
            last = current
            current = current.next
        while last:
            print(last.data, end=' ')
            last = last.prev
        print()

linked_list = DoublyLinkedList()
linked_list.append(1)
linked_list.append(2)
linked_list.append(3)

linked_list.traverse_forward()
linked_list.traverse_backward()`,
      solution: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None

class DoublyLinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            return
        last = self.head
        while last.next:
            last = last.next
        last.next = new_node
        new_node.prev = last

    def traverse_forward(self):
        current = self.head
        while current:
            print(current.data, end=' ')
            current = current.next
        print()

    def traverse_backward(self):
        last = None
        if self.head is None:
            return
        current = self.head
        while current:
            last = current
            current = current.next
        while last:
            print(last.data, end=' ')
            last = last.prev
        print()

linked_list = DoublyLinkedList()
linked_list.append(1)
linked_list.append(2)
linked_list.append(3)

linked_list.traverse_forward()
linked_list.traverse_backward()`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a function that inserts a node at the beginning of a doubly linked list. Print the list to verify the insertion.',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None

class DoublyLinkedList:
    def __init__(self):
        self.head = None

    def insert_at_beginning(self, data):
        new_node = Node(data)
        new_node.next = self.head
        if self.head is not None:
            self.head.prev = new_node
        self.head = new_node

    def traverse_forward(self):
        current = self.head
        while current:
            print(current.data, end=' ')
            current = current.next
        print()

linked_list = DoublyLinkedList()
linked_list.insert_at_beginning(1)
linked_list.insert_at_beginning(2)
linked_list.insert_at_beginning(3)

linked_list.traverse_forward()`,
      solution: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None

class DoublyLinkedList:
    def __init__(self):
        self.head = None

    def insert_at_beginning(self, data):
        new_node = Node(data)
        new_node.next = self.head
        if self.head is not None:
            self.head.prev = new_node
        self.head = new_node

    def traverse_forward(self):
        current = self.head
        while current:
            print(current.data, end=' ')
            current = current.next
        print()

linked_list = DoublyLinkedList()
linked_list.insert_at_beginning(1)
linked_list.insert_at_beginning(2)
linked_list.insert_at_beginning(3)

linked_list.traverse_forward()`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to define a node in a doubly linked list?',
      options: [
        'class Node: def __init__(self, data): self.data = data self.next = None',
        'class Node: def __init__(self, data): self.data = data self.prev = None self.next = None',
        'class Node: def __init__(self, data): self.data = data self.next = self.prev = None',
        'None of the above',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. This describes a singly linked list node.',
        'This is correct. A doubly linked list node contains data, a reference to the next node, and a reference to the previous node.',
        'This is incorrect. This describes a doubly linked list node, but the syntax is incorrect.',
        'This is incorrect. The correct answer is the second option.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following operations is most efficient in a doubly linked list?',
      options: [
        'Insertion at the beginning',
        'Insertion at the end',
        'Deletion at the beginning',
        'Deletion at the end',
      ],
      correctAnswer: 3,
      explanations: [
        'This is correct. Insertion at the beginning is O(1) in a doubly linked list.',
        'This is correct. Insertion at the end is O(1) in a doubly linked list.',
        'This is correct. Deletion at the beginning is O(1) in a doubly linked list.',
        'This is correct. Deletion at the end is O(1) in a doubly linked list.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const circularLinkedData: LessonContent = {
  title: 'Circular Linked Lists',
  content: `<p>
Circular linked lists are a type of linked list where the last node points back to the head node, creating a circular structure. 
This can be either singly or doubly linked. Circular linked lists have unique properties and use cases.
</p>

<ul>
<li><strong>Node structure:</strong> Similar to singly or doubly linked lists, but the last node points to the head.</li>
<li><strong>Operations:</strong> Insertion, deletion, traversal (circular), and searching.</li>
<li><strong>Use cases:</strong> Scheduling algorithms, round-robin algorithms, and circular buffers.</li>
</ul>`,
  codeExample: `# Circular Linked List
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class CircularLinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            new_node.next = self.head
            return
        last = self.head
        while last.next != self.head:
            last = last.next
        last.next = new_node
        new_node.next = self.head

    def traverse(self):
        if self.head is None:
            return
        current = self.head
        while True:
            print(current.data, end=' ')
            current = current.next
            if current == self.head:
                break
        print()

# Example usage
linked_list = CircularLinkedList()
linked_list.append(1)
linked_list.append(2)
linked_list.append(3)

linked_list.traverse()  # Output: 1 2 3`,
  exercises: [
    {
      prompt:
        'Create a circular linked list and append three nodes. Traverse the list to print the nodes.',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class CircularLinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            new_node.next = self.head
            return
        last = self.head
        while last.next != self.head:
            last = last.next
        last.next = new_node
        new_node.next = self.head

    def traverse(self):
        if self.head is None:
            return
        current = self.head
        while True:
            print(current.data, end=' ')
            current = current.next
            if current == self.head:
                break
        print()

linked_list = CircularLinkedList()
linked_list.append(1)
linked_list.append(2)
linked_list.append(3)

linked_list.traverse()`,
      solution: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class CircularLinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            new_node.next = self.head
            return
        last = self.head
        while last.next != self.head:
            last = last.next
        last.next = new_node
        new_node.next = self.head

    def traverse(self):
        if self.head is None:
            return
        current = self.head
        while True:
            print(current.data, end=' ')
            current = current.next
            if current == self.head:
                break
        print()

linked_list = CircularLinkedList()
linked_list.append(1)
linked_list.append(2)
linked_list.append(3)

linked_list.traverse()`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a function that inserts a node at the beginning of a circular linked list. Print the list to verify the insertion.',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class CircularLinkedList:
    def __init__(self):
        self.head = None

    def insert_at_beginning(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            new_node.next = self.head
            return
        last = self.head
        while last.next != self.head:
            last = last.next
        last.next = new_node
        new_node.next = self.head
        self.head = new_node

    def traverse(self):
        if self.head is None:
            return
        current = self.head
        while True:
            print(current.data, end=' ')
            current = current.next
            if current == self.head:
                break
        print()

linked_list = CircularLinkedList()
linked_list.insert_at_beginning(1)
linked_list.insert_at_beginning(2)
linked_list.insert_at_beginning(3)

linked_list.traverse()`,
      solution: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class CircularLinkedList:
    def __init__(self):
        self.head = None

    def insert_at_beginning(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            new_node.next = self.head
            return
        last = self.head
        while last.next != self.head:
            last = last.next
        last.next = new_node
        new_node.next = self.head
        self.head = new_node

    def traverse(self):
        if self.head is None:
            return
        current = self.head
        while True:
            print(current.data, end=' ')
            current = current.next
            if current == self.head:
                break
        print()

linked_list = CircularLinkedList()
linked_list.insert_at_beginning(1)
linked_list.insert_at_beginning(2)
linked_list.insert_at_beginning(3)

linked_list.traverse()`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to define a node in a circular linked list?',
      options: [
        'class Node: def __init__(self, data): self.data = data self.next = None',
        'class Node: def __init__(self, data): self.data = data self.prev = None self.next = None',
        'class Node: def __init__(self, data): self.data = data self.next = self.prev = None',
        'None of the above',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. A circular linked list node contains data and a reference to the next node.',
        'This is incorrect. This describes a doubly linked list node.',
        'This is incorrect. This describes a doubly linked list node, but the syntax is incorrect.',
        'This is incorrect. The correct answer is the first option.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following operations is most efficient in a circular linked list?',
      options: [
        'Insertion at the beginning',
        'Insertion at the end',
        'Deletion at the beginning',
        'Deletion at the end',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. Insertion at the beginning is O(1) in a circular linked list.',
        'This is incorrect. Insertion at the end is O(n) in a circular linked list.',
        'This is correct. Deletion at the beginning is O(1) in a circular linked list.',
        'This is incorrect. Deletion at the end is O(n) in a circular linked list.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const fastSlowData: LessonContent = {
  title: 'Fast and Slow Pointers',
  content: `<p>
The fast and slow pointer technique, also known as Floyd's cycle detection algorithm, is a common approach for detecting cycles in linked lists. 
This technique uses two pointers that move at different speeds to traverse the list.
</p>

<ul>
<li><strong>Cycle detection:</strong> The slow pointer moves one step at a time, while the fast pointer moves two steps at a time. If there is a cycle, the fast pointer will eventually catch up to the slow pointer.</li>
<li><strong>Applications:</strong> Detecting cycles in linked lists, finding the middle element of a linked list, and more.</li>
</ul>`,
  codeExample: `# Fast and Slow Pointer Technique
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def detect_cycle(self):
        slow = self.head
        fast = self.head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow == fast:
                return True
        return False

# Example usage
linked_list = LinkedList()
linked_list.head = Node(1)
linked_list.head.next = Node(2)
linked_list.head.next.next = Node(3)
linked_list.head.next.next.next = linked_list.head  # Creating a cycle

print(linked_list.detect_cycle())  # Output: True`,
  exercises: [
    {
      prompt:
        'Create a linked list with a cycle and use the fast and slow pointer technique to detect the cycle. Print whether a cycle is detected or not.',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def detect_cycle(self):
        slow = self.head
        fast = self.head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow == fast:
                return True
        return False

linked_list = LinkedList()
linked_list.head = Node(1)
linked_list.head.next = Node(2)
linked_list.head.next.next = Node(3)
linked_list.head.next.next.next = linked_list.head  # Creating a cycle

print(linked_list.detect_cycle())`,
      solution: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def detect_cycle(self):
        slow = self.head
        fast = self.head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow == fast:
                return True
        return False

linked_list = LinkedList()
linked_list.head = Node(1)
linked_list.head.next = Node(2)
linked_list.head.next.next = Node(3)
linked_list.head.next.next.next = linked_list.head  # Creating a cycle

print(linked_list.detect_cycle())`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a function that finds the middle element of a linked list using the fast and slow pointer technique. Print the middle element.',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def find_middle(self):
        slow = self.head
        fast = self.head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        return slow.data

linked_list = LinkedList()
linked_list.head = Node(1)
linked_list.head.next = Node(2)
linked_list.head.next.next = Node(3)
linked_list.head.next.next.next = Node(4)
linked_list.head.next.next.next.next = Node(5)

print(linked_list.find_middle())`,
      solution: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def find_middle(self):
        slow = self.head
        fast = self.head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        return slow.data

linked_list = LinkedList()
linked_list.head = Node(1)
linked_list.head.next = Node(2)
linked_list.head.next.next = Node(3)
linked_list.head.next.next.next = Node(4)
linked_list.head.next.next.next.next = Node(5)

print(linked_list.find_middle())`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to detect a cycle in a linked list using the fast and slow pointer technique?',
      options: [
        'Move the slow pointer one step at a time and the fast pointer two steps at a time. If they meet, there is a cycle.',
        'Move both pointers one step at a time. If they meet, there is a cycle.',
        'Move the slow pointer two steps at a time and the fast pointer one step at a time. If they meet, there is a cycle.',
        'None of the above',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The fast and slow pointer technique involves moving the slow pointer one step at a time and the fast pointer two steps at a time.',
        'This is incorrect. Both pointers moving one step at a time will not detect a cycle.',
        'This is incorrect. The slow pointer moving two steps at a time and the fast pointer moving one step at a time is not the correct approach.',
        'This is incorrect. The correct answer is the first option.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following is a common application of the fast and slow pointer technique?',
      options: [
        'Detecting cycles in linked lists',
        'Finding the middle element of a linked list',
        'Both A and B',
        'None of the above',
      ],
      correctAnswer: 2,
      explanations: [
        'This is correct. Detecting cycles in linked lists is a common application.',
        'This is correct. Finding the middle element of a linked list is a common application.',
        'This is correct. Both detecting cycles and finding the middle element are common applications.',
        'This is incorrect. The correct answer is both A and B.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const multiplePointersData: LessonContent = {
  title: 'Multiple Pointers',
  content: `<p>
The multiple pointers technique involves using multiple pointers to solve various problems efficiently. 
This technique is particularly useful for problems involving arrays or linked lists.
</p>

<ul>
<li><strong>Two pointers:</strong> Use two pointers to traverse the list or array from different directions.</li>
<li><strong>Three pointers:</strong> Use three pointers to solve more complex problems.</li>
<li><strong>Applications:</strong> Finding pairs that sum to a target, removing duplicates, and more.</li>
</ul>`,
  codeExample: `# Multiple Pointers Technique
def find_pair_sum(arr, target):
    left = 0
    right = len(arr) - 1
    while left < right:
        current_sum = arr[left] + arr[right]
        if current_sum == target:
            return (arr[left], arr[right])
        elif current_sum < target:
            left += 1
        else:
            right -= 1
    return None

# Example usage
arr = [1, 2, 3, 4, 5]
target = 7
print(find_pair_sum(arr, target))  # Output: (2, 5)`,
  exercises: [
    {
      prompt:
        'Create a function that finds a pair of elements in an array that sum to a given target using the multiple pointers technique. Print the pair if found, otherwise print "No pair found".',
      initialCode: `# Write your solution here
def find_pair_sum(arr, target):
    left = 0
    right = len(arr) - 1
    while left < right:
        current_sum = arr[left] + arr[right]
        if current_sum == target:
            return (arr[left], arr[right])
        elif current_sum < target:
            left += 1
        else:
            right -= 1
    return None

arr = [1, 2, 3, 4, 5]
target = 7
result = find_pair_sum(arr, target)
if result:
    print(result)
else:
    print("No pair found")`,
      solution: `def find_pair_sum(arr, target):
    left = 0
    right = len(arr) - 1
    while left < right:
        current_sum = arr[left] + arr[right]
        if current_sum == target:
            return (arr[left], arr[right])
        elif current_sum < target:
            left += 1
        else:
            right -= 1
    return None

arr = [1, 2, 3, 4, 5]
target = 7
result = find_pair_sum(arr, target)
if result:
    print(result)
else:
    print("No pair found")`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a function that removes duplicates from a sorted array using the multiple pointers technique. Print the modified array.',
      initialCode: `# Write your solution here
def remove_duplicates(arr):
    if not arr:
        return arr
    i = 0
    for j in range(1, len(arr)):
        if arr[j] != arr[i]:
            i += 1
            arr[i] = arr[j]
    return arr[:i + 1]

arr = [1, 1, 2, 2, 3, 4, 4, 5]
print(remove_duplicates(arr))`,
      solution: `def remove_duplicates(arr):
    if not arr:
        return arr
    i = 0
    for j in range(1, len(arr)):
        if arr[j] != arr[i]:
            i += 1
            arr[i] = arr[j]
    return arr[:i + 1]

arr = [1, 1, 2, 2, 3, 4, 4, 5]
print(remove_duplicates(arr))`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to use the multiple pointers technique to find a pair that sums to a target in an array?',
      options: [
        'Use two pointers starting from the beginning of the array and move them towards each other.',
        'Use two pointers starting from the beginning and end of the array and move them towards each other.',
        'Use three pointers starting from the beginning of the array and move them towards each other.',
        'None of the above',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. Two pointers starting from the beginning of the array will not work.',
        'This is correct. Two pointers starting from the beginning and end of the array and moving towards each other is the correct approach.',
        'This is incorrect. Three pointers are not needed for this problem.',
        'This is incorrect. The correct answer is the second option.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following is a common application of the multiple pointers technique?',
      options: [
        'Finding pairs that sum to a target',
        'Removing duplicates from a sorted array',
        'Both A and B',
        'None of the above',
      ],
      correctAnswer: 2,
      explanations: [
        'This is correct. Finding pairs that sum to a target is a common application.',
        'This is correct. Removing duplicates from a sorted array is a common application.',
        'This is correct. Both finding pairs and removing duplicates are common applications.',
        'This is incorrect. The correct answer is both A and B.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const distanceKData: LessonContent = {
  title: 'K Distance Apart',
  content: `<p>
The K distance apart technique involves maintaining pointers at fixed distances to solve various problems efficiently. 
This technique is particularly useful for problems involving arrays or linked lists.
</p>

<ul>
<li><strong>Fixed distance:</strong> Maintain pointers at a fixed distance from each other.</li>
<li><strong>Applications:</strong> Finding elements at a fixed distance, sliding window problems, and more.</li>
</ul>`,
  codeExample: `# K Distance Apart Technique
def find_k_distance_elements(arr, k):
    result = []
    for i in range(len(arr) - k):
        if arr[i] == arr[i + k]:
            result.append((arr[i], arr[i + k]))
    return result

# Example usage
arr = [1, 2, 3, 1, 2, 3]
k = 2
print(find_k_distance_elements(arr, k))  # Output: [(1, 1), (2, 2)]`,
  exercises: [
    {
      prompt:
        'Create a function that finds pairs of elements in an array that are k distance apart and have the same value. Print the pairs if found, otherwise print "No pairs found".',
      initialCode: `# Write your solution here
def find_k_distance_elements(arr, k):
    result = []
    for i in range(len(arr) - k):
        if arr[i] == arr[i + k]:
            result.append((arr[i], arr[i + k]))
    return result

arr = [1, 2, 3, 1, 2, 3]
k = 2
result = find_k_distance_elements(arr, k)
if result:
    print(result)
else:
    print("No pairs found")`,
      solution: `def find_k_distance_elements(arr, k):
    result = []
    for i in range(len(arr) - k):
        if arr[i] == arr[i + k]:
            result.append((arr[i], arr[i + k]))
    return result

arr = [1, 2, 3, 1, 2, 3]
k = 2
result = find_k_distance_elements(arr, k)
if result:
    print(result)
else:
    print("No pairs found")`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a function that finds the maximum sum of a subarray of size k using the K distance apart technique. Print the maximum sum.',
      initialCode: `# Write your solution here
def max_sum_subarray(arr, k):
    max_sum = float('-inf')
    current_sum = sum(arr[:k])
    for i in range(len(arr) - k):
        current_sum = current_sum - arr[i] + arr[i + k]
        max_sum = max(max_sum, current_sum)
    return max_sum

arr = [1, 4, 2, 10, 2, 3, 1, 0, 20]
k = 3
print(max_sum_subarray(arr, k))`,
      solution: `def max_sum_subarray(arr, k):
    max_sum = float('-inf')
    current_sum = sum(arr[:k])
    for i in range(len(arr) - k):
        current_sum = current_sum - arr[i] + arr[i + k]
        max_sum = max(max_sum, current_sum)
    return max_sum

arr = [1, 4, 2, 10, 2, 3, 1, 0, 20]
k = 3
print(max_sum_subarray(arr, k))`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to use the K distance apart technique to find pairs of elements in an array that are k distance apart and have the same value?',
      options: [
        'Use two pointers starting from the beginning of the array and move them towards each other.',
        'Use two pointers starting from the beginning and end of the array and move them towards each other.',
        'Use a single pointer and check the element at a fixed distance k from the current element.',
        'None of the above',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. Two pointers starting from the beginning of the array will not work.',
        'This is incorrect. Two pointers starting from the beginning and end of the array will not work.',
        'This is correct. A single pointer and checking the element at a fixed distance k is the correct approach.',
        'This is incorrect. The correct answer is the third option.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following is a common application of the K distance apart technique?',
      options: [
        'Finding pairs that are k distance apart',
        'Finding the maximum sum of a subarray of size k',
        'Both A and B',
        'None of the above',
      ],
      correctAnswer: 2,
      explanations: [
        'This is correct. Finding pairs that are k distance apart is a common application.',
        'This is correct. Finding the maximum sum of a subarray of size k is a common application.',
        'This is correct. Both finding pairs and finding the maximum sum are common applications.',
        'This is incorrect. The correct answer is both A and B.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const cycleDetectionData: LessonContent = {
  title: 'Cycle Detection',
  content: `<p>
Cycle detection is a common problem in linked lists where the goal is to determine if there is a cycle (loop) within the list. 
This can be efficiently solved using Floyd's cycle detection algorithm, also known as the tortoise and hare algorithm.
</p>

<ul>
<li><strong>Floyd's cycle detection:</strong> Use two pointers, one moving at a slower pace (tortoise) and the other moving at a faster pace (hare). If there is a cycle, the hare will eventually catch up to the tortoise.</li>
<li><strong>Applications:</strong> Detecting cycles in linked lists, finding the starting point of a cycle, and more.</li>
</ul>`,
  codeExample: `# Cycle Detection using Floyd's Algorithm
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def detect_cycle(self):
        slow = self.head
        fast = self.head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow == fast:
                return True
        return False

# Example usage
linked_list = LinkedList()
linked_list.head = Node(1)
linked_list.head.next = Node(2)
linked_list.head.next.next = Node(3)
linked_list.head.next.next.next = linked_list.head  # Creating a cycle

print(linked_list.detect_cycle())  # Output: True`,
  exercises: [
    {
      prompt:
        'Create a linked list with a cycle and use Floyd\'s cycle detection algorithm to detect the cycle. Print whether a cycle is detected or not.',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def detect_cycle(self):
        slow = self.head
        fast = self.head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow == fast:
                return True
        return False

linked_list = LinkedList()
linked_list.head = Node(1)
linked_list.head.next = Node(2)
linked_list.head.next.next = Node(3)
linked_list.head.next.next.next = linked_list.head  # Creating a cycle

print(linked_list.detect_cycle())`,
      solution: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def detect_cycle(self):
        slow = self.head
        fast = self.head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow == fast:
                return True
        return False

linked_list = LinkedList()
linked_list.head = Node(1)
linked_list.head.next = Node(2)
linked_list.head.next.next = Node(3)
linked_list.head.next.next.next = linked_list.head  # Creating a cycle

print(linked_list.detect_cycle())`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a function that finds the starting point of a cycle in a linked list using Floyd\'s cycle detection algorithm. Print the starting point if a cycle is detected, otherwise print "No cycle found".',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def find_cycle_start(self):
        slow = self.head
        fast = self.head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow == fast:
                slow = self.head
                while slow != fast:
                    slow = slow.next
                    fast = fast.next
                return slow.data
        return "No cycle found"

linked_list = LinkedList()
linked_list.head = Node(1)
linked_list.head.next = Node(2)
linked_list.head.next.next = Node(3)
linked_list.head.next.next.next = linked_list.head.next  # Creating a cycle

print(linked_list.find_cycle_start())`,
      solution: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def find_cycle_start(self):
        slow = self.head
        fast = self.head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow == fast:
                slow = self.head
                while slow != fast:
                    slow = slow.next
                    fast = fast.next
                return slow.data
        return "No cycle found"

linked_list = LinkedList()
linked_list.head = Node(1)
linked_list.head.next = Node(2)
linked_list.head.next.next = Node(3)
linked_list.head.next.next.next = linked_list.head.next  # Creating a cycle

print(linked_list.find_cycle_start())`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to detect a cycle in a linked list using Floyd\'s cycle detection algorithm?',
      options: [
        'Move the slow pointer one step at a time and the fast pointer two steps at a time. If they meet, there is a cycle.',
        'Move both pointers one step at a time. If they meet, there is a cycle.',
        'Move the slow pointer two steps at a time and the fast pointer one step at a time. If they meet, there is a cycle.',
        'None of the above',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The fast and slow pointer technique involves moving the slow pointer one step at a time and the fast pointer two steps at a time.',
        'This is incorrect. Both pointers moving one step at a time will not detect a cycle.',
        'This is incorrect. The slow pointer moving two steps at a time and the fast pointer moving one step at a time is not the correct approach.',
        'This is incorrect. The correct answer is the first option.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following is a common application of Floyd\'s cycle detection algorithm?',
      options: [
        'Detecting cycles in linked lists',
        'Finding the starting point of a cycle in a linked list',
        'Both A and B',
        'None of the above',
      ],
      correctAnswer: 2,
      explanations: [
        'This is correct. Detecting cycles in linked lists is a common application.',
        'This is correct. Finding the starting point of a cycle in a linked list is a common application.',
        'This is correct. Both detecting cycles and finding the starting point are common applications.',
        'This is incorrect. The correct answer is both A and B.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const intersectionData: LessonContent = {
  title: 'Finding Intersection',
  content: `<p>
Finding the intersection point of two linked lists is a common problem where the goal is to determine if two lists intersect and, if so, at which node. 
This can be efficiently solved using various techniques.
</p>

<ul>
<li><strong>Two-pass algorithm:</strong> Traverse both lists to find their lengths, then traverse them again from the point where they have the same remaining length.</li>
<li><strong>Applications:</strong> Detecting intersections in linked lists, merging linked lists, and more.</li>
</ul>`,
  codeExample: `# Finding Intersection of Two Linked Lists
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def get_intersection_node(self, list2):
        def get_length(node):
            length = 0
            while node:
                length += 1
                node = node.next
            return length

        len1 = get_length(self.head)
        len2 = get_length(list2.head)
        curr1, curr2 = self.head, list2.head

        if len1 > len2:
            for _ in range(len1 - len2):
                curr1 = curr1.next
        else:
            for _ in range(len2 - len1):
                curr2 = curr2.next

        while curr1 and curr2:
            if curr1 == curr2:
                return curr1.data
            curr1 = curr1.next
            curr2 = curr2.next
        return None

# Example usage
list1 = LinkedList()
list1.head = Node(1)
list1.head.next = Node(2)
list1.head.next.next = Node(3)

list2 = LinkedList()
list2.head = Node(4)
list2.head.next = list1.head.next.next  # Intersection at node with data 3

print(list1.get_intersection_node(list2))  # Output: 3`,
  exercises: [
    {
      prompt:
        'Create two linked lists that intersect and use the two-pass algorithm to find the intersection point. Print the intersection point if found, otherwise print "No intersection found".',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def get_intersection_node(self, list2):
        def get_length(node):
            length = 0
            while node:
                length += 1
                node = node.next
            return length

        len1 = get_length(self.head)
        len2 = get_length(list2.head)
        curr1, curr2 = self.head, list2.head

        if len1 > len2:
            for _ in range(len1 - len2):
                curr1 = curr1.next
        else:
            for _ in range(len2 - len1):
                curr2 = curr2.next

        while curr1 and curr2:
            if curr1 == curr2:
                return curr1.data
            curr1 = curr1.next
            curr2 = curr2.next
        return "No intersection found"

list1 = LinkedList()
list1.head = Node(1)
list1.head.next = Node(2)
list1.head.next.next = Node(3)

list2 = LinkedList()
list2.head = Node(4)
list2.head.next = list1.head.next.next  # Intersection at node with data 3

print(list1.get_intersection_node(list2))`,
      solution: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def get_intersection_node(self, list2):
        def get_length(node):
            length = 0
            while node:
                length += 1
                node = node.next
            return length

        len1 = get_length(self.head)
        len2 = get_length(list2.head)
        curr1, curr2 = self.head, list2.head

        if len1 > len2:
            for _ in range(len1 - len2):
                curr1 = curr1.next
        else:
            for _ in range(len2 - len1):
                curr2 = curr2.next

        while curr1 and curr2:
            if curr1 == curr2:
                return curr1.data
            curr1 = curr1.next
            curr2 = curr2.next
        return "No intersection found"

list1 = LinkedList()
list1.head = Node(1)
list1.head.next = Node(2)
list1.head.next.next = Node(3)

list2 = LinkedList()
list2.head = Node(4)
list2.head.next = list1.head.next.next  # Intersection at node with data 3

print(list1.get_intersection_node(list2))`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a function that merges two sorted linked lists and returns the head of the merged list. Print the merged list.',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def merge_sorted_lists(self, list2):
        dummy = Node(0)
        tail = dummy
        curr1, curr2 = self.head, list2.head

        while curr1 and curr2:
            if curr1.data < curr2.data:
                tail.next = curr1
                curr1 = curr1.next
            else:
                tail.next = curr2
                curr2 = curr2.next
            tail = tail.next

        if curr1:
            tail.next = curr1
        elif curr2:
            tail.next = curr2

        return dummy.next

    def traverse(self):
        current = self.head
        while current:
            print(current.data, end=' ')
            current = current.next
        print()

list1 = LinkedList()
list1.head = Node(1)
list1.head.next = Node(3)
list1.head.next.next = Node(5)

list2 = LinkedList()
list2.head = Node(2)
list2.head.next = Node(4)
list2.head.next.next = Node(6)

merged_list = LinkedList()
merged_list.head = list1.merge_sorted_lists(list2)
merged_list.traverse()`,
      solution: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def merge_sorted_lists(self, list2):
        dummy = Node(0)
        tail = dummy
        curr1, curr2 = self.head, list2.head

        while curr1 and curr2:
            if curr1.data < curr2.data:
                tail.next = curr1
                curr1 = curr1.next
            else:
                tail.next = curr2
                curr2 = curr2.next
            tail = tail.next

        if curr1:
            tail.next = curr1
        elif curr2:
            tail.next = curr2

        return dummy.next

    def traverse(self):
        current = self.head
        while current:
            print(current.data, end=' ')
            current = current.next
        print()

list1 = LinkedList()
list1.head = Node(1)
list1.head.next = Node(3)
list1.head.next.next = Node(5)

list2 = LinkedList()
list2.head = Node(2)
list2.head.next = Node(4)
list2.head.next.next = Node(6)

merged_list = LinkedList()
merged_list.head = list1.merge_sorted_lists(list2)
merged_list.traverse()`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to find the intersection point of two linked lists using the two-pass algorithm?',
      options: [
        'Traverse both lists to find their lengths, then traverse them again from the point where they have the same remaining length.',
        'Traverse both lists simultaneously and check if the nodes are the same.',
        'Use a hash table to store nodes of one list and check for the first node in the other list that is already in the hash table.',
        'None of the above',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The two-pass algorithm involves finding the lengths of both lists and then traversing them again from the point where they have the same remaining length.',
        'This is incorrect. Traversing both lists simultaneously will not work if the lists have different lengths.',
        'This is incorrect. Using a hash table is a valid approach but is not the two-pass algorithm.',
        'This is incorrect. The correct answer is the first option.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following is a common application of finding the intersection point of two linked lists?',
      options: [
        'Detecting intersections in linked lists',
        'Merging linked lists',
        'Both A and B',
        'None of the above',
      ],
      correctAnswer: 2,
      explanations: [
        'This is correct. Detecting intersections in linked lists is a common application.',
        'This is correct. Merging linked lists is a common application.',
        'This is correct. Both detecting intersections and merging linked lists are common applications.',
        'This is incorrect. The correct answer is both A and B.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const palindromeData: LessonContent = {
  title: 'Palindrome Check',
  content: `<p>
Checking if a linked list is a palindrome is a common problem where the goal is to determine if the elements of the list form a palindrome. 
This can be efficiently solved using various techniques.
</p>

<ul>
<li><strong>Reverse and compare:</strong> Reverse the second half of the list and compare it with the first half.</li>
<li><strong>Applications:</strong> Verifying palindromic sequences, string manipulation, and more.</li>
</ul>`,
  codeExample: `# Palindrome Check in Linked List
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def is_palindrome(self):
        def reverse_list(node):
            prev = None
            while node:
                next_node = node.next
                node.next = prev
                prev = node
                node = next_node
            return prev

        slow = self.head
        fast = self.head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        reversed_second_half = reverse_list(slow)
        first_half = self.head

        while reversed_second_half:
            if first_half.data != reversed_second_half.data:
                return False
            first_half = first_half.next
            reversed_second_half = reversed_second_half.next
        return True

# Example usage
linked_list = LinkedList()
linked_list.head = Node(1)
linked_list.head.next = Node(2)
linked_list.head.next.next = Node(2)
linked_list.head.next.next.next = Node(1)

print(linked_list.is_palindrome())  # Output: True`,
  exercises: [
    {
      prompt:
        'Create a linked list that is a palindrome and use the reverse and compare technique to verify it. Print whether the list is a palindrome or not.',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def is_palindrome(self):
        def reverse_list(node):
            prev = None
            while node:
                next_node = node.next
                node.next = prev
                prev = node
                node = next_node
            return prev

        slow = self.head
        fast = self.head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        reversed_second_half = reverse_list(slow)
        first_half = self.head

        while reversed_second_half:
            if first_half.data != reversed_second_half.data:
                return False
            first_half = first_half.next
            reversed_second_half = reversed_second_half.next
        return True

linked_list = LinkedList()
linked_list.head = Node(1)
linked_list.head.next = Node(2)
linked_list.head.next.next = Node(2)
linked_list.head.next.next.next = Node(1)

print(linked_list.is_palindrome())`,
      solution: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def is_palindrome(self):
        def reverse_list(node):
            prev = None
            while node:
                next_node = node.next
                node.next = prev
                prev = node
                node = next_node
            return prev

        slow = self.head
        fast = self.head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        reversed_second_half = reverse_list(slow)
        first_half = self.head

        while reversed_second_half:
            if first_half.data != reversed_second_half.data:
                return False
            first_half = first_half.next
            reversed_second_half = reversed_second_half.next
        return True

linked_list = LinkedList()
linked_list.head = Node(1)
linked_list.head.next = Node(2)
linked_list.head.next.next = Node(2)
linked_list.head.next.next.next = Node(1)

print(linked_list.is_palindrome())`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a function that checks if a linked list is a palindrome using the reverse and compare technique. Print whether the list is a palindrome or not.',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def is_palindrome(self):
        def reverse_list(node):
            prev = None
            while node:
                next_node = node.next
                node.next = prev
                prev = node
                node = next_node
            return prev

        slow = self.head
        fast = self.head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        reversed_second_half = reverse_list(slow)
        first_half = self.head

        while reversed_second_half:
            if first_half.data != reversed_second_half.data:
                return False
            first_half = first_half.next
            reversed_second_half = reversed_second_half.next
        return True

linked_list = LinkedList()
linked_list.head = Node(1)
linked_list.head.next = Node(2)
linked_list.head.next.next = Node(3)
linked_list.head.next.next.next = Node(2)
linked_list.head.next.next.next.next = Node(1)

print(linked_list.is_palindrome())`,
      solution: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def is_palindrome(self):
        def reverse_list(node):
            prev = None
            while node:
                next_node = node.next
                node.next = prev
                prev = node
                node = next_node
            return prev

        slow = self.head
        fast = self.head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        reversed_second_half = reverse_list(slow)
        first_half = self.head

        while reversed_second_half:
            if first_half.data != reversed_second_half.data:
                return False
            first_half = first_half.next
            reversed_second_half = reversed_second_half.next
        return True

linked_list = LinkedList()
linked_list.head = Node(1)
linked_list.head.next = Node(2)
linked_list.head.next.next = Node(3)
linked_list.head.next.next.next = Node(2)
linked_list.head.next.next.next.next = Node(1)

print(linked_list.is_palindrome())`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to check if a linked list is a palindrome using the reverse and compare technique?',
      options: [
        'Reverse the entire list and compare it with the original list.',
        'Reverse the second half of the list and compare it with the first half.',
        'Reverse the first half of the list and compare it with the second half.',
        'None of the above',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. Reversing the entire list and comparing it with the original list will not work because the original list will be modified.',
        'This is correct. Reversing the second half of the list and comparing it with the first half is the correct approach.',
        'This is incorrect. Reversing the first half of the list and comparing it with the second half is not the correct approach.',
        'This is incorrect. The correct answer is the second option.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following is a common application of checking if a linked list is a palindrome?',
      options: [
        'Verifying palindromic sequences',
        'String manipulation',
        'Both A and B',
        'None of the above',
      ],
      correctAnswer: 2,
      explanations: [
        'This is correct. Verifying palindromic sequences is a common application.',
        'This is correct. String manipulation is a common application.',
        'This is correct. Both verifying palindromic sequences and string manipulation are common applications.',
        'This is incorrect. The correct answer is both A and B.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const listReversalData: LessonContent = {
  title: 'List Reversal',
  content: `<p>
Reversing a list is a common operation in programming, and there are several ways to achieve this in Python. 
The most straightforward method is to use Python's built-in <strong>reverse()</strong> method or the <strong>reversed()</strong> function. 
Additionally, you can reverse a list using slicing or by implementing a custom reversal algorithm.
</p>

<ul>
<li><strong>Using the reverse() method:</strong> This method modifies the list in place.</li>
<li><strong>Using the reversed() function:</strong> This function returns an iterator that yields the list elements in reverse order.</li>
<li><strong>Using slicing:</strong> This method creates a new list that is the reverse of the original list.</li>
<li><strong>Custom reversal algorithm:</strong> Implementing a reversal algorithm manually can be useful for understanding the process.</li>
</ul>`,
  codeExample: `# Using the reverse() method
my_list = [1, 2, 3, 4, 5]
my_list.reverse()  # Modifies the list in place
print(my_list)  # Output: [5, 4, 3, 2, 1]

# Using the reversed() function
my_list = [1, 2, 3, 4, 5]
reversed_list = list(reversed(my_list))  # Creates a new list
print(reversed_list)  # Output: [5, 4, 3, 2, 1]

# Using slicing
my_list = [1, 2, 3, 4, 5]
reversed_list = my_list[::-1]  # Creates a new list
print(reversed_list)  # Output: [5, 4, 3, 2, 1]

# Custom reversal algorithm
def reverse_list(lst):
    left = 0
    right = len(lst) - 1
    while left < right:
        lst[left], lst[right] = lst[right], lst[left]
        left += 1
        right -= 1
    return lst

my_list = [1, 2, 3, 4, 5]
reversed_list = reverse_list(my_list)
print(reversed_list)  # Output: [5, 4, 3, 2, 1]`,
  exercises: [
    {
      prompt: 'Reverse the given list using the reverse() method.',
      initialCode: `# Write your solution here
my_list = [1, 2, 3, 4, 5]`,
      solution: `my_list = [1, 2, 3, 4, 5]
my_list.reverse()`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Reverse the given list using the reversed() function.',
      initialCode: `# Write your solution here
my_list = [1, 2, 3, 4, 5]`,
      solution: `my_list = [1, 2, 3, 4, 5]
reversed_list = list(reversed(my_list))`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Reverse the given list using slicing.',
      initialCode: `# Write your solution here
my_list = [1, 2, 3, 4, 5]`,
      solution: `my_list = [1, 2, 3, 4, 5]
reversed_list = my_list[::-1]`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following methods reverses a list in place?',
      options: ['reverse()', 'reversed()', 'slice[::-1]', 'None of the above'],
      correctAnswer: 0,
      explanations: [
        'This is correct. The reverse() method modifies the list in place.',
        'This is incorrect. The reversed() function returns an iterator.',
        'This is incorrect. Slicing creates a new list.',
        'This is incorrect. The reverse() method reverses the list in place.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'Which of the following methods creates a new list that is the reverse of the original list?',
      options: ['reverse()', 'reversed()', 'slice[::-1]', 'None of the above'],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. The reverse() method modifies the list in place.',
        'This is incorrect. The reversed() function returns an iterator.',
        'This is correct. Slicing creates a new list that is the reverse of the original list.',
        'This is incorrect. Slicing creates a new list that is the reverse of the original list.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const listSortingData: LessonContent = {
  title: 'Sorting Lists',
  content: `<p>
Sorting a list is a fundamental operation in programming, and there are several algorithms and methods to achieve this in Python. 
Python provides built-in functions like <strong>sort()</strong> and <strong>sorted()</strong> to sort lists easily. 
Additionally, you can implement various sorting algorithms like Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, and Quick Sort.
</p>

<ul>
<li><strong>Using the sort() method:</strong> This method sorts the list in place.</li>
<li><strong>Using the sorted() function:</strong> This function returns a new sorted list.</li>
<li><strong>Bubble Sort:</strong> A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.</li>
<li><strong>Selection Sort:</strong> A sorting algorithm that selects the smallest element from an unsorted list and places it at the beginning.</li>
<li><strong>Insertion Sort:</strong> A sorting algorithm that builds the final sorted list one item at a time.</li>
<li><strong>Merge Sort:</strong> A divide-and-conquer algorithm that recursively splits the list into halves until it cannot be divided further, then merges the sorted halves.</li>
<li><strong>Quick Sort:</strong> A divide-and-conquer algorithm that selects a "pivot" element and partitions the other elements into two sub-lists, according to whether they are less than or greater than the pivot.</li>
</ul>`,
  codeExample: `# Using the sort() method
my_list = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
my_list.sort()  # Modifies the list in place
print(my_list)  # Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

# Using the sorted() function
my_list = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
sorted_list = sorted(my_list)  # Creates a new sorted list
print(sorted_list)  # Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

# Bubble Sort
def bubble_sort(lst):
    n = len(lst)
    for i in range(n):
        for j in range(0, n-i-1):
            if lst[j] > lst[j+1]:
                lst[j], lst[j+1] = lst[j+1], lst[j]
    return lst

my_list = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
sorted_list = bubble_sort(my_list)
print(sorted_list)  # Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

# Selection Sort
def selection_sort(lst):
    for i in range(len(lst)):
        min_idx = i
        for j in range(i+1, len(lst)):
            if lst[j] < lst[min_idx]:
                min_idx = j
        lst[i], lst[min_idx] = lst[min_idx], lst[i]
    return lst

my_list = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
sorted_list = selection_sort(my_list)
print(sorted_list)  # Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

# Insertion Sort
def insertion_sort(lst):
    for i in range(1, len(lst)):
        key = lst[i]
        j = i - 1
        while j >= 0 and key < lst[j]:
            lst[j + 1] = lst[j]
            j -= 1
        lst[j + 1] = key
    return lst

my_list = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
sorted_list = insertion_sort(my_list)
print(sorted_list)  # Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

# Merge Sort
def merge_sort(lst):
    if len(lst) > 1:
        mid = len(lst) // 2
        left_half = lst[:mid]
        right_half = lst[mid:]

        merge_sort(left_half)
        merge_sort(right_half)

        i = j = k = 0

        while i < len(left_half) and j < len(right_half):
            if left_half[i] < right_half[j]:
                lst[k] = left_half[i]
                i += 1
            else:
                lst[k] = right_half[j]
                j += 1
            k += 1

        while i < len(left_half):
            lst[k] = left_half[i]
            i += 1
            k += 1

        while j < len(right_half):
            lst[k] = right_half[j]
            j += 1
            k += 1
    return lst

my_list = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
sorted_list = merge_sort(my_list)
print(sorted_list)  # Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

# Quick Sort
def quick_sort(lst):
    if len(lst) <= 1:
        return lst
    else:
        pivot = lst[0]
        less_than_pivot = [x for x in lst[1:] if x <= pivot]
        greater_than_pivot = [x for x in lst[1:] if x > pivot]
        return quick_sort(less_than_pivot) + [pivot] + quick_sort(greater_than_pivot)

my_list = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
sorted_list = quick_sort(my_list)
print(sorted_list)  # Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]`,
  exercises: [
    {
      prompt: 'Sort the given list using the sort() method.',
      initialCode: `# Write your solution here
my_list = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]`,
      solution: `my_list = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
my_list.sort()`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Sort the given list using the sorted() function.',
      initialCode: `# Write your solution here
my_list = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]`,
      solution: `my_list = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
sorted_list = sorted(my_list)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Implement Bubble Sort to sort the given list.',
      initialCode: `# Write your solution here
def bubble_sort(lst):
    # Your code here

my_list = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]`,
      solution: `def bubble_sort(lst):
    n = len(lst)
    for i in range(n):
        for j in range(0, n-i-1):
            if lst[j] > lst[j+1]:
                lst[j], lst[j+1] = lst[j+1], lst[j]
    return lst

my_list = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
sorted_list = bubble_sort(my_list)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following methods sorts a list in place?',
      options: ['sort()', 'sorted()', 'slice[::-1]', 'None of the above'],
      correctAnswer: 0,
      explanations: [
        'This is correct. The sort() method modifies the list in place.',
        'This is incorrect. The sorted() function returns a new sorted list.',
        'This is incorrect. Slicing creates a new list.',
        'This is incorrect. The sort() method sorts the list in place.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'Which of the following methods returns a new sorted list?',
      options: ['sort()', 'sorted()', 'slice[::-1]', 'None of the above'],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. The sort() method modifies the list in place.',
        'This is correct. The sorted() function returns a new sorted list.',
        'This is incorrect. Slicing creates a new list.',
        'This is incorrect. The sorted() function returns a new sorted list.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const mergingListsData: LessonContent = {
  title: 'Merging Lists',
  content: `<p>
Merging lists is a common operation in programming, especially when dealing with sorted lists. 
Python provides several ways to merge lists, including using the <strong>+</strong> operator, the <strong>extend()</strong> method, and the <strong>zip()</strong> function. 
Additionally, you can implement custom merge algorithms like the Merge Sort algorithm, which is particularly efficient for merging sorted lists.
</p>

<ul>
<li><strong>Using the + operator:</strong> This method concatenates two lists and returns a new list.</li>
<li><strong>Using the extend() method:</strong> This method modifies the first list by appending elements from the second list.</li>
<li><strong>Using the zip() function:</strong> This function pairs elements from two lists into tuples.</li>
<li><strong>Merge Sort algorithm:</strong> A divide-and-conquer algorithm that recursively splits the list into halves until it cannot be divided further, then merges the sorted halves.</li>
</ul>`,
  codeExample: `# Using the + operator
list1 = [1, 2, 3]
list2 = [4, 5, 6]
merged_list = list1 + list2
print(merged_list)  # Output: [1, 2, 3, 4, 5, 6]

# Using the extend() method
list1 = [1, 2, 3]
list2 = [4, 5, 6]
list1.extend(list2)  # Modifies list1 in place
print(list1)  # Output: [1, 2, 3, 4, 5, 6]

# Using the zip() function
list1 = [1, 2, 3]
list2 = [4, 5, 6]
zipped_list = list(zip(list1, list2))
print(zipped_list)  # Output: [(1, 4), (2, 5), (3, 6)]

# Merge Sort algorithm
def merge_sort(lst):
    if len(lst) > 1:
        mid = len(lst) // 2
        left_half = lst[:mid]
        right_half = lst[mid:]

        merge_sort(left_half)
        merge_sort(right_half)

        i = j = k = 0

        while i < len(left_half) and j < len(right_half):
            if left_half[i] < right_half[j]:
                lst[k] = left_half[i]
                i += 1
            else:
                lst[k] = right_half[j]
                j += 1
            k += 1

        while i < len(left_half):
            lst[k] = left_half[i]
            i += 1
            k += 1

        while j < len(right_half):
            lst[k] = right_half[j]
            j += 1
            k += 1
    return lst

list1 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
list2 = [2, 7, 1, 8, 2, 8, 1, 8, 2, 8, 4]
merged_list = merge_sort(list1 + list2)
print(merged_list)  # Output: [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 4, 4, 5, 5, 5, 6, 7, 8, 8, 8, 8, 8, 9]`,
  exercises: [
    {
      prompt: 'Merge the given lists using the + operator.',
      initialCode: `# Write your solution here
list1 = [1, 2, 3]
list2 = [4, 5, 6]`,
      solution: `list1 = [1, 2, 3]
list2 = [4, 5, 6]
merged_list = list1 + list2`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Merge the given lists using the extend() method.',
      initialCode: `# Write your solution here
list1 = [1, 2, 3]
list2 = [4, 5, 6]`,
      solution: `list1 = [1, 2, 3]
list2 = [4, 5, 6]
list1.extend(list2)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Merge the given lists using the zip() function.',
      initialCode: `# Write your solution here
list1 = [1, 2, 3]
list2 = [4, 5, 6]`,
      solution: `list1 = [1, 2, 3]
list2 = [4, 5, 6]
zipped_list = list(zip(list1, list2))`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following methods merges two lists and returns a new list?',
      options: ['+ operator', 'extend() method', 'zip() function', 'None of the above'],
      correctAnswer: 0,
      explanations: [
        'This is correct. The + operator concatenates two lists and returns a new list.',
        'This is incorrect. The extend() method modifies the first list in place.',
        'This is incorrect. The zip() function pairs elements from two lists into tuples.',
        'This is incorrect. The + operator merges two lists and returns a new list.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'Which of the following methods modifies the first list by appending elements from the second list?',
      options: ['+ operator', 'extend() method', 'zip() function', 'None of the above'],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. The + operator returns a new list.',
        'This is correct. The extend() method modifies the first list in place.',
        'This is incorrect. The zip() function pairs elements from two lists into tuples.',
        'This is incorrect. The extend() method modifies the first list in place.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const recursiveOperationsData: LessonContent = {
  title: 'Recursive Approaches',
  content: `<p>
Recursive approaches are powerful techniques for solving problems that can be broken down into smaller, similar subproblems. 
In the context of linked lists, recursion can be used to traverse, manipulate, and solve problems efficiently. 
Understanding how to use recursion can lead to elegant and concise solutions.
</p>

<ul>
<li><strong>Recursive Traversal:</strong> Recursively traversing a linked list to access or modify its elements.</li>
<li><strong>Recursive Reversal:</strong> Reversing a linked list using a recursive approach.</li>
<li><strong>Recursive Search:</strong> Searching for an element in a linked list using recursion.</li>
<li><strong>Recursive Deletion:</strong> Deleting a node from a linked list using recursion.</li>
<li><strong>Recursive Merging:</strong> Merging two sorted linked lists using a recursive approach.</li>
</ul>`,
  codeExample: `# Recursive Traversal
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

def print_list_recursive(node):
    if node is None:
        return
    print(node.value)
    print_list_recursive(node.next)

head = Node(1)
head.next = Node(2)
head.next.next = Node(3)
print_list_recursive(head)  # Output: 1 2 3

# Recursive Reversal
def reverse_list_recursive(node, prev=None):
    if node is None:
        return prev
    next_node = node.next
    node.next = prev
    return reverse_list_recursive(next_node, node)

head = Node(1)
head.next = Node(2)
head.next.next = Node(3)
new_head = reverse_list_recursive(head)
print_list_recursive(new_head)  # Output: 3 2 1

# Recursive Search
def search_recursive(node, target):
    if node is None:
        return False
    if node.value == target:
        return True
    return search_recursive(node.next, target)

head = Node(1)
head.next = Node(2)
head.next.next = Node(3)
print(search_recursive(head, 2))  # Output: True
print(search_recursive(head, 4))  # Output: False

# Recursive Deletion
def delete_node_recursive(node, target):
    if node is None:
        return None
    if node.value == target:
        return node.next
    node.next = delete_node_recursive(node.next, target)
    return node

head = Node(1)
head.next = Node(2)
head.next.next = Node(3)
head = delete_node_recursive(head, 2)
print_list_recursive(head)  # Output: 1 3

# Recursive Merging
def merge_lists_recursive(l1, l2):
    if l1 is None:
        return l2
    if l2 is None:
        return l1
    if l1.value < l2.value:
        l1.next = merge_lists_recursive(l1.next, l2)
        return l1
    else:
        l2.next = merge_lists_recursive(l1, l2.next)
        return l2

l1 = Node(1)
l1.next = Node(3)
l1.next.next = Node(5)

l2 = Node(2)
l2.next = Node(4)
l2.next.next = Node(6)

merged_head = merge_lists_recursive(l1, l2)
print_list_recursive(merged_head)  # Output: 1 2 3 4 5 6`,
  exercises: [
    {
      prompt: 'Write a recursive function to print the values of a linked list in reverse order.',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

def print_reverse_recursive(node):
    # Your code here

head = Node(1)
head.next = Node(2)
head.next.next = Node(3)`,
      solution: `class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

def print_reverse_recursive(node):
    if node is None:
        return
    print_reverse_recursive(node.next)
    print(node.value)

head = Node(1)
head.next = Node(2)
head.next.next = Node(3)
print_reverse_recursive(head)`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Write a recursive function to find the length of a linked list.',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

def length_recursive(node):
    # Your code here

head = Node(1)
head.next = Node(2)
head.next.next = Node(3)`,
      solution: `class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

def length_recursive(node):
    if node is None:
        return 0
    return 1 + length_recursive(node.next)

head = Node(1)
head.next = Node(2)
head.next.next = Node(3)
print(length_recursive(head))  # Output: 3`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a common use case for recursion in linked lists?',
      options: ['Traversal', 'Reversal', 'Search', 'All of the above'],
      correctAnswer: 3,
      explanations: [
        'This is correct. Recursion is often used for traversing linked lists.',
        'This is correct. Recursion can be used to reverse linked lists.',
        'This is correct. Recursion can be used to search for elements in linked lists.',
        'This is correct. All of the above are common use cases for recursion in linked lists.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the base case for a recursive function that traverses a linked list?',
      options: ['node is None', 'node.next is None', 'node.value is None', 'None of the above'],
      correctAnswer: 0,
      explanations: [
        'This is correct. The base case for a recursive function that traverses a linked list is when the node is None.',
        'This is incorrect. The base case is when the node is None, not when node.next is None.',
        'This is incorrect. The base case is when the node is None, not when node.value is None.',
        'This is incorrect. The correct base case is when the node is None.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const inPlaceOperationsData: LessonContent = {
  title: 'In-place Operations',
  content: `<p>
In-place operations are techniques that modify data structures directly without requiring additional space. 
This is particularly useful for linked lists, where memory efficiency is often a concern. 
By performing operations in place, you can save memory and improve performance.
</p>

<ul>
<li><strong>In-place Reversal:</strong> Reversing a linked list without using extra space.</li>
<li><strong>In-place Deletion:</strong> Deleting a node from a linked list without using extra space.</li>
<li><strong>In-place Merging:</strong> Merging two sorted linked lists without using extra space.</li>
<li><strong>In-place Partitioning:</strong> Partitioning a linked list around a value without using extra space.</li>
<li><strong>In-place Rotation:</strong> Rotating a linked list by a certain number of positions without using extra space.</li>
</ul>`,
  codeExample: `# In-place Reversal
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

def reverse_list_in_place(head):
    prev = None
    current = head
    while current is not None:
        next_node = current.next
        current.next = prev
        prev = current
        current = next_node
    return prev

head = Node(1)
head.next = Node(2)
head.next.next = Node(3)
new_head = reverse_list_in_place(head)
print_list_recursive(new_head)  # Output: 3 2 1

# In-place Deletion
def delete_node_in_place(head, target):
    if head is None:
        return None
    if head.value == target:
        return head.next
    current = head
    while current.next is not None:
        if current.next.value == target:
            current.next = current.next.next
            return head
        current = current.next
    return head

head = Node(1)
head.next = Node(2)
head.next.next = Node(3)
head = delete_node_in_place(head, 2)
print_list_recursive(head)  # Output: 1 3

# In-place Merging
def merge_lists_in_place(l1, l2):
    if l1 is None:
        return l2
    if l2 is None:
        return l1
    if l1.value < l2.value:
        l1.next = merge_lists_in_place(l1.next, l2)
        return l1
    else:
        l2.next = merge_lists_in_place(l1, l2.next)
        return l2

l1 = Node(1)
l1.next = Node(3)
l1.next.next = Node(5)

l2 = Node(2)
l2.next = Node(4)
l2.next.next = Node(6)

merged_head = merge_lists_in_place(l1, l2)
print_list_recursive(merged_head)  # Output: 1 2 3 4 5 6

# In-place Partitioning
def partition_list_in_place(head, x):
    before = before_head = Node(0)
    after = after_head = Node(0)
    
    while head is not None:
        if head.value < x:
            before.next = head
            before = before.next
        else:
            after.next = head
            after = after.next
        head = head.next
    
    after.next = None
    before.next = after_head.next
    
    return before_head.next

head = Node(1)
head.next = Node(4)
head.next.next = Node(3)
head.next.next.next = Node(2)
head.next.next.next.next = Node(5)
head.next.next.next.next.next = Node(2)

partitioned_head = partition_list_in_place(head, 3)
print_list_recursive(partitioned_head)  # Output: 1 2 2 4 3 5

# In-place Rotation
def rotate_list_in_place(head, k):
    if head is None or head.next is None:
        return head
    
    length = 1
    tail = head
    while tail.next is not None:
        tail = tail.next
        length += 1
    
    k = k % length
    if k == 0:
        return head
    
    new_tail = head
    for _ in range(length - k - 1):
        new_tail = new_tail.next
    
    new_head = new_tail.next
    new_tail.next = None
    tail.next = head
    
    return new_head

head = Node(1)
head.next = Node(2)
head.next.next = Node(3)
head.next.next.next = Node(4)
head.next.next.next.next = Node(5)

rotated_head = rotate_list_in_place(head, 2)
print_list_recursive(rotated_head)  # Output: 4 5 1 2 3`,
  exercises: [
    {
      prompt: 'Write a function to reverse a linked list in place.',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

def reverse_list_in_place(head):
    # Your code here

head = Node(1)
head.next = Node(2)
head.next.next = Node(3)`,
      solution: `class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

def reverse_list_in_place(head):
    prev = None
    current = head
    while current is not None:
        next_node = current.next
        current.next = prev
        prev = current
        current = next_node
    return prev

head = Node(1)
head.next = Node(2)
head.next.next = Node(3)
new_head = reverse_list_in_place(head)
print_list_recursive(new_head)`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Write a function to delete a node from a linked list in place.',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

def delete_node_in_place(head, target):
    # Your code here

head = Node(1)
head.next = Node(2)
head.next.next = Node(3)`,
      solution: `class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

def delete_node_in_place(head, target):
    if head is None:
        return None
    if head.value == target:
        return head.next
    current = head
    while current.next is not None:
        if current.next.value == target:
            current.next = current.next.next
            return head
        current = current.next
    return head

head = Node(1)
head.next = Node(2)
head.next.next = Node(3)
head = delete_node_in_place(head, 2)
print_list_recursive(head)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is an advantage of performing in-place operations on linked lists?',
      options: ['Improved performance', 'Reduced memory usage', 'Easier to implement', 'All of the above'],
      correctAnswer: 1,
      explanations: [
        'This is correct. In-place operations can improve performance by reducing the need for additional space.',
        'This is correct. In-place operations reduce memory usage by modifying the data structure directly.',
        'This is incorrect. In-place operations can be more complex to implement.',
        'This is incorrect. While in-place operations can improve performance and reduce memory usage, they are not necessarily easier to implement.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the primary disadvantage of performing in-place operations on linked lists?',
      options: ['Increased memory usage', 'Increased complexity', 'Decreased performance', 'None of the above'],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. In-place operations reduce memory usage.',
        'This is correct. In-place operations can be more complex to implement.',
        'This is incorrect. In-place operations can improve performance.',
        'This is incorrect. There is a primary disadvantage, which is increased complexity.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const dummyNodeData: LessonContent = {
  title: 'Dummy Node Pattern',
  content: `<p>
The dummy node pattern is a useful technique for simplifying operations on linked lists, especially when dealing with edge cases such as inserting or deleting nodes at the beginning or end of the list. 
By using a dummy node, you can avoid special handling for the head of the list, making your code cleaner and more maintainable.
</p>

<ul>
<li><strong>Dummy Node for Insertion:</strong> Using a dummy node to simplify the insertion of new nodes.</li>
<li><strong>Dummy Node for Deletion:</strong> Using a dummy node to simplify the deletion of nodes.</li>
<li><strong>Dummy Node for Merging:</strong> Using a dummy node to simplify the merging of two linked lists.</li>
<li><strong>Dummy Node for Partitioning:</strong> Using a dummy node to simplify the partitioning of a linked list.</li>
<li><strong>Dummy Node for Reversal:</strong> Using a dummy node to simplify the reversal of a linked list.</li>
</ul>`,
  codeExample: `# Dummy Node for Insertion
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

def insert_node_with_dummy(head, value):
    dummy = Node(0)
    dummy.next = head
    current = dummy
    while current.next is not None and current.next.value < value:
        current = current.next
    new_node = Node(value)
    new_node.next = current.next
    current.next = new_node
    return dummy.next

head = Node(1)
head.next = Node(3)
head.next.next = Node(5)
head = insert_node_with_dummy(head, 2)
print_list_recursive(head)  # Output: 1 2 3 5

# Dummy Node for Deletion
def delete_node_with_dummy(head, target):
    dummy = Node(0)
    dummy.next = head
    current = dummy
    while current.next is not None:
        if current.next.value == target:
            current.next = current.next.next
            return dummy.next
        current = current.next
    return dummy.next

head = Node(1)
head.next = Node(2)
head.next.next = Node(3)
head = delete_node_with_dummy(head, 2)
print_list_recursive(head)  # Output: 1 3

# Dummy Node for Merging
def merge_lists_with_dummy(l1, l2):
    dummy = Node(0)
    current = dummy
    while l1 is not None and l2 is not None:
        if l1.value < l2.value:
            current.next = l1
            l1 = l1.next
        else:
            current.next = l2
            l2 = l2.next
        current = current.next
    if l1 is not None:
        current.next = l1
    else:
        current.next = l2
    return dummy.next

l1 = Node(1)
l1.next = Node(3)
l1.next.next = Node(5)

l2 = Node(2)
l2.next = Node(4)
l2.next.next = Node(6)

merged_head = merge_lists_with_dummy(l1, l2)
print_list_recursive(merged_head)  # Output: 1 2 3 4 5 6

# Dummy Node for Partitioning
def partition_list_with_dummy(head, x):
    dummy_less = Node(0)
    dummy_greater = Node(0)
    less = dummy_less
    greater = dummy_greater
    
    while head is not None:
        if head.value < x:
            less.next = head
            less = less.next
        else:
            greater.next = head
            greater = greater.next
        head = head.next
    
    greater.next = None
    less.next = dummy_greater.next
    
    return dummy_less.next

head = Node(1)
head.next = Node(4)
head.next.next = Node(3)
head.next.next.next = Node(2)
head.next.next.next.next = Node(5)
head.next.next.next.next.next = Node(2)

partitioned_head = partition_list_with_dummy(head, 3)
print_list_recursive(partitioned_head)  # Output: 1 2 2 4 3 5

# Dummy Node for Reversal
def reverse_list_with_dummy(head):
    dummy = Node(0)
    dummy.next = head
    current = dummy.next
    prev = None
    while current is not None:
        next_node = current.next
        current.next = prev
        prev = current
        current = next_node
    dummy.next = prev
    return dummy.next

head = Node(1)
head.next = Node(2)
head.next.next = Node(3)
new_head = reverse_list_with_dummy(head)
print_list_recursive(new_head)  # Output: 3 2 1`,
  exercises: [
    {
      prompt: 'Write a function to insert a node into a sorted linked list using a dummy node.',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

def insert_node_with_dummy(head, value):
    # Your code here

head = Node(1)
head.next = Node(3)
head.next.next = Node(5)`,
      solution: `class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

def insert_node_with_dummy(head, value):
    dummy = Node(0)
    dummy.next = head
    current = dummy
    while current.next is not None and current.next.value < value:
        current = current.next
    new_node = Node(value)
    new_node.next = current.next
    current.next = new_node
    return dummy.next

head = Node(1)
head.next = Node(3)
head.next.next = Node(5)
head = insert_node_with_dummy(head, 2)
print_list_recursive(head)`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Write a function to delete a node from a linked list using a dummy node.',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

def delete_node_with_dummy(head, target):
    # Your code here

head = Node(1)
head.next = Node(2)
head.next.next = Node(3)`,
      solution: `class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

def delete_node_with_dummy(head, target):
    dummy = Node(0)
    dummy.next = head
    current = dummy
    while current.next is not None:
        if current.next.value == target:
            current.next = current.next.next
            return dummy.next
        current = current.next
    return dummy.next

head = Node(1)
head.next = Node(2)
head.next.next = Node(3)
head = delete_node_with_dummy(head, 2)
print_list_recursive(head)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary advantage of using a dummy node in linked list operations?',
      options: ['Improved performance', 'Simplified edge case handling', 'Reduced memory usage', 'None of the above'],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. While dummy nodes can improve performance, their primary advantage is simplified edge case handling.',
        'This is correct. Dummy nodes simplify edge case handling, such as inserting or deleting nodes at the beginning of the list.',
        'This is incorrect. Dummy nodes do not necessarily reduce memory usage.',
        'This is incorrect. The primary advantage is simplified edge case handling.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'When should you use a dummy node in linked list operations?',
      options: ['When memory usage is a concern', 'When dealing with edge cases', 'When performance is a concern', 'All of the above'],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. Dummy nodes do not necessarily reduce memory usage.',
        'This is correct. Dummy nodes are particularly useful when dealing with edge cases.',
        'This is incorrect. While dummy nodes can improve performance, their primary use is for edge cases.',
        'This is incorrect. The primary use of dummy nodes is for edge cases, not necessarily for memory usage or performance.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const listRotationData: LessonContent = {
  title: 'List Rotation',
  content: `<p>
List rotation is a common operation in programming, where elements of a list are shifted to the left or right by a specified number of positions. 
This operation can be particularly useful in scenarios involving circular buffers, data structures, and algorithmic problems. 
Understanding how to rotate a list efficiently can lead to more optimized solutions.
</p>

<ul>
<li><strong>Left Rotation:</strong> Shifting elements to the left by K positions.</li>
<li><strong>Right Rotation:</strong> Shifting elements to the right by K positions.</li>
<li><strong>Circular Rotation:</strong> Rotating the list such that the elements wrap around the list.</li>
<li><strong>In-place Rotation:</strong> Rotating the list without using extra space.</li>
<li><strong>Rotation by Reversal:</strong> Rotating the list using the reversal technique.</li>
</ul>`,
  codeExample: `# Left Rotation
def left_rotate(lst, k):
    n = len(lst)
    k = k % n  # To handle cases where k > n
    return lst[k:] + lst[:k]

my_list = [1, 2, 3, 4, 5]
rotated_list = left_rotate(my_list, 2)
print(rotated_list)  # Output: [3, 4, 5, 1, 2]

# Right Rotation
def right_rotate(lst, k):
    n = len(lst)
    k = k % n  # To handle cases where k > n
    return lst[-k:] + lst[:-k]

my_list = [1, 2, 3, 4, 5]
rotated_list = right_rotate(my_list, 2)
print(rotated_list)  # Output: [4, 5, 1, 2, 3]

# Circular Rotation
def circular_rotate(lst, k):
    n = len(lst)
    k = k % n  # To handle cases where k > n
    return lst[-k:] + lst[:-k]

my_list = [1, 2, 3, 4, 5]
rotated_list = circular_rotate(my_list, 2)
print(rotated_list)  # Output: [4, 5, 1, 2, 3]

# In-place Rotation
def rotate_in_place(lst, k):
    n = len(lst)
    k = k % n  # To handle cases where k > n
    lst[:] = lst[-k:] + lst[:-k]

my_list = [1, 2, 3, 4, 5]
rotate_in_place(my_list, 2)
print(my_list)  # Output: [4, 5, 1, 2, 3]

# Rotation by Reversal
def reverse(lst, start, end):
    while start < end:
        lst[start], lst[end] = lst[end], lst[start]
        start += 1
        end -= 1

def rotate_by_reversal(lst, k):
    n = len(lst)
    k = k % n  # To handle cases where k > n
    reverse(lst, 0, k-1)
    reverse(lst, k, n-1)
    reverse(lst, 0, n-1)

my_list = [1, 2, 3, 4, 5]
rotate_by_reversal(my_list, 2)
print(my_list)  # Output: [3, 4, 5, 1, 2]`,
  exercises: [
    {
      prompt: 'Write a function to rotate a list to the left by K positions.',
      initialCode: `# Write your solution here
def left_rotate(lst, k):
    # Your code here

my_list = [1, 2, 3, 4, 5]`,
      solution: `def left_rotate(lst, k):
    n = len(lst)
    k = k % n  # To handle cases where k > n
    return lst[k:] + lst[:k]

my_list = [1, 2, 3, 4, 5]
rotated_list = left_rotate(my_list, 2)
print(rotated_list)`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Write a function to rotate a list to the right by K positions.',
      initialCode: `# Write your solution here
def right_rotate(lst, k):
    # Your code here

my_list = [1, 2, 3, 4, 5]`,
      solution: `def right_rotate(lst, k):
    n = len(lst)
    k = k % n  # To handle cases where k > n
    return lst[-k:] + lst[:-k]

my_list = [1, 2, 3, 4, 5]
rotated_list = right_rotate(my_list, 2)
print(rotated_list)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a common use case for list rotation?',
      options: ['Circular buffers', 'Data structures', 'Algorithmic problems', 'All of the above'],
      correctAnswer: 3,
      explanations: [
        'This is correct. List rotation is often used in circular buffers.',
        'This is correct. List rotation is useful in various data structures.',
        'This is correct. List rotation is commonly used in algorithmic problems.',
        'This is correct. All of the above are common use cases for list rotation.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the primary advantage of performing list rotation in place?',
      options: ['Improved performance', 'Reduced memory usage', 'Easier to implement', 'None of the above'],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. While in-place rotation can improve performance, its primary advantage is reduced memory usage.',
        'This is correct. In-place rotation reduces memory usage by modifying the list directly.',
        'This is incorrect. In-place rotation can be more complex to implement.',
        'This is incorrect. The primary advantage of in-place rotation is reduced memory usage.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const listPartitioningData: LessonContent = {
  title: 'List Partitioning',
  content: `<p>
List partitioning is a technique used to divide a list into sublists based on a specified value or condition. 
This operation is particularly useful in sorting algorithms, data preprocessing, and various algorithmic problems. 
Understanding how to partition a list efficiently can lead to more optimized solutions.
</p>

<ul>
<li><strong>Partitioning around a value:</strong> Dividing the list into elements less than, equal to, and greater than a specified value.</li>
<li><strong>Partitioning by condition:</strong> Dividing the list into sublists based on a given condition.</li>
<li><strong>In-place partitioning:</strong> Partitioning the list without using extra space.</li>
<li><strong>QuickSort partitioning:</strong> Partitioning the list as part of the QuickSort algorithm.</li>
<li><strong>Dutch National Flag problem:</strong> Partitioning the list into three sections based on a single value.</li>
</ul>`,
  codeExample: `# Partitioning around a value
def partition_around_value(lst, x):
    less = []
    equal = []
    greater = []
    for num in lst:
        if num < x:
            less.append(num)
        elif num == x:
            equal.append(num)
        else:
            greater.append(num)
    return less + equal + greater

my_list = [3, 5, 2, 1, 4, 5, 6, 7, 8, 9]
partitioned_list = partition_around_value(my_list, 5)
print(partitioned_list)  # Output: [3, 2, 1, 4, 5, 5, 6, 7, 8, 9]

# Partitioning by condition
def partition_by_condition(lst, condition):
    true_list = []
    false_list = []
    for num in lst:
        if condition(num):
            true_list.append(num)
        else:
            false_list.append(num)
    return true_list, false_list

my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
even, odd = partition_by_condition(my_list, lambda x: x % 2 == 0)
print(even)  # Output: [2, 4, 6, 8]
print(odd)  # Output: [1, 3, 5, 7, 9]

# In-place partitioning
def partition_in_place(lst, x):
    i = 0
    j = len(lst) - 1
    while i <= j:
        if lst[i] < x:
            i += 1
        elif lst[j] >= x:
            j -= 1
        else:
            lst[i], lst[j] = lst[j], lst[i]
            i += 1
            j -= 1
    return lst

my_list = [3, 5, 2, 1, 4, 5, 6, 7, 8, 9]
partitioned_list = partition_in_place(my_list, 5)
print(partitioned_list)  # Output: [3, 2, 1, 4, 5, 5, 6, 7, 8, 9]

# QuickSort partitioning
def quicksort_partition(lst, low, high):
    pivot = lst[high]
    i = low - 1
    for j in range(low, high):
        if lst[j] <= pivot:
            i += 1
            lst[i], lst[j] = lst[j], lst[i]
    lst[i + 1], lst[high] = lst[high], lst[i + 1]
    return i + 1

my_list = [3, 5, 2, 1, 4, 5, 6, 7, 8, 9]
pivot_index = quicksort_partition(my_list, 0, len(my_list) - 1)
print(my_list)  # Output: [3, 2, 1, 4, 5, 5, 6, 7, 8, 9]
print(pivot_index)  # Output: 4

# Dutch National Flag problem
def dutch_national_flag(lst, x):
    low = 0
    mid = 0
    high = len(lst) - 1
    while mid <= high:
        if lst[mid] < x:
            lst[low], lst[mid] = lst[mid], lst[low]
            low += 1
            mid += 1
        elif lst[mid] == x:
            mid += 1
        else:
            lst[mid], lst[high] = lst[high], lst[mid]
            high -= 1
    return lst

my_list = [3, 5, 2, 1, 4, 5, 6, 7, 8, 9]
partitioned_list = dutch_national_flag(my_list, 5)
print(partitioned_list)  # Output: [3, 2, 1, 4, 5, 5, 6, 7, 8, 9]`,
  exercises: [
    {
      prompt: 'Write a function to partition a list around a given value.',
      initialCode: `# Write your solution here
def partition_around_value(lst, x):
    # Your code here

my_list = [3, 5, 2, 1, 4, 5, 6, 7, 8, 9]`,
      solution: `def partition_around_value(lst, x):
    less = []
    equal = []
    greater = []
    for num in lst:
        if num < x:
            less.append(num)
        elif num == x:
            equal.append(num)
        else:
            greater.append(num)
    return less + equal + greater

my_list = [3, 5, 2, 1, 4, 5, 6, 7, 8, 9]
partitioned_list = partition_around_value(my_list, 5)
print(partitioned_list)`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Write a function to partition a list into even and odd numbers.',
      initialCode: `# Write your solution here
def partition_by_condition(lst, condition):
    # Your code here

my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9]`,
      solution: `def partition_by_condition(lst, condition):
    true_list = []
    false_list = []
    for num in lst:
        if condition(num):
            true_list.append(num)
        else:
            false_list.append(num)
    return true_list, false_list

my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
even, odd = partition_by_condition(my_list, lambda x: x % 2 == 0)
print(even)  # Output: [2, 4, 6, 8]
print(odd)  # Output: [1, 3, 5, 7, 9]`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a common use case for list partitioning?',
      options: ['Sorting algorithms', 'Data preprocessing', 'Algorithmic problems', 'All of the above'],
      correctAnswer: 3,
      explanations: [
        'This is correct. List partitioning is often used in sorting algorithms.',
        'This is correct. List partitioning is useful in data preprocessing.',
        'This is correct. List partitioning is commonly used in algorithmic problems.',
        'This is correct. All of the above are common use cases for list partitioning.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the primary advantage of performing list partitioning in place?',
      options: ['Improved performance', 'Reduced memory usage', 'Easier to implement', 'None of the above'],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. While in-place partitioning can improve performance, its primary advantage is reduced memory usage.',
        'This is correct. In-place partitioning reduces memory usage by modifying the list directly.',
        'This is incorrect. In-place partitioning can be more complex to implement.',
        'This is incorrect. The primary advantage of in-place partitioning is reduced memory usage.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const listFlatteningData: LessonContent = {
  title: 'Flattening Lists',
  content: `<p>
Flattening lists is a technique used to convert a nested list (a list of lists) into a single, flat list. 
This operation is particularly useful in data preprocessing, algorithmic problems, and various data structures. 
Understanding how to flatten a list efficiently can lead to more optimized solutions.
</p>

<ul>
<li><strong>Single-level flattening:</strong> Converting a list of lists into a single list.</li>
<li><strong>Multi-level flattening:</strong> Converting a deeply nested list into a single list.</li>
<li><strong>Recursive flattening:</strong> Flattening a list using a recursive approach.</li>
<li><strong>Iterative flattening:</strong> Flattening a list using an iterative approach.</li>
<li><strong>Flattening with generators:</strong> Flattening a list using Python generators.</li>
</ul>`,
  codeExample: `# Single-level flattening
def flatten_single_level(lst):
    flat_list = []
    for sublist in lst:
        for item in sublist:
            flat_list.append(item)
    return flat_list

nested_list = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flat_list = flatten_single_level(nested_list)
print(flat_list)  # Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Multi-level flattening
def flatten_multi_level(lst):
    flat_list = []
    for item in lst:
        if isinstance(item, list):
            flat_list.extend(flatten_multi_level(item))
        else:
            flat_list.append(item)
    return flat_list

nested_list = [[1, [2, 3]], [4, [5, [6, 7]]], [8, 9]]
flat_list = flatten_multi_level(nested_list)
print(flat_list)  # Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Recursive flattening
def flatten_recursive(lst):
    if isinstance(lst, list):
        if len(lst) == 0:
            return []
        first, rest = lst[0], lst[1:]
        return flatten_recursive(first) + flatten_recursive(rest)
    else:
        return [lst]

nested_list = [[1, [2, 3]], [4, [5, [6, 7]]], [8, 9]]
flat_list = flatten_recursive(nested_list)
print(flat_list)  # Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Iterative flattening
def flatten_iterative(lst):
    stack = [lst]
    flat_list = []
    while stack:
        item = stack.pop()
        if isinstance(item, list):
            stack.extend(item)
        else:
            flat_list.append(item)
    return flat_list[::-1]

nested_list = [[1, [2, 3]], [4, [5, [6, 7]]], [8, 9]]
flat_list = flatten_iterative(nested_list)
print(flat_list)  # Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Flattening with generators
def flatten_generator(lst):
    for item in lst:
        if isinstance(item, list):
            yield from flatten_generator(item)
        else:
            yield item

nested_list = [[1, [2, 3]], [4, [5, [6, 7]]], [8, 9]]
flat_list = list(flatten_generator(nested_list))
print(flat_list)  # Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]`,
  exercises: [
    {
      prompt: 'Write a function to flatten a single-level nested list.',
      initialCode: `# Write your solution here
def flatten_single_level(lst):
    # Your code here

nested_list = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]`,
      solution: `def flatten_single_level(lst):
    flat_list = []
    for sublist in lst:
        for item in sublist:
            flat_list.append(item)
    return flat_list

nested_list = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flat_list = flatten_single_level(nested_list)
print(flat_list)`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Write a function to flatten a multi-level nested list.',
      initialCode: `# Write your solution here
def flatten_multi_level(lst):
    # Your code here

nested_list = [[1, [2, 3]], [4, [5, [6, 7]]], [8, 9]]`,
      solution: `def flatten_multi_level(lst):
    flat_list = []
    for item in lst:
        if isinstance(item, list):
            flat_list.extend(flatten_multi_level(item))
        else:
            flat_list.append(item)
    return flat_list

nested_list = [[1, [2, 3]], [4, [5, [6, 7]]], [8, 9]]
flat_list = flatten_multi_level(nested_list)
print(flat_list)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a common use case for list flattening?',
      options: ['Data preprocessing', 'Algorithmic problems', 'Data structures', 'All of the above'],
      correctAnswer: 3,
      explanations: [
        'This is correct. List flattening is often used in data preprocessing.',
        'This is correct. List flattening is useful in algorithmic problems.',
        'This is correct. List flattening is commonly used in data structures.',
        'This is correct. All of the above are common use cases for list flattening.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the primary advantage of using a generator for list flattening?',
      options: ['Improved performance', 'Reduced memory usage', 'Easier to implement', 'None of the above'],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. While generators can improve performance, their primary advantage is reduced memory usage.',
        'This is correct. Generators reduce memory usage by yielding items one at a time.',
        'This is incorrect. Generators can be more complex to implement.',
        'This is incorrect. The primary advantage of using a generator for list flattening is reduced memory usage.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const stackImplementationData: LessonContent = {
  title: 'Stack Implementation',
  content: `<p>
Stacks are a fundamental data structure that follows the Last In, First Out (LIFO) principle. 
They are commonly used in various algorithms and applications, such as expression evaluation, backtracking, and more. 
Implementing a stack using a linked list allows for dynamic resizing and efficient push and pop operations.
</p>

<ul>
<li><strong>Basic Structure:</strong> Understanding the basic structure of a stack implemented using a linked list.</li>
<li><strong>Push Operation:</strong> Adding an element to the top of the stack.</li>
<li><strong>Pop Operation:</strong> Removing an element from the top of the stack.</li>
<li><strong>Peek Operation:</strong> Viewing the top element of the stack without removing it.</li>
<li><strong>IsEmpty Operation:</strong> Checking if the stack is empty.</li>
</ul>`,
  codeExample: `# Basic Structure
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class Stack:
    def __init__(self):
        self.top = None

# Push Operation
def push(self, value):
    new_node = Node(value)
    new_node.next = self.top
    self.top = new_node

# Pop Operation
def pop(self):
    if self.top is None:
        raise Exception("Stack is empty")
    value = self.top.value
    self.top = self.top.next
    return value

# Peek Operation
def peek(self):
    if self.top is None:
        raise Exception("Stack is empty")
    return self.top.value

# IsEmpty Operation
def is_empty(self):
    return self.top is None

# Example Usage
stack = Stack()
stack.push(1)
stack.push(2)
stack.push(3)
print(stack.peek())  # Output: 3
print(stack.pop())  # Output: 3
print(stack.peek())  # Output: 2
print(stack.is_empty())  # Output: False`,
  exercises: [
    {
      prompt: 'Implement the push operation for a stack using a linked list.',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class Stack:
    def __init__(self):
        self.top = None

    def push(self, value):
        # Your code here

stack = Stack()`,
      solution: `class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class Stack:
    def __init__(self):
        self.top = None

    def push(self, value):
        new_node = Node(value)
        new_node.next = self.top
        self.top = new_node

stack = Stack()
stack.push(1)
stack.push(2)
stack.push(3)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Implement the pop operation for a stack using a linked list.',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class Stack:
    def __init__(self):
        self.top = None

    def pop(self):
        # Your code here

stack = Stack()
stack.push(1)
stack.push(2)
stack.push(3)`,
      solution: `class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class Stack:
    def __init__(self):
        self.top = None

    def pop(self):
        if self.top is None:
            raise Exception("Stack is empty")
        value = self.top.value
        self.top = self.top.next
        return value

stack = Stack()
stack.push(1)
stack.push(2)
stack.push(3)
print(stack.pop())  # Output: 3`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a common use case for stacks?',
      options: ['Expression evaluation', 'Backtracking', 'Function call management', 'All of the above'],
      correctAnswer: 3,
      explanations: [
        'This is correct. Stacks are used for expression evaluation.',
        'This is correct. Stacks are used for backtracking.',
        'This is correct. Stacks are used for function call management.',
        'This is correct. All of the above are common use cases for stacks.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What is the primary advantage of implementing a stack using a linked list?',
      options: ['Dynamic resizing', 'Efficient push and pop operations', 'Both of the above', 'None of the above'],
      correctAnswer: 2,
      explanations: [
        'This is correct. Linked lists allow for dynamic resizing.',
        'This is correct. Linked lists allow for efficient push and pop operations.',
        'This is correct. Both dynamic resizing and efficient push and pop operations are advantages.',
        'This is incorrect. Both dynamic resizing and efficient push and pop operations are advantages.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const queueImplementationData: LessonContent = {
  title: 'Queue Implementation',
  content: `<p>
Queues are a fundamental data structure that follows the First In, First Out (FIFO) principle. 
They are commonly used in various algorithms and applications, such as task scheduling, breadth-first search, and more. 
Implementing a queue using a linked list allows for dynamic resizing and efficient enqueue and dequeue operations.
</p>

<ul>
<li><strong>Basic Structure:</strong> Understanding the basic structure of a queue implemented using a linked list.</li>
<li><strong>Enqueue Operation:</strong> Adding an element to the end of the queue.</li>
<li><strong>Dequeue Operation:</strong> Removing an element from the front of the queue.</li>
<li><strong>Peek Operation:</strong> Viewing the front element of the queue without removing it.</li>
<li><strong>IsEmpty Operation:</strong> Checking if the queue is empty.</li>
</ul>`,
  codeExample: `# Basic Structure
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class Queue:
    def __init__(self):
        self.front = None
        self.rear = None

# Enqueue Operation
def enqueue(self, value):
    new_node = Node(value)
    if self.rear is None:
        self.front = self.rear = new_node
    else:
        self.rear.next = new_node
        self.rear = new_node

# Dequeue Operation
def dequeue(self):
    if self.front is None:
        raise Exception("Queue is empty")
    value = self.front.value
    self.front = self.front.next
    if self.front is None:
        self.rear = None
    return value

# Peek Operation
def peek(self):
    if self.front is None:
        raise Exception("Queue is empty")
    return self.front.value

# IsEmpty Operation
def is_empty(self):
    return self.front is None

# Example Usage
queue = Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
print(queue.peek())  # Output: 1
print(queue.dequeue())  # Output: 1
print(queue.peek())  # Output: 2
print(queue.is_empty())  # Output: False`,
  exercises: [
    {
      prompt: 'Implement the enqueue operation for a queue using a linked list.',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class Queue:
    def __init__(self):
        self.front = None
        self.rear = None

    def enqueue(self, value):
        # Your code here

queue = Queue()`,
      solution: `class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class Queue:
    def __init__(self):
        self.front = None
        self.rear = None

    def enqueue(self, value):
        new_node = Node(value)
        if self.rear is None:
            self.front = self.rear = new_node
        else:
            self.rear.next = new_node
            self.rear = new_node

queue = Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Implement the dequeue operation for a queue using a linked list.',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class Queue:
    def __init__(self):
        self.front = None
        self.rear = None

    def dequeue(self):
        # Your code here

queue = Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)`,
      solution: `class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class Queue:
    def __init__(self):
        self.front = None
        self.rear = None

    def dequeue(self):
        if self.front is None:
            raise Exception("Queue is empty")
        value = self.front.value
        self.front = self.front.next
        if self.front is None:
            self.rear = None
        return value

queue = Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
print(queue.dequeue())  # Output: 1`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a common use case for queues?',
      options: ['Task scheduling', 'Breadth-first search', 'Event handling', 'All of the above'],
      correctAnswer: 3,
      explanations: [
        'This is correct. Queues are used for task scheduling.',
        'This is correct. Queues are used for breadth-first search.',
        'This is correct. Queues are used for event handling.',
        'This is correct. All of the above are common use cases for queues.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What is the primary advantage of implementing a queue using a linked list?',
      options: ['Dynamic resizing', 'Efficient enqueue and dequeue operations', 'Both of the above', 'None of the above'],
      correctAnswer: 2,
      explanations: [
        'This is correct. Linked lists allow for dynamic resizing.',
        'This is correct. Linked lists allow for efficient enqueue and dequeue operations.',
        'This is correct. Both dynamic resizing and efficient enqueue and dequeue operations are advantages.',
        'This is incorrect. Both dynamic resizing and efficient enqueue and dequeue operations are advantages.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const lruCacheData: LessonContent = {
  title: 'LRU Cache',
  content: `<p>
LRU (Least Recently Used) Cache is a caching strategy that removes the least recently used items first when the cache reaches its capacity. 
This strategy is commonly used in memory management and data retrieval systems to maintain efficient access to frequently used data. 
Implementing an LRU cache using a linked list allows for efficient tracking of the order of access and quick removal of the least recently used item.
</p>

<ul>
<li><strong>Basic Structure:</strong> Understanding the basic structure of an LRU cache implemented using a linked list.</li>
<li><strong>Get Operation:</strong> Retrieving an item from the cache and updating its position.</li>
<li><strong>Put Operation:</strong> Adding an item to the cache and evicting the least recently used item if necessary.</li>
<li><strong>Doubly Linked List:</strong> Using a doubly linked list to maintain the order of access.</li>
<li><strong>Hash Map:</strong> Using a hash map to quickly access cache items by key.</li>
</ul>`,
  codeExample: `# Basic Structure
class Node:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.prev = None
        self.next = None

class LRUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = {}
        self.head = Node(None, None)
        self.tail = Node(None, None)
        self.head.next = self.tail
        self.tail.prev = self.head

# Get Operation
def get(self, key):
    if key in self.cache:
        node = self.cache[key]
        self._remove(node)
        self._add(node)
        return node.value
    return -1

# Put Operation
def put(self, key, value):
    if key in self.cache:
        self._remove(self.cache[key])
    node = Node(key, value)
    self._add(node)
    self.cache[key] = node
    if len(self.cache) > self.capacity:
        node_to_remove = self.head.next
        self._remove(node_to_remove)
        del self.cache[node_to_remove.key]

# Doubly Linked List Operations
def _remove(self, node):
    prev_node = node.prev
    next_node = node.next
    prev_node.next = next_node
    next_node.prev = prev_node

def _add(self, node):
    prev_node = self.tail.prev
    prev_node.next = node
    node.prev = prev_node
    node.next = self.tail
    self.tail.prev = node

# Example Usage
lru_cache = LRUCache(capacity=2)
lru_cache.put(1, 1)
lru_cache.put(2, 2)
print(lru_cache.get(1))  # Output: 1
lru_cache.put(3, 3)
print(lru_cache.get(2))  # Output: -1
lru_cache.put(4, 4)
print(lru_cache.get(1))  # Output: -1
print(lru_cache.get(3))  # Output: 3
print(lru_cache.get(4))  # Output: 4`,
  exercises: [
    {
      prompt: 'Implement the get operation for an LRU cache using a linked list.',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.prev = None
        self.next = None

class LRUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = {}
        self.head = Node(None, None)
        self.tail = Node(None, None)
        self.head.next = self.tail
        self.tail.prev = self.head

    def get(self, key):
        # Your code here

    def _remove(self, node):
        prev_node = node.prev
        next_node = node.next
        prev_node.next = next_node
        next_node.prev = prev_node

    def _add(self, node):
        prev_node = self.tail.prev
        prev_node.next = node
        node.prev = prev_node
        node.next = self.tail
        self.tail.prev = node

lru_cache = LRUCache(capacity=2)
lru_cache.put(1, 1)
lru_cache.put(2, 2)`,
      solution: `class Node:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.prev = None
        self.next = None

class LRUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = {}
        self.head = Node(None, None)
        self.tail = Node(None, None)
        self.head.next = self.tail
        self.tail.prev = self.head

    def get(self, key):
        if key in self.cache:
            node = self.cache[key]
            self._remove(node)
            self._add(node)
            return node.value
        return -1

    def _remove(self, node):
        prev_node = node.prev
        next_node = node.next
        prev_node.next = next_node
        next_node.prev = prev_node

    def _add(self, node):
        prev_node = self.tail.prev
        prev_node.next = node
        node.prev = prev_node
        node.next = self.tail
        self.tail.prev = node

lru_cache = LRUCache(capacity=2)
lru_cache.put(1, 1)
lru_cache.put(2, 2)
print(lru_cache.get(1))  # Output: 1`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement the put operation for an LRU cache using a linked list.',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.prev = None
        self.next = None

class LRUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = {}
        self.head = Node(None, None)
        self.tail = Node(None, None)
        self.head.next = self.tail
        self.tail.prev = self.head

    def put(self, key, value):
        # Your code here

    def _remove(self, node):
        prev_node = node.prev
        next_node = node.next
        prev_node.next = next_node
        next_node.prev = prev_node

    def _add(self, node):
        prev_node = self.tail.prev
        prev_node.next = node
        node.prev = prev_node
        node.next = self.tail
        self.tail.prev = node

lru_cache = LRUCache(capacity=2)`,
      solution: `class Node:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.prev = None
        self.next = None

class LRUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = {}
        self.head = Node(None, None)
        self.tail = Node(None, None)
        self.head.next = self.tail
        self.tail.prev = self.head

    def put(self, key, value):
        if key in self.cache:
            self._remove(self.cache[key])
        node = Node(key, value)
        self._add(node)
        self.cache[key] = node
        if len(self.cache) > self.capacity:
            node_to_remove = self.head.next
            self._remove(node_to_remove)
            del self.cache[node_to_remove.key]

    def _remove(self, node):
        prev_node = node.prev
        next_node = node.next
        prev_node.next = next_node
        next_node.prev = prev_node

    def _add(self, node):
        prev_node = self.tail.prev
        prev_node.next = node
        node.prev = prev_node
        node.next = self.tail
        self.tail.prev = node

lru_cache = LRUCache(capacity=2)
lru_cache.put(1, 1)
lru_cache.put(2, 2)
lru_cache.put(3, 3)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a common use case for LRU cache?',
      options: ['Memory management', 'Data retrieval systems', 'Web page caching', 'All of the above'],
      correctAnswer: 3,
      explanations: [
        'This is correct. LRU cache is used for memory management.',
        'This is correct. LRU cache is used in data retrieval systems.',
        'This is correct. LRU cache is used for web page caching.',
        'This is correct. All of the above are common use cases for LRU cache.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the primary advantage of implementing an LRU cache using a linked list?',
      options: ['Efficient tracking of access order', 'Quick removal of least recently used item', 'Both of the above', 'None of the above'],
      correctAnswer: 2,
      explanations: [
        'This is correct. Linked lists allow for efficient tracking of access order.',
        'This is correct. Linked lists allow for quick removal of the least recently used item.',
        'This is correct. Both efficient tracking of access order and quick removal of the least recently used item are advantages.',
        'This is incorrect. Both efficient tracking of access order and quick removal of the least recently used item are advantages.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const linkedListLessons: Record<string, LessonContent> = {
  'list-basics': linkedListBasicsData,
  'node-structure': nodeStructureData,
  'list-vs-array': listVsArrayData,
  'list-traversal': listTraversalData,
  'insertion': insertionData,
  'deletion': deletionData,
  'searching': searchingData,
  'singly-linked': singlyLinkedData,
  'doubly-linked': doublyLinkedData,
  'circular-linked': circularLinkedData,
  'fast-slow': fastSlowData,
  'multiple-pointers': multiplePointersData,
  'distance-k': distanceKData,
  'cycle-detection': cycleDetectionData,
  'intersection': intersectionData,
  'palindrome': palindromeData,
  'list-reversal': listReversalData,
  'list-sorting': listSortingData,
  'merging-lists': mergingListsData,
  'recursive-operations': recursiveOperationsData,
  'in-place-operations': inPlaceOperationsData,
  'dummy-node': dummyNodeData,
  'list-rotation': listRotationData,
  'list-partitioning': listPartitioningData,
  'list-flattening': listFlatteningData,
  'stack-implementation': stackImplementationData,
  'queue-implementation': queueImplementationData,
  'lru-cache': lruCacheData,
};

export const linkedListLessonsTab: LessonsTab = {
  curriculum: linkedListCurriculum,
  lessons: linkedListLessons,
};
