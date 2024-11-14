import { Difficulty } from '@/common/commonConcept';
import { Curriculum, LessonContent, LessonsTab } from '@/common/commonLesson';

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
        },
        {
          id: 'set-creation',
          title: 'Creating and Initializing Sets',
          description: 'Different ways to create sets and add initial elements',
        },
        {
          id: 'set-properties',
          title: 'Set Properties',
          description:
            'Understanding uniqueness, unordered nature, and mutability',
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
        },
        {
          id: 'set-methods',
          title: 'Built-in Set Methods',
          description: 'Using add(), remove(), discard(), pop(), and clear()',
        },
        {
          id: 'membership-testing',
          title: 'Membership Testing',
          description: 'Efficient element lookup using "in" operator',
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
        },
        {
          id: 'set-intersection',
          title: 'Intersection Operations',
          description:
            'Finding common elements using intersection() and & operator',
        },
        {
          id: 'set-difference',
          title: 'Difference Operations',
          description:
            'Finding unique elements using difference() and - operator',
        },
        {
          id: 'symmetric-difference',
          title: 'Symmetric Difference',
          description: 'Finding elements in either set but not both',
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
          description: 'Understanding set containment relationships',
        },
        {
          id: 'disjoint-sets',
          title: 'Disjoint Sets',
          description: 'Working with sets that have no elements in common',
        },
        {
          id: 'set-equality',
          title: 'Set Equality',
          description: 'Comparing sets and understanding equality',
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
        },
        {
          id: 'set-complexity',
          title: 'Time Complexity Analysis',
          description:
            'Understanding performance characteristics of set operations',
        },
        {
          id: 'ordered-sets',
          title: 'Ordered Sets',
          description: 'Working with sorted sets and their applications',
        },
      ],
    },
    {
      id: 6,
      title: 'Common Set Patterns',
      topics: [
        {
          id: 'duplicate-detection',
          title: 'Duplicate Detection',
          description: 'Using sets to find and handle duplicates',
        },
        {
          id: 'unique-elements',
          title: 'Unique Element Problems',
          description: 'Solving problems involving unique values',
        },
        {
          id: 'set-conversion',
          title: 'Set Conversion Techniques',
          description: 'Converting between sets and other data structures',
        },
      ],
    },
    {
      id: 7,
      title: 'Advanced Set Applications',
      topics: [
        {
          id: 'multisets',
          title: 'Multisets and Counting',
          description: 'Handling duplicate elements with Counter objects',
        },
        {
          id: 'frozen-sets',
          title: 'Immutable Sets',
          description: 'Working with frozenset and immutable set operations',
        },
        {
          id: 'set-comprehension',
          title: 'Set Comprehensions',
          description: 'Creating sets using comprehension syntax',
        },
      ],
    },
    {
      id: 8,
      title: 'Set-based Algorithms',
      topics: [
        {
          id: 'set-cover',
          title: 'Set Cover Problems',
          description: 'Solving minimum set cover and related problems',
        },
        {
          id: 'set-partitioning',
          title: 'Set Partitioning',
          description: 'Dividing elements into distinct sets',
        },
      ],
    },
    {
      id: 9,
      title: 'Performance Optimization',
      topics: [
        {
          id: 'memory-efficiency',
          title: 'Memory Optimization',
          description: 'Optimizing memory usage with sets',
        },
        {
          id: 'set-vs-list',
          title: 'Sets vs Lists Performance',
          description:
            'Choosing between sets and lists for optimal performance',
        },
      ],
    },
    {
      id: 10,
      title: 'Real-world Applications',
      topics: [
        {
          id: 'deduplication',
          title: 'Data Deduplication',
          description: 'Using sets for efficient data deduplication',
        },
        {
          id: 'set-operations-algorithms',
          title: 'Set-based Algorithms',
          description: 'Implementing algorithms using set operations',
        },
      ],
    },
  ],
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

