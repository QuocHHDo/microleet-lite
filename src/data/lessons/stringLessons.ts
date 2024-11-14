import { Difficulty } from '@/common/commonConcept';
import { Curriculum, LessonContent, LessonsTab } from '@/common/commonLesson';
const stringCurriculum: Curriculum = {
  title: 'String Curriculum',
  description:
    'A comprehensive guide to mastering string operations and string-based algorithms',
  sections: [
    {
      id: 1,
      title: 'String Fundamentals',
      topics: [
        {
          id: 'string-basics',
          title: 'String Basics',
          description: 'Understanding string properties and characteristics',
        },
        {
          id: 'string-creation',
          title: 'String Creation and Initialization',
          description: 'Different ways to create and initialize strings',
        },
        {
          id: 'string-immutability',
          title: 'String Immutability',
          description: 'Understanding string immutability and its implications',
        },
      ],
    },
    {
      id: 2,
      title: 'Basic String Operations',
      topics: [
        {
          id: 'string-access',
          title: 'Accessing Characters',
          description:
            'Methods for accessing individual characters and substrings',
        },
        {
          id: 'string-methods',
          title: 'Common String Methods',
          description: 'Essential string methods like split(), join(), strip()',
        },
        {
          id: 'string-concatenation',
          title: 'String Concatenation',
          description: 'Different ways to combine strings efficiently',
        },
        {
          id: 'string-comparison',
          title: 'String Comparison',
          description: 'Comparing strings and understanding string equality',
        },
      ],
    },
    {
      id: 3,
      title: 'String Manipulation',
      topics: [
        {
          id: 'string-slicing',
          title: 'String Slicing',
          description: 'Working with substrings and string slicing operations',
        },
        {
          id: 'case-manipulation',
          title: 'Case Manipulation',
          description: 'Converting between upper and lower case',
        },
        {
          id: 'string-formatting',
          title: 'String Formatting',
          description: 'Different methods for formatting strings',
        },
        {
          id: 'string-replacement',
          title: 'String Replacement',
          description: 'Finding and replacing substrings',
        },
      ],
    },
    {
      id: 4,
      title: 'String Searching',
      topics: [
        {
          id: 'basic-searching',
          title: 'Basic String Searching',
          description: 'Finding substrings and characters in strings',
        },
        {
          id: 'pattern-matching',
          title: 'Pattern Matching',
          description: 'Advanced pattern matching techniques',
        },
        {
          id: 'regex-basics',
          title: 'Regular Expressions Basics',
          description: 'Understanding and using basic regular expressions',
        },
      ],
    },
    {
      id: 5,
      title: 'Common String Algorithms',
      topics: [
        {
          id: 'string-reversal',
          title: 'String Reversal',
          description: 'Different approaches to reversing strings',
        },
        {
          id: 'palindrome-check',
          title: 'Palindrome Detection',
          description: 'Techniques for checking palindromes',
        },
        {
          id: 'anagram-check',
          title: 'Anagram Detection',
          description: 'Methods for identifying anagrams',
        },
      ],
    },
    {
      id: 6,
      title: 'Advanced String Algorithms',
      topics: [
        {
          id: 'kmp-algorithm',
          title: 'KMP Algorithm',
          description: 'Understanding and implementing KMP pattern matching',
        },
        {
          id: 'rabin-karp',
          title: 'Rabin-Karp Algorithm',
          description: 'Hash-based pattern matching algorithm',
        },
        {
          id: 'z-algorithm',
          title: 'Z Algorithm',
          description: 'Linear time pattern matching',
        },
        {
          id: 'suffix-arrays',
          title: 'Suffix Arrays',
          description: 'Understanding and using suffix arrays',
        },
      ],
    },
    {
      id: 7,
      title: 'String Pattern Problems',
      topics: [
        {
          id: 'longest-common',
          title: 'Longest Common Substring/Subsequence',
          description: 'Finding common patterns between strings',
        },
        {
          id: 'string-matching',
          title: 'String Matching Variations',
          description: 'Different types of string matching problems',
        },
        {
          id: 'edit-distance',
          title: 'Edit Distance',
          description: 'Computing string similarity and transformations',
        },
      ],
    },
    {
      id: 8,
      title: 'String Compression',
      topics: [
        {
          id: 'basic-compression',
          title: 'Basic String Compression',
          description: 'Simple string compression techniques',
        },
        {
          id: 'run-length',
          title: 'Run-Length Encoding',
          description: 'Implementing run-length encoding and decoding',
        },
      ],
    },
    {
      id: 9,
      title: 'String Windows and Substrings',
      topics: [
        {
          id: 'sliding-window',
          title: 'Sliding Window Technique',
          description: 'Using sliding window for string problems',
        },
        {
          id: 'substring-problems',
          title: 'Substring Problems',
          description: 'Common substring-based problem patterns',
        },
        {
          id: 'window-optimization',
          title: 'Window Optimization',
          description: 'Optimizing sliding window approaches',
        },
      ],
    },
    {
      id: 10,
      title: 'Advanced String Concepts',
      topics: [
        {
          id: 'string-builder',
          title: 'String Builder Pattern',
          description: 'Efficient string concatenation techniques',
        },
        {
          id: 'trie-implementation',
          title: 'Trie Data Structure',
          description: 'Using tries for string problems',
        },
        {
          id: 'suffix-tree',
          title: 'Suffix Trees',
          description: 'Advanced string matching using suffix trees',
        },
      ],
    },
    {
      id: 11,
      title: 'String in Space/Time Optimization',
      topics: [
        {
          id: 'in-place-operations',
          title: 'In-place String Operations',
          description: 'Performing string operations without extra space',
        },
        {
          id: 'memory-efficient',
          title: 'Memory-Efficient Techniques',
          description: 'Optimizing memory usage in string operations',
        },
      ],
    },
    {
      id: 12,
      title: 'Special String Types',
      topics: [
        {
          id: 'unicode-handling',
          title: 'Unicode String Handling',
          description: 'Working with Unicode and special characters',
        },
        {
          id: 'binary-strings',
          title: 'Binary Strings',
          description: 'Operating on binary strings and bit manipulation',
        },
      ],
    },
  ],
} as const;
const stringBasicsData: LessonContent = {
  title: 'String Basics',
  content: `<p>
Strings are sequences of characters, and they are one of the most commonly used data types in programming. 
In Python, strings are defined using single quotes (' '), double quotes (" "), or triple quotes (''' ''' or """ """) for multi-line strings. 
Understanding the basic properties and characteristics of strings is essential for effective string manipulation.
</p>

<ul>
<li><strong>Length:</strong> The length of a string can be determined using the <code>len()</code> function.</li>
<li><strong>Indexing:</strong> Characters in a string can be accessed using their index, starting from 0 for the first character.</li>
<li><strong>Slicing:</strong> Substrings can be extracted using slicing, which allows you to specify a range of indices.</li>
<li><strong>Concatenation:</strong> Strings can be concatenated using the <code>+</code> operator.</li>
<li><strong>Repetition:</strong> Strings can be repeated using the <code>*</code> operator.</li>
</ul>`,
  codeExample: `# Length of a string
text = "Hello, World!"
length = len(text)  # 13

# Indexing
first_char = text[0]  # 'H'
last_char = text[-1]  # '!'

# Slicing
substring = text[7:12]  # 'World'

# Concatenation
greeting = "Hello"
name = "Alice"
full_greeting = greeting + ", " + name  # 'Hello, Alice'

# Repetition
repeated_text = text * 3  # 'Hello, World!Hello, World!Hello, World!'`,
  exercises: [
    {
      prompt:
        'Create a string "Python is fun!" and find its length. Access the first and last characters of the string. Extract the substring "is fun" from the string.',
      initialCode: `# Write your solution here
text = 
length = 
first_char = 
last_char = 
substring = `,
      solution: `text = "Python is fun!"
length = len(text)
first_char = text[0]
last_char = text[-1]
substring = text[7:14]`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create two strings, "Hello" and "World", and concatenate them with a space in between. Repeat the resulting string 3 times.',
      initialCode: `# Write your solution here
str1 = 
str2 = 
concatenated = 
repeated = `,
      solution: `str1 = "Hello"
str2 = "World"
concatenated = str1 + " " + str2
repeated = concatenated * 3`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to access the first character of a string in Python?',
      options: [
        'string[1]',
        'string[0]',
        'string[-1]',
        'string.first()',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect because indexing starts at 0, so the first character is at index 0.',
        'This is correct. The first character is at index 0.',
        'This is incorrect because this accesses the last character.',
        'This is incorrect because there is no first() method in Python strings.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following is the correct way to find the length of a string in Python?',
      options: [
        'string.length()',
        'len(string)',
        'string.size()',
        'string.count()',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect because there is no length() method in Python strings.',
        'This is correct. The len() function returns the length of the string.',
        'This is incorrect because there is no size() method in Python strings.',
        'This is incorrect because count() returns the number of occurrences of a substring.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const stringCreationData: LessonContent = {
  title: 'String Creation and Initialization',
  content: `<p>
Strings in Python can be created and initialized in various ways, depending on the context and requirements. 
Understanding these methods allows you to choose the most appropriate way to create strings for your specific needs.
</p>

<ul>
<li><strong>Single Quotes:</strong> Strings can be created using single quotes (' ').</li>
<li><strong>Double Quotes:</strong> Strings can also be created using double quotes (" "). This is useful when the string itself contains single quotes.</li>
<li><strong>Triple Quotes:</strong> Triple quotes (''' ''' or """ """) are used for multi-line strings and strings that contain both single and double quotes.</li>
<li><strong>String Literals:</strong> Strings can be directly assigned to variables as literals.</li>
<li><strong>String Concatenation:</strong> Strings can be concatenated using the <code>+</code> operator.</li>
</ul>`,
  codeExample: `# Single quotes
single_quoted = 'Hello, World!'

# Double quotes
double_quoted = "Hello, World!"

# Triple quotes for multi-line strings
multi_line = '''This is a
multi-line
string.'''

# String literals
literal = "Python is fun!"

# String concatenation
greeting = "Hello"
name = "Alice"
full_greeting = greeting + ", " + name  # 'Hello, Alice'`,
  exercises: [
    {
      prompt:
        'Create a string using single quotes that contains the text "I\'m learning Python". Create a multi-line string using triple quotes that contains the text "Python is fun!\nLet\'s learn more!".',
      initialCode: `# Write your solution here
single_quoted = 
multi_line = `,
      solution: `single_quoted = 'I\'m learning Python'
multi_line = '''Python is fun!
Let's learn more!'''`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create two strings, "Hello" and "World", and concatenate them with a space in between. Create a multi-line string using triple quotes that contains the text "This is a\nmulti-line\nstring.".',
      initialCode: `# Write your solution here
str1 = 
str2 = 
concatenated = 
multi_line = `,
      solution: `str1 = "Hello"
str2 = "World"
concatenated = str1 + " " + str2
multi_line = '''This is a
multi-line
string.'''`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to create a multi-line string in Python?',
        options: [
          "Using single quotes (')",
          'Using double quotes (")',
          'Using triple quotes (\'\'\' or """)',
          'Using backslashes (\\)',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect because single quotes are not used for multi-line strings.',
        'This is incorrect because double quotes are not used for multi-line strings.',
        'This is correct. Triple quotes are used for multi-line strings.',
        'This is incorrect because backslashes are not used for multi-line strings.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following is the correct way to concatenate two strings in Python?',
      options: [
        'Using the + operator',
        'Using the * operator',
        'Using the & operator',
        'Using the .concat() method',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The + operator is used to concatenate strings.',
        'This is incorrect because the * operator is used for string repetition.',
        'This is incorrect because the & operator is not used for string concatenation in Python.',
        'This is incorrect because there is no .concat() method in Python strings.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const stringImmutabilityData: LessonContent = {
  title: 'String Immutability',
  content: `<p>
In Python, strings are immutable, meaning that once a string is created, its contents cannot be changed. 
This property has several implications for how strings are manipulated and used in programs.
</p>

<ul>
<li><strong>Immutability:</strong> Once a string is created, its contents cannot be changed. Any operation that appears to modify a string actually creates a new string.</li>
<li><strong>Memory Efficiency:</strong> Immutability allows strings to be shared and reused, which can lead to memory efficiency.</li>
<li><strong>Thread Safety:</strong> Immutability makes strings thread-safe, as they cannot be modified by multiple threads simultaneously.</li>
<li><strong>Hashability:</strong> Immutable objects, including strings, can be used as dictionary keys.</li>
</ul>`,
  codeExample: `# String immutability example
text = "Hello"
# Attempting to change the first character
# This will raise an error
# text[0] = 'J'  # TypeError: 'str' object does not support item assignment

# Instead, create a new string
new_text = "J" + text[1:]  # 'Jello'

# String concatenation creates a new string
text += ", World!"  # 'Hello, World!'

# String methods return new strings
upper_text = text.upper()  # 'HELLO, WORLD!'`,
  exercises: [
    {
      prompt:
        'Create a string "Hello, World!" and attempt to change the first character to "J". Instead, create a new string with the first character changed to "J".',
      initialCode: `# Write your solution here
text = 
# Attempt to change the first character (this will raise an error)
# text[0] = 'J'
new_text = `,
      solution: `text = "Hello, World!"
# Attempt to change the first character (this will raise an error)
# text[0] = 'J'
new_text = "J" + text[1:]`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Create a string "Python is fun!" and concatenate it with another string " Let\'s code!" to form a new string. Use the upper() method to convert the new string to uppercase.',
      initialCode: `# Write your solution here
text = 
new_text = 
upper_text = `,
      solution: `text = "Python is fun!"
new_text = text + " Let's code!"
upper_text = new_text.upper()`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following statements is true about string immutability in Python?',
      options: [
        'Strings can be modified after creation.',
        'Strings can be used as dictionary keys.',
        'Strings can be changed by modifying individual characters.',
        'Strings are mutable objects.',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect because strings cannot be modified after creation.',
        'This is correct. Immutable objects, including strings, can be used as dictionary keys.',
        'This is incorrect because individual characters in a string cannot be changed.',
        'This is incorrect because strings are immutable objects.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of the following operations creates a new string in Python?',
      options: [
        'Modifying a character in a string',
        'Concatenating two strings',
        'Accessing a character in a string',
        'Comparing two strings',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect because modifying a character in a string is not allowed.',
        'This is correct. Concatenating two strings creates a new string.',
        'This is incorrect because accessing a character does not create a new string.',
        'This is incorrect because comparing two strings does not create a new string.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const stringAccessData: LessonContent = {
  title: 'Accessing Characters',
  content: `<p>
Accessing individual characters and substrings in Python strings is a fundamental operation. 
Python provides several methods to access characters and substrings efficiently.
</p>

<ul>
<li><strong>Indexing:</strong> Characters in a string can be accessed using their index, starting from 0 for the first character.</li>
<li><strong>Negative Indexing:</strong> Negative indices can be used to access characters from the end of the string.</li>
<li><strong>Slicing:</strong> Substrings can be extracted using slicing, which allows you to specify a range of indices.</li>
<li><strong>String Methods:</strong> Python provides methods like <code>find()</code> and <code>index()</code> to locate substrings within a string.</li>
</ul>`,
  codeExample: `# Indexing
text = "Hello, World!"
first_char = text[0]  # 'H'
last_char = text[-1]  # '!'

# Negative Indexing
second_last_char = text[-2]  # 'd'

# Slicing
substring = text[7:12]  # 'World'

# Finding substrings
position = text.find("World")  # 7
index_position = text.index("World")  # 7`,
  exercises: [
    {
      prompt:
        'Create a string "Python is fun!" and access the first and last characters. Use slicing to extract the substring "is fun".',
      initialCode: `# Write your solution here
text = 
first_char = 
last_char = 
substring = `,
      solution: `text = "Python is fun!"
first_char = text[0]
last_char = text[-1]
substring = text[7:14]`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a string "Hello, World!" and use negative indexing to access the second last character. Use slicing to extract the substring "World".',
      initialCode: `# Write your solution here
text = 
second_last_char = 
substring = `,
      solution: `text = "Hello, World!"
second_last_char = text[-2]
substring = text[7:12]`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to access the last character of a string in Python?',
      options: [
        'string[0]',
        'string[1]',
        'string[-1]',
        'string.last()',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect because this accesses the first character.',
        'This is incorrect because this accesses the second character.',
        'This is correct. The last character is at index -1.',
        'This is incorrect because there is no last() method in Python strings.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following is the correct way to extract the substring "World" from the string "Hello, World!" in Python?',
      options: [
        'string[7:12]',
        'string[7:11]',
        'string[6:11]',
        'string[6:12]',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The substring "World" starts at index 7 and ends at index 12.',
        'This is incorrect because it ends at index 11, which excludes the last character.',
        'This is incorrect because it starts at index 6, which includes the comma.',
        'This is incorrect because it starts at index 6, which includes the comma.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const stringMethodsData: LessonContent = {
  title: 'Common String Methods',
  content: `<p>
Python provides a rich set of methods to manipulate strings. 
These methods are essential for tasks like splitting strings, joining strings, stripping whitespace, and more.
</p>

<ul>
<li><strong>split():</strong> Splits a string into a list of substrings based on a delimiter.</li>
<li><strong>join():</strong> Joins a list of strings into a single string using a specified delimiter.</li>
<li><strong>strip():</strong> Removes leading and trailing whitespace from a string.</li>
<li><strong>replace():</strong> Replaces occurrences of a substring with another substring.</li>
<li><strong>upper() and lower():</strong> Converts a string to uppercase or lowercase.</li>
</ul>`,
  codeExample: `# split()
text = "Python,Java,C++,JavaScript"
languages = text.split(",")  # ['Python', 'Java', 'C++', 'JavaScript']

# join()
words = ['Hello', 'World']
joined_text = " ".join(words)  # 'Hello World'

# strip()
whitespace_text = "   Hello, World!   "
stripped_text = whitespace_text.strip()  # 'Hello, World!'

# replace()
original_text = "Hello, World!"
replaced_text = original_text.replace("World", "Python")  # 'Hello, Python!'

# upper() and lower()
upper_text = original_text.upper()  # 'HELLO, WORLD!'
lower_text = original_text.lower()  # 'hello, world!'`,
  exercises: [
    {
      prompt:
        'Create a string "Python,Java,C++" and split it into a list of languages. Join the list back into a single string with each language separated by a space.',
      initialCode: `# Write your solution here
text = 
languages = 
joined_text = `,
      solution: `text = "Python,Java,C++"
languages = text.split(",")
joined_text = " ".join(languages)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a string "   Hello, World!   " and strip the leading and trailing whitespace. Replace the substring "World" with "Python".',
      initialCode: `# Write your solution here
text = 
stripped_text = 
replaced_text = `,
      solution: `text = "   Hello, World!   "
stripped_text = text.strip()
replaced_text = stripped_text.replace("World", "Python")`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following methods is used to split a string into a list of substrings based on a delimiter?',
      options: [
        'split()',
        'join()',
        'strip()',
        'replace()',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The split() method splits a string into a list of substrings.',
        'This is incorrect because join() is used to join a list of strings into a single string.',
        'This is incorrect because strip() removes leading and trailing whitespace.',
        'This is incorrect because replace() replaces occurrences of a substring with another substring.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following methods is used to remove leading and trailing whitespace from a string?',
      options: [
        'split()',
        'join()',
        'strip()',
        'replace()',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect because split() splits a string into a list of substrings.',
        'This is incorrect because join() joins a list of strings into a single string.',
        'This is correct. The strip() method removes leading and trailing whitespace.',
        'This is incorrect because replace() replaces occurrences of a substring with another substring.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const stringConcatenationData: LessonContent = {
  title: 'String Concatenation',
  content: `<p>
String concatenation is the process of combining two or more strings into a single string. 
Python provides several ways to concatenate strings efficiently.
</p>

<ul>
<li><strong>Using the + Operator:</strong> The most common way to concatenate strings.</li>
<li><strong>Using the join() Method:</strong> Efficient for concatenating a list of strings.</li>
<li><strong>Using f-strings (Python 3.6+):</strong> A modern and readable way to embed expressions inside string literals.</li>
<li><strong>Using the % Operator:</strong> An older method for string formatting.</li>
<li><strong>Using the format() Method:</strong> A flexible way to format strings.</li>
</ul>`,
  codeExample: `# Using the + operator
greeting = "Hello"
name = "Alice"
full_greeting = greeting + ", " + name  # 'Hello, Alice'

# Using the join() method
words = ['Hello', 'World']
joined_text = " ".join(words)  # 'Hello World'

# Using f-strings (Python 3.6+)
age = 30
f_string = f"My name is {name} and I am {age} years old."  # 'My name is Alice and I am 30 years old.'

# Using the % operator
formatted_text = "My name is %s and I am %d years old." % (name, age)  # 'My name is Alice and I am 30 years old.'

# Using the format() method
formatted_text = "My name is {} and I am {} years old.".format(name, age)  # 'My name is Alice and I am 30 years old.'`,
  exercises: [
    {
      prompt:
        'Create two strings, "Hello" and "World", and concatenate them with a space in between. Use the join() method to concatenate a list of words ["Hello", "World"] with a space separator.',
      initialCode: `# Write your solution here
str1 = 
str2 = 
concatenated = 
words = 
joined_text = `,
      solution: `str1 = "Hello"
str2 = "World"
concatenated = str1 + " " + str2
words = ["Hello", "World"]
joined_text = " ".join(words)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a string using f-strings that includes your name and age. Use the format() method to create a similar string.',
      initialCode: `# Write your solution here
name = 
age = 
f_string = 
formatted_text = `,
      solution: `name = "Alice"
age = 30
f_string = f"My name is {name} and I am {age} years old."
formatted_text = "My name is {} and I am {} years old.".format(name, age)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to concatenate two strings in Python?',
      options: [
        'Using the + operator',
        'Using the * operator',
        'Using the & operator',
        'Using the .concat() method',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The + operator is used to concatenate strings.',
        'This is incorrect because the * operator is used for string repetition.',
        'This is incorrect because the & operator is not used for string concatenation in Python.',
        'This is incorrect because there is no .concat() method in Python strings.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following methods is used to join a list of strings into a single string with a specified delimiter?',
      options: [
        'split()',
        'join()',
        'strip()',
        'replace()',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect because split() splits a string into a list of substrings.',
        'This is correct. The join() method joins a list of strings into a single string.',
        'This is incorrect because strip() removes leading and trailing whitespace.',
        'This is incorrect because replace() replaces occurrences of a substring with another substring.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const stringComparisonData: LessonContent = {
  title: 'String Comparison',
  content: `<p>
Comparing strings is a common operation in programming. 
Python provides several ways to compare strings, including equality checks, lexicographical comparisons, and case-insensitive comparisons.
</p>

<ul>
<li><strong>Equality (==) and Inequality (!=):</strong> Checks if two strings are equal or not.</li>
<li><strong>Lexicographical Comparison:</strong> Compares strings based on their Unicode values.</li>
<li><strong>Case-Insensitive Comparison:</strong> Compares strings ignoring case differences.</li>
<li><strong>Using the <code>in</code> Operator:</strong> Checks if a substring is present in a string.</li>
<li><strong>Using the <code>startswith()</code> and <code>endswith()</code> Methods:</strong> Checks if a string starts or ends with a specified substring.</li>
</ul>`,
  codeExample: `# Equality and Inequality
str1 = "Hello"
str2 = "World"
equal = str1 == str2  # False
not_equal = str1 != str2  # True

# Lexicographical Comparison
less_than = str1 < str2  # True
greater_than = str1 > str2  # False

# Case-Insensitive Comparison
lower_str1 = str1.lower()
lower_str2 = str2.lower()
case_insensitive_equal = lower_str1 == lower_str2  # False

# Using the in operator
substring = "Hell"
contains = substring in str1  # True

# Using startswith() and endswith()
starts_with = str1.startswith("He")  # True
ends_with = str1.endswith("lo")  # True`,
  exercises: [
    {
      prompt:
        'Create two strings, "Hello" and "World", and check if they are equal. Check if the first string contains the substring "Hell".',
      initialCode: `# Write your solution here
str1 = 
str2 = 
equal = 
contains = `,
      solution: `str1 = "Hello"
str2 = "World"
equal = str1 == str2
contains = "Hell" in str1`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a string "Hello, World!" and check if it starts with "Hello" and ends with "World!". Use case-insensitive comparison to check if it contains "world".',
      initialCode: `# Write your solution here
text = 
starts_with = 
ends_with = 
contains = `,
      solution: `text = "Hello, World!"
starts_with = text.startswith("Hello")
ends_with = text.endswith("World!")
contains = "world" in text.lower()`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following operators is used to check if two strings are equal in Python?',
      options: [
        '==',
        '!=',
        '>',
        '<',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The == operator checks if two strings are equal.',
        'This is incorrect because != checks if two strings are not equal.',
        'This is incorrect because > checks if one string is lexicographically greater than another.',
        'This is incorrect because < checks if one string is lexicographically less than another.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following methods is used to check if a string starts with a specified substring in Python?',
      options: [
        'startswith()',
        'endswith()',
        'contains()',
        'in',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The startswith() method checks if a string starts with a specified substring.',
        'This is incorrect because endswith() checks if a string ends with a specified substring.',
        'This is incorrect because there is no contains() method in Python strings.',
        'This is incorrect because the in operator checks if a substring is present in a string.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};
const stringSlicingData: LessonContent = {
  title: 'String Slicing',
  content: `<p>
String slicing is a powerful technique in Python that allows you to extract substrings from a string by specifying a range of indices. 
Understanding how to use slicing effectively is crucial for manipulating strings.
</p>

<ul>
<li><strong>Basic Slicing:</strong> Extracts a substring by specifying the start and end indices.</li>
<li><strong>Slicing with Step:</strong> Allows you to skip characters by specifying a step value.</li>
<li><strong>Negative Indices:</strong> Use negative indices to slice from the end of the string.</li>
<li><strong>Slicing with Default Values:</strong> Omitting the start, end, or step values uses default values.</li>
</ul>`,
  codeExample: `# Basic Slicing
text = "Hello, World!"
substring = text[7:12]  # 'World'

# Slicing with Step
every_second = text[::2]  # 'Hlo ol!'

# Negative Indices
last_five = text[-5:]  # 'World!'

# Slicing with Default Values
whole_string = text[:]  # 'Hello, World!'`,
  exercises: [
    {
      prompt:
        'Create a string "Python is fun!" and use slicing to extract the substring "is fun". Use slicing with a step to extract every second character from the string.',
      initialCode: `# Write your solution here
text = 
substring = 
every_second = `,
      solution: `text = "Python is fun!"
substring = text[7:14]
every_second = text[::2]`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a string "Hello, World!" and use slicing to extract the last five characters. Use slicing with a negative step to reverse the string.',
      initialCode: `# Write your solution here
text = 
last_five = 
reversed_text = `,
      solution: `text = "Hello, World!"
last_five = text[-5:]
reversed_text = text[::-1]`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to extract the substring "World" from the string "Hello, World!" in Python?',
      options: [
        'text[7:12]',
        'text[7:11]',
        'text[6:11]',
        'text[6:12]',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The substring "World" starts at index 7 and ends at index 12.',
        'This is incorrect because it ends at index 11, which excludes the last character.',
        'This is incorrect because it starts at index 6, which includes the comma.',
        'This is incorrect because it starts at index 6, which includes the comma.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following is the correct way to reverse a string in Python?',
      options: [
        'text[::-1]',
        'text[::1]',
        'text[::0]',
        'text[::2]',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The slicing with a step of -1 reverses the string.',
        'This is incorrect because it does not reverse the string.',
        'This is incorrect because a step of 0 is not valid.',
        'This is incorrect because it skips every second character.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const caseManipulationData: LessonContent = {
  title: 'Case Manipulation',
  content: `<p>
Case manipulation is an essential part of string processing in Python. 
Python provides methods to convert strings to uppercase, lowercase, and capitalize the first letter of each word.
</p>

<ul>
<li><strong>upper():</strong> Converts all characters in a string to uppercase.</li>
<li><strong>lower():</strong> Converts all characters in a string to lowercase.</li>
<li><strong>capitalize():</strong> Converts the first character of a string to uppercase and the rest to lowercase.</li>
<li><strong>title():</strong> Converts the first character of each word in a string to uppercase and the rest to lowercase.</li>
<li><strong>swapcase():</strong> Swaps the case of each character in a string.</li>
</ul>`,
  codeExample: `# upper()
text = "hello, world!"
upper_text = text.upper()  # 'HELLO, WORLD!'

# lower()
lower_text = upper_text.lower()  # 'hello, world!'

# capitalize()
capitalized_text = text.capitalize()  # 'Hello, world!'

# title()
title_text = text.title()  # 'Hello, World!'

# swapcase()
swapped_text = text.swapcase()  # 'HELLO, WORLD!'`,
  exercises: [
    {
      prompt:
        'Create a string "hello, world!" and convert it to uppercase. Convert the uppercase string back to lowercase. Capitalize the first letter of the string.',
      initialCode: `# Write your solution here
text = 
upper_text = 
lower_text = 
capitalized_text = `,
      solution: `text = "hello, world!"
upper_text = text.upper()
lower_text = upper_text.lower()
capitalized_text = text.capitalize()`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a string "Python is fun!" and convert it to title case. Swap the case of each character in the string.',
      initialCode: `# Write your solution here
text = 
title_text = 
swapped_text = `,
      solution: `text = "Python is fun!"
title_text = text.title()
swapped_text = text.swapcase()`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following methods converts all characters in a string to uppercase in Python?',
      options: [
        'upper()',
        'lower()',
        'capitalize()',
        'title()',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The upper() method converts all characters to uppercase.',
        'This is incorrect because lower() converts all characters to lowercase.',
        'This is incorrect because capitalize() converts the first character to uppercase and the rest to lowercase.',
        'This is incorrect because title() converts the first character of each word to uppercase and the rest to lowercase.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following methods swaps the case of each character in a string in Python?',
      options: [
        'upper()',
        'lower()',
        'capitalize()',
        'swapcase()',
      ],
      correctAnswer: 3,
      explanations: [
        'This is incorrect because upper() converts all characters to uppercase.',
        'This is incorrect because lower() converts all characters to lowercase.',
        'This is incorrect because capitalize() converts the first character to uppercase and the rest to lowercase.',
        'This is correct. The swapcase() method swaps the case of each character.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const stringFormattingData: LessonContent = {
  title: 'String Formatting',
  content: `<p>
String formatting is a powerful feature in Python that allows you to embed expressions inside string literals. 
Python provides several methods for formatting strings, including f-strings, the % operator, and the format() method.
</p>

<ul>
<li><strong>f-strings (Python 3.6+):</strong> A modern and readable way to embed expressions inside string literals.</li>
<li><strong>Using the % Operator:</strong> An older method for string formatting.</li>
<li><strong>Using the format() Method:</strong> A flexible way to format strings.</li>
<li><strong>Template Strings:</strong> A simpler and safer way to format strings, especially for user input.</li>
</ul>`,
  codeExample: `# f-strings (Python 3.6+)
name = "Alice"
age = 30
f_string = f"My name is {name} and I am {age} years old."  # 'My name is Alice and I am 30 years old.'

# Using the % operator
formatted_text = "My name is %s and I am %d years old." % (name, age)  # 'My name is Alice and I am 30 years old.'

# Using the format() method
formatted_text = "My name is {} and I am {} years old.".format(name, age)  # 'My name is Alice and I am 30 years old.'

# Template Strings
from string import Template
template = Template("My name is $name and I am $age years old.")
template_text = template.substitute(name=name, age=age)  # 'My name is Alice and I am 30 years old.'`,
  exercises: [
    {
      prompt:
        'Create a string using f-strings that includes your name and age. Use the format() method to create a similar string.',
      initialCode: `# Write your solution here
name = 
age = 
f_string = 
formatted_text = `,
      solution: `name = "Alice"
age = 30
f_string = f"My name is {name} and I am {age} years old."
formatted_text = "My name is {} and I am {} years old.".format(name, age)`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Create a string using the % operator that includes your name and age. Use Template Strings to create a similar string.',
      initialCode: `# Write your solution here
name = 
age = 
formatted_text = 
from string import Template
template = 
template_text = `,
      solution: `name = "Alice"
age = 30
formatted_text = "My name is %s and I am %d years old." % (name, age)
from string import Template
template = Template("My name is $name and I am $age years old.")
template_text = template.substitute(name=name, age=age)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to format a string using f-strings in Python?',
      options: [
        'f"My name is {name} and I am {age} years old."',
        '"My name is %s and I am %d years old." % (name, age)',
        '"My name is {} and I am {} years old.".format(name, age)',
        'Template("My name is $name and I am $age years old.").substitute(name=name, age=age)',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. f-strings are used to embed expressions inside string literals.',
        'This is incorrect because this uses the % operator for formatting.',
        'This is incorrect because this uses the format() method for formatting.',
        'This is incorrect because this uses Template Strings for formatting.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of the following methods is used to format a string using the format() method in Python?',
      options: [
        'f"My name is {name} and I am {age} years old."',
        '"My name is %s and I am %d years old." % (name, age)',
        '"My name is {} and I am {} years old.".format(name, age)',
        'Template("My name is $name and I am $age years old.").substitute(name=name, age=age)',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect because this uses f-strings for formatting.',
        'This is incorrect because this uses the % operator for formatting.',
        'This is correct. The format() method is used to format strings.',
        'This is incorrect because this uses Template Strings for formatting.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const stringReplacementData: LessonContent = {
  title: 'String Replacement',
  content: `<p>
String replacement is a common operation in text processing. 
Python provides several methods to find and replace substrings within a string.
</p>

<ul>
<li><strong>replace():</strong> Replaces occurrences of a substring with another substring.</li>
<li><strong>sub() from the re module:</strong> Provides more advanced pattern-based replacement using regular expressions.</li>
<li><strong>translate():</strong> Replaces multiple characters based on a translation table.</li>
<li><strong>Using f-strings:</strong> Allows dynamic replacement of placeholders with expressions.</li>
</ul>`,
  codeExample: `# replace()
text = "Hello, World!"
replaced_text = text.replace("World", "Python")  # 'Hello, Python!'

# sub() from the re module
import re
pattern = r"World"
new_text = re.sub(pattern, "Python", text)  # 'Hello, Python!'

# translate()
translation_table = str.maketrans("W", "P")
translated_text = text.translate(translation_table)  # 'Hello, Porld!'

# Using f-strings
name = "Alice"
age = 30
f_string = f"My name is {name} and I am {age} years old."  # 'My name is Alice and I am 30 years old.'`,
  exercises: [
    {
      prompt:
        'Create a string "Hello, World!" and replace the substring "World" with "Python". Use the re module to replace the substring "World" with "Python".',
      initialCode: `# Write your solution here
text = 
replaced_text = 
import re
pattern = 
new_text = `,
      solution: `text = "Hello, World!"
replaced_text = text.replace("World", "Python")
import re
pattern = r"World"
new_text = re.sub(pattern, "Python", text)`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Create a string "Hello, World!" and use the translate() method to replace the character "W" with "P". Use f-strings to create a string that includes your name and age.',
      initialCode: `# Write your solution here
text = 
translation_table = 
translated_text = 
name = 
age = 
f_string = `,
      solution: `text = "Hello, World!"
translation_table = str.maketrans("W", "P")
translated_text = text.translate(translation_table)
name = "Alice"
age = 30
f_string = f"My name is {name} and I am {age} years old."`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following methods is used to replace occurrences of a substring with another substring in Python?',
      options: [
        'replace()',
        'sub()',
        'translate()',
        'format()',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The replace() method replaces occurrences of a substring with another substring.',
        'This is incorrect because sub() is part of the re module and is used for pattern-based replacement.',
        'This is incorrect because translate() replaces multiple characters based on a translation table.',
        'This is incorrect because format() is used for string formatting.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of the following methods is used for pattern-based replacement in Python?',
      options: [
        'replace()',
        'sub()',
        'translate()',
        'format()',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect because replace() replaces occurrences of a substring with another substring.',
        'This is correct. The sub() method from the re module is used for pattern-based replacement.',
        'This is incorrect because translate() replaces multiple characters based on a translation table.',
        'This is incorrect because format() is used for string formatting.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};
const basicSearchingData: LessonContent = {
  title: 'Basic String Searching',
  content: `<p>
Basic string searching involves finding substrings and characters within a string. 
Python provides several methods to perform basic searches efficiently.
</p>

<ul>
<li><strong>find():</strong> Returns the lowest index of the substring if it is found in the string. If not, it returns -1.</li>
<li><strong>rfind():</strong> Returns the highest index of the substring if it is found in the string. If not, it returns -1.</li>
<li><strong>index():</strong> Similar to find(), but raises a ValueError if the substring is not found.</li>
<li><strong>rindex():</strong> Similar to rfind(), but raises a ValueError if the substring is not found.</li>
<li><strong>count():</strong> Returns the number of non-overlapping occurrences of a substring in the string.</li>
<li><strong>in operator:</strong> Checks if a substring is present in the string.</li>
</ul>`,
  codeExample: `# find()
text = "Hello, World!"
position = text.find("World")  # 7

# rfind()
position = text.rfind("o")  # 8

# index()
position = text.index("World")  # 7

# rindex()
position = text.rindex("o")  # 8

# count()
count = text.count("o")  # 2

# in operator
contains = "World" in text  # True`,
  exercises: [
    {
      prompt:
        'Create a string "Hello, World!" and find the position of the substring "World". Use the rfind() method to find the last occurrence of the character "o".',
      initialCode: `# Write your solution here
text = 
position = 
last_position = `,
      solution: `text = "Hello, World!"
position = text.find("World")
last_position = text.rfind("o")`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a string "Python is fun!" and count the number of occurrences of the character "n". Use the in operator to check if the substring "fun" is present in the string.',
      initialCode: `# Write your solution here
text = 
count = 
contains = `,
      solution: `text = "Python is fun!"
count = text.count("n")
contains = "fun" in text`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following methods returns the lowest index of the substring if it is found in the string?',
      options: [
        'find()',
        'rfind()',
        'index()',
        'rindex()',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The find() method returns the lowest index of the substring.',
        'This is incorrect because rfind() returns the highest index of the substring.',
        'This is incorrect because index() is similar to find() but raises an error if the substring is not found.',
        'This is incorrect because rindex() is similar to rfind() but raises an error if the substring is not found.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following operators checks if a substring is present in the string?',
      options: [
        'find()',
        'rfind()',
        'in',
        'index()',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect because find() returns the index of the substring.',
        'This is incorrect because rfind() returns the highest index of the substring.',
        'This is correct. The in operator checks if a substring is present in the string.',
        'This is incorrect because index() returns the index of the substring and raises an error if not found.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const patternMatchingData: LessonContent = {
  title: 'Pattern Matching',
  content: `<p>
Pattern matching involves finding substrings that match a specific pattern. 
Python provides several advanced techniques for pattern matching, including regular expressions.
</p>

<ul>
<li><strong>Using the re module:</strong> The re module provides support for regular expressions, allowing for complex pattern matching.</li>
<li><strong>match():</strong> Determines if the regular expression matches at the beginning of the string.</li>
<li><strong>search():</strong> Scans through the string looking for the first location where the regular expression pattern produces a match.</li>
<li><strong>findall():</strong> Returns all non-overlapping matches of the pattern in the string as a list of strings.</li>
<li><strong>finditer():</strong> Returns an iterator yielding match objects over all non-overlapping matches.</li>
</ul>`,
  codeExample: `# Using the re module
import re

# match()
text = "Hello, World!"
match_obj = re.match(r"Hello", text)  # <re.Match object; span=(0, 5), match='Hello'>

# search()
search_obj = re.search(r"World", text)  # <re.Match object; span=(7, 12), match='World'>

# findall()
matches = re.findall(r"o", text)  # ['o', 'o']

# finditer()
iter_obj = re.finditer(r"o", text)  # <callable_iterator object at 0x...>`,
  exercises: [
    {
      prompt:
        'Create a string "Hello, World!" and use the re module to check if it starts with "Hello". Use the search() method to find the first occurrence of the substring "World".',
      initialCode: `# Write your solution here
import re
text = 
match_obj = 
search_obj = `,
      solution: `import re
text = "Hello, World!"
match_obj = re.match(r"Hello", text)
search_obj = re.search(r"World", text)`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Create a string "Python is fun!" and use the re module to find all occurrences of the character "n". Use the finditer() method to find all occurrences of the character "n".',
      initialCode: `# Write your solution here
import re
text = 
matches = 
iter_obj = `,
      solution: `import re
text = "Python is fun!"
matches = re.findall(r"n", text)
iter_obj = re.finditer(r"n", text)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following methods checks if the regular expression matches at the beginning of the string?',
      options: [
        'match()',
        'search()',
        'findall()',
        'finditer()',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The match() method checks if the regular expression matches at the beginning of the string.',
        'This is incorrect because search() scans through the string looking for a match.',
        'This is incorrect because findall() returns all non-overlapping matches.',
        'This is incorrect because finditer() returns an iterator over all matches.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of the following methods returns all non-overlapping matches of the pattern in the string as a list of strings?',
      options: [
        'match()',
        'search()',
        'findall()',
        'finditer()',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect because match() checks if the regular expression matches at the beginning of the string.',
        'This is incorrect because search() scans through the string looking for a match.',
        'This is correct. The findall() method returns all non-overlapping matches as a list of strings.',
        'This is incorrect because finditer() returns an iterator over all matches.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const regexBasicsData: LessonContent = {
  title: 'Regular Expressions Basics',
  content: `<p>
Regular expressions (regex) are a powerful tool for pattern matching and text processing. 
Python's re module provides support for regular expressions, allowing you to search, match, and manipulate text based on patterns.
</p>

<ul>
<li><strong>Basic Patterns:</strong> Simple patterns like exact matches, character classes, and quantifiers.</li>
<li><strong>Special Characters:</strong> Characters with special meanings in regex, such as ., ^, $, *, +, ?, {, }, [, ], \, |, (, and ).</li>
<li><strong>Character Classes:</strong> Sets of characters that can match any one of the characters in the set.</li>
<li><strong>Quantifiers:</strong> Specify how many instances of a character, group, or character class must be present in the input for a match to be found.</li>
<li><strong>Groups and Capturing:</strong> Groups allow you to treat multiple characters as a single unit.</li>
</ul>`,
  codeExample: `# Basic Patterns
import re

# Exact match
match_obj = re.match(r"Hello", "Hello, World!")  # <re.Match object; span=(0, 5), match='Hello'>

# Character class
matches = re.findall(r"[aeiou]", "Hello, World!")  # ['e', 'o', 'o']

# Quantifiers
matches = re.findall(r"l+", "Hello, World!")  # ['ll', 'l']

# Groups and Capturing
match_obj = re.match(r"(\w+), (\w+)", "Hello, World!")  # <re.Match object; span=(0, 13), match='Hello, World'>`,
  exercises: [
    {
      prompt:
        'Create a string "Hello, World!" and use the re module to find all vowels in the string. Use a character class to match any vowel.',
      initialCode: `# Write your solution here
import re
text = 
matches = `,
      solution: `import re
text = "Hello, World!"
matches = re.findall(r"[aeiou]", text)`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Create a string "Python is fun!" and use the re module to find all occurrences of the letter "n" followed by one or more "n" characters. Use a quantifier to match one or more "n" characters.',
      initialCode: `# Write your solution here
import re
text = 
matches = `,
      solution: `import re
text = "Python is fun!"
matches = re.findall(r"n+", text)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following characters represents a character class in regular expressions?',
      options: [
        '.',
        '^',
        '[ ]',
        '*',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect because . represents any character except a newline.',
        'This is incorrect because ^ represents the start of a string.',
        'This is correct. [ ] represents a character class.',
        'This is incorrect because * represents zero or more occurrences of the preceding element.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of the following quantifiers matches one or more occurrences of the preceding element in regular expressions?',
      options: [
        '*',
        '+',
        '?',
        '{ }',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect because * matches zero or more occurrences.',
        'This is correct. + matches one or more occurrences.',
        'This is incorrect because ? matches zero or one occurrence.',
        'This is incorrect because { } specifies a specific number of occurrences.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const stringReversalData: LessonContent = {
  title: 'String Reversal',
  content: `<p>
String reversal is a common algorithmic task that involves reversing the order of characters in a string. 
Python provides several approaches to achieve this, including slicing, loops, and built-in methods.
</p>

<ul>
<li><strong>Using Slicing:</strong> The most concise and efficient way to reverse a string in Python.</li>
<li><strong>Using a Loop:</strong> A more manual approach using a loop to reverse the string.</li>
<li><strong>Using the reversed() Function:</strong> Reverses the string using the built-in reversed() function.</li>
<li><strong>Using the join() Method:</strong> Joins the reversed characters into a new string.</li>
</ul>`,
  codeExample: `# Using Slicing
text = "Hello, World!"
reversed_text = text[::-1]  # '!dlroW ,olleH'

# Using a Loop
reversed_text = ""
for char in text:
    reversed_text = char + reversed_text  # '!dlroW ,olleH'

# Using the reversed() Function
reversed_text = ''.join(reversed(text))  # '!dlroW ,olleH'

# Using the join() Method
reversed_text = ''.join(char for char in reversed(text))  # '!dlroW ,olleH'`,
  exercises: [
    {
      prompt:
        'Create a string "Python is fun!" and reverse it using slicing. Reverse the same string using a loop.',
      initialCode: `# Write your solution here
text = 
reversed_text_slicing = 
reversed_text_loop = ""
for char in text:
    reversed_text_loop = `,
      solution: `text = "Python is fun!"
reversed_text_slicing = text[::-1]
reversed_text_loop = ""
for char in text:
    reversed_text_loop = char + reversed_text_loop`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a string "Hello, World!" and reverse it using the reversed() function. Reverse the same string using the join() method.',
      initialCode: `# Write your solution here
text = 
reversed_text_reversed = 
reversed_text_join = `,
      solution: `text = "Hello, World!"
reversed_text_reversed = ''.join(reversed(text))
reversed_text_join = ''.join(char for char in reversed(text))`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the most efficient way to reverse a string in Python?',
      options: [
        'Using Slicing',
        'Using a Loop',
        'Using the reversed() Function',
        'Using the join() Method',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. Using slicing is the most efficient way to reverse a string in Python.',
        'This is incorrect because using a loop is less efficient than slicing.',
        'This is incorrect because using the reversed() function is less efficient than slicing.',
        'This is incorrect because using the join() method is less efficient than slicing.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which of the following methods reverses a string by iterating over its characters?',
      options: [
        'Using Slicing',
        'Using a Loop',
        'Using the reversed() Function',
        'Using the join() Method',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect because slicing does not iterate over characters.',
        'This is correct. Using a loop iterates over each character in the string.',
        'This is incorrect because the reversed() function does not iterate over characters directly.',
        'This is incorrect because the join() method does not iterate over characters directly.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const palindromeCheckData: LessonContent = {
  title: 'Palindrome Detection',
  content: `<p>
Palindrome detection is a common algorithmic task that involves checking whether a string reads the same forward and backward. 
Python provides several approaches to achieve this, including using slicing, loops, and built-in methods.
</p>

<ul>
<li><strong>Using Slicing:</strong> The most concise and efficient way to check if a string is a palindrome.</li>
<li><strong>Using a Loop:</strong> A more manual approach using a loop to compare characters from both ends of the string.</li>
<li><strong>Using the reversed() Function:</strong> Reverses the string and compares it to the original string.</li>
<li><strong>Using the join() Method:</strong> Joins the reversed characters into a new string and compares it to the original string.</li>
</ul>`,
  codeExample: `# Using Slicing
def is_palindrome(text):
    return text == text[::-1]

# Using a Loop
def is_palindrome(text):
    for i in range(len(text) // 2):
        if text[i] != text[-(i + 1)]:
            return False
    return True

# Using the reversed() Function
def is_palindrome(text):
    return text == ''.join(reversed(text))

# Using the join() Method
def is_palindrome(text):
    return text == ''.join(char for char in reversed(text))`,
  exercises: [
    {
      prompt:
        'Create a function to check if a string is a palindrome using slicing. Create another function to check if a string is a palindrome using a loop.',
      initialCode: `# Write your solution here
def is_palindrome_slicing(text):
    return 

def is_palindrome_loop(text):
    for i in range(len(text) // 2):
        if `,
      solution: `def is_palindrome_slicing(text):
    return text == text[::-1]

def is_palindrome_loop(text):
    for i in range(len(text) // 2):
        if text[i] != text[-(i + 1)]:
            return False
    return True`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Create a function to check if a string is a palindrome using the reversed() function. Create another function to check if a string is a palindrome using the join() method.',
      initialCode: `# Write your solution here
def is_palindrome_reversed(text):
    return 

def is_palindrome_join(text):
    return `,
      solution: `def is_palindrome_reversed(text):
    return text == ''.join(reversed(text))

def is_palindrome_join(text):
    return text == ''.join(char for char in reversed(text))`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following methods is the most efficient way to check if a string is a palindrome in Python?',
      options: [
        'Using Slicing',
        'Using a Loop',
        'Using the reversed() Function',
        'Using the join() Method',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. Using slicing is the most efficient way to check if a string is a palindrome in Python.',
        'This is incorrect because using a loop is less efficient than slicing.',
        'This is incorrect because using the reversed() function is less efficient than slicing.',
        'This is incorrect because using the join() method is less efficient than slicing.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of the following methods checks if a string is a palindrome by comparing characters from both ends?',
      options: [
        'Using Slicing',
        'Using a Loop',
        'Using the reversed() Function',
        'Using the join() Method',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect because slicing does not compare characters from both ends.',
        'This is correct. Using a loop compares characters from both ends of the string.',
        'This is incorrect because the reversed() function does not compare characters from both ends directly.',
        'This is incorrect because the join() method does not compare characters from both ends directly.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const anagramCheckData: LessonContent = {
  title: 'Anagram Detection',
  content: `<p>
Anagram detection is a common algorithmic task that involves checking whether two strings are anagrams of each other. 
Anagrams are words or phrases formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
Python provides several approaches to achieve this, including sorting, counting characters, and using dictionaries.
</p>

<ul>
<li><strong>Using Sorting:</strong> Sort the characters of both strings and compare the sorted versions.</li>
<li><strong>Using Character Counting:</strong> Count the occurrences of each character in both strings and compare the counts.</li>
<li><strong>Using Dictionaries:</strong> Use dictionaries to count and compare character frequencies.</li>
</ul>`,
  codeExample: `# Using Sorting
def are_anagrams_sorting(str1, str2):
    return sorted(str1) == sorted(str2)

# Using Character Counting
def are_anagrams_counting(str1, str2):
    from collections import Counter
    return Counter(str1) == Counter(str2)

# Using Dictionaries
def are_anagrams_dict(str1, str2):
    def char_count(s):
        count = {}
        for char in s:
            count[char] = count.get(char, 0) + 1
        return count
    return char_count(str1) == char_count(str2)`,
  exercises: [
    {
      prompt:
        'Create a function to check if two strings are anagrams using sorting. Create another function to check if two strings are anagrams using character counting.',
      initialCode: `# Write your solution here
def are_anagrams_sorting(str1, str2):
    return 

def are_anagrams_counting(str1, str2):
    from collections import Counter
    return `,
      solution: `def are_anagrams_sorting(str1, str2):
    return sorted(str1) == sorted(str2)

def are_anagrams_counting(str1, str2):
    from collections import Counter
    return Counter(str1) == Counter(str2)`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Create a function to check if two strings are anagrams using dictionaries. Create a helper function to count character frequencies.',
      initialCode: `# Write your solution here
def are_anagrams_dict(str1, str2):
    def char_count(s):
        count = {}
        for char in s:
            count[char] = 
        return count
    return `,
      solution: `def are_anagrams_dict(str1, str2):
    def char_count(s):
        count = {}
        for char in s:
            count[char] = count.get(char, 0) + 1
        return count
    return char_count(str1) == char_count(str2)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following methods is the most efficient way to check if two strings are anagrams in Python?',
      options: [
        'Using Sorting',
        'Using Character Counting',
        'Using Dictionaries',
        'All methods have similar efficiency',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect because sorting is less efficient than character counting.',
        'This is correct. Using character counting is the most efficient way to check if two strings are anagrams in Python.',
        'This is incorrect because using dictionaries is less efficient than character counting.',
        'This is incorrect because character counting is more efficient than sorting and dictionaries.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of the following methods checks if two strings are anagrams by comparing sorted versions of the strings?',
      options: [
        'Using Sorting',
        'Using Character Counting',
        'Using Dictionaries',
        'All methods have similar efficiency',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. Using sorting compares sorted versions of the strings.',
        'This is incorrect because character counting does not involve sorting.',
        'This is incorrect because using dictionaries does not involve sorting.',
        'This is incorrect because sorting is less efficient than character counting.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const kmpAlgorithmData: LessonContent = {
  title: 'KMP Algorithm',
  content: `<p>
The Knuth-Morris-Pratt (KMP) algorithm is an efficient string matching algorithm that avoids unnecessary comparisons by using information about previously matched characters. 
It preprocesses the pattern to construct an auxiliary array that helps in skipping characters while matching.
</p>

<ul>
<li><strong>Preprocessing:</strong> Constructs an array (often called the "prefix function" or "failure function") that stores the length of the longest proper prefix which is also a suffix for each position in the pattern.</li>
<li><strong>Matching:</strong> Uses the preprocessed array to skip characters during the matching process, reducing the number of comparisons.</li>
</ul>`,
  codeExample: `# KMP Algorithm Implementation
def kmp_search(text, pattern):
    n = len(text)
    m = len(pattern)
    lps = compute_lps_array(pattern)
    i = 0  # index for text
    j = 0  # index for pattern
    while i < n:
        if pattern[j] == text[i]:
            i += 1
            j += 1
        if j == m:
            print("Pattern found at index " + str(i - j))
            j = lps[j - 1]
        elif i < n and pattern[j] != text[i]:
            if j != 0:
                j = lps[j - 1]
            else:
                i += 1

def compute_lps_array(pattern):
    m = len(pattern)
    lps = [0] * m
    length = 0
    i = 1
    while i < m:
        if pattern[i] == pattern[length]:
            length += 1
            lps[i] = length
            i += 1
        else:
            if length != 0:
                length = lps[length - 1]
            else:
                lps[i] = 0
                i += 1
    return lps`,
  exercises: [
    {
      prompt:
        'Implement the KMP algorithm to search for a pattern in a given text. Use the provided code as a reference.',
      initialCode: `# Write your solution here
def kmp_search(text, pattern):
    n = len(text)
    m = len(pattern)
    lps = compute_lps_array(pattern)
    i = 0  # index for text
    j = 0  # index for pattern
    while i < n:
        if pattern[j] == text[i]:
            i += 1
            j += 1
        if j == m:
            print("Pattern found at index " + str(i - j))
            j = lps[j - 1]
        elif i < n and pattern[j] != text[i]:
            if j != 0:
                j = lps[j - 1]
            else:
                i += 1

def compute_lps_array(pattern):
    m = len(pattern)
    lps = [0] * m
    length = 0
    i = 1
    while i < m:
        if pattern[i] == pattern[length]:
            length += 1
            lps[i] = length
            i += 1
        else:
            if length != 0:
                length = lps[length - 1]
            else:
                lps[i] = 0
                i += 1
    return lps`,
      solution: `def kmp_search(text, pattern):
    n = len(text)
    m = len(pattern)
    lps = compute_lps_array(pattern)
    i = 0  # index for text
    j = 0  # index for pattern
    while i < n:
        if pattern[j] == text[i]:
            i += 1
            j += 1
        if j == m:
            print("Pattern found at index " + str(i - j))
            j = lps[j - 1]
        elif i < n and pattern[j] != text[i]:
            if j != 0:
                j = lps[j - 1]
            else:
                i += 1

def compute_lps_array(pattern):
    m = len(pattern)
    lps = [0] * m
    length = 0
    i = 1
    while i < m:
        if pattern[i] == pattern[length]:
            length += 1
            lps[i] = length
            i += 1
        else:
            if length != 0:
                length = lps[length - 1]
            else:
                lps[i] = 0
                i += 1
    return lps`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question:
        'What is the primary purpose of the prefix function (failure function) in the KMP algorithm?',
      options: [
        'To store the length of the longest proper prefix which is also a suffix for each position in the pattern',
        'To sort the pattern before matching',
        'To skip characters during the matching process',
        'To count the number of characters in the pattern',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The prefix function stores the length of the longest proper prefix which is also a suffix for each position in the pattern.',
        'This is incorrect because sorting is not involved in the KMP algorithm.',
        'This is incorrect because skipping characters is a result of using the prefix function, not its primary purpose.',
        'This is incorrect because counting characters is not the primary purpose of the prefix function.',
      ],
      difficulty: Difficulty.Advanced,
    },
    {
      question:
        'Which of the following best describes the time complexity of the KMP algorithm?',
      options: [
        'O(n)',
        'O(n log n)',
        'O(n^2)',
        'O(m + n)',
      ],
      correctAnswer: 3,
      explanations: [
        'This is incorrect because O(n) is not the correct time complexity for the KMP algorithm.',
        'This is incorrect because O(n log n) is not the correct time complexity for the KMP algorithm.',
        'This is incorrect because O(n^2) is not the correct time complexity for the KMP algorithm.',
        'This is correct. The KMP algorithm has a time complexity of O(m + n), where m is the length of the pattern and n is the length of the text.',
      ],
      difficulty: Difficulty.Advanced,
    },
  ],
};

const rabinKarpData: LessonContent = {
  title: 'Rabin-Karp Algorithm',
  content: `<p>
The Rabin-Karp algorithm is a string searching algorithm that uses hashing to find any one of a set of pattern strings in a text. 
It computes a hash value for the pattern and for each substring of the text of the same length as the pattern. 
If the hash values match, it performs a full comparison of the substring and the pattern.
</p>

<ul>
<li><strong>Hash Function:</strong> Computes a hash value for the pattern and each substring of the text.</li>
<li><strong>Rolling Hash:</strong> Efficiently updates the hash value when moving to the next substring by subtracting the contribution of the old character and adding the contribution of the new character.</li>
<li><strong>Collision Handling:</strong> If the hash values match, a full comparison of the substring and the pattern is performed to ensure correctness.</li>
</ul>`,
  codeExample: `# Rabin-Karp Algorithm Implementation
def rabin_karp_search(text, pattern):
    n = len(text)
    m = len(pattern)
    pattern_hash = hash(pattern)
    for i in range(n - m + 1):
        substring_hash = hash(text[i:i + m])
        if pattern_hash == substring_hash:
            if text[i:i + m] == pattern:
                print("Pattern found at index " + str(i))`,
  exercises: [
    {
      prompt:
        'Implement the Rabin-Karp algorithm to search for a pattern in a given text. Use the provided code as a reference.',
      initialCode: `# Write your solution here
def rabin_karp_search(text, pattern):
    n = len(text)
    m = len(pattern)
    pattern_hash = hash(pattern)
    for i in range(n - m + 1):
        substring_hash = hash(text[i:i + m])
        if pattern_hash == substring_hash:
            if text[i:i + m] == pattern:
                print("Pattern found at index " + str(i))`,
      solution: `def rabin_karp_search(text, pattern):
    n = len(text)
    m = len(pattern)
    pattern_hash = hash(pattern)
    for i in range(n - m + 1):
        substring_hash = hash(text[i:i + m])
        if pattern_hash == substring_hash:
            if text[i:i + m] == pattern:
                print("Pattern found at index " + str(i))`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question:
        'What is the primary advantage of the Rabin-Karp algorithm over the naive string matching algorithm?',
      options: [
        'It has a better time complexity',
        'It uses hashing to reduce the number of comparisons',
        'It can handle multiple patterns simultaneously',
        'It is easier to implement',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect because the Rabin-Karp algorithm does not necessarily have a better time complexity than the naive algorithm.',
        'This is correct. The Rabin-Karp algorithm uses hashing to reduce the number of comparisons, especially for large texts.',
        'This is incorrect because the Rabin-Karp algorithm is not specifically designed to handle multiple patterns simultaneously.',
        'This is incorrect because the Rabin-Karp algorithm is not necessarily easier to implement than the naive algorithm.',
      ],
      difficulty: Difficulty.Advanced,
    },
    {
      question:
        'Which of the following best describes the time complexity of the Rabin-Karp algorithm in the average case?',
      options: [
        'O(n)',
        'O(n log n)',
        'O(n^2)',
        'O(m + n)',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The Rabin-Karp algorithm has an average time complexity of O(n), where n is the length of the text.',
        'This is incorrect because O(n log n) is not the correct time complexity for the Rabin-Karp algorithm.',
        'This is incorrect because O(n^2) is not the correct time complexity for the Rabin-Karp algorithm.',
        'This is incorrect because O(m + n) is not the correct time complexity for the Rabin-Karp algorithm in the average case.',
      ],
      difficulty: Difficulty.Advanced,
    },
  ],
};

const zAlgorithmData: LessonContent = {
  title: 'Z Algorithm',
  content: `<p>
The Z algorithm is a linear time pattern matching algorithm that constructs an auxiliary array (Z array) to store the length of the longest substring starting from each position that matches the prefix of the string. 
This array is then used to find all occurrences of the pattern in the text.
</p>

<ul>
<li><strong>Z Array Construction:</strong> Constructs the Z array by comparing substrings with the prefix of the string.</li>
<li><strong>Pattern Matching:</strong> Uses the Z array to find all occurrences of the pattern in the text by concatenating the pattern and the text with a special delimiter and constructing the Z array for the combined string.</li>
</ul>`,
  codeExample: `# Z Algorithm Implementation
def z_algorithm(text, pattern):
    combined = pattern + '$' + text
    n = len(combined)
    z = [0] * n
    l, r, k = 0, 0, 0
    for i in range(1, n):
        if i > r:
            l, r = i, i
            while r < n and combined[r] == combined[r - l]:
                r += 1
            z[i] = r - l
            r -= 1
        else:
            k = i - l
            if z[k] < r - i + 1:
                z[i] = z[k]
            else:
                l = i
                while r < n and combined[r] == combined[r - l]:
                    r += 1
                z[i] = r - l
                r -= 1
    for i in range(n):
        if z[i] == len(pattern):
            print("Pattern found at index " + str(i - len(pattern) - 1))`,
  exercises: [
    {
      prompt:
        'Implement the Z algorithm to search for a pattern in a given text. Use the provided code as a reference.',
      initialCode: `# Write your solution here
def z_algorithm(text, pattern):
    combined = pattern + '$' + text
    n = len(combined)
    z = [0] * n
    l, r, k = 0, 0, 0
    for i in range(1, n):
        if i > r:
            l, r = i, i
            while r < n and combined[r] == combined[r - l]:
                r += 1
            z[i] = r - l
            r -= 1
        else:
            k = i - l
            if z[k] < r - i + 1:
                z[i] = z[k]
            else:
                l = i
                while r < n and combined[r] == combined[r - l]:
                    r += 1
                z[i] = r - l
                r -= 1
    for i in range(n):
        if z[i] == len(pattern):
            print("Pattern found at index " + str(i - len(pattern) - 1))`,
      solution: `def z_algorithm(text, pattern):
    combined = pattern + '$' + text
    n = len(combined)
    z = [0] * n
    l, r, k = 0, 0, 0
    for i in range(1, n):
        if i > r:
            l, r = i, i
            while r < n and combined[r] == combined[r - l]:
                r += 1
            z[i] = r - l
            r -= 1
        else:
            k = i - l
            if z[k] < r - i + 1:
                z[i] = z[k]
            else:
                l = i
                while r < n and combined[r] == combined[r - l]:
                    r += 1
                z[i] = r - l
                r -= 1
    for i in range(n):
        if z[i] == len(pattern):
            print("Pattern found at index " + str(i - len(pattern) - 1))`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question:
        'What is the primary purpose of the Z array in the Z algorithm?',
      options: [
        'To store the length of the longest substring starting from each position that matches the prefix of the string',
        'To sort the pattern before matching',
        'To skip characters during the matching process',
        'To count the number of characters in the pattern',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The Z array stores the length of the longest substring starting from each position that matches the prefix of the string.',
        'This is incorrect because sorting is not involved in the Z algorithm.',
        'This is incorrect because skipping characters is not the primary purpose of the Z array.',
        'This is incorrect because counting characters is not the primary purpose of the Z array.',
      ],
      difficulty: Difficulty.Advanced,
    },
    {
      question:
        'Which of the following best describes the time complexity of the Z algorithm?',
      options: [
        'O(n)',
        'O(n log n)',
        'O(n^2)',
        'O(m + n)',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The Z algorithm has a time complexity of O(n), where n is the length of the combined string (pattern + text).',
        'This is incorrect because O(n log n) is not the correct time complexity for the Z algorithm.',
        'This is incorrect because O(n^2) is not the correct time complexity for the Z algorithm.',
        'This is incorrect because O(m + n) is not the correct time complexity for the Z algorithm.',
      ],
      difficulty: Difficulty.Advanced,
    },
  ],
};

const suffixArraysData: LessonContent = {
  title: 'Suffix Arrays',
  content: `<p>
Suffix arrays are a data structure used in string processing to efficiently solve various string matching problems. 
A suffix array is an array of all suffixes of a string sorted lexicographically. 
This allows for efficient pattern matching and other operations.
</p>

<ul>
<li><strong>Construction:</strong> Constructs the suffix array by sorting all suffixes of the string.</li>
<li><strong>Pattern Matching:</strong> Uses the suffix array to find all occurrences of a pattern in the text by performing binary searches on the suffix array.</li>
<li><strong>Applications:</strong> Used in various string processing tasks such as longest common prefix (LCP) computation, longest repeated substring, and more.</li>
</ul>`,
  codeExample: `# Suffix Array Construction and Pattern Matching
def build_suffix_array(text):
    suffixes = [(text[i:], i) for i in range(len(text))]
    suffixes.sort()
    return [suffix[1] for suffix in suffixes]

def pattern_matching_with_suffix_array(text, pattern, suffix_array):
    n = len(text)
    m = len(pattern)
    l, r = 0, n - 1
    while l <= r:
        mid = (l + r) // 2
        suffix_start = suffix_array[mid]
        suffix = text[suffix_start:suffix_start + m]
        if pattern == suffix:
            print("Pattern found at index " + str(suffix_start))
            return
        elif pattern < suffix:
            r = mid - 1
        else:
            l = mid + 1
    print("Pattern not found")`,
  exercises: [
    {
      prompt:
        'Implement the construction of a suffix array for a given text. Use the provided code as a reference.',
      initialCode: `# Write your solution here
def build_suffix_array(text):
    suffixes = [(text[i:], i) for i in range(len(text))]
    suffixes.sort()
    return [suffix[1] for suffix in suffixes]`,
      solution: `def build_suffix_array(text):
    suffixes = [(text[i:], i) for i in range(len(text))]
    suffixes.sort()
    return [suffix[1] for suffix in suffixes]`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt:
        'Implement pattern matching using a suffix array. Use the provided code as a reference.',
      initialCode: `# Write your solution here
def pattern_matching_with_suffix_array(text, pattern, suffix_array):
    n = len(text)
    m = len(pattern)
    l, r = 0, n - 1
    while l <= r:
        mid = (l + r) // 2
        suffix_start = suffix_array[mid]
        suffix = text[suffix_start:suffix_start + m]
        if pattern == suffix:
            print("Pattern found at index " + str(suffix_start))
            return
        elif pattern < suffix:
            r = mid - 1
        else:
            l = mid + 1
    print("Pattern not found")`,
      solution: `def pattern_matching_with_suffix_array(text, pattern, suffix_array):
    n = len(text)
    m = len(pattern)
    l, r = 0, n - 1
    while l <= r:
        mid = (l + r) // 2
        suffix_start = suffix_array[mid]
        suffix = text[suffix_start:suffix_start + m]
        if pattern == suffix:
            print("Pattern found at index " + str(suffix_start))
            return
        elif pattern < suffix:
            r = mid - 1
        else:
            l = mid + 1
    print("Pattern not found")`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question:
        'What is the primary purpose of a suffix array in string processing?',
      options: [
        'To store all suffixes of a string sorted lexicographically',
        'To sort the pattern before matching',
        'To skip characters during the matching process',
        'To count the number of characters in the pattern',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. A suffix array stores all suffixes of a string sorted lexicographically.',
        'This is incorrect because sorting the pattern is not the primary purpose of a suffix array.',
        'This is incorrect because skipping characters is not the primary purpose of a suffix array.',
        'This is incorrect because counting characters is not the primary purpose of a suffix array.',
      ],
      difficulty: Difficulty.Advanced,
    },
    {
      question:
        'Which of the following best describes the time complexity of constructing a suffix array?',
      options: [
        'O(n)',
        'O(n log n)',
        'O(n^2)',
        'O(m + n)',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect because O(n) is not the correct time complexity for constructing a suffix array.',
        'This is correct. Constructing a suffix array has a time complexity of O(n log n), where n is the length of the text.',
        'This is incorrect because O(n^2) is not the correct time complexity for constructing a suffix array.',
        'This is incorrect because O(m + n) is not the correct time complexity for constructing a suffix array.',
      ],
      difficulty: Difficulty.Advanced,
    },
  ],
};

const longestCommonData: LessonContent = {
  title: 'Longest Common Substring/Subsequence',
  content: `<p>
Finding the longest common substring or subsequence between two strings is a classic problem in string pattern matching. 
These problems involve identifying the longest contiguous or non-contiguous sequence of characters that appear in both strings.
</p>

<ul>
<li><strong>Longest Common Substring:</strong> The longest contiguous sequence of characters that appear in both strings.</li>
<li><strong>Longest Common Subsequence:</strong> The longest sequence of characters that appear in both strings, not necessarily contiguous.</li>
<li><strong>Dynamic Programming:</strong> Both problems can be solved using dynamic programming to efficiently compute the longest common substring or subsequence.</li>
</ul>`,
  codeExample: `# Longest Common Substring Implementation
def longest_common_substring(str1, str2):
    m, n = len(str1), len(str2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    max_len = 0
    end_index = 0
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if str1[i - 1] == str2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
                if dp[i][j] > max_len:
                    max_len = dp[i][j]
                    end_index = i
    return str1[end_index - max_len:end_index]

# Longest Common Subsequence Implementation
def longest_common_subsequence(str1, str2):
    m, n = len(str1), len(str2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if str1[i - 1] == str2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    return dp[m][n]`,
  exercises: [
    {
      prompt:
        'Implement the longest common substring algorithm to find the longest contiguous sequence of characters that appear in both strings. Use the provided code as a reference.',
      initialCode: `# Write your solution here
def longest_common_substring(str1, str2):
    m, n = len(str1), len(str2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    max_len = 0
    end_index = 0
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if str1[i - 1] == str2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
                if dp[i][j] > max_len:
                    max_len = dp[i][j]
                    end_index = i
    return str1[end_index - max_len:end_index]`,
      solution: `def longest_common_substring(str1, str2):
    m, n = len(str1), len(str2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    max_len = 0
    end_index = 0
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if str1[i - 1] == str2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
                if dp[i][j] > max_len:
                    max_len = dp[i][j]
                    end_index = i
    return str1[end_index - max_len:end_index]`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt:
        'Implement the longest common subsequence algorithm to find the longest sequence of characters that appear in both strings, not necessarily contiguous. Use the provided code as a reference.',
      initialCode: `# Write your solution here
def longest_common_subsequence(str1, str2):
    m, n = len(str1), len(str2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if str1[i - 1] == str2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    return dp[m][n]`,
      solution: `def longest_common_subsequence(str1, str2):
    m, n = len(str1), len(str2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if str1[i - 1] == str2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    return dp[m][n]`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question:
        'What is the primary difference between the longest common substring and the longest common subsequence problems?',
      options: [
        'Substring must be contiguous, subsequence does not have to be',
        'Substring does not have to be contiguous, subsequence must be',
        'Both substring and subsequence must be contiguous',
        'Both substring and subsequence do not have to be contiguous',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The longest common substring must be contiguous, while the longest common subsequence does not have to be.',
        'This is incorrect because the substring must be contiguous, not the subsequence.',
        'This is incorrect because the subsequence does not have to be contiguous.',
        'This is incorrect because the substring must be contiguous.',
      ],
      difficulty: Difficulty.Advanced,
    },
    {
      question:
        'Which of the following best describes the time complexity of the longest common subsequence problem?',
      options: [
        'O(n)',
        'O(n log n)',
        'O(n^2)',
        'O(m + n)',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect because O(n) is not the correct time complexity for the longest common subsequence problem.',
        'This is incorrect because O(n log n) is not the correct time complexity for the longest common subsequence problem.',
        'This is correct. The longest common subsequence problem has a time complexity of O(n^2), where n is the length of the strings.',
        'This is incorrect because O(m + n) is not the correct time complexity for the longest common subsequence problem.',
      ],
      difficulty: Difficulty.Advanced,
    },
  ],
};

const stringMatchingVariationsData: LessonContent = {
  title: 'String Matching Variations',
  content: `<p>
String matching variations involve different types of problems that require finding patterns within strings. 
These problems can range from simple substring matching to more complex problems like finding the shortest superstring or the longest palindromic substring.
</p>

<ul>
<li><strong>Substring Matching:</strong> Finding all occurrences of a substring within a string.</li>
<li><strong>Shortest Superstring:</strong> Finding the shortest string that contains all given strings as substrings.</li>
<li><strong>Longest Palindromic Substring:</strong> Finding the longest substring that is a palindrome.</li>
<li><strong>Dynamic Programming:</strong> Many string matching variations can be solved using dynamic programming to efficiently compute the desired result.</li>
</ul>`,
  codeExample: `# Substring Matching Implementation
def substring_matching(text, pattern):
    n, m = len(text), len(pattern)
    for i in range(n - m + 1):
        if text[i:i + m] == pattern:
            print("Pattern found at index " + str(i))

# Shortest Superstring Implementation
def shortest_superstring(strings):
    def overlap(a, b):
        max_len = min(len(a), len(b))
        for i in range(max_len, 0, -1):
            if a.endswith(b[:i]):
                return i
        return 0

    while len(strings) > 1:
        max_overlap = -1
        l, r = 0, 0
        for i in range(len(strings)):
            for j in range(len(strings)):
                if i != j:
                    o = overlap(strings[i], strings[j])
                    if o > max_overlap:
                        max_overlap = o
                        l, r = i, j
        strings[l] = strings[l] + strings[r][max_overlap:]
        strings.pop(r)
    return strings[0]

# Longest Palindromic Substring Implementation
def longest_palindromic_substring(text):
    n = len(text)
    dp = [[False] * n for _ in range(n)]
    max_len = 1
    start = 0
    for i in range(n):
        dp[i][i] = True
    for i in range(n - 1):
        if text[i] == text[i + 1]:
            dp[i][i + 1] = True
            start = i
            max_len = 2
    for k in range(3, n + 1):
        for i in range(n - k + 1):
            j = i + k - 1
            if text[i] == text[j] and dp[i + 1][j - 1]:
                dp[i][j] = True
                if k > max_len:
                    start = i
                    max_len = k
    return text[start:start + max_len]`,
  exercises: [
    {
      prompt:
        'Implement the substring matching algorithm to find all occurrences of a pattern within a string. Use the provided code as a reference.',
      initialCode: `# Write your solution here
def substring_matching(text, pattern):
    n, m = len(text), len(pattern)
    for i in range(n - m + 1):
        if text[i:i + m] == pattern:
            print("Pattern found at index " + str(i))`,
      solution: `def substring_matching(text, pattern):
    n, m = len(text), len(pattern)
    for i in range(n - m + 1):
        if text[i:i + m] == pattern:
            print("Pattern found at index " + str(i))`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt:
        'Implement the shortest superstring algorithm to find the shortest string that contains all given strings as substrings. Use the provided code as a reference.',
      initialCode: `# Write your solution here
def shortest_superstring(strings):
    def overlap(a, b):
        max_len = min(len(a), len(b))
        for i in range(max_len, 0, -1):
            if a.endswith(b[:i]):
                return i
        return 0

    while len(strings) > 1:
        max_overlap = -1
        l, r = 0, 0
        for i in range(len(strings)):
            for j in range(len(strings)):
                if i != j:
                    o = overlap(strings[i], strings[j])
                    if o > max_overlap:
                        max_overlap = o
                        l, r = i, j
        strings[l] = strings[l] + strings[r][max_overlap:]
        strings.pop(r)
    return strings[0]`,
      solution: `def shortest_superstring(strings):
    def overlap(a, b):
        max_len = min(len(a), len(b))
        for i in range(max_len, 0, -1):
            if a.endswith(b[:i]):
                return i
        return 0

    while len(strings) > 1:
        max_overlap = -1
        l, r = 0, 0
        for i in range(len(strings)):
            for j in range(len(strings)):
                if i != j:
                    o = overlap(strings[i], strings[j])
                    if o > max_overlap:
                        max_overlap = o
                        l, r = i, j
        strings[l] = strings[l] + strings[r][max_overlap:]
        strings.pop(r)
    return strings[0]`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question:
        'What is the primary goal of the shortest superstring problem?',
      options: [
        'To find the shortest string that contains all given strings as substrings',
        'To find the longest common substring between two strings',
        'To find the longest palindromic substring within a string',
        'To find all occurrences of a substring within a string',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The shortest superstring problem aims to find the shortest string that contains all given strings as substrings.',
        'This is incorrect because the longest common substring problem is different.',
        'This is incorrect because the longest palindromic substring problem is different.',
        'This is incorrect because substring matching is a different problem.',
      ],
      difficulty: Difficulty.Advanced,
    },
    {
      question:
        'Which of the following best describes the time complexity of the longest palindromic substring problem?',
      options: [
        'O(n)',
        'O(n log n)',
        'O(n^2)',
        'O(m + n)',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect because O(n) is not the correct time complexity for the longest palindromic substring problem.',
        'This is incorrect because O(n log n) is not the correct time complexity for the longest palindromic substring problem.',
        'This is correct. The longest palindromic substring problem has a time complexity of O(n^2), where n is the length of the string.',
        'This is incorrect because O(m + n) is not the correct time complexity for the longest palindromic substring problem.',
      ],
      difficulty: Difficulty.Advanced,
    },
  ],
};

const editDistanceData: LessonContent = {
  title: 'Edit Distance',
  content: `<p>
Edit distance, also known as Levenshtein distance, measures the minimum number of single-character edits (insertions, deletions, or substitutions) required to change one string into another. 
This problem is widely used in applications like spell checking, DNA sequencing, and plagiarism detection.
</p>

<ul>
<li><strong>Dynamic Programming:</strong> The edit distance problem can be solved using dynamic programming to efficiently compute the minimum number of edits.</li>
<li><strong>Applications:</strong> Used in various applications such as spell checking, DNA sequencing, and plagiarism detection.</li>
</ul>`,
  codeExample: `# Edit Distance Implementation
def edit_distance(str1, str2):
    m, n = len(str1), len(str2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(m + 1):
        for j in range(n + 1):
            if i == 0:
                dp[i][j] = j
            elif j == 0:
                dp[i][j] = i
            elif str1[i - 1] == str2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            else:
                dp[i][j] = 1 + min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
    return dp[m][n]`,
  exercises: [
    {
      prompt:
        'Implement the edit distance algorithm to compute the minimum number of single-character edits required to change one string into another. Use the provided code as a reference.',
      initialCode: `# Write your solution here
def edit_distance(str1, str2):
    m, n = len(str1), len(str2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(m + 1):
        for j in range(n + 1):
            if i == 0:
                dp[i][j] = j
            elif j == 0:
                dp[i][j] = i
            elif str1[i - 1] == str2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            else:
                dp[i][j] = 1 + min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
    return dp[m][n]`,
      solution: `def edit_distance(str1, str2):
    m, n = len(str1), len(str2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(m + 1):
        for j in range(n + 1):
            if i == 0:
                dp[i][j] = j
            elif j == 0:
                dp[i][j] = i
            elif str1[i - 1] == str2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            else:
                dp[i][j] = 1 + min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
    return dp[m][n]`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question:
        'What is the primary goal of the edit distance problem?',
      options: [
        'To compute the minimum number of single-character edits required to change one string into another',
        'To find the longest common substring between two strings',
        'To find the longest palindromic substring within a string',
        'To find all occurrences of a substring within a string',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The edit distance problem aims to compute the minimum number of single-character edits required to change one string into another.',
        'This is incorrect because the longest common substring problem is different.',
        'This is incorrect because the longest palindromic substring problem is different.',
        'This is incorrect because substring matching is a different problem.',
      ],
      difficulty: Difficulty.Advanced,
    },
    {
      question:
        'Which of the following best describes the time complexity of the edit distance problem?',
      options: [
        'O(n)',
        'O(n log n)',
        'O(n^2)',
        'O(m + n)',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect because O(n) is not the correct time complexity for the edit distance problem.',
        'This is incorrect because O(n log n) is not the correct time complexity for the edit distance problem.',
        'This is correct. The edit distance problem has a time complexity of O(n^2), where n is the length of the strings.',
        'This is incorrect because O(m + n) is not the correct time complexity for the edit distance problem.',
      ],
      difficulty: Difficulty.Advanced,
    },
  ],
};

const basicCompressionData: LessonContent = {
  title: 'Basic String Compression',
  content: `<p>
Basic string compression involves reducing the size of a string by replacing repeated characters with a single character and a count. 
This technique is useful for compressing strings with long sequences of the same character.
</p>

<ul>
<li><strong>Character Counting:</strong> Replace repeated characters with a single character and a count.</li>
<li><strong>Simple Algorithms:</strong> Implement simple compression algorithms that count consecutive characters and replace them with a single character and a count.</li>
<li><strong>Limitations:</strong> This method is effective for strings with long sequences of the same character, but may not be effective for strings with few repeated characters.</li>
</ul>`,
  codeExample: `# Basic String Compression Implementation
def basic_compression(text):
    if not text:
        return text
    compressed = []
    count = 1
    prev_char = text[0]
    for char in text[1:]:
        if char == prev_char:
            count += 1
        else:
            compressed.append(prev_char + str(count))
            prev_char = char
            count = 1
    compressed.append(prev_char + str(count))
    compressed_text = ''.join(compressed)
    return compressed_text if len(compressed_text) < len(text) else text`,
  exercises: [
    {
      prompt:
        'Implement the basic string compression algorithm to compress a given string. Use the provided code as a reference.',
      initialCode: `# Write your solution here
def basic_compression(text):
    if not text:
        return text
    compressed = []
    count = 1
    prev_char = text[0]
    for char in text[1:]:
        if char == prev_char:
            count += 1
        else:
            compressed.append(prev_char + str(count))
            prev_char = char
            count = 1
    compressed.append(prev_char + str(count))
    compressed_text = ''.join(compressed)
    return compressed_text if len(compressed_text) < len(text) else text`,
      solution: `def basic_compression(text):
    if not text:
        return text
    compressed = []
    count = 1
    prev_char = text[0]
    for char in text[1:]:
        if char == prev_char:
            count += 1
        else:
            compressed.append(prev_char + str(count))
            prev_char = char
            count = 1
    compressed.append(prev_char + str(count))
    compressed_text = ''.join(compressed)
    return compressed_text if len(compressed_text) < len(text) else text`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'What is the primary goal of basic string compression?',
      options: [
        'To reduce the size of a string by replacing repeated characters with a single character and a count',
        'To find the longest common substring between two strings',
        'To find the longest palindromic substring within a string',
        'To find all occurrences of a substring within a string',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The primary goal of basic string compression is to reduce the size of a string by replacing repeated characters with a single character and a count.',
        'This is incorrect because the longest common substring problem is different.',
        'This is incorrect because the longest palindromic substring problem is different.',
        'This is incorrect because substring matching is a different problem.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of the following best describes the time complexity of the basic string compression algorithm?',
      options: [
        'O(n)',
        'O(n log n)',
        'O(n^2)',
        'O(m + n)',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The basic string compression algorithm has a time complexity of O(n), where n is the length of the string.',
        'This is incorrect because O(n log n) is not the correct time complexity for the basic string compression algorithm.',
        'This is incorrect because O(n^2) is not the correct time complexity for the basic string compression algorithm.',
        'This is incorrect because O(m + n) is not the correct time complexity for the basic string compression algorithm.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const runLengthData: LessonContent = {
  title: 'Run-Length Encoding',
  content: `<p>
Run-length encoding (RLE) is a simple form of lossless data compression in which runs of data (sequences in which the same data value occurs in many consecutive data elements) are stored as a single data value and count. 
This technique is particularly effective for data with frequent runs of the same value.
</p>

<ul>
<li><strong>Encoding:</strong> Replace runs of the same character with a single character and a count.</li>
<li><strong>Decoding:</strong> Reconstruct the original string by repeating each character according to its count.</li>
<li><strong>Applications:</strong> Used in various applications such as image compression, text compression, and more.</li>
</ul>`,
  codeExample: `# Run-Length Encoding Implementation
def run_length_encode(text):
    if not text:
        return text
    encoded = []
    count = 1
    prev_char = text[0]
    for char in text[1:]:
        if char == prev_char:
            count += 1
        else:
            encoded.append(prev_char + str(count))
            prev_char = char
            count = 1
    encoded.append(prev_char + str(count))
    return ''.join(encoded)

# Run-Length Decoding Implementation
def run_length_decode(encoded_text):
    if not encoded_text:
        return encoded_text
    decoded = []
    i = 0
    while i < len(encoded_text):
        char = encoded_text[i]
        count = ''
        i += 1
        while i < len(encoded_text) and encoded_text[i].isdigit():
            count += encoded_text[i]
            i += 1
        decoded.append(char * int(count))
    return ''.join(decoded)`,
  exercises: [
    {
      prompt:
        'Implement the run-length encoding algorithm to compress a given string. Use the provided code as a reference.',
      initialCode: `# Write your solution here
def run_length_encode(text):
    if not text:
        return text
    encoded = []
    count = 1
    prev_char = text[0]
    for char in text[1:]:
        if char == prev_char:
            count += 1
        else:
            encoded.append(prev_char + str(count))
            prev_char = char
            count = 1
    encoded.append(prev_char + str(count))
    return ''.join(encoded)`,
      solution: `def run_length_encode(text):
    if not text:
        return text
    encoded = []
    count = 1
    prev_char = text[0]
    for char in text[1:]:
        if char == prev_char:
            count += 1
        else:
            encoded.append(prev_char + str(count))
            prev_char = char
            count = 1
    encoded.append(prev_char + str(count))
    return ''.join(encoded)`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Implement the run-length decoding algorithm to decompress a given encoded string. Use the provided code as a reference.',
      initialCode: `# Write your solution here
def run_length_decode(encoded_text):
    if not encoded_text:
        return encoded_text
    decoded = []
    i = 0
    while i < len(encoded_text):
        char = encoded_text[i]
        count = ''
        i += 1
        while i < len(encoded_text) and encoded_text[i].isdigit():
            count += encoded_text[i]
            i += 1
        decoded.append(char * int(count))
    return ''.join(decoded)`,
      solution: `def run_length_decode(encoded_text):
    if not encoded_text:
        return encoded_text
    decoded = []
    i = 0
    while i < len(encoded_text):
        char = encoded_text[i]
        count = ''
        i += 1
        while i < len(encoded_text) and encoded_text[i].isdigit():
            count += encoded_text[i]
            i += 1
        decoded.append(char * int(count))
    return ''.join(decoded)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'What is the primary goal of run-length encoding?',
      options: [
        'To compress data by replacing runs of the same character with a single character and a count',
        'To find the longest common substring between two strings',
        'To find the longest palindromic substring within a string',
        'To find all occurrences of a substring within a string',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The primary goal of run-length encoding is to compress data by replacing runs of the same character with a single character and a count.',
        'This is incorrect because the longest common substring problem is different.',
        'This is incorrect because the longest palindromic substring problem is different.',
        'This is incorrect because substring matching is a different problem.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of the following best describes the time complexity of the run-length encoding algorithm?',
      options: [
        'O(n)',
        'O(n log n)',
        'O(n^2)',
        'O(m + n)',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The run-length encoding algorithm has a time complexity of O(n), where n is the length of the string.',
        'This is incorrect because O(n log n) is not the correct time complexity for the run-length encoding algorithm.',
        'This is incorrect because O(n^2) is not the correct time complexity for the run-length encoding algorithm.',
        'This is incorrect because O(m + n) is not the correct time complexity for the run-length encoding algorithm.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const slidingWindowData: LessonContent = {
  title: 'Sliding Window Technique',
  content: `<p>
The sliding window technique is a powerful method for solving problems that involve finding a contiguous subarray or substring that meets certain criteria. 
This technique is particularly useful for problems that require maintaining a window of elements and adjusting it dynamically.
</p>

<ul>
<li><strong>Fixed-Size Window:</strong> The window size is fixed and does not change during the iteration.</li>
<li><strong>Variable-Size Window:</strong> The window size can change dynamically based on the problem constraints.</li>
<li><strong>Applications:</strong> Used in various problems such as finding the longest substring with at most k distinct characters, finding the minimum window substring, and more.</li>
</ul>`,
  codeExample: `# Sliding Window Technique Implementation
def sliding_window_fixed(arr, k):
    n = len(arr)
    if n < k:
        return []
    window_sum = sum(arr[:k])
    result = [window_sum]
    for i in range(1, n - k + 1):
        window_sum = window_sum - arr[i - 1] + arr[i + k - 1]
        result.append(window_sum)
    return result

def sliding_window_variable(arr, target):
    n = len(arr)
    left = 0
    window_sum = 0
    result = []
    for right in range(n):
        window_sum += arr[right]
        while window_sum > target:
            window_sum -= arr[left]
            left += 1
        if window_sum == target:
            result.append(arr[left:right + 1])
    return result`,
  exercises: [
    {
      prompt:
        'Implement the sliding window technique for a fixed-size window to find the sum of each subarray of size k. Use the provided code as a reference.',
      initialCode: `# Write your solution here
def sliding_window_fixed(arr, k):
    n = len(arr)
    if n < k:
        return []
    window_sum = sum(arr[:k])
    result = [window_sum]
    for i in range(1, n - k + 1):
        window_sum = window_sum - arr[i - 1] + arr[i + k - 1]
        result.append(window_sum)
    return result`,
      solution: `def sliding_window_fixed(arr, k):
    n = len(arr)
    if n < k:
        return []
    window_sum = sum(arr[:k])
    result = [window_sum]
    for i in range(1, n - k + 1):
        window_sum = window_sum - arr[i - 1] + arr[i + k - 1]
        result.append(window_sum)
    return result`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Implement the sliding window technique for a variable-size window to find all subarrays that sum up to a given target. Use the provided code as a reference.',
      initialCode: `# Write your solution here
def sliding_window_variable(arr, target):
    n = len(arr)
    left = 0
    window_sum = 0
    result = []
    for right in range(n):
        window_sum += arr[right]
        while window_sum > target:
            window_sum -= arr[left]
            left += 1
        if window_sum == target:
            result.append(arr[left:right + 1])
    return result`,
      solution: `def sliding_window_variable(arr, target):
    n = len(arr)
    left = 0
    window_sum = 0
    result = []
    for right in range(n):
        window_sum += arr[right]
        while window_sum > target:
            window_sum -= arr[left]
            left += 1
        if window_sum == target:
            result.append(arr[left:right + 1])
    return result`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'What is the primary advantage of the sliding window technique?',
      options: [
        'It reduces the time complexity of finding subarrays or substrings',
        'It increases the time complexity of finding subarrays or substrings',
        'It is only applicable to fixed-size windows',
        'It is only applicable to variable-size windows',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The sliding window technique reduces the time complexity of finding subarrays or substrings by maintaining a window and adjusting it dynamically.',
        'This is incorrect because the sliding window technique reduces, not increases, the time complexity.',
        'This is incorrect because the sliding window technique is applicable to both fixed-size and variable-size windows.',
        'This is incorrect because the sliding window technique is applicable to both fixed-size and variable-size windows.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of the following best describes the time complexity of the sliding window technique?',
      options: [
        'O(n)',
        'O(n log n)',
        'O(n^2)',
        'O(m + n)',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The sliding window technique has a time complexity of O(n), where n is the length of the array or string.',
        'This is incorrect because O(n log n) is not the correct time complexity for the sliding window technique.',
        'This is incorrect because O(n^2) is not the correct time complexity for the sliding window technique.',
        'This is incorrect because O(m + n) is not the correct time complexity for the sliding window technique.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const substringProblemsData: LessonContent = {
  title: 'Substring Problems',
  content: `<p>
Substring problems involve finding substrings within a string that meet certain criteria. 
These problems can range from finding the longest substring with unique characters to finding the minimum window substring that contains all characters from a given pattern.
</p>

<ul>
<li><strong>Longest Substring Without Repeating Characters:</strong> Find the longest substring that does not contain any repeating characters.</li>
<li><strong>Minimum Window Substring:</strong> Find the minimum window in a string that contains all characters from a given pattern.</li>
<li><strong>Sliding Window Technique:</strong> Many substring problems can be solved using the sliding window technique to efficiently find the desired substring.</li>
</ul>`,
  codeExample: `# Longest Substring Without Repeating Characters Implementation
def longest_substring_without_repeating_characters(s):
    n = len(s)
    seen = set()
    left = 0
    max_len = 0
    for right in range(n):
        while s[right] in seen:
            seen.remove(s[left])
            left += 1
        seen.add(s[right])
        max_len = max(max_len, right - left + 1)
    return max_len

# Minimum Window Substring Implementation
def min_window_substring(s, t):
    from collections import Counter
    need = Counter(t)
    missing = len(t)
    left = 0
    start, end = 0, 0
    for right, char in enumerate(s, 1):
        if need[char] > 0:
            missing -= 1
        need[char] -= 1
        if missing == 0:
            while left < right and need[s[left]] < 0:
                need[s[left]] += 1
                left += 1
            if end == 0 or right - left < end - start:
                start, end = left, right
            need[s[left]] += 1
            missing += 1
            left += 1
    return s[start:end]`,
  exercises: [
    {
      prompt:
        'Implement the longest substring without repeating characters algorithm to find the length of the longest substring that does not contain any repeating characters. Use the provided code as a reference.',
      initialCode: `# Write your solution here
def longest_substring_without_repeating_characters(s):
    n = len(s)
    seen = set()
    left = 0
    max_len = 0
    for right in range(n):
        while s[right] in seen:
            seen.remove(s[left])
            left += 1
        seen.add(s[right])
        max_len = max(max_len, right - left + 1)
    return max_len`,
      solution: `def longest_substring_without_repeating_characters(s):
    n = len(s)
    seen = set()
    left = 0
    max_len = 0
    for right in range(n):
        while s[right] in seen:
            seen.remove(s[left])
            left += 1
        seen.add(s[right])
        max_len = max(max_len, right - left + 1)
    return max_len`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Implement the minimum window substring algorithm to find the minimum window in a string that contains all characters from a given pattern. Use the provided code as a reference.',
      initialCode: `# Write your solution here
def min_window_substring(s, t):
    from collections import Counter
    need = Counter(t)
    missing = len(t)
    left = 0
    start, end = 0, 0
    for right, char in enumerate(s, 1):
        if need[char] > 0:
            missing -= 1
        need[char] -= 1
        if missing == 0:
            while left < right and need[s[left]] < 0:
                need[s[left]] += 1
                left += 1
            if end == 0 or right - left < end - start:
                start, end = left, right
            need[s[left]] += 1
            missing += 1
            left += 1
    return s[start:end]`,
      solution: `def min_window_substring(s, t):
    from collections import Counter
    need = Counter(t)
    missing = len(t)
    left = 0
    start, end = 0, 0
    for right, char in enumerate(s, 1):
        if need[char] > 0:
            missing -= 1
        need[char] -= 1
        if missing == 0:
            while left < right and need[s[left]] < 0:
                need[s[left]] += 1
                left += 1
            if end == 0 or right - left < end - start:
                start, end = left, right
            need[s[left]] += 1
            missing += 1
            left += 1
    return s[start:end]`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'What is the primary goal of the longest substring without repeating characters problem?',
      options: [
        'To find the longest substring that does not contain any repeating characters',
        'To find the longest common substring between two strings',
        'To find the longest palindromic substring within a string',
        'To find all occurrences of a substring within a string',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The primary goal of the longest substring without repeating characters problem is to find the longest substring that does not contain any repeating characters.',
        'This is incorrect because the longest common substring problem is different.',
        'This is incorrect because the longest palindromic substring problem is different.',
        'This is incorrect because substring matching is a different problem.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of the following best describes the time complexity of the minimum window substring problem?',
      options: [
        'O(n)',
        'O(n log n)',
        'O(n^2)',
        'O(m + n)',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The minimum window substring problem has a time complexity of O(n), where n is the length of the string.',
        'This is incorrect because O(n log n) is not the correct time complexity for the minimum window substring problem.',
        'This is incorrect because O(n^2) is not the correct time complexity for the minimum window substring problem.',
        'This is incorrect because O(m + n) is not the correct time complexity for the minimum window substring problem.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const windowOptimizationData: LessonContent = {
  title: 'Window Optimization',
  content: `<p>
Window optimization involves improving the efficiency of sliding window techniques by reducing unnecessary computations and maintaining the window in a more optimal state. 
This can be achieved by using data structures like hash maps or sets to keep track of the elements within the window.
</p>

<ul>
<li><strong>Hash Maps:</strong> Use hash maps to store the frequency of elements within the window, allowing for quick lookups and updates.</li>
<li><strong>Sets:</strong> Use sets to store unique elements within the window, allowing for quick membership checks and deletions.</li>
<li><strong>Efficient Updates:</strong> Optimize the window update process by only adjusting the window when necessary, reducing the number of operations.</li>
</ul>`,
  codeExample: `# Window Optimization with Hash Maps Implementation
def optimized_sliding_window(arr, k):
    from collections import defaultdict
    n = len(arr)
    if n < k:
        return []
    window_count = defaultdict(int)
    for i in range(k):
        window_count[arr[i]] += 1
    result = [len(window_count)]
    for i in range(1, n - k + 1):
        window_count[arr[i - 1]] -= 1
        if window_count[arr[i - 1]] == 0:
            del window_count[arr[i - 1]]
        window_count[arr[i + k - 1]] += 1
        result.append(len(window_count))
    return result`,
  exercises: [
    {
      prompt:
        'Implement the window optimization technique using hash maps to count the number of distinct elements in each subarray of size k. Use the provided code as a reference.',
      initialCode: `# Write your solution here
def optimized_sliding_window(arr, k):
    from collections import defaultdict
    n = len(arr)
    if n < k:
        return []
    window_count = defaultdict(int)
    for i in range(k):
        window_count[arr[i]] += 1
    result = [len(window_count)]
    for i in range(1, n - k + 1):
        window_count[arr[i - 1]] -= 1
        if window_count[arr[i - 1]] == 0:
            del window_count[arr[i - 1]]
        window_count[arr[i + k - 1]] += 1
        result.append(len(window_count))
    return result`,
      solution: `def optimized_sliding_window(arr, k):
    from collections import defaultdict
    n = len(arr)
    if n < k:
        return []
    window_count = defaultdict(int)
    for i in range(k):
        window_count[arr[i]] += 1
    result = [len(window_count)]
    for i in range(1, n - k + 1):
        window_count[arr[i - 1]] -= 1
        if window_count[arr[i - 1]] == 0:
            del window_count[arr[i - 1]]
        window_count[arr[i + k - 1]] += 1
        result.append(len(window_count))
    return result`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'What is the primary advantage of using hash maps for window optimization?',
      options: [
        'It allows for quick lookups and updates of elements within the window',
        'It increases the time complexity of the sliding window technique',
        'It is only applicable to fixed-size windows',
        'It is only applicable to variable-size windows',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. Using hash maps allows for quick lookups and updates of elements within the window, improving the efficiency of the sliding window technique.',
        'This is incorrect because using hash maps reduces, not increases, the time complexity.',
        'This is incorrect because hash maps can be used for both fixed-size and variable-size windows.',
        'This is incorrect because hash maps can be used for both fixed-size and variable-size windows.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of the following best describes the time complexity of the window optimization technique using hash maps?',
      options: [
        'O(n)',
        'O(n log n)',
        'O(n^2)',
        'O(m + n)',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The window optimization technique using hash maps has a time complexity of O(n), where n is the length of the array or string.',
        'This is incorrect because O(n log n) is not the correct time complexity for the window optimization technique.',
        'This is incorrect because O(n^2) is not the correct time complexity for the window optimization technique.',
        'This is incorrect because O(m + n) is not the correct time complexity for the window optimization technique.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const stringBuilderData: LessonContent = {
  title: 'String Builder Pattern',
  content: `<p>
The string builder pattern is an efficient technique for concatenating strings in a way that avoids the performance pitfalls of repeatedly concatenating strings using the '+' operator. 
This pattern is particularly useful when building large strings from smaller parts.
</p>

<ul>
<li><strong>StringBuilder Class:</strong> Many programming languages provide a StringBuilder class that allows for efficient string concatenation.</li>
<li><strong>Appending Strings:</strong> Strings are appended to a buffer, and the final result is constructed only when needed.</li>
<li><strong>Performance Benefits:</strong> Avoids the overhead of creating multiple intermediate string objects, leading to better performance.</li>
</ul>`,
  codeExample: `# StringBuilder Pattern Implementation in Python
class StringBuilder:
    def __init__(self):
        self.buffer = []

    def append(self, string):
        self.buffer.append(string)

    def build(self):
        return ''.join(self.buffer)

# Example Usage
sb = StringBuilder()
sb.append("Hello")
sb.append(", ")
sb.append("World!")
result = sb.build()  # "Hello, World!"`,
  exercises: [
    {
      prompt:
        'Implement the StringBuilder pattern to efficiently concatenate strings. Use the provided code as a reference.',
      initialCode: `# Write your solution here
class StringBuilder:
    def __init__(self):
        self.buffer = []

    def append(self, string):
        self.buffer.append(string)

    def build(self):
        return ''.join(self.buffer)`,
      solution: `class StringBuilder:
    def __init__(self):
        self.buffer = []

    def append(self, string):
        self.buffer.append(string)

    def build(self):
        return ''.join(self.buffer)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'What is the primary advantage of using the StringBuilder pattern for string concatenation?',
      options: [
        'It avoids the overhead of creating multiple intermediate string objects',
        'It increases the time complexity of string concatenation',
        'It is only applicable to fixed-size strings',
        'It is only applicable to variable-size strings',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The StringBuilder pattern avoids the overhead of creating multiple intermediate string objects, leading to better performance.',
        'This is incorrect because the StringBuilder pattern reduces, not increases, the time complexity.',
        'This is incorrect because the StringBuilder pattern can be used for both fixed-size and variable-size strings.',
        'This is incorrect because the StringBuilder pattern can be used for both fixed-size and variable-size strings.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of the following best describes the time complexity of the StringBuilder pattern?',
      options: [
        'O(n)',
        'O(n log n)',
        'O(n^2)',
        'O(m + n)',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The StringBuilder pattern has a time complexity of O(n), where n is the length of the final string.',
        'This is incorrect because O(n log n) is not the correct time complexity for the StringBuilder pattern.',
        'This is incorrect because O(n^2) is not the correct time complexity for the StringBuilder pattern.',
        'This is incorrect because O(m + n) is not the correct time complexity for the StringBuilder pattern.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const trieImplementationData: LessonContent = {
  title: 'Trie Data Structure',
  content: `<p>
The trie (prefix tree) is a tree-like data structure that is used to store a dynamic set of strings. 
Tries are particularly useful for problems involving string prefix matching, autocomplete, and dictionary lookups.
</p>

<ul>
<li><strong>Node Structure:</strong> Each node in the trie represents a character, and the path from the root to the node represents a string.</li>
<li><strong>Insertion:</strong> Strings are inserted into the trie by creating nodes for each character.</li>
<li><strong>Search:</strong> Strings can be searched in the trie by traversing the nodes corresponding to each character.</li>
<li><strong>Applications:</strong> Used in various applications such as autocomplete, spell checking, and IP routing.</li>
</ul>`,
  codeExample: `# Trie Data Structure Implementation
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
        return True`,
  exercises: [
    {
      prompt:
        'Implement the Trie data structure to insert, search, and check for prefixes. Use the provided code as a reference.',
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
        return True`,
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
        return True`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question:
        'What is the primary advantage of using a trie data structure for string matching?',
      options: [
        'It allows for efficient prefix matching and dictionary lookups',
        'It increases the time complexity of string matching',
        'It is only applicable to fixed-size strings',
        'It is only applicable to variable-size strings',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The trie data structure allows for efficient prefix matching and dictionary lookups.',
        'This is incorrect because the trie data structure reduces, not increases, the time complexity.',
        'This is incorrect because the trie data structure can be used for both fixed-size and variable-size strings.',
        'This is incorrect because the trie data structure can be used for both fixed-size and variable-size strings.',
      ],
      difficulty: Difficulty.Advanced,
    },
    {
      question:
        'Which of the following best describes the time complexity of searching for a word in a trie?',
      options: [
        'O(n)',
        'O(n log n)',
        'O(n^2)',
        'O(m + n)',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. Searching for a word in a trie has a time complexity of O(n), where n is the length of the word.',
        'This is incorrect because O(n log n) is not the correct time complexity for searching in a trie.',
        'This is incorrect because O(n^2) is not the correct time complexity for searching in a trie.',
        'This is incorrect because O(m + n) is not the correct time complexity for searching in a trie.',
      ],
      difficulty: Difficulty.Advanced,
    },
  ],
};

const suffixTreeData: LessonContent = {
  title: 'Suffix Trees',
  content: `<p>
Suffix trees are a powerful data structure for solving various string problems, including substring search, longest common substring, and more. 
A suffix tree is a compressed trie of all the suffixes of a given string.
</p>

<ul>
<li><strong>Construction:</strong> Building a suffix tree involves inserting all suffixes of a string into a trie and then compressing it.</li>
<li><strong>Applications:</strong> Used in various applications such as pattern matching, data compression, and bioinformatics.</li>
<li><strong>Efficiency:</strong> Suffix trees provide efficient solutions to many string problems with linear time complexity.</li>
</ul>`,
  codeExample: `# Suffix Tree Implementation
class SuffixTreeNode:
    def __init__(self):
        self.children = {}
        self.suffix_link = None
        self.start = -1
        self.end = -1

class SuffixTree:
    def __init__(self, text):
        self.text = text
        self.root = SuffixTreeNode()
        self.active_node = self.root
        self.active_edge = -1
        self.active_length = 0
        self.remaining = 0
        self.end = -1
        self.build_tree()

    def build_tree(self):
        for i in range(len(self.text)):
            self.extend_tree(i)

    def extend_tree(self, pos):
        pass  # Detailed implementation of tree extension is complex and beyond the scope of this example`,
  exercises: [
    {
      prompt:
        'Implement the construction of a suffix tree for a given string. Use the provided code as a reference.',
      initialCode: `# Write your solution here
class SuffixTreeNode:
    def __init__(self):
        self.children = {}
        self.suffix_link = None
        self.start = -1
        self.end = -1

class SuffixTree:
    def __init__(self, text):
        self.text = text
        self.root = SuffixTreeNode()
        self.active_node = self.root
        self.active_edge = -1
        self.active_length = 0
        self.remaining = 0
        self.end = -1
        self.build_tree()

    def build_tree(self):
        for i in range(len(self.text)):
            self.extend_tree(i)

    def extend_tree(self, pos):
        pass  # Detailed implementation of tree extension is complex and beyond the scope of this example`,
      solution: `class SuffixTreeNode:
    def __init__(self):
        self.children = {}
        self.suffix_link = None
        self.start = -1
        self.end = -1

class SuffixTree:
    def __init__(self, text):
        self.text = text
        self.root = SuffixTreeNode()
        self.active_node = self.root
        self.active_edge = -1
        self.active_length = 0
        self.remaining = 0
        self.end = -1
        self.build_tree()

    def build_tree(self):
        for i in range(len(self.text)):
            self.extend_tree(i)

    def extend_tree(self, pos):
        pass  # Detailed implementation of tree extension is complex and beyond the scope of this example`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question:
        'What is the primary advantage of using a suffix tree for string problems?',
      options: [
        'It provides efficient solutions to many string problems with linear time complexity',
        'It increases the time complexity of string problems',
        'It is only applicable to fixed-size strings',
        'It is only applicable to variable-size strings',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. Suffix trees provide efficient solutions to many string problems with linear time complexity.',
        'This is incorrect because suffix trees reduce, not increase, the time complexity.',
        'This is incorrect because suffix trees can be used for both fixed-size and variable-size strings.',
        'This is incorrect because suffix trees can be used for both fixed-size and variable-size strings.',
      ],
      difficulty: Difficulty.Advanced,
    },
    {
      question:
        'Which of the following best describes the time complexity of constructing a suffix tree?',
      options: [
        'O(n)',
        'O(n log n)',
        'O(n^2)',
        'O(m + n)',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. Constructing a suffix tree has a time complexity of O(n), where n is the length of the string.',
        'This is incorrect because O(n log n) is not the correct time complexity for constructing a suffix tree.',
        'This is incorrect because O(n^2) is not the correct time complexity for constructing a suffix tree.',
        'This is incorrect because O(m + n) is not the correct time complexity for constructing a suffix tree.',
      ],
      difficulty: Difficulty.Advanced,
    },
  ],
};

const inPlaceOperationsData: LessonContent = {
  title: 'In-place String Operations',
  content: `<p>
In-place string operations involve modifying a string without using additional space. 
This technique is particularly useful when dealing with large strings and limited memory resources.
</p>

<ul>
<li><strong>Reverse a String:</strong> Reversing a string in-place by swapping characters.</li>
<li><strong>Remove Duplicates:</strong> Removing duplicate characters from a string in-place.</li>
<li><strong>Rotate a String:</strong> Rotating a string in-place by a given number of positions.</li>
<li><strong>Applications:</strong> Used in various applications such as text processing, data compression, and more.</li>
</ul>`,
  codeExample: `# In-place String Operations Implementation
def reverse_string(s):
    s = list(s)
    left, right = 0, len(s) - 1
    while left < right:
        s[left], s[right] = s[right], s[left]
        left += 1
        right -= 1
    return ''.join(s)

def remove_duplicates(s):
    s = list(s)
    if not s:
        return s
    write_index = 0
    for i in range(1, len(s)):
        if s[i] != s[write_index]:
            write_index += 1
            s[write_index] = s[i]
    return ''.join(s[:write_index + 1])

def rotate_string(s, k):
    s = list(s)
    n = len(s)
    k = k % n
    reverse_string(s, 0, n - 1)
    reverse_string(s, 0, k - 1)
    reverse_string(s, k, n - 1)
    return ''.join(s)

def reverse_string(s, left, right):
    while left < right:
        s[left], s[right] = s[right], s[left]
        left += 1
        right -= 1`,
  exercises: [
    {
      prompt:
        'Implement the in-place string reversal algorithm to reverse a given string. Use the provided code as a reference.',
      initialCode: `# Write your solution here
def reverse_string(s):
    s = list(s)
    left, right = 0, len(s) - 1
    while left < right:
        s[left], s[right] = s[right], s[left]
        left += 1
        right -= 1
    return ''.join(s)`,
      solution: `def reverse_string(s):
    s = list(s)
    left, right = 0, len(s) - 1
    while left < right:
        s[left], s[right] = s[right], s[left]
        left += 1
        right -= 1
    return ''.join(s)`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Implement the in-place duplicate removal algorithm to remove duplicate characters from a given string. Use the provided code as a reference.',
      initialCode: `# Write your solution here
def remove_duplicates(s):
    s = list(s)
    if not s:
        return s
    write_index = 0
    for i in range(1, len(s)):
        if s[i] != s[write_index]:
            write_index += 1
            s[write_index] = s[i]
    return ''.join(s[:write_index + 1])`,
      solution: `def remove_duplicates(s):
    s = list(s)
    if not s:
        return s
    write_index = 0
    for i in range(1, len(s)):
        if s[i] != s[write_index]:
            write_index += 1
            s[write_index] = s[i]
    return ''.join(s[:write_index + 1])`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'What is the primary advantage of performing in-place string operations?',
      options: [
        'It reduces the need for additional space, leading to better memory efficiency',
        'It increases the time complexity of string operations',
        'It is only applicable to fixed-size strings',
        'It is only applicable to variable-size strings',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. In-place string operations reduce the need for additional space, leading to better memory efficiency.',
        'This is incorrect because in-place operations do not necessarily increase the time complexity.',
        'This is incorrect because in-place operations can be used for both fixed-size and variable-size strings.',
        'This is incorrect because in-place operations can be used for both fixed-size and variable-size strings.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of the following best describes the time complexity of in-place string reversal?',
      options: [
        'O(n)',
        'O(n log n)',
        'O(n^2)',
        'O(m + n)',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. In-place string reversal has a time complexity of O(n), where n is the length of the string.',
        'This is incorrect because O(n log n) is not the correct time complexity for in-place string reversal.',
        'This is incorrect because O(n^2) is not the correct time complexity for in-place string reversal.',
        'This is incorrect because O(m + n) is not the correct time complexity for in-place string reversal.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const memoryEfficientData: LessonContent = {
  title: 'Memory-Efficient Techniques',
  content: `<p>
Memory-efficient techniques for string operations focus on optimizing memory usage while performing string manipulations. 
This is particularly important when dealing with large strings or limited memory resources.
</p>

<ul>
<li><strong>String Interning:</strong> Reusing string literals to save memory.</li>
<li><strong>Memory-Mapped Files:</strong> Using memory-mapped files to process large strings without loading the entire string into memory.</li>
<li><strong>Compression:</strong> Compressing strings to reduce memory usage.</li>
<li><strong>Applications:</strong> Used in various applications such as text processing, data storage, and more.</li>
</ul>`,
  codeExample: `# Memory-Efficient Techniques Implementation
import sys

# String Interning Example
a = sys.intern("hello")
b = sys.intern("hello")
print(a is b)  # True, both a and b refer to the same memory location

# Memory-Mapped Files Example
import mmap

def process_large_file(file_path):
    with open(file_path, 'r+b') as f:
        mmapped_file = mmap.mmap(f.fileno(), 0)
        # Process the mmapped file
        mmapped_file.close()

# Compression Example
import zlib

def compress_string(s):
    return zlib.compress(s.encode())

def decompress_string(compressed):
    return zlib.decompress(compressed).decode()`,
  exercises: [
    {
      prompt:
        'Implement string interning to reuse string literals and save memory. Use the provided code as a reference.',
      initialCode: `# Write your solution here
import sys

# String Interning Example
a = sys.intern("hello")
b = sys.intern("hello")
print(a is b)  # True, both a and b refer to the same memory location`,
      solution: `import sys

# String Interning Example
a = sys.intern("hello")
b = sys.intern("hello")
print(a is b)  # True, both a and b refer to the same memory location`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Implement memory-mapped files to process large strings without loading the entire string into memory. Use the provided code as a reference.',
      initialCode: `# Write your solution here
import mmap

def process_large_file(file_path):
    with open(file_path, 'r+b') as f:
        mmapped_file = mmap.mmap(f.fileno(), 0)
        # Process the mmapped file
        mmapped_file.close()`,
      solution: `import mmap

def process_large_file(file_path):
    with open(file_path, 'r+b') as f:
        mmapped_file = mmap.mmap(f.fileno(), 0)
        # Process the mmapped file
        mmapped_file.close()`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'What is the primary advantage of using string interning for memory efficiency?',
      options: [
        'It reuses string literals, reducing memory usage',
        'It increases the time complexity of string operations',
        'It is only applicable to fixed-size strings',
        'It is only applicable to variable-size strings',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. String interning reuses string literals, reducing memory usage.',
        'This is incorrect because string interning does not necessarily increase the time complexity.',
        'This is incorrect because string interning can be used for both fixed-size and variable-size strings.',
        'This is incorrect because string interning can be used for both fixed-size and variable-size strings.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of the following best describes the time complexity of using memory-mapped files for processing large strings?',
      options: [
        'O(n)',
        'O(n log n)',
        'O(n^2)',
        'O(m + n)',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. Using memory-mapped files has a time complexity of O(n), where n is the length of the string.',
        'This is incorrect because O(n log n) is not the correct time complexity for using memory-mapped files.',
        'This is incorrect because O(n^2) is not the correct time complexity for using memory-mapped files.',
        'This is incorrect because O(m + n) is not the correct time complexity for using memory-mapped files.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const unicodeHandlingData: LessonContent = {
  title: 'Unicode String Handling',
  content: `<p>
Unicode string handling involves working with strings that contain a wide range of characters, including special characters and symbols from various languages. 
Unicode is a standard for encoding, representing, and handling text in different writing systems.
</p>

<ul>
<li><strong>Unicode Encoding:</strong> Understanding different Unicode encoding schemes like UTF-8, UTF-16, and UTF-32.</li>
<li><strong>Normalization:</strong> Normalizing Unicode strings to ensure consistent representation of characters.</li>
<li><strong>Special Characters:</strong> Handling special characters and symbols that are not part of the basic ASCII set.</li>
<li><strong>Applications:</strong> Used in various applications such as multilingual text processing, internationalization, and localization.</li>
</ul>`,
  codeExample: `# Unicode String Handling Implementation
import unicodedata

# Unicode Encoding Example
text = "Hello, World! 👋"
encoded_utf8 = text.encode('utf-8')
encoded_utf16 = text.encode('utf-16')
encoded_utf32 = text.encode('utf-32')

# Normalization Example
def normalize_unicode(text):
    return unicodedata.normalize('NFC', text)

# Special Characters Example
def count_special_chars(text):
    special_chars = [char for char in text if unicodedata.category(char).startswith('S')]
    return len(special_chars)`,
  exercises: [
    {
      prompt:
        'Implement Unicode encoding to convert a string to UTF-8, UTF-16, and UTF-32. Use the provided code as a reference.',
      initialCode: `# Write your solution here
import unicodedata

# Unicode Encoding Example
text = "Hello, World! 👋"
encoded_utf8 = text.encode('utf-8')
encoded_utf16 = text.encode('utf-16')
encoded_utf32 = text.encode('utf-32')`,
      solution: `import unicodedata

# Unicode Encoding Example
text = "Hello, World! 👋"
encoded_utf8 = text.encode('utf-8')
encoded_utf16 = text.encode('utf-16')
encoded_utf32 = text.encode('utf-32')`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Implement Unicode normalization to ensure consistent representation of characters. Use the provided code as a reference.',
      initialCode: `# Write your solution here
import unicodedata

def normalize_unicode(text):
    return unicodedata.normalize('NFC', text)`,
      solution: `import unicodedata

def normalize_unicode(text):
    return unicodedata.normalize('NFC', text)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'What is the primary advantage of using Unicode encoding for string handling?',
      options: [
        'It supports a wide range of characters and symbols from various languages',
        'It increases the time complexity of string operations',
        'It is only applicable to fixed-size strings',
        'It is only applicable to variable-size strings',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. Unicode encoding supports a wide range of characters and symbols from various languages.',
        'This is incorrect because Unicode encoding does not necessarily increase the time complexity.',
        'This is incorrect because Unicode encoding can be used for both fixed-size and variable-size strings.',
        'This is incorrect because Unicode encoding can be used for both fixed-size and variable-size strings.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of the following best describes the time complexity of Unicode normalization?',
      options: [
        'O(n)',
        'O(n log n)',
        'O(n^2)',
        'O(m + n)',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. Unicode normalization has a time complexity of O(n), where n is the length of the string.',
        'This is incorrect because O(n log n) is not the correct time complexity for Unicode normalization.',
        'This is incorrect because O(n^2) is not the correct time complexity for Unicode normalization.',
        'This is incorrect because O(m + n) is not the correct time complexity for Unicode normalization.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const binaryStringsData: LessonContent = {
  title: 'Binary Strings',
  content: `<p>
Binary strings involve operating on strings that represent binary data, such as sequences of bits. 
This includes tasks like bit manipulation, binary arithmetic, and working with binary representations of data.
</p>

<ul>
<li><strong>Bit Manipulation:</strong> Performing operations like AND, OR, XOR, shifting, and masking on binary strings.</li>
<li><strong>Binary Arithmetic:</strong> Performing arithmetic operations on binary strings.</li>
<li><strong>Binary Representation:</strong> Converting between binary strings and other data types.</li>
<li><strong>Applications:</strong> Used in various applications such as cryptography, data compression, and low-level programming.</li>
</ul>`,
  codeExample: `# Binary Strings Implementation
def bitwise_and(a, b):
    return a & b

def bitwise_or(a, b):
    return a | b

def bitwise_xor(a, b):
    return a ^ b

def left_shift(a, shift):
    return a << shift

def right_shift(a, shift):
    return a >> shift

def binary_to_decimal(binary_str):
    return int(binary_str, 2)

def decimal_to_binary(decimal):
    return bin(decimal)[2:]`,
  exercises: [
    {
      prompt:
        'Implement bitwise operations (AND, OR, XOR) on binary strings. Use the provided code as a reference.',
      initialCode: `# Write your solution here
def bitwise_and(a, b):
    return a & b

def bitwise_or(a, b):
    return a | b

def bitwise_xor(a, b):
    return a ^ b`,
      solution: `def bitwise_and(a, b):
    return a & b

def bitwise_or(a, b):
    return a | b

def bitwise_xor(a, b):
    return a ^ b`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Implement binary to decimal and decimal to binary conversion. Use the provided code as a reference.',
      initialCode: `# Write your solution here
def binary_to_decimal(binary_str):
    return int(binary_str, 2)

def decimal_to_binary(decimal):
    return bin(decimal)[2:]`,
      solution: `def binary_to_decimal(binary_str):
    return int(binary_str, 2)

def decimal_to_binary(decimal):
    return bin(decimal)[2:]`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'What is the primary advantage of using binary strings for bit manipulation?',
      options: [
        'It allows for efficient low-level operations on binary data',
        'It increases the time complexity of string operations',
        'It is only applicable to fixed-size strings',
        'It is only applicable to variable-size strings',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. Binary strings allow for efficient low-level operations on binary data.',
        'This is incorrect because binary strings do not necessarily increase the time complexity.',
        'This is incorrect because binary strings can be used for both fixed-size and variable-size strings.',
        'This is incorrect because binary strings can be used for both fixed-size and variable-size strings.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of the following best describes the time complexity of bitwise operations on binary strings?',
      options: [
        'O(n)',
        'O(n log n)',
        'O(n^2)',
        'O(m + n)',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. Bitwise operations on binary strings have a time complexity of O(n), where n is the length of the string.',
        'This is incorrect because O(n log n) is not the correct time complexity for bitwise operations.',
        'This is incorrect because O(n^2) is not the correct time complexity for bitwise operations.',
        'This is incorrect because O(m + n) is not the correct time complexity for bitwise operations.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};
const stringLessons: Record<string, LessonContent> = {
  'string-basics': stringBasicsData,
  'string-creation': stringCreationData,
  'string-immutability': stringImmutabilityData,
  'string-access': stringAccessData,
  'string-methods': stringMethodsData,
  'string-concatenation': stringConcatenationData,
  'string-comparison': stringComparisonData,
  'string-slicing': stringSlicingData,
  'case-manipulation': caseManipulationData,
  'string-formatting': stringFormattingData,
  'string-replacement': stringReplacementData,
  'basic-searching': basicSearchingData,
  'pattern-matching': patternMatchingData,
  'regex-basics': regexBasicsData,
  'string-reversal': stringReversalData,
  'palindrome-check': palindromeCheckData,
  'anagram-check': anagramCheckData,
  'kmp-algorithm': kmpAlgorithmData,
  'rabin-karp': rabinKarpData,
  'z-algorithm': zAlgorithmData,
  'suffix-arrays': suffixArraysData,
  'longest-common': longestCommonData,
  'string-matching': stringMatchingVariationsData,
  'edit-distance': editDistanceData,
  'basic-compression': basicCompressionData,
  'run-length': runLengthData,
  'sliding-window': slidingWindowData,
  'substring-problems': substringProblemsData,
  'window-optimization': windowOptimizationData,
  'string-builder': stringBuilderData,
  'trie-implementation': trieImplementationData,
  'suffix-tree': suffixTreeData,
  'in-place-operations': inPlaceOperationsData,
  'memory-efficient': memoryEfficientData,
  'unicode-handling': unicodeHandlingData,
  'binary-strings': binaryStringsData,
}
export const stringLessonsTab: LessonsTab = {
  curriculum: stringCurriculum,
  lessons: stringLessons,
};
