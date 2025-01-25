import { Concept, createConcept, Difficulty } from '@/common/commonConcept';

export const queueConcepts: Concept[] = [
  createConcept(
    1,
    'What is a Queue? How does it differ from other data structures?',
    `
**Definition:** A queue is a linear data structure that follows the First In, First Out (FIFO) principle. The first element added is the first one removed.

**Basic Structure:** Queues typically support two main operations:
- **Enqueue:** Add an element to the end.
- **Dequeue:** Remove an element from the front.

**Example:**
\`\`\`python
from collections import deque

my_queue = deque()
my_queue.append(1)  # Enqueue 1
my_queue.append(2)  # Enqueue 2
print(my_queue.popleft())  # Dequeue -> Output: 1
\`\`\`

**Key Characteristics:**
- **FIFO Order:** First-in, first-out.
- **Limited Access:** Only the front element can be accessed easily.
- **Common Uses:** Task scheduling, message processing, BFS in graphs.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    2,
    'What are the advantages and disadvantages of using queues?',
    `
<h2>Advantages:</h2>
<ul>
  <li><strong>Simple Implementation:</strong> Easy to implement using arrays or linked lists.</li>
  <li><strong>O(1) Enqueue/Dequeue:</strong> Adding and removing elements from the ends is constant time.</li>
  <li><strong>FIFO Mechanism:</strong> Ideal when order of arrival must be preserved.</li>
</ul>

<h2>Disadvantages:</h2>
<ul>
  <li><strong>Limited Access:</strong> Only the front and rear are directly accessible.</li>
  <li><strong>Not for Random Access:</strong> Retrieving elements in the middle requires traversal (O(n)).</li>
  <li><strong>Overflow/Underflow Potential:</strong> Requires careful management of capacity or checking if empty.</li>
</ul>

**Key Points:**
- Perfect for FIFO scenarios.
- Less suitable for random or direct indexing.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    3,
    'What is the time complexity of common operations on a queue (enqueue, dequeue, peek)?',
    `
**Time Complexity of Common Operations on Queues:**
| Operation   | Complexity | Explanation                                                         |
|-------------|-----------|---------------------------------------------------------------------|
| **Enqueue** | O(1)       | Adding an element at the end is typically constant time.            |
| **Dequeue** | O(1)       | Removing the front element is also constant time.                   |
| **Peek**    | O(1)       | Inspecting the front element is constant time.                      |
| **Search**  | O(n)       | Finding an item requires scanning all elements in the worst case.   |

**Key Points:**
- Optimized for enqueue/dequeue.
- Searching any arbitrary element is inefficient (O(n)).
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    4,
    'Explain the difference between a queue and a stack.',
    `
**Queues:**
- **FIFO Principle:** First In, First Out.
- **Operations:** Enqueue (add to rear), Dequeue (remove from front).
- **Use Cases:** Task scheduling, BFS, messaging systems.

**Stacks:**
- **LIFO Principle:** Last In, First Out.
- **Operations:** Push (add to top), Pop (remove from top).
- **Use Cases:** Function call stacks, undo operations, expression parsing.

**Key Points:**
- Queues process elements in arrival order.
- Stacks process elements in reverse arrival order.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    5,
    'What are some common use cases for queues in programming?',
    `
**Common Use Cases:**
- **Task Scheduling:** Process tasks in the order they arrive.
- **Message Processing:** Handle incoming messages sequentially.
- **Breadth-First Search (BFS):** Explore neighbors first in graph/tree algorithms.
- **Printer Queue:** Manage print jobs in submission order.
- **Simulation Systems:** Model scenarios where events happen in a FIFO manner.

**Example:**
\`\`\`python
from collections import deque

task_queue = deque()

def add_task(task):
    task_queue.append(task)

def process_task():
    if task_queue:
        current_task = task_queue.popleft()
        print(f"Processing: {current_task}")

add_task("Task 1")
add_task("Task 2")
process_task()  # Output: Processing: Task 1
process_task()  # Output: Processing: Task 2
\`\`\`

**Key Points:**
- Essential for scenarios requiring FIFO order.
- Minimizes complexity when handling ordered workflows.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    6,
    'What is a Circular Queue, and why is it useful?',
    `
**Circular Queue:** A queue where the last position is connected back to the first position, forming a circle in memory.

**Key Features:**
- **Efficient Space Usage:** Overcomes the issue of wasted space in linear queues after repeated enqueues/dequeues.
- **Implementation Detail:** Use front and rear pointers (and possibly a size counter) to track the current state.
- **Operations:** Enqueue, Dequeue, Peek still O(1) if implemented correctly.

**Example (Pseudo-code):**
\`\`\`
class CircularQueue:
    def __init__(self, k):
        self.queue = [None] * k
        self.size = k
        self.front = 0
        self.rear = -1
        self.count = 0

    def enqueue(self, value):
        if self.isFull():
            return
        self.rear = (self.rear + 1) % self.size
        self.queue[self.rear] = value
        self.count += 1

    def dequeue(self):
        if self.isEmpty():
            return
        front_value = self.queue[self.front]
        self.front = (self.front + 1) % self.size
        self.count -= 1
        return front_value
\`\`\`

**Why Useful:**
- Allows reuse of space freed by dequeued elements without shifting elements.
- Common in applications like CPU scheduling, streaming data buffers.
    `,
    Difficulty.Intermediate,
  ),
  createConcept(
    7,
    'How do you implement a queue using two stacks?',
    `
**Concept:** Use two stacks (stackIn and stackOut) to simulate FIFO behavior.

**Approach:**
1. **Enqueue:** Push elements onto stackIn.
2. **Dequeue:** If stackOut is empty, pop all elements from stackIn and push them onto stackOut (reversing order). Then pop from stackOut.

**Example (Pseudo-code):**
\`\`\`python
class MyQueue:
    def __init__(self):
        self.stackIn = []
        self.stackOut = []

    def enqueue(self, x):
        self.stackIn.append(x)

    def dequeue(self):
        if not self.stackOut:
            while self.stackIn:
                self.stackOut.append(self.stackIn.pop())
        return self.stackOut.pop() if self.stackOut else None
\`\`\`

**Key Points:**
- Average O(1) amortized time for enqueue and dequeue.
- stackOut only gets reloaded when it’s empty, minimizing data movement.
    `,
    Difficulty.Intermediate,
  ),
  createConcept(
    8,
    'Double-Ended Queue (Deque): Implementation and Use Cases',
    `
**Definition:** A deque (double-ended queue) allows insertions and removals at both the front and rear.

**Operations:**
- **appendleft(x):** Insert x at the front.
- **append(x):** Insert x at the rear.
- **popleft():** Remove from the front.
- **pop():** Remove from the rear.

**Example (Python’s collections.deque):**
\`\`\`python
from collections import deque

d = deque()
d.appendleft(10)
d.append(20)
print(d)  # deque([10, 20])
d.pop()       # Removes 20
d.popleft()   # Removes 10
\`\`\`

**Use Cases:**
- **Implementing LRU Cache:** Quick additions/removals from both ends.
- **Sliding Window Problems:** Maintain window of size k with O(1) push/pop from ends.
- **Palindromes:** Quickly compare elements from front and back.

**Key Points:**
- Offers more flexibility than a standard queue.
- Maintains O(1) insert/delete at both ends.
    `,
    Difficulty.Intermediate,
  ),
  createConcept(
    9,
    'Priority Queues vs. Regular Queues',
    `
**Definition:** A priority queue retrieves elements based on priority rather than strictly FIFO order.

**Differences from Regular Queue:**
- **Enqueue:** Elements inserted with a priority.
- **Dequeue:** Highest (or lowest) priority item is removed first, not just the oldest element.

**Implementation:**
- **Heaps:** Often implemented using a binary heap for O(log n) insertion and removal of the min/max.
- **Ordered Structures:** Could use balanced trees or arrays, but each has different trade-offs.

**Example (Python’s heapq for min-priority queue):**
\`\`\`python
import heapq

pq = []
heapq.heappush(pq, (1, "Low priority"))
heapq.heappush(pq, (0, "High priority"))

print(heapq.heappop(pq))  # (0, 'High priority')
\`\`\`

**Key Points:**
- Priority queues reorder elements based on priority, not arrival time.
- Used in Dijkstra’s algorithm, CPU scheduling, or any scenario requiring priority-based retrieval.
    `,
    Difficulty.Advanced,
  ),
];
