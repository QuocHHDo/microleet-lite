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
A linked list is a fundamental data structure that consists of a sequence of elements, where each element points to the next element in the sequence. Unlike arrays, linked list elements (called nodes) can be scattered throughout memory. Think of a linked list like a treasure hunt, where:
</p>
<li>Each clue (node) contains both treasure (data) and directions to the next clue (reference)</li>
<li>You must follow the directions sequentially</li>
<li>The hunt ends when you reach a clue with no next direction (null reference)</li>

<p>There are three main types of linked lists: <strong>singly linked</strong>, <strong>doubly linked</strong>, and <strong>circular linked</strong> lists.</p>

<h3><u>Types of Linked Lists</u></h3>

<h4><b>Singly Linked Lists</b></h4>
<li>Each node points to the next node</li>
<li>Most memory efficient</li>
<li>Can only traverse forward</li>
<li>Example: Implementing undo functionality</li>

<h4><b>Doubly Linked Lists</b></h4>
<li>Each node points to both next and previous nodes</li>
<li>Can traverse in both directions</li>
<li>Uses more memory per node</li>
<li>Example: Browser history navigation</li>

<h4><b>Circular Linked Lists</b></h4>
<li>Last node points back to first node</li>
<li>No null termination</li>
<li>Useful for round-robin scheduling</li>
<li>Example: Playlist loop implementation</li>

