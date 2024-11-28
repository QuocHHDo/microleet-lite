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
      A <strong>Linked List</strong> is a linear data structure where each element, called a node, contains two main components:
      <ol>
        <li><strong>Data:</strong> This part holds the value or information stored in the node.</li>
        <li><strong>Next Pointer/Reference:</strong> This points to the next node in the sequence. The last node's pointer is typically set to <code>null</code> (or <code>None</code> in Python) indicating the end of the list.
      </ol>
    </p>
    <p>
      Unlike arrays, linked lists do not store elements in contiguous memory locations. This allows for more efficient insertion and deletion operations since there's no need to shift elements as you would in an array.
    </p>
    <h3>Types of Linked Lists</h3>
    <ul>
      <li><strong>Singly Linked List:</strong> Each node contains only a reference to the next node.</li>
      <li><strong>Doubly Linked List:</strong> Each node has references to both the next and previous nodes, allowing traversal in both directions.</li>
      <li><strong>Circular Linked List:</strong> The last node points back to the first node, forming a circle.</li>
    </ul>
  `,
  codeExample: `
# Basic Linked List Node and Structure in Python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

# Creating nodes and linking them to form a singly linked list
node1 = Node(1)
node2 = Node(2)
node3 = Node(3)
node1.next = node2  # Links node1 to node2
node2.next = node3  # Links node2 to node3

# Traverse and print linked list
current = node1
while current:
    print(current.data)  # Output will be: 1, 2, 3
    current = current.next
`,
  exercises: [
    {
      prompt: 'Write a function to count the number of nodes in a singly linked list.',
      initialCode: `
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def count_nodes(head):
    # Write your code here
`,
      solution: `
def count_nodes(head):
    count = 0
    current = head
    while current:
        count += 1
        current = current.next
    return count
`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Write a function to add a new node at the end of a singly linked list.',
      initialCode: `
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def append_to_end(head, value):
    # Write your code here
`,
      solution: `
def append_to_end(head, value):
    new_node = Node(value)
    if not head:
        return new_node
    current = head
    while current.next:
        current = current.next
    current.next = new_node
    return head
`,
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
        "Incorrect. Memory address is not a component of a linked list node.",
        "Correct. Each node in a linked list contains data and a reference to the next node.",
        "Incorrect. This describes part of a Doubly Linked List, not a general node.",
        "Incorrect. A node must contain at least data and a pointer/reference to the next node."
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'Which type of linked list allows traversal in both directions?',
      options: [
        'Singly Linked List',
        'Doubly Linked List',
        'Circular Linked List',
        'All of the above',
      ],
      correctAnswer: 1,
      explanations: [
        "Incorrect. A Singly Linked List only allows traversal in one direction.",
        "Correct. A Doubly Linked List allows traversal in both directions.",
        "Incorrect. While a Circular Linked List can be traversed, it does not inherently allow traversal in both directions unless it is also doubly linked.",
        "Incorrect. Only the Doubly Linked List allows traversal in both directions."
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};
const nodeStructureData: LessonContent = {
  title: 'Node Structure',
  content: `<p>
      The <strong>Node</strong> is the fundamental building block of a linked list. Each node consists of two main components:
      <ol>
        <li><strong>Data:</strong> Stores the value or information.</li>
        <li><strong>Pointer/Reference:</strong> Points to the next node in the sequence, or <code>null</code> if it's the last node.</li>
      </ol>
    </p>
    <h3>Advantages of Nodes in Linked Lists:</h3>
    <ul>
      <li><strong>Dynamic Size:</strong> Memory is allocated as needed, allowing for dynamic resizing without predefined limits.</li>
      <li><strong>Efficient Insertions/Deletions:</strong> Adding or removing elements is more efficient, especially in the middle of the list, as it does not require shifting other elements.</li>
    </ul>
  `,
  codeExample: `# Example of creating a singly linked list
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

head = Node(1)
second = Node(2)
third = Node(3)

head.next = second
second.next = third

# Function to print a singly linked list
def print_linked_list(head):
    current = head
    while current is not None:
        print(current.data, end=" -> ")
        current = current.next
    print("None")

