import { Difficulty } from '@/common/commonConcept';
import {
  Curriculum,
  LessonContent,
  LessonsTab,
  PriorityLevel,
} from '@/common/commonLesson';

const queueCurriculum: Curriculum = {
  title: 'Queue Curriculum',
  description:
    'A focused guide to mastering queue-based coding interview problems',
  sections: [
    {
      id: 1,
      title: 'Queue Fundamentals',
      topics: [
        {
          id: 'queue-concept',
          title: 'Queue Concept and Properties',
          description:
            'Understanding FIFO principle and time complexity analysis',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'queue-implementation',
          title: 'Queue Implementation',
          description:
            'Implementing queue using arrays and linked lists, handling full/empty cases',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'queue-operations',
          title: 'Basic Queue Operations',
          description:
            'Mastering enqueue, dequeue, peek, isEmpty with common edge cases',
          priority: PriorityLevel.Essential,
        },
      ],
    },
    {
      id: 2,
      title: 'BFS Pattern Problems',
      topics: [
        {
          id: 'tree-bfs',
          title: 'Tree Level Order Problems',
          description:
            'Level order traversal, zigzag traversal, level averages, right side view',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'graph-bfs',
          title: 'Graph BFS Problems',
          description:
            'Shortest path, word ladder, open the lock, rotting oranges',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'matrix-bfs',
          title: 'Matrix BFS Problems',
          description:
            '01 matrix, walls and gates, shortest bridge, pacific atlantic water flow',
          priority: PriorityLevel.Essential,
        },
      ],
    },
    {
      id: 3,
      title: 'Priority Queue Patterns',
      topics: [
        {
          id: 'priority-basics',
          title: 'Priority Queue Essentials',
          description: 'Using built-in priority queue/heap for coding problems',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'top-k-pattern',
          title: 'Top-K Pattern Problems',
          description:
            'Kth largest element, top K frequent elements, K closest points',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'merge-pattern',
          title: 'K-way Merge Problems',
          description:
            'Merge K sorted lists/arrays, smallest range covering K lists',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 4,
      title: 'Deque and Sliding Window',
      topics: [
        {
          id: 'sliding-window-maximum',
          title: 'Sliding Window Maximum',
          description:
            'Finding maximum in sliding window using deque, template approach',
          priority: PriorityLevel.Important,
        },
        {
          id: 'deque-problems',
          title: 'Deque-based Problems',
          description:
            'Moving average, sliding window problems requiring order maintenance',
          priority: PriorityLevel.Important,
        },
        {
          id: 'monotonic-deque',
          title: 'Monotonic Deque Problems',
          description: 'Jump game problems, remove duplicates problems',
          priority: PriorityLevel.Beneficial,
        },
      ],
    },
    {
      id: 5,
      title: 'Queue in Array Problems',
      topics: [
        {
          id: 'circular-queue',
          title: 'Circular Queue Problems',
          description: 'Design circular queue, moving average from data stream',
          priority: PriorityLevel.Important,
        },
        {
          id: 'queue-reconstruction',
          title: 'Queue Reconstruction',
          description: 'Reconstruct queue by height, task scheduler problems',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 6,
      title: 'Advanced BFS Applications',
      topics: [
        {
          id: 'multi-source-bfs',
          title: 'Multi-source BFS',
          description: '01 matrix, walls and gates, rotting oranges variations',
          priority: PriorityLevel.Important,
        },
        {
          id: 'bidirectional-bfs',
          title: 'Bidirectional BFS',
          description: 'Word ladder, minimum genetic mutation problems',
          priority: PriorityLevel.Beneficial,
        },
      ],
    },
  ],
} as const;

const queueConceptData = {
  title: 'Queue Concepts and Properties',
  content: `<p>
A queue is a fundamental data structure that follows the <strong>First-In-First-Out (FIFO)</strong> principle. Imagine a line of people waiting at a coffee shop - the first person to join the line is the first one to be served.
</p>

<h3><u>Core Queue Properties</u></h3>
<p>A queue has two primary operations:</p>
<li><strong>Enqueue</strong>: Add an element to the back (rear) of the queue</li>
<li><strong>Dequeue</strong>: Remove and return the element at the front of the queue</li>

<p>Additional operations include:</p>
<li><strong>Peek/Front</strong>: View the front element without removing it</li>
<li><strong>isEmpty</strong>: Check if the queue is empty</li>
<li><strong>Size</strong>: Get the number of elements in the queue</li>

<h3><u>Real-world Applications</u></h3>
<p>Queues are ubiquitous in computing and daily life:</p>
<li>Printer job scheduling</li>
<li>Call center systems</li>
<li>Web server request handling</li>
<li>Task scheduling in operating systems</li>

<h3><u>Time Complexity Analysis</u></h3>
<table>
<tr><th>Operation</th><th>Array Implementation</th><th>Linked List Implementation</th></tr>
<tr><td>Enqueue</td><td>O(1)*</td><td>O(1)</td></tr>
<tr><td>Dequeue</td><td>O(n)</td><td>O(1)</td></tr>
<tr><td>Peek</td><td>O(1)</td><td>O(1)</td></tr>
<tr><td>isEmpty</td><td>O(1)</td><td>O(1)</td></tr>
</table>
<p><small>*Amortized time for dynamic array implementation</small></p>

<h3><u>Types of Queues</u></h3>
<li><strong>Simple Queue</strong>: Basic FIFO implementation</li>
<li><strong>Circular Queue</strong>: Efficient array implementation with wraparound</li>
<li><strong>Priority Queue</strong>: Elements have priority values determining their order</li>
<li><strong>Double-ended Queue (Deque)</strong>: Elements can be added/removed from both ends</li>`,

  codeExample: `# Simple Queue implementation using Python list
class Queue:
    def __init__(self):
        self.items = []  # Initialize empty list to store queue elements
    
    def is_empty(self):
        return len(self.items) == 0
    
    def enqueue(self, item):
        self.items.append(item)  # Add item to the end
        
    def dequeue(self):
        if not self.is_empty():
            return self.items.pop(0)  # Remove and return first item
        raise IndexError("Queue is empty")
    
    def peek(self):
        if not self.is_empty():
            return self.items[0]  # Return first item without removing
        raise IndexError("Queue is empty")
    
    def size(self):
        return len(self.items)

# Usage example
queue = Queue()
print("Is queue empty?", queue.is_empty())  # True

# Adding elements
queue.enqueue("First")
queue.enqueue("Second")
queue.enqueue("Third")
print("Queue size:", queue.size())  # 3
print("Front element:", queue.peek())  # "First"

# Removing elements
first = queue.dequeue()
print("Removed:", first)  # "First"
print("New front:", queue.peek())  # "Second"`,

  exercises: [
    {
      prompt:
        'Implement a Queue class with enqueue and dequeue methods, then add three items and remove two of them.',
      initialCode: `class Queue:
    def __init__(self):
        # Initialize your queue here
        
    def enqueue(self, item):
        # Add your enqueue logic
        
    def dequeue(self):
        # Add your dequeue logic`,
      solution: `class Queue:
    def __init__(self):
        self.items = []
        
    def enqueue(self, item):
        self.items.append(item)
        
    def dequeue(self):
        if len(self.items) > 0:
            return self.items.pop(0)
        return None

# Test the implementation
queue = Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
print(queue.dequeue())  # Should print 1
print(queue.dequeue())  # Should print 2`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a Queue class that includes a peek method to view the front element and an is_empty method to check if the queue is empty.',
      initialCode: `class Queue:
    def __init__(self):
        # Initialize your queue here
        
    def peek(self):
        # Add your peek logic
        
    def is_empty(self):
        # Add your is_empty logic`,
      solution: `class Queue:
    def __init__(self):
        self.items = []
        
    def peek(self):
        if not self.is_empty():
            return self.items[0]
        return None
        
    def is_empty(self):
        return len(self.items) == 0

# Test the implementation
queue = Queue()
print(queue.is_empty())  # Should print True
queue.items.append(1)
print(queue.peek())  # Should print 1
print(queue.is_empty())  # Should print False`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary characteristic of a Queue data structure?',
      options: [
        'Last-In-First-Out (LIFO)',
        'First-In-First-Out (FIFO)',
        'Random access to elements',
        'Sorted elements only',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. LIFO is the characteristic of a Stack, not a Queue.',
        'Correct! A Queue follows the First-In-First-Out principle, like a line of people waiting.',
        'Incorrect. Queues do not provide random access to elements.',
        'Incorrect. Queues can store elements in any order, sorting is not required.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'What is the time complexity of the dequeue operation in an array-based implementation?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Dequeue requires shifting all remaining elements left.',
        'Incorrect. The operation is linear, not logarithmic.',
        'Correct! Removing from the front requires shifting all remaining elements, taking O(n) time.',
        'Incorrect. The operation is linear, not quadratic.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const queueImplementationData = {
  title: 'Queue Implementation Techniques',
  content: `<p>
There are several ways to implement a queue, each with its own trade-offs. We'll explore two main implementations: array-based and linked list-based queues.
</p>

<h3><u>Array-based Implementation</u></h3>
<p>Arrays offer simple implementation but have some challenges:</p>
<li><strong>Advantages:</strong> Simple to implement, memory-efficient for fixed size</li>
<li><strong>Disadvantages:</strong> Dequeue operation is O(n), may need resizing</li>

<h3><u>Linked List Implementation</u></h3>
<p>Linked lists provide more efficient operations:</p>
<li><strong>Advantages:</strong> O(1) enqueue and dequeue, dynamic size</li>
<li><strong>Disadvantages:</strong> Extra memory for node pointers</li>

<h3><u>Circular Queue</u></h3>
<p>A circular queue is an efficient array implementation that reuses space:</p>
<li>Uses front and rear pointers that wrap around</li>
<li>Maintains O(1) for both enqueue and dequeue</li>
<li>Efficient memory usage</li>

<h3><u>Special Considerations</u></h3>
<li><strong>Empty Queue:</strong> front == rear or size == 0</li>
<li><strong>Full Queue:</strong> (rear + 1) % capacity == front</li>
<li><strong>Boundary Cases:</strong> Handle wraparound properly</li>`,

  codeExample: `# Linked List based Queue implementation
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedListQueue:
    def __init__(self):
        self.front = None  # For dequeue
        self.rear = None   # For enqueue
        self.size = 0
    
    def is_empty(self):
        return self.front is None
    
    def enqueue(self, item):
        new_node = Node(item)
        if self.rear is None:
            # Queue is empty
            self.front = self.rear = new_node
        else:
            # Add to rear
            self.rear.next = new_node
            self.rear = new_node
        self.size += 1
    
    def dequeue(self):
        if self.is_empty():
            raise IndexError("Queue is empty")
            
        # Store previous front and move front one node ahead
        temp = self.front
        self.front = temp.next
        
        # If front becomes None, change rear to None as well
        if self.front is None:
            self.rear = None
            
        self.size -= 1
        return temp.data
    
    def peek(self):
        if self.is_empty():
            raise IndexError("Queue is empty")
        return self.front.data
    
    def get_size(self):
        return self.size

# Circular Queue implementation
class CircularQueue:
    def __init__(self, capacity):
        self.capacity = capacity
        self.items = [None] * capacity
        self.front = 0  # For dequeue
        self.rear = -1  # For enqueue
        self.size = 0
    
    def is_full(self):
        return self.size == self.capacity
    
    def is_empty(self):
        return self.size == 0
    
    def enqueue(self, item):
        if self.is_full():
            raise IndexError("Queue is full")
            
        self.rear = (self.rear + 1) % self.capacity
        self.items[self.rear] = item
        self.size += 1
    
    def dequeue(self):
        if self.is_empty():
            raise IndexError("Queue is empty")
            
        item = self.items[self.front]
        self.front = (self.front + 1) % self.capacity
        self.size -= 1
        return item`,

  exercises: [
    {
      prompt:
        'Implement a CircularQueue class with a given capacity that can handle wraparound cases correctly.',
      initialCode: `class CircularQueue:
    def __init__(self, capacity):
        # Initialize your circular queue here
        
    def is_full(self):
        # Add your is_full logic
        
    def enqueue(self, item):
        # Add your enqueue logic
        
    def dequeue(self):
        # Add your dequeue logic`,
      solution: `class CircularQueue:
    def __init__(self, capacity):
        self.capacity = capacity
        self.items = [None] * capacity
        self.front = 0
        self.rear = -1
        self.size = 0
        
    def is_full(self):
        return self.size == self.capacity
        
    def enqueue(self, item):
        if self.is_full():
            raise IndexError("Queue is full")
        self.rear = (self.rear + 1) % self.capacity
        self.items[self.rear] = item
        self.size += 1
        
    def dequeue(self):
        if self.size == 0:
            raise IndexError("Queue is empty")
        item = self.items[self.front]
        self.front = (self.front + 1) % self.capacity
        self.size -= 1
        return item`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Implement a LinkedListQueue class that maintains both front and rear pointers for O(1) operations.',
      initialCode: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedListQueue:
    def __init__(self):
        # Initialize your linked list queue here
        
    def enqueue(self, item):
        # Add your enqueue logic
        
    def dequeue(self):
        # Add your dequeue logic`,
      solution: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedListQueue:
    def __init__(self):
        self.front = None
        self.rear = None
        
    def enqueue(self, item):
        new_node = Node(item)
        if self.rear is None:
            self.front = self.rear = new_node
        else:
            self.rear.next = new_node
            self.rear = new_node
        
    def dequeue(self):
        if self.front is None:
            raise IndexError("Queue is empty")
        temp = self.front
        self.front = temp.next
        if self.front is None:
            self.rear = None
        return temp.data`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'What is the main advantage of using a circular queue over a simple array-based queue?',
      options: [
        'It uses less memory',
        'It provides O(1) access to all elements',
        'It prevents wasted space from dequeue operations',
        'It allows for duplicate elements',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Both implementations use similar amount of memory.',
        'Incorrect. Random access is not a feature of queues.',
        'Correct! Circular queues reuse space after dequeue operations through wraparound.',
        'Incorrect. Both implementations can store duplicate elements.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'In a linked list implementation of a queue, why do we maintain both front and rear pointers?',
      options: [
        'To allow bidirectional traversal',
        'To achieve O(1) enqueue and dequeue operations',
        'To check if the queue is full',
        'To sort the elements',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Queue operations only need single direction traversal.',
        'Correct! Having both pointers allows O(1) insertions at rear and deletions from front.',
        'Incorrect. Linked list queues can grow dynamically.',
        'Incorrect. Queues do not sort elements.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const queueOperationsData = {
  title: 'Basic Queue Operations and Edge Cases',
  content: `<p>
Understanding queue operations is fundamental to using this data structure effectively. Let's explore each operation in detail, paying special attention to edge cases that commonly arise in practice.
</p>

<h3><u>Core Operations Overview</u></h3>
<p>
Every queue implementation must handle four fundamental operations. Think of managing a line at a busy coffee shop - each operation maps to a real-world action that the barista needs to handle.
</p>

<h4><b>1. Enqueue Operation (Adding Elements)</b></h4>
<p>
The enqueue operation adds an element to the rear of the queue, similar to a new customer joining the line. Key considerations include:
</p>
<li>Handling the first element (empty queue case)</li>
<li>Checking for queue capacity in bounded implementations</li>
<li>Maintaining rear pointer or index correctly</li>

<h4><b>2. Dequeue Operation (Removing Elements)</b></h4>
<p>
Dequeue removes and returns the element at the front of the queue, like serving the next customer in line. Critical aspects include:
</p>
<li>Handling the last element (queue becoming empty)</li>
<li>Updating front pointer or index properly</li>
<li>Dealing with empty queue attempts</li>

<h4><b>3. Peek Operation (Viewing Front Element)</b></h4>
<p>
Peek allows viewing the front element without removing it, similar to checking who's next in line. Important considerations:
</p>
<li>Returning but not removing the front element</li>
<li>Handling empty queue gracefully</li>
<li>Maintaining queue state unchanged</li>

<h4><b>4. isEmpty Operation (Queue Status)</b></h4>
<p>
This operation checks if the queue contains any elements, like checking if anyone is in line. Key points:
</p>
<li>Consistent empty state detection</li>
<li>Synchronization with other operations</li>
<li>Proper initialization handling</li>

<h3><u>Common Edge Cases</u></h3>
<p>
Edge cases often lead to bugs in queue implementations. Here are the most important ones to handle:
</p>
<li><strong>Empty Queue Operations:</strong> Attempting dequeue or peek on empty queue</li>
<li><strong>Single Element:</strong> Special case where front equals rear</li>
<li><strong>Full Queue:</strong> Handling enqueue when capacity is reached</li>
<li><strong>Boundary Conditions:</strong> Wrapping around in circular implementations</li>`,

  codeExample: `class QueueOperations:
    def __init__(self, capacity=10):
        self.capacity = capacity
        self.items = [None] * capacity
        self.front = 0
        self.rear = -1
        self.size = 0
    
    def enqueue(self, item):
        """
        Adds an item to the rear of the queue.
        Handles edge cases:
        1. Queue is full
        2. First element being added
        3. Wraparound case
        """
        if self.size == self.capacity:
            raise QueueFullError("Cannot enqueue to a full queue")
            
        # Circular wraparound for rear pointer
        self.rear = (self.rear + 1) % self.capacity
        self.items[self.rear] = item
        self.size += 1
        
        # Special case: First element
        if self.size == 1:
            self.front = self.rear
    
    def dequeue(self):
        """
        Removes and returns the front item from the queue.
        Handles edge cases:
        1. Queue is empty
        2. Last element being removed
        3. Wraparound case
        """
        if self.is_empty():
            raise QueueEmptyError("Cannot dequeue from empty queue")
            
        item = self.items[self.front]
        self.items[self.front] = None  # Clear reference
        
        # Special case: Last element
        if self.size == 1:
            self.front = 0
            self.rear = -1
        else:
            # Circular wraparound for front pointer
            self.front = (self.front + 1) % self.capacity
            
        self.size -= 1
        return item
    
    def peek(self):
        """
        Returns the front item without removing it.
        Handles edge case:
        1. Queue is empty
        """
        if self.is_empty():
            raise QueueEmptyError("Cannot peek empty queue")
        return self.items[self.front]
    
    def is_empty(self):
        """
        Checks if the queue has no elements.
        Note: This is a critical operation that other methods depend on,
        so it must be consistent with the queue's state.
        """
        return self.size == 0
    
    def clear(self):
        """
        Resets the queue to empty state.
        Important: Properly reset all internal state variables
        """
        self.items = [None] * self.capacity
        self.front = 0
        self.rear = -1
        self.size = 0

# Custom exceptions for better error handling
class QueueFullError(Exception):
    pass

class QueueEmptyError(Exception):
    pass

# Example usage demonstrating edge cases
def demonstrate_edge_cases():
    queue = QueueOperations(3)  # Small capacity for testing
    
    # Empty queue operations
    try:
        queue.dequeue()  # Should raise QueueEmptyError
    except QueueEmptyError as e:
        print(f"Expected error: {e}")
    
    # Single element handling
    queue.enqueue(1)
    print(f"Front: {queue.peek()}")  # Should print 1
    queue.dequeue()
    print(f"Is empty: {queue.is_empty()}")  # Should print True
    
    # Full queue handling
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    try:
        queue.enqueue(4)  # Should raise QueueFullError
    except QueueFullError as e:
        print(f"Expected error: {e}")
        
    # Wraparound case
    queue.dequeue()  # Remove 1
    queue.enqueue(4)  # Add 4 at wraparound position
    print(f"Elements: {[queue.dequeue() for _ in range(queue.size)]}")  # Should print [2, 3, 4]`,

  exercises: [
    {
      prompt:
        'Implement a queue that properly handles the edge case of becoming empty after several enqueue and dequeue operations.',
      initialCode: `class Queue:
    def __init__(self):
        self.items = []
        
    def enqueue(self, item):
        # Add your code here
        
    def dequeue(self):
        # Add your code here
        
    def is_empty(self):
        # Add your code here`,
      solution: `class Queue:
    def __init__(self):
        self.items = []
        
    def enqueue(self, item):
        self.items.append(item)
        
    def dequeue(self):
        if not self.is_empty():
            return self.items.pop(0)
        raise IndexError("Queue is empty")
        
    def is_empty(self):
        return len(self.items) == 0

# Test the implementation
queue = Queue()
queue.enqueue(1)
queue.enqueue(2)
print(queue.dequeue())  # Should print 1
print(queue.dequeue())  # Should print 2
print(queue.is_empty())  # Should print True`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Implement a bounded queue that properly handles the full queue edge case and wraparound scenario.',
      initialCode: `class BoundedQueue:
    def __init__(self, capacity):
        self.capacity = capacity
        self.items = [None] * capacity
        self.front = 0
        self.rear = 0
        self.size = 0
        
    def enqueue(self, item):
        # Add your code here
        
    def dequeue(self):
        # Add your code here
        
    def is_full(self):
        # Add your code here`,
      solution: `class BoundedQueue:
    def __init__(self, capacity):
        self.capacity = capacity
        self.items = [None] * capacity
        self.front = 0
        self.rear = 0
        self.size = 0
        
    def enqueue(self, item):
        if self.is_full():
            raise IndexError("Queue is full")
        self.items[self.rear] = item
        self.rear = (self.rear + 1) % self.capacity
        self.size += 1
        
    def dequeue(self):
        if self.size == 0:
            raise IndexError("Queue is empty")
        item = self.items[self.front]
        self.front = (self.front + 1) % self.capacity
        self.size -= 1
        return item
        
    def is_full(self):
        return self.size == self.capacity

# Test the implementation
queue = BoundedQueue(3)
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
print(queue.dequeue())  # Should print 1
queue.enqueue(4)  # Should succeed (wraparound)
print(queue.is_full())  # Should print True`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'What should happen when attempting to dequeue from an empty queue?',
      options: [
        'Return None',
        'Return a default value',
        'Throw an exception',
        'Reset the queue',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Returning None could be ambiguous if None is a valid queue element.',
        'Incorrect. Returning a default value could lead to silent errors.',
        'Correct! Throwing an exception clearly indicates the error condition and prevents invalid operations.',
        'Incorrect. Resetting the queue would hide the error condition.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'In a circular queue implementation, when is the queue considered full?',
      options: [
        'When rear equals front',
        'When rear equals capacity - 1',
        'When size equals capacity',
        'When front equals capacity - 1',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. rear equals front indicates an empty queue in some implementations.',
        'Incorrect. The rear can wrap around in a circular queue.',
        'Correct! The size variable accurately tracks the number of elements regardless of front and rear positions.',
        'Incorrect. The front position alone does not determine if the queue is full.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const treeBfsData = {
  title: 'Tree Level Order Traversal and Related Problems',
  content: `<p>
Level order traversal, also known as breadth-first search (BFS) for trees, is a fundamental technique that explores a tree level by level. This traversal pattern serves as the foundation for solving many tree-related problems, from basic printing to complex pattern recognition.
</p>

<h3><u>Understanding Level Order Traversal</u></h3>
<p>
Imagine a tree as a family tree, where we visit each generation completely before moving to the next generation. We process all nodes at the current depth before moving deeper into the tree. This approach requires:
</p>
<li>A queue to keep track of nodes to visit</li>
<li>A mechanism to recognize level boundaries</li>
<li>Careful handling of null nodes</li>

<h3><u>Core Concept: Using a Queue</u></h3>
<p>
The queue data structure is essential for level order traversal because it maintains the order of node visits. Here's how it works:
</p>
<li>Start by enqueueing the root node</li>
<li>While the queue isn't empty:
    <ul>
        <li>Dequeue a node and process it</li>
        <li>Enqueue its left child (if exists)</li>
        <li>Enqueue its right child (if exists)</li>
    </ul>
</li>

<h3><u>Common Variations</u></h3>
<h4><b>1. Basic Level Order</b></h4>
<p>Visit and print all nodes level by level from left to right.</p>

<h4><b>2. Zigzag Level Order</b></h4>
<p>Alternate between left-to-right and right-to-left traversal at each level. This requires:
<li>Tracking the current level number</li>
<li>Reversing the order of nodes at alternate levels</li>
</p>

<h4><b>3. Level Averages</b></h4>
<p>Calculate the average value of nodes at each level. Key considerations:
<li>Maintaining level-wise sums</li>
<li>Counting nodes per level</li>
<li>Handling numeric overflow</li>
</p>

<h4><b>4. Right Side View</b></h4>
<p>Show nodes that would be visible from the right side. This involves:
<li>Taking the rightmost node at each level</li>
<li>Handling cases where right subtree is shorter than left</li>
</p>

<h3><u>Edge Cases to Consider</u></h3>
<p>When implementing level order traversals, always consider:</p>
<li>Empty tree (null root)</li>
<li>Single node trees</li>
<li>Unbalanced trees (sparse vs dense levels)</li>
<li>Very wide trees (memory usage)</li>
<li>Very deep trees (stack usage)</li>`,

  codeExample: `# Definition for a binary tree node
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class TreeTraversalSolutions:
    def levelOrder(self, root):
        """
        Basic level order traversal
        Time: O(n) where n is number of nodes
        Space: O(w) where w is maximum width of tree
        """
        if not root:
            return []
            
        result = []
        queue = [root]
        
        while queue:
            level = []
            level_size = len(queue)  # Important: Capture size before processing level
            
            # Process all nodes at current level
            for _ in range(level_size):
                node = queue.pop(0)
                level.append(node.val)
                
                # Add children for next level
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
                    
            result.append(level)
            
        return result
    
    def zigzagLevelOrder(self, root):
        """
        Zigzag level order traversal
        Alternates between left-to-right and right-to-left at each level
        """
        if not root:
            return []
            
        result = []
        queue = [root]
        left_to_right = True
        
        while queue:
            level = []
            level_size = len(queue)
            
            for _ in range(level_size):
                node = queue.pop(0)
                level.append(node.val)
                
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            
            # Reverse level if needed
            if not left_to_right:
                level.reverse()
                
            result.append(level)
            left_to_right = not left_to_right  # Toggle direction
            
        return result
    
    def averageOfLevels(self, root):
        """
        Calculate average value at each level
        Handles potential numeric overflow by using floating-point
        """
        if not root:
            return []
            
        result = []
        queue = [root]
        
        while queue:
            level_sum = 0
            level_size = len(queue)
            
            for _ in range(level_size):
                node = queue.pop(0)
                level_sum += node.val
                
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            
            # Calculate average for current level
            result.append(level_sum / level_size)
            
        return result
    
    def rightSideView(self, root):
        """
        Return values visible from right side of tree
        Uses the rightmost node at each level
        """
        if not root:
            return []
            
        result = []
        queue = [root]
        
        while queue:
            level_size = len(queue)
            
            for i in range(level_size):
                node = queue.pop(0)
                
                # If this is the rightmost node at this level
                if i == level_size - 1:
                    result.append(node.val)
                
                # Important: Add left before right to maintain level order
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            
        return result`,

  exercises: [
    {
      prompt:
        'Implement a function to return the leftmost value at each level of a binary tree.',
      initialCode: `def leftSideView(root):
    # Implement your solution here
    pass`,
      solution: `def leftSideView(root):
    if not root:
        return []
        
    result = []
    queue = [root]
    
    while queue:
        level_size = len(queue)
        
        for i in range(level_size):
            node = queue.pop(0)
            
            # If this is the leftmost node at this level
            if i == 0:
                result.append(node.val)
            
            # Important: Add left before right to maintain level order
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        
    return result`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Implement a function to find the largest value in each level of a binary tree.',
      initialCode: `def largestValues(root):
    # Implement your solution here
    pass`,
      solution: `def largestValues(root):
    if not root:
        return []
        
    result = []
    queue = [root]
    
    while queue:
        level_size = len(queue)
        level_max = float('-inf')
        
        for _ in range(level_size):
            node = queue.pop(0)
            level_max = max(level_max, node.val)
            
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        
        result.append(level_max)
        
    return result`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'What is the time complexity of level order traversal for a binary tree?',
      options: ['O(log n)', 'O(n)', 'O(n log n)', 'O(h) where h is height'],
      correctAnswer: 1,
      explanations: [
        'Incorrect. We need to visit every node, which takes more than logarithmic time.',
        'Correct! We visit each node exactly once, leading to O(n) time complexity.',
        'Incorrect. Level order traversal does not require any sorting or repeated visits.',
        'Incorrect. We must visit all nodes, not just the height of the tree.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Why do we need to capture the queue size at the start of processing each level?',
      options: [
        'To optimize memory usage',
        'To identify level boundaries correctly',
        'To handle empty trees',
        'To improve performance',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Queue size tracking is about correctness, not memory optimization.',
        'Correct! We need to know how many nodes belong to the current level before adding their children.',
        'Incorrect. Empty trees are handled by the initial root check.',
        'Incorrect. This is necessary for correctness, not performance optimization.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const graphBfsData = {
  title: 'Graph BFS Problems and Applications',
  content: `<p>
Breadth-First Search (BFS) in graphs is like ripples spreading out from a stone dropped in water - we explore the graph in expanding circles, one layer at a time. This systematic exploration makes BFS particularly powerful for finding shortest paths and solving a variety of practical problems.
</p>

<h3><u>Understanding Graph BFS</u></h3>
<p>
When we perform BFS on a graph, we're discovering vertices in order of their distance from the starting point. This property makes BFS ideal for problems involving:
</p>
<li>Finding shortest paths in unweighted graphs</li>
<li>Exploring all possibilities with minimal steps</li>
<li>Discovering nearest neighbors or closest states</li>

<h3><u>Key Components of Graph BFS</u></h3>
<p>
Every graph BFS implementation needs three critical elements:
</p>

<h4><b>1. Visited Set</b></h4>
<p>
Think of the visited set as leaving breadcrumbs as you explore a maze. It serves two crucial purposes:
</p>
<li>Prevents revisiting vertices (avoiding infinite loops)</li>
<li>Ensures optimal paths in undirected graphs</li>

<h4><b>2. Queue</b></h4>
<p>
The queue acts like a to-do list for our exploration:
</p>
<li>Maintains the order of vertices to visit</li>
<li>Ensures we complete each "layer" before moving deeper</li>
<li>Helps track distance from the start</li>

<h4><b>3. Distance/Level Tracking</b></h4>
<p>
We often need to know how far we've traveled:
</p>
<li>Can be implemented using a separate distance map</li>
<li>Or by storing (node, distance) pairs in the queue</li>
<li>Critical for shortest path problems</li>

<h3><u>Common Problem Patterns</u></h3>

<h4><b>1. Shortest Path Problems</b></h4>
<p>
Finding the shortest path between two points in an unweighted graph. Examples include:
</p>
<li>Maze navigation</li>
<li>Network routing</li>
<li>Social network connections</li>

<h4><b>2. State Transformation Problems</b></h4>
<p>
Problems where we need to transform one state to another through a series of valid moves:
</p>
<li>Word Ladder (transforming one word to another)</li>
<li>Lock combinations</li>
<li>Puzzle solving</li>

<h4><b>3. Multi-Source BFS</b></h4>
<p>
Starting BFS from multiple points simultaneously:
</p>
<li>Rotting oranges problem</li>
<li>Multi-source flooding</li>
<li>Disease spread simulation</li>`,

  codeExample: `class GraphBFSSolutions:
    def shortestPath(self, graph, start, end):
        """
        Finds shortest path in an unweighted graph
        Time: O(V + E) where V is vertices and E is edges
        Space: O(V) for queue and visited set
        """
        if start == end:
            return 0
            
        visited = {start}  # Track visited nodes
        queue = [(start, 0)]  # (node, distance) pairs
        
        while queue:
            node, distance = queue.pop(0)
            
            # Check all neighbors
            for next_node in graph[node]:
                if next_node == end:
                    return distance + 1
                    
                if next_node not in visited:
                    visited.add(next_node)
                    queue.append((next_node, distance + 1))
        
        return -1  # No path found
    
    def wordLadder(self, beginWord, endWord, wordList):
        """
        Classic state transformation problem
        Find shortest sequence of single-character changes from begin to end word
        """
        wordSet = set(wordList)
        if endWord not in wordSet:
            return 0
            
        queue = [(beginWord, 1)]  # (word, transformations)
        visited = {beginWord}
        
        while queue:
            word, length = queue.pop(0)
            
            # Try changing each character to find valid transformations
            for i in range(len(word)):
                # Try all possible characters
                for c in 'abcdefghijklmnopqrstuvwxyz':
                    new_word = word[:i] + c + word[i+1:]
                    
                    if new_word == endWord:
                        return length + 1
                        
                    if new_word in wordSet and new_word not in visited:
                        visited.add(new_word)
                        queue.append((new_word, length + 1))
        
        return 0
    
    def openLock(self, deadends, target):
        """
        Find minimum number of moves to reach target combination
        avoiding deadend combinations
        """
        deadends = set(deadends)
        if "0000" in deadends:
            return -1
            
        queue = [("0000", 0)]  # (combination, moves)
        visited = {"0000"}
        
        while queue:
            combo, moves = queue.pop(0)
            
            # Try rotating each wheel up or down
            for i in range(4):
                for d in [-1, 1]:
                    # Calculate new digit (handling wraparound)
                    digit = (int(combo[i]) + d) % 10
                    new_combo = combo[:i] + str(digit) + combo[i+1:]
                    
                    if new_combo == target:
                        return moves + 1
                        
                    if new_combo not in deadends and new_combo not in visited:
                        visited.add(new_combo)
                        queue.append((new_combo, moves + 1))
        
        return -1
    
    def rottingOranges(self, grid):
        """
        Multi-source BFS to find time for all oranges to rot
        Time: O(m*n) where m,n are grid dimensions
        """
        if not grid:
            return 0
            
        m, n = len(grid), len(grid[0])
        queue = []
        fresh = 0
        
        # Find all rotten oranges and count fresh ones
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 2:  # Rotten
                    queue.append((i, j, 0))  # (row, col, time)
                elif grid[i][j] == 1:  # Fresh
                    fresh += 1
        
        if fresh == 0:  # No fresh oranges
            return 0
            
        directions = [(0,1), (1,0), (0,-1), (-1,0)]
        max_time = 0
        
        while queue and fresh > 0:
            row, col, time = queue.pop(0)
            max_time = max(max_time, time)
            
            # Check all adjacent cells
            for dx, dy in directions:
                new_row, new_col = row + dx, col + dy
                
                if (0 <= new_row < m and 0 <= new_col < n and 
                    grid[new_row][new_col] == 1):
                    grid[new_row][new_col] = 2  # Mark as rotten
                    fresh -= 1
                    queue.append((new_row, new_col, time + 1))
        
        return max_time if fresh == 0 else -1`,

  exercises: [
    {
      prompt:
        'Implement a function to find the minimum number of knight moves needed to reach a target position on a chess board.',
      initialCode: `def minKnightMoves(self, x: int, y: int) -> int:
    # Implement your solution here
    pass`,
      solution: `def minKnightMoves(self, x: int, y: int) -> int:
    # Knight's possible moves
    directions = [
        (-2, -1), (-2, 1), (-1, -2), (-1, 2),
        (1, -2), (1, 2), (2, -1), (2, 1)
    ]
    
    # Start from (0,0)
    queue = [(0, 0, 0)]  # (x, y, moves)
    visited = {(0, 0)}
    
    while queue:
        curr_x, curr_y, moves = queue.pop(0)
        
        if curr_x == x and curr_y == y:
            return moves
            
        for dx, dy in directions:
            next_x, next_y = curr_x + dx, curr_y + dy
            
            if (next_x, next_y) not in visited:
                visited.add((next_x, next_y))
                queue.append((next_x, next_y, moves + 1))
    
    return -1`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Implement a function to find if two words are connected in a word chain where each word differs by exactly one character and all intermediate words must exist in the given word list.',
      initialCode: `def areWordsConnected(beginWord: str, endWord: str, wordList: List[str]) -> bool:
    # Implement your solution here
    pass`,
      solution: `def areWordsConnected(beginWord: str, endWord: str, wordList: List[str]) -> bool:
    wordSet = set(wordList)
    if endWord not in wordSet:
        return False
        
    queue = [beginWord]
    visited = {beginWord}
    
    while queue:
        word = queue.pop(0)
        
        # Try changing each character
        for i in range(len(word)):
            # Try all possible characters
            for c in 'abcdefghijklmnopqrstuvwxyz':
                new_word = word[:i] + c + word[i+1:]
                
                if new_word == endWord:
                    return True
                    
                if new_word in wordSet and new_word not in visited:
                    visited.add(new_word)
                    queue.append(new_word)
    
    return False`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Why is BFS guaranteed to find the shortest path in an unweighted graph?',
      options: [
        'Because it explores nodes in random order',
        'Because it visits nodes in order of increasing distance from the start',
        'Because it uses a stack data structure',
        'Because it marks nodes as visited',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Random exploration would not guarantee finding the shortest path.',
        'Correct! BFS explores nodes layer by layer, ensuring we find the shortest path first.',
        'Incorrect. BFS uses a queue, not a stack. A stack would give depth-first behavior.',
        "Incorrect. Marking nodes as visited prevents cycles but doesn't guarantee shortest paths.",
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'What is the key difference between single-source and multi-source BFS?',
      options: [
        'Multi-source BFS is slower',
        'Multi-source BFS starts from multiple vertices simultaneously',
        'Multi-source BFS uses multiple queues',
        'Multi-source BFS cannot find shortest paths',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. The time complexity is similar for both variations.',
        'Correct! Multi-source BFS initializes the queue with multiple starting points.',
        'Incorrect. Both variations typically use a single queue.',
        'Incorrect. Multi-source BFS can find shortest paths from any of the sources.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const matrixBfsData = {
  title: 'Matrix BFS Problems and Techniques',
  content: `<p>
Matrix BFS problems represent a special class of breadth-first search where we explore a 2D grid rather than a traditional graph. These problems are fascinating because they combine visual intuition with algorithmic thinking. Imagine you're dropping a stone in a pond – the ripples spread out in all four directions, just like how BFS explores a matrix.
</p>

<h3><u>Understanding Matrix BFS</u></h3>
<p>
When we perform BFS on a matrix, we're essentially treating each cell as a node in a graph, where adjacent cells (usually up, down, left, and right) are the edges. This visualization helps us understand how the exploration works:
</p>

<p>
Consider a simple 3x3 matrix where we start BFS from the center cell (marked with 'S'):
</p>
<pre>
1st step:  2nd step:  3rd step:
  ---        1-1        111
  -S-   →    2S2   →   2S2
  ---        1-1        111
</pre>

<p>
This visual representation shows how BFS explores the matrix in "layers" or "waves", where each number represents the distance from the starting point. This pattern of expansion is the key to solving many matrix problems.
</p>

<h3><u>Essential Concepts for Matrix BFS</u></h3>

<h4><b>1. Direction Arrays</b></h4>
<p>
In matrix BFS, we typically define our movement options using direction arrays. The standard four directions can be represented as:
</p>
<p>
directions = [(0,1), (1,0), (0,-1), (-1,0)]  # right, down, left, up
</p>
<p>
This makes it easy to check all adjacent cells systematically. When working with diagonal movements, we would add the diagonal directions:
[(1,1), (1,-1), (-1,1), (-1,-1)]
</p>

<h4><b>2. Visited Set vs Matrix Modification</b></h4>
<p>
Matrix BFS problems often give us two choices for tracking visited cells:
</p>
<p>
1. Using a separate visited set: This preserves the original matrix but uses extra space.
   - Better when we need to preserve the original values
   - Required when we might need to revisit cells
</p>
<p>
2. Modifying the matrix directly: This saves space but alters the input.
   - More memory efficient
   - Can be more intuitive when tracking distances
   - Works well when cells only need to be visited once
</p>

<h4><b>3. Multi-source BFS in Matrices</b></h4>
<p>
Some problems require starting BFS from multiple points simultaneously. For example, in the "01 Matrix" problem, we start from all 0s and find distances to them. This technique:
</p>
<p>
- Reduces time complexity by avoiding multiple separate BFS runs
- Ensures we find the shortest distances to any source
- Is particularly useful for problems like "Walls and Gates" or distance matrices
</p>

<h3><u>Common Problem Patterns</u></h3>

<h4><b>1. Distance Calculation Problems</b></h4>
<p>
Problems like "01 Matrix" where we need to find shortest distances from every cell to certain target cells. The key insight is to start BFS from the targets rather than calculating distances from each cell.
</p>

<h4><b>2. Flood Fill Patterns</b></h4>
<p>
Problems like "Pacific Atlantic Water Flow" where we need to find cells that can reach certain boundaries. These problems often benefit from working backwards from the boundaries.
</p>

<h4><b>3. Island Problems</b></h4>
<p>
Problems like "Shortest Bridge" where we need to work with connected components in the matrix. These typically involve:
1. Finding an island using DFS/BFS
2. Using BFS to find the shortest path to another island
</p>`,

  codeExample: `class MatrixBFSSolutions:
    def updateMatrix(self, mat: List[List[int]]) -> List[List[int]]:
        """
        01 Matrix: Find distance of each cell to nearest 0
        Using multi-source BFS starting from all 0s
        Time: O(mn) where m,n are matrix dimensions
        Space: O(mn) for the queue
        """
        if not mat or not mat[0]:
            return mat
            
        m, n = len(mat), len(mat[0])
        queue = []
        
        # Initialize distances and find all 0s
        distances = [[float('inf')] * n for _ in range(m)]
        for i in range(m):
            for j in range(n):
                if mat[i][j] == 0:
                    distances[i][j] = 0
                    queue.append((i, j))
        
        # Directions: right, down, left, up
        directions = [(0,1), (1,0), (0,-1), (-1,0)]
        
        # BFS starting from all 0s
        while queue:
            row, col = queue.pop(0)
            
            # Check all adjacent cells
            for dx, dy in directions:
                new_row, new_col = row + dx, col + dy
                
                # If valid cell and we found a shorter path
                if (0 <= new_row < m and 0 <= new_col < n and 
                    distances[new_row][new_col] > distances[row][col] + 1):
                    distances[new_row][new_col] = distances[row][col] + 1
                    queue.append((new_row, new_col))
        
        return distances
    
    def wallsAndGates(self, rooms: List[List[int]]) -> None:
        """
        Fill matrix with distances to nearest gate
        Uses multi-source BFS starting from all gates
        Time: O(mn)
        Space: O(mn)
        """
        if not rooms or not rooms[0]:
            return
            
        m, n = len(rooms), len(rooms[0])
        queue = []
        GATE = 0
        WALL = -1
        INF = 2147483647
        
        # Find all gates
        for i in range(m):
            for j in range(n):
                if rooms[i][j] == GATE:
                    queue.append((i, j))
        
        directions = [(0,1), (1,0), (0,-1), (-1,0)]
        
        # BFS from all gates
        while queue:
            row, col = queue.pop(0)
            
            for dx, dy in directions:
                new_row, new_col = row + dx, col + dy
                
                # If valid room and we found a shorter path
                if (0 <= new_row < m and 0 <= new_col < n and 
                    rooms[new_row][new_col] == INF):
                    rooms[new_row][new_col] = rooms[row][col] + 1
                    queue.append((new_row, new_col))
    
    def shortestBridge(self, grid: List[List[int]]) -> int:
        """
        Find shortest bridge between two islands
        First finds one island using DFS, then uses BFS to reach second island
        Time: O(mn)
        Space: O(mn)
        """
        if not grid or not grid[0]:
            return 0
            
        m, n = len(grid), len(grid[0])
        directions = [(0,1), (1,0), (0,-1), (-1,0)]
        queue = []
        
        # Helper function to find first island using DFS
        def dfs(i, j):
            grid[i][j] = 2  # Mark as visited
            queue.append((i, j))
            
            for dx, dy in directions:
                new_i, new_j = i + dx, j + dy
                if (0 <= new_i < m and 0 <= new_j < n and 
                    grid[new_i][new_j] == 1):
                    dfs(new_i, new_j)
        
        # Find first cell of first island
        found_first = False
        for i in range(m):
            if found_first:
                break
            for j in range(n):
                if grid[i][j] == 1:
                    dfs(i, j)
                    found_first = True
                    break
        
        # BFS to find shortest path to second island
        distance = 0
        while queue:
            size = len(queue)
            
            # Process entire level
            for _ in range(size):
                row, col = queue.pop(0)
                
                for dx, dy in directions:
                    new_row, new_col = row + dx, col + dy
                    
                    if 0 <= new_row < m and 0 <= new_col < n:
                        if grid[new_row][new_col] == 1:  # Found second island
                            return distance
                        elif grid[new_row][new_col] == 0:  # Water
                            grid[new_row][new_col] = 2  # Mark as visited
                            queue.append((new_row, new_col))
            
            distance += 1
        
        return distance`,

  exercises: [
    {
      prompt:
        'Implement a function to find if there is a path of all the same color from top row to bottom row in a matrix.',
      initialCode: `def hasColorPath(grid: List[List[str]]) -> bool:
    # Implement your solution here
    pass`,
      solution: `def hasColorPath(grid: List[List[str]]) -> bool:
    if not grid or not grid[0]:
        return False
        
    m, n = len(grid), len(grid[0])
    
    # Try starting from each cell in top row
    for col in range(n):
        if grid[0][col] != 'X':  # If not blocked
            color = grid[0][col]
            visited = set()
            queue = [(0, col)]
            visited.add((0, col))
            
            while queue:
                row, c = queue.pop(0)
                
                # Check if reached bottom row
                if row == m - 1:
                    return True
                
                # Check all adjacent cells
                for nr, nc in [(row+1,c), (row-1,c), (row,c+1), (row,c-1)]:
                    if (0 <= nr < m and 0 <= nc < n and 
                        (nr, nc) not in visited and 
                        grid[nr][nc] == color):
                        queue.append((nr, nc))
                        visited.add((nr, nc))
    
    return False`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Implement a function to count the number of distinct islands in a matrix (islands are considered same if they have the same shape regardless of position).',
      initialCode: `def numDistinctIslands(grid: List[List[int]]) -> int:
    # Implement your solution here
    pass`,
      solution: `def numDistinctIslands(grid: List[List[int]]) -> int:
    if not grid or not grid[0]:
        return 0
        
    m, n = len(grid), len(grid[0])
    islands = set()
    
    def explore(i, j, shape, origin_i, origin_j):
        if (0 <= i < m and 0 <= j < n and 
            grid[i][j] == 1):
            # Add relative position to shape
            shape.append((i - origin_i, j - origin_j))
            grid[i][j] = 0  # Mark as visited
            
            # Explore all directions
            explore(i+1, j, shape, origin_i, origin_j)
            explore(i-1, j, shape, origin_i, origin_j)
            explore(i, j+1, shape, origin_i, origin_j)
            explore(i, j-1, shape, origin_i, origin_j)
    
    for i in range(m):
        for j in range(n):
            if grid[i][j] == 1:
                shape = []
                explore(i, j, shape, i, j)
                islands.add(tuple(sorted(shape)))
    
    return len(islands)`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question:
        'Why is multi-source BFS often more efficient than running multiple single-source BFS for matrix problems?',
      options: [
        'It requires less memory',
        'It processes each cell only once instead of multiple times',
        'It is easier to implement',
        'It works better with recursive functions',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Both approaches use similar amount of memory.',
        'Correct! Multi-source BFS visits each cell at most once, finding the shortest distance to any source.',
        'Incorrect. Implementation complexity is similar.',
        'Incorrect. BFS typically uses iteration, not recursion.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'What is the key advantage of modifying the input matrix to track visited cells instead of using a separate visited set?',
      options: [
        'It makes the code faster',
        'It reduces space complexity',
        'It allows for backtracking',
        'It makes debugging easier',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Time complexity remains the same.',
        'Correct! It saves the space needed for a separate visited set, though it modifies the input.',
        'Incorrect. Modifying the matrix actually makes backtracking harder.',
        'Incorrect. Using a separate visited set is often clearer for debugging.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const priorityBasicsData = {
  title: 'Priority Queue Essentials',
  content: `<p>
A priority queue is like a special line at an airport where passengers are boarded not by their arrival time, but by their priority status - first class boards first, then business class, and finally economy. Just as the airport needs to efficiently manage passengers with different priorities, many computing problems require us to process items based on their relative importance or urgency.
</p>

<h3><u>Understanding Priority Queues</u></h3>
<p>
At its core, a priority queue maintains elements in a way that always gives us quick access to the highest (or lowest) priority element. Think of it as an organized to-do list where tasks are automatically sorted by their importance.
</p>

<h4><b>Key Properties</b></h4>
<p>
Priority queues have several important characteristics that make them useful:
</p>
<li><strong>Efficient Access:</strong> Always provides O(1) access to the highest/lowest priority element</li>
<li><strong>Balanced Insertions:</strong> New elements are placed in their correct priority position in O(log n) time</li>
<li><strong>Dynamic Updates:</strong> The structure automatically maintains proper ordering as elements are added or removed</li>

<h3><u>Implementation Using Heaps</u></h3>
<p>
Most priority queue implementations use a heap data structure internally. A heap is a special type of binary tree that satisfies the "heap property":
</p>
<li>In a max heap: Every parent node is greater than or equal to its children</li>
<li>In a min heap: Every parent node is less than or equal to its children</li>

<h3><u>Common Applications</u></h3>
<p>
Priority queues shine in many real-world scenarios:
</p>
<li><strong>Task Scheduling:</strong> Operating systems use them to manage process priorities</li>
<li><strong>Network Routing:</strong> Packets with higher priority get transmitted first</li>
<li><strong>Event-Driven Simulation:</strong> Events are processed in order of their scheduled time</li>
<li><strong>Data Compression:</strong> Huffman coding uses a priority queue to build optimal prefix trees</li>

<h3><u>Time Complexity</u></h3>
<table>
<tr><th>Operation</th><th>Time Complexity</th><th>Description</th></tr>
<tr><td>Insert</td><td>O(log n)</td><td>Add new element</td></tr>
<tr><td>Remove Top</td><td>O(log n)</td><td>Remove highest/lowest priority element</td></tr>
<tr><td>Peek Top</td><td>O(1)</td><td>View highest/lowest priority element</td></tr>
<tr><td>Heapify</td><td>O(n)</td><td>Build heap from unordered array</td></tr>
</table>`,

  codeExample: `# Priority Queue Implementation and Common Patterns
import heapq
from typing import List, Tuple, Any

class PriorityQueueExamples:
    def __init__(self):
        """
        Initialize examples of priority queue usage.
        Python's heapq implements a min heap, where smallest element has highest priority.
        """
        self.tasks = []  # Our priority queue for tasks
    
    def basic_priority_queue(self) -> None:
        """
        Demonstrates fundamental priority queue operations.
        Think of this like managing a to-do list where tasks have different priorities.
        """
        # Initialize empty priority queue
        pq = []
        
        # Adding elements (push)
        # Lower numbers = higher priority in min heap
        print("Adding tasks with priorities...")
        heapq.heappush(pq, (2, "Complete project documentation"))
        heapq.heappush(pq, (1, "Fix critical bug"))
        heapq.heappush(pq, (3, "Update dependencies"))
        
        # Viewing top element without removing (peek)
        if pq:
            priority, task = pq[0]
            print(f"Most urgent task: {task} (priority: {priority})")
        
        # Processing elements in priority order (pop)
        print("Processing tasks by priority:")
        while pq:
            priority, task = heapq.heappop(pq)
            print(f"Working on: {task} (priority: {priority})")
    
    def custom_priority(self, tasks: List[Tuple[int, str, Any]]) -> None:
        """
        Shows how to handle multiple priority criteria using tuples.
        Example: Tasks with both priority level and deadline.
        """
        # Clear existing tasks
        self.tasks = []
        
        # Add tasks: (priority, deadline, description)
        for task in tasks:
            # Negative priority to make higher numbers = higher priority
            heapq.heappush(self.tasks, (-task[0], task[1], task[2]))
        
        print("Processing tasks by priority and deadline:")
        while self.tasks:
            priority, deadline, task = heapq.heappop(self.tasks)
            print(f"Task: {task}, Priority: {-priority}, Deadline: {deadline}")
    
    def k_smallest_elements(self, nums: List[int], k: int) -> List[int]:
        """
        Common pattern: Finding k smallest elements efficiently.
        This is like finding the k highest-priority items.
        Time complexity: O(n log k) - better than sorting when k is small
        """
        # Use negative numbers to turn min heap into max heap
        heap = []
        
        for num in nums:
            # If heap has less than k elements, add current number
            if len(heap) < k:
                heapq.heappush(heap, -num)
            # If current number is smaller than largest in heap
            elif -num > heap[0]:
                # Replace largest element with current number
                heapq.heapreplace(heap, -num)
        
        # Convert back to positive numbers and sort
        return sorted([-x for x in heap])
    
    def merge_k_streams(self, streams: List[List[int]]) -> List[int]:
        """
        Classic problem: Merge k sorted streams of data.
        Like merging k different priority queues into one.
        Time: O(N log k) where N is total elements and k is number of streams
        """
        result = []
        heap = []
        
        # Initialize with first element from each stream
        # Store (value, stream_index, element_index)
        for i, stream in enumerate(streams):
            if stream:
                heapq.heappush(heap, (stream[0], i, 0))
        
        # Process streams using priority queue
        while heap:
            val, stream_idx, elem_idx = heapq.heappop(heap)
            result.append(val)
            
            # If stream has more elements, add next one
            if elem_idx + 1 < len(streams[stream_idx]):
                next_elem = streams[stream_idx][elem_idx + 1]
                heapq.heappush(heap, (next_elem, stream_idx, elem_idx + 1))
        
        return result`,

  exercises: [
    {
      prompt:
        'Implement a function to find the k most frequent elements in an array using a priority queue.',
      initialCode: `def topKFrequent(nums: List[int], k: int) -> List[int]:
    # Implement your solution here
    pass`,
      solution: `def topKFrequent(nums: List[int], k: int) -> List[int]:
    # Count frequency of each number
    count = {}
    for num in nums:
        count[num] = count.get(num, 0) + 1
    
    # Use min heap to maintain k most frequent elements
    heap = []
    for num, freq in count.items():
        if len(heap) < k:
            heapq.heappush(heap, (freq, num))
        elif freq > heap[0][0]:
            heapq.heapreplace(heap, (freq, num))
    
    # Extract numbers from heap
    return [num for freq, num in sorted(heap, reverse=True)]`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Create a function that returns the median from a data stream using two priority queues.',
      initialCode: `class MedianFinder:
    def __init__(self):
        # Initialize your data structure here
        
    def addNum(self, num: int) -> None:
        # Add a number to the data structure
        
    def findMedian(self) -> float:
        # Return the median of all numbers added so far`,
      solution: `class MedianFinder:
    def __init__(self):
        self.small = []  # max heap for smaller half
        self.large = []  # min heap for larger half
    
    def addNum(self, num: int) -> None:
        # Default to adding to max heap of smaller numbers
        heapq.heappush(self.small, -num)
        
        # Ensure every element in small is <= every element in large
        if self.small and self.large and -self.small[0] > self.large[0]:
            val = -heapq.heappop(self.small)
            heapq.heappush(self.large, val)
        
        # Balance heaps
        while len(self.small) > len(self.large) + 1:
            val = -heapq.heappop(self.small)
            heapq.heappush(self.large, val)
        while len(self.large) > len(self.small):
            val = heapq.heappop(self.large)
            heapq.heappush(self.small, -val)
    
    def findMedian(self) -> float:
        if len(self.small) > len(self.large):
            return float(-self.small[0])
        return (-self.small[0] + self.large[0]) / 2.0`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question:
        'Why is a heap a good data structure for implementing a priority queue?',
      options: [
        'Because it provides O(1) access to all elements',
        'Because it automatically maintains elements in sorted order',
        'Because it provides O(1) access to the highest/lowest priority element and O(log n) insertions',
        'Because it uses less memory than other data structures',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Only the top element has O(1) access.',
        'Incorrect. Heaps maintain partial ordering, not complete sorting.',
        'Correct! Heaps provide quick access to the highest/lowest priority element while maintaining efficient insertions.',
        'Incorrect. Memory usage is not the primary advantage of heaps.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'What is the time complexity of building a heap from an unsorted array (heapify)?',
      options: ['O(n)', 'O(n log n)', 'O(log n)', 'O(1)'],
      correctAnswer: 0,
      explanations: [
        'Correct! Although surprising, heapify can be done in linear time by working bottom-up.',
        'Incorrect. While each insertion takes log n time, heapify is more efficient than n separate insertions.',
        'Incorrect. Building a heap requires processing all elements at least once.',
        'Incorrect. We must process all elements in the array.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const topKPatternsData = {
  title: 'Top-K Pattern Problems',
  content: `<p>
The Top-K pattern is like being a judge in a competition where you need to find the top performers without necessarily ranking every single participant. This powerful pattern helps us solve many real-world problems efficiently, from finding bestselling products to identifying the most frequent website visitors.
</p>

<h3><u>Core Concept</u></h3>
<p>
At its heart, the Top-K pattern is about efficiently maintaining a set of k elements that represent the "best" according to some criteria, without having to sort the entire dataset. Just as a talent show might track only the top 10 performers rather than ranking all contestants, this pattern helps us focus on just the elements we care about.
</p>

<h3><u>Key Insights</u></h3>
<p>
Understanding these fundamental insights will help you master the Top-K pattern:
</p>

<h4><b>1. Partial Sorting is Sufficient</b></h4>
<p>
Consider a basketball tournament where we only need to know the top 3 teams. We don't need to determine the exact ranking of every team - we just need to identify those top performers. This insight allows us to process data much more efficiently than full sorting would require.
</p>

<h4><b>2. Heap as the Perfect Tool</b></h4>
<p>
A heap data structure is ideal for Top-K problems because it automatically maintains elements in a partially sorted state, giving us:
</p>
<li>Instant access to the smallest/largest element</li>
<li>Efficient insertions and removals in O(log k) time</li>
<li>Natural way to maintain a "rolling top-k" as we process elements</li>

<h4><b>3. Min-Heap vs Max-Heap Strategy</b></h4>
<p>
The choice between min-heap and max-heap is crucial:
</p>
<li>For k largest elements: Use a min-heap of size k (removes smaller elements)</li>
<li>For k smallest elements: Use a max-heap of size k (removes larger elements)</li>

<h3><u>Common Variations</u></h3>

<h4><b>1. Basic Top-K</b></h4>
<p>
Finding the k largest/smallest elements in a dataset. Like finding the top k scores in an exam.
</p>

<h4><b>2. Frequency Based</b></h4>
<p>
Finding elements that appear most often. Similar to identifying the most frequent customers or most common words in a book.
</p>

<h4><b>3. Distance Based</b></h4>
<p>
Finding k closest points to a target. Think of finding the nearest restaurants to your location.
</p>

<h4><b>4. Combined Criteria</b></h4>
<p>
Elements ranked by multiple factors, like products sorted by both rating and price.
</p>`,

  codeExample: `# Implementation of common Top-K pattern variations
from typing import List
import heapq
from collections import Counter

class TopKSolutions:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        """
        Find the kth largest element in an unsorted array.
        Time: O(n * log k)
        Space: O(k)
        
        Think of this like maintaining a list of top k scores:
        - If we have fewer than k scores, add the new score
        - If we find a better score, replace the lowest in our top k
        """
        # Min heap maintains k largest elements
        min_heap = []
        
        for num in nums:
            if len(min_heap) < k:
                # Still building our top k
                heapq.heappush(min_heap, num)
            elif num > min_heap[0]:
                # Found a larger element, replace smallest in our top k
                heapq.heapreplace(min_heap, num)
        
        # The smallest among the k largest is our answer
        return min_heap[0]
    
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        """
        Find the k most frequent elements.
        Like finding top k bestselling products.
        Time: O(n * log k)
        Space: O(n) for counting
        """
        # Count frequencies
        counts = Counter(nums)
        
        # Use min heap based on frequencies
        heap = []
        
        for num, freq in counts.items():
            if len(heap) < k:
                heapq.heappush(heap, (freq, num))
            elif freq > heap[0][0]:
                heapq.heapreplace(heap, (freq, num))
        
        # Extract numbers in order of frequency
        return [num for freq, num in sorted(heap, reverse=True)]
    
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        """
        Find k points closest to origin.
        Like finding k nearest stores to your location.
        Time: O(n * log k)
        Space: O(k)
        """
        # Max heap for k smallest distances
        # Use negative distances since Python has min heap
        heap = []
        
        for x, y in points:
            dist = -(x*x + y*y)  # Negative for max heap behavior
            
            if len(heap) < k:
                heapq.heappush(heap, (dist, x, y))
            elif dist > heap[0][0]:  # Found a closer point
                heapq.heapreplace(heap, (dist, x, y))
        
        return [[x, y] for (dist, x, y) in heap]
    
    def topKByMultipleCriteria(self, items: List[tuple], k: int) -> List[tuple]:
        """
        Find top k items based on multiple criteria (e.g., rating and price)
        Like finding best products considering both quality and value
        Time: O(n * log k)
        Space: O(k)
        """
        heap = []
        
        for rating, price, item_id in items:
            # Create score combining criteria (higher rating, lower price is better)
            score = rating - price/100  # Example scoring formula
            
            if len(heap) < k:
                heapq.heappush(heap, (score, item_id))
            elif score > heap[0][0]:
                heapq.heapreplace(heap, (score, item_id))
        
        return [item_id for score, item_id in sorted(heap, reverse=True)]`,

  exercises: [
    {
      prompt:
        'Implement a function to find the k most frequent words in a list of strings, returning them in descending order of frequency.',
      initialCode: `def topKFrequentWords(words: List[str], k: int) -> List[str]:
    # Implement your solution here
    pass`,
      solution: `def topKFrequentWords(words: List[str], k: int) -> List[str]:
    # Count word frequencies
    counts = Counter(words)
    
    # Use heap to track k most frequent
    # Store as (-freq, word) for correct ordering
    heap = []
    
    for word, freq in counts.items():
        heapq.heappush(heap, (-freq, word))
    
    # Extract top k
    result = []
    for _ in range(k):
        if heap:
            freq, word = heapq.heappop(heap)
            result.append(word)
    
    return result`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Implement a function to find the k pairs of numbers from two sorted arrays with the smallest sums.',
      initialCode: `def kSmallestPairs(nums1: List[int], nums2: List[int], k: int) -> List[List[int]]:
    # Implement your solution here
    pass`,
      solution: `def kSmallestPairs(nums1: List[int], nums2: List[int], k: int) -> List[List[int]]:
    if not nums1 or not nums2:
        return []
    
    # Min heap to track smallest sums
    heap = [(nums1[0] + nums2[0], 0, 0)]
    result = []
    seen = {(0, 0)}
    
    while heap and len(result) < k:
        _, i, j = heapq.heappop(heap)
        result.append([nums1[i], nums2[j]])
        
        # Try next pair from nums1
        if i + 1 < len(nums1) and (i + 1, j) not in seen:
            heapq.heappush(heap, (nums1[i + 1] + nums2[j], i + 1, j))
            seen.add((i + 1, j))
        
        # Try next pair from nums2
        if j + 1 < len(nums2) and (i, j + 1) not in seen:
            heapq.heappush(heap, (nums1[i] + nums2[j + 1], i, j + 1))
            seen.add((i, j + 1))
    
    return result`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'Why do we use a min-heap when finding the k largest elements?',
      options: [
        'Because it uses less memory than a max-heap',
        'Because we want to easily remove elements smaller than our current k largest',
        'Because it makes the code simpler to write',
        'Because min-heaps are faster than max-heaps',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Both heap types use the same amount of memory.',
        'Correct! A min-heap lets us easily identify and remove elements smaller than our current k largest elements.',
        'Incorrect. The complexity of implementation is similar for both types.',
        'Incorrect. Both types have the same performance characteristics.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'What is the time complexity of finding k largest elements in an array of size n?',
      options: ['O(n)', 'O(n log n)', 'O(n log k)', 'O(k log n)'],
      correctAnswer: 2,
      explanations: [
        'Incorrect. We need heap operations for each element.',
        'Incorrect. Full sorting is not necessary and would be less efficient.',
        'Correct! We process each element once (n) and heap operations are log k.',
        'Incorrect. We process all n elements, not just k elements.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const mergePatternsData = {
  title: 'K-way Merge Pattern Problems',
  content: `<p>
Imagine you're organizing a massive tournament where you have rankings from different regions, and you need to combine them into one unified global ranking. This is essentially what the K-way merge pattern helps us solve - combining multiple sorted sequences into a single sorted sequence while maintaining efficiency.
</p>

<h3><u>Understanding K-way Merge</u></h3>
<p>
The K-way merge pattern is fundamentally about efficiently combining multiple sorted sequences. Think of it like having K different sorted playlists of songs, and you want to combine them into one master playlist while keeping everything in order. The key challenge is doing this efficiently without comparing every element to every other element.
</p>

<p>
Let's visualize this with a simple example. Imagine we have three sorted lists:
</p>
<pre>
List 1: [2, 6, 8]
List 2: [3, 5, 7]
List 3: [1, 4, 9]

We want to merge these into: [1, 2, 3, 4, 5, 6, 7, 8, 9]
</pre>

<h3><u>Core Concepts</u></h3>

<h4><b>1. The Priority Queue Approach</b></h4>
<p>
The key insight is that at any point, the next element in our merged result must be the smallest among all the current elements in our K lists. A priority queue helps us efficiently track and update these "current elements":
</p>
<li>We keep track of the current element from each list</li>
<li>The priority queue always gives us the smallest element efficiently</li>
<li>After taking an element, we add the next element from its list</li>

<h4><b>2. Space-Time Trade-off</b></h4>
<p>
The priority queue approach offers an excellent balance:
</p>
<li>Time Complexity: O(N * log K) where N is total elements and K is number of lists</li>
<li>Space Complexity: O(K) for the priority queue</li>
<li>Much better than comparing all elements or merging lists one by one</li>

<h3><u>Common Variations</u></h3>

<h4><b>1. Basic K-way Merge</b></h4>
<p>
The foundational problem of merging K sorted lists into a single sorted list. Think of combining K different leaderboards into one global ranking.
</p>

<h4><b>2. Smallest Range</b></h4>
<p>
Finding the smallest range that includes at least one number from each list. Imagine finding a time slot that works for K different people's schedules.
</p>

<h4><b>3. K-th Smallest Element</b></h4>
<p>
Finding the K-th smallest element across all lists. Like finding the K-th ranked player across multiple regional tournaments.
</p>

<h3><u>Edge Cases and Considerations</u></h3>
<p>
When implementing K-way merge solutions, always consider:
</p>
<li>Empty lists within the K lists</li>
<li>Lists of different lengths</li>
<li>Duplicate elements across lists</li>
<li>Memory constraints with very large lists</li>`,

  codeExample: `# Implementation of common K-way merge patterns
from typing import List
import heapq

class KWayMergeSolutions:
    def mergeKLists(self, lists: List[List[int]]) -> List[int]:
        """
        Merge K sorted lists into a single sorted list.
        Time: O(N * log K) where N is total elements
        Space: O(K) for the priority queue
        """
        result = []
        # Min heap to track smallest current element from each list
        # Store (value, list_index, element_index)
        min_heap = []
        
        # Initialize heap with first element from each list
        for i, lst in enumerate(lists):
            if lst:  # Handle empty lists
                heapq.heappush(min_heap, (lst[0], i, 0))
        
        # Continue until we've processed all elements
        while min_heap:
            val, list_idx, elem_idx = heapq.heappop(min_heap)
            result.append(val)
            
            # If there are more elements in this list, add the next one
            if elem_idx + 1 < len(lists[list_idx]):
                next_elem = lists[list_idx][elem_idx + 1]
                heapq.heappush(min_heap, (next_elem, list_idx, elem_idx + 1))
        
        return result
    
    def smallestRange(self, lists: List[List[int]]) -> List[int]:
        """
        Find smallest range that includes at least one number from each list.
        Like finding the smallest time window that works for everyone's schedule.
        
        Time: O(N * log K) where N is total elements
        Space: O(K) for the priority queue
        """
        min_heap = []
        current_max = float('-inf')
        result = [float('-inf'), float('inf')]
        
        # Initialize with first element from each list
        for i, lst in enumerate(lists):
            if lst:
                heapq.heappush(min_heap, (lst[0], i, 0))
                current_max = max(current_max, lst[0])
        
        while len(min_heap) == len(lists):  # Ensure we have elements from all lists
            min_val, list_idx, elem_idx = heapq.heappop(min_heap)
            
            # Check if this range is smaller than our current result
            if current_max - min_val < result[1] - result[0]:
                result = [min_val, current_max]
            
            # Move to next element in this list
            if elem_idx + 1 < len(lists[list_idx]):
                next_val = lists[list_idx][elem_idx + 1]
                heapq.heappush(min_heap, (next_val, list_idx, elem_idx + 1))
                current_max = max(current_max, next_val)
            
        return result
    
    def kthSmallest(self, lists: List[List[int]], k: int) -> int:
        """
        Find kth smallest element across all sorted lists.
        Like finding the kth ranked player across multiple tournaments.
        
        Time: O(k * log K) where K is number of lists
        Space: O(K) for the priority queue
        """
        # Min heap to track current smallest elements
        min_heap = []
        
        # Initialize with first element from each list
        for i, lst in enumerate(lists):
            if lst:
                heapq.heappush(min_heap, (lst[0], i, 0))
        
        # Process k elements to find kth smallest
        for _ in range(k-1):
            if not min_heap:
                return None  # Not enough elements
                
            val, list_idx, elem_idx = heapq.heappop(min_heap)
            
            # Add next element from same list if available
            if elem_idx + 1 < len(lists[list_idx]):
                next_val = lists[list_idx][elem_idx + 1]
                heapq.heappush(min_heap, (next_val, list_idx, elem_idx + 1))
        
        return min_heap[0][0] if min_heap else None`,

  exercises: [
    {
      prompt:
        'Implement a function to find the median element from K sorted arrays.',
      initialCode: `def findMedianKArrays(arrays: List[List[int]]) -> float:
    # Implement your solution here
    pass`,
      solution: `def findMedianKArrays(arrays: List[List[int]]) -> float:
    # Count total elements to find median position
    total = sum(len(arr) for arr in arrays)
    k = len(arrays)
    
    # Initialize min heap with first elements
    min_heap = []
    for i, arr in enumerate(arrays):
        if arr:
            heapq.heappush(min_heap, (arr[0], i, 0))
    
    # Find median position(s)
    median_pos = (total - 1) // 2
    is_even = total % 2 == 0
    
    # Track current position
    current_pos = 0
    prev_val = None
    
    while min_heap:
        val, arr_idx, elem_idx = heapq.heappop(min_heap)
        
        # If we reached first median position
        if current_pos == median_pos:
            if is_even:
                # Need one more number for even length
                if min_heap:
                    next_val = min_heap[0][0]
                    return (val + next_val) / 2
            return float(val)
        
        # Add next element from same array if available
        if elem_idx + 1 < len(arrays[arr_idx]):
            next_val = arrays[arr_idx][elem_idx + 1]
            heapq.heappush(min_heap, (next_val, arr_idx, elem_idx + 1))
        
        current_pos += 1
    
    return 0.0  # Handle empty arrays`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt:
        'Implement a function to find the range that contains all numbers that appear in at least K out of N sorted arrays.',
      initialCode: `def findRangeInKArrays(arrays: List[List[int]], k: int) -> List[int]:
    # Implement your solution here
    pass`,
      solution: `def findRangeInKArrays(arrays: List[List[int]], k: int) -> List[int]:
    from collections import Counter
    
    # Initialize min heap with first elements
    min_heap = []
    current_max = float('-inf')
    number_counts = Counter()
    result = [float('-inf'), float('inf')]
    
    # Add first element from each array
    for i, arr in enumerate(arrays):
        if arr:
            heapq.heappush(min_heap, (arr[0], i, 0))
            number_counts[arr[0]] += 1
            current_max = max(current_max, arr[0])
    
    # Process elements until we can't maintain k numbers
    while min_heap:
        min_val, arr_idx, elem_idx = heapq.heappop(min_heap)
        
        # Check if current range satisfies k requirement
        if sum(1 for count in number_counts.values() if count >= k) > 0:
            if current_max - min_val < result[1] - result[0]:
                result = [min_val, current_max]
        
        # Reduce count of minimum value
        number_counts[min_val] -= 1
        if number_counts[min_val] == 0:
            del number_counts[min_val]
        
        # Add next element from same array
        if elem_idx + 1 < len(arrays[arr_idx]):
            next_val = arrays[arr_idx][elem_idx + 1]
            heapq.heappush(min_heap, (next_val, arr_idx, elem_idx + 1))
            number_counts[next_val] += 1
            current_max = max(current_max, next_val)
    
    return result`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'Why do we use a priority queue in K-way merge problems?',
      options: [
        'To sort all elements at once',
        'To efficiently track and retrieve the current minimum element across K lists',
        'To reduce memory usage',
        'To handle duplicate elements',
      ],
      correctAnswer: 1,
      explanations: [
        "Incorrect. We don't need to sort all elements, as input lists are already sorted.",
        'Correct! The priority queue helps us efficiently find the next element to add to our result.',
        "Incorrect. While space efficient, this isn't the primary reason.",
        'Incorrect. Duplicate handling is a side benefit but not the main purpose.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'What is the time complexity of merging K sorted lists with a total of N elements?',
      options: ['O(N)', 'O(N * K)', 'O(N * log K)', 'O(N * log N)'],
      correctAnswer: 2,
      explanations: [
        'Incorrect. We need heap operations for each element.',
        'Incorrect. Using a heap is more efficient than comparing with each list.',
        'Correct! We process N elements, each requiring a log K heap operation.',
        "Incorrect. We don't need to compare each element with all others.",
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const slidingWindowMaximumData = {
  title: 'Sliding Window Maximum',
  content: `<p>
Imagine you're analyzing temperature readings over time, and you want to find the highest temperature in each 24-hour period as your window "slides" through the data. This is exactly what the Sliding Window Maximum pattern helps us solve efficiently. It's a powerful technique for finding maximum values in a window that moves through a sequence of data.
</p>

<h3><u>Understanding the Pattern</u></h3>
<p>
Let's visualize how a sliding window works with a simple example. Consider this array of numbers and a window size of 3:
</p>

<pre>
Array:    [1, 3, -1, -3, 5, 3, 6, 7]
Window 1: [1, 3, -1]  -> max = 3
Window 2: [3, -1, -3] -> max = 3
Window 3: [-1, -3, 5] -> max = 5
Window 4: [-3, 5, 3]  -> max = 5
Window 5: [5, 3, 6]   -> max = 6
Window 6: [3, 6, 7]   -> max = 7
</pre>

<h3><u>The Deque Approach</u></h3>
<p>
The key to solving sliding window maximum problems efficiently is using a deque (double-ended queue). This data structure maintains a decreasing sequence of potential maximum values, making it perfect for our needs. Here's why:
</p>

<h4><b>1. Core Properties</b></h4>
<p>
The deque maintains these important properties:
</p>
<li>Elements are stored in decreasing order</li>
<li>Only useful elements are kept (elements that could be maximum in some window)</li>
<li>The front of the deque always contains the current window's maximum</li>

<h4><b>2. Key Operations</b></h4>
<p>
For each new element, we:
</p>
<li>Remove elements from the back that are smaller than the current element</li>
<li>Remove elements from the front that are outside the current window</li>
<li>Add the current element to the back</li>

<h3><u>Template Approach</u></h3>
<p>
The sliding window maximum pattern typically follows this template:
</p>

<h4><b>1. Initialize</b></h4>
<p>
Set up the deque and result array:
</p>
<li>Create an empty deque to store indices</li>
<li>Create a result array for maximum values</li>
<li>Handle the first window specially if needed</li>

<h4><b>2. Process Elements</b></h4>
<p>
For each element:
</p>
<li>Remove outdated elements (outside window)</li>
<li>Remove smaller elements (won't be maximum)</li>
<li>Add current element</li>
<li>Record maximum for completed windows</li>

<h4><b>3. Handle Edge Cases</b></h4>
<p>
Consider these situations:
</p>
<li>Empty array or window size larger than array</li>
<li>Window size of 1</li>
<li>Equal elements in window</li>`,

  codeExample: `from collections import deque
from typing import List

class SlidingWindowMaximum:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        """
        Find maximum element in each sliding window of size k.
        Uses deque to maintain decreasing sequence of potential maximums.
        
        Time: O(n) - each element is pushed and popped at most once
        Space: O(k) - deque never stores more than k elements
        
        Args:
            nums: Input array
            k: Window size
        Returns:
            Array containing maximum of each window
        """
        # Handle edge cases
        if not nums or k <= 0:
            return []
        if k == 1:  # Optimization for window size 1
            return nums
            
        # Initialize deque and result
        deq = deque()  # Store indices
        result = []
        
        # Process first k elements (first window)
        for i in range(k):
            # Remove all elements smaller than current
            while deq and nums[i] >= nums[deq[-1]]:
                deq.pop()
            deq.append(i)
        
        # Process rest of the elements
        for i in range(k, len(nums)):
            # Add maximum of previous window to result
            result.append(nums[deq[0]])
            
            # Remove elements outside current window
            while deq and deq[0] <= i - k:
                deq.popleft()
            
            # Remove all elements smaller than current
            while deq and nums[i] >= nums[deq[-1]]:
                deq.pop()
            
            # Add current element
            deq.append(i)
        
        # Add maximum of last window
        result.append(nums[deq[0]])
        
        return result

    def maxSlidingWindowBruteForce(self, nums: List[int], k: int) -> List[int]:
        """
        Brute force approach for comparison.
        Shows why we need a more efficient solution.
        
        Time: O(n*k) - we check k elements for each window
        Space: O(1) - excluding result array
        """
        if not nums or k <= 0:
            return []
            
        result = []
        for i in range(len(nums) - k + 1):
            max_val = max(nums[i:i+k])
            result.append(max_val)
            
        return result

    def maxSlidingWindowTemplate(self, nums: List[int], k: int) -> List[int]:
        """
        Template-based approach that's easier to remember and modify.
        Separates the logic into clear phases.
        """
        def clean_deque(i):
            """Helper function to maintain deque properties"""
            # Remove elements outside current window
            if deq and deq[0] <= i - k:
                deq.popleft()
                
            # Remove elements smaller than current
            while deq and nums[i] >= nums[deq[-1]]:
                deq.pop()
        
        # Initialize
        deq = deque()
        max_idx = 0
        result = []
        
        # Handle first element
        deq.append(0)
        
        # Process first window
        for i in range(1, k):
            clean_deque(i)
            deq.append(i)
            if nums[i] > nums[max_idx]:
                max_idx = i
        
        # Add first result
        result.append(nums[max_idx])
        
        # Process rest of the array
        for i in range(k, len(nums)):
            clean_deque(i)
            deq.append(i)
            result.append(nums[deq[0]])  # Deque front is always maximum
            
        return result`,

  exercises: [
    {
      prompt:
        'Implement a function to find the minimum value in each sliding window of size k.',
      initialCode: `def minSlidingWindow(nums: List[int], k: int) -> List[int]:
    # Implement your solution here
    pass`,
      solution: `def minSlidingWindow(nums: List[int], k: int) -> List[int]:
    if not nums or k <= 0:
        return []
    
    deq = deque()
    result = []
    
    # Process first k elements
    for i in range(k):
        # Remove all elements larger than current
        while deq and nums[i] <= nums[deq[-1]]:
            deq.pop()
        deq.append(i)
    
    # Process rest of the elements
    for i in range(k, len(nums)):
        # Add minimum of previous window
        result.append(nums[deq[0]])
        
        # Remove elements outside window
        while deq and deq[0] <= i - k:
            deq.popleft()
        
        # Remove elements larger than current
        while deq and nums[i] <= nums[deq[-1]]:
            deq.pop()
        
        deq.append(i)
    
    # Add minimum of last window
    result.append(nums[deq[0]])
    
    return result`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Implement a function to find both maximum and minimum values in each sliding window of size k.',
      initialCode: `def maxMinSlidingWindow(nums: List[int], k: int) -> List[List[int]]:
    # Implement your solution here
    pass`,
      solution: `def maxMinSlidingWindow(nums: List[int], k: int) -> List[List[int]]:
    if not nums or k <= 0:
        return []
    
    # Maintain two deques - one for max, one for min
    max_deq = deque()
    min_deq = deque()
    result = []
    
    def clean_deques(i):
        # Remove elements outside window
        for d in [max_deq, min_deq]:
            while d and d[0] <= i - k:
                d.popleft()
        
        # Remove elements based on comparison
        while max_deq and nums[i] >= nums[max_deq[-1]]:
            max_deq.pop()
        while min_deq and nums[i] <= nums[min_deq[-1]]:
            min_deq.pop()
    
    # Process first window
    for i in range(k):
        clean_deques(i)
        max_deq.append(i)
        min_deq.append(i)
    
    # Add first window result
    result.append([nums[max_deq[0]], nums[min_deq[0]]])
    
    # Process rest of the array
    for i in range(k, len(nums)):
        clean_deques(i)
        max_deq.append(i)
        min_deq.append(i)
        result.append([nums[max_deq[0]], nums[min_deq[0]]])
    
    return result`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question:
        'Why do we use a deque instead of a regular queue or array for sliding window maximum?',
      options: [
        'Because deques use less memory',
        'Because we need to efficiently add/remove from both ends',
        'Because deques automatically sort elements',
        'Because deques are faster than arrays',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Memory usage is not the primary consideration.',
        'Correct! We need O(1) operations at both ends to maintain our window efficiently.',
        "Incorrect. Deques don't automatically sort elements.",
        'Incorrect. The efficiency comes from the operations we need, not raw speed.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'What is the time complexity of the sliding window maximum algorithm using a deque?',
      options: ['O(n)', 'O(n*k)', 'O(n log k)', 'O(n log n)'],
      correctAnswer: 0,
      explanations: [
        'Correct! Each element is pushed and popped at most once, giving linear time.',
        'Incorrect. This is the brute force approach complexity.',
        "Incorrect. We don't need any logarithmic operations.",
        'Incorrect. The algorithm is more efficient than sorting.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const dequeProblemsData = {
  title: 'Deque-based Problems and Solutions',
  content: `<p>
A deque (double-ended queue) is like a special line at a busy coffee shop where people can join or leave from either end. This unique flexibility makes it perfect for solving problems that involve tracking elements in order, especially when we need to efficiently add or remove elements from both ends.
</p>

<h3><u>Understanding Deques</u></h3>
<p>
Think of a deque like a deck of cards where you can add or remove cards from either end. This seemingly simple capability becomes powerful when solving problems that involve maintaining order or tracking elements within a moving window of data.
</p>

<h4><b>Key Properties of Deques</b></h4>
<p>
A deque gives us four fundamental operations, all in O(1) time:
</p>
<li>appendleft(): Add to the front (like dealing a card to the top of the deck)</li>
<li>append(): Add to the back (like placing a card at the bottom)</li>
<li>popleft(): Remove from the front (like drawing the top card)</li>
<li>pop(): Remove from the back (like taking the bottom card)</li>

<h3><u>Common Problem Patterns</u></h3>

<h4><b>1. Moving Average Pattern</b></h4>
<p>
Imagine calculating the average stock price over a moving window of time. The deque helps by:
</p>
<li>Maintaining the current window of values</li>
<li>Efficiently removing old values as new ones arrive</li>
<li>Tracking the sum of values in the current window</li>

<h4><b>2. Order Maintenance Pattern</b></h4>
<p>
Think of maintaining a sorted sequence as elements come and go. The deque helps when:
</p>
<li>We need to maintain elements in a specific order</li>
<li>Elements need to be removed based on certain criteria</li>
<li>We want to access elements from both ends efficiently</li>

<h3><u>Common Applications</u></h3>
<p>
Deques excel in scenarios like:
</p>
<li>Temperature readings over a moving time window</li>
<li>Recent user actions in an application</li>
<li>Browser history (forward/backward navigation)</li>
<li>Undo/redo functionality in editors</li>

<h3><u>Implementation Considerations</u></h3>
<p>
When using deques, always consider:
</p>
<li>Memory usage (deques store all elements in the window)</li>
<li>Order requirements (maintaining sorting if needed)</li>
<li>Edge cases (empty deque, single element, window size changes)</li>`,

  codeExample: `from collections import deque
from typing import List

class DequeExamples:
    class MovingAverage:
        """
        Calculate moving average over a sliding window.
        Like computing average temperature over last N readings.
        
        Time complexity: O(1) for each operation
        Space complexity: O(window_size)
        """
        def __init__(self, size: int):
            self.size = size
            self.deque = deque()
            self.running_sum = 0
            
        def next(self, val: float) -> float:
            # Add new value to window
            self.deque.append(val)
            self.running_sum += val
            
            # Remove oldest value if window is too large
            if len(self.deque) > self.size:
                self.running_sum -= self.deque.popleft()
            
            # Calculate current average
            return self.running_sum / len(self.deque)
    
    class MaxInSlidingWindow:
        """
        Maintain maximum value in a sliding window.
        Uses a deque to track potential maximum values.
        
        Time complexity: O(n) for processing n elements
        Space complexity: O(k) where k is window size
        """
        def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
            if not nums or k <= 0:
                return []
                
            # Deque stores indices of potential maximum values
            deq = deque()
            result = []
            
            for i, num in enumerate(nums):
                # Remove indices outside current window
                while deq and deq[0] < i - k + 1:
                    deq.popleft()
                
                # Remove all smaller elements from back
                # They can't be maximum in any future window
                while deq and nums[deq[-1]] < num:
                    deq.pop()
                
                deq.append(i)
                
                # Start collecting results once first window is complete
                if i >= k - 1:
                    result.append(nums[deq[0]])
                    
            return result
    
    class RecentCounter:
        """
        Track requests in last 3000 milliseconds.
        Perfect example of using deque for time window tracking.
        
        Time complexity: O(1) amortized for each ping
        Space complexity: O(window_size)
        """
        def __init__(self):
            self.requests = deque()
            
        def ping(self, t: int) -> int:
            # Add new request
            self.requests.append(t)
            
            # Remove requests older than 3000ms
            while self.requests and self.requests[0] < t - 3000:
                self.requests.popleft()
            
            return len(self.requests)
    
    class OrderedHistory:
        """
        Maintain ordered history with undo/redo capability.
        Shows how deques can implement forward/backward navigation.
        
        Time complexity: O(1) for each operation
        Space complexity: O(n) where n is number of actions
        """
        def __init__(self):
            self.history = deque()  # Main history
            self.future = deque()   # For redo operations
            self.current = None
            
        def addAction(self, action: str) -> None:
            # Clear future actions when new action added
            self.future.clear()
            if self.current:
                self.history.append(self.current)
            self.current = action
            
        def undo(self) -> str:
            if not self.history:
                return self.current or ""
                
            self.future.append(self.current)
            self.current = self.history.pop()
            return self.current
            
        def redo(self) -> str:
            if not self.future:
                return self.current or ""
                
            self.history.append(self.current)
            self.current = self.future.pop()
            return self.current`,

  exercises: [
    {
      prompt:
        'Implement a function that finds the minimum value in each sliding window of size k using a deque.',
      initialCode: `def minSlidingWindow(nums: List[int], k: int) -> List[int]:
    # Implement your solution here
    pass`,
      solution: `def minSlidingWindow(nums: List[int], k: int) -> List[int]:
    if not nums or k <= 0:
        return []
        
    deq = deque()  # Store indices of potential minimums
    result = []
    
    for i, num in enumerate(nums):
        # Remove indices outside current window
        while deq and deq[0] < i - k + 1:
            deq.popleft()
        
        # Remove all larger elements from back
        while deq and nums[deq[-1]] > num:
            deq.pop()
        
        deq.append(i)
        
        # Add to result once first window is complete
        if i >= k - 1:
            result.append(nums[deq[0]])
            
    return result`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Create a data structure that supports efficient insertion, deletion, and finding the median.',
      initialCode: `class MedianFinder:
    def __init__(self):
        # Initialize your data structure here
        pass
        
    def addNum(self, num: int) -> None:
        # Add a number to the data structure
        pass
        
    def findMedian(self) -> float:
        # Return the median of current numbers
        pass`,
      solution: `class MedianFinder:
    def __init__(self):
        self.small = deque()  # Store smaller half in sorted order
        self.large = deque()  # Store larger half in sorted order
        
    def addNum(self, num: int) -> None:
        # Find insertion position in small deque
        while self.small and self.small[-1] > num:
            self.large.appendleft(self.small.pop())
        self.small.append(num)
        
        # Balance deques
        while len(self.small) > len(self.large) + 1:
            self.large.appendleft(self.small.pop())
        while len(self.large) > len(self.small):
            self.small.append(self.large.popleft())
        
    def findMedian(self) -> float:
        if len(self.small) > len(self.large):
            return float(self.small[-1])
        return (self.small[-1] + self.large[0]) / 2.0`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question:
        'Why would you choose a deque over a regular array or queue for sliding window problems?',
      options: [
        'Deques automatically sort elements',
        'Deques provide O(1) operations at both ends',
        'Deques use less memory',
        'Deques are thread-safe',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Deques do not automatically maintain any sorting.',
        'Correct! The ability to efficiently add and remove from both ends is the key advantage.',
        'Incorrect. Memory usage is comparable to arrays.',
        'Incorrect. Thread safety depends on the implementation.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'What is the time complexity of maintaining a moving average using a deque?',
      options: [
        'O(n) per update',
        'O(k) per update',
        'O(1) per update',
        'O(log n) per update',
      ],
      correctAnswer: 2,
      explanations: [
        "Incorrect. We don't need to process all elements for each update.",
        "Incorrect. Window size doesn't affect the time complexity of operations.",
        'Correct! Adding and removing elements from either end takes constant time.',
        'Incorrect. No logarithmic operations are needed.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const monotonicDequeData = {
  title: 'Monotonic Deque Problems and Solutions',
  content: `<p>
Imagine you're tracking stock prices, but you're only interested in knowing when prices are consistently rising or falling. A monotonic deque is like keeping a filtered history that only maintains this trend information. This powerful data structure helps us solve a variety of problems that involve maintaining ordered sequences efficiently.
</p>

<h3><u>Understanding Monotonic Deques</u></h3>
<p>
A monotonic deque is a special type of deque (double-ended queue) that maintains elements in a strictly increasing or decreasing order. Think of it like a bouncer at a club who only lets people in if they maintain a certain height order - either always taller or always shorter than the previous person in line.
</p>

<h4><b>Core Properties</b></h4>
<p>
What makes a deque monotonic is that we maintain these special properties:
</p>
<li>All elements are either strictly increasing or strictly decreasing</li>
<li>When adding a new element, we remove elements that would violate this property</li>
<li>The deque contains indices or values that could be useful for future calculations</li>

<h3><u>Common Applications</u></h3>

<h4><b>1. Jump Game Problems</b></h4>
<p>
Jump game problems often involve finding optimal paths through an array where each element represents the maximum distance you can jump from that position. A monotonic deque helps by:
</p>
<li>Maintaining a sequence of potentially useful jump positions</li>
<li>Efficiently eliminating positions that can't be part of the optimal solution</li>
<li>Tracking the best options at each step</li>

<h4><b>2. Remove Duplicates Problems</b></h4>
<p>
These problems involve removing elements while maintaining relative order and optimizing certain criteria. The monotonic deque helps by:
</p>
<li>Maintaining a sequence of characters that must be in the result</li>
<li>Efficiently handling duplicate removal decisions</li>
<li>Preserving the smallest possible lexicographical order</li>

<h3><u>Key Implementation Patterns</u></h3>

<h4><b>1. Monotonic Increasing</b></h4>
<p>
Used when we want to maintain a sequence where each element is greater than the previous:
</p>
<li>Remove elements from back while they're ≥ current element</li>
<li>Add current element to back</li>
<li>Front always contains smallest eligible element</li>

<h4><b>2. Monotonic Decreasing</b></h4>
<p>
Used when we want to maintain a sequence where each element is smaller than the previous:
</p>
<li>Remove elements from back while they're ≤ current element</li>
<li>Add current element to back</li>
<li>Front always contains largest eligible element</li>`,

  codeExample: `from collections import deque
from typing import List

class MonotonicDequeProblems:
    def jumpGame(self, nums: List[int]) -> bool:
        """
        Determine if you can reach the last index in the array.
        Each element represents maximum jump length from that position.
        
        Uses monotonic deque to track potential jump positions.
        Time: O(n), Space: O(n)
        """
        if not nums:
            return False
            
        n = len(nums)
        # Monotonic deque stores positions we might want to jump from
        # Maintains positions in order of increasing indices
        dq = deque([0])  # Start from index 0
        max_reach = nums[0]  # Maximum index we can reach so far
        
        for i in range(1, n):
            # If we can't reach current position, return False
            if max_reach < i:
                return False
            
            # Update maximum reachable position
            while dq and i <= max_reach:
                pos = dq[-1]
                max_reach = max(max_reach, pos + nums[pos])
                if max_reach >= n - 1:
                    return True
                if i + nums[i] > pos + nums[pos]:
                    dq.pop()
                else:
                    break
            
            dq.append(i)
        
        return max_reach >= n - 1
    
    def removeDuplicateLetters(self, s: str) -> str:
        """
        Remove duplicate letters to form smallest possible result lexicographically.
        Must maintain relative order of characters.
        
        Uses monotonic increasing deque to build result.
        Time: O(n), Space: O(k) where k is alphabet size
        """
        last_pos = {c: i for i, c in enumerate(s)}  # Last position of each char
        seen = set()  # Characters currently in our result
        dq = deque()  # Monotonic increasing deque
        
        for i, c in enumerate(s):
            # Skip if we've already used this character
            if c in seen:
                continue
            
            # Remove larger characters if we can add them later
            while dq and c < dq[-1] and i < last_pos[dq[-1]]:
                seen.remove(dq.pop())
            
            # Add current character
            dq.append(c)
            seen.add(c)
        
        return ''.join(dq)
    
    def maxSlidingWindowMonotonic(self, nums: List[int], k: int) -> List[int]:
        """
        Classic sliding window maximum problem solved with monotonic deque.
        Maintains decreasing sequence of potential maximum values.
        
        Time: O(n), Space: O(k)
        """
        if not nums or k <= 0:
            return []
            
        # Monotonic decreasing deque storing indices
        dq = deque()
        result = []
        
        for i, num in enumerate(nums):
            # Remove elements outside current window
            while dq and dq[0] < i - k + 1:
                dq.popleft()
            
            # Remove smaller elements that can't be maximum
            while dq and nums[dq[-1]] < num:
                dq.pop()
            
            dq.append(i)
            
            # Add maximum of current window to result
            if i >= k - 1:
                result.append(nums[dq[0]])
        
        return result
    
    def nextGreaterElements(self, nums: List[int]) -> List[int]:
        """
        Find next greater element for each element in circular array.
        Uses monotonic decreasing deque to track potential next greater elements.
        
        Time: O(n), Space: O(n)
        """
        n = len(nums)
        result = [-1] * n
        # Monotonic decreasing deque stores indices
        dq = deque()
        
        # Process array twice to handle circular nature
        for i in range(n * 2):
            curr = nums[i % n]
            
            # Pop elements smaller than current
            while dq and nums[dq[-1]] < curr:
                idx = dq.pop()
                result[idx] = curr
            
            # Only add index if it's from first pass
            if i < n:
                dq.append(i)
        
        return result`,

  exercises: [
    {
      prompt:
        'Implement a function to find the minimum jumps needed to reach the last index using a monotonic deque.',
      initialCode: `def minJumps(nums: List[int]) -> int:
    # Implement your solution here
    pass`,
      solution: `def minJumps(nums: List[int]) -> int:
    if not nums or len(nums) == 1:
        return 0
        
    n = len(nums)
    dq = deque([(0, 0)])  # (position, jumps)
    max_reach = 0
    min_jumps = float('inf')
    
    for i in range(1, n):
        # Update reachable positions
        while dq and max_reach < i:
            pos, jumps = dq[-1]
            max_reach = max(max_reach, pos + nums[pos])
            if max_reach >= n - 1:
                min_jumps = min(min_jumps, jumps + 1)
            if i + nums[i] > pos + nums[pos]:
                dq.pop()
            else:
                break
        
        if max_reach < i:
            return -1
            
        dq.append((i, dq[0][1] + 1))
    
    return min_jumps if min_jumps != float('inf') else -1`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt:
        'Implement a function to remove k digits from a number to make it the smallest possible value.',
      initialCode: `def removeKdigits(num: str, k: int) -> str:
    # Implement your solution here
    pass`,
      solution: `def removeKdigits(num: str, k: int) -> str:
    if k >= len(num):
        return "0"
        
    # Use monotonic increasing deque to maintain smallest sequence
    dq = deque()
    remaining_removals = k
    
    for digit in num:
        # Remove larger digits while we can
        while dq and remaining_removals > 0 and digit < dq[-1]:
            dq.pop()
            remaining_removals -= 1
        dq.append(digit)
    
    # Remove any remaining digits from the end
    while remaining_removals > 0:
        dq.pop()
        remaining_removals -= 1
    
    # Build result and remove leading zeros
    result = ''.join(dq).lstrip('0')
    return result if result else "0"`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Why do we use a monotonic deque instead of a regular deque for these problems?',
      options: [
        'Monotonic deques are faster',
        'To maintain elements in a specific order that helps solve the problem',
        'To use less memory',
        'Because the input is already sorted',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. The speed advantage comes from the maintained order, not the structure itself.',
        'Correct! The monotonic property lets us efficiently track elements that could be useful for our solution.',
        'Incorrect. Memory usage is not the primary consideration.',
        'Incorrect. Monotonic deques are useful even with unsorted input.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'What is the time complexity of maintaining a monotonic deque while processing n elements?',
      options: ['O(n²)', 'O(n log n)', 'O(n)', 'O(k) where k is deque size'],
      correctAnswer: 2,
      explanations: [
        'Incorrect. We never need nested iterations over all elements.',
        'Incorrect. No sorting or logarithmic operations are needed.',
        'Correct! Each element is pushed and popped at most once, giving linear time.',
        'Incorrect. We need to process all n elements.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const circularQueueData = {
  title: 'Circular Queue Problems and Applications',
  content: `<p>
Imagine a playlist of songs that loops back to the beginning once it reaches the end. This is exactly how a circular queue works - it's like a regular queue that connects its end back to its beginning, allowing for efficient space usage and continuous operations. This structure is particularly useful when we want to reuse space in a fixed-size buffer.
</p>

<h3><u>Understanding Circular Queues</u></h3>
<p>
A circular queue is essentially a fixed-size array that wraps around to the beginning when it reaches the end. Think of it like a circular track where runners can keep going around indefinitely. This circular nature provides several key advantages:
</p>

<h4><b>Key Concepts</b></h4>
<p>
To understand circular queues deeply, let's explore their fundamental properties:
</p>
<li><strong>Fixed Size:</strong> The queue has a predetermined capacity that doesn't change</li>
<li><strong>Wraparound:</strong> When we reach the end, we continue from the beginning if there's space</li>
<li><strong>Space Reuse:</strong> We can reuse spaces that were previously dequeued</li>
<li><strong>Position Tracking:</strong> We maintain front and rear pointers that wrap around the array</li>

<h4><b>Core Operations</b></h4>
<p>
A circular queue supports four main operations, each with its own considerations:
</p>
<li><strong>Enqueue:</strong> Add an element if there's space, handling wraparound at the end</li>
<li><strong>Dequeue:</strong> Remove and return the front element, moving front pointer forward</li>
<li><strong>Front/Peek:</strong> View the front element without removing it</li>
<li><strong>Size/Empty/Full:</strong> Check the current state of the queue</li>

<h3><u>Common Applications</u></h3>

<h4><b>1. Moving Average from Data Stream</b></h4>
<p>
Perfect for calculating averages over a fixed-size window of recent data:
</p>
<li>Monitoring system metrics (CPU usage, network traffic)</li>
<li>Financial market indicators (stock price moving averages)</li>
<li>Sensor data processing (temperature, humidity readings)</li>

<h4><b>2. Clock Buffer</b></h4>
<p>
Ideal for cyclical buffering scenarios:
</p>
<li>Event logging systems</li>
<li>Audio/video streaming buffers</li>
<li>Network packet buffering</li>

<h3><u>Implementation Considerations</u></h3>
<p>
When implementing a circular queue, we need to carefully handle:
</p>
<li><strong>Full vs Empty States:</strong> Distinguish between empty and full conditions</li>
<li><strong>Index Wraparound:</strong> Use modulo arithmetic to handle circular behavior</li>
<li><strong>Boundary Conditions:</strong> Manage edge cases when front or rear reach array bounds</li>`,

  codeExample: `class CircularQueue:
    """
    A fixed-size circular queue implementation that efficiently 
    manages space by reusing dequeued positions.
    
    Think of it as a circular track where we can keep adding elements
    by going around, as long as we've removed some elements to make space.
    """
    def __init__(self, capacity: int):
        """
        Initialize circular queue with fixed capacity.
        
        Time: O(1)
        Space: O(capacity)
        """
        self.capacity = capacity
        self.queue = [None] * capacity
        self.front = 0  # Index of front element
        self.rear = -1  # Index of last element
        self.size = 0   # Current number of elements
    
    def enqueue(self, value: int) -> bool:
        """
        Add element to the rear of queue if space available.
        Returns True if successful, False if queue is full.
        
        Time: O(1)
        """
        if self.isFull():
            return False
            
        # Move rear pointer and wrap around if necessary
        self.rear = (self.rear + 1) % self.capacity
        self.queue[self.rear] = value
        self.size += 1
        return True
    
    def dequeue(self) -> int:
        """
        Remove and return front element.
        Returns -1 if queue is empty.
        
        Time: O(1)
        """
        if self.isEmpty():
            return -1
            
        value = self.queue[self.front]
        # Clear reference and move front pointer
        self.queue[self.front] = None
        self.front = (self.front + 1) % self.capacity
        self.size -= 1
        return value
    
    def Front(self) -> int:
        """
        Return front element without removing it.
        Returns -1 if queue is empty.
        
        Time: O(1)
        """
        return -1 if self.isEmpty() else self.queue[self.front]
    
    def Rear(self) -> int:
        """
        Return last element without removing it.
        Returns -1 if queue is empty.
        
        Time: O(1)
        """
        return -1 if self.isEmpty() else self.queue[self.rear]
    
    def isEmpty(self) -> bool:
        """Check if queue has no elements."""
        return self.size == 0
    
    def isFull(self) -> bool:
        """Check if queue is at capacity."""
        return self.size == self.capacity


class MovingAverage:
    """
    Calculate moving average from a data stream using a circular queue.
    Perfect for monitoring systems where we need average over last n readings.
    """
    def __init__(self, size: int):
        """
        Initialize moving average calculator with window size.
        
        Time: O(1)
        Space: O(size)
        """
        self.size = size
        self.queue = [0] * size
        self.front = 0
        self.window_sum = 0
        self.count = 0
    
    def next(self, val: float) -> float:
        """
        Add new value and return new moving average.
        
        Time: O(1)
        """
        # Calculate circular queue index for new value
        index = self.count % self.size
        
        # If window is full, subtract the value going out
        if self.count >= self.size:
            self.window_sum -= self.queue[index]
        
        # Add new value
        self.queue[index] = val
        self.window_sum += val
        self.count += 1
        
        # Calculate average based on window size or count
        window_size = min(self.size, self.count)
        return self.window_sum / window_size


def streamMedian(nums):
    """
    Use two circular queues to maintain running median of a stream.
    Shows how circular queues can be combined for complex problems.
    """
    def initQueues(capacity):
        lower = CircularQueue(capacity)  # Stores lower half
        upper = CircularQueue(capacity)  # Stores upper half
        return lower, upper
    
    if not nums:
        return []
        
    lower, upper = initQueues(len(nums))
    medians = []
    
    for num in nums:
        # Add to appropriate queue
        if not lower.size or num <= lower.Rear():
            lower.enqueue(num)
        else:
            upper.enqueue(num)
            
        # Balance queues
        while abs(lower.size - upper.size) > 1:
            if lower.size > upper.size:
                upper.enqueue(lower.dequeue())
            else:
                lower.enqueue(upper.dequeue())
        
        # Calculate median
        if lower.size > upper.size:
            medians.append(lower.Rear())
        elif lower.size < upper.size:
            medians.append(upper.Front())
        else:
            medians.append((lower.Rear() + upper.Front()) / 2)
    
    return medians`,

  exercises: [
    {
      prompt:
        'Implement a circular queue that stores the last N timestamps and can calculate the number of events in the last T seconds.',
      initialCode: `class RecentCounter:
    def __init__(self):
        # Initialize your data structure here
        pass
        
    def ping(self, timestamp: int) -> int:
        # Return number of events in last 3000 milliseconds
        pass`,
      solution: `class RecentCounter:
    def __init__(self):
        self.capacity = 10000  # Reasonable size for timestamps
        self.queue = [0] * self.capacity
        self.front = 0
        self.size = 0
        
    def ping(self, timestamp: int) -> int:
        # Add new timestamp
        rear = (self.front + self.size) % self.capacity
        self.queue[rear] = timestamp
        self.size += 1
        
        # Remove timestamps older than 3000ms
        while self.size > 0 and timestamp - self.queue[self.front] > 3000:
            self.front = (self.front + 1) % self.capacity
            self.size -= 1
        
        return self.size`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Implement a circular buffer that can efficiently maintain a sliding window maximum.',
      initialCode: `class SlidingWindowMaximum:
    def __init__(self, size: int):
        # Initialize your data structure here
        pass
        
    def add(self, val: int) -> int:
        # Add value and return current window maximum
        pass`,
      solution: `class SlidingWindowMaximum:
    def __init__(self, size: int):
        self.size = size
        self.queue = [0] * size
        self.deque = []  # Store indices of potential maximums
        self.count = 0
        
    def add(self, val: int) -> int:
        # Get current position in circular buffer
        index = self.count % self.size
        
        # Remove elements outside window and smaller elements
        while self.deque and self.count - self.deque[0] >= self.size:
            self.deque.pop(0)
        while self.deque and self.queue[self.deque[-1] % self.size] <= val:
            self.deque.pop()
            
        # Add new element
        self.queue[index] = val
        self.deque.append(self.count)
        self.count += 1
        
        return self.queue[self.deque[0] % self.size]`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question:
        'Why is modulo arithmetic essential for implementing a circular queue?',
      options: [
        'To make operations faster',
        'To wrap around array indices when reaching the end',
        'To calculate the average of elements',
        'To sort elements efficiently',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Modulo operations are not primarily for performance.',
        'Correct! Modulo helps us wrap around to the start of the array when we reach the end, creating the circular behavior.',
        'Incorrect. Average calculation is not related to modulo usage.',
        'Incorrect. Circular queues are not used for sorting.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'What is the key advantage of a circular queue over a regular queue?',
      options: [
        'It can store more elements',
        'It has faster operations',
        'It reuses space efficiently without shifting elements',
        'It automatically sorts elements',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Both types can store the same number of elements.',
        'Incorrect. Basic operations have the same time complexity.',
        'Correct! Space reuse without shifting elements is the main advantage.',
        'Incorrect. Neither type of queue sorts elements.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const queueReconstructionData = {
  title: 'Queue Reconstruction Problems',
  content: `<p>
Imagine you're trying to reconstruct a line of people from a photograph where you only know each person's height and how many people taller than them were in front of them. This is the essence of queue reconstruction problems - taking partial information about ordering and reconstructing the original sequence in a way that satisfies all the given conditions.
</p>

<h3><u>Understanding Queue Reconstruction</u></h3>
<p>
At its heart, queue reconstruction is about finding the correct way to arrange elements when we have constraints about their relative positions. Think of it like solving a puzzle where each piece gives you information about where other pieces should go.
</p>

<h4><b>Core Problem Types</b></h4>
<p>
Queue reconstruction problems typically come in two main varieties:
</p>

<h4><b>1. Height-based Reconstruction</b></h4>
<p>
In this type of problem, we're given pairs of numbers (height, count) where:
</p>
<li>height represents a person's height or an element's value</li>
<li>count represents how many taller elements should be in front</li>
<li>We need to reconstruct the original queue satisfying these conditions</li>

<p>
For example, given the pairs [(7,0), (4,4), (7,1), (5,0), (6,1), (5,2)], each pair (h,k) indicates a person of height h who had k people taller than them in front. The challenge is to reconstruct the original line.
</p>

<h4><b>2. Task Scheduler Problems</b></h4>
<p>
These problems involve arranging tasks with constraints about their execution order:
</p>
<li>Tasks may need cooling periods between executions</li>
<li>Some tasks might have higher priority than others</li>
<li>We need to minimize total time while respecting constraints</li>

<h3><u>Key Solution Strategies</u></h3>

<h4><b>1. Greedy Approach</b></h4>
<p>
For height-based reconstruction, we often use a greedy strategy:
</p>
<li>Sort elements by a primary criterion (usually height)</li>
<li>Insert each element at the position determined by its count</li>
<li>Use the fact that inserting taller people first makes counting easier</li>

<h4><b>2. Priority Queue Approach</b></h4>
<p>
For task scheduler problems, a priority queue helps manage task selection:
</p>
<li>Track task frequencies and cooling periods</li>
<li>Select tasks that are available and have highest frequency</li>
<li>Handle idle time when no tasks are available</li>`,

  codeExample: `from typing import List
import heapq
from collections import Counter, deque

class QueueReconstructionSolutions:
    def reconstructQueue(self, people: List[List[int]]) -> List[List[int]]:
        """
        Reconstruct queue from [height, number of taller people in front] pairs.
        Uses greedy approach by placing tallest people first.
        
        Time: O(n²) - insertion takes O(n)
        Space: O(n) for result array
        
        Example:
        Input: [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]
        Output: [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
        """
        # Sort by height (descending) and count (ascending)
        people.sort(key=lambda x: (-x[0], x[1]))
        
        result = []
        for height, count in people:
            # Insert person at position determined by count
            # Count is valid because we placed all taller people first
            result.insert(count, [height, count])
        
        return result
    
    def taskScheduler(self, tasks: List[str], n: int) -> int:
        """
        Schedule tasks with cooling period n between same tasks.
        Uses priority queue to select highest frequency tasks.
        
        Time: O(N log 26) where N is total number of tasks
        Space: O(1) since we have at most 26 tasks
        
        Example:
        Input: tasks = ["A","A","A","B","B","B"], n = 2
        Output: 8 (A -> B -> idle -> A -> B -> idle -> A -> B)
        """
        # Count task frequencies
        frequencies = Counter(tasks)
        
        # Create max heap of frequencies (negative for max heap)
        heap = [-freq for freq in frequencies.values()]
        heapq.heapify(heap)
        
        total_time = 0
        cycle = n + 1  # Length of cooling cycle
        
        while heap:
            # Try to fill a cooling cycle
            temp = []  # Store tasks that need to be added back
            cycle_count = min(cycle, len(heap))
            
            for _ in range(cycle_count):
                freq = -heapq.heappop(heap)
                if freq > 1:
                    temp.append(-(freq - 1))
            
            # Add tasks back to heap if they have remaining frequency
            for freq in temp:
                heapq.heappush(heap, freq)
            
            # Add time for this cycle
            total_time += cycle if heap else cycle_count
        
        return total_time
    
    def rearrangeString(self, s: str, k: int) -> str:
        """
        Rearrange string so same characters are at least k positions apart.
        Combines queue reconstruction with task scheduling concepts.
        
        Time: O(n log 26) where n is string length
        Space: O(1) for character counts
        
        Example:
        Input: s = "aabbcc", k = 3
        Output: "abcabc" (same characters are 3 positions apart)
        """
        if k <= 1:
            return s
            
        # Count character frequencies
        counts = Counter(s)
        
        # Max heap of (frequency, character)
        heap = [(-freq, char) for char, freq in counts.items()]
        heapq.heapify(heap)
        
        # Queue to handle cooling period
        queue = deque()
        result = []
        
        while heap or queue:
            # Add character back to heap if cooling period is over
            if queue and len(result) - queue[0][1] >= k:
                freq, _, char = queue.popleft()
                heapq.heappush(heap, (freq, char))
            
            if not heap:
                return ""  # Impossible to satisfy constraints
            
            # Use most frequent available character
            freq, char = heapq.heappop(heap)
            result.append(char)
            
            # Add to cooling queue if more instances remain
            if freq + 1 < 0:
                queue.append((freq + 1, len(result) - 1, char))
        
        return ''.join(result)`,

  exercises: [
    {
      prompt:
        'Implement a function to reconstruct a queue based on height and counts, where counts represent the number of shorter people in front.',
      initialCode: `def reconstructQueueByShortCount(people: List[List[int]]) -> List[List[int]]:
    # Implement your solution here
    pass`,
      solution: `def reconstructQueueByShortCount(people: List[List[int]]) -> List[List[int]]:
    # Sort by height ascending (shorter first) and count descending
    people.sort(key=lambda x: (x[0], -x[1]))
    
    n = len(people)
    result = [None] * n
    
    # Place each person from shortest to tallest
    for height, shorter_count in people:
        # Find position with correct number of empty spots
        empty_spots = shorter_count
        pos = 0
        
        while empty_spots >= 0:
            if result[pos] is None:
                empty_spots -= 1
            pos += 1
            
        # Place person at the correct position
        result[pos - 1] = [height, shorter_count]
    
    return result`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt:
        'Implement a task scheduler that minimizes the total time needed to execute tasks with dependencies.',
      initialCode: `def scheduleTasks(tasks: List[str], dependencies: List[List[str]], n: int) -> int:
    # Implement your solution here
    pass`,
      solution: `def scheduleTasks(tasks: List[str], dependencies: List[List[str]], n: int) -> int:
    # Build dependency graph and in-degree count
    graph = {t: [] for t in tasks}
    in_degree = {t: 0 for t in tasks}
    
    for pre, task in dependencies:
        graph[pre].append(task)
        in_degree[task] += 1
    
    # Initialize priority queue with available tasks
    available = []
    for task in tasks:
        if in_degree[task] == 0:
            heapq.heappush(available, task)
    
    cooling = {}  # task -> time when available
    current_time = 0
    result = []
    
    while available or cooling:
        # Move cooled-down tasks back to available
        while cooling and min(cooling.values()) <= current_time:
            task = min(cooling.items(), key=lambda x: x[1])[0]
            if cooling[task] <= current_time:
                heapq.heappush(available, task)
                del cooling[task]
        
        if available:
            task = heapq.heappop(available)
            result.append(task)
            
            # Process dependencies
            for next_task in graph[task]:
                in_degree[next_task] -= 1
                if in_degree[next_task] == 0:
                    heapq.heappush(available, next_task)
            
            # Add cooling period
            cooling[task] = current_time + n
        else:
            # Must wait for next available task
            current_time = min(cooling.values())
            continue
            
        current_time += 1
    
    return len(result)`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question:
        'Why do we sort by height in descending order for the queue reconstruction problem?',
      options: [
        'To make the algorithm faster',
        'Because taller people are more important',
        'To ensure count values remain valid during insertion',
        'To use less memory',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. The time complexity remains O(n²) regardless of sort order.',
        'Incorrect. Height order is chosen for algorithmic correctness, not importance.',
        'Correct! By placing taller people first, we ensure the count of taller people stays correct for each insertion.',
        'Incorrect. Memory usage is not affected by sort order.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'What is the key benefit of using a priority queue in the task scheduler problem?',
      options: [
        'It automatically handles task dependencies',
        'It ensures tasks with highest frequency are prioritized',
        'It reduces the time complexity to O(1)',
        'It eliminates the need for a cooling period',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Dependencies require additional graph-based logic.',
        'Correct! The priority queue helps us always choose the most frequent available task, minimizing idle time.',
        'Incorrect. Operations still require log n time.',
        'Incorrect. Cooling periods must still be explicitly handled.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const multiSourceBFSData = {
  title: 'Multi-source BFS Problems and Solutions',
  content: `<p>
Imagine you're tracking how a forest fire spreads from multiple starting points, or how multiple water sources might flood a terrain. This is exactly what multi-source BFS helps us model - situations where we need to track how something spreads from multiple starting points simultaneously.
</p>

<h3><u>Understanding Multi-source BFS</u></h3>
<p>
While regular BFS starts from a single point and expands outward like ripples from a stone dropped in water, multi-source BFS begins from multiple points simultaneously, like dropping several stones at once. The ripples spread out and interact, creating complex patterns of influence.
</p>

<p>
Let's visualize this with a simple example of distance calculation in a matrix:
</p>
<pre>
Initial matrix with sources (0):       Final distance matrix:
1  1  0  1  1                         2  1  0  1  2
1  1  1  1  1                         1  1  1  1  1
1  1  1  1  1       ->               2  2  2  2  2
1  1  1  1  1                         3  3  3  3  3
0  1  1  1  1                         0  1  2  3  4
</pre>

<h3><u>Key Concepts</u></h3>

<h4><b>1. Distance Tracking</b></h4>
<p>
In multi-source BFS, we need to carefully track:
</p>
<li>Distance from nearest source for each cell</li>
<li>Multiple wave fronts expanding simultaneously</li>
<li>Interactions between different expansion fronts</li>

<h4><b>2. Queue Management</b></h4>
<p>
The queue in multi-source BFS requires special handling:
</p>
<li>Initialize with all source points</li>
<li>Process level by level to maintain distance accuracy</li>
<li>Handle overlapping expansion areas efficiently</li>

<h3><u>Common Problem Types</u></h3>

<h4><b>1. Distance Matrix Problems</b></h4>
<p>
Problems like 01 Matrix where we need to:
</p>
<li>Find distance to nearest target from each cell</li>
<li>Handle multiple target cells efficiently</li>
<li>Update distances as we explore the matrix</li>

<h4><b>2. State Propagation Problems</b></h4>
<p>
Problems like Rotting Oranges where we need to:
</p>
<li>Track how a state spreads from multiple sources</li>
<li>Calculate time for complete propagation</li>
<li>Handle cells that can't be reached</li>

<h4><b>3. Barrier Problems</b></h4>
<p>
Problems like Walls and Gates where we need to:
</p>
<li>Account for impassable barriers</li>
<li>Find optimal paths around obstacles</li>
<li>Handle unreachable areas correctly</li>`,

  codeExample: `from collections import deque
from typing import List

class MultiSourceBFSSolutions:
    def updateMatrix(self, mat: List[List[int]]) -> List[List[int]]:
        """
        01 Matrix: Find distance of each cell to nearest 0.
        Classic multi-source BFS starting from all 0s simultaneously.
        
        Time: O(m*n) where m,n are matrix dimensions
        Space: O(m*n) for the queue and result matrix
        """
        if not mat or not mat[0]:
            return mat
            
        m, n = len(mat), len(mat[0])
        dist = [[float('inf')] * n for _ in range(m)]
        queue = deque()
        
        # Initialize queue with all 0s and mark their distances
        for i in range(m):
            for j in range(n):
                if mat[i][j] == 0:
                    dist[i][j] = 0
                    queue.append((i, j))
        
        directions = [(1,0), (-1,0), (0,1), (0,-1)]
        
        # Process all sources simultaneously
        while queue:
            curr_i, curr_j = queue.popleft()
            
            # Explore all four directions
            for di, dj in directions:
                ni, nj = curr_i + di, curr_j + dj
                
                # If valid cell and we found a shorter path
                if (0 <= ni < m and 0 <= nj < n and 
                    dist[ni][nj] > dist[curr_i][curr_j] + 1):
                    dist[ni][nj] = dist[curr_i][curr_j] + 1
                    queue.append((ni, nj))
        
        return dist
    
    def wallsAndGates(self, rooms: List[List[int]]) -> None:
        """
        Walls and Gates: Fill matrix with distances to nearest gate.
        Multi-source BFS starting from all gates, handling walls as barriers.
        
        Time: O(m*n)
        Space: O(m*n)
        """
        if not rooms or not rooms[0]:
            return
            
        m, n = len(rooms), len(rooms[0])
        queue = deque()
        INF = 2147483647
        
        # Initialize queue with all gates
        for i in range(m):
            for j in range(n):
                if rooms[i][j] == 0:  # Gate
                    queue.append((i, j))
        
        directions = [(1,0), (-1,0), (0,1), (0,-1)]
        
        # Process all gates simultaneously
        while queue:
            curr_i, curr_j = queue.popleft()
            
            for di, dj in directions:
                ni, nj = curr_i + di, curr_j + dj
                
                # If valid room and we found a shorter path
                if (0 <= ni < m and 0 <= nj < n and 
                    rooms[ni][nj] == INF):
                    rooms[ni][nj] = rooms[curr_i][curr_j] + 1
                    queue.append((ni, nj))
    
    def orangesRotting(self, grid: List[List[int]]) -> int:
        """
        Rotting Oranges: Find time for all oranges to rot.
        Multi-source BFS with time tracking at each level.
        
        Time: O(m*n)
        Space: O(m*n)
        """
        if not grid or not grid[0]:
            return 0
            
        m, n = len(grid), len(grid[0])
        queue = deque()
        fresh = 0
        
        # Count fresh oranges and initialize with rotten ones
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 1:  # Fresh
                    fresh += 1
                elif grid[i][j] == 2:  # Rotten
                    queue.append((i, j, 0))  # (i, j, time)
        
        if fresh == 0:  # No fresh oranges
            return 0
            
        directions = [(1,0), (-1,0), (0,1), (0,-1)]
        max_time = 0
        
        # Process rotten oranges level by level (time-wise)
        while queue and fresh > 0:
            curr_i, curr_j, time = queue.popleft()
            max_time = max(max_time, time)
            
            for di, dj in directions:
                ni, nj = curr_i + di, curr_j + dj
                
                if (0 <= ni < m and 0 <= nj < n and 
                    grid[ni][nj] == 1):  # Fresh orange
                    grid[ni][nj] = 2  # Make it rotten
                    fresh -= 1
                    queue.append((ni, nj, time + 1))
        
        return max_time if fresh == 0 else -1`,

  exercises: [
    {
      prompt:
        'Implement a function to find the shortest path that visits all points of interest in a matrix, starting from multiple possible starting points.',
      initialCode: `def shortestPathToAllPoints(grid: List[List[int]], starts: List[List[int]], points: List[List[int]]) -> int:
    # Implement your solution here
    pass`,
      solution: `def shortestPathToAllPoints(grid: List[List[int]], starts: List[List[int]], points: List[List[int]]) -> int:
    if not grid or not grid[0] or not starts or not points:
        return -1
        
    m, n = len(grid), len(grid[0])
    queue = deque()
    visited = set()
    points_set = {tuple(p) for p in points}
    
    # Initialize with all starting points
    for start in starts:
        pos = tuple(start)
        queue.append((pos[0], pos[1], 0, {pos} & points_set))
        visited.add((pos, frozenset({pos} & points_set)))
    
    directions = [(1,0), (-1,0), (0,1), (0,-1)]
    
    while queue:
        i, j, dist, found = queue.popleft()
        
        if len(found) == len(points_set):
            return dist
            
        for di, dj in directions:
            ni, nj = i + di, j + dj
            if 0 <= ni < m and 0 <= nj < n and grid[ni][nj] != 1:
                pos = (ni, nj)
                new_found = found | {pos} & points_set
                state = (pos, frozenset(new_found))
                
                if state not in visited:
                    visited.add(state)
                    queue.append((ni, nj, dist + 1, new_found))
    
    return -1`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt:
        'Implement a function to find the minimum time needed to inform all employees in a company, given multiple managers can start spreading the news simultaneously.',
      initialCode: `def timeToInform(n: int, headID: int, managers: List[int], informTime: List[int]) -> int:
    # Implement your solution here
    pass`,
      solution: `def timeToInform(n: int, headID: int, managers: List[int], informTime: List[int]) -> int:
    # Build adjacency list for subordinates
    graph = [[] for _ in range(n)]
    for i in range(n):
        if managers[i] != -1:  # Not the head
            graph[managers[i]].append(i)
    
    # Start BFS from head
    queue = deque([(headID, 0)])  # (employee, total time)
    max_time = 0
    
    while queue:
        emp, time = queue.popleft()
        max_time = max(max_time, time)
        
        # Inform all subordinates
        for sub in graph[emp]:
            queue.append((sub, time + informTime[emp]))
    
    return max_time`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Why is multi-source BFS often more efficient than running multiple single-source BFS?',
      options: [
        'It uses less memory',
        'It processes each cell only once instead of multiple times',
        'It automatically sorts the results',
        'It handles edge cases better',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Memory usage is similar for both approaches.',
        'Correct! Multi-source BFS visits each cell at most once, finding the optimal distance from any source.',
        'Incorrect. Sorting is not related to BFS efficiency.',
        'Incorrect. Edge case handling is similar for both approaches.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'What is the key consideration when initializing the queue for multi-source BFS?',
      options: [
        'Adding sources in a specific order',
        'Sorting sources by priority',
        'Including all source points with their initial states',
        'Removing duplicate sources',
      ],
      correctAnswer: 2,
      explanations: [
        "Incorrect. The order of sources doesn't affect correctness.",
        'Incorrect. Sources typically have equal priority.',
        'Correct! We need to start with all sources to ensure simultaneous expansion.',
        'Incorrect. Duplicate sources are typically not an issue.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const bidirectionalBFSData = {
  title: 'Bidirectional BFS Concepts and Applications',
  content: `<p>
Imagine you're trying to find your friend in a large maze, and you both decide to search for each other simultaneously. You'll likely meet somewhere in the middle, covering the distance much faster than if only one person was searching. This is exactly how bidirectional BFS works - it searches from both the start and end points simultaneously, dramatically speeding up the search process.
</p>

<h3><u>Understanding Bidirectional BFS</u></h3>
<p>
Traditional BFS is like a ripple spreading out from a single point in a pond. Bidirectional BFS, on the other hand, is like two ripples spreading from different points, where we're looking for the moment and place where these ripples meet. This approach can be dramatically faster because the search spaces grow as circles, and we only need to wait until they touch rather than having one circle cover the entire space.
</p>

<h4><b>Why is it Faster?</b></h4>
<p>
Let's understand why this approach can be so much more efficient with a simple calculation. If we need to search to a distance of d:
</p>
<li>Traditional BFS explores roughly b^d nodes (where b is branching factor)</li>
<li>Bidirectional BFS explores about 2 * b^(d/2) nodes</li>
<li>Example: For b=2, d=8: Regular BFS visits 256 nodes, Bidirectional visits 32!</li>

<h4><b>Key Components</b></h4>
<p>
A successful bidirectional BFS implementation needs:
</p>
<li><strong>Two Queues:</strong> One for forward search from start, one for backward search from end</li>
<li><strong>Two Visited Sets:</strong> Track visited states from both directions</li>
<li><strong>Intersection Detection:</strong> Efficiently identify when searches meet</li>
<li><strong>Path Reconstruction:</strong> Combine the two partial paths when searches meet</li>

<h3><u>Common Applications</u></h3>

<h4><b>1. Word Ladder Problems</b></h4>
<p>
Perfect for finding shortest transformation sequences between words:
</p>
<li>Each word is a state in the search space</li>
<li>Valid transformations are edges between states</li>
<li>We search from both start and end words simultaneously</li>

<h4><b>2. Genetic Mutation Problems</b></h4>
<p>
Similar to word ladder but with genetic sequences:
</p>
<li>States are genetic sequences</li>
<li>Edges are valid single-character mutations</li>
<li>Need to find shortest path of valid mutations</li>

<h3><u>Implementation Considerations</u></h3>
<p>
When implementing bidirectional BFS, we must carefully handle:
</p>
<li>State representation that works efficiently in both directions</li>
<li>Efficient intersection checking between forward and backward searches</li>
<li>Path reconstruction when the searches meet</li>
<li>Edge cases where no valid path exists</li>`,

  codeExample: `from collections import defaultdict, deque
from typing import List, Set, Dict

class BidirectionalBFSSolutions:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        """
        Word Ladder problem using bidirectional BFS.
        Returns shortest transformation sequence length.
        
        Time: O(N * 26 * L) where N is dictionary size, L is word length
        Space: O(N) for the queue and visited sets
        
        Example: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
        Result: 5 (hit -> hot -> dot -> dog -> cog)
        """
        # Early termination if endWord not in dictionary
        if endWord not in wordList:
            return 0
            
        # Create word set for O(1) lookup
        wordSet = set(wordList)
        
        # Initialize forward and backward search queues
        forward = {beginWord}  # Start word
        backward = {endWord}   # Target word
        wordSet.discard(beginWord)
        
        # Track visited words in each direction
        visited = defaultdict(set)
        visited['forward'].add(beginWord)
        visited['backward'].add(endWord)
        
        length = 2  # Start at 2 to account for begin and end words
        
        def findNeighbors(word: str, wordSet: Set[str]) -> List[str]:
            """Helper function to find valid next words"""
            neighbors = []
            for i in range(len(word)):
                # Try all possible characters at each position
                for c in 'abcdefghijklmnopqrstuvwxyz':
                    newWord = word[:i] + c + word[i+1:]
                    if newWord in wordSet:
                        neighbors.append(newWord)
            return neighbors
        
        # Continue while both searches have words to explore
        while forward and backward:
            # Always expand smaller set for efficiency
            if len(forward) > len(backward):
                forward, backward = backward, forward
                visited['forward'], visited['backward'] = visited['backward'], visited['forward']
            
            # Current level's words
            nextLevel = set()
            
            # Explore from current level
            for word in forward:
                for neighbor in findNeighbors(word, wordSet):
                    # If other direction has visited this word, we found a path
                    if neighbor in visited['backward']:
                        return length
                    
                    if neighbor not in visited['forward']:
                        nextLevel.add(neighbor)
                        visited['forward'].add(neighbor)
                        wordSet.discard(neighbor)
            
            forward = nextLevel
            length += 1
        
        return 0
    
    def minMutation(self, start: str, end: str, bank: List[str]) -> int:
        """
        Minimum Genetic Mutation using bidirectional BFS.
        Returns shortest sequence of valid mutations.
        
        Time: O(N * 4 * L) where N is bank size, L is sequence length
        Space: O(N) for queues and visited sets
        
        Example: start = "AACCGGTT", end = "AAACGGTA", bank = ["AACCGGTA","AACCGCTA","AAACGGTA"]
        Result: 2
        """
        # Early termination if end sequence not in bank
        if end not in bank:
            return -1
            
        # Valid genes for mutations
        genes = ['A', 'C', 'G', 'T']
        
        # Initialize forward and backward queues with distances
        forward = deque([(start, 0)])
        backward = deque([(end, 0)])
        
        # Track visited sequences in each direction
        fwd_visited = {start: 0}
        bwd_visited = {end: 0}
        
        def findMutations(sequence: str, bank: Set[str]) -> List[str]:
            """Helper function to find valid mutations"""
            mutations = []
            for i in range(len(sequence)):
                for gene in genes:
                    if gene != sequence[i]:
                        newSeq = sequence[:i] + gene + sequence[i+1:]
                        if newSeq in bank:
                            mutations.append(newSeq)
            return mutations
        
        # Convert bank to set for O(1) lookup
        bank = set(bank)
        
        # Process both directions until they meet
        while forward and backward:
            # Process forward direction
            seq, dist = forward.popleft()
            for mutation in findMutations(seq, bank):
                # Check if we've found a meeting point
                if mutation in bwd_visited:
                    return dist + 1 + bwd_visited[mutation]
                    
                if mutation not in fwd_visited:
                    forward.append((mutation, dist + 1))
                    fwd_visited[mutation] = dist + 1
            
            # Process backward direction
            seq, dist = backward.popleft()
            for mutation in findMutations(seq, bank):
                if mutation in fwd_visited:
                    return dist + 1 + fwd_visited[mutation]
                    
                if mutation not in bwd_visited:
                    backward.append((mutation, dist + 1))
                    bwd_visited[mutation] = dist + 1
        
        return -1`,

  exercises: [
    {
      prompt:
        'Implement bidirectional BFS to find the shortest path between two nodes in an undirected graph.',
      initialCode: `def shortestPath(graph: Dict[int, List[int]], start: int, end: int) -> int:
    # Implement your solution here
    pass`,
      solution: `def shortestPath(graph: Dict[int, List[int]], start: int, end: int) -> int:
    if start == end:
        return 0
        
    # Initialize forward and backward searches
    forward = {start}
    backward = {end}
    
    # Track visited nodes and distances
    fwd_visited = {start: 0}
    bwd_visited = {end: 0}
    
    distance = 0
    
    while forward and backward:
        # Expand smaller frontier
        if len(forward) > len(backward):
            forward, backward = backward, forward
            fwd_visited, bwd_visited = bwd_visited, fwd_visited
        
        next_level = set()
        distance += 1
        
        for node in forward:
            for neighbor in graph[node]:
                # Check for intersection with backward search
                if neighbor in bwd_visited:
                    return distance + bwd_visited[neighbor]
                
                if neighbor not in fwd_visited:
                    next_level.add(neighbor)
                    fwd_visited[neighbor] = distance
        
        forward = next_level
    
    return -1  # No path exists`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Implement bidirectional BFS to find all shortest transformation sequences in a word ladder problem.',
      initialCode: `def findAllLadders(beginWord: str, endWord: str, wordList: List[str]) -> List[List[str]]:
    # Implement your solution here
    pass`,
      solution: `def findAllLadders(beginWord: str, endWord: str, wordList: List[str]) -> List[List[str]]:
    wordSet = set(wordList)
    if endWord not in wordSet:
        return []
        
    # Build graph of word transformations
    forward_graph = defaultdict(list)
    backward_graph = defaultdict(list)
    
    def findNeighbors(word: str, wordSet: Set[str]) -> List[str]:
        neighbors = []
        for i in range(len(word)):
            for c in 'abcdefghijklmnopqrstuvwxyz':
                newWord = word[:i] + c + word[i+1:]
                if newWord in wordSet:
                    neighbors.append(newWord)
        return neighbors
    
    # BFS to build graphs from both directions
    forward_queue = deque([beginWord])
    backward_queue = deque([endWord])
    forward_visited = {beginWord: 0}
    backward_visited = {endWord: 0}
    
    def bfs(queue: deque, visited: Dict[str, int], graph: Dict[str, List[str]], 
           other_visited: Dict[str, int], is_forward: bool) -> bool:
        word = queue.popleft()
        level = visited[word]
        
        for neighbor in findNeighbors(word, wordSet):
            if neighbor in other_visited:
                if is_forward:
                    graph[word].append(neighbor)
                else:
                    graph[neighbor].append(word)
                return True
                
            if neighbor not in visited:
                visited[neighbor] = level + 1
                queue.append(neighbor)
                if is_forward:
                    graph[word].append(neighbor)
                else:
                    graph[neighbor].append(word)
        return False
    
    # Build graphs until they meet
    found = False
    while forward_queue and backward_queue and not found:
        found = bfs(forward_queue, forward_visited, forward_graph, 
                   backward_visited, True)
        if not found:
            found = bfs(backward_queue, backward_visited, backward_graph,
                       forward_visited, False)
    
    # DFS to find all paths
    def dfs(word: str, path: List[str], paths: List[List[str]]) -> None:
        if word == endWord:
            paths.append(path[:])
            return
            
        for neighbor in forward_graph[word]:
            path.append(neighbor)
            dfs(neighbor, path, paths)
            path.pop()
    
    paths = []
    dfs(beginWord, [beginWord], paths)
    return paths`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question:
        'Why is bidirectional BFS often more efficient than regular BFS?',
      options: [
        'It uses less memory overall',
        'The search spaces meet in the middle, reducing total nodes explored',
        'It automatically finds multiple paths',
        'It works better with larger branching factors',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Bidirectional BFS typically uses similar or slightly more memory.',
        'Correct! By meeting in the middle, we explore significantly fewer nodes: O(b^(d/2)) vs O(b^d).',
        'Incorrect. Finding multiple paths is not an inherent feature of bidirectional BFS.',
        'Incorrect. Large branching factors actually make the advantage more pronounced.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'What is the key challenge in implementing bidirectional BFS correctly?',
      options: [
        'Managing memory usage',
        'Detecting when the two searches intersect',
        'Handling cycles in the graph',
        'Implementing the queue data structure',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Memory management is similar to regular BFS.',
        'Correct! Efficiently detecting and handling the intersection point is crucial for correctness.',
        'Incorrect. Cycle handling is similar to regular BFS.',
        'Incorrect. Queue implementation is straightforward and similar to regular BFS.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const queueLessons: Record<string, LessonContent> = {
  'queue-concept': queueConceptData,
  'queue-implementation': queueImplementationData,
  'queue-operations': queueOperationsData,
  'tree-bfs': treeBfsData,
  'graph-bfs': graphBfsData,
  'matrix-bfs': matrixBfsData,
  'priority-basics': priorityBasicsData,
  'top-k-pattern': topKPatternsData,
  'merge-pattern': mergePatternsData,
  'sliding-window-maximum': slidingWindowMaximumData,
  'deque-problems': dequeProblemsData,
  'monotonic-deque': monotonicDequeData,
  'circular-queue': circularQueueData,
  'queue-reconstruction': queueReconstructionData,
  'multi-source-bfs': multiSourceBFSData,
  'bidirectional-bfs': bidirectionalBFSData,
};
export const queueLessonsTab: LessonsTab = {
  curriculum: queueCurriculum,
  lessons: queueLessons,
};
