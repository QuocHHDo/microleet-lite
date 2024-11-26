import { Difficulty } from '@/common/commonConcept';
import { Curriculum, LessonContent, LessonsTab, PriorityLevel } from '@/common/commonLesson';

const treeCurriculum: Curriculum = {
  title: 'Tree Curriculum',
  description: 'A comprehensive guide to mastering tree data structures and algorithms',
  sections: [
    {
      id: 1,
      title: 'Tree Fundamentals',
      topics: [
        {
          id: 'tree-concept',
          title: 'Tree Concepts and Terminology',
          description: 'Understanding basic tree structure, nodes, edges, root, leaves, and height',
          priority: PriorityLevel.Essential
        },
        {
          id: 'tree-implementation',
          title: 'Tree Implementation',
          description: 'Implementing basic tree structure and node classes',
          priority: PriorityLevel.Essential
        },
        {
          id: 'tree-properties',
          title: 'Tree Properties',
          description: 'Understanding depth, height, size, and balanced trees',
          priority: PriorityLevel.Essential
        },
        {
          id: 'interview-patterns',
          title: 'Common Tree Interview Patterns',
          description: 'Essential techniques and problem-solving patterns for tree problems',
          priority: PriorityLevel.Essential
        }
      ],
    },
    {
      id: 2,
      title: 'Binary Trees',
      topics: [
        {
          id: 'binary-tree-basics',
          title: 'Binary Tree Basics',
          description: 'Understanding and implementing binary trees',
          priority: PriorityLevel.Essential
        },
        {
          id: 'tree-traversal',
          title: 'Tree Traversal',
          description: 'Inorder, preorder, postorder, and level-order traversals',
          priority: PriorityLevel.Essential
        },
        {
          id: 'tree-views',
          title: 'Tree Views',
          description: 'Left view, right view, top view implementations',
          priority: PriorityLevel.Important
        },
        {
          id: 'tree-properties-checking',
          title: 'Tree Properties Verification',
          description: 'Checking symmetry, balance, and completeness',
          priority: PriorityLevel.Important
        }
      ],
    },
    {
      id: 3,
      title: 'Binary Search Trees',
      topics: [
        {
          id: 'bst-concept',
          title: 'BST Properties and Implementation',
          description: 'Understanding BST properties and basic operations',
          priority: PriorityLevel.Essential
        },
        {
          id: 'bst-operations',
          title: 'BST Operations',
          description: 'Insertion, deletion, and search in BST',
          priority: PriorityLevel.Essential
        },
        {
          id: 'bst-validation',
          title: 'BST Validation',
          description: 'Verifying if a binary tree is a valid BST',
          priority: PriorityLevel.Essential
        },
        {
          id: 'bst-balancing',
          title: 'BST Balancing',
          description: 'Understanding and handling BST balance',
          priority: PriorityLevel.Important
        }
      ],
    },
    {
      id: 4,
      title: 'Advanced Tree Traversal',
      topics: [
        {
          id: 'iterative-traversal',
          title: 'Iterative Traversal',
          description: 'Stack-based iterative implementations of tree traversals',
          priority: PriorityLevel.Important
        },
        {
          id: 'morris-traversal',
          title: 'Morris Traversal',
          description: 'Understanding and implementing Morris traversal',
          priority: PriorityLevel.Optional
        },
        {
          id: 'special-traversals',
          title: 'Special Traversals',
          description: 'Boundary traversal, vertical order traversals',
          priority: PriorityLevel.Beneficial
        }
      ],
    },
    {
      id: 5,
      title: 'Tree Modifications',
      topics: [
        {
          id: 'tree-transformations',
          title: 'Tree Transformations',
          description: 'Flattening, inverting, and pruning trees',
          priority: PriorityLevel.Important
        },
        {
          id: 'tree-comparisons',
          title: 'Tree Comparison Problems',
          description: 'Same tree, subtree of another tree, symmetric tree',
          priority: PriorityLevel.Essential
        },
        {
          id: 'path-operations',
          title: 'Path Operations',
          description: 'Path sum problems and path finding algorithms',
          priority: PriorityLevel.Important
        }
      ],
    },
    {
      id: 6,
      title: 'Balanced Trees',
      topics: [
        {
          id: 'avl-trees',
          title: 'AVL Trees',
          description: 'Understanding and implementing AVL trees',
          priority: PriorityLevel.Beneficial
        },
        {
          id: 'red-black-trees',
          title: 'Red-Black Trees',
          description: 'Understanding and implementing Red-Black trees',
          priority: PriorityLevel.Optional
        },
        {
          id: 'b-trees',
          title: 'B-Trees',
          description: 'Understanding B-trees and their variations',
          priority: PriorityLevel.Optional
        }
      ],
    },
    {
      id: 7,
      title: 'Special Tree Types',
      topics: [
        {
          id: 'n-ary-trees',
          title: 'N-ary Trees',
          description: 'Working with trees having multiple children',
          priority: PriorityLevel.Important
        },
        {
          id: 'segment-trees',
          title: 'Segment Trees',
          description: 'Understanding and implementing segment trees',
          priority: PriorityLevel.Optional
        }
      ],
    },
    {
      id: 8,
      title: 'Advanced Tree Algorithms',
      topics: [
        {
          id: 'tree-dp',
          title: 'Dynamic Programming on Trees',
          description: 'Solving tree problems using dynamic programming',
          priority: PriorityLevel.Beneficial
        },
        {
          id: 'tree-distance',
          title: 'Tree Distance Problems',
          description: 'Calculating distances and path-related problems',
          priority: PriorityLevel.Beneficial
        }
      ],
    },
  ],
} as const;

