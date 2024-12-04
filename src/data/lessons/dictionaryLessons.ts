import { Difficulty } from '@/common/commonConcept';
import { Curriculum, LessonContent, LessonsTab, PriorityLevel } from '@/common/commonLesson';

const dictionaryCurriculum: Curriculum = {
  title: 'Dictionary/Hash Map Curriculum',
  description:
    'A comprehensive guide to mastering dictionary operations and hash map-based problem solving',
  sections: [
    {
      id: 1,
      title: 'Dictionary Fundamentals',
      topics: [
        {
          id: 'dict-basics',
          title: 'Dictionary Basics',
          description: 'Understanding key-value pairs and dictionary properties',
          priority: PriorityLevel.Essential
        },
        {
          id: 'dict-creation',
          title: 'Creating Dictionaries',
          description: 'Different ways to initialize and create dictionaries',
          priority: PriorityLevel.Essential
        },
        {
          id: 'dict-vs-others',
          title: 'Dictionaries vs Other Data Structures',
          description: 'When to use dictionaries vs lists, sets, and arrays',
          priority: PriorityLevel.Essential
        },
      ],
    },
    {
      id: 2,
      title: 'Basic Dictionary Operations',
      topics: [
        {
          id: 'key-operations',
          title: 'Key Operations',
          description: 'Adding, accessing, updating, and deleting keys',
          priority: PriorityLevel.Essential
        },
        {
          id: 'dict-methods',
          title: 'Dictionary Methods',
          description: 'Using get(), update(), pop(), clear(), and other methods',
          priority: PriorityLevel.Essential
        },
        {
          id: 'key-existence',
          title: 'Key Existence Checking',
          description: 'Different ways to check for key presence',
          priority: PriorityLevel.Essential
        },
        {
          id: 'dict-iteration',
          title: 'Dictionary Iteration',
          description: 'Iterating over keys, values, and items',
          priority: PriorityLevel.Essential
        },
      ],
    },
    {
      id: 3,
      title: 'Dictionary Comprehension',
      topics: [
        {
          id: 'dict-comprehension',
          title: 'Dictionary Comprehension',
          description: 'Creating dictionaries using comprehension syntax',
          priority: PriorityLevel.Important
        },
        {
          id: 'filtering-dict',
          title: 'Filtering Dictionaries',
          description: 'Techniques for filtering dictionary entries',
          priority: PriorityLevel.Important
        },
        {
          id: 'transforming-dict',
          title: 'Transforming Dictionaries',
          description: 'Mapping and transforming dictionary contents',
          priority: PriorityLevel.Important
        },
      ],
    },
    {
      id: 4,
      title: 'Common Dictionary Patterns',
      topics: [
        {
          id: 'frequency-counter',
          title: 'Frequency Counter Pattern',
          description: 'Using dictionaries to count occurrences - a crucial interview pattern',
          priority: PriorityLevel.Essential
        },
        {
          id: 'grouping-pattern',
          title: 'Grouping Pattern',
          description: 'Grouping elements by common properties',
          priority: PriorityLevel.Important
        },
        {
          id: 'caching-pattern',
          title: 'Caching Pattern',
          description: 'Using dictionaries for memoization and caching',
          priority: PriorityLevel.Important
        },
      ],
    },
    {
      id: 5,
      title: 'Advanced Dictionary Concepts',
      topics: [
        {
          id: 'nested-dict',
          title: 'Nested Dictionaries',
          description: 'Working with multi-level dictionaries',
          priority: PriorityLevel.Important
        },
        {
          id: 'default-dict',
          title: 'DefaultDict',
          description: 'Using collections.defaultdict for cleaner code',
          priority: PriorityLevel.Beneficial
        },
        {
          id: 'counter-class',
          title: 'Counter Class',
          description: 'Using collections.Counter for efficient counting',
          priority: PriorityLevel.Important
        },
      ],
    },
    {
      id: 6,
      title: 'Hash Map Implementation',
      topics: [
        {
          id: 'hash-function',
          title: 'Hash Functions',
          description: 'Understanding hash functions and their properties',
          priority: PriorityLevel.Beneficial
        },
        {
          id: 'collision-handling',
          title: 'Collision Resolution',
          description: 'Techniques for handling hash collisions',
          priority: PriorityLevel.Beneficial
        },
        {
          id: 'time-space-complexity',
          title: 'Time/Space Complexity Analysis',
          description: 'Understanding complexity of different operations',
          priority: PriorityLevel.Essential
        },
      ],
    },
    {
      id: 7,
      title: 'Common Interview Problems',
      topics: [
        {
          id: 'two-sum-pattern',
          title: 'Two Sum Pattern',
          description: 'Using dictionaries for pair finding problems',
          priority: PriorityLevel.Essential
        },
        {
          id: 'subarray-sum',
          title: 'Subarray Sum Pattern',
          description: 'Finding subarrays with target sums',
          priority: PriorityLevel.Essential
        },
        {
          id: 'isomorphic-pattern',
          title: 'String Pattern Problems',
          description: 'Solving isomorphic strings and pattern matching',
          priority: PriorityLevel.Essential
        },
      ],
    },
    {
      id: 8,
      title: 'Advanced Applications',
      topics: [
        {
          id: 'lru-cache',
          title: 'LRU Cache Implementation',
          description: 'Building an LRU cache using dictionaries',
          priority: PriorityLevel.Important
        },
        {
          id: 'graph-representation',
          title: 'Graph Representation',
          description: 'Using dictionaries for graph problems',
          priority: PriorityLevel.Important
        },
        {
          id: 'trie-implementation',
          title: 'Trie Implementation',
          description: 'Implementing tries using dictionaries',
          priority: PriorityLevel.Beneficial
        },
      ],
    },
    {
      id: 9,
      title: 'Advanced Problem Patterns',
      topics: [
        {
          id: 'sliding-window',
          title: 'Sliding Window with Dictionaries',
          description: 'Using dictionaries in sliding window problems',
          priority: PriorityLevel.Essential
        },
        {
          id: 'anagram-problems',
          title: 'Anagram and Permutation',
          description: 'Solving string permutation problems',
          priority: PriorityLevel.Essential
        },
        {
          id: 'array-operations',
          title: 'Array Operations with Dictionaries',
          description: 'Solving array intersection/union problems efficiently',
          priority: PriorityLevel.Important
        },
      ],
    },
  ],
} as const;

