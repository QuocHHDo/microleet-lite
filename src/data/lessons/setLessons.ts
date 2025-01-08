import { Difficulty } from '@/common/commonConcept';
import {
  Curriculum,
  LessonContent,
  LessonsTab,
  PriorityLevel,
} from '@/common/commonLesson';

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
          priority: PriorityLevel.Essential,
        },
        {
          id: 'set-creation',
          title: 'Creating and Initializing Sets',
          description: 'Different ways to create sets and add initial elements',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'set-properties',
          title: 'Set Properties',
          description:
            'Understanding uniqueness, unordered nature, and mutability',
          priority: PriorityLevel.Essential,
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
          priority: PriorityLevel.Essential,
        },
        {
          id: 'set-methods',
          title: 'Built-in Set Methods',
          description: 'Using add(), remove(), discard(), pop(), and clear()',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'membership-testing',
          title: 'Membership Testing',
          description: 'Efficient O(1) element lookup using "in" operator',
          priority: PriorityLevel.Essential,
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
          priority: PriorityLevel.Essential,
        },
        {
          id: 'set-intersection',
          title: 'Intersection Operations',
          description:
            'Finding common elements using intersection() and & operator',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'set-difference',
          title: 'Difference Operations',
          description:
            'Finding unique elements using difference() and - operator',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'symmetric-difference',
          title: 'Symmetric Difference',
          description: 'Finding elements in either set but not both',
          priority: PriorityLevel.Important,
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
          priority: PriorityLevel.Important,
        },
        {
          id: 'disjoint-sets',
          title: 'Disjoint Sets',
          description: 'Working with sets that have no elements in common',
          priority: PriorityLevel.Important,
        },
        {
          id: 'set-equality',
          title: 'Set Equality',
          description: 'Comparing sets and understanding equality',
          priority: PriorityLevel.Important,
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
          priority: PriorityLevel.Important,
        },
        {
          id: 'set-complexity',
          title: 'Time Complexity Analysis',
          description:
            'Understanding performance characteristics of set operations',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'set-vs-others',
          title: 'Sets vs Other Data Structures',
          description:
            'Choosing between sets, lists, and dictionaries for optimal performance',
          priority: PriorityLevel.Essential,
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
          priority: PriorityLevel.Essential,
        },
        {
          id: 'unique-elements',
          title: 'Unique Element Problems',
          description:
            'Solving problems involving unique values and deduplication',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'set-conversion',
          title: 'Data Structure Conversion',
          description: 'Strategic conversion between sets and other structures',
          priority: PriorityLevel.Important,
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
          priority: PriorityLevel.Beneficial,
        },
        {
          id: 'set-comprehension',
          title: 'Set Comprehensions',
          description: 'Creating sets using comprehension syntax',
          priority: PriorityLevel.Important,
        },
        {
          id: 'common-mistakes',
          title: 'Common Interview Pitfalls',
          description: 'Avoiding common mistakes when using sets in interviews',
          priority: PriorityLevel.Essential,
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
          priority: PriorityLevel.Essential,
        },
        {
          id: 'string-problems',
          title: 'String Manipulation with Sets',
          description: 'Solving string problems using set operations',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'graph-problems',
          title: 'Graph Problems with Sets',
          description: 'Using sets in graph traversal and cycle detection',
          priority: PriorityLevel.Important,
        },
      ],
    },
  ],
} as const;

