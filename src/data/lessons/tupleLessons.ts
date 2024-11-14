import { Difficulty } from '@/common/commonConcept';
import { Curriculum, LessonContent, LessonsTab } from '@/common/commonLesson';

const tupleCurriculum: Curriculum = {
  title: 'Tuple Curriculum',
  description:
    'A comprehensive guide to mastering tuple operations and their applications',
  sections: [
    {
      id: 1,
      title: 'Tuple Fundamentals',
      topics: [
        {
          id: 'tuple-basics',
          title: 'Introduction to Tuples',
          description:
            'Understanding what tuples are and their immutable nature',
        },
        {
          id: 'tuple-creation',
          title: 'Creating and Initializing Tuples',
          description: 'Different ways to define and create tuples in Python',
        },
        {
          id: 'tuple-vs-lists',
          title: 'Tuples vs Lists',
          description: 'Understanding key differences and when to use each',
        },
      ],
    },
    {
      id: 2,
      title: 'Basic Tuple Operations',
      topics: [
        {
          id: 'tuple-accessing',
          title: 'Accessing Tuple Elements',
          description: 'Indexing and accessing elements in tuples',
        },
        {
          id: 'tuple-unpacking',
          title: 'Tuple Unpacking',
          description: 'Destructuring and unpacking tuple elements',
        },
        {
          id: 'tuple-methods',
          title: 'Built-in Tuple Methods',
          description:
            'Understanding count(), index(), and other tuple methods',
        },
      ],
    },
    {
      id: 3,
      title: 'Tuple Applications',
      topics: [
        {
          id: 'multiple-returns',
          title: 'Multiple Return Values',
          description:
            'Using tuples for returning multiple values from functions',
        },
        {
          id: 'tuple-as-key',
          title: 'Tuples as Dictionary Keys',
          description: 'Utilizing tuples as immutable dictionary keys',
        },
        {
          id: 'named-tuples',
          title: 'Named Tuples',
          description: 'Working with collections.namedtuple for readable code',
        },
      ],
    },
    {
      id: 4,
      title: 'Advanced Tuple Concepts',
      topics: [
        {
          id: 'tuple-performance',
          title: 'Performance Considerations',
          description: 'Understanding memory usage and performance benefits',
        },
        {
          id: 'nested-tuples',
          title: 'Nested Tuples',
          description: 'Working with tuples within tuples',
        },
        {
          id: 'tuple-conversion',
          title: 'Type Conversion',
          description: 'Converting between tuples and other data structures',
        },
      ],
    },
    {
      id: 5,
      title: 'Tuple Algorithms',
      topics: [
        {
          id: 'tuple-sorting',
          title: 'Sorting Tuples',
          description: 'Techniques for sorting lists of tuples',
        },
        {
          id: 'tuple-comparison',
          title: 'Tuple Comparison',
          description: 'Understanding how tuples are compared and ordered',
        },
      ],
    },
    {
      id: 6,
      title: 'Common Tuple Patterns',
      topics: [
        {
          id: 'coordinate-systems',
          title: 'Coordinate Systems',
          description: 'Using tuples for representing points and coordinates',
        },
        {
          id: 'state-representation',
          title: 'State Representation',
          description: 'Representing state and transitions using tuples',
        },
      ],
    },
    {
      id: 7,
      title: 'Tuple Optimization',
      topics: [
        {
          id: 'memory-efficiency',
          title: 'Memory Optimization',
          description: 'Techniques for efficient tuple usage in large programs',
        },
        {
          id: 'tuple-caching',
          title: 'Tuple Caching',
          description: 'Understanding tuple internals and caching behavior',
        },
      ],
    },
    {
      id: 8,
      title: 'Tuples in Data Processing',
      topics: [
        {
          id: 'data-aggregation',
          title: 'Data Aggregation',
          description: 'Using tuples for grouping and aggregating data',
        },
        {
          id: 'tuple-streams',
          title: 'Processing Tuple Streams',
          description: 'Working with streams of tuple data',
        },
      ],
    },
  ],
} as const;

