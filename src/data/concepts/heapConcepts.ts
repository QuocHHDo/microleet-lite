import { Concept, createConcept, Difficulty } from '@/common/commonConcept';

export const heapConcepts: Concept[] = [
  createConcept(
    1,
    'What is a Heap? How does it differ from other data structures?',
    `
**Definition:** A heap is a specialized tree-based data structure that satisfies the heap property. In a max-heap, each node’s value is greater than or equal to the values of its children. In a min-heap, each node’s value is less than or equal to the values of its children.

**Basic Structure:** Heaps are often represented as complete binary trees and typically implemented using arrays for efficient indexing.

**Example:**
\`\`\`python
import heapq

# Min-heap example
min_heap = []
heapq.heappush(min_heap, 3)
heapq.heappush(min_heap, 1)
heapq.heappush(min_heap, 2)
print(heapq.heappop(min_heap))  # Output: 1
\`\`\`

**Key Characteristics:**
- **Heap Property:** Parent nodes follow the min-heap or max-heap rule.
- **Complete Binary Tree:** All levels fully filled, except possibly the last level.
- **Efficient Operations:** Supports efficient insertion and priority-based removal.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    2,
    'What are the advantages and disadvantages of using heaps?',
    `
<h2>Advantages:</h2>
<ul>
  <li><strong>Efficient Operations:</strong> Insertion and deletion (extracting min/max) are O(log n) time.</li>
  <li><strong>Priority Queue Implementation:</strong> Heaps excel at retrieving the highest or lowest priority element.</li>
  <li><strong>Space-Efficient Array Representation:</strong> Often stored in arrays without additional pointers.</li>
</ul>

<h2>Disadvantages:</h2>
<ul>
  <li><strong>Limited Access:</strong> Only the root (min or max) element is quick to access; others require traversal.</li>
  <li><strong>Not Suitable for Random Access:</strong> Accessing arbitrary elements is O(n).</li>
  <li><strong>Maintaining the Heap Property:</strong> Insertions and deletions must re-heapify, which is O(log n).</li>
</ul>

**Key Points:**
- Ideal for scenarios needing efficient priority access.
- Less suitable when random access or full ordering is required.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    3,
    'What is the time complexity of common operations on a heap (insertion, deletion, peek)?',
    `
**Time Complexity of Common Operations on Heaps:**
| Operation                 | Complexity | Explanation                                                                 |
|---------------------------|-----------|-----------------------------------------------------------------------------|
| **Insertion**            | O(log n)   | After adding an element, the heap must restore the heap property.          |
| **Deletion (Extract)**   | O(log n)   | Removing the root requires re-heapifying.                                  |
| **Peek (Find Min/Max)**  | O(1)       | The root element is always accessible in constant time.                    |
| **Search**               | O(n)       | Finding arbitrary elements requires a full traversal.                      |

**Key Points:**
- Heaps are optimized for insertion, deletion, and priority retrieval.
- Searching is generally inefficient (O(n)).
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    4,
    'Explain the difference between a heap and a binary search tree (BST).',
    `
**Heaps:**
- **Heap Property:** Parent node is larger (max-heap) or smaller (min-heap) than its children.
- **Complete Binary Tree:** Typically represented in an array.
- **Operations:** Great for priority queues, O(log n) insertion/deletion, O(1) peek.

**Binary Search Trees (BST):**
- **BST Property:** Left subtree ≤ node ≤ right subtree (in a typical BST).
- **Balanced vs. Unbalanced:** BSTs can degrade to O(n) if unbalanced.
- **Operations:** Good for searching, can be O(log n) if balanced.

**Key Points:**
- Heaps emphasize quick removal of min/max; BSTs emphasize efficient searches and in-order traversals.
- Both are tree-based but serve different use cases.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    5,
    'What are some common use cases for heaps in programming?',
    `
**Common Use Cases:**
- **Priority Queues:** Retrieve the smallest or largest element quickly.
- **Dijkstra’s Algorithm:** Manage the next closest vertex in shortest-path problems.
- **Heap Sort:** Sort an array in O(n log n) by repeatedly extracting the min/max.
- **Event Scheduling:** Quickly fetch the highest or lowest priority task.
- **Median Maintenance:** Use two heaps (a max-heap and a min-heap) to maintain the median in O(log n) per insertion.
- **Prim’s Algorithm:** For finding the minimum spanning tree in weighted graphs.

**Key Points:**
- Heaps shine where priority-based insertion and extraction are critical.
- Commonly integrated into many graph and scheduling algorithms.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    6,
    'How do you build a heap from an unordered array and why is it O(n)?',
    `
**Heap Construction:**
1. **Place Elements in Array:** Assume the array represents a complete binary tree.
2. **Heapify:** Start from the last non-leaf node down to the root, calling heapify to maintain the heap property.

**Why O(n)?**
- The height of most subtrees is small when you perform heapify from the bottom up. The total work across all nodes is linear in the number of elements.

**Key Points:**
- A bottom-up approach avoids re-heapifying the same subtrees multiple times.
- Building a heap in O(n) is more efficient than inserting each element into an empty heap (O(n log n)).
    `,
    Difficulty.Intermediate,
  ),
  createConcept(
    7,
    'Increase/Decrease Key Operations in a Heap',
    `
**Definition:** Increase or decrease the value of an existing element in the heap, then adjust its position to maintain the heap property.

**Approach (Min-Heap Example):**
1. **Decrease Key:** If a key decreases, it may need to bubble up toward the root.
2. **Increase Key:** If a key increases, it may need to bubble down.

**Implementation Details:**
- **Index Lookup:** You must know the element’s index in the heap array.
- **Re-heapify:** Perform a “shift up” or “shift down” as needed.

**Complexity:** O(log n) in most implementations.

**Key Points:**
- Requires direct access to the element’s position to quickly re-heapify.
- Useful in algorithms like Dijkstra’s when updating distances (priorities).
    `,
    Difficulty.Intermediate,
  ),
  createConcept(
    8,
    'Fibonacci Heaps and Amortized Analysis',
    `
**Fibonacci Heap:** A more advanced heap variant that achieves better amortized complexities for some operations.

**Key Operations & Amortized Costs:**
- **Insert:** O(1)
- **Decrease Key:** O(1)
- **Extract Min:** O(log n)
- **Merge:** O(1)

**Why Faster in Theory?**
- Relies on lazy consolidation: tree structures are combined only when necessary.

**Key Points:**
- Commonly mentioned in theoretical discussions (e.g., advanced graph algorithms).
- Implementation is more complex compared to binary heaps.
    `,
    Difficulty.Advanced,
  ),
  createConcept(
    9,
    'Binomial Heaps vs. Fibonacci Heaps',
    `
**Binomial Heap:**
- **Structure:** Collection of binomial trees, each obeying the heap property.
- **Operations:** Merge, insert, extract-min in O(log n).
- **Easier to Implement:** Simpler than Fibonacci heaps, but still more complex than binary heaps.

**Fibonacci Heap:**
- **Lazy Merging:** Achieves amortized O(1) insertion and O(1) decrease-key.
- **Implementation Complexity:** More sophisticated node structures and lazy operations.

**Key Points:**
- Binomial heaps are a step up from binary heaps, offering efficient merges.
- Fibonacci heaps push amortized time further but at the cost of implementation complexity.
    `,
    Difficulty.Advanced,
  ),
];