const setIntroductionData: LessonContent = {
  title: 'Introduction to Sets: A Foundation for Programming',
  content: `<p>
A set is one of the most fundamental data structures in computer science, inspired by the mathematical concept of sets. Think of a set as a container that holds unique items in no particular order - much like a bag of distinct marbles, where having multiple copies of the same marble wouldn't make sense.
</p>

<p>
To understand sets deeply, let's explore them through an analogy: Imagine you're organizing a party's guest list. You only need to write each person's name once (uniqueness), it doesn't matter what order you write them in (unordered nature), and you can add or remove names as plans change (mutability, if using a mutable set).
</p>

<h3><u>Core Characteristics of Sets</u></h3>
<p>
Sets in Python embody several key characteristics that make them uniquely useful:
</p>

<p><strong>1. Uniqueness Guarantee</strong></p>
<p>
Just as a library catalog should list each book only once, a set automatically ensures no duplicates exist. This property makes sets perfect for removing duplicates from collections or tracking unique occurrences.
</p>

<p><strong>2. Unordered Nature</strong></p>
<p>
Sets are like a handful of puzzle pieces on a table - their arrangement doesn't affect what they are. This lack of ordering enables very efficient operations but means you can't rely on elements maintaining any particular sequence.
</p>

<p><strong>3. Fast Membership Testing</strong></p>
<p>
Checking if an element is in a set is remarkably fast - like having a perfect index in a book that tells you instantly if a topic is covered. This O(1) average time complexity for lookups is a key advantage of sets.
</p>

<h3><u>When to Use Sets</u></h3>
<table>
<tr><th>Use Case</th><th>Why Sets Excel</th><th>Example Scenario</th></tr>
<tr>
  <td>Duplicate Removal</td>
  <td>Automatic uniqueness</td>
  <td>Filtering unique email addresses</td>
</tr>
<tr>
  <td>Membership Testing</td>
  <td>O(1) lookup time</td>
  <td>Checking valid usernames</td>
</tr>
<tr>
  <td>Set Operations</td>
  <td>Built-in mathematical operations</td>
  <td>Finding common interests between users</td>
</tr>
</table>`,

  codeExample: `def demonstrate_set_concepts():
    """
    Demonstrates fundamental set concepts through practical examples
    """
    def explore_uniqueness():
        """
        Shows how sets handle duplicates and ensure uniqueness
        """
        # Creating a list with duplicates
        numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
        
        # Converting to set removes duplicates
        unique_numbers = set(numbers)
        print("Original list:", numbers)
        print("As a set:", unique_numbers)
        
        # Attempting to add duplicates
        unique_numbers.add(1)  # Won't create a duplicate
        print("After trying to add 1:", unique_numbers)
    
    def demonstrate_unordered_nature():
        """
        Illustrates that sets don't maintain element order
        """
        # Creating a set with elements
        fruits = {'apple', 'banana', 'cherry'}
        print("Fruits set:", fruits)
        
        # Adding new elements - order isn't guaranteed
        fruits.add('date')
        print("After adding 'date':", fruits)
        
        # Removing and re-adding might show different order
        fruits.remove('banana')
        fruits.add('banana')
        print("After removing and re-adding 'banana':", fruits)
    
    def show_membership_testing():
        """
        Shows efficient membership testing with sets
        """
        # Create a set of valid user roles
        valid_roles = {'admin', 'user', 'guest'}
        
        # Test different roles
        test_roles = ['admin', 'superuser', 'guest', 'hacker']
        
        print("Testing role membership:")
        for role in test_roles:
            if role in valid_roles:
                print(f"'{role}' is a valid role")
            else:
                print(f"'{role}' is not recognized")
    
    def compare_with_lists():
        """
        Compares set operations with equivalent list operations
        """
        # Create a large list with duplicates
        large_list = list(range(1000)) * 2
        large_set = set(large_list)
        
        # Test membership
        import time
        
        # Time list membership
        start = time.time()
        500 in large_list
        list_time = time.time() - start
        
        # Time set membership
        start = time.time()
        500 in large_set
        set_time = time.time() - start
        
        print(f"Membership test times:")
        print(f"List lookup: {list_time:.6f} seconds")
        print(f"Set lookup: {set_time:.6f} seconds")
    
    # Run all demonstrations
    print("Exploring Set Uniqueness:")
    explore_uniqueness()
    
    print("Demonstrating Unordered Nature:")
    demonstrate_unordered_nature()
    
    print("Testing Membership:")
    show_membership_testing()
    
    print("Comparing Performance:")
    compare_with_lists()

# Run the demonstration
demonstrate_set_concepts()`,

  exercises: [
    {
      prompt:
        'Write a function that determines if a list of numbers contains any duplicates. Try to make it as efficient as possible.',
      initialCode: `def has_duplicates(numbers: list) -> bool:
    # Write your solution here
    pass`,
      solution: `def has_duplicates(numbers: list) -> bool:
    # Convert to set and compare lengths
    # If lengths differ, there were duplicates
    return len(set(numbers)) < len(numbers)
    
    # Alternative solution showing the concept more explicitly:
    # seen = set()
    # for num in numbers:
    #     if num in seen:
    #         return True
    #     seen.add(num)
    # return False`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a function that takes two lists and returns True if they contain exactly the same elements (ignoring order and duplicates).',
      initialCode: `def same_elements(list1: list, list2: list) -> bool:
    # Write your solution here
    pass`,
      solution: `def same_elements(list1: list, list2: list) -> bool:
    # Convert both lists to sets and compare
    # This handles both order and duplicates
    return set(list1) == set(list2)`,
      difficulty: Difficulty.Intermediate,
    },
  ],

  quizzes: [
    {
      question: 'Which of these is NOT a key characteristic of sets in Python?',
      options: [
        'Elements must be unique',
        'Elements are stored in insertion order',
        'Elements must be immutable',
        'Membership testing is O(1) on average',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Uniqueness is a fundamental property of sets.',
        'Correct! Sets do not maintain any order of elements.',
        'Incorrect. Elements must indeed be immutable (hashable).',
        'Incorrect. Fast membership testing is a key feature of sets.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Why are sets typically more efficient than lists for membership testing?',
      options: [
        'Sets store elements in sorted order',
        'Sets use less memory than lists',
        'Sets use hash tables for O(1) lookup',
        'Sets maintain a count of elements',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Sets do not maintain any specific order.',
        'Incorrect. Sets often use more memory due to their hash table structure.',
        'Correct! Hash table implementation enables constant-time lookups.',
        'Incorrect. Sets do not track element counts.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const setCreationData: LessonContent = {
  title: 'Creating and Initializing Sets',
  content: `<p>
Understanding the various ways to create and initialize sets is fundamental to using them effectively. Just as you might organize a collection of items in different ways depending on your needs, Python provides multiple approaches to creating sets, each with its own advantages.
</p>

<p>
Let's explore set creation through a practical analogy: Think of building a set like organizing a collection of books. You might start with an empty bookshelf (empty set), add books one by one (add method), or transfer a whole collection at once (converting from another data structure). Each approach serves different needs and understanding them all helps you choose the most appropriate one for your situation.
</p>

<h3><u>Different Ways to Create Sets</u></h3>

<p><strong>1. Set Literal Syntax</strong></p>
<p>
The most straightforward way to create a set is using curly braces with elements inside, similar to how you might write down a list of items. For example: {'apple', 'banana', 'cherry'}. This method is clear and readable when you know the elements ahead of time.
</p>

<p><strong>2. Set Constructor</strong></p>
<p>
The set() constructor is versatile and can create sets from various iterable objects. It's like having a machine that can sort and deduplicate items from any collection. This method is particularly useful when working with existing collections or when you need to convert data types.
</p>

<p><strong>3. Set Comprehension</strong></p>
<p>
Set comprehensions provide a concise way to create sets based on existing data with transformations or filtering. Think of it like having a smart sorting system that can process items according to specific rules as they're added to the collection.
</p>

<h3><u>Methods of Initialization</u></h3>
<table>
<tr><th>Method</th><th>Syntax</th><th>Best For</th></tr>
<tr>
  <td>Empty Set</td>
  <td>set()</td>
  <td>Starting from scratch</td>
</tr>
<tr>
  <td>Literal Syntax</td>
  <td>{1, 2, 3}</td>
  <td>Known elements</td>
</tr>
<tr>
  <td>From Iterable</td>
  <td>set([1, 2, 3])</td>
  <td>Converting collections</td>
</tr>
<tr>
  <td>Comprehension</td>
  <td>{x for x in range(5)}</td>
  <td>Transformed elements</td>
</tr>
</table>`,

  codeExample: `def demonstrate_set_creation():
    """
    Demonstrates various ways to create and initialize sets
    """
    def show_basic_creation():
        """
        Shows the fundamental ways to create sets
        """
        # Empty set creation
        empty_set = set()  # Can't use {} as that creates an empty dict
        print("Empty set:", empty_set)
        
        # Set literal syntax
        fruits = {'apple', 'banana', 'cherry'}
        print("Set created with literals:", fruits)
        
        # Using set constructor with different iterables
        from_list = set([1, 2, 2, 3, 3, 3])  # Removes duplicates
        from_string = set('hello')  # Creates set of unique characters
        from_tuple = set((1, 2, 3))
        
        print("Sets from different iterables:")
        print("From list:", from_list)
        print("From string:", from_string)
        print("From tuple:", from_tuple)
    
    def demonstrate_comprehensions():
        """
        Shows how to use set comprehensions effectively
        """
        # Simple set comprehension
        squares = {x**2 for x in range(5)}
        print("Squares using comprehension:", squares)
        
        # Filtered set comprehension
        even_squares = {x**2 for x in range(10) if x % 2 == 0}
        print("Even squares:", even_squares)
        
        # Set comprehension with string manipulation
        words = ['hello', 'world', 'python']
        first_chars = {word[0] for word in words}
        print("First characters:", first_chars)
    
    def show_advanced_initialization():
        """
        Demonstrates more complex ways to initialize sets
        """
        # Creating sets with mixed types
        mixed_set = {42, 'python', (1, 2), 3.14}
        print("Mixed type set:", mixed_set)
        
        # Creating a set from a generator
        generator_set = set(x * 2 for x in range(5))
        print("Set from generator:", generator_set)
        
        # Creating nested structures (using frozenset for inner sets)
        nested = {frozenset({1, 2}), frozenset({3, 4})}
        print("Nested sets:", nested)
    
    def show_common_pitfalls():
        """
        Demonstrates common mistakes and their solutions
        """
        print("Common Pitfalls:")
        
        # Try to create an empty set with {}
        empty_dict = {}
        print("Empty {} creates:", type(empty_dict))  # dict, not set
        
        # Correct way to create empty set
        empty_set = set()
        print("set() creates:", type(empty_set))
        
        try:
            # Try to create set with mutable elements
            invalid_set = {[1, 2], [3, 4]}
        except TypeError as e:
            print("Cannot create set with mutable elements:", str(e))
    
    # Run all demonstrations
    print("Basic Set Creation:")
    show_basic_creation()
    
    print("Set Comprehensions:")
    demonstrate_comprehensions()
    
    print("Advanced Initialization:")
    show_advanced_initialization()
    
    print("Handling Pitfalls:")
    show_common_pitfalls()

# Run the demonstration
demonstrate_set_creation()`,

  exercises: [
    {
      prompt:
        'Write a function that takes a string and returns a set of all its vowels (ignore case).',
      initialCode: `def get_vowels(text: str) -> set:
    # Write your solution here
    pass`,
      solution: `def get_vowels(text: str) -> set:
    # Create set of vowels for case-insensitive comparison
    vowels = set('aeiou')
    
    # Use set comprehension to extract vowels from text
    return {char.lower() for char in text if char.lower() in vowels}`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a function that generates a set of all possible two-character combinations from a given string.',
      initialCode: `def character_pairs(text: str) -> set:
    # Write your solution here
    pass`,
      solution: `def character_pairs(text: str) -> set:
    # Use set comprehension with nested loops
    # frozenset ensures order doesn't matter
    return {
        frozenset({char1, char2})
        for i, char1 in enumerate(text)
        for char2 in text[i+1:]
    }`,
      difficulty: Difficulty.Intermediate,
    },
  ],

  quizzes: [
    {
      question: 'Which of these will create an empty set?',
      options: ['{}', 'set()', '[]', 'set[]'],
      correctAnswer: 1,
      explanations: [
        'Incorrect. This creates an empty dictionary.',
        'Correct! set() is the only way to create an empty set.',
        'Incorrect. This creates an empty list.',
        'Incorrect. This is invalid syntax.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: "Why can't you create a set containing lists?",
      options: [
        'Sets can only contain numbers and strings',
        'Lists take up too much memory',
        'Lists are mutable and therefore unhashable',
        'Python has a limit on nested data structures',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Sets can contain any hashable type.',
        'Incorrect. Memory size is not the issue.',
        'Correct! Set elements must be hashable, and mutable objects like lists are not.',
        'Incorrect. Python allows nested data structures.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const setPropertiesData: LessonContent = {
  title: 'Essential Properties of Sets',
  content: `<p>
Understanding the fundamental properties of sets is crucial for using them effectively in programming. Sets are unique among Python's data structures because they combine specific characteristics that make them powerful for certain operations while imposing important constraints we need to understand.
</p>

<h3><u>Core Set Properties</u></h3>

<p><strong>1. Element Uniqueness</strong></p>
<p>
Sets enforce uniqueness of elements, which means each element can appear only once. Think of a set like a collection of fingerprints - each one must be unique, and trying to add a duplicate fingerprint wouldn't change the collection. This property makes sets ideal for removing duplicates from data or tracking unique occurrences.
</p>

<p><strong>2. Unordered Nature</strong></p>
<p>
Unlike lists or tuples, sets do not maintain any particular order of elements. Imagine a jar of colored marbles - when you pour them out, they might come in any order. This lack of ordering enables sets to optimize for fast operations rather than maintaining sequence. The order of elements might even change during program execution.
</p>

<p><strong>3. Mutability Constraints</strong></p>
<p>
Sets have two important mutability aspects:
- The set itself can be either mutable (regular set) or immutable (frozen set)
- The elements within a set must be immutable (hashable)

Think of a regular set like a whiteboard where you can add or erase items, while a frozen set is like a laminated document that can't be changed. The elements themselves must be like permanent markers - once written, they can't change their value.
</p>

<h3><u>Practical Implications of Set Properties</u></h3>
<table>
<tr><th>Property</th><th>Practical Impact</th><th>Common Use Cases</th></tr>
<tr>
  <td>Uniqueness</td>
  <td>Automatic deduplication</td>
  <td>Removing duplicates from data</td>
</tr>
<tr>
  <td>Unordered</td>
  <td>No index access</td>
  <td>Fast membership testing</td>
</tr>
<tr>
  <td>Hashable Elements</td>
  <td>Must use immutable types</td>
  <td>Ensuring data integrity</td>
</tr>
<tr>
  <td>Mutable/Immutable Sets</td>
  <td>Flexibility in modification</td>
  <td>Dictionary keys, unchangeable collections</td>
</tr>
</table>`,

  codeExample: `def explore_set_properties():
    """
    Demonstrates key properties of sets through practical examples
    """
    def demonstrate_uniqueness():
        """
        Shows how sets handle duplicate elements and maintain uniqueness
        """
        # Creating a set with duplicate elements
        numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
        unique_numbers = set(numbers)
        print(f"Original list: {numbers}")
        print(f"As a set: {unique_numbers}")
        
        # Trying to add duplicates
        test_set = {1, 2, 3}
        print(f"Original set: {test_set}")
        test_set.add(2)  # Adding existing element
        print(f"After adding 2 again: {test_set}")  # No change
        
        # Using uniqueness for practical purposes
        emails = ['user@example.com', 'admin@example.com', 'user@example.com']
        unique_emails = set(emails)
        print(f"Unique email addresses: {unique_emails}")
    
    def demonstrate_unordered_nature():
        """
        Illustrates how sets don't maintain element order
        """
        # Creating sets with different insertion orders
        set1 = {1, 2, 3, 4, 5}
        set2 = {5, 4, 3, 2, 1}
        print(f"set1: {set1}")
        print(f"set2: {set2}")
        print(f"set1 == set2: {set1 == set2}")  # True despite different insertion order
        
        # Showing how order might change with modifications
        test_set = {1, 2, 3}
        print(f"Initial set: {test_set}")
        test_set.remove(2)
        test_set.add(4)
        print(f"After modifications: {test_set}")
    
    def explore_mutability():
        """
        Examines mutability constraints of sets and their elements
        """
        # Demonstrating mutable vs immutable sets
        mutable_set = {1, 2, 3}
        frozen_set = frozenset([1, 2, 3])
        
        print(f"Mutable set: {mutable_set}")
        mutable_set.add(4)
        print(f"After adding 4: {mutable_set}")
        
        print(f"Frozen set: {frozen_set}")
        try:
            frozen_set.add(4)
        except AttributeError as e:
            print(f"Cannot modify frozen set: {e}")
        
        # Demonstrating element hashability requirements
        try:
            invalid_set = {[1, 2], [3, 4]}  # Will raise TypeError
        except TypeError as e:
            print(f"Cannot create set with mutable elements: {e}")
        
        # Using tuples (immutable) instead of lists
        valid_set = {(1, 2), (3, 4)}
        print(f"Set with immutable elements: {valid_set}")
    
    def demonstrate_practical_applications():
        """
        Shows practical applications of set properties
        """
        # Using sets for filtering unique values
        data = [{'name': 'Alice', 'dept': 'IT'},
                {'name': 'Bob', 'dept': 'HR'},
                {'name': 'Charlie', 'dept': 'IT'}]
        
        # Get unique departments using a set
        departments = {employee['dept'] for employee in data}
        print(f"Unique departments: {departments}")
        
        # Using frozen set as dictionary key
        person_skills = {
            frozenset(['Python', 'Java']): ['Alice', 'Bob'],
            frozenset(['Python', 'SQL']): ['Charlie']
        }
        print(f"People grouped by skills: {person_skills}")
    
    # Run all demonstrations
    print("Demonstrating Set Properties:")
    demonstrate_uniqueness()
    demonstrate_unordered_nature()
    explore_mutability()
    demonstrate_practical_applications()

# Run the demonstration
explore_set_properties()`,

  exercises: [
    {
      prompt:
        'Write a function that determines if all elements in a collection are unique, and explain why using a set is a good solution.',
      initialCode: `def are_all_unique(elements: list) -> bool:
    # Write your solution here
    pass`,
      solution: `def are_all_unique(elements: list) -> bool:
    # Compare length of set version with original length
    # If they're equal, all elements were unique
    # If set length is less, there were duplicates
    return len(set(elements)) == len(elements)
    
    # Alternative solution showing the concept more explicitly:
    # seen = set()
    # for element in elements:
    #     if element in seen:
    #         return False
    #     seen.add(element)
    # return True`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        "Create a function that demonstrates why mutable elements can't be stored in sets by attempting to modify an element after adding it to a set.",
      initialCode: `def demonstrate_mutability_issue():
    # Write your solution here
    pass`,
      solution: `def demonstrate_mutability_issue():
    # Try to use a list (mutable) as a set element
    try:
        # This will fail because lists are mutable
        bad_set = {[1, 2, 3]}
        print("This won't be reached")
    except TypeError as e:
        print(f"Cannot add list to set: {e}")
    
    # Show why this restriction exists
    try:
        # First create a set with a tuple (immutable)
        good_set = {(1, 2, 3)}
        print(f"Set with tuple: {good_set}")
        
        # Try to modify the element (if it were mutable)
        # This shows why mutable elements would break set behavior
        element = (1, 2, 3)
        good_set.add(element)
        # If element were mutable and changed after adding:
        # element.append(4)  # This would break set's hash-based storage
        
        print(f"Set remains valid: {good_set}")
    except AttributeError:
        print("Cannot modify tuple (which is good!)")`,
      difficulty: Difficulty.Intermediate,
    },
  ],

  quizzes: [
    {
      question: 'Which statement about set properties is TRUE?',
      options: [
        'Sets maintain the order of elements as they are inserted',
        'Sets can contain lists as elements if the lists are empty',
        'Sets automatically ensure each element appears only once',
        'Sets must be converted to lists before adding new elements',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Sets do not maintain any order.',
        'Incorrect. Lists cannot be set elements regardless of their content.',
        'Correct! Set uniqueness is a fundamental property that ensures no duplicates exist.',
        'Incorrect. Elements can be added directly to sets using add() method.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'Why must set elements be immutable?',
      options: [
        'To save memory',
        'To maintain element order',
        'To ensure consistent hash values',
        'To make sets faster',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Immutability is not primarily about memory usage.',
        'Incorrect. Sets do not maintain order regardless of element type.',
        'Correct! Set elements must have consistent hash values for the set to function properly.',
        'Incorrect. Speed is a benefit of hash-based storage but not why elements must be immutable.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const elementOperationsData: LessonContent = {
  title: 'Element Operations',
  content: `<p>Element operations are the core interactions you'll perform with sets. These operations allow you to manipulate the contents of a set, adding, removing, and checking elements with precision and efficiency.</p>

<h3><u>Fundamental Element Operations</u></h3>
<p>Sets provide several ways to interact with their elements, each serving a unique purpose:</p>
<li><strong>Adding Elements:</strong> Introducing new, unique items to the set</li>
<li><strong>Removing Elements:</strong> Eliminating specific items from the set</li>
<li><strong>Checking Existence:</strong> Verifying whether an element is present</li>

<h3><u>Operation Characteristics</u></h3>
<table>
<tr><th>Operation</th><th>Time Complexity</th><th>Behavior</th></tr>
<tr><td>Adding Element</td><td>O(1)</td><td>Adds if not present, does nothing if already exists</td></tr>
<tr><td>Removing Element</td><td>O(1)</td><td>Removes specified element, raises error if not found</td></tr>
<tr><td>Existence Check</td><td>O(1)</td><td>Instant verification of element presence</td></tr>
</table>

<h3><u>Real-World Analogies</u></h3>
<p>Think of set operations like managing a exclusive club membership:</p>
<li>Adding an element is like signing up a new, unique member</li>
<li>Removing an element is like removing a membership</li>
<li>Checking existence is like verifying if someone is on the member list</li>`,

  codeExample: `# Comprehensive Set Element Operations

# 1. Creating a Base Set
student_set = {"Alice", "Bob", "Charlie"}

# 2. Adding a Single Element
student_set.add("Diana")
print("After adding Diana:", student_set)

# 3. Adding Multiple Elements
student_set.update(["Eva", "Frank"])
print("After adding multiple students:", student_set)

# 4. Removing Elements with Different Methods
# 4a. Using remove() - Raises error if element doesn't exist
try:
    student_set.remove("Bob")
    print("Bob removed successfully")
except KeyError:
    print("Bob not found in the set")

# 4b. Using discard() - No error if element doesn't exist
student_set.discard("George")  # No error, even if George is not in the set
print("Attempted to remove George:", student_set)

# 5. Checking Element Existence
print("Is Alice in the set?", "Alice" in student_set)
print("Is Bob in the set?", "Bob" in student_set)

# 6. Conditional Element Handling
if "Charlie" in student_set:
    print("Charlie is present in the student set")
    student_set.remove("Charlie")

# 7. Copying Set
backup_students = student_set.copy()
print("Backup of students:", backup_students)

# 8. Clearing All Elements
student_set.clear()
print("After clearing set:", student_set)`,

  exercises: [
    {
      prompt:
        'Write a function that adds elements to a set only if they start with a vowel.',
      initialCode: `def add_vowel_names(name_set, new_name):
    # Your implementation here
    pass`,
      solution: `def add_vowel_names(name_set, new_name):
    vowels = 'AEIOU'
    if new_name[0].upper() in vowels:
        name_set.add(new_name)
    return name_set`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Create a function that removes all elements from a set that are less than a given threshold.',
      initialCode: `def remove_below_threshold(number_set, threshold):
    # Your implementation here
    pass`,
      solution: `def remove_below_threshold(number_set, threshold):
    return {num for num in number_set if num >= threshold}`,
      difficulty: Difficulty.Advanced,
    },
  ],

  quizzes: [
    {
      question:
        'What happens when you try to add an existing element to a set?',
      options: [
        'The set raises an error',
        'The element is added twice',
        'Nothing changes',
        'The set increases in size',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. No error is raised.',
        'Correct! Sets automatically ignore duplicate elements.',
        'Incorrect. Something does happen - the set remains unchanged.',
        'Incorrect. The set size does not change.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What is the key difference between remove() and discard()?',
      options: [
        'remove() is faster',
        'discard() works with lists',
        'remove() raises an error if element not found',
        'discard() adds elements',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Performance is essentially the same.',
        'Incorrect. Both are set methods.',
        'Correct! remove() raises a KeyError if the element is not in the set, while discard() does nothing.',
        'Incorrect. Neither method adds elements.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const setMethodsData: LessonContent = {
  title: 'Built-in Set Methods',
  content: `<p>Python sets come equipped with a powerful array of built-in methods that provide flexible and efficient ways to manipulate collections. These methods enable complex set operations with minimal code.</p>

<h3><u>Core Set Manipulation Methods</u></h3>
<li><strong>add():</strong> Introduces a single element</li>
<li><strong>remove():</strong> Eliminates a specific element (raises error if not found)</li>
<li><strong>discard():</strong> Removes an element without raising an error</li>
<li><strong>pop():</strong> Removes and returns an arbitrary element</li>
<li><strong>clear():</strong> Removes all elements from the set</li>

<h3><u>Advanced Set Operations</u></h3>
<table>
<tr><th>Method</th><th>Purpose</th><th>Behavior</th></tr>
<tr><td>union()</td><td>Combine sets</td><td>Returns new set with all unique elements</td></tr>
<tr><td>intersection()</td><td>Find common elements</td><td>Returns new set with elements in both sets</td></tr>
<tr><td>difference()</td><td>Find unique elements</td><td>Returns elements in first set not in second</td></tr>
<tr><td>symmetric_difference()</td><td>Unique elements in either set</td><td>Returns elements in either set, but not both</td></tr>
</table>

<h3><u>Method Safety and Best Practices</u></h3>
<p>Understanding the nuanced behaviors of these methods prevents unexpected errors and supports robust code design. Each method has specific use cases that make your set manipulations more elegant and efficient.</p>`,

  codeExample: `# Comprehensive Set Method Exploration

# 1. Basic Element Addition and Removal
fruits = {"apple", "banana", "cherry"}

# add() method
fruits.add("date")
print("After adding date:", fruits)

# remove() method (raises error if not found)
try:
    fruits.remove("banana")
    print("Banana removed successfully")
except KeyError:
    print("Banana not in set")

# discard() method (safe removal)
fruits.discard("grape")  # No error, even if grape is not in set
print("After discarding grape:", fruits)

# 2. pop() Method - Removes and returns an arbitrary element
random_fruit = fruits.pop()
print(f"Removed fruit: {random_fruit}")
print("Remaining fruits:", fruits)

# 3. clear() Method - Removes all elements
fruits.clear()
print("After clearing:", fruits)  # Prints set()

# 4. Advanced Set Operations
math_students = {"Alice", "Bob", "Charlie"}
science_students = {"Bob", "Diana", "Charlie"}

# union() - All unique students
all_students = math_students.union(science_students)
print("All unique students:", all_students)

# intersection() - Students in both classes
shared_students = math_students.intersection(science_students)
print("Students in both classes:", shared_students)

# difference() - Students only in math class
exclusive_math_students = math_students.difference(science_students)
print("Math-only students:", exclusive_math_students)

# symmetric_difference() - Students in either, but not both classes
unique_class_students = math_students.symmetric_difference(science_students)
print("Students unique to each class:", unique_class_students)`,

  exercises: [
    {
      prompt:
        'Create a function that merges two sets while ensuring no duplicates.',
      initialCode: `def merge_unique_sets(set1, set2):
    # Your implementation here
    pass`,
      solution: `def merge_unique_sets(set1, set2):
    return set1.union(set2)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Write a method to find elements unique to each set.',
      initialCode: `def find_unique_elements(set1, set2):
    # Your implementation here
    pass`,
      solution: `def find_unique_elements(set1, set2):
    return set1.symmetric_difference(set2)`,
      difficulty: Difficulty.Intermediate,
    },
  ],

  quizzes: [
    {
      question: 'What does pop() do in a set?',
      options: [
        'Removes the last element',
        'Removes an arbitrary element',
        'Removes the first element',
        'Returns the largest element',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Sets are unordered, so there\'s no "last" element.',
        'Correct! pop() removes and returns a random element from the set.',
        'Incorrect. Sets are unordered, so there\'s no "first" element.',
        'Incorrect. pop() removes an element, not just returning it.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'Which method combines sets while eliminating duplicates?',
      options: ['merge()', 'combine()', 'union()', 'intersect()'],
      correctAnswer: 2,
      explanations: [
        "Incorrect. This method doesn't exist for sets.",
        "Incorrect. This method doesn't exist for sets.",
        'Correct! union() returns a new set with all unique elements from both sets.',
        'Incorrect. intersection() finds common elements, not combining.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const membershipTestingData: LessonContent = {
  title: 'Set Membership Testing',
  content: `<p>
In set theory, membership testing answers a fundamental question: "Is this element a member of this set?" Python makes this operation remarkably simple with the <code>in</code> operator, which tells us whether an element exists within a set. This operation is one of the most frequently used set operations alongside union, intersection, and difference.
</p>

<h3><u>Understanding Set Membership</u></h3>
<p>
When we work with sets in mathematics, we often use the notation "x ∈ S" to indicate that x is an element of set S. In Python, we express this same concept using the <code>in</code> operator, making our code read almost like mathematical notation. This operation is incredibly efficient because sets are implemented using hash tables under the hood.
</p>

<h3><u>Key Properties of Set Membership</u></h3>
<p>
Understanding these properties is crucial for working effectively with sets:
</p>
<li>Membership testing is deterministic - an element is either in the set or it's not</li>
<li>The operation is extremely fast (O(1)) regardless of set size</li>
<li>Elements must be hashable (immutable) to be included in a set</li>
<li>Order doesn't affect membership - {1, 2, 3} is the same set as {3, 2, 1}</li>

<h3><u>Common Use Cases</u></h3>
<p>Set membership testing is particularly valuable when:</p>
<li>Checking for duplicates in a collection</li>
<li>Validating elements against a known set of values</li>
<li>Implementing filters or permissions systems</li>
<li>Tracking visited items in algorithms</li>

<h3><u>Related Set Operations</u></h3>
<table>
<tr><th>Operation</th><th>Python Syntax</th><th>Set Theory Notation</th></tr>
<tr><td>Membership</td><td>x in S</td><td>x ∈ S</td></tr>
<tr><td>Non-membership</td><td>x not in S</td><td>x ∉ S</td></tr>
<tr><td>Subset test</td><td>A <= B</td><td>A ⊆ B</td></tr>
<tr><td>Superset test</td><td>A >= B</td><td>A ⊇ B</td></tr>
</table>`,

  codeExample: `# Demonstrating set membership testing
def demonstrate_set_membership():
    # Creating a set of valid user roles
    valid_roles = {'admin', 'user', 'guest'}
    
    # Basic membership testing
    print("Basic Membership Testing:")
    print(f"Is 'admin' a valid role? {'admin' in valid_roles}")  # True
    print(f"Is 'superuser' a valid role? {'superuser' in valid_roles}")  # False
    
    # Using membership testing with not operator
    new_role = 'moderator'
    if new_role not in valid_roles:
        print(f"Warning: {new_role} is not a recognized role")
    
    # Practical example: Filtering valid elements
    user_submissions = ['admin', 'guest', 'hacker', 'user', 'unknown']
    valid_submissions = {role for role in user_submissions if role in valid_roles}
    print(f"Valid submissions: {valid_submissions}")
    
    # Multiple membership tests
    def has_required_roles(user_roles):
        required_roles = {'admin', 'user'}
        return all(role in valid_roles for role in user_roles)
    
    # Test cases for multiple membership
    test_roles = [
        {'admin', 'user'},  # Valid combination
        {'admin', 'superuser'},  # Invalid combination
    ]
    
    print("Testing Role Combinations:")
    for roles in test_roles:
        print(f"Roles {roles} valid? {has_required_roles(roles)}")

# Run the demonstration
demonstrate_set_membership()`,

  exercises: [
    {
      prompt:
        'Given two sets A and B, write a function that returns True if every element in A is also in B (i.e., if A is a subset of B). Use membership testing in your solution.',
      initialCode: `def is_subset(A, B):
    # Write your solution here
    pass`,
      solution: `def is_subset(A, B):
    # Check if each element of A is in B
    return all(element in B for element in A)
    
    # Alternative solution using sets:
    # return A <= B`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Write a function that takes a string and returns True if it contains only characters from a given alphabet set. For example, binary strings should only contain characters from {"0", "1"}.',
      initialCode: `def is_valid_string(text, alphabet):
    # Write your solution here
    pass`,
      solution: `def is_valid_string(text, alphabet):
    # Convert alphabet to set if it isn't already
    alphabet_set = set(alphabet)
    
    # Check if each character in text is in the alphabet
    return all(char in alphabet_set for char in text)`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Implement a function that finds all elements that appear in exactly two out of three given sets. Use set membership testing in your solution.',
      initialCode: `def elements_in_two_sets(set1, set2, set3):
    # Write your solution here
    pass`,
      solution: `def elements_in_two_sets(set1, set2, set3):
    # Convert inputs to sets if they aren't already
    s1, s2, s3 = set(set1), set(set2), set(set3)
    
    # Find elements that appear in exactly two sets
    result = set()
    
    # Check each element from all sets
    all_elements = s1 | s2 | s3
    for element in all_elements:
        # Count how many sets contain this element
        count = sum(1 for s in (s1, s2, s3) if element in s)
        if count == 2:
            result.add(element)
            
    return result`,
      difficulty: Difficulty.Advanced,
    },
  ],

  quizzes: [
    {
      question:
        'What is the result of testing membership of an element in an empty set?',
      options: [
        'It raises an error',
        'Always returns True',
        'Always returns False',
        'It depends on the element type',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Membership testing on an empty set is valid and returns False.',
        'Incorrect. An empty set contains no elements, so membership testing always returns False.',
        'Correct! Since an empty set has no elements, any membership test will return False.',
        'Incorrect. The result is False regardless of the element type.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which set theory statement is equivalent to "x not in S" in Python?',
      options: ['x ∈ S', 'x ∉ S', 'x ⊆ S', 'x ⊇ S'],
      correctAnswer: 1,
      explanations: [
        'Incorrect. x ∈ S means x is in S, equivalent to "x in S".',
        'Correct! x ∉ S means x is not in S, exactly matching "x not in S".',
        'Incorrect. x ⊆ S tests if x is a subset of S.',
        'Incorrect. x ⊇ S tests if x is a superset of S.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'When using membership testing with sets, which operation is most efficient?',
      options: [
        'Testing one element at a time',
        'Testing multiple elements with a loop',
        'Converting to a list first',
        'Using the "in" operator with a subset',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct! Single element membership testing is O(1) and is the most efficient operation.',
        'Incorrect. While still efficient, testing multiple elements requires multiple operations.',
        'Incorrect. Converting to a list would make membership testing slower (O(n)).',
        'Incorrect. Subset testing requires checking multiple elements.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const setUnionData: LessonContent = {
  title: 'Set Union Operations',
  content: `<p>
The union of two sets A and B, denoted as A ∪ B, creates a new set containing all unique elements from both sets. Think of it as combining two groups while ensuring no duplicates exist in the result. In Python, we can perform this operation using either the <code>union()</code> method or the <code>|</code> operator.
</p>

<h3><u>Understanding Set Union</u></h3>
<p>
Set union combines elements from multiple sets while maintaining the fundamental set property that each element appears exactly once. For example, if we have a set of fruits {apple, banana} and another set {banana, orange}, their union is {apple, banana, orange} – notice how banana appears only once even though it was in both original sets.
</p>

<h3><u>Key Properties of Union</u></h3>
<li>Commutative: A ∪ B = B ∪ A</li>
<li>Associative: (A ∪ B) ∪ C = A ∪ (B ∪ C)</li>
<li>Identity: A ∪ ∅ = A (union with empty set)</li>
<li>Idempotent: A ∪ A = A</li>

<h3><u>Methods of Performing Union</u></h3>
<table>
<tr><th>Method</th><th>Python Syntax</th><th>Description</th></tr>
<tr><td>Union operator</td><td>A | B</td><td>Binary operator style</td></tr>
<tr><td>Union method</td><td>A.union(B)</td><td>Method style, can take multiple arguments</td></tr>
<tr><td>Update operator</td><td>A |= B</td><td>In-place union modification</td></tr>
<tr><td>Update method</td><td>A.update(B)</td><td>In-place update, can take multiple arguments</td></tr>
</table>`,

  codeExample: `def demonstrate_set_union():
    # Basic union operations
    fruits1 = {'apple', 'banana', 'cherry'}
    fruits2 = {'banana', 'dragonfruit', 'elderberry'}
    
    # Using | operator
    union_operator = fruits1 | fruits2
    print("Union using |:", union_operator)
    
    # Using union() method
    union_method = fruits1.union(fruits2)
    print("Union using method:", union_method)
    
    # Union of multiple sets
    fruits3 = {'cherry', 'fig', 'grape'}
    multi_union = fruits1.union(fruits2, fruits3)
    print("Union of three sets:", multi_union)
    
    # In-place union update
    shopping_list = {'apple', 'banana'}
    new_items = {'orange', 'mango'}
    
    print("Before update:", shopping_list)
    shopping_list |= new_items
    print("After update:", shopping_list)
    
    # Practical example: Combining user permissions
    admin_permissions = {'read', 'write', 'delete'}
    user_permissions = {'read', 'write'}
    guest_permissions = {'read'}
    
    # Get all possible permissions
    all_permissions = admin_permissions | user_permissions | guest_permissions
    print("All possible permissions:", all_permissions)

# Run the demonstration
demonstrate_set_union()`,

  exercises: [
    {
      prompt:
        'Write a function that takes any number of sets and returns their union. Handle both empty input and single set cases appropriately.',
      initialCode: `def union_all(*sets):
    # Write your solution here
    pass`,
      solution: `def union_all(*sets):
    # Handle empty input
    if not sets:
        return set()
    
    # Handle single set
    if len(sets) == 1:
        return sets[0].copy()
    
    # Perform union of all sets
    result = sets[0].copy()
    for s in sets[1:]:
        result |= s
    
    return result`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Given sets of students in different classes, write a function that finds all unique students taking at least one class.',
      initialCode: `def all_students(**class_rosters):
    # Write your solution here
    pass`,
      solution: `def all_students(**class_rosters):
    # Convert all values to sets if they aren't already
    rosters = {class_name: set(students) 
              for class_name, students in class_rosters.items()}
    
    # Return union of all rosters
    if not rosters:
        return set()
    
    return set.union(*rosters.values())`,
      difficulty: Difficulty.Intermediate,
    },
  ],

  quizzes: [
    {
      question: 'What is the result of taking the union of a set with itself?',
      options: [
        'An empty set',
        'A set with doubled elements',
        'The original set unchanged',
        'A runtime error',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Union with itself does not empty the set.',
        'Incorrect. Sets cannot contain duplicates, so elements are not doubled.',
        'Correct! Due to the idempotent property of union, A ∪ A = A.',
        'Incorrect. This is a valid operation that returns the original set.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'Which statement about set union is FALSE?',
      options: [
        'Union is commutative (A ∪ B = B ∪ A)',
        'Union with an empty set returns the original set',
        'Union always produces a larger set than either original set',
        'Union of multiple sets can be done in any order',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Union is indeed commutative.',
        'Incorrect. This is the identity property of union.',
        'Correct! This is false - if sets share elements, the union may be the same size as the larger set.',
        'Incorrect. This is the associative property of union.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const setIntersectionData: LessonContent = {
  title: 'Set Intersection Operations',
  content: `<p>
Set intersection finds the common elements between sets. When we intersect sets A and B, written as A ∩ B, we create a new set containing only the elements that appear in both A and B. In Python, we can perform intersection using either the <code>intersection()</code> method or the <code>&</code> operator.
</p>

<h3><u>Understanding Set Intersection</u></h3>
<p>
Intersection is like finding the overlap between different groups. For instance, if we have a set of students who play basketball {John, Alice, Bob} and those who play chess {Alice, Bob, Carol}, their intersection {Alice, Bob} shows us who plays both sports.
</p>

<h3><u>Key Properties of Intersection</u></h3>
<li>Commutative: A ∩ B = B ∩ A</li>
<li>Associative: (A ∩ B) ∩ C = A ∩ (B ∩ C)</li>
<li>Identity: A ∩ U = A (intersection with universal set)</li>
<li>Annihilator: A ∩ ∅ = ∅ (intersection with empty set)</li>

<h3><u>Methods of Performing Intersection</u></h3>
<table>
<tr><th>Method</th><th>Python Syntax</th><th>Description</th></tr>
<tr><td>Intersection operator</td><td>A & B</td><td>Binary operator style</td></tr>
<tr><td>Intersection method</td><td>A.intersection(B)</td><td>Method style, can take multiple arguments</td></tr>
<tr><td>Intersection update</td><td>A &= B</td><td>In-place intersection modification</td></tr>
<tr><td>Intersection update method</td><td>A.intersection_update(B)</td><td>In-place update, can take multiple arguments</td></tr>
</table>`,

  codeExample: `def demonstrate_set_intersection():
    # Basic intersection operations
    stem_students = {'Alice', 'Bob', 'Charlie', 'David'}
    art_students = {'Charlie', 'David', 'Eve', 'Frank'}
    
    # Using & operator
    intersection_operator = stem_students & art_students
    print("Students in both STEM and Art:", intersection_operator)
    
    # Using intersection() method
    intersection_method = stem_students.intersection(art_students)
    print("Same result using method:", intersection_method)
    
    # Intersection of multiple sets
    sports_students = {'Bob', 'Charlie', 'Gary'}
    triple_intersection = stem_students.intersection(art_students, sports_students)
    print("Students in all three activities:", triple_intersection)
    
    # In-place intersection update
    active_students = {'Alice', 'Bob', 'Charlie', 'David'}
    attending_today = {'Bob', 'Charlie', 'Eve'}
    
    print("Before update:", active_students)
    active_students &= attending_today
    print("After update (present today):", active_students)
    
    # Practical example: Finding common prerequisites
    course1_prereq = {'math101', 'physics101', 'programming101'}
    course2_prereq = {'math101', 'programming101', 'chemistry101'}
    course3_prereq = {'math101', 'programming101', 'biology101'}
    
    # Find common prerequisites for all courses
    common_prereq = course1_prereq & course2_prereq & course3_prereq
    print("Common prerequisites:", common_prereq)

# Run the demonstration
demonstrate_set_intersection()`,

  exercises: [
    {
      prompt:
        'Write a function that takes any number of sets and returns their intersection. Handle empty input appropriately.',
      initialCode: `def intersection_all(*sets):
    # Write your solution here
    pass`,
      solution: `def intersection_all(*sets):
    # Handle empty input
    if not sets:
        return set()
    
    # Handle single set
    if len(sets) == 1:
        return sets[0].copy()
    
    # Perform intersection of all sets
    result = sets[0].copy()
    for s in sets[1:]:
        result &= s
    
    return result`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Given sets of skills required for different jobs, write a function that finds skills needed for all specified positions.',
      initialCode: `def common_skills(**job_requirements):
    # Write your solution here
    pass`,
      solution: `def common_skills(**job_requirements):
    # Convert all values to sets if they aren't already
    requirements = {job: set(skills) 
                   for job, skills in job_requirements.items()}
    
    # Handle empty input
    if not requirements:
        return set()
    
    # Return intersection of all skill sets
    return set.intersection(*requirements.values())`,
      difficulty: Difficulty.Intermediate,
    },
  ],

  quizzes: [
    {
      question: 'What is the result of intersecting a set with an empty set?',
      options: [
        'The original set',
        'An empty set',
        'A runtime error',
        'The empty set becomes equal to the original set',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Intersection with an empty set always yields an empty set.',
        'Correct! The empty set is the annihilator for intersection - any set intersected with ∅ gives ∅.',
        'Incorrect. This is a valid operation that returns an empty set.',
        'Incorrect. The empty set remains empty after intersection.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'Which of these statements about set intersection is TRUE?',
      options: [
        'Intersection always produces a non-empty set',
        'Intersection of a set with itself produces an empty set',
        'Intersection of two sets is always smaller than either original set',
        'Intersection of a set with itself produces the original set',
      ],
      correctAnswer: 3,
      explanations: [
        'Incorrect. Intersection can produce an empty set if sets have no common elements.',
        'Incorrect. Intersection with itself returns the original set.',
        "Incorrect. The intersection could be equal to one of the sets if it's a subset of the other.",
        'Correct! A set intersected with itself contains all elements that are in both copies - which is all elements.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const setDifferenceData: LessonContent = {
  title: 'Set Difference Operations',
  content: `<p>
Set difference is a fundamental operation that helps us understand what makes one set unique compared to another. When we perform A - B (read as "A difference B"), we create a new set containing all elements that exist in set A but not in set B. This operation is particularly useful when we need to identify elements that are exclusive to one set.
</p>

<h3><u>Understanding Set Difference Deeply</u></h3>
<p>
Imagine you have two lists: all students in a school and students who play sports. The set difference between these lists would tell you which students don't participate in any sports. Unlike addition and subtraction of numbers, set difference is not symmetric - the order of the sets matters significantly. If we reverse our example and subtract all students from athletes, we would get an empty set since every athlete is also a student.
</p>

<h3><u>Key Properties of Set Difference</u></h3>
<p>Let's explore the essential properties that make set difference unique:</p>
<li>Non-Commutativity: A - B is usually different from B - A</li>
<li>Identity with Empty Set: A - ∅ = A (removing nothing leaves the original set)</li>
<li>Annihilation with Self: A - A = ∅ (removing all elements gives empty set)</li>
<li>Relationship with Intersection: A - B = A ∩ B̄ (B̄ is the complement of B)</li>

<h3><u>Ways to Perform Set Difference in Python</u></h3>
<table>
<tr><th>Method</th><th>Python Syntax</th><th>Description</th></tr>
<tr><td>Difference operator</td><td>A - B</td><td>Creates a new set with elements in A but not in B</td></tr>
<tr><td>Difference method</td><td>A.difference(B, C, ...)</td><td>Allows removing elements from multiple sets</td></tr>
<tr><td>In-place update operator</td><td>A -= B</td><td>Modifies A directly by removing elements in B</td></tr>
<tr><td>In-place update method</td><td>A.difference_update(B, C, ...)</td><td>Updates A by removing elements from multiple sets</td></tr>
</table>`,

  codeExample: `def demonstrate_set_difference():
    # Let's explore set difference with a real-world example
    # Consider a library management system
    
    # All books in the library
    all_books = {'Python Basics', 'Data Science', 'Web Development', 
                'Machine Learning', 'Algorithms'}
    
    # Books currently checked out
    checked_out = {'Data Science', 'Algorithms', 'Web Development'}
    
    # Find available books using set difference
    available_books = all_books - checked_out
    print("Available books:", available_books)
    
    # Using difference() method for multiple sets
    reserved_books = {'Python Basics'}
    maintenance_books = {'Machine Learning'}
    
    # Find truly available books (not checked out, reserved, or in maintenance)
    truly_available = all_books.difference(checked_out, reserved_books, maintenance_books)
    print("Truly available books:", truly_available)
    
    # Demonstrate non-commutativity
    print("Demonstrating non-commutativity:")
    print("all_books - checked_out:", all_books - checked_out)
    print("checked_out - all_books:", checked_out - all_books)  # Empty set
    
    # In-place modification example
    inventory = {'Python Basics', 'Data Science', 'Web Development'}
    damaged_books = {'Web Development'}
    
    print("Before removing damaged books:", inventory)
    inventory -= damaged_books
    print("After removing damaged books:", inventory)

# Run the demonstration
demonstrate_set_difference()`,

  exercises: [
    {
      prompt:
        'Write a function that finds all elements that are in set A but not in any of the other input sets. Handle the case where only one set is provided.',
      initialCode: `def unique_to_first(*sets):
    # Write your solution here
    pass`,
      solution: `def unique_to_first(*sets):
    # Handle cases with 0 or 1 sets
    if not sets:
        return set()
    if len(sets) == 1:
        return sets[0].copy()
    
    # First set minus the union of all other sets
    first_set = sets[0]
    other_sets = set.union(*sets[1:])
    return first_set - other_sets`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Implement a function that takes two sets of skills (required_skills and candidate_skills) and returns both the missing skills and excess skills of the candidate.',
      initialCode: `def skill_analysis(required_skills, candidate_skills):
    # Write your solution here
    pass`,
      solution: `def skill_analysis(required_skills, candidate_skills):
    # Convert inputs to sets if they aren't already
    required = set(required_skills)
    candidate = set(candidate_skills)
    
    return {
        'missing_skills': required - candidate,  # Skills the candidate needs
        'excess_skills': candidate - required   # Additional skills the candidate has
    }`,
      difficulty: Difficulty.Intermediate,
    },
  ],

  quizzes: [
    {
      question: 'What is the result of A - B when A is a subset of B?',
      options: [
        'Set B',
        'Set A',
        'Empty set',
        'It depends on the elements in A',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. If A ⊆ B, then A - B removes all elements of A.',
        'Incorrect. Since all elements of A are in B, they will all be removed.',
        'Correct! Since every element in A is also in B, A - B removes all elements, resulting in an empty set.',
        'Incorrect. The result is always an empty set if A is a subset of B.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'Which statement about set difference is TRUE?',
      options: [
        'A - B = B - A is always true',
        'A - B is always smaller than A',
        '(A - B) - C = A - (B - C)',
        'A - ∅ = ∅',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Set difference is not commutative.',
        'Correct! The difference operation can only remove elements, so the result cannot be larger than the original set A.',
        'Incorrect. Set difference is not associative.',
        'Incorrect. A - ∅ = A (removing no elements leaves the original set).',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const symmetricDifferenceData: LessonContent = {
  title: 'Symmetric Difference Operations',
  content: `<p>
Symmetric difference is a unique set operation that finds elements present in either set, but not in both. It's like asking "what elements are unique to each set?" The symmetric difference of sets A and B, denoted as A △ B or A ⊕ B, gives us a new set containing elements that are in exactly one of the sets, but not in their intersection.
</p>

<h3><u>Understanding Symmetric Difference</u></h3>
<p>
Think of symmetric difference as finding the "exclusive" elements of each set. For example, if we have two friend groups, the symmetric difference would show us who belongs to exactly one group but not both. This helps us identify the truly distinct members of each group. We can also think of it as (A - B) ∪ (B - A).
</p>

<h3><u>Key Properties of Symmetric Difference</u></h3>
<p>Symmetric difference has several interesting properties that make it unique:</p>
<li>Commutativity: A △ B = B △ A</li>
<li>Associativity: (A △ B) △ C = A △ (B △ C)</li>
<li>Identity: A △ ∅ = A</li>
<li>Self-Inverse: A △ A = ∅</li>
<li>Relationship with Union and Intersection: A △ B = (A ∪ B) - (A ∩ B)</li>

<h3><u>Methods in Python</u></h3>
<table>
<tr><th>Method</th><th>Python Syntax</th><th>Description</th></tr>
<tr><td>Symmetric difference operator</td><td>A ^ B</td><td>Creates a new set with elements in either A or B but not both</td></tr>
<tr><td>Symmetric difference method</td><td>A.symmetric_difference(B)</td><td>Method-style symmetric difference</td></tr>
<tr><td>Update operator</td><td>A ^= B</td><td>In-place symmetric difference</td></tr>
<tr><td>Update method</td><td>A.symmetric_difference_update(B)</td><td>In-place update using method style</td></tr>
</table>`,

  codeExample: `def demonstrate_symmetric_difference():
    # Let's explore symmetric difference with a practical example
    # Consider comparing course enrollments between two semesters
    
    fall_students = {'Alice', 'Bob', 'Charlie', 'David'}
    spring_students = {'Charlie', 'David', 'Eve', 'Frank'}
    
    # Find students who changed their enrollment status
    # (either joined or left between semesters)
    enrollment_changes = fall_students ^ spring_students
    print("Students who either joined or left:", enrollment_changes)
    
    # Using symmetric_difference() method
    changes_method = fall_students.symmetric_difference(spring_students)
    print("Same result using method:", changes_method)
    
    # Breaking down the components
    new_students = spring_students - fall_students
    departed_students = fall_students - spring_students
    print("New students:", new_students)
    print("Departed students:", departed_students)
    
    # Demonstrate relationship with union and intersection
    union_minus_intersection = (fall_students | spring_students) - (fall_students & spring_students)
    print("Union minus intersection:", union_minus_intersection)
    print("Same as symmetric difference:", enrollment_changes)
    
    # In-place modification example
    current_team = {'Alice', 'Bob', 'Charlie'}
    changes = {'Bob', 'David'}
    
    print("Before team update:", current_team)
    current_team ^= changes
    print("After team update:", current_team)

# Run the demonstration
demonstrate_symmetric_difference()`,

  exercises: [
    {
      prompt:
        'Write a function that finds elements that appear in exactly one set out of any number of input sets.',
      initialCode: `def unique_elements(*sets):
    # Write your solution here
    pass`,
      solution: `def unique_elements(*sets):
    if not sets:
        return set()
    if len(sets) == 1:
        return sets[0].copy()
        
    # Start with the first set
    result = sets[0].copy()
    
    # Apply symmetric difference with each subsequent set
    for s in sets[1:]:
        result = result.symmetric_difference(s)
    
    return result`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Implement a function that analyzes changes between two versions of a dataset, returning both added and removed elements.',
      initialCode: `def analyze_changes(old_version, new_version):
    # Write your solution here
    pass`,
      solution: `def analyze_changes(old_version, new_version):
    # Convert inputs to sets if they aren't already
    old = set(old_version)
    new = set(new_version)
    
    return {
        'added': new - old,
        'removed': old - new,
        'changed_total': old ^ new  # All changes combined
    }`,
      difficulty: Difficulty.Intermediate,
    },
  ],

  quizzes: [
    {
      question: 'What is the symmetric difference of a set with itself?',
      options: [
        'The original set',
        'An empty set',
        'It depends on the elements',
        'Undefined',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Symmetric difference with itself removes all elements.',
        'Correct! A △ A = ∅ because no elements are unique to either copy of the set.',
        'Incorrect. This is always true regardless of the elements.',
        'Incorrect. The operation is well-defined for any set.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'Which expression is equivalent to symmetric difference?',
      options: [
        '(A ∪ B) ∩ (A ∩ B)',
        '(A - B) ∩ (B - A)',
        '(A ∪ B) - (A ∩ B)',
        '(A ∩ B) - (A ∪ B)',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. This would give elements common to both sets.',
        'Incorrect. The intersection of differences is always empty.',
        'Correct! This removes common elements from the union, giving elements in exactly one set.',
        'Incorrect. This is always empty as intersection is a subset of union.',
      ],
      difficulty: Difficulty.Advanced,
    },
  ],
};

const subsetSupersetData: LessonContent = {
  title: 'Understanding Subsets and Supersets',
  content: `<p>
When we study sets, one of the most fundamental relationships we can explore is containment - how sets can be contained within other sets. This relationship gives us the concepts of subsets and supersets, which are like parent-child relationships in the world of sets.
</p>

<h3><u>The Essence of Set Containment</u></h3>
<p>
Imagine a library where we have a collection of all books (let's call it A) and a smaller collection of just mystery books (let's call it B). Since every mystery book is also a book, we say that B is a subset of A, written as B ⊆ A. Conversely, A is a superset of B, written as A ⊇ B, because A contains all elements of B.
</p>

<h3><u>Types of Set Containment</u></h3>
<p>
There are two important distinctions when discussing set containment:
</p>
<li><strong>Subset (⊆)</strong>: Every element in set A is also in set B. A set is always a subset of itself.</li>
<li><strong>Proper Subset (⊂)</strong>: Every element in set A is in set B, AND B contains at least one element not in A.</li>
<li><strong>Superset (⊇)</strong>: Contains all elements of another set. A set is always a superset of itself.</li>
<li><strong>Proper Superset (⊃)</strong>: Contains all elements of another set PLUS at least one additional element.</li>

<h3><u>Key Properties</u></h3>
<table>
<tr><th>Property</th><th>Description</th><th>Example</th></tr>
<tr><td>Reflexivity</td><td>Every set is a subset of itself</td><td>A ⊆ A for any set A</td></tr>
<tr><td>Transitivity</td><td>If A ⊆ B and B ⊆ C, then A ⊆ C</td><td>Like a chain of containment</td></tr>
<tr><td>Antisymmetry</td><td>If A ⊆ B and B ⊆ A, then A = B</td><td>Mutual containment means equality</td></tr>
<tr><td>Empty Set</td><td>∅ is a subset of every set</td><td>∅ ⊆ A for any set A</td></tr>
</table>`,

  codeExample: `def explore_set_containment():
    # Let's explore subset and superset relationships with a practical example
    # Consider a hierarchy of programming languages by paradigm
    
    # All programming languages we'll consider
    all_languages = {'Python', 'Java', 'Haskell', 'Prolog', 'SQL'}
    
    # Languages by paradigm
    object_oriented = {'Python', 'Java'}
    functional = {'Haskell', 'Python'}  # Python supports functional programming
    declarative = {'SQL', 'Prolog', 'Haskell'}
    
    # Demonstrate subset testing
    print("Testing subset relationships:")
    print("Is OOP a subset of all languages?", 
          object_oriented.issubset(all_languages))  # True
    
    # Testing proper subset
    print("Is OOP a proper subset?", 
          object_oriented < all_languages)  # True
    
    # Demonstrate superset testing
    print("Testing superset relationships:")
    print("Is all_languages a superset of OOP?", 
          all_languages.issuperset(object_oriented))  # True
    
    # Multiple subset relationships
    multi_paradigm = {'Python'}
    print("Python supports multiple paradigms:")
    print("Is Python in OOP?", multi_paradigm.issubset(object_oriented))
    print("Is Python in functional?", multi_paradigm.issubset(functional))
    
    # Empty set is a subset of everything
    empty_set = set()
    print("Empty set relationships:")
    print("Is empty set a subset of all_languages?", 
          empty_set.issubset(all_languages))  # True
    print("Is empty set a proper subset?", 
          empty_set < all_languages)  # True

# Run the demonstration
explore_set_containment()`,

  exercises: [
    {
      prompt:
        'Write a function that determines if one set is a proper subset of another. Do not use the built-in operators.',
      initialCode: `def is_proper_subset(set_a, set_b):
    # Write your solution here
    pass`,
      solution: `def is_proper_subset(set_a, set_b):
    # Convert inputs to sets if they aren't already
    a = set(set_a)
    b = set(set_b)
    
    # Conditions for proper subset:
    # 1. Every element in A must be in B
    # 2. B must have at least one element not in A
    
    return all(x in b for x in a) and any(x not in a for x in b)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a function that finds all subsets of a given set that contain exactly n elements.',
      initialCode: `def find_subsets_of_size(full_set, n):
    # Write your solution here
    pass`,
      solution: `from itertools import combinations

def find_subsets_of_size(full_set, n):
    # Convert input to set if it isn't already
    s = set(full_set)
    
    # Check if request is possible
    if n > len(s) or n < 0:
        return set()
        
    # Generate all combinations of size n
    return {frozenset(combo) for combo in combinations(s, n)}`,
      difficulty: Difficulty.Advanced,
    },
  ],

  quizzes: [
    {
      question: 'Which statement about subsets and supersets is FALSE?',
      options: [
        'Every set is a subset of itself',
        'The empty set is a subset of every set',
        'If A is a proper subset of B, then |A| < |B|',
        'If A is a subset of B and B is a subset of A, then A must be empty',
      ],
      correctAnswer: 3,
      explanations: [
        'Incorrect. This is true - subset relationship is reflexive.',
        'Incorrect. This is true - the empty set is a subset of all sets.',
        'Incorrect. This is true - proper subsets must have fewer elements.',
        'Correct! This is false. If A ⊆ B and B ⊆ A, then A = B (they contain the same elements).',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'What is the relationship between proper subsets and regular subsets?',
      options: [
        'Every proper subset is a subset, but not every subset is a proper subset',
        'Every subset is a proper subset, but not every proper subset is a subset',
        'Proper subsets and subsets are exactly the same thing',
        'Proper subsets and subsets are mutually exclusive',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct! A proper subset must be a subset, but it also must be strictly smaller.',
        'Incorrect. Some subsets (like A ⊆ A) are not proper subsets.',
        'Incorrect. Proper subsets have additional requirements.',
        'Incorrect. Every proper subset is also a subset.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const disjointSetsData: LessonContent = {
  title: 'Disjoint Sets',
  content: `<p>
Disjoint sets are sets that have no elements in common - their intersection is empty. This concept is fundamental in many areas of mathematics and computer science, particularly when we need to work with completely separate groups or categories.
</p>

<h3><u>Understanding Disjoint Sets</u></h3>
<p>
Think of disjoint sets like different species of animals - mammals and reptiles are disjoint sets because no animal can be both a mammal and a reptile. When we say two sets A and B are disjoint, we mean that A ∩ B = ∅. This property is symmetric: if A is disjoint from B, then B is disjoint from A.
</p>

<h3><u>Applications of Disjoint Sets</u></h3>
<p>
Disjoint sets appear naturally in many situations:
</p>
<li>Classification systems (mutually exclusive categories)</li>
<li>Resource allocation (non-shared resources)</li>
<li>Error handling (mutually exclusive error types)</li>
<li>Database design (partition schemes)</li>

<h3><u>Key Properties</u></h3>
<table>
<tr><th>Property</th><th>Description</th><th>Mathematical Notation</th></tr>
<tr><td>Empty Intersection</td><td>No shared elements</td><td>A ∩ B = ∅</td></tr>
<tr><td>Union Size</td><td>Sum of individual sizes</td><td>|A ∪ B| = |A| + |B|</td></tr>
<tr><td>Mutual Exclusivity</td><td>Elements belong to exactly one set</td><td>x ∈ A ⟹ x ∉ B</td></tr>
</table>`,

  codeExample: `def explore_disjoint_sets():
    # Let's explore disjoint sets with a practical example
    # Consider different types of vehicles
    
    land_vehicles = {'car', 'bicycle', 'motorcycle', 'train'}
    water_vehicles = {'boat', 'ship', 'submarine', 'jetski'}
    air_vehicles = {'airplane', 'helicopter', 'balloon', 'drone'}
    
    # Test if sets are disjoint
    print("Checking disjoint relationships:")
    print("Land and water vehicles disjoint?", 
          land_vehicles.isdisjoint(water_vehicles))  # True
    print("Land and air vehicles disjoint?", 
          land_vehicles.isdisjoint(air_vehicles))  # True
    
    # Create a hybrid vehicle to break disjointness
    amphibious = {'amphibious_car'}
    land_vehicles_extended = land_vehicles | amphibious
    water_vehicles_extended = water_vehicles | amphibious
    
    print("After adding hybrid vehicle:")
    print("Land and water vehicles still disjoint?", 
          land_vehicles_extended.isdisjoint(water_vehicles_extended))  # False
    
    # Demonstrate property of disjoint union
    print("Size properties of disjoint sets:")
    print(f"Land vehicles: {len(land_vehicles)}")
    print(f"Water vehicles: {len(water_vehicles)}")
    print(f"Combined size: {len(land_vehicles | water_vehicles)}")
    print("Size of union equals sum of sizes:", 
          len(land_vehicles | water_vehicles) == 
          len(land_vehicles) + len(water_vehicles))

# Run the demonstration
explore_disjoint_sets()`,

  exercises: [
    {
      prompt:
        'Write a function that determines if a collection of sets are mutually disjoint (no two sets share any elements).',
      initialCode: `def are_mutually_disjoint(*sets):
    # Write your solution here
    pass`,
      solution: `def are_mutually_disjoint(*sets):
    if len(sets) < 2:
        return True
    
    # Convert all inputs to sets
    set_list = [set(s) for s in sets]
    
    # Check each pair of sets
    for i in range(len(set_list)):
        for j in range(i + 1, len(set_list)):
            if not set_list[i].isdisjoint(set_list[j]):
                return False
    
    return True`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Create a function that partitions a set into n disjoint subsets of approximately equal size.',
      initialCode: `def partition_set(input_set, n):
    # Write your solution here
    pass`,
      solution: `def partition_set(input_set, n):
    # Convert input to list for indexing
    elements = list(input_set)
    
    if n <= 0:
        raise ValueError("n must be positive")
    if n > len(elements):
        raise ValueError("n cannot be larger than set size")
    
    # Calculate partition sizes
    base_size = len(elements) // n
    extra = len(elements) % n
    
    # Create partitions
    partitions = []
    start = 0
    for i in range(n):
        # Add one extra element to early partitions if size doesn't divide evenly
        size = base_size + (1 if i < extra else 0)
        partitions.append(set(elements[start:start + size]))
        start += size
    
    return partitions`,
      difficulty: Difficulty.Advanced,
    },
  ],

  quizzes: [
    {
      question: 'What is true about the intersection of disjoint sets?',
      options: [
        'It must contain exactly one element',
        'It must be empty',
        'It must be equal to one of the sets',
        'It depends on the size of the sets',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Disjoint sets have no elements in common.',
        'Correct! By definition, disjoint sets have an empty intersection.',
        'Incorrect. The intersection cannot equal either set as it must be empty.',
        'Incorrect. The intersection is empty regardless of set sizes.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'Which statement about disjoint sets A and B is FALSE?',
      options: [
        '|A ∪ B| = |A| + |B|',
        'A ∩ B = ∅',
        'If x ∈ A, then x ∉ B',
        'A and B must be the same size',
      ],
      correctAnswer: 3,
      explanations: [
        'Incorrect. This is true - the union size equals the sum of sizes for disjoint sets.',
        'Incorrect. This is true - disjoint sets have empty intersection.',
        'Incorrect. This is true - elements cannot belong to both sets.',
        'Correct! This is false - disjoint sets can be any size.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const setEqualityData: LessonContent = {
  title: 'Set Equality',
  content: `<p>
Set equality is a fundamental concept that helps us understand when two collections represent the same set. Unlike lists or arrays where order matters, sets are equal if and only if they contain exactly the same elements. This unique property means that {1, 2, 3} is equal to {3, 1, 2} even though the elements appear in a different order.
</p>

<h3><u>Understanding Set Equality Deeply</u></h3>
<p>
When we say two sets are equal, we're really saying that they represent exactly the same collection of unique elements. Think about two recipe books containing the same recipes - even if the recipes are arranged differently, the books contain the same content. This is how set equality works. The mathematical definition states that sets A and B are equal if and only if every element in A is also in B (A ⊆ B) and every element in B is also in A (B ⊆ A).
</p>

<h3><u>Key Properties of Set Equality</u></h3>
<li><strong>Reflexivity</strong>: A set is always equal to itself (A = A)</li>
<li><strong>Symmetry</strong>: If A equals B, then B equals A (A = B ⟹ B = A)</li>
<li><strong>Transitivity</strong>: If A equals B and B equals C, then A equals C (A = B ∧ B = C ⟹ A = C)</li>
<li><strong>Extensionality</strong>: Two sets are equal if they have exactly the same elements</li>

<h3><u>Methods for Testing Equality</u></h3>
<table>
<tr><th>Method</th><th>Python Syntax</th><th>Description</th></tr>
<tr><td>Direct equality</td><td>A == B</td><td>Tests if sets contain the same elements</td></tr>
<tr><td>Identity test</td><td>A is B</td><td>Tests if sets are the same object in memory</td></tr>
<tr><td>Subset comparison</td><td>A <= B and B <= A</td><td>Alternative way to test equality</td></tr>
</table>`,

  codeExample: `def explore_set_equality():
    # Let's explore set equality with practical examples
    
    # Creating sets with the same elements in different orders
    set1 = {1, 2, 3, 4}
    set2 = {4, 3, 2, 1}
    set3 = {1, 2, 3, 4, 4}  # Note the duplicate 4
    
    print("Demonstrating basic set equality:")
    print(f"set1: {set1}")
    print(f"set2: {set2}")
    print(f"set3: {set3}")
    print(f"set1 == set2: {set1 == set2}")  # True
    print(f"set1 == set3: {set1 == set3}")  # True (duplicates don't affect equality)
    
    # Different ways to test equality
    print("Different equality testing methods:")
    print("Direct equality test:", set1 == set2)
    print("Mutual subset test:", set1 <= set2 and set2 <= set1)
    print("Identity test:", set1 is set2)  # False - different objects
    
    # Practical example with string sets
    emails1 = {'user@example.com', 'admin@example.com'}
    emails2 = {'admin@example.com', 'user@example.com'}
    emails3 = {'user@example.com', 'different@example.com'}
    
    print("Practical email set comparison:")
    print(f"emails1 == emails2: {emails1 == emails2}")  # True
    print(f"emails1 == emails3: {emails1 == emails3}")  # False
    
    # Understanding empty set equality
    empty1 = set()
    empty2 = set()
    print("Empty set comparison:")
    print(f"empty1 == empty2: {empty1 == empty2}")  # True
    print(f"empty1 is empty2: {empty1 is empty2}")  # False

# Run the demonstration
explore_set_equality()`,

  exercises: [
    {
      prompt:
        'Write a function that tests if two collections represent the same set without using the == operator.',
      initialCode: `def are_sets_equal(collection1, collection2):
    # Write your solution here
    pass`,
      solution: `def are_sets_equal(collection1, collection2):
    # Convert inputs to sets to handle any iterable
    set1 = set(collection1)
    set2 = set(collection2)
    
    # Two sets are equal if they are subsets of each other
    return set1.issubset(set2) and set2.issubset(set1)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a function that groups equal sets from a list of sets, returning a list of groups.',
      initialCode: `def group_equal_sets(list_of_sets):
    # Write your solution here
    pass`,
      solution: `def group_equal_sets(list_of_sets):
    if not list_of_sets:
        return []
        
    # Convert all inputs to sets
    sets = [set(s) for s in list_of_sets]
    
    # Initialize groups
    groups = []
    used = set()
    
    # Group equal sets
    for i in range(len(sets)):
        if i in used:
            continue
            
        current_group = [sets[i]]
        used.add(i)
        
        # Find all sets equal to the current set
        for j in range(i + 1, len(sets)):
            if j not in used and sets[i] == sets[j]:
                current_group.append(sets[j])
                used.add(j)
                
        groups.append(current_group)
    
    return groups`,
      difficulty: Difficulty.Intermediate,
    },
  ],

  quizzes: [
    {
      question: 'Which statement about set equality is TRUE?',
      options: [
        'Sets must have elements in the same order to be equal',
        'Sets must be the same object in memory to be equal',
        'Sets with the same elements are equal regardless of order',
        'Sets can only be equal if they have unique elements',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Order does not matter for set equality.',
        'Incorrect. Different objects can represent equal sets.',
        'Correct! Sets are equal if they contain the same elements, regardless of order.',
        'Incorrect. Sets always have unique elements by definition.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'How can you test if sets A and B are equal WITHOUT using ==?',
      options: [
        'len(A) == len(B)',
        'A.issubset(B) and B.issubset(A)',
        'A.union(B) == A',
        'A.intersection(B) == A',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Equal length is necessary but not sufficient.',
        'Correct! Two sets are equal if they are subsets of each other.',
        'Incorrect. This only tests if B is a subset of A.',
        'Incorrect. This only tests if B contains all elements of A.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const setComplexityData: LessonContent = {
  title: 'Understanding Set Time Complexity',
  content: `<p>
Time complexity analysis helps us understand how set operations perform as the size of our data grows. Since sets are implemented using hash tables in Python, most operations are remarkably efficient, typically achieving constant time O(1) performance regardless of the set's size.
</p>

<h3><u>Core Operation Complexities</u></h3>
<p>
Let's examine why sets achieve such efficient performance. The secret lies in their hash table implementation, which allows direct access to elements through their hash values, much like looking up a word in a dictionary using alphabetical tabs - you don't need to scan through every page.
</p>

<table>
<tr><th>Operation</th><th>Time Complexity</th><th>Explanation</th></tr>
<tr>
  <td>Add element (add)</td>
  <td>O(1) average</td>
  <td>Direct placement using hash value</td>
</tr>
<tr>
  <td>Remove element (remove)</td>
  <td>O(1) average</td>
  <td>Direct access using hash value</td>
</tr>
<tr>
  <td>Check membership (in)</td>
  <td>O(1) average</td>
  <td>Single hash table lookup</td>
</tr>
<tr>
  <td>Union (|)</td>
  <td>O(len(s) + len(t))</td>
  <td>Must process all elements</td>
</tr>
<tr>
  <td>Intersection (&)</td>
  <td>O(min(len(s), len(t)))</td>
  <td>Iterate through smaller set</td>
</tr>
<tr>
  <td>Difference (-)</td>
  <td>O(len(s))</td>
  <td>Must check each element in first set</td>
</tr>
</table>

<h3><u>Factors Affecting Performance</u></h3>
<p>While sets generally offer excellent performance, several factors can impact their efficiency:</p>
<li><strong>Load Factor</strong>: As the set fills up, collision probability increases</li>
<li><strong>Hash Function Quality</strong>: Poor hash distributions lead to more collisions</li>
<li><strong>Initial Capacity</strong>: Too small initial size causes frequent resizing</li>
<li><strong>Element Mutability</strong>: Mutable elements can break hash consistency</li>`,

  codeExample: `import time
import matplotlib.pyplot as plt
from typing import List, Set, Dict

def measure_set_performance():
    """
    Demonstrates and measures performance characteristics of common set operations
    """
    def time_operation(operation, *args):
        start_time = time.time()
        operation(*args)
        return time.time() - start_time
    
    # Test different set sizes
    sizes = [1000, 5000, 10000, 50000, 100000]
    
    # Store timing results
    add_times = []
    lookup_times = []
    union_times = []
    
    for size in sizes:
        # Create test sets
        set1 = set(range(size))
        set2 = set(range(size, 2 * size))
        
        # Measure add operation
        add_time = time_operation(lambda: set1.add(2 * size))
        add_times.append(add_time)
        
        # Measure lookup operation
        lookup_time = time_operation(lambda: size - 1 in set1)
        lookup_times.append(lookup_time)
        
        # Measure union operation
        union_time = time_operation(lambda: set1.union(set2))
        union_times.append(union_time)
        
        print(f"Size: {size}")
        print(f"Add time: {add_time:.6f} seconds")
        print(f"Lookup time: {lookup_time:.6f} seconds")
        print(f"Union time: {union_time:.6f} seconds")
    
    # Demonstrate hash collisions impact
    class BadHash:
        def __init__(self, value):
            self.value = value
        
        def __hash__(self):
            return 1  # Deliberately bad hash function
            
        def __eq__(self, other):
            return isinstance(other, BadHash) and self.value == other.value
    
    # Compare good vs bad hash performance
    good_set = set(range(1000))
    bad_set = set(BadHash(i) for i in range(1000))
    
    good_lookup = time_operation(lambda: 999 in good_set)
    bad_lookup = time_operation(lambda: BadHash(999) in bad_set)
    
    print("Hash Quality Impact:")
    print(f"Good hash lookup: {good_lookup:.6f} seconds")
    print(f"Bad hash lookup: {bad_lookup:.6f} seconds")
    
    return sizes, add_times, lookup_times, union_times

# Run the demonstration
sizes, add_times, lookup_times, union_times = measure_set_performance()`,

  exercises: [
    {
      prompt:
        'Write a function that compares the performance of membership testing in a set versus a list for different sizes of data.',
      initialCode: `def compare_membership_performance(max_size: int, step: int) -> Dict[str, List[float]]:
    # Write your solution here
    pass`,
      solution: `def compare_membership_performance(max_size: int, step: int) -> Dict[str, List[float]]:
    import time
    
    results = {
        'sizes': [],
        'set_times': [],
        'list_times': []
    }
    
    for size in range(step, max_size + 1, step):
        # Create test data
        data = list(range(size))
        test_set = set(data)
        test_list = list(data)
        
        # Time set membership
        start = time.time()
        _ = size - 1 in test_set
        set_time = time.time() - start
        
        # Time list membership
        start = time.time()
        _ = size - 1 in test_list
        list_time = time.time() - start
        
        # Store results
        results['sizes'].append(size)
        results['set_times'].append(set_time)
        results['list_times'].append(list_time)
    
    return results`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Implement a function that measures the impact of hash collisions on set performance by creating elements with increasingly poor hash functions.',
      initialCode: `def measure_collision_impact(size: int) -> Dict[str, List[float]]:
    # Write your solution here
    pass`,
      solution: `def measure_collision_impact(size: int) -> Dict[str, List[float]]:
    import time
    
    class ControlledHash:
        def __init__(self, value, collision_group):
            self.value = value
            self.collision_group = collision_group
            
        def __hash__(self):
            return self.collision_group
            
        def __eq__(self, other):
            return isinstance(other, ControlledHash) and self.value == other.value
    
    results = {
        'collision_groups': [],
        'add_times': [],
        'lookup_times': []
    }
    
    # Test different numbers of collision groups
    for groups in range(1, size + 1, size // 10):
        elements = [ControlledHash(i, i % groups) for i in range(size)]
        
        # Measure add time
        start = time.time()
        test_set = set(elements)
        add_time = time.time() - start
        
        # Measure lookup time
        start = time.time()
        _ = ControlledHash(size - 1, (size - 1) % groups) in test_set
        lookup_time = time.time() - start
        
        results['collision_groups'].append(groups)
        results['add_times'].append(add_time)
        results['lookup_times'].append(lookup_time)
    
    return results`,
      difficulty: Difficulty.Advanced,
    },
  ],

  quizzes: [
    {
      question: 'Which set operation typically has O(1) time complexity?',
      options: [
        'Union of two sets',
        'Adding a single element',
        'Finding the intersection of sets',
        'Computing the symmetric difference',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Union must process all elements in both sets.',
        'Correct! Adding an element uses the hash function for direct placement, typically O(1).',
        'Incorrect. Intersection must check elements in the smaller set.',
        'Incorrect. Symmetric difference must process elements from both sets.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'What is the primary factor that can degrade set performance from O(1) to O(n)?',
      options: [
        'Large set sizes',
        'High load factors',
        'Many hash collisions',
        'Complex element types',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Set performance is generally independent of size.',
        'Incorrect. High load factors trigger resizing before significant degradation.',
        'Correct! Hash collisions force linear searching within buckets, degrading performance.',
        'Incorrect. Element complexity affects hash computation but not overall structure.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const hashSetData: LessonContent = {
  title: 'HashSet Implementation',
  content: `<p>
A HashSet is a sophisticated data structure that uses hash tables under the hood to provide constant-time operations. Understanding how HashSets work internally helps us grasp why they're so efficient and what their limitations are.
</p>

<h3><u>Core Concepts of HashSet Implementation</u></h3>
<p>
Think of a HashSet as a well-organized library where each book has a unique "call number" (hash code) that tells us exactly which shelf to find it on. This system allows us to quickly find any book without searching through the entire library. Here's how it works:
</p>

<li><strong>Hashing Function</strong>: Converts elements into integer values (hash codes)</li>
<li><strong>Buckets</strong>: Storage locations determined by hash codes</li>
<li><strong>Collision Resolution</strong>: Handling when different elements hash to the same bucket</li>

<h3><u>Implementation Details</u></h3>
<table>
<tr><th>Component</th><th>Purpose</th><th>Implementation</th></tr>
<tr><td>Hash Function</td><td>Generate index from element</td><td>Uses object's __hash__() method</td></tr>
<tr><td>Bucket Array</td><td>Store elements</td><td>Dynamic array of linked lists</td></tr>
<tr><td>Load Factor</td><td>Trigger resizing</td><td>Typically 0.75 (75% full)</td></tr>
<tr><td>Collision Handling</td><td>Handle hash collisions</td><td>Separate chaining</td></tr>
</table>

<h3><u>HashSet Requirements</u></h3>
<p>For an object to be stored in a HashSet, it must be:</p>
<li><strong>Hashable</strong>: Must have a consistent hash value during its lifetime</li>
<li><strong>Immutable</strong>: Shouldn't change after being added to the set</li>
<li><strong>Comparable</strong>: Must implement equality comparison</li>`,

  codeExample: `def demonstrate_hashset_concepts():
    """
    Demonstrates key concepts of HashSet implementation
    """
    class SimpleHashSet:
        def __init__(self, initial_capacity=16):
            self.buckets = [[] for _ in range(initial_capacity)]
            self.size = 0
            self.load_factor = 0.75
            
        def _hash_function(self, element):
            """Convert hash code to bucket index"""
            return hash(element) % len(self.buckets)
            
        def add(self, element):
            """Add element to the set if it's not present"""
            if self.size / len(self.buckets) >= self.load_factor:
                self._resize()
                
            bucket_index = self._hash_function(element)
            bucket = self.buckets[bucket_index]
            
            # Check if element already exists
            for item in bucket:
                if item == element:
                    return False
                    
            bucket.append(element)
            self.size += 1
            return True
            
        def contains(self, element):
            """Check if element exists in set"""
            bucket_index = self._hash_function(element)
            bucket = self.buckets[bucket_index]
            
            return any(item == element for item in bucket)
            
        def _resize(self):
            """Double the capacity when load factor is reached"""
            old_buckets = self.buckets
            self.buckets = [[] for _ in range(len(old_buckets) * 2)]
            self.size = 0
            
            # Rehash all elements
            for bucket in old_buckets:
                for element in bucket:
                    self.add(element)
    
    # Demonstrate usage
    hash_set = SimpleHashSet()
    
    # Add some elements
    print("Adding elements to set:")
    elements = [1, "hello", 3.14, (1, 2)]
    for element in elements:
        print(f"Adding {element}: {hash_set.add(element)}")
    
    # Check containment
    print("Checking containment:")
    for element in elements + ["not present"]:
        print(f"Contains {element}? {hash_set.contains(element)}")
    
    # Demonstrate hash collisions
    print("Demonstrating hash collisions:")
    # These strings might hash to the same bucket
    hash_set.add("ab")
    hash_set.add("ba")
    
    # Show internal structure (simplified)
    print("Bucket distribution:")
    for i, bucket in enumerate(hash_set.buckets):
        if bucket:
            print(f"Bucket {i}: {bucket}")

# Run the demonstration
demonstrate_hashset_concepts()`,

  exercises: [
    {
      prompt:
        'Implement a method to calculate the number of hash collisions in a HashSet.',
      initialCode: `def count_collisions(elements):
    # Write your solution here
    pass`,
      solution: `def count_collisions(elements):
    # Create a dictionary to track elements per hash
    hash_buckets = {}
    collisions = 0
    
    for element in elements:
        # In real implementation, this would be hash(element) % capacity
        bucket = hash(element) % 16  # Using fixed size for simplicity
        
        if bucket in hash_buckets:
            collisions += 1
        else:
            hash_buckets[bucket] = True
            
    return collisions`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Implement a custom hash function for a Point class that ensures points with the same coordinates hash to the same bucket.',
      initialCode: `class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        
    # Implement __hash__ and __eq__`,
      solution: `class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __hash__(self):
        # Combine hashes of coordinates
        return hash((self.x, self.y))
    
    def __eq__(self, other):
        if not isinstance(other, Point):
            return False
        return self.x == other.x and self.y == other.y`,
      difficulty: Difficulty.Advanced,
    },
  ],

  quizzes: [
    {
      question: 'What happens when a HashSet reaches its load factor?',
      options: [
        'It starts rejecting new elements',
        'It creates a new larger array and rehashes all elements',
        'It increases the number of collisions allowed',
        'It compresses existing elements',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. HashSets continue accepting elements by resizing.',
        'Correct! The capacity is typically doubled and all elements are rehashed.',
        'Incorrect. Load factor triggers resizing, not collision tolerance changes.',
        'Incorrect. Elements are not compressed; the structure grows instead.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'Why must elements in a HashSet be immutable?',
      options: [
        'To save memory',
        'To maintain bucket order',
        'To prevent hash code changes after insertion',
        'To improve lookup speed',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Immutability is not primarily about memory usage.',
        'Incorrect. Bucket order is determined by hash codes.',
        'Correct! If an element changes after insertion, its hash code might change, making it unfindable.',
        'Incorrect. Lookup speed depends on the hash function quality.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const setsVsOtherDataStructuresData: LessonContent = {
  title: 'Sets vs Other Data Structures',
  content: `<p>
Understanding when to use sets versus other data structures is crucial for writing efficient code. Let's explore how sets compare to lists and dictionaries, examining their strengths, weaknesses, and ideal use cases through practical scenarios and performance considerations.
</p>

<h3><u>Core Characteristics Comparison</u></h3>
<p>
Each data structure in Python serves different needs and makes different trade-offs. Think of them like different types of storage containers: sets are like a sorting tray that automatically removes duplicates, lists are like an ordered filing cabinet, and dictionaries are like a labeled storage system where each item has its own unique tag.
</p>

<table>
<tr><th>Feature</th><th>Set</th><th>List</th><th>Dictionary</th></tr>
<tr>
  <td>Primary Purpose</td>
  <td>Unique item storage</td>
  <td>Ordered collection</td>
  <td>Key-value mapping</td>
</tr>
<tr>
  <td>Order Preservation</td>
  <td>No order guarantees</td>
  <td>Maintains insertion order</td>
  <td>Maintains insertion order (Python 3.7+)</td>
</tr>
<tr>
  <td>Duplicates</td>
  <td>Automatically removed</td>
  <td>Allowed</td>
  <td>Keys must be unique</td>
</tr>
<tr>
  <td>Memory Usage</td>
  <td>Higher than list</td>
  <td>Most efficient</td>
  <td>Similar to set</td>
</tr>
<tr>
  <td>Access Method</td>
  <td>Hash-based lookup</td>
  <td>Index-based</td>
  <td>Hash-based lookup</td>
</tr>
<tr>
  <td>Mutable Elements</td>
  <td>Not allowed</td>
  <td>Allowed</td>
  <td>Keys must be immutable</td>
</tr>

<h3><u>Performance Characteristics</u></h3>
<p>
Understanding the performance implications of each data structure helps us make better choices:
</p>

<table>
<tr><th>Operation</th><th>Set</th><th>List</th><th>Dictionary</th></tr>
<tr>
  <td>Membership Testing</td>
  <td>O(1)</td>
  <td>O(n)</td>
  <td>O(1)</td>
</tr>
<tr>
  <td>Add Element</td>
  <td>O(1)</td>
  <td>O(1) at end</td>
  <td>O(1)</td>
</tr>
<tr>
  <td>Remove Element</td>
  <td>O(1)</td>
  <td>O(n)</td>
  <td>O(1)</td>
</tr>
<tr>
  <td>Find Element</td>
  <td>O(1)</td>
  <td>O(n)</td>
  <td>O(1)</td>
</tr>
</table>

<h3><u>Choosing the Right Structure</u></h3>
<p>
Consider these scenarios when making your choice:
</p>

<p><strong>Choose a Set When:</strong></p>
<p>You need fast membership testing and uniqueness is important. Sets excel when you're frequently checking if items exist in a collection or when you need to ensure no duplicates exist. They're perfect for operations like finding unique elements or performing set operations (union, intersection, difference).</p>

<p><strong>Choose a List When:</strong></p>
<p>Order matters and you need to access elements by position. Lists are ideal when you need to maintain sequence, allow duplicates, or frequently access elements by their index. They're also more memory-efficient when you don't need uniqueness checking.</p>

<p><strong>Choose a Dictionary When:</strong></p>
<p>You need to associate values with keys. Dictionaries are perfect when you need to look up values using meaningful keys, or when you need to store additional information along with your elements.</p>`,

  codeExample: `def demonstrate_data_structure_differences():
    """
    Demonstrates practical scenarios comparing sets, lists, and dictionaries
    """
    import time
    
    def measure_time(func):
        """Helper function to measure execution time"""
        start = time.time()
        result = func()
        return time.time() - start, result

    # Scenario 1: Finding unique elements in a large dataset
    print("Scenario 1: Finding unique elements")
    data = [i % 100 for i in range(10000)]  # Creates lots of duplicates
    
    # Using a list
    list_time, list_uniques = measure_time(
        lambda: len([x for x in data if data.count(x) == 1])
    )
    
    # Using a set
    set_time, set_uniques = measure_time(
        lambda: len(set(data))
    )
    
    print(f"List approach: {list_time:.6f} seconds")
    print(f"Set approach: {set_time:.6f} seconds")
    
    # Scenario 2: Membership testing
    print("Scenario 2: Membership testing")
    test_size = 1000
    
    # Create test collections
    test_list = list(range(test_size))
    test_set = set(range(test_size))
    test_dict = dict.fromkeys(range(test_size))
    
    # Test membership
    element = test_size - 1  # Worst case for list
    
    list_time, _ = measure_time(
        lambda: element in test_list
    )
    
    set_time, _ = measure_time(
        lambda: element in test_set
    )
    
    dict_time, _ = measure_time(
        lambda: element in test_dict
    )
    
    print(f"List lookup: {list_time:.6f} seconds")
    print(f"Set lookup: {set_time:.6f} seconds")
    print(f"Dictionary lookup: {dict_time:.6f} seconds")
    
    # Scenario 3: Maintaining order vs uniqueness
    print("Scenario 3: Order vs Uniqueness")
    original_data = [1, 2, 2, 3, 3, 4]
    
    # Using list
    list_result = original_data  # Maintains order and duplicates
    
    # Using set
    set_result = list(set(original_data))  # Removes duplicates but loses order
    
    # Using dict to maintain both order and uniqueness
    dict_result = list(dict.fromkeys(original_data))  # Maintains order, removes duplicates
    
    print(f"Original: {original_data}")
    print(f"List result: {list_result}")
    print(f"Set result: {set_result}")
    print(f"Dict result: {dict_result}")

# Run the demonstration
demonstrate_data_structure_differences()`,

  exercises: [
    {
      prompt:
        'Write a function that recommends the most appropriate data structure given specific requirements.',
      initialCode: `def recommend_structure(needs_order: bool, needs_unique: bool, needs_key_value: bool) -> str:
    # Write your solution here
    pass`,
      solution: `def recommend_structure(needs_order: bool, needs_unique: bool, needs_key_value: bool) -> str:
    if needs_key_value:
        return "dictionary - provides key-value mapping with O(1) lookup"
    
    if needs_unique:
        if needs_order:
            return "dict.fromkeys() - maintains order and uniqueness"
        return "set - provides uniqueness with O(1) operations"
    
    if needs_order:
        return "list - maintains order with direct indexing"
    
    return "set - most efficient for basic collection needs"`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a function that compares the performance of finding duplicate elements using different data structures.',
      initialCode: `def compare_duplicate_finding_performance(data: list) -> dict:
    # Write your solution here
    pass`,
      solution: `def compare_duplicate_finding_performance(data: list) -> dict:
    import time
    
    def measure_time(func):
        start = time.time()
        result = func()
        return time.time() - start, result
    
    # List approach
    list_time, list_result = measure_time(
        lambda: [x for x in data if data.count(x) > 1]
    )
    
    # Set approach
    set_time, set_result = measure_time(
        lambda: list({x for x in data if data.count(x) > 1})
    )
    
    # Dictionary approach
    dict_time, dict_result = measure_time(
        lambda: [k for k, v in {x: data.count(x) for x in data}.items() if v > 1]
    )
    
    return {
        'list_performance': list_time,
        'set_performance': set_time,
        'dict_performance': dict_time,
        'list_memory': len(list_result),
        'set_memory': len(set_result),
        'dict_memory': len(dict_result)
    }`,
      difficulty: Difficulty.Intermediate,
    },
  ],

  quizzes: [
    {
      question:
        'Which data structure would be most efficient for checking if an element exists in a large collection?',
      options: [
        'List, because it maintains order',
        'Set, because it has O(1) lookup',
        'Dictionary, because it stores key-value pairs',
        'It depends on the size of the collection',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Order maintenance actually makes lists slower for lookups.',
        'Correct! Sets provide constant-time membership testing through hash-based lookup.',
        'Incorrect. While dictionaries also have O(1) lookup, they require key-value pairs.',
        'Incorrect. Set lookup remains O(1) regardless of collection size.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'In which scenario would a list be preferred over a set?',
      options: [
        'When you need to ensure elements are unique',
        'When you need to maintain the order of elements',
        'When you need fast membership testing',
        'When you need to store key-value pairs',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Sets are better for ensuring uniqueness.',
        'Correct! Lists maintain insertion order, while sets do not guarantee any order.',
        'Incorrect. Sets provide faster membership testing than lists.',
        'Incorrect. Dictionaries are used for key-value pairs.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// const orderedSetsData: LessonContent = {
//   title: 'Ordered Sets',
//   content: `<p>
// Ordered sets are sets that maintain the order of elements as they are inserted.
// In Python, the \`collections\` module provides the \`OrderedDict\` class, which can be used to create ordered sets.
// However, for a more specialized ordered set, you can use the \`sortedcontainers\` library, which provides the \`SortedSet\` class.
// Here's how you can work with ordered sets:
// </p>

// <ul>
// <li><strong>Using \`SortedSet\`:</strong> The \`SortedSet\` class from the \`sortedcontainers\` library maintains the order of elements as they are inserted.</li>
// <li><strong>Insertion:</strong> Elements are inserted in sorted order.</li>
// <li><strong>Deletion:</strong> Elements are removed while maintaining the sorted order.</li>
// <li><strong>Lookup:</strong> Elements are looked up in the sorted order.</li>
// </ul>`,
//   codeExample: `# Example of ordered sets in Python
// from sortedcontainers import SortedSet

// # Creating an ordered set
// ordered_set = SortedSet([3, 1, 4, 1, 5, 9])

// # Insertion
// ordered_set.add(2)
// print(ordered_set)  # Output: SortedSet([1, 2, 3, 4, 5, 9])

// # Deletion
// ordered_set.discard(4)
// print(ordered_set)  # Output: SortedSet([1, 2, 3, 5, 9])

// # Lookup
// print(3 in ordered_set)  # Output: True
// print(4 in ordered_set)  # Output: False`,
//   exercises: [
//     {
//       prompt: 'Implement ordered set operations with SortedSet from the sortedcontainers library.',
//       initialCode: `# Write your solution here
// from sortedcontainers import SortedSet

// # Creating an ordered set
// ordered_set = SortedSet([3, 1, 4, 1, 5, 9])

// # Insertion
// ordered_set.add(2)
// print(ordered_set)  # Output: SortedSet([1, 2, 3, 4, 5, 9])

// # Deletion
// ordered_set.discard(4)
// print(ordered_set)  # Output: SortedSet([1, 2, 3, 5, 9])

// # Lookup
// print(3 in ordered_set)  # Output: True
// print(4 in ordered_set)  # Output: False`,
//       solution: `from sortedcontainers import SortedSet

// # Creating an ordered set
// ordered_set = SortedSet([3, 1, 4, 1, 5, 9])

// # Insertion
// ordered_set.add(2)
// print(ordered_set)  # Output: SortedSet([1, 2, 3, 4, 5, 9])

// # Deletion
// ordered_set.discard(4)
// print(ordered_set)  # Output: SortedSet([1, 2, 3, 5, 9])

// # Lookup
// print(3 in ordered_set)  # Output: True
// print(4 in ordered_set)  # Output: False`,
//       difficulty: Difficulty.Intermediate,
//     },
//   ],
//   quizzes: [
//     {
//       question: 'Which library provides the \`SortedSet\` class for ordered sets in Python?',
//       options: [
//         'collections',
//         'itertools',
//         'sortedcontainers',
//         'heapq',
//       ],
//       correctAnswer: 2,
//       explanations: [
//         'This is incorrect. The \`collections\` library does not provide a \`SortedSet\` class.',
//         'This is incorrect. The \`itertools\` library does not provide a \`SortedSet\` class.',
//         'This is correct. The \`sortedcontainers\` library provides the \`SortedSet\` class.',
//         'This is incorrect. The \`heapq\` library does not provide a \`SortedSet\` class.',
//       ],
//       difficulty: Difficulty.Beginner,
//     },
//   ],
// };

const duplicateDetectionData: LessonContent = {
  title: 'Understanding Duplicate Detection with Sets',
  content: `<p>
Duplicate detection is one of the most powerful applications of sets. By leveraging a set's inherent property of storing only unique elements, we can efficiently identify, count, and handle duplicate elements in our data. Let's explore this pattern in depth to understand how it works and when to use it.
</p>

<h3><u>The Power of Set-Based Duplicate Detection</u></h3>
<p>
Think of duplicate detection like sorting through a deck of cards to find pairs. While you could check each card against every other card (like using nested loops), sets give us a much more efficient approach. When you try to add a card to a set, it automatically tells you if you've seen that card before.
</p>

<h3><u>Common Duplicate Detection Patterns</u></h3>
<p>
Let's examine several ways sets help us work with duplicates:
</p>

<li><strong>Finding All Duplicates</strong>: Identify elements that appear more than once</li>
<li><strong>Counting Duplicates</strong>: Determine how many times each element appears</li>
<li><strong>Removing Duplicates</strong>: Create a clean dataset with unique elements</li>
<li><strong>First Duplicate</strong>: Find the first element that repeats</li>

<h3><u>Performance Considerations</u></h3>
<table>
<tr><th>Approach</th><th>Time Complexity</th><th>Space Complexity</th><th>Best For</th></tr>
<tr>
  <td>Set-based</td>
  <td>O(n)</td>
  <td>O(n)</td>
  <td>Large datasets, speed priority</td>
</tr>
<tr>
  <td>Nested loops</td>
  <td>O(n²)</td>
  <td>O(1)</td>
  <td>Small datasets, memory constrained</td>
</tr>
<tr>
  <td>Sorting first</td>
  <td>O(n log n)</td>
  <td>O(1)</td>
  <td>When order matters</td>
</tr>
</table>`,

  codeExample: `def demonstrate_duplicate_detection():
    """
    Demonstrates various duplicate detection patterns using sets
    """
    def find_all_duplicates(data):
        """
        Returns all elements that appear more than once
        Time: O(n), Space: O(n)
        """
        seen = set()
        duplicates = set()
        
        for item in data:
            if item in seen:
                duplicates.add(item)
            else:
                seen.add(item)
        return duplicates
    
    def count_duplicates(data):
        """
        Returns a dictionary with counts of all elements
        Time: O(n), Space: O(n)
        """
        from collections import Counter
        counts = Counter(data)
        return {item: count for item, count in counts.items() if count > 1}
    
    def find_first_duplicate(data):
        """
        Returns the first element that appears twice
        Time: O(n), Space: O(n)
        """
        seen = set()
        for item in data:
            if item in seen:
                return item
            seen.add(item)
        return None
    
    def remove_duplicates_preserve_order(data):
        """
        Removes duplicates while preserving order
        Time: O(n), Space: O(n)
        """
        return list(dict.fromkeys(data))
    
    # Demonstration with practical examples
    print("Testing duplicate detection patterns:")
    
    # Example 1: Find all duplicates in a list of numbers
    numbers = [1, 3, 4, 2, 2, 4, 3, 7, 8]
    duplicates = find_all_duplicates(numbers)
    print(f"Duplicates in {numbers}:")
    print(f"Duplicate elements: {duplicates}")
    
    # Example 2: Count occurrences of duplicates
    text = "mississippi"
    char_counts = count_duplicates(text)
    print(f"Duplicate counts in '{text}':")
    print(f"Character frequencies: {char_counts}")
    
    # Example 3: Find first duplicate in a sequence
    sequence = [1, 2, 3, 4, 2, 3]
    first_dup = find_first_duplicate(sequence)
    print(f"First duplicate in {sequence}:")
    print(f"First repeated element: {first_dup}")
    
    # Example 4: Remove duplicates while preserving order
    items = ['a', 'b', 'a', 'c', 'b', 'd']
    unique_ordered = remove_duplicates_preserve_order(items)
    print(f"Removing duplicates from {items}:")
    print(f"Unique ordered elements: {unique_ordered}")

# Run the demonstration
demonstrate_duplicate_detection()`,

  exercises: [
    {
      prompt:
        'Write a function that finds elements that appear exactly twice in a list, preserving their order of first appearance.',
      initialCode: `def find_exactly_twice(data: list) -> list:
    # Write your solution here
    pass`,
      solution: `def find_exactly_twice(data: list) -> list:
    from collections import Counter
    
    # Count all elements
    counts = Counter(data)
    
    # Create set of elements that appear twice
    twice_elements = {item for item, count in counts.items() if count == 2}
    
    # Preserve order of first appearance
    return [item for item in data if item in twice_elements and 
            data.index(item) == data.rindex(item) - data[::-1].index(item) - 1]`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Implement a function that finds the longest substring without repeating characters in a given string.',
      initialCode: `def longest_unique_substring(s: str) -> str:
    # Write your solution here
    pass`,
      solution: `def longest_unique_substring(s: str) -> str:
    if not s:
        return ""
        
    # Track current window of unique characters
    char_set = set()
    max_length = 0
    start = 0
    result_start = 0
    
    for end in range(len(s)):
        # Shrink window while we have duplicates
        while s[end] in char_set:
            char_set.remove(s[start])
            start += 1
        
        # Add current character and update max length
        char_set.add(s[end])
        if end - start + 1 > max_length:
            max_length = end - start + 1
            result_start = start
    
    return s[result_start:result_start + max_length]`,
      difficulty: Difficulty.Advanced,
    },
  ],

  quizzes: [
    {
      question:
        'What is the time complexity of finding duplicates using a set?',
      options: [
        'O(n²) - must compare each element with every other',
        'O(n) - single pass through the data',
        'O(log n) - binary search based',
        'O(1) - constant time operation',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Set-based approach avoids comparing all pairs.',
        'Correct! We only need to scan through the data once, checking against the set.',
        'Incorrect. Binary search is not used in set-based duplicate detection.',
        'Incorrect. We must examine each element at least once.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which approach preserves the order of elements while removing duplicates?',
      options: [
        'Converting to a set and back to a list',
        'Using dict.fromkeys()',
        'Using a set with sorted()',
        'Using list.remove()',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Converting to a set loses order information.',
        'Correct! dict.fromkeys() preserves order while removing duplicates.',
        'Incorrect. sorted() creates a new ordering based on element values.',
        'Incorrect. list.remove() can change relative ordering of elements.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const uniqueElementsData: LessonContent = {
  title: 'Solving Unique Element Problems',
  content: `<p>
Working with unique elements is a fundamental task in programming that appears in many contexts, from data cleaning to algorithm design. Understanding how to efficiently handle uniqueness can significantly improve both code quality and performance.
</p>

<h3><u>Understanding Uniqueness Patterns</u></h3>
<p>
When we talk about unique elements, we're often dealing with three main types of problems:
</p>

<p><strong>1. Finding Unique Elements</strong></p>
<p>
Imagine you're looking through a stack of cards and want to identify cards that appear exactly once. This is like finding customers who have made exactly one purchase or words that appear only once in a text.
</p>

<p><strong>2. Maintaining Uniqueness</strong></p>
<p>
Think of this like maintaining a guest list where each person should be counted only once, regardless of how many times they try to register. This pattern is crucial in data cleaning and validation.
</p>

<p><strong>3. Unique Sequence Problems</strong></p>
<p>
Similar to finding the longest sequence of days without repeating weather patterns, these problems involve finding continuous sequences where all elements are unique.
</p>

<h3><u>Common Problem Types and Solutions</u></h3>
<table>
<tr><th>Problem Type</th><th>Example</th><th>Solution Strategy</th></tr>
<tr>
  <td>Single Unique</td>
  <td>Find one element that appears once</td>
  <td>Set difference between all elements and duplicates</td>
</tr>
<tr>
  <td>Multiple Unique</td>
  <td>Find all elements appearing exactly k times</td>
  <td>Counter + filtering</td>
</tr>
<tr>
  <td>Unique Substring</td>
  <td>Longest substring with unique characters</td>
  <td>Sliding window + set</td>
</tr>
</table>`,

  codeExample: `def demonstrate_unique_element_patterns():
    """
    Demonstrates various approaches to solving unique element problems
    """
    from collections import Counter
    
    def find_single_unique(numbers):
        """
        Finds an element that appears exactly once in the array
        Time: O(n), Space: O(n)
        """
        # Create sets of all elements and elements that appear multiple times
        all_elements = set()
        duplicates = set()
        
        for num in numbers:
            if num in all_elements:
                duplicates.add(num)
            else:
                all_elements.add(num)
        
        # Return one of the elements that appears only once
        return list(all_elements - duplicates)[0] if all_elements - duplicates else None
    
    def find_k_times_elements(numbers, k):
        """
        Finds all elements that appear exactly k times
        Time: O(n), Space: O(n)
        """
        # Count occurrences of each element
        counts = Counter(numbers)
        # Filter elements that appear exactly k times
        return [num for num, count in counts.items() if count == k]
    
    def longest_unique_substring(s):
        """
        Finds the longest substring with unique characters
        Time: O(n), Space: O(min(m, n)) where m is charset size
        """
        start = max_length = 0
        used_chars = {}
        
        for i, char in enumerate(s):
            # If char is used and its last position is after start
            if char in used_chars and used_chars[char] >= start:
                start = used_chars[char] + 1
            else:
                max_length = max(max_length, i - start + 1)
            
            used_chars[char] = i
        
        return max_length
    
    # Demonstrate solutions with examples
    numbers = [1, 2, 2, 3, 3, 4]
    print("Finding single unique element:")
    print(f"Input: {numbers}")
    print(f"Single unique element: {find_single_unique(numbers)}")
    
    numbers = [1, 1, 2, 2, 3, 3, 4, 4, 4]
    print("Finding elements appearing exactly twice:")
    print(f"Input: {numbers}")
    print(f"Elements appearing twice: {find_k_times_elements(numbers, 2)}")
    
    text = "abcabcbb"
    print("Finding longest substring with unique characters:")
    print(f"Input: {text}")
    print(f"Length of longest unique substring: {longest_unique_substring(text)}")

# Run the demonstration
demonstrate_unique_element_patterns()`,

  exercises: [
    {
      prompt: `Write a function that finds all elements that appear exactly once and returns them in their original order of appearance.`,
      initialCode: `def find_unique_ordered(data: list) -> list:
    # Write your solution here
    pass`,
      solution: `def find_unique_ordered(data: list) -> list:
    # Count occurrences of each element
    from collections import Counter
    counts = Counter(data)
    
    # Return elements that appear once in their original order
    return [x for x in data if counts[x] == 1]`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Implement a function that finds the longest subarray where the difference between any two elements is at most k.',
      initialCode: `def longest_subarray_with_difference(nums: list, k: int) -> int:
    # Write your solution here
    pass`,
      solution: `def longest_subarray_with_difference(nums: list, k: int) -> int:
    if not nums:
        return 0
        
    max_length = start = 0
    window = set()
    
    for end in range(len(nums)):
        # While window violates the condition, shrink it
        while window and (max(window) - min(window) > k):
            window.remove(nums[start])
            start += 1
            
        window.add(nums[end])
        max_length = max(max_length, end - start + 1)
    
    return max_length`,
      difficulty: Difficulty.Advanced,
    },
  ],

  quizzes: [
    {
      question:
        'What is the most space-efficient way to find elements that appear exactly once in a list?',
      options: [
        'Using two sets (all elements and duplicates)',
        'Using a Counter object',
        'Using nested loops',
        'Using sort and linear scan',
      ],
      correctAnswer: 3,
      explanations: [
        'Incorrect. Using two sets requires O(n) extra space.',
        'Incorrect. Counter requires O(n) extra space to store counts.',
        'Incorrect. While space-efficient, this is very time-inefficient O(n²).',
        'Correct! Sorting in-place followed by one scan uses O(1) extra space.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const setConversionData: LessonContent = {
  title: 'Strategic Data Structure Conversion',
  content: `<p>
Converting between sets and other data structures is a crucial skill that enables us to leverage the strengths of different structures while managing their limitations. Understanding when and how to convert between data structures can significantly impact program efficiency and clarity.
</p>

<h3><u>Understanding Conversion Strategies</u></h3>
<p>
Think of data structure conversion like changing vehicles during a journey - each vehicle (data structure) has its advantages for different parts of the journey. We might start with a set for fast duplicate removal, convert to a list for ordered operations, then back to a set for efficient lookups.
</p>

<p><strong>Common Conversion Patterns:</strong></p>
<p>1. List ↔ Set: When switching between ordered operations and unique-value operations</p>
<p>2. Dictionary ↔ Set: When moving between key-value pairs and unique keys</p>
<p>3. String ↔ Set: When working with unique characters in text</p>

<h3><u>Impact of Conversions</u></h3>
<table>
<tr><th>Conversion</th><th>Time Complexity</th><th>What's Preserved</th><th>What's Lost</th></tr>
<tr>
  <td>List → Set</td>
  <td>O(n)</td>
  <td>Element uniqueness</td>
  <td>Order, duplicates</td>
</tr>
<tr>
  <td>Set → List</td>
  <td>O(n)</td>
  <td>Elements</td>
  <td>Lookup efficiency</td>
</tr>
<tr>
  <td>Dict → Set</td>
  <td>O(n)</td>
  <td>Keys</td>
  <td>Values</td>
</tr>
</table>`,

  codeExample: `def demonstrate_set_conversions():
    """
    Demonstrates strategic conversions between sets and other data structures
    """
    def clean_and_sort(data):
        """
        Removes duplicates and sorts elements
        Strategy: List → Set → Sorted List
        """
        return sorted(set(data))
    
    def unique_chars_ordered(text):
        """
        Gets unique characters while preserving first appearance order
        Strategy: String → Dict → List
        """
        return list(dict.fromkeys(text))
    
    def frequency_to_unique(frequencies):
        """
        Converts a frequency dictionary to a set of unique elements
        Strategy: Dict → Set
        """
        return set(frequencies.keys())
    
    def group_by_frequency(data):
        """
        Groups elements by their frequency
        Strategy: List → Counter → Dict of Sets
        """
        from collections import Counter
        counts = Counter(data)
        
        # Group elements by their count
        frequency_groups = {}
        for item, count in counts.items():
            if count not in frequency_groups:
                frequency_groups[count] = set()
            frequency_groups[count].add(item)
            
        return frequency_groups
    
    # Demonstrate conversion strategies
    
    # Example 1: Clean and sort data
    numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
    print("Cleaning and sorting numbers:")
    print(f"Original: {numbers}")
    print(f"Cleaned and sorted: {clean_and_sort(numbers)}")
    
    # Example 2: Unique characters in order
    text = "mississippi"
    print("Unique characters in order:")
    print(f"Original: {text}")
    print(f"Unique chars: {''.join(unique_chars_ordered(text))}")
    
    # Example 3: Convert frequency count to unique elements
    frequencies = {'a': 3, 'b': 1, 'c': 2}
    print("Unique elements from frequencies:")
    print(f"Frequencies: {frequencies}")
    print(f"Unique elements: {frequency_to_unique(frequencies)}")
    
    # Example 4: Group by frequency
    items = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
    print("Grouping by frequency:")
    print(f"Original: {items}")
    print(f"Grouped by frequency: {group_by_frequency(items)}")

# Run the demonstration
demonstrate_set_conversions()`,

  exercises: [
    {
      prompt:
        'Write a function that takes a list of strings and returns the unique characters that appear in all strings.',
      initialCode: `def common_chars(strings: list) -> set:
    # Write your solution here
    pass`,
      solution: `def common_chars(strings: list) -> set:
    if not strings:
        return set()
    
    # Convert first string to set of characters
    chars = set(strings[0])
    
    # Intersect with character sets of remaining strings
    for s in strings[1:]:
        chars &= set(s)
    
    return chars`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Create a function that converts a nested dictionary into a set of all unique values at any level of nesting.',
      initialCode: `def extract_unique_values(nested_dict: dict) -> set:
    # Write your solution here
    pass`,
      solution: `def extract_unique_values(nested_dict: dict) -> set:
    def extract_values(obj, values=None):
        if values is None:
            values = set()
            
        if isinstance(obj, dict):
            for value in obj.values():
                extract_values(value, values)
        else:
            values.add(obj)
            
        return values
    
    return extract_values(nested_dict)`,
      difficulty: Difficulty.Advanced,
    },
  ],

  quizzes: [
    {
      question:
        'Which conversion preserves the order of first appearance of elements?',
      options: [
        'Converting to a set and back to a list',
        'Using dict.fromkeys()',
        'Using sorted(set())',
        'Using list(set())',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Converting to a set loses order information.',
        'Correct! dict.fromkeys() maintains the order of first appearance while removing duplicates.',
        'Incorrect. This sorts elements rather than preserving original order.',
        'Incorrect. This does not preserve the original order.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'What is the most efficient way to convert a set to a sorted list?',
      options: [
        'Convert to list then sort',
        'Use sorted() directly on the set',
        'Convert elements one by one and insert in order',
        'Use a binary search tree as intermediate step',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. This performs unnecessary steps.',
        'Correct! sorted() can work directly on any iterable, including sets.',
        'Incorrect. This is unnecessarily complex and inefficient.',
        'Incorrect. This adds unnecessary complexity and overhead.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const multisetsData: LessonContent = {
  title: 'Understanding Multisets with Counter',
  content: `<p>
While traditional sets only track whether an element exists or not, there are many situations where we need to keep track of how many times each element appears. This is where Python's Counter class comes in, providing a powerful implementation of a multiset (also known as a bag).
</p>

<p>
Think of a Counter like a specialized counting jar system. Instead of just knowing whether you have a type of marble, it tells you exactly how many of each type you have. This makes it perfect for tasks like word frequency analysis, inventory management, or any situation where duplicates matter.
</p>

<h3><u>Core Concepts of Multisets</u></h3>
<p>
A multiset differs from a regular set in several important ways:
</p>

<p>1. <strong>Element Frequency</strong>: Each element has an associated count indicating how many times it appears. For example, in a regular set {a, a, b} becomes just {a, b}, but in a multiset, it maintains the count: {a:2, b:1}.</p>

<p>2. <strong>Mathematical Operations</strong>: Operations like addition and subtraction work with frequencies. When you add two multisets, the frequencies add. When you subtract, they subtract (but never go below zero).</p>

<p>3. <strong>Flexible Access</strong>: You can access either just the elements (like a set) or their frequencies (like a dictionary), making multisets extremely versatile.</p>

<h3><u>Common Counter Operations</u></h3>
<table>
<tr><th>Operation</th><th>Description</th><th>Example</th></tr>
<tr>
  <td>most_common(n)</td>
  <td>Get n most frequent elements</td>
  <td>Counter('abbccc').most_common(2)</td>
</tr>
<tr>
  <td>elements()</td>
  <td>Iterator over elements with counts</td>
  <td>list(Counter('abbc').elements())</td>
</tr>
<tr>
  <td>update()</td>
  <td>Add counts from another mapping</td>
  <td>c.update(['a','b'])</td>
</tr>
<tr>
  <td>subtract()</td>
  <td>Subtract counts from another mapping</td>
  <td>c.subtract(['a','b'])</td>
</tr>
</table>`,

  codeExample: `from collections import Counter

def demonstrate_counter_operations():
    """
    Demonstrates practical applications of Counter objects as multisets
    """
    def analyze_text(text):
        """
        Analyzes character frequencies in text
        """
        # Create Counter from text
        char_counts = Counter(text.lower())
        
        print(f"Character frequencies in '{text}':")
        # Show most common characters
        for char, count in char_counts.most_common():
            if char.isalpha():  # Only show letters
                print(f"'{char}': {count} times")
        return char_counts
    
    def combine_inventories(inventory1, inventory2):
        """
        Combines two inventories, adding quantities
        """
        # Create Counters for each inventory
        inv1 = Counter(inventory1)
        inv2 = Counter(inventory2)
        
        # Combine inventories
        combined = inv1 + inv2
        print("Combined inventory:")
        for item, quantity in combined.most_common():
            print(f"{item}: {quantity}")
        return combined
    
    def track_stock_changes(initial, changes):
        """
        Tracks stock levels after a series of changes
        """
        stock = Counter(initial)
        print("Tracking stock changes:")
        print(f"Initial stock: {dict(stock)}")
        
        for operation, items in changes:
            if operation == "add":
                stock.update(items)
            elif operation == "remove":
                stock.subtract(items)
            print(f"After {operation}: {dict(stock)}")
        
        return stock
    
    # Demonstrate text analysis
    text = "Mississippi River"
    char_frequencies = analyze_text(text)
    
    # Demonstrate inventory management
    inventory1 = ['apple', 'orange', 'apple', 'banana']
    inventory2 = ['apple', 'banana', 'banana']
    combined = combine_inventories(inventory1, inventory2)
    
    # Demonstrate stock tracking
    initial_stock = ['widget', 'widget', 'gadget']
    changes = [
        ("add", ['widget', 'gadget']),
        ("remove", ['widget', 'widget']),
        ("add", ['gadget', 'gadget'])
    ]
    final_stock = track_stock_changes(initial_stock, changes)

# Run the demonstration
demonstrate_counter_operations()`,

  exercises: [
    {
      prompt:
        'Write a function that finds elements that appear more times in the second list than in the first list.',
      initialCode: `def find_increased_elements(list1: list, list2: list) -> dict:
    # Write your solution here
    pass`,
      solution: `def find_increased_elements(list1: list, list2: list) -> dict:
    from collections import Counter
    
    # Create Counters for both lists
    count1 = Counter(list1)
    count2 = Counter(list2)
    
    # Find elements with increased frequency
    increased = {}
    for element in count2:
        if count2[element] > count1[element]:
            increased[element] = count2[element] - count1[element]
    
    return increased`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Implement a function that finds all k-repeated elements in a string (elements that appear exactly k times).',
      initialCode: `def find_k_repeated(text: str, k: int) -> list:
    # Write your solution here
    pass`,
      solution: `def find_k_repeated(text: str, k: int) -> list:
    from collections import Counter
    
    # Count character frequencies
    char_counts = Counter(text)
    
    # Find characters that appear exactly k times
    # Sort to maintain consistent order
    return sorted([char for char, count in char_counts.items() 
                  if count == k])`,
      difficulty: Difficulty.Beginner,
    },
  ],

  quizzes: [
    {
      question:
        'What happens when you subtract Counter objects and a count would become negative?',
      options: [
        'The count becomes negative',
        'The element is removed from the Counter',
        'The count stays at zero',
        'An error is raised',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Counter objects do not allow negative counts.',
        'Incorrect. The element remains with a count of zero.',
        'Correct! Counter subtraction keeps counts at zero or above.',
        'Incorrect. No error is raised; the count is simply kept at zero.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which Counter method returns elements repeated according to their counts?',
      options: ['items()', 'elements()', 'most_common()', 'values()'],
      correctAnswer: 1,
      explanations: [
        'Incorrect. items() returns (element, count) pairs.',
        'Correct! elements() returns an iterator where each element appears count times.',
        'Incorrect. most_common() returns (element, count) pairs sorted by count.',
        'Incorrect. values() returns just the counts.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const setComprehensionData: LessonContent = {
  title: 'Mastering Set Comprehensions',
  content: `<p>
Set comprehensions provide an elegant and expressive way to create sets in Python. Just like list comprehensions, they allow us to define sets using a declarative syntax that clearly communicates our intent. Think of set comprehensions as a recipe that describes what elements should be included in our set.
</p>

<h3><u>Understanding Set Comprehension Syntax</u></h3>
<p>
A set comprehension follows this general pattern: {expression for item in iterable if condition}. Let's break this down:
</p>

<p>1. <strong>Expression</strong>: Defines how each element should be transformed before being added to the set</p>
<p>2. <strong>Item and Iterable</strong>: Specifies where the elements come from</p>
<p>3. <strong>Condition</strong> (optional): Filters which elements should be included</p>

<h3><u>Common Patterns and Use Cases</u></h3>
<table>
<tr><th>Pattern</th><th>Example</th><th>Use Case</th></tr>
<tr>
  <td>Basic Transformation</td>
  <td>{x * 2 for x in range(5)}</td>
  <td>Transform elements while ensuring uniqueness</td>
</tr>
<tr>
  <td>Filtering</td>
  <td>{x for x in range(10) if x % 2 == 0}</td>
  <td>Select specific elements with unique values</td>
</tr>
<tr>
  <td>Nested Loops</td>
  <td>{(x, y) for x in [1,2] for y in [3,4]}</td>
  <td>Generate unique combinations</td>
</tr>
<tr>
  <td>Complex Expressions</td>
  <td>{len(word) for word in ['hello', 'world']}</td>
  <td>Extract unique properties from objects</td>
</tr>
</table>`,

  codeExample: `def demonstrate_set_comprehensions():
    """
    Demonstrates various ways to use set comprehensions effectively
    """
    def extract_unique_properties(objects):
        """
        Extracts unique properties from a list of objects
        """
        # Get unique types
        unique_types = {type(obj).__name__ for obj in objects}
        print(f"Unique types: {unique_types}")
        
        # Get unique lengths (if applicable)
        unique_lengths = {len(obj) for obj in objects 
                        if hasattr(obj, '__len__')}
        print(f"Unique lengths: {unique_lengths}")
        
        return unique_types, unique_lengths
    
    def generate_unique_pairs(values):
        """
        Generates unique pairs without duplicates
        """
        # Create unique pairs where order doesn't matter
        pairs = {tuple(sorted((x, y))) 
                for x in values 
                for y in values 
                if x < y}  # Avoid duplicates like (1,2) and (2,1)
        print(f"Unique pairs: {pairs}")
        return pairs
    
    def transform_and_filter(numbers):
        """
        Demonstrates combining transformation and filtering
        """
        # Square even numbers and ensure uniqueness
        squared_evens = {x * x for x in numbers if x % 2 == 0}
        print(f"Squared even numbers: {squared_evens}")
        
        # Get unique digits from all numbers
        digits = {int(d) for n in numbers 
                 for d in str(abs(n))}
        print(f"Unique digits: {digits}")
        
        return squared_evens, digits
    
    # Demonstrate with various examples
    print("Basic set comprehension patterns:")
    
    # Mixed type objects
    objects = [1, "hello", [1, 2], {"a": 1}, (1, 2, 3)]
    types, lengths = extract_unique_properties(objects)
    
    # Generate unique pairs
    values = range(4)
    pairs = generate_unique_pairs(values)
    
    # Transform and filter numbers
    numbers = [1, 2, 3, 4, 14, 22, 23]
    squares, digits = transform_and_filter(numbers)
    
    # Practical example: Find unique word lengths in a sentence
    sentence = "The quick brown fox jumps over the lazy dog"
    word_lengths = {len(word) for word in sentence.split()}
    print(f"Unique word lengths in sentence: {word_lengths}")
    
    # Generate unique character pairs from string
    text = "hello"
    char_pairs = {(a, b) for i, a in enumerate(text) 
                 for b in text[i+1:]}
    print(f"Unique character pairs: {char_pairs}")

# Run the demonstration
demonstrate_set_comprehensions()`,

  exercises: [
    {
      prompt:
        'Write a function that generates all unique absolute differences between pairs of numbers in a list.',
      initialCode: `def unique_differences(numbers: list) -> set:
    # Write your solution here
    pass`,
      solution: `def unique_differences(numbers: list) -> set:
    # Use set comprehension to find all unique absolute differences
    return {abs(x - y) 
            for i, x in enumerate(numbers) 
            for y in numbers[i+1:]}`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Create a function that returns the set of all characters that appear in at least one word but not all words from a list of words.',
      initialCode: `def partial_chars(words: list) -> set:
    # Write your solution here
    pass`,
      solution: `def partial_chars(words: list) -> set:
    if not words:
        return set()
    
    # Get characters that appear in any word
    all_chars = {char for word in words 
                 for char in word}
    
    # Get characters that appear in all words
    common_chars = set.intersection(*[set(word) for word in words])
    
    # Return characters in some but not all words
    return all_chars - common_chars`,
      difficulty: Difficulty.Advanced,
    },
  ],

  quizzes: [
    {
      question:
        'What is the main difference between set comprehension and list comprehension syntax?',
      options: [
        'Set comprehensions use parentheses instead of square brackets',
        'Set comprehensions use curly braces instead of square brackets',
        'Set comprehensions cannot use conditions',
        'Set comprehensions cannot use nested loops',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Parentheses are used for generator expressions.',
        'Correct! Set comprehensions use curly braces {x for x in items} while list comprehensions use square brackets.',
        'Incorrect. Set comprehensions can use conditions just like list comprehensions.',
        'Incorrect. Set comprehensions support nested loops just like list comprehensions.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'What happens if a set comprehension generates duplicate values?',
      options: [
        'An error is raised',
        'The duplicates are preserved',
        'The duplicates are automatically removed',
        'The last duplicate value is kept',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Generating duplicates is allowed and handled automatically.',
        'Incorrect. Sets cannot contain duplicates by definition.',
        'Correct! Sets automatically eliminate duplicates during creation.',
        'Incorrect. No specific duplicate is "kept" - they are all deduplicated.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const commonMistakesData: LessonContent = {
  title: 'Common Set Interview Pitfalls',
  content: `<p>
When using sets in coding interviews, there are several common pitfalls that can trip up even experienced programmers. Understanding these potential issues can help you write more reliable and efficient code during interviews.
</p>

<h3><u>Common Mistakes and How to Avoid Them</u></h3>

<p><strong>1. Mutability Issues</strong></p>
<p>
One of the most common mistakes is trying to store mutable objects (like lists) in sets. Sets require hashable (immutable) elements. Instead of lists, use tuples for collections that need to be set elements.
</p>

<p><strong>2. Order Dependencies</strong></p>
<p>
Remember that sets are unordered. If your solution requires maintaining order, consider using a list or combining a set with a separate ordered structure.
</p>

<p><strong>3. Performance Misconceptions</strong></p>
<p>
While sets provide O(1) average case for membership testing, they aren't always the best choice. Consider the overhead of creating and maintaining a set for small collections.
</p>

<h3><u>Best Practices</u></h3>
<table>
<tr><th>Situation</th><th>Common Mistake</th><th>Better Approach</th></tr>
<tr>
  <td>Storing coordinates</td>
  <td>Using lists</td>
  <td>Use tuples</td>
</tr>
<tr>
  <td>Maintaining order</td>
  <td>Relying on set order</td>
  <td>Use list + set or OrderedDict</td>
</tr>
<tr>
  <td>Small lookups</td>
  <td>Always using sets</td>
  <td>Consider list for small n</td>
</tr>
</table>`,

  codeExample: `def demonstrate_common_pitfalls():
    """
    Demonstrates common pitfalls and their solutions when working with sets
    """
    def wrong_coordinates_set():
        """
        Demonstrates the pitfall of using mutable objects in sets
        """
        try:
            # This will raise an error
            coordinates = {[1, 2], [3, 4]}
            print("This won't be reached")
        except TypeError as e:
            print("Error using lists:", str(e))
        
        # Correct approach using tuples
        coordinates = {(1, 2), (3, 4)}
        print("Correct coordinates set:", coordinates)
    
    def wrong_order_assumption():
        """
        Demonstrates issues with assuming set order
        """
        # Wrong approach: assuming set maintains order
        numbers = {1, 2, 3, 4, 5}
        print("Set elements may appear in any order:", numbers)
        
        # Better approach: maintain order separately
        ordered_unique = list(dict.fromkeys([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]))
        print("Maintained order with uniqueness:", ordered_unique)
    
    def inefficient_set_usage():
        """
        Demonstrates when using sets might be inefficient
        """
        small_list = [1, 2, 3, 4]
        
        # Inefficient for small lists
        def check_membership_with_set(item):
            return item in set(small_list)  # Creates new set each time
        
        # More efficient for small lists
        def check_membership_direct(item):
            return item in small_list
        
        # Compare approaches
        import time
        
        start = time.time()
        for _ in range(1000):
            check_membership_with_set(3)
        set_time = time.time() - start
        
        start = time.time()
        for _ in range(1000):
            check_membership_direct(3)
        list_time = time.time() - start
        
        print(f"Set lookup time: {set_time:.6f}")
        print(f"List lookup time: {list_time:.6f}")
    
    def proper_duplicate_handling():
        """
        Demonstrates proper handling of duplicates with sets
        """
        # Problem: Find unique pairs that sum to target
        numbers = [1, 1, 2, 3, 4, 4]
        target = 5
        
        # Wrong approach: might miss pairs due to duplicates
        pairs_wrong = {(x, y) 
                      for i, x in enumerate(numbers)
                      for y in numbers[i+1:]
                      if x + y == target}
        
        # Correct approach: count frequencies first
        from collections import Counter
        counts = Counter(numbers)
        pairs_correct = {tuple(sorted((x, target-x)))
                        for x in counts
                        if (target-x in counts and 
                            (x != target-x or counts[x] > 1))}
        
        print(f"Pairs found (wrong): {pairs_wrong}")
        print(f"Pairs found (correct): {pairs_correct}")
    
    # Run demonstrations
    print("Demonstrating coordinate set pitfall:")
    wrong_coordinates_set()
    
    print("Demonstrating order assumption pitfall:")
    wrong_order_assumption()
    
    print("Demonstrating inefficient set usage:")
    inefficient_set_usage()
    
    print("Demonstrating proper duplicate handling:")
    proper_duplicate_handling()

# Run the demonstration
demonstrate_common_pitfalls()`,

  exercises: [
    {
      prompt:
        'Write a function that finds all unique triplets (three numbers) in a list that sum to a target value, handling duplicates correctly.',
      initialCode: `def find_triplets(numbers: list, target: int) -> set:
    # Write your solution here
    pass`,
      solution: `def find_triplets(numbers: list, target: int) -> set:
    from collections import Counter
    
    # Count frequencies for proper duplicate handling
    counts = Counter(numbers)
    result = set()
    
    # Consider each pair of numbers
    unique_nums = list(counts.keys())
    for i, x in enumerate(unique_nums):
        for y in unique_nums[i:]:
            z = target - x - y
            
            # Check if we can form a triplet
            # Need to handle cases where x, y, z might be the same
            if z in counts:
                # Check if we have enough occurrences of each number
                need_x = (x == y) + (x == z)
                need_y = (y == z)
                
                if (counts[x] > need_x and 
                    counts[y] > need_y and 
                    z >= y):  # Ensure ordered triplets
                    result.add(tuple(sorted([x, y, z])))
    
    return result`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt:
        'Create a function that maintains both uniqueness and insertion order for a sequence of elements.',
      initialCode: `def ordered_unique(sequence: list) -> list:
    # Write your solution here
    pass`,
      solution: `def ordered_unique(sequence: list) -> list:
    # Using a dictionary to maintain both order and uniqueness
    # More efficient than creating a set and more explicit than dict.fromkeys()
    seen = {}
    for item in sequence:
        seen[item] = None
    return list(seen.keys())
    
    # Alternative using dict.fromkeys() if elements are hashable
    # return list(dict.fromkeys(sequence))`,
      difficulty: Difficulty.Intermediate,
    },
  ],

  quizzes: [
    {
      question: 'What happens if you try to create a set of lists?',
      options: [
        'The lists are automatically converted to tuples',
        'A TypeError is raised',
        'The lists are stored as-is',
        'The set is created empty',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Python does not automatically convert mutable objects.',
        'Correct! Lists are unhashable (mutable) and cannot be added to sets.',
        'Incorrect. Sets can only contain hashable objects.',
        'Incorrect. An error is raised immediately.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const arrayIntersectionUnionData: LessonContent = {
  title: 'Array Intersection and Union Using Sets',
  content: `<p>
Array intersection and union operations are fundamental techniques for comparing and combining collections. While these operations can be performed using nested loops, sets provide a much more elegant and efficient solution. Let's explore how sets can transform these common array operations from potentially complex algorithms into simple, readable code.
</p>

<h3><u>Understanding Array Operations with Sets</u></h3>
<p>
When working with multiple arrays, we often need to answer questions like:
</p>

<p>• What elements appear in both arrays? (intersection)</p>
<p>• What elements appear in any of the arrays? (union)</p>
<p>• What elements are unique to one array? (difference)</p>
<p>• How many elements appear in at least K arrays? (K-way intersection)</p>

<p>
Think of these operations like comparing guest lists for different events. The intersection tells you who's attending all events, the union shows everyone invited to any event, and the difference reveals who's exclusive to each event.
</p>

<h3><u>Operation Performance Comparison</u></h3>
<table>
<tr><th>Operation</th><th>Array Approach</th><th>Set Approach</th></tr>
<tr>
  <td>Finding Common Elements</td>
  <td>O(n*m) with nested loops</td>
  <td>O(n + m) with set intersection</td>
</tr>
<tr>
  <td>Combining Elements</td>
  <td>O(n*m) for deduplication</td>
  <td>O(n + m) with set union</td>
</tr>
<tr>
  <td>Finding Unique Elements</td>
  <td>O(n*m) with filtering</td>
  <td>O(n + m) with set difference</td>
</tr>
</table>`,

  codeExample: `def demonstrate_array_operations():
    """
    Demonstrates efficient array operations using sets
    """
    def find_common_elements(arrays):
        """
        Finds elements common to all arrays efficiently
        Time: O(n * k) where k is number of arrays
        Space: O(n) where n is size of smallest array
        """
        if not arrays:
            return set()
            
        # Convert first array to set
        result = set(arrays[0])
        
        # Intersect with each subsequent array
        for arr in arrays[1:]:
            result &= set(arr)
            
            # Optimization: stop if empty intersection
            if not result:
                break
                
        return result
    
    def find_k_common_elements(arrays, k):
        """
        Finds elements that appear in at least k arrays
        Uses Counter to track frequency of appearance
        """
        from collections import Counter
        
        # Count how many arrays each element appears in
        element_counts = Counter()
        for arr in arrays:
            # Use set to count each element once per array
            element_counts.update(set(arr))
            
        # Return elements that appear in at least k arrays
        return {elem for elem, count in element_counts.items() 
               if count >= k}
    
    def find_unique_to_first(arrays):
        """
        Finds elements that only appear in the first array
        """
        if not arrays or len(arrays) < 2:
            return set()
            
        first_set = set(arrays[0])
        other_elements = set().union(*arrays[1:])
        
        return first_set - other_elements
    
    # Demonstrate with practical examples
    nums1 = [1, 2, 2, 3, 4, 5]
    nums2 = [2, 4, 4, 6, 7, 8]
    nums3 = [2, 3, 4, 8, 9, 10]
    
    arrays = [nums1, nums2, nums3]
    
    print("Array Operations Examples:")
    
    # Finding common elements
    common = find_common_elements(arrays)
    print(f"Elements common to all arrays: {common}")
    
    # Finding elements in at least 2 arrays
    k_common = find_k_common_elements(arrays, 2)
    print(f"Elements in at least 2 arrays: {k_common}")
    
    # Finding elements unique to first array
    unique_first = find_unique_to_first(arrays)
    print(f"Elements unique to first array: {unique_first}")
    
    # Efficient way to find duplicates across arrays
    duplicates = set(nums1) & set(nums2)
    print(f"Duplicates between first two arrays: {duplicates}")
    
    # Union of all arrays (unique elements)
    all_elements = set().union(*arrays)
    print(f"All unique elements: {all_elements}")

# Run the demonstration
demonstrate_array_operations()`,

  exercises: [
    {
      prompt:
        'Write a function that finds all elements that appear in exactly two out of three arrays.',
      initialCode: `def elements_in_two_arrays(arr1: list, arr2: list, arr3: list) -> set:
    # Write your solution here
    pass`,
      solution: `def elements_in_two_arrays(arr1: list, arr2: list, arr3: list) -> set:
    # Convert to sets for efficient operations
    set1 = set(arr1)
    set2 = set(arr2)
    set3 = set(arr3)
    
    # Find elements in each pair of arrays, excluding the third
    two_arrays = (
        (set1 & set2) - set3 |  # In 1 and 2 but not 3
        (set2 & set3) - set1 |  # In 2 and 3 but not 1
        (set1 & set3) - set2    # In 1 and 3 but not 2
    )
    
    return two_arrays`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Implement a function that finds the longest consecutive sequence of numbers present across any of the input arrays.',
      initialCode: `def longest_consecutive_sequence(arrays: list) -> int:
    # Write your solution here
    pass`,
      solution: `def longest_consecutive_sequence(arrays: list) -> int:
    if not arrays:
        return 0
    
    # Combine all numbers into a set for O(1) lookup
    numbers = set().union(*arrays)
    
    max_length = 0
    
    # For each number that could start a sequence
    for num in numbers:
        # Only check numbers that could be sequence starts
        if num - 1 not in numbers:
            current = num
            length = 0
            
            # Count consecutive numbers
            while current in numbers:
                length += 1
                current += 1
            
            max_length = max(max_length, length)
    
    return max_length`,
      difficulty: Difficulty.Advanced,
    },
  ],

  quizzes: [
    {
      question:
        'What is the time complexity of finding common elements between two arrays using sets?',
      options: [
        'O(n*m) where n and m are array lengths',
        'O(n+m) where n and m are array lengths',
        'O(1) constant time',
        'O(n log n) where n is the larger array length',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. O(n*m) would be the complexity using nested loops.',
        'Correct! Converting to sets and finding intersection is O(n+m).',
        'Incorrect. We must at least examine all elements once.',
        'Incorrect. Set operations do not require sorting.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'When finding elements common to k arrays, why convert each array to a set first?',
      options: [
        'To maintain element order',
        'To reduce memory usage',
        'To eliminate duplicates within each array',
        'To improve aesthetic appearance',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Sets do not maintain order.',
        'Incorrect. Sets might actually use more memory.',
        'Correct! Converting to sets ensures each element is counted only once per array.',
        'Incorrect. The conversion serves a functional purpose.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const stringProblemsData: LessonContent = {
  title: 'String Manipulation with Sets',
  content: `<p>
Sets provide powerful tools for solving string manipulation problems efficiently. By converting characters or substrings to sets, we can easily analyze, compare, and manipulate text in ways that would be much more complex using traditional string operations alone.
</p>

<h3><u>Common String Problems Solved with Sets</u></h3>
<p>
Let's explore how sets can help solve various string manipulation challenges:
</p>

<p><strong>1. Character Analysis</strong></p>
<p>
Sets excel at answering questions about characters in strings, such as:
- Finding unique characters
- Checking for character overlap between strings
- Identifying missing or extra characters
Think of it like analyzing ingredients in recipes – sets help us quickly identify common ingredients or unique ones in each recipe.
</p>

<p><strong>2. Substring Problems</strong></p>
<p>
Sets can help with substring-related problems by:
- Finding unique substrings
- Detecting repeated patterns
- Analyzing substring relationships
This is similar to finding repeated patterns in DNA sequences or identifying unique sections in a document.
</p>

<p><strong>3. String Comparison</strong></p>
<p>
Sets are particularly useful for string comparison tasks:
- Checking if strings are anagrams
- Finding common characters
- Identifying character differences
Just as a chemist might compare chemical compositions, sets help us compare the "composition" of strings.
</p>

<h3><u>Performance Benefits</u></h3>
<table>
<tr><th>Operation</th><th>String Approach</th><th>Set Approach</th></tr>
<tr>
  <td>Character Uniqueness</td>
  <td>O(n²) with loops</td>
  <td>O(n) with set</td>
</tr>
<tr>
  <td>Common Characters</td>
  <td>O(n*m) searching</td>
  <td>O(n+m) with set intersection</td>
</tr>
<tr>
  <td>Anagram Check</td>
  <td>O(n log n) sorting</td>
  <td>O(n) with character counts</td>
</tr>
</table>`,

  codeExample: `def demonstrate_string_operations():
    """
    Demonstrates common string manipulation problems solved using sets
    """
    def find_unique_characters(text):
        """
        Returns all unique characters in a string, preserving order of first appearance
        """
        # Use dict to maintain order while ensuring uniqueness
        return ''.join(dict.fromkeys(text))
    
    def are_anagrams(str1, str2):
        """
        Determines if two strings are anagrams using character counting
        Note: This is more efficient than using sorted strings
        """
        # Quick length check before detailed comparison
        if len(str1) != len(str2):
            return False
            
        # Count characters in both strings
        from collections import Counter
        return Counter(str1) == Counter(str2)
    
    def find_missing_characters(text, alphabet):
        """
        Finds characters from alphabet missing in the text
        """
        # Convert both to sets for efficient difference operation
        text_chars = set(text.lower())
        alphabet_chars = set(alphabet.lower())
        
        return alphabet_chars - text_chars
    
    def longest_unique_substring(text):
        """
        Finds the longest substring without repeating characters
        Uses sliding window with set
        """
        char_set = set()
        max_length = start = 0
        
        for end, char in enumerate(text):
            # Shrink window while we have duplicates
            while char in char_set:
                char_set.remove(text[start])
                start += 1
            
            char_set.add(char)
            max_length = max(max_length, end - start + 1)
        
        return max_length
    
    # Demonstrate with practical examples
    print("String Operations Examples:")
    
    # Example 1: Finding unique characters
    text = "mississippi"
    unique = find_unique_characters(text)
    print(f"Unique characters in '{text}': {unique}")
    
    # Example 2: Checking anagrams
    str1 = "listen"
    str2 = "silent"
    print(f"Are '{str1}' and '{str2}' anagrams? {are_anagrams(str1, str2)}")
    
    # Example 3: Finding missing characters
    pangram = "the quick brown fox"
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    missing = find_missing_characters(pangram, alphabet)
    print(f"Missing characters in '{pangram}': {missing}")
    
    # Example 4: Longest unique substring
    text = "abcabcbb"
    length = longest_unique_substring(text)
    print(f"Longest substring without repeats in '{text}': {length}")
    
    # Example 5: Common characters between strings
    word1 = "hello"
    word2 = "world"
    common = set(word1) & set(word2)
    print(f"Common characters between '{word1}' and '{word2}': {common}")

# Run the demonstration
demonstrate_string_operations()`,

  exercises: [
    {
      prompt:
        'Write a function that determines if one string can be transformed into another by adding, removing, or changing a single character.',
      initialCode: `def is_one_edit_distance(s1: str, s2: str) -> bool:
    # Write your solution here
    pass`,
      solution: `def is_one_edit_distance(s1: str, s2: str) -> bool:
    # If length difference > 1, can't be one edit away
    if abs(len(s1) - len(s2)) > 1:
        return False
    
    # Make s1 the shorter string
    if len(s1) > len(s2):
        s1, s2 = s2, s1
    
    # Position of first mismatch
    for i in range(len(s1)):
        if s1[i] != s2[i]:
            # If same length, must change character
            if len(s1) == len(s2):
                return s1[i+1:] == s2[i+1:]
            # If different length, must delete character from longer string
            return s1[i:] == s2[i+1:]
    
    # If we get here, either strings are identical or differ by last character
    return len(s1) != len(s2)`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt:
        'Create a function that finds all characters that appear the same number of times in a string.',
      initialCode: `def find_same_frequency_chars(text: str) -> set:
    # Write your solution here
    pass`,
      solution: `def find_same_frequency_chars(text: str) -> set:
    from collections import Counter
    
    # Count character frequencies
    char_counts = Counter(text)
    
    # Group characters by their frequency
    freq_groups = {}
    for char, count in char_counts.items():
        if count not in freq_groups:
            freq_groups[count] = set()
        freq_groups[count].add(char)
    
    # Find largest group of characters with same frequency
    if not freq_groups:
        return set()
        
    return max(freq_groups.values(), key=len)`,
      difficulty: Difficulty.Intermediate,
    },
  ],

  quizzes: [
    {
      question:
        'What is the most efficient way to check if two strings contain the same characters (are anagrams)?',
      options: [
        'Sort both strings and compare',
        'Use Counter objects and compare',
        'Convert both to sets and compare',
        'Compare character by character',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Sorting takes O(n log n) time.',
        'Correct! Counter comparison takes O(n) time and accounts for frequencies.',
        'Incorrect. Sets only check presence, not frequency.',
        'Incorrect. This would be O(n²) time.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Why use a set for finding the longest substring without repeating characters?',
      options: [
        'Sets are always faster than other data structures',
        'Sets automatically sort characters',
        'Sets provide O(1) lookup and prevent duplicates',
        'Sets preserve character order',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Sets are not always the fastest option.',
        'Incorrect. Sets do not sort elements.',
        'Correct! O(1) lookups and automatic duplicate prevention make sets perfect for this task.',
        'Incorrect. Sets do not preserve order.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const graphProblemsData: LessonContent = {
  title: 'Solving Graph Problems with Sets',
  content: `<p>
Graph problems appear frequently in software engineering interviews and real-world applications. Sets are particularly powerful tools for solving graph problems because they provide efficient solutions for tracking visited nodes, detecting cycles, and managing traversal states.
</p>

<p>
Think of a graph like a social network, where each person (node) has connections (edges) to other people. As we explore this network, we need to keep track of who we've already visited, find groups of connected friends, and detect circular relationships. Sets make these tasks both elegant and efficient.
</p>

<h3><u>Common Graph Problems and Set Solutions</u></h3>

<p><strong>1. Graph Traversal with Sets</strong></p>
<p>
When exploring a graph, we need to track which nodes we've already visited to avoid getting stuck in cycles. A set is perfect for this because:
- It provides O(1) lookup time to check if we've seen a node
- It automatically handles duplicates
- It's easy to add and remove elements as we explore
</p>

<p><strong>2. Cycle Detection</strong></p>
<p>
Finding cycles in a graph is like detecting circular relationships in our social network. We can use sets to:
- Track nodes in our current exploration path
- Identify back edges (edges that point to ancestors)
- Distinguish between tree edges and cross edges
</p>

<p><strong>3. Connected Components</strong></p>
<p>
Finding groups of connected nodes is similar to identifying separate social circles. Sets help us:
- Group related nodes together
- Track unexplored nodes
- Ensure we don't mix components
</p>

<h3><u>Performance Benefits of Using Sets</u></h3>
<table>
<tr><th>Operation</th><th>Without Sets</th><th>With Sets</th></tr>
<tr>
  <td>Check if visited</td>
  <td>O(n) with list</td>
  <td>O(1) with set</td>
</tr>
<tr>
  <td>Add/Remove from path</td>
  <td>O(n) with list</td>
  <td>O(1) with set</td>
</tr>
<tr>
  <td>Component membership</td>
  <td>O(n) search</td>
  <td>O(1) lookup</td>
</tr>
</table>`,

  codeExample: `from collections import defaultdict

class Graph:
    """
    A class to represent a graph using adjacency lists and leverage sets for efficient operations
    """
    def __init__(self, directed=False):
        # Using sets for adjacency lists provides O(1) lookup and prevents duplicate edges
        self.graph = defaultdict(set)
        self.directed = directed
    
    def add_edge(self, u, v):
        """Add an edge to the graph"""
        self.graph[u].add(v)
        if not self.directed:
            self.graph[v].add(u)
    
    def dfs_cycle_detection(self):
        """
        Detect cycles using DFS and sets for tracking visited and recursion stack
        Time: O(V + E), Space: O(V)
        """
        def dfs_cycle_util(node, visited, rec_stack):
            # Add node to both visited and recursion stack
            visited.add(node)
            rec_stack.add(node)
            
            # Explore neighbors
            for neighbor in self.graph[node]:
                if neighbor not in visited:
                    if dfs_cycle_util(neighbor, visited, rec_stack):
                        return True
                # If neighbor is in recursion stack, we found a cycle
                elif neighbor in rec_stack:
                    return True
            
            # Remove node from recursion stack as we backtrack
            rec_stack.remove(node)
            return False
        
        visited = set()
        rec_stack = set()
        
        # Check each unvisited node
        for node in self.graph:
            if node not in visited:
                if dfs_cycle_util(node, visited, rec_stack):
                    return True
        return False
    
    def find_connected_components(self):
        """
        Find all connected components using DFS and sets
        Time: O(V + E), Space: O(V)
        """
        def dfs_component(node, visited, current_component):
            visited.add(node)
            current_component.add(node)
            
            for neighbor in self.graph[node]:
                if neighbor not in visited:
                    dfs_component(neighbor, visited, current_component)
        
        visited = set()
        components = []
        
        # Process each unvisited node
        for node in self.graph:
            if node not in visited:
                current_component = set()
                dfs_component(node, visited, current_component)
                components.append(current_component)
        
        return components
    
    def shortest_path(self, start, end):
        """
        Find shortest path between two nodes using BFS and sets
        Time: O(V + E), Space: O(V)
        """
        if start not in self.graph or end not in self.graph:
            return None
        
        # Using set for visited nodes ensures O(1) lookup
        visited = set([start])
        queue = [(start, [start])]
        
        while queue:
            (node, path) = queue.pop(0)
            
            # Check neighbors
            for neighbor in self.graph[node]:
                if neighbor == end:
                    return path + [neighbor]
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append((neighbor, path + [neighbor]))
        
        return None

def demonstrate_graph_algorithms():
    """
    Demonstrates various graph algorithms using sets
    """
    # Create a graph with a cycle
    g_cycle = Graph(directed=True)
    g_cycle.add_edge(0, 1)
    g_cycle.add_edge(1, 2)
    g_cycle.add_edge(2, 3)
    g_cycle.add_edge(3, 1)  # Creates cycle 1->2->3->1
    
    print("Cycle Detection Example:")
    has_cycle = g_cycle.dfs_cycle_detection()
    print(f"Graph contains cycle: {has_cycle}")
    
    # Create a graph with multiple components
    g_components = Graph()
    # Component 1
    g_components.add_edge(0, 1)
    g_components.add_edge(1, 2)
    # Component 2
    g_components.add_edge(3, 4)
    # Component 3
    g_components.add_edge(5, 6)
    g_components.add_edge(6, 7)
    
    print("Connected Components Example:")
    components = g_components.find_connected_components()
    for i, component in enumerate(components):
        print(f"Component {i + 1}: {component}")
    
    # Demonstrate shortest path
    g_path = Graph()
    g_path.add_edge(0, 1)
    g_path.add_edge(1, 2)
    g_path.add_edge(2, 3)
    g_path.add_edge(0, 4)
    g_path.add_edge(4, 3)
    
    print("Shortest Path Example:")
    path = g_path.shortest_path(0, 3)
    print(f"Shortest path from 0 to 3: {path}")

# Run the demonstration
demonstrate_graph_algorithms()`,

  exercises: [
    {
      prompt:
        'Implement a function that checks if a graph is bipartite (can be colored with two colors such that no adjacent nodes have the same color) using sets.',
      initialCode: `def is_bipartite(graph: dict) -> bool:
    # Write your solution here
    pass`,
      solution: `def is_bipartite(graph: dict) -> bool:
    if not graph:
        return True
        
    # Sets for two colors
    color1 = set()
    color2 = set()
    
    def bfs_coloring(start):
        queue = [(start, 1)]  # (node, color) pairs
        color1.add(start)
        
        while queue:
            node, color = queue.pop(0)
            current_set = color1 if color == 1 else color2
            next_set = color2 if color == 1 else color1
            
            for neighbor in graph[node]:
                if neighbor in current_set:
                    return False
                if neighbor not in next_set:
                    next_set.add(neighbor)
                    queue.append((neighbor, -color))
        return True
    
    # Try coloring each unvisited component
    for node in graph:
        if node not in color1 and node not in color2:
            if not bfs_coloring(node):
                return False
    
    return True`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt:
        'Write a function that finds all nodes that can reach every other node in a directed graph.',
      initialCode: `def find_universal_nodes(graph: dict) -> set:
    # Write your solution here
    pass`,
      solution: `def find_universal_nodes(graph: dict) -> set:
    def dfs_reachable(start):
        visited = set()
        stack = [start]
        
        while stack:
            node = stack.pop()
            visited.add(node)
            
            for neighbor in graph[node]:
                if neighbor not in visited:
                    stack.append(neighbor)
        
        return visited
    
    universal_nodes = set()
    all_nodes = set(graph.keys())
    
    # Check each node's reachable set
    for node in graph:
        reachable = dfs_reachable(node)
        if reachable == all_nodes:
            universal_nodes.add(node)
    
    return universal_nodes`,
      difficulty: Difficulty.Intermediate,
    },
  ],

  quizzes: [
    {
      question:
        'Why is using a set better than a list for tracking visited nodes in graph traversal?',
      options: [
        'Sets use less memory than lists',
        'Sets maintain the order of visited nodes',
        'Sets provide O(1) lookup time for checking visited nodes',
        'Sets can store more nodes than lists',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Sets might actually use more memory due to their hash table structure.',
        'Incorrect. Sets do not maintain order; lists would be better for this.',
        'Correct! O(1) lookup time makes sets perfect for efficiently checking if a node has been visited.',
        'Incorrect. Both data structures can store the same number of elements.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'What is the benefit of using two sets instead of one set and a boolean flag for bipartite checking?',
      options: [
        'It uses less memory',
        'It makes the code shorter',
        'It provides a natural way to check for conflicts',
        'It improves time complexity',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Using two sets might use slightly more memory.',
        'Incorrect. The code might actually be longer with two sets.',
        'Correct! Two sets make it easy to verify that no adjacent nodes share the same color.',
        'Incorrect. The time complexity remains the same.',
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
  hashset: hashSetData,
  'set-complexity': setComplexityData,
  'set-vs-others': setsVsOtherDataStructuresData,
  // 'ordered-sets': orderedSetsData,
  'duplicate-detection': duplicateDetectionData,
  'unique-elements': uniqueElementsData,
  'set-conversion': setConversionData,
  multisets: multisetsData,
  'set-comprehension': setComprehensionData,
  'common-mistakes': commonMistakesData,
  'array-intersection': arrayIntersectionUnionData,
  'string-problems': stringProblemsData,
  'graph-problems': graphProblemsData,
};
export const setLessonsTab: LessonsTab = {
  curriculum: setCurriculum,
  lessons: setLessons,
};
