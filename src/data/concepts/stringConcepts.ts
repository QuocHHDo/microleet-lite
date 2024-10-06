import { generateTimeComplexityTable } from '@/utils/generateTimeComplexityTable';
import { Concept, Difficulty, createConcept } from '../../common/commonConcept';

export const stringConcepts: Concept[] = [
  createConcept(
    1,
    'What is a String? How does it differ from other data structures?',
    `
  **Definition:** A string is a sequence of characters, typically used to represent text.
  
  **Basic Structure:** Strings are immutable in many programming languages, meaning their contents cannot be changed after creation.
  
  **Example:**
  \`\`\`python
  my_string = "Hello, World!"
  \`\`\`
  
  **Key Characteristics:**
  - **Immutable:** Strings are immutable in languages like Python, Java, and C#.
  - **Sequence:** Strings can be treated as sequences of characters, allowing for operations like slicing and indexing.
  - **Text Representation:** Strings are used to represent text data, making them fundamental in many applications.
      `,
    Difficulty.Beginner,
  ),
  createConcept(
    2,
    'What are the advantages and disadvantages of using strings?',
    `
  <h2>Advantages:</h2>
  <ul>
    <li><strong>Text Representation:</strong> Strings are the primary way to represent text data in most programming languages.</li>
    <li><strong>Rich Operations:</strong> Strings support a wide range of operations like concatenation, slicing, and searching.</li>
    <li><strong>Immutable:</strong> Immutability can lead to safer and more predictable code, as strings cannot be accidentally modified.</li>
  </ul>
  
  <h2>Disadvantages:</h2>
  <ul>
    <li><strong>Performance:</strong> Immutable strings can lead to performance issues when performing many operations, as each operation creates a new string.</li>
    <li><strong>Memory Usage:</strong> Immutable strings can lead to increased memory usage, as each modification creates a new string object.</li>
    <li><strong>Complexity:</strong> Some operations on strings can be complex and require careful handling, especially when dealing with Unicode characters.</li>
  </ul>
  
  **Example:**
  \`\`\`python
  # Concatenation example
  my_string = "Hello"
  my_string += ", World!"  # Creates a new string object
  \`\`\`
  
  **Key Points:**
  - Strings are essential for text processing but require careful handling due to their immutability.
  - For performance-critical applications, consider using mutable alternatives like Python's \`bytearray\` or C++'s \`std::string\`.
      `,
    Difficulty.Beginner,
  ),
  createConcept(
    3,
    'What is the time complexity of common operations on strings (access, concatenation, slicing)?',
    `
**Time Complexity of Common Operations on Strings:**
${generateTimeComplexityTable([
  {
    name: 'Access',
    complexity: 'O(1)',
    explanation:
      'Accessing a character in a string by its index is a direct operation.',
  },
  {
    name: 'Concatenation',
    complexity: 'O(n)',
    explanation:
      'Concatenating two strings creates a new string, which requires copying all characters from both strings.',
  },
  {
    name: 'Slicing',
    complexity: 'O(n)',
    explanation:
      'Slicing a string creates a new string, which requires copying the sliced portion.',
  },
  {
    name: 'Searching',
    complexity: 'O(n)',
    explanation:
      'Searching for a substring or character in a string typically requires scanning the entire string.',
  },
  {
    name: 'Modification',
    complexity: 'O(n)',
    explanation:
      'Modifying a string (e.g., replacing a character) creates a new string, which requires copying all characters.',
  },
])}
**Key Points:**
- Strings are optimized for fast access but can be inefficient for operations that require creating new strings.
- For frequent modifications, consider using mutable alternatives like Python's \`bytearray\` or C++'s \`std::string\`.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    4,
    'Explain the difference between mutable and immutable strings.',
    `
  **Mutable Strings:**
  - **Modifiable:** Mutable strings can be modified after creation.
  - **Memory Efficiency:** Mutable strings can be more memory-efficient for operations that require frequent modifications.
  - **Example:** In Python, a \`bytearray\` is a mutable string: \`my_bytearray = bytearray("Hello", "utf-8")\` and you can modify it directly.
  
  **Immutable Strings:**
  - **Unchangeable:** Immutable strings cannot be modified after creation.
  - **Safety:** Immutability can lead to safer and more predictable code, as strings cannot be accidentally modified.
  - **Example:** In Python, a regular string is immutable: \`my_string = "Hello"\`. Any modification creates a new string object.
  
  **Key Points:**
  - Mutable strings are more flexible but require careful handling to avoid unintended modifications.
  - Immutable strings are safer but can lead to performance issues for frequent modifications.
      `,
    Difficulty.Beginner,
  ),
  createConcept(
    5,
    'What are some common string operations and methods?',
    `
  **Common String Operations and Methods:**
  - **Concatenation:** Joining two strings together.
    \`\`\`python
    str1 = "Hello"
    str2 = "World"
    result = str1 + " " + str2  # "Hello World"
    \`\`\`
  - **Slicing:** Extracting a substring.
    \`\`\`python
    my_string = "Hello, World!"
    substring = my_string[7:12]  # "World"
    \`\`\`
  - **Searching:** Finding the position of a substring.
    \`\`\`python
    my_string = "Hello, World!"
    position = my_string.find("World")  # 7
    \`\`\`
  - **Replacement:** Replacing a substring with another.
    \`\`\`python
    my_string = "Hello, World!"
    new_string = my_string.replace("World", "Universe")  # "Hello, Universe!"
    \`\`\`
  - **Case Conversion:** Converting the case of characters.
    \`\`\`python
    my_string = "Hello, World!"
    lower_case = my_string.lower()  # "hello, world!"
    upper_case = my_string.upper()  # "HELLO, WORLD!"
    \`\`\`
  
  **Key Points:**
  - Strings support a wide range of operations and methods for text processing.
  - Understanding these operations is crucial for effective string manipulation.
      `,
    Difficulty.Beginner,
  ),
  createConcept(
    6,
    'What are Unicode and UTF-8, and how do they relate to strings?',
    `
  **Unicode:**
  - **Definition:** Unicode is a standard for encoding, representing, and handling text in different writing systems.
  - **Character Set:** Unicode defines a unique number (code point) for every character, no matter the platform, program, or language.
  - **Example:** The character "A" has a Unicode code point of U+0041.
  
  **UTF-8:**
  - **Definition:** UTF-8 is a variable-width character encoding that can represent every character in the Unicode character set.
  - **Encoding:** UTF-8 uses 1 to 4 bytes per character, making it efficient for both ASCII and non-ASCII characters.
  - **Example:** The character "A" is encoded as a single byte (0x41), while "€" is encoded as three bytes (0xE2 0x82 0xAC).
  
  **Relation to Strings:**
  - **Text Representation:** Strings in many programming languages are represented using Unicode, and UTF-8 is a common encoding for storing and transmitting these strings.
  - **Handling:** Proper handling of Unicode and UTF-8 is crucial for ensuring that text is displayed correctly across different platforms and languages.
  
  **Key Points:**
  - Unicode provides a universal character set, while UTF-8 is a widely used encoding for representing Unicode characters.
  - Understanding Unicode and UTF-8 is essential for working with text in a global context.
      `,
    Difficulty.Intermediate,
  ),
  createConcept(
    7,
    'What are some common string algorithms and their applications?',
    `
  **Common String Algorithms and Their Applications:**
  - **String Matching (e.g., Knuth-Morris-Pratt):**
    - **Application:** Used for searching patterns within text.
    - **Example:** Detecting keywords in a document.
  - **Substring Search (e.g., Boyer-Moore):**
    - **Application:** Efficiently finding occurrences of a substring within a larger string.
    - **Example:** Searching for a word in a text editor.
  - **Regular Expressions:**
    - **Application:** Pattern matching and text manipulation.
    - **Example:** Validating email addresses or extracting data from text.
  - **String Compression (e.g., Huffman Coding):**
    - **Application:** Reducing the size of text data.
    - **Example:** Compressing text files.
  - **Palindrome Detection:**
    - **Application:** Identifying palindromic strings.
    - **Example:** Checking if a word is a palindrome.
  
  **Key Points:**
  - String algorithms are essential for various text processing tasks.
  - Understanding these algorithms can help in designing efficient solutions for text-related problems.
      `,
    Difficulty.Intermediate,
  ),
  createConcept(
    8,
    'What are some common string data structures and their use cases?',
    `
  **Common String Data Structures and Their Use Cases:**
  - **Trie (Prefix Tree):**
    - **Use Case:** Efficiently storing and searching strings with common prefixes.
    - **Example:** Autocomplete features in search engines.
  - **Suffix Tree:**
    - **Use Case:** Fast substring search and pattern matching.
    - **Example:** Searching for all occurrences of a substring in a large text.
  - **String Hash Table:**
    - **Use Case:** Storing and retrieving strings with constant-time complexity.
    - **Example:** Implementing a dictionary or a set of strings.
  - **String Array:**
    - **Use Case:** Storing a collection of strings with fast access.
    - **Example:** Maintaining a list of names.
  
  **Key Points:**
  - Different string data structures are optimized for specific use cases.
  - Choosing the right data structure can significantly impact the performance of string-related operations.
      `,
    Difficulty.Intermediate,
  ),
  createConcept(
    9,
    'What are some common string manipulation techniques and their applications?',
    `
  **Common String Manipulation Techniques and Their Applications:**
  - **String Concatenation:**
    - **Application:** Combining multiple strings into one.
    - **Example:** Building a sentence from words.
  - **String Slicing:**
    - **Application:** Extracting parts of a string.
    - **Example:** Parsing URLs or file paths.
  - **String Replacement:**
    - **Application:** Replacing substrings within a string.
    - **Example:** Correcting typos in text.
  - **String Formatting:**
    - **Application:** Creating formatted strings from variables.
    - **Example:** Generating dynamic reports.
  - **String Splitting:**
    - **Application:** Dividing a string into a list of substrings.
    - **Example:** Parsing CSV data.
  
  **Key Points:**
  - String manipulation techniques are fundamental for processing and transforming text data.
  - Understanding these techniques is crucial for developing text-based applications.
      `,
    Difficulty.Intermediate,
  ),
  createConcept(
    10,
    'What are some common string processing challenges and how to address them?',
    `
  **Common String Processing Challenges and Their Solutions:**
  - **Unicode Normalization:**
    - **Challenge:** Different representations of the same character can cause issues.
    - **Solution:** Use Unicode normalization to ensure consistent representation.
  - **Case Sensitivity:**
    - **Challenge:** Case differences can lead to incorrect comparisons.
    - **Solution:** Normalize case before comparisons.
  - **Encoding Issues:**
    - **Challenge:** Different encodings can cause garbled text.
    - **Solution:** Ensure consistent encoding throughout the application.
  - **Regular Expression Complexity:**
    - **Challenge:** Regular expressions can be complex and hard to debug.
    - **Solution:** Use well-tested libraries and validate expressions.
  - **Performance:**
    - **Challenge:** String operations can be slow, especially with large texts.
    - **Solution:** Optimize algorithms and use efficient data structures.
  
  **Key Points:**
  - String processing can present various challenges, from encoding issues to performance bottlenecks.
  - Addressing these challenges requires a deep understanding of string handling and text processing techniques.
      `,
    Difficulty.Advanced,
  ),
];
