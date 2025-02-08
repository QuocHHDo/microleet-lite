import {
  CheatSheetItem,
  createCheatSheet,
  OperationTypes,
} from '@/common/commonCheatSheet';

export const treeCheatSheet: CheatSheetItem[] = [
  // CREATE
  createCheatSheet(
    'Creating a binary tree node',
    `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right`,
    'Defines a class for a binary tree node with a value, left child, and right child.',
    OperationTypes.Create,
    'O(1)',
    'N/A',
  ),

  // ADD
  createCheatSheet(
    'Inserting a node in a BST',
    `def insert(root, val):
    if not root:
        return TreeNode(val)
    if val < root.val:
        root.left = insert(root.left, val)
    else:
        root.right = insert(root.right, val)
    return root`,
    'Inserts a node with the given value into a binary search tree (BST).',
    OperationTypes.Add,
    'O(log n) on average, O(n) worst case',
    'The worst case occurs when the tree is skewed (like a linked list).',
  ),

  // REMOVE
  createCheatSheet(
    'Deleting a node in a BST',
    `def delete(root, val):
    if not root:
        return root
    if val < root.val:
        root.left = delete(root.left, val)
    elif val > root.val:
        root.right = delete(root.right, val)
    else:
        if not root.left:
            return root.right
        elif not root.right:
            return root.left
        temp = find_min(root.right)
        root.val = temp.val
        root.right = delete(root.right, temp.val)
    return root

def find_min(node):
    while node.left:
        node = node.left
    return node`,
    'Deletes a node with the given value from a BST.',
    OperationTypes.Remove,
    'O(log n) on average, O(n) worst case',
    'The worst case is a skewed BST.',
  ),

  // SEARCH
  createCheatSheet(
    'Searching for a node in a BST',
    `def search(root, val):
    if not root or root.val == val:
        return root
    if val < root.val:
        return search(root.left, val)
    return search(root.right, val)`,
    'Searches for a node with the given value in a BST.',
    OperationTypes.Search,
    'O(log n) on average, O(n) worst case',
    'The worst case occurs in a skewed tree.',
  ),
  createCheatSheet(
    'Finding the lowest common ancestor (LCA) in a BST',
    `def lca(root, p, q):
    while root:
        if p.val < root.val > q.val:
            root = root.left
        elif p.val > root.val < q.val:
            root = root.right
        else:
            return root`,
    'Finds the LCA of two nodes in a BST, leveraging BST properties.',
    OperationTypes.Search,
    'O(log n) on average, O(n) worst case',
    'Skewed tree leads to worst-case time complexity.',
  ),
  createCheatSheet(
    'Finding the lowest common ancestor (LCA) in a binary tree',
    `def lca(root, p, q):
    if not root or root == p or root == q:
        return root
    left = lca(root.left, p, q)
    right = lca(root.right, p, q)
    return root if left and right else left or right`,
    'Finds the LCA of two nodes in a general binary tree (no BST properties assumed).',
    OperationTypes.Search,
    'O(n)',
    'Traverses all nodes in the worst case.',
  ),

  // TRAVERSAL
  createCheatSheet(
    'In-order traversal',
    `def in_order(root):
    if root:
        in_order(root.left)
        print(root.val)
        in_order(root.right)`,
    'Traverses the tree in an in-order fashion (left, root, right), printing values in sorted order for a BST.',
    OperationTypes.Traversal,
    'O(n)',
    'N/A',
  ),
  createCheatSheet(
    'Pre-order traversal',
    `def pre_order(root):
    if root:
        print(root.val)
        pre_order(root.left)
        pre_order(root.right)`,
    'Traverses the tree in a pre-order fashion (root, left, right).',
    OperationTypes.Traversal,
    'O(n)',
    'N/A',
  ),
  createCheatSheet(
    'Post-order traversal',
    `def post_order(root):
    if root:
        post_order(root.left)
        post_order(root.right)
        print(root.val)`,
    'Traverses the tree in a post-order fashion (left, right, root).',
    OperationTypes.Traversal,
    'O(n)',
    'N/A',
  ),
  createCheatSheet(
    'Level-order traversal (BFS)',
    `from collections import deque

def level_order(root):
    if not root:
        return
    queue = deque([root])
    while queue:
        node = queue.popleft()
        print(node.val)
        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)`,
    'Traverses the tree level by level (BFS).',
    OperationTypes.Traversal,
    'O(n)',
    'N/A',
  ),

  // UTILITY
  createCheatSheet(
    'Finding the height of a tree',
    `def height(root):
    if not root:
        return 0
    return 1 + max(height(root.left), height(root.right))`,
    "Returns the tree's height, measured by the longest root-to-leaf path.",
    OperationTypes.Utility,
    'O(n)',
    'N/A',
  ),
  createCheatSheet(
    'Checking if a tree is balanced',
    `def is_balanced(root):
    def check(node):
        if not node:
            return 0
        left = check(node.left)
        right = check(node.right)
        if left == -1 or right == -1 or abs(left - right) > 1:
            return -1
        return 1 + max(left, right)

    return check(root) != -1`,
    'Determines if the tree is height-balanced (left and right subtree heights differ by no more than 1).',
    OperationTypes.Utility,
    'O(n)',
    'N/A',
  ),
  createCheatSheet(
    'Checking if a tree is a valid BST',
    `def is_valid_bst(root):
    def in_order(node):
        if not node:
            return True
        if not in_order(node.left):
            return False
        if node.val <= self.prev:
            return False
        self.prev = node.val
        return in_order(node.right)

    self.prev = float("-inf")
    return in_order(root)`,
    'Verifies whether the tree satisfies BST properties (left < root < right).',
    OperationTypes.Utility,
    'O(n)',
    'N/A',
  ),
  createCheatSheet(
    'Finding the maximum path sum in a binary tree',
    `def max_path_sum(root):
    def max_gain(node):
        nonlocal max_sum
        if not node:
            return 0
        left_gain = max(max_gain(node.left), 0)
        right_gain = max(max_gain(node.right), 0)
        current_path_sum = node.val + left_gain + right_gain
        max_sum = max(max_sum, current_path_sum)
        return node.val + max(left_gain, right_gain)

    max_sum = float("-inf")
    max_gain(root)
    return max_sum`,
    'Computes the maximum possible path sum in the tree, where a path can start/end at any node.',
    OperationTypes.Utility,
    'O(n)',
    'N/A',
  ),
];
