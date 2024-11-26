import { Difficulty } from '@/common/commonConcept';
import { Curriculum, LessonContent, LessonsTab, PriorityLevel } from '@/common/commonLesson';

const arrayCurriculum: Curriculum = {
  title: 'Array Curriculum',
  description:
    'A comprehensive guide to mastering array operations and algorithms for coding interviews',
  sections: [
    {
      id: 1,
      title: 'Array Fundamentals',
      topics: [
        {
          id: 'array-concepts',
          title: 'Array Concepts and Implementation',
          description: 'Understanding static vs dynamic arrays and their implementations',
          priority: PriorityLevel.Essential
        },
        {
          id: 'array-complexity',
          title: 'Time and Space Complexity',
          description: 'Understanding complexity of basic array operations',
          priority: PriorityLevel.Essential
        },
        {
          id: 'array-initialization',
          title: 'Defining and Initializing Arrays',
          description: 'Different ways to create and initialize arrays in Python',
          priority: PriorityLevel.Essential
        },
        {
          id: 'array-access-modification',
          title: 'Accessing and Modifying Array Elements',
          description: 'Understanding array indexing and element modification',
          priority: PriorityLevel.Essential
        },
        {
          id: 'array-iteration',
          title: 'Iterating Through Arrays',
          description: 'Different methods to traverse array elements',
          priority: PriorityLevel.Essential
        },
      ],
    },
    {
      id: 2,
      title: 'Array Operations',
      topics: [
        {
          id: 'array-insert-delete',
          title: 'Insertion and Deletion',
          description: 'Adding and removing elements from arrays',
          priority: PriorityLevel.Essential
        },
        {
          id: 'array-searching',
          title: 'Searching',
          description: 'Techniques for finding elements in arrays',
          priority: PriorityLevel.Essential
        },
        {
          id: 'array-slicing',
          title: 'Array Slicing',
          description: 'Working with array segments',
          priority: PriorityLevel.Important
        },
        {
          id: 'array-concatenation',
          title: 'Concatenation and Merging Arrays',
          description: 'Combining multiple arrays',
          priority: PriorityLevel.Important
        },
        {
          id: 'array-transformations',
          title: 'Array Transformations',
          description: 'Functional operations like map, filter, reduce',
          priority: PriorityLevel.Important
        },
      ],
    },
    {
      id: 3,
      title: 'Array Sorting',
      topics: [
        {
          id: 'basic-sorting',
          title: 'Basic Sorting Algorithms',
          description: 'Understanding fundamental sorting techniques',
          priority: PriorityLevel.Essential
        },
        {
          id: 'sorting-analysis',
          title: 'Sorting Performance Analysis',
          description: 'Comparing different sorting algorithms and their use cases',
          priority: PriorityLevel.Important
        },
        {
          id: 'builtin-sorting',
          title: 'Built-in Sorting Functions',
          description: "Using Python's built-in sorting capabilities",
          priority: PriorityLevel.Essential
        },
        {
          id: 'custom-sorting',
          title: 'Sorting by Custom Conditions',
          description: 'Implementing custom sorting logic',
          priority: PriorityLevel.Important
        },
        {
          id: 'partial-sorting',
          title: 'Partially Sorted Arrays',
          description: 'Working with and optimizing partially sorted arrays',
          priority: PriorityLevel.Optional
        },
      ],
    },
    {
      id: 4,
      title: 'Two-pointer Technique',
      topics: [
        {
          id: 'two-pointer-concept',
          title: 'Concept of Two-pointers',
          description: 'Understanding the two-pointer approach',
          priority: PriorityLevel.Essential
        },
        {
          id: 'two-pointer-problems',
          title: 'Common Two-pointer Problems',
          description: 'Solving problems using two-pointer technique',
          priority: PriorityLevel.Essential
        },
        {
          id: 'dutch-national-flag',
          title: 'Dutch National Flag Problem',
          description: 'Understanding and implementing the three-way partitioning',
          priority: PriorityLevel.Beneficial
        },
      ],
    },
    {
      id: 5,
      title: 'Sliding Window',
      topics: [
        {
          id: 'sliding-window-concept',
          title: 'Sliding Window Concept',
          description: 'Understanding the sliding window technique',
          priority: PriorityLevel.Essential
        },
        {
          id: 'sliding-window-types',
          title: 'Fixed and Dynamic Sliding Windows',
          description: 'Different types of sliding window approaches',
          priority: PriorityLevel.Important
        },
        {
          id: 'sliding-window-optimization',
          title: 'Optimizing Sliding Window Solutions',
          description: 'Advanced techniques and optimizations for sliding window problems',
          priority: PriorityLevel.Beneficial
        },
      ],
    },
    {
      id: 6,
      title: 'Prefix Sum and Difference Arrays',
      topics: [
        {
          id: 'prefix-sum-concept',
          title: 'Prefix Sum',
          description: 'Understanding and implementing prefix sums',
          priority: PriorityLevel.Essential
        },
        {
          id: 'difference-array',
          title: 'Difference Array',
          description: 'Working with difference arrays',
          priority: PriorityLevel.Beneficial
        },
        {
          id: 'range-queries',
          title: 'Range Queries',
          description: 'Efficient range-based operations using prefix sums',
          priority: PriorityLevel.Important
        },
      ],
    },
    {
      id: 7,
      title: 'Matrix Operations',
      topics: [
        {
          id: 'matrix-basics',
          title: 'Understanding Matrices',
          description: 'Basics of working with 2D arrays',
          priority: PriorityLevel.Essential
        },
        {
          id: 'matrix-operations',
          title: 'Row-wise and Column-wise Operations',
          description: 'Performing operations on matrix rows and columns',
          priority: PriorityLevel.Important
        },
        {
          id: 'matrix-traversal',
          title: 'Matrix Traversal Patterns',
          description: 'Different ways to traverse matrices (spiral, diagonal)',
          priority: PriorityLevel.Important
        },
        {
          id: 'matrix-search',
          title: 'Matrix Search Algorithms',
          description: 'Efficient searching in sorted matrices',
          priority: PriorityLevel.Important
        },
      ],
    },
    {
      id: 8,
      title: 'Common Array Patterns',
      topics: [
        {
          id: 'kadane-algorithm',
          title: "Kadane's Algorithm",
          description: 'Understanding and implementing maximum subarray solutions',
          priority: PriorityLevel.Essential
        },
        {
          id: 'boyer-moore',
          title: 'Boyer-Moore Majority Vote',
          description: 'Finding majority elements in arrays',
          priority: PriorityLevel.Beneficial
        },
        {
          id: 'stock-patterns',
          title: 'Stock Buy/Sell Patterns',
          description: 'Solving stock price array problems',
          priority: PriorityLevel.Essential
        },
        {
          id: 'subarray-problems',
          title: 'Subarray Problems',
          description: 'Common patterns in subarray-based problems',
          priority: PriorityLevel.Important
        },
      ],
    },
    {
      id: 9,
      title: 'Advanced Array Manipulations',
      topics: [
        {
          id: 'array-rotation',
          title: 'Array Rotation',
          description: 'Techniques for rotating array elements',
          priority: PriorityLevel.Beneficial
        },
        {
          id: 'merging-intervals',
          title: 'Merging Intervals',
          description: 'Working with interval arrays',
          priority: PriorityLevel.Important
        },
        {
          id: 'array-rearrangement',
          title: 'Complex Array Rearrangements',
          description: 'Advanced techniques for array reorganization',
          priority: PriorityLevel.Optional
        },
      ],
    },
    {
      id: 10,
      title: 'In-place Operations',
      topics: [
        {
          id: 'in-place-modifications',
          title: 'In-place Modifications',
          description: 'Modifying arrays without extra space',
          priority: PriorityLevel.Important
        },
        {
          id: 'element-rearrangement',
          title: 'Swapping and Rearranging Elements',
          description: 'Techniques for rearranging array elements',
          priority: PriorityLevel.Beneficial
        },
        {
          id: 'space-optimization',
          title: 'Space Optimization Techniques',
          description: 'Methods to optimize space complexity in array operations',
          priority: PriorityLevel.Important
        },
      ],
    },
    {
      id: 11,
      title: 'Multidimensional Arrays',
      topics: [
        {
          id: 'multi-array-operations',
          title: 'Working with Multidimensional Arrays',
          description: 'Operations on multi-dimensional arrays',
          priority: PriorityLevel.Beneficial
        },
        {
          id: 'multi-array-patterns',
          title: 'Common Multidimensional Patterns',
          description: 'Solving problems involving multiple dimensions',
          priority: PriorityLevel.Optional
        },
      ],
    },
  ],
} as const;

