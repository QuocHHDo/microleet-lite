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
  title: 'Heap Concepts and Properties',
  content: `<p>
A heap is a specialized tree-based data structure that satisfies the <strong>heap property</strong>. Think of a heap like a family tree where every parent follows one simple rule: they must be either greater than (max-heap) or less than (min-heap) all their children.
</p>

<h3><u>Key Properties of Heaps</u></h3>
<p>
<li>Complete Binary Tree: All levels are fully filled except possibly the last level, which fills from left to right</li>
<li>Heap Property: Parent-child relationship follows a specific ordering</li>
<li>Efficient Implementation: Usually implemented using arrays, making them memory-efficient</li>
<li>Self-Balancing: Maintains its shape property automatically after insertions and deletions</li>
</p>

<h3><u>Types of Heaps</u></h3>

<h4><b>Max Heap</b></h4>
<p>
<li>Parent nodes are always greater than or equal to their children</li>
<li>Root node contains the maximum element</li>
<li>Perfect for finding maximum elements quickly</li>
<li>Common use: Priority queues where higher values have priority</li>
</p>

<h4><b>Min Heap</b></h4>
<p>
<li>Parent nodes are always less than or equal to their children</li>
<li>Root node contains the minimum element</li>
<li>Perfect for finding minimum elements quickly</li>
<li>Common use: Dijkstra's algorithm, finding running medians</li>
</p>

<h3><u>Common LeetCode Applications</u></h3>
<p>
<li>Finding kth largest/smallest elements</li>
<li>Merging k sorted lists</li>
<li>Meeting room scheduling</li>
<li>Task scheduling with cooldown</li>
</p>

<h3><u>Operation Complexities</u></h3>
<table>
<tr><th>Operation</th><th>Time Complexity</th><th>Use Case</th></tr>
<tr><td>Insert</td><td>O(log n)</td><td>Adding new element</td></tr>
<tr><td>Extract Min/Max</td><td>O(log n)</td><td>Removing root element</td></tr>
<tr><td>Peek Min/Max</td><td>O(1)</td><td>Viewing root element</td></tr>
<tr><td>Build Heap</td><td>O(n)</td><td>Creating heap from array</td></tr>
<tr><td>Heapify</td><td>O(log n)</td><td>Maintaining heap property</td></tr>
</table>`,
  codeExample: `# Example of Min Heap Usage in Python
from heapq import heappush, heappop, heapify

# Creating a min heap
min_heap = []
heapify(min_heap)  # Initialize heap structure

# Adding elements
elements = [5, 2, 8, 1, 9, 3]
for element in elements:
    heappush(min_heap, element)
    print(f"After adding {element}: {min_heap}")
    # Heap maintains order property after each insertion

# Removing minimum elements
print("\\nRemoving elements in order:")
while min_heap:
    min_element = heappop(min_heap)
    print(f"Removed {min_element}, remaining heap: {min_heap}")

# Real-world example: Finding k smallest elements
def find_k_smallest(nums, k):
    heap = []
    for num in nums:
        heappush(heap, num)
    
    result = []
    for _ in range(k):
        result.append(heappop(heap))
    return result

# Example usage
numbers = [4, 1, 8, 3, 6, 2, 9, 5]
k = 3
print(f"\\n{k} smallest elements in {numbers}:")
print(find_k_smallest(numbers, k))  # Returns [1, 2, 3]`,
  exercises: [
    {
      prompt: 'Implement a function that uses a min heap to find the k-th smallest element in an array.',
      initialCode: `def find_kth_smallest(nums, k):
    # Use heapq to implement your solution
    # Return the k-th smallest element
    pass`,
      solution: `from heapq import heapify, heappop

def find_kth_smallest(nums, k):
    # Convert input array to min heap
    heap = nums.copy()
    heapify(heap)
    
    # Pop k-1 elements
    for _ in range(k-1):
        heappop(heap)
    
    # Return kth element
    return heappop(heap)`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Create a max heap from a given array by negating elements (since Python only provides min heap).',
      initialCode: `def create_max_heap(nums):
    # Convert nums into a max heap
    # Return the heap as a list
    pass`,
      solution: `from heapq import heapify

def create_max_heap(nums):
    # Negate all elements to simulate max heap
    max_heap = [-num for num in nums]
    heapify(max_heap)
    return max_heap`,
      difficulty: Difficulty.Beginner,
    }
  ],
  quizzes: [
    {
      question: 'What is the time complexity of extracting the minimum element from a min heap?',
      options: [
        'O(1)',
        'O(log n)',
        'O(n)',
        'O(n log n)',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. While viewing the minimum takes O(1), extracting requires reorganizing the heap.',
        'Correct! Removing the root and maintaining the heap property takes logarithmic time.',
        'Incorrect. Heap operations are more efficient than linear time.',
        'Incorrect. This is the complexity of heap sort, not extraction.',
      ],
      difficulty: Difficulty.Beginner,
    }
  ],
};

