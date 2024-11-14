import { Difficulty } from '@/common/commonConcept';
import { Curriculum, LessonContent, LessonsTab } from '@/common/commonLesson';

const heapCurriculum: Curriculum = {
  title: 'Heap Curriculum',
  description:
    'A comprehensive guide to mastering heap data structure and its applications',
  sections: [
    {
      id: 1,
      title: 'Heap Fundamentals',
      topics: [
        {
          id: 'heap-concept',
          title: 'Heap Concepts',
          description: 'Understanding heap properties, types, and structure',
        },
        {
          id: 'heap-implementation',
          title: 'Basic Heap Implementation',
          description: 'Implementing binary heap using arrays',
        },
        {
          id: 'heap-properties',
          title: 'Heap Properties',
          description:
            'Complete binary tree, heap order property, shape property',
        },
      ],
    },
    {
      id: 2,
      title: 'Basic Heap Operations',
      topics: [
        {
          id: 'heap-insertion',
          title: 'Insertion Operation',
          description: 'Adding elements and maintaining heap property',
        },
        {
          id: 'heap-extraction',
          title: 'Extraction Operation',
          description: 'Removing elements and restructuring heap',
        },
        {
          id: 'heapify',
          title: 'Heapify Process',
          description: 'Converting arrays into valid heaps',
        },
        {
          id: 'heap-update',
          title: 'Update Operations',
          description: 'Modifying elements and maintaining structure',
        },
      ],
    },
    {
      id: 3,
      title: 'Heap Types',
      topics: [
        {
          id: 'min-heap',
          title: 'Min Heap',
          description: 'Implementation and applications of min heap',
        },
        {
          id: 'max-heap',
          title: 'Max Heap',
          description: 'Implementation and applications of max heap',
        },
        {
          id: 'dual-heap',
          title: 'Dual Heap',
          description: 'Managing two heaps for median finding',
        },
      ],
    },
    {
      id: 4,
      title: 'Heap Sort',
      topics: [
        {
          id: 'heapsort-implementation',
          title: 'HeapSort Implementation',
          description: 'Understanding and implementing heapsort',
        },
        {
          id: 'heapsort-analysis',
          title: 'HeapSort Analysis',
          description: 'Time complexity and comparison with other sorts',
        },
        {
          id: 'heapsort-variations',
          title: 'HeapSort Variations',
          description: 'Optimizations and special cases',
        },
      ],
    },
    {
      id: 5,
      title: 'Priority Queue',
      topics: [
        {
          id: 'priority-queue-concept',
          title: 'Priority Queue Concepts',
          description:
            'Understanding priority queue implementation using heaps',
        },
        {
          id: 'priority-queue-operations',
          title: 'Priority Queue Operations',
          description: 'Implementing core priority queue functionality',
        },
        {
          id: 'priority-applications',
          title: 'Priority Queue Applications',
          description: 'Real-world applications and problem solving',
        },
      ],
    },
    {
      id: 6,
      title: 'Advanced Heap Variations',
      topics: [
        {
          id: 'binomial-heap',
          title: 'Binomial Heap',
          description: 'Understanding and implementing binomial heaps',
        },
        {
          id: 'fibonacci-heap',
          title: 'Fibonacci Heap',
          description: 'Understanding and implementing Fibonacci heaps',
        },
        {
          id: 'leftist-heap',
          title: 'Leftist Heap',
          description: 'Understanding and implementing leftist heaps',
        },
      ],
    },
    {
      id: 7,
      title: 'K-Way Operations',
      topics: [
        {
          id: 'k-way-merge',
          title: 'K-Way Merge',
          description: 'Merging k sorted arrays using heaps',
        },
        {
          id: 'k-smallest',
          title: 'K Smallest Elements',
          description: 'Finding k smallest elements in arrays/streams',
        },
        {
          id: 'k-closest',
          title: 'K Closest Points',
          description: 'Finding k closest points using heaps',
        },
      ],
    },
    {
      id: 8,
      title: 'Heap in Graph Algorithms',
      topics: [
        {
          id: 'dijkstra-heap',
          title: "Dijkstra's Algorithm with Heap",
          description: 'Using heap in shortest path algorithms',
        },
        {
          id: 'prim-heap',
          title: "Prim's Algorithm with Heap",
          description: 'Using heap in minimum spanning tree',
        },
        {
          id: 'network-optimization',
          title: 'Network Optimization',
          description: 'Heap applications in network algorithms',
        },
      ],
    },
    {
      id: 9,
      title: 'Advanced Applications',
      topics: [
        {
          id: 'stream-median',
          title: 'Stream Median',
          description: 'Finding median in data streams',
        },
        {
          id: 'scheduling',
          title: 'Task Scheduling',
          description: 'Solving scheduling problems using heaps',
        },
        {
          id: 'stock-price',
          title: 'Stock Price Operations',
          description: 'Managing stock prices using heaps',
        },
      ],
    },
    {
      id: 10,
      title: 'System Design with Heaps',
      topics: [
        {
          id: 'cache-implementation',
          title: 'Cache Design',
          description: 'Using heaps in cache implementations',
        },
        {
          id: 'load-balancing',
          title: 'Load Balancing',
          description: 'Heap-based load balancing strategies',
        },
        {
          id: 'resource-allocation',
          title: 'Resource Allocation',
          description: 'Managing system resources using heaps',
        },
      ],
    },
  ],
} as const;

