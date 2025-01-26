import {
  CheatSheetItem,
  createCheatSheet,
  OperationTypes,
} from '@/common/commonCheatSheet';

export const trieCheatSheet: CheatSheetItem[] = [
  // CREATE
  createCheatSheet(
    'Creating a Trie',
    `class TrieNode:
  def __init__(self):
    self.children = {}
    self.is_end_of_word = False

class Trie:
  def __init__(self):
    self.root = TrieNode()`,
    'Initializes a Trie with a root node containing an empty dictionary of children and a flag to mark the end of a word.',
    OperationTypes.Create,
    'O(1)',
    'Memory usage can grow significantly if storing many words or large alphabets.',
  ),

  // ADD
  createCheatSheet(
    'Inserting a word',
    `def insert(self, word):
  node = self.root
  for char in word:
    if char not in node.children:
      node.children[char] = TrieNode()
    node = node.children[char]
  node.is_end_of_word = True`,
    'Adds a new word to the Trie character by character.',
    OperationTypes.Add,
    'O(m)',
    'm is the length of the word. Large words can slow insertion.',
  ),

  // REMOVE
  createCheatSheet(
    'Deleting a word',
    `def delete(self, word):
  def _delete_helper(node, word, index):
    if index == len(word):
      if not node.is_end_of_word:
        return False
      node.is_end_of_word = False
      return len(node.children) == 0
    char = word[index]
    if char not in node.children:
      return False
    should_delete_current_node = _delete_helper(node.children[char], word, index + 1)
    if should_delete_current_node:
      del node.children[char]
      return len(node.children) == 0
    return False

  _delete_helper(self.root, word, 0)`,
    'Removes a word from the Trie if it exists.',
    OperationTypes.Remove,
    'O(m)',
    'm is the length of the word. Deletion might also remove unnecessary nodes.',
  ),
  createCheatSheet(
    'Clearing the Trie',
    `def clear(self):
  self.root = TrieNode()`,
    'Removes all words from the Trie, resetting its root.',
    OperationTypes.Remove,
    'O(1)',
    'Does not free memory immediately; garbage collection depends on references.',
  ),

  // SEARCH
  createCheatSheet(
    'Searching for a word',
    `def search(self, word):
  node = self.root
  for char in word:
    if char not in node.children:
      return False
    node = node.children[char]
  return node.is_end_of_word`,
    'Checks if a complete word exists in the Trie.',
    OperationTypes.Search,
    'O(m)',
    'm is the length of the word.',
  ),
  createCheatSheet(
    'Prefix search',
    `def starts_with(self, prefix):
  node = self.root
  for char in prefix:
    if char not in node.children:
      return False
    node = node.children[char]
  return True`,
    'Checks if any word in the Trie starts with a given prefix.',
    OperationTypes.Search,
    'O(m)',
    'm is the length of the prefix.',
  ),
  createCheatSheet(
    'Finding all words with a prefix',
    `def find_all_words(self, prefix):
  def _dfs(node, prefix, words):
    if node.is_end_of_word:
      words.append(prefix)
    for char, child_node in node.children.items():
      _dfs(child_node, prefix + char, words)

  words = []
  node = self.root
  for char in prefix:
    if char not in node.children:
      return words
    node = node.children[char]
  _dfs(node, prefix, words)
  return words`,
    'Returns all words in the Trie that share a given prefix.',
    OperationTypes.Search,
    'O(m + n)',
    'm is the prefix length; n is the number of matched paths/words.',
  ),

  // UTILITY
  createCheatSheet(
    'Counting words',
    `def count_words(self):
  def _count_helper(node):
    count = 0
    if node.is_end_of_word:
      count += 1
    for child in node.children.values():
      count += _count_helper(child)
    return count

  return _count_helper(self.root)`,
    'Counts the total number of distinct words stored in the Trie.',
    OperationTypes.Utility,
    'O(n)',
    'n is the total number of Trie nodes. Large tries can be slow to traverse.',
  ),
  createCheatSheet(
    'Finding the longest prefix',
    `def longest_prefix(self):
  def _longest_prefix_helper(node, prefix):
    if len(node.children) != 1 or node.is_end_of_word:
      return prefix
    char = next(iter(node.children))
    return _longest_prefix_helper(node.children[char], prefix + char)

  if not self.root.children:
    return ""
  # Start from the single child if it exists
  return _longest_prefix_helper(next(iter(self.root.children)), "")`,
    'Finds the longest common prefix shared by all words in the Trie.',
    OperationTypes.Utility,
    'O(m)',
    'm depends on common prefix depth. If the Trie has no words, the result is empty.',
  ),
  createCheatSheet(
    'Checking if the Trie is empty',
    `def is_empty(self):
  return not self.root.children`,
    'Returns True if the Trie has no child nodes, meaning it stores no words.',
    OperationTypes.Utility,
    'O(1)',
    'N/A',
  ),
];
