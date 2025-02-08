import { Concept, createConcept, Difficulty } from '@/common/commonConcept';

export const trieConcepts: Concept[] = [
  createConcept(
    1,
    'What is a Trie? How does it differ from other data structures?',
    `
**Definition:** A trie (pronounced "try") is a tree-like data structure for storing strings (or sequences), where each node typically represents one character of a larger string.

**Basic Structure:**
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
- **Prefix-Based:** Optimized for quickly searching shared prefixes.
- **Memory Usage:** Can become large if the character set or stored words are extensive.
- **Hierarchical:** Each path from the root corresponds to characters in the stored strings.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    2,
    'What are the advantages and disadvantages of using tries?',
    `
<h2>Advantages:</h2>
<ul>
  <li><strong>Fast Prefix Search:</strong> O(m) time, where m is the length of the search string.</li>
  <li><strong>Shared Prefixes:</strong> Common prefixes share nodes, often saving space for similar words.</li>
  <li><strong>Simple Implementation:</strong> Conceptually straightforward for text-focused operations.</li>
</ul>

<h2>Disadvantages:</h2>
<ul>
  <li><strong>High Memory Use:</strong> Large alphabets or sparse data can cause significant overhead.</li>
  <li><strong>Maintenance Overhead:</strong> Insertions/deletions require careful traversal and node clean-up.</li>
  <li><strong>Not Always Optimal:</strong> For smaller or random data, a hash-based structure might suffice.</li>
</ul>

**Key Points:**
- Ideal for auto-complete or prefix-matching tasks.
- May be overkill for small sets or when memory is a critical constraint.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    3,
    'What is the time complexity of common operations on a trie (insertion, search, prefix search)?',
    `
**Time Complexity of Trie Operations:**
| Operation      | Complexity | Explanation                                                     |
|----------------|-----------|-----------------------------------------------------------------|
| **Insertion**  | O(m)       | Add each character of the string to a node.                     |
| **Search**     | O(m)       | Traverse m characters; if all match, string exists.             |
| **Prefix**     | O(m)       | Checking for a prefix similarly traverses m characters.         |
| **Deletion**   | O(m)       | Remove or mark end-of-word false after traversing.              |

**Key Points:**
- m = length of the string or prefix.
- Overall efficiency depends on the size of the character set and overlap among stored strings.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    4,
    'Explain the difference between a trie and a binary search tree (BST).',
    `
**Trie:**
- **Character-Based:** Each node represents a character in a path.
- **Multiple Children:** One child per possible character in the alphabet.
- **Focus on Prefixes:** Suited for string lookups and prefix queries.

**BST:**
- **Value-Based:** Each node stores a key, commonly numeric or comparable.
- **Two Children:** Left < node < right in a binary search tree.
- **Range Queries:** Good for numeric or ordered data searches.

**Key Points:**
- Tries excel in textual prefix operations.
- BSTs excel in numeric or comparison-based range queries.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    5,
    'How do you implement a trie insert and search operation?',
    `
**Insert (Pseudo-code):**
1. Start at the root node.
2. For each character \`ch\` in the string:
   - If \`ch\` is not a child of the current node, create a new node.
   - Move to that child node.
3. Mark the final node's \`is_end_of_word\` as True.

\`\`\`python
def insert(self, word):
    current = self.root
    for ch in word:
        if ch not in current.children:
            current.children[ch] = TrieNode()
        current = current.children[ch]
    current.is_end_of_word = True
\`\`\`

**Search (Pseudo-code):**
1. Start at the root node.
2. For each character \`ch\` in the query:
   - If \`ch\` is not a child of the current node, return False.
   - Move to that child node.
3. Return the final node's \`is_end_of_word\`.

\`\`\`python
def search(self, word):
    current = self.root
    for ch in word:
        if ch not in current.children:
            return False
        current = current.children[ch]
    return current.is_end_of_word
\`\`\`

**Key Points:**
- Insert and search both run in O(m) time, where m is the length of the word.
- Space usage can grow significantly if words share few common prefixes.
    `,
    Difficulty.Intermediate,
  ),
  createConcept(
    6,
    'How do you implement a trie-based prefix search (auto-complete)?',
    `
**Algorithm:**
1. Traverse the trie according to the given prefix.
2. If any character is missing, no words match.
3. Once at the prefix end node, perform a DFS or BFS to gather all words in the subtree.

**Example (Pseudo-code for collecting suggestions):**
\`\`\`python
def collect_all_words(node, prefix, results):
    if node.is_end_of_word:
        results.append(prefix)
    for ch, child_node in node.children.items():
        collect_all_words(child_node, prefix + ch, results)

def autocomplete(self, prefix):
    # Traverse to the prefix node
    current = self.root
    for ch in prefix:
        if ch not in current.children:
            return []
        current = current.children[ch]
    # Collect all words below this node
    results = []
    collect_all_words(current, prefix, results)
    return results
\`\`\`

**Key Points:**
- Useful for auto-complete or any prefix-based query system (e.g., search suggestions).
- Time complexity depends on prefix length + size of the subtree for collecting words.
    `,
    Difficulty.Intermediate,
  ),
  createConcept(
    7,
    'Compressed Tries (Radix Trees) and Memory Optimization',
    `
**Problem:** Standard trie nodes can be very sparse if stored strings don't share many common prefixes.

**Compressed Trie / Radix Tree:**
- **Combine Consecutive Nodes:** Instead of one character per edge, each edge can store a substring of multiple characters.
- **Reduced Node Count:** Fewer intermediate nodes, lowering memory usage.

**Example:**
- Storing "car", "cat", "cart" might share the "ca" edge, then diverge at "r" vs. "t".

**Key Points:**
- Compression can save memory while keeping O(m) lookups.
- Implementation is more complex than a standard trie (merging consecutive single-character nodes).
    `,
    Difficulty.Advanced,
  ),
  createConcept(
    8,
    'Suffix Tries and Their Applications',
    `
**Definition:** A suffix trie contains all suffixes of a given string. For a string S of length n, it has O(n^2) substrings stored in a compressed form.

**Construction:**
1. For each suffix of the string (S[i..n-1]), insert it into the trie.
2. This can be memory-heavy in naive form, often replaced by more compact structures like suffix trees or suffix arrays.

**Applications:**
- **Pattern Searching:** Quickly find if a substring appears in S.
- **String Operations:** Longest repeated substring, string comparisons, etc.

**Key Points:**
- Suffix tries are powerful but can be large (O(n^2) space).
- More advanced variants (suffix trees, suffix arrays) improve memory usage while maintaining fast substring queries.
    `,
    Difficulty.Advanced,
  ),
  createConcept(
    9,
    'Handling Large Alphabets in Tries',
    `
**Challenge:** If the character set is huge (e.g., Unicode), each node could have many unused children pointers.

**Possible Solutions:**
1. **HashMap or Dictionary for Children:** Instead of fixed array indices, store children in a map keyed by character.
2. **Compressed/Radix Tries:** Store sequences of characters on edges.
3. **Adaptive Data Structures:** Combine tries with other data structures (e.g., a subtree might be replaced with a suffix array if beneficial).

**Key Points:**
- Using a dictionary for child references is more space-efficient for large alphabets or sparse usage.
- The trade-off is slightly slower lookups compared to direct array indexing.
    `,
    Difficulty.Advanced,
  ),
  createConcept(
    10,
    'Deletions and Edge-Case Management in Tries',
    `
**Deletion Steps (Pseudo-code):**
1. Traverse down the trie using the string\'s characters.
2. Unmark \`is_end_of_word\` at the final node.
3. Optionally remove leaf nodes that are no longer needed.

**Edge Cases:**
- **Partial Overlap:** Some prefix might still be needed for other words.
- **No Words Left:** If \`is_end_of_word\` is never true in a node\'s children, prune them carefully.
- **Empty String:** Handle special case if your trie supports insertion of empty strings.

**Key Points:**
- Deletion is also O(m), but ensuring you only remove unneeded nodes requires careful checks.
- Many implementations leave node cleanup optional to avoid complex merges.
    `,
    Difficulty.Advanced,
  ),
];
