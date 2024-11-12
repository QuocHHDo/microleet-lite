import { Difficulty } from '@/common/commonConcept';
import { Curriculum, LessonContent, LessonsTab } from '@/common/commonLesson';

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
          description:
            'Understanding key-value pairs and dictionary properties',
        },
        {
          id: 'dict-creation',
          title: 'Creating Dictionaries',
          description: 'Different ways to initialize and create dictionaries',
        },
        {
          id: 'dict-vs-others',
          title: 'Dictionaries vs Other Data Structures',
          description: 'Comparing dictionaries with lists, sets, and arrays',
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
        },
        {
          id: 'dict-methods',
          title: 'Dictionary Methods',
          description:
            'Using get(), update(), pop(), clear(), and other methods',
        },
        {
          id: 'key-existence',
          title: 'Key Existence Checking',
          description: 'Different ways to check for key presence',
        },
        {
          id: 'dict-iteration',
          title: 'Dictionary Iteration',
          description: 'Iterating over keys, values, and items',
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
        },
        {
          id: 'filtering-dict',
          title: 'Filtering Dictionaries',
          description: 'Techniques for filtering dictionary entries',
        },
        {
          id: 'transforming-dict',
          title: 'Transforming Dictionaries',
          description: 'Mapping and transforming dictionary contents',
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
          description: 'Using dictionaries to count occurrences',
        },
        {
          id: 'grouping-pattern',
          title: 'Grouping Pattern',
          description: 'Grouping elements by common properties',
        },
        {
          id: 'caching-pattern',
          title: 'Caching Pattern',
          description: 'Using dictionaries for memoization and caching',
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
        },
        {
          id: 'default-dict',
          title: 'DefaultDict',
          description:
            'Using collections.defaultdict for automatic initialization',
        },
        {
          id: 'ordered-dict',
          title: 'OrderedDict',
          description: 'Working with ordered dictionaries',
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
        },
        {
          id: 'collision-handling',
          title: 'Collision Resolution',
          description: 'Techniques for handling hash collisions',
        },
        {
          id: 'load-factor',
          title: 'Load Factor and Rehashing',
          description: 'Understanding when and how to resize hash maps',
        },
      ],
    },
    {
      id: 7,
      title: 'Dictionary-based Algorithms',
      topics: [
        {
          id: 'two-sum-pattern',
          title: 'Two Sum Pattern',
          description: 'Using dictionaries for pair finding problems',
        },
        {
          id: 'subarray-sum',
          title: 'Subarray Sum Pattern',
          description: 'Finding subarrays with target sums',
        },
        {
          id: 'isomorphic-pattern',
          title: 'String Pattern Matching',
          description: 'Solving isomorphic strings and pattern matching',
        },
      ],
    },
    {
      id: 8,
      title: 'Time and Space Optimization',
      topics: [
        {
          id: 'space-complexity',
          title: 'Space Complexity Analysis',
          description: 'Understanding dictionary space usage',
        },
        {
          id: 'time-complexity',
          title: 'Time Complexity Optimization',
          description: 'Optimizing dictionary operations',
        },
        {
          id: 'memory-efficient',
          title: 'Memory-Efficient Dictionaries',
          description: 'Techniques for reducing memory usage',
        },
      ],
    },
    {
      id: 9,
      title: 'Advanced Applications',
      topics: [
        {
          id: 'lru-cache',
          title: 'LRU Cache Implementation',
          description: 'Building an LRU cache using dictionaries',
        },
        {
          id: 'graph-representation',
          title: 'Graph Representation',
          description: 'Using dictionaries for graph problems',
        },
        {
          id: 'trie-implementation',
          title: 'Trie Implementation',
          description: 'Implementing tries using dictionaries',
        },
      ],
    },
    {
      id: 10,
      title: 'Dictionary Problem Patterns',
      topics: [
        {
          id: 'sliding-window',
          title: 'Sliding Window with Dictionaries',
          description: 'Using dictionaries in sliding window problems',
        },
        {
          id: 'anagram-problems',
          title: 'Anagram and Permutation',
          description: 'Solving string permutation problems',
        },
        {
          id: 'array-intersection',
          title: 'Array Intersection/Union',
          description: 'Finding common elements using dictionaries',
        },
      ],
    },
    {
      id: 11,
      title: 'Special Dictionary Types',
      topics: [
        {
          id: 'counter-class',
          title: 'Counter Class',
          description: 'Using collections.Counter for counting',
        },
        {
          id: 'bidict',
          title: 'Bidirectional Dictionaries',
          description: 'Working with bidirectional mappings',
        },
        {
          id: 'frozen-dict',
          title: 'Immutable Dictionaries',
          description: 'Working with immutable dictionary types',
        },
      ],
    },
    {
      id: 12,
      title: 'System Design with Dictionaries',
      topics: [
        {
          id: 'consistent-hashing',
          title: 'Consistent Hashing',
          description: 'Understanding distributed hash tables',
        },
        {
          id: 'cache-design',
          title: 'Cache System Design',
          description: 'Designing caching systems with dictionaries',
        },
      ],
    },
  ],
} as const;
const dictBasicsData: LessonContent = {
  title: 'Dictionary Basics',
  content: `<p>
Dictionaries are a fundamental data structure in many programming languages, including Python. 
They store data in key-value pairs, allowing for efficient lookups and modifications. 
Understanding the basic properties of dictionaries is crucial for effectively using them in your code.
</p>

<ul>
<li><strong>Key-Value Pairs:</strong> Dictionaries store data as key-value pairs, where each key is unique and maps to a specific value.</li>
<li><strong>Unordered:</strong> Dictionaries are unordered collections, meaning the order of elements is not guaranteed.</li>
<li><strong>Mutable:</strong> Dictionaries are mutable, allowing you to add, remove, and modify key-value pairs.</li>
<li><strong>Hashable Keys:</strong> Keys in a dictionary must be hashable, meaning they must have a hash value that does not change during their lifetime.</li>
</ul>`,
  codeExample: `# Dictionary Basics Example
student = {
    "name": "Alice",
    "age": 20,
    "major": "Computer Science"
}

# Accessing values
print(student["name"])  # Output: Alice

# Modifying values
student["age"] = 21
print(student["age"])  # Output: 21

# Adding new key-value pairs
student["year"] = 3
print(student)  # Output: {'name': 'Alice', 'age': 21, 'major': 'Computer Science', 'year': 3}

# Removing key-value pairs
del student["year"]
print(student)  # Output: {'name': 'Alice', 'age': 21, 'major': 'Computer Science'}`,
  exercises: [
    {
      prompt:
        'Create a dictionary to store information about a book, including its title, author, and publication year. Access and modify the values in the dictionary.',
      initialCode: `# Write your solution here
book = {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "year": 1925
}

# Accessing values
print(book["title"])  # Output: The Great Gatsby

# Modifying values
book["year"] = 1926
print(book["year"])  # Output: 1926

# Adding new key-value pairs
book["genre"] = "Fiction"
print(book)  # Output: {'title': 'The Great Gatsby', 'author': 'F. Scott Fitzgerald', 'year': 1926, 'genre': 'Fiction'}

# Removing key-value pairs
del book["genre"]
print(book)  # Output: {'title': 'The Great Gatsby', 'author': 'F. Scott Fitzgerald', 'year': 1926}`,
      solution: `book = {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "year": 1925
}

# Accessing values
print(book["title"])  # Output: The Great Gatsby

# Modifying values
book["year"] = 1926
print(book["year"])  # Output: 1926

# Adding new key-value pairs
book["genre"] = "Fiction"
print(book)  # Output: {'title': 'The Great Gatsby', 'author': 'F. Scott Fitzgerald', 'year': 1926, 'genre': 'Fiction'}

# Removing key-value pairs
del book["genre"]
print(book)  # Output: {'title': 'The Great Gatsby', 'author': 'F. Scott Fitzgerald', 'year': 1926}`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following statements about dictionaries is true?',
      options: [
        'Dictionaries are ordered collections of key-value pairs.',
        'Dictionaries are immutable.',
        'Keys in a dictionary must be unique.',
        'Values in a dictionary must be hashable.',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect because dictionaries are unordered collections.',
        'This is incorrect because dictionaries are mutable.',
        'This is correct. Keys in a dictionary must be unique.',
        'This is incorrect because only keys in a dictionary must be hashable, not values.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'What is the primary advantage of using dictionaries over lists for storing data?',
      options: [
        'Dictionaries are faster for lookups.',
        'Dictionaries can store more data.',
        'Dictionaries are always ordered.',
        'Dictionaries are immutable.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. Dictionaries are faster for lookups due to their key-value structure.',
        'This is incorrect because the amount of data a dictionary can store is not its primary advantage.',
        'This is incorrect because dictionaries are unordered.',
        'This is incorrect because dictionaries are mutable.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const dictCreationData: LessonContent = {
  title: 'Creating Dictionaries',
  content: `<p>
Creating dictionaries in Python can be done in several ways, depending on your needs. 
Understanding these methods allows you to choose the most appropriate way to create dictionaries for your specific use case.
</p>

<ul>
<li><strong>Literal Notation:</strong> Creating a dictionary using curly braces and key-value pairs.</li>
<li><strong>Constructor:</strong> Using the dict() constructor to create a dictionary from various iterable types.</li>
<li><strong>From Lists:</strong> Creating a dictionary from two lists, one for keys and one for values.</li>
<li><strong>From Tuples:</strong> Creating a dictionary from a list of tuples, where each tuple contains a key-value pair.</li>
</ul>`,
  codeExample: `# Literal Notation
student = {
    "name": "Alice",
    "age": 20,
    "major": "Computer Science"
}

# Constructor
student = dict(name="Alice", age=20, major="Computer Science")

# From Lists
keys = ["name", "age", "major"]
values = ["Alice", 20, "Computer Science"]
student = dict(zip(keys, values))

# From Tuples
pairs = [("name", "Alice"), ("age", 20), ("major", "Computer Science")]
student = dict(pairs)`,
  exercises: [
    {
      prompt:
        'Create a dictionary to store information about a book using literal notation, the dict() constructor, and from lists. Use the provided code as a reference.',
      initialCode: `# Write your solution here
# Literal Notation
book = {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "year": 1925
}

# Constructor
book = dict(title="The Great Gatsby", author="F. Scott Fitzgerald", year=1925)

# From Lists
keys = ["title", "author", "year"]
values = ["The Great Gatsby", "F. Scott Fitzgerald", 1925]
book = dict(zip(keys, values))`,
      solution: `# Literal Notation
book = {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "year": 1925
}

# Constructor
book = dict(title="The Great Gatsby", author="F. Scott Fitzgerald", year=1925)

# From Lists
keys = ["title", "author", "year"]
values = ["The Great Gatsby", "F. Scott Fitzgerald", 1925]
book = dict(zip(keys, values))`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to create a dictionary using literal notation?',
      options: [
        '{"name": "Alice", "age": 20}',
        'dict(name="Alice", age=20)',
        'zip(["name", "age"], ["Alice", 20])',
        '[("name", "Alice"), ("age", 20)]',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. This is the literal notation for creating a dictionary.',
        'This is incorrect because this is the constructor method.',
        'This is incorrect because this is the zip function, not a dictionary.',
        'This is incorrect because this is a list of tuples, not a dictionary.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following methods can be used to create a dictionary from two lists?',
      options: [
        'Literal Notation',
        'Constructor',
        'From Lists',
        'From Tuples',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect because literal notation does not use lists.',
        'This is incorrect because the constructor method does not directly use lists.',
        'This is correct. The zip function can be used to create a dictionary from two lists.',
        'This is incorrect because this method uses tuples, not lists.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const dictVsOthersData: LessonContent = {
  title: 'Dictionaries vs Other Data Structures',
  content: `<p>
Dictionaries are often compared to other data structures like lists, sets, and arrays. 
Understanding the differences and use cases for each can help you choose the most appropriate data structure for your needs.
</p>

<ul>
<li><strong>Dictionaries vs Lists:</strong> Dictionaries are unordered and use key-value pairs, while lists are ordered and use integer indices.</li>
<li><strong>Dictionaries vs Sets:</strong> Dictionaries store key-value pairs, while sets store unique elements without any associated values.</li>
<li><strong>Dictionaries vs Arrays:</strong> Dictionaries are more flexible in terms of key types, while arrays are typically used for numerical data and have fixed types.</li>
</ul>`,
  codeExample: `# Dictionaries vs Lists
student_dict = {
    "name": "Alice",
    "age": 20,
    "major": "Computer Science"
}

student_list = ["Alice", 20, "Computer Science"]

# Dictionaries vs Sets
student_dict = {
    "name": "Alice",
    "age": 20,
    "major": "Computer Science"
}

student_set = {"Alice", 20, "Computer Science"}

# Dictionaries vs Arrays
import array

student_dict = {
    "name": "Alice",
    "age": 20,
    "major": "Computer Science"
}

student_array = array.array('i', [20])`,
  exercises: [
    {
      prompt:
        'Compare and contrast dictionaries with lists, sets, and arrays. Provide examples of each and explain when you might use one over the other.',
      initialCode: `# Write your solution here
# Dictionaries vs Lists
student_dict = {
    "name": "Alice",
    "age": 20,
    "major": "Computer Science"
}

student_list = ["Alice", 20, "Computer Science"]

# Dictionaries vs Sets
student_dict = {
    "name": "Alice",
    "age": 20,
    "major": "Computer Science"
}

student_set = {"Alice", 20, "Computer Science"}

# Dictionaries vs Arrays
import array

student_dict = {
    "name": "Alice",
    "age": 20,
    "major": "Computer Science"
}

student_array = array.array('i', [20])`,
      solution: `# Dictionaries vs Lists
student_dict = {
    "name": "Alice",
    "age": 20,
    "major": "Computer Science"
}

student_list = ["Alice", 20, "Computer Science"]

# Use dictionaries when you need key-value pairs for fast lookups.
# Use lists when you need an ordered collection of items.

# Dictionaries vs Sets
student_dict = {
    "name": "Alice",
    "age": 20,
    "major": "Computer Science"
}

student_set = {"Alice", 20, "Computer Science"}

# Use dictionaries when you need key-value pairs.
# Use sets when you need a collection of unique items without associated values.

# Dictionaries vs Arrays
import array

student_dict = {
    "name": "Alice",
    "age": 20,
    "major": "Computer Science"
}

student_array = array.array('i', [20])

# Use dictionaries when you need flexible key types and fast lookups.
# Use arrays when you need a fixed-type, numerical data structure.`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following data structures is best suited for storing key-value pairs?',
      options: [
        'List',
        'Set',
        'Dictionary',
        'Array',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect because lists do not store key-value pairs.',
        'This is incorrect because sets do not store key-value pairs.',
        'This is correct. Dictionaries are designed for storing key-value pairs.',
        'This is incorrect because arrays do not store key-value pairs.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of the following data structures is best suited for storing a collection of unique items?',
      options: [
        'List',
        'Set',
        'Dictionary',
        'Array',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect because lists can store duplicate items.',
        'This is correct. Sets are designed for storing unique items.',
        'This is incorrect because dictionaries store key-value pairs.',
        'This is incorrect because arrays can store duplicate items.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const keyOperationsData: LessonContent = {
  title: 'Key Operations',
  content: `<p>
Key operations in dictionaries involve adding, accessing, updating, and deleting key-value pairs. 
These operations are fundamental to working with dictionaries and are essential for manipulating data stored in them.
</p>

<ul>
<li><strong>Adding Keys:</strong> Adding new key-value pairs to a dictionary.</li>
<li><strong>Accessing Keys:</strong> Retrieving the value associated with a specific key.</li>
<li><strong>Updating Keys:</strong> Modifying the value associated with an existing key.</li>
<li><strong>Deleting Keys:</strong> Removing key-value pairs from a dictionary.</li>
</ul>`,
  codeExample: `# Key Operations Example
student = {
    "name": "Alice",
    "age": 20,
    "major": "Computer Science"
}

# Adding a new key-value pair
student["year"] = 3
print(student)  # Output: {'name': 'Alice', 'age': 20, 'major': 'Computer Science', 'year': 3}

# Accessing a key
print(student["name"])  # Output: Alice

# Updating a key
student["age"] = 21
print(student["age"])  # Output: 21

# Deleting a key
del student["year"]
print(student)  # Output: {'name': 'Alice', 'age': 21, 'major': 'Computer Science'}`,
  exercises: [
    {
      prompt:
        'Create a dictionary to store information about a book, including its title, author, and publication year. Add a new key-value pair for the genre, update the publication year, and delete the genre key.',
      initialCode: `# Write your solution here
book = {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "year": 1925
}

# Adding a new key-value pair
book["genre"] = "Fiction"
print(book)  # Output: {'title': 'The Great Gatsby', 'author': 'F. Scott Fitzgerald', 'year': 1925, 'genre': 'Fiction'}

# Accessing a key
print(book["title"])  # Output: The Great Gatsby

# Updating a key
book["year"] = 1926
print(book["year"])  # Output: 1926

# Deleting a key
del book["genre"]
print(book)  # Output: {'title': 'The Great Gatsby', 'author': 'F. Scott Fitzgerald', 'year': 1926}`,
      solution: `book = {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "year": 1925
}

# Adding a new key-value pair
book["genre"] = "Fiction"
print(book)  # Output: {'title': 'The Great Gatsby', 'author': 'F. Scott Fitzgerald', 'year': 1925, 'genre': 'Fiction'}

# Accessing a key
print(book["title"])  # Output: The Great Gatsby

# Updating a key
book["year"] = 1926
print(book["year"])  # Output: 1926

# Deleting a key
del book["genre"]
print(book)  # Output: {'title': 'The Great Gatsby', 'author': 'F. Scott Fitzgerald', 'year': 1926}`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following operations adds a new key-value pair to a dictionary?',
      options: [
        'del',
        'update',
        'add',
        'None of the above',
      ],
      correctAnswer: 3,
      explanations: [
        'This is incorrect because "del" deletes a key-value pair.',
        'This is incorrect because "update" updates an existing key-value pair or adds new ones if they do not exist.',
        'This is incorrect because "add" is not a valid operation for dictionaries.',
        'This is correct. The correct operation is to directly assign a value to a new key.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following operations deletes a key-value pair from a dictionary?',
      options: [
        'del',
        'update',
        'add',
        'None of the above',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. "del" is used to delete a key-value pair from a dictionary.',
        'This is incorrect because "update" updates an existing key-value pair or adds new ones if they do not exist.',
        'This is incorrect because "add" is not a valid operation for dictionaries.',
        'This is incorrect because "del" is the correct operation.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const dictMethodsData: LessonContent = {
  title: 'Dictionary Methods',
  content: `<p>
Dictionary methods provide additional functionality for working with dictionaries, such as retrieving values, updating dictionaries, removing items, and clearing dictionaries. 
Understanding these methods allows you to perform more complex operations efficiently.
</p>

<ul>
<li><strong>get():</strong> Retrieves the value associated with a key, with a default value if the key does not exist.</li>
<li><strong>update():</strong> Updates the dictionary with key-value pairs from another dictionary or an iterable of key-value pairs.</li>
<li><strong>pop():</strong> Removes and returns the value associated with a specified key.</li>
<li><strong>clear():</strong> Removes all key-value pairs from the dictionary.</li>
<li><strong>Other Methods:</strong> Methods like keys(), values(), and items() for iterating over keys, values, and key-value pairs.</li>
</ul>`,
  codeExample: `# Dictionary Methods Example
student = {
    "name": "Alice",
    "age": 20,
    "major": "Computer Science"
}

# Using get()
print(student.get("name"))  # Output: Alice
print(student.get("year", "Unknown"))  # Output: Unknown

# Using update()
student.update({"year": 3, "gpa": 3.8})
print(student)  # Output: {'name': 'Alice', 'age': 20, 'major': 'Computer Science', 'year': 3, 'gpa': 3.8}

# Using pop()
gpa = student.pop("gpa")
print(gpa)  # Output: 3.8
print(student)  # Output: {'name': 'Alice', 'age': 20, 'major': 'Computer Science', 'year': 3}

# Using clear()
student.clear()
print(student)  # Output: {}`,
  exercises: [
    {
      prompt:
        'Create a dictionary to store information about a book, including its title, author, and publication year. Use the get(), update(), pop(), and clear() methods to manipulate the dictionary.',
      initialCode: `# Write your solution here
book = {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "year": 1925
}

# Using get()
print(book.get("title"))  # Output: The Great Gatsby
print(book.get("genre", "Unknown"))  # Output: Unknown

# Using update()
book.update({"genre": "Fiction", "pages": 180})
print(book)  # Output: {'title': 'The Great Gatsby', 'author': 'F. Scott Fitzgerald', 'year': 1925, 'genre': 'Fiction', 'pages': 180}

# Using pop()
pages = book.pop("pages")
print(pages)  # Output: 180
print(book)  # Output: {'title': 'The Great Gatsby', 'author': 'F. Scott Fitzgerald', 'year': 1925, 'genre': 'Fiction'}

# Using clear()
book.clear()
print(book)  # Output: {}`,
      solution: `book = {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "year": 1925
}

# Using get()
print(book.get("title"))  # Output: The Great Gatsby
print(book.get("genre", "Unknown"))  # Output: Unknown

# Using update()
book.update({"genre": "Fiction", "pages": 180})
print(book)  # Output: {'title': 'The Great Gatsby', 'author': 'F. Scott Fitzgerald', 'year': 1925, 'genre': 'Fiction', 'pages': 180}

# Using pop()
pages = book.pop("pages")
print(pages)  # Output: 180
print(book)  # Output: {'title': 'The Great Gatsby', 'author': 'F. Scott Fitzgerald', 'year': 1925, 'genre': 'Fiction'}

# Using clear()
book.clear()
print(book)  # Output: {}`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following methods retrieves the value associated with a key, with a default value if the key does not exist?',
      options: [
        'get()',
        'update()',
        'pop()',
        'clear()',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The get() method retrieves the value associated with a key, with a default value if the key does not exist.',
        'This is incorrect because the update() method updates the dictionary with key-value pairs from another dictionary or an iterable.',
        'This is incorrect because the pop() method removes and returns the value associated with a specified key.',
        'This is incorrect because the clear() method removes all key-value pairs from the dictionary.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following methods removes all key-value pairs from a dictionary?',
      options: [
        'get()',
        'update()',
        'pop()',
        'clear()',
      ],
      correctAnswer: 3,
      explanations: [
        'This is incorrect because the get() method retrieves the value associated with a key, with a default value if the key does not exist.',
        'This is incorrect because the update() method updates the dictionary with key-value pairs from another dictionary or an iterable.',
        'This is incorrect because the pop() method removes and returns the value associated with a specified key.',
        'This is correct. The clear() method removes all key-value pairs from the dictionary.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const keyExistenceData: LessonContent = {
  title: 'Key Existence Checking',
  content: `<p>
Checking for the existence of a key in a dictionary is a common operation. 
Python provides several ways to check if a key is present in a dictionary, each with its own use case.
</p>

<ul>
<li><strong>in Operator:</strong> Checks if a key is in the dictionary.</li>
<li><strong>get() Method:</strong> Retrieves the value associated with a key, with a default value if the key does not exist.</li>
<li><strong>setdefault() Method:</strong> Retrieves the value associated with a key, or sets a default value if the key does not exist.</li>
<li><strong>has_key() Method:</strong> Deprecated in Python 3, but available in Python 2.</li>
</ul>`,
  codeExample: `# Key Existence Checking Example
student = {
    "name": "Alice",
    "age": 20,
    "major": "Computer Science"
}

# Using in operator
if "name" in student:
    print("Name exists")  # Output: Name exists

# Using get() method
age = student.get("age", "Unknown")
print(age)  # Output: 20

# Using setdefault() method
year = student.setdefault("year", 3)
print(year)  # Output: 3
print(student)  # Output: {'name': 'Alice', 'age': 20, 'major': 'Computer Science', 'year': 3}`,
  exercises: [
    {
      prompt:
        'Create a dictionary to store information about a book, including its title, author, and publication year. Use the in operator, get() method, and setdefault() method to check for key existence.',
      initialCode: `# Write your solution here
book = {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "year": 1925
}

# Using in operator
if "title" in book:
    print("Title exists")  # Output: Title exists

# Using get() method
genre = book.get("genre", "Unknown")
print(genre)  # Output: Unknown

# Using setdefault() method
pages = book.setdefault("pages", 180)
print(pages)  # Output: 180
print(book)  # Output: {'title': 'The Great Gatsby', 'author': 'F. Scott Fitzgerald', 'year': 1925, 'pages': 180}`,
      solution: `book = {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "year": 1925
}

# Using in operator
if "title" in book:
    print("Title exists")  # Output: Title exists

# Using get() method
genre = book.get("genre", "Unknown")
print(genre)  # Output: Unknown

# Using setdefault() method
pages = book.setdefault("pages", 180)
print(pages)  # Output: 180
print(book)  # Output: {'title': 'The Great Gatsby', 'author': 'F. Scott Fitzgerald', 'year': 1925, 'pages': 180}`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following methods checks if a key is in a dictionary?',
      options: [
        'in operator',
        'get()',
        'setdefault()',
        'has_key()',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The in operator checks if a key is in the dictionary.',
        'This is incorrect because the get() method retrieves the value associated with a key, with a default value if the key does not exist.',
        'This is incorrect because the setdefault() method retrieves the value associated with a key, or sets a default value if the key does not exist.',
        'This is incorrect because the has_key() method is deprecated in Python 3.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following methods retrieves the value associated with a key, or sets a default value if the key does not exist?',
      options: [
        'in operator',
        'get()',
        'setdefault()',
        'has_key()',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect because the in operator checks if a key is in the dictionary.',
        'This is incorrect because the get() method retrieves the value associated with a key, with a default value if the key does not exist.',
        'This is correct. The setdefault() method retrieves the value associated with a key, or sets a default value if the key does not exist.',
        'This is incorrect because the has_key() method is deprecated in Python 3.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const dictIterationData: LessonContent = {
  title: 'Dictionary Iteration',
  content: `<p>
Iterating over dictionaries involves looping through the keys, values, or key-value pairs in a dictionary. 
Python provides several methods to iterate over dictionaries efficiently.
</p>

<ul>
<li><strong>keys():</strong> Returns a view object that displays a list of all the keys in the dictionary.</li>
<li><strong>values():</strong> Returns a view object that displays a list of all the values in the dictionary.</li>
<li><strong>items():</strong> Returns a view object that displays a list of a dictionary's key-value tuple pairs.</li>
<li><strong>for Loop:</strong> Iterates over the keys, values, or items using a for loop.</li>
</ul>`,
  codeExample: `# Dictionary Iteration Example
student = {
    "name": "Alice",
    "age": 20,
    "major": "Computer Science"
}

# Iterating over keys
for key in student.keys():
    print(key)  # Output: name, age, major

# Iterating over values
for value in student.values():
    print(value)  # Output: Alice, 20, Computer Science

# Iterating over items
for key, value in student.items():
    print(key, value)  # Output: name Alice, age 20, major Computer Science`,
  exercises: [
    {
      prompt:
        'Create a dictionary to store information about a book, including its title, author, and publication year. Use the keys(), values(), and items() methods to iterate over the dictionary.',
      initialCode: `# Write your solution here
book = {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "year": 1925
}

# Iterating over keys
for key in book.keys():
    print(key)  # Output: title, author, year

# Iterating over values
for value in book.values():
    print(value)  # Output: The Great Gatsby, F. Scott Fitzgerald, 1925

# Iterating over items
for key, value in book.items():
    print(key, value)  # Output: title The Great Gatsby, author F. Scott Fitzgerald, year 1925`,
      solution: `book = {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "year": 1925
}

# Iterating over keys
for key in book.keys():
    print(key)  # Output: title, author, year

# Iterating over values
for value in book.values():
    print(value)  # Output: The Great Gatsby, F. Scott Fitzgerald, 1925

# Iterating over items
for key, value in book.items():
    print(key, value)  # Output: title The Great Gatsby, author F. Scott Fitzgerald, year 1925`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following methods returns a view object that displays a list of all the keys in a dictionary?',
      options: [
        'keys()',
        'values()',
        'items()',
        'for loop',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The keys() method returns a view object that displays a list of all the keys in the dictionary.',
        'This is incorrect because the values() method returns a view object that displays a list of all the values in the dictionary.',
        'This is incorrect because the items() method returns a view object that displays a list of a dictionary\'s key-value tuple pairs.',
        'This is incorrect because the for loop is used to iterate over the keys, values, or items.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following methods returns a view object that displays a list of all the values in a dictionary?',
      options: [
        'keys()',
        'values()',
        'items()',
        'for loop',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect because the keys() method returns a view object that displays a list of all the keys in the dictionary.',
        'This is correct. The values() method returns a view object that displays a list of all the values in the dictionary.',
        'This is incorrect because the items() method returns a view object that displays a list of a dictionary\'s key-value tuple pairs.',
        'This is incorrect because the for loop is used to iterate over the keys, values, or items.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const dictComprehensionData: LessonContent = {
  title: 'Dictionary Comprehension',
  content: `<p>
Dictionary comprehension is a concise way to create dictionaries in Python. 
It allows you to generate dictionaries using a single line of code, making your code more readable and efficient.
</p>

<ul>
<li><strong>Basic Syntax:</strong> {key: value for (key, value) in iterable}</li>
<li><strong>Conditional Comprehension:</strong> {key: value for (key, value) in iterable if condition}</li>
<li><strong>Nested Comprehension:</strong> Creating dictionaries with nested structures using comprehensions.</li>
</ul>`,
  codeExample: `# Dictionary Comprehension Example
# Basic Syntax
squares = {x: x**2 for x in range(1, 6)}
print(squares)  # Output: {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# Conditional Comprehension
even_squares = {x: x**2 for x in range(1, 6) if x % 2 == 0}
print(even_squares)  # Output: {2: 4, 4: 16}

# Nested Comprehension
nested_dict = {k1: {k2: k1 * k2 for k2 in range(1, 4)} for k1 in range(1, 4)}
print(nested_dict)  # Output: {1: {1: 1, 2: 2, 3: 3}, 2: {1: 2, 2: 4, 3: 6}, 3: {1: 3, 2: 6, 3: 9}}`,
  exercises: [
    {
      prompt:
        'Create a dictionary using dictionary comprehension to map each letter in the alphabet to its position (A=1, B=2, ..., Z=26). Use the provided code as a reference.',
      initialCode: `# Write your solution here
import string

alphabet_positions = {letter: index for index, letter in enumerate(string.ascii_uppercase, start=1)}
print(alphabet_positions)  # Output: {'A': 1, 'B': 2, ..., 'Z': 26}`,
      solution: `import string

alphabet_positions = {letter: index for index, letter in enumerate(string.ascii_uppercase, start=1)}
print(alphabet_positions)  # Output: {'A': 1, 'B': 2, ..., 'Z': 26}`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct syntax for dictionary comprehension?',
      options: [
        '{key: value for (key, value) in iterable}',
        '[key: value for (key, value) in iterable]',
        '(key: value for (key, value) in iterable)',
        '{key: value in iterable}',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The correct syntax for dictionary comprehension is {key: value for (key, value) in iterable}.',
        'This is incorrect because the square brackets are used for list comprehensions, not dictionary comprehensions.',
        'This is incorrect because parentheses are not used for dictionary comprehensions.',
        'This is incorrect because the syntax is incomplete and does not include the "for" keyword.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of the following is an example of conditional dictionary comprehension?',
      options: [
        '{x: x**2 for x in range(1, 6)}',
        '{x: x**2 for x in range(1, 6) if x % 2 == 0}',
        '{x: x**2 for x in range(1, 6) else x**3}',
        '{x: x**2 if x % 2 == 0 else x**3 for x in range(1, 6)}',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect because it does not include a condition.',
        'This is correct. This is an example of conditional dictionary comprehension.',
        'This is incorrect because the "else" keyword is not used in dictionary comprehensions.',
        'This is incorrect because the "else" keyword is not used in dictionary comprehensions.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const filteringDictData: LessonContent = {
  title: 'Filtering Dictionaries',
  content: `<p>
Filtering dictionaries involves creating a new dictionary that contains only the key-value pairs that meet certain criteria. 
This can be done using dictionary comprehension with conditions or by using the filter() function.
</p>

<ul>
<li><strong>Dictionary Comprehension with Conditions:</strong> {key: value for (key, value) in dictionary.items() if condition}</li>
<li><strong>filter() Function:</strong> Using the filter() function to filter dictionary items.</li>
<li><strong>Lambda Functions:</strong> Using lambda functions to define filtering conditions.</li>
</ul>`,
  codeExample: `# Filtering Dictionaries Example
# Dictionary Comprehension with Conditions
student_scores = {
    "Alice": 85,
    "Bob": 70,
    "Charlie": 90,
    "David": 60
}

high_scores = {name: score for name, score in student_scores.items() if score >= 80}
print(high_scores)  # Output: {'Alice': 85, 'Charlie': 90}

# filter() Function
high_scores = dict(filter(lambda item: item[1] >= 80, student_scores.items()))
print(high_scores)  # Output: {'Alice': 85, 'Charlie': 90}`,
  exercises: [
    {
      prompt:
        'Create a dictionary to store the scores of students. Use dictionary comprehension to filter out students who scored below 70.',
      initialCode: `# Write your solution here
student_scores = {
    "Alice": 85,
    "Bob": 70,
    "Charlie": 90,
    "David": 60
}

passing_scores = {name: score for name, score in student_scores.items() if score >= 70}
print(passing_scores)  # Output: {'Alice': 85, 'Bob': 70, 'Charlie': 90}`,
      solution: `student_scores = {
    "Alice": 85,
    "Bob": 70,
    "Charlie": 90,
    "David": 60
}

passing_scores = {name: score for name, score in student_scores.items() if score >= 70}
print(passing_scores)  # Output: {'Alice': 85, 'Bob': 70, 'Charlie': 90}`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following methods can be used to filter dictionary entries?',
      options: [
        'Dictionary Comprehension with Conditions',
        'filter() Function',
        'Lambda Functions',
        'All of the above',
      ],
      correctAnswer: 3,
      explanations: [
        'This is correct. Dictionary comprehension with conditions can be used to filter dictionary entries.',
        'This is correct. The filter() function can be used to filter dictionary entries.',
        'This is correct. Lambda functions can be used to define filtering conditions.',
        'This is correct. All of the above methods can be used to filter dictionary entries.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of the following is an example of filtering a dictionary using dictionary comprehension with conditions?',
      options: [
        '{name: score for name, score in student_scores.items() if score >= 80}',
        'filter(lambda item: item[1] >= 80, student_scores.items())',
        '{name: score for name, score in student_scores.items()}',
        '{name: score if score >= 80 else 0 for name, score in student_scores.items()}',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. This is an example of filtering a dictionary using dictionary comprehension with conditions.',
        'This is incorrect because it uses the filter() function, not dictionary comprehension.',
        'This is incorrect because it does not include a condition.',
        'This is incorrect because it uses the "else" keyword, which is not used in dictionary comprehension.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const transformingDictData: LessonContent = {
  title: 'Transforming Dictionaries',
  content: `<p>
Transforming dictionaries involves creating a new dictionary where the keys or values are modified based on certain rules. 
This can be done using dictionary comprehension or by using the map() function.
</p>

<ul>
<li><strong>Dictionary Comprehension:</strong> {new_key: new_value for (key, value) in dictionary.items()}</li>
<li><strong>map() Function:</strong> Using the map() function to transform dictionary values.</li>
<li><strong>Lambda Functions:</strong> Using lambda functions to define transformation rules.</li>
</ul>`,
  codeExample: `# Transforming Dictionaries Example
# Dictionary Comprehension
student_scores = {
    "Alice": 85,
    "Bob": 70,
    "Charlie": 90,
    "David": 60
}

scaled_scores = {name: score * 1.1 for name, score in student_scores.items()}
print(scaled_scores)  # Output: {'Alice': 93.5, 'Bob': 77.0, 'Charlie': 99.0, 'David': 66.0}

# map() Function
scaled_scores = dict(map(lambda item: (item[0], item[1] * 1.1), student_scores.items()))
print(scaled_scores)  # Output: {'Alice': 93.5, 'Bob': 77.0, 'Charlie': 99.0, 'David': 66.0}`,
  exercises: [
    {
      prompt:
        'Create a dictionary to store the scores of students. Use dictionary comprehension to transform the scores by adding 5 points to each score.',
      initialCode: `# Write your solution here
student_scores = {
    "Alice": 85,
    "Bob": 70,
    "Charlie": 90,
    "David": 60
}

adjusted_scores = {name: score + 5 for name, score in student_scores.items()}
print(adjusted_scores)  # Output: {'Alice': 90, 'Bob': 75, 'Charlie': 95, 'David': 65}`,
      solution: `student_scores = {
    "Alice": 85,
    "Bob": 70,
    "Charlie": 90,
    "David": 60
}

adjusted_scores = {name: score + 5 for name, score in student_scores.items()}
print(adjusted_scores)  # Output: {'Alice': 90, 'Bob': 75, 'Charlie': 95, 'David': 65}`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following methods can be used to transform dictionary values?',
      options: [
        'Dictionary Comprehension',
        'map() Function',
        'Lambda Functions',
        'All of the above',
      ],
      correctAnswer: 3,
      explanations: [
        'This is correct. Dictionary comprehension can be used to transform dictionary values.',
        'This is correct. The map() function can be used to transform dictionary values.',
        'This is correct. Lambda functions can be used to define transformation rules.',
        'This is correct. All of the above methods can be used to transform dictionary values.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of the following is an example of transforming a dictionary using dictionary comprehension?',
      options: [
        '{name: score * 1.1 for name, score in student_scores.items()}',
        'map(lambda item: (item[0], item[1] * 1.1), student_scores.items())',
        '{name: score for name, score in student_scores.items()}',
        '{name: score * 1.1 if score >= 80 else score for name, score in student_scores.items()}',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. This is an example of transforming a dictionary using dictionary comprehension.',
        'This is incorrect because it uses the map() function, not dictionary comprehension.',
        'This is incorrect because it does not include a transformation rule.',
        'This is incorrect because it uses the "else" keyword, which is not used in dictionary comprehension.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const frequencyCounterData: LessonContent = {
  title: 'Frequency Counter Pattern',
  content: `<p>
The frequency counter pattern is a common technique used to count the occurrences of elements in a collection. 
Dictionaries are well-suited for this task because they allow for efficient lookups and updates.
</p>

<ul>
<li><strong>Counting Elements:</strong> Using a dictionary to count the occurrences of each element in a list or other iterable.</li>
<li><strong>Applications:</strong> Used in various applications such as word frequency analysis, data analysis, and more.</li>
</ul>`,
  codeExample: `# Frequency Counter Pattern Example
# Counting elements in a list
words = ["apple", "banana", "apple", "orange", "banana", "apple"]
word_count = {}

for word in words:
    if word in word_count:
        word_count[word] += 1
    else:
        word_count[word] = 1

print(word_count)  # Output: {'apple': 3, 'banana': 2, 'orange': 1}

# Using defaultdict for cleaner code
from collections import defaultdict

word_count = defaultdict(int)

for word in words:
    word_count[word] += 1

print(dict(word_count))  # Output: {'apple': 3, 'banana': 2, 'orange': 1}`,
  exercises: [
    {
      prompt:
        'Create a function to count the frequency of each character in a given string. Use the provided code as a reference.',
      initialCode: `# Write your solution here
from collections import defaultdict

def count_characters(s):
    char_count = defaultdict(int)
    for char in s:
        char_count[char] += 1
    return dict(char_count)

# Example usage
print(count_characters("hello"))  # Output: {'h': 1, 'e': 1, 'l': 2, 'o': 1}`,
      solution: `from collections import defaultdict

def count_characters(s):
    char_count = defaultdict(int)
    for char in s:
        char_count[char] += 1
    return dict(char_count)

# Example usage
print(count_characters("hello"))  # Output: {'h': 1, 'e': 1, 'l': 2, 'o': 1}`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following data structures is best suited for counting the frequency of elements in a collection?',
      options: [
        'List',
        'Set',
        'Dictionary',
        'Array',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect because lists do not provide efficient lookups for counting occurrences.',
        'This is incorrect because sets only store unique elements and do not count occurrences.',
        'This is correct. Dictionaries are well-suited for counting occurrences due to their efficient lookups and updates.',
        'This is incorrect because arrays are typically used for numerical data and do not provide efficient lookups for counting occurrences.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of the following methods can be used to count the frequency of elements in a list?',
      options: [
        'Using a for loop and a dictionary',
        'Using the count() method',
        'Using the defaultdict class from the collections module',
        'All of the above',
      ],
      correctAnswer: 3,
      explanations: [
        'This is correct. Using a for loop and a dictionary is a common method for counting frequencies.',
        'This is correct. The count() method can be used to count occurrences of a specific element in a list.',
        'This is correct. The defaultdict class from the collections module provides a cleaner way to count frequencies.',
        'This is correct. All of the above methods can be used to count the frequency of elements in a list.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const groupingPatternData: LessonContent = {
  title: 'Grouping Pattern',
  content: `<p>
The grouping pattern involves organizing elements into groups based on common properties. 
Dictionaries are useful for this task because they allow for efficient lookups and grouping of elements.
</p>

<ul>
<li><strong>Grouping Elements:</strong> Using a dictionary to group elements based on a common property.</li>
<li><strong>Applications:</strong> Used in various applications such as data analysis, grouping data by categories, and more.</li>
</ul>`,
  codeExample: `# Grouping Pattern Example
# Grouping students by their major
students = [
    {"name": "Alice", "major": "Computer Science"},
    {"name": "Bob", "major": "Mathematics"},
    {"name": "Charlie", "major": "Computer Science"},
    {"name": "David", "major": "Physics"}
]

student_groups = {}

for student in students:
    major = student["major"]
    if major in student_groups:
        student_groups[major].append(student["name"])
    else:
        student_groups[major] = [student["name"]]

print(student_groups)  # Output: {'Computer Science': ['Alice', 'Charlie'], 'Mathematics': ['Bob'], 'Physics': ['David']}

# Using defaultdict for cleaner code
from collections import defaultdict

student_groups = defaultdict(list)

for student in students:
    student_groups[student["major"]].append(student["name"])

print(dict(student_groups))  # Output: {'Computer Science': ['Alice', 'Charlie'], 'Mathematics': ['Bob'], 'Physics': ['David']}`,
  exercises: [
    {
      prompt:
        'Create a function to group a list of words by their first letter. Use the provided code as a reference.',
      initialCode: `# Write your solution here
from collections import defaultdict

def group_words_by_first_letter(words):
    word_groups = defaultdict(list)
    for word in words:
        first_letter = word[0]
        word_groups[first_letter].append(word)
    return dict(word_groups)

# Example usage
words = ["apple", "banana", "cherry", "date", "elderberry"]
print(group_words_by_first_letter(words))  # Output: {'a': ['apple'], 'b': ['banana'], 'c': ['cherry'], 'd': ['date'], 'e': ['elderberry']}`,
      solution: `from collections import defaultdict

def group_words_by_first_letter(words):
    word_groups = defaultdict(list)
    for word in words:
        first_letter = word[0]
        word_groups[first_letter].append(word)
    return dict(word_groups)

# Example usage
words = ["apple", "banana", "cherry", "date", "elderberry"]
print(group_words_by_first_letter(words))  # Output: {'a': ['apple'], 'b': ['banana'], 'c': ['cherry'], 'd': ['date'], 'e': ['elderberry']}`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following data structures is best suited for grouping elements by common properties?',
      options: [
        'List',
        'Set',
        'Dictionary',
        'Array',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect because lists do not provide efficient lookups for grouping elements.',
        'This is incorrect because sets only store unique elements and do not group elements.',
        'This is correct. Dictionaries are well-suited for grouping elements due to their efficient lookups and ability to store key-value pairs.',
        'This is incorrect because arrays are typically used for numerical data and do not provide efficient lookups for grouping elements.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of the following methods can be used to group elements by common properties?',
      options: [
        'Using a for loop and a dictionary',
        'Using the groupby() function from the itertools module',
        'Using the defaultdict class from the collections module',
        'All of the above',
      ],
      correctAnswer: 3,
      explanations: [
        'This is correct. Using a for loop and a dictionary is a common method for grouping elements.',
        'This is correct. The groupby() function from the itertools module can be used to group elements by common properties.',
        'This is correct. The defaultdict class from the collections module provides a cleaner way to group elements.',
        'This is correct. All of the above methods can be used to group elements by common properties.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const cachingPatternData: LessonContent = {
  title: 'Caching Pattern',
  content: `<p>
The caching pattern involves storing the results of expensive or frequently accessed operations in a dictionary to avoid redundant computations. 
This technique is also known as memoization and is commonly used in dynamic programming and optimization problems.
</p>

<ul>
<li><strong>Memoization:</strong> Storing the results of expensive function calls and reusing them when the same inputs occur again.</li>
<li><strong>Applications:</strong> Used in various applications such as dynamic programming, optimization, and more.</li>
</ul>`,
  codeExample: `# Caching Pattern Example
# Memoization of Fibonacci sequence
def fibonacci(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 2:
        return 1
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
    return memo[n]

# Example usage
print(fibonacci(10))  # Output: 55

# Using lru_cache for cleaner code
from functools import lru_cache

@lru_cache(maxsize=None)
def fibonacci(n):
    if n <= 2:
        return 1
    return fibonacci(n - 1) + fibonacci(n - 2)

# Example usage
print(fibonacci(10))  # Output: 55`,
  exercises: [
    {
      prompt:
        'Create a function to compute the factorial of a number using memoization. Use the provided code as a reference.',
      initialCode: `# Write your solution here
def factorial(n, memo={}):
    if n in memo:
        return memo[n]
    if n == 0 or n == 1:
        return 1
    memo[n] = n * factorial(n - 1, memo)
    return memo[n]

# Example usage
print(factorial(5))  # Output: 120`,
      solution: `def factorial(n, memo={}):
    if n in memo:
        return memo[n]
    if n == 0 or n == 1:
        return 1
    memo[n] = n * factorial(n - 1, memo)
    return memo[n]

# Example usage
print(factorial(5))  # Output: 120`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following techniques is used to avoid redundant computations in recursive functions?',
      options: [
        'Memoization',
        'Dynamic Programming',
        'Caching',
        'All of the above',
      ],
      correctAnswer: 3,
      explanations: [
        'This is correct. Memoization is a technique used to avoid redundant computations by storing the results of expensive function calls.',
        'This is correct. Dynamic programming often uses memoization to avoid redundant computations.',
        'This is correct. Caching is another term for memoization and is used to avoid redundant computations.',
        'This is correct. All of the above techniques are used to avoid redundant computations in recursive functions.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of the following methods can be used to implement memoization in Python?',
      options: [
        'Using a dictionary to store results',
        'Using the lru_cache decorator from the functools module',
        'Using the defaultdict class from the collections module',
        'All of the above',
      ],
      correctAnswer: 3,
      explanations: [
        'This is correct. Using a dictionary to store results is a common method for implementing memoization.',
        'This is correct. The lru_cache decorator from the functools module provides a convenient way to implement memoization.',
        'This is incorrect. The defaultdict class from the collections module is used for grouping elements, not for memoization.',
        'This is correct. Both using a dictionary and the lru_cache decorator can be used to implement memoization in Python.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const nestedDictData: LessonContent = {
  title: 'Nested Dictionaries',
  content: `<p>
Nested dictionaries in Python are dictionaries that contain other dictionaries as their values. 
This allows for the creation of complex data structures that can represent hierarchical data. 
Here's how you can work with nested dictionaries:
</p>

<ul>
<li><strong>Accessing Nested Elements:</strong> You can access elements in a nested dictionary by chaining keys.</li>
<li><strong>Modifying Nested Elements:</strong> You can modify elements by assigning new values to the nested keys.</li>
<li><strong>Adding New Nested Elements:</strong> You can add new keys and values to an existing nested dictionary.</li>
<li><strong>Iterating Over Nested Dictionaries:</strong> You can use nested loops to iterate over all elements in a nested dictionary.</li>
</ul>`,
  codeExample: `# Example of a nested dictionary
nested_dict = {
    'person1': {
        'name': 'Alice',
        'age': 30,
        'address': {
            'city': 'New York',
            'zip': '10001'
        }
    },
    'person2': {
        'name': 'Bob',
        'age': 25,
        'address': {
            'city': 'Los Angeles',
            'zip': '90001'
        }
    }
}

# Accessing nested elements
print(nested_dict['person1']['name'])  # Output: Alice
print(nested_dict['person1']['address']['city'])  # Output: New York

# Modifying nested elements
nested_dict['person1']['age'] = 31
print(nested_dict['person1']['age'])  # Output: 31

# Adding new nested elements
nested_dict['person1']['address']['country'] = 'USA'
print(nested_dict['person1']['address']['country'])  # Output: USA

# Iterating over nested dictionaries
for person, details in nested_dict.items():
    print(f"Person: {person}")
    for key, value in details.items():
        print(f"  {key}: {value}")`,
  exercises: [
    {
      prompt: 'Create a nested dictionary to store information about a book, including its title, author, and a nested dictionary for chapters with their titles and page numbers.',
      initialCode: `# Write your solution here
book_info = {
    'title': '',
    'author': '',
    'chapters': {
        'Chapter 1': {'title': '', 'page': 1},
        'Chapter 2': {'title': '', 'page': 10},
    }
}`,
      solution: `book_info = {
    'title': 'Python Programming',
    'author': 'John Doe',
    'chapters': {
        'Chapter 1': {'title': 'Introduction', 'page': 1},
        'Chapter 2': {'title': 'Data Structures', 'page': 10},
    }
}`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Modify the nested dictionary to add a new chapter and update the page number of an existing chapter.',
      initialCode: `# Write your solution here
book_info = {
    'title': 'Python Programming',
    'author': 'John Doe',
    'chapters': {
        'Chapter 1': {'title': 'Introduction', 'page': 1},
        'Chapter 2': {'title': 'Data Structures', 'page': 10},
    }
}

# Add a new chapter
book_info['chapters']['Chapter 3'] = {'title': '', 'page': 20}

# Update the page number of Chapter 1
book_info['chapters']['Chapter 1']['page'] = `,
      solution: `book_info = {
    'title': 'Python Programming',
    'author': 'John Doe',
    'chapters': {
        'Chapter 1': {'title': 'Introduction', 'page': 1},
        'Chapter 2': {'title': 'Data Structures', 'page': 10},
    }
}

# Add a new chapter
book_info['chapters']['Chapter 3'] = {'title': 'Functions', 'page': 20}

# Update the page number of Chapter 1
book_info['chapters']['Chapter 1']['page'] = 5`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'How do you access the city of the address for person1 in a nested dictionary?',
      options: [
        'nested_dict["person1"]["city"]',
        'nested_dict["person1"]["address"]["city"]',
        'nested_dict["city"]["person1"]',
        'nested_dict["address"]["person1"]["city"]',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect because "city" is not a direct key of "person1".',
        'This is correct. It correctly chains the keys to access the nested value.',
        'This is incorrect because the order of keys is reversed.',
        'This is incorrect because the order of keys is incorrect.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'How do you add a new key-value pair to a nested dictionary?',
      options: [
        'nested_dict["person1"]["new_key"] = "new_value"',
        'nested_dict["new_key"]["person1"] = "new_value"',
        'nested_dict["person1"]["new_key"]["new_value"]',
        'nested_dict["new_key"] = "new_value"',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. It correctly adds a new key-value pair to the nested dictionary.',
        'This is incorrect because the order of keys is reversed.',
        'This is incorrect because it tries to nest a key inside a non-existent key.',
        'This is incorrect because it does not target the nested dictionary.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const defaultDictData: LessonContent = {
  title: 'DefaultDict',
  content: `<p>
The <code>defaultdict</code> class from the <code>collections</code> module in Python is a subclass of the built-in <code>dict</code> class. 
It provides a default value for a nonexistent key, which can simplify the process of initializing dictionary values. 
Here's how you can use <code>defaultdict</code>:
</p>

<ul>
<li><strong>Creating a defaultdict:</strong> You need to specify a factory function that returns the default value for a nonexistent key.</li>
<li><strong>Accessing nonexistent keys:</strong> When you access a key that doesn't exist, <code>defaultdict</code> automatically creates it and assigns the default value.</li>
<li><strong>Common use cases:</strong> <code>defaultdict</code> is often used for counting, grouping, and initializing complex data structures.</li>
</ul>`,
  codeExample: `from collections import defaultdict

# Creating a defaultdict with int as the factory function
int_dict = defaultdict(int)

# Accessing nonexistent keys
print(int_dict['a'])  # Output: 0

# Counting occurrences of elements
words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
word_count = defaultdict(int)
for word in words:
    word_count[word] += 1

print(word_count)  # Output: defaultdict(<class 'int'>, {'apple': 3, 'banana': 2, 'orange': 1})

# Creating a defaultdict with list as the factory function
list_dict = defaultdict(list)

# Grouping elements
elements = [('a', 1), ('b', 2), ('a', 3), ('b', 4)]
for key, value in elements:
    list_dict[key].append(value)

print(list_dict)  # Output: defaultdict(<class 'list'>, {'a': [1, 3], 'b': [2, 4]})`,
  exercises: [
    {
      prompt: 'Create a defaultdict to count the occurrences of each character in a given string.',
      initialCode: `# Write your solution here
from collections import defaultdict

string = "hello world"
char_count = defaultdict(int)

# Count characters
`,
      solution: `from collections import defaultdict

string = "hello world"
char_count = defaultdict(int)

# Count characters
for char in string:
    char_count[char] += 1

print(char_count)`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Create a defaultdict to group words by their first letter.',
      initialCode: `# Write your solution here
from collections import defaultdict

words = ['apple', 'banana', 'cherry', 'date', 'elderberry']
word_groups = defaultdict(list)

# Group words by first letter
`,
      solution: `from collections import defaultdict

words = ['apple', 'banana', 'cherry', 'date', 'elderberry']
word_groups = defaultdict(list)

# Group words by first letter
for word in words:
    word_groups[word[0]].append(word)

print(word_groups)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the default value for a nonexistent key in a defaultdict with int as the factory function?',
      options: [
        '0',
        '1',
        'None',
        '[]',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The default value for a nonexistent key in a defaultdict with int as the factory function is 0.',
        'This is incorrect. The default value is 0, not 1.',
        'This is incorrect. The default value is 0, not None.',
        'This is incorrect. The default value is 0, not an empty list.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'How do you create a defaultdict that initializes nonexistent keys with an empty list?',
      options: [
        'defaultdict(int)',
        'defaultdict(list)',
        'defaultdict(str)',
        'defaultdict(dict)',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. This creates a defaultdict that initializes nonexistent keys with 0.',
        'This is correct. This creates a defaultdict that initializes nonexistent keys with an empty list.',
        'This is incorrect. This creates a defaultdict that initializes nonexistent keys with an empty string.',
        'This is incorrect. This creates a defaultdict that initializes nonexistent keys with an empty dictionary.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

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

const hashMapImplementationData: LessonContent = {
  title: 'Hash Map Implementation',
  content: `<p>
Hash maps are a fundamental data structure that allows for efficient key-value pair storage and retrieval. 
They rely on hash functions to map keys to indices in an array, enabling average O(1) time complexity for insertions, deletions, and lookups. 
However, hash maps must handle collisions, where two different keys hash to the same index, and manage their capacity through load factors and rehashing.
</p>

<h2>Hash Functions</h2>
<p>
A hash function is a function that takes an input (or "key") and returns a fixed-size string of bytes. 
The ideal hash function should be deterministic, efficient, and uniformly distribute keys to avoid collisions. 
Common properties of hash functions include:
</p>
<ul>
<li><strong>Deterministic:</strong> The same input should always produce the same output.</li>
<li><strong>Efficient:</strong> The hash function should compute the hash value quickly.</li>
<li><strong>Uniform Distribution:</strong> The hash function should distribute keys uniformly across the hash table to minimize collisions.</li>
</ul>

<h2>Collision Resolution</h2>
<p>
Collisions occur when two different keys hash to the same index in the hash table. 
There are several techniques to handle collisions:
</p>
<ul>
<li><strong>Separate Chaining:</strong> Each index in the hash table points to a linked list of key-value pairs that hash to that index.</li>
<li><strong>Open Addressing:</strong> When a collision occurs, the algorithm searches for the next available slot in the hash table.</li>
<li><strong>Linear Probing:</strong> A type of open addressing where the next available slot is found by linearly searching the table.</li>
<li><strong>Quadratic Probing:</strong> A type of open addressing where the next available slot is found using a quadratic function.</li>
<li><strong>Double Hashing:</strong> A type of open addressing where a second hash function is used to find the next available slot.</li>
</ul>

<h2>Load Factor and Rehashing</h2>
<p>
The load factor is a measure of how full the hash table is. It is calculated as the number of elements divided by the size of the hash table. 
A high load factor increases the likelihood of collisions, so the hash table should be resized (rehashed) when the load factor exceeds a certain threshold. 
Common strategies for resizing include:
</p>
<ul>
<li><strong>Doubling the Size:</strong> When the load factor exceeds a threshold, the hash table size is doubled.</li>
<li><strong>Rehashing:</strong> All existing elements are rehashed into the new, larger hash table.</li>
</ul>`,
  codeExample: `# Example of a simple hash map implementation in Python

class HashMap:
    def __init__(self, size=10):
        self.size = size
        self.map = [None] * self.size

    def _get_hash(self, key):
        return hash(key) % self.size

    def add(self, key, value):
        key_hash = self._get_hash(key)
        key_value = [key, value]

        if self.map[key_hash] is None:
            self.map[key_hash] = list([key_value])
            return True
        else:
            for pair in self.map[key_hash]:
                if pair[0] == key:
                    pair[1] = value
                    return True
            self.map[key_hash].append(key_value)
            return True

    def get(self, key):
        key_hash = self._get_hash(key)
        if self.map[key_hash] is not None:
            for pair in self.map[key_hash]:
                if pair[0] == key:
                    return pair[1]
        return None

    def delete(self, key):
        key_hash = self._get_hash(key)

        if self.map[key_hash] is None:
            return False
        for i in range(len(self.map[key_hash])):
            if self.map[key_hash][i][0] == key:
                self.map[key_hash].pop(i)
                return True
        return False

    def print(self):
        for item in self.map:
            if item is not None:
                print(str(item))

# Example usage
h = HashMap()
h.add('Bob', '567-8888')
h.add('Ming', '293-6753')
h.add('Ming', '333-8233')  # Updating Ming's phone number
h.add('Ankit', '293-8625')
h.add('Aditya', '852-6551')
h.print()
print('Ming: ' + h.get('Ming'))
h.delete('Bob')
h.print()
`,
  exercises: [
    {
      prompt: 'Implement a hash map with separate chaining to handle collisions.',
      initialCode: `# Write your solution here
class HashMap:
    def __init__(self, size=10):
        self.size = size
        self.map = [None] * self.size

    def _get_hash(self, key):
        return hash(key) % self.size

    def add(self, key, value):
        # Implement add method

    def get(self, key):
        # Implement get method

    def delete(self, key):
        # Implement delete method

    def print(self):
        for item in self.map:
            if item is not None:
                print(str(item))

# Example usage
h = HashMap()
h.add('Bob', '567-8888')
h.add('Ming', '293-6753')
h.add('Ming', '333-8233')  # Updating Ming's phone number
h.add('Ankit', '293-8625')
h.add('Aditya', '852-6551')
h.print()
print('Ming: ' + h.get('Ming'))
h.delete('Bob')
h.print()
`,
      solution: `class HashMap:
    def __init__(self, size=10):
        self.size = size
        self.map = [None] * self.size

    def _get_hash(self, key):
        return hash(key) % self.size

    def add(self, key, value):
        key_hash = self._get_hash(key)
        key_value = [key, value]

        if self.map[key_hash] is None:
            self.map[key_hash] = list([key_value])
            return True
        else:
            for pair in self.map[key_hash]:
                if pair[0] == key:
                    pair[1] = value
                    return True
            self.map[key_hash].append(key_value)
            return True

    def get(self, key):
        key_hash = self._get_hash(key)
        if self.map[key_hash] is not None:
            for pair in self.map[key_hash]:
                if pair[0] == key:
                    return pair[1]
        return None

    def delete(self, key):
        key_hash = self._get_hash(key)

        if self.map[key_hash] is None:
            return False
        for i in range(len(self.map[key_hash])):
            if self.map[key_hash][i][0] == key:
                self.map[key_hash].pop(i)
                return True
        return False

    def print(self):
        for item in self.map:
            if item is not None:
                print(str(item))

# Example usage
h = HashMap()
h.add('Bob', '567-8888')
h.add('Ming', '293-6753')
h.add('Ming', '333-8233')  # Updating Ming's phone number
h.add('Ankit', '293-8625')
h.add('Aditya', '852-6551')
h.print()
print('Ming: ' + h.get('Ming'))
h.delete('Bob')
h.print()
`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Implement a hash map with open addressing (linear probing) to handle collisions.',
      initialCode: `# Write your solution here
class HashMap:
    def __init__(self, size=10):
        self.size = size
        self.map = [None] * self.size

    def _get_hash(self, key):
        return hash(key) % self.size

    def add(self, key, value):
        # Implement add method

    def get(self, key):
        # Implement get method

    def delete(self, key):
        # Implement delete method

    def print(self):
        for item in self.map:
            if item is not None:
                print(str(item))

# Example usage
h = HashMap()
h.add('Bob', '567-8888')
h.add('Ming', '293-6753')
h.add('Ming', '333-8233')  # Updating Ming's phone number
h.add('Ankit', '293-8625')
h.add('Aditya', '852-6551')
h.print()
print('Ming: ' + h.get('Ming'))
h.delete('Bob')
h.print()
`,
      solution: `class HashMap:
    def __init__(self, size=10):
        self.size = size
        self.map = [None] * self.size

    def _get_hash(self, key):
        return hash(key) % self.size

    def add(self, key, value):
        key_hash = self._get_hash(key)
        key_value = [key, value]

        if self.map[key_hash] is None:
            self.map[key_hash] = key_value
            return True
        else:
            for i in range(key_hash, self.size):
                if self.map[i] is None:
                    self.map[i] = key_value
                    return True
            for i in range(0, key_hash):
                if self.map[i] is None:
                    self.map[i] = key_value
                    return True
            return False

    def get(self, key):
        key_hash = self._get_hash(key)
        if self.map[key_hash] is not None:
            if self.map[key_hash][0] == key:
                return self.map[key_hash][1]
            for i in range(key_hash, self.size):
                if self.map[i] is not None and self.map[i][0] == key:
                    return self.map[i][1]
            for i in range(0, key_hash):
                if self.map[i] is not None and self.map[i][0] == key:
                    return self.map[i][1]
        return None

    def delete(self, key):
        key_hash = self._get_hash(key)
        if self.map[key_hash] is not None:
            if self.map[key_hash][0] == key:
                self.map[key_hash] = None
                return True
            for i in range(key_hash, self.size):
                if self.map[i] is not None and self.map[i][0] == key:
                    self.map[i] = None
                    return True
            for i in range(0, key_hash):
                if self.map[i] is not None and self.map[i][0] == key:
                    self.map[i] = None
                    return True
        return False

    def print(self):
        for item in self.map:
            if item is not None:
                print(str(item))

# Example usage
h = HashMap()
h.add('Bob', '567-8888')
h.add('Ming', '293-6753')
h.add('Ming', '333-8233')  # Updating Ming's phone number
h.add('Ankit', '293-8625')
h.add('Aditya', '852-6551')
h.print()
print('Ming: ' + h.get('Ming'))
h.delete('Bob')
h.print()
`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary purpose of a hash function in a hash map?',
      options: [
        'To sort the keys',
        'To map keys to indices in an array',
        'To encrypt the keys',
        'To compress the keys',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. Sorting is not the primary purpose of a hash function.',
        'This is correct. The primary purpose of a hash function is to map keys to indices in an array.',
        'This is incorrect. Encryption is not the primary purpose of a hash function.',
        'This is incorrect. Compression is not the primary purpose of a hash function.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'Which technique is used to handle collisions in a hash map?',
      options: [
        'Separate Chaining',
        'Open Addressing',
        'Both A and B',
        'None of the above',
      ],
      correctAnswer: 2,
      explanations: [
        'This is correct. Separate chaining is a technique used to handle collisions.',
        'This is correct. Open addressing is a technique used to handle collisions.',
        'This is correct. Both separate chaining and open addressing are techniques used to handle collisions.',
        'This is incorrect. Both separate chaining and open addressing are techniques used to handle collisions.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the load factor in a hash map?',
      options: [
        'The number of elements in the hash map',
        'The size of the hash map',
        'The ratio of the number of elements to the size of the hash map',
        'The number of collisions in the hash map',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. The number of elements is part of the load factor calculation, but not the load factor itself.',
        'This is incorrect. The size of the hash map is part of the load factor calculation, but not the load factor itself.',
        'This is correct. The load factor is the ratio of the number of elements to the size of the hash map.',
        'This is incorrect. The number of collisions is not the load factor.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const hashFunctionData: LessonContent = {
  title: 'Hash Functions',
  content: `<p>
A hash function is a function that takes an input (or "key") and returns a fixed-size string of bytes. 
The ideal hash function should be deterministic, efficient, and uniformly distribute keys to avoid collisions. 
Common properties of hash functions include:
</p>
<ul>
<li><strong>Deterministic:</strong> The same input should always produce the same output.</li>
<li><strong>Efficient:</strong> The hash function should compute the hash value quickly.</li>
<li><strong>Uniform Distribution:</strong> The hash function should distribute keys uniformly across the hash table to minimize collisions.</li>
</ul>`,
  codeExample: `# Example of a simple hash function in Python
def simple_hash(key, size):
    return hash(key) % size

# Example usage
size = 10
print(simple_hash('apple', size))  # Output: 5
print(simple_hash('banana', size))  # Output: 6
print(simple_hash('cherry', size))  # Output: 7`,
  exercises: [
    {
      prompt: 'Implement a simple hash function that takes a string key and a table size as input and returns the hash value.',
      initialCode: `# Write your solution here
def simple_hash(key, size):
    # Implement the hash function
    return hash(key) % size

# Example usage
size = 10
print(simple_hash('apple', size))  # Output: 5
print(simple_hash('banana', size))  # Output: 6
print(simple_hash('cherry', size))  # Output: 7`,
      solution: `def simple_hash(key, size):
    return hash(key) % size

# Example usage
size = 10
print(simple_hash('apple', size))  # Output: 5
print(simple_hash('banana', size))  # Output: 6
print(simple_hash('cherry', size))  # Output: 7`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary purpose of a hash function in a hash map?',
      options: [
        'To sort the keys',
        'To map keys to indices in an array',
        'To encrypt the keys',
        'To compress the keys',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. Sorting is not the primary purpose of a hash function.',
        'This is correct. The primary purpose of a hash function is to map keys to indices in an array.',
        'This is incorrect. Encryption is not the primary purpose of a hash function.',
        'This is incorrect. Compression is not the primary purpose of a hash function.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const collisionHandlingData: LessonContent = {
  title: 'Collision Resolution',
  content: `<p>
Collisions occur when two different keys hash to the same index in the hash table. 
There are several techniques to handle collisions:
</p>
<ul>
<li><strong>Separate Chaining:</strong> Each index in the hash table points to a linked list of key-value pairs that hash to that index.</li>
<li><strong>Open Addressing:</strong> When a collision occurs, the algorithm searches for the next available slot in the hash table.</li>
<li><strong>Linear Probing:</strong> A type of open addressing where the next available slot is found by linearly searching the table.</li>
<li><strong>Quadratic Probing:</strong> A type of open addressing where the next available slot is found using a quadratic function.</li>
<li><strong>Double Hashing:</strong> A type of open addressing where a second hash function is used to find the next available slot.</li>
</ul>`,
  codeExample: `# Example of collision handling using separate chaining in Python
class HashMap:
    def __init__(self, size=10):
        self.size = size
        self.map = [None] * self.size

    def _get_hash(self, key):
        return hash(key) % self.size

    def add(self, key, value):
        key_hash = self._get_hash(key)
        key_value = [key, value]

        if self.map[key_hash] is None:
            self.map[key_hash] = list([key_value])
            return True
        else:
            for pair in self.map[key_hash]:
                if pair[0] == key:
                    pair[1] = value
                    return True
            self.map[key_hash].append(key_value)
            return True

    def get(self, key):
        key_hash = self._get_hash(key)
        if self.map[key_hash] is not None:
            for pair in self.map[key_hash]:
                if pair[0] == key:
                    return pair[1]
        return None

    def delete(self, key):
        key_hash = self._get_hash(key)

        if self.map[key_hash] is None:
            return False
        for i in range(len(self.map[key_hash])):
            if self.map[key_hash][i][0] == key:
                self.map[key_hash].pop(i)
                return True
        return False

    def print(self):
        for item in self.map:
            if item is not None:
                print(str(item))

# Example usage
h = HashMap()
h.add('Bob', '567-8888')
h.add('Ming', '293-6753')
h.add('Ming', '333-8233')  # Updating Ming's phone number
h.add('Ankit', '293-8625')
h.add('Aditya', '852-6551')
h.print()
print('Ming: ' + h.get('Ming'))
h.delete('Bob')
h.print()
`,
  exercises: [
    {
      prompt: 'Implement a hash map with separate chaining to handle collisions.',
      initialCode: `# Write your solution here
class HashMap:
    def __init__(self, size=10):
        self.size = size
        self.map = [None] * self.size

    def _get_hash(self, key):
        return hash(key) % self.size

    def add(self, key, value):
        # Implement add method

    def get(self, key):
        # Implement get method

    def delete(self, key):
        # Implement delete method

    def print(self):
        for item in self.map:
            if item is not None:
                print(str(item))

# Example usage
h = HashMap()
h.add('Bob', '567-8888')
h.add('Ming', '293-6753')
h.add('Ming', '333-8233')  # Updating Ming's phone number
h.add('Ankit', '293-8625')
h.add('Aditya', '852-6551')
h.print()
print('Ming: ' + h.get('Ming'))
h.delete('Bob')
h.print()
`,
      solution: `class HashMap:
    def __init__(self, size=10):
        self.size = size
        self.map = [None] * self.size

    def _get_hash(self, key):
        return hash(key) % self.size

    def add(self, key, value):
        key_hash = self._get_hash(key)
        key_value = [key, value]

        if self.map[key_hash] is None:
            self.map[key_hash] = list([key_value])
            return True
        else:
            for pair in self.map[key_hash]:
                if pair[0] == key:
                    pair[1] = value
                    return True
            self.map[key_hash].append(key_value)
            return True

    def get(self, key):
        key_hash = self._get_hash(key)
        if self.map[key_hash] is not None:
            for pair in self.map[key_hash]:
                if pair[0] == key:
                    return pair[1]
        return None

    def delete(self, key):
        key_hash = self._get_hash(key)

        if self.map[key_hash] is None:
            return False
        for i in range(len(self.map[key_hash])):
            if self.map[key_hash][i][0] == key:
                self.map[key_hash].pop(i)
                return True
        return False

    def print(self):
        for item in self.map:
            if item is not None:
                print(str(item))

# Example usage
h = HashMap()
h.add('Bob', '567-8888')
h.add('Ming', '293-6753')
h.add('Ming', '333-8233')  # Updating Ming's phone number
h.add('Ankit', '293-8625')
h.add('Aditya', '852-6551')
h.print()
print('Ming: ' + h.get('Ming'))
h.delete('Bob')
h.print()
`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'Which technique is used to handle collisions in a hash map?',
      options: [
        'Separate Chaining',
        'Open Addressing',
        'Both A and B',
        'None of the above',
      ],
      correctAnswer: 2,
      explanations: [
        'This is correct. Separate chaining is a technique used to handle collisions.',
        'This is correct. Open addressing is a technique used to handle collisions.',
        'This is correct. Both separate chaining and open addressing are techniques used to handle collisions.',
        'This is incorrect. Both separate chaining and open addressing are techniques used to handle collisions.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const loadFactorData: LessonContent = {
  title: 'Load Factor and Rehashing',
  content: `<p>
The load factor is a measure of how full the hash table is. It is calculated as the number of elements divided by the size of the hash table. 
A high load factor increases the likelihood of collisions, so the hash table should be resized (rehashed) when the load factor exceeds a certain threshold. 
Common strategies for resizing include:
</p>
<ul>
<li><strong>Doubling the Size:</strong> When the load factor exceeds a threshold, the hash table size is doubled.</li>
<li><strong>Rehashing:</strong> All existing elements are rehashed into the new, larger hash table.</li>
</ul>`,
  codeExample: `# Example of load factor and rehashing in Python
class HashMap:
    def __init__(self, size=10):
        self.size = size
        self.map = [None] * self.size
        self.count = 0

    def _get_hash(self, key):
        return hash(key) % self.size

    def add(self, key, value):
        key_hash = self._get_hash(key)
        key_value = [key, value]

        if self.map[key_hash] is None:
            self.map[key_hash] = list([key_value])
        else:
            for pair in self.map[key_hash]:
                if pair[0] == key:
                    pair[1] = value
                    return True
            self.map[key_hash].append(key_value)

        self.count += 1
        if self.count / self.size > 0.7:
            self._resize()

    def get(self, key):
        key_hash = self._get_hash(key)
        if self.map[key_hash] is not None:
            for pair in self.map[key_hash]:
                if pair[0] == key:
                    return pair[1]
        return None

    def delete(self, key):
        key_hash = self._get_hash(key)

        if self.map[key_hash] is None:
            return False
        for i in range(len(self.map[key_hash])):
            if self.map[key_hash][i][0] == key:
                self.map[key_hash].pop(i)
                self.count -= 1
                return True
        return False

    def print(self):
        for item in self.map:
            if item is not None:
                print(str(item))

    def _resize(self):
        new_size = self.size * 2
        new_map = [None] * new_size
        for item in self.map:
            if item is not None:
                for pair in item:
                    key_hash = self._get_hash(pair[0])
                    if new_map[key_hash] is None:
                        new_map[key_hash] = list([pair])
                    else:
                        new_map[key_hash].append(pair)
        self.size = new_size
        self.map = new_map

# Example usage
h = HashMap()
h.add('Bob', '567-8888')
h.add('Ming', '293-6753')
h.add('Ming', '333-8233')  # Updating Ming's phone number
h.add('Ankit', '293-8625')
h.add('Aditya', '852-6551')
h.print()
print('Ming: ' + h.get('Ming'))
h.delete('Bob')
h.print()
`,
  exercises: [
    {
      prompt: 'Implement a hash map that resizes and rehashes when the load factor exceeds 0.7.',
      initialCode: `# Write your solution here
class HashMap:
    def __init__(self, size=10):
        self.size = size
        self.map = [None] * self.size
        self.count = 0

    def _get_hash(self, key):
        return hash(key) % self.size

    def add(self, key, value):
        key_hash = self._get_hash(key)
        key_value = [key, value]

        if self.map[key_hash] is None:
            self.map[key_hash] = list([key_value])
        else:
            for pair in self.map[key_hash]:
                if pair[0] == key:
                    pair[1] = value
                    return True
            self.map[key_hash].append(key_value)

        self.count += 1
        if self.count / self.size > 0.7:
            self._resize()

    def get(self, key):
        key_hash = self._get_hash(key)
        if self.map[key_hash] is not None:
            for pair in self.map[key_hash]:
                if pair[0] == key:
                    return pair[1]
        return None

    def delete(self, key):
        key_hash = self._get_hash(key)

        if self.map[key_hash] is None:
            return False
        for i in range(len(self.map[key_hash])):
            if self.map[key_hash][i][0] == key:
                self.map[key_hash].pop(i)
                self.count -= 1
                return True
        return False

    def print(self):
        for item in self.map:
            if item is not None:
                print(str(item))

    def _resize(self):
        new_size = self.size * 2
        new_map = [None] * new_size
        for item in self.map:
            if item is not None:
                for pair in item:
                    key_hash = self._get_hash(pair[0])
                    if new_map[key_hash] is None:
                        new_map[key_hash] = list([pair])
                    else:
                        new_map[key_hash].append(pair)
        self.size = new_size
        self.map = new_map

# Example usage
h = HashMap()
h.add('Bob', '567-8888')
h.add('Ming', '293-6753')
h.add('Ming', '333-8233')  # Updating Ming's phone number
h.add('Ankit', '293-8625')
h.add('Aditya', '852-6551')
h.print()
print('Ming: ' + h.get('Ming'))
h.delete('Bob')
h.print()
`,
      solution: `class HashMap:
    def __init__(self, size=10):
        self.size = size
        self.map = [None] * self.size
        self.count = 0

    def _get_hash(self, key):
        return hash(key) % self.size

    def add(self, key, value):
        key_hash = self._get_hash(key)
        key_value = [key, value]

        if self.map[key_hash] is None:
            self.map[key_hash] = list([key_value])
        else:
            for pair in self.map[key_hash]:
                if pair[0] == key:
                    pair[1] = value
                    return True
            self.map[key_hash].append(key_value)

        self.count += 1
        if self.count / self.size > 0.7:
            self._resize()

    def get(self, key):
        key_hash = self._get_hash(key)
        if self.map[key_hash] is not None:
            for pair in self.map[key_hash]:
                if pair[0] == key:
                    return pair[1]
        return None

    def delete(self, key):
        key_hash = self._get_hash(key)

        if self.map[key_hash] is None:
            return False
        for i in range(len(self.map[key_hash])):
            if self.map[key_hash][i][0] == key:
                self.map[key_hash].pop(i)
                self.count -= 1
                return True
        return False

    def print(self):
        for item in self.map:
            if item is not None:
                print(str(item))

    def _resize(self):
        new_size = self.size * 2
        new_map = [None] * new_size
        for item in self.map:
            if item is not None:
                for pair in item:
                    key_hash = self._get_hash(pair[0])
                    if new_map[key_hash] is None:
                        new_map[key_hash] = list([pair])
                    else:
                        new_map[key_hash].append(pair)
        self.size = new_size
        self.map = new_map

# Example usage
h = HashMap()
h.add('Bob', '567-8888')
h.add('Ming', '293-6753')
h.add('Ming', '333-8233')  # Updating Ming's phone number
h.add('Ankit', '293-8625')
h.add('Aditya', '852-6551')
h.print()
print('Ming: ' + h.get('Ming'))
h.delete('Bob')
h.print()
`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'What is the load factor in a hash map?',
      options: [
        'The number of elements in the hash map',
        'The size of the hash map',
        'The ratio of the number of elements to the size of the hash map',
        'The number of collisions in the hash map',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. The number of elements is part of the load factor calculation, but not the load factor itself.',
        'This is incorrect. The size of the hash map is part of the load factor calculation, but not the load factor itself.',
        'This is correct. The load factor is the ratio of the number of elements to the size of the hash map.',
        'This is incorrect. The number of collisions is not the load factor.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const twoSumPatternData: LessonContent = {
  title: 'Two Sum Pattern',
  content: `<p>
The Two Sum pattern is a common algorithmic problem where the goal is to find two distinct elements in an array that sum up to a given target. 
Dictionaries (or hash maps) are often used to solve this problem efficiently by storing the elements and their indices. 
Here's how you can implement the Two Sum pattern:
</p>

<ul>
<li><strong>Using a Dictionary:</strong> Store the elements and their indices in a dictionary as you iterate through the array.</li>
<li><strong>Check for Complement:</strong> For each element, check if the complement (target - element) exists in the dictionary.</li>
<li><strong>Return Indices:</strong> If the complement exists, return the indices of the current element and the complement.</li>
</ul>`,
  codeExample: `# Example of the Two Sum pattern in Python
def two_sum(nums, target):
    num_dict = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_dict:
            return [num_dict[complement], i]
        num_dict[num] = i
    return None

# Example usage
nums = [2, 7, 11, 15]
target = 9
print(two_sum(nums, target))  # Output: [0, 1]`,
  exercises: [
    {
      prompt: 'Implement the Two Sum pattern to find two distinct elements in an array that sum up to a given target.',
      initialCode: `# Write your solution here
def two_sum(nums, target):
    num_dict = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_dict:
            return [num_dict[complement], i]
        num_dict[num] = i
    return None

# Example usage
nums = [2, 7, 11, 15]
target = 9
print(two_sum(nums, target))  # Output: [0, 1]`,
      solution: `def two_sum(nums, target):
    num_dict = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_dict:
            return [num_dict[complement], i]
        num_dict[num] = i
    return None

# Example usage
nums = [2, 7, 11, 15]
target = 9
print(two_sum(nums, target))  # Output: [0, 1]`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the time complexity of the Two Sum pattern using a dictionary?',
      options: [
        'O(n^2)',
        'O(n log n)',
        'O(n)',
        'O(1)',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. The Two Sum pattern using a dictionary has a time complexity of O(n).',
        'This is incorrect. The Two Sum pattern using a dictionary has a time complexity of O(n).',
        'This is correct. The Two Sum pattern using a dictionary has a time complexity of O(n).',
        'This is incorrect. The Two Sum pattern using a dictionary has a time complexity of O(n).',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const subarraySumPatternData: LessonContent = {
  title: 'Subarray Sum Pattern',
  content: `<p>
The Subarray Sum pattern is used to find subarrays in an array that sum up to a given target. 
This pattern often involves using a dictionary to store the cumulative sums and their frequencies. 
Here's how you can implement the Subarray Sum pattern:
</p>

<ul>
<li><strong>Using a Dictionary:</strong> Store the cumulative sums and their frequencies in a dictionary.</li>
<li><strong>Check for Complement:</strong> For each cumulative sum, check if the complement (cumulative sum - target) exists in the dictionary.</li>
<li><strong>Count Subarrays:</strong> If the complement exists, count the number of subarrays that sum up to the target.</li>
</ul>`,
  codeExample: `# Example of the Subarray Sum pattern in Python
def subarray_sum(nums, target):
    sum_dict = {0: 1}
    cumulative_sum = 0
    count = 0
    for num in nums:
        cumulative_sum += num
        if cumulative_sum - target in sum_dict:
            count += sum_dict[cumulative_sum - target]
        if cumulative_sum in sum_dict:
            sum_dict[cumulative_sum] += 1
        else:
            sum_dict[cumulative_sum] = 1
    return count

# Example usage
nums = [1, 1, 1]
target = 2
print(subarray_sum(nums, target))  # Output: 2`,
  exercises: [
    {
      prompt: 'Implement the Subarray Sum pattern to find the number of subarrays that sum up to a given target.',
      initialCode: `# Write your solution here
def subarray_sum(nums, target):
    sum_dict = {0: 1}
    cumulative_sum = 0
    count = 0
    for num in nums:
        cumulative_sum += num
        if cumulative_sum - target in sum_dict:
            count += sum_dict[cumulative_sum - target]
        if cumulative_sum in sum_dict:
            sum_dict[cumulative_sum] += 1
        else:
            sum_dict[cumulative_sum] = 1
    return count

# Example usage
nums = [1, 1, 1]
target = 2
print(subarray_sum(nums, target))  # Output: 2`,
      solution: `def subarray_sum(nums, target):
    sum_dict = {0: 1}
    cumulative_sum = 0
    count = 0
    for num in nums:
        cumulative_sum += num
        if cumulative_sum - target in sum_dict:
            count += sum_dict[cumulative_sum - target]
        if cumulative_sum in sum_dict:
            sum_dict[cumulative_sum] += 1
        else:
            sum_dict[cumulative_sum] = 1
    return count

# Example usage
nums = [1, 1, 1]
target = 2
print(subarray_sum(nums, target))  # Output: 2`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the time complexity of the Subarray Sum pattern using a dictionary?',
      options: [
        'O(n^2)',
        'O(n log n)',
        'O(n)',
        'O(1)',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. The Subarray Sum pattern using a dictionary has a time complexity of O(n).',
        'This is incorrect. The Subarray Sum pattern using a dictionary has a time complexity of O(n).',
        'This is correct. The Subarray Sum pattern using a dictionary has a time complexity of O(n).',
        'This is incorrect. The Subarray Sum pattern using a dictionary has a time complexity of O(n).',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const isomorphicPatternData: LessonContent = {
  title: 'String Pattern Matching',
  content: `<p>
The String Pattern Matching pattern is used to solve problems related to isomorphic strings and pattern matching. 
This pattern often involves using dictionaries to map characters from one string to another. 
Here's how you can implement the String Pattern Matching pattern:
</p>

<ul>
<li><strong>Using Two Dictionaries:</strong> Use two dictionaries to map characters from the first string to the second string and vice versa.</li>
<li><strong>Check for Consistency:</strong> For each character pair, check if the mapping is consistent in both directions.</li>
<li><strong>Return Result:</strong> If all character pairs are consistent, the strings are isomorphic; otherwise, they are not.</li>
</ul>`,
  codeExample: `# Example of the String Pattern Matching pattern in Python
def is_isomorphic(s, t):
    if len(s) != len(t):
        return False
    s_to_t = {}
    t_to_s = {}
    for char_s, char_t in zip(s, t):
        if char_s in s_to_t and s_to_t[char_s] != char_t:
            return False
        if char_t in t_to_s and t_to_s[char_t] != char_s:
            return False
        s_to_t[char_s] = char_t
        t_to_s[char_t] = char_s
    return True

# Example usage
s = "egg"
t = "add"
print(is_isomorphic(s, t))  # Output: True`,
  exercises: [
    {
      prompt: 'Implement the String Pattern Matching pattern to determine if two strings are isomorphic.',
      initialCode: `# Write your solution here
def is_isomorphic(s, t):
    if len(s) != len(t):
        return False
    s_to_t = {}
    t_to_s = {}
    for char_s, char_t in zip(s, t):
        if char_s in s_to_t and s_to_t[char_s] != char_t:
            return False
        if char_t in t_to_s and t_to_s[char_t] != char_s:
            return False
        s_to_t[char_s] = char_t
        t_to_s[char_t] = char_s
    return True

# Example usage
s = "egg"
t = "add"
print(is_isomorphic(s, t))  # Output: True`,
      solution: `def is_isomorphic(s, t):
    if len(s) != len(t):
        return False
    s_to_t = {}
    t_to_s = {}
    for char_s, char_t in zip(s, t):
        if char_s in s_to_t and s_to_t[char_s] != char_t:
            return False
        if char_t in t_to_s and t_to_s[char_t] != char_s:
            return False
        s_to_t[char_s] = char_t
        t_to_s[char_t] = char_s
    return True

# Example usage
s = "egg"
t = "add"
print(is_isomorphic(s, t))  # Output: True`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the time complexity of the String Pattern Matching pattern using two dictionaries?',
      options: [
        'O(n^2)',
        'O(n log n)',
        'O(n)',
        'O(1)',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. The String Pattern Matching pattern using two dictionaries has a time complexity of O(n).',
        'This is incorrect. The String Pattern Matching pattern using two dictionaries has a time complexity of O(n).',
        'This is correct. The String Pattern Matching pattern using two dictionaries has a time complexity of O(n).',
        'This is incorrect. The String Pattern Matching pattern using two dictionaries has a time complexity of O(n).',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const spaceComplexityData: LessonContent = {
  title: 'Space Complexity Analysis',
  content: `<p>
Space complexity analysis is crucial for understanding the memory usage of algorithms, especially when using data structures like dictionaries. 
The space complexity of a dictionary depends on the number of key-value pairs it stores and the size of each key and value. 
Here's how you can analyze the space complexity of dictionary-based algorithms:
</p>

<ul>
<li><strong>Number of Elements:</strong> The space complexity is directly proportional to the number of elements stored in the dictionary.</li>
<li><strong>Size of Keys and Values:</strong> The space complexity also depends on the size of the keys and values stored in the dictionary.</li>
<li><strong>Auxiliary Space:</strong> Consider any additional space used by the algorithm, such as temporary variables or data structures.</li>
</ul>`,
  codeExample: `# Example of space complexity analysis in Python
def count_elements(nums):
    element_count = {}
    for num in nums:
        if num in element_count:
            element_count[num] += 1
        else:
            element_count[num] = 1
    return element_count

# Example usage
nums = [1, 2, 2, 3, 3, 3]
print(count_elements(nums))  # Output: {1: 1, 2: 2, 3: 3}

# Space complexity analysis:
# - The dictionary 'element_count' stores 'n' elements, where 'n' is the number of unique elements in 'nums'.
# - Each key and value in the dictionary consumes a certain amount of memory.
# - The overall space complexity is O(n), where 'n' is the number of unique elements.`,
  exercises: [
    {
      prompt: 'Analyze the space complexity of the following function that counts the frequency of each element in an array.',
      initialCode: `# Write your solution here
def count_elements(nums):
    element_count = {}
    for num in nums:
        if num in element_count:
            element_count[num] += 1
        else:
            element_count[num] = 1
    return element_count

# Example usage
nums = [1, 2, 2, 3, 3, 3]
print(count_elements(nums))  # Output: {1: 1, 2: 2, 3: 3}`,
      solution: `def count_elements(nums):
    element_count = {}
    for num in nums:
        if num in element_count:
            element_count[num] += 1
        else:
            element_count[num] = 1
    return element_count

# Example usage
nums = [1, 2, 2, 3, 3, 3]
print(count_elements(nums))  # Output: {1: 1, 2: 2, 3: 3}

# Space complexity analysis:
# - The dictionary 'element_count' stores 'n' elements, where 'n' is the number of unique elements in 'nums'.
# - Each key and value in the dictionary consumes a certain amount of memory.
# - The overall space complexity is O(n), where 'n' is the number of unique elements.`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the space complexity of a dictionary that stores n key-value pairs, where each key and value is of constant size?',
      options: [
        'O(1)',
        'O(log n)',
        'O(n)',
        'O(n^2)',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. The space complexity is not constant.',
        'This is incorrect. The space complexity is not logarithmic.',
        'This is correct. The space complexity is linear, O(n).',
        'This is incorrect. The space complexity is not quadratic.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const timeComplexityData: LessonContent = {
  title: 'Time Complexity Optimization',
  content: `<p>
Time complexity optimization is essential for ensuring that dictionary-based algorithms run efficiently. 
The time complexity of dictionary operations, such as insertion, deletion, and lookup, is typically O(1) on average. 
However, certain operations and patterns can lead to higher time complexities. 
Here are some techniques for optimizing time complexity:
</p>

<ul>
<li><strong>Avoid Nested Loops:</strong> Nested loops can lead to O(n^2) time complexity. Use dictionaries to reduce the complexity.</li>
<li><strong>Use Efficient Data Structures:</strong> Choose the right data structure for the problem to minimize time complexity.</li>
<li><strong>Precompute Values:</strong> Precompute values and store them in a dictionary to avoid redundant calculations.</li>
</ul>`,
  codeExample: `# Example of time complexity optimization in Python
def two_sum(nums, target):
    num_dict = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_dict:
            return [num_dict[complement], i]
        num_dict[num] = i
    return None

# Example usage
nums = [2, 7, 11, 15]
target = 9
print(two_sum(nums, target))  # Output: [0, 1]

# Time complexity analysis:
# - The dictionary 'num_dict' allows for O(1) average time complexity for lookups.
# - The overall time complexity is O(n), where 'n' is the number of elements in 'nums'.`,
  exercises: [
    {
      prompt: 'Optimize the following function that finds two distinct elements in an array that sum up to a given target.',
      initialCode: `# Write your solution here
def two_sum(nums, target):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
    return None

# Example usage
nums = [2, 7, 11, 15]
target = 9
print(two_sum(nums, target))  # Output: [0, 1]`,
      solution: `def two_sum(nums, target):
    num_dict = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_dict:
            return [num_dict[complement], i]
        num_dict[num] = i
    return None

# Example usage
nums = [2, 7, 11, 15]
target = 9
print(two_sum(nums, target))  # Output: [0, 1]

# Time complexity analysis:
# - The dictionary 'num_dict' allows for O(1) average time complexity for lookups.
# - The overall time complexity is O(n), where 'n' is the number of elements in 'nums'.`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the average time complexity of a dictionary lookup operation?',
      options: [
        'O(1)',
        'O(log n)',
        'O(n)',
        'O(n^2)',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The average time complexity of a dictionary lookup operation is O(1).',
        'This is incorrect. The time complexity is not logarithmic.',
        'This is incorrect. The time complexity is not linear.',
        'This is incorrect. The time complexity is not quadratic.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const memoryEfficientData: LessonContent = {
  title: 'Memory-Efficient Dictionaries',
  content: `<p>
Memory-efficient dictionaries are crucial for reducing the memory footprint of algorithms, especially when dealing with large datasets. 
Here are some techniques for creating memory-efficient dictionaries:
</p>

<ul>
<li><strong>Use Smaller Data Types:</strong> Use smaller data types for keys and values to reduce memory usage.</li>
<li><strong>Sparse Data Structures:</strong> Use sparse data structures to store only non-zero or non-null values.</li>
<li><strong>Compression Techniques:</strong> Apply compression techniques to reduce the size of keys and values.</li>
<li><strong>Memory-Mapped Files:</strong> Use memory-mapped files to store large dictionaries on disk and access them as if they were in memory.</li>
</ul>`,
  codeExample: `# Example of memory-efficient dictionary in Python
import sys

def create_memory_efficient_dict(nums):
    memory_efficient_dict = {}
    for num in nums:
        if num in memory_efficient_dict:
            memory_efficient_dict[num] += 1
        else:
            memory_efficient_dict[num] = 1
    return memory_efficient_dict

# Example usage
nums = [1, 2, 2, 3, 3, 3]
memory_efficient_dict = create_memory_efficient_dict(nums)
print(memory_efficient_dict)  # Output: {1: 1, 2: 2, 3: 3}

# Memory usage analysis:
# - The dictionary 'memory_efficient_dict' stores 'n' elements, where 'n' is the number of unique elements in 'nums'.
# - Each key and value in the dictionary consumes a certain amount of memory.
# - The overall memory usage is minimized by using smaller data types and efficient data structures.`,
  exercises: [
    {
      prompt: 'Create a memory-efficient dictionary that counts the frequency of each element in an array.',
      initialCode: `# Write your solution here
import sys

def create_memory_efficient_dict(nums):
    memory_efficient_dict = {}
    for num in nums:
        if num in memory_efficient_dict:
            memory_efficient_dict[num] += 1
        else:
            memory_efficient_dict[num] = 1
    return memory_efficient_dict

# Example usage
nums = [1, 2, 2, 3, 3, 3]
memory_efficient_dict = create_memory_efficient_dict(nums)
print(memory_efficient_dict)  # Output: {1: 1, 2: 2, 3: 3}`,
      solution: `import sys

def create_memory_efficient_dict(nums):
    memory_efficient_dict = {}
    for num in nums:
        if num in memory_efficient_dict:
            memory_efficient_dict[num] += 1
        else:
            memory_efficient_dict[num] = 1
    return memory_efficient_dict

# Example usage
nums = [1, 2, 2, 3, 3, 3]
memory_efficient_dict = create_memory_efficient_dict(nums)
print(memory_efficient_dict)  # Output: {1: 1, 2: 2, 3: 3}

# Memory usage analysis:
# - The dictionary 'memory_efficient_dict' stores 'n' elements, where 'n' is the number of unique elements in 'nums'.
# - Each key and value in the dictionary consumes a certain amount of memory.
# - The overall memory usage is minimized by using smaller data types and efficient data structures.`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which technique can be used to reduce the memory usage of a dictionary?',
      options: [
        'Using larger data types',
        'Using sparse data structures',
        'Ignoring memory usage',
        'Increasing the size of keys and values',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. Using larger data types increases memory usage.',
        'This is correct. Using sparse data structures can reduce memory usage.',
        'This is incorrect. Ignoring memory usage is not a valid technique.',
        'This is incorrect. Increasing the size of keys and values increases memory usage.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const lruCacheData: LessonContent = {
  title: 'LRU Cache Implementation',
  content: `<p>
An LRU (Least Recently Used) Cache is a type of cache that evicts the least recently used items first when the cache reaches its capacity. 
Dictionaries (or hash maps) are often used in conjunction with linked lists to implement LRU caches efficiently. 
Here's how you can implement an LRU Cache:
</p>

<ul>
<li><strong>Using a Dictionary:</strong> Store the key-value pairs in a dictionary for O(1) average time complexity for lookups.</li>
<li><strong>Using a Doubly Linked List:</strong> Maintain the order of access using a doubly linked list, where the head is the most recently used item and the tail is the least recently used item.</li>
<li><strong>Eviction Policy:</strong> When the cache reaches its capacity, remove the tail node from the linked list and the corresponding key from the dictionary.</li>
</ul>`,
  codeExample: `# Example of LRU Cache implementation in Python
class Node:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.prev = None
        self.next = None

class LRUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = {}
        self.head = Node(0, 0)
        self.tail = Node(0, 0)
        self.head.next = self.tail
        self.tail.prev = self.head

    def _add(self, node):
        p = self.tail.prev
        p.next = node
        node.prev = p
        node.next = self.tail
        self.tail.prev = node

    def _remove(self, node):
        p = node.prev
        n = node.next
        p.next = n
        n.prev = p

    def get(self, key):
        if key in self.cache:
            node = self.cache[key]
            self._remove(node)
            self._add(node)
            return node.value
        return -1

    def put(self, key, value):
        if key in self.cache:
            self._remove(self.cache[key])
        node = Node(key, value)
        self.cache[key] = node
        self._add(node)
        if len(self.cache) > self.capacity:
            node = self.head.next
            self._remove(node)
            del self.cache[node.key]

# Example usage
cache = LRUCache(2)
cache.put(1, 1)
cache.put(2, 2)
print(cache.get(1))  # Output: 1
cache.put(3, 3)
print(cache.get(2))  # Output: -1
cache.put(4, 4)
print(cache.get(1))  # Output: -1
print(cache.get(3))  # Output: 3
print(cache.get(4))  # Output: 4`,
  exercises: [
    {
      prompt: 'Implement an LRU Cache using a dictionary and a doubly linked list.',
      initialCode: `# Write your solution here
class Node:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.prev = None
        self.next = None

class LRUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = {}
        self.head = Node(0, 0)
        self.tail = Node(0, 0)
        self.head.next = self.tail
        self.tail.prev = self.head

    def _add(self, node):
        p = self.tail.prev
        p.next = node
        node.prev = p
        node.next = self.tail
        self.tail.prev = node

    def _remove(self, node):
        p = node.prev
        n = node.next
        p.next = n
        n.prev = p

    def get(self, key):
        if key in self.cache:
            node = self.cache[key]
            self._remove(node)
            self._add(node)
            return node.value
        return -1

    def put(self, key, value):
        if key in self.cache:
            self._remove(self.cache[key])
        node = Node(key, value)
        self.cache[key] = node
        self._add(node)
        if len(self.cache) > self.capacity:
            node = self.head.next
            self._remove(node)
            del self.cache[node.key]

# Example usage
cache = LRUCache(2)
cache.put(1, 1)
cache.put(2, 2)
print(cache.get(1))  # Output: 1
cache.put(3, 3)
print(cache.get(2))  # Output: -1
cache.put(4, 4)
print(cache.get(1))  # Output: -1
print(cache.get(3))  # Output: 3
print(cache.get(4))  # Output: 4`,
      solution: `class Node:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.prev = None
        self.next = None

class LRUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = {}
        self.head = Node(0, 0)
        self.tail = Node(0, 0)
        self.head.next = self.tail
        self.tail.prev = self.head

    def _add(self, node):
        p = self.tail.prev
        p.next = node
        node.prev = p
        node.next = self.tail
        self.tail.prev = node

    def _remove(self, node):
        p = node.prev
        n = node.next
        p.next = n
        n.prev = p

    def get(self, key):
        if key in self.cache:
            node = self.cache[key]
            self._remove(node)
            self._add(node)
            return node.value
        return -1

    def put(self, key, value):
        if key in self.cache:
            self._remove(self.cache[key])
        node = Node(key, value)
        self.cache[key] = node
        self._add(node)
        if len(self.cache) > self.capacity:
            node = self.head.next
            self._remove(node)
            del self.cache[node.key]

# Example usage
cache = LRUCache(2)
cache.put(1, 1)
cache.put(2, 2)
print(cache.get(1))  # Output: 1
cache.put(3, 3)
print(cache.get(2))  # Output: -1
cache.put(4, 4)
print(cache.get(1))  # Output: -1
print(cache.get(3))  # Output: 3
print(cache.get(4))  # Output: 4`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'What is the time complexity of the get operation in an LRU Cache implemented using a dictionary and a doubly linked list?',
      options: [
        'O(1)',
        'O(log n)',
        'O(n)',
        'O(n^2)',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The get operation in an LRU Cache implemented using a dictionary and a doubly linked list has a time complexity of O(1).',
        'This is incorrect. The time complexity is not logarithmic.',
        'This is incorrect. The time complexity is not linear.',
        'This is incorrect. The time complexity is not quadratic.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const graphRepresentationData: LessonContent = {
  title: 'Graph Representation',
  content: `<p>
Graphs are a fundamental data structure used to represent relationships between objects. 
Dictionaries (or hash maps) are often used to represent graphs efficiently, especially for adjacency lists. 
Here's how you can represent a graph using dictionaries:
</p>

<ul>
<li><strong>Adjacency List:</strong> Use a dictionary where each key represents a node and the value is a list of adjacent nodes.</li>
<li><strong>Edge List:</strong> Use a dictionary where each key represents a node and the value is a list of tuples representing edges to adjacent nodes.</li>
<li><strong>Adjacency Matrix:</strong> Use a dictionary where each key represents a node and the value is another dictionary representing the adjacency matrix.</li>
</ul>`,
  codeExample: `# Example of graph representation using dictionaries in Python
class Graph:
    def __init__(self):
        self.graph = {}

    def add_edge(self, u, v):
        if u in self.graph:
            self.graph[u].append(v)
        else:
            self.graph[u] = [v]
        if v in self.graph:
            self.graph[v].append(u)
        else:
            self.graph[v] = [u]

    def print_graph(self):
        for node in self.graph:
            print(f"{node}: {self.graph[node]}")

# Example usage
g = Graph()
g.add_edge(0, 1)
g.add_edge(0, 2)
g.add_edge(1, 2)
g.add_edge(2, 3)
g.print_graph()

# Output:
# 0: [1, 2]
# 1: [0, 2]
# 2: [0, 1, 3]
# 3: [2]`,
  exercises: [
    {
      prompt: 'Implement a graph using a dictionary to represent an adjacency list.',
      initialCode: `# Write your solution here
class Graph:
    def __init__(self):
        self.graph = {}

    def add_edge(self, u, v):
        if u in self.graph:
            self.graph[u].append(v)
        else:
            self.graph[u] = [v]
        if v in self.graph:
            self.graph[v].append(u)
        else:
            self.graph[v] = [u]

    def print_graph(self):
        for node in self.graph:
            print(f"{node}: {self.graph[node]}")

# Example usage
g = Graph()
g.add_edge(0, 1)
g.add_edge(0, 2)
g.add_edge(1, 2)
g.add_edge(2, 3)
g.print_graph()`,
      solution: `class Graph:
    def __init__(self):
        self.graph = {}

    def add_edge(self, u, v):
        if u in self.graph:
            self.graph[u].append(v)
        else:
            self.graph[u] = [v]
        if v in self.graph:
            self.graph[v].append(u)
        else:
            self.graph[v] = [u]

    def print_graph(self):
        for node in self.graph:
            print(f"{node}: {self.graph[node]}")

# Example usage
g = Graph()
g.add_edge(0, 1)
g.add_edge(0, 2)
g.add_edge(1, 2)
g.add_edge(2, 3)
g.print_graph()

# Output:
# 0: [1, 2]
# 1: [0, 2]
# 2: [0, 1, 3]
# 3: [2]`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the space complexity of representing a graph using an adjacency list with a dictionary?',
      options: [
        'O(1)',
        'O(log n)',
        'O(n + m)',
        'O(n^2)',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. The space complexity is not constant.',
        'This is incorrect. The space complexity is not logarithmic.',
        'This is correct. The space complexity is O(n + m), where n is the number of nodes and m is the number of edges.',
        'This is incorrect. The space complexity is not quadratic.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const trieImplementationData: LessonContent = {
  title: 'Trie Implementation',
  content: `<p>
A Trie (also known as a prefix tree) is a tree-like data structure used to store a dynamic set of strings. 
Dictionaries (or hash maps) are often used to implement Tries efficiently, where each node is a dictionary of its children. 
Here's how you can implement a Trie using dictionaries:
</p>

<ul>
<li><strong>Trie Node:</strong> Each node in the Trie is a dictionary where the keys are characters and the values are child nodes.</li>
<li><strong>Insertion:</strong> To insert a word, traverse the Trie character by character, creating new nodes as necessary.</li>
<li><strong>Search:</strong> To search for a word, traverse the Trie character by character, returning false if any character is not found.</li>
<li><strong>Prefix Search:</strong> To search for words with a given prefix, traverse the Trie up to the prefix and then perform a depth-first search from that node.</li>
</ul>`,
  codeExample: `# Example of Trie implementation using dictionaries in Python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end_of_word = True

    def search(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                return False
            node = node.children[char]
        return node.is_end_of_word

    def starts_with(self, prefix):
        node = self.root
        for char in prefix:
            if char not in node.children:
                return False
            node = node.children[char]
        return True

# Example usage
trie = Trie()
trie.insert("apple")
print(trie.search("apple"))  # Output: True
print(trie.search("app"))  # Output: False
print(trie.starts_with("app"))  # Output: True
trie.insert("app")
print(trie.search("app"))  # Output: True`,
  exercises: [
    {
      prompt: 'Implement a Trie using a dictionary to store the children of each node.',
      initialCode: `# Write your solution here
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end_of_word = True

    def search(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                return False
            node = node.children[char]
        return node.is_end_of_word

    def starts_with(self, prefix):
        node = self.root
        for char in prefix:
            if char not in node.children:
                return False
            node = node.children[char]
        return True

# Example usage
trie = Trie()
trie.insert("apple")
print(trie.search("apple"))  # Output: True
print(trie.search("app"))  # Output: False
print(trie.starts_with("app"))  # Output: True
trie.insert("app")
print(trie.search("app"))  # Output: True`,
      solution: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end_of_word = True

    def search(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                return False
            node = node.children[char]
        return node.is_end_of_word

    def starts_with(self, prefix):
        node = self.root
        for char in prefix:
            if char not in node.children:
                return False
            node = node.children[char]
        return True

# Example usage
trie = Trie()
trie.insert("apple")
print(trie.search("apple"))  # Output: True
print(trie.search("app"))  # Output: False
print(trie.starts_with("app"))  # Output: True
trie.insert("app")
print(trie.search("app"))  # Output: True`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'What is the time complexity of searching for a word in a Trie implemented using a dictionary?',
      options: [
        'O(1)',
        'O(log n)',
        'O(n)',
        'O(m)',
      ],
      correctAnswer: 3,
      explanations: [
        'This is incorrect. The time complexity is not constant.',
        'This is incorrect. The time complexity is not logarithmic.',
        'This is incorrect. The time complexity is not linear with respect to the number of words.',
        'This is correct. The time complexity is O(m), where m is the length of the word being searched.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const counterClassData: LessonContent = {
  title: 'Counter Class',
  content: `<p>
The Counter class from the collections module in Python is a specialized dictionary subclass designed for counting hashable objects. 
It is particularly useful for counting the frequency of elements in a collection. 
Here's how you can use the Counter class:
</p>

<ul>
<li><strong>Counting Elements:</strong> The Counter class can count the occurrences of each element in a list, string, or any iterable.</li>
<li><strong>Most Common Elements:</strong> The Counter class provides a method to get the most common elements and their counts.</li>
<li><strong>Arithmetic Operations:</strong> The Counter class supports arithmetic operations like addition, subtraction, intersection, and union.</li>
</ul>`,
  codeExample: `# Example of Counter class in Python
from collections import Counter

# Counting elements in a list
elements = ['a', 'b', 'a', 'c', 'b', 'a']
element_count = Counter(elements)
print(element_count)  # Output: Counter({'a': 3, 'b': 2, 'c': 1})

# Counting elements in a string
text = "hello world"
char_count = Counter(text)
print(char_count)  # Output: Counter({'l': 3, 'o': 2, 'h': 1, 'e': 1, ' ': 1, 'w': 1, 'r': 1, 'd': 1})

# Most common elements
print(element_count.most_common(2))  # Output: [('a', 3), ('b', 2)]

# Arithmetic operations
c1 = Counter(a=3, b=1)
c2 = Counter(a=1, b=2)
print(c1 + c2)  # Output: Counter({'a': 4, 'b': 3})
print(c1 - c2)  # Output: Counter({'a': 2})
print(c1 & c2)  # Output: Counter({'a': 1, 'b': 1})
print(c1 | c2)  # Output: Counter({'a': 3, 'b': 2})`,
  exercises: [
    {
      prompt: 'Use the Counter class to count the frequency of each word in a given text.',
      initialCode: `# Write your solution here
from collections import Counter

text = "the quick brown fox jumps over the lazy dog"
words = text.split()
word_count = Counter(words)
print(word_count)`,
      solution: `from collections import Counter

text = "the quick brown fox jumps over the lazy dog"
words = text.split()
word_count = Counter(words)
print(word_count)  # Output: Counter({'the': 2, 'quick': 1, 'brown': 1, 'fox': 1, 'jumps': 1, 'over': 1, 'lazy': 1, 'dog': 1})`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the time complexity of counting elements using the Counter class?',
      options: [
        'O(1)',
        'O(log n)',
        'O(n)',
        'O(n^2)',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. The time complexity is not constant.',
        'This is incorrect. The time complexity is not logarithmic.',
        'This is correct. The time complexity is linear, O(n), where n is the number of elements.',
        'This is incorrect. The time complexity is not quadratic.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const bidictData: LessonContent = {
  title: 'Bidirectional Dictionaries',
  content: `<p>
A bidirectional dictionary (or bidict) is a dictionary that allows for efficient lookups in both directions, i.e., from key to value and from value to key. 
This can be particularly useful in scenarios where you need to map two sets of data bidirectionally. 
Here's how you can use a bidict:
</p>

<ul>
<li><strong>Bidirectional Mapping:</strong> A bidict maintains a mapping from keys to values and from values to keys.</li>
<li><strong>Efficient Lookups:</strong> Both key-to-value and value-to-key lookups are efficient.</li>
<li><strong>Custom Implementations:</strong> You can implement a bidict using two dictionaries or use a specialized library like bidict.</li>
</ul>`,
  codeExample: `# Example of bidict using two dictionaries in Python
class Bidict:
    def __init__(self):
        self.forward = {}
        self.backward = {}

    def add(self, key, value):
        self.forward[key] = value
        self.backward[value] = key

    def get_forward(self, key):
        return self.forward.get(key)

    def get_backward(self, value):
        return self.backward.get(value)

# Example usage
bidict = Bidict()
bidict.add('a', 1)
bidict.add('b', 2)
print(bidict.get_forward('a'))  # Output: 1
print(bidict.get_backward(2))  # Output: b`,
  exercises: [
    {
      prompt: 'Implement a bidirectional dictionary using two dictionaries.',
      initialCode: `# Write your solution here
class Bidict:
    def __init__(self):
        self.forward = {}
        self.backward = {}

    def add(self, key, value):
        self.forward[key] = value
        self.backward[value] = key

    def get_forward(self, key):
        return self.forward.get(key)

    def get_backward(self, value):
        return self.backward.get(value)

# Example usage
bidict = Bidict()
bidict.add('a', 1)
bidict.add('b', 2)
print(bidict.get_forward('a'))  # Output: 1
print(bidict.get_backward(2))  # Output: b`,
      solution: `class Bidict:
    def __init__(self):
        self.forward = {}
        self.backward = {}

    def add(self, key, value):
        self.forward[key] = value
        self.backward[value] = key

    def get_forward(self, key):
        return self.forward.get(key)

    def get_backward(self, value):
        return self.backward.get(value)

# Example usage
bidict = Bidict()
bidict.add('a', 1)
bidict.add('b', 2)
print(bidict.get_forward('a'))  # Output: 1
print(bidict.get_backward(2))  # Output: b`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the time complexity of a bidirectional dictionary lookup using two dictionaries?',
      options: [
        'O(1)',
        'O(log n)',
        'O(n)',
        'O(n^2)',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The time complexity is constant, O(1).',
        'This is incorrect. The time complexity is not logarithmic.',
        'This is incorrect. The time complexity is not linear.',
        'This is incorrect. The time complexity is not quadratic.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const frozenDictData: LessonContent = {
  title: 'Immutable Dictionaries',
  content: `<p>
Immutable dictionaries, also known as frozen dictionaries, are dictionaries that cannot be modified after they are created. 
This can be useful in scenarios where you need to ensure that the dictionary remains unchanged. 
Here's how you can work with immutable dictionaries:
</p>

<ul>
<li><strong>FrozenDict:</strong> A frozen dictionary is a dictionary that cannot be modified after creation.</li>
<li><strong>Efficient Lookups:</strong> Immutable dictionaries provide efficient lookups, similar to regular dictionaries.</li>
<li><strong>Custom Implementations:</strong> You can implement a frozen dictionary using a specialized library like frozendict or by creating a custom class.</li>
</ul>`,
  codeExample: `# Example of frozen dictionary using frozendict in Python
from frozendict import frozendict

# Creating a frozen dictionary
frozen_dict = frozendict({'a': 1, 'b': 2})

# Attempting to modify the frozen dictionary
try:
    frozen_dict['a'] = 3
except TypeError as e:
    print(e)  # Output: '\'frozendict\' object does not support item assignment'

# Efficient lookups
print(frozen_dict['a'])  # Output: 1`,
  exercises: [
    {
      prompt: 'Implement a frozen dictionary using a custom class that raises an error when attempting to modify it.',
      initialCode: `# Write your solution here
class FrozenDict:
    def __init__(self, data):
        self._data = data

    def __getitem__(self, key):
        return self._data[key]

    def __setitem__(self, key, value):
        raise TypeError("'FrozenDict' object does not support item assignment")

# Example usage
frozen_dict = FrozenDict({'a': 1, 'b': 2})
print(frozen_dict['a'])  # Output: 1
try:
    frozen_dict['a'] = 3
except TypeError as e:
    print(e)  # Output: 'FrozenDict' object does not support item assignment'`,
      solution: `class FrozenDict:
    def __init__(self, data):
        self._data = data

    def __getitem__(self, key):
        return self._data[key]

    def __setitem__(self, key, value):
        raise TypeError("'FrozenDict' object does not support item assignment")

# Example usage
frozen_dict = FrozenDict({'a': 1, 'b': 2})
print(frozen_dict['a'])  # Output: 1
try:
    frozen_dict['a'] = 3
except TypeError as e:
    print(e)  # Output: 'FrozenDict' object does not support item assignment'`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the time complexity of a lookup in an immutable dictionary?',
      options: [
        'O(1)',
        'O(log n)',
        'O(n)',
        'O(n^2)',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The time complexity is constant, O(1).',
        'This is incorrect. The time complexity is not logarithmic.',
        'This is incorrect. The time complexity is not linear.',
        'This is incorrect. The time complexity is not quadratic.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const consistentHashingData: LessonContent = {
  title: 'Consistent Hashing',
  content: `<p>
Consistent hashing is a technique used in distributed systems to distribute data across multiple servers in a way that minimizes reorganization when servers are added or removed. 
It is particularly useful in scenarios like distributed caching, load balancing, and distributed hash tables. 
Here's how consistent hashing works:
</p>

<ul>
<li><strong>Hash Function:</strong> A hash function is used to map keys to a range of values.</li>
<li><strong>Hash Ring:</strong> The range of values is represented as a circular ring, where each server is assigned a position on the ring.</li>
<li><strong>Data Distribution:</strong> Each key is mapped to a position on the ring, and the data is stored on the server that is the next clockwise position on the ring.</li>
<li><strong>Server Addition/Removal:</strong> When a server is added or removed, only a small portion of the data needs to be moved to the new or remaining servers.</li>
</ul>`,
  codeExample: `# Example of consistent hashing in Python
import hashlib

class ConsistentHashing:
    def __init__(self, servers):
        self.servers = servers
        self.hash_ring = {}
        for server in servers:
            self.add_server(server)

    def hash_function(self, key):
        return int(hashlib.md5(key.encode()).hexdigest(), 16)

    def add_server(self, server):
        position = self.hash_function(server)
        self.hash_ring[position] = server

    def remove_server(self, server):
        position = self.hash_function(server)
        del self.hash_ring[position]

    def get_server(self, key):
        position = self.hash_function(key)
        for ring_position in sorted(self.hash_ring.keys()):
            if position <= ring_position:
                return self.hash_ring[ring_position]
        return self.hash_ring[min(self.hash_ring.keys())]

# Example usage
servers = ['server1', 'server2', 'server3']
ch = ConsistentHashing(servers)
print(ch.get_server('key1'))  # Output: server1
print(ch.get_server('key2'))  # Output: server2
ch.remove_server('server2')
print(ch.get_server('key2'))  # Output: server3`,
  exercises: [
    {
      prompt: 'Implement a simple consistent hashing system using a hash ring.',
      initialCode: `# Write your solution here
import hashlib

class ConsistentHashing:
    def __init__(self, servers):
        self.servers = servers
        self.hash_ring = {}
        for server in servers:
            self.add_server(server)

    def hash_function(self, key):
        return int(hashlib.md5(key.encode()).hexdigest(), 16)

    def add_server(self, server):
        position = self.hash_function(server)
        self.hash_ring[position] = server

    def remove_server(self, server):
        position = self.hash_function(server)
        del self.hash_ring[position]

    def get_server(self, key):
        position = self.hash_function(key)
        for ring_position in sorted(self.hash_ring.keys()):
            if position <= ring_position:
                return self.hash_ring[ring_position]
        return self.hash_ring[min(self.hash_ring.keys())]

# Example usage
servers = ['server1', 'server2', 'server3']
ch = ConsistentHashing(servers)
print(ch.get_server('key1'))  # Output: server1
print(ch.get_server('key2'))  # Output: server2
ch.remove_server('server2')
print(ch.get_server('key2'))  # Output: server3`,
      solution: `import hashlib

class ConsistentHashing:
    def __init__(self, servers):
        self.servers = servers
        self.hash_ring = {}
        for server in servers:
            self.add_server(server)

    def hash_function(self, key):
        return int(hashlib.md5(key.encode()).hexdigest(), 16)

    def add_server(self, server):
        position = self.hash_function(server)
        self.hash_ring[position] = server

    def remove_server(self, server):
        position = self.hash_function(server)
        del self.hash_ring[position]

    def get_server(self, key):
        position = self.hash_function(key)
        for ring_position in sorted(self.hash_ring.keys()):
            if position <= ring_position:
                return self.hash_ring[ring_position]
        return self.hash_ring[min(self.hash_ring.keys())]

# Example usage
servers = ['server1', 'server2', 'server3']
ch = ConsistentHashing(servers)
print(ch.get_server('key1'))  # Output: server1
print(ch.get_server('key2'))  # Output: server2
ch.remove_server('server2')
print(ch.get_server('key2'))  # Output: server3`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary advantage of consistent hashing in distributed systems?',
      options: [
        'Minimal data movement when servers are added or removed',
        'Simplified data storage',
        'Reduced latency',
        'Increased server capacity',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. Consistent hashing minimizes data movement when servers are added or removed.',
        'This is incorrect. Consistent hashing does not simplify data storage.',
        'This is incorrect. Consistent hashing does not necessarily reduce latency.',
        'This is incorrect. Consistent hashing does not increase server capacity.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const cacheDesignData: LessonContent = {
  title: 'Cache System Design',
  content: `<p>
Cache systems are used to store frequently accessed data in a fast-access storage layer to improve performance. 
Dictionaries (or hash maps) are often used to implement cache systems efficiently. 
Here's how you can design a cache system using dictionaries:
</p>

<ul>
<li><strong>Cache Storage:</strong> Use a dictionary to store key-value pairs where the key is the data identifier and the value is the data.</li>
<li><strong>Cache Eviction Policies:</strong> Implement policies like LRU (Least Recently Used) or FIFO (First In, First Out) to evict data when the cache reaches its capacity.</li>
<li><strong>Cache Hit/Miss:</strong> Check if the requested data is in the cache (cache hit) or not (cache miss) and handle accordingly.</li>
</ul>`,
  codeExample: `# Example of cache system design using dictionaries in Python
class LRUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = {}
        self.order = []

    def get(self, key):
        if key in self.cache:
            self.order.remove(key)
            self.order.append(key)
            return self.cache[key]
        return None

    def put(self, key, value):
        if key in self.cache:
            self.order.remove(key)
        elif len(self.cache) >= self.capacity:
            oldest = self.order.pop(0)
            del self.cache[oldest]
        self.cache[key] = value
        self.order.append(key)

# Example usage
cache = LRUCache(2)
cache.put('a', 1)
cache.put('b', 2)
print(cache.get('a'))  # Output: 1
cache.put('c', 3)
print(cache.get('b'))  # Output: None
print(cache.get('c'))  # Output: 3`,
  exercises: [
    {
      prompt: 'Implement an LRU cache system using a dictionary and a list to maintain the order of access.',
      initialCode: `# Write your solution here
class LRUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = {}
        self.order = []

    def get(self, key):
        if key in self.cache:
            self.order.remove(key)
            self.order.append(key)
            return self.cache[key]
        return None

    def put(self, key, value):
        if key in self.cache:
            self.order.remove(key)
        elif len(self.cache) >= self.capacity:
            oldest = self.order.pop(0)
            del self.cache[oldest]
        self.cache[key] = value
        self.order.append(key)

# Example usage
cache = LRUCache(2)
cache.put('a', 1)
cache.put('b', 2)
print(cache.get('a'))  # Output: 1
cache.put('c', 3)
print(cache.get('b'))  # Output: None
print(cache.get('c'))  # Output: 3`,
      solution: `class LRUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = {}
        self.order = []

    def get(self, key):
        if key in self.cache:
            self.order.remove(key)
            self.order.append(key)
            return self.cache[key]
        return None

    def put(self, key, value):
        if key in self.cache:
            self.order.remove(key)
        elif len(self.cache) >= self.capacity:
            oldest = self.order.pop(0)
            del self.cache[oldest]
        self.cache[key] = value
        self.order.append(key)

# Example usage
cache = LRUCache(2)
cache.put('a', 1)
cache.put('b', 2)
print(cache.get('a'))  # Output: 1
cache.put('c', 3)
print(cache.get('b'))  # Output: None
print(cache.get('c'))  # Output: 3`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary purpose of a cache system in computing?',
      options: [
        'To store frequently accessed data for faster retrieval',
        'To store all data permanently',
        'To store data in a distributed manner',
        'To store data in a sequential manner',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The primary purpose of a cache system is to store frequently accessed data for faster retrieval.',
        'This is incorrect. A cache system does not store all data permanently.',
        'This is incorrect. A cache system does not necessarily store data in a distributed manner.',
        'This is incorrect. A cache system does not store data in a sequential manner.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
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
  'ordered-dict': orderedDictData,
  'hash-function': hashFunctionData,
  'collision-handling': collisionHandlingData,
  'load-factor': loadFactorData,
  'two-sum-pattern': twoSumPatternData,
  'subarray-sum': subarraySumPatternData,
  'isomorphic-pattern': isomorphicPatternData,
  'time-complexity': timeComplexityData,
  'memory-efficient': memoryEfficientData,
  'lru-cache': lruCacheData,
  'graph-representation': graphRepresentationData,
  'trie-implementation': trieImplementationData,
  'counter-class': counterClassData,
  'bidict': bidictData,
  'frozen-dict': frozenDictData,
  'consistent-hashing': consistentHashingData,
  'cache-design': cacheDesignData,
};
export const dictionaryLessonsTab: LessonsTab = {
  curriculum: dictionaryCurriculum,
  lessons: dictionaryLessons,
};