const basicHeapImplementationData: LessonContent = {
  title: 'Implementing a Binary Heap',
  content: `<p>
Understanding how to implement a heap from scratch is crucial for interviews. While most languages provide heap implementations, interviewers often ask candidates to implement one to test their understanding of the underlying concepts.
</p>

<h3><u>Array Implementation</u></h3>
<p>
Heaps are typically implemented using arrays, where for any element at index i:
<li>Left Child: 2i + 1</li>
<li>Right Child: 2i + 2</li>
<li>Parent: (i - 1) // 2</li>
</p>

<h3><u>Key Operations</u></h3>

<h4><b>Heapify</b></h4>
<p>
The process of maintaining the heap property:
<li>Compare parent with children</li>
<li>Swap if heap property is violated</li>
<li>Continue process recursively</li>
</p>

<h4><b>Insert</b></h4>
<p>
<li>Add element at the end</li>
<li>Bubble up until heap property is satisfied</li>
<li>Maintains complete binary tree property</li>
</p>

<h4><b>Extract Min/Max</b></h4>
<p>
<li>Remove root element</li>
<li>Replace with last element</li>
<li>Sink down until heap property is restored</li>
</p>`,
  codeExample: `class MinHeap:
    def __init__(self):
        self.heap = []
    
    def parent(self, i):
        return (i - 1) // 2
    
    def left_child(self, i):
        return 2 * i + 1
    
    def right_child(self, i):
        return 2 * i + 2
    
    def swap(self, i, j):
        self.heap[i], self.heap[j] = self.heap[j], self.heap[i]
    
    def insert(self, key):
        self.heap.append(key)
        self._bubble_up(len(self.heap) - 1)
    
    def _bubble_up(self, i):
        parent = self.parent(i)
        if i > 0 and self.heap[i] < self.heap[parent]:
            self.swap(i, parent)
            self._bubble_up(parent)
    
    def extract_min(self):
        if len(self.heap) == 0:
            return None
        
        if len(self.heap) == 1:
            return self.heap.pop()
        
        min_val = self.heap[0]
        self.heap[0] = self.heap.pop()
        self._sink_down(0)
        
        return min_val
    
    def _sink_down(self, i):
        min_idx = i
        left = self.left_child(i)
        right = self.right_child(i)
        
        if left < len(self.heap) and self.heap[left] < self.heap[min_idx]:
            min_idx = left
        
        if right < len(self.heap) and self.heap[right] < self.heap[min_idx]:
            min_idx = right
        
        if min_idx != i:
            self.swap(i, min_idx)
            self._sink_down(min_idx)

# Example usage
heap = MinHeap()
for num in [5, 3, 8, 1, 2, 7]:
    heap.insert(num)
    print(f"After inserting {num}: {heap.heap}")

print("\\nExtracting minimum elements:")
while heap.heap:
    min_val = heap.extract_min()
    print(f"Extracted {min_val}, remaining heap: {heap.heap}")`,
  exercises: [
    {
      prompt: 'Implement a max heap by modifying the comparison operations in the provided min heap implementation.',
      initialCode: `class MaxHeap:
    def __init__(self):
        self.heap = []
    
    # Implement the necessary methods to create a max heap
    # Modify the comparison operations from min heap`,
      solution: `class MaxHeap:
    def __init__(self):
        self.heap = []
    
    def parent(self, i):
        return (i - 1) // 2
    
    def left_child(self, i):
        return 2 * i + 1
    
    def right_child(self, i):
        return 2 * i + 2
    
    def swap(self, i, j):
        self.heap[i], self.heap[j] = self.heap[j], self.heap[i]
    
    def insert(self, key):
        self.heap.append(key)
        self._bubble_up(len(self.heap) - 1)
    
    def _bubble_up(self, i):
        parent = self.parent(i)
        # Changed comparison for max heap
        if i > 0 and self.heap[i] > self.heap[parent]:
            self.swap(i, parent)
            self._bubble_up(parent)
    
    def extract_max(self):
        if len(self.heap) == 0:
            return None
        
        if len(self.heap) == 1:
            return self.heap.pop()
        
        max_val = self.heap[0]
        self.heap[0] = self.heap.pop()
        self._sink_down(0)
        
        return max_val
    
    def _sink_down(self, i):
        max_idx = i
        left = self.left_child(i)
        right = self.right_child(i)
        
        # Changed comparisons for max heap
        if left < len(self.heap) and self.heap[left] > self.heap[max_idx]:
            max_idx = left
        
        if right < len(self.heap) and self.heap[right] > self.heap[max_idx]:
            max_idx = right
        
        if max_idx != i:
            self.swap(i, max_idx)
            self._sink_down(max_idx)`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'For a heap implemented as an array, what is the index of the left child of an element at index i?',
      options: [
        'i + 1',
        '2i',
        '2i + 1',
        '2i + 2',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. This would only access the next element, not the left child.',
        'Incorrect. This formula doesn\'t account for 0-based indexing.',
        'Correct! For 0-based indexing, the left child is at position 2i + 1.',
        'Incorrect. This is the formula for the right child.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};

const heapPropertiesData: LessonContent = {
  title: 'Understanding Heap Properties',
  content: `<p>
A binary heap is a specialized binary tree that must satisfy two fundamental properties: the shape property and the heap property. Let's explore each of these in detail to understand what makes a heap unique and useful.
</p>

<h3><u>The Shape Property: Complete Binary Tree</u></h3>
<p>
A heap must be a complete binary tree, which means:
</p>
<p>
<li>All levels are filled from left to right</li>
<li>All levels except the last must be completely full</li>
<li>The last level has all nodes as far left as possible</li>
</p>

<div class="visualization">
<svg viewBox="0 0 400 200">
  <!-- Valid Complete Binary Tree -->
  <g transform="translate(50,20)">
    <circle cx="100" cy="20" r="15" fill="#4CAF50" />
    <circle cx="50" cy="60" r="15" fill="#4CAF50" />
    <circle cx="150" cy="60" r="15" fill="#4CAF50" />
    <circle cx="25" cy="100" r="15" fill="#4CAF50" />
    <circle cx="75" cy="100" r="15" fill="#4CAF50" />
    <!-- Lines connecting nodes -->
    <line x1="100" y1="35" x2="50" y2="45" stroke="black" />
    <line x1="100" y1="35" x2="150" y2="45" stroke="black" />
    <line x1="50" y1="75" x2="25" y2="85" stroke="black" />
    <line x1="50" y1="75" x2="75" y2="85" stroke="black" />
    <text x="90" y="140" font-size="12">Valid Complete Binary Tree</text>
  </g>
  
  <!-- Invalid Incomplete Binary Tree -->
  <g transform="translate(250,20)">
    <circle cx="100" cy="20" r="15" fill="#F44336" />
    <circle cx="50" cy="60" r="15" fill="#F44336" />
    <circle cx="150" cy="60" r="15" fill="#F44336" />
    <circle cx="150" cy="100" r="15" fill="#F44336" />
    <!-- Lines connecting nodes -->
    <line x1="100" y1="35" x2="50" y2="45" stroke="black" />
    <line x1="100" y1="35" x2="150" y2="45" stroke="black" />
    <line x1="150" y1="75" x2="150" y2="85" stroke="black" />
    <text x="90" y="140" font-size="12">Invalid: Nodes not filled left-to-right</text>
  </g>
</svg>
</div>

<h3><u>The Heap Property: Value Ordering</u></h3>
<p>
The heap property defines the relationship between parent and child nodes. This property comes in two variants:
</p>

<h4><b>Max Heap Property</b></h4>
<p>
In a max heap, every parent node must be greater than or equal to its children. This creates a structure where:
</p>
<p>
<li>The root contains the maximum element</li>
<li>For any node i: value(parent(i)) ≥ value(i)</li>
<li>The path from root to any leaf is in descending order</li>
</p>

<div class="visualization">
<svg viewBox="0 0 400 200">
  <!-- Max Heap Example -->
  <g transform="translate(50,20)">
    <circle cx="100" cy="20" r="15" fill="#4CAF50" />
    <circle cx="50" cy="60" r="15" fill="#4CAF50" />
    <circle cx="150" cy="60" r="15" fill="#4CAF50" />
    <circle cx="25" cy="100" r="15" fill="#4CAF50" />
    <circle cx="75" cy="100" r="15" fill="#4CAF50" />
    <!-- Node values -->
    <text x="95" y="25" font-size="12" fill="white">100</text>
    <text x="45" y="65" font-size="12" fill="white">80</text>
    <text x="145" y="65" font-size="12" fill="white">90</text>
    <text x="20" y="105" font-size="12" fill="white">30</text>
    <text x="70" y="105" font-size="12" fill="white">50</text>
    <!-- Lines connecting nodes -->
    <line x1="100" y1="35" x2="50" y2="45" stroke="black" />
    <line x1="100" y1="35" x2="150" y2="45" stroke="black" />
    <line x1="50" y1="75" x2="25" y2="85" stroke="black" />
    <line x1="50" y1="75" x2="75" y2="85" stroke="black" />
    <text x="90" y="140" font-size="12">Valid Max Heap</text>
  </g>
</svg>
</div>

<h4><b>Min Heap Property</b></h4>
<p>
In a min heap, every parent node must be less than or equal to its children. This creates a structure where:
</p>
<p>
<li>The root contains the minimum element</li>
<li>For any node i: value(parent(i)) ≤ value(i)</li>
<li>The path from root to any leaf is in ascending order</li>
</p>

<h3><u>Property Implications</u></h3>
<p>
These properties have important implications for heap operations:
</p>
<p>
<li>Finding min/max is O(1) - just look at the root</li>
<li>Height is always O(log n) due to the complete binary tree property</li>
<li>Last level is at most half full, ensuring efficient space usage</li>
<li>Parent-child relationships can be calculated using array indices</li>
</p>`,
  codeExample: `# Helper functions to verify heap properties
def is_complete_binary_tree(heap):
    """
    Verifies if the heap satisfies the complete binary tree property.
    A binary tree is complete if all levels except possibly the last
    are completely filled, and all nodes are as far left as possible.
    """
    n = len(heap)
    for i in range(n):
        left = 2 * i + 1
        right = 2 * i + 2
        
        # If we have a right child, we must have a left child
        if right < n and left >= n:
            return False
        
        # All nodes before the last level must have both children
        last_internal_node = (n - 2) // 2
        if i < last_internal_node and (left >= n or right >= n):
            return False
    
    return True

def is_max_heap_property(heap):
    """
    Verifies if the heap satisfies the max heap property.
    Each parent must be greater than or equal to its children.
    """
    n = len(heap)
    for i in range(n):
        left = 2 * i + 1
        right = 2 * i + 2
        
        # Check left child
        if left < n and heap[i] < heap[left]:
            return False
        
        # Check right child
        if right < n and heap[i] < heap[right]:
            return False
    
    return True

# Example usage
heap = [100, 80, 90, 30, 50]
print("Is complete binary tree?", is_complete_binary_tree(heap))  # True
print("Satisfies max heap property?", is_max_heap_property(heap))  # True

# Invalid heap example
invalid_heap = [100, 80, 90, 30, 50, None, 40]
print("\\nInvalid heap:")
print("Is complete binary tree?", is_complete_binary_tree(invalid_heap))  # False`,
  exercises: [
    {
      prompt: 'Write a function that verifies if a given binary tree satisfies the min heap property.',
      initialCode: `def is_min_heap_property(heap):
    """
    Check if the given heap satisfies the min heap property:
    Each parent must be less than or equal to its children.
    
    Args:
        heap: List representing the heap
    Returns:
        bool: True if heap property is satisfied, False otherwise
    """
    # Your code here
    pass`,
      solution: `def is_min_heap_property(heap):
    """
    Check if the given heap satisfies the min heap property:
    Each parent must be less than or equal to its children.
    
    Args:
        heap: List representing the heap
    Returns:
        bool: True if heap property is satisfied, False otherwise
    """
    n = len(heap)
    for i in range(n):
        left = 2 * i + 1
        right = 2 * i + 2
        
        # Check left child
        if left < n and heap[i] > heap[left]:
            return False
        
        # Check right child
        if right < n and heap[i] > heap[right]:
            return False
    
    return True`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Given a complete binary tree represented as an array, write a function to count the number of nodes at each level.',
      initialCode: `def count_nodes_per_level(heap):
    """
    Count the number of nodes at each level in a complete binary tree.
    
    Args:
        heap: List representing the complete binary tree
    Returns:
        List[int]: Number of nodes at each level
    """
    # Your code here
    pass`,
      solution: `def count_nodes_per_level(heap):
    """
    Count the number of nodes at each level in a complete binary tree.
    
    Args:
        heap: List representing the complete binary tree
    Returns:
        List[int]: Number of nodes at each level
    """
    if not heap:
        return []
    
    nodes_per_level = []
    total_nodes = len(heap)
    level_nodes = 1
    nodes_counted = 0
    
    while nodes_counted < total_nodes:
        # Get actual nodes at this level (might be less than level_nodes
        # for the last level)
        actual_nodes = min(level_nodes, total_nodes - nodes_counted)
        nodes_per_level.append(actual_nodes)
        
        # Update counters
        nodes_counted += actual_nodes
        level_nodes *= 2
    
    return nodes_per_level`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'Which of the following violates the complete binary tree property?',
      options: [
        'A tree with 3 nodes: root and 2 children',
        'A tree with 4 nodes: root, 2 nodes in level 1, and 1 leftmost node in level 2',
        'A tree with 4 nodes: root, 2 nodes in level 1, and 1 rightmost node in level 2',
        'A tree with 7 nodes: completely filled first three levels',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. This forms a valid complete binary tree with all nodes as far left as possible.',
        'Incorrect. This is a valid complete binary tree as the last level node is as far left as possible.',
        'Correct! A complete binary tree must fill nodes from left to right. Having only a right node violates this property.',
        'Incorrect. A completely filled binary tree is always a valid complete binary tree.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'In a max heap with values [100, 80, 90, 30, 50], what happens if we add the value 85?',
      options: [
        'It goes to the next available position (index 5) and stays there',
        'It goes to index 5 and then bubbles up to replace 80',
        'It goes to index 5 and then bubbles up to replace 90',
        'It is rejected as it would violate the heap property',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. The heap property requires parent-child value relationships to be maintained.',
        'Correct! The value 85 would be placed at index 5 and then bubble up to replace 80, maintaining the max heap property.',
        'Incorrect. While 85 is less than 90, it would replace 80 as it is greater than 80.',
        'Incorrect. Adding 85 is valid and the heap can reorganize to maintain its properties.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};

const heapInsertionData: LessonContent = {
  title: 'Understanding Heap Insertion Operations',
  content: `<p>
Inserting elements into a heap is a fundamental operation that requires careful attention to maintain both the complete binary tree property and the heap property. Let's explore this operation in detail to understand how it works and why it's implemented the way it is.
</p>

<h3><u>The Insertion Process</u></h3>
<p>
When we insert a new element into a heap, we follow a two-phase process that ensures we maintain both essential heap properties. Think of it like adding a new person to a company hierarchy – they start at the entry level but might get promoted based on their qualifications.
</p>

<h4><b>Phase 1: Placement</b></h4>
<p>
First, we place the new element in the next available position at the bottom level, moving from left to right. This step ensures we maintain the complete binary tree property. Just like in a theater, we fill seats from left to right in each row before starting a new row.
</p>

<h4><b>Phase 2: Bubble-Up</b></h4>
<p>
After placement, we need to restore the heap property by comparing the new element with its parent and potentially swapping them. This process continues until either:
</p>
<p>
1. The element reaches a position where its parent has a higher priority (in a max heap) or lower priority (in a min heap), or
2. The element becomes the root of the heap
</p>

<div class="visualization">
<svg viewBox="0 0 600 300">
  <!-- Initial State -->
  <g transform="translate(50,20)">
    <text x="70" y="0" font-size="14" fill="black">Step 1: Initial Max Heap</text>
    <circle cx="100" cy="40" r="15" fill="#4CAF50"/>
    <circle cx="50" cy="80" r="15" fill="#4CAF50"/>
    <circle cx="150" cy="80" r="15" fill="#4CAF50"/>
    <circle cx="25" cy="120" r="15" fill="#4CAF50"/>
    <text x="95" y="45" font-size="12" fill="white">50</text>
    <text x="45" y="85" font-size="12" fill="white">30</text>
    <text x="145" y="85" font-size="12" fill="white">40</text>
    <text x="20" y="125" font-size="12" fill="white">20</text>
    <line x1="100" y1="55" x2="50" y2="65" stroke="black"/>
    <line x1="100" y1="55" x2="150" y2="65" stroke="black"/>
    <line x1="50" y1="95" x2="25" y2="105" stroke="black"/>
  </g>

  <!-- Placement State -->
  <g transform="translate(250,20)">
    <text x="70" y="0" font-size="14" fill="black">Step 2: Place New Element (45)</text>
    <circle cx="100" cy="40" r="15" fill="#4CAF50"/>
    <circle cx="50" cy="80" r="15" fill="#4CAF50"/>
    <circle cx="150" cy="80" r="15" fill="#4CAF50"/>
    <circle cx="25" cy="120" r="15" fill="#4CAF50"/>
    <circle cx="75" cy="120" r="15" fill="#FF9800"/>
    <text x="95" y="45" font-size="12" fill="white">50</text>
    <text x="45" y="85" font-size="12" fill="white">30</text>
    <text x="145" y="85" font-size="12" fill="white">40</text>
    <text x="20" y="125" font-size="12" fill="white">20</text>
    <text x="70" y="125" font-size="12" fill="white">45</text>
    <line x1="100" y1="55" x2="50" y2="65" stroke="black"/>
    <line x1="100" y1="55" x2="150" y2="65" stroke="black"/>
    <line x1="50" y1="95" x2="25" y2="105" stroke="black"/>
    <line x1="50" y1="95" x2="75" y2="105" stroke="black"/>
  </g>

  <!-- Final State -->
  <g transform="translate(450,20)">
    <text x="70" y="0" font-size="14" fill="black">Step 3: Bubble Up Complete</text>
    <circle cx="100" cy="40" r="15" fill="#4CAF50"/>
    <circle cx="50" cy="80" r="15" fill="#4CAF50"/>
    <circle cx="150" cy="80" r="15" fill="#4CAF50"/>
    <circle cx="25" cy="120" r="15" fill="#4CAF50"/>
    <circle cx="75" cy="120" r="15" fill="#4CAF50"/>
    <text x="95" y="45" font-size="12" fill="white">50</text>
    <text x="45" y="85" font-size="12" fill="white">45</text>
    <text x="145" y="85" font-size="12" fill="white">40</text>
    <text x="20" y="125" font-size="12" fill="white">20</text>
    <text x="70" y="125" font-size="12" fill="white">30</text>
    <line x1="100" y1="55" x2="50" y2="65" stroke="black"/>
    <line x1="100" y1="55" x2="150" y2="65" stroke="black"/>
    <line x1="50" y1="95" x2="25" y2="105" stroke="black"/>
    <line x1="50" y1="95" x2="75" y2="105" stroke="black"/>
  </g>
</svg>
</div>

<h3><u>Understanding the Time Complexity</u></h3>
<p>
The time complexity of insertion is O(log n), where n is the number of elements in the heap. This logarithmic complexity comes from the bubble-up phase, where in the worst case, we might need to traverse the height of the tree. Since a binary heap is a complete binary tree, its height is always logarithmic in the number of nodes.
</p>

<p>
Think of it this way: in a heap with 1000 nodes, we'll never need more than about 10 comparisons (log₂ 1000 ≈ 10) to place a new element in its correct position, regardless of where it ends up. This efficiency is one of the key benefits of using a heap data structure.
</p>`,
  codeExample: `class MaxHeap:
    def __init__(self):
        """Initialize an empty max heap."""
        self.heap = []

    def parent_index(self, i):
        """Get the parent index of node at index i."""
        return (i - 1) // 2

    def insert(self, value):
        """
        Insert a new value into the max heap.
        
        Args:
            value: The value to insert
            
        Time Complexity: O(log n)
        Space Complexity: O(1)
        """
        # Phase 1: Add the new element to the end
        self.heap.append(value)
        current = len(self.heap) - 1

        # Phase 2: Bubble up until heap property is restored
        self._bubble_up(current)

    def _bubble_up(self, index):
        """
        Restore the heap property by moving an element up the tree.
        
        Args:
            index: The starting index of the element to bubble up
        """
        # Continue until we reach the root or find the correct position
        while index > 0:
            parent = self.parent_index(index)
            
            # If parent is larger, heap property is satisfied
            if self.heap[parent] >= self.heap[index]:
                break
                
            # Otherwise, swap with parent and continue upward
            self.heap[parent], self.heap[index] = \
                self.heap[index], self.heap[parent]
            index = parent

    def display(self):
        """Display the heap as a tree for visualization."""
        if not self.heap:
            return "Empty heap"
            
        height = int(log2(len(self.heap))) + 1
        for level in range(height):
            start = 2**level - 1
            end = min(2**(level+1) - 1, len(self.heap))
            values = self.heap[start:end]
            padding = " " * (2**(height-level-1) - 1)
            print(padding + "   ".join(map(str, values)) + padding)

# Example usage demonstrating insertion steps
heap = MaxHeap()
print("Inserting elements: 10, 20, 15, 30, 40")
for value in [10, 20, 15, 30, 40]:
    print(f"\\nInserting {value}")
    heap.insert(value)
    print("Current heap structure:")
    heap.display()`,
  exercises: [
    {
      prompt: 'Implement a min heap insertion operation that maintains a running count of the number of swaps performed during insertion.',
      initialCode: `class MinHeapWithMetrics:
    def __init__(self):
        self.heap = []
        self.swap_count = 0
    
    def insert(self, value):
        # Implement insertion with swap counting
        pass`,
      solution: `class MinHeapWithMetrics:
    def __init__(self):
        self.heap = []
        self.swap_count = 0
    
    def parent_index(self, i):
        return (i - 1) // 2
    
    def insert(self, value):
        # Add to end of heap
        self.heap.append(value)
        current = len(self.heap) - 1
        
        # Bubble up and count swaps
        while current > 0:
            parent = self.parent_index(current)
            if self.heap[parent] <= self.heap[current]:
                break
                
            # Perform swap and increment counter
            self.heap[parent], self.heap[current] = \
                self.heap[current], self.heap[parent]
            self.swap_count += 1
            current = parent
        
        return self.swap_count`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement a function that performs a batch insertion of multiple values into a max heap, optimizing for efficiency.',
      initialCode: `def batch_insert(heap, values):
    """
    Insert multiple values into a max heap efficiently.
    
    Args:
        heap: List representing the current heap
        values: List of values to insert
    Returns:
        Updated heap after all insertions
    """
    # Implement efficient batch insertion
    pass`,
      solution: `def batch_insert(heap, values):
    """
    Insert multiple values into a max heap efficiently.
    
    Args:
        heap: List representing the current heap
        values: List of values to insert
    Returns:
        Updated heap after all insertions
    """
    # First, append all values to maintain complete tree
    original_size = len(heap)
    heap.extend(values)
    
    # Then, heapify from the last parent up to the root
    def bubble_down(index, size):
        while True:
            largest = index
            left = 2 * index + 1
            right = 2 * index + 2
            
            if left < size and heap[left] > heap[largest]:
                largest = left
            if right < size and heap[right] > heap[largest]:
                largest = right
                
            if largest == index:
                break
                
            heap[index], heap[largest] = heap[largest], heap[index]
            index = largest
    
    # Start from the last parent of the new elements
    start = (original_size + len(values) - 2) // 2
    
    # Bubble down each parent to restore heap property
    for i in range(start, -1, -1):
        bubble_down(i, len(heap))
    
    return heap`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'What is the worst-case time complexity of inserting a new element into a heap with n elements, and why?',
      options: [
        'O(1), because we just append to the end of the array',
        'O(log n), because we might need to bubble up to the root',
        'O(n), because we might need to compare with all elements',
        'O(n log n), because we need to sort after insertion',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. While the initial placement is O(1), we must also maintain the heap property.',
        'Correct! In the worst case, we need to bubble up to the root, which is at height log n.',
        'Incorrect. We only compare along a single path from leaf to root.',
        'Incorrect. Insertion does not require sorting the entire heap.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'When inserting a new element into a max heap, which of the following is true?',
      options: [
        'The element must always bubble up to the root',
        'The element must be larger than its siblings',
        'The element stays at its initial position if it\'s smaller than its parent',
        'The element must be compared with all existing elements',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Elements only bubble up if they are larger than their parent.',
        'Incorrect. The heap property only concerns parent-child relationships.',
        'Correct! If an element is smaller than its parent in a max heap, it is already in the correct position.',
        'Incorrect. We only need to compare with ancestors along the path to the root.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};

const heapExtractionData: LessonContent = {
  title: 'Mastering Heap Extraction Operations',
  content: `<p>
Extracting elements from a heap is one of the most fundamental operations in heap data structures, and it's particularly important for solving many interview problems, especially those involving finding the k-th largest or smallest elements. Let's explore this operation in depth to understand both how it works and why it's designed this way.
</p>

<h3><u>Understanding Extraction</u></h3>
<p>
Think of a heap extraction like promoting a new leader in an organization after the current leader leaves. When the CEO (root) departs, we can't simply remove them and leave a gap. Instead, we need a careful process to reorganize the company hierarchy while maintaining its structure and efficiency.
</p>

<h4><b>The Three-Phase Process</b></h4>
<p>
Extraction follows a carefully choreographed sequence of steps, each serving a specific purpose in maintaining the heap's properties:
</p>

<p>1. <strong>Save and Remove Root:</strong> First, we store the root value (which we'll return later) and create a temporary vacancy at the top of our heap. This is like keeping record of the departing CEO's final decisions.</p>

<p>2. <strong>Promote Last Element:</strong> We take the last element in the heap and place it at the root position. Think of this as temporarily promoting the newest team member to CEO - they might not stay there, but it maintains our organizational structure.</p>

<p>3. <strong>Sink Down (Heapify):</strong> The newly promoted element gradually moves down through the heap until it finds its rightful place, much like how a temporary leader might step down to a more appropriate position as more qualified candidates move up.</p>

<div class="visualization">
<svg viewBox="0 0 800 300">
  <!-- Initial State -->
  <g transform="translate(50,20)">
    <text x="70" y="0" font-size="14" fill="black">Step 1: Initial Max Heap</text>
    <circle cx="100" cy="40" r="15" fill="#4CAF50"/>
    <circle cx="50" cy="80" r="15" fill="#4CAF50"/>
    <circle cx="150" cy="80" r="15" fill="#4CAF50"/>
    <circle cx="25" cy="120" r="15" fill="#4CAF50"/>
    <circle cx="75" cy="120" r="15" fill="#4CAF50"/>
    <text x="95" y="45" font-size="12" fill="white">50</text>
    <text x="45" y="85" font-size="12" fill="white">45</text>
    <text x="145" y="85" font-size="12" fill="white">40</text>
    <text x="20" y="125" font-size="12" fill="white">20</text>
    <text x="70" y="125" font-size="12" fill="white">30</text>
    <line x1="100" y1="55" x2="50" y2="65" stroke="black"/>
    <line x1="100" y1="55" x2="150" y2="65" stroke="black"/>
    <line x1="50" y1="95" x2="25" y2="105" stroke="black"/>
    <line x1="50" y1="95" x2="75" y2="105" stroke="black"/>
  </g>

  <!-- Intermediate State -->
  <g transform="translate(300,20)">
    <text x="70" y="0" font-size="14" fill="black">Step 2: Move Last Element to Root</text>
    <circle cx="100" cy="40" r="15" fill="#FF9800"/>
    <circle cx="50" cy="80" r="15" fill="#4CAF50"/>
    <circle cx="150" cy="80" r="15" fill="#4CAF50"/>
    <circle cx="25" cy="120" r="15" fill="#4CAF50"/>
    <text x="95" y="45" font-size="12" fill="white">30</text>
    <text x="45" y="85" font-size="12" fill="white">45</text>
    <text x="145" y="85" font-size="12" fill="white">40</text>
    <text x="20" y="125" font-size="12" fill="white">20</text>
    <line x1="100" y1="55" x2="50" y2="65" stroke="black"/>
    <line x1="100" y1="55" x2="150" y2="65" stroke="black"/>
    <line x1="50" y1="95" x2="25" y2="105" stroke="black"/>
  </g>

  <!-- Final State -->
  <g transform="translate(550,20)">
    <text x="70" y="0" font-size="14" fill="black">Step 3: Sink Down Complete</text>
    <circle cx="100" cy="40" r="15" fill="#4CAF50"/>
    <circle cx="50" cy="80" r="15" fill="#4CAF50"/>
    <circle cx="150" cy="80" r="15" fill="#4CAF50"/>
    <circle cx="25" cy="120" r="15" fill="#4CAF50"/>
    <text x="95" y="45" font-size="12" fill="white">45</text>
    <text x="45" y="85" font-size="12" fill="white">30</text>
    <text x="145" y="85" font-size="12" fill="white">40</text>
    <text x="20" y="125" font-size="12" fill="white">20</text>
    <line x1="100" y1="55" x2="50" y2="65" stroke="black"/>
    <line x1="100" y1="55" x2="150" y2="65" stroke="black"/>
    <line x1="50" y1="95" x2="25" y2="105" stroke="black"/>
  </g>
</svg>
</div>

<h3><u>Understanding the Time Complexity</u></h3>
<p>
The extraction operation runs in O(log n) time, where n is the number of elements in the heap. This logarithmic complexity comes from the sink-down phase, where we might need to traverse the height of the tree. Let's understand why this is efficient:
</p>

<p>
Imagine a heap with 1000 nodes. Even in the worst case, where the new root needs to sink all the way down to a leaf, we'll only need about 10 comparisons (log₂ 1000 ≈ 10). This efficiency is what makes heaps particularly valuable for problems involving finding top k elements or implementing priority queues.
</p>

<h3><u>Common Interview Applications</u></h3>
<p>
Understanding heap extraction is crucial for solving several common interview problems:
</p>

<p>1. <strong>K Largest Elements:</strong> Keep extracting from a max heap k times</p>
<p>2. <strong>Running Median:</strong> Use extraction to maintain two heaps for smaller and larger halves</p>
<p>3. <strong>Merge K Sorted Lists:</strong> Extract minimum elements from a min heap containing list heads</p>
<p>4. <strong>Task Scheduler:</strong> Extract highest-frequency tasks from a max heap</p>`,
  codeExample: `class MaxHeap:
    def __init__(self):
        """Initialize an empty max heap."""
        self.heap = []
    
    def extract_max(self):
        """
        Remove and return the maximum element from the heap.
        
        Returns:
            The maximum element, or None if heap is empty
            
        Time Complexity: O(log n)
        Space Complexity: O(1)
        """
        if not self.heap:
            return None
            
        # Phase 1: Store the maximum element to return later
        max_value = self.heap[0]
        
        # Phase 2: Move last element to root position
        self.heap[0] = self.heap[-1]
        self.heap.pop()
        
        # Phase 3: Restore heap property by sinking down
        if self.heap:
            self._sink_down(0)
            
        return max_value
    
    def _sink_down(self, index):
        """
        Restore the heap property by moving an element down the tree.
        
        Args:
            index: Starting index of the element to sink down
        """
        size = len(self.heap)
        while True:
            # Find the largest among current node and its children
            largest = index
            left = 2 * index + 1
            right = 2 * index + 2
            
            # Check if left child is larger
            if left < size and self.heap[left] > self.heap[largest]:
                largest = left
                
            # Check if right child is larger
            if right < size and self.heap[right] > self.heap[largest]:
                largest = right
                
            # If current position is largest, we're done
            if largest == index:
                break
                
            # Otherwise, swap and continue sinking
            self.heap[index], self.heap[largest] = \
                self.heap[largest], self.heap[index]
            index = largest
    
    def find_k_largest(self, k):
        """
        Find the k largest elements in the heap.
        Common interview question implementation.
        
        Args:
            k: Number of largest elements to find
        Returns:
            List of k largest elements in descending order
        """
        result = []
        # Create a copy of the heap to preserve original
        temp_heap = MaxHeap()
        temp_heap.heap = self.heap.copy()
        
        # Extract k times
        for _ in range(min(k, len(self.heap))):
            result.append(temp_heap.extract_max())
            
        return result

# Example usage with common interview scenario
heap = MaxHeap()
array = [23, 12, 45, 67, 34, 89, 15, 8]
for num in array:
    heap.heap.append(num)
for i in range((len(heap.heap) - 2) // 2, -1, -1):
    heap._sink_down(i)

print("Original array:", array)
k = 3
k_largest = heap.find_k_largest(k)
print(f"{k} largest elements:", k_largest)`,
  exercises: [
    {
      prompt: 'Implement a min heap extraction method that maintains a count of comparisons made during the sink-down process.',
      initialCode: `class MinHeapWithMetrics:
    def __init__(self):
        self.heap = []
        self.comparison_count = 0
        
    def extract_min(self):
        # Implement extraction with comparison counting
        pass`,
      solution: `class MinHeapWithMetrics:
    def __init__(self):
        self.heap = []
        self.comparison_count = 0
    
    def extract_min(self):
        if not self.heap:
            return None
        
        min_value = self.heap[0]
        self.heap[0] = self.heap[-1]
        self.heap.pop()
        
        # Reset comparison counter for this extraction
        self.comparison_count = 0
        
        if self.heap:
            self._sink_down(0)
        
        return min_value, self.comparison_count
    
    def _sink_down(self, index):
        size = len(self.heap)
        while True:
            smallest = index
            left = 2 * index + 1
            right = 2 * index + 2
            
            # Count each comparison
            if left < size:
                self.comparison_count += 1
                if self.heap[left] < self.heap[smallest]:
                    smallest = left
            
            if right < size:
                self.comparison_count += 1
                if self.heap[right] < self.heap[smallest]:
                    smallest = right
            
            if smallest == index:
                break
                
            self.heap[index], self.heap[smallest] = \
                self.heap[smallest], self.heap[index]
            index = smallest`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement a method to find the k smallest elements in a max heap without modifying the original heap structure.',
      initialCode: `def find_k_smallest(heap, k):
    """
    Find k smallest elements in a max heap without modifying it.
    
    Args:
        heap: List representing a max heap
        k: Number of smallest elements to find
    Returns:
        List of k smallest elements in ascending order
    """
    # Implement your solution here
    pass`,
      solution: `from heapq import heappush, heappop

def find_k_smallest(heap, k):
    """
    Find k smallest elements in a max heap without modifying it.
    Uses a min heap to track potential candidates.
    
    Args:
        heap: List representing a max heap
        k: Number of smallest elements to find
    Returns:
        List of k smallest elements in ascending order
    """
    if not heap or k <= 0:
        return []
    
    # Min heap to track candidates
    # Store (value, index) pairs
    candidates = [(heap[0], 0)]
    result = []
    seen = {0}
    
    while candidates and len(result) < k:
        value, index = heappop(candidates)
        result.append(value)
        
        # Add children if they exist
        left = 2 * index + 1
        right = 2 * index + 2
        
        if left < len(heap) and left not in seen:
            heappush(candidates, (heap[left], left))
            seen.add(left)
            
        if right < len(heap) and right not in seen:
            heappush(candidates, (heap[right], right))
            seen.add(right)
    
    return result`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'During heap extraction, why do we move the last element to the root instead of trying to find a better candidate?',
      options: [
        'It\'s always the best element to maintain heap property',
        'It maintains the complete binary tree property with minimal restructuring',
        'It\'s faster than searching for a better candidate',
        'It ensures the heap stays balanced',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. The last element often needs to sink down to maintain heap property.',
        'Correct! Moving the last element maintains the complete binary tree structure while allowing us to efficiently restore the heap property through sinking.',
        'Incorrect. While speed is a factor, the primary reason is maintaining the complete binary tree property.',
        'Incorrect. The heap is already balanced by nature of being a complete binary tree.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'In a max heap of size n, what is the maximum number of comparisons needed during the sink-down phase of extraction?',
      options: [
        'n comparisons',
        '2log₂(n) comparisons',
        'n/2 comparisons',
        'log₂(n) comparisons',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. We don\'t need to compare with every element.',
        'Correct! At each level we make up to 2 comparisons, and we have at most log₂(n) levels to traverse.',
        'Incorrect. This would be more comparisons than necessary.',
        'Incorrect. We need 2 comparisons per level (left and right child).',
      ],
      difficulty: Difficulty.Advanced,
    }
  ],
};

const heapifyData: LessonContent = {
  title: 'Understanding Heapify: Transforming Arrays into Heaps',
  content: `<p>
The heapify process is a fundamental operation that transforms an arbitrary array into a heap structure. While this might sound straightforward, it's actually quite fascinating because it reveals an elegant algorithm that's more efficient than you might expect. Let's explore this process step by step to understand both how it works and why it's so efficient.
</p>

<h3><u>The Key Insight: Bottom-Up Is Better</u></h3>
<p>
Imagine you're organizing a company hierarchy. You could start from the CEO and work your way down, placing each person one at a time (similar to repeated insertions). However, it's much more efficient to start with the lowest-level managers and work your way up to the CEO. This is exactly the insight that makes heapify so efficient.
</p>

<h3><u>Understanding the Process</u></h3>
<p>
The bottom-up heapify process follows these key principles:
</p>

<p>
1. We start with the last non-leaf node (the last parent in our tree)
2. For each node we visit, we ensure it and its children form a valid heap
3. We move upward through the tree until we reach the root
</p>

<p>
This process is like organizing a series of small teams first, then combining them into larger teams, and finally bringing everything together under a single leadership structure.
</p>

<div class="visualization">
<svg viewBox="0 0 800 400">
  <!-- Initial Unorganized Array -->
  <g transform="translate(50,20)">
    <text x="70" y="0" font-size="14" fill="black">Step 1: Initial Unorganized Array</text>
    <circle cx="100" cy="40" r="15" fill="#FFB74D"/>
    <circle cx="50" cy="80" r="15" fill="#FFB74D"/>
    <circle cx="150" cy="80" r="15" fill="#FFB74D"/>
    <circle cx="25" cy="120" r="15" fill="#FFB74D"/>
    <circle cx="75" cy="120" r="15" fill="#FFB74D"/>
    <text x="95" y="45" font-size="12" fill="white">4</text>
    <text x="45" y="85" font-size="12" fill="white">10</text>
    <text x="145" y="85" font-size="12" fill="white">3</text>
    <text x="20" y="125" font-size="12" fill="white">5</text>
    <text x="70" y="125" font-size="12" fill="white">1</text>
    <line x1="100" y1="55" x2="50" y2="65" stroke="black"/>
    <line x1="100" y1="55" x2="150" y2="65" stroke="black"/>
    <line x1="50" y1="95" x2="25" y2="105" stroke="black"/>
    <line x1="50" y1="95" x2="75" y2="105" stroke="black"/>
  </g>

  <!-- Processing Last Parent -->
  <g transform="translate(300,20)">
    <text x="70" y="0" font-size="14" fill="black">Step 2: Process Last Parent (10)</text>
    <circle cx="100" cy="40" r="15" fill="#FFB74D"/>
    <circle cx="50" cy="80" r="15" fill="#4CAF50"/>
    <circle cx="150" cy="80" r="15" fill="#FFB74D"/>
    <circle cx="25" cy="120" r="15" fill="#4CAF50"/>
    <circle cx="75" cy="120" r="15" fill="#4CAF50"/>
    <text x="95" y="45" font-size="12" fill="white">4</text>
    <text x="45" y="85" font-size="12" fill="white">10</text>
    <text x="145" y="85" font-size="12" fill="white">3</text>
    <text x="20" y="125" font-size="12" fill="white">5</text>
    <text x="70" y="125" font-size="12" fill="white">1</text>
    <line x1="100" y1="55" x2="50" y2="65" stroke="black"/>
    <line x1="100" y1="55" x2="150" y2="65" stroke="black"/>
    <line x1="50" y1="95" x2="25" y2="105" stroke="black"/>
    <line x1="50" y1="95" x2="75" y2="105" stroke="black"/>
  </g>

  <!-- Final Max Heap -->
  <g transform="translate(550,20)">
    <text x="70" y="0" font-size="14" fill="black">Step 3: Final Max Heap</text>
    <circle cx="100" cy="40" r="15" fill="#4CAF50"/>
    <circle cx="50" cy="80" r="15" fill="#4CAF50"/>
    <circle cx="150" cy="80" r="15" fill="#4CAF50"/>
    <circle cx="25" cy="120" r="15" fill="#4CAF50"/>
    <circle cx="75" cy="120" r="15" fill="#4CAF50"/>
    <text x="95" y="45" font-size="12" fill="white">10</text>
    <text x="45" y="85" font-size="12" fill="white">5</text>
    <text x="145" y="85" font-size="12" fill="white">3</text>
    <text x="20" y="125" font-size="12" fill="white">4</text>
    <text x="70" y="125" font-size="12" fill="white">1</text>
    <line x1="100" y1="55" x2="50" y2="65" stroke="black"/>
    <line x1="100" y1="55" x2="150" y2="65" stroke="black"/>
    <line x1="50" y1="95" x2="25" y2="105" stroke="black"/>
    <line x1="50" y1="95" x2="75" y2="105" stroke="black"/>
  </g>
</svg>
</div>

<h3><u>The Surprising Efficiency</u></h3>
<p>
One of the most fascinating aspects of heapify is its time complexity. While building a heap through repeated insertions takes O(n log n) time, the bottom-up heapify process achieves O(n) time complexity. This efficiency comes from a beautiful mathematical insight about the structure of heaps.
</p>

<p>
Consider why this works: nodes near the bottom of the heap need to move very little (if at all), while there are very few nodes near the top that need to move further. When we do the math, we find that the total work follows a geometric series that sums to linear time. It's a perfect example of how understanding the structure of a problem can lead to surprisingly efficient solutions.
</p>`,
  codeExample: `def heapify(arr):
    """
    Transform an array into a max heap using the bottom-up approach.
    
    This process works in O(n) time by starting from the last parent
    and working up to the root, ensuring each subtree is a valid heap.
    
    Args:
        arr: List to transform into a heap
        
    Time Complexity: O(n)
    Space Complexity: O(1) - modifies array in place
    """
    def sink_down(index, size):
        """
        Move an element down until it's in the correct position.
        This ensures the subtree rooted at index follows heap property.
        """
        while True:
            # Find the largest element among parent and children
            largest = index
            left = 2 * index + 1    # Left child
            right = 2 * index + 2   # Right child
            
            # Check if left child is larger
            if left < size and arr[left] > arr[largest]:
                largest = left
                
            # Check if right child is larger
            if right < size and arr[right] > arr[largest]:
                largest = right
                
            # If parent is largest, we're done
            if largest == index:
                break
                
            # Otherwise, swap and continue sinking
            arr[index], arr[largest] = arr[largest], arr[index]
            index = largest
    
    # Start from the last parent node and work up to the root
    # Last parent is at (n-2)/2 where n is array length
    n = len(arr)
    for i in range((n - 2) // 2, -1, -1):
        sink_down(i, n)

def demonstrate_heapify_process(arr):
    """
    Demonstrate the heapify process step by step.
    This helps visualize how the array transforms into a heap.
    """
    print("Starting array:", arr)
    n = len(arr)
    
    # Process each parent node from bottom up
    start_idx = (n - 2) // 2  # Last parent
    for i in range(start_idx, -1, -1):
        print(f"\\nProcessing parent at index {i} (value: {arr[i]})")
        
        # Show current subtree
        left = 2 * i + 1
        right = 2 * i + 2
        children = []
        if left < n:
            children.append(f"left: {arr[left]}")
        if right < n:
            children.append(f"right: {arr[right]}")
            
        print(f"Children: {', '.join(children)}")
        
        # Perform sink down operation
        sink_down(i, n)
        print("Array after processing:", arr)

# Example usage with detailed visualization
sample_array = [4, 10, 3, 5, 1]
demonstrate_heapify_process(sample_array.copy())`,
  exercises: [
    {
      prompt: 'Implement a version of heapify that counts and returns the number of swaps performed during the process.',
      initialCode: `def heapify_with_metrics(arr):
    """
    Transform array into max heap and count swaps.
    
    Args:
        arr: List to heapify
    Returns:
        int: Number of swaps performed
    """
    # Your code here
    pass`,
      solution: `def heapify_with_metrics(arr):
    """
    Transform array into max heap and count swaps.
    
    Args:
        arr: List to heapify
    Returns:
        int: Number of swaps performed
    """
    swap_count = 0
    
    def sink_down(index, size):
        nonlocal swap_count
        while True:
            largest = index
            left = 2 * index + 1
            right = 2 * index + 2
            
            if left < size and arr[left] > arr[largest]:
                largest = left
            if right < size and arr[right] > arr[largest]:
                largest = right
                
            if largest == index:
                break
                
            arr[index], arr[largest] = arr[largest], arr[index]
            swap_count += 1
            index = largest
    
    n = len(arr)
    for i in range((n - 2) // 2, -1, -1):
        sink_down(i, n)
    
    return swap_count`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'Why is bottom-up heapify O(n) while building a heap through repeated insertions is O(n log n)?',
      options: [
        'Bottom-up heapify uses less memory',
        'Most nodes in bottom-up heapify require very little movement',
        'Repeated insertions require sorting the array first',
        'Bottom-up heapify processes multiple nodes simultaneously',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Both approaches use the same amount of memory.',
        'Correct! In bottom-up heapify, nodes at the bottom (which are most numerous) need minimal adjustments, while only a few nodes near the top need to move far.',
        'Incorrect. Repeated insertions don\'t require pre-sorting.',
        'Incorrect. Bottom-up heapify processes one node at a time.',
      ],
      difficulty: Difficulty.Advanced,
    }
  ],
};

const heapUpdateData: LessonContent = {
  title: 'Heap Update Operations: Modifying Elements in Place',
  content: `<p>
Update operations in a heap are fascinating because they combine aspects of both insertion and extraction. When we update an element in a heap, we need to restore both structural and heap properties while keeping track of the element's position. This operation is particularly important for priority queue implementations where priorities can change dynamically.
</p>

<h3><u>Understanding Update Operations</u></h3>
<p>
Think of updating a heap element like adjusting someone's position in a company hierarchy based on a performance review. After the review, they might need to move up or down in the organization to maintain the proper structure. In heap terms, when we change a value, it might need to bubble up or sink down to maintain the heap property.
</p>

<h4><b>The Two-Way Process</b></h4>
<p>
After updating a value, we need to consider both directions:
</p>
<p>
1. If the new value is larger than the parent (in a max heap), it needs to bubble up
2. If the new value is smaller than either child, it needs to sink down
</p>

<div class="visualization">
<svg viewBox="0 0 800 300">
  <!-- Initial State -->
  <g transform="translate(50,20)">
    <text x="70" y="0" font-size="14" fill="black">Step 1: Initial Max Heap</text>
    <circle cx="100" cy="40" r="15" fill="#4CAF50"/>
    <circle cx="50" cy="80" r="15" fill="#4CAF50"/>
    <circle cx="150" cy="80" r="15" fill="#4CAF50"/>
    <circle cx="25" cy="120" r="15" fill="#4CAF50"/>
    <circle cx="75" cy="120" r="15" fill="#4CAF50"/>
    <text x="95" y="45" font-size="12" fill="white">50</text>
    <text x="45" y="85" font-size="12" fill="white">30</text>
    <text x="145" y="85" font-size="12" fill="white">40</text>
    <text x="20" y="125" font-size="12" fill="white">20</text>
    <text x="70" y="125" font-size="12" fill="white">25</text>
    <line x1="100" y1="55" x2="50" y2="65" stroke="black"/>
    <line x1="100" y1="55" x2="150" y2="65" stroke="black"/>
    <line x1="50" y1="95" x2="25" y2="105" stroke="black"/>
    <line x1="50" y1="95" x2="75" y2="105" stroke="black"/>
  </g>

  <!-- Update State -->
  <g transform="translate(300,20)">
    <text x="70" y="0" font-size="14" fill="black">Step 2: Update Node 30 to 45</text>
    <circle cx="100" cy="40" r="15" fill="#4CAF50"/>
    <circle cx="50" cy="80" r="15" fill="#FF9800"/>
    <circle cx="150" cy="80" r="15" fill="#4CAF50"/>
    <circle cx="25" cy="120" r="15" fill="#4CAF50"/>
    <circle cx="75" cy="120" r="15" fill="#4CAF50"/>
    <text x="95" y="45" font-size="12" fill="white">50</text>
    <text x="45" y="85" font-size="12" fill="white">45</text>
    <text x="145" y="85" font-size="12" fill="white">40</text>
    <text x="20" y="125" font-size="12" fill="white">20</text>
    <text x="70" y="125" font-size="12" fill="white">25</text>
    <line x1="100" y1="55" x2="50" y2="65" stroke="black"/>
    <line x1="100" y1="55" x2="150" y2="65" stroke="black"/>
    <line x1="50" y1="95" x2="25" y2="105" stroke="black"/>
    <line x1="50" y1="95" x2="75" y2="105" stroke="black"/>
  </g>

  <!-- Update State 2 -->
  <g transform="translate(550,20)">
    <text x="70" y="0" font-size="14" fill="black">Step 3: Update Node 40 to 15</text>
    <circle cx="100" cy="40" r="15" fill="#4CAF50"/>
    <circle cx="50" cy="80" r="15" fill="#4CAF50"/>
    <circle cx="150" cy="80" r="15" fill="#FF9800"/>
    <circle cx="25" cy="120" r="15" fill="#4CAF50"/>
    <circle cx="75" cy="120" r="15" fill="#4CAF50"/>
    <text x="95" y="45" font-size="12" fill="white">50</text>
    <text x="45" y="85" font-size="12" fill="white">45</text>
    <text x="145" y="85" font-size="12" fill="white">15</text>
    <text x="20" y="125" font-size="12" fill="white">20</text>
    <text x="70" y="125" font-size="12" fill="white">25</text>
    <line x1="100" y1="55" x2="50" y2="65" stroke="black"/>
    <line x1="100" y1="55" x2="150" y2="65" stroke="black"/>
    <line x1="50" y1="95" x2="25" y2="105" stroke="black"/>
    <line x1="50" y1="95" x2="75" y2="105" stroke="black"/>
  </g>
</svg>
</div>

<h3><u>Common Interview Applications</u></h3>
<p>
Heap updates are crucial for several common interview problems:
</p>

<p>1. <strong>Dynamic Priority Queues:</strong> Tasks with changing priorities</p>
<p>2. <strong>Graph Algorithms:</strong> Updating distances in Dijkstra's algorithm</p>
<p>3. <strong>Event Scheduling:</strong> Rescheduling events with new times</p>
<p>4. <strong>Online Processing:</strong> Updating streaming data priorities</p>

<h3><u>Time Complexity Analysis</u></h3>
<p>
The time complexity for updating an element is O(log n), as we might need to traverse the height of the tree either upward or downward. However, we only traverse in one direction for any given update – we either bubble up or sink down, never both.
</p>`,
  codeExample: `class MaxHeap:
    """
    MaxHeap implementation with update operations.
    Includes index tracking for efficient updates.
    """
    def __init__(self):
        self.heap = []
        # Dictionary to track element positions
        self.positions = {}
    
    def parent(self, i):
        return (i - 1) // 2
        
    def left_child(self, i):
        return 2 * i + 1
        
    def right_child(self, i):
        return 2 * i + 2
    
    def update(self, old_value, new_value):
        """
        Update an element in the heap.
        
        Args:
            old_value: Value to update
            new_value: New value to set
            
        Time Complexity: O(log n)
        Space Complexity: O(1)
        """
        if old_value not in self.positions:
            raise ValueError("Value not found in heap")
            
        index = self.positions[old_value]
        self.heap[index] = new_value
        
        # Update position tracking
        del self.positions[old_value]
        self.positions[new_value] = index
        
        parent = self.parent(index)
        
        # Decide whether to bubble up or sink down
        if index > 0 and self.heap[parent] < new_value:
            self._bubble_up(index)
        else:
            self._sink_down(index)
    
    def _bubble_up(self, index):
        """Move an element up the heap until heap property is restored."""
        value = self.heap[index]
        
        while index > 0:
            parent = self.parent(index)
            if self.heap[parent] >= value:
                break
                
            # Swap element with parent
            self.heap[index] = self.heap[parent]
            self.positions[self.heap[parent]] = index
            
            index = parent
        
        self.heap[index] = value
        self.positions[value] = index
    
    def _sink_down(self, index):
        """Move an element down the heap until heap property is restored."""
        value = self.heap[index]
        size = len(self.heap)
        
        while True:
            largest = index
            left = self.left_child(index)
            right = self.right_child(index)
            
            if left < size and self.heap[left] > self.heap[largest]:
                largest = left
            if right < size and self.heap[right] > self.heap[largest]:
                largest = right
                
            if largest == index:
                break
                
            # Swap with largest child
            self.heap[index] = self.heap[largest]
            self.positions[self.heap[largest]] = index
            index = largest
        
        self.heap[index] = value
        self.positions[value] = index

# Example usage for priority queue updates
def schedule_tasks_with_updates():
    """
    Example of using heap updates for task scheduling.
    """
    heap = MaxHeap()
    
    # Add initial tasks with priorities
    tasks = [
        ("Task A", 3),
        ("Task B", 1),
        ("Task C", 4),
        ("Task D", 2)
    ]
    
    for task, priority in tasks:
        heap.insert((priority, task))
    
    print("Initial task queue:")
    print(heap.heap)
    
    # Update task priority
    print("\\nUpdating Task B priority from 1 to 5")
    old_value = (1, "Task B")
    new_value = (5, "Task B")
    heap.update(old_value, new_value)
    
    print("Updated task queue:")
    print(heap.heap)`,
  exercises: [
    {
      prompt: 'Implement a method to update all elements in a heap that match a certain condition while maintaining heap property.',
      initialCode: `def update_matching_elements(heap, condition, new_value):
    """
    Update all elements that match a condition.
    
    Args:
        heap: MaxHeap instance
        condition: Function that returns True for elements to update
        new_value: Value to set for matching elements
    """
    # Implement your solution here
    pass`,
      solution: `def update_matching_elements(heap, condition, new_value):
    """
    Update all elements that match a condition.
    
    Args:
        heap: MaxHeap instance
        condition: Function that returns True for elements to update
        new_value: Value to set for matching elements
    """
    # Find all matching elements
    updates = []
    for i, value in enumerate(heap.heap):
        if condition(value):
            updates.append((i, value))
    
    # Process updates from bottom to top
    for index, old_value in sorted(updates, reverse=True):
        heap.heap[index] = new_value
        
        # Update position tracking
        del heap.positions[old_value]
        heap.positions[new_value] = index
        
        # Restore heap property
        parent = heap.parent(index)
        if index > 0 and heap.heap[parent] < new_value:
            heap._bubble_up(index)
        else:
            heap._sink_down(index)`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'When updating a value in a heap, why can\'t we need to both bubble up AND sink down for the same update?',
      options: [
        'Because it would be too computationally expensive',
        'Because the heap would become unbalanced',
        'Because an element can only be either too large for its parent or too small for its children, never both',
        'Because updates only affect one level of the heap',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. While efficiency is important, this is not the main reason.',
        'Incorrect. The heap remains balanced regardless of update operations.',
        'Correct! At any point, an element can only violate the heap property in one direction - either it\'s too large compared to its parent or too small compared to its children.',
        'Incorrect. Updates can affect multiple levels of the heap.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};

const topKPatternData: LessonContent = {
  title: 'Mastering the Top-K Pattern with Heaps',
  content: `<p>
The Top-K pattern is one of the most frequently appearing patterns in coding interviews. It's a family of problems that ask us to find the k largest or smallest elements in a dataset. While these problems might seem straightforward at first, they offer fascinating opportunities to demonstrate algorithmic thinking and optimization.
</p>

<h3><u>Understanding the Pattern</u></h3>
<p>
Think of the Top-K pattern like organizing a competition. Imagine you're running a tournament where you need to identify the top 3 winners from 1000 participants. You could sort everyone's scores (taking O(n log n) time), but that's doing more work than necessary. Just as you don't need to fully sort every participant to find the top 3, we can use heaps to find the k largest or smallest elements more efficiently.
</p>

<h3><u>Two Key Approaches</u></h3>

<h4><b>1. Using a Max Heap</b></h4>
<p>
Best when k is close to n (the size of the dataset). The process works like this:
</p>
<p>
1. Build a max heap with all elements (O(n))
2. Extract k times to get largest elements (O(k log n))
3. Total complexity: O(n + k log n)
</p>

<h4><b>2. Using a Min Heap</b></h4>
<p>
Best when k is small compared to n. Here's how it works:
</p>
<p>
1. Maintain a min heap of size k
2. For each element:
   - If heap size < k: add element
   - If element > heap top: replace top
3. Total complexity: O(n log k)
</p>

<h3><u>Choosing the Right Approach</u></h3>
<p>
The choice between approaches depends on several factors:
</p>
<p>
1. The size of k relative to n
2. Memory constraints
3. Whether we need sorted output
4. Whether the data is streaming
</p>

<h3><u>Common Variations</u></h3>
<p>
The Top-K pattern appears in many forms:
</p>
<p>
1. K most frequent elements
2. K closest points to origin
3. K largest elements in a stream
4. Top K frequent words
5. K closest points to a target
</p>

<h3><u>Problem-Solving Framework</u></h3>
<p>
When approaching a Top-K problem, follow these steps:
</p>
<p>
1. Identify what we're comparing (values, frequencies, distances)
2. Choose heap type (min for k-largest, max for k-smallest)
3. Determine if we need a fixed-size heap
4. Consider memory constraints and streaming requirements
</p>`,
  codeExample: `class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        """
        Find the kth largest element in an array.
        
        This demonstrates using a min heap to solve a Top-K problem efficiently.
        We maintain a heap of size k, keeping only the k largest elements.
        
        Time Complexity: O(n log k)
        Space Complexity: O(k)
        """
        # Create min heap (python heapq is min heap by default)
        heap = []
        
        for num in nums:
            if len(heap) < k:
                # While building up initial k elements
                heapq.heappush(heap, num)
            elif num > heap[0]:
                # If current number is larger than smallest in heap
                # remove smallest and add current
                heapq.heapreplace(heap, num)
        
        # The smallest element in our heap of k largest elements
        # is our kth largest element
        return heap[0]

    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        """
        Find the k most frequent elements in an array.
        
        This demonstrates a more complex Top-K problem where we're
        dealing with frequencies rather than direct values.
        
        Time Complexity: O(n log k)
        Space Complexity: O(n)
        """
        # Count frequencies
        counter = Counter(nums)
        
        # Use min heap to keep k most frequent
        # Store tuples of (frequency, number)
        heap = []
        
        for num, freq in counter.items():
            if len(heap) < k:
                # While building initial k elements
                heapq.heappush(heap, (freq, num))
            elif freq > heap[0][0]:
                # If current frequency is higher than lowest frequency in heap
                heapq.heapreplace(heap, (freq, num))
        
        # Extract numbers from heap tuples
        return [num for freq, num in heap]

    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        """
        Find k points closest to origin.
        
        This demonstrates using Top-K pattern with custom comparison logic.
        We use distance from origin as our comparison metric.
        
        Time Complexity: O(n log k)
        Space Complexity: O(k)
        """
        # Use max heap to keep k closest points
        # We use negative distance because python only has min heap
        heap = []
        
        for x, y in points:
            dist = -(x*x + y*y)  # Negative for max heap behavior
            
            if len(heap) < k:
                heapq.heappush(heap, (dist, x, y))
            elif dist > heap[0][0]:
                heapq.heapreplace(heap, (dist, x, y))
        
        # Return points without distances
        return [[x, y] for (dist, x, y) in heap]`,
  exercises: [
    {
      prompt: 'Implement a function to find the k most frequent words in a list of strings, maintaining alphabetical order for words with same frequency.',
      initialCode: `def topKFrequentWords(words: List[str], k: int) -> List[str]:
    """
    Find k most frequent words, breaking ties alphabetically.
    
    Args:
        words: List of strings
        k: Number of top frequent words to return
    Returns:
        List of k most frequent words
    """
    # Implement your solution here
    pass`,
      solution: `def topKFrequentWords(words: List[str], k: int) -> List[str]:
    """
    Find k most frequent words, breaking ties alphabetically.
    
    We use a custom comparison in the heap to handle both frequency
    and alphabetical ordering in one structure.
    
    Time Complexity: O(n log k)
    Space Complexity: O(n)
    """
    # Count word frequencies
    counter = Counter(words)
    
    # Custom tuple for heap: (-frequency, word)
    # Negative frequency for max heap behavior
    # Word's natural string comparison handles ties
    heap = []
    
    for word, freq in counter.items():
        # Create tuple with negative frequency for max heap
        entry = (-freq, word)
        
        if len(heap) < k:
            heapq.heappush(heap, entry)
        elif entry < heap[0]:  # Compare using tuple comparison
            heapq.heapreplace(heap, entry)
    
    # Sort heap entries to get correct order
    result = sorted(heap, key=lambda x: (-x[0], x[1]))
    
    # Extract words from sorted entries
    return [word for (freq, word) in result]`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Implement a function to find the kth largest element in a data stream.',
      initialCode: `class KthLargest:
    """
    Maintain a structure that can find kth largest in a stream.
    """
    def __init__(self, k: int, nums: List[int]):
        # Initialize your data structure here
        pass
        
    def add(self, val: int) -> int:
        # Update structure and return kth largest
        pass`,
      solution: `class KthLargest:
    """
    Maintain a structure that can find kth largest in a stream.
    We use a min heap of size k to track k largest elements.
    
    Time Complexity: 
        - Init: O(n log k)
        - Add: O(log k)
    Space Complexity: O(k)
    """
    def __init__(self, k: int, nums: List[int]):
        self.k = k
        self.heap = []
        
        # Initialize heap with first k largest elements
        for num in nums:
            self.add(num)
    
    def add(self, val: int) -> int:
        # If heap isn't full yet, add element
        if len(self.heap) < self.k:
            heapq.heappush(self.heap, val)
        # If new value is larger than smallest in heap
        elif val > self.heap[0]:
            heapq.heapreplace(self.heap, val)
            
        # Return kth largest (smallest in our min heap)
        return self.heap[0] if len(self.heap) == self.k else None`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'When solving a Top-K largest elements problem, why do we use a min heap of size k instead of a max heap of all elements?',
      options: [
        'Because min heaps are faster than max heaps',
        'To save memory by only storing k elements',
        'Because it provides sorted output',
        'To avoid having to process all elements',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. The time complexity is the key factor, not the heap type.',
        'Correct! Using a min heap of size k requires O(k) space instead of O(n), and gives us O(n log k) time complexity instead of O(n log n).',
        'Incorrect. Neither approach guarantees sorted output.',
        'Incorrect. Both approaches need to process all elements.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'In a streaming data scenario, which heap approach would be most appropriate for finding the k largest elements?',
      options: [
        'Max heap storing all elements seen so far',
        'Min heap of size k',
        'Two heaps of equal size',
        'Max heap of size k',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. This would use unbounded memory as the stream continues.',
        'Correct! A min heap of size k maintains only what we need and efficiently processes new elements in O(log k) time.',
        'Incorrect. This approach is more suitable for finding medians.',
        'Incorrect. A max heap wouldn\'t let us efficiently maintain the k largest elements.',
      ],
      difficulty: Difficulty.Advanced,
    }
  ],
};

const kWayMergeData: LessonContent = {
  title: 'Mastering K-Way Merge Using Heaps',
  content: `<p>
The K-way merge pattern is a powerful technique that teaches us how to efficiently combine multiple sorted sequences into a single sorted sequence. Think of it like being a traffic controller managing multiple lanes of sorted vehicles merging into a single ordered lane – we need to ensure the final sequence maintains proper order while handling multiple input streams efficiently.
</p>

<h3><u>Understanding the Challenge</u></h3>
<p>
Imagine you're receiving movie rankings from k different critics, each providing their own sorted list of movies. Your task is to combine these lists into a single, sorted master list. While we could concatenate all lists and sort them (taking O(N log N) time where N is the total number of elements), there's a more elegant solution that takes advantage of the fact that our input lists are already sorted.
</p>

<h3><u>The Heap Solution</u></h3>
<p>
We use a min heap to track the current smallest element from each list. Think of the heap as our "decision maker" that always tells us which element should go next in our merged result. Here's how it works:
</p>

<div class="visualization">
<svg viewBox="0 0 800 400">
  <!-- Input Lists -->
  <g transform="translate(50,20)">
    <text x="0" y="0" font-size="14" fill="black">Input Lists:</text>
    <text x="0" y="30" font-size="12" fill="#1976D2">List 1: [2, 6, 8]</text>
    <text x="0" y="50" font-size="12" fill="#388E3C">List 2: [3, 6, 7]</text>
    <text x="0" y="70" font-size="12" fill="#E64A19">List 3: [1, 3, 4]</text>
  </g>

  <!-- Min Heap State -->
  <g transform="translate(300,20)">
    <text x="0" y="0" font-size="14" fill="black">Min Heap State:</text>
    <circle cx="100" cy="40" r="20" fill="#4CAF50"/>
    <circle cx="60" cy="80" r="20" fill="#2196F3"/>
    <circle cx="140" cy="80" r="20" fill="#FF5722"/>
    <text x="95" y="45" font-size="12" fill="white">1</text>
    <text x="55" y="85" font-size="12" fill="white">2</text>
    <text x="135" y="85" font-size="12" fill="white">3</text>
    <line x1="100" y1="60" x2="60" y2="60" stroke="black"/>
    <line x1="100" y1="60" x2="140" y2="60" stroke="black"/>
  </g>

  <!-- Output State -->
  <g transform="translate(550,20)">
    <text x="0" y="0" font-size="14" fill="black">Merged Output:</text>
    <text x="0" y="30" font-size="12" fill="#000">Current: [1, 2, 3, ...]</text>
  </g>
</svg>
</div>

<h3><u>The Process Step by Step</u></h3>
<p>
1. Initialize a min heap with the first element from each list
2. Remove the smallest element from the heap (will be our next output element)
3. Add the next element from the list where we just removed an element
4. Repeat steps 2-3 until the heap is empty
</p>

<h3><u>Why It's Efficient</u></h3>
<p>
The beauty of this solution lies in its efficiency:
</p>
<p>
- We only need to store k elements in the heap at any time
- Each insertion and removal takes O(log k) time
- We process each element exactly once
- Total time complexity: O(N log k) where N is total number of elements
</p>

<h3><u>Common Variations</u></h3>
<p>
The k-way merge pattern appears in many forms:
</p>
<p>
1. Merging k sorted linked lists
2. Combining k sorted files
3. Merging k sorted streams of data
4. Aggregating k sorted database results
5. Combining k sorted log files
</p>`,
  codeExample: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        """
        Merge k sorted linked lists using a min heap.
        
        This is a classic k-way merge problem that demonstrates
        handling complex data structures (linked lists) with heaps.
        
        Time Complexity: O(N log k) where N is total number of nodes
        Space Complexity: O(k) for the heap
        """
        # Edge cases
        if not lists:
            return None
            
        # We need to customize comparison for heap elements
        # Store (value, list_index) pairs in heap
        # Custom comparison class to make heap entries comparable
        class HeapEntry:
            def __init__(self, node: ListNode, list_index: int):
                self.node = node
                self.list_index = list_index
                
            def __lt__(self, other):
                return self.node.val < other.node.val
        
        # Initialize heap with first node from each list
        heap = []
        for i, head in enumerate(lists):
            if head:
                heapq.heappush(heap, HeapEntry(head, i))
        
        # Create dummy node for result list
        dummy = ListNode(0)
        current = dummy
        
        # Process nodes until heap is empty
        while heap:
            # Get smallest value and its list index
            entry = heapq.heappop(heap)
            node = entry.node
            list_index = entry.list_index
            
            # Add to result list
            current.next = node
            current = current.next
            
            # Add next node from same list if exists
            if node.next:
                heapq.heappush(heap, HeapEntry(node.next, list_index))
        
        return dummy.next

    def mergeKArrays(self, arrays: List[List[int]]) -> List[int]:
        """
        Merge k sorted arrays using a min heap.
        
        This simpler version helps understand the core pattern
        without linked list complexity.
        
        Time Complexity: O(N log k)
        Space Complexity: O(k) + O(N) for result
        """
        # Result array
        result = []
        
        # Min heap to track smallest elements
        # Store (value, array_index, element_index) tuples
        heap = []
        
        # Add first element from each array
        for i, array in enumerate(arrays):
            if array:
                heapq.heappush(heap, (array[0], i, 0))
        
        # Process elements until heap is empty
        while heap:
            value, array_index, element_index = heapq.heappop(heap)
            
            # Add to result
            result.append(value)
            
            # If there are more elements in this array, add next one
            if element_index + 1 < len(arrays[array_index]):
                next_element = arrays[array_index][element_index + 1]
                heapq.heappush(heap, 
                    (next_element, array_index, element_index + 1))
        
        return result`,
  exercises: [
    {
      prompt: 'Implement a function to merge k sorted streams of integers where each stream might be infinite. Return an iterator that yields elements in sorted order.',
      initialCode: `class StreamIterator:
    """Iterator interface for a stream of integers."""
    def has_next(self) -> bool: pass
    def next(self) -> int: pass

def merge_k_streams(streams: List[StreamIterator]) -> Iterator[int]:
    """
    Merge k sorted streams into a single sorted stream.
    
    Args:
        streams: List of StreamIterator objects
    Returns:
        Iterator yielding merged elements in sorted order
    """
    # Implement your solution here
    pass`,
      solution: `def merge_k_streams(streams: List[StreamIterator]) -> Iterator[int]:
    """
    Merge k sorted streams into a single sorted stream.
    
    Uses a min heap to track current elements from each stream.
    Only loads one element per stream at a time.
    
    Time Complexity: O(N log k) where N is total elements yielded
    Space Complexity: O(k) for the heap
    """
    # Create heap entries for streams with available elements
    heap = []
    for i, stream in enumerate(streams):
        if stream.has_next():
            # Store (value, stream_index) in heap
            heapq.heappush(heap, (stream.next(), i))
    
    # Yield elements in sorted order
    while heap:
        value, stream_index = heapq.heappop(heap)
        
        # Yield current smallest
        yield value
        
        # If stream has more elements, add next one
        if streams[stream_index].has_next():
            next_value = streams[stream_index].next()
            heapq.heappush(heap, (next_value, stream_index))`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why do we use a min heap instead of a max heap for k-way merge?',
      options: [
        'Because min heaps are more efficient than max heaps',
        'To process elements in ascending order for the merged result',
        'To save memory by using less space',
        'To handle edge cases better',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Min and max heaps have the same efficiency characteristics.',
        'Correct! We want to process elements in ascending order, and a min heap always gives us the smallest available element.',
        'Incorrect. Both types of heaps would use the same amount of memory.',
        'Incorrect. Edge case handling is similar for both heap types.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What is the advantage of k-way merge over merging arrays pairwise?',
      options: [
        'It uses less total memory',
        'It requires fewer comparisons overall',
        'It processes elements in a single pass',
        'It handles uneven sized arrays better',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Both approaches can be implemented with similar memory usage.',
        'Incorrect. The number of comparisons is similar in both approaches.',
        'Correct! K-way merge processes each element exactly once, while pairwise merging requires multiple passes over some elements.',
        'Incorrect. Both approaches can handle uneven sized arrays equally well.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};

const twoHeapsData: LessonContent = {
  title: 'Mastering the Two Heaps Pattern',
  content: `<p>
The Two Heaps pattern is an elegant approach to solving problems that require tracking the middle point of a dynamic set of numbers. Imagine you're watching a marathon where runners are constantly finishing. Not only do you need to know who's finished, but you also need to maintain a real-time understanding of the median finishing time. This is where the Two Heaps pattern shines.
</p>

<h3><u>The Core Concept</u></h3>
<p>
At its heart, the Two Heaps pattern divides our data into two balanced groups:
</p>

<p>
1. A max heap storing the smaller half of our numbers (let's call it smallerHalf)
2. A min heap storing the larger half of our numbers (let's call it largerHalf)
</p>

<p>
This division creates a powerful property: the median will always be either the maximum of smallerHalf, the minimum of largerHalf, or their average, depending on the total number of elements.
</p>

<h3><u>Understanding Through Visualization</u></h3>

<div class="visualization">
<svg viewBox="0 0 800 400">
  <!-- Max Heap (Smaller Numbers) -->
  <g transform="translate(50,20)">
    <text x="70" y="0" font-size="14" fill="black">Max Heap (Smaller Half)</text>
    <circle cx="100" cy="40" r="20" fill="#E64A19"/>
    <circle cx="60" cy="90" r="20" fill="#E64A19"/>
    <circle cx="140" cy="90" r="20" fill="#E64A19"/>
    <text x="95" y="45" font-size="12" fill="white">5</text>
    <text x="55" y="95" font-size="12" fill="white">3</text>
    <text x="135" y="95" font-size="12" fill="white">4</text>
    <line x1="100" y1="60" x2="60" y2="70" stroke="black"/>
    <line x1="100" y1="60" x2="140" y2="70" stroke="black"/>
  </g>

  <!-- Dividing Line -->
  <g transform="translate(300,60)">
    <text x="0" y="0" font-size="14" fill="black">Median Line</text>
    <line x1="0" y1="20" x2="100" y2="20" stroke="#666" stroke-dasharray="5,5"/>
    <text x="0" y="50" font-size="12" fill="#666">Numbers ≤ median</text>
    <text x="0" y="-20" font-size="12" fill="#666">Numbers > median</text>
  </g>

  <!-- Min Heap (Larger Numbers) -->
  <g transform="translate(550,20)">
    <text x="70" y="0" font-size="14" fill="black">Min Heap (Larger Half)</text>
    <circle cx="100" cy="40" r="20" fill="#1976D2"/>
    <circle cx="60" cy="90" r="20" fill="#1976D2"/>
    <circle cx="140" cy="90" r="20" fill="#1976D2"/>
    <text x="95" y="45" font-size="12" fill="white">7</text>
    <text x="55" y="95" font-size="12" fill="white">8</text>
    <text x="135" y="95" font-size="12" fill="white">9</text>
    <line x1="100" y1="60" x2="60" y2="70" stroke="black"/>
    <line x1="100" y1="60" x2="140" y2="70" stroke="black"/>
  </g>
</svg>
</div>

<h3><u>Key Principles</u></h3>
<p>
The Two Heaps pattern maintains three critical invariants:
</p>

<p>
1. <strong>Balance Property:</strong> The size difference between heaps is never more than 1
</p>
<p>
2. <strong>Ordering Property:</strong> Every element in smallerHalf is ≤ every element in largerHalf
</p>
<p>
3. <strong>Median Access Property:</strong> The median can be computed in O(1) time
</p>

<h3><u>Common Applications</u></h3>
<p>
This pattern is particularly useful for problems involving:
</p>

<p>
1. Finding the median in a stream of numbers
2. Finding the median of sliding windows
3. Tracking salary ranges or price intervals
4. Analyzing data distributions in real-time
</p>

<h3><u>When to Use It</u></h3>
<p>
Consider the Two Heaps pattern when you encounter these characteristics in a problem:
</p>

<p>
1. Need to track the middle point or median
2. Data is coming in dynamically or as a stream
3. Need efficient insertions and median access
4. Working with sliding windows or intervals
</p>`,
  codeExample: `class MedianFinder:
    """
    Track the median of a stream of numbers using two heaps.
    
    This class demonstrates the core implementation of the Two Heaps pattern,
    showing how to maintain balance and order properties efficiently.
    
    Time Complexity:
        - addNum: O(log n)
        - findMedian: O(1)
    Space Complexity: O(n)
    """
    def __init__(self):
        # Max heap for smaller half (negated for max heap behavior)
        self.smaller_half = []
        # Min heap for larger half
        self.larger_half = []
        
    def addNum(self, num: int) -> None:
        """Add a number to our data structure."""
        # Step 1: Add to appropriate heap
        if not self.larger_half or num > self.larger_half[0]:
            heapq.heappush(self.larger_half, num)
        else:
            # Use negative for max heap behavior
            heapq.heappush(self.smaller_half, -num)
            
        # Step 2: Rebalance if necessary
        if len(self.smaller_half) > len(self.larger_half) + 1:
            # Move largest from smaller to larger
            value = -heapq.heappop(self.smaller_half)
            heapq.heappush(self.larger_half, value)
        elif len(self.larger_half) > len(self.smaller_half) + 1:
            # Move smallest from larger to smaller
            value = heapq.heappop(self.larger_half)
            heapq.heappush(self.smaller_half, -value)
    
    def findMedian(self) -> float:
        """Get the median of all added numbers."""
        if len(self.smaller_half) > len(self.larger_half):
            return -self.smaller_half[0]
        elif len(self.larger_half) > len(self.smaller_half):
            return self.larger_half[0]
        else:
            # Average of middle two numbers
            return (-self.smaller_half[0] + self.larger_half[0]) / 2

class SlidingWindowMedian:
    """
    Find medians in a sliding window using the Two Heaps pattern.
    This demonstrates a more complex application of the pattern.
    """
    def __init__(self):
        self.smaller_half = []  # max heap
        self.larger_half = []   # min heap
        self.window_vals = {}   # track values in current window
        
    def medianSlidingWindow(self, nums: List[int], k: int) -> List[float]:
        result = []
        
        # Process first k elements
        for i in range(k):
            self.addNum(nums[i])
            
        # Get first median
        result.append(self.getMedian())
        
        # Slide window
        for i in range(k, len(nums)):
            # Remove element going out of window
            self.removeNum(nums[i - k])
            # Add new element
            self.addNum(nums[i])
            # Calculate new median
            result.append(self.getMedian())
            
        return result
        
    def addNum(self, num: int):
        """Add number to appropriate heap."""
        # Similar to MedianFinder.addNum
        pass
        
    def removeNum(self, num: int):
        """
        Remove number from heaps.
        Note: Actual removal happens lazily during rebalancing
        """
        # Track value to be removed
        self.window_vals[num] = self.window_vals.get(num, 0) + 1
        
        # Mark which heap needs cleaning
        if not self.larger_half or num <= self.larger_half[0]:
            self._balance_if_needed(True)
        else:
            self._balance_if_needed(False)`,
  exercises: [
    {
      prompt: 'Implement a function to find the median of every subarray of size k in an array.',
      initialCode: `def sliding_window_median(nums: List[int], k: int) -> List[float]:
    """
    Find medians of all subarrays of size k.
    
    Args:
        nums: Input array
        k: Window size
    Returns:
        List of medians
    """
    # Implement your solution here
    pass`,
      solution: `def sliding_window_median(nums: List[int], k: int) -> List[float]:
    """
    Find medians of all subarrays of size k using Two Heaps.
    
    Time Complexity: O(n * log k)
    Space Complexity: O(k)
    """
    result = []
    smaller = []  # max heap
    larger = []   # min heap
    
    def add_num(num):
        if not larger or num > larger[0]:
            heapq.heappush(larger, num)
        else:
            heapq.heappush(smaller, -num)
            
        # Rebalance if needed
        if len(smaller) > len(larger) + 1:
            heapq.heappush(larger, -heapq.heappop(smaller))
        elif len(larger) > len(smaller) + 1:
            heapq.heappush(smaller, -heapq.heappop(larger))
            
    def remove_num(num):
        if num <= -smaller[0]:
            smaller.remove(-num)
            heapq.heapify(smaller)
        else:
            larger.remove(num)
            heapq.heapify(larger)
            
    def get_median():
        if len(smaller) > len(larger):
            return -smaller[0]
        elif len(larger) > len(smaller):
            return larger[0]
        return (-smaller[0] + larger[0]) / 2
    
    # Process first window
    for i in range(k):
        add_num(nums[i])
    result.append(get_median())
    
    # Slide window
    for i in range(k, len(nums)):
        remove_num(nums[i - k])
        add_num(nums[i])
        result.append(get_median())
        
    return result`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why do we use a max heap for the smaller half and a min heap for the larger half in the Two Heaps pattern?',
      options: [
        'To minimize memory usage',
        'To make the implementation simpler',
        'To access both middle elements efficiently for median calculation',
        'To improve the time complexity of insertions',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. The memory usage is the same regardless of heap types.',
        'Incorrect. The implementation complexity is similar either way.',
        'Correct! This arrangement gives us O(1) access to both potential median values - the largest of the smaller half and the smallest of the larger half.',
        'Incorrect. The time complexity for insertions would be the same with any arrangement.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};

const streamProcessingData: LessonContent = {
  title: 'Stream Processing: Managing Infinite Data with Finite Resources',
  content: `<p>
Stream processing is like being a traffic analyst watching cars pass by on a highway. You can't store information about every car that's ever passed, but you need to maintain accurate statistics about traffic patterns. Heaps provide an elegant solution to this challenge, allowing us to maintain important statistics using limited memory even when processing potentially infinite streams of data.
</p>

<h3><u>Understanding the Challenge</u></h3>
<p>
Stream processing presents unique challenges because we never have access to all the data at once. Think about monitoring a busy website's response times throughout the day. We face several key constraints:
</p>

<p>
1. We can only look at each piece of data once as it arrives
2. We have limited memory - we can't store everything
3. We need to provide answers immediately when asked
4. The data keeps coming indefinitely
</p>

<h3><u>Heap-Based Solutions</u></h3>
<p>
Heaps are particularly well-suited for stream processing because they can maintain order statistics (like medians, top-k elements, or percentiles) efficiently. Let's visualize how this works:
</p>

<div class="visualization">
<svg viewBox="0 0 800 400">
  <!-- Incoming Stream -->
  <g transform="translate(50,20)">
    <text x="0" y="0" font-size="14" fill="black">Incoming Stream</text>
    <rect x="0" y="20" width="50" height="30" fill="#E3F2FD"/>
    <rect x="60" y="20" width="50" height="30" fill="#E3F2FD"/>
    <rect x="120" y="20" width="50" height="30" fill="#E3F2FD"/>
    <text x="20" y="40" font-size="12">235ms</text>
    <text x="80" y="40" font-size="12">142ms</text>
    <text x="140" y="40" font-size="12">189ms</text>
    <path d="M180,35 L220,35 L210,30 M210,40 L220,35" stroke="#666" fill="none"/>
  </g>

  <!-- Processing Heaps -->
  <g transform="translate(250,20)">
    <text x="70" y="0" font-size="14" fill="black">Maintained Statistics</text>
    
    <!-- Bottom 50% Heap -->
    <g transform="translate(0,40)">
      <text x="0" y="0" font-size="12" fill="#666">Lower Half (Max Heap)</text>
      <circle cx="50" cy="30" r="15" fill="#E64A19"/>
      <circle cx="30" cy="60" r="15" fill="#E64A19"/>
      <circle cx="70" cy="60" r="15" fill="#E64A19"/>
      <text x="45" y="35" font-size="10" fill="white">142</text>
      <text x="25" y="65" font-size="10" fill="white">128</text>
      <text x="65" y="65" font-size="10" fill="white">135</text>
      <line x1="50" y1="45" x2="30" y2="45" stroke="black"/>
      <line x1="50" y1="45" x2="70" y2="45" stroke="black"/>
    </g>
    
    <!-- Top 50% Heap -->
    <g transform="translate(150,40)">
      <text x="0" y="0" font-size="12" fill="#666">Upper Half (Min Heap)</text>
      <circle cx="50" cy="30" r="15" fill="#1976D2"/>
      <circle cx="30" cy="60" r="15" fill="#1976D2"/>
      <circle cx="70" cy="60" r="15" fill="#1976D2"/>
      <text x="45" y="35" font-size="10" fill="white">189</text>
      <text x="25" y="65" font-size="10" fill="white">235</text>
      <text x="65" y="65" font-size="10" fill="white">192</text>
      <line x1="50" y1="45" x2="30" y2="45" stroke="black"/>
      <line x1="50" y1="45" x2="70" y2="45" stroke="black"/>
    </g>
  </g>

  <!-- Statistics Output -->
  <g transform="translate(500,20)">
    <text x="0" y="0" font-size="14" fill="black">Real-time Statistics</text>
    <text x="0" y="30" font-size="12">Median: 165.5ms</text>
    <text x="0" y="50" font-size="12">75th percentile: 192ms</text>
    <text x="0" y="70" font-size="12">90th percentile: 235ms</text>
  </g>
</svg>
</div>

<h3><u>Key Stream Processing Patterns</u></h3>
<p>
When processing streams with heaps, we typically encounter these fundamental patterns:
</p>

<p>
1. <strong>Sliding Window Statistics:</strong> Maintain statistics over the most recent n elements
2. <strong>Running Medians:</strong> Track the median as new values arrive
3. <strong>Percentile Tracking:</strong> Monitor multiple percentiles simultaneously
4. <strong>Anomaly Detection:</strong> Identify outliers in real-time
</p>

<h3><u>Memory Management Strategies</u></h3>
<p>
Efficient stream processing requires careful memory management. Here are key strategies:
</p>

<p>
1. <strong>Fixed-Size Windows:</strong> Maintain only the most recent n elements
2. <strong>Probabilistic Structures:</strong> Accept small error margins for massive memory savings
3. <strong>Hierarchical Structures:</strong> Combine multiple heaps for different time granularities
4. <strong>Lazy Deletion:</strong> Mark elements for removal but only actually remove during rebalancing
</p>`,
  codeExample: `class StreamStatistics:
    """
    Maintain running statistics for a stream of numbers.
    Tracks median and percentiles using a two-heap approach.
    
    This implementation demonstrates efficient stream processing
    with constant memory usage regardless of stream length.
    
    Time Complexity:
        - add_number: O(log n)
        - get_statistics: O(1)
    Space Complexity: O(window_size)
    """
    def __init__(self, window_size=1000):
        # Heaps for maintaining order statistics
        self.lower_half = []  # max heap
        self.upper_half = []  # min heap
        
        # Circular buffer for sliding window
        self.window = deque(maxlen=window_size)
        
        # Track elements pending removal
        self.to_remove = defaultdict(int)
        
        # Cache for percentile calculations
        self.percentile_cache = {}
        self.cache_valid = False
        
    def add_number(self, num: float) -> None:
        """
        Process a new number from the stream.
        
        Args:
            num: New number from the stream
        """
        # Add to sliding window
        if len(self.window) == self.window.maxlen:
            old_num = self.window.popleft()
            self.to_remove[old_num] += 1
        self.window.append(num)
        
        # Add to appropriate heap
        if not self.upper_half or num > self.upper_half[0]:
            heapq.heappush(self.upper_half, num)
        else:
            heapq.heappush(self.lower_half, -num)
            
        # Rebalance heaps if needed
        self._rebalance_heaps()
        
        # Invalidate cache
        self.cache_valid = False
        
    def _rebalance_heaps(self) -> None:
        """
        Ensure heaps remain balanced and remove pending elements.
        This is where we handle lazy deletion.
        """
        # First, remove any pending elements
        while self.lower_half and self.to_remove[-self.lower_half[0]] > 0:
            num = -heapq.heappop(self.lower_half)
            self.to_remove[num] -= 1
            
        while self.upper_half and self.to_remove[self.upper_half[0]] > 0:
            num = heapq.heappop(self.upper_half)
            self.to_remove[num] -= 1
        
        # Then rebalance heap sizes
        while len(self.lower_half) > len(self.upper_half) + 1:
            heapq.heappush(self.upper_half, -heapq.heappop(self.lower_half))
        while len(self.upper_half) > len(self.lower_half) + 1:
            heapq.heappush(self.lower_half, -heapq.heappop(self.upper_half))
            
    def get_statistics(self) -> dict:
        """
        Get current stream statistics.
        
        Returns:
            Dictionary containing median and percentiles
        """
        if not self.cache_valid:
            self._update_statistics()
        return self.percentile_cache
        
    def _update_statistics(self) -> None:
        """Update cached statistics."""
        self._rebalance_heaps()
        
        stats = {}
        # Calculate median
        if len(self.lower_half) > len(self.upper_half):
            stats['median'] = -self.lower_half[0]
        elif len(self.upper_half) > len(self.lower_half):
            stats['median'] = self.upper_half[0]
        else:
            stats['median'] = (-self.lower_half[0] + self.upper_half[0]) / 2
            
        # Calculate percentiles
        active_nums = sorted(self.window)  # Only needed for percentiles
        stats['75th_percentile'] = self._get_percentile(active_nums, 75)
        stats['90th_percentile'] = self._get_percentile(active_nums, 90)
        stats['95th_percentile'] = self._get_percentile(active_nums, 95)
        
        self.percentile_cache = stats
        self.cache_valid = True
        
    def _get_percentile(self, sorted_nums: List[float], 
                       percentile: int) -> float:
        """Calculate specified percentile from sorted numbers."""
        if not sorted_nums:
            return 0
        k = len(sorted_nums) * percentile // 100
        return sorted_nums[min(k, len(sorted_nums) - 1)]`,
  exercises: [
    {
      prompt: 'Implement a stream processor that finds the median of the last k elements in a continuous stream of integers.',
      initialCode: `class MedianStream:
    """
    Track median of last k elements in a stream.
    
    Args:
        k: Size of sliding window
    """
    def __init__(self, k: int):
        # Initialize your data structure here
        pass
        
    def add_number(self, num: int) -> float:
        # Add number and return current median
        pass`,
      solution: `class MedianStream:
    def __init__(self, k: int):
        self.k = k
        self.window = deque(maxlen=k)
        self.smaller = []  # max heap
        self.larger = []   # min heap
        self.to_remove = defaultdict(int)
        
    def add_number(self, num: int) -> float:
        # Handle sliding window
        if len(self.window) == self.k:
            old_num = self.window.popleft()
            self.to_remove[old_num] += 1
        self.window.append(num)
        
        # Add to appropriate heap
        if not self.larger or num > self.larger[0]:
            heapq.heappush(self.larger, num)
        else:
            heapq.heappush(self.smaller, -num)
            
        # Clean heaps and rebalance
        self._rebalance()
        
        # Return current median
        if len(self.smaller) > len(self.larger):
            return -self.smaller[0]
        elif len(self.larger) > len(self.smaller):
            return self.larger[0]
        return (-self.smaller[0] + self.larger[0]) / 2
        
    def _rebalance(self):
        # Remove old elements
        while self.smaller and self.to_remove[-self.smaller[0]]:
            num = -heapq.heappop(self.smaller)
            self.to_remove[num] -= 1
        while self.larger and self.to_remove[self.larger[0]]:
            num = heapq.heappop(self.larger)
            self.to_remove[num] -= 1
            
        # Rebalance heap sizes
        while len(self.smaller) > len(self.larger) + 1:
            heapq.heappush(self.larger, -heapq.heappop(self.smaller))
        while len(self.larger) > len(self.smaller) + 1:
            heapq.heappush(self.smaller, -heapq.heappop(self.larger))`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why do we use lazy deletion in stream processing with heaps instead of removing elements immediately?',
      options: [
        'To save memory',
        'Because immediate deletion is not possible in heaps',
        'To amortize the cost of removals and maintain efficiency',
        'To simplify the implementation',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Lazy deletion actually uses slightly more memory to track removals.',
        'Incorrect. Immediate deletion is possible but inefficient.',
        'Correct! Lazy deletion allows us to batch removals with rebalancing operations, maintaining better amortized performance.',
        'Incorrect. Lazy deletion actually makes the implementation more complex.',
      ],
      difficulty: Difficulty.Advanced,
    }
  ],
};

const schedulingProblemsData: LessonContent = {
  title: 'Mastering Task Scheduling with Priority Queues',
  content: `<p>
Imagine you're an air traffic controller managing multiple planes that need to land. Each plane has a preferred landing time and can only wait for a limited duration before needing to divert to another airport. This scenario perfectly illustrates the essence of scheduling problems - we need to efficiently manage multiple tasks with different priorities, deadlines, and constraints.
</p>

<h3><u>Understanding Scheduling Fundamentals</u></h3>
<p>
At their core, scheduling problems involve organizing tasks in a way that satisfies various constraints while optimizing certain objectives. Think of it like planning a complex dinner party where different dishes need different cooking times, some must be served hot, and your kitchen has limited space and equipment.
</p>

<p>
Every scheduling problem typically involves these key elements:
</p>

<p>
1. Tasks: Units of work that need to be completed
2. Resources: What's available to complete the tasks
3. Constraints: Rules and limitations we must follow
4. Objectives: What we're trying to optimize (time, cost, etc.)
</p>

<h3><u>Priority Queues in Scheduling</u></h3>
<p>
Priority queues (implemented using heaps) are particularly well-suited for scheduling because they efficiently maintain tasks ordered by priority. Let's visualize how this works:
</p>

<div class="visualization">
<svg viewBox="0 0 800 400">
  <!-- Task Queue -->
  <g transform="translate(50,20)">
    <text x="0" y="0" font-size="14" fill="black">Incoming Tasks</text>
    <!-- Task 1 -->
    <rect x="0" y="20" width="120" height="40" fill="#E3F2FD"/>
    <text x="10" y="40" font-size="12">Task: Debug
    Priority: High</text>
    <!-- Task 2 -->
    <rect x="0" y="70" width="120" height="40" fill="#E3F2FD"/>
    <text x="10" y="90" font-size="12">Task: Deploy
    Priority: Medium</text>
    <!-- Task 3 -->
    <rect x="0" y="120" width="120" height="40" fill="#E3F2FD"/>
    <text x="10" y="140" font-size="12">Task: Test
    Priority: Low</text>
  </g>

  <!-- Priority Queue -->
  <g transform="translate(300,20)">
    <text x="70" y="0" font-size="14" fill="black">Priority Queue</text>
    <circle cx="100" cy="40" r="20" fill="#1976D2"/>
    <circle cx="60" cy="90" r="20" fill="#1976D2"/>
    <circle cx="140" cy="90" r="20" fill="#1976D2"/>
    <text x="85" y="45" font-size="10" fill="white">Debug</text>
    <text x="45" y="95" font-size="10" fill="white">Deploy</text>
    <text x="130" y="95" font-size="10" fill="white">Test</text>
    <line x1="100" y1="60" x2="60" y2="70" stroke="black"/>
    <line x1="100" y1="60" x2="140" y2="70" stroke="black"/>
  </g>

  <!-- Processing Timeline -->
  <g transform="translate(550,20)">
    <text x="0" y="0" font-size="14" fill="black">Execution Timeline</text>
    <line x1="0" y1="50" x2="200" y2="50" stroke="#666" stroke-width="2"/>
    <circle cx="20" cy="50" r="5" fill="#4CAF50"/>
    <text x="10" y="70" font-size="10">Debug</text>
    <circle cx="80" cy="50" r="5" fill="#4CAF50"/>
    <text x="70" y="70" font-size="10">Deploy</text>
    <circle cx="140" cy="50" r="5" fill="#4CAF50"/>
    <text x="130" y="70" font-size="10">Test</text>
  </g>
</svg>
</div>

<h3><u>Common Scheduling Patterns</u></h3>
<p>
Let's explore some common patterns we encounter in scheduling problems:
</p>

<p>
1. <strong>Interval Scheduling:</strong> When tasks have specific start and end times, like room bookings or TV show recordings. We need to find a schedule that accommodates as many tasks as possible without overlap.
</p>

<p>
2. <strong>Task Prioritization:</strong> When tasks have different importance levels but flexible timing. Think of a hospital emergency room where patients are seen based on the severity of their condition rather than arrival time.
</p>

<p>
3. <strong>Resource Allocation:</strong> When multiple tasks compete for limited resources. Imagine a build server that can only compile one project at a time, so we need to decide the order of compilation jobs.
</p>

<p>
4. <strong>Deadline Scheduling:</strong> When tasks must complete by specific deadlines. Like a kitchen preparing multiple dishes that all need to be ready when dinner service begins.
</p>

<h3><u>Optimization Strategies</u></h3>
<p>
When tackling scheduling problems, consider these key strategies:
</p>

<p>
1. <strong>Earliest Deadline First:</strong> Prioritize tasks with the nearest deadlines. This works well when all tasks must complete before their deadlines.
</p>

<p>
2. <strong>Shortest Job First:</strong> Complete quick tasks first to minimize average waiting time. This is optimal for reducing mean completion time.
</p>

<p>
3. <strong>Priority-based:</strong> Use explicit priority values to determine task order. Essential when some tasks are more important than others.
</p>

<p>
4. <strong>Load Balancing:</strong> Distribute tasks across available resources to maximize throughput and minimize idle time.
</p>`,
  codeExample: `class Task:
    """
    Represents a task in our scheduling system.
    Encapsulates all relevant task information and comparison logic.
    """
    def __init__(self, id: str, priority: int, deadline: int, 
                 duration: int):
        self.id = id
        self.priority = priority
        self.deadline = deadline
        self.duration = duration
        self.start_time = None
        
    def __lt__(self, other):
        # First compare by priority (higher priority first)
        if self.priority != other.priority:
            return self.priority > other.priority
        # Then by deadline (earlier deadline first)
        return self.deadline < other.deadline

class Scheduler:
    """
    Advanced task scheduler that handles multiple scheduling policies
    and constraints.
    
    This implementation demonstrates how to use priority queues
    to manage complex scheduling scenarios efficiently.
    """
    def __init__(self):
        # Main priority queue for tasks
        self.task_queue = []
        # Track scheduled tasks
        self.scheduled_tasks = {}
        # Current time in our schedule
        self.current_time = 0
        
    def add_task(self, task: Task) -> None:
        """
        Add a new task to be scheduled.
        
        Args:
            task: Task object with priority and deadline
        """
        heapq.heappush(self.task_queue, task)
        
    def schedule_tasks(self) -> List[Task]:
        """
        Create a schedule for all tasks that respects deadlines
        and priorities.
        
        Returns:
            List of scheduled tasks with assigned start times
        """
        scheduled = []
        current_time = 0
        
        while self.task_queue:
            # Get highest priority task
            task = heapq.heappop(self.task_queue)
            
            # Check if we can schedule this task
            if current_time + task.duration <= task.deadline:
                task.start_time = current_time
                current_time += task.duration
                scheduled.append(task)
            else:
                # Try to find a slot by moving earlier tasks
                slot_found = self._find_slot(scheduled, task)
                if not slot_found:
                    print(f"Warning: Could not schedule task {task.id}")
        
        return scheduled
    
    def _find_slot(self, scheduled: List[Task], 
                   new_task: Task) -> bool:
        """
        Try to find a slot for a task by reorganizing existing schedule.
        This implements a more sophisticated scheduling algorithm that
        considers moving other tasks to accommodate high-priority tasks.
        
        Args:
            scheduled: Currently scheduled tasks
            new_task: Task we're trying to schedule
            
        Returns:
            bool: True if we found a slot, False otherwise
        """
        # Sort by start time for easier slot finding
        scheduled.sort(key=lambda x: x.start_time)
        
        # Look for gaps in current schedule
        current_time = 0
        for task in scheduled:
            gap = task.start_time - current_time
            if gap >= new_task.duration:
                # Found a suitable gap
                new_task.start_time = current_time
                scheduled.append(new_task)
                return True
            current_time = task.start_time + task.duration
        
        # Check if we can append at the end
        if current_time + new_task.duration <= new_task.deadline:
            new_task.start_time = current_time
            scheduled.append(new_task)
            return True
        
        return False

# Example usage
def schedule_example():
    scheduler = Scheduler()
    
    # Add some tasks
    tasks = [
        Task("Debug", 3, 100, 20),   # High priority
        Task("Deploy", 2, 150, 30),  # Medium priority
        Task("Test", 1, 200, 40)     # Low priority
    ]
    
    for task in tasks:
        scheduler.add_task(task)
    
    # Create schedule
    schedule = scheduler.schedule_tasks()
    
    # Print schedule
    print("Final Schedule:")
    for task in schedule:
        print(f"Task {task.id}: Start at {task.start_time}, "
              f"Duration: {task.duration}")`,
  exercises: [
    {
      prompt: 'Implement a scheduler that handles tasks with dependencies (some tasks must complete before others can start).',
      initialCode: `class Task:
    def __init__(self, id: str, duration: int, 
                 dependencies: List[str] = None):
        self.id = id
        self.duration = duration
        self.dependencies = dependencies or []

def schedule_with_dependencies(tasks: List[Task]) -> Dict[str, int]:
    """
    Create a schedule that respects task dependencies.
    
    Args:
        tasks: List of tasks with dependencies
    Returns:
        Dictionary mapping task IDs to start times
    """
    # Implement your solution here
    pass`,
      solution: `def schedule_with_dependencies(tasks: List[Task]) -> Dict[str, int]:
    """
    Create a schedule respecting dependencies using topological sort
    and priority queue for optimization.
    
    Time Complexity: O(V + E log V) where V is number of tasks
    and E is number of dependencies
    """
    # Build adjacency list and in-degree count
    graph = defaultdict(list)
    in_degree = defaultdict(int)
    for task in tasks:
        for dep in task.dependencies:
            graph[dep].append(task.id)
            in_degree[task.id] += 1
    
    # Track earliest possible start times
    start_times = {}
    
    # Priority queue of tasks ready to schedule
    # Store (-duration, task_id) for shorter tasks first
    ready = [(0, task.id) for task in tasks 
             if in_degree[task.id] == 0]
    heapq.heapify(ready)
    
    current_time = 0
    while ready:
        duration, task_id = heapq.heappop(ready)
        duration = -duration  # Convert back to positive
        
        # Schedule this task
        start_times[task_id] = current_time
        current_time += duration
        
        # Update dependencies
        for next_task in graph[task_id]:
            in_degree[next_task] -= 1
            if in_degree[next_task] == 0:
                # Task is ready to be scheduled
                task_duration = next(t.duration for t in tasks 
                                  if t.id == next_task)
                heapq.heappush(ready, (-task_duration, next_task))
    
    return start_times`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'When scheduling tasks with deadlines, why might Earliest Deadline First not always be the optimal strategy?',
      options: [
        'Because it uses too much memory',
        'Because it doesn\'t consider task durations',
        'Because it doesn\'t handle dependencies',
        'Because it\'s too slow to implement',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Memory usage is not the primary concern with this strategy.',
        'Correct! EDF only looks at deadlines, ignoring task durations which could lead to situations where longer tasks block multiple shorter ones that could have completed instead.',
        'Incorrect. While true, this isn\'t the main reason EDF might be suboptimal even without dependencies.',
        'Incorrect. EDF can be implemented efficiently using a priority queue.',
      ],
      difficulty: Difficulty.Advanced,
    }
  ],
};

const kClosestPointsData: LessonContent = {
  title: 'Mastering K-Closest Points Problems Using Heaps',
  content: `<p>
Imagine you're a rideshare company trying to find the closest available drivers to a passenger's location. Or perhaps you're building a location-based service that needs to show nearby restaurants. These real-world scenarios illustrate the fundamental challenge of finding k-closest points – we need to efficiently find the nearest neighbors in a potentially large set of points.
</p>

<h3><u>Understanding the Problem</u></h3>
<p>
At its core, the k-closest points problem asks us to find the k points that are nearest to a given reference point (often the origin). Think of it like being in the center of a city and wanting to find the five closest coffee shops to your current location. The challenge is to do this efficiently, especially when there might be thousands of points to consider.
</p>

<p>
The distance between points is typically calculated using the Euclidean distance formula: sqrt((x₂-x₁)² + (y₂-y₁)²). However, since we're only comparing distances, we can often optimize by using squared distances and avoiding the square root calculation.
</p>

<div class="visualization">
<svg viewBox="0 0 800 400">
  <!-- Coordinate System -->
  <g transform="translate(50,200)">
    <!-- Axes -->
    <line x1="0" y1="-150" x2="0" y2="150" stroke="black"/>
    <line x1="-50" y1="0" x2="350" y2="0" stroke="black"/>
    
    <!-- Origin Point -->
    <circle cx="0" cy="0" r="5" fill="#E64A19"/>
    <text x="10" y="20" font-size="12">Origin</text>
    
    <!-- Sample Points -->
    <circle cx="50" cy="-30" r="3" fill="#1976D2"/>
    <circle cx="120" cy="80" r="3" fill="#1976D2"/>
    <circle cx="80" cy="-90" r="3" fill="#1976D2"/>
    <circle cx="180" cy="40" r="3" fill="#1976D2"/>
    <circle cx="30" cy="60" r="3" fill="#1976D2"/>
    
    <!-- Distance Visualization for Closest Points -->
    <line x1="0" y1="0" x2="50" y2="-30" stroke="#4CAF50" stroke-dasharray="4"/>
    <line x1="0" y1="0" x2="30" y2="60" stroke="#4CAF50" stroke-dasharray="4"/>
    <text x="60" y="-40" font-size="10">d₁ = 58.3</text>
    <text x="40" y="50" font-size="10">d₂ = 67.1</text>
  </g>

  <!-- Max Heap Representation -->
  <g transform="translate(500,100)">
    <text x="0" y="0" font-size="14" fill="black">Max Heap of K Closest</text>
    <circle cx="100" cy="40" r="20" fill="#1976D2"/>
    <circle cx="60" cy="90" r="20" fill="#1976D2"/>
    <circle cx="140" cy="90" r="20" fill="#1976D2"/>
    <text x="90" y="45" font-size="10" fill="white">67.1</text>
    <text x="50" y="95" font-size="10" fill="white">58.3</text>
    <text x="130" y="95" font-size="10" fill="white">65.2</text>
    <line x1="100" y1="60" x2="60" y2="70" stroke="black"/>
    <line x1="100" y1="60" x2="140" y2="70" stroke="black"/>
  </g>
</svg>
</div>

<h3><u>The Heap Solution</u></h3>
<p>
We can solve this problem efficiently using a max heap of size k. Think of this heap as maintaining a "top-k leaderboard" of the closest points we've seen so far. When we encounter a new point, we compare its distance with the largest distance in our heap (the root). If the new point is closer, we remove the furthest point and add the new one.
</p>

<h3><u>Key Optimization Strategies</u></h3>
<p>
When implementing k-closest points solutions, consider these optimizations:
</p>

<p>
1. <strong>Avoid Square Roots:</strong> Since we're only comparing distances, we can work with squared distances to avoid expensive square root calculations.
</p>

<p>
2. <strong>Early Pruning:</strong> If a point's distance is larger than our current kth closest distance, we can skip it immediately.
</p>

<p>
3. <strong>Space Efficiency:</strong> For very large datasets, we can process points in batches to limit memory usage.
</p>

<p>
4. <strong>Custom Distance Metrics:</strong> Sometimes we might need Manhattan distance or other metrics depending on the application.
</p>

<h3><u>Common Variations</u></h3>
<p>
The k-closest points pattern appears in many forms:
</p>

<p>
1. Finding nearest neighbors in recommendation systems
2. Locating nearby points of interest in mapping applications
3. Clustering data points in machine learning
4. Finding similar items based on feature vectors
</p>`,
  codeExample: `class Point:
    """
    Represents a 2D point with distance calculations.
    This implementation focuses on clarity and reusability.
    """
    def __init__(self, x: float, y: float):
        self.x = x
        self.y = y
        
    def squared_distance_from_origin(self) -> float:
        """
        Calculate squared distance from origin.
        Avoiding square root for efficiency.
        """
        return self.x * self.x + self.y * self.y
        
    def distance_from_origin(self) -> float:
        """
        Calculate actual distance from origin.
        Use only when actual distance is needed.
        """
        return math.sqrt(self.squared_distance_from_origin())
        
    def __repr__(self):
        return f"Point({self.x}, {self.y})"

class KClosestPointsFinder:
    """
    Finds k closest points to origin using max heap approach.
    
    This implementation demonstrates efficient handling of
    distance-based point calculations with optimizations.
    
    Time Complexity: O(n log k) where n is total points
    Space Complexity: O(k) for the heap
    """
    def __init__(self, k: int):
        self.k = k
        # Max heap storing (-distance, point) pairs
        self.heap = []
        
    def find_k_closest(self, points: List[Point]) -> List[Point]:
        """
        Find k points closest to origin.
        
        Uses a max heap to efficiently track k closest points
        while processing all points only once.
        
        Args:
            points: List of Point objects
        Returns:
            List of k closest points to origin
        """
        for point in points:
            dist = point.squared_distance_from_origin()
            
            if len(self.heap) < self.k:
                # Still building initial k points
                heapq.heappush(self.heap, (-dist, point))
            elif -dist > self.heap[0][0]:
                # Found a closer point, replace furthest
                heapq.heapreplace(self.heap, (-dist, point))
                
        # Extract points from heap, reversing to get ascending order
        return [point for _, point in sorted(self.heap, 
                                          key=lambda x: -x[0])]
                
    def add_point(self, point: Point) -> None:
        """
        Add a single point to our k-closest tracking.
        Useful for streaming scenarios.
        """
        dist = point.squared_distance_from_origin()
        
        if len(self.heap) < self.k:
            heapq.heappush(self.heap, (-dist, point))
        elif -dist > self.heap[0][0]:
            heapq.heapreplace(self.heap, (-dist, point))
            
    def get_current_closest(self) -> List[Point]:
        """Get current k closest points in sorted order."""
        return [point for _, point in sorted(self.heap, 
                                          key=lambda x: -x[0])]

# Example usage with detailed explanation
def demonstrate_k_closest():
    # Create some sample points
    points = [
        Point(1, 1),    # distance: √2
        Point(2, 2),    # distance: 2√2
        Point(3, 3),    # distance: 3√2
        Point(0, 1),    # distance: 1
        Point(-2, 2),   # distance: 2√2
    ]
    
    # Find 3 closest points
    finder = KClosestPointsFinder(k=3)
    closest = finder.find_k_closest(points)
    
    print("Points in order of distance from origin:")
    for point in closest:
        dist = point.distance_from_origin()
        print(f"{point}: distance = {dist:.2f}")`,
  exercises: [
    {
      prompt: 'Implement a function to find the k closest points to a given target point (not necessarily the origin).',
      initialCode: `def k_closest_to_target(points: List[Point], 
                            target: Point, k: int) -> List[Point]:
    """
    Find k closest points to a target point.
    
    Args:
        points: List of points to search
        target: Reference point for distance calculation
        k: Number of closest points to find
    Returns:
        List of k closest points to target
    """
    # Implement your solution here
    pass`,
      solution: `def k_closest_to_target(points: List[Point], 
                            target: Point, k: int) -> List[Point]:
    """
    Find k closest points to a target point using max heap.
    
    Time Complexity: O(n log k)
    Space Complexity: O(k)
    """
    def squared_distance(p1: Point, p2: Point) -> float:
        dx = p1.x - p2.x
        dy = p1.y - p2.y
        return dx * dx + dy * dy
    
    # Max heap of (-distance, point) pairs
    heap = []
    
    for point in points:
        dist = squared_distance(point, target)
        
        if len(heap) < k:
            heapq.heappush(heap, (-dist, point))
        elif -dist > heap[0][0]:
            heapq.heapreplace(heap, (-dist, point))
    
    # Return points sorted by distance
    return [point for _, point in sorted(heap, key=lambda x: -x[0])]`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'Why do we use a max heap of size k instead of a min heap when finding k-closest points?',
      options: [
        'Because max heaps are more efficient than min heaps',
        'To maintain only k closest points and easily remove furthest when needed',
        'Because distances are always positive numbers',
        'To sort the points in descending order',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. The efficiency of max and min heaps is the same.',
        'Correct! A max heap of size k lets us easily track the k closest points by removing the furthest point when we find a closer one.',
        'Incorrect. The sign of the values doesn\'t determine which type of heap to use.',
        'Incorrect. The heap type doesn\'t determine the final sorting order.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};

const slidingWindowHeapData: LessonContent = {
  title: 'Understanding Sliding Window Problems with Heaps',
  content: `<p>
Imagine you're analyzing a city's traffic patterns by looking through a moving car window. As you drive, your window of observation keeps shifting, and at each moment, you want to know the busiest intersection in your current view. This scenario perfectly captures the essence of combining sliding window and heap techniques – we need to efficiently maintain ordered information about a moving range of data.
</p>

<h3><u>Building Intuitive Understanding</u></h3>
<p>
Let's think about what makes these problems special. The sliding window pattern helps us focus on a specific range of data that moves over time, while the heap helps us efficiently maintain ordered information about that range. It's like having a "smart window" that not only shows us what's currently visible but also keeps track of important patterns within that view.
</p>

<div class="visualization">
<svg viewBox="0 0 800 400">
  <!-- Data Stream -->
  <g transform="translate(50,20)">
    <text x="0" y="0" font-size="14" fill="black">Data Stream</text>
    <!-- Numbers -->
    <rect x="0" y="20" width="40" height="40" fill="#E3F2FD"/>
    <rect x="50" y="20" width="40" height="40" fill="#E3F2FD"/>
    <rect x="100" y="20" width="40" height="40" fill="#E3F2FD"/>
    <rect x="150" y="20" width="40" height="40" fill="#E3F2FD"/>
    <rect x="200" y="20" width="40" height="40" fill="#E3F2FD"/>
    <rect x="250" y="20" width="40" height="40" fill="#E3F2FD"/>
    <text x="15" y="45" font-size="12">1</text>
    <text x="65" y="45" font-size="12">3</text>
    <text x="115" y="45" font-size="12">-1</text>
    <text x="165" y="45" font-size="12">2</text>
    <text x="215" y="45" font-size="12">4</text>
    <text x="265" y="45" font-size="12">5</text>
    
    <!-- Current Window -->
    <rect x="50" y="15" width="120" height="50" 
          fill="none" stroke="#4CAF50" stroke-width="2"/>
    <text x="80" y="85" font-size="12" fill="#4CAF50">Current Window</text>
  </g>

  <!-- Heap State -->
  <g transform="translate(400,20)">
    <text x="70" y="0" font-size="14" fill="black">Max Heap for Window</text>
    <circle cx="100" cy="40" r="20" fill="#1976D2"/>
    <circle cx="60" cy="90" r="20" fill="#1976D2"/>
    <circle cx="140" cy="90" r="20" fill="#1976D2"/>
    <text x="95" y="45" font-size="12" fill="white">3</text>
    <text x="55" y="95" font-size="12" fill="white">-1</text>
    <text x="135" y="95" font-size="12" fill="white">2</text>
    <line x1="100" y1="60" x2="60" y2="70" stroke="black"/>
    <line x1="100" y1="60" x2="140" y2="70" stroke="black"/>
  </g>

  <!-- Results -->
  <g transform="translate(600,20)">
    <text x="0" y="0" font-size="14" fill="black">Window Maximum</text>
    <rect x="0" y="20" width="150" height="30" fill="#E8F5E9"/>
    <text x="10" y="40" font-size="12">Current Max: 3</text>
  </g>
</svg>
</div>

<h3><u>Core Concepts Working Together</u></h3>
<p>
When we combine sliding window and heap techniques, we're dealing with two key operations happening simultaneously:
</p>

<p>
1. <strong>Window Movement:</strong> As our window slides, we need to:
   - Add new elements entering the window
   - Remove elements leaving the window
   - Maintain the window size constraint
</p>

<p>
2. <strong>Heap Maintenance:</strong> For the current window, we need to:
   - Keep track of ordered information (like maximum or minimum)
   - Handle both insertions and deletions efficiently
   - Ensure the heap reflects only the current window
</p>

<h3><u>The Lazy Removal Pattern</u></h3>
<p>
One of the most important techniques when combining these patterns is "lazy removal." Instead of immediately removing elements that leave our window (which would be expensive in a heap), we:
</p>

<p>
1. Mark elements for removal when they leave the window
2. Only actually remove them when they reach the top of our heap
3. Keep track of valid elements using a hash map or similar structure
</p>

<p>
This approach significantly improves efficiency while maintaining correctness. It's like having a guest list at an event where we mark people as departed but only update our count when we need to know the exact number of current attendees.
</p>

<h3><u>Common Applications</u></h3>
<p>
This combined pattern appears in many practical scenarios:
</p>

<p>
1. Finding the median in a sliding window
2. Tracking maximum/minimum values in a moving range
3. Monitoring system metrics with time windows
4. Processing streaming data with ordered statistics
</p>`,
  codeExample: `class SlidingWindowMedian:
    """
    Find the median of all sliding windows in an array.
    
    This implementation demonstrates the effective combination
    of sliding window and heap techniques with lazy removal.
    
    Time Complexity: O(n log k) where k is window size
    Space Complexity: O(k)
    """
    def __init__(self):
        # Max heap for smaller half of numbers
        self.small = []  # negated for max heap behavior
        # Min heap for larger half of numbers
        self.large = []
        # Track numbers marked for removal
        self.to_remove = defaultdict(int)
        
    def find_sliding_medians(self, nums: List[int], k: int) -> List[float]:
        """
        Find medians of all possible windows of size k.
        
        Uses lazy removal pattern for efficient heap maintenance.
        
        Args:
            nums: Input array
            k: Window size
        Returns:
            List of medians for each window
        """
        result = []
        
        # Process first window
        for i in range(k):
            self._add_num(nums[i])
            
        # Get median for first window
        result.append(self._get_median())
        
        # Slide window
        for i in range(k, len(nums)):
            # Mark number leaving window for removal
            self.to_remove[nums[i - k]] += 1
            
            # Add new number
            self._add_num(nums[i])
            
            # Clean heaps if needed
            self._cleanup()
            
            # Calculate median
            result.append(self._get_median())
            
        return result
        
    def _add_num(self, num: int) -> None:
        """Add a number to appropriate heap."""
        if not self.large or num > self.large[0]:
            heapq.heappush(self.large, num)
        else:
            heapq.heappush(self.small, -num)
        
        # Rebalance if needed
        self._rebalance()
        
    def _rebalance(self) -> None:
        """Ensure heaps remain balanced."""
        # Ensure size difference is at most 1
        while len(self.small) > len(self.large) + 1:
            heapq.heappush(self.large, -heapq.heappop(self.small))
        while len(self.large) > len(self.small) + 1:
            heapq.heappush(self.small, -heapq.heappop(self.large))
            
    def _cleanup(self) -> None:
        """Remove marked elements that reach heap tops."""
        while self.small and self.to_remove[-self.small[0]] > 0:
            self.to_remove[-self.small[0]] -= 1
            heapq.heappop(self.small)
            
        while self.large and self.to_remove[self.large[0]] > 0:
            self.to_remove[self.large[0]] -= 1
            heapq.heappop(self.large)
            
        # Rebalance after cleanup
        self._rebalance()
        
    def _get_median(self) -> float:
        """Calculate current median from heap tops."""
        if len(self.small) > len(self.large):
            return -self.small[0]
        elif len(self.large) > len(self.small):
            return self.large[0]
        return (-self.small[0] + self.large[0]) / 2.0

# Example usage showing step-by-step window movement
def demonstrate_sliding_median():
    """
    Demonstrate how sliding window median finder works
    with detailed step-by-step explanation.
    """
    finder = SlidingWindowMedian()
    nums = [1, 3, -1, 2, 4, 5]
    k = 3
    
    medians = finder.find_sliding_medians(nums, k)
    
    print("Input array:", nums)
    print("Window size:", k)
    print("\\nWindow movements and medians:")
    
    for i in range(len(medians)):
        window = nums[i:i+k]
        print(f"Window {i+1}: {window}")
        print(f"Median: {medians[i]}\\n")`,
  exercises: [
    {
      prompt: 'Implement a function to find the maximum sum of any subarray of size k, while also maintaining the minimum element seen in each window.',
      initialCode: `def max_sum_with_min(nums: List[int], k: int) -> List[tuple]:
    """
    Find maximum sum and minimum element for each window.
    
    Args:
        nums: Input array
        k: Window size
    Returns:
        List of (sum, min) tuples for each window
    """
    # Implement your solution here
    pass`,
      solution: `def max_sum_with_min(nums: List[int], k: int) -> List[tuple]:
    """
    Find maximum sum and minimum element for each window
    using sliding window with a min heap.
    
    Time Complexity: O(n log k)
    Space Complexity: O(k)
    """
    if not nums or k <= 0:
        return []
        
    result = []
    current_sum = 0
    window_mins = []  # min heap for current window
    to_remove = defaultdict(int)
    
    # Process first window
    for i in range(k):
        current_sum += nums[i]
        heapq.heappush(window_mins, nums[i])
        
    result.append((current_sum, window_mins[0]))
    
    # Slide window
    for i in range(k, len(nums)):
        # Update sum
        current_sum += nums[i] - nums[i - k]
        
        # Mark element leaving window
        to_remove[nums[i - k]] += 1
        
        # Add new element to min heap
        heapq.heappush(window_mins, nums[i])
        
        # Clean up heap top if needed
        while window_mins and to_remove[window_mins[0]] > 0:
            to_remove[window_mins[0]] -= 1
            heapq.heappop(window_mins)
            
        result.append((current_sum, window_mins[0]))
        
    return result`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why do we use lazy removal when combining sliding window and heap techniques?',
      options: [
        'To save memory by not creating new data structures',
        'Because immediate removal from a heap is impossible',
        'To avoid the O(k) cost of removing from middle of heap',
        'To maintain the sliding window size constraint',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Lazy removal actually requires additional memory to track removals.',
        'Incorrect. Immediate removal is possible but inefficient.',
        'Correct! Removing from the middle of a heap would require rebuilding the heap structure. Lazy removal defers this cost until necessary.',
        'Incorrect. The window size constraint is maintained regardless of removal strategy.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};

const multipleHeapsData: LessonContent = {
  title: 'Mastering Multiple Heaps: Advanced Problem-Solving Strategies',
  content: `<p>
Imagine you're managing a busy restaurant with both dine-in and takeout orders. For dine-in, you prioritize parties that have waited longest, but for takeout, you prioritize orders that can be prepared most quickly. You need two different ordering systems working together – this is exactly the kind of scenario where multiple heaps shine. Each heap maintains its own ordering property, and together they help us manage complex situations that a single heap couldn't handle effectively.
</p>

<h3><u>Understanding the Need for Multiple Heaps</u></h3>
<p>
Sometimes we need to maintain multiple ordering properties simultaneously. Think of it like sorting a deck of cards – if you want to find both the highest-value card of each suit and the highest card overall, you might want to maintain separate sorted piles by suit alongside a main sorted pile. Multiple heaps let us maintain different "views" of our data, each optimized for different queries.
</p>

<div class="visualization">
<svg viewBox="0 0 800 400">
  <!-- Job Scheduling Example -->
  <g transform="translate(50,20)">
    <text x="0" y="0" font-size="14" fill="black">Task Scheduling System</text>
    
    <!-- Priority Heap -->
    <g transform="translate(0,40)">
      <text x="0" y="0" font-size="12" fill="#666">Priority Queue</text>
      <circle cx="50" cy="30" r="20" fill="#E64A19"/>
      <circle cx="30" cy="70" r="20" fill="#E64A19"/>
      <circle cx="70" cy="70" r="20" fill="#E64A19"/>
      <text x="45" y="35" font-size="10" fill="white">P:High</text>
      <text x="25" y="75" font-size="10" fill="white">P:Med</text>
      <text x="65" y="75" font-size="10" fill="white">P:Low</text>
      <line x1="50" y1="50" x2="30" y2="50" stroke="black"/>
      <line x1="50" y1="50" x2="70" y2="50" stroke="black"/>
    </g>
    
    <!-- Time Heap -->
    <g transform="translate(150,40)">
      <text x="0" y="0" font-size="12" fill="#666">Time Queue</text>
      <circle cx="50" cy="30" r="20" fill="#1976D2"/>
      <circle cx="30" cy="70" r="20" fill="#1976D2"/>
      <circle cx="70" cy="70" r="20" fill="#1976D2"/>
      <text x="45" y="35" font-size="10" fill="white">T:5min</text>
      <text x="25" y="75" font-size="10" fill="white">T:8min</text>
      <text x="65" y="75" font-size="10" fill="white">T:12min</text>
      <line x1="50" y1="50" x2="30" y2="50" stroke="black"/>
      <line x1="50" y1="50" x2="70" y2="50" stroke="black"/>
    </g>
  </g>

  <!-- Scheduling Decision Process -->
  <g transform="translate(400,20)">
    <text x="0" y="0" font-size="14" fill="black">Decision Making</text>
    <rect x="0" y="30" width="300" height="80" fill="#E3F2FD" rx="5"/>
    <text x="10" y="50" font-size="12">1. Check highest priority task</text>
    <text x="10" y="70" font-size="12">2. Compare with shortest time task</text>
    <text x="10" y="90" font-size="12">3. Apply scheduling policy</text>
  </g>
</svg>
</div>

<h3><u>Key Design Principles</u></h3>
<p>
When working with multiple heaps, we need to consider several important principles that guide their effective use:
</p>

<p>
First, we must ensure data consistency across heaps. Think of it like maintaining multiple indices in a database – when we update information in one place, we need to reflect that change everywhere it appears. This often involves creating wrapper classes or using identifiers that let us track elements across different heaps.
</p>

<p>
Second, we need to carefully consider how the heaps will interact. Will they operate independently, or will operations on one heap trigger updates in others? Like our restaurant example, sometimes we need to check both the priority queue and the time-based queue before making a decision.
</p>

<p>
Third, we must design our data structures to support efficient updates. This might mean maintaining auxiliary data structures like hash maps to help us locate elements quickly when we need to update or remove them from multiple heaps.
</p>

<h3><u>Common Applications</u></h3>
<p>
Multiple heap strategies are particularly useful in several scenarios:
</p>

<p>
1. <strong>Advanced Scheduling Systems:</strong> When tasks have multiple priority factors that can't be combined into a single score.
</p>

<p>
2. <strong>Resource Management:</strong> When you need to track both resource availability and allocation priorities simultaneously.
</p>

<p>
3. <strong>Trading Systems:</strong> Where you might need to track both price-ordered and time-ordered queues of orders.
</p>

<p>
4. <strong>Media Streaming:</strong> Where you might need to balance both bandwidth usage and content priority.
</p>

<h3><u>Performance Considerations</u></h3>
<p>
While multiple heaps give us more flexibility, they also introduce additional complexity and overhead. We need to carefully consider:
</p>

<p>
1. Memory usage increases with each additional heap
2. Update operations become more complex as we need to maintain consistency
3. The trade-off between query speed and maintenance overhead
</p>`,
  codeExample: `class AdvancedScheduler:
    """
    Advanced task scheduler using multiple heaps for complex prioritization.
    
    This implementation demonstrates how to effectively manage multiple
    heaps while maintaining consistency and providing efficient operations.
    
    Time Complexity:
        - add_task: O(log n)
        - get_next_task: O(log n)
        - update_task: O(log n)
    Space Complexity: O(n) for each heap
    """
    def __init__(self):
        # Heap ordered by priority (max heap)
        self.priority_heap = []
        # Heap ordered by execution time (min heap)
        self.time_heap = []
        # Map task_id to task for quick lookups
        self.task_map = {}
        # Track deleted tasks
        self.removed_tasks = set()
        
    def add_task(self, task_id: str, priority: int, 
                 execution_time: int) -> None:
        """
        Add a new task to the scheduling system.
        Maintains both priority-based and time-based ordering.
        """
        task = {
            'id': task_id,
            'priority': priority,
            'execution_time': execution_time
        }
        
        # Add to task map
        self.task_map[task_id] = task
        
        # Add to priority heap (negative for max heap behavior)
        heapq.heappush(self.priority_heap, 
                      (-priority, task_id))
        
        # Add to time heap
        heapq.heappush(self.time_heap, 
                      (execution_time, task_id))
    
    def get_next_task(self, 
                      priority_weight: float = 0.7) -> dict:
        """
        Get next task based on weighted consideration of
        both priority and execution time.
        
        Args:
            priority_weight: Weight given to priority vs time
                           (0.7 means 70% priority, 30% time)
        """
        # Clean heaps of removed tasks
        self._cleanup_heaps()
        
        if not self.priority_heap or not self.time_heap:
            return None
            
        # Get top candidates from each heap
        priority_candidate = self.task_map[self.priority_heap[0][1]]
        time_candidate = self.task_map[self.time_heap[0][1]]
        
        # Calculate weighted scores
        priority_score = (-self.priority_heap[0][0] * 
                         priority_weight)
        time_score = (1 / (self.time_heap[0][0] + 1) * 
                     (1 - priority_weight))
        
        # Choose task with better weighted score
        if priority_score >= time_score:
            return self._extract_task(priority_candidate['id'])
        return self._extract_task(time_candidate['id'])
    
    def update_task(self, task_id: str, 
                    new_priority: int = None,
                    new_time: int = None) -> None:
        """
        Update task details, maintaining heap properties.
        """
        if task_id not in self.task_map:
            return
            
        # Mark current task for removal
        self.removed_tasks.add(task_id)
        old_task = self.task_map[task_id]
        
        # Create updated task
        new_task = {
            'id': task_id,
            'priority': (new_priority if new_priority is not None 
                        else old_task['priority']),
            'execution_time': (new_time if new_time is not None 
                             else old_task['execution_time'])
        }
        
        # Add updated task
        self.task_map[task_id] = new_task
        heapq.heappush(self.priority_heap, 
                      (-new_task['priority'], task_id))
        heapq.heappush(self.time_heap, 
                      (new_task['execution_time'], task_id))
    
    def _cleanup_heaps(self) -> None:
        """
        Remove marked tasks from heap tops.
        Uses lazy deletion for efficiency.
        """
        while (self.priority_heap and 
               self.priority_heap[0][1] in self.removed_tasks):
            heapq.heappop(self.priority_heap)
            
        while (self.time_heap and 
               self.time_heap[0][1] in self.removed_tasks):
            heapq.heappop(self.time_heap)
    
    def _extract_task(self, task_id: str) -> dict:
        """
        Remove and return a task from the system.
        """
        task = self.task_map.pop(task_id)
        self.removed_tasks.add(task_id)
        return task`,
  exercises: [
    {
      prompt: 'Implement a stock trading system that maintains both price-ordered and time-ordered queues for buy orders.',
      initialCode: `class TradingSystem:
    """
    Trading system with multiple order queues.
    Should support adding orders and matching best prices.
    """
    def __init__(self):
        # Initialize your data structures here
        pass
        
    def add_buy_order(self, order_id: str, price: float, 
                      timestamp: int) -> None:
        # Add order to appropriate queues
        pass
        
    def get_best_orders(self, count: int) -> List[dict]:
        # Get top orders considering both price and time
        pass`,
      solution: `class TradingSystem:
    def __init__(self):
        # Price-ordered queue (max heap)
        self.price_queue = []
        # Time-ordered queue (min heap)
        self.time_queue = []
        # Map for quick order lookups
        self.orders = {}
        # Track removed orders
        self.removed = set()
        
    def add_buy_order(self, order_id: str, price: float, 
                      timestamp: int) -> None:
        order = {
            'id': order_id,
            'price': price,
            'timestamp': timestamp
        }
        
        self.orders[order_id] = order
        # Negative price for max heap behavior
        heapq.heappush(self.price_queue, 
                      (-price, timestamp, order_id))
        heapq.heappush(self.time_queue, 
                      (timestamp, -price, order_id))
        
    def get_best_orders(self, count: int) -> List[dict]:
        result = []
        seen = set()
        
        # Clean up removed orders
        self._cleanup_queues()
        
        # Try to get orders alternating between price and time
        while len(result) < count and (self.price_queue or 
                                     self.time_queue):
            # Try price-based order
            if self.price_queue:
                price, time, order_id = self.price_queue[0]
                if order_id not in seen:
                    result.append(self.orders[order_id])
                    seen.add(order_id)
                    
            # Try time-based order
            if self.time_queue:
                time, price, order_id = self.time_queue[0]
                if order_id not in seen:
                    result.append(self.orders[order_id])
                    seen.add(order_id)
                    
            self._cleanup_queues()
            
        return result
        
    def _cleanup_queues(self):
        while (self.price_queue and 
               self.price_queue[0][2] in self.removed):
            heapq.heappop(self.price_queue)
        while (self.time_queue and 
               self.time_queue[0][2] in self.removed):
            heapq.heappop(self.time_queue)`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'When implementing a system with multiple heaps, why is lazy deletion often preferred over immediate deletion?',
      options: [
        'Because it uses less memory',
        'To avoid updating multiple heaps simultaneously',
        'Because deletion is not possible in heaps',
        'To ensure data consistency across heaps',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Lazy deletion actually requires additional memory to track deleted items.',
        'Correct! Lazy deletion allows us to avoid the complexity and performance cost of updating multiple heaps at once, instead handling deletions when elements naturally surface to the top.',
        'Incorrect. Deletion is possible in heaps, though it can be expensive.',
        'Incorrect. Data consistency is maintained regardless of deletion strategy.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};

const heapWithHashMapData: LessonContent = {
  title: 'Mastering Heap with HashMap: Fast Access and Updates',
  content: `<p>
Imagine you're managing a hospital emergency room where patients have constantly changing priority levels based on their condition. You need to quickly find and update a specific patient's priority while always knowing who needs attention most urgently. This scenario perfectly illustrates why we might want to combine a heap's ability to maintain order with a hash map's ability to provide instant access to specific elements.
</p>

<h3><u>Understanding the Need</u></h3>
<p>
While heaps excel at maintaining ordered data and quickly giving us the highest or lowest priority element, they have a significant limitation: we can't quickly access or update elements in the middle of the heap. It's like having a stack of sorted papers where you can easily grab the top one, but finding and updating a specific page in the middle requires going through the entire stack.
</p>

<div class="visualization">
<svg viewBox="0 0 800 400">
  <!-- Data Structure Visualization -->
  <g transform="translate(50,20)">
    <text x="0" y="0" font-size="14" fill="black">Combined Structure Overview</text>
    
    <!-- Heap Side -->
    <g transform="translate(0,40)">
      <text x="0" y="0" font-size="12" fill="#666">Priority Heap</text>
      <circle cx="100" cy="40" r="20" fill="#1976D2"/>
      <circle cx="60" cy="90" r="20" fill="#1976D2"/>
      <circle cx="140" cy="90" r="20" fill="#1976D2"/>
      <text x="85" y="45" font-size="10" fill="white">P1:High</text>
      <text x="45" y="95" font-size="10" fill="white">P2:Med</text>
      <text x="125" y="95" font-size="10" fill="white">P3:Low</text>
      <line x1="100" y1="60" x2="60" y2="70" stroke="black"/>
      <line x1="100" y1="60" x2="140" y2="70" stroke="black"/>
    </g>
    
    <!-- HashMap Side -->
    <g transform="translate(300,40)">
      <text x="0" y="0" font-size="12" fill="#666">HashMap</text>
      <rect x="0" y="20" width="200" height="100" fill="#E3F2FD" rx="5"/>
      <text x="10" y="40" font-size="10">"P1" → Index: 0</text>
      <text x="10" y="60" font-size="10">"P2" → Index: 1</text>
      <text x="10" y="80" font-size="10">"P3" → Index: 2</text>
    </g>
    
    <!-- Connecting Lines -->
    <g transform="translate(160,80)">
      <path d="M0,0 C50,0 50,0 100,0" 
            stroke="#666" fill="none" 
            stroke-dasharray="5,5"/>
      <text x="30" y="-10" font-size="10">Quick Access</text>
    </g>
  </g>

  <!-- Operations Example -->
  <g transform="translate(50,200)">
    <text x="0" y="0" font-size="14" fill="black">Update Operation Flow</text>
    <rect x="0" y="20" width="500" height="80" fill="#FFF3E0" rx="5"/>
    <text x="10" y="40" font-size="12">1. Find element index in HashMap: O(1)</text>
    <text x="10" y="60" font-size="12">2. Update element in Heap: O(log n)</text>
    <text x="10" y="80" font-size="12">3. Update HashMap if position changes: O(1)</text>
  </g>
</svg>
</div>

<h3><u>Key Benefits of the Combination</u></h3>
<p>
When we combine a heap with a hash map, we get several powerful capabilities:
</p>

<p>
1. <strong>Instant Access:</strong> We can find any element's position in O(1) time using the hash map, instead of having to search through the heap.
</p>

<p>
2. <strong>Efficient Updates:</strong> Once we locate an element, we can update it and restore the heap property, all in O(log n) time.
</p>

<p>
3. <strong>Position Tracking:</strong> As elements move within the heap during operations, we can keep track of their new positions in the hash map.
</p>

<h3><u>Implementation Considerations</u></h3>
<p>
When implementing this combined structure, we need to carefully consider several aspects:
</p>

<p>
1. <strong>Element Identity:</strong> Each element needs a unique identifier that the hash map can use as a key. This might be a patient ID, transaction number, or any other unique identifier.
</p>

<p>
2. <strong>Position Updates:</strong> Whenever elements swap positions in the heap (during bubble-up or sink-down operations), we need to update their positions in the hash map.
</p>

<p>
3. <strong>Memory Trade-off:</strong> We're using additional space for the hash map to gain faster access times. This is a classic space-time trade-off.
</p>

<h3><u>Common Applications</u></h3>
<p>
This pattern is particularly useful in several scenarios:
</p>

<p>
1. <strong>Priority Queues with Updates:</strong> When elements' priorities can change while they're waiting in the queue.
</p>

<p>
2. <strong>Scheduling Systems:</strong> Where tasks need to be both quickly found and reprioritized.
</p>

<p>
3. <strong>Game Development:</strong> Managing entities that need both ordering and quick access.
</p>

<p>
4. <strong>System Resource Management:</strong> Tracking and updating process priorities in an operating system.
</p>`,
  codeExample: `class IndexedPriorityQueue:
    """
    Priority Queue with O(1) lookup and O(log n) updates.
    
    This implementation combines a binary heap with a hash map
    to provide efficient access to any element while maintaining
    heap ordering.
    
    Time Complexities:
    - Insert: O(log n)
    - Find: O(1)
    - Update Priority: O(log n)
    - Get Highest Priority: O(1)
    """
    def __init__(self):
        # Heap stores (priority, id) tuples
        self.heap = []
        # Maps element id to its position in heap
        self.id_to_pos = {}
        # Maps element id to its current priority
        self.id_to_priority = {}
        
    def add_element(self, element_id: str, priority: int) -> None:
        """
        Add new element with given priority.
        
        Args:
            element_id: Unique identifier for element
            priority: Initial priority value
        """
        if element_id in self.id_to_pos:
            raise ValueError("Element already exists")
            
        # Add to heap
        pos = len(self.heap)
        self.heap.append((-priority, element_id))  # Negative for max heap
        
        # Update mappings
        self.id_to_pos[element_id] = pos
        self.id_to_priority[element_id] = priority
        
        # Restore heap property
        self._bubble_up(pos)
        
    def update_priority(self, element_id: str, 
                       new_priority: int) -> None:
        """
        Update priority of existing element.
        
        Args:
            element_id: Element to update
            new_priority: New priority value
        """
        if element_id not in self.id_to_pos:
            raise ValueError("Element not found")
            
        pos = self.id_to_pos[element_id]
        old_priority = self.id_to_priority[element_id]
        
        # Update heap and mapping
        self.heap[pos] = (-new_priority, element_id)
        self.id_to_priority[element_id] = new_priority
        
        # Restore heap property
        if new_priority > old_priority:
            self._bubble_up(pos)
        else:
            self._sink_down(pos)
            
    def get_highest_priority(self) -> tuple:
        """
        Get element with highest priority.
        
        Returns:
            Tuple of (element_id, priority)
        """
        if not self.heap:
            return None
            
        priority, element_id = self.heap[0]
        return (element_id, -priority)
        
    def remove_element(self, element_id: str) -> None:
        """
        Remove element from queue.
        
        Args:
            element_id: Element to remove
        """
        if element_id not in self.id_to_pos:
            raise ValueError("Element not found")
            
        pos = self.id_to_pos[element_id]
        
        # Replace with last element
        last_pos = len(self.heap) - 1
        if pos != last_pos:
            self._swap_positions(pos, last_pos)
            self.heap.pop()
            
            # Restore heap property
            self._bubble_up(pos)
            self._sink_down(pos)
        else:
            self.heap.pop()
            
        # Clean up mappings
        del self.id_to_pos[element_id]
        del self.id_to_priority[element_id]
        
    def _bubble_up(self, pos: int) -> None:
        """Restore heap property by moving element up."""
        while pos > 0:
            parent = (pos - 1) // 2
            if self.heap[parent] >= self.heap[pos]:
                break
            self._swap_positions(parent, pos)
            pos = parent
            
    def _sink_down(self, pos: int) -> None:
        """Restore heap property by moving element down."""
        size = len(self.heap)
        while True:
            largest = pos
            left = 2 * pos + 1
            right = 2 * pos + 2
            
            if left < size and self.heap[left] > self.heap[largest]:
                largest = left
            if right < size and self.heap[right] > self.heap[largest]:
                largest = right
                
            if largest == pos:
                break
                
            self._swap_positions(pos, largest)
            pos = largest
            
    def _swap_positions(self, pos1: int, pos2: int) -> None:
        """
        Swap elements and update position mapping.
        
        Args:
            pos1, pos2: Positions to swap
        """
        # Update heap
        self.heap[pos1], self.heap[pos2] = \
            self.heap[pos2], self.heap[pos1]
            
        # Update position mapping
        id1 = self.heap[pos1][1]
        id2 = self.heap[pos2][1]
        self.id_to_pos[id1] = pos1
        self.id_to_pos[id2] = pos2`,
  exercises: [
    {
      prompt: 'Implement a cache system that maintains both access frequency and recency using a combination of heap and hash map.',
      initialCode: `class FrequencyCache:
    """
    Cache that considers both frequency and recency.
    Should support efficient access and eviction.
    """
    def __init__(self, capacity: int):
        # Initialize your data structures here
        pass
        
    def access(self, key: str) -> None:
        # Record an access to the given key
        pass
        
    def evict(self) -> str:
        # Remove and return least valuable entry
        pass`,
      solution: `class FrequencyCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        # Heap stores (frequency, timestamp, key)
        self.heap = []
        # Maps key to heap position
        self.key_to_pos = {}
        # Maps key to frequency
        self.frequencies = {}
        self.timestamp = 0
        
    def access(self, key: str) -> None:
        self.timestamp += 1
        
        if key in self.key_to_pos:
            # Update existing entry
            pos = self.key_to_pos[key]
            self.frequencies[key] += 1
            freq = self.frequencies[key]
            
            # Update heap entry
            self.heap[pos] = (-freq, -self.timestamp, key)
            self._sink_down(pos)
        else:
            # Add new entry
            if len(self.heap) >= self.capacity:
                self.evict()
                
            # Initialize frequency
            self.frequencies[key] = 1
            
            # Add to heap
            pos = len(self.heap)
            self.heap.append((-1, -self.timestamp, key))
            self.key_to_pos[key] = pos
            self._bubble_up(pos)
            
    def evict(self) -> str:
        if not self.heap:
            return None
            
        # Get least frequently used
        freq, timestamp, key = self.heap[0]
        
        # Remove from all structures
        self._remove_key(key)
        return key
        
    def _remove_key(self, key: str) -> None:
        pos = self.key_to_pos[key]
        last_pos = len(self.heap) - 1
        
        if pos != last_pos:
            # Swap with last element
            self.heap[pos] = self.heap[last_pos]
            self.key_to_pos[self.heap[pos][2]] = pos
            
        # Remove last element
        self.heap.pop()
        del self.key_to_pos[key]
        del self.frequencies[key]
        
        if pos != last_pos:
            self._sink_down(pos)
            
    def _bubble_up(self, pos: int) -> None:
        entry = self.heap[pos]
        while pos > 0:
            parent = (pos - 1) // 2
            if self.heap[parent] <= entry:
                break
            self.heap[pos] = self.heap[parent]
            self.key_to_pos[self.heap[parent][2]] = pos
            pos = parent
        self.heap[pos] = entry
        self.key_to_pos[entry[2]] = pos
        
    def _sink_down(self, pos: int) -> None:
        entry = self.heap[pos]
        size = len(self.heap)
        
        while True:
            smallest = pos
            left = 2 * pos + 1
            right = 2 * pos + 2
            
            if left < size and self.heap[left] < self.heap[smallest]:
                smallest = left
            if right < size and self.heap[right] < self.heap[smallest]:
                smallest = right
                
            if smallest == pos:
                break
                
            self.heap[pos] = self.heap[smallest]
            self.key_to_pos[self.heap[smallest][2]] = pos
            pos = smallest
            
        self.heap[pos] = entry
        self.key_to_pos[entry[2]] = pos`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why might we need both a position map (id_to_pos) and a priority map (id_to_priority) in an indexed priority queue?',
      options: [
        'To save memory by duplicating data',
        'To avoid calculating priorities repeatedly',
        'The position map enables O(1) lookup while the priority map enables efficient priority comparisons',
        'To handle collisions in the hash map',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Having two maps actually uses more memory, not less.',
        'Incorrect. While this is a minor benefit, it\'s not the main reason for having both maps.',
        'Correct! The position map lets us quickly find elements for updates, while the priority map helps us make quick priority comparisons without extracting from heap tuples.',
        'Incorrect. Collision handling is managed by the hash map implementation itself.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'When implementing a heap with hash map, what must we remember to do during heap operations like bubble_up and sink_down?',
      options: [
        'Reset the hash map after each operation',
        'Update position mappings whenever elements swap positions',
        'Recalculate all priorities',
        'Create new heap entries',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Resetting the map would lose our position tracking.',
        'Correct! When elements move in the heap during reordering operations, we must update their positions in the hash map to maintain correct O(1) lookup ability.',
        'Incorrect. Priorities remain the same during heap reordering operations.',
        'Incorrect. We modify existing entries rather than creating new ones.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};

const whenToUseHeapsData: LessonContent = {
  title: 'Recognizing When to Use Heaps: A Problem-Solving Guide',
  content: `<p>
Understanding when to use a heap is like knowing when to use a priority line at an airport. If you just need to process passengers in the order they arrive, a regular line (queue) works fine. But when you need to handle different priority levels—like first class, business class, and economy—while still maintaining some order within each level, that's when a priority system (heap) becomes invaluable.
</p>

<h3><u>Key Signs You Need a Heap</u></h3>
<p>
Think of heaps as specialized tools in your data structure toolbox. Let's explore the key indicators that suggest a heap might be the right choice for your problem:
</p>

<p>
1. <strong>You Need Quick Access to Extremes:</strong> If you frequently need to find or remove the largest or smallest element in a dynamic set of data, a heap should be your go-to structure. This is like always needing to know who the current highest bidder is in an auction.
</p>

<p>
2. <strong>You Have a Dynamic Dataset:</strong> When your data is constantly changing—items being added and removed—heaps handle this gracefully. It's similar to managing a hospital emergency room where new patients arrive and others leave while maintaining proper treatment order.
</p>

<p>
3. <strong>Partial Ordering is Sufficient:</strong> If you only care about the relationship between parents and children (not the entire ordering like in a BST), heaps provide better performance. Think of it like organizing a corporate hierarchy where you only need to know direct reporting relationships, not the relative ranks of everyone.
</p>

<div class="visualization">
<svg viewBox="0 0 800 400">
  <!-- Problem Types Visualization -->
  <g transform="translate(50,20)">
    <text x="0" y="0" font-size="14" fill="black">Common Problem Patterns</text>
    
    <!-- Top-K Pattern -->
    <g transform="translate(0,30)">
      <rect width="200" height="80" fill="#E3F2FD" rx="5"/>
      <text x="10" y="20" font-size="12" fill="#1976D2">Top-K Pattern</text>
      <text x="10" y="40" font-size="10">Use Heap When:</text>
      <text x="10" y="60" font-size="10">- K is significantly smaller than N</text>
      <text x="10" y="70" font-size="10">- Data is streaming/dynamic</text>
    </g>
    
    <!-- Merge Pattern -->
    <g transform="translate(250,30)">
      <rect width="200" height="80" fill="#E8F5E9" rx="5"/>
      <text x="10" y="20" font-size="12" fill="#388E3C">Merge Pattern</text>
      <text x="10" y="40" font-size="10">Use Heap When:</text>
      <text x="10" y="60" font-size="10">- Multiple sorted sequences</text>
      <text x="10" y="70" font-size="10">- Need efficient merging</text>
    </g>
    
    <!-- Scheduling Pattern -->
    <g transform="translate(500,30)">
      <rect width="200" height="80" fill="#FFF3E0" rx="5"/>
      <text x="10" y="20" font-size="12" fill="#E64A19">Scheduling Pattern</text>
      <text x="10" y="40" font-size="10">Use Heap When:</text>
      <text x="10" y="60" font-size="10">- Dynamic priorities</text>
      <text x="10" y="70" font-size="10">- Continuous reordering needed</text>
    </g>
  </g>

  <!-- Decision Tree -->
  <g transform="translate(50,150)">
    <text x="0" y="0" font-size="14" fill="black">Decision Process</text>
    
    <!-- Tree Structure -->
    <rect x="0" y="20" width="700" height="200" fill="#FAFAFA" rx="5"/>
    <text x="10" y="40" font-size="12">Start: Do you need to frequently access min/max elements?</text>
    <text x="50" y="70" font-size="12">↳ Yes: Is your data dynamic (frequent insertions/deletions)?</text>
    <text x="100" y="100" font-size="12">↳ Yes: Heap is likely your best choice</text>
    <text x="100" y="130" font-size="12">↳ No: Consider a sorted array if data is static</text>
    <text x="50" y="160" font-size="12">↳ No: Do you need efficient merging of sorted sequences?</text>
    <text x="100" y="190" font-size="12">↳ Yes: Heap for K-way merge</text>
    <text x="100" y="220" font-size="12">↳ No: Consider other data structures (BST, Array, etc.)</text>
  </g>
</svg>
</div>

<h3><u>Understanding Trade-offs</u></h3>
<p>
Like any data structure, heaps come with their own set of trade-offs. Let's examine when heaps might not be the best choice:
</p>

<p>
1. <strong>When You Need Total Ordering:</strong> If you need all elements to be fully sorted at all times, a binary search tree might be more appropriate. Heaps only guarantee parent-child relationships, not relationships between siblings or across different branches.
</p>

<p>
2. <strong>When Random Access is Priority:</strong> If you frequently need to access arbitrary elements by index or key, arrays or hash tables would serve you better. While heaps can be augmented with a hash map for lookups, this adds complexity and overhead.
</p>

<p>
3. <strong>When Memory is Extremely Limited:</strong> While heaps are generally space-efficient, some alternatives like sorting in place might be better if memory is at an absolute premium.
</p>

<h3><u>Common Problem Types</u></h3>
<p>
Here are some classic problem patterns where heaps often provide optimal solutions:
</p>

<p>
1. <strong>K-Related Problems:</strong> When you need to find/maintain k largest or smallest elements, especially in a dynamic dataset. Examples include:
   - Finding k closest points to a location
   - Maintaining top k frequent elements
   - Finding kth largest element
</p>

<p>
2. <strong>Scheduling Problems:</strong> When tasks have priorities that may change over time. Examples include:
   - Task schedulers with dynamic priorities
   - Meeting room allocation
   - Process scheduling in operating systems
</p>

<p>
3. <strong>Streaming Problems:</strong> When processing data in real-time with limited memory. Examples include:
   - Finding median in a data stream
   - Monitoring system metrics
   - Real-time analytics
</p>`,
  codeExample: `class DataStructureSelector:
    """
    Helper class to demonstrate decision-making process
    for choosing appropriate data structures.
    
    This implementation shows how to analyze requirements
    and choose between heaps and alternatives.
    """
    def analyze_requirements(self,
                           needs_extremes: bool,
                           is_dynamic: bool,
                           needs_random_access: bool,
                           needs_total_ordering: bool,
                           memory_constrained: bool) -> str:
        """
        Analyze requirements and suggest appropriate data structure.
        
        Args:
            needs_extremes: Frequently need min/max elements
            is_dynamic: Data changes frequently
            needs_random_access: Need quick access to any element
            needs_total_ordering: Need complete sorting
            memory_constrained: Severe memory limitations
            
        Returns:
            String describing recommended data structure and reasoning
        """
        # Decision process with detailed explanations
        if needs_extremes:
            if is_dynamic:
                if memory_constrained:
                    return """
                    Consider sorted array with insertion sort:
                    + Minimal memory overhead
                    + Simple implementation
                    - O(n) insertions, but might be acceptable if n is small
                    """
                else:
                    return """
                    Use heap:
                    + O(log n) insertions and deletions
                    + O(1) access to extremes
                    + Natural fit for dynamic data
                    """
            else:
                return """
                Use sorted array:
                + O(1) access to extremes
                + Better cache locality
                + Simpler implementation
                - O(n) for modifications (but data is static)
                """
        
        if needs_total_ordering:
            if needs_random_access:
                return """
                Use sorted array:
                + O(1) random access
                + Complete ordering
                - O(n) modifications
                """
            else:
                return """
                Use balanced BST:
                + O(log n) operations
                + Maintains total ordering
                + Good balance of features
                """
                
        if needs_random_access:
            return """
            Use array or hash table:
            + O(1) random access
            + Simple implementation
            - No intrinsic ordering
            """
            
        return """
        Consider simpler structures:
        + Array for small datasets
        + Linked list for frequent insertions/deletions
        + Hash table for key-value associations
        """

# Example usage demonstrating analysis process
def demonstrate_selection():
    selector = DataStructureSelector()
    
    # Scenario 1: Running median in data stream
    print("Scenario: Running median in data stream")
    result = selector.analyze_requirements(
        needs_extremes=True,
        is_dynamic=True,
        needs_random_access=False,
        needs_total_ordering=False,
        memory_constrained=False
    )
    print(result)
    
    # Scenario 2: Static sorted data with frequent lookups
    print("\\nScenario: Static sorted data with lookups")
    result = selector.analyze_requirements(
        needs_extremes=True,
        is_dynamic=False,
        needs_random_access=True,
        needs_total_ordering=True,
        memory_constrained=False
    )
    print(result)`,
  exercises: [
    {
      prompt: 'Analyze a given problem description and determine whether a heap is the appropriate data structure. Return your reasoning and any potential alternatives.',
      initialCode: `def analyze_data_structure_needs(
    problem_description: str
) -> dict:
    """
    Analyze problem requirements and suggest data structure.
    
    Args:
        problem_description: Description of the problem
        
    Returns:
        Dict containing:
        - recommended: Primary recommended data structure
        - reasoning: List of reasons for the choice
        - alternatives: List of alternative structures with trade-offs
    """
    # Implement your analysis
    pass`,
      solution: `def analyze_data_structure_needs(
    problem_description: str
) -> dict:
    """
    Analyze problem requirements and suggest data structure.
    
    This implementation looks for key patterns and requirements
    in the problem description to make informed recommendations.
    """
    # Keywords suggesting heap might be appropriate
    heap_indicators = [
        "k largest", "k smallest", "median", "priority",
        "scheduling", "top k", "merge sorted", "stream"
    ]
    
    # Keywords suggesting alternatives
    bst_indicators = ["sorted", "range", "ordered"]
    array_indicators = ["static", "random access", "index"]
    hash_indicators = ["lookup", "find by key", "search"]
    
    # Convert to lowercase for matching
    desc = problem_description.lower()
    
    # Check for heap indicators
    heap_matches = [ind for ind in heap_indicators 
                   if ind in desc]
    
    # Check for alternative indicators
    bst_matches = [ind for ind in bst_indicators 
                  if ind in desc]
    array_matches = [ind for ind in array_indicators 
                    if ind in desc]
    hash_matches = [ind for ind in hash_indicators 
                   if ind in desc]
    
    # Make recommendation based on matches
    if heap_matches:
        return {
            'recommended': 'Heap',
            'reasoning': [
                f"Problem involves {match}" 
                for match in heap_matches
            ],
            'alternatives': [
                {
                    'structure': 'Sorted Array',
                    'trade_off': 'Simpler but O(n) modifications'
                },
                {
                    'structure': 'BST',
                    'trade_off': 'More complex but total ordering'
                }
            ]
        }
    elif bst_matches:
        return {
            'recommended': 'Binary Search Tree',
            'reasoning': [
                f"Problem needs {match}" 
                for match in bst_matches
            ],
            'alternatives': [
                {
                    'structure': 'Heap',
                    'trade_off': 'Faster but partial ordering only'
                }
            ]
        }
    # Continue with other cases...
    
    return {
        'recommended': 'Further Analysis Needed',
        'reasoning': ['Requirements unclear or complex'],
        'alternatives': [
            {
                'structure': 'Multiple Structures',
                'trade_off': 'Might need combination of structures'
            }
        ]
    }`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'In which scenario would a heap NOT be the best choice?',
      options: [
        'Finding the median in a data stream',
        'Maintaining sorted data with frequent random access',
        'Implementing a priority queue',
        'Merging k sorted arrays',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. A heap (or two heaps) is ideal for maintaining streaming median.',
        'Correct! When frequent random access is needed, a sorted array or BST would be better. Heaps don\'t provide efficient random access.',
        'Incorrect. Priority queues are a perfect use case for heaps.',
        'Incorrect. K-way merge problems are well-suited for heap implementation.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};

const optimizationTechniquesData: LessonContent = {
  title: 'Mastering Heap Optimization: Principles and Patterns',
  content: `<p>
Let's explore how we can make heap operations more efficient, just as a skilled conductor knows how to get the best performance from an orchestra. Each small optimization works together to create a more harmonious and efficient whole.
</p>

<h3><u>Core Optimization Principles</u></h3>
<p>
When optimizing heap operations, we need to consider three fundamental aspects that work together like the foundation of a building. Understanding these will help us make better decisions about which optimizations to apply in different situations.
</p>

<p>
First, we should recognize that heap operations have natural bottlenecks. Just as a highway's capacity is limited by its narrowest point, heap performance is often limited by the height of the tree during bubble-up and sink-down operations. This understanding guides many of our optimization strategies.
</p>

<p>
Second, most heap operations involve a trade-off between time and space complexity. Think of it like packing for a trip – we can either pack light and shop at our destination (saving space but using more time), or bring everything we might need (using more space but saving time).
</p>

<p>
Third, the specific requirements of our application should guide our optimization choices. Just as a race car and a family sedan need different types of optimizations, different heap applications benefit from different optimization strategies.
</p>

<div class="visualization">
<svg viewBox="0 0 800 400">
  <!-- Memory Layout Optimization -->
  <g transform="translate(50,20)">
    <text x="0" y="0" font-size="14" fill="black">Memory Layout Optimization</text>
    
    <!-- Cache-Friendly Array -->
    <g transform="translate(0,30)">
      <rect width="400" height="60" fill="#E3F2FD" rx="5"/>
      <text x="10" y="25" font-size="12">Cache-Friendly Array Layout</text>
      <rect x="10" y="35" width="30" height="15" fill="#1976D2"/>
      <rect x="45" y="35" width="30" height="15" fill="#1976D2"/>
      <rect x="80" y="35" width="30" height="15" fill="#1976D2"/>
      <text x="150" y="45" font-size="10">Contiguous Memory</text>
    </g>
  </g>

  <!-- Operation Optimizations -->
  <g transform="translate(50,120)">
    <text x="0" y="0" font-size="14" fill="black">Operation Optimizations</text>
    
    <!-- Push Operation -->
    <g transform="translate(0,30)">
      <rect width="350" height="80" fill="#E8F5E9" rx="5"/>
      <text x="10" y="25" font-size="12">Optimized Push Operation</text>
      <path d="M10,40 L340,40" stroke="#388E3C" stroke-dasharray="5,5"/>
      <text x="10" y="60" font-size="10">1. Compare with parent first</text>
      <text x="10" y="75" font-size="10">2. Single-pass bubble up</text>
    </g>
    
    <!-- Pop Operation -->
    <g transform="translate(0,120)">
      <rect width="350" height="80" fill="#FFF3E0" rx="5"/>
      <text x="10" y="25" font-size="12">Optimized Pop Operation</text>
      <path d="M10,40 L340,40" stroke="#E64A19" stroke-dasharray="5,5"/>
      <text x="10" y="60" font-size="10">1. Pre-compute child indices</text>
      <text x="10" y="75" font-size="10">2. Minimize swaps during sink down</text>
    </g>
  </g>
</svg>
</div>

<h3><u>Key Optimization Techniques</u></h3>
<p>
Let's explore several powerful optimization techniques, understanding both how they work and when to apply them:
</p>

<p>
1. <strong>Memory Layout Optimization:</strong> By carefully arranging our heap elements in memory, we can improve cache performance. This is like organizing items in a store so that commonly purchased items are easily accessible.
</p>

<p>
2. <strong>Lazy Deletion:</strong> Instead of immediately removing elements, we mark them for deletion and clean up during other operations. This is similar to how a restaurant might clear multiple tables at once instead of immediately clearing each one.
</p>

<p>
3. <strong>Index Caching:</strong> Maintaining additional data structures to speed up element access, like keeping a map of element positions. Think of it as having an index in a book – it takes extra space but makes finding things much faster.
</p>

<p>
4. <strong>Batch Operations:</strong> Grouping multiple operations together can be more efficient than performing them individually, just as it's often more efficient to do all your grocery shopping in one trip rather than making multiple trips.
</p>

<h3><u>Space-Time Trade-offs</u></h3>
<p>
Understanding these trade-offs helps us make informed decisions about which optimizations to use:
</p>

<p>
1. <strong>Index Maps vs Memory:</strong> Adding index maps speeds up element access but uses extra memory. Consider this when random access is frequent but memory is limited.
</p>

<p>
2. <strong>Batch Processing vs Latency:</strong> Batching operations can improve throughput but may increase latency for individual operations. This matters in real-time applications.
</p>

<p>
3. <strong>Cache Optimization vs Flexibility:</strong> Optimizing for cache locality might make the code less flexible for future modifications.
</p>`,
  codeExample: `class OptimizedHeap:
    """
    Optimized heap implementation demonstrating various
    performance enhancement techniques.
    
    This implementation shows practical applications of
    multiple optimization strategies while maintaining
    clear code structure.
    
    Time Complexities:
    - Push: O(log n) worst case, O(1) amortized
    - Pop: O(log n)
    - Update: O(log n)
    Space Complexity: O(n) for heap, O(n) for index map
    """
    def __init__(self):
        # Main heap array
        self.heap = []
        # Map elements to their positions
        self.index_map = {}
        # Buffer for batch operations
        self.batch_buffer = []
        # Size threshold for batch processing
        self.BATCH_THRESHOLD = 100
        
    def push(self, key: Any, value: float) -> None:
        """
        Add element to heap with optimized path detection.
        
        Key optimizations:
        1. Pre-check if element might need to bubble up
        2. Use single-pass bubble up with minimal swaps
        3. Cache index calculations
        """
        # Add to batch buffer if appropriate
        if len(self.batch_buffer) < self.BATCH_THRESHOLD:
            self.batch_buffer.append((key, value))
            if len(self.batch_buffer) == self.BATCH_THRESHOLD:
                self._process_batch()
            return
            
        # Direct insertion path
        pos = len(self.heap)
        self.heap.append((value, key))
        self.index_map[key] = pos
        
        # Optimization: Only bubble up if needed
        if pos > 0:
            parent_pos = (pos - 1) >> 1  # Bit shift for faster division
            if self.heap[parent_pos][0] > value:
                self._optimized_bubble_up(pos)
                
    def _optimized_bubble_up(self, pos: int) -> None:
        """
        Optimized bubble up operation using single pass
        and minimal memory access.
        """
        target = self.heap[pos]
        
        # While we have a parent
        while pos > 0:
            parent_pos = (pos - 1) >> 1
            parent = self.heap[parent_pos]
            
            if parent[0] <= target[0]:
                break
                
            # Move parent down instead of swapping
            self.heap[pos] = parent
            self.index_map[parent[1]] = pos
            pos = parent_pos
            
        # Place target at final position
        self.heap[pos] = target
        self.index_map[target[1]] = pos
        
    def _process_batch(self) -> None:
        """
        Process buffered operations in batch for better efficiency.
        Uses Floyd's heap construction approach.
        """
        # Add all buffered elements
        start_idx = len(self.heap)
        for key, value in self.batch_buffer:
            self.heap.append((value, key))
            self.index_map[key] = len(self.heap) - 1
            
        # Heapify from last parent to root
        for i in range((len(self.heap) - 2) >> 1, start_idx - 1, -1):
            self._sink_down(i)
            
        self.batch_buffer.clear()
        
    def pop(self) -> Tuple[Any, float]:
        """
        Remove and return minimum element using optimized
        sink down operation.
        """
        if not self.heap:
            raise IndexError("Heap is empty")
            
        # Process any buffered elements
        if self.batch_buffer:
            self._process_batch()
            
        # Get root and move last element to top
        root = self.heap[0]
        last = self.heap.pop()
        
        if self.heap:
            self.heap[0] = last
            self.index_map[last[1]] = 0
            self._optimized_sink_down(0)
            
        del self.index_map[root[1]]
        return root[1], root[0]
        
    def _optimized_sink_down(self, pos: int) -> None:
        """
        Optimized sink down operation with minimal swaps
        and efficient memory access patterns.
        """
        target = self.heap[pos]
        size = len(self.heap)
        
        while True:
            smallest = pos
            left = (pos << 1) + 1  # Bit shift for faster multiplication
            right = left + 1
            
            # Find smallest among current, left, and right
            if left < size and self.heap[left][0] < target[0]:
                smallest = left
            if (right < size and 
                self.heap[right][0] < self.heap[smallest][0]):
                smallest = right
                
            if smallest == pos:
                break
                
            # Move smaller child up
            self.heap[pos] = self.heap[smallest]
            self.index_map[self.heap[smallest][1]] = pos
            pos = smallest
            
        # Place target at final position
        self.heap[pos] = target
        self.index_map[target[1]] = pos`,
  exercises: [
    {
      prompt: 'Implement a memory-efficient heap that uses lazy deletion for elements while maintaining correct ordering.',
      initialCode: `class MemoryEfficientHeap:
    """
    Implement heap with lazy deletion optimization.
    Should minimize memory usage while maintaining
    fast operations.
    """
    def __init__(self):
        # Initialize your data structures here
        pass
        
    def push(self, value: float) -> None:
        # Add element efficiently
        pass
        
    def pop(self) -> float:
        # Remove and return minimum with lazy cleanup
        pass`,
      solution: `class MemoryEfficientHeap:
    def __init__(self):
        self.heap = []
        self.deleted = set()
        # Track actual size excluding deleted
        self.real_size = 0
        
    def push(self, value: float) -> None:
        # Clean up if too many deleted elements
        if len(self.deleted) > len(self.heap) // 2:
            self._cleanup()
            
        pos = len(self.heap)
        self.heap.append(value)
        self.real_size += 1
        
        # Optimize bubble up
        if pos > 0:
            parent = (pos - 1) >> 1
            if self.heap[parent] > value:
                self._bubble_up(pos)
                
    def pop(self) -> float:
        while self.heap and len(self.heap) - 1 in self.deleted:
            self.heap.pop()
            self.deleted.remove(len(self.heap))
            
        if not self.heap:
            raise IndexError("Heap is empty")
            
        min_val = self.heap[0]
        last_pos = len(self.heap) - 1
        
        if last_pos > 0:
            self.heap[0] = self.heap[last_pos]
            self.heap.pop()
            if self.heap:
                self._sink_down(0)
        else:
            self.heap.pop()
            
        self.real_size -= 1
        return min_val
        
    def _cleanup(self) -> None:
        """Remove all deleted elements efficiently."""
        new_heap = [x for i, x in enumerate(self.heap) 
                   if i not in self.deleted]
        self.heap = new_heap
        self.deleted.clear()
        
        # Rebuild heap property
        for i in range((len(self.heap) - 2) >> 1, -1, -1):
            self._sink_down(i)`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Which optimization technique would be most beneficial for a heap that frequently needs to update priorities of existing elements?',
      options: [
        'Batch processing of insertions',
        'Index mapping to element positions',
        'Lazy deletion of elements',
        'Cache-friendly memory layout',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Batch processing helps with multiple insertions but not updates.',
        'Correct! An index map provides O(1) access to elements needing updates, significantly improving update efficiency.',
        'Incorrect. Lazy deletion helps with removal operations but not updates.',
        'Incorrect. While cache-friendly layout helps overall performance, it doesn\'t specifically optimize updates.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};

const commonMistakesData: LessonContent = {
  title: 'Understanding and Avoiding Common Heap Mistakes',
  content: `<p>
Understanding common heap mistakes is like learning to navigate a road by studying where others have taken wrong turns. Just as experienced drivers know the common hazards to watch for, experienced developers need to understand typical heap pitfalls to write more reliable code.
</p>

<h3><u>Fundamental Misconceptions</u></h3>
<p>
Let's start by addressing some fundamental misconceptions about heaps that often lead to errors. Think of these as the foundational rules of the road that, when misunderstood, can lead to problems down the line.
</p>

<p>
The first major misconception is thinking that a heap maintains complete sorting. Imagine you're managing a priority queue for a hospital emergency room. While you always know which patient needs attention most urgently, you don't necessarily know the exact order of all other patients. This is exactly how a heap works – it only guarantees the relationship between parents and children, not between siblings or across different branches.
</p>

<p>
Another common misconception is assuming that equal elements maintain their original order. In a heap, equal elements might be arranged in any valid configuration that maintains the heap property. This can lead to subtle bugs in applications that assume stability.
</p>

<div class="visualization">
<svg viewBox="0 0 800 400">
  <!-- Common Mistakes Visualization -->
  <g transform="translate(50,20)">
    <text x="0" y="0" font-size="14" fill="black">Common Heap Mistakes</text>
    
    <!-- Mistake 1: Heap Property Violation -->
    <g transform="translate(0,30)">
      <text x="0" y="0" font-size="12" fill="#D32F2F">❌ Incorrect Heap</text>
      <circle cx="50" cy="30" r="20" fill="#FFCDD2"/>
      <circle cx="20" cy="70" r="20" fill="#FFCDD2"/>
      <circle cx="80" cy="70" r="20" fill="#FFCDD2"/>
      <text x="45" y="35" font-size="10">5</text>
      <text x="15" y="75" font-size="10">3</text>
      <text x="75" y="75" font-size="10">4</text>
      <line x1="50" y1="50" x2="20" y2="50" stroke="#D32F2F"/>
      <line x1="50" y1="50" x2="80" y2="50" stroke="#D32F2F"/>
    </g>
    
    <!-- Correct Version -->
    <g transform="translate(200,30)">
      <text x="0" y="0" font-size="12" fill="#388E3C">✓ Correct Heap</text>
      <circle cx="50" cy="30" r="20" fill="#C8E6C9"/>
      <circle cx="20" cy="70" r="20" fill="#C8E6C9"/>
      <circle cx="80" cy="70" r="20" fill="#C8E6C9"/>
      <text x="45" y="35" font-size="10">3</text>
      <text x="15" y="75" font-size="10">5</text>
      <text x="75" y="75" font-size="10">4</text>
      <line x1="50" y1="50" x2="20" y2="50" stroke="#388E3C"/>
      <line x1="50" y1="50" x2="80" y2="50" stroke="#388E3C"/>
    </g>
  </g>

  <!-- Index Management Mistakes -->
  <g transform="translate(400,20)">
    <text x="0" y="0" font-size="14" fill="black">Index Management</text>
    <rect x="0" y="30" width="350" height="100" fill="#FFF3E0"/>
    <text x="10" y="50" font-size="12">Common Index Mistakes:</text>
    <text x="10" y="70" font-size="10">1. Off-by-one errors in parent/child calculations</text>
    <text x="10" y="90" font-size="10">2. Not updating indices after swaps</text>
    <text x="10" y="110" font-size="10">3. Incorrect bounds checking</text>
  </g>
</svg>
</div>

<h3><u>Implementation Pitfalls</u></h3>
<p>
Let's examine some common implementation mistakes that can create subtle bugs in heap operations:
</p>

<p>
1. <strong>Index Calculation Errors:</strong> Much like measuring ingredients in a recipe, getting the parent-child index calculations wrong by even a small amount can ruin the entire structure. Always remember:
   - Parent index: (i - 1) // 2
   - Left child: 2 * i + 1
   - Right child: 2 * i + 2
</p>

<p>
2. <strong>Incomplete Property Restoration:</strong> After operations like push or pop, we must ensure the heap property is fully restored. It's like playing Jenga – one misplaced piece can destabilize the entire structure. Common mistakes include:
   - Not bubbling up far enough after insertion
   - Not sinking down completely after removal
   - Forgetting to update both ends during a swap
</p>

<p>
3. <strong>Edge Case Handling:</strong> Edge cases in heap operations are like the corners of a room – they're easy to overlook but crucial for stability. Key edge cases include:
   - Empty heap operations
   - Single-element heap operations
   - Equal element handling
   - Full heap conditions
</p>

<h3><u>Subtle Bugs and Their Solutions</u></h3>
<p>
Some bugs are particularly tricky because they only appear under specific conditions. Let's explore these subtle issues and their solutions:
</p>

<p>
1. <strong>Priority Updates:</strong> When updating element priorities, we must consider whether the new priority requires bubbling up or sinking down. A common mistake is assuming the direction of movement.
</p>

<p>
2. <strong>Memory Management:</strong> In languages without garbage collection, improper memory management in heap operations can lead to memory leaks or dangling references.
</p>

<p>
3. <strong>Comparison Stability:</strong> When comparing elements with equal priorities, unstable comparisons can lead to unexpected behavior in applications that assume stability.
</p>`,
  codeExample: `class HeapWithCommonMistakesFixes:
    """
    Heap implementation demonstrating common mistakes and their fixes.
    
    This implementation includes detailed explanations of potential
    pitfalls and shows how to properly handle edge cases and
    maintain invariants.
    """
    def __init__(self):
        self.heap = []
        
    def push(self, value: Any) -> None:
        """
        Add value to heap, demonstrating proper invariant maintenance.
        
        Common Mistakes Fixed:
        1. Forgetting bounds checks
        2. Incorrect parent/child calculations
        3. Incomplete bubble-up
        """
        # MISTAKE: Forgetting to check if value is None
        if value is None:
            raise ValueError("Cannot push None value")
            
        # Add new value to end of heap
        self.heap.append(value)
        self._bubble_up(len(self.heap) - 1)
        
    def _bubble_up(self, index: int) -> None:
        """
        Bubble up value at index to maintain heap property.
        
        Common Mistakes Fixed:
        1. Off-by-one errors in parent calculation
        2. Not checking bounds before access
        3. Incomplete loop termination conditions
        """
        # MISTAKE: Using incorrect parent formula
        # Wrong: index // 2
        # Correct: (index - 1) // 2
        current = index
        while current > 0:
            parent = (current - 1) // 2
            
            # MISTAKE: Not checking bounds before access
            if parent < 0:
                break
                
            # MISTAKE: Wrong comparison direction
            if self.heap[parent] <= self.heap[current]:
                break
                
            # Swap with parent
            self._swap(current, parent)
            current = parent
            
    def pop(self) -> Any:
        """
        Remove and return minimum value.
        
        Common Mistakes Fixed:
        1. Not handling empty heap
        2. Incorrect last element handling
        3. Incomplete sink-down
        """
        if not self.heap:
            raise IndexError("Pop from empty heap")
            
        # MISTAKE: Not handling single-element case
        if len(self.heap) == 1:
            return self.heap.pop()
            
        # Save root value
        min_value = self.heap[0]
        
        # Move last element to root
        self.heap[0] = self.heap.pop()
        
        # Restore heap property
        self._sink_down(0)
        
        return min_value
        
    def _sink_down(self, index: int) -> None:
        """
        Sink down value at index to maintain heap property.
        
        Common Mistakes Fixed:
        1. Incorrect child index calculation
        2. Missing bounds checks
        3. Incomplete comparison logic
        """
        size = len(self.heap)
        while True:
            smallest = index
            left = 2 * index + 1
            right = 2 * index + 2
            
            # MISTAKE: Not checking bounds before comparison
            if left < size and self.heap[left] < self.heap[smallest]:
                smallest = left
                
            # MISTAKE: Not checking bounds before comparison
            if right < size and self.heap[right] < self.heap[smallest]:
                smallest = right
                
            if smallest == index:
                break
                
            self._swap(index, smallest)
            index = smallest
            
    def update_priority(self, index: int, new_value: Any) -> None:
        """
        Update value at index, maintaining heap property.
        
        Common Mistakes Fixed:
        1. Not checking if movement needed
        2. Assuming direction of movement
        3. Not handling invalid indices
        """
        if not 0 <= index < len(self.heap):
            raise IndexError("Invalid heap index")
            
        old_value = self.heap[index]
        self.heap[index] = new_value
        
        # MISTAKE: Assuming movement direction
        # Need to check both directions
        if new_value < old_value:
            self._bubble_up(index)
        else:
            self._sink_down(index)
            
    def _swap(self, i: int, j: int) -> None:
        """
        Swap elements at indices i and j.
        
        Common Mistakes Fixed:
        1. Not checking bounds
        2. Not handling self-swap
        """
        # MISTAKE: Not validating indices
        if not (0 <= i < len(self.heap) and 
                0 <= j < len(self.heap)):
            raise IndexError("Invalid swap indices")
            
        # MISTAKE: Not handling self-swap
        if i != j:
            self.heap[i], self.heap[j] = self.heap[j], self.heap[i]
            
    def peek(self) -> Any:
        """
        Return minimum value without removing it.
        
        Common Mistakes Fixed:
        1. Not handling empty heap
        2. Modifying heap state
        """
        if not self.heap:
            raise IndexError("Peek at empty heap")
            
        return self.heap[0]`,
  exercises: [
    {
      prompt: 'Implement a heap that maintains stability for equal elements by adding sequence numbers. Include proper error handling and edge cases.',
      initialCode: `class StableHeap:
    """
    Implement heap that maintains insertion order
    for equal elements.
    """
    def __init__(self):
        # Initialize your data structures here
        pass
        
    def push(self, value: Any) -> None:
        # Add value maintaining stability
        pass
        
    def pop(self) -> Any:
        # Remove and return minimum value
        # maintaining stability
        pass`,
      solution: `class StableHeap:
    def __init__(self):
        # Heap stores (value, sequence_number) pairs
        self.heap = []
        self.sequence = 0
        
    def push(self, value: Any) -> None:
        if value is None:
            raise ValueError("Cannot push None value")
            
        # Add sequence number for stability
        entry = (value, self.sequence)
        self.sequence += 1
        
        self.heap.append(entry)
        self._bubble_up(len(self.heap) - 1)
        
    def pop(self) -> Any:
        if not self.heap:
            raise IndexError("Pop from empty heap")
            
        if len(self.heap) == 1:
            return self.heap.pop()[0]
            
        min_value = self.heap[0][0]
        self.heap[0] = self.heap.pop()
        self._sink_down(0)
        
        return min_value
        
    def _bubble_up(self, index: int) -> None:
        entry = self.heap[index]
        
        while index > 0:
            parent = (index - 1) // 2
            if self._compare(self.heap[parent], entry) <= 0:
                break
                
            self.heap[index] = self.heap[parent]
            index = parent
            
        self.heap[index] = entry
        
    def _sink_down(self, index: int) -> None:
        entry = self.heap[index]
        size = len(self.heap)
        
        while True:
            smallest = index
            left = 2 * index + 1
            right = 2 * index + 2
            
            if (left < size and 
                self._compare(self.heap[left], 
                            self.heap[smallest]) < 0):
                smallest = left
                
            if (right < size and 
                self._compare(self.heap[right], 
                            self.heap[smallest]) < 0):
                smallest = right
                
            if smallest == index:
                break
                
            self.heap[index] = self.heap[smallest]
            index = smallest
            
        self.heap[index] = entry
        
    def _compare(self, a: tuple, b: tuple) -> int:
        """Compare elements maintaining stability."""
        # Compare values first
        if a[0] < b[0]:
            return -1
        if a[0] > b[0]:
            return 1
        # If values equal, compare sequence numbers
        return -1 if a[1] < b[1] else 1`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Which of these is NOT a valid way to fix the problem of maintaining element order stability in a heap?',
      options: [
        'Adding sequence numbers to elements',
        'Using a secondary comparison key',
        'Maintaining a separate linked list',
        'Forcing all elements to have unique values',
      ],
      correctAnswer: 3,
      explanations: [
        'Incorrect. Adding sequence numbers is a valid approach for maintaining stability.',
        'Incorrect. Using a secondary comparison key effectively maintains stability.',
        'Incorrect. A separate linked list can track original order.',
        'Correct! Forcing unique values changes the original data and doesn\'t solve the stability problem correctly.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};

const customComparatorData: LessonContent = {
  title: 'Mastering Custom Heap Comparators: Beyond Simple Comparisons',
  content: `<p>
Imagine you're organizing a team of superheroes for different missions. Sometimes you need to prioritize based on raw strength, other times based on stealth abilities, and sometimes using a complex combination of multiple attributes. This is exactly where custom comparators come in – they let us define sophisticated ways to determine the priority order of elements in our heap.
</p>

<h3><u>Understanding Custom Comparators</u></h3>
<p>
A custom comparator is like creating a specialized rulebook for comparing elements. Just as a sports league might have complex tiebreaker rules that consider multiple statistics, our comparator can use multiple criteria to establish a clear ordering between any two elements.
</p>

<div class="visualization">
<svg viewBox="0 0 800 400">
  <!-- Comparator Visualization -->
  <g transform="translate(50,20)">
    <text x="0" y="0" font-size="14" fill="black">Custom Comparison Examples</text>
    
    <!-- Simple Comparison -->
    <g transform="translate(0,30)">
      <rect width="200" height="80" fill="#E3F2FD" rx="5"/>
      <text x="10" y="20" font-size="12">Simple Number Comparison</text>
      <text x="10" y="40" font-size="10">a = 5, b = 3</text>
      <text x="10" y="60" font-size="10">return a - b  // Result: 2</text>
    </g>
    
    <!-- Multi-field Comparison -->
    <g transform="translate(250,30)">
      <rect width="200" height="80" fill="#E8F5E9" rx="5"/>
      <text x="10" y="20" font-size="12">Multi-field Comparison</text>
      <text x="10" y="40" font-size="10">a = {priority: 1, time: 100}</text>
      <text x="10" y="60" font-size="10">b = {priority: 1, time: 200}</text>
    </g>
    
    <!-- Complex Logic -->
    <g transform="translate(500,30)">
      <rect width="200" height="80" fill="#FFF3E0" rx="5"/>
      <text x="10" y="20" font-size="12">Complex Priority Logic</text>
      <text x="10" y="40" font-size="10">Combining multiple factors:</text>
      <text x="10" y="60" font-size="10">- Primary priority</text>
      <text x="10" y="70" font-size="10">- Deadline proximity</text>
    </g>
  </g>

  <!-- Stability Handling -->
  <g transform="translate(50,150)">
    <text x="0" y="0" font-size="14" fill="black">Maintaining Stability</text>
    <rect x="0" y="20" width="700" height="80" fill="#FAFAFA" rx="5"/>
    <text x="10" y="40" font-size="10">Original Order: {val: 5, id: 1} → {val: 5, id: 2} → {val: 5, id: 3}</text>
    <text x="10" y="60" font-size="10">Stable Comparison: if (a.val === b.val) return a.id - b.id</text>
    <text x="10" y="80" font-size="10">Result: Maintains original order for equal values</text>
  </g>
</svg>
</div>

<h3><u>Key Principles of Custom Comparators</u></h3>
<p>
When designing custom comparators, we need to follow certain mathematical properties to ensure our heap behaves correctly:
</p>

<p>
1. <strong>Transitivity:</strong> If a > b and b > c, then a > c must be true. This is like saying if Team A beats Team B, and Team B beats Team C, then Team A must be considered better than Team C.
</p>

<p>
2. <strong>Anti-symmetry:</strong> If a > b is true, then b > a must be false. Just like in a tournament, if Player A wins against Player B, we can't also have Player B winning against Player A.
</p>

<p>
3. <strong>Totality:</strong> For any two elements, we must be able to determine their order. Like a sports league, we need clear rules to rank any two teams, even if they've never played each other.
</p>

<h3><u>Common Use Cases</u></h3>
<p>
Let's explore some practical scenarios where custom comparators shine:
</p>

<p>
1. <strong>Multi-field Comparison:</strong> When elements need to be compared based on multiple attributes, like sorting tasks by both priority and deadline.
</p>

<p>
2. <strong>Custom Objects:</strong> When working with complex objects that need specialized comparison logic, such as comparing geometric shapes by area and perimeter.
</p>

<p>
3. <strong>Dynamic Priority:</strong> When the comparison criteria might change during runtime, like adapting task priorities based on system load.
</p>

<h3><u>Implementation Considerations</u></h3>
<p>
When implementing custom comparators, keep these important factors in mind:
</p>

<p>
1. <strong>Performance Impact:</strong> Complex comparisons will be called frequently during heap operations. Keep them as efficient as possible.
</p>

<p>
2. <strong>Stability:</strong> If order preservation for equal elements matters, include additional tie-breaking criteria like sequence numbers.
</p>

<p>
3. <strong>Robustness:</strong> Handle edge cases gracefully, including null values, missing fields, and invalid data.
</p>`,
  codeExample: `class HeapWithCustomComparator:
    """
    Heap implementation supporting custom comparison logic.
    
    This implementation demonstrates how to effectively use
    custom comparators while maintaining heap properties
    and handling edge cases.
    """
    def __init__(self, comparator=None):
        """
        Initialize heap with optional custom comparator.
        
        Args:
            comparator: Function that takes two arguments and
                       returns negative if first < second,
                       positive if first > second,
                       zero if equal
        """
        self.heap = []
        # Use custom comparator or default to standard comparison
        self.comparator = comparator or (lambda x, y: x - y)
        
    def push(self, value):
        """Add value to heap using custom comparison."""
        if value is None:
            raise ValueError("Cannot push None value")
            
        self.heap.append(value)
        self._bubble_up(len(self.heap) - 1)
        
    def _bubble_up(self, index):
        """Bubble up value using custom comparator."""
        current = self.heap[index]
        
        # Move up while parent is greater according to comparator
        while index > 0:
            parent_idx = (index - 1) // 2
            parent = self.heap[parent_idx]
            
            # Use comparator to determine order
            if self.comparator(parent, current) <= 0:
                break
                
            # Move parent down
            self.heap[index] = parent
            index = parent_idx
            
        self.heap[index] = current
        
    def pop(self):
        """Remove and return minimum element according to comparator."""
        if not self.heap:
            raise IndexError("Pop from empty heap")
            
        if len(self.heap) == 1:
            return self.heap.pop()
            
        min_value = self.heap[0]
        self.heap[0] = self.heap.pop()
        self._sink_down(0)
        
        return min_value
        
    def _sink_down(self, index):
        """Sink down value using custom comparator."""
        current = self.heap[index]
        size = len(self.heap)
        
        while True:
            smallest = index
            left = 2 * index + 1
            right = 2 * index + 2
            
            # Use comparator for both child comparisons
            if (left < size and 
                self.comparator(self.heap[left], 
                              self.heap[smallest]) < 0):
                smallest = left
                
            if (right < size and 
                self.comparator(self.heap[right], 
                              self.heap[smallest]) < 0):
                smallest = right
                
            if smallest == index:
                break
                
            self.heap[index] = self.heap[smallest]
            index = smallest
            
        self.heap[index] = current

# Example usage with different custom comparators
def demonstrate_custom_comparators():
    # Multi-field comparison
    def task_comparator(a, b):
        # Compare by priority first
        if a.priority != b.priority:
            return a.priority - b.priority
        # Then by deadline
        return a.deadline - b.deadline
    
    task_heap = HeapWithCustomComparator(task_comparator)
    
    # Complex object comparison
    def shape_comparator(a, b):
        # Compare by area first
        area_diff = a.calculate_area() - b.calculate_area()
        if abs(area_diff) > 1e-10:  # Handle floating point
            return area_diff
        # Then by perimeter
        return a.calculate_perimeter() - b.calculate_perimeter()
    
    shape_heap = HeapWithCustomComparator(shape_comparator)
    
    # Stable comparison with sequence numbers
    class StableComparator:
        def __init__(self):
            self.sequence = 0
            
        def __call__(self, a, b):
            # Compare values first
            if a.value != b.value:
                return a.value - b.value
            # Then by sequence number
            return a.sequence - b.sequence
            
    stable_heap = HeapWithCustomComparator(StableComparator())`,
  exercises: [
    {
      prompt: 'Implement a custom comparator for a heap that organizes intervals [start, end] by minimal overlap with other intervals.',
      initialCode: `def create_interval_comparator(intervals):
    """
    Create comparator for interval ordering.
    
    Args:
        intervals: List of all intervals to consider
    Returns:
        Comparator function for comparing two intervals
    """
    # Implement your solution here
    pass`,
      solution: `def create_interval_comparator(intervals):
    """
    Create comparator that prioritizes intervals with
    minimal overlap with others.
    
    Time Complexity: O(n) per comparison where n is number of intervals
    Space Complexity: O(1)
    """
    def count_overlaps(interval):
        """Count how many other intervals overlap with this one."""
        start, end = interval
        count = 0
        for other in intervals:
            if other != interval:  # Don't count self
                # Check for overlap
                if not (other[1] < start or other[0] > end):
                    count += 1
        return count
    
    def compare_intervals(a, b):
        """Compare intervals based on overlap count."""
        # Cache overlap counts
        a_overlaps = count_overlaps(a)
        b_overlaps = count_overlaps(b)
        
        # Compare by overlap count first
        if a_overlaps != b_overlaps:
            return a_overlaps - b_overlaps
            
        # Break ties by interval length
        a_length = a[1] - a[0]
        b_length = b[1] - b[0]
        if a_length != b_length:
            return a_length - b_length
            
        # Final tie-breaker: start time
        return a[0] - b[0]
    
    return compare_intervals`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'When implementing a custom comparator, which property is MOST important to maintain for correct heap operation?',
      options: [
        'Reflexivity (a = a)',
        'Transitivity (if a > b and b > c, then a > c)',
        'Commutativity (a + b = b + a)',
        'Associativity (a + (b + c) = (a + b) + c)',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. While reflexivity is good to have, transitivity is more crucial for heap ordering.',
        'Correct! Transitivity is essential for maintaining a consistent heap order. Without it, elements might not be properly ordered relative to each other.',
        'Incorrect. Commutativity is not relevant for comparison operations.',
        'Incorrect. Associativity applies to operations like addition, not comparisons.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};

const languageSpecificToolsData: LessonContent = {
  title: 'Understanding and Using Built-in Heap Implementations',
  content: `<p>
Every major programming language provides its own implementation of heaps or priority queues, each with its own quirks, strengths, and special features. Understanding these built-in tools is like knowing how to use the professional-grade equipment in a kitchen instead of building your own utensils from scratch. Let's explore how to make the most of these built-in implementations.
</p>

<h3><u>Python's heapq Module</u></h3>
<p>
Python's heapq module implements a min heap and provides a comprehensive set of heap operations. Think of it as a well-designed Swiss Army knife – it's not just a basic tool but comes with several specialized functions for common heap operations. The module is part of Python's standard library, making it readily available and well-maintained.
</p>

<p>
Some key aspects of heapq that might not be immediately obvious:
</p>

<p>
1. The heap property is maintained at the list level, meaning any list can become a heap. This is like being able to turn any container into a specialized storage system.
</p>

<p>
2. All operations work in-place on the list. This is efficient for memory but means you need to be careful about modifying the list directly.
</p>

<p>
3. For a max heap, you can negate values or use tuples with a negative first element. This is like using a mirror to turn "less than" into "greater than".
</p>

<h3><u>Java's PriorityQueue</u></h3>
<p>
Java's PriorityQueue is a more structured implementation that follows Java's Collection framework design. It's like a purpose-built appliance rather than a multi-tool – more specialized but also more feature-rich in its specific domain.
</p>

<p>
Key features of Java's implementation include:
</p>

<p>
1. Full integration with Java's type system and generics, allowing type-safe collections of any comparable objects.
</p>

<p>
2. Support for custom comparators through the Comparator interface, making it highly flexible for complex ordering requirements.
</p>

<p>
3. Thread-safe alternatives available through the concurrent package, essential for multi-threaded applications.
</p>

<h3><u>JavaScript/TypeScript Implementations</u></h3>
<p>
While JavaScript doesn't provide a built-in heap implementation, several well-maintained libraries offer heap functionality. This is like having access to a marketplace of specialized tools, each with its own advantages.
</p>

<div class="visualization">
<svg viewBox="0 0 800 400">
  <!-- Language Features Comparison -->
  <g transform="translate(50,20)">
    <text x="0" y="0" font-size="14" fill="black">Language-Specific Features</text>
    
    <!-- Python Section -->
    <g transform="translate(0,30)">
      <rect width="200" height="120" fill="#E3F2FD" rx="5"/>
      <text x="10" y="20" font-size="12">Python (heapq)</text>
      <text x="10" y="40" font-size="10">• Min heap by default</text>
      <text x="10" y="60" font-size="10">• In-place list operations</text>
      <text x="10" y="80" font-size="10">• merge() for k-way merge</text>
      <text x="10" y="100" font-size="10">• heapify() for O(n) build</text>
    </g>
    
    <!-- Java Section -->
    <g transform="translate(250,30)">
      <rect width="200" height="120" fill="#E8F5E9" rx="5"/>
      <text x="10" y="20" font-size="12">Java (PriorityQueue)</text>
      <text x="10" y="40" font-size="10">• Generic type support</text>
      <text x="10" y="60" font-size="10">• Comparator interface</text>
      <text x="10" y="80" font-size="10">• Iterator support</text>
      <text x="10" y="100" font-size="10">• Thread-safe options</text>
    </g>
    
    <!-- JavaScript Section -->
    <g transform="translate(500,30)">
      <rect width="200" height="120" fill="#FFF3E0" rx="5"/>
      <text x="10" y="20" font-size="12">JavaScript Libraries</text>
      <text x="10" y="40" font-size="10">• Various implementations</text>
      <text x="10" y="60" font-size="10">• Functional approaches</text>
      <text x="10" y="80" font-size="10">• Custom comparators</text>
      <text x="10" y="100" font-size="10">• Framework integration</text>
    </g>
  </g>

  <!-- Common Pitfalls -->
  <g transform="translate(50,180)">
    <text x="0" y="0" font-size="14" fill="black">Common Pitfalls by Language</text>
    <rect x="0" y="20" width="700" height="150" fill="#FAFAFA" rx="5"/>
    
    <!-- Python Pitfalls -->
    <text x="10" y="40" font-size="12" fill="#D32F2F">Python:</text>
    <text x="10" y="60" font-size="10">• Direct list modification breaks heap property</text>
    <text x="10" y="80" font-size="10">• Forgetting to maintain tuple structure for custom objects</text>
    
    <!-- Java Pitfalls -->
    <text x="250" y="40" font-size="12" fill="#D32F2F">Java:</text>
    <text x="250" y="60" font-size="10">• Mutating objects after insertion</text>
    <text x="250" y="80" font-size="10">• Not implementing Comparable correctly</text>
    
    <!-- JavaScript Pitfalls -->
    <text x="490" y="40" font-size="12" fill="#D32F2F">JavaScript:</text>
    <text x="490" y="60" font-size="10">• Inconsistent comparator behavior</text>
    <text x="490" y="80" font-size="10">• Memory leaks in custom objects</text>
  </g>
</svg>
</div>`,
  codeExample: `# Python's heapq examples
from heapq import heappush, heappop, heapify, nlargest

def demonstrate_python_heap():
    """
    Demonstrate key features and best practices of Python's heapq.
    
    This shows common patterns and gotchas to avoid when using
    Python's built-in heap implementation.
    """
    # Basic usage
    heap = []
    data = [5, 3, 7, 1, 9, 2]
    
    # Adding elements
    for item in data:
        heappush(heap, item)  # O(log n) per operation
    
    # Alternative: heapify existing list
    heap2 = data.copy()
    heapify(heap2)  # O(n) for whole list
    
    # Custom objects require careful handling
    class Task:
        def __init__(self, priority, description):
            self.priority = priority
            self.description = description
            
        def __lt__(self, other):
            # Must implement for heap ordering
            return self.priority < other.priority
            
    # Using tuples for multiple fields
    task_heap = []
    heappush(task_heap, (2, 'Medium priority'))
    heappush(task_heap, (1, 'High priority'))
    heappush(task_heap, (3, 'Low priority'))
    
    # Max heap using negative numbers
    max_heap = []
    for item in data:
        heappush(max_heap, -item)
    
    # Common patterns
    def get_top_k(items, k):
        """Get k largest items efficiently."""
        # Using nlargest is more efficient than
        # sorting for small k
        return nlargest(k, items)
        
    def merge_sorted_lists(lists):
        """Merge multiple sorted lists efficiently."""
        # Using a heap for k-way merge
        heap = []
        result = []
        
        # Initialize with first element from each list
        for i, lst in enumerate(lists):
            if lst:
                heappush(heap, (lst[0], i, 0))
                
        while heap:
            val, list_idx, elem_idx = heappop(heap)
            result.append(val)
            
            if elem_idx + 1 < len(lists[list_idx]):
                next_elem = lists[list_idx][elem_idx + 1]
                heappush(heap, (next_elem, list_idx, elem_idx + 1))
                
        return result

# Java PriorityQueue example (in Java syntax)
"""
public class TaskScheduler {
    // Custom comparator example
    private PriorityQueue<Task> taskQueue = new PriorityQueue<>(
        (t1, t2) -> {
            if (t1.priority != t2.priority)
                return Integer.compare(t1.priority, t2.priority);
            return Long.compare(t1.timestamp, t2.timestamp);
        }
    );
    
    public void addTask(Task task) {
        // Thread-safe operations if needed
        synchronized(taskQueue) {
            taskQueue.offer(task);
        }
    }
    
    public Task getNextTask() {
        synchronized(taskQueue) {
            return taskQueue.poll();
        }
    }
    
    // Efficient iteration over elements
    public List<Task> getTopTasks(int k) {
        List<Task> result = new ArrayList<>();
        // Create copy to avoid modifying original
        PriorityQueue<Task> copy = new PriorityQueue<>(taskQueue);
        
        for (int i = 0; i < k && !copy.isEmpty(); i++) {
            result.add(copy.poll());
        }
        
        return result;
    }
}
"""

# JavaScript example using a typical library
"""
import { PriorityQueue } from 'priority-queue-library';

class TaskQueue {
    constructor() {
        this.queue = new PriorityQueue({
            comparator: (a, b) => {
                // Consistent comparison logic
                if (a.priority !== b.priority)
                    return a.priority - b.priority;
                return a.timestamp - b.timestamp;
            }
        });
    }
    
    addTask(task) {
        // Validate task before adding
        if (!this.isValidTask(task))
            throw new Error('Invalid task');
            
        this.queue.enqueue(task);
    }
    
    getNextTask() {
        return this.queue.dequeue();
    }
    
    // Helper to prevent invalid tasks
    isValidTask(task) {
        return task &&
               typeof task.priority === 'number' &&
               typeof task.timestamp === 'number';
    }
}
"""`,
  exercises: [
    {
      prompt: 'Implement a function that efficiently finds the median of a data stream using Python\'s heapq module.',
      initialCode: `class MedianFinder:
    """
    Find median from a stream of numbers using heapq.
    Should handle both even and odd counts efficiently.
    """
    def __init__(self):
        # Initialize your data structures here
        pass
        
    def add_num(self, num: int) -> None:
        # Add number to data structure
        pass
        
    def find_median(self) -> float:
        # Calculate and return median
        pass`,
      solution: `class MedianFinder:
    def __init__(self):
        # Use two heaps: max heap for lower half,
        # min heap for upper half
        self.lower = []  # max heap (negative values)
        self.upper = []  # min heap (positive values)
        
    def add_num(self, num: int) -> None:
        # Decide which heap to push to
        if not self.lower or -self.lower[0] > num:
            heappush(self.lower, -num)
        else:
            heappush(self.upper, num)
            
        # Balance heaps
        while len(self.lower) > len(self.upper) + 1:
            heappush(self.upper, -heappop(self.lower))
        while len(self.upper) > len(self.lower):
            heappush(self.lower, -heappop(self.upper))
            
    def find_median(self) -> float:
        if len(self.lower) > len(self.upper):
            return -self.lower[0]
        return (-self.lower[0] + self.upper[0]) / 2.0`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'Which operation in Python\'s heapq module provides the most efficient way to build a heap from an existing list?',
      options: [
        'Repeatedly calling heappush()',
        'Using heapify()',
        'Sorting the list first',
        'Using a list comprehension',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. While this works, it takes O(n log n) time.',
        'Correct! heapify() builds the heap in O(n) time by cleverly working from the bottom up.',
        'Incorrect. Sorting takes O(n log n) time and is unnecessary.',
        'Incorrect. This wouldn\'t maintain the heap property.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};

const edgeCasesData: LessonContent = {
  title: 'Mastering Edge Cases in Heap Operations',
  content: `<p>
Understanding edge cases in heap operations is like being a skilled pilot who knows how to handle not just normal flying conditions, but also extreme weather, equipment failures, and emergency situations. Just as a pilot's thorough preparation for these scenarios ensures safe flights, properly handling heap edge cases ensures our code remains robust and reliable even in unusual situations.
</p>

<h3><u>Understanding Edge Cases</u></h3>
<p>
Let's explore the critical edge cases that every heap implementation needs to handle. Think of these as the corner scenarios where normal operations might break down if we're not careful. It's similar to how a bridge needs extra reinforcement at its endpoints – these are the points where our standard assumptions might not hold.
</p>

<div class="visualization">
<svg viewBox="0 0 800 400">
  <!-- Edge Cases Overview -->
  <g transform="translate(50,20)">
    <text x="0" y="0" font-size="14" fill="black">Common Edge Cases</text>
    
    <!-- Empty Heap -->
    <g transform="translate(0,30)">
      <rect width="200" height="100" fill="#E3F2FD" rx="5"/>
      <text x="10" y="20" font-size="12">Empty Heap</text>
      <line x1="50" y1="40" x2="150" y2="40" stroke="#1976D2" stroke-dasharray="5,5"/>
      <text x="10" y="60" font-size="10">• No elements to remove</text>
      <text x="10" y="80" font-size="10">• No root element</text>
      <text x="10" y="100" font-size="10">• Undefined min/max</text>
    </g>
    
    <!-- Single Element -->
    <g transform="translate(250,30)">
      <rect width="200" height="100" fill="#E8F5E9" rx="5"/>
      <text x="10" y="20" font-size="12">Single Element</text>
      <circle cx="100" cy="60" r="15" fill="#388E3C"/>
      <text x="95" y="65" font-size="10" fill="white">5</text>
      <text x="10" y="90" font-size="10">Special case for remove</text>
    </g>
    
    <!-- Duplicate Values -->
    <g transform="translate(500,30)">
      <rect width="200" height="100" fill="#FFF3E0" rx="5"/>
      <text x="10" y="20" font-size="12">Duplicate Values</text>
      <circle cx="100" cy="40" r="15" fill="#E64A19"/>
      <circle cx="70" cy="70" r="15" fill="#E64A19"/>
      <circle cx="130" cy="70" r="15" fill="#E64A19"/>
      <text x="95" y="45" font-size="10" fill="white">5</text>
      <text x="65" y="75" font-size="10" fill="white">5</text>
      <text x="125" y="75" font-size="10" fill="white">5</text>
      <line x1="100" y1="55" x2="70" y2="55" stroke="black"/>
      <line x1="100" y1="55" x2="130" y2="55" stroke="black"/>
    </g>
  </g>

  <!-- Edge Case Handling -->
  <g transform="translate(50,150)">
    <text x="0" y="0" font-size="14" fill="black">Edge Case Handling</text>
    <rect x="0" y="20" width="700" height="200" fill="#FAFAFA" rx="5"/>
    <text x="10" y="40" font-size="12">Critical Checks and Actions:</text>
    <text x="10" y="70" font-size="10">1. Pre-operation validation</text>
    <text x="10" y="90" font-size="10">2. Boundary condition handling</text>
    <text x="10" y="110" font-size="10">3. Error reporting</text>
    <text x="10" y="130" font-size="10">4. State maintenance</text>
    
    <!-- Error Handling Example -->
    <g transform="translate(350,40)">
      <rect width="300" height="150" fill="#FFEBEE" rx="5"/>
      <text x="10" y="20" font-size="10">Example Error Handling:</text>
      <text x="10" y="40" font-size="10">if heap is empty:</text>
      <text x="30" y="60" font-size="10">throw HeapEmptyError</text>
      <text x="10" y="80" font-size="10">if value is None:</text>
      <text x="30" y="100" font-size="10">throw InvalidValueError</text>
    </g>
  </g>
</svg>
</div>

<h3><u>Critical Edge Cases</u></h3>
<p>
Let's examine each crucial edge case and understand why it needs special handling:
</p>

<p>
1. <strong>Empty Heap Operations:</strong> This is like trying to take something from an empty container – we need to handle the situation gracefully rather than assuming there's always something there. Key considerations include:
   - Attempting to remove elements
   - Trying to peek at the top element
   - Checking heap properties
</p>

<p>
2. <strong>Single Element State:</strong> When a heap contains exactly one element, it represents a special transitional state. Like a bridge that's supporting exactly one car, the rules are simpler but still need careful handling. We need to consider:
   - Removal operations leading to empty state
   - Heap property maintenance
   - Parent-child relationship handling
</p>

<p>
3. <strong>Duplicate Values:</strong> When multiple elements have the same value, it's like having identical packages that need to be organized. We must ensure:
   - Consistent ordering behavior
   - Proper removal sequence
   - Heap property maintenance
</p>

<h3><u>Implementation Considerations</u></h3>
<p>
When implementing edge case handling, we should follow these key principles:
</p>

<p>
1. <strong>Defensive Programming:</strong> Always validate inputs and heap state before operations. This is like checking your equipment before starting a challenging task.
</p>

<p>
2. <strong>Clear Error Messages:</strong> Provide informative error messages that help diagnose issues. Think of these as road signs warning drivers of potential hazards.
</p>

<p>
3. <strong>State Consistency:</strong> Ensure the heap remains in a valid state even after handling edge cases. This is similar to maintaining building integrity during repairs.
</p>

<p>
4. <strong>Performance Considerations:</strong> Edge case handling shouldn't significantly impact the performance of normal operations. It's like having emergency procedures that don't interfere with regular operations.
</p>`,
  codeExample: `class RobustHeap:
    """
    Heap implementation with comprehensive edge case handling.
    
    This implementation demonstrates proper handling of all
    critical edge cases while maintaining clear error reporting
    and state consistency.
    """
    class HeapEmptyError(Exception):
        """Raised when attempting operations on empty heap."""
        pass
    
    class HeapFullError(Exception):
        """Raised when heap reaches capacity (if limited)."""
        pass
    
    class InvalidValueError(Exception):
        """Raised when attempting to insert invalid values."""
        pass
    
    def __init__(self, max_size=None):
        """
        Initialize heap with optional size limit.
        
        Args:
            max_size: Optional maximum number of elements
        """
        self.heap = []
        self.max_size = max_size
        
    def push(self, value):
        """
        Add value to heap with comprehensive edge case handling.
        
        Edge cases handled:
        1. None values
        2. Capacity limits
        3. Type consistency
        4. Duplicate values
        """
        # Validate value
        if value is None:
            raise self.InvalidValueError(
                "Cannot insert None value into heap")
        
        # Check capacity
        if (self.max_size is not None and 
            len(self.heap) >= self.max_size):
            raise self.HeapFullError(
                f"Heap has reached maximum capacity of {self.max_size}")
        
        # Handle first insertion
        if not self.heap:
            self.heap.append(value)
            return
        
        # Normal insertion with duplicate handling
        self.heap.append(value)
        self._bubble_up_with_duplicates(len(self.heap) - 1)
        
    def pop(self):
        """
        Remove and return minimum value with edge case handling.
        
        Edge cases handled:
        1. Empty heap
        2. Single element
        3. Duplicate values
        """
        if not self.heap:
            raise self.HeapEmptyError("Cannot pop from empty heap")
        
        # Handle single element case
        if len(self.heap) == 1:
            return self.heap.pop()
        
        # Normal case
        min_val = self.heap[0]
        self.heap[0] = self.heap.pop()
        self._sink_down_with_duplicates(0)
        
        return min_val
        
    def peek(self):
        """
        Return minimum value without removing it.
        
        Edge cases handled:
        1. Empty heap
        2. None values
        """
        if not self.heap:
            raise self.HeapEmptyError("Cannot peek empty heap")
        
        return self.heap[0]
        
    def _bubble_up_with_duplicates(self, index):
        """
        Bubble up handling duplicate values consistently.
        
        For duplicate values, maintains insertion order to
        ensure consistent behavior.
        """
        current = self.heap[index]
        
        while index > 0:
            parent_idx = (index - 1) // 2
            parent = self.heap[parent_idx]
            
            # Stop if parent is strictly less (handles duplicates)
            if parent < current:
                break
                
            # Move parent down
            self.heap[index] = parent
            index = parent_idx
            
        self.heap[index] = current
        
    def _sink_down_with_duplicates(self, index):
        """
        Sink down handling duplicate values consistently.
        
        For duplicate values, maintains heap property while
        ensuring deterministic behavior.
        """
        size = len(self.heap)
        current = self.heap[index]
        
        while True:
            smallest = index
            left = 2 * index + 1
            right = 2 * index + 2
            
            # Check left child
            if left < size and self.heap[left] < self.heap[smallest]:
                smallest = left
                
            # Check right child
            if right < size and self.heap[right] < self.heap[smallest]:
                smallest = right
                
            if smallest == index:
                break
                
            self.heap[index] = self.heap[smallest]
            index = smallest
            
        self.heap[index] = current
        
    def is_empty(self):
        """Safe empty state check."""
        return len(self.heap) == 0
        
    def size(self):
        """Safe size access."""
        return len(self.heap)
        
    def clear(self):
        """Safe heap clearing."""
        self.heap = []`,
  exercises: [
    {
      prompt: 'Implement a heap method that efficiently handles merging two heaps that might contain duplicate values while properly handling all edge cases.',
      initialCode: `def merge_heaps(heap1, heap2):
    """
    Merge two heaps maintaining heap properties.
    Handle all edge cases including:
    - Empty heaps
    - Single element heaps
    - Duplicate values
    - Size limits
    
    Args:
        heap1, heap2: Heaps to merge
    Returns:
        New heap containing all elements
    """
    # Implement your solution here
    pass`,
      solution: `def merge_heaps(heap1, heap2):
    """
    Merge two heaps with comprehensive edge case handling.
    
    Time Complexity: O((n+m) log(n+m))
    Space Complexity: O(n+m)
    where n, m are sizes of input heaps
    """
    # Handle empty heap cases
    if not heap1.heap:
        return heap2
    if not heap2.heap:
        return heap1
        
    # Create new heap for result
    merged = RobustHeap()
    
    # Check combined size if either has limit
    if (heap1.max_size is not None or 
        heap2.max_size is not None):
        total_size = len(heap1.heap) + len(heap2.heap)
        max_size = max(
            heap1.max_size or float('inf'),
            heap2.max_size or float('inf')
        )
        if total_size > max_size:
            raise HeapFullError(
                f"Merged size {total_size} exceeds limit {max_size}")
    
    # Merge elements maintaining heap property
    # Use heapify for efficiency
    merged.heap = heap1.heap + heap2.heap
    for i in range((len(merged.heap) - 2) // 2, -1, -1):
        merged._sink_down_with_duplicates(i)
    
    return merged`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Which approach is most appropriate for handling duplicate values in a heap?',
      options: [
        'Always reject duplicate values',
        'Allow duplicates but provide no guarantees about their relative order',
        'Maintain stable ordering for duplicates using additional metadata',
        'Convert duplicates to unique values',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Rejecting duplicates limits heap functionality for valid use cases.',
        'Correct! Standard heap properties only specify parent-child relationships. Attempting to maintain specific ordering for duplicates adds unnecessary complexity.',
        'Incorrect. While possible, this adds overhead and complexity not required by heap properties.',
        'Incorrect. Modifying values could change the intended behavior of the heap.',
      ],
      difficulty: Difficulty.Intermediate,
    }
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
};

export const heapLessonsTab: LessonsTab = {
  curriculum: heapCurriculum,
  lessons: heapLessons,
};
