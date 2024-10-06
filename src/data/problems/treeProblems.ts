import { createProblem, Problem } from '@/common/commonProblem';

export const treeProblems: Problem[] = [
  createProblem(
    'Binary Tree Inorder Traversal (Leetcode 94)',
    'Easy',
    "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    [
      {
        code: `def inorderTraversal(root):
    # Initialize an empty list to store the result
    result = []
    
    def inorder(node):
        # If the node is None, return
        if not node:
            return
        # Traverse the left subtree
        inorder(node.left)
        # Append the current node's value to the result list
        result.append(node.val)
        # Traverse the right subtree
        inorder(node.right)
    
    # Start the inorder traversal from the root
    inorder(root)
    return result`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        explanation:
          'This solution uses recursion to perform an inorder traversal of the binary tree. It visits the left subtree, then the root, and finally the right subtree.',
      },
      {
        code: `def inorderTraversal(root):
    # Initialize an empty list to store the result
    result = []
    # Initialize an empty stack to simulate the recursive call stack
    stack = []
    # Initialize the current node as the root
    current = root
    
    # While the current node is not None or the stack is not empty
    while current or stack:
        # Traverse to the leftmost node
        while current:
            stack.append(current)
            current = current.left
        # Pop the top node from the stack
        current = stack.pop()
        # Append the current node's value to the result list
        result.append(current.val)
        # Move to the right subtree
        current = current.right
    
    return result`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        explanation:
          'This solution uses an iterative approach with a stack to perform an inorder traversal of the binary tree. It simulates the recursive call stack by pushing nodes onto the stack and processing them in the correct order.',
      },
    ],
    'Use recursion or an iterative approach with a stack to perform an inorder traversal.',
    'https://leetcode.com/problems/binary-tree-inorder-traversal/',
  ),
  createProblem(
    'Binary Tree Level Order Traversal (Leetcode 102)',
    'Medium',
    "Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).",
    [
      {
        code: `from collections import deque

def levelOrder(root):
    # If the root is None, return an empty list
    if not root:
        return []
    
    # Initialize an empty list to store the result
    result = []
    # Initialize a deque with the root node
    queue = deque([root])
    
    # While the queue is not empty
    while queue:
        # Get the number of nodes at the current level
        level_size = len(queue)
        # Initialize an empty list to store the nodes at the current level
        current_level = []
        
        # Process all nodes at the current level
        for _ in range(level_size):
            # Pop the front node from the queue
            node = queue.popleft()
            # Append the node's value to the current level list
            current_level.append(node.val)
            # Add the left and right children to the queue if they exist
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        
        # Append the current level list to the result list
        result.append(current_level)
    
    return result`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        explanation:
          'This solution uses Breadth-First Search (BFS) with a queue to perform a level order traversal of the binary tree. It processes each level of the tree by iterating through the nodes in the queue and adding their children to the queue.',
      },
    ],
    'Use Breadth-First Search (BFS) with a queue to perform a level order traversal.',
    'https://leetcode.com/problems/binary-tree-level-order-traversal/',
  ),
  createProblem(
    'Validate Binary Search Tree (Leetcode 98)',
    'Medium',
    "Given the root of a binary tree, determine if it is a valid binary search tree (BST). A valid BST is defined as follows: The left subtree of a node contains only nodes with keys less than the node's key. The right subtree of a node contains only nodes with keys greater than the node's key. Both the left and right subtrees must also be binary search trees.",
    [
      {
        code: `def isValidBST(root):
    def validate(node, low=float('-inf'), high=float('inf')):
        # If the node is None, it is a valid BST
        if not node:
            return True
        # If the node's value is not within the valid range, return False
        if not (low < node.val < high):
            return False
        # Recursively validate the left and right subtrees
        return (validate(node.left, low, node.val) and
                validate(node.right, node.val, high))
    
    # Start the validation from the root
    return validate(root)`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        explanation:
          "This solution uses recursion to validate the binary search tree. It checks if each node's value is within the valid range defined by its ancestors.",
      },
    ],
    "Use recursion to validate the binary search tree by checking the range of each node's value.",
    'https://leetcode.com/problems/validate-binary-search-tree/',
  ),
  createProblem(
    'Lowest Common Ancestor of a Binary Tree (Leetcode 236)',
    'Medium',
    'Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree. The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).',
    [
      {
        code: `def lowestCommonAncestor(root, p, q):
    # If the root is None or one of the nodes is the root, return the root
    if not root or root == p or root == q:
        return root
    
    # Recursively search the left and right subtrees
    left = lowestCommonAncestor(root.left, p, q)
    right = lowestCommonAncestor(root.right, p, q)
    
    # If both left and right are not None, the current node is the LCA
    if left and right:
        return root
    # If only one of them is not None, return that node
    return left if left else right`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        explanation:
          'This solution uses recursion to find the lowest common ancestor. It searches the left and right subtrees and checks if both nodes are found in different subtrees.',
      },
    ],
    'Use recursion to find the lowest common ancestor by searching the left and right subtrees.',
    'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/',
  ),
  createProblem(
    'Binary Tree Maximum Path Sum (Leetcode 124)',
    'Hard',
    "A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root. The path sum of a path is the sum of the node's values in the path. Given the root of a binary tree, return the maximum path sum of any non-empty path.",
    [
      {
        code: `def maxPathSum(root):
    # Initialize the maximum path sum as negative infinity
    max_sum = float('-inf')
    
    def max_gain(node):
        nonlocal max_sum
        # If the node is None, return 0
        if not node:
            return 0
        
        # Calculate the maximum gain from the left and right subtrees
        left_gain = max(max_gain(node.left), 0)
        right_gain = max(max_gain(node.right), 0)
        
        # Calculate the price of the current path
        price_newpath = node.val + left_gain + right_gain
        
        # Update the maximum path sum if the new path is greater
        max_sum = max(max_sum, price_newpath)
        
        # Return the maximum gain from the current node
        return node.val + max(left_gain, right_gain)
    
    # Start the recursive calculation from the root
    max_gain(root)
    return max_sum`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        explanation:
          'This solution uses recursion to calculate the maximum path sum. It considers the maximum gain from the left and right subtrees and updates the maximum path sum accordingly.',
      },
    ],
    'Use recursion to calculate the maximum path sum by considering the maximum gain from the left and right subtrees.',
    'https://leetcode.com/problems/binary-tree-maximum-path-sum/',
  ),
  createProblem(
    'Serialize and Deserialize Binary Tree (Leetcode 297)',
    'Hard',
    'Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.',
    [
      {
        code: `class Codec:
    def serialize(self, root):
        """Encodes a tree to a single string.
        
        :type root: TreeNode
        :rtype: str
        """
        def preorder(node):
            if node:
                vals.append(str(node.val))
                preorder(node.left)
                preorder(node.right)
            else:
                vals.append('#')
        
        vals = []
        preorder(root)
        return ' '.join(vals)

    def deserialize(self, data):
        """Decodes your encoded data to tree.
        
        :type data: str
        :rtype: TreeNode
        """
        def build_tree():
            val = next(vals)
            if val == '#':
                return None
            node = TreeNode(int(val))
            node.left = build_tree()
            node.right = build_tree()
            return node
        
        vals = iter(data.split())
        return build_tree()`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        explanation:
          'This solution uses preorder traversal to serialize the binary tree into a string. It uses recursion to build the tree from the serialized string.',
      },
    ],
    'Use preorder traversal to serialize the binary tree and recursion to deserialize it.',
    'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/',
  ),
  createProblem(
    'Construct Binary Tree from Preorder and Inorder Traversal (Leetcode 105)',
    'Medium',
    'Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.',
    [
      {
        code: `def buildTree(preorder, inorder):
    # If the inorder list is empty, return None
    if not inorder:
        return None
    
    # The first element in the preorder list is the root
    root_val = preorder.pop(0)
    root = TreeNode(root_val)
    
    # Find the index of the root in the inorder list
    root_index = inorder.index(root_val)
    
    # Recursively build the left and right subtrees
    root.left = buildTree(preorder, inorder[:root_index])
    root.right = buildTree(preorder, inorder[root_index + 1:])
    
    return root`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        explanation:
          'This solution uses recursion to build the binary tree from the preorder and inorder traversals. It identifies the root from the preorder list and uses the inorder list to determine the left and right subtrees.',
      },
    ],
    'Use recursion to build the binary tree from the preorder and inorder traversals.',
    'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/',
  ),
  createProblem(
    'Binary Tree Zigzag Level Order Traversal (Leetcode 103)',
    'Medium',
    "Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).",
    [
      {
        code: `from collections import deque

def zigzagLevelOrder(root):
    # If the root is None, return an empty list
    if not root:
        return []
    
    # Initialize an empty list to store the result
    result = []
    # Initialize a deque with the root node
    queue = deque([root])
    # Initialize a flag to indicate the direction of traversal
    left_to_right = True
    
    # While the queue is not empty
    while queue:
        # Get the number of nodes at the current level
        level_size = len(queue)
        # Initialize an empty list to store the nodes at the current level
        current_level = deque()
        
        # Process all nodes at the current level
        for _ in range(level_size):
            # Pop the front node from the queue
            node = queue.popleft()
            # Append the node's value to the current level list based on the direction
            if left_to_right:
                current_level.append(node.val)
            else:
                current_level.appendleft(node.val)
            # Add the left and right children to the queue if they exist
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        
        # Append the current level list to the result list
        result.append(list(current_level))
        # Toggle the direction for the next level
        left_to_right = not left_to_right
    
    return result`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        explanation:
          'This solution uses Breadth-First Search (BFS) with a queue to perform a zigzag level order traversal of the binary tree. It uses a flag to alternate the direction of traversal for each level.',
      },
    ],
    'Use Breadth-First Search (BFS) with a queue and a flag to alternate the direction of traversal for each level.',
    'https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/',
  ),
];