const tupleBasicsData: LessonContent = {
  title: 'Introduction to Tuples',
  content: `<p>
Tuples are a fundamental data structure in Python that are similar to lists but with one key difference: they are immutable. 
This means that once a tuple is created, its elements cannot be changed, added, or removed. 
Understanding this immutable nature is crucial for effectively using tuples in your code.
</p>

<ul>
<li><strong>Immutable:</strong> Tuples cannot be modified after creation.</li>
<li><strong>Ordered:</strong> Tuples maintain the order of elements.</li>
<li><strong>Heterogeneous:</strong> Tuples can contain elements of different data types.</li>
</ul>`,
  codeExample: `# Immutable nature of tuples
my_tuple = (1, 2, 3)
# my_tuple[0] = 4  # This will raise a TypeError

# Ordered elements
ordered_tuple = ('a', 'b', 'c')
print(ordered_tuple[1])  # Output: 'b'

# Heterogeneous elements
mixed_tuple = (1, 'hello', 3.14, True)`,
  exercises: [
    {
      prompt:
        'Create a tuple containing three elements of different data types and print the second element.',
      initialCode: `# Write your solution here
my_tuple = `,
      solution: `my_tuple = (1, 'hello', 3.14)
print(my_tuple[1])`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a function that takes a tuple and returns a new tuple with the first and last elements swapped.',
      initialCode: `# Write your solution here
def swap_elements(tup):
    return `,
      solution: `def swap_elements(tup):
    return (tup[-1],) + tup[1:-1] + (tup[0],)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following statements is true about tuples in Python?',
      options: [
        'Tuples are mutable',
        'Tuples can be modified after creation',
        'Tuples are immutable',
        'Tuples can only contain elements of the same data type',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. Tuples are immutable.',
        'This is incorrect. Tuples cannot be modified after creation.',
        'This is correct. Tuples are immutable.',
        'This is incorrect. Tuples can contain elements of different data types.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following operations can be performed on a tuple in Python?',
      options: [
        'Appending an element',
        'Removing an element',
        'Accessing an element by index',
        'Modifying an element',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. Tuples do not support appending elements.',
        'This is incorrect. Tuples do not support removing elements.',
        'This is correct. Tuples support accessing elements by index.',
        'This is incorrect. Tuples do not support modifying elements.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const tupleCreationData: LessonContent = {
  title: 'Creating and Initializing Tuples',
  content: `<p>
Tuples in Python can be created and initialized in several ways. 
Understanding these methods is essential for effectively using tuples in your code.
</p>

<ul>
<li><strong>Using parentheses:</strong> Tuples can be created using parentheses.</li>
<li><strong>Using the tuple() constructor:</strong> Tuples can be created from other iterable objects.</li>
<li><strong>Using tuple packing and unpacking:</strong> Tuples can be created and unpacked dynamically.</li>
</ul>`,
  codeExample: `# Using parentheses
my_tuple = (1, 2, 3)

# Using the tuple() constructor
my_list = [4, 5, 6]
my_tuple = tuple(my_list)

# Using tuple packing and unpacking
a, b, c = 7, 8, 9
packed_tuple = (a, b, c)
x, y, z = packed_tuple`,
  exercises: [
    {
      prompt:
        'Create a tuple using the tuple() constructor from a list of strings and print the first element.',
      initialCode: `# Write your solution here
my_list = `,
      solution: `my_list = ['apple', 'banana', 'cherry']
my_tuple = tuple(my_list)
print(my_tuple[0])`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a function that takes a list of integers and returns a tuple containing the first, middle, and last elements of the list.',
      initialCode: `# Write your solution here
def first_middle_last(lst):
    return `,
      solution: `def first_middle_last(lst):
    return (lst[0], lst[len(lst)//2], lst[-1])`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to create a tuple in Python?',
      options: [
        'my_tuple = (1, 2, 3)',
        'my_tuple = tuple([1, 2, 3])',
        'my_tuple = 1, 2, 3',
        'All of the above',
      ],
      correctAnswer: 3,
      explanations: [
        'This is correct. Tuples can be created using parentheses.',
        'This is correct. Tuples can be created using the tuple() constructor.',
        'This is correct. Tuples can be created without parentheses.',
        'This is correct. All of the above methods are valid for creating tuples.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following operations can be used to create a tuple from an iterable object in Python?',
      options: [
        'Using parentheses',
        'Using the tuple() constructor',
        'Using list comprehension',
        'Using the list() constructor',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. Parentheses are used to create tuples, not to convert iterables to tuples.',
        'This is correct. The tuple() constructor can be used to create a tuple from an iterable object.',
        'This is incorrect. List comprehension is used to create lists, not tuples.',
        'This is incorrect. The list() constructor is used to create lists, not tuples.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const tupleVsListsData: LessonContent = {
  title: 'Tuples vs Lists',
  content: `<p>
Understanding the differences between tuples and lists is crucial for choosing the right data structure for your needs. 
While both tuples and lists are used to store collections of items, they have distinct characteristics and use cases.
</p>

<ul>
<li><strong>Mutability:</strong> Tuples are immutable, while lists are mutable.</li>
<li><strong>Performance:</strong> Tuples are generally faster and use less memory than lists.</li>
<li><strong>Use cases:</strong> Tuples are often used for collections of heterogeneous data, while lists are used for homogeneous data.</li>
</ul>`,
  codeExample: `# Mutability
my_list = [1, 2, 3]
my_list[0] = 4  # This is allowed

my_tuple = (1, 2, 3)
# my_tuple[0] = 4  # This will raise a TypeError

# Performance
import sys
list_size = sys.getsizeof([1, 2, 3])
tuple_size = sys.getsizeof((1, 2, 3))
print(f"List size: {list_size}, Tuple size: {tuple_size}")

# Use cases
tuple_data = (1, 'hello', 3.14, True)
list_data = [1, 2, 3, 4, 5]`,
  exercises: [
    {
      prompt:
        'Create a list and a tuple containing the same elements. Modify the first element of the list and try to modify the first element of the tuple. Observe the results.',
      initialCode: `# Write your solution here
my_list = 
my_tuple = `,
      solution: `my_list = [1, 2, 3]
my_tuple = (1, 2, 3)

my_list[0] = 4
print(my_list)  # Output: [4, 2, 3]

# my_tuple[0] = 4  # This will raise a TypeError`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a function that takes a list and returns a tuple containing the unique elements of the list.',
      initialCode: `# Write your solution here
def unique_elements(lst):
    return `,
      solution: `def unique_elements(lst):
    return tuple(set(lst))`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following statements is true about tuples and lists in Python?',
      options: [
        'Tuples are mutable, while lists are immutable',
        'Lists are generally faster and use less memory than tuples',
        'Tuples are immutable, while lists are mutable',
        'Tuples can only contain elements of the same data type',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. Tuples are immutable, while lists are mutable.',
        'This is incorrect. Tuples are generally faster and use less memory than lists.',
        'This is correct. Tuples are immutable, while lists are mutable.',
        'This is incorrect. Tuples can contain elements of different data types.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following is a common use case for tuples in Python?',
      options: [
        'Storing collections of homogeneous data',
        'Storing collections of heterogeneous data',
        'Modifying elements after creation',
        'Appending elements after creation',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. Lists are more commonly used for storing collections of homogeneous data.',
        'This is correct. Tuples are often used for storing collections of heterogeneous data.',
        'This is incorrect. Tuples do not support modifying elements after creation.',
        'This is incorrect. Tuples do not support appending elements after creation.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const tupleAccessingData: LessonContent = {
  title: 'Accessing Tuple Elements',
  content: `<p>
Accessing elements in a tuple is a fundamental operation that allows you to retrieve specific values based on their position. 
Tuples support indexing, slicing, and negative indexing, similar to lists.
</p>

<ul>
<li><strong>Indexing:</strong> Access elements using their position index.</li>
<li><strong>Slicing:</strong> Extract a subset of elements using slicing notation.</li>
<li><strong>Negative indexing:</strong> Access elements from the end of the tuple.</li>
</ul>`,
  codeExample: `# Indexing
my_tuple = (1, 2, 3, 4, 5)
print(my_tuple[0])  # Output: 1

# Slicing
print(my_tuple[1:3])  # Output: (2, 3)

# Negative indexing
print(my_tuple[-1])  # Output: 5`,
  exercises: [
    {
      prompt:
        'Create a tuple containing five elements and print the third element using positive indexing.',
      initialCode: `# Write your solution here
my_tuple = `,
      solution: `my_tuple = (10, 20, 30, 40, 50)
print(my_tuple[2])`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a tuple containing six elements and print the last three elements using slicing.',
      initialCode: `# Write your solution here
my_tuple = `,
      solution: `my_tuple = (1, 2, 3, 4, 5, 6)
print(my_tuple[3:])`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to access the last element of a tuple in Python?',
      options: [
        'my_tuple[0]',
        'my_tuple[-1]',
        'my_tuple[len(my_tuple)]',
        'my_tuple[len(my_tuple) - 1]',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. This accesses the first element.',
        'This is correct. Negative indexing accesses elements from the end.',
        'This is incorrect. This would result in an IndexError.',
        'This is correct, but less concise than using negative indexing.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following is the correct way to access the first three elements of a tuple in Python?',
      options: [
        'my_tuple[:3]',
        'my_tuple[0:3]',
        'my_tuple[1:3]',
        'my_tuple[0:2]',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. Slicing from the start to index 3.',
        'This is correct, but less concise than using the default start index.',
        'This is incorrect. This would skip the first element.',
        'This is incorrect. This would only include the first two elements.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const tupleUnpackingData: LessonContent = {
  title: 'Tuple Unpacking',
  content: `<p>
Tuple unpacking is a powerful feature in Python that allows you to assign elements of a tuple to multiple variables in a single operation. 
This can be particularly useful for destructuring and working with tuples in a more readable and concise manner.
</p>

<ul>
<li><strong>Basic unpacking:</strong> Assign elements to individual variables.</li>
<li><strong>Extended unpacking:</strong> Use the * operator to capture multiple elements.</li>
<li><strong>Nested unpacking:</strong> Unpack elements from nested tuples.</li>
</ul>`,
  codeExample: `# Basic unpacking
my_tuple = (1, 2, 3)
a, b, c = my_tuple
print(a, b, c)  # Output: 1 2 3

# Extended unpacking
first, *middle, last = (1, 2, 3, 4, 5)
print(first, middle, last)  # Output: 1 [2, 3, 4] 5

# Nested unpacking
nested_tuple = (1, (2, 3), 4)
a, (b, c), d = nested_tuple
print(a, b, c, d)  # Output: 1 2 3 4`,
  exercises: [
    {
      prompt:
        'Create a tuple containing three elements and unpack them into three variables. Print each variable.',
      initialCode: `# Write your solution here
my_tuple = `,
      solution: `my_tuple = (10, 20, 30)
a, b, c = my_tuple
print(a, b, c)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a tuple containing five elements and unpack the first and last elements into separate variables. Capture the middle elements into a list.',
      initialCode: `# Write your solution here
my_tuple = `,
      solution: `my_tuple = (1, 2, 3, 4, 5)
first, *middle, last = my_tuple
print(first, middle, last)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to unpack a tuple into three variables in Python?',
      options: [
        'a, b, c = my_tuple',
        'a = my_tuple[0], b = my_tuple[1], c = my_tuple[2]',
        'a, b, c = (my_tuple[0], my_tuple[1], my_tuple[2])',
        'a, b, c = my_tuple[0:3]',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. Tuple unpacking assigns elements to variables directly.',
        'This is incorrect. This syntax is not valid in Python.',
        'This is correct, but unnecessarily verbose.',
        'This is incorrect. Slicing returns a tuple, not individual elements.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following is the correct way to unpack the first and last elements of a tuple and capture the middle elements into a list in Python?',
      options: [
        'first, *middle, last = my_tuple',
        'first, middle, last = my_tuple',
        'first, middle, last = my_tuple[0], my_tuple[1:-1], my_tuple[-1]',
        'first, middle, last = my_tuple[0], list(my_tuple[1:-1]), my_tuple[-1]',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The * operator captures multiple elements into a list.',
        'This is incorrect. This would not capture the middle elements into a list.',
        'This is incorrect. This syntax is not valid in Python.',
        'This is correct, but unnecessarily verbose.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const tupleMethodsData: LessonContent = {
  title: 'Built-in Tuple Methods',
  content: `<p>
Tuples in Python come with a few built-in methods that allow you to perform common operations. 
These methods include counting occurrences of elements and finding the index of elements.
</p>

<ul>
<li><strong>count():</strong> Count the number of occurrences of a specified element.</li>
<li><strong>index():</strong> Find the index of the first occurrence of a specified element.</li>
</ul>`,
  codeExample: `# count() method
my_tuple = (1, 2, 2, 3, 2)
print(my_tuple.count(2))  # Output: 3

# index() method
print(my_tuple.index(3))  # Output: 3`,
  exercises: [
    {
      prompt:
        'Create a tuple containing repeated elements and use the count() method to count the occurrences of a specific element.',
      initialCode: `# Write your solution here
my_tuple = `,
      solution: `my_tuple = (1, 2, 2, 3, 2)
print(my_tuple.count(2))`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a tuple containing multiple elements and use the index() method to find the index of a specific element.',
      initialCode: `# Write your solution here
my_tuple = `,
      solution: `my_tuple = (10, 20, 30, 40, 50)
print(my_tuple.index(30))`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following methods can be used to count the number of occurrences of an element in a tuple?',
      options: [
        'count()',
        'index()',
        'find()',
        'search()',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The count() method counts occurrences of an element.',
        'This is incorrect. The index() method finds the index of an element.',
        'This is incorrect. There is no find() method for tuples.',
        'This is incorrect. There is no search() method for tuples.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following methods can be used to find the index of the first occurrence of an element in a tuple?',
      options: [
        'count()',
        'index()',
        'find()',
        'search()',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. The count() method counts occurrences of an element.',
        'This is correct. The index() method finds the index of an element.',
        'This is incorrect. There is no find() method for tuples.',
        'This is incorrect. There is no search() method for tuples.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const multipleReturnsData: LessonContent = {
  title: 'Multiple Return Values',
  content: `<p>
Tuples are often used in Python to return multiple values from a function. 
This is a powerful feature that allows functions to return more than one value in a clean and concise manner.
</p>

<ul>
<li><strong>Returning multiple values:</strong> Use a tuple to return multiple values from a function.</li>
<li><strong>Unpacking returned values:</strong> Unpack the returned tuple into separate variables.</li>
</ul>`,
  codeExample: `# Returning multiple values
def get_coordinates():
    return (3, 4)

# Unpacking returned values
x, y = get_coordinates()
print(x, y)  # Output: 3 4`,
  exercises: [
    {
      prompt:
        'Create a function that returns a tuple containing the sum and product of two numbers. Call the function and unpack the returned values into two variables.',
      initialCode: `# Write your solution here
def sum_and_product(a, b):
    return `,
      solution: `def sum_and_product(a, b):
    return (a + b, a * b)

result = sum_and_product(2, 3)
sum_result, product_result = result
print(sum_result, product_result)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a function that returns a tuple containing the maximum and minimum values from a list. Call the function and unpack the returned values into two variables.',
      initialCode: `# Write your solution here
def max_and_min(lst):
    return `,
      solution: `def max_and_min(lst):
    return (max(lst), min(lst))

result = max_and_min([1, 2, 3, 4, 5])
max_result, min_result = result
print(max_result, min_result)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to return multiple values from a function in Python?',
      options: [
        'return a, b, c',
        'return [a, b, c]',
        'return {a, b, c}',
        'return (a, b, c)',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. Returning multiple values as a tuple.',
        'This is incorrect. This returns a list, not a tuple.',
        'This is incorrect. This returns a set, not a tuple.',
        'This is correct, but less concise than omitting the parentheses.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following is the correct way to unpack multiple return values from a function in Python?',
      options: [
        'a, b, c = my_function()',
        'a = my_function()[0], b = my_function()[1], c = my_function()[2]',
        'a, b, c = list(my_function())',
        'a, b, c = tuple(my_function())',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. Unpacking multiple return values directly.',
        'This is incorrect. This syntax is not valid in Python.',
        'This is correct, but unnecessarily verbose.',
        'This is correct, but unnecessarily verbose.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const tupleAsKeyData: LessonContent = {
  title: 'Tuples as Dictionary Keys',
  content: `<p>
Tuples can be used as keys in dictionaries due to their immutable nature. 
This is particularly useful when you need to create composite keys that consist of multiple values.
</p>

<ul>
<li><strong>Immutable keys:</strong> Tuples are immutable, making them suitable for dictionary keys.</li>
<li><strong>Composite keys:</strong> Use tuples to create composite keys that consist of multiple values.</li>
</ul>`,
  codeExample: `# Using tuples as dictionary keys
my_dict = {}
my_dict[(1, 2)] = 'value1'
my_dict[('a', 'b')] = 'value2'

print(my_dict)  # Output: {(1, 2): 'value1', ('a', 'b'): 'value2'}`,
  exercises: [
    {
      prompt:
        'Create a dictionary where the keys are tuples representing coordinates (x, y) and the values are the corresponding values at those coordinates.',
      initialCode: `# Write your solution here
my_dict = `,
      solution: `my_dict = {}
my_dict[(1, 2)] = 'value1'
my_dict[(3, 4)] = 'value2'
print(my_dict)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a function that takes a list of tuples and a value, and returns a dictionary where each tuple is a key and the value is the given value.',
      initialCode: `# Write your solution here
def create_dict(tuples, value):
    return `,
      solution: `def create_dict(tuples, value):
    return {t: value for t in tuples}

result = create_dict([(1, 2), (3, 4)], 'value')
print(result)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following data structures can be used as keys in a Python dictionary?',
      options: [
        'Lists',
        'Tuples',
        'Sets',
        'Dictionaries',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. Lists are mutable and cannot be used as dictionary keys.',
        'This is correct. Tuples are immutable and can be used as dictionary keys.',
        'This is incorrect. Sets are mutable and cannot be used as dictionary keys.',
        'This is incorrect. Dictionaries are mutable and cannot be used as dictionary keys.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following is a valid use case for using tuples as dictionary keys in Python?',
      options: [
        'Storing mutable data',
        'Creating composite keys',
        'Modifying keys after creation',
        'None of the above',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. Tuples are immutable and not suitable for storing mutable data.',
        'This is correct. Tuples can be used to create composite keys.',
        'This is incorrect. Tuples cannot be modified after creation.',
        'This is incorrect. Creating composite keys is a valid use case.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const namedTuplesData: LessonContent = {
  title: 'Named Tuples',
  content: `<p>
Named tuples are a subclass of tuples that allow you to give names to each element, making your code more readable and self-documenting. 
They are particularly useful when you need to work with tuples that have a specific structure.
</p>

<ul>
<li><strong>Creating named tuples:</strong> Use the namedtuple function from the collections module.</li>
<li><strong>Accessing elements:</strong> Access elements by name or by index.</li>
</ul>`,
  codeExample: `# Creating named tuples
from collections import namedtuple

Point = namedtuple('Point', ['x', 'y'])
p = Point(1, 2)

# Accessing elements
print(p.x)  # Output: 1
print(p[1])  # Output: 2`,
  exercises: [
    {
      prompt:
        'Create a named tuple representing a student with fields for name, age, and grade. Create an instance of the named tuple and print the student\'s name.',
      initialCode: `# Write your solution here
from collections import namedtuple

Student = `,
      solution: `from collections import namedtuple

Student = namedtuple('Student', ['name', 'age', 'grade'])
student = Student('Alice', 20, 'A')
print(student.name)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a function that takes a list of dictionaries, each representing a student with keys for name, age, and grade. Return a list of named tuples representing the students.',
      initialCode: `# Write your solution here
from collections import namedtuple

def create_students(students_dict):
    return `,
      solution: `from collections import namedtuple

def create_students(students_dict):
    Student = namedtuple('Student', ['name', 'age', 'grade'])
    return [Student(**student) for student in students_dict]

students = [{'name': 'Alice', 'age': 20, 'grade': 'A'}, {'name': 'Bob', 'age': 22, 'grade': 'B'}]
result = create_students(students)
print(result)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to create a named tuple in Python?',
      options: [
        'namedtuple("Point", ["x", "y"])',
        'namedtuple(Point, ["x", "y"])',
        'namedtuple("Point", "x y")',
        'namedtuple(Point, "x y")',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The namedtuple function is used with the correct syntax.',
        'This is incorrect. The namedtuple function requires a string name, not a variable.',
        'This is correct, but less readable than using a list of field names.',
        'This is incorrect. The namedtuple function requires a string name, not a variable.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following is a valid use case for named tuples in Python?',
      options: [
        'Storing mutable data',
        'Creating readable and self-documenting code',
        'Modifying elements after creation',
        'None of the above',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. Named tuples are immutable and not suitable for storing mutable data.',
        'This is correct. Named tuples make code more readable and self-documenting.',
        'This is incorrect. Named tuples cannot be modified after creation.',
        'This is incorrect. Creating readable and self-documenting code is a valid use case.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const tuplePerformanceData: LessonContent = {
  title: 'Performance Considerations',
  content: `<p>
Understanding the performance characteristics of tuples is crucial for optimizing your Python code. 
Tuples are generally faster and use less memory than lists, making them a preferred choice for certain use cases.
</p>

<ul>
<li><strong>Memory usage:</strong> Tuples use less memory compared to lists due to their immutability.</li>
<li><strong>Access speed:</strong> Tuples offer faster access times for elements compared to lists.</li>
<li><strong>Use cases:</strong> Tuples are ideal for storing data that does not need to be modified.</li>
</ul>`,
  codeExample: `# Memory usage comparison
import sys

my_list = [1, 2, 3]
my_tuple = (1, 2, 3)

print(sys.getsizeof(my_list))  # Output: 88
print(sys.getsizeof(my_tuple))  # Output: 64

# Access speed comparison
import timeit

list_time = timeit.timeit(stmt="[1, 2, 3][1]", number=1000000)
tuple_time = timeit.timeit(stmt="(1, 2, 3)[1]", number=1000000)

print(f"List access time: {list_time}")
print(f"Tuple access time: {tuple_time}")`,
  exercises: [
    {
      prompt:
        'Create a list and a tuple containing the same elements. Compare their memory usage using the sys.getsizeof() function.',
      initialCode: `# Write your solution here
import sys

my_list = 
my_tuple = `,
      solution: `import sys

my_list = [1, 2, 3]
my_tuple = (1, 2, 3)

print(sys.getsizeof(my_list))  # Output: 88
print(sys.getsizeof(my_tuple))  # Output: 64`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a function that takes a list and returns a tuple. Compare the execution time of accessing an element in the list versus the tuple using the timeit module.',
      initialCode: `# Write your solution here
import timeit

def list_to_tuple(lst):
    return `,
      solution: `import timeit

def list_to_tuple(lst):
    return tuple(lst)

my_list = [1, 2, 3]
my_tuple = list_to_tuple(my_list)

list_time = timeit.timeit(stmt="my_list[1]", globals=globals(), number=1000000)
tuple_time = timeit.timeit(stmt="my_tuple[1]", globals=globals(), number=1000000)

print(f"List access time: {list_time}")
print(f"Tuple access time: {tuple_time}")`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following statements is true about the memory usage of tuples and lists in Python?',
      options: [
        'Tuples use more memory than lists',
        'Lists use more memory than tuples',
        'Tuples and lists use the same amount of memory',
        'Memory usage depends on the number of elements',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. Tuples use less memory than lists.',
        'This is correct. Tuples use less memory than lists due to their immutability.',
        'This is incorrect. Tuples and lists do not use the same amount of memory.',
        'This is correct, but less specific than the correct answer.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following statements is true about the access speed of tuples and lists in Python?',
      options: [
        'Tuples are slower to access than lists',
        'Lists are slower to access than tuples',
        'Tuples and lists have the same access speed',
        'Access speed depends on the number of elements',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. Tuples are faster to access than lists.',
        'This is correct. Tuples are faster to access than lists.',
        'This is incorrect. Tuples and lists do not have the same access speed.',
        'This is correct, but less specific than the correct answer.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const nestedTuplesData: LessonContent = {
  title: 'Nested Tuples',
  content: `<p>
Nested tuples are tuples that contain other tuples as elements. 
This allows you to create complex data structures that can be accessed and manipulated in various ways.
</p>

<ul>
<li><strong>Creating nested tuples:</strong> Define tuples within tuples.</li>
<li><strong>Accessing elements:</strong> Use multiple levels of indexing to access nested elements.</li>
<li><strong>Modifying nested tuples:</strong> Since tuples are immutable, you cannot modify nested tuples directly.</li>
</ul>`,
  codeExample: `# Creating nested tuples
nested_tuple = ((1, 2), (3, 4), (5, 6))

# Accessing elements
print(nested_tuple[0][1])  # Output: 2

# Modifying nested tuples
# nested_tuple[0][1] = 3  # This will raise a TypeError`,
  exercises: [
    {
      prompt:
        'Create a nested tuple containing three tuples, each with two elements. Print the second element of the first tuple.',
      initialCode: `# Write your solution here
nested_tuple = `,
      solution: `nested_tuple = ((1, 2), (3, 4), (5, 6))
print(nested_tuple[0][1])`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a function that takes a nested tuple and returns a new nested tuple with the first element of each inner tuple incremented by 1.',
      initialCode: `# Write your solution here
def increment_first_elements(nested_tuple):
    return `,
      solution: `def increment_first_elements(nested_tuple):
    return tuple((t[0] + 1, t[1]) for t in nested_tuple)

nested_tuple = ((1, 2), (3, 4), (5, 6))
result = increment_first_elements(nested_tuple)
print(result)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to access the second element of the first tuple in a nested tuple?',
      options: [
        'nested_tuple[0, 1]',
        'nested_tuple[0][1]',
        'nested_tuple[1][0]',
        'nested_tuple[1, 0]',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. This syntax is not valid in Python.',
        'This is correct. Use multiple levels of indexing to access nested elements.',
        'This is incorrect. This accesses the first element of the second tuple.',
        'This is incorrect. This syntax is not valid in Python.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following statements is true about modifying nested tuples in Python?',
      options: [
        'Nested tuples can be modified directly',
        'Nested tuples cannot be modified directly',
        'Nested tuples can be modified if they contain mutable elements',
        'None of the above',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. Tuples are immutable and cannot be modified directly.',
        'This is correct. Tuples are immutable and cannot be modified directly.',
        'This is incorrect. Tuples are immutable and cannot be modified even if they contain mutable elements.',
        'This is incorrect. The correct answer is that nested tuples cannot be modified directly.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const tupleConversionData: LessonContent = {
  title: 'Type Conversion',
  content: `<p>
Converting between tuples and other data structures is a common operation in Python. 
Understanding how to perform these conversions can help you work with different types of data more effectively.
</p>

<ul>
<li><strong>Converting to tuples:</strong> Use the tuple() constructor to convert lists, sets, and other iterables to tuples.</li>
<li><strong>Converting from tuples:</strong> Use the list() or set() constructors to convert tuples to lists or sets.</li>
<li><strong>Converting to strings:</strong> Use the str() function to convert tuples to strings.</li>
</ul>`,
  codeExample: `# Converting to tuples
my_list = [1, 2, 3]
my_tuple = tuple(my_list)

# Converting from tuples
my_list = list(my_tuple)
my_set = set(my_tuple)

# Converting to strings
my_string = str(my_tuple)`,
  exercises: [
    {
      prompt:
        'Create a list containing three elements. Convert the list to a tuple and print the tuple.',
      initialCode: `# Write your solution here
my_list = `,
      solution: `my_list = [1, 2, 3]
my_tuple = tuple(my_list)
print(my_tuple)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a function that takes a tuple and returns a list containing the unique elements of the tuple.',
      initialCode: `# Write your solution here
def unique_elements(tup):
    return `,
      solution: `def unique_elements(tup):
    return list(set(tup))

my_tuple = (1, 2, 2, 3, 3, 4)
result = unique_elements(my_tuple)
print(result)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to convert a list to a tuple in Python?',
      options: [
        'tuple(my_list)',
        'list(my_tuple)',
        'set(my_list)',
        'str(my_list)',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The tuple() constructor converts a list to a tuple.',
        'This is incorrect. The list() constructor converts a tuple to a list.',
        'This is incorrect. The set() constructor converts a list to a set.',
        'This is incorrect. The str() function converts a list to a string.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following is the correct way to convert a tuple to a set in Python?',
      options: [
        'tuple(my_set)',
        'list(my_tuple)',
        'set(my_tuple)',
        'str(my_tuple)',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. The tuple() constructor converts a set to a tuple.',
        'This is incorrect. The list() constructor converts a tuple to a list.',
        'This is correct. The set() constructor converts a tuple to a set.',
        'This is incorrect. The str() function converts a tuple to a string.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const tupleSortingData: LessonContent = {
  title: 'Sorting Tuples',
  content: `<p>
Sorting lists of tuples is a common operation in Python. 
Tuples can be sorted based on their elements, and Python provides several ways to achieve this.
</p>

<ul>
<li><strong>Default sorting:</strong> Tuples are sorted lexicographically by default.</li>
<li><strong>Custom sorting:</strong> Use the sorted() function or list.sort() method with a custom key.</li>
<li><strong>Stable sorting:</strong> Python's sorting algorithms are stable, meaning the order of equal elements is preserved.</li>
</ul>`,
  codeExample: `# Default sorting
my_list = [(3, 'apple'), (1, 'banana'), (2, 'cherry')]
sorted_list = sorted(my_list)
print(sorted_list)  # Output: [(1, 'banana'), (2, 'cherry'), (3, 'apple')]

# Custom sorting
sorted_list = sorted(my_list, key=lambda x: x[1])
print(sorted_list)  # Output: [(3, 'apple'), (2, 'cherry'), (1, 'banana')]`,
  exercises: [
    {
      prompt:
        'Create a list of tuples where each tuple contains a number and a string. Sort the list by the number in ascending order.',
      initialCode: `# Write your solution here
my_list = `,
      solution: `my_list = [(3, 'apple'), (1, 'banana'), (2, 'cherry')]
sorted_list = sorted(my_list)
print(sorted_list)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a list of tuples where each tuple contains a number and a string. Sort the list by the string in alphabetical order.',
      initialCode: `# Write your solution here
my_list = `,
      solution: `my_list = [(3, 'apple'), (1, 'banana'), (2, 'cherry')]
sorted_list = sorted(my_list, key=lambda x: x[1])
print(sorted_list)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to sort a list of tuples by the second element in each tuple?',
      options: [
        'sorted(my_list, key=lambda x: x[0])',
        'sorted(my_list, key=lambda x: x[1])',
        'sorted(my_list, key=lambda x: x[2])',
        'sorted(my_list, key=lambda x: x[-1])',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. This sorts by the first element.',
        'This is correct. This sorts by the second element.',
        'This is incorrect. This would raise an IndexError if the tuple has fewer than three elements.',
        'This is correct, but less explicit than using x[1].',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following statements is true about Python\'s sorting algorithms for lists of tuples?',
      options: [
        'Python\'s sorting algorithms are unstable',
        'Python\'s sorting algorithms are stable',
        'Python\'s sorting algorithms depend on the version of Python',
        'None of the above',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. Python\'s sorting algorithms are stable.',
        'This is correct. Python\'s sorting algorithms are stable.',
        'This is incorrect. Python\'s sorting algorithms are stable regardless of the version.',
        'This is incorrect. The correct answer is that Python\'s sorting algorithms are stable.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const tupleComparisonData: LessonContent = {
  title: 'Tuple Comparison',
  content: `<p>
Understanding how tuples are compared and ordered in Python is crucial for writing efficient and correct code. 
Tuples are compared lexicographically, meaning they are compared element by element.
</p>

<ul>
<li><strong>Lexicographical comparison:</strong> Tuples are compared element by element, starting from the first element.</li>
<li><strong>Equality and inequality:</strong> Tuples are equal if all corresponding elements are equal.</li>
<li><strong>Ordering:</strong> Tuples are ordered based on the first differing element.</li>
</ul>`,
  codeExample: `# Lexicographical comparison
print((1, 2) < (1, 3))  # Output: True
print((1, 2) == (1, 2))  # Output: True
print((1, 2) != (1, 3))  # Output: True

# Ordering
print((1, 2, 3) < (1, 2, 4))  # Output: True
print((1, 2, 3) < (1, 2, 3, 4))  # Output: True`,
  exercises: [
    {
      prompt:
        'Create two tuples and compare them using the less than operator. Print the result.',
      initialCode: `# Write your solution here
tuple1 = 
tuple2 = `,
      solution: `tuple1 = (1, 2)
tuple2 = (1, 3)
print(tuple1 < tuple2)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a function that takes two tuples and returns True if the first tuple is less than the second tuple, otherwise False.',
      initialCode: `# Write your solution here
def is_less_than(tuple1, tuple2):
    return `,
      solution: `def is_less_than(tuple1, tuple2):
    return tuple1 < tuple2

tuple1 = (1, 2)
tuple2 = (1, 3)
print(is_less_than(tuple1, tuple2))`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to compare two tuples lexicographically in Python?',
      options: [
        'tuple1 > tuple2',
        'tuple1 < tuple2',
        'tuple1 == tuple2',
        'All of the above',
      ],
      correctAnswer: 3,
      explanations: [
        'This is correct. The greater than operator compares tuples lexicographically.',
        'This is correct. The less than operator compares tuples lexicographically.',
        'This is correct. The equality operator checks if all elements of the tuples are equal.',
        'This is correct. All of the above operators can be used to compare tuples lexicographically.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following statements is true about the comparison of tuples in Python?',
      options: [
        'Tuples are compared element by element',
        'Tuples are compared as a whole',
        'Tuples are compared based on their lengths',
        'None of the above',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. Tuples are compared element by element.',
        'This is incorrect. Tuples are not compared as a whole.',
        'This is incorrect. Tuples are not compared based on their lengths.',
        'This is incorrect. The correct answer is that tuples are compared element by element.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const coordinateSystemsData: LessonContent = {
  title: 'Coordinate Systems',
  content: `<p>
Tuples are commonly used to represent points and coordinates in various coordinate systems, such as Cartesian coordinates. 
This is because tuples provide a simple and efficient way to store and manipulate pairs or triples of numbers.
</p>

<ul>
<li><strong>Cartesian coordinates:</strong> Use tuples to represent points in a 2D or 3D space.</li>
<li><strong>Distance calculation:</strong> Calculate the distance between two points using the Euclidean distance formula.</li>
<li><strong>Vector operations:</strong> Perform vector operations like addition, subtraction, and scaling using tuples.</li>
</ul>`,
  codeExample: `# Cartesian coordinates
point1 = (3, 4)
point2 = (6, 8)

# Distance calculation
def euclidean_distance(p1, p2):
    return ((p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2) ** 0.5

distance = euclidean_distance(point1, point2)
print(distance)  # Output: 5.0

# Vector operations
def vector_add(v1, v2):
    return (v1[0] + v2[0], v1[1] + v2[1])

result = vector_add(point1, point2)
print(result)  # Output: (9, 12)`,
  exercises: [
    {
      prompt:
        'Create a tuple representing a point in a 2D Cartesian coordinate system. Calculate the distance from this point to the origin (0, 0).',
      initialCode: `# Write your solution here
point = `,
      solution: `point = (3, 4)
distance = (point[0] ** 2 + point[1] ** 2) ** 0.5
print(distance)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a function that takes two points in a 2D Cartesian coordinate system and returns the midpoint between them.',
      initialCode: `# Write your solution here
def midpoint(p1, p2):
    return `,
      solution: `def midpoint(p1, p2):
    return ((p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2)

point1 = (3, 4)
point2 = (6, 8)
result = midpoint(point1, point2)
print(result)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to represent a point in a 2D Cartesian coordinate system using a tuple?',
      options: [
        '(x, y)',
        '[x, y]',
        '{x, y}',
        'None of the above',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. A tuple is used to represent a point in a 2D Cartesian coordinate system.',
        'This is incorrect. A list is not typically used for this purpose.',
        'This is incorrect. A set is not typically used for this purpose.',
        'This is incorrect. The correct answer is a tuple.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following is the correct formula to calculate the Euclidean distance between two points in a 2D Cartesian coordinate system?',
      options: [
        'sqrt((x2 - x1) + (y2 - y1))',
        'sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)',
        'sqrt((x2 - x1) ** 2 - (y2 - y1) ** 2)',
        'sqrt((x2 + x1) ** 2 + (y2 + y1) ** 2)',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. The formula is missing the squaring of the differences.',
        'This is correct. This is the Euclidean distance formula.',
        'This is incorrect. The formula uses subtraction instead of addition.',
        'This is incorrect. The formula uses addition instead of subtraction.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const stateRepresentationData: LessonContent = {
  title: 'State Representation',
  content: `<p>
Tuples can be used to represent states and transitions in various algorithms and data structures. 
This is particularly useful in state machines, game development, and other applications where state management is important.
</p>

<ul>
<li><strong>State representation:</strong> Use tuples to represent different states of a system.</li>
<li><strong>State transitions:</strong> Define functions to transition between states using tuples.</li>
<li><strong>State comparison:</strong> Compare states to determine if they are the same or different.</li>
</ul>`,
  codeExample: `# State representation
initial_state = (0, 0)
goal_state = (10, 10)

# State transitions
def move_right(state):
    return (state[0] + 1, state[1])

def move_up(state):
    return (state[0], state[1] + 1)

# State comparison
def is_goal_state(state):
    return state == goal_state

current_state = initial_state
while not is_goal_state(current_state):
    current_state = move_right(current_state)
    current_state = move_up(current_state)

print(current_state)  # Output: (10, 10)`,
  exercises: [
    {
      prompt:
        'Create a tuple representing the initial state of a system. Define a function to transition the state to a new state and print the new state.',
      initialCode: `# Write your solution here
initial_state = `,
      solution: `initial_state = (0, 0)

def transition_state(state):
    return (state[0] + 1, state[1] + 1)

new_state = transition_state(initial_state)
print(new_state)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a function that takes an initial state and a goal state. The function should repeatedly transition the state until it matches the goal state and print each intermediate state.',
      initialCode: `# Write your solution here
def transition_to_goal(initial_state, goal_state):
    return `,
      solution: `def transition_to_goal(initial_state, goal_state):
    current_state = initial_state
    while current_state != goal_state:
        print(current_state)
        current_state = (current_state[0] + 1, current_state[1] + 1)
    print(current_state)

initial_state = (0, 0)
goal_state = (3, 3)
transition_to_goal(initial_state, goal_state)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to represent a state in a state machine using a tuple?',
      options: [
        '(state1, state2)',
        '[state1, state2]',
        '{state1, state2}',
        'None of the above',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. A tuple is used to represent a state in a state machine.',
        'This is incorrect. A list is not typically used for this purpose.',
        'This is incorrect. A set is not typically used for this purpose.',
        'This is incorrect. The correct answer is a tuple.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following is the correct way to compare two states represented as tuples in a state machine?',
      options: [
        'state1 > state2',
        'state1 < state2',
        'state1 == state2',
        'All of the above',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. The greater than operator is not typically used for state comparison.',
        'This is incorrect. The less than operator is not typically used for state comparison.',
        'This is correct. The equality operator is used to compare states.',
        'This is incorrect. Only the equality operator is typically used for state comparison.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const memoryEfficiencyData: LessonContent = {
  title: 'Memory Optimization',
  content: `<p>
Efficient memory usage is crucial for large programs, and tuples can play a significant role in optimizing memory consumption. 
Understanding how to use tuples effectively can lead to more memory-efficient code.
</p>

<ul>
<li><strong>Immutable nature:</strong> Tuples are immutable, which can lead to memory savings by avoiding unnecessary copies.</li>
<li><strong>Smaller memory footprint:</strong> Tuples generally use less memory than lists due to their simpler internal structure.</li>
<li><strong>Avoiding deep copies:</strong> Use tuples to avoid deep copies of large data structures.</li>
</ul>`,
  codeExample: `# Immutable nature
my_tuple = (1, 2, 3)
# my_tuple[0] = 4  # This will raise a TypeError

# Smaller memory footprint
import sys
my_list = [1, 2, 3]
my_tuple = (1, 2, 3)
print(sys.getsizeof(my_list))  # Output: 88
print(sys.getsizeof(my_tuple))  # Output: 64

# Avoiding deep copies
large_list = list(range(1000000))
large_tuple = tuple(large_list)

# Copying the tuple is much faster and uses less memory
import copy
tuple_copy = copy.copy(large_tuple)
list_copy = copy.deepcopy(large_list)`,
  exercises: [
    {
      prompt:
        'Create a list and a tuple containing the same elements. Compare their memory usage using the sys.getsizeof() function.',
      initialCode: `# Write your solution here
import sys

my_list = 
my_tuple = `,
      solution: `import sys

my_list = [1, 2, 3]
my_tuple = (1, 2, 3)

print(sys.getsizeof(my_list))  # Output: 88
print(sys.getsizeof(my_tuple))  # Output: 64`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a large list and a tuple containing the same elements. Compare the time and memory usage of copying the list versus the tuple using the copy module.',
      initialCode: `# Write your solution here
import copy
import time
import sys

large_list = 
large_tuple = `,
      solution: `import copy
import time
import sys

large_list = list(range(1000000))
large_tuple = tuple(large_list)

start_time = time.time()
tuple_copy = copy.copy(large_tuple)
tuple_time = time.time() - start_time
tuple_size = sys.getsizeof(tuple_copy)

start_time = time.time()
list_copy = copy.deepcopy(large_list)
list_time = time.time() - start_time
list_size = sys.getsizeof(list_copy)

print(f"Tuple copy time: {tuple_time}, size: {tuple_size}")
print(f"List copy time: {list_time}, size: {list_size}")`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following statements is true about the memory usage of tuples and lists in Python?',
      options: [
        'Tuples use more memory than lists',
        'Lists use more memory than tuples',
        'Tuples and lists use the same amount of memory',
        'Memory usage depends on the number of elements',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. Tuples use less memory than lists.',
        'This is correct. Tuples use less memory than lists due to their simpler internal structure.',
        'This is incorrect. Tuples and lists do not use the same amount of memory.',
        'This is correct, but less specific than the correct answer.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following is a valid technique for optimizing memory usage in large programs using tuples?',
      options: [
        'Using deep copies of large data structures',
        'Avoiding deep copies by using tuples',
        'Storing mutable data in tuples',
        'None of the above',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. Deep copies can lead to increased memory usage.',
        'This is correct. Avoiding deep copies by using tuples can optimize memory usage.',
        'This is incorrect. Tuples are immutable and not suitable for storing mutable data.',
        'This is incorrect. The correct answer is avoiding deep copies by using tuples.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const tupleCachingData: LessonContent = {
  title: 'Tuple Caching',
  content: `<p>
Understanding tuple internals and caching behavior can help optimize the performance of your Python programs. 
Python caches small tuples to improve performance and reduce memory usage.
</p>

<ul>
<li><strong>Small tuple caching:</strong> Python caches small tuples to avoid creating multiple instances of the same tuple.</li>
<li><strong>Interning:</strong> Python may intern tuples to improve performance and reduce memory usage.</li>
<li><strong>Performance implications:</strong> Knowing when and how tuples are cached can help you write more efficient code.</li>
</ul>`,
  codeExample: `# Small tuple caching
tuple1 = (1, 2, 3)
tuple2 = (1, 2, 3)
print(tuple1 is tuple2)  # Output: True (due to caching)

# Interning
tuple3 = (1000, 2000)
tuple4 = (1000, 2000)
print(tuple3 is tuple4)  # Output: False (not cached)

# Performance implications
import sys
tuple5 = (1, 2, 3)
tuple6 = (1, 2, 3)
print(sys.getrefcount(tuple5))  # Output: 4 (due to caching and references)`,
  exercises: [
    {
      prompt:
        'Create two tuples with the same elements and check if they refer to the same object using the "is" operator. Print the result.',
      initialCode: `# Write your solution here
tuple1 = 
tuple2 = `,
      solution: `tuple1 = (1, 2, 3)
tuple2 = (1, 2, 3)
print(tuple1 is tuple2)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a function that takes a tuple and returns the number of references to that tuple using the sys.getrefcount() function.',
      initialCode: `# Write your solution here
import sys

def ref_count(tup):
    return `,
      solution: `import sys

def ref_count(tup):
    return sys.getrefcount(tup)

my_tuple = (1, 2, 3)
print(ref_count(my_tuple))`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following statements is true about tuple caching in Python?',
      options: [
        'Python caches all tuples to improve performance',
        'Python caches only small tuples to improve performance',
        'Python does not cache tuples',
        'Tuple caching depends on the Python version',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. Python does not cache all tuples.',
        'This is correct. Python caches small tuples to improve performance.',
        'This is incorrect. Python caches small tuples.',
        'This is incorrect. Tuple caching behavior is consistent across Python versions.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following is a valid technique for checking if two tuples refer to the same object in Python?',
      options: [
        'Using the "==" operator',
        'Using the "is" operator',
        'Using the "in" operator',
        'None of the above',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. The "==" operator checks for equality, not identity.',
        'This is correct. The "is" operator checks for object identity.',
        'This is incorrect. The "in" operator is used for membership testing.',
        'This is incorrect. The correct answer is using the "is" operator.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const dataAggregationData: LessonContent = {
  title: 'Data Aggregation',
  content: `<p>
Tuples are useful for grouping and aggregating data in various data processing tasks. 
They provide a simple and efficient way to store and manipulate data points, making them ideal for tasks like grouping, filtering, and summarizing data.
</p>

<ul>
<li><strong>Grouping data:</strong> Use tuples to group related data points together.</li>
<li><strong>Aggregating data:</strong> Perform aggregation operations like sum, average, and count on grouped data.</li>
<li><strong>Filtering data:</strong> Use tuples to filter and select specific data points based on certain criteria.</li>
</ul>`,
  codeExample: `# Grouping data
data = [('Alice', 23), ('Bob', 27), ('Alice', 25), ('Bob', 22)]
grouped_data = {}

for name, age in data:
    if name not in grouped_data:
        grouped_data[name] = []
    grouped_data[name].append(age)

print(grouped_data)  # Output: {'Alice': [23, 25], 'Bob': [27, 22]}

# Aggregating data
def average_age(ages):
    return sum(ages) / len(ages)

for name, ages in grouped_data.items():
    print(f"{name}'s average age: {average_age(ages)}")

# Filtering data
filtered_data = [(name, age) for name, age in data if age > 25]
print(filtered_data)  # Output: [('Bob', 27)]`,
  exercises: [
    {
      prompt:
        'Create a list of tuples where each tuple contains a name and an age. Group the data by name and print the grouped data.',
      initialCode: `# Write your solution here
data = `,
      solution: `data = [('Alice', 23), ('Bob', 27), ('Alice', 25), ('Bob', 22)]
grouped_data = {}

for name, age in data:
    if name not in grouped_data:
        grouped_data[name] = []
    grouped_data[name].append(age)

print(grouped_data)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a function that takes a list of tuples (name, age) and returns a dictionary where the keys are names and the values are the average ages of each name.',
      initialCode: `# Write your solution here
def average_ages(data):
    return `,
      solution: `def average_ages(data):
    grouped_data = {}
    
    for name, age in data:
        if name not in grouped_data:
            grouped_data[name] = []
        grouped_data[name].append(age)
    
    averages = {name: sum(ages) / len(ages) for name, ages in grouped_data.items()}
    return averages

data = [('Alice', 23), ('Bob', 27), ('Alice', 25), ('Bob', 22)]
print(average_ages(data))`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to group data using tuples in Python?',
      options: [
        'Using a dictionary where keys are group identifiers and values are lists of tuples',
        'Using a list where each element is a tuple representing a group',
        'Using a set where each element is a tuple representing a group',
        'None of the above',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. A dictionary with lists of tuples as values is a common way to group data.',
        'This is incorrect. Lists are not typically used for grouping data in this way.',
        'This is incorrect. Sets do not maintain order and are not suitable for grouping data.',
        'This is incorrect. The correct answer is using a dictionary with lists of tuples as values.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following is a valid operation for aggregating data grouped by tuples in Python?',
      options: [
        'Summing the values of a specific field in each group',
        'Finding the average value of a specific field in each group',
        'Counting the number of elements in each group',
        'All of the above',
      ],
      correctAnswer: 3,
      explanations: [
        'This is correct. Summing values is a common aggregation operation.',
        'This is correct. Finding averages is a common aggregation operation.',
        'This is correct. Counting elements is a common aggregation operation.',
        'This is correct. All of the above operations are valid for aggregating data.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const tupleStreamsData: LessonContent = {
  title: 'Processing Tuple Streams',
  content: `<p>
Processing streams of tuple data is a common task in data processing pipelines. 
Tuples provide a convenient way to represent and manipulate data points in a stream, making them ideal for tasks like filtering, mapping, and reducing data.
</p>

<ul>
<li><strong>Filtering streams:</strong> Use tuples to filter data points based on certain criteria.</li>
<li><strong>Mapping streams:</strong> Transform data points in a stream using tuples.</li>
<li><strong>Reducing streams:</strong> Aggregate data points in a stream using tuples.</li>
</ul>`,
  codeExample: `# Filtering streams
data_stream = [(1, 'apple'), (2, 'banana'), (3, 'cherry'), (4, 'date')]
filtered_stream = [(num, fruit) for num, fruit in data_stream if num % 2 == 0]
print(filtered_stream)  # Output: [(2, 'banana'), (4, 'date')]

# Mapping streams
mapped_stream = [(num * 2, fruit.upper()) for num, fruit in data_stream]
print(mapped_stream)  # Output: [(2, 'APPLE'), (4, 'BANANA'), (6, 'CHERRY'), (8, 'DATE')]

# Reducing streams
from functools import reduce

def sum_numbers(acc, item):
    return acc + item[0]

total_sum = reduce(sum_numbers, data_stream, 0)
print(total_sum)  # Output: 10`,
  exercises: [
    {
      prompt:
        'Create a list of tuples where each tuple contains a number and a fruit name. Filter the list to include only tuples where the number is greater than 2.',
      initialCode: `# Write your solution here
data_stream = `,
      solution: `data_stream = [(1, 'apple'), (2, 'banana'), (3, 'cherry'), (4, 'date')]
filtered_stream = [(num, fruit) for num, fruit in data_stream if num > 2]
print(filtered_stream)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a function that takes a list of tuples (number, fruit) and returns a new list where each number is doubled and each fruit name is capitalized.',
      initialCode: `# Write your solution here
def transform_stream(data_stream):
    return `,
      solution: `def transform_stream(data_stream):
    return [(num * 2, fruit.capitalize()) for num, fruit in data_stream]

data_stream = [(1, 'apple'), (2, 'banana'), (3, 'cherry'), (4, 'date')]
print(transform_stream(data_stream))`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to filter a stream of tuples in Python?',
      options: [
        'Using a list comprehension with a condition',
        'Using the filter() function with a lambda function',
        'Using the map() function with a condition',
        'All of the above',
      ],
      correctAnswer: 3,
      explanations: [
        'This is correct. List comprehensions with conditions can filter tuples.',
        'This is correct. The filter() function with a lambda can filter tuples.',
        'This is incorrect. The map() function transforms tuples, not filters them.',
        'This is correct. Both list comprehensions and the filter() function can filter tuples.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following is a valid operation for reducing a stream of tuples in Python?',
      options: [
        'Summing the values of a specific field in each tuple',
        'Finding the average value of a specific field in each tuple',
        'Counting the number of elements in each tuple',
        'All of the above',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. Summing values is a common reduction operation.',
        'This is incorrect. Finding averages is not typically done with the reduce() function.',
        'This is incorrect. Counting elements is not typically done with the reduce() function.',
        'This is incorrect. Only summing values is a valid reduction operation.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const tupleLessons: Record<string, LessonContent> = {
  'tuple-basics': tupleBasicsData,
  'tuple-creation': tupleCreationData,
  'tuple-vs-lists': tupleVsListsData,
  'tuple-accessing': tupleAccessingData,
  'tuple-unpacking': tupleUnpackingData,
  'tuple-methods': tupleMethodsData,
  'multiple-returns': multipleReturnsData,
  'tuple-as-key': tupleAsKeyData,
  'named-tuples': namedTuplesData,
  'tuple-performance': tuplePerformanceData,
  'nested-tuples': nestedTuplesData,
  'tuple-conversion': tupleConversionData,
  'tuple-sorting': tupleSortingData,
  'tuple-comparison': tupleComparisonData,
  'coordinate-systems': coordinateSystemsData,
  'state-representation': stateRepresentationData,
  'memory-efficiency': memoryEfficiencyData,
  'tuple-caching': tupleCachingData,
  'data-aggregation': dataAggregationData,
  'tuple-streams': tupleStreamsData
};

export const tupleLessonsTab: LessonsTab = {
  curriculum: tupleCurriculum,
  lessons: tupleLessons,
};
