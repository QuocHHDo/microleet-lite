import { Difficulty } from "@/common/commonConcept";
import { Curriculum, LessonContent, LessonsTab } from "@/common/commonLesson";

const trieCurriculum: Curriculum = {
    title: 'Trie Curriculum',
    description: 'A comprehensive guide to mastering trie data structure and its applications',
    sections: [
      {
        id: 1,
        title: 'Trie Fundamentals',
        topics: [
          {
            id: 'trie-basics',
            title: 'Trie Basics',
            description: 'Understanding prefix trees and their properties'
          },
          {
            id: 'trie-implementation',
            title: 'Trie Implementation',
            description: 'Building a basic trie structure and node class'
          },
          {
            id: 'trie-operations',
            title: 'Basic Trie Operations',
            description: 'Insert, search, and delete operations'
          }
        ]
      },
      {
        id: 2,
        title: 'Advanced Trie Operations',
        topics: [
          {
            id: 'prefix-matching',
            title: 'Prefix Matching',
            description: 'Finding words with common prefixes'
          },
          {
            id: 'autocomplete',
            title: 'Autocomplete System',
            description: 'Implementing autocomplete functionality'
          },
          {
            id: 'word-search',
            title: 'Pattern Search',
            description: 'Implementing wildcard and regex pattern matching'
          }
        ]
      },
      {
        id: 3,
        title: 'Trie Optimization',
        topics: [
          {
            id: 'memory-optimization',
            title: 'Memory Optimization',
            description: 'Compressed tries and memory-efficient implementations'
          },
          {
            id: 'concurrent-tries',
            title: 'Concurrent Tries',
            description: 'Thread-safe trie implementations'
          }
        ]
      },
      {
        id: 4,
        title: 'Advanced Applications',
        topics: [
          {
            id: 'spell-checker',
            title: 'Spell Checker',
            description: 'Building a spell checker using tries'
          },
          {
            id: 'ip-routing',
            title: 'IP Routing',
            description: 'Using tries for IP address routing tables'
          },
          {
            id: 'xor-problems',
            title: 'XOR Problems',
            description: 'Solving XOR-based problems using tries'
          }
        ]
      }
    ]
  } as const;

  const trieBasicsData: LessonContent = {
    title: 'Trie Basics',
    content: `<p>
  A trie, also known as a prefix tree, is a tree-like data structure that stores a dynamic set of strings. Each node in the trie represents a character of a string, and the path from the root to a node represents a prefix of the stored strings.
  </p>
  
  <ul>
  <li><strong>Properties:</strong> Tries are particularly useful for prefix-based searches and can efficiently store and retrieve strings.</li>
  <li><strong>Structure:</strong> Each node in a trie contains a character, a boolean flag indicating if it is the end of a word, and a list of child nodes.</li>
  </ul>
  
  <p>
  Understanding the basics of tries is crucial for leveraging their efficiency in various applications.
  </p>`,
    codeExample: `# Example of a trie structure
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
  
  # Example usage
  trie = Trie()
  trie.insert("apple")
  print("Search 'apple':", trie.search("apple"))
  print("Search 'app':", trie.search("app"))`,
    exercises: [
      {
        prompt: 'Explain the structure of a trie node and how it represents a character in a string.',
        initialCode: `# Write your explanation here`,
        solution: `A trie node typically contains a dictionary (or hash map) to store its children nodes, where each key represents a character and the value is the corresponding child node. Additionally, a trie node has a boolean flag to indicate if it marks the end of a word.`,
        difficulty: Difficulty.Beginner,
      },
    ],
    quizzes: [
      {
        question: 'What is the primary advantage of using a trie for string storage?',
        options: [
          'Efficient prefix-based searches.',
          'Guaranteed O(1) time complexity for all operations.',
          'Simpler implementation compared to other data structures.',
          'Ability to handle a large number of elements with constant time complexity.',
        ],
        correctAnswer: 0,
        explanations: [
          'This is correct. The primary advantage of using a trie for string storage is its efficient prefix-based searches.',
          'This is incorrect. The time complexity for search in a trie is O(m), where m is the length of the string.',
          'This is incorrect. While the implementation is relatively straightforward, it is not necessarily simpler than other data structures.',
          'This is incorrect. The time complexity for handling a large number of elements is not constant.',
        ],
        difficulty: Difficulty.Beginner,
      },
    ],
  };
  
  const trieImplementationData: LessonContent = {
    title: 'Trie Implementation',
    content: `<p>
  Implementing a trie involves creating a node class and a trie class. The node class represents each character in the trie, while the trie class manages the root node and provides methods for insertion, search, and deletion.
  </p>
  
  <ul>
  <li><strong>Node Class:</strong> Represents a character and contains a dictionary of child nodes and a boolean flag to mark the end of a word.</li>
  <li><strong>Trie Class:</strong> Manages the root node and provides methods for inserting, searching, and deleting words.</li>
  </ul>
  
  <p>
  Understanding and implementing the trie structure is crucial for leveraging its efficiency in various applications.
  </p>`,
    codeExample: `# Trie implementation
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
  
  # Example usage
  trie = Trie()
  trie.insert("apple")
  print("Search 'apple':", trie.search("apple"))
  print("Search 'app':", trie.search("app"))`,
    exercises: [
      {
        prompt: 'Implement a trie node class and a trie class with methods for insertion and search.',
        initialCode: `# Write your solution here
  class TrieNode:
      def __init__(self):
          self.children = {}
          self.is_end_of_word = False
  
  class Trie:
      def __init__(self):
          self.root = TrieNode()
  
      def insert(self, word):
          # Implement insertion
  
      def search(self, word):
          # Implement search
  
  # Example usage
  trie = Trie()
  trie.insert("apple")
  print("Search 'apple':", trie.search("apple"))
  print("Search 'app':", trie.search("app"))`,
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
  
  # Example usage
  trie = Trie()
  trie.insert("apple")
  print("Search 'apple':", trie.search("apple"))
  print("Search 'app':", trie.search("app"))`,
        difficulty: Difficulty.Intermediate,
      },
    ],
    quizzes: [
      {
        question: 'What is the primary purpose of the boolean flag in a trie node?',
        options: [
          'To indicate if the node marks the end of a word.',
          'To store the character represented by the node.',
          'To manage the child nodes of the node.',
          'To determine the depth of the trie.',
        ],
        correctAnswer: 0,
        explanations: [
          'This is correct. The primary purpose of the boolean flag in a trie node is to indicate if the node marks the end of a word.',
          'This is incorrect. The character is stored as the key in the children dictionary.',
          'This is incorrect. The child nodes are managed by the children dictionary.',
          'This is incorrect. The depth of the trie is determined by the number of levels in the tree.',
        ],
        difficulty: Difficulty.Beginner,
      },
    ],
  };
  
  const trieOperationsData: LessonContent = {
    title: 'Basic Trie Operations',
    content: `<p>
  Basic trie operations include insertion, search, and deletion of words. Each operation involves traversing the trie nodes and updating the structure as needed.
  </p>
  
  <ul>
  <li><strong>Insertion:</strong> Traverse the trie and create new nodes for each character in the word if they do not exist.</li>
  <li><strong>Search:</strong> Traverse the trie and check if each character exists in the path. Return true if the word exists, false otherwise.</li>
  <li><strong>Deletion:</strong> Traverse the trie to find the word and mark the end of the word as false. Optionally, remove nodes that are no longer needed.</li>
  </ul>
  
  <p>
  Understanding and implementing these basic operations is crucial for using tries effectively.
  </p>`,
    codeExample: `# Trie operations implementation
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
  
      def delete(self, word):
          def _delete(node, word, depth):
              if depth == len(word):
                  if node.is_end_of_word:
                      node.is_end_of_word = False
                      return len(node.children) == 0
                  return False
  
              char = word[depth]
              if char not in node.children:
                  return False
  
              should_delete_current_node = _delete(node.children[char], word, depth + 1)
  
              if should_delete_current_node:
                  del node.children[char]
                  return len(node.children) == 0
  
              return False
  
          _delete(self.root, word, 0)
  
  # Example usage
  trie = Trie()
  trie.insert("apple")
  trie.insert("app")
  print("Search 'apple':", trie.search("apple"))
  print("Search 'app':", trie.search("app"))
  trie.delete("apple")
  print("Search 'apple' after deletion:", trie.search("apple"))
  print("Search 'app' after deletion:", trie.search("app"))`,
    exercises: [
      {
        prompt: 'Implement the delete operation for a trie and delete the given word from the trie.',
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
  
      def delete(self, word):
          def _delete(node, word, depth):
              if depth == len(word):
                  if node.is_end_of_word:
                      node.is_end_of_word = False
                      return len(node.children) == 0
                  return False
  
              char = word[depth]
              if char not in node.children:
                  return False
  
              should_delete_current_node = _delete(node.children[char], word, depth + 1)
  
              if should_delete_current_node:
                  del node.children[char]
                  return len(node.children) == 0
  
              return False
  
          _delete(self.root, word, 0)
  
  # Example usage
  trie = Trie()
  trie.insert("apple")
  trie.insert("app")
  print("Search 'apple':", trie.search("apple"))
  print("Search 'app':", trie.search("app"))
  trie.delete("apple")
  print("Search 'apple' after deletion:", trie.search("apple"))
  print("Search 'app' after deletion:", trie.search("app"))`,
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
  
      def delete(self, word):
          def _delete(node, word, depth):
              if depth == len(word):
                  if node.is_end_of_word:
                      node.is_end_of_word = False
                      return len(node.children) == 0
                  return False
  
              char = word[depth]
              if char not in node.children:
                  return False
  
              should_delete_current_node = _delete(node.children[char], word, depth + 1)
  
              if should_delete_current_node:
                  del node.children[char]
                  return len(node.children) == 0
  
              return False
  
          _delete(self.root, word, 0)
  
  # Example usage
  trie = Trie()
  trie.insert("apple")
  trie.insert("app")
  print("Search 'apple':", trie.search("apple"))
  print("Search 'app':", trie.search("app"))
  trie.delete("apple")
  print("Search 'apple' after deletion:", trie.search("apple"))
  print("Search 'app' after deletion:", trie.search("app"))`,
        difficulty: Difficulty.Intermediate,
      },
    ],
    quizzes: [
      {
        question: 'What is the primary purpose of the delete operation in a trie?',
        options: [
          'To remove a word from the trie.',
          'To insert a new word into the trie.',
          'To search for a word in the trie.',
          'To update an existing word in the trie.',
        ],
        correctAnswer: 0,
        explanations: [
          'This is correct. The primary purpose of the delete operation in a trie is to remove a word from the trie.',
          'This is incorrect. The insert operation is used to add a new word to the trie.',
          'This is incorrect. The search operation is used to find a word in the trie.',
          'This is incorrect. Tries do not have a specific update operation; instead, you can delete and then insert to update a word.',
        ],
        difficulty: Difficulty.Beginner,
      },
    ],
  };

  const prefixMatchingData: LessonContent = {
    title: 'Prefix Matching',
    content: `<p>
  Prefix matching is a common operation in trie-based data structures, where you need to find all words that share a common prefix. 
  This is particularly useful in applications like search engines and autocomplete systems.
  </p>
  
  <ul>
  <li><strong>Prefix Search:</strong> Given a prefix, find all words in the trie that start with that prefix.</li>
  <li><strong>Efficient Traversal:</strong> Techniques to efficiently traverse the trie and collect all matching words.</li>
  </ul>`,
    codeExample: `# Example of prefix matching in a trie
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
                  return []
              node = node.children[char]
          return self._find_all_words(node, prefix)
  
      def _find_all_words(self, node, prefix):
          words = []
          if node.is_end_of_word:
              words.append(prefix)
          for char, child_node in node.children.items():
              words.extend(self._find_all_words(child_node, prefix + char))
          return words`,
    exercises: [
      {
        prompt: 'Implement a trie that supports prefix matching and can insert, search, and find all words starting with a given prefix.',
        initialCode: `# Write your solution here
  class TrieNode:
      def __init__(self):
          self.children = {}
          self.is_end_of_word = False
  
  class Trie:
      def __init__(self):
          self.root = TrieNode()
  
      def insert(self, word):
          # Implement insertion logic here
  
      def search(self, word):
          # Implement search logic here
  
      def starts_with(self, prefix):
          # Implement prefix matching logic here`,
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
                  return []
              node = node.children[char]
          return self._find_all_words(node, prefix)
  
      def _find_all_words(self, node, prefix):
          words = []
          if node.is_end_of_word:
              words.append(prefix)
          for char, child_node in node.children.items():
              words.extend(self._find_all_words(child_node, prefix + char))
          return words`,
        difficulty: Difficulty.Intermediate,
      },
    ],
    quizzes: [
      {
        question: 'Which of the following is a common use case for prefix matching in a trie?',
        options: [
          'Finding all words with a common suffix',
          'Finding all words with a common prefix',
          'Finding all words with a common substring',
          'Finding all words with a common length',
        ],
        correctAnswer: 1,
        explanations: [
          'This is incorrect. Tries are not typically used for suffix matching.',
          'This is correct. Tries are commonly used for prefix matching.',
          'This is incorrect. Tries are not typically used for substring matching.',
          'This is incorrect. Tries are not typically used for length matching.',
        ],
        difficulty: Difficulty.Intermediate,
      },
      {
        question: 'Which of the following is a technique for efficient prefix matching in a trie?',
        options: [
          'Depth-first search',
          'Breadth-first search',
          'Recursive traversal',
          'All of the above',
        ],
        correctAnswer: 3,
        explanations: [
          'This is incorrect. Depth-first search is not typically used for prefix matching.',
          'This is incorrect. Breadth-first search is not typically used for prefix matching.',
          'This is incorrect. Recursive traversal is not typically used for prefix matching.',
          'This is correct. All of these techniques can be used for efficient prefix matching in a trie.',
        ],
        difficulty: Difficulty.Intermediate,
      },
    ],
  };
  
  const autocompleteSystemData: LessonContent = {
    title: 'Autocomplete System',
    content: `<p>
  An autocomplete system suggests possible completions for a given prefix as the user types. 
  This is a common feature in search engines, text editors, and messaging applications. 
  Implementing an autocomplete system efficiently requires leveraging trie data structures.
  </p>
  
  <ul>
  <li><strong>Prefix Search:</strong> Given a prefix, find all words in the trie that start with that prefix.</li>
  <li><strong>Dynamic Suggestions:</strong> Continuously update suggestions as the user types each character.</li>
  <li><strong>Efficient Storage:</strong> Techniques to store and retrieve words efficiently.</li>
  </ul>`,
    codeExample: `# Example of an autocomplete system using a trie
  class TrieNode:
      def __init__(self):
          self.children = {}
          self.is_end_of_word = False
  
  class AutocompleteSystem:
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
  
      def suggest(self, prefix):
          node = self.root
          for char in prefix:
              if char not in node.children:
                  return []
              node = node.children[char]
          return self._find_all_words(node, prefix)
  
      def _find_all_words(self, node, prefix):
          words = []
          if node.is_end_of_word:
              words.append(prefix)
          for char, child_node in node.children.items():
              words.extend(self._find_all_words(child_node, prefix + char))
          return words`,
    exercises: [
      {
        prompt: 'Implement an autocomplete system using a trie that can insert words, search for words, and suggest completions for a given prefix.',
        initialCode: `# Write your solution here
  class TrieNode:
      def __init__(self):
          self.children = {}
          self.is_end_of_word = False
  
  class AutocompleteSystem:
      def __init__(self):
          self.root = TrieNode()
  
      def insert(self, word):
          # Implement insertion logic here
  
      def search(self, word):
          # Implement search logic here
  
      def suggest(self, prefix):
          # Implement autocomplete logic here`,
        solution: `class TrieNode:
      def __init__(self):
          self.children = {}
          self.is_end_of_word = False
  
  class AutocompleteSystem:
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
  
      def suggest(self, prefix):
          node = self.root
          for char in prefix:
              if char not in node.children:
                  return []
              node = node.children[char]
          return self._find_all_words(node, prefix)
  
      def _find_all_words(self, node, prefix):
          words = []
          if node.is_end_of_word:
              words.append(prefix)
          for char, child_node in node.children.items():
              words.extend(self._find_all_words(child_node, prefix + char))
          return words`,
        difficulty: Difficulty.Intermediate,
      },
    ],
    quizzes: [
      {
        question: 'Which of the following is a common feature of an autocomplete system?',
        options: [
          'Suggesting words based on suffixes',
          'Suggesting words based on prefixes',
          'Suggesting words based on substrings',
          'Suggesting words based on word length',
        ],
        correctAnswer: 1,
        explanations: [
          'This is incorrect. Autocomplete systems typically suggest words based on prefixes.',
          'This is correct. Autocomplete systems typically suggest words based on prefixes.',
          'This is incorrect. Autocomplete systems typically suggest words based on prefixes.',
          'This is incorrect. Autocomplete systems typically suggest words based on prefixes.',
        ],
        difficulty: Difficulty.Intermediate,
      },
      {
        question: 'Which of the following is a technique for efficient autocomplete in a trie?',
        options: [
          'Depth-first search',
          'Breadth-first search',
          'Recursive traversal',
          'All of the above',
        ],
        correctAnswer: 3,
        explanations: [
          'This is incorrect. Depth-first search is not typically used for autocomplete.',
          'This is incorrect. Breadth-first search is not typically used for autocomplete.',
          'This is incorrect. Recursive traversal is not typically used for autocomplete.',
          'This is correct. All of these techniques can be used for efficient autocomplete in a trie.',
        ],
        difficulty: Difficulty.Intermediate,
      },
    ],
  };
  
  const patternSearchData: LessonContent = {
    title: 'Pattern Search',
    content: `<p>
  Pattern search in a trie involves finding words that match a given pattern, which can include wildcards and regular expressions. 
  This is a more advanced use case of trie data structures, often used in text processing and search applications.
  </p>
  
  <ul>
  <li><strong>Wildcard Matching:</strong> Finding words that match a pattern with wildcards (e.g., "c?t" where "?" can be any character).</li>
  <li><strong>Regex Matching:</strong> Finding words that match a regular expression pattern.</li>
  <li><strong>Efficient Search:</strong> Techniques to efficiently search for patterns in a trie.</li>
  </ul>`,
    codeExample: `# Example of pattern search in a trie
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
  
      def pattern_search(self, pattern):
          return self._search_pattern(self.root, pattern, "")
  
      def _search_pattern(self, node, pattern, current_word):
          if not pattern:
              if node.is_end_of_word:
                  return [current_word]
              return []
  
          char = pattern[0]
          if char == "?":
              results = []
              for child_char, child_node in node.children.items():
                  results.extend(self._search_pattern(child_node, pattern[1:], current_word + child_char))
              return results
          elif char in node.children:
              return self._search_pattern(node.children[char], pattern[1:], current_word + char)
          else:
              return []`,
    exercises: [
      {
        prompt: 'Implement a trie that supports pattern search with wildcards and can insert, search, and find all words matching a given pattern.',
        initialCode: `# Write your solution here
  class TrieNode:
      def __init__(self):
          self.children = {}
          self.is_end_of_word = False
  
  class Trie:
      def __init__(self):
          self.root = TrieNode()
  
      def insert(self, word):
          # Implement insertion logic here
  
      def search(self, word):
          # Implement search logic here
  
      def pattern_search(self, pattern):
          # Implement pattern search logic here`,
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
  
      def pattern_search(self, pattern):
          return self._search_pattern(self.root, pattern, "")
  
      def _search_pattern(self, node, pattern, current_word):
          if not pattern:
              if node.is_end_of_word:
                  return [current_word]
              return []
  
          char = pattern[0]
          if char == "?":
              results = []
              for child_char, child_node in node.children.items():
                  results.extend(self._search_pattern(child_node, pattern[1:], current_word + child_char))
              return results
          elif char in node.children:
              return self._search_pattern(node.children[char], pattern[1:], current_word + char)
          else:
              return []`,
        difficulty: Difficulty.Advanced,
      },
    ],
    quizzes: [
      {
        question: 'Which of the following is a common use case for pattern search in a trie?',
        options: [
          'Finding all words with a common suffix',
          'Finding all words with a common prefix',
          'Finding all words matching a wildcard pattern',
          'Finding all words with a common length',
        ],
        correctAnswer: 2,
        explanations: [
          'This is incorrect. Tries are not typically used for suffix matching.',
          'This is incorrect. This is a use case for prefix matching, not pattern search.',
          'This is correct. Pattern search in a trie can be used to find words matching a wildcard pattern.',
          'This is incorrect. Tries are not typically used for length matching.',
        ],
        difficulty: Difficulty.Advanced,
      },
      {
        question: 'Which of the following is a technique for efficient pattern search in a trie?',
        options: [
          'Depth-first search',
          'Breadth-first search',
          'Recursive traversal',
          'All of the above',
        ],
        correctAnswer: 3,
        explanations: [
          'This is incorrect. Depth-first search is not typically used for pattern search.',
          'This is incorrect. Breadth-first search is not typically used for pattern search.',
          'This is incorrect. Recursive traversal is not typically used for pattern search.',
          'This is correct. All of these techniques can be used for efficient pattern search in a trie.',
        ],
        difficulty: Difficulty.Advanced,
      },
    ],
  };
  
  const memoryOptimizationData: LessonContent = {
    title: 'Memory Optimization',
    content: `<p>
  Memory optimization is crucial for efficient use of resources, especially when dealing with large datasets. 
  Compressed tries and memory-efficient implementations are techniques that help reduce the memory footprint of a trie.
  </p>
  
  <ul>
  <li><strong>Compressed Tries:</strong> Also known as Patricia tries, these are a form of space-optimized trie where each node represents a sequence of characters rather than a single character. This reduces the number of nodes and thus the memory usage.</li>
  <li><strong>Memory-Efficient Implementations:</strong> Techniques such as using bitmaps or arrays to store child nodes can further reduce memory usage. These methods trade off some computational efficiency for a smaller memory footprint.</li>
  </ul>`,
    codeExample: `# Example of a compressed trie (Patricia trie)
  class TrieNode:
      def __init__(self):
          self.children = {}
          self.is_end_of_word = False
  
  class CompressedTrie:
      def __init__(self):
          self.root = TrieNode()
  
      def insert(self, word):
          node = self.root
          for char in word:
              if char not in node.children:
                  node.children[char] = TrieNode()
              node = node.children[char]
          node.is_end_of_word = True
  
  # Example of memory-efficient implementation using arrays
  class ArrayTrieNode:
      def __init__(self):
          self.children = [None] * 26  # Assuming only lowercase English letters
          self.is_end_of_word = False
  
  class ArrayTrie:
      def __init__(self):
          self.root = ArrayTrieNode()
  
      def insert(self, word):
          node = self.root
          for char in word:
              index = ord(char) - ord('a')
              if not node.children[index]:
                  node.children[index] = ArrayTrieNode()
              node = node.children[index]
          node.is_end_of_word = True`,
    exercises: [
      {
        prompt: 'Implement a compressed trie (Patricia trie) that can insert and search for words.',
        initialCode: `# Write your solution here
  class TrieNode:
      def __init__(self):
          self.children = {}
          self.is_end_of_word = False
  
  class CompressedTrie:
      def __init__(self):
          self.root = TrieNode()
  
      def insert(self, word):
          # Implement insertion logic here
  
      def search(self, word):
          # Implement search logic here`,
        solution: `class TrieNode:
      def __init__(self):
          self.children = {}
          self.is_end_of_word = False
  
  class CompressedTrie:
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
          return node.is_end_of_word`,
        difficulty: Difficulty.Intermediate,
      },
      {
        prompt: 'Implement a memory-efficient trie using arrays that can insert and search for words.',
        initialCode: `# Write your solution here
  class ArrayTrieNode:
      def __init__(self):
          self.children = [None] * 26  # Assuming only lowercase English letters
          self.is_end_of_word = False
  
  class ArrayTrie:
      def __init__(self):
          self.root = ArrayTrieNode()
  
      def insert(self, word):
          # Implement insertion logic here
  
      def search(self, word):
          # Implement search logic here`,
        solution: `class ArrayTrieNode:
      def __init__(self):
          self.children = [None] * 26  # Assuming only lowercase English letters
          self.is_end_of_word = False
  
  class ArrayTrie:
      def __init__(self):
          self.root = ArrayTrieNode()
  
      def insert(self, word):
          node = self.root
          for char in word:
              index = ord(char) - ord('a')
              if not node.children[index]:
                  node.children[index] = ArrayTrieNode()
              node = node.children[index]
          node.is_end_of_word = True
  
      def search(self, word):
          node = self.root
          for char in word:
              index = ord(char) - ord('a')
              if not node.children[index]:
                  return False
              node = node.children[index]
          return node.is_end_of_word`,
        difficulty: Difficulty.Intermediate,
      },
    ],
    quizzes: [
      {
        question: 'Which of the following is a benefit of using a compressed trie (Patricia trie)?',
        options: [
          'Increased memory usage',
          'Reduced number of nodes',
          'Slower search times',
          'Increased complexity of insertion',
        ],
        correctAnswer: 1,
        explanations: [
          'This is incorrect. Compressed tries reduce memory usage.',
          'This is correct. Compressed tries reduce the number of nodes, thus reducing memory usage.',
          'This is incorrect. Compressed tries generally have similar search times to regular tries.',
          'This is incorrect. While insertion may be slightly more complex, the primary benefit is memory reduction.',
        ],
        difficulty: Difficulty.Intermediate,
      },
      {
        question: 'Which of the following is a technique for memory-efficient trie implementations?',
        options: [
          'Using linked lists for child nodes',
          'Using arrays for child nodes',
          'Using hash maps for child nodes',
          'Using binary trees for child nodes',
        ],
        correctAnswer: 1,
        explanations: [
          'This is incorrect. Linked lists do not provide memory efficiency.',
          'This is correct. Arrays can be used to store child nodes, providing memory efficiency.',
          'This is incorrect. Hash maps can be memory-intensive.',
          'This is incorrect. Binary trees are not typically used for trie implementations.',
        ],
        difficulty: Difficulty.Intermediate,
      },
    ],
  };
  
  const concurrentTriesData: LessonContent = {
    title: 'Concurrent Tries',
    content: `<p>
  Concurrent tries are designed to handle multiple threads accessing the trie simultaneously. 
  Thread-safe implementations ensure that the trie remains consistent and free from race conditions.
  </p>
  
  <ul>
  <li><strong>Lock-Based Synchronization:</strong> Using locks to ensure that only one thread can modify the trie at a time.</li>
  <li><strong>Lock-Free Data Structures:</strong> Implementing lock-free algorithms that allow multiple threads to access the trie without the need for locks.</li>
  <li><strong>Read-Write Locks:</strong> Using read-write locks to allow multiple readers but only one writer at a time.</li>
  </ul>`,
    codeExample: `# Example of a concurrent trie using read-write locks
  from threading import RLock, Thread
  
  class TrieNode:
      def __init__(self):
          self.children = {}
          self.is_end_of_word = False
          self.lock = RLock()
  
  class ConcurrentTrie:
      def __init__(self):
          self.root = TrieNode()
  
      def insert(self, word):
          with self.root.lock:
              node = self.root
              for char in word:
                  if char not in node.children:
                      node.children[char] = TrieNode()
                  node = node.children[char]
              node.is_end_of_word = True
  
      def search(self, word):
          with self.root.lock:
              node = self.root
              for char in word:
                  if char not in node.children:
                      return False
                  node = node.children[char]
              return node.is_end_of_word`,
    exercises: [
      {
        prompt: 'Implement a concurrent trie using read-write locks that can insert and search for words.',
        initialCode: `# Write your solution here
  from threading import RLock, Thread
  
  class TrieNode:
      def __init__(self):
          self.children = {}
          self.is_end_of_word = False
          self.lock = RLock()
  
  class ConcurrentTrie:
      def __init__(self):
          self.root = TrieNode()
  
      def insert(self, word):
          # Implement insertion logic here
  
      def search(self, word):
          # Implement search logic here`,
        solution: `from threading import RLock, Thread
  
  class TrieNode:
      def __init__(self):
          self.children = {}
          self.is_end_of_word = False
          self.lock = RLock()
  
  class ConcurrentTrie:
      def __init__(self):
          self.root = TrieNode()
  
      def insert(self, word):
          with self.root.lock:
              node = self.root
              for char in word:
                  if char not in node.children:
                      node.children[char] = TrieNode()
                  node = node.children[char]
              node.is_end_of_word = True
  
      def search(self, word):
          with self.root.lock:
              node = self.root
              for char in word:
                  if char not in node.children:
                      return False
                  node = node.children[char]
              return node.is_end_of_word`,
        difficulty: Difficulty.Advanced,
      },
      {
        prompt: 'Implement a lock-free concurrent trie that can insert and search for words.',
        initialCode: `# Write your solution here
  import threading
  
  class TrieNode:
      def __init__(self):
          self.children = {}
          self.is_end_of_word = False
  
  class LockFreeTrie:
      def __init__(self):
          self.root = TrieNode()
  
      def insert(self, word):
          # Implement lock-free insertion logic here
  
      def search(self, word):
          # Implement lock-free search logic here`,
        solution: `import threading
  
  class TrieNode:
      def __init__(self):
          self.children = {}
          self.is_end_of_word = False
  
  class LockFreeTrie:
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
          return node.is_end_of_word`,
        difficulty: Difficulty.Advanced,
      },
    ],
    quizzes: [
      {
        question: 'Which of the following is a technique for ensuring thread safety in a trie?',
        options: [
          'Using locks',
          'Using arrays',
          'Using linked lists',
          'Using binary trees',
        ],
        correctAnswer: 0,
        explanations: [
          'This is correct. Locks are used to ensure that only one thread can modify the trie at a time.',
          'This is incorrect. Arrays are used for memory efficiency, not thread safety.',
          'This is incorrect. Linked lists are not typically used for thread safety.',
          'This is incorrect. Binary trees are not typically used for thread safety.',
        ],
        difficulty: Difficulty.Advanced,
      },
      {
        question: 'Which of the following is a benefit of using lock-free data structures in a concurrent trie?',
        options: [
          'Increased complexity',
          'Reduced performance',
          'No need for locks',
          'Increased memory usage',
        ],
        correctAnswer: 2,
        explanations: [
          'This is incorrect. Lock-free data structures can be more complex, but they offer benefits in concurrency.',
          'This is incorrect. Lock-free data structures generally improve performance by reducing contention.',
          'This is correct. Lock-free data structures allow multiple threads to access the trie without the need for locks.',
          'This is incorrect. Lock-free data structures do not necessarily increase memory usage.',
        ],
        difficulty: Difficulty.Advanced,
      },
    ],
  };

  const spellCheckerData: LessonContent = {
    title: 'Spell Checker',
    content: `<p>
  A spell checker is a tool that identifies and corrects misspelled words. 
  Building a spell checker using tries allows for efficient word lookups and suggestions. 
  This is particularly useful in text editors, search engines, and messaging applications.
  </p>
  
  <ul>
  <li><strong>Word Insertion:</strong> Inserting a dictionary of valid words into the trie.</li>
  <li><strong>Word Search:</strong> Searching for a word in the trie to determine if it is correctly spelled.</li>
  <li><strong>Suggestions:</strong> Providing suggestions for misspelled words based on the closest matches in the trie.</li>
  </ul>`,
    codeExample: `# Example of a spell checker using a trie
  class TrieNode:
      def __init__(self):
          self.children = {}
          self.is_end_of_word = False
  
  class SpellChecker:
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
  
      def suggest(self, word, max_suggestions=3):
          suggestions = []
          self._find_suggestions(self.root, word, "", suggestions, max_suggestions)
          return suggestions
  
      def _find_suggestions(self, node, word, current_word, suggestions, max_suggestions):
          if len(suggestions) >= max_suggestions:
              return
          if node.is_end_of_word:
              suggestions.append(current_word)
          for char, child_node in node.children.items():
              self._find_suggestions(child_node, word, current_word + char, suggestions, max_suggestions)`,
    exercises: [
      {
        prompt: 'Implement a spell checker using a trie that can insert words, search for words, and suggest corrections for misspelled words.',
        initialCode: `# Write your solution here
  class TrieNode:
      def __init__(self):
          self.children = {}
          self.is_end_of_word = False
  
  class SpellChecker:
      def __init__(self):
          self.root = TrieNode()
  
      def insert(self, word):
          # Implement insertion logic here
  
      def search(self, word):
          # Implement search logic here
  
      def suggest(self, word, max_suggestions=3):
          # Implement suggestion logic here`,
        solution: `class TrieNode:
      def __init__(self):
          self.children = {}
          self.is_end_of_word = False
  
  class SpellChecker:
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
  
      def suggest(self, word, max_suggestions=3):
          suggestions = []
          self._find_suggestions(self.root, word, "", suggestions, max_suggestions)
          return suggestions
  
      def _find_suggestions(self, node, word, current_word, suggestions, max_suggestions):
          if len(suggestions) >= max_suggestions:
              return
          if node.is_end_of_word:
              suggestions.append(current_word)
          for char, child_node in node.children.items():
              self._find_suggestions(child_node, word, current_word + char, suggestions, max_suggestions)`,
        difficulty: Difficulty.Advanced,
      },
    ],
    quizzes: [
      {
        question: 'Which of the following is a common use case for a spell checker?',
        options: [
          'Finding all words with a common suffix',
          'Identifying and correcting misspelled words',
          'Finding all words with a common substring',
          'Finding all words with a common length',
        ],
        correctAnswer: 1,
        explanations: [
          'This is incorrect. Spell checkers are not typically used for suffix matching.',
          'This is correct. Spell checkers are used to identify and correct misspelled words.',
          'This is incorrect. Spell checkers are not typically used for substring matching.',
          'This is incorrect. Spell checkers are not typically used for length matching.',
        ],
        difficulty: Difficulty.Advanced,
      },
      {
        question: 'Which of the following is a technique for efficient spell checking using a trie?',
        options: [
          'Depth-first search',
          'Breadth-first search',
          'Recursive traversal',
          'All of the above',
        ],
        correctAnswer: 3,
        explanations: [
          'This is incorrect. Depth-first search is not typically used for spell checking.',
          'This is incorrect. Breadth-first search is not typically used for spell checking.',
          'This is incorrect. Recursive traversal is not typically used for spell checking.',
          'This is correct. All of these techniques can be used for efficient spell checking in a trie.',
        ],
        difficulty: Difficulty.Advanced,
      },
    ],
  };
  
  const ipRoutingData: LessonContent = {
    title: 'IP Routing',
    content: `<p>
  IP routing is the process of selecting a path across one or more networks. 
  Using tries for IP address routing tables allows for efficient lookups and routing decisions. 
  This is particularly useful in networking devices like routers.
  </p>
  
  <ul>
  <li><strong>IP Address Insertion:</strong> Inserting IP addresses and their corresponding routes into the trie.</li>
  <li><strong>Route Lookup:</strong> Finding the best matching route for a given IP address.</li>
  <li><strong>Efficient Routing:</strong> Techniques to efficiently store and retrieve routing information.</li>
  </ul>`,
    codeExample: `# Example of IP routing using a trie
  class TrieNode:
      def __init__(self):
          self.children = {}
          self.route = None
  
  class IPRouter:
      def __init__(self):
          self.root = TrieNode()
  
      def insert(self, ip_address, route):
          node = self.root
          for char in ip_address:
              if char not in node.children:
                  node.children[char] = TrieNode()
              node = node.children[char]
          node.route = route
  
      def lookup(self, ip_address):
          node = self.root
          for char in ip_address:
              if char not in node.children:
                  return None
              node = node.children[char]
          return node.route`,
    exercises: [
      {
        prompt: 'Implement an IP routing system using a trie that can insert IP addresses and their corresponding routes, and lookup the best matching route for a given IP address.',
        initialCode: `# Write your solution here
  class TrieNode:
      def __init__(self):
          self.children = {}
          self.route = None
  
  class IPRouter:
      def __init__(self):
          self.root = TrieNode()
  
      def insert(self, ip_address, route):
          # Implement insertion logic here
  
      def lookup(self, ip_address):
          # Implement lookup logic here`,
        solution: `class TrieNode:
      def __init__(self):
          self.children = {}
          self.route = None
  
  class IPRouter:
      def __init__(self):
          self.root = TrieNode()
  
      def insert(self, ip_address, route):
          node = self.root
          for char in ip_address:
              if char not in node.children:
                  node.children[char] = TrieNode()
              node = node.children[char]
          node.route = route
  
      def lookup(self, ip_address):
          node = self.root
          for char in ip_address:
              if char not in node.children:
                  return None
              node = node.children[char]
          return node.route`,
        difficulty: Difficulty.Advanced,
      },
    ],
    quizzes: [
      {
        question: 'Which of the following is a common use case for IP routing using a trie?',
        options: [
          'Finding all words with a common suffix',
          'Identifying and correcting misspelled words',
          'Finding the best matching route for a given IP address',
          'Finding all words with a common length',
        ],
        correctAnswer: 2,
        explanations: [
          'This is incorrect. IP routing is not typically used for suffix matching.',
          'This is incorrect. IP routing is not typically used for spell checking.',
          'This is correct. IP routing is used to find the best matching route for a given IP address.',
          'This is incorrect. IP routing is not typically used for length matching.',
        ],
        difficulty: Difficulty.Advanced,
      },
      {
        question: 'Which of the following is a technique for efficient IP routing using a trie?',
        options: [
          'Depth-first search',
          'Breadth-first search',
          'Recursive traversal',
          'All of the above',
        ],
        correctAnswer: 3,
        explanations: [
          'This is incorrect. Depth-first search is not typically used for IP routing.',
          'This is incorrect. Breadth-first search is not typically used for IP routing.',
          'This is incorrect. Recursive traversal is not typically used for IP routing.',
          'This is correct. All of these techniques can be used for efficient IP routing in a trie.',
        ],
        difficulty: Difficulty.Advanced,
      },
    ],
  };
  
  const xorProblemsData: LessonContent = {
    title: 'XOR Problems',
    content: `<p>
  XOR (exclusive OR) is a bitwise operation that is often used in various algorithmic problems. 
  Solving XOR-based problems using tries allows for efficient lookups and computations. 
  This is particularly useful in competitive programming and cryptography.
  </p>
  
  <ul>
  <li><strong>XOR Insertion:</strong> Inserting numbers into the trie in their binary form.</li>
  <li><strong>XOR Search:</strong> Finding the maximum XOR value for a given number.</li>
  <li><strong>Efficient Computation:</strong> Techniques to efficiently compute XOR values using a trie.</li>
  </ul>`,
    codeExample: `# Example of solving XOR problems using a trie
  class TrieNode:
      def __init__(self):
          self.children = {}
  
  class XORSolver:
      def __init__(self):
          self.root = TrieNode()
  
      def insert(self, num):
          node = self.root
          for i in range(31, -1, -1):
              bit = (num >> i) & 1
              if bit not in node.children:
                  node.children[bit] = TrieNode()
              node = node.children[bit]
  
      def find_max_xor(self, num):
          node = self.root
          max_xor = 0
          for i in range(31, -1, -1):
              bit = (num >> i) & 1
              opposite_bit = 1 - bit
              if opposite_bit in node.children:
                  max_xor |= (1 << i)
                  node = node.children[opposite_bit]
              else:
                  node = node.children[bit]
          return max_xor`,
    exercises: [
      {
        prompt: 'Implement a solver for XOR problems using a trie that can insert numbers and find the maximum XOR value for a given number.',
        initialCode: `# Write your solution here
  class TrieNode:
      def __init__(self):
          self.children = {}
  
  class XORSolver:
      def __init__(self):
          self.root = TrieNode()
  
      def insert(self, num):
          # Implement insertion logic here
  
      def find_max_xor(self, num):
          # Implement maximum XOR logic here`,
        solution: `class TrieNode:
      def __init__(self):
          self.children = {}
  
  class XORSolver:
      def __init__(self):
          self.root = TrieNode()
  
      def insert(self, num):
          node = self.root
          for i in range(31, -1, -1):
              bit = (num >> i) & 1
              if bit not in node.children:
                  node.children[bit] = TrieNode()
              node = node.children[bit]
  
      def find_max_xor(self, num):
          node = self.root
          max_xor = 0
          for i in range(31, -1, -1):
              bit = (num >> i) & 1
              opposite_bit = 1 - bit
              if opposite_bit in node.children:
                  max_xor |= (1 << i)
                  node = node.children[opposite_bit]
              else:
                  node = node.children[bit]
          return max_xor`,
        difficulty: Difficulty.Advanced,
      },
    ],
    quizzes: [
      {
        question: 'Which of the following is a common use case for solving XOR problems using a trie?',
        options: [
          'Finding all words with a common suffix',
          'Identifying and correcting misspelled words',
          'Finding the maximum XOR value for a given number',
          'Finding all words with a common length',
        ],
        correctAnswer: 2,
        explanations: [
          'This is incorrect. XOR problems are not typically used for suffix matching.',
          'This is incorrect. XOR problems are not typically used for spell checking.',
          'This is correct. XOR problems are used to find the maximum XOR value for a given number.',
          'This is incorrect. XOR problems are not typically used for length matching.',
        ],
        difficulty: Difficulty.Advanced,
      },
      {
        question: 'Which of the following is a technique for efficient XOR computation using a trie?',
        options: [
          'Depth-first search',
          'Breadth-first search',
          'Recursive traversal',
          'All of the above',
        ],
        correctAnswer: 3,
        explanations: [
          'This is incorrect. Depth-first search is not typically used for XOR computation.',
          'This is incorrect. Breadth-first search is not typically used for XOR computation.',
          'This is incorrect. Recursive traversal is not typically used for XOR computation.',
          'This is correct. All of these techniques can be used for efficient XOR computation in a trie.',
        ],
        difficulty: Difficulty.Advanced,
      },
    ],
  };
  
  const trieLessons: Record<string, LessonContent> = {
    'trie-basics': trieBasicsData,
    'trie-implementation': trieImplementationData,
    'trie-operations': trieOperationsData,
    'prefix-matching': prefixMatchingData,
    'autocomplete': autocompleteSystemData,
    'word-search': patternSearchData,
    'memory-optimization': memoryOptimizationData,
    'concurrent-tries': concurrentTriesData,
    'spell-checker': spellCheckerData,
    'ip-routing': ipRoutingData,
    'xor-problems': xorProblemsData
  }
export const trieLessonsTab: LessonsTab = {
    curriculum: trieCurriculum,
    lessons: trieLessons
}