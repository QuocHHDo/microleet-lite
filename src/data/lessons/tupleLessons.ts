import { Difficulty } from '@/common/commonConcept';
import { Curriculum, LessonContent, LessonsTab, PriorityLevel } from '@/common/commonLesson';

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
          description: 'Understanding what tuples are and their immutable nature',
          priority: PriorityLevel.Essential
        },
        {
          id: 'tuple-creation',
          title: 'Creating and Initializing Tuples',
          description: 'Different ways to define and create tuples in Python',
          priority: PriorityLevel.Essential
        },
        {
          id: 'tuple-vs-lists',
          title: 'Tuples vs Lists vs Sets',
          description: 'Understanding key differences and when to use each data structure',
          priority: PriorityLevel.Essential
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
          priority: PriorityLevel.Essential
        },
        {
          id: 'tuple-unpacking',
          title: 'Tuple Unpacking',
          description: 'Destructuring and unpacking tuple elements',
          priority: PriorityLevel.Important
        },
        {
          id: 'tuple-methods',
          title: 'Built-in Tuple Methods',
          description: 'Understanding count(), index(), and other tuple methods',
          priority: PriorityLevel.Important
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
          description: 'Using tuples for returning multiple values from functions',
          priority: PriorityLevel.Important
        },
        {
          id: 'tuple-as-key',
          title: 'Tuples as Dictionary Keys',
          description: 'Utilizing tuples as immutable dictionary keys',
          priority: PriorityLevel.Beneficial
        },
        {
          id: 'named-tuples',
          title: 'Named Tuples',
          description: 'Working with collections.namedtuple for readable code',
          priority: PriorityLevel.Optional
        },
      ],
    },
    {
      id: 4,
      title: 'Advanced Tuple Concepts',
      topics: [
        {
          id: 'tuple-performance',
          title: 'Time and Space Complexity',
          description: 'Understanding performance characteristics of tuple operations',
          priority: PriorityLevel.Essential
        },
        {
          id: 'nested-tuples',
          title: 'Nested Tuples',
          description: 'Working with tuples within tuples and common patterns',
          priority: PriorityLevel.Important
        },
        {
          id: 'tuple-conversion',
          title: 'Type Conversion',
          description: 'Converting between tuples and other data structures',
          priority: PriorityLevel.Important
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
          description: 'Techniques for sorting lists of tuples and custom comparators',
          priority: PriorityLevel.Essential
        },
        {
          id: 'tuple-comparison',
          title: 'Tuple Comparison',
          description: 'Understanding how tuples are compared and ordered',
          priority: PriorityLevel.Important
        },
        {
          id: 'interview-problems',
          title: 'Common Interview Problems',
          description: 'Practice problems and patterns using tuples from real interviews',
          priority: PriorityLevel.Essential
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
          description: 'Using tuples for representing points and coordinates in graph problems',
          priority: PriorityLevel.Important
        },
        {
          id: 'data-aggregation',
          title: 'Data Aggregation',
          description: 'Using tuples for grouping and aggregating data in interview problems',
          priority: PriorityLevel.Beneficial
        },
      ],
    },
  ],
} as const;