<h3><u>Operation Complexities</u></h3>
<table>
<tr><th>Operation</th><th>Singly Linked</th><th>Doubly Linked</th></tr>
<tr><td>Access nth element</td><td>O(n)</td><td>O(n)</td></tr>
<tr><td>Insert at beginning</td><td>O(1)</td><td>O(1)</td></tr>
<tr><td>Insert at end</td><td>O(1)*</td><td>O(1)</td></tr>
<tr><td>Delete from beginning</td><td>O(1)</td><td>O(1)</td></tr>
<tr><td>Delete from end</td><td>O(n)</td><td>O(1)</td></tr>
<tr><td>Search</td><td>O(n)</td><td>O(n)</td></tr>
</table>
<p><small>*With tail pointer</small></p>`,
  codeExample: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None  # Initialize empty list
        
    def append(self, data):
        new_node = Node(data)
        
        # If list is empty, make new node the head
        if not self.head:
            self.head = new_node
            return
            
        # Traverse to end and add new node
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node
        
    def print_list(self):
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")

# Example usage
linked_list = LinkedList()
linked_list.append(1)  # List: 1 -> None
linked_list.append(2)  # List: 1 -> 2 -> None
linked_list.append(3)  # List: 1 -> 2 -> 3 -> None
linked_list.print_list()`,
  exercises: [
    {
      prompt: 'Create a linked list and append three numbers (5, 10, 15). Then print the list.',
      initialCode: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    # Add your append and print_list methods here`,
      solution: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
        
    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node
        
    def print_list(self):
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")

# Create and populate list
linked_list = LinkedList()
linked_list.append(5)
linked_list.append(10)
linked_list.append(15)
linked_list.print_list()`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Create a method to count the number of nodes in a linked list.',
      initialCode: `def count_nodes(self):
    # Write your solution here`,
      solution: `def count_nodes(self):
    count = 0
    current = self.head
    while current:
        count += 1
        current = current.next
    return count`,
      difficulty: Difficulty.Beginner,
    }
  ],
  quizzes: [
    {
      question: 'What is the main advantage of a linked list over an array?',
      options: [
        'Constant time access to elements',
        'Dynamic size and efficient insertion/deletion at beginning',
        'Less memory usage',
        'Faster search operations',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Arrays have constant time access, linked lists are O(n).',
        'Correct! Linked lists can grow dynamically and insert/delete at the beginning in O(1) time.',
        'Incorrect. Linked lists actually use more memory due to storing references.',
        'Incorrect. Searching in a linked list is generally slower than in an array.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'Why might you choose a doubly linked list over a singly linked list?',
      options: [
        'It uses less memory',
        'It allows backwards traversal',
        'It has faster search operations',
        'It requires less code to implement',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Doubly linked lists use more memory due to extra references.',
        'Correct! The ability to traverse backwards is the main advantage of doubly linked lists.',
        'Incorrect. Search operations have the same complexity in both types.',
        'Incorrect. Doubly linked lists require more complex implementation.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};

const nodeStructureData: LessonContent = {
  title: 'Node Structure and References',
  content: `<p>
A node is the fundamental building block of a linked list. Understanding node structure is crucial because it determines how data is stored and linked together. Think of a node like a container that has:
</p>
<li>A storage compartment (data field)</li>
<li>One or more directional arrows (reference fields)</li>
<li>The ability to be connected to other nodes</li>

<h3><u>Node Components</u></h3>

<h4><b>Data Field</b></h4>
<li>Stores the actual value or data</li>
<li>Can be any data type (int, string, object, etc.)</li>
<li>Size depends on data type being stored</li>

<h4><b>Reference Field(s)</b></h4>
<li>Stores memory address of next/previous node</li>
<li>One reference for singly linked nodes</li>
<li>Two references for doubly linked nodes</li>
<li>Null reference indicates end of list</li>

<h3><u>Types of Node Structures</u></h3>

<table>
<tr><th>Type</th><th>Components</th><th>Use Case</th></tr>
<tr><td>Basic Node</td><td>data + next reference</td><td>Singly linked lists</td></tr>
<tr><td>Doubly Node</td><td>data + next + prev references</td><td>Doubly linked lists</td></tr>
<tr><td>Circular Node</td><td>data + next (points to first)</td><td>Circular linked lists</td></tr>
<tr><td>Generic Node</td><td>generic data + type-safe reference</td><td>Type-safe implementations</td></tr>
</table>`,
  codeExample: `# Basic Node Structure
class Node:
    def __init__(self, data):
        self.data = data    # Data storage
        self.next = None    # Reference to next node

# Doubly Linked Node
class DoublyNode:
    def __init__(self, data):
        self.data = data      # Data storage
        self.next = None      # Reference to next node
        self.prev = None      # Reference to previous node

# Generic Node (Python type hints)
from typing import Generic, TypeVar

T = TypeVar('T')
class GenericNode(Generic[T]):
    def __init__(self, data: T):
        self.data: T = data
        self.next: 'GenericNode[T]' = None

# Example: Creating and linking nodes
# Create nodes
node1 = Node(1)
node2 = Node(2)
node3 = Node(3)

# Link nodes together
node1.next = node2  # 1 -> 2
node2.next = node3  # 1 -> 2 -> 3

# Traverse and print
current = node1
while current:
    print(current.data, end=" -> ")
    current = current.next
print("None")`,
  exercises: [
    {
      prompt: 'Create a doubly linked node class and connect three nodes bidirectionally.',
      initialCode: `class DoublyNode:
    def __init__(self, data):
        # Initialize your node here

# Create and connect three nodes here`,
      solution: `class DoublyNode:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None

# Create nodes
node1 = DoublyNode(1)
node2 = DoublyNode(2)
node3 = DoublyNode(3)

# Connect nodes bidirectionally
node1.next = node2
node2.prev = node1

node2.next = node3
node3.prev = node2

# Verify connections
def print_forward(head):
    current = head
    while current:
        print(current.data, end=" -> ")
        current = current.next
    print("None")

def print_backward(tail):
    current = tail
    while current:
        print(current.data, end=" -> ")
        current = current.prev
    print("None")

print_forward(node1)
print_backward(node3)`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'What happens to a node\'s reference field when it\'s the last node in a linked list?',
      options: [
        'It points to the first node',
        'It points to itself',
        'It contains null',
        'It gets deleted',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. That would make it a circular linked list.',
        'Incorrect. Self-reference would create a loop.',
        'Correct! The last node\'s next reference is set to null to indicate the end of the list.',
        'Incorrect. Reference fields always exist, they just contain null.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'Why do doubly linked nodes need two reference fields?',
      options: [
        'To store twice as much data',
        'To enable bidirectional traversal',
        'To prevent memory leaks',
        'To improve search speed',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Reference fields don\'t store data.',
        'Correct! Two references allow traversal in both forward and backward directions.',
        'Incorrect. Memory management isn\'t related to number of references.',
        'Incorrect. Search speed isn\'t directly improved by having two references.',
      ],
      difficulty: Difficulty.Beginner,
    }
  ],
};

const listVsArrayData: LessonContent = {
  title: 'Linked Lists vs Arrays: Making the Right Choice',
  content: `<p>
Understanding when to use linked lists versus arrays is a crucial skill for software engineers. Let's explore these data structures through a practical lens, using real-world analogies to understand their strengths and weaknesses.
</p>

<h3><u>Memory Organization</u></h3>
<p>
Think of arrays like a row of seats in a movie theater:
</p>
<li>All seats are next to each other (contiguous memory)</li>
<li>Each seat has a number (index)</li>
<li>Finding seat #5 is instant - just count 5 from the start</li>

<p>
Now think of linked lists like a scavenger hunt:
</p>
<li>Each clue leads to the next location (scattered memory)</li>
<li>You must follow the sequence of clues (references)</li>
<li>Finding the 5th clue requires following all previous clues</li>

<h3><u>Performance Comparison</u></h3>
<table>
<tr><th>Operation</th><th>Array</th><th>Linked List</th><th>Winner</th></tr>
<tr><td>Random access</td><td>O(1)</td><td>O(n)</td><td>Array</td></tr>
<tr><td>Insert at start</td><td>O(n)</td><td>O(1)</td><td>Linked List</td></tr>
<tr><td>Insert at end</td><td>O(1)*</td><td>O(1)**</td><td>Tie</td></tr>
<tr><td>Delete from start</td><td>O(n)</td><td>O(1)</td><td>Linked List</td></tr>
<tr><td>Memory usage</td><td>Fixed overhead</td><td>Extra per node</td><td>Array</td></tr>
<tr><td>Cache performance</td><td>Excellent</td><td>Poor</td><td>Array</td></tr>
</table>
<p><small>*Amortized for dynamic arrays</small></p>
<p><small>**With tail pointer</small></p>

<h3><u>When to Use Each</u></h3>

<h4><b>Choose Arrays When:</b></h4>
<li>You need frequent random access to elements</li>
<li>Memory usage is a primary concern</li>
<li>You're working with fixed-size data</li>
<li>Cache performance is critical</li>
<li>Example: Game board representation, image processing</li>

<h4><b>Choose Linked Lists When:</b></h4>
<li>You need frequent insertions/deletions at the beginning</li>
<li>The size of the data is highly variable</li>
<li>You don't need random access</li>
<li>Memory fragmentation is a concern</li>
<li>Example: Undo/redo functionality, playlist management</li>`,
  codeExample: `def compare_performance():
    """Demonstrate performance differences between arrays and linked lists"""
    import time
    
    # Array (Python list) operations
    array = []
    start_time = time.time()
    
    # Insert at beginning of array
    for i in range(10000):
        array.insert(0, i)  # O(n) - must shift all elements
    array_insert_time = time.time() - start_time
    
    # Linked List operations
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
    start_time = time.time()
    
    # Insert at beginning of linked list
    for i in range(10000):
        linked_list.insert_at_beginning(i)  # O(1) - no shifting needed
    linked_list_insert_time = time.time() - start_time
    
    print(f"Time to insert 10000 elements at beginning:")
    print(f"Array: {array_insert_time:.4f} seconds")
    print(f"Linked List: {linked_list_insert_time:.4f} seconds")

# Run comparison
compare_performance()`,
  exercises: [
    {
      prompt: 'Implement a function that determines whether an array or linked list would be more appropriate based on given requirements.',
      initialCode: `def recommend_data_structure(
    size_fixed: bool,
    random_access_needed: bool,
    frequent_insertions_at_start: bool,
    memory_critical: bool
) -> str:
    # Return "Array" or "Linked List" based on requirements
    pass`,
      solution: `def recommend_data_structure(
    size_fixed: bool,
    random_access_needed: bool,
    frequent_insertions_at_start: bool,
    memory_critical: bool
) -> str:
    points_for_array = 0
    points_for_list = 0
    
    if size_fixed:
        points_for_array += 1
    else:
        points_for_list += 1
        
    if random_access_needed:
        points_for_array += 2  # Weighted heavily
    
    if frequent_insertions_at_start:
        points_for_list += 2  # Weighted heavily
        
    if memory_critical:
        points_for_array += 1
        
    return "Array" if points_for_array >= points_for_list else "Linked List"`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'Why do arrays generally have better cache performance than linked lists?',
      options: [
        'Arrays are always smaller in size',
        'Arrays store elements in contiguous memory locations',
        'Arrays use less memory per element',
        'Arrays have faster access times',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Array size depends on the data being stored.',
        'Correct! Contiguous memory storage means better cache locality and fewer cache misses.',
        'Incorrect. While true, this isn\'t why cache performance is better.',
        'Incorrect. Access time is a result of better cache performance, not the cause.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'For which operation would you choose a linked list over an array?',
      options: [
        'Binary search implementation',
        'Storing a game\'s high score table',
        'Implementing an undo system',
        'Image pixel manipulation',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Binary search requires O(1) random access, favoring arrays.',
        'Incorrect. High score tables need random access for sorting and display.',
        'Correct! Undo systems benefit from O(1) insertions at the beginning.',
        'Incorrect. Image processing requires fast random access to pixels.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};

const listTraversalData: LessonContent = {
  title: 'Mastering Linked List Traversal',
  content: `<p>
Traversing a linked list is like following a chain of connections, where each step reveals the path to the next element. Understanding different traversal techniques is crucial for solving many programming problems effectively.
</p>

<h3><u>Basic Traversal Patterns</u></h3>

<h4><b>1. Single Pointer Traversal</b></h4>
<li>Uses one pointer to move through the list</li>
<li>Most common for simple operations</li>
<li>Example: Printing all elements, counting nodes</li>

<h4><b>2. Two Pointer Technique</b></h4>
<li>Uses two pointers moving at different speeds or distances</li>
<li>Useful for cycle detection, finding middle element</li>
<li>Example: Floyd's cycle-finding algorithm</li>

<h4><b>3. Runner Technique</b></h4>
<li>One pointer moves twice as fast as the other</li>
<li>Used for problems requiring "look ahead"</li>
<li>Example: Splitting lists, finding cycles</li>

<h3><u>Common Edge Cases</u></h3>
<table>
<tr><th>Scenario</th><th>Challenge</th><th>Solution</th></tr>
<tr><td>Empty List</td><td>No nodes to traverse</td><td>Check if head is null</td></tr>
<tr><td>Single Node</td><td>Next is null</td><td>Handle as special case</td></tr>
<tr><td>Circular List</td><td>No natural end</td><td>Use cycle detection</td></tr>
<tr><td>Lost Reference</td><td>Can't backtrack</td><td>Store previous references</td></tr>
</table>`,
  codeExample: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
    
    def traverse_simple(self):
        """Basic single pointer traversal"""
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")
    
    def find_middle(self):
        """Two pointer technique to find middle node"""
        if not self.head:
            return None
            
        slow = fast = self.head
        
        # Fast moves twice as fast as slow
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            
        return slow.data
    
    def has_cycle(self):
        """Floyd's cycle detection algorithm"""
        if not self.head:
            return False
            
        slow = fast = self.head
        
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            
            if slow == fast:
                return True
                
        return False
    
    def reverse_traversal(self):
        """Reverses list while traversing"""
        prev = None
        current = self.head
        
        while current:
            # Store next node
            next_node = current.next
            # Reverse pointer
            current.next = prev
            # Move prev and current forward
            prev = current
            current = next_node
            
        self.head = prev

# Example usage
def demonstrate_traversals():
    lst = LinkedList()
    # Create list: 1 -> 2 -> 3 -> 4 -> 5
    for i in range(1, 6):
        node = Node(i)
        node.next = lst.head
        lst.head = node
    
    print("Original list:")
    lst.traverse_simple()
    
    print("Middle element:", lst.find_middle())
    
    print("Has cycle?", lst.has_cycle())
    
    lst.reverse_traversal()
    print("After reversal:")
    lst.traverse_simple()

demonstrate_traversals()`,
  exercises: [
    {
      prompt: 'Implement a method to find the nth node from the end using the two-pointer technique.',
      initialCode: `def find_nth_from_end(self, n: int) -> int:
    """
    Find the nth node from the end of the linked list.
    Returns the data value of the node or None if not found.
    """
    # Implement your solution here
    pass`,
      solution: `def find_nth_from_end(self, n: int) -> int:
    """
    Find the nth node from the end of the linked list.
    Returns the data value of the node or None if not found.
    """
    if not self.head or n < 1:
        return None
        
    # Move first pointer n nodes ahead
    first = self.head
    for _ in range(n):
        if not first:
            return None
        first = first.next
    
    # If first is None, n was larger than list length
    if not first:
        return None
    
    # Move both pointers until first reaches end
    second = self.head
    while first.next:
        first = first.next
        second = second.next
    
    return second.data`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'Why is the two-pointer technique effective for finding the middle of a linked list?',
      options: [
        'It requires less memory',
        'It\'s faster than counting all nodes',
        'It only needs one pass through the list',
        'It works better with large lists',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Memory usage is similar to other methods.',
        'Incorrect. Speed isn\'t the main advantage over counting.',
        'Correct! It finds the middle in one pass without counting total nodes.',
        'Incorrect. The advantage is consistent regardless of list size.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the main challenge when traversing a circular linked list?',
      options: [
        'Higher memory usage',
        'Slower traversal speed',
        'Potential infinite loops',
        'Complex implementation',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Memory usage is the same as regular traversal.',
        'Incorrect. Traversal speed isn\'t affected by circularity.',
        'Correct! Without proper cycle detection, traversal could continue indefinitely.',
        'Incorrect. Basic traversal isn\'t more complex, just needs cycle awareness.',
      ],
      difficulty: Difficulty.Beginner,
    }
  ],
};

const insertionData: LessonContent = {
  title: 'Mastering Linked List Insertion Operations',
  content: `<p>
Inserting elements into a linked list is like adding new links to a chain. Each insertion requires carefully connecting the new link while maintaining the existing connections. Understanding these operations thoroughly is crucial for manipulating linked lists effectively.
</p>

<p>
Before we dive into specific insertion operations, let's understand what happens during any insertion:
</p>

<h3><u>General Insertion Process</u></h3>
<p>Every insertion, regardless of position, follows these key steps:</p>
<li>Create a new node with the desired data</li>
<li>Identify the proper insertion point</li>
<li>Update the references to maintain list connectivity</li>
<li>Handle any necessary pointer updates (head, tail)</li>

<h3><u>Types of Insertions</u></h3>

<h4><b>1. Insert at Beginning (Prepend)</b></h4>
<p>
Like adding a new first car to a train, we need to:
</p>
<li>Create the new front car (node)</li>
<li>Connect it to the current front car (head)</li>
<li>Update the train's front marker (head pointer)</li>
<p>Time Complexity: O(1) - Always constant time</p>

<h4><b>2. Insert at End (Append)</b></h4>
<p>
Similar to adding a new last car to a train:
</p>
<li>Create the new end car (node)</li>
<li>Find the current last car (if no tail pointer)</li>
<li>Connect the current last car to the new one</li>
<p>Time Complexity: O(1) with tail pointer, O(n) without</p>

<h4><b>3. Insert at Middle</b></h4>
<p>
Like adding a car in the middle of a train:
</p>
<li>Find the insertion point</li>
<li>Carefully disconnect and reconnect links</li>
<li>Maintain list integrity throughout</li>
<p>Time Complexity: O(n) to find position + O(1) to insert</p>

<h3><u>Edge Cases to Consider</u></h3>
<table>
<tr><th>Scenario</th><th>Challenge</th><th>Solution</th></tr>
<tr><td>Empty List</td><td>No existing nodes</td><td>New node becomes head</td></tr>
<tr><td>Single Node</td><td>Head and tail are same</td><td>Update both pointers</td></tr>
<tr><td>Invalid Position</td><td>Position beyond list length</td><td>Handle as append or error</td></tr>
<tr><td>Memory Allocation</td><td>Failed node creation</td><td>Error handling</td></tr>
</table>`,
  codeExample: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None  # Optional tail pointer for O(1) append
        self.length = 0   # Optional length tracking
    
    def insert_at_beginning(self, data):
        """Insert a new node at the start of the list."""
        # Create new node
        new_node = Node(data)
        
        # Handle empty list case
        if not self.head:
            self.head = new_node
            self.tail = new_node  # If we're tracking tail
        else:
            # Connect new node to current head
            new_node.next = self.head
            # Update head to new node
            self.head = new_node
        
        self.length += 1
    
    def insert_at_end(self, data):
        """Insert a new node at the end of the list."""
        # Create new node
        new_node = Node(data)
        
        # Handle empty list case
        if not self.head:
            self.head = new_node
            self.tail = new_node  # If we're tracking tail
            self.length += 1
            return
        
        if self.tail:  # If we maintain a tail pointer
            self.tail.next = new_node
            self.tail = new_node
        else:  # Without tail pointer
            # Traverse to end
            current = self.head
            while current.next:
                current = current.next
            current.next = new_node
        
        self.length += 1
    
    def insert_at_position(self, data, position):
        """Insert a new node at a specific position."""
        # Handle invalid position
        if position < 0 or position > self.length:
            raise ValueError("Invalid position")
        
        # Handle insertion at beginning
        if position == 0:
            self.insert_at_beginning(data)
            return
            
        # Handle insertion at end
        if position == self.length:
            self.insert_at_end(data)
            return
        
        # Create new node
        new_node = Node(data)
        
        # Traverse to position - 1
        current = self.head
        for _ in range(position - 1):
            current = current.next
        
        # Insert new node
        new_node.next = current.next
        current.next = new_node
        
        self.length += 1
    
    def display(self):
        """Helper method to display the list."""
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")

# Example usage demonstrating all insertion types
def demonstrate_insertions():
    lst = LinkedList()
    
    # Insert at beginning
    print("Inserting 1, 2, 3 at beginning:")
    lst.insert_at_beginning(3)
    lst.insert_at_beginning(2)
    lst.insert_at_beginning(1)
    lst.display()  # 1 -> 2 -> 3 -> None
    
    # Insert at end
    print("\nInserting 4, 5 at end:")
    lst.insert_at_end(4)
    lst.insert_at_end(5)
    lst.display()  # 1 -> 2 -> 3 -> 4 -> 5 -> None
    
    # Insert at position
    print("\nInserting 6 at position 2:")
    lst.insert_at_position(6, 2)
    lst.display()  # 1 -> 2 -> 6 -> 3 -> 4 -> 5 -> None

demonstrate_insertions()`,
  exercises: [
    {
      prompt: 'Implement a method to insert a node in a sorted linked list while maintaining the order.',
      initialCode: `def insert_sorted(self, data):
    """
    Insert a new node into a sorted linked list while maintaining the order.
    Assume the list is sorted in ascending order.
    """
    # Implement your solution here
    pass`,
      solution: `def insert_sorted(self, data):
    """
    Insert a new node into a sorted linked list while maintaining the order.
    Assume the list is sorted in ascending order.
    """
    new_node = Node(data)
    
    # Handle empty list or insertion at beginning
    if not self.head or data <= self.head.data:
        new_node.next = self.head
        self.head = new_node
        return
    
    # Find insertion point
    current = self.head
    while current.next and current.next.data < data:
        current = current.next
    
    # Insert new node
    new_node.next = current.next
    current.next = new_node`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'Why might you want to maintain a tail pointer in a linked list?',
      options: [
        'To make deletion faster',
        'To enable backward traversal',
        'To make insertion at the end O(1)',
        'To reduce memory usage',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. A tail pointer doesn\'t help with deletion in most cases.',
        'Incorrect. Backward traversal requires a doubly linked list.',
        'Correct! A tail pointer allows us to append elements in constant time.',
        'Incorrect. A tail pointer actually increases memory usage slightly.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What is the time complexity of inserting at position k in a linked list of size n?',
      options: [
        'O(1) in all cases',
        'O(k)',
        'O(n) in all cases',
        'O(k) if k < n, O(n) if k = n',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. We need to traverse to position k.',
        'Correct! We need to traverse k nodes to reach the insertion point.',
        'Incorrect. We don\'t always need to traverse the entire list.',
        'Incorrect. The complexity is based on the position k.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};

const deletionData: LessonContent = {
  title: 'Mastering Linked List Deletion Operations',
  content: `<p>
Deleting nodes from a linked list is like removing cars from a train - we need to ensure the remaining cars stay connected properly. This operation requires careful handling of references to maintain list integrity and prevent memory leaks.
</p>

<h3><u>Understanding Deletion</u></h3>
<p>
Every deletion operation involves three main steps:
</p>
<li>Locate the node to be deleted and its predecessor</li>
<li>Update references to bypass the deleted node</li>
<li>Handle memory cleanup (in languages with manual memory management)</li>

<h3><u>Types of Deletions</u></h3>

<h4><b>1. Delete from Beginning (Head)</b></h4>
<p>
Like removing the first car of a train:
</p>
<li>Save reference to current head</li>
<li>Update head to point to second node</li>
<li>Clean up old head node</li>
<p>Time Complexity: O(1) - Always constant time</p>

<h4><b>2. Delete from End (Tail)</b></h4>
<p>
Similar to removing the last car of a train:
</p>
<li>Find the second-to-last node</li>
<li>Update its next pointer to null</li>
<li>Update tail pointer if maintained</li>
<p>Time Complexity: O(n) with singly linked list, O(1) with doubly linked list</p>

<h4><b>3. Delete from Middle</b></h4>
<p>
Like removing a car from the middle of a train:
</p>
<li>Find the node and its predecessor</li>
<li>Update predecessor's next pointer</li>
<li>Handle cleanup of deleted node</li>
<p>Time Complexity: O(n) to find position + O(1) to delete</p>

<h3><u>Critical Edge Cases</u></h3>
<table>
<tr><th>Scenario</th><th>Challenge</th><th>Solution</th></tr>
<tr><td>Empty List</td><td>Nothing to delete</td><td>Return error or null</td></tr>
<tr><td>Single Node</td><td>Head becomes null</td><td>Update head and tail to null</td></tr>
<tr><td>Last Node</td><td>Updating tail</td><td>Traverse to second-last node</td></tr>
<tr><td>Node Not Found</td><td>Invalid deletion</td><td>Handle error condition</td></tr>
</table>`,
  codeExample: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0
    
    def delete_from_beginning(self):
        """Delete the first node of the list."""
        if not self.head:  # Empty list
            raise ValueError("Cannot delete from empty list")
        
        # Save data to return
        deleted_data = self.head.data
        
        # Update head to second node
        self.head = self.head.next
        
        # If list becomes empty, update tail
        if not self.head:
            self.tail = None
            
        self.length -= 1
        return deleted_data
    
    def delete_from_end(self):
        """Delete the last node of the list."""
        if not self.head:  # Empty list
            raise ValueError("Cannot delete from empty list")
            
        # If only one node
        if not self.head.next:
            deleted_data = self.head.data
            self.head = None
            self.tail = None
            self.length -= 1
            return deleted_data
        
        # Traverse to second-to-last node
        current = self.head
        while current.next.next:
            current = current.next
            
        # Save data to return
        deleted_data = current.next.data
        
        # Update references
        current.next = None
        self.tail = current
        
        self.length -= 1
        return deleted_data
    
    def delete_at_position(self, position):
        """Delete node at specific position."""
        if not self.head:  # Empty list
            raise ValueError("Cannot delete from empty list")
            
        if position < 0 or position >= self.length:
            raise ValueError("Invalid position")
            
        # Handle deletion at beginning
        if position == 0:
            return self.delete_from_beginning()
            
        # Handle deletion at end
        if position == self.length - 1:
            return self.delete_from_end()
        
        # Traverse to node before deletion point
        current = self.head
        for _ in range(position - 1):
            current = current.next
            
        # Save data to return
        deleted_data = current.next.data
        
        # Update references to skip deleted node
        current.next = current.next.next
        
        self.length -= 1
        return deleted_data
    
    def delete_value(self, value):
        """Delete first occurrence of a value."""
        if not self.head:  # Empty list
            raise ValueError("Cannot delete from empty list")
            
        # Handle deletion at head
        if self.head.data == value:
            return self.delete_from_beginning()
            
        # Find node with value
        current = self.head
        while current.next and current.next.data != value:
            current = current.next
            
        # If value not found
        if not current.next:
            raise ValueError("Value not found in list")
            
        # Save data to return
        deleted_data = current.next.data
        
        # Update references to skip deleted node
        current.next = current.next.next
        
        # Update tail if deleting last node
        if not current.next:
            self.tail = current
            
        self.length -= 1
        return deleted_data
    
    def display(self):
        """Helper method to display the list."""
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")

# Example usage demonstrating all deletion types
def demonstrate_deletions():
    lst = LinkedList()
    
    # Create list: 1 -> 2 -> 3 -> 4 -> 5
    for i in range(1, 6):
        lst.insert_at_end(i)
    
    print("Original list:")
    lst.display()  # 1 -> 2 -> 3 -> 4 -> 5 -> None
    
    # Delete from beginning
    print("\nAfter deleting from beginning:")
    lst.delete_from_beginning()
    lst.display()  # 2 -> 3 -> 4 -> 5 -> None
    
    # Delete from end
    print("\nAfter deleting from end:")
    lst.delete_from_end()
    lst.display()  # 2 -> 3 -> 4 -> None
    
    # Delete from position 1 (second element)
    print("\nAfter deleting from position 1:")
    lst.delete_at_position(1)
    lst.display()  # 2 -> 4 -> None
    
    # Delete value 4
    print("\nAfter deleting value 4:")
    lst.delete_value(4)
    lst.display()  # 2 -> None

demonstrate_deletions()`,
  exercises: [
    {
      prompt: 'Implement a method to delete all occurrences of a given value from the linked list.',
      initialCode: `def delete_all_occurrences(self, value):
    """
    Delete all nodes that contain the given value.
    Return the count of nodes deleted.
    """
    # Implement your solution here
    pass`,
      solution: `def delete_all_occurrences(self, value):
    """
    Delete all nodes that contain the given value.
    Return the count of nodes deleted.
    """
    if not self.head:
        return 0
    
    count = 0
    
    # Handle deletions at the beginning
    while self.head and self.head.data == value:
        self.head = self.head.next
        count += 1
        self.length -= 1
    
    if not self.head:
        self.tail = None
        return count
    
    # Handle deletions in rest of the list
    current = self.head
    while current.next:
        if current.next.data == value:
            current.next = current.next.next
            count += 1
            self.length -= 1
            # Update tail if we're at the end
            if not current.next:
                self.tail = current
        else:
            current = current.next
    
    return count`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement a method to delete nodes at even positions (0-based indexing) in the linked list.',
      initialCode: `def delete_even_positions(self):
    """
    Delete all nodes at even positions (0, 2, 4, ...).
    Return the number of nodes deleted.
    """
    # Implement your solution here
    pass`,
      solution: `def delete_even_positions(self):
    """
    Delete all nodes at even positions (0, 2, 4, ...).
    Return the number of nodes deleted.
    """
    if not self.head:
        return 0
    
    count = 0
    
    # Handle first node (position 0)
    self.head = self.head.next
    count += 1
    self.length -= 1
    
    if not self.head:
        self.tail = None
        return count
    
    # Handle remaining even positions
    current = self.head
    while current and current.next:
        # Delete the next node (at odd index)
        current.next = current.next.next
        count += 1
        self.length -= 1
        
        # Update tail if needed
        if not current.next:
            self.tail = current
            break
            
        # Move to next node to handle next pair
        current = current.next
    
    return count`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'What is the time complexity of deleting the last node in a singly linked list with a tail pointer?',
      options: [
        'O(1) in all cases',
        'O(n) in all cases',
        'O(1) for lists with one node, O(n) otherwise',
        'O(n) for lists with one node, O(1) otherwise',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Even with a tail pointer, we need to find the second-to-last node.',
        'Correct! We always need to traverse to find the second-to-last node in a singly linked list.',
        'Incorrect. The complexity is O(n) even for longer lists.',
        'Incorrect. Single node deletion is actually simpler, not more complex.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'When deleting a node from a linked list, what potential memory issue must be considered in languages with manual memory management?',
      options: [
        'Memory fragmentation',
        'Memory leaks from orphaned nodes',
        'Stack overflow',
        'Cache misses',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Fragmentation isn\'t directly related to node deletion.',
        'Correct! Failing to properly free deleted nodes can cause memory leaks.',
        'Incorrect. Stack overflow isn\'t related to node deletion.',
        'Incorrect. Cache performance isn\'t a memory management issue.',
      ],
      difficulty: Difficulty.Advanced,
    },
    {
      question: 'What is the safest order to perform operations when deleting a node?',
      options: [
        'Update next pointers, then previous pointers, then free memory',
        'Free memory, then update all pointers',
        'Save next pointer, update references, then free memory',
        'Update head/tail, then other pointers, then free memory',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. We need to save references before updating them.',
        'Incorrect. Freeing memory first would lose necessary reference information.',
        'Correct! We must preserve the next reference before updating pointers to prevent losing list connectivity.',
        'Incorrect. Head/tail updates should be part of reference management.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};

const searchingData: LessonContent = {
  title: 'Searching Elements in Linked Lists: Strategies and Implementation',
  content: `<p>
Searching in a linked list is like being a detective following a trail of clues, where each clue (node) leads to the next one. Unlike arrays where we can jump directly to any position, linked list searching requires us to follow the path node by node. Understanding different searching techniques helps us optimize this process for various scenarios.
</p>

<p>
Let's explore how searching works in linked lists by starting with the basic concepts and building up to more sophisticated techniques.
</p>

<h3><u>Understanding Linear Search in Linked Lists</u></h3>

<p>
The fundamental approach to searching in a linked list is linear search, which involves examining each node sequentially until we find our target. This process is necessary because:
</p>

<li>Nodes are not stored in contiguous memory locations</li>
<li>We can only access nodes through their references</li>
<li>Random access is not possible like in arrays</li>

<h3><u>Search Optimization Techniques</u></h3>

<h4><b>1. Two-Pointer Technique</b></h4>
<p>
This advanced method uses two pointers moving at different speeds to optimize certain types of searches:
</p>
<li>Finding the middle element</li>
<li>Detecting cycles in the list</li>
<li>Finding nth node from the end</li>

<h4><b>2. Skip Pointers</b></h4>
<p>
An advanced optimization that maintains additional references to nodes further ahead:
</p>
<li>Creates "shortcuts" in the list</li>
<li>Reduces traversal time for frequently accessed elements</li>
<li>Trades memory for speed</li>

<h4><b>3. Hash Table Assistance</b></h4>
<p>
Using a hash table alongside the linked list can dramatically improve search performance:
</p>
<li>Store node references in a hash table</li>
<li>Enables O(1) access to elements</li>
<li>Requires additional space</li>

<h3><u>Performance Analysis</u></h3>
<table>
<tr><th>Search Type</th><th>Time Complexity</th><th>Space Complexity</th><th>Use Case</th></tr>
<tr><td>Linear Search</td><td>O(n)</td><td>O(1)</td><td>Basic searching</td></tr>
<tr><td>Two-Pointer</td><td>O(n)</td><td>O(1)</td><td>Special patterns</td></tr>
<tr><td>Skip Pointers</td><td>O(√n)</td><td>O(√n)</td><td>Frequent access</td></tr>
<tr><td>Hash Table</td><td>O(1)</td><td>O(n)</td><td>Repeated searches</td></tr>
</table>`,
  codeExample: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
        
    def linear_search(self, target):
        """
        Basic linear search implementation.
        Returns the position if found, -1 if not found.
        """
        current = self.head
        position = 0
        
        while current:
            # Check if current node contains target
            if current.data == target:
                return position
            current = current.next
            position += 1
            
        return -1
    
    def find_middle(self):
        """
        Find middle element using two-pointer technique.
        Returns the middle node's data, or None if list is empty.
        """
        if not self.head:
            return None
            
        # Use slow and fast pointers
        slow = fast = self.head
        
        # Move fast pointer twice as fast as slow
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            
        return slow.data
    
    def search_with_skip_pointers(self, target, skip_length=3):
        """
        Search using skip pointers for optimization.
        Returns position if found, -1 if not found.
        """
        if not self.head:
            return -1
            
        # Create skip pointers
        skip_pointers = []
        current = self.head
        position = 0
        
        # Build skip pointer list
        while current:
            if position % skip_length == 0:
                skip_pointers.append((position, current))
            current = current.next
            position += 1
            
        # Search using skip pointers
        for skip_pos, skip_node in skip_pointers:
            # If target might be in this segment
            if skip_node.data <= target:
                current = skip_node
                pos = skip_pos
                
                # Search within segment
                while current and pos < skip_pos + skip_length:
                    if current.data == target:
                        return pos
                    current = current.next
                    pos += 1
                    
        return -1
    
    def search_with_hash(self, target):
        """
        Search using a hash table for O(1) access.
        First builds hash table, then performs lookup.
        """
        # Build hash table (in practice, this would be maintained with list updates)
        hash_table = {}
        current = self.head
        position = 0
        
        while current:
            hash_table[current.data] = position
            current = current.next
            position += 1
            
        # Perform lookup
        return hash_table.get(target, -1)
    
def demonstrate_searching():
    # Create a sample linked list
    lst = LinkedList()
    values = [1, 4, 6, 2, 9, 7, 3]
    
    # Build the list
    current = None
    for value in values:
        if not lst.head:
            lst.head = Node(value)
            current = lst.head
        else:
            current.next = Node(value)
            current = current.next
    
    # Demonstrate different search methods
    target = 6
    
    print(f"Searching for value: {target}")
    print(f"Linear search position: {lst.linear_search(target)}")
    print(f"Middle element: {lst.find_middle()}")
    print(f"Skip pointer search position: {lst.search_with_skip_pointers(target)}")
    print(f"Hash table search position: {lst.search_with_hash(target)}")

# Run demonstration
demonstrate_searching()`,
  exercises: [
    {
      prompt: 'Implement a method to find all occurrences of a value in the linked list, returning a list of positions.',
      initialCode: `def find_all_occurrences(self, target):
    """
    Find all occurrences of target value in the list.
    Return list of positions where value was found.
    """
    # Implement your solution here
    pass`,
      solution: `def find_all_occurrences(self, target):
    """
    Find all occurrences of target value in the list.
    Return list of positions where value was found.
    """
    positions = []
    current = self.head
    position = 0
    
    while current:
        if current.data == target:
            positions.append(position)
        current = current.next
        position += 1
        
    return positions`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Implement a binary search-like method for a sorted linked list using the two-pointer technique.',
      initialCode: `def binary_search(self, target):
    """
    Perform a binary search-like operation on a sorted linked list.
    Return position if found, -1 if not found.
    Assume list is sorted in ascending order.
    """
    # Implement your solution here
    pass`,
      solution: `def binary_search(self, target):
    """
    Perform a binary search-like operation on a sorted linked list.
    Return position if found, -1 if not found.
    Assume list is sorted in ascending order.
    """
    if not self.head:
        return -1
    
    # First, find the length of the list
    length = 0
    current = self.head
    while current:
        length += 1
        current = current.next
    
    # Binary search implementation
    start = 0
    end = length - 1
    
    while start <= end:
        mid = (start + end) // 2
        
        # Get middle node
        current = self.head
        for _ in range(mid):
            current = current.next
            
        # Compare and adjust search range
        if current.data == target:
            return mid
        elif current.data < target:
            start = mid + 1
        else:
            end = mid - 1
            
    return -1`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why is binary search generally not efficient on a standard linked list, even if the list is sorted?',
      options: [
        'Binary search doesn\'t work with non-numeric data',
        'Linked lists cannot be sorted properly',
        'Finding the middle element requires O(n) time',
        'Linked lists use too much memory',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Binary search works with any comparable data.',
        'Incorrect. Linked lists can be sorted just like arrays.',
        'Correct! Unlike arrays, we cannot directly access the middle element in O(1) time, making binary search less efficient.',
        'Incorrect. Memory usage doesn\'t affect binary search efficiency.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the primary advantage of using skip pointers in a linked list?',
      options: [
        'Reduced memory usage',
        'Faster insertion operations',
        'Reduced search time for specific patterns',
        'Improved cache performance',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Skip pointers actually increase memory usage.',
        'Incorrect. Skip pointers don\'t significantly affect insertion time.',
        'Correct! Skip pointers create shortcuts that can reduce traversal time for certain search patterns.',
        'Incorrect. Cache performance isn\'t the primary benefit of skip pointers.',
      ],
      difficulty: Difficulty.Advanced,
    }
  ],
};

const singlyLinkedData: LessonContent = {
  title: 'Singly Linked Lists: Building Blocks of Linear Data Structures',
  content: `<p>
A singly linked list is like a treasure hunt, where each clue points only to the next location. This elegant data structure forms the foundation for many complex data structures and algorithms. Let's explore how it works and why it's so useful.
</p>

<p>
Imagine you're organizing a series of story pages. With a singly linked list, each page has two components: the story text (the data) and a small note at the bottom pointing to the next page (the reference). This simple organization allows for incredible flexibility in how we manage our data.
</p>

<h3><u>Core Characteristics</u></h3>

<p>
A singly linked list's defining features make it uniquely suited for certain tasks:
</p>

<li>Each node contains both data and a single reference to the next node</li>
<li>The last node points to null, marking the end of the list</li>
<li>Only forward traversal is possible</li>
<li>Memory is allocated dynamically as nodes are added</li>

<h3><u>Key Design Considerations</u></h3>

<p>
When working with singly linked lists, several design decisions can significantly impact performance:
</p>

<h4><b>1. Head and Tail Tracking</b></h4>
<p>
Maintaining a head pointer is essential, but a tail pointer is optional. Consider these tradeoffs:
</p>
<li>Head pointer: Required for any list operation</li>
<li>Tail pointer: Makes append operations O(1) instead of O(n)</li>
<li>Length counter: Useful for validation but requires maintenance</li>

<h4><b>2. Memory Management</b></h4>
<p>
In languages with manual memory management:
</p>
<li>Proper node deletion prevents memory leaks</li>
<li>Clear ownership rules help manage resources</li>
<li>Clean reference handling prevents dangling pointers</li>

<h3><u>Practical Applications</u></h3>

<p>
Singly linked lists excel in several real-world scenarios:
</p>

<table>
<tr><th>Application</th><th>Why Singly Linked Lists?</th><th>Example</th></tr>
<tr><td>Undo Systems</td><td>Easy to add/remove from front</td><td>Text editors</td></tr>
<tr><td>Symbol Tables</td><td>Dynamic size, fast insertion</td><td>Compiler design</td></tr>
<tr><td>Memory Management</td><td>Flexible allocation</td><td>Free list implementation</td></tr>
<tr><td>Polynomial Addition</td><td>Easy term manipulation</td><td>Computer algebra systems</td></tr>
</table>`,
  codeExample: `class Node:
    def __init__(self, data):
        """Initialize a new node with data and null next reference."""
        self.data = data
        self.next = None

class SinglyLinkedList:
    def __init__(self):
        """Initialize an empty list with optional tail tracking."""
        self.head = None
        self.tail = None  # Optional: Maintains last node reference
        self.length = 0   # Optional: Tracks list length
    
    def insert_front(self, data):
        """
        Insert a new node at the front of the list.
        Time Complexity: O(1)
        """
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node
        
        # Update tail if this is the first node
        if not self.tail:
            self.tail = new_node
            
        self.length += 1
    
    def insert_after(self, prev_node, data):
        """
        Insert a new node after a given node.
        Time Complexity: O(1)
        """
        if not prev_node:
            raise ValueError("Previous node cannot be null")
            
        new_node = Node(data)
        new_node.next = prev_node.next
        prev_node.next = new_node
        
        # Update tail if inserting at end
        if prev_node == self.tail:
            self.tail = new_node
            
        self.length += 1
    
    def delete_after(self, prev_node):
        """
        Delete the node after a given node.
        Time Complexity: O(1)
        """
        if not prev_node or not prev_node.next:
            raise ValueError("No node to delete")
            
        # Save the node being deleted
        deleted_node = prev_node.next
        
        # Update references to skip deleted node
        prev_node.next = deleted_node.next
        
        # Update tail if deleting last node
        if deleted_node == self.tail:
            self.tail = prev_node
            
        self.length -= 1
        
        # In languages with manual memory management,
        # we would free deleted_node here
    
    def traverse(self):
        """
        Traverse the list and process each node.
        Time Complexity: O(n)
        """
        current = self.head
        while current:
            # Process current node
            print(current.data, end=" -> ")
            current = current.next
        print("None")
    
    def reverse(self):
        """
        Reverse the list in-place.
        Time Complexity: O(n)
        Space Complexity: O(1)
        """
        prev = None
        current = self.head
        
        # Save tail before we start
        self.tail = self.head
        
        while current:
            # Save next node
            next_node = current.next
            # Reverse current node's pointer
            current.next = prev
            # Move prev and current forward
            prev = current
            current = next_node
            
        # Update head to last node
        self.head = prev

def demonstrate_usage():
    """Demonstrate common singly linked list operations."""
    lst = SinglyLinkedList()
    
    # Build list: 1 -> 2 -> 3
    lst.insert_front(3)  # 3
    lst.insert_front(2)  # 2 -> 3
    lst.insert_front(1)  # 1 -> 2 -> 3
    
    print("Original list:")
    lst.traverse()
    
    # Insert 4 after 2
    current = lst.head
    while current and current.data != 2:
        current = current.next
    if current:
        lst.insert_after(current, 4)
    
    print("\nAfter inserting 4 after 2:")
    lst.traverse()
    
    # Reverse the list
    lst.reverse()
    print("\nAfter reversing:")
    lst.traverse()

demonstrate_usage()`,
  exercises: [
    {
      prompt: 'Implement a method to detect if a singly linked list has a cycle using Floyd\'s cycle-finding algorithm.',
      initialCode: `def has_cycle(self):
    """
    Detect if the linked list has a cycle.
    Return True if cycle exists, False otherwise.
    Use Floyd's cycle-finding algorithm (tortoise and hare).
    """
    # Implement your solution here
    pass`,
      solution: `def has_cycle(self):
    """
    Detect if the linked list has a cycle.
    Return True if cycle exists, False otherwise.
    Use Floyd's cycle-finding algorithm (tortoise and hare).
    """
    if not self.head:
        return False
        
    # Initialize tortoise and hare pointers
    tortoise = self.head
    hare = self.head
    
    # Move tortoise one step and hare two steps
    while hare and hare.next:
        tortoise = tortoise.next      # Move one step
        hare = hare.next.next         # Move two steps
        
        # If they meet, there's a cycle
        if tortoise == hare:
            return True
            
    return False`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'Why might you choose not to maintain a tail pointer in a singly linked list?',
      options: [
        'It makes the list faster to traverse',
        'It reduces memory usage and maintenance overhead',
        'It improves deletion performance',
        'It makes the list easier to reverse',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. A tail pointer doesn\'t affect traversal speed.',
        'Correct! If you rarely need to append elements, the extra memory and maintenance overhead of a tail pointer might not be worth it.',
        'Incorrect. A tail pointer generally doesn\'t help with deletion.',
        'Incorrect. A tail pointer doesn\'t significantly impact reversal operations.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};

const doublyLinkedData: LessonContent = {
  title: 'Doubly Linked Lists: Bidirectional Data Organization',
  content: `<p>
A doubly linked list builds upon the singly linked list concept by adding the ability to traverse backwards. Think of it like a train where each car is connected to both the car in front and behind it. This bidirectional connectivity offers new capabilities but also introduces additional complexity in management.
</p>

<p>
To understand why this matters, imagine browsing your web history. You need to move both forward and backward easily—this is a perfect use case for a doubly linked list. The extra previous reference in each node makes such navigation natural and efficient.
</p>

<h3><u>Enhanced Capabilities</u></h3>

<p>
The bidirectional nature of doubly linked lists enables several advantages:
</p>

<h4><b>1. Improved Navigation</b></h4>
<p>
The ability to move in both directions enables:
</p>
<li>Efficient backward traversal</li>
<li>Easy access to previous elements</li>
<li>Simplified deletion operations</li>

<h4><b>2. Additional Operations</b></h4>
<p>
New operations become more efficient:
</p>
<li>Deletion of current node without previous reference</li>
<li>Insertion before a given node</li>
<li>Reverse traversal without recursion or stack</li>

<h3><u>Design Considerations</u></h3>

<p>
Working with doubly linked lists requires careful attention to:
</p>

<h4><b>1. Reference Management</b></h4>
<p>
Each node modification must maintain two references:
</p>
<li>Previous pointer integrity</li>
<li>Next pointer consistency</li>
<li>Head and tail boundary cases</li>

<h4><b>2. Memory Overhead</b></h4>
<p>
The cost of bidirectional linking includes:
</p>
<li>Extra memory per node for previous reference</li>
<li>More complex insertion/deletion logic</li>
<li>Additional pointer maintenance</li>

<h3><u>Real-World Applications</u></h3>

<table>
<tr><th>Application</th><th>Why Doubly Linked?</th><th>Example</th></tr>
<tr><td>Browser History</td><td>Forward/back navigation</td><td>Web browsers</td></tr>
<tr><td>Music Players</td><td>Previous/next track</td><td>Media software</td></tr>
<tr><td>Text Editors</td><td>Cursor movement</td><td>Word processors</td></tr>
<tr><td>Cache Systems</td><td>LRU implementation</td><td>Memory management</td></tr>
</table>`,
  codeExample: `class DoublyNode:
    def __init__(self, data):
        """Initialize a node with data and null references."""
        self.data = data
        self.next = None
        self.prev = None

class DoublyLinkedList:
    def __init__(self):
        """Initialize an empty doubly linked list."""
        self.head = None
        self.tail = None
        self.length = 0
    
    def insert_front(self, data):
        """
        Insert a new node at the front of the list.
        Time Complexity: O(1)
        """
        new_node = DoublyNode(data)
        
        if not self.head:
            # Empty list case
            self.head = new_node
            self.tail = new_node
        else:
            # Connect new node to current head
            new_node.next = self.head
            self.head.prev = new_node
            # Update head
            self.head = new_node
            
        self.length += 1
    
    def insert_after(self, node, data):
        """
        Insert a new node after a given node.
        Time Complexity: O(1)
        """
        if not node:
            raise ValueError("Node cannot be null")
            
        new_node = DoublyNode(data)
        
        # Connect new node to its neighbors
        new_node.prev = node
        new_node.next = node.next
        
        # Update neighboring nodes
        if node.next:
            node.next.prev = new_node
        node.next = new_node
        
        # Update tail if necessary
        if node == self.tail:
            self.tail = new_node
            
        self.length += 1
    
    def delete_node(self, node):
        """
        Delete a given node from the list.
        Time Complexity: O(1)
        """
        if not node:
            raise ValueError("Node cannot be null")
            
        # Update head/tail if necessary
        if node == self.head:
            self.head = node.next
        if node == self.tail:
            self.tail = node.prev
            
        # Update neighboring nodes
        if node.prev:
            node.prev.next = node.next
        if node.next:
            node.next.prev = node.prev
            
        self.length -= 1
        
        # In languages with manual memory management,
        # we would free node here
    
    def traverse_forward(self):
        """
        Traverse the list forward.
        Time Complexity: O(n)
        """
        current = self.head
        while current:
            print(current.data, end=" <-> ")
            current = current.next
        print("None")
    
    def traverse_backward(self):
        """
        Traverse the list backward.
        Time Complexity: O(n)
        """
        current = self.tail
        while current:
            print(current.data, end=" <-> ")
            current = current.prev
        print("None")
    
    def find_middle(self):
        """
        Find the middle node using the tortoise and hare algorithm.
        Time Complexity: O(n)
        """
        if not self.head:
            return None
            
        tortoise = self.head
        hare = self.head
        
        while hare.next and hare.next.next:
            tortoise = tortoise.next
            hare = hare.next.next
            
        return tortoise.data

def demonstrate_usage():
    """Demonstrate common doubly linked list operations."""
    lst = DoublyLinkedList()
    
    # Build list: 1 <-> 2 <-> 3
    lst.insert_front(3)  # 3
    lst.insert_front(2)  # 2 <-> 3
    lst.insert_front(1)  # 1 <-> 2 <-> 3
    
    print("Original list forward:")
    lst.traverse_forward()
    
    print("\nOriginal list backward:")
    lst.traverse_backward()
    
    # Insert 4 after node with value 2
    current = lst.head
    while current and current.data != 2:
        current = current.next
    if current:
        lst.insert_after(current, 4)
    
    print("\nAfter inserting 4 after 2:")
    lst.traverse_forward()
    
    # Delete node with value 3
    current = lst.head
    while current and current.data != 3:
        current = current.next
    if current:
        lst.delete_node(current)
    
    print("\nAfter deleting 3:")
    lst.traverse_forward()
    
    print("\nMiddle element:", lst.find_middle())

demonstrate_usage()`,
  exercises: [
    {
      prompt: 'Implement a method to swap two nodes in a doubly linked list given their values.',
      initialCode: `def swap_nodes(self, value1, value2):
    """
    Swap two nodes with given values in the doubly linked list.
    Handle all edge cases (head, tail, adjacent nodes).
    """
    # Implement your solution here
    pass`,
      solution: `def swap_nodes(self, value1, value2):
    """
    Swap two nodes with given values in the doubly linked list.
    Handle all edge cases (head, tail, adjacent nodes).
    """
    if value1 == value2:
        return
        
    # Find nodes with given values
    node1, node2 = None, None
    current = self.head
    while current:
        if current.data == value1:
            node1 = current
        elif current.data == value2:
            node2 = current
        current = current.next
        
    if not node1 or not node2:
        return
        
    # Update head/tail if necessary
    if node1 == self.head:
        self.head = node2
    elif node2 == self.head:
        self.head = node1
    if node1 == self.tail:
        self.tail = node2
    elif node2 == self.tail:
        self.tail = node1
        
    # Swap nodes' prev pointers
    node1_prev = node1.prev
    node1.prev = node2.prev
    node2.prev = node1_prev
    
    # Update prev nodes' next pointers
    if node1.prev:
        node1.prev.next = node1
    if node2.prev:
        node2.prev.next = node2
        
    # Swap nodes' next pointers
    node1_next = node1.next
    node1.next = node2.next
    node2.next = node1_next
    
    # Update next nodes' prev pointers
    if node1.next:
        node1.next.prev = node1
    if node2.next:
        node2.next.prev = node2`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'What is the main trade-off when using a doubly linked list instead of a singly linked list?',
      options: [
        'Slower traversal speed',
        'More complex implementation with higher memory usage',
        'Limited functionality',
        'Reduced insertion performance',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Traversal speed is the same in both directions.',
        'Correct! Doubly linked lists require more memory per node and more complex pointer manipulation.',
        'Incorrect. Doubly linked lists actually provide more functionality.',
        'Incorrect. Insertion performance is similar to singly linked lists.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};

const circularLinkedData: LessonContent = {
  title: 'Circular Linked Lists: Connecting the Last to the First',
  content: `<p>
A circular linked list is like a circle of friends holding hands—there is no beginning and no end. Instead of having a null reference at the end, the last node connects back to the first node, creating a continuous cycle. This unique structure makes circular linked lists perfect for applications that need continuous cycling or round-robin processing.
</p>

<h3><u>Key Characteristics</u></h3>

<p>
Circular linked lists can be either singly or doubly linked, each with distinct properties:
</p>

<h4><b>1. Singly Circular</b></h4>
<p>Like a one-way circular track:</p>
<li>Last node's next points to first node</li>
<li>No null references in the list</li>
<li>Can traverse the entire list from any node</li>

<h4><b>2. Doubly Circular</b></h4>
<p>Like a two-way circular track:</p>
<li>Last node's next points to first node</li>
<li>First node's prev points to last node</li>
<li>Can traverse in either direction from any node</li>

<h3><u>Design Considerations</u></h3>

<h4><b>1. List Management</b></h4>
<p>Special attention needed for:</p>
<li>Maintaining circular structure during modifications</li>
<li>Preventing infinite loops during traversal</li>
<li>Handling empty list cases</li>

<h4><b>2. Termination Conditions</b></h4>
<p>Different from regular linked lists:</p>
<li>Traversal stops when returning to start node</li>
<li>Need to track starting point explicitly</li>
<li>Must handle single-node cycles properly</li>

<h3><u>Common Applications</u></h3>
<table>
<tr><th>Application</th><th>Why Circular?</th><th>Example</th></tr>
<tr><td>Round-Robin Scheduling</td><td>Continuous cycling through items</td><td>CPU scheduling</td></tr>
<tr><td>Game Turns</td><td>Rotating player turns</td><td>Multiplayer games</td></tr>
<tr><td>Playlist Loops</td><td>Continuous media playback</td><td>Music players</td></tr>
<tr><td>Task Management</td><td>Cyclic task execution</td><td>Job scheduling</td></tr>
</table>`,
  codeExample: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class CircularLinkedList:
    def __init__(self):
        """Initialize an empty circular linked list."""
        self.head = None
    
    def insert_front(self, data):
        """
        Insert a new node at the front of the list.
        Time Complexity: O(1) if we maintain tail, O(n) otherwise
        """
        new_node = Node(data)
        
        if not self.head:
            # First node points to itself
            new_node.next = new_node
            self.head = new_node
            return
            
        # Find the last node
        last = self.head
        while last.next != self.head:
            last = last.next
            
        # Insert new node at front
        new_node.next = self.head
        last.next = new_node
        self.head = new_node
    
    def insert_after(self, prev_node, data):
        """
        Insert a new node after a given node.
        Time Complexity: O(1)
        """
        if not prev_node:
            raise ValueError("Previous node cannot be null")
            
        new_node = Node(data)
        new_node.next = prev_node.next
        prev_node.next = new_node
    
    def delete_node(self, data):
        """
        Delete the first occurrence of a node with given data.
        Time Complexity: O(n)
        """
        if not self.head:
            return
            
        # If head node to be deleted
        if self.head.data == data:
            if self.head.next == self.head:
                self.head = None  # Single node case
            else:
                # Find last node
                last = self.head
                while last.next != self.head:
                    last = last.next
                # Update references
                last.next = self.head.next
                self.head = self.head.next
            return
            
        # Find node to delete
        current = self.head
        while current.next != self.head and current.next.data != data:
            current = current.next
            
        # If node found, delete it
        if current.next != self.head:
            current.next = current.next.next
    
    def traverse(self):
        """
        Traverse and print the circular list.
        Time Complexity: O(n)
        """
        if not self.head:
            print("Empty list")
            return
            
        current = self.head
        while True:
            print(current.data, end=" -> ")
            current = current.next
            if current == self.head:
                break
        print(" (back to start)")
    
    def rotate(self, positions):
        """
        Rotate the list by given number of positions.
        Time Complexity: O(n)
        """
        if not self.head or positions == 0:
            return
            
        # Find the last node and list length
        current = self.head
        length = 1
        while current.next != self.head:
            current = current.next
            length += 1
            
        # Normalize positions
        positions = positions % length
        if positions == 0:
            return
            
        # Move head forward
        for _ in range(positions):
            self.head = self.head.next

def demonstrate_usage():
    """Demonstrate circular linked list operations."""
    clist = CircularLinkedList()
    
    # Build list: 1 -> 2 -> 3 -> (back to 1)
    clist.insert_front(3)
    clist.insert_front(2)
    clist.insert_front(1)
    
    print("Original list:")
    clist.traverse()
    
    # Insert 4 after 2
    current = clist.head
    while current.data != 2:
        current = current.next
    clist.insert_after(current, 4)
    
    print("\nAfter inserting 4 after 2:")
    clist.traverse()
    
    # Delete 3
    clist.delete_node(3)
    print("\nAfter deleting 3:")
    clist.traverse()
    
    # Rotate by 2 positions
    clist.rotate(2)
    print("\nAfter rotating by 2 positions:")
    clist.traverse()

demonstrate_usage()`,
  exercises: [
    {
      prompt: 'Implement a method to detect if a linked list is circular and find the starting node of the cycle.',
      initialCode: `def find_cycle_start(self):
    """
    Find the starting node of a cycle in the list.
    Return the data of the starting node or None if no cycle.
    Use Floyd's cycle finding algorithm.
    """
    # Implement your solution here
    pass`,
      solution: `def find_cycle_start(self):
    """
    Find the starting node of a cycle in the list.
    Return the data of the starting node or None if no cycle.
    Use Floyd's cycle finding algorithm.
    """
    if not self.head:
        return None
        
    # Step 1: Detect cycle using Floyd's algorithm
    slow = fast = self.head
    has_cycle = False
    
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            has_cycle = True
            break
            
    if not has_cycle:
        return None
        
    # Step 2: Find cycle start
    # Move one pointer to head and keep other at meeting point
    slow = self.head
    while slow != fast:
        slow = slow.next
        fast = fast.next
        
    return slow.data`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'What is the key advantage of using a circular linked list over a regular linked list?',
      options: [
        'Faster traversal speed',
        'Less memory usage',
        'No need for null checking',
        'Ability to cycle through elements continuously',
      ],
      correctAnswer: 3,
      explanations: [
        'Incorrect. Traversal speed is the same.',
        'Incorrect. Memory usage is similar.',
        'Incorrect. Null checking is still needed for empty lists.',
        'Correct! Circular lists excel at applications requiring continuous cycling through elements.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What is the main challenge when implementing a circular linked list?',
      options: [
        'Higher memory requirements',
        'Avoiding infinite loops during traversal',
        'Slower insertion operations',
        'Limited functionality',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Memory requirements are similar to regular linked lists.',
        'Correct! Proper termination conditions must be implemented to avoid infinite traversal.',
        'Incorrect. Insertion operations have the same complexity.',
        'Incorrect. Circular lists provide additional functionality.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};

const fastSlowData: LessonContent = {
  title: 'Fast and Slow Pointers: A Journey Through Linked List Algorithms',
  content: `<p>
Imagine you're watching a race between a tortoise and a hare on a circular track. The hare moves twice as fast as the tortoise, and if they keep running long enough, the hare will eventually catch up to the tortoise. This simple but profound observation forms the basis of Floyd's cycle detection algorithm and the broader fast-slow pointer technique.
</p>

<h3><u>Understanding Fast-Slow Pointers</u></h3>

<p>
The fast-slow pointer technique, also known as the tortoise and hare algorithm, is an elegant approach that uses two pointers moving at different speeds through a sequence. Let's understand why this works through a simple analogy:
</p>

<p>
Think of two hikers walking along a trail that might contain a loop. The first hiker (slow pointer) takes one step at a time, while the second hiker (fast pointer) takes two steps. If there's a loop:
</p>
<li>The fast hiker will eventually catch up to the slow hiker</li>
<li>When they meet, they must be inside the loop</li>
<li>The meeting point gives us information about the loop's structure</li>

<h3><u>Core Applications</u></h3>

<h4><b>1. Cycle Detection</b></h4>
<p>
Floyd's cycle detection consists of two phases:
</p>
<li>Phase 1: Detect if a cycle exists (finding meeting point)</li>
<li>Phase 2: Find the start of the cycle (if one exists)</li>

<h4><b>2. Finding Middle Element</b></h4>
<p>
When the fast pointer reaches the end, the slow pointer will be at the middle:
</p>
<li>Fast pointer moves two steps</li>
<li>Slow pointer moves one step</li>
<li>When fast reaches end, slow is at middle</li>

<h4><b>3. Finding Nth Node From End</b></h4>
<p>
By giving the fast pointer a head start of n nodes:
</p>
<li>Fast pointer starts n nodes ahead</li>
<li>Both pointers move at same speed</li>
<li>When fast reaches end, slow is at target</li>

<h3><u>Mathematical Foundation</u></h3>

<p>
The algorithm works because:
</p>

<table>
<tr><th>Concept</th><th>Mathematical Property</th><th>Practical Implication</th></tr>
<tr><td>Distance Relation</td><td>2(slow) = fast</td><td>Fast catches slow in loop</td></tr>
<tr><td>Meeting Point</td><td>k = m + λn</td><td>Meeting occurs after complete loops</td></tr>
<tr><td>Phase 2 Distance</td><td>m = n - r</td><td>Distance to cycle start equals remainder</td></tr>
</table>

<p>
Where:
</p>
<li>k = number of steps taken</li>
<li>m = distance to cycle start</li>
<li>n = cycle length</li>
<li>λ = number of complete cycles</li>
<li>r = remainder in cycle at meeting</li>`,
  codeExample: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
        
    def detect_and_find_cycle(self):
        """
        Floyd's cycle detection algorithm implementation.
        Returns (has_cycle, cycle_start_data) tuple.
        """
        if not self.head:
            return False, None
            
        # Phase 1: Detect cycle
        slow = fast = self.head
        has_cycle = False
        
        while fast and fast.next:
            slow = slow.next           # Move one step
            fast = fast.next.next      # Move two steps
            
            if slow == fast:
                has_cycle = True
                break
                
        if not has_cycle:
            return False, None
            
        # Phase 2: Find cycle start
        # Move slow to head, keep fast at meeting point
        slow = self.head
        while slow != fast:
            slow = slow.next
            fast = fast.next
            
        return True, slow.data
    
    def find_middle(self):
        """
        Find middle node using fast-slow pointers.
        For even length, returns second middle node.
        """
        if not self.head:
            return None
            
        slow = fast = self.head
        
        # Move fast twice as fast as slow
        while fast.next and fast.next.next:
            slow = slow.next
            fast = fast.next.next
            
        return slow.data
    
    def find_nth_from_end(self, n):
        """
        Find nth node from end using fast-slow pointers.
        Returns data of the node or None if not found.
        """
        if not self.head or n < 1:
            return None
            
        # Move fast n nodes ahead
        fast = self.head
        for _ in range(n):
            if not fast:
                return None
            fast = fast.next
            
        # If n equals length, return first node
        if not fast:
            return self.head.data
            
        # Move both pointers until fast reaches end
        slow = self.head
        while fast:
            slow = slow.next
            fast = fast.next
            
        return slow.data
    
    def has_palindrome_pattern(self):
        """
        Check if linked list has palindrome pattern using fast-slow.
        """
        if not self.head:
            return True
            
        # Find middle using fast-slow
        slow = fast = self.head
        prev = None
        
        while fast and fast.next:
            fast = fast.next.next
            # Reverse first half while finding middle
            next_node = slow.next
            slow.next = prev
            prev = slow
            slow = next_node
            
        # Handle odd length: skip middle node
        if fast:
            slow = slow.next
            
        # Compare reversed first half with second half
        while prev and slow:
            if prev.data != slow.data:
                return False
            prev = prev.next
            slow = slow.next
            
        return True

def demonstrate_fast_slow():
    """Demonstrate various fast-slow pointer applications."""
    # Create a linked list with cycle
    lst = LinkedList()
    nodes = [Node(i) for i in range(1, 6)]
    
    # Connect nodes
    for i in range(len(nodes)-1):
        nodes[i].next = nodes[i+1]
    lst.head = nodes[0]
    
    # Create cycle: 1->2->3->4->5->3
    nodes[-1].next = nodes[2]  # Point 5 back to 3
    
    # Detect cycle
    has_cycle, cycle_start = lst.detect_and_find_cycle()
    print(f"Has cycle: {has_cycle}")
    print(f"Cycle starts at: {cycle_start}")
    
    # Create cycle-free list for other demos
    lst2 = LinkedList()
    for i in range(1, 6):
        node = Node(i)
        node.next = lst2.head
        lst2.head = node
    
    # Find middle element
    print(f"Middle element: {lst2.find_middle()}")
    
    # Find 2nd node from end
    print(f"2nd node from end: {lst2.find_nth_from_end(2)}")
    
    # Check palindrome pattern
    lst3 = LinkedList()
    for x in [1, 2, 3, 2, 1]:  # Palindrome pattern
        node = Node(x)
        node.next = lst3.head
        lst3.head = node
    print(f"Is palindrome: {lst3.has_palindrome_pattern()}")

demonstrate_fast_slow()`,
  exercises: [
    {
      prompt: 'Implement a method to find the intersection point of two linked lists using the fast-slow pointer technique.',
      initialCode: `def find_intersection(list1, list2):
    """
    Find the intersection point of two linked lists.
    Return the data of intersection node or None if no intersection.
    """
    # Implement your solution here
    pass`,
      solution: `def find_intersection(list1, list2):
    """
    Find the intersection point of two linked lists.
    Return the data of intersection node or None if no intersection.
    """
    if not list1 or not list2:
        return None
        
    # Find lengths of both lists
    len1 = len2 = 0
    curr1, curr2 = list1, list2
    
    while curr1:
        len1 += 1
        curr1 = curr1.next
    while curr2:
        len2 += 1
        curr2 = curr2.next
        
    # Reset pointers to heads
    curr1, curr2 = list1, list2
    
    # Move longer list pointer ahead
    if len1 > len2:
        for _ in range(len1 - len2):
            curr1 = curr1.next
    else:
        for _ in range(len2 - len1):
            curr2 = curr2.next
            
    # Move both pointers until they meet
    while curr1 and curr2:
        if curr1 == curr2:
            return curr1.data
        curr1 = curr1.next
        curr2 = curr2.next
        
    return None`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why does Floyd\'s cycle detection algorithm use different speeds for the two pointers?',
      options: [
        'To save memory',
        'To ensure the pointers will meet if there\'s a cycle',
        'To make the algorithm faster',
        'To handle larger lists',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. The memory usage is the same regardless of pointer speeds.',
        'Correct! Different speeds ensure the pointers will eventually meet in a cycle, as their relative speed allows them to catch up.',
        'Incorrect. The algorithm\'s speed isn\'t improved by using different pointer speeds.',
        'Incorrect. The list size doesn\'t affect the need for different speeds.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'In the palindrome check algorithm, why do we reverse the first half of the list while finding the middle?',
      options: [
        'To improve algorithm efficiency',
        'To save memory by modifying in-place',
        'To handle odd-length lists',
        'To avoid using extra data structures',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. The efficiency is similar to using extra space.',
        'Correct! Reversing while finding the middle allows us to check palindrome property without extra space.',
        'Incorrect. Odd-length handling is a separate concern.',
        'Incorrect. While true, this is a consequence, not the main reason.',
      ],
      difficulty: Difficulty.Advanced,
    }
  ],
};

const multiplePointersData: LessonContent = {
  title: 'Multiple Pointers: Advanced Linked List Problem Solving',
  content: `<p>
Imagine you're conducting an orchestra where different musicians need to stay coordinated while playing at their own pace. Similarly, multiple pointer techniques in linked lists involve coordinating several pointers that move through the list independently but work together to solve complex problems. This powerful approach allows us to gather and process information from different parts of the list simultaneously.
</p>

<p>
Let's explore how using multiple pointers can transform complex problems into elegant solutions by understanding the fundamental principles and building up to sophisticated applications.
</p>

<h3><u>Understanding Multiple Pointers</u></h3>

<p>
Multiple pointer techniques extend beyond the basic single traversal approach. Consider how we might spot patterns in a sequence of numbers. While one pointer examines a value, another could be looking ahead for matching patterns, and a third might track the best pattern found so far. Each pointer serves a specific purpose in our solution strategy.
</p>

<h4><b>Core Concepts</b></h4>
<p>
When working with multiple pointers, we need to consider:
</p>
<li>Pointer initialization positions</li>
<li>Movement patterns and trigger conditions</li>
<li>Synchronization between pointers</li>
<li>Termination conditions</li>

<h3><u>Common Patterns</u></h3>

<h4><b>1. Leading-Following Pattern</b></h4>
<p>
One pointer leads while others follow at specific intervals:
</p>
<li>Leader explores ahead to identify patterns or conditions</li>
<li>Followers maintain relative positions</li>
<li>Used for window-based operations</li>

<h4><b>2. Converging Pattern</b></h4>
<p>
Multiple pointers move toward each other:
</p>
<li>Start from different positions</li>
<li>Move based on specific conditions</li>
<li>Stop when pointers meet or cross</li>

<h4><b>3. Diverging Pattern</b></h4>
<p>
Pointers move away from each other:
</p>
<li>Start from same or adjacent positions</li>
<li>Move outward based on conditions</li>
<li>Used for expanding window problems</li>

<h3><u>Applications and Time Complexity</u></h3>
<table>
<tr><th>Pattern</th><th>Example Application</th><th>Time Complexity</th><th>Space Complexity</th></tr>
<tr><td>Leading-Following</td><td>Finding duplicates within k distance</td><td>O(n)</td><td>O(1)</td></tr>
<tr><td>Converging</td><td>Finding symmetric patterns</td><td>O(n)</td><td>O(1)</td></tr>
<tr><td>Diverging</td><td>Maximum subarray sum</td><td>O(n)</td><td>O(1)</td></tr>
</table>`,
  codeExample: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
    
    def partition_list(self, pivot):
        """
        Partition list around pivot value using multiple pointers.
        All nodes less than pivot come before nodes greater or equal.
        Maintains relative order within each partition.
        """
        if not self.head:
            return
            
        # Create dummy nodes for each partition
        less_head = less = Node(0)
        equal_head = equal = Node(0)
        greater_head = greater = Node(0)
        
        # Traverse and partition
        current = self.head
        while current:
            if current.data < pivot:
                less.next = current
                less = less.next
            elif current.data == pivot:
                equal.next = current
                equal = equal.next
            else:
                greater.next = current
                greater = greater.next
            current = current.next
        
        # Connect partitions
        greater.next = None
        equal.next = greater_head.next
        less.next = equal_head.next
        
        # Update head
        self.head = less_head.next
    
    def group_adjacent_pairs(self):
        """
        Group adjacent pairs in the list using multiple pointers.
        For list: 1->2->3->4->5->6 
        Result: 2->1->4->3->6->5
        """
        if not self.head or not self.head.next:
            return
            
        # First node in pair is new head
        self.head = self.head.next
        
        # Set up pointers
        prev = None
        current = self.head
        
        # Process pairs
        while current and current.next:
            # Save pointers
            next_pair = current.next.next
            first = current.next
            second = current
            
            # Swap pair
            first.next = second
            second.next = next_pair
            
            # Connect with previous pair
            if prev:
                prev.next = first
                
            # Move to next pair
            prev = second
            current = next_pair
    
    def three_way_merge(self, list2, list3):
        """
        Merge three sorted lists into one sorted list.
        Uses three pointers to track positions in each list.
        """
        # Create dummy head for result
        dummy = Node(0)
        tail = dummy
        
        # Initialize pointers for each list
        p1, p2, p3 = self.head, list2.head, list3.head
        
        while p1 or p2 or p3:
            # Find minimum of available values
            min_val = float('inf')
            min_ptr = None
            
            if p1 and p1.data < min_val:
                min_val = p1.data
                min_ptr = 1
            if p2 and p2.data < min_val:
                min_val = p2.data
                min_ptr = 2
            if p3 and p3.data < min_val:
                min_val = p3.data
                min_ptr = 3
            
            # Add minimum value to result
            if min_ptr == 1:
                tail.next = p1
                p1 = p1.next
            elif min_ptr == 2:
                tail.next = p2
                p2 = p2.next
            else:
                tail.next = p3
                p3 = p3.next
                
            tail = tail.next
        
        self.head = dummy.next

def demonstrate_multi_pointer():
    """Demonstrate various multiple pointer techniques."""
    # Create sample list
    lst = LinkedList()
    values = [3, 1, 4, 5, 2, 6]
    prev = None
    
    for val in values:
        node = Node(val)
        if not lst.head:
            lst.head = node
        else:
            prev.next = node
        prev = node
    
    # Demonstrate partition
    print("Original list:", print_list(lst.head))
    lst.partition_list(4)
    print("After partitioning around 4:", print_list(lst.head))
    
    # Demonstrate pair grouping
    lst.group_adjacent_pairs()
    print("After grouping pairs:", print_list(lst.head))
    
    # Demonstrate three-way merge
    list2 = create_sorted_list([2, 4, 6])
    list3 = create_sorted_list([1, 3, 5])
    lst.three_way_merge(list2, list3)
    print("After three-way merge:", print_list(lst.head))

def print_list(head):
    """Helper function to print list."""
    result = []
    current = head
    while current:
        result.append(str(current.data))
        current = current.next
    return " -> ".join(result)

def create_sorted_list(values):
    """Helper function to create sorted list."""
    lst = LinkedList()
    prev = None
    for val in sorted(values):
        node = Node(val)
        if not lst.head:
            lst.head = node
        else:
            prev.next = node
        prev = node
    return lst

demonstrate_multi_pointer()`,
  exercises: [
    {
      prompt: 'Implement a method to rearrange a linked list such that all even-valued nodes appear after odd-valued nodes while maintaining their relative order.',
      initialCode: `def group_even_odd(self):
    """
    Rearrange list so odd values appear before even values.
    Maintain relative order within odd and even groups.
    """
    # Implement your solution here
    pass`,
      solution: `def group_even_odd(self):
    """
    Rearrange list so odd values appear before even values.
    Maintain relative order within odd and even groups.
    """
    if not self.head or not self.head.next:
        return
        
    # Initialize pointers for odd and even lists
    odd_head = odd = Node(0)
    even_head = even = Node(0)
    
    # Traverse and separate odd/even values
    current = self.head
    while current:
        if current.data % 2 == 1:
            odd.next = current
            odd = odd.next
        else:
            even.next = current
            even = even.next
        current = current.next
    
    # Connect odd and even groups
    odd.next = even_head.next
    even.next = None
    
    # Update head to start of odd group
    self.head = odd_head.next`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'Why might we prefer multiple pointers over using additional data structures?',
      options: [
        'Multiple pointers are always faster',
        'To achieve constant space complexity',
        'Multiple pointers are easier to implement',
        'To reduce code complexity',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Performance depends on the specific problem.',
        'Correct! Multiple pointers often allow us to solve problems in O(1) space instead of using auxiliary data structures.',
        'Incorrect. Multiple pointer solutions can be more complex to implement.',
        'Incorrect. Multiple pointer solutions often increase code complexity.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};

const distanceKData: LessonContent = {
  title: 'K-Distance Pointers: Maintaining Fixed Intervals in Linked Lists',
  content: `<p>
Imagine you're organizing a parade where groups need to maintain exact distances between them. K-distance pointer techniques work similarly, keeping pointers a fixed number of nodes apart while traversing a linked list. This approach is particularly powerful for solving problems that involve relationships between elements at specific intervals.
</p>

<h3><u>Understanding K-Distance Relationships</u></h3>

<p>
When we maintain pointers at a fixed distance k apart, we create a moving window that helps us analyze relationships between nodes separated by exactly k positions. Think of it like having multiple bookmarks in a book, each separated by exactly k pages, moving through the book together.
</p>

<h4><b>Key Concepts</b></h4>

<p>
Successfully implementing k-distance pointers requires understanding several fundamental concepts:
</p>

<li>Initialization: Moving the lead pointer k steps ahead</li>
<li>Synchronization: Moving all pointers together to maintain distance</li>
<li>Window Properties: What we can learn from elements k steps apart</li>
<li>Edge Cases: Handling distances larger than list length</li>

<h3><u>Common Applications</u></h3>

<h4><b>1. Finding Patterns</b></h4>
<p>
K-distance pointers excel at identifying patterns:
</p>
<li>Detecting repeating sequences</li>
<li>Finding elements that sum to a target</li>
<li>Identifying palindromic subsequences</li>

<h4><b>2. Data Processing</b></h4>
<p>
Processing elements with fixed relationships:
</p>
<li>Group processing of k-separated elements</li>
<li>Calculating rolling statistics</li>
<li>Validating distance-based constraints</li>

<h3><u>Implementation Considerations</u></h3>
<table>
<tr><th>Aspect</th><th>Consideration</th><th>Solution</th></tr>
<tr><td>Initialization</td><td>List shorter than k</td><td>Validate length first</td></tr>
<tr><td>Maintenance</td><td>Keeping k distance</td><td>Move pointers together</td></tr>
<tr><td>Termination</td><td>Reaching list end</td><td>Check all pointers</td></tr>
<tr><td>Memory</td><td>Space complexity</td><td>Usually O(1)</td></tr>
</table>`,
  codeExample: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
    
    def find_sum_at_k_distance(self, k, target):
        """
        Find pairs of nodes at distance k that sum to target.
        Returns list of (value1, value2) pairs.
        """
        if not self.head:
            return []
            
        # Validate k and list length
        length = 0
        current = self.head
        while current:
            length += 1
            current = current.next
            
        if k >= length:
            return []
            
        result = []
        # For each possible starting position
        current = self.head
        while current:
            # Get node k positions ahead
            ahead = current
            for _ in range(k):
                if not ahead:
                    break
                ahead = ahead.next
                
            # Check if pair sums to target
            if ahead and current.data + ahead.data == target:
                result.append((current.data, ahead.data))
                
            current = current.next
            
        return result
    
    def group_k_distance_nodes(self, k):
        """
        Group nodes that are k distance apart.
        Returns list of groups.
        """
        if not self.head:
            return []
            
        # Initialize result and pointer array
        result = []
        pointers = []
        
        # Initialize first group of pointers
        current = self.head
        while len(pointers) < k and current:
            pointers.append(current)
            current = current.next
            
        # Process groups until we run out of nodes
        while any(pointers):
            # Collect current group
            group = []
            for p in pointers:
                if p:
                    group.append(p.data)
            if group:
                result.append(group)
                
            # Move all pointers k steps
            for i in range(len(pointers)):
                current = pointers[i]
                for _ in range(k):
                    if current:
                        current = current.next
                pointers[i] = current
                
        return result
    
    def verify_k_distance_property(self, k, property_func):
        """
        Verify if all nodes k distance apart satisfy a given property.
        property_func takes two nodes and returns boolean.
        """
        if not self.head or k < 1:
            return True
            
        current = self.head
        while current:
            # Get node k positions ahead
            ahead = current
            for _ in range(k):
                if not ahead:
                    break
                ahead = ahead.next
                
            # Check property if we found a node k positions ahead
            if ahead and not property_func(current.data, ahead.data):
                return False
                
            current = current.next
            
        return True

def demonstrate_k_distance():
    """Demonstrate k-distance pointer techniques."""
    lst = LinkedList()
    
    # Create list: 1->2->3->4->5->6->7->8
    values = list(range(1, 9))
    prev = None
    for val in values:
        node = Node(val)
        if not prev:
            lst.head = node
        else:
            prev.next = node
        prev = node
    
    # Find pairs k distance apart that sum to 10
    k = 3
    pairs = lst.find_sum_at_k_distance(k, 10)
    print(f"Pairs at distance {k} summing to 10:", pairs)
    
    # Group nodes k distance apart
    groups = lst.group_k_distance_nodes(3)
    print("Groups of nodes 3 distance apart:", groups)
    
    # Verify property: nodes k distance apart sum to even number
    is_sum_even = lambda x, y: (x + y) % 2 == 0
    result = lst.verify_k_distance_property(2, is_sum_even)
    print("All pairs 2 distance apart sum to even:", result)

demonstrate_k_distance()`,
  exercises: [
    {
      prompt: 'Implement a method to rearrange a linked list by connecting nodes that are k distance apart directly.',
      initialCode: `def connect_k_distant_nodes(self, k):
    """
    Rearrange list by connecting each node to its k-distant node.
    Example: For k=2, 1->2->3->4->5 becomes 1->3->5->2->4
    """
    # Implement your solution here
    pass`,
      solution: `def connect_k_distant_nodes(self, k):
    """
    Rearrange list by connecting each node to its k-distant node.
    Example: For k=2, 1->2->3->4->5 becomes 1->3->5->2->4
    """
    if not self.head or k <= 1:
        return
        
    # Count nodes and validate k
    length = 0
    current = self.head
    while current:
        length += 1
        current = current.next
        
    if k >= length:
        return
        
    # Store all nodes in array for easy access
    nodes = []
    current = self.head
    while current:
        nodes.append(current)
        current = current.next
        
    # Rearrange connections
    for i in range(length):
        if i + k < length:
            nodes[i].next = nodes[i + k]
        else:
            # Connect to nodes in second group
            remaining = (i + k) % length
            if remaining < k:
                nodes[i].next = nodes[remaining]
            else:
                nodes[i].next = None
                
    # Update head if necessary
    if k > 1:
        self.head = nodes[0]`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'What is the key challenge when implementing k-distance pointer algorithms?',
      options: [
        'High memory usage',
        'Complex pointer manipulation',
        'Maintaining the k-distance invariant',
        'Slow execution time',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. K-distance algorithms typically use O(1) extra space.',
        'Incorrect. Pointer manipulation is straightforward once distance is maintained.',
        'Correct! Ensuring pointers remain exactly k nodes apart while traversing is the main challenge.',
        'Incorrect. These algorithms are usually O(n) time efficient.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};

const cycleDetectionData: LessonContent = {
  title: 'Cycle Detection: Finding and Handling Loops in Linked Lists',
  content: `<p>
Imagine you're exploring a maze where some paths might loop back to places you've visited before. Cycle detection in linked lists works similarly – we need to determine if following the links eventually leads us back to a node we've seen before. This fundamental problem has applications ranging from detecting deadlocks to verifying data integrity.
</p>

<h3><u>Understanding Cycles in Linked Lists</u></h3>

<p>
A cycle occurs when a node's next pointer points to a previous node in the list, creating a loop. There are several important aspects to consider:
</p>

<h4><b>Types of Cycles</b></h4>
<li>Full Cycle: Last node points to head</li>
<li>Internal Cycle: Last node points to internal node</li>
<li>No Cycle: Normal linked list ending with null</li>

<h4><b>Key Challenges</b></h4>
<p>
Detecting and handling cycles presents several challenges:
</p>
<li>Detecting cycle existence</li>
<li>Finding cycle start point</li>
<li>Determining cycle length</li>
<li>Breaking cycles safely</li>

<h3><u>Detection Algorithms</u></h3>

<h4><b>1. Floyd's Cycle-Finding Algorithm</b></h4>
<p>Also known as the "tortoise and hare" algorithm:</p>
<li>Uses two pointers moving at different speeds</li>
<li>Fast pointer moves twice as fast as slow pointer</li>
<li>If they meet, a cycle exists</li>

<h4><b>2. Brent's Algorithm</b></h4>
<p>An optimization over Floyd's algorithm:</p>
<li>Uses power-of-two jumps</li>
<li>Can be faster in practice</li>
<li>More complex implementation</li>

<h3><u>Time and Space Complexity</u></h3>
<table>
<tr><th>Algorithm</th><th>Time (No Cycle)</th><th>Time (With Cycle)</th><th>Space</th></tr>
<tr><td>Floyd's</td><td>O(n)</td><td>O(n)</td><td>O(1)</td></tr>
<tr><td>Brent's</td><td>O(n)</td><td>O(μ + λ)</td><td>O(1)</td></tr>
<tr><td>Hash Set</td><td>O(n)</td><td>O(n)</td><td>O(n)</td></tr>
</table>

<p>Where:</p>
<li>n = number of nodes</li>
<li>μ = distance to cycle start</li>
<li>λ = cycle length</li>`,
  codeExample: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
    
    def floyd_cycle_detection(self):
        """
        Implement Floyd's cycle detection algorithm.
        Returns (has_cycle, cycle_start, cycle_length) tuple.
        """
        if not self.head:
            return False, None, 0
            
        # Phase 1: Detect cycle
        slow = fast = self.head
        has_cycle = False
        
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow == fast:
                has_cycle = True
                break
                
        if not has_cycle:
            return False, None, 0
            
        # Phase 2: Find cycle start
        slow = self.head
        while slow != fast:
            slow = slow.next
            fast = fast.next
        cycle_start = slow.data
        
        # Phase 3: Calculate cycle length
        cycle_length = 1
        fast = slow.next
        while fast != slow:
            cycle_length += 1
            fast = fast.next
            
        return True, cycle_start, cycle_length
    
    def brent_cycle_detection(self):
        """
        Implement Brent's cycle detection algorithm.
        Returns (has_cycle, cycle_start, cycle_length) tuple.
        """
        if not self.head:
            return False, None, 0
            
        # Initialize pointers
        tortoise = self.head
        hare = self.head.next
        power = 1
        length = 1
        
        # Phase 1: Find cycle
        while hare and hare != tortoise:
            if length == power:
                tortoise = hare
                power *= 2
                length = 0
            hare = hare.next
            length += 1
            
        if not hare:
            return False, None, 0
            
        # Phase 2: Find cycle start
        tortoise = hare = self.head
        for _ in range(length):
            hare = hare.next
            
        while tortoise != hare:
            tortoise = tortoise.next
            hare = hare.next
            
        return True, tortoise.data, length
    
    def break_cycle(self):
        """
        Detect and break any cycle in the list.
        Returns True if cycle was found and broken.
        """
        if not self.head:
            return False
            
        # Detect cycle using Floyd's algorithm
        slow = fast = self.head
        has_cycle = False
        
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow == fast:
                has_cycle = True
                break
                
        if not has_cycle:
            return False
            
        # Find cycle start
        slow = self.head
        prev = None
        while slow != fast:
            prev = fast
            slow = slow.next
            fast = fast.next
            
        # Break cycle
        if prev:
            prev.next = None
        return True

def demonstrate_cycle_detection():
    """Demonstrate cycle detection algorithms."""
    # Create a list with a cycle
    lst = LinkedList()
    nodes = [Node(i) for i in range(1, 6)]
    
    # Connect nodes
    for i in range(len(nodes)-1):
        nodes[i].next = nodes[i+1]
    lst.head = nodes[0]
    
    # Create cycle: 1->2->3->4->5->3
    nodes[-1].next = nodes[2]
    
    # Detect cycle using Floyd's algorithm
    has_cycle, start, length = lst.floyd_cycle_detection()
    print(f"Floyd's Algorithm:")
    print(f"Has cycle: {has_cycle}")
    print(f"Cycle starts at: {start}")
    print(f"Cycle length: {length}")
    
    # Detect cycle using Brent's algorithm
    has_cycle, start, length = lst.brent_cycle_detection()
    print(f"\nBrent's Algorithm:")
    print(f"Has cycle: {has_cycle}")
    print(f"Cycle starts at: {start}")
    print(f"Cycle length: {length}")
    
    # Break cycle
    cycle_broken = lst.break_cycle()
    print(f"\nCycle broken: {cycle_broken}")

demonstrate_cycle_detection()`,
  exercises: [
    {
      prompt: 'Implement a method to find the length of a cycle without using extra space, assuming a cycle exists.',
      initialCode: `def find_cycle_length(self):
    """
    Find the length of the cycle in the linked list.
    Assume cycle exists. Return the length of the cycle.
    Use constant extra space.
    """
    # Implement your solution here
    pass`,
      solution: `def find_cycle_length(self):
    """
    Find the length of the cycle in the linked list.
    Assume cycle exists. Return the length of the cycle.
    Use constant extra space.
    """
    if not self.head:
        return 0
        
    # First, find a point in the cycle
    slow = fast = self.head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            break
            
    if not fast or not fast.next:
        return 0
            
    # Now count the length of the cycle
    # Keep fast pointer at meeting point
    # Move slow pointer until it meets fast again
    slow = slow.next
    length = 1
    
    while slow != fast:
        slow = slow.next
        length += 1
        
    return length`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'Why does Floyd\'s algorithm use a fast pointer moving at twice the speed of the slow pointer?',
      options: [
        'To minimize memory usage',
        'To guarantee cycle detection if it exists',
        'To find the cycle start point',
        'To improve algorithm speed',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Pointer speed doesn\'t affect memory usage.',
        'Correct! The 2:1 speed ratio ensures the pointers will meet if a cycle exists.',
        'Incorrect. Finding the cycle start requires a separate phase.',
        'Incorrect. The speed ratio is for correctness, not performance.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};

const intersectionData: LessonContent = {
  title: 'Finding Intersection Points: When Two Lists Meet',
  content: `<p>
Imagine two roads that start in different places but eventually merge into a single road. This is exactly how linked list intersection works – two separate lists share a common sequence of nodes from some point onward. Understanding how to detect these intersection points is crucial for many real-world applications, from detecting shared resources to identifying common substructures in data.
</p>

<p>
Let's explore this concept step by step, starting with what an intersection means and building up to efficient detection methods.
</p>

<h3><u>Understanding List Intersection</u></h3>

<p>
When we talk about linked list intersection, we're specifically referring to lists that share the exact same nodes – not just nodes with the same values. This is an important distinction because it means that from the intersection point onward, both lists follow exactly the same path through memory.
</p>

<h4><b>Properties of Intersecting Lists</b></h4>
<p>
There are several key characteristics that help us understand and detect intersections:
</p>
<li>From the intersection point onward, all nodes are shared</li>
<li>Both lists must end at the same node if they intersect</li>
<li>The intersection creates a Y-shaped structure in memory</li>
<li>Each node can have only one next pointer, ensuring the merge is permanent</li>

<h3><u>Detection Strategies</u></h3>

<h4><b>1. Length Difference Method</b></h4>
<p>
This elegant approach works by:
</p>
<li>Finding the lengths of both lists</li>
<li>Advancing the longer list by the length difference</li>
<li>Moving both pointers in tandem until they meet</li>
<p>
This method is particularly intuitive because it essentially "aligns" the lists before comparing them.
</p>

<h4><b>2. Two-Pointer Method</b></h4>
<p>
A more sophisticated approach that uses the following insight:
</p>
<li>When first pointer reaches end of list A, point it to head of list B</li>
<li>When second pointer reaches end of list B, point it to head of list A</li>
<li>The pointers will meet at intersection point if one exists</li>

<h3><u>Common Applications</u></h3>
<table>
<tr><th>Application</th><th>Description</th><th>Why Intersection Detection?</th></tr>
<tr><td>File Systems</td><td>Detecting shared file references</td><td>Identify common data blocks</td></tr>
<tr><td>Network Analysis</td><td>Finding common network paths</td><td>Optimize routing and resource sharing</td></tr>
<tr><td>Memory Management</td><td>Detecting shared memory regions</td><td>Prevent duplicate frees</td></tr>
<tr><td>Version Control</td><td>Finding common ancestors</td><td>Merge branch detection</td></tr>
</table>`,
  codeExample: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
    
    def find_intersection_length_method(self, list2):
        """
        Find intersection point using the length difference method.
        Returns the intersecting node's data or None if no intersection exists.
        """
        if not self.head or not list2.head:
            return None
        
        # Helper function to get list length and last node
        def get_length_and_last(head):
            length = 0
            current = head
            while current.next:
                length += 1
                current = current.next
            return length, current
        
        # Get lengths and last nodes of both lists
        len1, last1 = get_length_and_last(self.head)
        len2, last2 = get_length_and_last(list2.head)
        
        # If last nodes are different, lists don't intersect
        if last1 != last2:
            return None
        
        # Determine longer and shorter lists
        longer = self.head if len1 > len2 else list2.head
        shorter = list2.head if len1 > len2 else self.head
        length_diff = abs(len1 - len2)
        
        # Advance longer list pointer by difference in length
        for _ in range(length_diff):
            longer = longer.next
        
        # Move both pointers until they meet
        while longer != shorter:
            longer = longer.next
            shorter = shorter.next
        
        return longer.data if longer else None
    
    def find_intersection_two_pointer(self, list2):
        """
        Find intersection using the two-pointer method.
        Returns the intersecting node's data or None if no intersection exists.
        
        This method works by having each pointer traverse both lists in different orders.
        If there's an intersection, they'll meet at the intersection point.
        If there's no intersection, they'll both reach None simultaneously.
        """
        if not self.head or not list2.head:
            return None
            
        # Initialize pointers
        pointer1 = self.head
        pointer2 = list2.head
        
        # Continue until pointers meet or both reach None
        while pointer1 != pointer2:
            # Move pointer1 to next node or switch to list2 head
            pointer1 = pointer1.next if pointer1 else list2.head
            
            # Move pointer2 to next node or switch to list1 head
            pointer2 = pointer2.next if pointer2 else self.head
            
            # If we've traversed both lists and haven't found intersection
            if pointer1 == list2.head and pointer2 == self.head:
                return None
        
        return pointer1.data if pointer1 else None
    
    def create_intersection(self, list2, value):
        """
        Helper method to create an intersection between two lists.
        Creates a Y-shaped structure where lists merge at node with given value.
        """
        # Create common part
        common = Node(value)
        common.next = Node(value + 1)
        common.next.next = Node(value + 2)
        
        # Attach first list
        current = self.head
        while current.next:
            current = current.next
        current.next = common
        
        # Attach second list
        current = list2.head
        while current.next:
            current = current.next
        current.next = common

def demonstrate_intersection():
    """Demonstrate intersection detection methods."""
    # Create two lists
    list1 = LinkedList()
    list2 = LinkedList()
    
    # Build first list: 1->2->3
    prev = None
    for i in range(1, 4):
        node = Node(i)
        if not list1.head:
            list1.head = node
        else:
            prev.next = node
        prev = node
    
    # Build second list: 4->5
    prev = None
    for i in range(4, 6):
        node = Node(i)
        if not list2.head:
            list2.head = node
        else:
            prev.next = node
        prev = node
    
    # Create intersection at value 6
    list1.create_intersection(list2, 6)
    
    # Find intersection using both methods
    intersection1 = list1.find_intersection_length_method(list2)
    intersection2 = list1.find_intersection_two_pointer(list2)
    
    print("Using length method - Intersection at:", intersection1)
    print("Using two-pointer method - Intersection at:", intersection2)

demonstrate_intersection()`,
  exercises: [
    {
      prompt: 'Implement a method to find the length of the overlapping portion of two intersecting linked lists.',
      initialCode: `def find_overlap_length(self, list2):
    """
    Find the length of the overlapping portion of two intersecting lists.
    Return 0 if lists don't intersect.
    """
    # Implement your solution here
    pass`,
      solution: `def find_overlap_length(self, list2):
    """
    Find the length of the overlapping portion of two intersecting lists.
    Return 0 if lists don't intersect.
    """
    if not self.head or not list2.head:
        return 0
        
    # First find intersection point using two-pointer method
    pointer1 = self.head
    pointer2 = list2.head
    
    while pointer1 != pointer2:
        pointer1 = pointer1.next if pointer1 else list2.head
        pointer2 = pointer2.next if pointer2 else self.head
        
        if pointer1 == list2.head and pointer2 == self.head:
            return 0
            
    if not pointer1:
        return 0
        
    # Count length from intersection point to end
    overlap_length = 1
    while pointer1.next:
        overlap_length += 1
        pointer1 = pointer1.next
        
    return overlap_length`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'Why does the two-pointer method work for finding intersections?',
      options: [
        'It uses less memory than other methods',
        'Both pointers traverse the same total distance',
        'It\'s faster than the length difference method',
        'It can handle cycles in the lists',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Both methods use O(1) extra space.',
        'Correct! By traversing both lists in different orders, both pointers travel the same total distance before meeting at the intersection.',
        'Incorrect. Both methods have the same time complexity.',
        'Incorrect. Neither method is designed to handle cycles.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};

const palindromeData: LessonContent = {
  title: 'Palindrome Check: Finding Symmetry in Linked Lists',
  content: `<p>
A palindrome is like a mirror reflection in text – it reads the same forward and backward. While this is easy to verify with strings, checking for palindromes in linked lists presents unique challenges because we can't easily move backward through the list. Let's explore how we can cleverly solve this problem using various techniques.
</p>

<h3><u>Understanding the Challenge</u></h3>

<p>
What makes checking for palindromes in linked lists particularly interesting is that we need to compare elements from the start with elements from the end, but we can only traverse forward. This limitation leads us to develop creative solutions that transform the problem into something more manageable.
</p>

<h4><b>Key Insights</b></h4>
<p>
Several fundamental insights help us approach this problem:
</p>
<li>A palindrome has the same elements reading forward and backward</li>
<li>The middle of the list is a pivot point for comparison</li>
<li>We only need to compare half the list with its mirror image</li>
<li>The problem becomes easier if we can traverse one half in reverse</li>

<h3><u>Solution Strategies</u></h3>

<h4><b>1. Stack-Based Approach</b></h4>
<p>
This method uses a stack to simulate backward traversal:
</p>
<li>Push first half elements onto stack</li>
<li>Pop and compare with second half</li>
<li>Perfect match indicates palindrome</li>

<h4><b>2. Reverse Half List</b></h4>
<p>
A more space-efficient approach:
</p>
<li>Find the middle of the list</li>
<li>Reverse the second half</li>
<li>Compare first half with reversed second half</li>
<li>Optionally restore the list</li>

<h3><u>Performance Comparison</u></h3>
<table>
<tr><th>Method</th><th>Time Complexity</th><th>Space Complexity</th><th>Maintains List Structure</th></tr>
<tr><td>Stack-Based</td><td>O(n)</td><td>O(n/2)</td><td>Yes</td></tr>
<tr><td>Reverse Half</td><td>O(n)</td><td>O(1)</td><td>Optional</td></tr>
<tr><td>Recursive</td><td>O(n)</td><td>O(n)</td><td>Yes</td></tr>
</table>`,
  codeExample: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
    
    def is_palindrome_stack(self):
        """
        Check if list is palindrome using stack method.
        More intuitive but uses O(n/2) extra space.
        """
        if not self.head:
            return True
            
        # Find list length and middle
        length = 0
        current = self.head
        while current:
            length += 1
            current = current.next
            
        # Create stack of first half elements
        stack = []
        current = self.head
        for _ in range(length // 2):
            stack.append(current.data)
            current = current.next
            
        # Skip middle element for odd length
        if length % 2 == 1:
            current = current.next
            
        # Compare second half with stack
        while current:
            if not stack or current.data != stack.pop():
                return False
            current = current.next
            
        return len(stack) == 0
    
    def is_palindrome_reverse(self):
        """
        Check if list is palindrome by reversing second half.
        Uses O(1) extra space but modifies list structure.
        """
        if not self.head or not self.head.next:
            return True
            
        # Find middle using slow/fast pointers
        slow = fast = self.head
        prev = None
        
        while fast and fast.next:
            fast = fast.next.next
            # Reverse first half while finding middle
            next_node = slow.next
            slow.next = prev
            prev = slow
            slow = next_node
            
        # Handle odd length - skip middle node
        if fast:
            slow = slow.next
            
        # Compare reversed first half with second half
        while prev and slow:
            if prev.data != slow.data:
                return False
            prev = prev.next
            slow = slow.next
            
        return True
    
    def is_palindrome_recursive(self):
        """
        Check if list is palindrome using recursion.
        Elegant but uses O(n) space on call stack.
        """
        if not self.head:
            return True
            
        # Use global variable to track left pointer
        self.left = self.head
        
        def recursive_check(right):
            # Base case: reached end of list
            if not right:
                return True
                
            # Recurse to end of list first
            is_palindrome = recursive_check(right.next)
            if not is_palindrome:
                return False
                
            # Compare current nodes
            is_match = self.left.data == right.data
            # Move left pointer for next comparison
            self.left = self.left.next
            
            return is_match
            
        return recursive_check(self.head)
    
    def restore_list(self, middle, reversed_first_half):
        """
        Helper method to restore list after reversal.
        Important if list needs to be preserved.
        """
        # Reverse the reversed first half back
        prev = None
        current = reversed_first_half
        
        while current:
            next_node = current.next
            current.next = prev
            prev = current
            current = next_node
            
        # Connect back to middle
        prev.next = middle
        self.head = prev

def demonstrate_palindrome():
    """Demonstrate different palindrome checking methods."""
    # Create palindrome list: 1->2->3->2->1
    lst = LinkedList()
    values = [1, 2, 3, 2, 1]
    prev = None
    
    for val in values:
        node = Node(val)
        if not lst.head:
            lst.head = node
        else:
            prev.next = node
        prev = node
    
    # Test all methods
    print("Testing palindrome: 1->2->3->2->1")
    print("Stack method:", lst.is_palindrome_stack())
    print("Reverse method:", lst.is_palindrome_reverse())
    print("Recursive method:", lst.is_palindrome_recursive())
    
    # Test non-palindrome
    lst2 = LinkedList()
    values = [1, 2, 3, 4, 5]
    prev = None
    
    for val in values:
        node = Node(val)
        if not lst2.head:
            lst2.head = node
        else:
            prev.next = node
        prev = node
            
    print("\nTesting non-palindrome: 1->2->3->4->5")
    print("Stack method:", lst2.is_palindrome_stack())
    print("Reverse method:", lst2.is_palindrome_reverse())
    print("Recursive method:", lst2.is_palindrome_recursive())

demonstrate_palindrome()`,
  exercises: [
    {
      prompt: 'Implement a method to check if a linked list is a palindrome ignoring case and special characters.',
      initialCode: `def is_palindrome_ignore_special(self):
    """
    Check if list is palindrome ignoring case and special characters.
    Example: 'A man, a plan, a canal: Panama' should return True
    """
    # Implement your solution here
    pass`,
      solution: `def is_palindrome_ignore_special(self):
    """
    Check if list is palindrome ignoring case and special characters.
    Example: 'A man, a plan, a canal: Panama' should return True
    """
    if not self.head:
        return True
        
    # Helper function to check if character is alphanumeric
    def is_valid_char(c):
        return c.isalnum() if isinstance(c, str) else True
        
    # Create clean version of list
    clean_list = LinkedList()
    current = self.head
    while current:
        if is_valid_char(current.data):
            if isinstance(current.data, str):
                clean_list.append(current.data.lower())
            else:
                clean_list.append(current.data)
        current = current.next
        
    # Use reverse method on clean list
    return clean_list.is_palindrome_reverse()`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why might we prefer the reverse half approach over the stack-based approach?',
      options: [
        'It\'s easier to implement',
        'It uses constant extra space',
        'It\'s faster',
        'It handles odd-length lists better',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. The reverse approach is actually more complex to implement.',
        'Correct! The reverse approach uses O(1) extra space compared to O(n) for the stack approach.',
        'Incorrect. Both approaches have O(n) time complexity.',
        'Incorrect. Both approaches handle odd-length lists equally well.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};

const listReversalData: LessonContent = {
  title: 'List Reversal: Transforming Direction in Linked Lists',
  content: `<p>
Reversing a linked list is like turning a one-way street in the opposite direction - we need to change the direction of every pointer while ensuring we don't lose our way. This fundamental operation appears in many advanced linked list algorithms and serves as a building block for more complex transformations.
</p>

<h3><u>Core Concepts</u></h3>

<p>
When reversing a linked list, we're essentially changing the direction of every next pointer. This requires careful handling of three key elements:
</p>

<h4><b>1. Pointer Management</b></h4>
<p>
We need to manage three critical pointers:
</p>
<li>Previous pointer - Where we're coming from</li>
<li>Current pointer - Where we are now</li>
<li>Next pointer - Where we're going next</li>

<h4><b>2. Reversal Approaches</b></h4>
<p>
Several methods can accomplish reversal:
</p>
<li>Iterative reversal - Step by step pointer adjustment</li>
<li>Recursive reversal - Using call stack to track positions</li>
<li>Stack-based reversal - Explicit stack for tracking</li>

<h3><u>Implementation Strategies</u></h3>

<table>
<tr><th>Method</th><th>Time Complexity</th><th>Space Complexity</th><th>Key Advantage</th></tr>
<tr><td>Iterative</td><td>O(n)</td><td>O(1)</td><td>Memory efficient</td></tr>
<tr><td>Recursive</td><td>O(n)</td><td>O(n)</td><td>Elegant code</td></tr>
<tr><td>Stack-based</td><td>O(n)</td><td>O(n)</td><td>Easier to understand</td></tr>
</table>`,
  codeExample: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
    
    def reverse_iterative(self):
        """
        Reverse list using iterative approach.
        Uses three pointers to track progress.
        Time: O(n), Space: O(1)
        """
        prev = None
        current = self.head
        
        while current:
            # Save next node
            next_node = current.next
            # Reverse current node's pointer
            current.next = prev
            # Move prev and current forward
            prev = current
            current = next_node
            
        # Update head to last node
        self.head = prev
    
    def reverse_recursive(self):
        """
        Reverse list using recursive approach.
        Elegant but uses call stack space.
        Time: O(n), Space: O(n)
        """
        def reverse_util(current, prev):
            # Base case: if current is None, prev is new head
            if not current:
                self.head = prev
                return
                
            # Save next node
            next_node = current.next
            # Reverse current node's pointer
            current.next = prev
            # Recurse with next node
            reverse_util(next_node, current)
            
        reverse_util(self.head, None)
    
    def reverse_stack_based(self):
        """
        Reverse list using stack approach.
        Most intuitive but uses extra space.
        Time: O(n), Space: O(n)
        """
        if not self.head:
            return
            
        # Push all nodes onto stack
        stack = []
        current = self.head
        while current:
            stack.append(current)
            current = current.next
            
        # Pop nodes and reverse connections
        self.head = stack.pop()
        current = self.head
        
        while stack:
            node = stack.pop()
            current.next = node
            current = node
            
        # Last node points to None
        current.next = None
    
    def reverse_in_groups(self, k):
        """
        Reverse list in groups of k nodes.
        Advanced application of reversal.
        Time: O(n), Space: O(1)
        """
        if not self.head or k <= 1:
            return
            
        current = self.head
        prev_group_end = None
        
        while current:
            # Count k nodes if available
            count = 0
            temp = current
            while temp and count < k:
                temp = temp.next
                count += 1
                
            # If we have k nodes, reverse them
            if count == k:
                # Save next group's start
                next_group_start = current.next
                
                # Reverse k nodes
                prev = None
                temp = current
                for _ in range(k):
                    next_node = temp.next
                    temp.next = prev
                    prev = temp
                    temp = next_node
                    
                # Connect with previous group
                if not prev_group_end:
                    self.head = prev
                else:
                    prev_group_end.next = prev
                    
                # Update for next group
                prev_group_end = current
                current = next_group_start
            else:
                # Less than k nodes left, keep as is
                break
    
    def display(self):
        """Helper method to display list."""
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")

def demonstrate_reversal():
    """Demonstrate different reversal techniques."""
    # Create sample list: 1->2->3->4->5
    lst = LinkedList()
    values = list(range(1, 6))
    prev = None
    
    for val in values:
        node = Node(val)
        if not prev:
            lst.head = node
        else:
            prev.next = node
        prev = node
    
    # Test iterative reversal
    print("Original list:")
    lst.display()
    lst.reverse_iterative()
    print("After iterative reversal:")
    lst.display()
    
    # Test recursive reversal
    lst.reverse_recursive()
    print("\nAfter recursive reversal (back to original):")
    lst.display()
    
    # Test stack-based reversal
    lst.reverse_stack_based()
    print("\nAfter stack-based reversal:")
    lst.display()
    
    # Test group reversal (k=2)
    lst.reverse_in_groups(2)
    print("\nAfter reversing in groups of 2:")
    lst.display()

demonstrate_reversal()`,
  exercises: [
    {
      prompt: 'Implement a method to reverse alternate k nodes in a linked list while keeping other nodes in their original order.',
      initialCode: `def reverse_alternate_k_nodes(self, k):
    """
    Reverse alternate groups of k nodes.
    Example: for k=2, 1->2->3->4->5->6 becomes 2->1->3->4->6->5
    """
    # Implement your solution here
    pass`,
      solution: `def reverse_alternate_k_nodes(self, k):
    """
    Reverse alternate groups of k nodes.
    Example: for k=2, 1->2->3->4->5->6 becomes 2->1->3->4->6->5
    """
    if not self.head or k <= 1:
        return
        
    current = self.head
    prev_group_end = None
    is_reverse_group = True
    
    while current:
        # Count k nodes if available
        count = 0
        temp = current
        while temp and count < k:
            temp = temp.next
            count += 1
            
        if is_reverse_group and count == k:
            # Save next group's start
            next_group_start = current.next
            
            # Reverse k nodes
            prev = None
            temp = current
            for _ in range(k):
                next_node = temp.next
                temp.next = prev
                prev = temp
                temp = next_node
                
            # Connect with previous group
            if not prev_group_end:
                self.head = prev
            else:
                prev_group_end.next = prev
                
            # Update for next group
            prev_group_end = current
            current = next_group_start
        else:
            # Skip k nodes
            for _ in range(count):
                prev_group_end = current
                current = current.next
                
        # Toggle reverse flag
        is_reverse_group = not is_reverse_group`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why does recursive reversal use O(n) space while iterative uses O(1)?',
      options: [
        'Recursive is inherently slower',
        'Iterative uses better algorithms',
        'Recursive uses the call stack',
        'Iterative processes fewer nodes',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Speed isn\'t related to space complexity.',
        'Incorrect. Both use similar logic, just different approaches.',
        'Correct! Each recursive call adds a frame to the call stack, using O(n) space.',
        'Incorrect. Both process the same number of nodes.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};

const listSortingData: LessonContent = {
  title: 'Sorting Linked Lists: Efficient Approaches and Implementation',
  content: `<p>
Imagine you're organizing a line of people, but each person can only see and hold hands with one other person. This is the challenge we face when sorting a linked list – we can only access elements sequentially and can't easily swap distant elements like we can in an array. This unique constraint makes some traditional sorting algorithms less efficient while making others shine.
</p>

<p>
Let's explore how we can effectively sort linked lists, starting with why certain approaches work better than others and building up to optimal solutions.
</p>

<h3><u>Why Standard Sorting Doesn't Work Well</u></h3>

<p>
Many familiar sorting algorithms like quicksort and bubble sort rely heavily on random access and easy swapping of elements. With linked lists, these operations become costly because:
</p>

<li>We can't directly access the nth element without traversing n-1 nodes first</li>
<li>Swapping non-adjacent elements requires updating multiple next pointers</li>
<li>We can't move backwards without maintaining extra references</li>

<h3><u>Merge Sort: The Ideal Choice</u></h3>

<p>
Merge sort emerges as the natural choice for linked lists because:
</p>

<li>It doesn't require random access to elements</li>
<li>The merge operation is particularly efficient with linked lists</li>
<li>No extra space needed for array copying during merging</li>

<h3><u>Performance Comparison</u></h3>

<table>
<tr><th>Algorithm</th><th>Time Complexity</th><th>Space Complexity</th><th>Stability</th></tr>
<tr><td>Merge Sort</td><td>O(n log n)</td><td>O(log n)</td><td>Stable</td></tr>
<tr><td>Insertion Sort</td><td>O(n²)</td><td>O(1)</td><td>Stable</td></tr>
<tr><td>Selection Sort</td><td>O(n²)</td><td>O(1)</td><td>Not Stable</td></tr>
<tr><td>Quick Sort</td><td>O(n²)</td><td>O(log n)</td><td>Not Stable</td></tr>
</table>

<h3><u>Understanding the Merge Sort Process</u></h3>

<p>
Merge sort for linked lists follows these key steps:
</p>

<h4><b>1. Divide Phase</b></h4>
<p>
We repeatedly split the list into two halves until we have single elements:
</p>
<li>Find middle using slow/fast pointers</li>
<li>Split list at middle point</li>
<li>Recursively divide each half</li>

<h4><b>2. Conquer Phase</b></h4>
<p>
We merge sorted sublists back together:
</p>
<li>Compare elements from both lists</li>
<li>Link smaller element to result</li>
<li>Continue until both lists are exhausted</li>`,
  codeExample: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
    
    def merge_sort(self):
        """
        Sort the linked list using merge sort algorithm.
        Time: O(n log n), Space: O(log n) for recursion stack
        """
        def get_middle(head):
            """Find middle node using slow/fast pointer technique."""
            if not head or not head.next:
                return head
                
            slow = fast = head
            prev = None
            
            while fast and fast.next:
                fast = fast.next.next
                prev = slow
                slow = slow.next
                
            return prev  # Return node before middle
        
        def merge(left, right):
            """Merge two sorted lists."""
            # Create dummy head for easier insertion
            dummy = Node(0)
            tail = dummy
            
            # Compare and link nodes
            while left and right:
                if left.data <= right.data:
                    tail.next = left
                    left = left.next
                else:
                    tail.next = right
                    right = right.next
                tail = tail.next
                
            # Attach remaining nodes
            tail.next = left if left else right
            
            return dummy.next
        
        def sort_list(head):
            """Recursive function to sort the list."""
            # Base case: empty list or single node
            if not head or not head.next:
                return head
                
            # Find middle and split list
            middle = get_middle(head)
            if not middle:
                return head
                
            right_head = middle.next
            middle.next = None
            
            # Recursively sort both halves
            left = sort_list(head)
            right = sort_list(right_head)
            
            # Merge sorted halves
            return merge(left, right)
            
        # Update head with sorted list
        self.head = sort_list(self.head)
    
    def insertion_sort(self):
        """
        Alternative sorting method: insertion sort.
        Better for small lists or nearly sorted lists.
        Time: O(n²), Space: O(1)
        """
        if not self.head or not self.head.next:
            return
            
        sorted_head = None
        current = self.head
        
        while current:
            # Save next node
            next_node = current.next
            
            # Insert current into sorted portion
            if not sorted_head or sorted_head.data >= current.data:
                current.next = sorted_head
                sorted_head = current
            else:
                # Find insertion point
                search = sorted_head
                while search.next and search.next.data < current.data:
                    search = search.next
                    
                # Insert current node
                current.next = search.next
                search.next = current
                
            current = next_node
            
        self.head = sorted_head
    
    def display(self):
        """Helper method to display list."""
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")

def demonstrate_sorting():
    """Demonstrate different sorting methods."""
    # Create sample unsorted list
    lst = LinkedList()
    values = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
    
    prev = None
    for val in values:
        node = Node(val)
        if not lst.head:
            lst.head = node
        else:
            prev.next = node
        prev = node
        
    print("Original list:")
    lst.display()
    
    # Test merge sort
    lst.merge_sort()
    print("\nAfter merge sort:")
    lst.display()
    
    # Create new list for insertion sort
    lst2 = LinkedList()
    for val in values:
        node = Node(val)
        if not lst2.head:
            lst2.head = node
        else:
            prev.next = node
        prev = node
    
    lst2.insertion_sort()
    print("\nAfter insertion sort:")
    lst2.display()

demonstrate_sorting()`,
  exercises: [
    {
      prompt: 'Implement a method to sort a linked list such that all nodes containing even numbers appear before nodes containing odd numbers, maintaining relative order within even and odd numbers.',
      initialCode: `def sort_even_odd(self):
    """
    Sort list so that even numbers appear before odd numbers.
    Maintain relative order within even and odd groups.
    Example: 1->2->3->4->5->6 becomes 2->4->6->1->3->5
    """
    # Implement your solution here
    pass`,
      solution: `def sort_even_odd(self):
    """
    Sort list so that even numbers appear before odd numbers.
    Maintain relative order within even and odd groups.
    Example: 1->2->3->4->5->6 becomes 2->4->6->1->3->5
    """
    if not self.head or not self.head.next:
        return
        
    # Create dummy heads for even and odd lists
    even_dummy = Node(0)
    odd_dummy = Node(0)
    even_tail = even_dummy
    odd_tail = odd_dummy
    
    # Traverse and separate even/odd
    current = self.head
    while current:
        next_node = current.next
        if current.data % 2 == 0:
            even_tail.next = current
            even_tail = current
        else:
            odd_tail.next = current
            odd_tail = current
        current = next_node
        
    # Terminate both lists
    even_tail.next = odd_dummy.next
    odd_tail.next = None
    
    # Update head
    self.head = even_dummy.next`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'Why is merge sort particularly well-suited for linked lists compared to quicksort?',
      options: [
        'Merge sort is always faster than quicksort',
        'Quicksort requires random access which is costly in linked lists',
        'Merge sort uses less memory',
        'Merge sort is easier to implement',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Speed depends on the specific case and implementation.',
        'Correct! Quicksort\'s random access pattern is inefficient with linked lists, while merge sort\'s sequential access pattern works well.',
        'Incorrect. Both algorithms use O(log n) extra space.',
        'Incorrect. Both algorithms have similar implementation complexity.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};

const mergingListsData: LessonContent = {
  title: 'Merging Linked Lists: From Simple to K-Way Merge',
  content: `<p>
Imagine you're coordinating multiple lines of people to form a single, orderly line. Merging linked lists works similarly – we need to combine multiple lists while maintaining some desired order. This operation is fundamental to many algorithms and real-world applications, from merging sorted datasets to implementing efficient external sorting.
</p>

<h3><u>Types of Merging</u></h3>

<p>
We can merge lists in several ways, each serving different purposes:
</p>

<h4><b>1. Simple Concatenation</b></h4>
<p>
The most basic form of merging:
</p>
<li>Append one list to another</li>
<li>Maintains original order within lists</li>
<li>O(1) if we have tail pointer, O(n) otherwise</li>

<h4><b>2. Sorted Merge</b></h4>
<p>
Combining while maintaining sorted order:
</p>
<li>Compare elements from both lists</li>
<li>Take smaller element each time</li>
<li>Preserve relative order of equal elements</li>

<h4><b>3. K-Way Merge</b></h4>
<p>
Merging K sorted lists simultaneously:
</p>
<li>Use min-heap for efficient minimum finding</li>
<li>Handle multiple lists efficiently</li>
<li>Maintain overall sorted order</li>

<h3><u>Performance Analysis</u></h3>

<table>
<tr><th>Operation</th><th>Time Complexity</th><th>Space Complexity</th><th>Key Challenge</th></tr>
<tr><td>Simple Concatenation</td><td>O(n)</td><td>O(1)</td><td>Finding last node</td></tr>
<tr><td>Sorted Merge (2 lists)</td><td>O(n + m)</td><td>O(1)</td><td>Maintaining order</td></tr>
<tr><td>K-Way Merge</td><td>O(N log k)</td><td>O(k)</td><td>Efficient minimum finding</td></tr>
</table>

<p>Where:</p>
<li>n, m = lengths of individual lists</li>
<li>N = total number of nodes</li>
<li>k = number of lists</li>`,
  codeExample: `import heapq
from typing import List

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
        
    def append(self, data):
        """Helper method to append a node."""
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
            
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node
    
    def simple_merge(self, list2):
        """
        Merge two lists by simple concatenation.
        Time: O(n), Space: O(1)
        """
        if not self.head:
            self.head = list2.head
            return
            
        # Find end of first list
        current = self.head
        while current.next:
            current = current.next
            
        # Connect to second list
        current.next = list2.head
    
    def sorted_merge(self, list2):
        """
        Merge two sorted lists maintaining order.
        Time: O(n + m), Space: O(1)
        """
        # Create dummy head for easier insertion
        dummy = Node(0)
        tail = dummy
        
        # Current pointers for both lists
        current1 = self.head
        current2 = list2.head
        
        # Compare and link nodes
        while current1 and current2:
            if current1.data <= current2.data:
                tail.next = current1
                current1 = current1.next
            else:
                tail.next = current2
                current2 = current2.next
            tail = tail.next
            
        # Attach remaining nodes
        tail.next = current1 if current1 else current2
        
        # Update head
        self.head = dummy.next
    
    @staticmethod
    def k_way_merge(lists: List['LinkedList']) -> 'LinkedList':
        """
        Merge k sorted linked lists using a min-heap.
        Time: O(N log k), Space: O(k)
        """
        result = LinkedList()
        if not lists:
            return result
            
        # Create dummy head for result
        dummy = Node(0)
        tail = dummy
        
        # Initialize min-heap
        # Each entry is (node_value, list_index, node)
        heap = []
        
        # Add first node from each list to heap
        for i, lst in enumerate(lists):
            if lst.head:
                heapq.heappush(heap, (lst.head.data, i, lst.head))
                
        # Merge lists using heap
        while heap:
            value, list_index, node = heapq.heappop(heap)
            
            # Add node to result
            tail.next = node
            tail = tail.next
            
            # Add next node from same list to heap
            if node.next:
                heapq.heappush(heap, (node.next.data, list_index, node.next))
                
        result.head = dummy.next
        return result
    
    def display(self):
        """Helper method to display list."""
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")

def demonstrate_merging():
    """Demonstrate different merging techniques."""
    # Create first sorted list: 1->3->5
    list1 = LinkedList()
    for val in [1, 3, 5]:
        list1.append(val)
        
    # Create second sorted list: 2->4->6
    list2 = LinkedList()
    for val in [2, 4, 6]:
        list2.append(val)
        
    # Create third sorted list: 0->7->8
    list3 = LinkedList()
    for val in [0, 7, 8]:
        list3.append(val)
    
    print("Original lists:")
    print("List 1:", end=" ")
    list1.display()
    print("List 2:", end=" ")
    list2.display()
    print("List 3:", end=" ")
    list3.display()
    
    # Demonstrate simple merge
    list1_copy = LinkedList()
    list2_copy = LinkedList()
    for val in [1, 3, 5]:
        list1_copy.append(val)
    for val in [2, 4, 6]:
        list2_copy.append(val)
    
    list1_copy.simple_merge(list2_copy)
    print("\nAfter simple merge:")
    list1_copy.display()
    
    # Demonstrate sorted merge
    list1_copy = LinkedList()
    list2_copy = LinkedList()
    for val in [1, 3, 5]:
        list1_copy.append(val)
    for val in [2, 4, 6]:
        list2_copy.append(val)
    
    list1_copy.sorted_merge(list2_copy)
    print("\nAfter sorted merge:")
    list1_copy.display()
    
    # Demonstrate k-way merge
    result = LinkedList.k_way_merge([list1, list2, list3])
    print("\nAfter k-way merge:")
    result.display()

demonstrate_merging()`,
  exercises: [
    {
      prompt: 'Implement a method to merge k sorted linked lists in a way that alternates between taking elements from each list while maintaining relative order within each list.',
      initialCode: `def merge_alternate(lists: List[LinkedList]) -> LinkedList:
    """
    Merge k lists by alternating between them.
    Example: for lists [1->4->7, 2->5->8, 3->6->9]
    Result should be 1->2->3->4->5->6->7->8->9
    """
    # Implement your solution here
    pass`,
      solution: `def merge_alternate(lists: List[LinkedList]) -> LinkedList:
    """
    Merge k lists by alternating between them.
    Example: for lists [1->4->7, 2->5->8, 3->6->9]
    Result should be 1->2->3->4->5->6->7->8->9
    """
    if not lists:
        return LinkedList()
        
    # Initialize result
    result = LinkedList()
    dummy = Node(0)
    tail = dummy
    
    # Keep track of current nodes for each list
    currents = [lst.head for lst in lists]
    
    # Continue until all lists are exhausted
    while any(currents):
        # Process one node from each non-empty list
        for i in range(len(currents)):
            if currents[i]:
                # Add current node to result
                tail.next = currents[i]
                tail = tail.next
                # Move to next node in this list
                currents[i] = currents[i].next
                
    # Ensure last node points to None
    tail.next = None
    result.head = dummy.next
    return result`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why is a min-heap used in k-way merge instead of comparing all current nodes directly?',
      options: [
        'It uses less memory',
        'It makes the code simpler',
        'It reduces time complexity from O(k) to O(log k) per node',
        'It handles empty lists better',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. A min-heap actually uses O(k) space, same as direct comparison.',
        'Incorrect. Using a heap actually adds implementation complexity.',
        'Correct! Finding the minimum among k elements takes O(k) with direct comparison but only O(log k) with a heap.',
        'Incorrect. Empty lists can be handled equally well with either approach.',
      ],
      difficulty: Difficulty.Advanced,
    }
  ],
};

const recursiveOperationsData: LessonContent = {
  title: 'Recursive Approaches: Elegant Solutions to Linked List Problems',
  content: `<p>
Let's explore how recursion can offer elegant and intuitive solutions to linked list problems. Think of recursion as a way of breaking down complex operations into smaller, identical sub-problems. Just as we might solve a maze by exploring one path while keeping track of where we've been, recursive approaches solve linked list problems by processing one node while the recursive call handles the rest.
</p>

<p>
Understanding recursive solutions requires a shift in thinking. Instead of telling the computer exactly what to do at each step, we define what should happen at each node and trust the recursion to handle the rest. This can lead to surprisingly elegant solutions to complex problems.
</p>

<h3><u>Key Concepts in Recursive Solutions</u></h3>

<h4><b>1. Base Cases</b></h4>
<p>
Every recursive solution needs well-defined stopping points:
</p>
<li>Empty list (null head)</li>
<li>Single node</li>
<li>End of list reached</li>

<h4><b>2. Recursive Cases</b></h4>
<p>
The core of recursive solutions involves:
</p>
<li>Processing current node</li>
<li>Making recursive call on remaining list</li>
<li>Combining results appropriately</li>

<h3><u>Common Recursive Patterns</u></h3>

<h4><b>1. Head Recursion</b></h4>
<p>
Process lists from back to front:
</p>
<li>Make recursive call first</li>
<li>Process current node after recursive call returns</li>
<li>Useful for reverse operations</li>

<h4><b>2. Tail Recursion</b></h4>
<p>
Process lists from front to back:
</p>
<li>Process current node first</li>
<li>Make recursive call</li>
<li>Often can be optimized by compiler</li>

<h3><u>Performance Considerations</u></h3>
<table>
<tr><th>Aspect</th><th>Impact</th><th>Mitigation</th></tr>
<tr><td>Stack Space</td><td>O(n) space for recursion</td><td>Consider iterative for very long lists</td></tr>
<tr><td>Code Clarity</td><td>Often more intuitive</td><td>Add clear comments explaining flow</td></tr>
<tr><td>Debugging</td><td>Can be challenging</td><td>Use visualization tools</td></tr>
</table>`,
  codeExample: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
    
    def reverse_recursive(self):
        """
        Reverse the linked list using recursion.
        Uses head recursion pattern.
        """
        def reverse_util(current, prev):
            # Base case: if current is None, prev is new head
            if not current:
                return prev
                
            # Save next node and reverse link
            next_node = current.next
            current.next = prev
            
            # Recursive call processes rest of list
            return reverse_util(next_node, current)
            
        self.head = reverse_util(self.head, None)
    
    def sum_recursive(self):
        """
        Calculate sum of all nodes using recursion.
        Uses tail recursion pattern.
        """
        def sum_util(node):
            # Base case: empty list
            if not node:
                return 0
                
            # Add current value to sum of rest
            return node.data + sum_util(node.next)
            
        return sum_util(self.head)
    
    def print_recursive(self):
        """
        Print list in forward order using recursion.
        Demonstrates simple tail recursion.
        """
        def print_util(node):
            # Base case: end of list
            if not node:
                return
                
            # Process current node
            print(node.data, end=" -> ")
            # Recursive call for rest of list
            print_util(node.next)
            
        print_util(self.head)
        print("None")
    
    def print_reverse_recursive(self):
        """
        Print list in reverse order using recursion.
        Demonstrates head recursion pattern.
        """
        def print_util(node):
            # Base case: end of list
            if not node:
                return
                
            # Recursive call before processing
            print_util(node.next)
            # Process current node after recursion
            print(node.data, end=" -> ")
            
        print_util(self.head)
        print("None")
    
    def contains_recursive(self, value):
        """
        Check if list contains value using recursion.
        Demonstrates early return pattern.
        """
        def search_util(node, value):
            # Base case: end of list
            if not node:
                return False
                
            # Found value
            if node.data == value:
                return True
                
            # Recursive search in rest of list
            return search_util(node.next, value)
            
        return search_util(self.head, value)
    
    def get_nth_from_end_recursive(self, n):
        """
        Find nth node from end using recursion.
        Demonstrates maintaining state across recursive calls.
        """
        class Reference:
            def __init__(self):
                self.count = 0
                
        def get_nth_util(node, n, ref):
            # Base case: end of list
            if not node:
                return None
                
            # Recursive call processes rest of list
            result = get_nth_util(node.next, n, ref)
            
            # Increment count after recursion
            ref.count += 1
            
            # If we've found nth node, return it
            if ref.count == n:
                return node.data
                
            return result
            
        return get_nth_util(self.head, n, Reference())

def demonstrate_recursive_operations():
    """Demonstrate various recursive operations."""
    # Create sample list: 1->2->3->4->5
    lst = LinkedList()
    values = list(range(1, 6))
    prev = None
    
    for val in values:
        node = Node(val)
        if not prev:
            lst.head = node
        else:
            prev.next = node
        prev = node
    
    print("Original list:")
    lst.print_recursive()
    
    print("\nPrint list in reverse order:")
    lst.print_reverse_recursive()
    
    print("\nSum of all nodes:", lst.sum_recursive())
    
    print("Contains 3?", lst.contains_recursive(3))
    print("Contains 6?", lst.contains_recursive(6))
    
    print("2nd node from end:", lst.get_nth_from_end_recursive(2))
    
    lst.reverse_recursive()
    print("\nAfter recursive reversal:")
    lst.print_recursive()

demonstrate_recursive_operations()`,
  exercises: [
    {
      prompt: 'Implement a recursive method to remove all nodes with values greater than a given value while maintaining the relative order of remaining nodes.',
      initialCode: `def remove_greater_than_recursive(self, value):
    """
    Remove all nodes with data greater than given value.
    Use recursion to solve this problem.
    """
    # Implement your solution here
    pass`,
      solution: `def remove_greater_than_recursive(self, value):
    """
    Remove all nodes with data greater than given value.
    Use recursion to solve this problem.
    """
    def remove_util(node, value):
        # Base case: end of list
        if not node:
            return None
            
        # Recursively process rest of list
        node.next = remove_util(node.next, value)
        
        # Return next node if current should be removed
        if node.data > value:
            return node.next
            
        # Keep current node
        return node
        
    self.head = remove_util(self.head, value)`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'Why might tail recursion be preferred over head recursion in some cases?',
      options: [
        'It uses less memory',
        'It can be optimized to iteration by the compiler',
        'It\'s easier to understand',
        'It\'s faster at runtime',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Both types use the same amount of stack space.',
        'Correct! Tail recursion can be optimized by the compiler into iteration, avoiding stack overhead.',
        'Incorrect. Both types can be equally understandable depending on the problem.',
        'Incorrect. Without compiler optimization, both have similar runtime performance.',
      ],
      difficulty: Difficulty.Advanced,
    }
  ],
};

const inPlaceOperationsData: LessonContent = {
  title: 'In-place Operations: Efficient List Manipulation Without Extra Space',
  content: `<p>
Imagine you're rearranging furniture in a room – you can only move pieces within the available space, without using another room for temporary storage. In-place operations on linked lists work similarly: we need to modify the list's structure using only the existing nodes and a constant amount of extra space. This approach is crucial for memory-efficient algorithms, especially when working with large lists or in memory-constrained environments.
</p>

<p>
Understanding in-place operations requires us to think carefully about how we manipulate node references. Each modification must maintain the list's integrity while working towards our goal, like solving a puzzle one piece at a time without disturbing the overall picture.
</p>

<h3><u>Core Principles of In-place Operations</u></h3>

<p>
To successfully perform in-place operations, we need to understand several fundamental principles:
</p>

<h4><b>1. Reference Preservation</b></h4>
<p>
When modifying node connections, we must ensure that:
</p>
<li>We never lose access to any part of the list</li>
<li>All modifications can be safely undone if needed</li>
<li>The list remains connected throughout the operation</li>

<h4><b>2. Temporary Variable Usage</b></h4>
<p>
While we can't use extra space proportional to list size, we can use:
</p>
<li>A constant number of pointer variables</li>
<li>A few temporary variables for swapping</li>
<li>Local variables within recursive calls</li>

<h4><b>3. Safe Node Manipulation</b></h4>
<p>
Every operation should follow these steps:
</p>
<li>Save necessary references before modification</li>
<li>Make changes in a way that maintains list integrity</li>
<li>Update all affected pointers completely</li>

<h3><u>Common In-place Operations</u></h3>
<table>
<tr><th>Operation</th><th>Key Challenge</th><th>Solution Strategy</th></tr>
<tr><td>List Reversal</td><td>Maintaining connections</td><td>Three-pointer technique</td></tr>
<tr><td>Node Removal</td><td>Bridging the gap</td><td>Previous node tracking</td></tr>
<tr><td>List Rearrangement</td><td>Preserving order</td><td>Multiple pointer coordination</td></tr>
<tr><td>Merging Lists</td><td>Interleaving nodes</td><td>Link manipulation</td></tr>
</table>`,
  codeExample: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
    
    def reverse_in_place(self):
        """
        Reverse the linked list in-place using three pointers.
        Time: O(n), Space: O(1)
        """
        prev = None
        current = self.head
        
        while current:
            # Save next pointer before we modify current
            next_node = current.next
            # Reverse current node's pointer
            current.next = prev
            # Move prev and current one step forward
            prev = current
            current = next_node
            
        # Update head to last node
        self.head = prev
    
    def remove_duplicates_in_place(self):
        """
        Remove duplicate values from sorted list in-place.
        Time: O(n), Space: O(1)
        """
        if not self.head:
            return
            
        current = self.head
        
        while current.next:
            if current.data == current.next.data:
                # Skip duplicate node
                current.next = current.next.next
            else:
                # Move to next node
                current = current.next
    
    def partition_in_place(self, x):
        """
        Partition list around value x in-place.
        Maintains relative order of elements.
        Time: O(n), Space: O(1)
        """
        if not self.head:
            return
            
        # Create dummy heads for both partitions
        before_dummy = Node(0)
        after_dummy = Node(0)
        before = before_dummy
        after = after_dummy
        
        # Partition nodes
        current = self.head
        while current:
            if current.data < x:
                before.next = current
                before = current
            else:
                after.next = current
                after = current
            current = current.next
            
        # Connect partitions
        after.next = None
        before.next = after_dummy.next
        
        # Update head
        self.head = before_dummy.next
    
    def rearrange_odd_even_in_place(self):
        """
        Rearrange list so all odd indices come before even indices.
        Maintains relative order within odd and even indices.
        Time: O(n), Space: O(1)
        """
        if not self.head or not self.head.next:
            return
            
        odd = self.head
        even = self.head.next
        even_head = even
        
        while even and even.next:
            # Connect odd indices
            odd.next = even.next
            odd = odd.next
            
            # Connect even indices
            even.next = odd.next
            even = even.next
            
        # Connect odd and even parts
        odd.next = even_head
    
    def swap_pairs_in_place(self):
        """
        Swap adjacent pairs of nodes in-place.
        Example: 1->2->3->4 becomes 2->1->4->3
        Time: O(n), Space: O(1)
        """
        # Use dummy head for easier handling
        dummy = Node(0)
        dummy.next = self.head
        prev = dummy
        
        while prev.next and prev.next.next:
            # Nodes to be swapped
            first = prev.next
            second = first.next
            
            # Perform swap
            first.next = second.next
            second.next = first
            prev.next = second
            
            # Move to next pair
            prev = first
            
        # Update head
        self.head = dummy.next

def demonstrate_in_place():
    """Demonstrate in-place operations."""
    # Create sample list: 1->2->3->4->5
    lst = LinkedList()
    values = list(range(1, 6))
    prev = None
    
    for val in values:
        node = Node(val)
        if not prev:
            lst.head = node
        else:
            prev.next = node
        prev = node
        
    print("Original list:", end=" ")
    print_list(lst.head)
    
    # Demonstrate reversal
    lst.reverse_in_place()
    print("After reversal:", end=" ")
    print_list(lst.head)
    
    # Demonstrate partitioning
    lst.partition_in_place(3)
    print("After partitioning around 3:", end=" ")
    print_list(lst.head)
    
    # Demonstrate pair swapping
    lst.swap_pairs_in_place()
    print("After swapping pairs:", end=" ")
    print_list(lst.head)
    
    # Demonstrate odd-even rearrangement
    lst.rearrange_odd_even_in_place()
    print("After odd-even rearrangement:", end=" ")
    print_list(lst.head)

def print_list(head):
    """Helper function to print list."""
    current = head
    while current:
        print(current.data, end=" -> ")
        current = current.next
    print("None")

demonstrate_in_place()`,
  exercises: [
    {
      prompt: 'Implement a method to rotate a linked list counter-clockwise by k positions in-place.',
      initialCode: `def rotate_left_in_place(self, k):
    """
    Rotate list counter-clockwise by k positions.
    Example: For list 1->2->3->4->5 and k=2
    Result should be 3->4->5->1->2
    Do this in-place with O(1) extra space.
    """
    # Implement your solution here
    pass`,
      solution: `def rotate_left_in_place(self, k):
    """
    Rotate list counter-clockwise by k positions.
    Example: For list 1->2->3->4->5 and k=2
    Result should be 3->4->5->1->2
    Do this in-place with O(1) extra space.
    """
    if not self.head or not self.head.next or k == 0:
        return
        
    # Find length and last node
    length = 1
    tail = self.head
    while tail.next:
        length += 1
        tail = tail.next
        
    # Normalize k
    k = k % length
    if k == 0:
        return
        
    # Find new tail position
    current = self.head
    for _ in range(length - k - 1):
        current = current.next
        
    # Perform rotation
    new_head = current.next
    current.next = None
    tail.next = self.head
    self.head = new_head`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'Why is it important to save the next pointer before modifying a node during in-place operations?',
      options: [
        'To improve performance',
        'To prevent losing access to the rest of the list',
        'To make the code more readable',
        'To save memory',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Saving the pointer doesn\'t significantly affect performance.',
        'Correct! Once we modify a node\'s next pointer, we lose access to the rest of the list unless we saved it.',
        'Incorrect. While it might help readability, that\'s not the main reason.',
        'Incorrect. Saving the pointer doesn\'t affect memory usage significantly.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};

const dummyNodeData: LessonContent = {
  title: 'Dummy Node Pattern: Simplifying Linked List Operations',
  content: `<p>
Imagine you're building a train track. Having a fixed starting point makes it much easier to add or remove track sections without worrying about special cases. The dummy node pattern works the same way - by adding a placeholder node at the start of our list, we create a fixed point that simplifies many common operations.
</p>

<p>
This pattern is particularly valuable because it eliminates the need to handle special cases for the head of the list, making our code both cleaner and more reliable. Let's explore how this simple yet powerful technique can transform our approach to linked list operations.
</p>

<h3><u>Understanding Dummy Nodes</u></h3>

<p>
A dummy node (also called a sentinel node) serves several key purposes:
</p>

<h4><b>1. Simplifying Edge Cases</b></h4>
<p>
The dummy node eliminates special cases by:
</p>
<li>Providing a consistent starting point for all operations</li>
<li>Eliminating the need to check for empty lists</li>
<li>Making head insertion as simple as middle insertion</li>

<h4><b>2. Code Clarity Benefits</b></h4>
<p>
Using dummy nodes improves code quality by:
</p>
<li>Reducing branching logic</li>
<li>Eliminating null checks</li>
<li>Making operations more uniform</li>

<h3><u>Common Applications</u></h3>

<table>
<tr><th>Operation</th><th>Without Dummy</th><th>With Dummy</th><th>Benefit</th></tr>
<tr><td>Insertion</td><td>Special case for head</td><td>Uniform operation</td><td>Simpler code</td></tr>
<tr><td>Deletion</td><td>Head check needed</td><td>Standard process</td><td>No edge cases</td></tr>
<tr><td>Merging</td><td>Complex pointer handling</td><td>Straightforward linking</td><td>Cleaner logic</td></tr>
</table>`,
  codeExample: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedListWithDummy:
    def __init__(self):
        """Initialize with dummy node."""
        self.dummy = Node(0)  # Dummy node with arbitrary value
        self.size = 0
    
    def insert_after(self, prev_node, data):
        """
        Insert new node after given node.
        With dummy node, this works uniformly for all positions.
        """
        new_node = Node(data)
        new_node.next = prev_node.next
        prev_node.next = new_node
        self.size += 1
    
    def insert_at_position(self, position, data):
        """
        Insert at specific position using dummy node.
        Position 0 means first actual node (after dummy).
        """
        if position < 0 or position > self.size:
            raise ValueError("Invalid position")
            
        # Find node before insertion point
        current = self.dummy
        for _ in range(position):
            current = current.next
            
        self.insert_after(current, data)
    
    def delete_after(self, prev_node):
        """
        Delete node after given node.
        Dummy node makes this uniform for all positions.
        """
        if not prev_node.next:
            return None
            
        deleted_node = prev_node.next
        prev_node.next = deleted_node.next
        self.size -= 1
        return deleted_node.data
    
    def delete_at_position(self, position):
        """
        Delete at specific position using dummy node.
        No special case needed for first element.
        """
        if position < 0 or position >= self.size:
            raise ValueError("Invalid position")
            
        # Find node before deletion point
        current = self.dummy
        for _ in range(position):
            current = current.next
            
        return self.delete_after(current)
    
    def merge_sorted(self, other):
        """
        Merge two sorted lists using dummy node pattern.
        Demonstrates clean merge logic without edge cases.
        """
        current = self.dummy
        other_current = other.dummy.next
        
        while other_current and current.next:
            if other_current.data <= current.next.data:
                # Insert other's node
                next_other = other_current.next
                other_current.next = current.next
                current.next = other_current
                other_current = next_other
            else:
                current = current.next
                
        # Attach remaining nodes if any
        if other_current:
            current.next = other_current
            
        other.dummy.next = None  # Clean up other list
        self.size += other.size
        other.size = 0
    
    def display(self):
        """Display list, skipping dummy node."""
        current = self.dummy.next
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")

def demonstrate_dummy_node():
    """Demonstrate operations using dummy node pattern."""
    lst = LinkedListWithDummy()
    
    # Insert some elements
    for i in range(1, 4):
        lst.insert_at_position(i-1, i)
    
    print("After insertions:")
    lst.display()
    
    # Delete middle element
    lst.delete_at_position(1)
    print("\nAfter deleting position 1:")
    lst.display()
    
    # Create another list for merging
    lst2 = LinkedListWithDummy()
    for i in [2, 4, 6]:
        lst2.insert_at_position(lst2.size, i)
    
    print("\nSecond list:")
    lst2.display()
    
    # Merge lists
    lst.merge_sorted(lst2)
    print("\nAfter merging:")
    lst.display()

demonstrate_dummy_node()`,
  exercises: [
    {
      prompt: 'Implement a method to remove all nodes with a given value using the dummy node pattern. The method should handle all edge cases elegantly.',
      initialCode: `def remove_all(self, value):
    """
    Remove all nodes with the given value.
    Use dummy node pattern to simplify the implementation.
    """
    # Implement your solution here
    pass`,
      solution: `def remove_all(self, value):
    """
    Remove all nodes with the given value.
    Use dummy node pattern to simplify the implementation.
    """
    current = self.dummy
    
    while current.next:
        if current.next.data == value:
            current.next = current.next.next
            self.size -= 1
        else:
            current = current.next
            
    return self.size  # Return new size for convenience`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'What is the main advantage of using a dummy node in linked list implementations?',
      options: [
        'It improves time complexity',
        'It reduces memory usage',
        'It eliminates special cases for the head node',
        'It makes the list faster to traverse',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Dummy nodes don\'t affect time complexity of operations.',
        'Incorrect. Dummy nodes actually use a small amount of extra memory.',
        'Correct! Dummy nodes eliminate the need for special case handling of the head node, simplifying implementations.',
        'Incorrect. Traversal speed isn\'t affected by dummy nodes.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'When might you choose NOT to use a dummy node?',
      options: [
        'When memory is extremely constrained',
        'When the list will be empty most of the time',
        'When working with circular lists',
        'When implementing a stack',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct! In extremely memory-constrained systems, the extra node might not be worth the simplification.',
        'Incorrect. Dummy nodes are especially useful for empty lists.',
        'Incorrect. Dummy nodes can be useful in circular lists too.',
        'Incorrect. Dummy nodes can simplify stack implementations.',
      ],
      difficulty: Difficulty.Advanced,
    }
  ],
};

const listRotationData: LessonContent = {
  title: 'List Rotation: Understanding and Implementing Circular Shifts',
  content: `<p>
Imagine a carousel where horses can be shifted forward or backward by any number of positions. List rotation works similarly – we move elements in a circular fashion, where nodes that fall off one end are reattached at the other end. This fundamental operation appears in many practical applications, from implementing circular buffers to managing round-robin scheduling.
</p>

<p>
Understanding list rotation requires us to think about the list as a circular structure, even though it's implemented linearly. When we rotate a list by k positions, we're essentially changing which node serves as our starting point, while maintaining the relative order of all elements.
</p>

<p>
For example, when we rotate the list 1->2->3->4->5 by 2 positions to the right, we get 4->5->1->2->3. Notice how the relative ordering remains intact – we've just shifted our perspective of where the list begins.
</p>

<h3><u>Key Concepts in List Rotation</u></h3>

<p>
To master list rotation, we need to understand several fundamental concepts:
</p>

<p>
First, we need to recognize that rotation direction matters. A left rotation by k positions is equivalent to a right rotation by (length - k) positions. This gives us flexibility in how we implement the rotation based on which direction would require fewer operations.
</p>

<p>
Second, we can optimize our rotations by recognizing that rotating by the list's length brings us back to the original position. Therefore, we can always reduce our rotation amount using the modulo operator: k = k % length.
</p>

<p>
Third, we can break down any rotation into three simple steps:
</p>

<p>1. Find the new break point where our list will be split</p>
<p>2. Remember the connections at this point</p>
<p>3. Reconnect the parts in their new order</p>

<h3><u>Implementation Approaches</u></h3>

<table>
<tr><th>Method</th><th>Time Complexity</th><th>Space Complexity</th><th>Best For</th></tr>
<tr><td>Break and Reconnect</td><td>O(n)</td><td>O(1)</td><td>Single rotations</td></tr>
<tr><td>Reversal Method</td><td>O(n)</td><td>O(1)</td><td>In-place rotation</td></tr>
<tr><td>Juggling Method</td><td>O(n)</td><td>O(1)</td><td>GCD-based rotation</td></tr>
</table>`,
  codeExample: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
        
    def rotate_right(self, k):
        """
        Rotate list to the right by k positions.
        Uses the break and reconnect approach.
        Time: O(n), Space: O(1)
        """
        if not self.head or not self.head.next or k == 0:
            return
            
        # Calculate length and find last node
        length = 1
        current = self.head
        while current.next:
            length += 1
            current = current.next
        last_node = current
        
        # Normalize k to avoid unnecessary rotations
        k = k % length
        if k == 0:
            return
            
        # Find the new last node (k positions from end)
        steps_to_new_last = length - k
        current = self.head
        for _ in range(steps_to_new_last - 1):
            current = current.next
            
        # Perform rotation
        new_head = current.next
        current.next = None
        last_node.next = self.head
        self.head = new_head
    
    def rotate_right_reversal(self, k):
        """
        Rotate list using the reversal method.
        Demonstrates an alternative approach using list reversals.
        Time: O(n), Space: O(1)
        """
        if not self.head or not self.head.next or k == 0:
            return
            
        # Helper function to reverse a portion of the list
        def reverse(start, end):
            prev = None
            current = start
            while prev != end:
                next_node = current.next
                current.next = prev
                prev = current
                current = next_node
            return prev
            
        # Calculate length
        length = 0
        current = self.head
        while current:
            length += 1
            current = current.next
            
        # Normalize k
        k = k % length
        if k == 0:
            return
            
        # Reverse entire list
        self.head = reverse(self.head, None)
        
        # Reverse first k nodes
        current = self.head
        for _ in range(k - 1):
            current = current.next
        first_part_end = current
        
        # Reverse remaining nodes
        second_part = reverse(current.next, None)
        first_part_end.next = second_part
        
        # The list is now rotated k positions to the right
    
    def rotate_left(self, k):
        """
        Rotate list to the left by k positions.
        Demonstrates how left rotation relates to right rotation.
        Time: O(n), Space: O(1)
        """
        if not self.head or not self.head.next or k == 0:
            return
            
        # Calculate length
        length = 0
        current = self.head
        while current:
            length += 1
            current = current.next
            
        # Convert left rotation to right rotation
        right_k = length - (k % length)
        self.rotate_right(right_k)

def demonstrate_rotation():
    """Demonstrate different rotation techniques."""
    # Create sample list: 1->2->3->4->5
    lst = LinkedList()
    values = list(range(1, 6))
    prev = None
    
    for val in values:
        node = Node(val)
        if not prev:
            lst.head = node
        else:
            prev.next = node
        prev = node
        
    print("Original list:", end=" ")
    print_list(lst.head)
    
    # Demonstrate right rotation
    k = 2
    lst.rotate_right(k)
    print(f"After rotating right by {k}:", end=" ")
    print_list(lst.head)
    
    # Create new list for left rotation
    lst2 = LinkedList()
    for val in values:
        node = Node(val)
        if not lst2.head:
            lst2.head = node
        else:
            prev.next = node
        prev = node
        
    # Demonstrate left rotation
    k = 2
    lst2.rotate_left(k)
    print(f"After rotating left by {k}:", end=" ")
    print_list(lst2.head)

def print_list(head):
    """Helper function to print list."""
    current = head
    while current:
        print(current.data, end=" -> ")
        current = current.next
    print("None")

demonstrate_rotation()`,
  exercises: [
    {
      prompt: 'Implement a method to rotate a linked list by k positions while maintaining the relative order of every k nodes.',
      initialCode: `def rotate_by_groups(self, k):
    """
    Rotate list maintaining relative order of k-sized groups.
    Example: For list 1->2->3->4->5->6 and k=2
    Result should be 5->6->1->2->3->4
    """
    # Implement your solution here
    pass`,
      solution: `def rotate_by_groups(self, k):
    """
    Rotate list maintaining relative order of k-sized groups.
    Example: For list 1->2->3->4->5->6 and k=2
    Result should be 5->6->1->2->3->4
    """
    if not self.head or k <= 1:
        return
        
    # Calculate length and number of groups
    length = 0
    current = self.head
    while current:
        length += 1
        current = current.next
        
    # Calculate complete groups
    complete_groups = length // k
    if complete_groups <= 1:
        return
        
    # Calculate the number of positions to rotate
    rotation_amount = k * ((complete_groups - 1) % complete_groups)
    self.rotate_right(rotation_amount)`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why do we normalize the rotation amount using the modulo operator?',
      options: [
        'To make the rotation faster',
        'To avoid unnecessary complete rotations',
        'To save memory',
        'To handle negative rotations',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. The normalization doesn\'t affect the rotation speed.',
        'Correct! Rotating by the list length brings us back to the start, so we only need to rotate by k % length.',
        'Incorrect. Memory usage isn\'t affected by the rotation amount.',
        'Incorrect. While modulo can help with negative numbers, that\'s not its primary purpose here.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};

const listPartitioningData: LessonContent = {
  title: 'List Partitioning: Organizing Elements Around a Pivot Value',
  content: `<p>
Think of organizing books on a shelf by their height. We might want all the tall books on one side and shorter books on the other, but we might also care about preserving their original order within each group. List partitioning works similarly – we organize list elements around a pivot value while considering various constraints about the final arrangement.
</p>

<p>
Understanding list partitioning is crucial because it forms the foundation for many important algorithms, including quicksort and various data processing tasks. It's also a common interview question that tests both algorithmic thinking and implementation skills.
</p>

<h3><u>Partitioning Strategies</u></h3>

<p>
When partitioning a linked list, we need to consider several aspects that affect our approach:
</p>

<h4><b>1. Stability Requirements</b></h4>
<p>
We might need to:
</p>
<li>Preserve relative ordering within partitions (stable partitioning)</li>
<li>Focus only on the partition condition (unstable partitioning)</li>
<li>Maintain specific grouping properties</li>

<h4><b>2. Space Constraints</b></h4>
<p>
Our implementation might need to:
</p>
<li>Work entirely in-place</li>
<li>Use temporary storage for cleaner code</li>
<li>Balance between space usage and code complexity</li>

<h3><u>Common Partitioning Patterns</u></h3>

<table>
<tr><th>Method</th><th>Time Complexity</th><th>Space Complexity</th><th>Stability</th></tr>
<tr><td>Two-Pointer</td><td>O(n)</td><td>O(1)</td><td>Unstable</td></tr>
<tr><td>Three-Way</td><td>O(n)</td><td>O(1)</td><td>Stable</td></tr>
<tr><td>Multiple Lists</td><td>O(n)</td><td>O(1)</td><td>Stable</td></tr>
</table>`,
  codeExample: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
    
    def partition_two_pointer(self, pivot):
        """
        Partition list around pivot using two pointers.
        Unstable but space-efficient.
        Time: O(n), Space: O(1)
        """
        if not self.head or not self.head.next:
            return
            
        # Create dummy nodes for both partitions
        less_head = less = Node(0)
        greater_head = greater = Node(0)
        
        # Partition nodes
        current = self.head
        while current:
            if current.data < pivot:
                less.next = current
                less = current
            else:
                greater.next = current
                greater = current
            current = current.next
            
        # Connect partitions and terminate list
        greater.next = None
        less.next = greater_head.next
        
        # Update head
        self.head = less_head.next
    
    def partition_three_way(self, pivot):
        """
        Partition list into three parts: less, equal, greater.
        Maintains relative ordering within each partition.
        Time: O(n), Space: O(1)
        """
        if not self.head or not self.head.next:
            return
            
        # Create dummy nodes for three partitions
        less_head = less = Node(0)
        equal_head = equal = Node(0)
        greater_head = greater = Node(0)
        
        # Partition nodes
        current = self.head
        while current:
            if current.data < pivot:
                less.next = current
                less = current
            elif current.data == pivot:
                equal.next = current
                equal = current
            else:
                greater.next = current
                greater = current
            current = current.next
            
        # Connect partitions
        greater.next = None
        equal.next = greater_head.next
        less.next = equal_head.next
        
        # Update head
        self.head = less_head.next
    
    def partition_by_multiple_lists(self, pivot):
        """
        Partition using separate lists and then combining.
        Demonstrates cleaner but slightly more space-intensive approach.
        Time: O(n), Space: O(1) excluding dummy nodes
        """
        # Create separate lists
        class PartitionList:
            def __init__(self):
                self.dummy = Node(0)
                self.tail = self.dummy
                
            def append(self, node):
                self.tail.next = node
                self.tail = node
                node.next = None
                
        less = PartitionList()
        equal = PartitionList()
        greater = PartitionList()
        
        # Partition nodes into separate lists
        current = self.head
        while current:
            next_node = current.next
            if current.data < pivot:
                less.append(current)
            elif current.data == pivot:
                equal.append(current)
            else:
                greater.append(current)
            current = next_node
            
        # Connect the lists
        if less.dummy.next:
            self.head = less.dummy.next
            less.tail.next = equal.dummy.next if equal.dummy.next else greater.dummy.next
        else:
            self.head = equal.dummy.next if equal.dummy.next else greater.dummy.next
            
        if equal.dummy.next:
            equal.tail.next = greater.dummy.next
    
    def partition_around_alternating(self, pivot):
        """
        Advanced partitioning: maintain even/odd index order within partitions.
        Time: O(n), Space: O(1)
        """
        if not self.head or not self.head.next:
            return
            
        # Create dummy nodes for even and odd indices in each partition
        less_even = Node(0)
        less_odd = Node(0)
        greater_even = Node(0)
        greater_odd = Node(0)
        
        # Current tails for each partition
        le_tail = less_even
        lo_tail = less_odd
        ge_tail = greater_even
        go_tail = greater_odd
        
        # Partition while maintaining even/odd order
        current = self.head
        is_even = True
        
        while current:
            next_node = current.next
            current.next = None
            
            if current.data < pivot:
                if is_even:
                    le_tail.next = current
                    le_tail = current
                else:
                    lo_tail.next = current
                    lo_tail = current
            else:
                if is_even:
                    ge_tail.next = current
                    ge_tail = current
                else:
                    go_tail.next = current
                    go_tail = current
                    
            is_even = not is_even
            current = next_node
            
        # Connect partitions maintaining even/odd alternation
        le_tail.next = less_odd.next
        lo_tail.next = greater_even.next
        ge_tail.next = greater_odd.next
        
        # Update head
        self.head = less_even.next if less_even.next else greater_even.next

def demonstrate_partitioning():
    """Demonstrate different partitioning techniques."""
    # Create sample list: 3->8->5->2->9->1->7->4
    values = [3, 8, 5, 2, 9, 1, 7, 4]
    
    # Test two-pointer partitioning
    lst1 = create_list(values)
    print("Original list:", end=" ")
    print_list(lst1.head)
    
    pivot = 5
    lst1.partition_two_pointer(pivot)
    print(f"After two-pointer partition (pivot={pivot}):", end=" ")
    print_list(lst1.head)
    
    # Test three-way partitioning
    lst2 = create_list(values)
    lst2.partition_three_way(pivot)
    print(f"After three-way partition (pivot={pivot}):", end=" ")
    print_list(lst2.head)
    
    # Test multiple lists partitioning
    lst3 = create_list(values)
    lst3.partition_by_multiple_lists(pivot)
    print(f"After multiple lists partition (pivot={pivot}):", end=" ")
    print_list(lst3.head)

def create_list(values):
    """Helper function to create linked list."""
    lst = LinkedList()
    prev = None
    for val in values:
        node = Node(val)
        if not prev:
            lst.head = node
        else:
            prev.next = node
        prev = node
    return lst

def print_list(head):
    """Helper function to print list."""
    current = head
    while current:
        print(current.data, end=" -> ")
        current = current.next
    print("None")

demonstrate_partitioning()`,
  exercises: [
    {
      prompt: 'Implement a method to partition a linked list such that all prime numbers appear before non-prime numbers while maintaining the relative order within each group.',
      initialCode: `def partition_by_prime(self):
    """
    Partition list so prime numbers appear before non-prime numbers.
    Maintain relative ordering within each group.
    Example: 4->2->6->3->9->7 becomes 2->3->7->4->6->9
    """
    # Implement your solution here
    pass`,
      solution: `def partition_by_prime(self):
    """
    Partition list so prime numbers appear before non-prime numbers.
    Maintain relative ordering within each group.
    """
    def is_prime(n):
        if n < 2:
            return False
        for i in range(2, int(n ** 0.5) + 1):
            if n % i == 0:
                return False
        return True
        
    # Create dummy nodes for prime and non-prime partitions
    prime_head = prime = Node(0)
    non_prime_head = non_prime = Node(0)
    
    # Partition nodes
    current = self.head
    while current:
        next_node = current.next
        current.next = None
        
        if is_prime(current.data):
            prime.next = current
            prime = current
        else:
            non_prime.next = current
            non_prime = current
            
        current = next_node
        
    # Connect partitions
    prime.next = non_prime_head.next
    self.head = prime_head.next`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why might we choose a three-way partition over a two-way partition?',
      options: [
        'Three-way partition is always faster',
        'To handle elements equal to the pivot more efficiently',
        'To use less memory',
        'To simplify the code',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. The performance depends on the data distribution.',
        'Correct! Three-way partitioning handles equal elements more efficiently and is particularly useful when there are many duplicates.',
        'Incorrect. Both methods use O(1) extra space.',
        'Incorrect. Three-way partitioning actually adds complexity to the code.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};;

const listFlatteningData: LessonContent = {
  title: 'Flattening Multi-level Lists: Converting Hierarchy to Sequence',
  content: `<p>
Imagine you're organizing a library where books are arranged on multiple floors, with each floor having several shelves, and each shelf containing a row of books. Now you need to move all these books into a single-floor library while maintaining some meaningful order. This is essentially what we do when flattening a multi-level linked list – we transform a hierarchical structure into a single sequential list.
</p>

<p>
Multi-level linked lists expand our traditional linked list structure by allowing each node to potentially point to another complete linked list, creating a hierarchical structure. This type of structure naturally represents many real-world hierarchical relationships, from file systems to organizational charts.
</p>

<p>
When we flatten such a structure, we face several important decisions that can significantly impact our approach:
</p>

<h3><u>Key Considerations in List Flattening</u></h3>

<p>
The flattening process requires careful attention to several aspects:
</p>

<h4><b>1. Traversal Order</b></h4>
<p>
We must decide how to handle the child lists relative to the main list. Common approaches include:
</p>
<li>Depth-first: Process each child list fully before moving to the next node</li>
<li>Breadth-first: Process all nodes at one level before moving deeper</li>
<li>Custom ordering based on specific requirements</li>

<h4><b>2. Connection Strategy</b></h4>
<p>
We need to carefully manage our connections to ensure:
</p>
<li>No nodes are lost during the transformation</li>
<li>All child pointers are properly nullified</li>
<li>The final list maintains the desired ordering</li>

<h3><u>Implementation Approaches</u></h3>

<table>
<tr><th>Method</th><th>Time Complexity</th><th>Space Complexity</th><th>Best For</th></tr>
<tr><td>Recursive DFS</td><td>O(n)</td><td>O(d)</td><td>Deep structures</td></tr>
<tr><td>Iterative Level-by-Level</td><td>O(n)</td><td>O(w)</td><td>Wide structures</td></tr>
<tr><td>Stack-based</td><td>O(n)</td><td>O(d)</td><td>Complex ordering</td></tr>
</table>

<p>Where:</p>
<li>n = total number of nodes</li>
<li>d = maximum depth of nesting</li>
<li>w = maximum width at any level</li>`,
  codeExample: `class MultiLevelNode:
    def __init__(self, data):
        self.data = data
        self.next = None      # Pointer to next node at same level
        self.child = None     # Pointer to child list

class MultiLevelList:
    def __init__(self):
        self.head = None
    
    def flatten_recursive(self):
        """
        Flatten the multi-level list using recursive depth-first approach.
        Returns the head and tail of the flattened list.
        Time: O(n), Space: O(d) where d is maximum depth
        """
        def flatten_util(head):
            # Base case: empty list
            if not head:
                return None, None
                
            current = head
            # Keep track of last node in flattened list
            tail = head
            
            while current:
                next_node = current.next  # Save next pointer
                
                # If there's a child list
                if current.child:
                    # Recursively flatten child list
                    child_head, child_tail = flatten_util(current.child)
                    
                    # Connect child list to current node
                    current.next = child_head
                    child_tail.next = next_node
                    
                    # Clear child pointer
                    current.child = None
                    
                    # Update tail
                    tail = child_tail
                else:
                    tail = current
                    
                current = next_node
                
            return head, tail
            
        # Flatten list and update head
        self.head, _ = flatten_util(self.head)
    
    def flatten_iterative(self):
        """
        Flatten the multi-level list using iterative level-by-level approach.
        Time: O(n), Space: O(1)
        """
        if not self.head:
            return
            
        current = self.head
        
        # Process one node at a time
        while current:
            # If no child, move to next node
            if not current.child:
                current = current.next
                continue
                
            # Has child list - find the tail of child list
            child = current.child
            tail = child
            while tail.next:
                tail = tail.next
                
            # Connect child list
            tail.next = current.next
            current.next = child
            current.child = None
            
            # Move to next node
            current = current.next
    
    def flatten_with_stack(self):
        """
        Flatten using a stack to handle complex nesting.
        Demonstrates alternative approach for special ordering requirements.
        Time: O(n), Space: O(d)
        """
        if not self.head:
            return
            
        stack = []
        current = self.head
        tail = current
        
        while current or stack:
            if current.child:
                # If there's a next node, save it for later
                if current.next:
                    stack.append(current.next)
                    
                # Process child list
                current.next = current.child
                current.child = None
                current = current.next
            else:
                # Move to next node
                if not current.next and stack:
                    current.next = stack.pop()
                tail = current
                current = current.next
    
    def display(self):
        """Display flattened list."""
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")

def demonstrate_flattening():
    """Demonstrate different flattening approaches with a complex example."""
    # Create a multi-level list:
    # 1 -> 2 -> 3 -> 4
    # |         |
    # 5 -> 6    7 -> 8
    #     |          |
    #     9         10
    
    def create_test_list():
        lst = MultiLevelList()
        
        # Create main level
        nodes = [MultiLevelNode(i) for i in range(1, 5)]
        for i in range(len(nodes)-1):
            nodes[i].next = nodes[i+1]
        lst.head = nodes[0]
        
        # Create first child level
        child1 = [MultiLevelNode(i) for i in range(5, 7)]
        child1[0].next = child1[1]
        nodes[0].child = child1[0]
        
        # Create second child level
        child2 = [MultiLevelNode(i) for i in range(7, 9)]
        child2[0].next = child2[1]
        nodes[2].child = child2[0]
        
        # Create deepest levels
        child1[1].child = MultiLevelNode(9)
        child2[1].child = MultiLevelNode(10)
        
        return lst
    
    # Test recursive flattening
    lst1 = create_test_list()
    print("Original multi-level list flattened recursively:")
    lst1.flatten_recursive()
    lst1.display()
    
    # Test iterative flattening
    lst2 = create_test_list()
    print("\nOriginal multi-level list flattened iteratively:")
    lst2.flatten_iterative()
    lst2.display()
    
    # Test stack-based flattening
    lst3 = create_test_list()
    print("\nOriginal multi-level list flattened using stack:")
    lst3.flatten_with_stack()
    lst3.display()

demonstrate_flattening()`,
  exercises: [
    {
      prompt: 'Implement a method to flatten a multi-level linked list while maintaining a specified order: process main list nodes first, then their children in reverse order.',
      initialCode: `def flatten_custom_order(self):
    """
    Flatten list with custom ordering:
    Main level nodes first, then children in reverse order.
    Example: For 1->2->3 where 1 has child 4->5 and 2 has child 6,
    Result should be: 1->2->3->6->4->5
    """
    # Implement your solution here
    pass`,
      solution: `def flatten_custom_order(self):
    """
    Flatten list with custom ordering:
    Main level nodes first, then children in reverse order.
    """
    if not self.head:
        return
        
    # First pass: collect all child lists
    child_lists = []
    current = self.head
    
    while current:
        if current.child:
            child_lists.append(current.child)
            current.child = None
        current = current.next
        
    # Find tail of main list
    tail = self.head
    while tail.next:
        tail = tail.next
        
    # Attach child lists in reverse order
    for child in reversed(child_lists):
        tail.next = child
        
        # Find new tail
        while tail.next:
            tail = tail.next`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why might we prefer an iterative approach over a recursive approach for flattening a multi-level list?',
      options: [
        'It\'s always faster',
        'To avoid stack overflow with deep nesting',
        'It uses less memory in all cases',
        'It\'s easier to implement',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. The time complexity is the same for both approaches.',
        'Correct! With very deep nesting, recursive approaches might cause stack overflow, while iterative approaches handle any depth.',
        'Incorrect. The iterative approach still needs space for tracking nodes, just managed differently.',
        'Incorrect. Recursive approaches are often more intuitive to implement.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};

const stackImplementationData: LessonContent = {
  title: 'Stack Implementation: Building LIFO Structures with Linked Lists',
  content: `<p>
Imagine a stack of books on your desk. When you need a new book, you place it on top, and when you want to read one, you take from the top. This Last-In-First-Out (LIFO) behavior perfectly illustrates how a stack data structure works. While we could implement a stack using arrays, linked lists offer some unique advantages that make them particularly well-suited for stack implementations.
</p>

<p>
Understanding how to implement a stack using a linked list requires us to think about how the natural properties of linked lists align with stack operations. For instance, adding or removing an element at the beginning of a linked list takes constant time - exactly what we want for efficient stack operations.
</p>

<h3><u>Core Stack Operations</u></h3>

<p>
Every stack implementation must support these fundamental operations:
</p>

<h4><b>1. Push Operation</b></h4>
<p>
When we push an element onto our stack, we need to:
</p>
<li>Create a new node with the data</li>
<li>Make it point to the current top of the stack</li>
<li>Update the top pointer to this new node</li>
<p>
This operation becomes remarkably simple with linked lists because we're just adding a new head node.
</p>

<h4><b>2. Pop Operation</b></h4>
<p>
When we pop an element from our stack, we:
</p>
<li>Check if the stack is empty</li>
<li>Get the data from the top node</li>
<li>Update the top pointer to skip this node</li>
<li>Return the data</li>

<h3><u>Performance Analysis</u></h3>

<table>
<tr><th>Operation</th><th>Time Complexity</th><th>Reason</th></tr>
<tr><td>Push</td><td>O(1)</td><td>Only updates head pointer</td></tr>
<tr><td>Pop</td><td>O(1)</td><td>Only updates head pointer</td></tr>
<tr><td>Peek</td><td>O(1)</td><td>Just reads top element</td></tr>
<tr><td>IsEmpty</td><td>O(1)</td><td>Checks if head is null</td></tr>
</table>`,
  codeExample: `class StackNode:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedListStack:
    def __init__(self):
        """Initialize an empty stack."""
        self.top = None    # The top of our stack (head of linked list)
        self.size = 0     # Track number of elements for convenience
    
    def push(self, data):
        """
        Push a new element onto the stack.
        Time Complexity: O(1)
        """
        # Create new node with the data
        new_node = StackNode(data)
        
        # Make new node point to current top
        new_node.next = self.top
        
        # Update top to be new node
        self.top = new_node
        
        # Increment size
        self.size += 1
    
    def pop(self):
        """
        Remove and return the top element from the stack.
        Time Complexity: O(1)
        Raises: ValueError if stack is empty
        """
        if self.is_empty():
            raise ValueError("Stack is empty")
            
        # Get data from top node
        data = self.top.data
        
        # Update top to next node
        self.top = self.top.next
        
        # Decrement size
        self.size -= 1
        
        return data
    
    def peek(self):
        """
        Return the top element without removing it.
        Time Complexity: O(1)
        Raises: ValueError if stack is empty
        """
        if self.is_empty():
            raise ValueError("Stack is empty")
            
        return self.top.data
    
    def is_empty(self):
        """
        Check if stack is empty.
        Time Complexity: O(1)
        """
        return self.top is None
    
    def get_size(self):
        """
        Return current size of stack.
        Time Complexity: O(1)
        """
        return self.size
    
    def clear(self):
        """
        Remove all elements from stack.
        Time Complexity: O(1)
        """
        self.top = None
        self.size = 0
    
    def contains(self, data):
        """
        Check if element exists in stack.
        Time Complexity: O(n)
        """
        current = self.top
        while current:
            if current.data == data:
                return True
            current = current.next
        return False
    
    def display(self):
        """
        Display all elements in stack from top to bottom.
        Time Complexity: O(n)
        """
        elements = []
        current = self.top
        while current:
            elements.append(str(current.data))
            current = current.next
        print("Top ->", " -> ".join(elements), "-> Bottom")

def demonstrate_stack():
    """Demonstrate stack operations with practical examples."""
    stack = LinkedListStack()
    
    print("Pushing elements onto stack:")
    for i in range(1, 6):
        stack.push(i)
        print(f"Pushed {i}:")
        stack.display()
    
    print("\nPeeking at top:", stack.peek())
    
    print("\nPopping elements:")
    while not stack.is_empty():
        popped = stack.pop()
        print(f"Popped {popped}:")
        stack.display()
    
    # Demonstrate error handling
    try:
        stack.pop()
    except ValueError as e:
        print("\nTrying to pop from empty stack:", str(e))
    
    # Demonstrate practical usage
    print("\nChecking balanced parentheses:")
    def is_balanced(expression):
        stack = LinkedListStack()
        
        for char in expression:
            if char == '(':
                stack.push(char)
            elif char == ')':
                if stack.is_empty():
                    return False
                stack.pop()
                
        return stack.is_empty()
    
    test_expressions = ["(())", "(()", ")("]
    for expr in test_expressions:
        print(f"Expression {expr} is", 
              "balanced" if is_balanced(expr) else "not balanced")

demonstrate_stack()`,
  exercises: [
    {
      prompt: 'Implement a method to reverse a stack using only stack operations (push, pop) and without using any extra data structure.',
      initialCode: `def reverse_stack(self):
    """
    Reverse the order of elements in the stack.
    Must only use push and pop operations.
    Must not use any additional data structure.
    """
    # Implement your solution here
    pass`,
      solution: `def reverse_stack(self):
    """
    Reverse the order of elements in the stack.
    Uses recursion to achieve reversal without extra data structure.
    """
    def insert_at_bottom(data):
        if self.is_empty():
            self.push(data)
            return
            
        temp = self.pop()
        insert_at_bottom(data)
        self.push(temp)
        
    if not self.is_empty():
        temp = self.pop()
        reverse_stack(self)
        insert_at_bottom(temp)`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why might we choose to implement a stack using a linked list instead of an array?',
      options: [
        'Linked list implementation is always faster',
        'No need to specify initial size or handle resizing',
        'Linked lists use less memory',
        'Stack operations are simpler with linked lists',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Performance depends on the specific use case.',
        'Correct! Linked lists can grow and shrink dynamically without needing to resize or specify an initial capacity.',
        'Incorrect. Linked lists actually use more memory due to storing next pointers.',
        'Incorrect. The operations are similarly complex in both implementations.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};

const queueImplementationData: LessonContent = {
  title: 'Queue Implementation: Building FIFO Structures with Linked Lists',
  content: `<p>
Think of a queue of people waiting in line at a coffee shop. The first person who arrives gets served first, and new people join at the back of the line. This First-In-First-Out (FIFO) behavior exemplifies how a queue data structure works. Linked lists are particularly well-suited for implementing queues because they allow us to efficiently add elements at one end and remove them from the other.
</p>

<p>
A key insight in implementing queues with linked lists is that maintaining both head and tail pointers allows us to perform all operations efficiently. The head pointer lets us quickly remove elements from the front (dequeue), while the tail pointer enables fast additions at the back (enqueue).
</p>

<h3><u>Core Queue Operations</u></h3>

<h4><b>1. Enqueue Operation</b></h4>
<p>
When we enqueue an element (add to the back), we need to:
</p>
<li>Create a new node with the data</li>
<li>Have the current tail node point to it</li>
<li>Update the tail pointer to this new node</li>
<li>Handle the special case when the queue is empty</li>

<h4><b>2. Dequeue Operation</b></h4>
<p>
When we dequeue an element (remove from the front), we:
</p>
<li>Check if the queue is empty</li>
<li>Get the data from the front node</li>
<li>Update the head pointer to the next node</li>
<li>Handle the special case when removing the last element</li>

<h3><u>Performance Characteristics</u></h3>

<table>
<tr><th>Operation</th><th>Time Complexity</th><th>Key Consideration</th></tr>
<tr><td>Enqueue</td><td>O(1)</td><td>Requires tail pointer</td></tr>
<tr><td>Dequeue</td><td>O(1)</td><td>Must update head pointer</td></tr>
<tr><td>Peek</td><td>O(1)</td><td>Simple head reference</td></tr>
<tr><td>IsEmpty</td><td>O(1)</td><td>Head null check</td></tr>
</table>`,
  codeExample: `class QueueNode:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedListQueue:
    def __init__(self):
        """Initialize an empty queue with head and tail pointers."""
        self.head = None  # For dequeue operations
        self.tail = None  # For enqueue operations
        self.size = 0    # Track number of elements
    
    def enqueue(self, data):
        """
        Add new element to the back of the queue.
        Time Complexity: O(1)
        """
        new_node = QueueNode(data)
        
        if self.is_empty():
            # If queue is empty, set both head and tail to new node
            self.head = self.tail = new_node
        else:
            # Add new node after tail and update tail
            self.tail.next = new_node
            self.tail = new_node
            
        self.size += 1
    
    def dequeue(self):
        """
        Remove and return element from front of queue.
        Time Complexity: O(1)
        Raises: ValueError if queue is empty
        """
        if self.is_empty():
            raise ValueError("Queue is empty")
            
        # Get data from front node
        data = self.head.data
        
        # Move head to next node
        self.head = self.head.next
        
        # If we just removed the last element
        if not self.head:
            self.tail = None
            
        self.size -= 1
        return data
    
    def peek(self):
        """
        Return front element without removing it.
        Time Complexity: O(1)
        Raises: ValueError if queue is empty
        """
        if self.is_empty():
            raise ValueError("Queue is empty")
            
        return self.head.data
    
    def is_empty(self):
        """
        Check if queue is empty.
        Time Complexity: O(1)
        """
        return self.head is None
    
    def get_size(self):
        """
        Return current size of queue.
        Time Complexity: O(1)
        """
        return self.size
    
    def clear(self):
        """
        Remove all elements from queue.
        Time Complexity: O(1)
        """
        self.head = self.tail = None
        self.size = 0
    
    def display(self):
        """
        Display all elements in queue from front to back.
        Time Complexity: O(n)
        """
        elements = []
        current = self.head
        while current:
            elements.append(str(current.data))
            current = current.next
        print("Front ->", " -> ".join(elements), "-> Back")
    
    def contains(self, data):
        """
        Check if element exists in queue.
        Time Complexity: O(n)
        """
        current = self.head
        while current:
            if current.data == data:
                return True
            current = current.next
        return False

def demonstrate_queue():
    """Demonstrate queue operations with practical examples."""
    queue = LinkedListQueue()
    
    # Basic operations
    print("Enqueuing elements:")
    for i in range(1, 6):
        queue.enqueue(i)
        print(f"Enqueued {i}:")
        queue.display()
    
    print("\nPeeking at front:", queue.peek())
    
    print("\nDequeuing elements:")
    while not queue.is_empty():
        dequeued = queue.dequeue()
        print(f"Dequeued {dequeued}:")
        queue.display()
    
    # Practical example: Print server queue
    class PrintJob:
        def __init__(self, doc_name, pages):
            self.doc_name = doc_name
            self.pages = pages
            
        def __str__(self):
            return f"{self.doc_name}({self.pages}p)"
    
    print("\nSimulating print server queue:")
    printer_queue = LinkedListQueue()
    
    # Add print jobs
    jobs = [
        PrintJob("Report.pdf", 5),
        PrintJob("Image.jpg", 1),
        PrintJob("Book.pdf", 100)
    ]
    
    for job in jobs:
        printer_queue.enqueue(job)
        print(f"Added job to queue:", end=" ")
        printer_queue.display()
    
    # Process print jobs
    print("\nProcessing print jobs:")
    while not printer_queue.is_empty():
        job = printer_queue.dequeue()
        print(f"Printing {job}...")
        printer_queue.display()

demonstrate_queue()`,
  exercises: [
    {
      prompt: 'Implement a method to reverse the elements of a queue using only queue operations (enqueue and dequeue) and one additional queue.',
      initialCode: `def reverse_queue(self):
    """
    Reverse the order of elements in the queue.
    Can only use enqueue and dequeue operations.
    Can use one additional queue for temporary storage.
    """
    # Implement your solution here
    pass`,
      solution: `def reverse_queue(self):
    """
    Reverse the order of elements in the queue.
    Uses recursion with queue operations only.
    """
    # Base case: empty queue or single element
    if self.size <= 1:
        return
        
    # Remove front element
    front = self.dequeue()
    
    # Recursively reverse remaining queue
    self.reverse_queue()
    
    # Add front element to back
    self.enqueue(front)`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'Why is maintaining a tail pointer crucial for efficient queue implementation with linked lists?',
      options: [
        'It makes dequeue operations faster',
        'It enables O(1) enqueue operations',
        'It reduces memory usage',
        'It simplifies the implementation',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Dequeue operations only need the head pointer.',
        'Correct! Without a tail pointer, enqueue would require traversing to the end of the list, making it O(n) instead of O(1).',
        'Incorrect. The tail pointer actually uses a small amount of extra memory.',
        'Incorrect. Using a tail pointer adds some complexity to maintain it properly.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};

const lruCacheData: LessonContent = {
  title: 'LRU Cache: Efficient Caching with Linked Lists and Hash Maps',
  content: `<p>
Imagine you're organizing your desk with limited space. You keep your most recently used items easily accessible on top, while items you haven't used in a while get moved to storage. This is exactly how an LRU (Least Recently Used) cache works – it maintains a fixed-size collection of items, removing the least recently used item when space is needed for a new one.
</p>

<p>
The LRU cache combines two data structures: a doubly linked list to maintain the order of access (most recent to least recent) and a hash map for fast lookups. This combination allows us to achieve O(1) time complexity for both getting and putting elements, making it highly efficient for caching scenarios.
</p>

<h3><u>Core LRU Cache Concepts</u></h3>

<p>
To implement an effective LRU cache, we need to understand several key aspects:
</p>

<h4><b>1. Access Order Tracking</b></h4>
<p>
Every time we access an element, we need to:
</p>
<li>Move it to the front of the list (most recently used)</li>
<li>Update the necessary pointers efficiently</li>
<li>Maintain the integrity of our data structure</li>

<h4><b>2. Capacity Management</b></h4>
<p>
When adding new elements, we must:
</p>
<li>Check if we've reached capacity</li>
<li>Remove least recently used item if needed</li>
<li>Update both list and hash map consistently</li>

<h3><u>Performance Characteristics</u></h3>

<table>
<tr><th>Operation</th><th>Time Complexity</th><th>Key Implementation Detail</th></tr>
<tr><td>Get</td><td>O(1)</td><td>Hash map lookup + list update</td></tr>
<tr><td>Put</td><td>O(1)</td><td>Hash map insertion + list management</td></tr>
<tr><td>Remove</td><td>O(1)</td><td>Hash map removal + list update</td></tr>
<tr><td>Space</td><td>O(capacity)</td><td>Hash map + linked list storage</td></tr>
</table>`,
  codeExample: `class LRUNode:
    def __init__(self, key, value):
        self.key = key          # Key for hash map reference
        self.value = value      # Actual value stored
        self.prev = None        # Previous node reference
        self.next = None        # Next node reference

class LRUCache:
    def __init__(self, capacity):
        """Initialize LRU cache with given capacity."""
        self.capacity = capacity
        self.cache = {}         # Hash map for O(1) lookup
        
        # Initialize dummy head and tail nodes
        self.head = LRUNode(0, 0)  # Most recently used
        self.tail = LRUNode(0, 0)  # Least recently used
        self.head.next = self.tail
        self.tail.prev = self.head
    
    def _add_node(self, node):
        """
        Add new node right after head (most recently used).
        Time Complexity: O(1)
        """
        # Connect node to head's next
        node.prev = self.head
        node.next = self.head.next
        
        # Update head's next and its prev
        self.head.next.prev = node
        self.head.next = node
    
    def _remove_node(self, node):
        """
        Remove node from doubly linked list.
        Time Complexity: O(1)
        """
        # Save prev and next references
        prev = node.prev
        nxt = node.next
        
        # Connect prev and next, bypassing node
        prev.next = nxt
        nxt.prev = prev
    
    def _move_to_front(self, node):
        """
        Move an existing node to front (most recently used).
        Time Complexity: O(1)
        """
        self._remove_node(node)
        self._add_node(node)
    
    def get(self, key):
        """
        Get value from cache and update access order.
        Time Complexity: O(1)
        """
        node = self.cache.get(key)
        
        # Cache miss
        if not node:
            return -1
            
        # Update access order
        self._move_to_front(node)
        
        return node.value
    
    def put(self, key, value):
        """
        Add or update value in cache.
        Time Complexity: O(1)
        """
        # Check for existing key
        node = self.cache.get(key)
        
        if node:
            # Update existing node
            node.value = value
            self._move_to_front(node)
        else:
            # Create new node
            new_node = LRUNode(key, value)
            
            # Add to hash map and list
            self.cache[key] = new_node
            self._add_node(new_node)
            
            # Check capacity
            if len(self.cache) > self.capacity:
                # Remove least recently used (node before tail)
                lru = self.tail.prev
                self._remove_node(lru)
                del self.cache[lru.key]
    
    def display_access_order(self):
        """
        Display elements in access order (most to least recent).
        Time Complexity: O(n)
        """
        elements = []
        current = self.head.next
        
        while current != self.tail:
            elements.append(f"{current.key}:{current.value}")
            current = current.next
            
        print("MRU ->", " -> ".join(elements), "-> LRU")

def demonstrate_lru_cache():
    """Demonstrate LRU cache operations with practical examples."""
    # Create cache with capacity 3
    cache = LRUCache(3)
    
    print("Adding elements:")
    cache.put(1, 'one')
    print("After adding 1:")
    cache.display_access_order()
    
    cache.put(2, 'two')
    print("\nAfter adding 2:")
    cache.display_access_order()
    
    cache.put(3, 'three')
    print("\nAfter adding 3:")
    cache.display_access_order()
    
    print("\nAccessing key 1...")
    cache.get(1)
    print("After access:")
    cache.display_access_order()
    
    print("\nAdding new element (exceeds capacity):")
    cache.put(4, 'four')
    print("After adding 4 (least recently used 2 is evicted):")
    cache.display_access_order()
    
    # Demonstrate practical usage
    print("\nPractical example - URL cache:")
    url_cache = LRUCache(3)
    
    urls = [
        ('google.com', 'google-content'),
        ('facebook.com', 'facebook-content'),
        ('twitter.com', 'twitter-content'),
        ('linkedin.com', 'linkedin-content')
    ]
    
    for url, content in urls:
        print(f"\nAccessing {url}")
        if url_cache.get(url) == -1:
            print(f"Cache miss for {url}, fetching content...")
            url_cache.put(url, content)
        url_cache.display_access_order()

demonstrate_lru_cache()`,
  exercises: [
    {
      prompt: 'Implement a method to retrieve the n most recently used items from the cache in order of their last access.',
      initialCode: `def get_most_recent(self, n):
    """
    Return the n most recently used items in order of access.
    Return fewer items if n exceeds cache size.
    Example: For cache with (MRU) 1->2->3->4 (LRU) and n=2
    Return [(1,'one'), (2,'two')]
    """
    # Implement your solution here
    pass`,
      solution: `def get_most_recent(self, n):
    """
    Return the n most recently used items in order of access.
    Return fewer items if n exceeds cache size.
    """
    result = []
    current = self.head.next
    count = 0
    
    while current != self.tail and count < n:
        result.append((current.key, current.value))
        current = current.next
        count += 1
        
    return result`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'Why do we use both a hash map and a doubly linked list in the LRU cache implementation?',
      options: [
        'To reduce memory usage',
        'To enable O(1) access and maintain order',
        'To improve cache hit rate',
        'To handle collisions',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Using both structures actually increases memory usage.',
        'Correct! The hash map provides O(1) access while the doubly linked list maintains access order efficiently.',
        'Incorrect. Cache hit rate depends on usage patterns, not the implementation structure.',
        'Incorrect. Collision handling is not the primary reason for this design.',
      ],
      difficulty: Difficulty.Intermediate,
    }
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