const dictBasicsData = {
  title: 'Dictionary Basics',
  content: `<p>
Dictionaries (also known as hash maps or associative arrays) are powerful data structures that store <strong>key-value pairs</strong>. Think of a dictionary like a real-world phone book where:
</p>
<li>Each person's name (key) is linked to their phone number (value)</li>
<li>Keys must be unique</li>
<li>Values can be duplicated</li>
<li>You can quickly look up values using their keys</li>

<p>In Python, dictionaries are fundamental data structures that offer several important properties:</p>

<h3><u>Key Properties</u></h3>

<h4><b>Unordered (Pre-Python 3.7)</b></h4>
<li>Traditional dictionaries don't maintain insertion order</li>
<li>As of Python 3.7+, dictionaries preserve insertion order by default</li>

<h4><b>Mutable</b></h4>
<li>Can add, remove, or modify key-value pairs</li>
<li>Keys must be immutable (strings, numbers, tuples)</li>
<li>Values can be any type (including other dictionaries)</li>

<h3><u>Operation Complexities</u></h3>
<table>
<tr><th>Operation</th><th>Average Case</th><th>Worst Case</th></tr>
<tr><td>Access/Insert/Delete</td><td>O(1)</td><td>O(n)</td></tr>
<tr><td>Search by Key</td><td>O(1)</td><td>O(n)</td></tr>
<tr><td>Search by Value</td><td>O(n)</td><td>O(n)</td></tr>
<tr><td>Memory Usage</td><td colspan="2">O(n)</td></tr>
</table>

<h3><u>Common Use Cases</u></h3>
<li>Caching and memoization</li>
<li>Counting frequencies</li>
<li>Grouping related data</li>
<li>Fast lookups by key</li>`,
  codeExample: `# Basic dictionary operations
phone_book = {
    "Alice": "555-0123",
    "Bob": "555-0124",
    "Charlie": "555-0125"
}

# Accessing values
print(f"Alice's number: {phone_book['Alice']}")  # 555-0123

# Adding new entries
phone_book["David"] = "555-0126"
print(f"After adding David: {phone_book}")

# Modifying values
phone_book["Alice"] = "555-9999"
print(f"Alice's new number: {phone_book['Alice']}")

# Checking if key exists
if "Bob" in phone_book:
    print("Bob is in the phone book")

# Getting value with default
eve_number = phone_book.get("Eve", "Number not found")
print(f"Eve's number: {eve_number}")  # Number not found

# Removing entries
removed_number = phone_book.pop("Charlie")
print(f"Removed {removed_number}")
print(f"Updated phone book: {phone_book}")`,
  exercises: [
    {
      prompt: 'Create a dictionary of three students with their ages. Then update one student\'s age and add a new student.',
      initialCode: `# Write your solution here
students = `,
      solution: `students = {
    "John": 20,
    "Emma": 19,
    "Michael": 21
}
students["Emma"] = 20  # Update Emma's age
students["Sarah"] = 18  # Add new student`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Create a dictionary of fruits and their quantities. Remove one fruit and print a message if a searched fruit is not found using .get()',
      initialCode: `# Write your solution here
fruits = `,
      solution: `fruits = {
    "apple": 5,
    "banana": 3,
    "orange": 4
}
del fruits["banana"]
missing_fruit = fruits.get("grape", "Fruit not in stock")
print(missing_fruit)`,
      difficulty: Difficulty.Beginner,
    }
  ],
  quizzes: [
    {
      question: 'What is the time complexity of accessing a value in a dictionary using its key?',
      options: [
        'O(n)',
        'O(1)',
        'O(log n)',
        'O(n²)',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Dictionary key access is constant time in average case.',
        'Correct! Dictionaries use hash tables for O(1) average case access time.',
        'Incorrect. This would be the complexity for binary search trees.',
        'Incorrect. Dictionary operations are much more efficient.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'Which of the following cannot be used as a dictionary key?',
      options: [
        'String',
        'Integer',
        'List',
        'Tuple',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Strings are immutable and can be dictionary keys.',
        'Incorrect. Integers are immutable and can be dictionary keys.',
        'Correct! Lists are mutable and cannot be used as dictionary keys.',
        'Incorrect. Tuples are immutable and can be dictionary keys.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const dictCreationData = {
  title: 'Creating Dictionaries',
  content: `<p>
Python offers multiple ways to create dictionaries, each with its own advantages. Understanding these different methods helps you write more elegant and efficient code.
</p>

<h3><u>Creation Methods</u></h3>

<h4><b>1. Literal Notation</b></h4>
<li>Most straightforward method using curly braces {}</li>
<li>Direct key-value assignments</li>
<li>Best for small, known datasets</li>

<h4><b>2. Dict Constructor</b></h4>
<li>Using dict() function</li>
<li>Can convert other data types to dictionaries</li>
<li>Useful for creating dictionaries programmatically</li>

<h4><b>3. Dictionary Comprehension</b></h4>
<li>Concise way to create dictionaries from iterables</li>
<li>Similar to list comprehension syntax</li>
<li>Great for transforming data</li>

<h4><b>4. fromkeys() Method</b></h4>
<li>Creates dictionary from sequence of keys</li>
<li>All keys get the same initial value</li>
<li>Useful for initializing with default values</li>

<h3><u>Best Practices</u></h3>
<li>Choose readable and maintainable creation methods</li>
<li>Consider performance for large datasets</li>
<li>Use type hints for better code clarity</li>
<li>Initialize with appropriate default values</li>`,
  codeExample: `# 1. Literal Notation
colors = {
    "red": "#FF0000",
    "green": "#00FF00",
    "blue": "#0000FF"
}

# 2. Dict Constructor
# From list of tuples
pairs = [("apple", 1), ("banana", 2)]
fruit_count = dict(pairs)

# From keyword arguments
person = dict(name="Alice", age=25, city="New York")

# 3. Dictionary Comprehension
# Square numbers
squares = {x: x**2 for x in range(5)}
print(f"Squares: {squares}")  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# Converting units
celsius = {0: 0, 10: 10, 20: 20, 30: 30}
fahrenheit = {c: ((9/5) * t + 32) for c, t in celsius.items()}

# 4. fromkeys() Method
# Initialize with default values
keys = ["a", "b", "c"]
default_dict = dict.fromkeys(keys, 0)
print(f"Default dict: {default_dict}")  # {'a': 0, 'b': 0, 'c': 0}

# Nested dictionary creation
nested = {
    "user1": {
        "name": "John",
        "scores": [85, 90, 95]
    },
    "user2": {
        "name": "Emma",
        "scores": [88, 92, 87]
    }
}`,
  exercises: [
    {
      prompt: 'Create a dictionary using dictionary comprehension that contains numbers 1-5 as keys and their cubes as values.',
      initialCode: `# Write your solution here
cubes = `,
      solution: `cubes = {num: num**3 for num in range(1, 6)}`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Create a dictionary of five countries and their capitals using three different creation methods.',
      initialCode: `# Write your solution here
# Method 1: Literal notation
countries1 = 

# Method 2: Dict constructor
countries2 = 

# Method 3: fromkeys with default value
countries3 = `,
      solution: `# Method 1: Literal notation
countries1 = {
    "France": "Paris",
    "Germany": "Berlin",
    "Italy": "Rome",
    "Spain": "Madrid",
    "UK": "London"
}

# Method 2: Dict constructor
country_pairs = [
    ("France", "Paris"),
    ("Germany", "Berlin"),
    ("Italy", "Rome"),
    ("Spain", "Madrid"),
    ("UK", "London")
]
countries2 = dict(country_pairs)

# Method 3: fromkeys with default value
countries3 = dict.fromkeys(["France", "Germany", "Italy", "Spain", "UK"], "Unknown")`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'Which dictionary creation method is most appropriate when you need to create a dictionary with the same value for multiple keys?',
      options: [
        'Dictionary comprehension',
        'Literal notation',
        'Dict constructor',
        'fromkeys() method',
      ],
      correctAnswer: 3,
      explanations: [
        'Incorrect. Dictionary comprehension is better for transforming values.',
        'Incorrect. Literal notation would be repetitive for same values.',
        'Incorrect. Dict constructor wouldn\'t be as efficient for this case.',
        'Correct! fromkeys() is designed specifically for creating dictionaries with the same value for multiple keys.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What is the output of: {x: x*2 for x in range(3)}?',
      options: [
        '{0: 0, 1: 2, 2: 4}',
        '{0: 1, 1: 2, 2: 3}',
        '{1: 2, 2: 4, 3: 6}',
        '{0: 2, 1: 2, 2: 2}',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct! Each number is multiplied by 2 (0*2=0, 1*2=2, 2*2=4).',
        'Incorrect. This would be the result of {x: x+1 for x in range(3)}.',
        'Incorrect. The range starts at 0, not 1.',
        'Incorrect. This would be dict.fromkeys(range(3), 2).',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const dictVsOthersData = {
  title: 'Dictionaries vs Other Data Structures',
  content: `<p>
Understanding when to use dictionaries versus other data structures is crucial for writing efficient Python code. Each data structure has its strengths and ideal use cases. Let's explore how dictionaries compare to other common data structures.
</p>

<h3><u>Dictionaries vs Lists</u></h3>

<p>Consider a phone book application. We could store contacts using either a dictionary or a list:</p>

<h4><b>Dictionary Approach:</b></h4>
<li>Direct access by name: O(1) average case</li>
<li>Perfect for key-based lookups</li>
<li>Uses more memory due to hash table</li>
<li>Example: {"Alice": "555-0123", "Bob": "555-0124"}</li>

<h4><b>List Approach:</b></h4>
<li>Sequential search required: O(n)</li>
<li>Better for ordered data</li>
<li>More memory efficient</li>
<li>Example: [("Alice", "555-0123"), ("Bob", "555-0124")]</li>

<h3><u>Dictionaries vs Sets</u></h3>

<p>Both use hash tables internally, but serve different purposes:</p>

<h4><b>Dictionary Features:</b></h4>
<li>Stores key-value pairs</li>
<li>Perfect for mapping relationships</li>
<li>Can store duplicate values (but not keys)</li>
<li>Example: {1: "one", 2: "two"}</li>

<h4><b>Set Features:</b></h4>
<li>Stores only unique elements</li>
<li>Perfect for membership testing</li>
<li>No key-value relationship</li>
<li>Example: {1, 2, 3}</li>

<h3><u>Dictionaries vs Arrays</u></h3>

<p>Arrays (like NumPy arrays) are fundamentally different:</p>

<h4><b>Dictionary Characteristics:</b></h4>
<li>Flexible keys of any immutable type</li>
<li>Non-continuous memory storage</li>
<li>Dynamic size</li>
<li>Perfect for sparse data</li>

<h4><b>Array Characteristics:</b></h4>
<li>Integer indices only</li>
<li>Continuous memory storage</li>
<li>Fixed size (in NumPy)</li>
<li>Better for numerical computations</li>

<h3><u>When to Use Each</u></h3>

<table>
<tr><th>Use Case</th><th>Best Choice</th><th>Why?</th></tr>
<tr><td>Key-value lookup</td><td>Dictionary</td><td>O(1) access time</td></tr>
<tr><td>Ordered sequence</td><td>List</td><td>Maintains insertion order</td></tr>
<tr><td>Unique items</td><td>Set</td><td>Automatic deduplication</td></tr>
<tr><td>Mathematical operations</td><td>Array</td><td>Optimized for calculations</td></tr>
</table>`,

  codeExample: `import numpy as np
import time

# Comparison of lookup operations
def compare_lookups():
    # Dictionary approach
    phone_dict = {"Alice": "555-0123", "Bob": "555-0124", "Charlie": "555-0125"}
    
    # List approach
    phone_list = [("Alice", "555-0123"), ("Bob", "555-0124"), ("Charlie", "555-0125")]
    
    # Dictionary lookup
    dict_start = time.time()
    dict_number = phone_dict["Bob"]
    dict_time = time.time() - dict_start
    
    # List lookup
    list_start = time.time()
    list_number = next(num for name, num in phone_list if name == "Bob")
    list_time = time.time() - list_start
    
    print(f"Dictionary lookup time: {dict_time:.10f} seconds")
    print(f"List lookup time: {list_time:.10f} seconds")

# Comparing with sets for unique values
numbers_list = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
numbers_set = set(numbers_list)
print(f"Original list: {numbers_list}")
print(f"As set (unique values): {numbers_set}")

# Comparing with arrays for numerical operations
# Dictionary for sparse data
sparse_dict = {0: 1, 100: 1, 1000: 1}  # Most elements are 0

# Array for dense numerical data
arr = np.array([1, 2, 3, 4, 5])
squared_arr = arr ** 2  # Efficient numerical operation

print(f"Squared array: {squared_arr}")  # Fast numerical operation

# Example of when each shines
# 1. Dictionary for sparse matrix
sparse_matrix = {
    (0, 0): 1,
    (100, 100): 2,
    (500, 500): 3
}  # Memory efficient for sparse data

# 2. List for ordered operations
ordered_data = [1, 2, 3, 4, 5]
reversed_data = ordered_data[::-1]  # Easy ordering operations

# 3. Set for unique items
unique_visitors = set()
unique_visitors.add("user1")
unique_visitors.add("user1")  # Won't add duplicate
print(f"Unique visitors: {unique_visitors}")

# 4. Array for math
numbers_array = np.array([1, 2, 3, 4, 5])
mean = np.mean(numbers_array)  # Efficient mathematical operations
print(f"Mean: {mean}")`,

  exercises: [
    {
      prompt: 'Create three different data structures (dictionary, list, and set) to store student grades. Then demonstrate why each might be useful in different scenarios.',
      initialCode: `# Write your solution here
# Dictionary for student grade mapping
grades_dict = 

# List for ordered grades
grades_list = 

# Set for unique grades
grades_set = 

# Now demonstrate a useful operation with each`,
      solution: `# Dictionary for student grade mapping
grades_dict = {"Alice": 95, "Bob": 87, "Charlie": 92}
# Quick grade lookup
print(f"Bob's grade: {grades_dict['Bob']}")

# List for ordered grades
grades_list = [95, 87, 92, 88, 90]
# Easy to find highest/lowest
print(f"Highest grade: {max(grades_list)}")

# Set for unique grades
grades_set = {95, 87, 92, 87, 95}  # Duplicates removed
# Easy to see how many different grades exist
print(f"Number of unique grades: {len(grades_set)}")`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Compare the performance of finding elements in a dictionary versus a list. Create both structures with the same data and time the lookups.',
      initialCode: `# Write your solution here
import time

# Create structures
data_dict = 
data_list = 

# Time dictionary lookup
dict_start = 
# Perform lookup
dict_time = 

# Time list lookup
list_start = 
# Perform lookup
list_time = 

# Print results`,
      solution: `import time

# Create structures
data_dict = {str(i): i for i in range(1000)}
data_list = [(str(i), i) for i in range(1000)]

# Time dictionary lookup
dict_start = time.time()
result_dict = data_dict["500"]
dict_time = time.time() - dict_start

# Time list lookup
list_start = time.time()
result_list = next(val for key, val in data_list if key == "500")
list_time = time.time() - list_start

print(f"Dictionary lookup time: {dict_time:.10f} seconds")
print(f"List lookup time: {list_time:.10f} seconds")`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Which data structure would be most efficient for storing and retrieving user sessions by session ID?',
      options: [
        'List',
        'Dictionary',
        'Set',
        'Array',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Lists require O(n) lookup time which would be inefficient for session management.',
        'Correct! Dictionaries provide O(1) lookup time using session IDs as keys, perfect for this use case.',
        'Incorrect. Sets don\'t store key-value pairs needed for session data.',
        'Incorrect. Arrays would require continuous numeric indices, unsuitable for session IDs.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'When would a set be preferred over a dictionary?',
      options: [
        'When you need to store key-value pairs',
        'When you need to maintain insertion order',
        'When you only need to track unique items',
        'When you need fast numerical computations',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Dictionaries are for key-value pairs, sets don\'t store pairs.',
        'Incorrect. Lists are better for maintaining order.',
        'Correct! Sets are optimized for storing unique items and testing membership.',
        'Incorrect. NumPy arrays are best for numerical computations.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};
const keyOperationsData = {
  title: 'Dictionary Key Operations',
  content: `<p>
Understanding how to manipulate dictionary keys is fundamental to working with Python dictionaries effectively. Let's explore each core operation in detail, starting with the basics and building up to more complex operations.
</p>

<h3><u>Adding Keys to Dictionaries</u></h3>
<p>
When we add keys to a dictionary, we're creating new key-value associations. Think of it like adding entries to an address book. We have several ways to do this:
</p>

<h4><b>Direct Assignment</b></h4>
<p>The simplest way to add a key is through direct assignment using square brackets. This method immediately creates or updates the key-value pair.</p>

<h4><b>Multiple Additions</b></h4>
<p>When we need to add multiple keys at once, we can use the update() method. This is like pasting several new entries into our address book at once.</p>

<h4><b>Conditional Addition</b></h4>
<p>Sometimes we only want to add a key if it doesn't already exist. The setdefault() method handles this elegantly, preventing accidental overwrites.</p>

<h3><u>Accessing Dictionary Keys</u></h3>
<p>
Retrieving values from a dictionary requires careful consideration to handle cases where keys might not exist. Think of it like looking up a phone number – we need a plan for what to do if the person isn't in our address book.
</p>

<h3><u>Updating Existing Keys</u></h3>
<p>
Modifying values for existing keys is a common operation, but we need to be careful about a few things:
</p>
<li>Checking if the key exists before updating</li>
<li>Deciding how to handle missing keys</li>
<li>Considering atomic updates for thread safety</li>

<h3><u>Deleting Keys</u></h3>
<p>
Removing keys from a dictionary is like erasing entries from our address book. We have several methods, each with its own use case:
</p>
<li>Using del for simple removal</li>
<li>Using pop() when we need the value being removed</li>
<li>Using clear() to remove everything</li>`,

  codeExample: `# Let's explore each key operation with practical examples

def demonstrate_key_operations():
    # Starting with an empty dictionary
    student_scores = {}
    
    # ADDING KEYS
    # Direct assignment - adding individual scores
    student_scores['Alice'] = 95  # Simple and straightforward
    
    # Adding multiple scores at once with update()
    new_scores = {'Bob': 87, 'Charlie': 92}
    student_scores.update(new_scores)
    print("After adding multiple scores:", student_scores)
    
    # Conditional addition with setdefault()
    # This only adds the key if it doesn't exist
    alice_score = student_scores.setdefault('Alice', 0)
    print("Alice's existing score remains:", alice_score)
    
    # ACCESSING KEYS
    # Safe access pattern with error handling
    try:
        david_score = student_scores['David']
    except KeyError:
        print("David's score not found")
    
    # Using get() for safe access with a default value
    david_score = student_scores.get('David', 0)
    print("David's score (default):", david_score)
    
    # UPDATING KEYS
    # Direct update
    student_scores['Alice'] = 97
    
    # Conditional update pattern
    if 'Bob' in student_scores:
        student_scores['Bob'] += 5
    
    # DELETING KEYS
    # Using del statement
    if 'Charlie' in student_scores:
        del student_scores['Charlie']
    
    # Using pop() to remove and get value
    bob_score = student_scores.pop('Bob', None)
    print("Removed Bob's score:", bob_score)
    
    # Final state of our dictionary
    print("Final scores:", student_scores)

# Let's see how we can use these operations in a real-world scenario
class GradeTracker:
    def __init__(self):
        self.grades = {}
    
    def add_grade(self, student, grade):
        """Safely adds a new grade"""
        if not isinstance(grade, (int, float)):
            raise ValueError("Grade must be a number")
        if 0 <= grade <= 100:
            self.grades[student] = grade
        else:
            raise ValueError("Grade must be between 0 and 100")
    
    def get_grade(self, student):
        """Safely retrieves a grade"""
        return self.grades.get(student, None)
    
    def update_grade(self, student, new_grade):
        """Safely updates an existing grade"""
        if student in self.grades:
            self.add_grade(student, new_grade)
            return True
        return False
    
    def remove_student(self, student):
        """Safely removes a student's grade"""
        return self.grades.pop(student, None)

# Example usage of our GradeTracker
def demonstrate_grade_tracker():
    tracker = GradeTracker()
    
    # Adding grades
    tracker.add_grade("Alice", 95)
    tracker.add_grade("Bob", 87)
    
    # Getting grades
    alice_grade = tracker.get_grade("Alice")
    print(f"Alice's grade: {alice_grade}")
    
    # Updating grades
    tracker.update_grade("Alice", 97)
    
    # Removing students
    removed_grade = tracker.remove_student("Bob")
    print(f"Removed Bob's grade: {removed_grade}")`,

  exercises: [
    {
      prompt: 'Create a function that takes a dictionary of student scores and raises all scores by 5 points, but only for students who scored below 90.',
      initialCode: `# Write your solution here
def adjust_scores(scores):
    pass

# Test with
test_scores = {
    "Alice": 85,
    "Bob": 92,
    "Charlie": 88
}`,
      solution: `def adjust_scores(scores):
    """
    Raises scores by 5 points for students below 90
    Returns a new dictionary with adjusted scores
    """
    adjusted = {}
    for student, score in scores.items():
        if score < 90:
            adjusted[student] = min(score + 5, 100)  # Cap at 100
        else:
            adjusted[student] = score
    return adjusted`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement a safe dictionary update function that only updates existing keys and returns which updates were successful and which failed.',
      initialCode: `# Write your solution here
def safe_update(original, updates):
    pass

# Test with
original = {"a": 1, "b": 2, "c": 3}
updates = {"b": 5, "d": 4}`,
      solution: `def safe_update(original, updates):
    """
    Updates only existing keys in the original dictionary
    Returns tuple of (successful updates, failed updates)
    """
    successful = {}
    failed = {}
    
    for key, value in updates.items():
        if key in original:
            original[key] = value
            successful[key] = value
        else:
            failed[key] = value
    
    return successful, failed`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'What happens when you try to access a key that doesn\'t exist using square bracket notation (dict[key])?',
      options: [
        'Returns None',
        'Returns a default value',
        'Raises a KeyError',
        'Creates a new key with None value',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Square bracket notation doesn\'t return None for missing keys.',
        'Incorrect. get() method provides default values, not square brackets.',
        'Correct! Accessing a non-existent key with square brackets raises a KeyError.',
        'Incorrect. Square bracket notation doesn\'t create new keys when accessing.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'Which method should you use to remove a key and get its value, with a default if the key doesn\'t exist?',
      options: [
        'remove()',
        'del',
        'pop()',
        'delete()',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. remove() is not a dictionary method.',
        'Incorrect. del removes the key but doesn\'t return the value.',
        'Correct! pop() removes the key and returns its value, accepting a default argument.',
        'Incorrect. delete() is not a dictionary method.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const dictMethodsData = {
  title: 'Dictionary Methods',
  content: `<p>
Python dictionaries provide a rich set of built-in methods that make working with them both powerful and elegant. Think of these methods as tools in your programming toolbox - each has its specific purpose and ideal use cases. Let's explore them systematically to understand when and how to use each one effectively.
</p>

<h3><u>Core Dictionary Methods</u></h3>

<h4><b>Value Retrieval Methods</b></h4>
<p>
These methods help us safely get values from our dictionary, each with its own special characteristics:
</p>

<p>The get() Method:</p>
<li>Provides a safe way to retrieve values</li>
<li>Takes an optional default value if key isn't found</li>
<li>Never raises KeyError - perfect for uncertain situations</li>

<p>The items(), keys(), and values() Methods:</p>
<li>Return special view objects that stay synchronized with the dictionary</li>
<li>Lightweight - don't create copies of the data</li>
<li>Perfect for iteration and membership testing</li>

<h4><b>Modification Methods</b></h4>
<p>
These methods help us change dictionary contents safely and efficiently:
</p>

<p>The update() Method:</p>
<li>Merges one dictionary into another</li>
<li>Can update multiple keys at once</li>
<li>Accepts various input formats (dict, key-value pairs)</li>

<p>The setdefault() Method:</p>
<li>Sets a key's value only if the key doesn't exist</li>
<li>Returns the value whether it was just set or already existed</li>
<li>Perfect for initialization patterns</li>

<h4><b>Removal Methods</b></h4>
<p>
Different ways to remove items, each suited for specific needs:
</p>

<p>The pop() Method:</p>
<li>Removes a key and returns its value</li>
<li>Can specify a default value if key doesn't exist</li>
<li>Safe way to remove items</li>

<p>The popitem() Method:</p>
<li>Removes and returns the last inserted key-value pair</li>
<li>Useful for destructive iteration</li>

<p>The clear() Method:</p>
<li>Removes all items from the dictionary</li>
<li>Faster than deleting keys one by one</li>`,

  codeExample: `# Let's explore each method with practical examples and explanations

class DictionaryMethodsExample:
    def __init__(self):
        # Initialize a simple inventory tracking system
        self.inventory = {
            "apple": {"count": 50, "price": 0.50},
            "banana": {"count": 30, "price": 0.75},
            "orange": {"count": 40, "price": 0.60}
        }
    
    def demonstrate_get_method(self):
        """Shows how to safely retrieve values using get()"""
        # Safe value retrieval with get()
        apple_count = self.inventory.get("apple", {"count": 0})["count"]
        # If grape doesn't exist, we get our default value
        grape_count = self.inventory.get("grape", {"count": 0})["count"]
        
        print(f"We have {apple_count} apples")
        print(f"We have {grape_count} grapes")
    
    def demonstrate_update_method(self):
        """Shows different ways to use update()"""
        # Update multiple items at once
        new_inventory = {
            "apple": {"count": 60, "price": 0.55},
            "grape": {"count": 25, "price": 1.00}
        }
        
        # This will update apple and add grape
        self.inventory.update(new_inventory)
        
        # Can also update using keyword arguments
        self.inventory.update(
            kiwi={"count": 20, "price": 1.25}
        )
    
    def demonstrate_setdefault_method(self):
        """Shows how setdefault() helps with initialization"""
        # Initialize new fruit with default values if it doesn't exist
        pear = self.inventory.setdefault("pear", {
            "count": 0,
            "price": 0.80
        })
        
        print(f"Pear inventory: {pear}")
        
        # Won't change existing values
        apple = self.inventory.setdefault("apple", {
            "count": 0,
            "price": 0.00
        })
        
        print(f"Apple inventory (unchanged): {apple}")
    
    def demonstrate_removal_methods(self):
        """Shows different ways to remove items"""
        # Remove and get value with pop()
        removed_orange = self.inventory.pop("orange", {
            "count": 0,
            "price": 0.00
        })
        print(f"Removed orange inventory: {removed_orange}")
        
        # Remove last inserted item
        last_item = self.inventory.popitem()
        print(f"Removed last item: {last_item}")
        
        # Clear all inventory
        self.inventory.clear()
        print(f"After clear: {self.inventory}")
    
    def practical_example(self):
        """A practical example combining multiple methods"""
        # Track fruit sales with various methods
        def record_sale(fruit, quantity):
            # Get current inventory safely
            current = self.inventory.get(fruit, {"count": 0, "price": 0.00})
            
            # Update count if we have enough
            if current["count"] >= quantity:
                current["count"] -= quantity
                self.inventory[fruit] = current
                return True
            return False
        
        # Initialize some inventory
        self.inventory.update({
            "apple": {"count": 50, "price": 0.50},
            "banana": {"count": 30, "price": 0.75}
        })
        
        # Record some sales
        success = record_sale("apple", 10)
        print(f"Sale successful: {success}")
        print(f"Updated inventory: {self.inventory}")
        
        # Try to sell more than we have
        success = record_sale("banana", 40)
        print(f"Sale successful: {success}")`,

  exercises: [
    {
      prompt: `Create a function that manages a product inventory system using dictionary methods. The function should:
1. Add new products with initial stock
2. Update stock levels
3. Remove discontinued products
4. Return current stock level for any product`,
      initialCode: `# Write your solution here
class InventoryManager:
    def __init__(self):
        self.products = {}
    
    def add_product(self, product, initial_stock):
        # Your code here
        pass
    
    def update_stock(self, product, quantity):
        # Your code here
        pass
    
    def discontinue_product(self, product):
        # Your code here
        pass
    
    def get_stock_level(self, product):
        # Your code here
        pass`,
      solution: `class InventoryManager:
    def __init__(self):
        self.products = {}
    
    def add_product(self, product, initial_stock):
        """Add new product or update if exists"""
        # Use setdefault to avoid overwriting existing products
        return self.products.setdefault(product, initial_stock)
    
    def update_stock(self, product, quantity):
        """Update stock level for a product"""
        if product in self.products:
            self.products[product] += quantity
            return True
        return False
    
    def discontinue_product(self, product):
        """Remove a product and return its final stock"""
        return self.products.pop(product, 0)
    
    def get_stock_level(self, product):
        """Get current stock level with default 0"""
        return self.products.get(product, 0)`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'What is the key difference between dict.get() and direct key access (dict[key])?',
      options: [
        'get() is slower than direct access',
        'get() allows a default value if key is missing',
        'get() can only retrieve string values',
        'get() automatically adds missing keys',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. The performance difference is negligible.',
        'Correct! get() method provides a safe way to access values with a default if the key is missing.',
        'Incorrect. get() can retrieve any type of value.',
        'Incorrect. get() does not modify the dictionary.',
      ],
      difficulty: Difficulty.Beginner,
    }
  ]
};

const keyExistenceData = {
  title: 'Key Existence Checking',
  content: `<p>
Understanding how to properly check whether a key exists in a dictionary is fundamental to writing robust Python code. Let's explore the various methods available and understand the nuances of each approach.
</p>

<h3><u>Methods of Checking Key Existence</u></h3>

<h4><b>1. The 'in' Operator</b></h4>
<p>
The 'in' operator is Python's most straightforward way to check if a key exists in a dictionary. Think of it like checking if a name exists in a phone book. When you use 'in', you're essentially asking "Does this key exist in the dictionary?"
</p>

<p>Advantages of the 'in' operator:</p>
<li>Clear and readable code intent</li>
<li>Fast performance due to hash table operations</li>
<li>Returns a simple True/False result</li>

<h4><b>2. The get() Method</b></h4>
<p>
The get() method combines existence checking with value retrieval. Imagine asking someone "What's Alice's phone number?" and getting either the number or a default response like "not listed" if Alice isn't in the directory.
</p>

<p>Key features of get():</p>
<li>Provides a default value if key doesn't exist</li>
<li>Eliminates need for separate existence check</li>
<li>Especially useful for nested dictionaries</li>

<h4><b>3. Exception Handling with try-except</b></h4>
<p>
This approach follows Python's "It's easier to ask forgiveness than permission" (EAFP) principle. It's like trying to use a key and having a backup plan if it doesn't work.
</p>

<h4><b>4. Using dictionary view objects</b></h4>
<p>
Dictionary views through keys(), values(), or items() provide a dynamic window into dictionary contents. They're particularly useful when you need to check multiple keys or work with the dictionary's structure.
</p>

<h3><u>Best Practices and Common Patterns</u></h3>

<p>
The choice of method depends on your specific needs:
</p>

<li>Use 'in' when you just need to know if a key exists</li>
<li>Use get() when you need both existence check and value</li>
<li>Use try-except when failures are expected and handled</li>
<li>Use views when working with multiple keys or dictionary structure</li>`,

  codeExample: `# Comprehensive demonstration of key existence checking methods

class KeyExistenceDemo:
    def __init__(self):
        # Sample data structure representing a user database
        self.users = {
            "alice": {
                "email": "alice@example.com",
                "preferences": {
                    "theme": "dark",
                    "notifications": True
                }
            },
            "bob": {
                "email": "bob@example.com",
                "preferences": {
                    "theme": "light"
                }
            }
        }
    
    def using_in_operator(self, username):
        """Demonstrates the 'in' operator for key checking"""
        # Simple existence check
        if username in self.users:
            print(f"Found user: {username}")
            return True
        print(f"User {username} not found")
        return False
    
    def using_get_method(self, username, preference):
        """Demonstrates get() method for nested dictionary access"""
        # Safe nested dictionary access with defaults
        user_prefs = self.users.get(username, {}).get("preferences", {})
        setting = user_prefs.get(preference, "default value")
        return setting
    
    def using_try_except(self, username):
        """Demonstrates exception handling approach"""
        try:
            user_data = self.users[username]
            print(f"Found user data: {user_data}")
            return user_data
        except KeyError:
            print(f"No data found for user: {username}")
            return None
    
    def using_dictionary_views(self):
        """Demonstrates working with dictionary views"""
        # Get all usernames
        usernames = self.users.keys()
        
        # Check multiple users efficiently
        users_to_check = ["alice", "charlie", "bob"]
        existing_users = [user for user in users_to_check if user in usernames]
        
        return existing_users
    
    def safe_nested_access(self, username, *keys):
        """Demonstrates safe nested dictionary access"""
        current = self.users
        for key in [username] + list(keys):
            if isinstance(current, dict) and key in current:
                current = current[key]
            else:
                return None
        return current

# Example usage and patterns
def demonstrate_patterns():
    demo = KeyExistenceDemo()
    
    # Pattern 1: Simple existence check
    if demo.using_in_operator("alice"):
        print("Processing Alice's data...")
    
    # Pattern 2: Safe value retrieval
    theme = demo.using_get_method("alice", "theme")
    print(f"Theme setting: {theme}")
    
    # Pattern 3: Nested access with error handling
    notifications = demo.safe_nested_access("alice", "preferences", "notifications")
    print(f"Notifications setting: {notifications}")
    
    # Pattern 4: Working with multiple keys
    existing = demo.using_dictionary_views()
    print(f"Existing users: {existing}")

    return demo`,

  exercises: [
    {
      prompt: 'Create a function that safely updates a nested dictionary value only if all parent keys exist.',
      initialCode: `def safe_nested_update(data, path, new_value):
    """
    Updates a nested value only if the full path exists.
    
    Args:
        data: The dictionary to update
        path: List of keys forming the path to the value
        new_value: Value to set if path exists
        
    Returns:
        bool: True if update successful, False otherwise
    """
    # Your code here
    pass

# Test with:
data = {
    "user": {
        "preferences": {
            "theme": "light"
        }
    }
}
path = ["user", "preferences", "theme"]`,
      solution: `def safe_nested_update(data, path, new_value):
    """
    Updates a nested value only if the full path exists.
    """
    current = data
    
    # Navigate to the second-to-last key
    for key in path[:-1]:
        if not isinstance(current, dict) or key not in current:
            return False
        current = current[key]
    
    # Check if final key exists
    if not isinstance(current, dict) or path[-1] not in current:
        return False
    
    # Update the value
    current[path[-1]] = new_value
    return True`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Create a function that counts how many keys exist at each level of a nested dictionary.',
      initialCode: `def count_keys_by_level(data):
    """
    Counts keys at each nesting level of the dictionary.
    
    Args:
        data: A nested dictionary
        
    Returns:
        list: Count of keys at each level
    """
    # Your code here
    pass

# Test with:
data = {
    "a": {
        "b": {"c": 1, "d": 2},
        "e": {"f": 3}
    },
    "g": {"h": 4}
}`,
      solution: `def count_keys_by_level(data):
    """
    Counts keys at each nesting level of the dictionary.
    """
    def count_level(d, level, counts):
        if not isinstance(d, dict):
            return
        
        # Extend counts list if needed
        while len(counts) <= level:
            counts.append(0)
        
        # Count keys at current level
        counts[level] += len(d)
        
        # Recurse into nested dictionaries
        for value in d.values():
            count_level(value, level + 1, counts)
    
    counts = []
    count_level(data, 0, counts)
    return counts`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Which method of checking key existence is most appropriate when you need to provide a default value?',
      options: [
        'The "in" operator',
        'try-except block',
        'get() method',
        'keys() view object',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. The "in" operator only tells you if the key exists, it doesn\'t help with default values.',
        'Incorrect. While try-except can handle missing keys, it\'s more verbose for providing defaults.',
        'Correct! The get() method allows you to specify a default value that\'s returned when the key doesn\'t exist.',
        'Incorrect. View objects are for accessing dictionary structure, not providing defaults.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What is the primary advantage of using the "in" operator over the get() method for key checking?',
      options: [
        'It\'s faster than get()',
        'It\'s more explicit about the intent to check existence',
        'It can handle nested dictionaries better',
        'It automatically provides default values',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Performance difference is negligible for most use cases.',
        'Correct! The "in" operator makes it very clear that you\'re checking for key existence.',
        'Incorrect. Both methods can be used with nested dictionaries.',
        'Incorrect. The "in" operator doesn\'t handle default values at all.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const dictIterationData = {
  title: 'Dictionary Iteration',
  content: `<p>
Understanding how to iterate over dictionaries effectively is crucial for working with data in Python. A dictionary is like a collection of labeled containers, and iteration lets us systematically examine each container's label (key) and contents (value) in different ways.
</p>

<h3><u>Core Iteration Methods</u></h3>

<h4><b>Dictionary Views</b></h4>
<p>
Python provides three main ways to view and iterate over dictionary contents, each serving different needs:
</p>

<p>1. keys() - Accessing Just the Labels:</p>
<li>Returns a view of all dictionary keys</li>
<li>Memory efficient - doesn't create a separate copy</li>
<li>Updates automatically if dictionary changes</li>
<li>Perfect when you only need to work with keys</li>

<p>2. values() - Looking Inside the Containers:</p>
<li>Returns a view of all values</li>
<li>Useful when keys aren't relevant to the task</li>
<li>Allows duplicate values (unlike keys)</li>
<li>Common in data processing tasks</li>

<p>3. items() - Seeing the Complete Picture:</p>
<li>Returns view of key-value pairs as tuples</li>
<li>Most versatile iteration method</li>
<li>Enables parallel assignment in loop</li>
<li>Ideal when you need both keys and values</li>

<h4><b>Order of Iteration</b></h4>
<p>
A key point about dictionary iteration in modern Python:
</p>
<li>Python 3.7+ guarantees dictionary order matches insertion order</li>
<li>Earlier versions made no ordering guarantees</li>
<li>Don't rely on order if compatibility with older versions is needed</li>

<h4><b>Common Iteration Patterns</b></h4>
<p>
Different tasks require different iteration approaches:
</p>
<li>Filtering: Creating new dictionaries based on conditions</li>
<li>Transformation: Modifying keys or values during iteration</li>
<li>Aggregation: Combining or summarizing dictionary data</li>
<li>Nested Iteration: Working with nested dictionaries</li>

<h3><u>Performance Considerations</u></h3>
<p>
Understanding performance implications helps write efficient code:
</p>
<li>View objects are more efficient than creating lists</li>
<li>Avoid modifying dictionary size during iteration</li>
<li>Consider dictionary comprehension for transformations</li>
<li>Use generator expressions for memory efficiency with large dictionaries</li>`,

  codeExample: `# Comprehensive demonstration of dictionary iteration patterns

class DictionaryIterationDemo:
    def __init__(self):
        # Sample data: Student grades across different subjects
        self.student_grades = {
            "Alice": {
                "Math": 95,
                "Science": 92,
                "History": 88
            },
            "Bob": {
                "Math": 85,
                "Science": 90,
                "History": 85
            },
            "Charlie": {
                "Math": 78,
                "Science": 85,
                "History": 92
            }
        }
    
    def demonstrate_basic_iteration(self):
        """Shows the three basic ways to iterate over a dictionary"""
        print("Iterating over keys:")
        for student in self.student_grades:
            print(f"Student: {student}")
        
        print("\\nIterating over values:")
        for grades in self.student_grades.values():
            print(f"Grades: {grades}")
        
        print("\\nIterating over items:")
        for student, grades in self.student_grades.items():
            print(f"{student}'s grades: {grades}")
    
    def calculate_student_averages(self):
        """Demonstrates practical iteration for data processing"""
        student_averages = {}
        
        for student, grades in self.student_grades.items():
            # Inner iteration over subject grades
            total = sum(grades.values())
            average = total / len(grades)
            student_averages[student] = round(average, 2)
        
        return student_averages
    
    def find_top_performers(self, subject):
        """Shows filtering during iteration"""
        # Dictionary comprehension with filtering
        top_students = {
            student: grades[subject]
            for student, grades in self.student_grades.items()
            if grades[subject] >= 90
        }
        return top_students
    
    def transform_grades(self, curve_points):
        """Demonstrates dictionary transformation during iteration"""
        curved_grades = {}
        
        for student, grades in self.student_grades.items():
            # Create new dictionary for each student's curved grades
            curved_grades[student] = {
                subject: min(100, grade + curve_points)
                for subject, grade in grades.items()
            }
        
        return curved_grades
    
    def analyze_class_performance(self):
        """Shows complex nested iteration with data analysis"""
        subject_stats = {}
        
        # First collect all grades by subject
        for student_grades in self.student_grades.values():
            for subject, grade in student_grades.items():
                if subject not in subject_stats:
                    subject_stats[subject] = {
                        "total": 0,
                        "count": 0,
                        "highest": float('-inf'),
                        "lowest": float('inf')
                    }
                
                stats = subject_stats[subject]
                stats["total"] += grade
                stats["count"] += 1
                stats["highest"] = max(stats["highest"], grade)
                stats["lowest"] = min(stats["lowest"], grade)
        
        # Calculate averages
        for subject, stats in subject_stats.items():
            stats["average"] = round(stats["total"] / stats["count"], 2)
        
        return subject_stats

# Practical examples and usage patterns
def demonstrate_iteration_patterns():
    demo = DictionaryIterationDemo()
    
    # Calculate and display student averages
    averages = demo.calculate_student_averages()
    print("Student Averages:", averages)
    
    # Find top performers in Math
    top_math = demo.find_top_performers("Math")
    print("Top Math Students:", top_math)
    
    # Apply a curve to all grades
    curved = demo.transform_grades(5)
    print("Curved Grades:", curved)
    
    # Analyze class performance by subject
    analysis = demo.analyze_class_performance()
    print("Class Analysis:", analysis)`,

  exercises: [
    {
      prompt: 'Create a function that finds students who improved their grades between two sets of exams.',
      initialCode: `def find_improvements(exam1_grades, exam2_grades):
    """
    Identifies students whose grades improved between exams.
    
    Args:
        exam1_grades: Dictionary of student grades from first exam
        exam2_grades: Dictionary of student grades from second exam
        
    Returns:
        Dictionary of students and their improvement amount
    """
    # Your code here
    pass

# Test with:
exam1 = {"Alice": 85, "Bob": 92, "Charlie": 78}
exam2 = {"Alice": 88, "Bob": 88, "Charlie": 90}`,
      solution: `def find_improvements(exam1_grades, exam2_grades):
    """
    Identifies students whose grades improved between exams.
    """
    improvements = {}
    
    for student, grade2 in exam2_grades.items():
        if student in exam1_grades:
            grade1 = exam1_grades[student]
            if grade2 > grade1:
                improvements[student] = grade2 - grade1
    
    return improvements`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Create a function that finds the subjects where a student\'s grade is above the class average.',
      initialCode: `def above_average_subjects(grades_data, student_name):
    """
    Finds subjects where a student is above average.
    
    Args:
        grades_data: Dictionary of student grades by subject
        student_name: Name of student to analyze
        
    Returns:
        List of subjects where student is above average
    """
    # Your code here
    pass

# Test with:
grades = {
    "Alice": {"Math": 95, "Science": 92, "History": 88},
    "Bob": {"Math": 85, "Science": 90, "History": 85},
    "Charlie": {"Math": 78, "Science": 85, "History": 92}
}`,
      solution: `def above_average_subjects(grades_data, student_name):
    """
    Finds subjects where a student is above average.
    """
    if student_name not in grades_data:
        return []
    
    # Calculate averages for each subject
    subject_averages = {}
    for student_grades in grades_data.values():
        for subject, grade in student_grades.items():
            if subject not in subject_averages:
                subject_averages[subject] = {"total": 0, "count": 0}
            subject_averages[subject]["total"] += grade
            subject_averages[subject]["count"] += 1
    
    # Calculate final averages
    for subject_data in subject_averages.values():
        subject_data["average"] = subject_data["total"] / subject_data["count"]
    
    # Compare student's grades to averages
    student_grades = grades_data[student_name]
    return [
        subject
        for subject, grade in student_grades.items()
        if grade > subject_averages[subject]["average"]
    ]`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Which method should you use to iterate over both keys and values simultaneously?',
      options: [
        'keys()',
        'values()',
        'items()',
        'pairs()',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. keys() only provides access to dictionary keys.',
        'Incorrect. values() only provides access to dictionary values.',
        'Correct! items() returns key-value pairs, allowing simultaneous access to both.',
        'Incorrect. pairs() is not a dictionary method.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What happens if you modify a dictionary while iterating over it?',
      options: [
        'Nothing, it\'s perfectly safe',
        'Python prevents any modifications during iteration',
        'It might raise a RuntimeError',
        'The iteration will always crash',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Modifying a dictionary during iteration can cause problems.',
        'Incorrect. Python allows modifications but they may cause issues.',
        'Correct! Modifying a dictionary during iteration may raise a RuntimeError.',
        'Incorrect. While risky, not all modifications cause crashes.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const dictComprehensionData = {
  title: 'Dictionary Comprehension',
  content: `<p>
Dictionary comprehension is an elegant and powerful feature in Python that allows us to create dictionaries using a compact, expressive syntax. Think of it as a recipe that tells Python how to build a dictionary step by step, transforming or filtering data along the way.
</p>

<p>
Understanding dictionary comprehension opens up new possibilities for writing clearer, more maintainable code. Let's explore this concept step by step, starting with the basics and building up to more sophisticated uses.
</p>

<h3><u>Basic Structure</u></h3>

<p>
A dictionary comprehension follows this general pattern:
{key_expression: value_expression for element in iterable}

Think of this as giving Python instructions for:
1. What to use as keys (key_expression)
2. What to use as values (value_expression)
3. Where to get the source data (iterable)
</p>

<h3><u>Common Use Cases</u></h3>

<p>
Dictionary comprehensions excel in several scenarios:
</p>

<p>1. Transforming Existing Dictionaries:</p>
<li>Converting all values to a different type</li>
<li>Modifying keys while keeping values</li>
<li>Performing calculations on values</li>

<p>2. Creating Dictionaries from Sequences:</p>
<li>Converting lists into dictionaries</li>
<li>Creating lookup tables</li>
<li>Building mappings from data</li>

<p>3. Filtering While Creating:</p>
<li>Including only items that meet certain conditions</li>
<li>Cleaning data during dictionary creation</li>
<li>Selecting specific key-value pairs</li>

<h3><u>Advanced Patterns</u></h3>

<p>
As you become comfortable with basic comprehensions, you can use more advanced features:
</p>

<p>1. Conditional Logic:</p>
<li>Using if statements to filter items</li>
<li>Incorporating if-else for value transformation</li>
<li>Multiple conditions for complex filtering</li>

<p>2. Nested Comprehensions:</p>
<li>Creating dictionaries of dictionaries</li>
<li>Processing nested data structures</li>
<li>Building complex data mappings</li>`,

  codeExample: `# Let's explore dictionary comprehension with practical examples

class DictionaryComprehensionDemo:
    def __init__(self):
        # Sample data for our examples
        self.scores = {'Alice': 92, 'Bob': 85, 'Charlie': 78, 'David': 95}
        self.items = ['apple', 'banana', 'orange', 'grape']
        self.measurements = [
            ('temperature', 24.5),
            ('humidity', 65),
            ('pressure', 1013)
        ]
    
    def basic_transformation(self):
        """Demonstrates simple value transformation"""
        # Convert all scores to letter grades
        def score_to_grade(score):
            if score >= 90: return 'A'
            if score >= 80: return 'B'
            if score >= 70: return 'C'
            return 'F'
        
        # Transform values while keeping the same keys
        letter_grades = {
            student: score_to_grade(score)
            for student, score in self.scores.items()
        }
        print("Letter grades:", letter_grades)
    
    def create_from_sequence(self):
        """Shows creating dictionaries from sequences"""
        # Create a dictionary with string lengths
        lengths = {item: len(item) for item in self.items}
        print("String lengths:", lengths)
        
        # Create dictionary from pairs
        sensor_data = {
            name: value
            for name, value in self.measurements
        }
        print("Sensor data:", sensor_data)
    
    def conditional_comprehension(self):
        """Demonstrates filtering during dictionary creation"""
        # Only include passing scores (>= 80)
        passing_scores = {
            student: score
            for student, score in self.scores.items()
            if score >= 80
        }
        print("Passing scores:", passing_scores)
    
    def advanced_patterns(self):
        """Shows more complex comprehension patterns"""
        # Using if-else in value expression
        status = {
            student: 'pass' if score >= 80 else 'fail'
            for student, score in self.scores.items()
        }
        print("Pass/Fail status:", status)
        
        # Nested transformation
        detailed_scores = {
            student: {
                'score': score,
                'grade': 'A' if score >= 90 else 'B' if score >= 80 else 'C',
                'passing': score >= 80
            }
            for student, score in self.scores.items()
        }
        print("Detailed scores:", detailed_scores)

    def practical_applications(self):
        """Real-world applications of dictionary comprehension"""
        # Data normalization
        temperatures_f = {'New York': 75, 'Los Angeles': 82, 'Chicago': 68}
        temperatures_c = {
            city: round((temp - 32) * 5/9, 1)
            for city, temp in temperatures_f.items()
        }
        
        # Creating a lookup table
        ascii_lookup = {
            char: ord(char)
            for char in 'abcdefghijklmnopqrstuvwxyz'
        }
        
        # Frequency counter
        text = "hello world"
        char_frequency = {
            char: text.count(char)
            for char in set(text)
            if char.isalpha()
        }
        
        return temperatures_c, ascii_lookup, char_frequency`,

  exercises: [
    {
      prompt: 'Create a function that takes a list of words and returns a dictionary where keys are words and values are dictionaries containing the word\'s length and whether it\'s a palindrome.',
      initialCode: `def analyze_words(words):
    """
    Analyze a list of words and return detailed information.
    
    Args:
        words: List of strings
        
    Returns:
        Dictionary with word analysis
    """
    # Your code here
    pass

# Test with:
test_words = ['level', 'python', 'radar', 'code']`,
      solution: `def analyze_words(words):
    """
    Analyze a list of words and return detailed information.
    """
    return {
        word: {
            'length': len(word),
            'is_palindrome': word.lower() == word.lower()[::-1],
            'vowel_count': sum(1 for char in word.lower() if char in 'aeiou')
        }
        for word in words
    }`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Create a function that takes a dictionary of student scores by subject and returns a dictionary of each student\'s highest scoring subject and the score.',
      initialCode: `def find_best_subjects(grades):
    """
    Find each student's best subject.
    
    Args:
        grades: Dictionary of student grades by subject
        
    Returns:
        Dictionary of student's best subject and score
    """
    # Your code here
    pass

# Test with:
grades = {
    'Alice': {'Math': 92, 'Science': 88, 'History': 95},
    'Bob': {'Math': 85, 'Science': 90, 'History': 85}
}`,
      solution: `def find_best_subjects(grades):
    """
    Find each student's best subject.
    """
    return {
        student: {
            'subject': max(subjects.items(), key=lambda x: x[1])[0],
            'score': max(subjects.values())
        }
        for student, subjects in grades.items()
    }`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'What is the output of this dictionary comprehension: {x: x**2 for x in range(3)}?',
      options: [
        '{0: 0, 1: 1, 2: 4}',
        '{1: 1, 2: 4, 3: 9}',
        '{0: 1, 1: 2, 2: 3}',
        '{0: 1, 1: 4, 2: 9}',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct! Each number is mapped to its square: 0→0, 1→1, 2→4',
        'Incorrect. range(3) starts at 0, not 1',
        'Incorrect. The values are squares, not increments',
        'Incorrect. The calculation is x**2, not (x+1)**2',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'Which dictionary comprehension syntax would create a dictionary of even numbers and their squares from a range of 1 to 10?',
      options: [
        '{x: x**2 for x in range(1, 11)}',
        '{x: x**2 for x in range(1, 11) if x % 2 == 0}',
        '{x**2: x for x in range(1, 11) if x % 2 == 0}',
        '{x: x**2 if x % 2 == 0 for x in range(1, 11)}',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. This includes all numbers, not just even ones',
        'Correct! This filters for even numbers using if x % 2 == 0',
        'Incorrect. This reverses the key-value relationship',
        'Incorrect. The if condition is in the wrong position',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const filteringDictData = {
  title: 'Filtering Dictionaries',
  content: `<p>
Understanding how to filter dictionaries effectively is a crucial skill for working with data in Python. Just as we might sort through a filing cabinet to find specific documents, we can filter dictionaries to extract exactly the information we need. Let's explore the various approaches to dictionary filtering, starting with simple techniques and building up to more sophisticated methods.
</p>

<h3><u>Core Filtering Approaches</u></h3>

<p>There are three main ways to filter dictionaries in Python, each with its own strengths and ideal use cases:</p>

<h4><b>1. Dictionary Comprehension</b></h4>
<p>
Think of dictionary comprehension as a smart copy machine that only copies the pages meeting certain criteria. It's the most Pythonic and readable approach, letting us create a new filtered dictionary in a single, clear statement. This method shines when the filtering logic is straightforward and you want to create a new dictionary.
</p>

<h4><b>2. Filter Function</b></h4>
<p>
The filter() function is like having an assistant who checks each item against specific criteria. It follows a functional programming style and works particularly well when you have predefined filtering conditions or want to reuse filtering logic across your code.
</p>

<h4><b>3. Traditional Loop</b></h4>
<p>
Sometimes the most direct approach is best - like manually sorting through files one by one. Traditional loops offer the most flexibility and are excellent when you need to perform complex operations during filtering or want complete control over the process.
</p>

<h3><u>Filtering Patterns and Use Cases</u></h3>

<p>Let's look at common filtering scenarios you'll encounter:</p>

<p>1. Value-Based Filtering:</p>
<li>Numerical thresholds (e.g., finding all items above a certain price)</li>
<li>Type checking (e.g., separating numeric and string values)</li>
<li>Pattern matching (e.g., finding text that matches certain criteria)</li>

<p>2. Key-Based Filtering:</p>
<li>Selecting specific keys (e.g., extracting only certain fields)</li>
<li>Pattern matching on keys (e.g., finding all keys starting with 'user_')</li>
<li>Key type filtering (e.g., separating string and numeric keys)</li>

<p>3. Compound Filtering:</p>
<li>Multiple conditions (e.g., items that meet several criteria)</li>
<li>Nested filtering (e.g., filtering dictionaries within dictionaries)</li>
<li>Complex logical combinations (e.g., using AND, OR, NOT conditions)</li>`,

  codeExample: `# Comprehensive demonstration of dictionary filtering techniques

class DictionaryFilteringDemo:
    def __init__(self):
        # Sample data: A product inventory system
        self.inventory = {
            "laptop": {
                "price": 999.99,
                "stock": 15,
                "category": "electronics",
                "ratings": [4.5, 4.8, 4.2]
            },
            "headphones": {
                "price": 89.99,
                "stock": 50,
                "category": "electronics",
                "ratings": [4.3, 4.6]
            },
            "notebook": {
                "price": 4.99,
                "stock": 100,
                "category": "office",
                "ratings": [4.0, 3.8, 4.1]
            },
            "desk lamp": {
                "price": 24.99,
                "stock": 20,
                "category": "home",
                "ratings": [4.7, 4.9]
            }
        }
    
    def filter_by_comprehension(self):
        """Demonstrates the clarity and elegance of dictionary comprehension"""
        # Find all electronics items
        electronics = {
            name: details
            for name, details in self.inventory.items()
            if details["category"] == "electronics"
        }
        
        # Find premium items (price > 50)
        premium_items = {
            name: details
            for name, details in self.inventory.items()
            if details["price"] > 50
        }
        
        return electronics, premium_items
    
    def filter_by_function(self):
        """Shows how to use the filter() function effectively"""
        # Find items with high average ratings (> 4.5)
        def has_high_ratings(item):
            name, details = item
            avg_rating = sum(details["ratings"]) / len(details["ratings"])
            return avg_rating > 4.5
        
        highly_rated = dict(filter(has_high_ratings, 
                                 self.inventory.items()))
        
        return highly_rated
    
    def filter_by_loop(self):
        """Demonstrates filtering with traditional loops for complex logic"""
        # Find items that are:
        # 1. In stock (stock > 0)
        # 2. Have consistent ratings (max - min <= 0.5)
        # 3. Are reasonably priced (price < 100)
        
        filtered_items = {}
        for name, details in self.inventory.items():
            # Skip out of stock items
            if details["stock"] == 0:
                continue
            
            # Check rating consistency
            ratings = details["ratings"]
            rating_range = max(ratings) - min(ratings)
            
            # Apply all conditions
            if (details["price"] < 100 and 
                rating_range <= 0.5 and 
                details["stock"] > 0):
                filtered_items[name] = details
        
        return filtered_items
    
    def compound_filtering(self):
        """Shows how to combine multiple filtering conditions"""
        # Find items that are:
        # - Electronics or office supplies
        # - In stock
        # - Well-rated (average > 4.0)
        filtered = {
            name: details
            for name, details in self.inventory.items()
            if (details["category"] in ["electronics", "office"]
                and details["stock"] > 0
                and (sum(details["ratings"]) / 
                     len(details["ratings"])) > 4.0)
        }
        
        return filtered
    
    def nested_filtering(self):
        """Demonstrates filtering nested dictionary structures"""
        # Create a summary with only essential info for affordable items
        affordable_summary = {
            name: {
                "price": details["price"],
                "category": details["category"]
            }
            for name, details in self.inventory.items()
            if details["price"] < 50
        }
        
        return affordable_summary`,

  exercises: [
    {
      prompt: 'Create a function that filters a dictionary of student grades, returning only students who passed all subjects (grade >= 60) and achieved distinction (grade >= 90) in at least one subject.',
      initialCode: `def find_successful_students(grades):
    """
    Filter students based on passing grades and distinctions.
    
    Args:
        grades: Dictionary of student grades
        Example: {
            "Alice": {"Math": 95, "Science": 88, "History": 75},
            "Bob": {"Math": 85, "Science": 55, "History": 80}
        }
    
    Returns:
        Dictionary of qualifying students and their grades
    """
    # Your code here
    pass`,
      solution: `def find_successful_students(grades):
    """
    Filter students based on passing grades and distinctions.
    """
    return {
        student: subjects
        for student, subjects in grades.items()
        if (all(grade >= 60 for grade in subjects.values()) and  # All passing
            any(grade >= 90 for grade in subjects.values()))     # At least one distinction`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Create a function that filters a product inventory to find items that need restocking. The function should handle missing fields gracefully and include the supplier information where available.',
      initialCode: `def find_restock_needed(inventory, threshold=10):
    """
    Find items needing restock with supplier info.
    
    Args:
        inventory: Dictionary of product inventory
        Example: {
            "item1": {"stock": 5, "supplier": "Acme"},
            "item2": {"stock": 15},
            "item3": {"stock": 8, "supplier": "Global"}
        }
        threshold: Minimum stock level before restock needed
    
    Returns:
        Dictionary of items needing restock
    """
    # Your code here
    pass`,
      solution: `def find_restock_needed(inventory, threshold=10):
    """
    Find items needing restock with supplier info.
    """
    return {
        item: {
            "current_stock": details["stock"],
            "supplier": details.get("supplier", "Unknown"),
            "units_needed": threshold - details["stock"]
        }
        for item, details in inventory.items()
        if details.get("stock", 0) < threshold
    }`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'What is the most efficient way to filter a dictionary while creating a new one?',
      options: [
        'Using a traditional for loop',
        'Using the filter() function',
        'Using dictionary comprehension',
        'Using recursion',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Traditional loops are more verbose and typically less readable.',
        'Incorrect. filter() requires conversion back to dict and is less readable.',
        'Correct! Dictionary comprehension is both efficient and readable for creating filtered dictionaries.',
        'Incorrect. Recursion would be unnecessarily complex for dictionary filtering.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'When should you use a traditional loop for filtering instead of dictionary comprehension?',
      options: [
        'When you need the fastest possible performance',
        'When working with small dictionaries',
        'When the filtering logic is very complex or requires multiple steps',
        'When you want to create a new dictionary',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Dictionary comprehension is generally as fast or faster.',
        'Incorrect. Dictionary size doesn\'t determine the best filtering method.',
        'Correct! Complex logic or multiple processing steps are better handled with traditional loops.',
        'Incorrect. Dictionary comprehension is ideal for creating new dictionaries.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const transformingDictData = {
  title: 'Transforming Dictionaries',
  content: `<p>
Transforming dictionaries is like being a data sculptor – you're taking raw information and reshaping it into exactly what you need. Understanding how to effectively transform dictionaries is crucial for data processing, analysis, and creating clean, usable data structures.
</p>

<h3><u>Understanding Dictionary Transformation</u></h3>

<p>
When we transform a dictionary, we're typically doing one or more of these operations:
</p>

<p>1. Value Transformation</p>
Think of this like currency conversion – you're keeping the same structure but changing the values. For example, you might:
<li>Convert temperatures from Fahrenheit to Celsius</li>
<li>Change string formats or case</li>
<li>Perform calculations on numeric values</li>

<p>2. Key Transformation</p>
This is like relabeling your filing system. You might want to:
<li>Standardize key names (e.g., converting to lowercase)</li>
<li>Add prefixes or suffixes</li>
<li>Create more descriptive keys</li>

<p>3. Structure Transformation</p>
Imagine reorganizing your entire filing cabinet. This involves:
<li>Flattening nested dictionaries</li>
<li>Creating nested structures from flat data</li>
<li>Combining or splitting dictionaries</li>

<h3><u>Common Transformation Patterns</u></h3>

<p>1. Direct Mapping:</p>
<li>One-to-one transformation of values</li>
<li>Applying a function to each value</li>
<li>Converting data types</li>

<p>2. Complex Transformations:</p>
<li>Combining multiple values</li>
<li>Conditional transformations</li>
<li>Aggregating nested data</li>

<p>3. Structural Changes:</p>
<li>Reshaping data hierarchies</li>
<li>Merging related data</li>
<li>Extracting specific patterns</li>`,

  codeExample: `# Comprehensive demonstration of dictionary transformation techniques

class DictionaryTransformDemo:
    def __init__(self):
        # Sample dataset: Student records with various information
        self.student_records = {
            "2023001": {
                "name": "Alice Smith",
                "scores": {
                    "midterm": 85,
                    "final": 92,
                    "project": 88
                },
                "attendance": 0.95
            },
            "2023002": {
                "name": "Bob Johnson",
                "scores": {
                    "midterm": 78,
                    "final": 85,
                    "project": 92
                },
                "attendance": 0.88
            }
        }
    
    def demonstrate_value_transformation(self):
        """Shows different ways to transform dictionary values"""
        # Calculate final grades (weighted average)
        grades = {
            student_id: {
                "name": data["name"],
                "final_grade": round(
                    data["scores"]["midterm"] * 0.3 +
                    data["scores"]["final"] * 0.4 +
                    data["scores"]["project"] * 0.3
                )
            }
            for student_id, data in self.student_records.items()
        }
        
        # Convert numeric scores to letter grades
        def get_letter_grade(score):
            if score >= 90: return 'A'
            if score >= 80: return 'B'
            if score >= 70: return 'C'
            return 'F'
        
        letter_grades = {
            student_id: {
                "name": info["name"],
                "grade": get_letter_grade(info["final_grade"])
            }
            for student_id, info in grades.items()
        }
        
        return grades, letter_grades
    
    def demonstrate_key_transformation(self):
        """Shows how to transform dictionary keys"""
        # Standardize keys and add prefixes
        standardized = {
            f"student_{id.lower()}": {
                "student_name": data["name"],
                "academic_scores": data["scores"],
                "attendance_rate": data["attendance"]
            }
            for id, data in self.student_records.items()
        }
        
        return standardized
    
    def demonstrate_structure_transformation(self):
        """Shows how to transform dictionary structure"""
        # Flatten nested dictionary
        flat_records = {}
        for student_id, data in self.student_records.items():
            flat_records[student_id] = {
                "name": data["name"],
                "midterm_score": data["scores"]["midterm"],
                "final_score": data["scores"]["final"],
                "project_score": data["scores"]["project"],
                "attendance": data["attendance"]
            }
        
        # Create summary by combining data
        summary = {}
        for student_id, data in self.student_records.items():
            scores = data["scores"].values()
            summary[student_id] = {
                "name": data["name"],
                "average_score": round(sum(scores) / len(scores), 2),
                "performance_index": round(
                    (sum(scores) / len(scores)) * data["attendance"],
                    2
                )
            }
        
        return flat_records, summary
    
    def demonstrate_advanced_transformations(self):
        """Shows more complex transformation patterns"""
        # Create detailed performance analysis
        performance_analysis = {
            student_id: {
                "student_info": {
                    "name": data["name"],
                    "attendance_category": "High" if data["attendance"] > 0.9 
                                        else "Medium" if data["attendance"] > 0.8 
                                        else "Low"
                },
                "academic_performance": {
                    "average_score": round(
                        sum(data["scores"].values()) / len(data["scores"]),
                        2
                    ),
                    "highest_score": max(data["scores"].values()),
                    "lowest_score": min(data["scores"].values())
                },
                "status": {
                    "passing": all(score >= 70 for score in data["scores"].values()),
                    "distinction": any(score >= 90 for score in data["scores"].values())
                }
            }
            for student_id, data in self.student_records.items()
        }
        
        return performance_analysis`,

  exercises: [
    {
      prompt: 'Create a function that transforms a dictionary of product sales data by calculating monthly averages and identifying peak sales months.',
      initialCode: `def analyze_sales(sales_data):
    """
    Transform sales data into monthly analysis.
    
    Args:
        sales_data: Dictionary with structure
        {
            "product_1": {
                "Jan": 100,
                "Feb": 120,
                ...
            },
            ...
        }
    
    Returns:
        Dictionary with monthly averages and peak months
    """
    # Your code here
    pass`,
      solution: `def analyze_sales(sales_data):
    """
    Transform sales data into monthly analysis.
    """
    analysis = {}
    
    for product, monthly_sales in sales_data.items():
        # Calculate monthly statistics
        average_sales = sum(monthly_sales.values()) / len(monthly_sales)
        peak_month = max(monthly_sales.items(), key=lambda x: x[1])
        
        analysis[product] = {
            "average_monthly_sales": round(average_sales, 2),
            "peak_sales": {
                "month": peak_month[0],
                "amount": peak_month[1]
            },
            "months_above_average": [
                month for month, sales in monthly_sales.items()
                if sales > average_sales
            ]
        }
    
    return analysis`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'Which transformation approach should you use when you need to both modify values and restructure a dictionary?',
      options: [
        'Simple dictionary comprehension',
        'Multiple separate transformations',
        'Nested dictionary comprehension with restructuring logic',
        'Direct value modification',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Simple comprehension cannot handle complex restructuring.',
        'Incorrect. Multiple transformations would be less efficient and harder to maintain.',
        'Correct! Nested comprehension can handle both value modifications and structural changes in one pass.',
        'Incorrect. Direct modification cannot handle structural changes effectively.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the best practice for transforming deeply nested dictionaries?',
      options: [
        'Always flatten them first',
        'Use multiple nested loops',
        'Write recursive functions for consistent handling',
        'Only transform the top level',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Flattening isn\'t always necessary or desirable.',
        'Incorrect. Multiple nested loops can become unmanageable.',
        'Correct! Recursive functions provide a consistent way to handle arbitrary nesting levels.',
        'Incorrect. This would ignore important nested data.',
      ],
      difficulty: Difficulty.Advanced,
    }
  ]
};

const frequencyCounterData = {
  title: 'Frequency Counter Pattern',
  content: `<p>
The Frequency Counter Pattern is a powerful technique that uses dictionaries to count how often elements occur in data. Think of it like taking inventory in a store – you're creating a detailed record of what you have and how many of each item exists. This pattern is particularly valuable because it can often help us turn O(n²) problems into O(n) solutions.
</p>

<p>
Let's understand this pattern from the ground up, starting with simple examples and building to more complex applications that often appear in coding interviews.
</p>

<h3><u>Understanding the Pattern</u></h3>

<p>At its core, the Frequency Counter Pattern involves three main steps:</p>

<p>1. Creating a Dictionary:</p>
First, we create an empty dictionary that will store our counts. Think of this as getting an empty ledger ready to record our inventory.

<p>2. Counting Occurrences:</p>
We then iterate through our data once, updating our counts in the dictionary. This is like walking through the store and counting each item we find.

<p>3. Using the Counts:</p>
Finally, we use these counts to solve our problem, whether it's finding duplicates, comparing collections, or analyzing patterns.

<h3><u>Common Applications</u></h3>

<p>The Frequency Counter Pattern excels in several scenarios:</p>

<p>1. Anagram Detection:</p>
<li>Comparing if two strings have the same character frequencies</li>
<li>Much faster than sorting or checking each character against each other</li>

<p>2. Same Frequency:</p>
<li>Checking if two arrays have the same frequency of elements</li>
<li>Finding matching patterns in data</li>

<p>3. Subset Verification:</p>
<li>Checking if one collection is a subset of another</li>
<li>Validating if elements appear with required frequencies</li>

<h3><u>Performance Benefits</u></h3>

<p>
Understanding why this pattern is efficient helps us use it effectively:
</p>
<li>Single pass through data: O(n) time complexity</li>
<li>Constant time lookups in dictionary</li>
<li>Avoids nested loops typically seen in naive solutions</li>
<li>Space complexity is often O(k) where k is the size of the alphabet or unique elements</li>`,

  codeExample: `# Comprehensive demonstration of frequency counter pattern

class FrequencyCounterDemo:
    def __init__(self):
        self.test_cases = {
            "strings": ["hello", "world", "python"],
            "numbers": [1, 2, 2, 3, 3, 3, 4, 4, 4, 4],
            "words": ["the", "quick", "brown", "fox", "the", "fox"]
        }
    
    def basic_counter(self, collection):
        """
        Demonstrates the basic frequency counter pattern.
        This is the foundation of more complex applications.
        """
        # Initialize our frequency dictionary
        frequency = {}
        
        # Count occurrences
        for item in collection:
            # Get current count (default 0) and add 1
            frequency[item] = frequency.get(item, 0) + 1
        
        return frequency
    
    def is_anagram(self, str1, str2):
        """
        Classic interview problem: determine if two strings are anagrams.
        Uses frequency counter to achieve O(n) time complexity.
        """
        # Early exit for obvious non-anagrams
        if len(str1) != len(str2):
            return False
        
        # Create frequency counter for first string
        char_count = {}
        for char in str1:
            char_count[char] = char_count.get(char, 0) + 1
        
        # Check second string against frequencies
        for char in str2:
            # If char isn't in dict or count becomes negative, not an anagram
            if char not in char_count or char_count[char] == 0:
                return False
            char_count[char] -= 1
        
        return True
    
    def same_frequency(self, arr1, arr2):
        """
        Checks if two arrays have the same frequency of elements.
        Useful for pattern matching problems.
        """
        freq1 = self.basic_counter(arr1)
        freq2 = self.basic_counter(arr2)
        
        # Compare frequencies
        return freq1 == freq2
    
    def find_mode(self, numbers):
        """
        Finds the most frequent element(s) in a collection.
        Returns both the elements and their frequency.
        """
        # Get frequencies
        frequencies = self.basic_counter(numbers)
        
        # Find highest frequency
        max_freq = max(frequencies.values())
        
        # Find all elements with that frequency
        modes = [
            num for num, freq in frequencies.items()
            if freq == max_freq
        ]
        
        return {
            "modes": modes,
            "frequency": max_freq
        }
    
    def advanced_pattern_match(self, text, pattern):
        """
        More complex application: finding pattern matches in text.
        Useful for substring problems and pattern recognition.
        """
        # Create frequency counter for pattern
        pattern_freq = self.basic_counter(pattern)
        pattern_len = len(pattern)
        
        # Initialize window frequency counter
        window_freq = {}
        matches = []
        
        # Count first window
        for i in range(min(len(text), pattern_len)):
            char = text[i]
            window_freq[char] = window_freq.get(char, 0) + 1
        
        # Check first window
        if window_freq == pattern_freq:
            matches.append(0)
        
        # Slide window and check remaining positions
        for i in range(pattern_len, len(text)):
            # Remove first character of previous window
            window_freq[text[i - pattern_len]] -= 1
            if window_freq[text[i - pattern_len]] == 0:
                del window_freq[text[i - pattern_len]]
            
            # Add new character
            window_freq[text[i]] = window_freq.get(text[i], 0) + 1
            
            # Check new window
            if window_freq == pattern_freq:
                matches.append(i - pattern_len + 1)
        
        return matches`,

  exercises: [
    {
      prompt: 'Create a function that determines if two strings are permutations of each other, considering spaces and punctuation. Use the frequency counter pattern.',
      initialCode: `def are_permutations(str1, str2):
    """
    Check if two strings are permutations of each other.
    Should consider spaces and punctuation.
    
    Args:
        str1, str2: Strings to compare
    
    Returns:
        bool: True if strings are permutations
    """
    # Your code here
    pass

# Test cases
test1 = "hello world"
test2 = "world hello"
test3 = "hello  world"  # Note extra space`,
      solution: `def are_permutations(str1, str2):
    """
    Check if two strings are permutations of each other.
    """
    # Create frequency counters for both strings
    freq1 = {}
    freq2 = {}
    
    # Count characters in first string
    for char in str1:
        freq1[char] = freq1.get(char, 0) + 1
    
    # Count characters in second string
    for char in str2:
        freq2[char] = freq2.get(char, 0) + 1
    
    # Compare frequencies
    return freq1 == freq2`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Create a function that finds all pairs of numbers in an array that sum to a given target. Use frequency counter to achieve O(n) time complexity.',
      initialCode: `def find_pairs(numbers, target):
    """
    Find all pairs of numbers that sum to target.
    
    Args:
        numbers: List of integers
        target: Target sum
    
    Returns:
        List of tuples containing pairs
    """
    # Your code here
    pass

# Test case
numbers = [1, 2, 3, 4, 5, 6, 7]
target = 8`,
      solution: `def find_pairs(numbers, target):
    """
    Find all pairs of numbers that sum to target using frequency counter.
    """
    # Create frequency counter
    freq = {}
    pairs = []
    
    # Use frequency counter to track seen numbers
    for num in numbers:
        complement = target - num
        
        # If we've seen the complement, we found a pair
        if complement in freq:
            pairs.append((complement, num))
        
        # Add current number to frequency counter
        freq[num] = freq.get(num, 0) + 1
    
    return pairs`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'What is the main advantage of using a frequency counter over nested loops?',
      options: [
        'It uses less memory',
        'It improves time complexity from O(n²) to O(n)',
        'It makes the code more readable',
        'It works better with strings',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Frequency counters often use more memory than nested loops.',
        'Correct! The frequency counter pattern typically reduces time complexity from O(n²) to O(n).',
        'Incorrect. Readability depends on implementation and isn\'t the main advantage.',
        'Incorrect. While useful for strings, this isn\'t the main advantage.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'When should you NOT use a frequency counter?',
      options: [
        'When order matters',
        'When working with strings',
        'When dealing with large datasets',
        'When comparing frequencies',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct! Frequency counters don\'t preserve order information, so they\'re not suitable when order matters.',
        'Incorrect. Frequency counters work well with strings.',
        'Incorrect. Frequency counters are especially efficient for large datasets.',
        'Incorrect. Comparing frequencies is a perfect use case for this pattern.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const groupingPatternData = {
  title: 'Grouping Pattern',
  content: `<p>
The Grouping Pattern is a powerful technique in Python that helps us organize data by common characteristics, much like sorting items in your closet by categories such as clothing type, color, or season. This pattern is particularly valuable when working with large datasets where we need to analyze relationships and patterns among items sharing common properties.
</p>

<p>
Let's explore this pattern in depth, starting with fundamental concepts and building up to sophisticated applications you might encounter in real-world programming tasks.
</p>

<h3><u>Understanding the Grouping Pattern</u></h3>

<p>
At its heart, the Grouping Pattern involves creating a dictionary where each key represents a category or property, and the corresponding value is a collection of items sharing that property. Imagine sorting a basket of fruits - you might group them by color, where 'red' maps to [apple, strawberry, cherry], 'yellow' to [banana, lemon], and so on.
</p>

<p>
The process typically involves three main steps:
</p>

<p>1. Identifying the Grouping Criterion</p>
This is like deciding how you want to organize your items. You might group:
<li>Students by their grade level</li>
<li>Transactions by date or category</li>
<li>Words by their first letter</li>

<p>2. Creating Group Categories</p>
As you process each item, you may need to:
<li>Create new groups dynamically as you encounter new categories</li>
<li>Initialize empty collections for each group</li>
<li>Handle cases where items might belong to multiple groups</li>

<p>3. Assigning Items to Groups</p>
This involves:
<li>Determining which group(s) each item belongs to</li>
<li>Adding items to their respective groups</li>
<li>Handling edge cases and invalid data</li>

<h3><u>Common Applications</u></h3>

<p>The Grouping Pattern is particularly useful for:</p>

<p>1. Data Analysis:</p>
<li>Aggregating sales by region or time period</li>
<li>Analyzing user behavior by demographic</li>
<li>Categorizing feedback or survey responses</li>

<p>2. Data Organization:</p>
<li>Organizing files by type or size</li>
<li>Grouping related records in a database</li>
<li>Creating hierarchical data structures</li>

<p>3. Pattern Recognition:</p>
<li>Finding common characteristics in data</li>
<li>Identifying trends across groups</li>
<li>Detecting anomalies or outliers</li>`,

  codeExample: `# Comprehensive demonstration of grouping pattern techniques

class GroupingPatternDemo:
    def __init__(self):
        # Sample dataset: Student records
        self.students = [
            {"name": "Alice", "grade": "A", "subjects": ["Math", "Physics"], "year": 2},
            {"name": "Bob", "grade": "B", "subjects": ["Biology", "Chemistry"], "year": 1},
            {"name": "Charlie", "grade": "A", "subjects": ["Physics", "Chemistry"], "year": 2},
            {"name": "Diana", "grade": "B", "subjects": ["Math", "Biology"], "year": 1}
        ]

    def basic_grouping(self):
        """
        Demonstrates simple grouping by a single property.
        Groups students by their grade.
        """
        # Initialize our grouping dictionary
        grade_groups = {}
        
        # Process each student
        for student in self.students:
            grade = student["grade"]
            # Create group if it doesn't exist
            if grade not in grade_groups:
                grade_groups[grade] = []
            # Add student to appropriate group
            grade_groups[grade].append(student["name"])
        
        return grade_groups

    def multi_criteria_grouping(self):
        """
        Groups students by multiple properties.
        Creates a hierarchical structure: year -> grade -> students
        """
        hierarchical_groups = {}
        
        for student in self.students:
            year = student["year"]
            grade = student["grade"]
            
            # Initialize year group if needed
            if year not in hierarchical_groups:
                hierarchical_groups[year] = {}
            
            # Initialize grade group if needed
            if grade not in hierarchical_groups[year]:
                hierarchical_groups[year][grade] = []
            
            # Add student to appropriate group
            hierarchical_groups[year][grade].append(student["name"])
        
        return hierarchical_groups

    def subject_grouping(self):
        """
        Demonstrates grouping where items can belong to multiple groups.
        Groups students by the subjects they're taking.
        """
        subject_groups = {}
        
        for student in self.students:
            # Process each subject for the student
            for subject in student["subjects"]:
                # Create subject group if it doesn't exist
                if subject not in subject_groups:
                    subject_groups[subject] = []
                # Add student to subject group
                subject_groups[subject].append(student["name"])
        
        return subject_groups

    def advanced_grouping(self):
        """
        Demonstrates advanced grouping with data aggregation.
        Groups students and calculates statistics for each group.
        """
        year_stats = {}
        
        for student in self.students:
            year = student["year"]
            
            # Initialize year group if needed
            if year not in year_stats:
                year_stats[year] = {
                    "students": [],
                    "grade_distribution": {},
                    "subject_count": {},
                    "total_subjects": 0
                }
            
            # Update statistics
            stats = year_stats[year]
            stats["students"].append(student["name"])
            stats["grade_distribution"][student["grade"]] = (
                stats["grade_distribution"].get(student["grade"], 0) + 1
            )
            
            # Update subject statistics
            for subject in student["subjects"]:
                stats["subject_count"][subject] = (
                    stats["subject_count"].get(subject, 0) + 1
                )
                stats["total_subjects"] += 1
            
            # Calculate averages and percentages
            stats["average_subjects_per_student"] = (
                stats["total_subjects"] / len(stats["students"])
            )
        
        return year_stats`,

  exercises: [
    {
      prompt: 'Create a function that groups words by their length and provides additional statistics about each group.',
      initialCode: `def analyze_word_groups(words):
    """
    Group words by length and analyze each group.
    
    Args:
        words: List of strings
    
    Returns:
        Dictionary with word groups and their statistics
    """
    # Your code here
    pass

# Test with:
test_words = ["cat", "dog", "tree", "horse", "elephant", "ant", "bee"]`,
      solution: `def analyze_word_groups(words):
    """
    Group words by length and analyze each group.
    """
    word_groups = {}
    
    for word in words:
        length = len(word)
        
        # Initialize group if needed
        if length not in word_groups:
            word_groups[length] = {
                "words": [],
                "count": 0,
                "starts_with_vowel": 0,
                "common_letters": set()
            }
        
        # Update group statistics
        group = word_groups[length]
        group["words"].append(word)
        group["count"] += 1
        if word[0].lower() in 'aeiou':
            group["starts_with_vowel"] += 1
        
        # Update common letters
        if not group["common_letters"]:
            group["common_letters"] = set(word.lower())
        else:
            group["common_letters"] &= set(word.lower())
    
    return word_groups`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Create a function that groups transactions by date and provides daily summaries with various metrics.',
      initialCode: `def analyze_daily_transactions(transactions):
    """
    Group and analyze transactions by date.
    
    Args:
        transactions: List of dictionaries with date, amount, and type
        Example: [
            {"date": "2024-01-01", "amount": 100, "type": "sale"},
            {"date": "2024-01-01", "amount": 50, "type": "refund"}
        ]
    
    Returns:
        Dictionary with daily summaries
    """
    # Your code here
    pass`,
      solution: `def analyze_daily_transactions(transactions):
    """
    Group and analyze transactions by date.
    """
    daily_summary = {}
    
    for transaction in transactions:
        date = transaction["date"]
        amount = transaction["amount"]
        trans_type = transaction["type"]
        
        # Initialize daily summary if needed
        if date not in daily_summary:
            daily_summary[date] = {
                "total_transactions": 0,
                "total_amount": 0,
                "sales": 0,
                "refunds": 0,
                "average_transaction": 0,
                "transaction_types": {}
            }
        
        # Update summary
        summary = daily_summary[date]
        summary["total_transactions"] += 1
        summary["total_amount"] += amount
        
        if trans_type == "sale":
            summary["sales"] += amount
        elif trans_type == "refund":
            summary["refunds"] += amount
        
        summary["transaction_types"][trans_type] = (
            summary["transaction_types"].get(trans_type, 0) + 1
        )
        
        # Calculate average
        summary["average_transaction"] = (
            summary["total_amount"] / summary["total_transactions"]
        )
    
    return daily_summary`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'When using the grouping pattern, what is the best way to initialize a new group?',
      options: [
        'Always create all possible groups at the start',
        'Check if the group exists, create if it doesn\'t',
        'Create groups only after processing all items',
        'Use a try-except block for each group',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Creating all possible groups upfront may waste memory and isn\'t always possible.',
        'Correct! Checking and creating groups as needed is the most flexible and efficient approach.',
        'Incorrect. This would require multiple passes through the data.',
        'Incorrect. Using try-except for normal control flow isn\'t Pythonic.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the primary advantage of hierarchical grouping over flat grouping?',
      options: [
        'It uses less memory',
        'It\'s faster to process',
        'It allows for more complex data relationships',
        'It\'s easier to implement',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Hierarchical grouping often uses more memory.',
        'Incorrect. It typically requires more processing time.',
        'Correct! Hierarchical grouping can represent complex relationships and nested categories.',
        'Incorrect. It\'s usually more complex to implement than flat grouping.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const cachingPatternData = {
  title: 'Caching Pattern',
  content: `<p>
Imagine you're solving a complex math problem that requires several steps. Instead of recalculating intermediate results every time you need them, you might jot them down on scratch paper for quick reference. This is exactly what caching does in programming – it stores computed results to avoid redundant calculations. Let's explore how dictionaries make this powerful pattern possible.
</p>

<h3><u>Understanding Caching and Memoization</u></h3>

<p>
Caching is like having a smart notebook that remembers answers to questions you've already solved. When you need an answer again, instead of recalculating it, you simply look it up in your notebook. This can dramatically improve performance when:
</p>

<p>1. Computations are Expensive</p>
Think about calculating the millionth Fibonacci number. Without caching, your computer would recalculate all previous numbers each time. With caching, it remembers previous results and builds upon them.

<p>2. Same Inputs Occur Frequently</p>
Imagine a function that converts temperatures from Celsius to Fahrenheit. If you're converting the same temperatures repeatedly, caching previous conversions saves time.

<p>3. Results Don't Change</p>
When the output for a given input always stays the same (deterministic functions), caching is particularly effective because we can safely reuse previous results.

<h3><u>Implementing Effective Caching</u></h3>

<p>
A well-implemented cache needs to consider several factors:
</p>

<p>1. Cache Size Management</p>
Just as a notebook has limited pages, computer memory is finite. We need strategies to:
<li>Limit cache size to prevent memory issues</li>
<li>Decide which items to keep or remove</li>
<li>Clear outdated or unnecessary entries</li>

<p>2. Cache Access Patterns</p>
Different situations call for different caching strategies:
<li>Simple memoization for recursive functions</li>
<li>LRU (Least Recently Used) for temporal data</li>
<li>Size-limited caches for memory-constrained environments</li>

<p>3. Thread Safety</p>
When multiple parts of a program access the cache simultaneously:
<li>Ensure consistent reading and writing</li>
<li>Prevent race conditions</li>
<li>Handle concurrent updates properly</li>`,

  codeExample: `# Comprehensive demonstration of caching patterns

class CachingPatternDemo:
    def __init__(self):
        self.reset_stats()
    
    def reset_stats(self):
        """Reset computation statistics"""
        self.computation_count = 0
        self.cache_hits = 0
        self.cache_misses = 0
    
    def basic_memoization(self):
        """
        Demonstrates simple memoization with Fibonacci numbers.
        Shows dramatic performance improvement for recursive calculations.
        """
        # Cache for storing computed Fibonacci numbers
        cache = {}
        
        def fibonacci(n):
            # Track computation attempts
            self.computation_count += 1
            
            # Base cases
            if n <= 1:
                return n
            
            # Check if result is in cache
            if n in cache:
                self.cache_hits += 1
                return cache[n]
            
            # If not in cache, compute and store result
            self.cache_misses += 1
            cache[n] = fibonacci(n-1) + fibonacci(n-2)
            return cache[n]
        
        return fibonacci
    
    def lru_cache_implementation(self, max_size=3):
        """
        Implements a Least Recently Used (LRU) cache.
        Maintains a size limit by removing least recently used items.
        """
        cache = {}
        access_order = []
        
        def update_access_order(key):
            """Update the order of accessed items"""
            if key in access_order:
                access_order.remove(key)
            access_order.append(key)
            
            # Remove oldest item if cache exceeds max size
            if len(cache) > max_size:
                oldest_key = access_order.pop(0)
                del cache[oldest_key]
        
        def compute_expensive_operation(x, y):
            """Simulates an expensive computation"""
            self.computation_count += 1
            return x ** y
        
        def cached_operation(x, y):
            key = (x, y)
            
            if key in cache:
                self.cache_hits += 1
                update_access_order(key)
                return cache[key]
            
            self.cache_misses += 1
            result = compute_expensive_operation(x, y)
            cache[key] = result
            update_access_order(key)
            return result
        
        return cached_operation
    
    def advanced_caching(self):
        """
        Demonstrates advanced caching with timeouts and automatic cleanup.
        Useful for caching data that becomes stale after a certain time.
        """
        from time import time
        
        cache = {}
        timeout = 60  # Cache entries expire after 60 seconds
        
        def clean_expired_entries():
            """Remove expired entries from cache"""
            current_time = time()
            expired_keys = [
                key for key, (_, timestamp) in cache.items()
                if current_time - timestamp > timeout
            ]
            for key in expired_keys:
                del cache[key]
        
        def cached_web_request(url):
            """Simulates caching web request results"""
            current_time = time()
            
            # Clean expired entries periodically
            if self.computation_count % 10 == 0:
                clean_expired_entries()
            
            # Check cache for valid entry
            if url in cache:
                result, timestamp = cache[url]
                if current_time - timestamp <= timeout:
                    self.cache_hits += 1
                    return result
            
            # Simulate web request
            self.computation_count += 1
            self.cache_misses += 1
            result = f"Response from {url}"
            
            # Cache the new result
            cache[url] = (result, current_time)
            return result
        
        return cached_web_request`,

  exercises: [
    {
      prompt: 'Create a caching decorator that can be applied to any function to memoize its results. Include cache size management and basic statistics tracking.',
      initialCode: `def create_memoization_decorator(max_cache_size=100):
    """
    Create a decorator that caches function results.
    
    Args:
        max_cache_size: Maximum number of results to cache
    
    Returns:
        Decorator function that can be applied to other functions
    """
    # Your code here
    pass`,
      solution: `def create_memoization_decorator(max_cache_size=100):
    """
    Create a decorator that caches function results.
    """
    def decorator(func):
        cache = {}
        stats = {"hits": 0, "misses": 0}
        
        def wrapper(*args, **kwargs):
            # Create a cache key from the arguments
            key = str((args, sorted(kwargs.items())))
            
            # Check cache
            if key in cache:
                stats["hits"] += 1
                return cache[key]
            
            # Compute result if not in cache
            stats["misses"] += 1
            result = func(*args, **kwargs)
            
            # Manage cache size
            if len(cache) >= max_cache_size:
                # Remove oldest entry
                cache.pop(next(iter(cache)))
            
            # Cache new result
            cache[key] = result
            return result
        
        # Add ability to inspect cache statistics
        wrapper.get_stats = lambda: dict(stats)
        wrapper.clear_cache = lambda: cache.clear()
        
        return wrapper
    
    return decorator`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'What is the primary difference between simple memoization and LRU caching?',
      options: [
        'Memoization is faster than LRU caching',
        'LRU caching manages cache size while simple memoization doesn\'t',
        'Memoization works with any data type while LRU doesn\'t',
        'LRU caching only works with numbers',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Speed depends on the specific use case.',
        'Correct! LRU caching includes logic to remove least recently used items when the cache is full, while simple memoization keeps all results.',
        'Incorrect. Both can work with any hashable data types.',
        'Incorrect. LRU caching can work with any cacheable data type.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'When should you NOT use caching?',
      options: [
        'When memory usage is a concern',
        'When the computation is very fast',
        'When working with large datasets',
        'All of the above',
      ],
      correctAnswer: 3,
      explanations: [
        'Partially correct, but not the only case.',
        'Partially correct, but not the only case.',
        'Partially correct, but not the only case.',
        'Correct! Caching might not be beneficial in any of these situations due to memory overhead, minimal performance gain, or excessive memory usage.',
      ],
      difficulty: Difficulty.Advanced,
    }
  ]
};

const nestedDictData = {
  title: 'Nested Dictionaries',
  content: `<p>
Imagine you're organizing a vast library. A simple dictionary might help you catalog books by their titles, but what if you want to store more detailed information? Each book has an author, publication year, genre, and perhaps reader reviews. This is where nested dictionaries come in – they're like having a catalog card that contains multiple sections, each with its own organized information.
</p>

<h3><u>Understanding Nested Dictionaries</u></h3>

<p>
A nested dictionary is a dictionary where some (or all) of the values are themselves dictionaries. Think of it as a tree structure, where each branch can lead to more branches, allowing us to represent complex, hierarchical data relationships. This structure is particularly powerful because it lets us organize data in a way that mirrors real-world relationships.
</p>

<p>
Let's explore how nested dictionaries help us model complex data:
</p>

<p>1. Data Organization:</p>
Consider a school management system. We might have:
<li>Students within classes</li>
<li>Classes within grades</li>
<li>Grades within schools</li>
Each level adds context and relationship information that would be difficult to represent in a flat structure.

<p>2. Data Access Patterns:</p>
When working with nested dictionaries, we navigate through levels, like following a map:
<li>Each key access takes us one level deeper</li>
<li>We can navigate multiple levels using chained access</li>
<li>We need to handle cases where paths might not exist</li>

<p>3. Data Modification:</p>
Updating nested dictionaries requires careful consideration:
<li>Ensuring all necessary levels exist before making changes</li>
<li>Maintaining data consistency across levels</li>
<li>Handling updates that affect multiple levels</li>

<h3><u>Common Challenges and Best Practices</u></h3>

<p>
Working with nested dictionaries presents unique challenges:
</p>

<p>1. Deep Access Safety:</p>
<li>Safely accessing deeply nested values without raising KeyErrors</li>
<li>Providing default values for missing paths</li>
<li>Validating data structure integrity</li>

<p>2. Structure Modification:</p>
<li>Adding new nested levels safely</li>
<li>Updating nested values consistently</li>
<li>Removing nested elements while maintaining structure</li>

<p>3. Data Manipulation:</p>
<li>Merging nested structures</li>
<li>Flattening nested dictionaries when needed</li>
<li>Converting between nested and flat structures</li>`,

  codeExample: `# Comprehensive demonstration of nested dictionary operations

class NestedDictDemo:
    def __init__(self):
        # Sample nested dictionary: School management system
        self.school_data = {
            "High School": {
                "Grade 9": {
                    "Math": {
                        "teacher": "Mr. Smith",
                        "students": {
                            "Alice": {"grades": [85, 92, 88], "attendance": 0.95},
                            "Bob": {"grades": [78, 85, 82], "attendance": 0.88}
                        }
                    },
                    "Science": {
                        "teacher": "Ms. Johnson",
                        "students": {
                            "Alice": {"grades": [90, 88, 92], "attendance": 0.92},
                            "Charlie": {"grades": [92, 95, 88], "attendance": 0.97}
                        }
                    }
                }
            }
        }
    
    def safe_get_nested(self, dictionary, *keys, default=None):
        """
        Safely access nested dictionary values.
        Returns default if path doesn't exist.
        
        This is like following a trail of breadcrumbs - if any crumb
        is missing, we return our default value instead of getting lost.
        """
        result = dictionary
        for key in keys:
            try:
                result = result[key]
            except (KeyError, TypeError):
                return default
        return result
    
    def safe_set_nested(self, dictionary, *keys_and_value):
        """
        Safely set a value in a nested dictionary.
        Creates intermediate dictionaries as needed.
        
        This is like creating a new branch in our tree,
        making sure all the necessary supports are in place.
        """
        if len(keys_and_value) < 2:
            return dictionary
        
        keys = keys_and_value[:-1]
        value = keys_and_value[-1]
        
        current = dictionary
        for key in keys[:-1]:
            current = current.setdefault(key, {})
        
        current[keys[-1]] = value
        return dictionary
    
    def merge_nested_dicts(self, dict1, dict2):
        """
        Recursively merge two nested dictionaries.
        Values from dict2 override dict1 if there are conflicts.
        
        This is like carefully combining two filing systems,
        making sure we keep the most up-to-date information.
        """
        merged = dict1.copy()
        
        for key, value in dict2.items():
            if (
                key in merged and 
                isinstance(merged[key], dict) and 
                isinstance(value, dict)
            ):
                merged[key] = self.merge_nested_dicts(merged[key], value)
            else:
                merged[key] = value
        
        return merged
    
    def flatten_dictionary(self, nested_dict, parent_key='', separator='.'):
        """
        Convert a nested dictionary to a flat dictionary with
        compound keys representing the path.
        
        This is useful when we need to simplify our complex
        structure for storage or transmission.
        """
        items = []
        for key, value in nested_dict.items():
            new_key = f"{parent_key}{separator}{key}" if parent_key else key
            
            if isinstance(value, dict):
                items.extend(
                    self.flatten_dictionary(value, new_key, separator).items()
                )
            else:
                items.append((new_key, value))
        
        return dict(items)
    
    def get_student_summary(self, grade, subject, student):
        """
        Demonstrates practical nested dictionary access.
        Returns a summary of a student's performance.
        """
        student_data = self.safe_get_nested(
            self.school_data,
            "High School",
            grade,
            subject,
            "students",
            student
        )
        
        if not student_data:
            return f"No data found for {student} in {subject}, {grade}"
        
        grades = student_data.get("grades", [])
        attendance = student_data.get("attendance", 0)
        
        return {
            "average_grade": sum(grades) / len(grades) if grades else 0,
            "attendance_rate": attendance * 100,
            "passing": all(grade >= 70 for grade in grades) if grades else False
        }
    
    def update_student_grade(self, grade, subject, student, new_grade):
        """
        Demonstrates safe nested dictionary updates.
        Adds a new grade while maintaining structure.
        """
        path = [
            "High School",
            grade,
            subject,
            "students",
            student,
            "grades"
        ]
        
        # First ensure the path exists and get current grades
        current_grades = self.safe_get_nested(
            self.school_data,
            *path,
            default=[]
        )
        
        if isinstance(current_grades, list):
            current_grades = current_grades + [new_grade]
        else:
            current_grades = [new_grade]
        
        # Update with new grades
        self.safe_set_nested(
            self.school_data,
            *path,
            current_grades
        )`,

  exercises: [
    {
      prompt: 'Create a function that finds all students who have grades above 90 in any subject, organizing the results by grade level and subject.',
      initialCode: `def find_top_students(school_data):
    """
    Find students with excellent performance across subjects.
    
    Args:
        school_data: Nested dictionary of school data
        
    Returns:
        Dictionary organized by grade and subject with top students
    """
    # Your code here
    pass`,
      solution: `def find_top_students(school_data):
    """
    Find students with excellent performance across subjects.
    """
    top_students = {}
    
    for grade_name, grade_data in school_data.get("High School", {}).items():
        for subject_name, subject_data in grade_data.items():
            students = subject_data.get("students", {})
            
            # Find students with high grades
            excellent_students = {
                student: data
                for student, data in students.items()
                if any(grade > 90 for grade in data.get("grades", []))
            }
            
            if excellent_students:
                if grade_name not in top_students:
                    top_students[grade_name] = {}
                top_students[grade_name][subject_name] = excellent_students
    
    return top_students`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'What is the safest way to access a value in a deeply nested dictionary?',
      options: [
        'Use multiple square brackets in sequence',
        'Use a try-except block',
        'Use the get() method with a default value',
        'Use a dedicated safe access function with default return value',
      ],
      correctAnswer: 3,
      explanations: [
        'Incorrect. Multiple square brackets will raise KeyError if any level is missing.',
        'Incorrect. While this works, it\'s not the most elegant or maintainable solution.',
        'Incorrect. get() only works for one level of nesting.',
        'Correct! A dedicated function can handle multiple levels and provide a default value safely.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'When modifying nested dictionaries, why is it important to verify the existence of intermediate levels?',
      options: [
        'To save memory',
        'To prevent KeyError exceptions',
        'To improve performance',
        'To maintain backwards compatibility',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Memory usage is not the primary concern.',
        'Correct! Attempting to access non-existent intermediate levels will raise KeyError.',
        'Incorrect. Performance impact is minimal.',
        'Incorrect. Backwards compatibility is not the main issue.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const defaultDictData = {
  title: 'DefaultDict: Automatic Default Values',
  content: `<p>
Have you ever found yourself repeatedly checking if a key exists in a dictionary before using it? Imagine if your dictionary could automatically create default values for new keys, just like a helpful assistant who sets up new folders whenever you need them. This is exactly what defaultdict does - it's a special dictionary that handles missing keys gracefully by creating default values on the fly.
</p>

<p>
Let's explore how defaultdict transforms the way we work with dictionaries, making our code both cleaner and more efficient.
</p>

<h3><u>Understanding DefaultDict</u></h3>

<p>
To truly understand defaultdict, let's first look at a common scenario. Suppose you're counting words in a text. With a regular dictionary, you might write:
</p>

<pre>
word_counts = {}
for word in text.split():
    if word not in word_counts:
        word_counts[word] = 0
    word_counts[word] += 1
</pre>

<p>
This pattern appears so often that Python's collections module provides defaultdict to handle it elegantly:
</p>

<pre>
word_counts = defaultdict(int)
for word in text.split():
    word_counts[word] += 1
</pre>

<p>
The magic happens because defaultdict calls its factory function (int in this case) whenever a new key is accessed. Understanding this behavior unlocks powerful programming patterns.
</p>

<h3><u>Common Factory Functions</u></h3>

<p>
DefaultDict becomes even more powerful when you understand its various factory functions:
</p>

<p>1. Built-in Types as Factories:</p>
<li>int(): Creates a counter starting at 0</li>
<li>list(): Creates an empty list for collecting items</li>
<li>str(): Creates an empty string</li>
<li>set(): Creates an empty set for unique items</li>

<p>2. Custom Factory Functions:</p>
<li>lambda functions for specific default values</li>
<li>Regular functions for complex initialization</li>
<li>Class constructors for object creation</li>

<h3><u>When to Use DefaultDict</u></h3>

<p>DefaultDict shines in several common scenarios:</p>

<p>1. Counting and Accumulation:</p>
<li>Counting occurrences of items</li>
<li>Accumulating values by category</li>
<li>Building frequency distributions</li>

<p>2. Grouping and Categorization:</p>
<li>Creating collections of related items</li>
<li>Building indexes or reverse lookups</li>
<li>Organizing data by attributes</li>

<p>3. Graph and Tree Structures:</p>
<li>Representing adjacency lists</li>
<li>Building hierarchical data structures</li>
<li>Managing parent-child relationships</li>`,

  codeExample: `# Comprehensive demonstration of defaultdict usage and patterns

from collections import defaultdict

class DefaultDictDemo:
    def __init__(self):
        self.text_sample = "the quick brown fox jumps over the lazy dog"
        self.records = [
            ("Math", "Alice", 95),
            ("Math", "Bob", 85),
            ("Science", "Alice", 92),
            ("Science", "Charlie", 88)
        ]
    
    def demonstrate_counting(self):
        """
        Shows how defaultdict simplifies counting operations.
        The magic is in not having to initialize counts.
        """
        # Count word frequencies
        word_counts = defaultdict(int)
        for word in self.text_sample.split():
            word_counts[word] += 1
        
        # Count character frequencies
        char_counts = defaultdict(int)
        for char in self.text_sample:
            if char.isalpha():
                char_counts[char] += 1
        
        return word_counts, char_counts
    
    def demonstrate_grouping(self):
        """
        Shows how defaultdict excels at organizing related items.
        Each key automatically gets an empty list ready for items.
        """
        # Group students by subject
        subject_students = defaultdict(list)
        for subject, student, grade in self.records:
            subject_students[subject].append(student)
        
        # Group grades by student
        student_grades = defaultdict(list)
        for subject, student, grade in self.records:
            student_grades[student].append(grade)
        
        # Calculate student averages
        student_averages = defaultdict(float)
        for student, grades in student_grades.items():
            student_averages[student] = sum(grades) / len(grades)
        
        return subject_students, student_grades, student_averages
    
    def demonstrate_nested_defaultdict(self):
        """
        Shows how to create nested defaultdict structures.
        This builds a tree-like structure automatically.
        """
        # Create a nested defaultdict for subject -> student -> grades
        grade_tree = defaultdict(lambda: defaultdict(list))
        
        for subject, student, grade in self.records:
            grade_tree[subject][student].append(grade)
        
        return grade_tree
    
    def demonstrate_custom_factory(self):
        """
        Shows how to use custom factory functions with defaultdict.
        This gives us complete control over default values.
        """
        # Custom class for student records
        class StudentRecord:
            def __init__(self):
                self.grades = []
                self.attendance = 0
                self.last_activity = None
        
        # Create student records with automatic initialization
        student_records = defaultdict(StudentRecord)
        
        # Add some data
        student_records["Alice"].grades.append(95)
        student_records["Bob"].attendance = 0.95
        
        return student_records
    
    def build_graph(self, edges):
        """
        Shows how defaultdict can represent graph structures.
        Perfect for building adjacency lists.
        """
        # Create graph with automatic empty lists for neighbors
        graph = defaultdict(list)
        
        # Add edges in both directions (undirected graph)
        for start, end in edges:
            graph[start].append(end)
            graph[end].append(start)
        
        return graph
    
    def demonstrate_set_operations(self):
        """
        Shows how defaultdict with set can track unique items.
        Automatically creates empty sets for new categories.
        """
        # Track unique students by subject
        subject_set = defaultdict(set)
        
        for subject, student, _ in self.records:
            subject_set[subject].add(student)
        
        return subject_set`,

  exercises: [
    {
      prompt: 'Create a function that analyzes text and builds a character frequency index grouped by word length, using defaultdict to maintain clean code.',
      initialCode: `def analyze_text_by_length(text):
    """
    Build a character frequency index grouped by word length.
    
    Args:
        text: String to analyze
    
    Returns:
        Dictionary where keys are word lengths and values are
        dictionaries of character frequencies for words of that length
    """
    # Your code here
    pass

# Test with:
sample_text = "the quick brown fox jumps over the lazy dog"`,
      solution: `def analyze_text_by_length(text):
    """
    Build a character frequency index grouped by word length.
    """
    # Create nested defaultdict structure
    from collections import defaultdict
    length_char_freq = defaultdict(lambda: defaultdict(int))
    
    # Process each word
    for word in text.lower().split():
        # For each character in the word, increment its count
        # for this word length
        for char in word:
            if char.isalpha():
                length_char_freq[len(word)][char] += 1
    
    return length_char_freq`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'What happens when you access a new key in a defaultdict(list)?',
      options: [
        'Raises a KeyError',
        'Returns None',
        'Creates and returns an empty list',
        'Creates an empty list and adds it to the dictionary',
      ],
      correctAnswer: 3,
      explanations: [
        'Incorrect. defaultdict specifically prevents KeyError for new keys.',
        'Incorrect. defaultdict will create a new value using the factory function.',
        'Partially correct, but misses that the list is stored in the dictionary.',
        'Correct! The factory function (list) is called, its result is stored for the key, and then returned.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'When should you NOT use defaultdict?',
      options: [
        'When you need to handle missing keys differently based on context',
        'When working with large datasets',
        'When using nested dictionaries',
        'When counting occurrences',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct! defaultdict uses the same factory function for all missing keys, so it\'s not suitable when you need context-specific handling.',
        'Incorrect. defaultdict works well with datasets of any size.',
        'Incorrect. defaultdict works great with nested structures.',
        'Incorrect. Counting is one of the best use cases for defaultdict.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const counterClassData = {
  title: 'Counter: Efficient Collection Counting',
  content: `<p>
Imagine you're a scientist studying the distribution of colored marbles in a large jar. You could count each color one by one, keeping track on a piece of paper, or you could use a specialized counting machine that automatically sorts and counts each color. Python's Counter class is like that specialized machine – it's a tool designed specifically for counting collections of items efficiently and providing useful insights about their frequencies.
</p>

<p>
The Counter class, part of Python's collections module, is a specialized dictionary subclass that's optimized for keeping track of counts. It takes a sequence of items and creates a dictionary-like object where keys are the items and values are their counts. But it's much more than just a counting tool – it provides powerful methods for analyzing and manipulating count data.
</p>

<h3><u>Understanding Counter Objects</u></h3>

<p>
When we create a Counter object, several interesting things happen:
</p>

<p>1. Automatic Counting</p>
Counter automatically tallies occurrences, similar to how you might count items in your head, but without the mental effort. It accepts:
<li>Sequences like lists or strings</li>
<li>Dictionary-like objects</li>
<li>Keyword arguments</li>

<p>2. Dictionary Behavior</p>
Since Counter inherits from dict, it behaves like a dictionary but with extra features:
<li>Access counts using square bracket notation</li>
<li>Missing items return 0 instead of raising KeyError</li>
<li>Support for all standard dictionary operations</li>

<p>3. Special Operations</p>
Counter provides specialized methods that regular dictionaries don't have:
<li>most_common() for finding frequent items</li>
<li>elements() for repeating items based on counts</li>
<li>Mathematical operations like addition and subtraction</li>

<h3><u>Practical Applications</u></h3>

<p>Counter is particularly useful in several scenarios:</p>

<p>1. Text Analysis</p>
<li>Word frequency counting</li>
<li>Character distribution analysis</li>
<li>Finding most common phrases</li>

<p>2. Data Processing</p>
<li>Analyzing categorical data</li>
<li>Finding mode and frequency distributions</li>
<li>Comparing sample distributions</li>

<p>3. Error Analysis</p>
<li>Tracking error types</li>
<li>Analyzing log file patterns</li>
<li>Monitoring system events</li>

<h3><u>Advanced Features</u></h3>

<p>
Counter objects support arithmetic operations that make complex counting tasks simple:
</p>

<p>1. Mathematical Operations</p>
The ability to add, subtract, and perform set operations on counters makes them powerful for:
<li>Combining counts from multiple sources</li>
<li>Finding differences between distributions</li>
<li>Updating counts in batches</li>

<p>2. Advanced Methods</p>
Special methods enable sophisticated analysis:
<li>Finding n most common elements</li>
<li>Filtering and transforming counts</li>
<li>Converting between different formats</li>`,

  codeExample: `# Comprehensive demonstration of Counter class capabilities

from collections import Counter

class CounterDemo:
    def __init__(self):
        self.text_sample = "the quick brown fox jumps over the lazy dog"
        self.number_sequence = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
        self.survey_responses = [
            "coffee", "tea", "coffee", "water", "tea",
            "coffee", "soda", "water", "coffee"
        ]
    
    def demonstrate_basic_counting(self):
        """
        Shows how Counter efficiently counts items in different types of sequences.
        This is the foundation for understanding more complex operations.
        """
        # Count characters in text
        char_counts = Counter(self.text_sample)
        print("Character frequencies:", char_counts)
        
        # Count words in text
        word_counts = Counter(self.text_sample.split())
        print("Word frequencies:", word_counts)
        
        # Count numbers in sequence
        number_counts = Counter(self.number_sequence)
        print("Number frequencies:", number_counts)
        
        # Notice how Counter automatically handles all the counting
        # that we'd otherwise have to do manually
        return char_counts, word_counts, number_counts
    
    def analyze_distributions(self):
        """
        Shows how to extract useful information from Counter objects.
        These methods help us understand the structure of our data.
        """
        responses = Counter(self.survey_responses)
        
        # Find the most common items
        most_common = responses.most_common(2)
        print("Top 2 preferred drinks:", most_common)
        
        # Get count of a specific item
        coffee_count = responses["coffee"]
        print("Coffee preferences:", coffee_count)
        
        # Get count of non-existent item (returns 0, no KeyError)
        juice_count = responses["juice"]
        print("Juice preferences:", juice_count)
        
        # Convert counts back to a list of elements
        all_responses = list(responses.elements())
        print("Expanded responses:", all_responses)
        
        return responses
    
    def demonstrate_math_operations(self):
        """
        Shows how Counter objects can be combined mathematically.
        This is powerful for comparing and combining datasets.
        """
        # Create two sample datasets
        morning_drinks = Counter(["coffee", "coffee", "tea", "water"])
        afternoon_drinks = Counter(["tea", "tea", "water", "soda"])
        
        # Addition: Combine counts
        total_drinks = morning_drinks + afternoon_drinks
        print("Total drinks:", total_drinks)
        
        # Subtraction: Find the difference
        drink_difference = morning_drinks - afternoon_drinks
        print("Morning surplus:", drink_difference)
        
        # Intersection: Find minimum counts
        common_drinks = morning_drinks & afternoon_drinks
        print("Common pattern:", common_drinks)
        
        # Union: Find maximum counts
        all_patterns = morning_drinks | afternoon_drinks
        print("Combined pattern:", all_patterns)
        
        return morning_drinks, afternoon_drinks, total_drinks
    
    def analyze_text_patterns(self):
        """
        Shows practical application for text analysis.
        Demonstrates how Counter helps find patterns in text.
        """
        # Create word pairs (bigrams) from text
        words = self.text_sample.split()
        bigrams = [f"{words[i]} {words[i+1]}" 
                  for i in range(len(words)-1)]
        bigram_counts = Counter(bigrams)
        
        # Find most common word pairs
        common_pairs = bigram_counts.most_common()
        
        # Analyze word lengths
        word_lengths = Counter(len(word) for word in words)
        
        # Find character distribution
        char_distribution = Counter(
            char.lower() for char in self.text_sample 
            if char.isalpha()
        )
        
        return bigram_counts, word_lengths, char_distribution
    
    def demonstrate_advanced_usage(self):
        """
        Shows more sophisticated applications of Counter.
        These patterns are useful for real-world data analysis.
        """
        # Create a Counter with a custom dictionary
        grades = Counter({
            'A': 10,
            'B': 15,
            'C': 20,
            'D': 5
        })
        
        # Update counts in various ways
        grades.update(['A', 'A', 'B'])  # Add individual elements
        grades.update({'B': 2, 'C': 3})  # Update from dictionary
        
        # Remove elements with zero or negative counts
        positive_grades = +grades  # Keeps only positive counts
        
        # Calculate total students
        total_students = sum(grades.values())
        
        # Calculate grade distribution percentages
        grade_distribution = {
            grade: (count / total_students) * 100
            for grade, count in grades.items()
        }
        
        return grades, grade_distribution`,

  exercises: [
    {
      prompt: 'Create a function that analyzes the similarity between two texts by comparing their word frequency distributions using Counter.',
      initialCode: `def calculate_text_similarity(text1, text2):
    """
    Compare two texts by analyzing their word frequencies.
    
    Args:
        text1, text2: Strings to compare
        
    Returns:
        Dictionary containing similarity metrics
    """
    # Your code here
    pass

# Test with:
text1 = "the quick brown fox jumps over the lazy dog"
text2 = "the quick brown dog sleeps over the lazy fox"`,
      solution: `def calculate_text_similarity(text1, text2):
    """
    Compare two texts by analyzing their word frequencies.
    """
    from collections import Counter
    
    # Create word frequency counters
    words1 = Counter(text1.lower().split())
    words2 = Counter(text2.lower().split())
    
    # Calculate various similarity metrics
    common_words = words1 & words2
    all_words = words1 | words2
    unique_to_first = words1 - words2
    unique_to_second = words2 - words1
    
    # Calculate similarity scores
    return {
        "common_words": dict(common_words),
        "words_in_both": len(common_words),
        "unique_to_first": dict(unique_to_first),
        "unique_to_second": dict(unique_to_second),
        "similarity_score": sum(common_words.values()) / sum(all_words.values())
    }`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'What is the key advantage of using Counter over a regular dictionary for counting items?',
      options: [
        'It uses less memory',
        'It automatically handles missing keys by returning 0',
        'It counts items faster',
        'It can only store numbers',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Counter typically uses similar memory to a regular dictionary.',
        'Correct! Counter returns 0 for missing keys instead of raising KeyError, making it safer and more convenient for counting.',
        'Incorrect. The counting speed is similar to using a regular dictionary.',
        'Incorrect. Counter can store any hashable items as keys.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What happens when you subtract one Counter from another?',
      options: [
        'All common elements are removed',
        'Only positive counts are kept in the result',
        'A KeyError is raised for missing elements',
        'The second Counter is emptied',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Subtraction affects the counts, not presence of elements.',
        'Correct! After subtraction, only elements with positive counts remain in the result.',
        'Incorrect. Counter subtraction safely handles missing elements.',
        'Incorrect. The original Counters remain unchanged.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

// TODO: Determine if needed
const orderedDictData: LessonContent = {
  title: 'OrderedDict',
  content: `<p>
The <code>OrderedDict</code> class from the <code>collections</code> module in Python is a subclass of the built-in <code>dict</code> class. 
It maintains the order of keys as they are inserted, which can be useful in scenarios where the order of insertion is important. 
Here's how you can use <code>OrderedDict</code>:
</p>

<ul>
<li><strong>Creating an OrderedDict:</strong> You can create an OrderedDict just like a regular dictionary.</li>
<li><strong>Maintaining Order:</strong> OrderedDict maintains the order of keys as they are inserted.</li>
<li><strong>Reordering Elements:</strong> You can move elements to the front or back of the OrderedDict.</li>
<li><strong>Common use cases:</strong> OrderedDict is often used in scenarios where the order of keys is important, such as maintaining a history of operations or preserving the order of elements in a configuration file.</li>
</ul>`,
  codeExample: `from collections import OrderedDict

# Creating an OrderedDict
ordered_dict = OrderedDict()

# Inserting elements
ordered_dict['a'] = 1
ordered_dict['b'] = 2
ordered_dict['c'] = 3

print(ordered_dict)  # Output: OrderedDict([('a', 1), ('b', 2), ('c', 3)])

# Maintaining order
ordered_dict['d'] = 4
print(ordered_dict)  # Output: OrderedDict([('a', 1), ('b', 2), ('c', 3), ('d', 4)])

# Reordering elements
ordered_dict.move_to_end('a')
print(ordered_dict)  # Output: OrderedDict([('b', 2), ('c', 3), ('d', 4), ('a', 1)])

# Removing elements
ordered_dict.popitem(last=False)
print(ordered_dict)  # Output: OrderedDict([('c', 3), ('d', 4), ('a', 1)])`,
  exercises: [
    {
      prompt: 'Create an OrderedDict to store the order of operations performed on a system, with each operation being a key-value pair.',
      initialCode: `# Write your solution here
from collections import OrderedDict

operations = OrderedDict()

# Add operations
operations['operation1'] = 'start'
operations['operation2'] = 'stop'
operations['operation3'] = 'restart'

# Move operation1 to the end
`,
      solution: `from collections import OrderedDict

operations = OrderedDict()

# Add operations
operations['operation1'] = 'start'
operations['operation2'] = 'stop'
operations['operation3'] = 'restart'

# Move operation1 to the end
operations.move_to_end('operation1')

print(operations)`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Create an OrderedDict to store the order of items added to a shopping cart, with each item being a key-value pair.',
      initialCode: `# Write your solution here
from collections import OrderedDict

shopping_cart = OrderedDict()

# Add items
shopping_cart['item1'] = 'apple'
shopping_cart['item2'] = 'banana'
shopping_cart['item3'] = 'cherry'

# Remove the first item
`,
      solution: `from collections import OrderedDict

shopping_cart = OrderedDict()

# Add items
shopping_cart['item1'] = 'apple'
shopping_cart['item2'] = 'banana'
shopping_cart['item3'] = 'cherry'

# Remove the first item
shopping_cart.popitem(last=False)

print(shopping_cart)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What does OrderedDict maintain in Python?',
      options: [
        'The order of values',
        'The order of keys',
        'The order of key-value pairs',
        'The order of dictionary size',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. OrderedDict maintains the order of keys, not values.',
        'This is correct. OrderedDict maintains the order of keys as they are inserted.',
        'This is incorrect. OrderedDict maintains the order of keys, not key-value pairs.',
        'This is incorrect. OrderedDict does not maintain the order of dictionary size.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'How do you move an element to the end of an OrderedDict?',
      options: [
        'move_to_end(key)',
        'move_to_front(key)',
        'move_to_back(key)',
        'move_to_last(key)',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The method move_to_end(key) moves the specified key to the end of the OrderedDict.',
        'This is incorrect. There is no move_to_front method in OrderedDict.',
        'This is incorrect. There is no move_to_back method in OrderedDict.',
        'This is incorrect. There is no move_to_last method in OrderedDict.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const hashFunctionData = {
  title: 'Hash Functions: The Foundation of Dictionary Performance',
  content: `<p>
Imagine you're a librarian organizing a vast collection of books. Instead of searching through every shelf to find a book, you use a clever system: each book's location is determined by some property of its title - perhaps converting the first few letters into a shelf number. This is exactly how hash functions work in programming - they convert data into a numerical value that can be used to determine where to store and find that data quickly.
</p>

<p>
Let's explore how hash functions work and why they're crucial for dictionary performance. We'll start with the basic concepts and build up to understanding their practical applications and limitations.
</p>

<h3><u>Understanding Hash Functions</u></h3>

<p>
A hash function is like a special recipe that converts any piece of data into a number. Just as our librarian might convert "Harry Potter" into shelf number 42, a hash function converts data into a numerical value. This process has several important characteristics:
</p>

<p>1. Deterministic Behavior</p>
Like a reliable recipe, a hash function must always produce the same output for the same input. When you hash "hello" once, twice, or a million times, you should get the same number every time. This consistency is crucial for finding stored data later.

<p>2. Distribution Properties</p>
A good hash function spreads its outputs evenly across the available space, just as a library would want to use all its shelves efficiently. This helps prevent "clustering" where too many items end up in the same location.

<p>3. Collision Handling</p>
Sometimes different inputs produce the same output (like two books needing the same shelf). These "collisions" are inevitable, but good hash functions minimize them and dictionaries have strategies to handle them gracefully.

<h3><u>Hash Functions in Python</u></h3>

<p>
Python uses hash functions extensively in dictionaries and sets. The built-in hash() function gives us a glimpse into how Python converts different types of data into numbers:
</p>

<p>1. Requirements for Hashable Types</p>
Not everything can be hashed. To be hashable, an object must:
<li>Be immutable (unchangeable)</li>
<li>Have a consistent __hash__() method</li>
<li>Have a working __eq__() method</li>

<p>2. Built-in Hashable Types</p>
Python provides many built-in hashable types:
<li>Numbers (int, float)</li>
<li>Strings</li>
<li>Tuples (if their elements are hashable)</li>
<li>Frozen sets</li>

<p>3. Common Patterns and Pitfalls</p>
Understanding hash functions helps us:
<li>Design better data structures</li>
<li>Avoid common performance issues</li>
<li>Create hashable custom classes correctly</li>`,

  codeExample: `# Comprehensive demonstration of hash functions and their properties

class HashingDemo:
    def __init__(self):
        self.example_data = {
            "strings": ["hello", "world", "python"],
            "numbers": [42, 3.14, -17],
            "tuples": [(1, 2), ("a", "b"), (1, "x")],
            "mixed": ["hello", 42, (1, 2)]
        }
    
    def demonstrate_basic_hashing(self):
        """
        Shows how different types of data are hashed in Python.
        This helps understand the fundamental behavior of hash functions.
        """
        print("Basic Hash Examples:")
        
        # Hashing strings
        print("\nString Hashing:")
        for s in self.example_data["strings"]:
            print(f"hash('{s}') = {hash(s)}")
        
        # Hashing numbers
        print("\nNumber Hashing:")
        for n in self.example_data["numbers"]:
            print(f"hash({n}) = {hash(n)}")
        
        # Hashing tuples
        print("\nTuple Hashing:")
        for t in self.example_data["tuples"]:
            print(f"hash({t}) = {hash(t)}")
    
    def demonstrate_hash_properties(self):
        """
        Illustrates important properties of hash functions,
        including consistency and distribution.
        """
        # Demonstrate consistency
        test_value = "python"
        hashes = [hash(test_value) for _ in range(5)]
        print(f"\nConsistency Check for '{test_value}':")
        print("All hashes equal:", all(h == hashes[0] for h in hashes))
        
        # Demonstrate distribution
        words = ["apple", "banana", "cherry", "date", "elderberry"]
        hash_values = [hash(word) for word in words]
        print("\nDistribution of hash values:")
        for word, h in zip(words, hash_values):
            print(f"{word}: {h}")
    
    def demonstrate_custom_hashable(self):
        """
        Shows how to create custom hashable classes.
        This is important for using custom objects as dictionary keys.
        """
        class Point:
            def __init__(self, x, y):
                self._x = x
                self._y = y
            
            def __eq__(self, other):
                if not isinstance(other, Point):
                    return NotImplemented
                return self._x == other._x and self._y == other._y
            
            def __hash__(self):
                # Combine hashes of components
                return hash((self._x, self._y))
        
        # Create some points
        p1 = Point(1, 2)
        p2 = Point(1, 2)
        p3 = Point(2, 1)
        
        print("\nCustom Hashable Class Demo:")
        print(f"hash(p1) = {hash(p1)}")
        print(f"hash(p2) = {hash(p2)}")
        print(f"p1 == p2:", p1 == p2)
        print(f"hash(p3) = {hash(p3)}")
        
        # Demonstrate use as dictionary key
        point_data = {p1: "first point"}
        print("Dictionary lookup:", point_data[p2])  # Works because p1 == p2
    
    def demonstrate_collision_handling(self):
        """
        Shows how Python handles hash collisions internally.
        This helps understand dictionary performance characteristics.
        """
        # Create a simple string hash function that will definitely have collisions
        def simple_hash(s, table_size=10):
            """A deliberately simple hash function for demonstration"""
            return sum(ord(c) for c in s) % table_size
        
        # Demonstrate collisions
        words = ["cat", "dog", "rat", "bat", "hat"]
        hash_values = {word: simple_hash(word) for word in words}
        
        print("\nSimple Hash Function Collisions:")
        for word, h in hash_values.items():
            print(f"{word}: {h}")
        
        # Show how collisions affect real dictionaries
        test_dict = {}
        for word in words:
            test_dict[word] = simple_hash(word)
        
        print("\nDictionary still works despite collisions:")
        for word in words:
            print(f"{word}: {test_dict[word]}")
    
    def demonstrate_performance_implications(self):
        """
        Shows how hash function quality affects dictionary performance.
        This helps understand why good hash functions matter.
        """
        import time
        
        # Create dictionaries of different sizes
        sizes = [1000, 10000, 100000]
        
        for size in sizes:
            # Create dictionary with good distribution
            good_dict = {str(i): i for i in range(size)}
            
            # Measure lookup time
            start = time.time()
            for i in range(1000):
                _ = good_dict[str(i % size)]
            good_time = time.time() - start
            
            print(f"\nDictionary size {size}:")
            print(f"Average lookup time: {good_time/1000:.8f} seconds")`,

  exercises: [
    {
      prompt: 'Create a custom class representing a playing card that can be used as a dictionary key. The hash value should consider both the rank and suit of the card.',
      initialCode: `class PlayingCard:
    """
    A hashable playing card class.
    Should support being used as a dictionary key.
    
    Example usage:
    card1 = PlayingCard("Ace", "Spades")
    card2 = PlayingCard("Ace", "Spades")
    assert card1 == card2
    assert hash(card1) == hash(card2)
    """
    def __init__(self, rank, suit):
        # Your code here
        pass`,
      solution: `class PlayingCard:
    """A hashable playing card class."""
    
    def __init__(self, rank, suit):
        # Store immutable state
        self._rank = rank
        self._suit = suit
    
    def __eq__(self, other):
        if not isinstance(other, PlayingCard):
            return NotImplemented
        return self._rank == other._rank and self._suit == other._suit
    
    def __hash__(self):
        # Combine the hashes of rank and suit
        # Using tuple ensures consistent hashing
        return hash((self._rank, self._suit))
    
    def __str__(self):
        return f"{self._rank} of {self._suit}"`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'Why must dictionary keys be immutable in Python?',
      options: [
        'To save memory',
        'Because hash values must remain constant',
        'To improve performance',
        'Because Python requires it arbitrarily',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Immutability isn\'t primarily about memory usage.',
        'Correct! If an object changes, its hash value would change, making it impossible to find it in the dictionary later.',
        'Incorrect. While immutability can help with performance, this isn\'t the main reason.',
        'Incorrect. The requirement is based on the fundamental need for consistent hash values.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What makes a hash function "good" for use in dictionaries?',
      options: [
        'It produces small numbers',
        'It never has collisions',
        'It distributes values evenly across the available space',
        'It produces unique values for all inputs',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. The size of the hash values isn\'t the primary concern.',
        'Incorrect. All practical hash functions will have some collisions.',
        'Correct! Even distribution minimizes collisions and ensures efficient dictionary operations.',
        'Incorrect. This is impossible for a finite hash space with infinite possible inputs.',
      ],
      difficulty: Difficulty.Advanced,
    }
  ]
};

const collisionHandlingData = {
  title: 'Collision Resolution: Managing Hash Table Conflicts',
  content: `<p>
Imagine you're a valet managing a parking garage with numbered spots. Sometimes, two cars might be assigned to the same spot by your numbering system. What do you do? This is exactly the challenge of collision resolution in hash tables – finding elegant ways to handle situations where different items hash to the same location.
</p>

<p>
Understanding collision resolution is crucial because collisions are inevitable in hash tables. No matter how good our hash function is, when we have more possible items than spaces (which is usually the case), some items will necessarily hash to the same location. Let's explore the various strategies for handling these collisions effectively.
</p>

<h3><u>Understanding Collisions</u></h3>

<p>
A collision occurs when our hash function assigns the same location to different items. Think of it like a game of musical chairs – what happens when two people try to sit in the same chair? Just as we need rules for that game, we need systematic ways to handle hash collisions.
</p>

<p>
Collisions happen for several reasons:
</p>

<p>1. The Pigeonhole Principle</p>
If we have more items than storage spots, some items must share locations. This is a mathematical certainty, just like having more pigeons than holes means some pigeons must share a hole.

<p>2. Hash Function Limitations</p>
Even with fewer items than spots, our hash function might map different items to the same value, just as a simplistic "first letter" filing system would group "apple" and "apricot" together.

<p>3. Load Factor Impact</p>
As our hash table fills up (increasing its load factor), collisions become more frequent, like finding parking in a nearly full garage.

<h3><u>Collision Resolution Strategies</u></h3>

<p>1. Chaining (Open Hashing)</p>
Think of this like parking spots that can hold multiple cars through a valet service:
<li>Each location maintains a list of items that hash there</li>
<li>New colliding items are added to the appropriate list</li>
<li>Searching requires checking all items in the list</li>

<p>2. Open Addressing (Closed Hashing)</p>
This is like finding the next available parking spot when your assigned spot is taken:
<li>Linear Probing: Check the next spot until finding an empty one</li>
<li>Quadratic Probing: Check spots at quadratically increasing distances</li>
<li>Double Hashing: Use a second hash function to determine the step size</li>

<h3><u>Performance Implications</u></h3>

<p>
Different resolution strategies perform differently under various conditions:
</p>

<p>1. Time Complexity</p>
<li>Best case: O(1) for all methods</li>
<li>Average case: Depends on load factor and strategy</li>
<li>Worst case: Could degrade to O(n) with poor resolution</li>

<p>2. Space Usage</p>
<li>Chaining: Additional space for linked structures</li>
<li>Open Addressing: Uses only the main array but needs lower load factor</li>`,

  codeExample: `# Comprehensive demonstration of collision resolution strategies

class CollisionResolutionDemo:
    def __init__(self):
        self.size = 10  # Small size to demonstrate collisions
    
    def demonstrate_chaining(self):
        """
        Demonstrates chaining (open hashing) collision resolution.
        Each slot contains a list of elements that hash to that location.
        """
        class ChainingHashTable:
            def __init__(self, size):
                self.size = size
                # Initialize empty lists for each slot
                self.table = [[] for _ in range(size)]
            
            def _hash(self, key):
                """Simple hash function for demonstration"""
                if isinstance(key, str):
                    return sum(ord(c) for c in key) % self.size
                return key % self.size
            
            def insert(self, key, value):
                """Insert a key-value pair into the hash table"""
                index = self._hash(key)
                # Search for existing key in the chain
                for i, (k, v) in enumerate(self.table[index]):
                    if k == key:
                        # Update existing value
                        self.table[index][i] = (key, value)
                        return
                # Add new key-value pair to the chain
                self.table[index].append((key, value))
            
            def get(self, key):
                """Retrieve a value from the hash table"""
                index = self._hash(key)
                # Search the chain for our key
                for k, v in self.table[index]:
                    if k == key:
                        return v
                raise KeyError(key)
            
            def __str__(self):
                """Visualize the hash table structure"""
                return "\n".join(
                    f"[{i}] -> {entries}"
                    for i, entries in enumerate(self.table)
                    if entries  # Only show non-empty slots
                )
        
        # Demonstrate usage
        hash_table = ChainingHashTable(self.size)
        
        # Insert some values (including ones that will collide)
        words = ["cat", "dog", "rat", "bat", "hat"]
        for i, word in enumerate(words):
            hash_table.insert(word, i)
            
        print("Chaining Hash Table Structure:")
        print(hash_table)
        
        return hash_table
    
    def demonstrate_linear_probing(self):
        """
        Demonstrates linear probing (open addressing) collision resolution.
        When a collision occurs, we check the next slot until finding an empty one.
        """
        class LinearProbingHashTable:
            def __init__(self, size):
                self.size = size
                self.table = [None] * size
                self.count = 0
            
            def _hash(self, key):
                """Simple hash function for demonstration"""
                if isinstance(key, str):
                    return sum(ord(c) for c in key) % self.size
                return key % self.size
            
            def insert(self, key, value):
                """Insert using linear probing"""
                if self.count >= self.size:
                    raise ValueError("Hash table is full")
                
                index = self._hash(key)
                original_index = index
                
                while True:
                    if self.table[index] is None:
                        # Found an empty slot
                        self.table[index] = (key, value)
                        self.count += 1
                        return
                    elif self.table[index][0] == key:
                        # Update existing key
                        self.table[index] = (key, value)
                        return
                    
                    # Linear probe to next slot
                    index = (index + 1) % self.size
                    if index == original_index:
                        raise ValueError("Hash table is full")
            
            def get(self, key):
                """Retrieve using linear probing"""
                index = self._hash(key)
                original_index = index
                
                while self.table[index] is not None:
                    if self.table[index][0] == key:
                        return self.table[index][1]
                    index = (index + 1) % self.size
                    if index == original_index:
                        break
                        
                raise KeyError(key)
            
            def __str__(self):
                """Visualize the hash table structure"""
                return "\n".join(
                    f"[{i}] -> {entry}"
                    for i, entry in enumerate(self.table)
                    if entry is not None
                )
        
        # Demonstrate usage
        hash_table = LinearProbingHashTable(self.size)
        
        # Insert values that will cause collisions
        try:
            for i, word in enumerate(["cat", "dog", "rat", "bat", "hat"]):
                hash_table.insert(word, i)
                print(f"\nAfter inserting {word}:")
                print(hash_table)
        except ValueError as e:
            print(f"Table full: {e}")
        
        return hash_table`,

  exercises: [
    {
      prompt: 'Implement a hash table using quadratic probing for collision resolution. The quadratic probing should try positions h(k) + i² for i = 0, 1, 2, ... when resolving collisions.',
      initialCode: `class QuadraticProbingHashTable:
    def __init__(self, size):
        self.size = size
        self.table = [None] * size
        self.count = 0
    
    def _hash(self, key):
        # Your hash function here
        pass
    
    def insert(self, key, value):
        # Your quadratic probing implementation here
        pass
    
    def get(self, key):
        # Your quadratic probing search here
        pass`,
      solution: `class QuadraticProbingHashTable:
    def __init__(self, size):
        self.size = size
        self.table = [None] * size
        self.count = 0
    
    def _hash(self, key):
        """Simple hash function"""
        if isinstance(key, str):
            return sum(ord(c) for c in key) % self.size
        return key % self.size
    
    def insert(self, key, value):
        """Insert using quadratic probing"""
        if self.count >= self.size:
            raise ValueError("Hash table is full")
        
        index = self._hash(key)
        original_index = index
        i = 0
        
        while True:
            probe_index = (index + i*i) % self.size
            
            if self.table[probe_index] is None:
                self.table[probe_index] = (key, value)
                self.count += 1
                return
            elif self.table[probe_index][0] == key:
                self.table[probe_index] = (key, value)
                return
            
            i += 1
            if i >= self.size:
                raise ValueError("Could not find empty slot")
    
    def get(self, key):
        """Retrieve using quadratic probing"""
        index = self._hash(key)
        i = 0
        
        while i < self.size:
            probe_index = (index + i*i) % self.size
            
            if self.table[probe_index] is None:
                raise KeyError(key)
            elif self.table[probe_index][0] == key:
                return self.table[probe_index][1]
            
            i += 1
        
        raise KeyError(key)`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'What is the main advantage of chaining over open addressing for collision resolution?',
      options: [
        'It uses less memory',
        'It performs better when the table is nearly full',
        'It has faster insertion time',
        'It requires simpler hash functions',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Chaining typically uses more memory due to the linked structures.',
        'Correct! Chaining continues to perform well at high load factors, while open addressing degrades significantly.',
        'Incorrect. Insertion time depends more on the load factor than the resolution method.',
        'Incorrect. The hash function requirements are similar for both methods.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'Why is linear probing prone to clustering?',
      options: [
        'Because it uses too much memory',
        'Because collisions tend to create consecutive filled slots',
        'Because it requires complex hash functions',
        'Because it only works with certain key types',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Memory usage isn\'t related to clustering.',
        'Correct! When collisions occur, linear probing creates blocks of occupied slots, leading to more collisions in those areas.',
        'Incorrect. Clustering occurs regardless of hash function complexity.',
        'Incorrect. Clustering is independent of key types.',
      ],
      difficulty: Difficulty.Advanced,
    }
  ]
};

const timeSpaceComplexityAnalysisData = {
  title: 'Dictionary Time and Space Complexity: Under the Hood',
  content: `<p>
Imagine you have a huge library with a magical card catalog. Instead of searching through every book to find what you need, you can instantly access any book's location by looking up its title. This is similar to how Python dictionaries work – they use clever internal organization to provide remarkably fast access to data. Let's explore exactly how dictionaries achieve this efficiency and understand the costs involved in different operations.
</p>

<h3><u>Understanding Dictionary Operations</u></h3>

<p>
Before we dive into specific complexities, let's understand what happens inside a dictionary during common operations. Think of a dictionary as a specialized container with two key features: a hash function that determines where items should go, and an array of "buckets" that actually stores the items.
</p>

<p>1. Insertion (dict[key] = value)</p>
When you add a new item to a dictionary, several steps occur:
<li>The key is hashed to determine its location</li>
<li>If there's a collision, it's resolved using chaining</li>
<li>The key-value pair is stored in the appropriate bucket</li>

<p>2. Lookup (dict[key])</p>
Retrieving a value involves:
<li>Hashing the key to find the correct bucket</li>
<li>Searching within the bucket if there are collisions</li>
<li>Returning the associated value or raising KeyError</li>

<p>3. Deletion (del dict[key])</p>
Removing an item requires:
<li>Locating the correct bucket through hashing</li>
<li>Finding and removing the key-value pair</li>
<li>Potentially reorganizing the remaining items</li>

<h3><u>Time Complexity Analysis</u></h3>

<p>
Let's analyze each operation's time complexity, considering both average and worst cases:
</p>

<p>1. Average Case (Most Common)</p>
<li>Insertion: O(1)</li>
<li>Lookup: O(1)</li>
<li>Deletion: O(1)</li>
<li>Membership testing: O(1)</li>

<p>2. Worst Case (When Things Go Wrong)</p>
<li>Insertion: O(n) due to collisions</li>
<li>Lookup: O(n) with poor hash distribution</li>
<li>Deletion: O(n) in pathological cases</li>
<li>Membership testing: O(n) with many collisions</li>

<h3><u>Space Complexity Analysis</u></h3>

<p>
Dictionary space usage involves several components:
</p>

<p>1. Primary Storage</p>
<li>Key-value pairs: O(n) where n is the number of items</li>
<li>Hash table array: O(m) where m is the number of buckets</li>
<li>Usually m > n to maintain performance</li>

<p>2. Additional Overhead</p>
<li>Hash table metadata</li>
<li>Collision resolution structures</li>
<li>Python object overhead</li>

<h3><u>Performance Factors</u></h3>

<p>
Several factors influence dictionary performance:
</p>

<p>1. Load Factor</p>
The ratio of items to buckets affects performance:
<li>Low load factor: Better performance, more memory</li>
<li>High load factor: More collisions, slower operations</li>
<li>Python automatically resizes when needed</li>

<p>2. Hash Function Quality</p>
A good hash function provides:
<li>Even distribution of values</li>
<li>Fast computation</li>
<li>Minimal collisions</li>`,

  codeExample: `# Comprehensive demonstration of dictionary performance characteristics

class DictionaryPerformanceDemo:
    def __init__(self):
        """Initialize performance demonstration"""
        self.small_dict = {}      # For basic operations
        self.collision_dict = {}  # For demonstrating collisions
        self.large_dict = {}      # For scaling demonstrations
    
    def demonstrate_basic_operations(self):
        """
        Shows the performance characteristics of basic dictionary operations.
        We'll time these operations to see their O(1) behavior.
        """
        import time
        
        def measure_operation(operation, iterations=1000000):
            start_time = time.time()
            for i in range(iterations):
                operation()
            end_time = time.time()
            return (end_time - start_time) / iterations
        
        # Measure insertion
        insert_time = measure_operation(
            lambda: self.small_dict.update({len(self.small_dict): True})
        )
        
        # Measure lookup
        lookup_time = measure_operation(
            lambda: self.small_dict.get(0)
        )
        
        # Measure deletion (with recreation)
        def delete_operation():
            self.small_dict[0] = True
            del self.small_dict[0]
            
        delete_time = measure_operation(delete_operation)
        
        return {
            "insert": insert_time,
            "lookup": lookup_time,
            "delete": delete_time
        }
    
    def demonstrate_collision_handling(self):
        """
        Shows how performance degrades with hash collisions.
        We'll create keys that intentionally collide.
        """
        class CollisionKey:
            def __init__(self, value):
                self.value = value
            
            def __hash__(self):
                return 1  # All keys hash to same value
            
            def __eq__(self, other):
                if not isinstance(other, CollisionKey):
                    return NotImplemented
                return self.value == other.value
        
        # Add items with colliding hashes
        import time
        times = []
        
        for i in range(100):
            key = CollisionKey(i)
            
            # Measure insertion time
            start = time.time()
            self.collision_dict[key] = i
            insert_time = time.time() - start
            
            # Measure lookup time
            start = time.time()
            _ = self.collision_dict[key]
            lookup_time = time.time() - start
            
            times.append((i, insert_time, lookup_time))
        
        return times
    
    def demonstrate_scaling(self):
        """
        Shows how dictionary performance scales with size.
        We'll measure operations at different dictionary sizes.
        """
        import random
        sizes = [1000, 10000, 100000]
        results = {}
        
        for size in sizes:
            # Create dictionary of given size
            test_dict = {i: i for i in range(size)}
            
            # Measure random access time
            start = time.time()
            for _ in range(1000):
                _ = test_dict[random.randint(0, size-1)]
            access_time = (time.time() - start) / 1000
            
            results[size] = access_time
        
        return results
    
    def analyze_space_usage(self):
        """
        Demonstrates dictionary space usage characteristics.
        We'll look at memory usage as the dictionary grows.
        """
        import sys
        
        sizes = [0, 100, 1000, 10000]
        memory_usage = {}
        
        for size in sizes:
            # Create dictionary of given size
            d = {i: i for i in range(size)}
            
            # Measure memory usage
            memory_usage[size] = sys.getsizeof(d)
        
        return memory_usage
    
    def demonstrate_load_factor_impact(self):
        """
        Shows how load factor affects performance.
        We'll look at performance with different load factors.
        """
        def create_dict_with_load_factor(size, target_load):
            # Create dictionary with specific load factor
            d = {}
            target_size = int(size / target_load)
            # Force dictionary to have specific size
            d.update({i: None for i in range(target_size)})
            for i in range(target_size):
                del d[i]
            # Now add actual items
            for i in range(size):
                d[i] = i
            return d
        
        load_factors = [0.3, 0.5, 0.8]
        size = 1000
        results = {}
        
        for load in load_factors:
            d = create_dict_with_load_factor(size, load)
            
            # Measure performance
            start = time.time()
            for _ in range(1000):
                _ = d[random.randint(0, size-1)]
            results[load] = (time.time() - start) / 1000
        
        return results`,

  exercises: [
    {
      prompt: 'Create a function that analyzes dictionary performance under different collision scenarios. Compare the performance of a regular dictionary with a dictionary that experiences frequent collisions.',
      initialCode: `def analyze_collision_impact():
    """
    Compare dictionary performance with and without collisions.
    
    Returns:
        Dictionary containing performance metrics
    """
    # Your code here
    pass`,
      solution: `def analyze_collision_impact():
    """
    Compare dictionary performance with and without collisions.
    """
    import time
    
    # Create a class that forces collisions
    class CollisionKey:
        def __init__(self, value):
            self.value = value
        def __hash__(self):
            return 1  # All keys hash to same value
        def __eq__(self, other):
            return isinstance(other, CollisionKey) and self.value == other.value
    
    # Test regular dictionary
    regular_dict = {}
    start = time.time()
    for i in range(1000):
        regular_dict[i] = i
    regular_insert = time.time() - start
    
    # Test dictionary with collisions
    collision_dict = {}
    start = time.time()
    for i in range(1000):
        collision_dict[CollisionKey(i)] = i
    collision_insert = time.time() - start
    
    # Test lookups
    start = time.time()
    for i in range(1000):
        _ = regular_dict[i]
    regular_lookup = time.time() - start
    
    start = time.time()
    for i in range(1000):
        _ = collision_dict[CollisionKey(i)]
    collision_lookup = time.time() - start
    
    return {
        "regular_insert_time": regular_insert,
        "collision_insert_time": collision_insert,
        "regular_lookup_time": regular_lookup,
        "collision_lookup_time": collision_lookup,
        "collision_slowdown_insert": collision_insert / regular_insert,
        "collision_slowdown_lookup": collision_lookup / regular_lookup
    }`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why is dictionary lookup O(1) on average but O(n) in the worst case?',
      options: [
        'Because dictionaries are always slow with large datasets',
        'Because the hash table might need to be resized',
        'Because all items might hash to the same bucket, requiring a linear search',
        'Because Python uses slow hash functions',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Dictionary operations are typically very fast, even with large datasets.',
        'Incorrect. Resizing is amortized and not the cause of worst-case complexity.',
        'Correct! In the worst case, all items could hash to the same bucket, requiring a linear search through all items.',
        'Incorrect. Python\'s hash functions are well-optimized.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What impact does load factor have on dictionary performance?',
      options: [
        'No impact - dictionaries always perform the same',
        'Higher load factors generally lead to better performance',
        'Lower load factors generally lead to better performance',
        'Load factor only affects memory usage',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Load factor significantly affects performance.',
        'Incorrect. Higher load factors typically degrade performance.',
        'Correct! Lower load factors mean fewer collisions and better performance, at the cost of more memory usage.',
        'Incorrect. Load factor affects both performance and memory usage.',
      ],
      difficulty: Difficulty.Advanced,
    }
  ]
};

const twoSumPatternData = {
  title: 'Two Sum Pattern: Finding Pairs with Target Sum',
  content: `<p>
Imagine you're planning a trip and have a specific budget in mind. You look through a list of travel packages, trying to find two packages that add up exactly to your budget. You could compare every possible pair of packages, but that would take a long time. Instead, for each package you look at, you could quickly check if there's another package that would perfectly complement your budget. This is exactly what the Two Sum pattern does – it uses a dictionary to efficiently find pairs of numbers that add up to a target sum.
</p>

<p>
The Two Sum pattern is a classic example of how using a dictionary can transform a seemingly O(n²) problem into an O(n) solution. Let's explore why this pattern is so powerful and how it works in practice.
</p>

<h3><u>Understanding Two Sum</u></h3>

<p>
Let's break down the problem and solution step by step:
</p>

<p>1. The Problem</p>
Given an array of numbers and a target sum, find two numbers in the array that add up to the target. For example:
<li>Array: [2, 7, 11, 15]</li>
<li>Target: 9</li>
<li>Answer: [2, 7] (because 2 + 7 = 9)</li>

<p>2. Naive Approach (O(n²))</p>
The straightforward solution would be:
<li>Check every possible pair of numbers</li>
<li>For each number, scan through all other numbers</li>
<li>Return the first pair that sums to target</li>

<p>3. Optimized Approach (O(n))</p>
Using a dictionary, we can:
<li>For each number, calculate its complement (target - number)</li>
<li>Check if the complement exists in our dictionary</li>
<li>Store each number in the dictionary as we go</li>

<h3><u>Pattern Variations</u></h3>

<p>
The Two Sum pattern can be adapted for various related problems:
</p>

<p>1. Two Sum II (Sorted Array)</p>
When the input array is sorted, we can use:
<li>Two-pointer technique instead of dictionary</li>
<li>Move pointers based on sum comparison</li>
<li>Still O(n) time complexity</li>

<p>2. Two Sum with Multiple Pairs</p>
Finding all pairs that sum to target:
<li>Track multiple indices in dictionary values</li>
<li>Handle duplicate numbers carefully</li>
<li>Consider sorting for easier duplicate handling</li>

<h3><u>Common Pitfalls</u></h3>

<p>
Watch out for these common challenges:
</p>

<p>1. Edge Cases</p>
<li>Empty array or single element</li>
<li>No valid pairs exist</li>
<li>Multiple valid pairs exist</li>

<p>2. Special Numbers</p>
<li>Using same element twice</li>
<li>Handling zero values</li>
<li>Dealing with negative numbers</li>`,

  codeExample: `# Comprehensive demonstration of Two Sum pattern and variations

class TwoSumPatterns:
    def __init__(self):
        """Initialize with example arrays for demonstration"""
        self.simple_array = [2, 7, 11, 15]
        self.complex_array = [3, 3, 2, 4, 1, 5, 2]
        self.sorted_array = [1, 2, 3, 4, 5, 6, 7]
    
    def basic_two_sum(self, numbers, target):
        """
        Classic Two Sum implementation.
        Shows the basic dictionary pattern for pair finding.
        Time: O(n), Space: O(n)
        """
        # Dictionary to store visited numbers and their indices
        seen = {}
        
        # Process each number in the array
        for i, number in enumerate(numbers):
            # Calculate the complement we're looking for
            complement = target - number
            
            # If complement exists in dictionary, we found a pair
            if complement in seen:
                return [seen[complement], i]
            
            # Store current number and index
            seen[number] = i
        
        # No solution found
        return None
    
    def two_sum_all_pairs(self, numbers, target):
        """
        Extended version that finds all pairs summing to target.
        Handles duplicates and multiple solutions.
        Time: O(n), Space: O(n)
        """
        # Dictionary to store numbers and their indices
        seen = {}
        pairs = []
        
        for i, number in enumerate(numbers):
            complement = target - number
            
            # If complement exists, we found pair(s)
            if complement in seen:
                # Add all possible pairs with this complement
                for prev_index in seen[complement]:
                    pairs.append([prev_index, i])
            
            # Store current number's index (append to list if exists)
            if number in seen:
                seen[number].append(i)
            else:
                seen[number] = [i]
        
        return pairs
    
    def two_sum_sorted(self, numbers, target):
        """
        Two pointer approach for sorted arrays.
        Demonstrates alternative to dictionary approach.
        Time: O(n), Space: O(1)
        """
        left = 0
        right = len(numbers) - 1
        
        while left < right:
            current_sum = numbers[left] + numbers[right]
            
            if current_sum == target:
                return [left, right]
            elif current_sum < target:
                left += 1
            else:
                right -= 1
        
        return None
    
    def two_sum_bidirectional(self, numbers, target):
        """
        Advanced implementation that can handle positive and negative numbers.
        Uses dictionary to track both positive and negative complements.
        Time: O(n), Space: O(n)
        """
        # Dictionary to store both positive and negative numbers
        seen = {}
        zero_indices = []  # Track zeros separately for edge cases
        
        for i, number in enumerate(numbers):
            if number == 0:
                zero_indices.append(i)
                continue
                
            complement = target - number
            
            if complement in seen:
                return [seen[complement], i]
            
            seen[number] = i
        
        # Handle special case where target is 0 and we have zeros
        if target == 0 and len(zero_indices) >= 2:
            return [zero_indices[0], zero_indices[1]]
        
        return None
    
    def demonstrate_pitfalls(self):
        """
        Shows common edge cases and how to handle them.
        This helps understand potential problems in interviews.
        """
        # Edge case 1: Empty array
        result1 = self.basic_two_sum([], 10)
        print("Empty array:", result1)  # None
        
        # Edge case 2: Single element
        result2 = self.basic_two_sum([5], 10)
        print("Single element:", result2)  # None
        
        # Edge case 3: Same element twice needed
        result3 = self.basic_two_sum([5, 5], 10)
        print("Same element twice:", result3)  # [0, 1]
        
        # Edge case 4: Negative numbers
        result4 = self.basic_two_sum([-2, 5, -5, 2], 0)
        print("With negatives:", result4)  # Indices of pair summing to 0
        
        return {
            "empty": result1,
            "single": result2,
            "doubles": result3,
            "negatives": result4
        }`,

  exercises: [
    {
      prompt: 'Implement a function that finds three numbers in an array that sum to a target value, using the Two Sum pattern as part of your solution.',
      initialCode: `def three_sum(numbers, target):
    """
    Find three numbers that sum to target.
    
    Args:
        numbers: List of integers
        target: Target sum
    
    Returns:
        List of three indices or None if no solution exists
    """
    # Your code here
    pass

# Test with:
nums = [1, 2, 3, 4, 5, 6]
target = 12`,
      solution: `def three_sum(numbers, target):
    """
    Find three numbers that sum to target.
    Uses Two Sum as a subroutine for efficiency.
    Time: O(n²), Space: O(n)
    """
    def two_sum(nums, start, target):
        """Helper function for finding pairs"""
        seen = {}
        for i in range(start, len(nums)):
            complement = target - nums[i]
            if complement in seen:
                return [seen[complement], i]
            seen[nums[i]] = i
        return None
    
    # Fix first number, then find pair summing to (target - first)
    for i in range(len(numbers) - 2):
        # Look for pair summing to target - current number
        pair = two_sum(numbers, i + 1, target - numbers[i])
        
        if pair is not None:
            return [i] + [p for p in pair]
    
    return None`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why is the dictionary-based Two Sum solution more efficient than checking all pairs?',
      options: [
        'It uses less memory',
        'It can stop early when finding a solution',
        'It only needs to scan the array once while tracking complements',
        'It sorts the array first',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. The dictionary solution actually uses more memory (O(n)).',
        'Incorrect. Both solutions can stop when finding a solution.',
        'Correct! By storing numbers we\'ve seen, we can find pairs in a single pass through the array.',
        'Incorrect. The dictionary solution doesn\'t require sorting.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is a key consideration when handling duplicate numbers in Two Sum?',
      options: [
        'You need to sort the array first',
        'You need to track multiple indices for the same number',
        'You should ignore duplicates',
        'You need to use a set instead of a dictionary',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Sorting isn\'t necessary for handling duplicates.',
        'Correct! If you need all possible pairs, you must track all occurrences of each number.',
        'Incorrect. Duplicates might be part of valid solutions.',
        'Incorrect. A set would lose the index information needed for the solution.',
      ],
      difficulty: Difficulty.Advanced,
    }
  ]
};

const subarraySumPatternData = {
  title: 'Subarray Sum: Finding Continuous Sequences with Target Sum',
  content: `<p>
Imagine you're analyzing your monthly expenses, looking for periods where you spent exactly $1,000. Instead of checking every possible combination of days, you could keep a running total and recognize when your spending hits that target amount. This is the essence of the Subarray Sum pattern – it helps us efficiently find continuous sequences within an array that add up to a target value.
</p>

<p>
The Subarray Sum pattern transforms what might seem like an O(n²) problem into an O(n) solution by using a dictionary to track cumulative sums. This technique is particularly powerful because it can handle both positive and negative numbers, making it versatile for real-world applications.
</p>

<h3><u>Understanding Cumulative Sums</u></h3>

<p>
Think of cumulative sums like tracking the total distance you've walked: at any point, you can find out how far you've traveled since the start. In our array, we keep track of the running sum as we move through the elements. This creates a powerful way to find subarrays with a particular sum.
</p>

<p>
The key insight is this: if we've seen a cumulative sum before, the elements between then and now must sum to zero. By extension, if we've seen (current_sum - target) before, the elements between then and now must sum to our target.
</p>

<h3><u>How the Pattern Works</u></h3>

<p>
Let's break down the mechanics of finding subarrays with a target sum:
</p>

<p>1. Running Sum Tracking</p>
As we move through the array, we:
<li>Keep a running sum of all elements seen so far</li>
<li>Store each running sum in a dictionary with its index</li>
<li>Check if (current_sum - target) exists in our dictionary</li>

<p>2. Finding Valid Subarrays</p>
A subarray with our target sum exists when:
<li>current_sum - target equals a previously seen sum</li>
<li>The elements between those points sum to our target</li>
<li>We can extract the subarray using the stored indices</li>

<p>3. Handling Edge Cases</p>
We need to consider several special situations:
<li>Empty subarrays</li>
<li>Subarrays starting at index 0</li>
<li>Negative numbers in the array</li>
<li>Multiple valid subarrays</li>

<h3><u>Applications and Variations</u></h3>

<p>
This pattern appears in many practical scenarios:
</p>

<p>1. Financial Analysis</p>
<li>Finding periods of specific spending levels</li>
<li>Identifying balanced trading sequences</li>
<li>Detecting specific cash flow patterns</li>

<p>2. Data Analysis</p>
<li>Finding sequences with particular characteristics</li>
<li>Identifying trends in time series data</li>
<li>Analyzing continuous patterns in signals</li>`,

  codeExample: `# Comprehensive demonstration of Subarray Sum pattern

class SubarraySumPatterns:
    def __init__(self):
        """Initialize with example arrays for demonstration"""
        self.simple_array = [1, 2, 3, 4, 5, 6, 7]
        self.complex_array = [3, -1, 2, -2, 4, -5, 7, 1, 2]
        self.test_array = [1, 1, 1, 2, -2, 3, -1, 2]
    
    def find_subarray_sum(self, numbers, target):
        """
        Find a continuous subarray that sums to target.
        Returns the start and end indices of the first such subarray.
        
        This is like keeping track of total distance walked and finding
        sections where you've covered exactly the target distance.
        
        Time: O(n), Space: O(n)
        """
        # Dictionary to store cumulative sum and its index
        sum_index = {0: -1}  # Initialize with 0 sum at index -1
        current_sum = 0
        
        for i, num in enumerate(numbers):
            current_sum += num
            
            # If we've seen (current_sum - target), we found a valid subarray
            if current_sum - target in sum_index:
                start = sum_index[current_sum - target] + 1
                return (start, i)
            
            # Store current cumulative sum and its index
            sum_index[current_sum] = i
        
        return None
    
    def find_all_subarrays_with_sum(self, numbers, target):
        """
        Find all continuous subarrays that sum to target.
        Returns a list of (start, end) index pairs.
        
        This variation is useful when we need to find all possible
        sequences that match our criteria.
        
        Time: O(n), Space: O(n)
        """
        sum_indices = {0: [-1]}  # Store lists of indices for each sum
        current_sum = 0
        results = []
        
        for i, num in enumerate(numbers):
            current_sum += num
            
            # Check if we can form target sum with previous cumulative sums
            if current_sum - target in sum_indices:
                # Add all possible subarrays ending at current index
                for start_index in sum_indices[current_sum - target]:
                    results.append((start_index + 1, i))
            
            # Store current sum's index
            if current_sum in sum_indices:
                sum_indices[current_sum].append(i)
            else:
                sum_indices[current_sum] = [i]
        
        return results
    
    def find_subarray_sum_sliding_window(self, numbers, target):
        """
        Alternative implementation using sliding window technique.
        Only works for non-negative numbers but uses O(1) space.
        
        This is like adjusting a window's size until its sum matches
        our target exactly.
        
        Time: O(n), Space: O(1)
        """
        if not numbers:
            return None
        
        start = 0
        current_sum = 0
        
        for end in range(len(numbers)):
            current_sum += numbers[end]
            
            # Shrink window if sum becomes too large
            while current_sum > target and start <= end:
                current_sum -= numbers[start]
                start += 1
            
            if current_sum == target:
                return (start, end)
        
        return None
    
    def demonstrate_patterns(self):
        """
        Shows different patterns and edge cases in subarray sums.
        This helps understand how the algorithm handles various scenarios.
        """
        # Basic case
        result1 = self.find_subarray_sum([1, 2, 3, 4, 5], 9)  # Should find [2, 3, 4]
        
        # With negative numbers
        result2 = self.find_subarray_sum([1, -1, 2, -2, 3], 2)  # Should find [2, -2, 3]
        
        # Multiple valid subarrays
        result3 = self.find_all_subarrays_with_sum([1, 1, 1, 1], 2)  # Should find multiple pairs
        
        # Edge case: single element
        result4 = self.find_subarray_sum([5], 5)  # Should find [5]
        
        return {
            "basic": result1,
            "with_negatives": result2,
            "multiple_solutions": result3,
            "single_element": result4
        }
    
    def analyze_performance(self, size):
        """
        Demonstrates how the algorithm performs with different input sizes.
        Helps understand the practical efficiency of the solution.
        """
        import time
        import random
        
        # Generate test array
        test_array = [random.randint(-100, 100) for _ in range(size)]
        target = random.randint(-100, 100)
        
        # Measure time for dictionary approach
        start_time = time.time()
        self.find_subarray_sum(test_array, target)
        dict_time = time.time() - start_time
        
        # Measure time for sliding window (if applicable)
        if all(x >= 0 for x in test_array):
            start_time = time.time()
            self.find_subarray_sum_sliding_window(test_array, target)
            window_time = time.time() - start_time
        else:
            window_time = None
        
        return {
            "size": size,
            "dictionary_time": dict_time,
            "sliding_window_time": window_time
        }`,

  exercises: [
    {
      prompt: 'Create a function that finds the longest subarray with a sum divisible by K. Use the principles of the Subarray Sum pattern.',
      initialCode: `def longest_subarray_divisible_by_k(numbers, k):
    """
    Find the longest subarray with sum divisible by k.
    
    Args:
        numbers: List of integers
        k: Divisor to check
    
    Returns:
        Tuple of (start_index, end_index) or None if no such subarray exists
    """
    # Your code here
    pass

# Test with:
numbers = [2, 7, 6, 1, 4, 5]
k = 3`,
      solution: `def longest_subarray_divisible_by_k(numbers, k):
    """
    Find the longest subarray with sum divisible by k.
    Uses remainder tracking to find valid subarrays.
    """
    # Dictionary to store first occurrence of each remainder
    remainder_index = {0: -1}
    current_sum = 0
    max_length = 0
    result = None
    
    for i, num in enumerate(numbers):
        current_sum += num
        # Get remainder
        remainder = current_sum % k
        
        if remainder in remainder_index:
            # Current subarray length
            length = i - remainder_index[remainder]
            if length > max_length:
                max_length = length
                result = (remainder_index[remainder] + 1, i)
        else:
            remainder_index[remainder] = i
    
    return result`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why is the cumulative sum approach more efficient than checking all possible subarrays?',
      options: [
        'It uses less memory',
        'It only needs to scan the array once while tracking sums',
        'It works better with negative numbers',
        'It can handle larger arrays',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. The cumulative sum approach actually uses more memory to store the sums.',
        'Correct! By tracking cumulative sums, we can find subarrays in a single pass through the array instead of checking all possible combinations.',
        'Incorrect. While it does handle negative numbers well, this isn\'t the main efficiency advantage.',
        'Incorrect. While it does scale better, this is a result of its efficiency, not the reason for it.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'When should you use the sliding window approach instead of the cumulative sum approach?',
      options: [
        'When working with very large arrays',
        'When memory is limited and all numbers are non-negative',
        'When you need to find all possible subarrays',
        'When the array contains negative numbers',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Array size doesn\'t determine which approach is better.',
        'Correct! The sliding window approach uses O(1) space but only works with non-negative numbers.',
        'Incorrect. Finding all subarrays is better handled with the cumulative sum approach.',
        'Incorrect. The sliding window approach doesn\'t work with negative numbers.',
      ],
      difficulty: Difficulty.Advanced,
    }
  ]
};

const isomorphicPatternData = {
  title: 'String Pattern Problems: Mapping Characters and Relationships',
  content: `<p>
Imagine you're a cryptographer trying to decode a substitution cipher, where each letter in the encoded message consistently maps to a specific letter in the original message. For example, whenever you see 'x' it represents 'a', whenever you see 'y' it represents 'b', and so on. This is exactly what we do when solving isomorphic string problems – we look for consistent character mappings between strings.
</p>

<p>
The power of this pattern lies in using dictionaries to track character relationships, transforming what might seem like a complex comparison problem into a clear and manageable mapping challenge. Let's explore how this works and why it's so effective.
</p>

<h3><u>Understanding String Patterns</u></h3>

<p>
At its core, string pattern matching is about recognizing relationships between characters. Let's break this down into clear concepts:
</p>

<p>1. Character Mapping</p>
Think of it like creating a translation key:
<li>Each character in the first string maps to exactly one character in the second string</li>
<li>The mapping must be consistent throughout the entire string</li>
<li>The same target character cannot be mapped to multiple source characters</li>

<p>2. Pattern Preservation</p>
The pattern of character repetitions must be preserved:
<li>If 'a' maps to 'x', every 'a' must map to 'x'</li>
<li>If two characters are different in the source, they must map to different characters in the target</li>
<li>The overall structure of repetitions must remain intact</li>

<p>3. Common Variations</p>
This pattern appears in several forms:
<li>Isomorphic strings (egg → add is valid, but egg → tag is not)</li>
<li>Word pattern matching (pattern="abba", str="dog cat cat dog")</li>
<li>String transformations with consistent mappings</li>

<h3><u>Key Implementation Strategies</u></h3>

<p>
Successfully implementing this pattern requires several key considerations:
</p>

<p>1. Bidirectional Mapping</p>
We often need to track mappings in both directions:
<li>Forward mapping (source → target)</li>
<li>Backward mapping (target → source)</li>
<li>Ensuring one-to-one relationships</li>

<p>2. Edge Cases</p>
We must carefully handle several special situations:
<li>Empty strings or patterns</li>
<li>Single-character strings</li>
<li>Strings with all unique characters</li>
<li>Strings with all identical characters</li>`,

  codeExample: `# Comprehensive demonstration of string pattern matching techniques

class StringPatternMatcher:
    def __init__(self):
        """Initialize with example cases for demonstration"""
        self.test_cases = [
            ("egg", "add"),     # Should be True (isomorphic)
            ("paper", "title"), # Should be True (isomorphic)
            ("foo", "bar"),     # Should be False (not isomorphic)
            ("badc", "baba")    # Should be False (not isomorphic)
        ]
    
    def are_isomorphic(self, s: str, t: str) -> bool:
        """
        Determines if two strings are isomorphic.
        Two strings are isomorphic if characters in s can be replaced to get t.
        
        Think of it like a substitution cipher - each character must consistently
        map to exactly one other character.
        
        Time: O(n), Space: O(k) where k is alphabet size
        """
        if len(s) != len(t):
            return False
        
        # Maps for tracking character relationships both ways
        s_to_t = {}
        t_to_s = {}
        
        # Check each character pair
        for char_s, char_t in zip(s, t):
            # If we've seen this character in s before
            if char_s in s_to_t:
                # Check if it maps to the same character in t
                if s_to_t[char_s] != char_t:
                    return False
            # If we haven't seen this character in s before
            else:
                # Check if the target character is already mapped
                if char_t in t_to_s:
                    return False
                # Create new mapping
                s_to_t[char_s] = char_t
                t_to_s[char_t] = char_s
        
        return True
    
    def follows_pattern(self, pattern: str, str_words: str) -> bool:
        """
        Checks if a string follows a given pattern.
        Similar to isomorphic strings but works with words instead of characters.
        
        Example: pattern="abba", str="dog cat cat dog" should return True
        
        Time: O(n), Space: O(k) where k is number of unique words/patterns
        """
        words = str_words.split()
        
        if len(pattern) != len(words):
            return False
        
        # Maps for pattern to word and word to pattern
        pattern_to_word = {}
        word_to_pattern = {}
        
        # Check each pattern character and word pair
        for p, word in zip(pattern, words):
            # Check existing mappings
            if p in pattern_to_word:
                if pattern_to_word[p] != word:
                    return False
            else:
                if word in word_to_pattern:
                    return False
                pattern_to_word[p] = word
                word_to_pattern[word] = p
        
        return True
    
    def find_pattern_matches(self, s: str, pattern: str) -> list:
        """
        Finds all substrings that match a given character pattern.
        This is a more advanced variation that looks for pattern instances.
        
        Example: s="redblueredblue", pattern="xyxy"
        Should find "redbluredblue" because red->x, blue->y follows pattern
        
        Time: O(n²), Space: O(k) where k is pattern length
        """
        def matches_pattern(substr, pattern):
            if len(substr) != len(pattern):
                return False
                
            char_to_pattern = {}
            pattern_to_char = {}
            
            for c, p in zip(substr, pattern):
                if c in char_to_pattern:
                    if char_to_pattern[c] != p:
                        return False
                else:
                    if p in pattern_to_char:
                        return False
                    char_to_pattern[c] = p
                    pattern_to_char[p] = c
                    
            return True
        
        results = []
        pattern_len = len(pattern)
        
        # Check all possible substrings of appropriate length
        for i in range(len(s) - pattern_len + 1):
            substr = s[i:i + pattern_len]
            if matches_pattern(substr, pattern):
                results.append((i, substr))
        
        return results
    
    def demonstrate_edge_cases(self):
        """
        Shows how to handle various edge cases in pattern matching.
        This helps understand potential pitfalls and their solutions.
        """
        # Empty strings
        result1 = self.are_isomorphic("", "")  # True
        
        # Single character
        result2 = self.are_isomorphic("a", "b")  # True
        
        # All same characters
        result3 = self.are_isomorphic("aaa", "bbb")  # True
        
        # All unique characters
        result4 = self.are_isomorphic("abc", "def")  # True
        
        # Different lengths
        result5 = self.are_isomorphic("abc", "abcd")  # False
        
        return {
            "empty": result1,
            "single": result2,
            "same": result3,
            "unique": result4,
            "different_lengths": result5
        }`,

  exercises: [
    {
      prompt: 'Create a function that determines if one string can be transformed into another by consistently replacing groups of characters. For example, "leetcode" can be transformed into "yyyyyyyy" because every "leet" becomes "yyyy".',
      initialCode: `def can_transform(source: str, target: str) -> bool:
    """
    Determine if source can be transformed into target using consistent replacements.
    
    Args:
        source: Source string
        target: Target string
        
    Returns:
        bool: True if transformation is possible
    """
    # Your code here
    pass

# Test cases:
# can_transform("leetcode", "yyyyyyyy") -> True
# can_transform("aabbaabb", "ccddccdd") -> True
# can_transform("aabba", "ccccc") -> False`,
      solution: `def can_transform(source: str, target: str) -> bool:
    """
    Determine if source can be transformed into target using consistent replacements.
    Uses dictionary to track and verify character group mappings.
    """
    def find_groups(s: str) -> list:
        """Helper function to find consecutive character groups"""
        if not s:
            return []
        
        groups = []
        current_group = s[0]
        
        for c in s[1:]:
            if c == current_group[0]:
                current_group += c
            else:
                groups.append(current_group)
                current_group = c
        
        groups.append(current_group)
        return groups
    
    # Get character groups from both strings
    source_groups = find_groups(source)
    target_groups = find_groups(target)
    
    # Must have same number of groups
    if len(source_groups) != len(target_groups):
        return False
    
    # Map groups and verify consistency
    group_map = {}
    for s_group, t_group in zip(source_groups, target_groups):
        if s_group in group_map:
            if group_map[s_group] != t_group:
                return False
        else:
            # Verify no other source group maps to this target group
            if t_group in group_map.values():
                return False
            group_map[s_group] = t_group
    
    return True`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why do we need to maintain two mapping dictionaries for isomorphic strings?',
      options: [
        'To improve performance',
        'To handle longer strings',
        'To ensure one-to-one character mapping',
        'To save memory',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Using two dictionaries might slightly reduce performance.',
        'Incorrect. String length doesn\'t affect the need for two dictionaries.',
        'Correct! Two dictionaries ensure each character in the first string maps to a unique character in the second string, and vice versa.',
        'Incorrect. Using two dictionaries actually uses more memory.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the key difference between isomorphic strings and pattern matching with words?',
      options: [
        'Pattern matching is faster',
        'Pattern matching works with groups of characters instead of single characters',
        'Isomorphic strings are case-sensitive',
        'Pattern matching requires more memory',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Performance depends on input size, not the type of pattern matching.',
        'Correct! Pattern matching treats whole words as units, while isomorphic strings work with individual characters.',
        'Incorrect. Both can be case-sensitive or case-insensitive depending on implementation.',
        'Incorrect. Memory usage depends on input size, not the type of pattern matching.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const lruCacheData = {
  title: 'LRU Cache: Efficient Data Access with Limited Memory',
  content: `<p>
Imagine you're organizing your desk, but you have limited space. When you need a new document, you place it on top of the pile. When the pile gets too high, you remove the document at the bottom – the one you haven't used in the longest time. This is exactly how an LRU (Least Recently Used) Cache works. It keeps track of the most recently accessed items and removes the least recently used ones when it needs space.
</p>

<p>
LRU Cache combines two key data structures – a dictionary for fast access and a doubly-linked list for maintaining access order. This combination allows us to achieve O(1) time complexity for both access and updates while efficiently managing limited memory.
</p>

<h3><u>Understanding LRU Cache</u></h3>

<p>
An LRU Cache needs to perform two main operations efficiently:
</p>

<p>1. Fast Access to Data</p>
When we look up an item, we need to:
<li>Quickly determine if the item exists</li>
<li>Retrieve the item's value if it does exist</li>
<li>Update the item's position to mark it as most recently used</li>

<p>2. Efficient Updates to Order</p>
When we access or add an item, we need to:
<li>Move accessed items to the front of our order</li>
<li>Remove the least recently used item when we're at capacity</li>
<li>Maintain proper linking between items</li>

<h3><u>Implementation Strategy</u></h3>

<p>
To achieve our performance goals, we'll use:
</p>

<p>1. Dictionary (Hash Map)</p>
The dictionary provides:
<li>O(1) lookups by key</li>
<li>Direct access to list nodes</li>
<li>Quick removal and insertion</li>

<p>2. Doubly-Linked List</p>
The list helps us:
<li>Track access order efficiently</li>
<li>Move nodes to front in O(1) time</li>
<li>Remove least recently used node quickly</li>

<h3><u>Common Use Cases</u></h3>

<p>
LRU Caches are particularly useful in several scenarios:
</p>

<p>1. Web Browsers</p>
<li>Caching recently visited pages</li>
<li>Storing browser history</li>
<li>Managing image caches</li>

<p>2. Operating Systems</p>
<li>Page replacement algorithms</li>
<li>File system caching</li>
<li>Process management</li>

<p>3. Database Systems</p>
<li>Query result caching</li>
<li>Buffer pool management</li>
<li>Index caching</li>`,

  codeExample: `# Comprehensive implementation of an LRU Cache

class Node:
    """
    Node class for doubly-linked list.
    Keeps track of value and key for easy removal from dictionary.
    """
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.prev = None
        self.next = None

class LRUCache:
    """
    LRU Cache implementation using a dictionary and doubly-linked list.
    Provides O(1) access and update operations.
    """
    def __init__(self, capacity):
        """Initialize cache with given capacity"""
        self.capacity = capacity
        self.cache = {}  # Maps keys to nodes
        
        # Initialize dummy head and tail for easier list manipulation
        self.head = Node(0, 0)  # Dummy head
        self.tail = Node(0, 0)  # Dummy tail
        self.head.next = self.tail
        self.tail.prev = self.head
    
    def _add_node(self, node):
        """
        Add node right after head (marks as most recently used).
        This is an internal method for list manipulation.
        """
        node.prev = self.head
        node.next = self.head.next
        
        self.head.next.prev = node
        self.head.next = node
    
    def _remove_node(self, node):
        """
        Remove node from its current position.
        This is an internal method for list manipulation.
        """
        prev = node.prev
        new = node.next
        
        prev.next = new
        new.prev = prev
    
    def _move_to_front(self, node):
        """
        Move an existing node to front (mark as most recently used).
        This is an internal method combining remove and add operations.
        """
        self._remove_node(node)
        self._add_node(node)
    
    def _pop_tail(self):
        """
        Remove the node right before tail (least recently used).
        This is an internal method for cache eviction.
        """
        node = self.tail.prev
        self._remove_node(node)
        return node
    
    def get(self, key):
        """
        Retrieve item from cache and mark as most recently used.
        Returns -1 if item doesn't exist.
        Time complexity: O(1)
        """
        if key in self.cache:
            node = self.cache[key]
            self._move_to_front(node)
            return node.value
        return -1
    
    def put(self, key, value):
        """
        Add or update item in cache.
        If cache is full, remove least recently used item.
        Time complexity: O(1)
        """
        if key in self.cache:
            # Update existing item
            node = self.cache[key]
            node.value = value
            self._move_to_front(node)
        else:
            # Add new item
            new_node = Node(key, value)
            self.cache[key] = new_node
            self._add_node(new_node)
            
            # Check capacity and evict if necessary
            if len(self.cache) > self.capacity:
                lru_node = self._pop_tail()
                del self.cache[lru_node.key]
    
    def demonstrate_usage(self):
        """
        Shows typical usage patterns and edge cases.
        Helps understand how the cache behaves in practice.
        """
        # Add some items
        self.put(1, "one")
        self.put(2, "two")
        self.put(3, "three")
        
        # Access an item (marks as recently used)
        value = self.get(1)  # Returns "one"
        
        # Add item that exceeds capacity
        self.put(4, "four")  # Should evict least recently used
        
        # Try to access evicted item
        value = self.get(2)  # Returns -1 if capacity was 3
        
        # Update existing item
        self.put(1, "ONE")
        value = self.get(1)  # Returns "ONE"
        
        return {
            "cache_size": len(self.cache),
            "contains_1": 1 in self.cache,
            "contains_2": 2 in self.cache
        }
    
    def get_state(self):
        """
        Returns current state of cache for debugging.
        Shows both content and order of items.
        """
        # Get content
        content = {k: v.value for k, v in self.cache.items()}
        
        # Get order (from most to least recently used)
        order = []
        current = self.head.next
        while current != self.tail:
            order.append(current.key)
            current = current.next
        
        return {
            "content": content,
            "order": order,
            "size": len(self.cache),
            "capacity": self.capacity
        }`,

  exercises: [
    {
      prompt: 'Extend the LRU Cache to include a method that returns all items above a certain "age" (number of operations since last access). This helps identify items that might be good candidates for eviction.',
      initialCode: `def get_aged_items(self, operations_threshold):
    """
    Find all items that haven't been accessed in more than
    operations_threshold operations.
    
    Args:
        operations_threshold: Number of operations to consider item as aged
        
    Returns:
        List of (key, value) pairs of aged items, from least to most recently used
    """
    # Your code here
    pass`,
      solution: `def get_aged_items(self, operations_threshold):
    """
    Find all items that haven't been accessed in more than
    operations_threshold operations.
    """
    aged_items = []
    operations_count = 0
    
    # Start from least recently used (tail) and move towards head
    current = self.tail.prev
    while current != self.head:
        if operations_count >= operations_threshold:
            aged_items.append((current.key, current.value))
        operations_count += 1
        current = current.prev
    
    return aged_items`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why does an LRU Cache use both a dictionary and a linked list?',
      options: [
        'To reduce memory usage',
        'To provide O(1) access and maintain usage order',
        'To improve cache hit rate',
        'To support larger capacities',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Using both structures actually increases memory usage.',
        'Correct! The dictionary provides O(1) access while the linked list efficiently maintains usage order.',
        'Incorrect. Cache hit rate depends on usage patterns, not the data structures used.',
        'Incorrect. Capacity is independent of the chosen data structures.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the primary advantage of using dummy head and tail nodes?',
      options: [
        'They improve cache performance',
        'They reduce memory usage',
        'They simplify edge cases in list manipulation',
        'They allow for larger cache sizes',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Dummy nodes don\'t affect cache performance.',
        'Incorrect. They actually use slightly more memory.',
        'Correct! Dummy nodes eliminate special cases for first/last elements, simplifying the code.',
        'Incorrect. Cache size is independent of dummy nodes.',
      ],
      difficulty: Difficulty.Advanced,
    }
  ]
};

const graphRepresentationData = {
  title: 'Graph Representation: Using Dictionaries for Network Structures',
  content: `<p>
Imagine you're mapping out your social network. Each person is connected to their friends, and those friends are connected to others, forming a complex web of relationships. When we want to represent such networks in programming, we use graphs. A dictionary provides an elegant and efficient way to represent these relationships, much like keeping a contact list where each person has their own page of connections.
</p>

<p>
Graph representation with dictionaries combines the intuitive nature of key-value pairs with efficient access patterns, making it particularly powerful for real-world network problems. Let's explore how this works and why it's so effective.
</p>

<h3><u>Understanding Graph Representation</u></h3>

<p>
A graph consists of two main components:
</p>

<p>1. Vertices (Nodes)</p>
Think of these as the points of interest in your network:
<li>Each vertex represents an entity (person, city, webpage, etc.)</li>
<li>Each vertex needs a unique identifier</li>
<li>Vertices might contain additional data</li>

<p>2. Edges (Connections)</p>
These represent relationships between vertices:
<li>Can be directed (one-way) or undirected (two-way)</li>
<li>Might have weights or other properties</li>
<li>Connect vertices in meaningful ways</li>

<h3><u>Dictionary-Based Representations</u></h3>

<p>
There are several ways to represent graphs using dictionaries:
</p>

<p>1. Adjacency List</p>
The most common representation:
<li>Each vertex is a key in the dictionary</li>
<li>Values are lists of connected vertices</li>
<li>Efficient for sparse graphs</li>

<p>2. Weighted Graph</p>
For networks with connection weights:
<li>Values are dictionaries mapping vertices to weights</li>
<li>Supports easy weight lookups</li>
<li>Natural representation for costs or distances</li>

<p>3. Bidirectional Mapping</p>
For undirected graphs:
<li>Maintains relationships in both directions</li>
<li>Ensures consistency of connections</li>
<li>Supports bidirectional traversal</li>

<h3><u>Advantages of Dictionary Representation</u></h3>

<p>1. Performance Benefits</p>
<li>O(1) vertex access</li>
<li>Efficient edge lookups</li>
<li>Space-efficient for sparse graphs</li>

<p>2. Flexibility</p>
<li>Easy to add/remove vertices and edges</li>
<li>Natural support for different graph types</li>
<li>Simple to add additional properties</li>

<p>3. Readability</p>
<li>Clear relationship representation</li>
<li>Intuitive structure</li>
<li>Easy to debug and visualize</li>`,

  codeExample: `# Comprehensive demonstration of graph representations using dictionaries

class GraphRepresentation:
    def __init__(self):
        """Initialize examples of different graph representations"""
        self.simple_graph = {}
        self.weighted_graph = {}
        self.bidirectional_graph = {}
    
    def build_simple_graph(self):
        """
        Demonstrates basic adjacency list representation.
        Perfect for unweighted graphs where we just need to track connections.
        
        Example: Social network where we just want to know who is connected.
        """
        # Define connections
        connections = {
            'Alice': ['Bob', 'Charlie', 'David'],
            'Bob': ['Alice', 'Charlie'],
            'Charlie': ['Alice', 'Bob', 'David'],
            'David': ['Alice', 'Charlie']
        }
        
        # Build graph
        for person, friends in connections.items():
            self.simple_graph[person] = friends.copy()
        
        return self.simple_graph
    
    def build_weighted_graph(self):
        """
        Demonstrates weighted graph representation.
        Useful when connections have associated values (distances, costs, etc.).
        
        Example: Road network where edges represent distances between cities.
        """
        # Define weighted connections
        road_network = {
            'New York': {
                'Boston': 215,
                'Philadelphia': 97,
                'Washington': 225
            },
            'Boston': {
                'New York': 215,
                'Philadelphia': 308
            },
            'Philadelphia': {
                'New York': 97,
                'Boston': 308,
                'Washington': 139
            },
            'Washington': {
                'Philadelphia': 139,
                'New York': 225
            }
        }
        
        # Build weighted graph
        for city, connections in road_network.items():
            self.weighted_graph[city] = connections.copy()
        
        return self.weighted_graph
    
    def add_bidirectional_edge(self, vertex1, vertex2, weight=None):
        """
        Adds an edge between two vertices in both directions.
        Ensures graph consistency for undirected relationships.
        """
        # Initialize vertices if they don't exist
        if vertex1 not in self.bidirectional_graph:
            self.bidirectional_graph[vertex1] = {}
        if vertex2 not in self.bidirectional_graph:
            self.bidirectional_graph[vertex2] = {}
        
        # Add edges in both directions
        if weight is None:
            self.bidirectional_graph[vertex1][vertex2] = True
            self.bidirectional_graph[vertex2][vertex1] = True
        else:
            self.bidirectional_graph[vertex1][vertex2] = weight
            self.bidirectional_graph[vertex2][vertex1] = weight
    
    def demonstrate_graph_operations(self):
        """
        Shows common graph operations and their implementation.
        Helps understand how to work with dictionary-based graphs.
        """
        # Create a sample graph
        graph = {
            'A': {'B': 5, 'C': 2},
            'B': {'A': 5, 'D': 4},
            'C': {'A': 2, 'D': 7},
            'D': {'B': 4, 'C': 7}
        }
        
        def get_neighbors(vertex):
            """Get all vertices connected to given vertex"""
            return list(graph[vertex].keys())
        
        def get_edge_weight(vertex1, vertex2):
            """Get weight of edge between two vertices"""
            return graph[vertex1].get(vertex2)
        
        def add_vertex(vertex):
            """Add new vertex to graph"""
            if vertex not in graph:
                graph[vertex] = {}
        
        def add_edge(vertex1, vertex2, weight):
            """Add weighted edge between vertices"""
            if vertex1 in graph and vertex2 in graph:
                graph[vertex1][vertex2] = weight
        
        # Demonstrate operations
        neighbors_of_A = get_neighbors('A')  # ['B', 'C']
        weight_A_to_B = get_edge_weight('A', 'B')  # 5
        
        add_vertex('E')
        add_edge('D', 'E', 3)
        
        return {
            'neighbors': neighbors_of_A,
            'weight': weight_A_to_B,
            'graph': graph
        }
    
    def analyze_graph_properties(self, graph):
        """
        Analyzes various properties of a graph.
        Useful for understanding graph characteristics.
        """
        properties = {
            'vertex_count': len(graph),
            'edge_count': sum(len(edges) for edges in graph.values()),
            'vertices': list(graph.keys()),
            'is_directed': self._is_directed(graph),
            'degree_info': self._get_degree_info(graph)
        }
        
        return properties
    
    def _is_directed(self, graph):
        """Helper method to determine if graph is directed"""
        for vertex, edges in graph.items():
            for neighbor in edges:
                # Check if each edge is bidirectional
                if vertex not in graph[neighbor]:
                    return True
        return False
    
    def _get_degree_info(self, graph):
        """Helper method to analyze vertex degrees"""
        degrees = {}
        for vertex in graph:
            degrees[vertex] = len(graph[vertex])
        return {
            'max_degree': max(degrees.values()),
            'min_degree': min(degrees.values()),
            'average_degree': sum(degrees.values()) / len(degrees)
        }`,

  exercises: [
    {
      prompt: 'Create a function that converts a weighted graph represented as a matrix into a dictionary-based representation. Consider both directed and undirected cases.',
      initialCode: `def matrix_to_dict_graph(matrix, directed=False):
    """
    Convert adjacency matrix to dictionary representation.
    
    Args:
        matrix: 2D list with weights (None or infinity for no edge)
        directed: Whether the graph is directed
        
    Returns:
        Dictionary representing the graph
    """
    # Your code here
    pass

# Test with:
matrix = [
    [None, 5, 2, None],
    [5, None, None, 4],
    [2, None, None, 7],
    [None, 4, 7, None]
]`,
      solution: `def matrix_to_dict_graph(matrix, directed=False):
    """
    Convert adjacency matrix to dictionary representation.
    Returns a weighted graph dictionary.
    """
    graph = {}
    n = len(matrix)
    
    # Convert each row to dictionary of edges
    for i in range(n):
        edges = {}
        for j in range(n):
            # Add edge if it exists (not None)
            if matrix[i][j] is not None:
                edges[j] = matrix[i][j]
        graph[i] = edges
        
        # For undirected graph, ensure symmetry
        if not directed:
            for j in range(i + 1, n):
                if matrix[i][j] is not None:
                    # Check consistency
                    if matrix[j][i] != matrix[i][j]:
                        raise ValueError("Inconsistent weights in undirected graph")
    
    return graph`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why is a dictionary-based adjacency list better than a matrix for sparse graphs?',
      options: [
        'It\'s faster for all operations',
        'It uses less memory by only storing existing edges',
        'It\'s easier to implement',
        'It supports more types of graphs',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Some operations might be slower than with a matrix.',
        'Correct! Adjacency lists only store existing edges, making them memory-efficient for sparse graphs.',
        'Incorrect. Matrix representation is often simpler to implement.',
        'Incorrect. Both representations can support the same types of graphs.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the main advantage of storing edge weights in a nested dictionary rather than a separate structure?',
      options: [
        'It uses less memory',
        'It provides O(1) weight lookup for any edge',
        'It makes the graph undirected',
        'It improves traversal speed',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. It might actually use more memory than alternatives.',
        'Correct! Nested dictionaries provide constant-time access to edge weights.',
        'Incorrect. Direction is independent of weight storage method.',
        'Incorrect. Traversal speed isn\'t significantly affected by weight storage.',
      ],
      difficulty: Difficulty.Advanced,
    }
  ]
};

const trieImplementationData = {
  title: 'Trie Data Structure: Building Efficient Prefix Trees',
  content: `<p>
Imagine you're organizing a vast library of words where finding books that start with certain letters needs to be lightning-fast. Rather than checking every book title, you might organize them in sections by their first letter, then subsections by their second letter, and so on. This is exactly how a trie works – it creates a tree-like structure that makes prefix-based operations incredibly efficient.
</p>

<p>
A trie (pronounced "try") uses dictionaries at each node to store links to child nodes, creating a branching structure that efficiently represents strings sharing common prefixes. Each path from the root to a node represents a prefix, and special markers indicate complete words.
</p>

<h3><u>Understanding Tries</u></h3>

<p>
Let's break down the key components of a trie:
</p>

<p>1. Node Structure</p>
Each node in our trie contains:
<li>A dictionary mapping characters to child nodes</li>
<li>A flag indicating if this node represents the end of a word</li>
<li>Optional data associated with complete words</li>

<p>2. Basic Operations</p>
A trie supports several fundamental operations:
<li>Insertion: Adding new words letter by letter</li>
<li>Search: Finding complete words</li>
<li>Prefix Search: Finding all words with a given prefix</li>
<li>Deletion: Removing words while maintaining structure</li>

<p>3. Advantages of Dictionary Implementation</p>
Using dictionaries for tries provides several benefits:
<li>O(1) access to child nodes</li>
<li>Natural representation of character-node relationships</li>
<li>Easy addition and removal of branches</li>

<h3><u>Common Applications</u></h3>

<p>
Tries excel in several real-world scenarios:
</p>

<p>1. Autocomplete Systems</p>
<li>Suggesting words as users type</li>
<li>Quick prefix matching</li>
<li>Supporting type-ahead search</li>

<p>2. Spell Checkers</p>
<li>Efficiently validating words</li>
<li>Finding similar words</li>
<li>Suggesting corrections</li>

<p>3. IP Routing Tables</p>
<li>Matching IP address prefixes</li>
<li>Quick route lookup</li>
<li>Network address organization</li>`,

  codeExample: `# Comprehensive trie implementation with dictionary nodes

class TrieNode:
    """
    A node in our trie structure.
    Uses dictionary to store children and track word boundaries.
    """
    def __init__(self):
        # Dictionary storing character -> node mappings
        self.children = {}
        # Flag indicating if this node completes a word
        self.is_end_of_word = False
        # Optional data associated with complete words
        self.data = None

class Trie:
    def __init__(self):
        """Initialize trie with empty root node"""
        self.root = TrieNode()
        self.word_count = 0
    
    def insert(self, word, data=None):
        """
        Insert a word into the trie.
        Optionally associate data with the complete word.
        
        Time Complexity: O(m) where m is word length
        Space Complexity: O(m) 
        """
        current = self.root
        
        # Follow or create path for each character
        for char in word:
            # Create new node if character doesn't exist
            if char not in current.children:
                current.children[char] = TrieNode()
            current = current.children[char]
        
        # Mark end of word and store data
        if not current.is_end_of_word:
            self.word_count += 1
        current.is_end_of_word = True
        current.data = data
    
    def search(self, word):
        """
        Search for a complete word in the trie.
        Returns True if word exists, False otherwise.
        
        Time Complexity: O(m) where m is word length
        """
        node = self._get_node(word)
        return node is not None and node.is_end_of_word
    
    def starts_with(self, prefix):
        """
        Check if any words start with given prefix.
        
        Time Complexity: O(p) where p is prefix length
        """
        return self._get_node(prefix) is not None
    
    def get_words_with_prefix(self, prefix):
        """
        Find all words that start with given prefix.
        Returns list of (word, data) tuples.
        
        Time Complexity: O(p + n) where p is prefix length,
        n is total length of all matching words
        """
        node = self._get_node(prefix)
        if not node:
            return []
        
        results = []
        self._collect_words(node, prefix, results)
        return results
    
    def delete(self, word):
        """
        Remove a word from the trie.
        Returns True if word was deleted, False if not found.
        
        Time Complexity: O(m) where m is word length
        """
        def _delete_helper(node, word, index):
            # Base case: reach end of word
            if index == len(word):
                # Word doesn't exist in trie
                if not node.is_end_of_word:
                    return False
                
                # Remove word marking
                node.is_end_of_word = False
                node.data = None
                self.word_count -= 1
                
                # Return True if node has other children
                return bool(node.children)
            
            char = word[index]
            if char not in node.children:
                return False
            
            should_keep_child = _delete_helper(
                node.children[char], word, index + 1
            )
            
            # Remove child node if it's no longer needed
            if not should_keep_child:
                del node.children[char]
            
            # Keep this node if it has children or marks word end
            return bool(node.children) or node.is_end_of_word
        
        _delete_helper(self.root, word, 0)
        return True
    
    def _get_node(self, prefix):
        """
        Helper method to find node corresponding to prefix.
        Returns None if prefix doesn't exist in trie.
        """
        current = self.root
        
        for char in prefix:
            if char not in current.children:
                return None
            current = current.children[char]
        
        return current
    
    def _collect_words(self, node, prefix, results):
        """
        Helper method for recursively collecting all words
        under a node with given prefix.
        """
        if node.is_end_of_word:
            results.append((prefix, node.data))
        
        for char, child in node.children.items():
            self._collect_words(child, prefix + char, results)
    
    def demonstrate_usage(self):
        """
        Shows typical usage patterns and features.
        """
        # Insert some words with data
        self.insert("cat", {"type": "animal", "legs": 4})
        self.insert("car", {"type": "vehicle", "wheels": 4})
        self.insert("cart", {"type": "vehicle", "wheels": 2})
        
        # Search operations
        exists = self.search("cat")  # True
        no_exist = self.search("can")  # False
        
        # Prefix operations
        has_prefix = self.starts_with("ca")  # True
        words = self.get_words_with_prefix("ca")  # [("cat", data), ("car", data), ("cart", data)]
        
        # Delete operation
        deleted = self.delete("car")  # True
        
        return {
            "word_exists": exists,
            "no_exist": no_exist,
            "has_prefix": has_prefix,
            "prefix_words": words,
            "deleted": deleted
        }`,

  exercises: [
    {
      prompt: 'Extend the Trie implementation to support fuzzy search, finding words that match a pattern where "?" represents any single character.',
      initialCode: `def fuzzy_search(self, pattern):
    """
    Find all words matching pattern where ? matches any character.
    
    Args:
        pattern: String with ? for wildcard matches
        
    Returns:
        List of matching words with their associated data
    """
    # Your code here
    pass

# Test with:
# trie.fuzzy_search("c?t") should match "cat", "cut", etc.`,
      solution: `def fuzzy_search(self, pattern):
    """
    Find all words matching pattern where ? matches any character.
    Uses recursive helper for pattern matching.
    """
    def _fuzzy_search_helper(node, pattern, current_word, index, results):
        # Base case: reached end of pattern
        if index == len(pattern):
            if node.is_end_of_word:
                results.append((current_word, node.data))
            return
        
        # Current pattern character
        char = pattern[index]
        
        if char == "?":
            # Try all possible characters at this position
            for next_char, child in node.children.items():
                _fuzzy_search_helper(
                    child,
                    pattern,
                    current_word + next_char,
                    index + 1,
                    results
                )
        else:
            # Match specific character
            if char in node.children:
                _fuzzy_search_helper(
                    node.children[char],
                    pattern,
                    current_word + char,
                    index + 1,
                    results
                )
    
    results = []
    _fuzzy_search_helper(self.root, pattern, "", 0, results)
    return results`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why is a trie more efficient than a hash table for prefix matching?',
      options: [
        'It uses less memory',
        'It stores words in sorted order',
        'It groups words by common prefixes, allowing efficient prefix traversal',
        'It provides faster word insertion',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Tries often use more memory than hash tables.',
        'Incorrect. While tries maintain lexicographical order, this isn\'t the main advantage.',
        'Correct! Tries organize words by shared prefixes, making prefix operations efficient.',
        'Incorrect. Hash tables generally provide faster single word insertion.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the primary advantage of using a dictionary for storing child nodes in a trie?',
      options: [
        'It reduces memory usage',
        'It provides O(1) access to child nodes',
        'It automatically sorts the children',
        'It supports more characters',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Arrays might use less memory for small character sets.',
        'Correct! Dictionary provides constant-time access to child nodes, which is crucial for trie operations.',
        'Incorrect. Dictionaries don\'t automatically sort keys.',
        'Incorrect. Both arrays and dictionaries can support the same character sets.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const slidingWindowData = {
  title: 'Sliding Window with Dictionaries: Tracking Window Contents',
  content: `<p>
Imagine you're a quality control inspector at a factory, checking products through a window that shows exactly five items at a time. As the conveyor belt moves, new items enter your view while old ones leave. Instead of recounting everything each time the window moves, you simply subtract the item that left and add the new item that entered. This is exactly how the sliding window pattern works – and dictionaries make it especially powerful by helping us efficiently track what's in our window.
</p>

<p>
The sliding window pattern becomes particularly elegant when combined with dictionaries. While arrays can track the window's boundaries, dictionaries excel at maintaining counts, frequencies, and relationships within the window. This combination allows us to solve complex problems with remarkable efficiency.
</p>

<h3><u>Understanding Dictionary-Based Windows</u></h3>

<p>
Let's explore how dictionaries enhance sliding window operations:
</p>

<p>1. Window State Tracking</p>
Dictionaries excel at maintaining window information:
<li>Character frequencies in strings</li>
<li>Element counts in arrays</li>
<li>Relationships between elements</li>
<li>Custom state information</li>

<p>2. Efficient Updates</p>
When the window slides:
<li>Add new element to dictionary (O(1))</li>
<li>Remove old element from dictionary (O(1))</li>
<li>Check window validity instantly</li>
<li>Track complex conditions easily</li>

<p>3. Common Applications</p>
This pattern solves many practical problems:
<li>Finding longest substring with unique characters</li>
<li>Maintaining running medians</li>
<li>Finding anagram positions</li>
<li>Calculating moving averages</li>

<h3><u>Window Management Strategies</u></h3>

<p>
Different problems require different window management approaches:
</p>

<p>1. Fixed-Size Windows</p>
When the window size is constant:
<li>Dictionary tracks current window contents</li>
<li>One item enters, one leaves with each move</li>
<li>Useful for moving averages, medians</li>

<p>2. Variable-Size Windows</p>
When the window can grow or shrink:
<li>Dictionary helps determine valid window size</li>
<li>Window expands until condition breaks</li>
<li>Window shrinks until condition restores</li>

<p>3. Multi-Dictionary Windows</p>
Some problems require multiple dictionaries:
<li>One tracks current window</li>
<li>Another tracks target state</li>
<li>Compare dictionaries to check conditions</li>`,

  codeExample: `# Comprehensive demonstration of sliding window with dictionaries

class SlidingWindowPatterns:
    def __init__(self):
        """Initialize example cases for demonstration"""
        self.test_string = "ADOBECODEBANC"
        self.test_array = [1, 3, -1, -3, 5, 3, 6, 7]
    
    def find_longest_unique_substring(self, s: str) -> str:
        """
        Finds longest substring without repeating characters.
        Uses dictionary to track character positions.
        
        Time: O(n), Space: O(min(m,n)) where m is alphabet size
        """
        char_position = {}  # Track last position of each char
        start = 0
        max_length = 0
        max_start = 0
        
        for end, char in enumerate(s):
            # If char in window, move start past its last position
            if char in char_position and char_position[char] >= start:
                start = char_position[char] + 1
            
            # Update char position
            char_position[char] = end
            
            # Update max length if current window is longer
            if end - start + 1 > max_length:
                max_length = end - start + 1
                max_start = start
        
        return s[max_start:max_start + max_length]
    
    def find_anagrams(self, s: str, p: str) -> list:
        """
        Find all anagram positions of p in s.
        Uses two dictionaries to compare character frequencies.
        
        Time: O(n), Space: O(k) where k is alphabet size
        """
        if len(p) > len(s):
            return []
        
        # Build pattern frequency dictionary
        p_freq = {}
        for char in p:
            p_freq[char] = p_freq.get(char, 0) + 1
        
        # Initialize window frequency dictionary
        window_freq = {}
        results = []
        
        # Initialize first window
        for i in range(len(p)):
            char = s[i]
            window_freq[char] = window_freq.get(char, 0) + 1
        
        # Check first window
        if window_freq == p_freq:
            results.append(0)
        
        # Slide window
        for i in range(len(p), len(s)):
            # Remove leftmost character
            left_char = s[i - len(p)]
            window_freq[left_char] -= 1
            if window_freq[left_char] == 0:
                del window_freq[left_char]
            
            # Add new character
            right_char = s[i]
            window_freq[right_char] = window_freq.get(right_char, 0) + 1
            
            # Check if window is anagram
            if window_freq == p_freq:
                results.append(i - len(p) + 1)
        
        return results
    
    def min_window_substring(self, s: str, t: str) -> str:
        """
        Find minimum window in s containing all characters of t.
        Uses dictionary to track required and window characters.
        
        Time: O(n), Space: O(k) where k is alphabet size
        """
        # Build required character frequency dictionary
        required = {}
        for char in t:
            required[char] = required.get(char, 0) + 1
        
        # Initialize window tracking
        window = {}
        needed = len(required)
        have = 0
        start = 0
        min_length = float('inf')
        min_start = 0
        
        # Expand window
        for end, char in enumerate(s):
            # Add new character to window
            window[char] = window.get(char, 0) + 1
            
            # Check if we've met a character requirement
            if (char in required and 
                window[char] == required[char]):
                have += 1
            
            # Try to minimize window
            while have == needed:
                # Update minimum window
                if end - start + 1 < min_length:
                    min_length = end - start + 1
                    min_start = start
                
                # Remove start character
                left_char = s[start]
                window[left_char] -= 1
                
                # Check if we've broken a requirement
                if (left_char in required and 
                    window[left_char] < required[left_char]):
                    have -= 1
                
                start += 1
        
        return s[min_start:min_start + min_length] if min_length != float('inf') else ""
    
    def max_sliding_window(self, nums: list, k: int) -> list:
        """
        Find maximum element in each sliding window of size k.
        Uses dictionary to track element frequencies in window.
        
        Time: O(n), Space: O(k)
        """
        from collections import deque
        result = []
        window = deque()  # Stores indices
        
        for i, num in enumerate(nums):
            # Remove elements outside window
            while window and window[0] <= i - k:
                window.popleft()
            
            # Remove smaller elements from end
            while window and nums[window[-1]] < num:
                window.pop()
            
            # Add current element
            window.append(i)
            
            # Add maximum to result if window is complete
            if i >= k - 1:
                result.append(nums[window[0]])
        
        return result`,

  exercises: [
    {
      prompt: 'Create a function that finds the longest substring with exactly k different characters. Use a sliding window with a dictionary to track character frequencies.',
      initialCode: `def longest_k_chars_substring(s: str, k: int) -> str:
    """
    Find longest substring with exactly k different characters.
    
    Args:
        s: Input string
        k: Number of different characters allowed
        
    Returns:
        Longest substring meeting criteria
    """
    # Your code here
    pass

# Test with:
s = "eceba"
k = 2  # Should return "ece"`,
      solution: `def longest_k_chars_substring(s: str, k: int) -> str:
    """
    Find longest substring with exactly k different characters.
    Uses sliding window with dictionary to track frequencies.
    """
    if not s or k <= 0:
        return ""
    
    char_count = {}  # Track character frequencies
    start = 0
    max_length = 0
    max_start = 0
    
    for end, char in enumerate(s):
        # Add new character to window
        char_count[char] = char_count.get(char, 0) + 1
        
        # Shrink window while we have too many different chars
        while len(char_count) > k:
            left_char = s[start]
            char_count[left_char] -= 1
            if char_count[left_char] == 0:
                del char_count[left_char]
            start += 1
        
        # Update max length if window has exactly k chars
        if len(char_count) == k and end - start + 1 > max_length:
            max_length = end - start + 1
            max_start = start
    
    return s[max_start:max_start + max_length]`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why is a dictionary particularly useful in sliding window problems?',
      options: [
        'It makes the code shorter',
        'It maintains frequencies and states efficiently with O(1) updates',
        'It allows for larger windows',
        'It reduces memory usage',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Code length isn\'t a significant factor.',
        'Correct! Dictionaries provide efficient tracking of window contents with constant-time updates.',
        'Incorrect. Window size isn\'t determined by the data structure choice.',
        'Incorrect. Dictionaries might actually use more memory than arrays.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'When implementing a sliding window with a dictionary, what is the most important operation to handle carefully?',
      options: [
        'Adding new elements',
        'Window size calculation',
        'Removing elements that leave the window',
        'Initial window creation',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Adding elements is straightforward with dictionaries.',
        'Incorrect. Window size calculation is independent of dictionary operations.',
        'Correct! Properly removing elements and cleaning up dictionary entries is crucial for maintaining correct window state.',
        'Incorrect. Initial window creation is typically simpler than ongoing maintenance.',
      ],
      difficulty: Difficulty.Advanced,
    }
  ]
};

const anagramProblemsData = {
  title: 'Anagrams and Permutations: Pattern Recognition in Strings',
  content: `<p>
Imagine you're a detective trying to find hidden connections between words. You notice that "listen" and "silent" use exactly the same letters, just arranged differently. This relationship between words is called an anagram, and recognizing such patterns is a fundamental skill in string processing. While humans might need to manually rearrange letters to spot anagrams, we can teach computers to identify them instantly using character frequency tracking.
</p>

<p>
Understanding anagrams and permutations goes beyond just word games – these patterns appear in problems ranging from DNA sequence analysis to cryptography. Let's explore how we can systematically solve these problems using dictionaries to track character frequencies.
</p>

<h3><u>Understanding String Relationships</u></h3>

<p>1. Types of String Relationships</p>

Strings can be related in several ways:
<li>Anagrams: Same characters, different arrangements (heart → earth)</li>
<li>Permutations: All possible arrangements of characters</li>
<li>Substring permutations: Anagrams within a larger string</li>

<p>2. Character Frequency Patterns</p>

The key insight is that related strings share frequency patterns:
<li>Same characters appear the same number of times</li>
<li>Order doesn't matter for frequency counting</li>
<li>Frequencies can be compared directly</li>

<p>3. Common Problem Types</p>

These patterns help solve various problems:
<li>Checking if two strings are anagrams</li>
<li>Finding all anagrams in a word list</li>
<li>Locating permutations in a longer string</li>
<li>Grouping related strings together</li>

<h3><u>Dictionary-Based Solutions</u></h3>

<p>1. Character Counting</p>

Dictionaries excel at tracking frequencies:
<li>Each character maps to its count</li>
<li>Easy to update and compare counts</li>
<li>Efficient for both building and checking</li>

<p>2. Pattern Matching</p>

We can use dictionaries to:
<li>Create frequency fingerprints</li>
<li>Compare string patterns quickly</li>
<li>Group related strings efficiently</li>

<p>3. Optimization Techniques</p>

Several strategies improve performance:
<li>Early termination for mismatches</li>
<li>Sliding window for substring searches</li>
<li>Sorted string keys for grouping</li>`,

  codeExample: `# Comprehensive demonstration of anagram and permutation solutions

class AnagramSolver:
    def __init__(self):
        """Initialize with example cases for demonstration"""
        self.test_cases = [
            ("listen", "silent"),    # Basic anagram
            ("hello", "world"),      # Not anagram
            ("debit card", "bad credit")  # Phrase anagram
        ]
        
        self.text = "cbaebabacd"
        self.pattern = "abc"  # For finding permutations
    
    def are_anagrams(self, s1: str, s2: str) -> bool:
        """
        Determines if two strings are anagrams of each other.
        Handles spaces and punctuation based on requirements.
        
        Time: O(n), Space: O(k) where k is alphabet size
        
        Example:
        "heart" and "earth" are anagrams
        Both have: h=1, e=1, a=1, r=1, t=1
        """
        # Remove spaces and convert to lowercase if needed
        s1 = s1.replace(" ", "").lower()
        s2 = s2.replace(" ", "").lower()
        
        # Early termination check
        if len(s1) != len(s2):
            return False
        
        # Count characters in first string
        char_count = {}
        for char in s1:
            char_count[char] = char_count.get(char, 0) + 1
        
        # Check characters in second string
        for char in s2:
            if char not in char_count:
                return False
            char_count[char] -= 1
            if char_count[char] == 0:
                del char_count[char]
        
        # All counts should be zero
        return len(char_count) == 0
    
    def find_all_anagrams(self, text: str, pattern: str) -> list:
        """
        Finds all starting indices of pattern's anagrams in text.
        Uses sliding window with dictionary for efficient searching.
        
        Time: O(n), Space: O(k) where k is alphabet size
        
        Example:
        text = "cbaebabacd", pattern = "abc"
        Returns [0, 6] because:
        - "cba" at index 0 is an anagram of "abc"
        - "bac" at index 6 is an anagram of "abc"
        """
        if len(pattern) > len(text):
            return []
        
        # Create pattern frequency map
        pattern_freq = {}
        for char in pattern:
            pattern_freq[char] = pattern_freq.get(char, 0) + 1
        
        # Initialize window frequency map
        window_freq = {}
        result = []
        
        # Process first window
        for i in range(len(pattern)):
            char = text[i]
            window_freq[char] = window_freq.get(char, 0) + 1
        
        # Check first window
        if window_freq == pattern_freq:
            result.append(0)
        
        # Slide window and check remaining positions
        for i in range(len(pattern), len(text)):
            # Remove first character of previous window
            old_char = text[i - len(pattern)]
            window_freq[old_char] -= 1
            if window_freq[old_char] == 0:
                del window_freq[old_char]
            
            # Add new character
            new_char = text[i]
            window_freq[new_char] = window_freq.get(new_char, 0) + 1
            
            # Check current window
            if window_freq == pattern_freq:
                result.append(i - len(pattern) + 1)
        
        return result
    
    def group_anagrams(self, words: list) -> list:
        """
        Groups words that are anagrams of each other.
        Uses sorted strings as keys for grouping.
        
        Time: O(n * k log k) where k is max word length
        Space: O(n) for storing groups
        
        Example:
        ["eat", "tea", "tan", "ate", "nat", "bat"]
        Groups into:
        [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
        """
        # Use sorted string as key for anagram groups
        anagram_groups = {}
        
        for word in words:
            # Sort characters to create key
            sorted_word = ''.join(sorted(word))
            
            # Add word to its group
            if sorted_word in anagram_groups:
                anagram_groups[sorted_word].append(word)
            else:
                anagram_groups[sorted_word] = [word]
        
        # Return groups as list
        return list(anagram_groups.values())
    
    def find_permutations(self, s: str) -> list:
        """
        Finds all permutations of a string.
        Uses backtracking with frequency counting.
        
        Time: O(n!), Space: O(n)
        
        Example:
        "abc" yields ["abc", "acb", "bac", "bca", "cab", "cba"]
        """
        # Count character frequencies
        freq = {}
        for char in s:
            freq[char] = freq.get(char, 0) + 1
        
        def backtrack(freq, path, remaining):
            """Helper function for generating permutations"""
            if remaining == 0:
                result.append(''.join(path))
                return
            
            # Try each available character
            for char in freq:
                if freq[char] > 0:
                    # Use the character
                    freq[char] -= 1
                    path.append(char)
                    
                    # Recurse
                    backtrack(freq, path, remaining - 1)
                    
                    # Restore for backtracking
                    path.pop()
                    freq[char] += 1
        
        result = []
        backtrack(freq, [], len(s))
        return result`,

  exercises: [
    {
      prompt: 'Create a function that determines if any permutation of a string can form a palindrome. Use character frequency counting to solve this efficiently.',
      initialCode: `def can_form_palindrome(s: str) -> bool:
    """
    Check if any permutation of string can be a palindrome.
    
    A string can form a palindrome if:
    - All characters appear even number of times, or
    - All but one character appear even number of times
    
    Args:
        s: Input string
        
    Returns:
        bool: True if any permutation can form palindrome
    """
    # Your code here
    pass

# Test cases:
# "racecar" -> True (is already palindrome)
# "carrace" -> True (can become "racecar")
# "hello" -> False (no permutation is palindrome)`,
      solution: `def can_form_palindrome(s: str) -> bool:
    """
    Check if any permutation of string can be a palindrome.
    Uses dictionary to count character frequencies.
    """
    # Count character frequencies
    freq = {}
    for char in s:
        freq[char] = freq.get(char, 0) + 1
    
    # Count characters with odd frequencies
    odd_count = 0
    for count in freq.values():
        if count % 2 == 1:
            odd_count += 1
            # Early termination - more than one odd count
            if odd_count > 1:
                return False
    
    # Can form palindrome if at most one character
    # appears odd number of times
    return True`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'Why is character frequency counting more efficient than sorting for checking anagrams?',
      options: [
        'It uses less memory',
        'It can process longer strings',
        'It only needs one pass through each string and direct comparison',
        'It works with any character set',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Frequency counting might use more memory than in-place sorting.',
        'Incorrect. Both methods can handle strings of any length.',
        'Correct! O(n) frequency counting beats O(n log n) sorting, and comparing dictionaries is O(1).',
        'Incorrect. Both methods work with any character set.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the key insight that makes sliding window efficient for finding anagram substrings?',
      options: [
        'It sorts the strings first',
        'It compares frequencies instead of sorting each substring',
        'It uses less memory than other methods',
        'It can handle longer strings',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Sliding window doesn\'t require sorting.',
        'Correct! By maintaining a frequency dictionary that updates with the window, we avoid repeated work.',
        'Incorrect. Memory usage isn\'t the main advantage.',
        'Incorrect. String length doesn\'t determine method selection.',
      ],
      difficulty: Difficulty.Advanced,
    }
  ]
};

const arrayOperationsData = {
  title: 'Array Operations: Optimizing with Dictionaries',
  content: `<p>
Imagine you're comparing two libraries' book collections to find books they share or to combine their unique holdings. You could check each book in one library against every book in the other, but that would take an extremely long time with large collections. Instead, you might create a catalog (like a dictionary) of one library's books, making it much faster to check if the other library has matching books. This is exactly how we use dictionaries to optimize array operations – they give us fast lookups that transform slow comparisons into efficient operations.
</p>

<p>
When working with arrays, operations like finding intersections (common elements) or unions (all unique elements) can become very expensive with naive approaches. Dictionaries provide a powerful way to optimize these operations by trading some memory for dramatically improved speed.
</p>

<h3><u>Understanding Dictionary-Based Optimization</u></h3>

<p>
Let's explore how dictionaries transform array operations:
</p>

<p>1. Traditional Array Operations</p>
Without dictionaries, we often must:
<li>Compare each element against every other (O(n²))</li>
<li>Sort arrays first for better comparison (O(n log n))</li>
<li>Make multiple passes through the data</li>

<p>2. Dictionary-Enhanced Operations</p>
With dictionaries, we can:
<li>Check for elements in O(1) time</li>
<li>Track frequencies efficiently</li>
<li>Handle duplicates elegantly</li>

<p>3. Common Applications</p>
This pattern excels in several scenarios:
<li>Finding common elements between arrays</li>
<li>Combining unique elements from multiple arrays</li>
<li>Identifying missing or extra elements</li>
<li>Tracking element frequencies across arrays</li>

<h3><u>Key Operations</u></h3>

<p>1. Intersection</p>
Finding common elements between arrays:
<li>Build dictionary from first array</li>
<li>Check second array against dictionary</li>
<li>Handle duplicates based on requirements</li>

<p>2. Union</p>
Combining unique elements:
<li>Use dictionary to track all elements</li>
<li>Handle frequency requirements</li>
<li>Maintain element order if needed</li>

<p>3. Difference</p>
Finding elements in one array but not another:
<li>Build dictionary of exclusion set</li>
<li>Filter elements using dictionary</li>
<li>Track frequencies for complex cases</li>`,

  codeExample: `# Comprehensive demonstration of array operations using dictionaries

class ArrayOperations:
    def __init__(self):
        """Initialize with example arrays for demonstration"""
        self.array1 = [1, 2, 2, 3, 4, 5]
        self.array2 = [2, 2, 3, 3, 6, 7]
    
    def find_intersection(self, arr1: list, arr2: list) -> list:
        """
        Find common elements between two arrays.
        Handles duplicates based on minimum frequency.
        
        Time: O(n + m), Space: O(n) where n, m are array lengths
        
        Example:
        arr1 = [1, 2, 2, 3], arr2 = [2, 2, 3, 3]
        Returns [2, 2, 3] (common elements with correct frequencies)
        """
        # Count frequencies in first array
        freq1 = {}
        for num in arr1:
            freq1[num] = freq1.get(num, 0) + 1
        
        # Count frequencies in second array
        freq2 = {}
        for num in arr2:
            freq2[num] = freq2.get(num, 0) + 1
        
        # Build intersection based on minimum frequencies
        result = []
        for num in freq1:
            if num in freq2:
                # Add element minimum number of times it appears
                count = min(freq1[num], freq2[num])
                result.extend([num] * count)
        
        return sorted(result)  # Sort if order matters
    
    def find_union(self, arr1: list, arr2: list) -> list:
        """
        Find all unique elements from both arrays.
        Can handle duplicates and maintain maximum frequency.
        
        Time: O(n + m), Space: O(n + m)
        
        Example:
        arr1 = [1, 2, 2], arr2 = [2, 3, 3]
        Returns [1, 2, 2, 3, 3] (all elements with max frequency)
        """
        # Track maximum frequency for each element
        freq = {}
        
        # Process first array
        for num in arr1:
            freq[num] = freq.get(num, 0) + 1
        
        # Process second array, keeping maximum frequency
        for num in arr2:
            freq[num] = max(freq.get(num, 0) + 1, freq.get(num, 0))
        
        # Build result using maximum frequencies
        result = []
        for num in freq:
            result.extend([num] * freq[num])
        
        return sorted(result)  # Sort if order matters
    
    def find_difference(self, arr1: list, arr2: list) -> list:
        """
        Find elements in arr1 that aren't in arr2.
        Considers element frequencies.
        
        Time: O(n + m), Space: O(m)
        
        Example:
        arr1 = [1, 2, 2, 3], arr2 = [2, 3, 3]
        Returns [1, 2] (extra 2 from arr1 and 1 not in arr2)
        """
        # Count frequencies in second array
        freq2 = {}
        for num in arr2:
            freq2[num] = freq2.get(num, 0) + 1
        
        # Track elements that aren't in arr2 or exceed its frequency
        result = []
        freq1 = {}
        
        for num in arr1:
            freq1[num] = freq1.get(num, 0) + 1
            if num not in freq2 or freq1[num] > freq2[num]:
                result.append(num)
        
        return sorted(result)  # Sort if order matters
    
    def demonstrate_special_cases(self):
        """
        Shows how to handle various edge cases and special requirements.
        """
        # Empty array cases
        empty_intersection = self.find_intersection([], [1, 2, 3])  # []
        empty_union = self.find_union([], [])  # []
        
        # Single element arrays
        single_intersection = self.find_intersection([1], [1])  # [1]
        single_difference = self.find_difference([1], [2])  # [1]
        
        # Arrays with all same elements
        same_intersection = self.find_intersection([1, 1, 1], [1, 1])  # [1, 1]
        same_union = self.find_union([1, 1], [1, 1, 1])  # [1, 1, 1]
        
        return {
            "empty": empty_intersection,
            "single": single_intersection,
            "same": same_intersection
        }
    
    def find_multiple_array_intersection(self, arrays: list) -> list:
        """
        Find common elements across multiple arrays.
        Handles any number of input arrays efficiently.
        
        Time: O(n * k) where n is total elements, k is number of arrays
        Space: O(n)
        """
        if not arrays:
            return []
        
        # Count frequencies in first array
        result_freq = {}
        for num in arrays[0]:
            result_freq[num] = result_freq.get(num, 0) + 1
        
        # Intersect with each remaining array
        for arr in arrays[1:]:
            # Count frequencies in current array
            curr_freq = {}
            for num in arr:
                curr_freq[num] = curr_freq.get(num, 0) + 1
            
            # Update result frequencies
            new_freq = {}
            for num in result_freq:
                if num in curr_freq:
                    new_freq[num] = min(result_freq[num], curr_freq[num])
            
            result_freq = new_freq
        
        # Build final result
        result = []
        for num, freq in result_freq.items():
            result.extend([num] * freq)
        
        return sorted(result)`,

  exercises: [
    {
      prompt: 'Create a function that finds all elements that appear more times in one array than in another, maintaining the extra occurrences in the result.',
      initialCode: `def find_excess_elements(arr1: list, arr2: list) -> list:
    """
    Find elements that appear more frequently in arr1 than arr2.
    Return the excess occurrences.
    
    Example:
    arr1 = [1, 2, 2, 2, 3], arr2 = [2, 2, 3, 3]
    Returns [1, 2] (one 2 appears extra in arr1, plus 1)
    
    Args:
        arr1: First array
        arr2: Second array
        
    Returns:
        List of excess elements from arr1
    """
    # Your code here
    pass`,
      solution: `def find_excess_elements(arr1: list, arr2: list) -> list:
    """
    Find elements that appear more frequently in arr1 than arr2.
    Uses dictionaries to track and compare frequencies.
    """
    # Count frequencies in both arrays
    freq1 = {}
    freq2 = {}
    
    for num in arr1:
        freq1[num] = freq1.get(num, 0) + 1
    
    for num in arr2:
        freq2[num] = freq2.get(num, 0) + 1
    
    # Find excess elements
    result = []
    for num in freq1:
        # Calculate excess frequency
        excess = freq1[num] - freq2.get(num, 0)
        if excess > 0:
            # Add excess occurrences to result
            result.extend([num] * excess)
    
    return sorted(result)`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'Why is using a dictionary better than nested loops for finding common elements?',
      options: [
        'It uses less memory',
        'It always preserves element order',
        'It reduces time complexity from O(n²) to O(n)',
        'It can handle larger arrays',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Dictionary-based solutions often use more memory.',
        'Incorrect. Dictionaries don\'t naturally preserve order.',
        'Correct! Dictionary lookups are O(1), turning nested O(n²) comparisons into O(n) operations.',
        'Incorrect. While true, this is a result of better time complexity.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the key consideration when handling duplicates in array operations?',
      options: [
        'Sorting the arrays first',
        'Tracking frequencies in the dictionary',
        'Using multiple dictionaries',
        'Converting to sets',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Sorting isn\'t necessary with dictionary-based solutions.',
        'Correct! Tracking frequencies allows us to handle duplicates correctly based on their counts in each array.',
        'Incorrect. While sometimes useful, this isn\'t the key consideration.',
        'Incorrect. Sets would lose duplicate information.',
      ],
      difficulty: Difficulty.Advanced,
    }
  ]
};

const dictionaryLessons: Record<string, LessonContent> = {
  'dict-basics': dictBasicsData,
  'dict-creation': dictCreationData,
  'dict-vs-others': dictVsOthersData,
  'key-operations': keyOperationsData,
  'dict-methods': dictMethodsData,
  'key-existence': keyExistenceData,
  'dict-iteration': dictIterationData,
  'dict-comprehension': dictComprehensionData,
  'filtering-dict': filteringDictData,
  'transforming-dict': transformingDictData,
  'frequency-counter': frequencyCounterData,
  'grouping-pattern': groupingPatternData,
  'caching-pattern': cachingPatternData,
  'nested-dict': nestedDictData,
  'default-dict': defaultDictData,
  'counter-class': counterClassData,
  'hash-function': hashFunctionData,
  'collision-handling': collisionHandlingData,
  'time-space-complexity': timeSpaceComplexityAnalysisData,
  'two-sum-pattern': twoSumPatternData,
  'subarray-sum': subarraySumPatternData,
  'isomorphic-pattern': isomorphicPatternData,
  'lru-cache': lruCacheData,
  'graph-representation': graphRepresentationData,
  'trie-implementation': trieImplementationData,
  'sliding-window': slidingWindowData,
  'anagram-problems': anagramProblemsData,
  'array-operations': arrayOperationsData
};
export const dictionaryLessonsTab: LessonsTab = {
  curriculum: dictionaryCurriculum,
  lessons: dictionaryLessons,
};
