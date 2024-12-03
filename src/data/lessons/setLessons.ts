import { Difficulty } from '@/common/commonConcept';
import { Curriculum, LessonContent, LessonsTab, PriorityLevel } from '@/common/commonLesson';

const setCurriculum: Curriculum = {
  title: 'Set Curriculum',
  description:
    'A comprehensive guide to mastering set operations and their applications in problem solving',
  sections: [
    {
      id: 1,
      title: 'Set Fundamentals',
      topics: [
        {
          id: 'set-introduction',
          title: 'Introduction to Sets',
          description: 'Understanding sets and their unique characteristics',
          priority: PriorityLevel.Essential
        },
        {
          id: 'set-creation',
          title: 'Creating and Initializing Sets',
          description: 'Different ways to create sets and add initial elements',
          priority: PriorityLevel.Essential
        },
        {
          id: 'set-properties',
          title: 'Set Properties',
          description: 'Understanding uniqueness, unordered nature, and mutability',
          priority: PriorityLevel.Essential
        },
      ],
    },
    {
      id: 2,
      title: 'Basic Set Operations',
      topics: [
        {
          id: 'element-operations',
          title: 'Element Operations',
          description: 'Adding, removing, and checking for element existence',
          priority: PriorityLevel.Essential
        },
        {
          id: 'set-methods',
          title: 'Built-in Set Methods',
          description: 'Using add(), remove(), discard(), pop(), and clear()',
          priority: PriorityLevel.Essential
        },
        {
          id: 'membership-testing',
          title: 'Membership Testing',
          description: 'Efficient O(1) element lookup using "in" operator',
          priority: PriorityLevel.Essential
        },
      ],
    },
    {
      id: 3,
      title: 'Set Mathematics',
      topics: [
        {
          id: 'set-union',
          title: 'Union Operations',
          description: 'Combining sets using union() and | operator',
          priority: PriorityLevel.Essential
        },
        {
          id: 'set-intersection',
          title: 'Intersection Operations',
          description: 'Finding common elements using intersection() and & operator',
          priority: PriorityLevel.Essential
        },
        {
          id: 'set-difference',
          title: 'Difference Operations',
          description: 'Finding unique elements using difference() and - operator',
          priority: PriorityLevel.Essential
        },
        {
          id: 'symmetric-difference',
          title: 'Symmetric Difference',
          description: 'Finding elements in either set but not both',
          priority: PriorityLevel.Important
        },
      ],
    },
    {
      id: 4,
      title: 'Set Relationships',
      topics: [
        {
          id: 'subset-superset',
          title: 'Subsets and Supersets',
          description: 'Understanding and using set containment relationships',
          priority: PriorityLevel.Important
        },
        {
          id: 'disjoint-sets',
          title: 'Disjoint Sets',
          description: 'Working with sets that have no elements in common',
          priority: PriorityLevel.Important
        },
        {
          id: 'set-equality',
          title: 'Set Equality',
          description: 'Comparing sets and understanding equality',
          priority: PriorityLevel.Important
        },
      ],
    },
    {
      id: 5,
      title: 'Set Implementations',
      topics: [
        {
          id: 'hashset',
          title: 'HashSet Implementation',
          description:
            'Understanding how sets are implemented using hash tables',
          priority: PriorityLevel.Important 
        },
        {
          id: 'set-complexity',
          title: 'Time Complexity Analysis',
          description:
            'Understanding performance characteristics of set operations',
          priority: PriorityLevel.Essential
        },
        {
          id: 'set-vs-others',
          title: 'Sets vs Other Data Structures',
          description: 'Choosing between sets, lists, and dictionaries for optimal performance',
          priority: PriorityLevel.Essential
        },
        // {
        //   id: 'ordered-sets',
        //   title: 'Ordered Sets',
        //   description: 'Working with sorted sets and their applications',
        // },
      ],
    },
    {
      id: 6,
      title: 'Common Interview Patterns',
      topics: [
        {
          id: 'duplicate-detection',
          title: 'Duplicate Detection Pattern',
          description: 'Using sets to efficiently find and handle duplicates',
          priority: PriorityLevel.Essential
        },
        {
          id: 'unique-elements',
          title: 'Unique Element Problems',
          description: 'Solving problems involving unique values and deduplication',
          priority: PriorityLevel.Essential
        },
        {
          id: 'set-conversion',
          title: 'Data Structure Conversion',
          description: 'Strategic conversion between sets and other structures',
          priority: PriorityLevel.Important
        },
      ],
    },
    {
      id: 7,
      title: 'Advanced Applications',
      topics: [
        {
          id: 'multisets',
          title: 'Multisets with Counter',
          description: 'Using Counter objects for duplicate element handling',
          priority: PriorityLevel.Beneficial
        },
        {
          id: 'set-comprehension',
          title: 'Set Comprehensions',
          description: 'Creating sets using comprehension syntax',
          priority: PriorityLevel.Important
        },
        {
          id: 'common-mistakes',
          title: 'Common Interview Pitfalls',
          description: 'Avoiding common mistakes when using sets in interviews',
          priority: PriorityLevel.Essential
        },
      ],
    },
    {
      id: 8,
      title: 'Interview Problem Patterns',
      topics: [
        {
          id: 'array-intersection',
          title: 'Array Intersection/Union',
          description: 'Efficiently finding common or combined elements',
          priority: PriorityLevel.Essential
        },
        {
          id: 'string-problems',
          title: 'String Manipulation with Sets',
          description: 'Solving string problems using set operations',
          priority: PriorityLevel.Essential
        },
        {
          id: 'graph-problems',
          title: 'Graph Problems with Sets',
          description: 'Using sets in graph traversal and cycle detection',
          priority: PriorityLevel.Important
        },
      ],
    },
  ]
} as const;

