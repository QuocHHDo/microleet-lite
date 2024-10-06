import { Concept, createConcept, Difficulty } from '@/common/commonConcept';
import { generateTimeComplexityTable } from '@/utils/generateTimeComplexityTable';

export const heapConcepts: Concept[] = [
  createConcept(
    1,
    'What is a Heap? How does it differ from other data structures?',
    `
  **Definition:** A heap is a specialized tree-based data structure that satisfies the heap property. In a max-heap, for any given node I, the value of I is greater than or equal to the values of its children. In a min-heap, the value of I is less than or equal to the values of its children.
  
  **Basic Structure:** Heaps are typically represented as binary trees, but they are usually implemented using arrays for efficiency.
  
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
  - **Heap Property:** The key at each node is either greater than or equal to (in a max-heap) or less than or equal to (in a min-heap) the keys in its children.
  - **Complete Binary Tree:** Heaps are usually implemented as complete binary trees, where all levels are fully filled except possibly the last level, which is filled from left to right.
  - **Efficient Operations:** Heaps support efficient insertion and deletion operations.
      `,
    Difficulty.Beginner,
  ),
  createConcept(
    2,
    'What are the advantages and disadvantages of using heaps?',
    `
  <h2>Advantages:</h2>
  <ul>
    <li><strong>Efficient Operations:</strong> Both insertion and deletion operations are O(log n) time complexity.</li>
    <li><strong>Priority Queue Implementation:</strong> Heaps are ideal for implementing priority queues, where the highest (or lowest) priority element needs to be accessed quickly.</li>
    <li><strong>Memory Efficiency:</strong> Heaps can be implemented using arrays, which are memory-efficient.</li>
  </ul>
  
  <h2>Disadvantages:</h2>
  <ul>
    <li><strong>Limited Access:</strong> Only the root element can be accessed directly.</li>
    <li><strong>Not Suitable for Random Access:</strong> Cannot access elements in the middle of the heap efficiently.</li>
    <li><strong>Complexity:</strong> Maintaining the heap property during insertion and deletion can be complex.</li>
  </ul>
  
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
  
  **Key Points:**
  - Heaps are ideal for scenarios where efficient insertion, deletion, and priority access are required.
  - For random access or FIFO order, other data structures like arrays or queues may be more suitable.
      `,
    Difficulty.Beginner,
  ),
  createConcept(
    3,
    'What is the time complexity of common operations on a heap (insertion, deletion, peek)?',
    `
**Time Complexity of Common Operations on Heaps:**
${generateTimeComplexityTable([
  {
    name: 'Insertion',
    complexity: 'O(log n)',
    explanation:
      'Inserting an element into a heap requires maintaining the heap property, which takes O(log n) time.',
  },
  {
    name: 'Deletion (Extract Min/Max)',
    complexity: 'O(log n)',
    explanation:
      'Deleting the root element (min or max) from a heap requires maintaining the heap property, which takes O(log n) time.',
  },
  {
    name: 'Peek (Find Min/Max)',
    complexity: 'O(1)',
    explanation:
      'Accessing the root element (min or max) in a heap is a constant-time operation.',
  },
  {
    name: 'Search',
    complexity: 'O(n)',
    explanation:
      'Searching for an element in a heap requires iterating through all elements, which takes O(n) time.',
  },
])}
**Key Points:**
- Heaps are optimized for efficient insertion, deletion, and priority access operations.
- Searching for an element in a heap is inefficient due to the need to iterate through all elements.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    4,
    'Explain the difference between a heap and a binary search tree (BST).',
    `
  **Heaps:**
  - **Heap Property:** The key at each node is either greater than or equal to (in a max-heap) or less than or equal to (in a min-heap) the keys in its children.
  - **Complete Binary Tree:** Heaps are usually implemented as complete binary trees.
  - **Operations:** Efficient insertion and deletion (O(log n)), but not optimized for search operations.
  
  **Binary Search Trees (BST):**
  - **BST Property:** The key at each node is greater than or equal to the keys in its left subtree and less than or equal to the keys in its right subtree.
  - **Balanced Structure:** BSTs can become unbalanced, leading to inefficient operations.
  - **Operations:** Efficient search, insertion, and deletion (O(log n) in balanced BSTs), but can degrade to O(n) in unbalanced BSTs.
  
  **Key Points:**
  - Heaps are optimized for priority access and insertion/deletion, while BSTs are optimized for search operations.
  - Both data structures are tree-based but have different properties and use cases.
      `,
    Difficulty.Beginner,
  ),
  createConcept(
    5,
    'What are some common use cases for heaps in programming?',
    `
  **Common Use Cases for Heaps:**
  <ul>
    <li><strong>Priority Queues:</strong> Heaps are used to implement priority queues, where the highest (or lowest) priority element needs to be accessed quickly.</li>
    <li><strong>Dijkstra\'s Algorithm:</strong> Heaps are used in Dijkstra\'s algorithm for finding the shortest path in a graph.</li>
    <li><strong>Heap Sort:</strong> Heaps are used in the heap sort algorithm, which is an efficient sorting algorithm with O(n log n) time complexity.</li>
    <li><strong>Event Scheduling:</strong> Heaps are used in event scheduling systems to manage events based on their priority.</li>
    <li><strong>Median Maintenance:</strong> Heaps are used in algorithms to maintain the median of a stream of numbers efficiently.</li>
    <li><strong>Graph Algorithms:</strong> Heaps are used in various graph algorithms, such as Prim\'s algorithm for finding the minimum spanning tree.</li>
  </ul>
  
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
  
  **Key Points:**
  - Heaps are versatile and can be applied to various scenarios requiring efficient priority access and insertion/deletion.
  - Understanding the use cases helps in choosing the right data structure for a given problem.
      `,
    Difficulty.Beginner,
  ),
];
