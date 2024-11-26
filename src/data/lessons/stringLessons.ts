import { Difficulty } from '@/common/commonConcept';
import { Curriculum, LessonContent, LessonsTab, PriorityLevel } from '@/common/commonLesson';
const stringCurriculum: Curriculum = {
  title: 'String Curriculum',
  description: 'A comprehensive guide to mastering string operations and string-based algorithms for technical interviews',
  sections: [
    {
      id: 1,
      title: 'String Fundamentals',
      topics: [
        {
          id: 'string-basics',
          title: 'String Basics',
          description: 'Understanding string properties, characteristics, and fundamental operations',
          priority: PriorityLevel.Essential
        },
        {
          id: 'string-immutability',
          title: 'String Immutability and Performance',
          description: 'Understanding string immutability and its performance implications',
          priority: PriorityLevel.Important
        },
        {
          id: 'interview-patterns',
          title: 'Common String Interview Patterns',
          description: 'Key problem-solving techniques and approaches for string-based interview questions',
          priority: PriorityLevel.Essential
        },
        {
          id: 'complexity-analysis',
          title: 'Time/Space Complexity Analysis',
          description: 'Analyzing performance of string operations and algorithms',
          priority: PriorityLevel.Essential
        }
      ]
    },
    {
      id: 2,
      title: 'String Operations and Manipulation',
      topics: [
        {
          id: 'string-access',
          title: 'Accessing and Manipulating Characters',
          description: 'Methods for accessing, modifying, and working with string characters',
          priority: PriorityLevel.Essential
        },
        {
          id: 'string-methods',
          title: 'Essential String Methods',
          description: 'Core string methods with their time and space complexities',
          priority: PriorityLevel.Essential
        },
        {
          id: 'string-concatenation',
          title: 'Efficient String Combination',
          description: 'Techniques for combining strings with optimal performance',
          priority: PriorityLevel.Important
        },
        {
          id: 'in-place-operations',
          title: 'In-place String Manipulation',
          description: 'Performing string operations without extra space',
          priority: PriorityLevel.Important
        }
      ]
    },
    {
      id: 3,
      title: 'String Searching and Matching',
      topics: [
        {
          id: 'basic-searching',
          title: 'Substring and Character Searching',
          description: 'Efficient techniques for finding substrings and characters',
          priority: PriorityLevel.Essential
        },
        {
          id: 'pattern-matching',
          title: 'Advanced Pattern Matching',
          description: 'Sophisticated techniques for complex string matching',
          priority: PriorityLevel.Important
        },
        {
          id: 'sliding-window',
          title: 'Sliding Window Technique',
          description: 'Using sliding window for string searching and optimization',
          priority: PriorityLevel.Essential
        }
      ]
    },
    {
      id: 4,
      title: 'Common String Algorithms',
      topics: [
        {
          id: 'string-reversal',
          title: 'String Reversal Techniques',
          description: 'Multiple approaches to reversing strings efficiently',
          priority: PriorityLevel.Essential
        },
        {
          id: 'palindrome-check',
          title: 'Palindrome Detection',
          description: 'Different methods for identifying and working with palindromes',
          priority: PriorityLevel.Essential
        },
        {
          id: 'anagram-check',
          title: 'Anagram and Permutation Problems',
          description: 'Techniques for detecting and solving anagram-related challenges',
          priority: PriorityLevel.Essential
        }
      ]
    },
    {
      id: 5,
      title: 'Advanced String Algorithms',
      topics: [
        {
          id: 'kmp-algorithm',
          title: 'KMP Pattern Matching Algorithm',
          description: 'Understanding and implementing Knuth-Morris-Pratt algorithm',
          priority: PriorityLevel.Beneficial
        },
        {
          id: 'rabin-karp',
          title: 'Rabin-Karp String Matching',
          description: 'Hash-based efficient pattern matching technique',
          priority: PriorityLevel.Beneficial
        },
        {
          id: 'longest-common',
          title: 'Longest Common Substring/Subsequence',
          description: 'Solving complex string similarity problems with dynamic programming',
          priority: PriorityLevel.Important
        }
      ]
    },
    {
      id: 6,
      title: 'String Pattern and Transformation Problems',
      topics: [
        {
          id: 'string-parsing',
          title: 'Complex String Parsing',
          description: 'Techniques for handling advanced string parsing scenarios',
          priority: PriorityLevel.Important
        },
        {
          id: 'edit-distance',
          title: 'Edit Distance and String Transformations',
          description: 'Calculating string similarity and minimal transformation strategies',
          priority: PriorityLevel.Important
        },
        {
          id: 'compression-techniques',
          title: 'String Compression Methods',
          description: 'Implementing efficient string compression algorithms',
          priority: PriorityLevel.Important
        }
      ]
    },
    {
      id: 7,
      title: 'Advanced String Concepts',
      topics: [
        {
          id: 'string-builder',
          title: 'String Builder and Optimization',
          description: 'Efficient string concatenation and memory management techniques',
          priority: PriorityLevel.Important
        },
        {
          id: 'trie-basics',
          title: 'Trie for String Problems',
          description: 'Basic trie implementations and string-related applications',
          priority: PriorityLevel.Beneficial
        },
        {
          id: 'binary-string-operations',
          title: 'Binary String and Bit Manipulation',
          description: 'Advanced techniques for working with binary string representations',
          priority: PriorityLevel.Beneficial
        }
      ]
    }
  ]
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

const commonStringInterviewPatternsData: LessonContent = {
  title: 'Common String Interview Patterns',
  content: `<p>
  Strings are a common data type in programming interviews. Understanding various patterns and techniques for manipulating strings can significantly improve your problem-solving skills. This lesson covers some of the most frequently encountered patterns in string-based interview questions.
  </p>
  <h3>Two-Pointer Technique</h3>
  <p>
  The two-pointer technique is often used for problems involving palindromes, reversing strings, or finding duplicates. It involves using two pointers that move through the string in a specific manner to solve the problem efficiently.
  </p>
  <h3>Hash Maps for Frequency Counting</h3>
  <p>
  Hash maps are useful for keeping track of character frequencies, which is essential for solving problems like anagram checks or finding the most frequent character in a string.
  </p>
  <h3>Sliding Window for Substring Problems</h3>
  <p>
  The sliding window technique is effective for problems that require finding a substring that satisfies certain conditions, such as the longest substring without repeating characters.
  </p>
  <h3>Dynamic Programming for String Transformations</h3>
  <p>
  Dynamic programming is a powerful tool for solving problems that involve transforming one string into another, such as calculating the edit distance between two strings.
  </p>`,
  codeExample: `// Two-Pointer Technique: Check if a string is a palindrome
function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}`,
  exercises: [
    {
      prompt: 'Implement a function to remove duplicates from a sorted string using the two-pointer technique.',
      initialCode: `function removeDuplicates(s: string): string {
  // Write your code here
}`,
      solution: `function removeDuplicates(s: string): string {
  if (s.length === 0) return '';
  let result = '';
  let left = 0;
  let right = 1;
  while (right < s.length) {
    if (s[left] !== s[right]) {
      result += s[left];
      left = right;
    }
    right++;
  }
  result += s[left];
  return result;
}`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which pattern is best suited for finding the longest substring without repeating characters?',
      options: ['Two-Pointer Technique', 'Hash Maps', 'Sliding Window', 'Dynamic Programming'],
      correctAnswer: 2,
      explanations: [
        'Incorrect. The two-pointer technique is not the best fit for this problem.',
        'Incorrect. While hash maps can be used, the sliding window is more appropriate.',
        'Correct. The sliding window technique efficiently solves this problem.',
        'Incorrect. Dynamic programming is not necessary for this problem.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const timeSpaceComplexityAnalysisData: LessonContent = {
  title: 'Time/Space Complexity Analysis',
  content: `<p>
  Analyzing the time and space complexity of algorithms is crucial for optimizing performance. This lesson introduces Big O notation and demonstrates how to analyze the complexity of string operations.
  </p>
  <h3>Time Complexity</h3>
  <p>
  Time complexity measures the amount of time an algorithm takes to run, relative to the size of the input. It is usually expressed using Big O notation.
  </p>
  <h3>Space Complexity</h3>
  <p>
  Space complexity measures the amount of memory an algorithm uses relative to the size of the input.
  </p>
  <h3>Examples of Complexity Analysis</h3>
  <p>
  We will analyze the complexity of common string operations such as concatenation, substring extraction, and traversal.
  </p>`,
  codeExample: `// Example of O(n) time complexity
function countCharacters(s: string): { [key: string]: number } {
  const count: { [key: string]: number } = {};
  for (const char of s) {
    count[char] = (count[char] || 0) + 1;
  }
  return count;
}`,
  exercises: [
    {
      prompt: 'Analyze the time and space complexity of the provided function.',
      initialCode: `function countVowels(s: string): number {
  const vowels = 'aeiou';
  let count = 0;
  for (const char of s) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}`,
      solution: `Time Complexity: O(n)
Space Complexity: O(1)`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'What is the time complexity of the function that checks if a string is a palindrome using the two-pointer technique?',
      options: ['O(1)', 'O(n)', 'O(n^2)', 'O(log n)'],
      correctAnswer: 1,
      explanations: [
        'Incorrect. O(1) implies constant time, which is not the case here.',
        'Correct. The function runs in linear time relative to the length of the string.',
        'Incorrect. O(n^2) would imply a nested loop, which is not used here.',
        'Incorrect. O(log n) is typical for divide-and-conquer algorithms, not for this scenario.',
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

const stringParsingData: LessonContent = {
  title: 'Complex String Parsing',
  content: `
  <p>
  String parsing involves breaking down strings into meaningful components. This lesson covers advanced parsing techniques, including handling nested structures and escape characters.
  </p>
  <h3>Nested Structures</h3>
  <p>
  Parsing strings with nested elements, such as parentheses, requires careful tracking of openings and closings.
  </p>
  <h3>Escape Characters</h3>
  <p>
  Understanding and managing escape sequences is crucial for accurate string interpretation.
  </p>
  `,
  codeExample: `function checkBalancedParentheses(s: string): boolean {
    let stack = [];
    for (let char of s) {
        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            if (stack.length === 0 || stack.pop() !== '(') {
                return false;
            }
        }
    }
    return stack.length === 0;
  }`,
  exercises: [
    {
      prompt: 'Implement a function to evaluate a simple arithmetic expression string.',
      initialCode: `function evaluateExpression(expr: string): number {
  // Your code here
}`,
      solution: `function evaluateExpression(expr: string): number {
  // Implementation to evaluate arithmetic expressions
}`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement a function to handle escape characters in a string.',
      initialCode: `function handleEscapeCharacters(s: string): string {
  // Your code here
}`,
      solution: `function handleEscapeCharacters(s: string): string {
  // Implementation to handle escape characters
}`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which data structure is commonly used to check for balanced parentheses?',
      options: ['Array', 'Stack', 'Queue', 'LinkedList'],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Array is a general data structure.',
        'Correct. Stack is used to track opening parentheses.',
        'Incorrect. Queue is not suitable for this purpose.',
        'Incorrect. LinkedList is not necessary here.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const compressionTechniquesData: LessonContent = {
  title: 'String Compression Methods',
  content: `
  <p>
  String compression reduces the size of strings, improving storage and transmission efficiency. This lesson explores Run-Length Encoding and Huffman Coding.
  </p>
  <h3>Run-Length Encoding (RLE)</h3>
  <p>
  A simple compression technique that replaces consecutive data with a single data value and count.
  </p>
  <h3>Huffman Coding</h3>
  <p>
  An efficient prefix coding method for lossless data compression.
  </p>
  `,
  codeExample: "function runLengthEncode(s: string): string {\n  if (!s) return '';\n  let result = '';\n  let count = 1;\n  for (let i = 1; i < s.length; i++) {\n      if (s[i] === s[i - 1]) {\n          count++;\n      } else {\n          result += `${count}${s[i - 1]}`;\n          count = 1;\n      }\n  }\n  result += `${count}${s[s.length - 1]}`;\n  return result;\n}",
  exercises: [
    {
      prompt: 'Implement Run-Length Encoding and Decoding functions.',
      initialCode: `function runLengthEncode(s: string): string {
  // Your code here
}

function runLengthDecode(s: string): string {
  // Your code here
}`,
      solution: `function runLengthEncode(s: string): string {
  // Implementation of Run-Length Encoding
}

function runLengthDecode(s: string): string {
  // Implementation of Run-Length Decoding
}`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement a simple Huffman Coding algorithm.',
      initialCode: `function huffmanEncode(data: { [key: string]: number }): string {
  // Your code here
}`,
      solution: `function huffmanEncode(data: { [key: string]: number }): string {
  // Implementation of Huffman Coding
}`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'Which compression method uses frequency of characters to build an optimal prefix tree?',
      options: ['RLE', 'Huffman Coding', 'ZIP', 'None of the above'],
      correctAnswer: 1,
      explanations: [
        'Incorrect. RLE does not use frequency for tree building.',
        'Correct. Huffman Coding uses frequency to build an optimal tree.',
        'Incorrect. ZIP uses a combination of methods.',
        'Incorrect. Huffman Coding does use frequency.',
      ],
      difficulty: Difficulty.Intermediate,
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

const trieBasicsData: LessonContent = {
  title: 'Trie for String Problems',
  content: `
  <p>
  A trie, or prefix tree, is a tree data structure used to store a dynamic set of strings, where the keys are usually strings. Each node in the trie represents a single character of the key. Tries are commonly used for autocomplete, prefix searches, and spell checks.
  </p>
  <h3>Trie Structure</h3>
  <p>
  - Root node is empty.<br>
  - Each edge represents a character.<br>
  - Each path from root to a leaf node represents a string.
  </p>
  <h3>Basic Operations</h3>
  <p>
  - Insertion: Inserting a string into the trie.<br>
  - Search: Searching for a string in the trie.<br>
  - Prefix Search: Finding all strings with a given prefix.
  </p>
  `,
  codeExample: `class TrieNode {
    children: { [key: string]: TrieNode };
    isEndOfWord: boolean;

    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }

  class Trie {
    root: TrieNode;

    constructor() {
      this.root = new TrieNode();
    }

    insert(word: string): void {
      let node = this.root;
      for (const char of word) {
        if (!node.children[char]) {
          node.children[char] = new TrieNode();
        }
        node = node.children[char];
      }
      node.isEndOfWord = true;
    }

    search(word: string): boolean {
      let node = this.root;
      for (const char of word) {
        if (!node.children[char]) {
          return false;
        }
        node = node.children[char];
      }
      return node.isEndOfWord;
    }

    startsWith(prefix: string): boolean {
      let node = this.root;
      for (const char of prefix) {
        if (!node.children[char]) {
          return false;
        }
        node = node.children[char];
      }
      return true;
    }
  }`,
  exercises: [
    {
      prompt: 'Implement the insert and search operations for a trie.',
      initialCode: `class TrieNode {
    children: { [key: string]: TrieNode };
    isEndOfWord: boolean;

    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }

  class Trie {
    root: TrieNode;

    constructor() {
      this.root = new TrieNode();
    }

    // Implement insert and search methods here
  }`,
      solution: `// Complete implementation of Trie with insert and search methods`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Extend the trie to support prefix search.',
      initialCode: `// Use the previous Trie implementation and extend it with startsWith method`,
      solution: `// Complete implementation of Trie with startsWith method`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the time complexity of inserting a string into a trie?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n * m)'],
      correctAnswer: 2,
      explanations: [
        'Incorrect. It depends on the length of the string.',
        'Incorrect. It is not logarithmic.',
        'Correct. The time complexity is O(n) where n is the length of the string.',
        'Incorrect. O(n * m) is not applicable here.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'Which of the following is a common application of tries?',
      options: ['Spell check', 'Binary search', 'Sorting', 'Graph traversal'],
      correctAnswer: 0,
      explanations: [
        'Correct. Tries are commonly used for spell check.',
        'Incorrect. Binary search is not related to tries.',
        'Incorrect. Tries are not used for sorting.',
        'Incorrect. Tries are not typically used for graph traversal.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const binaryStringOperationsData: LessonContent = {
  title: 'Binary String and Bit Manipulation',
  content: `
  <p>
  Binary strings consist of sequences of 0s and 1s and are fundamental in computer science for representing data at the lowest level. Bit manipulation involves working directly with the binary representation of data.
  </p>
  <h3>Bit Manipulation Techniques</h3>
  <p>
  - Bitwise operators: AND, OR, XOR, NOT, shift operators.<br>
  - Common operations: checking if a bit is set, toggling a bit, bitwise shifts.
  </p>
  <h3>Applications</h3>
  <p>
  - Optimizing algorithms by working directly with bits.<br>
  - Manipulating flags and permissions.<br>
  - Solving problems that require efficient handling of binary data.
  </p>
  `,
  codeExample: `// Check if a number is even using bitwise AND
  function isEven(num: number): boolean {
    return (num & 1) === 0;
  }

  // Swap two numbers without a temporary variable
  function swapNumbers(a: number, b: number): [number, number] {
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    return [a, b];
  }`,
  exercises: [
    {
      prompt: 'Implement a function to check if a given bit is set in a number.',
      initialCode: `function isBitSet(num: number, bitPosition: number): boolean {
  // Implement the function here
}`,
      solution: `function isBitSet(num: number, bitPosition: number): boolean {
  return (num & (1 << bitPosition)) !== 0;
}`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Write a function to count the number of set bits in a binary representation of a number.',
      initialCode: `function countSetBits(num: number): number {
  // Implement the function here
}`,
      solution: `function countSetBits(num: number): number {
  let count = 0;
  while (num) {
    num &= num - 1;
    count++;
  }
  return count;
}`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'What is the result of the bitwise AND operation between 5 and 3?',
      options: ['0', '1', '5', '3'],
      correctAnswer: 3,
      explanations: [
        'Incorrect. 5 in binary is 101 and 3 is 011. 101 & 011 = 001 which is 1.',
        'Correct. The result is 1.',
        'Incorrect. The result is not 5.',
        'Incorrect. The result is not 3.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'Which bitwise operator can be used to toggle a specific bit in a number?',
      options: ['AND', 'OR', 'XOR', 'NOT'],
      correctAnswer: 2,
      explanations: [
        'Incorrect. AND is used for checking bits.',
        'Incorrect. OR is used for setting bits.',
        'Correct. XOR can be used to toggle a specific bit.',
        'Incorrect. NOT is used for inverting all bits.',
      ],
      difficulty: Difficulty.Beginner,
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


const stringLessons: Record<string, LessonContent> = {
  'string-basics': stringBasicsData,
  'string-creation': stringCreationData,
  'string-immutability': stringImmutabilityData,
  'interview-patterns': commonStringInterviewPatternsData,
  'complexity-analysis': timeSpaceComplexityAnalysisData,
  'string-access': stringAccessData,
  'string-methods': stringMethodsData,
  'string-concatenation': stringConcatenationData,
  'in-place-operations': inPlaceOperationsData,
  'basic-searching': basicSearchingData,
  'pattern-matching': patternMatchingData,
  'sliding-window': slidingWindowData,
  'string-reversal': stringReversalData,
  'palindrome-check': palindromeCheckData,
  'anagram-check': anagramCheckData,
  'kmp-algorithm': kmpAlgorithmData,
  'rabin-karp': rabinKarpData,
  'longest-common': longestCommonData,
  'string-parsing': stringParsingData,
  'edit-distance': editDistanceData,
  'compression-techniques': compressionTechniquesData,
  'string-builder': stringBuilderData,
  'trie-basics': trieBasicsData,
  'binary-string-operations': binaryStringOperationsData,
}

export const stringLessonsTab: LessonsTab = {
  curriculum: stringCurriculum,
  lessons: stringLessons,
};
