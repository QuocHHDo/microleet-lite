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

const timeSpaceComplexityAnalysisData: LessonContent = {
  title: 'Time/Space Complexity Analysis',
  content: `<p>
Understanding the time and space complexity of operations on dictionaries and hashmaps is crucial for writing efficient Python code. 
Dictionaries and hashmaps are implemented using hash tables, which provide average-case constant time complexity for key-based operations.
</p>

<ul>
<li><strong>Insertion:</strong> Adding a key-value pair to a dictionary.</li>
<li><strong>Deletion:</strong> Removing a key-value pair from a dictionary.</li>
<li><strong>Lookup:</strong> Retrieving the value associated with a key.</li>
<li><strong>Iteration:</strong> Looping through all key-value pairs in a dictionary.</li>
<li><strong>Space Complexity:</strong> Understanding how memory usage scales with the number of elements.</li>
</ul>`,
  codeExample: `# Insertion
my_dict = {}
my_dict['key1'] = 'value1'  # O(1) time complexity

# Deletion
del my_dict['key1']  # O(1) time complexity

# Lookup
value = my_dict.get('key1')  # O(1) time complexity

# Iteration
for key, value in my_dict.items():  # O(n) time complexity, where n is the number of items
    print(key, value)

# Space Complexity
# O(n) space complexity, where n is the number of key-value pairs`,
  exercises: [
    {
      prompt:
        'Given a dictionary, insert a new key-value pair and then delete it. Analyze the time complexity of each operation.',
      initialCode: `# Write your solution here
my_dict = {}
# Insert a new key-value pair
# Delete the key-value pair`,
      solution: `my_dict = {}
# Insert a new key-value pair
my_dict['new_key'] = 'new_value'  # O(1) time complexity

# Delete the key-value pair
del my_dict['new_key']  # O(1) time complexity`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Given a dictionary, retrieve the value associated with a key. Analyze the time complexity of the lookup operation.',
      initialCode: `# Write your solution here
my_dict = {'key1': 'value1', 'key2': 'value2'}
# Retrieve the value associated with 'key1'`,
      solution: `my_dict = {'key1': 'value1', 'key2': 'value2'}
# Retrieve the value associated with 'key1'
value = my_dict.get('key1')  # O(1) time complexity`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Given a dictionary, iterate through all key-value pairs and print them. Analyze the time complexity of the iteration operation.',
      initialCode: `# Write your solution here
my_dict = {'key1': 'value1', 'key2': 'value2'}
# Iterate through all key-value pairs and print them`,
      solution: `my_dict = {'key1': 'value1', 'key2': 'value2'}
# Iterate through all key-value pairs and print them
for key, value in my_dict.items():  # O(n) time complexity, where n is the number of items
    print(key, value)`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'What is the time complexity of inserting a key-value pair into a dictionary in Python?',
      options: [
        'O(1)',
        'O(log n)',
        'O(n)',
        'O(n log n)',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. Inserting a key-value pair into a dictionary has an average-case time complexity of O(1).',
        'This is incorrect. Insertion is not logarithmic in nature.',
        'This is incorrect. Insertion is not linear in nature.',
        'This is incorrect. Insertion is not n log n in nature.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'What is the time complexity of deleting a key-value pair from a dictionary in Python?',
      options: [
        'O(1)',
        'O(log n)',
        'O(n)',
        'O(n log n)',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. Deleting a key-value pair from a dictionary has an average-case time complexity of O(1).',
        'This is incorrect. Deletion is not logarithmic in nature.',
        'This is incorrect. Deletion is not linear in nature.',
        'This is incorrect. Deletion is not n log n in nature.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'What is the time complexity of looking up a value by key in a dictionary in Python?',
      options: [
        'O(1)',
        'O(log n)',
        'O(n)',
        'O(n log n)',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. Looking up a value by key in a dictionary has an average-case time complexity of O(1).',
        'This is incorrect. Lookup is not logarithmic in nature.',
        'This is incorrect. Lookup is not linear in nature.',
        'This is incorrect. Lookup is not n log n in nature.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'What is the time complexity of iterating through all key-value pairs in a dictionary in Python?',
      options: [
        'O(1)',
        'O(log n)',
        'O(n)',
        'O(n log n)',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. Iteration is not constant time.',
        'This is incorrect. Iteration is not logarithmic in nature.',
        'This is correct. Iterating through all key-value pairs in a dictionary has a time complexity of O(n), where n is the number of items.',
        'This is incorrect. Iteration is not n log n in nature.',
      ],
      difficulty: Difficulty.Beginner,
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

const slidingWindowData: LessonContent = {
  title: 'Sliding Window with Dictionaries',
  content: `<p>
Sliding window problems are a common pattern in algorithm design, often used to find the best or optimal solution in a sequence of elements. 
Dictionaries can be used to efficiently manage and track the elements within the window, making these problems more manageable.
</p>

<ul>
<li><strong>Tracking elements:</strong> Use dictionaries to keep track of the frequency of elements within the window.</li>
<li><strong>Window movement:</strong> Adjust the window by adding new elements and removing old elements from the dictionary.</li>
<li><strong>Optimization:</strong> Use dictionary operations to quickly check conditions and update the window.</li>
</ul>`,
  codeExample: `# Sliding Window with Dictionaries
from collections import defaultdict

def sliding_window(arr, k):
    n = len(arr)
    if n < k:
        return []
    
    window = defaultdict(int)
    result = []
    
    # Initialize the first window
    for i in range(k):
        window[arr[i]] += 1
    
    result.append(dict(window))
    
    # Slide the window
    for i in range(k, n):
        start_elem = arr[i - k]
        new_elem = arr[i]
        
        # Remove the start element from the window
        if window[start_elem] == 1:
            del window[start_elem]
        else:
            window[start_elem] -= 1
        
        # Add the new element to the window
        window[new_elem] += 1
        
        result.append(dict(window))
    
    return result`,
  exercises: [
    {
      prompt:
        'Create a function that takes an array and a window size, and returns the frequency of each element in each window.',
      initialCode: `# Write your solution here
from collections import defaultdict

def sliding_window_frequency(arr, k):
    return `,
      solution: `from collections import defaultdict

def sliding_window_frequency(arr, k):
    n = len(arr)
    if n < k:
        return []
    
    window = defaultdict(int)
    result = []
    
    # Initialize the first window
    for i in range(k):
        window[arr[i]] += 1
    
    result.append(dict(window))
    
    # Slide the window
    for i in range(k, n):
        start_elem = arr[i - k]
        new_elem = arr[i]
        
        # Remove the start element from the window
        if window[start_elem] == 1:
            del window[start_elem]
        else:
            window[start_elem] -= 1
        
        # Add the new element to the window
        window[new_elem] += 1
        
        result.append(dict(window))
    
    return result`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Create a function that takes an array and a window size, and returns the maximum element in each window.',
      initialCode: `# Write your solution here
def sliding_window_max(arr, k):
    return `,
      solution: `def sliding_window_max(arr, k):
    n = len(arr)
    if n < k:
        return []
    
    result = []
    
    # Initialize the first window
    window = arr[:k]
    result.append(max(window))
    
    # Slide the window
    for i in range(k, n):
        window.pop(0)
        window.append(arr[i])
        result.append(max(window))
    
    return result`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is a common use case for dictionaries in sliding window problems?',
      options: [
        'Tracking element frequency',
        'Finding the maximum element',
        'Both A and B',
        'None of the above',
      ],
      correctAnswer: 2,
      explanations: [
        'This is correct. Dictionaries are often used to track the frequency of elements in the window.',
        'This is correct. Dictionaries can be used to find the maximum element in the window.',
        'This is correct. Both tracking element frequency and finding the maximum element are common use cases.',
        'This is incorrect. Both A and B are valid use cases.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of the following operations is most efficient when using a dictionary in a sliding window problem?',
      options: [
        'Insertion',
        'Deletion',
        'Lookup',
        'All of the above',
      ],
      correctAnswer: 3,
      explanations: [
        'This is correct. Insertion in a dictionary is efficient.',
        'This is correct. Deletion in a dictionary is efficient.',
        'This is correct. Lookup in a dictionary is efficient.',
        'This is correct. All of the above operations are efficient in a dictionary.',
      ],
      difficulty: Difficulty.Advanced,
    },
  ],
};

const anagramProblemsData: LessonContent = {
  title: 'Anagram and Permutation',
  content: `<p>
Anagrams and permutations are common string problems that can be efficiently solved using dictionaries. 
Dictionaries allow for quick lookups and comparisons, making these problems more manageable.
</p>

<ul>
<li><strong>Character frequency:</strong> Use dictionaries to count the frequency of each character in the strings.</li>
<li><strong>Comparison:</strong> Compare the character frequencies to determine if two strings are anagrams or permutations.</li>
<li><strong>Optimization:</strong> Use dictionary operations to quickly check conditions and update the counts.</li>
</ul>`,
  codeExample: `# Anagram and Permutation with Dictionaries
from collections import Counter

def are_anagrams(str1, str2):
    return Counter(str1) == Counter(str2)

def find_anagrams(text, pattern):
    n, m = len(text), len(pattern)
    if n < m:
        return []
    
    pattern_count = Counter(pattern)
    text_count = Counter(text[:m])
    result = []
    
    if text_count == pattern_count:
        result.append(0)
    
    for i in range(m, n):
        start_char = text[i - m]
        new_char = text[i]
        
        # Remove the start character from the window
        if text_count[start_char] == 1:
            del text_count[start_char]
        else:
            text_count[start_char] -= 1
        
        # Add the new character to the window
        text_count[new_char] += 1
        
        if text_count == pattern_count:
            result.append(i - m + 1)
    
    return result`,
  exercises: [
    {
      prompt:
        'Create a function that takes two strings and returns True if they are anagrams, otherwise False.',
      initialCode: `# Write your solution here
from collections import Counter

def are_anagrams(str1, str2):
    return `,
      solution: `from collections import Counter

def are_anagrams(str1, str2):
    return Counter(str1) == Counter(str2)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a function that takes a text and a pattern, and returns the starting indices of all anagrams of the pattern in the text.',
      initialCode: `# Write your solution here
from collections import Counter

def find_anagrams(text, pattern):
    return `,
      solution: `from collections import Counter

def find_anagrams(text, pattern):
    n, m = len(text), len(pattern)
    if n < m:
        return []
    
    pattern_count = Counter(pattern)
    text_count = Counter(text[:m])
    result = []
    
    if text_count == pattern_count:
        result.append(0)
    
    for i in range(m, n):
        start_char = text[i - m]
        new_char = text[i]
        
        # Remove the start character from the window
        if text_count[start_char] == 1:
            del text_count[start_char]
        else:
            text_count[start_char] -= 1
        
        # Add the new character to the window
        text_count[new_char] += 1
        
        if text_count == pattern_count:
            result.append(i - m + 1)
    
    return result`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is a common use case for dictionaries in anagram and permutation problems?',
      options: [
        'Counting character frequency',
        'Comparing character frequencies',
        'Both A and B',
        'None of the above',
      ],
      correctAnswer: 2,
      explanations: [
        'This is correct. Dictionaries are often used to count the frequency of characters.',
        'This is correct. Dictionaries are used to compare the frequency of characters.',
        'This is correct. Both counting character frequency and comparing character frequencies are common use cases.',
        'This is incorrect. Both A and B are valid use cases.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of the following operations is most efficient when using a dictionary in anagram and permutation problems?',
      options: [
        'Insertion',
        'Deletion',
        'Lookup',
        'All of the above',
      ],
      correctAnswer: 3,
      explanations: [
        'This is correct. Insertion in a dictionary is efficient.',
        'This is correct. Deletion in a dictionary is efficient.',
        'This is correct. Lookup in a dictionary is efficient.',
        'This is correct. All of the above operations are efficient in a dictionary.',
      ],
      difficulty: Difficulty.Advanced,
    },
  ],
};

const arrayOperationsWithDictionariesData: LessonContent = {
  title: 'Array Operations with Dictionaries',
  content: `<p>
Array operations involving intersections and unions can be efficiently solved using dictionaries. 
Dictionaries provide a fast way to check for the presence of elements and to count occurrences, making them ideal for these types of problems.
</p>

<ul>
<li><strong>Intersection of Arrays:</strong> Find common elements between two arrays.</li>
<li><strong>Union of Arrays:</strong> Combine elements from two arrays without duplicates.</li>
<li><strong>Counting Occurrences:</strong> Use dictionaries to count how many times each element appears in an array.</li>
<li><strong>Finding Unique Elements:</strong> Identify elements that appear only once in an array.</li>
<li><strong>Removing Duplicates:</strong> Create a new array with all duplicate elements removed.</li>
</ul>`,
  codeExample: `# Intersection of Arrays
def array_intersection(arr1, arr2):
    set1 = set(arr1)
    set2 = set(arr2)
    return list(set1 & set2)

arr1 = [1, 2, 3, 4, 5]
arr2 = [4, 5, 6, 7, 8]
print(array_intersection(arr1, arr2))  # Output: [4, 5]

# Union of Arrays
def array_union(arr1, arr2):
    set1 = set(arr1)
    set2 = set(arr2)
    return list(set1 | set2)

print(array_union(arr1, arr2))  # Output: [1, 2, 3, 4, 5, 6, 7, 8]

# Counting Occurrences
def count_occurrences(arr):
    count_dict = {}
    for item in arr:
        if item in count_dict:
            count_dict[item] += 1
        else:
            count_dict[item] = 1
    return count_dict

arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
print(count_occurrences(arr))  # Output: {1: 1, 2: 2, 3: 3, 4: 4}

# Finding Unique Elements
def find_unique_elements(arr):
    count_dict = count_occurrences(arr)
    return [item for item, count in count_dict.items() if count == 1]

print(find_unique_elements(arr))  # Output: [1]

# Removing Duplicates
def remove_duplicates(arr):
    return list(set(arr))

print(remove_duplicates(arr))  # Output: [1, 2, 3, 4]`,
  exercises: [
    {
      prompt:
        'Given two arrays, find the intersection of the two arrays using a dictionary.',
      initialCode: `# Write your solution here
def array_intersection(arr1, arr2):
    return 

arr1 = [1, 2, 3, 4, 5]
arr2 = [4, 5, 6, 7, 8]
print(array_intersection(arr1, arr2))`,
      solution: `def array_intersection(arr1, arr2):
    count_dict = {}
    intersection = []
    
    for item in arr1:
        if item in count_dict:
            count_dict[item] += 1
        else:
            count_dict[item] = 1
    
    for item in arr2:
        if item in count_dict and count_dict[item] > 0:
            intersection.append(item)
            count_dict[item] -= 1
    
    return intersection

arr1 = [1, 2, 3, 4, 5]
arr2 = [4, 5, 6, 7, 8]
print(array_intersection(arr1, arr2))`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Given two arrays, find the union of the two arrays using a dictionary.',
      initialCode: `# Write your solution here
def array_union(arr1, arr2):
    return 

arr1 = [1, 2, 3, 4, 5]
arr2 = [4, 5, 6, 7, 8]
print(array_union(arr1, arr2))`,
      solution: `def array_union(arr1, arr2):
    union_dict = {}
    
    for item in arr1:
        union_dict[item] = True
    
    for item in arr2:
        union_dict[item] = True
    
    return list(union_dict.keys())

arr1 = [1, 2, 3, 4, 5]
arr2 = [4, 5, 6, 7, 8]
print(array_union(arr1, arr2))`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Given an array, count the occurrences of each element using a dictionary.',
      initialCode: `# Write your solution here
def count_occurrences(arr):
    return 

arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
print(count_occurrences(arr))`,
      solution: `def count_occurrences(arr):
    count_dict = {}
    for item in arr:
        if item in count_dict:
            count_dict[item] += 1
        else:
            count_dict[item] = 1
    return count_dict

arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
print(count_occurrences(arr))`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to find the intersection of two arrays using a dictionary?',
      options: [
        'Using a dictionary to count occurrences and then checking for common elements.',
        'Using a list comprehension to filter elements that are in both arrays.',
        'Using the sorted() function with a custom key.',
        'Using the set() function to remove duplicates.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. It uses a dictionary to count occurrences and then checks for common elements.',
        'This is incorrect because it does not use a dictionary.',
        'This is incorrect because it sorts the elements, not finds the intersection.',
        'This is incorrect because it removes duplicates, not finds the intersection.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of the following is the correct way to find the union of two arrays using a dictionary?',
      options: [
        'Using a dictionary to store elements from both arrays without duplicates.',
        'Using a list comprehension to combine elements from both arrays.',
        'Using the sorted() function with a custom key.',
        'Using the set() function to remove duplicates.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. It uses a dictionary to store elements from both arrays without duplicates.',
        'This is incorrect because it does not use a dictionary.',
        'This is incorrect because it sorts the elements, not finds the union.',
        'This is incorrect because it removes duplicates, not finds the union.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of the following is the correct way to count the occurrences of each element in an array using a dictionary?',
      options: [
        'Using a dictionary to store the count of each element.',
        'Using a list comprehension to filter elements by count.',
        'Using the sorted() function with a custom key.',
        'Using the set() function to remove duplicates.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. It uses a dictionary to store the count of each element.',
        'This is incorrect because it does not count occurrences.',
        'This is incorrect because it sorts the elements, not counts occurrences.',
        'This is incorrect because it removes duplicates, not counts occurrences.',
      ],
      difficulty: Difficulty.Beginner,
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
  'array-operations': arrayOperationsWithDictionariesData,
};
export const dictionaryLessonsTab: LessonsTab = {
  curriculum: dictionaryCurriculum,
  lessons: dictionaryLessons,
};
