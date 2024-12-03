import { Difficulty } from '@/common/commonConcept';
import { Curriculum, LessonContent, LessonsTab, PriorityLevel } from '@/common/commonLesson';

const heapCurriculum: Curriculum = {
  title: 'Heap Curriculum',
  description:
    'Master heap data structures and common patterns to solve LeetCode problems and ace technical interviews',
  sections: [
    {
      id: 1,
      title: 'Heap Fundamentals',
      topics: [
        {
          id: 'heap-concept',
          title: 'Heap Concepts',
          description: 'Understanding heap properties and structure with LeetCode examples',
          priority: PriorityLevel.Essential
        },
        {
          id: 'heap-implementation',
          title: 'Basic Heap Implementation',
          description: 'Implementing a binary heap using arrays - a common interview requirement',
          priority: PriorityLevel.Essential
        },
        {
          id: 'heap-properties',
          title: 'Heap Properties',
          description: 'Complete binary tree and heap properties with visualization',
          priority: PriorityLevel.Essential
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
          description: 'Adding elements while maintaining heap property - common subproblem in interviews',
          priority: PriorityLevel.Essential
        },
        {
          id: 'heap-extraction',
          title: 'Extraction Operation',
          description: 'Removing elements and restructuring heap - fundamental for K-element problems',
          priority: PriorityLevel.Essential
        },
        {
          id: 'heapify',
          title: 'Heapify Process',
          description: 'Converting arrays into heaps - crucial for heap sort and K-largest problems',
          priority: PriorityLevel.Essential
        },
        {
          id: 'heap-update',
          title: 'Update Operations',
          description: 'Modifying elements in place - used in priority queue problems',
          priority: PriorityLevel.Important
        },
      ],
    },
    {
      id: 3,
      title: 'Common LeetCode Patterns',
      topics: [
        {
          id: 'top-k-pattern',
          title: 'Top-K Pattern',
          description: 'Solving Top-K problems using heaps with example problems and solutions',
          priority: PriorityLevel.Essential
        },
        {
          id: 'k-way-merge',
          title: 'K-Way Merge Pattern',
          description: 'Techniques for merging K sorted arrays/lists using heaps',
          priority: PriorityLevel.Essential
        },
        {
          id: 'two-heaps',
          title: 'Two Heaps Pattern',
          description: 'Using min and max heaps together to solve median and interval problems',
          priority: PriorityLevel.Essential
        },
      ],
    },
    {
      id: 4,
      title: 'Priority Queue Applications',
      topics: [
        {
          id: 'stream-processing',
          title: 'Stream Processing',
          description: 'Handling data streams using heaps - median finding and running statistics',
          priority: PriorityLevel.Important
        },
        {
          id: 'scheduling-problems',
          title: 'Scheduling Problems',
          description: 'Solving task scheduling and interval problems using priority queues',
          priority: PriorityLevel.Important
        },
        {
          id: 'k-closest-points',
          title: 'K-Closest Points',
          description: 'Finding K-closest points and similar distance-based problems',
          priority: PriorityLevel.Essential
        },
      ],
    },
    {
      id: 5,
      title: 'Advanced Problem Patterns',
      topics: [
        {
          id: 'sliding-window-heap',
          title: 'Sliding Window with Heap',
          description: 'Combining sliding window and heap techniques for optimization problems',
          priority: PriorityLevel.Important
        },
        {
          id: 'multiple-heaps',
          title: 'Multiple Heaps Strategy',
          description: 'Using multiple heaps to solve complex scheduling and interval problems',
          priority: PriorityLevel.Beneficial
        },
        {
          id: 'heap-with-hashmap',
          title: 'Heap with HashMap',
          description: 'Combining heap with hash map for optimized lookup and updates',
          priority: PriorityLevel.Important
        },
      ],
    },
    {
      id: 6,
      title: 'Problem-Solving Techniques',
      topics: [
        {
          id: 'when-to-use',
          title: 'When to Use Heaps',
          description: 'Identifying problems that require heaps vs. other data structures',
          priority: PriorityLevel.Essential
        },
        {
          id: 'optimization',
          title: 'Optimization Techniques',
          description: 'Common optimization patterns and time/space complexity trade-offs',
          priority: PriorityLevel.Essential
        },
        {
          id: 'common-mistakes',
          title: 'Common Mistakes',
          description: 'Avoiding common pitfalls in heap-based solutions and edge cases',
          priority: PriorityLevel.Essential
        },
      ],
    },
    {
      id: 7,
      title: 'Implementation Patterns',
      topics: [
        {
          id: 'custom-comparator',
          title: 'Custom Comparators',
          description: 'Implementing custom comparison logic for complex heap problems',
          priority: PriorityLevel.Important
        },
        {
          id: 'language-specifics',
          title: 'Language-Specific Tools',
          description: 'Using built-in heap/priority queue implementations effectively',
          priority: PriorityLevel.Essential
        },
        {
          id: 'edge-cases',
          title: 'Edge Cases',
          description: 'Handling empty heaps, single elements, and other special cases',
          priority: PriorityLevel.Essential
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

const topKPatternData: LessonContent = {
  title: 'Top-K Pattern',
  content: `<p>
The Top-K Pattern is commonly used to find the top K elements from a large set of items. 
This pattern is frequently applied in problems where you need to identify the most frequent elements, 
largest or smallest numbers, or top candidates based on certain criteria. 
Heaps, especially max-heaps and min-heaps, are efficient data structures for implementing the Top-K Pattern.
</p>

<p>
The general approach involves:
</p>

<ol>
  <li>
    <strong>Use a Min-Heap of Size K:</strong> 
    Iterate through the elements, maintaining a min-heap of the top K elements. 
    If a new element is better than the smallest in the heap, replace it.
  </li>
  <li>
    <strong>Time Complexity:</strong> 
    O(N log K), where N is the total number of elements.
  </li>
</ol>`,
  codeExample: `# Example: Top K Frequent Elements
from collections import Counter
import heapq

def topKFrequent(nums, k):
    # Count the frequency of each number
    freq_map = Counter(nums)
    # Use a min-heap to keep track of the top k frequent elements
    heap = []
    for num, freq in freq_map.items():
        heapq.heappush(heap, (freq, num))
        if len(heap) > k:
            heapq.heappop(heap)
    # Extract the top k elements
    top_k = [heapq.heappop(heap)[1] for _ in range(k)]
    return top_k[::-1]

# Example usage:
nums = [1,1,1,2,2,3]
k = 2
print(topKFrequent(nums, k))  # Output: [1, 2]`,
  exercises: [
    {
      prompt: 'Implement a function to find the top K largest numbers in an array using a min-heap.',
      initialCode: `# Write your solution here
def top_k_largest(nums, k):
    pass`,
      solution: `import heapq

def top_k_largest(nums, k):
    # Use a min-heap to keep track of the top k largest elements
    heap = []
    for num in nums:
        heapq.heappush(heap, num)
        if len(heap) > k:
            heapq.heappop(heap)
    # Extract the elements from the heap
    top_k = []
    while heap:
        top_k.append(heapq.heappop(heap))
    return top_k[::-1]`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the time complexity of finding the top K elements using a heap?',
      options: [
        'O(N)',
        'O(N log K)',
        'O(K log N)',
        'O(N log N)',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. O(N) is too optimistic for this problem.',
        'Correct. O(N log K) is the time complexity when using a heap of size K.',
        'Incorrect. O(K log N) is not the standard complexity for this approach.',
        'Incorrect. O(N log N) would be if you sort the entire array.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const kWayMergeData: LessonContent = {
  title: 'K-Way Merge Pattern',
  content: `<p>
The K-Way Merge Pattern is used to merge K sorted arrays or lists into a single sorted array. 
This pattern is useful in scenarios where you have multiple sorted inputs and need to combine them efficiently.
</p>

<p>
The typical approach involves:
</p>

<ol>
  <li>
    <strong>Use a Min-Heap to Track the Smallest Elements:</strong> 
    Initialize the heap with the first element of each array. 
    Then, repeatedly extract the smallest element and insert the next element from the corresponding array.
  </li>
  <li>
    <strong>Time Complexity:</strong> 
    O(N log K), where N is the total number of elements across all arrays.
  </li>
</ol>`,
  codeExample: `# Example: Merge K Sorted Arrays
import heapq

def merge_k_sorted_arrays(arrays):
    # Initialize a heap with the first element of each array
    heap = []
    for i, arr in enumerate(arrays):
        if arr:
            heap.append((arr[0], i, 0))
    heapq.heapify(heap)
    
    merged = []
    while heap:
        val, array_idx, element_idx = heapq.heappop(heap)
        merged.append(val)
        if element_idx + 1 < len(arrays[array_idx]):
            next_val = arrays[array_idx][element_idx + 1]
            heapq.heappush(heap, (next_val, array_idx, element_idx + 1))
    return merged

# Example usage:
arrays = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
]
print(merge_k_sorted_arrays(arrays))  # Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]`,
  exercises: [
    {
      prompt: 'Implement a function to merge K sorted arrays into one sorted array using a min-heap.',
      initialCode: `# Write your solution here
def merge_k_sorted_arrays(arrays):
    pass`,
      solution: `import heapq

def merge_k_sorted_arrays(arrays):
    heap = []
    # Initialize the heap with the first element of each array
    for i, arr in enumerate(arrays):
        if arr:
            heapq.heappush(heap, (arr[0], i, 0))
    merged = []
    while heap:
        val, array_idx, element_idx = heapq.heappop(heap)
        merged.append(val)
        if element_idx + 1 < len(arrays[array_idx]):
            next_val = arrays[array_idx][element_idx + 1]
            heapq.heappush(heap, (next_val, array_idx, element_idx + 1))
    return merged`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which data structure is most efficient for merging K sorted arrays?',
      options: [
        'Linked List',
        'Min-Heap',
        'Max-Heap',
        'Stack',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. While possible, it is not the most efficient method.',
        'Correct. A min-heap efficiently retrieves the smallest elements.',
        'Incorrect. A max-heap is not suitable for this purpose.',
        'Incorrect. A stack does not help in merging sorted arrays.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const twoHeapsData: LessonContent = {
  title: 'Two Heaps Pattern',
  content: `<p>
The Two Heaps Pattern involves using a max-heap and a min-heap together to maintain a window of elements, 
often used to find the median of a data stream in real-time. This pattern helps in balancing the heaps 
to ensure that the median can be quickly retrieved.
</p>

<p>
The typical approach includes:
</p>

<ol>
  <li>
    <strong>Max-Heap for the Lower Half:</strong> 
    Stores the smaller half of the numbers.
  </li>
  <li>
    <strong>Min-Heap for the Upper Half:</strong> 
    Stores the larger half of the numbers.
  </li>
  <li>
    <strong>Balance the Heaps:</strong> 
    Ensure that the heaps are of equal size (or differ by at most one element).
  </li>
</ol>`,
  codeExample: `# Example: Median Finder using Two Heaps
import heapq

class MedianFinder:
    def __init__(self):
        self.max_heap = []  # stores the smaller half
        self.min_heap = []  # stores the larger half

    def add_num(self, num):
        # Add to max_heap
        heapq.heappush(self.max_heap, -num)
        # Balance: move the largest of max_heap to min_heap
        if self.max_heap and self.min_heap and (-self.max_heap[0] > self.min_heap[0]):
            val = -heapq.heappop(self.max_heap)
            heapq.heappush(self.min_heap, val)
        # If max_heap has more than one element than min_heap
        if len(self.max_heap) > len(self.min_heap) + 1:
            val = -heapq.heappop(self.max_heap)
            heapq.heappush(self.min_heap, val)
        # If min_heap has more elements than max_heap
        if len(self.min_heap) > len(self.max_heap):
            val = heapq.heappop(self.min_heap)
            heapq.heappush(self.max_heap, -val)

    def find_median(self):
        if not self.max_heap and not self.min_heap:
            return 0.0
        if len(self.max_heap) > len(self.min_heap):
            return -self.max_heap[0]
        else:
            return (-self.max_heap[0] + self.min_heap[0]) / 2.0

# Example usage:
mf = MedianFinder()
mf.add_num(1)
mf.add_num(2)
print(mf.find_median())  # Output: 1.5
mf.add_num(3)
print(mf.find_median())  # Output: 2.0`,
  exercises: [
    {
      prompt: 'Implement a MedianFinder class that allows adding numbers and finding the current median using two heaps.',
      initialCode: `# Write your solution here
class MedianFinder:
    def __init__(self):
        pass
    def add_num(self, num):
        pass
    def find_median(self):
        pass`,
      solution: `import heapq

class MedianFinder:
    def __init__(self):
        self.max_heap = []
        self.min_heap = []

    def add_num(self, num):
        heapq.heappush(self.max_heap, -num)
        if self.max_heap and self.min_heap and (-self.max_heap[0] > self.min_heap[0]):
            val = -heapq.heappop(self.max_heap)
            heapq.heappush(self.min_heap, val)
        if len(self.max_heap) > len(self.min_heap) + 1:
            val = -heapq.heappop(self.max_heap)
            heapq.heappush(self.min_heap, val)
        if len(self.min_heap) > len(self.max_heap):
            val = heapq.heappop(self.min_heap)
            heapq.heappush(self.max_heap, -val)

    def find_median(self):
        if not self.max_heap and not self.min_heap:
            return 0.0
        if len(self.max_heap) > len(self.min_heap):
            return -self.max_heap[0]
        else:
            return (-self.max_heap[0] + self.min_heap[0]) / 2.0`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the purpose of using two heaps in the Two Heaps Pattern?',
      options: [
        'To find the minimum element efficiently',
        'To find the maximum element efficiently',
        'To maintain a balanced data structure for median finding',
        'To sort the elements in ascending order',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. While possible, it is not the main purpose.',
        'Incorrect. Similarly, not the main purpose.',
        'Correct. The two heaps help maintain the median efficiently.',
        'Incorrect. Sorting is not the primary use case here.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const streamProcessingData: LessonContent = {
  title: 'Stream Processing',
  content: `<p>
Stream Processing involves handling continuous data streams in real-time using data structures like heaps. 
A common application is finding the median in a data stream, which can be efficiently managed using two heaps: 
a max-heap for the lower half and a min-heap for the upper half.
</p>

<p>
This approach allows for efficient insertion and retrieval of the median with a time complexity of O(log N) per operation.
</p>`,
  codeExample: `# Median Finder in Data Stream
import heapq

class MedianFinder:
    def __init__(self):
        self.max_heap = []  # stores the smaller half
        self.min_heap = []  # stores the larger half

    def add_num(self, num):
        if not self.max_heap or num <= -self.max_heap[0]:
            heapq.heappush(self.max_heap, -num)
        else:
            heapq.heappush(self.min_heap, num)
        # Balance the heaps
        if len(self.max_heap) > len(self.min_heap) + 1:
            val = -heapq.heappop(self.max_heap)
            heapq.heappush(self.min_heap, val)
        elif len(self.min_heap) > len(self.max_heap):
            val = heapq.heappop(self.min_heap)
            heapq.heappush(self.max_heap, -val)

    def find_median(self):
        if len(self.max_heap) == len(self.min_heap):
            return (-self.max_heap[0] + self.min_heap[0]) / 2.0
        else:
            return -self.max_heap[0]

# Example usage:
mf = MedianFinder()
mf.add_num(1)
mf.add_num(2)
print(mf.find_median())  # Output: 1.5
mf.add_num(3)
print(mf.find_median())  # Output: 2.0`,
  exercises: [
    {
      prompt: 'Implement a running average calculator using a queue and a sum tracker.',
      initialCode: `# Write your solution here
class RunningAverage:
    def __init__(self):
        pass
    def add_num(self, num):
        pass
    def get_average(self):
        pass`,
      solution: `from collections import deque

class RunningAverage:
    def __init__(self):
        self.queue = deque()
        self.sum = 0
        self.count = 0

    def add_num(self, num):
        self.queue.append(num)
        self.sum += num
        self.count += 1

    def get_average(self):
        return self.sum / self.count if self.count > 0 else 0.0`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'What is the time complexity of inserting an element into a heap?',
      options: [
        'O(1)',
        'O(log N)',
        'O(N)',
        'O(N log N)',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Heap insertion is not constant time.',
        'Correct. Insertion into a heap is O(log N).',
        'Incorrect. O(N) is the time complexity for heapify.',
        'Incorrect. O(N log N) is for heap sort.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const schedulingProblemsData: LessonContent = {
  title: 'Scheduling Problems',
  content: `<p>
Scheduling Problems involve managing tasks based on priorities or deadlines. 
Priority queues (heaps) are useful for scheduling tasks where the task with the highest priority is executed first.
</p>

<p>
Common scenarios include CPU scheduling and interval scheduling to maximize resource utilization.
</p>`,
  codeExample: `# Task Scheduler using Priority Queue
import heapq

class Task:
    def __init__(self, name, priority):
        self.name = name
        self.priority = priority
    def __lt__(self, other):
        return self.priority < other.priority  # Min-heap based on priority

def schedule_tasks(tasks):
    heapq.heapify(tasks)
    scheduled = []
    while tasks:
        task = heapq.heappop(tasks)
        scheduled.append(task.name)
    return scheduled

# Example usage:
tasks = [Task('Task1', 3), Task('Task2', 1), Task('Task3', 2)]
print(schedule_tasks(tasks))  # Output: ['Task2', 'Task3', 'Task1']`,
  exercises: [
    {
      prompt: 'Implement a task scheduler that executes tasks based on their priority.',
      initialCode: `# Write your solution here
class Task:
    def __init__(self, name, priority):
        pass
    def __lt__(self, other):
        pass

def schedule_tasks(tasks):
    pass`,
      solution: `import heapq

class Task:
    def __init__(self, name, priority):
        self.name = name
        self.priority = priority
    def __lt__(self, other):
        return self.priority < other.priority

def schedule_tasks(tasks):
    heapq.heapify(tasks)
    scheduled = []
    while tasks:
        task = heapq.heappop(tasks)
        scheduled.append(task.name)
    return scheduled`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which scheduling algorithm uses a priority queue to select the next task?',
      options: [
        'First-Come, First-Served (FCFS)',
        'Shortest Job First (SJF)',
        'Priority Scheduling',
        'Round Robin (RR)',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. FCFS does not use priorities.',
        'Incorrect. SJF schedules based on job length.',
        'Correct. Priority Scheduling uses a priority queue.',
        'Incorrect. RR uses a queue but not based on priority.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const kClosestPointsData: LessonContent = {
  title: 'K-Closest Points',
  content: `<p>
The K-Closest Points problem involves finding the k points closest to a given origin from a set of points. 
This can be efficiently solved using a max-heap to maintain the top k closest points.
</p>

<p>
The algorithm maintains a heap of size k, ensuring that only the closest points are retained.
</p>`,
  codeExample: `# Finding K-Closest Points to Origin
import heapq

def k_closest_points(points, k):
    heap = []
    for point in points:
        dist = point[0]**2 + point[1]**2
        heapq.heappush(heap, (-dist, point))
        if len(heap) > k:
            heapq.heappop(heap)
    closest = [p for (_, p) in heap]
    return closest

# Example usage:
points = [[1,3],[2,2],[3,1],[0,0]]
k = 2
print(k_closest_points(points, k))  # Output: [[0, 0], [2, 2]]`,
  exercises: [
    {
      prompt: 'Implement a function to find the k closest points to the origin using a max-heap.',
      initialCode: `# Write your solution here
def k_closest_points(points, k):
    pass`,
      solution: `import heapq

def k_closest_points(points, k):
    heap = []
    for point in points:
        dist = point[0]**2 + point[1]**2
        heapq.heappush(heap, (-dist, point))
        if len(heap) > k:
            heapq.heappop(heap)
    closest = [p for (_, p) in heap]
    return closest`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Why is a max-heap used in finding the k closest points?',
      options: [
        'To keep track of the largest distances',
        'To keep track of the smallest distances',
        'To sort the points based on their coordinates',
        'To maintain a queue of points',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct. A max-heap keeps the largest distances, allowing us to discard them when not needed.',
        'Incorrect. We need a max-heap to remove larger distances.',
        'Incorrect. Sorting is not the primary use here.',
        'Incorrect. It is not used as a simple queue.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const multipleHeapsData: LessonContent = {
  title: 'Multiple Heaps Strategy',
  content: `<p>
    Using multiple heaps, such as a max-heap and a min-heap, can solve complex problems like median maintenance and task scheduling efficiently.
  </p>
  <h2>Concepts</h2>
  <p>
    - Max-heap: For accessing the largest element.
    - Min-heap: For accessing the smallest element.
  </p>
  <h2>Example Problem</h2>
  <p>
    Maintain the median of a stream of numbers using two heaps.
  </p>`,
  codeExample: `// Code to maintain median using two heaps
function medianStream(stream) {
  // Implementation using max-heap and min-heap
}`,
  exercises: [
    {
      prompt: 'Implement a median stream using two heaps.',
      initialCode: `function medianStream(stream) {
  // Your code here
}`,
      solution: `// Complete solution code`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the advantage of using multiple heaps?',
      options: ['Efficient median calculation', 'Easy implementation', 'Faster access to extremes'],
      correctAnswer: 0,
      explanations: ['Correct answer', 'Partial answer', 'Partial answer'],
      difficulty: Difficulty.Beginner,
    },
  ],
};


const slidingWindowHeapData: LessonContent = {
  title: 'Sliding Window with Heap',
  content: `<p>
    The sliding window technique is used to process sequences efficiently. Combining it with a heap allows optimization in problems requiring frequent maximum or minimum queries within a window.
  </p>
  <h2>Concepts</h2>
  <p>
    - Sliding window: A moving subarray of fixed size.
    - Heap: A complete binary tree used for quick access to max or min elements.
  </p>
  <h2>Example Problem</h2>
  <p>
    Find the maximum of each sliding window of size k in an array.
  </p>`,
  codeExample: `// Code to find maximum in each sliding window using a heap
function slidingWindowMax(arr, k) {
  // Implementation using a max-heap
}`,
  exercises: [
    {
      prompt: 'Implement a function to find the maximum of each sliding window using a heap.',
      initialCode: `function slidingWindowMax(arr, k) {
  // Your code here
}`,
      solution: `// Complete solution code`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Why use a heap in a sliding window?',
      options: ['To maintain sorted order', 'To find max/min efficiently', 'Both A and B'],
      correctAnswer: 2,
      explanations: ['Partial answer', 'Partial answer', 'Correct answer'],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const heapWithHashMapData: LessonContent = {
  title: 'Heap with HashMap',
  content: `<p>
    Combining a heap with a hash map allows efficient updates and deletions, useful in problems like top K frequent elements.
  </p>
  <h2>Concepts</h2>
  <p>
    - Heap: For priority queue operations.
    - HashMap: For tracking element positions and frequencies.
  </p>
  <h2>Example Problem</h2>
  <p>
    Find the top K frequent elements in an array.
  </p>`,
  codeExample: `// Code to find top K frequent elements using heap and hashmap
function topKFrequent(arr, k) {
  // Implementation using heap and hashmap
}`,
  exercises: [
    {
      prompt: 'Implement a function to find the top K frequent elements using a heap and a hashmap.',
      initialCode: `function topKFrequent(arr, k) {
  // Your code here
}`,
      solution: `// Complete solution code`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'How does a hashmap help in heap operations?',
      options: ['By storing frequencies', 'By tracking element positions', 'Both A and B'],
      correctAnswer: 2,
      explanations: ['Partial answer', 'Partial answer', 'Correct answer'],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const whenToUseHeapsData: LessonContent = {
  title: 'When to Use Heaps',
  content: `<p>
    Heaps are particularly useful in scenarios where you need efficient access to the maximum or minimum element. They are ideal for implementing priority queues, finding top K elements, and maintaining medians.
  </p>
  <h2>Scenarios</h2>
  <ul>
    <li><strong>Priority Queues:</strong> When elements have different priorities and you need to process the highest (or lowest) priority first.</li>
    <li><strong>Top K Problems:</strong> Finding the top K elements in a dataset, such as top K frequent elements.</li>
    <li><strong>Median Maintenance:</strong> Keeping track of the median in a stream of numbers using two heaps.</li>
  </ul>`,
  codeExample: `// Priority Queue using a min-heap
class PriorityQueue {
  constructor() {
    this.heap = [];
  }
  insert(element, priority) {
    this.heap.push({ element, priority });
    this.bubbleUp(this.heap.length - 1);
  }
  extractMin() {
    if (this.heap.length === 0) return null;
    const min = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.sinkDown(0);
    }
    return min.element;
  }
  // Additional heap methods
}`,
  exercises: [
    {
      prompt: 'Implement a priority queue using a heap.',
      initialCode: `class PriorityQueue {
  constructor() {
    this.heap = [];
  }
  // Implement insert and extractMin methods
}`,
      solution: `// Complete solution code`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Identify which of the following problems is best solved with a heap: sorting, priority scheduling, linked list manipulation.',
      initialCode: `// Write your answer here`,
      solution: `// Priority scheduling is best solved with a heap.`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which scenario is best suited for a heap?',
      options: ['Frequent access to the minimum element', 'Fast insertion and deletion', 'Both A and B'],
      correctAnswer: 2,
      explanations: ['Partial answer', 'Partial answer', 'Correct answer'],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const optimizationTechniquesData: LessonContent = {
  title: 'Optimization Techniques',
  content: `<p>
    Optimizing heap-based solutions often involves combining heaps with other data structures or minimizing operations to reduce time and space complexity.
  </p>
  <h2>Techniques</h2>
  <ul>
    <li><strong>Heap with HashMap:</strong> For efficient updates and deletions.</li>
    <li><strong>Reducing Operations:</strong> Avoid unnecessary heap operations to save time.</li>
    <li><strong>Space Optimization:</strong> Use heaps when space is a concern but quick access to min or max is needed.</li>
  </ul>`,
  codeExample: `// Top K frequent elements using heap and hashmap
function topKFrequent(arr, k) {
  const freqMap = new Map();
  arr.forEach(num => freqMap.set(num, (freqMap.get(num) || 0) + 1));
  const heap = [];
  freqMap.forEach((freq, num) => {
    heap.push({ freq, num });
  });
  heap.sort((a, b) => b.freq - a.freq);
  return heap.slice(0, k).map(item => item.num);
}`,
  exercises: [
    {
      prompt: 'Optimize the top K frequent elements algorithm using a heap and a hashmap.',
      initialCode: `function topKFrequent(arr, k) {
  // Your code here
}`,
      solution: `// Complete solution code`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is a common optimization when using heaps?',
      options: ['Using a hashmap for tracking', 'Minimizing heap operations', 'Both A and B'],
      correctAnswer: 2,
      explanations: ['Partial answer', 'Partial answer', 'Correct answer'],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const commonMistakesData: LessonContent = {
  title: 'Common Mistakes',
  content: `<p>
    Common pitfalls in heap-based solutions include incorrect heap property maintenance, handling edge cases, and misunderstanding time complexities.
  </p>
  <h2>Mistakes to Avoid</h2>
  <ul>
    <li><strong>Heap Property Violations:</strong> Ensuring the heap property is maintained after insertions and deletions.</li>
    <li><strong>Edge Cases:</strong> Handling empty heaps, duplicate elements, or single-element heaps.</li>
    <li><strong>Time Complexity Misunderstandings:</strong> Assuming all heap operations are O(1), which they are not.</li>
  </ul>`,
  codeExample: `// Incorrect heap implementation
class IncorrectHeap {
  constructor() {
    this.heap = [];
  }
  insert(element) {
    this.heap.push(element);
    // Forgot to bubble up
  }
  extractMin() {
    const min = this.heap[0];
    this.heap.shift();
    return min;
  }
}`,
  exercises: [
    {
      prompt: 'Identify and fix mistakes in the provided heap implementation.',
      initialCode: `class IncorrectHeap {
  constructor() {
    this.heap = [];
  }
  insert(element) {
    this.heap.push(element);
    // Fix this method
  }
  extractMin() {
    const min = this.heap[0];
    this.heap.shift();
    return min;
  }
}`,
      solution: `// Corrected heap implementation with bubble up and sink down methods`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is a common mistake in heap implementations?',
      options: ['Not maintaining heap property', 'Ignoring edge cases', 'Both A and B'],
      correctAnswer: 2,
      explanations: ['Partial answer', 'Partial answer', 'Correct answer'],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const customComparatorData: LessonContent = {
  title: 'Custom Comparators',
  content: `<p>
Custom comparators allow you to define your own comparison logic when working with heaps, 
which is essential for solving complex heap problems. By default, Python's <code>heapq</code> 
module uses the natural ordering of elements, but you can override this behavior using custom 
comparators. This is particularly useful when dealing with objects or when you need a different 
ordering criterion.
</p>

<p>
To implement a custom comparator, you can use the <code>functools</code> module, specifically 
<code>functools.total_ordering</code> or <code>functools.cmp_to_key</code>, depending on your needs.
</p>`,
  codeExample: `import heapq
from functools import total_ordering

@total_ordering
class CustomObject:
    def __init__(self, value):
        self.value = value
    def __eq__(self, other):
        return self.value == other.value
    def __lt__(self, other):
        return self.value < other.value

# Create a heap of CustomObject instances
heap = []
heapq.heappush(heap, CustomObject(5))
heapq.heappush(heap, CustomObject(3))
heapq.heappush(heap, CustomObject(7))

# Pop elements from the heap
while heap:
    print(heapq.heappop(heap).value)  # Output: 3, 5, 7

# Custom comparator using functools.cmp_to_key
def compare(a, b):
    if a.value < b.value:
        return -1
    elif a.value > b.value:
        return 1
    else:
        return 0

heap = []
heapq.heappush(heap, CustomObject(5))
heapq.heappush(heap, CustomObject(3))
heapq.heappush(heap, CustomObject(7))

# Use a custom comparator with heapq
heap_sorted = sorted(heap, key=cmp_to_key(compare))

for obj in heap_sorted:
    print(obj.value)  # Output: 3, 5, 7`,
  exercises: [
    {
      prompt: 'Implement a custom comparator for a heap that orders strings by their length.',
      initialCode: `import heapq
from functools import cmp_to_key

class StringItem:
    def __init__(self, s):
        self.s = s

# Define the custom comparator function here

# Create a heap and push some strings
heap = []
heapq.heappush(heap, StringItem("apple"))
heapq.heappush(heap, StringItem("banana"))
heapq.heappush(heap, StringItem("cherry"))

# Use the custom comparator to pop strings ordered by length`,
      solution: `import heapq
from functools import cmp_to_key

class StringItem:
    def __init__(self, s):
        self.s = s

def compare(a, b):
    if len(a.s) < len(b.s):
        return -1
    elif len(a.s) > len(b.s):
        return 1
    else:
        return 0

# Create a heap and push some strings
heap = []
heapq.heappush(heap, StringItem("apple"))
heapq.heappush(heap, StringItem("banana"))
heapq.heappush(heap, StringItem("cherry"))

# Use the custom comparator to pop strings ordered by length
heap_sorted = sorted(heap, key=cmp_to_key(compare))

for item in heap_sorted:
    print(item.s)  # Output: apple, cherry, banana`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Create a heap that orders tuples based on the second element in descending order using a custom comparator.',
      initialCode: `import heapq
from functools import cmp_to_key

# Define the custom comparator function here

# Create a heap and push some tuples
heap = []
heapq.heappush(heap, (1, 5))
heapq.heappush(heap, (2, 3))
heapq.heappush(heap, (3, 7))

# Use the custom comparator to pop tuples ordered by the second element in descending order`,
      solution: `import heapq
from functools import cmp_to_key

def compare(a, b):
    if a[1] > b[1]:
        return -1
    elif a[1] < b[1]:
        return 1
    else:
        return 0

# Create a heap and push some tuples
heap = []
heapq.heappush(heap, (1, 5))
heapq.heappush(heap, (2, 3))
heapq.heappush(heap, (3, 7))

# Use the custom comparator to pop tuples ordered by the second element in descending order
heap_sorted = sorted(heap, key=cmp_to_key(compare))

for tuple_item in heap_sorted:
    print(tuple_item)  # Output: (3, 7), (1, 5), (2, 3)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which module in Python allows you to create custom comparators for heap operations?',
      options: [
        'heapq',
        'functools',
        'operator',
        'collections',
      ],
      correctAnswer: 1,
      explanations: [
        'heapq is used for heap operations, not for comparators.',
        'functools provides tools like cmp_to_key for creating custom comparators.',
        'operator provides functions for working with operators, not custom comparators.',
        'collections provides container data types, not custom comparators.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What decorator can be used to simplify the creation of comparison methods in a class?',
      options: [
        '@staticmethod',
        '@classmethod',
        '@total_ordering',
        '@property',
      ],
      correctAnswer: 2,
      explanations: [
        '@staticmethod is used for static methods, not comparisons.',
        '@classmethod is used for class methods, not comparisons.',
        '@total_ordering automatically generates comparison methods based on the ones defined.',
        '@property is used for getter methods, not comparisons.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const languageSpecificToolsData: LessonContent = {
  title: 'Language-Specific Tools',
  content: `<p>
Python provides built-in modules and functions to work with heaps efficiently. The most commonly used 
module is <code>heapq</code>, which provides an implementation of the heap queue algorithm, also known 
as the priority queue algorithm.
</p>

<p>
The <code>heapq</code> module offers functions to create and manage heaps, as well as perform common 
operations like pushing and popping elements. Understanding how to use these tools effectively is crucial 
for solving problems that involve priority queues or need efficient access to the smallest (or largest) 
elements.
</p>`,
  codeExample: `import heapq

# Creating a heap
heap = []
heapq.heappush(heap, 10)
heapq.heappush(heap, 20)
heapq.heappush(heap, 5)
heapq.heappush(heap, 15)

# Pop elements from the heap in ascending order
while heap:
    print(heapq.heappop(heap))  # Output: 5, 10, 15, 20

# Convert a list into a heap in-place
list_heap = [4, 10, 3, 5, 1]
heapq.heapify(list_heap)
print(list_heap)  # Output: [1, 5, 3, 10, 4]

# Accessing the smallest element
print(heapq.nsmallest(2, list_heap))  # Output: [1, 3]

# Accessing the largest elements
print(heapq.nlargest(2, list_heap))  # Output: [10, 5]

# Heap operations with tuples
heap_tuples = []
heapq.heappush(heap_tuples, (5, 'apple'))
heapq.heappush(heap_tuples, (3, 'banana'))
heapq.heappush(heap_tuples, (7, 'cherry'))

# Pop elements ordered by the first element of the tuple
while heap_tuples:
    print(heapq.heappop(heap_tuples))  # Output: (3, 'banana'), (5, 'apple'), (7, 'cherry')`,
  exercises: [
    {
      prompt: 'Use the <code>heapq</code> module to find the three smallest numbers in a list.',
      initialCode: `import heapq

numbers = [15, 22, 8, 10, 3, 6, 12]

# Find the three smallest numbers using heapq`,
      solution: `import heapq

numbers = [15, 22, 8, 10, 3, 6, 12]

smallest_three = heapq.nsmallest(3, numbers)
print(smallest_three)  # Output: [3, 6, 8]`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Implement a priority queue using <code>heapq</code> where tasks are ordered by priority.',
      initialCode: `import heapq

class Task:
    def __init__(self, priority, description):
        self.priority = priority
        self.description = description

# Create a priority queue and add some tasks`,
      solution: `import heapq

class Task:
    def __init__(self, priority, description):
        self.priority = priority
        self.description = description

    def __lt__(self, other):
        return self.priority < other.priority

# Create a priority queue and add some tasks
priority_queue = []
heapq.heappush(priority_queue, Task(5, 'Task 1'))
heapq.heappush(priority_queue, Task(3, 'Task 2'))
heapq.heappush(priority_queue, Task(7, 'Task 3'))

# Pop tasks in order of priority
while priority_queue:
    task = heapq.heappop(priority_queue)
    print(f'Priority: {task.priority}, Description: {task.description}')`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which function converts a list into a heap in-place?',
      options: [
        'heapq.push()',
        'heapq.heapify()',
        'heapq.insert()',
        'heapq.add()',
      ],
      correctAnswer: 1,
      explanations: [
        'heapq.push() is not a function; use heapq.heappush().',
        'heapq.heapify() converts a list into a heap in-place.',
        'heapq.insert() is not a function; use heapq.heappush().',
        'heapq.add() is not a function; use heapq.heappush().',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What does <code>heapq.nlargest(n, iterable)</code> return?',
      options: [
        'The n smallest elements from the iterable.',
        'The n largest elements from the iterable.',
        'A heap with the n largest elements.',
        'An error if n is larger than the length of the iterable.',
      ],
      correctAnswer: 1,
      explanations: [
        'heapq.nsmallest(n, iterable) returns the n smallest elements.',
        'heapq.nlargest(n, iterable) returns the n largest elements.',
        'heapq.nlargest(n, iterable) returns a list of the n largest elements, not a heap.',
        'If n is larger than the length of the iterable, it returns as many elements as available, not an error.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const edgeCasesData: LessonContent = {
  title: 'Edge Cases',
  content: `<p>
Handling edge cases is crucial when working with heaps to ensure your program behaves correctly in all scenarios. 
Common edge cases include dealing with empty heaps, heaps with a single element, and handling heaps where all 
elements are identical.
</p>

<p>
By anticipating these scenarios and writing code to handle them, you can make your heap operations more robust 
and avoid runtime errors or unexpected behavior.
</p>`,
  codeExample: `import heapq

# Handling an empty heap
heap_empty = []
try:
    heapq.heappop(heap_empty)
except IndexError as e:
    print(f'Error: {e}')  # Output: Error: pop from an empty heap

# Handling a heap with a single element
heap_single = []
heapq.heappush(heap_single, 10)
print(heapq.heappop(heap_single))  # Output: 10

# Handling a heap with identical elements
heap_identical = []
heapq.heappush(heap_identical, 5)
heapq.heappush(heap_identical, 5)
heapq.heappush(heap_identical, 5)
print(heapq.heappop(heap_identical))  # Output: 5
print(heapq.heappop(heap_identical))  # Output: 5
print(heapq.heappop(heap_identical))  # Output: 5

# Checking if a heap is empty
if not heap_empty:
    print('Heap is empty')  # Output: Heap is empty

# Handling a heap with negative numbers
heap_negative = []
heapq.heappush(heap_negative, -10)
heapq.heappush(heap_negative, -5)
heapq.heappush(heap_negative, -7)
print(heapq.heappop(heap_negative))  # Output: -10`,
  exercises: [
    {
      prompt: 'Write a function that checks if a heap is empty and handles the case of popping from an empty heap.',
      initialCode: `import heapq

def pop_from_heap(heap):
    # Your code here

# Test the function
heap_empty = []
pop_from_heap(heap_empty)`,
      solution: `import heapq

def pop_from_heap(heap):
    if heap:
        return heapq.heappop(heap)
    else:
        print('Heap is empty')
        return None

# Test the function
heap_empty = []
pop_from_heap(heap_empty)  # Output: Heap is empty

heap_with_elements = []
heapq.heappush(heap_with_elements, 5)
heapq.heappush(heap_with_elements, 10)
print(pop_from_heap(heap_with_elements))  # Output: 5
print(pop_from_heap(heap_with_elements))  # Output: 10
print(pop_from_heap(heap_with_elements))  # Output: Heap is empty`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Implement a heap that handles insertion and deletion, including cases where all elements are identical.',
      initialCode: `import heapq

heap = []
heapq.heappush(heap, 5)
heapq.heappush(heap, 5)
heapq.heappush(heap, 5)

# Delete elements from the heap`,
      solution: `import heapq

heap = []
heapq.heappush(heap, 5)
heapq.heappush(heap, 5)
heapq.heappush(heap, 5)

# Delete elements from the heap
while heap:
    print(heapq.heappop(heap))  # Output: 5, 5, 5`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Write a program that handles a heap containing only one element and performs operations on it.',
      initialCode: `import heapq

heap_single = []
heapq.heappush(heap_single, 10)

# Perform operations on the heap`,
      solution: `import heapq

heap_single = []
heapq.heappush(heap_single, 10)

# Perform operations on the heap
print(heap_single)  # Output: [10]
print(heapq.heappop(heap_single))  # Output: 10
print(heap_single)  # Output: []`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'What error is raised when you try to pop from an empty heap?',
      options: [
        'ValueError',
        'TypeError',
        'IndexError',
        'KeyError',
      ],
      correctAnswer: 2,
      explanations: [
        'ValueError is raised for invalid values, not for empty heaps.',
        'TypeError is raised for type mismatches, not for empty heaps.',
        'IndexError is raised when trying to pop from an empty heap.',
        'KeyError is raised for dictionary key errors, not for heaps.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'How can you check if a heap is empty?',
      options: [
        'if heap == None:',
        'if heap.size() == 0:',
        'if not heap:',
        'if heap.isEmpty():',
      ],
      correctAnswer: 2,
      explanations: [
        'Checking if heap == None is incorrect; heaps can be empty lists.',
        'heap.size() is not a valid method in Python.',
        'Using if not heap: correctly checks if the heap (list) is empty.',
        'heap.isEmpty() is not a valid method in Python.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What is the output of the following code snippet?\n\n<code>import heapq\nheap = []\nheapq.heappush(heap, 5)\nheapq.heappush(heap, 3)\nheapq.heappush(heap, 7)\nprint(heapq.heappop(heap))</code>',
      options: [
        '3',
        '5',
        '7',
        'The code will raise an error.',
      ],
      correctAnswer: 1,
      explanations: [
        'heapq is a min-heap, so the smallest element is popped first, which is 3.',
        '5 is not the smallest element.',
        '7 is larger than 3 and 5.',
        'The code does not raise an error.',
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
  'top-k-pattern': topKPatternData,
  'k-way-merge': kWayMergeData,
  'two-heaps': twoHeapsData,
  'stream-processing': streamProcessingData,
  'scheduling-problems': schedulingProblemsData,
  'k-closest-points': kClosestPointsData,
  'sliding-window-heap': slidingWindowHeapData,
  'multiple-heaps': multipleHeapsData,
  'heap-with-hashmap': heapWithHashMapData,
  'when-to-use': whenToUseHeapsData,
  'optimization': optimizationTechniquesData,
  'common-mistakes': commonMistakesData,
  'custom-comparator': customComparatorData,
  'language-specifics': languageSpecificToolsData,
  'edge-cases': edgeCasesData,
  'dual-heap': dualHeapData,
};

export const heapLessonsTab: LessonsTab = {
  curriculum: heapCurriculum,
  lessons: heapLessons,
};
