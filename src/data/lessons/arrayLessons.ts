import { Difficulty } from '@/common/commonConcept';
import { Curriculum, LessonContent, LessonsTab, PriorityLevel } from '@/common/commonLesson';

const arrayCurriculum: Curriculum = {
  title: 'Array Curriculum',
  description:
    'A focused guide to mastering essential array operations and algorithms for coding interviews',
  sections: [
    {
      id: 1,
      title: 'Array Fundamentals',
      topics: [
        {
          id: 'array-concepts',
          title: 'Array Concepts and Implementation',
          description: 'Understanding how arrays work in memory and their basic properties',
          priority: PriorityLevel.Essential
        },
        {
          id: 'array-complexity',
          title: 'Time and Space Complexity',
          description: 'Understanding the performance characteristics of array operations',
          priority: PriorityLevel.Essential
        },
        {
          id: 'array-initialization',
          title: 'Array Creation and Initialization',
          description: 'Different ways to create and initialize arrays with best practices',
          priority: PriorityLevel.Essential
        },
        {
          id: 'array-traversal',
          title: 'Array Traversal Techniques',
          description: 'Methods for iterating through arrays efficiently',
          priority: PriorityLevel.Essential
        },
        {
          id: 'array-memory',
          title: 'Memory Management',
          description: 'Understanding dynamic arrays, resizing, and memory allocation strategies',
          priority: PriorityLevel.Important
        }
      ],
    },
    {
      id: 2,
      title: 'Basic Array Operations',
      topics: [
        {
          id: 'array-insert-delete',
          title: 'Insertion and Deletion',
          description: 'Fundamental operations for modifying array contents',
          priority: PriorityLevel.Essential
        },
        {
          id: 'array-searching',
          title: 'Searching Elements',
          description: 'Basic and advanced searching techniques in arrays',
          priority: PriorityLevel.Essential
        },
        {
          id: 'array-slicing',
          title: 'Array Slicing',
          description: 'Working with subarrays and array segments',
          priority: PriorityLevel.Important
        },
        {
          id: 'array-modification',
          title: 'In-place Modifications',
          description: 'Techniques for modifying arrays without extra space',
          priority: PriorityLevel.Essential
        }
      ],
    },
    {
      id: 3,
      title: 'Array Sorting and Ordering',
      topics: [
        {
          id: 'basic-sorting',
          title: 'Basic Sorting Concepts',
          description: 'Understanding fundamental sorting approaches',
          priority: PriorityLevel.Essential
        },
        {
          id: 'builtin-sorting',
          title: 'Built-in Sorting Methods',
          description: 'Effective use of language-provided sorting capabilities',
          priority: PriorityLevel.Essential
        },
        {
          id: 'custom-sorting',
          title: 'Custom Sort Conditions',
          description: 'Implementing specific sorting requirements',
          priority: PriorityLevel.Important
        }
      ],
    },
    {
      id: 4,
      title: 'Two-Pointer Patterns',
      topics: [
        {
          id: 'two-pointer-basics',
          title: 'Two-Pointer Fundamentals',
          description: 'Basic two-pointer techniques and applications',
          priority: PriorityLevel.Essential
        },
        {
          id: 'two-pointer-variations',
          title: 'Two-Pointer Variations',
          description: 'Different ways to apply two-pointer technique',
          priority: PriorityLevel.Essential
        },
        {
          id: 'array-partitioning',
          title: 'Array Partitioning',
          description: 'Partitioning arrays using two-pointer approach',
          priority: PriorityLevel.Important
        },
        {
          id: 'dutch-flag',
          title: 'Dutch National Flag Algorithm',
          description: 'Specialized three-way partitioning technique for array sorting',
          priority: PriorityLevel.Important
        }
      ],
    },
    {
      id: 5,
      title: 'Sliding Window Technique',
      topics: [
        {
          id: 'sliding-window-concept',
          title: 'Sliding Window Basics',
          description: 'Core concepts of the sliding window technique',
          priority: PriorityLevel.Essential
        },
        {
          id: 'window-variations',
          title: 'Window Size Variations',
          description: 'Fixed and dynamic window size applications',
          priority: PriorityLevel.Important
        }
      ],
    },
    {
      id: 6,
      title: 'Prefix Sums',
      topics: [
        {
          id: 'prefix-sum-basics',
          title: 'Prefix Sum Fundamentals',
          description: 'Building and using prefix sum arrays',
          priority: PriorityLevel.Essential
        },
        {
          id: 'range-queries',
          title: 'Range Query Operations',
          description: 'Solving range-based problems using prefix sums',
          priority: PriorityLevel.Important
        }
      ],
    },
    {
      id: 7,
      title: 'Common Interview Patterns',
      topics: [
        {
          id: 'kadane-algorithm',
          title: "Kadane's Algorithm",
          description: 'Solving maximum subarray problems',
          priority: PriorityLevel.Essential
        },
        {
          id: 'stock-patterns',
          title: 'Stock Buy/Sell Problems',
          description: 'Solving common stock price array problems',
          priority: PriorityLevel.Essential
        },
        {
          id: 'subarray-problems',
          title: 'Subarray Patterns',
          description: 'Common subarray problem-solving techniques',
          priority: PriorityLevel.Important
        },
        {
          id: 'array-rotation',
          title: 'Array Rotation Techniques',
          description: 'Efficient methods for rotating arrays with different space-time tradeoffs',
          priority: PriorityLevel.Important
        },
        {
          id: 'majority-element',
          title: 'Majority Element Algorithms',
          description: "Boyer-Moore's voting algorithm and related techniques",
          priority: PriorityLevel.Important
        }
      ],
    },
    {
      id: 8,
      title: 'Matrix Operations',
      topics: [
        {
          id: 'matrix-traversal',
          title: 'Matrix Traversal Patterns',
          description: 'Different ways to traverse 2D arrays including spiral, diagonal, and zigzag patterns',
          priority: PriorityLevel.Essential
        },
        {
          id: 'matrix-transformation',
          title: 'Matrix Transformations',
          description: 'Rotation, transposition, and other common matrix operations',
          priority: PriorityLevel.Important
        }
      ],
    }
  ],
} as const;

const arrayConceptsData: LessonContent = {
  title: 'Understanding Arrays: From Memory to Implementation',
  content: `Let's explore how arrays work at a fundamental level. Understanding arrays isn't just about knowing how to use them - it's about understanding how they're organized in memory and why they behave the way they do. This knowledge will help you write more efficient code and make better design decisions.

<h3>What Is an Array?</h3>

Think of an array like a row of mailboxes in an apartment building. Each mailbox (element) has its own number (index), and they're all arranged in a continuous line. This continuous arrangement is one of the most important characteristics of arrays.

<div class="visualization-container bg-white p-6 rounded-lg shadow-md my-8">
  <h4 class="text-center text-gray-700 mb-4">Memory Layout of an Array</h4>
  <div class="flex flex-col space-y-4">
    <!-- Memory blocks visualization -->
    <div class="flex justify-center space-x-1">
      <div class="w-24 h-20 border-2 border-blue-400 rounded-lg flex flex-col items-center justify-center bg-blue-50">
        <div class="text-sm text-gray-600">Address 1000</div>
        <div class="font-bold">42</div>
      </div>
      <div class="w-24 h-20 border-2 border-blue-400 rounded-lg flex flex-col items-center justify-center bg-blue-50">
        <div class="text-sm text-gray-600">Address 1004</div>
        <div class="font-bold">17</div>
      </div>
      <div class="w-24 h-20 border-2 border-blue-400 rounded-lg flex flex-col items-center justify-center bg-blue-50">
        <div class="text-sm text-gray-600">Address 1008</div>
        <div class="font-bold">89</div>
      </div>
      <div class="w-24 h-20 border-2 border-blue-400 rounded-lg flex flex-col items-center justify-center bg-blue-50">
        <div class="text-sm text-gray-600">Address 1012</div>
        <div class="font-bold">55</div>
      </div>
    </div>
    <div class="text-center text-gray-600">Each element occupies a fixed amount of contiguous memory</div>
  </div>
</div>

<h3>Core Properties of Arrays</h3>

Arrays have several fundamental properties that make them unique among data structures. Let's explore each one:

1. Fixed Size in Memory
\`\`\`python
# In Python, while lists can grow dynamically, underlying memory blocks are still fixed
numbers = [0] * 5  # Creates array of 5 zeros
print(f"Initial size: {len(numbers)} elements")

# Memory is reallocated when array grows
numbers.append(6)  # Python handles memory reallocation automatically
print(f"New size: {len(numbers)} elements")
\`\`\`

2. Constant-Time Access
\`\`\`python
def demonstrate_instant_access(array, index):
    """
    Shows how arrays provide O(1) access time regardless of size.
    Memory address = base_address + (index * element_size)
    """
    element = array[index]  # Direct computation of memory address
    print(f"Instantly accessed element at index {index}: {element}")

# Example usage
data = [10, 20, 30, 40, 50]
demonstrate_instant_access(data, 3)  # Just as fast for any valid index
\`\`\`

3. Memory Efficiency
\`\`\`python
import sys

def show_memory_usage():
    """Demonstrates array memory efficiency."""
    # Create arrays of different sizes
    small_array = [1, 2, 3, 4, 5]
    large_array = list(range(1000))
    
    # Calculate memory per element
    small_size = sys.getsizeof(small_array) / len(small_array)
    large_size = sys.getsizeof(large_array) / len(large_array)
    
    print(f"Memory per element (small array): {small_size:.2f} bytes")
    print(f"Memory per element (large array): {large_size:.2f} bytes")

show_memory_usage()
\`\`\`

<h3>Array Implementation in Python</h3>

Let's create a simplified array implementation to understand how arrays work under the hood:

\`\`\`python
class SimpleArray:
    def __init__(self, size):
        """
        Initialize fixed-size array.
        
        Args:
            size: Number of elements array can hold
        """
        self.size = size
        self.data = [None] * size  # Preallocate all needed space
        
    def get(self, index):
        """
        Get element at index with bounds checking.
        
        Time Complexity: O(1)
        """
        if 0 <= index < self.size:
            return self.data[index]
        raise IndexError("Array index out of bounds")
        
    def set(self, index, value):
        """
        Set element at index with bounds checking.
        
        Time Complexity: O(1)
        """
        if 0 <= index < self.size:
            self.data[index] = value
        else:
            raise IndexError("Array index out of bounds")
            
    def __len__(self):
        """Get array size."""
        return self.size
\`\`\`

<h3>Memory Management and Performance</h3>

Understanding how arrays manage memory helps us write more efficient code. Here are some key concepts:

<div class="performance-characteristics bg-white p-6 rounded-lg shadow-md my-8">
  <table class="w-full border-collapse">
    <thead class="bg-gray-50">
      <tr>
        <th class="border p-3 text-left">Operation</th>
        <th class="border p-3 text-left">Time Complexity</th>
        <th class="border p-3 text-left">Explanation</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border p-3">Access by Index</td>
        <td class="border p-3">O(1)</td>
        <td class="border p-3">Direct memory address calculation</td>
      </tr>
      <tr>
        <td class="border p-3">Insert/Delete at Start</td>
        <td class="border p-3">O(n)</td>
        <td class="border p-3">Requires shifting elements</td>
      </tr>
      <tr>
        <td class="border p-3">Insert/Delete at End</td>
        <td class="border p-3">O(1)*</td>
        <td class="border p-3">No shifting required</td>
      </tr>
    </tbody>
  </table>
  <p class="text-sm text-gray-600 mt-2">* Amortized time for dynamic arrays</p>
</div>

<h3>Practical Applications</h3>

Understanding array concepts helps us make better decisions about when and how to use arrays:

1. Use arrays when you need:
   - Fast access to elements by index
   - Memory efficiency
   - Sequential data storage
   - Fixed-size data structures

2. Consider alternatives when you need:
   - Frequent insertions/deletions at arbitrary positions
   - Dynamic size changes
   - Non-sequential access patterns

\`\`\`python
# Example: Choosing between array and linked list
def demonstrate_array_efficiency():
    """Shows when arrays are most efficient."""
    # Fast random access - Arrays excel here
    numbers = list(range(1000000))
    
    # Quick access time regardless of position
    first = numbers[0]              # Fast
    middle = numbers[500000]        # Just as fast
    last = numbers[999999]          # Still fast
    
    return first, middle, last
\`\`\`

<h3>Understanding Dynamic Arrays</h3>

Python's lists are actually dynamic arrays, which means they can grow and shrink as needed. Let's see how this works:

\`\`\`python
def show_dynamic_growth():
    """Demonstrates how Python lists grow."""
    numbers = []
    sizes = []
    
    for i in range(32):
        sizes.append(sys.getsizeof(numbers))
        numbers.append(i)
        
    print("Size progression:", sizes[::4])
    # Notice how size increases in chunks to amortize growth cost
\`\`\``,

  exercises: [
    {
      prompt: 'Implement a function that efficiently rotates an array by k positions without using extra space. For example, rotating [1,2,3,4,5] by 2 positions should give [4,5,1,2,3].',
      initialCode: `def rotate_array(array, k):
    """
    Rotate array by k positions without using extra space.
    
    Args:
        array: List to rotate
        k: Number of positions to rotate by
    """
    # Your implementation here
    pass`,
      solution: `def rotate_array(array, k):
    """
    Rotate array by k positions without using extra space.
    
    Args:
        array: List to rotate
        k: Number of positions to rotate by
        
    Time Complexity: O(n)
    Space Complexity: O(1)
    """
    if not array:
        return
        
    # Normalize k to array length
    k = k % len(array)
    if k == 0:
        return
    
    def reverse(start, end):
        """Helper function to reverse portion of array."""
        while start < end:
            array[start], array[end] = array[end], array[start]
            start += 1
            end -= 1
    
    # Example: [1,2,3,4,5] rotate by 2
    # Step 1: Reverse all - [5,4,3,2,1]
    # Step 2: Reverse first k - [4,5,3,2,1]
    # Step 3: Reverse rest - [4,5,1,2,3]
    
    # Reverse entire array
    reverse(0, len(array) - 1)
    # Reverse first k elements
    reverse(0, k - 1)
    # Reverse remaining elements
    reverse(k, len(array) - 1)`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Create a fixed-size circular buffer implementation using an array. The buffer should support add and remove operations while maintaining O(1) time complexity.',
      initialCode: `class CircularBuffer:
    """
    Fixed-size circular buffer implementation.
    """
    def __init__(self, size):
        # Your implementation here
        pass
        
    def add(self, item):
        # Your implementation here
        pass
        
    def remove(self):
        # Your implementation here
        pass`,
      solution: `class CircularBuffer:
    """
    Fixed-size circular buffer implementation.
    
    Time Complexity:
        - add: O(1)
        - remove: O(1)
    Space Complexity: O(n) where n is buffer size
    """
    def __init__(self, size):
        self.size = size
        self.buffer = [None] * size
        self.head = 0  # Remove from here
        self.tail = 0  # Add here
        self.count = 0
        
    def add(self, item):
        """Add item to buffer."""
        if self.count >= self.size:
            raise BufferError("Buffer is full")
            
        self.buffer[self.tail] = item
        self.tail = (self.tail + 1) % self.size
        self.count += 1
        
    def remove(self):
        """Remove and return oldest item."""
        if self.count <= 0:
            raise BufferError("Buffer is empty")
            
        item = self.buffer[self.head]
        self.head = (self.head + 1) % self.size
        self.count -= 1
        return item
        
    def is_empty(self):
        """Check if buffer is empty."""
        return self.count == 0
        
    def is_full(self):
        """Check if buffer is full."""
        return self.count == self.size`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why can arrays provide constant-time O(1) access to any element?',
      options: [
        'Because they store elements in sorted order',
        'Because they use a hash function to locate elements',
        'Because they can calculate exact memory locations using the index',
        'Because they maintain a lookup table of element positions'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Sorting is not related to access time in arrays.',
        'Incorrect. Arrays don\'t use hash functions for element access.',
        'Correct! Arrays can instantly calculate an element\'s memory address using: base_address + (index × element_size).',
        'Incorrect. Arrays don\'t need lookup tables because of their continuous memory layout.'
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What happens to existing elements when an array needs to grow beyond its current capacity?',
      options: [
        'They stay in place and new elements are stored elsewhere',
        'They are copied to a new, larger memory location',
        'They are compressed to make room for new elements',
        'They are automatically linked to a new array'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Arrays must maintain continuous memory allocation.',
        'Correct! When an array grows, a new larger block of memory is allocated and all existing elements are copied over.',
        'Incorrect. Array elements maintain their original size.',
        'Incorrect. Arrays don\'t use linking mechanisms like linked lists.'
      ],
      difficulty: Difficulty.Advanced,
    }
  ]
};

const arrayComplexityData: LessonContent = {
  title: 'Understanding Array Complexity: A Journey Through Performance',
  content: `Let's explore how arrays perform in terms of time and memory usage. Understanding these concepts will help you write more efficient code and make better decisions about when to use arrays. We'll start with basic concepts and build up to more complex scenarios.

<h3>Introduction to Array Complexity</h3>

Think of an array like a bookshelf where each book represents a piece of data. Different operations with these books (accessing, adding, removing) require different amounts of effort - just like array operations have different computational costs. Let's explore these costs systematically.

<h3>Time Complexity: Understanding Operation Costs</h3>

When we work with arrays, different operations require different amounts of time. Let's break this down with real examples:

<div class="visualization-container bg-white p-6 rounded-lg shadow-md my-8">
  <h4 class="text-center text-gray-700 mb-4">Array Operation Costs</h4>
  <table class="w-full border-collapse">
    <thead class="bg-gray-50">
      <tr>
        <th class="border p-3 text-left">Operation</th>
        <th class="border p-3 text-left">Time Complexity</th>
        <th class="border p-3 text-left">Real-World Analogy</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border p-3">Access by Index</td>
        <td class="border p-3">O(1)</td>
        <td class="border p-3">Finding a book when you know its exact shelf position</td>
      </tr>
      <tr>
        <td class="border p-3">Insert/Delete at Start</td>
        <td class="border p-3">O(n)</td>
        <td class="border p-3">Adding a book at the start requires moving all other books</td>
      </tr>
      <tr>
        <td class="border p-3">Insert/Delete at End</td>
        <td class="border p-3">O(1)*</td>
        <td class="border p-3">Adding a book to the end of the shelf</td>
      </tr>
      <tr>
        <td class="border p-3">Search (Unsorted)</td>
        <td class="border p-3">O(n)</td>
        <td class="border p-3">Looking for a book by checking each one on the shelf</td>
      </tr>
    </tbody>
  </table>
  <p class="text-sm text-gray-600 mt-2">* Amortized time for dynamic arrays</p>
</div>

Let's see these complexities in action with practical examples:

\`\`\`python
def demonstrate_array_complexities(array):
    """
    Demonstrate different array operation complexities.
    
    Args:
        array: List to perform operations on
        
    This example shows how different operations affect performance
    as the array size grows.
    """
    import time
    
    # O(1) - Constant time access
    start_time = time.time()
    middle_element = array[len(array) // 2]
    access_time = time.time() - start_time
    print(f"Access time (O(1)): {access_time:.8f} seconds")
    
    # O(n) - Linear time insertion at start
    start_time = time.time()
    array.insert(0, 'new_element')
    insert_start_time = time.time() - start_time
    print(f"Insert at start time (O(n)): {insert_start_time:.8f} seconds")
    
    # O(1) - Constant time insertion at end
    start_time = time.time()
    array.append('new_element')
    insert_end_time = time.time() - start_time
    print(f"Insert at end time (O(1)): {insert_end_time:.8f} seconds")

# Test with different array sizes
small_array = list(range(1000))
large_array = list(range(100000))

print("Small Array Performance:")
demonstrate_array_complexities(small_array.copy())
print("\nLarge Array Performance:")
demonstrate_array_complexities(large_array.copy())
\`\`\`

<h3>Understanding Space Complexity</h3>

Space complexity refers to how much memory an array operation needs. Let's explore the memory requirements of different array operations:

\`\`\`python
def analyze_space_requirements():
    """
    Demonstrate space complexity of different array operations.
    
    This example shows how memory usage changes with different operations.
    """
    import sys
    
    # Base memory for empty list
    empty_list = []
    base_size = sys.getsizeof(empty_list)
    print(f"Empty list size: {base_size} bytes")
    
    # Memory growth with elements
    sizes = []
    numbers = []
    for i in range(10):
        numbers.append(i)
        sizes.append(sys.getsizeof(numbers))
        
    print("\nMemory growth pattern:")
    for i, size in enumerate(sizes):
        print(f"Size with {i+1} elements: {size} bytes")
        
    # Space complexity of common operations
    original = list(range(5))
    # Slicing creates a new array - O(n) space
    sliced = original[:]
    # List comprehension creates a new array - O(n) space
    doubled = [x * 2 for x in original]
    
    print("\nOperation space requirements:")
    print(f"Original array: {sys.getsizeof(original)} bytes")
    print(f"Sliced array: {sys.getsizeof(sliced)} bytes")
    print(f"Comprehension result: {sys.getsizeof(doubled)} bytes")
\`\`\`

<h3>Performance Patterns and Best Practices</h3>

Understanding complexity helps us write more efficient code. Here are key patterns to remember:

<div class="best-practices bg-white p-6 rounded-lg shadow-md my-8">
  <h4 class="text-gray-700 mb-4">Efficient Array Usage Patterns</h4>
  
  <h5 class="font-semibold mb-2">1. When Performance Matters Most</h5>
  \`\`\`python
  # Efficient pattern for building large arrays
  def efficient_array_building(n):
      """Build array efficiently by pre-allocating space."""
      # Better: Pre-allocate space
      result = [None] * n
      for i in range(n):
          result[i] = i * 2
      return result
      
      # Worse: Grow array incrementally
      # result = []
      # for i in range(n):
      #     result.append(i * 2)
      # return result
  \`\`\`
  
  <h5 class="font-semibold mt-4 mb-2">2. Memory-Efficient Operations</h5>
  \`\`\`python
  # Memory-efficient array processing
  def process_large_array(array):
      """Process array elements without extra space."""
      for i in range(len(array)):
          # Process in place
          array[i] = array[i] * 2
      # No extra array created
  \`\`\`
</div>

<h3>Making Complexity Trade-offs</h3>

Sometimes we need to balance time and space complexity. Here's a practical example:

\`\`\`python
def find_duplicates(array):
    """
    Find duplicate elements in array.
    
    We can trade space for time:
    1. O(n²) time, O(1) space - Check all pairs
    2. O(n) time, O(n) space - Use a hash set
    """
    # Approach 1: Time O(n²), Space O(1)
    def find_duplicates_space_efficient():
        duplicates = []
        for i in range(len(array)):
            for j in range(i + 1, len(array)):
                if array[i] == array[j] and array[i] not in duplicates:
                    duplicates.append(array[i])
        return duplicates
    
    # Approach 2: Time O(n), Space O(n)
    def find_duplicates_time_efficient():
        seen = set()
        duplicates = []
        for item in array:
            if item in seen and item not in duplicates:
                duplicates.append(item)
            seen.add(item)
        return duplicates
    
    return {
        'space_efficient': find_duplicates_space_efficient(),
        'time_efficient': find_duplicates_time_efficient()
    }
\`\`\``,

  exercises: [
    {
      prompt: `Analyze the time and space complexity of merging two sorted arrays into a single sorted array. Implement the merge function and explain your complexity analysis.`,
      initialCode: `def merge_sorted_arrays(arr1, arr2):
    """
    Merge two sorted arrays into a single sorted array.
    
    Args:
        arr1: First sorted array
        arr2: Second sorted array
    Returns:
        Merged sorted array
        
    Explain the complexity of your solution in comments
    """
    # Your implementation here
    pass`,
      solution: `def merge_sorted_arrays(arr1, arr2):
    """
    Merge two sorted arrays into a single sorted array.
    
    Args:
        arr1: First sorted array
        arr2: Second sorted array
    Returns:
        Merged sorted array
        
    Time Complexity: O(n + m) where n and m are lengths of input arrays
    - We need to process each element exactly once
    
    Space Complexity: O(n + m)
    - We need to create a new array to store the merged result
    - The size of result is sum of input array lengths
    """
    # Initialize result array and pointers
    result = []
    i = j = 0
    
    # Compare elements from both arrays
    while i < len(arr1) and j < len(arr2):
        if arr1[i] <= arr2[j]:
            result.append(arr1[i])
            i += 1
        else:
            result.append(arr2[j])
            j += 1
    
    # Add remaining elements from arr1, if any
    while i < len(arr1):
        result.append(arr1[i])
        i += 1
    
    # Add remaining elements from arr2, if any
    while j < len(arr2):
        result.append(arr2[j])
        j += 1
    
    return result

# Example usage:
arr1 = [1, 3, 5, 7]
arr2 = [2, 4, 6, 8]
merged = merge_sorted_arrays(arr1, arr2)
print(f"Merged array: {merged}")  # [1, 2, 3, 4, 5, 6, 7, 8]`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Implement an efficient solution for rotating an array k positions to the right. Analyze both time and space complexity of your solution.`,
      initialCode: `def rotate_array(array, k):
    """
    Rotate array k positions to the right.
    
    Args:
        array: List to rotate
        k: Number of positions to rotate by
    Returns:
        Rotated array
        
    Analyze and explain the complexity of your solution
    """
    # Your implementation here
    pass`,
      solution: `def rotate_array(array, k):
    """
    Rotate array k positions to the right using reversal algorithm.
    
    Args:
        array: List to rotate
        k: Number of positions to rotate by
    Returns:
        Rotated array
        
    Time Complexity: O(n)
    - We perform three reversals, each taking O(n/2) = O(n) time
    - Total time is O(n)
    
    Space Complexity: O(1)
    - We modify the array in place
    - Only use a constant amount of extra space
    """
    if not array or k == 0:
        return array
        
    # Normalize k to array length
    k = k % len(array)
    
    def reverse(start, end):
        """Helper function to reverse array portion."""
        while start < end:
            array[start], array[end] = array[end], array[start]
            start += 1
            end -= 1
    
    # Rotate entire array
    reverse(0, len(array) - 1)
    # Rotate first k elements
    reverse(0, k - 1)
    # Rotate remaining elements
    reverse(k, len(array) - 1)
    
    return array

# Example usage:
arr = [1, 2, 3, 4, 5]
k = 2
rotated = rotate_array(arr.copy(), k)
print(f"Original: {arr}")
print(f"Rotated {k} positions: {rotated}")  # [4, 5, 1, 2, 3]`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why is accessing an element by index in an array O(1) time complexity?',
      options: [
        'Because arrays are always sorted',
        'Because the memory address can be calculated directly using the index',
        'Because arrays maintain a hash table for quick lookups',
        'Because the computer caches all array elements'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Array access time is independent of whether the array is sorted.',
        'Correct! Arrays store elements contiguously in memory, so we can calculate any element\'s exact location using: base_address + (index × element_size).',
        'Incorrect. Arrays don\'t use hash tables; they use direct memory addressing.',
        'Incorrect. While caching can improve performance, it\'s not why array access is O(1).'
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the space complexity of creating a slice of an array (e.g., array[1:4])?',
      options: [
        'O(1) because it only stores the start and end indices',
        'O(n) where n is the size of the original array',
        'O(k) where k is the size of the slice',
        'O(log n) where n is the size of the original array'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Slicing creates a new array with the selected elements.',
        'Incorrect. The space needed is proportional to the slice size, not the original array size.',
        'Correct! Creating a slice requires new space proportional to the number of elements in the slice.',
        'Incorrect. Slice space complexity is linear, not logarithmic.'
      ],
      difficulty: Difficulty.Advanced,
    }
  ]
};

const arrayInitializationData: LessonContent = {
  title: 'Creating and Initializing Arrays: Understanding Your Options',
  content: `Let's explore the different ways to create and initialize arrays in Python, understanding when and why to use each approach. We'll start with simple methods and progress to more sophisticated techniques.

<h3>Understanding Array Creation</h3>

When we create an array in Python (technically called a list), we're asking Python to reserve a continuous block of memory to store our data. Think of it like reserving a row of parking spaces - we need to decide how many spaces we need and what will go in each space.

<div class="visualization-container bg-white p-6 rounded-lg shadow-md my-8">
  <h4 class="text-center text-gray-700 mb-4">Memory Allocation During List Creation</h4>
  <div class="flex flex-col space-y-4">
    <!-- Empty list visualization -->
    <div>
      <p class="text-center mb-2">Empty List</p>
      <div class="flex justify-center">
        <div class="w-32 h-12 border-2 border-dashed border-gray-400 rounded flex items-center justify-center text-gray-500">
          [ ]
        </div>
      </div>
    </div>
    <!-- Pre-allocated list visualization -->
    <div>
      <p class="text-center mb-2">Pre-allocated List</p>
      <div class="flex justify-center space-x-1">
        <div class="w-16 h-12 border-2 border-blue-400 rounded flex items-center justify-center">None</div>
        <div class="w-16 h-12 border-2 border-blue-400 rounded flex items-center justify-center">None</div>
        <div class="w-16 h-12 border-2 border-blue-400 rounded flex items-center justify-center">None</div>
      </div>
    </div>
  </div>
</div>

<h3>Basic Initialization Methods</h3>

Let's explore the fundamental ways to create and initialize arrays in Python. Each method has its own use cases and advantages.

\`\`\`python
# Method 1: Direct Value Initialization
# Best when you know all values upfront
grades = [95, 88, 92, 87, 95]
print(f"Initial grades: {grades}")

# Method 2: Empty List Creation
# Best when adding elements dynamically
students = []
students.append("Alice")
students.append("Bob")
print(f"Student list: {students}")

# Method 3: List with Initial Size
# Best when you know the size but not the values
# Creates a list of None values
answers = [None] * 5  # [None, None, None, None, None]
print(f"Answer template: {answers}")

# Method 4: List Comprehension
# Best for creating lists based on computations
squares = [x * x for x in range(5)]  # [0, 1, 4, 9, 16]
print(f"Square numbers: {squares}")
\`\`\`

<h3>Advanced Initialization Patterns</h3>

As we work with more complex data, we often need more sophisticated initialization techniques. Let's explore these patterns:

\`\`\`python
def demonstrate_initialization_patterns():
    """Shows various advanced array initialization techniques."""
    
    # Pattern 1: Conditional Initialization
    # Creates list based on conditions
    even_squares = [x * x for x in range(10) if x % 2 == 0]
    print(f"Even squares: {even_squares}")
    
    # Pattern 2: Multi-dimensional Arrays
    # Creates a 3x3 grid
    grid = [[0 for _ in range(3)] for _ in range(3)]
    print(f"Grid:\n{grid[0]}\n{grid[1]}\n{grid[2]}")
    
    # Pattern 3: Initialization from Existing Data
    original = [1, 2, 3, 4, 5]
    doubled = [x * 2 for x in original]
    print(f"Doubled values: {doubled}")
    
    # Pattern 4: Dynamic Size with Generator
    # Memory efficient for large sequences
    large_sequence = list(range(1000))
    print(f"Large sequence size: {len(large_sequence)}")

# Run demonstrations
demonstrate_initialization_patterns()
\`\`\`

<h3>Common Pitfalls and Best Practices</h3>

When initializing arrays, there are several important considerations to keep in mind. Let's explore common mistakes and how to avoid them:

\`\`\`python
# Pitfall 1: Shallow vs Deep Copying
def demonstrate_copy_pitfall():
    """Shows the difference between shallow and deep copying."""
    # Wrong way - creates references to same inner list
    wrong_grid = [[0] * 3] * 3
    wrong_grid[0][0] = 1  # Changes all rows!
    print(f"Wrong grid:\n{wrong_grid}")
    
    # Right way - creates independent inner lists
    correct_grid = [[0 for _ in range(3)] for _ in range(3)]
    correct_grid[0][0] = 1  # Changes only first row
    print(f"Correct grid:\n{correct_grid}")

# Pitfall 2: Initialize with Default Values
def initialize_with_defaults():
    """Shows proper initialization with default values."""
    # Student records with default values
    students = [
        {
            'name': None,
            'grade': 0,
            'attendance': [],
        }
        for _ in range(3)
    ]
    return students

# Demonstrate pitfalls
demonstrate_copy_pitfall()
print("\nInitialized student records:", initialize_with_defaults())
\`\`\`

<h3>Performance Considerations</h3>

Different initialization methods have different performance characteristics. Let's examine them:

<div class="performance-table bg-white p-6 rounded-lg shadow-md my-8">
  <table class="w-full border-collapse">
    <thead class="bg-gray-50">
      <tr>
        <th class="border p-3 text-left">Method</th>
        <th class="border p-3 text-left">Time Complexity</th>
        <th class="border p-3 text-left">Space Complexity</th>
        <th class="border p-3 text-left">Best For</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border p-3">Direct Initialization</td>
        <td class="border p-3">O(n)</td>
        <td class="border p-3">O(n)</td>
        <td class="border p-3">Known values</td>
      </tr>
      <tr>
        <td class="border p-3">Empty + Append</td>
        <td class="border p-3">O(n)</td>
        <td class="border p-3">O(n)</td>
        <td class="border p-3">Dynamic growth</td>
      </tr>
      <tr>
        <td class="border p-3">List Comprehension</td>
        <td class="border p-3">O(n)</td>
        <td class="border p-3">O(n)</td>
        <td class="border p-3">Computed values</td>
      </tr>
      <tr>
        <td class="border p-3">Multiplication</td>
        <td class="border p-3">O(n)</td>
        <td class="border p-3">O(n)</td>
        <td class="border p-3">Fixed size, same value</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>Practical Examples</h3>

Let's look at some real-world scenarios where different initialization methods shine:

\`\`\`python
def create_gradebook(num_students, num_assignments):
    """
    Creates a gradebook with proper initialization.
    
    Args:
        num_students: Number of students
        num_assignments: Number of assignments
        
    Returns:
        Initialized gradebook with default values
    """
    # Create 2D array with default grade of -1 (ungraded)
    gradebook = [
        [-1 for _ in range(num_assignments)]
        for _ in range(num_students)
    ]
    
    return gradebook

def create_seating_chart(rows, seats_per_row):
    """
    Creates a seating chart for a classroom.
    
    Args:
        rows: Number of rows
        seats_per_row: Seats in each row
        
    Returns:
        Seating chart with None for empty seats
    """
    return [[None for _ in range(seats_per_row)] for _ in range(rows)]

# Example usage
gradebook = create_gradebook(3, 4)
seating = create_seating_chart(5, 6)
print("Gradebook:", gradebook)
print("Seating chart:", seating)
\`\`\``,

  exercises: [
    {
      prompt: 'Create a function that initializes a temperature tracking system for a week, with separate arrays for each day\'s hourly readings. Include proper default values and error handling.',
      initialCode: `def initialize_temperature_tracker(num_days=7):
    """
    Initialize a temperature tracking system.
    
    Args:
        num_days: Number of days to track (default 7)
    Returns:
        Nested array structure for temperature readings
    """
    # Your implementation here
    pass`,
      solution: `def initialize_temperature_tracker(num_days=7):
    """
    Initialize a temperature tracking system.
    
    Args:
        num_days: Number of days to track (default 7)
    Returns:
        Nested array structure for temperature readings
        
    Each day tracks 24 hours of temperatures, initialized to None
    Includes validation and error handling
    """
    if num_days <= 0:
        raise ValueError("Number of days must be positive")
    
    # Initialize 7 days, each with 24 hours of readings
    # Use None as default to indicate no reading taken
    temperature_data = [
        {
            'readings': [None] * 24,  # 24 hours
            'min_temp': None,
            'max_temp': None,
            'avg_temp': None
        }
        for _ in range(num_days)
    ]
    
    return temperature_data

# Example usage:
try:
    tracker = initialize_temperature_tracker()
    print(f"Initialized {len(tracker)} days of temperature tracking")
    print("First day structure:", tracker[0])
except ValueError as e:
    print(f"Error: {e}")`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement a function that creates a sparse matrix representation using nested arrays. The function should accept dimensions and a list of non-zero values with their positions.',
      initialCode: `def create_sparse_matrix(rows, cols, values):
    """
    Create a sparse matrix representation.
    
    Args:
        rows: Number of rows
        cols: Number of columns
        values: List of tuples (row, col, value) for non-zero elements
    Returns:
        Efficient sparse matrix representation
    """
    # Your implementation here
    pass`,
      solution: `def create_sparse_matrix(rows, cols, values):
    """
    Create a sparse matrix representation.
    
    Args:
        rows: Number of rows
        cols: Number of columns
        values: List of tuples (row, col, value) for non-zero elements
    Returns:
        Efficient sparse matrix representation
    
    Uses dictionary for efficient storage of non-zero values
    Includes validation and bounds checking
    """
    if rows <= 0 or cols <= 0:
        raise ValueError("Dimensions must be positive")
        
    # Initialize sparse matrix using dictionary
    matrix = {
        'dimensions': (rows, cols),
        'non_zero_elements': {},
        'num_elements': len(values)
    }
    
    # Add non-zero values
    for row, col, value in values:
        # Validate position
        if not (0 <= row < rows and 0 <= col < cols):
            raise ValueError(f"Position ({row}, {col}) out of bounds")
        if value != 0:  # Only store non-zero values
            matrix['non_zero_elements'][(row, col)] = value
    
    def get_value(row, col):
        """Helper method to get value at position."""
        return matrix['non_zero_elements'].get((row, col), 0)
    
    # Add method to matrix dictionary
    matrix['get_value'] = get_value
    
    return matrix

# Example usage:
try:
    # Create 3x3 sparse matrix with two non-zero values
    values = [(0, 0, 5), (1, 2, 3)]
    matrix = create_sparse_matrix(3, 3, values)
    print(f"Created {matrix['dimensions']} sparse matrix")
    print(f"Non-zero elements: {matrix['non_zero_elements']}")
    print(f"Value at (0,0): {matrix['get_value'](0, 0)}")
    print(f"Value at (0,1): {matrix['get_value'](0, 1)}")
except ValueError as e:
    print(f"Error: {e}")`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'What is the most efficient way to create a list of size n filled with zeros?',
      options: [
        'zeros = []  # Then append n times',
        'zeros = [0 for _ in range(n)]',
        'zeros = [0] * n',
        'zeros = list(range(n))  # Then set each to 0'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Appending n times requires multiple resizing operations.',
        'Incorrect. List comprehension creates unnecessary iterator objects.',
        'Correct! Multiplication operator creates the list with a single memory allocation, making it most efficient.',
        'Incorrect. This creates extra work by first creating a range then modifying it.'
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'When creating a 2D array, why is [[0] * cols] * rows problematic?',
      options: [
        'It uses too much memory',
        'It creates references to the same inner list',
        'It only works for square matrices',
        'It is too slow for large arrays'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Memory usage is not the main issue here.',
        'Correct! This creates multiple references to the same inner list, so modifying one element affects all rows.',
        'Incorrect. The shape of the matrix is not related to the reference problem.',
        'Incorrect. Performance is not the main concern with this initialization method.'
      ],
      difficulty: Difficulty.Advanced,
    }
  ]
};

const arrayTraversalData: LessonContent = {
  title: 'Array Traversal: Understanding How to Process Data Collections',
  content: `Understanding how to efficiently traverse arrays is fundamental to programming. Let's explore how we can work with arrays in Python, starting with basic concepts and building up to advanced techniques.

<h3>The Foundation: What Is Array Traversal?</h3>

Imagine you have a bookshelf with books arranged in a row. Reading through these books can be done in different ways - you might go from left to right, right to left, or even skip some books based on certain criteria. Array traversal works similarly; it's about systematically accessing each element in an array according to a specific pattern or need.

<div class="concept-visualization bg-white p-6 rounded-lg shadow-md my-8">
  <h4 class="text-center text-gray-700 mb-4">Basic Array Structure</h4>
  <div class="flex flex-col space-y-4">
    <!-- Array visualization -->
    <div class="flex justify-center space-x-2">
      <div class="w-20 h-16 border-2 border-blue-400 flex items-center justify-center bg-blue-100">
        <div class="text-center">
          <div class="font-bold">42</div>
          <div class="text-xs text-gray-600">index 0</div>
        </div>
      </div>
      <div class="w-20 h-16 border-2 border-blue-400 flex items-center justify-center">
        <div class="text-center">
          <div class="font-bold">17</div>
          <div class="text-xs text-gray-600">index 1</div>
        </div>
      </div>
      <div class="w-20 h-16 border-2 border-blue-400 flex items-center justify-center">
        <div class="text-center">
          <div class="font-bold">89</div>
          <div class="text-xs text-gray-600">index 2</div>
        </div>
      </div>
      <div class="w-20 h-16 border-2 border-blue-400 flex items-center justify-center">
        <div class="text-center">
          <div class="font-bold">23</div>
          <div class="text-xs text-gray-600">index 3</div>
        </div>
      </div>
    </div>
    <div class="text-center text-gray-600">Each element occupies a specific position (index) in the array</div>
  </div>
</div>

<h3>Basic Traversal Methods</h3>

Let's explore the three fundamental ways to traverse an array in Python, each with its own advantages and use cases.

<div class="traversal-methods bg-white p-6 rounded-lg shadow-md my-8">
  <table class="w-full border-collapse">
    <thead class="bg-gray-50">
      <tr>
        <th class="border p-3 text-left">Method</th>
        <th class="border p-3 text-left">Syntax</th>
        <th class="border p-3 text-left">Best Used When</th>
        <th class="border p-3 text-left">Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border p-3">Direct Element Access</td>
        <td class="border p-3"><code>for item in array:</code></td>
        <td class="border p-3">You only need the values</td>
        <td class="border p-3">Processing each item independently</td>
      </tr>
      <tr>
        <td class="border p-3">Index-Based Access</td>
        <td class="border p-3"><code>for i in range(len(array)):</code></td>
        <td class="border p-3">You need the position of elements</td>
        <td class="border p-3">Modifying elements in place</td>
      </tr>
      <tr>
        <td class="border p-3">Enumerated Access</td>
        <td class="border p-3"><code>for i, item in enumerate(array):</code></td>
        <td class="border p-3">You need both index and value</td>
        <td class="border p-3">Tracking positions while processing</td>
      </tr>
    </tbody>
  </table>
</div>

Let's see these methods in action with practical examples:

\`\`\`python
# Student grades example to demonstrate all three methods
grades = [95, 87, 92, 88, 95]

# 1. Direct Element Access
# Perfect for calculating the average
total = 0
for grade in grades:
    total += grade
average = total / len(grades)
print(f"Class average: {average:.2f}")

# 2. Index-Based Access
# Useful when modifying elements
# Let's apply a curve: add 2 points to grades below 90
for i in range(len(grades)):
    if grades[i] < 90:
        grades[i] += 2

# 3. Enumerated Access
# Great for reporting with position information
for position, grade in enumerate(grades, start=1):
    print(f"Student {position}: {grade}")
\`\`\`

<h3>Advanced Traversal Patterns</h3>

As we work with more complex data structures and requirements, we need more sophisticated traversal techniques. Let's explore some advanced patterns with practical examples.

<div class="advanced-patterns bg-white p-6 rounded-lg shadow-md my-8">
  <h4 class="text-gray-700 mb-4">Pattern: Two-Pointer Traversal</h4>
  
  <div class="flex flex-col space-y-4">
    <!-- Visualization of two-pointer technique -->
    <div class="flex justify-center space-x-2">
      <div class="w-16 h-16 border-2 border-green-400 flex items-center justify-center bg-green-100">2</div>
      <div class="w-16 h-16 border-2 border-blue-400 flex items-center justify-center">4</div>
      <div class="w-16 h-16 border-2 border-blue-400 flex items-center justify-center">6</div>
      <div class="w-16 h-16 border-2 border-red-400 flex items-center justify-center bg-red-100">8</div>
    </div>
    <div class="flex justify-center space-x-2 text-sm">
      <div class="w-16 text-center text-green-600">left</div>
      <div class="w-16"></div>
      <div class="w-16"></div>
      <div class="w-16 text-center text-red-600">right</div>
    </div>
  </div>

  \`\`\`python
  # Two-pointer technique example: Finding pairs that sum to a target
  def find_pair_sum(numbers, target):
      left = 0
      right = len(numbers) - 1
      
      while left < right:
          current_sum = numbers[left] + numbers[right]
          if current_sum == target:
              return numbers[left], numbers[right]
          elif current_sum < target:
              left += 1
          else:
              right -= 1
      
      return None
  \`\`\`
</div>

<h3>Real-World Applications</h3>

Let's examine how array traversal is used in real-world scenarios:

<div class="applications-section bg-gray-50 p-6 rounded-lg my-8">
  <h4 class="text-gray-700 mb-4">Example: Grade Analysis System</h4>
  
  \`\`\`python
  class GradeAnalyzer:
      def __init__(self, grades):
          self.grades = grades
          
      def find_top_performers(self, threshold=90):
          """Identifies students scoring above a threshold."""
          return [
              (i + 1, grade)  # Student number and grade
              for i, grade in enumerate(self.grades)
              if grade >= threshold
          ]
          
      def identify_struggling_students(self, threshold=70):
          """Finds students who might need extra help."""
          return [
              (i + 1, grade)
              for i, grade in enumerate(self.grades)
              if grade < threshold
          ]
          
      def calculate_statistics(self):
          """Computes basic statistics about the grades."""
          return {
              'average': sum(self.grades) / len(self.grades),
              'highest': max(self.grades),
              'lowest': min(self.grades),
              'passing_rate': sum(1 for g in self.grades if g >= 60) / len(self.grades)
          }
  \`\`\`
</div>

<h3>Performance Considerations</h3>

Understanding the performance implications of different traversal methods helps us make better choices in our code.

<div class="performance-dashboard bg-white p-6 rounded-lg shadow-md my-8">
  <table class="w-full border-collapse">
    <thead class="bg-gray-50">
      <tr>
        <th class="border p-3 text-left">Operation</th>
        <th class="border p-3 text-left">Time Complexity</th>
        <th class="border p-3 text-left">Space Complexity</th>
        <th class="border p-3 text-left">Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border p-3">Direct Traversal</td>
        <td class="border p-3">O(n)</td>
        <td class="border p-3">O(1)</td>
        <td class="border p-3">Most memory-efficient</td>
      </tr>
      <tr>
        <td class="border p-3">Index-Based</td>
        <td class="border p-3">O(n)</td>
        <td class="border p-3">O(1)</td>
        <td class="border p-3">Slightly slower due to index lookup</td>
      </tr>
      <tr>
        <td class="border p-3">List Comprehension</td>
        <td class="border p-3">O(n)</td>
        <td class="border p-3">O(n)</td>
        <td class="border p-3">Creates new array</td>
      </tr>
    </tbody>
  </table>
</div>`,

  exercises: [
    {
      prompt: `Create a function that finds all pairs of students whose grades differ by exactly one letter grade (10 points). Use appropriate traversal techniques to compare grades efficiently.

Example:
grades = [85, 92, 77, 68, 95]
Expected output: [(85, 95), (77, 68)]  # Pairs that differ by ~10 points`,
      initialCode: `def find_grade_pairs(grades):
    """
    Find pairs of grades that differ by approximately 10 points.
    
    Args:
        grades: List of numerical grades
    Returns:
        List of tuples containing grade pairs
    """
    # Your implementation here
    pass`,
      solution: `def find_grade_pairs(grades):
    """
    Find pairs of grades that differ by approximately 10 points.
    
    Args:
        grades: List of numerical grades
    Returns:
        List of tuples containing grade pairs
    
    Time Complexity: O(n^2)
    Space Complexity: O(n) for storing results
    """
    pairs = []
    
    # Compare each grade with all other grades
    for i in range(len(grades)):
        for j in range(i + 1, len(grades)):
            # Check if grades differ by approximately 10 points
            if 8 <= abs(grades[i] - grades[j]) <= 12:
                pairs.append((grades[i], grades[j]))
    
    return pairs`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Implement a grade trend analyzer that identifies sequences of improving or declining grades. The function should return the longest sequence of consistently changing grades.

Example:
grades = [75, 78, 82, 85, 83, 81, 78]
Expected output: [75, 78, 82, 85]  # Longest improving sequence`,
      initialCode: `def analyze_grade_trend(grades):
    """
    Find the longest sequence of consistently changing grades.
    
    Args:
        grades: List of numerical grades
    Returns:
        List containing the longest sequence
    """
    # Your implementation here
    pass`,
      solution: `def analyze_grade_trend(grades):
    """
    Find the longest sequence of consistently changing grades.
    
    Args:
        grades: List of numerical grades
    Returns:
        List containing the longest sequence
    
    Time Complexity: O(n)
    Space Complexity: O(n) for storing sequences
    """
    if len(grades) < 2:
        return grades
        
    longest_sequence = []
    current_sequence = [grades[0]]
    
    # Determine initial trend
    trend = None
    
    for i in range(1, len(grades)):
        if trend is None:
            trend = grades[i] > grades[i-1]
            
        # Check if current grade follows the trend
        if (trend and grades[i] > grades[i-1]) or \
           (not trend and grades[i] < grades[i-1]):
            current_sequence.append(grades[i])
        else:
            # Trend broken, check if this was the longest sequence
            if len(current_sequence) > len(longest_sequence):
                longest_sequence = current_sequence[:]
            
            # Start new sequence
            current_sequence = [grades[i-1], grades[i]]
            trend = grades[i] > grades[i-1]
    
    # Check final sequence
    if len(current_sequence) > len(longest_sequence):
        longest_sequence = current_sequence
    
    return longest_sequence`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'When analyzing student grades over multiple tests, which traversal method would be most appropriate if you need to compare each grade with the previous test score?',
      options: [
        'Simple for loop (for grade in grades)',
        'While loop with counter',
        'Range-based loop with index access',
        'Enumerated traversal'
      ],
      correctAnswer: 2,
      explanations: [
        'Direct traversal doesn\'t give access to previous elements.',
        'While loops make the code more complex than necessary and are less Pythonic.',
        'Correct! Using range with index access allows you to reference both the current and previous grades using indices.',
        'Enumeration doesn\'t directly help with accessing previous elements.'
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the most efficient way to find both the highest and lowest grades in a class?',
      options: [
        'Sort the array and take first/last elements',
        'Use separate loops for maximum and minimum',
        'Use a single loop tracking both values',
        'Use Python\'s max() and min() functions separately'
      ],
      correctAnswer: 2,
      explanations: [
        'Sorting is O(n log n) and unnecessary for this task.',
        'Multiple passes through the array is inefficient.',
        'Correct! A single pass through the array tracking both highest and lowest values is most efficient, requiring only O(n) operations.',
        'Using separate functions requires multiple passes through the array.'
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const arrayMemoryData: LessonContent = {
  title: 'Array Memory Management: Understanding How Arrays Grow and Shrink',
  content: `Let's explore how arrays work behind the scenes in Python, understanding how they manage memory as they grow and shrink. This knowledge is crucial for writing efficient code and avoiding common performance pitfalls.

<h3>Understanding Memory Allocation</h3>

When we create a list in Python, we're actually working with a dynamic array that can grow and shrink as needed. Think of it like planning seating at a restaurant - you want enough tables ready for your guests, but you don't want too many empty tables taking up space.

\`\`\`python
import sys

def demonstrate_memory_allocation():
    """
    Show how Python allocates memory for lists.
    
    This demonstrates Python's over-allocation strategy
    to minimize frequent resizing.
    """
    # Create an empty list and track its size
    numbers = []
    initial_size = sys.getsizeof(numbers)
    print(f"Empty list size: {initial_size} bytes")
    
    # Add elements and watch memory growth
    sizes = []
    for i in range(64):  # Add elements one by one
        numbers.append(i)
        current_size = sys.getsizeof(numbers)
        if not sizes or current_size != sizes[-1]:
            sizes.append(current_size)
            print(f"After adding element {i+1}: {current_size} bytes")
    
    return sizes

# Let's see how memory grows
memory_progression = demonstrate_memory_allocation()

def explain_growth_pattern(sizes):
    """Explain the observed memory growth pattern."""
    for i in range(1, len(sizes)):
        growth = sizes[i] / sizes[i-1]
        print(f"Growth factor from size {i} to {i+1}: {growth:.2f}x")
\`\`\`

<div class="visualization-container bg-white p-6 rounded-lg shadow-md my-8">
  <h4 class="text-center text-gray-700 mb-4">Memory Growth Visualization</h4>
  <div class="flex flex-col space-y-4">
    <div class="h-40 flex items-end justify-around">
      <div class="w-16 bg-blue-400" style="height: 20%">
        <div class="text-center text-sm">Initial</div>
      </div>
      <div class="w-16 bg-blue-400" style="height: 40%">
        <div class="text-center text-sm">First Growth</div>
      </div>
      <div class="w-16 bg-blue-400" style="height: 80%">
        <div class="text-center text-sm">Second Growth</div>
      </div>
      <div class="w-16 bg-blue-400" style="height: 100%">
        <div class="text-center text-sm">Third Growth</div>
      </div>
    </div>
    <div class="text-center text-sm text-gray-600">
      Memory allocated doubles when current capacity is reached
    </div>
  </div>
</div>

<h3>Dynamic Array Resizing</h3>

Let's understand how Python manages list resizing when we need more space:

\`\`\`python
def demonstrate_resizing():
    """
    Show the process of array resizing in detail.
    
    This demonstrates:
    1. When resizing occurs
    2. How much extra space is allocated
    3. The cost of resizing operations
    """
    import time
    
    def measure_append_time(lst):
        """Measure time taken to append an element."""
        start = time.perf_counter()
        lst.append(0)
        return time.perf_counter() - start
    
    numbers = []
    times = []
    sizes = []
    
    # Track append times and sizes
    for i in range(1000):
        times.append(measure_append_time(numbers))
        sizes.append(sys.getsizeof(numbers))
        
        # Print when we observe a resize (size change)
        if len(sizes) > 1 and sizes[-1] != sizes[-2]:
            print(f"Resize at length {i}: {sizes[-2]} -> {sizes[-1]} bytes")
            print(f"Append time: {times[-1]*1e6:.2f} microseconds")
    
    return times, sizes

# See resizing in action
append_times, memory_sizes = demonstrate_resizing()
\`\`\`

<h3>Memory Efficiency Strategies</h3>

Understanding how memory works helps us write more efficient code. Here are some important strategies:

\`\`\`python
def demonstrate_memory_strategies():
    """
    Show different strategies for memory-efficient list operations.
    
    Demonstrates:
    1. Pre-allocation
    2. List comprehension vs. append
    3. Memory reuse
    """
    # Strategy 1: Pre-allocation
    def with_preallocation(n):
        """Create list with pre-allocated space."""
        return [None] * n
    
    def without_preallocation(n):
        """Create list by appending."""
        result = []
        for _ in range(n):
            result.append(None)
        return result
    
    # Compare memory usage
    n = 1000
    preallocated = with_preallocation(n)
    dynamic = without_preallocation(n)
    
    print("Pre-allocated size:", sys.getsizeof(preallocated))
    print("Dynamic growth size:", sys.getsizeof(dynamic))
    
    # Strategy 2: List comprehension efficiency
    def with_comprehension(n):
        return [x * 2 for x in range(n)]
    
    def with_append(n):
        result = []
        for x in range(n):
            result.append(x * 2)
        return result
    
    # Compare approaches
    comp_result = with_comprehension(n)
    append_result = with_append(n)
    
    print("\nList comprehension size:", sys.getsizeof(comp_result))
    print("Append-based size:", sys.getsizeof(append_result))

# See strategies in action
demonstrate_memory_strategies()
\`\`\`

<h3>Memory Layout and Access Patterns</h3>

Understanding how arrays are laid out in memory helps us write more efficient code:

\`\`\`python
def explain_memory_layout():
    """
    Demonstrate how array layout affects performance.
    
    Shows:
    1. Contiguous memory benefits
    2. Cache-friendly access patterns
    3. Memory alignment considerations
    """
    import numpy as np
    import time
    
    # Create large arrays for demonstration
    n = 1000000
    py_list = list(range(n))
    np_array = np.array(py_list)
    
    def measure_access_patterns(container):
        """Measure different access patterns."""
        # Sequential access
        start = time.perf_counter()
        for i in range(len(container)):
            _ = container[i]
        sequential_time = time.perf_counter() - start
        
        # Strided access
        start = time.perf_counter()
        for i in range(0, len(container), 16):
            _ = container[i]
        strided_time = time.perf_counter() - start
        
        return sequential_time, strided_time
    
    # Compare access patterns
    py_seq, py_stride = measure_access_patterns(py_list)
    np_seq, np_stride = measure_access_patterns(np_array)
    
    print("Python List Access Times:")
    print(f"Sequential: {py_seq:.6f}s")
    print(f"Strided: {py_stride:.6f}s")
    
    print("\nNumPy Array Access Times:")
    print(f"Sequential: {np_seq:.6f}s")
    print(f"Strided: {np_stride:.6f}s")

# See memory layout effects
explain_memory_layout()
\`\`\`

<h3>Best Practices for Memory Management</h3>

Here are key principles to remember when working with arrays:

1. Pre-allocate When Possible:
   - If you know the final size, create the array with that size initially
   - Avoid gradual growth through repeated appends

2. Use Appropriate Data Structures:
   - Lists for dynamic size needs
   - Tuples for fixed-size sequences
   - Array module or NumPy for numeric data

3. Consider Memory During Operations:
   - Slicing creates copies
   - List comprehensions can be more memory-efficient than loops
   - Clear references to large arrays when no longer needed

4. Monitor Memory Usage:
   - Use sys.getsizeof() to track object sizes
   - Profile memory usage for large-scale operations
   - Be aware of temporary memory allocation in operations`,

  exercises: [
    {
      prompt: 'Implement a memory-efficient function that reverses a large array in-place, and analyze its memory usage compared to creating a reversed copy.',
      initialCode: `def memory_efficient_reverse(array):
    """
    Reverse array in-place with minimal memory usage.
    
    Args:
        array: List to reverse
    Returns:
        None (array is modified in-place)
    
    Compare memory usage with array[::-1]
    """
    # Your implementation here
    pass`,
      solution: `def memory_efficient_reverse(array):
    """
    Reverse array in-place with minimal memory usage.
    
    Args:
        array: List to reverse
    Returns:
        None (array is modified in-place)
        
    Time Complexity: O(n)
    Space Complexity: O(1)
    """
    import sys
    
    # Measure initial memory
    initial_memory = sys.getsizeof(array)
    
    # Standard slice reverse (creates new array)
    slice_reverse = array[::-1]
    slice_memory = sys.getsizeof(slice_reverse)
    
    # In-place reverse
    left, right = 0, len(array) - 1
    while left < right:
        array[left], array[right] = array[right], array[left]
        left += 1
        right -= 1
    
    # Measure final memory
    final_memory = sys.getsizeof(array)
    
    print("Memory Usage Analysis:")
    print(f"Initial array: {initial_memory} bytes")
    print(f"Slice reverse: {slice_memory} bytes")
    print(f"After in-place: {final_memory} bytes")
    
    return {
        'initial_memory': initial_memory,
        'slice_memory': slice_memory,
        'final_memory': final_memory
    }

# Test the function
test_array = list(range(1000))
memory_stats = memory_efficient_reverse(test_array)`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Create a memory-efficient implementation of a ring buffer using a fixed-size array. Include memory usage analysis.',
      initialCode: `class RingBuffer:
    """
    Fixed-size ring buffer implementation.
    
    Analyze and optimize memory usage.
    """
    def __init__(self, size):
        # Your implementation here
        pass
        
    def add(self, item):
        # Your implementation here
        pass
        
    def get(self):
        # Your implementation here
        pass`,
      solution: `class RingBuffer:
    """
    Fixed-size ring buffer implementation.
    
    Memory-efficient circular buffer using a fixed-size array.
    Tracks memory usage and provides usage statistics.
    
    Time Complexity:
        - add: O(1)
        - get: O(1)
    Space Complexity: O(n) where n is buffer size
    """
    def __init__(self, size):
        self.size = size
        self.buffer = [None] * size
        self.head = 0  # Read position
        self.tail = 0  # Write position
        self.count = 0  # Current number of elements
        
        # Track memory usage
        self.initial_memory = sys.getsizeof(self.buffer)
        
    def add(self, item):
        """Add item to buffer."""
        if self.count >= self.size:
            raise BufferError("Buffer is full")
            
        self.buffer[self.tail] = item
        self.tail = (self.tail + 1) % self.size
        self.count += 1
        
        return sys.getsizeof(self.buffer)
        
    def get(self):
        """Remove and return oldest item."""
        if self.count <= 0:
            raise BufferError("Buffer is empty")
            
        item = self.buffer[self.head]
        self.buffer[self.head] = None  # Allow garbage collection
        self.head = (self.head + 1) % self.size
        self.count -= 1
        
        return item
    
    def memory_usage(self):
        """Analyze current memory usage."""
        return {
            'buffer_size': sys.getsizeof(self.buffer),
            'overhead': sys.getsizeof(self),
            'total': sys.getsizeof(self) + sys.getsizeof(self.buffer),
            'utilization': self.count / self.size
        }

# Test the implementation
def test_ring_buffer():
    """Demonstrate and analyze ring buffer memory usage."""
    buffer = RingBuffer(5)
    print("Initial memory:", buffer.memory_usage())
    
    # Add elements
    for i in range(5):
        buffer.add(i)
        print(f"After adding {i}:", buffer.memory_usage())
    
    # Remove elements
    for _ in range(3):
        item = buffer.get()
        print(f"After removing {item}:", buffer.memory_usage())
    
    # Add more elements
    for i in range(3):
        buffer.add(i + 5)
        print(f"After adding {i+5}:", buffer.memory_usage())

test_ring_buffer()`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why does Python use an over-allocation strategy when resizing lists?',
      options: [
        'To waste memory intentionally',
        'To avoid frequent resizing operations that are computationally expensive',
        'To make lists faster to access',
        'To support negative indexing'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Memory over-allocation is not wasteful but a performance optimization.',
        'Correct! By allocating more space than immediately needed, Python reduces the frequency of expensive resize operations.',
        'Incorrect. Access speed is not affected by over-allocation.',
        'Incorrect. Negative indexing works regardless of allocation strategy.'
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What happens to memory when you slice a list?',
      options: [
        'Nothing, slices use the same memory as the original list',
        'A new list is created with its own memory allocation',
        'The original list is modified to save memory',
        'Memory is shared between the original and slice'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Slices create new lists with their own memory.',
        'Correct! Slicing creates a new list with its own memory allocation, which is why it can be memory-intensive for large lists.',
        'Incorrect. The original list remains unchanged when creating a slice.',
        'Incorrect. While the elements themselves might be shared (for objects), the list structure is not.'
      ],
      difficulty: Difficulty.Advanced,
    }
  ]
};

const arrayInsertionDeletionData: LessonContent = {
  title: 'Array Insertion and Deletion: Understanding How to Modify Arrays',
  content: `Let's explore how to modify arrays by inserting and deleting elements. Understanding these operations is crucial for managing dynamic data effectively. We'll start with the basic concepts and build up to more complex scenarios.

<h3>Understanding Array Modifications</h3>

When we modify an array by inserting or deleting elements, we often need to shift other elements to maintain the array's continuous structure. Think of it like managing a line of students - when someone new joins or leaves, everyone behind them needs to adjust their position.

<div class="visualization-container bg-white p-6 rounded-lg shadow-md my-8">
  <h4 class="text-center text-gray-700 mb-4">Array Modification Positions</h4>
  <div class="flex flex-col space-y-4">
    <!-- Original array -->
    <div class="flex justify-center space-x-2">
      <div class="w-20 h-16 border-2 border-blue-400 flex items-center justify-center">A</div>
      <div class="w-20 h-16 border-2 border-blue-400 flex items-center justify-center">B</div>
      <div class="w-20 h-16 border-2 border-blue-400 flex items-center justify-center">C</div>
      <div class="w-20 h-16 border-2 border-blue-400 flex items-center justify-center">D</div>
    </div>
    <!-- Position indicators -->
    <div class="flex justify-center space-x-2 text-sm text-gray-600">
      <div class="w-20 text-center">Beginning<br>(Hardest)</div>
      <div class="w-20 text-center">Early<br>(Hard)</div>
      <div class="w-20 text-center">Late<br>(Easier)</div>
      <div class="w-20 text-center">End<br>(Easiest)</div>
    </div>
  </div>
</div>

<h3>Basic Insertion Operations</h3>

Python provides several ways to insert elements into a list. Let's examine each method and understand when to use them:

\`\`\`python
# Creating a student roster example
students = ["Alice", "Bob", "Charlie", "David"]

# 1. Append: Adding to the end (Most Efficient)
students.append("Eve")               # ["Alice", "Bob", "Charlie", "David", "Eve"]

# 2. Insert: Adding at a specific position
students.insert(0, "Frank")         # ["Frank", "Alice", "Bob", "Charlie", "David", "Eve"]

# 3. Extend: Adding multiple elements at once
new_students = ["Grace", "Henry"]
students.extend(new_students)       # ["Frank", "Alice", "Bob", "Charlie", "David", "Eve", "Grace", "Henry"]
\`\`\`

<div class="performance-comparison bg-white p-6 rounded-lg shadow-md my-8">
  <table class="w-full border-collapse">
    <thead class="bg-gray-50">
      <tr>
        <th class="border p-3 text-left">Operation</th>
        <th class="border p-3 text-left">Time Complexity</th>
        <th class="border p-3 text-left">When to Use</th>
        <th class="border p-3 text-left">Example Use Case</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border p-3">append()</td>
        <td class="border p-3">O(1)*</td>
        <td class="border p-3">Adding to end</td>
        <td class="border p-3">Adding new entries to a log</td>
      </tr>
      <tr>
        <td class="border p-3">insert()</td>
        <td class="border p-3">O(n)</td>
        <td class="border p-3">Specific position</td>
        <td class="border p-3">Maintaining sorted order</td>
      </tr>
      <tr>
        <td class="border p-3">extend()</td>
        <td class="border p-3">O(k)</td>
        <td class="border p-3">Multiple additions</td>
        <td class="border p-3">Combining class rosters</td>
      </tr>
    </tbody>
  </table>
  <p class="text-sm text-gray-600 mt-2">* Amortized time complexity</p>
</div>

<h3>Element Deletion Operations</h3>

Removing elements requires careful consideration of how remaining elements will be affected. Let's explore different deletion methods:

\`\`\`python
# Starting with our student roster
students = ["Alice", "Bob", "Charlie", "David", "Eve"]

# 1. Remove by value
students.remove("Charlie")     # ["Alice", "Bob", "David", "Eve"]
                              # Raises ValueError if not found

# 2. Remove by index
removed_student = students.pop(1)  # Removes and returns "Bob"
print(f"{removed_student} has been removed")

# 3. Remove last element
last_student = students.pop()  # Removes and returns "Eve"

# 4. Clear entire list
students.clear()              # []
\`\`\`

<div class="visualization-container bg-white p-6 rounded-lg shadow-md my-8">
  <h4 class="text-center text-gray-700 mb-4">Element Shifting During Deletion</h4>
  <div class="flex flex-col space-y-6">
    <!-- Before deletion -->
    <div>
      <p class="text-center mb-2">Before Deleting "Bob"</p>
      <div class="flex justify-center space-x-2">
        <div class="w-20 h-16 border-2 border-blue-400 flex items-center justify-center">Alice</div>
        <div class="w-20 h-16 border-2 border-red-400 flex items-center justify-center bg-red-50">Bob</div>
        <div class="w-20 h-16 border-2 border-blue-400 flex items-center justify-center">Charlie</div>
        <div class="w-20 h-16 border-2 border-blue-400 flex items-center justify-center">David</div>
      </div>
    </div>
    <!-- After deletion -->
    <div>
      <p class="text-center mb-2">After Deletion</p>
      <div class="flex justify-center space-x-2">
        <div class="w-20 h-16 border-2 border-blue-400 flex items-center justify-center">Alice</div>
        <div class="w-20 h-16 border-2 border-blue-400 flex items-center justify-center">Charlie</div>
        <div class="w-20 h-16 border-2 border-blue-400 flex items-center justify-center">David</div>
      </div>
    </div>
  </div>
</div>

<h3>Efficient Modification Patterns</h3>

When working with arrays, certain patterns can help us perform modifications more efficiently:

\`\`\`python
def efficient_batch_update(items, new_items, start_index):
    """
    Demonstrates efficient batch insertion into an array.
    
    Args:
        items: Original list
        new_items: Items to insert
        start_index: Where to begin insertion
    """
    # Calculate new size needed
    new_size = len(items) + len(new_items)
    
    # Extend list first to avoid multiple resizing operations
    items.extend([None] * len(new_items))
    
    # Shift existing elements to make space
    for i in range(len(items) - len(new_items) - 1, start_index - 1, -1):
        items[i + len(new_items)] = items[i]
    
    # Insert new items
    for i, item in enumerate(new_items):
        items[start_index + i] = item
    
    return items

# Example usage
playlist = ["Song1", "Song2", "Song5", "Song6"]
new_songs = ["Song3", "Song4"]
updated_playlist = efficient_batch_update(playlist, new_songs, 2)
print("Updated playlist:", updated_playlist)
\`\`\`

<div class="best-practices bg-gray-50 p-6 rounded-lg my-8">
  <h4 class="text-lg font-semibold mb-4">Best Practices for Array Modifications</h4>

  1. Minimize insertions/deletions at the beginning of large arrays
  2. Batch modifications when possible to reduce shifting operations
  3. Consider using append() and building a new array instead of multiple inserts
  4. Use appropriate data structures (e.g., deque for frequent start/end modifications)
  5. Pre-allocate space when final size is known
</div>

<h3>Memory Management During Modifications</h3>

Understanding how Python manages memory during list modifications helps us write more efficient code:

\`\`\`python
import sys

def demonstrate_memory_growth():
    """Shows how Python manages list memory during growth."""
    numbers = []
    sizes = []
    
    for i in range(64):
        sizes.append(sys.getsizeof(numbers))
        numbers.append(i)
        
    print("Size progression:", sizes[::8])  # Print every 8th size
    # Notice how size doubles at certain points to accommodate growth

demonstrate_memory_growth()
\`\`\`

<div class="visual-explanation bg-white p-6 rounded-lg shadow-md my-8">
  <h4 class="text-gray-700 mb-4">Memory Growth Pattern</h4>
  <div class="h-40 flex items-end justify-around">
    <div class="w-16 bg-blue-400" style="height: 20%">
      <div class="text-center text-sm">Initial</div>
    </div>
    <div class="w-16 bg-blue-400" style="height: 40%">
      <div class="text-center text-sm">First Growth</div>
    </div>
    <div class="w-16 bg-blue-400" style="height: 80%">
      <div class="text-center text-sm">Second Growth</div>
    </div>
    <div class="w-16 bg-blue-400" style="height: 100%">
      <div class="text-center text-sm">Third Growth</div>
    </div>
  </div>
  <p class="text-center text-sm mt-4">Python doubles list capacity at certain thresholds</p>
</div>`,

  exercises: [
    {
      prompt: 'Create a function that efficiently inserts multiple elements into a sorted array while maintaining the sort order.',
      initialCode: `def insert_maintaining_order(sorted_array, new_elements):
    """
    Insert multiple elements into a sorted array, maintaining order.
    
    Args:
        sorted_array: List of sorted numbers
        new_elements: List of numbers to insert
    Returns:
        Updated sorted array
    """
    # Your implementation here
    pass`,
      solution: `def insert_maintaining_order(sorted_array, new_elements):
    """
    Insert multiple elements into a sorted array, maintaining order.
    
    Args:
        sorted_array: List of sorted numbers
        new_elements: List of numbers to insert
    Returns:
        Updated sorted array
        
    Time Complexity: O(n * m) where n is len(sorted_array) and m is len(new_elements)
    Space Complexity: O(1) as we modify in-place
    """
    # Process each new element
    for element in new_elements:
        # Find insertion point
        insert_position = 0
        for i, current in enumerate(sorted_array):
            if element > current:
                insert_position = i + 1
            else:
                break
                
        # Insert element
        sorted_array.insert(insert_position, element)
    
    return sorted_array`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement a circular buffer using a fixed-size array, handling insertions and deletions efficiently.',
      initialCode: `class CircularBuffer:
    """
    Fixed-size circular buffer implementation.
    """
    def __init__(self, size):
        # Your implementation here
        pass
        
    def insert(self, item):
        # Your implementation here
        pass
        
    def remove(self):
        # Your implementation here
        pass`,
      solution: `class CircularBuffer:
    """
    Fixed-size circular buffer implementation.
    
    Time Complexity:
        - insert: O(1)
        - remove: O(1)
    Space Complexity: O(n) where n is buffer size
    """
    def __init__(self, size):
        self.size = size
        self.buffer = [None] * size
        self.head = 0  # Remove from here
        self.tail = 0  # Insert here
        self.count = 0
        
    def insert(self, item):
        """Insert item into buffer."""
        if self.count >= self.size:
            raise ValueError("Buffer is full")
            
        self.buffer[self.tail] = item
        self.tail = (self.tail + 1) % self.size
        self.count += 1
        
    def remove(self):
        """Remove and return item from buffer."""
        if self.count <= 0:
            raise ValueError("Buffer is empty")
            
        item = self.buffer[self.head]
        self.head = (self.head + 1) % self.size
        self.count -= 1
        return item`,
      difficulty: Difficulty.Advanced,
    }
  ],
quizzes: [
    {
      question: 'When inserting an element into the middle of a large array, why is the time complexity O(n)?',
      options: [
        'Because we need to sort the array after insertion',
        'Because we need to copy the entire array',
        'Because we need to shift all subsequent elements',
        'Because we need to check all elements first'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Insertion doesn\'t require sorting unless specifically needed.',
        'Incorrect. We modify the array in place, not copy it entirely.',
        'Correct! We must shift all elements after the insertion point to make room, requiring O(n) operations in worst case.',
        'Incorrect. We don\'t need to check all elements, only shift those after the insertion point.'
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'Which operation is most efficient when frequently modifying an array?',
      options: [
        'Inserting at the beginning',
        'Inserting in the middle',
        'Appending to the end',
        'Random insertions'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Beginning insertions require shifting all elements, making them O(n).',
        'Incorrect. Middle insertions still require shifting many elements.',
        'Correct! Appending to the end is O(1) amortized as it requires no shifting of elements.',
        'Incorrect. Random insertions would average O(n/2) operations.'
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What happens to memory allocation when repeatedly appending to a Python list?',
      options: [
        'The list grows by exactly one space each time',
        'The list size doubles when it reaches capacity',
        'Memory is allocated as needed for each element',
        'A new list is created for each append'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. This would be very inefficient, requiring frequent reallocation.',
        'Correct! Python uses an over-allocation strategy, doubling the list\'s capacity when it\'s full to amortize the cost of growing.',
        'Incorrect. This would be inefficient and isn\'t how Python manages list memory.',
        'Incorrect. Python modifies the existing list rather than creating a new one.'
      ],
      difficulty: Difficulty.Advanced,
    },
    {
      question: 'Which approach is most efficient for removing multiple elements from an array?',
      options: [
        'Remove elements one at a time from the beginning',
        'Remove elements one at a time from the end',
        'Create a new array with desired elements',
        'Remove elements randomly as found'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. This requires shifting elements multiple times, very inefficient.',
        'Incorrect. While each operation is O(1), multiple removals still require scanning the array multiple times.',
        'Correct! Creating a new array with only the desired elements is often more efficient than multiple remove operations.',
        'Incorrect. Random removals would require shifting elements multiple times.'
      ],
      difficulty: Difficulty.Advanced,
    }
  ]
};

const arraySearchingData: LessonContent = {
  title: 'Array Searching: From Basic to Advanced Techniques',
  content: `Understanding how to effectively search arrays is a fundamental skill in programming. Let's explore different searching techniques, starting with simple approaches and building up to more sophisticated methods.

<h3>Basic Array Searching</h3>

Think of searching an array like looking for a book in a library. Just as we have different ways to find a book (scanning shelves sequentially, using the catalog system, or asking a librarian), we have different methods to search arrays. Let's start with the most straightforward approach.

<h4>Linear Search: The Sequential Approach</h4>

Linear search is like walking down a library shelf and checking each book until you find what you're looking for. It's simple but can be time-consuming for large collections.

\`\`\`python
# Simple linear search implementation
def linear_search(array, target):
    """
    Search for an element by checking each item in sequence.
    
    Args:
        array: List of elements to search
        target: Element we're looking for
        
    Returns:
        Index of target if found, -1 otherwise
    """
    # Check each element one by one
    for index, element in enumerate(array):
        if element == target:
            return index
    return -1

# Practical example: Finding a student in class
students = ["Alice", "Bob", "Charlie", "David", "Eve"]
position = linear_search(students, "Charlie")
print(f"Found Charlie at position: {position}")  # Output: 2
\`\`\`

<div class="visualization-container bg-white p-6 rounded-lg shadow-md my-8">
  <h4 class="text-center text-gray-700 mb-4">Linear Search Visualization</h4>
  <div class="flex flex-col space-y-4">
    <div class="flex justify-center space-x-2">
      <div class="w-20 h-16 border-2 border-green-400 flex items-center justify-center bg-green-100">Check ✓</div>
      <div class="w-20 h-16 border-2 border-green-400 flex items-center justify-center bg-green-100">Check ✓</div>
      <div class="w-20 h-16 border-2 border-blue-400 flex items-center justify-center bg-blue-100">Found!</div>
      <div class="w-20 h-16 border-2 border-gray-400 flex items-center justify-center">Skip</div>
      <div class="w-20 h-16 border-2 border-gray-400 flex items-center justify-center">Skip</div>
    </div>
    <div class="text-center text-gray-600">Progress through array until target is found</div>
  </div>
</div>

<h4>Binary Search: The Efficient Approach</h4>

When our array is sorted, we can use binary search, which is like opening a dictionary in the middle and deciding whether to look in the first or second half based on what we're seeking. This approach is much faster for large arrays.

\`\`\`python
def binary_search(sorted_array, target):
    """
    Search for an element in a sorted array using binary search.
    
    Args:
        sorted_array: Sorted list of elements
        target: Element we're looking for
        
    Returns:
        Index of target if found, -1 otherwise
        
    Time Complexity: O(log n)
    Space Complexity: O(1)
    """
    left = 0
    right = len(sorted_array) - 1
    
    while left <= right:
        # Find the middle point
        mid = (left + right) // 2
        
        # Check if we found the target
        if sorted_array[mid] == target:
            return mid
        # If target is greater, ignore left half
        elif sorted_array[mid] < target:
            left = mid + 1
        # If target is smaller, ignore right half
        else:
            right = mid - 1
            
    return -1

# Example with sorted scores
scores = [65, 70, 75, 80, 85, 90, 95]
position = binary_search(scores, 85)
print(f"Found score 85 at position: {position}")  # Output: 4
\`\`\`

<div class="visual-comparison bg-white p-6 rounded-lg shadow-md my-8">
  <h4 class="text-center text-gray-700 mb-4">Search Methods Comparison</h4>
  <table class="w-full border-collapse">
    <thead class="bg-gray-50">
      <tr>
        <th class="border p-3 text-left">Aspect</th>
        <th class="border p-3 text-left">Linear Search</th>
        <th class="border p-3 text-left">Binary Search</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border p-3">Time Complexity</td>
        <td class="border p-3">O(n)</td>
        <td class="border p-3">O(log n)</td>
      </tr>
      <tr>
        <td class="border p-3">Array Requirements</td>
        <td class="border p-3">Any array</td>
        <td class="border p-3">Must be sorted</td>
      </tr>
      <tr>
        <td class="border p-3">Best For</td>
        <td class="border p-3">Small arrays, unsorted data</td>
        <td class="border p-3">Large sorted arrays</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>Advanced Searching Techniques</h3>

For more complex scenarios, we might need more sophisticated searching approaches. Let's look at some advanced techniques:

\`\`\`python
def find_closest_value(sorted_array, target):
    """
    Find the value closest to the target in a sorted array.
    
    Args:
        sorted_array: Sorted list of numbers
        target: Value we're trying to get close to
        
    Returns:
        Value in array closest to target
        
    Time Complexity: O(log n)
    Space Complexity: O(1)
    """
    if not sorted_array:
        return None
        
    left = 0
    right = len(sorted_array) - 1
    
    # Handle edge cases
    if target <= sorted_array[left]:
        return sorted_array[left]
    if target >= sorted_array[right]:
        return sorted_array[right]
    
    # Binary search for closest value
    while left <= right:
        mid = (left + right) // 2
        
        if sorted_array[mid] == target:
            return sorted_array[mid]
            
        elif sorted_array[mid] < target:
            if mid + 1 <= right and target < sorted_array[mid + 1]:
                # Compare which is closer
                return sorted_array[mid] if (target - sorted_array[mid]) < (sorted_array[mid + 1] - target) else sorted_array[mid + 1]
            left = mid + 1
            
        else:
            if mid - 1 >= left and target > sorted_array[mid - 1]:
                # Compare which is closer
                return sorted_array[mid - 1] if (target - sorted_array[mid - 1]) < (sorted_array[mid] - target) else sorted_array[mid]
            right = mid - 1
    
    return sorted_array[mid]

# Example: Finding closest score to a target
scores = [60, 65, 70, 75, 80, 85, 90]
closest = find_closest_value(scores, 82)
print(f"Closest score to 82 is: {closest}")  # Output: 80
\`\`\`

<h3>Best Practices and Performance Considerations</h3>

When implementing search operations, consider these key points:

1. Choose the right algorithm:
   - Use linear search for small arrays or unsorted data
   - Use binary search for large sorted arrays
   - Consider specialized search algorithms for specific use cases

2. Consider preprocessing:
   - If searching frequently, sort the array first
   - For very large datasets, consider using hash tables
   - Balance setup cost vs. search efficiency

3. Handle edge cases:
   - Empty arrays
   - Target not found
   - Duplicate elements
   - Values at array boundaries`,

  exercises: [
    {
      prompt: 'Implement a function that finds all occurrences of a target value in an array, returning their indices.',
      initialCode: `def find_all_occurrences(array, target):
    """
    Find all occurrences of target in array.
    
    Args:
        array: List of elements to search
        target: Element to find
    Returns:
        List of indices where target appears
    """
    # Your implementation here
    pass`,
      solution: `def find_all_occurrences(array, target):
    """
    Find all occurrences of target in array.
    
    Args:
        array: List of elements to search
        target: Element to find
    Returns:
        List of indices where target appears
    
    Time Complexity: O(n)
    Space Complexity: O(k) where k is number of occurrences
    """
    indices = []
    
    # Search through array once, recording all matches
    for i, element in enumerate(array):
        if element == target:
            indices.append(i)
    
    return indices

# Example usage:
test_array = [1, 2, 3, 2, 4, 2, 5]
result = find_all_occurrences(test_array, 2)
print(f"Found target at indices: {result}")  # [1, 3, 5]`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Create a function that implements interpolation search for a sorted array of numbers.',
      initialCode: `def interpolation_search(sorted_array, target):
    """
    Implement interpolation search for faster searching in uniformly distributed sorted arrays.
    
    Args:
        sorted_array: Sorted list of numbers
        target: Number to find
    Returns:
        Index of target if found, -1 otherwise
    """
    # Your implementation here
    pass`,
      solution: `def interpolation_search(sorted_array, target):
    """
    Implement interpolation search for faster searching in uniformly distributed sorted arrays.
    
    Args:
        sorted_array: Sorted list of numbers
        target: Number to find
    Returns:
        Index of target if found, -1 otherwise
    
    Time Complexity: O(log(log n)) for uniform distribution
    Space Complexity: O(1)
    """
    left = 0
    right = len(sorted_array) - 1
    
    while left <= right and target >= sorted_array[left] and target <= sorted_array[right]:
        if left == right:
            if sorted_array[left] == target:
                return left
            return -1
        
        # Estimate position using linear interpolation
        pos = left + ((target - sorted_array[left]) * (right - left)) // (sorted_array[right] - sorted_array[left])
        
        if sorted_array[pos] == target:
            return pos
            
        if sorted_array[pos] < target:
            left = pos + 1
        else:
            right = pos - 1
    
    return -1

# Example usage:
numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90]
result = interpolation_search(numbers, 60)
print(f"Found target at index: {result}")  # 5`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'When is binary search NOT the best choice for finding an element in an array?',
      options: [
        'When the array is very large',
        'When the array is unsorted',
        'When looking for multiple occurrences',
        'When the array contains numbers'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Binary search actually performs better with larger arrays compared to linear search.',
        'Correct! Binary search requires a sorted array to work properly. Using it on an unsorted array will give incorrect results.',
        'Incorrect. While binary search finds one occurrence, it can be modified to find others nearby.',
        'Incorrect. Binary search works well with any comparable data type, including numbers.'
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the time complexity of binary search compared to linear search for an array of 1 million elements?',
      options: [
        'Binary: O(1000000), Linear: O(1000000)',
        'Binary: O(20), Linear: O(1000000)',
        'Binary: O(1000000), Linear: O(20)',
        'Binary: O(1), Linear: O(1)'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. While linear search is O(n) = O(1000000), binary search is O(log n).',
        'Correct! Binary search is O(log₂ 1000000) ≈ O(20) while linear search is O(1000000). This shows why binary search is so much faster for large arrays.',
        'Incorrect. Linear search always checks elements sequentially, making it O(n).',
        'Incorrect. Neither algorithm has constant time complexity.'
      ],
      difficulty: Difficulty.Advanced,
    }
  ]
};

const arraySlicingData: LessonContent = {
  title: 'Array Slicing: Working with Array Segments',
  content: `Let's explore how to work with segments of arrays through slicing. Think of array slicing like cutting a loaf of bread - you can take any continuous portion you want, and the original loaf stays intact. Understanding slicing will help you manipulate data more efficiently and elegantly.

<h3>Understanding Array Slicing</h3>

In Python, array slicing follows the pattern array[start:stop:step]. Let's break this down step by step:

\`\`\`python
# Basic array for our examples
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# Basic slicing: array[start:stop]
first_three = numbers[0:3]     # [0, 1, 2]
middle_three = numbers[3:6]    # [3, 4, 5]
last_three = numbers[7:10]     # [7, 8, 9]

print(f"Original array: {numbers}")
print(f"First three: {first_three}")
print(f"Middle three: {middle_three}")
print(f"Last three: {last_three}")
\`\`\`

<div class="visualization-container bg-white p-6 rounded-lg shadow-md my-8">
  <h4 class="text-center text-gray-700 mb-4">Understanding Slice Indices</h4>
  <div class="flex flex-col space-y-4">
    <div class="flex justify-center space-x-1">
      <div class="w-12 h-12 border-2 border-blue-400 flex flex-col items-center justify-center">
        <div class="text-sm">0</div>
        <div class="text-xs text-gray-500">↓</div>
      </div>
      <div class="w-12 h-12 border-2 border-blue-400 flex flex-col items-center justify-center">
        <div class="text-sm">1</div>
        <div class="text-xs text-gray-500">↓</div>
      </div>
      <div class="w-12 h-12 border-2 border-blue-400 flex flex-col items-center justify-center">
        <div class="text-sm">2</div>
        <div class="text-xs text-gray-500">↓</div>
      </div>
      <div class="w-12 h-12 border-2 border-blue-400 flex flex-col items-center justify-center">
        <div class="text-sm">3</div>
        <div class="text-xs text-gray-500">↓</div>
      </div>
      <div class="w-12 h-12 border-2 border-blue-400 flex flex-col items-center justify-center">
        <div class="text-sm">4</div>
        <div class="text-xs text-gray-500">↓</div>
      </div>
    </div>
    <div class="flex justify-center space-x-1">
      <div class="w-12 text-center text-xs">0</div>
      <div class="w-12 text-center text-xs">1</div>
      <div class="w-12 text-center text-xs">2</div>
      <div class="w-12 text-center text-xs">3</div>
      <div class="w-12 text-center text-xs">4</div>
    </div>
    <div class="text-center text-sm text-gray-600">Values above, indices below</div>
  </div>
</div>

<h3>Advanced Slicing Techniques</h3>

Python's slicing functionality offers powerful features beyond basic subsetting. Let's explore these advanced techniques:

\`\`\`python
def demonstrate_advanced_slicing():
    """Shows advanced array slicing techniques."""
    numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    
    # 1. Using negative indices
    last_three = numbers[-3:]      # [7, 8, 9]
    except_last_two = numbers[:-2] # [0, 1, 2, 3, 4, 5, 6, 7]
    
    # 2. Using steps
    every_second = numbers[::2]    # [0, 2, 4, 6, 8]
    every_third = numbers[::3]     # [0, 3, 6, 9]
    
    # 3. Reversing using slices
    reversed_list = numbers[::-1]  # [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
    
    return {
        'last_three': last_three,
        'except_last_two': except_last_two,
        'every_second': every_second,
        'every_third': every_third,
        'reversed': reversed_list
    }

# Show the results
results = demonstrate_advanced_slicing()
for name, result in results.items():
    print(f"{name}: {result}")
\`\`\`

<h3>Understanding Slice Objects</h3>

Python allows us to create slice objects explicitly, which can be useful when we want to reuse the same slice multiple times:

\`\`\`python
def explore_slice_objects():
    """Demonstrates the use of slice objects."""
    numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    
    # Create a slice object
    first_half = slice(0, 5)
    second_half = slice(5, None)  # None means 'until the end'
    
    # Use the slice objects
    print(f"First half: {numbers[first_half]}")
    print(f"Second half: {numbers[second_half]}")
    
    # Create a more complex slice
    every_second_reversed = slice(None, None, -2)
    print(f"Every second element reversed: {numbers[every_second_reversed]}")

explore_slice_objects()
\`\`\`

<h3>Practical Applications</h3>

Let's look at some real-world applications of array slicing:

\`\`\`python
def analyze_temperature_data(temperatures):
    """
    Analyze temperature readings using slicing.
    
    Args:
        temperatures: List of hourly temperatures
    Returns:
        Dictionary with various analyses
    """
    # Get different parts of the day
    morning = temperatures[6:12]    # 6 AM to noon
    afternoon = temperatures[12:18] # noon to 6 PM
    evening = temperatures[18:24]   # 6 PM to midnight
    night = temperatures[:6]        # midnight to 6 AM
    
    return {
        'morning_avg': sum(morning) / len(morning),
        'afternoon_avg': sum(afternoon) / len(afternoon),
        'evening_avg': sum(evening) / len(evening),
        'night_avg': sum(night) / len(night),
        'daily_high': max(temperatures),
        'daily_low': min(temperatures)
    }

# Example usage
hourly_temps = [15, 14, 14, 13, 13, 15, 16, 18, 21, 23, 24, 25,
                26, 27, 28, 27, 26, 25, 23, 22, 20, 18, 17, 16]
analysis = analyze_temperature_data(hourly_temps)
for metric, value in analysis.items():
    print(f"{metric}: {value:.1f}°C")
\`\`\`

<h3>Memory and Performance Considerations</h3>

Understanding how slices affect memory usage is crucial for writing efficient code:

\`\`\`python
def demonstrate_slice_memory():
    """Shows memory behavior of slices."""
    import sys
    
    original = list(range(1000))
    slice_view = original[::2]  # Creates new list
    
    print(f"Original size: {sys.getsizeof(original)} bytes")
    print(f"Slice size: {sys.getsizeof(slice_view)} bytes")
    
    # Memory-efficient alternative using generator
    def efficient_slice(arr, step):
        """Generate elements without creating full slice."""
        for i in range(0, len(arr), step):
            yield arr[i]
    
    # Use generator for memory efficiency
    generator_view = efficient_slice(original, 2)
    print(f"Generator size: {sys.getsizeof(generator_view)} bytes")

demonstrate_slice_memory()
\`\`\`

<div class="best-practices bg-white p-6 rounded-lg shadow-md my-8">
  <h4 class="text-gray-700 mb-4">Best Practices for Slicing</h4>
  
  1. Use clear start and stop indices for readability:
     \`\`\`python
     # Good
     first_week = data[0:7]
     
     # Less clear
     first_week = data[:7]
     \`\`\`
  
  2. Use step values judiciously:
     \`\`\`python
     # Good - clear intent
     every_other = items[::2]
     
     # Avoid complex steps unless necessary
     complex_slice = items[1:-2:3]  # Harder to understand
     \`\`\`
  
  3. Consider memory usage with large arrays:
     \`\`\`python
     # Memory intensive for large arrays
     large_slice = big_array[::2]
     
     # Memory efficient
     for item in big_array[::2]:
         process(item)
     \`\`\`
</div>`,

  exercises: [
    {
      prompt: 'Create a function that takes a list of daily temperatures and returns the temperature ranges (high-low) for each week using slicing.',
      initialCode: `def weekly_temperature_ranges(temperatures):
    """
    Calculate temperature ranges for each week.
    
    Args:
        temperatures: List of daily temperatures
    Returns:
        List of weekly temperature ranges
    """
    # Your implementation here
    pass`,
      solution: `def weekly_temperature_ranges(temperatures):
    """
    Calculate temperature ranges for each week.
    
    Args:
        temperatures: List of daily temperatures
    Returns:
        List of weekly temperature ranges
    
    Example:
        temps = [20, 22, 21, 24, 25, 23, 22,  # Week 1
                19, 18, 20, 21, 20, 19, 18]   # Week 2
        returns [5, 3]  # (25-20), (21-18)
    """
    ranges = []
    
    # Process each week (7 days) of temperatures
    for i in range(0, len(temperatures), 7):
        week_temps = temperatures[i:i+7]
        if week_temps:  # Check if we have data for this week
            temp_range = max(week_temps) - min(week_temps)
            ranges.append(temp_range)
    
    return ranges

# Test the function
test_temps = [20, 22, 21, 24, 25, 23, 22,  # Week 1
              19, 18, 20, 21, 20, 19, 18]   # Week 2
results = weekly_temperature_ranges(test_temps)
print(f"Weekly temperature ranges: {results}")`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement a function that takes a time series of data and returns moving averages using slicing. The function should handle different window sizes and edge cases.',
      initialCode: `def calculate_moving_average(data, window_size):
    """
    Calculate moving averages of time series data.
    
    Args:
        data: List of numerical values
        window_size: Size of moving window
    Returns:
        List of moving averages
    """
    # Your implementation here
    pass`,
      solution: `def calculate_moving_average(data, window_size):
    """
    Calculate moving averages of time series data.
    
    Args:
        data: List of numerical values
        window_size: Size of moving window
    Returns:
        List of moving averages
    
    Time Complexity: O(n) where n is len(data)
    Space Complexity: O(n) for the output list
    """
    if window_size <= 0:
        raise ValueError("Window size must be positive")
    if window_size > len(data):
        raise ValueError("Window size cannot be larger than data length")
    
    # Initialize result list
    averages = []
    
    # Calculate each window's average
    for i in range(len(data) - window_size + 1):
        window = data[i:i + window_size]
        window_avg = sum(window) / window_size
        averages.append(round(window_avg, 2))
    
    return averages

# Test the function
test_data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
window_size = 3
results = calculate_moving_average(test_data, window_size)
print(f"Moving averages (window={window_size}): {results}")`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'What does the slice notation numbers[::2] do?',
      options: [
        'Takes every second element from the array',
        'Splits the array into two equal parts',
        'Creates a reversed copy of the array',
        'Takes the first two elements'
      ],
      correctAnswer: 0,
      explanations: [
        'Correct! The ::2 syntax means "take every second element" from start to end.',
        'Incorrect. Splitting would require different slice notation.',
        'Incorrect. Reversing would use ::-1 as the step value.',
        'Incorrect. This would be achieved with [:2].'
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'When you create a slice of an array, what happens to the original array?',
      options: [
        'It gets modified to contain only the sliced elements',
        'It creates a new array with the sliced elements',
        'It remains unchanged, and a new view is created',
        'It gets split into two separate arrays'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Slicing does not modify the original array.',
        'Incorrect. While a new array is created, this describes the slice result, not what happens to the original.',
        'Correct! The original array remains intact, and a new array is created with the sliced elements.',
        'Incorrect. The original array stays as one piece.'
      ],
      difficulty: Difficulty.Beginner,
    }
  ]
};

const arrayModificationData: LessonContent = {
  title: 'Modifying Arrays In-Place: Understanding Memory-Efficient Techniques',
  content: `When we modify arrays in-place, we change their contents without creating new arrays. Think of it like rearranging furniture in a room instead of moving to a new room altogether. This approach saves memory and can be more efficient, but it requires careful handling to avoid errors.

<h3>Understanding In-Place Modifications</h3>

In-place modifications are operations that alter an array's contents using only a constant amount of extra space, regardless of the array's size. Let's explore this concept with some clear examples:

\`\`\`python
def demonstrate_in_place_basics(numbers):
    """
    Shows basic in-place array modifications.
    
    Args:
        numbers: List of numbers to modify
        
    The original list is modified directly, using minimal extra space.
    """
    print(f"Original array: {numbers}")
    
    # Example 1: Multiply each element by 2
    for i in range(len(numbers)):
        numbers[i] *= 2
    print(f"After doubling: {numbers}")
    
    # Example 2: Reverse elements
    left = 0
    right = len(numbers) - 1
    while left < right:
        # Swap elements using tuple unpacking
        numbers[left], numbers[right] = numbers[right], numbers[left]
        left += 1
        right -= 1
    print(f"After reversing: {numbers}")

# Let's try it
test_array = [1, 2, 3, 4, 5]
demonstrate_in_place_basics(test_array)
\`\`\`

<h3>Common In-Place Operations</h3>

Let's explore some fundamental in-place operations that are frequently used in programming:

\`\`\`python
def remove_duplicates(array):
    """
    Remove duplicates from a sorted array in-place.
    Returns the new length of the array.
    
    Args:
        array: Sorted list to modify
        
    Time Complexity: O(n)
    Space Complexity: O(1)
    """
    if not array:
        return 0
        
    # Use two-pointer technique
    write_pos = 1  # Position to write next unique element
    
    for read_pos in range(1, len(array)):
        # If we find a new element, write it to the array
        if array[read_pos] != array[write_pos - 1]:
            array[write_pos] = array[read_pos]
            write_pos += 1
            
    return write_pos  # Number of unique elements

def move_zeros_to_end(array):
    """
    Move all zeros to the end of the array in-place.
    Maintains relative order of non-zero elements.
    
    Args:
        array: List to modify
        
    Time Complexity: O(n)
    Space Complexity: O(1)
    """
    # Position where we'll write next non-zero element
    write_pos = 0
    
    # Move non-zero elements to the front
    for read_pos in range(len(array)):
        if array[read_pos] != 0:
            array[write_pos] = array[read_pos]
            write_pos += 1
    
    # Fill remaining positions with zeros
    while write_pos < len(array):
        array[write_pos] = 0
        write_pos += 1

# Example usage
numbers = [1, 1, 2, 2, 3, 3, 4]
new_length = remove_duplicates(numbers)
print(f"After removing duplicates: {numbers[:new_length]}")

array_with_zeros = [1, 0, 3, 0, 5, 0, 7]
move_zeros_to_end(array_with_zeros)
print(f"After moving zeros: {array_with_zeros}")
\`\`\`

<div class="visualization-container bg-white p-6 rounded-lg shadow-md my-8">
  <h4 class="text-center text-gray-700 mb-4">Two-Pointer Technique Visualization</h4>
  <div class="flex flex-col space-y-4">
    <div class="flex justify-center space-x-1">
      <div class="w-16 h-16 border-2 border-green-400 flex items-center justify-center bg-green-100">
        <div>Read</div>
      </div>
      <div class="w-16 h-16 border-2 border-blue-400 flex items-center justify-center">
        <div>Write</div>
      </div>
      <div class="w-16 h-16 border-2 border-gray-400 flex items-center justify-center">
        <div>→</div>
      </div>
      <div class="w-16 h-16 border-2 border-gray-400 flex items-center justify-center">
        <div>→</div>
      </div>
    </div>
    <div class="text-center text-gray-600">Pointers move through array to modify elements in-place</div>
  </div>
</div>

<h3>Advanced In-Place Techniques</h3>

For more complex scenarios, we can use sophisticated in-place modification techniques:

\`\`\`python
def rotate_array(array, k):
    """
    Rotate array right by k positions in-place.
    
    Args:
        array: List to rotate
        k: Number of positions to rotate by
        
    Time Complexity: O(n)
    Space Complexity: O(1)
    """
    if not array:
        return
        
    # Normalize k to array length
    k = k % len(array)
    if k == 0:
        return
        
    def reverse_portion(start, end):
        """Helper function to reverse part of the array."""
        while start < end:
            array[start], array[end] = array[end], array[start]
            start += 1
            end -= 1
    
    # Reverse the entire array
    reverse_portion(0, len(array) - 1)
    # Reverse first k elements
    reverse_portion(0, k - 1)
    # Reverse remaining elements
    reverse_portion(k, len(array) - 1)

# Example usage
numbers = [1, 2, 3, 4, 5]
rotate_array(numbers, 2)
print(f"After rotation: {numbers}")  # [4, 5, 1, 2, 3]
\`\`\`

<h3>Memory Considerations and Best Practices</h3>

When modifying arrays in-place, we need to be careful about several things:

1. Always Validate Input:
\`\`\`python
def safe_in_place_modification(array):
    """Example of safe in-place modification."""
    if not array:
        return
        
    # Validate array size for operation
    if len(array) < 2:
        return
        
    # Proceed with modification
    for i in range(len(array) - 1):
        if array[i] > array[i + 1]:
            array[i], array[i + 1] = array[i + 1], array[i]
\`\`\`

2. Handle Edge Cases:
\`\`\`python
def handle_edge_cases(array):
    """Demonstrate proper edge case handling."""
    # Check for None
    if array is None:
        raise ValueError("Array cannot be None")
    
    # Check for empty array
    if not array:
        return array
        
    # Check for single element
    if len(array) == 1:
        return array
        
    # Proceed with main logic
    # ... rest of the code
\`\`\`

<div class="best-practices bg-white p-6 rounded-lg shadow-md my-8">
  <h4 class="text-gray-700 mb-4">Best Practices for In-Place Modifications</h4>
  
  1. Always verify if in-place modification is appropriate:
     - Are you allowed to modify the input?
     - Do you need to preserve the original data?
     - Is memory conservation critical?
  
  2. Consider using temporary variables carefully:
     - Use minimal extra space
     - Clear temporary variables when done
     - Be mindful of variable scope
  
  3. Document modifications clearly:
     - Note that the input will be modified
     - Explain the modification process
     - Describe any side effects
</div>`,

  exercises: [
    {
      prompt: 'Implement a function that rearranges an array in-place so that all even numbers come before odd numbers while maintaining the relative order within each group.',
      initialCode: `def arrange_even_odd(array):
    """
    Rearrange array so even numbers come before odd numbers.
    Maintain relative order within each group.
    
    Args:
        array: List to modify in-place
    """
    # Your implementation here
    pass`,
      solution: `def arrange_even_odd(array):
    """
    Rearrange array so even numbers come before odd numbers.
    Maintain relative order within each group.
    
    Args:
        array: List to modify in-place
        
    Time Complexity: O(n)
    Space Complexity: O(n) - We use extra space for temporary storage
                           but modify the input array in-place
    """
    if not array or len(array) <= 1:
        return
        
    # Store original order of even and odd numbers
    even_numbers = [x for x in array if x % 2 == 0]
    odd_numbers = [x for x in array if x % 2 == 1]
    
    # Copy back to original array
    for i in range(len(even_numbers)):
        array[i] = even_numbers[i]
    for i in range(len(odd_numbers)):
        array[i + len(even_numbers)] = odd_numbers[i]

# Test the function
test_array = [3, 2, 7, 6, 8, 1, 5, 4]
arrange_even_odd(test_array)
print(f"After arranging: {test_array}")  # [2, 6, 8, 4, 3, 7, 1, 5]`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Create a function that sorts an array containing only 0s, 1s, and 2s in-place (Dutch National Flag problem).',
      initialCode: `def sort_colors(array):
    """
    Sort array containing only 0s, 1s, and 2s in-place.
    
    Args:
        array: List containing only 0s, 1s, and 2s
    """
    # Your implementation here
    pass`,
      solution: `def sort_colors(array):
    """
    Sort array containing only 0s, 1s, and 2s in-place.
    Known as Dutch National Flag problem.
    
    Args:
        array: List containing only 0s, 1s, and 2s
        
    Time Complexity: O(n)
    Space Complexity: O(1)
    """
    if not array or len(array) <= 1:
        return
        
    # Initialize pointers
    low = 0  # Position for next 0
    mid = 0  # Current position
    high = len(array) - 1  # Position for next 2
    
    while mid <= high:
        if array[mid] == 0:
            # Swap with low pointer and advance both
            array[low], array[mid] = array[mid], array[low]
            low += 1
            mid += 1
        elif array[mid] == 1:
            # Just advance mid pointer
            mid += 1
        else:  # array[mid] == 2
            # Swap with high pointer and decrement high
            array[mid], array[high] = array[high], array[mid]
            high -= 1
            # Don't increment mid as we need to check the swapped element

# Test the function
test_array = [2, 0, 1, 2, 1, 0, 2, 1, 0]
sort_colors(test_array)
print(f"After sorting: {test_array}")  # [0, 0, 0, 1, 1, 1, 2, 2, 2]`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why might we choose to modify an array in-place instead of creating a new array?',
      options: [
        'In-place modifications are always faster',
        'To save memory when working with large arrays',
        'Because in-place modifications are easier to implement',
        'To ensure thread safety in concurrent programs'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. In-place modifications aren\'t always faster, especially for simple operations.',
        'Correct! In-place modifications use constant extra space regardless of array size, making them memory-efficient for large arrays.',
        'Incorrect. In-place modifications often require more careful implementation to avoid errors.',
        'Incorrect. Thread safety depends on the synchronization mechanism, not the modification method.'
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the main risk when performing in-place array modifications?',
      options: [
        'The array might become too large for memory',
        'The original data is lost and cannot be recovered',
        'The operation might be slower than creating a new array',
        'The array indices might become invalid'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. In-place modifications don\'t increase array size.',
        'Correct! Once you modify data in-place, the original values are overwritten and cannot be recovered unless backed up.',
        'Incorrect. Performance depends on the specific operation, not whether it\'s in-place.',
        'Incorrect. Array indices remain valid during in-place modifications.'
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const basicSortingData: LessonContent = {
  title: 'Understanding Basic Sorting: Building Blocks of Data Organization',
  content: `Imagine you're organizing a deck of cards. You might flip through them, comparing pairs of cards and swapping them when they're out of order. This intuitive process mirrors how many sorting algorithms work. Let's explore these fundamental approaches to organizing data.

<h3>Understanding Why We Sort</h3>

Sorting is one of the most fundamental operations in computer science. When data is sorted, we can find things quickly, spot patterns easily, and process information more efficiently. Think of a library - finding a book is much easier when they're arranged alphabetically rather than randomly placed on shelves.

<h3>Simple Sorting Algorithms</h3>

Let's start with two basic sorting approaches that help us understand key sorting concepts.

<h4>1. Bubble Sort: The Building Block</h4>

Bubble sort is like arranging books on a shelf by repeatedly comparing adjacent pairs and swapping them if they're out of order. While not the most efficient, it's an excellent starting point for understanding sorting.

\`\`\`python
def bubble_sort(array):
    """
    Sort array using bubble sort algorithm.
    
    Args:
        array: List of comparable items
        
    Returns:
        Sorted list (modified in-place)
        
    This is like arranging books on a shelf, repeatedly
    comparing adjacent pairs and swapping if needed.
    """
    n = len(array)
    # We'll need to make multiple passes through the array
    for i in range(n):
        # Flag to optimize if array is already sorted
        swapped = False
        
        # On each pass, compare adjacent elements
        for j in range(0, n - i - 1):
            # If elements are in wrong order, swap them
            if array[j] > array[j + 1]:
                array[j], array[j + 1] = array[j + 1], array[j]
                swapped = True
                
        # If no swapping occurred, array is sorted
        if not swapped:
            break
    
    return array

# Let's visualize how bubble sort works
def visualize_bubble_sort(array):
    """Show the steps of bubble sort."""
    steps = []
    n = len(array)
    
    array_copy = array.copy()
    for i in range(n):
        for j in range(0, n - i - 1):
            if array_copy[j] > array_copy[j + 1]:
                array_copy[j], array_copy[j + 1] = array_copy[j + 1], array_copy[j]
                steps.append(array_copy.copy())
    
    return steps

# Example usage
numbers = [64, 34, 25, 12, 22, 11, 90]
sorting_steps = visualize_bubble_sort(numbers)
for step, arrangement in enumerate(sorting_steps, 1):
    print(f"Step {step}: {arrangement}")
\`\`\`

<div class="visualization-container bg-white p-6 rounded-lg shadow-md my-8">
  <h4 class="text-center text-gray-700 mb-4">Bubble Sort Process</h4>
  <div class="flex flex-col space-y-4">
    <div class="flex justify-center space-x-1">
      <div class="w-16 h-16 border-2 border-blue-400 flex items-center justify-center">Compare</div>
      <div class="w-16 h-16 border-2 border-blue-400 flex items-center justify-center">These</div>
      <div class="w-16 h-16 border-2 border-gray-400 flex items-center justify-center">→</div>
      <div class="w-16 h-16 border-2 border-gray-400 flex items-center justify-center">→</div>
    </div>
    <div class="text-center text-gray-600">Compare and swap adjacent elements in each pass</div>
  </div>
</div>

<h4>2. Selection Sort: Finding the Minimum</h4>

Selection sort takes a different approach. Instead of swapping adjacent elements, it repeatedly finds the smallest unsorted element and places it at the beginning. Think of it like dealing cards into a sorted hand, always choosing the lowest card to place next.

\`\`\`python
def selection_sort(array):
    """
    Sort array using selection sort algorithm.
    
    Args:
        array: List of comparable items
        
    Returns:
        Sorted list (modified in-place)
        
    This is like picking cards to arrange in order,
    always choosing the lowest card to place next.
    """
    n = len(array)
    
    # Traverse through all array elements
    for i in range(n):
        # Find the minimum element in remaining unsorted array
        min_idx = i
        for j in range(i + 1, n):
            if array[j] < array[min_idx]:
                min_idx = j
                
        # Swap the found minimum element with the first element
        array[i], array[min_idx] = array[min_idx], array[i]
    
    return array

# Example with step-by-step visualization
def visualize_selection_sort(array):
    """Show the steps of selection sort."""
    steps = []
    n = len(array)
    
    array_copy = array.copy()
    for i in range(n):
        min_idx = i
        for j in range(i + 1, n):
            if array_copy[j] < array_copy[min_idx]:
                min_idx = j
        array_copy[i], array_copy[min_idx] = array_copy[min_idx], array_copy[i]
        steps.append(array_copy.copy())
    
    return steps
\`\`\`

<h3>Understanding Time Complexity</h3>

Let's analyze how these sorting algorithms perform:

<div class="complexity-comparison bg-white p-6 rounded-lg shadow-md my-8">
  <table class="w-full border-collapse">
    <thead class="bg-gray-50">
      <tr>
        <th class="border p-3 text-left">Algorithm</th>
        <th class="border p-3 text-left">Best Case</th>
        <th class="border p-3 text-left">Average Case</th>
        <th class="border p-3 text-left">Worst Case</th>
        <th class="border p-3 text-left">Space Used</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border p-3">Bubble Sort</td>
        <td class="border p-3">O(n)</td>
        <td class="border p-3">O(n²)</td>
        <td class="border p-3">O(n²)</td>
        <td class="border p-3">O(1)</td>
      </tr>
      <tr>
        <td class="border p-3">Selection Sort</td>
        <td class="border p-3">O(n²)</td>
        <td class="border p-3">O(n²)</td>
        <td class="border p-3">O(n²)</td>
        <td class="border p-3">O(1)</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>When to Use Basic Sorting Algorithms</h3>

While these algorithms aren't the most efficient, they have their place:

1. Small Data Sets: For very small arrays (less than 50 elements), the simplicity of these algorithms can make them practical choices.

2. Educational Purpose: They're excellent for learning about sorting concepts and algorithm analysis.

3. Memory Constraints: Both bubble and selection sort work in-place, using minimal extra memory.

4. Nearly Sorted Data: Bubble sort can be efficient when data is already nearly sorted.

Let's see how these algorithms perform with different types of input:

\`\`\`python
def compare_sorting_algorithms(array):
    """Compare performance of different sorting algorithms."""
    import time
    
    def measure_time(func, arr):
        """Measure execution time of sorting function."""
        start_time = time.time()
        func(arr.copy())
        return time.time() - start_time
    
    # Test with different cases
    print("Original array:", array)
    
    bubble_time = measure_time(bubble_sort, array)
    selection_time = measure_time(selection_sort, array)
    
    print(f"Bubble Sort time: {bubble_time:.6f} seconds")
    print(f"Selection Sort time: {selection_time:.6f} seconds")

# Test with different array sizes
small_array = [5, 2, 9, 1, 7, 6, 3]
nearly_sorted = [1, 2, 4, 3, 5, 6, 7]
reversed_array = [7, 6, 5, 4, 3, 2, 1]

print("Small random array:")
compare_sorting_algorithms(small_array)
print("\nNearly sorted array:")
compare_sorting_algorithms(nearly_sorted)
print("\nReversed array:")
compare_sorting_algorithms(reversed_array)
\`\`\`

<h3>Choosing the Right Sort</h3>

When deciding which sorting algorithm to use, consider:

1. Data Size: How many items are you sorting?
- Small data (< 50 items): Simple algorithms might be fine
- Larger data: Consider more efficient algorithms

2. Memory Constraints:
- Limited memory: Use in-place algorithms like selection sort
- Plenty of memory: Can use algorithms that create temporary arrays

3. Data Characteristics:
- Nearly sorted data: Bubble sort might be efficient
- Random data: Consider more sophisticated algorithms
- Many duplicates: Some algorithms handle these better

4. Stability Requirements:
- Need to preserve order of equal elements? Choose a stable sort
- Don't care about stability? Any sort will do

Remember, these basic sorting algorithms form the foundation for understanding more complex sorting methods. As you master these concepts, you'll be better prepared to understand and use more sophisticated sorting algorithms.`,

  exercises: [
    {
      prompt: 'Modify the bubble sort algorithm to sort in descending order instead of ascending order. Include visualization of the sorting steps.',
      initialCode: `def bubble_sort_descending(array):
    """
    Sort array in descending order using bubble sort.
    
    Args:
        array: List of comparable items
    Returns:
        Sorted list (modified in-place)
    """
    # Your implementation here
    pass`,
      solution: `def bubble_sort_descending(array):
    """
    Sort array in descending order using bubble sort.
    
    Args:
        array: List of comparable items
    Returns:
        Sorted list (modified in-place)
        
    Time Complexity: O(n²)
    Space Complexity: O(1)
    """
    n = len(array)
    steps = []  # Track sorting steps
    
    for i in range(n):
        swapped = False
        
        for j in range(0, n - i - 1):
            # Change comparison to sort in descending order
            if array[j] < array[j + 1]:
                array[j], array[j + 1] = array[j + 1], array[j]
                swapped = True
                steps.append(array.copy())
                
        if not swapped:
            break
    
    # Print visualization
    print("Sorting steps:")
    for step, arrangement in enumerate(steps, 1):
        print(f"Step {step}: {arrangement}")
        
    return array

# Test the function
numbers = [64, 34, 25, 12, 22, 11, 90]
print("Original array:", numbers)
result = bubble_sort_descending(numbers.copy())
print("Final sorted array:", result)`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement a modified version of selection sort that finds both the minimum and maximum elements in each pass, placing them at both ends of the array.',
      initialCode: `def optimized_selection_sort(array):
    """
    Sort array using an optimized selection sort that works from both ends.
    
    Args:
        array: List of comparable items
    Returns:
        Sorted list (modified in-place)
    """
    # Your implementation here
    pass`,
      solution: `def optimized_selection_sort(array):
    """
    Sort array using an optimized selection sort that works from both ends.
    
    Args:
        array: List of comparable items
    Returns:
        Sorted list (modified in-place)
        
    Time Complexity: O(n²) but with roughly half the comparisons
    Space Complexity: O(1)
    """
    left = 0
    right = len(array) - 1
    
    while left < right:
        min_idx = left
        max_idx = left
        
        # Find both min and max in the unsorted portion
        for i in range(left + 1, right + 1):
            if array[i] < array[min_idx]:
                min_idx = i
            elif array[i] > array[max_idx]:
                max_idx = i
        
        # Handle special case where max element is at min_idx
        if max_idx == left:
            max_idx = min_idx
            
        # Place minimum at left
        array[left], array[min_idx] = array[min_idx], array[left]
        
        # Place maximum at right
        array[right], array[max_idx] = array[max_idx], array[right]
        
        left += 1
        right -= 1
        
        # Show current state
        print(f"After placing {array[left-1]} and {array[right+1]}: {array}")
    
    return array

# Test the function
numbers = [64, 34, 25, 12, 22, 11, 90]
print("Original array:", numbers)
result = optimized_selection_sort(numbers.copy())
print("Final sorted array:", result)`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why might bubble sort perform better than selection sort on nearly sorted data?',
      options: [
        'Because bubble sort uses less memory',
        'Because bubble sort can exit early if no swaps are needed',
        'Because bubble sort compares fewer elements overall',
        'Because bubble sort is always faster than selection sort'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Both algorithms use O(1) extra space.',
        'Correct! Bubble sort can detect when the array is sorted and exit early, while selection sort always checks every element.',
        'Incorrect. Bubble sort typically makes more comparisons than selection sort.',
        'Incorrect. Neither algorithm is universally faster than the other.'
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What makes selection sort more predictable in terms of performance compared to bubble sort?',
      options: [
        'Selection sort is always faster',
        'Selection sort uses less memory',
        'Selection sort always performs the same number of operations regardless of input order',
        'Selection sort can exit early like bubble sort'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Selection sort is not always faster than bubble sort.',
        'Incorrect. Both algorithms use the same amount of extra memory.',
        'Correct! Selection sort always performs n²/2 comparisons regardless of input order, making its performance very predictable.',
        'Incorrect. Selection sort cannot exit early and must complete all passes.'
      ],
      difficulty: Difficulty.Advanced,
    }
  ]
};

const builtInSortingData: LessonContent = {
  title: 'Mastering Python\'s Built-in Sorting Capabilities',
  content: `Python provides powerful built-in sorting capabilities that handle most common sorting needs efficiently. Let's explore how to make the most of these tools to write cleaner, faster code.

<h3>Understanding Python's Basic Sorting Tools</h3>

Python offers two main ways to sort: the sorted() function and the .sort() method. While they both sort elements, they serve different purposes and have different effects on your data.

\`\`\`python
def demonstrate_basic_sorting():
    """Demonstrate basic sorting operations in Python."""
    # Original list
    numbers = [5, 2, 8, 1, 9, 3]
    print(f"Original list: {numbers}")
    
    # Using sorted() - creates a new list
    sorted_numbers = sorted(numbers)
    print(f"After sorted(): {sorted_numbers}")
    print(f"Original list unchanged: {numbers}")
    
    # Using .sort() - modifies list in-place
    numbers.sort()
    print(f"After .sort(): {numbers}")

# Let's see it in action
demonstrate_basic_sorting()
\`\`\`

<h3>Customizing Sort Order</h3>

Python allows you to customize how elements are sorted using the key parameter. This is incredibly powerful for sorting complex data structures.

\`\`\`python
def demonstrate_custom_sorting():
    """Show different ways to customize sorting."""
    # Sort by absolute value
    numbers = [-4, 1, -2, 3, 0, -5]
    sorted_absolute = sorted(numbers, key=abs)
    print(f"Sorted by absolute value: {sorted_absolute}")
    
    # Sort strings by length
    words = ["python", "is", "awesome", "and", "powerful"]
    sorted_by_length = sorted(words, key=len)
    print(f"Sorted by length: {sorted_by_length}")
    
    # Sort dictionary by value
    scores = {"Alice": 85, "Bob": 92, "Charlie": 78}
    sorted_scores = sorted(scores.items(), key=lambda x: x[1], reverse=True)
    print("Sorted scores (highest to lowest):")
    for name, score in sorted_scores:
        print(f"{name}: {score}")

demonstrate_custom_sorting()
\`\`\`

<h3>Working with Complex Objects</h3>

Real-world data often involves complex objects. Let's see how to sort them efficiently:

\`\`\`python
from dataclasses import dataclass
from datetime import datetime

@dataclass
class Student:
    name: str
    grade: float
    birthdate: datetime
    active: bool

def demonstrate_object_sorting():
    """Show how to sort complex objects."""
    students = [
        Student("Alice", 92.5, datetime(2000, 5, 15), True),
        Student("Bob", 85.0, datetime(2001, 3, 20), True),
        Student("Charlie", 90.0, datetime(2000, 8, 10), False),
    ]
    
    # Sort by grade
    by_grade = sorted(students, key=lambda s: s.grade, reverse=True)
    print("\nSorted by grade (highest first):")
    for student in by_grade:
        print(f"{student.name}: {student.grade}")
    
    # Sort by multiple criteria using tuple
    by_multiple = sorted(students, key=lambda s: (-s.grade, s.name))
    print("\nSorted by grade (desc) and name (asc):")
    for student in by_multiple:
        print(f"{student.name}: {student.grade}")

demonstrate_object_sorting()
\`\`\`

<h3>Understanding Sort Stability</h3>

Python's sorting is stable - elements with equal keys maintain their relative order. This is crucial for many applications:

\`\`\`python
def demonstrate_sort_stability():
    """Show how Python's sort stability works."""
    data = [
        ("Math", "A"),
        ("History", "B"),
        ("English", "A"),
        ("Science", "B")
    ]
    
    # Sort first by grade, then by subject
    # Stability ensures consistent ordering
    by_grade = sorted(data, key=lambda x: x[1])
    print("\nSorted by grade:")
    for subject, grade in by_grade:
        print(f"{subject}: {grade}")
        
    by_both = sorted(by_grade, key=lambda x: x[0])
    print("\nThen sorted by subject (original grade order maintained):")
    for subject, grade in by_both:
        print(f"{subject}: {grade}")

demonstrate_sort_stability()
\`\`\`

<h3>Performance and Memory Considerations</h3>

Understanding the performance implications of different sorting approaches helps you make better choices:

\`\`\`python
def compare_sorting_approaches():
    """Compare different sorting approaches for performance."""
    import time
    import random
    
    # Generate test data
    data = [random.randint(1, 1000) for _ in range(10000)]
    
    def measure_time(func, data):
        start = time.time()
        func(data)
        return time.time() - start
    
    # Test different approaches
    times = {}
    
    # sorted() - creates new list
    times['sorted'] = measure_time(
        lambda x: sorted(x), data.copy()
    )
    
    # .sort() - in-place
    times['sort'] = measure_time(
        lambda x: x.sort(), data.copy()
    )
    
    # sorted() with key function
    times['sorted_with_key'] = measure_time(
        lambda x: sorted(x, key=lambda n: n % 10), data.copy()
    )
    
    print("\nPerformance Comparison:")
    for method, time_taken in times.items():
        print(f"{method}: {time_taken:.6f} seconds")

compare_sorting_approaches()
\`\`\`

<h3>Best Practices and Tips</h3>

Here are some guidelines for using Python's sorting effectively:

1. Choose the Right Method:
- Use sorted() when you need to preserve the original data
- Use .sort() when modifying in-place is acceptable
- Consider memory usage for large datasets

2. Optimize Key Functions:
\`\`\`python
# Less efficient - lambda called multiple times
data.sort(key=lambda x: complex_calculation(x))

# More efficient - calculate once
decorated = [(complex_calculation(x), x) for x in data]
decorated.sort()
result = [x for _, x in decorated]
\`\`\`

3. Handle Special Cases:

\`\`\`python
def sort_with_special_cases(data):
    """Handle None values and special cases."""
    # Move None values to the end
    return sorted(data, key=lambda x: (x is None, x))

# Example
mixed_data = [3, None, 1, 4, None, 2]
sorted_data = sort_with_special_cases(mixed_data)
print(f"Sorted with Nones at end: {sorted_data}")
\`\`\`

<div class="best-practices bg-white p-6 rounded-lg shadow-md my-8">
  <h4 class="text-gray-700 mb-4">Sorting Best Practices Summary</h4>
  
  1. Memory Usage:
     - sorted(): O(n) extra space
     - .sort(): O(1) extra space
  
  2. Performance:
     - Simple comparisons: O(n log n)
     - Complex key functions: Consider preprocessing
     
  3. Readability:
     - Use named functions for complex sorting logic
     - Document sorting criteria clearly
     - Consider operator.itemgetter() for simple key functions
</div>`,

  exercises: [
    {
      prompt: 'Create a function that sorts a list of strings by their last word, ignoring case. For example, ["Hello World", "Nice Day", "Good Morning"] should be sorted based on "World", "Day", and "Morning".',
      initialCode: `def sort_by_last_word(strings):
    """
    Sort strings by their last word, case-insensitive.
    
    Args:
        strings: List of strings
    Returns:
        Sorted list of strings
    """
    # Your implementation here
    pass`,
      solution: `def sort_by_last_word(strings):
    """
    Sort strings by their last word, case-insensitive.
    
    Args:
        strings: List of strings
    Returns:
        Sorted list of strings
        
    Example:
        Input: ["Hello World", "Nice Day", "Good Morning"]
        Output: ["Nice Day", "Good Morning", "Hello World"]
    """
    def get_last_word(s):
        # Split string and get last word in lowercase
        return s.lower().split()[-1]
    
    return sorted(strings, key=get_last_word)

# Test the function
test_strings = ["Hello World", "Nice Day", "Good Morning"]
sorted_strings = sort_by_last_word(test_strings)
print(f"Original: {test_strings}")
print(f"Sorted: {sorted_strings}")`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement a function that sorts a list of dictionaries representing students by their average grade, handling missing grades appropriately.',
      initialCode: `def sort_by_average_grade(students):
    """
    Sort students by average grade, handling missing grades.
    
    Args:
        students: List of dictionaries with 'name' and 'grades' keys
        'grades' is a list that might contain None values
    Returns:
        Sorted list of students
    """
    # Your implementation here
    pass`,
      solution: `def sort_by_average_grade(students):
    """
    Sort students by average grade, handling missing grades.
    
    Args:
        students: List of dictionaries with 'name' and 'grades' keys
        'grades' is a list that might contain None values
    Returns:
        Sorted list of students
        
    Example:
        Input: [
            {'name': 'Alice', 'grades': [90, None, 85]},
            {'name': 'Bob', 'grades': [85, 90, 85]}
        ]
    """
    def calculate_average(grades):
        # Filter out None values and calculate average
        valid_grades = [g for g in grades if g is not None]
        if not valid_grades:
            return -1  # Put students with no grades at the end
        return sum(valid_grades) / len(valid_grades)
    
    return sorted(
        students,
        key=lambda s: calculate_average(s['grades']),
        reverse=True  # Highest average first
    )

# Test the function
test_students = [
    {'name': 'Alice', 'grades': [90, None, 85]},
    {'name': 'Bob', 'grades': [85, 90, 85]},
    {'name': 'Charlie', 'grades': [None, None, None]},
]

sorted_students = sort_by_average_grade(test_students)
for student in sorted_students:
    grades = student['grades']
    avg = sum(g for g in grades if g is not None) / len([g for g in grades if g is not None]) if any(g is not None for g in grades) else 'No grades'
    print(f"{student['name']}: {avg if isinstance(avg, str) else f'{avg:.2f}'}") `,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'When should you use sorted() instead of .sort()?',
      options: [
        'When you need better performance',
        'When you want to preserve the original list',
        'When sorting complex objects',
        'When using custom key functions'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Both methods have similar performance characteristics.',
        'Correct! sorted() creates a new list, leaving the original unchanged, while .sort() modifies the list in-place.',
        'Incorrect. Both methods can handle complex objects equally well.',
        'Incorrect. Both methods support custom key functions.'
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What happens when you sort a list of tuples without specifying a key function?',
      options: [
        'The tuples are sorted randomly',
        'The tuples are sorted by their first element only',
        'The tuples are compared element by element until a difference is found',
        'The sort fails with an error'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Python sorting is deterministic, not random.',
        'Incorrect. Python compares all elements, not just the first.',
        'Correct! Python compares tuple elements in order until it finds a difference, using this to determine the sort order.',
        'Incorrect. Python can sort tuples without a key function.'
      ],
      difficulty: Difficulty.Advanced,
    }
  ]
};

const customSortingData: LessonContent = {
  title: 'Mastering Custom Sort Conditions in Python',
  content: `Let's explore how to implement specific sorting requirements in Python. Understanding custom sorting is like learning to organize your bookshelf exactly the way you want - whether by genre then author, or by size then color. Python gives us powerful tools to define these custom organizations.

<h3>Understanding Custom Sort Keys</h3>

At the heart of custom sorting in Python is the key function. This function transforms each element into a value that Python uses for comparison. Let's start with some fundamental examples:

\`\`\`python
def demonstrate_basic_key_functions():
    """
    Show how different key functions affect sorting.
    
    This helps understand the relationship between key functions
    and final sort order.
    """
    # Sort strings by length then alphabetically
    words = ["cat", "dog", "elephant", "ant", "bear"]
    
    # The key function can return a tuple for multiple criteria
    sorted_words = sorted(words, key=lambda x: (len(x), x))
    print("Sorted by length then alphabetically:")
    for word in sorted_words:
        print(f"{word} (length: {len(word)})")
        
    # Sort numbers by their distance from 100
    numbers = [50, 150, 75, 125, 95]
    sorted_numbers = sorted(numbers, key=lambda x: abs(x - 100))
    print("\nSorted by distance from 100:")
    for num in sorted_numbers:
        print(f"{num} (distance: {abs(num - 100)})")

demonstrate_basic_key_functions()
\`\`\`

<h3>Complex Sorting Requirements</h3>

Real-world sorting often involves multiple conditions and complex objects. Let's explore how to handle these situations elegantly:

\`\`\`python
from dataclasses import dataclass
from datetime import datetime, date

@dataclass
class Student:
    name: str
    grade: float
    attendance: float  # percentage
    last_absent: date
    is_active: bool

def demonstrate_complex_sorting():
    """
    Show how to implement complex sorting requirements.
    
    We'll sort students by:
    1. Active students first
    2. Grade (higher first)
    3. Attendance (higher first)
    4. Most recent absence (more recent first)
    """
    students = [
        Student("Alice", 92.5, 95.0, date(2024, 1, 15), True),
        Student("Bob", 92.5, 88.0, date(2024, 2, 1), True),
        Student("Charlie", 85.0, 92.0, date(2024, 1, 10), False),
        Student("Diana", 92.5, 95.0, date(2024, 1, 20), True)
    ]
    
    def student_sort_key(student):
        """
        Create a tuple of values for sorting.
        
        Using negative values for grade and attendance because:
        1. We want higher values first (descending order)
        2. Tuples sort ascending by default
        """
        return (
            not student.is_active,  # False comes before True
            -student.grade,
            -student.attendance,
            student.last_absent     # More recent dates are "greater"
        )
    
    sorted_students = sorted(students, key=student_sort_key)
    
    print("Students sorted by multiple criteria:")
    for student in sorted_students:
        print(f"{student.name}:")
        print(f"  Grade: {student.grade}")
        print(f"  Attendance: {student.attendance}%")
        print(f"  Last Absent: {student.last_absent}")
        print(f"  Active: {student.is_active}")
        print()

demonstrate_complex_sorting()
\`\`\`

<h3>Handling Special Cases</h3>

Sometimes we need to handle special cases like missing data or custom comparison logic:

\`\`\`python
def sort_with_special_cases():
    """
    Demonstrate handling of special cases in custom sorting.
    
    This shows how to:
    1. Handle None values
    2. Implement custom comparison logic
    3. Deal with missing or invalid data
    """
    # Student records with possible missing grades
    records = [
        {"name": "Alice", "grade": 85, "extra_credit": True},
        {"name": "Bob", "grade": None, "extra_credit": False},
        {"name": "Charlie", "grade": 85, "extra_credit": False},
        {"name": "Diana", "grade": None, "extra_credit": True}
    ]
    
    def special_sort_key(record):
        """
        Custom key function handling special cases.
        
        Returns tuple with:
        1. Whether grade exists (None values last)
        2. Grade value (if exists)
        3. Extra credit status
        4. Name (for stable sorting)
        """
        return (
            record["grade"] is not None,  # None values last
            record["grade"] if record["grade"] is not None else float('-inf'),
            record["extra_credit"],
            record["name"]
        )
    
    sorted_records = sorted(records, key=special_sort_key, reverse=True)
    
    print("Records sorted with special cases handled:")
    for record in sorted_records:
        print(f"Name: {record['name']}")
        print(f"  Grade: {record['grade'] or 'Missing'}")
        print(f"  Extra Credit: {record['extra_credit']}")
        print()

sort_with_special_cases()
\`\`\`

<h3>Advanced Sorting Techniques</h3>

Let's explore some advanced techniques for complex sorting scenarios:

\`\`\`python
from operator import attrgetter, itemgetter
from functools import cmp_to_key

def demonstrate_advanced_techniques():
    """
    Show advanced sorting techniques and their uses.
    """
    # Using operator.attrgetter for better performance
    class Product:
        def __init__(self, name, price, stock):
            self.name = name
            self.price = price
            self.stock = stock
    
    products = [
        Product("Apple", 0.50, 100),
        Product("Banana", 0.30, 150),
        Product("Orange", 0.60, 75)
    ]
    
    # Using attrgetter instead of lambda
    by_price = sorted(products, key=attrgetter('price'))
    print("Sorted by price (using attrgetter):")
    for p in by_price:
        print(f"{p.name}: \${p.price:.2f}")
    
    # Custom comparison function
    def compare_products(a, b):
        """
        Custom comparison considering both price and stock.
        Returns negative if a < b, zero if a == b, positive if a > b.
        """
        # First compare by price
        price_diff = a.price - b.price
        if abs(price_diff) > 0.01:  # Use small epsilon for float comparison
            return price_diff
        # If prices are close, compare by stock
        return b.stock - a.stock
    
    # Using cmp_to_key to convert comparison function to key function
    sorted_products = sorted(products, key=cmp_to_key(compare_products))
    
    print("\nSorted using custom comparison:")
    for p in sorted_products:
        print(f"{p.name}: \${p.price:.2f} (Stock: {p.stock})")

demonstrate_advanced_techniques()
\`\`\`

<h3>Best Practices for Custom Sorting</h3>

Here are some key principles to follow when implementing custom sorting:

1. Make Sort Keys Intuitive: Key functions should return values that naturally sort in the desired order. For example, use negative values for descending order.

2. Handle Edge Cases: Always consider and handle special cases like:
   - None or missing values
   - Invalid data
   - Empty strings
   - Extreme values

3. Use Tuples for Multiple Criteria: When sorting by multiple conditions, use tuples to combine them in priority order.

4. Consider Performance: For large datasets:
   - Use operator.attrgetter or operator.itemgetter instead of lambdas
   - Minimize computation in key functions
   - Cache computed values if they're used repeatedly

5. Document Sorting Logic: Clear documentation is crucial for maintaining complex sorting requirements.`,

  exercises: [
    {
      prompt: 'Create a function that sorts a list of strings by the number of vowels they contain, and then alphabetically for strings with the same number of vowels.',
      initialCode: `def sort_by_vowels(strings):
    """
    Sort strings by vowel count, then alphabetically.
    
    Args:
        strings: List of strings
    Returns:
        Sorted list of strings
    """
    # Your implementation here
    pass`,
      solution: `def sort_by_vowels(strings):
    """
    Sort strings by vowel count, then alphabetically.
    
    Args:
        strings: List of strings
    Returns:
        Sorted list of strings
    
    Example:
        Input: ["hello", "world", "python", "code"]
        Output: ["world", "code", "hello", "python"]
    """
    def count_vowels(s):
        """Helper function to count vowels in a string."""
        return sum(1 for char in s.lower() if char in 'aeiou')
    
    # Create a key function that returns a tuple of
    # (vowel count, original string)
    return sorted(strings, key=lambda x: (count_vowels(x), x))

# Test the function
test_strings = ["hello", "world", "python", "code"]
result = sort_by_vowels(test_strings)
for word in result:
    vowels = sum(1 for char in word.lower() if char in 'aeiou')
    print(f"{word}: {vowels} vowels")`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement a custom sorting function for version numbers (e.g., "1.2.3" should come before "1.2.10"). The version numbers can have varying numbers of components.',
      initialCode: `def sort_versions(versions):
    """
    Sort version numbers correctly.
    
    Args:
        versions: List of version strings (e.g., ["1.0", "1.2.3", "1.2.10"])
    Returns:
        Sorted list of version strings
    """
    # Your implementation here
    pass`,
      solution: `def sort_versions(versions):
    """
    Sort version numbers correctly.
    
    Args:
        versions: List of version strings (e.g., ["1.0", "1.2.3", "1.2.10"])
    Returns:
        Sorted list of version strings
        
    Example:
        Input: ["1.2.10", "1.2.2", "1.10", "1.2"]
        Output: ["1.2", "1.2.2", "1.2.10", "1.10"]
    """
    def version_key(version):
        """
        Convert version string to tuple of integers.
        Pad with zeros for versions with fewer components.
        """
        # Split version into components and convert to integers
        components = [int(x) for x in version.split('.')]
        # Pad with zeros to handle varying lengths
        # Most version numbers won't exceed 100 components
        return components + [0] * (100 - len(components))
    
    return sorted(versions, key=version_key)

# Test the function
test_versions = ["1.2.10", "1.2.2", "1.10", "1.2"]
sorted_versions = sort_versions(test_versions)
print("Versions in order:")
for version in sorted_versions:
    print(version)

# Additional test cases
edge_cases = ["2", "2.0", "2.0.0", "2.0.0.0"]
print("\nEdge cases:")
print(sort_versions(edge_cases))`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'What is the advantage of using operator.attrgetter over a lambda function for sorting?',
      options: [
        'It allows sorting by multiple attributes',
        'It provides better performance for large datasets',
        'It handles None values automatically',
        'It enables reverse sorting'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Both methods can sort by multiple attributes.',
        'Correct! attrgetter is implemented in C and provides better performance than equivalent lambda functions, especially for large datasets.',
        'Incorrect. None handling must be implemented separately for both methods.',
        'Incorrect. Both methods support reverse sorting using the reverse parameter.'
      ],
      difficulty: Difficulty.Advanced,
    },
    {
      question: 'When sorting with multiple criteria using tuples, why might you use negative values?',
      options: [
        'To improve performance',
        'To handle missing values',
        'To achieve descending order for some criteria while keeping ascending order for others',
        'To ensure stability in the sort'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Using negative values doesn\'t affect performance.',
        'Incorrect. Missing values should be handled separately.',
        'Correct! Since tuples sort in ascending order by default, using negative values allows you to sort some criteria in descending order while keeping others in ascending order.',
        'Incorrect. Sort stability is guaranteed regardless of using negative values.'
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const twoPointerBasicsData: LessonContent = {
  title: 'Two-Pointer Techniques: A Powerful Tool for Array Problems',
  content: `Let's explore how two-pointer techniques can help us solve array problems efficiently. Think of two pointers like having two fingers keeping track of different positions in an array - this simple idea leads to elegant solutions for many problems.

<h3>Understanding Two-Pointer Technique</h3>

The two-pointer technique involves maintaining two position pointers in an array and moving them according to certain rules. By moving these pointers intelligently, we can often avoid nested loops and achieve more efficient solutions.

<div class="visualization-container bg-white p-6 rounded-lg shadow-md my-8">
  <h4 class="text-center text-gray-700 mb-4">Common Two-Pointer Patterns</h4>
  <div class="flex flex-col space-y-8">
    <!-- Opposite Ends Pattern -->
    <div>
      <div class="text-center mb-2">Pattern 1: From Opposite Ends</div>
      <div class="flex justify-center space-x-1">
        <div class="w-12 h-12 border-2 border-green-400 bg-green-100 flex items-center justify-center">
          <div class="text-sm">Left</div>
        </div>
        <div class="w-12 h-12 border-2 border-gray-400 flex items-center justify-center">2</div>
        <div class="w-12 h-12 border-2 border-gray-400 flex items-center justify-center">3</div>
        <div class="w-12 h-12 border-2 border-gray-400 flex items-center justify-center">4</div>
        <div class="w-12 h-12 border-2 border-red-400 bg-red-100 flex items-center justify-center">
          <div class="text-sm">Right</div>
        </div>
      </div>
    </div>
    
    <!-- Same Direction Pattern -->
    <div>
      <div class="text-center mb-2">Pattern 2: Moving in Same Direction</div>
      <div class="flex justify-center space-x-1">
        <div class="w-12 h-12 border-2 border-green-400 bg-green-100 flex items-center justify-center">
          <div class="text-sm">Slow</div>
        </div>
        <div class="w-12 h-12 border-2 border-gray-400 flex items-center justify-center">2</div>
        <div class="w-12 h-12 border-2 border-red-400 bg-red-100 flex items-center justify-center">
          <div class="text-sm">Fast</div>
        </div>
        <div class="w-12 h-12 border-2 border-gray-400 flex items-center justify-center">4</div>
        <div class="w-12 h-12 border-2 border-gray-400 flex items-center justify-center">5</div>
      </div>
    </div>
  </div>
</div>

<h3>Pattern 1: Opposite Ends</h3>

One common pattern starts with pointers at opposite ends of the array. This is particularly useful for problems involving pairs of elements:

\`\`\`python
def find_pair_with_sum(array, target_sum):
    """
    Find a pair of numbers that sum to target_sum.
    
    Args:
        array: Sorted list of numbers
        target_sum: Target sum to find
    Returns:
        Tuple of (left_index, right_index) or None if not found
        
    Time Complexity: O(n)
    Space Complexity: O(1)
    """
    left = 0
    right = len(array) - 1
    
    while left < right:
        current_sum = array[left] + array[right]
        
        if current_sum == target_sum:
            return (left, right)
        elif current_sum < target_sum:
            # Need a larger sum, move left pointer right
            left += 1
        else:
            # Need a smaller sum, move right pointer left
            right -= 1
    
    return None  # No pair found

def demonstrate_opposite_ends():
    """Show how opposite ends pattern works step by step."""
    array = [1, 3, 5, 7, 9, 11]
    target = 14
    
    print(f"Finding pair summing to {target} in {array}")
    left = 0
    right = len(array) - 1
    
    while left < right:
        current_sum = array[left] + array[right]
        print(f"\nChecking values at positions {left} and {right}")
        print(f"{array[left]} + {array[right]} = {current_sum}")
        
        if current_sum == target:
            print("Found pair!")
            break
        elif current_sum < target:
            print("Sum too small, moving left pointer right")
            left += 1
        else:
            print("Sum too large, moving right pointer left")
            right -= 1

# Show the process
demonstrate_opposite_ends()
\`\`\`

<h3>Pattern 2: Same Direction</h3>

Another common pattern involves two pointers moving in the same direction, often at different speeds:

\`\`\`python
def remove_duplicates(array):
    """
    Remove duplicates from sorted array in-place.
    
    Args:
        array: Sorted list of numbers
    Returns:
        Length of array after removing duplicates
        
    Time Complexity: O(n)
    Space Complexity: O(1)
    """
    if not array:
        return 0
        
    # Position to write next unique element
    write_pos = 1
    
    # Position to read and check elements
    for read_pos in range(1, len(array)):
        if array[read_pos] != array[write_pos - 1]:
            array[write_pos] = array[read_pos]
            write_pos += 1
    
    return write_pos

def demonstrate_same_direction():
    """Show how same direction pattern works step by step."""
    array = [1, 1, 2, 2, 3, 4, 4, 5]
    print(f"Removing duplicates from {array}")
    
    write_pos = 1
    
    for read_pos in range(1, len(array)):
        print(f"\nRead position: {read_pos}, Write position: {write_pos}")
        print(f"Comparing {array[read_pos]} with previous unique {array[write_pos-1]}")
        
        if array[read_pos] != array[write_pos - 1]:
            array[write_pos] = array[read_pos]
            print(f"Found new unique element, writing {array[read_pos]} at position {write_pos}")
            write_pos += 1
        else:
            print("Duplicate found, skipping")

# Show the process
demonstrate_same_direction()
\`\`\`

<h3>When to Use Two Pointers</h3>

Two-pointer techniques are particularly useful for:

1. Searching for Pairs:
   - Finding pairs with a specific sum
   - Finding closest pairs to a target value
   - Identifying pairs that satisfy certain conditions

2. In-place Array Modifications:
   - Removing duplicates
   - Moving elements to specific positions
   - Partitioning arrays

3. Window-Based Problems:
   - Finding subarrays with specific properties
   - Calculating running averages
   - Maintaining sliding windows

Here's an example combining multiple aspects:

\`\`\`python
def find_triplet_with_sum(array, target_sum):
    """
    Find three numbers that sum to target_sum.
    
    Args:
        array: Sorted list of numbers
        target_sum: Target sum to find
    Returns:
        Tuple of (i, j, k) indices or None if not found
        
    Uses two-pointer technique with an outer loop.
    """
    # Sort array first if not already sorted
    array.sort()
    
    for i in range(len(array) - 2):
        # Skip duplicates for first number
        if i > 0 and array[i] == array[i-1]:
            continue
            
        # Use two pointers for remaining sum
        left = i + 1
        right = len(array) - 1
        remaining = target_sum - array[i]
        
        while left < right:
            current_sum = array[left] + array[right]
            
            if current_sum == remaining:
                return (i, left, right)
            elif current_sum < remaining:
                # Skip duplicates for second number
                left += 1
                while left < right and array[left] == array[left-1]:
                    left += 1
            else:
                # Skip duplicates for third number
                right -= 1
                while left < right and array[right] == array[right+1]:
                    right -= 1
    
    return None

def demonstrate_triplet_search():
    """Show how triplet search works step by step."""
    array = [1, 2, 2, 3, 4, 4, 5]
    target = 8
    
    print(f"Finding triplet summing to {target} in {array}")
    
    for i in range(len(array) - 2):
        print(f"\nFixed first number: {array[i]}")
        left = i + 1
        right = len(array) - 1
        
        while left < right:
            current_sum = array[i] + array[left] + array[right]
            print(f"Testing {array[i]} + {array[left]} + {array[right]} = {current_sum}")
            
            if current_sum == target:
                print("Found triplet!")
                break
            elif current_sum < target:
                left += 1
            else:
                right -= 1

# Show the process
demonstrate_triplet_search()
\`\`\``,

  exercises: [
    {
      prompt: 'Implement a function that finds the continuous subarray in a sorted array whose sum is closest to a target value.',
      initialCode: `def find_closest_sum_subarray(array, target):
    """
    Find continuous subarray with sum closest to target.
    
    Args:
        array: Sorted list of numbers
        target: Target sum
    Returns:
        Tuple of (start_index, end_index) of closest subarray
    """
    # Your implementation here
    pass`,
      solution: `def find_closest_sum_subarray(array, target):
    """
    Find continuous subarray with sum closest to target.
    
    Args:
        array: Sorted list of numbers
        target: Target sum
    Returns:
        Tuple of (start_index, end_index) of closest subarray
        
    Time Complexity: O(n)
    Space Complexity: O(1)
    """
    if not array:
        return None
    
    start = 0
    end = 0
    current_sum = array[0]
    closest_diff = abs(current_sum - target)
    result = (0, 0)
    
    while end < len(array):
        if current_sum == target:
            return (start, end)
            
        if abs(current_sum - target) < closest_diff:
            closest_diff = abs(current_sum - target)
            result = (start, end)
        
        if current_sum < target and end < len(array) - 1:
            # Expand window
            end += 1
            current_sum += array[end]
        else:
            # Shrink window
            current_sum -= array[start]
            start += 1
            if start > end:
                end = start
                if end < len(array):
                    current_sum = array[end]
    
    return result

# Test the implementation
def test_closest_sum():
    test_cases = [
        ([1, 2, 3, 4, 5], 10),
        ([2, 4, 6, 8], 15),
        ([1, 3, 5], 7)
    ]
    
    for array, target in test_cases:
        start, end = find_closest_sum_subarray(array, target)
        subarray = array[start:end+1]
        current_sum = sum(subarray)
        print(f"\nArray: {array}")
        print(f"Target: {target}")
        print(f"Found subarray: {subarray}")
        print(f"Sum: {current_sum}")

test_closest_sum()`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Create a function that finds the smallest subarray containing all elements from a given set of numbers, maintaining relative order.',
      initialCode: `def find_smallest_subarray_with_elements(array, elements):
    """
    Find smallest subarray containing all given elements.
    
    Args:
        array: List of numbers
        elements: Set of numbers to find
    Returns:
        Tuple of (start_index, end_index) of smallest subarray
    """
    # Your implementation here
    pass`,
      solution: `def find_smallest_subarray_with_elements(array, elements):
    """
    Find smallest subarray containing all given elements.
    
    Args:
        array: List of numbers
        elements: Set of numbers to find
    Returns:
        Tuple of (start_index, end_index) of smallest subarray
        
    Time Complexity: O(n)
    Space Complexity: O(k) where k is len(elements)
    """
    if not array or not elements:
        return None
    
    # Convert elements to set for O(1) lookup
    required = set(elements)
    current = {}
    start = 0
    min_length = float('inf')
    result = None
    
    for end, num in enumerate(array):
        # Update current window
        if num in required:
            current[num] = current.get(num, 0) + 1
        
        # Try to minimize window
        while len(current) == len(required):
            if end - start + 1 < min_length:
                min_length = end - start + 1
                result = (start, end)
            
            # Remove start element if possible
            if array[start] in current:
                current[array[start]] -= 1
                if current[array[start]] == 0:
                    del current[array[start]]
            start += 1
    
    return result

# Test the implementation
def test_smallest_subarray():
    test_cases = [
        ([1, 2, 3, 4, 2, 3, 1], {2, 3}),
        ([5, 1, 3, 2, 3, 4, 5, 6], {3, 5, 6}),
        ([1, 2, 3, 4, 5], {1, 5})
    ]
    
    for array, elements in test_cases:
        result = find_smallest_subarray_with_elements(array, elements)
        if result:
            start, end = result
            subarray = array[start:end+1]
            print(f"\nArray: {array}")
            print(f"Elements to find: {elements}")
            print(f"Smallest subarray: {subarray}")
            print(f"Length: {end - start + 1}")

test_smallest_subarray()`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'When using the two-pointer technique with opposite ends, why must the array typically be sorted first?',
      options: [
        'To improve performance',
        'Because the algorithm needs sequential access',
        'To make directional decisions based on values possible',
        'To handle duplicate elements'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. While sorted arrays can improve performance in some cases, this isn\'t why sorting is needed for the two-pointer technique.',
        'Incorrect. The technique works with random access, so sequential access isn\'t the reason.',
        'Correct! With a sorted array, we can decide which pointer to move based on whether we need a larger or smaller value. This property is crucial for the technique to work correctly.',
        'Incorrect. While sorting helps with duplicates, this isn\'t the primary reason for requiring a sorted array.'
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the key advantage of using two pointers moving in the same direction over using nested loops?',
      options: [
        'It always uses less memory',
        'It reduces time complexity from O(n²) to O(n)',
        'It makes the code shorter',
        'It works better with unsorted arrays'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Both approaches typically use O(1) extra space.',
        'Correct! The two-pointer technique allows us to process the array in a single pass instead of using nested loops, reducing time complexity from O(n²) to O(n).',
        'Incorrect. Code length isn\'t a significant factor and the implementation might actually be longer in some cases.',
        'Incorrect. The technique often requires sorted arrays or specific array properties to work correctly.'
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'In the context of removing duplicates from a sorted array in-place, why do we need two pointers?',
      options: [
        'One to read and one to write unique elements',
        'To compare adjacent elements',
        'To mark the start and end of duplicate sequences',
        'To maintain the array length'
      ],
      correctAnswer: 0,
      explanations: [
        'Correct! We need one pointer to read through all elements and another to keep track of where to write the next unique element, enabling in-place modification.',
        'Incorrect. While we do compare elements, this could be done with a single pointer.',
        'Incorrect. We don\'t need to explicitly mark duplicate sequences.',
        'Incorrect. The array length is maintained automatically.'
      ],
      difficulty: Difficulty.Advanced,
    }
  ]
};

const twoPointerVariationsData: LessonContent = {
  title: 'Two-Pointer Variations: Advanced Array Problem-Solving Patterns',
  content: `Let's explore different ways to use two pointers to solve array problems efficiently. Just as we can hold a book in different ways, we can position and move our pointers in various patterns to solve different types of problems.

<h3>Variation 1: Fast and Slow Pointers</h3>

Imagine two runners on a track - one moving twice as fast as the other. This pattern is useful for finding patterns in arrays or detecting cycles.

\`\`\`python
def find_array_middle(array):
    """
    Find middle element using fast/slow pointer technique.
    
    Args:
        array: List of elements
    Returns:
        Middle element of the array
        
    This demonstrates the fast/slow pointer pattern where
    one pointer moves twice as fast as the other.
    """
    # Initialize our two pointers
    slow = fast = 0
    
    # Move fast pointer twice as fast as slow
    while fast < len(array) - 1 and fast + 1 < len(array):
        slow += 1
        fast += 2
        print(f"Slow at index {slow} ({array[slow]})")
        print(f"Fast at index {fast} ({array[fast]})")
    
    return array[slow]

def demonstrate_fast_slow():
    """Show how fast/slow pointer pattern works."""
    array = [1, 2, 3, 4, 5, 6, 7]
    print(f"Finding middle of: {array}")
    middle = find_array_middle(array)
    print(f"Middle element: {middle}")
\`\`\`

<div class="visualization-container bg-white p-6 rounded-lg shadow-md my-8">
  <h4 class="text-center text-gray-700 mb-4">Fast/Slow Pointer Movement</h4>
  <div class="flex flex-col space-y-8">
    <!-- Array visualization -->
    <div class="flex justify-center space-x-1">
      <div class="w-12 h-12 border-2 border-green-400 bg-green-100 flex items-center justify-center">
        <div class="text-sm">Slow</div>
      </div>
      <div class="w-12 h-12 border-2 border-gray-400 flex items-center justify-center">2</div>
      <div class="w-12 h-12 border-2 border-red-400 bg-red-100 flex items-center justify-center">
        <div class="text-sm">Fast</div>
      </div>
      <div class="w-12 h-12 border-2 border-gray-400 flex items-center justify-center">4</div>
      <div class="w-12 h-12 border-2 border-gray-400 flex items-center justify-center">5</div>
    </div>
    <div class="text-sm text-gray-600 text-center">
      Fast pointer moves two steps for every one step of slow pointer
    </div>
  </div>
</div>

<h3>Variation 2: Sliding Window with Anchored Start</h3>

This variation keeps one pointer fixed while the other explores ahead, useful for finding subarrays with specific properties.

\`\`\`python
def find_subarray_sum(array, target_sum):
    """
    Find subarray that sums to target using sliding window.
    
    Args:
        array: List of positive numbers
        target_sum: Target sum to find
    Returns:
        Tuple of (start, end) indices or None
        
    This demonstrates anchored start with sliding end pointer.
    """
    start = 0
    end = 0
    current_sum = 0
    
    while end < len(array):
        # Add elements until we reach or exceed target
        while end < len(array) and current_sum < target_sum:
            current_sum += array[end]
            print(f"Added {array[end]}, sum now {current_sum}")
            end += 1
            
        # If we found our target, return the window
        if current_sum == target_sum:
            return (start, end - 1)
            
        # Remove elements from start until we're below target
        while start < end and current_sum > target_sum:
            current_sum -= array[start]
            print(f"Removed {array[start]}, sum now {current_sum}")
            start += 1
            
        if current_sum == target_sum:
            return (start, end - 1)
    
    return None

def demonstrate_sliding_window():
    """Show how sliding window with anchored start works."""
    array = [1, 4, 2, 3, 5, 2]
    target = 9
    print(f"Finding subarray summing to {target} in {array}")
    result = find_subarray_sum(array, target)
    if result:
        start, end = result
        print(f"Found subarray: {array[start:end+1]}")
\`\`\`

<h3>Variation 3: Symmetric Pointers</h3>

This variation maintains symmetry around a center point, useful for palindrome-like problems or finding balanced segments.

\`\`\`python
def find_longest_balanced_segment(array):
    """
    Find longest segment with equal number of positive and negative numbers.
    
    Args:
        array: List of numbers
    Returns:
        Tuple of (start, end) indices of longest balanced segment
        
    This demonstrates symmetric pointer expansion from center.
    """
    def expand_around_center(left, right):
        """Helper to expand window while maintaining balance."""
        pos_count = neg_count = 0
        
        while left >= 0 and right < len(array):
            # Count positives and negatives in current window
            for i in range(left, right + 1):
                if array[i] > 0:
                    pos_count += 1
                elif array[i] < 0:
                    neg_count += 1
            
            # If balanced, try to expand
            if pos_count == neg_count:
                if left > 0 and right < len(array) - 1:
                    left -= 1
                    right += 1
                else:
                    break
            else:
                # If unbalanced, retract to last balanced position
                left += 1
                right -= 1
                break
                
        return left, right if pos_count == neg_count else (0, -1)
    
    max_length = 0
    result = (0, -1)
    
    # Try all possible centers
    for i in range(len(array) - 1):
        # Try odd length segments
        left, right = expand_around_center(i, i)
        if right - left + 1 > max_length and right >= left:
            max_length = right - left + 1
            result = (left, right)
            
        # Try even length segments
        left, right = expand_around_center(i, i + 1)
        if right - left + 1 > max_length and right >= left:
            max_length = right - left + 1
            result = (left, right)
    
    return result

def demonstrate_symmetric():
    """Show how symmetric pointer expansion works."""
    array = [1, -1, 2, -2, 3, -3]
    print(f"Finding balanced segment in: {array}")
    start, end = find_longest_balanced_segment(array)
    print(f"Found segment: {array[start:end+1]}")
\`\`\`

<h3>Variation 4: Multi-Array Two Pointers</h3>

This variation uses two pointers across multiple arrays, useful for merging or finding relationships between arrays.

\`\`\`python
def find_common_elements(arr1, arr2, arr3):
    """
    Find elements common to three sorted arrays.
    
    Args:
        arr1, arr2, arr3: Sorted arrays
    Returns:
        List of common elements
        
    This demonstrates coordinating pointers across multiple arrays.
    """
    # Initialize pointers for each array
    p1 = p2 = p3 = 0
    result = []
    
    while p1 < len(arr1) and p2 < len(arr2) and p3 < len(arr3):
        # Find minimum of current elements
        min_val = min(arr1[p1], arr2[p2], arr3[p3])
        
        # If all match, we found a common element
        if arr1[p1] == arr2[p2] == arr3[p3]:
            result.append(arr1[p1])
            p1 += 1
            p2 += 1
            p3 += 1
        else:
            # Move pointers pointing to minimum value
            if arr1[p1] == min_val: p1 += 1
            if arr2[p2] == min_val: p2 += 1
            if arr3[p3] == min_val: p3 += 1
            
        print(f"Pointers: {p1}, {p2}, {p3}")
        print(f"Current elements: {arr1[p1] if p1 < len(arr1) else 'END'}, " 
              f"{arr2[p2] if p2 < len(arr2) else 'END'}, "
              f"{arr3[p3] if p3 < len(arr3) else 'END'}")
    
    return result

def demonstrate_multi_array():
    """Show how multi-array pointer coordination works."""
    arr1 = [1, 2, 3, 4, 5]
    arr2 = [2, 3, 5, 7, 8]
    arr3 = [1, 3, 5, 6, 9]
    print(f"Finding common elements in:")
    print(f"Array 1: {arr1}")
    print(f"Array 2: {arr2}")
    print(f"Array 3: {arr3}")
    result = find_common_elements(arr1, arr2, arr3)
    print(f"Common elements: {result}")
\`\`\``,

  exercises: [
    {
      prompt: 'Implement a function that finds the longest subarray where the difference between maximum and minimum elements is at most k.',
      initialCode: `def find_bounded_range_subarray(array, k):
    """
    Find longest subarray with max-min difference <= k.
    
    Args:
        array: List of numbers
        k: Maximum allowed difference
    Returns:
        Tuple of (start, end) indices of longest valid subarray
    """
    # Your implementation here
    pass`,
      solution: `def find_bounded_range_subarray(array, k):
    """
    Find longest subarray with max-min difference <= k.
    
    Args:
        array: List of numbers
        k: Maximum allowed difference
    Returns:
        Tuple of (start, end) indices of longest valid subarray
        
    Time Complexity: O(n)
    Space Complexity: O(1)
    """
    if not array:
        return None
        
    start = 0
    max_length = 0
    result = (0, 0)
    window_min = window_max = array[0]
    
    for end in range(len(array)):
        # Update window bounds
        window_min = min(window_min, array[end])
        window_max = max(window_max, array[end])
        
        # Shrink window if needed
        while window_max - window_min > k:
            start += 1
            if start > end:
                window_min = window_max = array[end]
            else:
                # Recalculate window bounds
                window_min = min(array[start:end+1])
                window_max = max(array[start:end+1])
        
        # Update result if current window is longer
        if end - start + 1 > max_length:
            max_length = end - start + 1
            result = (start, end)
    
    return result

# Test the implementation
def test_bounded_range():
    test_cases = [
        ([1, 3, 6, 8, 4, 2], 3),
        ([1, 1, 1, 3, 3, 3], 2),
        ([5, 4, 3, 2, 1], 2)
    ]
    
    for array, k in test_cases:
        start, end = find_bounded_range_subarray(array, k)
        subarray = array[start:end+1]
        diff = max(subarray) - min(subarray)
        print(f"\nArray: {array}")
        print(f"k: {k}")
        print(f"Found subarray: {subarray}")
        print(f"Max-min difference: {diff}")

test_bounded_range()`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Create a function that finds three non-overlapping subarrays of size k with maximum sum.',
      initialCode: `def find_three_max_subarrays(array, k):
    """
    Find three non-overlapping size-k subarrays with maximum sum.
    
    Args:
        array: List of numbers
        k: Size of each subarray
    Returns:
        List of starting indices of the three subarrays
    """
    # Your implementation here
    pass`,
      solution: `def find_three_max_subarrays(array, k):
    """
    Find three non-overlapping size-k subarrays with maximum sum.
    
    Args:
        array: List of numbers
        k: Size of each subarray
    Returns:
        List of starting indices of the three subarrays
        
    Time Complexity: O(n)
    Space Complexity: O(n)
    """
    # Get initial window sums
    if len(array) < k * 3:
        return None
        
    # Calculate sum of first window
    window_sum = sum(array[:k])
    window_sums = [window_sum]
    
    # Calculate all window sums
    for i in range(k, len(array)):
        window_sum = window_sum - array[i-k] + array[i]
        window_sums.append(window_sum)
    
    # Find best windows from left and right
    left_best = [0] * len(array)
    curr_best = 0
    for i in range(len(window_sums)-2*k):
        if window_sums[i] > window_sums[curr_best]:
            curr_best = i
        left_best[i+k] = curr_best
    
    right_best = [0] * len(array)
    curr_best = len(window_sums)-1
    for i in range(len(window_sums)-1, 2*k-1, -1):
        if window_sums[i] >= window_sums[curr_best]:
            curr_best = i
        right_best[i-k] = curr_best
    
    # Find best middle window
    max_sum = float('-inf')
    result = None
    
    for i in range(k, len(array)-k):
        left = left_best[i]
        right = right_best[i]
        total = window_sums[left] + window_sums[i] + window_sums[right]
        
        if total > max_sum:
            max_sum = total
            result = [left, i, right]
    
    return result

# Test the implementation
def test_three_subarrays():
    test_cases = [
        ([1, 2, 1, 2, 6, 7, 5, 1], 2),
        ([2, 4, 1, 2, 5, 3, 2, 4, 1], 3),
        ([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)
    ]
    
    for array, k in test_cases:
        result = find_three_max_subarrays(array, k)
        if result:
            indices = result
            subarrays = [array[i:i+k] for i in indices]
            sums = [sum(arr) for arr in subarrays]
            print(f"\nArray: {array}")
            print(f"k: {k}")
            print(f"Found subarrays:")
            for i, (arr, sum_val) in enumerate(zip(subarrays, sums)):
                print(f"  Subarray {i+1}: {arr} (sum: {sum_val})")
            print(f"Total sum: {sum(sums)}")

test_three_subarrays()`
    }
  ],
    quizzes: [
      {
        question: 'Why is the fast/slow pointer variation particularly useful for finding cycle-like patterns in arrays?',
        options: [
          'Because it requires less memory',
          'Because the pointers will eventually meet if a cycle exists',
          'Because it\'s faster than other methods',
          'Because it works with unsorted arrays'
        ],
        correctAnswer: 1,
        explanations: [
          'Incorrect. Memory usage is not the key advantage of this variation.',
          'Correct! The different speeds of the pointers ensure they will meet if a cycle exists, as the fast pointer will eventually catch up to the slow pointer.',
          'Incorrect. The speed advantage isn\'t the main reason this variation is useful for cycle detection.',
          'Incorrect. While it does work with unsorted arrays, this isn\'t why it\'s particularly good for cycle detection.'
        ],
        difficulty: Difficulty.Intermediate,
      },
      {
        question: 'In the sliding window variation with anchored start, when should we move the start pointer?',
        options: [
          'After every move of the end pointer',
          'When we need to reduce the window size',
          'When we find a valid solution',
          'At regular intervals'
        ],
        correctAnswer: 1,
        explanations: [
          'Incorrect. Moving the start pointer after every end pointer move would prevent finding many valid solutions.',
          'Correct! We move the start pointer when our window becomes invalid (e.g., sum too large, too many elements) and we need to shrink it.',
          'Incorrect. Finding a valid solution doesn\'t necessarily mean we should move the start pointer.',
          'Incorrect. The movement should be based on window properties, not fixed intervals.'
        ],
        difficulty: Difficulty.Advanced,
      },
      {
        question: 'What is the key advantage of the multi-array two-pointer variation over nested loops?',
        options: [
          'It uses less memory',
          'It processes all arrays in a single pass',
          'It works with unsorted arrays',
          'It handles duplicates better'
        ],
        correctAnswer: 1,
        explanations: [
          'Incorrect. Memory usage is similar for both approaches.',
          'Correct! By coordinating pointers across arrays, we can process all arrays in a single pass, avoiding nested loops and achieving better time complexity.',
          'Incorrect. This variation typically requires sorted arrays to work correctly.',
          'Incorrect. Duplicate handling is not the main advantage of this variation.'
        ],
        difficulty: Difficulty.Intermediate,
      }
    ]
  };

  const arrayPartitioningData: LessonContent = {
    title: 'Understanding Array Partitioning with Two Pointers',
    content: `Think of array partitioning like sorting books on a shelf - we want to group similar items together efficiently. The two-pointer approach helps us do this by working from both ends of the array, making decisions about where each element belongs and moving them accordingly. Let's explore how this works in practice.
  
  <h3>Basic Partitioning: Understanding the Foundation</h3>
  
  The simplest form of partitioning divides an array into two groups based on a condition. Imagine sorting books into fiction and non-fiction - we'll work from both ends, swapping books until everything is in its right place.
  
  \`\`\`python
  def partition_by_condition(array, condition):
      """
      Partition array based on a condition using two pointers.
      
      Args:
          array: List of elements to partition
          condition: Function that returns True/False for each element
          
      Returns:
          Index where partition occurs
          
      Time Complexity: O(n)
      Space Complexity: O(1)
      """
      left = 0
      right = len(array) - 1
      
      print(f"Initial array: {array}")
      
      while left <= right:
          # Find element on left that doesn't satisfy condition
          while left <= right and condition(array[left]):
              left += 1
              print(f"Left pointer moved to {left}")
          
          # Find element on right that satisfies condition
          while left <= right and not condition(array[right]):
              right -= 1
              print(f"Right pointer moved to {right}")
          
          # Swap elements if pointers haven't crossed
          if left < right:
              array[left], array[right] = array[right], array[left]
              print(f"Swapped elements: {array}")
              left += 1
              right -= 1
      
      return left
  
  # Example usage: Partition even and odd numbers
  def is_even(x): return x % 2 == 0
  numbers = [4, 3, 7, 2, 5, 8, 1, 6]
  partition_point = partition_by_condition(numbers, is_even)
  print(f"Final array: {numbers}")
  print(f"Partition point: {partition_point}")
  \`\`\`
  
  <div class="visualization-container bg-white p-6 rounded-lg shadow-md my-8">
    <h4 class="text-center text-gray-700 mb-4">Two-Pointer Partitioning Process</h4>
    <div class="flex flex-col space-y-6">
      <!-- Initial state -->
      <div>
        <div class="text-center mb-2">Before Partitioning</div>
        <div class="flex justify-center space-x-1">
          <div class="w-12 h-12 border-2 border-blue-400 flex items-center justify-center">4</div>
          <div class="w-12 h-12 border-2 border-red-400 flex items-center justify-center">3</div>
          <div class="w-12 h-12 border-2 border-red-400 flex items-center justify-center">7</div>
          <div class="w-12 h-12 border-2 border-blue-400 flex items-center justify-center">2</div>
          <div class="w-12 h-12 border-2 border-red-400 flex items-center justify-center">5</div>
        </div>
      </div>
      <!-- After partitioning -->
      <div>
        <div class="text-center mb-2">After Partitioning</div>
        <div class="flex justify-center space-x-1">
          <div class="w-12 h-12 border-2 border-blue-400 bg-blue-100 flex items-center justify-center">4</div>
          <div class="w-12 h-12 border-2 border-blue-400 bg-blue-100 flex items-center justify-center">2</div>
          <div class="w-12 h-12 border-2 border-gray-400 flex items-center justify-center">|</div>
          <div class="w-12 h-12 border-2 border-red-400 bg-red-100 flex items-center justify-center">7</div>
          <div class="w-12 h-12 border-2 border-red-400 bg-red-100 flex items-center justify-center">5</div>
        </div>
      </div>
    </div>
  </div>
  
  <h3>Three-Way Partitioning</h3>
  
  Sometimes we need to partition arrays into three groups. Think of sorting books by size - small, medium, and large. This requires a more sophisticated approach but still uses the power of multiple pointers.
  
  \`\`\`python
  def three_way_partition(array, low_val, high_val):
      """
      Partition array into three sections: < low_val, between, > high_val.
      
      Args:
          array: List of numbers to partition
          low_val: Lower boundary value
          high_val: Upper boundary value
          
      Returns:
          Tuple of (low_idx, high_idx) marking partition boundaries
          
      Time Complexity: O(n)
      Space Complexity: O(1)
      """
      if low_val > high_val:
          raise ValueError("low_val must be <= high_val")
          
      low = 0  # Next position for elements < low_val
      mid = 0  # Current position being examined
      high = len(array) - 1  # Next position for elements > high_val
      
      print(f"Initial array: {array}")
      
      while mid <= high:
          if array[mid] < low_val:
              # Element belongs in low section
              array[low], array[mid] = array[mid], array[low]
              print(f"Moved {array[low]} to low section: {array}")
              low += 1
              mid += 1
          elif array[mid] > high_val:
              # Element belongs in high section
              array[mid], array[high] = array[high], array[mid]
              print(f"Moved {array[high]} to high section: {array}")
              high -= 1
          else:
              # Element belongs in middle section
              print(f"Kept {array[mid]} in middle section")
              mid += 1
      
      return low, high
  
  # Example: Partition numbers around 3 and 7
  numbers = [1, 8, 3, 6, 4, 7, 2, 9, 5]
  low, high = three_way_partition(numbers, 3, 7)
  print(f"Final array: {numbers}")
  print(f"Sections: <3: {numbers[:low]}, 3-7: {numbers[low:high+1]}, >7: {numbers[high+1:]}")
  \`\`\`
  
  <h3>Maintaining Relative Order</h3>
  
  Sometimes we need to partition while keeping the relative order of elements within each group. This is like sorting books by genre while maintaining alphabetical order within each genre.
  
  \`\`\`python
  def partition_maintain_order(array, condition):
      """
      Partition array while maintaining relative order within groups.
      
      Args:
          array: List of elements to partition
          condition: Function that returns True/False for each element
          
      Returns:
          Index where partition occurs
          
      Time Complexity: O(n)
      Space Complexity: O(n)
      """
      # First count elements that satisfy condition
      count = sum(1 for x in array if condition(x))
      
      # Create new array to maintain order
      result = [0] * len(array)
      pos_true = 0
      pos_false = count
      
      print(f"Initial array: {array}")
      
      # Place elements in correct positions
      for x in array:
          if condition(x):
              result[pos_true] = x
              print(f"Placed {x} at position {pos_true} (true section)")
              pos_true += 1
          else:
              result[pos_false] = x
              print(f"Placed {x} at position {pos_false} (false section)")
              pos_false += 1
      
      # Copy back to original array
      for i in range(len(array)):
          array[i] = result[i]
      
      return count
  
  # Example: Partition even/odd numbers maintaining order
  numbers = [4, 3, 7, 2, 5, 8, 1, 6]
  partition_point = partition_maintain_order(numbers, is_even)
  print(f"Final array: {numbers}")
  print(f"Even numbers: {numbers[:partition_point]}")
  print(f"Odd numbers: {numbers[partition_point:]}")
  \`\`\`
  
  <h3>Applications and Variations</h3>
  
  Array partitioning is a fundamental building block for many algorithms. Here are some practical applications:
  
  1. Quick Sort Implementation:
  \`\`\`python
  def quick_sort_partition(array, low, high):
      """
      Partition array around pivot for quicksort.
      Demonstrates using partitioning in sorting algorithm.
      """
      pivot = array[high]
      i = low - 1  # Index for smaller elements
      
      for j in range(low, high):
          if array[j] <= pivot:
              i += 1
              array[i], array[j] = array[j], array[i]
              
      array[i + 1], array[high] = array[high], array[i + 1]
      return i + 1
  \`\`\`
  
  2. Group Management:
  \`\`\`python
  def group_elements(array, groups):
      """
      Partition array into multiple groups based on criteria.
      Shows how to extend partitioning to multiple categories.
      """
      counts = [0] * len(groups)
      # Count elements in each group
      for x in array:
          for i, group in enumerate(groups):
              if group(x):
                  counts[i] += 1
                  break
                  
      # Create positions for each group
      positions = [sum(counts[:i]) for i in range(len(groups))]
      result = [0] * len(array)
      
      # Place elements in their groups
      for x in array:
          for i, group in enumerate(groups):
              if group(x):
                  result[positions[i]] = x
                  positions[i] += 1
                  break
                  
      return result
  \`\`\``,
  
    exercises: [
      {
        prompt: 'Implement a function that partitions an array around its median value, with all smaller elements before and all larger elements after, while handling duplicates of the median value efficiently.',
        initialCode: `def partition_around_median(array):
      """
      Partition array around its median value.
      
      Args:
          array: List of numbers
      Returns:
          Tuple of (start_idx, end_idx) of median section
      """
      # Your implementation here
      pass`,
        solution: `def partition_around_median(array):
      """
      Partition array around its median value.
      
      Args:
          array: List of numbers
      Returns:
          Tuple of (start_idx, end_idx) of median section
          
      Time Complexity: O(n)
      Space Complexity: O(1)
      """
      if not array:
          return (0, 0)
      
      # Find median (this could be optimized with selection algorithm)
      median = sorted(array)[len(array) // 2]
      
      # Initialize pointers
      left = 0
      right = len(array) - 1
      i = 0
      
      # Three-way partition
      while i <= right:
          if array[i] < median:
              array[left], array[i] = array[i], array[left]
              left += 1
              i += 1
          elif array[i] > median:
              array[right], array[i] = array[i], array[right]
              right -= 1
          else:
              i += 1
      
      return (left, right)
  
  # Test the implementation
  def test_median_partition():
      test_cases = [
          [1, 4, 3, 4, 2, 4, 5, 4],
          [1, 2, 3, 4, 5],
          [3, 3, 3, 3, 3]
      ]
      
      for array in test_cases:
          arr_copy = array.copy()
          start, end = partition_around_median(arr_copy)
          print(f"\nOriginal array: {array}")
          print(f"Partitioned array: {arr_copy}")
          print(f"Median section: {arr_copy[start:end+1]}")
          
          # Verify partitioning
          for i in range(start):
              assert arr_copy[i] < arr_copy[start]
          for i in range(end+1, len(arr_copy)):
              assert arr_copy[i] > arr_copy[start]
  
  test_median_partition()`,
        difficulty: Difficulty.Advanced,
      },
      {
        prompt: 'Create a function that partitions an array such that all elements that are multiples of any prime less than 10 come before the other elements, maintaining relative order within each group.',
        initialCode: `def partition_prime_multiples(array):
      """
      Partition array by prime multiples maintaining order.
      
      Args:
          array: List of numbers
      Returns:
          Index where partition occurs
      """
      # Your implementation here
      pass`,
        solution: `def partition_prime_multiples(array):
      """
      Partition array by prime multiples maintaining order.
      
      Args:
          array: List of numbers
      Returns:
          Index where partition occurs
          
      Time Complexity: O(n)
      Space Complexity: O(n)
      """
      def is_prime_multiple(n):
          """Check if number is multiple of 2, 3, 5, or 7."""
          primes = [2, 3, 5, 7]
          return any(n % p == 0 for p in primes)
      
      # Count elements that are prime multiples
      count = sum(1 for x in array if is_prime_multiple(x))
      
      # Create result array
      result = [0] * len(array)
      prime_pos = 0
      other_pos = count
      
      # Place elements while maintaining order
      for x in array:
          if is_prime_multiple(x):
              result[prime_pos] = x
              prime_pos += 1
          else:
              result[other_pos] = x
              other_pos += 1
      
      # Copy back to original array
      for i in range(len(array)):
          array[i] = result[i]
      
      return count
  
  # Test the implementation
  def test_prime_partition():
      test_cases = [
          [1, 4, 6, 7, 8, 9, 10, 11],
          [13, 15, 17, 19, 21, 23],
          [2, 3, 5, 7, 11, 13, 17]
      ]
      
      for array in test_cases:
          arr_copy = array.copy()
          partition_idx = partition_prime_multiples(arr_copy)
          print(f"\nOriginal array: {array}")
          print(f"Partitioned array: {arr_copy}")
          print(f"Prime multiples: {arr_copy[:partition_idx]}")
          print(f"Others: {arr_copy[partition_idx:]}")
  
  test_prime_partition()`,
        difficulty: Difficulty.Intermediate,
      }
    ],
    quizzes: [
      {
        question: 'Why does basic two-pointer partitioning work from both ends of the array rather than using sequential traversal?',
        options: [
          'To improve performance',
          'To minimize memory usage',
          'To avoid shifting elements multiple times',
          'To handle duplicates better'
        ],
        correctAnswer: 2,
        explanations: [
          'Incorrect. While performance is similar, this isn\'t the main reason for working from both ends.',
          'Incorrect. Memory usage is O(1) regardless of traversal direction.',
          'Correct! Working from both ends allows us to place elements in their final positions immediately, avoiding the need to shift elements multiple times as we would with sequential traversal.',
          'Incorrect. Duplicate handling isn\'t affected by traversal direction.'
        ],
        difficulty: Difficulty.Intermediate,
      },
      {
        question: 'When maintaining relative order during partitioning, why do we need O(n) extra space?',
        options: [
          'To store temporary variables',
          'To keep track of element positions',
          'To preserve the original order while moving elements',
          'To handle edge cases'
        ],
        correctAnswer: 2,
        explanations: [
          'Incorrect. Temporary variables would only require O(1) space.',
          'Incorrect. Position tracking requires minimal space.',
          'Correct! To maintain relative order while partitioning, we need a separate array to place elements in their correct positions without disturbing the order within each group.',
          'Incorrect. Edge cases don\'t require additional space.'
        ],
        difficulty: Difficulty.Advanced,
      },
      {
        question: 'In three-way partitioning, why don\'t we increment mid pointer after swapping with high pointer?',
        options: [
          'To improve efficiency',
          'Because the swapped element hasn\'t been examined yet',
          'To handle duplicate elements',
          'To maintain balance between sections'
        ],
        correctAnswer: 1,
        explanations: [
          'Incorrect. This isn\'t about efficiency.',
          'Correct! When we swap with the high pointer, we get a new element at mid that we haven\'t examined yet. We need to process this element before moving forward.',
          'Incorrect. Duplicate handling isn\'t the primary reason.',
          'Incorrect. Section balance isn\'t affected by pointer movement.'
        ],
        difficulty: Difficulty.Advanced,
      }
    ]
};
const dutchFlagData: LessonContent = {
  title: 'The Dutch National Flag Algorithm: Mastering Three-Way Partitioning',
  content: `Understanding the Dutch National Flag algorithm helps us solve a variety of array sorting problems efficiently. Let's explore how this elegant algorithm works and why it's so useful.

<h3>Understanding the Problem</h3>

The Dutch National Flag algorithm, created by Edsger Dijkstra, was originally designed to sort an array of 0s, 1s, and 2s in a single pass. Think of it like sorting a pile of red, white, and blue balls (the colors of the Dutch flag) into three neat rows. We want to do this efficiently, using as little extra space as possible.

<div class="visualization-container bg-white p-6 rounded-lg shadow-md my-8">
  <h4 class="text-center text-gray-700 mb-4">Array Partitioning Process</h4>
  <div class="flex flex-col space-y-4">
    <!-- Initial state -->
    <div>
      <div class="text-center mb-2">Initial Array</div>
      <div class="flex justify-center space-x-1">
        <div class="w-12 h-12 border-2 border-red-400 flex items-center justify-center">2</div>
        <div class="w-12 h-12 border-2 border-blue-400 flex items-center justify-center">0</div>
        <div class="w-12 h-12 border-2 border-green-400 flex items-center justify-center">1</div>
        <div class="w-12 h-12 border-2 border-red-400 flex items-center justify-center">2</div>
        <div class="w-12 h-12 border-2 border-blue-400 flex items-center justify-center">0</div>
      </div>
    </div>
    <!-- Final state -->
    <div>
      <div class="text-center mb-2">After Partitioning</div>
      <div class="flex justify-center space-x-1">
        <div class="w-12 h-12 border-2 border-blue-400 flex items-center justify-center bg-blue-100">0</div>
        <div class="w-12 h-12 border-2 border-blue-400 flex items-center justify-center bg-blue-100">0</div>
        <div class="w-12 h-12 border-2 border-green-400 flex items-center justify-center bg-green-100">1</div>
        <div class="w-12 h-12 border-2 border-red-400 flex items-center justify-center bg-red-100">2</div>
        <div class="w-12 h-12 border-2 border-red-400 flex items-center justify-center bg-red-100">2</div>
      </div>
    </div>
  </div>
</div>

<h3>The Algorithm</h3>

Let's implement the algorithm step by step, understanding each part:

\`\`\`python
def dutch_flag_partition(array):
    """
    Partition array into three sections (0s, 1s, and 2s).
    
    Args:
        array: List of integers (0s, 1s, and 2s only)
    Returns:
        None (modifies array in-place)
        
    Time Complexity: O(n)
    Space Complexity: O(1)
    """
    # Initialize our three pointers
    low = 0        # boundary for 0s (next position to place a 0)
    mid = 0        # current element being examined
    high = len(array) - 1  # boundary for 2s (next position to place a 2)
    
    while mid <= high:
        if array[mid] == 0:
            # Found a 0, move it to the low section
            array[low], array[mid] = array[mid], array[low]
            low += 1
            mid += 1
        elif array[mid] == 1:
            # Found a 1, it's already in the middle section
            mid += 1
        else:  # array[mid] == 2
            # Found a 2, move it to the high section
            array[mid], array[high] = array[high], array[mid]
            high -= 1
            # Don't increment mid since we need to examine
            # the newly swapped element

def demonstrate_dutch_flag(array):
    """
    Show step-by-step how Dutch Flag partition works.
    """
    print("Initial array:", array)
    low = mid = 0
    high = len(array) - 1
    
    def print_state():
        """Helper to visualize current state."""
        state = array.copy()
        print("\nCurrent state:", state)
        print("Pointers:", f"low={low}", f"mid={mid}", f"high={high}")
        print("Sections:")
        print("  0s:", state[:low])
        print("  1s:", state[low:mid])
        print("  unknown:", state[mid:high+1])
        print("  2s:", state[high+1:])
    
    print_state()
    
    while mid <= high:
        if array[mid] == 0:
            array[low], array[mid] = array[mid], array[low]
            low += 1
            mid += 1
            print("\nSwapped 0 to low section")
            print_state()
        elif array[mid] == 1:
            mid += 1
            print("\nSkipped 1 (already in position)")
            print_state()
        else:  # array[mid] == 2
            array[mid], array[high] = array[high], array[mid]
            high -= 1
            print("\nSwapped 2 to high section")
            print_state()

# Example usage with explanation
test_array = [2, 0, 1, 2, 0]
print("Demonstrating Dutch Flag Partition:")
demonstrate_dutch_flag(test_array)
\`\`\`

<h3>Understanding the Three Pointers</h3>

The algorithm uses three pointers to maintain four regions in the array:
1. [0, low): Elements known to be 0
2. [low, mid): Elements known to be 1
3. [mid, high]: Unknown elements
4. (high, end]: Elements known to be 2

This four-region property is what makes the algorithm so efficient - we always know exactly where to place each element we encounter.

<h3>Variations and Applications</h3>

The Dutch Flag algorithm's three-way partitioning can be adapted for many other problems:

\`\`\`python
def partition_around_pivot(array, pivot):
    """
    Use Dutch Flag partitioning concept to arrange array around pivot.
    Elements are arranged as: smaller, equal, larger than pivot.
    
    Args:
        array: List of comparable elements
        pivot: Value to partition around
    Returns:
        Tuple of (start, end) indices of equal section
    """
    low = 0
    mid = 0
    high = len(array) - 1
    
    while mid <= high:
        if array[mid] < pivot:
            array[low], array[mid] = array[mid], array[low]
            low += 1
            mid += 1
        elif array[mid] == pivot:
            mid += 1
        else:  # array[mid] > pivot
            array[mid], array[high] = array[high], array[mid]
            high -= 1
    
    return low, mid - 1

def demonstrate_pivot_partition():
    """Show how to use Dutch Flag for general partitioning."""
    array = [5, 2, 8, 3, 5, 7, 5, 1, 4]
    pivot = 5
    print(f"Original array: {array}")
    print(f"Partitioning around {pivot}")
    
    start, end = partition_around_pivot(array, pivot)
    print(f"\nAfter partitioning: {array}")
    print(f"Elements < {pivot}: {array[:start]}")
    print(f"Elements = {pivot}: {array[start:end+1]}")
    print(f"Elements > {pivot}: {array[end+1:]}")

# Demonstrate pivot partitioning
demonstrate_pivot_partition()
\`\`\`

<h3>Real-World Applications</h3>

The Dutch Flag algorithm's concepts can be applied to many practical problems:

1. Color Sorting:
   - Organizing RGB pixels in image processing
   - Sorting items by categories (e.g., high/medium/low priority)

2. Data Deduplication:
   - Grouping identical elements together efficiently
   - Finding unique elements in sorted sections

3. Quicksort Optimization:
   - Handling arrays with many duplicate values efficiently
   - Improving partition step when many equal elements exist

Here's an example of using it for data deduplication:

\`\`\`python
def deduplicate_array(array):
    """
    Use Dutch Flag concepts to group duplicate elements.
    Returns count of unique elements.
    """
    if not array:
        return 0
        
    # First sort the array (assume it's not sorted)
    array.sort()
    
    # Use Dutch Flag concept to group duplicates
    write_pos = 1  # Position to write next unique element
    
    for read_pos in range(1, len(array)):
        if array[read_pos] != array[write_pos - 1]:
            array[write_pos] = array[read_pos]
            write_pos += 1
    
    return write_pos

def demonstrate_deduplication():
    """Show how Dutch Flag concepts help with deduplication."""
    array = [1, 3, 3, 3, 2, 1, 2, 1]
    print(f"Original array: {array}")
    
    unique_count = deduplicate_array(array)
    print(f"After deduplication: {array[:unique_count]}")
    print(f"Number of unique elements: {unique_count}")

# Demonstrate deduplication
demonstrate_deduplication()
\`\`\``,
  exercises: [
    {
      prompt: 'Modify the Dutch Flag algorithm to handle four-way partitioning (e.g., elements less than, equal to, greater than, or much greater than a pivot).',
      initialCode: `def four_way_partition(array, pivot1, pivot2):
    """
    Partition array into four sections based on two pivot values.
    
    Args:
        array: List of comparable elements
        pivot1: First pivot value
        pivot2: Second pivot value (pivot2 > pivot1)
    Returns:
        Tuple of (index1, index2, index3) marking section boundaries
    """
    # Your implementation here
    pass`,
      solution: `def four_way_partition(array, pivot1, pivot2):
    """
    Partition array into four sections based on two pivot values.
    
    Args:
        array: List of comparable elements
        pivot1: First pivot value
        pivot2: Second pivot value (pivot2 > pivot1)
    Returns:
        Tuple of (index1, index2, index3) marking section boundaries
    
    Time Complexity: O(n)
    Space Complexity: O(1)
    """
    if pivot1 >= pivot2:
        raise ValueError("pivot1 must be less than pivot2")
    
    # Initialize pointers
    low = 0       # next position for elements < pivot1
    mid1 = 0      # next position to examine
    mid2 = 0      # boundary for elements = pivot1
    high = len(array) - 1  # next position for elements > pivot2
    
    while mid1 <= high:
        if array[mid1] < pivot1:
            # Move to first section
            array[low], array[mid1] = array[mid1], array[low]
            low += 1
            mid1 += 1
            mid2 = max(mid2, mid1)
        elif array[mid1] == pivot1:
            # Move to second section
            mid1 += 1
        elif array[mid1] <= pivot2:
            # Move to third section
            mid2 = max(mid2, mid1 + 1)
            mid1 += 1
        else:
            # Move to fourth section
            array[mid1], array[high] = array[high], array[mid1]
            high -= 1
    
    return low, mid2, high + 1

def test_four_way_partition():
    """Test the four-way partition implementation."""
    # Test cases
    arrays = [
        [5, 2, 8, 3, 5, 7, 5, 1, 4, 9, 8, 3],
        [1, 1, 1, 2, 2, 3, 3, 3],
        [5, 4, 3, 2, 1],
    ]
    
    for array in arrays:
        print(f"\nOriginal array: {array}")
        pivot1, pivot2 = 3, 7
        print(f"Partitioning around {pivot1} and {pivot2}")
        
        arr_copy = array.copy()
        idx1, idx2, idx3 = four_way_partition(arr_copy, pivot1, pivot2)
        
        print(f"After partitioning: {arr_copy}")
        print(f"< {pivot1}: {arr_copy[:idx1]}")
        print(f"= {pivot1}: {arr_copy[idx1:idx2]}")
        print(f"<= {pivot2}: {arr_copy[idx2:idx3]}")
        print(f"> {pivot2}: {arr_copy[idx3:]}")

# Run tests
test_four_way_partition()`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Implement a variation of the Dutch Flag algorithm that groups elements by their remainder when divided by 3 (0, 1, or 2).',
      initialCode: `def group_by_remainder(array):
    """
    Group array elements by their remainder when divided by 3.
    
    Args:
        array: List of integers
    Returns:
        None (modifies array in-place)
    """
    # Your implementation here
    pass`,
      solution: `def group_by_remainder(array):
    """
    Group array elements by their remainder when divided by 3.
    
    Args:
        array: List of integers
    Returns:
        None (modifies array in-place)
        
    Time Complexity: O(n)
    Space Complexity: O(1)
    """
    # Initialize pointers for three sections
    low = 0   # next position for remainder 0
    mid = 0   # next position to examine
    high = len(array) - 1  # next position for remainder 2
    
    while mid <= high:
        remainder = array[mid] % 3
        
        if remainder == 0:
            # Move to first section (remainder 0)
            array[low], array[mid] = array[mid], array[low]
            low += 1
            mid += 1
        elif remainder == 1:
            # Already in middle section (remainder 1)
            mid += 1
        else:  # remainder == 2
            # Move to last section (remainder 2)
            array[mid], array[high] = array[high], array[mid]
            high -= 1

def test_remainder_grouping():
    """Test the remainder grouping implementation."""
    test_cases = [
        [3, 1, 2, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5],
        [0, 0, 0, 1, 1, 2, 2],
    ]
    
    for array in test_cases:
print(f"\nOriginal array: {array}")
        arr_copy = array.copy()
        group_by_remainder(arr_copy)
        
        # Verify and display results
        print("After grouping by remainder:")
        print(f"Array: {arr_copy}")
        
        # Show elements in each group
        remainders = {0: [], 1: [], 2: []}
        for num in arr_copy:
            remainders[num % 3].append(num)
            
        print(f"Remainder 0: {remainders[0]}")
        print(f"Remainder 1: {remainders[1]}")
        print(f"Remainder 2: {remainders[2]}")
        
        # Verify ordering is correct
        is_valid = True
        last_r0 = -1
        first_r1 = len(arr_copy)
        last_r1 = -1
        first_r2 = len(arr_copy)
        
        for i, num in enumerate(arr_copy):
            r = num % 3
            if r == 0:
                last_r0 = i
            elif r == 1:
                if first_r1 == len(arr_copy):
                    first_r1 = i
                last_r1 = i
            else:  # r == 2
                if first_r2 == len(arr_copy):
                    first_r2 = i
                    
        is_valid = last_r0 < first_r1 and last_r1 < first_r2
        print(f"Grouping is {'valid' if is_valid else 'invalid'}")

# Run tests
test_remainder_grouping()`
    }
  ],
  quizzes: [
    {
      question: 'Why does the Dutch Flag algorithm not increment mid after swapping with high?',
      options: [
        'To improve performance',
        'Because it might need to swap the newly placed element again',
        'To maintain array balance',
        'To handle duplicate elements'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. The decision is about correctness, not performance.',
        'Correct! When we swap with high, we get a new element at mid that we haven\'t examined yet. It might need to be swapped again.',
        'Incorrect. The algorithm maintains correctness regardless of array balance.',
        'Incorrect. While the algorithm handles duplicates well, this isn\'t why we don\'t increment mid.'
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What makes the Dutch Flag algorithm more efficient than repeated standard partitioning?',
      options: [
        'It uses less memory',
        'It requires fewer comparisons',
        'It handles three categories in a single pass',
        'It pre-sorts the array'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Both approaches use O(1) extra space.',
        'Incorrect. The number of comparisons is similar.',
        'Correct! The algorithm efficiently partitions into three categories in a single pass through the array, while repeated partitioning would require multiple passes.',
        'Incorrect. The algorithm partitions but doesn\'t sort within partitions.'
      ],
      difficulty: Difficulty.Advanced,
    }
  ]
};

const slidingWindowConceptData: LessonContent = {
  title: 'Understanding the Sliding Window Technique: A Fundamental Array Pattern',
  content: `Let's explore the sliding window technique, a powerful approach for solving array problems that involve contiguous sequences. Think of it like a train window moving along the countryside - as we move forward, we can see a fixed portion of the view, with new elements coming into view as old ones leave.

<h3>Understanding the Basic Concept</h3>

The sliding window technique involves maintaining a subset of elements as we move through an array. Instead of recalculating everything for each position, we efficiently update our "window" by removing elements from one end and adding them at the other end.

Let's start with a simple example to build our understanding:

\`\`\`python
def calculate_first_averages(temperatures, days):
    """
    Calculate moving averages of temperature readings.
    
    Args:
        temperatures: Daily temperature readings
        days: Number of days to average
        
    Returns:
        List of moving averages
        
    This demonstrates the basic sliding window concept using
    a real-world scenario that's easy to visualize.
    """
    if len(temperatures) < days:
        return []
    
    # Calculate first window
    current_sum = sum(temperatures[:days])
    averages = [current_sum / days]
    print(f"Initial window sum: {current_sum}")
    print(f"Initial window average: {current_sum / days:.2f}")
    
    # Slide window forward
    for i in range(days, len(temperatures)):
        # Remove oldest temperature and add newest
        current_sum = current_sum - temperatures[i - days] + temperatures[i]
        print(f"\nRemoved: {temperatures[i - days]}")
        print(f"Added: {temperatures[i]}")
        print(f"New sum: {current_sum}")
        
        average = current_sum / days
        averages.append(average)
        print(f"New average: {average:.2f}")
    
    return averages

# Example with temperature readings
daily_temps = [25, 28, 24, 27, 23, 26, 29]
window_size = 3

print("Temperature readings:", daily_temps)
print(f"Window size: {window_size} days\n")
averages = calculate_first_averages(daily_temps, window_size)
\`\`\`

<div class="visualization-container bg-white p-6 rounded-lg shadow-md my-8">
  <h4 class="text-center text-gray-700 mb-4">Sliding Window Movement</h4>
  <div class="flex flex-col space-y-6">
    <!-- Initial window -->
    <div>
      <div class="text-center mb-2">Initial Window</div>
      <div class="flex justify-center space-x-1">
        <div class="w-16 h-16 border-2 border-green-400 bg-green-100 flex items-center justify-center">25</div>
        <div class="w-16 h-16 border-2 border-green-400 bg-green-100 flex items-center justify-center">28</div>
        <div class="w-16 h-16 border-2 border-green-400 bg-green-100 flex items-center justify-center">24</div>
        <div class="w-16 h-16 border-2 border-gray-400 flex items-center justify-center">27</div>
        <div class="w-16 h-16 border-2 border-gray-400 flex items-center justify-center">23</div>
      </div>
    </div>
    <!-- After one slide -->
    <div>
      <div class="text-center mb-2">After Sliding</div>
      <div class="flex justify-center space-x-1">
        <div class="w-16 h-16 border-2 border-gray-400 flex items-center justify-center">25</div>
        <div class="w-16 h-16 border-2 border-green-400 bg-green-100 flex items-center justify-center">28</div>
        <div class="w-16 h-16 border-2 border-green-400 bg-green-100 flex items-center justify-center">24</div>
        <div class="w-16 h-16 border-2 border-green-400 bg-green-100 flex items-center justify-center">27</div>
        <div class="w-16 h-16 border-2 border-gray-400 flex items-center justify-center">23</div>
      </div>
    </div>
  </div>
</div>

<h3>Building Our First Sliding Window</h3>

Let's explore how to implement a sliding window solution step by step. We'll start with finding the maximum sum of any contiguous subarray of a given size:

\`\`\`python
def find_max_sum_window(array, window_size):
    """
    Find maximum sum of any contiguous subarray of given size.
    
    Args:
        array: List of numbers to analyze
        window_size: Size of sliding window
        
    Returns:
        Tuple of (start_index, max_sum)
        
    This example demonstrates the key steps in implementing
    a sliding window solution.
    """
    if len(array) < window_size:
        return None
    
    # Step 1: Initialize first window
    current_sum = sum(array[:window_size])
    max_sum = current_sum
    max_start = 0
    
    print(f"Initial window: {array[:window_size]}")
    print(f"Initial sum: {current_sum}")
    
    # Step 2: Slide window through array
    for i in range(window_size, len(array)):
        # Remove first element of previous window
        current_sum -= array[i - window_size]
        # Add last element of current window
        current_sum += array[i]
        
        print(f"\nWindow moved:")
        print(f"Removed: {array[i - window_size]}")
        print(f"Added: {array[i]}")
        print(f"Current sum: {current_sum}")
        
        # Update maximum if current window is better
        if current_sum > max_sum:
            max_sum = current_sum
            max_start = i - window_size + 1
            print(f"New maximum found at position {max_start}")
    
    return (max_start, max_sum)

# Example usage
numbers = [1, 4, 2, 7, 3, 9, 2, 1]
window_size = 3

print(f"Finding maximum sum window of size {window_size} in {numbers}\n")
start, max_sum = find_max_sum_window(numbers, window_size)
print(f"\nBest window starts at index {start}")
print(f"Window: {numbers[start:start+window_size]}")
print(f"Maximum sum: {max_sum}")
\`\`\`

<h3>Understanding Window Efficiency</h3>

The key advantage of the sliding window technique is that it allows us to avoid recalculating values for the entire window each time we move. Let's see why this is significant:

\`\`\`python
def compare_sliding_vs_naive(array, window_size):
    """
    Compare sliding window approach with naive approach.
    
    This demonstrates why sliding window is more efficient
    by counting operations performed.
    """
    # Naive approach - recalculate sum for each window
    naive_operations = 0
    max_sum = float('-inf')
    
    for i in range(len(array) - window_size + 1):
        window_sum = 0
        for j in range(window_size):
            window_sum += array[i + j]
            naive_operations += 1
            
    # Sliding window approach
    sliding_operations = 0
    current_sum = 0
    
    # Initial window
    for i in range(window_size):
        current_sum += array[i]
        sliding_operations += 1
        
    # Slide window
    for i in range(window_size, len(array)):
        current_sum = current_sum - array[i - window_size] + array[i]
        sliding_operations += 2  # One subtraction, one addition
        
    print("Operation Comparison:")
    print(f"Naive approach: {naive_operations} operations")
    print(f"Sliding window: {sliding_operations} operations")
    print(f"Improvement: {naive_operations / sliding_operations:.1f}x fewer operations")

# Compare approaches
array = list(range(1000))
window_size = 100
compare_sliding_vs_naive(array, window_size)
\`\`\`

<h3>Common Variations</h3>

While our examples used sums, the sliding window technique can be adapted for many other calculations:

1. Average Values:
\`\`\`python
current_avg = current_sum / window_size
\`\`\`

2. Minimum/Maximum:
\`\`\`python
from collections import deque

def track_window_max(array, window_size):
    """Track maximum value in sliding window efficiently."""
    if not array or window_size <= 0:
        return []
        
    result = []
    window = deque()  # Store indices
    
    # Process first window
    for i in range(window_size):
        # Remove smaller elements
        while window and array[i] >= array[window[-1]]:
            window.pop()
        window.append(i)
    
    # Process rest of array
    for i in range(window_size, len(array)):
        result.append(array[window[0]])
        
        # Remove elements outside window
        while window and window[0] <= i - window_size:
            window.popleft()
            
        # Remove smaller elements
        while window and array[i] >= array[window[-1]]:
            window.pop()
            
        window.append(i)
    
    result.append(array[window[0]])
    return result
\`\`\`

3. Counting Elements:
\`\`\`python
from collections import Counter

def count_elements_in_window(array, window_size):
    """Track frequency of elements in sliding window."""
    counts = Counter(array[:window_size])
    results = [dict(counts)]
    
    for i in range(window_size, len(array)):
        # Update counts
        counts[array[i - window_size]] -= 1
        if counts[array[i - window_size]] == 0:
            del counts[array[i - window_size]]
            
        counts[array[i]] += 1
        results.append(dict(counts))
    
    return results
\`\`\`

<h3>When to Use Sliding Window</h3>

The sliding window technique is particularly useful when:

1. You need to track a contiguous subset of elements
2. The calculation can be updated incrementally
3. You want to avoid redundant calculations
4. The window size is fixed or follows specific growth rules

Some common problem types where sliding window excels:
- Moving averages
- Maximum/minimum in window
- Substring problems
- Contiguous subarrays with properties
- Running statistics`,

  exercises: [
    {
      prompt: 'Implement a function that finds the minimum window size needed to contain all unique elements in an array at least once.',
      initialCode: `def find_minimum_window_size(array):
    """
    Find smallest window containing all unique elements.
    
    Args:
        array: List of elements
    Returns:
        The size of the smallest valid window
    """
    # Your implementation here
    pass`,
      solution: `def find_minimum_window_size(array):
    """
    Find smallest window containing all unique elements.
    
    Args:
        array: List of elements
    Returns:
        The size of the smallest valid window
        
    Time Complexity: O(n)
    Space Complexity: O(k) where k is number of unique elements
    """
    if not array:
        return 0
        
    # Get required elements
    required = set(array)
    
    # Track current window elements
    window = {}
    start = 0
    min_size = len(array)
    
    for end in range(len(array)):
        # Add new element to window
        window[array[end]] = window.get(array[end], 0) + 1
        
        # Try to minimize window
        while len(window) == len(required):
            min_size = min(min_size, end - start + 1)
            
            # Remove start element
            window[array[start]] -= 1
            if window[array[start]] == 0:
                del window[array[start]]
            start += 1
    
    return min_size

# Test the implementation
def test_minimum_window():
    test_cases = [
        [1, 2, 1, 3, 2, 1],
        ['a', 'b', 'c', 'a', 'b'],
        [1, 1, 1, 2, 2, 3]
    ]
    
    for array in test_cases:
        size = find_minimum_window_size(array)
        print(f"\nArray: {array}")
        print(f"Unique elements: {set(array)}")
        print(f"Minimum window size: {size}")

test_minimum_window()`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Create a function that finds the longest window where the average is greater than a given value.',
      initialCode: `def find_longest_good_average_window(array, min_avg):
    """
    Find longest window with average > min_avg.
    
    Args:
        array: List of numbers
        min_avg: Minimum required average
    Returns:
        Tuple of (start_index, length) of longest valid window
    """
    # Your implementation here
    pass`,
      solution: `def find_longest_good_average_window(array, min_avg):
    """
    Find longest window with average > min_avg.
    
    Args:
        array: List of numbers
        min_avg: Minimum required average
    Returns:
        Tuple of (start_index, length) of longest valid window
        
    Time Complexity: O(n)
    Space Complexity: O(1)
    """
    if not array:
        return (0, 0)
        
    # Convert problem to sum by multiplying min_avg
    # Window sum > min_avg * window_size
    # sum - min_avg * size > 0
    adjusted = [x - min_avg for x in array]
    
    current_sum = 0
    max_length = 0
    max_start = 0
    start = 0
    
    for end in range(len(array)):
        current_sum += adjusted[end]
        
        # If current window is valid, try extending it
        while start <= end and current_sum <= 0:
            current_sum -= adjusted[start]
            start += 1
            
        if end - start + 1 > max_length:
            max_length = end - start + 1
            max_start = start
    
    return (max_start, max_length)

# Test the implementation
def test_average_window():
    test_cases = [
        ([1, 3, 2, 4, 3, 2, 5, 1], 2.5),
        ([5, 2, 1, 4, 3, 7, 2], 3.0),
        ([1, 2, 3, 4, 5], 3.0)
    ]
    
    for array, min_avg in test_cases:
        start, length = find_longest_good_average_window(array, min_avg)
        window = array[start:start+length]
        if length > 0:
            avg = sum(window) / length
            print(f"\nArray: {array}")
            print(f"Minimum required average: {min_avg}")
            print(f"Found window: {window}")
            print(f"Window average: {avg:.2f}")
            print(f"Window length: {length}")
        else:
            print(f"\nNo valid window found for array: {array}")
            print(f"with minimum average: {min_avg}")

test_average_window()`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why is the sliding window technique more efficient than calculating each window separately?',
      options: [
        'Because it uses less memory',
        'Because it reuses calculations from the previous window',
        'Because it can handle larger arrays',
        'Because it works with unsorted arrays'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Both approaches typically use similar amounts of memory.',
        'Correct! The sliding window technique maintains a running calculation, only updating it with the elements that change as the window moves. This avoids recalculating the entire window each time.',
        'Incorrect. While it does handle large arrays efficiently, this isn\'t what makes the technique more efficient.',
        'Incorrect. The efficiency gain isn\'t related to whether the array is sorted.'
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'When calculating a running sum with sliding window, what operations must be performed for each window movement?',
      options: [
        'Recalculate the entire sum',
        'Add new element and remove first element',
        'Sort the window elements',
        'Compare all elements in window'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Recalculating the entire sum would defeat the purpose of sliding window.',
        'Correct! We only need to subtract the element leaving the window and add the new element entering it, making the update very efficient.',
        'Incorrect. Sorting isn\'t necessary for maintaining a running sum.',
        'Incorrect. We don\'t need to compare elements for a running sum.'
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What characteristic must a problem have to be solvable using sliding window technique?',
      options: [
        'The array must be sorted',
        'The window size must be fixed',
        'The calculation must be updatable using only the entering and leaving elements',
        'The elements must be numbers'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Sliding window can work with unsorted arrays.',
        'Incorrect. Window size can be variable in some sliding window problems.',
        'Correct! The key requirement is that we can update our calculation by only considering the elements entering and leaving the window, without needing to reprocess the entire window.',
        'Incorrect. Sliding window can work with any type of elements if the calculation is appropriate.'
      ],
      difficulty: Difficulty.Advanced,
    }
  ]
};

const windowVariationsData: LessonContent = {
  title: 'Mastering Fixed and Dynamic Window Techniques',
  content: `Let's explore how to work with different types of window sizes when processing arrays. Think of this like a spotlight moving across a stage - sometimes we want the spotlight to stay the same size, and sometimes we need it to expand and contract based on what we're looking at.

<h3>Fixed-Size Windows</h3>

Fixed-size windows are like looking at data through a frame of consistent size. This is useful when we need to analyze fixed-length sequences or patterns. Let's start with a straightforward example:

\`\`\`python
def calculate_moving_average(array, window_size):
    """
    Calculate moving average using fixed-size window.
    
    Args:
        array: List of numbers to analyze
        window_size: Size of sliding window
        
    Returns:
        List of moving averages
        
    Think of this like calculating average temperature for each
    consecutive 7-day period in weather data.
    """
    if window_size > len(array):
        raise ValueError("Window size cannot exceed array length")
    
    # First window calculation
    current_sum = sum(array[:window_size])
    averages = [current_sum / window_size]
    
    # Slide window and update running sum
    for i in range(window_size, len(array)):
        # Remove leftmost element and add new element
        current_sum = current_sum - array[i - window_size] + array[i]
        averages.append(current_sum / window_size)
        
    return averages

def explain_fixed_window():
    """Show how fixed window moves through data."""
    temperatures = [20, 22, 24, 23, 25, 21, 20, 19, 21]
    window_size = 3
    
    print(f"Analyzing temperatures: {temperatures}")
    print(f"Window size: {window_size}\n")
    
    # Show window movement
    for i in range(len(temperatures) - window_size + 1):
        window = temperatures[i:i + window_size]
        avg = sum(window) / window_size
        print(f"Window: {window}")
        print(f"Average: {avg:.1f}\n")

# Demonstrate fixed window movement
explain_fixed_window()
\`\`\`

<div class="visualization-container bg-white p-6 rounded-lg shadow-md my-8">
  <h4 class="text-center text-gray-700 mb-4">Fixed Window Movement</h4>
  <div class="flex flex-col space-y-6">
    <!-- Array visualization with fixed window -->
    <div class="flex justify-center space-x-1">
      <div class="w-12 h-12 border-2 border-green-400 bg-green-100 flex items-center justify-center">20</div>
      <div class="w-12 h-12 border-2 border-green-400 bg-green-100 flex items-center justify-center">22</div>
      <div class="w-12 h-12 border-2 border-green-400 bg-green-100 flex items-center justify-center">24</div>
      <div class="w-12 h-12 border-2 border-gray-400 flex items-center justify-center">23</div>
      <div class="w-12 h-12 border-2 border-gray-400 flex items-center justify-center">25</div>
    </div>
    <div class="text-sm text-gray-600 text-center">
      Window maintains consistent size as it slides
    </div>
  </div>
</div>

<h3>Dynamic Windows</h3>

Dynamic windows can grow and shrink based on certain conditions. This is like having a flexible spotlight that adjusts based on what we're trying to illuminate. Let's see an example:

\`\`\`python
def find_smallest_subarray_sum(array, target_sum):
    """
    Find smallest subarray with sum >= target_sum.
    
    Args:
        array: List of positive numbers
        target_sum: Target sum to achieve
        
    Returns:
        Tuple of (start_index, end_index) of smallest valid subarray
        
    This demonstrates a dynamic window that shrinks whenever possible
    while maintaining the sum condition.
    """
    start = 0
    min_length = float('inf')
    current_sum = 0
    result = None
    
    print(f"Looking for sum >= {target_sum} in {array}")
    
    for end in range(len(array)):
        current_sum += array[end]
        print(f"\nAdded {array[end]}, sum is now {current_sum}")
        
        # Try to minimize window while maintaining sum
        while current_sum >= target_sum and start <= end:
            if end - start + 1 < min_length:
                min_length = end - start + 1
                result = (start, end)
                print(f"Found new smallest window: {array[start:end+1]}")
            
            current_sum -= array[start]
            start += 1
            print(f"Removed {array[start-1]}, sum is now {current_sum}")
    
    return result

def demonstrate_dynamic_window():
    """Show how dynamic window adjusts based on conditions."""
    numbers = [2, 3, 1, 2, 4, 3]
    target = 7
    result = find_smallest_subarray_sum(numbers, target)
    
    if result:
        start, end = result
        print(f"\nSmallest subarray with sum >= {target}:")
        print(f"Window: {numbers[start:end+1]}")
        print(f"Sum: {sum(numbers[start:end+1])}")

demonstrate_dynamic_window()
\`\`\`

<h3>Combining Fixed and Dynamic Windows</h3>

Sometimes we need to combine both approaches, using a minimum fixed size but allowing growth when needed. Here's an example:

\`\`\`python
def find_longest_nice_subarray(array, min_size, max_diff):
    """
    Find longest subarray where max-min difference <= max_diff
    and size >= min_size.
    
    Args:
        array: List of numbers
        min_size: Minimum window size required
        max_diff: Maximum allowed difference in window
        
    Returns:
        Tuple of (start_index, end_index) of longest valid window
        
    This combines fixed minimum size with dynamic growth based
    on element differences.
    """
    if len(array) < min_size:
        return None
        
    start = 0
    max_length = min_size - 1
    result = None
    
    for end in range(min_size - 1, len(array)):
        window = array[start:end + 1]
        window_diff = max(window) - min(window)
        
        print(f"\nChecking window: {window}")
        print(f"Difference: {window_diff}")
        
        if window_diff <= max_diff:
            if end - start + 1 > max_length:
                max_length = end - start + 1
                result = (start, end)
                print(f"Found new longest valid window")
        else:
            # Try to shrink window while maintaining min_size
            while start <= end - min_size + 1:
                start += 1
                window = array[start:end + 1]
                window_diff = max(window) - min(window)
                print(f"Shrunk to window: {window}")
                
                if window_diff <= max_diff:
                    break
    
    return result

def demonstrate_combined_windows():
    """Show how fixed and dynamic window constraints work together."""
    numbers = [1, 3, 2, 4, 6, 5, 7, 8]
    min_size = 3
    max_diff = 3
    
    print(f"Finding longest nice subarray in {numbers}")
    print(f"Minimum size: {min_size}")
    print(f"Maximum difference allowed: {max_diff}")
    
    result = find_longest_nice_subarray(numbers, min_size, max_diff)
    
    if result:
        start, end = result
        window = numbers[start:end + 1]
        print(f"\nLongest valid window: {window}")
        print(f"Size: {end - start + 1}")
        print(f"Difference: {max(window) - min(window)}")

demonstrate_combined_windows()
\`\`\`

<h3>Advanced Window Techniques</h3>

For more complex scenarios, we might need to maintain additional data structures within our window:

\`\`\`python
from collections import defaultdict

def find_distinct_window(array, k):
    """
    Find window of size k with maximum distinct elements.
    
    Args:
        array: List of elements
        k: Window size
        
    Returns:
        Tuple of (start_index, count) of best window
    
    This demonstrates using auxiliary data structures
    with window traversal.
    """
    # Track element frequencies in current window
    frequencies = defaultdict(int)
    max_distinct = 0
    result = (0, 0)
    
    # First window
    for i in range(k):
        frequencies[array[i]] += 1
    distinct_count = len(frequencies)
    
    if distinct_count > max_distinct:
        max_distinct = distinct_count
        result = (0, distinct_count)
    
    # Slide window
    for i in range(k, len(array)):
        # Remove leftmost element
        frequencies[array[i - k]] -= 1
        if frequencies[array[i - k]] == 0:
            del frequencies[array[i - k]]
        
        # Add new element
        frequencies[array[i]] += 1
        
        distinct_count = len(frequencies)
        if distinct_count > max_distinct:
            max_distinct = distinct_count
            result = (i - k + 1, distinct_count)
    
    return result

def demonstrate_advanced_window():
    """Show advanced window technique with frequency tracking."""
    elements = ['a', 'b', 'a', 'c', 'b', 'd', 'e']
    window_size = 3
    
    start, count = find_distinct_window(elements, window_size)
    window = elements[start:start + window_size]
    
    print(f"Array: {elements}")
    print(f"Best window of size {window_size}: {window}")
    print(f"Distinct elements: {count}")

demonstrate_advanced_window()
\`\`\``,

  exercises: [
    {
      prompt: 'Implement a function that finds the minimum window size needed to include at least one occurrence of each unique element in the array.',
      initialCode: `def find_minimum_window_all_elements(array):
    """
    Find smallest window containing all unique elements.
    
    Args:
        array: List of elements
    Returns:
        Tuple of (start_index, end_index) of smallest valid window
    """
    # Your implementation here
    pass`,
      solution: `def find_minimum_window_all_elements(array):
    """
    Find smallest window containing all unique elements.
    
    Args:
        array: List of elements
    Returns:
        Tuple of (start_index, end_index) of smallest valid window
        
    Time Complexity: O(n)
    Space Complexity: O(k) where k is number of unique elements
    """
    if not array:
        return None
        
    # Get set of unique elements needed
    unique_elements = set(array)
    
    # Track frequencies in current window
    frequencies = {}
    start = 0
    min_length = float('inf')
    result = None
    
    for end in range(len(array)):
        # Add new element to window
        frequencies[array[end]] = frequencies.get(array[end], 0) + 1
        
        # Try to minimize window
        while len(frequencies) == len(unique_elements):
            # Found a valid window, try to minimize
            if end - start + 1 < min_length:
                min_length = end - start + 1
                result = (start, end)
            
            # Remove start element
            frequencies[array[start]] -= 1
            if frequencies[array[start]] == 0:
                del frequencies[array[start]]
            start += 1
    
    return result

# Test the implementation
def test_minimum_window():
    test_cases = [
        [1, 2, 1, 3, 2, 1, 4],
        ['a', 'b', 'c', 'a', 'b', 'c'],
        [1, 1, 1, 2, 2, 3]
    ]
    
    for array in test_cases:
        start, end = find_minimum_window_all_elements(array)
        window = array[start:end+1]
        print(f"\nArray: {array}")
        print(f"Minimum window: {window}")
        print(f"Window size: {end - start + 1}")
        print(f"Unique elements needed: {set(array)}")

test_minimum_window()`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Create a function that finds the window with the most balanced ratio of positive to negative numbers (closest to 1:1), with a minimum window size requirement.',
      initialCode: `def find_balanced_window(array, min_size):
    """
    Find window with most balanced positive/negative ratio.
    
    Args:
        array: List of numbers
        min_size: Minimum window size required
    Returns:
        Tuple of (start_index, end_index) of most balanced window
    """
    # Your implementation here
    pass`,
      solution: `def find_balanced_window(array, min_size):
    """
    Find window with most balanced positive/negative ratio.
    
    Args:
        array: List of numbers
        min_size: Minimum window size required
    Returns:
        Tuple of (start_index, end_index) of most balanced window
        
    Time Complexity: O(n)
    Space Complexity: O(1)
    """
    def calculate_ratio(pos, neg):
        """Helper to calculate how close ratio is to 1:1."""
        if pos == 0 or neg == 0:
            return float('inf')
        ratio = pos / neg
        return abs(ratio - 1)
    
    if len(array) < min_size:
        return None
    
    # Count initial window
    pos_count = sum(1 for x in array[:min_size] if x > 0)
    neg_count = sum(1 for x in array[:min_size] if x < 0)
    best_ratio = calculate_ratio(pos_count, neg_count)
    result = (0, min_size - 1)
    
    # Try all possible windows
    start = 0
    for end in range(min_size, len(array)):
        # Add new element
        if array[end] > 0:
            pos_count += 1
        elif array[end] < 0:
            neg_count += 1
            
        # Try removing elements to find better ratio
        while start <= end - min_size + 1:
            ratio = calculate_ratio(pos_count, neg_count)
            if ratio < best_ratio:
                best_ratio = ratio
                result = (start, end)
                
            # Try removing start element
            if array[start] > 0:
                pos_count -= 1
            elif array[start] < 0:
                neg_count -= 1
            start += 1
            # Check if removing improved ratio
            new_ratio = calculate_ratio(pos_count, neg_count)
            if new_ratio > ratio:
                # Restore element if ratio got worse
                if array[start-1] > 0:
                    pos_count += 1
                elif array[start-1] < 0:
                    neg_count += 1
                start -= 1
                break
                
    return result

# Test the implementation
def test_balanced_window():
    test_cases = [
        ([1, -1, 2, -2, 3, -3, 4], 3),
        ([1, 2, -2, -1, 3, -2, -3], 4),
        ([-1, -2, 1, 2, -3, 3, -4], 2)
    ]
    
    for array, min_size in test_cases:
        result = find_balanced_window(array, min_size)
        if result:
            start, end = result
            window = array[start:end+1]
            pos = sum(1 for x in window if x > 0)
            neg = sum(1 for x in window if x < 0)
            
            print(f"\nArray: {array}")
            print(f"Minimum size: {min_size}")
            print(f"Most balanced window: {window}")
            print(f"Positives: {pos}, Negatives: {neg}")
            print(f"Ratio: {pos/neg:.2f}:1")

test_balanced_window()`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'When using a fixed-size window, why is it more efficient to maintain a running sum rather than recalculating the sum for each window?',
      options: [
        'Because it uses less memory',
        'Because it reduces calculations from O(k) to O(1) per window',
        'Because it handles edge cases better',
        'Because it works with negative numbers'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Memory usage is similar for both approaches.',
        'Correct! Maintaining a running sum requires only two operations per window (subtract leaving element, add entering element) instead of summing k elements each time.',
        'Incorrect. Edge case handling is not affected by using a running sum.',
        'Incorrect. Both approaches work equally well with negative numbers.'
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'In a dynamic window approach, how do we decide when to shrink the window?',
      options: [
        'After a fixed number of expansions',
        'When the window size reaches a threshold',
        'When the window satisfies our condition and might be optimizable',
        'Whenever we expand the window'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Shrinking decisions should be based on window properties, not fixed counts.',
        'Incorrect. Window size alone doesn\'t determine when to shrink.',
        'Correct! We try to shrink the window whenever it satisfies our conditions, to see if we can find a more optimal solution with a smaller window.',
        'Incorrect. Not every expansion needs to be followed by attempted shrinking.'
      ],
      difficulty: Difficulty.Advanced,
    },
    {
      question: 'Why might we need to combine fixed and dynamic window approaches?',
      options: [
        'To improve performance',
        'To handle special cases',
        'To enforce both minimum requirements and optimal conditions',
        'To reduce memory usage'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Performance isn\'t the main reason for combining approaches.',
        'Incorrect. Special cases can be handled with either approach alone.',
        'Correct! Combined approaches let us maintain minimum size requirements while still optimizing window size based on conditions.',
        'Incorrect. Memory usage isn\'t significantly affected by combining approaches.'
      ],
      difficulty: Difficulty.Advanced,
    }
  ]
};

const prefixSumBasicsData: LessonContent = {
  title: 'Prefix Sums: A Powerful Tool for Range Queries',
  content: `Imagine you're tracking daily rainfall amounts and frequently need to find the total rainfall over different date ranges. Instead of adding up the values each time, we can pre-calculate running totals that make these range queries instant. This is the core idea behind prefix sums.

<h3>Understanding Prefix Sums</h3>

A prefix sum array stores the cumulative sum of elements up to each position. Think of it like keeping a running total as you count items on a shelf - at each position, you know the total of everything up to that point.

\`\`\`python
def build_prefix_sums(array):
    """
    Create prefix sum array from input array.
    
    Args:
        array: List of numbers
    Returns:
        List of cumulative sums
    
    Think of this like keeping a running total as you
    walk through a store adding items to your cart.
    """
    # Initialize first element
    prefix = [array[0]]
    
    # Build running totals
    for i in range(1, len(array)):
        prefix.append(prefix[i-1] + array[i])
        print(f"After adding {array[i]}, running total is {prefix[i]}")
    
    return prefix

def explain_prefix_construction():
    """Show step-by-step how prefix sums are built."""
    array = [3, 1, 4, 1, 5]
    print(f"Original array: {array}")
    print("\nBuilding prefix sums:")
    
    prefix = build_prefix_sums(array)
    
    print("\nFinal prefix array:", prefix)
    print("Each position shows total sum up to that point")
\`\`\`

<div class="visualization-container bg-white p-6 rounded-lg shadow-md my-8">
  <h4 class="text-center text-gray-700 mb-4">Prefix Sum Construction</h4>
  <div class="flex flex-col space-y-6">
    <!-- Original array -->
    <div>
      <div class="text-center mb-2">Original Array</div>
      <div class="flex justify-center space-x-1">
        <div class="w-16 h-16 border-2 border-blue-400 flex items-center justify-center">3</div>
        <div class="w-16 h-16 border-2 border-blue-400 flex items-center justify-center">1</div>
        <div class="w-16 h-16 border-2 border-blue-400 flex items-center justify-center">4</div>
        <div class="w-16 h-16 border-2 border-blue-400 flex items-center justify-center">1</div>
        <div class="w-16 h-16 border-2 border-blue-400 flex items-center justify-center">5</div>
      </div>
    </div>
    <!-- Prefix sums -->
    <div>
      <div class="text-center mb-2">Prefix Sums</div>
      <div class="flex justify-center space-x-1">
        <div class="w-16 h-16 border-2 border-green-400 bg-green-100 flex items-center justify-center">3</div>
        <div class="w-16 h-16 border-2 border-green-400 bg-green-100 flex items-center justify-center">4</div>
        <div class="w-16 h-16 border-2 border-green-400 bg-green-100 flex items-center justify-center">8</div>
        <div class="w-16 h-16 border-2 border-green-400 bg-green-100 flex items-center justify-center">9</div>
        <div class="w-16 h-16 border-2 border-green-400 bg-green-100 flex items-center justify-center">14</div>
      </div>
    </div>
  </div>
</div>

<h3>Using Prefix Sums for Range Queries</h3>

The real power of prefix sums comes when we need to find sums of subarrays. Instead of adding up all elements in the range, we can use simple subtraction with our prefix sums.

\`\`\`python
def range_sum(prefix_sums, start, end):
    """
    Get sum of elements from start to end inclusive.
    
    Args:
        prefix_sums: List of cumulative sums
        start: Starting index
        end: Ending index (inclusive)
    Returns:
        Sum of elements in range
        
    The intuition is that we can get any range sum by
    subtracting the cumulative sum before our range
    from the cumulative sum at the end of our range.
    """
    if start == 0:
        return prefix_sums[end]
    
    return prefix_sums[end] - prefix_sums[start - 1]

def demonstrate_range_queries():
    """Show how to use prefix sums for efficient range queries."""
    array = [3, 1, 4, 1, 5, 9, 2, 6]
    prefix = build_prefix_sums(array)
    
    print(f"Array: {array}")
    print(f"Prefix sums: {prefix}\n")
    
    # Try different ranges
    ranges = [(0, 2), (1, 4), (3, 6)]
    for start, end in ranges:
        total = range_sum(prefix, start, end)
        subarray = array[start:end+1]
        print(f"Sum from index {start} to {end}: {total}")
        print(f"Elements summed: {subarray}\n")
\`\`\`

<h3>Handling Updates</h3>

When array elements can change, we need to efficiently update our prefix sums:

\`\`\`python
def update_value(array, prefix_sums, index, new_value):
    """
    Update a value and maintain prefix sums.
    
    Args:
        array: Original array
        prefix_sums: Prefix sums array
        index: Position to update
        new_value: New value to set
        
    Think of this like adjusting your monthly budget -
    a change in one month affects all future totals.
    """
    # Calculate the difference
    difference = new_value - array[index]
    array[index] = new_value
    
    # Update all sums that include this position
    for i in range(index, len(prefix_sums)):
        prefix_sums[i] += difference
        print(f"Updated prefix sum at position {i} to {prefix_sums[i]}")

def demonstrate_updates():
    """Show how updates affect prefix sums."""
    array = [3, 1, 4, 1, 5]
    prefix = build_prefix_sums(array)
    
    print(f"Original array: {array}")
    print(f"Original prefix sums: {prefix}\n")
    
    # Update a value
    update_value(array, prefix, 2, 6)  # Change 4 to 6
    
    print(f"\nUpdated array: {array}")
    print(f"Updated prefix sums: {prefix}")
\`\`\`

<h3>Common Variations and Applications</h3>

1. Prefix Products:
Similar to prefix sums but using multiplication:

\`\`\`python
def build_prefix_products(array):
    """Calculate running product at each position."""
    prefix = [array[0]]
    for i in range(1, len(array)):
        prefix.append(prefix[i-1] * array[i])
    return prefix
\`\`\`

2. 2D Prefix Sums:
For queries on rectangular regions:

\`\`\`python
def build_2d_prefix_sums(matrix):
    """
    Build 2D prefix sums for rectangular region queries.
    
    Args:
        matrix: 2D array of numbers
    Returns:
        2D array of cumulative sums
        
    This allows O(1) sum queries for any rectangular region.
    """
    if not matrix or not matrix[0]:
        return []
        
    rows, cols = len(matrix), len(matrix[0])
    prefix = [[0] * cols for _ in range(rows)]
    
    # Fill first cell
    prefix[0][0] = matrix[0][0]
    
    # Fill first row
    for j in range(1, cols):
        prefix[0][j] = prefix[0][j-1] + matrix[0][j]
        
    # Fill first column
    for i in range(1, rows):
        prefix[i][0] = prefix[i-1][0] + matrix[i][0]
        
    # Fill rest using inclusion-exclusion
    for i in range(1, rows):
        for j in range(1, cols):
            prefix[i][j] = (prefix[i-1][j] + 
                          prefix[i][j-1] - 
                          prefix[i-1][j-1] + 
                          matrix[i][j])
                          
    return prefix

def get_rectangle_sum(prefix, r1, c1, r2, c2):
    """Get sum of rectangular region using 2D prefix sums."""
    total = prefix[r2][c2]
    
    if r1 > 0:
        total -= prefix[r1-1][c2]
    if c1 > 0:
        total -= prefix[r2][c1-1]
    if r1 > 0 and c1 > 0:
        total += prefix[r1-1][c1-1]
        
    return total
\`\`\`

<h3>Key Applications</h3>

Prefix sums are particularly useful for:

1. Finding range sums in O(1) time
2. Calculating running averages
3. Finding subarrays with a target sum
4. Computing cumulative statistics
5. Solving problems involving ranges or intervals

Some specific examples:

1. Rainfall totals over date ranges
2. Running balance in financial transactions
3. Cumulative scores in a game
4. Population changes over time periods
5. Resource consumption tracking`,

  exercises: [
    {
      prompt: 'Implement a function that finds the number of subarrays having a sum equal to a target value using prefix sums.',
      initialCode: `def count_subarrays_with_sum(array, target):
    """
    Count subarrays with sum equal to target.
    
    Args:
        array: List of numbers
        target: Target sum to find
    Returns:
        Number of subarrays with sum equal to target
    """
    # Your implementation here
    pass`,
      solution: `def count_subarrays_with_sum(array, target):
    """
    Count subarrays with sum equal to target.
    
    Args:
        array: List of numbers
        target: Target sum to find
    Returns:
        Number of subarrays with sum equal to target
        
    Time Complexity: O(n)
    Space Complexity: O(n)
    
    Uses the fact that if prefix_sum[j] - prefix_sum[i] = target,
    then the subarray from i+1 to j sums to target.
    """
    # Track frequency of each prefix sum
    prefix_sum = 0
    sum_count = {0: 1}  # Empty array has sum 0
    count = 0
    
    for num in array:
        prefix_sum += num
        
        # If we've seen prefix_sum - target before,
        # we've found subarrays summing to target
        if prefix_sum - target in sum_count:
            count += sum_count[prefix_sum - target]
        
        # Update frequency of current prefix sum
        sum_count[prefix_sum] = sum_count.get(prefix_sum, 0) + 1
    
    return count

# Test the implementation
def test_subarray_counting():
    test_cases = [
        ([1, 1, 1], 2),
        ([3, 4, 7, 2, -3, 1, 4, 2], 7),
        ([1, -1, 1, -1], 0)
    ]
    
    for array, target in test_cases:
        count = count_subarrays_with_sum(array, target)
        print(f"\nArray: {array}")
        print(f"Target sum: {target}")
        print(f"Number of subarrays: {count}")
        
        # Verify with slow method
        def verify(arr, target):
            count = 0
            for i in range(len(arr)):
                total = 0
                for j in range(i, len(arr)):
                    total += arr[j]
                    if total == target:
                        count += 1
            return count
            
        assert count == verify(array, target), "Implementation incorrect!"

test_subarray_counting()`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Create a function that uses prefix sums to find the shortest subarray with a sum greater than or equal to a target value.',
      initialCode: `def shortest_subarray_with_sum(array, target):
    """
    Find shortest subarray with sum >= target.
    
    Args:
        array: List of numbers
        target: Minimum sum required
    Returns:
        Tuple of (start_index, end_index) of shortest valid subarray
    """
    # Your implementation here
    pass`,
      solution: `def shortest_subarray_with_sum(array, target):
    """
    Find shortest subarray with sum >= target.
    
    Args:
        array: List of numbers
        target: Minimum sum required
    Returns:
        Tuple of (start_index, end_index) of shortest valid subarray
        
    Time Complexity: O(n)
    Space Complexity: O(1)
    
    Uses prefix sums with two pointers to find minimum window.
    """
    prefix = build_prefix_sums(array)
    start = 0
    min_length = float('inf')
    result = None
    
    for end in range(len(array)):
        # Get current window sum
        current_sum = prefix[end]
        if start > 0:
            current_sum -= prefix[start - 1]
            
        # Try to minimize window while maintaining sum
        while start <= end and current_sum >= target:
            if end - start + 1 < min_length:
                min_length = end - start + 1
                result = (start, end)
            
            # Try removing start element
            if start < end:
                current_sum -= array[start]
            start += 1
    
    return result

# Test the implementation
def test_shortest_subarray():
    test_cases = [
        ([1, 4, 2, 3, 5, 2], 9),
        ([2, 3, 1, 1, 4, 3], 7),
        ([1, 1, 1, 1, 1], 3)
    ]
    
    for array, target in test_cases:
        result = shortest_subarray_with_sum(array, target)
        if result:
            start, end = result
            subarray = array[start:end+1]
            print(f"\nArray: {array}")
            print(f"Target sum: {target}")
            print(f"Shortest subarray: {subarray}")
            print(f"Sum: {sum(subarray)}")
            print(f"Length: {end - start + 1}")
else:
            print(f"\nNo subarray found with sum >= {target}")

test_shortest_subarray()`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why do prefix sums allow us to find range sums in O(1) time instead of O(n)?',
      options: [
        'Because they store the array in sorted order',
        'Because they precompute cumulative sums up to each position',
        'Because they use less memory',
        'Because they work with negative numbers'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Prefix sums work with arrays in their original order and don\'t require sorting.',
        'Correct! By storing cumulative sums, we can find any range sum by subtracting two prefix values: prefix[end] - prefix[start-1]. This gives us the sum of elements from start to end in constant time.',
        'Incorrect. Prefix sums actually use additional memory to store the cumulative sums.',
        'Incorrect. While prefix sums do work with negative numbers, this isn\'t why they provide O(1) range queries.'
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'When updating a value in an array with prefix sums, why do we need to update all subsequent positions in the prefix sum array?',
      options: [
        'To maintain array sorting',
        'Because all subsequent cumulative sums include the changed value',
        'To save memory',
        'To handle edge cases'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Prefix sums don\'t require or maintain array sorting.',
        'Correct! Every prefix sum after the changed position includes that value in its cumulative sum, so they all need to be updated by the same difference to maintain correctness.',
        'Incorrect. Updating all subsequent positions doesn\'t affect memory usage.',
        'Incorrect. This isn\'t about edge cases but about maintaining the fundamental property of cumulative sums.'
      ],
      difficulty: Difficulty.Advanced,
    },
    {
      question: 'What is the key principle that makes prefix sums useful for finding subarrays with a target sum?',
      options: [
        'They keep the array sorted',
        'They allow binary search',
        'The difference between two prefix sums gives a range sum',
        'They minimize memory usage'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Prefix sums don\'t sort the array or require sorting.',
        'Incorrect. While binary search can be used with prefix sums in some cases, this isn\'t their key principle.',
        'Correct! If prefix[j] - prefix[i] equals our target, we\'ve found a subarray (from i+1 to j) that sums to our target. This principle lets us find such subarrays efficiently.',
        'Incorrect. Prefix sums actually use additional memory to gain their advantages.'
      ],
      difficulty: Difficulty.Advanced,
    }
  ]
};

const rangeQueriesData: LessonContent = {
  title: 'Mastering Range Queries: Efficient Solutions with Prefix Sums',
  content: `Range queries are a fundamental type of operation in programming where we need to answer questions about continuous sections of an array. Let's explore how to solve these problems efficiently using prefix sums, building our understanding from simple queries to complex operations.

<h3>Understanding Range Queries</h3>

Imagine you're tracking daily temperatures for a year, and you frequently need to answer questions like "what was the average temperature during June?" or "what was the total rainfall from March to May?" These are examples of range queries - questions about continuous sections of our data.

\`\`\`python
def demonstrate_range_queries():
    """
    Show basic range query operations using simple examples.
    
    This helps build intuition about what range queries are
    and why we need efficient solutions for them.
    """
    # Example: Daily temperatures for a week
    temperatures = [75, 82, 78, 88, 84, 79, 86]
    days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    
    print("Daily temperatures:", temperatures)
    
    # Inefficient way: Calculate each range by summing
    def get_range_sum_naive(start, end):
        return sum(temperatures[start:end + 1])
    
    # Better way: Use prefix sums
    prefix = [temperatures[0]]
    for t in temperatures[1:]:
        prefix.append(prefix[-1] + t)
        
    def get_range_sum_efficient(start, end):
        if start == 0:
            return prefix[end]
        return prefix[end] - prefix[start - 1]
    
    # Compare approaches
    test_ranges = [(1, 3), (2, 5), (0, 6)]
    for start, end in test_ranges:
        range_days = days[start:end + 1]
        print(f"\nCalculating average for {range_days}")
        
        total = get_range_sum_efficient(start, end)
        avg = total / (end - start + 1)
        print(f"Total: {total}°F")
        print(f"Average: {avg:.1f}°F")

demonstrate_range_queries()
\`\`\`

<div class="visualization-container bg-white p-6 rounded-lg shadow-md my-8">
  <h4 class="text-center text-gray-700 mb-4">Range Query Visualization</h4>
  <div class="flex flex-col space-y-6">
    <!-- Original array with highlighted range -->
    <div>
      <div class="text-center mb-2">Query Range [2:5]</div>
      <div class="flex justify-center space-x-1">
        <div class="w-16 h-16 border-2 border-gray-400 flex items-center justify-center">75</div>
        <div class="w-16 h-16 border-2 border-gray-400 flex items-center justify-center">82</div>
        <div class="w-16 h-16 border-2 border-green-400 bg-green-100 flex items-center justify-center">78</div>
        <div class="w-16 h-16 border-2 border-green-400 bg-green-100 flex items-center justify-center">88</div>
        <div class="w-16 h-16 border-2 border-green-400 bg-green-100 flex items-center justify-center">84</div>
        <div class="w-16 h-16 border-2 border-green-400 bg-green-100 flex items-center justify-center">79</div>
        <div class="w-16 h-16 border-2 border-gray-400 flex items-center justify-center">86</div>
      </div>
    </div>
  </div>
</div>

<h3>Advanced Range Query Operations</h3>

Range queries aren't limited to just sums. Let's explore different types of range operations and how to handle them efficiently:

\`\`\`python
class RangeQueryProcessor:
    """
    Handles various types of range queries efficiently.
    
    This class demonstrates different range query operations
    and their implementations using prefix-based techniques.
    """
    def __init__(self, array):
        self.array = array
        self.n = len(array)
        
        # Build different prefix arrays for different queries
        self.prefix_sum = self._build_prefix_sums()
        self.prefix_square_sum = self._build_prefix_square_sums()
        self.min_values = self._build_sparse_table()
    
    def _build_prefix_sums(self):
        """Build prefix sums for range sum queries."""
        prefix = [self.array[0]]
        for i in range(1, self.n):
            prefix.append(prefix[-1] + self.array[i])
        return prefix
    
    def _build_prefix_square_sums(self):
        """Build prefix sums of squares for variance queries."""
        prefix = [self.array[0] ** 2]
        for i in range(1, self.n):
            prefix.append(prefix[-1] + self.array[i] ** 2)
        return prefix
    
    def _build_sparse_table(self):
        """Build sparse table for range minimum queries."""
        import math
        log_n = int(math.log2(self.n)) + 1
        table = [[0] * log_n for _ in range(self.n)]
        
        # Fill base case
        for i in range(self.n):
            table[i][0] = self.array[i]
            
        # Fill rest of table
        for j in range(1, log_n):
            for i in range(self.n - (1 << j) + 1):
                table[i][j] = min(
                    table[i][j-1],
                    table[i + (1 << (j-1))][j-1]
                )
                
        return table
    
    def get_range_sum(self, start, end):
        """Get sum of elements from start to end inclusive."""
        if start == 0:
            return self.prefix_sum[end]
        return self.prefix_sum[end] - self.prefix_sum[start - 1]
    
    def get_range_average(self, start, end):
        """Get average of elements from start to end inclusive."""
        range_sum = self.get_range_sum(start, end)
        return range_sum / (end - start + 1)
    
    def get_range_variance(self, start, end):
        """
        Get variance of elements from start to end inclusive.
        
        Uses the formula: Var = E(X²) - (E(X))²
        """
        n = end - start + 1
        
        # Get sum of squares
        square_sum = self.prefix_square_sum[end]
        if start > 0:
            square_sum -= self.prefix_square_sum[start - 1]
            
        # Get regular sum
        range_sum = self.get_range_sum(start, end)
        
        # Calculate variance
        mean = range_sum / n
        return (square_sum / n) - (mean ** 2)
    
    def get_range_minimum(self, start, end):
        """
        Get minimum element from start to end inclusive.
        
        Uses sparse table for O(1) range minimum queries.
        """
        import math
        length = end - start + 1
        k = int(math.log2(length))
        return min(
            self.min_values[start][k],
            self.min_values[end - (1 << k) + 1][k]
        )

def demonstrate_advanced_queries():
    """Show different types of range queries in action."""
    data = [4, 2, 7, 1, 8, 3, 6]
    processor = RangeQueryProcessor(data)
    
    # Test different query types
    ranges = [(1, 3), (2, 5), (0, 6)]
    
    for start, end in ranges:
        print(f"\nRange [{start}:{end}] = {data[start:end+1]}")
        print(f"Sum: {processor.get_range_sum(start, end)}")
        print(f"Average: {processor.get_range_average(start, end):.2f}")
        print(f"Variance: {processor.get_range_variance(start, end):.2f}")
        print(f"Minimum: {processor.get_range_minimum(start, end)}")

demonstrate_advanced_queries()
\`\`\`

<h3>Specialized Range Query Problems</h3>

Let's look at some common variations of range query problems and their solutions:

1. Range Update Queries:
When we need to update ranges of elements efficiently:

\`\`\`python
class RangeUpdateArray:
    """
    Supports efficient range updates using difference array.
    
    Instead of updating each element in a range, we use a
    difference array to track changes and reconstruct values.
    """
    def __init__(self, array):
        self.array = array
        self.n = len(array)
        
        # Build difference array
        self.diff = [array[0]]
        for i in range(1, self.n):
            self.diff.append(array[i] - array[i-1])
            
    def update_range(self, start, end, value):
        """Add value to all elements from start to end inclusive."""
        self.diff[start] += value
        if end + 1 < self.n:
            self.diff[end + 1] -= value
            
    def get_value(self, index):
        """Get value at index after all updates."""
        return sum(self.diff[:index + 1])
    
    def get_final_array(self):
        """Reconstruct final array after all updates."""
        result = [self.diff[0]]
        for i in range(1, self.n):
            result.append(result[-1] + self.diff[i])
        return result

# Example usage
def demonstrate_range_updates():
    """Show how to handle range updates efficiently."""
    array = [1, 3, 5, 7, 9]
    updater = RangeUpdateArray(array)
    
    print("Original array:", array)
    
    # Perform some range updates
    updates = [
        (1, 3, 2),  # Add 2 to elements at positions 1-3
        (0, 2, -1), # Subtract 1 from elements at positions 0-2
        (2, 4, 3)   # Add 3 to elements at positions 2-4
    ]
    
    for start, end, value in updates:
        updater.update_range(start, end, value)
        print(f"\nAfter adding {value} to range [{start}:{end}]:")
        print(updater.get_final_array())

demonstrate_range_updates()
\`\`\`

2. Intersection Queries:
Finding intersections between ranges:

\`\`\`python
def find_range_intersections(ranges):
    """
    Find all intersecting ranges in a list of ranges.
    
    Uses sweep line technique combined with prefix sums
    to efficiently find overlapping ranges.
    """
    # Create events for range starts and ends
    events = []
    for i, (start, end) in enumerate(ranges):
        events.append((start, 1, i))  # 1 for start event
        events.append((end, -1, i))   # -1 for end event
    
    events.sort()  # Sort by position
    
    active_ranges = set()
    intersections = set()
    count = 0
    
    for pos, event_type, range_idx in events:
        if event_type == 1:  # Range start
            if active_ranges:  # If any ranges already active
                for active_idx in active_ranges:
                    intersections.add(tuple(sorted([range_idx, active_idx])))
            active_ranges.add(range_idx)
            count += 1
        else:  # Range end
            active_ranges.remove(range_idx)
            count -= 1
    
    return list(intersections)

# Example usage
def demonstrate_intersections():
    """Show how to find intersecting ranges."""
    ranges = [
        (1, 4), (2, 6), (3, 5), (7, 9)
    ]
    
    print("Ranges:", ranges)
    intersections = find_range_intersections(ranges)
    print("\nIntersecting pairs:")
    for i, j in intersections:
        print(f"Range {ranges[i]} intersects with {ranges[j]}")

demonstrate_intersections()
\`\`\`

<h3>Common Range Query Problems</h3>

Here are some typical problems solved using range query techniques:

1. Cumulative sums over ranges
2. Minimum/maximum element in range
3. Range update operations
4. Finding ranges meeting specific criteria
5. Statistical calculations over ranges (mean, variance)

The key to solving these problems efficiently is choosing the right preprocessing technique:

1. Prefix sums for range sums/averages
2. Sparse tables for range min/max
3. Segment trees for mutable ranges
4. Difference arrays for range updates
5. Binary Indexed Trees for dynamic range queries`,

  exercises: [
    {
      prompt: 'Create a function that finds the subarray with the smallest average value. The subarray must have a minimum length k.',
      initialCode: `def find_minimum_average_subarray(array, k):
    """
    Find subarray of length >= k with minimum average.
    
    Args:
        array: List of numbers
        k: Minimum subarray length
    Returns:
        Tuple of (start_index, length) of best subarray
    """
    # Your implementation here
    pass`,
      solution: `def find_minimum_average_subarray(array, k):
    """
    Find subarray of length >= k with minimum average.
    
    Args:
        array: List of numbers
        k: Minimum subarray length
    Returns:
        Tuple of (start_index, length) of best subarray
        
    Time Complexity: O(n)
    Space Complexity: O(n)
    
    Uses prefix sums to efficiently calculate averages
    of different length subarrays.
    """
    if not array or len(array) < k:
        return None
    
    # Build prefix sums
    prefix = [0]  # Start with 0 for easier computation
    for num in array:
        prefix.append(prefix[-1] + num)
        
    def get_range_average(start, length):
        """Get average of subarray starting at start with given length."""
        end = start + length - 1
        if end >= len(array):
            return float('inf')
        return (prefix[end + 1] - prefix[start]) / length
    
    # Find best subarray
    min_avg = float('inf')
    result = None
    
    # Try all possible start positions
    for start in range(len(array)):
        # Try different lengths starting from k
        length = k
        while start + length <= len(array):
            avg = get_range_average(start, length)
            if avg < min_avg:
                min_avg = avg
                result = (start, length)
            length += 1
    
    return result

# Test the implementation
def test_minimum_average():
    test_cases = [
        ([1, 3, 2, 4, 5, 7, 2, 1], 3),
        ([1, 1, 1, 1, 2, 2, 2, 2], 2),
        ([4, 2, 6, 2, 3, 1, 5, 4], 4)
    ]
    
    for array, k in test_cases:
        result = find_minimum_average_subarray(array, k)
        if result:
            start, length = result
            subarray = array[start:start + length]
            average = sum(subarray) / length
            print(f"\nArray: {array}")
            print(f"Minimum length (k): {k}")
            print(f"Found subarray: {subarray}")
            print(f"Length: {length}")
            print(f"Average: {average:.2f}")
            
            # Verify this is indeed the minimum
            def verify(arr, k):
                min_avg = float('inf')
                for i in range(len(arr)):
                    for l in range(k, len(arr) - i + 1):
                        curr_avg = sum(arr[i:i+l]) / l
                        min_avg = min(min_avg, curr_avg)
                return min_avg
            
            assert abs(verify(array, k) - average) < 1e-10

test_minimum_average()`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why do we build a prefix sum array before answering range queries instead of calculating sums as needed?',
      options: [
        'To use less memory',
        'To allow modifications to the original array',
        'To precompute results and make queries O(1) time',
        'To handle negative numbers'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Prefix sums actually use additional memory to store precomputed values.',
        'Incorrect. Prefix sums don\'t facilitate modifications; they need to be rebuilt if the array changes.',
        'Correct! By precomputing prefix sums once, we can answer any range sum query in O(1) time using simple subtraction, instead of summing elements each time.',
        'Incorrect. Prefix sums work with both positive and negative numbers.'
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'When processing multiple range update queries, why might we use a difference array instead of updating individual elements?',
      options: [
        'To save memory',
        'To support larger numbers',
        'To perform updates in O(1) instead of O(length of range)',
        'To handle overlapping ranges'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Difference arrays use similar memory to the original array.',
        'Incorrect. Number size isn\'t relevant to the choice of using difference arrays.',
        'Correct! A difference array lets us perform range updates by modifying just two elements instead of updating every element in the range, making updates O(1) instead of O(length).',
        'Incorrect. Both approaches can handle overlapping ranges correctly.'
      ],
      difficulty: Difficulty.Advanced,
    },
    {
      question: 'What is the key insight that makes range query processing efficient using prefix-based techniques?',
      options: [
        'They keep the array sorted',
        'They store every possible sum',
        'The difference between two prefix values gives a range result',
        'They compress the data'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Prefix techniques don\'t require or maintain sorting.',
        'Incorrect. Storing every possible sum would require O(n²) space.',
        'Correct! The fundamental principle is that any range result can be computed using two prefix values, making queries efficient.',
        'Incorrect. Prefix techniques don\'t compress data; they actually use extra space to gain speed.'
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const kadaneAlgorithmData: LessonContent = {
  title: "Kadane's Algorithm: Finding Maximum Subarrays Efficiently",
  content: `Let's explore Kadane's Algorithm, a clever technique for finding the maximum sum subarray in a sequence of numbers. Think of this like finding the most profitable period in a company's daily profit/loss records - we want to identify the continuous period that generates the highest total.

<h3>Understanding the Problem</h3>

Before diving into the algorithm, let's understand exactly what we're trying to solve. Given an array of numbers (positive and negative), we want to find the contiguous subarray with the largest sum.

For example, in the array [-2, 1, -3, 4, -1, 2, 1, -5, 4]:
- The maximum subarray is [4, -1, 2, 1] with sum = 6
- Even though we have larger individual numbers, we're looking for the largest sum we can achieve by combining consecutive elements

<div class="visualization-container bg-white p-6 rounded-lg shadow-md my-8">
  <h4 class="text-center text-gray-700 mb-4">Example Array Visualization</h4>
  <div class="flex flex-col space-y-4">
    <div class="flex justify-center space-x-1">
      <div class="w-16 h-16 border-2 border-red-400 flex items-center justify-center">-2</div>
      <div class="w-16 h-16 border-2 border-green-400 flex items-center justify-center">1</div>
      <div class="w-16 h-16 border-2 border-red-400 flex items-center justify-center">-3</div>
      <div class="w-16 h-16 border-2 border-green-400 bg-green-100 flex items-center justify-center">4</div>
      <div class="w-16 h-16 border-2 border-red-400 bg-green-100 flex items-center justify-center">-1</div>
      <div class="w-16 h-16 border-2 border-green-400 bg-green-100 flex items-center justify-center">2</div>
      <div class="w-16 h-16 border-2 border-green-400 bg-green-100 flex items-center justify-center">1</div>
      <div class="w-16 h-16 border-2 border-red-400 flex items-center justify-center">-5</div>
      <div class="w-16 h-16 border-2 border-green-400 flex items-center justify-center">4</div>
    </div>
    <div class="text-center text-gray-600">Maximum subarray highlighted in green background</div>
  </div>
</div>

<h3>The Key Insight</h3>

Kadane's Algorithm works on a brilliant observation: at any position, we only need to make one decision - whether to start a new subarray or extend the existing one. We can make this decision by comparing:
1. The current element by itself
2. The current element plus the best sum we found ending at the previous position

\`\`\`python
def kadanes_algorithm(array):
    """
    Find maximum subarray sum using Kadane's Algorithm.
    
    Args:
        array: List of numbers (positive and negative)
    Returns:
        Maximum sum possible from any contiguous subarray
        
    Time Complexity: O(n)
    Space Complexity: O(1)
    """
    # Initialize our variables
    max_ending_here = max_so_far = array[0]
    
    # Track the start and end of current and maximum subarrays
    start = end = max_start = max_end = 0
    
    # Process rest of the array
    for i in range(1, len(array)):
        # Decision: start new subarray or extend existing one?
        if max_ending_here + array[i] > array[i]:
            max_ending_here = max_ending_here + array[i]
            end = i
        else:
            max_ending_here = array[i]
            start = end = i
            
        # Update global maximum if necessary
        if max_ending_here > max_so_far:
            max_so_far = max_ending_here
            max_start = start
            max_end = end
    
    return {
        'max_sum': max_so_far,
        'start_index': max_start,
        'end_index': max_end,
        'subarray': array[max_start:max_end + 1]
    }

# Example usage
array = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
result = kadanes_algorithm(array)
print(f"Maximum Sum: {result['max_sum']}")
print(f"Subarray: {result['subarray']}")
\`\`\`

<h3>Understanding How It Works</h3>

Let's break down the algorithm step by step:

\`\`\`python
def demonstrate_kadane_steps(array):
    """Show how Kadane's Algorithm processes each element."""
    max_ending_here = max_so_far = array[0]
    
    print(f"Initial element: {array[0]}")
    print(f"max_ending_here = max_so_far = {array[0]}")
    print("\nProcessing remaining elements:")
    
    for i in range(1, len(array)):
        # Store old value for comparison
        old_max = max_ending_here
        
        # Make our decision
        max_ending_here = max(array[i], max_ending_here + array[i])
        max_so_far = max(max_so_far, max_ending_here)
        
        # Show the decision process
        print(f"\nElement: {array[i]}")
        print(f"Previous max_ending_here: {old_max}")
        print(f"Choice: max({array[i]}, {old_max} + {array[i]})")
        print(f"New max_ending_here: {max_ending_here}")
        print(f"max_so_far: {max_so_far}")

# Let's see it in action
test_array = [-2, 1, -3, 4, -1, 2]
demonstrate_kadane_steps(test_array)
\`\`\`

<h3>Variations and Extensions</h3>

The basic algorithm can be modified to handle various related problems:

1. Finding Maximum Circular Subarray Sum:
\`\`\`python
def max_circular_subarray_sum(array):
    """
    Find maximum subarray sum in a circular array.
    
    Args:
        array: List of numbers
    Returns:
        Maximum sum possible in circular configuration
        
    This handles cases where the maximum subarray wraps
    around the end of the array.
    """
    # Case 1: Maximum subarray does not wrap around
    max_normal = kadanes_algorithm(array)['max_sum']
    
    # Case 2: Maximum subarray wraps around
    # This is equal to total sum minus minimum subarray sum
    arr_sum = sum(array)
    # Invert array signs and find maximum subarray
    inverted = [-x for x in array]
    max_inverted = kadanes_algorithm(inverted)['max_sum']
    max_wrapped = arr_sum + max_inverted  # Adding because array was inverted
    
    return max(max_normal, max_wrapped)
\`\`\`

2. Finding Maximum Product Subarray:
\`\`\`python
def max_product_subarray(array):
    """
    Find maximum product of any contiguous subarray.
    
    Args:
        array: List of numbers
    Returns:
        Maximum product possible
        
    This handles multiplication where we need to track
    both maximum and minimum (for negative numbers).
    """
    if not array:
        return 0
        
    max_so_far = max_ending_here = min_ending_here = array[0]
    
    for i in range(1, len(array)):
        curr = array[i]
        temp_max = max(curr, max_ending_here * curr, min_ending_here * curr)
        min_ending_here = min(curr, max_ending_here * curr, min_ending_here * curr)
        max_ending_here = temp_max
        max_so_far = max(max_so_far, max_ending_here)
    
    return max_so_far
\`\`\`

<h3>Handling Edge Cases</h3>

When implementing Kadane's Algorithm, we need to consider several edge cases:

1. All Negative Numbers:
\`\`\`python
def kadane_with_edge_cases(array):
    """
    Kadane's Algorithm handling all edge cases.
    """
    if not array:
        return 0
        
    max_ending_here = max_so_far = array[0]
    
    for num in array[1:]:
        max_ending_here = max(num, max_ending_here + num)
        max_so_far = max(max_so_far, max_ending_here)
    
    return max_so_far

# Test with all negative numbers
negative_array = [-2, -3, -1, -5]
result = kadane_with_edge_cases(negative_array)
print(f"Maximum sum in all negative array: {result}")  # Should return -1
\`\`\`

2. Empty Array and Single Element:
\`\`\`python
def safe_kadane(array):
    """
    Safe implementation handling empty and single-element arrays.
    """
    if not array:
        raise ValueError("Array cannot be empty")
    if len(array) == 1:
        return array[0]
        
    return kadane_with_edge_cases(array)
\`\`\``,

  exercises: [
    {
      prompt: 'Implement a function that finds both the maximum sum subarray and the second maximum sum subarray (non-overlapping with the first).',
      initialCode: `def find_two_max_subarrays(array):
    """
    Find two non-overlapping subarrays with maximum sums.
    
    Args:
        array: List of numbers
    Returns:
        Tuple of (first_max_sum, second_max_sum)
    """
    # Your implementation here
    pass`,
      solution: `def find_two_max_subarrays(array):
    """
    Find two non-overlapping subarrays with maximum sums.
    
    Args:
        array: List of numbers
    Returns:
        Tuple of (first_max_sum, second_max_sum)
        
    Time Complexity: O(n)
    Space Complexity: O(n)
    """
    n = len(array)
    if n < 2:
        raise ValueError("Array must have at least 2 elements")
    
    # Forward maximum sums
    forward_max = [0] * n
    curr_max = max_so_far = array[0]
    forward_max[0] = max_so_far
    
    for i in range(1, n):
        curr_max = max(array[i], curr_max + array[i])
        max_so_far = max(max_so_far, curr_max)
        forward_max[i] = max_so_far
    
    # Backward maximum sums
    backward_max = [0] * n
    curr_max = max_so_far = array[-1]
    backward_max[-1] = max_so_far
    
    for i in range(n-2, -1, -1):
        curr_max = max(array[i], curr_max + array[i])
        max_so_far = max(max_so_far, curr_max)
        backward_max[i] = max_so_far
    
    # Find best split point
    best_combined = float('-inf')
    for i in range(n-1):
        combined = forward_max[i] + backward_max[i+1]
        best_combined = max(best_combined, combined)
    
    return best_combined

# Test the function
test_array = [3, -4, 2, -1, -2, 6, -3, 2]
result = find_two_max_subarrays(test_array)
print(f"Maximum sum of two non-overlapping subarrays: {result}")`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Implement Kadane\'s Algorithm to find the maximum sum subarray where the subarray must be at least k elements long.',
      initialCode: `def kadane_with_minimum_length(array, k):
    """
    Find maximum subarray sum where subarray length >= k.
    
    Args:
        array: List of numbers
        k: Minimum subarray length
    Returns:
        Maximum sum possible
    """
    # Your implementation here
    pass`,
      solution: `def kadane_with_minimum_length(array, k):
    """
    Find maximum subarray sum where subarray length >= k.
    
    Args:
        array: List of numbers
        k: Minimum subarray length
    Returns:
        Maximum sum possible
        
    Time Complexity: O(n)
    Space Complexity: O(1)
    """
    if len(array) < k:
        raise ValueError("Array length must be >= k")
    
    # First compute sum of first k elements
    curr_sum = sum(array[:k])
    max_sum = curr_sum
    
    # Slide window of size k and track maximum
    for i in range(k, len(array)):
        # Add next element and remove first element of previous window
        curr_sum = curr_sum + array[i] - array[i-k]
        max_sum = max(max_sum, curr_sum)
        
        # Try to extend current window
        extend_sum = curr_sum
        for j in range(i-k, -1, -1):
            extend_sum += array[j]
            max_sum = max(max_sum, extend_sum)
    
    return max_sum

# Test the function
test_array = [1, -2, 3, 4, -5, 6, 7, -8]
k = 3
result = kadane_with_minimum_length(test_array, k)
print(f"Maximum sum with minimum length {k}: {result}")`,
      difficulty: Difficulty.Advanced,
    }
  ],
quizzes: [
    {
      question: "Why does Kadane's Algorithm maintain both 'max_ending_here' and 'max_so_far' variables?",
      options: [
        'To improve the algorithm\'s time complexity',
        'To handle negative numbers properly',
        'To track both current and global maximum sums',
        'To reduce space complexity'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. The time complexity is O(n) regardless of using two variables.',
        'Incorrect. Negative numbers are handled by the logic of the algorithm, not by using two variables.',
        'Correct! max_ending_here tracks the maximum sum ending at the current position, while max_so_far keeps track of the global maximum found so far.',
        'Incorrect. Using two variables doesn\'t significantly impact space complexity.'
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the key insight that makes Kadane\'s Algorithm work efficiently?',
      options: [
        'It uses dynamic programming to avoid recalculating sums',
        'It only needs to make one decision at each step: extend current subarray or start new one',
        'It pre-sorts the array to find maximum values quickly',
        'It uses a divide-and-conquer approach to break down the problem'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. While Kadane\'s Algorithm has dynamic programming aspects, this isn\'t the key insight.',
        'Correct! The algorithm\'s efficiency comes from recognizing that at each position, we only need to decide whether to start a new subarray or extend the existing one.',
        'Incorrect. The algorithm works on the original array order and doesn\'t require sorting.',
        'Incorrect. Kadane\'s Algorithm uses a linear scan rather than divide-and-conquer.'
      ],
      difficulty: Difficulty.Advanced,
    }
  ]
};

const stockPatternsData: LessonContent = {
  title: 'Mastering Stock Price Array Problems',
  content: `Let's explore how to solve stock price problems, starting with simple cases and building up to more complex scenarios. These problems are not just interview favorites - they help us understand important concepts in dynamic programming and greedy algorithms.

<h3>Understanding Stock Problems</h3>

Think of stock problems like planning your moves in a board game where you can see all future positions. You need to decide when to buy and sell to maximize your profit, but different scenarios have different rules about how many trades you can make.

<div class="visualization-container bg-white p-6 rounded-lg shadow-md my-8">
  <h4 class="text-center text-gray-700 mb-4">Example Stock Price Timeline</h4>
  <div class="flex flex-col space-y-4">
    <!-- Price chart visualization -->
    <div class="h-40 flex items-end justify-around">
      <div class="w-8 bg-blue-400" style="height: 30%">
        <div class="text-center">7</div>
      </div>
      <div class="w-8 bg-blue-400" style="height: 20%">
        <div class="text-center">1</div>
      </div>
      <div class="w-8 bg-blue-400" style="height: 40%">
        <div class="text-center">5</div>
      </div>
      <div class="w-8 bg-blue-400" style="height: 50%">
        <div class="text-center">3</div>
      </div>
      <div class="w-8 bg-blue-400" style="height: 60%">
        <div class="text-center">6</div>
      </div>
      <div class="w-8 bg-blue-400" style="height: 80%">
        <div class="text-center">4</div>
      </div>
    </div>
    <div class="text-center text-gray-600">Day-by-day price changes</div>
  </div>
</div>

<h3>Single Transaction: Finding the Best Time to Buy and Sell</h3>

Let's start with the simplest case: you can make only one transaction (buy once, sell once). The goal is to maximize profit.

\`\`\`python
def max_profit_single_transaction(prices):
    """
    Find maximum profit with a single transaction.
    
    Args:
        prices: List of daily stock prices
    Returns:
        Maximum profit possible
        
    Time Complexity: O(n)
    Space Complexity: O(1)
    """
    if not prices:
        return 0
        
    min_price = float('inf')  # Track lowest price seen
    max_profit = 0           # Track maximum profit possible
    
    for price in prices:
        # Update lowest price seen so far
        min_price = min(min_price, price)
        # See if we can get better profit by selling at current price
        current_profit = price - min_price
        max_profit = max(max_profit, current_profit)
    
    return max_profit

# Example with step-by-step explanation
def explain_single_transaction(prices):
    """Show how the algorithm makes decisions."""
    min_price = float('inf')
    max_profit = 0
    
    print("Day by day analysis:")
    for i, price in enumerate(prices):
        old_min = min_price
        min_price = min(min_price, price)
        current_profit = price - min_price
        max_profit = max(max_profit, current_profit)
        
        print(f"\nDay {i+1}: Price = {price}")
        print(f"Minimum price so far: {min_price}")
        print(f"Potential profit if selling today: {current_profit}")
        print(f"Maximum profit so far: {max_profit}")

# Test the explanation
prices = [7, 1, 5, 3, 6, 4]
explain_single_transaction(prices)
\`\`\`

<h3>Multiple Transactions: When We Can Buy and Sell Multiple Times</h3>

Now let's consider when we can make multiple transactions, but we must sell before buying again.

\`\`\`python
def max_profit_multiple_transactions(prices):
    """
    Find maximum profit with unlimited transactions.
    
    Args:
        prices: List of daily stock prices
    Returns:
        Maximum profit possible
        
    Time Complexity: O(n)
    Space Complexity: O(1)
    """
    total_profit = 0
    
    # We can simply collect all positive price differences
    for i in range(1, len(prices)):
        if prices[i] > prices[i-1]:
            profit = prices[i] - prices[i-1]
            total_profit += profit
    
    return total_profit

def explain_multiple_transactions(prices):
    """Explain the decision process for multiple transactions."""
    total_profit = 0
    transactions = []
    
    buy_price = None
    for i in range(len(prices) - 1):
        # If we haven't bought and tomorrow's price is higher
        if buy_price is None and prices[i+1] > prices[i]:
            buy_price = prices[i]
            print(f"\nBuying at price: {buy_price}")
        
        # If we've bought and tomorrow's price is lower
        elif buy_price is not None and prices[i+1] < prices[i]:
            profit = prices[i] - buy_price
            total_profit += profit
            transactions.append((buy_price, prices[i], profit))
            buy_price = None
            print(f"Selling at price: {prices[i]}, Profit: {profit}")
    
    # Handle last day
    if buy_price is not None and prices[-1] > buy_price:
        profit = prices[-1] - buy_price
        total_profit += profit
        transactions.append((buy_price, prices[-1], profit))
        print(f"\nSelling at last price: {prices[-1]}, Profit: {profit}")
    
    print(f"\nTotal profit: {total_profit}")
    return transactions

# Test multiple transactions
prices = [7, 1, 5, 3, 6, 4]
transactions = explain_multiple_transactions(prices)
\`\`\`

<h3>K Transactions: Limited Number of Trades</h3>

The most complex case is when we're limited to k transactions. This requires dynamic programming.

\`\`\`python
def max_profit_k_transactions(prices, k):
    """
    Find maximum profit with k transactions allowed.
    
    Args:
        prices: List of daily stock prices
        k: Maximum number of transactions allowed
    Returns:
        Maximum profit possible
        
    Time Complexity: O(n*k)
    Space Complexity: O(k)
    """
    if not prices or k == 0:
        return 0
        
    # dp[i][j] represents max profit using at most i transactions up to day j
    n = len(prices)
    dp = [[0] * n for _ in range(k + 1)]
    
    for i in range(1, k + 1):
        local_max = float('-inf')
        for j in range(1, n):
            # local_max tracks the maximum profit we could have
            # if we sold the stock on day j using i transactions
            local_max = max(local_max, dp[i-1][j-1] - prices[j-1])
            dp[i][j] = max(dp[i][j-1], local_max + prices[j])
    
    return dp[k][n-1]

def explain_k_transactions(prices, k):
    """Show how profits build up with each additional transaction."""
    results = []
    for i in range(1, k + 1):
        profit = max_profit_k_transactions(prices, i)
        results.append((i, profit))
        print(f"\nWith {i} transaction(s): Maximum profit = {profit}")
    return results

# Test k transactions
prices = [3, 2, 6, 5, 0, 3]
k = 2
results = explain_k_transactions(prices, k)
\`\`\`

<h3>Advanced Considerations</h3>

When solving stock problems, consider these important aspects:

1. Transaction Fees:
\`\`\`python
def max_profit_with_fee(prices, fee):
    """
    Find maximum profit with transaction fee.
    
    Args:
        prices: List of daily stock prices
        fee: Transaction fee for each trade
    Returns:
        Maximum profit possible
    """
    cash = 0  # Maximum profit if we have no stock
    hold = -prices[0]  # Maximum profit if we hold stock
    
    for price in prices[1:]:
        cash = max(cash, hold + price - fee)  # Sell stock
        hold = max(hold, cash - price)        # Buy stock
    
    return cash
\`\`\`

2. Cooldown Period:
\`\`\`python
def max_profit_with_cooldown(prices):
    """
    Find maximum profit with 1-day cooldown between trades.
    """
    if not prices:
        return 0
        
    buy = float('-inf')  # Max profit if we have stock
    sell = 0            # Max profit if we don't have stock
    prev_sell = 0      # Max profit from 2 days ago
    
    for price in prices:
        new_buy = max(buy, prev_sell - price)
        new_sell = max(sell, buy + price)
        buy = new_buy
        prev_sell = sell
        sell = new_sell
    
    return sell
\`\`\`

These variations test our understanding of both the problem space and algorithm design principles. The key is recognizing the patterns in each variant and adapting our solution accordingly.`,

  exercises: [
    {
      prompt: 'Implement a function that finds the maximum profit possible when you must buy and sell in pairs and can hold at most two stocks at any time.',
      initialCode: `def max_profit_two_stocks(prices):
    """
    Find maximum profit when holding at most two stocks.
    
    Args:
        prices: List of daily stock prices
    Returns:
        Maximum profit possible
    """
    # Your implementation here
    pass`,
      solution: `def max_profit_two_stocks(prices):
    """
    Find maximum profit when holding at most two stocks.
    
    Args:
        prices: List of daily stock prices
    Returns:
        Maximum profit possible
        
    Time Complexity: O(n)
    Space Complexity: O(1)
    """
    if not prices:
        return 0
    
    # Initialize states
    buy1 = float('-inf')  # Maximum profit after buying first stock
    sell1 = 0            # Maximum profit after selling first stock
    buy2 = float('-inf')  # Maximum profit after buying second stock
    sell2 = 0            # Maximum profit after selling second stock
    
    for price in prices:
        # Update each state based on current price
        buy1 = max(buy1, -price)         # Buy first stock
        sell1 = max(sell1, buy1 + price) # Sell first stock
        buy2 = max(buy2, sell1 - price)  # Buy second stock
        sell2 = max(sell2, buy2 + price) # Sell second stock
    
    return sell2

# Test the function
prices = [3, 3, 5, 0, 0, 3, 1, 4]
profit = max_profit_two_stocks(prices)
print(f"Maximum profit: {profit}")

# Add detailed explanation of the process
def explain_two_stocks(prices):
    """Explain the state transitions for two stocks."""
    b1 = float('-inf')
    s1 = 0
    b2 = float('-inf')
    s2 = 0
    
    for i, price in enumerate(prices):
        old_b1, old_s1, old_b2, old_s2 = b1, s1, b2, s2
        
        b1 = max(old_b1, -price)
        s1 = max(old_s1, old_b1 + price)
        b2 = max(old_b2, old_s1 - price)
        s2 = max(old_s2, old_b2 + price)
        
        print(f"\nDay {i+1}, Price: {price}")
        print(f"After first buy: {b1}")
        print(f"After first sell: {s1}")
        print(f"After second buy: {b2}")
        print(f"After second sell: {s2}")

# Run explanation
explain_two_stocks([3, 3, 5, 0, 0, 3, 1, 4])`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Create a function that finds the best days to buy and sell when you can make at most k transactions and have a transaction fee.',
      initialCode: `def max_profit_k_with_fee(prices, k, fee):
    """
    Find maximum profit with k transactions and fee.
    
    Args:
        prices: List of daily stock prices
        k: Maximum number of transactions
        fee: Transaction fee per trade
    Returns:
        Maximum profit possible
    """
    # Your implementation here
    pass`,
      solution: `def max_profit_k_with_fee(prices, k, fee):
    """
    Find maximum profit with k transactions and fee.
    
    Args:
        prices: List of daily stock prices
        k: Maximum number of transactions
        fee: Transaction fee per trade
    Returns:
        Maximum profit possible and list of transactions
        
    Time Complexity: O(n*k)
    Space Complexity: O(k)
    """
    if not prices or k == 0:
        return 0, []
    
    n = len(prices)
    # dp[i][j][0] = max profit with i transactions up to day j without stock
    # dp[i][j][1] = max profit with i transactions up to day j with stock
    dp = [[[float('-inf')] * 2 for _ in range(n)] for _ in range(k + 1)]
    
    # Initialize base cases
    for j in range(n):
        dp[0][j][0] = 0
    
    # Fill the dp table
    transactions = []
    for i in range(1, k + 1):
        dp[i][0][1] = -prices[0]
        for j in range(1, n):
            # Don't have stock
            dp[i][j][0] = max(dp[i][j-1][0],            # Do nothing
                            dp[i][j-1][1] + prices[j] - fee)  # Sell
            
            # Have stock
            dp[i][j][1] = max(dp[i][j-1][1],            # Do nothing
                            dp[i-1][j-1][0] - prices[j])  # Buy
    
    # Reconstruct transactions
    profit = dp[k][n-1][0]
    pos = k
    has_stock = False
    j = n - 1
    buy_price = 0
    
    while pos > 0 and j > 0:
        if not has_stock:
            if dp[pos][j][0] == dp[pos][j-1][1] + prices[j] - fee:
                transactions.append((buy_price, prices[j]))
                has_stock = True
                pos -= 1
        else:
            if dp[pos][j][1] == dp[pos-1][j-1][0] - prices[j]:
                buy_price = prices[j]
                has_stock = False
        j -= 1
    
    return profit, sorted(transactions)

# Test the function
prices = [10, 20, 30, 0, 40, 50]
k = 2
fee = 1
profit, transactions = max_profit_k_with_fee(prices, k, fee)
print(f"Maximum profit: {profit}")
print("Transactions:")
for buy, sell in transactions:
    print(f"Buy at {buy}, Sell at {sell}, Profit: {sell - buy - fee}")`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why does the single transaction stock problem track the minimum price seen so far?',
      options: [
        'To minimize memory usage in the algorithm',
        'To ensure we buy at the absolute lowest price',
        'Because we can only buy before we sell',
        'To optimize the algorithm\'s runtime'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Tracking minimum price uses constant memory regardless.',
        'Incorrect. The absolute lowest price might not lead to maximum profit if it occurs too late.',
        'Correct! We track the minimum price seen so far because we can only buy before we sell, and at each price we want to know the best possible buying price that could have preceded it.',
        'Incorrect. The runtime is O(n) regardless of tracking minimum price.'
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'In the multiple transactions problem, why can we simply add up all positive price differences?',
      options: [
        'It\'s a mathematical coincidence that works for stocks',
        'Because we can buy and sell on consecutive days',
        'Because stock prices are always positive',
        'Because it minimizes the number of transactions'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. This is not a coincidence but a result of the problem constraints.',
        'Correct! Since we can buy and sell without restrictions (other than selling before buying again), any positive price difference between consecutive days can be captured as profit.',
        'Incorrect. The strategy works even with negative prices.',
        'Incorrect. This approach might actually use more transactions than necessary.'
      ],
      difficulty: Difficulty.Advanced,
    }
  ]
};

const subarrayProblemsData: LessonContent = {
  title: 'Mastering Subarray Problem-Solving Techniques',
  content: `Understanding how to solve subarray problems is crucial for both practical programming and technical interviews. Let's explore the common patterns and techniques, starting with fundamental concepts and building up to more sophisticated approaches.

<h3>Understanding Subarrays</h3>

A subarray is a contiguous portion of an array. Think of it like taking a slice of bread from a loaf - it must be a continuous piece. For example, in the array [1, 2, 3, 4], [2, 3] is a subarray, but [2, 4] is not because it skips over 3.

<div class="visualization-container bg-white p-6 rounded-lg shadow-md my-8">
  <h4 class="text-center text-gray-700 mb-4">Subarray Examples</h4>
  <div class="flex flex-col space-y-4">
    <!-- Original array -->
    <div class="flex justify-center space-x-1">
      <div class="w-16 h-16 border-2 border-blue-400 flex items-center justify-center">1</div>
      <div class="w-16 h-16 border-2 border-blue-400 flex items-center justify-center">2</div>
      <div class="w-16 h-16 border-2 border-blue-400 flex items-center justify-center">3</div>
      <div class="w-16 h-16 border-2 border-blue-400 flex items-center justify-center">4</div>
    </div>
    <!-- Valid subarray -->
    <div class="flex justify-center space-x-1">
      <div class="w-16 h-16 border-2 border-gray-200 flex items-center justify-center">-</div>
      <div class="w-16 h-16 border-2 border-green-400 bg-green-100 flex items-center justify-center">2</div>
      <div class="w-16 h-16 border-2 border-green-400 bg-green-100 flex items-center justify-center">3</div>
      <div class="w-16 h-16 border-2 border-gray-200 flex items-center justify-center">-</div>
    </div>
    <div class="text-center text-green-600">Valid subarray: [2, 3]</div>
    <!-- Invalid "subarray" -->
    <div class="flex justify-center space-x-1">
      <div class="w-16 h-16 border-2 border-gray-200 flex items-center justify-center">-</div>
      <div class="w-16 h-16 border-2 border-red-400 bg-red-100 flex items-center justify-center">2</div>
      <div class="w-16 h-16 border-2 border-gray-200 flex items-center justify-center">-</div>
      <div class="w-16 h-16 border-2 border-red-400 bg-red-100 flex items-center justify-center">4</div>
    </div>
    <div class="text-center text-red-600">Not a subarray: [2, 4] (not contiguous)</div>
  </div>
</div>

<h3>Common Subarray Patterns</h3>

Let's explore the most common patterns for solving subarray problems:

<h4>1. Sliding Window Technique</h4>

The sliding window technique is perfect for problems involving fixed-size subarrays or when looking for subarrays that meet certain conditions.

\`\`\`python
def sliding_window_example(array, k):
    """
    Find maximum sum of any contiguous subarray of size k.
    
    Args:
        array: Input array of numbers
        k: Size of subarray
    Returns:
        Maximum sum found
        
    This demonstrates the basic sliding window technique.
    """
    if not array or k > len(array):
        return 0
    
    # Initialize first window
    window_sum = sum(array[:k])
    max_sum = window_sum
    
    # Slide window forward
    for i in range(k, len(array)):
        # Add new element and remove first element of previous window
        window_sum = window_sum + array[i] - array[i-k]
        max_sum = max(max_sum, window_sum)
    
    return max_sum

def explain_sliding_window(array, k):
    """Show how sliding window moves through array."""
    if not array or k > len(array):
        return
        
    window_sum = sum(array[:k])
    print(f"Initial window: {array[:k]}, Sum: {window_sum}")
    
    for i in range(k, len(array)):
        old_sum = window_sum
        window_sum = window_sum + array[i] - array[i-k]
        print(f"\nRemove {array[i-k]}, Add {array[i]}")
        print(f"New window: {array[i-k+1:i+1]}, Sum: {window_sum}")

# Example usage
nums = [1, 4, 2, 10, 2, 3, 1, 0, 20]
k = 4
explain_sliding_window(nums, k)
\`\`\`

<h4>2. Prefix Sum Technique</h4>

Prefix sums are powerful for quickly computing sums of arbitrary subarrays and solving problems involving cumulative values.

\`\`\`python
def prefix_sum_example(array):
    """
    Demonstrate prefix sum technique for efficient subarray sum queries.
    
    Args:
        array: Input array of numbers
        
    This shows how to use prefix sums for O(1) subarray sum queries.
    """
    # Calculate prefix sums
    prefix_sums = [0]  # Include 0 for easier calculation
    current_sum = 0
    for num in array:
        current_sum += num
        prefix_sums.append(current_sum)
    
    def get_subarray_sum(start, end):
        """Get sum of subarray from start to end (inclusive)."""
        return prefix_sums[end + 1] - prefix_sums[start]
    
    # Demonstrate usage
    print("Array:", array)
    print("Prefix sums:", prefix_sums)
    
    # Example queries
    for start in range(len(array)):
        for end in range(start, len(array)):
            print(f"Sum of subarray [{start}:{end+1}]: {get_subarray_sum(start, end)}")

# Example usage
numbers = [1, 2, 3, 4, 5]
prefix_sum_example(numbers)
\`\`\`

<h4>3. Kadane's Algorithm Pattern</h4>

For problems involving maximum/minimum subarray sums, Kadane's algorithm pattern is essential.

\`\`\`python
def kadane_pattern_example(array):
    """
    Find maximum sum subarray using Kadane's pattern.
    
    Args:
        array: Input array of numbers
    Returns:
        Tuple of (max_sum, start_index, end_index)
    """
    max_so_far = float('-inf')
    max_ending_here = 0
    start = 0
    end = 0
    temp_start = 0
    
    for i, num in enumerate(array):
        if max_ending_here <= 0:
            max_ending_here = num
            temp_start = i
        else:
            max_ending_here += num
            
        if max_ending_here > max_so_far:
            max_so_far = max_ending_here
            start = temp_start
            end = i
    
    return max_so_far, start, end

def explain_kadane_pattern(array):
    """Show how Kadane's pattern makes decisions."""
    max_so_far = float('-inf')
    max_ending_here = 0
    
    print("Processing array:", array)
    for i, num in enumerate(array):
        old_max = max_ending_here
        
        if max_ending_here <= 0:
            max_ending_here = num
            print(f"\nResetting at position {i}")
        else:
            max_ending_here += num
            print(f"\nExtending at position {i}")
            
        print(f"Number: {num}")
        print(f"Previous max_ending_here: {old_max}")
        print(f"New max_ending_here: {max_ending_here}")
        
        if max_ending_here > max_so_far:
            max_so_far = max_ending_here
            print(f"New maximum found: {max_so_far}")

# Example usage
array = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
explain_kadane_pattern(array)
\`\`\`

<h4>4. Two-Pointer Technique</h4>

The two-pointer technique is useful for problems involving subarray properties that can be checked by maintaining two positions.

\`\`\`python
def two_pointer_example(array, target_sum):
    """
    Find subarray with given sum using two pointers.
    
    Args:
        array: Input array of numbers (assumed positive)
        target_sum: Target sum to find
    Returns:
        Tuple of (start_index, end_index) or None if not found
    """
    current_sum = array[0]
    start = 0
    end = 0
    
    while end < len(array):
        if current_sum == target_sum:
            return start, end
            
        if current_sum < target_sum and end < len(array) - 1:
            end += 1
            current_sum += array[end]
        else:
            current_sum -= array[start]
            start += 1
            
        if start > end:
            end = start
            current_sum = array[start] if start < len(array) else 0
    
    return None

def explain_two_pointer(array, target_sum):
    """Show how two-pointer technique moves through array."""
    current_sum = array[0]
    start = 0
    end = 0
    
    print(f"Looking for sum: {target_sum}")
    print(f"Initial window: [{start}:{end+1}], Sum: {current_sum}")
    
    while end < len(array):
        print(f"\nCurrent window: {array[start:end+1]}")
        print(f"Current sum: {current_sum}")
        
        if current_sum == target_sum:
            print(f"Found target sum!")
            return
            
        if current_sum < target_sum and end < len(array) - 1:
            end += 1
            current_sum += array[end]
            print(f"Expanding window right: [{start}:{end+1}]")
        else:
            current_sum -= array[start]
            start += 1
            print(f"Shrinking window left: [{start}:{end+1}]")

# Example usage
array = [1, 4, 20, 3, 10, 5]
target = 33
explain_two_pointer(array, target)
\`\`\`

<h3>Combining Techniques</h3>

Many complex subarray problems require combining these basic patterns. Here's an example that combines prefix sums with two pointers:

\`\`\`python
def find_longest_subarray_with_sum(array, target_sum):
    """
    Find longest subarray with given sum using prefix sums and two pointers.
    
    Args:
        array: Input array of numbers
        target_sum: Target sum to find
    Returns:
        Tuple of (start_index, end_index) for longest such subarray
    """
    # Calculate prefix sums
    prefix_sums = {0: -1}  # Sum -> earliest index mapping
    current_sum = 0
    max_length = 0
    result = None
    
    for i, num in enumerate(array):
        current_sum += num
        
        # Look for subarray with target sum ending at current position
        if current_sum - target_sum in prefix_sums:
            start = prefix_sums[current_sum - target_sum] + 1
            if i - start + 1 > max_length:
                max_length = i - start + 1
                result = (start, i)
        
        # Store earliest occurrence of current sum
        if current_sum not in prefix_sums:
            prefix_sums[current_sum] = i
    
    return result

# Example usage
array = [1, -1, 5, -2, 3]
target = 3
result = find_longest_subarray_with_sum(array, target)
if result:
    start, end = result
    print(f"Longest subarray with sum {target}: {array[start:end+1]}")
\`\`\``,

  exercises: [
    {
      prompt: 'Implement a function that finds the shortest subarray whose sum is at least k.',
      initialCode: `def shortest_subarray_with_sum_at_least_k(array, k):
    """
    Find shortest subarray with sum >= k.
    
    Args:
        array: List of numbers
        k: Target minimum sum
    Returns:
        Length of shortest such subarray, or -1 if none exists
    """
    # Your implementation here
    pass`,
      solution: `def shortest_subarray_with_sum_at_least_k(array, k):
    """
    Find shortest subarray with sum >= k.
    
    Args:
        array: List of numbers
        k: Target minimum sum
    Returns:
        Length of shortest such subarray, or -1 if none exists
        
    Time Complexity: O(n)
    Space Complexity: O(1)
    """
    if not array:
        return -1
        
    n = len(array)
    current_sum = 0
    min_length = float('inf')
    start = 0
    
    for end in range(n):
        current_sum += array[end]
        
        # Try to minimize window size while maintaining sum >= k
        while current_sum >= k and start <= end:
            min_length = min(min_length, end - start + 1)
            current_sum -= array[start]
            start += 1
    
    return min_length if min_length != float('inf') else -1

    # Test function
    test_array = [2, 3, 1, 2, 4, 3]
    k = 7
    result = shortest_subarray_with_sum_at_least_k(test_array, k)
    print(f"Length of shortest subarray with sum >= {k}: {result}")`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Create a function that finds all subarrays with a given XOR value.',
      initialCode: `def count_subarrays_with_xor(array, target_xor):
        """
        Count subarrays with given XOR value.
        
        Args:
            array: List of numbers
            target_xor: Target XOR value
        Returns:
            Number of subarrays with given XOR
        """
        # Your implementation here
        pass`,
          solution: `def count_subarrays_with_xor(array, target_xor):
        """
        Count subarrays with given XOR value.
        
        Args:
            array: List of numbers
            target_xor: Target XOR value
        Returns:
            Number of subarrays with given XOR
            
        Time Complexity: O(n)
        Space Complexity: O(n)
        
        Uses prefix XOR technique similar to prefix sums.
        """
        count = 0
        current_xor = 0
        # Map to store frequency of prefix XORs
        xor_count = {0: 1}  # Empty subarray has XOR of 0
        
        for num in array:
            # Update current XOR
            current_xor ^= num
            
            # If current_xor ^ target_xor exists in map,
            # all subarrays ending at current position with
            # those prefixes will have XOR = target_xor
            needed_xor = current_xor ^ target_xor
            count += xor_count.get(needed_xor, 0)
            
            # Update prefix XOR frequency
            xor_count[current_xor] = xor_count.get(current_xor, 0) + 1
        
        return count

    # Test function
    test_array = [4, 2, 2, 6, 4]
    target_xor = 6
    result = count_subarrays_with_xor(test_array, target_xor)
    print(f"Number of subarrays with XOR {target_xor}: {result}")

    def explain_xor_solution(array, target_xor):
        """Explain how the XOR solution works step by step."""
        print(f"Finding subarrays with XOR = {target_xor}\n")
        current_xor = 0
        xor_count = {0: 1}
        
        for i, num in enumerate(array):
            old_xor = current_xor
            current_xor ^= num
            needed_xor = current_xor ^ target_xor
            
            print(f"Position {i}, Number: {num}")
            print(f"Previous XOR: {old_xor}")
            print(f"Current XOR: {current_xor}")
            print(f"Need to find prefixes with XOR: {needed_xor}")
            print(f"Current prefix XORs: {xor_count}\n")

    # Run explanation
    explain_xor_solution(test_array, target_xor)`
    }
  ],

quizzes: [
    {
      question: 'When should you use the sliding window technique versus the two-pointer technique?',
      options: [
        'Sliding window is always faster',
        'Two-pointer is better for fixed-size windows',
        'Sliding window for fixed-size or constrained windows, two-pointer for variable-size windows meeting a condition',
        'They are exactly the same thing'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. The choice depends on the problem constraints, not just performance.',
        'Incorrect. Sliding window is actually better for fixed-size windows.',
        'Correct! Sliding window works best with fixed size or constrained growth, while two-pointer is better when window size can vary based on conditions.',
        'Incorrect. While related, they are distinct techniques with different use cases.'
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'Why do we often use prefix sums when working with subarray sums?',
      options: [
        'To reduce memory usage',
        'To compute any subarray sum in O(1) time after O(n) preprocessing',
        'To sort the array more efficiently',
        'To handle negative numbers'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Prefix sums actually use additional memory.',
        'Correct! After computing prefix sums in O(n) time, we can find any subarray sum using simple subtraction in O(1) time.',
        'Incorrect. Prefix sums are not related to sorting.',
        'Incorrect. Prefix sums work with both positive and negative numbers.'
      ],
      difficulty: Difficulty.Advanced,
    }
  ]
};

const arrayRotationData: LessonContent = {
  title: 'Techniques for Rotating Array Elements',
  content: `<p>
Array rotation is the process of shifting elements in an array to the left or right by a specified number of positions. It is a common operation in algorithms, data processing, and programming challenges. Array rotation can be performed in various ways, each with different time complexities and memory requirements.
</p>

<ul>
<li><strong>Left Rotation:</strong> Moves each element in the array to the left by a specified number of positions, with elements that shift out of the start of the array reappearing at the end.</li>
<li><strong>Right Rotation:</strong> Shifts each element to the right, with elements that shift out of the end reappearing at the beginning of the array.</li>
<li><strong>In-place Rotation:</strong> Some rotation techniques modify the array directly without using extra memory.</li>
<li><strong>Circular Array Logic:</strong> Many rotation operations benefit from treating the array as circular, where the end connects back to the start.</li>
</ul>`,
  codeExample: `# Left Rotation by d positions
def left_rotate(arr, d):
    n = len(arr)
    return arr[d % n:] + arr[:d % n]

# Right Rotation by d positions
def right_rotate(arr, d):
    n = len(arr)
    return arr[-(d % n):] + arr[:-(d % n)]

# In-place Left Rotation using Reversal Algorithm
def reverse(arr, start, end):
    while start < end:
        arr[start], arr[end] = arr[end], arr[start]
        start += 1
        end -= 1

def left_rotate_in_place(arr, d):
    n = len(arr)
    d = d % n
    reverse(arr, 0, d - 1)
    reverse(arr, d, n - 1)
    reverse(arr, 0, n - 1)

# Example usage
arr = [1, 2, 3, 4, 5]
print(left_rotate(arr, 2))       # Output: [3, 4, 5, 1, 2]
print(right_rotate(arr, 2))      # Output: [4, 5, 1, 2, 3]
left_rotate_in_place(arr, 2)     # Modifies arr to [3, 4, 5, 1, 2]`,
  exercises: [
    {
      prompt:
        'Write a function to perform a right rotation by 3 positions on an array of 6 elements.',
      initialCode: `# Write your solution here
arr = [10, 20, 30, 40, 50, 60]

def right_rotate(arr, d):
    `,
      solution: `def right_rotate(arr, d):
    n = len(arr)
    return arr[-(d % n):] + arr[:-(d % n)]

arr = right_rotate(arr, 3)  # Output: [40, 50, 60, 10, 20, 30]`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Using the reversal algorithm, write a function to perform an in-place left rotation by 2 positions on a given array.',
      initialCode: `# Write your solution here
arr = [7, 8, 9, 10, 11, 12]

def reverse(arr, start, end):
    # Helper function to reverse a portion of the array
    while start < end:
        arr[start], arr[end] = arr[end], arr[start]
        start += 1
        end -= 1

def left_rotate_in_place(arr, d):
    `,
      solution: `def left_rotate_in_place(arr, d):
    n = len(arr)
    d = d % n
    reverse(arr, 0, d - 1)
    reverse(arr, d, n - 1)
    reverse(arr, 0, n - 1)

left_rotate_in_place(arr, 2)  # Modifies arr to [9, 10, 11, 12, 7, 8]`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'What is the result of performing a left rotation by 1 position on the array [5, 6, 7, 8, 9]?',
      options: [
        '[9, 5, 6, 7, 8]',
        '[6, 7, 8, 9, 5]',
        '[8, 9, 5, 6, 7]',
        '[7, 8, 9, 5, 6]',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect; the last element should move to the start if rotated right.',
        'Correct. Left rotation by 1 shifts all elements to the left and places the first element at the end.',
        'This represents a rotation by more than 1 position.',
        'This represents a rotation by more than 1 position.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'If an array of 10 elements is rotated left by 12 positions, how many positions will it effectively rotate?',
      options: ['2', '10', '0', '12'],
      correctAnswer: 0,
      explanations: [
        'Correct. Since the array has 10 elements, a left rotation by 12 is equivalent to a left rotation by 2 (12 % 10).',
        'A full rotation by the array’s length results in the original array.',
        'A rotation by 10 returns the array to its original position, but rotating by 12 shifts it by 2.',
        'This answer is incorrect; rotations exceeding the array’s length wrap around by the remainder when divided by the array length.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const majorityElementData: LessonContent = {
  title: "Finding Majority Elements: Efficient Algorithms and Techniques",
  content: `Let's explore algorithms for finding majority elements in arrays, with a special focus on the elegant Boyer-Moore Voting Algorithm. A majority element is one that appears more than n/2 times in an array of size n - think of it like finding the winner in a democratic vote where one candidate must have secured more than 50% of the votes.

<h3>Understanding the Problem</h3>

Before diving into the algorithms, let's clarify what we're looking for:
- Given an array of elements, find the element that appears more than n/2 times
- For example, in [2,2,1,2,1,2,2], 2 is the majority element as it appears 5 times in an array of length 7
- The majority element always exists in our problem (though in real-world variations, we might need to handle cases where it doesn't)

<div class="visualization-container bg-white p-6 rounded-lg shadow-md my-8">
  <h4 class="text-center text-gray-700 mb-4">Majority Element Visualization</h4>
  <div class="flex flex-col space-y-4">
    <div class="flex justify-center space-x-1">
      <div class="w-12 h-12 border-2 border-blue-400 bg-blue-100 flex items-center justify-center">2</div>
      <div class="w-12 h-12 border-2 border-blue-400 bg-blue-100 flex items-center justify-center">2</div>
      <div class="w-12 h-12 border-2 border-red-400 flex items-center justify-center">1</div>
      <div class="w-12 h-12 border-2 border-blue-400 bg-blue-100 flex items-center justify-center">2</div>
      <div class="w-12 h-12 border-2 border-red-400 flex items-center justify-center">1</div>
      <div class="w-12 h-12 border-2 border-blue-400 bg-blue-100 flex items-center justify-center">2</div>
      <div class="w-12 h-12 border-2 border-blue-400 bg-blue-100 flex items-center justify-center">2</div>
    </div>
    <div class="text-center text-gray-600">Element 2 appears 5 times (highlighted in blue) - more than half of 7</div>
  </div>
</div>

<h3>The Boyer-Moore Voting Algorithm</h3>

While we could solve this using a hashmap to count occurrences (O(n) space) or sorting (O(n log n) time), the Boyer-Moore Voting Algorithm offers an elegant O(n) time and O(1) space solution. The key insight is brilliant: if we cancel out each different element with a majority element, the majority element will be the last one standing.

\`\`\`python
def boyer_moore_majority(nums):
    """
    Find majority element using Boyer-Moore Voting Algorithm.
    
    Args:
        nums: List of numbers where majority element exists
    Returns:
        The majority element
        
    Time Complexity: O(n)
    Space Complexity: O(1)
    """
    candidate = nums[0]  # Initial candidate
    count = 1           # Initialize count
    
    # Phase 1: Finding candidate
    for num in nums[1:]:
        if count == 0:
            # Previous pairs cancelled out - start fresh with current number
            candidate = num
            count = 1
        elif num == candidate:
            # Found another occurrence of current candidate
            count += 1
        else:
            # Found different number - cancel out one occurrence
            count -= 1
    
    # Phase 2: Verification (optional if majority element is guaranteed)
    count = sum(1 for num in nums if num == candidate)
    if count > len(nums) // 2:
        return candidate
    raise ValueError("No majority element exists")

# Example usage
nums = [2, 2, 1, 2, 1, 2, 2]
result = boyer_moore_majority(nums)
print(f"Majority Element: {result}")  # Output: 2
\`\`\`

<h3>Understanding How It Works</h3>

Let's break down the algorithm with a visualization:

\`\`\`python
def demonstrate_voting_process(nums):
    """Show how Boyer-Moore processes each element."""
    candidate = nums[0]
    count = 1
    
    print(f"Initial candidate: {candidate}, count: {count}")
    print("\\nVoting process:")
    
    for num in nums[1:]:
        # Store old values for visualization
        old_candidate = candidate
        old_count = count
        
        # Apply voting rules
        if count == 0:
            candidate = num
            count = 1
        elif num == candidate:
            count += 1
        else:
            count -= 1
            
        # Show the decision process
        print(f"\\nElement: {num}")
        print(f"Previous state: candidate = {old_candidate}, count = {old_count}")
        print(f"New state: candidate = {candidate}, count = {count}")
        
# Let's see it in action
test_array = [2, 2, 1, 2, 1, 2, 2]
demonstrate_voting_process(test_array)
\`\`\`

<h3>Variations and Extensions</h3>

1. Finding Elements That Appear More Than n/3 Times:
\`\`\`python
def find_elements_above_third(nums):
    """
    Find all elements that appear more than n/3 times.
    Note: There can be at most two such elements.
    
    Args:
        nums: List of numbers
    Returns:
        List of elements appearing more than n/3 times
        
    This uses a modified Boyer-Moore algorithm with two counters.
    """
    if not nums:
        return []
        
    # Initialize two candidates
    candidate1 = candidate2 = None
    count1 = count2 = 0
    
    # Phase 1: Find candidates
    for num in nums:
        if num == candidate1:
            count1 += 1
        elif num == candidate2:
            count2 += 1
        elif count1 == 0:
            candidate1 = num
            count1 = 1
        elif count2 == 0:
            candidate2 = num
            count2 = 1
        else:
            count1 -= 1
            count2 -= 1
    
    # Phase 2: Count actual frequencies
    threshold = len(nums) // 3
    count1 = sum(1 for num in nums if num == candidate1)
    count2 = sum(1 for num in nums if num == candidate2)
    
    result = []
    if count1 > threshold:
        result.append(candidate1)
    if count2 > threshold:
        result.append(candidate2)
    
    return result
\`\`\`

2. Finding Majority Element in Binary Array with Minimum Flips:
\`\`\`python
def minimum_flips_to_majority(nums):
    """
    Find minimum number of flips to make a binary array
    have a majority of 1s.
    
    Args:
        nums: List of 0s and 1s
    Returns:
        Minimum number of flips needed
        
    This combines majority element concepts with optimization.
    """
    n = len(nums)
    required_ones = (n // 2) + 1
    current_ones = sum(nums)
    
    if current_ones >= required_ones:
        return 0
    
    return required_ones - current_ones
\`\`\`

<h3>Common Pitfalls and Edge Cases</h3>

1. Empty Arrays:
\`\`\`python
def safe_majority_element(nums):
    """
    Safe implementation handling edge cases.
    """
    if not nums:
        raise ValueError("Array cannot be empty")
    if len(nums) == 1:
        return nums[0]
        
    return boyer_moore_majority(nums)
\`\`\`

2. Verifying Majority Element Exists:
\`\`\`python
def verify_majority_exists(nums):
    """
    Check if majority element exists before finding it.
    """
    if not nums:
        return False
        
    candidate = boyer_moore_majority(nums)
    count = sum(1 for num in nums if num == candidate)
    
    return count > len(nums) // 2
\`\`\``,

  exercises: [
    {
      prompt: 'Implement a function that finds the majority element in a sorted array in O(log n) time.',
      initialCode: `def majority_element_sorted(nums):
    """
    Find majority element in a sorted array.
    
    Args:
        nums: Sorted list of numbers
    Returns:
        The majority element
        
    Must run in O(log n) time
    """
    # Your implementation here
    pass`,
      solution: `def majority_element_sorted(nums):
    """
    Find majority element in a sorted array.
    
    Args:
        nums: Sorted list of numbers
    Returns:
        The majority element
        
    Time Complexity: O(log n)
    Space Complexity: O(1)
    """
    if not nums:
        raise ValueError("Array cannot be empty")
    
    n = len(nums)
    # In a sorted array, majority element will always be at middle index
    # This is because it appears more than n/2 times
    middle = n // 2
    
    # The element at middle index is our candidate
    candidate = nums[middle]
    
    # Optional: Verify it's actually majority (can be skipped if guaranteed)
    # Binary search for first and last occurrence
    left = binary_search_first(nums, candidate)
    right = binary_search_last(nums, candidate)
    
    if right - left + 1 > n // 2:
        return candidate
    raise ValueError("No majority element exists")

def binary_search_first(nums, target):
    """Find first occurrence of target in sorted array."""
    left, right = 0, len(nums) - 1
    while left < right:
        mid = (left + right) // 2
        if nums[mid] < target:
            left = mid + 1
        else:
            right = mid
    return left

def binary_search_last(nums, target):
    """Find last occurrence of target in sorted array."""
    left, right = 0, len(nums) - 1
    while left < right:
        mid = (left + right + 1) // 2
        if nums[mid] > target:
            right = mid - 1
        else:
            left = mid
    return left`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Implement a function that finds all elements appearing more than n/k times for any given k.',
      initialCode: `def find_elements_above_k_fraction(nums, k):
    """
    Find all elements appearing more than n/k times.
    
    Args:
        nums: List of numbers
        k: Integer threshold denominator
    Returns:
        List of elements appearing more than n/k times
    """
    # Your implementation here
    pass`,
      solution: `def find_elements_above_k_fraction(nums, k):
    """
    Find all elements appearing more than n/k times.
    
    Args:
        nums: List of numbers
        k: Integer threshold denominator
    Returns:
        List of elements appearing more than n/k times
        
    Time Complexity: O(nk)
    Space Complexity: O(k)
    """
    if not nums or k < 1:
        return []
    
    # Initialize k-1 counters for candidates
    candidates = {}  # element -> count
    
    # Phase 1: Find candidates using modified Boyer-Moore
    for num in nums:
        if num in candidates:
            candidates[num] += 1
        elif len(candidates) < k - 1:
            candidates[num] = 1
        else:
            # Decrement all counters
            remove_keys = []
            for cand in candidates:
                candidates[cand] -= 1
                if candidates[cand] == 0:
                    remove_keys.append(cand)
            for key in remove_keys:
                del candidates[key]
    
    # Phase 2: Count actual frequencies
    threshold = len(nums) // k
    result = []
    
    # Reset counters for verification
    for cand in candidates:
        count = sum(1 for num in nums if num == cand)
        if count > threshold:
            result.append(cand)
    
    return result

# Test the function
test_array = [1, 1, 1, 2, 2, 3, 4]
k = 3
result = find_elements_above_k_fraction(test_array, k)
print(f"Elements appearing more than n/{k} times: {result}")`,
      difficulty: Difficulty.Expert,
    }
  ],
  quizzes: [
    {
      question: "Why does Boyer-Moore's Voting Algorithm work for finding the majority element?",
      options: [
        'Because it sorts the array first',
        'Because it counts all elements in a hashmap',
        'Because majority element occurrences will always outnumber non-majority elements after pairing cancelation',
        'Because it uses binary search to find the element'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Boyer-Moore does not require sorting and works in O(n) time.',
        'Incorrect. The algorithm uses constant space and does not need a hashmap.',
        'Correct! Since the majority element appears more than n/2 times, it will always have more occurrences left after canceling out with non-majority elements.',
        'Incorrect. The algorithm uses a linear scan, not binary search.'
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the maximum number of elements that can appear more than n/3 times in an array?',
      options: [
        'One element',
        'Two elements',
        'Three elements',
        'No limit'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. While one element is possible, more elements can exist.',
        'Correct! At most two elements can appear more than n/3 times, as three such elements would require more than n total elements.',
        'Incorrect. Three elements appearing more than n/3 times would require more than n total elements.',
        'Incorrect. There is a mathematical limit based on the fraction n/3.'
      ],
      difficulty: Difficulty.Advanced,
    }
  ]
};

const matrixTraversalData: LessonContent = {
  title: "Matrix Traversal Patterns: Mastering 2D Array Navigation",
  content: `Understanding how to efficiently traverse matrices is a fundamental skill in programming. Whether you're processing image data, solving game puzzles, or analyzing grid-based problems, mastering different traversal patterns will help you tackle a wide range of algorithmic challenges.

<h3>Understanding Matrix Basics</h3>

A matrix in programming is typically represented as a 2D array, where elements are arranged in rows and columns. Before we dive into complex patterns, let's establish some fundamental concepts:

- Row-major indexing: matrix[row][column]
- Matrix dimensions: m × n (m rows, n columns)
- Valid indices: row ∈ [0, m-1], column ∈ [0, n-1]

<div class="visualization-container bg-white p-6 rounded-lg shadow-md my-8">
  <h4 class="text-center text-gray-700 mb-4">Basic Matrix Structure</h4>
  <div class="flex flex-col space-y-4">
    <div class="grid grid-cols-4 gap-1">
      <div class="w-16 h-16 border-2 border-gray-400 flex items-center justify-center bg-blue-50">[0,0]</div>
      <div class="w-16 h-16 border-2 border-gray-400 flex items-center justify-center bg-blue-50">[0,1]</div>
      <div class="w-16 h-16 border-2 border-gray-400 flex items-center justify-center bg-blue-50">[0,2]</div>
      <div class="w-16 h-16 border-2 border-gray-400 flex items-center justify-center bg-blue-50">[0,3]</div>
      <div class="w-16 h-16 border-2 border-gray-400 flex items-center justify-center bg-blue-50">[1,0]</div>
      <div class="w-16 h-16 border-2 border-gray-400 flex items-center justify-center bg-blue-50">[1,1]</div>
      <div class="w-16 h-16 border-2 border-gray-400 flex items-center justify-center bg-blue-50">[1,2]</div>
      <div class="w-16 h-16 border-2 border-gray-400 flex items-center justify-center bg-blue-50">[1,3]</div>
      <div class="w-16 h-16 border-2 border-gray-400 flex items-center justify-center bg-blue-50">[2,0]</div>
      <div class="w-16 h-16 border-2 border-gray-400 flex items-center justify-center bg-blue-50">[2,1]</div>
      <div class="w-16 h-16 border-2 border-gray-400 flex items-center justify-center bg-blue-50">[2,2]</div>
      <div class="w-16 h-16 border-2 border-gray-400 flex items-center justify-center bg-blue-50">[2,3]</div>
    </div>
    <div class="text-center text-gray-600">A 3×4 matrix with [row,column] coordinates</div>
  </div>
</div>

<h3>Core Traversal Patterns</h3>

Let's explore different ways to traverse a matrix, starting with the most common patterns:

1. Spiral Traversal:
\`\`\`python
def spiral_traverse(matrix):
    """
    Traverse matrix in spiral order (clockwise from outer elements to center).
    
    Args:
        matrix: 2D list of elements
    Returns:
        List of elements in spiral order
        
    Time Complexity: O(m*n)
    Space Complexity: O(1) excluding output array
    """
    if not matrix or not matrix[0]:
        return []
        
    result = []
    top, bottom = 0, len(matrix) - 1
    left, right = 0, len(matrix[0]) - 1
    
    while top <= bottom and left <= right:
        # Traverse right
        for j in range(left, right + 1):
            result.append(matrix[top][j])
        top += 1
        
        # Traverse down
        for i in range(top, bottom + 1):
            result.append(matrix[i][right])
        right -= 1
        
        if top <= bottom:
            # Traverse left
            for j in range(right, left - 1, -1):
                result.append(matrix[bottom][j])
            bottom -= 1
        
        if left <= right:
            # Traverse up
            for i in range(bottom, top - 1, -1):
                result.append(matrix[i][left])
            left += 1
    
    return result

# Example usage
matrix = [
    [1,  2,  3,  4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9,  8,  7]
]
result = spiral_traverse(matrix)
print(f"Spiral order: {result}")
\`\`\`

2. Diagonal Traversal:
\`\`\`python
def diagonal_traverse(matrix):
    """
    Traverse matrix diagonally from top-left to bottom-right.
    
    Args:
        matrix: 2D list of elements
    Returns:
        List of elements in diagonal order
        
    Time Complexity: O(m*n)
    Space Complexity: O(1) excluding output array
    """
    if not matrix or not matrix[0]:
        return []
        
    m, n = len(matrix), len(matrix[0])
    result = []
    going_up = True
    
    # Start position
    row = col = 0
    
    while len(result) < m * n:
        result.append(matrix[row][col])
        
        if going_up:
            if col == n-1:
                # Reached right boundary, go down
                row += 1
                going_up = False
            elif row == 0:
                # Reached top boundary, go right
                col += 1
                going_up = False
            else:
                # Continue going up diagonally
                row -= 1
                col += 1
        else:
            if row == m-1:
                # Reached bottom boundary, go right
                col += 1
                going_up = True
            elif col == 0:
                # Reached left boundary, go down
                row += 1
                going_up = True
            else:
                # Continue going down diagonally
                row += 1
                col -= 1
    
    return result
\`\`\`

3. ZigZag Traversal:
\`\`\`python
def zigzag_traverse(matrix):
    """
    Traverse matrix in zigzag order.
    
    Args:
        matrix: 2D list of elements
    Returns:
        List of elements in zigzag order
        
    Time Complexity: O(m*n)
    Space Complexity: O(1) excluding output array
    """
    if not matrix or not matrix[0]:
        return []
        
    m, n = len(matrix), len(matrix[0])
    result = []
    row = col = 0
    
    # Direction flags
    going_down = True
    
    while len(result) < m * n:
        result.append(matrix[row][col])
        
        if going_down:
            if row == m-1:
                # Reached bottom, move right and switch direction
                col += 1
                going_down = False
            elif col == 0:
                # Reached left boundary, move down
                row += 1
                going_down = False
            else:
                # Continue going down diagonally
                row += 1
                col -= 1
        else:
            if col == n-1:
                # Reached right boundary, move down
                row += 1
                going_down = True
            elif row == 0:
                # Reached top boundary, move right
                col += 1
                going_down = True
            else:
                # Continue going up diagonally
                row -= 1
                col += 1
    
    return result
\`\`\`

<h3>Advanced Patterns and Applications</h3>

1. Layer-by-Layer Processing:
\`\`\`python
def rotate_matrix(matrix):
    """
    Rotate matrix 90 degrees clockwise in-place.
    
    Args:
        matrix: Square 2D list of elements
    
    Time Complexity: O(n²)
    Space Complexity: O(1)
    """
    n = len(matrix)
    
    # Process each layer
    for layer in range(n // 2):
        first, last = layer, n - 1 - layer
        
        for i in range(first, last):
            offset = i - first
            
            # Save top
            top = matrix[first][i]
            
            # Move left to top
            matrix[first][i] = matrix[last-offset][first]
            
            # Move bottom to left
            matrix[last-offset][first] = matrix[last][last-offset]
            
            # Move right to bottom
            matrix[last][last-offset] = matrix[i][last]
            
            # Move top to right
            matrix[i][last] = top
\`\`\`

2. Boundary Traversal:
\`\`\`python
def boundary_traverse(matrix):
    """
    Traverse only the boundary elements of the matrix.
    
    Args:
        matrix: 2D list of elements
    Returns:
        List of boundary elements
        
    Time Complexity: O(m+n)
    Space Complexity: O(1) excluding output array
    """
    if not matrix or not matrix[0]:
        return []
        
    m, n = len(matrix), len(matrix[0])
    result = []
    
    # Handle single row or column
    if m == 1:
        return matrix[0]
    if n == 1:
        return [row[0] for row in matrix]
    
    # Top row
    result.extend(matrix[0])
    
    # Right column (except first and last elements)
    for i in range(1, m-1):
        result.append(matrix[i][-1])
    
    # Bottom row (in reverse)
    result.extend(matrix[-1][::-1])
    
    # Left column (except first and last elements)
    for i in range(m-2, 0, -1):
        result.append(matrix[i][0])
    
    return result
\`\`\`

<h3>Common Techniques and Tips</h3>

When working with matrix traversal problems, keep these techniques in mind:

1. Direction Arrays: Use arrays to define movement directions
\`\`\`python
# Common direction arrays for 4-directional movement
directions = [
    (-1, 0),  # up
    (0, 1),   # right
    (1, 0),   # down
    (0, -1)   # left
]

def is_valid(row, col, matrix):
    """Check if position is within matrix bounds."""
    return (0 <= row < len(matrix) and 
            0 <= col < len(matrix[0]))

def explore_from_point(matrix, start_row, start_col):
    """Explore matrix from a starting point."""
    m, n = len(matrix), len(matrix[0])
    visited = set()
    result = []
    
    def dfs(row, col):
        if not is_valid(row, col) or (row, col) in visited:
            return
            
        visited.add((row, col))
        result.append(matrix[row][col])
        
        # Try all four directions
        for dx, dy in directions:
            dfs(row + dx, col + dy)
    
    dfs(start_row, start_col)
    return result
\`\`\`

2. Visited Matrix: Track visited positions when needed
\`\`\`python
def flood_fill(matrix, sr, sc, new_color):
    """
    Fill connected region with new color.
    
    Args:
        matrix: 2D list of colors
        sr, sc: Starting row and column
        new_color: Color to fill with
    """
    old_color = matrix[sr][sc]
    if old_color == new_color:
        return matrix
    
    def fill(row, col):
        if (not is_valid(row, col) or 
            matrix[row][col] != old_color):
            return
        
        matrix[row][col] = new_color
        
        for dx, dy in directions:
            fill(row + dx, col + dy)
    
    fill(sr, sc)
    return matrix
\`\`\``,

  exercises: [
    {
      prompt: 'Implement a function that returns all elements of a matrix in alternating diagonal order.',
      initialCode: `def alternating_diagonal_traverse(matrix):
    """
    Traverse matrix diagonally, alternating direction for each diagonal.
    
    Args:
        matrix: 2D list of elements
    Returns:
        List of elements in alternating diagonal order
    """
    # Your implementation here
    pass`,
      solution: `def alternating_diagonal_traverse(matrix):
    """
    Traverse matrix diagonally, alternating direction for each diagonal.
    
    Args:
        matrix: 2D list of elements
    Returns:
        List of elements in alternating diagonal order
        
    Time Complexity: O(m*n)
    Space Complexity: O(min(m,n)) for diagonal storage
    """
    if not matrix or not matrix[0]:
        return []
        
    m, n = len(matrix), len(matrix[0])
    result = []
    
    # Process all diagonals starting from first row
    for d in range(m + n - 1):
        temp = []
        
        # Find row and column for current diagonal
        row = 0 if d < n else d - n + 1
        col = d if d < n else n - 1
        
        # Collect elements in current diagonal
        while row < m and col >= 0:
            temp.append(matrix[row][col])
            row += 1
            col -= 1
        
        # Add elements in alternate order
        if d % 2 == 0:
            result.extend(temp)
        else:
            result.extend(temp[::-1])
    
    return result

# Test the function
test_matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
result = alternating_diagonal_traverse(test_matrix)
print(f"Alternating diagonal order: {result}")`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Implement a function that traverses a matrix in a spiral pattern but only visits elements that satisfy a given condition.',
      initialCode: `def conditional_spiral_traverse(matrix, condition):
    """
    Traverse matrix in spiral order, including only elements that satisfy condition.
    
    Args:
        matrix: 2D list of elements
        condition: Function that takes element and returns boolean
    Returns:
        List of elements in spiral order that satisfy condition
        
    Time Complexity: O(m*n)
    Space Complexity: O(1) excluding output array
    """
    if not matrix or not matrix[0]:
        return []
        
    result = []
    top, bottom = 0, len(matrix) - 1
    left, right = 0, len(matrix[0]) - 1
    
    while top <= bottom and left <= right:
        # Traverse right, checking condition
        for j in range(left, right + 1):
            if condition(matrix[top][j]):
                result.append(matrix[top][j])
        top += 1
        
        # Traverse down, checking condition
        for i in range(top, bottom + 1):
            if condition(matrix[i][right]):
                result.append(matrix[i][right])
        right -= 1
        
        if top <= bottom:
            # Traverse left, checking condition
            for j in range(right, left - 1, -1):
                if condition(matrix[bottom][j]):
                    result.append(matrix[bottom][j])
            bottom -= 1
        
        if left <= right:
            # Traverse up, checking condition
            for i in range(bottom, top - 1, -1):
                if condition(matrix[i][left]):
                    result.append(matrix[i][left])
            left += 1
    
    return result

# Test the function
test_matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]
# Example condition: only include even numbers
result = conditional_spiral_traverse(test_matrix, lambda x: x % 2 == 0)
print(f"Spiral order of even numbers: {result}")`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: "What is the key consideration when implementing a spiral matrix traversal?",
      options: [
        'Keeping track of visited elements using a separate matrix',
        'Maintaining and updating boundary variables (top, bottom, left, right)',
        'Using recursive calls to process each layer',
        'Converting the matrix to a 1D array first'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Spiral traversal can be implemented without tracking visited elements.',
        'Correct! Managing boundary variables is crucial for spiral traversal as they help maintain the current perimeter being processed and ensure we don\'t revisit elements.',
        'Incorrect. While recursion can be used, it\'s not necessary and may complicate the implementation.',
        'Incorrect. Converting to 1D would make the traversal more difficult to implement.'
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'When implementing diagonal traversal, what is the most important pattern to recognize?',
      options: [
        'Elements in the same diagonal have indices that sum to the same value',
        'Each diagonal requires a different traversal direction',
        'Diagonal elements are always equidistant',
        'Diagonals always contain the same number of elements'
      ],
      correctAnswer: 0,
      explanations: [
        'Correct! For any element in a diagonal, row + column equals a constant value. This property is key to identifying diagonal elements.',
        'Incorrect. While direction changes are important, they\'re not the fundamental pattern.',
        'Incorrect. Elements in a diagonal are not necessarily equidistant in memory.',
        'Incorrect. Different diagonals can have different lengths, especially in rectangular matrices.'
      ],
      difficulty: Difficulty.Advanced,
    }
  ]
};

const matrixTransformationData: LessonContent = {
  title: "Matrix Transformations: Understanding and Implementing Common Operations",
  content: `Let's explore the fascinating world of matrix transformations, where we'll learn how to manipulate 2D arrays in ways that are crucial for everything from image processing to computer graphics. We'll start with simple operations and build up to more complex transformations.

<h3>Understanding the Fundamentals</h3>

Before we dive into specific transformations, it's important to understand what happens when we transform a matrix. A transformation takes every element in our original matrix and maps it to a new position or value according to specific rules. Think of it like choreographing a dance where each dancer (element) moves to a new position on the stage (matrix) in perfect coordination.

<div class="visualization-container bg-white p-6 rounded-lg shadow-md my-8">
  <h4 class="text-center text-gray-700 mb-4">Basic Matrix Structure and Coordinates</h4>
  <div class="flex flex-col space-y-4">
    <div class="grid grid-cols-3 gap-1">
      <div class="w-16 h-16 border-2 border-blue-400 flex items-center justify-center">1</div>
      <div class="w-16 h-16 border-2 border-blue-400 flex items-center justify-center">2</div>
      <div class="w-16 h-16 border-2 border-blue-400 flex items-center justify-center">3</div>
      <div class="w-16 h-16 border-2 border-blue-400 flex items-center justify-center">4</div>
      <div class="w-16 h-16 border-2 border-blue-400 flex items-center justify-center">5</div>
      <div class="w-16 h-16 border-2 border-blue-400 flex items-center justify-center">6</div>
      <div class="w-16 h-16 border-2 border-blue-400 flex items-center justify-center">7</div>
      <div class="w-16 h-16 border-2 border-blue-400 flex items-center justify-center">8</div>
      <div class="w-16 h-16 border-2 border-blue-400 flex items-center justify-center">9</div>
    </div>
    <div class="text-center text-gray-600">Original 3×3 Matrix</div>
  </div>
</div>

<h3>1. Matrix Transposition</h3>

Let's start with transposition, one of the most fundamental matrix transformations. When we transpose a matrix, we flip it over its main diagonal (top-left to bottom-right). This operation helps us understand how elements move in a structured way.

\`\`\`python
def transpose_matrix(matrix):
    """
    Transpose a matrix by flipping it over its main diagonal.
    
    Args:
        matrix: 2D list representing the input matrix
    Returns:
        New matrix with rows and columns swapped
        
    Time Complexity: O(m * n) where m and n are the dimensions
    Space Complexity: O(m * n) for the new matrix
    """
    if not matrix or not matrix[0]:
        return []
        
    rows, cols = len(matrix), len(matrix[0])
    # Create a new matrix with swapped dimensions
    result = [[0 for _ in range(rows)] for _ in range(cols)]
    
    # The key insight: element at [i][j] moves to [j][i]
    for i in range(rows):
        for j in range(cols):
            result[j][i] = matrix[i][j]
            
    return result

# Let's see how elements move during transposition
def visualize_transposition(matrix):
    """Helper function to show the movement of elements."""
    print("Original Matrix:")
    for row in matrix:
        print(row)
    
    transposed = transpose_matrix(matrix)
    print("\nTransposed Matrix:")
    for row in transposed:
        print(row)

# Example usage
test_matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
visualize_transposition(test_matrix)
\`\`\`

<h3>2. Matrix Rotation</h3>

Rotation is a more complex transformation that can be approached in several ways. Let's implement both 90-degree clockwise and counter-clockwise rotations, understanding how elements move in each case.

\`\`\`python
def rotate_matrix_90_clockwise(matrix):
    """
    Rotate a matrix 90 degrees clockwise in-place.
    
    Args:
        matrix: Square 2D list (modified in-place)
    
    Time Complexity: O(n²) where n is the matrix dimension
    Space Complexity: O(1) as we modify in-place
    
    The transformation follows these steps:
    1. Transpose the matrix (flip over main diagonal)
    2. Reverse each row
    """
    n = len(matrix)
    
    # Step 1: Transpose
    for i in range(n):
        for j in range(i, n):
            # Swap elements across diagonal
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    
    # Step 2: Reverse each row
    for i in range(n):
        left, right = 0, n - 1
        while left < right:
            matrix[i][left], matrix[i][right] = matrix[i][right], matrix[i][left]
            left += 1
            right -= 1
    
    return matrix

def rotate_matrix_90_counterclockwise(matrix):
    """
    Rotate a matrix 90 degrees counter-clockwise in-place.
    
    Args:
        matrix: Square 2D list (modified in-place)
    
    Time Complexity: O(n²)
    Space Complexity: O(1)
    
    The transformation follows these steps:
    1. Transpose the matrix
    2. Reverse each column
    """
    n = len(matrix)
    
    # Step 1: Transpose
    for i in range(n):
        for j in range(i, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    
    # Step 2: Reverse each column
    for j in range(n):
        top, bottom = 0, n - 1
        while top < bottom:
            matrix[top][j], matrix[bottom][j] = matrix[bottom][j], matrix[top][j]
            top += 1
            bottom -= 1
    
    return matrix
\`\`\`

<h3>3. Matrix Reflection</h3>

Reflection involves flipping the matrix either horizontally or vertically, creating a mirror image of the original matrix.

\`\`\`python
def reflect_horizontal(matrix):
    """
    Reflect matrix horizontally (flip over horizontal middle line).
    
    Args:
        matrix: 2D list to be reflected
    Returns:
        Matrix reflected horizontally
        
    Time Complexity: O(m * n)
    Space Complexity: O(1) as we modify in-place
    """
    rows = len(matrix)
    top, bottom = 0, rows - 1
    
    while top < bottom:
        # Swap entire rows
        matrix[top], matrix[bottom] = matrix[bottom], matrix[top]
        top += 1
        bottom -= 1
    
    return matrix

def reflect_vertical(matrix):
    """
    Reflect matrix vertically (flip over vertical middle line).
    
    Args:
        matrix: 2D list to be reflected
    Returns:
        Matrix reflected vertically
        
    Time Complexity: O(m * n)
    Space Complexity: O(1) as we modify in-place
    """
    for row in matrix:
        left, right = 0, len(row) - 1
        while left < right:
            # Swap elements within each row
            row[left], row[right] = row[right], row[left]
            left += 1
            right -= 1
    
    return matrix
\`\`\`

<h3>4. Advanced Transformations</h3>

Now let's look at some more complex transformations that combine basic operations or apply specific patterns.

\`\`\`python
def rotate_layer(matrix, layer):
    """
    Rotate a specific layer of the matrix clockwise.
    
    Args:
        matrix: 2D list to be modified
        layer: Layer number from outside (0) to inside
        
    Time Complexity: O(n) where n is the matrix dimension
    Space Complexity: O(1)
    """
    n = len(matrix)
    first, last = layer, n - 1 - layer
    
    for i in range(first, last):
        offset = i - first
        top = matrix[first][i]
        
        # Move left to top
        matrix[first][i] = matrix[last-offset][first]
        
        # Move bottom to left
        matrix[last-offset][first] = matrix[last][last-offset]
        
        # Move right to bottom
        matrix[last][last-offset] = matrix[i][last]
        
        # Move top to right
        matrix[i][last] = top

def scale_matrix(matrix, factor):
    """
    Scale all elements in the matrix by a given factor.
    
    Args:
        matrix: 2D list to be scaled
        factor: Number to multiply each element by
        
    Time Complexity: O(m * n)
    Space Complexity: O(1)
    """
    rows, cols = len(matrix), len(matrix[0])
    
    for i in range(rows):
        for j in range(cols):
            matrix[i][j] *= factor
    
    return matrix

def apply_kernel(matrix, kernel):
    """
    Apply a convolution kernel to the matrix (used in image processing).
    
    Args:
        matrix: 2D list representing the input matrix
        kernel: 2D list representing the convolution kernel
        
    Time Complexity: O((m * n) * (k * k)) where k is kernel size
    Space Complexity: O(m * n) for the result matrix
    """
    rows, cols = len(matrix), len(matrix[0])
    k_rows, k_cols = len(kernel), len(kernel[0])
    
    # Calculate padding needed
    pad_r = k_rows // 2
    pad_c = k_cols // 2
    
    # Create result matrix
    result = [[0 for _ in range(cols)] for _ in range(rows)]
    
    # Apply convolution
    for i in range(rows):
        for j in range(cols):
            sum_val = 0
            for ki in range(-pad_r, pad_r + 1):
                for kj in range(-pad_c, pad_c + 1):
                    if 0 <= i + ki < rows and 0 <= j + kj < cols:
                        sum_val += matrix[i + ki][j + kj] * kernel[ki + pad_r][kj + pad_c]
            result[i][j] = sum_val
    
    return result
\`\`\`

<h3>Understanding Matrix Transformations Through Examples</h3>

Let's explore how these transformations affect a simple matrix:

\`\`\`python
def demonstrate_transformations():
    """Show the effects of different transformations on a sample matrix."""
    matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
    
    print("Original Matrix:")
    for row in matrix:
        print(row)
    
    # Make a copy for each transformation
    rotated = [row[:] for row in matrix]
    reflected_h = [row[:] for row in matrix]
    reflected_v = [row[:] for row in matrix]
    
    print("\nAfter 90° Clockwise Rotation:")
    rotate_matrix_90_clockwise(rotated)
    for row in rotated:
        print(row)
        
    print("\nAfter Horizontal Reflection:")
    reflect_horizontal(reflected_h)
    for row in reflected_h:
        print(row)
        
    print("\nAfter Vertical Reflection:")
    reflect_vertical(reflected_v)
    for row in reflected_v:
        print(row)

# Run the demonstration
demonstrate_transformations()
\`\`\``,

  exercises: [
    {
      prompt: 'Implement a function that rotates a matrix by any multiple of 90 degrees.',
      initialCode: `def rotate_matrix_by_degrees(matrix, degrees):
    """
    Rotate a matrix by specified degrees (must be multiple of 90).
    
    Args:
        matrix: Square 2D list
        degrees: Rotation angle in degrees (must be multiple of 90)
    Returns:
        Rotated matrix
    """
    # Your implementation here
    pass`,
      solution: `def rotate_matrix_by_degrees(matrix, degrees):
    """
    Rotate a matrix by specified degrees (must be multiple of 90).
    
    Args:
        matrix: Square 2D list
        degrees: Rotation angle in degrees (must be multiple of 90)
    Returns:
        Rotated matrix
        
    Time Complexity: O(n² * k) where k is number of 90° rotations
    Space Complexity: O(1) as we modify in-place
    """
    if not matrix or degrees % 90 != 0:
        raise ValueError("Invalid input: degrees must be multiple of 90")
    
    # Normalize degrees to 0-360 range
    degrees = degrees % 360
    
    # Calculate number of 90° rotations needed
    rotations = (degrees // 90) % 4
    
    # Apply rotations
    for _ in range(rotations):
        rotate_matrix_90_clockwise(matrix)
    
    return matrix

# Test the function
test_matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
degrees = 270
result = rotate_matrix_by_degrees([row[:] for row in test_matrix], degrees)
print(f"Matrix rotated by {degrees} degrees:")
for row in result:
    print(row)`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Implement a function that performs a diagonal flip followed by a rotation.',
      initialCode: `def diagonal_flip_and_rotate(matrix, clockwise=True):
    """
    Flip matrix over its main diagonal and then rotate.
    
    Args:
        matrix: Square 2D list
        clockwise: If True, rotate clockwise; otherwise counter-clockwise
    Returns:
        Transformed matrix
    """
    # Your implementation here
    pass`,
      solution: `def diagonal_flip_and_rotate(matrix, clockwise=True):
    """
    Flip matrix over its main diagonal and then rotate.
    
    Args:
        matrix: Square 2D list
        clockwise: If True, rotate clockwise; otherwise counter-clockwise
    Returns:
        Transformed matrix
        
    Time Complexity: O(n²)
    Space Complexity: O(1)
    """
    if not matrix or len(matrix) != len(matrix[0]):
        raise ValueError("Matrix must be square")
    
    n = len(matrix)
    
    # Step 1: Flip over main diagonal (transpose)
    for i in range(n):
        for j in range(i, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    
    # Step 2: Rotate in specified direction
if clockwise:
        # For clockwise: reverse rows
        for i in range(n):
            left, right = 0, n - 1
            while left < right:
                matrix[i][left], matrix[i][right] = matrix[i][right], matrix[i][left]
                left += 1
                right -= 1
    else:
        # For counter-clockwise: reverse columns
        for j in range(n):
            top, bottom = 0, n - 1
            while top < bottom:
                matrix[top][j], matrix[bottom][j] = matrix[bottom][j], matrix[top][j]
                top += 1
                bottom -= 1
    
    return matrix

# Test the function
test_matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
print("Original Matrix:")
for row in test_matrix:
    print(row)

result = diagonal_flip_and_rotate([row[:] for row in test_matrix], clockwise=True)
print("\nAfter diagonal flip and clockwise rotation:")
for row in result:
    print(row)`,
      difficulty: Difficulty.Expert,
    }
  ],
  quizzes: [
    {
      question: "When performing an in-place matrix rotation, why do we need to handle elements in layers?",
      options: [
        'To reduce memory usage by avoiding temporary variables',
        'Because outer elements would overwrite inner elements if processed linearly',
        'To maintain the symmetry of the matrix during rotation',
        'To improve the algorithm\'s time complexity'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. While in-place rotation does save memory, this isn\'t why we use layers.',
        'Correct! Processing elements in layers prevents overwriting data we still need. Each element in a layer must move to its new position in a coordinated way, like a choreographed dance.',
        'Incorrect. While symmetry is maintained, this isn\'t the primary reason for layer-by-layer processing.',
        'Incorrect. The time complexity remains O(n²) regardless of whether we process in layers.'
      ],
      difficulty: Difficulty.Advanced,
    },
    {
      question: 'What is the relationship between matrix transposition and rotation?',
      options: [
        'Transposition and rotation are completely independent operations',
        'A 90-degree rotation can be achieved by transposing and then reflecting',
        'Transposition is equivalent to a 45-degree rotation',
        'Multiple transpositions can achieve any degree of rotation'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. These operations are actually closely related and can be combined to achieve various transformations.',
        'Correct! A 90-degree clockwise rotation can be decomposed into a transposition followed by reversing rows. This relationship helps us understand how elements move during rotation.',
        'Incorrect. Transposition flips elements across the main diagonal, which is not equivalent to any degree of rotation.',
        'Incorrect. Some rotations cannot be achieved through any combination of transpositions.'
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the mathematical significance of matrix transformations being reversible?',
      options: [
        'It means the transformation has no effect on the matrix',
        'It guarantees the transformation will be efficient',
        'It indicates the transformation preserves the matrix\'s information',
        'It means the transformation only works on square matrices'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Reversible transformations do change the matrix, but in a way that can be undone.',
        'Incorrect. The efficiency of a transformation is independent of its reversibility.',
        'Correct! When a transformation is reversible, it means no information is lost during the process. This is crucial for many applications where we need to recover the original matrix.',
        'Incorrect. Reversibility is not limited to square matrices, though some transformations may require specific matrix dimensions.'
      ],
      difficulty: Difficulty.Advanced,
    }
  ]
};

const arrayLessons: Record<string, LessonContent> = {
  'array-concepts': arrayConceptsData,
  'array-complexity': arrayComplexityData,
  'array-initialization': arrayInitializationData,
  'array-traversal': arrayTraversalData,
  'array-memory': arrayMemoryData,
  'array-insert-delete': arrayInsertionDeletionData,
  'array-searching': arraySearchingData,
  'array-slicing': arraySlicingData,
  'array-modification': arrayModificationData,
  'basic-sorting': basicSortingData,
  'builtin-sorting': builtInSortingData,
  'custom-sorting': customSortingData,
  'two-pointer-basics': twoPointerBasicsData,
  'two-pointer-variations': twoPointerVariationsData,
  'array-partitioning': arrayPartitioningData,
  'dutch-flag': dutchFlagData,
  'sliding-window-concept': slidingWindowConceptData,
  'window-variations': windowVariationsData,
  'prefix-sum-basics': prefixSumBasicsData,
  'range-queries': rangeQueriesData,
  'kadane-algorithm': kadaneAlgorithmData,
  'stock-patterns': stockPatternsData,
  'subarray-problems': subarrayProblemsData,
  'array-rotation': arrayRotationData,
  'majority-element': majorityElementData,
  'matrix-traversal': matrixTraversalData,
  'matrix-transformation': matrixTransformationData,
};

export const arrayLessonsTab: LessonsTab = {
  curriculum: arrayCurriculum,
  lessons: arrayLessons,
};
