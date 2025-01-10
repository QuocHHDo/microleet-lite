import { Concept, Difficulty, createConcept } from '../../common/commonConcept';

export const stringConcepts: Concept[] = [
  createConcept(
    1,
    'What is a String? How does it differ from other data structures?',
    `
**Definition:** A string is a sequence of characters, generally used to represent text.

**Basic Structure:** In many languages (e.g., Python, Java), strings are immutable, meaning any modification creates a new string object.

**Example:**
\`\`\`python
my_string = "Hello, World!"
\`\`\`

**Key Characteristics:**
- **Immutable:** Prevents accidental modification, but can impact performance for heavy string manipulation.
- **Sequential:** Allows indexing and slicing.
- **Text Representation:** Crucial for storing and manipulating textual data.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    2,
    'What are the advantages and disadvantages of using strings?',
    `
<h2>Advantages:</h2>
<ul>
  <li><strong>Text Representation:</strong> Primary way to handle textual data.</li>
  <li><strong>Rich Operations:</strong> Concatenation, slicing, searching, and more.</li>
  <li><strong>Immutable (in many languages):</strong> Enhances safety by preventing in-place modifications.</li>
</ul>

<h2>Disadvantages:</h2>
<ul>
  <li><strong>Performance:</strong> Repeated concatenations can be costly if each creates a new string.</li>
  <li><strong>Memory Usage:</strong> Each modification may increase memory usage due to immutability.</li>
  <li><strong>Unicode Complexity:</strong> Special care needed for multilingual or special characters.</li>
</ul>

**Key Points:**
- Powerful and versatile for text, but watch out for performance impacts of immutability.
- Consider mutable alternatives where frequent changes are needed.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    3,
    'What is the time complexity of common operations on strings (access, concatenation, slicing)?',
    `
**Time Complexity of Common String Operations:**
| Operation       | Complexity | Explanation                                                                      |
|-----------------|-----------|----------------------------------------------------------------------------------|
| **Access**      | O(1)       | Indexing a character is generally constant time.                                 |
| **Concatenation** | O(n)     | Creating a new string requires copying all characters.                           |
| **Slicing**     | O(n)       | Copying a range of characters forms a new string.                                |
| **Searching**   | O(n)       | Finding a substring may involve scanning the entire string.                      |
| **Modification**| O(n)       | In immutable strings, modifying a character creates a new copy.                  |

**Key Points:**
- Access by index is fast.
- Operations that involve creating new strings can be expensive (O(n)).
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    4,
    'Explain the difference between mutable and immutable strings.',
    `
**Mutable Strings:**
- **Modifiable:** Can change contents in place.
- **Memory Efficiency:** Repeated edits are cheaper because no new string is allocated each time.
- **Example:** Python \`bytearray\`, C++ \`std::string\` (resizable internally).

**Immutable Strings:**
- **No In-Place Changes:** Any alteration leads to a new string.
- **Thread Safety:** Immutable objects are safer for concurrent operations.
- **Example:** Python \`str\`, Java \`String\`.

**Key Points:**
- Mutable strings are better when changes are frequent.
- Immutable strings are simpler to reason about and often safer in multi-threaded contexts.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    5,
    'What are some common string operations and methods?',
    `
**Examples of String Operations:**
- **Concatenation:** \`str1 + str2\`
- **Slicing:** \`my_string[start:end]\`
- **Searching:** \`my_string.find("some substring")\`
- **Replacing:** \`my_string.replace("old", "new")\`
- **Case Conversion:** \`my_string.lower()\`, \`my_string.upper()\`

**Key Points:**
- Built-in methods vary by language but often include trimming whitespace, splitting, and more.
- Mastering these operations is essential for text manipulation.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    6,
    'What are Unicode and UTF-8, and how do they relate to strings?',
    `
**Unicode:**
- **Universal Character Set:** Assigns a unique code point to every character in virtually all writing systems.

**UTF-8:**
- **Encoding Form:** Represents Unicode code points in 1–4 bytes.
- **Efficiency:** ASCII characters remain 1 byte, while others may need more.

**Relation to Strings:**
- Many languages use Unicode internally.
- Proper encoding/decoding ensures correct representation and handling of non-ASCII characters.

**Key Points:**
- Unicode and UTF-8 are indispensable for international text support.
- Mismanaging encodings can lead to garbled or incorrect text.
    `,
    Difficulty.Intermediate,
  ),
  createConcept(
    7,
    'What are some common string algorithms and their applications?',
    `
**String Algorithms & Uses:**
- **Knuth-Morris-Pratt (KMP):** Pattern searching in O(n + m).
- **Boyer-Moore:** Efficient substring search with skip heuristics.
- **Regular Expressions:** Flexible pattern matching for text validation or extraction.
- **Huffman Coding:** Compression by assigning variable-length codes to characters.
- **Palindrome Checks:** Identify if a string reads the same forward/backward.

**Key Points:**
- String algorithms boost performance in searching and parsing text.
- Appropriate algorithm choice depends on data size and pattern complexity.
    `,
    Difficulty.Intermediate,
  ),
  createConcept(
    8,
    'What are some common string data structures and their use cases?',
    `
**String-Oriented Data Structures:**
- **Trie (Prefix Tree):** Efficiently handle common prefixes (autocomplete).
- **Suffix Tree / Suffix Array:** Advanced substring searches and pattern matching.
- **Hash Tables:** Store strings with near O(1) lookup.
- **Rope:** Efficient insertion and concatenation for very large strings.

**Key Points:**
- Matching the data structure to the use case is critical for optimal text handling.
- Suffix trees/arrays excel at repeated pattern searches.
    `,
    Difficulty.Intermediate,
  ),
  createConcept(
    9,
    'What are some common string manipulation techniques and their applications?',
    `
**Techniques & Applications:**
- **Concatenation:** Assemble multiple pieces of text.
- **Slicing/Substr:** Extract segments for parsing or rearranging text.
- **Replacement:** Quickly fix or update specific substrings.
- **Formatting:** Insert variables into predefined templates (e.g., "Hello, {name}!").
- **Splitting/Joining:** Convert between strings and arrays/lists of tokens.

**Key Points:**
- Fundamental building blocks of text processing.
- Commonly used in data parsing, templating, and user input handling.
    `,
    Difficulty.Intermediate,
  ),
  createConcept(
    10,
    'What are some common string processing challenges and how to address them?',
    `
**Challenges & Solutions:**
- **Unicode Normalization:** Convert multiple representations of the same character into a standard form.
- **Case Sensitivity:** Convert strings to a consistent case for comparisons.
- **Encoding Mismatches:** Use a unified encoding (often UTF-8) throughout the system.
- **Regex Complexity:** Keep expressions readable and test thoroughly.
- **Performance:** Use efficient data structures or algorithms (e.g., buffer-based joins).

**Key Points:**
- Text handling requires attention to encoding, normalization, and performance.
- A small oversight can lead to big issues in multi-language applications.
    `,
    Difficulty.Advanced,
  ),
  createConcept(
    11,
    'The Rope Data Structure for Large-Scale String Editing',
    `
**Definition:** A rope is a binary tree where each leaf holds a chunk of a string. It supports efficient insert, delete, and concatenate operations on very large strings.

**Why Use Ropes?**
- **Scalability:** Managing edits in the middle of huge strings is expensive with normal arrays.
- **Partial Storage:** Only parts of the string change, minimizing copies.
- **Balanced Tree Operations:** Splitting and merging subtrees is faster for big data.

**Typical Use Cases:**
- **Text Editors:** Handling large documents where frequent insertions and deletions occur.
- **Real-Time Collaboration:** Multiple edits happening simultaneously.

**Key Points:**
- Balancing the rope ensures most operations stay near O(log n).
- Implementation can be more complex than standard strings or arrays.
    `,
    Difficulty.Advanced,
  ),
  createConcept(
    12,
    'Rabin-Karp Algorithm for String Searching',
    `
**Concept:** Uses hashing to quickly compare substrings with a pattern, enabling average O(n + m) complexity.

**Methodology:**
1. Compute a rolling hash for the pattern and for each substring of the text.
2. Compare hashes; if they match, confirm by checking the substring.
3. Roll the hash to the next substring in O(1) time.

**Advantages:**
- **Multiple Pattern Search:** Can search multiple patterns simultaneously by storing their hashes.
- **Practical:** Good average performance, especially for searching in large text files.

**Key Points:**
- Worst-case O(n*m) if many hash collisions occur.
- Proper choice of base and modulus reduces collisions significantly.
    `,
    Difficulty.Advanced,
  ),
  createConcept(
    13,
    'Boyer-Moore String Search Algorithm',
    `
**Overview:** Skips as many characters as possible when a mismatch occurs, leveraging two main heuristics: the bad-character rule and the good-suffix rule.

**Bad-Character Rule:**
- If a mismatch happens at character c in the text, shift the pattern so that c aligns with the rightmost occurrence of c in the pattern (or move past it if not present).

**Good-Suffix Rule:**
- If a mismatch happens after matching a suffix of the pattern, shift the pattern to align this suffix with a matching portion in the pattern.

**Performance:**
- Often runs faster than KMP in practice, especially on large alphabets.
- Worst-case O(n*m), average better due to large skips.

**Key Points:**
- The skip heuristics enable significant jumps over the text, making it efficient for typical text searches.
- More complex to implement than KMP or Rabin-Karp.
    `,
    Difficulty.Advanced,
  ),
  createConcept(
    14,
    'Knuth-Morris-Pratt (KMP) Algorithm for Pattern Matching',
    `
**Concept:** Preprocesses the pattern to build a longest prefix-suffix (LPS) array, enabling O(n + m) time complexity for searching.

**Steps:**
1. **LPS Array Construction:** For each prefix of the pattern, store the length of the longest proper prefix that’s also a suffix.
2. **Search Phase:** Use the LPS array to avoid re-checking characters in the text.

**Advantages:**
- **Guaranteed O(n + m):** No rewinding of the text pointer.
- **Easy Preprocessing:** The LPS array is built in O(m) time.

**Key Points:**
- Useful in constraints where worst-case performance must stay linear.
- Typically simpler than Boyer-Moore but may not skip as aggressively in average cases.
    `,
    Difficulty.Advanced,
  ),
];

