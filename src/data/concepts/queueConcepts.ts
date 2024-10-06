import { Concept, createConcept, Difficulty } from '@/common/commonConcept';
import { generateTimeComplexityTable } from '@/utils/generateTimeComplexityTable';

export const queueConcepts: Concept[] = [
  createConcept(
    1,
    'What is a Queue? How does it differ from other data structures?',
    `
  **Definition:** A queue is a linear data structure that follows the First In, First Out (FIFO) principle. This means that the first element added to the queue will be the first one to be removed.
  
  **Basic Structure:** Queues typically support two main operations: enqueue (add an element to the end) and dequeue (remove the front element).
  
  **Example:**
  \`\`\`python
  from collections import deque

  my_queue = deque()
  my_queue.append(1)  # Enqueue 1 to the queue
  my_queue.append(2)  # Enqueue 2 to the queue
  print(my_queue.popleft())  # Dequeue 1 from the queue (Output: 1)
  \`\`\`
  
  **Key Characteristics:**
  - **FIFO Order:** The first element added is the first one to be removed.
  - **Limited Access:** Elements can only be accessed from the front of the queue.
  - **Common Use Cases:** Task scheduling, message processing, breadth-first search algorithms, and more.
      `,
    Difficulty.Beginner,
  ),
  createConcept(
    2,
    'What are the advantages and disadvantages of using queues?',
    `
  <h2>Advantages:</h2>
  <ul>
    <li><strong>Simple Implementation:</strong> Queues are straightforward to implement and use.</li>
    <li><strong>Efficient Operations:</strong> Both enqueue and dequeue operations are O(1) time complexity.</li>
    <li><strong>Useful for FIFO Scenarios:</strong> Ideal for scenarios where the first added element needs to be processed first.</li>
  </ul>
  
  <h2>Disadvantages:</h2>
  <ul>
    <li><strong>Limited Access:</strong> Only the front element can be accessed directly.</li>
    <li><strong>Not Suitable for Random Access:</strong> Cannot access elements in the middle of the queue efficiently.</li>
    <li><strong>Potential for Overflow/Underflow:</strong> If not managed properly, queues can overflow (too many elements) or underflow (no elements to dequeue).</li>
  </ul>
  
  **Example:**
  \`\`\`python
  from collections import deque

  my_queue = deque()
  my_queue.append(1)  # Enqueue 1 to the queue
  my_queue.append(2)  # Enqueue 2 to the queue
  print(my_queue.popleft())  # Dequeue 1 from the queue (Output: 1)
  \`\`\`
  
  **Key Points:**
  - Queues are ideal for scenarios where FIFO order is required.
  - For random access or LIFO order, other data structures like arrays or stacks may be more suitable.
      `,
    Difficulty.Beginner,
  ),
  createConcept(
    3,
    'What is the time complexity of common operations on a queue (enqueue, dequeue, peek)?',
    `
**Time Complexity of Common Operations on Queues:**
${generateTimeComplexityTable([
  {
    name: 'Enqueue',
    complexity: 'O(1)',
    explanation:
      'Adding an element to the end of the queue is a constant-time operation.',
  },
  {
    name: 'Dequeue',
    complexity: 'O(1)',
    explanation:
      'Removing the front element from the queue is a constant-time operation.',
  },
  {
    name: 'Peek',
    complexity: 'O(1)',
    explanation:
      'Accessing the front element without removing it is a constant-time operation.',
  },
  {
    name: 'Search',
    complexity: 'O(n)',
    explanation:
      'Searching for an element in the queue requires iterating through all elements.',
  },
])}
**Key Points:**
- Queues are optimized for fast enqueue and dequeue operations, making them efficient for FIFO scenarios.
- Searching for an element in a queue is inefficient due to the need to iterate through all elements.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    4,
    'Explain the difference between a queue and a stack.',
    `
  **Queues:**
  - **FIFO Principle:** First In, First Out. The first element added is the first one to be removed.
  - **Operations:** Mainly enqueue (add to the end) and dequeue (remove from the front).
  - **Example:** Task scheduling, message processing, breadth-first search algorithms.
  
  **Stacks:**
  - **LIFO Principle:** Last In, First Out. The last element added is the first one to be removed.
  - **Operations:** Mainly push (add to the top) and pop (remove from the top).
  - **Example:** Function call management, undo mechanisms, expression evaluation.
  
  **Key Points:**
  - Queues are ideal for FIFO scenarios, while stacks are ideal for LIFO scenarios.
  - Both data structures are linear and have their specific use cases depending on the order of processing required.
      `,
    Difficulty.Beginner,
  ),
  createConcept(
    5,
    'What are some common use cases for queues in programming?',
    `
  **Common Use Cases for Queues:**
  <ul>
    <li><strong>Task Scheduling:</strong> Queues are used to manage tasks in the order they are received, ensuring that the first task added is the first one to be processed.</li>
    <li><strong>Message Processing:</strong> Queues are used in message-oriented middleware systems to handle messages in the order they arrive.</li>
    <li><strong>Breadth-First Search (BFS):</strong> Queues are used in BFS algorithms to explore all nodes at the present depth level before moving on to nodes at the next depth level.</li>
    <li><strong>Print Job Management:</strong> Queues can be used to manage print jobs in a printer queue, ensuring that jobs are printed in the order they are submitted.</li>
    <li><strong>Simulation Systems:</strong> Queues are used in simulation systems to model real-world scenarios where events occur in a specific order.</li>
  </ul>
  
  **Example:**
  \`\`\`python
  from collections import deque

  # Simple task scheduling using a queue
  task_queue = deque()
  
  def add_task(task):
      task_queue.append(task)
  
  def process_task():
      if task_queue:
          task = task_queue.popleft()
          print(f"Processing task: {task}")
  
  add_task("Task 1")
  add_task("Task 2")
  process_task()  # Output: Processing task: Task 1
  process_task()  # Output: Processing task: Task 2
  \`\`\`
  
  **Key Points:**
  - Queues are versatile and can be applied to various scenarios requiring FIFO order.
  - Understanding the use cases helps in choosing the right data structure for a given problem.
      `,
    Difficulty.Beginner,
  ),
];
