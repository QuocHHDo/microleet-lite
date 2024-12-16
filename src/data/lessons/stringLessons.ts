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
Strings are fundamental data structures that represent sequences of characters. Think of a string like a necklace where:
</p>
<li>Each bead represents a character</li>
<li>Characters are arranged in a specific order</li>
<li>Each character has a position (index) starting from 0</li>

<p>Strings are ubiquitous in programming and are used for:</p>
<li>Text processing and manipulation</li>
<li>Data storage and representation</li>
<li>Communication between systems</li>
<li>User input and output</li>

<h3><u>Key Characteristics</u></h3>

<h4><b>String Properties</b></h4>
<li>Ordered sequence of characters</li>
<li>Zero-based indexing</li>
<li>Can contain letters, numbers, symbols, and spaces</li>
<li>Has a length property</li>

<h3><u>Common Operations</u></h3>
<table>
<tr><th>Operation</th><th>Time Complexity</th><th>Example</th></tr>
<tr><td>Access character by index</td><td>O(1)</td><td>str[0]</td></tr>
<tr><td>Find length</td><td>O(1)</td><td>len(str)</td></tr>
<tr><td>Concatenation</td><td>O(n+m)</td><td>str1 + str2</td></tr>
<tr><td>Substring</td><td>O(k)</td><td>str[1:4]</td></tr>
<tr><td>Search</td><td>O(n*m)</td><td>str.find("pattern")</td></tr>
</table>

<h3><u>String Methods</u></h3>
<p>Modern programming languages provide rich libraries of string manipulation methods:</p>
<li>split() - Divides string into array of substrings</li>
<li>trim() - Removes whitespace from ends</li>
<li>toLowerCase()/toUpperCase() - Changes case</li>
<li>replace() - Substitutes characters or patterns</li>`,
  codeExample: `# Basic String Operations
text = "Hello, World!"
print(f"Original string: {text}")

# Accessing characters
first_char = text[0]  # 'H'
last_char = text[-1]  # '!'
print(f"First character: {first_char}")
print(f"Last character: {last_char}")

# String length
length = len(text)  # 13
print(f"String length: {length}")

# String slicing
substring = text[0:5]  # "Hello"
print(f"Substring: {substring}")

# String methods
lowercase = text.lower()  # "hello, world!"
uppercase = text.upper()  # "HELLO, WORLD!"
print(f"Lowercase: {lowercase}")
print(f"Uppercase: {uppercase}")

# Splitting strings
words = text.split(',')  # ["Hello", " World!"]
print(f"Split result: {words}")

# String searching
position = text.find('World')  # 7
print(f"Position of 'World': {position}")

# Character replacement
new_text = text.replace('World', 'Python')  # "Hello, Python!"
print(f"After replacement: {new_text}")`,
  exercises: [
    {
      prompt: 'Create a string containing your name and write code to print its length, first character, and last character.',
      initialCode: `# Write your solution here
name = 
# Print length
# Print first character
# Print last character`,
      solution: `name = "John Doe"
print(f"Length: {len(name)}")
print(f"First character: {name[0]}")
print(f"Last character: {name[-1]}")`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Given the string "Python Programming", extract the word "Python" using string slicing and convert it to lowercase.',
      initialCode: `text = "Python Programming"
# Write your solution here`,
      solution: `text = "Python Programming"
python = text[0:6].lower()
print(python)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Create a function that takes a sentence and returns the number of words in it. Test it with "Hello World from Python"',
      initialCode: `def count_words(sentence):
    # Write your solution here
    pass

# Test your function
test_sentence = "Hello World from Python"`,
      solution: `def count_words(sentence):
    return len(sentence.split())

test_sentence = "Hello World from Python"
word_count = count_words(test_sentence)
print(f"Number of words: {word_count}")`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'What is the index of the first character in a string?',
      options: [
        '1',
        '0',
        '-1',
        'None of the above',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. String indexing starts at 0, not 1.',
        'Correct! Strings use zero-based indexing, so the first character is at index 0.',
        'Incorrect. Negative indices count from the end of the string.',
        'Incorrect. There is a specific starting index.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'Which string operation has O(1) time complexity?',
      options: [
        'Concatenation',
        'Accessing a character by index',
        'Finding a substring',
        'Reversing the string',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Concatenation is O(n+m) where n and m are string lengths.',
        'Correct! Accessing a character by index is a constant-time operation.',
        'Incorrect. Finding a substring is O(n*m) in typical implementations.',
        'Incorrect. Reversing requires O(n) time.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const stringImmutabilityData: LessonContent = {
  title: 'String Immutability and Performance',
  content: `<p>
String immutability is a crucial concept in programming that means once a string is created, it cannot be modified. Think of it like carving words in stone:
</p>
<li>Once carved, you can't change individual letters</li>
<li>To make changes, you need to create a new stone</li>
<li>The original remains unchanged</li>

<h3><u>Implications of Immutability</u></h3>

<h4><b>Advantages</b></h4>
<li>Thread safety in concurrent programming</li>
<li>Predictable behavior</li>
<li>Safe to use as dictionary/hash map keys</li>
<li>Memory efficiency through string interning</li>

<h4><b>Performance Considerations</b></h4>
<li>String concatenation creates new objects</li>
<li>Multiple modifications can lead to memory churn</li>
<li>StringBuilder/StringBuffer provides mutable alternative</li>

<h3><u>Best Practices</u></h3>
<table>
<tr><th>Scenario</th><th>Recommendation</th><th>Why</th></tr>
<tr><td>Single concatenation</td><td>Use + operator</td><td>Simple and readable</td></tr>
<tr><td>Multiple concatenations</td><td>Use StringBuilder</td><td>Better performance</td></tr>
<tr><td>Thread safety needed</td><td>Use StringBuffer</td><td>Thread-safe operations</td></tr>
<tr><td>Large string processing</td><td>Use string builder with capacity</td><td>Reduces reallocations</td></tr>
</table>`,
  codeExample: `# Demonstrating String Immutability
original = "Hello"
print(f"Original string: {original}")
print(f"Original string id: {id(original)}")

# Attempting modification
modified = original + " World"  # Creates new string
print(f"Modified string: {modified}")
print(f"Modified string id: {id(modified)}")
print(f"Original string after modification: {original}")  # Unchanged

# Performance comparison: String concatenation vs StringBuilder
import time

def concat_with_string(n):
    result = ""
    for i in range(n):
        result += str(i)
    return result

def concat_with_list(n):
    result = []
    for i in range(n):
        result.append(str(i))
    return "".join(result)

# Compare performance
n = 10000
start = time.time()
str1 = concat_with_string(n)
string_time = time.time() - start

start = time.time()
str2 = concat_with_list(n)
builder_time = time.time() - start

print(f"String concatenation time: {string_time:.4f} seconds")
print(f"List building time: {builder_time:.4f} seconds")`,
  exercises: [
    {
      prompt: 'Write code to demonstrate that strings are immutable by trying to modify a character in a string. What happens?',
      initialCode: `# Write your solution here
text = "Hello"
try:
    # Try to modify the string
    pass
except Exception as e:
    print(f"Error: {e}")`,
      solution: `text = "Hello"
try:
    text[0] = 'J'  # This will raise TypeError
except Exception as e:
    print(f"Error: {e}")
    print("This demonstrates string immutability!")`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Create a function that efficiently builds a string of repeated characters (e.g., "a" repeated 1000 times). Compare using string concatenation vs list joining.',
      initialCode: `def build_string_concat(char, times):
    # Use string concatenation
    pass

def build_string_efficient(char, times):
    # Use list and join
    pass