const setIntroductionData: LessonContent = {
  title: 'Introduction to Sets',
  content: `<p>
Sets are a fundamental data structure in Python that store collections of unique elements. 
They are unordered, meaning the elements are not stored in any particular order, and they do not allow duplicate values. 
Sets are mutable, meaning you can add or remove elements after the set is created. 
Here's an introduction to sets and their unique characteristics:
</p>

<ul>
<li><strong>Uniqueness:</strong> Sets do not allow duplicate elements. If you try to add an element that already exists in the set, it will not be added again.</li>
<li><strong>Unordered:</strong> The elements in a set are not stored in any particular order. You cannot access elements by their index.</li>
<li><strong>Mutability:</strong> Sets are mutable, meaning you can add or remove elements after the set is created.</li>
</ul>`,
  codeExample: `# Example of sets in Python
# Creating a set
my_set = {1, 2, 3, 4, 5}

# Adding an element
my_set.add(6)

# Adding a duplicate element
my_set.add(3)  # This will not add 3 again

# Removing an element
my_set.remove(4)

print(my_set)  # Output: {1, 2, 3, 5, 6}`,
  exercises: [
    {
      prompt: 'Create a set and demonstrate the uniqueness and unordered nature of sets.',
      initialCode: `# Write your solution here
# Creating a set
my_set = {1, 2, 3, 4, 5}

# Adding an element
my_set.add(6)

# Adding a duplicate element
my_set.add(3)  # This will not add 3 again

# Removing an element
my_set.remove(4)

print(my_set)  # Output: {1, 2, 3, 5, 6}`,
      solution: `# Creating a set
my_set = {1, 2, 3, 4, 5}

# Adding an element
my_set.add(6)

# Adding a duplicate element
my_set.add(3)  # This will not add 3 again

# Removing an element
my_set.remove(4)

print(my_set)  # Output: {1, 2, 3, 5, 6}`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is true about sets in Python?',
      options: [
        'Sets allow duplicate elements.',
        'Sets are ordered collections.',
        'Sets are mutable.',
        'Sets can be accessed by index.',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. Sets do not allow duplicate elements.',
        'This is incorrect. Sets are unordered collections.',
        'This is correct. Sets are mutable.',
        'This is incorrect. Sets cannot be accessed by index.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const setCreationData: LessonContent = {
  title: 'Creating and Initializing Sets',
  content: `<p>
There are several ways to create and initialize sets in Python. 
You can create a set using curly braces \`{}\`, the \`set()\` constructor, or by converting other iterable types like lists and tuples to sets. 
Here's how you can create and initialize sets:
</p>

<ul>
<li><strong>Using Curly Braces:</strong> You can create a set by enclosing a comma-separated list of elements in curly braces \`{}\`.</li>
<li><strong>Using the set() Constructor:</strong> You can create an empty set or convert an iterable (like a list or tuple) to a set using the \`set()\` constructor.</li>
<li><strong>Converting Iterables:</strong> You can convert lists, tuples, and other iterable types to sets using the \`set()\` constructor.</li>
</ul>`,
  codeExample: `# Example of creating and initializing sets in Python
# Using curly braces
my_set = {1, 2, 3, 4, 5}

# Using the set() constructor
empty_set = set()
another_set = set([4, 5, 6, 7, 8])

# Converting a list to a set
list_to_set = set([1, 2, 3, 4, 5])

print(my_set)  # Output: {1, 2, 3, 4, 5}
print(empty_set)  # Output: set()
print(another_set)  # Output: {4, 5, 6, 7, 8}
print(list_to_set)  # Output: {1, 2, 3, 4, 5}`,
  exercises: [
    {
      prompt: 'Create a set using different methods and print the results.',
      initialCode: `# Write your solution here
# Using curly braces
my_set = {1, 2, 3, 4, 5}

# Using the set() constructor
empty_set = set()
another_set = set([4, 5, 6, 7, 8])

# Converting a list to a set
list_to_set = set([1, 2, 3, 4, 5])

print(my_set)  # Output: {1, 2, 3, 4, 5}
print(empty_set)  # Output: set()
print(another_set)  # Output: {4, 5, 6, 7, 8}
print(list_to_set)  # Output: {1, 2, 3, 4, 5}`,
      solution: `# Using curly braces
my_set = {1, 2, 3, 4, 5}

# Using the set() constructor
empty_set = set()
another_set = set([4, 5, 6, 7, 8])

# Converting a list to a set
list_to_set = set([1, 2, 3, 4, 5])

print(my_set)  # Output: {1, 2, 3, 4, 5}
print(empty_set)  # Output: set()
print(another_set)  # Output: {4, 5, 6, 7, 8}
print(list_to_set)  # Output: {1, 2, 3, 4, 5}`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following methods can be used to create a set in Python?',
      options: [
        'Using square brackets `[]`',
        'Using curly braces `{}`',
        'Using the `set()` constructor',
        'Using the `list()` constructor',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. Square brackets `[]` are used to create lists.',
        'This is correct. Curly braces `{}` can be used to create sets.',
        'This is correct. The `set()` constructor can be used to create sets.',
        'This is incorrect. The `list()` constructor is used to create lists.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const setPropertiesData: LessonContent = {
  title: 'Set Properties',
  content: `<p>
Sets in Python have several important properties that make them useful in various scenarios. 
These properties include uniqueness, unordered nature, and mutability. 
Here's a detailed look at these properties:
</p>

<ul>
<li><strong>Uniqueness:</strong> Sets do not allow duplicate elements. If you try to add an element that already exists in the set, it will not be added again.</li>
<li><strong>Unordered:</strong> The elements in a set are not stored in any particular order. You cannot access elements by their index.</li>
<li><strong>Mutability:</strong> Sets are mutable, meaning you can add or remove elements after the set is created.</li>
</ul>`,
  codeExample: `# Example of set properties in Python
# Uniqueness
my_set = {1, 2, 3, 4, 5}
my_set.add(3)  # This will not add 3 again
print(my_set)  # Output: {1, 2, 3, 4, 5}

# Unordered
print(my_set)  # Output: {1, 2, 3, 4, 5} (order may vary)

# Mutability
my_set.remove(4)
my_set.add(6)
print(my_set)  # Output: {1, 2, 3, 5, 6}`,
  exercises: [
    {
      prompt: 'Demonstrate the uniqueness, unordered nature, and mutability of sets.',
      initialCode: `# Write your solution here
# Uniqueness
my_set = {1, 2, 3, 4, 5}
my_set.add(3)  # This will not add 3 again
print(my_set)  # Output: {1, 2, 3, 4, 5}

# Unordered
print(my_set)  # Output: {1, 2, 3, 4, 5} (order may vary)

# Mutability
my_set.remove(4)
my_set.add(6)
print(my_set)  # Output: {1, 2, 3, 5, 6}`,
      solution: `# Uniqueness
my_set = {1, 2, 3, 4, 5}
my_set.add(3)  # This will not add 3 again
print(my_set)  # Output: {1, 2, 3, 4, 5}

# Unordered
print(my_set)  # Output: {1, 2, 3, 4, 5} (order may vary)

# Mutability
my_set.remove(4)
my_set.add(6)
print(my_set)  # Output: {1, 2, 3, 5, 6}`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is true about the uniqueness property of sets in Python?',
      options: [
        'Sets allow duplicate elements.',
        'Sets do not allow duplicate elements.',
        'Sets allow duplicate elements but remove them automatically.',
        'Sets allow duplicate elements but raise an error.',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. Sets do not allow duplicate elements.',
        'This is correct. Sets do not allow duplicate elements.',
        'This is incorrect. Sets do not allow duplicate elements.',
        'This is incorrect. Sets do not allow duplicate elements.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const elementOperationsData: LessonContent = {
  title: 'Element Operations',
  content: `<p>
Element operations in sets involve adding, removing, and checking for the existence of elements. 
These operations are fundamental to working with sets and are essential for managing the elements within a set. 
Here's how you can perform these operations:
</p>

<ul>
<li><strong>Adding Elements:</strong> Use the \`add()\` method to add a single element to the set.</li>
<li><strong>Removing Elements:</strong> Use the \`remove()\` method to remove a specific element from the set. If the element does not exist, it raises a \`KeyError\`.</li>
<li><strong>Checking for Existence:</strong> Use the \`in\` operator to check if an element exists in the set.</li>
</ul>`,
  codeExample: `# Example of element operations in Python
# Creating a set
my_set = {1, 2, 3, 4, 5}

# Adding an element
my_set.add(6)
print(my_set)  # Output: {1, 2, 3, 4, 5, 6}

# Removing an element
my_set.remove(4)
print(my_set)  # Output: {1, 2, 3, 5, 6}

# Checking for existence
print(3 in my_set)  # Output: True
print(4 in my_set)  # Output: False`,
  exercises: [
    {
      prompt: 'Perform element operations (add, remove, check existence) on a set.',
      initialCode: `# Write your solution here
# Creating a set
my_set = {1, 2, 3, 4, 5}

# Adding an element
my_set.add(6)
print(my_set)  # Output: {1, 2, 3, 4, 5, 6}

# Removing an element
my_set.remove(4)
print(my_set)  # Output: {1, 2, 3, 5, 6}

# Checking for existence
print(3 in my_set)  # Output: True
print(4 in my_set)  # Output: False`,
      solution: `# Creating a set
my_set = {1, 2, 3, 4, 5}

# Adding an element
my_set.add(6)
print(my_set)  # Output: {1, 2, 3, 4, 5, 6}

# Removing an element
my_set.remove(4)
print(my_set)  # Output: {1, 2, 3, 5, 6}

# Checking for existence
print(3 in my_set)  # Output: True
print(4 in my_set)  # Output: False`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which method is used to add an element to a set in Python?',
      options: [
        'append()',
        'add()',
        'insert()',
        'push()',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. `append()` is used for lists, not sets.',
        'This is correct. `add()` is used to add an element to a set.',
        'This is incorrect. `insert()` is used for lists, not sets.',
        'This is incorrect. `push()` is not a method for sets.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const setMethodsData: LessonContent = {
  title: 'Built-in Set Methods',
  content: `<p>
Python provides several built-in methods for working with sets. 
These methods allow you to perform operations like adding elements, removing elements, discarding elements, popping elements, and clearing the set. 
Here's a detailed look at these methods:
</p>

<ul>
<li><strong>add():</strong> Adds a single element to the set.</li>
<li><strong>remove():</strong> Removes a specific element from the set. Raises a \`KeyError\` if the element does not exist.</li>
<li><strong>discard():</strong> Removes a specific element from the set. Does not raise an error if the element does not exist.</li>
<li><strong>pop():</strong> Removes and returns an arbitrary element from the set. Raises a \`KeyError\` if the set is empty.</li>
<li><strong>clear():</strong> Removes all elements from the set, making it empty.</li>
</ul>`,
  codeExample: `# Example of built-in set methods in Python
# Creating a set
my_set = {1, 2, 3, 4, 5}

# Using add()
my_set.add(6)
print(my_set)  # Output: {1, 2, 3, 4, 5, 6}

# Using remove()
my_set.remove(4)
print(my_set)  # Output: {1, 2, 3, 5, 6}

# Using discard()
my_set.discard(3)
print(my_set)  # Output: {1, 2, 5, 6}

# Using pop()
popped_element = my_set.pop()
print(popped_element)  # Output: 1 (or any other element)
print(my_set)  # Output: {2, 5, 6}

# Using clear()
my_set.clear()
print(my_set)  # Output: set()`,
  exercises: [
    {
      prompt: 'Use the built-in set methods to perform various operations on a set.',
      initialCode: `# Write your solution here
# Creating a set
my_set = {1, 2, 3, 4, 5}

# Using add()
my_set.add(6)
print(my_set)  # Output: {1, 2, 3, 4, 5, 6}

# Using remove()
my_set.remove(4)
print(my_set)  # Output: {1, 2, 3, 5, 6}

# Using discard()
my_set.discard(3)
print(my_set)  # Output: {1, 2, 5, 6}

# Using pop()
popped_element = my_set.pop()
print(popped_element)  # Output: 1 (or any other element)
print(my_set)  # Output: {2, 5, 6}

# Using clear()
my_set.clear()
print(my_set)  # Output: set()`,
      solution: `# Creating a set
my_set = {1, 2, 3, 4, 5}

# Using add()
my_set.add(6)
print(my_set)  # Output: {1, 2, 3, 4, 5, 6}

# Using remove()
my_set.remove(4)
print(my_set)  # Output: {1, 2, 3, 5, 6}

# Using discard()
my_set.discard(3)
print(my_set)  # Output: {1, 2, 5, 6}

# Using pop()
popped_element = my_set.pop()
print(popped_element)  # Output: 1 (or any other element)
print(my_set)  # Output: {2, 5, 6}

# Using clear()
my_set.clear()
print(my_set)  # Output: set()`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which method removes an element from a set without raising an error if the element does not exist?',
      options: [
        'remove()',
        'discard()',
        'pop()',
        'clear()',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. `remove()` raises a `KeyError` if the element does not exist.',
        'This is correct. `discard()` removes an element without raising an error if the element does not exist.',
        'This is incorrect. `pop()` removes and returns an arbitrary element, raising a `KeyError` if the set is empty.',
        'This is incorrect. `clear()` removes all elements from the set, not a specific element.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const membershipTestingData: LessonContent = {
  title: 'Membership Testing',
  content: `<p>
Membership testing in sets involves checking whether an element exists in the set. 
This operation is efficient and has an average time complexity of O(1) due to the underlying hash table implementation of sets. 
Here's how you can perform membership testing using the \`in\` operator:
</p>

<ul>
<li><strong>Using the \`in\` Operator:</strong> The \`in\` operator checks if an element is present in the set and returns a boolean value (\`True\` or \`False\`).</li>
</ul>`,
  codeExample: `# Example of membership testing in Python
# Creating a set
my_set = {1, 2, 3, 4, 5}

# Checking for existence
print(3 in my_set)  # Output: True
print(6 in my_set)  # Output: False`,
  exercises: [
    {
      prompt: 'Perform membership testing on a set using the `in` operator.',
      initialCode: `# Write your solution here
# Creating a set
my_set = {1, 2, 3, 4, 5}

# Checking for existence
print(3 in my_set)  # Output: True
print(6 in my_set)  # Output: False`,
      solution: `# Creating a set
my_set = {1, 2, 3, 4, 5}

# Checking for existence
print(3 in my_set)  # Output: True
print(6 in my_set)  # Output: False`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'What is the time complexity of membership testing in a set?',
      options: [
        'O(1)',
        'O(log n)',
        'O(n)',
        'O(n^2)',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. Membership testing in a set has an average time complexity of O(1).',
        'This is incorrect. The time complexity is not logarithmic.',
        'This is incorrect. The time complexity is not linear.',
        'This is incorrect. The time complexity is not quadratic.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const setUnionData: LessonContent = {
  title: 'Union Operations',
  content: `<p>
Union operations in sets involve combining two or more sets to create a new set that contains all unique elements from the original sets. 
This operation can be performed using the \`union()\` method or the \`|\` operator. 
Here's how you can perform union operations:
</p>

<ul>
<li><strong>Using the \`union()\` Method:</strong> The \`union()\` method returns a new set that contains all elements from the original sets.</li>
<li><strong>Using the \`|\` Operator:</strong> The \`|\` operator can be used to perform the union operation in a more concise way.</li>
</ul>`,
  codeExample: `# Example of union operations in Python
# Creating sets
set1 = {1, 2, 3}
set2 = {3, 4, 5}

# Using the union() method
union_set = set1.union(set2)
print(union_set)  # Output: {1, 2, 3, 4, 5}

# Using the | operator
union_set_operator = set1 | set2
print(union_set_operator)  # Output: {1, 2, 3, 4, 5}`,
  exercises: [
    {
      prompt: 'Perform union operations on two sets using both the `union()` method and the `|` operator.',
      initialCode: `# Write your solution here
# Creating sets
set1 = {1, 2, 3}
set2 = {3, 4, 5}

# Using the union() method
union_set = set1.union(set2)
print(union_set)  # Output: {1, 2, 3, 4, 5}

# Using the | operator
union_set_operator = set1 | set2
print(union_set_operator)  # Output: {1, 2, 3, 4, 5}`,
      solution: `# Creating sets
set1 = {1, 2, 3}
set2 = {3, 4, 5}

# Using the union() method
union_set = set1.union(set2)
print(union_set)  # Output: {1, 2, 3, 4, 5}

# Using the | operator
union_set_operator = set1 | set2
print(union_set_operator)  # Output: {1, 2, 3, 4, 5}`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which operator is used to perform the union operation on two sets in Python?',
      options: [
        '&',
        '|',
        '-',
        '^',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. The `&` operator is used for intersection.',
        'This is correct. The `|` operator is used for union.',
        'This is incorrect. The `-` operator is used for difference.',
        'This is incorrect. The `^` operator is used for symmetric difference.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const setIntersectionData: LessonContent = {
  title: 'Intersection Operations',
  content: `<p>
Intersection operations in sets involve finding the common elements between two or more sets. 
This operation can be performed using the \`intersection()\` method or the \`&\` operator. 
Here's how you can perform intersection operations:
</p>

<ul>
<li><strong>Using the \`intersection()\` Method:</strong> The \`intersection()\` method returns a new set that contains only the elements common to all the original sets.</li>
<li><strong>Using the \`&\` Operator:</strong> The \`&\` operator can be used to perform the intersection operation in a more concise way.</li>
</ul>`,
  codeExample: `# Example of intersection operations in Python
# Creating sets
set1 = {1, 2, 3}
set2 = {3, 4, 5}

# Using the intersection() method
intersection_set = set1.intersection(set2)
print(intersection_set)  # Output: {3}

# Using the & operator
intersection_set_operator = set1 & set2
print(intersection_set_operator)  # Output: {3}`,
  exercises: [
    {
      prompt: 'Perform intersection operations on two sets using both the `intersection()` method and the `&` operator.',
      initialCode: `# Write your solution here
# Creating sets
set1 = {1, 2, 3}
set2 = {3, 4, 5}

# Using the intersection() method
intersection_set = set1.intersection(set2)
print(intersection_set)  # Output: {3}

# Using the & operator
intersection_set_operator = set1 & set2
print(intersection_set_operator)  # Output: {3}`,
      solution: `# Creating sets
set1 = {1, 2, 3}
set2 = {3, 4, 5}

# Using the intersection() method
intersection_set = set1.intersection(set2)
print(intersection_set)  # Output: {3}

# Using the & operator
intersection_set_operator = set1 & set2
print(intersection_set_operator)  # Output: {3}`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which operator is used to perform the intersection operation on two sets in Python?',
      options: [
        '&',
        '|',
        '-',
        '^',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The `&` operator is used for intersection.',
        'This is incorrect. The `|` operator is used for union.',
        'This is incorrect. The `-` operator is used for difference.',
        'This is incorrect. The `^` operator is used for symmetric difference.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const setDifferenceData: LessonContent = {
  title: 'Difference Operations',
  content: `<p>
Difference operations in sets involve finding the elements that are present in one set but not in another. 
This operation can be performed using the \`difference()\` method or the \`-\` operator. 
Here's how you can perform difference operations:
</p>

<ul>
<li><strong>Using the \`difference()\` Method:</strong> The \`difference()\` method returns a new set that contains elements present in the first set but not in the second set.</li>
<li><strong>Using the \`-\` Operator:</strong> The \`-\` operator can be used to perform the difference operation in a more concise way.</li>
</ul>`,
  codeExample: `# Example of difference operations in Python
# Creating sets
set1 = {1, 2, 3}
set2 = {3, 4, 5}

# Using the difference() method
difference_set = set1.difference(set2)
print(difference_set)  # Output: {1, 2}

# Using the - operator
difference_set_operator = set1 - set2
print(difference_set_operator)  # Output: {1, 2}`,
  exercises: [
    {
      prompt: 'Perform difference operations on two sets using both the `difference()` method and the `-` operator.',
      initialCode: `# Write your solution here
# Creating sets
set1 = {1, 2, 3}
set2 = {3, 4, 5}

# Using the difference() method
difference_set = set1.difference(set2)
print(difference_set)  # Output: {1, 2}

# Using the - operator
difference_set_operator = set1 - set2
print(difference_set_operator)  # Output: {1, 2}`,
      solution: `# Creating sets
set1 = {1, 2, 3}
set2 = {3, 4, 5}

# Using the difference() method
difference_set = set1.difference(set2)
print(difference_set)  # Output: {1, 2}

# Using the - operator
difference_set_operator = set1 - set2
print(difference_set_operator)  # Output: {1, 2}`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which operator is used to perform the difference operation on two sets in Python?',
      options: [
        '&',
        '|',
        '-',
        '^',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. The `&` operator is used for intersection.',
        'This is incorrect. The `|` operator is used for union.',
        'This is correct. The `-` operator is used for difference.',
        'This is incorrect. The `^` operator is used for symmetric difference.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const symmetricDifferenceData: LessonContent = {
  title: 'Symmetric Difference',
  content: `<p>
Symmetric difference operations in sets involve finding the elements that are present in either of the sets but not in both. 
This operation can be performed using the \`symmetric_difference()\` method or the \`^\` operator. 
Here's how you can perform symmetric difference operations:
</p>

<ul>
<li><strong>Using the \`symmetric_difference()\` Method:</strong> The \`symmetric_difference()\` method returns a new set that contains elements present in either of the sets but not in both.</li>
<li><strong>Using the \`^\` Operator:</strong> The \`^\` operator can be used to perform the symmetric difference operation in a more concise way.</li>
</ul>`,
  codeExample: `# Example of symmetric difference operations in Python
# Creating sets
set1 = {1, 2, 3}
set2 = {3, 4, 5}

# Using the symmetric_difference() method
symmetric_difference_set = set1.symmetric_difference(set2)
print(symmetric_difference_set)  # Output: {1, 2, 4, 5}

# Using the ^ operator
symmetric_difference_set_operator = set1 ^ set2
print(symmetric_difference_set_operator)  # Output: {1, 2, 4, 5}`,
  exercises: [
    {
      prompt: 'Perform symmetric difference operations on two sets using both the `symmetric_difference()` method and the `^` operator.',
      initialCode: `# Write your solution here
# Creating sets
set1 = {1, 2, 3}
set2 = {3, 4, 5}

# Using the symmetric_difference() method
symmetric_difference_set = set1.symmetric_difference(set2)
print(symmetric_difference_set)  # Output: {1, 2, 4, 5}

# Using the ^ operator
symmetric_difference_set_operator = set1 ^ set2
print(symmetric_difference_set_operator)  # Output: {1, 2, 4, 5}`,
      solution: `# Creating sets
set1 = {1, 2, 3}
set2 = {3, 4, 5}

# Using the symmetric_difference() method
symmetric_difference_set = set1.symmetric_difference(set2)
print(symmetric_difference_set)  # Output: {1, 2, 4, 5}

# Using the ^ operator
symmetric_difference_set_operator = set1 ^ set2
print(symmetric_difference_set_operator)  # Output: {1, 2, 4, 5}`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which operator is used to perform the symmetric difference operation on two sets in Python?',
      options: [
        '&',
        '|',
        '-',
        '^',
      ],
      correctAnswer: 3,
      explanations: [
        'This is incorrect. The `&` operator is used for intersection.',
        'This is incorrect. The `|` operator is used for union.',
        'This is incorrect. The `-` operator is used for difference.',
        'This is correct. The `^` operator is used for symmetric difference.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const subsetSupersetData: LessonContent = {
  title: 'Subsets and Supersets',
  content: `<p>
Subsets and supersets are fundamental concepts in set theory that describe the containment relationships between sets. 
A set \\( A \\) is a subset of another set \\( B \\) if every element of \\( A \\) is also an element of \\( B \\). 
Conversely, \\( B \\) is a superset of \\( A \\). 
Here's how you can work with subsets and supersets in Python:
</p>

<ul>
<li><strong>Subset:</strong> Use the issubset() method or the &lt;= operator to check if one set is a subset of another.</li>
<li><strong>Superset:</strong> Use the issuperset() method or the &gt;= operator to check if one set is a superset of another.</li>
</ul>`,
  codeExample: `# Example of subset and superset operations in Python
# Creating sets
set1 = {1, 2, 3}
set2 = {1, 2, 3, 4, 5}

# Using the issubset() method
print(set1.issubset(set2))  # Output: True

# Using the <= operator
print(set1 <= set2)  # Output: True

# Using the issuperset() method
print(set2.issuperset(set1))  # Output: True

# Using the >= operator
print(set2 >= set1)  # Output: True`,
  exercises: [
    {
      prompt: 'Check if one set is a subset or superset of another using both methods and operators.',
      initialCode: `# Write your solution here
# Creating sets
set1 = {1, 2, 3}
set2 = {1, 2, 3, 4, 5}

# Using the issubset() method
print(set1.issubset(set2))  # Output: True

# Using the <= operator
print(set1 <= set2)  # Output: True

# Using the issuperset() method
print(set2.issuperset(set1))  # Output: True

# Using the >= operator
print(set2 >= set1)  # Output: True`,
      solution: `# Creating sets
set1 = {1, 2, 3}
set2 = {1, 2, 3, 4, 5}

# Using the issubset() method
print(set1.issubset(set2))  # Output: True

# Using the <= operator
print(set1 <= set2)  # Output: True

# Using the issuperset() method
print(set2.issuperset(set1))  # Output: True

# Using the >= operator
print(set2 >= set1)  # Output: True`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which operator is used to check if one set is a subset of another in Python?',
      options: [
        '<=',
        '>=',
        '<',
        '>',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The `<=` operator is used to check if one set is a subset of another.',
        'This is incorrect. The `>=` operator is used to check if one set is a superset of another.',
        'This is incorrect. The `<` operator is not used for set relationships.',
        'This is incorrect. The `>` operator is not used for set relationships.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const disjointSetsData: LessonContent = {
  title: 'Disjoint Sets',
  content: `<p>
Disjoint sets are sets that have no elements in common. 
In other words, the intersection of two disjoint sets is the empty set. 
Here's how you can work with disjoint sets in Python:
</p>

<ul>
<li><strong>Using the isdisjoint() Method:</strong> The isdisjoint() method checks if two sets are disjoint (i.e., they have no elements in common).</li>
</ul>`,
  codeExample: `# Example of disjoint sets in Python
# Creating sets
set1 = {1, 2, 3}
set2 = {4, 5, 6}

# Using the isdisjoint() method
print(set1.isdisjoint(set2))  # Output: True`,
  exercises: [
    {
      prompt: 'Check if two sets are disjoint using the `isdisjoint()` method.',
      initialCode: `# Write your solution here
# Creating sets
set1 = {1, 2, 3}
set2 = {4, 5, 6}

# Using the isdisjoint() method
print(set1.isdisjoint(set2))  # Output: True`,
      solution: `# Creating sets
set1 = {1, 2, 3}
set2 = {4, 5, 6}

# Using the isdisjoint() method
print(set1.isdisjoint(set2))  # Output: True`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which method is used to check if two sets are disjoint in Python?',
      options: [
        'isdisjoint()',
        'isequal()',
        'issubset()',
        'issuperset()',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The `isdisjoint()` method is used to check if two sets are disjoint.',
        'This is incorrect. The `isequal()` method does not exist in Python.',
        'This is incorrect. The `issubset()` method is used to check if one set is a subset of another.',
        'This is incorrect. The `issuperset()` method is used to check if one set is a superset of another.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const setEqualityData: LessonContent = {
  title: 'Set Equality',
  content: `<p>
Set equality refers to the comparison of two sets to determine if they contain the same elements. 
Two sets are considered equal if they have the same elements, regardless of their order. 
Here's how you can compare sets for equality in Python:
</p>

<ul>
<li><strong>Using the == Operator:</strong> The == operator checks if two sets are equal (i.e., they contain the same elements).</li>
</ul>`,
  codeExample: `# Example of set equality in Python
# Creating sets
set1 = {1, 2, 3}
set2 = {3, 2, 1}

# Using the == operator
print(set1 == set2)  # Output: True`,
  exercises: [
    {
      prompt: 'Check if two sets are equal using the `==` operator.',
      initialCode: `# Write your solution here
# Creating sets
set1 = {1, 2, 3}
set2 = {3, 2, 1}

# Using the == operator
print(set1 == set2)  # Output: True`,
      solution: `# Creating sets
set1 = {1, 2, 3}
set2 = {3, 2, 1}

# Using the == operator
print(set1 == set2)  # Output: True`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which operator is used to check if two sets are equal in Python?',
      options: [
        '==',
        '!=',
        '>=',
        '<=',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The `==` operator is used to check if two sets are equal.',
        'This is incorrect. The `!=` operator is used to check if two sets are not equal.',
        'This is incorrect. The `>=` operator is used to check if one set is a superset of another.',
        'This is incorrect. The `<=` operator is used to check if one set is a subset of another.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const hashSetData: LessonContent = {
  title: 'HashSet Implementation',
  content: `<p>
A HashSet is a data structure that implements a set using a hash table. 
This allows for efficient insertion, deletion, and lookup operations. 
In Python, the built-in \`set\` type is implemented as a hash table, providing average O(1) time complexity for these operations. 
Here's an overview of how sets are implemented using hash tables:
</p>

<ul>
<li><strong>Hash Function:</strong> A hash function maps elements to indices in the hash table.</li>
<li><strong>Collision Handling:</strong> Techniques like chaining or open addressing are used to handle collisions where multiple elements hash to the same index.</li>
<li><strong>Insertion:</strong> Elements are inserted into the hash table based on their hash value.</li>
<li><strong>Deletion:</strong> Elements are removed from the hash table based on their hash value.</li>
<li><strong>Lookup:</strong> Elements are looked up in the hash table based on their hash value.</li>
</ul>`,
  codeExample: `# Example of HashSet implementation in Python
# Creating a set
my_set = {1, 2, 3, 4, 5}

# Insertion
my_set.add(6)
print(my_set)  # Output: {1, 2, 3, 4, 5, 6}

# Deletion
my_set.remove(4)
print(my_set)  # Output: {1, 2, 3, 5, 6}

# Lookup
print(3 in my_set)  # Output: True
print(4 in my_set)  # Output: False`,
  exercises: [
    {
      prompt: 'Demonstrate the insertion, deletion, and lookup operations on a set.',
      initialCode: `# Write your solution here
# Creating a set
my_set = {1, 2, 3, 4, 5}

# Insertion
my_set.add(6)
print(my_set)  # Output: {1, 2, 3, 4, 5, 6}

# Deletion
my_set.remove(4)
print(my_set)  # Output: {1, 2, 3, 5, 6}

# Lookup
print(3 in my_set)  # Output: True
print(4 in my_set)  # Output: False`,
      solution: `# Creating a set
my_set = {1, 2, 3, 4, 5}

# Insertion
my_set.add(6)
print(my_set)  # Output: {1, 2, 3, 4, 5, 6}

# Deletion
my_set.remove(4)
print(my_set)  # Output: {1, 2, 3, 5, 6}

# Lookup
print(3 in my_set)  # Output: True
print(4 in my_set)  # Output: False`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the average time complexity of insertion, deletion, and lookup operations in a HashSet?',
      options: [
        'O(1)',
        'O(log n)',
        'O(n)',
        'O(n^2)',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The average time complexity is O(1).',
        'This is incorrect. The time complexity is not logarithmic.',
        'This is incorrect. The time complexity is not linear.',
        'This is incorrect. The time complexity is not quadratic.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const setComplexityData: LessonContent = {
  title: 'Time Complexity Analysis',
  content: `<p>
Understanding the time complexity of set operations is crucial for optimizing the performance of your code. 
In Python, the built-in \`set\` type is implemented as a hash table, providing average O(1) time complexity for common operations. 
Here's a detailed look at the time complexity of various set operations:
</p>

<ul>
<li><strong>Insertion (\`add()\`):</strong> Average O(1) time complexity.</li>
<li><strong>Deletion (\`remove()\`):</strong> Average O(1) time complexity.</li>
<li><strong>Lookup (\`in\` operator):</strong> Average O(1) time complexity.</li>
<li><strong>Union (\`union()\`):</strong> Average O(n + m) time complexity, where n and m are the sizes of the sets.</li>
<li><strong>Intersection (\`intersection()\`):</strong> Average O(min(n, m)) time complexity, where n and m are the sizes of the sets.</li>
<li><strong>Difference (\`difference()\`):</strong> Average O(n) time complexity, where n is the size of the first set.</li>
<li><strong>Symmetric Difference (\`symmetric_difference()\`):</strong> Average O(n + m) time complexity, where n and m are the sizes of the sets.</li>
</ul>`,
  codeExample: `# Example of time complexity analysis in Python
# Creating sets
set1 = {1, 2, 3}
set2 = {3, 4, 5}

# Insertion
set1.add(4)  # O(1)

# Deletion
set1.remove(2)  # O(1)

# Lookup
print(3 in set1)  # O(1)

# Union
union_set = set1.union(set2)  # O(n + m)

# Intersection
intersection_set = set1.intersection(set2)  # O(min(n, m))

# Difference
difference_set = set1.difference(set2)  # O(n)

# Symmetric Difference
symmetric_difference_set = set1.symmetric_difference(set2)  # O(n + m)`,
  exercises: [
    {
      prompt: 'Analyze the time complexity of various set operations.',
      initialCode: `# Write your solution here
# Creating sets
set1 = {1, 2, 3}
set2 = {3, 4, 5}

# Insertion
set1.add(4)  # O(1)

# Deletion
set1.remove(2)  # O(1)

# Lookup
print(3 in set1)  # O(1)

# Union
union_set = set1.union(set2)  # O(n + m)

# Intersection
intersection_set = set1.intersection(set2)  # O(min(n, m))

# Difference
difference_set = set1.difference(set2)  # O(n)

# Symmetric Difference
symmetric_difference_set = set1.symmetric_difference(set2)  # O(n + m)`,
      solution: `# Creating sets
set1 = {1, 2, 3}
set2 = {3, 4, 5}

# Insertion
set1.add(4)  # O(1)

# Deletion
set1.remove(2)  # O(1)

# Lookup
print(3 in set1)  # O(1)

# Union
union_set = set1.union(set2)  # O(n + m)

# Intersection
intersection_set = set1.intersection(set2)  # O(min(n, m))

# Difference
difference_set = set1.difference(set2)  # O(n)

# Symmetric Difference
symmetric_difference_set = set1.symmetric_difference(set2)  # O(n + m)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the average time complexity of the \`union()\` operation on two sets in Python?',
      options: [
        'O(1)',
        'O(log n)',
        'O(n + m)',
        'O(n^2)',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. The time complexity is not constant.',
        'This is incorrect. The time complexity is not logarithmic.',
        'This is correct. The time complexity is O(n + m), where n and m are the sizes of the sets.',
        'This is incorrect. The time complexity is not quadratic.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const setsVsOtherDataStructuresData: LessonContent = {
  title: 'Sets vs Other Data Structures',
  content: `<p>
Choosing the right data structure is crucial for optimal performance in Python. 
Sets, lists, and dictionaries each have their own strengths and weaknesses, and understanding when to use each can significantly impact the efficiency of your code.
</p>

<ul>
<li><strong>Sets:</strong> Unordered collections of unique elements. Ideal for membership tests and eliminating duplicates.</li>
<li><strong>Lists:</strong> Ordered collections that can contain duplicates. Ideal for sequences where order matters.</li>
<li><strong>Dictionaries:</strong> Unordered collections of key-value pairs. Ideal for fast lookups and mappings.</li>
<li><strong>Membership Tests:</strong> Comparing the efficiency of membership tests in sets, lists, and dictionaries.</li>
<li><strong>Insertion and Deletion:</strong> Comparing the efficiency of insertion and deletion operations in sets, lists, and dictionaries.</li>
<li><strong>Space Complexity:</strong> Understanding how memory usage scales with the number of elements in each data structure.</li>
</ul>`,
  codeExample: `# Membership Test in Sets
my_set = {1, 2, 3, 4, 5}
print(3 in my_set)  # O(1) time complexity

# Membership Test in Lists
my_list = [1, 2, 3, 4, 5]
print(3 in my_list)  # O(n) time complexity, where n is the number of elements

# Membership Test in Dictionaries
my_dict = {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'}
print(3 in my_dict)  # O(1) time complexity

# Insertion in Sets
my_set.add(6)  # O(1) time complexity

# Insertion in Lists
my_list.append(6)  # O(1) time complexity

# Insertion in Dictionaries
my_dict[6] = 'f'  # O(1) time complexity

# Deletion in Sets
my_set.remove(6)  # O(1) time complexity

# Deletion in Lists
my_list.remove(6)  # O(n) time complexity, where n is the number of elements

# Deletion in Dictionaries
del my_dict[6]  # O(1) time complexity

# Space Complexity
# Sets and dictionaries have O(n) space complexity, where n is the number of elements
# Lists have O(n) space complexity, where n is the number of elements`,
  exercises: [
    {
      prompt:
        'Given a list of elements, convert it to a set to remove duplicates. Analyze the time complexity of the conversion.',
      initialCode: `# Write your solution here
my_list = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
# Convert the list to a set to remove duplicates`,
      solution: `my_list = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
# Convert the list to a set to remove duplicates
my_set = set(my_list)  # O(n) time complexity, where n is the number of elements

print(my_set)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Given a dictionary, check if a key exists. Analyze the time complexity of the lookup operation.',
      initialCode: `# Write your solution here
my_dict = {'key1': 'value1', 'key2': 'value2'}
# Check if 'key1' exists in the dictionary`,
      solution: `my_dict = {'key1': 'value1', 'key2': 'value2'}
# Check if 'key1' exists in the dictionary
exists = 'key1' in my_dict  # O(1) time complexity

print(exists)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Given a list, check if an element exists. Analyze the time complexity of the membership test.',
      initialCode: `# Write your solution here
my_list = [1, 2, 3, 4, 5]
# Check if 3 exists in the list`,
      solution: `my_list = [1, 2, 3, 4, 5]
# Check if 3 exists in the list
exists = 3 in my_list  # O(n) time complexity, where n is the number of elements

print(exists)`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'Which data structure is best for membership tests in Python?',
      options: [
        'Sets',
        'Lists',
        'Dictionaries',
        'Tuples',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. Sets provide O(1) time complexity for membership tests.',
        'This is incorrect. Lists provide O(n) time complexity for membership tests.',
        'This is incorrect. Dictionaries provide O(1) time complexity for membership tests, but they are more suited for key-value lookups.',
        'This is incorrect. Tuples provide O(n) time complexity for membership tests, similar to lists.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which data structure is best for fast lookups and mappings in Python?',
      options: [
        'Sets',
        'Lists',
        'Dictionaries',
        'Tuples',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. Sets are not designed for key-value lookups.',
        'This is incorrect. Lists are not designed for fast lookups.',
        'This is correct. Dictionaries provide O(1) time complexity for key-value lookups.',
        'This is incorrect. Tuples are not designed for fast lookups.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which data structure is best for maintaining order and allowing duplicates in Python?',
      options: [
        'Sets',
        'Lists',
        'Dictionaries',
        'Tuples',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. Sets do not maintain order and do not allow duplicates.',
        'This is correct. Lists maintain order and allow duplicates.',
        'This is incorrect. Dictionaries do not maintain order and are designed for key-value pairs.',
        'This is incorrect. Tuples maintain order and allow duplicates, but they are immutable.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which data structure is best for eliminating duplicates in Python?',
      options: [
        'Sets',
        'Lists',
        'Dictionaries',
        'Tuples',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. Sets automatically eliminate duplicates.',
        'This is incorrect. Lists allow duplicates.',
        'This is incorrect. Dictionaries are designed for key-value pairs and do not automatically eliminate duplicates.',
        'This is incorrect. Tuples allow duplicates.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const orderedSetsData: LessonContent = {
  title: 'Ordered Sets',
  content: `<p>
Ordered sets are sets that maintain the order of elements as they are inserted. 
In Python, the \`collections\` module provides the \`OrderedDict\` class, which can be used to create ordered sets. 
However, for a more specialized ordered set, you can use the \`sortedcontainers\` library, which provides the \`SortedSet\` class. 
Here's how you can work with ordered sets:
</p>

<ul>
<li><strong>Using \`SortedSet\`:</strong> The \`SortedSet\` class from the \`sortedcontainers\` library maintains the order of elements as they are inserted.</li>
<li><strong>Insertion:</strong> Elements are inserted in sorted order.</li>
<li><strong>Deletion:</strong> Elements are removed while maintaining the sorted order.</li>
<li><strong>Lookup:</strong> Elements are looked up in the sorted order.</li>
</ul>`,
  codeExample: `# Example of ordered sets in Python
from sortedcontainers import SortedSet

# Creating an ordered set
ordered_set = SortedSet([3, 1, 4, 1, 5, 9])

# Insertion
ordered_set.add(2)
print(ordered_set)  # Output: SortedSet([1, 2, 3, 4, 5, 9])

# Deletion
ordered_set.discard(4)
print(ordered_set)  # Output: SortedSet([1, 2, 3, 5, 9])

# Lookup
print(3 in ordered_set)  # Output: True
print(4 in ordered_set)  # Output: False`,
  exercises: [
    {
      prompt: 'Implement ordered set operations with SortedSet from the sortedcontainers library.',
      initialCode: `# Write your solution here
from sortedcontainers import SortedSet

# Creating an ordered set
ordered_set = SortedSet([3, 1, 4, 1, 5, 9])

# Insertion
ordered_set.add(2)
print(ordered_set)  # Output: SortedSet([1, 2, 3, 4, 5, 9])

# Deletion
ordered_set.discard(4)
print(ordered_set)  # Output: SortedSet([1, 2, 3, 5, 9])

# Lookup
print(3 in ordered_set)  # Output: True
print(4 in ordered_set)  # Output: False`,
      solution: `from sortedcontainers import SortedSet

# Creating an ordered set
ordered_set = SortedSet([3, 1, 4, 1, 5, 9])

# Insertion
ordered_set.add(2)
print(ordered_set)  # Output: SortedSet([1, 2, 3, 4, 5, 9])

# Deletion
ordered_set.discard(4)
print(ordered_set)  # Output: SortedSet([1, 2, 3, 5, 9])

# Lookup
print(3 in ordered_set)  # Output: True
print(4 in ordered_set)  # Output: False`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which library provides the \`SortedSet\` class for ordered sets in Python?',
      options: [
        'collections',
        'itertools',
        'sortedcontainers',
        'heapq',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. The \`collections\` library does not provide a \`SortedSet\` class.',
        'This is incorrect. The \`itertools\` library does not provide a \`SortedSet\` class.',
        'This is correct. The \`sortedcontainers\` library provides the \`SortedSet\` class.',
        'This is incorrect. The \`heapq\` library does not provide a \`SortedSet\` class.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const duplicateDetectionData: LessonContent = {
  title: 'Duplicate Detection',
  content: `<p>
Duplicate detection is a common problem in programming where the goal is to identify and handle duplicate elements in a collection. 
Sets are particularly useful for this task because they inherently do not allow duplicate elements. 
Here's how you can use sets to detect and handle duplicates:
</p>

<ul>
<li><strong>Using a Set:</strong> Traverse the collection and add elements to a set. If an element is already in the set, it is a duplicate.</li>
<li><strong>Handling Duplicates:</strong> You can choose to remove duplicates, count them, or handle them in any other way based on your requirements.</li>
</ul>`,
  codeExample: `# Example of duplicate detection in Python
# Creating a list with duplicates
my_list = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 9, 1]

# Using a set to detect duplicates
seen = set()
duplicates = set()

for item in my_list:
    if item in seen:
        duplicates.add(item)
    else:
        seen.add(item)

print("Duplicates:", duplicates)  # Output: Duplicates: {1, 2, 3}`,
  exercises: [
    {
      prompt: 'Detect and handle duplicates in a list using a set.',
      initialCode: `# Write your solution here
# Creating a list with duplicates
my_list = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 9, 1]

# Using a set to detect duplicates
seen = set()
duplicates = set()

for item in my_list:
    if item in seen:
        duplicates.add(item)
    else:
        seen.add(item)

print("Duplicates:", duplicates)  # Output: Duplicates: {1, 2, 3}`,
      solution: `# Creating a list with duplicates
my_list = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 9, 1]

# Using a set to detect duplicates
seen = set()
duplicates = set()

for item in my_list:
    if item in seen:
        duplicates.add(item)
    else:
        seen.add(item)

print("Duplicates:", duplicates)  # Output: Duplicates: {1, 2, 3}`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary advantage of using a set for duplicate detection?',
      options: [
        'Sets allow duplicate elements.',
        'Sets are ordered collections.',
        'Sets do not allow duplicate elements.',
        'Sets are immutable.',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. Sets do not allow duplicate elements.',
        'This is incorrect. Sets are unordered collections.',
        'This is correct. Sets do not allow duplicate elements, making them ideal for duplicate detection.',
        'This is incorrect. Sets are mutable.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const uniqueElementsData: LessonContent = {
  title: 'Unique Element Problems',
  content: `<p>
Unique element problems involve finding or working with elements that appear only once in a collection. 
Sets are useful for solving these problems because they inherently store unique elements. 
Here's how you can solve unique element problems using sets:
</p>

<ul>
<li><strong>Finding Unique Elements:</strong> Convert the collection to a set to remove duplicates and then perform the required operations.</li>
<li><strong>Counting Unique Elements:</strong> Use the len() function on the set to get the count of unique elements.</li>
<li><strong>Filtering Unique Elements:</strong> Use the set to filter out duplicate elements from the original collection.</li>
</ul>`,
  codeExample: `# Example of unique element problems in Python
# Creating a list with duplicates
my_list = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 9, 1]

# Finding unique elements
unique_elements = set(my_list)
print("Unique elements:", unique_elements)  # Output: Unique elements: {1, 2, 3, 4, 5, 6, 7, 8, 9}

# Counting unique elements
unique_count = len(unique_elements)
print("Number of unique elements:", unique_count)  # Output: Number of unique elements: 9

# Filtering unique elements
filtered_list = list(unique_elements)
print("Filtered list:", filtered_list)  # Output: Filtered list: [1, 2, 3, 4, 5, 6, 7, 8, 9]`,
  exercises: [
    {
      prompt: 'Find, count, and filter unique elements in a list using a set.',
      initialCode: `# Write your solution here
# Creating a list with duplicates
my_list = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 9, 1]

# Finding unique elements
unique_elements = set(my_list)
print("Unique elements:", unique_elements)  # Output: Unique elements: {1, 2, 3, 4, 5, 6, 7, 8, 9}

# Counting unique elements
unique_count = len(unique_elements)
print("Number of unique elements:", unique_count)  # Output: Number of unique elements: 9

# Filtering unique elements
filtered_list = list(unique_elements)
print("Filtered list:", filtered_list)  # Output: Filtered list: [1, 2, 3, 4, 5, 6, 7, 8, 9]`,
      solution: `# Creating a list with duplicates
my_list = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 9, 1]

# Finding unique elements
unique_elements = set(my_list)
print("Unique elements:", unique_elements)  # Output: Unique elements: {1, 2, 3, 4, 5, 6, 7, 8, 9}

# Counting unique elements
unique_count = len(unique_elements)
print("Number of unique elements:", unique_count)  # Output: Number of unique elements: 9

# Filtering unique elements
filtered_list = list(unique_elements)
print("Filtered list:", filtered_list)  # Output: Filtered list: [1, 2, 3, 4, 5, 6, 7, 8, 9]`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary advantage of using a set for unique element problems?',
      options: [
        'Sets allow duplicate elements.',
        'Sets are ordered collections.',
        'Sets do not allow duplicate elements.',
        'Sets are immutable.',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. Sets do not allow duplicate elements.',
        'This is incorrect. Sets are unordered collections.',
        'This is correct. Sets do not allow duplicate elements, making them ideal for unique element problems.',
        'This is incorrect. Sets are mutable.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const setConversionData: LessonContent = {
  title: 'Set Conversion Techniques',
  content: `<p>
Set conversion techniques involve converting between sets and other data structures like lists, tuples, and dictionaries. 
This is useful when you need to leverage the unique properties of sets while working with other data types. 
Here's how you can perform set conversions:
</p>

<ul>
<li><strong>Converting Lists to Sets:</strong> Use the set() constructor to convert a list to a set.</li>
<li><strong>Converting Tuples to Sets:</strong> Use the set() constructor to convert a tuple to a set.</li>
<li><strong>Converting Sets to Lists:</strong> Use the list() constructor to convert a set to a list.</li>
<li><strong>Converting Sets to Tuples:</strong> Use the tuple() constructor to convert a set to a tuple.</li>
<li><strong>Converting Dictionaries to Sets:</strong> Use the set() constructor on the keys or values of a dictionary to convert them to a set.</li>
</ul>`,
  codeExample: `# Example of set conversion techniques in Python
# Converting a list to a set
my_list = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 9, 1]
my_set = set(my_list)
print("Set from list:", my_set)  # Output: Set from list: {1, 2, 3, 4, 5, 6, 7, 8, 9}

# Converting a tuple to a set
my_tuple = (1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 9, 1)
my_set = set(my_tuple)
print("Set from tuple:", my_set)  # Output: Set from tuple: {1, 2, 3, 4, 5, 6, 7, 8, 9}

# Converting a set to a list
my_set = {1, 2, 3, 4, 5, 6, 7, 8, 9}
my_list = list(my_set)
print("List from set:", my_list)  # Output: List from set: [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Converting a set to a tuple
my_set = {1, 2, 3, 4, 5, 6, 7, 8, 9}
my_tuple = tuple(my_set)
print("Tuple from set:", my_tuple)  # Output: Tuple from set: (1, 2, 3, 4, 5, 6, 7, 8, 9)

# Converting dictionary keys to a set
my_dict = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}
my_set = set(my_dict.keys())
print("Set from dictionary keys:", my_set)  # Output: Set from dictionary keys: {'a', 'b', 'c', 'd', 'e'}`,
  exercises: [
    {
      prompt: 'Convert between sets, lists, tuples, and dictionaries using the appropriate constructors.',
      initialCode: `# Write your solution here
# Converting a list to a set
my_list = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 9, 1]
my_set = set(my_list)
print("Set from list:", my_set)  # Output: Set from list: {1, 2, 3, 4, 5, 6, 7, 8, 9}

# Converting a tuple to a set
my_tuple = (1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 9, 1)
my_set = set(my_tuple)
print("Set from tuple:", my_set)  # Output: Set from tuple: {1, 2, 3, 4, 5, 6, 7, 8, 9}

# Converting a set to a list
my_set = {1, 2, 3, 4, 5, 6, 7, 8, 9}
my_list = list(my_set)
print("List from set:", my_list)  # Output: List from set: [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Converting a set to a tuple
my_set = {1, 2, 3, 4, 5, 6, 7, 8, 9}
my_tuple = tuple(my_set)
print("Tuple from set:", my_tuple)  # Output: Tuple from set: (1, 2, 3, 4, 5, 6, 7, 8, 9)

# Converting dictionary keys to a set
my_dict = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}
my_set = set(my_dict.keys())
print("Set from dictionary keys:", my_set)  # Output: Set from dictionary keys: {'a', 'b', 'c', 'd', 'e'}`,
      solution: `# Converting a list to a set
my_list = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 9, 1]
my_set = set(my_list)
print("Set from list:", my_set)  # Output: Set from list: {1, 2, 3, 4, 5, 6, 7, 8, 9}

# Converting a tuple to a set
my_tuple = (1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 9, 1)
my_set = set(my_tuple)
print("Set from tuple:", my_set)  # Output: Set from tuple: {1, 2, 3, 4, 5, 6, 7, 8, 9}

# Converting a set to a list
my_set = {1, 2, 3, 4, 5, 6, 7, 8, 9}
my_list = list(my_set)
print("List from set:", my_list)  # Output: List from set: [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Converting a set to a tuple
my_set = {1, 2, 3, 4, 5, 6, 7, 8, 9}
my_tuple = tuple(my_set)
print("Tuple from set:", my_tuple)  # Output: Tuple from set: (1, 2, 3, 4, 5, 6, 7, 8, 9)

# Converting dictionary keys to a set
my_dict = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}
my_set = set(my_dict.keys())
print("Set from dictionary keys:", my_set)  # Output: Set from dictionary keys: {'a', 'b', 'c', 'd', 'e'}`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which constructor is used to convert a list to a set in Python?',
      options: [
        'list()',
        'tuple()',
        'set()',
        'dict()',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. list() is used to convert to a list.',
        'This is incorrect. tuple() is used to convert to a tuple.',
        'This is correct. set() is used to convert to a set.',
        'This is incorrect. dict() is used to convert to a dictionary.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const multisetsData: LessonContent = {
  title: 'Multisets and Counting',
  content: `<p>
Multisets, also known as bags, are a generalization of sets that allow multiple instances of the same element. 
In Python, the collections module provides the Counter class, which can be used to handle duplicate elements and count their occurrences. 
Here's how you can work with multisets using Counter:
</p>

<ul>
<li><strong>Using Counter:</strong> The Counter class from the collections module can be used to count the occurrences of elements in a collection.</li>
<li><strong>Counting Elements:</strong> Use the Counter object to count the occurrences of each element in a list or other iterable.</li>
<li><strong>Accessing Counts:</strong> Use the Counter object to access the count of a specific element.</li>
</ul>`,
  codeExample: `# Example of multisets and counting in Python
from collections import Counter

# Creating a list with duplicates
my_list = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 9, 1]

# Using Counter to count elements
counter = Counter(my_list)
print("Element counts:", counter)  # Output: Element counts: Counter({1: 2, 2: 2, 3: 2, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1, 9: 1})

# Accessing the count of a specific element
print("Count of 3:", counter[3])  # Output: Count of 3: 2`,
  exercises: [
    {
      prompt: 'Count the occurrences of elements in a list using the `Counter` class.',
      initialCode: `# Write your solution here
from collections import Counter

# Creating a list with duplicates
my_list = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 9, 1]

# Using Counter to count elements
counter = Counter(my_list)
print("Element counts:", counter)  # Output: Element counts: Counter({1: 2, 2: 2, 3: 2, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1, 9: 1})

# Accessing the count of a specific element
print("Count of 3:", counter[3])  # Output: Count of 3: 2`,
      solution: `from collections import Counter

# Creating a list with duplicates
my_list = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 9, 1]

# Using Counter to count elements
counter = Counter(my_list)
print("Element counts:", counter)  # Output: Element counts: Counter({1: 2, 2: 2, 3: 2, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1, 9: 1})

# Accessing the count of a specific element
print("Count of 3:", counter[3])  # Output: Count of 3: 2`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which class from the `collections` module is used to count the occurrences of elements in a collection?',
      options: [
        'Set',
        'Counter',
        'Multiset',
        'Bag',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. `Set` is a standard set class.',
        'This is correct. `Counter` is used to count the occurrences of elements.',
        'This is incorrect. `Multiset` is not a class in the `collections` module.',
        'This is incorrect. `Bag` is not a class in the `collections` module.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const setComprehensionData: LessonContent = {
  title: 'Set Comprehensions',
  content: `<p>
Set comprehensions provide a concise way to create sets. 
They are similar to list comprehensions but are used to create sets instead of lists. 
Set comprehensions are useful for generating sets based on existing iterables or applying transformations to elements. 
Here's how you can use set comprehensions:
</p>

<ul>
<li><strong>Basic Syntax:</strong> {expression for item in iterable}</li>
<li><strong>Conditional Syntax:</strong> {expression for item in iterable if condition}</li>
<li><strong>Nested Comprehensions:</strong> {expression for item1 in iterable1 for item2 in iterable2}</li>
</ul>`,
  codeExample: `# Example of set comprehensions in Python
# Basic set comprehension
squares = {x**2 for x in range(10)}
print("Squares:", squares)  # Output: Squares: {0, 1, 4, 9, 16, 25, 36, 49, 64, 81}

# Conditional set comprehension
even_squares = {x**2 for x in range(10) if x % 2 == 0}
print("Even squares:", even_squares)  # Output: Even squares: {0, 4, 16, 36, 64}

# Nested set comprehension
nested_set = {x + y for x in range(3) for y in range(3)}
print("Nested set:", nested_set)  # Output: Nested set: {0, 1, 2, 3, 4}`,
  exercises: [
    {
      prompt: 'Create sets using set comprehensions with and without conditions.',
      initialCode: `# Write your solution here
# Basic set comprehension
squares = {x**2 for x in range(10)}
print("Squares:", squares)  # Output: Squares: {0, 1, 4, 9, 16, 25, 36, 49, 64, 81}

# Conditional set comprehension
even_squares = {x**2 for x in range(10) if x % 2 == 0}
print("Even squares:", even_squares)  # Output: Even squares: {0, 4, 16, 36, 64}

# Nested set comprehension
nested_set = {x + y for x in range(3) for y in range(3)}
print("Nested set:", nested_set)  # Output: Nested set: {0, 1, 2, 3, 4}`,
      solution: `# Basic set comprehension
squares = {x**2 for x in range(10)}
print("Squares:", squares)  # Output: Squares: {0, 1, 4, 9, 16, 25, 36, 49, 64, 81}

# Conditional set comprehension
even_squares = {x**2 for x in range(10) if x % 2 == 0}
print("Even squares:", even_squares)  # Output: Even squares: {0, 4, 16, 36, 64}

# Nested set comprehension
nested_set = {x + y for x in range(3) for y in range(3)}
print("Nested set:", nested_set)  # Output: Nested set: {0, 1, 2, 3, 4}`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is the correct syntax for a set comprehension in Python?',
      options: [
        '[expression for item in iterable]',
        '{expression for item in iterable}',
        '(expression for item in iterable)',
        'expression for item in iterable',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. This syntax is for list comprehensions.',
        'This is correct. This syntax is for set comprehensions.',
        'This is incorrect. This syntax is for generator expressions.',
        'This is incorrect. This syntax is incomplete and not valid.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};
const commonInterviewPitfallsData: LessonContent = {
  title: 'Common Interview Pitfalls',
  content: `<p>
Avoiding common mistakes when using sets in interviews is crucial for demonstrating your problem-solving skills effectively. 
This lesson covers common pitfalls and how to avoid them.
</p>

<ul>
<li><strong>Misunderstanding Set Operations:</strong> Avoiding common misconceptions about set operations like union, intersection, and difference.</li>
<li><strong>Edge Cases:</strong> Handling edge cases such as empty sets, single-element sets, and sets with duplicate elements.</li>
<li><strong>Performance Considerations:</strong> Understanding the time and space complexity of set operations and choosing the right data structure.</li>
<li><strong>Syntax Errors:</strong> Avoiding syntax errors when working with sets in Python.</li>
<li><strong>Logical Errors:</strong> Avoiding logical errors in set operations and membership tests.</li>
</ul>`,
  codeExample: `# Misunderstanding Set Operations
set1 = {1, 2, 3}
set2 = {3, 4, 5}

# Correct union operation
union_set = set1 | set2  # {1, 2, 3, 4, 5}

# Incorrect union operation
incorrect_union_set = set1 + set2  # TypeError: unsupported operand type(s) for +: 'set' and 'set'

# Edge Cases
empty_set = set()
single_element_set = {1}

# Performance Considerations
large_set = set(range(1000000))

# Syntax Errors
# Incorrect: set = {1, 2, 3}  # SyntaxError: invalid syntax
# Correct: my_set = {1, 2, 3}

# Logical Errors
# Incorrect: if 1 in set1 and set2:  # Logical error: should be 'or' instead of 'and'
# Correct: if 1 in set1 or set2:`,
  exercises: [
    {
      prompt:
        'Given two sets, find their union and handle the case where one of the sets is empty.',
      initialCode: `# Write your solution here
set1 = {1, 2, 3}
set2 = set()
# Find the union of set1 and set2`,
      solution: `set1 = {1, 2, 3}
set2 = set()
# Find the union of set1 and set2
union_set = set1 | set2

print(union_set)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Given a set, check if an element exists in the set and handle the case where the set is empty.',
      initialCode: `# Write your solution here
my_set = set()
# Check if 1 exists in my_set`,
      solution: `my_set = set()
# Check if 1 exists in my_set
exists = 1 in my_set

print(exists)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Given two sets, find their intersection and handle the case where the intersection is empty.',
      initialCode: `# Write your solution here
set1 = {1, 2, 3}
set2 = {4, 5, 6}
# Find the intersection of set1 and set2`,
      solution: `set1 = {1, 2, 3}
set2 = {4, 5, 6}
# Find the intersection of set1 and set2
intersection_set = set1 & set2

print(intersection_set)`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to find the union of two sets in Python?',
      options: [
        'set1 | set2',
        'set1 & set2',
        'set1 - set2',
        'set1 ^ set2',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. It finds the union of the two sets.',
        'This is incorrect. It finds the intersection of the two sets.',
        'This is incorrect. It finds the difference of the two sets.',
        'This is incorrect. It finds the symmetric difference of the two sets.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following is the correct way to find the intersection of two sets in Python?',
      options: [
        'set1 | set2',
        'set1 & set2',
        'set1 - set2',
        'set1 ^ set2',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. It finds the union of the two sets.',
        'This is correct. It finds the intersection of the two sets.',
        'This is incorrect. It finds the difference of the two sets.',
        'This is incorrect. It finds the symmetric difference of the two sets.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following is the correct way to handle an empty set in Python?',
      options: [
        'Using an empty set literal: set()',
        'Using an empty list: []',
        'Using an empty tuple: ()',
        'Using an empty dictionary: {}',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. It creates an empty set.',
        'This is incorrect. It creates an empty list.',
        'This is incorrect. It creates an empty tuple.',
        'This is incorrect. It creates an empty dictionary.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following is the correct way to check if an element exists in a set in Python?',
      options: [
        'if element in my_set:',
        'if my_set.contains(element):',
        'if my_set.has(element):',
        'if my_set.find(element):',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. It checks if the element exists in the set.',
        'This is incorrect. The set class does not have a contains method.',
        'This is incorrect. The set class does not have a has method.',
        'This is incorrect. The set class does not have a find method.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};
const arrayIntersectionUnionData: LessonContent = {
  title: 'Array Intersection/Union',
  content: `<p>
Efficiently finding common or combined elements between two arrays is a common problem in technical interviews. 
Using sets can significantly improve the performance of these operations by leveraging their average-case constant time complexity for membership tests and insertions.
</p>

<ul>
<li><strong>Intersection:</strong> Find common elements between two arrays.</li>
<li><strong>Union:</strong> Combine elements from two arrays without duplicates.</li>
<li><strong>Time Complexity:</strong> Understanding the efficiency of set operations compared to list operations.</li>
<li><strong>Space Complexity:</strong> Analyzing the memory usage of set operations.</li>
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

print(array_union(arr1, arr2))  # Output: [1, 2, 3, 4, 5, 6, 7, 8]`,
  exercises: [
    {
      prompt:
        'Given two arrays, find the intersection of the two arrays using sets.',
      initialCode: `# Write your solution here
def array_intersection(arr1, arr2):
    return 

arr1 = [1, 2, 3, 4, 5]
arr2 = [4, 5, 6, 7, 8]
print(array_intersection(arr1, arr2))`,
      solution: `def array_intersection(arr1, arr2):
    set1 = set(arr1)
    set2 = set(arr2)
    return list(set1 & set2)

arr1 = [1, 2, 3, 4, 5]
arr2 = [4, 5, 6, 7, 8]
print(array_intersection(arr1, arr2))`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Given two arrays, find the union of the two arrays using sets.',
      initialCode: `# Write your solution here
def array_union(arr1, arr2):
    return 

arr1 = [1, 2, 3, 4, 5]
arr2 = [4, 5, 6, 7, 8]
print(array_union(arr1, arr2))`,
      solution: `def array_union(arr1, arr2):
    set1 = set(arr1)
    set2 = set(arr2)
    return list(set1 | set2)

arr1 = [1, 2, 3, 4, 5]
arr2 = [4, 5, 6, 7, 8]
print(array_union(arr1, arr2))`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to find the intersection of two arrays using sets?',
      options: [
        'list(set(arr1) & set(arr2))',
        'list(set(arr1) | set(arr2))',
        'list(set(arr1) - set(arr2))',
        'list(set(arr1) ^ set(arr2))',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. It finds the intersection of the two arrays.',
        'This is incorrect. It finds the union of the two arrays.',
        'This is incorrect. It finds the difference of the two arrays.',
        'This is incorrect. It finds the symmetric difference of the two arrays.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of the following is the correct way to find the union of two arrays using sets?',
      options: [
        'list(set(arr1) & set(arr2))',
        'list(set(arr1) | set(arr2))',
        'list(set(arr1) - set(arr2))',
        'list(set(arr1) ^ set(arr2))',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. It finds the intersection of the two arrays.',
        'This is correct. It finds the union of the two arrays.',
        'This is incorrect. It finds the difference of the two arrays.',
        'This is incorrect. It finds the symmetric difference of the two arrays.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const stringManipulationWithSetsData: LessonContent = {
  title: 'String Manipulation with Sets',
  content: `<p>
String manipulation problems often benefit from using sets due to their ability to efficiently handle membership tests and eliminate duplicates. 
This lesson covers common string problems that can be solved using set operations.
</p>

<ul>
<li><strong>Finding Unique Characters:</strong> Identify unique characters in a string.</li>
<li><strong>Anagram Detection:</strong> Determine if two strings are anagrams using sets.</li>
<li><strong>Substring Problems:</strong> Solve substring problems using set operations.</li>
<li><strong>Time Complexity:</strong> Understanding the efficiency of set operations in string problems.</li>
<li><strong>Space Complexity:</strong> Analyzing the memory usage of set operations in string problems.</li>
</ul>`,
  codeExample: `# Finding Unique Characters
def unique_characters(s):
    return set(s)

print(unique_characters("hello"))  # Output: {'h', 'e', 'l', 'o'}

# Anagram Detection
def are_anagrams(s1, s2):
    return set(s1) == set(s2)

print(are_anagrams("listen", "silent"))  # Output: True

# Substring Problems
def find_unique_substrings(s, length):
    substrings = set()
    for i in range(len(s) - length + 1):
        substrings.add(s[i:i + length])
    return substrings

print(find_unique_substrings("abcabc", 3))  # Output: {'abc', 'bca', 'cab'}`,
  exercises: [
    {
      prompt:
        'Given a string, find all unique characters in the string using sets.',
      initialCode: `# Write your solution here
def unique_characters(s):
    return 

print(unique_characters("hello"))`,
      solution: `def unique_characters(s):
    return set(s)

print(unique_characters("hello"))`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Given two strings, determine if they are anagrams using sets.',
      initialCode: `# Write your solution here
def are_anagrams(s1, s2):
    return 

print(are_anagrams("listen", "silent"))`,
      solution: `def are_anagrams(s1, s2):
    return set(s1) == set(s2)

print(are_anagrams("listen", "silent"))`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Given a string and a length, find all unique substrings of the given length using sets.',
      initialCode: `# Write your solution here
def find_unique_substrings(s, length):
    return 

print(find_unique_substrings("abcabc", 3))`,
      solution: `def find_unique_substrings(s, length):
    substrings = set()
    for i in range(len(s) - length + 1):
        substrings.add(s[i:i + length])
    return substrings

print(find_unique_substrings("abcabc", 3))`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to find all unique characters in a string using sets?',
      options: [
        'set(s)',
        'list(s)',
        'tuple(s)',
        'dict(s)',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. It converts the string to a set, which removes duplicates.',
        'This is incorrect. It converts the string to a list, which does not remove duplicates.',
        'This is incorrect. It converts the string to a tuple, which does not remove duplicates.',
        'This is incorrect. It attempts to convert the string to a dictionary, which is not applicable.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following is the correct way to determine if two strings are anagrams using sets?',
      options: [
        'set(s1) == set(s2)',
        'list(s1) == list(s2)',
        'tuple(s1) == tuple(s2)',
        'dict(s1) == dict(s2)',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. It checks if the sets of characters are equal.',
        'This is incorrect. It checks if the lists of characters are equal, which is not sufficient for anagrams.',
        'This is incorrect. It checks if the tuples of characters are equal, which is not sufficient for anagrams.',
        'This is incorrect. It attempts to convert the strings to dictionaries, which is not applicable.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const graphProblemsWithSetsData: LessonContent = {
  title: 'Graph Problems with Sets',
  content: `<p>
Sets are powerful tools for solving graph problems, particularly in graph traversal and cycle detection. 
This lesson covers how to use sets to efficiently solve common graph problems.
</p>

<ul>
<li><strong>Graph Traversal:</strong> Using sets to keep track of visited nodes in graph traversal algorithms.</li>
<li><strong>Cycle Detection:</strong> Detecting cycles in graphs using sets.</li>
<li><strong>Time Complexity:</strong> Understanding the efficiency of set operations in graph problems.</li>
<li><strong>Space Complexity:</strong> Analyzing the memory usage of set operations in graph problems.</li>
</ul>`,
  codeExample: `# Graph Traversal
def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    visited.add(start)
    for next in graph[start] - visited:
        dfs(graph, next, visited)
    return visited

graph = {'A': set(['B', 'C']),
         'B': set(['A', 'D', 'E']),
         'C': set(['A', 'F']),
         'D': set(['B']),
         'E': set(['B', 'F']),
         'F': set(['C', 'E'])}

print(dfs(graph, 'A'))  # Output: {'A', 'B', 'C', 'D', 'E', 'F'}

# Cycle Detection
def has_cycle(graph):
    visited = set()
    def visit(vertex):
        if vertex in visited:
            return True
        visited.add(vertex)
        return any(visit(neighbor) for neighbor in graph[vertex])
    return any(visit(v) for v in graph)

graph = {'A': set(['B']),
         'B': set(['A', 'C']),
         'C': set(['B'])}

print(has_cycle(graph))  # Output: True`,
  exercises: [
    {
      prompt:
        'Given a graph represented as an adjacency list, perform a depth-first search (DFS) using sets to keep track of visited nodes.',
      initialCode: `# Write your solution here
def dfs(graph, start, visited=None):
    return 

graph = {'A': set(['B', 'C']),
         'B': set(['A', 'D', 'E']),
         'C': set(['A', 'F']),
         'D': set(['B']),
         'E': set(['B', 'F']),
         'F': set(['C', 'E'])}

print(dfs(graph, 'A'))`,
      solution: `def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    visited.add(start)
    for next in graph[start] - visited:
        dfs(graph, next, visited)
    return visited

graph = {'A': set(['B', 'C']),
         'B': set(['A', 'D', 'E']),
         'C': set(['A', 'F']),
         'D': set(['B']),
         'E': set(['B', 'F']),
         'F': set(['C', 'E'])}

print(dfs(graph, 'A'))`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Given a graph represented as an adjacency list, detect if there is a cycle using sets to keep track of visited nodes.',
      initialCode: `# Write your solution here
def has_cycle(graph):
    return 

graph = {'A': set(['B']),
         'B': set(['A', 'C']),
         'C': set(['B'])}

print(has_cycle(graph))`,
      solution: `def has_cycle(graph):
    visited = set()
    def visit(vertex):
        if vertex in visited:
            return True
        visited.add(vertex)
        return any(visit(neighbor) for neighbor in graph[vertex])
    return any(visit(v) for v in graph)

graph = {'A': set(['B']),
         'B': set(['A', 'C']),
         'C': set(['B'])}

print(has_cycle(graph))`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to perform a depth-first search (DFS) using sets to keep track of visited nodes?',
      options: [
        'Using a set to store visited nodes and recursively visiting each unvisited neighbor.',
        'Using a list to store visited nodes and iteratively visiting each unvisited neighbor.',
        'Using a tuple to store visited nodes and recursively visiting each unvisited neighbor.',
        'Using a dictionary to store visited nodes and iteratively visiting each unvisited neighbor.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. Sets provide O(1) time complexity for membership tests and insertions, making them ideal for tracking visited nodes.',
        'This is incorrect. Lists provide O(n) time complexity for membership tests, which is less efficient.',
        'This is incorrect. Tuples are immutable and do not support efficient membership tests.',
        'This is incorrect. Dictionaries are designed for key-value pairs and are not ideal for tracking visited nodes.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of the following is the correct way to detect a cycle in a graph using sets to keep track of visited nodes?',
      options: [
        'Using a set to store visited nodes and recursively visiting each unvisited neighbor, checking for revisits.',
        'Using a list to store visited nodes and iteratively visiting each unvisited neighbor, checking for revisits.',
        'Using a tuple to store visited nodes and recursively visiting each unvisited neighbor, checking for revisits.',
        'Using a dictionary to store visited nodes and iteratively visiting each unvisited neighbor, checking for revisits.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. Sets provide O(1) time complexity for membership tests and insertions, making them ideal for detecting cycles.',
        'This is incorrect. Lists provide O(n) time complexity for membership tests, which is less efficient.',
        'This is incorrect. Tuples are immutable and do not support efficient membership tests.',
        'This is incorrect. Dictionaries are designed for key-value pairs and are not ideal for detecting cycles.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const setLessons: Record<string, LessonContent> = {
  'set-introduction': setIntroductionData,
  'set-creation': setCreationData,
  'set-properties': setPropertiesData,
  'element-operations': elementOperationsData,
  'set-methods': setMethodsData,
  'membership-testing': membershipTestingData,
  'set-union': setUnionData,
  'set-intersection': setIntersectionData,
  'set-difference': setDifferenceData,
  'symmetric-difference': symmetricDifferenceData,
  'subset-superset': subsetSupersetData,
  'disjoint-sets': disjointSetsData,
  'set-equality': setEqualityData,
  'hashset': hashSetData,
  'set-complexity': setComplexityData,
  'set-vs-others': setsVsOtherDataStructuresData,
  'ordered-sets': orderedSetsData,
  'duplicate-detection': duplicateDetectionData,
  'unique-elements': uniqueElementsData,
  'set-conversion': setConversionData,
  'multisets': multisetsData,
  'set-comprehension': setComprehensionData,
  'common-mistakes': commonInterviewPitfallsData,
  'array-intersection': arrayIntersectionUnionData,
  'string-problems': stringManipulationWithSetsData,
  'graph-problems': graphProblemsWithSetsData,
};
export const setLessonsTab: LessonsTab = {
  curriculum: setCurriculum,
  lessons: setLessons,
};
