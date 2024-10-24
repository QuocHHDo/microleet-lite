import { Curriculum, LessonContent, LessonsTab } from "@/common/commonLesson";

const arrayCurriculum: Curriculum = {
  title: 'Array Lessons Curriculum',
  description:
    'A comprehensive guide to mastering array operations and algorithms',
  sections: [
    {
      id: 1,
      title: 'Array Basics',
      topics: [
        {
          id: 'array-initialization',
          title: 'Defining and Initializing Arrays',
          description:
            'Learn different ways to create and initialize arrays in Python',
        },
        {
          id: 'array-access-modification',
          title: 'Accessing and Modifying Array Elements',
          description: 'Understanding array indexing and element modification',
        },
        {
          id: 'array-iteration',
          title: 'Iterating Through Arrays',
          description: 'Different methods to traverse array elements',
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
        },
        {
          id: 'array-searching',
          title: 'Searching',
          description: 'Techniques for finding elements in arrays',
        },
        {
          id: 'array-slicing',
          title: 'Array Slicing',
          description: 'Working with array segments',
        },
        {
          id: 'array-concatenation',
          title: 'Concatenation and Merging Arrays',
          description: 'Combining multiple arrays',
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
        },
        {
          id: 'builtin-sorting',
          title: 'Built-in Sorting Functions',
          description: "Using Python's built-in sorting capabilities",
        },
        {
          id: 'custom-sorting',
          title: 'Sorting by Custom Conditions',
          description: 'Implementing custom sorting logic',
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
        },
        {
          id: 'two-pointer-problems',
          title: 'Common Two-pointer Problems',
          description: 'Solving problems using two-pointer technique',
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
        },
        {
          id: 'sliding-window-types',
          title: 'Fixed and Dynamic Sliding Windows',
          description: 'Different types of sliding window approaches',
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
        },
        {
          id: 'difference-array',
          title: 'Difference Array',
          description: 'Working with difference arrays',
        },
      ],
    },
    {
      id: 7,
      title: 'Matrix as 2D Arrays',
      topics: [
        {
          id: 'matrix-basics',
          title: 'Understanding Matrices',
          description: 'Basics of working with 2D arrays',
        },
        {
          id: 'matrix-operations',
          title: 'Row-wise and Column-wise Operations',
          description: 'Performing operations on matrix rows and columns',
        },
      ],
    },
    {
      id: 8,
      title: 'Advanced Array Manipulations',
      topics: [
        {
          id: 'array-rotation',
          title: 'Array Rotation',
          description: 'Techniques for rotating array elements',
        },
        {
          id: 'merging-intervals',
          title: 'Merging Intervals',
          description: 'Working with interval arrays',
        },
      ],
    },
    {
      id: 9,
      title: 'In-place Operations',
      topics: [
        {
          id: 'in-place-modifications',
          title: 'In-place Modifications',
          description: 'Modifying arrays without extra space',
        },
        {
          id: 'element-rearrangement',
          title: 'Swapping and Rearranging Elements',
          description: 'Techniques for rearranging array elements',
        },
      ],
    },
    {
      id: 10,
      title: 'Multidimensional Arrays',
      topics: [
        {
          id: 'multi-array-operations',
          title: 'Working with Multidimensional Arrays',
          description: 'Operations on multi-dimensional arrays',
        },
      ],
    },
  ],
} as const;



// Map to store lesson content
const arrayLessons: Record<string, LessonContent> = {
  'array-initialization': {
    title: 'Defining and Initializing Arrays',
    content: `
Arrays are fundamental data structures that store collections of elements in contiguous memory locations. In Python, arrays are typically implemented using lists, which can hold elements of different types and dynamically resize. There are several ways to initialize arrays, depending on your needs:

1. <h1>Empty array initialization</h1>: Used when you plan to populate the array later.
2. Array initialization with values: Useful when you know the elements beforehand.
3. Array initialization with repeated elements: Handy for creating arrays filled with default values.
4. List comprehension: A powerful tool for generating arrays based on logic or transformations.
5. Array initialization from other sequences: Convert tuples, ranges, or other iterable sequences to arrays.`,
    codeExample: `# Empty array
empty_array = []

# Array with initial values
numbers = [1, 2, 3, 4, 5]
mixed_types = [1, "hello", 3.14, True]

# Array with repeated elements
zeros = [0] * 5  # Creates [0, 0, 0, 0, 0]

# List comprehension - useful for generating arrays dynamically
squares = [x**2 for x in range(5)]  # Creates [0, 1, 4, 9, 16]

# Converting other sequences into arrays
from_tuple = list((1, 2, 3))
from_range = list(range(5))  # Creates [0, 1, 2, 3, 4]

# Further Examples:

# Using list comprehension with conditions
even_numbers = [x for x in range(10) if x % 2 == 0]  # Creates [0, 2, 4, 6, 8]`,
    exercise: {
      prompt:
        'Create an array of 10 elements, each initialized to the value None. Use list comprehension to create an array of the first 5 cube numbers.',
      initialCode: `# Write your solution here
none_array = 
cube_numbers = `,
      solution: `none_array = [None] * 10
cube_numbers = [x**3 for x in range(1, 6)]`,
    },
    quiz: {
      question:
        'Which of the following is the correct way to create a list of three repeated True values in Python?',
      options: [
        'list(True, True, True)',
        '[True] * 3',
        'list.repeat(True, 3)',
        'list(repeat(True, 3))',
      ],
      correctAnswer: 1,
    },
  },
  // Add other lessons here as needed
};

export const arrayLessonsTab: LessonsTab = {
  curriculum: arrayCurriculum,
  lessons: arrayLessons
}