const frozenSetsData: LessonContent = {
  title: 'Immutable Sets',
  content: `<p>
Immutable sets, also known as frozensets, are sets that cannot be modified after they are created. 
In Python, the frozenset type provides this functionality. 
Immutable sets are useful in scenarios where you need to ensure that the set remains unchanged. 
Here's how you can work with frozensets:
</p>

<ul>
<li><strong>Creating a Frozenset:</strong> Use the frozenset() constructor to create an immutable set.</li>
<li><strong>Operations:</strong> Frozensets support all the standard set operations like union, intersection, and difference.</li>
<li><strong>Immutable:</strong> Frozensets cannot be modified after creation, so methods like add() and remove() are not available.</li>
</ul>`,
  codeExample: `# Example of immutable sets in Python
# Creating a frozenset
my_frozenset = frozenset([1, 2, 3, 4, 5])

# Operations on frozensets
set1 = {3, 4, 5, 6}
union_set = my_frozenset.union(set1)
print("Union:", union_set)  # Output: Union: frozenset({1, 2, 3, 4, 5, 6})

intersection_set = my_frozenset.intersection(set1)
print("Intersection:", intersection_set)  # Output: Intersection: frozenset({3, 4, 5})

difference_set = my_frozenset.difference(set1)
print("Difference:", difference_set)  # Output: Difference: frozenset({1, 2})`,
  exercises: [
    {
      prompt: 'Create and perform operations on a frozenset.',
      initialCode: `# Write your solution here
# Creating a frozenset
my_frozenset = frozenset([1, 2, 3, 4, 5])

# Operations on frozensets
set1 = {3, 4, 5, 6}
union_set = my_frozenset.union(set1)
print("Union:", union_set)  # Output: Union: frozenset({1, 2, 3, 4, 5, 6})

intersection_set = my_frozenset.intersection(set1)
print("Intersection:", intersection_set)  # Output: Intersection: frozenset({3, 4, 5})

difference_set = my_frozenset.difference(set1)
print("Difference:", difference_set)  # Output: Difference: frozenset({1, 2})`,
      solution: `# Creating a frozenset
my_frozenset = frozenset([1, 2, 3, 4, 5])

# Operations on frozensets
set1 = {3, 4, 5, 6}
union_set = my_frozenset.union(set1)
print("Union:", union_set)  # Output: Union: frozenset({1, 2, 3, 4, 5, 6})

intersection_set = my_frozenset.intersection(set1)
print("Intersection:", intersection_set)  # Output: Intersection: frozenset({3, 4, 5})

difference_set = my_frozenset.difference(set1)
print("Difference:", difference_set)  # Output: Difference: frozenset({1, 2})`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following methods is not available for frozensets in Python?',
      options: [
        'union()',
        'intersection()',
        'add()',
        'difference()',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. `union()` is available for frozensets.',
        'This is incorrect. `intersection()` is available for frozensets.',
        'This is correct. `add()` is not available for frozensets because they are immutable.',
        'This is incorrect. `difference()` is available for frozensets.',
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

const setCoverData: LessonContent = {
  title: 'Set Cover Problems',
  content: `<p>
Set cover problems are a class of optimization problems where the goal is to find the smallest set of subsets that cover all elements of a given universe. 
These problems are often NP-hard, meaning that they are computationally difficult to solve exactly for large instances. 
Here's how you can approach set cover problems:
</p>

<ul>
<li><strong>Greedy Algorithm:</strong> A common approach to approximate the solution is to use a greedy algorithm that iteratively selects the subset that covers the most uncovered elements.</li>
<li><strong>Exact Algorithms:</strong> For small instances, exact algorithms like integer linear programming (ILP) can be used to find the optimal solution.</li>
</ul>`,
  codeExample: `# Example of a greedy algorithm for set cover in Python
def greedy_set_cover(universe, subsets):
    elements = set(e for s in subsets for e in s)
    if elements != universe:
        return None
    covered = set()
    cover = []
    while covered != universe:
        subset = max(subsets, key=lambda s: len(s - covered))
        cover.append(subset)
        covered |= subset
    return cover

# Example usage
universe = {1, 2, 3, 4, 5}
subsets = [
    {1, 2, 3},
    {2, 4},
    {3, 4},
    {4, 5}
]
cover = greedy_set_cover(universe, subsets)
print("Set cover:", cover)  # Output: Set cover: [{1, 2, 3}, {4, 5}]`,
  exercises: [
    {
      prompt: 'Implement a greedy algorithm to solve a set cover problem.',
      initialCode: `# Write your solution here
def greedy_set_cover(universe, subsets):
    elements = set(e for s in subsets for e in s)
    if elements != universe:
        return None
    covered = set()
    cover = []
    while covered != universe:
        subset = max(subsets, key=lambda s: len(s - covered))
        cover.append(subset)
        covered |= subset
    return cover

# Example usage
universe = {1, 2, 3, 4, 5}
subsets = [
    {1, 2, 3},
    {2, 4},
    {3, 4},
    {4, 5}
]
cover = greedy_set_cover(universe, subsets)
print("Set cover:", cover)  # Output: Set cover: [{1, 2, 3}, {4, 5}]`,
      solution: `def greedy_set_cover(universe, subsets):
    elements = set(e for s in subsets for e in s)
    if elements != universe:
        return None
    covered = set()
    cover = []
    while covered != universe:
        subset = max(subsets, key=lambda s: len(s - covered))
        cover.append(subset)
        covered |= subset
    return cover

# Example usage
universe = {1, 2, 3, 4, 5}
subsets = [
    {1, 2, 3},
    {2, 4},
    {3, 4},
    {4, 5}
]
cover = greedy_set_cover(universe, subsets)
print("Set cover:", cover)  # Output: Set cover: [{1, 2, 3}, {4, 5}]`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary approach to approximate the solution for set cover problems?',
      options: [
        'Dynamic programming',
        'Greedy algorithm',
        'Backtracking',
        'Divide and conquer',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. Dynamic programming is not typically used for set cover problems.',
        'This is correct. A greedy algorithm is commonly used to approximate the solution.',
        'This is incorrect. Backtracking is not typically used for set cover problems.',
        'This is incorrect. Divide and conquer is not typically used for set cover problems.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const setPartitioningData: LessonContent = {
  title: 'Set Partitioning',
  content: `<p>
Set partitioning problems involve dividing a set of elements into disjoint subsets that satisfy certain conditions. 
These problems are often NP-hard and can be approached using various techniques. 
Here's how you can approach set partitioning problems:
</p>

<ul>
<li><strong>Dynamic Programming:</strong> For small instances, dynamic programming can be used to find the optimal solution.</li>
<li><strong>Heuristic Algorithms:</strong> For larger instances, heuristic algorithms like greedy algorithms or genetic algorithms can be used to find approximate solutions.</li>
</ul>`,
  codeExample: `# Example of a dynamic programming approach for set partitioning in Python
def subset_sum(numbers, target, partial=[]):
    s = sum(partial)
    if s == target:
        print("Subset found:", partial)
    if s >= target:
        return
    for i in range(len(numbers)):
        n = numbers[i]
        remaining = numbers[i+1:]
        subset_sum(remaining, target, partial + [n])

# Example usage
numbers = [1, 2, 3, 4, 5]
target = 5
subset_sum(numbers, target)  # Output: Subset found: [1, 4], Subset found: [2, 3], Subset found: [5]`,
  exercises: [
    {
      prompt: 'Implement a dynamic programming approach to solve a set partitioning problem.',
      initialCode: `# Write your solution here
def subset_sum(numbers, target, partial=[]):
    s = sum(partial)
    if s == target:
        print("Subset found:", partial)
    if s >= target:
        return
    for i in range(len(numbers)):
        n = numbers[i]
        remaining = numbers[i+1:]
        subset_sum(remaining, target, partial + [n])

# Example usage
numbers = [1, 2, 3, 4, 5]
target = 5
subset_sum(numbers, target)  # Output: Subset found: [1, 4], Subset found: [2, 3], Subset found: [5]`,
      solution: `def subset_sum(numbers, target, partial=[]):
    s = sum(partial)
    if s == target:
        print("Subset found:", partial)
    if s >= target:
        return
    for i in range(len(numbers)):
        n = numbers[i]
        remaining = numbers[i+1:]
        subset_sum(remaining, target, partial + [n])

# Example usage
numbers = [1, 2, 3, 4, 5]
target = 5
subset_sum(numbers, target)  # Output: Subset found: [1, 4], Subset found: [2, 3], Subset found: [5]`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary approach to solve set partitioning problems for small instances?',
      options: [
        'Dynamic programming',
        'Greedy algorithm',
        'Backtracking',
        'Divide and conquer',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. Dynamic programming can be used to find the optimal solution for small instances.',
        'This is incorrect. A greedy algorithm is not typically used for small instances.',
        'This is incorrect. Backtracking is not typically used for set partitioning problems.',
        'This is incorrect. Divide and conquer is not typically used for set partitioning problems.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const memoryEfficiencyData: LessonContent = {
  title: 'Memory Optimization',
  content: `<p>
Memory optimization is crucial for improving the performance of your code, especially when dealing with large datasets. 
Sets are particularly useful for memory optimization due to their efficient use of hash tables. 
Here's how you can optimize memory usage with sets:
</p>

<ul>
<li><strong>Using Sets:</strong> Sets use hash tables, which provide efficient memory usage compared to other data structures like lists.</li>
<li><strong>Avoiding Duplicates:</strong> Sets inherently do not allow duplicate elements, which can save memory by avoiding redundant storage.</li>
<li><strong>Efficient Storage:</strong> Sets store elements in a way that minimizes memory overhead, making them ideal for large datasets.</li>
</ul>`,
  codeExample: `# Example of memory optimization with sets in Python
# Creating a large list with duplicates
large_list = [i % 1000 for i in range(1000000)]

# Converting the list to a set to remove duplicates
large_set = set(large_list)

# Comparing memory usage
import sys
list_memory = sys.getsizeof(large_list)
set_memory = sys.getsizeof(large_set)

print("Memory usage of list:", list_memory)  # Output: Memory usage of list: 8000056
print("Memory usage of set:", set_memory)  # Output: Memory usage of set: 32768`,
  exercises: [
    {
      prompt: 'Optimize memory usage by converting a large list with duplicates to a set.',
      initialCode: `# Write your solution here
# Creating a large list with duplicates
large_list = [i % 1000 for i in range(1000000)]

# Converting the list to a set to remove duplicates
large_set = set(large_list)

# Comparing memory usage
import sys
list_memory = sys.getsizeof(large_list)
set_memory = sys.getsizeof(large_set)

print("Memory usage of list:", list_memory)  # Output: Memory usage of list: 8000056
print("Memory usage of set:", set_memory)  # Output: Memory usage of set: 32768`,
      solution: `# Creating a large list with duplicates
large_list = [i % 1000 for i in range(1000000)]

# Converting the list to a set to remove duplicates
large_set = set(large_list)

# Comparing memory usage
import sys
list_memory = sys.getsizeof(large_list)
set_memory = sys.getsizeof(large_set)

print("Memory usage of list:", list_memory)  # Output: Memory usage of list: 8000056
print("Memory usage of set:", set_memory)  # Output: Memory usage of set: 32768`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary advantage of using sets for memory optimization?',
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
        'This is correct. Sets do not allow duplicate elements, making them ideal for memory optimization.',
        'This is incorrect. Sets are mutable.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const setVsListPerformanceData: LessonContent = {
  title: 'Sets vs Lists Performance',
  content: `<p>
Choosing between sets and lists for optimal performance depends on the specific operations you need to perform. 
Sets are optimized for membership testing and avoiding duplicates, while lists are optimized for sequential access and ordered storage. 
Here's a comparison of the performance characteristics of sets and lists:
</p>

<ul>
<li><strong>Membership Testing:</strong> Sets provide average O(1) time complexity for membership testing, while lists provide O(n) time complexity.</li>
<li><strong>Insertion:</strong> Sets provide average O(1) time complexity for insertion, while lists provide O(n) time complexity for insertion at the end and O(n) time complexity for insertion at the beginning.</li>
<li><strong>Deletion:</strong> Sets provide average O(1) time complexity for deletion, while lists provide O(n) time complexity for deletion.</li>
<li><strong>Memory Usage:</strong> Sets generally use more memory than lists due to the overhead of the hash table.</li>
</ul>`,
  codeExample: `# Example of performance comparison between sets and lists in Python
import time

# Creating a large list and a set
large_list = list(range(1000000))
large_set = set(range(1000000))

# Membership testing
start_time = time.time()
for i in range(1000000):
    i in large_list
list_membership_time = time.time() - start_time

start_time = time.time()
for i in range(1000000):
    i in large_set
set_membership_time = time.time() - start_time

print("List membership time:", list_membership_time)  # Output: List membership time: 0.123456789
print("Set membership time:", set_membership_time)  # Output: Set membership time: 0.0123456789`,
  exercises: [
    {
      prompt: 'Compare the performance of membership testing between sets and lists.',
      initialCode: `# Write your solution here
import time

# Creating a large list and a set
large_list = list(range(1000000))
large_set = set(range(1000000))

# Membership testing
start_time = time.time()
for i in range(1000000):
    i in large_list
list_membership_time = time.time() - start_time

start_time = time.time()
for i in range(1000000):
    i in large_set
set_membership_time = time.time() - start_time

print("List membership time:", list_membership_time)  # Output: List membership time: 0.123456789
print("Set membership time:", set_membership_time)  # Output: Set membership time: 0.0123456789`,
      solution: `import time

# Creating a large list and a set
large_list = list(range(1000000))
large_set = set(range(1000000))

# Membership testing
start_time = time.time()
for i in range(1000000):
    i in large_list
list_membership_time = time.time() - start_time

start_time = time.time()
for i in range(1000000):
    i in large_set
set_membership_time = time.time() - start_time

print("List membership time:", list_membership_time)  # Output: List membership time: 0.123456789
print("Set membership time:", set_membership_time)  # Output: Set membership time: 0.0123456789`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which data structure provides better performance for membership testing?',
      options: [
        'List',
        'Set',
        'Both have the same performance',
        'None of the above',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. Lists provide O(n) time complexity for membership testing.',
        'This is correct. Sets provide average O(1) time complexity for membership testing.',
        'This is incorrect. Sets provide better performance for membership testing.',
        'This is incorrect. Sets provide better performance for membership testing.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const deduplicationData: LessonContent = {
  title: 'Data Deduplication',
  content: `<p>
Data deduplication is a process used to eliminate duplicate copies of repeating data. 
In Python, this can be efficiently achieved using <strong>sets</strong>, which are collections of unique elements. 
Sets automatically handle duplicates, making them ideal for deduplication tasks.
</p>

<ul>
<li><strong>Creating a set from a list:</strong> Convert a list to a set to remove duplicates.</li>
<li><strong>Checking for duplicates:</strong> Use set operations to identify and remove duplicates.</li>
<li><strong>Union and intersection:</strong> Use set operations to combine and find common elements between sets.</li>
</ul>`,
  codeExample: `# Creating a set from a list to remove duplicates
duplicates = [1, 2, 2, 3, 4, 4, 5]
unique_elements = set(duplicates)  # O(n) time & space, where n is the number of elements

# Checking for duplicates
def has_duplicates(lst):
    return len(lst) != len(set(lst))  # O(n) time & space

# Union and intersection
set1 = {1, 2, 3}
set2 = {3, 4, 5}
union_set = set1.union(set2)  # {1, 2, 3, 4, 5}
intersection_set = set1.intersection(set2)  # {3}`,
  exercises: [
    {
      prompt:
        'Create a function that takes a list as input and returns a list with all duplicates removed.',
      initialCode: `# Write your solution here
def remove_duplicates(lst):
    return `,
      solution: `def remove_duplicates(lst):
    return list(set(lst))`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a function that takes two lists as input and returns a list of elements that are present in both lists.',
      initialCode: `# Write your solution here
def common_elements(lst1, lst2):
    return `,
      solution: `def common_elements(lst1, lst2):
    return list(set(lst1) & set(lst2))`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Create a function that takes two lists as input and returns a list of elements that are unique to each list.',
      initialCode: `# Write your solution here
def unique_elements(lst1, lst2):
    return `,
      solution: `def unique_elements(lst1, lst2):
    return list(set(lst1) ^ set(lst2))`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to remove duplicates from a list in Python?',
      options: [
        'list(set(my_list))',
        'set(my_list)',
        'list.remove_duplicates(my_list)',
        'list.unique(my_list)',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. It converts the list to a set to remove duplicates and then back to a list.',
        'This is incorrect because it returns a set, not a list.',
        'This is incorrect because there is no remove_duplicates method in the list class.',
        'This is incorrect because there is no unique method in the list class.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following is the correct way to find common elements between two lists in Python?',
      options: [
        'list(set(list1) & set(list2))',
        'list(set(list1) | set(list2))',
        'list(set(list1) - set(list2))',
        'list(set(list1) ^ set(list2))',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. It finds the intersection of two sets.',
        'This is incorrect because it finds the union of two sets.',
        'This is incorrect because it finds the difference between two sets.',
        'This is incorrect because it finds the symmetric difference between two sets.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of the following is the correct way to find elements that are unique to each list in Python?',
      options: [
        'list(set(list1) & set(list2))',
        'list(set(list1) | set(list2))',
        'list(set(list1) - set(list2))',
        'list(set(list1) ^ set(list2))',
      ],
      correctAnswer: 3,
      explanations: [
        'This is incorrect because it finds the intersection of two sets.',
        'This is incorrect because it finds the union of two sets.',
        'This is incorrect because it finds the difference between two sets.',
        'This is correct. It finds the symmetric difference between two sets.',
      ],
      difficulty: Difficulty.Advanced,
    },
  ],
};

const setOperationsAlgorithmsData: LessonContent = {
  title: 'Set-based Algorithms',
  content: `<p>
Set operations are powerful tools in Python that can be used to implement various algorithms efficiently. 
Sets allow for fast membership tests, unions, intersections, and differences, making them ideal for problems that require these operations.
</p>

<ul>
<li><strong>Union and intersection:</strong> Use set operations to combine and find common elements between sets.</li>
<li><strong>Difference and symmetric difference:</strong> Use set operations to find elements that are unique to each set.</li>
<li><strong>Subset and superset:</strong> Use set operations to check if one set is contained within another.</li>
</ul>`,
  codeExample: `# Union and intersection
set1 = {1, 2, 3}
set2 = {3, 4, 5}
union_set = set1.union(set2)  # {1, 2, 3, 4, 5}
intersection_set = set1.intersection(set2)  # {3}

# Difference and symmetric difference
difference_set = set1.difference(set2)  # {1, 2}
symmetric_difference_set = set1.symmetric_difference(set2)  # {1, 2, 4, 5}

# Subset and superset
is_subset = set1.issubset(set2)  # False
is_superset = set1.issuperset(set2)  # False`,
  exercises: [
    {
      prompt:
        'Create a function that takes two sets as input and returns a set of elements that are present in both sets.',
      initialCode: `# Write your solution here
def common_elements(set1, set2):
    return `,
      solution: `def common_elements(set1, set2):
    return set1.intersection(set2)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a function that takes two sets as input and returns a set of elements that are unique to each set.',
      initialCode: `# Write your solution here
def unique_elements(set1, set2):
    return `,
      solution: `def unique_elements(set1, set2):
    return set1.symmetric_difference(set2)`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Create a function that takes two sets as input and returns True if the first set is a subset of the second set, otherwise False.',
      initialCode: `# Write your solution here
def is_subset(set1, set2):
    return `,
      solution: `def is_subset(set1, set2):
    return set1.issubset(set2)`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to find the union of two sets in Python?',
      options: [
        'set1.union(set2)',
        'set1.intersection(set2)',
        'set1.difference(set2)',
        'set1.symmetric_difference(set2)',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. It finds the union of two sets.',
        'This is incorrect because it finds the intersection of two sets.',
        'This is incorrect because it finds the difference between two sets.',
        'This is incorrect because it finds the symmetric difference between two sets.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following is the correct way to find the difference between two sets in Python?',
      options: [
        'set1.union(set2)',
        'set1.intersection(set2)',
        'set1.difference(set2)',
        'set1.symmetric_difference(set2)',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect because it finds the union of two sets.',
        'This is incorrect because it finds the intersection of two sets.',
        'This is correct. It finds the difference between two sets.',
        'This is incorrect because it finds the symmetric difference between two sets.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of the following is the correct way to check if one set is a subset of another in Python?',
      options: [
        'set1.union(set2)',
        'set1.intersection(set2)',
        'set1.difference(set2)',
        'set1.issubset(set2)',
      ],
      correctAnswer: 3,
      explanations: [
        'This is incorrect because it finds the union of two sets.',
        'This is incorrect because it finds the intersection of two sets.',
        'This is incorrect because it finds the difference between two sets.',
        'This is correct. It checks if set1 is a subset of set2.',
      ],
      difficulty: Difficulty.Advanced,
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
  'ordered-sets': orderedSetsData,
  'duplicate-detection': duplicateDetectionData,
  'unique-elements': uniqueElementsData,
  'set-conversion': setConversionData,
  'multisets': multisetsData,
  'frozen-sets': frozenSetsData,
  'set-comprehension': setComprehensionData,
  'set-cover': setCoverData,
  'set-partitioning': setPartitioningData,
  'memory-efficiency': memoryEfficiencyData,
  'set-vs-list': setVsListPerformanceData,
  'deduplication': deduplicationData,
  'set-operations-algorithms': setOperationsAlgorithmsData
};
export const setLessonsTab: LessonsTab = {
  curriculum: setCurriculum,
  lessons: setLessons,
};