print_linked_list(head)  # Output: 1 -> 2 -> 3 -> None`,
  exercises: [
    {
      prompt: 'Create a function that inserts a new node at the end of a singly linked list.',
      initialCode: `# Implement a function to insert a node at the end of a singly linked list
def insert_at_end(head, data):
    # Add your code here
`,
      solution: `# Expected solution creates a new node and appends it to the end
def insert_at_end(head, data):
    new_node = Node(data)
    if head is None:
        return new_node
    current = head
    while current.next is not None:
        current = current.next
    current.next = new_node
    return head`,
      difficulty: Difficulty.Intermediate
    },
    {
      prompt: 'Create a function that inserts an element at the end of an array.',
      initialCode: `# Implement a function to insert an element at the end of an array
def insert_at_end(array, data):
    # Add your code here
`,
      solution: `# Expected solution appends the element to the array
def insert_at_end(array, data):
    array.append(data)
    return array`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'What is one advantage of using a linked list over an array?',
      options: [
        'Random access to elements',
        'Efficient insertions and deletions',
        'Less memory usage per element',
        'Faster sorting operations',
      ],
      correctAnswer: 1, // Correct option is "Efficient insertions and deletions"
      explanations: [
        'Incorrect. Random access is not efficient in linked lists.',
        'Correct. Linked lists allow for efficient insertions and deletions, especially in the middle of the list.',
        'Incorrect. Both data structures use similar memory per element.',
        'Incorrect. Sorting operations can be slower in linked lists due to lack of random access.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is a disadvantage of using an array compared to a linked list?',
      options: [
        'Less memory usage per element',
        'Faster sorting operations',
        'Dynamic resizing',
        'Inefficient insertions and deletions in the middle',
      ],
      correctAnswer: 3, // Correct option is "Inefficient insertions and deletions in the middle"
      explanations: [
        'Incorrect. Both data structures use similar memory per element.',
        'Incorrect. Sorting operations can be slower in linked lists due to lack of random access.',
        'Incorrect. Arrays have fixed size, making dynamic resizing more complex compared to linked lists.',
        'Correct. In arrays, inserting or deleting elements requires shifting other elements, which is inefficient.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};


const listVsArrayData: LessonContent = {
  title: 'Linked Lists vs Arrays',
  content: `<p>
      Both <strong>linked lists</strong> and <strong>arrays</strong> are fundamental data structures used in computer programming, each with its own set of advantages and disadvantages.
    </p>
    <h3>Advantages of Linked Lists:</h3>
    <ul>
      <li><strong>Dynamic Size:</strong> Memory is allocated as needed, allowing for dynamic resizing.</li>
      <li><strong>Efficient Insertions/Deletions:</strong> Adding or removing elements is more efficient, especially in the middle of the list.</li>
    </ul>
    <h3>Advantages of Arrays:</h3>
    <ul>
      <li><strong>Random Access:</strong> Elements can be accessed directly using an index.</li>
      <li><strong>Memory Efficiency:</strong> Uses less memory per element compared to linked lists due to the absence of pointers/references.</li>
    </ul>
  `,
  codeExample: `# Example of creating and manipulating an array
array = [1, 2, 3, 4, 5]
print(array[2])  # Access element at index 2 (value is 3)

# Example of creating a singly linked list
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

head = Node(1)
second = Node(2)
third = Node(3)
head.next = second
second.next = third

# Function to print a singly linked list
def print_linked_list(head):
    current = head
    while current is not None:
        print(current.data, end=" -> " if current.next else "")
        current = current.next

print_linked_list(head)  # Output: 1 -> 2 -> 3`,
  exercises: [
    {
      prompt: 'Create a function that reverses the elements of an array.',
      initialCode: `# Implement a function to reverse an array
def reverse_array(array):
    # Add your code here`,
      solution: `# Expected solution reverses the array in place or returns a new reversed array
def reverse_array(array):
    return array[::-1]`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Create a function that reverses a singly linked list.',
      initialCode: `# Implement a function to reverse a singly linked list
def reverse_linked_list(head):
    # Add your code here`,
      solution: `# Expected solution reverses the pointers of the linked list
def reverse_linked_list(head):
    prev = None
    current = head
    while current is not None:
        next_node = current.next
        current.next = prev
        prev = current
        current = next_node
    return prev`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'What is a key difference between arrays and linked lists?',
      options: [
        'Arrays are dynamic in size, while linked lists have fixed sizes.',
        'Arrays can only store elements of the same data type, whereas linked lists can store different types.',
        'Linked lists allow for efficient insertions and deletions, especially in the middle of the list, compared to arrays.',
        'Arrays support random access to elements, but linked lists do not.',
      ],
      correctAnswer: 2, // Correct option is "Linked lists allow for efficient insertions and deletions, especially in the middle of the list, compared to arrays."
      explanations: [
        'Incorrect. Arrays can also be dynamic in size if using dynamic array implementations like lists in Python.',
        'Incorrect. Both arrays and linked lists can store elements of different data types if the language allows it.',
        'Correct. Linked lists are designed to make insertions and deletions more efficient, especially when these operations occur at positions other than the end of the list.',
        'Incorrect. Arrays support random access to elements using indices, while linked lists do not.',
      ],
    },
    {
      question: 'Which data structure is generally better for accessing elements by index?',
      options: [
        'Linked Lists',
        'Arrays',
        'Both are equally good',
        'It depends on the context and use case',
      ],
      correctAnswer: 1, // Correct option is "Arrays"
      explanations: [
        'Incorrect. Linked lists do not support random access to elements by index.',
        'Correct. Arrays allow random access to elements using indices, making them ideal for scenarios where accessing elements by position is frequent.',
        'Incorrect. Arrays are generally better for random access compared to linked lists.',
        'Incorrect. While context can matter, arrays are typically more efficient for random access.',
      ],
    },
  ],
};

const listTraversalData: LessonContent = {
  title: 'List Traversal',
  content: `<p>List traversal is a fundamental operation in linked lists, allowing you to visit each node in the list. 
    It is essential for performing various operations such as searching, updating, or deleting nodes. There are two primary methods for traversing a linked list: iterative and recursive.</p>
    <h3>Iterative Traversal</h3>
    <p>Iterative traversal uses a loop to traverse the list. You start from the head node and move to the next node until you reach the end (where the next pointer is null).</p>
    <ul>
      <li><strong>Time Complexity:</strong> O(n), where n is the number of nodes.</li>
      <li><strong>Space Complexity:</strong> O(1), as it uses a constant amount of extra space.</li>
    </ul>
    <h3>Recursive Traversal</h3>
    <p>Recursive traversal involves calling a function repeatedly, passing the next node in each call, until the end of the list is reached.</p>
    <ul>
      <li><strong>Time Complexity:</strong> O(n), where n is the number of nodes.</li>
      <li><strong>Space Complexity:</strong> O(n), due to the recursive call stack.</li>
    </ul>
    <p>Iterative traversal is generally more efficient in terms of space, while recursive traversal can be more elegant but may lead to stack overflow for large lists.</p>
  `,
  codeExample: `
# Iterative Traversal
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
    
    def traverse_iterative(self):
        current = self.head
        while current:
            print(current.data, end=' ')
            current = current.next
        print()

# Recursive Traversal
def traverse_recursive(node):
    if node is None:
        return
    print(node.data, end=' ')
    traverse_recursive(node.next)

# Example Usage
linked_list = LinkedList()
linked_list.head = Node(1)
second_node = Node(2)
third_node = Node(3)
linked_list.head.next = second_node
second_node.next = third_node

# Iterative Traversal
linked_list.traverse_iterative()  # Output: 1 2 3

# Recursive Traversal
traverse_recursive(linked_list.head)  # Output: 1 2 3
`,
  exercises: [
    {
      prompt: 'Create a linked list with three nodes and implement both iterative and recursive traversal methods.',
      initialCode: `
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
    
    def traverse_iterative(self):
        # Implement iterative traversal here
        pass
    
    def traverse_recursive(self, node):
        # Implement recursive traversal here
        pass

# Create a linked list with three nodes
linked_list = LinkedList()
linked_list.head = Node(1)
linked_list.head.next = Node(2)
linked_list.head.next.next = Node(3)
`,
      solution: `
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
    
    def traverse_iterative(self):
        current = self.head
        while current:
            print(current.data, end=' ')
            current = current.next
        print()
    
    def traverse_recursive(self, node):
        if node is None:
            return
        print(node.data, end=' ')
        self.traverse_recursive(node.next)

# Create a linked list with three nodes
linked_list = LinkedList()
linked_list.head = Node(1)
linked_list.head.next = Node(2)
linked_list.head.next.next = Node(3)

# Perform iterative traversal
print("Iterative Traversal:")
linked_list.traverse_iterative()  # Output: 1 2 3

# Perform recursive traversal
print("Recursive Traversal:")
linked_list.traverse_recursive(linked_list.head)  # Output: 1 2 3
`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Compare iterative and recursive traversal methods in terms of time and space complexity, and discuss scenarios where one might be preferred over the other.',
      initialCode: ``,
      solution: `
Iterative Traversal:
- Time Complexity: O(n)
- Space Complexity: O(1)
- Pros: More space-efficient, avoids the risk of stack overflow.
- Cons: Might be less intuitive to implement for some developers.

Recursive Traversal:
- Time Complexity: O(n)
- Space Complexity: O(n)
- Pros: Often simpler and more elegant code.
- Cons: Can lead to stack overflow with large lists, higher memory usage.

Iterative traversal is generally preferred when working with large lists or when memory efficiency is a priority. Recursive traversal can be more straightforward to implement but should be used with caution due to potential stack overflow issues.
`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is the correct way to traverse a linked list iteratively?',
      options: [
        'Using a loop to iterate through the list, updating the current node until the end is reached.',
        'Using a recursive function to visit each node, passing the next node to the function until the end is reached.',
        'Using a stack to push and pop nodes.',
        'None of the above',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct. Iterative traversal uses a loop to traverse the list.',
        'Incorrect. This describes recursive traversal.',
        'Incorrect. Stacks are not typically used for iterative traversal.',
        'Incorrect. Option 0 is correct.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'Which of the following is true about recursive traversal of a linked list?',
      options: [
        'It uses a loop to traverse the list.',
        'It is generally more space-efficient than iterative traversal.',
        'It can lead to stack overflow if the list is very large.',
        'It is not suitable for large lists due to its time complexity.',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Recursive traversal uses function calls, not loops.',
        'Incorrect. Recursive traversal uses more space due to the call stack.',
        'Correct. Deep recursion can cause stack overflow.',
        'Incorrect. Time complexity is similar to iterative traversal.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const insertionData: LessonContent = {
  title: 'Insertion Operations',
  content: `<p>
Insertion operations in linked lists involve adding new nodes at different positions: beginning, end, and middle. Each insertion operation has its own approach, complexity, and use cases.
</p>

<h3>Insertion at the Beginning</h3>
<ul>
  <li>Create a new node.</li>
  <li>Make the new node's next point to the current head.</li>
  <li>Update the head to point to the new node.</li>
</ul>
<p>
Time Complexity: O(1) <br>
Space Complexity: O(1) <br>
Preferred when frequent insertions at the start are required.
</p>

<h3>Insertion at the End</h3>
<ul>
  <li>If the list is empty, make the new node the head.</li>
  <li>Otherwise, traverse the list until the last node.</li>
  <li>Make the last node's next point to the new node.</li>
</ul>
<p>
Time Complexity: O(n) <br>
Space Complexity: O(1) <br>
Useful for appending elements, though inefficient for large lists.
</p>

<h3>Insertion in the Middle</h3>
<ul>
  <li>Traverse the list to find the node before the insertion point.</li>
  <li>Update the pointers to include the new node.</li>
</ul>
<p>
Time Complexity: O(n) <br>
Space Complexity: O(1) <br>
Use when inserting after a specific node or value.
</p>`,
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

    def insert_after_value(self, value, data):
        current = self.head
        while current:
            if current.data == value:
                new_node = Node(data)
                new_node.next = current.next
                current.next = new_node
                return
            current = current.next
        print(f"Value {value} not found in the list.")

# Example usage
linked_list = LinkedList()
linked_list.insert_at_beginning(1)
linked_list.insert_after_value(1, 2)
linked_list.insert_at_end(3)

current = linked_list.head
while current:
    print(current.data, end=' ')
    current = current.next
# Output: 1 2 3`,
  exercises: [
    {
      prompt: 'Create a linked list and insert a node at the beginning. Print the list to verify the insertion.',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def insert_at_beginning(self, data):
        # Implement insertion at the beginning
        pass

linked_list = LinkedList()
linked_list.insert_at_beginning(1)

current = linked_list.head
while current:
    print(current.data, end=' ')
    current = current.next
# Output: 1`,
      solution: `# Solution code here
`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Create a linked list and insert a node at the end. Handle the case when the list is empty.',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def insert_at_end(self, data):
        # Implement insertion at the end
        pass

linked_list = LinkedList()
linked_list.insert_at_end(1)

current = linked_list.head
while current:
    print(current.data, end=' ')
    current = current.next
# Output: 1`,
      solution: `# Solution code here
`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Create a linked list and insert a node after a specific value. Handle the case when the value is not found.',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def insert_after_value(self, value, data):
        # Implement insertion after a specific value
        pass

linked_list = LinkedList()
linked_list.insert_at_beginning(1)
linked_list.insert_after_value(1, 2)

current = linked_list.head
while current:
    print(current.data, end=' ')
    current = current.next
# Output: 1 2`,
      solution: `# Solution code here
`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the time complexity of inserting a node at the beginning of a linked list?',
      options: ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'],
      correctAnswer: 0,
      explanations: [
        'Correct. Inserting at the beginning is a constant time operation.',
        'Incorrect. This is the time complexity for inserting at the end.',
        'Incorrect. This is not applicable for this operation.',
        'Incorrect. This is not applicable for this operation.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'Which insertion method is most efficient for large linked lists when appending elements?',
      options: [
        'Inserting at the beginning',
        'Inserting at the end',
        'Inserting in the middle',
        'All are equally efficient',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct. Inserting at the beginning is O(1), while inserting at the end is O(n).',
        'Incorrect. Inserting at the end is O(n).',
        'Incorrect. Inserting in the middle is O(n).',
        'Incorrect. Inserting at the beginning is more efficient for appending.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'When would you prefer inserting a node in the middle of a linked list?',
      options: [
        'When you need constant time operations',
        'When you need to insert after a specific value',
        'When the list is empty',
        'Never, it is always inefficient',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Constant time operations are for beginning insertions.',
        'Correct. Inserting after a specific value is a middle insertion.',
        'Incorrect. Inserting in an empty list is like inserting at the beginning or end.',
        'Incorrect. It is useful in specific scenarios.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const deletionData: LessonContent = {
  title: 'Deletion Operations',
  content: `<p>
Deletion operations in linked lists involve removing nodes from different positions: beginning, end, and middle. Each deletion operation has its own approach, complexity, and use cases.
</p>

<h3>Delete at the Beginning</h3>
<ul>
  <li>Remove the head node and update the head to the next node.</li>
</ul>
<p>
Time Complexity: O(1) <br>
Space Complexity: O(1) <br>
Preferred when frequent deletions at the start are required.
</p>

<h3>Delete at the End</h3>
<ul>
  <li>Traverse the list to find the second last node.</li>
  <li>Update the second last node's next to null.</li>
</ul>
<p>
Time Complexity: O(n) <br>
Space Complexity: O(1) <br>
Useful for removing the last element, though inefficient for large lists.
</p>

<h3>Delete at the Middle</h3>
<ul>
  <li>Traverse the list to find the node before the one to be deleted.</li>
  <li>Update the pointers to skip the node to be deleted.</li>
</ul>
<p>
Time Complexity: O(n) <br>
Space Complexity: O(1) <br>
Use when deleting a specific node or value.
</p>

<p>
Edge cases include deleting from an empty list or deleting the only node in the list.
</p>`,
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
            print("List is empty.")
            return
        self.head = self.head.next

    def delete_at_end(self):
        if self.head is None:
            print("List is empty.")
            return
        if self.head.next is None:
            self.head = None
            return
        current = self.head
        while current.next.next:
            current = current.next
        current.next = None

    def delete_by_value(self, key):
        if self.head is None:
            print("List is empty.")
            return
        if self.head.data == key:
            self.head = self.head.next
            return
        current = self.head
        while current.next:
            if current.next.data == key:
                current.next = current.next.next
                return
            current = current.next
        print(f"Value {key} not found in the list.")

# Example usage
linked_list = LinkedList()
linked_list.head = Node(1)
linked_list.head.next = Node(2)
linked_list.head.next.next = Node(3)

linked_list.delete_by_value(2)

current = linked_list.head
while current:
    print(current.data, end=' ')
    current = current.next
# Output: 1 3`,
  exercises: [
    {
      prompt: 'Create a linked list and delete a node at the beginning. Handle the case when the list is empty.',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def delete_at_beginning(self):
        # Implement deletion at the beginning
        pass

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
      solution: `# Solution code here
`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Create a linked list and delete a node by value. Handle the case when the value is not found.',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def delete_by_value(self, key):
        # Implement deletion by value
        pass

linked_list = LinkedList()
linked_list.head = Node(1)
linked_list.head.next = Node(2)
linked_list.head.next.next = Node(3)

linked_list.delete_by_value(2)

current = linked_list.head
while current:
    print(current.data, end=' ')
    current = current.next
# Output: 1 3`,
      solution: `# Solution code here
`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the time complexity of deleting a node at the beginning of a linked list?',
      options: ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'],
      correctAnswer: 0,
      explanations: [
        'Correct. Deleting at the beginning is a constant time operation.',
        'Incorrect. This is the time complexity for deleting at the end.',
        'Incorrect. This is not applicable for this operation.',
        'Incorrect. This is not applicable for this operation.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'Which deletion method is most efficient for large linked lists when removing the last element?',
      options: [
        'Deleting at the beginning',
        'Deleting at the end',
        'Deleting in the middle',
        'All are equally efficient',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct. Deleting at the beginning is O(1), while deleting at the end is O(n).',
        'Incorrect. Deleting at the end is O(n).',
        'Incorrect. Deleting in the middle is O(n).',
        'Incorrect. Deleting at the beginning is more efficient for removing the last element if you maintain a tail pointer.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const searchingData: LessonContent = {
  title: 'Searching Elements',
  content: `<p>
Searching elements in linked lists involves finding a specific node based on its data. This operation can be performed iteratively or recursively, each with its own pros and cons.
</p>

<h3>Iterative Search</h3>
<ul>
  <li>Use a loop to iterate through the list, comparing each node's data with the target value.</li>
</ul>
<p>
Time Complexity: O(n) <br>
Space Complexity: O(1) <br>
Preferred for large lists to avoid stack overflow.
</p>

<h3>Recursive Search</h3>
<ul>
  <li>Use a recursive function to compare each node's data with the target value, passing the next node to the function until the end is reached.</li>
</ul>
<p>
Time Complexity: O(n) <br>
Space Complexity: O(n) <br>
Can lead to stack overflow with large lists.
</p>

<p>
Iterative search is generally preferred for large lists due to its lower space complexity.
</p>`,
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
      prompt: 'Create a linked list and search for an element using an iterative approach. Print whether the element is found or not.',
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
      solution: `# Solution code here
`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Create a linked list and search for an element using a recursive approach. Handle the case when the list is empty.',
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
      solution: `# Solution code here
`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is the correct way to search for an element in a linked list iteratively?',
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
      question: 'What is a potential pitfall of using recursive search in linked lists?',
      options: [
        'Increased time complexity',
        'Stack overflow with large lists',
        'Difficulty in implementation',
        'None of the above',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Time complexity is the same as iterative search.',
        'Correct. Recursive search can lead to stack overflow with large lists.',
        'Incorrect. Recursive search can be straightforward to implement.',
        'Incorrect. Stack overflow is a valid concern.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const singlyLinkedData: LessonContent = {
  title: 'Singly Linked Lists',
  content: `<p>
Singly linked lists are a fundamental data structure where each node contains data and a reference (or link) to the next node in the sequence. This type of linked list allows for efficient insertion and deletion operations at the beginning of the list.
</p>

<h3>Node Structure</h3>
<ul>
  <li>Each node contains data and a reference to the next node.</li>
</ul>

<h3>Head and Tail</h3>
<ul>
  <li>The head is the first node, and the tail is the last node (which points to null).</li>
</ul>

<h3>Operations</h3>
<ul>
  <li><strong>Insertion:</strong> Adding a new node at the beginning or end.</li>
  <li><strong>Deletion:</strong> Removing a node from the beginning or a specific position.</li>
  <li><strong>Traversal:</strong> Visiting each node in sequence.</li>
  <li><strong>Searching:</strong> Finding a node with a specific value.</li>
</ul>

<h3>Time and Space Complexities</h3>
<ul>
  <li><strong>Insertion at Beginning:</strong> O(1)</li>
  <li><strong>Insertion at End:</strong> O(n)</li>
  <li><strong>Deletion at Beginning:</strong> O(1)</li>
  <li><strong>Deletion at End:</strong> O(n)</li>
  <li><strong>Traversal:</strong> O(n)</li>
  <li><strong>Searching:</strong> O(n)</li>
</ul>

<p>
Singly linked lists are advantageous in scenarios where frequent insertions and deletions at the beginning are required. They don't need contiguous memory and efficiently handle dynamic data sizes.
</p>`,
  codeExample: `# Singly Linked List with Deletion at Beginning
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

    def delete_at_beginning(self):
        if self.head is None:
            print("List is empty.")
            return
        self.head = self.head.next

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

linked_list.delete_at_beginning()
linked_list.traverse()  # Output: 2 3`,
  exercises: [
    {
      prompt: 'Create a singly linked list and implement a function to delete a node at a specific position.',
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

    def delete_at_position(self, position):
        # Implement deletion at a specific position
        pass

linked_list = SinglyLinkedList()
linked_list.append(1)
linked_list.append(2)
linked_list.append(3)

linked_list.delete_at_position(1)
linked_list.traverse()  # Output: 1 3`,
      solution: `# Solution code here
`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the time complexity of deleting a node at the beginning of a singly linked list?',
      options: ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'],
      correctAnswer: 0,
      explanations: [
        'Correct. Deleting at the beginning is a constant time operation.',
        'Incorrect. This is the time complexity for deleting at the end.',
        'Incorrect. This is not applicable for this operation.',
        'Incorrect. This is not applicable for this operation.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const doublyLinkedData: LessonContent = {
  title: 'Doubly Linked Lists',
  content: `<p>
Doubly linked lists are a type of linked list where each node contains data and references to both the next and previous nodes. This allows for more flexible operations, such as efficient traversal in both directions.
</p>

<h3>Node Structure</h3>
<ul>
  <li>Each node contains data, a reference to the next node, and a reference to the previous node.</li>
</ul>

<h3>Head and Tail</h3>
<ul>
  <li>The head is the first node, and the tail is the last node.</li>
</ul>

<h3>Operations</h3>
<ul>
  <li><strong>Insertion:</strong> Adding a new node at the beginning or end.</li>
  <li><strong>Deletion:</strong> Removing a node from the beginning or a specific position.</li>
  <li><strong>Traversal:</strong> Visiting each node in forward or backward sequence.</li>
  <li><strong>Searching:</strong> Finding a node with a specific value.</li>
</ul>

<h3>Time and Space Complexities</h3>
<ul>
  <li><strong>Insertion at Beginning:</strong> O(1)</li>
  <li><strong>Insertion at End:</strong> O(1) (with tail reference)</li>
  <li><strong>Deletion at Beginning:</strong> O(1)</li>
  <li><strong>Deletion at End:</strong> O(1) (with tail reference)</li>
  <li><strong>Traversal:</strong> O(n)</li>
  <li><strong>Searching:</strong> O(n)</li>
</ul>

<p>
Doubly linked lists are advantageous for scenarios requiring bidirectional traversal, such as browser history navigation. However, they introduce additional memory overhead due to the previous pointer.
</p>`,
  codeExample: `# Doubly Linked List with Insertion and Deletion
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

    def insert_at_beginning(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            return
        new_node.next = self.head
        self.head.prev = new_node
        self.head = new_node

    def delete_at_beginning(self):
        if self.head is None:
            print("List is empty.")
            return
        if self.head.next is None:
            self.head = None
            return
        self.head = self.head.next
        self.head.prev = None

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

linked_list.insert_at_beginning(0)
linked_list.delete_at_beginning()
linked_list.traverse_forward()  # Output: 1 2 3
linked_list.traverse_backward()  # Output: 3 2 1`,
  exercises: [
    {
      prompt: 'Create a doubly linked list and implement a function to delete a node by value.',
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

    def delete_by_value(self, key):
        # Implement deletion by value
        pass

linked_list = DoublyLinkedList()
linked_list.append(1)
linked_list.append(2)
linked_list.append(3)

linked_list.delete_by_value(2)
linked_list.traverse_forward()  # Output: 1 3`,
      solution: `# Solution code here
`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is true about doubly linked lists compared to singly linked lists?',
      options: [
        'Doubly linked lists allow only forward traversal.',
        'Doubly linked lists require less memory.',
        'Doubly linked lists allow both forward and backward traversal.',
        'Doubly linked lists have simpler node structures.',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Doubly linked lists allow both forward and backward traversal.',
        'Incorrect. Doubly linked lists require more memory due to the previous pointer.',
        'Correct. They support bidirectional traversal.',
        'Incorrect. Doubly linked lists have more complex node structures.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const circularLinkedData: LessonContent = {
  title: 'Circular Linked Lists',
  content: `<p>
Circular linked lists are a variation of linked lists where the last node points back to the head node, forming a loop. This structure can be singly or doubly linked. Circular linked lists offer unique advantages, such as simplified traversal and specific use cases in algorithms.
</p>

<ul>
<li><strong>Node Structure:</strong> Each node contains data and a reference to the next node. In a doubly circular linked list, each node also has a reference to the previous node.</li>
<li><strong>Operations:</strong> 
  <ul>
    <li>Insertion: At the beginning, end, or after a specific node.</li>
    <li>Deletion: Removing a node based on data or position.</li>
    <li>Traversal: Circular traversal to visit each node.</li>
    <li>Searching: Finding a node with specific data.</li>
  </ul>
</li>
<li><strong>Use Cases:</strong> 
  <ul>
    <li>Scheduling algorithms for round-robin tasks.</li>
    <li>Circular buffers in data structures.</li>
    <li>Memory management in operating systems.</li>
  </ul>
</li>
</ul>`,
  codeExample: `# Circular Linked List Implementation
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class CircularLinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            new_node.next = self.head
            return
        current = self.head
        while current.next != self.head:
            current = current.next
        current.next = new_node
        new_node.next = self.head

    def insert_at_beginning(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            new_node.next = self.head
            return
        new_node.next = self.head
        current = self.head
        while current.next != self.head:
            current = current.next
        current.next = new_node
        self.head = new_node

    def delete_node(self, key):
        if not self.head:
            return
        if self.head.data == key and self.head.next == self.head:
            self.head = None
            return
        if self.head.data == key:
            current = self.head
            while current.next != self.head:
                current = current.next
            current.next = self.head.next
            self.head = self.head.next
            return
        current = self.head
        prev = None
        while current.next != self.head:
            prev = current
            current = current.next
            if current.data == key:
                prev.next = current.next
                return

    def traverse(self):
        if not self.head:
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
linked_list.insert_at_beginning(0)
linked_list.traverse()  # Output: 0 1 2 3
linked_list.delete_node(2)
linked_list.traverse()  # Output: 0 1 3`,
  exercises: [
    {
      prompt: 'Implement a function to insert a node at the end of a circular linked list.',
      initialCode: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class CircularLinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        # Implement this function
`,
      solution: `def append(self, data):
    new_node = Node(data)
    if not self.head:
        self.head = new_node
        new_node.next = self.head
        return
    current = self.head
    while current.next != self.head:
        current = current.next
    current.next = new_node
    new_node.next = self.head`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Implement a function to delete a node with a specific value from a circular linked list.',
      initialCode: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class CircularLinkedList:
    def __init__(self):
        self.head = None

    def delete_node(self, key):
        # Implement this function
`,
      solution: `def delete_node(self, key):
    if not self.head:
        return
    if self.head.data == key and self.head.next == self.head:
        self.head = None
        return
    if self.head.data == key:
        current = self.head
        while current.next != self.head:
            current = current.next
        current.next = self.head.next
        self.head = self.head.next
        return
    current = self.head
    prev = None
    while current.next != self.head:
        prev = current
        current = current.next
        if current.data == key:
            prev.next = current.next
            return`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary difference between a circular linked list and a linear linked list?',
      options: [
        'Circular linked lists have nodes with only data.',
        'Circular linked lists have nodes with data and next pointers.',
        'Circular linked lists have the last node pointing back to the head.',
        'Circular linked lists do not allow traversal.',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Both have data in nodes.',
        'Incorrect. Both have data and next pointers.',
        'Correct. In circular linked lists, the last node points back to the head, forming a loop.',
        'Incorrect. Circular linked lists allow traversal, typically in a loop.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'Which operation is more efficient in a circular linked list compared to a linear linked list?',
      options: [
        'Insertion at the beginning',
        'Insertion at the end',
        'Traversal to the end',
        'None of the above',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct. Insertion at the beginning can be more efficient as it doesn’t require traversing to the end.',
        'Incorrect. Insertion at the end may require traversing the entire list.',
        'Incorrect. Traversal to the end is similar in both.',
        'Incorrect. The correct answer is A.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const fastSlowData: LessonContent = {
  title: 'Fast and Slow Pointers (Floyd’s Cycle-Finding Algorithm)',
  content: `<p>
The fast and slow pointer technique, often referred to as Floyd’s cycle-finding algorithm, is a pointer algorithm that uses two pointers moving through a sequence at different speeds to detect cycles. This technique is widely used in linked list problems.
</p>

<ul>
<li><strong>Cycle Detection:</strong> 
  <ul>
    <li>Slow pointer moves one step at a time.</li>
    <li>Fast pointer moves two steps at a time.</li>
    <li>If there is a cycle, the fast pointer will eventually catch up to the slow pointer.</li>
  </ul>
</li>
<li><strong>Applications:</strong> 
  <ul>
    <li>Detecting cycles in linked lists.</li>
    <li>Finding the middle element of a linked list.</li>
    <li>Finding the start of the cycle in a linked list.</li>
  </ul>
</li>
</ul>`,
  codeExample: `# Detecting a Cycle in a Linked List
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
            slow = slow.next        # Move slow pointer by one
            fast = fast.next.next   # Move fast pointer by two
            if slow == fast:
                return True  # Cycle detected
        return False  # No cycle found

# Example usage
linked_list = LinkedList()
linked_list.head = Node(1)
linked_list.head.next = Node(2)
linked_list.head.next.next = Node(3)
linked_list.head.next.next.next = linked_list.head  # Creating a cycle

print(linked_list.detect_cycle())  # Output: True`,
  exercises: [
    {
      prompt: 'Implement a function to detect a cycle in a linked list using the fast and slow pointer technique.',
      initialCode: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def detect_cycle(self):
        # Implement this function
`,
      solution: `def detect_cycle(self):
    if not self.head or not self.head.next:
        return False
    slow = self.head
    fast = self.head.next
    while fast and fast.next:
        if slow == fast:
            return True  # Cycle detected
        slow = slow.next        # Move slow pointer by one
        fast = fast.next.next   # Move fast pointer by two
    return False  # No cycle found`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Implement a function to find the middle element of a linked list using the fast and slow pointer technique.',
      initialCode: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def find_middle(self):
        # Implement this function
`,
      solution: `def find_middle(self):
    slow = self.head
    fast = self.head
    while fast and fast.next:
        slow = slow.next        # Move slow pointer by one
        fast = fast.next.next   # Move fast pointer by two
    return slow.data if slow else None`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What happens if there is no cycle in a linked list when using the fast and slow pointer technique?',
      options: [
        'The fast pointer will always catch up to the slow pointer.',
        'The fast pointer will reach the end of the list before the slow pointer.',
        'The slow pointer will reach the end of the list first.',
        'The linked list will become circular.',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Without a cycle, the fast pointer won’t catch up.',
        'Correct. The fast pointer reaches the end before the slow pointer.',
        'Incorrect. The fast pointer moves faster.',
        'Incorrect. The list structure doesn’t change.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'Which of the following is NOT a typical application of the fast and slow pointer technique?',
      options: [
        'Detecting a cycle in a linked list.',
        'Finding the middle element of a linked list.',
        'Reversing a linked list.',
        'Finding the start of a cycle in a linked list.',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Detecting a cycle is a typical application.',
        'Incorrect. Finding the middle element is a typical application.',
        'Correct. Reversing a linked list is not a typical application of this technique.',
        'Incorrect. Finding the start of a cycle is a typical application.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const multiplePointersData: LessonContent = {
  title: 'Multiple Pointers Technique',
  content: `<p>
The multiple pointers technique is a powerful method for solving problems efficiently by using two or more pointers to traverse data structures like arrays and linked lists. This technique is particularly useful for problems involving searching, sorting, and manipulating data.
</p>
<ul>
  <li><strong>Two Pointers:</strong> Often used for finding pairs or reversing arrays.</li>
  <li><strong>Three Pointers:</strong> Useful for more complex operations like linked list reversal.</li>
  <li><strong>Applications:</strong> Finding pairs that sum to a target, removing duplicates, detecting intersections in linked lists.</li>
</ul>
<p>
By maintaining pointers at different positions, we can traverse the data structure in a way that reduces time complexity and optimizes space usage.
</p>`,
  codeExample: `# Finding a Pair that Sums to a Target
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

# Example Usage
arr = [1, 2, 3, 4, 5]
target = 7
print(find_pair_sum(arr, target))  # Output: (2, 5)`,
  exercises: [
    {
      prompt: 'Implement a function to find a triplet in an array that sums to zero using the multiple pointers technique.',
      initialCode: `def find_triplet_sum_zero(arr):
    # Implement this function
`,
      solution: `def find_triplet_sum_zero(arr):
    arr.sort()
    n = len(arr)
    for i in range(n - 2):
        left = i + 1
        right = n - 1
        while left < right:
            current_sum = arr[i] + arr[left] + arr[right]
            if current_sum == 0:
                return (arr[i], arr[left], arr[right])
            elif current_sum < 0:
                left += 1
            else:
                right -= 1
    return None`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Create a function to reverse a linked list using multiple pointers.',
      initialCode: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverseLinkedList(head):
    # Implement this function
`,
      solution: `def reverseLinkedList(head):
    prev = None
    current = head
    while current:
        next_node = current.next
        current.next = prev
        prev = current
        current = next_node
    return prev`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'When is the multiple pointers technique most effective?',
      options: [
        'When dealing with sorted arrays.',
        'When working with linked lists.',
        'Both A and B.',
        'Neither A nor B.',
      ],
      correctAnswer: 2,
      explanations: [
        'Correct. Sorted arrays benefit from two-pointer techniques for pair finding.',
        'Correct. Linked lists can be manipulated efficiently with multiple pointers.',
        'This is the correct answer.',
        'Incorrect. Both A and B are valid scenarios.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What is the time complexity of finding a pair that sums to a target in a sorted array using two pointers?',
      options: [
        'O(1)',
        'O(n)',
        'O(log n)',
        'O(n^2)',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. O(1) is constant time, not applicable here.',
        'Correct. The two-pointer approach traverses the array once.',
        'Incorrect. O(log n) is typical for binary search.',
        'Incorrect. O(n^2) is for nested loops.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};
const distanceKData: LessonContent = {
  title: 'K Distance Apart Technique',
  content: `<p>
The K distance apart technique involves maintaining pointers at a fixed distance to solve problems efficiently. This technique is commonly used in sliding window problems and finding elements at a specific distance in arrays.
</p>
<ul>
  <li><strong>Fixed Distance:</strong> Pointers are maintained at a fixed distance to track subarrays or elements.</li>
  <li><strong>Applications:</strong> Sliding window problems, finding elements at a fixed distance, maximum/minimum subarray sums.</li>
</ul>
<p>
By keeping pointers a fixed distance apart, we can efficiently compute results for subarrays without redundant computations.
</p>`,
  codeExample: `# Finding Elements K Distance Apart
def find_k_distance_elements(arr, k):
    result = []
    for i in range(len(arr) - k):
        if arr[i] == arr[i + k]:
            result.append((arr[i], arr[i + k]))
    return result

# Example Usage
arr = [1, 2, 3, 1, 2, 3]
k = 2
print(find_k_distance_elements(arr, k))  # Output: [(1, 1), (2, 2)]`,
  exercises: [
    {
      prompt: 'Implement a function to find the maximum product of two elements that are k distance apart.',
      initialCode: `def max_product_k_distance(arr, k):
    # Implement this function
`,
      solution: `def max_product_k_distance(arr, k):
    max_product = float('-inf')
    n = len(arr)
    for i in range(n - k):
        product = arr[i] * arr[i + k]
        if product > max_product:
            max_product = product
    return max_product`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Create a function to find the median of subarrays of size k using the sliding window technique.',
      initialCode: `def median_sliding_window(arr, k):
    # Implement this function
`,
      solution: `def median_sliding_window(arr, k):
    from statistics import median
    medians = []
    for i in range(len(arr) - k + 1):
        window = arr[i:i+k]
        med = median(window)
        medians.append(med)
    return medians`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary advantage of using the K distance apart technique in sliding window problems?',
      options: [
        'Reduced time complexity.',
        'Simplified code.',
        'Both A and B.',
        'Neither A nor B.',
      ],
      correctAnswer: 2,
      explanations: [
        'Correct. Time complexity is reduced by avoiding redundant computations.',
        'Correct. The technique simplifies managing window boundaries.',
        'This is the correct answer.',
        'Incorrect. Both A and B are valid advantages.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'Which of the following is a common application of the K distance apart technique?',
      options: [
        'Finding the maximum sum of subarrays of size k.',
        'Detecting duplicates within k distance in an array.',
        'Both A and B.',
        'Neither A nor B.',
      ],
      correctAnswer: 2,
      explanations: [
        'Correct. Sliding window for maximum sum is a common application.',
        'Correct. Finding duplicates within k distance is another application.',
        'This is the correct answer.',
        'Incorrect. Both A and B are valid applications.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const cycleDetectionData: LessonContent = {
  title: 'Cycle Detection in Linked Lists',
  content: `<p>
Cycle detection is crucial for identifying loops in linked lists. Floyd's cycle detection algorithm, also known as the tortoise and hare algorithm, efficiently determines if a cycle exists.
</p>
<p>
The algorithm uses two pointers: one moves slowly (tortoise), and the other moves quickly (hare). If there's a cycle, the hare will eventually meet the tortoise inside the cycle.
</p>
<p>
To find the starting point of the cycle, once a meeting point is found, reset the tortoise to the head and move both pointers one step at a time. They will meet at the cycle's start.
</p>
<ul>
<li>
<strong>Time Complexity:</strong> O(n), where n is the number of nodes.
</li>
<li>
<strong>Space Complexity:</strong> O(1), as it uses constant extra space.
</li>
</ul>`,
  codeExample: `# Cycle Detection and Finding Start Point using Floyd's Algorithm
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def detect_and_find_cycle(self):
        # Phase 1: Detect if a cycle exists
        tortoise = self.head
        hare = self.head
        while hare and hare.next:
            tortoise = tortoise.next       # Move tortoise by one
            hare = hare.next.next         # Move hare by two
            if tortoise == hare:
                break
        # Phase 2: Find the start of the cycle
        if not hare or not hare.next:
            return "No cycle found"
        tortoise = self.head
        while tortoise != hare:
            tortoise = tortoise.next
            hare = hare.next
        return hare.data  # Start of the cycle

# Example usage
linked_list = LinkedList()
node1 = Node(1)
node2 = Node(2)
node3 = Node(3)
node4 = Node(4)
linked_list.head = node1
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node2  # Creating a cycle

print(linked_list.detect_and_find_cycle())  # Output: 2`,
  exercises: [
    {
      prompt: 'Implement Floyd’s cycle detection algorithm from scratch to detect a cycle in a linked list.',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def detect_cycle(self):
        # Implement cycle detection here
        pass

# Create a linked list with a cycle and test your function
`,
      solution: `# Solution for cycle detection
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def detect_cycle(self):
        tortoise = self.head
        hare = self.head
        while hare and hare.next:
            tortoise = tortoise.next       # Move tortoise by one
            hare = hare.next.next         # Move hare by two
            if tortoise == hare:
                return True  # Cycle detected
        return False  # No cycle

# Create a linked list with a cycle
linked_list = LinkedList()
node1 = Node(1)
node2 = Node(2)
node3 = Node(3)
linked_list.head = node1
node1.next = node2
node2.next = node3
node3.next = node2  # Creating a cycle

print(linked_list.detect_cycle())  # Output: True`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Implement a function to find the starting point of a cycle in a linked list if a cycle exists.',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def find_cycle_start(self):
        # Implement cycle start detection here
        pass

# Create a linked list with a cycle and test your function
`,
      solution: `# Solution for finding the start of a cycle
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def find_cycle_start(self):
        tortoise = self.head
        hare = self.head
        # Phase 1: Finding the meeting point
        while hare and hare.next:
            tortoise = tortoise.next       # Move tortoise by one
            hare = hare.next.next         # Move hare by two
            if tortoise == hare:
                break
        # Phase 2: Finding the start of the cycle
        if not hare or not hare.next:
            return "No cycle found"
        tortoise = self.head
        while tortoise != hare:
            tortoise = tortoise.next
            hare = hare.next
        return hare.data  # Start of the cycle

# Create a linked list with a cycle
linked_list = LinkedList()
node1 = Node(1)
node2 = Node(2)
node3 = Node(3)
linked_list.head = node1
node1.next = node2
node2.next = node3
node3.next = node2  # Creating a cycle

print(linked_list.find_cycle_start())  # Output: 2`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which statement correctly describes Floyd’s cycle detection algorithm?',
      options: [
        'It uses two pointers moving at different speeds to detect a cycle.',
        'It detects cycles by counting the number of nodes.',
        'It requires additional memory to track visited nodes.',
        'It only works on sorted linked lists.',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct. Floyd’s algorithm uses a slow and fast pointer to detect cycles.',
        'Incorrect. Counting nodes does not detect cycles effectively.',
        'Incorrect. Floyd’s algorithm uses constant space.',
        'Incorrect. It works on any linked list with or without sorting.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What is the time complexity of Floyd’s cycle detection algorithm?',
      options: [
        'O(1)',
        'O(n)',
        'O(n^2)',
        'O(log n)',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. O(1) is constant time, which is not applicable here.',
        'Correct. The algorithm runs in linear time relative to the number of nodes.',
        'Incorrect. O(n^2) is quadratic time, which is not the case.',
        'Incorrect. O(log n) is logarithmic time, not relevant here.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const intersectionData: LessonContent = {
  title: 'Finding Intersection Point of Two Linked Lists',
  content: `<p>
Finding the intersection point of two linked lists involves identifying the first node they share. This is commonly solved using a two-pass algorithm to handle lists of different lengths.
</p>
<p>
Alternative methods include using a hash set to store nodes of one list and checking for intersections in the other list, though this increases space complexity.
</p>
<ul>
<li>
<strong>Two-pass algorithm:</strong> Determine the lengths of both lists, align the starting points, and traverse to find the intersection.
</li>
<li>
<strong>Time Complexity:</strong> O(n + m), where n and m are the lengths of the two lists.
</li>
<li>
<strong>Space Complexity:</strong> O(1), using constant extra space.
</li>
</ul>`,
  codeExample: `# Finding Intersection Point of Two Linked Lists
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
        # Align starting points
        longer = self.head if len1 > len2 else list2.head
        shorter = list2.head if len1 > len2 else self.head
        diff = abs(len1 - len2)
        for _ in range(diff):
            longer = longer.next
        # Find the intersection
        while longer and shorter:
            if longer == shorter:
                return longer.data
            longer = longer.next
            shorter = shorter.next
        return "No intersection found"

# Example usage
# Creating two lists that intersect at node with data 3
listA = LinkedList()
listA.head = Node(1)
listA.head.next = Node(2)
intersectionNode = Node(3)
listA.head.next.next = intersectionNode

listB = LinkedList()
listB.head = Node(4)
listB.head.next = intersectionNode

print(listA.get_intersection_node(listB))  # Output: 3`,
  exercises: [
    {
      prompt: 'Implement the two-pass algorithm to find the intersection point of two linked lists.',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def get_intersection_node(self, list2):
        # Implement intersection detection here
        pass

# Create two linked lists with an intersection and test your function
`,
      solution: `# Solution for finding intersection point
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
        longer = self.head if len1 > len2 else list2.head
        shorter = list2.head if len1 > len2 else self.head
        diff = abs(len1 - len2)
        for _ in range(diff):
            longer = longer.next
        while longer and shorter:
            if longer == shorter:
                return longer.data
            longer = longer.next
            shorter = shorter.next
        return "No intersection found"

# Create two linked lists with an intersection
listA = LinkedList()
listA.head = Node(1)
listA.head.next = Node(2)
intersectionNode = Node(3)
listA.head.next.next = intersectionNode

listB = LinkedList()
listB.head = Node(4)
listB.head.next = intersectionNode

print(listA.get_intersection_node(listB))  # Output: 3`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Implement a function to merge two sorted linked lists and return the head of the merged list.',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def merge_sorted_lists(self, list2):
        # Implement merging of two sorted lists here
        pass

    def traverse(self):
        current = self.head
        while current:
            print(current.data, end=' ')
            current = current.next
        print()

# Create two sorted linked lists and test your merge function
`,
      solution: `# Solution for merging two sorted linked lists
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
        curr1 = self.head
        curr2 = list2.head
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
        if curr2:
            tail.next = curr2
        return dummy.next

    def traverse(self):
        current = self.head
        while current:
            print(current.data, end=' ')
            current = current.next
        print()

# Create two sorted linked lists
listA = LinkedList()
listA.head = Node(1)
listA.head.next = Node(3)
listA.head.next.next = Node(5)

listB = LinkedList()
listB.head = Node(2)
listB.head.next = Node(4)
listB.head.next.next = Node(6)

merged_list = LinkedList()
merged_list.head = listA.merge_sorted_lists(listB)
merged_list.traverse()  # Output: 1 2 3 4 5 6`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which method is NOT used to find the intersection point of two linked lists?',
      options: [
        'Two-pass algorithm with length difference',
        'Hash set to store nodes of one list',
        'Merging two sorted lists',
        'Floyd’s cycle detection algorithm',
      ],
      correctAnswer: 3,
      explanations: [
        'Incorrect. The two-pass algorithm is used for intersection detection.',
        'Incorrect. Hash sets can be used to detect intersections.',
        'Correct. Merging lists is not a method for finding intersections.',
        'Incorrect. Floyd’s algorithm is for cycle detection, not intersection detection.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the time complexity of the two-pass algorithm for finding the intersection of two linked lists?',
      options: [
        'O(1)',
        'O(n + m)',
        'O(n * m)',
        'O(log n)',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. O(n + m) is the correct time complexity.',
        'Correct. The algorithm runs in linear time relative to the sum of the lengths of both lists.',
        'Incorrect. O(n * m) is not applicable here.',
        'Incorrect. O(log n) is not relevant to this algorithm.',
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
      prompt: 'Create a linked list that is a palindrome and use the reverse and compare technique to verify it. Print whether the list is a palindrome or not.',
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
      prompt: 'Create a function that checks if a linked list is a palindrome using the reverse and compare technique. Print whether the list is a palindrome or not.',
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
      question: 'Which of the following is the correct way to check if a linked list is a palindrome using the reverse and compare technique?',
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
      question: 'Which of the following is a common application of checking if a linked list is a palindrome?',
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
    {
      prompt: 'Implement a custom function to reverse a list without using any built-in methods or slicing.',
      initialCode: `# Write your solution here
def reverse_list(lst):
    # Implement custom reversal
    pass

my_list = [1, 2, 3, 4, 5]
reversed_list = reverse_list(my_list)
print(reversed_list)`,
      solution: `def reverse_list(lst):
    reversed_lst = []
    for i in range(len(lst)-1, -1, -1):
        reversed_lst.append(lst[i])
    return reversed_lst

my_list = [1, 2, 3, 4, 5]
reversed_list = reverse_list(my_list)
print(reversed_list)  # Output: [5, 4, 3, 2, 1]`,
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
      question: 'What is the difference between reverse() and reversed()?',
      options: [
        'reverse() creates a new list, while reversed() modifies the original list.',
        'reverse() modifies the original list, while reversed() creates an iterator for the reversed list.',
        'Both modify the original list.',
        'Both create new lists.',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. reverse() modifies the list in place.',
        'Correct. reverse() modifies the list, reversed() returns an iterator.',
        'Incorrect. reversed() does not modify the list.',
        'Incorrect. reversed() does not create a new list directly.',
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
        for j in range(0, n - i - 1):
            if lst[j] > lst[j + 1]:
                lst[j], lst[j + 1] = lst[j + 1], lst[j]
    return lst

my_list = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
sorted_list = bubble_sort(my_list)
print(sorted_list)  # Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

# Selection Sort
def selection_sort(lst):
    for i in range(len(lst)):
        min_idx = i
        for j in range(i + 1, len(lst)):
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
        for j in range(0, n - i - 1):
            if lst[j] > lst[j + 1]:
                lst[j], lst[j + 1] = lst[j + 1], lst[j]
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
      difficulty: Difficulty.Beginner,
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
      difficulty: Difficulty.Beginner,
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
