import { Difficulty } from '@/common/commonConcept';
import { Curriculum, LessonContent, LessonsTab } from '@/common/commonLesson';

const queueCurriculum: Curriculum = {
  title: 'Queue Curriculum',
  description:
    'A comprehensive guide to mastering queue data structure and its applications',
  sections: [
    {
      id: 1,
      title: 'Queue Fundamentals',
      topics: [
        {
          id: 'queue-concept',
          title: 'Queue Concept and Properties',
          description: 'Understanding FIFO principle and basic queue behavior',
        },
        {
          id: 'queue-implementation',
          title: 'Queue Implementation',
          description: 'Implementing queue using arrays and linked lists',
        },
        {
          id: 'queue-operations',
          title: 'Basic Queue Operations',
          description: 'Enqueue, dequeue, peek, and isEmpty operations',
        },
      ],
    },
    {
      id: 2,
      title: 'Circular Queue',
      topics: [
        {
          id: 'circular-concept',
          title: 'Circular Queue Concept',
          description: 'Understanding circular queue structure and benefits',
        },
        {
          id: 'circular-implementation',
          title: 'Circular Queue Implementation',
          description: 'Implementing efficient circular queue with arrays',
        },
        {
          id: 'circular-applications',
          title: 'Circular Queue Applications',
          description: 'Real-world applications and problem-solving',
        },
      ],
    },
    {
      id: 3,
      title: 'Double-ended Queue (Deque)',
      topics: [
        {
          id: 'deque-concept',
          title: 'Deque Concept',
          description: 'Understanding double-ended queue operations',
        },
        {
          id: 'deque-implementation',
          title: 'Deque Implementation',
          description: 'Implementing deque using arrays and linked lists',
        },
        {
          id: 'sliding-window',
          title: 'Sliding Window with Deque',
          description: 'Solving sliding window problems using deque',
        },
      ],
    },
    {
      id: 4,
      title: 'Priority Queue',
      topics: [
        {
          id: 'priority-concept',
          title: 'Priority Queue Concept',
          description: 'Understanding priority queue and heap implementation',
        },
        {
          id: 'heap-operations',
          title: 'Heap Operations',
          description: 'Implementation of min-heap and max-heap operations',
        },
        {
          id: 'priority-applications',
          title: 'Priority Queue Applications',
          description: 'Common applications and problem-solving patterns',
        },
      ],
    },
    {
      id: 5,
      title: 'Queue in BFS',
      topics: [
        {
          id: 'bfs-concept',
          title: 'Breadth-First Search Basics',
          description: 'Understanding BFS and queue relationship',
        },
        {
          id: 'graph-bfs',
          title: 'Graph BFS',
          description: 'Implementing BFS for graph traversal',
        },
        {
          id: 'tree-bfs',
          title: 'Tree Level Order Traversal',
          description: 'Implementing level-order traversal using queue',
        },
      ],
    },
    {
      id: 6,
      title: 'Special Queue Variations',
      topics: [
        {
          id: 'max-queue',
          title: 'Max Queue',
          description: 'Implementing queue with maximum element tracking',
        },
        {
          id: 'limited-queue',
          title: 'Size-Limited Queue',
          description: 'Managing fixed-size queues and circular buffers',
        },
        {
          id: 'monotonic-queue',
          title: 'Monotonic Queue',
          description: 'Understanding and implementing monotonic queue',
        },
      ],
    },
    {
      id: 7,
      title: 'Advanced Queue Operations',
      topics: [
        {
          id: 'queue-reversal',
          title: 'Queue Reversal',
          description: 'Techniques for reversing elements in a queue',
        },
        {
          id: 'queue-sorting',
          title: 'Queue Sorting',
          description: 'Methods for sorting elements in a queue',
        },
        {
          id: 'queue-optimization',
          title: 'Queue Optimization',
          description: 'Space and time optimization techniques',
        },
      ],
    },
    {
      id: 8,
      title: 'Queue in Complex Problems',
      topics: [
        {
          id: 'task-scheduling',
          title: 'Task Scheduling',
          description: 'Solving scheduling problems using queues',
        },
        {
          id: 'stream-processing',
          title: 'Stream Processing',
          description: 'Processing data streams using queue structures',
        },
        {
          id: 'simulation-problems',
          title: 'Simulation Problems',
          description: 'Using queues in simulation and modeling',
        },
      ],
    },
  ],
} as const;

