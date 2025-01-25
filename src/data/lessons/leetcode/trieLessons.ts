import { Difficulty } from '@/common/commonConcept';
import {
  Curriculum,
  LessonContent,
  LessonsTab,
  PriorityLevel,
} from '@/common/commonLesson';

const trieCurriculum: Curriculum = {
  title: 'Trie Curriculum',
  description:
    'A comprehensive guide to mastering trie data structure and its applications',
  sections: [
    {
      id: 1,
      title: 'Trie Fundamentals',
      topics: [
        {
          id: 'trie-basics',
          title: 'Trie Basics',
          description:
            'Understanding prefix trees, their properties, and time/space complexity analysis',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'trie-implementation',
          title: 'Trie Implementation',
          description: 'Building a basic trie structure and node class',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'trie-operations',
          title: 'Basic Trie Operations',
          description: 'Insert, search, and delete operations with edge cases',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'trie-traversal',
          title: 'Trie Traversal',
          description: 'DFS and BFS traversal techniques for tries',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 2,
      title: 'Advanced Trie Operations',
      topics: [
        {
          id: 'prefix-matching',
          title: 'Prefix Matching',
          description:
            'Finding words with common prefixes and counting prefix occurrences',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'autocomplete',
          title: 'Autocomplete System',
          description:
            'Implementing autocomplete functionality with ranking and suggestions',
          priority: PriorityLevel.Important,
        },
        {
          id: 'word-search',
          title: 'Pattern Search',
          description: 'Implementing wildcard and regex pattern matching',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 3,
      title: 'Trie Optimization',
      topics: [
        {
          id: 'memory-optimization',
          title: 'Memory Optimization',
          description: 'Compressed tries and memory-efficient implementations',
          priority: PriorityLevel.Beneficial,
        },
        {
          id: 'concurrent-tries',
          title: 'Concurrent Tries',
          description: 'Thread-safe trie implementations',
          priority: PriorityLevel.Optional,
        },
      ],
    },
    {
      id: 4,
      title: 'Advanced Applications',
      topics: [
        {
          id: 'spell-checker',
          title: 'Spell Checker',
          description:
            'Building a spell checker using tries with edit distance',
          priority: PriorityLevel.Beneficial,
        },
        {
          id: 'word-break',
          title: 'Word Break Problems',
          description:
            'Solving word break and sentence reconstruction problems',
          priority: PriorityLevel.Important,
        },
        {
          id: 'xor-problems',
          title: 'XOR Problems',
          description: 'Solving XOR-based problems using binary tries',
          priority: PriorityLevel.Beneficial,
        },
        {
          id: 'ip-routing',
          title: 'IP Routing',
          description: 'Using tries for IP address routing tables',
          priority: PriorityLevel.Optional,
        },
      ],
    },
  ],
} as const;

const trieBasicsData: LessonContent = {
  title: 'Understanding Tries (Prefix Trees)',
  content: `<p>
A trie (pronounced "try") is a specialized tree data structure that excels at storing and retrieving strings. Imagine a dictionary that organizes words not by alphabetical order, but by shared prefixes – that's essentially what a trie does! Each node in the path from root to any node represents a prefix of stored strings.
</p>

<h3><u>Key Characteristics</u></h3>
<p>
Think of a trie as a tree where:
</p>
<li>Each node represents a character in a string</li>
<li>Paths from root to node form prefixes</li>
<li>All descendants of a node share a common prefix</li>
<li>The root node is typically empty</li>

<h3><u>Real-World Applications</u></h3>
<p>
Tries are extensively used in:
</p>
<li>Autocomplete features in search engines</li>
<li>Spell checkers</li>
<li>IP routing tables</li>
<li>Phone directories</li>

<h3><u>Advantages Over Other Data Structures</u></h3>
<h4><b>Compared to Hash Tables:</b></h4>
<li>No hash collisions</li>
<li>Better for prefix-based operations</li>
<li>Supports ordered traversal</li>

<h4><b>Compared to Binary Search Trees:</b></h4>
<li>Faster string search operations</li>
<li>More space-efficient for common prefixes</li>
<li>Better for prefix matching</li>

<h3><u>Time and Space Complexity</u></h3>
<table>
<tr><th>Operation</th><th>Time Complexity</th><th>Explanation</th></tr>
<tr><td>Insert</td><td>O(m)</td><td>m = length of string</td></tr>
<tr><td>Search</td><td>O(m)</td><td>m = length of string</td></tr>
<tr><td>Delete</td><td>O(m)</td><td>m = length of string</td></tr>
<tr><td>Prefix Search</td><td>O(p)</td><td>p = length of prefix</td></tr>
</table>

<h4><b>Space Complexity:</b></h4>
<p>O(ALPHABET_SIZE × N × M) where:</p>
<li>ALPHABET_SIZE = number of possible characters</li>
<li>N = number of strings</li>
<li>M = average length of strings</li>`,

  codeExample: `# Basic Trie Node Structure
class TrieNode:
    def __init__(self):
        self.children = {}  # Dictionary to store child nodes
        self.is_end = False  # Marks end of a word

# Example of storing words in a trie
def visualize_trie():
    # Create root node
    root = TrieNode()
    
    # Add some words
    words = ["cat", "car", "card"]
    for word in words:
        node = root
        print(f"\\nAdding word: {word}")
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
                print(f"  Adding node '{char}'")
            node = node.children[char]
        node.is_end = True
        print(f"  Marking end of word: {word}")

    return root

# Demonstrate trie structure
root = visualize_trie()

# The resulting trie structure:
#       root
#        |
#        c
#        |
#        a
#       / \\
#      t   r
#           \\
#            d`,

  exercises: [
    {
      prompt:
        'Given a trie containing the words ["cat", "car", "card"], write a function that returns True if a given word exists in the trie.',
      initialCode: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False

def search_word(root, word):
    # Write your solution here
    pass`,
      solution: `def search_word(root, word):
    node = root
    for char in word:
        if char not in node.children:
            return False
        node = node.children[char]
    return node.is_end`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Write a function that returns all words in the trie that start with a given prefix.',
      initialCode: `def find_words_with_prefix(root, prefix):
    # Write your solution here
    pass`,
      solution: `def find_words_with_prefix(root, prefix):
    words = []
    node = root
    
    # Navigate to the prefix node
    for char in prefix:
        if char not in node.children:
            return words
        node = node.children[char]
    
    # Helper function for DFS
    def collect_words(node, current_word):
        if node.is_end:
            words.append(current_word)
        for char, child in node.children.items():
            collect_words(child, current_word + char)
    
    collect_words(node, prefix)
    return words`,
      difficulty: Difficulty.Intermediate,
    },
  ],

  quizzes: [
    {
      question:
        'What is the primary advantage of using a trie over a hash table for string storage?',
      options: [
        'Tries use less memory',
        'Tries support prefix matching more efficiently',
        'Tries have faster insertion time',
        'Tries handle collisions better',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Tries often use more memory due to node overhead.',
        'Correct! Tries excel at prefix operations, making them ideal for autocomplete features.',
        'Incorrect. Hash tables generally have similar or better insertion time.',
        'Incorrect. While true, this is not the primary advantage.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'What is the time complexity of searching for a word of length m in a trie?',
      options: [
        'O(1)',
        'O(log m)',
        'O(m)',
        'O(n) where n is the number of words',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Trie search is not constant time.',
        'Incorrect. Trie search is linear with word length.',
        'Correct! We need to check each character in the word exactly once.',
        'Incorrect. Search time depends on word length, not total words.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const trieImplementationData: LessonContent = {
  title: 'Implementing a Trie Data Structure',
  content: `<p>
Let's dive into implementing a full-featured trie data structure! We'll build it step by step, understanding each component and its purpose. A robust trie implementation consists of two main classes: TrieNode and Trie.
</p>

<h3><u>TrieNode Structure</u></h3>
<p>Each TrieNode represents a character in our trie and contains:</p>
<li>A map/dictionary of child nodes (children)</li>
<li>A boolean flag marking word endings (is_end)</li>
<li>Optional: Character value (for debugging)</li>
<li>Optional: Word count (for frequency tracking)</li>

<h3><u>Core Operations</u></h3>
<p>A complete trie implementation should support:</p>
<li>Insertion: Adding new words</li>
<li>Search: Finding exact words</li>
<li>Prefix Search: Finding all words with a given prefix</li>
<li>Deletion: Removing words</li>
<li>Word Count: Tracking number of stored words</li>

<h3><u>Implementation Considerations</u></h3>
<h4><b>Memory Optimization:</b></h4>
<li>Use hashmaps for sparse character sets</li>
<li>Use arrays for dense, known character sets</li>
<li>Consider compression for long strings</li>

<h4><b>Performance Optimization:</b></h4>
<li>Cache frequently accessed nodes</li>
<li>Implement iterative over recursive methods</li>
<li>Use appropriate character encoding</li>`,

  codeExample: `class TrieNode:
    def __init__(self):
        self.children = {}  # Map each character to a child node
        self.is_end = False  # Mark end of valid words
        self.word_count = 0  # Track frequency of words

class Trie:
    def __init__(self):
        """Initialize an empty trie with a root node."""
        self.root = TrieNode()
        self.total_words = 0
    
    def insert(self, word: str) -> None:
        """Insert a word into the trie."""
        node = self.root
        # Traverse or create nodes for each character
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        # Mark word ending and update counts
        node.is_end = True
        node.word_count += 1
        self.total_words += 1
    
    def search(self, word: str) -> bool:
        """Return True if word is in the trie."""
        node = self.root
        # Traverse the trie following the word
        for char in word:
            if char not in node.children:
                return False
            node = node.children[char]
        return node.is_end
    
    def starts_with(self, prefix: str) -> list[str]:
        """Return all words that start with given prefix."""
        words = []
        node = self.root
        
        # Reach the node corresponding to the prefix
        for char in prefix:
            if char not in node.children:
                return words
            node = node.children[char]
        
        # Helper function for DFS collection of words
        def collect_words(node, current_word):
            if node.is_end:
                words.append(current_word)
            for char, child in node.children.items():
                collect_words(child, current_word + char)
        
        collect_words(node, prefix)
        return words
    
    def delete(self, word: str) -> bool:
        """Delete a word from the trie. Return True if word was found and deleted."""
        def _delete_helper(node, word, depth=0):
            if depth == len(word):
                # Word found, mark as non-end
                if node.is_end:
                    node.is_end = False
                    node.word_count -= 1
                    self.total_words -= 1
                    return True
                return False
            
            char = word[depth]
            if char not in node.children:
                return False
            
            should_delete_node = _delete_helper(node.children[char], word, depth + 1)
            
            # If child has no other words, remove it
            if should_delete_node and not node.children[char].children:
                del node.children[char]
                
            return should_delete_node
        
        return _delete_helper(self.root, word)`,

  exercises: [
    {
      prompt:
        'Implement a method count_words_with_prefix(prefix) that returns the number of words in the trie that start with the given prefix.',
      initialCode: `def count_words_with_prefix(self, prefix):
    # Write your solution here
    pass`,
      solution: `def count_words_with_prefix(self, prefix):
    node = self.root
    # Navigate to prefix node
    for char in prefix:
        if char not in node.children:
            return 0
        node = node.children[char]
    
    # Count words under this node
    def count_words(node):
        total = node.word_count  # Count this node if it's a word
        for child in node.children.values():
            total += count_words(child)
        return total
    
    return count_words(node)`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Implement a method get_longest_word() that returns the longest word stored in the trie.',
      initialCode: `def get_longest_word(self):
    # Write your solution here
    pass`,
      solution: `def get_longest_word(self):
    longest_word = ""
    
    def dfs(node, current_word):
        nonlocal longest_word
        if node.is_end and len(current_word) > len(longest_word):
            longest_word = current_word
        
        for char, child in node.children.items():
            dfs(child, current_word + char)
    
    dfs(self.root, "")
    return longest_word`,
      difficulty: Difficulty.Advanced,
    },
  ],

  quizzes: [
    {
      question:
        'Which data structure is most appropriate for storing child nodes in a TrieNode for an English dictionary?',
      options: [
        'A linked list of 26 nodes',
        'A hash map (dictionary)',
        'A binary search tree',
        'An array of size 256',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. A linked list would make character lookup O(n).',
        'Correct! A hash map provides O(1) lookup and is memory efficient for sparse character sets like English letters.',
        'Incorrect. A BST would add unnecessary complexity and slower lookup.',
        'Incorrect. An array of size 256 would waste memory for English words.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the purpose of the is_end flag in a TrieNode?',
      options: [
        'To mark nodes with no children',
        'To indicate the node is at maximum depth',
        'To mark nodes that complete valid words',
        'To indicate the root node',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Leaf nodes are determined by having no children.',
        'Incorrect. Tries do not have a maximum depth.',
        'Correct! The is_end flag marks nodes that represent complete valid words in the trie.',
        'Incorrect. The root node is typically not marked as an end.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const trieOperationsData: LessonContent = {
  title: 'Understanding Basic Trie Operations',
  content: `<p>
Now that we understand the structure of a trie, let's explore how to perform fundamental operations. Each operation has its own unique challenges and edge cases that we need to consider carefully. We'll examine these operations through the lens of practical examples and common scenarios you might encounter in coding interviews.
</p>

<h3><u>Insertion Operation Deep Dive</u></h3>
<p>
When inserting a word into a trie, we're essentially creating a path from the root to a leaf node, where each node represents a character. Let's consider the word "code":
</p>

<li>We start at the root and look for 'c' in its children</li>
<li>If 'c' doesn't exist, we create a new node</li>
<li>We continue this process for 'o', 'd', and 'e'</li>
<li>Finally, we mark the last node ('e') as the end of a word</li>

<h3><u>Search Operation Details</u></h3>
<p>
Searching in a trie is like following a road map where each intersection (node) represents a character choice. There are two main types of searches we need to consider:
</p>

<h4><b>Exact Word Search</b></h4>
<li>Follow the path character by character</li>
<li>Verify the final node is marked as a word end</li>
<li>Handle case sensitivity appropriately</li>

<h4><b>Prefix Search</b></h4>
<li>Similar to exact search, but don't require word ending</li>
<li>Often used for autocomplete features</li>
<li>May need to gather all words with the prefix</li>

<h3><u>Deletion Operation Complexities</u></h3>
<p>
Deletion is the most complex operation because we need to consider several scenarios:
</p>

<h4><b>Case 1: Word is Unique Path</b></h4>
<li>Remove all nodes specific to this word</li>
<li>Stop at any node that's part of another word</li>

<h4><b>Case 2: Word Shares Prefix</b></h4>
<li>Only unmark the end node</li>
<li>Keep all nodes for other words</li>

<h4><b>Case 3: Word is Prefix of Another</b></h4>
<li>Only unmark the end node</li>
<li>Keep entire path intact</li>

<h3><u>Edge Cases to Consider</u></h3>
<table>
<tr><th>Operation</th><th>Edge Case</th><th>Handling Strategy</th></tr>
<tr><td>Insert</td><td>Empty string</td><td>Define policy (accept/reject)</td></tr>
<tr><td>Insert</td><td>Duplicate word</td><td>Update frequency counter</td></tr>
<tr><td>Search</td><td>Non-existent prefix</td><td>Early termination</td></tr>
<tr><td>Delete</td><td>Word is prefix of another</td><td>Only unmark end flag</td></tr>
</table>`,

  codeExample: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False
        self.frequency = 0  # Track word frequency

class Trie:
    def __init__(self):
        self.root = TrieNode()
    
    def insert(self, word: str) -> None:
        """
        Insert a word into the trie, handling edge cases:
        - Empty strings
        - Duplicate words
        - Case sensitivity
        """
        if not word:  # Handle empty string
            return
            
        node = self.root
        # Process each character, creating nodes as needed
        for char in word.lower():  # Handle case sensitivity
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
            
        # Mark word ending and update frequency
        node.is_end = True
        node.frequency += 1
    
    def search(self, word: str, prefix_only: bool = False) -> bool:
        """
        Search for a word or prefix in the trie.
        prefix_only=True enables prefix search mode.
        
        Returns:
        - For exact search: True if word exists
        - For prefix search: True if prefix exists
        """
        if not word:
            return False
            
        node = self.root
        # Follow the path for each character
        for char in word.lower():
            if char not in node.children:
                return False
            node = node.children[char]
            
        # Return based on search type
        return True if prefix_only else node.is_end
    
    def delete(self, word: str) -> bool:
        """
        Delete a word from the trie, handling these cases:
        1. Word doesn't exist
        2. Word is unique (remove all nodes)
        3. Word shares prefix with others
        4. Word is prefix of another word
        
        Returns: True if word was deleted, False if not found
        """
        def _delete_helper(node: TrieNode, word: str, depth: int) -> bool:
            # Base case: reached end of word
            if depth == len(word):
                # Word doesn't exist in trie
                if not node.is_end:
                    return False
                    
                # Unmark end and decrease frequency
                node.is_end = False
                node.frequency -= 1
                return len(node.children) == 0  # True if node can be deleted
            
            char = word[depth]
            if char not in node.children:
                return False
                
            # Recursively delete child nodes
            should_delete_child = _delete_helper(node.children[char], word, depth + 1)
            
            # If child should be deleted and has no other children
            if should_delete_child:
                del node.children[char]
                # Current node can be deleted if it's not end of another word
                # and has no other children
                return not node.is_end and len(node.children) == 0
                
            return False
            
        return _delete_helper(self.root, word.lower(), 0)
    
    def count_words_with_prefix(self, prefix: str) -> int:
        """
        Count how many words exist with the given prefix.
        Useful for analyzing trie content.
        """
        node = self.root
        # Navigate to prefix node
        for char in prefix.lower():
            if char not in node.children:
                return 0
            node = node.children[char]
            
        # Count all word endings under this node
        def _count_words(current_node: TrieNode) -> int:
            count = current_node.frequency  # Count this node if it's a word
            for child in current_node.children.values():
                count += _count_words(child)
            return count
            
        return _count_words(node)`,

  exercises: [
    {
      prompt:
        'Implement a method that returns all words in the trie that match a given pattern, where "?" can match any single character. For example, pattern "c?t" should match "cat", "cot", etc.',
      initialCode: `def pattern_search(self, pattern: str) -> List[str]:
    # Write your solution here
    pass`,
      solution: `def pattern_search(self, pattern: str) -> List[str]:
    matches = []
    
    def _search_helper(node: TrieNode, pattern: str, current_word: str):
        if not pattern:  # Reached end of pattern
            if node.is_end:
                matches.append(current_word)
            return
            
        if pattern[0] == "?":  # Match any character
            for char, child in node.children.items():
                _search_helper(child, pattern[1:], current_word + char)
        else:  # Match specific character
            if pattern[0] in node.children:
                _search_helper(node.children[pattern[0]], 
                             pattern[1:], 
                             current_word + pattern[0])
    
    _search_helper(self.root, pattern.lower(), "")
    return matches`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt:
        'Implement a method to find the longest common prefix among all words in the trie.',
      initialCode: `def longest_common_prefix(self) -> str:
    # Write your solution here
    pass`,
      solution: `def longest_common_prefix(self) -> str:
    if not self.root.children:
        return ""
        
    prefix = []
    node = self.root
    
    # Follow path while there's only one child and not a word ending
    while len(node.children) == 1 and not node.is_end:
        char = next(iter(node.children))
        prefix.append(char)
        node = node.children[char]
    
    return "".join(prefix)`,
      difficulty: Difficulty.Intermediate,
    },
  ],

  quizzes: [
    {
      question:
        'When deleting a word from a trie, which nodes should be removed if the word shares a prefix with another word?',
      options: [
        'All nodes of the word',
        'Only the last node',
        'No nodes, just unmark the end flag',
        'Remove nodes until reaching a shared prefix',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. This would break other words in the trie.',
        'Incorrect. The last node might be needed for other words.',
        'Correct! When words share prefixes, we only unmark the end flag to preserve the shared path.',
        'Incorrect. We need to keep all nodes for the shared prefix.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'What is the key difference between exact word search and prefix search in a trie?',
      options: [
        'Prefix search is faster',
        'Exact search requires more memory',
        "Prefix search doesn't check the is_end flag",
        'Exact search uses different nodes',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Both operations have the same time complexity.',
        'Incorrect. Both operations use the same amount of memory.',
        'Correct! Prefix search only verifies the path exists, while exact search must also confirm the word ends there.',
        'Incorrect. Both operations use the same trie structure.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const trieTraversalData: LessonContent = {
  title: 'Mastering Trie Traversal Techniques',
  content: `<p>
Traversing a trie efficiently is crucial for many practical applications, from autocomplete systems to spell checkers. We'll explore both Depth-First Search (DFS) and Breadth-First Search (BFS) approaches, understanding when to use each and how they can solve different types of problems.
</p>

<h3><u>Depth-First Search (DFS) in Tries</u></h3>
<p>
DFS traversal in a trie is particularly useful when you need to:
</p>
<li>Collect all words in lexicographic order</li>
<li>Find the longest/shortest words</li>
<li>Validate word patterns</li>
<li>Perform memory-efficient traversal</li>

<h3><u>Breadth-First Search (BFS) in Tries</u></h3>
<p>
BFS traversal becomes valuable when you want to:
</p>
<li>Find words with minimal edit distance</li>
<li>Implement level-wise operations</li>
<li>Generate word suggestions</li>
<li>Process words by length</li>

<h3><u>Choosing the Right Traversal</u></h3>
<table>
<tr><th>Use Case</th><th>Preferred Method</th><th>Reason</th></tr>
<tr><td>Dictionary sorting</td><td>DFS</td><td>Natural lexicographic order</td></tr>
<tr><td>Autocomplete</td><td>BFS</td><td>Better for generating suggestions</td></tr>
<tr><td>Word validation</td><td>DFS</td><td>Memory efficient</td></tr>
<tr><td>Edit distance</td><td>BFS</td><td>Level-wise comparison</td></tr>
</table>

<h3><u>Performance Considerations</u></h3>
<p>
When implementing traversal algorithms, consider these factors:
</p>
<h4><b>Space Complexity:</b></h4>
<li>DFS: O(h) where h is the height of the trie</li>
<li>BFS: O(w) where w is the maximum width of the trie</li>

<h4><b>Time Complexity:</b></h4>
<li>Both DFS and BFS: O(n) where n is the number of nodes</li>
<li>Additional processing may affect total complexity</li>`,

  codeExample: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False
        self.word = ""  # Store complete word for convenience

class Trie:
    def __init__(self):
        self.root = TrieNode()
    
    def dfs_traverse(self, node=None, prefix="", results=None):
        """
        Depth-First Search traversal implementation.
        Collects all words in lexicographic order.
        
        Args:
            node: Current TrieNode (default: root)
            prefix: Current word prefix
            results: List to store complete words
        """
        if node is None:
            node = self.root
        if results is None:
            results = []
            
        # If we've found a complete word, add it to results
        if node.is_end:
            results.append(prefix)
            
        # Recursively visit all children in sorted order
        for char in sorted(node.children.keys()):
            self.dfs_traverse(node.children[char], 
                            prefix + char, 
                            results)
                            
        return results
    
    def bfs_traverse(self) -> List[List[str]]:
        """
        Breadth-First Search traversal implementation.
        Returns words grouped by length.
        """
        if not self.root:
            return []
            
        results = []
        queue = deque([(self.root, "")])
        level_nodes = 1  # Nodes at current level
        
        while queue:
            level_words = []
            next_level_nodes = 0
            
            # Process all nodes at current level
            for _ in range(level_nodes):
                node, word = queue.popleft()
                
                if node.is_end:
                    level_words.append(word)
                    
                # Add children to queue
                for char, child in node.children.items():
                    queue.append((child, word + char))
                    next_level_nodes += 1
                    
            if level_words:
                results.append(level_words)
            level_nodes = next_level_nodes
            
        return results
    
def find_words_by_pattern(self, pattern: str) -> List[str]:
        """
        Use DFS to find all words matching a pattern.
        Pattern can include:
        - '?' matches any single character
        - '*' matches zero or more characters
        """
        matches = []
        
        def dfs_pattern_match(node: TrieNode, pattern: str, current_word: str):
            # Base case: reached end of pattern
            if not pattern:
                if node.is_end:
                    matches.append(current_word)
                return
            
            # Handle single character wildcard
            if pattern[0] == '?':
                for char, child in node.children.items():
                    dfs_pattern_match(child, pattern[1:], current_word + char)
                    
            # Handle multi-character wildcard
            elif pattern[0] == '*':
                # Match zero characters (skip *)
                dfs_pattern_match(node, pattern[1:], current_word)
                # Match one or more characters
                for char, child in node.children.items():
                    dfs_pattern_match(child, pattern, current_word + char)
                    
            # Match exact character
            else:
                if pattern[0] in node.children:
                    dfs_pattern_match(node.children[pattern[0]], 
                                   pattern[1:], 
                                   current_word + pattern[0])
        
        dfs_pattern_match(self.root, pattern.lower(), "")
        return sorted(matches)  # Return in lexicographic order

    def find_words_by_level(self, max_length: int = None) -> List[List[str]]:
        """
        Use BFS to find all words grouped by length.
        Optionally limit to words up to max_length.
        """
        results = []
        level = 0
        queue = deque([(self.root, "")])
        
        while queue and (max_length is None or level <= max_length):
            level_size = len(queue)
            level_words = []
            
            # Process all nodes at current level
            for _ in range(level_size):
                node, word = queue.popleft()
                
                if node.is_end:
                    level_words.append(word)
                
                # Add children to queue
                for char, child in sorted(node.children.items()):
                    queue.append((child, word + char))
            
            if level_words:
                results.append(level_words)
            level += 1
            
        return results

    def suggest_similar_words(self, word: str, max_distance: int = 1) -> List[str]:
        """
        Use BFS to find words with edit distance <= max_distance.
        Edit operations: insert, delete, replace
        """
        suggestions = []
        visited = set()
        queue = deque([(self.root, "", 0)])  # (node, current_word, edits)
        
        while queue:
            node, current, edits = queue.popleft()
            
            # Found a valid word within edit distance
            if node.is_end and edits <= max_distance and current != word:
                suggestions.append(current)
            
            # Try all possible edits if under max_distance
            if edits < max_distance:
                word_pos = len(current)
                
                # Case 1: Character replacement
                if word_pos < len(word):
                    actual = word[word_pos]
                    for char, child in node.children.items():
                        if char != actual:
                            new_word = current + char
                            if new_word not in visited:
                                visited.add(new_word)
                                queue.append((child, new_word, edits + 1))
                
                # Case 2: Character insertion
                for char, child in node.children.items():
                    if word_pos >= len(word) or char != word[word_pos]:
                        new_word = current + char
                        if new_word not in visited:
                            visited.add(new_word)
                            queue.append((child, new_word, edits + 1))
            
            # Continue with exact matches
            if word_pos < len(word) and word[word_pos] in node.children:
                new_word = current + word[word_pos]
                queue.append((node.children[word[word_pos]], new_word, edits))
        
        return sorted(suggestions)`,

  exercises: [
    {
      prompt:
        'Implement a method that uses DFS to find the longest word chain in the trie where each word differs by one character from the previous word. For example: "cat" -> "hat" -> "hot" -> "dot".',
      initialCode: `def find_longest_word_chain(self, start_word: str) -> List[str]:
    # Write your solution here
    pass`,
      solution: `def find_longest_word_chain(self, start_word: str) -> List[str]:
    def diff_by_one(word1: str, word2: str) -> bool:
        if len(word1) != len(word2):
            return False
        differences = 0
        for c1, c2 in zip(word1, word2):
            if c1 != c2:
                differences += 1
                if differences > 1:
                    return False
        return differences == 1
    
    def dfs_chain(current_word: str, chain: List[str], used: Set[str]) -> List[str]:
        longest_chain = chain
        
        # Try all words in trie
        for word in self.dfs_traverse():
            if word not in used and diff_by_one(current_word, word):
                new_chain = dfs_chain(word, chain + [word], used | {word})
                if len(new_chain) > len(longest_chain):
                    longest_chain = new_chain
        
        return longest_chain
    
    # Start chain from given word
    if not self.search(start_word):
        return []
    return dfs_chain(start_word, [start_word], {start_word})`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt:
        'Implement a method using BFS to find all pairs of words that are anagrams of each other in the trie.',
      initialCode: `def find_anagram_pairs(self) -> List[Tuple[str, str]]:
    # Write your solution here
    pass`,
      solution: `def find_anagram_pairs(self) -> List[Tuple[str, str]]:
    # Helper to sort characters in a word
    def get_signature(word: str) -> str:
        return ''.join(sorted(word))
    
    # Get all words from trie
    words = self.dfs_traverse()
    
    # Group words by their sorted character signature
    anagram_groups = {}
    for word in words:
        sig = get_signature(word)
        if sig in anagram_groups:
            anagram_groups[sig].append(word)
        else:
            anagram_groups[sig] = [word]
    
    # Generate pairs from groups with multiple words
    pairs = []
    for group in anagram_groups.values():
        if len(group) > 1:
            for i in range(len(group)):
                for j in range(i + 1, len(group)):
                    pairs.append((group[i], group[j]))
    
    return sorted(pairs)`,
      difficulty: Difficulty.Intermediate,
    },
  ],

  quizzes: [
    {
      question:
        'Why might you choose BFS over DFS when implementing an autocomplete feature?',
      options: [
        'BFS is always faster than DFS',
        'BFS finds shorter words first, which are often better suggestions',
        'BFS uses less memory than DFS',
        'BFS is easier to implement than DFS',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Both traversal methods have the same time complexity.',
        'Correct! BFS processes words level by level, finding shorter and often more relevant suggestions first.',
        'Incorrect. BFS typically uses more memory due to the queue of nodes.',
        'Incorrect. Both methods have similar implementation complexity.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'What is the space complexity of finding all words in a trie matching a pattern with wildcards using DFS?',
      options: [
        'O(1) - constant space',
        'O(h) where h is the trie height',
        'O(n) where n is the number of nodes',
        'O(m) where m is the number of matching words',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. We need space for recursion stack.',
        'Correct! The space complexity is determined by the maximum recursion depth, which is the trie height.',
        "Incorrect. We don't need space proportional to all nodes.",
        "Incorrect. Matching words are part of the output, not the algorithm's working space.",
      ],
      difficulty: Difficulty.Advanced,
    },
  ],
};

const prefixMatchingData: LessonContent = {
  title: 'Advanced Prefix Matching and Analysis',
  content: `<p>
Prefix matching is one of the most powerful applications of tries, enabling efficient string matching operations that would be significantly slower with other data structures. Let's explore how to leverage tries for sophisticated prefix operations that you might encounter in real-world applications.
</p>

<h3><u>Understanding Prefix Properties</u></h3>
<p>
When we talk about prefixes in tries, we're referring to any sequence of characters that starts at the root. For example, in the word "programming", the prefixes include "p", "pr", "pro", and so on. This hierarchical structure makes tries particularly efficient for prefix-based operations.
</p>

<h4><b>Key Prefix Properties:</b></h4>
<li>Every node in a trie represents a prefix of one or more stored strings</li>
<li>All descendants of a node share that node's prefix</li>
<li>The path from root to any node spells out a prefix</li>

<h3><u>Common Prefix Analysis</u></h3>
<p>
Understanding common prefixes helps in various applications:
</p>

<h4><b>Use Cases:</b></h4>
<li>Finding the longest common prefix among all words</li>
<li>Identifying word groups with shared prefixes</li>
<li>Analyzing prefix frequency distributions</li>
<li>Detecting prefix patterns in datasets</li>

<h3><u>Statistical Analysis</u></h3>
<table>
<tr><th>Prefix Operation</th><th>Time Complexity</th><th>Key Insight</th></tr>
<tr><td>Count words with prefix</td><td>O(p + n)</td><td>p = prefix length, n = subtree size</td></tr>
<tr><td>Find longest common prefix</td><td>O(m)</td><td>m = shortest string length</td></tr>
<tr><td>Group by common prefix</td><td>O(N)</td><td>N = total characters in trie</td></tr>
</table>

<h3><u>Memory-Efficient Implementations</u></h3>
<p>
For large-scale prefix matching systems, consider these optimizations:
</p>
<li>Compress single-child paths</li>
<li>Use bit-mapped tries for space efficiency</li>
<li>Implement prefix caching for frequent queries</li>`,

  codeExample: `class PrefixMatchingTrie:
    def __init__(self):
        self.root = {}
        self.word_count = 0
        self.prefix_counts = {}  # Cache for prefix frequencies
    
    def add_word(self, word: str, weight: int = 1) -> None:
        """
        Add a word to the trie with an optional weight.
        Updates prefix counts for all prefixes of the word.
        
        Args:
            word: String to add
            weight: Importance weight of the word (default: 1)
        """
        if not word:
            return
            
        # Update prefix counts for all prefixes
        current = ""
        for char in word:
            current += char
            self.prefix_counts[current] = self.prefix_counts.get(current, 0) + weight
        
        # Add word to trie
        node = self.root
        for char in word:
            node = node.setdefault(char, {})
        node['#'] = weight  # Mark word ending with weight
        self.word_count += 1
    
    def find_all_with_prefix(self, prefix: str, 
                            max_results: int = None) -> List[Tuple[str, int]]:
        """
        Find all words that start with given prefix, sorted by weight.
        Returns list of (word, weight) tuples.
        
        Args:
            prefix: String to match at start
            max_results: Optional limit on number of results
            
        Returns:
            List of (word, weight) tuples sorted by weight
        """
        # Find the node corresponding to the prefix
        node = self.root
        for char in prefix:
            if char not in node:
                return []
            node = node[char]
        
        results = []
        
        def collect_words(current_node, current_word):
            # Found a word ending
            if '#' in current_node:
                results.append((current_word, current_node['#']))
            
            # Recursively collect words from all children
            for char, child in current_node.items():
                if char != '#':  # Skip word markers
                    collect_words(child, current_word + char)
        
        # Collect all words under this prefix
        collect_words(node, prefix)
        
        # Sort by weight and optionally limit results
        results.sort(key=lambda x: (-x[1], x[0]))  # Sort by weight desc, then word
        if max_results:
            results = results[:max_results]
            
        return results
    
    def get_prefix_frequency(self, prefix: str) -> int:
        """
        Get the frequency of a prefix (how many words contain it).
        Uses cached counts for efficiency.
        
        Args:
            prefix: Prefix to look up
            
        Returns:
            Number of words containing the prefix
        """
        return self.prefix_counts.get(prefix, 0)
    
    def find_popular_prefixes(self, min_frequency: int) -> List[Tuple[str, int]]:
        """
        Find all prefixes that appear at least min_frequency times.
        
        Args:
            min_frequency: Minimum number of occurrences
            
        Returns:
            List of (prefix, frequency) tuples sorted by frequency
        """
        popular = [(p, f) for p, f in self.prefix_counts.items() 
                  if f >= min_frequency]
        return sorted(popular, key=lambda x: (-x[1], x[0]))
    
    def find_longest_common_prefix(self) -> str:
        """
        Find the longest prefix common to all words in the trie.
        
        Returns:
            String representing longest common prefix
        """
        if not self.root:
            return ""
            
        current = self.root
        prefix = []
        
        # Follow path while there's only one child and not at word end
        while len(current) == 1 and '#' not in current:
            char = next(iter(current.keys()))
            prefix.append(char)
            current = current[char]
            
        return "".join(prefix)
    
    def group_by_prefix_length(self, length: int) -> Dict[str, List[str]]:
        """
        Group words by their prefixes of given length.
        
        Args:
            length: Length of prefix to group by
            
        Returns:
            Dictionary mapping prefixes to lists of words
        """
        groups = {}
        
        def collect_words(node, current_word):
            if '#' in node:
                prefix = current_word[:length] if len(current_word) >= length else current_word
                if prefix not in groups:
                    groups[prefix] = []
                groups[prefix].append(current_word)
            
            for char, child in node.items():
                if char != '#':
                    collect_words(child, current_word + char)
        
        collect_words(self.root, "")
        return groups`,

  exercises: [
    {
      prompt:
        'Implement a method that finds pairs of words where one is a prefix of another, sorted by the length of the prefix.',
      initialCode: `def find_prefix_pairs(self) -> List[Tuple[str, str]]:
    # Write your solution here
    pass`,
      solution: `def find_prefix_pairs(self) -> List[Tuple[str, str]]:
    pairs = []
    
    def collect_pairs(node, prefix):
        # If this is a word, look for longer words with this prefix
        if '#' in node:
            suffix_words = []
            
            def find_completions(current, word):
                if '#' in current:
                    suffix_words.append(word)
                for char, child in current.items():
                    if char != '#':
                        find_completions(child, word + char)
            
            # Find all words under this node
            for char, child in node.items():
                if char != '#':
                    find_completions(child, prefix + char)
            
            # Add pairs with current prefix word
            for word in suffix_words:
                pairs.append((prefix, word))
        
        # Continue search in all children
        for char, child in node.items():
            if char != '#':
                collect_pairs(child, prefix + char)
    
    collect_pairs(self.root, "")
    return sorted(pairs, key=lambda x: len(x[0]))`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt:
        'Implement a method that finds the shortest unique prefix for each word in the trie.',
      initialCode: `def find_unique_prefixes(self) -> Dict[str, str]:
    # Write your solution here
    pass`,
      solution: `def find_unique_prefixes(self) -> Dict[str, str]:
    result = {}
    
    def find_unique_prefix(node, prefix, word):
        # If this node has only one word in its subtree,
        # we've found a unique prefix
        word_count = 0
        complete_words = set()
        
        def count_words(current, current_word):
            nonlocal word_count
            if '#' in current:
                word_count += 1
                complete_words.add(current_word)
            for char, child in current.items():
                if char != '#':
                    count_words(child, current_word + char)
        
        count_words(node, prefix)
        
        # If we found exactly one word, this prefix is unique
        if word_count == 1:
            result[word] = prefix
            return
        
        # Otherwise, continue searching in children
        for char, child in node.items():
            if char != '#':
                find_unique_prefix(child, prefix + char, word)
    
    # Find unique prefixes for all words
    def collect_words(node, prefix):
        if '#' in node:
            find_unique_prefix(self.root, "", prefix)
        for char, child in node.items():
            if char != '#':
                collect_words(child, prefix + char)
    
    collect_words(self.root, "")
    return result`,
      difficulty: Difficulty.Advanced,
    },
  ],

  quizzes: [
    {
      question:
        'What is the most efficient way to count how many words share a given prefix in a trie?',
      options: [
        'Traverse the entire trie counting matches',
        'Use DFS from the prefix node',
        'Maintain a prefix count cache',
        'Use binary search on stored words',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. This is unnecessarily inefficient.',
        'Incorrect. This is better than full traversal but still not optimal.',
        'Correct! Maintaining a cache of prefix counts provides O(1) lookup time.',
        "Incorrect. Binary search doesn't efficiently handle prefixes.",
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'When finding the longest common prefix among all words, why might we stop when we encounter a node with multiple children?',
      options: [
        'To save memory',
        'Because it indicates a branching point where words differ',
        'To improve performance',
        'Because the trie is corrupted',
      ],
      correctAnswer: 1,
      explanations: [
        "Incorrect. Memory usage isn't relevant to this decision.",
        'Correct! Multiple children mean words diverge at this point, ending the common prefix.',
        "Incorrect. While it may be faster, this isn't the main reason.",
        'Incorrect. Multiple children are normal in a trie.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const autocompleteSystemData: LessonContent = {
  title: 'Building an Intelligent Autocomplete System',
  content: `<p>
An autocomplete system is one of the most practical applications of tries, used in search engines, text editors, and mobile keyboards. We'll build a comprehensive autocomplete system that not only suggests completions but also ranks them intelligently based on multiple factors.
</p>

<h3><u>Key Features of Modern Autocomplete</u></h3>
<p>
A sophisticated autocomplete system considers multiple factors:
</p>
<li>Historical usage frequency</li>
<li>Recent queries (temporal relevance)</li>
<li>Edit distance for typo tolerance</li>
<li>Context awareness</li>
<li>User personalization</li>

<h3><u>Ranking Algorithm Components</u></h3>
<p>
The ranking system typically combines several scores:
</p>

<h4><b>Static Scores:</b></h4>
<li>Historical frequency</li>
<li>Word length (prefer shorter)</li>
<li>Dictionary importance</li>

<h4><b>Dynamic Scores:</b></h4>
<li>Temporal relevance</li>
<li>User preferences</li>
<li>Context matching</li>

<h3><u>Performance Optimization</u></h3>
<table>
<tr><th>Component</th><th>Optimization Technique</th><th>Impact</th></tr>
<tr><td>Query Speed</td><td>Prefix caching</td><td>Faster repeated queries</td></tr>
<tr><td>Memory Usage</td><td>Pruning rare terms</td><td>Reduced storage needs</td></tr>
<tr><td>Result Quality</td><td>Score normalization</td><td>Better rankings</td></tr>
</table>

<h3><u>Error Handling</u></h3>
<p>
Robust autocomplete systems must handle:
</p>
<li>Typos and misspellings</li>
<li>Case sensitivity</li>
<li>Special characters</li>
<li>Empty or invalid queries</li>`,

  codeExample: `class AutocompleteSystem:
    def __init__(self):
        self.trie = {}
        self.weights = {}  # Historical frequency
        self.recent_queries = []  # Track recent searches
        self.cache = {}  # Cache for frequent prefix queries
        self.max_suggestions = 5
        self.cache_size = 100
        self.recent_bonus = 0.5  # Bonus score for recent queries
        
    def add_word(self, word: str, weight: float = 1.0) -> None:
        """
        Add a word with its weight to the autocomplete system.
        Updates both trie structure and weights dictionary.
        
        Args:
            word: String to add
            weight: Importance weight (higher = more important)
        """
        # Update trie structure
        node = self.trie
        for char in word.lower():
            node = node.setdefault(char, {})
        node['#'] = True
        
        # Update weight
        self.weights[word] = weight
        
        # Clear relevant cache entries
        prefix = ""
        for char in word:
            prefix += char
            self.cache.pop(prefix, None)
    
    def get_suggestions(self, prefix: str, 
                       max_distance: int = 1) -> List[Tuple[str, float]]:
        """
        Get autocomplete suggestions for a prefix.
        Considers exact matches and close matches within edit distance.
        
        Args:
            prefix: String to auto-complete
            max_distance: Maximum edit distance for fuzzy matching
            
        Returns:
            List of (word, score) tuples, sorted by score
        """
        prefix = prefix.lower()
        
        # Check cache first
        if prefix in self.cache:
            return self.cache[prefix]
        
        matches = []
        
        # Helper function to calculate word score
        def calculate_score(word: str, exact_match: bool = True) -> float:
            base_score = self.weights.get(word, 0)
            
            # Apply recency bonus
            if word in self.recent_queries:
                recency_index = self.recent_queries.index(word)
                base_score += self.recent_bonus * (1.0 / (recency_index + 1))
            
            # Penalize longer words slightly
            length_penalty = 0.98 ** len(word)
            
            # Penalize non-exact matches
            match_score = 1.0 if exact_match else 0.8
            
            return base_score * length_penalty * match_score
        
        # Find exact prefix matches
        def find_completions(node: Dict, current: str):
            if '#' in node and current != prefix:  # Found a word
                matches.append((current, calculate_score(current)))
            
            for char, child in node.items():
                if char != '#':
                    find_completions(child, current + char)
        
        # Navigate to prefix node
        node = self.trie
        for char in prefix:
            if char not in node:
                node = None
                break
            node = node[char]
        
        # Find all completions from prefix node
        if node:
            find_completions(node, prefix)
        
        # Find fuzzy matches if needed
        if len(matches) < self.max_suggestions and max_distance > 0:
            self._add_fuzzy_matches(prefix, matches, max_distance)
        
        # Sort by score and limit results
        matches.sort(key=lambda x: (-x[1], x[0]))  # Sort by score desc, then word
        matches = matches[:self.max_suggestions]
        
        # Cache results if cache not full
        if len(self.cache) < self.cache_size:
            self.cache[prefix] = matches
        
        return matches
    
    def _add_fuzzy_matches(self, prefix: str, 
                          matches: List[Tuple[str, float]], 
                          max_distance: int) -> None:
        """
        Add fuzzy matches within edit distance to matches list.
        Uses dynamic programming for edit distance calculation.
        """
        def edit_distance(s1: str, s2: str) -> int:
            if len(s1) > len(s2):
                s1, s2 = s2, s1
            
            distances = range(len(s1) + 1)
            for i2, c2 in enumerate(s2):
                new_distances = [i2 + 1]
                for i1, c1 in enumerate(s1):
                    if c1 == c2:
                        new_distances.append(distances[i1])
                    else:
                        new_distances.append(1 + min((distances[i1],
                                                    distances[i1 + 1],
                                                    new_distances[-1])))
                distances = new_distances
            return distances[-1]
        
        # Collect all words from trie
        all_words = []
        def collect_words(node: Dict, current: str):
            if '#' in node:
                all_words.append(current)
            for char, child in node.items():
                if char != '#':
                    collect_words(child, current + char)
        
        collect_words(self.trie, "")
        
        # Find words within edit distance
        prefix_len = len(prefix)
        for word in all_words:
            if word not in [m[0] for m in matches]:  # Skip if already matched
                # Check distance of prefixes
                word_prefix = word[:prefix_len]
                if edit_distance(prefix, word_prefix) <= max_distance:
                    matches.append((word, calculate_score(word, exact_match=False)))
    
    def record_selection(self, word: str) -> None:
        """
        Record that a word was selected from suggestions.
        Updates recent queries list and increases word weight.
        
        Args:
            word: Selected word
        """
        # Update recent queries
        if word in self.recent_queries:
            self.recent_queries.remove(word)
        self.recent_queries.insert(0, word)
        
        # Keep recent queries list bounded
        if len(self.recent_queries) > self.max_suggestions * 2:
            self.recent_queries.pop()
        
        # Increase word weight
        self.weights[word] = self.weights.get(word, 1.0) * 1.1
        
        # Clear relevant cache entries
        prefix = ""
        for char in word:
            prefix += char
            self.cache.pop(prefix, None)`,

  exercises: [
    {
      prompt:
        'Implement a method that suggests corrections for misspelled words by finding the closest matches in the autocomplete system.',
      initialCode: `def suggest_corrections(self, word: str, max_suggestions: int = 3) -> List[Tuple[str, float]]:
    # Write your solution here
    pass`,
      solution: `def suggest_corrections(self, word: str, max_suggestions: int = 3) -> List[Tuple[str, float]]:
    """
    Find the closest matching words for a potentially misspelled word.
    
    Args:
        word: Potentially misspelled word
        max_suggestions: Maximum number of suggestions to return
        
    Returns:
        List of (correction, confidence) tuples
    """
    corrections = []
    word = word.lower()
    
    def levenshtein_distance(s1: str, s2: str) -> int:
        if len(s1) > len(s2):
            s1, s2 = s2, s1
        
        distances = range(len(s1) + 1)
        for i2, c2 in enumerate(s2):
            new_distances = [i2 + 1]
            for i1, c1 in enumerate(s1):
                if c1 == c2:
                    new_distances.append(distances[i1])
                else:
                    new_distances.append(1 + min((distances[i1],
                                                distances[i1 + 1],
                                                new_distances[-1])))
            distances = new_distances
        return distances[-1]
    
    # Collect all words
    all_words = []
    def collect_words(node, current):
        if '#' in node:
            all_words.append(current)
        for char, child in node.items():
            if char != '#':
                collect_words(child, current + char)
    
    collect_words(self.trie, "")
    
    # Find closest matches
    for candidate in all_words:
        distance = levenshtein_distance(word, candidate)
        if distance <= min(3, len(word) // 2):
            # Calculate confidence score
            confidence = 1.0 / (distance + 1)  # Higher for closer matches
            confidence *= self.weights.get(candidate, 1.0)  # Consider word importance
            corrections.append((candidate, confidence))
    
    # Sort by confidence and limit results
    corrections.sort(key=lambda x: (-x[1], x[0]))
    return corrections[:max_suggestions]`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt:
        'Implement a method that suggests word completions based on both the current word and the previous word (context-aware autocomplete).',
      initialCode: `def context_aware_suggestions(self, current_prefix: str, previous_word: str = None) -> List[Tuple[str, float]]:
    # Write your solution here
    pass`,
      solution: `def context_aware_suggestions(self, current_prefix: str, previous_word: str = None) -> List[Tuple[str, float]]:
    """
    Get autocomplete suggestions considering previous word context.
    
    Args:
        current_prefix: Current word being typed
        previous_word: Previous word in the sequence
        
    Returns:
        List of (suggestion, score) tuples
    """
    suggestions = self.get_suggestions(current_prefix)
    
    if not previous_word:
        return suggestions
    
    # Load or calculate bigram scores
    if not hasattr(self, 'bigram_scores'):
        self.bigram_scores = {}
    
    bigram_key = (previous_word.lower(), current_prefix.lower())
    
    # Adjust scores based on previous word
    adjusted_suggestions = []
    for word, base_score in suggestions:
        # Calculate contextual score
        context_score = 1.0
        if bigram_key in self.bigram_scores:
            context_score += self.bigram_scores[bigram_key]
        
        # Combine scores with context having 30% weight
        final_score = (0.7 * base_score) + (0.3 * context_score)
        adjusted_suggestions.append((word, final_score))
    
    # Update bigram scores
    def update_bigram(word1: str, word2: str):
        key = (word1.lower(), word2.lower()[:len(current_prefix)])
        self.bigram_scores[key] = self.bigram_scores.get(key, 0) + 0.1
    
    # Sort by adjusted scores
    adjusted_suggestions.sort(key=lambda x: (-x[1], x[0]))
    return adjusted_suggestions[:self.max_suggestions]`,
      difficulty: Difficulty.Advanced,
    },
  ],

  quizzes: [
    {
      question:
        'Why might we want to apply a length penalty to autocomplete suggestions?',
      options: [
        'To save memory',
        'Because shorter words are typed faster',
        'To improve trie traversal speed',
        'Because longer words are less common',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Length penalty affects ranking, not storage.',
        'Correct! Shorter suggestions are generally more useful as they save more typing effort.',
        'Incorrect. Trie traversal is independent of suggestion ranking.',
        'Incorrect. Word frequency is handled separately from length.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the main benefit of caching autocomplete results?',
      options: [
        'Reduced memory usage',
        'More accurate suggestions',
        'Faster response time for common prefixes',
        'Better ranking algorithms',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Caching actually uses more memory.',
        "Incorrect. Caching doesn't affect suggestion accuracy.",
        'Correct! Caching provides instant results for frequently requested prefixes.',
        'Incorrect. Ranking is independent of caching.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const patternSearchData: LessonContent = {
  title: 'Advanced Pattern Matching in Tries',
  content: `<p>
Pattern matching in tries allows us to find words matching complex patterns containing wildcards and regular expressions. This powerful feature enables flexible text search and filtering capabilities essential for many applications.
</p>

<h3><u>Pattern Types and Support</u></h3>

<h4><b>Wildcard Patterns:</b></h4>
<li>'?' - Matches any single character</li>
<li>'*' - Matches zero or more characters</li>
<li>'[abc]' - Matches any character in the set</li>
<li>'[a-z]' - Matches any character in the range</li>

<h4><b>Common Use Cases:</b></h4>
<li>File pattern matching (e.g., "*.txt")</li>
<li>Dictionary word games</li>
<li>Search with unknown characters</li>
<li>DNA sequence matching</li>

<h3><u>Implementation Strategies</u></h3>
<p>
Different pattern types require different matching strategies:
</p>

<h4><b>Single Character Wildcards:</b></h4>
<li>Branch exploration at wildcard position</li>
<li>Match against character sets</li>
<li>Backtracking when needed</li>

<h4><b>Multi-Character Wildcards:</b></h4>
<li>Recursive matching</li>
<li>Dynamic programming optimization</li>
<li>Early termination strategies</li>

<h3><u>Performance Considerations</u></h3>
<table>
<tr><th>Pattern Type</th><th>Time Complexity</th><th>Space Complexity</th></tr>
<tr><td>Simple wildcards</td><td>O(N*M)</td><td>O(H)</td></tr>
<tr><td>Multiple wildcards</td><td>O(N*M*K)</td><td>O(H*K)</td></tr>
<tr><td>Regular expressions</td><td>O(N*M*P)</td><td>O(H*P)</td></tr>
</table>
<p>Where:</p>
<li>N = number of nodes in trie</li>
<li>M = pattern length</li>
<li>K = number of wildcards</li>
<li>H = height of trie</li>
<li>P = pattern complexity</li>`,

  codeExample: `class PatternMatchingTrie:
    def __init__(self):
        self.root = {}
        self.word_end = '#'
    
    def add_word(self, word: str) -> None:
        """Add a word to the trie."""
        node = self.root
        for char in word:
            node = node.setdefault(char, {})
        node[self.word_end] = True
    
    def search_pattern(self, pattern: str) -> List[str]:
        """
        Search for words matching pattern with wildcards:
        ? - matches any single character
        * - matches zero or more characters
        [abc] - matches any character in set
        [a-z] - matches any character in range
        
        Returns list of matching words.
        """
        matches = []
        
        def is_word_end(node: dict) -> bool:
            return self.word_end in node
        
        def parse_char_set(pattern: str, start: int) -> Tuple[set, int]:
            """Parse a character set [...] pattern."""
            if start >= len(pattern) or pattern[start] != '[':
                return None, start
                
            char_set = set()
            i = start + 1
            while i < len(pattern) and pattern[i] != ']':
                if i + 2 < len(pattern) and pattern[i + 1] == '-':
                    # Handle character range [a-z]
                    start_char, end_char = pattern[i], pattern[i + 2]
                    char_set.update(chr(c) for c in range(ord(start_char), ord(end_char) + 1))
                    i += 3
                else:
                    # Handle single character
                    char_set.add(pattern[i])
                    i += 1
            return char_set, i + 1 if i < len(pattern) else i
        
        def match_pattern(node: dict, pattern: str, word: str, pos: int) -> None:
            """Recursively match pattern against trie."""
            # Base case: reached end of pattern
            if pos >= len(pattern):
                if is_word_end(node):
                    matches.append(word)
                return
            
            # Handle different pattern characters
            if pattern[pos] == '?':
                # Match any single character
                for char, child in node.items():
                    if char != self.word_end:
                        match_pattern(child, pattern, word + char, pos + 1)
                        
            elif pattern[pos] == '*':
                # Match zero or more characters
                # Case 1: Zero characters (skip *)
                match_pattern(node, pattern, word, pos + 1)
                # Case 2: Match one or more characters
                for char, child in node.items():
                    if char != self.word_end:
                        match_pattern(child, pattern, word + char, pos)
                        
            elif pattern[pos] == '[':
                # Handle character set
                char_set, next_pos = parse_char_set(pattern, pos)
                if char_set:
                    for char, child in node.items():
                        if char != self.word_end and char in char_set:
                            match_pattern(child, pattern, word + char, next_pos)
                            
            else:
                # Match exact character
                if pattern[pos] in node:
                    match_pattern(node[pattern[pos]], pattern, 
                                word + pattern[pos], pos + 1)
        
        match_pattern(self.root, pattern, "", 0)
        return sorted(matches)
    
    def regex_search(self, regex: str) -> List[str]:
        """
        Search for words matching a simplified regex pattern.
        Supports: ., *, +, [], ^, $
        
        Returns list of matching words.
        """
        import re
        
        matches = []
        pattern = re.compile(f"^{regex}$")
        
        def collect_words(node: dict, current: str) -> None:
            if is_word_end(node) and pattern.match(current):
                matches.append(current)
            for char, child in node.items():
                if char != self.word_end:
                    collect_words(child, current + char)
        
        collect_words(self.root, "")
        return sorted(matches)
    
    def find_matching_prefixes(self, pattern: str) -> List[str]:
        """
        Find all prefixes in the trie that match the pattern.
        Returns list of matching prefixes.
        """
        matches = set()
        
        def match_prefix(node: dict, pattern: str, prefix: str, pos: int) -> None:
            # Add matching prefixes as we find them
            if pos >= len(pattern):
                matches.add(prefix)
                return
                
            if pattern[pos] == '?':
                for char, child in node.items():
                    if char != self.word_end:
                        match_prefix(child, pattern, prefix + char, pos + 1)
                        
            elif pattern[pos] == '*':
                # Match zero characters
                matches.add(prefix)
                # Match more characters
                for char, child in node.items():
                    if char != self.word_end:
                        match_prefix(child, pattern, prefix + char, pos)
                        
            else:
                if pattern[pos] in node:
                    match_prefix(node[pattern[pos]], pattern, 
                               prefix + pattern[pos], pos + 1)
                    
        match_prefix(self.root, pattern, "", 0)
        return sorted(matches)`,

  exercises: [
    {
      prompt:
        'Implement a method that finds all words matching a given pattern where "." matches any vowel and "#" matches any consonant.',
      initialCode: `def find_words_vowel_consonant(self, pattern: str) -> List[str]:
    # Write your solution here
    pass`,
      solution: `def find_words_vowel_consonant(self, pattern: str) -> List[str]:
    matches = []
    vowels = set('aeiou')
    consonants = set('bcdfghjklmnpqrstvwxyz')
    
    def match_pattern(node, pattern, word, pos):
        if pos >= len(pattern):
            if self.word_end in node:
                matches.append(word)
            return
            
        if pattern[pos] == '.':  # Match vowel
            for char, child in node.items():
                if char != self.word_end and char in vowels:
                    match_pattern(child, pattern, word + char, pos + 1)
                    
        elif pattern[pos] == '#':  # Match consonant
            for char, child in node.items():
                if char != self.word_end and char in consonants:
                    match_pattern(child, pattern, word + char, pos + 1)
                    
        elif pattern[pos] in node:  # Match exact character
            match_pattern(node[pattern[pos]], pattern, 
                        word + pattern[pos], pos + 1)
    
    match_pattern(self.root, pattern, "", 0)
    return sorted(matches)`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Implement a method that finds all palindromic words in the trie that match a given pattern.',
      initialCode: `def find_palindrome_patterns(self, pattern: str) -> List[str]:
    # Write your solution here
    pass`,
      solution: `def find_palindrome_patterns(self, pattern: str) -> List[str]:
    matches = []
    
    def is_palindrome(word: str) -> bool:
        return word == word[::-1]
    
    def match_palindrome(node, pattern, word, pos):
        if pos >= len(pattern):
            if self.word_end in node and is_palindrome(word):
                matches.append(word)
            return
            
        if pattern[pos] == '?':
            for char, child in node.items():
                if char != self.word_end:
                    next_word = word + char
                    # Early palindrome check optimization
                    if next_word == next_word[::-1]:
                        match_palindrome(child, pattern, next_word, pos + 1)
                    
        elif pattern[pos] == '*':
            # Match zero characters
            if is_palindrome(word):
                matches.append(word)
            # Match more characters
            for char, child in node.items():
                if char != self.word_end:
                    match_palindrome(child, pattern, word + char, pos)
                    
        elif pattern[pos] in node:
            match_palindrome(node[pattern[pos]], pattern,
                           word + pattern[pos], pos + 1)
    
    match_palindrome(self.root, pattern, "", 0)
    return sorted(matches)`,
      difficulty: Difficulty.Advanced,
    },
  ],

  quizzes: [
    {
      question:
        'What is the time complexity of pattern matching with multiple "*" wildcards?',
      options: [
        'O(N) where N is the number of nodes',
        'O(N*M) where M is pattern length',
        'O(N*M*K) where K is number of wildcards',
        'O(2^K) where K is number of wildcards',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Multiple wildcards require exploring multiple paths.',
        'Incorrect. This is the complexity for simple pattern matching.',
        'Correct! Each wildcard can match multiple positions, multiplying complexity.',
        "Incorrect. While exponential behavior is possible, it's bounded by trie structure.",
      ],
      difficulty: Difficulty.Advanced,
    },
    {
      question:
        'Why might we want to implement early termination in pattern matching?',
      options: [
        'To save memory',
        'To prune impossible matches early',
        'To improve accuracy',
        'To simplify the code',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Early termination primarily affects time, not space.',
        'Correct! Early termination avoids exploring paths that cannot lead to valid matches.',
        "Incorrect. Early termination doesn't affect accuracy.",
        'Incorrect. Early termination often makes code more complex.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const memoryOptimizationData: LessonContent = {
  title: 'Memory-Efficient Trie Implementations',
  content: `<p>
While tries excel at string operations, their memory footprint can grow significantly with large datasets. Let's explore various techniques to optimize memory usage while maintaining the trie's performance advantages. We'll start with basic concepts and build up to advanced optimization strategies.
</p>

<h3><u>Understanding Memory Usage in Tries</u></h3>
<p>
A standard trie implementation can be memory-intensive because:
</p>

<li>Each node stores character-to-node mappings, even for single-child paths</li>
<li>Node objects have overhead from their internal structure</li>
<li>Child pointers consume significant memory in large tries</li>
<li>Sparse character distributions waste memory in array-based implementations</li>

<h3><u>Optimization Techniques</u></h3>

<h4><b>1. Path Compression</b></h4>
<p>
Path compression, also known as radix tree optimization, merges nodes that have only one child. Instead of storing single characters, we store strings along edges. This significantly reduces the number of nodes:
</p>
<li>Original path: c->a->t->c->h</li>
<li>Compressed path: catch</li>

<h4><b>2. Packed Memory Layout</b></h4>
<p>
Rather than using separate objects for nodes, we can pack the trie into a contiguous array:
</p>
<li>Reduces memory fragmentation</li>
<li>Improves cache locality</li>
<li>Eliminates pointer overhead</li>

<h4><b>3. Bit-Level Optimizations</b></h4>
<p>
For specific character sets, we can use bit manipulations:
</p>
<li>Represent character presence using bit vectors</li>
<li>Pack multiple pieces of information into single integers</li>
<li>Use bit-level parallelism for operations</li>

<h3><u>Memory Comparison</u></h3>
<table>
<tr><th>Implementation</th><th>Memory per Node</th><th>Trade-offs</th></tr>
<tr><td>Standard Trie</td><td>~200-300 bytes</td><td>Simple, flexible</td></tr>
<tr><td>Compressed Trie</td><td>~100-150 bytes</td><td>More complex code</td></tr>
<tr><td>Packed Layout</td><td>~50-80 bytes</td><td>Less flexible</td></tr>
<tr><td>Bit-optimized</td><td>~20-30 bytes</td><td>Limited character set</td></tr>
</table>`,

  codeExample: `from typing import List, Set, Dict, Optional
from dataclasses import dataclass
from array import array
import numpy as np

class CompressedTrie:
    """
    Memory-efficient trie implementation using path compression
    and packed memory layout.
    """
    
    @dataclass
    class Node:
        """Compressed node storing edge label and children indices."""
        edge_label: str = ""  # Compressed path string
        is_word: bool = False
        children: Dict[str, int] = None  # Maps first char to node index
        
        def __post_init__(self):
            if self.children is None:
                self.children = {}

    def __init__(self):
        """Initialize compressed trie with packed memory layout."""
        self.nodes = [self.Node()]  # Contiguous array of nodes
        self.free_slots = []  # Recycled node indices
        
    def _new_node_index(self) -> int:
        """Get index for new node, reusing freed slots when possible."""
        if self.free_slots:
            return self.free_slots.pop()
        return len(self.nodes)
        
    def add_word(self, word: str) -> None:
        """Add word to trie using path compression."""
        if not word:
            return
            
        node_idx = 0  # Start at root
        
        while True:
            node = self.nodes[node_idx]
            
            # Find matching child based on first character
            first_char = word[0]
            if first_char in node.children:
                next_idx = node.children[first_char]
                next_node = self.nodes[next_idx]
                edge = next_node.edge_label
                
                # Find longest common prefix
                i = 0
                while i < len(edge) and i < len(word) and edge[i] == word[i]:
                    i += 1
                    
                if i == len(edge):
                    # Edge fully matched, continue with remaining word
                    if i == len(word):
                        next_node.is_word = True
                        return
                    word = word[i:]
                    node_idx = next_idx
                else:
                    # Split edge
                    split_idx = self._new_node_index()
                    new_idx = self._new_node_index()
                    
                    # Create split node
                    split_node = self.Node(
                        edge_label=edge[:i],
                        children={
                            edge[i]: next_idx,
                            word[i]: new_idx
                        }
                    )
                    
                    # Update original node
                    next_node.edge_label = edge[i:]
                    
                    # Create new node with remaining word
                    new_node = self.Node(
                        edge_label=word[i:],
                        is_word=True
                    )
                    
                    # Update tree structure
                    node.children[first_char] = split_idx
                    self.nodes.append(split_node)
                    self.nodes.append(new_node)
                    return
            else:
                # No matching child, create new node
                new_idx = self._new_node_index()
                node.children[first_char] = new_idx
                self.nodes.append(self.Node(
                    edge_label=word,
                    is_word=True
                ))
                return
                
    def search(self, word: str) -> bool:
        """Check if word exists in trie."""
        node_idx = 0
        pos = 0
        
        while pos < len(word):
            node = self.nodes[node_idx]
            first_char = word[pos]
            
            if first_char not in node.children:
                return False
                
            next_idx = node.children[first_char]
            next_node = self.nodes[next_idx]
            edge = next_node.edge_label
            
            if not word[pos:].startswith(edge):
                return False
                
            pos += len(edge)
            node_idx = next_idx
            
        return pos == len(word) and self.nodes[node_idx].is_word


class BitPackedTrie:
    """
    Ultra memory-efficient trie for lowercase ASCII strings using
    bit-level optimizations.
    """
    
    def __init__(self):
        """Initialize bit-packed trie structure."""
        # Use numpy arrays for efficient bit operations
        self.children = np.zeros((1000, 26), dtype=np.uint32)
        self.is_word = np.zeros(1000, dtype=np.bool_)
        self.next_id = 1  # Next available node ID
        
    def _get_char_index(self, c: str) -> int:
        """Convert character to 0-25 index."""
        return ord(c) - ord('a')
        
    def _ensure_capacity(self, needed_id: int) -> None:
        """Grow arrays if needed."""
        if needed_id >= len(self.children):
            new_size = max(needed_id + 1, len(self.children) * 2)
            self.children.resize((new_size, 26), refcheck=False)
            self.is_word.resize(new_size, refcheck=False)
            
    def add_word(self, word: str) -> None:
        """Add word using bit-packed representation."""
        node_id = 0
        
        for c in word.lower():
            c_idx = self._get_char_index(c)
            next_id = self.children[node_id, c_idx]
            
            if next_id == 0:
                next_id = self.next_id
                self._ensure_capacity(next_id)
                self.children[node_id, c_idx] = next_id
                self.next_id += 1
                
            node_id = next_id
            
        self.is_word[node_id] = True
        
    def search(self, word: str) -> bool:
        """Search word in bit-packed structure."""
        node_id = 0
        
        for c in word.lower():
            c_idx = self._get_char_index(c)
            node_id = self.children[node_id, c_idx]
            if node_id == 0:
                return False
                
        return self.is_word[node_id]`,

  exercises: [
    {
      prompt:
        'Implement a memory-efficient method to store and retrieve prefix frequencies (how often each prefix appears) in the compressed trie.',
      initialCode: `def update_prefix_counts(self, word: str) -> None:
    # Write your solution here
    pass

def get_prefix_frequency(self, prefix: str) -> int:
    # Write your solution here
    pass`,
      solution: `def update_prefix_counts(self, word: str) -> None:
    """Update prefix frequencies efficiently using packed integers."""
    if not hasattr(self, 'prefix_counts'):
        self.prefix_counts = array('I')  # Unsigned int array
        
    node_idx = 0
    current = ''
    
    while current != word:
        # Ensure we have space for count
        while len(self.prefix_counts) <= node_idx:
            self.prefix_counts.append(0)
            
        # Increment prefix count
        self.prefix_counts[node_idx] += 1
        
        # Find next node
        node = self.nodes[node_idx]
        next_char = word[len(current)]
        
        if next_char in node.children:
            next_idx = node.children[next_char]
            next_node = self.nodes[next_idx]
            edge = next_node.edge_label
            current += edge
            node_idx = next_idx
        else:
            break

def get_prefix_frequency(self, prefix: str) -> int:
    """Get frequency of prefix using packed storage."""
    if not hasattr(self, 'prefix_counts'):
        return 0
        
    node_idx = 0
    current = ''
    
    while current != prefix:
        if node_idx >= len(self.prefix_counts):
            return 0
            
        node = self.nodes[node_idx]
        next_char = prefix[len(current)]
        
        if next_char in node.children:
            next_idx = node.children[next_char]
            next_node = self.nodes[next_idx]
            edge = next_node.edge_label
            
            if not prefix[len(current):].startswith(edge):
                return 0
                
            current += edge
            node_idx = next_idx
        else:
            return 0
            
    return self.prefix_counts[node_idx]`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt:
        'Implement a method to compress a standard trie into a bit-packed representation for lowercase ASCII strings.',
      initialCode: `def compress_trie(standard_trie) -> BitPackedTrie:
    # Write your solution here
    pass`,
      solution: `def compress_trie(standard_trie) -> BitPackedTrie:
    """Convert standard trie to bit-packed representation."""
    packed = BitPackedTrie()
    
    def collect_words(node, current_word):
        if node.is_word:
            packed.add_word(current_word)
            
        for char, child in sorted(node.children.items()):
            if char != '#':  # Skip word markers
                collect_words(child, current_word + char)
    
    # Traverse standard trie and add words to packed trie
    collect_words(standard_trie.root, "")
    
    # Optimize array sizes
    actual_size = packed.next_id
    packed.children = packed.children[:actual_size]
    packed.is_word = packed.is_word[:actual_size]
    
    return packed`,
      difficulty: Difficulty.Advanced,
    },
  ],

  quizzes: [
    {
      question:
        'What is the primary advantage of using path compression in a trie?',
      options: [
        'Faster search operations',
        'Reduced memory usage for long strings',
        'Simpler implementation',
        'Better cache performance',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Path compression may slightly slow searches.',
        'Correct! Path compression significantly reduces memory by combining single-child nodes.',
        'Incorrect. Path compression makes implementation more complex.',
        'Incorrect. Cache performance is more related to memory layout.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Why might you choose a bit-packed trie over a compressed trie?',
      options: [
        'For storing unicode strings',
        'For better insertion performance',
        'For storing many short strings with limited alphabet',
        'For easier implementation',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Bit-packed tries work best with limited character sets.',
        'Incorrect. Bit-packed tries often have slower insertion.',
        'Correct! Bit-packed tries excel at storing many strings using a small alphabet.',
        'Incorrect. Bit-packed tries are more complex to implement.',
      ],
      difficulty: Difficulty.Advanced,
    },
  ],
};

const concurrentTriesData: LessonContent = {
  title: 'Understanding Concurrent Tries and Thread Safety',
  content: `<p>
When multiple threads access and modify a trie simultaneously, we need careful coordination to prevent data corruption while maintaining good performance. Let's explore how to make tries thread-safe while minimizing contention.
</p>

<h3><u>Understanding Concurrency Challenges</u></h3>
<p>
Tries present unique concurrency challenges because operations can affect multiple nodes along a path. Consider what happens when two threads simultaneously insert different words that share a prefix - we need to ensure that neither operation corrupts the shared path.
</p>

<h4><b>Key Challenges:</b></h4>
<li>Node creation and linking must be atomic</li>
<li>Path traversal needs to handle concurrent modifications</li>
<li>Word marking could race with deletions</li>
<li>Rebalancing operations affect multiple nodes</li>

<h3><u>Concurrency Strategies</u></h3>
<p>
We can use several approaches to handle concurrent access, each with different trade-offs:
</p>

<h4><b>1. Lock-Based Approach</b></h4>
<p>
Using traditional locks provides strong consistency but can limit concurrency:
</p>
<li>Global Lock: Simple but limits parallelism</li>
<li>Node-Level Locks: Better concurrency but complex</li>
<li>Hand-over-Hand Locking: Balanced approach</li>

<h4><b>2. Lock-Free Approach</b></h4>
<p>
Lock-free implementations use atomic operations to ensure progress:
</p>
<li>Compare-and-Swap (CAS) for updates</li>
<li>Immutable paths for reads</li>
<li>Version stamps for consistency</li>

<h3><u>Performance Implications</u></h3>
<table>
<tr><th>Strategy</th><th>Read Performance</th><th>Write Performance</th><th>Memory Overhead</th></tr>
<tr><td>Global Lock</td><td>Poor</td><td>Poor</td><td>Minimal</td></tr>
<tr><td>Node Locks</td><td>Good</td><td>Moderate</td><td>Moderate</td></tr>
<tr><td>Lock-Free</td><td>Excellent</td><td>Good</td><td>High</td></tr>
</table>`,

  codeExample: `import threading
from typing import Optional, Dict
import asyncio
from concurrent.futures import ThreadPoolExecutor
from dataclasses import dataclass
from threading import Lock
import queue

class ConcurrentTrie:
    """
    Thread-safe trie implementation using hand-over-hand locking.
    This approach provides a good balance between consistency and performance.
    """
    
    @dataclass
    class Node:
        """Thread-safe trie node with per-node locking."""
        children: Dict[str, 'ConcurrentTrie.Node']
        is_end: bool
        lock: Lock
        
        def __init__(self):
            self.children = {}
            self.is_end = False
            self.lock = Lock()
            
    def __init__(self):
        """Initialize the concurrent trie with a root node."""
        self._root = self.Node()
        self._size = 0  # Protected by root's lock
        
    def add_word(self, word: str) -> bool:
        """
        Thread-safe word insertion using hand-over-hand locking.
        Returns True if word was newly added, False if it existed.
        """
        if not word:
            return False
            
        current = self._root
        parent_lock = current.lock
        parent_lock.acquire()
        
        try:
            for char in word:
                # Get or create next node with proper locking
                if char not in current.children:
                    current.children[char] = self.Node()
                
                child = current.children[char]
                child.lock.acquire()  # Lock child before releasing parent
                parent_lock.release()
                
                current = child
                parent_lock = current.lock
            
            # Handle word ending
            if not current.is_end:
                current.is_end = True
                with self._root.lock:
                    self._size += 1
                result = True
            else:
                result = False
                
            return result
            
        finally:
            parent_lock.release()
            
    def search(self, word: str) -> bool:
        """
        Thread-safe search implementation.
        Uses reader locks to allow concurrent searches.
        """
        if not word:
            return False
            
        current = self._root
        parent_lock = current.lock
        parent_lock.acquire()
        
        try:
            for char in word:
                if char not in current.children:
                    return False
                    
                child = current.children[char]
                child.lock.acquire()
                parent_lock.release()
                
                current = child
                parent_lock = current.lock
                
            return current.is_end
            
        finally:
            parent_lock.release()
            
    async def batch_insert(self, words: list[str]) -> None:
        """
        Efficiently insert multiple words concurrently.
        Groups words by prefix to reduce lock contention.
        """
        # Group words by prefix to minimize lock contention
        prefix_groups = {}
        for word in words:
            prefix = word[:2] if len(word) > 1 else word
            prefix_groups.setdefault(prefix, []).append(word)
            
        # Process each group concurrently
        async with ThreadPoolExecutor() as executor:
            futures = []
            for group in prefix_groups.values():
                futures.append(
                    asyncio.get_event_loop().run_in_executor(
                        executor,
                        self._insert_group,
                        group
                    )
                )
            await asyncio.gather(*futures)
            
    def _insert_group(self, words: list[str]) -> None:
        """Helper method to insert a group of related words."""
        for word in words:
            self.add_word(word)
            

class LockFreeTrie:
    """
    Lock-free trie implementation using atomic operations.
    Provides high concurrency at the cost of additional memory usage.
    """
    
    @dataclass
    class Node:
        """
        Immutable node for lock-free operations.
        All modifications create new nodes to avoid synchronization.
        """
        children: Dict[str, 'LockFreeTrie.Node']
        is_end: bool
        version: int
        
        def __init__(self):
            self.children = {}
            self.is_end = False
            self.version = 0
            
        def copy_with_child(self, char: str, 
                           child: 'LockFreeTrie.Node') -> 'LockFreeTrie.Node':
            """Create new node with updated child."""
            new_node = LockFreeTrie.Node()
            new_node.children = self.children.copy()
            new_node.children[char] = child
            new_node.is_end = self.is_end
            new_node.version = self.version + 1
            return new_node
            
    def __init__(self):
        """Initialize lock-free trie."""
        self._root = self.Node()
        
    def add_word(self, word: str) -> bool:
        """
        Add word using atomic operations.
        Returns True if word was newly added.
        """
        if not word:
            return False
            
        while True:  # Keep trying until successful
            root_version = self._root.version
            new_root = self._add_word_helper(self._root, word, 0)
            
            if new_root is None:  # Word already exists
                return False
                
            # Try to atomically update root
            if root_version == self._root.version:
                self._root = new_root
                return True
                
    def _add_word_helper(self, node: Node, word: str, 
                        pos: int) -> Optional[Node]:
        """Recursive helper for atomic word addition."""
        if pos == len(word):
            if node.is_end:
                return None
            new_node = self.Node()
            new_node.children = node.children
            new_node.is_end = True
            new_node.version = node.version + 1
            return new_node
            
        char = word[pos]
        child = node.children.get(char)
        
        if child is None:
            # Create new path for remaining characters
            leaf = self.Node()
            leaf.is_end = True
            
            current = leaf
            for c in reversed(word[pos + 1:]):
                parent = self.Node()
                parent.children[c] = current
                current = parent
                
            return node.copy_with_child(char, current)
            
        new_child = self._add_word_helper(child, word, pos + 1)
        if new_child is None:
            return None
            
        return node.copy_with_child(char, new_child)`,

  exercises: [
    {
      prompt:
        'Implement a thread-safe method that efficiently counts all words in the trie that share a given prefix.',
      initialCode: `def count_prefix(self, prefix: str) -> int:
    # Write your solution here
    pass`,
      solution: `def count_prefix(self, prefix: str) -> int:
    """
    Thread-safe method to count words with given prefix.
    Uses hand-over-hand locking for traversal.
    """
    if not prefix:
        with self._root.lock:
            return self._size
            
    current = self._root
    parent_lock = current.lock
    parent_lock.acquire()
    
    try:
        # Traverse to prefix node
        for char in prefix:
            if char not in current.children:
                return 0
                
            child = current.children[char]
            child.lock.acquire()
            parent_lock.release()
            
            current = child
            parent_lock = current.lock
        
        # Count words under this node
        def count_subtree(node: 'ConcurrentTrie.Node') -> int:
            count = 1 if node.is_end else 0
            
            # Lock children in sorted order to prevent deadlocks
            children = sorted(node.children.items())
            for _, child in children:
                with child.lock:
                    count += count_subtree(child)
                    
            return count
            
        return count_subtree(current)
        
    finally:
        parent_lock.release()`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt:
        'Implement a concurrent method that finds the longest common prefix among all words in the trie.',
      initialCode: `def longest_common_prefix(self) -> str:
    # Write your solution here
    pass`,
      solution: `def longest_common_prefix(self) -> str:
    """
    Thread-safe method to find longest common prefix.
    Uses node versioning to handle concurrent modifications.
    """
    def traverse_unique_path(node: 'Node', prefix: list) -> bool:
        # Snapshot node state
        version = node.version
        children = list(node.children.items())
        
        # Only one path possible
        if len(children) == 1 and not node.is_end:
            char, child = children[0]
            prefix.append(char)
            result = traverse_unique_path(child, prefix)
            
            # Verify node hasn't changed
            if node.version != version:
                prefix.pop()
                return False
                
            return result
            
        return True
    
    prefix = []
    while True:
        root_version = self._root.version
        traverse_unique_path(self._root, prefix)
        
        # Verify root hasn't changed
        if self._root.version == root_version:
            return ''.join(prefix)
            
        # Root changed, try again
        prefix.clear()`,
      difficulty: Difficulty.Advanced,
    },
  ],

  quizzes: [
    {
      question:
        'Why might hand-over-hand locking be preferred over a single global lock for a concurrent trie?',
      options: [
        'It uses less memory',
        'It allows concurrent operations on different paths',
        'It makes implementation simpler',
        'It improves single-threaded performance',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Hand-over-hand locking actually uses more memory for the multiple locks.',
        'Correct! Hand-over-hand locking allows multiple threads to operate on different parts of the trie simultaneously.',
        'Incorrect. Hand-over-hand locking is more complex to implement correctly.',
        'Incorrect. It may slightly reduce single-threaded performance due to lock overhead.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'What is the main advantage of using a lock-free trie implementation?',
      options: [
        'Simpler implementation',
        'Lower memory usage',
        'No thread blocking or deadlocks',
        'Faster single-threaded operations',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Lock-free implementations are typically more complex.',
        'Incorrect. Lock-free approaches often use more memory for version tracking.',
        'Correct! Lock-free implementations ensure threads never block each other and avoid deadlock scenarios.',
        'Incorrect. Single-threaded performance might be slower due to overhead.',
      ],
      difficulty: Difficulty.Advanced,
    },
  ],
};

const spellCheckerData: LessonContent = {
  title: 'Building an Intelligent Spell Checker with Tries',
  content: `<p>
A spell checker is a perfect application of tries, combining efficient word lookup with fuzzy matching capabilities. We'll explore how to build a sophisticated spell checker that not only identifies misspellings but also suggests corrections intelligently.
</p>

<h3><u>Understanding Edit Distance</u></h3>
<p>
The Levenshtein distance between two words measures the minimum number of single-character operations needed to transform one word into another. These operations include:
</p>

<li>Insertion: adding a character (hat → heat)</li>
<li>Deletion: removing a character (heart → hear)</li>
<li>Substitution: replacing a character (cat → rat)</li>

<h3><u>Spell Checker Components</u></h3>
<p>
A robust spell checker combines several strategies:
</p>

<h4><b>1. Word Validation</b></h4>
<li>Fast lookup in dictionary trie</li>
<li>Case-insensitive matching</li>
<li>Common prefix optimization</li>

<h4><b>2. Error Detection</b></h4>
<li>Phonetic similarity checking</li>
<li>Common typo patterns</li>
<li>Keyboard layout analysis</li>

<h4><b>3. Suggestion Generation</b></h4>
<p>
We rank suggestions based on multiple factors:
</p>

<table>
<tr><th>Factor</th><th>Weight</th><th>Reasoning</th></tr>
<tr><td>Edit Distance</td><td>High</td><td>Closer matches are more likely</td></tr>
<tr><td>Word Frequency</td><td>Medium</td><td>Common words are more likely</td></tr>
<tr><td>Keyboard Distance</td><td>Low</td><td>Adjacent keys are common typos</td></tr>
</table>`,

  codeExample: `from typing import List, Dict, Set, Tuple
from collections import defaultdict
import heapq
from dataclasses import dataclass

@dataclass
class Suggestion:
    """Represents a word suggestion with its score."""
    word: str
    edit_distance: int
    frequency: float
    score: float

class SpellChecker:
    """
    Intelligent spell checker using trie-based dictionary
    with edit distance calculations and smart suggestions.
    """
    
    def __init__(self):
        """Initialize the spell checker components."""
        self.trie = {}  # Dictionary trie
        self.word_frequencies = {}  # Word -> frequency mapping
        self.total_words = 0
        self.keyboard_distances = self._init_keyboard_distances()
        
    def _init_keyboard_distances(self) -> Dict[str, Dict[str, float]]:
        """Initialize keyboard layout distance scores."""
        # QWERTY keyboard layout representation
        keyboard = [
            'qwertyuiop',
            'asdfghjkl',
            'zxcvbnm'
        ]
        
        # Calculate distances between characters
        distances = defaultdict(dict)
        for i, row in enumerate(keyboard):
            for j, char in enumerate(row):
                # Calculate distance to all other characters
                for i2, row2 in enumerate(keyboard):
                    for j2, char2 in enumerate(row2):
                        distance = ((i - i2) ** 2 + (j - j2) ** 2) ** 0.5
                        distances[char][char2] = distance
                        
        return distances
        
    def add_word(self, word: str, frequency: float = 1.0) -> None:
        """
        Add a word to the dictionary with its frequency.
        Higher frequency indicates more common words.
        """
        # Add to trie
        node = self.trie
        for char in word.lower():
            node = node.setdefault(char, {})
        node['#'] = True  # Mark word ending
        
        # Update frequency information
        self.word_frequencies[word] = frequency
        self.total_words += 1
        
    def is_word(self, word: str) -> bool:
        """Check if a word exists in the dictionary."""
        node = self.trie
        for char in word.lower():
            if char not in node:
                return False
            node = node[char]
        return '#' in node
        
    def find_suggestions(self, word: str, max_distance: int = 2,
                        max_suggestions: int = 5) -> List[str]:
        """
        Find spelling suggestions for a word.
        Uses multiple strategies to rank suggestions.
        
        Args:
            word: Potentially misspelled word
            max_distance: Maximum edit distance to consider
            max_suggestions: Maximum number of suggestions to return
        
        Returns:
            List of suggested corrections, ordered by likelihood
        """
        if self.is_word(word):
            return [word]
            
        candidates = []
        word = word.lower()
        
        # Helper function to calculate word similarity score
        def calculate_score(candidate: str, distance: int) -> float:
            # Base score from edit distance (inverse relationship)
            edit_score = 1.0 / (distance + 1)
            
            # Frequency score (normalized by total words)
            freq_score = self.word_frequencies.get(candidate, 0) / self.total_words
            
            # Keyboard distance score for substitutions
            keyboard_score = 0
            if distance == 1:
                # Find substituted character
                for i, (c1, c2) in enumerate(zip(word, candidate)):
                    if c1 != c2:
                        keyboard_score = 1.0 / (1 + self.keyboard_distances[c1][c2])
                        break
                        
            # Combine scores with weights
            return (0.5 * edit_score + 
                   0.3 * freq_score + 
                   0.2 * keyboard_score)
        
        # Try all possible single-character edits
        def get_edits(word: str) -> Set[str]:
            splits = [(word[:i], word[i:]) for i in range(len(word) + 1)]
            deletes = [L + R[1:] for L, R in splits if R]
            transposes = [L + R[1] + R[0] + R[2:] for L, R in splits if len(R) > 1]
            replaces = [L + c + R[1:] for L, R in splits if R 
                       for c in self.keyboard_distances[R[0]]]
            inserts = [L + c + R for L, R in splits 
                      for c in self.keyboard_distances[L[-1]] if L]
            return set(deletes + transposes + replaces + inserts)
        
        # Find all words within max_distance
        def find_words_within_distance(candidate: str, 
                                     distance: int) -> None:
            # Check if candidate is a valid word
            if self.is_word(candidate):
                score = calculate_score(candidate, distance)
                heapq.heappush(candidates, 
                             (-score, Suggestion(candidate, distance,
                                               self.word_frequencies.get(candidate, 0),
                                               score)))
            
            # Stop if we've reached max distance
            if distance >= max_distance:
                return
                
            # Try all possible edits
            for edit in get_edits(candidate):
                find_words_within_distance(edit, distance + 1)
                
        # Find suggestions and rank them
        find_words_within_distance(word, 0)
        
        # Return top suggestions
        return [heapq.heappop(candidates)[1].word 
                for _ in range(min(len(candidates), max_suggestions))]
        
    def check_text(self, text: str) -> List[Tuple[str, List[str]]]:
        """
        Check a full text for spelling errors.
        Returns list of (word, suggestions) pairs for misspelled words.
        """
        results = []
        words = text.split()
        
        for word in words:
            # Skip punctuation and numbers
            if not word.isalpha():
                continue
                
            if not self.is_word(word):
                suggestions = self.find_suggestions(word)
                if suggestions:
                    results.append((word, suggestions))
                    
        return results`,

  exercises: [
    {
      prompt:
        'Implement a method that finds all words in the dictionary that could be phonetically similar to a given word using Soundex algorithm.',
      initialCode: `def find_phonetic_matches(self, word: str) -> List[str]:
    # Write your solution here
    pass`,
      solution: `def find_phonetic_matches(self, word: str) -> List[str]:
    """Find words that sound similar using Soundex algorithm."""
    def get_soundex(s: str) -> str:
        # Soundex coding rules
        codes = {
            'bfpv': '1', 'cgjkqsxz': '2', 'dt': '3',
            'l': '4', 'mn': '5', 'r': '6'
        }
        
        # Convert to Soundex code
        s = s.lower()
        soundex = s[0].upper()
        last_code = '0'
        
        for char in s[1:]:
            # Find code for current character
            code = next((c for chars, c in codes.items() 
                        if char in chars), '0')
            
            # Add code if different from last
            if code != '0' and code != last_code:
                soundex += code
                last_code = code
                
            if len(soundex) == 4:
                break
                
        # Pad with zeros if needed
        soundex = soundex.ljust(4, '0')
        return soundex
    
    # Find all words with matching Soundex code
    target_code = get_soundex(word)
    matches = []
    
    def check_word(node: dict, current: str) -> None:
        if '#' in node and get_soundex(current) == target_code:
            matches.append(current)
        for char, child in node.items():
            if char != '#':
                check_word(child, current + char)
    
    check_word(self.trie, "")
    return matches`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt:
        'Implement a method that generates common typo variations of a word based on keyboard layout analysis.',
      initialCode: `def generate_typos(self, word: str) -> List[str]:
    # Write your solution here
    pass`,
      solution: `def generate_typos(self, word: str) -> List[str]:
    """Generate likely typos based on keyboard position."""
    typos = set()
    
    # Helper to find nearby keys
    def get_nearby_keys(char: str) -> List[str]:
        distances = self.keyboard_distances[char]
        # Get characters within close physical distance
        return [c for c, d in distances.items() if d < 1.5]
    
    # Generate common typo patterns
    for i in range(len(word)):
        # Substitution errors (adjacent keys)
        for nearby in get_nearby_keys(word[i]):
            typo = word[:i] + nearby + word[i+1:]
            typos.add(typo)
        
        # Transposition errors
        if i < len(word) - 1:
            typo = word[:i] + word[i+1] + word[i] + word[i+2:]
            typos.add(typo)
        
        # Insertion errors (missing adjacent key)
        for nearby in get_nearby_keys(word[i]):
            typo = word[:i] + nearby + word[i:]
            typos.add(typo)
        
        # Deletion errors
        typo = word[:i] + word[i+1:]
        typos.add(typo)
    
    # Filter to only include valid dictionary words
    return [t for t in typos if self.is_word(t)]`,
      difficulty: Difficulty.Advanced,
    },
  ],

  quizzes: [
    {
      question:
        'Why might keyboard distance be a useful factor in ranking spelling suggestions?',
      options: [
        'It makes the algorithm faster',
        'It helps identify common typing mistakes',
        'It reduces memory usage',
        'It improves trie traversal',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Keyboard distance calculations actually add computation time.',
        'Correct! Many typos occur when users hit adjacent keys by mistake, so considering keyboard layout helps find likely corrections.',
        'Incorrect. Storing keyboard distances increases memory usage.',
        'Incorrect. Keyboard distance is unrelated to trie traversal.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'What is the main advantage of using phonetic matching in a spell checker?',
      options: [
        'Faster processing speed',
        'Lower memory usage',
        'Finding words that sound similar but are spelled differently',
        'Improved accuracy for keyboard typos',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Phonetic matching adds processing overhead.',
        'Incorrect. Storing phonetic codes increases memory usage.',
        'Correct! Phonetic matching helps find valid words that sound like the misspelled word, which is especially useful for phonetic spelling errors.',
        'Incorrect. Keyboard analysis is better for typing mistakes.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const wordBreakData: LessonContent = {
  title: 'Understanding and Solving Word Break Problems',
  content: `<p>
Word break problems are a fascinating class of string processing challenges that test our ability to efficiently identify valid words within a larger text. These problems appear frequently in real-world applications like text processing, natural language understanding, and search engine query parsing.
</p>

<h3><u>Common Word Break Problems</u></h3>

<h4><b>1. Basic Word Break</b></h4>
<p>
Given a string and a dictionary of words, determine if the string can be segmented into a sequence of dictionary words. For example, with "leetcode" and a dictionary containing "leet" and "code", we should return true because "leetcode" can be broken into "leet code".
</p>

<h4><b>2. All Possible Segmentations</b></h4>
<p>
Find all possible ways to break a string into dictionary words. For example, "ilovecoding" might break into:
</p>
<li>"i love coding"</li>
<li>"i love cod ing"</li>
<li>"ilov e coding"</li>

<h4><b>3. Optimal Word Break</b></h4>
<p>
Find the segmentation that optimizes certain criteria, such as:
</p>
<li>Minimum number of words</li>
<li>Maximum word lengths</li>
<li>Highest probability sequence</li>

<h3><u>Solution Strategies</u></h3>
<table>
<tr><th>Approach</th><th>Time Complexity</th><th>Space Complexity</th><th>Best For</th></tr>
<tr><td>Pure Trie</td><td>O(2^n)</td><td>O(m)</td><td>Short strings</td></tr>
<tr><td>DP + Trie</td><td>O(n^2)</td><td>O(n)</td><td>Long strings</td></tr>
<tr><td>Memoized Trie</td><td>O(n^2)</td><td>O(n+m)</td><td>Multiple queries</td></tr>
</table>
<p>where n = string length, m = total characters in dictionary</p>`,

  codeExample: `from typing import List, Set, Dict, Optional
from collections import defaultdict
import heapq
from dataclasses import dataclass

class WordBreakSolver:
    """
    A comprehensive solution for various word break problems
    using a trie-based approach with dynamic programming.
    """
    
    def __init__(self):
        """Initialize the word break solver with a trie structure."""
        self.trie = {}  # Dictionary trie
        self.max_word_length = 0  # For optimization
        self.word_scores = {}  # For probability-based breaking
        
    def add_word(self, word: str, score: float = 1.0) -> None:
        """
        Add a word to the dictionary with an optional score.
        Higher scores indicate more commonly used words.
        """
        # Add to trie
        node = self.trie
        for char in word:
            node = node.setdefault(char, {})
        node['#'] = True
        
        # Update maximum word length
        self.max_word_length = max(self.max_word_length, len(word))
        
        # Store word score
        self.word_scores[word] = score
        
    def can_break(self, s: str) -> bool:
        """
        Determine if string can be broken into dictionary words.
        Uses dynamic programming for efficiency.
        
        Time: O(n^2), where n is string length
        Space: O(n)
        """
        n = len(s)
        dp = [False] * (n + 1)  # dp[i] = can break s[0:i]
        dp[0] = True  # Empty string can be broken
        
        for i in range(1, n + 1):
            # Only check substrings up to max word length
            for j in range(max(0, i - self.max_word_length), i):
                if dp[j] and self._is_word(s[j:i]):
                    dp[i] = True
                    break
                    
        return dp[n]
        
    def _is_word(self, word: str) -> bool:
        """Check if word exists in trie."""
        node = self.trie
        for char in word:
            if char not in node:
                return False
            node = node[char]
        return '#' in node
        
    def find_all_breaks(self, s: str) -> List[str]:
        """
        Find all possible ways to break the string into dictionary words.
        Uses backtracking with trie-based optimization.
        
        Time: O(2^n) worst case, but much better in practice
        Space: O(n) for recursion stack
        """
        results = []
        
        def backtrack(start: int, path: List[str]):
            if start == len(s):
                results.append(' '.join(path))
                return
                
            # Try all possible words starting at current position
            node = self.trie
            for i in range(start, min(len(s), start + self.max_word_length)):
                char = s[i]
                if char not in node:
                    break
                    
                node = node[char]
                if '#' in node:  # Found a valid word
                    path.append(s[start:i+1])
                    backtrack(i + 1, path)
                    path.pop()
                    
        backtrack(0, [])
        return results
        
    def find_optimal_break(self, s: str) -> str:
        """
        Find the optimal way to break the string based on word scores.
        Uses Dijkstra's algorithm with a trie for efficient word lookup.
        
        Time: O(n^2 log n)
        Space: O(n)
        """
        n = len(s)
        # Store (score, segmentation) for each position
        best = [(float('-inf'), '')] * (n + 1)
        best[0] = (0.0, '')
        
        # Priority queue stores (negative score, position)
        pq = [(0.0, 0)]
        
        while pq:
            neg_score, pos = heapq.heappop(pq)
            score = -neg_score
            
            # Skip if we've found a better solution for this position
            if score < best[pos][0]:
                continue
                
            # Try all possible words starting at current position
            node = self.trie
            for i in range(pos, min(len(s), pos + self.max_word_length)):
                char = s[i]
                if char not in node:
                    break
                    
                node = node[char]
                if '#' in node:  # Found a valid word
                    word = s[pos:i+1]
                    new_score = score + self.word_scores.get(word, 0)
                    
                    if new_score > best[i+1][0]:
                        # Update best segmentation
                        segmentation = best[pos][1]
                        if segmentation:
                            segmentation += ' '
                        segmentation += word
                        best[i+1] = (new_score, segmentation)
                        
                        # Add to priority queue
                        heapq.heappush(pq, (-new_score, i+1))
                        
        return best[n][1]
        
    def break_with_constraints(self, s: str, 
                             min_word_length: int = 1,
                             max_words: Optional[int] = None) -> List[str]:
        """
        Break string into dictionary words while satisfying constraints.
        
        Args:
            s: String to break
            min_word_length: Minimum length of each word
            max_words: Maximum number of words allowed
            
        Returns:
            List of valid segmentations meeting constraints
        """
        results = []
        
        def backtrack(start: int, path: List[str]):
            if start == len(s):
                if max_words is None or len(path) <= max_words:
                    results.append(' '.join(path))
                return
                
            if max_words is not None and len(path) >= max_words:
                return
                
            # Try all valid words from current position
            node = self.trie
            for i in range(start, min(len(s), start + self.max_word_length)):
                char = s[i]
                if char not in node:
                    break
                    
                node = node[char]
                if '#' in node:
                    word = s[start:i+1]
                    if len(word) >= min_word_length:
                        path.append(word)
                        backtrack(i + 1, path)
                        path.pop()
                        
        backtrack(0, [])
        return results`,

  exercises: [
    {
      prompt:
        'Implement a method that finds the word break that minimizes the total number of words while preferring longer words when there are multiple solutions with the same word count.',
      initialCode: `def find_minimal_break(self, s: str) -> str:
    # Write your solution here
    pass`,
      solution: `def find_minimal_break(self, s: str) -> str:
    """
    Find the segmentation with minimum number of words,
    preferring longer words when there are multiple solutions.
    
    Returns the optimal segmentation as a space-separated string.
    """
    n = len(s)
    # dp[i] = (min words count, best segmentation) for s[0:i]
    dp = [(float('inf'), '')] * (n + 1)
    dp[0] = (0, '')
    
    for i in range(1, n + 1):
        # Try all possible last words
        node = self.trie
        best_length = 0
        for j in range(i - 1, max(-1, i - self.max_word_length - 1), -1):
            char = s[j]
            if char not in node:
                break
                
            node = node[char]
            if '#' in node:
                word = s[j:i]
                word_count = dp[j][0] + 1
                
                # Update if we found fewer words or same count but longer word
                if (word_count < dp[i][0] or 
                    (word_count == dp[i][0] and len(word) > best_length)):
                    segmentation = dp[j][1]
                    if segmentation:
                        segmentation += ' '
                    segmentation += word
                    dp[i] = (word_count, segmentation)
                    best_length = len(word)
                    
    return dp[n][1]`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt:
        'Implement a method that finds all possible word breaks where each segment is a valid palindrome (the segment itself reads the same forwards and backwards) in the dictionary.',
      initialCode: `def find_palindrome_breaks(self, s: str) -> List[str]:
    # Write your solution here
    pass`,
      solution: `def find_palindrome_breaks(self, s: str) -> List[str]:
    """
    Find all word breaks where each word is both:
    1. A valid dictionary word
    2. A palindrome
    
    Returns list of valid segmentations.
    """
    results = []
    
    def is_palindrome(word: str) -> bool:
        return word == word[::-1]
    
    def backtrack(start: int, path: List[str]):
        if start == len(s):
            results.append(' '.join(path))
            return
            
        # Try all possible words starting at current position
        node = self.trie
        for i in range(start, min(len(s), start + self.max_word_length)):
            char = s[i]
            if char not in node:
                break
                
            node = node[char]
            if '#' in node:
                word = s[start:i+1]
                if is_palindrome(word):
                    path.append(word)
                    backtrack(i + 1, path)
                    path.pop()
                    
    backtrack(0, [])
    return results`,
      difficulty: Difficulty.Advanced,
    },
  ],

  quizzes: [
    {
      question:
        'Why is dynamic programming particularly effective for the basic word break problem?',
      options: [
        'It uses less memory than other approaches',
        'It avoids redundant computations of subproblems',
        'It works better with tries',
        'It handles longer words more efficiently',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. DP often uses more memory to store subproblem results.',
        'Correct! DP stores results of subproblems to avoid recomputing them, significantly improving performance.',
        'Incorrect. The effectiveness of DP is independent of using tries.',
        "Incorrect. Word length doesn't significantly impact DP's effectiveness.",
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'What is the main advantage of using a trie for word break problems?',
      options: [
        'Reduces memory usage',
        'Enables faster string comparison',
        'Allows early termination of invalid prefixes',
        'Simplifies the implementation',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Tries often use more memory than simple hash sets.',
        "Incorrect. String comparison isn't the main bottleneck.",
        'Correct! Tries let us quickly identify when a prefix cannot form a valid word, avoiding unnecessary exploration.',
        'Incorrect. Trie implementations are often more complex.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const xorProblemsData: LessonContent = {
  title: 'Understanding and Solving XOR Problems with Binary Tries',
  content: `<p>
XOR operations have fascinating properties that make them useful in many algorithmic problems. When combined with binary tries, we can solve complex XOR-based problems very efficiently. Let's explore this powerful combination by building our understanding step by step.
</p>

<h3><u>Understanding Binary Tries for XOR</u></h3>
<p>
A binary trie for XOR problems is a special form of trie where each node has at most two children, representing the binary digits 0 and 1. This structure is particularly powerful for XOR operations because:
</p>

<li>Each level represents a bit position in the binary number</li>
<li>Following opposite paths maximizes XOR values</li>
<li>Common prefixes naturally group numbers by their binary representation</li>

<h3><u>Common XOR Problems</u></h3>

<h4><b>1. Maximum XOR Pair</b></h4>
<p>
Given an array of numbers, find two numbers whose XOR value is maximum. This problem showcases the power of binary tries as we can find the answer in O(N log M) time, where N is the array length and M is the maximum number.
</p>

<h4><b>2. Maximum XOR Subarray</b></h4>
<p>
Find a contiguous subarray whose XOR is maximum. This extends the basic XOR pair problem by using prefix XORs and requires understanding how XOR operations can be chained.
</p>

<h4><b>3. XOR Queries</b></h4>
<p>
Process queries to find numbers with specific XOR properties, such as finding the smallest number in the trie with XOR value greater than K with a given number.
</p>

<h3><u>Performance Analysis</u></h3>
<table>
<tr><th>Operation</th><th>Binary Trie</th><th>Naive Approach</th></tr>
<tr><td>Insert Number</td><td>O(log M)</td><td>O(1)</td></tr>
<tr><td>Find Max XOR Pair</td><td>O(N log M)</td><td>O(N²)</td></tr>
<tr><td>XOR Query</td><td>O(log M)</td><td>O(N)</td></tr>
</table>
<p>where M is the maximum possible number (usually 2³² - 1)</p>`,

  codeExample: `class BinaryTrieNode:
    """Node in a binary trie for XOR operations."""
    def __init__(self):
        self.children = {}  # 0 and 1 for binary digits
        self.end = False
        self.count = 0  # Number of values passing through this node
        
class XORTrie:
    """
    Binary trie optimized for XOR operations.
    Stores numbers in their binary representation.
    """
    
    def __init__(self, max_bits: int = 32):
        """Initialize XOR trie with specified bit depth."""
        self.root = BinaryTrieNode()
        self.max_bits = max_bits
        
    def _get_binary(self, num: int) -> str:
        """Convert number to binary string with leading zeros."""
        return format(num, f'0{self.max_bits}b')
        
    def insert(self, num: int) -> None:
        """
        Insert a number into the trie.
        Stores its binary representation path.
        
        Time: O(max_bits)
        """
        node = self.root
        binary = self._get_binary(num)
        
        for bit in binary:
            node = node.children.setdefault(bit, BinaryTrieNode())
            node.count += 1
            
        node.end = True
        
    def find_max_xor_pair(self, nums: list[int]) -> tuple[int, int]:
        """
        Find two numbers in the given list with maximum XOR value.
        
        Returns: Tuple of (number1, number2) with maximum XOR.
        Time: O(N * max_bits) where N is len(nums)
        """
        # Build trie with all numbers
        for num in nums:
            self.insert(num)
            
        max_xor = 0
        result = (0, 0)
        
        # For each number, find its best XOR match
        for num in nums:
            binary = self._get_binary(num)
            node = self.root
            current_num = 0
            
            # Try to go opposite way at each bit to maximize XOR
            for bit in binary:
                opposite = '1' if bit == '0' else '0'
                
                # Choose opposite path if available
                if opposite in node.children:
                    current_num = (current_num << 1) | 1
                    node = node.children[opposite]
                else:
                    current_num = current_num << 1
                    node = node.children[bit]
                    
            xor_val = num ^ current_num
            if xor_val > max_xor:
                max_xor = xor_val
                result = (num, current_num)
                
        return result
        
    def find_max_xor_subarray(self, nums: list[int]) -> tuple[int, int, int]:
        """
        Find contiguous subarray with maximum XOR sum.
        Uses prefix XOR to convert to max XOR pair problem.
        
        Returns: Tuple of (start_index, end_index, max_xor)
        Time: O(N * max_bits)
        """
        prefix_xor = 0
        max_xor = 0
        result = (0, 0, 0)  # (start, end, xor_value)
        prefix_map = {0: -1}  # Maps prefix_xor to index
        
        for i, num in enumerate(nums):
            prefix_xor ^= num
            
            # Find current maximum possible XOR
            node = self.root
            current_xor = 0
            
            for bit in self._get_binary(prefix_xor):
                opposite = '1' if bit == '0' else '0'
                if opposite in node.children:
                    current_xor = (current_xor << 1) | 1
                    node = node.children[opposite]
                else:
                    current_xor = current_xor << 1
                    node = node.children[bit]
                    
            # Update result if better XOR found
            if current_xor > max_xor:
                # Find the index where this XOR started
                start_xor = prefix_xor ^ current_xor
                start_index = prefix_map.get(start_xor, -1) + 1
                max_xor = current_xor
                result = (start_index, i, max_xor)
                
            prefix_map[prefix_xor] = i
            self.insert(prefix_xor)
            
        return result
        
    def find_smallest_xor_greater_than_k(self, x: int, k: int) -> int:
        """
        Find the smallest number in trie that has XOR with x greater than k.
        Returns -1 if no such number exists.
        
        Time: O(max_bits)
        """
        if not self.root.children:
            return -1
            
        x_binary = self._get_binary(x)
        k_binary = self._get_binary(k)
        node = self.root
        result = 0
        
        # Process bits from most significant to least
        for x_bit in x_binary:
            # Get required bit for this position to exceed k
            k_bit = k_binary[0]
            k_binary = k_binary[1:] + '0'
            
            # Calculate which path we need to take
            if x_bit == '0':
                # Need 1 to exceed k_bit
                if '1' in node.children and k_bit == '0':
                    result = (result << 1) | 1
                    node = node.children['1']
                elif '0' in node.children:
                    result = result << 1
                    node = node.children['0']
                else:
                    return -1
            else:
                # Need 0 to exceed k_bit
                if '0' in node.children and k_bit == '0':
                    result = result << 1
                    node = node.children['0']
                elif '1' in node.children:
                    result = (result << 1) | 1
                    node = node.children['1']
                else:
                    return -1
                    
        final_xor = x ^ result
        return final_xor if final_xor > k else -1`,

  exercises: [
    {
      prompt:
        'Implement a method that finds all pairs of numbers in the trie whose XOR value equals a given target.',
      initialCode: `def find_xor_pairs(self, target: int) -> List[Tuple[int, int]]:
    # Write your solution here
    pass`,
      solution: `def find_xor_pairs(self, target: int) -> List[Tuple[int, int]]:
    """
    Find all pairs of numbers whose XOR equals target.
    Uses the property that a⊕b=target implies a=b⊕target
    
    Time: O(N * max_bits) where N is number of values in trie
    """
    pairs = []
    seen = set()
    
    def collect_numbers(node: BinaryTrieNode, path: int):
        """Collect all numbers stored in the trie."""
        if node.end:
            seen.add(path)
            
        for bit, child in node.children.items():
            next_path = (path << 1) | int(bit)
            collect_numbers(child, next_path)
    
    # Collect all numbers in trie
    collect_numbers(self.root, 0)
    
    # For each number, check if its pair exists
    for num in seen:
        pair = num ^ target
        if pair in seen and pair >= num:  # Avoid duplicates
            pairs.append((num, pair))
            
    return sorted(pairs)`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt:
        'Implement a method that finds the kth smallest XOR value among all possible pairs of numbers in the trie.',
      initialCode: `def kth_smallest_xor(self, k: int) -> int:
    # Write your solution here
    pass`,
      solution: `def kth_smallest_xor(self, k: int) -> int:
    """
    Find the kth smallest XOR value among all pairs.
    Uses a min-heap to efficiently track XOR values.
    
    Time: O(k * log(N)) where N is number of values in trie
    """
    # First collect all numbers in trie
    numbers = []
    def collect_numbers(node: BinaryTrieNode, path: int):
        if node.end:
            numbers.append(path)
        for bit, child in node.children.items():
            collect_numbers(child, (path << 1) | int(bit))
    
    collect_numbers(self.root, 0)
    if not numbers:
        return 0
        
    # Use min-heap to track k smallest XOR values
    heap = []
    n = len(numbers)
    
    # Start with smallest possible XOR values
    for i in range(n):
        heapq.heappush(heap, (numbers[i] ^ numbers[0], i, 0))
    
    # Find kth element
    while k > 1 and heap:
        _, i, j = heapq.heappop(heap)
        if j + 1 < n:
            heapq.heappush(heap, 
                          (numbers[i] ^ numbers[j + 1], i, j + 1))
        k -= 1
        
    return heap[0][0] if heap else 0`,
      difficulty: Difficulty.Advanced,
    },
  ],

  quizzes: [
    {
      question:
        'Why is a binary trie particularly efficient for finding maximum XOR pairs?',
      options: [
        'It uses less memory than other data structures',
        'It can process numbers in parallel',
        'It allows choosing optimal bits at each level',
        'It reduces the number of comparisons needed',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Binary tries often use more memory than simple arrays.',
        'Incorrect. Binary tries process bits sequentially.',
        'Correct! At each level, we can directly choose the opposite bit if available, maximizing the XOR value.',
        'Incorrect. While true, this is a side effect of the main advantage.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'What is the time complexity advantage of using a binary trie for maximum XOR pair finding compared to the naive approach?',
      options: [
        'Reduces from O(N²) to O(N log M)',
        'Reduces from O(N log N) to O(N)',
        'Reduces from O(N²) to O(N)',
        'Reduces from O(N log M) to O(N)',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct! The naive approach requires comparing all pairs O(N²), while the trie approach only needs O(log M) per number.',
        'Incorrect. The naive approach is quadratic, not O(N log N).',
        'Incorrect. The trie approach still requires O(log M) per number.',
        'Incorrect. The trie approach is O(N log M), not O(N).',
      ],
      difficulty: Difficulty.Advanced,
    },
  ],
};

const ipRoutingData: LessonContent = {
  title: 'Understanding IP Routing Tables with Tries',
  content: `<p>
IP routing is a fundamental networking concept where tries show their practical power. When a router needs to forward a packet, it must quickly determine the best route based on the destination IP address. A trie structure, often called a routing trie or prefix tree in this context, provides an elegant and efficient solution to this problem.
</p>

<h3><u>Understanding IP Addressing and Routing</u></h3>
<p>
An IP address (in IPv4) consists of 32 bits, usually written as four octets (e.g., 192.168.1.1). Routing decisions are made based on address prefixes, which represent network segments. For example:
</p>

<li>192.168.0.0/24 matches all addresses from 192.168.0.0 to 192.168.0.255</li>
<li>10.0.0.0/8 matches all addresses from 10.0.0.0 to 10.255.255.255</li>
<li>The /N notation indicates how many bits form the network prefix</li>

<h3><u>Trie Advantages for IP Routing</u></h3>
<p>
Tries are particularly well-suited for IP routing because they:
</p>

<li>Naturally handle hierarchical network structures</li>
<li>Support longest prefix matching efficiently</li>
<li>Allow for fast updates to routing tables</li>
<li>Enable route aggregation and summarization</li>

<h3><u>Performance Characteristics</u></h3>
<table>
<tr><th>Operation</th><th>Time Complexity</th><th>Memory Usage</th></tr>
<tr><td>Route Lookup</td><td>O(prefix length)</td><td>O(N) where N = routes</td></tr>
<tr><td>Route Insertion</td><td>O(prefix length)</td><td>O(prefix length)</td></tr>
<tr><td>Longest Prefix Match</td><td>O(address bits)</td><td>No additional</td></tr>
</table>

<h3><u>Common Optimization Techniques</u></h3>
<p>
In practice, several optimizations are crucial:
</p>

<h4><b>1. Path Compression</b></h4>
<li>Merge single-child nodes</li>
<li>Reduce memory usage</li>
<li>Improve cache efficiency</li>

<h4><b>2. Level Compression</b></h4>
<li>Use multi-bit nodes at upper levels</li>
<li>Reduce tree height</li>
<li>Better memory locality</li>`,

  codeExample: `from typing import Optional, Dict, List, Tuple
from dataclasses import dataclass
import ipaddress

@dataclass
class Route:
    """Represents a routing table entry."""
    next_hop: str
    metric: int
    interface: str
    
class IPRoutingTrie:
    """
    Implements an IP routing table using a binary trie structure.
    Supports CIDR notation and longest prefix matching.
    """
    
    def __init__(self):
        """Initialize empty routing trie."""
        self.root = {}
        self.routes = {}  # Store complete route information
        
    def add_route(self, prefix: str, next_hop: str, 
                  metric: int = 1, interface: str = "eth0") -> None:
        """
        Add a route to the routing table.
        
        Args:
            prefix: Network prefix in CIDR notation (e.g., "192.168.1.0/24")
            next_hop: Next hop IP address
            metric: Route metric (lower is better)
            interface: Output interface name
        """
        # Parse network prefix
        network = ipaddress.ip_network(prefix)
        prefix_bits = format(int(network.network_address), '032b')
        prefix_len = network.prefixlen
        
        # Add route to trie
        node = self.root
        for i in range(prefix_len):
            bit = prefix_bits[i]
            node = node.setdefault(bit, {})
            
        # Store route information
        node['#'] = Route(next_hop, metric, interface)
        self.routes[prefix] = node['#']
        
    def find_route(self, ip_address: str) -> Optional[Route]:
        """
        Find the most specific (longest matching prefix) route for an IP.
        
        Args:
            ip_address: Destination IP address
            
        Returns:
            Route object for the longest matching prefix, or None
        """
        # Convert IP to binary
        addr = ipaddress.ip_address(ip_address)
        addr_bits = format(int(addr), '032b')
        
        # Track best match while traversing
        best_match = None
        node = self.root
        
        for bit in addr_bits:
            if '#' in node:
                best_match = node['#']
                
            if bit not in node:
                break
                
            node = node[bit]
            
        # Check final node
        if '#' in node:
            best_match = node['#']
            
        return best_match
        
    def find_all_matching_routes(self, ip_address: str) -> List[Tuple[str, Route]]:
        """
        Find all routes that match an IP address, from least to most specific.
        Useful for troubleshooting and understanding routing decisions.
        
        Returns list of (prefix, route) tuples.
        """
        matches = []
        addr = ipaddress.ip_address(ip_address)
        addr_bits = format(int(addr), '032b')
        
        node = self.root
        current_prefix = ""
        
        for bit in addr_bits:
            if '#' in node:
                for prefix, route in self.routes.items():
                    if route is node['#']:
                        matches.append((prefix, route))
                        break
                        
            if bit not in node:
                break
                
            current_prefix += bit
            node = node[bit]
            
        # Check final node
        if '#' in node:
            for prefix, route in self.routes.items():
                if route is node['#']:
                    matches.append((prefix, route))
                    break
                    
        return matches
        
    def aggregate_routes(self) -> None:
        """
        Attempt to aggregate routes where possible.
        Combines adjacent prefixes that share the same next hop and metric.
        """
        while True:
            aggregated = False
            routes = sorted(self.routes.items(), 
                          key=lambda x: str(ipaddress.ip_network(x[0])))
            
            for i in range(len(routes) - 1):
                prefix1, route1 = routes[i]
                prefix2, route2 = routes[i + 1]
                
                # Check if routes can be aggregated
                net1 = ipaddress.ip_network(prefix1)
                net2 = ipaddress.ip_network(prefix2)
                
                if (route1.next_hop == route2.next_hop and
                    route1.metric == route2.metric and
                    route1.interface == route2.interface and
                    net1.prefixlen == net2.prefixlen and
                    net1.network_address >> 1 == net2.network_address >> 1):
                    
                    # Remove original routes
                    self.remove_route(prefix1)
                    self.remove_route(prefix2)
                    
                    # Add aggregated route
                    new_prefix = str(net1.supernet()[0])
                    self.add_route(new_prefix, route1.next_hop,
                                 route1.metric, route1.interface)
                    
                    aggregated = True
                    break
                    
            if not aggregated:
                break
                
    def remove_route(self, prefix: str) -> None:
        """Remove a route from the routing table."""
        network = ipaddress.ip_network(prefix)
        prefix_bits = format(int(network.network_address), '032b')
        prefix_len = network.prefixlen
        
        # Traverse to the node
        node = self.root
        path = []
        for i in range(prefix_len):
            bit = prefix_bits[i]
            if bit not in node:
                return
            path.append((node, bit))
            node = node[bit]
            
        # Remove route marker
        if '#' in node:
            del node['#']
            del self.routes[prefix]
            
        # Clean up empty nodes
        while path and not node:
            parent, bit = path.pop()
            del parent[bit]
            node = parent`,

  exercises: [
    {
      prompt:
        'Implement a method that finds all routes that would be affected if a given network link (router interface) fails.',
      initialCode: `def find_affected_routes(self, interface: str) -> List[str]:
    # Write your solution here
    pass`,
      solution: `def find_affected_routes(self, interface: str) -> List[str]:
    """
    Find all routes that use a specific interface.
    This helps in failure impact analysis.
    
    Args:
        interface: Name of the network interface
        
    Returns:
        List of affected network prefixes
    """
    affected = []
    
    def traverse(node: dict, prefix: str = "", bits: str = ""):
        if '#' in node and node['#'].interface == interface:
            # Calculate network prefix from bits
            if bits:
                network = ipaddress.ip_network(f"{prefix}/{len(bits)}")
                affected.append(str(network))
                
        # Continue traversal
        for bit, child in node.items():
            if bit != '#':
                traverse(child, prefix, bits + bit)
                
    traverse(self.root)
    return sorted(affected)`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt:
        'Implement a method that suggests route optimizations by identifying overlapping routes that could be summarized.',
      initialCode: `def find_summarizable_routes(self) -> List[Tuple[List[str], str]]:
    # Write your solution here
    pass`,
      solution: `def find_summarizable_routes(self) -> List[Tuple[List[str], str]]:
    """
    Find groups of routes that could be summarized into a single route.
    Returns list of (original_routes, suggested_summary) tuples.
    """
    suggestions = []
    
    # Group routes by next hop and interface
    route_groups = {}
    for prefix, route in self.routes.items():
        key = (route.next_hop, route.metric, route.interface)
        route_groups.setdefault(key, []).append(prefix)
        
    for routes in route_groups.values():
        if len(routes) < 2:
            continue
            
        # Try to find adjacent networks
        networks = [ipaddress.ip_network(r) for r in routes]
        networks.sort()
        
        i = 0
        while i < len(networks) - 1:
            summarizable = []
            current = networks[i]
            
            # Find networks that can be summarized together
            while (i < len(networks) - 1 and 
                   current.prefixlen == networks[i + 1].prefixlen and
                   current.supernet()[0].network_address == 
                   networks[i + 1].supernet()[0].network_address):
                summarizable.extend([str(current), str(networks[i + 1])])
                i += 1
                if i < len(networks) - 1:
                    current = networks[i + 1]
                    
            if summarizable:
                summary = str(ipaddress.ip_network(summarizable[0]).supernet()[0])
                suggestions.append((summarizable, summary))
            i += 1
            
    return suggestions`,
      difficulty: Difficulty.Advanced,
    },
  ],

  quizzes: [
    {
      question: 'Why is longest prefix matching important in IP routing?',
      options: [
        'It uses less memory',
        'It provides the most specific route for a destination',
        'It makes routing faster',
        'It reduces network congestion',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Prefix matching is about route selection, not memory usage.',
        'Correct! Longest prefix matching ensures packets follow the most specific available route to their destination.',
        "Incorrect. While tries make it efficient, this isn't the main benefit.",
        'Incorrect. Congestion depends on network traffic, not routing rules.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'What is the main advantage of using a trie for IP routing table implementation?',
      options: [
        'Reduced memory usage compared to hash tables',
        'Support for hierarchical network structures',
        'Faster updates than binary search trees',
        'Better load balancing capabilities',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Tries often use more memory than hash tables.',
        'Correct! Tries naturally represent the hierarchical nature of IP networks and subnet relationships.',
        'Incorrect. Update performance is not the main advantage.',
        'Incorrect. Load balancing is handled at a different layer.',
      ],
      difficulty: Difficulty.Advanced,
    },
  ],
};

const trieLessons: Record<string, LessonContent> = {
  'trie-basics': trieBasicsData,
  'trie-implementation': trieImplementationData,
  'trie-operations': trieOperationsData,
  'trie-traversal': trieTraversalData,
  'prefix-matching': prefixMatchingData,
  autocomplete: autocompleteSystemData,
  'word-search': patternSearchData,
  'memory-optimization': memoryOptimizationData,
  'concurrent-tries': concurrentTriesData,
  'spell-checker': spellCheckerData,
  'word-break': wordBreakData,
  'xor-problems': xorProblemsData,
  'ip-routing': ipRoutingData,
};
export const trieLessonsTab: LessonsTab = {
  curriculum: trieCurriculum,
  lessons: trieLessons,
};
