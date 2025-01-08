import { Concept, createConcept, Difficulty } from '@/common/commonConcept';
import { generateTimeComplexityTable } from '@/utils/generateTimeComplexityTable';

export const trieConcepts: Concept[] = [
  createConcept(
    1,
    'What is a Trie? How does it differ from other data structures?',
    `
  **Definition:** A trie (pronounced "try") is a tree-like data structure used to store a dynamic set of strings, where the keys are usually strings. Each node in the trie represents a single character of a string.
  
  **Basic Structure:** A trie consists of nodes where each node represents a character. The root node is typically an empty string, and each path from the root to a node represents a string formed by the characters along that path.
  
  **Example:**
  \`\`\`python
  class TrieNode:
      def __init__(self):
          self.children = {}
          self.is_end_of_word = False
  
  class Trie:
      def __init__(self):
          self.root = TrieNode()
  \`\`\`
  
  **Key Characteristics:**
  - **Efficient Prefix Search:** Tries allow for efficient prefix-based searches.
  - **Memory Usage:** Tries can be memory-intensive, especially for sparse datasets.
  - **Tree Structure:** Each node in the trie can have multiple children, one for each possible character.
      `,
    Difficulty.Beginner,
  ),
  createConcept(
    2,
    'What are the advantages and disadvantages of using tries?',
    `
  <h2>Advantages:</h2>
  <ul>
    <li><strong>Fast Prefix Search:</strong> Tries allow for <strong>O(m) time complexity</strong> for prefix searches, where m is the length of the prefix.</li>
    <li><strong>Efficient Storage:</strong> Tries can store a large number of strings with shared prefixes efficiently.</li>
    <li><strong>Simple Implementation:</strong> Tries are straightforward to implement and use in most programming languages.</li>
  </ul>
  
  <h2>Disadvantages:</h2>
  <ul>
    <li><strong>Memory Usage:</strong> Tries can be memory-intensive, especially for sparse datasets.</li>
    <li><strong>Insertion and Deletion:</strong> Inserting or deleting elements in a trie can be complex, requiring traversal and potential restructuring.</li>
    <li><strong>Memory Allocation:</strong> Dynamically allocating memory for each node can be costly.</li>
  </ul>
  
  **Example:**
  \`\`\`python
  # Fast prefix search example
  trie = Trie()
  trie.insert("apple")
  trie.insert("app")
  print(trie.search("app"))  # Output: True
  
  # Memory-intensive example
  trie.insert("a")
  trie.insert("an")
  trie.insert("ant")
  \`\`\`
  
  **Key Points:**
  - Tries are ideal for scenarios where prefix-based searches are common.
  - For large datasets with many unique prefixes, other data structures like hash tables or binary search trees may be more suitable.
      `,
    Difficulty.Beginner,
  ),
  createConcept(
    3,
    'What is the time complexity of common operations on a trie (insertion, search, prefix search)?',
    `
**Time Complexity of Common Operations on Tries:**
${generateTimeComplexityTable([
  {
    name: 'Insertion',
    complexity: 'O(m)',
    explanation:
      'Inserting a string of length m into a trie requires traversing each character, resulting in O(m) time complexity.',
  },
  {
    name: 'Search',
    complexity: 'O(m)',
    explanation:
      'Searching for a string of length m in a trie requires traversing each character, resulting in O(m) time complexity.',
  },
  {
    name: 'Prefix Search',
    complexity: 'O(m)',
    explanation:
      'Searching for all strings with a given prefix of length m requires traversing each character, resulting in O(m) time complexity.',
  },
  {
    name: 'Deletion',
    complexity: 'O(m)',
    explanation:
      'Deleting a string of length m from a trie requires traversing each character, resulting in O(m) time complexity.',
  },
])}
**Key Points:**
- Tries are optimized for fast prefix-based searches but can be inefficient for memory usage.
- The time complexity for insertion, search, and prefix search is linear with respect to the length of the string.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    4,
    'Explain the difference between a trie and a binary search tree (BST).',
    `
  **Tries:**
  - **Character-Based:** Tries store strings character by character, with each node representing a single character.
  - **Multiple Children:** Each node in a trie can have multiple children, one for each possible character.
  - **Prefix Search:** Tries are optimized for prefix-based searches.
  - **Example:** In a trie, the strings "apple" and "app" would share the prefix "app".
  
  **Binary Search Trees (BST):**
  - **Value-Based:** BSTs store values, with each node having a key and a value.
  - **Two Children:** Each node in a BST can have at most two children, a left child with a smaller key and a right child with a larger key.
  - **Range Queries:** BSTs are optimized for range queries and ordered traversal.
  - **Example:** In a BST, the values 5, 3, and 7 would be stored in a specific order based on their keys.
  
  **Key Points:**
  - Tries are more suitable for string-based operations and prefix searches.
  - BSTs are more suitable for value-based operations and range queries.
      `,
    Difficulty.Beginner,
  ),
];