const treeConceptData: LessonContent = {
  title: 'Tree Concepts and Terminology',
  content: `<p>
Trees are a fundamental data structure in computer science, used to represent hierarchical relationships between elements. 
Understanding the basic concepts and terminology of trees is essential for working with various tree-based algorithms and data structures.
</p>

<ul>
<li><strong>Tree Structure:</strong> A tree is a collection of nodes, where each node has zero or more child nodes. The topmost node is called the root.</li>
<li><strong>Nodes:</strong> Nodes are the individual elements in a tree. Each node contains data and may have references to its child nodes.</li>
<li><strong>Edges:</strong> Edges connect nodes to their child nodes, representing the hierarchical relationships.</li>
<li><strong>Root:</strong> The root is the topmost node in a tree, with no parent node.</li>
<li><strong>Leaves:</strong> Leaves are nodes that have no child nodes.</li>
<li><strong>Height:</strong> The height of a tree is the length of the longest path from the root to a leaf.</li>
</ul>`,
  codeExample: `# Basic Tree Structure
class TreeNode:
    def __init__(self, value):
        self.value = value
        self.children = []

# Example Usage
root = TreeNode(1)
child1 = TreeNode(2)
child2 = TreeNode(3)
root.children.append(child1)
root.children.append(child2)

# Display Tree
def display_tree(node, level=0):
    print("  " * level + str(node.value))
    for child in node.children:
        display_tree(child, level + 1)

display_tree(root)`,
  exercises: [
    {
      prompt: 'Create a simple tree with a root node and two child nodes.',
      initialCode: `# Write your solution here
class TreeNode:
    def __init__(self, value):
        self.value = value
        self.children = []

# Example Usage
root = TreeNode(1)
# Add child nodes here`,
      solution: `class TreeNode:
    def __init__(self, value):
        self.value = value
        self.children = []

# Example Usage
root = TreeNode(1)
child1 = TreeNode(2)
child2 = TreeNode(3)
root.children.append(child1)
root.children.append(child2)

# Display Tree
def display_tree(node, level=0):
    print("  " * level + str(node.value))
    for child in node.children:
        display_tree(child, level + 1)

display_tree(root)`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a fundamental characteristic of a tree?',
      options: ['Cyclic structure', 'Linear structure', 'Hierarchical structure', 'None of the above'],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. Trees are acyclic structures.',
        'This is incorrect. Trees are not linear structures.',
        'This is correct. Trees are hierarchical structures.',
        'This is incorrect. Trees have a hierarchical structure.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What is the topmost node in a tree called?',
      options: ['Leaf', 'Root', 'Child', 'Parent'],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. Leaves are nodes with no children.',
        'This is correct. The topmost node in a tree is called the root.',
        'This is incorrect. Child nodes are nodes that have a parent.',
        'This is incorrect. Parent nodes are nodes that have children.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const treeImplementationData: LessonContent = {
  title: 'Tree Implementation',
  content: `<p>
Implementing a basic tree structure involves creating a node class and a tree class. 
The node class represents individual elements in the tree, while the tree class manages the overall structure. 
Understanding how to implement these classes is essential for working with various tree-based algorithms and data structures.
</p>

<ul>
<li><strong>Node Class:</strong> The node class represents individual elements in the tree. Each node contains data and may have references to its child nodes.</li>
<li><strong>Tree Class:</strong> The tree class manages the overall structure of the tree. It typically includes methods for adding nodes, traversing the tree, and other operations.</li>
<li><strong>Example Usage:</strong> Demonstrating how to create a tree and perform basic operations.</li>
</ul>`,
  codeExample: `# Node Class
class TreeNode:
    def __init__(self, value):
        self.value = value
        self.children = []

# Tree Class
class Tree:
    def __init__(self, root_value):
        self.root = TreeNode(root_value)

    def add_node(self, parent_value, child_value):
        parent = self._find_node(self.root, parent_value)
        if parent:
            parent.children.append(TreeNode(child_value))

    def _find_node(self, node, value):
        if node.value == value:
            return node
        for child in node.children:
            found_node = self._find_node(child, value)
            if found_node:
                return found_node
        return None

    def display_tree(self):
        def display(node, level=0):
            print("  " * level + str(node.value))
            for child in node.children:
                display(child, level + 1)
        display(self.root)

# Example Usage
tree = Tree(1)
tree.add_node(1, 2)
tree.add_node(1, 3)
tree.add_node(2, 4)
tree.add_node(2, 5)
tree.display_tree()`,
  exercises: [
    {
      prompt: 'Implement a method to add a child node to a parent node in a tree.',
      initialCode: `# Write your solution here
class TreeNode:
    def __init__(self, value):
        self.value = value
        self.children = []

class Tree:
    def __init__(self, root_value):
        self.root = TreeNode(root_value)

    def add_node(self, parent_value, child_value):
        # Your code here

    def _find_node(self, node, value):
        if node.value == value:
            return node
        for child in node.children:
            found_node = self._find_node(child, value)
            if found_node:
                return found_node
        return None

    def display_tree(self):
        def display(node, level=0):
            print("  " * level + str(node.value))
            for child in node.children:
                display(child, level + 1)
        display(self.root)

tree = Tree(1)`,
      solution: `class TreeNode:
    def __init__(self, value):
        self.value = value
        self.children = []

class Tree:
    def __init__(self, root_value):
        self.root = TreeNode(root_value)

    def add_node(self, parent_value, child_value):
        parent = self._find_node(self.root, parent_value)
        if parent:
            parent.children.append(TreeNode(child_value))

    def _find_node(self, node, value):
        if node.value == value:
            return node
        for child in node.children:
            found_node = self._find_node(child, value)
            if found_node:
                return found_node
        return None

    def display_tree(self):
        def display(node, level=0):
            print("  " * level + str(node.value))
            for child in node.children:
                display(child, level + 1)
        display(self.root)

tree = Tree(1)
tree.add_node(1, 2)
tree.add_node(1, 3)
tree.add_node(2, 4)
tree.add_node(2, 5)
tree.display_tree()`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a key component of a tree implementation?',
      options: ['Node class', 'Tree class', 'Both of the above', 'None of the above'],
      correctAnswer: 2,
      explanations: [
        'This is correct. The node class represents individual elements in the tree.',
        'This is correct. The tree class manages the overall structure of the tree.',
        'This is correct. Both the node class and the tree class are key components of a tree implementation.',
        'This is incorrect. Both the node class and the tree class are key components of a tree implementation.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What is the purpose of the _find_node method in the tree class?',
      options: ['Add a node', 'Find a node', 'Delete a node', 'None of the above'],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. The _find_node method is not used to add a node.',
        'This is correct. The _find_node method is used to find a node in the tree.',
        'This is incorrect. The _find_node method is not used to delete a node.',
        'This is incorrect. The _find_node method is used to find a node in the tree.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const treePropertiesData: LessonContent = {
  title: 'Tree Properties',
  content: `<p>
Understanding the properties of trees, such as depth, height, size, and balance, is crucial for working with various tree-based algorithms and data structures. 
These properties help in analyzing the structure and performance of trees.
</p>

<ul>
<li><strong>Depth:</strong> The depth of a node is the length of the path from the root to the node.</li>
<li><strong>Height:</strong> The height of a tree is the length of the longest path from the root to a leaf.</li>
<li><strong>Size:</strong> The size of a tree is the total number of nodes in the tree.</li>
<li><strong>Balanced Trees:</strong> A balanced tree is a tree in which the heights of the two subtrees of any node differ by at most one.</li>
</ul>`,
  codeExample: `# Node Class
class TreeNode:
    def __init__(self, value):
        self.value = value
        self.children = []

# Tree Class
class Tree:
    def __init__(self, root_value):
        self.root = TreeNode(root_value)

    def add_node(self, parent_value, child_value):
        parent = self._find_node(self.root, parent_value)
        if parent:
            parent.children.append(TreeNode(child_value))

    def _find_node(self, node, value):
        if node.value == value:
            return node
        for child in node.children:
            found_node = self._find_node(child, value)
            if found_node:
                return found_node
        return None

    def depth(self, node_value):
        return self._depth(self.root, node_value, 0)

    def _depth(self, node, value, current_depth):
        if node.value == value:
            return current_depth
        for child in node.children:
            found_depth = self._depth(child, value, current_depth + 1)
            if found_depth != -1:
                return found_depth
        return -1

    def height(self):
        return self._height(self.root)

    def _height(self, node):
        if not node.children:
            return 0
        return 1 + max(self._height(child) for child in node.children)

    def size(self):
        return self._size(self.root)

    def _size(self, node):
        if not node:
            return 0
        return 1 + sum(self._size(child) for child in node.children)

    def is_balanced(self):
        return self._is_balanced(self.root) != -1

    def _is_balanced(self, node):
        if not node:
            return 0
        left_height = self._is_balanced(node.children[0]) if node.children else 0
        right_height = self._is_balanced(node.children[1]) if len(node.children) > 1 else 0
        if left_height == -1 or right_height == -1 or abs(left_height - right_height) > 1:
            return -1
        return 1 + max(left_height, right_height)

# Example Usage
tree = Tree(1)
tree.add_node(1, 2)
tree.add_node(1, 3)
tree.add_node(2, 4)
tree.add_node(2, 5)
print("Depth of node 5:", tree.depth(5))  # Output: 2
print("Height of tree:", tree.height())  # Output: 2
print("Size of tree:", tree.size())  # Output: 5
print("Is tree balanced:", tree.is_balanced())  # Output: True`,
  exercises: [
    {
      prompt: 'Implement a method to calculate the depth of a node in a tree.',
      initialCode: `# Write your solution here
class TreeNode:
    def __init__(self, value):
        self.value = value
        self.children = []

class Tree:
    def __init__(self, root_value):
        self.root = TreeNode(root_value)

    def add_node(self, parent_value, child_value):
        parent = self._find_node(self.root, parent_value)
        if parent:
            parent.children.append(TreeNode(child_value))

    def _find_node(self, node, value):
        if node.value == value:
            return node
        for child in node.children:
            found_node = self._find_node(child, value)
            if found_node:
                return found_node
        return None

    def depth(self, node_value):
        # Your code here

tree = Tree(1)
tree.add_node(1, 2)
tree.add_node(1, 3)
tree.add_node(2, 4)
tree.add_node(2, 5)`,
      solution: `class TreeNode:
    def __init__(self, value):
        self.value = value
        self.children = []

class Tree:
    def __init__(self, root_value):
        self.root = TreeNode(root_value)

    def add_node(self, parent_value, child_value):
        parent = self._find_node(self.root, parent_value)
        if parent:
            parent.children.append(TreeNode(child_value))

    def _find_node(self, node, value):
        if node.value == value:
            return node
        for child in node.children:
            found_node = self._find_node(child, value)
            if found_node:
                return found_node
        return None

    def depth(self, node_value):
        return self._depth(self.root, node_value, 0)

    def _depth(self, node, value, current_depth):
        if node.value == value:
            return current_depth
        for child in node.children:
            found_depth = self._depth(child, value, current_depth + 1)
            if found_depth != -1:
                return found_depth
        return -1

tree = Tree(1)
tree.add_node(1, 2)
tree.add_node(1, 3)
tree.add_node(2, 4)
tree.add_node(2, 5)
print("Depth of node 5:", tree.depth(5))  # Output: 2`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a property of a tree?',
      options: ['Depth', 'Height', 'Size', 'All of the above'],
      correctAnswer: 3,
      explanations: [
        'This is correct. Depth is a property of a tree.',
        'This is correct. Height is a property of a tree.',
        'This is correct. Size is a property of a tree.',
        'This is correct. All of the above are properties of a tree.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the height of a tree?',
      options: ['The number of nodes', 'The length of the longest path from the root to a leaf', 'The number of edges', 'None of the above'],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. The height is not the number of nodes.',
        'This is correct. The height of a tree is the length of the longest path from the root to a leaf.',
        'This is incorrect. The height is not the number of edges.',
        'This is incorrect. The height is the length of the longest path from the root to a leaf.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const commonTreePatternsData: LessonContent = {
  title: 'Common Tree Interview Patterns',
  content: `<p>
Trees are a fundamental data structure in computer science, and understanding common interview patterns 
related to trees is crucial for success in coding interviews. This lesson covers essential techniques and 
problem-solving patterns for tree problems, including traversals, checking for binary search tree properties, 
and finding tree heights.
</p>

<p>
Common interview patterns include:
</p>
<ul>
  <li>Tree traversals (pre-order, in-order, post-order, level-order)</li>
  <li>Checking if a tree is a binary search tree (BST)</li>
  <li>Finding the height or depth of a tree</li>
  <li>Determining if two trees are identical</li>
</ul>

<p>
Mastering these patterns will help you tackle a wide range of tree-based problems efficiently.
</p>`,
  codeExample: `# Define the TreeNode class
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# Pre-order traversal
def pre_order(root):
    if root:
        print(root.val, end=' ')
        pre_order(root.left)
        pre_order(root.right)

# In-order traversal
def in_order(root):
    if root:
        in_order(root.left)
        print(root.val, end=' ')
        in_order(root.right)

# Post-order traversal
def post_order(root):
    if root:
        post_order(root.left)
        post_order(root.right)
        print(root.val, end=' ')

# Level-order traversal (BFS)
from collections import deque
def level_order(root):
    if not root:
        return
    queue = deque([root])
    while queue:
        node = queue.popleft()
        print(node.val, end=' ')
        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)

# Check if a tree is a BST
def is_bst(root, lower=-float('inf'), upper=float('inf')):
    if not root:
        return True
    if root.val <= lower or root.val >= upper:
        return False
    return is_bst(root.left, lower, root.val) and is_bst(root.right, root.val, upper)

# Find the height of a tree
def tree_height(root):
    if not root:
        return 0
    return 1 + max(tree_height(root.left), tree_height(root.right))

# Example usage
# Creating a simple binary tree:
#       1
#      / \
#     2   3
#    / \
#   4   5

root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)

print("Pre-order traversal:")
pre_order(root)  # Output: 1 2 4 5 3

print("\nIn-order traversal:")
in_order(root)   # Output: 4 2 5 1 3

print("\nPost-order traversal:")
post_order(root) # Output: 4 5 2 3 1

print("\nLevel-order traversal:")
level_order(root) # Output: 1 2 3 4 5

print("\nIs the tree a BST?", is_bst(root))  # Output: False

print("\nTree height:", tree_height(root))  # Output: 3
`,
  exercises: [
    {
      prompt: 'Implement the in-order traversal of a binary tree.',
      initialCode: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def in_order(root):
    # Your code here`,
      solution: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def in_order(root):
    if root:
        in_order(root.left)
        print(root.val, end=' ')
        in_order(root.right)

# Example usage
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)

in_order(root)  # Output: 4 2 5 1 3`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Write a function to check if a binary tree is a binary search tree (BST).',
      initialCode: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def is_bst(root):
    # Your code here`,
      solution: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def is_bst(root, lower=-float('inf'), upper=float('inf')):
    if not root:
        return True
    if root.val <= lower or root.val >= upper:
        return False
    return is_bst(root.left, lower, root.val) and is_bst(root.right, root.val, upper)

# Example usage
# Creating a BST:
#       2
#      / \
#     1   3

bst_root = TreeNode(2)
bst_root.left = TreeNode(1)
bst_root.right = TreeNode(3)

print("Is BST:", is_bst(bst_root))  # Output: True

# Creating a non-BST:
#       2
#      / \
#     3   1

non_bst_root = TreeNode(2)
non_bst_root.left = TreeNode(3)
non_bst_root.right = TreeNode(1)

print("Is BST:", is_bst(non_bst_root))  # Output: False`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Find the height of a binary tree.',
      initialCode: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def tree_height(root):
    # Your code here`,
      solution: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def tree_height(root):
    if not root:
        return 0
    return 1 + max(tree_height(root.left), tree_height(root.right))

# Example usage
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)

print("Tree height:", tree_height(root))  # Output: 3`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'What is the order of nodes visited in an in-order traversal of a binary search tree (BST)?',
      options: [
        'Descending order',
        'No specific order',
        'Ascending order',
      ],
      correctAnswer: 2,
      explanations: [
        'Descending order is the order for reverse in-order traversal.',
        'In-order traversal of a BST does have a specific order.',
        'In-order traversal of a BST visits nodes in ascending order.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'Which traversal type visits the root node first?',
      options: [
        'Pre-order',
        'In-order',
        'Post-order',
        'Level-order',
      ],
      correctAnswer: 0,
      explanations: [
        'Pre-order traversal visits root first, then left, then right.',
        'In-order traversal visits left, then root, then right.',
        'Post-order traversal visits left, then right, then root.',
        'Level-order traversal visits nodes level by level, starting from the root.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What is the time complexity of finding the height of a binary tree?',
      options: [
        'O(1)',
        'O(log n)',
        'O(n)',
        'O(n^2)',
      ],
      correctAnswer: 2,
      explanations: [
        'O(1) is incorrect because it depends on the number of nodes.',
        'O(log n) is incorrect for skewed trees; it would be O(n).',
        'O(n) is correct because in the worst case, you have to visit every node.',
        'O(n^2) is incorrect for this operation.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const binaryTreeBasicsData: LessonContent = {
  title: 'Binary Tree Basics',
  content: `<p>
Binary trees are a fundamental data structure in computer science, where each node has at most two children, referred to as the left child and the right child. 
Understanding the basic structure and implementation of binary trees is essential for working with various tree-based algorithms and data structures.
</p>

<ul>
<li><strong>Node Class:</strong> The node class represents individual elements in the binary tree. Each node contains data and references to its left and right children.</li>
<li><strong>Tree Class:</strong> The tree class manages the overall structure of the binary tree. It typically includes methods for adding nodes, traversing the tree, and other operations.</li>
<li><strong>Example Usage:</strong> Demonstrating how to create a binary tree and perform basic operations.</li>
</ul>`,
  codeExample: `# Node Class
class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

# Tree Class
class BinaryTree:
    def __init__(self, root_value):
        self.root = TreeNode(root_value)

    def add_left(self, parent_value, child_value):
        parent = self._find_node(self.root, parent_value)
        if parent:
            parent.left = TreeNode(child_value)

    def add_right(self, parent_value, child_value):
        parent = self._find_node(self.root, parent_value)
        if parent:
            parent.right = TreeNode(child_value)

    def _find_node(self, node, value):
        if node is None:
            return None
        if node.value == value:
            return node
        left_find = self._find_node(node.left, value)
        if left_find:
            return left_find
        return self._find_node(node.right, value)

    def display_tree(self):
        def display(node, level=0):
            if node is None:
                return
            display(node.right, level + 1)
            print("  " * level + str(node.value))
            display(node.left, level + 1)
        display(self.root)

# Example Usage
tree = BinaryTree(1)
tree.add_left(1, 2)
tree.add_right(1, 3)
tree.add_left(2, 4)
tree.add_right(2, 5)
tree.display_tree()`,
  exercises: [
    {
      prompt: 'Implement a method to add a left child to a parent node in a binary tree.',
      initialCode: `# Write your solution here
class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinaryTree:
    def __init__(self, root_value):
        self.root = TreeNode(root_value)

    def add_left(self, parent_value, child_value):
        # Your code here

    def _find_node(self, node, value):
        if node is None:
            return None
        if node.value == value:
            return node
        left_find = self._find_node(node.left, value)
        if left_find:
            return left_find
        return self._find_node(node.right, value)

    def display_tree(self):
        def display(node, level=0):
            if node is None:
                return
            display(node.right, level + 1)
            print("  " * level + str(node.value))
            display(node.left, level + 1)
        display(self.root)

tree = BinaryTree(1)`,
      solution: `class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinaryTree:
    def __init__(self, root_value):
        self.root = TreeNode(root_value)

    def add_left(self, parent_value, child_value):
        parent = self._find_node(self.root, parent_value)
        if parent:
            parent.left = TreeNode(child_value)

    def _find_node(self, node, value):
        if node is None:
            return None
        if node.value == value:
            return node
        left_find = self._find_node(node.left, value)
        if left_find:
            return left_find
        return self._find_node(node.right, value)

    def display_tree(self):
        def display(node, level=0):
            if node is None:
                return
            display(node.right, level + 1)
            print("  " * level + str(node.value))
            display(node.left, level + 1)
        display(self.root)

tree = BinaryTree(1)
tree.add_left(1, 2)
tree.add_right(1, 3)
tree.add_left(2, 4)
tree.add_right(2, 5)
tree.display_tree()`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a key component of a binary tree?',
      options: ['Node class', 'Tree class', 'Both of the above', 'None of the above'],
      correctAnswer: 2,
      explanations: [
        'This is correct. The node class represents individual elements in the binary tree.',
        'This is correct. The tree class manages the overall structure of the binary tree.',
        'This is correct. Both the node class and the tree class are key components of a binary tree.',
        'This is incorrect. Both the node class and the tree class are key components of a binary tree.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What is the maximum number of children a node can have in a binary tree?',
      options: ['1', '2', '3', '4'],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. A node in a binary tree can have at most two children.',
        'This is correct. A node in a binary tree can have at most two children.',
        'This is incorrect. A node in a binary tree can have at most two children.',
        'This is incorrect. A node in a binary tree can have at most two children.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const treeTraversalData: LessonContent = {
  title: 'Tree Traversal',
  content: `<p>
Tree traversal is the process of visiting each node in a tree data structure exactly once. 
There are several common traversal methods, including inorder, preorder, postorder, and level-order traversals. 
Understanding these traversal methods is essential for working with various tree-based algorithms and data structures.
</p>

<ul>
<li><strong>Inorder Traversal:</strong> Visits the left subtree, then the root, and finally the right subtree.</li>
<li><strong>Preorder Traversal:</strong> Visits the root, then the left subtree, and finally the right subtree.</li>
<li><strong>Postorder Traversal:</strong> Visits the left subtree, then the right subtree, and finally the root.</li>
<li><strong>Level-order Traversal:</strong> Visits nodes level by level, from left to right.</li>
</ul>`,
  codeExample: `# Node Class
class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

# Tree Class
class BinaryTree:
    def __init__(self, root_value):
        self.root = TreeNode(root_value)

    def inorder_traversal(self):
        result = []
        self._inorder(self.root, result)
        return result

    def _inorder(self, node, result):
        if node:
            self._inorder(node.left, result)
            result.append(node.value)
            self._inorder(node.right, result)

    def preorder_traversal(self):
        result = []
        self._preorder(self.root, result)
        return result

    def _preorder(self, node, result):
        if node:
            result.append(node.value)
            self._preorder(node.left, result)
            self._preorder(node.right, result)

    def postorder_traversal(self):
        result = []
        self._postorder(self.root, result)
        return result

    def _postorder(self, node, result):
        if node:
            self._postorder(node.left, result)
            self._postorder(node.right, result)
            result.append(node.value)

    def level_order_traversal(self):
        if not self.root:
            return []
        result = []
        queue = [self.root]
        while queue:
            node = queue.pop(0)
            result.append(node.value)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        return result

# Example Usage
tree = BinaryTree(1)
tree.root.left = TreeNode(2)
tree.root.right = TreeNode(3)
tree.root.left.left = TreeNode(4)
tree.root.left.right = TreeNode(5)

print("Inorder Traversal:", tree.inorder_traversal())  # Output: [4, 2, 5, 1, 3]
print("Preorder Traversal:", tree.preorder_traversal())  # Output: [1, 2, 4, 5, 3]
print("Postorder Traversal:", tree.postorder_traversal())  # Output: [4, 5, 2, 3, 1]
print("Level-order Traversal:", tree.level_order_traversal())  # Output: [1, 2, 3, 4, 5]`,
  exercises: [
    {
      prompt: 'Implement the inorder traversal for a binary tree.',
      initialCode: `# Write your solution here
class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinaryTree:
    def __init__(self, root_value):
        self.root = TreeNode(root_value)

    def inorder_traversal(self):
        # Your code here

tree = BinaryTree(1)
tree.root.left = TreeNode(2)
tree.root.right = TreeNode(3)
tree.root.left.left = TreeNode(4)
tree.root.left.right = TreeNode(5)`,
      solution: `class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinaryTree:
    def __init__(self, root_value):
        self.root = TreeNode(root_value)

    def inorder_traversal(self):
        result = []
        self._inorder(self.root, result)
        return result

    def _inorder(self, node, result):
        if node:
            self._inorder(node.left, result)
            result.append(node.value)
            self._inorder(node.right, result)

tree = BinaryTree(1)
tree.root.left = TreeNode(2)
tree.root.right = TreeNode(3)
tree.root.left.left = TreeNode(4)
tree.root.left.right = TreeNode(5)
print("Inorder Traversal:", tree.inorder_traversal())  # Output: [4, 2, 5, 1, 3]`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a common tree traversal method?',
      options: ['Inorder', 'Preorder', 'Postorder', 'All of the above'],
      correctAnswer: 3,
      explanations: [
        'This is correct. Inorder is a common tree traversal method.',
        'This is correct. Preorder is a common tree traversal method.',
        'This is correct. Postorder is a common tree traversal method.',
        'This is correct. All of the above are common tree traversal methods.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the order of nodes visited in an inorder traversal?',
      options: ['Left, Root, Right', 'Root, Left, Right', 'Left, Right, Root', 'Right, Root, Left'],
      correctAnswer: 0,
      explanations: [
        'This is correct. Inorder traversal visits the left subtree, then the root, and finally the right subtree.',
        'This is incorrect. This is the order for preorder traversal.',
        'This is incorrect. This is the order for postorder traversal.',
        'This is incorrect. This is not a standard traversal order.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const treeViewsData: LessonContent = {
  title: 'Tree Views',
  content: `<p>
Tree views include the left view, right view, and top view, which are essential for understanding the structure of a binary tree from different perspectives. These views are crucial in various applications, such as visualizing tree structures and solving problems related to tree traversals.
</p>

<h3>Left View</h3>
<p>
The left view of a binary tree consists of the nodes that are visible when the tree is viewed from the left side. It includes the first node at each level of the tree.
</p>

<h3>Right View</h3>
<p>
The right view includes the nodes visible from the right side, which are the last nodes at each level of the tree.
</p>

<h3>Top View</h3>
<p>
The top view consists of the nodes visible when looking at the tree from the top. It includes the topmost nodes at each horizontal distance from the root.
</p>

<p>
Understanding these views helps in solving various tree-related problems efficiently.
</p>`,
  codeExample: `class TreeNode {
    constructor(public val: number, public left: TreeNode | null = null, public right: TreeNode | null = null) {}
}

function leftView(root: TreeNode | null): number[] {
    if (!root) return [];
    const result: number[] = [];
    const queue: [TreeNode, number][] = [[root, 0]];
    while (queue.length > 0) {
        const [node, level] = queue.shift()!;
        if (level === result.length) {
            result.push(node.val);
        }
        if (node.left) queue.push([node.left, level + 1]);
        if (node.right) queue.push([node.right, level + 1]);
    }
    return result;
}

function rightView(root: TreeNode | null): number[] {
    if (!root) return [];
    const result: number[] = [];
    const queue: [TreeNode, number][] = [[root, 0]];
    while (queue.length > 0) {
        const [node, level] = queue.shift()!;
        if (level === result.length) {
            result.push(node.val);
        }
        if (node.right) queue.push([node.right, level + 1]);
        if (node.left) queue.push([node.left, level + 1]);
    }
    return result;
}

function topView(root: TreeNode | null): number[] {
    if (!root) return [];
    const view: { [key: number]: number } = {};
    const queue: [TreeNode, number][] = [[root, 0]];
    while (queue.length > 0) {
        const [node, hd] = queue.shift()!;
        if (!(hd in view)) {
            view[hd] = node.val;
        }
        if (node.left) queue.push([node.left, hd - 1]);
        if (node.right) queue.push([node.right, hd + 1]);
    }
    const hds = Object.keys(view).map(Number).sort();
    return hds.map(hd => view[hd]);
}

// Example usage:
const root = new TreeNode(1, 
    new TreeNode(2, 
        new TreeNode(4), 
        new TreeNode(5, null, new TreeNode(7))
    ), 
    new TreeNode(3, null, new TreeNode(6, null, new TreeNode(8)))
);

console.log("Left View:", leftView(root)); // [1, 2, 4, 7]
console.log("Right View:", rightView(root)); // [1, 3, 6, 8]
console.log("Top View:", topView(root)); // [4, 2, 1, 3, 6, 8]
`,
  exercises: [
    {
      prompt: 'Implement the left view of a binary tree using recursion.',
      initialCode: `class TreeNode {
    constructor(public val: number, public left: TreeNode | null = null, public right: TreeNode | null = null) {}
}

function leftView(root: TreeNode | null): number[] {
    // Your code here
}`,
      solution: `function leftView(root: TreeNode | null, level: number = 0, result: number[] = []): number[] {
    if (!root) return result;
    if (level === result.length) {
        result.push(root.val);
    }
    leftView(root.left, level + 1, result);
    leftView(root.right, level + 1, result);
    return result;
}`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement the right view of a binary tree using iterative methods.',
      initialCode: `class TreeNode {
    constructor(public val: number, public left: TreeNode | null = null, public right: TreeNode | null = null) {}
}

function rightView(root: TreeNode | null): number[] {
    // Your code here
}`,
      solution: `function rightView(root: TreeNode | null): number[] {
    if (!root) return [];
    const result: number[] = [];
    const queue: [TreeNode, number][] = [[root, 0]];
    while (queue.length > 0) {
        const [node, level] = queue.shift()!;
        if (level === result.length) {
            result.push(node.val);
        }
        if (node.right) queue.push([node.right, level + 1]);
        if (node.left) queue.push([node.left, level + 1]);
    }
    return result;
}`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement the top view of a binary tree and explain how horizontal distances are calculated.',
      initialCode: `class TreeNode {
    constructor(public val: number, public left: TreeNode | null = null, public right: TreeNode | null = null) {}
}

function topView(root: TreeNode | null): number[] {
    // Your code here
}`,
      solution: `function topView(root: TreeNode | null): number[] {
    if (!root) return [];
    const view: { [key: number]: number } = {};
    const queue: [TreeNode, number][] = [[root, 0]];
    while (queue.length > 0) {
        const [node, hd] = queue.shift()!;
        if (!(hd in view)) {
            view[hd] = node.val;
        }
        if (node.left) queue.push([node.left, hd - 1]);
        if (node.right) queue.push([node.right, hd + 1]);
    }
    const hds = Object.keys(view).map(Number).sort();
    return hds.map(hd => view[hd]);
}`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the difference between the left view and the top view of a binary tree?',
      options: [
        'The left view includes all nodes, while the top view includes only leaf nodes.',
        'The left view is based on depth, while the top view is based on horizontal distance.',
        'There is no difference; they are the same.',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Both views can include non-leaf nodes.',
        'Correct. Left view is the first node at each level, top view is the topmost node at each horizontal distance.',
        'Incorrect. They are different.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What is the time complexity of finding the top view of a binary tree?',
      options: [
        'O(1)',
        'O(n)',
        'O(n^2)',
        'O(log n)',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. It depends on the number of nodes.',
        'Correct. Each node is visited once.',
        'Incorrect. Not applicable for this operation.',
        'Incorrect. Not relevant here.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'Which traversal method is most suitable for finding the right view of a binary tree?',
      options: [
        'Pre-order traversal',
        'Post-order traversal',
        'Level order traversal',
        'In-order traversal',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Pre-order is root, left, right.',
        'Incorrect. Post-order is left, right, root.',
        'Correct. Level order allows accessing the last node of each level.',
        'Incorrect. In-order is left, root, right.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const treePropertiesCheckingData: LessonContent = {
  title: 'Tree Properties Verification',
  content: `<p>
Verifying the properties of a tree, such as symmetry, balance, and completeness, is essential for working with various tree-based algorithms and data structures. 
Understanding how to check these properties helps in analyzing the structure and performance of trees.
</p>

<ul>
<li><strong>Symmetry:</strong> Checking if a tree is symmetric around its center.</li>
<li><strong>Balance:</strong> Checking if a tree is balanced, i.e., the heights of the two subtrees of any node differ by at most one.</li>
<li><strong>Completeness:</strong> Checking if a tree is complete, i.e., all levels are completely filled except possibly the last level and all nodes are as far left as possible.</li>
<li><strong>Example Usage:</strong> Demonstrating how to check these properties for a given tree.</li>
</ul>`,
  codeExample: `# Node Class
class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

# Tree Class
class BinaryTree:
    def __init__(self, root_value):
        self.root = TreeNode(root_value)

    def is_symmetric(self):
        if not self.root:
            return True
        return self._is_symmetric(self.root.left, self.root.right)

    def _is_symmetric(self, left, right):
        if not left and not right:
            return True
        if not left or not right:
            return False
        return (left.value == right.value and
                self._is_symmetric(left.left, right.right) and
                self._is_symmetric(left.right, right.left))

    def is_balanced(self):
        def check_balance(node):
            if not node:
                return 0
            left_height = check_balance(node.left)
            right_height = check_balance(node.right)
            if left_height == -1 or right_height == -1 or abs(left_height - right_height) > 1:
                return -1
            return 1 + max(left_height, right_height)
        return check_balance(self.root) != -1

    def is_complete(self):
        if not self.root:
            return True
        queue = [self.root]
        flag = False
        while queue:
            node = queue.pop(0)
            if node.left:
                if flag:
                    return False
                queue.append(node.left)
            else:
                flag = True
            if node.right:
                if flag:
                    return False
                queue.append(node.right)
            else:
                flag = True
        return True

# Example Usage
tree = BinaryTree(1)
tree.root.left = TreeNode(2)
tree.root.right = TreeNode(2)
tree.root.left.left = TreeNode(3)
tree.root.left.right = TreeNode(4)
tree.root.right.left = TreeNode(4)
tree.root.right.right = TreeNode(3)

print("Is Symmetric:", tree.is_symmetric())  # Output: True
print("Is Balanced:", tree.is_balanced())  # Output: True
print("Is Complete:", tree.is_complete())  # Output: True`,
  exercises: [
    {
      prompt: 'Implement the method to check if a binary tree is symmetric.',
      initialCode: `# Write your solution here
class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinaryTree:
    def __init__(self, root_value):
        self.root = TreeNode(root_value)

    def is_symmetric(self):
        # Your code here

tree = BinaryTree(1)
tree.root.left = TreeNode(2)
tree.root.right = TreeNode(2)
tree.root.left.left = TreeNode(3)
tree.root.left.right = TreeNode(4)
tree.root.right.left = TreeNode(4)
tree.root.right.right = TreeNode(3)`,
      solution: `class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinaryTree:
    def __init__(self, root_value):
        self.root = TreeNode(root_value)

    def is_symmetric(self):
        if not self.root:
            return True
        return self._is_symmetric(self.root.left, self.root.right)

    def _is_symmetric(self, left, right):
        if not left and not right:
            return True
        if not left or not right:
            return False
        return (left.value == right.value and
                self._is_symmetric(left.left, right.right) and
                self._is_symmetric(left.right, right.left))

tree = BinaryTree(1)
tree.root.left = TreeNode(2)
tree.root.right = TreeNode(2)
tree.root.left.left = TreeNode(3)
tree.root.left.right = TreeNode(4)
tree.root.right.left = TreeNode(4)
tree.root.right.right = TreeNode(3)

print("Is Symmetric:", tree.is_symmetric())  # Output: True`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following properties can be checked for a binary tree?',
      options: ['Symmetry', 'Balance', 'Completeness', 'All of the above'],
      correctAnswer: 3,
      explanations: [
        'This is correct. Symmetry can be checked for a binary tree.',
        'This is correct. Balance can be checked for a binary tree.',
        'This is correct. Completeness can be checked for a binary tree.',
        'This is correct. All of the above properties can be checked for a binary tree.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the condition for a binary tree to be balanced?',
      options: ['The tree has no nodes', 'The heights of the two subtrees of any node differ by at most one', 'The tree is a complete binary tree', 'None of the above'],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. A tree with no nodes is trivially balanced, but this is not the general condition.',
        'This is correct. A binary tree is balanced if the heights of the two subtrees of any node differ by at most one.',
        'This is incorrect. A complete binary tree is a specific type of balanced tree, but not all balanced trees are complete.',
        'This is incorrect. The correct condition is that the heights of the two subtrees of any node differ by at most one.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const bstConceptData: LessonContent = {
  title: 'BST Properties and Implementation',
  content: `<p>
Binary Search Trees (BST) are a type of binary tree with the property that for each node, all elements in its left subtree are less than the node, and all elements in its right subtree are greater than the node. 
Understanding the properties and implementation of BST is essential for working with various tree-based algorithms and data structures.
</p>

<ul>
<li><strong>Node Class:</strong> The node class represents individual elements in the BST. Each node contains data and references to its left and right children.</li>
<li><strong>Tree Class:</strong> The tree class manages the overall structure of the BST. It typically includes methods for inserting nodes, searching nodes, and other operations.</li>
<li><strong>Example Usage:</strong> Demonstrating how to create a BST and perform basic operations.</li>
</ul>`,
  codeExample: `# Node Class
class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

# Tree Class
class BinarySearchTree:
    def __init__(self):
        self.root = None

    def insert(self, value):
        if not self.root:
            self.root = TreeNode(value)
        else:
            self._insert(self.root, value)

    def _insert(self, node, value):
        if value < node.value:
            if node.left:
                self._insert(node.left, value)
            else:
                node.left = TreeNode(value)
        else:
            if node.right:
                self._insert(node.right, value)
            else:
                node.right = TreeNode(value)

    def search(self, value):
        return self._search(self.root, value)

    def _search(self, node, value):
        if not node or node.value == value:
            return node
        if value < node.value:
            return self._search(node.left, value)
        return self._search(node.right, value)

    def display_tree(self):
        def display(node, level=0):
            if node is None:
                return
            display(node.right, level + 1)
            print("  " * level + str(node.value))
            display(node.left, level + 1)
        display(self.root)

# Example Usage
bst = BinarySearchTree()
bst.insert(5)
bst.insert(3)
bst.insert(7)
bst.insert(2)
bst.insert(4)
bst.insert(6)
bst.insert(8)
bst.display_tree()`,
  exercises: [
    {
      prompt: 'Implement the insert method for a Binary Search Tree.',
      initialCode: `# Write your solution here
class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinarySearchTree:
    def __init__(self):
        self.root = None

    def insert(self, value):
        # Your code here

bst = BinarySearchTree()`,
      solution: `class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinarySearchTree:
    def __init__(self):
        self.root = None

    def insert(self, value):
        if not self.root:
            self.root = TreeNode(value)
        else:
            self._insert(self.root, value)

    def _insert(self, node, value):
        if value < node.value:
            if node.left:
                self._insert(node.left, value)
            else:
                node.left = TreeNode(value)
        else:
            if node.right:
                self._insert(node.right, value)
            else:
                node.right = TreeNode(value)

bst = BinarySearchTree()
bst.insert(5)
bst.insert(3)
bst.insert(7)
bst.insert(2)
bst.insert(4)
bst.insert(6)
bst.insert(8)`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a key property of a Binary Search Tree?',
      options: ['All nodes in the left subtree are greater than the root', 'All nodes in the right subtree are less than the root', 'All nodes in the left subtree are less than the root', 'All nodes in the right subtree are equal to the root'],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. All nodes in the left subtree should be less than the root.',
        'This is incorrect. All nodes in the right subtree should be greater than the root.',
        'This is correct. All nodes in the left subtree are less than the root.',
        'This is incorrect. All nodes in the right subtree should be greater than the root.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What is the primary advantage of using a Binary Search Tree?',
      options: ['Efficient search operations', 'Efficient insertion operations', 'Both of the above', 'None of the above'],
      correctAnswer: 2,
      explanations: [
        'This is correct. BSTs offer efficient search operations.',
        'This is correct. BSTs offer efficient insertion operations.',
        'This is correct. Both efficient search and insertion operations are advantages of using BSTs.',
        'This is incorrect. Both efficient search and insertion operations are advantages of using BSTs.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const bstOperationsData: LessonContent = {
  title: 'BST Operations',
  content: `<p>
Binary Search Trees (BST) support several key operations, including insertion, deletion, and search. 
Understanding these operations is essential for working with BSTs and optimizing their performance.
</p>

<ul>
<li><strong>Insertion:</strong> Adding a new node to the BST while maintaining the BST properties.</li>
<li><strong>Deletion:</strong> Removing a node from the BST while maintaining the BST properties.</li>
<li><strong>Search:</strong> Finding a node in the BST based on its value.</li>
<li><strong>Example Usage:</strong> Demonstrating how to perform these operations on a BST.</li>
</ul>`,
  codeExample: `# Node Class
class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

# Tree Class
class BinarySearchTree:
    def __init__(self):
        self.root = None

    def insert(self, value):
        if not self.root:
            self.root = TreeNode(value)
        else:
            self._insert(self.root, value)

    def _insert(self, node, value):
        if value < node.value:
            if node.left:
                self._insert(node.left, value)
            else:
                node.left = TreeNode(value)
        else:
            if node.right:
                self._insert(node.right, value)
            else:
                node.right = TreeNode(value)

    def search(self, value):
        return self._search(self.root, value)

    def _search(self, node, value):
        if not node or node.value == value:
            return node
        if value < node.value:
            return self._search(node.left, value)
        return self._search(node.right, value)

    def delete(self, value):
        self.root = self._delete(self.root, value)

    def _delete(self, node, value):
        if not node:
            return node
        if value < node.value:
            node.left = self._delete(node.left, value)
        elif value > node.value:
            node.right = self._delete(node.right, value)
        else:
            if not node.left:
                return node.right
            elif not node.right:
                return node.left
            temp = self._min_value_node(node.right)
            node.value = temp.value
            node.right = self._delete(node.right, temp.value)
        return node

    def _min_value_node(self, node):
        current = node
        while current.left:
            current = current.left
        return current

    def display_tree(self):
        def display(node, level=0):
            if node is None:
                return
            display(node.right, level + 1)
            print("  " * level + str(node.value))
            display(node.left, level + 1)
        display(self.root)

# Example Usage
bst = BinarySearchTree()
bst.insert(5)
bst.insert(3)
bst.insert(7)
bst.insert(2)
bst.insert(4)
bst.insert(6)
bst.insert(8)
bst.display_tree()
print("Search 4:", bst.search(4).value)  # Output: 4
bst.delete(4)
bst.display_tree()`,
  exercises: [
    {
      prompt: 'Implement the delete method for a Binary Search Tree.',
      initialCode: `# Write your solution here
class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinarySearchTree:
    def __init__(self):
        self.root = None

    def insert(self, value):
        if not self.root:
            self.root = TreeNode(value)
        else:
            self._insert(self.root, value)

    def _insert(self, node, value):
        if value < node.value:
            if node.left:
                self._insert(node.left, value)
            else:
                node.left = TreeNode(value)
        else:
            if node.right:
                self._insert(node.right, value)
            else:
                node.right = TreeNode(value)

    def delete(self, value):
        # Your code here

    def _min_value_node(self, node):
        current = node
        while current.left:
            current = current.left
        return current

bst = BinarySearchTree()
bst.insert(5)
bst.insert(3)
bst.insert(7)
bst.insert(2)
bst.insert(4)
bst.insert(6)
bst.insert(8)`,
      solution: `class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinarySearchTree:
    def __init__(self):
        self.root = None

    def insert(self, value):
        if not self.root:
            self.root = TreeNode(value)
        else:
            self._insert(self.root, value)

    def _insert(self, node, value):
        if value < node.value:
            if node.left:
                self._insert(node.left, value)
            else:
                node.left = TreeNode(value)
        else:
            if node.right:
                self._insert(node.right, value)
            else:
                node.right = TreeNode(value)

    def delete(self, value):
        self.root = self._delete(self.root, value)

    def _delete(self, node, value):
        if not node:
            return node
        if value < node.value:
            node.left = self._delete(node.left, value)
        elif value > node.value:
            node.right = self._delete(node.right, value)
        else:
            if not node.left:
                return node.right
            elif not node.right:
                return node.left
            temp = self._min_value_node(node.right)
            node.value = temp.value
            node.right = self._delete(node.right, temp.value)
        return node

    def _min_value_node(self, node):
        current = node
        while current.left:
            current = current.left
        return current

bst = BinarySearchTree()
bst.insert(5)
bst.insert(3)
bst.insert(7)
bst.insert(2)
bst.insert(4)
bst.insert(6)
bst.insert(8)
bst.delete(4)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following operations can be performed on a Binary Search Tree?',
      options: ['Insertion', 'Deletion', 'Search', 'All of the above'],
      correctAnswer: 3,
      explanations: [
        'This is correct. Insertion can be performed on a BST.',
        'This is correct. Deletion can be performed on a BST.',
        'This is correct. Search can be performed on a BST.',
        'This is correct. All of the above operations can be performed on a BST.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the time complexity of searching for a node in a Binary Search Tree?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. The time complexity is not constant.',
        'This is correct. The time complexity for searching in a BST is O(log n) in the average case.',
        'This is incorrect. The time complexity is not linear.',
        'This is incorrect. The time complexity is not quadratic.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const bstValidationData: LessonContent = {
  title: 'BST Validation',
  content: `<p>
Validating whether a given binary tree is a Binary Search Tree (BST) is an important task in tree-based algorithms and data structures. 
A valid BST must satisfy the property that for each node, all elements in its left subtree are less than the node, and all elements in its right subtree are greater than the node.
</p>

<ul>
<li><strong>Validation Algorithm:</strong> Implementing an algorithm to check if a binary tree is a valid BST.</li>
<li><strong>Example Usage:</strong> Demonstrating how to validate a BST.</li>
</ul>`,
  codeExample: `# Node Class
class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

# Tree Class
class BinarySearchTree:
    def __init__(self):
        self.root = None

    def is_valid_bst(self):
        return self._is_valid_bst(self.root, float('-inf'), float('inf'))

    def _is_valid_bst(self, node, min_val, max_val):
        if not node:
            return True
        if node.value <= min_val or node.value >= max_val:
            return False
        return (self._is_valid_bst(node.left, min_val, node.value) and
                self._is_valid_bst(node.right, node.value, max_val))

# Example Usage
bst = BinarySearchTree()
bst.root = TreeNode(5)
bst.root.left = TreeNode(3)
bst.root.right = TreeNode(7)
bst.root.left.left = TreeNode(2)
bst.root.left.right = TreeNode(4)
bst.root.right.left = TreeNode(6)
bst.root.right.right = TreeNode(8)

print("Is Valid BST:", bst.is_valid_bst())  # Output: True`,
  exercises: [
    {
      prompt: 'Implement the method to check if a binary tree is a valid Binary Search Tree.',
      initialCode: `# Write your solution here
class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinarySearchTree:
    def __init__(self):
        self.root = None

    def is_valid_bst(self):
        # Your code here

bst = BinarySearchTree()
bst.root = TreeNode(5)
bst.root.left = TreeNode(3)
bst.root.right = TreeNode(7)
bst.root.left.left = TreeNode(2)
bst.root.left.right = TreeNode(4)
bst.root.right.left = TreeNode(6)
bst.root.right.right = TreeNode(8)`,
      solution: `class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinarySearchTree:
    def __init__(self):
        self.root = None

    def is_valid_bst(self):
        return self._is_valid_bst(self.root, float('-inf'), float('inf'))

    def _is_valid_bst(self, node, min_val, max_val):
        if not node:
            return True
        if node.value <= min_val or node.value >= max_val:
            return False
        return (self._is_valid_bst(node.left, min_val, node.value) and
                self._is_valid_bst(node.right, node.value, max_val))

bst = BinarySearchTree()
bst.root = TreeNode(5)
bst.root.left = TreeNode(3)
bst.root.right = TreeNode(7)
bst.root.left.left = TreeNode(2)
bst.root.left.right = TreeNode(4)
bst.root.right.left = TreeNode(6)
bst.root.right.right = TreeNode(8)

print("Is Valid BST:", bst.is_valid_bst())  # Output: True`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following properties must a binary tree satisfy to be considered a Binary Search Tree?',
      options: ['All nodes in the left subtree are greater than the root', 'All nodes in the right subtree are less than the root', 'All nodes in the left subtree are less than the root', 'All nodes in the right subtree are equal to the root'],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. All nodes in the left subtree should be less than the root.',
        'This is incorrect. All nodes in the right subtree should be greater than the root.',
        'This is correct. All nodes in the left subtree are less than the root.',
        'This is incorrect. All nodes in the right subtree should be greater than the root.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the primary purpose of validating a Binary Search Tree?',
      options: ['To ensure the tree is balanced', 'To ensure the tree satisfies the BST properties', 'To ensure the tree is complete', 'None of the above'],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. The primary purpose is not to ensure the tree is balanced.',
        'This is correct. The primary purpose is to ensure the tree satisfies the BST properties.',
        'This is incorrect. The primary purpose is not to ensure the tree is complete.',
        'This is incorrect. The primary purpose is to ensure the tree satisfies the BST properties.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const bstBalancingData: LessonContent = {
  title: 'BST Balancing',
  content: `<p>
Balancing a Binary Search Tree (BST) is crucial for maintaining efficient operations such as insertion, deletion, and search. 
An unbalanced BST can degrade into a linked list, leading to O(n) time complexity for these operations. 
Understanding how to balance a BST is essential for optimizing its performance.
</p>

<ul>
<li><strong>Balancing Techniques:</strong> Understanding various techniques for balancing a BST, such as AVL trees and Red-Black trees.</li>
<li><strong>Example Usage:</strong> Demonstrating how to balance a BST using AVL trees.</li>
</ul>`,
  codeExample: `# Node Class
class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
        self.height = 1

# AVL Tree Class
class AVLTree:
    def __init__(self):
        self.root = None

    def insert(self, value):
        self.root = self._insert(self.root, value)

    def _insert(self, node, value):
        if not node:
            return TreeNode(value)
        elif value < node.value:
            node.left = self._insert(node.left, value)
        else:
            node.right = self._insert(node.right, value)

        node.height = 1 + max(self._get_height(node.left), self._get_height(node.right))
        balance = self._get_balance(node)

        if balance > 1 and value < node.left.value:
            return self._right_rotate(node)
        if balance < -1 and value > node.right.value:
            return self._left_rotate(node)
        if balance > 1 and value > node.left.value:
            node.left = self._left_rotate(node.left)
            return self._right_rotate(node)
        if balance < -1 and value < node.right.value:
            node.right = self._right_rotate(node.right)
            return self._left_rotate(node)

        return node

    def _get_height(self, node):
        if not node:
            return 0
        return node.height

    def _get_balance(self, node):
        if not node:
            return 0
        return self._get_height(node.left) - self._get_height(node.right)

    def _left_rotate(self, z):
        y = z.right
        T2 = y.left

        y.left = z
        z.right = T2

        z.height = 1 + max(self._get_height(z.left), self._get_height(z.right))
        y.height = 1 + max(self._get_height(y.left), self._get_height(y.right))

        return y

    def _right_rotate(self, z):
        y = z.left
        T3 = y.right

        y.right = z
        z.left = T3

        z.height = 1 + max(self._get_height(z.left), self._get_height(z.right))
        y.height = 1 + max(self._get_height(y.left), self._get_height(y.right))

        return y

    def display_tree(self):
        def display(node, level=0):
            if node is None:
                return
            display(node.right, level + 1)
            print("  " * level + str(node.value))
            display(node.left, level + 1)
        display(self.root)

# Example Usage
avl_tree = AVLTree()
avl_tree.insert(10)
avl_tree.insert(20)
avl_tree.insert(30)
avl_tree.insert(40)
avl_tree.insert(50)
avl_tree.insert(25)
avl_tree.display_tree()`,
  exercises: [
    {
      prompt: 'Implement the insertion method for an AVL Tree.',
      initialCode: `# Write your solution here
class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
        self.height = 1

class AVLTree:
    def __init__(self):
        self.root = None

    def insert(self, value):
        # Your code here

    def _get_height(self, node):
        if not node:
            return 0
        return node.height

    def _get_balance(self, node):
        if not node:
            return 0
        return self._get_height(node.left) - self._get_height(node.right)

    def _left_rotate(self, z):
        y = z.right
        T2 = y.left

        y.left = z
        z.right = T2

        z.height = 1 + max(self._get_height(z.left), self._get_height(z.right))
        y.height = 1 + max(self._get_height(y.left), self._get_height(y.right))

        return y

    def _right_rotate(self, z):
        y = z.left
        T3 = y.right

        y.right = z
        z.left = T3

        z.height = 1 + max(self._get_height(z.left), self._get_height(z.right))
        y.height = 1 + max(self._get_height(y.left), self._get_height(y.right))

        return y

avl_tree = AVLTree()
avl_tree.insert(10)
avl_tree.insert(20)
avl_tree.insert(30)
avl_tree.insert(40)
avl_tree.insert(50)
avl_tree.insert(25)`,
      solution: `class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
        self.height = 1

class AVLTree:
    def __init__(self):
        self.root = None

    def insert(self, value):
        self.root = self._insert(self.root, value)

    def _insert(self, node, value):
        if not node:
            return TreeNode(value)
        elif value < node.value:
            node.left = self._insert(node.left, value)
        else:
            node.right = self._insert(node.right, value)

        node.height = 1 + max(self._get_height(node.left), self._get_height(node.right))
        balance = self._get_balance(node)

        if balance > 1 and value < node.left.value:
            return self._right_rotate(node)
        if balance < -1 and value > node.right.value:
            return self._left_rotate(node)
        if balance > 1 and value > node.left.value:
            node.left = self._left_rotate(node.left)
            return self._right_rotate(node)
        if balance < -1 and value < node.right.value:
            node.right = self._right_rotate(node.right)
            return self._left_rotate(node)

        return node

    def _get_height(self, node):
        if not node:
            return 0
        return node.height

    def _get_balance(self, node):
        if not node:
            return 0
        return self._get_height(node.left) - self._get_height(node.right)

    def _left_rotate(self, z):
        y = z.right
        T2 = y.left

        y.left = z
        z.right = T2

        z.height = 1 + max(self._get_height(z.left), self._get_height(z.right))
        y.height = 1 + max(self._get_height(y.left), self._get_height(y.right))

        return y

    def _right_rotate(self, z):
        y = z.left
        T3 = y.right

        y.right = z
        z.left = T3

        z.height = 1 + max(self._get_height(z.left), self._get_height(z.right))
        y.height = 1 + max(self._get_height(y.left), self._get_height(y.right))

        return y

avl_tree = AVLTree()
avl_tree.insert(10)
avl_tree.insert(20)
avl_tree.insert(30)
avl_tree.insert(40)
avl_tree.insert(50)
avl_tree.insert(25)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following techniques can be used to balance a Binary Search Tree?',
      options: ['AVL Trees', 'Red-Black Trees', 'Both of the above', 'None of the above'],
      correctAnswer: 2,
      explanations: [
        'This is correct. AVL Trees can be used to balance a BST.',
        'This is correct. Red-Black Trees can be used to balance a BST.',
        'This is correct. Both AVL Trees and Red-Black Trees can be used to balance a BST.',
        'This is incorrect. Both AVL Trees and Red-Black Trees can be used to balance a BST.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the primary advantage of balancing a Binary Search Tree?',
      options: ['Efficient search operations', 'Efficient insertion operations', 'Both of the above', 'None of the above'],
      correctAnswer: 2,
      explanations: [
        'This is correct. Balancing a BST ensures efficient search operations.',
        'This is correct. Balancing a BST ensures efficient insertion operations.',
        'This is correct. Both efficient search and insertion operations are advantages of balancing a BST.',
        'This is incorrect. Both efficient search and insertion operations are advantages of balancing a BST.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const iterativeTraversalData: LessonContent = {
  title: 'Iterative Traversal',
  content: `<p>
Iterative tree traversal methods use stacks to simulate the recursive calls of traditional traversal algorithms. 
This approach is particularly useful in scenarios where recursion might lead to stack overflow or when you need to control the traversal process more explicitly.
</p>

<ul>
<li><strong>Inorder Traversal:</strong> Using a stack to perform inorder traversal iteratively.</li>
<li><strong>Preorder Traversal:</strong> Using a stack to perform preorder traversal iteratively.</li>
<li><strong>Postorder Traversal:</strong> Using a stack to perform postorder traversal iteratively.</li>
<li><strong>Example Usage:</strong> Demonstrating how to perform these traversals iteratively.</li>
</ul>`,
  codeExample: `# Node Class
class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

# Tree Class
class BinaryTree:
    def __init__(self, root_value):
        self.root = TreeNode(root_value)

    def iterative_inorder(self):
        result = []
        stack = []
        current = self.root
        while current or stack:
            while current:
                stack.append(current)
                current = current.left
            current = stack.pop()
            result.append(current.value)
            current = current.right
        return result

    def iterative_preorder(self):
        if not self.root:
            return []
        result = []
        stack = [self.root]
        while stack:
            current = stack.pop()
            result.append(current.value)
            if current.right:
                stack.append(current.right)
            if current.left:
                stack.append(current.left)
        return result

    def iterative_postorder(self):
        if not self.root:
            return []
        result = []
        stack = [self.root]
        while stack:
            current = stack.pop()
            result.append(current.value)
            if current.left:
                stack.append(current.left)
            if current.right:
                stack.append(current.right)
        return result[::-1]

# Example Usage
tree = BinaryTree(1)
tree.root.left = TreeNode(2)
tree.root.right = TreeNode(3)
tree.root.left.left = TreeNode(4)
tree.root.left.right = TreeNode(5)

print("Iterative Inorder:", tree.iterative_inorder())  # Output: [4, 2, 5, 1, 3]
print("Iterative Preorder:", tree.iterative_preorder())  # Output: [1, 2, 4, 5, 3]
print("Iterative Postorder:", tree.iterative_postorder())  # Output: [4, 5, 2, 3, 1]`,
  exercises: [
    {
      prompt: 'Implement the iterative inorder traversal for a binary tree.',
      initialCode: `# Write your solution here
class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinaryTree:
    def __init__(self, root_value):
        self.root = TreeNode(root_value)

    def iterative_inorder(self):
        # Your code here

tree = BinaryTree(1)
tree.root.left = TreeNode(2)
tree.root.right = TreeNode(3)
tree.root.left.left = TreeNode(4)
tree.root.left.right = TreeNode(5)`,
      solution: `class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinaryTree:
    def __init__(self, root_value):
        self.root = TreeNode(root_value)

    def iterative_inorder(self):
        result = []
        stack = []
        current = self.root
        while current or stack:
            while current:
                stack.append(current)
                current = current.left
            current = stack.pop()
            result.append(current.value)
            current = current.right
        return result

tree = BinaryTree(1)
tree.root.left = TreeNode(2)
tree.root.right = TreeNode(3)
tree.root.left.left = TreeNode(4)
tree.root.left.right = TreeNode(5)

print("Iterative Inorder:", tree.iterative_inorder())  # Output: [4, 2, 5, 1, 3]`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a common use case for iterative tree traversal?',
      options: ['Avoiding stack overflow', 'Controlling traversal process', 'Both of the above', 'None of the above'],
      correctAnswer: 2,
      explanations: [
        'This is correct. Iterative traversal helps avoid stack overflow.',
        'This is correct. Iterative traversal allows for more control over the traversal process.',
        'This is correct. Both avoiding stack overflow and controlling the traversal process are common use cases for iterative traversal.',
        'This is incorrect. Both avoiding stack overflow and controlling the traversal process are common use cases for iterative traversal.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the primary advantage of using a stack for iterative tree traversal?',
      options: ['Efficient memory usage', 'Avoiding recursion', 'Both of the above', 'None of the above'],
      correctAnswer: 2,
      explanations: [
        'This is correct. Using a stack can lead to more efficient memory usage.',
        'This is correct. Using a stack avoids the need for recursion.',
        'This is correct. Both efficient memory usage and avoiding recursion are advantages of using a stack for iterative traversal.',
        'This is incorrect. Both efficient memory usage and avoiding recursion are advantages of using a stack for iterative traversal.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const morrisTraversalData: LessonContent = {
  title: 'Morris Traversal',
  content: `<p>
Morris Traversal is a method for traversing binary trees using O(1) space, meaning it does not require any additional data structures like stacks or queues. 
This traversal method works by temporarily modifying the tree during the traversal process and then restoring it back to its original state.
</p>

<ul>
<li><strong>Inorder Traversal:</strong> Implementing Morris inorder traversal.</li>
<li><strong>Preorder Traversal:</strong> Implementing Morris preorder traversal.</li>
<li><strong>Postorder Traversal:</strong> Implementing Morris postorder traversal.</li>
<li><strong>Example Usage:</strong> Demonstrating how to perform these traversals using Morris traversal.</li>
</ul>`,
  codeExample: `# Node Class
class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

# Tree Class
class BinaryTree:
    def __init__(self, root_value):
        self.root = TreeNode(root_value)

    def morris_inorder(self):
        result = []
        current = self.root
        while current:
            if not current.left:
                result.append(current.value)
                current = current.right
            else:
                predecessor = current.left
                while predecessor.right and predecessor.right != current:
                    predecessor = predecessor.right
                if not predecessor.right:
                    predecessor.right = current
                    current = current.left
                else:
                    predecessor.right = None
                    result.append(current.value)
                    current = current.right
        return result

    def morris_preorder(self):
        result = []
        current = self.root
        while current:
            if not current.left:
                result.append(current.value)
                current = current.right
            else:
                predecessor = current.left
                while predecessor.right and predecessor.right != current:
                    predecessor = predecessor.right
                if not predecessor.right:
                    predecessor.right = current
                    result.append(current.value)
                    current = current.left
                else:
                    predecessor.right = None
                    current = current.right
        return result

    def morris_postorder(self):
        result = []
        current = TreeNode(0)
        current.left = self.root
        while current:
            if not current.left:
                current = current.right
            else:
                predecessor = current.left
                while predecessor.right and predecessor.right != current:
                    predecessor = predecessor.right
                if not predecessor.right:
                    predecessor.right = current
                    current = current.left
                else:
                    predecessor.right = None
                    temp = current.left
                    reverse_path = []
                    while temp:
                        reverse_path.append(temp.value)
                        temp = temp.right
                    result.extend(reverse_path[::-1])
                    current = current.right
        return result

# Example Usage
tree = BinaryTree(1)
tree.root.left = TreeNode(2)
tree.root.right = TreeNode(3)
tree.root.left.left = TreeNode(4)
tree.root.left.right = TreeNode(5)

print("Morris Inorder:", tree.morris_inorder())  # Output: [4, 2, 5, 1, 3]
print("Morris Preorder:", tree.morris_preorder())  # Output: [1, 2, 4, 5, 3]
print("Morris Postorder:", tree.morris_postorder())  # Output: [4, 5, 2, 3, 1]`,
  exercises: [
    {
      prompt: 'Implement the Morris inorder traversal for a binary tree.',
      initialCode: `# Write your solution here
class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinaryTree:
    def __init__(self, root_value):
        self.root = TreeNode(root_value)

    def morris_inorder(self):
        # Your code here

tree = BinaryTree(1)
tree.root.left = TreeNode(2)
tree.root.right = TreeNode(3)
tree.root.left.left = TreeNode(4)
tree.root.left.right = TreeNode(5)`,
      solution: `class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinaryTree:
    def __init__(self, root_value):
        self.root = TreeNode(root_value)

    def morris_inorder(self):
        result = []
        current = self.root
        while current:
            if not current.left:
                result.append(current.value)
                current = current.right
            else:
                predecessor = current.left
                while predecessor.right and predecessor.right != current:
                    predecessor = predecessor.right
                if not predecessor.right:
                    predecessor.right = current
                    current = current.left
                else:
                    predecessor.right = None
                    result.append(current.value)
                    current = current.right
        return result

tree = BinaryTree(1)
tree.root.left = TreeNode(2)
tree.root.right = TreeNode(3)
tree.root.left.left = TreeNode(4)
tree.root.left.right = TreeNode(5)

print("Morris Inorder:", tree.morris_inorder())  # Output: [4, 2, 5, 1, 3]`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a key feature of Morris traversal?',
      options: ['Uses O(1) space', 'Requires recursion', 'Uses a stack', 'None of the above'],
      correctAnswer: 0,
      explanations: [
        'This is correct. Morris traversal uses O(1) space.',
        'This is incorrect. Morris traversal does not require recursion.',
        'This is incorrect. Morris traversal does not use a stack.',
        'This is incorrect. Morris traversal uses O(1) space.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the primary advantage of Morris traversal?',
      options: ['Efficient space usage', 'Faster traversal', 'Both of the above', 'None of the above'],
      correctAnswer: 0,
      explanations: [
        'This is correct. The primary advantage of Morris traversal is efficient space usage.',
        'This is incorrect. The primary advantage is not faster traversal.',
        'This is incorrect. The primary advantage is efficient space usage, not both.',
        'This is incorrect. The primary advantage is efficient space usage.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const specialTraversalsData: LessonContent = {
  title: 'Special Traversals',
  content: `<p>
Special tree traversals include boundary traversal, vertical order traversal, and diagonal traversal. 
These traversals provide unique ways to access and process nodes in a binary tree.
</p>

<ul>
<li><strong>Boundary Traversal:</strong> Traversing the boundary of a binary tree.</li>
<li><strong>Vertical Order Traversal:</strong> Traversing the tree in vertical order.</li>
<li><strong>Diagonal Traversal:</strong> Traversing the tree in diagonal order.</li>
<li><strong>Example Usage:</strong> Demonstrating how to perform these special traversals.</li>
</ul>`,
  codeExample: `# Node Class
class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

# Tree Class
class BinaryTree:
    def __init__(self, root_value):
        self.root = TreeNode(root_value)

    def boundary_traversal(self):
        if not self.root:
            return []
        result = [self.root.value]
        self._left_boundary(self.root.left, result)
        self._leaves(self.root, result)
        self._right_boundary(self.root.right, result)
        return result

    def _left_boundary(self, node, result):
        if not node or (not node.left and not node.right):
            return
        result.append(node.value)
        if node.left:
            self._left_boundary(node.left, result)
        else:
            self._left_boundary(node.right, result)

    def _right_boundary(self, node, result):
        if not node or (not node.left and not node.right):
            return
        if node.right:
            self._right_boundary(node.right, result)
        else:
            self._right_boundary(node.left, result)
        result.append(node.value)

    def _leaves(self, node, result):
        if not node:
            return
        if not node.left and not node.right:
            result.append(node.value)
        self._leaves(node.left, result)
        self._leaves(node.right, result)

    def vertical_order_traversal(self):
        if not self.root:
            return []
        column_map = {}
        queue = [(self.root, 0)]
        while queue:
            node, column = queue.pop(0)
            if column in column_map:
                column_map[column].append(node.value)
            else:
                column_map[column] = [node.value]
            if node.left:
                queue.append((node.left, column - 1))
            if node.right:
                queue.append((node.right, column + 1))
        result = [column_map[key] for key in sorted(column_map.keys())]
        return result

    def diagonal_traversal(self):
        if not self.root:
            return []
        diagonal_map = {}
        self._diagonal_traversal(self.root, 0, diagonal_map)
        result = []
        for key in sorted(diagonal_map.keys()):
            result.extend(diagonal_map[key])
        return result

    def _diagonal_traversal(self, node, diagonal, diagonal_map):
        if not node:
            return
        if diagonal in diagonal_map:
            diagonal_map[diagonal].append(node.value)
        else:
            diagonal_map[diagonal] = [node.value]
        self._diagonal_traversal(node.left, diagonal + 1, diagonal_map)
        self._diagonal_traversal(node.right, diagonal, diagonal_map)

# Example Usage
tree = BinaryTree(1)
tree.root.left = TreeNode(2)
tree.root.right = TreeNode(3)
tree.root.left.left = TreeNode(4)
tree.root.left.right = TreeNode(5)
tree.root.right.left = TreeNode(6)
tree.root.right.right = TreeNode(7)

print("Boundary Traversal:", tree.boundary_traversal())  # Output: [1, 2, 4, 5, 6, 7, 3]
print("Vertical Order Traversal:", tree.vertical_order_traversal())  # Output: [[4], [2], [1, 5, 6], [3], [7]]
print("Diagonal Traversal:", tree.diagonal_traversal())  # Output: [1, 2, 3, 4, 5, 6, 7]`,
  exercises: [
    {
      prompt: 'Implement the boundary traversal for a binary tree.',
      initialCode: `# Write your solution here
class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinaryTree:
    def __init__(self, root_value):
        self.root = TreeNode(root_value)

    def boundary_traversal(self):
        # Your code here

    def _left_boundary(self, node, result):
        # Your code here

    def _right_boundary(self, node, result):
        # Your code here

    def _leaves(self, node, result):
        # Your code here

tree = BinaryTree(1)
tree.root.left = TreeNode(2)
tree.root.right = TreeNode(3)
tree.root.left.left = TreeNode(4)
tree.root.left.right = TreeNode(5)
tree.root.right.left = TreeNode(6)
tree.root.right.right = TreeNode(7)`,
      solution: `class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinaryTree:
    def __init__(self, root_value):
        self.root = TreeNode(root_value)

    def boundary_traversal(self):
        if not self.root:
            return []
        result = [self.root.value]
        self._left_boundary(self.root.left, result)
        self._leaves(self.root, result)
        self._right_boundary(self.root.right, result)
        return result

    def _left_boundary(self, node, result):
        if not node or (not node.left and not node.right):
            return
        result.append(node.value)
        if node.left:
            self._left_boundary(node.left, result)
        else:
            self._left_boundary(node.right, result)

    def _right_boundary(self, node, result):
        if not node or (not node.left and not node.right):
            return
        if node.right:
            self._right_boundary(node.right, result)
        else:
            self._right_boundary(node.left, result)
        result.append(node.value)

    def _leaves(self, node, result):
        if not node:
            return
        if not node.left and not node.right:
            result.append(node.value)
        self._leaves(node.left, result)
        self._leaves(node.right, result)

tree = BinaryTree(1)
tree.root.left = TreeNode(2)
tree.root.right = TreeNode(3)
tree.root.left.left = TreeNode(4)
tree.root.left.right = TreeNode(5)
tree.root.right.left = TreeNode(6)
tree.root.right.right = TreeNode(7)

print("Boundary Traversal:", tree.boundary_traversal())  # Output: [1, 2, 4, 5, 6, 7, 3]`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a special tree traversal method?',
      options: ['Boundary Traversal', 'Vertical Order Traversal', 'Diagonal Traversal', 'All of the above'],
      correctAnswer: 3,
      explanations: [
        'This is correct. Boundary Traversal is a special tree traversal method.',
        'This is correct. Vertical Order Traversal is a special tree traversal method.',
        'This is correct. Diagonal Traversal is a special tree traversal method.',
        'This is correct. All of the above are special tree traversal methods.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the primary advantage of special tree traversals?',
      options: ['Unique node access patterns', 'Efficient space usage', 'Both of the above', 'None of the above'],
      correctAnswer: 0,
      explanations: [
        'This is correct. Special tree traversals provide unique node access patterns.',
        'This is incorrect. The primary advantage is not efficient space usage.',
        'This is incorrect. The primary advantage is unique node access patterns, not both.',
        'This is incorrect. The primary advantage is unique node access patterns.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const treeTransformationsData: LessonContent = {
  title: 'Tree Transformations',
  content: `<p>
Tree transformations involve modifying the structure of a tree in various ways. Common transformations include flattening, inverting, and pruning trees.
</p>

<ul>
<li><strong>Flattening a Tree:</strong> Converting a tree into a list or another linear structure.</li>
<li><strong>Inverting a Tree:</strong> Reversing the tree structure, such as swapping left and right children.</li>
<li><strong>Pruning a Tree:</strong> Removing subtrees or nodes based on certain conditions.</li>
</ul>`,
  codeExample: `# Flattening a Tree
def flatten_tree(root):
    if not root:
        return []
    return [root.val] + flatten_tree(root.left) + flatten_tree(root.right)

# Inverting a Tree
def invert_tree(root):
    if not root:
        return None
    root.left, root.right = invert_tree(root.right), invert_tree(root.left)
    return root

# Pruning a Tree
def prune_tree(root):
    if not root:
        return None
    root.left = prune_tree(root.left)
    root.right = prune_tree(root.right)
    if not root.left and not root.right and root.val == 0:
        return None
    return root`,
  exercises: [
    {
      prompt: 'Flatten a binary tree into a list using pre-order traversal.',
      initialCode: `# Write your solution here
def flatten_tree(root):
    if not root:
        return []
    return [root.val] + flatten_tree(root.left) + flatten_tree(root.right)`,
      solution: `def flatten_tree(root):
    if not root:
        return []
    return [root.val] + flatten_tree(root.left) + flatten_tree(root.right)`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Invert a binary tree.',
      initialCode: `# Write your solution here
def invert_tree(root):
    if not root:
        return None
    root.left, root.right = invert_tree(root.right), invert_tree(root.left)
    return root`,
      solution: `def invert_tree(root):
    if not root:
        return None
    root.left, root.right = invert_tree(root.right), invert_tree(root.left)
    return root`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Prune a binary tree where all nodes have a value of 0.',
      initialCode: `# Write your solution here
def prune_tree(root):
    if not root:
        return None
    root.left = prune_tree(root.left)
    root.right = prune_tree(root.right)
    if not root.left and not root.right and root.val == 0:
        return None
    return root`,
      solution: `def prune_tree(root):
    if not root:
        return None
    root.left = prune_tree(root.left)
    root.right = prune_tree(root.right)
    if not root.left and not root.right and root.val == 0:
        return None
    return root`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a common tree transformation?',
      options: [
        'Sorting the tree',
        'Flattening the tree',
        'Balancing the tree',
        'Rotating the tree',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect because sorting is not a common tree transformation.',
        'This is correct. Flattening a tree is a common transformation.',
        'This is incorrect because balancing is a separate operation.',
        'This is incorrect because rotating is not a common tree transformation.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the purpose of inverting a tree?',
      options: [
        'To sort the tree',
        'To reverse the tree structure',
        'To balance the tree',
        'To prune the tree',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect because sorting is not the purpose of inverting a tree.',
        'This is correct. Inverting a tree reverses its structure.',
        'This is incorrect because balancing is a separate operation.',
        'This is incorrect because pruning is a separate operation.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const treeComparisonsData: LessonContent = {
  title: 'Tree Comparison Problems',
  content: `<p>
Tree comparison problems involve determining relationships and properties between tree structures. This lesson covers three essential problems: Same Tree, Subtree of Another Tree, and Symmetric Tree. Understanding these concepts is crucial for solving various tree-related problems in computer science.
</p>

<h3>Same Tree</h3>
<p>
A "Same Tree" problem requires determining if two binary trees are identical in both structure and node values. This means that each corresponding node in both trees must have the same value, and the structure must be mirror images of each other.
</p>

<h3>Subtree of Another Tree</h3>
<p>
The "Subtree of Another Tree" problem involves checking if one binary tree is a subtree of another. A subtree must have the same structure and node values as the original tree it is being compared to.
</p>

<h3>Symmetric Tree</h3>
<p>
A "Symmetric Tree" is a tree that is a mirror image of itself. This means that the left subtree is a mirror reflection of the right subtree. Determining if a tree is symmetric is essential for understanding tree symmetry and balance.
</p>`,
  codeExample: `class TreeNode {
    constructor(public val: number, public left: TreeNode | null = null, public right: TreeNode | null = null) {}
}

// Same Tree
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;
    if (p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// Subtree of Another Tree
function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (subRoot === null) return true;
    if (root === null) return false;
    if (isSameTree(root, subRoot)) return true;
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

// Symmetric Tree
function isSymmetric(root: TreeNode | null): boolean {
    function isMirror(left: TreeNode | null, right: TreeNode | null): boolean {
        if (left === null && right === null) return true;
        if (left === null || right === null) return false;
        return (left.val === right.val) && isMirror(left.left, right.right) && isMirror(left.right, right.left);
    }
    return root ? isMirror(root.left, root.right) : true;
}

// Example usage:
const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log("Same Tree:", isSameTree(tree1, tree2)); // Output: true

const mainTree = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
const subTree = new TreeNode(2, new TreeNode(4), new TreeNode(5));
console.log("Subtree:", isSubtree(mainTree, subTree)); // Output: true

const symmetricTree = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(4), new TreeNode(3)));
console.log("Symmetric Tree:", isSymmetric(symmetricTree)); // Output: true
`,
  exercises: [
    {
      prompt: 'Implement a function to check if two trees are the same.',
      initialCode: `class TreeNode {
    constructor(public val: number, public left: TreeNode | null = null, public right: TreeNode | null = null) {}
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    // Your code here
}`,
      solution: `function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;
    if (p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Implement a function to check if one tree is a subtree of another.',
      initialCode: `class TreeNode {
    constructor(public val: number, public left: TreeNode | null = null, public right: TreeNode | null = null) {}
}

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    // Your code here
}`,
      solution: `function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (subRoot === null) return true;
    if (root === null) return false;
    if (isSameTree(root, subRoot)) return true;
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement a function to check if a tree is symmetric.',
      initialCode: `class TreeNode {
    constructor(public val: number, public left: TreeNode | null = null, public right: TreeNode | null = null) {}
}

function isSymmetric(root: TreeNode | null): boolean {
    // Your code here
}`,
      solution: `function isSymmetric(root: TreeNode | null): boolean {
    function isMirror(left: TreeNode | null, right: TreeNode | null): boolean {
        if (left === null && right === null) return true;
        if (left === null || right === null) return false;
        return (left.val === right.val) && isMirror(left.left, right.right) && isMirror(left.right, right.left);
    }
    return root ? isMirror(root.left, root.right) : true;
}`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What does it mean for two trees to be the same?',
      options: [
        'They have the same set of values but not necessarily the same structure.',
        'They have identical structure and corresponding nodes with the same values.',
        'They are both binary search trees with the same in-order traversal.',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. The structure must also be identical.',
        'Correct. Both structure and node values must match.',
        'Incorrect. They do not need to be binary search trees.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'How do you check if one tree is a subtree of another?',
      options: [
        'Check if the subtree is identical to the entire tree.',
        'Traverse the main tree and check for a matching subtree structure and values.',
        'Compare the heights of both trees.',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. The subtree can be any part of the main tree, not necessarily the entire tree.',
        'Correct. Traverse and check for a matching subtree.',
        'Incorrect. Heights do not determine subtree relationships.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is a symmetric tree?',
      options: [
        'A tree where the left and right subtrees are mirrors of each other.',
        'A tree where all nodes have the same value.',
        'A tree that is a binary search tree.',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct. The tree is a mirror image of itself.',
        'Incorrect. Symmetry is not about node values being the same.',
        'Incorrect. Symmetry is unrelated to binary search properties.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const pathOperationsData: LessonContent = {
  title: 'Path Operations',
  content: `<p>
Path operations involve working with paths within a tree, such as calculating path sums and finding specific paths.
</p>

<ul>
<li><strong>Path Sum Problems:</strong> Calculating the sum of values along a path from the root to a leaf.</li>
<li><strong>Path Finding Algorithms:</strong> Locating paths that meet certain criteria, such as paths with a specific sum.</li>
</ul>`,
  codeExample: `# Path Sum Problem
def has_path_sum(root, target_sum):
    if not root:
        return False
    if not root.left and not root.right:
        return root.val == target_sum
    return (has_path_sum(root.left, target_sum - root.val) or
            has_path_sum(root.right, target_sum - root.val))

# Path Finding Algorithm
def find_paths(root, target_sum):
    def dfs(node, target, path, result):
        if not node:
            return
        path.append(node.val)
        if not node.left and not node.right and node.val == target:
            result.append(path[:])
        dfs(node.left, target - node.val, path, result)
        dfs(node.right, target - node.val, path, result)
        path.pop()

    result = []
    dfs(root, target_sum, [], result)
    return result`,
  exercises: [
    {
      prompt: 'Write a function to check if a binary tree has a root-to-leaf path with a given sum.',
      initialCode: `# Write your solution here
def has_path_sum(root, target_sum):
    if not root:
        return False
    if not root.left and not root.right:
        return root.val == target_sum
    return (has_path_sum(root.left, target_sum - root.val) or
            has_path_sum(root.right, target_sum - root.val))`,
      solution: `def has_path_sum(root, target_sum):
    if not root:
        return False
    if not root.left and not root.right:
        return root.val == target_sum
    return (has_path_sum(root.left, target_sum - root.val) or
            has_path_sum(root.right, target_sum - root.val))`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Write a function to find all root-to-leaf paths with a given sum.',
      initialCode: `# Write your solution here
def find_paths(root, target_sum):
    def dfs(node, target, path, result):
        if not node:
            return
        path.append(node.val)
        if not node.left and not node.right and node.val == target:
            result.append(path[:])
        dfs(node.left, target - node.val, path, result)
        dfs(node.right, target - node.val, path, result)
        path.pop()

    result = []
    dfs(root, target_sum, [], result)
    return result`,
      solution: `def find_paths(root, target_sum):
    def dfs(node, target, path, result):
        if not node:
            return
        path.append(node.val)
        if not node.left and not node.right and node.val == target:
            result.append(path[:])
        dfs(node.left, target - node.val, path, result)
        dfs(node.right, target - node.val, path, result)
        path.pop()

    result = []
    dfs(root, target_sum, [], result)
    return result`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a common path operation?',
      options: [
        'Sorting the paths',
        'Calculating the path sum',
        'Balancing the paths',
        'Rotating the paths',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect because sorting is not a common path operation.',
        'This is correct. Calculating the path sum is a common operation.',
        'This is incorrect because balancing is a separate operation.',
        'This is incorrect because rotating is not a common path operation.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the purpose of path finding algorithms?',
      options: [
        'To sort the paths',
        'To locate paths that meet certain criteria',
        'To balance the paths',
        'To prune the paths',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect because sorting is not the purpose of path finding algorithms.',
        'This is correct. Path finding algorithms locate paths that meet certain criteria.',
        'This is incorrect because balancing is a separate operation.',
        'This is incorrect because pruning is a separate operation.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const avlTreesData: LessonContent = {
  title: 'AVL Trees',
  content: `<p>
AVL trees are self-balancing binary search trees where the difference between the heights of left and right subtrees cannot be more than one for all nodes.
</p>

<ul>
<li><strong>Balance Factor:</strong> The difference between the height of the left subtree and the height of the right subtree.</li>
<li><strong>Rotations:</strong> Operations used to balance the tree, including left rotation, right rotation, left-right rotation, and right-left rotation.</li>
<li><strong>Insertion and Deletion:</strong> Operations that maintain the balance of the tree by performing rotations when necessary.</li>
</ul>`,
  codeExample: `# AVL Tree Node
class AVLNode:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None
        self.height = 1

# AVL Tree Class
class AVLTree:
    def insert(self, root, key):
        if not root:
            return AVLNode(key)
        elif key < root.key:
            root.left = self.insert(root.left, key)
        else:
            root.right = self.insert(root.right, key)

        root.height = 1 + max(self.get_height(root.left), self.get_height(root.right))
        balance = self.get_balance(root)

        if balance > 1 and key < root.left.key:
            return self.right_rotate(root)
        if balance < -1 and key > root.right.key:
            return self.left_rotate(root)
        if balance > 1 and key > root.left.key:
            root.left = self.left_rotate(root.left)
            return self.right_rotate(root)
        if balance < -1 and key < root.right.key:
            root.right = self.right_rotate(root.right)
            return self.left_rotate(root)

        return root

    def left_rotate(self, z):
        y = z.right
        T2 = y.left
        y.left = z
        z.right = T2
        z.height = 1 + max(self.get_height(z.left), self.get_height(z.right))
        y.height = 1 + max(self.get_height(y.left), self.get_height(y.right))
        return y

    def right_rotate(self, z):
        y = z.left
        T3 = y.right
        y.right = z
        z.left = T3
        z.height = 1 + max(self.get_height(z.left), self.get_height(z.right))
        y.height = 1 + max(self.get_height(y.left), self.get_height(y.right))
        return y

    def get_height(self, root):
        if not root:
            return 0
        return root.height

    def get_balance(self, root):
        if not root:
            return 0
        return self.get_height(root.left) - self.get_height(root.right)`,
  exercises: [
    {
      prompt: 'Implement the insertion operation for an AVL tree.',
      initialCode: `# Write your solution here
class AVLTree:
    def insert(self, root, key):
        if not root:
            return AVLNode(key)
        elif key < root.key:
            root.left = self.insert(root.left, key)
        else:
            root.right = self.insert(root.right, key)

        root.height = 1 + max(self.get_height(root.left), self.get_height(root.right))
        balance = self.get_balance(root)

        if balance > 1 and key < root.left.key:
            return self.right_rotate(root)
        if balance < -1 and key > root.right.key:
            return self.left_rotate(root)
        if balance > 1 and key > root.left.key:
            root.left = self.left_rotate(root.left)
            return self.right_rotate(root)
        if balance < -1 and key < root.right.key:
            root.right = self.right_rotate(root.right)
            return self.left_rotate(root)

        return root`,
      solution: `class AVLTree:
    def insert(self, root, key):
        if not root:
            return AVLNode(key)
        elif key < root.key:
            root.left = self.insert(root.left, key)
        else:
            root.right = self.insert(root.right, key)

        root.height = 1 + max(self.get_height(root.left), self.get_height(root.right))
        balance = self.get_balance(root)

        if balance > 1 and key < root.left.key:
            return self.right_rotate(root)
        if balance < -1 and key > root.right.key:
            return self.left_rotate(root)
        if balance > 1 and key > root.left.key:
            root.left = self.left_rotate(root.left)
            return self.right_rotate(root)
        if balance < -1 and key < root.right.key:
            root.right = self.right_rotate(root.right)
            return self.left_rotate(root)

        return root`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Implement the left rotation operation for an AVL tree.',
      initialCode: `# Write your solution here
def left_rotate(self, z):
    y = z.right
    T2 = y.left
    y.left = z
    z.right = T2
    z.height = 1 + max(self.get_height(z.left), self.get_height(z.right))
    y.height = 1 + max(self.get_height(y.left), self.get_height(y.right))
    return y`,
      solution: `def left_rotate(self, z):
    y = z.right
    T2 = y.left
    y.left = z
    z.right = T2
    z.height = 1 + max(self.get_height(z.left), self.get_height(z.right))
    y.height = 1 + max(self.get_height(y.left), self.get_height(y.right))
    return y`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'What is the balance factor in an AVL tree?',
      options: [
        'The sum of the heights of the left and right subtrees',
        'The difference between the heights of the left and right subtrees',
        'The average height of the left and right subtrees',
        'The maximum height of the left and right subtrees',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect because the balance factor is not the sum of the heights.',
        'This is correct. The balance factor is the difference between the heights of the left and right subtrees.',
        'This is incorrect because the balance factor is not the average height.',
        'This is incorrect because the balance factor is not the maximum height.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'Which of the following is a rotation operation used in AVL trees?',
      options: [
        'Sorting rotation',
        'Balancing rotation',
        'Left rotation',
        'Right rotation',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect because sorting rotation is not a valid operation in AVL trees.',
        'This is incorrect because balancing rotation is not a specific operation.',
        'This is correct. Left rotation is a valid operation in AVL trees.',
        'This is correct. Right rotation is a valid operation in AVL trees.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const redBlackTreesData: LessonContent = {
  title: 'Red-Black Trees',
  content: `<p>
Red-Black trees are self-balancing binary search trees with an extra bit of storage per node: its color, which can be either red or black.
</p>

<ul>
<li><strong>Properties:</strong> Ensures that no path from the root to a leaf is more than twice as long as any other path, maintaining balance.</li>
<li><strong>Insertion and Deletion:</strong> Operations that maintain the properties of the Red-Black tree by performing recoloring and rotations.</li>
<li><strong>Rotations:</strong> Operations used to balance the tree, including left rotation and right rotation.</li>
</ul>`,
  codeExample: `# Red-Black Tree Node
class RBNode:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None
        self.color = 1  # 1 for red, 0 for black

# Red-Black Tree Class
class RBTree:
    def insert(self, root, key):
        def rotate_left(node):
            right_child = node.right
            node.right = right_child.left
            right_child.left = node
            right_child.color = node.color
            node.color = 1
            return right_child

        def rotate_right(node):
            left_child = node.left
            node.left = left_child.right
            left_child.right = node
            left_child.color = node.color
            node.color = 1
            return left_child

        def flip_colors(node):
            node.color = 1
            node.left.color = 0
            node.right.color = 0

        if not root:
            return RBNode(key)
        if key < root.key:
            root.left = self.insert(root.left, key)
        else:
            root.right = self.insert(root.right, key)

        if (root.right and root.right.color == 1 and
                (not root.left or root.left.color == 0)):
            root = rotate_left(root)
        if (root.left and root.left.color == 1 and
                root.left.left and root.left.left.color == 1):
            root = rotate_right(root)
        if (root.left and root.left.color == 1 and
                root.right and root.right.color == 1):
            flip_colors(root)

        return root`,
  exercises: [
    {
      prompt: 'Implement the insertion operation for a Red-Black tree.',
      initialCode: `# Write your solution here
class RBTree:
    def insert(self, root, key):
        def rotate_left(node):
            right_child = node.right
            node.right = right_child.left
            right_child.left = node
            right_child.color = node.color
            node.color = 1
            return right_child

        def rotate_right(node):
            left_child = node.left
            node.left = left_child.right
            left_child.right = node
            left_child.color = node.color
            node.color = 1
            return left_child

        def flip_colors(node):
            node.color = 1
            node.left.color = 0
            node.right.color = 0

        if not root:
            return RBNode(key)
        if key < root.key:
            root.left = self.insert(root.left, key)
        else:
            root.right = self.insert(root.right, key)

        if (root.right and root.right.color == 1 and
                (not root.left or root.left.color == 0)):
            root = rotate_left(root)
        if (root.left and root.left.color == 1 and
                root.left.left and root.left.left.color == 1):
            root = rotate_right(root)
        if (root.left and root.left.color == 1 and
                root.right and root.right.color == 1):
            flip_colors(root)

        return root`,
      solution: `class RBTree:
    def insert(self, root, key):
        def rotate_left(node):
            right_child = node.right
            node.right = right_child.left
            right_child.left = node
            right_child.color = node.color
            node.color = 1
            return right_child

        def rotate_right(node):
            left_child = node.left
            node.left = left_child.right
            left_child.right = node
            left_child.color = node.color
            node.color = 1
            return left_child

        def flip_colors(node):
            node.color = 1
            node.left.color = 0
            node.right.color = 0

        if not root:
            return RBNode(key)
        if key < root.key:
            root.left = self.insert(root.left, key)
        else:
            root.right = self.insert(root.right, key)

        if (root.right and root.right.color == 1 and
                (not root.left or root.left.color == 0)):
            root = rotate_left(root)
        if (root.left and root.left.color == 1 and
                root.left.left and root.left.left.color == 1):
            root = rotate_right(root)
        if (root.left and root.left.color == 1 and
                root.right and root.right.color == 1):
            flip_colors(root)

        return root`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Implement the left rotation operation for a Red-Black tree.',
      initialCode: `# Write your solution here
def rotate_left(node):
    right_child = node.right
    node.right = right_child.left
    right_child.left = node
    right_child.color = node.color
    node.color = 1
    return right_child`,
      solution: `def rotate_left(node):
    right_child = node.right
    node.right = right_child.left
    right_child.left = node
    right_child.color = node.color
    node.color = 1
    return right_child`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a property of Red-Black trees?',
      options: [
        'All nodes are either red or black',
        'The root is always black',
        'No two red nodes can be adjacent',
        'All of the above',
      ],
      correctAnswer: 3,
      explanations: [
        'This is correct. All nodes in a Red-Black tree are either red or black.',
        'This is correct. The root of a Red-Black tree is always black.',
        'This is correct. In a Red-Black tree, no two red nodes can be adjacent.',
        'This is correct. All of the above are properties of Red-Black trees.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'Which of the following operations is used to maintain the properties of a Red-Black tree?',
      options: [
        'Sorting',
        'Balancing',
        'Recoloring',
        'Rotations',
      ],
      correctAnswer: 3,
      explanations: [
        'This is incorrect because sorting is not an operation used to maintain the properties of a Red-Black tree.',
        'This is incorrect because balancing is not a specific operation.',
        'This is correct. Recoloring is used to maintain the properties of a Red-Black tree.',
        'This is correct. Rotations are used to maintain the properties of a Red-Black tree.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const bTreesData: LessonContent = {
  title: 'B-Trees',
  content: `<p>
B-trees are self-balancing search trees that maintain data sorted and allow searches, sequential access, insertions, and deletions in logarithmic time.
</p>

<ul>
<li><strong>Order:</strong> The maximum number of children a node can have.</li>
<li><strong>Insertion and Deletion:</strong> Operations that maintain the balance and properties of the B-tree.</li>
<li><strong>Variations:</strong> B+ trees, B* trees, and other variants that optimize for different use cases.</li>
</ul>`,
  codeExample: `# B-Tree Node
class BTreeNode:
    def __init__(self, leaf=False):
        self.leaf = leaf
        self.keys = []
        self.child = []

# B-Tree Class
class BTree:
    def insert(self, key):
        root = self.root
        if len(root.keys) == (2 * self.t) - 1:
            temp = BTreeNode()
            self.root = temp
            temp.child.insert(0, root)
            self.split_child(temp, 0)
            self.insert_non_full(temp, key)
        else:
            self.insert_non_full(root, key)

    def insert_non_full(self, x, k):
        i = len(x.keys) - 1
        if x.leaf:
            x.keys.append((None, None))
            while i >= 0 and k[0] < x.keys[i][0]:
                x.keys[i + 1] = x.keys[i]
                i -= 1
            x.keys[i + 1] = k
        else:
            while i >= 0 and k[0] < x.keys[i][0]:
                i -= 1
            i += 1
            if len(x.child[i].keys) == (2 * self.t) - 1:
                self.split_child(x, i)
                if k[0] > x.keys[i][0]:
                    i += 1
            self.insert_non_full(x.child[i], k)

    def split_child(self, x, i):
        t = self.t
        y = x.child[i]
        z = BTreeNode(leaf=y.leaf)
        x.child.insert(i + 1, z)
        x.keys.insert(i, y.keys[t - 1])
        z.keys = y.keys[t: (2 * t) - 1]
        y.keys = y.keys[0: t - 1]
        if not y.leaf:
            z.child = y.child[t: 2 * t]
            y.child = y.child[0: t - 1]`,
  exercises: [
    {
      prompt: 'Implement the insertion operation for a B-tree.',
      initialCode: `# Write your solution here
class BTree:
    def insert(self, key):
        root = self.root
        if len(root.keys) == (2 * self.t) - 1:
            temp = BTreeNode()
            self.root = temp
            temp.child.insert(0, root)
            self.split_child(temp, 0)
            self.insert_non_full(temp, key)
        else:
            self.insert_non_full(root, key)`,
      solution: `class BTree:
    def insert(self, key):
        root = self.root
        if len(root.keys) == (2 * self.t) - 1:
            temp = BTreeNode()
            self.root = temp
            temp.child.insert(0, root)
            self.split_child(temp, 0)
            self.insert_non_full(temp, key)
        else:
            self.insert_non_full(root, key)`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Implement the split child operation for a B-tree.',
      initialCode: `# Write your solution here
def split_child(self, x, i):
    t = self.t
    y = x.child[i]
    z = BTreeNode(leaf=y.leaf)
    x.child.insert(i + 1, z)
    x.keys.insert(i, y.keys[t - 1])
    z.keys = y.keys[t: (2 * t) - 1]
    y.keys = y.keys[0: t - 1]
    if not y.leaf:
        z.child = y.child[t: 2 * t]
        y.child = y.child[0: t - 1]`,
      solution: `def split_child(self, x, i):
    t = self.t
    y = x.child[i]
    z = BTreeNode(leaf=y.leaf)
    x.child.insert(i + 1, z)
    x.keys.insert(i, y.keys[t - 1])
    z.keys = y.keys[t: (2 * t) - 1]
    y.keys = y.keys[0: t - 1]
    if not y.leaf:
        z.child = y.child[t: 2 * t]
        y.child = y.child[0: t - 1]`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a property of B-trees?',
      options: [
        'All leaves are at the same level',
        'Nodes can have a maximum of 2 children',
        'Nodes can have a maximum of 2 keys',
        'All of the above',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. In a B-tree, all leaves are at the same level.',
        'This is incorrect. Nodes in a B-tree can have a maximum of t children, where t is the order of the B-tree.',
        'This is incorrect. Nodes in a B-tree can have a maximum of t-1 keys, where t is the order of the B-tree.',
        'This is incorrect because only the first option is correct.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'Which of the following operations is used to maintain the properties of a B-tree?',
      options: [
        'Sorting',
        'Balancing',
        'Splitting',
        'Merging',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect because sorting is not an operation used to maintain the properties of a B-tree.',
        'This is incorrect because balancing is not a specific operation.',
        'This is correct. Splitting is used to maintain the properties of a B-tree.',
        'This is correct. Merging is used to maintain the properties of a B-tree.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const nAryTreesData: LessonContent = {
  title: 'N-ary Trees',
  content: `<p>
N-ary trees are tree data structures in which each node can have more than two children. These trees are useful for representing hierarchical data structures.
</p>

<ul>
<li><strong>Node Structure:</strong> Each node contains a value and a list of children nodes.</li>
<li><strong>Traversal:</strong> Common traversals include pre-order, post-order, and level-order.</li>
<li><strong>Operations:</strong> Insertion, deletion, and searching in N-ary trees.</li>
</ul>`,
  codeExample: `# N-ary Tree Node
class NaryNode:
    def __init__(self, val=None):
        self.val = val
        self.children = []

# N-ary Tree Class
class NaryTree:
    def insert(self, root, val, parent_val=None):
        if not root:
            return NaryNode(val)
        if root.val == parent_val:
            root.children.append(NaryNode(val))
        else:
            for child in root.children:
                self.insert(child, val, parent_val)
        return root

    def pre_order_traversal(self, root):
        if not root:
            return []
        result = [root.val]
        for child in root.children:
            result.extend(self.pre_order_traversal(child))
        return result`,
  exercises: [
    {
      prompt: 'Implement the insertion operation for an N-ary tree.',
      initialCode: `# Write your solution here
class NaryTree:
    def insert(self, root, val, parent_val=None):
        if not root:
            return NaryNode(val)
        if root.val == parent_val:
            root.children.append(NaryNode(val))
        else:
            for child in root.children:
                self.insert(child, val, parent_val)
        return root`,
      solution: `class NaryTree:
    def insert(self, root, val, parent_val=None):
        if not root:
            return NaryNode(val)
        if root.val == parent_val:
            root.children.append(NaryNode(val))
        else:
            for child in root.children:
                self.insert(child, val, parent_val)
        return root`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement the pre-order traversal for an N-ary tree.',
      initialCode: `# Write your solution here
def pre_order_traversal(self, root):
    if not root:
        return []
    result = [root.val]
    for child in root.children:
        result.extend(self.pre_order_traversal(child))
    return result`,
      solution: `def pre_order_traversal(self, root):
    if not root:
        return []
    result = [root.val]
    for child in root.children:
        result.extend(self.pre_order_traversal(child))
    return result`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a common traversal method for N-ary trees?',
      options: [
        'In-order traversal',
        'Pre-order traversal',
        'Post-order traversal',
        'Level-order traversal',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect because in-order traversal is not common for N-ary trees.',
        'This is correct. Pre-order traversal is common for N-ary trees.',
        'This is correct. Post-order traversal is common for N-ary trees.',
        'This is correct. Level-order traversal is common for N-ary trees.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the maximum number of children a node can have in an N-ary tree?',
      options: [
        '2',
        '3',
        '4',
        'Unlimited',
      ],
      correctAnswer: 3,
      explanations: [
        'This is incorrect. In an N-ary tree, a node can have more than 2 children.',
        'This is incorrect. In an N-ary tree, a node can have more than 3 children.',
        'This is incorrect. In an N-ary tree, a node can have more than 4 children.',
        'This is correct. In an N-ary tree, a node can have an unlimited number of children.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const segmentTreesData: LessonContent = {
  title: 'Segment Trees',
  content: `<p>
Segment trees are a data structure used for storing information about intervals or segments. They allow querying which of the stored segments contain a given point.
</p>

<ul>
<li><strong>Node Structure:</strong> Each node represents an interval and stores information about that interval.</li>
<li><strong>Operations:</strong> Construction, update, and query operations in a segment tree.</li>
<li><strong>Applications:</strong> Range minimum query, range sum query, and other range-based queries.</li>
</ul>`,
  codeExample: `# Segment Tree Node
class SegmentTreeNode:
    def __init__(self, start, end):
        self.start = start
        self.end = end
        self.total = 0
        self.left = None
        self.right = None

# Segment Tree Class
class SegmentTree:
    def build(self, arr, l, r):
        if l > r:
            return None
        if l == r:
            node = SegmentTreeNode(l, r)
            node.total = arr[l]
            return node
        mid = (l + r) // 2
        root = SegmentTreeNode(l, r)
        root.left = self.build(arr, l, mid)
        root.right = self.build(arr, mid + 1, r)
        root.total = root.left.total + root.right.total
        return root

    def update(self, root, i, val):
        if root.start == root.end:
            root.total = val
            return val
        mid = (root.start + root.end) // 2
        if i <= mid:
            self.update(root.left, i, val)
        else:
            self.update(root.right, i, val)
        root.total = root.left.total + root.right.total
        return root.total`,
  exercises: [
    {
      prompt: 'Implement the build operation for a segment tree.',
      initialCode: `# Write your solution here
class SegmentTree:
    def build(self, arr, l, r):
        if l > r:
            return None
        if l == r:
            node = SegmentTreeNode(l, r)
            node.total = arr[l]
            return node
        mid = (l + r) // 2
        root = SegmentTreeNode(l, r)
        root.left = self.build(arr, l, mid)
        root.right = self.build(arr, mid + 1, r)
        root.total = root.left.total + root.right.total
        return root`,
      solution: `class SegmentTree:
    def build(self, arr, l, r):
        if l > r:
            return None
        if l == r:
            node = SegmentTreeNode(l, r)
            node.total = arr[l]
            return node
        mid = (l + r) // 2
        root = SegmentTreeNode(l, r)
        root.left = self.build(arr, l, mid)
        root.right = self.build(arr, mid + 1, r)
        root.total = root.left.total + root.right.total
        return root`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Implement the update operation for a segment tree.',
      initialCode: `# Write your solution here
def update(self, root, i, val):
    if root.start == root.end:
        root.total = val
        return val
    mid = (root.start + root.end) // 2
    if i <= mid:
        self.update(root.left, i, val)
    else:
        self.update(root.right, i, val)
    root.total = root.left.total + root.right.total
    return root.total`,
      solution: `def update(self, root, i, val):
    if root.start == root.end:
        root.total = val
        return val
    mid = (root.start + root.end) // 2
    if i <= mid:
        self.update(root.left, i, val)
    else:
        self.update(root.right, i, val)
    root.total = root.left.total + root.right.total
    return root.total`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a common application of a segment tree?',
      options: [
        'Sorting numbers',
        'Range minimum query',
        'Balancing trees',
        'Graph traversal',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect because sorting numbers is not a common application of a segment tree.',
        'This is correct. Range minimum query is a common application of a segment tree.',
        'This is incorrect because balancing trees is not a common application of a segment tree.',
        'This is incorrect because graph traversal is not a common application of a segment tree.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What does the total attribute in a segment tree node represent?',
      options: [
        'The sum of all elements in the array',
        'The sum of elements in the interval represented by the node',
        'The maximum element in the interval',
        'The minimum element in the interval',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect because the total attribute does not represent the sum of all elements in the array.',
        'This is correct. The total attribute represents the sum of elements in the interval represented by the node.',
        'This is incorrect because the total attribute does not represent the maximum element in the interval.',
        'This is incorrect because the total attribute does not represent the minimum element in the interval.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const treeDPData: LessonContent = {
  title: 'Dynamic Programming on Trees',
  content: `<p>
Dynamic programming (DP) on trees involves solving tree problems by breaking them down into smaller subproblems and storing the results of these subproblems to avoid redundant calculations.
</p>

<ul>
<li><strong>Tree DP Basics:</strong> Understanding how to apply DP techniques to tree structures.</li>
<li><strong>Common Problems:</strong> Problems such as maximum independent set, tree diameter, and subtree problems.</li>
<li><strong>Applications:</strong> Network design, computational biology, and optimization problems.</li>
</ul>`,
  codeExample: `# Tree Node
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.children = []

# Maximum Independent Set in a Tree
def max_independent_set(root):
    def dfs(node):
        if not node:
            return 0, 0
        include, exclude = 1, 0
        for child in node.children:
            child_include, child_exclude = dfs(child)
            include += child_exclude
            exclude += max(child_include, child_exclude)
        return include, exclude

    include, exclude = dfs(root)
    return max(include, exclude)`,
  exercises: [
    {
      prompt: 'Implement the maximum independent set problem using dynamic programming on a tree.',
      initialCode: `# Write your solution here
def max_independent_set(root):
    def dfs(node):
        if not node:
            return 0, 0
        include, exclude = 1, 0
        for child in node.children:
            child_include, child_exclude = dfs(child)
            include += child_exclude
            exclude += max(child_include, child_exclude)
        return include, exclude

    include, exclude = dfs(root)
    return max(include, exclude)`,
      solution: `def max_independent_set(root):
    def dfs(node):
        if not node:
            return 0, 0
        include, exclude = 1, 0
        for child in node.children:
            child_include, child_exclude = dfs(child)
            include += child_exclude
            exclude += max(child_include, child_exclude)
        return include, exclude

    include, exclude = dfs(root)
    return max(include, exclude)`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Implement the tree diameter problem using dynamic programming on a tree.',
      initialCode: `# Write your solution here
def tree_diameter(root):
    def dfs(node):
        if not node:
            return 0, 0
        max_depth1, max_depth2 = 0, 0
        diameter = 0
        for child in node.children:
            child_depth, child_diameter = dfs(child)
            diameter = max(diameter, child_diameter)
            if child_depth > max_depth1:
                max_depth2 = max_depth1
                max_depth1 = child_depth
            elif child_depth > max_depth2:
                max_depth2 = child_depth
        return max_depth1 + 1, max(diameter, max_depth1 + max_depth2)

    _, diameter = dfs(root)
    return diameter`,
      solution: `def tree_diameter(root):
    def dfs(node):
        if not node:
            return 0, 0
        max_depth1, max_depth2 = 0, 0
        diameter = 0
        for child in node.children:
            child_depth, child_diameter = dfs(child)
            diameter = max(diameter, child_diameter)
            if child_depth > max_depth1:
                max_depth2 = max_depth1
                max_depth1 = child_depth
            elif child_depth > max_depth2:
                max_depth2 = child_depth
        return max_depth1 + 1, max(diameter, max_depth1 + max_depth2)

    _, diameter = dfs(root)
    return diameter`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a common problem solved using dynamic programming on trees?',
      options: [
        'Sorting numbers',
        'Maximum independent set',
        'Balancing trees',
        'Graph traversal',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. Sorting numbers is not a common problem solved using DP on trees.',
        'This is correct. Maximum independent set is a common problem solved using DP on trees.',
        'This is incorrect. Balancing trees is not a common problem solved using DP on trees.',
        'This is incorrect. Graph traversal is not a common problem solved using DP on trees.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the main advantage of using dynamic programming on trees?',
      options: [
        'Reduces time complexity',
        'Increases space complexity',
        'Simplifies tree traversal',
        'Eliminates recursion',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. DP on trees reduces time complexity by storing results of subproblems.',
        'This is incorrect. DP on trees typically increases space complexity due to memoization.',
        'This is incorrect. DP on trees does not necessarily simplify tree traversal.',
        'This is incorrect. DP on trees often involves recursion.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const treeDistanceData: LessonContent = {
  title: 'Tree Distance Problems',
  content: `<p>
Tree distance problems involve calculating distances between nodes in a tree, finding the longest path (diameter), and other path-related problems.
</p>

<ul>
<li><strong>Distance Calculation:</strong> Techniques to calculate the distance between two nodes in a tree.</li>
<li><strong>Tree Diameter:</strong> Finding the longest path between any two nodes in a tree.</li>
<li><strong>Applications:</strong> Network routing, computational biology, and optimization problems.</li>
</ul>`,
  codeExample: `# Tree Node
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.children = []

# Tree Diameter
def tree_diameter(root):
    def dfs(node):
        if not node:
            return 0, 0
        max_depth1, max_depth2 = 0, 0
        diameter = 0
        for child in node.children:
            child_depth, child_diameter = dfs(child)
            diameter = max(diameter, child_diameter)
            if child_depth > max_depth1:
                max_depth2 = max_depth1
                max_depth1 = child_depth
            elif child_depth > max_depth2:
                max_depth2 = child_depth
        return max_depth1 + 1, max(diameter, max_depth1 + max_depth2)

    _, diameter = dfs(root)
    return diameter`,
  exercises: [
    {
      prompt: 'Implement the tree diameter problem to find the longest path between any two nodes in a tree.',
      initialCode: `# Write your solution here
def tree_diameter(root):
    def dfs(node):
        if not node:
            return 0, 0
        max_depth1, max_depth2 = 0, 0
        diameter = 0
        for child in node.children:
            child_depth, child_diameter = dfs(child)
            diameter = max(diameter, child_diameter)
            if child_depth > max_depth1:
                max_depth2 = max_depth1
                max_depth1 = child_depth
            elif child_depth > max_depth2:
                max_depth2 = child_depth
        return max_depth1 + 1, max(diameter, max_depth1 + max_depth2)

    _, diameter = dfs(root)
    return diameter`,
      solution: `def tree_diameter(root):
    def dfs(node):
        if not node:
            return 0, 0
        max_depth1, max_depth2 = 0, 0
        diameter = 0
        for child in node.children:
            child_depth, child_diameter = dfs(child)
            diameter = max(diameter, child_diameter)
            if child_depth > max_depth1:
                max_depth2 = max_depth1
                max_depth1 = child_depth
            elif child_depth > max_depth2:
                max_depth2 = child_depth
        return max_depth1 + 1, max(diameter, max_depth1 + max_depth2)

    _, diameter = dfs(root)
    return diameter`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Implement a function to calculate the distance between two nodes in a tree.',
      initialCode: `# Write your solution here
def find_distance(root, node1, node2):
    def dfs(node, target, depth):
        if not node:
            return -1
        if node.val == target:
            return depth
        for child in node.children:
            result = dfs(child, target, depth + 1)
            if result != -1:
                return result
        return -1

    def lca(node, p, q):
        if not node:
            return None
        if node.val == p or node.val == q:
            return node
        found = []
        for child in node.children:
            result = lca(child, p, q)
            if result:
                found.append(result)
        if len(found) == 2:
            return node
        return found[0] if found else None

    lca_node = lca(root, node1, node2)
    dist1 = dfs(lca_node, node1, 0)
    dist2 = dfs(lca_node, node2, 0)
    return dist1 + dist2`,
      solution: `def find_distance(root, node1, node2):
    def dfs(node, target, depth):
        if not node:
            return -1
        if node.val == target:
            return depth
        for child in node.children:
            result = dfs(child, target, depth + 1)
            if result != -1:
                return result
        return -1

    def lca(node, p, q):
        if not node:
            return None
        if node.val == p or node.val == q:
            return node
        found = []
        for child in node.children:
            result = lca(child, p, q)
            if result:
                found.append(result)
        if len(found) == 2:
            return node
        return found[0] if found else None

    lca_node = lca(root, node1, node2)
    dist1 = dfs(lca_node, node1, 0)
    dist2 = dfs(lca_node, node2, 0)
    return dist1 + dist2`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a common tree distance problem?',
      options: [
        'Sorting numbers',
        'Tree diameter',
        'Balancing trees',
        'Graph traversal',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. Sorting numbers is not a common tree distance problem.',
        'This is correct. Tree diameter is a common tree distance problem.',
        'This is incorrect. Balancing trees is not a common tree distance problem.',
        'This is incorrect. Graph traversal is not a common tree distance problem.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the main goal of solving tree distance problems?',
      options: [
        'Finding the shortest path',
        'Finding the longest path',
        'Balancing the tree',
        'Sorting the tree nodes',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. The main goal is not to find the shortest path.',
        'This is correct. The main goal is to find the longest path or other distance-related metrics.',
        'This is incorrect. Balancing the tree is not the main goal.',
        'This is incorrect. Sorting the tree nodes is not the main goal.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const treeLessons: Record<string, LessonContent> = {
  'tree-concept': treeConceptData,
  'tree-implementation': treeImplementationData,
  'tree-properties': treePropertiesData,
  'interview-patterns': commonTreePatternsData,
  'binary-tree-basics': binaryTreeBasicsData,
  'tree-traversal': treeTraversalData,
  'tree-views': treeViewsData,
  'tree-properties-checking': treePropertiesCheckingData,
  'bst-concept': bstConceptData,
  'bst-operations': bstOperationsData,
  'bst-validation': bstValidationData,
  'bst-balancing': bstBalancingData,
  'iterative-traversal': iterativeTraversalData,
  'morris-traversal': morrisTraversalData,
  'special-traversals': specialTraversalsData,
  'tree-transformations': treeTransformationsData,
  'tree-comparisons': treeComparisonsData,
  'path-operations': pathOperationsData,
  'avl-trees': avlTreesData,
  'red-black-trees': redBlackTreesData,
  'b-trees': bTreesData,
  'n-ary-trees': nAryTreesData,
  'segment-trees': segmentTreesData,
  'tree-dp': treeDPData,
  'tree-distance': treeDistanceData,
};

export const treeLessonsTab: LessonsTab = {
  curriculum: treeCurriculum,
  lessons: treeLessons,
};