const heapConceptsData: LessonContent = {
  title: 'Heap Concepts',
  content: `<p>
A heap is a specialized tree-based data structure that satisfies the heap property. Heaps are commonly used to implement priority queues and for sorting algorithms like heapsort.
</p>

<ul>
<li><strong>Heap Property:</strong> For a max-heap, the key of each node is greater than or equal to the keys of its children. For a min-heap, the key of each node is less than or equal to the keys of its children.</li>
<li><strong>Types of Heaps:</strong> Binary heap, Fibonacci heap, Binomial heap, etc.</li>
<li><strong>Structure:</strong> A heap is typically represented as a complete binary tree, which can be efficiently stored in an array.</li>
</ul>

<p>
Understanding heap concepts is crucial for efficient data manipulation and algorithm design.
</p>`,
  codeExample: `# Example of a max-heap
max_heap = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

# Example of a min-heap
min_heap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`,
  exercises: [
    {
      prompt: 'Identify whether the given array represents a max-heap or a min-heap.',
      initialCode: `# Write your solution here
max_heap = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
min_heap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`,
      solution: `def is_max_heap(arr):
    n = len(arr)
    for i in range(n):
        left = 2 * i + 1
        right = 2 * i + 2
        if left < n and arr[i] < arr[left]:
            return False
        if right < n and arr[i] < arr[right]:
            return False
    return True

def is_min_heap(arr):
    n = len(arr)
    for i in range(n):
        left = 2 * i + 1
        right = 2 * i + 2
        if left < n and arr[i] > arr[left]:
            return False
        if right < n and arr[i] > arr[right]:
            return False
    return True

max_heap = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
min_heap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

print("Is max_heap a max-heap?", is_max_heap(max_heap))
print("Is min_heap a min-heap?", is_min_heap(min_heap))`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'What is the heap property?',
      options: [
        'The key of each node is greater than or equal to the keys of its children in a max-heap, and less than or equal to the keys of its children in a min-heap.',
        'The key of each node is less than or equal to the keys of its children in a max-heap, and greater than or equal to the keys of its children in a min-heap.',
        'The key of each node is equal to the keys of its children.',
        'The key of each node is greater than the keys of its children in both max-heap and min-heap.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The heap property states that the key of each node is greater than or equal to the keys of its children in a max-heap, and less than or equal to the keys of its children in a min-heap.',
        'This is incorrect. The heap property is the opposite of this statement.',
        'This is incorrect. The heap property does not require the keys of each node to be equal to the keys of its children.',
        'This is incorrect. The heap property does not require the key of each node to be greater than the keys of its children in both max-heap and min-heap.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const basicHeapImplementationData: LessonContent = {
  title: 'Basic Heap Implementation',
  content: `<p>
A binary heap is a complete binary tree that satisfies the heap property. It can be efficiently implemented using an array.
</p>

<ul>
<li><strong>Array Representation:</strong> The root is stored at index 0, the left child of a node at index i is stored at index 2*i + 1, and the right child is stored at index 2*i + 2.</li>
<li><strong>Operations:</strong> Insertion, deletion, and heapify operations are fundamental to heap implementation.</li>
</ul>

<p>
Implementing a binary heap using an array is a foundational skill for working with heaps.
</p>`,
  codeExample: `# Basic binary heap implementation using an array
class BinaryHeap:
    def __init__(self):
        self.heap = []

    def insert(self, value):
        self.heap.append(value)
        self._heapify_up(len(self.heap) - 1)

    def delete(self):
        if len(self.heap) == 0:
            return None
        if len(self.heap) == 1:
            return self.heap.pop()
        root = self.heap[0]
        self.heap[0] = self.heap.pop()
        self._heapify_down(0)
        return root

    def _heapify_up(self, index):
        while index > 0:
            parent_index = (index - 1) // 2
            if self.heap[index] < self.heap[parent_index]:
                self.heap[index], self.heap[parent_index] = self.heap[parent_index], self.heap[index]
                index = parent_index
            else:
                break

    def _heapify_down(self, index):
        while True:
            left_child_index = 2 * index + 1
            right_child_index = 2 * index + 2
            smallest = index

            if left_child_index < len(self.heap) and self.heap[left_child_index] < self.heap[smallest]:
                smallest = left_child_index

            if right_child_index < len(self.heap) and self.heap[right_child_index] < self.heap[smallest]:
                smallest = right_child_index

            if smallest != index:
                self.heap[index], self.heap[smallest] = self.heap[smallest], self.heap[index]
                index = smallest
            else:
                break

# Example usage
heap = BinaryHeap()
heap.insert(3)
heap.insert(2)
heap.insert(1)
print("Heap after insertions:", heap.heap)
print("Deleted element:", heap.delete())
print("Heap after deletion:", heap.heap)`,
  exercises: [
    {
      prompt: 'Implement a basic binary heap using an array and perform insertion and deletion operations.',
      initialCode: `# Write your solution here
class BinaryHeap:
    def __init__(self):
        self.heap = []

    def insert(self, value):
        # Implement insertion

    def delete(self):
        # Implement deletion

    def _heapify_up(self, index):
        # Implement heapify up

    def _heapify_down(self, index):
        # Implement heapify down

# Example usage
heap = BinaryHeap()
heap.insert(3)
heap.insert(2)
heap.insert(1)
print("Heap after insertions:", heap.heap)
print("Deleted element:", heap.delete())
print("Heap after deletion:", heap.heap)`,
      solution: `class BinaryHeap:
    def __init__(self):
        self.heap = []

    def insert(self, value):
        self.heap.append(value)
        self._heapify_up(len(self.heap) - 1)

    def delete(self):
        if len(self.heap) == 0:
            return None
        if len(self.heap) == 1:
            return self.heap.pop()
        root = self.heap[0]
        self.heap[0] = self.heap.pop()
        self._heapify_down(0)
        return root

    def _heapify_up(self, index):
        while index > 0:
            parent_index = (index - 1) // 2
            if self.heap[index] < self.heap[parent_index]:
                self.heap[index], self.heap[parent_index] = self.heap[parent_index], self.heap[index]
                index = parent_index
            else:
                break

    def _heapify_down(self, index):
        while True:
            left_child_index = 2 * index + 1
            right_child_index = 2 * index + 2
            smallest = index

            if left_child_index < len(self.heap) and self.heap[left_child_index] < self.heap[smallest]:
                smallest = left_child_index

            if right_child_index < len(self.heap) and self.heap[right_child_index] < self.heap[smallest]:
                smallest = right_child_index

            if smallest != index:
                self.heap[index], self.heap[smallest] = self.heap[smallest], self.heap[index]
                index = smallest
            else:
                break

# Example usage
heap = BinaryHeap()
heap.insert(3)
heap.insert(2)
heap.insert(1)
print("Heap after insertions:", heap.heap)
print("Deleted element:", heap.delete())
print("Heap after deletion:", heap.heap)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the advantage of using an array to represent a binary heap?',
      options: [
        'It allows for efficient storage and access of heap elements.',
        'It simplifies the implementation of heap operations.',
        'It reduces the time complexity of heap operations.',
        'It makes the heap structure more intuitive.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. Using an array to represent a binary heap allows for efficient storage and access of heap elements.',
        'This is incorrect. While it does simplify the implementation, the primary advantage is efficient storage and access.',
        'This is incorrect. The time complexity of heap operations is not reduced by using an array, but the operations are still efficient.',
        'This is incorrect. The array representation is not necessarily more intuitive than other representations.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const heapPropertiesData: LessonContent = {
  title: 'Heap Properties',
  content: `<p>
Heaps have specific properties that define their structure and behavior. Understanding these properties is essential for working with heaps effectively.
</p>

<ul>
<li><strong>Complete Binary Tree:</strong> A heap is a complete binary tree, meaning all levels are completely filled except possibly the last level, which is filled from left to right.</li>
<li><strong>Heap Order Property:</strong> For a max-heap, the key of each node is greater than or equal to the keys of its children. For a min-heap, the key of each node is less than or equal to the keys of its children.</li>
<li><strong>Shape Property:</strong> The shape of a heap is always a complete binary tree, which ensures efficient storage and access.</li>
</ul>

<p>
These properties ensure that heaps can be efficiently implemented and manipulated.
</p>`,
  codeExample: `# Example of a complete binary tree represented as an array
complete_binary_tree = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Example of a max-heap
max_heap = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

# Example of a min-heap
min_heap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`,
  exercises: [
    {
      prompt: 'Verify if the given array represents a complete binary tree and a valid heap.',
      initialCode: `# Write your solution here
complete_binary_tree = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
max_heap = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
min_heap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`,
      solution: `def is_complete_binary_tree(arr):
    n = len(arr)
    for i in range(n):
        left = 2 * i + 1
        right = 2 * i + 2
        if left < n and right < n and arr[left] is None and arr[right] is not None:
            return False
    return True

def is_max_heap(arr):
    n = len(arr)
    for i in range(n):
        left = 2 * i + 1
        right = 2 * i + 2
        if left < n and arr[i] < arr[left]:
            return False
        if right < n and arr[i] < arr[right]:
            return False
    return True

def is_min_heap(arr):
    n = len(arr)
    for i in range(n):
        left = 2 * i + 1
        right = 2 * i + 2
        if left < n and arr[i] > arr[left]:
            return False
        if right < n and arr[i] > arr[right]:
            return False
    return True

complete_binary_tree = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
max_heap = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
min_heap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

print("Is complete_binary_tree a complete binary tree?", is_complete_binary_tree(complete_binary_tree))
print("Is max_heap a max-heap?", is_max_heap(max_heap))
print("Is min_heap a min-heap?", is_min_heap(min_heap))`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the shape property of a heap?',
      options: [
        'A heap is a complete binary tree.',
        'A heap is a balanced binary tree.',
        'A heap is a full binary tree.',
        'A heap is a binary search tree.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The shape property of a heap is that it is a complete binary tree.',
        'This is incorrect. While a heap is balanced in terms of height, the shape property specifically refers to it being a complete binary tree.',
        'This is incorrect. A full binary tree is not the same as a complete binary tree.',
        'This is incorrect. A heap is not a binary search tree.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const heapInsertionData: LessonContent = {
  title: 'Insertion Operation',
  content: `<p>
The insertion operation in a heap involves adding a new element to the heap while maintaining the heap property. This is typically done by inserting the element at the end of the heap and then "bubbling up" the element to its correct position.
</p>

<ul>
<li><strong>Insertion:</strong> Add the new element at the end of the heap.</li>
<li><strong>Bubble Up:</strong> Compare the new element with its parent and swap if necessary to maintain the heap property.</li>
</ul>

<p>
Insertion operations are crucial for maintaining the integrity of the heap structure.
</p>`,
  codeExample: `# Insertion operation in a min-heap
class MinHeap:
    def __init__(self):
        self.heap = []

    def insert(self, value):
        self.heap.append(value)
        self._bubble_up(len(self.heap) - 1)

    def _bubble_up(self, index):
        while index > 0:
            parent_index = (index - 1) // 2
            if self.heap[index] < self.heap[parent_index]:
                self.heap[index], self.heap[parent_index] = self.heap[parent_index], self.heap[index]
                index = parent_index
            else:
                break

# Example usage
heap = MinHeap()
heap.insert(3)
heap.insert(2)
heap.insert(1)
print("Heap after insertions:", heap.heap)`,
  exercises: [
    {
      prompt: 'Implement the insertion operation for a min-heap and insert the given elements.',
      initialCode: `# Write your solution here
class MinHeap:
    def __init__(self):
        self.heap = []

    def insert(self, value):
        # Implement insertion

    def _bubble_up(self, index):
        # Implement bubble up

# Example usage
heap = MinHeap()
heap.insert(3)
heap.insert(2)
heap.insert(1)
print("Heap after insertions:", heap.heap)`,
      solution: `class MinHeap:
    def __init__(self):
        self.heap = []

    def insert(self, value):
        self.heap.append(value)
        self._bubble_up(len(self.heap) - 1)

    def _bubble_up(self, index):
        while index > 0:
            parent_index = (index - 1) // 2
            if self.heap[index] < self.heap[parent_index]:
                self.heap[index], self.heap[parent_index] = self.heap[parent_index], self.heap[index]
                index = parent_index
            else:
                break

# Example usage
heap = MinHeap()
heap.insert(3)
heap.insert(2)
heap.insert(1)
print("Heap after insertions:", heap.heap)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the purpose of the bubble-up operation in heap insertion?',
      options: [
        'To maintain the heap property by moving the newly inserted element to its correct position.',
        'To remove the smallest element from the heap.',
        'To sort the entire heap.',
        'To find the maximum element in the heap.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The bubble-up operation is used to maintain the heap property by moving the newly inserted element to its correct position.',
        'This is incorrect. The bubble-up operation is not used to remove elements from the heap.',
        'This is incorrect. The bubble-up operation is not used to sort the entire heap.',
        'This is incorrect. The bubble-up operation is not used to find the maximum element in the heap.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const heapExtractionData: LessonContent = {
  title: 'Extraction Operation',
  content: `<p>
The extraction operation in a heap involves removing the root element (the smallest or largest element depending on whether it is a min-heap or max-heap) and then restructuring the heap to maintain the heap property.
</p>

<ul>
<li><strong>Extraction:</strong> Remove the root element.</li>
<li><strong>Bubble Down:</strong> Move the last element to the root position and then "bubble down" the element to its correct position.</li>
</ul>

<p>
Extraction operations are crucial for retrieving the most prioritized element from the heap.
</p>`,
  codeExample: `# Extraction operation in a min-heap
class MinHeap:
    def __init__(self):
        self.heap = []

    def extract_min(self):
        if len(self.heap) == 0:
            return None
        if len(self.heap) == 1:
            return self.heap.pop()
        root = self.heap[0]
        self.heap[0] = self.heap.pop()
        self._bubble_down(0)
        return root

    def _bubble_down(self, index):
        while True:
            left_child_index = 2 * index + 1
            right_child_index = 2 * index + 2
            smallest = index

            if left_child_index < len(self.heap) and self.heap[left_child_index] < self.heap[smallest]:
                smallest = left_child_index

            if right_child_index < len(self.heap) and self.heap[right_child_index] < self.heap[smallest]:
                smallest = right_child_index

            if smallest != index:
                self.heap[index], self.heap[smallest] = self.heap[smallest], self.heap[index]
                index = smallest
            else:
                break

# Example usage
heap = MinHeap()
heap.heap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print("Extracted min element:", heap.extract_min())
print("Heap after extraction:", heap.heap)`,
  exercises: [
    {
      prompt: 'Implement the extraction operation for a min-heap and extract the root element.',
      initialCode: `# Write your solution here
class MinHeap:
    def __init__(self):
        self.heap = []

    def extract_min(self):
        # Implement extraction

    def _bubble_down(self, index):
        # Implement bubble down

# Example usage
heap = MinHeap()
heap.heap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print("Extracted min element:", heap.extract_min())
print("Heap after extraction:", heap.heap)`,
      solution: `class MinHeap:
    def __init__(self):
        self.heap = []

    def extract_min(self):
        if len(self.heap) == 0:
            return None
        if len(self.heap) == 1:
            return self.heap.pop()
        root = self.heap[0]
        self.heap[0] = self.heap.pop()
        self._bubble_down(0)
        return root

    def _bubble_down(self, index):
        while True:
            left_child_index = 2 * index + 1
            right_child_index = 2 * index + 2
            smallest = index

            if left_child_index < len(self.heap) and self.heap[left_child_index] < self.heap[smallest]:
                smallest = left_child_index

            if right_child_index < len(self.heap) and self.heap[right_child_index] < self.heap[smallest]:
                smallest = right_child_index

            if smallest != index:
                self.heap[index], self.heap[smallest] = self.heap[smallest], self.heap[index]
                index = smallest
            else:
                break

# Example usage
heap = MinHeap()
heap.heap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print("Extracted min element:", heap.extract_min())
print("Heap after extraction:", heap.heap)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the purpose of the bubble-down operation in heap extraction?',
      options: [
        'To maintain the heap property by moving the root element to its correct position.',
        'To insert a new element into the heap.',
        'To sort the entire heap.',
        'To find the maximum element in the heap.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The bubble-down operation is used to maintain the heap property by moving the root element to its correct position.',
        'This is incorrect. The bubble-down operation is not used to insert new elements into the heap.',
        'This is incorrect. The bubble-down operation is not used to sort the entire heap.',
        'This is incorrect. The bubble-down operation is not used to find the maximum element in the heap.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const heapifyData: LessonContent = {
  title: 'Heapify Process',
  content: `<p>
The heapify process involves converting an array into a valid heap. This is typically done by starting from the last non-leaf node and "bubbling down" each element to its correct position.
</p>

<ul>
<li><strong>Heapify:</strong> Convert an array into a heap by ensuring that each node satisfies the heap property.</li>
<li><strong>Bubble Down:</strong> Move elements down the heap to their correct positions.</li>
</ul>

<p>
Heapify is a fundamental operation for initializing heaps and for heap-based algorithms like heapsort.
</p>`,
  codeExample: `# Heapify process for a min-heap
def heapify(arr):
    n = len(arr)
    for i in range(n // 2 - 1, -1, -1):
        _bubble_down(arr, n, i)

def _bubble_down(arr, n, index):
    smallest = index
    left_child_index = 2 * index + 1
    right_child_index = 2 * index + 2

    if left_child_index < n and arr[left_child_index] < arr[smallest]:
        smallest = left_child_index

    if right_child_index < n and arr[right_child_index] < arr[smallest]:
        smallest = right_child_index

    if smallest != index:
        arr[index], arr[smallest] = arr[smallest], arr[index]
        _bubble_down(arr, n, smallest)

# Example usage
arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
heapify(arr)
print("Heapified array:", arr)`,
  exercises: [
    {
      prompt: 'Implement the heapify process for a min-heap and convert the given array into a valid heap.',
      initialCode: `# Write your solution here
def heapify(arr):
    # Implement heapify

def _bubble_down(arr, n, index):
    # Implement bubble down

# Example usage
arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
heapify(arr)
print("Heapified array:", arr)`,
      solution: `def heapify(arr):
    n = len(arr)
    for i in range(n // 2 - 1, -1, -1):
        _bubble_down(arr, n, i)

def _bubble_down(arr, n, index):
    smallest = index
    left_child_index = 2 * index + 1
    right_child_index = 2 * index + 2

    if left_child_index < n and arr[left_child_index] < arr[smallest]:
        smallest = left_child_index

    if right_child_index < n and arr[right_child_index] < arr[smallest]:
        smallest = right_child_index

    if smallest != index:
        arr[index], arr[smallest] = arr[smallest], arr[index]
        _bubble_down(arr, n, smallest)

# Example usage
arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
heapify(arr)
print("Heapified array:", arr)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the purpose of the heapify process?',
      options: [
        'To convert an array into a valid heap.',
        'To insert a new element into the heap.',
        'To sort the entire heap.',
        'To find the maximum element in the heap.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The heapify process is used to convert an array into a valid heap.',
        'This is incorrect. The heapify process is not used to insert new elements into the heap.',
        'This is incorrect. The heapify process is not used to sort the entire heap.',
        'This is incorrect. The heapify process is not used to find the maximum element in the heap.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const heapUpdateData: LessonContent = {
  title: 'Update Operations',
  content: `<p>
Update operations in a heap involve modifying the value of an existing element and then re-establishing the heap property. This can involve either increasing or decreasing the value of an element.
</p>

<ul>
<li><strong>Increase Key:</strong> Increase the value of an element and then "bubble up" the element to maintain the heap property.</li>
<li><strong>Decrease Key:</strong> Decrease the value of an element and then "bubble down" the element to maintain the heap property.</li>
</ul>

<p>
Update operations are important for dynamic data structures where elements may need to be modified frequently.
</p>`,
  codeExample: `# Update operation in a min-heap
class MinHeap:
    def __init__(self):
        self.heap = []

    def increase_key(self, index, new_value):
        if new_value < self.heap[index]:
            raise ValueError("New value is smaller than current value")
        self.heap[index] = new_value
        self._bubble_up(index)

    def decrease_key(self, index, new_value):
        if new_value > self.heap[index]:
            raise ValueError("New value is larger than current value")
        self.heap[index] = new_value
        self._bubble_down(index)

    def _bubble_up(self, index):
        while index > 0:
            parent_index = (index - 1) // 2
            if self.heap[index] < self.heap[parent_index]:
                self.heap[index], self.heap[parent_index] = self.heap[parent_index], self.heap[index]
                index = parent_index
            else:
                break

    def _bubble_down(self, index):
        while True:
            left_child_index = 2 * index + 1
            right_child_index = 2 * index + 2
            smallest = index

            if left_child_index < len(self.heap) and self.heap[left_child_index] < self.heap[smallest]:
                smallest = left_child_index

            if right_child_index < len(self.heap) and self.heap[right_child_index] < self.heap[smallest]:
                smallest = right_child_index

            if smallest != index:
                self.heap[index], self.heap[smallest] = self.heap[smallest], self.heap[index]
                index = smallest
            else:
                break

# Example usage
heap = MinHeap()
heap.heap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
heap.increase_key(9, 11)
print("Heap after increasing key:", heap.heap)
heap.decrease_key(0, 0)
print("Heap after decreasing key:", heap.heap)`,
  exercises: [
    {
      prompt: 'Implement the update operations for a min-heap and modify the given elements.',
      initialCode: `# Write your solution here
class MinHeap:
    def __init__(self):
        self.heap = []

    def increase_key(self, index, new_value):
        # Implement increase key

    def decrease_key(self, index, new_value):
        # Implement decrease key

    def _bubble_up(self, index):
        # Implement bubble up

    def _bubble_down(self, index):
        # Implement bubble down

# Example usage
heap = MinHeap()
heap.heap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
heap.increase_key(9, 11)
print("Heap after increasing key:", heap.heap)
heap.decrease_key(0, 0)
print("Heap after decreasing key:", heap.heap)`,
      solution: `class MinHeap:
    def __init__(self):
        self.heap = []

    def increase_key(self, index, new_value):
        if new_value < self.heap[index]:
            raise ValueError("New value is smaller than current value")
        self.heap[index] = new_value
        self._bubble_up(index)

    def decrease_key(self, index, new_value):
        if new_value > self.heap[index]:
            raise ValueError("New value is larger than current value")
        self.heap[index] = new_value
        self._bubble_down(index)

    def _bubble_up(self, index):
        while index > 0:
            parent_index = (index - 1) // 2
            if self.heap[index] < self.heap[parent_index]:
                self.heap[index], self.heap[parent_index] = self.heap[parent_index], self.heap[index]
                index = parent_index
            else:
                break

    def _bubble_down(self, index):
        while True:
            left_child_index = 2 * index + 1
            right_child_index = 2 * index + 2
            smallest = index

            if left_child_index < len(self.heap) and self.heap[left_child_index] < self.heap[smallest]:
                smallest = left_child_index

            if right_child_index < len(self.heap) and self.heap[right_child_index] < self.heap[smallest]:
                smallest = right_child_index

            if smallest != index:
                self.heap[index], self.heap[smallest] = self.heap[smallest], self.heap[index]
                index = smallest
            else:
                break

# Example usage
heap = MinHeap()
heap.heap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
heap.increase_key(9, 11)
print("Heap after increasing key:", heap.heap)
heap.decrease_key(0, 0)
print("Heap after decreasing key:", heap.heap)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the purpose of the increase key operation in a heap?',
      options: [
        'To increase the value of an element and then re-establish the heap property.',
        'To insert a new element into the heap.',
        'To sort the entire heap.',
        'To find the maximum element in the heap.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The increase key operation is used to increase the value of an element and then re-establish the heap property.',
        'This is incorrect. The increase key operation is not used to insert new elements into the heap.',
        'This is incorrect. The increase key operation is not used to sort the entire heap.',
        'This is incorrect. The increase key operation is not used to find the maximum element in the heap.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const minHeapData: LessonContent = {
  title: 'Min Heap',
  content: `<p>
A min-heap is a binary heap where the parent node always has a smaller value than its children. This property ensures that the smallest element is always at the root of the heap.
</p>

<ul>
<li><strong>Implementation:</strong> A min-heap can be implemented using an array, where the root is at index 0, and for any node at index i, its left child is at index 2*i + 1 and its right child is at index 2*i + 2.</li>
<li><strong>Applications:</strong> Min-heaps are commonly used in priority queues, where the highest priority element (smallest value) needs to be accessed quickly.</li>
</ul>

<p>
Understanding min-heaps is essential for efficient data manipulation and algorithm design.
</p>`,
  codeExample: `# Min-heap implementation using an array
class MinHeap:
    def __init__(self):
        self.heap = []

    def insert(self, value):
        self.heap.append(value)
        self._bubble_up(len(self.heap) - 1)

    def extract_min(self):
        if len(self.heap) == 0:
            return None
        if len(self.heap) == 1:
            return self.heap.pop()
        root = self.heap[0]
        self.heap[0] = self.heap.pop()
        self._bubble_down(0)
        return root

    def _bubble_up(self, index):
        while index > 0:
            parent_index = (index - 1) // 2
            if self.heap[index] < self.heap[parent_index]:
                self.heap[index], self.heap[parent_index] = self.heap[parent_index], self.heap[index]
                index = parent_index
            else:
                break

    def _bubble_down(self, index):
        while True:
            left_child_index = 2 * index + 1
            right_child_index = 2 * index + 2
            smallest = index

            if left_child_index < len(self.heap) and self.heap[left_child_index] < self.heap[smallest]:
                smallest = left_child_index

            if right_child_index < len(self.heap) and self.heap[right_child_index] < self.heap[smallest]:
                smallest = right_child_index

            if smallest != index:
                self.heap[index], self.heap[smallest] = self.heap[smallest], self.heap[index]
                index = smallest
            else:
                break

# Example usage
heap = MinHeap()
heap.insert(3)
heap.insert(2)
heap.insert(1)
print("Min element:", heap.extract_min())
print("Heap after extraction:", heap.heap)`,
  exercises: [
    {
      prompt: 'Implement a min-heap and perform insertion and extraction operations.',
      initialCode: `# Write your solution here
class MinHeap:
    def __init__(self):
        self.heap = []

    def insert(self, value):
        # Implement insertion

    def extract_min(self):
        # Implement extraction

    def _bubble_up(self, index):
        # Implement bubble up

    def _bubble_down(self, index):
        # Implement bubble down

# Example usage
heap = MinHeap()
heap.insert(3)
heap.insert(2)
heap.insert(1)
print("Min element:", heap.extract_min())
print("Heap after extraction:", heap.heap)`,
      solution: `class MinHeap:
    def __init__(self):
        self.heap = []

    def insert(self, value):
        self.heap.append(value)
        self._bubble_up(len(self.heap) - 1)

    def extract_min(self):
        if len(self.heap) == 0:
            return None
        if len(self.heap) == 1:
            return self.heap.pop()
        root = self.heap[0]
        self.heap[0] = self.heap.pop()
        self._bubble_down(0)
        return root

    def _bubble_up(self, index):
        while index > 0:
            parent_index = (index - 1) // 2
            if self.heap[index] < self.heap[parent_index]:
                self.heap[index], self.heap[parent_index] = self.heap[parent_index], self.heap[index]
                index = parent_index
            else:
                break

    def _bubble_down(self, index):
        while True:
            left_child_index = 2 * index + 1
            right_child_index = 2 * index + 2
            smallest = index

            if left_child_index < len(self.heap) and self.heap[left_child_index] < self.heap[smallest]:
                smallest = left_child_index

            if right_child_index < len(self.heap) and self.heap[right_child_index] < self.heap[smallest]:
                smallest = right_child_index

            if smallest != index:
                self.heap[index], self.heap[smallest] = self.heap[smallest], self.heap[index]
                index = smallest
            else:
                break

# Example usage
heap = MinHeap()
heap.insert(3)
heap.insert(2)
heap.insert(1)
print("Min element:", heap.extract_min())
print("Heap after extraction:", heap.heap)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary property of a min-heap?',
      options: [
        'The parent node always has a smaller value than its children.',
        'The parent node always has a larger value than its children.',
        'The heap is always balanced.',
        'The heap is always sorted.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. In a min-heap, the parent node always has a smaller value than its children.',
        'This is incorrect. This describes a max-heap, not a min-heap.',
        'This is incorrect. While a heap is balanced in terms of height, this is not the primary property of a min-heap.',
        'This is incorrect. A heap is not necessarily sorted; it only maintains the heap property.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const maxHeapData: LessonContent = {
  title: 'Max Heap',
  content: `<p>
A max-heap is a binary heap where the parent node always has a larger value than its children. This property ensures that the largest element is always at the root of the heap.
</p>

<ul>
<li><strong>Implementation:</strong> A max-heap can be implemented using an array, where the root is at index 0, and for any node at index i, its left child is at index 2*i + 1 and its right child is at index 2*i + 2.</li>
<li><strong>Applications:</strong> Max-heaps are commonly used in priority queues, where the highest priority element (largest value) needs to be accessed quickly.</li>
</ul>

<p>
Understanding max-heaps is essential for efficient data manipulation and algorithm design.
</p>`,
  codeExample: `# Max-heap implementation using an array
class MaxHeap:
    def __init__(self):
        self.heap = []

    def insert(self, value):
        self.heap.append(value)
        self._bubble_up(len(self.heap) - 1)

    def extract_max(self):
        if len(self.heap) == 0:
            return None
        if len(self.heap) == 1:
            return self.heap.pop()
        root = self.heap[0]
        self.heap[0] = self.heap.pop()
        self._bubble_down(0)
        return root

    def _bubble_up(self, index):
        while index > 0:
            parent_index = (index - 1) // 2
            if self.heap[index] > self.heap[parent_index]:
                self.heap[index], self.heap[parent_index] = self.heap[parent_index], self.heap[index]
                index = parent_index
            else:
                break

    def _bubble_down(self, index):
        while True:
            left_child_index = 2 * index + 1
            right_child_index = 2 * index + 2
            largest = index

            if left_child_index < len(self.heap) and self.heap[left_child_index] > self.heap[largest]:
                largest = left_child_index

            if right_child_index < len(self.heap) and self.heap[right_child_index] > self.heap[largest]:
                largest = right_child_index

            if largest != index:
                self.heap[index], self.heap[largest] = self.heap[largest], self.heap[index]
                index = largest
            else:
                break

# Example usage
heap = MaxHeap()
heap.insert(3)
heap.insert(2)
heap.insert(1)
print("Max element:", heap.extract_max())
print("Heap after extraction:", heap.heap)`,
  exercises: [
    {
      prompt: 'Implement a max-heap and perform insertion and extraction operations.',
      initialCode: `# Write your solution here
class MaxHeap:
    def __init__(self):
        self.heap = []

    def insert(self, value):
        # Implement insertion

    def extract_max(self):
        # Implement extraction

    def _bubble_up(self, index):
        # Implement bubble up

    def _bubble_down(self, index):
        # Implement bubble down

# Example usage
heap = MaxHeap()
heap.insert(3)
heap.insert(2)
heap.insert(1)
print("Max element:", heap.extract_max())
print("Heap after extraction:", heap.heap)`,
      solution: `class MaxHeap:
    def __init__(self):
        self.heap = []

    def insert(self, value):
        self.heap.append(value)
        self._bubble_up(len(self.heap) - 1)

    def extract_max(self):
        if len(self.heap) == 0:
            return None
        if len(self.heap) == 1:
            return self.heap.pop()
        root = self.heap[0]
        self.heap[0] = self.heap.pop()
        self._bubble_down(0)
        return root

    def _bubble_up(self, index):
        while index > 0:
            parent_index = (index - 1) // 2
            if self.heap[index] > self.heap[parent_index]:
                self.heap[index], self.heap[parent_index] = self.heap[parent_index], self.heap[index]
                index = parent_index
            else:
                break

    def _bubble_down(self, index):
        while True:
            left_child_index = 2 * index + 1
            right_child_index = 2 * index + 2
            largest = index

            if left_child_index < len(self.heap) and self.heap[left_child_index] > self.heap[largest]:
                largest = left_child_index

            if right_child_index < len(self.heap) and self.heap[right_child_index] > self.heap[largest]:
                largest = right_child_index

            if largest != index:
                self.heap[index], self.heap[largest] = self.heap[largest], self.heap[index]
                index = largest
            else:
                break

# Example usage
heap = MaxHeap()
heap.insert(3)
heap.insert(2)
heap.insert(1)
print("Max element:", heap.extract_max())
print("Heap after extraction:", heap.heap)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary property of a max-heap?',
      options: [
        'The parent node always has a larger value than its children.',
        'The parent node always has a smaller value than its children.',
        'The heap is always balanced.',
        'The heap is always sorted.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. In a max-heap, the parent node always has a larger value than its children.',
        'This is incorrect. This describes a min-heap, not a max-heap.',
        'This is incorrect. While a heap is balanced in terms of height, this is not the primary property of a max-heap.',
        'This is incorrect. A heap is not necessarily sorted; it only maintains the heap property.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const dualHeapData: LessonContent = {
  title: 'Dual Heap',
  content: `<p>
A dual heap, also known as a double-ended heap, is a data structure that manages two heaps (usually a min-heap and a max-heap) to efficiently find the median of a data stream.
</p>

<ul>
<li><strong>Implementation:</strong> A dual heap consists of two heaps: a min-heap for the larger half of the elements and a max-heap for the smaller half. The median can be found by accessing the root of one or both heaps.</li>
<li><strong>Applications:</strong> Dual heaps are used in scenarios where the median of a dynamic data stream needs to be maintained efficiently, such as in streaming algorithms and financial data analysis.</li>
</ul>

<p>
Understanding dual heaps is essential for efficient median-finding in dynamic data streams.
</p>`,
  codeExample: `# Dual heap implementation for median finding
class DualHeap:
    def __init__(self):
        self.min_heap = []
        self.max_heap = []

    def insert(self, value):
        if len(self.max_heap) == 0 or value <= -self.max_heap[0]:
            self._insert_max_heap(value)
        else:
            self._insert_min_heap(value)
        self._balance_heaps()

    def get_median(self):
        if len(self.max_heap) == len(self.min_heap):
            return (-self.max_heap[0] + self.min_heap[0]) / 2
        elif len(self.max_heap) > len(self.min_heap):
            return -self.max_heap[0]
        else:
            return self.min_heap[0]

    def _insert_max_heap(self, value):
        heapq.heappush(self.max_heap, -value)

    def _insert_min_heap(self, value):
        heapq.heappush(self.min_heap, value)

    def _balance_heaps(self):
        if len(self.max_heap) > len(self.min_heap) + 1:
            self._insert_min_heap(-heapq.heappop(self.max_heap))
        elif len(self.min_heap) > len(self.max_heap) + 1:
            self._insert_max_heap(-heapq.heappop(self.min_heap))

# Example usage
import heapq
dual_heap = DualHeap()
dual_heap.insert(3)
dual_heap.insert(2)
dual_heap.insert(1)
print("Median:", dual_heap.get_median())`,
  exercises: [
    {
      prompt: 'Implement a dual heap for median finding and insert the given elements.',
      initialCode: `# Write your solution here
class DualHeap:
    def __init__(self):
        self.min_heap = []
        self.max_heap = []

    def insert(self, value):
        # Implement insertion

    def get_median(self):
        # Implement median finding

    def _insert_max_heap(self, value):
        # Implement max heap insertion

    def _insert_min_heap(self, value):
        # Implement min heap insertion

    def _balance_heaps(self):
        # Implement heap balancing

# Example usage
import heapq
dual_heap = DualHeap()
dual_heap.insert(3)
dual_heap.insert(2)
dual_heap.insert(1)
print("Median:", dual_heap.get_median())`,
      solution: `class DualHeap:
    def __init__(self):
        self.min_heap = []
        self.max_heap = []

    def insert(self, value):
        if len(self.max_heap) == 0 or value <= -self.max_heap[0]:
            self._insert_max_heap(value)
        else:
            self._insert_min_heap(value)
        self._balance_heaps()

    def get_median(self):
        if len(self.max_heap) == len(self.min_heap):
            return (-self.max_heap[0] + self.min_heap[0]) / 2
        elif len(self.max_heap) > len(self.min_heap):
            return -self.max_heap[0]
        else:
            return self.min_heap[0]

    def _insert_max_heap(self, value):
        heapq.heappush(self.max_heap, -value)

    def _insert_min_heap(self, value):
        heapq.heappush(self.min_heap, value)

    def _balance_heaps(self):
        if len(self.max_heap) > len(self.min_heap) + 1:
            self._insert_min_heap(-heapq.heappop(self.max_heap))
        elif len(self.min_heap) > len(self.max_heap) + 1:
            self._insert_max_heap(-heapq.heappop(self.min_heap))

# Example usage
import heapq
dual_heap = DualHeap()
dual_heap.insert(3)
dual_heap.insert(2)
dual_heap.insert(1)
print("Median:", dual_heap.get_median())`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary purpose of a dual heap?',
      options: [
        'To efficiently find the median of a dynamic data stream.',
        'To sort a list of elements.',
        'To find the maximum element in a list.',
        'To find the minimum element in a list.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. A dual heap is used to efficiently find the median of a dynamic data stream.',
        'This is incorrect. Sorting is not the primary purpose of a dual heap.',
        'This is incorrect. Finding the maximum element is not the primary purpose of a dual heap.',
        'This is incorrect. Finding the minimum element is not the primary purpose of a dual heap.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const heapSortImplementationData: LessonContent = {
  title: 'HeapSort Implementation',
  content: `<p>
HeapSort is a comparison-based sorting algorithm that uses a binary heap data structure. It is an in-place algorithm with a worst-case time complexity of O(n log n).
</p>

<ul>
<li><strong>Heapify:</strong> Convert the array into a max-heap.</li>
<li><strong>Sorting:</strong> Repeatedly extract the maximum element from the heap and place it at the end of the array.</li>
</ul>

<p>
Understanding and implementing HeapSort is crucial for efficient sorting of large datasets.
</p>`,
  codeExample: `# HeapSort implementation
def heapify(arr, n, i):
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2

    if left < n and arr[left] > arr[largest]:
        largest = left

    if right < n and arr[right] > arr[largest]:
        largest = right

    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)

def heap_sort(arr):
    n = len(arr)

    # Build a max-heap
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)

    # Extract elements one by one
    for i in range(n - 1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]
        heapify(arr, i, 0)

# Example usage
arr = [12, 11, 13, 5, 6, 7]
heap_sort(arr)
print("Sorted array:", arr)`,
  exercises: [
    {
      prompt: 'Implement the HeapSort algorithm and sort the given array.',
      initialCode: `# Write your solution here
def heapify(arr, n, i):
    # Implement heapify

def heap_sort(arr):
    # Implement heap sort

# Example usage
arr = [12, 11, 13, 5, 6, 7]
heap_sort(arr)
print("Sorted array:", arr)`,
      solution: `def heapify(arr, n, i):
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2

    if left < n and arr[left] > arr[largest]:
        largest = left

    if right < n and arr[right] > arr[largest]:
        largest = right

    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)

def heap_sort(arr):
    n = len(arr)

    # Build a max-heap
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)

    # Extract elements one by one
    for i in range(n - 1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]
        heapify(arr, i, 0)

# Example usage
arr = [12, 11, 13, 5, 6, 7]
heap_sort(arr)
print("Sorted array:", arr)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary step in implementing HeapSort?',
      options: [
        'Convert the array into a max-heap.',
        'Sort the array using a bubble sort algorithm.',
        'Find the minimum element in the array.',
        'Use a merge sort algorithm.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The primary step in implementing HeapSort is to convert the array into a max-heap.',
        'This is incorrect. HeapSort does not use a bubble sort algorithm.',
        'This is incorrect. Finding the minimum element is not the primary step in HeapSort.',
        'This is incorrect. HeapSort does not use a merge sort algorithm.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const heapSortAnalysisData: LessonContent = {
  title: 'HeapSort Analysis',
  content: `<p>
HeapSort is known for its efficiency and stability. It has a time complexity of O(n log n) in the worst, average, and best cases, making it suitable for large datasets.
</p>

<ul>
<li><strong>Time Complexity:</strong> O(n log n) for all cases.</li>
<li><strong>Space Complexity:</strong> O(1) for in-place sorting.</li>
<li><strong>Comparison with Other Sorts:</strong> HeapSort is often compared with QuickSort and MergeSort. While QuickSort has a better average-case time complexity, HeapSort is more stable and has a guaranteed worst-case performance.</li>
</ul>

<p>
Analyzing HeapSort helps in understanding its efficiency and suitability for different scenarios.
</p>`,
  codeExample: `# Time complexity analysis of HeapSort
import time
import random

def heapify(arr, n, i):
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2

    if left < n and arr[left] > arr[largest]:
        largest = left

    if right < n and arr[right] > arr[largest]:
        largest = right

    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)

def heap_sort(arr):
    n = len(arr)

    # Build a max-heap
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)

    # Extract elements one by one
    for i in range(n - 1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]
        heapify(arr, i, 0)

# Example usage
arr = [random.randint(0, 1000) for _ in range(10000)]
start_time = time.time()
heap_sort(arr)
end_time = time.time()
print("Time taken for HeapSort:", end_time - start_time)`,
  exercises: [
    {
      prompt: 'Analyze the time complexity of HeapSort by measuring the time taken to sort a large array.',
      initialCode: `# Write your solution here
import time
import random

def heapify(arr, n, i):
    # Implement heapify

def heap_sort(arr):
    # Implement heap sort

# Example usage
arr = [random.randint(0, 1000) for _ in range(10000)]
start_time = time.time()
heap_sort(arr)
end_time = time.time()
print("Time taken for HeapSort:", end_time - start_time)`,
      solution: `import time
import random

def heapify(arr, n, i):
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2

    if left < n and arr[left] > arr[largest]:
        largest = left

    if right < n and arr[right] > arr[largest]:
        largest = right

    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)

def heap_sort(arr):
    n = len(arr)

    # Build a max-heap
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)

    # Extract elements one by one
    for i in range(n - 1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]
        heapify(arr, i, 0)

# Example usage
arr = [random.randint(0, 1000) for _ in range(10000)]
start_time = time.time()
heap_sort(arr)
end_time = time.time()
print("Time taken for HeapSort:", end_time - start_time)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the time complexity of HeapSort in the worst case?',
      options: [
        'O(n log n)',
        'O(n^2)',
        'O(n)',
        'O(log n)',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The time complexity of HeapSort in the worst case is O(n log n).',
        'This is incorrect. The time complexity of HeapSort is not O(n^2).',
        'This is incorrect. The time complexity of HeapSort is not O(n).',
        'This is incorrect. The time complexity of HeapSort is not O(log n).',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const heapSortVariationsData: LessonContent = {
  title: 'HeapSort Variations',
  content: `<p>
HeapSort can be optimized and adapted for special cases to improve its performance. Some variations include:
</p>

<ul>
<li><strong>Bottom-Up HeapSort:</strong> A variation that reduces the number of comparisons by using a bottom-up heap construction.</li>
<li><strong>Dual-Pivot HeapSort:</strong> A variation that uses two pivots to improve the performance of the sorting process.</li>
<li><strong>Adaptive HeapSort:</strong> A variation that adapts to the input data to improve performance on partially sorted arrays.</li>
</ul>

<p>
Understanding these variations helps in optimizing HeapSort for specific use cases.
</p>`,
  codeExample: `# Bottom-Up HeapSort implementation
def heapify_bottom_up(arr, n, i):
    while True:
        largest = i
        left = 2 * i + 1
        right = 2 * i + 2

        if left < n and arr[left] > arr[largest]:
            largest = left

        if right < n and arr[right] > arr[largest]:
            largest = right

        if largest == i:
            break

        arr[i], arr[largest] = arr[largest], arr[i]
        i = largest

def heap_sort_bottom_up(arr):
    n = len(arr)

    # Build a max-heap using bottom-up approach
    for i in range(n // 2 - 1, -1, -1):
        heapify_bottom_up(arr, n, i)

    # Extract elements one by one
    for i in range(n - 1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]
        heapify_bottom_up(arr, i, 0)

# Example usage
arr = [12, 11, 13, 5, 6, 7]
heap_sort_bottom_up(arr)
print("Sorted array using Bottom-Up HeapSort:", arr)`,
  exercises: [
    {
      prompt: 'Implement the Bottom-Up HeapSort variation and sort the given array.',
      initialCode: `# Write your solution here
def heapify_bottom_up(arr, n, i):
    # Implement bottom-up heapify

def heap_sort_bottom_up(arr):
    # Implement bottom-up heap sort

# Example usage
arr = [12, 11, 13, 5, 6, 7]
heap_sort_bottom_up(arr)
print("Sorted array using Bottom-Up HeapSort:", arr)`,
      solution: `def heapify_bottom_up(arr, n, i):
    while True:
        largest = i
        left = 2 * i + 1
        right = 2 * i + 2

        if left < n and arr[left] > arr[largest]:
            largest = left

        if right < n and arr[right] > arr[largest]:
            largest = right

        if largest == i:
            break

        arr[i], arr[largest] = arr[largest], arr[i]
        i = largest

def heap_sort_bottom_up(arr):
    n = len(arr)

    # Build a max-heap using bottom-up approach
    for i in range(n // 2 - 1, -1, -1):
        heapify_bottom_up(arr, n, i)

    # Extract elements one by one
    for i in range(n - 1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]
        heapify_bottom_up(arr, i, 0)

# Example usage
arr = [12, 11, 13, 5, 6, 7]
heap_sort_bottom_up(arr)
print("Sorted array using Bottom-Up HeapSort:", arr)`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary advantage of the Bottom-Up HeapSort variation?',
      options: [
        'Reduces the number of comparisons by using a bottom-up heap construction.',
        'Improves the worst-case time complexity to O(n).',
        'Eliminates the need for heapify operations.',
        'Allows for parallel processing of the heap.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The primary advantage of the Bottom-Up HeapSort variation is that it reduces the number of comparisons by using a bottom-up heap construction.',
        'This is incorrect. The worst-case time complexity of Bottom-Up HeapSort remains O(n log n).',
        'This is incorrect. Bottom-Up HeapSort still requires heapify operations.',
        'This is incorrect. Bottom-Up HeapSort does not inherently allow for parallel processing.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const priorityQueueConceptsData: LessonContent = {
  title: 'Priority Queue Concepts',
  content: `<p>
A priority queue is an abstract data type that operates similar to a regular queue but with each element having a priority value. Elements with higher priority are served before elements with lower priority.
</p>

<ul>
<li><strong>Implementation:</strong> Priority queues can be implemented using heaps, specifically min-heaps or max-heaps, depending on whether the highest or lowest priority element should be served first.</li>
<li><strong>Heap-based Priority Queue:</strong> Using a heap allows for efficient insertion and extraction operations, both with a time complexity of O(log n).</li>
</ul>

<p>
Understanding priority queue concepts is crucial for efficient handling of tasks with varying priorities.
</p>`,
  codeExample: `# Priority queue implementation using a min-heap
import heapq

class PriorityQueue:
    def __init__(self):
        self.heap = []

    def insert(self, item, priority):
        heapq.heappush(self.heap, (priority, item))

    def extract_min(self):
        if len(self.heap) == 0:
            return None
        return heapq.heappop(self.heap)[1]

# Example usage
pq = PriorityQueue()
pq.insert("Task 1", 3)
pq.insert("Task 2", 1)
pq.insert("Task 3", 2)
print("Extracted min:", pq.extract_min())`,
  exercises: [
    {
      prompt: 'Implement a priority queue using a min-heap and perform insertion and extraction operations.',
      initialCode: `# Write your solution here
import heapq

class PriorityQueue:
    def __init__(self):
        self.heap = []

    def insert(self, item, priority):
        # Implement insertion

    def extract_min(self):
        # Implement extraction

# Example usage
pq = PriorityQueue()
pq.insert("Task 1", 3)
pq.insert("Task 2", 1)
pq.insert("Task 3", 2)
print("Extracted min:", pq.extract_min())`,
      solution: `import heapq

class PriorityQueue:
    def __init__(self):
        self.heap = []

    def insert(self, item, priority):
        heapq.heappush(self.heap, (priority, item))

    def extract_min(self):
        if len(self.heap) == 0:
            return None
        return heapq.heappop(self.heap)[1]

# Example usage
pq = PriorityQueue()
pq.insert("Task 1", 3)
pq.insert("Task 2", 1)
pq.insert("Task 3", 2)
print("Extracted min:", pq.extract_min())`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary advantage of using a heap for implementing a priority queue?',
      options: [
        'Efficient insertion and extraction operations with a time complexity of O(log n).',
        'Guaranteed O(1) time complexity for all operations.',
        'Ability to handle a large number of elements with constant time complexity.',
        'Simplified implementation compared to other data structures.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. Using a heap for implementing a priority queue allows for efficient insertion and extraction operations with a time complexity of O(log n).',
        'This is incorrect. The time complexity for insertion and extraction in a heap-based priority queue is O(log n), not O(1).',
        'This is incorrect. While heaps can handle a large number of elements, the time complexity is not constant.',
        'This is incorrect. While the implementation is relatively straightforward, it is not necessarily simpler than other data structures.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const priorityQueueOperationsData: LessonContent = {
  title: 'Priority Queue Operations',
  content: `<p>
Priority queues support several core operations, including insertion, extraction, and sometimes updating the priority of an element.
</p>

<ul>
<li><strong>Insertion:</strong> Add an element with a specified priority to the queue.</li>
<li><strong>Extraction:</strong> Remove and return the element with the highest (or lowest) priority.</li>
<li><strong>Update Priority:</strong> Change the priority of an existing element in the queue.</li>
</ul>

<p>
Implementing these operations efficiently is crucial for the performance of priority queue-based applications.
</p>`,
  codeExample: `# Priority queue operations implementation using a min-heap
import heapq

class PriorityQueue:
    def __init__(self):
        self.heap = []
        self.entry_finder = {}
        self.REMOVED = '<removed-task>'

    def insert(self, item, priority):
        if item in self.entry_finder:
            self.remove_item(item)
        entry = [priority, item]
        self.entry_finder[item] = entry
        heapq.heappush(self.heap, entry)

    def remove_item(self, item):
        entry = self.entry_finder.pop(item)
        entry[-1] = self.REMOVED

    def extract_min(self):
        while self.heap:
            priority, item = heapq.heappop(self.heap)
            if item is not self.REMOVED:
                del self.entry_finder[item]
                return item
        return None

# Example usage
pq = PriorityQueue()
pq.insert("Task 1", 3)
pq.insert("Task 2", 1)
pq.insert("Task 3", 2)
pq.remove_item("Task 2")
print("Extracted min:", pq.extract_min())`,
  exercises: [
    {
      prompt: 'Implement the priority queue operations including insertion, extraction, and updating the priority of an element.',
      initialCode: `# Write your solution here
import heapq

class PriorityQueue:
    def __init__(self):
        self.heap = []
        self.entry_finder = {}
        self.REMOVED = '<removed-task>'

    def insert(self, item, priority):
        # Implement insertion

    def remove_item(self, item):
        # Implement removal

    def extract_min(self):
        # Implement extraction

# Example usage
pq = PriorityQueue()
pq.insert("Task 1", 3)
pq.insert("Task 2", 1)
pq.insert("Task 3", 2)
pq.remove_item("Task 2")
print("Extracted min:", pq.extract_min())`,
      solution: `import heapq

class PriorityQueue:
    def __init__(self):
        self.heap = []
        self.entry_finder = {}
        self.REMOVED = '<removed-task>'

    def insert(self, item, priority):
        if item in self.entry_finder:
            self.remove_item(item)
        entry = [priority, item]
        self.entry_finder[item] = entry
        heapq.heappush(self.heap, entry)

    def remove_item(self, item):
        entry = self.entry_finder.pop(item)
        entry[-1] = self.REMOVED

    def extract_min(self):
        while self.heap:
            priority, item = heapq.heappop(self.heap)
            if item is not self.REMOVED:
                del self.entry_finder[item]
                return item
        return None

# Example usage
pq = PriorityQueue()
pq.insert("Task 1", 3)
pq.insert("Task 2", 1)
pq.insert("Task 3", 2)
pq.remove_item("Task 2")
print("Extracted min:", pq.extract_min())`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary purpose of the update priority operation in a priority queue?',
      options: [
        'To change the priority of an existing element in the queue.',
        'To insert a new element into the queue.',
        'To remove the highest priority element from the queue.',
        'To sort the entire queue.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The primary purpose of the update priority operation is to change the priority of an existing element in the queue.',
        'This is incorrect. Inserting a new element is handled by the insertion operation.',
        'This is incorrect. Removing the highest priority element is handled by the extraction operation.',
        'This is incorrect. The priority queue does not need to sort the entire queue.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const priorityQueueApplicationsData: LessonContent = {
  title: 'Priority Queue Applications',
  content: `<p>
Priority queues have a wide range of applications in various fields, including computer science, operations research, and real-time systems.
</p>

<ul>
<li><strong>Dijkstra's Algorithm:</strong> Used in finding the shortest path in a graph.</li>
<li><strong>Huffman Coding:</strong> Used in data compression.</li>
<li><strong>Job Scheduling:</strong> Used in operating systems to manage tasks with different priorities.</li>
<li><strong>Event-driven Simulation:</strong> Used in simulations where events need to be processed in order of their occurrence.</li>
</ul>

<p>
Understanding these applications helps in leveraging priority queues for solving real-world problems.
</p>`,
  codeExample: `# Example of using a priority queue in Dijkstra's algorithm
import heapq

def dijkstra(graph, start):
    pq = []
    heapq.heappush(pq, (0, start))
    distances = {vertex: float('infinity') for vertex in graph}
    distances[start] = 0

    while pq:
        current_distance, current_vertex = heapq.heappop(pq)

        if current_distance > distances[current_vertex]:
            continue

        for neighbor, weight in graph[current_vertex].items():
            distance = current_distance + weight

            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(pq, (distance, neighbor))

    return distances

# Example usage
graph = {
    'A': {'B': 1, 'C': 4},
    'B': {'A': 1, 'C': 2, 'D': 5},
    'C': {'A': 4, 'B': 2, 'D': 1},
    'D': {'B': 5, 'C': 1}
}
print("Shortest distances from A:", dijkstra(graph, 'A'))`,
  exercises: [
    {
      prompt: 'Implement Dijkstra\'s algorithm using a priority queue and find the shortest path in the given graph.',
      initialCode: `# Write your solution here
import heapq

def dijkstra(graph, start):
    pq = []
    heapq.heappush(pq, (0, start))
    distances = {vertex: float('infinity') for vertex in graph}
    distances[start] = 0

    while pq:
        current_distance, current_vertex = heapq.heappop(pq)

        if current_distance > distances[current_vertex]:
            continue

        for neighbor, weight in graph[current_vertex].items():
            distance = current_distance + weight

            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(pq, (distance, neighbor))

    return distances

# Example usage
graph = {
    'A': {'B': 1, 'C': 4},
    'B': {'A': 1, 'C': 2, 'D': 5},
    'C': {'A': 4, 'B': 2, 'D': 1},
    'D': {'B': 5, 'C': 1}
}
print("Shortest distances from A:", dijkstra(graph, 'A'))`,
      solution: `import heapq

def dijkstra(graph, start):
    pq = []
    heapq.heappush(pq, (0, start))
    distances = {vertex: float('infinity') for vertex in graph}
    distances[start] = 0

    while pq:
        current_distance, current_vertex = heapq.heappop(pq)

        if current_distance > distances[current_vertex]:
            continue

        for neighbor, weight in graph[current_vertex].items():
            distance = current_distance + weight

            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(pq, (distance, neighbor))

    return distances

# Example usage
graph = {
    'A': {'B': 1, 'C': 4},
    'B': {'A': 1, 'C': 2, 'D': 5},
    'C': {'A': 4, 'B': 2, 'D': 1},
    'D': {'B': 5, 'C': 1}
}
print("Shortest distances from A:", dijkstra(graph, 'A'))`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a common application of priority queues?',
      options: [
        'Dijkstra\'s Algorithm',
        'Binary Search',
        'Bubble Sort',
        'Linear Search',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. Priority queues are commonly used in Dijkstra\'s Algorithm for finding the shortest path in a graph.',
        'This is incorrect. Binary Search is not an application of priority queues.',
        'This is incorrect. Bubble Sort is not an application of priority queues.',
        'This is incorrect. Linear Search is not an application of priority queues.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const binomialHeapData: LessonContent = {
  title: 'Binomial Heap',
  content: `<p>
A binomial heap is a collection of binomial trees that satisfy the heap property. Binomial heaps support efficient merge operations, making them suitable for applications that require frequent merging of heaps.
</p>

<ul>
<li><strong>Binomial Tree:</strong> A specific type of tree that has properties useful for creating heaps.</li>
<li><strong>Operations:</strong> Insertion, deletion, merging, and finding the minimum element.</li>
</ul>

<p>
Understanding and implementing binomial heaps is crucial for efficient heap operations in scenarios requiring frequent merging.
</p>`,
  codeExample: `# Binomial heap implementation
class BinomialHeapNode:
    def __init__(self, key):
        self.key = key
        self.degree = 0
        self.parent = None
        self.child = None
        self.sibling = None

class BinomialHeap:
    def __init__(self):
        self.head = None

    def insert(self, key):
        temp_heap = BinomialHeap()
        temp_heap.head = BinomialHeapNode(key)
        self.head = self.merge(self, temp_heap)

    def merge(self, heap1, heap2):
        if heap1.head is None:
            return heap2.head
        if heap2.head is None:
            return heap1.head

        if heap1.head.degree <= heap2.head.degree:
            result = heap1.head
            heap1.head = heap1.head.sibling
        else:
            result = heap2.head
            heap2.head = heap2.head.sibling

        current = result

        while heap1.head is not None and heap2.head is not None:
            if heap1.head.degree <= heap2.head.degree:
                current.sibling = heap1.head
                heap1.head = heap1.head.sibling
            else:
                current.sibling = heap2.head
                heap2.head = heap2.head.sibling
            current = current.sibling

        if heap1.head is not None:
            current.sibling = heap1.head
        else:
            current.sibling = heap2.head

        return result

# Example usage
heap = BinomialHeap()
heap.insert(3)
heap.insert(2)
heap.insert(1)
print("Binomial Heap after insertions")`,
  exercises: [
    {
      prompt: 'Implement the insertion operation for a binomial heap and insert the given elements.',
      initialCode: `# Write your solution here
class BinomialHeapNode:
    def __init__(self, key):
        self.key = key
        self.degree = 0
        self.parent = None
        self.child = None
        self.sibling = None

class BinomialHeap:
    def __init__(self):
        self.head = None

    def insert(self, key):
        # Implement insertion

    def merge(self, heap1, heap2):
        # Implement merge

# Example usage
heap = BinomialHeap()
heap.insert(3)
heap.insert(2)
heap.insert(1)
print("Binomial Heap after insertions")`,
      solution: `class BinomialHeapNode:
    def __init__(self, key):
        self.key = key
        self.degree = 0
        self.parent = None
        self.child = None
        self.sibling = None

class BinomialHeap:
    def __init__(self):
        self.head = None

    def insert(self, key):
        temp_heap = BinomialHeap()
        temp_heap.head = BinomialHeapNode(key)
        self.head = self.merge(self, temp_heap)

    def merge(self, heap1, heap2):
        if heap1.head is None:
            return heap2.head
        if heap2.head is None:
            return heap1.head

        if heap1.head.degree <= heap2.head.degree:
            result = heap1.head
            heap1.head = heap1.head.sibling
        else:
            result = heap2.head
            heap2.head = heap2.head.sibling

        current = result

        while heap1.head is not None and heap2.head is not None:
            if heap1.head.degree <= heap2.head.degree:
                current.sibling = heap1.head
                heap1.head = heap1.head.sibling
            else:
                current.sibling = heap2.head
                heap2.head = heap2.head.sibling
            current = current.sibling

        if heap1.head is not None:
            current.sibling = heap1.head
        else:
            current.sibling = heap2.head

        return result

# Example usage
heap = BinomialHeap()
heap.insert(3)
heap.insert(2)
heap.insert(1)
print("Binomial Heap after insertions")`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary advantage of a binomial heap over a binary heap?',
      options: [
        'Efficient merging of heaps.',
        'Faster insertion and deletion operations.',
        'Guaranteed O(1) time complexity for all operations.',
        'Simpler implementation.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The primary advantage of a binomial heap over a binary heap is its efficient merging of heaps.',
        'This is incorrect. While binomial heaps have efficient merging, their insertion and deletion operations are not necessarily faster than those of binary heaps.',
        'This is incorrect. Binomial heaps do not guarantee O(1) time complexity for all operations.',
        'This is incorrect. Binomial heaps are generally more complex to implement than binary heaps.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const fibonacciHeapData: LessonContent = {
  title: 'Fibonacci Heap',
  content: `<p>
A Fibonacci heap is a collection of trees that satisfy the min-heap or max-heap property. Fibonacci heaps are particularly useful in algorithms that require efficient decrease-key operations, such as Dijkstra's algorithm.
</p>

<ul>
<li><strong>Operations:</strong> Insertion, deletion, merging, finding the minimum element, and decreasing the key.</li>
<li><strong>Amortized Time Complexity:</strong> Many operations have better amortized time complexity compared to binary heaps.</li>
</ul>

<p>
Understanding and implementing Fibonacci heaps is crucial for optimizing algorithms that require frequent decrease-key operations.
</p>`,
  codeExample: `# Fibonacci heap implementation
class FibonacciHeapNode:
    def __init__(self, key):
        self.key = key
        self.degree = 0
        self.parent = None
        self.child = None
        self.left = self
        self.right = self
        self.mark = False

class FibonacciHeap:
    def __init__(self):
        self.min_node = None
        self.n = 0

    def insert(self, key):
        node = FibonacciHeapNode(key)
        if self.min_node is None:
            self.min_node = node
        else:
            self._add_node(node, self.min_node)
            if node.key < self.min_node.key:
                self.min_node = node
        self.n += 1

    def _add_node(self, node, root):
        node.left = root.left
        node.right = root
        root.left.right = node
        root.left = node

# Example usage
heap = FibonacciHeap()
heap.insert(3)
heap.insert(2)
heap.insert(1)
print("Fibonacci Heap after insertions")`,
  exercises: [
    {
      prompt: 'Implement the insertion operation for a Fibonacci heap and insert the given elements.',
      initialCode: `# Write your solution here
class FibonacciHeapNode:
    def __init__(self, key):
        self.key = key
        self.degree = 0
        self.parent = None
        self.child = None
        self.left = self
        self.right = self
        self.mark = False

class FibonacciHeap:
    def __init__(self):
        self.min_node = None
        self.n = 0

    def insert(self, key):
        # Implement insertion

    def _add_node(self, node, root):
        # Implement adding node to root list

# Example usage
heap = FibonacciHeap()
heap.insert(3)
heap.insert(2)
heap.insert(1)
print("Fibonacci Heap after insertions")`,
      solution: `class FibonacciHeapNode:
    def __init__(self, key):
        self.key = key
        self.degree = 0
        self.parent = None
        self.child = None
        self.left = self
        self.right = self
        self.mark = False

class FibonacciHeap:
    def __init__(self):
        self.min_node = None
        self.n = 0

    def insert(self, key):
        node = FibonacciHeapNode(key)
        if self.min_node is None:
            self.min_node = node
        else:
            self._add_node(node, self.min_node)
            if node.key < self.min_node.key:
                self.min_node = node
        self.n += 1

    def _add_node(self, node, root):
        node.left = root.left
        node.right = root
        root.left.right = node
        root.left = node

# Example usage
heap = FibonacciHeap()
heap.insert(3)
heap.insert(2)
heap.insert(1)
print("Fibonacci Heap after insertions")`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary advantage of a Fibonacci heap over a binary heap?',
      options: [
        'Better amortized time complexity for decrease-key operations.',
        'Faster insertion and deletion operations.',
        'Guaranteed O(1) time complexity for all operations.',
        'Simpler implementation.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The primary advantage of a Fibonacci heap over a binary heap is its better amortized time complexity for decrease-key operations.',
        'This is incorrect. While Fibonacci heaps have better amortized time complexity for certain operations, their insertion and deletion operations are not necessarily faster than those of binary heaps.',
        'This is incorrect. Fibonacci heaps do not guarantee O(1) time complexity for all operations.',
        'This is incorrect. Fibonacci heaps are generally more complex to implement than binary heaps.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const leftistHeapData: LessonContent = {
  title: 'Leftist Heap',
  content: `<p>
A leftist heap is a binary tree that satisfies the heap property and the leftist property. The leftist property ensures that the null path length of the left child is always greater than or equal to the null path length of the right child.
</p>

<ul>
<li><strong>Operations:</strong> Insertion, deletion, merging, and finding the minimum element.</li>
<li><strong>Leftist Property:</strong> Ensures that the tree is skewed to the left, which helps in maintaining the balance of the tree.</li>
</ul>

<p>
Understanding and implementing leftist heaps is crucial for efficient heap operations in scenarios requiring frequent merging.
</p>`,
  codeExample: `# Leftist heap implementation
class LeftistHeapNode:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None
        self.npl = 0

class LeftistHeap:
    def __init__(self):
        self.root = None

    def insert(self, key):
        self.root = self.merge(self.root, LeftistHeapNode(key))

    def merge(self, heap1, heap2):
        if heap1 is None:
            return heap2
        if heap2 is None:
            return heap1

        if heap1.key > heap2.key:
            heap1, heap2 = heap2, heap1

        heap1.right = self.merge(heap1.right, heap2)

        if heap1.left is None or heap1.left.npl < heap1.right.npl:
            heap1.left, heap1.right = heap1.right, heap1.left

        heap1.npl = 0 if heap1.right is None else heap1.right.npl + 1

        return heap1

# Example usage
heap = LeftistHeap()
heap.insert(3)
heap.insert(2)
heap.insert(1)
print("Leftist Heap after insertions")`,
  exercises: [
    {
      prompt: 'Implement the insertion operation for a leftist heap and insert the given elements.',
      initialCode: `# Write your solution here
class LeftistHeapNode:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None
        self.npl = 0

class LeftistHeap:
    def __init__(self):
        self.root = None

    def insert(self, key):
        # Implement insertion

    def merge(self, heap1, heap2):
        # Implement merge

# Example usage
heap = LeftistHeap()
heap.insert(3)
heap.insert(2)
heap.insert(1)
print("Leftist Heap after insertions")`,
      solution: `class LeftistHeapNode:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None
        self.npl = 0

class LeftistHeap:
    def __init__(self):
        self.root = None

    def insert(self, key):
        self.root = self.merge(self.root, LeftistHeapNode(key))

    def merge(self, heap1, heap2):
        if heap1 is None:
            return heap2
        if heap2 is None:
            return heap1

        if heap1.key > heap2.key:
            heap1, heap2 = heap2, heap1

        heap1.right = self.merge(heap1.right, heap2)

        if heap1.left is None or heap1.left.npl < heap1.right.npl:
            heap1.left, heap1.right = heap1.right, heap1.left

        heap1.npl = 0 if heap1.right is None else heap1.right.npl + 1

        return heap1

# Example usage
heap = LeftistHeap()
heap.insert(3)
heap.insert(2)
heap.insert(1)
print("Leftist Heap after insertions")`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary advantage of a leftist heap over a binary heap?',
      options: [
        'Efficient merging of heaps.',
        'Faster insertion and deletion operations.',
        'Guaranteed O(1) time complexity for all operations.',
        'Simpler implementation.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The primary advantage of a leftist heap over a binary heap is its efficient merging of heaps.',
        'This is incorrect. While leftist heaps have efficient merging, their insertion and deletion operations are not necessarily faster than those of binary heaps.',
        'This is incorrect. Leftist heaps do not guarantee O(1) time complexity for all operations.',
        'This is incorrect. Leftist heaps are generally more complex to implement than binary heaps.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const kWayMergeData: LessonContent = {
  title: 'K-Way Merge',
  content: `<p>
K-Way Merge is a technique used to merge k sorted arrays into a single sorted array. This can be efficiently achieved using a min-heap, which allows for the extraction of the smallest element from k arrays in logarithmic time.
</p>

<ul>
<li><strong>Min-Heap:</strong> Used to keep track of the smallest elements from each of the k arrays.</li>
<li><strong>Extraction:</strong> Extract the smallest element from the heap and insert the next element from the same array into the heap.</li>
</ul>

<p>
Understanding and implementing K-Way Merge is crucial for efficient merging of multiple sorted datasets.
</p>`,
  codeExample: `# K-Way Merge implementation using a min-heap
import heapq

def k_way_merge(arrays):
    min_heap = []
    result = []

    # Initialize the heap with the first element from each array
    for i, array in enumerate(arrays):
        if array:
            heapq.heappush(min_heap, (array[0], i, 0))

    while min_heap:
        val, array_index, element_index = heapq.heappop(min_heap)
        result.append(val)

        # If there are more elements in the same array, push the next element
        if element_index + 1 < len(arrays[array_index]):
            next_val = arrays[array_index][element_index + 1]
            heapq.heappush(min_heap, (next_val, array_index, element_index + 1))

    return result

# Example usage
arrays = [
    [1, 3, 5],
    [2, 4, 6],
    [0, 7, 8]
]
merged_array = k_way_merge(arrays)
print("Merged array:", merged_array)`,
  exercises: [
    {
      prompt: 'Implement the K-Way Merge algorithm and merge the given sorted arrays.',
      initialCode: `# Write your solution here
import heapq

def k_way_merge(arrays):
    min_heap = []
    result = []

    # Initialize the heap with the first element from each array
    for i, array in enumerate(arrays):
        if array:
            heapq.heappush(min_heap, (array[0], i, 0))

    while min_heap:
        val, array_index, element_index = heapq.heappop(min_heap)
        result.append(val)

        # If there are more elements in the same array, push the next element
        if element_index + 1 < len(arrays[array_index]):
            next_val = arrays[array_index][element_index + 1]
            heapq.heappush(min_heap, (next_val, array_index, element_index + 1))

    return result

# Example usage
arrays = [
    [1, 3, 5],
    [2, 4, 6],
    [0, 7, 8]
]
merged_array = k_way_merge(arrays)
print("Merged array:", merged_array)`,
      solution: `import heapq

def k_way_merge(arrays):
    min_heap = []
    result = []

    # Initialize the heap with the first element from each array
    for i, array in enumerate(arrays):
        if array:
            heapq.heappush(min_heap, (array[0], i, 0))

    while min_heap:
        val, array_index, element_index = heapq.heappop(min_heap)
        result.append(val)

        # If there are more elements in the same array, push the next element
        if element_index + 1 < len(arrays[array_index]):
            next_val = arrays[array_index][element_index + 1]
            heapq.heappush(min_heap, (next_val, array_index, element_index + 1))

    return result

# Example usage
arrays = [
    [1, 3, 5],
    [2, 4, 6],
    [0, 7, 8]
]
merged_array = k_way_merge(arrays)
print("Merged array:", merged_array)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary advantage of using a min-heap for K-Way Merge?',
      options: [
        'Efficient extraction of the smallest element from k arrays.',
        'Guaranteed O(1) time complexity for all operations.',
        'Simpler implementation compared to other data structures.',
        'Ability to handle a large number of elements with constant time complexity.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The primary advantage of using a min-heap for K-Way Merge is its efficient extraction of the smallest element from k arrays.',
        'This is incorrect. The time complexity for extraction in a min-heap is O(log k), not O(1).',
        'This is incorrect. While the implementation is relatively straightforward, it is not necessarily simpler than other data structures.',
        'This is incorrect. The time complexity for handling a large number of elements is not constant.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const kSmallestElementsData: LessonContent = {
  title: 'K Smallest Elements',
  content: `<p>
Finding the k smallest elements in an array or a stream can be efficiently achieved using a max-heap. The max-heap allows for the extraction of the largest element among the k smallest elements, ensuring that the heap always contains the k smallest elements.
</p>

<ul>
<li><strong>Max-Heap:</strong> Used to keep track of the k smallest elements.</li>
<li><strong>Insertion:</strong> Insert elements into the heap and maintain the heap size to be at most k.</li>
</ul>

<p>
Understanding and implementing this technique is crucial for efficient selection of the k smallest elements.
</p>`,
  codeExample: `# Finding k smallest elements using a max-heap
import heapq

def k_smallest_elements(arr, k):
    max_heap = []

    for num in arr:
        if len(max_heap) < k:
            heapq.heappush(max_heap, -num)
        else:
            if -max_heap[0] > num:
                heapq.heappop(max_heap)
                heapq.heappush(max_heap, -num)

    return [-x for x in max_heap]

# Example usage
arr = [3, 2, 1, 5, 4]
k = 3
smallest_elements = k_smallest_elements(arr, k)
print("K smallest elements:", smallest_elements)`,
  exercises: [
    {
      prompt: 'Implement the algorithm to find the k smallest elements in the given array using a max-heap.',
      initialCode: `# Write your solution here
import heapq

def k_smallest_elements(arr, k):
    max_heap = []

    for num in arr:
        if len(max_heap) < k:
            heapq.heappush(max_heap, -num)
        else:
            if -max_heap[0] > num:
                heapq.heappop(max_heap)
                heapq.heappush(max_heap, -num)

    return [-x for x in max_heap]

# Example usage
arr = [3, 2, 1, 5, 4]
k = 3
smallest_elements = k_smallest_elements(arr, k)
print("K smallest elements:", smallest_elements)`,
      solution: `import heapq

def k_smallest_elements(arr, k):
    max_heap = []

    for num in arr:
        if len(max_heap) < k:
            heapq.heappush(max_heap, -num)
        else:
            if -max_heap[0] > num:
                heapq.heappop(max_heap)
                heapq.heappush(max_heap, -num)

    return [-x for x in max_heap]

# Example usage
arr = [3, 2, 1, 5, 4]
k = 3
smallest_elements = k_smallest_elements(arr, k)
print("K smallest elements:", smallest_elements)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary advantage of using a max-heap for finding the k smallest elements?',
      options: [
        'Efficient extraction of the largest element among the k smallest elements.',
        'Guaranteed O(1) time complexity for all operations.',
        'Simpler implementation compared to other data structures.',
        'Ability to handle a large number of elements with constant time complexity.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The primary advantage of using a max-heap for finding the k smallest elements is its efficient extraction of the largest element among the k smallest elements.',
        'This is incorrect. The time complexity for extraction in a max-heap is O(log k), not O(1).',
        'This is incorrect. While the implementation is relatively straightforward, it is not necessarily simpler than other data structures.',
        'This is incorrect. The time complexity for handling a large number of elements is not constant.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const kClosestPointsData: LessonContent = {
  title: 'K Closest Points',
  content: `<p>
Finding the k closest points to a given point in a 2D plane can be efficiently achieved using a min-heap. The min-heap allows for the extraction of the closest points based on their Euclidean distance.
</p>

<ul>
<li><strong>Min-Heap:</strong> Used to keep track of the k closest points.</li>
<li><strong>Insertion:</strong> Insert points into the heap and maintain the heap size to be at most k.</li>
</ul>

<p>
Understanding and implementing this technique is crucial for efficient selection of the k closest points.
</p>`,
  codeExample: `# Finding k closest points using a min-heap
import heapq
import math

def k_closest_points(points, k):
    min_heap = []

    for point in points:
        distance = math.sqrt(point[0]**2 + point[1]**2)
        heapq.heappush(min_heap, (distance, point))

    return [heapq.heappop(min_heap)[1] for _ in range(k)]

# Example usage
points = [(1, 3), (-2, 2), (5, -1), (0, 2)]
k = 2
closest_points = k_closest_points(points, k)
print("K closest points:", closest_points)`,
  exercises: [
    {
      prompt: 'Implement the algorithm to find the k closest points to the origin in the given array using a min-heap.',
      initialCode: `# Write your solution here
import heapq
import math

def k_closest_points(points, k):
    min_heap = []

    for point in points:
        distance = math.sqrt(point[0]**2 + point[1]**2)
        heapq.heappush(min_heap, (distance, point))

    return [heapq.heappop(min_heap)[1] for _ in range(k)]

# Example usage
points = [(1, 3), (-2, 2), (5, -1), (0, 2)]
k = 2
closest_points = k_closest_points(points, k)
print("K closest points:", closest_points)`,
      solution: `import heapq
import math

def k_closest_points(points, k):
    min_heap = []

    for point in points:
        distance = math.sqrt(point[0]**2 + point[1]**2)
        heapq.heappush(min_heap, (distance, point))

    return [heapq.heappop(min_heap)[1] for _ in range(k)]

# Example usage
points = [(1, 3), (-2, 2), (5, -1), (0, 2)]
k = 2
closest_points = k_closest_points(points, k)
print("K closest points:", closest_points)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary advantage of using a min-heap for finding the k closest points?',
      options: [
        'Efficient extraction of the closest points based on their Euclidean distance.',
        'Guaranteed O(1) time complexity for all operations.',
        'Simpler implementation compared to other data structures.',
        'Ability to handle a large number of elements with constant time complexity.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The primary advantage of using a min-heap for finding the k closest points is its efficient extraction of the closest points based on their Euclidean distance.',
        'This is incorrect. The time complexity for extraction in a min-heap is O(log k), not O(1).',
        'This is incorrect. While the implementation is relatively straightforward, it is not necessarily simpler than other data structures.',
        'This is incorrect. The time complexity for handling a large number of elements is not constant.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const dijkstraHeapData: LessonContent = {
  title: "Dijkstra's Algorithm with Heap",
  content: `<p>
Dijkstra's Algorithm is a graph search algorithm that solves the single-source shortest path problem for a graph with non-negative edge weights. Using a min-heap (priority queue) significantly improves the efficiency of the algorithm by allowing for the extraction of the minimum distance node in logarithmic time.
</p>

<ul>
<li><strong>Min-Heap:</strong> Used to keep track of the node with the smallest known distance from the source.</li>
<li><strong>Relaxation:</strong> Update the distance of neighboring nodes if a shorter path is found.</li>
</ul>

<p>
Understanding and implementing Dijkstra's Algorithm with a heap is crucial for efficient shortest path calculations.
</p>`,
  codeExample: `# Dijkstra's Algorithm implementation using a min-heap
import heapq

def dijkstra(graph, start):
    min_heap = []
    distances = {vertex: float('infinity') for vertex in graph}
    distances[start] = 0
    heapq.heappush(min_heap, (0, start))

    while min_heap:
        current_distance, current_vertex = heapq.heappop(min_heap)

        if current_distance > distances[current_vertex]:
            continue

        for neighbor, weight in graph[current_vertex].items():
            distance = current_distance + weight

            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(min_heap, (distance, neighbor))

    return distances

# Example usage
graph = {
    'A': {'B': 1, 'C': 4},
    'B': {'A': 1, 'C': 2, 'D': 5},
    'C': {'A': 4, 'B': 2, 'D': 1},
    'D': {'B': 5, 'C': 1}
}
print("Shortest distances from A:", dijkstra(graph, 'A'))`,
  exercises: [
    {
      prompt: 'Implement Dijkstra\'s Algorithm using a min-heap and find the shortest path in the given graph.',
      initialCode: `# Write your solution here
import heapq

def dijkstra(graph, start):
    min_heap = []
    distances = {vertex: float('infinity') for vertex in graph}
    distances[start] = 0
    heapq.heappush(min_heap, (0, start))

    while min_heap:
        current_distance, current_vertex = heapq.heappop(min_heap)

        if current_distance > distances[current_vertex]:
            continue

        for neighbor, weight in graph[current_vertex].items():
            distance = current_distance + weight

            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(min_heap, (distance, neighbor))

    return distances

# Example usage
graph = {
    'A': {'B': 1, 'C': 4},
    'B': {'A': 1, 'C': 2, 'D': 5},
    'C': {'A': 4, 'B': 2, 'D': 1},
    'D': {'B': 5, 'C': 1}
}
print("Shortest distances from A:", dijkstra(graph, 'A'))`,
      solution: `import heapq

def dijkstra(graph, start):
    min_heap = []
    distances = {vertex: float('infinity') for vertex in graph}
    distances[start] = 0
    heapq.heappush(min_heap, (0, start))

    while min_heap:
        current_distance, current_vertex = heapq.heappop(min_heap)

        if current_distance > distances[current_vertex]:
            continue

        for neighbor, weight in graph[current_vertex].items():
            distance = current_distance + weight

            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(min_heap, (distance, neighbor))

    return distances

# Example usage
graph = {
    'A': {'B': 1, 'C': 4},
    'B': {'A': 1, 'C': 2, 'D': 5},
    'C': {'A': 4, 'B': 2, 'D': 1},
    'D': {'B': 5, 'C': 1}
}
print("Shortest distances from A:", dijkstra(graph, 'A'))`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary advantage of using a min-heap in Dijkstra\'s Algorithm?',
      options: [
        'Efficient extraction of the node with the smallest known distance from the source.',
        'Guaranteed O(1) time complexity for all operations.',
        'Simpler implementation compared to other data structures.',
        'Ability to handle a large number of elements with constant time complexity.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The primary advantage of using a min-heap in Dijkstra\'s Algorithm is its efficient extraction of the node with the smallest known distance from the source.',
        'This is incorrect. The time complexity for extraction in a min-heap is O(log V), not O(1).',
        'This is incorrect. While the implementation is relatively straightforward, it is not necessarily simpler than other data structures.',
        'This is incorrect. The time complexity for handling a large number of elements is not constant.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const primHeapData: LessonContent = {
  title: "Prim's Algorithm with Heap",
  content: `<p>
Prim's Algorithm is a greedy algorithm that finds a minimum spanning tree for a weighted undirected graph. Using a min-heap (priority queue) significantly improves the efficiency of the algorithm by allowing for the extraction of the minimum weight edge in logarithmic time.
</p>

<ul>
<li><strong>Min-Heap:</strong> Used to keep track of the edge with the smallest weight.</li>
<li><strong>Relaxation:</strong> Add the edge to the minimum spanning tree if it connects a new vertex.</li>
</ul>

<p>
Understanding and implementing Prim's Algorithm with a heap is crucial for efficient minimum spanning tree calculations.
</p>`,
  codeExample: `# Prim's Algorithm implementation using a min-heap
import heapq

def prim(graph, start):
    min_heap = []
    mst = []
    visited = set()
    total_weight = 0

    heapq.heappush(min_heap, (0, start))

    while min_heap:
        weight, vertex = heapq.heappop(min_heap)

        if vertex in visited:
            continue

        visited.add(vertex)
        total_weight += weight

        for neighbor, edge_weight in graph[vertex].items():
            if neighbor not in visited:
                heapq.heappush(min_heap, (edge_weight, neighbor))

    return total_weight, mst

# Example usage
graph = {
    'A': {'B': 1, 'C': 4},
    'B': {'A': 1, 'C': 2, 'D': 5},
    'C': {'A': 4, 'B': 2, 'D': 1},
    'D': {'B': 5, 'C': 1}
}
print("Minimum Spanning Tree weight:", prim(graph, 'A')[0])`,
  exercises: [
    {
      prompt: 'Implement Prim\'s Algorithm using a min-heap and find the minimum spanning tree in the given graph.',
      initialCode: `# Write your solution here
import heapq

def prim(graph, start):
    min_heap = []
    mst = []
    visited = set()
    total_weight = 0

    heapq.heappush(min_heap, (0, start))

    while min_heap:
        weight, vertex = heapq.heappop(min_heap)

        if vertex in visited:
            continue

        visited.add(vertex)
        total_weight += weight

        for neighbor, edge_weight in graph[vertex].items():
            if neighbor not in visited:
                heapq.heappush(min_heap, (edge_weight, neighbor))

    return total_weight, mst

# Example usage
graph = {
    'A': {'B': 1, 'C': 4},
    'B': {'A': 1, 'C': 2, 'D': 5},
    'C': {'A': 4, 'B': 2, 'D': 1},
    'D': {'B': 5, 'C': 1}
}
print("Minimum Spanning Tree weight:", prim(graph, 'A')[0])`,
      solution: `import heapq

def prim(graph, start):
    min_heap = []
    mst = []
    visited = set()
    total_weight = 0

    heapq.heappush(min_heap, (0, start))

    while min_heap:
        weight, vertex = heapq.heappop(min_heap)

        if vertex in visited:
            continue

        visited.add(vertex)
        total_weight += weight

        for neighbor, edge_weight in graph[vertex].items():
            if neighbor not in visited:
                heapq.heappush(min_heap, (edge_weight, neighbor))

    return total_weight, mst

# Example usage
graph = {
    'A': {'B': 1, 'C': 4},
    'B': {'A': 1, 'C': 2, 'D': 5},
    'C': {'A': 4, 'B': 2, 'D': 1},
    'D': {'B': 5, 'C': 1}
}
print("Minimum Spanning Tree weight:", prim(graph, 'A')[0])`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary advantage of using a min-heap in Prim\'s Algorithm?',
      options: [
        'Efficient extraction of the edge with the smallest weight.',
        'Guaranteed O(1) time complexity for all operations.',
        'Simpler implementation compared to other data structures.',
        'Ability to handle a large number of elements with constant time complexity.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The primary advantage of using a min-heap in Prim\'s Algorithm is its efficient extraction of the edge with the smallest weight.',
        'This is incorrect. The time complexity for extraction in a min-heap is O(log V), not O(1).',
        'This is incorrect. While the implementation is relatively straightforward, it is not necessarily simpler than other data structures.',
        'This is incorrect. The time complexity for handling a large number of elements is not constant.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const networkOptimizationData: LessonContent = {
  title: 'Network Optimization',
  content: `<p>
Heap data structures are widely used in network optimization algorithms to efficiently manage and prioritize network elements such as packets, flows, and routes.
</p>

<ul>
<li><strong>Packet Scheduling:</strong> Using priority queues to manage packet transmission based on priority.</li>
<li><strong>Flow Control:</strong> Using heaps to manage flow rates and ensure efficient network utilization.</li>
<li><strong>Route Optimization:</strong> Using heaps to find the shortest path or optimal routes in network graphs.</li>
</ul>

<p>
Understanding heap applications in network optimization is crucial for designing efficient and scalable network algorithms.
</p>`,
  codeExample: `# Example of packet scheduling using a priority queue
import heapq

class Packet:
    def __init__(self, data, priority):
        self.data = data
        self.priority = priority

    def __lt__(self, other):
        return self.priority < other.priority

class PacketScheduler:
    def __init__(self):
        self.queue = []

    def enqueue(self, packet):
        heapq.heappush(self.queue, packet)

    def dequeue(self):
        if self.queue:
            return heapq.heappop(self.queue)
        return None

# Example usage
scheduler = PacketScheduler()
scheduler.enqueue(Packet("Data 1", 3))
scheduler.enqueue(Packet("Data 2", 1))
scheduler.enqueue(Packet("Data 3", 2))

print("Dequeued packet:", scheduler.dequeue().data)`,
  exercises: [
    {
      prompt: 'Implement a packet scheduler using a priority queue and manage packet transmission based on priority.',
      initialCode: `# Write your solution here
import heapq

class Packet:
    def __init__(self, data, priority):
        self.data = data
        self.priority = priority

    def __lt__(self, other):
        return self.priority < other.priority

class PacketScheduler:
    def __init__(self):
        self.queue = []

    def enqueue(self, packet):
        heapq.heappush(self.queue, packet)

    def dequeue(self):
        if self.queue:
            return heapq.heappop(self.queue)
        return None

# Example usage
scheduler = PacketScheduler()
scheduler.enqueue(Packet("Data 1", 3))
scheduler.enqueue(Packet("Data 2", 1))
scheduler.enqueue(Packet("Data 3", 2))

print("Dequeued packet:", scheduler.dequeue().data)`,
      solution: `import heapq

class Packet:
    def __init__(self, data, priority):
        self.data = data
        self.priority = priority

    def __lt__(self, other):
        return self.priority < other.priority

class PacketScheduler:
    def __init__(self):
        self.queue = []

    def enqueue(self, packet):
        heapq.heappush(self.queue, packet)

    def dequeue(self):
        if self.queue:
            return heapq.heappop(self.queue)
        return None

# Example usage
scheduler = PacketScheduler()
scheduler.enqueue(Packet("Data 1", 3))
scheduler.enqueue(Packet("Data 2", 1))
scheduler.enqueue(Packet("Data 3", 2))

print("Dequeued packet:", scheduler.dequeue().data)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary advantage of using a priority queue in network optimization?',
      options: [
        'Efficient management and prioritization of network elements.',
        'Guaranteed O(1) time complexity for all operations.',
        'Simpler implementation compared to other data structures.',
        'Ability to handle a large number of elements with constant time complexity.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The primary advantage of using a priority queue in network optimization is its efficient management and prioritization of network elements.',
        'This is incorrect. The time complexity for extraction in a priority queue is O(log n), not O(1).',
        'This is incorrect. While the implementation is relatively straightforward, it is not necessarily simpler than other data structures.',
        'This is incorrect. The time complexity for handling a large number of elements is not constant.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const streamMedianData: LessonContent = {
  title: 'Stream Median',
  content: `<p>
Finding the median in a data stream is a common problem in data processing. The median is the middle value in a sorted list of numbers. Using two heaps (a max-heap and a min-heap) allows for efficient insertion and median retrieval.
</p>

<ul>
<li><strong>Max-Heap:</strong> Stores the smaller half of the numbers.</li>
<li><strong>Min-Heap:</strong> Stores the larger half of the numbers.</li>
<li><strong>Median Calculation:</strong> The median is either the root of the max-heap (if the heaps are balanced) or the average of the roots of both heaps (if the heaps are unbalanced).</li>
</ul>

<p>
Understanding and implementing this technique is crucial for efficient median calculations in data streams.
</p>`,
  codeExample: `# Stream median implementation using two heaps
import heapq

class StreamMedian:
    def __init__(self):
        self.max_heap = []
        self.min_heap = []

    def insert(self, num):
        if len(self.max_heap) == 0 or num <= -self.max_heap[0]:
            heapq.heappush(self.max_heap, -num)
        else:
            heapq.heappush(self.min_heap, num)

        self._balance_heaps()

    def get_median(self):
        if len(self.max_heap) == len(self.min_heap):
            return (-self.max_heap[0] + self.min_heap[0]) / 2
        elif len(self.max_heap) > len(self.min_heap):
            return -self.max_heap[0]
        else:
            return self.min_heap[0]

    def _balance_heaps(self):
        if len(self.max_heap) > len(self.min_heap) + 1:
            heapq.heappush(self.min_heap, -heapq.heappop(self.max_heap))
        elif len(self.min_heap) > len(self.max_heap) + 1:
            heapq.heappush(self.max_heap, -heapq.heappop(self.min_heap))

# Example usage
stream = StreamMedian()
stream.insert(3)
stream.insert(1)
stream.insert(2)
print("Median:", stream.get_median())`,
  exercises: [
    {
      prompt: 'Implement the stream median algorithm using two heaps and find the median for the given data stream.',
      initialCode: `# Write your solution here
import heapq

class StreamMedian:
    def __init__(self):
        self.max_heap = []
        self.min_heap = []

    def insert(self, num):
        if len(self.max_heap) == 0 or num <= -self.max_heap[0]:
            heapq.heappush(self.max_heap, -num)
        else:
            heapq.heappush(self.min_heap, num)

        self._balance_heaps()

    def get_median(self):
        if len(self.max_heap) == len(self.min_heap):
            return (-self.max_heap[0] + self.min_heap[0]) / 2
        elif len(self.max_heap) > len(self.min_heap):
            return -self.max_heap[0]
        else:
            return self.min_heap[0]

    def _balance_heaps(self):
        if len(self.max_heap) > len(self.min_heap) + 1:
            heapq.heappush(self.min_heap, -heapq.heappop(self.max_heap))
        elif len(self.min_heap) > len(self.max_heap) + 1:
            heapq.heappush(self.max_heap, -heapq.heappop(self.min_heap))

# Example usage
stream = StreamMedian()
stream.insert(3)
stream.insert(1)
stream.insert(2)
print("Median:", stream.get_median())`,
      solution: `import heapq

class StreamMedian:
    def __init__(self):
        self.max_heap = []
        self.min_heap = []

    def insert(self, num):
        if len(self.max_heap) == 0 or num <= -self.max_heap[0]:
            heapq.heappush(self.max_heap, -num)
        else:
            heapq.heappush(self.min_heap, num)

        self._balance_heaps()

    def get_median(self):
        if len(self.max_heap) == len(self.min_heap):
            return (-self.max_heap[0] + self.min_heap[0]) / 2
        elif len(self.max_heap) > len(self.min_heap):
            return -self.max_heap[0]
        else:
            return self.min_heap[0]

    def _balance_heaps(self):
        if len(self.max_heap) > len(self.min_heap) + 1:
            heapq.heappush(self.min_heap, -heapq.heappop(self.max_heap))
        elif len(self.min_heap) > len(self.max_heap) + 1:
            heapq.heappush(self.max_heap, -heapq.heappop(self.min_heap))

# Example usage
stream = StreamMedian()
stream.insert(3)
stream.insert(1)
stream.insert(2)
print("Median:", stream.get_median())`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary advantage of using two heaps for finding the median in a data stream?',
      options: [
        'Efficient insertion and median retrieval.',
        'Guaranteed O(1) time complexity for all operations.',
        'Simpler implementation compared to other data structures.',
        'Ability to handle a large number of elements with constant time complexity.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The primary advantage of using two heaps for finding the median in a data stream is its efficient insertion and median retrieval.',
        'This is incorrect. The time complexity for insertion and retrieval in two heaps is O(log n), not O(1).',
        'This is incorrect. While the implementation is relatively straightforward, it is not necessarily simpler than other data structures.',
        'This is incorrect. The time complexity for handling a large number of elements is not constant.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const taskSchedulingData: LessonContent = {
  title: 'Task Scheduling',
  content: `<p>
Task scheduling is a common problem in computer science and operations research. Using a priority queue (min-heap) allows for efficient scheduling of tasks based on their priority or deadline.
</p>

<ul>
<li><strong>Min-Heap:</strong> Used to keep track of the task with the earliest deadline or highest priority.</li>
<li><strong>Scheduling:</strong> Extract the task with the earliest deadline or highest priority and process it.</li>
</ul>

<p>
Understanding and implementing this technique is crucial for efficient task scheduling.
</p>`,
  codeExample: `# Task scheduling implementation using a min-heap
import heapq

class Task:
    def __init__(self, name, deadline):
        self.name = name
        self.deadline = deadline

    def __lt__(self, other):
        return self.deadline < other.deadline

class TaskScheduler:
    def __init__(self):
        self.queue = []

    def add_task(self, task):
        heapq.heappush(self.queue, task)

    def get_next_task(self):
        if self.queue:
            return heapq.heappop(self.queue)
        return None

# Example usage
scheduler = TaskScheduler()
scheduler.add_task(Task("Task 1", 3))
scheduler.add_task(Task("Task 2", 1))
scheduler.add_task(Task("Task 3", 2))

print("Next task:", scheduler.get_next_task().name)`,
  exercises: [
    {
      prompt: 'Implement a task scheduler using a min-heap and schedule tasks based on their deadline.',
      initialCode: `# Write your solution here
import heapq

class Task:
    def __init__(self, name, deadline):
        self.name = name
        self.deadline = deadline

    def __lt__(self, other):
        return self.deadline < other.deadline

class TaskScheduler:
    def __init__(self):
        self.queue = []

    def add_task(self, task):
        heapq.heappush(self.queue, task)

    def get_next_task(self):
        if self.queue:
            return heapq.heappop(self.queue)
        return None

# Example usage
scheduler = TaskScheduler()
scheduler.add_task(Task("Task 1", 3))
scheduler.add_task(Task("Task 2", 1))
scheduler.add_task(Task("Task 3", 2))

print("Next task:", scheduler.get_next_task().name)`,
      solution: `import heapq

class Task:
    def __init__(self, name, deadline):
        self.name = name
        self.deadline = deadline

    def __lt__(self, other):
        return self.deadline < other.deadline

class TaskScheduler:
    def __init__(self):
        self.queue = []

    def add_task(self, task):
        heapq.heappush(self.queue, task)

    def get_next_task(self):
        if self.queue:
            return heapq.heappop(self.queue)
        return None

# Example usage
scheduler = TaskScheduler()
scheduler.add_task(Task("Task 1", 3))
scheduler.add_task(Task("Task 2", 1))
scheduler.add_task(Task("Task 3", 2))

print("Next task:", scheduler.get_next_task().name)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary advantage of using a min-heap for task scheduling?',
      options: [
        'Efficient extraction of the task with the earliest deadline or highest priority.',
        'Guaranteed O(1) time complexity for all operations.',
        'Simpler implementation compared to other data structures.',
        'Ability to handle a large number of elements with constant time complexity.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The primary advantage of using a min-heap for task scheduling is its efficient extraction of the task with the earliest deadline or highest priority.',
        'This is incorrect. The time complexity for extraction in a min-heap is O(log n), not O(1).',
        'This is incorrect. While the implementation is relatively straightforward, it is not necessarily simpler than other data structures.',
        'This is incorrect. The time complexity for handling a large number of elements is not constant.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const stockPriceOperationsData: LessonContent = {
  title: 'Stock Price Operations',
  content: `<p>
Managing stock prices efficiently is crucial for financial applications. Using a heap allows for efficient operations such as finding the highest or lowest stock prices, and maintaining a sorted list of stock prices.
</p>

<ul>
<li><strong>Max-Heap:</strong> Used to keep track of the highest stock prices.</li>
<li><strong>Min-Heap:</strong> Used to keep track of the lowest stock prices.</li>
<li><strong>Operations:</strong> Insertion, extraction, and finding the highest or lowest stock prices.</li>
</ul>

<p>
Understanding and implementing this technique is crucial for efficient stock price management.
</p>`,
  codeExample: `# Stock price operations implementation using heaps
import heapq

class StockPriceTracker:
    def __init__(self):
        self.max_heap = []
        self.min_heap = []

    def add_price(self, price):
        heapq.heappush(self.max_heap, -price)
        heapq.heappush(self.min_heap, price)

    def get_highest_price(self):
        if self.max_heap:
            return -self.max_heap[0]
        return None

    def get_lowest_price(self):
        if self.min_heap:
            return self.min_heap[0]
        return None

# Example usage
tracker = StockPriceTracker()
tracker.add_price(100)
tracker.add_price(200)
tracker.add_price(150)

print("Highest price:", tracker.get_highest_price())
print("Lowest price:", tracker.get_lowest_price())`,
  exercises: [
    {
      prompt: 'Implement a stock price tracker using heaps and perform operations to find the highest and lowest stock prices.',
      initialCode: `# Write your solution here
import heapq

class StockPriceTracker:
    def __init__(self):
        self.max_heap = []
        self.min_heap = []

    def add_price(self, price):
        heapq.heappush(self.max_heap, -price)
        heapq.heappush(self.min_heap, price)

    def get_highest_price(self):
        if self.max_heap:
            return -self.max_heap[0]
        return None

    def get_lowest_price(self):
        if self.min_heap:
            return self.min_heap[0]
        return None

# Example usage
tracker = StockPriceTracker()
tracker.add_price(100)
tracker.add_price(200)
tracker.add_price(150)

print("Highest price:", tracker.get_highest_price())
print("Lowest price:", tracker.get_lowest_price())`,
      solution: `import heapq

class StockPriceTracker:
    def __init__(self):
        self.max_heap = []
        self.min_heap = []

    def add_price(self, price):
        heapq.heappush(self.max_heap, -price)
        heapq.heappush(self.min_heap, price)

    def get_highest_price(self):
        if self.max_heap:
            return -self.max_heap[0]
        return None

    def get_lowest_price(self):
        if self.min_heap:
            return self.min_heap[0]
        return None

# Example usage
tracker = StockPriceTracker()
tracker.add_price(100)
tracker.add_price(200)
tracker.add_price(150)

print("Highest price:", tracker.get_highest_price())
print("Lowest price:", tracker.get_lowest_price())`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary advantage of using heaps for managing stock prices?',
      options: [
        'Efficient insertion and extraction of the highest and lowest stock prices.',
        'Guaranteed O(1) time complexity for all operations.',
        'Simpler implementation compared to other data structures.',
        'Ability to handle a large number of elements with constant time complexity.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The primary advantage of using heaps for managing stock prices is its efficient insertion and extraction of the highest and lowest stock prices.',
        'This is incorrect. The time complexity for insertion and extraction in heaps is O(log n), not O(1).',
        'This is incorrect. While the implementation is relatively straightforward, it is not necessarily simpler than other data structures.',
        'This is incorrect. The time complexity for handling a large number of elements is not constant.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const cacheImplementationData: LessonContent = {
  title: 'Cache Design',
  content: `<p>
Cache design is a critical aspect of system performance optimization. Using heaps, particularly min-heaps or max-heaps, allows for efficient management of cache entries based on various criteria such as access frequency, recency, or priority.
</p>

<ul>
<li><strong>Min-Heap:</strong> Used to evict the least recently used (LRU) or least frequently used (LFU) cache entries.</li>
<li><strong>Max-Heap:</strong> Used to prioritize cache entries based on their importance or priority.</li>
<li><strong>Operations:</strong> Insertion, eviction, and retrieval of cache entries.</li>
</ul>

<p>
Understanding and implementing heap-based cache designs is crucial for efficient cache management.
</p>`,
  codeExample: `# Cache design implementation using a min-heap
import heapq

class CacheEntry:
    def __init__(self, key, value, priority):
        self.key = key
        self.value = value
        self.priority = priority

    def __lt__(self, other):
        return self.priority < other.priority

class Cache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = {}
        self.min_heap = []

    def get(self, key):
        if key in self.cache:
            entry = self.cache[key]
            entry.priority += 1
            heapq.heapify(self.min_heap)
            return entry.value
        return None

    def put(self, key, value):
        if len(self.cache) >= self.capacity:
            evict_entry = heapq.heappop(self.min_heap)
            del self.cache[evict_entry.key]

        new_entry = CacheEntry(key, value, 0)
        self.cache[key] = new_entry
        heapq.heappush(self.min_heap, new_entry)

# Example usage
cache = Cache(capacity=2)
cache.put("key1", "value1")
cache.put("key2", "value2")
cache.put("key3", "value3")
print("Cache after insertions:", cache.cache)`,
  exercises: [
    {
      prompt: 'Implement a cache design using a min-heap and manage cache entries based on their priority.',
      initialCode: `# Write your solution here
import heapq

class CacheEntry:
    def __init__(self, key, value, priority):
        self.key = key
        self.value = value
        self.priority = priority

    def __lt__(self, other):
        return self.priority < other.priority

class Cache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = {}
        self.min_heap = []

    def get(self, key):
        if key in self.cache:
            entry = self.cache[key]
            entry.priority += 1
            heapq.heapify(self.min_heap)
            return entry.value
        return None

    def put(self, key, value):
        if len(self.cache) >= self.capacity:
            evict_entry = heapq.heappop(self.min_heap)
            del self.cache[evict_entry.key]

        new_entry = CacheEntry(key, value, 0)
        self.cache[key] = new_entry
        heapq.heappush(self.min_heap, new_entry)

# Example usage
cache = Cache(capacity=2)
cache.put("key1", "value1")
cache.put("key2", "value2")
cache.put("key3", "value3")
print("Cache after insertions:", cache.cache)`,
      solution: `import heapq

class CacheEntry:
    def __init__(self, key, value, priority):
        self.key = key
        self.value = value
        self.priority = priority

    def __lt__(self, other):
        return self.priority < other.priority

class Cache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = {}
        self.min_heap = []

    def get(self, key):
        if key in self.cache:
            entry = self.cache[key]
            entry.priority += 1
            heapq.heapify(self.min_heap)
            return entry.value
        return None

    def put(self, key, value):
        if len(self.cache) >= self.capacity:
            evict_entry = heapq.heappop(self.min_heap)
            del self.cache[evict_entry.key]

        new_entry = CacheEntry(key, value, 0)
        self.cache[key] = new_entry
        heapq.heappush(self.min_heap, new_entry)

# Example usage
cache = Cache(capacity=2)
cache.put("key1", "value1")
cache.put("key2", "value2")
cache.put("key3", "value3")
print("Cache after insertions:", cache.cache)`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary advantage of using a heap for cache design?',
      options: [
        'Efficient eviction of the least recently used or least frequently used cache entries.',
        'Guaranteed O(1) time complexity for all operations.',
        'Simpler implementation compared to other data structures.',
        'Ability to handle a large number of elements with constant time complexity.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The primary advantage of using a heap for cache design is its efficient eviction of the least recently used or least frequently used cache entries.',
        'This is incorrect. The time complexity for eviction in a heap is O(log n), not O(1).',
        'This is incorrect. While the implementation is relatively straightforward, it is not necessarily simpler than other data structures.',
        'This is incorrect. The time complexity for handling a large number of elements is not constant.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const loadBalancingData: LessonContent = {
  title: 'Load Balancing',
  content: `<p>
Load balancing is a critical aspect of system design to distribute workloads evenly across multiple servers or resources. Using heaps allows for efficient load balancing strategies based on various criteria such as server load, response time, or availability.
</p>

<ul>
<li><strong>Min-Heap:</strong> Used to distribute workloads to the least loaded server.</li>
<li><strong>Max-Heap:</strong> Used to prioritize workloads based on their importance or priority.</li>
<li><strong>Operations:</strong> Insertion, extraction, and balancing of workloads.</li>
</ul>

<p>
Understanding and implementing heap-based load balancing strategies is crucial for efficient workload distribution.
</p>`,
  codeExample: `# Load balancing implementation using a min-heap
import heapq

class Server:
    def __init__(self, name, load):
        self.name = name
        self.load = load

    def __lt__(self, other):
        return self.load < other.load

class LoadBalancer:
    def __init__(self):
        self.servers = []

    def add_server(self, server):
        heapq.heappush(self.servers, server)

    def get_least_loaded_server(self):
        if self.servers:
            return heapq.heappop(self.servers)
        return None

# Example usage
load_balancer = LoadBalancer()
load_balancer.add_server(Server("Server 1", 3))
load_balancer.add_server(Server("Server 2", 1))
load_balancer.add_server(Server("Server 3", 2))

print("Least loaded server:", load_balancer.get_least_loaded_server().name)`,
  exercises: [
    {
      prompt: 'Implement a load balancer using a min-heap and distribute workloads to the least loaded server.',
      initialCode: `# Write your solution here
import heapq

class Server:
    def __init__(self, name, load):
        self.name = name
        self.load = load

    def __lt__(self, other):
        return self.load < other.load

class LoadBalancer:
    def __init__(self):
        self.servers = []

    def add_server(self, server):
        heapq.heappush(self.servers, server)

    def get_least_loaded_server(self):
        if self.servers:
            return heapq.heappop(self.servers)
        return None

# Example usage
load_balancer = LoadBalancer()
load_balancer.add_server(Server("Server 1", 3))
load_balancer.add_server(Server("Server 2", 1))
load_balancer.add_server(Server("Server 3", 2))

print("Least loaded server:", load_balancer.get_least_loaded_server().name)`,
      solution: `import heapq

class Server:
    def __init__(self, name, load):
        self.name = name
        self.load = load

    def __lt__(self, other):
        return self.load < other.load

class LoadBalancer:
    def __init__(self):
        self.servers = []

    def add_server(self, server):
        heapq.heappush(self.servers, server)

    def get_least_loaded_server(self):
        if self.servers:
            return heapq.heappop(self.servers)
        return None

# Example usage
load_balancer = LoadBalancer()
load_balancer.add_server(Server("Server 1", 3))
load_balancer.add_server(Server("Server 2", 1))
load_balancer.add_server(Server("Server 3", 2))

print("Least loaded server:", load_balancer.get_least_loaded_server().name)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary advantage of using a heap for load balancing?',
      options: [
        'Efficient distribution of workloads to the least loaded server.',
        'Guaranteed O(1) time complexity for all operations.',
        'Simpler implementation compared to other data structures.',
        'Ability to handle a large number of elements with constant time complexity.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The primary advantage of using a heap for load balancing is its efficient distribution of workloads to the least loaded server.',
        'This is incorrect. The time complexity for distribution in a heap is O(log n), not O(1).',
        'This is incorrect. While the implementation is relatively straightforward, it is not necessarily simpler than other data structures.',
        'This is incorrect. The time complexity for handling a large number of elements is not constant.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const resourceAllocationData: LessonContent = {
  title: 'Resource Allocation',
  content: `<p>
Resource allocation is a critical aspect of system design to manage and distribute resources efficiently. Using heaps allows for efficient allocation strategies based on various criteria such as resource availability, priority, or deadline.
</p>

<ul>
<li><strong>Min-Heap:</strong> Used to allocate resources to the task with the earliest deadline or highest priority.</li>
<li><strong>Max-Heap:</strong> Used to prioritize resource allocation based on the importance of the task.</li>
<li><strong>Operations:</strong> Insertion, extraction, and allocation of resources.</li>
</ul>

<p>
Understanding and implementing heap-based resource allocation strategies is crucial for efficient resource management.
</p>`,
  codeExample: `# Resource allocation implementation using a min-heap
import heapq

class Task:
    def __init__(self, name, resource_needed, deadline):
        self.name = name
        self.resource_needed = resource_needed
        self.deadline = deadline

    def __lt__(self, other):
        return self.deadline < other.deadline

class ResourceAllocator:
    def __init__(self, total_resources):
        self.total_resources = total_resources
        self.available_resources = total_resources
        self.tasks = []

    def add_task(self, task):
        heapq.heappush(self.tasks, task)

    def allocate_resources(self):
        while self.tasks and self.available_resources >= self.tasks[0].resource_needed:
            task = heapq.heappop(self.tasks)
            self.available_resources -= task.resource_needed
            print(f"Allocated {task.resource_needed} resources to {task.name}")

# Example usage
allocator = ResourceAllocator(total_resources=10)
allocator.add_task(Task("Task 1", 3, 2))
allocator.add_task(Task("Task 2", 4, 1))
allocator.add_task(Task("Task 3", 2, 3))

allocator.allocate_resources()`,
  exercises: [
    {
      prompt: 'Implement a resource allocator using a min-heap and allocate resources to tasks based on their deadline.',
      initialCode: `# Write your solution here
import heapq

class Task:
    def __init__(self, name, resource_needed, deadline):
        self.name = name
        self.resource_needed = resource_needed
        self.deadline = deadline

    def __lt__(self, other):
        return self.deadline < other.deadline

class ResourceAllocator:
    def __init__(self, total_resources):
        self.total_resources = total_resources
        self.available_resources = total_resources
        self.tasks = []

    def add_task(self, task):
        heapq.heappush(self.tasks, task)

    def allocate_resources(self):
        while self.tasks and self.available_resources >= self.tasks[0].resource_needed:
            task = heapq.heappop(self.tasks)
            self.available_resources -= task.resource_needed
            print(f"Allocated {task.resource_needed} resources to {task.name}")

# Example usage
allocator = ResourceAllocator(total_resources=10)
allocator.add_task(Task("Task 1", 3, 2))
allocator.add_task(Task("Task 2", 4, 1))
allocator.add_task(Task("Task 3", 2, 3))

allocator.allocate_resources()`,
      solution: `import heapq

class Task:
    def __init__(self, name, resource_needed, deadline):
        self.name = name
        self.resource_needed = resource_needed
        self.deadline = deadline

    def __lt__(self, other):
        return self.deadline < other.deadline

class ResourceAllocator:
    def __init__(self, total_resources):
        self.total_resources = total_resources
        self.available_resources = total_resources
        self.tasks = []

    def add_task(self, task):
        heapq.heappush(self.tasks, task)

    def allocate_resources(self):
        while self.tasks and self.available_resources >= self.tasks[0].resource_needed:
            task = heapq.heappop(self.tasks)
            self.available_resources -= task.resource_needed
            print(f"Allocated {task.resource_needed} resources to {task.name}")

# Example usage
allocator = ResourceAllocator(total_resources=10)
allocator.add_task(Task("Task 1", 3, 2))
allocator.add_task(Task("Task 2", 4, 1))
allocator.add_task(Task("Task 3", 2, 3))

allocator.allocate_resources()`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary advantage of using a heap for resource allocation?',
      options: [
        'Efficient allocation of resources to tasks based on their deadline or priority.',
        'Guaranteed O(1) time complexity for all operations.',
        'Simpler implementation compared to other data structures.',
        'Ability to handle a large number of elements with constant time complexity.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The primary advantage of using a heap for resource allocation is its efficient allocation of resources to tasks based on their deadline or priority.',
        'This is incorrect. The time complexity for allocation in a heap is O(log n), not O(1).',
        'This is incorrect. While the implementation is relatively straightforward, it is not necessarily simpler than other data structures.',
        'This is incorrect. The time complexity for handling a large number of elements is not constant.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const heapLessons: Record<string, LessonContent> = {
  'heap-concept': heapConceptsData,
  'heap-implementation': basicHeapImplementationData,
  'heap-properties': heapPropertiesData,
  'heap-insertion': heapInsertionData,
  'heap-extraction': heapExtractionData,
  'heapify': heapifyData,
  'heap-update': heapUpdateData,
  'min-heap': minHeapData,
  'max-heap': maxHeapData,
  'dual-heap': dualHeapData,
  'heapsort-implementation': heapSortImplementationData,
  'heapsort-analysis': heapSortAnalysisData,
  'heapsort-variations': heapSortVariationsData,
  'priority-queue-concept': priorityQueueConceptsData,
  'priority-queue-operations': priorityQueueOperationsData,
  'priority-applications': priorityQueueApplicationsData,
  'binomial-heap': binomialHeapData,
  'fibonacci-heap': fibonacciHeapData,
  'leftist-heap': leftistHeapData,
  'k-way-merge': kWayMergeData,
  'k-smallest': kSmallestElementsData,
  'k-closest': kClosestPointsData,
  'dijkstra-heap': dijkstraHeapData,
  'prim-heap': primHeapData,
  'network-optimization': networkOptimizationData,
  'stream-median': streamMedianData,
  'scheduling': taskSchedulingData,
  'stock-price': stockPriceOperationsData,
  'cache-implementation': cacheImplementationData,
  'load-balancing': loadBalancingData,
  'resource-allocation': resourceAllocationData
};

export const heapLessonsTab: LessonsTab = {
  curriculum: heapCurriculum,
  lessons: heapLessons,
};