const tupleBasicsData: LessonContent = {
  title: 'Introduction to Tuples',
  content: `<p>
Tuples are immutable sequences that serve as lightweight, efficient containers for ordered collections of items. Think of a tuple like a sealed package that:
</p>
<li>Cannot be modified after creation (immutable)</li>
<li>Maintains order of elements</li>
<li>Can hold different types of data</li>

<p>The key characteristic that sets tuples apart from lists is their <strong>immutability</strong> - once created, their contents cannot be changed.</p>

<h3><u>Key Characteristics of Tuples</u></h3>

<h4><b>Immutability</b></h4>
<li>Cannot add or remove elements</li>
<li>Cannot modify existing elements</li>
<li>Provides data integrity</li>

<h4><b>Use Cases</b></h4>
<li>Returning multiple values from functions</li>
<li>Dictionary keys (unlike lists)</li>
<li>Data that shouldn't change (coordinates, RGB values)</li>
<li>Protecting data from accidental modification</li>

<h3><u>Performance Benefits</u></h3>
<table>
<tr><th>Aspect</th><th>Tuple</th><th>List</th></tr>
<tr><td>Memory Usage</td><td>Less</td><td>More</td></tr>
<tr><td>Creation Speed</td><td>Faster</td><td>Slower</td></tr>
<tr><td>Iteration Speed</td><td>Faster</td><td>Slower</td></tr>
<tr><td>Modification</td><td>Not Possible</td><td>Possible</td></tr>
</table>`,
  codeExample: `# Basic tuple creation
coordinates = (3, 4)
print(f"Point coordinates: {coordinates}")  # (3, 4)

# Multiple data types in a tuple
student = ("Alice", 20, "Computer Science")
name, age, major = student  # Tuple unpacking
print(f"Student: {name}, Age: {age}, Major: {major}")

# Attempting to modify (will raise error)
try:
    coordinates[0] = 5
except TypeError as e:
    print(f"Error: {e}")  # TypeError: 'tuple' object does not support item assignment

# Tuple as dictionary key (valid)
locations = {(0, 0): "Origin", (1, 1): "Point A"}
print(f"Location at origin: {locations[(0, 0)]}")  # "Origin"

# Compare with list (invalid as dict key)
try:
    invalid_dict = {[0, 0]: "Origin"}
except TypeError as e:
    print(f"Error with list: {e}")  # TypeError: unhashable type: 'list'`,
  exercises: [
    {
      prompt: 'Create a tuple containing your name, age, and favorite color. Then use tuple unpacking to assign these values to separate variables.',
      initialCode: `# Write your solution here
my_info = 
name, age, color = `,
      solution: `my_info = ("John", 25, "blue")
name, age, color = my_info
print(f"Name: {name}, Age: {age}, Color: {color}")`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Create a tuple of x,y coordinates representing a triangle. Then write code to calculate the perimeter (you can use math.sqrt for distance).',
      initialCode: `# Write your solution here
import math
triangle = `,
      solution: `import math
triangle = ((0, 0), (3, 0), (0, 4))
def distance(p1, p2):
    return math.sqrt((p2[0] - p1[0])**2 + (p2[1] - p1[1])**2)
perimeter = distance(triangle[0], triangle[1]) + distance(triangle[1], triangle[2]) + distance(triangle[2], triangle[0])
print(f"Triangle perimeter: {perimeter}")`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'Which of the following is a key characteristic of tuples?',
      options: [
        'They can be modified after creation',
        'They are immutable',
        'They can only store numbers',
        'They must contain elements of the same type',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Tuples cannot be modified after creation.',
        'Correct! Immutability is a defining characteristic of tuples.',
        'Incorrect. Tuples can store elements of any type.',
        'Incorrect. Tuples can store elements of different types.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'Why might you choose a tuple over a list?',
      options: [
        'When you need to modify elements frequently',
        'When you want to use it as a dictionary key',
        'When you need to add elements dynamically',
        'When you need to sort the elements',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Tuples cannot be modified after creation.',
        'Correct! Tuples are immutable and hashable, making them suitable as dictionary keys.',
        'Incorrect. Lists are better for dynamic element addition.',
        'Incorrect. Lists are more suitable for sorting operations.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};

const tupleCreationData: LessonContent = {
  title: 'Creating and Initializing Tuples',
  content: `<p>
Python offers several ways to create tuples, each with its own use cases and syntax. Understanding these methods helps you choose the most appropriate one for your needs.
</p>

<h3><u>Methods of Tuple Creation</u></h3>

<h4><b>Direct Creation</b></h4>
<li>Using parentheses: (1, 2, 3)</li>
<li>Without parentheses: 1, 2, 3</li>
<li>Single element: (1,) - Note the comma!</li>

<h4><b>Conversion Methods</b></h4>
<li>tuple() constructor</li>
<li>Converting from lists</li>
<li>Converting from strings</li>
<li>Using generators</li>

<h3><u>Special Cases</u></h3>
<table>
<tr><th>Case</th><th>Syntax</th><th>Result</th></tr>
<tr><td>Empty Tuple</td><td>()</td><td>Empty tuple</td></tr>
<tr><td>Single Element</td><td>(1,)</td><td>Single-element tuple</td></tr>
<tr><td>Mixed Types</td><td>(1, "two", 3.0)</td><td>Mixed-type tuple</td></tr>
<tr><td>Nested Tuples</td><td>((1, 2), (3, 4))</td><td>Nested structure</td></tr>
</table>`,
  codeExample: `# Different ways to create tuples

# Direct creation with parentheses
numbers = (1, 2, 3)
print(f"Numbers tuple: {numbers}")

# Without parentheses (tuple packing)
coordinates = 4, 5, 6
print(f"Coordinates: {coordinates}")

# Single element tuple (note the comma!)
single = (1,)  # Creates a tuple
not_tuple = (1)  # This is just an integer!
print(f"Type of single: {type(single)}")
print(f"Type of not_tuple: {type(not_tuple)}")

# Using tuple() constructor
from_list = tuple([1, 2, 3])
from_string = tuple("hello")
print(f"From list: {from_list}")
print(f"From string: {from_string}")

# Creating nested tuples
matrix = ((1, 2), (3, 4))
print(f"Matrix: {matrix}")

# Generator expression
squares = tuple(x**2 for x in range(5))
print(f"Squares: {squares}")

# Empty tuple
empty = ()
print(f"Empty tuple: {empty}")`,
  exercises: [
    {
      prompt: 'Create three tuples: an empty tuple, a single-element tuple containing the number 5, and a tuple containing the first 5 letters of the alphabet.',
      initialCode: `# Write your solution here
empty_tuple = 
single_tuple = 
letter_tuple = `,
      solution: `empty_tuple = ()
single_tuple = (5,)
letter_tuple = tuple('abcde')
print(f"Empty: {empty_tuple}")
print(f"Single: {single_tuple}")
print(f"Letters: {letter_tuple}")`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Create a nested tuple representing a 3x3 identity matrix (1s on diagonal, 0s elsewhere).',
      initialCode: `# Write your solution here
identity_matrix = `,
      solution: `identity_matrix = (
    (1, 0, 0),
    (0, 1, 0),
    (0, 0, 1)
)
for row in identity_matrix:
    print(row)`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'What is the correct way to create a single-element tuple?',
      options: [
        '(1)',
        '(1,)',
        '[1]',
        'tuple(1)',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. This creates an integer, not a tuple.',
        'Correct! The comma is necessary to create a single-element tuple.',
        'Incorrect. This creates a single-element list.',
        'Incorrect. This would raise an error as tuple() needs an iterable.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'Which of the following will NOT create a valid tuple?',
      options: [
        'tuple("hello")',
        'tuple([1, 2, 3])',
        'tuple(5)',
        '(1, 2, 3)',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. This creates a tuple of characters from the string.',
        'Incorrect. This creates a tuple from a list.',
        'Correct! tuple() requires an iterable argument, not a single number.',
        'Incorrect. This creates a tuple directly.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};

const tupleVsListsData: LessonContent = {
  title: 'Tuples vs Lists vs Sets: Choosing the Right Tool',
  content: `<p>
Understanding when to use tuples, lists, or sets is crucial for writing efficient and maintainable Python code. Each data structure has its own strengths and ideal use cases, much like choosing the right tool for a specific job.
</p>

<h3><u>Core Characteristics Comparison</u></h3>

<h4><b>Tuples: The Immutable Sequence</b></h4>
<p>Think of tuples as sealed containers - once packed, their contents cannot be changed. They're perfect for:</p>
<li>Representing fixed collections (coordinates, RGB values)</li>
<li>Returning multiple values from functions</li>
<li>Using as dictionary keys (due to immutability)</li>
<li>Protecting data from accidental changes</li>

<h4><b>Lists: The Flexible Sequence</b></h4>
<p>Lists are like expandable containers that can be modified at will. They excel at:</p>
<li>Storing collections that need to grow or shrink</li>
<li>Maintaining ordered items that might change</li>
<li>Implementing stacks or queues</li>
<li>Holding items that need sorting or frequent updates</li>

<h4><b>Sets: The Unique Collection</b></h4>
<p>Sets are like bags that automatically eliminate duplicates. They're ideal for:</p>
<li>Removing duplicates from collections</li>
<li>Testing membership efficiently</li>
<li>Performing mathematical set operations</li>
<li>Managing unique identifiers or tags</li>

<h3><u>Performance Comparison</u></h3>
<table>
<tr><th>Operation</th><th>Tuple</th><th>List</th><th>Set</th></tr>
<tr><td>Creation</td><td>Fastest</td><td>Fast</td><td>Slower</td></tr>
<tr><td>Access by Index</td><td>O(1)</td><td>O(1)</td><td>N/A</td></tr>
<tr><td>Search</td><td>O(n)</td><td>O(n)</td><td>O(1)</td></tr>
<tr><td>Insertion</td><td>Not Possible</td><td>O(1) or O(n)</td><td>O(1)</td></tr>
<tr><td>Memory Usage</td><td>Least</td><td>More</td><td>Most</td></tr>
</table>`,
  codeExample: `# Demonstrating key differences between tuples, lists, and sets

# Creation and basic operations
tuple_example = (1, 2, 2, 3)
list_example = [1, 2, 2, 3]
set_example = {1, 2, 2, 3}  # Note: duplicate 2 is removed

print("Initial collections:")
print(f"Tuple: {tuple_example}")  # (1, 2, 2, 3)
print(f"List:  {list_example}")   # [1, 2, 2, 3]
print(f"Set:   {set_example}")    # {1, 2, 3}

# Demonstrating mutability
try:
    tuple_example[0] = 5  # Raises TypeError
except TypeError as e:
    print(f"\nTuple modification error: {e}")

list_example[0] = 5  # Works fine
print(f"Modified list: {list_example}")  # [5, 2, 2, 3]

# Set operations
set_a = {1, 2, 3}
set_b = {3, 4, 5}
print(f"\nSet operations:")
print(f"Union: {set_a | set_b}")        # {1, 2, 3, 4, 5}
print(f"Intersection: {set_a & set_b}")  # {3}
print(f"Difference: {set_a - set_b}")    # {1, 2}

# Memory usage comparison
import sys
numbers = range(1000)
tuple_size = sys.getsizeof(tuple(numbers))
list_size = sys.getsizeof(list(numbers))
set_size = sys.getsizeof(set(numbers))

print(f"\nMemory usage (bytes):")
print(f"Tuple: {tuple_size}")
print(f"List:  {list_size}")
print(f"Set:   {set_size}")`,
  exercises: [
    {
      prompt: 'Create three collections (tuple, list, and set) containing the first 5 even numbers. Then demonstrate a unique feature of each type.',
      initialCode: `# Write your solution here
# Create collections
even_tuple = 
even_list = 
even_set = 

# Demonstrate features`,
      solution: `# Create collections
even_tuple = (2, 4, 6, 8, 10)
even_list = [2, 4, 6, 8, 10]
even_set = {2, 4, 6, 8, 10}

# Demonstrate tuple's immutability advantage as dict key
locations = {even_tuple: "even numbers"}
print(f"Dict with tuple key: {locations}")

# Demonstrate list's mutability
even_list.append(12)
print(f"Modified list: {even_list}")

# Demonstrate set's unique operations
other_numbers = {8, 10, 12, 14}
print(f"Common numbers: {even_set & other_numbers}")`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'Which data structure would be most appropriate for storing coordinates (x, y) that should never change?',
      options: [
        'List, because it\'s more flexible',
        'Tuple, because it\'s immutable and memory-efficient',
        'Set, because it prevents duplicates',
        'Dictionary, because it can store key-value pairs',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Flexibility is not needed for fixed coordinates.',
        'Correct! Tuples are perfect for immutable data like coordinates.',
        'Incorrect. Sets don\'t maintain order and don\'t allow duplicates.',
        'Incorrect. Dictionaries are for key-value mappings, not simple coordinates.',
      ],
      difficulty: Difficulty.Beginner,
    }
  ],
};

const tupleAccessingData: LessonContent = {
  title: 'Accessing Tuple Elements',
  content: `<p>
While tuples are immutable, they provide various powerful ways to access their elements. Understanding these access patterns helps you work effectively with tuple data.
</p>

<h3><u>Basic Access Methods</u></h3>

<h4><b>Indexing</b></h4>
<p>Like lists, tuples use zero-based indexing, allowing you to:</p>
<li>Access elements by position: tuple[0]</li>
<li>Use negative indices: tuple[-1]</li>
<li>Access nested elements: tuple[0][1]</li>

<h4><b>Slicing</b></h4>
<p>Tuple slicing creates new tuples containing requested elements:</p>
<li>Basic slice: tuple[start:end]</li>
<li>With step: tuple[start:end:step]</li>
<li>Reverse: tuple[::-1]</li>

<h3><u>Advanced Access Techniques</u></h3>

<h4><b>Tuple Unpacking</b></h4>
<p>A powerful Python feature that allows:</p>
<li>Multiple assignment: x, y = coordinate_tuple</li>
<li>Partial unpacking with *: first, *rest = number_tuple</li>
<li>Nested unpacking: (x, y), (z, w) = pairs_tuple</li>

<table>
<tr><th>Operation</th><th>Syntax</th><th>Result Type</th></tr>
<tr><td>Single Index</td><td>tuple[i]</td><td>Element</td></tr>
<tr><td>Slice</td><td>tuple[i:j]</td><td>New Tuple</td></tr>
<tr><td>Negative Index</td><td>tuple[-i]</td><td>Element</td></tr>
<tr><td>Nested Access</td><td>tuple[i][j]</td><td>Element</td></tr>
</table>`,
  codeExample: `# Demonstrating various tuple access methods

# Create a sample tuple
coordinates = (1, 2, 3, 4, 5, 6)
nested_tuple = ((1, 2), (3, 4), (5, 6))

# Basic indexing
print("Basic indexing:")
print(f"First element: {coordinates[0]}")    # 1
print(f"Last element: {coordinates[-1]}")    # 6
print(f"Nested element: {nested_tuple[0][1]}")  # 2

# Slicing
print("\nSlicing examples:")
print(f"First three: {coordinates[:3]}")     # (1, 2, 3)
print(f"Last three: {coordinates[-3:]}")     # (4, 5, 6)
print(f"Every second: {coordinates[::2]}")   # (1, 3, 5)
print(f"Reversed: {coordinates[::-1]}")      # (6, 5, 4, 3, 2, 1)

# Tuple unpacking
print("\nTuple unpacking:")
# Basic unpacking
x, y, z, *rest = coordinates
print(f"x={x}, y={y}, z={z}, rest={rest}")  # x=1, y=2, z=3, rest=[4, 5, 6]

# Unpacking with specific variables
first, *middle, last = coordinates
print(f"first={first}, middle={middle}, last={last}")  # first=1, middle=[2,3,4,5], last=6

# Nested unpacking
(a, b), (c, d), *rest = nested_tuple
print(f"a={a}, b={b}, c={c}, d={d}, rest={rest}")  # a=1, b=2, c=3, d=4, rest=[(5, 6)]

# Error handling
try:
    invalid_index = coordinates[10]  # Will raise IndexError
except IndexError as e:
    print(f"\nError accessing invalid index: {e}")

# Using tuple methods
print("\nTuple methods:")
print(f"Count of 2: {coordinates.count(2)}")  # 1
print(f"Index of 3: {coordinates.index(3)}")  # 2`,
  exercises: [
    {
      prompt: 'Given the nested tuple ((1, 2, 3), (4, 5, 6), (7, 8, 9)), extract the middle row and the diagonal elements.',
      initialCode: `# Write your solution here
matrix = ((1, 2, 3), (4, 5, 6), (7, 8, 9))

# Get middle row
middle_row = 

# Get diagonal (1, 5, 9)
diagonal = `,
      solution: `matrix = ((1, 2, 3), (4, 5, 6), (7, 8, 9))

# Get middle row
middle_row = matrix[1]
print(f"Middle row: {middle_row}")

# Get diagonal (1, 5, 9)
diagonal = (matrix[0][0], matrix[1][1], matrix[2][2])
print(f"Diagonal: {diagonal}")`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'What happens when you try to access a tuple index that doesn\'t exist?',
      options: [
        'It returns None',
        'It returns the last element',
        'It raises an IndexError',
        'It creates a new element',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Python raises an error rather than returning None.',
        'Incorrect. Invalid indices don\'t wrap around to valid ones.',
        'Correct! Accessing an invalid index raises an IndexError.',
        'Incorrect. Tuples cannot be modified to create new elements.',
      ],
      difficulty: Difficulty.Beginner,
    }
  ],
};

const tupleUnpackingData: LessonContent = {
  title: 'Tuple Unpacking: Elegant Value Assignment',
  content: `<p>
Tuple unpacking is one of Python's most elegant features, allowing you to extract values from tuples into individual variables in a single, readable operation. This powerful technique makes your code more expressive and maintainable.
</p>

<h3><u>Understanding Tuple Unpacking</u></h3>

<p>Think of tuple unpacking like unpacking a shipping box where each item has its designated place. Just as you might unpack items in a specific order, Python unpacks tuple elements into variables based on their position.</p>

<h4><b>Basic Unpacking Patterns</b></h4>
<p>The simplest form of unpacking matches variables to tuple elements one-to-one:</p>
<li>Simple assignment: x, y = (1, 2)</li>
<li>Multiple values: first, second, third = (1, 2, 3)</li>
<li>Swapping values: a, b = b, a</li>

<h4><b>Advanced Unpacking Techniques</b></h4>
<p>Python 3's extended unpacking syntax offers more sophisticated patterns:</p>
<li>Using * to capture multiple elements: first, *rest = (1, 2, 3, 4)</li>
<li>Ignoring values with _: x, _, z = (1, 2, 3)</li>
<li>Nested unpacking: (x, y), (z, w) = ((1, 2), (3, 4))</li>

<h3><u>Common Use Cases</u></h3>
<table>
<tr><th>Pattern</th><th>Example</th><th>Use Case</th></tr>
<tr><td>Function Returns</td><td>lat, lon = get_coordinates()</td><td>Multiple return values</td></tr>
<tr><td>For Loops</td><td>for key, value in dict.items()</td><td>Iterating over pairs</td></tr>
<tr><td>List Comprehension</td><td>[(x, y) for x, y in points]</td><td>Processing paired data</td></tr>
<tr><td>Nested Data</td><td>(a, (b, c)) = nested_data</td><td>Complex data structures</td></tr>
</table>`,
  codeExample: `# Comprehensive demonstration of tuple unpacking techniques

def demonstrate_unpacking():
    # Basic unpacking
    coordinates = (3, 4)
    x, y = coordinates  # Basic unpacking
    print(f"Coordinates: x={x}, y={y}")

    # Multiple value unpacking
    rgb = (255, 128, 0)
    red, green, blue = rgb
    print(f"RGB values: R={red}, G={green}, B={blue}")

    # Swapping values
    a, b = 1, 2
    print(f"Before swap: a={a}, b={b}")
    a, b = b, a  # Elegant swap without temporary variable
    print(f"After swap: a={a}, b={b}")

    # Extended unpacking with *
    numbers = (1, 2, 3, 4, 5)
    first, *middle, last = numbers
    print(f"First: {first}, Middle: {middle}, Last: {last}")

    # Ignoring values
    x, _, z = (1, 2, 3)  # Ignoring middle value
    print(f"Using underscore: x={x}, z={z}")

    # Nested unpacking
    nested = ((1, 2), (3, 4))
    (a, b), (c, d) = nested
    print(f"Nested values: a={a}, b={b}, c={c}, d={d}")

    # Real-world example: Processing geographic data
    cities = [("New York", (40.7128, -74.0060)),
             ("London", (51.5074, -0.1278))]
    
    for city, (lat, lon) in cities:
        print(f"{city} is located at {lat}°N, {lon}°E")

    return "Demonstration complete!"

# Run the demonstration
demonstrate_unpacking()`,
  exercises: [
    {
      prompt: 'Given a list of student records as tuples (name, age, grade), unpack each record and print them in a formatted way.',
      initialCode: `# Write your solution here
students = [("Alice", 20, "A"), ("Bob", 19, "B"), ("Charlie", 21, "A-")]

# Unpack and print each record`,
      solution: `students = [("Alice", 20, "A"), ("Bob", 19, "B"), ("Charlie", 21, "A-")]

for name, age, grade in students:
    print(f"Student {name}, aged {age}, received grade {grade}")

# Advanced solution with nested data
student_details = [("Alice", (20, "Computer Science"), ["A", "B+", "A-"])]
for name, (age, major), grades in student_details:
    print(f"{name} is {age} years old, majoring in {major}")
    print(f"Grades: {', '.join(grades)}")`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'What happens if you try to unpack a tuple into fewer variables than elements?',
      options: [
        'The extra elements are ignored',
        'It raises a ValueError',
        'The extra elements go into the last variable',
        'It creates new variables automatically',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Python requires exact matching in basic unpacking.',
        'Correct! Python raises a ValueError if the number of variables doesn\'t match the tuple length.',
        'Incorrect. This would only happen with *variable syntax.',
        'Incorrect. Python cannot create variables dynamically during unpacking.',
      ],
      difficulty: Difficulty.Beginner,
    }
  ],
};

const tupleMethodsData: LessonContent = {
  title: 'Built-in Tuple Methods and Operations',
  content: `<p>
While tuples are immutable, they come equipped with several useful methods and operations that help you analyze and work with their contents. Understanding these tools is essential for effective tuple manipulation.
</p>

<h3><u>Core Tuple Methods</u></h3>

<h4><b>count() Method</b></h4>
<p>The count() method tells you how many times an element appears in a tuple:</p>
<li>Syntax: tuple.count(element)</li>
<li>Returns: Integer count of occurrences</li>
<li>Time Complexity: O(n)</li>

<h4><b>index() Method</b></h4>
<p>The index() method finds the first position of an element:</p>
<li>Syntax: tuple.index(element[, start[, end]])</li>
<li>Returns: Index of first occurrence</li>
<li>Raises ValueError if not found</li>

<h3><u>Common Operations</u></h3>
<table>
<tr><th>Operation</th><th>Example</th><th>Result</th></tr>
<tr><td>Concatenation (+)</td><td>(1, 2) + (3, 4)</td><td>(1, 2, 3, 4)</td></tr>
<tr><td>Repetition (*)</td><td>(1, 2) * 2</td><td>(1, 2, 1, 2)</td></tr>
<tr><td>Membership (in)</td><td>3 in (1, 2, 3)</td><td>True</td></tr>
<tr><td>Length (len)</td><td>len((1, 2, 3))</td><td>3</td></tr>
</table>

<h4><b>Additional Features</b></h4>
<p>Tuples also support several built-in functions:</p>
<li>min(): Find smallest element</li>
<li>max(): Find largest element</li>
<li>sum(): Sum numeric elements</li>
<li>sorted(): Return sorted list</li>`,
  codeExample: `# Comprehensive demonstration of tuple methods and operations

def explore_tuple_methods():
    # Create sample tuples
    numbers = (1, 2, 2, 3, 4, 2, 5)
    letters = ('a', 'b', 'c')
    
    # count() method
    count_twos = numbers.count(2)
    print(f"Number of 2s: {count_twos}")  # 3
    
    # index() method with different arguments
    try:
        print(f"First 2 at index: {numbers.index(2)}")  # 1
        print(f"First 2 after index 2: {numbers.index(2, 2)}")  # 5
        print(f"First 2 between indices 2 and 4: {numbers.index(2, 2, 4)}")
    except ValueError as e:
        print(f"Value not found: {e}")
    
    # Tuple concatenation
    combined = numbers + letters
    print(f"Concatenated tuple: {combined}")
    
    # Tuple repetition
    repeated = letters * 2
    print(f"Repeated tuple: {repeated}")
    
    # Membership testing
    print(f"Is 3 in numbers? {'yes' if 3 in numbers else 'no'}")
    print(f"Is 6 in numbers? {'yes' if 6 in numbers else 'no'}")
    
    # Built-in functions with tuples
    numeric_tuple = (1, 5, 3, 8, 2)
    print(f"Minimum: {min(numeric_tuple)}")
    print(f"Maximum: {max(numeric_tuple)}")
    print(f"Sum: {sum(numeric_tuple)}")
    print(f"Sorted: {tuple(sorted(numeric_tuple))}")
    
    # Advanced usage: Combining methods
    data = (1, 2, 2, 3, 2, 4, 2, 5)
    last_two = len(data) - 1 - data[::-1].index(2)
    print(f"Last occurrence of 2 is at index: {last_two}")

    return "Method exploration complete!"

# Run the demonstration
explore_tuple_methods()`,
  exercises: [
    {
      prompt: 'Create a function that finds all indices of a given element in a tuple, using only tuple methods.',
      initialCode: `def find_all_indices(tuple_data, element):
    # Your solution here
    pass

# Test with
test_tuple = (1, 2, 3, 2, 4, 2, 5)
indices = find_all_indices(test_tuple, 2)`,
      solution: `def find_all_indices(tuple_data, element):
    indices = []
    start = 0
    while True:
        try:
            index = tuple_data.index(element, start)
            indices.append(index)
            start = index + 1
        except ValueError:
            break
    return tuple(indices)  # Return as tuple to maintain immutability

# Test the function
test_tuple = (1, 2, 3, 2, 4, 2, 5)
indices = find_all_indices(test_tuple, 2)
print(f"Element 2 appears at indices: {indices}")`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'What happens when you call index() for an element that appears multiple times in a tuple?',
      options: [
        'It returns a list of all indices',
        'It returns the first occurrence only',
        'It returns the last occurrence',
        'It raises an error',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. index() only returns a single value.',
        'Correct! index() returns the index of the first occurrence of the element.',
        'Incorrect. It always returns the first occurrence, not the last.',
        'Incorrect. It only raises an error if the element is not found.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};

const multipleReturnsData: LessonContent = {
  title: 'Multiple Return Values Using Tuples',
  content: `<p>
When a function needs to return more than one value, Python's tuple return feature provides an elegant and efficient solution. Understanding this pattern helps you write cleaner, more expressive code that can communicate multiple pieces of information in a single function call.
</p>

<h3><u>Understanding Multiple Returns</u></h3>

<p>Think of multiple returns like a package delivery service that can bundle several items into a single shipment. Just as the delivery service keeps related items together, tuple returns let us keep related values together in a meaningful way.</p>

<h4><b>Benefits of Tuple Returns</b></h4>
<p>Using tuples for multiple returns offers several advantages:</p>
<li>Clean syntax that clearly shows related values</li>
<li>Efficient memory usage compared to creating class objects</li>
<li>Immediate unpacking capability at the call site</li>
<li>Immutability prevents accidental modifications</li>

<h4><b>Common Return Patterns</b></h4>
<p>Different situations call for different return patterns:</p>
<li>Success/failure pairs: (success_flag, result)</li>
<li>Coordinate pairs: (x, y) or (latitude, longitude)</li>
<li>Data with metadata: (data, timestamp, source)</li>
<li>Aggregate calculations: (minimum, maximum, average)</li>

<h3><u>Best Practices</u></h3>
<table>
<tr><th>Pattern</th><th>Example</th><th>When to Use</th></tr>
<tr><td>Two Values</td><td>(name, age)</td><td>Simple paired data</td></tr>
<tr><td>Three or More</td><td>(x, y, z)</td><td>Related coordinates/values</td></tr>
<tr><td>Named Tuple</td><td>Point(x=1, y=2)</td><td>When names add clarity</td></tr>
<tr><td>Status + Data</td><td>(success, data, error)</td><td>Operation results</td></tr>
</table>`,
  codeExample: `# Comprehensive demonstration of multiple return values using tuples

from typing import Tuple, Optional
from datetime import datetime

def demonstrate_multiple_returns():
    # Basic example: Returning coordinates
    def get_point() -> Tuple[float, float]:
        return (3.14, 2.71)
    
    # Unpack immediately
    x, y = get_point()
    print(f"Point coordinates: ({x}, {y})")
    
    # Return with status flag
    def divide_safely(a: float, b: float) -> Tuple[bool, Optional[float], Optional[str]]:
        try:
            result = a / b
            return (True, result, None)  # Success case
        except ZeroDivisionError:
            return (False, None, "Division by zero")  # Error case
    
    # Handle the status and result
    success, result, error = divide_safely(10, 2)
    print(f"Division result: {'Success: ' + str(result) if success else 'Error: ' + error}")
    
    # Return multiple calculated values
    def analyze_numbers(numbers: list) -> Tuple[float, float, float, int]:
        """Return minimum, maximum, average, and count of numbers."""
        if not numbers:
            return (0.0, 0.0, 0.0, 0)
        count = len(numbers)
        minimum = min(numbers)
        maximum = max(numbers)
        average = sum(numbers) / count
        return (minimum, maximum, average, count)
    
    # Use the analysis results
    numbers = [1, 2, 3, 4, 5]
    min_val, max_val, avg, count = analyze_numbers(numbers)
    print(f"Analysis: min={min_val}, max={max_val}, avg={avg:.2f}, count={count}")
    
    # Return data with metadata
    def fetch_data() -> Tuple[list, datetime, str]:
        """Simulate fetching data with metadata."""
        data = [1, 2, 3]
        timestamp = datetime.now()
        source = "sensor_1"
        return (data, timestamp, source)
    
    # Handle data and metadata separately
    data, timestamp, source = fetch_data()
    print(f"Received {len(data)} readings from {source} at {timestamp}")

    return "Demonstration complete!"

# Run the demonstration
demonstrate_multiple_returns()`,
  exercises: [
    {
      prompt: 'Create a function that takes a string and returns both its length and the count of vowels it contains.',
      initialCode: `def analyze_string(text: str) -> Tuple[int, int]:
    # Your solution here
    pass

# Test with
result = analyze_string("Hello World")
# Should return (11, 3)`,
      solution: `def analyze_string(text: str) -> Tuple[int, int]:
    """
    Analyzes a string and returns its length and vowel count.
    
    Args:
        text: The input string to analyze
        
    Returns:
        Tuple containing (length, vowel_count)
    """
    length = len(text)
    vowels = sum(1 for char in text.lower() if char in 'aeiou')
    return (length, vowels)

# Test the function
test_str = "Hello World"
length, vowel_count = analyze_string(test_str)
print(f"String '{test_str}' has {length} characters and {vowel_count} vowels")`,
      difficulty: Difficulty.Beginner,
    }
  ],
  quizzes: [
    {
      question: 'Why might you choose to return multiple values as a tuple instead of a dictionary?',
      options: [
        'Tuples are always faster than dictionaries',
        'Tuples provide better type checking and are more memory efficient',
        'Dictionaries cannot be returned from functions',
        'Tuples can only store numeric values',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. While tuples can be faster, this isn\'t always true.',
        'Correct! Tuples are more memory efficient and provide better type checking with static typing.',
        'Incorrect. Dictionaries can be returned from functions just like any other object.',
        'Incorrect. Tuples can store any type of data, not just numbers.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};

const tupleAsKeyData: LessonContent = {
  title: 'Using Tuples as Dictionary Keys',
  content: `<p>
One of the unique and powerful features of tuples is their ability to serve as dictionary keys. This capability opens up interesting possibilities for creating complex, multi-dimensional mappings in your Python programs.
</p>

<h3><u>Why Tuples as Keys?</u></h3>

<p>Think of tuple keys as compound identifiers, like using both a street name and house number to identify a location. This combination creates a unique identifier that's more specific than either piece alone.</p>

<h4><b>Advantages of Tuple Keys</b></h4>
<p>Using tuples as dictionary keys offers several benefits:</p>
<li>Create natural multi-dimensional mappings</li>
<li>Combine multiple identifiers into a single key</li>
<li>Maintain data integrity through immutability</li>
<li>Enable efficient lookups of composite keys</li>

<h4><b>Common Use Cases</b></h4>
<p>Tuple keys are particularly useful for:</p>
<li>Grid-based data (using (x, y) coordinates)</li>
<li>Multi-factor lookups (date, location, category)</li>
<li>Caching function calls (arguments as keys)</li>
<li>Graph representations (vertex pairs)</li>

<h3><u>Design Patterns</u></h3>
<table>
<tr><th>Pattern</th><th>Example</th><th>Use Case</th></tr>
<tr><td>Coordinates</td><td>(x, y): value</td><td>Grid/spatial data</td></tr>
<tr><td>Time Series</td><td>(date, metric): value</td><td>Historical data</td></tr>
<tr><td>Compound Keys</td><td>(category, id): value</td><td>Multi-level grouping</td></tr>
<tr><td>Edge Mapping</td><td>(start, end): weight</td><td>Graph structures</td></tr>
</table>`,
  codeExample: `# Comprehensive demonstration of tuples as dictionary keys

def explore_tuple_keys():
    # Simple coordinate-based grid
    grid = {
        (0, 0): "Origin",
        (1, 0): "East",
        (0, 1): "North",
        (1, 1): "Northeast"
    }
    
    print("Grid Navigation:")
    position = (1, 1)
    print(f"Position {position}: {grid.get(position, 'Unknown')}")
    
    # Multi-dimensional data mapping
    temperatures = {
        ("New York", "January"): 0.6,
        ("New York", "July"): 24.5,
        ("London", "January"): 8.3,
        ("London", "July"): 18.7
    }
    
    print("\nTemperature Data:")
    for (city, month), temp in temperatures.items():
        print(f"{city} in {month}: {temp}°C")
    
    # Using tuples for function result caching
    def create_cache():
        cache = {}
        
        def fibonacci(n):
            # Create tuple key from function arguments
            key = ('fibonacci', n)
            
            if key in cache:
                print(f"Cache hit for {n}")
                return cache[key]
            
            if n <= 1:
                result = n
            else:
                result = fibonacci(n-1) + fibonacci(n-2)
            
            cache[key] = result
            return result
        
        return fibonacci
    
    fib = create_cache()
    print("\nFibonacci with caching:")
    print(f"fib(5) = {fib(5)}")
    print(f"fib(5) again = {fib(5)}  # Should show cache hit")
    
    # Graph representation using tuple keys
    graph = {
        ('A', 'B'): 5,  # Edge from A to B with weight 5
        ('B', 'C'): 3,
        ('A', 'C'): 7
    }
    
    print("\nGraph Edges:")
    for (start, end), weight in graph.items():
        print(f"{start} -> {end}: weight = {weight}")
        
    # Demonstrate key immutability
    try:
        bad_key = ([1, 2], "test")  # List is mutable
        test_dict = {bad_key: "value"}
    except TypeError as e:
        print(f"\nError with mutable key: {e}")

    return "Exploration complete!"

# Run the demonstration
explore_tuple_keys()`,
  exercises: [
    {
      prompt: 'Create a grade tracking system using tuples as keys. The keys should combine student name and subject, with values being the grades.',
      initialCode: `def create_grade_system():
    # Your solution here
    grades = {}
    
    # Add some grades
    
    # Create a function to get a student's grades
    
    return grades

# Test the system`,
      solution: `def create_grade_system():
    # Initialize the grade dictionary
    grades = {
        ("Alice", "Math"): 95,
        ("Alice", "Science"): 92,
        ("Bob", "Math"): 88,
        ("Bob", "Science"): 85
    }
    
    def get_student_grades(student_name):
        """Get all grades for a specific student."""
        return {subject: grade 
                for (name, subject), grade in grades.items()
                if name == student_name}
    
    def add_grade(student, subject, grade):
        """Add or update a grade."""
        grades[(student, subject)] = grade
    
    # Test the system
    print("Initial grades:", grades)
    add_grade("Charlie", "Math", 90)
    print("Alice's grades:", get_student_grades("Alice"))
    
    return grades, get_student_grades, add_grade

# Test the system
grades, get_grades, add_grade = create_grade_system()`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'Why can\'t you use a list as part of a tuple key in a dictionary?',
      options: [
        'Lists are too large to be dictionary keys',
        'Python doesn\'t allow composite keys',
        'Lists are mutable and thus unhashable',
        'Tuples can only contain numbers as keys',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Size is not the determining factor for key eligibility.',
        'Incorrect. Python allows composite keys if they\'re immutable.',
        'Correct! Dictionary keys must be immutable (hashable). Lists are mutable, so they can\'t be used in keys.',
        'Incorrect. Tuples can contain any immutable types as part of dictionary keys.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};
const namedTuplesData: LessonContent = {
  title: 'Named Tuples: Adding Clarity to Tuple Data',
  content: `<p>
Named tuples elevate regular tuples by adding semantic meaning to their elements. Think of them as a lightweight alternative to creating full classes, perfect for when you need both the efficiency of tuples and the readability of meaningful field names.
</p>

<h3><u>Understanding Named Tuples</u></h3>

<p>
Regular tuples identify elements by position (index), similar to how you might refer to "the third house on the left." Named tuples let you refer to elements by meaningful names, like referring to "the kitchen" or "the bedroom" - much clearer and less prone to confusion.
</p>

<h4><b>Key Features of Named Tuples</b></h4>
<p>Named tuples provide several advantages over regular tuples:</p>
<li>Self-documenting field names improve code readability</li>
<li>Maintains tuple immutability for data integrity</li>
<li>Supports both index and name-based access</li>
<li>Compatible with regular tuple operations</li>
<li>Memory efficient compared to full classes</li>

<h4><b>Creating Named Tuples</b></h4>
<p>We can create named tuples in two main ways:</p>
<li>Using collections.namedtuple</li>
<li>Using the newer typing.NamedTuple (with type hints)</li>

<h3><u>Common Use Cases</u></h3>
<table>
<tr><th>Use Case</th><th>Example</th><th>Benefit</th></tr>
<tr><td>Coordinates</td><td>Point(x=10, y=20)</td><td>Clear axis labeling</td></tr>
<tr><td>Data Records</td><td>Employee(name="Alice", id=123)</td><td>Readable record fields</td></tr>
<tr><td>Configuration</td><td>Config(host="localhost", port=8080)</td><td>Self-documenting settings</td></tr>
<tr><td>Statistics</td><td>Stats(mean=4.5, median=4.0)</td><td>Named statistical values</td></tr>
</table>`,
  codeExample: `# Comprehensive demonstration of named tuples

from collections import namedtuple
from typing import NamedTuple
from datetime import datetime

def explore_named_tuples():
    # Basic named tuple creation and usage
    Point = namedtuple('Point', ['x', 'y'])
    
    # Creating instances
    p1 = Point(3, 4)
    p2 = Point(x=5, y=6)  # Using keyword arguments
    
    print(f"Point p1: {p1}")
    print(f"Access by name: x={p1.x}, y={p1.y}")
    print(f"Access by index: x={p1[0]}, y={p1[1]}")
    
    # Using typing.NamedTuple for better type hints
    class Employee(NamedTuple):
        name: str
        id: int
        hire_date: datetime
        department: str = "General"  # Default value
    
    # Creating employee records
    alice = Employee("Alice Smith", 12345, 
                    datetime(2020, 1, 15))
    bob = Employee("Bob Jones", 12346,
                  datetime(2021, 3, 1), 
                  "Engineering")
    
    print(f"\nEmployee: {alice}")
    print(f"Department: {alice.department}")  # Uses default
    print(f"Bob's dept: {bob.department}")   # Uses specified value
    
    # Demonstrating tuple compatibility
    employees = [alice, bob]
    sorted_by_id = sorted(employees, key=lambda e: e.id)
    print("\nSorted employees:", sorted_by_id)
    
    # Converting to dictionary
    alice_dict = alice._asdict()
    print(f"\nAs dictionary: {alice_dict}")
    
    # Advanced usage: Extending named tuples
    class Point3D(NamedTuple):
        x: float
        y: float
        z: float
        
        def magnitude(self) -> float:
            """Calculate distance from origin."""
            return (self.x**2 + self.y**2 + self.z**2)**0.5
    
    point3d = Point3D(1, 2, 3)
    print(f"\n3D Point magnitude: {point3d.magnitude():.2f}")
    
    # Demonstrating immutability
    try:
        alice.department = "Sales"  # This will raise an error
    except AttributeError as e:
        print(f"\nAttempted modification error: {e}")
    
    return "Named tuple exploration complete!"

# Run the demonstration
explore_named_tuples()`,
  exercises: [
    {
      prompt: 'Create a named tuple called "BookRecord" that stores information about books (title, author, year, ISBN). Then create a function that sorts a list of books by year.',
      initialCode: `from typing import NamedTuple, List

# Create your BookRecord here

def sort_books_by_year(books: List[BookRecord]) -> List[BookRecord]:
    # Your solution here
    pass

# Test with some sample books`,
      solution: `from typing import NamedTuple, List

class BookRecord(NamedTuple):
    title: str
    author: str
    year: int
    isbn: str

def sort_books_by_year(books: List[BookRecord]) -> List[BookRecord]:
    """Sort books by publication year."""
    return sorted(books, key=lambda book: book.year)

# Test the implementation
books = [
    BookRecord("1984", "George Orwell", 1949, "978-0451524935"),
    BookRecord("The Hobbit", "J.R.R. Tolkien", 1937, "978-0547928227"),
    BookRecord("Dune", "Frank Herbert", 1965, "978-0441172719")
]

sorted_books = sort_books_by_year(books)
for book in sorted_books:
    print(f"{book.year}: {book.title} by {book.author}")`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'What is the main advantage of using named tuples over regular tuples?',
      options: [
        'Named tuples are faster than regular tuples',
        'Named tuples allow modification of values',
        'Named tuples provide meaningful field names for better readability',
        'Named tuples use less memory than regular tuples',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Named tuples have similar performance to regular tuples.',
        'Incorrect. Named tuples are immutable, just like regular tuples.',
        'Correct! Named tuples add semantic meaning through field names, making code more readable and maintainable.',
        'Incorrect. Named tuples actually use slightly more memory than regular tuples.',
      ],
      difficulty: Difficulty.Beginner,
    }
  ],
};

const tuplePerformanceData: LessonContent = {
  title: 'Time and Space Complexity of Tuple Operations',
  content: `<p>
Understanding the performance characteristics of tuples helps you make informed decisions about when to use them and how they impact your program's efficiency. Let's explore why tuples are often the perfect choice for certain scenarios, and what performance trade-offs they present.
</p>

<h3><u>Core Performance Characteristics</u></h3>

<p>
Think of a tuple like a sealed box with compartments - once created, its structure remains fixed. This immutability leads to several performance advantages but also some limitations that we need to understand.
</p>

<h4><b>Memory Efficiency</b></h4>
<p>Tuples offer several memory advantages:</p>
<li>Fixed size allocation at creation</li>
<li>No over-allocation for growth</li>
<li>Compact memory representation</li>
<li>Shared memory for identical tuples</li>

<h4><b>Operation Complexities</b></h4>
<p>Understanding these helps predict performance:</p>
<li>Creation: O(n) - linear with number of elements</li>
<li>Access by index: O(1) - constant time</li>
<li>Slicing: O(k) - linear with slice size</li>
<li>Length: O(1) - constant time</li>

<h3><u>Performance Comparison</u></h3>
<table>
<tr><th>Operation</th><th>Tuple</th><th>List</th><th>Reason</th></tr>
<tr><td>Creation</td><td>O(n)</td><td>O(n)</td><td>Both copy elements</td></tr>
<tr><td>Access</td><td>O(1)</td><td>O(1)</td><td>Direct indexing</td></tr>
<tr><td>Search</td><td>O(n)</td><td>O(n)</td><td>Sequential scan</td></tr>
<tr><td>Memory</td><td>Less</td><td>More</td><td>No growth buffer</td></tr>
</table>`,
  codeExample: `# Comprehensive demonstration of tuple performance characteristics

import sys
import timeit
import time
from typing import Tuple, List
import matplotlib.pyplot as plt

def analyze_tuple_performance():
    def compare_memory_usage():
        """Compare memory usage between tuples and lists."""
        sizes = [1000, 10000, 100000]
        tuple_sizes = []
        list_sizes = []
        
        for size in sizes:
            data = range(size)
            tuple_size = sys.getsizeof(tuple(data))
            list_size = sys.getsizeof(list(data))
            
            tuple_sizes.append(tuple_size)
            list_sizes.append(list_size)
            
            print(f"\nSize {size}:")
            print(f"Tuple size: {tuple_size} bytes")
            print(f"List size: {list_size} bytes")
            print(f"Difference: {list_size - tuple_size} bytes")
    
    def measure_access_time():
        """Compare access times for tuples and lists."""
        size = 1000000
        data = range(size)
        tuple_data = tuple(data)
        list_data = list(data)
        
        def access_elements(container):
            for _ in range(1000):
                _ = container[size // 2]
        
        tuple_time = timeit.timeit(
            lambda: access_elements(tuple_data), 
            number=100
        )
        list_time = timeit.timeit(
            lambda: access_elements(list_data), 
            number=100
        )
        
        print(f"\nAccess time comparison:")
        print(f"Tuple access: {tuple_time:.6f} seconds")
        print(f"List access: {list_time:.6f} seconds")
    
    def measure_creation_time():
        """Compare creation times for tuples and lists."""
        def create_tuple():
            return tuple(range(1000))
        
        def create_list():
            return list(range(1000))
        
        tuple_time = timeit.timeit(create_tuple, number=10000)
        list_time = timeit.timeit(create_list, number=10000)
        
        print(f"\nCreation time comparison:")
        print(f"Tuple creation: {tuple_time:.6f} seconds")
        print(f"List creation: {list_time:.6f} seconds")
    
    def demonstrate_immutability_overhead():
        """Show how immutability affects operations."""
        def modify_list(lst):
            for i in range(len(lst)):
                lst[i] += 1
        
        def modify_with_tuples(tup):
            # Need to create new tuple each time
            return tuple(x + 1 for x in tup)
        
        size = 10000
        lst = list(range(size))
        tup = tuple(range(size))
        
        list_start = time.time()
        modify_list(lst)
        list_time = time.time() - list_start
        
        tuple_start = time.time()
        new_tup = modify_with_tuples(tup)
        tuple_time = time.time() - tuple_start
        
        print(f"\nModification comparison:")
        print(f"List modification: {list_time:.6f} seconds")
        print(f"Tuple modification (new tuple): {tuple_time:.6f} seconds")
    
    # Run all comparisons
    compare_memory_usage()
    measure_access_time()
    measure_creation_time()
    demonstrate_immutability_overhead()
    
    return "Performance analysis complete!"

# Run the performance analysis
analyze_tuple_performance()`,
  exercises: [
    {
      prompt: 'Create a function that compares the performance of searching for elements in tuples versus lists. Include timing for both best case (first element) and worst case (last element).',
      initialCode: `import time
from typing import Tuple, List

def compare_search_performance(size: int) -> None:
    # Create your test data and comparison here
    pass

# Test with different sizes`,
      solution: `import time
from typing import Tuple, List

def compare_search_performance(size: int) -> None:
    """Compare search performance between tuples and lists."""
    # Create test data
    list_data = list(range(size))
    tuple_data = tuple(range(size))
    
    def time_search(container, value):
        start = time.perf_counter()
        _ = value in container
        return time.perf_counter() - start
    
    # Best case (first element)
    list_best = time_search(list_data, 0)
    tuple_best = time_search(tuple_data, 0)
    
    # Worst case (last element)
    list_worst = time_search(list_data, size-1)
    tuple_worst = time_search(tuple_data, size-1)
    
    print(f"Size: {size}")
    print("Best case (first element):")
    print(f"  List:  {list_best:.6f} seconds")
    print(f"  Tuple: {tuple_best:.6f} seconds")
    print("Worst case (last element):")
    print(f"  List:  {list_worst:.6f} seconds")
    print(f"  Tuple: {tuple_worst:.6f} seconds")

# Test with different sizes
for size in [1000, 10000, 100000]:
    compare_search_performance(size)
    print()`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'Why do tuples generally use less memory than lists?',
      options: [
        'Tuples can only store small data types',
        'Tuples use a more efficient storage format',
        'Tuples don\'t need extra space for potential growth',
        'Tuples compress their data automatically',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Tuples can store any data type, just like lists.',
        'Incorrect. The basic storage format is similar to lists.',
        'Correct! Lists allocate extra space for potential additions, while tuples have a fixed size.',
        'Incorrect. Tuples don\'t automatically compress their data.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};

const nestedTuplesData: LessonContent = {
  title: 'Working with Nested Tuples: Understanding Complex Data Structures',
  content: `<p>
Nested tuples are like Russian nesting dolls - tuples within tuples that allow us to represent hierarchical and multi-dimensional data structures. Understanding how to work with nested tuples effectively opens up powerful ways to organize and manipulate complex data.
</p>

<h3><u>Understanding Nested Tuples</u></h3>

<p>
Think of nested tuples as creating a tree-like structure. Just as a family tree can have multiple generations, a nested tuple can have multiple levels of depth. Each inner tuple maintains its own immutability while contributing to the larger structure.
</p>

<h4><b>Common Use Cases</b></h4>
<p>Nested tuples excel in representing:</p>
<li>Multi-dimensional coordinates (3D points, matrices)</li>
<li>Hierarchical data (organization structures, file paths)</li>
<li>Game states (board positions, player moves)</li>
<li>Complex configurations (network settings, application states)</li>

<h4><b>Design Patterns</b></h4>
<p>Several patterns emerge when working with nested tuples:</p>
<li>Matrix representation using rows and columns</li>
<li>Tree-like structures for hierarchical data</li>
<li>State machines with compound states</li>
<li>Grouped data with fixed relationships</li>

<h3><u>Access Patterns</u></h3>
<table>
<tr><th>Operation</th><th>Example</th><th>Result Type</th></tr>
<tr><td>Single Level</td><td>data[0]</td><td>Tuple or Element</td></tr>
<tr><td>Multiple Levels</td><td>data[0][1]</td><td>Element</td></tr>
<tr><td>Slicing</td><td>data[0:2]</td><td>Tuple of Tuples</td></tr>
<tr><td>Unpacking</td><td>(a, (b, c))</td><td>Multiple Variables</td></tr>
</table>`,
  codeExample: `# Comprehensive demonstration of nested tuples

def explore_nested_tuples():
    # Basic nested tuple creation and access
    matrix = (
        (1, 2, 3),
        (4, 5, 6),
        (7, 8, 9)
    )
    
    print("Basic matrix:")
    for row in matrix:
        print(row)
    
    # Accessing nested elements
    print(f"\nElement at row 1, col 1: {matrix[1][1]}")  # 5
    
    # Complex nested structure
    organization = (
        ("Engineering", 
            ("Frontend", ("Alice", "Bob")),
            ("Backend", ("Charlie", "David"))
        ),
        ("Marketing",
            ("Digital", ("Eve", "Frank")),
            ("Print", ("George", "Helen"))
        )
    )
    
    def print_org_structure(structure, level=0):
        """Recursively print organization structure."""
        indent = "  " * level
        
        if isinstance(structure, str):
            print(f"{indent}- {structure}")
            return
            
        for item in structure:
            if isinstance(item, tuple):
                print_org_structure(item, level + 1)
            else:
                print(f"{indent}- {item}")
    
    print("\nOrganization Structure:")
    print_org_structure(organization)
    
    # Working with game states
    chess_board = (
        (("R", "W"), ("N", "W"), ("B", "W")),  # Piece and color
        (("P", "W"), ("P", "W"), ("P", "W")),
        (("P", "B"), ("P", "B"), ("P", "B")),
        (("R", "B"), ("N", "B"), ("B", "B"))
    )
    
    def get_piece_info(board, row, col):
        """Get piece and color at position."""
        piece, color = board[row][col]
        return f"{piece}{'♟' if color == 'W' else '♙'}"
    
    print("\nChess Board Segment:")
    for row_idx, row in enumerate(chess_board):
        row_str = ""
        for col_idx, _ in enumerate(row):
            row_str += f"{get_piece_info(chess_board, row_idx, col_idx)} "
        print(row_str)
    
    # Recursive unpacking
    def unpack_nested(structure, prefix=""):
        """Recursively unpack nested structure."""
        results = []
        if not isinstance(structure, tuple):
            return [prefix + str(structure)]
            
        for i, item in enumerate(structure):
            new_prefix = f"{prefix}{i}."
            results.extend(unpack_nested(item, new_prefix))
        return results
    
    simple_nested = ((1, 2), (3, (4, 5)))
    print("\nUnpacked paths:")
    for path in unpack_nested(simple_nested):
        print(path)
        
    return "Nested tuple exploration complete!"

# Run the demonstration
explore_nested_tuples()`,
  exercises: [
    {
      prompt: 'Create a function that finds the maximum depth of a nested tuple structure. For example, (1, (2, 3), (4, (5, 6))) has a depth of 3.',
      initialCode: `def find_max_depth(nested_tuple):
    # Your solution here
    pass

# Test cases
test_cases = [
    (1, 2, 3),
    (1, (2, 3), 4),
    (1, (2, (3, 4)), 5),
    ((1, 2), (3, (4, (5, 6))))
]`,
      solution: `def find_max_depth(nested_tuple):
    """
    Find the maximum depth of a nested tuple structure.
    
    Args:
        nested_tuple: A potentially nested tuple
        
    Returns:
        int: The maximum depth of the structure
    """
    if not isinstance(nested_tuple, tuple):
        return 0
        
    if not nested_tuple:  # Empty tuple
        return 1
        
    return 1 + max(find_max_depth(item) for item in nested_tuple)

# Test the function
test_cases = [
    (1, 2, 3),
    (1, (2, 3), 4),
    (1, (2, (3, 4)), 5),
    ((1, 2), (3, (4, (5, 6))))
]

for test in test_cases:
    depth = find_max_depth(test)
    print(f"Tuple {test} has depth {depth}")`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'What happens when you modify an element within a nested tuple?',
      options: [
        'Only the inner element changes',
        'The entire tuple is updated',
        'A TypeError is raised because tuples are immutable',
        'The change is only temporary',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Tuples are immutable at all levels.',
        'Incorrect. Tuples cannot be modified at all.',
        'Correct! Tuples are immutable, so attempting to modify any part raises a TypeError.',
        'Incorrect. No changes are possible to any part of a tuple.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};

const tupleConversionData: LessonContent = {
  title: 'Type Conversion with Tuples: Bridging Data Structures',
  content: `<p>
Converting between tuples and other data structures is a fundamental skill that enables flexible data manipulation. Understanding these conversions helps you work seamlessly with different parts of Python's ecosystem.
</p>

<h3><u>Understanding Type Conversion</u></h3>

<p>
Think of type conversion like translation between languages. Just as a story can be told in different languages while maintaining its meaning, data can be represented in different structures while preserving its content and relationships.
</p>

<h4><b>Common Conversion Patterns</b></h4>
<p>You'll frequently convert between:</p>
<li>Lists and tuples (bi-directional)</li>
<li>Strings and tuples (splitting and joining)</li>
<li>Sets and tuples (removing duplicates)</li>
<li>Dictionaries and tuples (items view)</li>

<h4><b>Conversion Considerations</b></h4>
<p>When converting, consider:</p>
<li>Data immutability requirements</li>
<li>Performance implications</li>
<li>Memory usage differences</li>
<li>Functionality needs (e.g., hash ability)</li>

<h3><u>Conversion Methods</u></h3>
<table>
<tr><th>From</th><th>To</th><th>Method</th><th>Notes</th></tr>
<tr><td>List</td><td>Tuple</td><td>tuple(list)</td><td>Creates immutable copy</td></tr>
<tr><td>Tuple</td><td>List</td><td>list(tuple)</td><td>Creates mutable copy</td></tr>
<tr><td>String</td><td>Tuple</td><td>tuple(string)</td><td>Character by character</td></tr>
<tr><td>Set</td><td>Tuple</td><td>tuple(set)</td><td>Unordered conversion</td></tr>
</table>`,
  codeExample: `# Comprehensive demonstration of tuple conversions

def explore_tuple_conversions():
    # List to tuple conversion
    numbers_list = [1, 2, 3, 4, 5]
    numbers_tuple = tuple(numbers_list)
    print(f"List to tuple: {numbers_tuple}")
    
    # Tuple to list conversion
    back_to_list = list(numbers_tuple)
    print(f"Tuple to list: {back_to_list}")
    
    # String conversions
    text = "Hello"
    char_tuple = tuple(text)
    print(f"\nString to tuple: {char_tuple}")
    
    # Join tuple back to string
    text_again = ''.join(char_tuple)
    print(f"Back to string: {text_again}")
    
    # Set conversion (removes duplicates)
    duplicate_list = [1, 2, 2, 3, 3, 4]
    unique_tuple = tuple(set(duplicate_list))
    print(f"\nUnique elements: {unique_tuple}")
    
    # Dictionary conversions
    data_dict = {'a': 1, 'b': 2, 'c': 3}
    
    # Get tuples of key-value pairs
    items_tuple = tuple(data_dict.items())
    print(f"\nDict items to tuple: {items_tuple}")
    
    # Convert back to dictionary
    dict_again = dict(items_tuple)
    print(f"Back to dict: {dict_again}")
    
    # Advanced conversions
    
    # Generator to tuple
    squares_gen = (x**2 for x in range(5))
    squares_tuple = tuple(squares_gen)
    print(f"\nGenerator to tuple: {squares_tuple}")
    
    # Zip to tuple
    names = ['Alice', 'Bob', 'Charlie']
    ages = [25, 30, 35]
    people = tuple(zip(names, ages))
    print(f"\nZipped tuple: {people}")
    
    # Tuple comprehension (actually creates generator first)
    even_tuple = tuple(x for x in range(10) if x % 2 == 0)
    print(f"\nTuple comprehension: {even_tuple}")
    
    # Nested structure conversions
    nested_list = [[1, 2], [3, 4], [5, 6]]
    
    # Convert to nested tuple
    def deep_tuple(obj):
        """Recursively convert nested structure to tuples."""
        if isinstance(obj, (list, tuple)):
            return tuple(deep_tuple(item) for item in obj)
        return obj
    
    nested_tuple = deep_tuple(nested_list)
    print(f"\nNested conversion: {nested_tuple}")
    
    return "Conversion exploration complete!"

# Run the demonstration
explore_tuple_conversions()`,
  exercises: [
    {
      prompt: 'Create a function that converts a nested dictionary structure into a tuple structure, preserving the hierarchy.',
      initialCode: `def dict_to_nested_tuple(data):
    # Your solution here
    pass

# Test with
test_dict = {
    'a': 1,
    'b': {
        'c': 2,
        'd': {'e': 3}
    }
}`,
      solution: `def dict_to_nested_tuple(data):
    """
    Convert a nested dictionary into a nested tuple structure.
    
    Args:
        data: A potentially nested dictionary
        
    Returns:
        A nested tuple structure
    """
    if not isinstance(data, dict):
        return data
        
    items = []
    for key, value in sorted(data.items()):
        items.append((key, dict_to_nested_tuple(value)))
    
    return tuple(items)

# Test the function
test_dict = {
    'a': 1,
    'b': {
        'c': 2,
        'd': {'e': 3}
    }
}

result = dict_to_nested_tuple(test_dict)
print("Original dict:", test_dict)
print("Nested tuple:", result)

# Verify access
print("\nAccessing values:")
print(f"First level: {result[0][1]}")  # Value of 'a'
print(f"Second level: {result[1][1][0][1]}")  # Value of 'c'`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'What happens when you convert a tuple to a set and back to a tuple?',
      options: [
        'The elements remain in the same order',
        'Duplicate elements are preserved',
        'The order may change and duplicates are removed',
        'The tuple becomes immutable',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Sets are unordered, so the original order is not preserved.',
        'Incorrect. Sets remove duplicates by definition.',
        'Correct! Sets are unordered and remove duplicates, affecting both order and uniqueness.',
        'Incorrect. Tuples are always immutable, regardless of conversion.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};

const tupleSortingData: LessonContent = {
  title: 'Sorting Tuples: From Basic to Advanced Techniques',
  content: `<p>
When working with collections of tuples, sorting helps us organize data in meaningful ways. Understanding how to sort tuples effectively opens up powerful data organization capabilities, whether you're working with simple pairs or complex nested structures.
</p>

<h3><u>Understanding Tuple Sorting</u></h3>

<p>
Think of sorting tuples like organizing a library. Just as books can be arranged by different criteria (author, title, publication date), tuples can be sorted based on different elements or combinations of elements. The key is understanding which elements should drive the organization.
</p>

<h4><b>Natural Sorting Behavior</b></h4>
<p>When sorting tuples, Python follows these principles:</p>
<li>Compares elements position by position</li>
<li>Moves to next position only if current positions are equal</li>
<li>Considers both type and value when comparing</li>
<li>Maintains stability (preserves relative order of equal elements)</li>

<h4><b>Advanced Sorting Techniques</b></h4>
<p>We can customize sorting through several approaches:</p>
<li>Using key functions to specify sort criteria</li>
<li>Implementing custom comparison logic</li>
<li>Sorting on multiple fields with compound keys</li>
<li>Handling special cases and missing values</li>

<h3><u>Common Sorting Patterns</u></h3>
<table>
<tr><th>Pattern</th><th>Method</th><th>Use Case</th></tr>
<tr><td>Simple Sort</td><td>sorted(tuples)</td><td>Natural element order</td></tr>
<tr><td>Key Sort</td><td>sorted(tuples, key=lambda x: x[1])</td><td>Specific element</td></tr>
<tr><td>Reverse Sort</td><td>sorted(tuples, reverse=True)</td><td>Descending order</td></tr>
<tr><td>Multiple Keys</td><td>sorted(tuples, key=lambda x: (x[1], x[0]))</td><td>Complex ordering</td></tr>
</table>`,
  codeExample: `# Comprehensive demonstration of tuple sorting techniques

from typing import Tuple, List
from operator import itemgetter
from datetime import datetime

def explore_tuple_sorting():
    # Basic sorting
    simple_tuples = [(3, 'c'), (1, 'a'), (2, 'b')]
    print("Natural sort:")
    print(sorted(simple_tuples))
    
    # Student records: (name, grade, age)
    students = [
        ('Alice', 'A', 20),
        ('Bob', 'B', 19),
        ('Charlie', 'A', 22),
        ('David', 'C', 20),
        ('Eve', 'B', 19)
    ]
    
    # Sort by single field using lambda
    by_age = sorted(students, key=lambda x: x[2])
    print("\nSorted by age (lambda):")
    for student in by_age:
        print(f"{student[0]}: {student[2]} years old")
    
    # Sort by single field using itemgetter (more efficient)
    by_grade = sorted(students, key=itemgetter(1))
    print("\nSorted by grade (itemgetter):")
    for student in by_grade:
        print(f"{student[0]}: Grade {student[1]}")
    
    # Multiple field sorting
    by_grade_and_age = sorted(students, key=lambda x: (x[1], x[2]))
    print("\nSorted by grade, then age:")
    for student in by_grade_and_age:
        print(f"{student[0]}: Grade {student[1]}, Age {student[2]}")
    
    # Complex sorting with custom key function
    def grade_to_number(grade):
        """Convert letter grade to numeric value for sorting."""
        return {'A': 1, 'B': 2, 'C': 3}.get(grade, 4)
    
    def student_sort_key(student):
        """Complex sort key combining grade quality and age."""
        name, grade, age = student
        return (grade_to_number(grade), -age)  # Higher age breaks grade ties
    
    by_grade_quality = sorted(students, key=student_sort_key)
    print("\nSorted by grade quality and age (descending):")
    for student in by_grade_quality:
        print(f"{student[0]}: Grade {student[1]}, Age {student[2]}")
    
    # Handling missing or special values
    records = [
        ('A', 100, None),
        ('B', None, 90),
        ('C', 85, 95),
        ('D', 90, 85)
    ]
    
    def safe_sort_key(record):
        """Handle missing values in sort."""
        name, score1, score2 = record
        # Use -1 for None values to sort them last
        return (score1 if score1 is not None else -1,
                score2 if score2 is not None else -1)
    
    sorted_records = sorted(records, key=safe_sort_key, reverse=True)
    print("\nSorted with missing values:")
    for record in sorted_records:
        print(f"Name: {record[0]}, Scores: {record[1]}, {record[2]}")
    
    # Sorting with mixed types (carefully!)
    mixed_tuples = [
        (1, 'a'), 
        (2, 100),
        (1, datetime.now()),
        (2, 'b')
    ]
    
    def mixed_sort_key(item):
        """Handle mixed types by categorizing second element."""
        _, second = item
        # Create a tuple with type priority and string representation
        return (
            isinstance(second, str),
            isinstance(second, int),
            isinstance(second, datetime),
            str(second)
        )
    
    try:
        sorted_mixed = sorted(mixed_tuples, key=mixed_sort_key)
        print("\nSorted mixed types:")
        for item in sorted_mixed:
            print(f"{item[0]}: {item[1]}")
    except TypeError as e:
        print(f"Error sorting mixed types: {e}")
    
    return "Sorting exploration complete!"

# Run the demonstration
explore_tuple_sorting()`,
  exercises: [
    {
      prompt: 'Create a function that sorts a list of student tuples (name, grade, age) first by grade (A > B > C) and then by age (younger first). Include error handling for invalid grades.',
      initialCode: `def sort_students(students):
    """
    Sort students by grade (A > B > C) and then by age (ascending).
    
    Args:
        students: List of tuples (name, grade, age)
    Returns:
        Sorted list of student tuples
    """
    # Your solution here
    pass

# Test with
students = [
    ('Alice', 'B', 20),
    ('Bob', 'A', 22),
    ('Charlie', 'C', 19),
    ('David', 'B', 18)
]`,
      solution: `def sort_students(students):
    """
    Sort students by grade (A > B > C) and then by age (ascending).
    
    Args:
        students: List of tuples (name, grade, age)
    Returns:
        Sorted list of student tuples
    """
    def grade_value(grade):
        """Convert grade to numeric value for sorting."""
        grade_map = {'A': 1, 'B': 2, 'C': 3}
        if grade not in grade_map:
            raise ValueError(f"Invalid grade: {grade}")
        return grade_map[grade]
    
    def student_sort_key(student):
        """Create sort key from grade and age."""
        try:
            name, grade, age = student
            return (grade_value(grade), age)
        except ValueError as e:
            raise ValueError(f"Invalid student record: {e}")
    
    try:
        return sorted(students, key=student_sort_key)
    except ValueError as e:
        print(f"Error during sorting: {e}")
        return []

# Test the function
students = [
    ('Alice', 'B', 20),
    ('Bob', 'A', 22),
    ('Charlie', 'C', 19),
    ('David', 'B', 18)
]

sorted_students = sort_students(students)
print("\nSorted students:")
for student in sorted_students:
    print(f"{student[0]}: Grade {student[1]}, Age {student[2]}")

# Test error handling
try:
    invalid_students = students + [('Eve', 'D', 21)]
    sort_students(invalid_students)
except ValueError as e:
    print(f"\nCaught error: {e}")`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'When sorting tuples using a key function, what does the function return?',
      options: [
        'A boolean indicating if two elements should be swapped',
        'A new tuple with modified values',
        'A value or tuple of values to use for comparison',
        'A sorted list of the original tuples',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Key functions return comparison values, not swap decisions.',
        'Incorrect. Key functions return comparison values without modifying the original.',
        'Correct! The key function returns a value or tuple that Python uses for comparison.',
        'Incorrect. The sorting function, not the key function, returns the sorted list.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};

const tupleComparisonData: LessonContent = {
  title: 'Deep Dive into Tuple Comparison',
  content: `<p>
To truly understand how tuples are compared in Python, let's explore the underlying mechanisms and rules that govern these comparisons. Imagine tuples as sequences of numbers in a combination lock - the comparison happens digit by digit, and the first difference determines the outcome.
</p>

<h3><u>The Fundamental Rules of Tuple Comparison</u></h3>

<p>
Tuple comparison follows a systematic process, much like how we might compare two books by first looking at chapters, then pages, then paragraphs. Python applies a specific set of rules when comparing tuples, evaluating them element by element until a decision can be made.
</p>

<h4><b>Core Comparison Principles</b></h4>
<p>The comparison process follows these key principles:</p>
<li>Lexicographical Order: Elements are compared from left to right, just as we read words</li>
<li>Early Termination: The process stops at the first unequal elements found</li>
<li>Length Matters: If all elements match up to the shorter tuple's length, the shorter tuple is considered "less than"</li>
<li>Type Consistency: Elements being compared must be of comparable types</li>

<h3><u>Practical Applications</u></h3>
<table>
<tr><th>Comparison Type</th><th>Use Case</th><th>Example</th></tr>
<tr><td>Version Numbers</td><td>Software versioning</td><td>(2,1) < (2,2)</td></tr>
<tr><td>Coordinates</td><td>Spatial ordering</td><td>(1,2) < (1,3)</td></tr>
<tr><td>Date Components</td><td>Chronological ordering</td><td>(2023,12) < (2024,1)</td></tr>
<tr><td>Nested Data</td><td>Complex hierarchies</td><td>((1,2), (3,4))</td></tr>
</table>`,
  codeExample: `# Comprehensive exploration of tuple comparison mechanisms

def explore_tuple_comparisons():
    """
    A detailed examination of how Python compares tuples in different scenarios.
    """
    
    def demonstrate_basic_comparison():
        # Simple numeric comparison
        tuple1 = (1, 2, 3)
        tuple2 = (1, 2, 4)
        print(f"\nBasic comparison:")
        print(f"{tuple1} < {tuple2}: {tuple1 < tuple2}")  # True
        print(f"This is true because the first difference (3 vs 4) determines the result")
        
    def demonstrate_length_comparison():
        # Length-based comparison
        short_tuple = (1, 2)
        long_tuple = (1, 2, 0)  # Note the 0 at the end
        print(f"\nLength comparison:")
        print(f"{short_tuple} < {long_tuple}: {short_tuple < long_tuple}")
        print("Even though all common elements are equal, the shorter tuple is 'less than'")
        
    def demonstrate_type_handling():
        # Type consistency in comparison
        try:
            invalid_comparison = (1, "2") < (1, 2)
            print("This should not execute")
        except TypeError as e:
            print(f"\nType error handling:")
            print(f"Cannot compare different types: {e}")
            
    def demonstrate_nested_comparison():
        # Nested tuple comparison
        nested1 = ((1, 2), (3, 4))
        nested2 = ((1, 2), (3, 5))
        print(f"\nNested comparison:")
        print(f"{nested1} < {nested2}: {nested1 < nested2}")
        print("Comparison happens recursively for nested tuples")
        
    def demonstrate_practical_application():
        # Version number comparison
        version1 = (2, 0, 1)
        version2 = (2, 1, 0)
        print(f"\nVersion number comparison:")
        print(f"Version {version1} < {version2}: {version1 < version2}")
        print("Perfect for comparing software versions or other hierarchical numbers")
        
    # Execute all demonstrations
    demonstrate_basic_comparison()
    demonstrate_length_comparison()
    demonstrate_type_handling()
    demonstrate_nested_comparison()
    demonstrate_practical_application()
    
    return "Comparison exploration complete!"

# Run the demonstration
explore_tuple_comparisons()`,
  exercises: [
    {
      prompt: 'Create a function that implements a version comparison system using tuples. The function should handle version numbers like (1,0,0), (2,1), and (2,1,1) correctly.',
      initialCode: `def compare_versions(ver1, ver2):
    """
    Compare two version numbers represented as tuples.
    Returns: -1 if ver1 < ver2, 0 if equal, 1 if ver1 > ver2
    
    Example:
    (1,0) compared to (1,0,1) should return -1
    """
    # Your solution here
    pass

# Test cases should handle various scenarios`,
      solution: `def compare_versions(ver1, ver2):
    """
    Compare two version numbers represented as tuples.
    Returns: -1 if ver1 < ver2, 0 if equal, 1 if ver1 > ver2
    """
    # Pad shorter version with zeros to match length
    max_length = max(len(ver1), len(ver2))
    ver1_padded = ver1 + (0,) * (max_length - len(ver1))
    ver2_padded = ver2 + (0,) * (max_length - len(ver2))
    
    # Compare element by element
    for v1, v2 in zip(ver1_padded, ver2_padded):
        if v1 < v2:
            return -1
        elif v1 > v2:
            return 1
    
    return 0

# Test the function with various scenarios
test_cases = [
    ((1, 0), (1, 0, 1)),    # First < Second
    ((2, 1), (2, 0, 1)),    # First > Second
    ((1, 0), (1, 0)),       # Equal
    ((2, 0, 0), (2)),       # Equal after padding
    ((1, 0, 1), (1, 1)),    # First < Second
]

for ver1, ver2 in test_cases:
    result = compare_versions(ver1, ver2)
    print(f"Comparing {ver1} and {ver2}: {result}")`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'What happens when comparing tuples of different lengths where all common elements are equal?',
      options: [
        'The comparison raises an error',
        'The longer tuple is always considered greater',
        'The shorter tuple is always considered less',
        'The comparison returns None',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Python can compare tuples of different lengths.',
        'Incorrect. The length difference only matters if common elements are equal.',
        'Correct! When all common elements are equal, the shorter tuple is considered less than the longer one.',
        'Incorrect. Tuple comparisons always return a boolean result.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ],
};

const interviewProblemsData: LessonContent = {
  title: 'Common Interview Problems',
  content: `<p>
Tuples are often used in interview problems due to their immutability and ability to store multiple values. 
Here are some common interview problems that involve tuples:
</p>

<ul>
<li><strong>Grouping by Key:</strong> Given a list of tuples, group them by a specific key.</li>
<li><strong>Sorting by Multiple Keys:</strong> Sort a list of tuples based on multiple keys.</li>
<li><strong>Finding Unique Tuples:</strong> Identify unique tuples in a list.</li>
<li><strong>Tuple Intersection:</strong> Find the intersection of two lists of tuples.</li>
<li><strong>Tuple Summation:</strong> Sum the elements of tuples in a list.</li>
</ul>`,
  codeExample: `# Grouping by Key
from collections import defaultdict

data = [('a', 1), ('b', 2), ('a', 3), ('c', 4)]
grouped = defaultdict(list)

for key, value in data:
    grouped[key].append(value)

print(grouped)  # Output: defaultdict(<class 'list'>, {'a': [1, 3], 'b': [2], 'c': [4]})

# Sorting by Multiple Keys
data = [(1, 3), (2, 2), (3, 1)]
sorted_data = sorted(data, key=lambda x: (x[1], x[0]))

print(sorted_data)  # Output: [(3, 1), (2, 2), (1, 3)]

# Finding Unique Tuples
data = [(1, 2), (2, 3), (1, 2), (3, 4)]
unique_tuples = list(set(data))

print(unique_tuples)  # Output: [(1, 2), (2, 3), (3, 4)]

# Tuple Intersection
list1 = [(1, 2), (2, 3), (3, 4)]
list2 = [(2, 3), (3, 4), (4, 5)]
intersection = list(set(list1) & set(list2))

print(intersection)  # Output: [(2, 3), (3, 4)]

# Tuple Summation
data = [(1, 2), (2, 3), (3, 4)]
sum_tuples = sum((sum(t) for t in data))

print(sum_tuples)  # Output: 15`,
  exercises: [
    {
      prompt:
        'Given a list of tuples, group them by the first element of each tuple.',
      initialCode: `# Write your solution here
data = [('a', 1), ('b', 2), ('a', 3), ('c', 4)]
grouped = `,
      solution: `from collections import defaultdict

data = [('a', 1), ('b', 2), ('a', 3), ('c', 4)]
grouped = defaultdict(list)

for key, value in data:
    grouped[key].append(value)

print(grouped)`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Given a list of tuples, sort them first by the second element and then by the first element.',
      initialCode: `# Write your solution here
data = [(1, 3), (2, 2), (3, 1)]
sorted_data = `,
      solution: `data = [(1, 3), (2, 2), (3, 1)]
sorted_data = sorted(data, key=lambda x: (x[1], x[0]))

print(sorted_data)`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Given two lists of tuples, find the intersection of the two lists.',
      initialCode: `# Write your solution here
list1 = [(1, 2), (2, 3), (3, 4)]
list2 = [(2, 3), (3, 4), (4, 5)]
intersection = `,
      solution: `list1 = [(1, 2), (2, 3), (3, 4)]
list2 = [(2, 3), (3, 4), (4, 5)]
intersection = list(set(list1) & set(list2))

print(intersection)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to group a list of tuples by the first element?',
      options: [
        'Using a dictionary with the first element as the key and a list of the second elements as the value.',
        'Using a list comprehension to filter tuples by the first element.',
        'Using the sorted() function with a custom key.',
        'Using the set() function to remove duplicates.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. It groups the tuples by the first element.',
        'This is incorrect because it does not group the tuples.',
        'This is incorrect because it sorts the tuples, not groups them.',
        'This is incorrect because it removes duplicates, not groups them.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of the following is the correct way to sort a list of tuples by the second element, then by the first element?',
      options: [
        'sorted(data, key=lambda x: (x[1], x[0]))',
        'sorted(data, key=lambda x: x[1])',
        'sorted(data, key=lambda x: x[0])',
        'sorted(data, key=lambda x: (x[0], x[1]))',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. It sorts the tuples by the second element, then by the first element.',
        'This is incorrect because it only sorts by the second element.',
        'This is incorrect because it only sorts by the first element.',
        'This is incorrect because it sorts by the first element, then by the second element.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of the following is the correct way to find the intersection of two lists of tuples?',
      options: [
        'list(set(list1) & set(list2))',
        'list(set(list1) | set(list2))',
        'list(set(list1) - set(list2))',
        'list(set(list1) ^ set(list2))',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. It finds the intersection of the two lists.',
        'This is incorrect because it finds the union of the two lists.',
        'This is incorrect because it finds the difference of the two lists.',
        'This is incorrect because it finds the symmetric difference of the two lists.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const coordinateSystemsData: LessonContent = {
  title: 'Using Tuples for Coordinate Systems and Graph Problems',
  content: `<p>
In programming interviews and real-world applications, tuples excel at representing points in coordinate systems and graph problems. Their immutability and natural ordering make them perfect for tracking positions and movements in space.
</p>

<h3><u>Understanding Coordinate Representation</u></h3>

<p>
Think of coordinate tuples as precise addresses in space. Just as a street address has distinct components (number, street, city), coordinate tuples have components that together uniquely identify a location. This mental model helps us understand how to manipulate and track positions effectively.
</p>

<h4><b>Key Coordinate Patterns</b></h4>
<p>Common coordinate applications include:</p>
<li>2D Grid Navigation: (row, column) for matrix traversal</li>
<li>Geometric Calculations: (x, y) for distance and area</li>
<li>Vector Operations: (dx, dy) for movement deltas</li>
<li>Boundaries: (min_x, min_y, max_x, max_y) for rectangles</li>

<h3><u>Common Operations</u></h3>
<table>
<tr><th>Operation</th><th>Example</th><th>Use Case</th></tr>
<tr><td>Distance</td><td>manhattan_distance((x1,y1), (x2,y2))</td><td>Path Finding</td></tr>
<tr><td>Vector Addition</td><td>(x1+dx, y1+dy)</td><td>Movement</td></tr>
<tr><td>Area Calculation</td><td>(x2-x1)*(y2-y1)</td><td>Overlap Detection</td></tr>
<tr><td>Boundary Checks</td><td>min_x <= x <= max_x</td><td>Collision Detection</td></tr>
</table>`,
  codeExample: `# Comprehensive exploration of coordinate systems using tuples

from typing import Tuple, List, Set
from collections import defaultdict
import math

class CoordinateSystemExamples:
    """Demonstrates common coordinate-based operations using tuples."""
    
    @staticmethod
    def manhattan_distance(point1: Tuple[int, int], point2: Tuple[int, int]) -> int:
        """Calculate Manhattan distance between two points."""
        x1, y1 = point1
        x2, y2 = point2
        return abs(x2 - x1) + abs(y2 - y1)
    
    @staticmethod
    def euclidean_distance(point1: Tuple[int, int], point2: Tuple[int, int]) -> float:
        """Calculate Euclidean distance between two points."""
        x1, y1 = point1
        x2, y2 = point2
        return math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
    
    def find_valid_neighbors(self, 
                           point: Tuple[int, int], 
                           grid: List[List[int]]) -> List[Tuple[int, int]]:
        """Find valid neighboring points in a grid."""
        directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]  # Right, Down, Left, Up
        row, col = point
        valid_neighbors = []
        
        for dx, dy in directions:
            new_row, new_col = row + dx, col + dy
            if (0 <= new_row < len(grid) and 
                0 <= new_col < len(grid[0]) and 
                grid[new_row][new_col] == 0):  # Assuming 0 is valid path
                valid_neighbors.append((new_row, new_col))
        
        return valid_neighbors
    
    def find_shortest_path(self,
                          start: Tuple[int, int],
                          target: Tuple[int, int],
                          grid: List[List[int]]) -> List[Tuple[int, int]]:
        """Find shortest path between two points using BFS."""
        if grid[start[0]][start[1]] == 1 or grid[target[0]][target[1]] == 1:
            return []  # Invalid start or target
            
        queue = [(start, [start])]
        visited = {start}
        
        while queue:
            (current, path) = queue.pop(0)
            if current == target:
                return path
                
            for neighbor in self.find_valid_neighbors(current, grid):
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append((neighbor, path + [neighbor]))
        
        return []  # No path found
    
    def find_points_within_distance(self,
                                  center: Tuple[int, int],
                                  points: List[Tuple[int, int]],
                                  distance: float) -> List[Tuple[int, int]]:
        """Find all points within given distance of center."""
        return [point for point in points 
                if self.euclidean_distance(center, point) <= distance]
    
    def demonstrate_coordinate_operations():
        # Create instance for demonstrations
        coord_system = CoordinateSystemExamples()
        
        # Demonstrate distance calculations
        point1, point2 = (0, 0), (3, 4)
        manhattan = coord_system.manhattan_distance(point1, point2)
        euclidean = coord_system.euclidean_distance(point1, point2)
        print(f"Manhattan distance: {manhattan}")
        print(f"Euclidean distance: {euclidean:.2f}")
        
        # Demonstrate path finding in grid
        grid = [
            [0, 0, 0, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 0],
            [0, 1, 1, 0]
        ]
        start, target = (0, 0), (3, 3)
        path = coord_system.find_shortest_path(start, target, grid)
        print(f"Shortest path: {path}")
        
        # Demonstrate points within distance
        center = (0, 0)
        points = [(1, 1), (2, 2), (3, 3), (0, 2), (2, 0)]
        distance = 2.5
        nearby_points = coord_system.find_points_within_distance(
            center, points, distance
        )
        print(f"Points within {distance} units: {nearby_points}")

# Test coordinate operations
CoordinateSystemExamples.demonstrate_coordinate_operations()`,
  exercises: [
    {
      prompt: 'Implement a function that determines if two rectangles overlap. Each rectangle is represented by two points: top-left and bottom-right coordinates.',
      initialCode: `def rectangles_overlap(rect1: Tuple[Tuple[int, int], Tuple[int, int]],
                     rect2: Tuple[Tuple[int, int], Tuple[int, int]]) -> bool:
    """
    Determine if two rectangles overlap.
    Each rectangle is represented as ((x1,y1), (x2,y2)) where
    (x1,y1) is top-left and (x2,y2) is bottom-right.
    """
    # Your solution here
    pass

# Test cases
test_cases = [
    (((0,0), (2,2)), ((1,1), (3,3))),  # Overlapping
    (((0,0), (1,1)), ((2,2), (3,3))),  # Non-overlapping
    (((0,0), (5,5)), ((2,2), (3,3)))   # One contained within other
]`,
      solution: `def rectangles_overlap(rect1: Tuple[Tuple[int, int], Tuple[int, int]],
                     rect2: Tuple[Tuple[int, int], Tuple[int, int]]) -> bool:
    """
    Determine if two rectangles overlap using coordinate comparison.
    
    The key insight is that rectangles don't overlap if one is entirely
    to the left, right, above, or below the other.
    """
    # Unpack coordinates
    (x1_1, y1_1), (x2_1, y2_1) = rect1  # First rectangle
    (x1_2, y1_2), (x2_2, y2_2) = rect2  # Second rectangle
    
    # Check for non-overlap conditions
    if (x2_1 < x1_2 or    # rect1 is left of rect2
        x2_2 < x1_1 or    # rect2 is left of rect1
        y2_1 < y1_2 or    # rect1 is above rect2
        y2_2 < y1_1):     # rect2 is above rect1
        return False
        
    return True

# Test the function
test_cases = [
    (((0,0), (2,2)), ((1,1), (3,3))),  # Overlapping
    (((0,0), (1,1)), ((2,2), (3,3))),  # Non-overlapping
    (((0,0), (5,5)), ((2,2), (3,3)))   # One contained within other
]

for rect1, rect2 in test_cases:
    result = rectangles_overlap(rect1, rect2)
    print(f"Rectangle 1: {rect1}")
    print(f"Rectangle 2: {rect2}")
    print(f"Overlapping: {result}\n")`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'Why are tuples particularly well-suited for representing coordinates in a graph?',
      options: [
        'They are faster than lists for mathematical operations',
        'They are immutable, preventing accidental modifications',
        'They can only store numeric values',
        'They use less memory than other data structures',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Tuples and lists have similar performance for math operations.',
        'Correct! Immutability ensures coordinate integrity throughout operations.',
        'Incorrect. Tuples can store any type of data.',
        'Incorrect. While tuples are memory-efficient, this isn\'t the primary reason.',
      ],
      difficulty: Difficulty.Beginner,
    }
  ],
};

const dataAggregationData: LessonContent = {
  title: 'Data Aggregation with Tuples: Patterns and Techniques',
  content: `<p>
Data aggregation is a fundamental operation in data processing where we combine multiple pieces of information into meaningful summaries. Tuples excel in this role because they can maintain the relationship between different pieces of data while ensuring data integrity through their immutability. Let's explore how we can effectively use tuples for various aggregation tasks.
</p>

<h3><u>Understanding Data Aggregation with Tuples</u></h3>

<p>
Think of data aggregation like organizing a library. Just as books can be grouped by genre, author, or publication date, data can be grouped and summarized in various ways. Tuples act like labeled book carts that keep related information together in a specific order.
</p>

<h4><b>Common Aggregation Patterns</b></h4>
<p>We frequently encounter these aggregation patterns:</p>
<li>Group By Operations: Collecting related data points together</li>
<li>Statistical Aggregations: Computing summary statistics for groups</li>
<li>Frequency Analysis: Counting occurrences of unique combinations</li>
<li>Window Operations: Analyzing data within specific ranges or periods</li>

<h3><u>Key Techniques</u></h3>
<table>
<tr><th>Technique</th><th>Description</th><th>Common Use Cases</th></tr>
<tr><td>Dictionary Grouping</td><td>Group by key elements</td><td>Sales by category</td></tr>
<tr><td>Tuple as Keys</td><td>Multiple field grouping</td><td>Time-series by region</td></tr>
<tr><td>Tuple Accumulation</td><td>Building running totals</td><td>Moving averages</td></tr>
<tr><td>Nested Aggregation</td><td>Hierarchical summaries</td><td>Department/team metrics</td></tr>
</table>`,
  codeExample: `# Comprehensive demonstration of data aggregation techniques using tuples

from collections import defaultdict
from typing import List, Dict, Tuple
from datetime import datetime, date

class DataAggregator:
    """Demonstrates various data aggregation patterns using tuples."""
    
    def group_by_single_key(self, data: List[Tuple]) -> Dict:
        """
        Groups data by a single key element.
        
        Example:
        Input: [('A', 1), ('B', 2), ('A', 3)]
        Output: {'A': [('A', 1), ('A', 3)], 'B': [('B', 2)]}
        """
        groups = defaultdict(list)
        for item in data:
            groups[item[0]].append(item)
        return dict(groups)
    
    def group_by_multiple_keys(self, 
                             data: List[Tuple], 
                             key_indices: List[int]) -> Dict:
        """
        Groups data by multiple tuple elements.
        
        Example:
        Input: data=[('US', 'NY', 100), ('US', 'CA', 200)], key_indices=[0, 1]
        Output: {('US', 'NY'): [('US', 'NY', 100)], ('US', 'CA'): [('US', 'CA', 200)]}
        """
        groups = defaultdict(list)
        for item in data:
            key = tuple(item[i] for i in key_indices)
            groups[key].append(item)
        return dict(groups)
    
    def compute_group_statistics(self, 
                               data: List[Tuple],
                               value_index: int) -> Dict[str, Tuple[float, float, float]]:
        """
        Computes min, max, and average for grouped data.
        
        Example:
        Input: [('A', 10), ('A', 20), ('B', 30)]
        Output: {'A': (10, 20, 15.0), 'B': (30, 30, 30.0)}
        """
        groups = self.group_by_single_key(data)
        stats = {}
        
        for key, items in groups.items():
            values = [item[value_index] for item in items]
            stats[key] = (
                min(values),           # Minimum
                max(values),           # Maximum
                sum(values) / len(values)  # Average
            )
        
        return stats
    
    def compute_running_aggregates(self, 
                                 data: List[Tuple[date, float]], 
                                 window_size: int) -> List[Tuple[date, float]]:
        """
        Computes running averages over a sliding window.
        
        Example:
        Input: [('2023-01-01', 100), ('2023-01-02', 200)], window_size=2
        Output: [('2023-01-01', 100.0), ('2023-01-02', 150.0)]
        """
        result = []
        for i in range(len(data)):
            window_start = max(0, i - window_size + 1)
            window_values = [x[1] for x in data[window_start:i + 1]]
            average = sum(window_values) / len(window_values)
            result.append((data[i][0], average))
        return result
    
    def nested_aggregation(self, 
                          data: List[Tuple[str, str, float]]) -> Dict[str, Dict[str, float]]:
        """
        Performs hierarchical aggregation (e.g., department -> team -> metrics).
        
        Example:
        Input: [('Sales', 'Team1', 100), ('Sales', 'Team2', 200)]
        Output: {'Sales': {'Team1': 100, 'Team2': 200}}
        """
        result = defaultdict(lambda: defaultdict(float))
        for dept, team, value in data:
            result[dept][team] += value
        return dict(result)

def demonstrate_aggregation():
    """Shows practical examples of data aggregation patterns."""
    
    aggregator = DataAggregator()
    
    # Sales data: (region, product, amount)
    sales_data = [
        ('North', 'Widget', 100),
        ('South', 'Widget', 150),
        ('North', 'Gadget', 200),
        ('South', 'Gadget', 250)
    ]
    
    # Group by region
    region_groups = aggregator.group_by_single_key(sales_data)
    print("Sales by Region:")
    for region, sales in region_groups.items():
        print(f"{region}: {sales}")
    
    # Multiple key grouping (region and product)
    region_product_groups = aggregator.group_by_multiple_keys(sales_data, [0, 1])
    print("\nSales by Region and Product:")
    for key, sales in region_product_groups.items():
        print(f"{key}: {sales}")
    
    # Compute statistics
    stats = aggregator.compute_group_statistics(
        [(x[0], x[2]) for x in sales_data],  # Convert to (region, amount)
        1
    )
    print("\nRegional Statistics (min, max, avg):")
    for region, (min_val, max_val, avg) in stats.items():
        print(f"{region}: \${min_val}, \${max_val}, \${avg:.2f}")
    
    # Time series data
    time_series = [
        (date(2023, 1, 1), 100),
        (date(2023, 1, 2), 150),
        (date(2023, 1, 3), 200),
        (date(2023, 1, 4), 175)
    ]
    
    # Compute running averages
    running_avgs = aggregator.compute_running_aggregates(time_series, 3)
    print("\nRunning 3-Day Averages:")
    for dt, avg in running_avgs:
        print(f"{dt}: \${avg:.2f}")
    
    # Hierarchical data (department, team, value)
    org_data = [
        ('Sales', 'Team1', 1000),
        ('Sales', 'Team2', 1500),
        ('Engineering', 'Team1', 2000),
        ('Engineering', 'Team2', 2500)
    ]
    
    # Nested aggregation
    dept_summary = aggregator.nested_aggregation(org_data)
    print("\nDepartment Summary:")
    for dept, teams in dept_summary.items():
        print(f"{dept}:")
        for team, value in teams.items():
            print(f"  {team}: \${value}")

if __name__ == "__main__":
    demonstrate_aggregation()`,
  exercises: [
    {
      prompt: 'Create a function that processes sales data to find the top-selling products by region. Each sale is represented as a tuple (region, product, quantity, price).',
      initialCode: `def analyze_top_products(sales: List[Tuple[str, str, int, float]]) -> Dict[str, List[Tuple[str, float]]]:
    """
    Find top products by total revenue for each region.
    Return Dict[region, List[(product, revenue)]] with top 3 products per region.
    """
    # Your solution here
    pass`,
      solution: `def analyze_top_products(sales: List[Tuple[str, str, int, float]]) -> Dict[str, List[Tuple[str, float]]]:
    """
    Find top products by total revenue for each region.
    Return Dict[region, List[(product, revenue)]] with top 3 products per region.
    """
    # Calculate revenue by region and product
    revenue_map = defaultdict(lambda: defaultdict(float))
    for region, product, quantity, price in sales:
        revenue = quantity * price
        revenue_map[region][product] += revenue
    
    # Find top 3 products for each region
    result = {}
    for region, products in revenue_map.items():
        # Sort products by revenue and take top 3
        top_products = sorted(
            [(product, revenue) for product, revenue in products.items()],
            key=lambda x: x[1],
            reverse=True
        )[:3]
        result[region] = top_products
    
    return result

# Test the function
test_sales = [
    ('North', 'Widget', 100, 10.0),
    ('North', 'Gadget', 50, 20.0),
    ('South', 'Widget', 150, 10.0),
    ('North', 'Tool', 75, 15.0),
    ('South', 'Gadget', 60, 20.0)
]

results = analyze_top_products(test_sales)
for region, products in results.items():
    print(f"\n{region} Top Products:")
    for product, revenue in products:
        print(f"{product}: \${revenue:,.2f}")`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'Why are tuples particularly useful for data aggregation compared to lists?',
      options: [
        'Tuples are faster to process than lists',
        'Tuples can store more data than lists',
        'Tuples provide immutability and can be used as dictionary keys',
        'Tuples automatically sort their elements',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Tuples and lists have similar processing speeds.',
        'Incorrect. Both tuples and lists can store the same amount of data.',
        'Correct! Tuple immutability ensures data integrity and allows them to be used as dictionary keys, which is crucial for grouping operations.',
        'Incorrect. Tuples do not automatically sort their elements.',
      ],
      difficulty: Difficulty.Beginner,
    }
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
  'interview-problems': interviewProblemsData,
  'coordinate-systems': coordinateSystemsData,
  'data-aggregation': dataAggregationData,
};

export const tupleLessonsTab: LessonsTab = {
  curriculum: tupleCurriculum,
  lessons: tupleLessons,
};