const queueConceptData: LessonContent = {
  title: 'Queue Concept and Properties',
  content: `<p>
  A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle, meaning elements are removed in the same order they were added.
  Queues are commonly used in scheduling algorithms, buffering, and real-time processing.
  </p>`,
  codeExample: `# Queue Example in Python (using a list)
  class Queue:
      def __init__(self):
          self.queue = []
  
      def enqueue(self, item):
          self.queue.append(item)  # Add item to the end of the queue
  
      def dequeue(self):
          if not self.is_empty():
              return self.queue.pop(0)  # Remove item from the front
  
      def is_empty(self):
          return len(self.queue) == 0`,
  exercises: [
    {
      prompt:
        'Demonstrate the FIFO property by enqueuing [1, 2, 3] and dequeuing one element.',
      initialCode: `# Create a queue and perform enqueue and dequeue operations`,
      solution: `# Expected output should show [1] is removed, and [2, 3] remain in the queue`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which principle does a queue follow?',
      options: [
        'Last-In-First-Out (LIFO)',
        'First-In-First-Out (FIFO)',
        'Depth-First',
        'Breadth-First',
      ],
      correctAnswer: 1,
      explanations: [
        'Correct. Queue follows the FIFO principle, removing elements in the order they were added.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const queueImplementationData: LessonContent = {
  title: 'Queue Implementation',
  content: `<p>
  Queues can be implemented using various structures like arrays and linked lists. 
  Array-based queues provide quick access but may need resizing, while linked list queues offer dynamic sizing without reallocation.
  </p>`,
  codeExample: `# Queue Implementation using Linked List
  class Node:
      def __init__(self, value):
          self.value = value
          self.next = None
  
  class LinkedListQueue:
      def __init__(self):
          self.front = self.rear = None
  
      def enqueue(self, value):
          new_node = Node(value)
          if self.rear:
              self.rear.next = new_node
          self.rear = new_node
          if self.front is None:
              self.front = new_node
  
      def dequeue(self):
          if self.front:
              value = self.front.value
              self.front = self.front.next
              if self.front is None:
                  self.rear = None
              return value`,
  exercises: [
    {
      prompt:
        'Implement a linked list queue and enqueue the values [10, 20, 30].',
      initialCode: `# Write your solution here
  queue = LinkedListQueue()
  # Enqueue values, then test dequeue`,
      solution: `# Expected order for dequeue is 10, 20, 30`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which advantage does a linked list queue offer over an array-based queue?',
      options: [
        'Faster access time',
        'Dynamic sizing without reallocation',
        'More memory-efficient for large data',
        'Simpler to implement',
      ],
      correctAnswer: 1,
      explanations: [
        'Correct. Linked list queues can grow dynamically, avoiding the need for resizing.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const queueOperationsData: LessonContent = {
  title: 'Basic Queue Operations',
  content: `<p>
  Queues support basic operations: enqueue (add an element to the end), dequeue (remove from the front), peek (view the front element),
  and isEmpty (check if the queue is empty). These operations ensure efficient, controlled access.
  </p>`,
  codeExample: `# Queue Operations Example
  class QueueOperations:
      def __init__(self):
          self.queue = []
  
      def enqueue(self, item):
          self.queue.append(item)
  
      def dequeue(self):
          return self.queue.pop(0) if self.queue else None
  
      def peek(self):
          return self.queue[0] if self.queue else None
  
      def is_empty(self):
          return len(self.queue) == 0`,
  exercises: [
    {
      prompt:
        'Using the QueueOperations class, enqueue values [5, 15, 25], then dequeue one and peek.',
      initialCode: `# Implement enqueue, dequeue, and peek on a queue`,
      solution: `# Expected output: Dequeued value: 5, Peek value: 15`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'What is the result of the peek operation on an empty queue?',
      options: [
        'Returns None or equivalent',
        'Throws an error',
        'Returns the last element',
        'Adds a default value',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct. Peek returns None (or equivalent) on an empty queue.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};
const circularConceptData: LessonContent = {
  title: 'Circular Queue Concept',
  content: `<p>
  A circular queue is a linear data structure that follows the FIFO principle but wraps around to reuse space when it reaches the end of the array.
  It is useful in situations where a fixed amount of memory is required, avoiding wasted space from shifting elements as in regular queues.
  </p>`,
  codeExample: `# Circular Queue Example (concept demonstration)
  class CircularQueue:
      def __init__(self, size):
          self.queue = [None] * size
          self.size = size
          self.front = self.rear = -1
  
      def enqueue(self, item):
          if (self.rear + 1) % self.size == self.front:
              print("Queue is full")
          elif self.front == -1:  # Empty queue
              self.front = self.rear = 0
              self.queue[self.rear] = item
          else:
              self.rear = (self.rear + 1) % self.size
              self.queue[self.rear] = item
  
      def dequeue(self):
          if self.front == -1:
              print("Queue is empty")
          elif self.front == self.rear:
              temp = self.queue[self.front]
              self.front = self.rear = -1
              return temp
          else:
              temp = self.queue[self.front]
              self.front = (self.front + 1) % self.size
              return temp`,
  exercises: [
    {
      prompt:
        'Explain why a circular queue is more efficient for memory usage compared to a standard queue.',
      initialCode: `# Write a brief explanation here`,
      solution: `A circular queue uses the same memory repeatedly by wrapping around, reducing the need to shift elements.`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'What happens if an element is enqueued in a circular queue that is full?',
      options: [
        'The first element is overwritten',
        'An error occurs or the operation is prevented',
        'The queue expands',
        'The last element is removed first',
      ],
      correctAnswer: 1,
      explanations: [
        'Correct. Enqueuing to a full circular queue is typically not allowed to prevent data loss.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const circularImplementationData: LessonContent = {
  title: 'Circular Queue Implementation',
  content: `<p>
  Implementing a circular queue in arrays optimizes memory by allowing re-use of array space when elements are dequeued. 
  Circular queue implementations use modulo operations to manage front and rear pointers.
  </p>`,
  codeExample: `# Circular Queue with Array-based Implementation
  class CircularQueueArray:
      def __init__(self, size):
          self.queue = [None] * size
          self.size = size
          self.front = self.rear = -1
  
      def enqueue(self, value):
          if (self.rear + 1) % self.size == self.front:
              print("Queue is full")
              return
          elif self.front == -1:
              self.front = self.rear = 0
          else:
              self.rear = (self.rear + 1) % self.size
          self.queue[self.rear] = value
  
      def dequeue(self):
          if self.front == -1:
              print("Queue is empty")
              return None
          result = self.queue[self.front]
          if self.front == self.rear:
              self.front = self.rear = -1
          else:
              self.front = (self.front + 1) % self.size
          return result`,
  exercises: [
    {
      prompt:
        'Implement enqueue and dequeue operations for a circular queue with size 5.',
      initialCode: `# Define a CircularQueueArray class and add methods here`,
      solution: `# Expected order of operations and outcomes based on size and FIFO logic`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which operation uses modulo arithmetic in circular queue implementation?',
      options: ['Enqueue', 'Dequeue', 'Both enqueue and dequeue', 'Neither'],
      correctAnswer: 2,
      explanations: [
        'Correct. Both enqueue and dequeue operations use modulo to wrap around in a circular queue.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const circularApplicationsData: LessonContent = {
  title: 'Circular Queue Applications',
  content: `<p>
  Circular queues are commonly used in situations where a fixed-size buffer is needed. 
  They are widely applied in real-world scenarios like task scheduling, resource sharing (like CPU scheduling), and network buffers.
  </p>`,
  codeExample: `# Application of Circular Queue in CPU Scheduling
  def cpu_scheduler(jobs, time_slice):
      queue = CircularQueueArray(len(jobs))
      for job in jobs:
          queue.enqueue(job)
      while not queue.is_empty():
          current_job = queue.dequeue()
          print(f"Processing job: {current_job}")
          # Simulate time slice processing here`,
  exercises: [
    {
      prompt:
        'Demonstrate using a circular queue to manage resource sharing in a network buffer.',
      initialCode: `# Use a circular queue implementation to buffer packets`,
      solution: `# Expected solution should buffer packets and show proper resource management`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'Which is a real-world example of circular queue usage?',
      options: [
        'Binary Search',
        'Network Packet Buffering',
        'Sorting Algorithms',
        'Database Transactions',
      ],
      correctAnswer: 1,
      explanations: [
        'Correct. Circular queues are often used in network packet buffering to manage data flow efficiently.',
      ],
      difficulty: Difficulty.Advanced,
    },
  ],
};
const dequeConceptData: LessonContent = {
  title: 'Deque Concept',
  content: `<p>
  A double-ended queue, or deque, is a data structure that allows insertion and deletion of elements from both ends.
  Unlike regular queues, deques support both FIFO and LIFO principles, making them highly flexible for various operations.
  </p>`,
  codeExample: `# Basic Deque Example (conceptual code)
  from collections import deque
  
  dq = deque()
  dq.appendleft(1)  # Adds 1 to the front
  dq.append(2)      # Adds 2 to the back
  print(dq)         # deque([1, 2])
  dq.pop()          # Removes from the back
  dq.popleft()      # Removes from the front`,
  exercises: [
    {
      prompt:
        'List two real-world scenarios where using a deque is more advantageous than a simple queue.',
      initialCode: `# Provide brief examples`,
      solution: `Deques are useful in caching (e.g., LRU Cache) and maintaining history (e.g., browser history).`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which operation is not allowed in a double-ended queue?',
      options: [
        'Insertion at the front',
        'Removal from the back',
        'Insertion in the middle',
        'Removal from the front',
      ],
      correctAnswer: 2,
      explanations: [
        'Correct. Insertion in the middle is not typically supported in a deque.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const dequeImplementationData: LessonContent = {
  title: 'Deque Implementation',
  content: `<p>
  Implementing a deque can be done using arrays or linked lists. Array-based deques may involve dynamic resizing for efficient memory usage, 
  while linked-list implementations provide constant time insertion and deletion at both ends.
  </p>`,
  codeExample: `# Array-based Deque Example
  class ArrayDeque:
      def __init__(self):
          self.deque = []
  
      def add_front(self, item):
          self.deque.insert(0, item)
  
      def add_rear(self, item):
          self.deque.append(item)
  
      def remove_front(self):
          if not self.is_empty():
              return self.deque.pop(0)
  
      def remove_rear(self):
          if not self.is_empty():
              return self.deque.pop()
  
      def is_empty(self):
          return len(self.deque) == 0`,
  exercises: [
    {
      prompt: 'Implement a deque using a doubly linked list.',
      initialCode: `# Define nodes and doubly linked list for deque functionality`,
      solution: `# Expected solution should show both front and rear insertion/removal operations`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which implementation offers the most efficient way to manage a deque with frequent additions and removals?',
      options: [
        'Array-based deque',
        'Linked-list-based deque',
        'Hash map',
        'Binary search tree',
      ],
      correctAnswer: 1,
      explanations: [
        'Correct. Linked-list deques are optimal for frequent insertions and deletions at both ends.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const slidingWindowData: LessonContent = {
  title: 'Sliding Window with Deque',
  content: `<p>
  The deque is particularly powerful for sliding window problems, where it can efficiently track maximum or minimum values in a dynamic window size.
  By maintaining a deque with indices of elements in a specific order, sliding windows can be optimized to O(n) time complexity.
  </p>`,
  codeExample: `# Sliding Window Maximum with Deque
  from collections import deque
  
  def max_sliding_window(nums, k):
      dq = deque()  # Stores indices of elements in the window
      max_window = []
  
      for i in range(len(nums)):
          # Remove elements not in the sliding window
          if dq and dq[0] < i - k + 1:
              dq.popleft()
          
          # Maintain elements in decreasing order in the deque
          while dq and nums[dq[-1]] < nums[i]:
              dq.pop()
          
          # Add current element at the end of deque
          dq.append(i)
          
          # Append maximum of the current window
          if i >= k - 1:
              max_window.append(nums[dq[0]])
      
      return max_window`,
  exercises: [
    {
      prompt:
        'Implement a function to find the minimum of each sliding window using a deque.',
      initialCode: `# Modify the sliding window maximum function to track minimum values`,
      solution: `# Expected output should give minimums based on the sliding window size`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question:
        'What is the time complexity of a sliding window maximum problem using a deque?',
      options: ['O(n^2)', 'O(n log n)', 'O(n)', 'O(1)'],
      correctAnswer: 2,
      explanations: [
        'Correct. Sliding window maximum with a deque achieves O(n) time complexity by maintaining indices.',
      ],
      difficulty: Difficulty.Advanced,
    },
  ],
};

const priorityConceptData: LessonContent = {
  title: 'Priority Queue Concept',
  content: `<p>
A priority queue is an abstract data type that operates similar to a regular queue but with each element having a priority. 
Elements with higher priority are served before elements with lower priority. 
Priority queues are often implemented using heaps, which are complete binary trees that satisfy the heap property.
</p>

<ul>
<li><strong>Heap property:</strong> For a min-heap, the parent node is always less than or equal to its children. For a max-heap, the parent node is always greater than or equal to its children.</li>
<li><strong>Complete binary tree:</strong> A binary tree where all levels are completely filled except possibly the last level, which is filled from left to right.</li>
<li><strong>Operations:</strong> Common operations include inserting an element, extracting the minimum/maximum element, and decreasing/increasing the priority of an element.</li>
</ul>`,
  codeExample: `# Priority Queue using heapq (min-heap)
import heapq

# Initializing a priority queue
priority_queue = []

# Inserting elements with priorities
heapq.heappush(priority_queue, (5, 'Task 1'))
heapq.heappush(priority_queue, (1, 'Task 2'))
heapq.heappush(priority_queue, (3, 'Task 3'))

# Extracting the element with the highest priority (minimum value)
highest_priority_task = heapq.heappop(priority_queue)
print(highest_priority_task)  # Output: (1, 'Task 2')`,
  exercises: [
    {
      prompt:
        'Create a priority queue using the heapq module. Insert three tasks with different priorities and extract the task with the highest priority.',
      initialCode: `# Write your solution here
import heapq

priority_queue = `,
      solution: `import heapq

priority_queue = []
heapq.heappush(priority_queue, (5, 'Task 1'))
heapq.heappush(priority_queue, (1, 'Task 2'))
heapq.heappush(priority_queue, (3, 'Task 3'))

highest_priority_task = heapq.heappop(priority_queue)
print(highest_priority_task)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a function that takes a list of tasks with priorities and returns the task with the highest priority using the heapq module.',
      initialCode: `# Write your solution here
import heapq

def get_highest_priority_task(tasks):
    return `,
      solution: `import heapq

def get_highest_priority_task(tasks):
    priority_queue = []
    for task in tasks:
        heapq.heappush(priority_queue, task)
    return heapq.heappop(priority_queue)

tasks = [(5, 'Task 1'), (1, 'Task 2'), (3, 'Task 3')]
print(get_highest_priority_task(tasks))`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following statements is true about a min-heap?',
      options: [
        'The parent node is always greater than its children',
        'The parent node is always less than or equal to its children',
        'The parent node is always equal to its children',
        'None of the above',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. This describes a max-heap.',
        'This is correct. This describes a min-heap.',
        'This is incorrect. This is not a property of a heap.',
        'This is incorrect. The correct answer is that the parent node is always less than or equal to its children.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following operations can be performed on a priority queue implemented using a heap?',
      options: [
        'Inserting an element',
        'Extracting the minimum/maximum element',
        'Decreasing/increasing the priority of an element',
        'All of the above',
      ],
      correctAnswer: 3,
      explanations: [
        'This is correct. Inserting an element is a common operation.',
        'This is correct. Extracting the minimum/maximum element is a common operation.',
        'This is correct. Decreasing/increasing the priority of an element is a common operation.',
        'This is correct. All of the above operations can be performed on a priority queue.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const heapOperationsData: LessonContent = {
  title: 'Heap Operations',
  content: `<p>
Heap operations are fundamental to working with priority queues. 
Understanding how to implement and use these operations is crucial for effectively managing and manipulating heap data structures.
</p>

<ul>
<li><strong>Insertion:</strong> Adding an element to the heap while maintaining the heap property.</li>
<li><strong>Extraction:</strong> Removing the root element (minimum or maximum) from the heap while maintaining the heap property.</li>
<li><strong>Heapify:</strong> Converting a list into a heap in linear time.</li>
<li><strong>Decrease/Increase Key:</strong> Changing the priority of an element in the heap while maintaining the heap property.</li>
</ul>`,
  codeExample: `# Heap operations using heapq (min-heap)
import heapq

# Initializing a heap
heap = []

# Inserting elements
heapq.heappush(heap, 5)
heapq.heappush(heap, 1)
heapq.heappush(heap, 3)

# Extracting the minimum element
min_element = heapq.heappop(heap)
print(min_element)  # Output: 1

# Heapify a list
data = [5, 1, 3]
heapq.heapify(data)
print(data)  # Output: [1, 5, 3]

# Decrease key (not directly supported in heapq, but can be simulated)
def decrease_key(heap, index, new_value):
    heap[index] = new_value
    while index > 0 and heap[index] < heap[(index - 1) // 2]:
        heap[index], heap[(index - 1) // 2] = heap[(index - 1) // 2], heap[index]
        index = (index - 1) // 2

decrease_key(data, 1, 0)
print(data)  # Output: [0, 1, 3]`,
  exercises: [
    {
      prompt:
        'Create a heap using the heapq module. Insert three elements and extract the minimum element.',
      initialCode: `# Write your solution here
import heapq

heap = `,
      solution: `import heapq

heap = []
heapq.heappush(heap, 5)
heapq.heappush(heap, 1)
heapq.heappush(heap, 3)

min_element = heapq.heappop(heap)
print(min_element)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a function that takes a list of integers and converts it into a heap using the heapq module. Then, extract the minimum element from the heap.',
      initialCode: `# Write your solution here
import heapq

def heapify_and_extract_min(data):
    return `,
      solution: `import heapq

def heapify_and_extract_min(data):
    heapq.heapify(data)
    return heapq.heappop(data)

data = [5, 1, 3]
print(heapify_and_extract_min(data))`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to insert an element into a heap in Python?',
      options: [
        'heapq.heappush(heap, element)',
        'heapq.heappop(heap, element)',
        'heapq.heapify(heap, element)',
        'None of the above',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The heappush function inserts an element into the heap.',
        'This is incorrect. The heappop function extracts the minimum element from the heap.',
        'This is incorrect. The heapify function converts a list into a heap.',
        'This is incorrect. The correct answer is heapq.heappush(heap, element).',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following is the correct way to extract the minimum element from a heap in Python?',
      options: [
        'heapq.heappush(heap)',
        'heapq.heappop(heap)',
        'heapq.heapify(heap)',
        'None of the above',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. The heappush function inserts an element into the heap.',
        'This is correct. The heappop function extracts the minimum element from the heap.',
        'This is incorrect. The heapify function converts a list into a heap.',
        'This is incorrect. The correct answer is heapq.heappop(heap).',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const priorityApplicationsData: LessonContent = {
  title: 'Priority Queue Applications',
  content: `<p>
Priority queues have a wide range of applications in various fields, including computer science, operations research, and real-time systems. 
Understanding these applications can help you recognize when and how to use priority queues to solve specific problems.
</p>

<ul>
<li><strong>Scheduling:</strong> Priority queues are used in scheduling algorithms to determine the order in which tasks are executed.</li>
<li><strong>Graph algorithms:</strong> Priority queues are used in algorithms like Dijkstra's algorithm for finding the shortest path in a graph.</li>
<li><strong>Data compression:</strong> Priority queues are used in algorithms like Huffman coding for data compression.</li>
<li><strong>Event-driven simulations:</strong> Priority queues are used to manage events in simulations based on their occurrence time.</li>
</ul>`,
  codeExample: `# Priority Queue application in scheduling
import heapq

# Task scheduling example
tasks = [(5, 'Task 1'), (1, 'Task 2'), (3, 'Task 3')]
priority_queue = []

for task in tasks:
    heapq.heappush(priority_queue, task)

while priority_queue:
    task = heapq.heappop(priority_queue)
    print(f"Executing task: {task[1]} with priority {task[0]}")`,
  exercises: [
    {
      prompt:
        'Create a priority queue to simulate a task scheduler. Insert three tasks with different priorities and execute them in order of priority.',
      initialCode: `# Write your solution here
import heapq

tasks = `,
      solution: `import heapq

tasks = [(5, 'Task 1'), (1, 'Task 2'), (3, 'Task 3')]
priority_queue = []

for task in tasks:
    heapq.heappush(priority_queue, task)

while priority_queue:
    task = heapq.heappop(priority_queue)
    print(f"Executing task: {task[1]} with priority {task[0]}")`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a function that simulates a task scheduler using a priority queue. The function should take a list of tasks with priorities and execute them in order of priority.',
      initialCode: `# Write your solution here
import heapq

def task_scheduler(tasks):
    return `,
      solution: `import heapq

def task_scheduler(tasks):
    priority_queue = []
    for task in tasks:
        heapq.heappush(priority_queue, task)
    
    while priority_queue:
        task = heapq.heappop(priority_queue)
        print(f"Executing task: {task[1]} with priority {task[0]}")

tasks = [(5, 'Task 1'), (1, 'Task 2'), (3, 'Task 3')]
task_scheduler(tasks)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is a common application of priority queues?',
      options: [
        'Scheduling tasks',
        'Graph algorithms',
        'Data compression',
        'All of the above',
      ],
      correctAnswer: 3,
      explanations: [
        'This is correct. Priority queues are used in scheduling tasks.',
        'This is correct. Priority queues are used in graph algorithms like Dijkstra\'s algorithm.',
        'This is correct. Priority queues are used in data compression algorithms like Huffman coding.',
        'This is correct. All of the above are common applications of priority queues.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following algorithms uses a priority queue?',
      options: [
        'Dijkstra\'s algorithm',
        'Huffman coding',
        'Prim\'s algorithm',
        'All of the above',
      ],
      correctAnswer: 3,
      explanations: [
        'This is correct. Dijkstra\'s algorithm uses a priority queue.',
        'This is correct. Huffman coding uses a priority queue.',
        'This is correct. Prim\'s algorithm uses a priority queue.',
        'This is correct. All of the above algorithms use a priority queue.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const bfsConceptData: LessonContent = {
  title: 'Breadth-First Search Basics',
  content: `<p>
  Breadth-First Search (BFS) is an algorithm for traversing or searching graph structures layer by layer. BFS relies on a queue to manage the nodes
  being explored, ensuring nodes are processed in the order they are discovered.
  </p>`,
  codeExample: `# BFS Concept Example
  from collections import deque
  
  def bfs(start_node):
      queue = deque([start_node])
      visited = set([start_node])
  
      while queue:
          node = queue.popleft()
          print(node)  # Process the node
  
          for neighbor in get_neighbors(node):
              if neighbor not in visited:
                  visited.add(neighbor)
                  queue.append(neighbor)`,
  exercises: [
    {
      prompt:
        'Explain why BFS cannot be implemented using a stack instead of a queue.',
      initialCode: `# Describe how BFS relies on FIFO order for correct traversal`,
      solution: `BFS requires a FIFO structure to explore nodes layer by layer. A stack would result in a depth-first traversal.`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary purpose of a queue in BFS?',
      options: [
        'To prioritize the most recently discovered nodes',
        'To manage nodes in a last-in, first-out order',
        'To ensure nodes are processed in the order they are discovered',
        'To sort nodes by value',
      ],
      correctAnswer: 2,
      explanations: [
        'Correct. The queue in BFS ensures a first-in, first-out processing order, supporting layer-wise exploration.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const graphBfsData: LessonContent = {
  title: 'Graph BFS',
  content: `<p>
  When applied to graphs, BFS efficiently explores all reachable nodes starting from a specified node, handling each node and its neighbors sequentially.
  This approach is useful for finding the shortest path in unweighted graphs.
  </p>`,
  codeExample: `# BFS Implementation for Graph Traversal
  def bfs_graph(graph, start):
      visited = set()
      queue = deque([start])
      visited.add(start)
  
      while queue:
          node = queue.popleft()
          print(node)  # Process the node
  
          for neighbor in graph[node]:
              if neighbor not in visited:
                  visited.add(neighbor)
                  queue.append(neighbor)`,
  exercises: [
    {
      prompt:
        'Modify the BFS graph traversal to keep track of the shortest path from the start node to each node.',
      initialCode: `# Store path lengths or predecessors during BFS`,
      solution: `# Expected solution stores distances or predecessor nodes to reconstruct shortest paths`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question:
        'In an unweighted graph, what property does BFS guarantee if we start from a specific node?',
      options: [
        'It finds the shortest path to each reachable node',
        'It finds the longest path to each reachable node',
        'It visits nodes based on edge weights',
        'It only visits nodes once',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct. BFS ensures the shortest path in terms of the number of edges in an unweighted graph.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const treeBfsData: LessonContent = {
  title: 'Tree Level Order Traversal',
  content: `<p>
  In trees, BFS is commonly used for level-order traversal, processing each level of the tree from top to bottom.
  Using a queue to maintain nodes at each level, BFS visits each node layer by layer, making it ideal for tree-based operations.
  </p>`,
  codeExample: `# Level Order Traversal for a Binary Tree
  from collections import deque
  
  def level_order_traversal(root):
      if not root:
          return []
  
      queue = deque([root])
      result = []
  
      while queue:
          level = []
          for _ in range(len(queue)):
              node = queue.popleft()
              level.append(node.val)
              if node.left:
                  queue.append(node.left)
              if node.right:
                  queue.append(node.right)
          result.append(level)
      
      return result`,
  exercises: [
    {
      prompt:
        'Write a function to print each level of a binary tree in reverse order using BFS.',
      initialCode: `# Use a queue to traverse levels in BFS and a stack to reverse levels`,
      solution: `# Expected solution should use a stack to hold levels for reversed output`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question:
        'Which structure ensures that BFS in trees processes nodes level by level?',
      options: ['Stack', 'Priority queue', 'Queue', 'Linked list'],
      correctAnswer: 2,
      explanations: [
        'Correct. A queue enables BFS to explore nodes level by level, which is essential for level-order traversal.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};
const maxQueueData: LessonContent = {
  title: 'Max Queue',
  content: `<p>
  The Max Queue variation allows efficient tracking of the maximum element in the queue at any given time. 
  This is especially useful for applications requiring quick access to maximum values while performing enqueue and dequeue operations.
  </p>`,
  codeExample: `# Max Queue Implementation
  from collections import deque
  
  class MaxQueue:
      def __init__(self):
          self.queue = deque()
          self.max_deque = deque()  # Maintains the max elements in descending order
  
      def enqueue(self, value):
          self.queue.append(value)
          while self.max_deque and self.max_deque[-1] < value:
              self.max_deque.pop()
          self.max_deque.append(value)
  
      def dequeue(self):
          if self.queue:
              if self.queue[0] == self.max_deque[0]:
                  self.max_deque.popleft()
              return self.queue.popleft()
  
      def get_max(self):
          return self.max_deque[0] if self.max_deque else None`,
  exercises: [
    {
      prompt:
        'Modify the Max Queue implementation to support constant-time min element tracking alongside the max.',
      initialCode: `# Implement additional deque to track min elements in the queue`,
      solution: `# Expected solution should use another deque similar to max_deque for minimum elements`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary purpose of the max_deque in a Max Queue?',
      options: [
        'To keep track of minimum elements',
        'To maintain elements in the order they were added',
        'To ensure quick access to the maximum element',
        'To sort the elements in the queue',
      ],
      correctAnswer: 2,
      explanations: [
        'Correct. The max_deque allows constant-time access to the maximum element in the queue.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const limitedQueueData: LessonContent = {
  title: 'Size-Limited Queue',
  content: `<p>
  A Size-Limited Queue restricts the number of elements it can hold at any given time. This structure is widely used in applications requiring 
  a circular buffer or fixed memory allocation, where older elements are discarded when the limit is reached.
  </p>`,
  codeExample: `# Size-Limited Queue Implementation
  class LimitedQueue:
      def __init__(self, max_size):
          self.queue = deque()
          self.max_size = max_size
  
      def enqueue(self, value):
          if len(self.queue) == self.max_size:
              self.queue.popleft()  # Remove the oldest element to maintain the limit
          self.queue.append(value)
  
      def dequeue(self):
          return self.queue.popleft() if self.queue else None`,
  exercises: [
    {
      prompt: 'Modify the Size-Limited Queue to implement a circular buffer.',
      initialCode: `# Adapt enqueue operation to wrap around when max size is reached`,
      solution: `# Expected solution manages a pointer or index to wrap around elements`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question:
        'What happens when the queue reaches its maximum size in a Size-Limited Queue?',
      options: [
        'New elements are ignored',
        'The queue stops accepting elements',
        'The oldest element is removed to make space',
        'The newest element is discarded',
      ],
      correctAnswer: 2,
      explanations: [
        'Correct. When the limit is reached, the oldest element is dequeued to make space for new elements.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const monotonicQueueData: LessonContent = {
  title: 'Monotonic Queue',
  content: `<p>
  A Monotonic Queue maintains elements in a specific non-increasing or non-decreasing order. This makes it ideal for 
  solving problems like finding the maximum or minimum in a sliding window, where elements in the queue follow a fixed order.
  </p>`,
  codeExample: `# Monotonic Queue Implementation (Non-Increasing)
  class MonotonicQueue:
      def __init__(self):
          self.queue = deque()
  
      def enqueue(self, value):
          while self.queue and self.queue[-1] < value:
              self.queue.pop()  # Remove smaller elements to maintain non-increasing order
          self.queue.append(value)
  
      def dequeue(self, value):
          if self.queue and self.queue[0] == value:
              self.queue.popleft()
  
      def get_max(self):
          return self.queue[0] if self.queue else None`,
  exercises: [
    {
      prompt:
        'Modify the Monotonic Queue to maintain a non-decreasing order instead of a non-increasing order.',
      initialCode: `# Adjust enqueue method to pop elements greater than the incoming value`,
      solution: `# Expected solution maintains a non-decreasing order by removing greater elements`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question:
        'What is the primary advantage of using a Monotonic Queue for sliding window problems?',
      options: [
        'It simplifies adding elements to the queue',
        'It ensures the queue remains sorted',
        'It allows efficient retrieval of the maximum or minimum in the window',
        'It maintains all elements in the original order',
      ],
      correctAnswer: 2,
      explanations: [
        'Correct. Monotonic Queue allows efficient maximum/minimum tracking in sliding windows due to its order constraint.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};
const queueReversalData: LessonContent = {
  title: 'Queue Reversal',
  content: `<p>
  Queue Reversal involves reversing the order of elements in a queue. This operation can be done iteratively or recursively 
  and is useful for applications where elements need to be processed in reverse order.
  </p>`,
  codeExample: `# Queue Reversal Implementation
  from collections import deque
  
  def reverse_queue(queue):
      stack = []
      while queue:
          stack.append(queue.popleft())
      while stack:
          queue.append(stack.pop())
  
  # Example usage:
  queue = deque([1, 2, 3, 4, 5])
  reverse_queue(queue)  # queue becomes [5, 4, 3, 2, 1]`,
  exercises: [
    {
      prompt: 'Implement a recursive solution for reversing a queue.',
      initialCode: `# Use a recursive function that dequeues elements and re-enqueues them in reverse order`,
      solution: `# Expected solution uses recursive calls to reverse elements without a stack`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question:
        'What is the primary purpose of using a stack in the iterative queue reversal?',
      options: [
        'To store elements temporarily while reversing order',
        'To sort elements before enqueuing back',
        'To remove duplicates in the queue',
        'To check for maximum elements in the queue',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct. A stack holds elements temporarily to reverse their order before placing them back in the queue.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const queueSortingData: LessonContent = {
  title: 'Queue Sorting',
  content: `<p>
  Queue Sorting involves arranging the elements in the queue in ascending or descending order. Sorting a queue 
  can be achieved using additional data structures like priority queues or stacks.
  </p>`,
  codeExample: `# Queue Sorting Implementation using a Priority Queue
  import heapq
  
  def sort_queue(queue):
      min_heap = []
      while queue:
          heapq.heappush(min_heap, queue.popleft())
      while min_heap:
          queue.append(heapq.heappop(min_heap))
  
  # Example usage:
  queue = deque([4, 2, 5, 1, 3])
  sort_queue(queue)  # queue becomes [1, 2, 3, 4, 5]`,
  exercises: [
    {
      prompt:
        'Modify the sorting function to sort the queue in descending order.',
      initialCode: `# Use heapq with negative values or sort with max heap`,
      solution: `# Expected solution adapts heapq or reverse sorting for descending order`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question:
        'What data structure is primarily used to help sort the queue in ascending order?',
      options: [
        'Stack',
        'Binary Search Tree',
        'Priority Queue (Min-Heap)',
        'Linked List',
      ],
      correctAnswer: 2,
      explanations: [
        'Correct. A Priority Queue (Min-Heap) allows efficient sorting by continually dequeuing the smallest element.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const queueOptimizationData: LessonContent = {
  title: 'Queue Optimization',
  content: `<p>
  Queue Optimization focuses on improving space and time efficiency for queue operations. Techniques like reducing memory 
  overhead and optimizing enqueue/dequeue operations are essential for handling large-scale data.
  </p>`,
  codeExample: `# Queue Optimization Example: Implementing a Fixed-Size Circular Queue
  class CircularQueue:
      def __init__(self, max_size):
          self.queue = [None] * max_size
          self.head = self.tail = -1
          self.max_size = max_size
  
      def enqueue(self, value):
          if (self.tail + 1) % self.max_size == self.head:
              print("Queue is full")  # Queue is full
          elif self.head == -1:
              self.head = self.tail = 0
              self.queue[self.tail] = value
          else:
              self.tail = (self.tail + 1) % self.max_size
              self.queue[self.tail] = value
  
      def dequeue(self):
          if self.head == -1:
              print("Queue is empty")
          elif self.head == self.tail:
              self.head = self.tail = -1  # Reset when last element is dequeued
          else:
              self.head = (self.head + 1) % self.max_size`,
  exercises: [
    {
      prompt:
        'Implement a circular queue that tracks the minimum element in constant time.',
      initialCode: `# Integrate min-tracking by modifying enqueue and dequeue logic`,
      solution: `# Expected solution uses an additional array or queue to track minimum values`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following best describes a circular queue?',
      options: [
        'A queue where elements are reversed',
        'A queue where elements are sorted',
        'A queue where the rear connects back to the front',
        'A queue with priority-based elements',
      ],
      correctAnswer: 2,
      explanations: [
        'Correct. A circular queue wraps around, connecting the tail back to the head when reaching its capacity.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};
const taskSchedulingData: LessonContent = {
  title: 'Task Scheduling',
  content: `<p>
  Task scheduling is a common problem in computer science where tasks need to be executed in a specific order or at specific times. 
  Queues are often used to manage and schedule tasks efficiently. 
  In this lesson, we will explore how to use queues for task scheduling, including priority queues for tasks with different priorities.
  </p>
  
  <ul>
  <li><strong>FIFO Scheduling:</strong> Tasks are executed in the order they are added to the queue.</li>
  <li><strong>Priority Scheduling:</strong> Tasks are executed based on their priority, with higher priority tasks being processed first.</li>
  <li><strong>Round Robin Scheduling:</strong> Tasks are executed in a cyclic order, giving each task a fixed time slice.</li>
  </ul>`,
  codeExample: `# FIFO Scheduling
  from collections import deque
  
  tasks = deque()
  tasks.append("Task 1")
  tasks.append("Task 2")
  tasks.append("Task 3")
  
  while tasks:
      print("Processing:", tasks.popleft())
  
  # Priority Scheduling
  import heapq
  
  priority_tasks = []
  heapq.heappush(priority_tasks, (3, "High Priority Task"))
  heapq.heappush(priority_tasks, (1, "Highest Priority Task"))
  heapq.heappush(priority_tasks, (2, "Medium Priority Task"))
  
  while priority_tasks:
      priority, task = heapq.heappop(priority_tasks)
      print("Processing:", task, "with priority", priority)
  
  # Round Robin Scheduling
  rr_tasks = deque(["Task 1", "Task 2", "Task 3"])
  time_slice = 2
  
  while rr_tasks:
      task = rr_tasks.popleft()
      print("Processing:", task)
      if len(rr_tasks) > 0:
          rr_tasks.append(task)`,
  exercises: [
    {
      prompt:
        'Implement a FIFO task scheduler that processes tasks in the order they are added.',
      initialCode: `# Write your solution here
  tasks = deque()
  # Add tasks to the queue
  # Process tasks in FIFO order`,
      solution: `from collections import deque
  
  tasks = deque()
  tasks.append("Task 1")
  tasks.append("Task 2")
  tasks.append("Task 3")
  
  while tasks:
      print("Processing:", tasks.popleft())`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Implement a priority task scheduler that processes tasks based on their priority.',
      initialCode: `# Write your solution here
  priority_tasks = []
  # Add tasks with priorities to the queue
  # Process tasks in priority order`,
      solution: `import heapq
  
  priority_tasks = []
  heapq.heappush(priority_tasks, (3, "High Priority Task"))
  heapq.heappush(priority_tasks, (1, "Highest Priority Task"))
  heapq.heappush(priority_tasks, (2, "Medium Priority Task"))
  
  while priority_tasks:
      priority, task = heapq.heappop(priority_tasks)
      print("Processing:", task, "with priority", priority)`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Implement a round-robin task scheduler that processes tasks in a cyclic order.',
      initialCode: `# Write your solution here
  rr_tasks = deque()
  # Add tasks to the queue
  # Process tasks in round-robin order`,
      solution: `from collections import deque
  
  rr_tasks = deque(["Task 1", "Task 2", "Task 3"])
  time_slice = 2
  
  while rr_tasks:
      task = rr_tasks.popleft()
      print("Processing:", task)
      if len(rr_tasks) > 0:
          rr_tasks.append(task)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to implement a FIFO task scheduler in Python?',
      options: [
        'Using a stack',
        'Using a queue',
        'Using a priority queue',
        'Using a deque',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect because stacks use LIFO (Last In, First Out) order.',
        'This is correct. Queues use FIFO (First In, First Out) order.',
        'This is incorrect because priority queues use priority-based order.',
        'This is incorrect because deques can be used for FIFO, but the term "queue" is more specific.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of the following is the correct way to implement a priority task scheduler in Python?',
      options: [
        'Using a stack',
        'Using a queue',
        'Using a priority queue',
        'Using a deque',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect because stacks use LIFO (Last In, First Out) order.',
        'This is incorrect because queues use FIFO (First In, First Out) order.',
        'This is correct. Priority queues use priority-based order.',
        'This is incorrect because deques can be used for FIFO, but the term "priority queue" is more specific.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of the following is the correct way to implement a round-robin task scheduler in Python?',
      options: [
        'Using a stack',
        'Using a queue',
        'Using a priority queue',
        'Using a deque',
      ],
      correctAnswer: 3,
      explanations: [
        'This is incorrect because stacks use LIFO (Last In, First Out) order.',
        'This is incorrect because queues use FIFO (First In, First Out) order.',
        'This is incorrect because priority queues use priority-based order.',
        'This is correct. Deques can be used for round-robin scheduling by appending and popping elements cyclically.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};
const streamProcessingData: LessonContent = {
  title: 'Stream Processing',
  content: `<p>
  Stream processing involves handling continuous data streams, such as real-time data from sensors, logs, or user interactions. 
  Queues are often used to manage and process these data streams efficiently. 
  In this lesson, we will explore how to use queues for stream processing, including handling real-time data and processing events in order.
  </p>
  
  <ul>
  <li><strong>Real-time Data Handling:</strong> Using queues to manage and process real-time data.</li>
  <li><strong>Event Ordering:</strong> Ensuring events are processed in the correct order.</li>
  <li><strong>Buffering:</strong> Using queues to buffer data when processing speed is slower than data arrival.</li>
  </ul>`,
  codeExample: `# Real-time Data Handling
  from collections import deque
  
  data_stream = deque()
  
  def process_data(data):
      print("Processing:", data)
  
  def simulate_data_stream():
      import random
      import time
      while True:
          data = random.randint(1, 100)
          data_stream.append(data)
          process_data(data_stream.popleft())
          time.sleep(1)
  
  simulate_data_stream()
  
  # Event Ordering
  event_queue = deque()
  
  def process_event(event):
      print("Processing event:", event)
  
  def simulate_events():
      events = ["Event 1", "Event 2", "Event 3"]
      for event in events:
          event_queue.append(event)
      while event_queue:
          process_event(event_queue.popleft())
  
  simulate_events()
  
  # Buffering
  buffer_queue = deque()
  
  def process_buffer():
      while buffer_queue:
          print("Processing buffer:", buffer_queue.popleft())
  
  def simulate_buffering():
      import time
      for i in range(10):
          buffer_queue.append(i)
          if len(buffer_queue) > 5:
              process_buffer()
          time.sleep(0.5)
  
  simulate_buffering()`,
  exercises: [
    {
      prompt:
        'Implement a real-time data handler that processes data as it arrives.',
      initialCode: `# Write your solution here
  data_stream = deque()
  
  def process_data(data):
      # Process data
  
  def simulate_data_stream():
      import random
      import time
      while True:
          data = random.randint(1, 100)
          data_stream.append(data)
          process_data(data_stream.popleft())
          time.sleep(1)`,
      solution: `from collections import deque
  
  data_stream = deque()
  
  def process_data(data):
      print("Processing:", data)
  
  def simulate_data_stream():
      import random
      import time
      while True:
          data = random.randint(1, 100)
          data_stream.append(data)
          process_data(data_stream.popleft())
          time.sleep(1)
  
  simulate_data_stream()`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Implement an event handler that processes events in the order they are received.',
      initialCode: `# Write your solution here
  event_queue = deque()
  
  def process_event(event):
      # Process event
  
  def simulate_events():
      events = ["Event 1", "Event 2", "Event 3"]
      for event in events:
          event_queue.append(event)
      while event_queue:
          process_event(event_queue.popleft())`,
      solution: `from collections import deque
  
  event_queue = deque()
  
  def process_event(event):
      print("Processing event:", event)
  
  def simulate_events():
      events = ["Event 1", "Event 2", "Event 3"]
      for event in events:
          event_queue.append(event)
      while event_queue:
          process_event(event_queue.popleft())
  
  simulate_events()`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Implement a buffering system that processes data when the buffer reaches a certain size.',
      initialCode: `# Write your solution here
  buffer_queue = deque()
  
  def process_buffer():
      # Process buffer
  
  def simulate_buffering():
      import time
      for i in range(10):
          buffer_queue.append(i)
          if len(buffer_queue) > 5:
              process_buffer()
          time.sleep(0.5)`,
      solution: `from collections import deque
  
  buffer_queue = deque()
  
  def process_buffer():
      while buffer_queue:
          print("Processing buffer:", buffer_queue.popleft())
  
  def simulate_buffering():
      import time
      for i in range(10):
          buffer_queue.append(i)
          if len(buffer_queue) > 5:
              process_buffer()
          time.sleep(0.5)
  
  simulate_buffering()`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to handle real-time data using a queue in Python?',
      options: [
        'Using a stack',
        'Using a queue',
        'Using a priority queue',
        'Using a deque',
      ],
      correctAnswer: 3,
      explanations: [
        'This is incorrect because stacks use LIFO (Last In, First Out) order.',
        'This is incorrect because queues use FIFO (First In, First Out) order.',
        'This is incorrect because priority queues use priority-based order.',
        'This is correct. Deques can be used for real-time data handling by appending and popping elements efficiently.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of the following is the correct way to ensure events are processed in the correct order using a queue in Python?',
      options: [
        'Using a stack',
        'Using a queue',
        'Using a priority queue',
        'Using a deque',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect because stacks use LIFO (Last In, First Out) order.',
        'This is correct. Queues use FIFO (First In, First Out) order, ensuring events are processed in the correct order.',
        'This is incorrect because priority queues use priority-based order.',
        'This is incorrect because deques can be used for FIFO, but the term "queue" is more specific.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of the following is the correct way to implement a buffering system using a queue in Python?',
      options: [
        'Using a stack',
        'Using a queue',
        'Using a priority queue',
        'Using a deque',
      ],
      correctAnswer: 3,
      explanations: [
        'This is incorrect because stacks use LIFO (Last In, First Out) order.',
        'This is incorrect because queues use FIFO (First In, First Out) order.',
        'This is incorrect because priority queues use priority-based order.',
        'This is correct. Deques can be used for buffering by appending and popping elements efficiently.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};
const simulationProblemsData: LessonContent = {
  title: 'Simulation Problems',
  content: `<p>
  Simulation problems involve modeling real-world scenarios using computational methods. 
  Queues are often used in simulations to manage and process events or entities in a specific order. 
  In this lesson, we will explore how to use queues for simulation problems, including event-driven simulations and discrete event simulations.
  </p>
  
  <ul>
  <li><strong>Event-Driven Simulations:</strong> Using queues to manage and process events in a simulation.</li>
  <li><strong>Discrete Event Simulations:</strong> Simulating systems where the state changes at discrete points in time.</li>
  <li><strong>Entity Queues:</strong> Managing entities in a simulation using queues.</li>
  </ul>`,
  codeExample: `# Event-Driven Simulation
  from collections import deque
  
  event_queue = deque()
  
  def process_event(event):
      print("Processing event:", event)
  
  def simulate_events():
      events = ["Event 1", "Event 2", "Event 3"]
      for event in events:
          event_queue.append(event)
      while event_queue:
          process_event(event_queue.popleft())
  
  simulate_events()
  
  # Discrete Event Simulation
  class Event:
      def __init__(self, name, time):
          self.name = name
          self.time = time
  
      def __lt__(self, other):
          return self.time < other.time
  
  event_queue = []
  
  def schedule_event(event):
      heapq.heappush(event_queue, event)
  
  def process_events():
      while event_queue:
          event = heapq.heappop(event_queue)
          print("Processing event:", event.name, "at time:", event.time)
  
  schedule_event(Event("Event 1", 3))
  schedule_event(Event("Event 2", 1))
  schedule_event(Event("Event 3", 2))
  
  process_events()
  
  # Entity Queues
  entity_queue = deque()
  
  def process_entity(entity):
      print("Processing entity:", entity)
  
  def simulate_entities():
      entities = ["Entity 1", "Entity 2", "Entity 3"]
      for entity in entities:
          entity_queue.append(entity)
      while entity_queue:
          process_entity(entity_queue.popleft())
  
  simulate_entities()`,
  exercises: [
    {
      prompt:
        'Implement an event-driven simulation that processes events in the order they are added.',
      initialCode: `# Write your solution here
  event_queue = deque()
  
  def process_event(event):
      # Process event
  
  def simulate_events():
      events = ["Event 1", "Event 2", "Event 3"]
      for event in events:
          event_queue.append(event)
      while event_queue:
          process_event(event_queue.popleft())`,
      solution: `from collections import deque
  
  event_queue = deque()
  
  def process_event(event):
      print("Processing event:", event)
  
  def simulate_events():
      events = ["Event 1", "Event 2", "Event 3"]
      for event in events:
          event_queue.append(event)
      while event_queue:
          process_event(event_queue.popleft())
  
  simulate_events()`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Implement a discrete event simulation that processes events based on their scheduled time.',
      initialCode: `# Write your solution here
  class Event:
      def __init__(self, name, time):
          self.name = name
          self.time = time
  
      def __lt__(self, other):
          return self.time < other.time
  
  event_queue = []
  
  def schedule_event(event):
      # Schedule event
  
  def process_events():
      # Process events
  
  schedule_event(Event("Event 1", 3))
  schedule_event(Event("Event 2", 1))
  schedule_event(Event("Event 3", 2))
  
  process_events()`,
      solution: `import heapq
  
  class Event:
      def __init__(self, name, time):
          self.name = name
          self.time = time
  
      def __lt__(self, other):
          return self.time < other.time
  
  event_queue = []
  
  def schedule_event(event):
      heapq.heappush(event_queue, event)
  
  def process_events():
      while event_queue:
          event = heapq.heappop(event_queue)
          print("Processing event:", event.name, "at time:", event.time)
  
  schedule_event(Event("Event 1", 3))
  schedule_event(Event("Event 2", 1))
  schedule_event(Event("Event 3", 2))
  
  process_events()`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Implement an entity queue simulation that processes entities in the order they are added.',
      initialCode: `# Write your solution here
  entity_queue = deque()
  
  def process_entity(entity):
      # Process entity
  
  def simulate_entities():
      entities = ["Entity 1", "Entity 2", "Entity 3"]
      for entity in entities:
          entity_queue.append(entity)
      while entity_queue:
          process_entity(entity_queue.popleft())`,
      solution: `from collections import deque
  
  entity_queue = deque()
  
  def process_entity(entity):
      print("Processing entity:", entity)
  
  def simulate_entities():
      entities = ["Entity 1", "Entity 2", "Entity 3"]
      for entity in entities:
          entity_queue.append(entity)
      while entity_queue:
          process_entity(entity_queue.popleft())
  
  simulate_entities()`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to implement an event-driven simulation using a queue in Python?',
      options: [
        'Using a stack',
        'Using a queue',
        'Using a priority queue',
        'Using a deque',
      ],
      correctAnswer: 3,
      explanations: [
        'This is incorrect because stacks use LIFO (Last In, First Out) order.',
        'This is incorrect because queues use FIFO (First In, First Out) order.',
        'This is incorrect because priority queues use priority-based order.',
        'This is correct. Deques can be used for event-driven simulations by appending and popping elements efficiently.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of the following is the correct way to implement a discrete event simulation using a queue in Python?',
      options: [
        'Using a stack',
        'Using a queue',
        'Using a priority queue',
        'Using a deque',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect because stacks use LIFO (Last In, First Out) order.',
        'This is incorrect because queues use FIFO (First In, First Out) order.',
        'This is correct. Priority queues can be used for discrete event simulations by scheduling events based on their time.',
        'This is incorrect because deques can be used for FIFO, but the term "priority queue" is more specific.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of the following is the correct way to implement an entity queue simulation using a queue in Python?',
      options: [
        'Using a stack',
        'Using a queue',
        'Using a priority queue',
        'Using a deque',
      ],
      correctAnswer: 3,
      explanations: [
        'This is incorrect because stacks use LIFO (Last In, First Out) order.',
        'This is incorrect because queues use FIFO (First In, First Out) order.',
        'This is incorrect because priority queues use priority-based order.',
        'This is correct. Deques can be used for entity queue simulations by appending and popping elements efficiently.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};
const queueLessons: Record<string, LessonContent> = {
  'queue-concept': queueConceptData,
  'queue-implementation': queueImplementationData,
  'queue-operations': queueOperationsData,
  'circular-concept': circularConceptData,
  'circular-implementation': circularImplementationData,
  'circular-applications': circularApplicationsData,
  'deque-concept': dequeConceptData,
  'deque-implementation': dequeImplementationData,
  'sliding-window': slidingWindowData,
  'priority-concept': priorityConceptData,
  'heap-operations': heapOperationsData,
  'priority-applications': priorityApplicationsData,
  'bfs-concept': bfsConceptData,
  'graph-bfs': graphBfsData,
  'tree-bfs': treeBfsData,
  'max-queue': maxQueueData,
  'limited-queue': limitedQueueData,
  'monotonic-queue': monotonicQueueData,
  'queue-reversal': queueReversalData,
  'queue-sorting': queueSortingData,
  'queue-optimization': queueOptimizationData,
  'task-scheduling': taskSchedulingData,
  'stream-processing': streamProcessingData,
  'simulation-problems': simulationProblemsData,
};
export const queueLessonsTab: LessonsTab = {
  curriculum: queueCurriculum,
  lessons: queueLessons,
};
