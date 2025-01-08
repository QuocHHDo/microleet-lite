import { createProblem, Problem } from '@/common/commonProblem';

export const trieProblems: Problem[] = [
  createProblem(
    'Implement Trie (Prefix Tree) (Leetcode 208)',
    'Medium',
    'Implement a trie with insert, search, and startsWith methods.',
    [
      {
        code: `class TrieNode:
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

    def startsWith(self, prefix):
        node = self.root
        for char in prefix:
            if char not in node.children:
                return False
            node = node.children[char]
        return True`,
        timeComplexity: 'O(m) for insert, search, and startsWith',
        spaceComplexity: 'O(n * m)',
        explanation:
          'This solution implements a Trie with basic operations: insert, search, and startsWith. Each operation traverses the Trie based on the length of the input word or prefix.',
      },
    ],
    'Use a TrieNode class to represent each node in the Trie, and implement the Trie class with insert, search, and startsWith methods.',
    'https://leetcode.com/problems/implement-trie-prefix-tree/',
  ),
  createProblem(
    'Word Search II (Leetcode 212)',
    'Hard',
    'Given an m x n board of characters and a list of words, return all words on the board that can be formed by a sequence of adjacent (horizontally or vertically) cells.',
    [
      {
        code: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.word = None

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.word = word

def findWords(board, words):
    trie = Trie()
    for word in words:
        trie.insert(word)

    def dfs(node, i, j):
        char = board[i][j]
        if char not in node.children:
            return
        node = node.children[char]
        if node.word:
            result.append(node.word)
            node.word = None
        board[i][j] = '#'
        for x, y in [(i+1, j), (i-1, j), (i, j+1), (i, j-1)]:
            if 0 <= x < len(board) and 0 <= y < len(board[0]):
                dfs(node, x, y)
        board[i][j] = char

    result = []
    for i in range(len(board)):
        for j in range(len(board[0])):
            dfs(trie.root, i, j)
    return result`,
        timeComplexity: 'O(m * n * 4^l)',
        spaceComplexity: 'O(k * l)',
        explanation:
          'This solution uses a Trie to store the words and performs a DFS on the board to find all words. The time complexity is determined by the size of the board and the length of the words.',
      },
    ],
    'Use a Trie to store the words and perform a DFS on the board to find all words.',
    'https://leetcode.com/problems/word-search-ii/',
  ),
  createProblem(
    'Design Add and Search Words Data Structure (Leetcode 211)',
    'Medium',
    'Design a data structure that supports adding new words and finding if a string matches any previously added string. The search can contain dots "." which can match any letter.',
    [
      {
        code: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False

class WordDictionary:
    def __init__(self):
        self.root = TrieNode()

    def addWord(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end_of_word = True

    def search(self, word):
        def dfs(node, index):
            if index == len(word):
                return node.is_end_of_word
            char = word[index]
            if char == '.':
                for child in node.children.values():
                    if dfs(child, index + 1):
                        return True
            else:
                if char in node.children:
                    return dfs(node.children[char], index + 1)
            return False
        return dfs(self.root, 0)`,
        timeComplexity: 'O(m) for addWord, O(n * 26^m) for search',
        spaceComplexity: 'O(n * m)',
        explanation:
          'This solution uses a Trie to store the words and performs a DFS for the search operation to handle the wildcard character ".". The time complexity for search is higher due to the wildcard.',
      },
    ],
    'Use a Trie to store the words and perform a DFS for the search operation to handle the wildcard character ".".',
    'https://leetcode.com/problems/design-add-and-search-words-data-structure/',
  ),
  createProblem(
    'Maximum XOR of Two Numbers in an Array (Leetcode 421)',
    'Medium',
    'Given an integer array nums, find the maximum result of nums[i] XOR nums[j], where 0 ≤ i ≤ j < n.',
    [
      {
        code: `class TrieNode:
    def __init__(self):
        self.children = {}

class Trie:
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
        return max_xor

def findMaximumXOR(nums):
    trie = Trie()
    for num in nums:
        trie.insert(num)
    max_xor = 0
    for num in nums:
        max_xor = max(max_xor, trie.find_max_xor(num))
    return max_xor`,
        timeComplexity: 'O(n * 32)',
        spaceComplexity: 'O(n * 32)',
        explanation:
          'This solution uses a Trie to store the binary representation of each number and finds the maximum XOR by traversing the Trie for each number.',
      },
    ],
    'Use a Trie to store the binary representation of each number and find the maximum XOR by traversing the Trie for each number.',
    'https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/',
  ),
  createProblem(
    'Replace Words (Leetcode 648)',
    'Medium',
    'In English, we have a concept called root, which can be followed by some other word to form another longer word - let\'s call this word successor. For example, when the root "an" is followed by the successor word "other", we can form a new word "another". Given a dictionary consisting of many roots and a sentence consisting of words separated by spaces, replace all the successors in the sentence with the root forming it. If a successor can be replaced by more than one root, replace it with the root that has the shortest length.',
    [
      {
        code: `class TrieNode:
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

    def find_root(self, word):
        node = self.root
        for i, char in enumerate(word):
            if char not in node.children:
                break
            node = node.children[char]
            if node.is_end_of_word:
                return word[:i+1]
        return word

def replaceWords(dictionary, sentence):
    trie = Trie()
    for root in dictionary:
        trie.insert(root)
    words = sentence.split()
    for i in range(len(words)):
        words[i] = trie.find_root(words[i])
    return ' '.join(words)`,
        timeComplexity: 'O(n * m)',
        spaceComplexity: 'O(n * m)',
        explanation:
          'This solution uses a Trie to store the roots and replaces each word in the sentence with the shortest root that forms it.',
      },
    ],
    'Use a Trie to store the roots and replace each word in the sentence with the shortest root that forms it.',
    'https://leetcode.com/problems/replace-words/',
  ),
  createProblem(
    'Concatenated Words (Leetcode 472)',
    'Hard',
    'Given a list of words (without duplicates), return all concatenated words in the given list of words. A concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array.',
    [
      {
        code: `class TrieNode:
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

    def is_concatenated(self, word, index, count):
        node = self.root
        for i in range(index, len(word)):
            char = word[i]
            if char not in node.children:
                return False
            node = node.children[char]
            if node.is_end_of_word:
                if i == len(word) - 1:
                    return count >= 1
                if self.is_concatenated(word, i + 1, count + 1):
                    return True
        return False

def findAllConcatenatedWordsInADict(words):
    trie = Trie()
    for word in words:
        trie.insert(word)
    result = []
    for word in words:
        if trie.is_concatenated(word, 0, 0):
            result.append(word)
    return result`,
        timeComplexity: 'O(n * m^2)',
        spaceComplexity: 'O(n * m)',
        explanation:
          'This solution uses a Trie to store the words and checks if each word is a concatenated word by performing a DFS.',
      },
    ],
    'Use a Trie to store the words and check if each word is a concatenated word by performing a DFS.',
    'https://leetcode.com/problems/concatenated-words/',
  ),
];
