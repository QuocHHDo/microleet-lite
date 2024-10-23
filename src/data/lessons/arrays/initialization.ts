import { Lesson } from '../../../common/commonLesson';

export const arrayInitializationLessons: Lesson[] = [
  {
    title: 'Basic Array Creation',
    content: `Arrays are foundational data structures that store elements in contiguous memory locations. In Python, arrays are typically implemented as lists. Let's explore the fundamental ways to create and initialize arrays:

Key Concepts:
1. Empty Arrays
2. Arrays with Initial Values
3. Type Homogeneity vs. Heterogeneity
4. Memory Allocation

Remember: In Python, lists are dynamic arrays that can grow or shrink as needed.`,
    codeExample: `# Empty array creation
empty_list = []
empty_list_constructor = list()

# Initialize with values
numbers = [1, 2, 3, 4, 5]
mixed_types = [1, "hello", 3.14, True]  # Python lists can store different types

# Check array properties
print(len(numbers))  # Length: 5
print(type(numbers))  # Type: <class 'list'>
print(numbers[0])    # First element: 1`,
    exercise: {
      prompt:
        'Create three different arrays: an empty array, an array containing numbers 1 through 5, and an array with three strings of your choice. Store them in variables named empty_arr, number_arr, and string_arr respectively.',
      initialCode: `# Create your arrays here
empty_arr = 
number_arr = 
string_arr = `,
      solution: `# Create your arrays here
empty_arr = []
number_arr = [1, 2, 3, 4, 5]
string_arr = ["apple", "banana", "orange"]`,
    },
    quiz: {
      question:
        'Which of the following correctly creates an empty array in Python?',
      options: ['array()', '[]', 'new Array()', 'makeArray()'],
      correctAnswer: 1,
    },
  },
  {
    title: 'Array Initialization Techniques',
    content: `Beyond basic creation, Python offers several powerful techniques for initializing arrays with specific patterns or values:

1. List Comprehension
2. Repeated Elements
3. Range Conversion
4. Sequence Unpacking
5. List Extension

These techniques can make your code more concise and efficient when creating arrays with specific patterns.`,
    codeExample: `# List comprehension
squares = [x**2 for x in range(5)]    # [0, 1, 4, 9, 16]
evens = [x for x in range(10) if x % 2 == 0]  # [0, 2, 4, 6, 8]

# Repeated elements
zeros = [0] * 5      # [0, 0, 0, 0, 0]
repeated = ["A"] * 3 # ["A", "A", "A"]

# Range conversion
range_list = list(range(5))    # [0, 1, 2, 3, 4]
range_custom = list(range(2, 8, 2))  # [2, 4, 6]

# Sequence unpacking
letters = [*"Python"]  # ['P', 'y', 't', 'h', 'o', 'n']
combined = [*range(3), *"ABC"]  # [0, 1, 2, 'A', 'B', 'C']`,
    exercise: {
      prompt:
        'Using list comprehension, create an array containing the squares of odd numbers from 1 to 10 (inclusive).',
      initialCode: '# Create array of squares of odd numbers\nodd_squares = ',
      solution:
        '# Create array of squares of odd numbers\nodd_squares = [x**2 for x in range(1, 11) if x % 2 != 0]',
    },
    quiz: {
      question: 'What is the output of [1, 2, 3] * 2?',
      options: [
        '[2, 4, 6]',
        '[1, 2, 3, 1, 2, 3]',
        '[1, 1, 2, 2, 3, 3]',
        "Error: can't multiply lists",
      ],
      correctAnswer: 1,
    },
  },
  {
    title: 'Multi-dimensional Arrays',
    content: `Multi-dimensional arrays (nested lists in Python) are crucial for representing matrices, grids, and complex data structures. Key aspects include:

1. Creating 2D and 3D arrays
2. Understanding row-major vs column-major order
3. Accessing and modifying nested elements
4. Common initialization patterns for matrices

Remember: Python doesn't have true multi-dimensional arrays - they're implemented as lists of lists.`,
    codeExample: `# Creating 2D arrays
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# List comprehension for 2D arrays
grid = [[0 for x in range(3)] for y in range(3)]

# Creating 3D arrays
cube = [[[0 for x in range(3)] for y in range(3)] for z in range(3)]

# Accessing elements
element = matrix[1][2]  # Returns 6

# Modifying elements
matrix[0][0] = 10  # Changes top-left element to 10

# Initializing with specific patterns
diagonal = [[1 if i == j else 0 for j in range(3)] for i in range(3)]`,
    exercise: {
      prompt:
        'Create a 3x3 identity matrix (1s on the diagonal, 0s elsewhere) using list comprehension.',
      initialCode: '# Create 3x3 identity matrix\nidentity_matrix = ',
      solution:
        '# Create 3x3 identity matrix\nidentity_matrix = [[1 if i == j else 0 for j in range(3)] for i in range(3)]',
    },
    quiz: {
      question:
        'What is the correct way to create a 2x2 matrix filled with zeros in Python?',
      options: [
        '[[0, 0], [0, 0]]',
        'array([[0, 0], [0, 0]])',
        'zeros(2, 2)',
        'make_matrix(2, 2, 0)',
      ],
      correctAnswer: 0,
    },
  },
  {
    title: 'Array Initialization Best Practices',
    content: `When initializing arrays, following best practices ensures efficient and maintainable code:

1. Memory Considerations
   - Preallocate when size is known
   - Avoid growing arrays in loops

2. Performance Optimization
   - Use appropriate initialization method
   - Consider memory layout for large arrays

3. Code Readability
   - Clear initialization patterns
   - Descriptive variable names
   - Appropriate comments for complex patterns

4. Common Pitfalls
   - Shallow vs deep copying
   - Reference sharing in nested structures
   - Memory leaks in large arrays`,
    codeExample: `# BAD: Growing array in loop
bad_approach = []
for i in range(1000):
    bad_approach.append(i)  # Inefficient

# GOOD: List comprehension
good_approach = [i for i in range(1000)]  # Efficient

# BAD: Shallow copy of 2D array
original = [[0] * 3] * 3  # Creates shared references!

# GOOD: Deep copy of 2D array
correct = [[0 for _ in range(3)] for _ in range(3)]

# Memory-efficient initialization
from array import array  # For homogeneous numeric arrays
numbers = array('i', range(1000))  # More memory efficient than list

# Clear initialization pattern
board = [
    ['_' for _ in range(8)]  # Chess board initialization
    for _ in range(8)
]`,
    exercise: {
      prompt:
        'Initialize a 3x3 matrix where each element is the sum of its row and column indices. Use list comprehension and ensure proper deep copying.',
      initialCode:
        '# Create matrix where element at [i][j] = i + j\nsum_matrix = ',
      solution:
        '# Create matrix where element at [i][j] = i + j\nsum_matrix = [[i + j for j in range(3)] for i in range(3)]',
    },
    quiz: {
      question: "What's wrong with initializing a 2D array as [[0] * 3] * 3?",
      options: [
        "It's too verbose",
        "It's inefficient",
        'It creates shared references between rows',
        'It only works with zeros',
      ],
      correctAnswer: 2,
    },
  },
];

export default arrayInitializationLessons;