const arrayConceptsData: LessonContent = {
  title: 'Array Concepts and Implementation',
  content: `<p>
Arrays are fundamental data structures that store collections of elements in <strong>contiguous memory locations</strong>. Think of an array like a row of lockers, where each locker:
</p>
<li>Has a unique number (index)</li>
<li>Can store one item</li>
<li>Can be accessed directly using its number</li>

<p>There are two main types of arrays: <strong>static arrays</strong> and <strong>dynamic arrays</strong>.</p>

<h3><u>Types of Arrays</u></h3>

<h4><b>Static Arrays</b></h4>
<li>Fixed size (cannot grow or shrink)</li>
<li>Memory efficient</li>
<li>Best when size is known upfront</li>

<h4><b>Dynamic Arrays</b></h4>
<li>Flexible size (can grow or shrink)</li>
<li>Automatically resizes when needed</li>
<li>Slight memory overhead</li>
<li>Example: Python lists, Java ArrayList</li>

<h3><u>Operation Complexities</u></h3>
<table>
<tr><th>Operation</th><th>Static Array</th><th>Dynamic Array</th></tr>
<tr><td>Access</td><td>O(1)</td><td>O(1)</td></tr>
<tr><td>Insert at end</td><td>O(1)*</td><td>O(1) amortized</td></tr>
<tr><td>Insert at middle/start</td><td>O(n)</td><td>O(n)</td></tr>
<tr><td>Delete from end</td><td>O(1)</td><td>O(1)</td></tr>
<tr><td>Delete from middle/start</td><td>O(n)</td><td>O(n)</td></tr>
<tr><td>Search (unsorted)</td><td>O(n)</td><td>O(n)</td></tr>
<tr><td>Resize</td><td>Not possible</td><td>O(n)</td></tr>
</table>
<p><small>*Only if space is available</small></p>`,
  codeExample: `# Static Array (Fixed Size)
static_array = [None] * 5  # Creates an array of size 5
print(f"Static array size: {len(static_array)}")  # Always 5
static_array[0] = 10  # Direct index assignment
print(f"Static array: {static_array}")  # [10, None, None, None, None]

# Dynamic Array (Python List)
dynamic_array = []  # Empty dynamic array
print(f"Initial size: {len(dynamic_array)}")  # 0

# Adding elements
dynamic_array.append(1)  # [1]
dynamic_array.append(2)  # [1, 2]
print(f"Size after appends: {len(dynamic_array)}")  # 2
print(f"Current array: {dynamic_array}")  # [1, 2]

# Extending array
dynamic_array.extend([3, 4, 5])  # [1, 2, 3, 4, 5]
print(f"After extending: {dynamic_array}")  # [1, 2, 3, 4, 5]
print(f"Final size: {len(dynamic_array)}")  # 5

# Direct index access (both types)
print(f"First element: {dynamic_array[0]}")  # 1
print(f"Last element: {dynamic_array[-1]}")  # 5

# Slicing (Python feature)
print(f"First three elements: {dynamic_array[:3]}")  # [1, 2, 3]`,
  exercises: [
    {
      prompt: 'Create a static array of size 5 initialized with zeros and a dynamic array containing the numbers 1 through 5.',
      initialCode: `# Write your solution here
static_array = 
dynamic_array = `,
      solution: `static_array = [0] * 5
dynamic_array = []
for i in range(1, 6):
    dynamic_array.append(i)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Create two arrays: a static array of size 3 with string values ["red", "green", "blue"] and a dynamic array. Then add "yellow" and "purple" to the dynamic array.',
      initialCode: `# Write your solution here
static_array = 
dynamic_array = `,
      solution: `static_array = ["red", "green", "blue"]
dynamic_array = []
dynamic_array.extend(["yellow", "purple"])`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Create a static array of size 4 with initial values [10, 20, 30, 40]. Create a dynamic array and use extend() to add these elements in reverse order.',
      initialCode: `# Write your solution here
static_array = 
dynamic_array = `,
      solution: `static_array = [10, 20, 30, 40]
dynamic_array = []
dynamic_array.extend(static_array[::-1])`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the key difference between static and dynamic arrays?',
      options: [
        'Static arrays are faster than dynamic arrays',
        'Static arrays have a fixed size while dynamic arrays can grow',
        'Dynamic arrays use less memory than static arrays',
        'Static arrays can only store numbers',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Speed depends on the operation being performed.',
        'Correct! Static arrays have a fixed size that cannot be changed after creation, while dynamic arrays can grow or shrink.',
        'Incorrect. Dynamic arrays typically use more memory due to over-allocation.',
        'Incorrect. Static arrays can store any type of data.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What happens when you try to add an element to a full static array?',
      options: [
        'The array automatically expands',
        'The new element replaces the last element',
        'An error occurs',
        'The element is ignored',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Static arrays cannot automatically expand.',
        'Incorrect. Adding to a full static array causes an error.',
        'Correct! Static arrays cannot grow, so adding to a full array results in an error.',
        'Incorrect. The operation fails with an error.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'Which operation has O(1) time complexity for both static and dynamic arrays?',
      options: [
        'Inserting at the beginning',
        'Accessing an element by index',
        'Searching for an element',
        'Inserting in the middle',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Inserting at the beginning is O(n) for both.',
        'Correct! Both array types provide constant-time access by index.',
        'Incorrect. Searching is O(n) for unsorted arrays.',
        'Incorrect. Inserting in the middle is O(n) for both.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const arrayComplexityData: LessonContent = {
  title: 'Time and Space Complexity',
  content: `<p>
Understanding the time and space complexity of array operations is crucial for writing efficient code. 
Here are some common array operations and their corresponding complexities:
</p>

<ul>
<li><strong>Accessing an element:</strong> O(1) time complexity. This is because arrays store elements in contiguous memory locations, allowing direct access using the index.</li>
<li><strong>Inserting an element at the end:</strong> O(1) time complexity on average. For dynamic arrays, this operation may occasionally require resizing, which takes O(n) time, but on average, it is O(1).</li>
<li><strong>Inserting an element at the beginning or middle:</strong> O(n) time complexity. This requires shifting all subsequent elements, which takes linear time.</li>
<li><strong>Deleting an element:</strong> O(n) time complexity. Similar to insertion, deleting an element requires shifting subsequent elements.</li>
<li><strong>Searching for an element:</strong> O(n) time complexity in the worst case. This requires iterating through the array to find the element.</li>
</ul>

<p>
Knowing these complexities helps in choosing the right data structure and algorithm for your specific needs, ensuring optimal performance.
</p>`,
  codeExample: `# Accessing an element
array = [1, 2, 3, 4, 5]
element = array[2]  # Accessing the third element (O(1) time complexity)

# Inserting an element at the end
array.append(6)  # O(1) time complexity on average

# Inserting an element at the beginning
array.insert(0, 0)  # O(n) time complexity

# Deleting an element
array.pop(2)  # Deleting the third element (O(n) time complexity)

# Searching for an element
index = array.index(4)  # Searching for the element 4 (O(n) time complexity in the worst case)`,
  exercises: [
    {
      prompt:
        'Given an array of 10 elements, access the 5th element and insert a new element at the end of the array.',
      initialCode: `# Write your solution here
array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
element = 
array.append(`,
      solution: `array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
element = array[4]
array.append(10)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Given an array of 5 elements, insert a new element at the beginning of the array and delete the last element.',
      initialCode: `# Write your solution here
array = [1, 2, 3, 4, 5]
array.insert(0, 
array.pop(`,
      solution: `array = [1, 2, 3, 4, 5]
array.insert(0, 0)
array.pop()`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Given an array of 7 elements, insert a new element at the 3rd position and delete the 5th element.',
      initialCode: `# Write your solution here
array = [1, 2, 3, 4, 5, 6, 7]
array.insert(2, 
array.pop(`,
      solution: `array = [1, 2, 3, 4, 5, 6, 7]
array.insert(2, 10)
array.pop(4)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'What is the time complexity of accessing an element in an array?',
      options: [
        'O(1)',
        'O(n)',
        'O(log n)',
        'O(n^2)',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. Accessing an element in an array is O(1) time complexity.',
        'This is incorrect. Accessing an element in an array is not O(n) time complexity.',
        'This is incorrect. Accessing an element in an array is not O(log n) time complexity.',
        'This is incorrect. Accessing an element in an array is not O(n^2) time complexity.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'What is the time complexity of inserting an element at the beginning of an array?',
      options: [
        'O(1)',
        'O(n)',
        'O(log n)',
        'O(n^2)',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. Inserting an element at the beginning of an array is not O(1) time complexity.',
        'This is correct. Inserting an element at the beginning of an array is O(n) time complexity.',
        'This is incorrect. Inserting an element at the beginning of an array is not O(log n) time complexity.',
        'This is incorrect. Inserting an element at the beginning of an array is not O(n^2) time complexity.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'What is the time complexity of deleting an element from an array?',
      options: [
        'O(1)',
        'O(n)',
        'O(log n)',
        'O(n^2)',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. Deleting an element from an array is not O(1) time complexity.',
        'This is correct. Deleting an element from an array is O(n) time complexity.',
        'This is incorrect. Deleting an element from an array is not O(log n) time complexity.',
        'This is incorrect. Deleting an element from an array is not O(n^2) time complexity.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const arrayInitializationData: LessonContent = {
  title: 'Defining and Initializing Arrays',
  content: `<p>
Arrays are fundamental data structures that store collections of elements in contiguous memory locations. 
In Python, arrays are typically implemented using <strong>lists</strong>, which can hold elements of different types and dynamically resize. 
There are several ways to initialize arrays, depending on your needs:
</p>

<ul>
<li><strong>Empty array initialization:</strong> Used when you plan to populate the array later.</li>
<li><strong>Array initialization with values:</strong> Useful when you know the elements beforehand.</li>
<li><strong>Array initialization with repeated elements:</strong> Handy for creating arrays filled with default values.</li>
<li><strong>List comprehension:</strong> A powerful tool for generating arrays based on logic or transformations.</li>
<li><strong>Array initialization from other sequences:</strong> Convert tuples, ranges, or other iterable sequences to arrays.</li>
</ul>`,
  codeExample: `# Empty array
empty_array = []  # O(1) time & space

# Array with initial values
# O(n) time & space, where n is the number of elements
numbers = [1, 2, 3, 4, 5]
mixed_types = [1, "hello", 3.14, True]

# Array with repeated elements
# O(n) time & space, where n is the size of the array
zeros = [0] * 5  # Creates [0, 0, 0, 0, 0]

# List comprehension - useful for generating arrays dynamically
# O(n) time & space, where n is the range size
squares = [x**2 for x in range(5)]  # Creates [0, 1, 4, 9, 16]

# Converting other sequences into arrays
# O(n) time & space for both operations, where n is the sequence length
from_tuple = list((1, 2, 3))
from_range = list(range(5))  # Creates [0, 1, 2, 3, 4]

# Further Examples:

# Using list comprehension with conditions
# O(n) time, where n is the range size
# O(k) space, where k is the number of elements that satisfy the condition
even_numbers = [x for x in range(10) if x % 2 == 0]  # Creates [0, 2, 4, 6, 8]`,
  exercises: [
    {
      prompt:
        'Create an array of 10 elements, each initialized to the value None. Use list comprehension to create an array of the first 5 cube numbers.',
      initialCode: `# Write your solution here
none_array = 
cube_numbers = `,
      solution: `none_array = [None] * 10
cube_numbers = [x**3 for x in range(1, 6)]`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create an array of 5 elements, each initialized to the value 0. Use list comprehension to create an array of the first 5 even numbers.',
      initialCode: `# Write your solution here
zeros_array = 
even_numbers = `,
      solution: `zeros_array = [0] * 5
even_numbers = [x for x in range(10) if x % 2 == 0]`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create an array of 3 elements, each initialized to the value "hello". Use list comprehension to create an array of the first 3 square numbers.',
      initialCode: `# Write your solution here
hello_array = 
square_numbers = `,
      solution: `hello_array = ["hello"] * 3
square_numbers = [x**2 for x in range(1, 4)]`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to create a list of three repeated True values in Python?',
      options: [
        'list(True, True, True)',
        '[True] * 3',
        'list.repeat(True, 3)',
        'list(repeat(True, 3))',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect because the list() function expects an iterable, not individual elements.',
        'This is correct. It creates a list with three True values.',
        'This is incorrect because there is no repeat method in the list class.',
        'This is incorrect because the repeat function is not a built-in Python function.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following is the correct way to create a list of five repeated 0 values in Python?',
      options: [
        'list(0, 0, 0, 0, 0)',
        '[0] * 5',
        'list.repeat(0, 5)',
        'list(repeat(0, 5))',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect because the list() function expects an iterable, not individual elements.',
        'This is correct. It creates a list with five 0 values.',
        'This is incorrect because there is no repeat method in the list class.',
        'This is incorrect because the repeat function is not a built-in Python function.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following is the correct way to create a list of the first 5 even numbers using list comprehension?',
      options: [
        '[x for x in range(10) if x % 2 == 0]',
        '[x for x in range(5) if x % 2 == 0]',
        '[x for x in range(10) if x % 2 != 0]',
        '[x for x in range(5) if x % 2 != 0]',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. It creates a list of the first 5 even numbers.',
        'This is incorrect because it only checks the first 5 numbers.',
        'This is incorrect because it creates a list of odd numbers.',
        'This is incorrect because it only checks the first 5 numbers and creates a list of odd numbers.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};
const arrayAccessModificationData: LessonContent = {
  title: 'Accessing and Modifying Array Elements',
  content: `<p>
Array elements in Python can be accessed and modified using index-based operations. Python uses zero-based indexing, meaning the first element is at index 0. 
Elements can be accessed using positive indices (from the beginning) or negative indices (from the end). 
You can also modify elements directly by assigning new values to specific indices.
</p>

<ul>
<li><strong>Single element access:</strong> Access individual elements using index notation [i].</li>
<li><strong>Slicing:</strong> Access a range of elements using slice notation [start:end:step].</li>
<li><strong>Negative indexing:</strong> Access elements from the end of the array using negative indices.</li>
<li><strong>Element modification:</strong> Change values using direct assignment to indices.</li>
<li><strong>Multiple element modification:</strong> Modify multiple elements using slicing and assignment.</li>
</ul>`,
  codeExample: `# Single element access
numbers = [10, 20, 30, 40, 50]
first = numbers[0]      # O(1) time - returns 10
last = numbers[-1]      # O(1) time - returns 50

# Slicing operations
# O(k) time & space, where k is the size of the slice
first_three = numbers[0:3]    # Returns [10, 20, 30]
last_three = numbers[-3:]     # Returns [30, 40, 50]
every_second = numbers[::2]   # Returns [10, 30, 50]

# Modifying elements
numbers[0] = 15         # O(1) time - changes first element
numbers[-1] = 55        # O(1) time - changes last element

# Multiple element modification
# O(k) time & space, where k is the size of the slice
numbers[1:4] = [25, 35, 45]   # Modifies multiple elements
numbers[::2] = [12, 32, 52]   # Modifies every second element

# Further Examples:

# Using negative indices
middle = numbers[-3:-1]    # O(k) time & space for slice

# Reversing an array
reversed_array = numbers[::-1]    # O(n) time & space

# Extended slice with step
even_indices = numbers[::2]    # O(k) time & space`,
  exercises: [
    {
      prompt:
        'Given the array numbers = [1, 2, 3, 4, 5], write code to access the middle element and replace the last two elements with 8 and 9.',
      initialCode: `numbers = [1, 2, 3, 4, 5]
# Write your solution here
middle_element = 
numbers`,
      solution: `middle_element = numbers[2]
numbers[-2:] = [8, 9]`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a new array containing every second element from the array numbers = [1, 2, 3, 4, 5, 6], then modify all even-indexed elements to be 0.',
      initialCode: `numbers = [1, 2, 3, 4, 5, 6]
# Write your solution here
every_second = 
numbers`,
      solution: `every_second = numbers[::2]
numbers[::2] = [0] * len(numbers[::2])`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Given the array numbers = [5, 10, 15, 20, 25], write code to reverse it without using the reverse method, then replace the middle element with 100.',
      initialCode: `numbers = [5, 10, 15, 20, 25]
# Write your solution here
reversed_numbers = 
numbers`,
      solution: `reversed_numbers = numbers[::-1]
numbers[len(numbers)//2] = 100`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'What is the correct way to access the last element of a Python list?',
      options: ['list[length-1]', 'list[-1]', 'list.last()', 'list.end'],
      correctAnswer: 1,
      explanations: [
        "While this would work if you know the length, it's not the most Pythonic way.",
        'This is correct. In Python, -1 index accesses the last element.',
        "Python lists don't have a last() method.",
        "Python lists don't have an end property.",
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which slice notation would you use to get every second element from a list?',
      options: ['list[0:2]', 'list[::2]', 'list[2:]', 'list[0::1]'],
      correctAnswer: 1,
      explanations: [
        'This would only get the first two elements.',
        'This is correct. The step value of 2 gets every second element.',
        'This would get all elements starting from index 2.',
        'This would get all elements (step of 1 is the default).',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'How would you modify all elements in a list from index 1 to 4 (exclusive) with new values [10, 20, 30]?',
      options: [
        'list[1-4] = [10, 20, 30]',
        'list[1:4] = [10, 20, 30]',
        'list.replace(1, 4, [10, 20, 30])',
        'list.modify(1:4, [10, 20, 30])',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect syntax in Python.',
        'This is correct. It replaces elements at indices 1, 2, and 3 with the new values.',
        "Python lists don't have a replace method.",
        "Python lists don't have a modify method.",
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};
const arrayIteration: LessonContent = {
  title: 'Iterating Through Arrays',
  content: `<p>
 Array iteration is a fundamental operation that allows you to process each element in an array sequentially.
 Python provides several methods for iterating through arrays, each with its own advantages and use cases.
 Understanding these different iteration techniques is crucial for efficient array processing.
 </p>
 
 <ul>
 <li><strong>For loop iteration:</strong> The most common and readable way to iterate through arrays.</li>
 <li><strong>Enumerate:</strong> Useful when you need both the index and value during iteration.</li>
 <li><strong>While loop with index:</strong> Provides more control over the iteration process.</li>
 <li><strong>List comprehension:</strong> Concise way to iterate and create new arrays.</li>
 <li><strong>Iterator objects:</strong> Memory-efficient iteration for large datasets.</li>
 </ul>`,
  codeExample: `# Basic for loop iteration
 numbers = [1, 2, 3, 4, 5]
 # O(n) time, O(1) space
 for num in numbers:
    print(num)
 
 # Enumerate for index and value
 # O(n) time, O(1) space
 for index, value in enumerate(numbers):
    print(f"Index {index}: {value}")
 
 # While loop with index
 # O(n) time, O(1) space
 i = 0
 while i < len(numbers):
    print(numbers[i])
    i += 1
 
 # List comprehension iteration
 # O(n) time, O(n) space for new list
 squared = [x**2 for x in numbers]
 
 # Iterator objects
 # O(1) space - creates iterator
 iterator = iter(numbers)
 # O(1) time per next() call
 try:
    while True:
        item = next(iterator)
        print(item)
 except StopIteration:
    pass
 
 # Further Examples:
 
 # Reverse iteration
 # O(n) time, O(1) space
 for num in reversed(numbers):
    print(num)
 
 # Step iteration
 # O(n/step) time, O(1) space
 for num in numbers[::2]:  # Every second element
    print(num)
 
 # Parallel iteration using zip
 # O(min(len(list1), len(list2))) time, O(1) space
 list1 = [1, 2, 3]
 list2 = ['a', 'b', 'c']
 for num, letter in zip(list1, list2):
    print(num, letter)`,
  exercises: [
    {
      prompt:
        "Write code to iterate through the array [1, 2, 3, 4, 5] and print each number along with whether it's even or odd.",
      initialCode: `numbers = [1, 2, 3, 4, 5]
 # Write your solution here`,
      solution: `numbers = [1, 2, 3, 4, 5]
 for num in numbers:
    status = "even" if num % 2 == 0 else "odd"
    print(f"{num} is {status}")`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Given two arrays of equal length, iterate through them in parallel and create a new array containing the larger value at each position.',
      initialCode: `arr1 = [1, 4, 3, 2, 5]
 arr2 = [2, 3, 5, 1, 4]
 # Write your solution here
 larger_values = `,
      solution: `arr1 = [1, 4, 3, 2, 5]
 arr2 = [2, 3, 5, 1, 4]
 larger_values = [max(a, b) for a, b in zip(arr1, arr2)]`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Write code to iterate through an array of numbers and create two new arrays: one containing all numbers less than 5 and another containing all numbers greater than or equal to 5.',
      initialCode: `numbers = [2, 8, 1, 5, 4, 7, 3, 6]
 # Write your solution here
 less_than_five = 
 five_or_greater = `,
      solution: `numbers = [2, 8, 1, 5, 4, 7, 3, 6]
 less_than_five = [x for x in numbers if x < 5]
 five_or_greater = [x for x in numbers if x >= 5]`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which Python function allows you to iterate through an array while keeping track of both the index and value?',
      options: ['index()', 'enumerate()', 'range()', 'zip()'],
      correctAnswer: 1,
      explanations: [
        'index() is used to find the position of an element in a list.',
        'This is correct. enumerate() provides both index and value during iteration.',
        'range() generates a sequence of numbers, typically used with standard for loops.',
        'zip() is used to iterate over multiple sequences in parallel.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'What is the most memory-efficient way to iterate through a very large array?',
      options: [
        'Using a for loop with range()',
        'Using list comprehension',
        'Using an iterator object',
        'Using enumerate()',
      ],
      correctAnswer: 2,
      explanations: [
        'While functional, this creates unnecessary index variables.',
        'List comprehension creates a new list, consuming additional memory.',
        'This is correct. Iterators process one element at a time without storing the entire sequence.',
        'enumerate() creates tuples for each element, using additional memory.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which method would you use to iterate through two arrays of the same length simultaneously?',
      options: ['enumerate()', 'map()', 'zip()', 'range()'],
      correctAnswer: 2,
      explanations: [
        'enumerate() is for iterating through a single sequence with indices.',
        "map() applies a function to each element but doesn't handle parallel iteration.",
        'This is correct. zip() allows parallel iteration through multiple sequences.',
        "range() generates a sequence of numbers but doesn't handle parallel iteration.",
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};
const arrayInsertionDeletionData: LessonContent = {
  title: 'Insertion and Deletion in Arrays',
  content: `<p>
Insertion and deletion are common operations on arrays, enabling modifications to the array's structure. 
In Python, these operations are handled using methods available in lists.
Insertion and deletion affect the array's size, and their efficiency depends on the position in the array where they occur.
</p>

<ul>
<li><strong>Insertion at the end:</strong> Fastest method using <i>append()</i>, as it operates in constant time, O(1).</li>
<li><strong>Insertion at a specific position:</strong> Requires shifting elements, making it O(n) for worst-case scenarios.</li>
<li><strong>Deletion from the end:</strong> Fastest deletion method, similar to insertion, with a time complexity of O(1).</li>
<li><strong>Deletion from a specific position:</strong> Involves shifting elements, thus having a time complexity of O(n) for the worst case.</li>
<li><strong>Using slicing:</strong> Both insertion and deletion can be managed with slicing, although it can be more memory-intensive.</li>
</ul>`,
  codeExample: `# Inserting elements

# Insertion at the end (O(1) time complexity)
array = [1, 2, 3]
array.append(4)  # Result: [1, 2, 3, 4]

# Insertion at a specific index (O(n) time complexity)
array.insert(1, 5)  # Result: [1, 5, 2, 3, 4]

# Deleting elements

# Deletion from the end (O(1) time complexity)
array.pop()  # Result: [1, 5, 2, 3]

# Deletion from a specific index (O(n) time complexity)
array.pop(1)  # Result: [1, 2, 3]

# Using slicing for insertion and deletion
# Inserting using slicing (O(n) time complexity)
array[1:1] = [6, 7]  # Result: [1, 6, 7, 2, 3]

# Deleting using slicing (O(n) time complexity)
del array[1:3]  # Result: [1, 2, 3]`,
  exercises: [
    {
      prompt:
        'Insert the number 100 at the beginning of the array. Then delete the last element.',
      initialCode: `# Write your solution here
array = [1, 2, 3, 4, 5]
`,
      solution: `array.insert(0, 100)
array.pop()`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Insert the value 50 at index 2 of the array. Then remove the element at index 3.',
      initialCode: `# Write your solution here
array = [10, 20, 30, 40, 50]
`,
      solution: `array.insert(2, 50)
array.pop(3)`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Add the number 99 to the end of the array and then delete the element at index 0.',
      initialCode: `# Write your solution here
array = [1, 3, 5, 7, 9]
`,
      solution: `array.append(99)
array.pop(0)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which method should you use to insert an element at the end of an array in Python?',
      options: ['insert()', 'append()', 'pop()', 'remove()'],
      correctAnswer: 1,
      explanations: [
        'This is incorrect because insert() is used to add an element at a specific position.',
        'This is correct. append() is used to add an element to the end of an array.',
        'This is incorrect because pop() is used to remove an element from the array.',
        'This is incorrect because remove() is used to delete a specific element by value.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'What is the time complexity of deleting an element from the beginning of an array?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'],
      correctAnswer: 2,
      explanations: [
        'This is incorrect because O(1) is the time complexity for deletion at the end of the array.',
        'This is incorrect as logarithmic time complexity does not apply to simple array deletion.',
        'This is correct. Deleting from the beginning requires shifting elements, making it O(n).',
        'This is incorrect as O(n^2) is not applicable here.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of the following is the correct way to remove an element at index 2 in Python?',
      options: [
        'array.delete(2)',
        'array.remove(2)',
        'del array[2]',
        'array.pop(3)',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect because delete is not a valid method in Python lists.',
        'This is incorrect because remove() is used to delete by value, not index.',
        'This is correct. Using del array[2] deletes the element at index 2.',
        'This is incorrect because array.pop(3) would remove the element at index 3.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const arraySearchingData: LessonContent = {
  title: 'Searching in Arrays',
  content: `<p>
Searching is a fundamental operation to locate specific elements in an array. Python provides various methods to search through lists effectively.
The efficiency of search operations often depends on the array's properties, such as whether it’s sorted.
</p>

<ul>
<li><strong>Linear search:</strong> Works on unsorted arrays by checking each element sequentially. Time complexity is O(n).</li>
<li><strong>Binary search:</strong> Efficient for sorted arrays by dividing the search space in half with each step. Time complexity is O(log n).</li>
<li><strong>Using the <i>in</i> keyword:</strong> A simple way to check if an element exists in a list, typically implemented with linear search.</li>
<li><strong>Finding indices:</strong> <i>index()</i> and list comprehension can locate elements based on their positions in the list.</li>
</ul>`,
  codeExample: `# Linear Search
array = [10, 20, 30, 40, 50]
target = 30
for i in range(len(array)):
    if array[i] == target:
        print("Found at index", i)  # Result: Found at index 2
        break

# Binary Search (requires sorted array)
# O(log n) time complexity
import bisect
sorted_array = [10, 20, 30, 40, 50]
target = 30
index = bisect.bisect_left(sorted_array, target)
if index < len(sorted_array) and sorted_array[index] == target:
    print("Found at index", index)  # Result: Found at index 2

# Using 'in' for existence check
# O(n) for unsorted, O(log n) for sorted if binary search is used internally
exists = target in array  # Result: True

# Finding index of first occurrence
# O(n) time complexity
array.index(30)  # Result: 2
`,
  exercises: [
    {
      prompt:
        'Use a linear search to find the index of the number 15 in the array. Print "Not found" if it doesn’t exist.',
      initialCode: `# Write your solution here
array = [5, 10, 15, 20, 25]
`,
      solution: `found = False
for i in range(len(array)):
    if array[i] == 15:
        print("Found at index", i)
        found = True
        break
if not found:
    print("Not found")`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Implement a binary search to find the index of the target number 7 in the sorted array. Return -1 if it’s not found.',
      initialCode: `# Write your solution here
sorted_array = [1, 3, 5, 7, 9]
target = 7
`,
      solution: `import bisect
index = bisect.bisect_left(sorted_array, target)
if index < len(sorted_array) and sorted_array[index] == target:
    print("Found at index", index)
else:
    print(-1)`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Check if the number 100 exists in the array using the <i>in</i> keyword. Print "Exists" if it’s found, otherwise "Does not exist".',
      initialCode: `# Write your solution here
array = [10, 20, 30, 40, 50]
`,
      solution: `if 100 in array:
    print("Exists")
else:
    print("Does not exist")`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'What is the time complexity of a linear search in an unsorted array?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
      correctAnswer: 2,
      explanations: [
        'This is incorrect because O(1) time complexity would imply constant time.',
        'This is incorrect as logarithmic complexity applies to binary search, not linear search.',
        'This is correct. Linear search checks each element in the array sequentially.',
        'This is incorrect because O(n log n) is generally associated with sorting algorithms.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following algorithms is more efficient for searching a sorted array?',
      options: [
        'Linear search',
        'Binary search',
        'Interpolation search',
        'Jump search',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. Linear search is less efficient for sorted arrays compared to binary search.',
        'This is correct. Binary search efficiently divides the search space in half with each step.',
        'This is correct in some cases, but binary search is more generally applicable.',
        'Jump search can be efficient but is less commonly used than binary search for sorted arrays.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which method would you use to find if an element exists in an array without knowing its exact position?',
      options: [
        'binary_search()',
        'array.in()',
        'array.index()',
        'bisect_left()',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect because binary_search() is not a built-in Python method.',
        'This is correct. The "in" keyword checks for the existence of an element.',
        'This is incorrect. array.index() requires knowing the exact value and returns its position.',
        'This is incorrect because bisect_left() finds the insertion point in sorted arrays, not just existence.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const arraySlicingData: LessonContent = {
  title: 'Array Slicing',
  content: `<p>
Array slicing is a powerful feature in Python that allows you to access parts of an array or list by specifying a range of indices. 
Slicing provides flexibility in working with subarrays without modifying the original array. 
Python syntax for slicing is <i>array[start:stop:step]</i>, where:
</p>

<ul>
<li><strong>start:</strong> The beginning index of the slice (inclusive). If omitted, defaults to 0.</li>
<li><strong>stop:</strong> The ending index of the slice (exclusive). If omitted, includes the rest of the array.</li>
<li><strong>step:</strong> Specifies the interval for the slice (defaults to 1). Negative steps can be used for reversing the array.</li>
</ul>`,
  codeExample: `# Basic Slicing
array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# Get the first five elements
# O(5) time and space
first_five = array[:5]  # [0, 1, 2, 3, 4]

# Slice with a step
# O(n/step) time and space, where n is the range size
evens = array[::2]  # [0, 2, 4, 6, 8]

# Reverse an array
# O(n) time and space
reversed_array = array[::-1]  # [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

# Middle section
# O(m) time and space, where m is the slice size
middle = array[3:7]  # [3, 4, 5, 6]
`,
  exercises: [
    {
      prompt:
        'Create a slice that contains the first 3 elements of the array. Then, create a slice that contains every second element in the array.',
      initialCode: `# Write your solution here
array = [10, 20, 30, 40, 50, 60, 70]
first_three = 
every_second = `,
      solution: `first_three = array[:3]
every_second = array[::2]`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Use slicing to reverse the array and then get a slice with the last 4 elements of the reversed array.',
      initialCode: `# Write your solution here
array = [5, 10, 15, 20, 25, 30, 35]
reversed_array = 
last_four_reversed = `,
      solution: `reversed_array = array[::-1]
last_four_reversed = reversed_array[:4]`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Create a slice of the array that includes elements from index 2 to 6, using a step of 2.',
      initialCode: `# Write your solution here
array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
sliced_array = `,
      solution: `sliced_array = array[2:7:2]  # [3, 5, 7]`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'What is the result of the slice array[2:5] for the array [0, 1, 2, 3, 4, 5, 6]?',
      options: ['[1, 2, 3]', '[2, 3, 4, 5]', '[2, 3, 4]', '[2, 3]'],
      correctAnswer: 2,
      explanations: [
        'This is incorrect because it starts from index 1, not index 2.',
        'This is incorrect because it includes the index 5, but slicing excludes the stop index.',
        'This is correct. Slicing from index 2 to 5 includes indices 2, 3, and 4.',
        'This is incorrect because it excludes index 4.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'How would you use slicing to select every second element in an array, starting from the first element?',
      options: ['array[1::2]', 'array[::2]', 'array[2::2]', 'array[1:2]'],
      correctAnswer: 1,
      explanations: [
        'This is incorrect because it starts from index 1, not the first element.',
        'This is correct. The step of 2 selects every second element, starting from the beginning.',
        'This is incorrect because it starts from the third element, not the first.',
        'This is incorrect as it only selects a single element, not every second element.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What does array[::-1] do to an array?',
      options: [
        'Selects every second element from the start',
        'Selects every second element in reverse',
        'Reverses the array',
        'Creates an array with every other element',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect because it reverses all elements, not just every second one.',
        'This is incorrect because it does not select every second element.',
        'This is correct. The step of -1 reverses the entire array.',
        'This is incorrect because the slice reverses all elements.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const arrayConcatenationData: LessonContent = {
  title: 'Concatenation and Merging Arrays',
  content: `<p>
Concatenation and merging arrays allow you to combine multiple arrays into one, either by joining them end-to-end or by interleaving elements.
Python provides multiple ways to concatenate arrays, each with different use cases and performance considerations.
</p>

<ul>
<li><strong>Using + operator:</strong> The simplest way to concatenate two lists, but it creates a new list, which may be less efficient for large arrays.</li>
<li><strong>Using list.extend():</strong> Extends an array in place with the elements of another array, modifying the original list.</li>
<li><strong>Using itertools.chain():</strong> Useful for handling large arrays as it creates an iterator, combining multiple arrays without duplicating them in memory.</li>
<li><strong>List comprehension:</strong> Combines arrays with more control over elements, useful for interleaving or filtering elements during merging.</li>
</ul>`,
  codeExample: `# Concatenation with +
# O(m + n) time & space, where m and n are the sizes of both arrays
array1 = [1, 2, 3]
array2 = [4, 5, 6]
concatenated = array1 + array2  # [1, 2, 3, 4, 5, 6]

# Concatenation with extend() - modifies the original array in place
# O(n) time, where n is the size of the added array
array1.extend(array2)  # array1 becomes [1, 2, 3, 4, 5, 6]

# Using itertools.chain for lazy concatenation
# O(m + n) time, with memory efficiency due to lazy evaluation
from itertools import chain
lazy_concat = list(chain(array1, array2))  # [1, 2, 3, 4, 5, 6]

# Interleaving arrays using list comprehension
# O(n + m) time, where m and n are the sizes of the arrays
array1 = [1, 3, 5]
array2 = [2, 4, 6]
interleaved = [val for pair in zip(array1, array2) for val in pair]  # [1, 2, 3, 4, 5, 6]`,
  exercises: [
    {
      prompt:
        'Concatenate two lists [1, 2, 3] and [4, 5, 6] using the + operator. Then, use the extend() method to add [7, 8] to the concatenated list.',
      initialCode: `# Write your solution here
list1 = [1, 2, 3]
list2 = [4, 5, 6]
combined = 
combined.extend`,
      solution: `combined = list1 + list2
combined.extend([7, 8])`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Use itertools.chain to concatenate three lists: [10, 20], [30, 40], and [50, 60], without creating a new list. Convert the result to a list.',
      initialCode: `# Write your solution here
from itertools import chain
list1 = [10, 20]
list2 = [30, 40]
list3 = [50, 60]
chained_result = `,
      solution: `chained_result = list(chain(list1, list2, list3))`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Merge two lists [1, 3, 5] and [2, 4, 6] in an interleaved fashion (like [1, 2, 3, 4, 5, 6]) using list comprehension.',
      initialCode: `# Write your solution here
list1 = [1, 3, 5]
list2 = [2, 4, 6]
interleaved = `,
      solution: `interleaved = [val for pair in zip(list1, list2) for val in pair]`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'What is the result of concatenating [1, 2, 3] and [4, 5, 6] using the + operator?',
      options: [
        '[1, 2, 3, 4, 5, 6]',
        '[4, 5, 6, 1, 2, 3]',
        '[1, 2, 3, [4, 5, 6]]',
        '[1, 4, 2, 5, 3, 6]',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The + operator concatenates lists in the specified order.',
        'This is incorrect because the + operator concatenates in the order the lists are provided.',
        'This is incorrect because concatenation does not nest lists.',
        'This is incorrect because it implies interleaving, not concatenation.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following methods modifies the original list when merging two lists?',
      options: [
        '+',
        'list.extend()',
        'itertools.chain()',
        'list comprehension',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect because + creates a new list.',
        'This is correct. The extend() method appends elements to the original list.',
        'This is incorrect because itertools.chain does not modify lists.',
        'This is incorrect because list comprehension creates a new list.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which function would you use to concatenate multiple arrays lazily, minimizing memory usage?',
      options: ['+', 'list.extend()', 'itertools.chain()', 'sum()'],
      correctAnswer: 2,
      explanations: [
        'This is incorrect because the + operator creates a new list.',
        'This is incorrect because extend() modifies a list in place, but is not lazy.',
        'This is correct. itertools.chain creates an iterator for efficient memory use.',
        'This is incorrect because sum() is not used for concatenation.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const arrayTransformationsData: LessonContent = {
  title: 'Array Transformations',
  content: `<p>
Array transformations are essential operations in functional programming that allow you to manipulate arrays in various ways. 
The most common functional operations are <strong>map</strong>, <strong>filter</strong>, and <strong>reduce</strong>.
</p>

<ul>
<li><strong>Map:</strong> Applies a function to each element in the array and returns a new array with the results.</li>
<li><strong>Filter:</strong> Creates a new array with all elements that pass the test implemented by the provided function.</li>
<li><strong>Reduce:</strong> Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.</li>
</ul>

<p>
These operations are not only powerful but also make your code more concise and readable. Understanding how to use them effectively can significantly improve your programming skills.
</p>`,
  codeExample: `# Map: Apply a function to each element in the array
numbers = [1, 2, 3, 4, 5]
squared_numbers = list(map(lambda x: x**2, numbers))  # Creates [1, 4, 9, 16, 25]

# Filter: Create a new array with elements that pass the test
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))  # Creates [2, 4]

# Reduce: Apply a function against an accumulator and each element
from functools import reduce
sum_of_numbers = reduce(lambda acc, x: acc + x, numbers)  # Creates 15`,
  exercises: [
    {
      prompt:
        'Given an array of numbers, use the map function to create a new array where each element is the square of the original element.',
      initialCode: `# Write your solution here
numbers = [1, 2, 3, 4, 5]
squared_numbers = `,
      solution: `numbers = [1, 2, 3, 4, 5]
squared_numbers = list(map(lambda x: x**2, numbers))`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Given an array of numbers, use the filter function to create a new array with only the even numbers.',
      initialCode: `# Write your solution here
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_numbers = `,
      solution: `numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Given an array of numbers, use the reduce function to find the product of all elements in the array.',
      initialCode: `# Write your solution here
from functools import reduce
numbers = [1, 2, 3, 4, 5]
product_of_numbers = `,
      solution: `from functools import reduce
numbers = [1, 2, 3, 4, 5]
product_of_numbers = reduce(lambda acc, x: acc * x, numbers)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to use the map function to square each element in an array?',
      options: [
        'map(lambda x: x**2, numbers)',
        'list(map(lambda x: x**2, numbers))',
        'map(lambda x: x**2, list(numbers))',
        'list(map(lambda x: x**2, list(numbers)))',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect because the map function returns an iterator, not a list.',
        'This is correct. It applies the lambda function to each element and converts the result to a list.',
        'This is incorrect because the list() function is applied to numbers unnecessarily.',
        'This is incorrect because the list() function is applied to numbers unnecessarily.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following is the correct way to use the filter function to get only even numbers from an array?',
      options: [
        'filter(lambda x: x % 2 == 0, numbers)',
        'list(filter(lambda x: x % 2 == 0, numbers))',
        'filter(lambda x: x % 2 == 0, list(numbers))',
        'list(filter(lambda x: x % 2 == 0, list(numbers)))',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect because the filter function returns an iterator, not a list.',
        'This is correct. It applies the lambda function to each element and converts the result to a list.',
        'This is incorrect because the list() function is applied to numbers unnecessarily.',
        'This is incorrect because the list() function is applied to numbers unnecessarily.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following is the correct way to use the reduce function to find the sum of all elements in an array?',
      options: [
        'reduce(lambda acc, x: acc + x, numbers)',
        'list(reduce(lambda acc, x: acc + x, numbers))',
        'reduce(lambda acc, x: acc + x, list(numbers))',
        'list(reduce(lambda acc, x: acc + x, list(numbers)))',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. It applies the lambda function to each element and reduces the array to a single value.',
        'This is incorrect because the reduce function does not return a list.',
        'This is incorrect because the list() function is applied to numbers unnecessarily.',
        'This is incorrect because the list() function is applied to numbers unnecessarily.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const sortingAnalysisData: LessonContent = {
  title: 'Sorting Performance Analysis',
  content: `<p>
Sorting algorithms are fundamental to computer science and are used in a variety of applications. 
Different sorting algorithms have different performance characteristics, and understanding these can help you choose the right algorithm for your specific needs.
</p>

<ul>
<li><strong>Bubble Sort:</strong> Simple but inefficient for large datasets. Time complexity: O(n^2).</li>
<li><strong>Selection Sort:</strong> Also simple but inefficient for large datasets. Time complexity: O(n^2).</li>
<li><strong>Insertion Sort:</strong> Efficient for small datasets or nearly sorted arrays. Time complexity: O(n^2).</li>
<li><strong>Merge Sort:</strong> Efficient and stable. Time complexity: O(n log n).</li>
<li><strong>Quick Sort:</strong> Efficient and widely used. Time complexity: O(n log n) on average, O(n^2) in the worst case.</li>
<li><strong>Heap Sort:</strong> Efficient and in-place. Time complexity: O(n log n).</li>
</ul>

<p>
Choosing the right sorting algorithm depends on the size of the dataset, the distribution of the data, and the specific requirements of your application.
</p>`,
  codeExample: `# Bubble Sort
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

# Merge Sort
def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        L = arr[:mid]
        R = arr[mid:]
        merge_sort(L)
        merge_sort(R)
        i = j = k = 0
        while i < len(L) and j < len(R):
            if L[i] < R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1
        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1
        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1
    return arr`,
  exercises: [
    {
      prompt:
        'Implement the Bubble Sort algorithm to sort an array of numbers.',
      initialCode: `# Write your solution here
def bubble_sort(arr):
    `,
      solution: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Implement the Merge Sort algorithm to sort an array of numbers.',
      initialCode: `# Write your solution here
def merge_sort(arr):
    `,
      solution: `def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        L = arr[:mid]
        R = arr[mid:]
        merge_sort(L)
        merge_sort(R)
        i = j = k = 0
        while i < len(L) and j < len(R):
            if L[i] < R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1
        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1
        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1
    return arr`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following sorting algorithms has a time complexity of O(n log n) in the worst case?',
      options: [
        'Bubble Sort',
        'Selection Sort',
        'Insertion Sort',
        'Merge Sort',
      ],
      correctAnswer: 3,
      explanations: [
        'This is incorrect. Bubble Sort has a time complexity of O(n^2).',
        'This is incorrect. Selection Sort has a time complexity of O(n^2).',
        'This is incorrect. Insertion Sort has a time complexity of O(n^2).',
        'This is correct. Merge Sort has a time complexity of O(n log n) in the worst case.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following sorting algorithms is most efficient for nearly sorted arrays?',
      options: [
        'Bubble Sort',
        'Selection Sort',
        'Insertion Sort',
        'Merge Sort',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. Bubble Sort is not the most efficient for nearly sorted arrays.',
        'This is incorrect. Selection Sort is not the most efficient for nearly sorted arrays.',
        'This is correct. Insertion Sort is most efficient for nearly sorted arrays.',
        'This is incorrect. Merge Sort is not the most efficient for nearly sorted arrays.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const basicSortingData: LessonContent = {
  title: 'Basic Sorting Algorithms',
  content: `<p>
Sorting is a fundamental operation in computer science used to organize elements in a specific order, such as ascending or descending.
Understanding basic sorting algorithms helps build intuition for more complex sorting and search techniques.
</p>

<ul>
<li><strong>Bubble Sort:</strong> A simple but inefficient sorting algorithm that repeatedly swaps adjacent elements if they are in the wrong order.</li>
<li><strong>Selection Sort:</strong> Finds the minimum element in each pass and places it at the beginning of the unsorted part of the array.</li>
<li><strong>Insertion Sort:</strong> Builds a sorted portion of the array element by element, inserting each new element into its correct position.</li>
<li><strong>Python’s built-in sorted() function:</strong> Python's sorted() function uses Timsort, a hybrid sorting algorithm with efficient performance on many data types.</li>
</ul>`,
  codeExample: `# Bubble Sort - O(n^2) time, in-place
def bubble_sort(arr):
    for i in range(len(arr)):
        for j in range(0, len(arr) - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

# Selection Sort - O(n^2) time, in-place
def selection_sort(arr):
    for i in range(len(arr)):
        min_idx = i
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]

# Insertion Sort - O(n^2) time, best case O(n) for nearly sorted lists, in-place
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key

# Python built-in sorted() - O(n log n) average case with Timsort
arr = [64, 25, 12, 22, 11]
sorted_arr = sorted(arr)  # Returns [11, 12, 22, 25, 64] without modifying the original`,
  exercises: [
    {
      prompt:
        'Implement Bubble Sort on the array [5, 1, 4, 2, 8] and print the sorted array.',
      initialCode: `# Write your solution here
def bubble_sort(arr):
    # Implement Bubble Sort here
    pass

array = [5, 1, 4, 2, 8]
bubble_sort(array)
print(array)  # Expected: [1, 2, 4, 5, 8]`,
      solution: `def bubble_sort(arr):
    for i in range(len(arr)):
        for j in range(0, len(arr) - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

array = [5, 1, 4, 2, 8]
bubble_sort(array)
print(array)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Use Selection Sort to sort an array [29, 10, 14, 37, 13] in ascending order. Print the result.',
      initialCode: `# Write your solution here
def selection_sort(arr):
    # Implement Selection Sort here
    pass

array = [29, 10, 14, 37, 13]
selection_sort(array)
print(array)  # Expected: [10, 13, 14, 29, 37]`,
      solution: `def selection_sort(arr):
    for i in range(len(arr)):
        min_idx = i
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]

array = [29, 10, 14, 37, 13]
selection_sort(array)
print(array)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Use Insertion Sort to sort an array [9, 7, 5, 11, 12, 2, 14, 3, 10, 6] in ascending order.',
      initialCode: `# Write your solution here
def insertion_sort(arr):
    # Implement Insertion Sort here
    pass

array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6]
insertion_sort(array)
print(array)  # Expected: [2, 3, 5, 6, 7, 9, 10, 11, 12, 14]`,
      solution: `def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key

array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6]
insertion_sort(array)
print(array)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which sorting algorithm has the best average-case time complexity among these basic algorithms?',
      options: [
        'Bubble Sort',
        'Selection Sort',
        'Insertion Sort',
        'Python’s sorted()',
      ],
      correctAnswer: 3,
      explanations: [
        'This is incorrect. Bubble Sort has O(n^2) time complexity on average.',
        'This is incorrect. Selection Sort has O(n^2) time complexity on average.',
        'This is incorrect. Insertion Sort has O(n^2) time complexity on average.',
        'This is correct. Python’s sorted() function uses Timsort, which has O(n log n) average complexity.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of these sorting algorithms is stable, meaning that it preserves the relative order of equal elements?',
      options: [
        'Bubble Sort',
        'Selection Sort',
        'Insertion Sort',
        'All of the above',
      ],
      correctAnswer: 3,
      explanations: [
        'This is incorrect because Bubble Sort does not consistently preserve order of equal elements.',
        'This is incorrect because Selection Sort is not stable.',
        'This is incorrect as Insertion Sort is stable, but not all are.',
        'This is correct because Bubble Sort, Selection Sort, and Insertion Sort are all stable algorithms when implemented properly.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'If an array is nearly sorted, which sorting algorithm will likely perform best?',
      options: [
        'Bubble Sort',
        'Selection Sort',
        'Insertion Sort',
        'Python’s sorted()',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. Bubble Sort does not leverage the order of elements well.',
        'This is incorrect. Selection Sort has O(n^2) time complexity and is inefficient even with nearly sorted arrays.',
        'This is correct. Insertion Sort can perform in O(n) time on nearly sorted arrays.',
        'This is incorrect. While efficient, Timsort would not be as fast as Insertion Sort in this specific scenario.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const builtInSortingData: LessonContent = {
  title: 'Built-in Sorting Functions',
  content: `<p>
Python provides built-in sorting functions that are optimized and easy to use. Understanding these functions can make sorting operations much more efficient in code. The two primary functions are:
</p>

<ul>
<li><strong>sorted():</strong> Returns a new sorted list from the elements of any iterable without modifying the original. Accepts optional parameters for custom sorting, like <i>reverse</i> for descending order and <i>key</i> for sorting by specific criteria.</li>
<li><strong>sort():</strong> A method for lists that sorts the list in place, meaning it modifies the original list and does not return a new one. This is efficient when you don’t need to keep the original order.</li>
</ul>`,
  codeExample: `# sorted() - creates a new sorted list
numbers = [3, 1, 4, 1, 5, 9]
sorted_numbers = sorted(numbers)  # Returns [1, 1, 3, 4, 5, 9]
print(sorted_numbers)

# sorted() with reverse=True for descending order
sorted_numbers_desc = sorted(numbers, reverse=True)  # Returns [9, 5, 4, 3, 1, 1]

# sorted() with key parameter for custom sorting
words = ['apple', 'banana', 'cherry', 'date']
sorted_words_by_length = sorted(words, key=len)  # Returns ['date', 'apple', 'banana', 'cherry']

# sort() - modifies the original list in place
numbers.sort()
print(numbers)  # Modifies numbers to [1, 1, 3, 4, 5, 9]

# sort() with reverse=True
numbers.sort(reverse=True)
print(numbers)  # Modifies numbers to [9, 5, 4, 3, 1, 1]

# sort() with key parameter
words.sort(key=len)
print(words)  # Modifies words to ['date', 'apple', 'banana', 'cherry']`,
  exercises: [
    {
      prompt:
        'Use sorted() to create a new list from [8, 3, 2, 7, 4] that’s sorted in ascending order and assign it to sorted_list.',
      initialCode: `# Write your solution here
numbers = [8, 3, 2, 7, 4]
sorted_list = `,
      solution: `sorted_list = sorted(numbers)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Given a list of strings ["tiger", "cat", "elephant", "dog"], use sorted() to create a list sorted by word length and assign it to length_sorted.',
      initialCode: `# Write your solution here
animals = ["tiger", "cat", "elephant", "dog"]
length_sorted = `,
      solution: `length_sorted = sorted(animals, key=len)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Use the sort() method to modify the list [12, 4, 3, 10, 15] in descending order.',
      initialCode: `# Write your solution here
numbers = [12, 4, 3, 10, 15]
# Sort numbers in place in descending order
`,
      solution: `numbers.sort(reverse=True)`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'What does sorted() return when used on a list?',
      options: [
        'A new sorted list without modifying the original',
        'The original list sorted in place',
        'None',
        'An iterator that yields sorted elements',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct! sorted() returns a new list and does not modify the original.',
        'Incorrect. sorted() does not sort in place.',
        'Incorrect. sorted() does return a value: a new sorted list.',
        'Incorrect. sorted() returns a new list, not an iterator.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'Which function or method modifies the original list in place?',
      options: ['sorted()', 'sort()', 'reverse()', 'reversed()'],
      correctAnswer: 1,
      explanations: [
        'Incorrect. sorted() returns a new list and does not modify the original.',
        'Correct! sort() modifies the original list in place.',
        'Incorrect. reverse() will modify in place, but it only reverses, not sorts.',
        'Incorrect. reversed() returns an iterator, not a sorted list.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which parameter in sorted() or sort() is used to define custom sorting criteria?',
      options: ['criteria', 'compare', 'sort_by', 'key'],
      correctAnswer: 3,
      explanations: [
        'Incorrect. The parameter for custom sorting is not criteria.',
        'Incorrect. There is no parameter called compare.',
        'Incorrect. sort_by is not a valid parameter.',
        'Correct! The key parameter allows defining a custom sorting criterion.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const partialSortingData: LessonContent = {
  title: 'Partially Sorted Arrays',
  content: `<p>
Partially sorted arrays are arrays where most of the elements are already in order, but a few elements are out of place. 
Optimizing algorithms for such arrays can significantly improve performance.
</p>

<ul>
<li><strong>Insertion Sort:</strong> Efficient for small datasets or nearly sorted arrays. Time complexity: O(n^2).</li>
<li><strong>Tim Sort:</strong> Python's built-in sorting algorithm, which is a hybrid of Merge Sort and Insertion Sort. It is highly optimized for partially sorted arrays.</li>
<li><strong>Heap Sort:</strong> Efficient and in-place. Time complexity: O(n log n).</li>
</ul>

<p>
Understanding the characteristics of partially sorted arrays and choosing the right algorithm can lead to significant performance improvements.
</p>`,
  codeExample: `# Insertion Sort for Partially Sorted Arrays
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr

# Tim Sort (Python's built-in sort)
def tim_sort(arr):
    arr.sort()
    return arr`,
  exercises: [
    {
      prompt:
        'Implement the Insertion Sort algorithm to sort a partially sorted array of numbers.',
      initialCode: `# Write your solution here
def insertion_sort(arr):
    `,
      solution: `def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Use Python\'s built-in sort function to sort a partially sorted array of numbers.',
      initialCode: `# Write your solution here
def tim_sort(arr):
    `,
      solution: `def tim_sort(arr):
    arr.sort()
    return arr`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following sorting algorithms is most efficient for partially sorted arrays?',
      options: [
        'Bubble Sort',
        'Selection Sort',
        'Insertion Sort',
        'Merge Sort',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. Bubble Sort is not the most efficient for partially sorted arrays.',
        'This is incorrect. Selection Sort is not the most efficient for partially sorted arrays.',
        'This is correct. Insertion Sort is most efficient for partially sorted arrays.',
        'This is incorrect. Merge Sort is not the most efficient for partially sorted arrays.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following is Python\'s built-in sorting algorithm for partially sorted arrays?',
      options: [
        'Bubble Sort',
        'Selection Sort',
        'Insertion Sort',
        'Tim Sort',
      ],
      correctAnswer: 3,
      explanations: [
        'This is incorrect. Bubble Sort is not Python\'s built-in sorting algorithm.',
        'This is incorrect. Selection Sort is not Python\'s built-in sorting algorithm.',
        'This is incorrect. Insertion Sort is not Python\'s built-in sorting algorithm.',
        'This is correct. Tim Sort is Python\'s built-in sorting algorithm for partially sorted arrays.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const customSortingData: LessonContent = {
  title: 'Sorting by Custom Conditions',
  content: `<p>
Python allows sorting based on custom conditions using the <i>key</i> parameter with the <i>sorted()</i> function and the <i>sort()</i> method. By specifying a function or lambda expression as the <i>key</i>, you can sort data based on any condition or transformation. This is especially useful for sorting complex objects or non-standard criteria.
</p>

<ul>
<li><strong>Sorting by length:</strong> Sort strings based on their length instead of alphabetical order.</li>
<li><strong>Sorting by absolute value:</strong> Sort numbers by their absolute value.</li>
<li><strong>Sorting by multiple conditions:</strong> Use tuples to sort by multiple criteria, such as by length and then alphabetically.</li>
<li><strong>Sorting custom objects:</strong> Use attributes of objects in custom sorting.</li>
</ul>`,
  codeExample: `# Sorting by length of each string
words = ["banana", "pie", "apple", "strawberry"]
sorted_by_length = sorted(words, key=len)  # Returns ['pie', 'apple', 'banana', 'strawberry']

# Sorting by absolute value
numbers = [-5, 2, -1, 3]
sorted_by_absolute = sorted(numbers, key=abs)  # Returns [-1, 2, 3, -5]

# Sorting by multiple conditions (length, then alphabetically)
fruits = ["apple", "fig", "banana", "cherry"]
sorted_by_multiple = sorted(fruits, key=lambda x: (len(x), x))  # Returns ['fig', 'apple', 'banana', 'cherry']

# Sorting a list of dictionaries by a specific key
students = [{"name": "Alice", "grade": 85}, {"name": "Bob", "grade": 92}, {"name": "Charlie", "grade": 78}]
sorted_by_grade = sorted(students, key=lambda student: student['grade'])  # Returns list sorted by 'grade'

# Sorting custom objects by an attribute
class Student:
    def __init__(self, name, grade):
        self.name = name
        self.grade = grade

students = [Student("Alice", 85), Student("Bob", 92), Student("Charlie", 78)]
students.sort(key=lambda s: s.grade)  # Sorts in place by 'grade' attribute
for student in students:
    print(student.name, student.grade)`,
  exercises: [
    {
      prompt:
        'Sort the list of numbers [-3, 1, -4, 2] by their absolute values and assign it to abs_sorted.',
      initialCode: `# Write your solution here
numbers = [-3, 1, -4, 2]
abs_sorted = `,
      solution: `abs_sorted = sorted(numbers, key=abs)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Given a list of names ["John", "Amy", "Zoe", "Tim"], use sorted() to create a list sorted by the length of each name, and assign it to length_sorted.',
      initialCode: `# Write your solution here
names = ["John", "Amy", "Zoe", "Tim"]
length_sorted = `,
      solution: `length_sorted = sorted(names, key=len)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Sort a list of dictionaries [{"name": "Alice", "age": 30}, {"name": "Bob", "age": 25}, {"name": "Charlie", "age": 35}] by the "age" key and assign it to age_sorted.',
      initialCode: `# Write your solution here
people = [{"name": "Alice", "age": 30}, {"name": "Bob", "age": 25}, {"name": "Charlie", "age": 35}]
age_sorted = `,
      solution: `age_sorted = sorted(people, key=lambda person: person['age'])`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which parameter is used with sorted() to specify custom sorting criteria?',
      options: ['compare', 'criteria', 'key', 'condition'],
      correctAnswer: 2,
      explanations: [
        'Incorrect. compare is not a parameter in sorted().',
        'Incorrect. criteria is not a parameter in sorted().',
        'Correct! The key parameter allows specifying custom sorting criteria.',
        'Incorrect. condition is not a valid parameter in sorted().',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'How would you sort the list ["zebra", "apple", "orange", "banana"] by the last character of each word?',
      options: [
        'sorted(words, key=lambda x: x[-1])',
        'sorted(words, key=lambda x: x[0])',
        'sorted(words, key=len)',
        'sorted(words, reverse=True)',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct! This sorts the list by the last character of each word.',
        'Incorrect. This sorts by the first character.',
        'Incorrect. This sorts by length, not by the last character.',
        'Incorrect. This reverses the list but doesn’t specify a key for last character sorting.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'What does the lambda expression <i>lambda x: (len(x), x)</i> achieve in a sorted() function?',
      options: [
        'Sorts by the first letter, then by length',
        'Sorts by length, then alphabetically',
        'Sorts alphabetically only',
        'Sorts by length only',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. This does not sort by the first letter first.',
        'Correct! It sorts by length, and for equal lengths, it sorts alphabetically.',
        'Incorrect. This sorts by both length and alphabetically for equal lengths.',
        'Incorrect. It also sorts alphabetically for equal lengths.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const twoPointerConceptData: LessonContent = {
  title: 'Concept of Two-pointers',
  content: `<p>
The Two-pointers technique is a common approach in algorithms for solving problems on arrays, linked lists, or strings efficiently. 
It involves using two pointers, often starting at different positions (such as the beginning and end) of a sequence, and moving them towards each other or in specific ways based on certain conditions. 
This technique is especially useful for searching, sorting, and partitioning tasks and can optimize time complexity by reducing the number of necessary comparisons.
</p>

<ul>
<li><strong>Left and Right Pointers:</strong> Commonly used in problems like searching pairs with specific properties or reversing sequences in-place.</li>
<li><strong>Slow and Fast Pointers:</strong> Often used in problems involving cycles or patterns within linked lists, such as detecting cycles or finding the middle element.</li>
<li><strong>Sliding Window Technique:</strong> A variation of Two-pointers used when processing a subset of elements within an array or list, often involving dynamically resizing the window to find optimal solutions.</li>
</ul>`,
  codeExample: `# Two-pointers to find if a pair exists with a given sum in a sorted array
# O(n) time complexity
def has_pair_with_sum(arr, target_sum):
    left, right = 0, len(arr) - 1
    while left < right:
        current_sum = arr[left] + arr[right]
        if current_sum == target_sum:
            return True
        elif current_sum < target_sum:
            left += 1
        else:
            right -= 1
    return False

# Two-pointers for reversing an array in-place
# O(n/2) ~ O(n) time complexity
def reverse_array(arr):
    left, right = 0, len(arr) - 1
    while left < right:
        arr[left], arr[right] = arr[right], arr[left]
        left += 1
        right -= 1
    return arr

# Slow and fast pointers to detect a cycle in a linked list
# Floyd’s Cycle-Finding Algorithm - O(n) time complexity
class ListNode:
    def __init__(self, value=0, next=None):
        self.value = value
        self.next = next

def has_cycle(head):
    slow, fast = head, head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False`,
  exercises: [
    {
      prompt:
        'Use the two-pointer technique to find if there exists a pair in the array [1, 3, 5, 7] with a sum of 10. Assign the result to pair_exists.',
      initialCode: `# Write your solution here
arr = [1, 3, 5, 7]
target_sum = 10
pair_exists = `,
      solution: `# Write your solution here
arr = [1, 3, 5, 7]
target_sum = 10
left, right = 0, len(arr) - 1
pair_exists = False

while left < right:
    current_sum = arr[left] + arr[right]
    if current_sum == target_sum:
        pair_exists = True
        break
    elif current_sum < target_sum:
        left += 1
    else:
        right -= 1`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Reverse the array [1, 2, 3, 4, 5] in-place using the two-pointer technique and assign the result to reversed_array.',
      initialCode: `# Write your solution here
arr = [1, 2, 3, 4, 5]
reversed_array = `,
      solution: `# Write your solution here
arr = [1, 2, 3, 4, 5]
left, right = 0, len(arr) - 1
while left < right:
    arr[left], arr[right] = arr[right], arr[left]
    left += 1
    right -= 1
reversed_array = arr`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Given a linked list with nodes that could potentially form a cycle, use the slow and fast pointer technique to detect if a cycle exists. Assume the head of the list is provided.',
      initialCode: `# Write your solution here
# Assume head is defined
cycle_exists = `,
      solution: `# Write your solution here
# Assume head is defined
slow = head
fast = head
cycle_exists = False

while fast is not None and fast.next is not None:
    slow = slow.next
    fast = fast.next.next
    if slow == fast:
        cycle_exists = True
        break`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary purpose of the Two-pointers technique?',
      options: [
        'To sort arrays',
        'To solve problems by optimizing comparisons between elements',
        'To remove duplicates from a list',
        'To traverse arrays only from left to right',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Two-pointers are often used with sorted arrays, but sorting itself is not the primary purpose.',
        'Correct! The Two-pointers technique reduces the number of comparisons, optimizing for time complexity.',
        'Incorrect. Although it can be used in deduplication problems, this is not its main purpose.',
        'Incorrect. The technique often involves traversing from both directions, not just left to right.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which variation of the Two-pointers technique is commonly used for cycle detection in linked lists?',
      options: [
        'Left and right pointers',
        'Sliding window',
        'Binary search',
        'Slow and fast pointers',
      ],
      correctAnswer: 3,
      explanations: [
        'Incorrect. Left and right pointers are typically used for array problems.',
        'Incorrect. The sliding window is useful for subsets but not for cycle detection.',
        'Incorrect. Binary search is a separate algorithm.',
        'Correct! Slow and fast pointers are effective for detecting cycles in linked lists.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'What is the time complexity of finding a pair with a specific sum in a sorted array using the Two-pointers technique?',
      options: ['O(log n)', 'O(n)', 'O(n log n)', 'O(n^2)'],
      correctAnswer: 1,
      explanations: [
        'Incorrect. O(log n) is for binary search; Two-pointers for pair searching typically requires O(n).',
        'Correct! The technique has a linear time complexity, O(n).',
        'Incorrect. O(n log n) would be required if the array needed to be sorted first.',
        'Incorrect. O(n^2) is typical for brute-force pair searching without Two-pointers.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const twoPointerProblemsData: LessonContent = {
  title: 'Common Two-pointer Problems',
  content: `<p>
The Two-pointers technique is especially effective for problems involving sorted arrays, strings, and linked lists, as it can reduce the time complexity of certain operations. 
Some common problem types that benefit from this technique include finding pairs with specific properties, partitioning elements, and detecting cycles. 
This approach helps simplify problem logic by keeping track of multiple elements simultaneously and optimizing search or traversal paths.
</p>

<ul>
<li><strong>Two-sum in a sorted array:</strong> Using two pointers to find pairs that sum to a target value.</li>
<li><strong>Remove duplicates from a sorted array:</strong> Modifying the array in-place to retain only unique elements.</li>
<li><strong>Reverse words in a string:</strong> A two-pointer approach to reverse each word in-place while maintaining sentence structure.</li>
<li><strong>Find the middle of a linked list:</strong> Using a slow and fast pointer to locate the middle efficiently.</li>
</ul>`,
  codeExample: `# Example 1: Two-sum in a sorted array - O(n) time complexity
def two_sum_sorted(arr, target_sum):
    left, right = 0, len(arr) - 1
    while left < right:
        current_sum = arr[left] + arr[right]
        if current_sum == target_sum:
            return (left, right)
        elif current_sum < target_sum:
            left += 1
        else:
            right -= 1
    return None

# Example 2: Removing duplicates from a sorted array - O(n) time complexity
def remove_duplicates(arr):
    if not arr:
        return 0
    write_index = 1
    for i in range(1, len(arr)):
        if arr[i] != arr[i - 1]:
            arr[write_index] = arr[i]
            write_index += 1
    return write_index

# Example 3: Finding the middle of a linked list - O(n) time complexity
class ListNode:
    def __init__(self, value=0, next=None):
        self.value = value
        self.next = next

def find_middle(head):
    slow, fast = head, head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow

# Example 4: Reversing words in a sentence - O(n) time complexity
def reverse_words(sentence):
    words = sentence.split()
    left, right = 0, len(words) - 1
    while left < right:
        words[left], words[right] = words[right], words[left]
        left += 1
        right -= 1
    return ' '.join(words)`,
  exercises: [
    {
      prompt:
        'Implement a function to find if a pair exists with a given sum in the sorted array [1, 2, 3, 4, 6] with a target of 8.',
      initialCode: `# Write your solution here
arr = [1, 2, 3, 4, 6]
target_sum = 8
pair_indices = `,
      solution: `# Write your solution here
arr = [1, 2, 3, 4, 6]
target_sum = 8
left, right = 0, len(arr) - 1
pair_indices = None

while left < right:
    current_sum = arr[left] + arr[right]
    if current_sum == target_sum:
        pair_indices = (left, right)
        break
    elif current_sum < target_sum:
        left += 1
    else:
        right -= 1`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Remove duplicates in-place from the sorted array [1, 1, 2, 3, 3, 4] and get the length of the modified array.',
      initialCode: `# Write your solution here
arr = [1, 1, 2, 3, 3, 4]
new_length = `,
      solution: `# Write your solution here
arr = [1, 1, 2, 3, 3, 4]
new_length = 0

if len(arr) == 0:
    new_length = 0
else:
    for i in range(1, len(arr)):
        if arr[new_length] != arr[i]:
            new_length += 1
            arr[new_length] = arr[i]
    new_length += 1`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Given the head of a linked list, use two-pointers to find the middle node. Assume a ListNode class is defined.',
      initialCode: `# Write your solution here
# Assume head is defined
middle_node = `,
      solution: `# Write your solution here
# Assume head is defined
slow = head
fast = head

while fast is not None and fast.next is not None:
    slow = slow.next
    fast = fast.next.next

middle_node = slow`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question:
        'What is the time complexity of removing duplicates from a sorted array using the Two-pointers technique?',
      options: ['O(log n)', 'O(n)', 'O(n log n)', 'O(n^2)'],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Logarithmic complexity does not apply here since we need to iterate through each element.',
        'Correct! Using Two-pointers, we achieve O(n) time complexity.',
        'Incorrect. Sorting is not required, so O(n log n) is irrelevant.',
        'Incorrect. The Two-pointers technique is efficient and avoids quadratic time complexity.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'In a Two-pointers approach, what is the purpose of a fast and slow pointer when finding the middle element of a linked list?',
      options: [
        'The fast pointer skips nodes while the slow pointer advances normally.',
        'The slow pointer goes backward while the fast pointer goes forward.',
        'The fast pointer only moves once the slow pointer has reached the end.',
        'Both pointers move at the same speed until the fast pointer reaches the end.',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct! The fast pointer moves at twice the speed of the slow pointer, so when the fast pointer reaches the end, the slow pointer is at the middle.',
        'Incorrect. The slow pointer does not go backward.',
        'Incorrect. Both pointers move simultaneously but at different speeds.',
        'Incorrect. The fast pointer moves faster than the slow pointer.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which problem type is not commonly solved by the Two-pointers technique?',
      options: [
        'Finding pairs with a specific sum',
        'Sorting an unsorted array',
        'Detecting cycles in a linked list',
        'Reversing words in a sentence',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Finding pairs with a specific sum is a classic Two-pointers problem.',
        'Correct! Sorting usually requires dedicated sorting algorithms and is not achieved with Two-pointers.',
        'Incorrect. Detecting cycles in a linked list uses the Two-pointers (fast and slow) technique.',
        'Incorrect. Reversing words can be done effectively with Two-pointers.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const dutchNationalFlagData: LessonContent = {
  title: 'Dutch National Flag Problem',
  content: `<p>
The Dutch National Flag problem is a classic programming problem that involves sorting an array with three distinct values. 
The goal is to rearrange the elements such that all elements of the first value are followed by all elements of the second value, followed by all elements of the third value.
</p>

<p>
This problem can be solved using a three-way partitioning algorithm, which is similar to the partitioning step in the Quick Sort algorithm.
</p>`,
  codeExample: `# Dutch National Flag Problem
def dutch_national_flag(arr):
    low, mid, high = 0, 0, len(arr) - 1
    while mid <= high:
        if arr[mid] == 0:
            arr[low], arr[mid] = arr[mid], arr[low]
            low += 1
            mid += 1
        elif arr[mid] == 1:
            mid += 1
        else:
            arr[mid], arr[high] = arr[high], arr[mid]
            high -= 1
    return arr`,
  exercises: [
    {
      prompt:
        'Implement the Dutch National Flag algorithm to sort an array with three distinct values.',
      initialCode: `# Write your solution here
def dutch_national_flag(arr):
    `,
      solution: `def dutch_national_flag(arr):
    low, mid, high = 0, 0, len(arr) - 1
    while mid <= high:
        if arr[mid] == 0:
            arr[low], arr[mid] = arr[mid], arr[low]
            low += 1
            mid += 1
        elif arr[mid] == 1:
            mid += 1
        else:
            arr[mid], arr[high] = arr[high], arr[mid]
            high -= 1
    return arr`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following problems can be solved using the Dutch National Flag algorithm?',
      options: [
        'Sorting an array with two distinct values',
        'Sorting an array with three distinct values',
        'Sorting an array with four distinct values',
        'Sorting an array with five distinct values',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. The Dutch National Flag algorithm is not designed for two distinct values.',
        'This is correct. The Dutch National Flag algorithm is designed for three distinct values.',
        'This is incorrect. The Dutch National Flag algorithm is not designed for four distinct values.',
        'This is incorrect. The Dutch National Flag algorithm is not designed for five distinct values.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const slidingWindowConceptData: LessonContent = {
  title: 'Sliding Window Concept',
  content: `<p>
The Sliding Window technique is widely used for problems involving arrays and strings, particularly where a subset or sequence of elements must be evaluated. 
Instead of recalculating values repeatedly, this approach efficiently "slides" a window of a fixed or variable size over the data, updating the result as it moves.
</p>

<ul>
<li><strong>Fixed-length sliding window:</strong> Used when the window size is constant, often for finding the maximum sum of a subarray of fixed size.</li>
<li><strong>Variable-length sliding window:</strong> Useful when the window size changes, typically for finding subarrays that meet certain conditions.</li>
<li><strong>Common applications:</strong> Maximum or minimum sum of subarrays, finding unique characters in substrings, and detecting patterns in sequences.</li>
</ul>`,
  codeExample: `# Example 1: Fixed-length Sliding Window - O(n) time complexity
def max_sum_fixed_window(arr, k):
    max_sum = sum(arr[:k])
    window_sum = max_sum
    for i in range(k, len(arr)):
        window_sum += arr[i] - arr[i - k]
        max_sum = max(max_sum, window_sum)
    return max_sum

# Example 2: Variable-length Sliding Window - O(n) time complexity
def min_length_subarray(arr, target):
    min_length = float('inf')
    left = 0
    current_sum = 0
    for right in range(len(arr)):
        current_sum += arr[right]
        while current_sum >= target:
            min_length = min(min_length, right - left + 1)
            current_sum -= arr[left]
            left += 1
    return min_length if min_length != float('inf') else 0

# Example 3: Longest substring with k unique characters - O(n) time complexity
def longest_substring_k_unique(s, k):
    char_count = {}
    left = 0
    max_length = 0
    for right in range(len(s)):
        char_count[s[right]] = char_count.get(s[right], 0) + 1
        while len(char_count) > k:
            char_count[s[left]] -= 1
            if char_count[s[left]] == 0:
                del char_count[s[left]]
            left += 1
        max_length = max(max_length, right - left + 1)
    return max_length`,
  exercises: [
    {
      prompt:
        'Implement a function to find the maximum sum of any subarray of size 3 in the array [1, 3, 2, 6, -1, 4, 1, 8, 2].',
      initialCode: `# Write your solution here
arr = [1, 3, 2, 6, -1, 4, 1, 8, 2]
k = 3
max_sum = `,
      solution: `# Write your solution here
arr = [1, 3, 2, 6, -1, 4, 1, 8, 2]
k = 3
max_sum = float('-inf')

for i in range(len(arr) - k + 1):
    current_sum = sum(arr[i:i + k])
    if current_sum > max_sum:
        max_sum = current_sum`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Write a function that finds the minimum length of a subarray with a sum greater than or equal to 7 in [2, 1, 5, 2, 3, 2].',
      initialCode: `# Write your solution here
arr = [2, 1, 5, 2, 3, 2]
target = 7
min_length = `,
      solution: `# Write your solution here
arr = [2, 1, 5, 2, 3, 2]
target = 7
min_length = float('inf')
current_sum = 0
start = 0

for end in range(len(arr)):
    current_sum += arr[end]
    while current_sum >= target:
        min_length = min(min_length, end - start + 1)
        current_sum -= arr[start]
        start += 1

if min_length == float('inf'):
    min_length = 0`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Determine the length of the longest substring with at most 2 unique characters in "araaci".',
      initialCode: `# Write your solution here
s = "araaci"
k = 2
longest_length = `,
      solution: `# Write your solution here
s = "araaci"
k = 2
longest_length = 0
char_count = {}
start = 0

for end in range(len(s)):
    char_count[s[end]] = char_count.get(s[end], 0) + 1
    while len(char_count) > k:
        char_count[s[start]] -= 1
        if char_count[s[start]] == 0:
            del char_count[s[start]]
        start += 1
    longest_length = max(longest_length, end - start + 1)`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is an advantage of using the Sliding Window technique over brute force methods?',
      options: [
        'It only works with sorted arrays.',
        'It reduces the time complexity by reusing prior results.',
        'It is easier to implement than other algorithms.',
        'It requires additional memory to store all subarrays.',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Sliding Window works on both sorted and unsorted arrays.',
        'Correct! Sliding Window saves time by reusing previously computed values within the window.',
        'Incorrect. While it may be easy to implement, this is not its primary advantage.',
        'Incorrect. The Sliding Window technique is memory-efficient as it does not store every subarray.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'What type of problem is best suited for a fixed-length Sliding Window?',
      options: [
        'Finding the maximum sum of a subarray of a fixed size.',
        'Finding a subarray with a sum greater than a given target.',
        'Finding the longest substring with unique characters.',
        'Sorting an array in ascending order.',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct! A fixed-length Sliding Window is ideal for maximum or minimum subarray problems of a constant length.',
        'Incorrect. Variable-length Sliding Window would be better for this type of problem.',
        'Incorrect. Finding unique character substrings often requires a variable-length approach.',
        'Incorrect. Sorting an array typically requires dedicated sorting algorithms.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'When using a variable-length Sliding Window, what generally happens as the window expands?',
      options: [
        'The left pointer always stays fixed.',
        'The sum or length being tracked typically decreases.',
        'The window adjusts based on certain conditions, often with the right pointer expanding and the left pointer contracting.',
        'Both pointers move in the same direction simultaneously.',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. The left pointer may adjust based on conditions.',
        'Incorrect. In many cases, the window sum or count increases as the window expands.',
        'Correct! In a variable-length window, conditions control the expansion and contraction of the window.',
        'Incorrect. The pointers typically move independently based on conditions.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const slidingWindowTypesData: LessonContent = {
  title: 'Fixed and Dynamic Sliding Windows',
  content: `<p>
The sliding window technique is a popular approach in algorithms for handling a range or subset of data within an array or sequence. 
Sliding windows can be <strong>fixed</strong> (where the window size remains constant) or <strong>dynamic</strong> (where the window size changes based on conditions).
This technique is especially useful in optimizing problems involving contiguous subarrays or subsequences.
</p>

<ul>
<li><strong>Fixed Sliding Window:</strong> Maintains a constant window size. Used when the number of elements in the window is predetermined.</li>
<li><strong>Dynamic Sliding Window:</strong> Adjusts the window size dynamically. Helpful in cases where you need to expand or shrink the window based on certain conditions.</li>
<li><strong>Applications:</strong> The sliding window technique is commonly used in problems involving subarrays, substrings, and continuous sequences such as finding maximum sums, averages, or specific sequences.</li>
</ul>`,
  codeExample: `# Fixed sliding window example
# Finding the maximum sum of any subarray of size 'k'
def max_sum_fixed_window(arr, k):
    max_sum = curr_sum = sum(arr[:k])
    for i in range(k, len(arr)):
        curr_sum += arr[i] - arr[i - k]
        max_sum = max(max_sum, curr_sum)
    return max_sum

# Dynamic sliding window example
# Finding the smallest subarray with sum >= target
def min_length_dynamic_window(arr, target):
    min_length = float('inf')
    curr_sum = left = 0
    for right in range(len(arr)):
        curr_sum += arr[right]
        while curr_sum >= target:
            min_length = min(min_length, right - left + 1)
            curr_sum -= arr[left]
            left += 1
    return min_length if min_length != float('inf') else 0`,
  exercises: [
    {
      prompt:
        'Using the fixed sliding window technique, write a function that finds the maximum sum of any subarray of size 3.',
      initialCode: `# Write your solution here
def max_sum_fixed_window(arr):`,
      solution: `def max_sum_fixed_window(arr):
    k = 3
    max_sum = curr_sum = sum(arr[:k])
    for i in range(k, len(arr)):
        curr_sum += arr[i] - arr[i - k]
        max_sum = max(max_sum, curr_sum)
    return max_sum`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Using the dynamic sliding window technique, write a function that finds the smallest subarray with sum >= 8.',
      initialCode: `# Write your solution here
def min_length_dynamic_window(arr):`,
      solution: `def min_length_dynamic_window(arr):
    target = 8
    min_length = float('inf')
    curr_sum = left = 0
    for right in range(len(arr)):
        curr_sum += arr[right]
        while curr_sum >= target:
            min_length = min(min_length, right - left + 1)
            curr_sum -= arr[left]
            left += 1
    return min_length if min_length != float('inf') else 0`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following problems is best suited for the fixed sliding window technique?',
      options: [
        'Finding the longest substring with unique characters',
        'Finding the maximum sum of any subarray of fixed size k',
        'Finding the smallest subarray with sum greater than a target',
        'Counting occurrences of elements in a dynamic window range',
      ],
      correctAnswer: 1,
      explanations: [
        'This requires a dynamic window size, as the length of unique characters can vary.',
        'Correct. A fixed-size window is ideal for finding maximum sums in subarrays of a predetermined size.',
        'This is suited for a dynamic sliding window, where the window size adjusts to meet the target condition.',
        'This problem generally requires a dynamic window that can expand or contract based on the conditions.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'In a dynamic sliding window, when should you move the left pointer?',
      options: [
        'When the window size is fixed',
        'When the current window meets or exceeds the required condition',
        'When the array is exhausted',
        'Only at the start of the array',
      ],
      correctAnswer: 1,
      explanations: [
        'This is specific to fixed sliding windows, not dynamic ones.',
        'Correct. In a dynamic sliding window, the left pointer is adjusted when the current window meets or exceeds the target condition.',
        'The left pointer can move whenever the condition is met, not only at the end.',
        'The left pointer can move at any point within the array, as needed by the condition.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};
const slidingWindowOptimizationData: LessonContent = {
  title: 'Optimizing Sliding Window Solutions',
  content: `<p>
Sliding window problems are a common type of problem in computer science, where you need to find a subarray or substring that meets certain criteria. 
Optimizing these problems can significantly improve performance.
</p>

<ul>
<li><strong>Fixed-size Sliding Window:</strong> The window size is fixed and you slide it across the array to find the desired subarray.</li>
<li><strong>Variable-size Sliding Window:</strong> The window size can change dynamically based on the problem constraints.</li>
<li><strong>Two-pointer Technique:</strong> Often used in conjunction with sliding windows to efficiently find the desired subarray.</li>
</ul>

<p>
Understanding these techniques and how to apply them can lead to efficient solutions for a variety of problems.
</p>`,
  codeExample: `# Fixed-size Sliding Window
def max_sum_subarray(arr, k):
    max_sum = float('-inf')
    current_sum = sum(arr[:k])
    for i in range(k, len(arr)):
        current_sum += arr[i] - arr[i - k]
        max_sum = max(max_sum, current_sum)
    return max_sum

# Variable-size Sliding Window
def longest_substring_with_k_distinct_characters(s, k):
    char_count = {}
    left = 0
    max_length = 0
    for right in range(len(s)):
        char_count[s[right]] = char_count.get(s[right], 0) + 1
        while len(char_count) > k:
            char_count[s[left]] -= 1
            if char_count[s[left]] == 0:
                del char_count[s[left]]
            left += 1
        max_length = max(max_length, right - left + 1)
    return max_length`,
  exercises: [
    {
      prompt:
        'Implement the fixed-size sliding window algorithm to find the maximum sum of a subarray of size k.',
      initialCode: `# Write your solution here
def max_sum_subarray(arr, k):
    `,
      solution: `def max_sum_subarray(arr, k):
    max_sum = float('-inf')
    current_sum = sum(arr[:k])
    for i in range(k, len(arr)):
        current_sum += arr[i] - arr[i - k]
        max_sum = max(max_sum, current_sum)
    return max_sum`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Implement the variable-size sliding window algorithm to find the longest substring with at most k distinct characters.',
      initialCode: `# Write your solution here
def longest_substring_with_k_distinct_characters(s, k):
    `,
      solution: `def longest_substring_with_k_distinct_characters(s, k):
    char_count = {}
    left = 0
    max_length = 0
    for right in range(len(s)):
        char_count[s[right]] = char_count.get(s[right], 0) + 1
        while len(char_count) > k:
            char_count[s[left]] -= 1
            if char_count[s[left]] == 0:
                del char_count[s[left]]
            left += 1
        max_length = max(max_length, right - left + 1)
    return max_length`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following problems can be solved using the sliding window technique?',
      options: [
        'Finding the maximum sum of a subarray of size k',
        'Finding the longest substring with at most k distinct characters',
        'Both of the above',
        'None of the above',
      ],
      correctAnswer: 2,
      explanations: [
        'This is correct. The sliding window technique can be used to find the maximum sum of a subarray of size k.',
        'This is correct. The sliding window technique can be used to find the longest substring with at most k distinct characters.',
        'This is correct. Both problems can be solved using the sliding window technique.',
        'This is incorrect. Both problems can be solved using the sliding window technique.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const prefixSumConceptData: LessonContent = {
  title: 'Prefix Sum',
  content: `<p>
The <strong>prefix sum</strong> technique is a powerful approach in array-based problems. It helps in computing cumulative sums across subarrays, making it efficient to query ranges within an array.
A <strong>prefix sum array</strong> is an array where each element at index <em>i</em> contains the sum of the array elements from the beginning up to <em>i</em>. This technique is useful in problems involving range sums, subarray sum calculations, and more.
</p>

<ul>
<li><strong>Creating a Prefix Sum Array:</strong> Iterate through the array to build the prefix sum array where each element stores the cumulative sum up to that index.</li>
<li><strong>Using the Prefix Sum Array:</strong> Once the prefix sum array is built, it allows querying of any subarray sum in constant time.</li>
<li><strong>Applications:</strong> Efficiently solving problems like range sum queries, finding subarrays with specific sum properties, and many others.</li>
</ul>`,
  codeExample: `# Building a prefix sum array
def build_prefix_sum(arr):
    prefix_sum = [0] * len(arr)
    prefix_sum[0] = arr[0]
    for i in range(1, len(arr)):
        prefix_sum[i] = prefix_sum[i - 1] + arr[i]
    return prefix_sum

# Using the prefix sum array to calculate sum of elements in a given range
def range_sum(prefix_sum, left, right):
    if left == 0:
        return prefix_sum[right]
    return prefix_sum[right] - prefix_sum[left - 1]

# Example usage
arr = [1, 2, 3, 4, 5]
prefix_sum = build_prefix_sum(arr)  # Creates [1, 3, 6, 10, 15]
range_sum(prefix_sum, 1, 3)  # Returns 9 (sum of subarray [2, 3, 4])`,
  exercises: [
    {
      prompt:
        'Write a function that builds a prefix sum array for a given array. Use the prefix sum array to find the sum of elements from index 2 to index 4.',
      initialCode: `# Write your solution here
def build_prefix_sum(arr):
def range_sum(prefix_sum, left, right):`,
      solution: `def build_prefix_sum(arr):
    prefix_sum = [0] * len(arr)
    prefix_sum[0] = arr[0]
    for i in range(1, len(arr)):
        prefix_sum[i] = prefix_sum[i - 1] + arr[i]
    return prefix_sum

def range_sum(prefix_sum, left, right):
    if left == 0:
        return prefix_sum[right]
    return prefix_sum[right] - prefix_sum[left - 1]`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Using the prefix sum technique, write a function that finds the sum of the first N elements in an array.',
      initialCode: `# Write your solution here
def sum_first_n_elements(arr, n):`,
      solution: `def sum_first_n_elements(arr, n):
    prefix_sum = build_prefix_sum(arr)
    return prefix_sum[n - 1]`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following describes the primary benefit of using a prefix sum array?',
      options: [
        'It allows for quick updates to any element in the array.',
        'It makes computing subarray sums more efficient.',
        'It sorts the array elements in ascending order.',
        'It multiplies each element by a constant factor.',
      ],
      correctAnswer: 1,
      explanations: [
        'Prefix sums are not typically used for quick updates. Updating an element would require adjusting multiple prefix sums.',
        'Correct. A prefix sum array allows subarray sums to be calculated in constant time after an initial setup.',
        'This is incorrect; prefix sums do not affect sorting.',
        'This is incorrect; prefix sums do not modify the array elements themselves.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'If you have a prefix sum array, what is the time complexity to calculate the sum of a subarray from index 2 to index 5?',
      options: ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'],
      correctAnswer: 0,
      explanations: [
        'Correct. With a prefix sum array, querying any subarray sum is done in constant time.',
        'This would be the time complexity if we calculated the sum without a prefix sum array.',
        'Prefix sums do not rely on logarithmic time for sum queries.',
        'This would be true if calculating the sum for each possible subarray in an array, not a single subarray.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};
const differenceArrayData: LessonContent = {
  title: 'Difference Array',
  content: `<p>
The <strong>difference array</strong> technique is useful in scenarios where multiple range update operations are required on an array. 
A difference array allows us to make range updates efficiently, applying the update to only the endpoints of the range, and later using a prefix sum to get the modified array.
This approach is especially beneficial in optimizing problems where we need to update ranges of elements repeatedly.
</p>

<ul>
<li><strong>Creating a Difference Array:</strong> Initialize a difference array where each element represents the difference between consecutive elements of the original array. This allows for efficient range updates.</li>
<li><strong>Applying Range Updates:</strong> To add a value to a specific range, update only the starting and ending indices in the difference array. The actual values can then be computed by taking the prefix sum of the difference array.</li>
<li><strong>Applications:</strong> The difference array is particularly useful for batch processing of range updates in large arrays.</li>
</ul>`,
  codeExample: `# Building a difference array
def build_difference_array(arr):
    diff_array = [0] * (len(arr) + 1)
    for i in range(len(arr)):
        diff_array[i] = arr[i] - (arr[i - 1] if i > 0 else 0)
    return diff_array

# Applying a range update using the difference array
def update_range(diff_array, left, right, value):
    diff_array[left] += value
    if right + 1 < len(diff_array):
        diff_array[right + 1] -= value

# Converting the difference array back to the modified array
def get_modified_array(diff_array):
    modified_array = [0] * (len(diff_array) - 1)
    modified_array[0] = diff_array[0]
    for i in range(1, len(modified_array)):
        modified_array[i] = modified_array[i - 1] + diff_array[i]
    return modified_array

# Example usage
arr = [1, 2, 3, 4, 5]
diff_array = build_difference_array(arr)  # Initial difference array
update_range(diff_array, 1, 3, 2)  # Adds 2 to the range [1, 3]
modified_array = get_modified_array(diff_array)  # Resulting array: [1, 4, 5, 6, 5]`,
  exercises: [
    {
      prompt:
        'Write a function to build a difference array for a given array. Use the difference array to increase all elements from index 2 to index 4 by 3.',
      initialCode: `# Write your solution here
def build_difference_array(arr):
def update_range(diff_array, left, right, value):`,
      solution: `def build_difference_array(arr):
    diff_array = [0] * (len(arr) + 1)
    for i in range(len(arr)):
        diff_array[i] = arr[i] - (arr[i - 1] if i > 0 else 0)
    return diff_array

def update_range(diff_array, left, right, value):
    diff_array[left] += value
    if right + 1 < len(diff_array):
        diff_array[right + 1] -= value`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Using a difference array, write a function to perform two range updates: add 5 to indices 0 to 2 and subtract 2 from indices 3 to 4.',
      initialCode: `# Write your solution here
def apply_multiple_updates(arr):`,
      solution: `def apply_multiple_updates(arr):
    diff_array = build_difference_array(arr)
    update_range(diff_array, 0, 2, 5)
    update_range(diff_array, 3, 4, -2)
    return get_modified_array(diff_array)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary purpose of using a difference array?',
      options: [
        'To find the maximum element in an array.',
        'To efficiently calculate the sum of any subarray.',
        'To apply multiple range updates efficiently.',
        'To reverse an array in constant time.',
      ],
      correctAnswer: 2,
      explanations: [
        'Finding the maximum element is unrelated to the difference array technique.',
        'Prefix sums, rather than difference arrays, are commonly used for quick sum calculations.',
        'Correct. Difference arrays are used to handle range updates efficiently.',
        'Reversing an array does not involve difference arrays.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'If you want to add 4 to the range [1, 3] in a difference array, what steps should you take?',
      options: [
        'Set the entire range to 4 in the difference array.',
        'Increment the difference array at index 1 by 4, and decrement index 4 by 4.',
        'Decrement the entire range by 4 in the difference array.',
        'Add 4 to every element in the difference array.',
      ],
      correctAnswer: 1,
      explanations: [
        'Only the start and end indices of the range should be modified in a difference array.',
        'Correct. Incrementing the start and decrementing the index after the end of the range applies the update effectively.',
        'The range should be incremented, not decremented, for a positive update.',
        'Only the endpoints, not all elements, need adjustment in a difference array.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const rangeQueriesData: LessonContent = {
  title: 'Range Queries',
  content: `<p>
Range queries are a common type of problem where you need to efficiently compute some operation over a subarray or a range of indices. 
One of the most effective ways to handle range queries is by using <strong>prefix sums</strong>.
</p>

<ul>
<li><strong>Prefix Sum Array:</strong> A prefix sum array is an array where each element at index i is the sum of all elements from the start of the array to index i.</li>
<li><strong>Range Sum Query:</strong> Given a range [L, R], the sum of elements in this range can be computed efficiently using the prefix sum array.</li>
</ul>

<p>
Using prefix sums allows you to answer range queries in constant time after an initial preprocessing step.
</p>`,
  codeExample: `# Prefix Sum Array
def prefix_sum_array(arr):
    prefix_sum = [0] * len(arr)
    prefix_sum[0] = arr[0]
    for i in range(1, len(arr)):
        prefix_sum[i] = prefix_sum[i - 1] + arr[i]
    return prefix_sum

# Range Sum Query
def range_sum_query(prefix_sum, L, R):
    if L == 0:
        return prefix_sum[R]
    return prefix_sum[R] - prefix_sum[L - 1]`,
  exercises: [
    {
      prompt:
        'Implement the prefix sum array for a given array of numbers.',
      initialCode: `# Write your solution here
def prefix_sum_array(arr):
    `,
      solution: `def prefix_sum_array(arr):
    prefix_sum = [0] * len(arr)
    prefix_sum[0] = arr[0]
    for i in range(1, len(arr)):
        prefix_sum[i] = prefix_sum[i - 1] + arr[i]
    return prefix_sum`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Implement the range sum query using the prefix sum array.',
      initialCode: `# Write your solution here
def range_sum_query(prefix_sum, L, R):
    `,
      solution: `def range_sum_query(prefix_sum, L, R):
    if L == 0:
        return prefix_sum[R]
    return prefix_sum[R] - prefix_sum[L - 1]`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is true about prefix sum arrays?',
      options: [
        'They allow range sum queries in O(n) time.',
        'They allow range sum queries in O(1) time after an initial O(n) preprocessing step.',
        'They are only useful for sum queries.',
        'None of the above.',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. Prefix sum arrays allow range sum queries in O(1) time after an initial O(n) preprocessing step.',
        'This is correct. Prefix sum arrays allow range sum queries in O(1) time after an initial O(n) preprocessing step.',
        'This is incorrect. Prefix sum arrays can be used for other types of range queries as well.',
        'This is incorrect because the second option is correct.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const matrixBasicsData: LessonContent = {
  title: 'Understanding Matrices',
  content: `<p>
Matrices are essential in programming, data science, and mathematics. A matrix is a 2D array or grid of numbers, often represented as a list of lists in programming. 
Each element in a matrix can be accessed by its row and column indices, allowing for a wide range of operations including matrix addition, multiplication, transposition, and more.
</p>

<ul>
<li><strong>Matrix Representation:</strong> In programming, a matrix is represented as an array of arrays, where each inner array represents a row.</li>
<li><strong>Accessing Elements:</strong> To access an element in row <em>i</em> and column <em>j</em>, use <i>matrix[i][j]</i>.</li>
<li><strong>Matrix Operations:</strong> Operations on matrices include addition, subtraction, scalar multiplication, matrix multiplication, and transposition.</li>
<li><strong>Applications:</strong> Matrices are used in image processing, computer graphics, scientific computations, machine learning, and more.</li>
</ul>`,
  codeExample: `# Matrix creation
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Accessing an element
element = matrix[1][2]  # Gets the element in row 1, column 2 (value is 6)

# Matrix Transposition
def transpose(matrix):
    rows = len(matrix)
    cols = len(matrix[0])
    transposed = [[0] * rows for _ in range(cols)]
    for i in range(rows):
        for j in range(cols):
            transposed[j][i] = matrix[i][j]
    return transposed

# Scalar Multiplication
def scalar_multiply(matrix, scalar):
    return [[element * scalar for element in row] for row in matrix]

# Example usage
transposed_matrix = transpose(matrix)  # Transposes the matrix
scaled_matrix = scalar_multiply(matrix, 3)  # Multiplies every element by 3`,
  exercises: [
    {
      prompt:
        'Create a 2x3 matrix and write a function to add 2 to every element in the matrix.',
      initialCode: `# Write your solution here
matrix = [
    [1, 2, 3],
    [4, 5, 6]
]

def add_to_each(matrix, value):
    `,
      solution: `def add_to_each(matrix, value):
    return [[element + value for element in row] for row in matrix]

matrix = add_to_each(matrix, 2)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Write a function to calculate the transpose of a 3x2 matrix.',
      initialCode: `# Write your solution here
matrix = [
    [1, 2],
    [3, 4],
    [5, 6]
]

def transpose(matrix):
    `,
      solution: `def transpose(matrix):
    rows = len(matrix)
    cols = len(matrix[0])
    transposed = [[0] * rows for _ in range(cols)]
    for i in range(rows):
        for j in range(cols):
            transposed[j][i] = matrix[i][j]
    return transposed`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'What is the term for the matrix created by swapping the rows and columns of a given matrix?',
      options: ['Inverse', 'Determinant', 'Transpose', 'Symmetric Matrix'],
      correctAnswer: 2,
      explanations: [
        'The inverse is a different operation and exists only for square matrices under certain conditions.',
        'The determinant is a single number associated with a square matrix, not a transformation of the matrix.',
        'Correct. The transpose is obtained by swapping the rows and columns of the matrix.',
        'A symmetric matrix is one where the matrix is equal to its transpose, but it is not the same as performing a transposition.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'If you multiply a 2x3 matrix by a scalar 5, what is the resulting matrix?',
      options: [
        'A 2x3 matrix where each element is multiplied by 5',
        'A 2x3 matrix with each element squared',
        'A matrix with 5 rows and 3 columns',
        'A matrix with the same shape but with 5 added to each element',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct. Scalar multiplication results in each element of the matrix being multiplied by the scalar.',
        'This would be true if the operation was element-wise squaring, not scalar multiplication.',
        'The shape of the matrix remains the same; only the values are scaled by 5.',
        'Adding 5 to each element is different from multiplying by 5.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const matrixOperationsData: LessonContent = {
  title: 'Performing Operations on Matrix Rows and Columns',
  content: `<p>
Operations on matrix rows and columns are crucial for many mathematical and computational tasks. In matrix manipulation, row and column operations allow us to transform, scale, or even solve linear equations by applying operations like addition, subtraction, or scalar multiplication.
</p>

<ul>
<li><strong>Row Operations:</strong> Row operations include adding, subtracting, or multiplying each element of a row by a constant. They can also involve swapping rows, which is useful in solving systems of equations.</li>
<li><strong>Column Operations:</strong> Similar to row operations, column operations allow you to manipulate each element of a specific column. These operations are useful in data processing and transformations.</li>
<li><strong>Applications:</strong> Row and column operations are used in various fields such as linear algebra, machine learning, image processing, and scientific computing.</li>
</ul>`,
  codeExample: `# Sample matrix
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Row addition: Adds a value to each element of a specific row
def add_to_row(matrix, row, value):
    matrix[row] = [element + value for element in matrix[row]]
    return matrix

# Column addition: Adds a value to each element of a specific column
def add_to_column(matrix, col, value):
    for row in matrix:
        row[col] += value
    return matrix

# Row swap: Swaps two rows in a matrix
def swap_rows(matrix, row1, row2):
    matrix[row1], matrix[row2] = matrix[row2], matrix[row1]
    return matrix

# Example usage
matrix = add_to_row(matrix, 1, 5)  # Adds 5 to each element in row 1
matrix = add_to_column(matrix, 2, 3)  # Adds 3 to each element in column 2
matrix = swap_rows(matrix, 0, 2)  # Swaps row 0 and row 2`,
  exercises: [
    {
      prompt:
        'Write a function to multiply each element of a specified row by a given scalar value.',
      initialCode: `# Write your solution here
def multiply_row(matrix, row, scalar):
    `,
      solution: `def multiply_row(matrix, row, scalar):
    matrix[row] = [element * scalar for element in matrix[row]]
    return matrix`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Write a function to subtract 2 from each element in column 1 of a 3x3 matrix.',
      initialCode: `# Write your solution here
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

def subtract_from_column(matrix, col, value):
    `,
      solution: `def subtract_from_column(matrix, col, value):
    for row in matrix:
        row[col] -= value
    return matrix

matrix = subtract_from_column(matrix, 1, 2)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'What will the matrix look like if you add 2 to every element in row 1?',
      options: [
        'All elements in row 1 will be incremented by 2.',
        'Each element in row 1 will be multiplied by 2.',
        'Each element in column 1 will be incremented by 2.',
        'All elements in the matrix will be incremented by 2.',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct. Adding 2 to row 1 means only the elements in row 1 are incremented by 2.',
        'This would require multiplying each element by 2, not adding 2.',
        'Incrementing the column would affect only the specified column, not the row.',
        'Only elements in row 1 should be incremented, not the entire matrix.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'How can you swap row 0 and row 2 in a matrix?',
      options: [
        'matrix[0] += matrix[2]',
        'matrix[0], matrix[2] = matrix[2], matrix[0]',
        'matrix[0][0], matrix[2][0] = matrix[2][0], matrix[0][0]',
        'Use a nested loop to swap each element between row 0 and row 2.',
      ],
      correctAnswer: 1,
      explanations: [
        'Adding rows does not swap them; it alters their values instead.',
        'Correct. This Python syntax swaps the two rows directly.',
        'Swapping elements only at index 0 would swap a single element from each row, not the entire row.',
        'Although this would work, it is inefficient compared to directly swapping the rows.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const matrixTraversalData: LessonContent = {
  title: 'Matrix Traversal Patterns',
  content: `<p>
Matrix traversal is a common problem in computer science, where you need to visit each element of a matrix in a specific order. 
Different traversal patterns include <strong>spiral</strong>, <strong>diagonal</strong>, and <strong>zigzag</strong> traversals.
</p>

<ul>
<li><strong>Spiral Traversal:</strong> Visit elements in a spiral order, starting from the top-left corner and moving inward.</li>
<li><strong>Diagonal Traversal:</strong> Visit elements along the diagonals of the matrix.</li>
<li><strong>Zigzag Traversal:</strong> Visit elements in a zigzag pattern, alternating between rows or columns.</li>
</ul>

<p>
Understanding these traversal patterns can help you solve a variety of problems involving matrices.
</p>`,
  codeExample: `# Spiral Traversal
def spiral_traversal(matrix):
    result = []
    while matrix:
        result += matrix.pop(0)
        if matrix and matrix[0]:
            for row in matrix:
                result.append(row.pop())
        if matrix:
            result += matrix.pop()[::-1]
        if matrix and matrix[0]:
            for row in matrix[::-1]:
                result.append(row.pop(0))
    return result

# Diagonal Traversal
def diagonal_traversal(matrix):
    result = []
    for d in range(len(matrix) + len(matrix[0]) - 1):
        if d % 2 == 0:
            row = min(d, len(matrix) - 1)
            col = d - row
            while row >= 0 and col < len(matrix[0]):
                result.append(matrix[row][col])
                row -= 1
                col += 1
        else:
            col = min(d, len(matrix[0]) - 1)
            row = d - col
            while col >= 0 and row < len(matrix):
                result.append(matrix[row][col])
                row += 1
                col -= 1
    return result`,
  exercises: [
    {
      prompt:
        'Implement the spiral traversal of a matrix.',
      initialCode: `# Write your solution here
def spiral_traversal(matrix):
    `,
      solution: `def spiral_traversal(matrix):
    result = []
    while matrix:
        result += matrix.pop(0)
        if matrix and matrix[0]:
            for row in matrix:
                result.append(row.pop())
        if matrix:
            result += matrix.pop()[::-1]
        if matrix and matrix[0]:
            for row in matrix[::-1]:
                result.append(row.pop(0))
    return result`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Implement the diagonal traversal of a matrix.',
      initialCode: `# Write your solution here
def diagonal_traversal(matrix):
    `,
      solution: `def diagonal_traversal(matrix):
    result = []
    for d in range(len(matrix) + len(matrix[0]) - 1):
        if d % 2 == 0:
            row = min(d, len(matrix) - 1)
            col = d - row
            while row >= 0 and col < len(matrix[0]):
                result.append(matrix[row][col])
                row -= 1
                col += 1
        else:
            col = min(d, len(matrix[0]) - 1)
            row = d - col
            while col >= 0 and row < len(matrix):
                result.append(matrix[row][col])
                row += 1
                col -= 1
    return result`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is a common matrix traversal pattern?',
      options: [
        'Spiral Traversal',
        'Diagonal Traversal',
        'Zigzag Traversal',
        'All of the above',
      ],
      correctAnswer: 3,
      explanations: [
        'This is correct. Spiral Traversal is a common matrix traversal pattern.',
        'This is correct. Diagonal Traversal is a common matrix traversal pattern.',
        'This is correct. Zigzag Traversal is a common matrix traversal pattern.',
        'This is correct. All of the above are common matrix traversal patterns.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const matrixSearchData: LessonContent = {
  title: 'Matrix Search Algorithms',
  content: `<p>
Matrix search algorithms are used to efficiently search for elements in a matrix with specific properties, such as being sorted. 
Two common approaches are <strong>binary search</strong> and <strong>diagonal search</strong>.
</p>

<ul>
<li><strong>Binary Search:</strong> Efficiently search for an element in a sorted matrix by treating it as a flattened array.</li>
<li><strong>Diagonal Search:</strong> Start from the top-right or bottom-left corner and move towards the target element based on comparisons.</li>
</ul>

<p>
Understanding these search algorithms can help you solve problems involving sorted matrices efficiently.
</p>`,
  codeExample: `# Binary Search in Sorted Matrix
def binary_search_matrix(matrix, target):
    if not matrix or not matrix[0]:
        return False
    rows, cols = len(matrix), len(matrix[0])
    left, right = 0, rows * cols - 1
    while left <= right:
        mid = (left + right) // 2
        mid_element = matrix[mid // cols][mid % cols]
        if mid_element == target:
            return True
        elif mid_element < target:
            left = mid + 1
        else:
            right = mid - 1
    return False

# Diagonal Search in Sorted Matrix
def diagonal_search_matrix(matrix, target):
    if not matrix or not matrix[0]:
        return False
    row, col = 0, len(matrix[0]) - 1
    while row < len(matrix) and col >= 0:
        if matrix[row][col] == target:
            return True
        elif matrix[row][col] < target:
            row += 1
        else:
            col -= 1
    return False`,
  exercises: [
    {
      prompt:
        'Implement the binary search algorithm to search for an element in a sorted matrix.',
      initialCode: `# Write your solution here
def binary_search_matrix(matrix, target):
    `,
      solution: `def binary_search_matrix(matrix, target):
    if not matrix or not matrix[0]:
        return False
    rows, cols = len(matrix), len(matrix[0])
    left, right = 0, rows * cols - 1
    while left <= right:
        mid = (left + right) // 2
        mid_element = matrix[mid // cols][mid % cols]
        if mid_element == target:
            return True
        elif mid_element < target:
            left = mid + 1
        else:
            right = mid - 1
    return False`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Implement the diagonal search algorithm to search for an element in a sorted matrix.',
      initialCode: `# Write your solution here
def diagonal_search_matrix(matrix, target):
    `,
      solution: `def diagonal_search_matrix(matrix, target):
    if not matrix or not matrix[0]:
        return False
    row, col = 0, len(matrix[0]) - 1
    while row < len(matrix) and col >= 0:
        if matrix[row][col] == target:
            return True
        elif matrix[row][col] < target:
            row += 1
        else:
            col -= 1
    return False`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following algorithms can be used to search for an element in a sorted matrix?',
      options: [
        'Binary Search',
        'Diagonal Search',
        'Both of the above',
        'None of the above',
      ],
      correctAnswer: 2,
      explanations: [
        'This is correct. Binary Search can be used to search for an element in a sorted matrix.',
        'This is correct. Diagonal Search can be used to search for an element in a sorted matrix.',
        'This is correct. Both Binary Search and Diagonal Search can be used to search for an element in a sorted matrix.',
        'This is incorrect. Both Binary Search and Diagonal Search can be used to search for an element in a sorted matrix.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const kadaneAlgorithmData: LessonContent = {
  title: "Kadane's Algorithm",
  content: `<p>
Kadane's Algorithm is a well-known algorithm for finding the maximum sum subarray within a one-dimensional numeric array. 
It efficiently solves the problem by iterating through the array while keeping track of the maximum sum found so far.
</p>

<p>
The key idea is to maintain two variables: one to track the maximum sum ending at the current position (current_max), and another to track the overall maximum sum found (global_max).
</p>`,
  codeExample: `# Kadane's Algorithm
def kadane_algorithm(arr):
    current_max = global_max = arr[0]
    for num in arr[1:]:
        current_max = max(num, current_max + num)
        global_max = max(global_max, current_max)
    return global_max`,
  exercises: [
    {
      prompt:
        'Implement Kadane\'s Algorithm to find the maximum sum subarray in a given array of numbers.',
      initialCode: `# Write your solution here
def kadane_algorithm(arr):
    `,
      solution: `def kadane_algorithm(arr):
    current_max = global_max = arr[0]
    for num in arr[1:]:
        current_max = max(num, current_max + num)
        global_max = max(global_max, current_max)
    return global_max`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'What is the time complexity of Kadane\'s Algorithm?',
      options: [
        'O(n)',
        'O(n log n)',
        'O(n^2)',
        'O(1)',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. Kadane\'s Algorithm runs in O(n) time complexity.',
        'This is incorrect. Kadane\'s Algorithm does not run in O(n log n) time complexity.',
        'This is incorrect. Kadane\'s Algorithm does not run in O(n^2) time complexity.',
        'This is incorrect. Kadane\'s Algorithm does not run in O(1) time complexity.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const boyerMooreData: LessonContent = {
  title: 'Boyer-Moore Majority Vote',
  content: `<p>
The Boyer-Moore Majority Vote Algorithm is an efficient algorithm to find the majority element in an array, i.e., an element that appears more than n/2 times in an array of size n.
</p>

<p>
The algorithm works by maintaining a candidate for the majority element and a counter. It iterates through the array, updating the candidate and counter based on the current element.
</p>`,
  codeExample: `# Boyer-Moore Majority Vote Algorithm
def boyer_moore_majority_vote(arr):
    candidate = None
    count = 0
    for num in arr:
        if count == 0:
            candidate = num
            count = 1
        elif num == candidate:
            count += 1
        else:
            count -= 1
    return candidate`,
  exercises: [
    {
      prompt:
        'Implement the Boyer-Moore Majority Vote Algorithm to find the majority element in a given array of numbers.',
      initialCode: `# Write your solution here
def boyer_moore_majority_vote(arr):
    `,
      solution: `def boyer_moore_majority_vote(arr):
    candidate = None
    count = 0
    for num in arr:
        if count == 0:
            candidate = num
            count = 1
        elif num == candidate:
            count += 1
        else:
            count -= 1
    return candidate`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'What is the time complexity of the Boyer-Moore Majority Vote Algorithm?',
      options: [
        'O(n)',
        'O(n log n)',
        'O(n^2)',
        'O(1)',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The Boyer-Moore Majority Vote Algorithm runs in O(n) time complexity.',
        'This is incorrect. The Boyer-Moore Majority Vote Algorithm does not run in O(n log n) time complexity.',
        'This is incorrect. The Boyer-Moore Majority Vote Algorithm does not run in O(n^2) time complexity.',
        'This is incorrect. The Boyer-Moore Majority Vote Algorithm does not run in O(1) time complexity.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const stockPatternsData: LessonContent = {
  title: 'Stock Buy/Sell Patterns',
  content: `<p>
Stock Buy/Sell problems involve finding the best time to buy and sell stocks to maximize profit. 
These problems often involve analyzing an array of stock prices over time.
</p>

<p>
Common patterns include finding the maximum profit by making a single buy and sell, or by making multiple transactions.
</p>`,
  codeExample: `# Maximum Profit with One Transaction
def max_profit_one_transaction(prices):
    min_price = float('inf')
    max_profit = 0
    for price in prices:
        min_price = min(min_price, price)
        max_profit = max(max_profit, price - min_price)
    return max_profit

# Maximum Profit with Multiple Transactions
def max_profit_multiple_transactions(prices):
    max_profit = 0
    for i in range(1, len(prices)):
        if prices[i] > prices[i - 1]:
            max_profit += prices[i] - prices[i - 1]
    return max_profit`,
  exercises: [
    {
      prompt:
        'Implement the algorithm to find the maximum profit with one transaction in a given array of stock prices.',
      initialCode: `# Write your solution here
def max_profit_one_transaction(prices):
    `,
      solution: `def max_profit_one_transaction(prices):
    min_price = float('inf')
    max_profit = 0
    for price in prices:
        min_price = min(min_price, price)
        max_profit = max(max_profit, price - min_price)
    return max_profit`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Implement the algorithm to find the maximum profit with multiple transactions in a given array of stock prices.',
      initialCode: `# Write your solution here
def max_profit_multiple_transactions(prices):
    `,
      solution: `def max_profit_multiple_transactions(prices):
    max_profit = 0
    for i in range(1, len(prices)):
        if prices[i] > prices[i - 1]:
            max_profit += prices[i] - prices[i - 1]
    return max_profit`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'What is the time complexity of the algorithm to find the maximum profit with one transaction?',
      options: [
        'O(n)',
        'O(n log n)',
        'O(n^2)',
        'O(1)',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The algorithm to find the maximum profit with one transaction runs in O(n) time complexity.',
        'This is incorrect. The algorithm does not run in O(n log n) time complexity.',
        'This is incorrect. The algorithm does not run in O(n^2) time complexity.',
        'This is incorrect. The algorithm does not run in O(1) time complexity.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const subarrayProblemsData: LessonContent = {
  title: 'Subarray Problems',
  content: `<p>
Subarray problems involve finding subarrays within an array that meet certain criteria, such as having the maximum sum, minimum sum, or a specific length.
</p>

<p>
Common patterns include using prefix sums, sliding windows, and dynamic programming to solve these problems efficiently.
</p>`,
  codeExample: `# Maximum Subarray Sum (Kadane's Algorithm)
def max_subarray_sum(arr):
    current_max = global_max = arr[0]
    for num in arr[1:]:
        current_max = max(num, current_max + num)
        global_max = max(global_max, current_max)
    return global_max

# Minimum Subarray Sum
def min_subarray_sum(arr):
    current_min = global_min = arr[0]
    for num in arr[1:]:
        current_min = min(num, current_min + num)
        global_min = min(global_min, current_min)
    return global_min

# Subarray with Given Sum
def subarray_with_given_sum(arr, target):
    current_sum = 0
    start = 0
    for end in range(len(arr)):
        current_sum += arr[end]
        while current_sum > target:
            current_sum -= arr[start]
            start += 1
        if current_sum == target:
            return arr[start:end + 1]
    return None`,
  exercises: [
    {
      prompt:
        'Implement the algorithm to find the maximum subarray sum in a given array of numbers.',
      initialCode: `# Write your solution here
def max_subarray_sum(arr):
    `,
      solution: `def max_subarray_sum(arr):
    current_max = global_max = arr[0]
    for num in arr[1:]:
        current_max = max(num, current_max + num)
        global_max = max(global_max, current_max)
    return global_max`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Implement the algorithm to find the minimum subarray sum in a given array of numbers.',
      initialCode: `# Write your solution here
def min_subarray_sum(arr):
    `,
      solution: `def min_subarray_sum(arr):
    current_min = global_min = arr[0]
    for num in arr[1:]:
        current_min = min(num, current_min + num)
        global_min = min(global_min, current_min)
    return global_min`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Implement the algorithm to find a subarray with a given sum in a given array of numbers.',
      initialCode: `# Write your solution here
def subarray_with_given_sum(arr, target):
    `,
      solution: `def subarray_with_given_sum(arr, target):
    current_sum = 0
    start = 0
    for end in range(len(arr)):
        current_sum += arr[end]
        while current_sum > target:
            current_sum -= arr[start]
            start += 1
        if current_sum == target:
            return arr[start:end + 1]
    return None`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'What is the time complexity of the algorithm to find the maximum subarray sum?',
      options: [
        'O(n)',
        'O(n log n)',
        'O(n^2)',
        'O(1)',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The algorithm to find the maximum subarray sum runs in O(n) time complexity.',
        'This is incorrect. The algorithm does not run in O(n log n) time complexity.',
        'This is incorrect. The algorithm does not run in O(n^2) time complexity.',
        'This is incorrect. The algorithm does not run in O(1) time complexity.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
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

const mergingIntervalsData: LessonContent = {
  title: 'Working with Interval Arrays',
  content: `<p>
Interval arrays are arrays where each element represents a range or interval, usually defined by a start and end value. They are commonly used in algorithms dealing with time ranges, overlapping events, or any data that has a minimum and maximum boundary. Manipulating interval arrays often involves merging, finding intersections, or adding new intervals based on specific criteria.
</p>

<ul>
<li><strong>Merging Intervals:</strong> Combines overlapping or contiguous intervals into a single interval, which is useful in optimizing storage or simplifying data.</li>
<li><strong>Checking Overlap:</strong> Determines if two intervals overlap based on their start and end boundaries. This is essential in scheduling or conflict detection tasks.</li>
<li><strong>Sorting Intervals:</strong> Sorting intervals by start time helps in efficiently performing merge and overlap checks.</li>
</ul>`,
  codeExample: `# Sample list of intervals
intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]

# Merge overlapping intervals
def merge_intervals(intervals):
    intervals.sort(key=lambda x: x[0])  # Sort intervals by start time
    merged = []
    for interval in intervals:
        # If merged is empty or there's no overlap, append the interval
        if not merged or merged[-1][1] < interval[0]:
            merged.append(interval)
        else:
            # Merge overlapping intervals
            merged[-1][1] = max(merged[-1][1], interval[1])
    return merged

# Checking if two intervals overlap
def is_overlapping(interval1, interval2):
    return interval1[0] <= interval2[1] and interval2[0] <= interval1[1]

# Example usage
merged_intervals = merge_intervals(intervals)  # Output: [[1, 6], [8, 10], [15, 18]]
print(is_overlapping([1, 5], [4, 8]))         # Output: True
print(is_overlapping([1, 3], [4, 5]))         # Output: False`,
  exercises: [
    {
      prompt:
        'Write a function to add an interval to a list of non-overlapping intervals and merge if necessary.',
      initialCode: `# Write your solution here
intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]]
new_interval = [4, 8]

def insert_interval(intervals, new_interval):
    `,
      solution: `def insert_interval(intervals, new_interval):
    intervals.append(new_interval)
    intervals.sort(key=lambda x: x[0])
    merged = []
    for interval in intervals:
        if not merged or merged[-1][1] < interval[0]:
            merged.append(interval)
        else:
            merged[-1][1] = max(merged[-1][1], interval[1])
    return merged

result = insert_interval(intervals, new_interval)  # Output: [[1, 2], [3, 10], [12, 16]]`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Write a function that takes a list of intervals and returns only the intervals that do not overlap with a specified interval.',
      initialCode: `# Write your solution here
intervals = [[1, 3], [4, 6], [7, 9], [10, 12]]
specified_interval = [5, 8]

def non_overlapping_intervals(intervals, specified_interval):
    `,
      solution: `def non_overlapping_intervals(intervals, specified_interval):
    result = []
    for interval in intervals:
        if interval[1] < specified_interval[0] or interval[0] > specified_interval[1]:
            result.append(interval)
    return result

non_overlapping = non_overlapping_intervals(intervals, specified_interval)  # Output: [[1, 3], [10, 12]]`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following intervals overlaps with [2, 5]?',
      options: ['[1, 2]', '[6, 8]', '[4, 7]', '[8, 10]'],
      correctAnswer: 2,
      explanations: [
        'This interval ends right before the start of [2, 5], so they do not overlap.',
        'This interval starts after [2, 5] ends, so there is no overlap.',
        'Correct. This interval [4, 7] overlaps with [2, 5] as it starts before the end of [2, 5].',
        'This interval does not overlap with [2, 5] as it starts well after [2, 5] ends.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'What is the result of merging intervals [[1, 3], [2, 4], [5, 7], [6, 8]]?',
      options: [
        '[[1, 8]]',
        '[[1, 4], [5, 8]]',
        '[[1, 3], [2, 4], [5, 8]]',
        '[[1, 4], [6, 8]]',
      ],
      correctAnswer: 1,
      explanations: [
        'This would only happen if all intervals overlapped, which is not the case here.',
        'Correct. Intervals [1, 3] and [2, 4] merge to [1, 4], and intervals [5, 7] and [6, 8] merge to [5, 8].',
        'This answer does not merge overlapping intervals correctly.',
        'This answer leaves out the merged portion of the second interval set, which should include [5, 8].',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const arrayRearrangementData: LessonContent = {
  title: 'Complex Array Rearrangements',
  content: `<p>
Complex array rearrangements involve reorganizing elements in an array to meet specific criteria or patterns. 
These techniques are often used in advanced algorithms and data manipulation tasks.
</p>

<p>
Common techniques include:
</p>

<ul>
<li><strong>In-place Rearrangement:</strong> Rearranging elements within the array without using additional space.</li>
<li><strong>Cyclic Swaps:</strong> Using cyclic permutations to rearrange elements efficiently.</li>
<li><strong>Two-pointer Technique:</strong> Using two pointers to rearrange elements based on certain conditions.</li>
</ul>

<p>
Understanding these techniques can help you solve complex problems involving array reorganization efficiently.
</p>`,
  codeExample: `# In-place Rearrangement
def rearrange_in_place(arr):
    n = len(arr)
    for i in range(n):
        arr[i] += (arr[arr[i]] % n) * n
    for i in range(n):
        arr[i] //= n
    return arr

# Cyclic Swaps
def rearrange_cyclic(arr):
    n = len(arr)
    for i in range(n):
        if arr[i] >= 0:
            start = i
            value = arr[start]
            while start != value:
                next_index = arr[start]
                arr[start] = -(arr[next_index] + 1)
                start = next_index
            arr[start] = -(value + 1)
    for i in range(n):
        arr[i] = -arr[i] - 1
    return arr

# Two-pointer Technique
def rearrange_two_pointer(arr):
    left, right = 0, len(arr) - 1
    while left < right:
        while arr[left] % 2 == 0 and left < right:
            left += 1
        while arr[right] % 2 == 1 and left < right:
            right -= 1
        if left < right:
            arr[left], arr[right] = arr[right], arr[left]
            left += 1
            right -= 1
    return arr`,
  exercises: [
    {
      prompt:
        'Implement the in-place rearrangement algorithm to rearrange elements in an array based on their indices.',
      initialCode: `# Write your solution here
def rearrange_in_place(arr):
    `,
      solution: `def rearrange_in_place(arr):
    n = len(arr)
    for i in range(n):
        arr[i] += (arr[arr[i]] % n) * n
    for i in range(n):
        arr[i] //= n
    return arr`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Implement the cyclic swaps algorithm to rearrange elements in an array based on cyclic permutations.',
      initialCode: `# Write your solution here
def rearrange_cyclic(arr):
    `,
      solution: `def rearrange_cyclic(arr):
    n = len(arr)
    for i in range(n):
        if arr[i] >= 0:
            start = i
            value = arr[start]
            while start != value:
                next_index = arr[start]
                arr[start] = -(arr[next_index] + 1)
                start = next_index
            arr[start] = -(value + 1)
    for i in range(n):
        arr[i] = -arr[i] - 1
    return arr`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Implement the two-pointer technique to rearrange elements in an array such that all even numbers come before odd numbers.',
      initialCode: `# Write your solution here
def rearrange_two_pointer(arr):
    `,
      solution: `def rearrange_two_pointer(arr):
    left, right = 0, len(arr) - 1
    while left < right:
        while arr[left] % 2 == 0 and left < right:
            left += 1
        while arr[right] % 2 == 1 and left < right:
            right -= 1
        if left < right:
            arr[left], arr[right] = arr[right], arr[left]
            left += 1
            right -= 1
    return arr`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following techniques is used for in-place rearrangement of array elements?',
      options: [
        'Cyclic Swaps',
        'Two-pointer Technique',
        'Both of the above',
        'None of the above',
      ],
      correctAnswer: 2,
      explanations: [
        'This is correct. Cyclic Swaps can be used for in-place rearrangement.',
        'This is correct. The Two-pointer Technique can be used for in-place rearrangement.',
        'This is correct. Both Cyclic Swaps and the Two-pointer Technique can be used for in-place rearrangement.',
        'This is incorrect. Both Cyclic Swaps and the Two-pointer Technique can be used for in-place rearrangement.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const inPlaceModificationsData: LessonContent = {
  title: 'In-place Modifications',
  content: `<p>
In-place modifications are operations on data structures that do not use additional memory for a new data structure but instead modify the existing data structure directly. This is beneficial in optimizing both time and space, especially for large datasets.
</p>

<ul>
<li><strong>Swapping Elements:</strong> Useful in sorting and rearranging elements within an array without requiring extra space.</li>
<li><strong>Reversing Arrays:</strong> In-place reversal changes the order of elements without additional storage.</li>
<li><strong>Shifting Elements:</strong> Shifts elements left or right within the same array, often used in queue implementations.</li>
<li><strong>Removing Elements:</strong> Modifies the array to remove specified elements, often by shifting and resizing in-place.</li>
</ul>`,
  codeExample: `# Swapping two elements in an array
arr = [1, 2, 3, 4, 5]
arr[1], arr[3] = arr[3], arr[1]  # Swaps elements at indices 1 and 3

# Reversing an array in-place
def reverse_array(arr):
    left, right = 0, len(arr) - 1
    while left < right:
        arr[left], arr[right] = arr[right], arr[left]
        left += 1
        right -= 1

# Shifting elements to the left by one position in-place
def left_shift(arr):
    first = arr[0]
    for i in range(1, len(arr)):
        arr[i - 1] = arr[i]
    arr[-1] = first

# Removing all instances of a specified element in-place
def remove_element(arr, value):
    k = 0
    for i in range(len(arr)):
        if arr[i] != value:
            arr[k] = arr[i]
            k += 1
    return arr[:k]

# Example usage
arr = [1, 2, 3, 4, 5]
reverse_array(arr)         # Modifies arr to [5, 4, 3, 2, 1]
left_shift(arr)            # Shifts arr to [4, 3, 2, 1, 5]
remove_element(arr, 3)     # Removes 3, resulting in [4, 2, 1, 5]`,
  exercises: [
    {
      prompt:
        'Write a function to reverse an array in-place without using slicing or extra memory.',
      initialCode: `# Write your solution here
arr = [10, 20, 30, 40, 50]

def reverse_array(arr):
    `,
      solution: `def reverse_array(arr):
    left, right = 0, len(arr) - 1
    while left < right:
        arr[left], arr[right] = arr[right], arr[left]
        left += 1
        right -= 1

reverse_array(arr)  # Modifies arr to [50, 40, 30, 20, 10]`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Write a function to remove all occurrences of a specific element from an array in-place, returning the new length of the modified array.',
      initialCode: `# Write your solution here
arr = [3, 1, 3, 2, 4, 3, 5]
value = 3

def remove_element(arr, value):
    `,
      solution: `def remove_element(arr, value):
    k = 0
    for i in range(len(arr)):
        if arr[i] != value:
            arr[k] = arr[i]
            k += 1
    return arr[:k]  # Returns [1, 2, 4, 5]

new_length = len(remove_element(arr, 3))  # Returns 4, with arr modified in-place`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'What is the result of reversing the array [1, 2, 3, 4, 5] in-place?',
      options: [
        '[5, 4, 3, 2, 1]',
        '[1, 2, 3, 4, 5]',
        '[3, 4, 5, 1, 2]',
        '[2, 1, 4, 5, 3]',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct. Reversing in-place switches elements from both ends of the array.',
        'This is incorrect because reversing should change the order of elements.',
        'This is incorrect; this represents a rotation, not a reverse.',
        'This is incorrect; this swaps elements inconsistently, not a full reverse.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'After left-shifting the array [1, 2, 3, 4, 5] by one position, what will the array look like?',
      options: [
        '[2, 3, 4, 5, 1]',
        '[1, 3, 4, 5, 2]',
        '[5, 1, 2, 3, 4]',
        '[3, 4, 5, 1, 2]',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct. Left-shifting moves each element left and brings the first to the end.',
        'This answer incorrectly swaps the first and last element only.',
        'This answer represents a right shift, not a left shift.',
        'This answer performs an incorrect shifting pattern.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const elementRearrangementData: LessonContent = {
  title: 'Swapping and Rearranging Elements',
  content: `<p>
Swapping and rearranging elements are essential operations for organizing data in specific orders. These techniques are frequently used in sorting algorithms, partitioning arrays, and achieving efficient in-place transformations without additional memory usage.
</p>

<ul>
<li><strong>Basic Swapping:</strong> Directly exchanges two elements in an array by their indices. Useful for quick changes in order, such as during sorting.</li>
<li><strong>Rearranging with Conditions:</strong> Positions elements based on certain criteria, like moving all even numbers to the front.</li>
<li><strong>Partitioning:</strong> Separates elements into groups based on a pivot value, commonly used in quicksort.</li>
<li><strong>Cyclic Permutation:</strong> Rotates elements in cycles, rearranging multiple elements in a sequence.</li>
</ul>`,
  codeExample: `# Basic element swap
arr = [1, 2, 3, 4]
arr[0], arr[3] = arr[3], arr[0]  # Swaps elements at indices 0 and 3

# Partitioning by even/odd condition
def partition_even_odd(arr):
    left, right = 0, len(arr) - 1
    while left < right:
        while left < right and arr[left] % 2 == 0:
            left += 1
        while left < right and arr[right] % 2 != 0:
            right -= 1
        if left < right:
            arr[left], arr[right] = arr[right], arr[left]

# Cyclic permutation for rotating elements
def rotate_right(arr, steps):
    steps = steps % len(arr)  # Handle larger-than-array-length steps
    arr[:] = arr[-steps:] + arr[:-steps]

# Example usage
arr = [1, 2, 3, 4, 5]
partition_even_odd(arr)       # Rearranges arr to place evens on left and odds on right
rotate_right(arr, 2)          # Rotates arr by 2 steps to the right`,
  exercises: [
    {
      prompt:
        'Write a function to swap the first and last elements of an array.',
      initialCode: `# Write your solution here
arr = [10, 20, 30, 40, 50]

def swap_first_last(arr):
    `,
      solution: `def swap_first_last(arr):
    if len(arr) > 1:
        arr[0], arr[-1] = arr[-1], arr[0]

arr = [10, 20, 30, 40, 50]
swap_first_last(arr)  # Modifies arr to [50, 20, 30, 40, 10]`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Write a function to rearrange an array to place all negative numbers at the beginning, without changing the relative order of positive numbers.',
      initialCode: `# Write your solution here
arr = [3, -1, 4, -2, 5, -3]

def move_negatives(arr):
    `,
      solution: `def move_negatives(arr):
    k = 0
    for i in range(len(arr)):
        if arr[i] < 0:
            arr.insert(k, arr.pop(i))
            k += 1

arr = [3, -1, 4, -2, 5, -3]
move_negatives(arr)  # Modifies arr to [-1, -2, -3, 3, 4, 5]`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following swaps the elements at indices 1 and 3 in an array?',
      options: [
        'arr[1] = arr[3]',
        'arr[1], arr[3] = arr[3], arr[1]',
        'arr[1] == arr[3]',
        'swap(arr[1], arr[3])',
      ],
      correctAnswer: 1,
      explanations: [
        'This only assigns the value at arr[3] to arr[1] without swapping.',
        'Correct. This swaps elements at indices 1 and 3.',
        'This checks equality but does not swap values.',
        'This function call would require a custom "swap" function, which does not exist by default in Python.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'What is the result of partitioning [1, 2, 3, 4, 5, 6] by even/odd using in-place rearrangement?',
      options: [
        '[2, 4, 6, 1, 3, 5]',
        '[1, 2, 3, 4, 5, 6]',
        '[6, 4, 2, 5, 3, 1]',
        '[3, 6, 1, 5, 4, 2]',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct. This arranges all even numbers to the left and all odd numbers to the right.',
        'This is incorrect; no rearrangement was done.',
        'This is incorrect; even and odd positions are incorrect.',
        'This is incorrect; rearrangement does not follow even/odd partitioning.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const spaceOptimizationData: LessonContent = {
  title: 'Space Optimization Techniques',
  content: `<p>
Space optimization is crucial for improving the efficiency of algorithms, especially when dealing with large datasets. 
One common technique is <strong>in-place operations</strong>, which modify the input data structure without using additional space.
</p>

<ul>
<li><strong>In-place Sorting:</strong> Sorting algorithms that modify the input array without using additional space.</li>
<li><strong>In-place Reversal:</strong> Reversing an array or list without using additional space.</li>
<li><strong>In-place Rotation:</strong> Rotating an array or list without using additional space.</li>
</ul>

<p>
Understanding these techniques can help you write more efficient algorithms with lower space complexity.
</p>`,
  codeExample: `# In-place Sorting (Bubble Sort)
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

# In-place Reversal
def reverse_array(arr):
    left, right = 0, len(arr) - 1
    while left < right:
        arr[left], arr[right] = arr[right], arr[left]
        left += 1
        right -= 1
    return arr

# In-place Rotation
def rotate_array(arr, k):
    n = len(arr)
    k = k % n
    reverse_array(arr)
    reverse_array(arr[:k])
    reverse_array(arr[k:])
    return arr`,
  exercises: [
    {
      prompt:
        'Implement the in-place bubble sort algorithm to sort an array of numbers.',
      initialCode: `# Write your solution here
def bubble_sort(arr):
    `,
      solution: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Implement the in-place reversal of an array of numbers.',
      initialCode: `# Write your solution here
def reverse_array(arr):
    `,
      solution: `def reverse_array(arr):
    left, right = 0, len(arr) - 1
    while left < right:
        arr[left], arr[right] = arr[right], arr[left]
        left += 1
        right -= 1
    return arr`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Implement the in-place rotation of an array of numbers by k positions.',
      initialCode: `# Write your solution here
def rotate_array(arr, k):
    `,
      solution: `def rotate_array(arr, k):
    n = len(arr)
    k = k % n
    reverse_array(arr)
    reverse_array(arr[:k])
    reverse_array(arr[k:])
    return arr`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is an example of an in-place operation?',
      options: [
        'Sorting an array using Bubble Sort',
        'Reversing an array',
        'Rotating an array',
        'All of the above',
      ],
      correctAnswer: 3,
      explanations: [
        'This is correct. Sorting an array using Bubble Sort is an in-place operation.',
        'This is correct. Reversing an array is an in-place operation.',
        'This is correct. Rotating an array is an in-place operation.',
        'This is correct. All of the above are examples of in-place operations.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const multiArrayOperationsData: LessonContent = {
  title: 'Operations on Multi-dimensional Arrays',
  content: `<p>
Multi-dimensional arrays, or matrices, are arrays with more than one dimension, commonly used to represent grid-like data structures. Operations on these arrays include accessing elements, iterating through rows and columns, performing element-wise operations, and reshaping arrays.
</p>

<ul>
<li><strong>Accessing Elements:</strong> Retrieve elements using row and column indices in 2D arrays or multiple indices in higher dimensions.</li>
<li><strong>Row and Column Operations:</strong> Perform operations across entire rows or columns, like summing elements or scaling values.</li>
<li><strong>Matrix Transposition:</strong> Swap rows with columns, often used in linear algebra and data transformations.</li>
<li><strong>Reshaping Arrays:</strong> Change the dimensions of arrays, such as converting a 1D array into a 2D matrix.</li>
</ul>`,
  codeExample: `# Initializing a 2D array
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Accessing elements
print(matrix[0][2])  # Outputs 3, element at first row, third column

# Row-wise and column-wise operations
row_sum = [sum(row) for row in matrix]  # Sums each row: [6, 15, 24]
col_sum = [sum(row[i] for row in matrix) for i in range(len(matrix[0]))]  # Sums each column: [12, 15, 18]

# Matrix transposition
transpose = [[matrix[j][i] for j in range(len(matrix))] for i in range(len(matrix[0]))]
# Transpose of matrix: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]

# Reshaping a 1D array to a 2D matrix
def reshape(arr, rows, cols):
    if len(arr) != rows * cols:
        return "Invalid dimensions"
    return [arr[i*cols:(i+1)*cols] for i in range(rows)]

# Example usage
arr = [1, 2, 3, 4, 5, 6]
reshaped_matrix = reshape(arr, 2, 3)  # Creates [[1, 2, 3], [4, 5, 6]]`,
  exercises: [
    {
      prompt:
        'Write a function to compute the sum of elements in each column of a 2D matrix.',
      initialCode: `# Write your solution here
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

def column_sums(matrix):
    `,
      solution: `def column_sums(matrix):
    return [sum(row[i] for row in matrix) for i in range(len(matrix[0]))]

column_sums(matrix)  # Returns [12, 15, 18]`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Write a function to transpose a 2D matrix.',
      initialCode: `# Write your solution here
matrix = [
    [1, 2, 3],
    [4, 5, 6]
]

def transpose(matrix):
    `,
      solution: `def transpose(matrix):
    return [[matrix[j][i] for j in range(len(matrix))] for i in range(len(matrix[0]))]

transpose(matrix)  # Returns [[1, 4], [2, 5], [3, 6]]`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'What is the result of accessing matrix[1][2] in the following matrix: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]?',
      options: ['3', '5', '6', '8'],
      correctAnswer: 2,
      explanations: [
        'This is incorrect; 3 is at matrix[0][2].',
        'This is incorrect; 5 is at matrix[1][1].',
        'Correct. The element at matrix[1][2] is 6.',
        'This is incorrect; 8 is at matrix[2][1].',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'What does the transpose of the matrix [[1, 2], [3, 4], [5, 6]] look like?',
      options: [
        '[[1, 3, 5], [2, 4, 6]]',
        '[[1, 2], [3, 4], [5, 6]]',
        '[[2, 4, 6], [1, 3, 5]]',
        '[[5, 6], [1, 2], [3, 4]]',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct. Transposing swaps rows with columns.',
        'This is incorrect; it is the original matrix without transposition.',
        'This is incorrect; transposition does not alter element values.',
        'This is incorrect; transposition swaps rows with columns, not the order of elements.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const multiArrayPatternsData: LessonContent = {
  title: 'Common Multidimensional Patterns',
  content: `<p>
Multidimensional patterns involve solving problems that require operations on multiple dimensions, such as matrices or higher-dimensional arrays. 
Understanding these patterns can help you solve complex problems efficiently.
</p>

<ul>
<li><strong>Matrix Operations:</strong> Operations such as matrix addition, subtraction, and multiplication.</li>
<li><strong>Multi-dimensional Array Traversal:</strong> Traversing arrays with more than two dimensions.</li>
<li><strong>Dynamic Programming with Multidimensional Arrays:</strong> Using dynamic programming to solve problems involving multiple dimensions.</li>
</ul>

<p>
Mastering these patterns can significantly improve your problem-solving skills in various domains.
</p>`,
  codeExample: `# Matrix Addition
def matrix_addition(A, B):
    return [[A[i][j] + B[i][j] for j in range(len(A[0]))] for i in range(len(A))]

# Multi-dimensional Array Traversal
def traverse_3d_array(arr):
    for i in range(len(arr)):
        for j in range(len(arr[i])):
            for k in range(len(arr[i][j])):
                print(arr[i][j][k])

# Dynamic Programming with Multidimensional Arrays
def knapsack_problem(weights, values, capacity):
    n = len(weights)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]
    for i in range(1, n + 1):
        for w in range(capacity + 1):
            if weights[i - 1] <= w:
                dp[i][w] = max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1])
            else:
                dp[i][w] = dp[i - 1][w]
    return dp[n][capacity]`,
  exercises: [
    {
      prompt:
        'Implement the matrix addition algorithm for two matrices.',
      initialCode: `# Write your solution here
def matrix_addition(A, B):
    `,
      solution: `def matrix_addition(A, B):
    return [[A[i][j] + B[i][j] for j in range(len(A[0]))] for i in range(len(A))]`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Implement the traversal of a 3D array.',
      initialCode: `# Write your solution here
def traverse_3d_array(arr):
    `,
      solution: `def traverse_3d_array(arr):
    for i in range(len(arr)):
        for j in range(len(arr[i])):
            for k in range(len(arr[i][j])):
                print(arr[i][j][k])`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Implement the dynamic programming solution for the knapsack problem using a multidimensional array.',
      initialCode: `# Write your solution here
def knapsack_problem(weights, values, capacity):
    `,
      solution: `def knapsack_problem(weights, values, capacity):
    n = len(weights)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]
    for i in range(1, n + 1):
        for w in range(capacity + 1):
            if weights[i - 1] <= w:
                dp[i][w] = max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1])
            else:
                dp[i][w] = dp[i - 1][w]
    return dp[n][capacity]`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is a common problem involving multidimensional patterns?',
      options: [
        'Matrix Addition',
        'Knapsack Problem',
        'Both of the above',
        'None of the above',
      ],
      correctAnswer: 2,
      explanations: [
        'This is correct. Matrix Addition is a common problem involving multidimensional patterns.',
        'This is correct. The Knapsack Problem can be solved using multidimensional arrays.',
        'This is correct. Both Matrix Addition and the Knapsack Problem involve multidimensional patterns.',
        'This is incorrect. Both Matrix Addition and the Knapsack Problem involve multidimensional patterns.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const arrayLessons: Record<string, LessonContent> = {
  'array-concepts': arrayConceptsData,
  'array-complexity': arrayComplexityData,
  'array-initialization': arrayInitializationData,
  'array-access-modification': arrayAccessModificationData,
  'array-iteration': arrayIteration,
  'array-insert-delete': arrayInsertionDeletionData,
  'array-searching': arraySearchingData,
  'array-slicing': arraySlicingData,
  'array-concatenation': arrayConcatenationData,
  'array-transformations': arrayTransformationsData,
  'basic-sorting': basicSortingData,
  'sorting-analysis': sortingAnalysisData,
  'builtin-sorting': builtInSortingData,
  'custom-sorting': customSortingData,
  'partial-sorting': partialSortingData,
  'two-pointer-concept': twoPointerConceptData,
  'two-pointer-problems': twoPointerProblemsData,
  'dutch-national-flag': dutchNationalFlagData,
  'sliding-window-concept': slidingWindowConceptData,
  'sliding-window-types': slidingWindowTypesData,
  'sliding-window-optimization': slidingWindowOptimizationData,
  'prefix-sum-concept': prefixSumConceptData,
  'difference-array': differenceArrayData,
  'range-queries': rangeQueriesData,
  'matrix-basics': matrixBasicsData,
  'matrix-operations': matrixOperationsData,
  'matrix-traversal': matrixTraversalData,
  'matrix-search': matrixSearchData,
  'kadane-algorithm': kadaneAlgorithmData,
  'boyer-moore': boyerMooreData,
  'stock-patterns': stockPatternsData,
  'subarray-problems': subarrayProblemsData,
  'array-rotation': arrayRotationData,
  'merging-intervals': mergingIntervalsData,
  'array-rearrangement': arrayRearrangementData,
  'in-place-modifications': inPlaceModificationsData,
  'element-rearrangement': elementRearrangementData,
  'space-optimization': spaceOptimizationData,
  'multi-array-operations': multiArrayOperationsData,
  'multi-array-patterns': multiArrayPatternsData,
};

export const arrayLessonsTab: LessonsTab = {
  curriculum: arrayCurriculum,
  lessons: arrayLessons,
};