# Test and compare both methods`,
      solution: `def build_string_concat(char, times):
    result = ""
    for _ in range(times):
        result += char
    return result

def build_string_efficient(char, times):
    return char * times  # Most efficient
    # Alternative: return "".join([char] * times)

# Test both methods
import time

times = 10000
start = time.time()
str1 = build_string_concat('a', times)
concat_time = time.time() - start

start = time.time()
str2 = build_string_efficient('a', times)
efficient_time = time.time() - start

print(f"Concatenation time: {concat_time:.4f}")
print(f"Efficient method time: {efficient_time:.4f}")`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'What happens when you modify a string in Python?',
      options: [
        'The original string is modified',
        'A new string is created',
        'The program crashes',
        'The modification is ignored',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Strings cannot be modified in place due to immutability.',
        'Correct! Due to string immutability, operations that appear to modify strings actually create new string objects.',
        'Incorrect. Attempting to modify a string character directly will raise an error, but not crash the program.',
        'Incorrect. Modification attempts raise an error rather than being ignored.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'Which method is most efficient for building a large string from many pieces?',
      options: [
        'Using the + operator in a loop',
        'Using a list to collect pieces and joining at the end',
        'Concatenating one character at a time',
        'Using string multiplication (*)',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. This creates many intermediate strings, leading to poor performance.',
        'Correct! This method minimizes the creation of intermediate strings and is more memory efficient.',
        'Incorrect. This is the least efficient method due to creating many temporary strings.',
        'Incorrect. While efficient for repetition, this only works for repeating the same string.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const stringInterviewPatternsData: LessonContent = {
  title: 'Common String Interview Patterns',
  content: `<p>
String manipulation is a cornerstone of coding interviews. Understanding common patterns helps you recognize and solve problems more effectively. Let's explore the key patterns you'll encounter:
</p>

<h3><u>Core String Patterns</u></h3>

<h4><b>1. Two-Pointer Technique</b></h4>
<p>
The two-pointer technique uses two variables to track positions in a string, often moving in opposite directions or at different speeds. This pattern is especially useful for:
</p>
<li>Palindrome verification</li>
<li>Reversing strings</li>
<li>Finding pairs or substrings with specific properties</li>

<h4><b>2. Sliding Window</b></h4>
<p>
The sliding window pattern maintains a window of characters that expands or contracts as you move through the string. It's particularly effective for:
</p>
<li>Finding longest/shortest substring with given properties</li>
<li>String matching with constraints</li>
<li>Substring problems with size or pattern requirements</li>

<h4><b>3. Character Counting/Mapping</b></h4>
<p>
This pattern involves keeping track of character frequencies, often using a hash map or array. Common applications include:
</p>
<li>Anagram detection</li>
<li>Character frequency analysis</li>
<li>String permutation problems</li>

<h4><b>4. String Building and Manipulation</b></h4>
<p>
These problems involve constructing or modifying strings according to specific rules:
</p>
<li>String compression/decompression</li>
<li>Pattern matching and replacement</li>
<li>String transformation problems</li>`,

  codeExample: `# Common Interview Pattern Examples

def is_palindrome(s: str) -> bool:
    """
    Two-pointer technique example: Palindrome checker
    Time: O(n), Space: O(1)
    """
    left, right = 0, len(s) - 1
    while left < right:
        # Skip non-alphanumeric characters
        while left < right and not s[left].isalnum():
            left += 1
        while left < right and not s[right].isalnum():
            right -= 1
        if s[left].lower() != s[right].lower():
            return False
        left += 1
        right -= 1
    return True

def longest_substring_no_repeating(s: str) -> int:
    """
    Sliding window example: Longest substring without repeating characters
    Time: O(n), Space: O(min(m,n)) where m is charset size
    """
    char_index = {}  # Track last position of each character
    max_length = start = 0
    
    for i, char in enumerate(s):
        # If char is in window, move window start past its last occurrence
        if char in char_index and char_index[char] >= start:
            start = char_index[char] + 1
        else:
            max_length = max(max_length, i - start + 1)
        char_index[char] = i
    
    return max_length

def are_anagrams(s1: str, s2: str) -> bool:
    """
    Character counting example: Anagram checker
    Time: O(n), Space: O(1) since fixed charset
    """
    if len(s1) != len(s2):
        return False
        
    char_count = {}
    # Count characters in first string
    for char in s1:
        char_count[char] = char_count.get(char, 0) + 1
    
    # Verify counts match in second string
    for char in s2:
        if char not in char_count:
            return False
        char_count[char] -= 1
        if char_count[char] == 0:
            del char_count[char]
    
    return len(char_count) == 0

def compress_string(s: str) -> str:
    """
    String building example: Basic string compression
    Time: O(n), Space: O(1) for output string
    """
    if not s:
        return s
        
    result = []
    count = 1
    current_char = s[0]
    
    for i in range(1, len(s)):
        if s[i] == current_char:
            count += 1
        else:
            result.append(current_char + str(count))
            current_char = s[i]
            count = 1
    
    result.append(current_char + str(count))
    compressed = ''.join(result)
    return compressed if len(compressed) < len(s) else s`,

  exercises: [
    {
      prompt: 'Implement a function that finds the first non-repeating character in a string. Return -1 if no such character exists.',
      initialCode: `def first_unique_char(s: str) -> int:
    # Write your solution here
    pass`,
      solution: `def first_unique_char(s: str) -> int:
    # Count frequency of each character
    char_count = {}
    for char in s:
        char_count[char] = char_count.get(char, 0) + 1
    
    # Find first character with count 1
    for i, char in enumerate(s):
        if char_count[char] == 1:
            return i
    return -1`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Implement a function that finds the longest palindromic substring in a string.',
      initialCode: `def longest_palindrome_substring(s: str) -> str:
    # Write your solution here
    pass`,
      solution: `def longest_palindrome_substring(s: str) -> str:
    def expand_around_center(left: int, right: int) -> str:
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return s[left + 1:right]
    
    if not s:
        return ""
        
    longest = s[0]
    for i in range(len(s) - 1):
        # Odd length palindromes
        palindrome1 = expand_around_center(i, i)
        # Even length palindromes
        palindrome2 = expand_around_center(i, i + 1)
        
        if len(palindrome1) > len(longest):
            longest = palindrome1
        if len(palindrome2) > len(longest):
            longest = palindrome2
    
    return longest`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'Which pattern would be most efficient for finding all anagrams in a string?',
      options: [
        'Two-pointer technique',
        'Sliding window with character counting',
        'Brute force comparison',
        'Binary search',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Two-pointer technique is better suited for palindrome-like problems.',
        'Correct! Sliding window with character counting maintains a window of character frequencies, making it efficient for finding anagrams.',
        'Incorrect. Brute force would be inefficient, requiring multiple string comparisons.',
        'Incorrect. Binary search is not applicable for finding anagrams.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const timeSpaceComplexityAnalysisData: LessonContent = {
  title: 'Understanding Time and Space Complexity in String Operations',
  content: `<p>
When working with strings, understanding the performance implications of different operations is crucial for writing efficient code. Let's explore how various string operations affect both time and space complexity, using real-world analogies to build intuition.
</p>

<h3><u>Fundamental String Operations</u></h3>

<p>
Think of a string like a long chain of characters written in stone tablets. Different operations have different costs, just like how some modifications to stone tablets would be easier than others:
</p>

<h4><b>Access and Length Operations</b></h4>
<table>
<tr><th>Operation</th><th>Time</th><th>Space</th><th>Real-world Analogy</th></tr>
<tr>
  <td>Character access by index</td>
  <td>O(1)</td>
  <td>O(1)</td>
  <td>Like looking at a specific page number in a book - immediate</td>
</tr>
<tr>
  <td>Length check</td>
  <td>O(1)</td>
  <td>O(1)</td>
  <td>Like reading a pre-written page count - already calculated</td>
</tr>
<tr>
  <td>String traversal</td>
  <td>O(n)</td>
  <td>O(1)</td>
  <td>Like reading every page in a book sequentially</td>
</tr>
</table>

<h4><b>Modification Operations</b></h4>
<table>
<tr><th>Operation</th><th>Time</th><th>Space</th><th>Why This Complexity</th></tr>
<tr>
  <td>Concatenation</td>
  <td>O(n+m)</td>
  <td>O(n+m)</td>
  <td>Must create entirely new string and copy both inputs</td>
</tr>
<tr>
  <td>Substring extraction</td>
  <td>O(k)</td>
  <td>O(k)</td>
  <td>Must copy k characters to new string</td>
</tr>
<tr>
  <td>Character replacement</td>
  <td>O(n)</td>
  <td>O(n)</td>
  <td>Creates new string due to immutability</td>
</tr>
</table>

<h3><u>Advanced String Algorithms</u></h3>

<p>
More complex string operations often involve sophisticated algorithms with different performance characteristics:
</p>

<h4><b>Search Operations</b></h4>
<table>
<tr><th>Algorithm</th><th>Time</th><th>Space</th><th>Best Use Case</th></tr>
<tr>
  <td>Naive Search</td>
  <td>O(nm)</td>
  <td>O(1)</td>
  <td>Short strings, simple cases</td>
</tr>
<tr>
  <td>KMP</td>
  <td>O(n+m)</td>
  <td>O(m)</td>
  <td>Single pattern matching</td>
</tr>
<tr>
  <td>Rabin-Karp</td>
  <td>O(n+m)</td>
  <td>O(1)</td>
  <td>Multiple pattern matching</td>
</tr>
<tr>
  <td>Suffix Array</td>
  <td>O(n log n)</td>
  <td>O(n)</td>
  <td>Multiple substring searches</td>
</tr>
</table>

<h3><u>Memory Management Considerations</u></h3>

<p>
String operations can have hidden memory costs. Consider these scenarios:
</p>

<li>Repeated concatenation in a loop: Creates many intermediate strings</li>
<li>Substring operations: May share memory with original string in some languages</li>
<li>String builder operations: Amortized cost vs. immediate memory allocation</li>
<li>String interning: Trading memory for faster equality comparisons</li>`,

  codeExample: `# Comprehensive examples demonstrating complexity analysis

def analyze_string_operations(text: str):
    """
    Demonstrates and analyzes common string operations
    """
    import time
    import sys
    
    class ComplexityAnalysis:
        def __init__(self):
            self.results = []
        
        def measure(self, operation_name, func):
            start_time = time.time()
            start_memory = sys.getsizeof(text)
            
            result = func()
            
            end_time = time.time()
            end_memory = sys.getsizeof(result) if result else 0
            
            self.results.append({
                'operation': operation_name,
                'time': end_time - start_time,
                'memory_delta': end_memory - start_memory
            })
            return result
    
    analysis = ComplexityAnalysis()
    
    # O(1) operations
    analysis.measure('Character Access', 
                    lambda: text[0] if text else None)
    
    # O(n) operations
    analysis.measure('String Traversal', 
                    lambda: sum(1 for c in text if c.isalpha()))
    
    # O(n+m) operations
    analysis.measure('Concatenation', 
                    lambda: text + text)
    
    # String building comparison
    def concat_vs_builder(n):
        # Traditional concatenation - O(n²) time
        def traditional():
            result = ""
            for i in range(n):
                result += str(i)
            return result
        
        # String builder - O(n) time
        def builder():
            result = []
            for i in range(n):
                result.append(str(i))
            return "".join(result)
        
        analysis.measure('Traditional Concat', traditional)
        analysis.measure('String Builder', builder)
    
    concat_vs_builder(1000)
    
    # Pattern matching comparison
    def pattern_matching(pattern):
        # Naive search - O(nm) time
        def naive_search():
            results = []
            n, m = len(text), len(pattern)
            for i in range(n - m + 1):
                if text[i:i+m] == pattern:
                    results.append(i)
            return results
        
        # KMP search - O(n+m) time
        def kmp_search():
            def build_lps():
                lps = [0] * len(pattern)
                length = 0
                i = 1
                
                while i < len(pattern):
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
                return lps
            
            results = []
            if not pattern:
                return results
                
            lps = build_lps()
            i = j = 0
            
            while i < len(text):
                if pattern[j] == text[i]:
                    i += 1
                    j += 1
                if j == len(pattern):
                    results.append(i - j)
                    j = lps[j - 1]
                elif i < len(text) and pattern[j] != text[i]:
                    if j != 0:
                        j = lps[j - 1]
                    else:
                        i += 1
            return results
        
        analysis.measure('Naive Search', naive_search)
        analysis.measure('KMP Search', kmp_search)
    
    if len(text) > 0:
        pattern_matching(text[:3])
    
    return analysis.results

def print_analysis_report(text: str):
    """
    Generates a detailed performance analysis report
    """
    results = analyze_string_operations(text)
    print("\nPerformance Analysis Report")
    print("-" * 50)
    for result in results:
        print(f"\nOperation: {result['operation']}")
        print(f"Time taken: {result['time']:.6f} seconds")
        print(f"Memory delta: {result['memory_delta']} bytes")`,

  exercises: [
    {
      prompt: "Implement a function that analyzes the time complexity difference between substring operations of different lengths. Compare the performance as substring length increases.",
      initialCode: `def analyze_substring_complexity(text: str):
    # Write your solution here
    pass`,
      solution: `def analyze_substring_complexity(text: str):
    import time
    
    def measure_substring(length):
        start = time.time()
        # Perform multiple substring operations to get meaningful timing
        for i in range(len(text) - length + 1):
            _ = text[i:i+length]
        end = time.time()
        return end - start
    
    # Test different substring lengths
    lengths = [1, len(text)//4, len(text)//2, len(text)-1]
    results = {}
    
    for length in lengths:
        time_taken = measure_substring(length)
        results[length] = time_taken
    
    # Print results
    print("Substring Length vs. Time Analysis:")
    for length, time_taken in results.items():
        print(f"Length {length}: {time_taken:.6f} seconds")
    
    return results`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: "Create a function that compares memory usage between different string modification approaches: concatenation, join operation, and string builder.",
      initialCode: `def compare_string_building_memory():
    # Write your solution here
    pass`,
      solution: `def compare_string_building_memory():
    import sys
    
    def measure_memory(obj):
        return sys.getsizeof(obj)
    
    # Test with increasing number of operations
    n_operations = [100, 1000, 10000]
    results = {}
    
    for n in n_operations:
        # Concatenation
        start_memory = measure_memory("")
        result = ""
        for i in range(n):
            result += str(i)
        concat_memory = measure_memory(result) - start_memory
        
        # Join operation
        start_memory = measure_memory([])
        pieces = []
        for i in range(n):
            pieces.append(str(i))
        join_memory = measure_memory("".join(pieces)) - start_memory
        
        # StringBuilder (list-based)
        start_memory = measure_memory([])
        builder = []
        for i in range(n):
            builder.append(str(i))
        builder_memory = measure_memory(builder) - start_memory
        
        results[n] = {
            'concatenation': concat_memory,
            'join': join_memory,
            'builder': builder_memory
        }
    
    # Print results
    print("Memory Usage Analysis (in bytes):")
    for n, memories in results.items():
        print(f"\nOperations: {n}")
        for method, memory in memories.items():
            print(f"{method}: {memory}")
    
    return results`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why does string concatenation in a loop have O(n²) time complexity?',
      options: [
        'Because each concatenation requires scanning both strings',
        'Because each concatenation creates a new string and copies all previous characters',
        'Because string comparison is O(n)',
        'Because string length calculation is O(n)',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. While concatenation does involve both strings, the quadratic complexity comes from repeated copying.',
        'Correct! Each concatenation creates a new string and must copy all previous characters, leading to quadratic behavior as the string grows.',
        'Incorrect. String comparison complexity does not affect concatenation complexity.',
        'Incorrect. String length calculation is typically O(1) as length is stored.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'Which string matching algorithm would be most memory-efficient for searching multiple patterns in a large text?',
      options: [
        'KMP Algorithm',
        'Rabin-Karp Algorithm',
        'Boyer-Moore Algorithm',
        'Naive search with multiple patterns',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. KMP requires O(m) space for each pattern.',
        'Correct! Rabin-Karp uses rolling hash computation with O(1) extra space, making it memory-efficient for multiple patterns.',
        'Incorrect. Boyer-Moore requires additional space for bad character and good suffix rules.',
        'Incorrect. Naive search, while space-efficient, is very time-inefficient for multiple patterns.',
      ],
      difficulty: Difficulty.Advanced,
    }
  ]
};

const stringAccessData: LessonContent = {
  title: 'Understanding String Character Access and Manipulation',
  content: `<p>
Imagine a string as a series of characters written in boxes, each with its own numbered position. This mental model helps us understand how we work with individual characters in a string. Let's explore how we can access and work with these characters effectively.
</p>

<h3><u>Understanding String Indexing</u></h3>

<p>
In most programming languages, strings use zero-based indexing, meaning we count positions starting from 0. Think of it like house numbers on a street, but starting with house number 0 instead of 1. This system has some important properties:
</p>

<li>The first character is at index 0</li>
<li>The last character is at index length-1</li>
<li>Negative indices count backward from the end in many languages</li>
<li>Indices outside the valid range typically cause errors</li>

<h3><u>Character Access Methods</u></h3>

<p>
There are several ways to access characters in a string, each with its own advantages:
</p>

<h4><b>Direct Index Access</b></h4>
<p>
Like looking through a window directly into a specific house, we can use square bracket notation or character-at methods to see what's at a specific position. This is the most straightforward way to access a single character:
</p>
<li>Square brackets: str[0] gives first character</li>
<li>charAt() method: str.charAt(0) in some languages</li>
<li>Immediate O(1) access time</li>

<h4><b>String Traversal</b></h4>
<p>
Sometimes we need to look at each character one by one, like walking down that street and checking each house. We can do this through:
</p>
<li>For loops with index</li>
<li>For-of or forEach loops</li>
<li>Iterator methods</li>

<h4><b>String Slicing</b></h4>
<p>
We might want to look at a range of characters, like viewing a block of houses at once. Slicing lets us:
</p>
<li>Extract substrings with start and end indices</li>
<li>Use negative indices for counting from the end</li>
<li>Specify step size for skipping characters</li>

<h3><u>Character Manipulation Techniques</u></h3>

<p>
Remember that strings are immutable in most languages - like trying to modify a house number on an official document, you need to create a new document rather than modify the existing one. Here's how we can effectively work with this constraint:
</p>

<h4><b>Character Replacement</b></h4>
<p>
To change characters, we typically need to:
</p>
<li>Convert the string to a mutable form (like an array)</li>
<li>Make our modifications</li>
<li>Convert back to a string</li>

<h4><b>String Building</b></h4>
<p>
When constructing new strings from characters:
</p>
<li>Use string builder objects for efficiency</li>
<li>Collect characters in an array and join</li>
<li>Concatenate strategically to avoid performance issues</li>`,

  codeExample: `# Comprehensive demonstration of string character access and manipulation

def demonstrate_string_access():
    """
    A complete guide to accessing and manipulating string characters,
    with explanations of each technique.
    """
    # Let's start with a sample string
    text = "Hello, World!"
    print("Original string:", text)
    
    # Direct character access
    print("\n1. Direct Character Access:")
    print(f"First character: {text[0]}")  # H
    print(f"Last character: {text[-1]}")  # !
    print(f"Fifth character: {text[4]}")  # o
    
    # Safe character access with error handling
    def safe_char_at(string: str, index: int) -> str:
        """
        Safely access a character at a given index,
        handling out-of-range indices gracefully.
        """
        try:
            return string[index]
        except IndexError:
            return None
    
    print("\n2. Safe Character Access:")
    print(f"Safe access at index 20: {safe_char_at(text, 20)}")  # None
    
    # String traversal methods
    print("\n3. Different Ways to Traverse:")
    
    # Method 1: Index-based loop
    print("Using index loop:")
    for i in range(len(text)):
        print(f"Character at position {i}: {text[i]}")
        
    # Method 2: Direct character iteration
    print("\nUsing direct iteration:")
    for char in text:
        print(f"Character: {char}")
        
    # Method 3: Enumerated iteration
    print("\nUsing enumerated iteration:")
    for i, char in enumerate(text):
        print(f"Position {i}: {char}")
    
    # String slicing
    print("\n4. String Slicing Examples:")
    print(f"First five characters: {text[:5]}")  # Hello
    print(f"Last five characters: {text[-5:]}")  # orld!
    print(f"Every second character: {text[::2]}")  # Hlo ol!
    
    # Character manipulation
    def replace_character(string: str, index: int, new_char: str) -> str:
        """
        Replace a character at a specific index in a string.
        Shows how to work around string immutability.
        """
        if index < 0:  # Handle negative indices
            index = len(string) + index
        if not (0 <= index < len(string)):
            return string
            
        # Convert to list for manipulation
        chars = list(string)
        chars[index] = new_char
        return ''.join(chars)
    
    print("\n5. Character Manipulation:")
    modified = replace_character(text, 0, 'J')
    print(f"After replacing 'H' with 'J': {modified}")
    
    # Building strings character by character
    def build_string_efficiently(characters: list) -> str:
        """
        Demonstrate efficient string building from characters.
        """
        # Method 1: Using join (most efficient)
        result1 = ''.join(characters)
        
        # Method 2: Using string builder (list append)
        builder = []
        for char in characters:
            builder.append(char)
        result2 = ''.join(builder)
        
        # Method 3: Direct concatenation (least efficient)
        result3 = ''
        for char in characters:
            result3 += char
            
        return result1
    
    print("\n6. String Building:")
    chars = list('Python')
    built_string = build_string_efficiently(chars)
    print(f"Built string: {built_string}")`,

  exercises: [
    {
      prompt: "Create a function that takes a string and returns a new string with every vowel capitalized. Handle both single-character and multi-character operations.",
      initialCode: `def capitalize_vowels(text: str) -> str:
    # Write your solution here
    pass`,
      solution: `def capitalize_vowels(text: str) -> str:
    """
    Capitalizes all vowels in a string while preserving other characters.
    Demonstrates character checking and string building.
    """
    # Define our vowels
    vowels = set('aeiou')
    
    # Method 1: Using list building (more efficient)
    chars = []
    for char in text:
        if char.lower() in vowels:
            chars.append(char.upper())
        else:
            chars.append(char)
    return ''.join(chars)
    
    # Alternative method using string replacement
    # result = ''
    # for char in text:
    #     if char.lower() in vowels:
    #         result += char.upper()
    #     else:
    #         result += char
    # return result`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: "Implement a function that takes a string and returns a dictionary containing the position of first and last occurrence of each character.",
      initialCode: `def char_positions(text: str) -> dict:
    # Write your solution here
    pass`,
      solution: `def char_positions(text: str) -> dict:
    """
    Tracks first and last positions of each character in a string.
    Demonstrates character tracking and dictionary building.
    """
    positions = {}
    
    for i, char in enumerate(text):
        if char in positions:
            positions[char]['last'] = i
        else:
            positions[char] = {
                'first': i,
                'last': i
            }
    
    return positions
    
# Example usage:
# text = "hello world"
# positions = char_positions(text)
# print(positions['l'])  # {'first': 2, 'last': 9}`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'What happens when you try to access a string character at an index equal to the string length?',
      options: [
        'Returns the last character',
        'Returns null or None',
        'Raises an IndexError or similar exception',
        'Returns an empty string',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. The last character is at index length-1.',
        'Incorrect. Most languages raise an exception rather than returning null.',
        'Correct! Accessing an index equal to or greater than the string length raises an IndexError or similar exception in most languages.',
        'Incorrect. Out-of-range access typically raises an exception rather than returning an empty string.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'Which method is most efficient for building a string character by character?',
      options: [
        'Using += operator in a loop',
        'Using a list to collect characters and joining at the end',
        'Concatenating with str.concat() in a loop',
        'Using string multiplication',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. String concatenation creates new strings on each operation, leading to O(n²) complexity.',
        'Correct! Building a list of characters and joining them at the end is most efficient, with O(n) complexity.',
        'Incorrect. Like +=, this creates new strings on each operation.',
        'Incorrect. String multiplication is for repeating strings, not building them character by character.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const stringMethodsData: LessonContent = {
  title: 'Understanding Essential String Methods',
  content: `<p>
String methods are like specialized tools in a craftsperson's toolkit - each one designed for a specific purpose. Understanding these tools deeply, including when and how to use them effectively, is crucial for writing efficient and maintainable code. Let's explore the most important string methods, their inner workings, and their performance characteristics.
</p>

<h3><u>Searching Methods</u></h3>

<p>
Think of searching through a string like looking for a specific word in a book. Just as you might use different strategies when searching for a single word versus a phrase, different string search methods are optimized for different scenarios.
</p>

<h4><b>indexOf and lastIndexOf</b></h4>
<p>
These methods scan through the string looking for a specific sequence of characters:
</p>
<li>indexOf searches forward from the beginning, like reading a book normally</li>
<li>lastIndexOf searches backward from the end, like flipping through pages from back to front</li>
<li>Both methods return -1 if the sequence isn't found</li>
<li>Time Complexity: O(n*m) where n is string length and m is search pattern length</li>

<h4><b>includes, startsWith, and endsWith</b></h4>
<p>
These methods answer specific questions about string content:
</p>
<li>includes checks if a pattern exists anywhere (similar to indexOf but returns boolean)</li>
<li>startsWith efficiently checks the beginning of the string</li>
<li>endsWith looks specifically at the end</li>
<li>Time Complexity: O(m) for startsWith/endsWith, O(n*m) for includes</li>

<h3><u>Transformation Methods</u></h3>

<p>
Transformation methods create new strings with specific modifications. Like a photographer's editing tools, each method produces a different effect on the original.
</p>

<h4><b>Case Transformation</b></h4>
<table>
<tr><th>Method</th><th>Time Complexity</th><th>Space Complexity</th><th>Description</th></tr>
<tr>
  <td>toLowerCase()</td>
  <td>O(n)</td>
  <td>O(n)</td>
  <td>Converts each character to lowercase</td>
</tr>
<tr>
  <td>toUpperCase()</td>
  <td>O(n)</td>
  <td>O(n)</td>
  <td>Converts each character to uppercase</td>
</tr>
</table>

<h4><b>Trimming and Padding</b></h4>
<table>
<tr><th>Method</th><th>Time Complexity</th><th>Space Complexity</th><th>Description</th></tr>
<tr>
  <td>trim()</td>
  <td>O(n)</td>
  <td>O(n)</td>
  <td>Removes whitespace from both ends</td>
</tr>
<tr>
  <td>padStart()</td>
  <td>O(k)</td>
  <td>O(k)</td>
  <td>Adds padding at start to reach length k</td>
</tr>
<tr>
  <td>padEnd()</td>
  <td>O(k)</td>
  <td>O(k)</td>
  <td>Adds padding at end to reach length k</td>
</tr>
</table>

<h3><u>Split and Join Operations</u></h3>

<p>
These operations are like taking apart and reassembling a puzzle. They're fundamental for text processing but need to be used thoughtfully to maintain good performance.
</p>

<h4><b>String Splitting</b></h4>
<p>
The split() method divides a string into an array of substrings:
</p>
<li>Can split on any delimiter or regular expression</li>
<li>Time Complexity: O(n) where n is string length</li>
<li>Space Complexity: O(n) for the resulting array</li>

<h4><b>Array Joining</b></h4>
<p>
The join() method combines array elements into a single string:
</p>
<li>Can specify any delimiter between elements</li>
<li>Time Complexity: O(n) where n is total length of all strings</li>
<li>Space Complexity: O(n) for the resulting string</li>`,

  codeExample: `# Comprehensive demonstration of string methods and their applications

def demonstrate_string_methods():
    """
    An in-depth exploration of essential string methods,
    demonstrating their usage, behavior, and performance characteristics.
    """
    # Sample text for our demonstrations
    text = "  Hello, World! Let's explore string methods.  "
    print("Original text:", text)
    
    def explore_search_methods(main_text: str, search_text: str):
        """
        Demonstrates various ways to search within strings,
        explaining the benefits and trade-offs of each approach.
        """
        print("\n1. Search Methods Demonstration:")
        
        # indexOf equivalent in Python (find)
        position = main_text.find(search_text)
        print(f"First occurrence of '{search_text}': {position}")
        
        # lastIndexOf equivalent (rfind)
        last_position = main_text.rfind(search_text)
        print(f"Last occurrence of '{search_text}': {last_position}")
        
        # contains/includes equivalent (in)
        contains = search_text in main_text
        print(f"Contains '{search_text}': {contains}")
        
        # startsWith and endsWith
        starts_with = main_text.startswith(search_text)
        ends_with = main_text.endswith(search_text)
        print(f"Starts with '{search_text}': {starts_with}")
        print(f"Ends with '{search_text}': {ends_with}")
    
    # Demonstrate search methods
    explore_search_methods(text, "Hello")
    
    def explore_transformation_methods(input_text: str):
        """
        Shows various ways to transform strings,
        with explanations of when to use each method.
        """
        print("\n2. Transformation Methods Demonstration:")
        
        # Case transformations
        print(f"Lowercase: {input_text.lower()}")
        print(f"Uppercase: {input_text.upper()}")
        print(f"Title case: {input_text.title()}")
        
        # Trimming whitespace
        print(f"Trimmed: '{input_text.strip()}'")
        print(f"Left trim: '{input_text.lstrip()}'")
        print(f"Right trim: '{input_text.rstrip()}'")
        
        # Padding
        short_text = "Hi"
        print(f"Padded start: '{short_text.rjust(5)}'")
        print(f"Padded end: '{short_text.ljust(5)}'")
        print(f"Zero-padded number: {'42'.zfill(5)}")
    
    # Demonstrate transformations
    explore_transformation_methods(text)
    
    def explore_split_join(sample_text: str):
        """
        Demonstrates splitting and joining strings,
        with analysis of different approaches and their use cases.
        """
        print("\n3. Split and Join Operations:")
        
        # Simple splitting
        words = sample_text.split()
        print(f"Words: {words}")
        
        # Splitting with specific delimiter
        parts = sample_text.split(',')
        print(f"Split on comma: {parts}")
        
        # Advanced splitting with limit
        limited_split = sample_text.split(' ', 2)
        print(f"Limited split: {limited_split}")
        
        # Joining with different delimiters
        print(f"Join with spaces: '{' '.join(words)}'")
        print(f"Join with commas: '{','.join(words)}'")
        print(f"Join with newlines: \\n{'\\n'.join(words)}")
    
    # Demonstrate split and join operations
    explore_split_join(text)
    
    def demonstrate_performance_considerations():
        """
        Shows performance implications of different string operations,
        helping understand when to use each approach.
        """
        import time
        print("\n4. Performance Considerations:")
        
        # String building comparison
        def build_string_concat(n):
            start = time.time()
            result = ""
            for i in range(n):
                result += str(i)
            return time.time() - start
        
        def build_string_join(n):
            start = time.time()
            parts = []
            for i in range(n):
                parts.append(str(i))
            result = "".join(parts)
            return time.time() - start
        
        n = 10000
        concat_time = build_string_concat(n)
        join_time = build_string_join(n)
        
        print(f"Concatenation time: {concat_time:.4f} seconds")
        print(f"Join time: {join_time:.4f} seconds")
    
    # Demonstrate performance considerations
    demonstrate_performance_considerations()`,

  exercises: [
    {
      prompt: "Create a function that finds all occurrences of a substring in a text, returning an array of starting positions. Consider both overlapping and non-overlapping matches.",
      initialCode: `def find_all_occurrences(text: str, pattern: str, allow_overlap: bool = False) -> list:
    # Write your solution here
    pass`,
      solution: `def find_all_occurrences(text: str, pattern: str, allow_overlap: bool = False) -> list:
    """
    Finds all occurrences of a pattern in text, with option for overlapping matches.
    Demonstrates careful string searching with consideration for edge cases.
    """
    positions = []
    start = 0
    
    while True:
        # Find next occurrence
        pos = text.find(pattern, start)
        if pos == -1:
            break
            
        positions.append(pos)
        # For overlapping matches, move only one character
        # For non-overlapping, move past the whole pattern
        start = pos + (1 if allow_overlap else len(pattern))
    
    return positions

# Example usage and test cases:
# text = "aaaaa"
# pattern = "aa"
# print(find_all_occurrences(text, pattern, True))  # [0,1,2,3]
# print(find_all_occurrences(text, pattern, False)) # [0,2]`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: "Implement a function that formats a string by padding numbers with zeros, capitalizing proper nouns, and ensuring sentences end with periods.",
      initialCode: `def format_text(text: str) -> str:
    # Write your solution here
    pass`,
      solution: `def format_text(text: str) -> str:
    """
    Formats text with multiple string transformations.
    Demonstrates combining multiple string methods effectively.
    """
    # Helper function to identify proper nouns
    def is_proper_noun(word: str) -> bool:
        # Simple heuristic: capitalize words after periods or at start
        return word.istitle() or len(word) == 1
    
    # Split into sentences
    sentences = text.split('.')
    formatted_sentences = []
    
    for sentence in sentences:
        if not sentence.strip():
            continue
            
        # Process each sentence
        words = sentence.strip().split()
        if not words:
            continue
            
        # Capitalize first word of sentence
        words[0] = words[0].capitalize()
        
        # Process each word
        for i in range(len(words)):
            word = words[i]
            # Pad numbers with zeros
            if word.isdigit():
                words[i] = word.zfill(3)
            # Preserve proper nouns
            elif is_proper_noun(word):
                words[i] = word.title()
            else:
                words[i] = word.lower()
        
        # Rebuild sentence
        formatted_sentences.append(' '.join(words) + '.')
    
    return ' '.join(formatted_sentences)

# Example usage:
# text = "hello world 42 John doe went to Paris"
# print(format_text(text))
# Output: "Hello world 042 John doe went to Paris."`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Which string operation has the potential for worst-case quadratic time complexity?',
      options: [
        'Using split() to divide a string',
        'Using join() to combine strings',
        'Repeated string concatenation in a loop',
        'Using replace() once on a string',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. split() is linear time O(n) as it makes a single pass through the string.',
        'Incorrect. join() is linear time O(n) where n is the total length of all strings.',
        'Correct! Repeated concatenation creates new strings each time, leading to O(n²) complexity as each concatenation copies all previous characters.',
        'Incorrect. A single replace() operation is linear time O(n) where n is the string length.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the time complexity of checking if a string contains a substring using includes() or the "in" operator?',
      options: [
        'O(1) - constant time',
        'O(n) - linear in string length',
        'O(n*m) where n is string length and m is pattern length',
        'O(log n) - logarithmic time',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Substring checking cannot be done in constant time as it needs to examine characters.',
        'Incorrect. We need to consider both the string and pattern lengths.',
        'Correct! The operation needs to compare the pattern at each possible position in the string.',
        'Incorrect. String searching cannot be done in logarithmic time without preprocessing.',
      ],
      difficulty: Difficulty.Advanced,
    }
  ]
};

const stringConcatenationData: LessonContent = {
  title: 'Understanding Efficient String Concatenation',
  content: `<p>
Let's imagine we're building a wall with bricks, where each brick represents a piece of text. Just as there are different ways to build a wall - some more efficient than others - there are various approaches to combining strings. Understanding these approaches deeply will help you write more efficient code.
</p>

<h3><u>Understanding String Concatenation</u></h3>

<p>
When we concatenate strings, we're creating a new string that combines the characters from multiple sources. This process is more complex than it might first appear, because strings are immutable - they can't be modified after creation. This immutability has important implications for performance.
</p>

<p>
Think about our wall analogy: When we concatenate strings using the + operator, it's like building a new wall each time we add a brick, copying all the existing bricks and adding the new one. This helps understand why repeated concatenation can become inefficient.
</p>

<h3><u>Concatenation Approaches</u></h3>

<h4><b>Basic Concatenation Methods</b></h4>
<table>
<tr><th>Method</th><th>Time Complexity</th><th>Space Complexity</th><th>Best Use Case</th></tr>
<tr>
  <td>+ operator</td>
  <td>O(n)</td>
  <td>O(n)</td>
  <td>Simple, one-time combinations</td>
</tr>
<tr>
  <td>join() method</td>
  <td>O(n)</td>
  <td>O(n)</td>
  <td>Combining multiple pieces at once</td>
</tr>
<tr>
  <td>format strings</td>
  <td>O(n)</td>
  <td>O(n)</td>
  <td>Template-based combinations</td>
</tr>
</table>

<h4><b>Performance Considerations</b></h4>
<p>
When concatenating strings in a loop or combining many strings, the performance differences between approaches become significant:
</p>
<li>+ operator in loop: O(n²) time due to repeated copying</li>
<li>join() method: O(n) time as it allocates space once</li>
<li>StringBuilder/list building: O(n) time with efficient memory use</li>

<h3><u>Memory Management in Concatenation</u></h3>

<p>
Understanding how memory is used during concatenation helps us write more efficient code. When strings are concatenated:
</p>

<li>A new memory block is allocated for the result</li>
<li>Characters from both strings are copied to the new location</li>
<li>The original strings remain unchanged</li>
<li>The garbage collector eventually cleans up unused strings</li>

<h3><u>Best Practices for Different Scenarios</u></h3>

<p>
Different situations call for different concatenation approaches. Here's how to choose the right tool for each job:
</p>

<h4><b>Simple Concatenation</b></h4>
<p>
When combining just a few strings once:
</p>
<li>Use + operator for clarity and readability</li>
<li>Use format strings for template-like combinations</li>
<li>Performance impact is negligible for small operations</li>

<h4><b>Large-Scale Concatenation</b></h4>
<p>
When combining many strings or building strings incrementally:
</p>
<li>Use join() for known collections of strings</li>
<li>Use StringBuilder or list building for dynamic construction</li>
<li>Preallocate capacity when final size is known</li>`,

  codeExample: `# Comprehensive demonstration of string concatenation techniques

def demonstrate_concatenation_methods():
    """
    Explores different string concatenation approaches,
    analyzing their performance characteristics and use cases.
    """
    import time
    
    def measure_time(func):
        """Decorator to measure execution time of concatenation methods"""
        def wrapper(*args, **kwargs):
            start = time.time()
            result = func(*args, **kwargs)
            end = time.time()
            return result, end - start
        return wrapper
    
    @measure_time
    def concat_with_operator(strings):
        """
        Demonstrates string concatenation using the + operator.
        Good for simple, one-time combinations.
        """
        result = ""
        for s in strings:
            result += s
        return result
    
    @measure_time
    def concat_with_join(strings):
        """
        Demonstrates string concatenation using join method.
        Efficient for combining multiple strings at once.
        """
        return "".join(strings)
    
    @measure_time
    def concat_with_list_building(strings):
        """
        Demonstrates string building using a list.
        Efficient for incremental construction.
        """
        parts = []
        for s in strings:
            parts.append(s)
        return "".join(parts)
    
    def compare_methods(n):
        """
        Compares different concatenation methods with timing analysis.
        """
        # Generate test data
        strings = [str(i) for i in range(n)]
        
        print(f"\nComparing methods with {n} strings:")
        
        # Test each method
        result_operator, time_operator = concat_with_operator(strings)
        result_join, time_join = concat_with_join(strings)
        result_list, time_list = concat_with_list_building(strings)
        
        print(f"+ operator time: {time_operator:.4f} seconds")
        print(f"join() time: {time_join:.4f} seconds")
        print(f"list building time: {time_list:.4f} seconds")
        
        # Verify results are identical
        assert result_operator == result_join == result_list
    
    # Demonstrate with different sizes
    for n in [100, 1000, 10000]:
        compare_methods(n)
    
    def demonstrate_format_strings():
        """
        Shows various ways to use format strings for concatenation.
        """
        name = "Alice"
        age = 30
        
        # Using % operator (older style)
        result1 = "Name: %s, Age: %d" % (name, age)
        
        # Using format() method
        result2 = "Name: {}, Age: {}".format(name, age)
        
        # Using f-strings (most readable)
        result3 = f"Name: {name}, Age: {age}"
        
        print("\nFormat String Examples:")
        print(result1)
        print(result2)
        print(result3)
    
    def demonstrate_practical_usage():
        """
        Shows real-world scenarios and best practices.
        """
        # Building an HTML string
        def build_html_efficient(items):
            parts = ['<ul>']
            for item in items:
                parts.append(f"<li>{item}</li>")
            parts.append('</ul>')
            return '\n'.join(parts)
        
        # Building a CSV string
        def build_csv_efficient(records):
            return '\n'.join(','.join(str(field) for field in record)
                           for record in records)
        
        # Example usage
        items = ['apple', 'banana', 'orange']
        records = [['Name', 'Age', 'City'],
                  ['Alice', '30', 'New York'],
                  ['Bob', '25', 'London']]
        
        print("\nPractical Examples:")
        print(build_html_efficient(items))
        print("\nCSV Output:")
        print(build_csv_efficient(records))
    
    # Run demonstrations
    demonstrate_format_strings()
    demonstrate_practical_usage()`,

  exercises: [
    {
      prompt: "Create a function that efficiently builds a formatted address string from individual components (street, city, state, zip). Compare the performance of different concatenation approaches.",
      initialCode: `def build_address(street: str, city: str, state: str, zip_code: str) -> str:
    # Write your solution here
    pass`,
      solution: `def build_address(street: str, city: str, state: str, zip_code: str) -> str:
    """
    Builds a formatted address string efficiently.
    Demonstrates practical string concatenation with formatting.
    """
    # Method 1: Using f-string (most readable)
    def build_with_fstring():
        return f"{street}\n{city}, {state} {zip_code}"
    
    # Method 2: Using join (most efficient for multiple pieces)
    def build_with_join():
        return "\n".join([
            street,
            f"{city}, {state} {zip_code}"
        ])
    
    # Method 3: Using format method (flexible for templates)
    def build_with_format():
        template = "{}\n{}, {} {}"
        return template.format(street, city, state, zip_code)
    
    # Compare performance (optional)
    import time
    
    methods = [
        ("f-string", build_with_fstring),
        ("join", build_with_join),
        ("format", build_with_format)
    ]
    
    results = {}
    for name, method in methods:
        start = time.time()
        for _ in range(10000):
            result = method()
        results[name] = time.time() - start
    
    # Return the most efficient method's result
    return build_with_fstring()`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: "Implement a function that efficiently builds an SQL INSERT statement for multiple records, handling proper escaping of strings and formatting of different data types.",
      initialCode: `def build_insert_statement(table_name: str, columns: list, records: list) -> str:
    # Write your solution here
    pass`,
      solution: `def build_insert_statement(table_name: str, columns: list, records: list) -> str:
    """
    Builds a SQL INSERT statement efficiently, handling multiple records
    and proper escaping of values.
    """
    def escape_value(value):
        """Helper function to properly escape and format values"""
        if value is None:
            return "NULL"
        elif isinstance(value, (int, float)):
            return str(value)
        else:
            # Escape single quotes and wrap in quotes
            return f"'{str(value).replace(\"'\", \"''\")}'"
    
    # Build the base statement efficiently
    parts = [
        f"INSERT INTO {table_name}",
        f"({', '.join(columns)})",
        "VALUES"
    ]
    
    # Build value lists efficiently
    values_parts = []
    for record in records:
        formatted_values = [escape_value(val) for val in record]
        values_parts.append(f"({', '.join(formatted_values)})")
    
    # Join all parts efficiently
    return '\n'.join([
        *parts,
        ',\n'.join(values_parts)
    ]) + ";"

# Example usage:
# table = "users"
# columns = ["name", "age", "city"]
# records = [
#     ["John", 30, "New York"],
#     ["Alice", 25, "Los Angeles"],
#     ["Bob", None, "Chicago"]
# ]
# print(build_insert_statement(table, columns, records))`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why does string concatenation in a loop using the + operator have O(n²) time complexity?',
      options: [
        'Because each loop iteration takes linear time',
        'Because strings are immutable and each concatenation creates a new copy',
        'Because of garbage collection overhead',
        'Because of memory fragmentation',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. While each iteration does take time, the quadratic complexity comes from copying existing characters.',
        'Correct! Because strings are immutable, each concatenation must create a new string and copy all existing characters, leading to quadratic time complexity as the string grows.',
        'Incorrect. While garbage collection is involved, it is not the primary cause of the quadratic complexity.',
        'Incorrect. Memory fragmentation may occur but is not the main reason for the performance characteristics.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'Which method is most efficient for building a string from many small pieces in a loop?',
      options: [
        'Using the + operator',
        'Using string formatting',
        'Using join() with a list of pieces',
        'Using multiple separate concatenations',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. The + operator creates new strings on each iteration, leading to poor performance.',
        'Incorrect. String formatting still creates intermediate strings and would be inefficient in a loop.',
        'Correct! Collecting pieces in a list and joining once at the end is most efficient as it minimizes string copying and memory allocation.',
        'Incorrect. Multiple separate concatenations would result in many intermediate string objects.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const inPlaceOperationsData: LessonContent = {
  title: 'Understanding In-place String Manipulation',
  content: `<p>
Imagine you're rearranging furniture in a small room. You have limited space to move things around, and you can't temporarily put furniture in another room. This is similar to the challenge of in-place string manipulation, where we need to modify a string without using additional space proportional to the string's length.
</p>

<p>
However, there's an important catch: in most programming languages, strings are immutable, meaning they can't be modified after creation. This introduces an interesting challenge – while true in-place string modification is often impossible, we can still apply in-place techniques when working with string-like data structures, such as arrays of characters.
</p>

<h3><u>Understanding In-place Operations</u></h3>

<p>
In-place operations have several key characteristics that make them both challenging and valuable:
</p>

<li>They use O(1) extra space, regardless of input size</li>
<li>They modify the existing structure rather than creating a new one</li>
<li>They often use techniques like two-pointer manipulation or character swapping</li>
<li>They require careful handling to avoid losing information during modification</li>

<h3><u>Common In-place String Algorithms</u></h3>

<h4><b>1. String Reversal</b></h4>
<p>
Reversing a string in-place is like having two people stand at opposite ends of a line of cards, swapping cards as they walk toward each other. This technique demonstrates key principles of in-place manipulation:
</p>
<li>Use two pointers moving toward each other</li>
<li>Swap characters without using extra storage</li>
<li>Stop when pointers meet in the middle</li>

<h4><b>2. String Rotation</b></h4>
<p>
Rotating a string by k positions is like shifting a line of people, where each person moves k spots to the right or left. This operation teaches us about:
</p>
<li>Breaking down complex movements into simpler steps</li>
<li>Using reversal as a building block for other operations</li>
<li>Handling edge cases like rotation amount larger than string length</li>

<h4><b>3. Removing Characters</b></h4>
<p>
Removing characters in-place is similar to removing people from a line while keeping everyone else together. This operation demonstrates:
</p>
<li>Using a two-pointer approach: one for reading, one for writing</li>
<li>Overwriting unwanted characters with wanted ones</li>
<li>Maintaining relative order of remaining characters</li>

<h3><u>Implementation Considerations</u></h3>

<p>
When implementing in-place string operations, we need to consider several factors:
</p>

<table>
<tr><th>Consideration</th><th>Impact</th><th>Solution</th></tr>
<tr>
  <td>String Immutability</td>
  <td>Cannot modify strings directly</td>
  <td>Convert to character array first</td>
</tr>
<tr>
  <td>Information Loss</td>
  <td>Original data might be needed later</td>
  <td>Careful ordering of operations</td>
</tr>
<tr>
  <td>Edge Cases</td>
  <td>Special cases might break algorithm</td>
  <td>Thorough testing of boundaries</td>
</tr>
</table>`,

  codeExample: `# Comprehensive demonstration of in-place string manipulation techniques

class InPlaceStringManipulator:
    """
    A collection of in-place string manipulation algorithms demonstrating
    various techniques and considerations.
    """
    
    @staticmethod
    def reverse_string(chars: list) -> None:
        """
        Reverses a string in-place using the two-pointer technique.
        Time: O(n), Space: O(1)
        
        This foundational algorithm demonstrates basic in-place manipulation
        principles like two-pointer movement and character swapping.
        """
        left, right = 0, len(chars) - 1
        while left < right:
            # Swap characters at left and right pointers
            chars[left], chars[right] = chars[right], chars[left]
            left += 1
            right -= 1
    
    @staticmethod
    def rotate_string(chars: list, k: int) -> None:
        """
        Rotates a string by k positions using the reversal algorithm.
        Time: O(n), Space: O(1)
        
        This algorithm demonstrates how complex operations can be broken down
        into simpler in-place operations.
        """
        if not chars:
            return
            
        # Normalize k to be within string length
        k = k % len(chars)
        if k == 0:
            return
        
        # The rotation algorithm has three steps:
        # 1. Reverse the entire string
        # 2. Reverse the first k characters
        # 3. Reverse the remaining n-k characters
        
        def reverse_range(start: int, end: int) -> None:
            """Helper function to reverse a portion of the array"""
            while start < end:
                chars[start], chars[end] = chars[end], chars[start]
                start += 1
                end -= 1
        
        # Perform the three reversals
        reverse_range(0, len(chars) - 1)    # Reverse entire string
        reverse_range(0, k - 1)             # Reverse first k characters
        reverse_range(k, len(chars) - 1)    # Reverse remaining characters
    
    @staticmethod
    def remove_duplicates(chars: list) -> int:
        """
        Removes duplicate characters in-place, maintaining order.
        Returns the length of the resulting string.
        Time: O(n), Space: O(1)
        
        This algorithm demonstrates the write pointer technique for
        in-place modification while maintaining order.
        """
        if not chars:
            return 0
            
        write_pos = 1  # Position to write next unique character
        
        # Iterate through string starting from second character
        for read_pos in range(1, len(chars)):
            # If current character is different from previous
            if chars[read_pos] != chars[write_pos - 1]:
                chars[write_pos] = chars[read_pos]
                write_pos += 1
        
        return write_pos
    
    @staticmethod
    def remove_given_character(chars: list, char_to_remove: str) -> int:
        """
        Removes all occurrences of a specific character in-place.
        Returns the length of the resulting string.
        Time: O(n), Space: O(1)
        
        This algorithm demonstrates filtering elements while maintaining
        relative order of remaining elements.
        """
        write_pos = 0
        
        # Iterate through all characters
        for read_pos in range(len(chars)):
            if chars[read_pos] != char_to_remove:
                chars[write_pos] = chars[read_pos]
                write_pos += 1
        
        return write_pos
    
    @staticmethod
    def replace_spaces(chars: list) -> int:
        """
        Replaces spaces with '%20' in-place, assuming sufficient space at end.
        Returns the length of the resulting string.
        Time: O(n), Space: O(1)
        
        This algorithm demonstrates backward iteration for in-place
        expansion of characters.
        """
        # First pass: count spaces and find true length
        space_count = sum(1 for c in chars if c == ' ')
        original_length = chars.index('\0') if '\0' in chars else len(chars)
        
        # Calculate new length after replacing spaces
        new_length = original_length + space_count * 2
        
        # Start from the end and work backwards
        write_pos = new_length - 1
        read_pos = original_length - 1
        
        while read_pos >= 0 and write_pos >= read_pos:
            if chars[read_pos] == ' ':
                chars[write_pos - 2:write_pos + 1] = ['%', '2', '0']
                write_pos -= 3
            else:
                chars[write_pos] = chars[read_pos]
                write_pos -= 1
            read_pos -= 1
        
        return new_length`,

  exercises: [
    {
      prompt: "Implement a function that removes all vowels from a string in-place, maintaining the relative order of remaining characters. Return the length of the resulting string.",
      initialCode: `def remove_vowels(chars: list) -> int:
    # Write your solution here
    pass`,
      solution: `def remove_vowels(chars: list) -> int:
    """
    Removes vowels from a character array in-place.
    Time: O(n), Space: O(1)
    
    This solution demonstrates:
    1. Using a write pointer to track position for next consonant
    2. Maintaining order of non-vowel characters
    3. Proper handling of both upper and lower case
    """
    vowels = set('aeiouAEIOU')
    write_pos = 0
    
    # Iterate through all characters
    for read_pos in range(len(chars)):
        # If character is not a vowel, write it to write_pos
        if chars[read_pos] not in vowels:
            chars[write_pos] = chars[read_pos]
            write_pos += 1
    
    return write_pos

# Example usage:
# chars = list("hello world")
# new_length = remove_vowels(chars)
# print("".join(chars[:new_length]))  # "hll wrld"`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: "Implement a function that compresses a character array in-place by replacing consecutive repeated characters with the character followed by its count. Return the length of the resulting string. For example, 'aabccc' becomes 'a2b1c3'.",
      initialCode: `def compress_string(chars: list) -> int:
    # Write your solution here
    pass`,
      solution: `def compress_string(chars: list) -> int:
    """
    Compresses repeated characters in-place.
    Time: O(n), Space: O(1)
    
    This solution demonstrates:
    1. Handling in-place modification with potential size changes
    2. Converting numbers to characters without extra space
    3. Careful pointer manipulation to avoid overwriting
    """
    if not chars:
        return 0
        
    write_pos = 0  # Position to write compressed characters
    read_pos = 0   # Position to read original characters
    
    while read_pos < len(chars):
        current_char = chars[read_pos]
        count = 0
        
        # Count consecutive occurrences of current character
        while (read_pos < len(chars) and 
               chars[read_pos] == current_char):
            read_pos += 1
            count += 1
        
        # Write character
        chars[write_pos] = current_char
        write_pos += 1
        
        # Write count if greater than 1
        if count > 1:
            # Convert count to string and write digits
            count_str = str(count)
            for digit in count_str:
                chars[write_pos] = digit
                write_pos += 1
    
    return write_pos

# Example usage:
# chars = list("aabccc")
# new_length = compress_string(chars)
# print("".join(chars[:new_length]))  # "a2b1c3"`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why is true in-place string manipulation often impossible in many programming languages?',
      options: [
        'Because strings are too long to modify efficiently',
        'Because strings are immutable objects',
        'Because string operations are too complex',
        'Because string memory is managed differently',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. The length of a string does not affect whether in-place modification is possible.',
        'Correct! Most programming languages implement strings as immutable objects for safety and optimization reasons, making direct modification impossible.',
        'Incorrect. The complexity of operations does not determine whether in-place modification is possible.',
        'Incorrect. While string memory management is important, it is not the primary reason for the impossibility of in-place modification.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the key advantage of using the two-pointer technique in in-place string manipulation?',
      options: [
        'It makes the code run faster',
        'It allows modification without extra space allocation',
        'It makes the code easier to read',
        'It reduces the number of operations needed',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. While two-pointer techniques can be efficient, their primary advantage is space efficiency.',
        'Correct! The two-pointer technique allows us to modify the string without allocating additional space proportional to the input size, maintaining O(1) space complexity.',
        'Incorrect. While two-pointer code can be clear, this is not its main advantage.',
        'Incorrect. The number of operations is often similar to other approaches.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const basicSearchingData: LessonContent = {
  title: 'Understanding String Searching Algorithms',
  content: `<p>
Imagine you're trying to find a specific word in a book. You might flip through pages systematically, or you might use the index to jump to likely locations. Similarly, when searching strings, we have different approaches ranging from simple to sophisticated, each with its own advantages.
</p>

<h3><u>Basic Search Concepts</u></h3>

<p>
Let's start by understanding what happens when we search through text. When looking for a pattern in a larger text, we're essentially trying to match a sequence of characters. This process involves several key concepts:
</p>

<li>Character matching: Comparing individual characters one by one</li>
<li>Pattern alignment: Positioning the pattern at different points in the text</li>
<li>Sliding window: Moving through the text systematically</li>
<li>Early termination: Recognizing when we can skip unnecessary comparisons</li>

<h3><u>Search Approaches</u></h3>

<h4><b>1. Naive String Search</b></h4>
<p>
Think of naive search like checking every possible position in the text, similar to looking for a word by reading every page of a book from start to finish:
</p>
<li>Simple but potentially inefficient for large texts</li>
<li>Works well for short texts or when pattern occurs early</li>
<li>Time Complexity: O(n*m) where n is text length, m is pattern length</li>

<h4><b>2. Optimized Searching</b></h4>
<p>
More sophisticated approaches use additional information to search more efficiently:
</p>

<table>
<tr><th>Algorithm</th><th>Time Complexity</th><th>Space Complexity</th><th>Best Use Case</th></tr>
<tr>
  <td>KMP Algorithm</td>
  <td>O(n+m)</td>
  <td>O(m)</td>
  <td>Single pattern in large text</td>
</tr>
<tr>
  <td>Boyer-Moore</td>
  <td>O(n+m)</td>
  <td>O(k)</td>
  <td>Pattern with diverse characters</td>
</tr>
<tr>
  <td>Two-Way String Matching</td>
  <td>O(n+m)</td>
  <td>O(1)</td>
  <td>Memory-constrained environments</td>
</tr>
</table>

<h3><u>Performance Considerations</u></h3>

<p>
The efficiency of string searching depends on several factors:
</p>

<h4><b>Text Characteristics</b></h4>
<li>Length of text and pattern</li>
<li>Character distribution in the text</li>
<li>Frequency of pattern occurrences</li>
<li>Pattern complexity (repeated characters vs unique)</li>

<h4><b>Memory Usage</b></h4>
<li>Preprocessing space requirements</li>
<li>Cache performance implications</li>
<li>Memory access patterns</li>`,

  codeExample: `# Comprehensive demonstration of string searching techniques

class StringSearcher:
    """
    A collection of string searching algorithms with detailed explanations
    and performance analysis.
    """
    
    @staticmethod
    def naive_search(text: str, pattern: str) -> list:
        """
        Implements the naive string searching algorithm.
        Time: O(n*m), Space: O(1)
        
        This is the simplest approach, checking every possible position
        in the text for a match with the pattern.
        """
        result = []
        n, m = len(text), len(pattern)
        
        # Try each possible starting position in text
        for i in range(n - m + 1):
            # Check if pattern matches at this position
            match = True
            for j in range(m):
                if text[i + j] != pattern[j]:
                    match = False
                    break
            if match:
                result.append(i)
        
        return result
    
    @staticmethod
    def build_kmp_table(pattern: str) -> list:
        """
        Builds the KMP partial match table (also called failure function).
        Time: O(m), Space: O(m)
        
        This table helps us skip comparisons by knowing about pattern's
        internal structure.
        """
        m = len(pattern)
        table = [0] * m  # Length of longest proper prefix that is also suffix
        
        # Compute failure function values
        length = 0  # Length of previous longest prefix suffix
        i = 1
        
        while i < m:
            if pattern[i] == pattern[length]:
                # We can build a longer prefix-suffix
                length += 1
                table[i] = length
                i += 1
            else:
                if length != 0:
                    # Try to build from a shorter prefix-suffix
                    length = table[length - 1]
                else:
                    # No more candidates for prefix-suffix
                    table[i] = 0
                    i += 1
        
        return table
    
    @staticmethod
    def kmp_search(text: str, pattern: str) -> list:
        """
        Implements the Knuth-Morris-Pratt string searching algorithm.
        Time: O(n+m), Space: O(m)
        
        KMP uses information about the pattern's structure to skip
        unnecessary comparisons.
        """
        if not pattern:
            return []
            
        result = []
        n, m = len(text), len(pattern)
        
        # Build the partial match table
        table = StringSearcher.build_kmp_table(pattern)
        
        # Perform the search
        j = 0  # Index for pattern
        i = 0  # Index for text
        
        while i < n:
            if pattern[j] == text[i]:
                i += 1
                j += 1
            
            if j == m:
                # Pattern found
                result.append(i - j)
                # Look for next occurrence
                j = table[j - 1]
            elif i < n and pattern[j] != text[i]:
                if j != 0:
                    # Use the partial match table to skip
                    j = table[j - 1]
                else:
                    # No match starting at current position
                    i += 1
        
        return result
    
    @staticmethod
    def demonstrative_search(text: str, pattern: str) -> list:
        """
        A demonstrative version of string search that shows its work.
        Useful for understanding how the search process works.
        """
        result = []
        n, m = len(text), len(pattern)
        comparisons = 0
        
        def print_comparison(pos: int, matched: int):
            """Helper function to visualize the matching process"""
            print(f"\nChecking position {pos}:")
            print(text)
            print(" " * pos + pattern)
            print(" " * (pos + matched) + "^")
            print(f"Comparisons so far: {comparisons}")
        
        for i in range(n - m + 1):
            matches = 0
            for j in range(m):
                comparisons += 1
                if text[i + j] != pattern[j]:
                    print_comparison(i, j)
                    break
                matches += 1
            
            if matches == m:
                print_comparison(i, m - 1)
                print("Match found!")
                result.append(i)
        
        print(f"\nTotal comparisons: {comparisons}")
        return result`,

  exercises: [
    {
      prompt: "Implement a function that finds the first occurrence of any character from a set of characters in a string. Return the index of the first match or -1 if none found.",
      initialCode: `def find_first_of(text: str, char_set: set) -> int:
    # Write your solution here
    pass`,
      solution: `def find_first_of(text: str, char_set: set) -> int:
    """
    Finds first occurrence of any character from char_set in text.
    Time: O(n), Space: O(1) as char_set size is bounded
    
    This solution demonstrates:
    1. Efficient searching for multiple characters
    2. Early termination when match is found
    3. Proper handling of edge cases
    """
    # Handle edge cases
    if not text or not char_set:
        return -1
    
    # Search through text
    for i, char in enumerate(text):
        if char in char_set:
            return i
    
    return -1

# Example usage:
# text = "hello world"
# char_set = {'x', 'o', 'z'}
# result = find_first_of(text, char_set)  # Returns 4 (first 'o')`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: "Implement a function that finds all non-overlapping occurrences of a pattern in text, allowing for a maximum of k character mismatches.",
      initialCode: `def fuzzy_search(text: str, pattern: str, k: int) -> list:
    # Write your solution here
    pass`,
      solution: `def fuzzy_search(text: str, pattern: str, k: int) -> list:
    """
    Finds pattern occurrences allowing k mismatches.
    Time: O(n*m), Space: O(1)
    
    This solution demonstrates:
    1. Handling approximate string matching
    2. Counting mismatches efficiently
    3. Non-overlapping match handling
    """
    results = []
    n, m = len(text), len(pattern)
    
    if m == 0 or n < m:
        return results
    
    # Search through all possible starting positions
    i = 0
    while i <= n - m:
        mismatches = 0
        matched = True
        
        # Check for pattern match with up to k mismatches
        for j in range(m):
            if text[i + j] != pattern[j]:
                mismatches += 1
                if mismatches > k:
                    matched = False
                    break
        
        if matched:
            results.append(i)
            i += m  # Skip to avoid overlapping matches
        else:
            i += 1
    
    return results

# Example usage:
# text = "hello world"
# pattern = "helo"
# k = 1
# result = fuzzy_search(text, pattern, k)  # Finds 'hello' with 1 mismatch`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why is the KMP algorithm more efficient than naive string searching?',
      options: [
        'It uses a hash table to store characters',
        'It preprocesses the pattern to avoid redundant comparisons',
        'It searches from right to left instead of left to right',
        'It uses binary search to find matches',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. KMP does not use a hash table for character storage.',
        'Correct! KMP preprocesses the pattern to build a partial match table, which helps skip unnecessary comparisons by using information about the pattern\'s structure.',
        'Incorrect. KMP searches from left to right like the naive algorithm.',
        'Incorrect. KMP does not use binary search in its matching process.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the main advantage of using a sliding window approach in string searching?',
      options: [
        'It reduces memory usage to O(1)',
        'It allows for parallel processing',
        'It avoids examining characters multiple times',
        'It handles special characters better',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. While sliding window can use constant extra space, this is not its main advantage.',
        'Incorrect. Sliding window is inherently sequential.',
        'Correct! The sliding window approach allows us to avoid re-examining characters we\'ve already seen, making the search more efficient.',
        'Incorrect. Special character handling is not specifically related to the sliding window technique.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const patternMatchingData: LessonContent = {
  title: 'Understanding Advanced Pattern Matching',
  content: `<p>
Let's explore pattern matching in strings by thinking about how we might find words in a crossword puzzle. Just as we might look for words that follow certain rules or patterns in a puzzle, string pattern matching involves finding text that follows specific patterns or rules.
</p>

<h3><u>Pattern Matching Fundamentals</u></h3>

<p>
Pattern matching goes beyond simple string searching by allowing us to look for text that follows specific patterns rather than exact matches. Think of it like having a flexible template that can match many different strings that follow the same structure.
</p>

<h4><b>Basic Pattern Elements</b></h4>
<p>
Just as a recipe might call for specific ingredients plus some optional ones, patterns can include:
</p>
<li>Literal characters that must match exactly</li>
<li>Wildcards that can match any character</li>
<li>Character classes that match specific sets of characters</li>
<li>Quantifiers that specify how many times something should appear</li>

<h3><u>Advanced Pattern Matching Techniques</u></h3>

<h4><b>1. Regular Expressions</b></h4>
<table>
<tr><th>Pattern Type</th><th>Description</th><th>Example</th><th>Matches</th></tr>
<tr>
  <td>Anchors</td>
  <td>Match positions in text</td>
  <td>^start, end$</td>
  <td>"start here", "the end"</td>
</tr>
<tr>
  <td>Character Classes</td>
  <td>Match character sets</td>
  <td>[a-z], \d</td>
  <td>"a", "3"</td>
</tr>
<tr>
  <td>Quantifiers</td>
  <td>Specify repetition</td>
  <td>a{1,3}, \\w+</td>
  <td>"a", "aaa", "word"</td>
</tr>
<tr>
  <td>Groups</td>
  <td>Capture matches</td>
  <td>(\\w+)@(\\w+)</td>
  <td>"user@domain"</td>
</tr>
</table>

<h4><b>2. Wildcard Matching</b></h4>
<p>
More flexible than exact matching but simpler than full regular expressions:
</p>
<li>'?' typically matches any single character</li>
<li>'*' typically matches zero or more characters</li>
<li>Custom wildcards can be defined for specific needs</li>

<h4><b>3. Fuzzy Matching</b></h4>
<p>
Allows for approximate matches, useful for:
</p>
<li>Spell checking and correction</li>
<li>Search with typo tolerance</li>
<li>Natural language processing</li>

<h3><u>Advanced Matching Algorithms</u></h3>

<p>
Different scenarios call for different matching approaches:
</p>

<h4><b>Performance Characteristics</b></h4>
<table>
<tr><th>Algorithm</th><th>Time Complexity</th><th>Space Complexity</th><th>Best For</th></tr>
<tr>
  <td>Regex Engine</td>
  <td>O(mn)</td>
  <td>O(m)</td>
  <td>Complex patterns</td>
</tr>
<tr>
  <td>Wildcard Matching</td>
  <td>O(mn)</td>
  <td>O(mn)</td>
  <td>Simple patterns</td>
</tr>
<tr>
  <td>Levenshtein Distance</td>
  <td>O(mn)</td>
  <td>O(mn)</td>
  <td>Fuzzy matching</td>
</tr>
</table>`,

  codeExample: `# Comprehensive demonstration of pattern matching techniques

class PatternMatcher:
    """
    A collection of pattern matching algorithms demonstrating various
    matching techniques with detailed explanations.
    """
    
    @staticmethod
    def wildcard_match(text: str, pattern: str) -> bool:
        """
        Implements wildcard pattern matching with '?' and '*'.
        '?' matches any single character
        '*' matches zero or more characters
        
        Time: O(mn), Space: O(mn) with dynamic programming
        """
        n, m = len(text), len(pattern)
        
        # Create DP table
        dp = [[False] * (m + 1) for _ in range(n + 1)]
        dp[0][0] = True  # Empty pattern matches empty string
        
        # Handle patterns starting with *
        for j in range(1, m + 1):
            if pattern[j-1] == '*':
                dp[0][j] = dp[0][j-1]
        
        # Fill the table
        for i in range(1, n + 1):
            for j in range(1, m + 1):
                if pattern[j-1] == '*':
                    # '*' can match current char or be empty
                    dp[i][j] = dp[i-1][j] or dp[i][j-1]
                elif pattern[j-1] == '?' or pattern[j-1] == text[i-1]:
                    # Direct match or '?' wildcard
                    dp[i][j] = dp[i-1][j-1]
        
        return dp[n][m]
    
    @staticmethod
    def levenshtein_distance(s1: str, s2: str) -> int:
        """
        Calculates the edit distance between two strings.
        Useful for fuzzy matching and spell checking.
        
        Time: O(mn), Space: O(mn)
        """
        m, n = len(s1), len(s2)
        dp = [[0] * (n + 1) for _ in range(m + 1)]
        
        # Initialize base cases
        for i in range(m + 1):
            dp[i][0] = i
        for j in range(n + 1):
            dp[0][j] = j
        
        # Fill the table
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                if s1[i-1] == s2[j-1]:
                    dp[i][j] = dp[i-1][j-1]
                else:
                    dp[i][j] = min(
                        dp[i-1][j] + 1,    # deletion
                        dp[i][j-1] + 1,    # insertion
                        dp[i-1][j-1] + 1   # substitution
                    )
        
        return dp[m][n]
    
    @staticmethod
    def regex_like_match(text: str, pattern: str) -> bool:
        """
        Implements a simplified regex-like pattern matching.
        Supports basic patterns: 
        - '.' matches any character
        - '*' matches zero or more of previous character
        
        Time: O(mn), Space: O(mn)
        """
        def match_here(text: str, pattern: str, i: int, j: int,
                      memo: dict) -> bool:
            # Check memoization cache
            key = (i, j)
            if key in memo:
                return memo[key]
            
            # Base cases
            if j == len(pattern):
                result = i == len(text)
            elif j + 1 < len(pattern) and pattern[j+1] == '*':
                # Handle pattern char followed by *
                result = (match_here(text, pattern, i, j+2, memo) or
                         (i < len(text) and
                          (pattern[j] == '.' or pattern[j] == text[i]) and
                          match_here(text, pattern, i+1, j, memo)))
            elif i < len(text) and (pattern[j] == '.' or 
                                  pattern[j] == text[i]):
                # Handle single character match
                result = match_here(text, pattern, i+1, j+1, memo)
            else:
                result = False
            
            # Store in cache and return
            memo[key] = result
            return result
        
        return match_here(text, pattern, 0, 0, {})`,

  exercises: [
    {
      prompt: "Implement a function that performs fuzzy string matching, returning true if two strings match with at most k differences (insertions, deletions, or substitutions).",
      initialCode: `def fuzzy_match(s1: str, s2: str, k: int) -> bool:
    # Write your solution here
    pass`,
      solution: `def fuzzy_match(s1: str, s2: str, k: int) -> bool:
    """
    Determines if two strings match with at most k differences.
    Uses dynamic programming with space optimization.
    
    Time: O(mn), Space: O(min(m,n))
    """
    # Make s1 the shorter string for space optimization
    if len(s1) > len(s2):
        s1, s2 = s2, s1
    
    m, n = len(s1), len(s2)
    
    # If length difference exceeds k, strings can't match
    if abs(m - n) > k:
        return False
    
    # Previous and current row of the DP table
    previous = list(range(m + 1))
    current = [0] * (m + 1)
    
    # Fill the table
    for j in range(1, n + 1):
        current[0] = j
        for i in range(1, m + 1):
            if s1[i-1] == s2[j-1]:
                current[i] = previous[i-1]
            else:
                current[i] = 1 + min(
                    previous[i-1],  # substitution
                    previous[i],    # deletion
                    current[i-1]    # insertion
                )
        previous, current = current, previous
    
    return previous[m] <= k

# Example usage:
# print(fuzzy_match("kitten", "sitting", 3))  # True
# print(fuzzy_match("hello", "world", 4))     # False`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: "Implement a function that matches a string against a pattern where '?' matches any single character and '*' matches zero or more characters of any type. The function should handle patterns efficiently.",
      initialCode: `def pattern_match(text: str, pattern: str) -> bool:
    # Write your solution here
    pass`,
      solution: `def pattern_match(text: str, pattern: str) -> bool:
    """
    Matches text against a pattern with '?' and '*' wildcards.
    Uses dynamic programming with space optimization.
    
    Time: O(mn), Space: O(n)
    """
    def char_match(c: str, p: str) -> bool:
        return p == '?' or c == p
    
    m, n = len(text), len(pattern)
    
    # Track the required matches after each *
    star_pos = []
    match_pos = []
    
    # Find positions of all stars and their required matches
    last_pos = 0
    for i, char in enumerate(pattern):
        if char == '*':
            star_pos.append(i)
            match_pos.append(last_pos)
        else:
            last_pos = i + 1
    
    # Add final position
    star_pos.append(n)
    match_pos.append(last_pos)
    
    # Match each segment between stars
    curr_pos = 0
    for i in range(len(star_pos)):
        # Get the fixed pattern segment
        fixed_pattern = pattern[match_pos[i-1] if i > 0 else 0:star_pos[i]]
        fixed_len = len(fixed_pattern)
        
        # If no more stars, pattern must match to the end
        if i == len(star_pos) - 1:
            if fixed_len > len(text) - curr_pos:
                return False
            return all(char_match(text[curr_pos + j], fixed_pattern[j])
                      for j in range(fixed_len))
        
        # Find the earliest possible match of fixed pattern
        found = False
        while curr_pos <= len(text) - fixed_len:
            if all(char_match(text[curr_pos + j], fixed_pattern[j])
                  for j in range(fixed_len)):
                found = True
                break
            curr_pos += 1
        
        if not found:
            return False
        
        # Move past the matched segment
        curr_pos += fixed_len
    
    return True

# Example usage:
# print(pattern_match("abcde", "a?c*"))  # True
# print(pattern_match("abcde", "a?c?*g"))  # False`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why is dynamic programming often used in pattern matching algorithms?',
      options: [
        'To reduce memory usage',
        'To avoid recalculating overlapping subproblems',
        'To handle special characters',
        'To improve pattern syntax',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Dynamic programming often uses additional memory to store intermediate results.',
        'Correct! Dynamic programming stores solutions to subproblems to avoid redundant calculations, which is particularly important in pattern matching where the same subpatterns often need to be matched multiple times.',
        'Incorrect. Special character handling is not the main reason for using dynamic programming.',
        'Incorrect. Pattern syntax is independent of the matching algorithm used.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the key advantage of using the Levenshtein distance for pattern matching?',
      options: [
        'It runs faster than exact matching',
        'It uses less memory than other algorithms',
        'It allows for approximate matches with defined error tolerance',
        'It handles special characters better',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Levenshtein distance calculation is typically slower than exact matching.',
        'Incorrect. The algorithm requires a dynamic programming matrix.',
        'Correct! Levenshtein distance measures the minimum number of single-character edits required to change one string into another, making it perfect for fuzzy matching with controlled error tolerance.',
        'Incorrect. Special character handling is not a specific feature of Levenshtein distance.',
      ],
      difficulty: Difficulty.Advanced,
    }
  ]
};

const slidingWindowData: LessonContent = {
  title: 'Understanding the Sliding Window Technique',
  content: `<p>
Imagine you're looking through a window of a moving train. As the train moves, your view "slides" along the landscape, letting you see different sections while maintaining a consistent frame size. This is exactly how the sliding window technique works with strings – we maintain a "window" of characters that moves through the text, helping us solve various string processing problems efficiently.
</p>

<h3><u>Understanding Sliding Windows</u></h3>

<p>
The sliding window technique is particularly powerful because it allows us to process strings in a way that avoids redundant computations. Think about when you're reading a book through a magnifying glass – instead of lifting and replacing the magnifying glass for each new section, you smoothly slide it across the text, maintaining context as you go.
</p>

<h4><b>Types of Sliding Windows</b></h4>
<p>
We can think about sliding windows in two main ways:
</p>

<h4><b>1. Fixed-Size Windows</b></h4>
<p>
Like a fixed-size magnifying glass, these windows maintain the same size throughout:
</p>
<li>Window size is determined at the start</li>
<li>Perfect for finding patterns of known length</li>
<li>Examples: Finding anagrams, fixed-length substrings</li>

<h4><b>2. Variable-Size Windows</b></h4>
<p>
Like an adjustable lens, these windows can grow or shrink:
</p>
<li>Window size changes based on conditions</li>
<li>Useful for optimization problems</li>
<li>Examples: Longest substring without repeating characters</li>

<h3><u>Window Operations</u></h3>

<h4><b>Key Operations</b></h4>
<table>
<tr><th>Operation</th><th>Description</th><th>Usage</th></tr>
<tr>
  <td>Expansion</td>
  <td>Add elements to window</td>
  <td>When seeking longer valid sequences</td>
</tr>
<tr>
  <td>Contraction</td>
  <td>Remove elements from window</td>
  <td>When window violates constraints</td>
</tr>
<tr>
  <td>Sliding</td>
  <td>Move window forward</td>
  <td>To process next sequence</td>
</tr>
</table>

<h3><u>Common Applications</u></h3>

<p>
The sliding window technique excels in several string processing scenarios:
</p>

<h4><b>Pattern Matching</b></h4>
<li>Finding all anagrams in a text</li>
<li>Matching strings with fixed patterns</li>
<li>Finding repeated sequences</li>

<h4><b>Optimization Problems</b></h4>
<li>Longest substring with k distinct characters</li>
<li>Minimum window containing all required characters</li>
<li>Maximum sum of substring of size k</li>

<h3><u>Performance Considerations</u></h3>

<p>
The sliding window technique offers significant performance benefits:
</p>

<table>
<tr><th>Aspect</th><th>Without Sliding Window</th><th>With Sliding Window</th></tr>
<tr>
  <td>Time Complexity</td>
  <td>Often O(n²) or worse</td>
  <td>Usually O(n)</td>
</tr>
<tr>
  <td>Space Complexity</td>
  <td>Can be O(n)</td>
  <td>Often O(1) or O(k)</td>
</tr>
<tr>
  <td>Redundant Work</td>
  <td>High</td>
  <td>Minimized</td>
</tr>
</table>`,

  codeExample: `# Comprehensive demonstration of sliding window techniques

class SlidingWindowProcessor:
    """
    A collection of sliding window algorithms for string processing,
    demonstrating both fixed and variable window approaches.
    """
    
    @staticmethod
    def find_all_anagrams(text: str, pattern: str) -> list:
        """
        Finds all anagrams of a pattern in a text using fixed-size sliding window.
        
        This demonstrates how to:
        1. Maintain a fixed-size window
        2. Use character frequency counting
        3. Optimize window sliding operations
        
        Time: O(n), Space: O(1) as we only store 26 characters
        """
        if not text or not pattern or len(pattern) > len(text):
            return []
        
        results = []
        pattern_freq = {}
        window_freq = {}
        
        # Build pattern frequency map
        for char in pattern:
            pattern_freq[char] = pattern_freq.get(char, 0) + 1
        
        # Initialize first window
        window_size = len(pattern)
        for i in range(window_size):
            char = text[i]
            window_freq[char] = window_freq.get(char, 0) + 1
        
        # Check first window
        if window_freq == pattern_freq:
            results.append(0)
        
        # Slide window through remaining text
        for i in range(window_size, len(text)):
            # Remove leftmost character
            left_char = text[i - window_size]
            window_freq[left_char] -= 1
            if window_freq[left_char] == 0:
                del window_freq[left_char]
            
            # Add rightmost character
            right_char = text[i]
            window_freq[right_char] = window_freq.get(right_char, 0) + 1
            
            # Check for anagram
            if window_freq == pattern_freq:
                results.append(i - window_size + 1)
        
        return results
    
    @staticmethod
    def longest_substring_k_distinct(text: str, k: int) -> str:
        """
        Finds the longest substring with at most k distinct characters
        using variable-size sliding window.
        
        This demonstrates how to:
        1. Manage a variable-size window
        2. Handle window expansion and contraction
        3. Track optimal results while processing
        
        Time: O(n), Space: O(k)
        """
        if not text or k <= 0:
            return ""
        
        char_count = {}
        max_length = 0
        max_start = 0
        start = 0
        
        for end in range(len(text)):
            # Expand window
            char_count[text[end]] = char_count.get(text[end], 0) + 1
            
            # Contract window if needed
            while len(char_count) > k:
                char_count[text[start]] -= 1
                if char_count[text[start]] == 0:
                    del char_count[text[start]]
                start += 1
            
            # Update maximum if current window is longer
            if end - start + 1 > max_length:
                max_length = end - start + 1
                max_start = start
        
        return text[max_start:max_start + max_length]
    
    @staticmethod
    def minimum_window_substring(text: str, pattern: str) -> str:
        """
        Finds the minimum window in text that contains all characters 
        from pattern using variable-size sliding window.
        
        This demonstrates how to:
        1. Handle complex window criteria
        2. Optimize window updates
        3. Track multiple conditions simultaneously
        
        Time: O(n), Space: O(k) where k is pattern length
        """
        if not text or not pattern:
            return ""
        
        # Initialize pattern frequency map
        pattern_freq = {}
        for char in pattern:
            pattern_freq[char] = pattern_freq.get(char, 0) + 1
        
        # Initialize window variables
        window_freq = {}
        required = len(pattern_freq)
        formed = 0
        min_length = float('inf')
        min_start = 0
        
        start = 0
        for end in range(len(text)):
            # Expand window
            char = text[end]
            window_freq[char] = window_freq.get(char, 0) + 1
            
            # Check if current character helps form pattern
            if (char in pattern_freq and 
                window_freq[char] == pattern_freq[char]):
                formed += 1
            
            # Try to minimize window
            while formed == required:
                # Update minimum window if current is smaller
                if end - start + 1 < min_length:
                    min_length = end - start + 1
                    min_start = start
                
                # Remove leftmost character
                char = text[start]
                window_freq[char] -= 1
                
                # Check if removed character affects pattern formation
                if (char in pattern_freq and 
                    window_freq[char] < pattern_freq[char]):
                    formed -= 1
                
                start += 1
        
        return (text[min_start:min_start + min_length] 
                if min_length != float('inf') else "")`,

  exercises: [
    {
      prompt: "Implement a function that finds the longest substring containing all vowels in a given string. Use the sliding window technique to achieve optimal performance.",
      initialCode: `def longest_vowel_substring(text: str) -> str:
    # Write your solution here
    pass`,
      solution: `def longest_vowel_substring(text: str) -> str:
    """
    Finds the longest substring containing all vowels using sliding window.
    
    This solution demonstrates:
    1. Variable-size window management
    2. Efficient character tracking
    3. Optimal result maintenance
    
    Time: O(n), Space: O(1)
    """
    vowels = set('aeiou')
    window_vowels = set()
    max_length = 0
    max_start = 0
    start = 0
    
    # Process text character by character
    for end in range(len(text)):
        # Add current character if it's a vowel
        if text[end].lower() in vowels:
            window_vowels.add(text[end].lower())
        
        # If we have all vowels, try to minimize window
        while len(window_vowels) == len(vowels):
            # Update maximum if current window is longer
            if end - start + 1 > max_length:
                max_length = end - start + 1
                max_start = start
            
            # Try to remove start character
            if text[start].lower() in vowels:
                # Check if any other occurrence in window
                has_other = False
                for i in range(start + 1, end + 1):
                    if text[i].lower() == text[start].lower():
                        has_other = True
                        break
                if not has_other:
                    window_vowels.remove(text[start].lower())
            start += 1
    
    return text[max_start:max_start + max_length] if max_length > 0 else ""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: "Implement a function that finds the minimum window size containing at least k different characters. Return both the window size and the starting position.",
      initialCode: `def min_window_k_distinct(text: str, k: int) -> tuple:
    # Write your solution here
    pass`,
      solution: `def min_window_k_distinct(text: str, k: int) -> tuple:
    """
    Finds smallest window with k distinct characters.
    Returns (window_size, start_position) or (-1, -1) if impossible.
    
    This solution demonstrates:
    1. Efficient window size minimization
    2. Character uniqueness tracking
    3. Early termination optimization
    
    Time: O(n), Space: O(k)
    """
    if not text or k <= 0 or k > len(set(text)):
        return (-1, -1)
    
    char_freq = {}
    min_length = float('inf')
    min_start = 0
    start = 0
    
    for end in range(len(text)):
        # Add current character to window
        char_freq[text[end]] = char_freq.get(text[end], 0) + 1
        
        # Once we have k distinct characters, try to minimize
        while len(char_freq) >= k:
            # Update minimum if current window is smaller
            if end - start + 1 < min_length:
                min_length = end - start + 1
                min_start = start
            
            # Remove start character
            char_freq[text[start]] -= 1
            if char_freq[text[start]] == 0:
                del char_freq[text[start]]
            start += 1
    
    return (min_length, min_start) if min_length != float('inf') else (-1, -1)`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why is the sliding window technique more efficient than nested loops for string processing?',
      options: [
        'It uses less memory for storage',
        'It avoids revisiting characters multiple times',
        'It can handle larger strings',
        'It works with any string pattern',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. While sliding window can be memory efficient, this is not its main advantage over nested loops.',
        'Correct! The sliding window technique processes each character exactly once by maintaining state information as the window moves, unlike nested loops which may process the same characters multiple times.',
        'Incorrect. Both approaches can handle large strings, but sliding window does it more efficiently.',
        'Incorrect. The technique is actually best suited for specific types of pattern matching problems.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the key difference between fixed-size and variable-size sliding windows?',
      options: [
        'Fixed-size windows are always faster',
        'Variable-size windows use more memory',
        'Fixed-size windows maintain constant length while variable-size adjust based on conditions',
        'Variable-size windows only work with small strings',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Performance depends on the specific problem being solved.',
        'Incorrect. Memory usage depends on what is being tracked, not the window type.',
        'Correct! Fixed-size windows maintain the same length throughout processing, while variable-size windows can grow or shrink based on problem conditions.',
        'Incorrect. Variable-size windows can work with strings of any length.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const stringReversalData: LessonContent = {
  title: 'Understanding String Reversal Techniques',
  content: `<p>
Imagine you have a row of cards laid out on a table, and you want to reverse their order. You might think about flipping them one by one, or perhaps picking them up from one end and placing them down in reverse order. Similarly, when reversing strings, we have several approaches available, each with its own advantages and considerations.
</p>

<h3><u>Understanding String Reversal</u></h3>

<p>
At its core, string reversal involves taking a sequence of characters and producing a new sequence where the order is reversed. While this might seem straightforward, there are several important considerations that affect how we approach this task:
</p>

<h4><b>Fundamental Considerations</b></h4>

<p>
When reversing strings, we need to think about:
</p>

<li>String immutability in most programming languages</li>
<li>Memory constraints and efficiency</li>
<li>Special character handling (like Unicode)</li>
<li>Whether in-place reversal is possible or desired</li>

<h3><u>Reversal Approaches</u></h3>

<h4><b>1. Two-Pointer Technique</b></h4>
<p>
Think of this like two people standing at opposite ends of a line of cards, swapping cards as they walk toward each other. This approach:
</p>
<li>Uses minimal extra space</li>
<li>Works efficiently for arrays or mutable strings</li>
<li>Requires only one pass through the string</li>

<h4><b>2. Stack-Based Reversal</b></h4>
<p>
Imagine picking up cards one by one and placing them in a stack, then removing them to create the reverse order. This method:
</p>
<li>Works well with immutable strings</li>
<li>Provides clear, intuitive implementation</li>
<li>Uses additional space proportional to string length</li>

<h4><b>Special Cases and Considerations</b></h4>

<table>
<tr><th>Scenario</th><th>Challenge</th><th>Solution</th></tr>
<tr>
  <td>Unicode Characters</td>
  <td>Multi-byte characters may be split</td>
  <td>Use character-aware functions</td>
</tr>
<tr>
  <td>Word Reversal</td>
  <td>Maintaining word boundaries</td>
  <td>Two-step reversal process</td>
</tr>
<tr>
  <td>Memory Constraints</td>
  <td>Limited available memory</td>
  <td>In-place algorithm with swapping</td>
</tr>
</table>

<h3><u>Performance Analysis</u></h3>

<p>
Different reversal techniques have different performance characteristics:
</p>

<table>
<tr><th>Technique</th><th>Time Complexity</th><th>Space Complexity</th><th>Best For</th></tr>
<tr>
  <td>Two-Pointer</td>
  <td>O(n)</td>
  <td>O(1)</td>
  <td>Mutable sequences, memory constraints</td>
</tr>
<tr>
  <td>Stack-Based</td>
  <td>O(n)</td>
  <td>O(n)</td>
  <td>Immutable strings, clarity</td>
</tr>
<tr>
  <td>Built-in Methods</td>
  <td>O(n)</td>
  <td>O(n)</td>
  <td>Simple cases, readability</td>
</tr>
</table>`,

  codeExample: `# Comprehensive demonstration of string reversal techniques

class StringReverser:
    """
    A collection of string reversal algorithms demonstrating different
    approaches and their applications.
    """
    
    @staticmethod
    def reverse_two_pointer(chars: list) -> None:
        """
        Reverses a string using the two-pointer technique.
        This demonstrates in-place reversal with minimal space usage.
        
        Time: O(n), Space: O(1)
        """
        # Initialize pointers at both ends
        left, right = 0, len(chars) - 1
        
        # Continue swapping until pointers meet in the middle
        while left < right:
            # Swap characters at both pointers
            chars[left], chars[right] = chars[right], chars[left]
            # Move pointers toward center
            left += 1
            right -= 1
    
    @staticmethod
    def reverse_stack_based(text: str) -> str:
        """
        Reverses a string using a stack-based approach.
        Demonstrates handling immutable strings with clear implementation.
        
        Time: O(n), Space: O(n)
        """
        # Create a stack to store characters
        stack = []
        
        # Push all characters onto stack
        for char in text:
            stack.append(char)
        
        # Pop characters to build reversed string
        reversed_chars = []
        while stack:
            reversed_chars.append(stack.pop())
        
        # Join characters into final string
        return ''.join(reversed_chars)
    
    @staticmethod
    def reverse_words(text: str) -> str:
        """
        Reverses each word in a string while maintaining word order.
        Demonstrates handling complex reversal requirements.
        
        Time: O(n), Space: O(n)
        """
        # First, split the string into words
        words = text.split()
        
        # Reverse each word individually
        reversed_words = []
        for word in words:
            # Convert word to list for reversal
            chars = list(word)
            StringReverser.reverse_two_pointer(chars)
            reversed_words.append(''.join(chars))
        
        # Join words back together
        return ' '.join(reversed_words)
    
    @staticmethod
    def reverse_unicode_aware(text: str) -> str:
        """
        Reverses a string while properly handling Unicode characters.
        Demonstrates careful handling of multi-byte characters.
        
        Time: O(n), Space: O(n)
        """
        # Convert string to list of Unicode characters
        chars = list(text)
        
        # Use two-pointer technique on character list
        left, right = 0, len(chars) - 1
        while left < right:
            chars[left], chars[right] = chars[right], chars[left]
            left += 1
            right -= 1
        
        # Join characters back into string
        return ''.join(chars)
    
    @staticmethod
    def reverse_by_k_positions(text: str, k: int) -> str:
        """
        Reverses every k characters in the string.
        Demonstrates handling specific reversal patterns.
        
        Time: O(n), Space: O(n)
        """
        if k <= 0:
            return text
            
        # Convert to list for manipulation
        chars = list(text)
        
        # Process string in chunks of size k
        for i in range(0, len(chars), k):
            # Calculate end of current chunk
            end = min(i + k, len(chars))
            
            # Reverse current chunk
            left, right = i, end - 1
            while left < right:
                chars[left], chars[right] = chars[right], chars[left]
                left += 1
                right -= 1
        
        return ''.join(chars)`,

  exercises: [
    {
      prompt: "Implement a function that reverses a string but keeps the special characters in their original positions. For example, 'ab!cd' should become 'dc!ba'.",
      initialCode: `def reverse_keep_special(text: str) -> str:
    # Write your solution here
    pass`,
      solution: `def reverse_keep_special(text: str) -> str:
    """
    Reverses alphanumeric characters while keeping special characters fixed.
    
    This solution demonstrates:
    1. Handling special characters
    2. Two-pointer technique with conditions
    3. In-place manipulation with tracking
    
    Time: O(n), Space: O(n)
    """
    # Convert to list for manipulation
    chars = list(text)
    
    # Create array of just letters, maintaining indices
    letters = [(c, i) for i, c in enumerate(chars) 
              if c.isalnum()]
    
    # Reverse letters using two pointers
    left, right = 0, len(letters) - 1
    while left < right:
        # Swap letters at their original positions
        i1, i2 = letters[left][1], letters[right][1]
        chars[i1], chars[i2] = chars[i2], chars[i1]
        left += 1
        right -= 1
    
    return ''.join(chars)

# Example usage:
# print(reverse_keep_special("ab!cd"))  # "dc!ba"
# print(reverse_keep_special("a@b#c"))  # "c@b#a"`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: "Implement a function that rotates a string by k positions to the right while only using string reversal operations. For example, rotating 'abcde' by 2 positions should give 'deabc'.",
      initialCode: `def rotate_string(text: str, k: int) -> str:
    # Write your solution here
    pass`,
      solution: `def rotate_string(text: str, k: int) -> str:
    """
    Rotates string right by k positions using only reversal operations.
    
    This solution demonstrates:
    1. Using multiple reversals to achieve rotation
    2. Handling edge cases efficiently
    3. Modular arithmetic for rotation
    
    Time: O(n), Space: O(n)
    """
    if not text or k == 0:
        return text
    
    # Normalize k to be within string length
    k = k % len(text)
    if k == 0:
        return text
    
    # Helper function to reverse portion of string
    def reverse_portion(chars: list, start: int, end: int):
        while start < end:
            chars[start], chars[end] = chars[end], chars[start]
            start += 1
            end -= 1
    
    # Convert to list for manipulation
    chars = list(text)
    n = len(chars)
    
    # Three-step reversal algorithm:
    # 1. Reverse entire string
    reverse_portion(chars, 0, n - 1)
    
    # 2. Reverse first k characters
    reverse_portion(chars, 0, k - 1)
    
    # 3. Reverse remaining characters
    reverse_portion(chars, k, n - 1)
    
    return ''.join(chars)

# Example usage:
# print(rotate_string("abcde", 2))  # "deabc"
# print(rotate_string("hello", 3))  # "llohe"`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why might the two-pointer technique be preferred over a stack-based approach for string reversal?',
      options: [
        'It is always faster',
        'It uses constant extra space',
        'It is easier to implement',
        'It works better with Unicode',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Both approaches have O(n) time complexity.',
        'Correct! The two-pointer technique requires only O(1) extra space for swapping, while stack-based approaches require O(n) space to store all characters.',
        'Incorrect. Stack-based approaches are often simpler to implement.',
        'Incorrect. Unicode handling depends on the implementation, not the reversal technique.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the main challenge when reversing a string with Unicode characters?',
      options: [
        'It takes more time',
        'Multi-byte characters might be split incorrectly',
        'The string becomes longer',
        'Special characters get corrupted',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Time complexity remains O(n).',
        'Correct! Unicode characters can occupy multiple bytes, and naive byte-by-byte reversal might split these characters incorrectly, corrupting the text.',
        'Incorrect. The string length remains the same.',
        'Incorrect. Special characters themselves are not the main concern.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const palindromeCheckData: LessonContent = {
  title: 'Understanding Palindrome Detection',
  content: `<p>
Imagine looking at your reflection in a mirror. Just as the reflection shows the same image in reverse, a palindrome reads the same forwards and backwards. This simple concept leads us into fascinating territory in string processing, with applications ranging from DNA sequence analysis to word puzzles.
</p>

<h3><u>Understanding Palindromes</u></h3>

<p>
A palindrome has a beautiful symmetry about its center. Think of it like folding a piece of paper with text - in a palindrome, the characters would align perfectly. This property gives us several ways to think about and detect palindromes:
</p>

<h4><b>Types of Palindromes</b></h4>
<p>
Just as there are different types of symmetry in nature, there are different types of palindromes:
</p>

<li>Character palindromes: "radar", "level"</li>
<li>Word palindromes: "Was it a car or a cat I saw"</li>
<li>Number palindromes: "12321"</li>
<li>Even-length palindromes: "noon"</li>
<li>Odd-length palindromes: "level"</li>

<h3><u>Detection Approaches</u></h3>

<h4><b>1. Two-Pointer Technique</b></h4>
<p>
Think of this like two people starting at opposite ends of a line, walking toward each other and comparing what they see at each step. This approach:
</p>
<li>Uses minimal extra space</li>
<li>Makes exactly n/2 comparisons</li>
<li>Can stop early on mismatches</li>

<h4><b>2. Reversal and Compare</b></h4>
<p>
Like creating a mirror image and checking if it matches the original:
</p>
<li>Conceptually simple to understand</li>
<li>Requires extra space for the reversed string</li>
<li>Must process entire string</li>

<h4><b>Advanced Palindrome Concepts</b></h4>

<table>
<tr><th>Concept</th><th>Description</th><th>Example</th></tr>
<tr>
  <td>Almost Palindrome</td>
  <td>One character away from palindrome</td>
  <td>"racar" → remove 'c' → "raar"</td>
</tr>
<tr>
  <td>Palindromic Substrings</td>
  <td>Palindromes within text</td>
  <td>"abaxy" → "aba"</td>
</tr>
<tr>
  <td>Palindrome Pairs</td>
  <td>Words that form palindromes together</td>
  <td>"bat", "tab" → "battab"</td>
</tr>
</table>

<h3><u>Performance Considerations</u></h3>

<p>
Different approaches to palindrome detection have different performance implications:
</p>

<table>
<tr><th>Approach</th><th>Time Complexity</th><th>Space Complexity</th><th>Early Exit?</th></tr>
<tr>
  <td>Two-Pointer</td>
  <td>O(n)</td>
  <td>O(1)</td>
  <td>Yes</td>
</tr>
<tr>
  <td>Reversal</td>
  <td>O(n)</td>
  <td>O(n)</td>
  <td>No</td>
</tr>
<tr>
  <td>Recursive</td>
  <td>O(n)</td>
  <td>O(n)</td>
  <td>Yes</td>
</tr>
</table>`,

  codeExample: `# Comprehensive demonstration of palindrome detection techniques

class PalindromeDetector:
    """
    A collection of palindrome detection algorithms with detailed 
    explanations of their approaches and trade-offs.
    """
    
    @staticmethod
    def is_palindrome_two_pointer(text: str) -> bool:
        """
        Checks if text is palindrome using two-pointer technique.
        This is the most space-efficient approach.
        
        Time: O(n), Space: O(1)
        """
        # First, convert to lowercase and remove non-alphanumeric
        cleaned = ''.join(c.lower() for c in text if c.isalnum())
        
        # Initialize pointers at both ends
        left, right = 0, len(cleaned) - 1
        
        # Compare characters moving inward
        while left < right:
            if cleaned[left] != cleaned[right]:
                return False
            left += 1
            right -= 1
        
        return True
    
    @staticmethod
    def is_palindrome_recursive(text: str, start: int = 0, end: int = None) -> bool:
        """
        Recursively checks if text is palindrome.
        Demonstrates divide-and-conquer approach.
        
        Time: O(n), Space: O(n) due to recursion stack
        """
        # Clean text on first call
        if end is None:
            text = ''.join(c.lower() for c in text if c.isalnum())
            end = len(text) - 1
        
        # Base cases
        if start >= end:
            return True
            
        # Compare current characters and recur for rest
        if text[start] != text[end]:
            return False
            
        return PalindromeDetector.is_palindrome_recursive(text, start + 1, end - 1)
    
    @staticmethod
    def find_palindromic_substrings(text: str) -> list:
        """
        Finds all palindromic substrings in text.
        Uses center expansion technique.
        
        Time: O(n²), Space: O(1) excluding output
        """
        results = []
        
        def expand_around_center(left: int, right: int):
            """Helper function to expand around a center point"""
            while (left >= 0 and right < len(text) and 
                   text[left] == text[right]):
                if right - left + 1 > 1:  # Avoid single characters
                    results.append(text[left:right + 1])
                left -= 1
                right += 1
        
        # Try all possible centers
        for i in range(len(text)):
            # Odd length palindromes
            expand_around_center(i, i)
            # Even length palindromes
            expand_around_center(i, i + 1)
        
        return list(set(results))  # Remove duplicates
    
    @staticmethod
    def is_almost_palindrome(text: str) -> bool:
        """
        Checks if string can become palindrome by removing one character.
        
        Time: O(n), Space: O(1)
        """
        def is_palindrome_range(start: int, end: int) -> bool:
            """Helper to check palindrome in range"""
            while start < end:
                if text[start] != text[end]:
                    return False
                start += 1
                end -= 1
            return True
        
        # Clean the text
        cleaned = ''.join(c.lower() for c in text if c.isalnum())
        
        # Initialize pointers
        left, right = 0, len(cleaned) - 1
        
        # Check character by character
        while left < right:
            if cleaned[left] != cleaned[right]:
                # Try removing either character
                return (is_palindrome_range(left + 1, right) or
                       is_palindrome_range(left, right - 1))
            left += 1
            right -= 1
        
        return True`,

  exercises: [
    {
      prompt: "Implement a function that finds the longest palindromic substring in a string. Return both the palindrome and its length.",
      initialCode: `def longest_palindrome_substring(text: str) -> tuple:
    # Write your solution here
    pass`,
      solution: `def longest_palindrome_substring(text: str) -> tuple:
    """
    Finds longest palindromic substring using center expansion.
    Returns (palindrome, length).
    
    This solution demonstrates:
    1. Center expansion technique
    2. Handling both odd and even length palindromes
    3. Efficient substring checking
    
    Time: O(n²), Space: O(1)
    """
    if not text:
        return ("", 0)
    
    start = 0  # Start index of longest palindrome
    max_length = 1  # Length of longest palindrome
    
    def expand_around_center(left: int, right: int) -> tuple:
        """Helper function to expand around center"""
        while (left >= 0 and right < len(text) and 
               text[left] == text[right]):
            left -= 1
            right += 1
        # Return start and length of palindrome
        return left + 1, right - left - 1
    
    # Check each possible center
    for i in range(len(text)):
        # Odd length palindromes
        l1, len1 = expand_around_center(i, i)
        # Even length palindromes
        l2, len2 = expand_around_center(i, i + 1)
        
        # Update if longer palindrome found
        if len1 > max_length:
            start = l1
            max_length = len1
        if len2 > max_length:
            start = l2
            max_length = len2
    
    return (text[start:start + max_length], max_length)`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: "Implement a function that determines if a list of strings contains any two strings that can be concatenated to form a palindrome.",
      initialCode: `def has_palindrome_pair(words: list) -> bool:
    # Write your solution here
    pass`,
      solution: `def has_palindrome_pair(words: list) -> bool:
    """
    Checks if any two words can form a palindrome when concatenated.
    
    This solution demonstrates:
    1. Efficient palindrome checking
    2. String manipulation techniques
    3. Early termination optimization
    
    Time: O(n*k²) where k is max word length, Space: O(n*k)
    """
    def is_palindrome(s: str, start: int, end: int) -> bool:
        """Helper to check if substring is palindrome"""
        while start < end:
            if s[start] != s[end]:
                return False
            start += 1
            end -= 1
        return True
    
    # Create dictionary of reversed words for O(1) lookup
    word_dict = {word: i for i, word in enumerate(words)}
    
    for i, word in enumerate(words):
        n = len(word)
        
        # Check each possible split point
        for j in range(n + 1):
            # Check if left part can form palindrome
            if is_palindrome(word, 0, j - 1):
                # Look for matching right part
                rev = word[j:][::-1]
                if rev in word_dict and word_dict[rev] != i:
                    return True
            
            # Check if right part can form palindrome
            if is_palindrome(word, j, n - 1):
                # Look for matching left part
                rev = word[:j][::-1]
                if rev in word_dict and word_dict[rev] != i:
                    return True
    
    return False`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why is the two-pointer technique generally preferred for palindrome detection?',
      options: [
        'It is easier to implement',
        'It uses constant extra space and can stop early',
        'It works better with special characters',
        'It handles even-length palindromes better',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. The reversal approach is often simpler to implement.',
        'Correct! The two-pointer technique uses O(1) extra space and can terminate early when it finds a mismatch, making it both space-efficient and potentially faster.',
        'Incorrect. Special character handling is independent of the detection technique.',
        'Incorrect. Both approaches handle even and odd-length palindromes equally well.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the main challenge when implementing palindrome detection for word palindromes versus character palindromes?',
      options: [
        'Word palindromes are always longer',
        'Handling spaces and punctuation between words',
        'Word palindromes use more memory',
        'Word palindromes are case-sensitive',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Length is not the main challenge.',
        'Correct! Word palindromes require careful handling of spaces, punctuation, and word boundaries while maintaining the palindromic property of the entire phrase.',
        'Incorrect. Memory usage depends on implementation, not palindrome type.',
        'Incorrect. Case sensitivity can be handled similarly for both types.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const anagramCheckData: LessonContent = {
  title: 'Understanding Anagrams and Permutations',
  content: `<p>
Imagine having a set of letter tiles, like in a word game. An anagram is what happens when you rearrange these tiles to form different words. Just as the same set of tiles can create multiple valid words, the same set of characters can form different meaningful strings. This simple concept leads us into fascinating territory in string processing.
</p>

<h3><u>Understanding Anagrams</u></h3>

<p>
At their core, anagrams are about character frequency. Think of it like having a recipe - two dishes are the same if they use exactly the same ingredients in the same quantities, even if the preparation steps differ. Similarly, two strings are anagrams if they use exactly the same characters the same number of times.
</p>

<h4><b>Types of Anagram Problems</b></h4>
<p>
Just as there are different ways to work with recipe ingredients, there are different types of anagram challenges:
</p>

<li>Direct comparison: Are two strings anagrams?</li>
<li>Group finding: Group all anagrams in a set of strings</li>
<li>Substring search: Find all anagram substrings in text</li>
<li>Permutation generation: Create all possible arrangements</li>

<h3><u>Detection Approaches</u></h3>

<h4><b>1. Character Counting</b></h4>
<p>
Think of this like taking inventory of your ingredients:
</p>
<li>Count frequency of each character</li>
<li>Compare character counts between strings</li>
<li>Works well for small character sets</li>

<h4><b>2. Sorting Based</b></h4>
<p>
Like organizing ingredients alphabetically:
</p>
<li>Sort characters in both strings</li>
<li>Compare sorted strings</li>
<li>Simple but potentially slower</li>

<h4><b>Advanced Applications</b></h4>

<table>
<tr><th>Application</th><th>Description</th><th>Example</th></tr>
<tr>
  <td>Partial Anagrams</td>
  <td>Subset of characters form anagram</td>
  <td>"bigger" contains "big"</td>
</tr>
<tr>
  <td>Anagram Distance</td>
  <td>Changes needed to form anagram</td>
  <td>"cat" to "act": 2 swaps</td>
</tr>
<tr>
  <td>Multiple Anagrams</td>
  <td>Words sharing multiple arrangements</td>
  <td>"heart" → "earth", "hater"</td>
</tr>
</table>

<h3><u>Performance Analysis</u></h3>

<p>
Different approaches to anagram detection have different performance characteristics:
</p>

<table>
<tr><th>Approach</th><th>Time Complexity</th><th>Space Complexity</th><th>Best For</th></tr>
<tr>
  <td>Character Count</td>
  <td>O(n)</td>
  <td>O(k)</td>
  <td>Small alphabet size</td>
</tr>
<tr>
  <td>Sorting</td>
  <td>O(n log n)</td>
  <td>O(n)</td>
  <td>Simplicity, large alphabet</td>
</tr>
<tr>
  <td>Hash Map</td>
  <td>O(n)</td>
  <td>O(k)</td>
  <td>Flexible character set</td>
</tr>
</table>`,

  codeExample: `# Comprehensive demonstration of anagram detection techniques

class AnagramDetector:
    """
    A collection of anagram detection algorithms demonstrating different
    approaches and their applications.
    """
    
    @staticmethod
    def are_anagrams_counting(str1: str, str2: str) -> bool:
        """
        Determines if two strings are anagrams using character counting.
        This approach is optimal for strings with known character set.
        
        Time: O(n), Space: O(1) for fixed character set
        """
        # Early length check
        if len(str1) != len(str2):
            return False
            
        # Initialize character frequency counter
        char_count = [0] * 26  # Assuming lowercase letters only
        
        # Count characters in first string
        for char in str1.lower():
            if char.isalpha():
                char_count[ord(char) - ord('a')] += 1
        
        # Decrease count for second string
        for char in str2.lower():
            if char.isalpha():
                char_count[ord(char) - ord('a')] -= 1
                # If any count becomes negative, not an anagram
                if char_count[ord(char) - ord('a')] < 0:
                    return False
        
        # Verify all counts are zero
        return all(count == 0 for count in char_count)
    
    @staticmethod
    def find_anagram_groups(words: list) -> list:
        """
        Groups words that are anagrams of each other.
        Uses sorted strings as keys for grouping.
        
        Time: O(n * k log k) where k is max word length
        Space: O(n * k) for storing groups
        """
        # Dictionary to store anagram groups
        anagram_groups = {}
        
        for word in words:
            # Sort characters to create key
            sorted_word = ''.join(sorted(word.lower()))
            # Add to group (or create new group)
            if sorted_word in anagram_groups:
                anagram_groups[sorted_word].append(word)
            else:
                anagram_groups[sorted_word] = [word]
        
        # Return only groups with multiple words
        return [group for group in anagram_groups.values() 
                if len(group) > 1]
    
    @staticmethod
    def find_anagram_substrings(text: str, pattern: str) -> list:
        """
        Finds all substrings in text that are anagrams of pattern.
        Uses sliding window with character counting.
        
        Time: O(n) where n is text length
        Space: O(k) where k is pattern length
        """
        if not text or not pattern:
            return []
        
        # Initialize result list and pattern frequency map
        results = []
        pattern_freq = {}
        window_freq = {}
        
        # Count pattern frequencies
        for char in pattern:
            pattern_freq[char] = pattern_freq.get(char, 0) + 1
        
        # Initialize window
        for i in range(len(pattern)):
            if i < len(text):
                char = text[i]
                window_freq[char] = window_freq.get(char, 0) + 1
        
        # Check first window
        if window_freq == pattern_freq:
            results.append(0)
        
        # Slide window
        for i in range(len(pattern), len(text)):
            # Remove leftmost character
            left_char = text[i - len(pattern)]
            window_freq[left_char] -= 1
            if window_freq[left_char] == 0:
                del window_freq[left_char]
                
            # Add rightmost character
            right_char = text[i]
            window_freq[right_char] = window_freq.get(right_char, 0) + 1
            
            # Check current window
            if window_freq == pattern_freq:
                results.append(i - len(pattern) + 1)
        
        return results`,

  exercises: [
    {
      prompt: "Implement a function that determines if two strings are anagrams while ignoring spaces, punctuation, and case. For example, 'A decimal point' should be an anagram of 'Im a dot in place'.",
      initialCode: `def are_phrase_anagrams(phrase1: str, phrase2: str) -> bool:
    # Write your solution here
    pass`,
      solution: `def are_phrase_anagrams(phrase1: str, phrase2: str) -> bool:
    """
    Checks if two phrases are anagrams, ignoring spaces,
    punctuation, and case.
    
    This solution demonstrates:
    1. Character frequency counting with filtering
    2. Case-insensitive comparison
    3. Efficient string processing
    
    Time: O(n), Space: O(1) for fixed charset
    """
    # Helper function to clean and count characters
    def build_char_count(phrase: str) -> dict:
        char_count = {}
        for char in phrase.lower():
            if char.isalnum():
                char_count[char] = char_count.get(char, 0) + 1
        return char_count
    
    # Build character frequency maps
    count1 = build_char_count(phrase1)
    count2 = build_char_count(phrase2)
    
    # Compare frequency maps
    return count1 == count2

# Example usage:
# print(are_phrase_anagrams("A decimal point", "Im a dot in place"))  # True
# print(are_phrase_anagrams("The eyes", "They see"))  # True`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: "Implement a function that finds the minimum number of character swaps needed to convert one string into an anagram of another string. If it's impossible, return -1.",
      initialCode: `def min_swaps_to_anagram(str1: str, str2: str) -> int:
    # Write your solution here
    pass`,
      solution: `def min_swaps_to_anagram(str1: str, str2: str) -> int:
    """
    Calculates minimum swaps needed to create anagram.
    Returns -1 if impossible.
    
    This solution demonstrates:
    1. Character frequency analysis
    2. Greedy swap counting
    3. Impossibility detection
    
    Time: O(n), Space: O(k) where k is charset size
    """
    # Early validation
    if len(str1) != len(str2):
        return -1
    
    # Count frequencies in both strings
    freq1 = {}
    freq2 = {}
    for c1, c2 in zip(str1, str2):
        freq1[c1] = freq1.get(c1, 0) + 1
        freq2[c2] = freq2.get(c2, 0) + 1
    
    # Check if anagram is possible
    if freq1.keys() != freq2.keys():
        return -1
    for char in freq1:
        if freq1[char] != freq2[char]:
            return -1
    
    # Count mismatches at each position
    mismatches = sum(c1 != c2 for c1, c2 in zip(str1, str2))
    
    # Each swap fixes two positions
    return mismatches // 2

# Example usage:
# print(min_swaps_to_anagram("cat", "act"))  # 1
# print(min_swaps_to_anagram("cat", "dog"))  # -1`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why might you choose character counting over sorting for anagram detection?',
      options: [
        'It uses less memory',
        'It is easier to implement',
        'It has better time complexity',
        'It works better with Unicode',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Both approaches can be implemented with efficient memory usage.',
        'Incorrect. Sorting might actually be simpler to implement in some cases.',
        'Correct! Character counting has O(n) time complexity, while sorting-based approaches require O(n log n) time.',
        'Incorrect. Both approaches can be adapted to handle Unicode characters.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the main challenge when implementing anagram detection for phrases versus single words?',
      options: [
        'Phrases are always longer',
        'Handling spaces and punctuation correctly',
        'Memory constraints',
        'Time complexity differences',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Length is not the main challenge.',
        'Correct! Phrases require careful handling of spaces, punctuation, and case, while maintaining accurate character frequency counting for the actual letters.',
        'Incorrect. Memory usage is similar for both cases.',
        'Incorrect. Time complexity remains the same.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const kmpAlgorithmData: LessonContent = {
  title: 'Understanding the Knuth-Morris-Pratt (KMP) Algorithm',
  content: `<p>
Imagine you're reading a book and searching for a specific phrase. When you find a mismatch, instead of starting over from the beginning of the phrase each time, you might remember what you've already matched to avoid unnecessary comparisons. This is exactly what makes the KMP algorithm so efficient - it learns from previous comparisons to avoid redundant work.
</p>

<h3><u>Core Concepts of KMP</u></h3>

<p>
The key insight of KMP is that when a mismatch occurs, we often already know about part of the text we're comparing against. Think of it like this: if you're looking for the word "example" and you match "exam" but then find a mismatch, you don't need to start over completely - you might already know that "am" appears at the current position.
</p>

<h4><b>The Pattern Table</b></h4>
<p>
The pattern table (also called the failure function or LPS array) is like a cheat sheet that tells us where to continue from when we find a mismatch. Here's how to think about it:
</p>

<li>For each position, we store the length of the longest proper prefix that is also a suffix</li>
<li>This tells us how much of what we've already seen can be reused</li>
<li>Building this table is what makes KMP special and efficient</li>

<h3><u>Understanding the Algorithm</u></h3>

<h4><b>Pattern Table Construction</b></h4>
<table>
<tr><th>Phase</th><th>Purpose</th><th>Example</th></tr>
<tr>
  <td>Initialization</td>
  <td>Set up initial values</td>
  <td>Pattern: "ABABC" → [0,0,...]</td>
</tr>
<tr>
  <td>Prefix Analysis</td>
  <td>Find matching prefixes/suffixes</td>
  <td>"ABAB" → [0,0,1,2]</td>
</tr>
<tr>
  <td>Table Completion</td>
  <td>Complete failure function</td>
  <td>"ABABC" → [0,0,1,2,0]</td>
</tr>
</table>

<h4><b>Pattern Matching Phase</b></h4>
<p>
Once we have our pattern table, the actual matching process becomes much more efficient:
</p>

<li>We keep track of matched characters in the pattern</li>
<li>On mismatch, we consult the pattern table to know where to continue</li>
<li>We never need to go back in the text we're searching</li>

<h3><u>Performance Analysis</u></h3>

<p>
KMP provides significant performance improvements over naive string matching:
</p>

<table>
<tr><th>Aspect</th><th>Naive Approach</th><th>KMP Algorithm</th></tr>
<tr>
  <td>Time Complexity</td>
  <td>O(mn)</td>
  <td>O(m+n)</td>
</tr>
<tr>
  <td>Preprocessing Time</td>
  <td>None</td>
  <td>O(m)</td>
</tr>
<tr>
  <td>Space Complexity</td>
  <td>O(1)</td>
  <td>O(m)</td>
</tr>
<tr>
  <td>Text Backtracking</td>
  <td>Yes</td>
  <td>No</td>
</tr>
</table>`,

  codeExample: `# Comprehensive implementation of KMP algorithm with detailed explanations

class KMPMatcher:
    """
    Implementation of the Knuth-Morris-Pratt string matching algorithm
    with detailed explanations of each step.
    """
    
    @staticmethod
    def build_pattern_table(pattern: str) -> list:
        """
        Builds the pattern table (failure function) for KMP algorithm.
        
        This function demonstrates how to:
        1. Analyze pattern for prefix-suffix matches
        2. Build the failure function incrementally
        3. Handle pattern self-similarities
        
        Time: O(m) where m is pattern length
        Space: O(m) for the table
        """
        # Initialize the pattern table with zeros
        # The first position is always 0 as there's no proper prefix yet
        m = len(pattern)
        table = [0] * m
        
        # Start computing the table for each position
        # We start from 1 as table[0] is always 0
        length = 0  # Length of current matched prefix
        i = 1       # Current position we're computing
        
        while i < m:
            if pattern[i] == pattern[length]:
                # We found a matching character, extend the prefix
                length += 1
                table[i] = length
                i += 1
            else:
                if length != 0:
                    # Use the table to find the next prefix to try
                    length = table[length - 1]
                else:
                    # No more prefixes to try, mark current as 0
                    table[i] = 0
                    i += 1
        
        return table
    
    @staticmethod
    def find_pattern(text: str, pattern: str) -> list:
        """
        Finds all occurrences of pattern in text using KMP algorithm.
        
        This function demonstrates:
        1. Using the pattern table for efficient matching
        2. Avoiding text backtracking
        3. Handling multiple pattern occurrences
        
        Time: O(n + m) where n is text length, m is pattern length
        Space: O(m) for pattern table
        """
        if not pattern or not text:
            return []
            
        # First, build the pattern table
        pattern_table = KMPMatcher.build_pattern_table(pattern)
        
        # Initialize result list and matching position
        matches = []
        j = 0  # Position in pattern
        i = 0  # Position in text
        
        # Process the text character by character
        while i < len(text):
            if pattern[j] == text[i]:
                i += 1
                j += 1
                
                # If we've matched the entire pattern
                if j == len(pattern):
                    matches.append(i - j)  # Record match position
                    j = pattern_table[j - 1]  # Look for next match
            else:
                if j != 0:
                    # Use pattern table to skip comparisons
                    j = pattern_table[j - 1]
                else:
                    # No match starting here, move to next text position
                    i += 1
        
        return matches
    
    @staticmethod
    def demonstrate_pattern_table(pattern: str) -> None:
        """
        Educational function that demonstrates how the pattern table
        is built, with step-by-step explanation.
        """
        table = [0] * len(pattern)
        print(f"Building pattern table for: {pattern}")
        print("Initial table:", table)
        
        length = 0
        i = 1
        
        while i < len(pattern):
            print(f"\nChecking position {i} ({pattern[i]})")
            print(f"Current prefix length: {length}")
            
            if pattern[i] == pattern[length]:
                length += 1
                table[i] = length
                print(f"Match found! Updated table: {table}")
            else:
                if length != 0:
                    length = table[length - 1]
                    print(f"Mismatch, trying shorter prefix: {length}")
                    continue
                table[i] = 0
                print(f"No match, marked as 0: {table}")
            i += 1
            
        print("\nFinal pattern table:", table)`,

  exercises: [
    {
      prompt: "Implement a function that uses KMP to find all occurrences of a pattern in a text, but with the additional requirement of matching in a case-insensitive manner.",
      initialCode: `def case_insensitive_kmp(text: str, pattern: str) -> list:
    # Write your solution here
    pass`,
      solution: `def case_insensitive_kmp(text: str, pattern: str) -> list:
    """
    Implements case-insensitive KMP pattern matching.
    
    This solution demonstrates:
    1. Adapting KMP for case-insensitive matching
    2. Proper handling of character comparisons
    3. Maintaining KMP's efficiency
    
    Time: O(n + m), Space: O(m)
    """
    def build_pattern_table(pattern: str) -> list:
        # Build table using lowercase pattern
        pattern = pattern.lower()
        table = [0] * len(pattern)
        length = 0
        i = 1
        
        while i < len(pattern):
            if pattern[i] == pattern[length]:
                length += 1
                table[i] = length
                i += 1
            else:
                if length != 0:
                    length = table[length - 1]
                else:
                    table[i] = 0
                    i += 1
        return table
    
    if not pattern or not text:
        return []
    
    # Convert pattern to lowercase for table building
    pattern = pattern.lower()
    pattern_table = build_pattern_table(pattern)
    matches = []
    
    # Main matching phase
    j = 0  # Pattern position
    i = 0  # Text position
    
    while i < len(text):
        if pattern[j] == text[i].lower():
            i += 1
            j += 1
            if j == len(pattern):
                matches.append(i - j)
                j = pattern_table[j - 1]
        else:
            if j != 0:
                j = pattern_table[j - 1]
            else:
                i += 1
    
    return matches`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: "Implement a function that uses KMP to find the longest repeating substring in a text. Return both the substring and its length.",
      initialCode: `def longest_repeating_substring(text: str) -> tuple:
    # Write your solution here
    pass`,
      solution: `def longest_repeating_substring(text: str) -> tuple:
    """
    Finds longest substring that appears multiple times in text.
    Returns (substring, length).
    
    This solution demonstrates:
    1. Using KMP concepts for substring analysis
    2. Efficient pattern table utilization
    3. Handling overlapping matches
    
    Time: O(n²), Space: O(n)
    """
    def has_repeat(s: str, length: int) -> str:
        """Helper function to check if length-long substring repeats"""
        if length == 0:
            return ""
            
        # Check all possible substrings of given length
        for i in range(len(s) - length + 1):
            pattern = s[i:i + length]
            # Look for pattern in remaining text
            count = 0
            pos = -1
            
            while True:
                pos = s.find(pattern, pos + 1)
                if pos == -1:
                    break
                count += 1
                if count > 1:
                    return pattern
        
        return ""
    
    if not text:
        return ("", 0)
    
    # Binary search over possible lengths
    left, right = 0, len(text) // 2
    result = ""
    
    while left <= right:
        mid = (left + right) // 2
        candidate = has_repeat(text, mid)
        
        if candidate:
            # Found a repeating substring, try longer
            result = candidate
            left = mid + 1
        else:
            # No repeat of this length, try shorter
            right = mid - 1
    
    return (result, len(result))

# Example usage:
# print(longest_repeating_substring("banana"))  # ("ana", 3)
# print(longest_repeating_substring("abcd"))    # ("", 0)`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'What is the key insight that makes KMP more efficient than naive string matching?',
      options: [
        'It uses a hash table for faster lookups',
        'It preprocesses the pattern to avoid redundant comparisons',
        'It searches from right to left instead of left to right',
        'It uses binary search to find matches',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. KMP does not use hash tables.',
        'Correct! KMP preprocesses the pattern to build a failure function that tells us where to continue matching when we find a mismatch, avoiding redundant comparisons.',
        'Incorrect. KMP searches from left to right like naive matching.',
        'Incorrect. KMP does not use binary search.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'Why does KMP build a pattern table, and what does each value in the table represent?',
      options: [
        'To store pattern characters for lookup',
        'To count character frequencies',
        'To store lengths of matching prefix-suffixes',
        'To track position of matches',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. The pattern table does not store the characters themselves.',
        'Incorrect. KMP does not use character frequency counting.',
        'Correct! Each value in the pattern table represents the length of the longest proper prefix that is also a suffix up to that position, allowing efficient continuation after mismatches.',
        'Incorrect. Match positions are found during the search phase, not stored in the pattern table.',
      ],
      difficulty: Difficulty.Advanced,
    }
  ]
};

const rabinKarpData: LessonContent = {
  title: 'Understanding the Rabin-Karp Algorithm',
  content: `<p>
Imagine you're a librarian trying to find specific passages in books. Instead of reading every word, you might first look at the length of the passage and perhaps some quick characteristics about it – like how many words it contains or how it starts and ends. This is similar to how Rabin-Karp works: it uses a clever fingerprinting technique to quickly identify potential matches before doing detailed comparisons.
</p>

<p>
The real power of Rabin-Karp comes from its ability to compute these fingerprints (hashes) efficiently. Think of it like rolling a window along the text: as we move the window one position, we can quickly update our fingerprint rather than computing it from scratch. This is similar to how we might keep a running total while counting items rather than counting them all again each time we add one.
</p>

<h3><u>Understanding Rolling Hash</u></h3>

<p>
The rolling hash is the heart of Rabin-Karp. Let's understand it with an analogy: Imagine you have a sliding window looking at three digits of a number, say "123456". When you slide from "123" to "234", instead of adding up all the digits again, you can:
</p>

<li>Remove the contribution of the first digit (1)</li>
<li>Shift the remaining digits left (23)</li>
<li>Add the new digit at the end (4)</li>

<p>
This is exactly how Rabin-Karp's rolling hash works, just with more sophisticated mathematics to handle string characters.
</p>

<h3><u>Key Concepts</u></h3>

<h4><b>Hash Function Properties</b></h4>
<table>
<tr><th>Property</th><th>Description</th><th>Why It Matters</th></tr>
<tr>
  <td>Rolling Computation</td>
  <td>Can update hash by removing old and adding new</td>
  <td>Makes O(1) window updates possible</td>
</tr>
<tr>
  <td>Collision Handling</td>
  <td>Different strings might have same hash</td>
  <td>Requires verification of potential matches</td>
</tr>
<tr>
  <td>Modular Arithmetic</td>
  <td>Keeps hash values in manageable range</td>
  <td>Prevents integer overflow issues</td>
</tr>
</table>

<h3><u>Algorithm Steps</u></h3>

<p>
The Rabin-Karp algorithm follows a clear sequence of steps:
</p>

<h4><b>1. Preprocessing</b></h4>
<p>
First, we compute the hash value of the pattern and the first window of text:
</p>
<li>Calculate pattern hash using chosen hash function</li>
<li>Calculate hash of first m characters of text (where m is pattern length)</li>
<li>Store the modular exponent for efficient rolling</li>

<h4><b>2. Window Sliding</b></h4>
<p>
For each position in the text:
</p>
<li>Compare current window hash with pattern hash</li>
<li>If hashes match, verify actual characters</li>
<li>Roll the hash to the next window position</li>

<h3><u>Performance Analysis</u></h3>

<p>
Rabin-Karp's performance characteristics make it particularly suitable for certain scenarios:
</p>

<table>
<tr><th>Scenario</th><th>Time Complexity</th><th>Why Rabin-Karp?</th></tr>
<tr>
  <td>Single Pattern</td>
  <td>Average: O(n+m)</td>
  <td>Good for long patterns</td>
</tr>
<tr>
  <td>Multiple Patterns</td>
  <td>O(n + k) k=total length</td>
  <td>Excellent for multiple pattern search</td>
</tr>
<tr>
  <td>Worst Case</td>
  <td>O(nm)</td>
  <td>Rare with good hash function</td>
</tr>
</table>`,

  codeExample: `# Comprehensive implementation of Rabin-Karp algorithm

class RabinKarp:
    """
    Implementation of the Rabin-Karp string matching algorithm with
    detailed explanations of how the rolling hash works and why each
    step is necessary.
    """
    
    def __init__(self, prime: int = 101):
        """
        Initialize with a prime number for the hash function.
        A larger prime reduces collisions but increases computation cost.
        """
        self.prime = prime
    
    def calculate_hash(self, text: str, length: int) -> int:
        """
        Calculates initial hash value for a string segment.
        
        This method demonstrates the core concept of converting a string
        into a numeric value that can be efficiently updated. We use
        the polynomial rolling hash formula:
        hash = (s[0] * p^(m-1) + s[1] * p^(m-2) + ... + s[m-1]) mod prime
        where p is usually a small prime number (we use 256 for ASCII).
        
        Time: O(m) where m is the length
        """
        hash_value = 0
        for i in range(length):
            # Add contribution of current character
            hash_value = (hash_value * 256 + ord(text[i])) % self.prime
        return hash_value
    
    def recalculate_hash(self, old_hash: int, old_char: str, new_char: str,
                        pattern_length: int, h: int) -> int:
        """
        Updates hash value when sliding window by one position.
        
        This method shows how we can efficiently update our hash without
        recomputing it from scratch. The formula is:
        new_hash = ((old_hash - old_char * h) * 256 + new_char) mod prime
        where h is 256^(m-1) mod prime.
        
        Time: O(1)
        """
        # Remove contribution of leftmost character
        hash_value = (old_hash - ord(old_char) * h) % self.prime
        # Add contribution of new character
        hash_value = (hash_value * 256 + ord(new_char)) % self.prime
        # Ensure positive hash value
        if hash_value < 0:
            hash_value += self.prime
        return hash_value
    
    def search(self, text: str, pattern: str) -> list:
        """
        Finds all occurrences of pattern in text using Rabin-Karp.
        
        This method demonstrates the complete algorithm, showing how we:
        1. Calculate initial hashes
        2. Slide the window efficiently
        3. Handle potential matches and verification
        
        Time: Average O(n+m), Worst O(nm)
        Space: O(1)
        """
        results = []
        n = len(text)
        m = len(pattern)
        
        if m > n or m == 0:
            return results
        
        # Calculate the highest power of 256 we'll need
        h = pow(256, m - 1, self.prime)
        
        # Calculate pattern and initial window hash
        pattern_hash = self.calculate_hash(pattern, m)
        window_hash = self.calculate_hash(text, m)
        
        # Check first window
        if pattern_hash == window_hash:
            if text[:m] == pattern:  # Verify actual match
                results.append(0)
        
        # Slide pattern over text one by one
        for i in range(n - m):
            # Calculate new window hash
            window_hash = self.recalculate_hash(
                window_hash,
                text[i],
                text[i + m],
                m,
                h
            )
            
            # Check window starting at index i+1
            if pattern_hash == window_hash:
                if text[i + 1:i + m + 1] == pattern:  # Verify match
                    results.append(i + 1)
        
        return results
    
    def demonstrate_rolling_hash(self, text: str, pattern: str) -> None:
        """
        Educational method that demonstrates how the rolling hash
        computation works step by step.
        """
        print(f"Demonstrating rolling hash for text '{text}' and pattern '{pattern}'")
        m = len(pattern)
        
        # Show initial hash calculations
        pattern_hash = self.calculate_hash(pattern, m)
        print(f"\nPattern hash: {pattern_hash}")
        
        # Show window calculations
        print("\nRolling window demonstration:")
        current_hash = self.calculate_hash(text[:m], m)
        h = pow(256, m - 1, self.prime)
        
        print(f"Initial window '{text[:m]}' hash: {current_hash}")
        
        for i in range(len(text) - m):
            old_window = text[i:i+m]
            new_window = text[i+1:i+m+1]
            current_hash = self.recalculate_hash(
                current_hash,
                text[i],
                text[i + m],
                m,
                h
            )
            print(f"\nSliding window from '{old_window}' to '{new_window}'")
            print(f"New hash: {current_hash}")`,

  exercises: [
    {
      prompt: "Implement a function that uses Rabin-Karp to find the longest duplicate substring in a text. Return both the substring and its length.",
      initialCode: `def find_longest_duplicate(text: str) -> tuple:
    # Write your solution here
    pass`,
      solution: `def find_longest_duplicate(text: str) -> tuple:
    """
    Uses Rabin-Karp concepts to find the longest repeated substring.
    Returns (substring, length).
    
    This solution demonstrates:
    1. Using Rabin-Karp for substring matching
    2. Binary search over possible lengths
    3. Efficient hash computation and comparison
    
    Time: O(n log n), Space: O(n)
    """
    def search_length(length: int) -> str:
        """Helper function to search for duplicates of given length"""
        seen = set()
        h = pow(256, length - 1, 101)  # Pre-compute power
        
        # Calculate initial hash
        current_hash = 0
        for i in range(length):
            current_hash = (current_hash * 256 + ord(text[i])) % 101
        seen.add(current_hash)
        
        # Check each possible substring
        for i in range(1, len(text) - length + 1):
            # Update rolling hash
            current_hash = (current_hash - ord(text[i-1]) * h) % 101
            current_hash = (current_hash * 256 + ord(text[i+length-1])) % 101
            if current_hash in seen:
                # Verify to handle collisions
                substring = text[i:i+length]
                if text.find(substring, 0, i) != -1:
                    return substring
            seen.add(current_hash)
        return ""
    
    # Binary search over possible lengths
    left, right = 1, len(text) // 2
    result = ""
    
    while left <= right:
        mid = (left + right) // 2
        candidate = search_length(mid)
        if candidate:
            # Found a duplicate, try longer
            result = candidate
            left = mid + 1
        else:
            # No duplicate of this length, try shorter
            right = mid - 1
    
    return (result, len(result))`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: "Implement a function that uses Rabin-Karp to find all rotations of a pattern in a text. For example, for pattern 'abc', find 'abc', 'bca', and 'cab' in the text.",
      initialCode: `def find_rotations(text: str, pattern: str) -> list:
    # Write your solution here
    pass`,
      solution: `def find_rotations(text: str, pattern: str) -> list:
    """
    Uses Rabin-Karp to find all rotated versions of pattern in text.
    
    This solution demonstrates:
    1. Handling multiple related patterns efficiently
    2. Using rolling hash for pattern variations
    3. Optimizing repeated searches
    
    Time: O(n + m), Space: O(m)
    """
    def calculate_hash(s: str) -> int:
        """Calculate initial hash value"""
        hash_value = 0
        for c in s:
            hash_value = (hash_value * 256 + ord(c)) % 101
        return hash_value
    
    if not pattern or not text or len(pattern) > len(text):
        return []
    
    results = []
    m = len(pattern)
    h = pow(256, m - 1, 101)
    
    # Generate all rotations and their hashes
    rotations = set()
    for i in range(m):
        rot = pattern[i:] + pattern[:i]
        rotations.add(calculate_hash(rot))
    
    # Initialize window hash
    window_hash = calculate_hash(text[:m])
    
    # Check first window
    if window_hash in rotations:
        if text[:m] in {pattern[i:] + pattern[:i] for i in range(m)}:
            results.append(0)
    
    # Slide window
    for i in range(len(text) - m):
        # Update rolling hash
        window_hash = (window_hash - ord(text[i]) * h) % 101
        window_hash = (window_hash * 256 + ord(text[i + m])) % 101
        
        if window_hash in rotations:
            substring = text[i + 1:i + m + 1]
            if substring in {pattern[i:] + pattern[:i] for i in range(m)}:
                results.append(i + 1)
    
    return results`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'What makes the rolling hash computation in Rabin-Karp so efficient?',
      options: [
        'It uses a lookup table for fast access',
        'It recomputes the entire hash each time',
        'It updates the hash using only the changed characters',
        'It stores all possible hash values',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Rabin-Karp does not use lookup tables for hash computation.',
        'Incorrect. Recomputing the entire hash would be inefficient.',
        'Correct! The rolling hash efficiently updates by removing the contribution of the leftmost character and adding the new rightmost character, making window slides O(1) operations.',
        'Incorrect. Storing all possible hash values would be impractical.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'Why does Rabin-Karp verify matches even when hash values are equal?',
      options: [
        'To improve accuracy of the algorithm',
        'Because hash collisions can occur',
        'To handle special characters',
        'To meet time complexity requirements',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Verification is not about improving accuracy but handling collisions.',
        'Correct! Different strings can have the same hash value (collision), so we must verify actual characters to ensure a true match.',
        'Incorrect. Special character handling is separate from match verification.',
        'Incorrect. Verification is necessary regardless of time complexity goals.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const longestCommonData: LessonContent = {
  title: 'Understanding Longest Common Substring and Subsequence Problems',
  content: `<p>
Imagine you're comparing two versions of a manuscript, trying to find the longest piece of text they share. If you're looking for continuous shared text, that's like finding the longest common substring. If you're willing to skip some characters but keep things in order (like finding shared plot points that might be separated by different details), that's like finding the longest common subsequence. These problems appear frequently in applications from DNA sequence analysis to file comparison tools.
</p>

<h3><u>Core Concepts</u></h3>

<p>
The key to understanding these problems is recognizing that they build upon smaller subproblems. Think about how we naturally compare texts: we start by finding matching characters, then try to extend those matches either continuously (for substrings) or by skipping some characters (for subsequences).
</p>

<h4><b>Longest Common Substring (LCS)</b></h4>
<p>
A substring must be continuous, like finding an exact phrase that appears in both texts. Key characteristics:
</p>
<li>Characters must be consecutive</li>
<li>Must appear exactly the same in both strings</li>
<li>Can start and end at any position</li>

<h4><b>Longest Common Subsequence (LCS)</b></h4>
<p>
A subsequence allows for gaps but maintains order, like finding a story's key events even if they're separated by different details. Key characteristics:
</p>
<li>Characters maintain relative order</li>
<li>Can skip characters between matches</li>
<li>More flexible than substrings</li>

<h3><u>Dynamic Programming Approach</u></h3>

<p>
Both problems use dynamic programming, but in slightly different ways. Think of it like building a map of matches:
</p>

<table>
<tr><th>Problem</th><th>Table Cell Meaning</th><th>Fill Rule</th></tr>
<tr>
  <td>Substring</td>
  <td>Length of substring ending here</td>
  <td>Reset on mismatch</td>
</tr>
<tr>
  <td>Subsequence</td>
  <td>Length of subsequence up to here</td>
  <td>Keep previous best on mismatch</td>
</tr>
</table>

<h4><b>Understanding the DP Table</b></h4>
<p>
The table we build represents all possible comparisons between prefixes of our strings:
</p>

<h4><b>For Substrings:</b></h4>
<li>Each cell (i,j) represents length of common substring ending at these positions</li>
<li>Matching characters extend previous match</li>
<li>Mismatches reset the count to 0</li>

<h4><b>For Subsequences:</b></h4>
<li>Each cell (i,j) represents length of common subsequence up to these positions</li>
<li>Matching characters extend previous match</li>
<li>Mismatches take maximum of adjacent solutions</li>

<h3><u>Practical Applications</u></h3>

<p>
These algorithms find use in many real-world scenarios:
</p>

<table>
<tr><th>Application</th><th>Type</th><th>Example</th></tr>
<tr>
  <td>DNA Analysis</td>
  <td>Both</td>
  <td>Finding shared genetic sequences</td>
</tr>
<tr>
  <td>File Diff</td>
  <td>Subsequence</td>
  <td>Showing file changes</td>
</tr>
<tr>
  <td>Plagiarism Detection</td>
  <td>Substring</td>
  <td>Finding copied text passages</td>
</tr>
</table>`,

  codeExample: `# Comprehensive implementation of LCS problems with detailed explanations

class LongestCommonFinder:
    """
    Implementation of longest common substring and subsequence algorithms
    with detailed explanations of the dynamic programming approach.
    """
    
    @staticmethod
    def longest_common_substring(s1: str, s2: str) -> tuple:
        """
        Finds the longest common substring between two strings.
        Returns (substring, length).
        
        This demonstrates:
        1. Building and using a DP table for substrings
        2. Tracking the best solution found
        3. Reconstructing the actual substring
        
        Time: O(mn), Space: O(mn)
        """
        if not s1 or not s2:
            return ("", 0)
        
        # Initialize DP table with extra row/column for empty string
        dp = [[0] * (len(s2) + 1) for _ in range(len(s1) + 1)]
        
        # Track maximum length and ending position
        max_length = 0
        end_pos = 0
        
        # Fill the DP table
        for i in range(1, len(s1) + 1):
            for j in range(1, len(s2) + 1):
                if s1[i-1] == s2[j-1]:
                    # Characters match, extend previous match
                    dp[i][j] = dp[i-1][j-1] + 1
                    if dp[i][j] > max_length:
                        max_length = dp[i][j]
                        end_pos = i
                        
        # Extract the substring using max_length and end_pos
        start_pos = end_pos - max_length
        return (s1[start_pos:end_pos], max_length)
    
    @staticmethod
    def longest_common_subsequence(s1: str, s2: str) -> tuple:
        """
        Finds the longest common subsequence between two strings.
        Returns (subsequence, length).
        
        This demonstrates:
        1. Building DP table for subsequences
        2. Handling matches and mismatches
        3. Reconstructing the actual subsequence
        
        Time: O(mn), Space: O(mn)
        """
        if not s1 or not s2:
            return ("", 0)
        
        # Initialize DP table
        dp = [[0] * (len(s2) + 1) for _ in range(len(s1) + 1)]
        
        # Fill the DP table
        for i in range(1, len(s1) + 1):
            for j in range(1, len(s2) + 1):
                if s1[i-1] == s2[j-1]:
                    # Characters match, extend sequence
                    dp[i][j] = dp[i-1][j-1] + 1
                else:
                    # Take best of excluding either character
                    dp[i][j] = max(dp[i-1][j], dp[i][j-1])
        
        # Reconstruct the subsequence
        subsequence = []
        i, j = len(s1), len(s2)
        
        while i > 0 and j > 0:
            if s1[i-1] == s2[j-1]:
                subsequence.append(s1[i-1])
                i -= 1
                j -= 1
            elif dp[i-1][j] > dp[i][j-1]:
                i -= 1
            else:
                j -= 1
                
        return (''.join(reversed(subsequence)), dp[len(s1)][len(s2)])
    
    @staticmethod
    def visualize_dp_table(s1: str, s2: str, is_substring: bool = True):
        """
        Educational method to visualize how the DP table is built
        step by step, showing the logic behind the algorithm.
        """
        print(f"Building DP table for strings: '{s1}' and '{s2}'")
        print(f"Finding longest common {'substring' if is_substring else 'subsequence'}")
        
        # Initialize table
        dp = [[0] * (len(s2) + 1) for _ in range(len(s1) + 1)]
        
        # Show initial state
        print("\nInitial DP table:")
        print("   ", end=" ")
        print("  ".join([""] + list(s2)))
        for i in range(len(dp)):
            print(f"{s1[i-1] if i > 0 else ' '} {dp[i]}")
        
        # Fill table step by step
        for i in range(1, len(s1) + 1):
            for j in range(1, len(s2) + 1):
                if s1[i-1] == s2[j-1]:
                    if is_substring:
                        dp[i][j] = dp[i-1][j-1] + 1
                    else:
                        dp[i][j] = dp[i-1][j-1] + 1
                elif not is_substring:
                    dp[i][j] = max(dp[i-1][j], dp[i][j-1])
                
                print(f"\nAfter comparing {s1[i-1]} with {s2[j-1]}:")
                print("   ", end=" ")
                print("  ".join([""] + list(s2)))
                for k in range(len(dp)):
                    print(f"{s1[k-1] if k > 0 else ' '} {dp[k]}")`,

  exercises: [
    {
      prompt: "Implement a function that finds the longest common substring of three or more strings. Return the substring and its length.",
      initialCode: `def longest_common_substring_multiple(strings: list) -> tuple:
    # Write your solution here
    pass`,
      solution: `def longest_common_substring_multiple(strings: list) -> tuple:
    """
    Finds longest common substring among multiple strings.
    Returns (substring, length).
    
    This solution demonstrates:
    1. Extending 2D DP to handle multiple strings
    2. Efficient substring checking
    3. Handling edge cases
    
    Time: O(n * m * k) where k is number of strings
    Space: O(m) where m is shortest string length
    """
    if not strings:
        return ("", 0)
    if len(strings) == 1:
        return (strings[0], len(strings[0]))
    
    # Start with first two strings
    result = longest_common_substring_two(strings[0], strings[1])
    
    # Check each candidate against remaining strings
    for i in range(2, len(strings)):
        result = longest_common_substring_two(result[0], strings[i])
        if result[1] == 0:  # No common substring found
            return ("", 0)
    
    return result

def longest_common_substring_two(s1: str, s2: str) -> tuple:
    """Helper function for two strings"""
    if not s1 or not s2:
        return ("", 0)
    
    dp = [[0] * (len(s2) + 1) for _ in range(len(s1) + 1)]
    max_length = 0
    end_pos = 0
    
    for i in range(1, len(s1) + 1):
        for j in range(1, len(s2) + 1):
            if s1[i-1] == s2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
                if dp[i][j] > max_length:
                    max_length = dp[i][j]
                    end_pos = i
    
    return (s1[end_pos - max_length:end_pos], max_length)`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: "Implement a function that finds the shortest string that contains both input strings as subsequences. For example, for 'abc' and 'ac', return 'abc' as it contains both 'abc' and 'ac' as subsequences.",
      initialCode: `def shortest_supersequence(s1: str, s2: str) -> str:
    # Write your solution here
    pass`,
      solution: `def shortest_supersequence(s1: str, s2: str) -> str:
    """
    Finds shortest string containing both inputs as subsequences.
    Uses LCS to minimize length.
    
    This solution demonstrates:
    1. Using LCS to find common structure
    2. Building optimal solution from LCS
    3. Efficient string merging
    
    Time: O(mn), Space: O(mn)
    """
    def lcs(s1: str, s2: str) -> str:
        """Helper to find longest common subsequence"""
        dp = [[0] * (len(s2) + 1) for _ in range(len(s1) + 1)]
        
        for i in range(1, len(s1) + 1):
            for j in range(1, len(s2) + 1):
                if s1[i-1] == s2[j-1]:
                    dp[i][j] = dp[i-1][j-1] + 1
                else:
                    dp[i][j] = max(dp[i-1][j], dp[i][j-1])
        
        # Reconstruct LCS
        lcs = []
        i, j = len(s1), len(s2)
        while i > 0 and j > 0:
            if s1[i-1] == s2[j-1]:
                lcs.append(s1[i-1])
                i -= 1
                j -= 1
            elif dp[i-1][j] > dp[i][j-1]:
                i -= 1
            else:
                j -= 1
        
        return ''.join(reversed(lcs))
    
    # Get LCS of both strings
    common = lcs(s1, s2)
    
    # Build result by merging non-LCS characters
    result = []
    i = j = k = 0
    
    while i < len(s1) or j < len(s2):
        # Add chars from s1 until next LCS char
        while i < len(s1) and (k >= len(common) or s1[i] != common[k]):
            result.append(s1[i])
            i += 1
        
        # Add chars from s2 until next LCS char
        while j < len(s2) and (k >= len(common) or s2[j] != common[k]):
            result.append(s2[j])
            j += 1
        
        # Add LCS char if available
        if k < len(common):
            result.append(common[k])
            i += 1
            j += 1
            k += 1
    
    return ''.join(result)`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'What is the key difference between how the DP table is filled for substring versus subsequence problems?',
      options: [
        'Substring uses a larger table',
        'Subsequence allows diagonal moves only',
        'Substring resets on mismatch while subsequence keeps previous best',
        'Substring uses more memory',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Both use the same size table based on input strings.',
        'Incorrect. Both can use information from adjacent cells.',
        'Correct! For substrings, mismatches reset the count to 0 since substrings must be continuous. For subsequences, we keep the best previous result since we can skip characters.',
        'Incorrect. Both have the same space complexity.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'Why do we need a separate approach for reconstructing the actual sequence in LCS problems?',
      options: [
        'To improve time complexity',
        'The DP table only stores lengths, not the actual sequence',
        'To handle special characters',
        'To reduce memory'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Reconstruction is independent of time complexity concerns.',
        'Correct! The DP table only stores the lengths of common sequences at each position. To get the actual sequence, we need to trace back through the table using the stored lengths as a guide for which characters to include.',
        'Incorrect. Special character handling is unrelated to sequence reconstruction.',
        'Incorrect. Memory usage is not the primary reason for separate reconstruction.',
      ],
      difficulty: Difficulty.Advanced
    }
  ]
}

const stringParsingData: LessonContent = {
  title: 'Understanding Complex String Parsing',
  content: `<p>
Imagine you're a translator working with a complex document that contains multiple languages, formatting instructions, and special symbols. Just as a translator needs to understand both the structure and the meaning of the text, string parsing involves understanding both the patterns in our text and the rules for interpreting them.
</p>

<p>
String parsing is like solving a puzzle where we need to break down complex text into meaningful pieces while following specific rules. When we parse strings, we're essentially transforming raw text into structured data that our programs can understand and work with effectively.
</p>

<h3><u>Fundamental Parsing Concepts</u></h3>

<p>
Let's start by understanding the building blocks of string parsing. Think of these as the basic tools in our parsing toolkit:
</p>

<h4><b>1. Tokenization</b></h4>
<p>
Tokenization is like breaking a sentence into words, but with more complex rules. Imagine sorting mail in a post office - each piece needs to be categorized correctly before it can be processed:
</p>
<li>Breaking input into meaningful units (tokens)</li>
<li>Identifying different types of tokens (numbers, operators, keywords)</li>
<li>Handling special cases and edge conditions</li>

<h4><b>2. State Management</b></h4>
<p>
State management in parsing is like keeping track of context while reading a book. Just as we need to remember previous chapters to understand the current one, we need to track:
</p>
<li>Current parsing position</li>
<li>Nested structures (like parentheses)</li>
<li>Accumulated results</li>

<h3><u>Parsing Strategies</u></h3>

<h4><b>Common Approaches</b></h4>
<table>
<tr><th>Strategy</th><th>Best For</th><th>Example Use Case</th></tr>
<tr>
  <td>Recursive Descent</td>
  <td>Hierarchical structures</td>
  <td>Mathematical expressions</td>
</tr>
<tr>
  <td>State Machine</td>
  <td>Pattern-based parsing</td>
  <td>Date formats, phone numbers</td>
</tr>
<tr>
  <td>Regular Expressions</td>
  <td>Pattern matching</td>
  <td>Email validation, URL parsing</td>
</tr>
</table>

<h4><b>Advanced Parsing Techniques</b></h4>
<p>
For more complex scenarios, we often need sophisticated approaches:
</p>

<table>
<tr><th>Technique</th><th>Purpose</th><th>Considerations</th></tr>
<tr>
  <td>Backtracking</td>
  <td>Handle ambiguous patterns</td>
  <td>Performance impact</td>
</tr>
<tr>
  <td>Look-ahead</td>
  <td>Make decisions based on future input</td>
  <td>Complexity vs. accuracy</td>
</tr>
<tr>
  <td>Error Recovery</td>
  <td>Handle invalid input gracefully</td>
  <td>Balance strictness vs. flexibility</td>
</tr>
</table>

<h3><u>Common Challenges and Solutions</u></h3>

<p>
Let's examine typical parsing challenges and how to address them effectively:
</p>

<h4><b>Handling Edge Cases</b></h4>
<li>Empty input or whitespace</li>
<li>Invalid or malformed input</li>
<li>Escape sequences and special characters</li>
<li>Nested structures of varying depth</li>

<h4><b>Performance Optimization</b></h4>
<li>Minimizing backtracking</li>
<li>Efficient state management</li>
<li>Memory-efficient token handling</li>`,

  codeExample: `# Comprehensive demonstration of string parsing techniques

class StringParser:
    """
    A collection of string parsing implementations demonstrating
    different approaches and handling complex scenarios.
    """
    
    def __init__(self):
        """
        Initialize parser with common regex patterns and state tracking.
        """
        self.current_position = 0
        self.tokens = []
        self.current_token = None
    
    def parse_mathematical_expression(self, expression: str) -> float:
        """
        Parses and evaluates mathematical expressions using recursive descent.
        Handles parentheses, operators, and nested expressions.
        
        This demonstrates:
        1. Recursive parsing for hierarchical structures
        2. Operator precedence handling
        3. Error handling and validation
        
        Example: "2 * (3 + 4)" → 14
        """
        def peek() -> str:
            """Look at next character without consuming it"""
            return expression[self.current_position] if self.current_position < len(expression) else ''
        
        def consume() -> str:
            """Consume and return next character"""
            char = peek()
            self.current_position += 1
            return char
        
        def parse_number() -> float:
            """Parse a complete number from the input"""
            number = ''
            while self.current_position < len(expression):
                char = peek()
                if not (char.isdigit() or char == '.'):
                    break
                number += consume()
            return float(number)
        
        def parse_factor() -> float:
            """Parse numbers and parenthesized expressions"""
            char = peek()
            if char == '(':
                consume()  # Skip opening parenthesis
                result = parse_expression()
                consume()  # Skip closing parenthesis
                return result
            return parse_number()
        
        def parse_term() -> float:
            """Parse multiplication and division"""
            result = parse_factor()
            while self.current_position < len(expression):
                operator = peek()
                if operator not in '*/-':
                    break
                consume()
                if operator == '*':
                    result *= parse_factor()
                elif operator == '/':
                    result /= parse_factor()
            return result
        
        def parse_expression() -> float:
            """Parse addition and subtraction"""
            result = parse_term()
            while self.current_position < len(expression):
                operator = peek()
                if operator not in '+-':
                    break
                consume()
                if operator == '+':
                    result += parse_term()
                elif operator == '-':
                    result -= parse_term()
            return result
        
        # Clean input and reset position
        expression = ''.join(expression.split())  # Remove whitespace
        self.current_position = 0
        
        return parse_expression()
    
    def parse_custom_format(self, text: str, format_spec: str) -> dict:
        """
        Parses text according to a custom format specification.
        Uses state machine approach for pattern matching.
        
        This demonstrates:
        1. State machine-based parsing
        2. Format specification interpretation
        3. Flexible pattern matching
        
        Example: parse_custom_format("John:30", "name:age")
        """
        class ParserState:
            READING_FORMAT = 0
            READING_VALUE = 1
            READING_SEPARATOR = 2
        
        result = {}
        current_state = ParserState.READING_FORMAT
        current_field = ''
        current_value = ''
        format_parts = format_spec.split(':')
        text_pos = 0
        
        while text_pos < len(text):
            char = text[text_pos]
            
            if current_state == ParserState.READING_FORMAT:
                if char == ':':
                    current_state = ParserState.READING_SEPARATOR
                else:
                    current_field += char
                
            elif current_state == ParserState.READING_VALUE:
                if char == ':':
                    result[format_parts[len(result)]] = current_value
                    current_value = ''
                    current_state = ParserState.READING_SEPARATOR
                else:
                    current_value += char
                    
            elif current_state == ParserState.READING_SEPARATOR:
                current_state = ParserState.READING_VALUE
                continue
                
            text_pos += 1
        
        # Handle last field
        if current_value:
            result[format_parts[len(result)]] = current_value
            
        return result
    
    def tokenize(self, text: str) -> list:
        """
        Breaks input text into tokens based on rules.
        
        This demonstrates:
        1. Basic tokenization
        2. Token classification
        3. Special character handling
        """
        tokens = []
        current_token = ''
        
        for char in text:
            if char.isspace():
                if current_token:
                    tokens.append(current_token)
                    current_token = ''
            elif char in '()[]{},:;':
                if current_token:
                    tokens.append(current_token)
                    current_token = ''
                tokens.append(char)
            else:
                current_token += char
                
        if current_token:
            tokens.append(current_token)
            
        return tokens`,

  exercises: [
    {
      prompt: "Implement a parser that can handle nested JSON-like structures, supporting strings, numbers, arrays, and objects. The parser should handle basic escape sequences in strings.",
      initialCode: `def parse_json_like(text: str) -> dict:
    # Write your solution here
    pass`,
      solution: `def parse_json_like(text: str) -> dict:
    """
    Parses JSON-like text into Python objects.
    
    This solution demonstrates:
    1. Recursive descent parsing
    2. Nested structure handling
    3. Type inference and conversion
    4. Error handling
    
    Time: O(n), Space: O(d) where d is nesting depth
    """
    def parse_value(pos: int) -> tuple:
        """Parse a JSON value at given position"""
        while pos < len(text) and text[pos].isspace():
            pos += 1
        
        if pos >= len(text):
            raise ValueError("Unexpected end of input")
            
        char = text[pos]
        
        # Parse string
        if char == '"':
            return parse_string(pos + 1)
        
        # Parse object
        if char == '{':
            return parse_object(pos + 1)
            
        # Parse array
        if char == '[':
            return parse_array(pos + 1)
            
        # Parse number
        if char.isdigit() or char == '-':
            return parse_number(pos)
            
        raise ValueError(f"Unexpected character: {char}")
    
    def parse_string(pos: int) -> tuple:
        """Parse a string value"""
        result = ''
        while pos < len(text) and text[pos] != '"':
            if text[pos] == '\\':
                pos += 1
                if pos >= len(text):
                    raise ValueError("Unterminated escape sequence")
                result += {'n': '\\n', 't': '\\t'}.get(text[pos], text[pos])
            else:
                result += text[pos]
            pos += 1
        return result, pos + 1
    
    def parse_object(pos: int) -> tuple:
        """Parse an object structure"""
        result = {}
        
        while pos < len(text) and text[pos].isspace():
            pos += 1
            
        if text[pos] == '}':
            return result, pos + 1
            
        while True:
            # Parse key
            key, pos = parse_string(pos + 1)  # Skip quote
            
            # Skip whitespace and colon
            while pos < len(text) and text[pos].isspace():
                pos += 1
            if text[pos] != ':':
                raise ValueError("Expected ':'")
            pos += 1
            
            # Parse value
            value, pos = parse_value(pos)
            result[key] = value
            
            # Skip whitespace
            while pos < len(text) and text[pos].isspace():
                pos += 1
                
            if text[pos] == '}':
                return result, pos + 1
            if text[pos] != ',':
                raise ValueError("Expected ',' or '}'")
            pos += 1
    
    # Start parsing from the beginning
    result, pos = parse_value(0)
    
    # Check for trailing content
    while pos < len(text):
        if not text[pos].isspace():
            raise ValueError("Unexpected trailing content")
        pos += 1
        
    return result`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: "Implement a CSV parser that handles quoted fields containing commas and newlines, and supports custom delimiters and quote characters.",
      initialCode: `def parse_csv(text: str, delimiter: str = ',', quote_char: str = '"') -> list:
    # Write your solution here
    pass`,
      solution: `def parse_csv(text: str, delimiter: str = ',', quote_char: str = '"') -> list:
    """
    Parses CSV text handling quoted fields and custom delimiters.
    
    This solution demonstrates:
    1. State machine parsing
    2. Flexible delimiter handling
    3. Proper quote handling
    4. Error recovery
    
    Time: O(n), Space: O(n)
    """
    class State:
        FIELD_START = 0
        IN_FIELD = 1
        IN_QUOTED_FIELD = 2
        QUOTE_IN_QUOTED_FIELD = 3
        
    result = []
    current_row = []
    current_field = []
    state = State.FIELD_START
    
    for char in text:
        if state == State.FIELD_START:
            if char == quote_char:
                state = State.IN_QUOTED_FIELD
            elif char == delimiter:
                current_row.append('')
            elif char == '\\n':
                if current_row:
                    result.append(current_row)
                current_row = []
            else:
                current_field.append(char)
                state = State.IN_FIELD
                
        elif state == State.IN_FIELD:
            if char == delimiter:
                current_row.append(''.join(current_field))
                current_field = []
                state = State.FIELD_START
            elif char == '\\n':
                current_row.append(''.join(current_field))
                result.append(current_row)
                current_row = []
                current_field = []
                state = State.FIELD_START
            else:
                current_field.append(char)
                
        elif state == State.IN_QUOTED_FIELD:
            if char == quote_char:
                state = State.QUOTE_IN_QUOTED_FIELD
            else:
                current_field.append(char)
                
        elif state == State.QUOTE_IN_QUOTED_FIELD:
            if char == quote_char:
                current_field.append(char)
                state = State.IN_QUOTED_FIELD
            elif char == delimiter:
                current_row.append(''.join(current_field))
                current_field = []
                state = State.FIELD_START
            elif char == '\\n':
                current_row.append(''.join(current_field))
                result.append(current_row)
                current_row = []
                current_field = []
                state = State.FIELD_START
            else:
                raise ValueError(f"Invalid character after quote: {char}")
    
    # Handle last field and row
    if current_field:
        current_row.append(''.join(current_field))
    if current_row:
        result.append(current_row)
    
    return result`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why is state management important in string parsing?',
      options: [
        'To improve parsing speed',
        'To keep track of context and handle nested structures',
        'To reduce memory usage',
        'To handle special characters'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. While state management can affect performance, this is not its primary purpose.',
        'Correct! State management is crucial for understanding context and properly handling nested structures. Just as we need to remember where we are in a book to understand the current chapter, parsers need to track their current position and context to correctly interpret the input.',
        'Incorrect. Memory usage is a separate concern from state management.',
        'Incorrect. While special characters need handling, this is not the main purpose of state management.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the key advantage of recursive descent parsing over simple tokenization?',
      options: [
        'It runs faster',
        'It uses less memory',
        'It can handle nested structures and hierarchies naturally',
        'It works better with special characters',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Recursive descent is not necessarily faster than other approaches.',
        'Incorrect. Recursive descent may actually use more memory due to the call stack.',
        'Correct! Recursive descent parsing naturally handles nested structures and hierarchies by breaking down complex expressions into simpler parts that can be processed recursively. This makes it ideal for parsing things like mathematical expressions or nested data formats.',
        'Incorrect. Special character handling is independent of the parsing approach.',
      ],
      difficulty: Difficulty.Intermediate
    }
  ]
}

const editDistanceData: LessonContent = {
  title: 'Understanding Edit Distance and String Transformations',
  content: `<p>
Imagine you are a proofreader comparing two versions of a text, trying to find the smallest number of changes needed to transform one version into another. Just as a proofreader might count insertions, deletions, and substitutions, edit distance measures how different two strings are by counting the minimum number of operations needed to transform one into the other.
</p>

<p>
This concept is fundamental in many applications, from spell checking to DNA sequence analysis. When we talk about edit distance, we're essentially measuring how much "work" is required to make two strings match. Think of it like finding the shortest path between two points - there might be many ways to get there, but we're interested in the most efficient route.
</p>

<h3><u>Understanding Edit Operations</u></h3>

<p>
The basic operations we can perform are like the fundamental moves in a board game. Each has its own purpose and cost:
</p>

<h4><b>Basic Operations</b></h4>
<table>
<tr><th>Operation</th><th>Example</th><th>When Used</th></tr>
<tr>
  <td>Insertion</td>
  <td>"cat" → "cart"</td>
  <td>Adding missing characters</td>
</tr>
<tr>
  <td>Deletion</td>
  <td>"smart" → "mart"</td>
  <td>Removing extra characters</td>
</tr>
<tr>
  <td>Substitution</td>
  <td>"kitten" → "bitten"</td>
  <td>Replacing incorrect characters</td>
</tr>
</table>

<h4><b>Understanding the Process</b></h4>
<p>
When we calculate edit distance, we're essentially exploring different paths of transformations, like a navigator considering different routes. At each step, we ask:
</p>

<li>Can we match these characters directly?</li>
<li>Would it be better to insert, delete, or substitute?</li>
<li>How do our current decisions affect future possibilities?</li>

<h3><u>Dynamic Programming Solution</u></h3>

<p>
The dynamic programming approach to edit distance is like filling out a crossword puzzle - we solve smaller parts to build up to the complete solution. Each cell in our table represents the minimum cost to transform one prefix into another.
</p>

<h4><b>Building the Solution</b></h4>
<p>
We build our solution systematically, considering each prefix combination:
</p>

<li>Empty string to empty string (base case)</li>
<li>Transforming progressively longer prefixes</li>
<li>Using previous solutions to inform current decisions</li>

<h4><b>Understanding the DP Table</b></h4>
<table>
<tr><th>Cell Meaning</th><th>Calculation</th><th>Represents</th></tr>
<tr>
  <td>dp[i][j]</td>
  <td>Minimum of possible operations</td>
  <td>Cost to transform prefix1[0:i] to prefix2[0:j]</td>
</tr>
<tr>
  <td>Match case</td>
  <td>dp[i-1][j-1]</td>
  <td>Characters match, no extra cost</td>
</tr>
<tr>
  <td>Operation case</td>
  <td>1 + min(insert, delete, substitute)</td>
  <td>Minimum cost among all possible operations</td>
</tr>
</table>

<h3><u>Applications and Variations</u></h3>

<p>
Edit distance finds use in many practical applications, each with its own special considerations:
</p>

<h4><b>Practical Uses</b></h4>
<table>
<tr><th>Application</th><th>Variation</th><th>Special Consideration</th></tr>
<tr>
  <td>Spell Checking</td>
  <td>Limited operations allowed</td>
  <td>Common typing errors</td>
</tr>
<tr>
  <td>DNA Analysis</td>
  <td>Different operation costs</td>
  <td>Biological likelihood</td>
</tr>
<tr>
  <td>Text Similarity</td>
  <td>Normalized distance</td>
  <td>String length differences</td>
</tr>
</table>`,

  codeExample: `# Comprehensive implementation of edit distance algorithms

class EditDistanceCalculator:
    """
    A collection of algorithms for calculating and working with edit distances.
    Each method includes detailed explanations of the approach and reasoning.
    """
    
    def calculate_edit_distance(self, str1: str, str2: str) -> int:
        """
        Calculates the minimum edit distance between two strings.
        Uses dynamic programming to build up the solution systematically.
        
        Think of the process like filling a grid where each cell represents
        the minimum cost to transform one prefix into another.
        
        Time: O(mn), Space: O(mn) where m,n are string lengths
        """
        # Create our dynamic programming table with an extra row and column
        # for the empty string case
        m, n = len(str1), len(str2)
        dp = [[0] * (n + 1) for _ in range(m + 1)]
        
        # Initialize first row and column
        # These represent transforming to/from an empty string
        for i in range(m + 1):
            dp[i][0] = i  # Cost of deleting characters to get empty string
        for j in range(n + 1):
            dp[0][j] = j  # Cost of inserting characters from empty string
        
        # Fill in the rest of the table
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                if str1[i-1] == str2[j-1]:
                    # Characters match, no operation needed
                    dp[i][j] = dp[i-1][j-1]
                else:
                    # Take minimum of three possible operations
                    dp[i][j] = 1 + min(
                        dp[i-1][j],    # Deletion
                        dp[i][j-1],    # Insertion
                        dp[i-1][j-1]   # Substitution
                    )
        
        return dp[m][n]
    
    def get_transformation_steps(self, str1: str, str2: str) -> list:
        """
        Returns the sequence of operations needed to transform str1 into str2.
        This helps understand not just the distance but how to achieve it.
        
        Time: O(mn), Space: O(mn)
        """
        m, n = len(str1), len(str2)
        
        # Create DP table with operation tracking
        dp = [[0] * (n + 1) for _ in range(m + 1)]
        operations = [[None] * (n + 1) for _ in range(m + 1)]
        
        # Initialize base cases
        for i in range(m + 1):
            dp[i][0] = i
            if i > 0:
                operations[i][0] = ('delete', str1[i-1])
        for j in range(n + 1):
            dp[0][j] = j
            if j > 0:
                operations[0][j] = ('insert', str2[j-1])
        
        # Fill the table
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                if str1[i-1] == str2[j-1]:
                    dp[i][j] = dp[i-1][j-1]
                    operations[i][j] = ('match', str1[i-1])
                else:
                    deletion = dp[i-1][j]
                    insertion = dp[i][j-1]
                    substitution = dp[i-1][j-1]
                    
                    min_cost = min(deletion, insertion, substitution)
                    dp[i][j] = 1 + min_cost
                    
                    if min_cost == deletion:
                        operations[i][j] = ('delete', str1[i-1])
                    elif min_cost == insertion:
                        operations[i][j] = ('insert', str2[j-1])
                    else:
                        operations[i][j] = ('substitute', str1[i-1], str2[j-1])
        
        # Reconstruct the sequence of operations
        steps = []
        i, j = m, n
        while i > 0 or j > 0:
            operation = operations[i][j]
            steps.append(operation)
            
            if operation[0] == 'match' or operation[0] == 'substitute':
                i -= 1
                j -= 1
            elif operation[0] == 'delete':
                i -= 1
            else:  # insert
                j -= 1
        
        return list(reversed(steps))
    
    def weighted_edit_distance(self, str1: str, str2: str, weights: dict) -> float:
        """
        Calculates edit distance with custom costs for different operations.
        This is useful when some operations are more costly than others.
        
        For example, in DNA sequence alignment, certain mutations might be
        more likely than others.
        
        Time: O(mn), Space: O(mn)
        """
        m, n = len(str1), len(str2)
        dp = [[float('inf')] * (n + 1) for _ in range(m + 1)]
        
        # Initialize base cases
        dp[0][0] = 0
        for i in range(1, m + 1):
            dp[i][0] = dp[i-1][0] + weights['delete']
        for j in range(1, n + 1):
            dp[0][j] = dp[0][j-1] + weights['insert']
        
        # Fill the table with weighted operations
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                if str1[i-1] == str2[j-1]:
                    dp[i][j] = dp[i-1][j-1]
                else:
                    dp[i][j] = min(
                        dp[i-1][j] + weights['delete'],
                        dp[i][j-1] + weights['insert'],
                        dp[i-1][j-1] + weights['substitute']
                    )
        
        return dp[m][n]`,

  exercises: [
    {
      prompt: "Implement a function that finds the minimum number of operations required to transform one string into another where substitutions are not allowed (only insertions and deletions are permitted).",
      initialCode: `def edit_distance_no_substitution(str1: str, str2: str) -> int:
    # Write your solution here
    pass`,
      solution: `def edit_distance_no_substitution(str1: str, str2: str) -> int:
    """
    Calculates edit distance allowing only insertions and deletions.
    This means a substitution must be implemented as a deletion followed
    by an insertion.
    
    This solution demonstrates:
    1. Adapting the basic edit distance algorithm
    2. Handling restricted operations
    3. Optimal subproblem decomposition
    
    Time: O(mn), Space: O(mn)
    """
    m, n = len(str1), len(str2)
    dp = [[float('inf')] * (n + 1) for _ in range(m + 1)]
    
    # Initialize base cases
    for i in range(m + 1):
        dp[i][0] = i  # Deletions to reach empty string
    for j in range(n + 1):
        dp[0][j] = j  # Insertions from empty string
    
    # Fill the DP table
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if str1[i-1] == str2[j-1]:
                # Characters match, no operation needed
                dp[i][j] = dp[i-1][j-1]
            else:
                # Can only insert or delete
                dp[i][j] = 1 + min(
                    dp[i-1][j],    # Deletion
                    dp[i][j-1]     # Insertion
                )
    
    return dp[m][n]`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: "Implement a function that calculates edit distance with an additional 'swap' operation that can exchange two adjacent characters. The swap operation should have the same cost as other operations.",
      initialCode: `def edit_distance_with_swap(str1: str, str2: str) -> int:
    # Write your solution here
    pass`,
      solution: `def edit_distance_with_swap(str1: str, str2: str) -> int:
    """
    Calculates edit distance with an additional swap operation.
    This adds complexity as we need to consider adjacent character swaps
    when finding the minimum cost transformation.
    
    This solution demonstrates:
    1. Handling an additional operation type
    2. Considering adjacent character relationships
    3. Maintaining optimal substructure
    
    Time: O(mn), Space: O(mn)
    """
    m, n = len(str1), len(str2)
    dp = [[float('inf')] * (n + 1) for _ in range(m + 1)]
    
    # Initialize base cases
    for i in range(m + 1):
        dp[i][0] = i
    for j in range(n + 1):
        dp[0][j] = j
    
    # Fill the DP table
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if str1[i-1] == str2[j-1]:
                # Characters match
                dp[i][j] = dp[i-1][j-1]
            else:
                # Regular operations
                dp[i][j] = 1 + min(
                    dp[i-1][j],    # Deletion
                    dp[i][j-1],    # Insertion
                    dp[i-1][j-1]   # Substitution
                )
                
                # Check if swap is possible and beneficial
                if (i > 1 and j > 1 and 
                    str1[i-1] == str2[j-2] and 
                    str1[i-2] == str2[j-1]):
                    dp[i][j] = min(dp[i][j], dp[i-2][j-2] + 1)
    
    return dp[m][n]`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why does the dynamic programming approach to edit distance use a table with an extra row and column?',
      options: [
        'To handle edge cases better',
        'To include transformations to and from empty strings',
        'To improve performance',
        'To handle special characters',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. While it does help with edge cases, this is not the primary reason.',
        'Correct! The extra row and column represent transformations involving empty strings, which serve as our base cases. This allows us to build up our solution systematically from these fundamental starting points.',
        'Incorrect. The extra row and column do not significantly impact performance.',
        'Incorrect. Special character handling is independent of the table structure.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'Why might we want to use different weights for different edit operations?',
      options: [
        'To make the algorithm faster',
        'To reduce memory usage',
        'To model real-world probabilities of different types of changes',
        'To simplify the implementation'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Using weights does not improve algorithm speed and may slightly increase computation time.',
        'Incorrect. Memory usage remains the same whether operations are weighted or not.',
        'Correct! Different weights allow us to model real-world scenarios where certain changes are more likely or costly than others. For example, in DNA sequences, certain mutations might be more common than others, or in spell-checking, certain typographical errors might be more likely.',
        'Incorrect. Adding weights actually makes the implementation more complex.',
      ],
      difficulty: Difficulty.Advanced
    }
  ]
}

const compressionTechniquesData: LessonContent = {
  title: 'Understanding String Compression Methods',
  content: `<p>
Imagine you're trying to pack a suitcase more efficiently by finding patterns in how your clothes are arranged. String compression works similarly - we look for patterns and redundancies in text to represent it more concisely. Just as you might say "I packed seven blue shirts" instead of listing each one individually, compression lets us represent repeated information more efficiently.
</p>

<p>
The art of compression lies in finding the right balance between conciseness and practicality. Much like how over-compressing your suitcase might make it difficult to find specific items later, some compression methods trade accessibility for storage efficiency.
</p>

<h3><u>Fundamental Compression Concepts</u></h3>

<p>
At its core, compression involves two key processes, like packing and unpacking a suitcase:
</p>

<h4><b>Compression Process</b></h4>
<li>Identifying patterns and redundancies in the text</li>
<li>Representing these patterns in a more efficient way</li>
<li>Ensuring the original text can be recovered accurately</li>

<h4><b>Types of Compression</b></h4>
<table>
<tr><th>Type</th><th>Description</th><th>Best For</th></tr>
<tr>
  <td>Run-Length Encoding</td>
  <td>Compresses repeated characters</td>
  <td>Sequences with many repetitions</td>
</tr>
<tr>
  <td>Dictionary-Based</td>
  <td>Replaces common patterns with references</td>
  <td>Text with recurring patterns</td>
</tr>
<tr>
  <td>Huffman Coding</td>
  <td>Uses variable-length codes based on frequency</td>
  <td>Data with varying character frequencies</td>
</tr>
</table>

<h3><u>Compression Techniques in Detail</u></h3>

<h4><b>Run-Length Encoding (RLE)</b></h4>
<p>
Think of RLE like describing a striped pattern: instead of saying "blue, blue, blue, red, red", you can say "3 blue, 2 red". This method:
</p>
<li>Works best with repeated characters</li>
<li>Simple to implement and understand</li>
<li>Very efficient for certain types of data</li>

<h4><b>Dictionary-Based Compression</b></h4>
<p>
Imagine creating shortcuts for common phrases in your notes. Dictionary compression works similarly:
</p>
<li>Builds a dictionary of common patterns</li>
<li>Replaces patterns with shorter references</li>
<li>More complex but potentially more efficient</li>

<h4><b>Huffman Coding</b></h4>
<p>
Like designing a custom alphabet where common letters get shorter symbols:
</p>
<li>Analyzes character frequencies</li>
<li>Assigns shorter codes to frequent characters</li>
<li>Builds an optimal encoding tree</li>

<h3><u>Practical Considerations</u></h3>

<p>
When choosing a compression method, consider these factors:
</p>

<table>
<tr><th>Factor</th><th>Consideration</th><th>Impact</th></tr>
<tr>
  <td>Data Characteristics</td>
  <td>Pattern frequency and distribution</td>
  <td>Affects compression ratio</td>
</tr>
<tr>
  <td>Speed Requirements</td>
  <td>Compression/decompression time</td>
  <td>Influences method choice</td>
</tr>
<tr>
  <td>Memory Constraints</td>
  <td>Available memory for processing</td>
  <td>Limits algorithm complexity</td>
</tr>
</table>`,

  codeExample: `# Comprehensive implementation of string compression techniques

class StringCompressor:
    """
    Collection of string compression algorithms with detailed explanations
    of how each method works and when to use it.
    """
    
    @staticmethod
    def run_length_encode(text: str) -> str:
        """
        Implements run-length encoding compression.
        Counts consecutive characters and represents them as count + character.
        
        Like describing repeated patterns: "AAABBC" becomes "3A2B1C"
        
        Time: O(n), Space: O(n) where n is string length
        """
        if not text:
            return ""
            
        compressed = []
        count = 1
        current_char = text[0]
        
        # Process each character, counting consecutive occurrences
        for i in range(1, len(text)):
            if text[i] == current_char:
                # Same character, increment count
                count += 1
            else:
                # Different character found, append count and character
                compressed.append(str(count) + current_char)
                current_char = text[i]
                count = 1
        
        # Append the last sequence
        compressed.append(str(count) + current_char)
        
        # Return original string if compression didn't help
        result = ''.join(compressed)
        return result if len(result) < len(text) else text
    
    @staticmethod
    def run_length_decode(compressed: str) -> str:
        """
        Decodes a run-length encoded string.
        Expands count + character format back to original sequence.
        
        Time: O(n), Space: O(m) where m is decompressed length
        """
        if not compressed:
            return ""
            
        result = []
        i = 0
        
        while i < len(compressed):
            # Extract the count
            count = ''
            while compressed[i].isdigit():
                count += compressed[i]
                i += 1
            
            # Extract the character and repeat it
            char = compressed[i]
            result.append(char * int(count))
            i += 1
        
        return ''.join(result)
    
    def dictionary_compress(self, text: str, window_size: int = 4096) -> str:
        """
        Implements a simple sliding window dictionary compression.
        Looks for patterns in previous text and replaces them with references.
        
        This is a simplified version of LZ77-style compression.
        
        Time: O(n*w) where w is window size, Space: O(n)
        """
        if len(text) <= 4:  # Too short to compress effectively
            return text
            
        result = []
        pos = 0
        
        while pos < len(text):
            # Look for longest match in the window
            best_length = 0
            best_offset = 0
            max_look_ahead = min(255, len(text) - pos)  # Limit look-ahead
            
            # Define search window
            search_start = max(0, pos - window_size)
            
            # Look for matches in the window
            for i in range(search_start, pos):
                # Compare current position with window position
                length = 0
                while (length < max_look_ahead and 
                       pos + length < len(text) and 
                       text[i + length] == text[pos + length]):
                    length += 1
                
                if length > best_length:
                    best_length = length
                    best_offset = pos - i
            
            if best_length > 3:  # Only use match if it saves space
                # Encode as (offset, length)
                result.append(f"<{best_offset},{best_length}>")
                pos += best_length
            else:
                # Output literal character
                result.append(text[pos])
                pos += 1
        
        compressed = ''.join(result)
        return compressed if len(compressed) < len(text) else text
    
    def dictionary_decompress(self, compressed: str) -> str:
        """
        Decompresses dictionary-compressed string.
        Expands references using previously seen text.
        
        Time: O(n), Space: O(n)
        """
        result = []
        i = 0
        
        while i < len(compressed):
            if compressed[i] == '<':
                # Extract reference
                end = compressed.find('>', i)
                offset, length = map(int, compressed[i+1:end].split(','))
                start = len(result) - offset
                
                # Copy characters from earlier in the output
                for j in range(length):
                    result.append(result[start + j])
                
                i = end + 1
            else:
                result.append(compressed[i])
                i += 1
        
        return ''.join(result)`,

  exercises: [
    {
      prompt: "Implement a compression algorithm for strings containing only lowercase letters that uses bit manipulation to pack characters more efficiently. Compare its performance with simple run-length encoding.",
      initialCode: `def bit_compress(text: str) -> bytes:
    # Write your solution here
    pass`,
      solution: `def bit_compress(text: str) -> bytes:
    """
    Compresses lowercase text using bit manipulation.
    Each character needs only 5 bits (26 letters).
    
    This solution demonstrates:
    1. Efficient bit packing
    2. Handling partial bytes
    3. Performance optimization
    
    Time: O(n), Space: O(n/1.6) as we use 5 bits per character
    """
    if not text:
        return bytes()
    
    # Validate input
    if not all(c.islower() for c in text):
        raise ValueError("Text must contain only lowercase letters")
    
    result = bytearray()
    current_byte = 0
    bits_remaining = 8
    
    for char in text:
        # Convert character to 5-bit value (a=0, b=1, etc.)
        value = ord(char) - ord('a')
        
        # Add bits to current byte
        if bits_remaining >= 5:
            # Entire character fits in current byte
            current_byte = (current_byte << 5) | value
            bits_remaining -= 5
            
            if bits_remaining < 5:
                # Current byte is full or nearly full
                result.append(current_byte)
                current_byte = 0
                bits_remaining = 8
        else:
            # Character spans two bytes
            first_part = value >> (5 - bits_remaining)
            second_part = value & ((1 << (5 - bits_remaining)) - 1)
            
            # Add first part to current byte
            current_byte = (current_byte << bits_remaining) | first_part
            result.append(current_byte)
            
            # Start new byte with second part
            current_byte = second_part
            bits_remaining = 8 - (5 - bits_remaining)
    
    # Add final byte if there are remaining bits
    if bits_remaining < 8:
        result.append(current_byte << bits_remaining)
    
    return bytes(result)`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: "Implement a word-based compression algorithm that builds a dictionary of common words and replaces them with shorter codes. The algorithm should adapt its dictionary based on the input text.",
      initialCode: `def word_compress(text: str) -> tuple:
    # Write your solution here
    pass`,
      solution: `def word_compress(text: str) -> tuple:
    """
    Compresses text by building an adaptive dictionary of common words.
    Returns (compressed_text, dictionary) tuple.
    
    This solution demonstrates:
    1. Adaptive dictionary building
    2. Frequency-based optimization
    3. Efficient word encoding
    
    Time: O(n), Space: O(k) where k is unique words
    """
    from collections import Counter
    import math
    
    # Split into words while preserving separators
    def tokenize(text):
        current_word = []
        tokens = []
        
        for char in text:
            if char.isalnum():
                current_word.append(char)
            else:
                if current_word:
                    tokens.append(''.join(current_word))
                    current_word = []
                tokens.append(char)
                
        if current_word:
            tokens.append(''.join(current_word))
            
        return tokens
    
    # Count word frequencies
    words = [token for token in tokenize(text) 
            if token[0].isalnum()]
    frequencies = Counter(words)
    
    # Build dictionary of most common words
    common_words = sorted(
        frequencies.items(), 
        key=lambda x: (x[1], -len(x[0])), 
        reverse=True
    )
    
    # Determine optimal dictionary size
    total_chars = sum(len(word) * freq 
                     for word, freq in common_words)
    dict_size = min(
        len(common_words),
        int(math.sqrt(total_chars))  # Heuristic for dictionary size
    )
    
    # Create encoding dictionary
    dictionary = {
        word: f"#{i}" 
        for i, (word, _) in enumerate(common_words[:dict_size])
    }
    
    # Compress text using dictionary
    compressed = []
    tokens = tokenize(text)
    i = 0
    
    while i < len(tokens):
        token = tokens[i]
        if token in dictionary:
            compressed.append(dictionary[token])
        else:
            compressed.append(token)
        i += 1
    
    return ''.join(compressed), dictionary`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why might run-length encoding perform poorly on natural language text?',
      options: [
        'It is too slow to process large texts',
        'Natural language rarely has long sequences of repeated characters',
        'It cannot handle special characters',
        'The algorithm is too complex',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. RLE is actually quite fast, with linear time complexity.',
        'Correct! Natural language text rarely contains long sequences of repeated characters, which is what RLE is designed to compress. This makes RLE more suitable for data like images or simple patterns rather than typical text.',
        'Incorrect. RLE can handle any type of character.',
        'Incorrect. RLE is one of the simpler compression algorithms.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the key advantage of dictionary-based compression over run-length encoding?',
      options: [
        'It is always faster',
        'It uses less memory',
        'It can recognize and compress recurring patterns, not just repetitions',
        'It is easier to implement',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Dictionary-based compression can actually be slower due to pattern searching.',
        'Incorrect. Dictionary-based methods typically require more memory to store the dictionary.',
        'Correct! Dictionary-based compression can identify and efficiently encode recurring patterns of characters, not just consecutive repetitions. This makes it much more effective for compressing natural language and other structured data.',
        'Incorrect. Dictionary-based compression is generally more complex to implement than RLE.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const stringBuilderData: LessonContent = {
  title: 'Understanding String Builder and Memory Management',
  content: `<p>
Think of building a string like assembling a document from many pieces of paper. You could tape each new piece to the existing document every time (like regular string concatenation), but that would be inefficient - you'd need to handle and re-tape the entire document for each addition. Instead, you might collect all the pieces first and join them together at the end. This is the key insight behind string builders.
</p>

<h3><u>Understanding the Problem</u></h3>

<p>
The challenge with string concatenation comes from string immutability. When strings are immutable, each concatenation operation must create an entirely new string. Imagine writing a book where you need to make a complete copy of all previous chapters every time you write a new paragraph - that's essentially what happens with regular string concatenation.
</p>

<h4><b>Memory Impact of String Concatenation</b></h4>
<table>
<tr><th>Operation</th><th>Memory Operations</th><th>Impact</th></tr>
<tr>
  <td>Simple Concatenation</td>
  <td>New allocation and full copy</td>
  <td>Creates many temporary strings</td>
</tr>
<tr>
  <td>Loop Concatenation</td>
  <td>Multiple reallocations</td>
  <td>O(n²) character copies</td>
</tr>
<tr>
  <td>StringBuilder</td>
  <td>Amortized reallocation</td>
  <td>O(n) character copies</td>
</tr>
</table>

<h3><u>How String Builder Works</u></h3>

<p>
A string builder manages a mutable buffer of characters, much like having a notebook where you can freely add content to the end. Key aspects include:
</p>

<h4><b>Core Concepts</b></h4>
<li>Maintains a resizable character buffer</li>
<li>Implements efficient capacity management</li>
<li>Minimizes memory reallocations</li>
<li>Provides fast append operations</li>

<h4><b>Growth Strategies</b></h4>
<p>
Just as you might buy a notebook with extra pages for future additions, string builders use smart growth strategies:
</p>
<table>
<tr><th>Strategy</th><th>Description</th><th>Benefit</th></tr>
<tr>
  <td>Geometric Growth</td>
  <td>Double capacity when full</td>
  <td>Amortized O(1) appends</td>
</tr>
<tr>
  <td>Preallocation</td>
  <td>Reserve space upfront</td>
  <td>Zero resizing if size known</td>
</tr>
<tr>
  <td>Chunking</td>
  <td>Use linked chunks</td>
  <td>Reduced memory moves</td>
</tr>
</table>

<h3><u>Performance Optimization</u></h3>

<p>
Optimizing string operations involves several key strategies:
</p>

<h4><b>Memory Management</b></h4>
<p>
Think about memory management like organizing a workspace:
</p>
<li>Minimize temporary object creation</li>
<li>Reuse buffers when possible</li>
<li>Pre-size containers appropriately</li>

<h4><b>Operation Batching</b></h4>
<p>
Just as it's more efficient to write several pages before binding them:
</p>
<li>Collect multiple changes before converting to string</li>
<li>Use bulk operations when available</li>
<li>Minimize conversions between types</li>`,

  codeExample: `# Comprehensive implementation of string builder with optimization techniques

class StringBuilder:
    """
    An efficient string builder implementation demonstrating various
    optimization techniques and memory management strategies.
    
    This class shows how to:
    1. Manage a resizable buffer efficiently
    2. Implement amortized O(1) append operations
    3. Handle different types of string operations optimally
    4. Minimize memory allocations and copies
    """
    
    def __init__(self, initial_capacity: int = 16):
        """
        Initialize string builder with a smart initial capacity.
        Like buying a notebook with enough pages for expected use.
        """
        self.buffer = bytearray(initial_capacity)
        self.position = 0
    
    def _ensure_capacity(self, additional: int) -> None:
        """
        Ensures buffer has enough space, using geometric growth.
        This provides amortized O(1) append operations.
        """
        needed = self.position + additional
        if needed > len(self.buffer):
            # Geometric growth: double size until sufficient
            new_capacity = max(len(self.buffer) * 2, needed)
            new_buffer = bytearray(new_capacity)
            # Copy existing content to new buffer
            new_buffer[:self.position] = self.buffer[:self.position]
            self.buffer = new_buffer
    
    def append(self, text: str) -> 'StringBuilder':
        """
        Appends text efficiently using internal buffer management.
        Returns self for method chaining.
        """
        if not text:
            return self
            
        # Convert string to bytes and ensure capacity
        bytes_to_append = text.encode('utf-8')
        self._ensure_capacity(len(bytes_to_append))
        
        # Add new content to buffer
        self.buffer[self.position:self.position + len(bytes_to_append)] = bytes_to_append
        self.position += len(bytes_to_append)
        
        return self
    
    def append_multiple(self, texts: list) -> 'StringBuilder':
        """
        Optimized method for appending multiple strings.
        More efficient than appending one at a time.
        """
        # Calculate total required capacity upfront
        total_length = sum(len(text) for text in texts)
        self._ensure_capacity(total_length)
        
        # Append all texts in one go
        for text in texts:
            bytes_to_append = text.encode('utf-8')
            self.buffer[self.position:self.position + len(bytes_to_append)] = bytes_to_append
            self.position += len(bytes_to_append)
        
        return self
    
    def insert(self, index: int, text: str) -> 'StringBuilder':
        """
        Inserts text at specified position.
        Demonstrates efficient buffer manipulation.
        """
        if index < 0 or index > self.position:
            raise ValueError("Invalid insert position")
            
        if not text:
            return self
            
        # Convert text to bytes
        bytes_to_insert = text.encode('utf-8')
        insert_length = len(bytes_to_insert)
        
        # Ensure capacity for new content
        self._ensure_capacity(insert_length)
        
        # Shift existing content to make room
        if index < self.position:
            end = self.position
            target = self.position + insert_length
            while end > index:
                end -= 1
                target -= 1
                self.buffer[target] = self.buffer[end]
        
        # Insert new content
        self.buffer[index:index + insert_length] = bytes_to_insert
        self.position += insert_length
        
        return self
    
    def delete(self, start: int, end: int) -> 'StringBuilder':
        """
        Removes content between start and end positions.
        Shows efficient content removal and restructuring.
        """
        if start < 0 or end > self.position or start > end:
            raise ValueError("Invalid deletion range")
            
        # Shift remaining content left
        shift = end - start
        for i in range(end, self.position):
            self.buffer[i - shift] = self.buffer[i]
            
        self.position -= shift
        return self
    
    def __str__(self) -> str:
        """
        Converts buffer to final string.
        Only creates the string when actually needed.
        """
        return self.buffer[:self.position].decode('utf-8')
    
    def capacity(self) -> int:
        """Returns current buffer capacity"""
        return len(self.buffer)
    
    def length(self) -> int:
        """Returns current content length"""
        return self.position

def demonstrate_optimization():
    """
    Demonstrates various string building optimization techniques
    and their performance characteristics.
    """
    import time
    
    def measure_time(func):
        start = time.time()
        result = func()
        end = time.time()
        return end - start, result
    
    # Compare different approaches
    def naive_concatenation():
        result = ""
        for i in range(10000):
            result += str(i)
        return result
    
    def list_join():
        parts = []
        for i in range(10000):
            parts.append(str(i))
        return ''.join(parts)
    
    def string_builder():
        builder = StringBuilder(1024)  # Pre-sized appropriately
        for i in range(10000):
            builder.append(str(i))
        return str(builder)
    
    # Measure and compare
    naive_time, _ = measure_time(naive_concatenation)
    join_time, _ = measure_time(list_join)
    builder_time, _ = measure_time(string_builder)
    
    print(f"Naive concatenation: {naive_time:.4f} seconds")
    print(f"List join: {join_time:.4f} seconds")
    print(f"StringBuilder: {builder_time:.4f} seconds")`,

  exercises: [
    {
      prompt: "Implement a circular buffer-based string builder that efficiently handles both prepend and append operations without requiring full buffer shifts.",
      initialCode: `class CircularStringBuilder:
    # Write your solution here
    pass`,
      solution: `class CircularStringBuilder:
    """
    A string builder using a circular buffer to efficiently handle
    both prepend and append operations.
    
    This solution demonstrates:
    1. Circular buffer management
    2. Efficient space utilization
    3. Optimized prepend operations
    
    Time: O(1) amortized for both prepend and append
    Space: O(n) where n is content length
    """
    def __init__(self, capacity: int = 16):
        self.buffer = bytearray(capacity)
        self.start = capacity // 2  # Start in middle for growth both ways
        self.end = self.start
        self.length = 0
    
    def _ensure_capacity(self, needed: int):
        """Grows buffer while maintaining circular structure"""
        if needed <= len(self.buffer):
            return
            
        # Create new buffer with double size
        new_capacity = max(len(self.buffer) * 2, needed)
        new_buffer = bytearray(new_capacity)
        
        # Copy existing content to middle of new buffer
        new_start = (new_capacity - self.length) // 2
        if self.start <= self.end:
            # Continuous segment
            segment = self.buffer[self.start:self.end]
            new_buffer[new_start:new_start + self.length] = segment
        else:
            # Wrapped segment
            first = self.buffer[self.start:]
            second = self.buffer[:self.end]
            new_buffer[new_start:new_start + len(first)] = first
            new_buffer[new_start + len(first):new_start + self.length] = second
        
        self.buffer = new_buffer
        self.start = new_start
        self.end = new_start + self.length
    
    def prepend(self, text: str) -> 'CircularStringBuilder':
        """Efficiently adds text to the start"""
        if not text:
            return self
            
        bytes_to_add = text.encode('utf-8')
        self._ensure_capacity(self.length + len(bytes_to_add))
        
        # Move start pointer back
        self.start = (self.start - len(bytes_to_add)) % len(self.buffer)
        # Add new content
        if self.start + len(bytes_to_add) <= len(self.buffer):
            self.buffer[self.start:self.start + len(bytes_to_add)] = bytes_to_add
        else:
            # Handle wrap-around
            first_part = len(self.buffer) - self.start
            self.buffer[self.start:] = bytes_to_add[:first_part]
            self.buffer[:len(bytes_to_add) - first_part] = bytes_to_add[first_part:]
            
        self.length += len(bytes_to_add)
        return self
    
    def append(self, text: str) -> 'CircularStringBuilder':
        """Efficiently adds text to the end"""
        if not text:
            return self
            
        bytes_to_add = text.encode('utf-8')
        self._ensure_capacity(self.length + len(bytes_to_add))
        
        # Add new content
        if self.end + len(bytes_to_add) <= len(self.buffer):
            self.buffer[self.end:self.end + len(bytes_to_add)] = bytes_to_add
        else:
            # Handle wrap-around
            first_part = len(self.buffer) - self.end
            self.buffer[self.end:] = bytes_to_add[:first_part]
            self.buffer[:len(bytes_to_add) - first_part] = bytes_to_add[first_part:]
            
        self.end = (self.end + len(bytes_to_add)) % len(self.buffer)
        self.length += len(bytes_to_add)
        return self
    
    def __str__(self) -> str:
        """Converts buffer contents to string"""
        if self.start <= self.end:
            return self.buffer[self.start:self.end].decode('utf-8')
        else:
            first = self.buffer[self.start:]
            second = self.buffer[:self.end]
            return (first + second).decode('utf-8')`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why does naive string concatenation in a loop have quadratic time complexity?',
      options: [
        'Because the loop itself is quadratic',
        'Because each concatenation copies all previous characters',
        'Because string comparison is expensive',
        'Because memory allocation is slow',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. The loop itself is linear, but the operations inside it cause quadratic behavior.',
        'Correct! Due to string immutability, each concatenation must create a new string and copy all previous characters, leading to O(n²) character copies as the string grows.',
        'Incorrect. String comparison is not involved in concatenation operations.',
        'Incorrect. While memory allocation has overhead, it is not the primary cause of quadratic complexity.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the primary advantage of using geometric growth in a string builder\'s buffer?',
      options: [
        'It uses less memory overall',
        'It makes individual operations faster',
        'It provides amortized constant-time appends',
        'It simplifies the implementation',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Geometric growth actually uses more memory than exact sizing.',
        'Incorrect. Individual operations are not necessarily faster.',
        'Correct! Geometric growth ensures that buffer reallocations become increasingly rare, resulting in amortized O(1) time for append operations.',
        'Incorrect. The implementation is more complex than using fixed sizes.',
      ],
      difficulty: Difficulty.Advanced,
    }
  ]
};

const trieBasicsData: LessonContent = {
  title: 'Understanding Tries for String Processing',
  content: `<p>
Imagine you're organizing a library where you want to find books instantly. Instead of searching through every title, you might organize books in sections by their first letter, then within each section by their second letter, and so on. This is exactly how a trie works with strings - it creates a tree-like structure where each level represents one character position, making string operations remarkably efficient.
</p>

<p>
A trie (pronounced "try" and derived from "retrieval") is like creating a map where each path from root to leaf spells out a word in your collection. Just as a tree branch splits into smaller branches, each node in a trie can branch into multiple child nodes, one for each possible next character.
</p>

<h3><u>Understanding Trie Structure</u></h3>

<p>
Think about how you might spell out a word letter by letter. Each step in this process corresponds to moving down one level in the trie:
</p>

<h4><b>Core Components</b></h4>
<table>
<tr><th>Component</th><th>Purpose</th><th>Analogy</th></tr>
<tr>
  <td>Root Node</td>
  <td>Starting point for all searches</td>
  <td>Library entrance</td>
</tr>
<tr>
  <td>Internal Nodes</td>
  <td>Represent character sequences</td>
  <td>Book sections</td>
</tr>
<tr>
  <td>Leaf Nodes</td>
  <td>Mark end of words</td>
  <td>Actual books</td>
</tr>
</table>

<h4><b>Key Properties</b></h4>
<p>
Understanding these properties helps us see why tries are so effective:
</p>

<li>Each path from root to leaf represents a stored string</li>
<li>Common prefixes are shared, saving space</li>
<li>Search time depends on word length, not dictionary size</li>
<li>Perfect for prefix-based operations</li>

<h3><u>Operations and Their Applications</u></h3>

<h4><b>Basic Operations</b></h4>
<p>
The fundamental operations in a trie work like following a map:
</p>

<table>
<tr><th>Operation</th><th>How It Works</th><th>Time Complexity</th></tr>
<tr>
  <td>Insertion</td>
  <td>Add character path if not present</td>
  <td>O(m) where m is word length</td>
</tr>
<tr>
  <td>Search</td>
  <td>Follow character path to end</td>
  <td>O(m) where m is word length</td>
</tr>
<tr>
  <td>Prefix Search</td>
  <td>Follow path and explore subtree</td>
  <td>O(p + n) where p is prefix length</td>
</tr>
</table>

<h4><b>Advanced Applications</b></h4>
<p>
Tries excel in many string-processing scenarios:
</p>

<li>Autocomplete suggestions</li>
<li>Spell checking</li>
<li>IP routing tables</li>
<li>Phone directories</li>

<h3><u>Memory Considerations</u></h3>

<p>
The space efficiency of tries depends on data characteristics:
</p>

<h4><b>Optimization Strategies</b></h4>
<table>
<tr><th>Strategy</th><th>Purpose</th><th>Trade-off</th></tr>
<tr>
  <td>Compressed Tries</td>
  <td>Merge single-child nodes</td>
  <td>Speed vs Space</td>
</tr>
<tr>
  <td>Array vs Map Children</td>
  <td>Balance access speed and memory</td>
  <td>Memory vs Speed</td>
</tr>
<tr>
  <td>Character Set Reduction</td>
  <td>Minimize node size</td>
  <td>Flexibility vs Space</td>
</tr>
</table>`,

  codeExample: `# Comprehensive implementation of a trie with detailed explanations

class TrieNode:
    """
    Represents a node in our trie structure.
    Think of each node like a signpost pointing to possible next characters.
    """
    def __init__(self):
        # Dictionary to store child nodes, mapping characters to TrieNodes
        self.children = {}
        # Flag to mark if this node represents the end of a word
        self.is_end_of_word = False
        # Optional: Count of words sharing this prefix
        self.prefix_count = 0
        
class Trie:
    """
    A trie implementation demonstrating efficient string operations.
    This structure excels at prefix-based operations and string searching.
    """
    
    def __init__(self):
        """
        Initialize an empty trie with a root node.
        The root represents an empty string prefix.
        """
        self.root = TrieNode()
    
    def insert(self, word: str) -> None:
        """
        Inserts a word into the trie, creating new nodes as needed.
        
        Think of this like creating a path through the trie, where
        each character is a stepping stone. If the stones don't exist,
        we place them; if they do, we use them.
        
        Time: O(m) where m is word length
        Space: O(m) in worst case of all new nodes
        """
        current = self.root
        
        # Follow/create path for each character
        for char in word:
            # Increment prefix count for statistics
            current.prefix_count += 1
            
            # Create new node if character path doesn't exist
            if char not in current.children:
                current.children[char] = TrieNode()
            
            # Move to next node
            current = current.children[char]
        
        # Mark end of word and increment final node count
        current.prefix_count += 1
        current.is_end_of_word = True
    
    def search(self, word: str) -> bool:
        """
        Searches for a complete word in the trie.
        
        Like following a specific path all the way to its end,
        checking that it's actually marked as a word.
        
        Time: O(m) where m is word length
        """
        current = self.root
        
        # Follow character path
        for char in word:
            if char not in current.children:
                return False
            current = current.children[char]
        
        # Check if this path represents a complete word
        return current.is_end_of_word
    
    def starts_with(self, prefix: str) -> bool:
        """
        Checks if any words in the trie start with given prefix.
        
        Similar to search, but we don't care about word endings.
        
        Time: O(p) where p is prefix length
        """
        current = self.root
        
        # Follow character path
        for char in prefix:
            if char not in current.children:
                return False
            current = current.children[char]
        
        return True
    
    def find_words_with_prefix(self, prefix: str) -> list:
        """
        Finds all words that start with given prefix.
        
        This combines prefix traversal with depth-first search
        to explore all possible endings.
        
        Time: O(p + n) where p is prefix length, n is nodes in subtree
        """
        words = []
        
        # First, reach the prefix node
        current = self.root
        for char in prefix:
            if char not in current.children:
                return words
            current = current.children[char]
        
        # Now explore all possible endings using DFS
        def explore(node: TrieNode, word: str):
            if node.is_end_of_word:
                words.append(prefix + word)
            
            # Recursively explore all child paths
            for char, child in node.children.items():
                explore(child, word + char)
        
        explore(current, "")
        return words
    
    def delete(self, word: str) -> bool:
        """
        Removes a word from the trie.
        
        This is trickier than insertion because we need to handle
        shared prefixes carefully. We can't remove nodes that are
        part of other words.
        
        Time: O(m) where m is word length
        """
        def _delete_recursive(node: TrieNode, word: str, depth: int) -> bool:
            # Base case: reached end of word
            if depth == len(word):
                if not node.is_end_of_word:
                    return False
                
                node.is_end_of_word = False
                node.prefix_count -= 1
                return len(node.children) == 0
            
            # Recursive case: traverse down
            char = word[depth]
            if char not in node.children:
                return False
            
            # Update prefix count
            node.prefix_count -= 1
            
            # Recursively delete in child node
            should_delete_child = _delete_recursive(
                node.children[char], word, depth + 1
            )
            
            # Remove child node if it's now empty
            if should_delete_child:
                del node.children[char]
                return len(node.children) == 0
            
            return False
        
        return _delete_recursive(self.root, word, 0)`,

  exercises: [
    {
      prompt: "Implement a function that uses a trie to find the longest common prefix among a set of strings. For example, given ['flower', 'flow', 'flight'], return 'fl'.",
      initialCode: `def longest_common_prefix(words: list) -> str:
    # Write your solution here
    pass`,
      solution: `def longest_common_prefix(words: list) -> str:
    """
    Uses a trie to find the longest common prefix of all words.
    
    This solution demonstrates:
    1. Efficient prefix discovery using tries
    2. Path following until divergence
    3. Early termination optimization
    
    Time: O(S) where S is sum of all characters in all words
    Space: O(m*n) where m is length of shortest word
    """
    if not words:
        return ""
        
    # Build trie with all words
    trie = Trie()
    for word in words:
        trie.insert(word)
    
    # Follow path until we find a split or word end
    current = trie.root
    prefix = []
    
    # Continue while we have exactly one child and haven't hit word end
    while (len(current.children) == 1 and 
           not current.is_end_of_word and 
           current.prefix_count == len(words)):
        # Get the only child node and its character
        char = next(iter(current.children.keys()))
        prefix.append(char)
        current = current.children[char]
    
    return ''.join(prefix)

# Example usage:
# words = ['flower', 'flow', 'flight']
# print(longest_common_prefix(words))  # 'fl'`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: "Implement a function that uses a trie to find all words in a matrix of characters (similar to Boggle), where words can be formed by connecting adjacent characters (including diagonally).",
      initialCode: `def find_words(board: list[list[str]], words: list[str]) -> list[str]:
    # Write your solution here
    pass`,
      solution: `def find_words(board: list[list[str]], words: list[str]) -> list[str]:
    """
    Uses a trie to efficiently find valid words in a character board.
    
    This solution demonstrates:
    1. Trie-based word matching
    2. DFS with backtracking
    3. Efficient prefix pruning
    
    Time: O(M*N*8^L) where M,N are board dimensions, L is max word length
    Space: O(total characters in words)
    """
    # Build trie from word list
    trie = Trie()
    for word in words:
        trie.insert(word)
    
    def explore(row: int, col: int, node: TrieNode, 
                path: str, visited: set, found: set):
        """
        Explores board positions recursively, tracking valid words.
        Uses the trie for efficient prefix checking.
        """
        # Check if current path is a valid word
        if node.is_end_of_word:
            found.add(path)
        
        # Mark current position as visited
        visited.add((row, col))
        
        # Explore all adjacent positions
        directions = [(-1,-1), (-1,0), (-1,1), (0,-1), 
                     (0,1), (1,-1), (1,0), (1,1)]
                     
        for dx, dy in directions:
            new_row, new_col = row + dx, col + dy
            
            # Check if position is valid and unvisited
            if (0 <= new_row < len(board) and 
                0 <= new_col < len(board[0]) and 
                (new_row, new_col) not in visited):
                
                char = board[new_row][new_col]
                # Check if this character continues a valid prefix
                if char in node.children:
                    explore(new_row, new_col, 
                           node.children[char],
                           path + char, visited, found)
        
        # Backtrack
        visited.remove((row, col))
    
    # Find all words starting from each position
    found_words = set()
    for i in range(len(board)):
        for j in range(len(board[0])):
            char = board[i][j]
            if char in trie.root.children:
                explore(i, j, trie.root.children[char], 
                       char, set(), found_words)
    
    return sorted(list(found_words))

# Example usage:
# board = [
#     ['A','B','C'],
#     ['D','E','F'],
#     ['G','H','I']
# ]
# words = ['ABC', 'AEI', 'ABEF']
# print(find_words(board, words))`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why is a trie more efficient than a hash table for prefix-based operations?',
      options: [
        'Tries use less memory',
        'Tries can find all words with a prefix in O(p + n) time',
        'Tries are simpler to implement',
        'Tries have faster lookup for exact matches',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Tries often use more memory than hash tables due to storing shared prefixes as separate nodes.',
        'Correct! Tries can find all words sharing a prefix by traversing to the prefix node and exploring its subtree, something a hash table cannot do efficiently.',
        'Incorrect. Tries are generally more complex to implement than hash tables.',
        'Incorrect. Hash tables typically have faster exact match lookups.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the key advantage of using a trie for autocomplete functionality?',
      options: [
        'It uses constant memory',
        'It can process results in any order',
        'It groups words by common prefixes for efficient retrieval',
        'It reduces the number of string comparisons',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Trie memory usage grows with the number of strings stored.',
        'Incorrect. Results are naturally organized by prefix.',
        'Correct! A trie organizes words by their common prefixes, making it extremely efficient to find all words that start with a given prefix for autocomplete suggestions. This hierarchical organization means we can quickly traverse to the prefix node and find all relevant completions in a single subtree traversal.',
        'Incorrect. While tries do reduce some comparisons, this is not their main advantage for autocomplete.',
      ],
      difficulty: Difficulty.Advanced
    }
  ]
};

const binaryStringOperationsData: LessonContent = {
  title: 'Understanding Binary Strings and Bit Manipulation',
  content: `<p>
Imagine you're working with a light switch panel where each switch represents a binary digit - it can be either on (1) or off (0). Just as you can control multiple switches to create different lighting patterns, binary string operations let us manipulate patterns of bits to solve complex problems efficiently.
</p>

<p>
When we work with binary strings, we're essentially manipulating these patterns of ones and zeros. Understanding how these patterns work and how we can manipulate them efficiently opens up powerful techniques for solving many programming problems.
</p>

<h3><u>Understanding Binary Representation</u></h3>

<p>
Think of a binary string as a sequence of cells, where each cell can hold either a 0 or 1. Just as we can count using decimal numbers, we can represent any number using these binary patterns:
</p>

<h4><b>Binary Properties</b></h4>
<table>
<tr><th>Concept</th><th>Description</th><th>Example</th></tr>
<tr>
  <td>Position Value</td>
  <td>Each position represents a power of 2</td>
  <td>1101₂ = 8 + 4 + 0 + 1 = 13₁₀</td>
</tr>
<tr>
  <td>Leading Zeros</td>
  <td>Don't affect value but matter for operations</td>
  <td>0011 same value as 11</td>
</tr>
<tr>
  <td>Bit Length</td>
  <td>Number of digits in representation</td>
  <td>1101 has length 4</td>
</tr>
</table>

<h3><u>Core Operations</u></h3>

<p>
The power of binary operations comes from their simplicity and efficiency. Let's explore the fundamental operations:
</p>

<h4><b>Bitwise Operations</b></h4>
<p>
These operations work like simple rules applied to each position:
</p>

<table>
<tr><th>Operation</th><th>Symbol</th><th>Description</th><th>Use Case</th></tr>
<tr>
  <td>AND</td>
  <td>&</td>
  <td>1 only if both bits are 1</td>
  <td>Masking unwanted bits</td>
</tr>
<tr>
  <td>OR</td>
  <td>|</td>
  <td>1 if either bit is 1</td>
  <td>Combining flags</td>
</tr>
<tr>
  <td>XOR</td>
  <td>^</td>
  <td>1 if bits are different</td>
  <td>Toggle/find differences</td>
</tr>
<tr>
  <td>NOT</td>
  <td>~</td>
  <td>Inverts each bit</td>
  <td>Complement values</td>
</tr>
</table>

<h4><b>Bit Manipulation Techniques</b></h4>
<p>
These are common patterns that solve specific problems:
</p>

<li>Isolating rightmost 1-bit: n & -n</li>
<li>Clearing rightmost 1-bit: n & (n-1)</li>
<li>Setting kth bit: n | (1 << k)</li>
<li>Checking kth bit: (n >> k) & 1</li>

<h3><u>Advanced Applications</u></h3>

<p>
Binary operations excel in several important areas:
</p>

<h4><b>Common Applications</b></h4>
<li>Flag management in systems programming</li>
<li>Memory-efficient data structures</li>
<li>Fast mathematical operations</li>
<li>Network protocol implementations</li>

<h4><b>Performance Benefits</b></h4>
<table>
<tr><th>Operation</th><th>Binary Approach</th><th>Traditional Approach</th></tr>
<tr>
  <td>Multiply by 2ⁿ</td>
  <td>O(1) with << n</td>
  <td>O(n) with multiplication</td>
</tr>
<tr>
  <td>Check even/odd</td>
  <td>O(1) with & 1</td>
  <td>O(1) with modulo but slower</td>
</tr>
<tr>
  <td>Toggle case</td>
  <td>O(1) with XOR</td>
  <td>O(1) with ASCII but more complex</td>
</tr>
</table>`,

  codeExample: `# Comprehensive demonstration of binary string operations

class BinaryStringOperator:
    """
    A collection of binary string manipulation techniques with detailed
    explanations of how and why they work.
    """
    
    @staticmethod
    def count_bits(n: int) -> int:
        """
        Counts the number of 1 bits in a number using Brian Kernighan's algorithm.
        
        This elegant algorithm uses the fact that n & (n-1) always removes
        the rightmost 1 bit. We keep doing this until no 1 bits remain,
        counting how many steps it took.
        
        Time: O(number of 1 bits), Space: O(1)
        """
        count = 0
        while n:
            n &= (n - 1)  # Clear the rightmost 1 bit
            count += 1
        return count
    
    @staticmethod
    def get_bit(n: int, k: int) -> bool:
        """
        Returns the value of the kth bit from right.
        
        We shift right by k positions to bring target bit to rightmost,
        then mask with 1 to isolate it.
        
        Time: O(1), Space: O(1)
        """
        return (n >> k) & 1 == 1
    
    @staticmethod
    def set_bit(n: int, k: int) -> int:
        """
        Sets the kth bit to 1.
        
        Creates a mask with 1 in kth position using left shift,
        then OR with original number to set that bit.
        
        Time: O(1), Space: O(1)
        """
        return n | (1 << k)
    
    @staticmethod
    def clear_bit(n: int, k: int) -> int:
        """
        Clears the kth bit to 0.
        
        Creates a mask with 0 in kth position and 1s elsewhere,
        then AND with original number to clear that bit.
        
        Time: O(1), Space: O(1)
        """
        return n & ~(1 << k)
    
    @staticmethod
    def binary_add(a: str, b: str) -> str:
        """
        Adds two binary strings without converting to decimal.
        Demonstrates pure binary addition with carry handling.
        
        Time: O(max(len(a), len(b))), Space: O(max(len(a), len(b)))
        """
        # Ensure strings are same length by padding with zeros
        max_len = max(len(a), len(b))
        a = a.zfill(max_len)
        b = b.zfill(max_len)
        
        result = []
        carry = 0
        
        # Process from right to left, just like decimal addition
        for i in range(max_len - 1, -1, -1):
            bit_sum = carry
            bit_sum += int(a[i])
            bit_sum += int(b[i])
            
            # Current bit is sum modulo 2
            result.append(str(bit_sum % 2))
            # Carry is sum integer divided by 2
            carry = bit_sum // 2
        
        if carry:
            result.append('1')
            
        # Reverse result and join into string
        return ''.join(reversed(result))
    
    @staticmethod
    def binary_to_gray(n: int) -> int:
        """
        Converts binary to Gray code.
        Gray code has the property that successive values differ by one bit.
        
        The formula is: gray = n ^ (n >> 1)
        
        Time: O(1), Space: O(1)
        """
        return n ^ (n >> 1)
    
    @staticmethod
    def gray_to_binary(gray: int) -> int:
        """
        Converts Gray code back to binary.
        Uses the fact that each bit depends on all higher bits.
        
        Time: O(log n), Space: O(1)
        """
        mask = gray
        while mask:
            mask >>= 1
            gray ^= mask
        return gray
    
    @staticmethod
    def find_missing_number(nums: list) -> int:
        """
        Finds missing number in sequence [0..n] using XOR.
        
        Uses the property that a^a=0 and a^0=a.
        XORing all numbers with their indices will leave only
        the missing number, as all others appear twice and cancel out.
        
        Time: O(n), Space: O(1)
        """
        missing = len(nums)  # Include n in XOR
        
        for i, num in enumerate(nums):
            # XOR index and value
            missing ^= i ^ num
            
        return missing
    
    @staticmethod
    def swap_bits(n: int, i: int, j: int) -> int:
        """
        Swaps bits at positions i and j.
        Only performs swap if bits are different.
        
        Time: O(1), Space: O(1)
        """
        # Get bits at positions i and j
        bit_i = (n >> i) & 1
        bit_j = (n >> j) & 1
        
        # Only swap if bits are different
        if bit_i != bit_j:
            # Create mask for bits to flip
            mask = (1 << i) | (1 << j)
            # XOR with mask to flip both bits
            n ^= mask
            
        return n`,

  exercises: [
    {
      prompt: "Implement a function that determines if a binary string represents an alternating sequence (no two adjacent bits are the same). For example, '1010' and '0101' are alternating, but '1100' is not.",
      initialCode: `def is_alternating(binary: str) -> bool:
    # Write your solution here
    pass`,
      solution: `def is_alternating(binary: str) -> bool:
    """
    Checks if a binary string has alternating bits.
    
    This solution demonstrates:
    1. Bit pattern recognition
    2. XOR properties for alternation
    3. Efficient bit manipulation
    
    Time: O(n), Space: O(1)
    """
    if not binary or len(binary) <= 1:
        return True
    
    # Method 1: Compare adjacent bits
    for i in range(1, len(binary)):
        if binary[i] == binary[i-1]:
            return False
    return True
    
    # Alternative Method using bit manipulation:
    # Convert string to integer
    num = int(binary, 2)
    
    # Right shift and XOR
    # If alternating, all bits in result should be 1
    xor_result = num ^ (num >> 1)
    
    # Check if all bits in result are 1
    # This means binary representation is same length as original
    # and has all 1s
    mask = (1 << (len(binary) - 1)) - 1
    return (xor_result & mask) == mask`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: "Implement a function that finds the longest sequence of consecutive ones in a binary string that can be achieved by flipping at most one zero to one.",
      initialCode: `def longest_ones_with_flip(binary: str) -> int:
    # Write your solution here
    pass`,
      solution: `def longest_ones_with_flip(binary: str) -> int:
    """
    Finds longest sequence of ones possible with one flip.
    Uses sliding window to track sequences separated by zeros.
    
    This solution demonstrates:
    1. Window manipulation for binary sequences
    2. Optimal subproblem analysis
    3. Single-pass optimization
    
    Time: O(n), Space: O(1)
    """
    max_length = 0
    prev_ones = 0  # Length of ones before current zero
    curr_ones = 0  # Length of ones after current zero
    
    for bit in binary:
        if bit == '1':
            curr_ones += 1
        else:
            # When we find a zero, previous sequence becomes
            # the one before current zero
            max_length = max(max_length, prev_ones + curr_ones + 1)
            prev_ones = curr_ones
            curr_ones = 0
    
    # Check final sequence
    max_length = max(max_length, prev_ones + curr_ones + 1)
    
    # Handle case where no zeros exist
    if curr_ones == len(binary):
        return curr_ones
        
    return min(max_length, len(binary))`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why is the operation n & (n-1) effective for clearing the rightmost 1 bit?',
      options: [
        'It is faster than other operations',
        'When we subtract 1, all bits after rightmost 1 flip, making the AND clear it',
        'It uses less memory',
        'It works with negative numbers',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. The speed is comparable to other bitwise operations.',
        'Correct! When we subtract 1 from a number, all bits after the rightmost 1 flip, and that 1 becomes 0. When we AND this with the original number, only the rightmost 1 gets cleared because it\'s the only position where n has 1 and (n-1) has 0.',
        'Incorrect. All bitwise operations use the same amount of memory.',
        'Incorrect. While it can work with negative numbers, this isn\'t why it\'s effective.',
      ],
      difficulty: Difficulty.Advanced,
    },
    {
      question: 'What makes XOR particularly useful for toggling bits?',
      options: [
        'It is faster than other bitwise operations',
        'It requires less memory',
        'It acts as a conditional inverter: 1 flips the bit, 0 keeps it unchanged',
        'It can handle multiple bits at once',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. XOR has similar performance to other bitwise operations.',
        'Incorrect. Memory usage is the same as other bitwise operations.',
        'Correct! XOR has the unique property that x^1 flips a bit while x^0 leaves it unchanged. This makes it perfect for selective bit toggling using a mask.',
        'Incorrect. All bitwise operations handle multiple bits simultaneously.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const stringLessons: Record<string, LessonContent> = {
  'string-basics': stringBasicsData,
  'string-immutability': stringImmutabilityData,
  'interview-patterns': stringInterviewPatternsData,
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
