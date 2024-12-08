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
Trees are hierarchical data structures that represent relationships between elements in a parent-child format. Think of a family tree or an organizational chart - each element (called a <strong>node</strong>) can have multiple children but only one parent.
</p>

<h3><u>Core Tree Terminology</u></h3>

<p>Understanding trees begins with mastering these fundamental concepts:</p>

<h4><b>Basic Components</b></h4>
<li>Node: A fundamental unit containing data and references to child nodes</li>
<li>Edge: A connection between two nodes (parent-child relationship)</li>
<li>Root: The topmost node of the tree (has no parent)</li>
<li>Leaf: A node with no children</li>
<li>Parent: A node with child nodes</li>
<li>Child: A node connected to another node moving away from the root</li>

<h4><b>Tree Properties</b></h4>
<li>Height: The length of the longest path from root to any leaf</li>
<li>Depth: The length of the path from a node to the root</li>
<li>Level: All nodes at the same depth form a level (root is level 0)</li>
<li>Degree: The number of children a node has</li>

<h3><u>Types of Trees</u></h3>

<h4><b>Binary Trees</b></h4>
<li>Each node has at most two children</li>
<li>Children are typically called 'left' and 'right'</li>
<li>Common in search and sorting applications</li>

<h4><b>N-ary Trees</b></h4>
<li>Nodes can have any number of children</li>
<li>Example: File system hierarchy</li>

<h3><u>Common Operations</u></h3>
<table>
<tr><th>Operation</th><th>Description</th><th>Typical Complexity</th></tr>
<tr><td>Insertion</td><td>Add a new node</td><td>O(log n) to O(n)</td></tr>
<tr><td>Deletion</td><td>Remove a node</td><td>O(log n) to O(n)</td></tr>
<tr><td>Search</td><td>Find a node</td><td>O(log n) to O(n)</td></tr>
<tr><td>Traversal</td><td>Visit all nodes</td><td>O(n)</td></tr>
</table>`,
  codeExample: `class TreeNode:
    def __init__(self, value):
        self.value = value
        self.children = []  # For n-ary tree
        self.parent = None  # Optional parent reference

# Creating a simple family tree
def create_family_tree():
    # Create family members
    grandfather = TreeNode("Grandfather")
    father = TreeNode("Father")
    uncle = TreeNode("Uncle")
    child1 = TreeNode("Child 1")
    child2 = TreeNode("Child 2")
    cousin = TreeNode("Cousin")

    # Build relationships
    grandfather.children.extend([father, uncle])
    father.children.extend([child1, child2])
    uncle.children.append(cousin)

    # Set parent references
    for child in grandfather.children:
        child.parent = grandfather
        for grandchild in child.children:
            grandchild.parent = child

    return grandfather

# Example usage
root = create_family_tree()

# Function to print tree structure
def print_tree(node, level=0):
    print("  " * level + node.value)
    for child in node.children:
        print_tree(child, level + 1)

print("Family Tree Structure:")
print_tree(root)`,
  exercises: [
    {
      prompt: 'Create a binary tree node class with value, left, and right child properties. Then create a small tree with 3 nodes.',
      initialCode: `# Write your solution here
class BinaryTreeNode:
    # Add your code here

# Create a small tree`,
      solution: `class BinaryTreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

# Create a small tree
root = BinaryTreeNode(1)
root.left = BinaryTreeNode(2)
root.right = BinaryTreeNode(3)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Write a function that calculates the height of a binary tree recursively.',
      initialCode: `def calculate_height(node):
    # Add your code here`,
      solution: `def calculate_height(node):
    if not node:
        return -1
    left_height = calculate_height(node.left)
    right_height = calculate_height(node.right)
    return max(left_height, right_height) + 1`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'What is the maximum number of nodes at level L in a binary tree?',
      options: [
        'L',
        '2^L',
        '2^(L-1)',
        '2^(L+1)',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. The number of nodes grows exponentially with level.',
        'Correct! At level L, a binary tree can have at most 2^L nodes.',
        'Incorrect. This would be one less than the actual maximum.',
        'Incorrect. This would be twice the actual maximum.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is a leaf node?',
      options: [
        'The root node of the tree',
        'A node with exactly one child',
        'A node with no children',
        'A node with two children',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. The root node is the topmost node of the tree.',
        'Incorrect. A node with one child is just a regular internal node.',
        'Correct! A leaf node is a node that has no children.',
        'Incorrect. A node with two children is an internal node.',
      ],
      difficulty: Difficulty.Beginner,
    }
  ]
};

const treeImplementationData: LessonContent = {
  title: 'Tree Implementation',
  content: `<p>
Implementing trees requires careful consideration of the node structure and the operations we want to support. We'll explore different approaches to implementing trees in Python, focusing on both binary and n-ary trees.
</p>

<h3><u>Node Implementation</u></h3>

<h4><b>Binary Tree Node</b></h4>
<li>Contains a value/data field</li>
<li>Has left and right child references</li>
<li>Optionally includes a parent reference</li>

<h4><b>N-ary Tree Node</b></h4>
<li>Contains a value/data field</li>
<li>Maintains a list/array of child references</li>
<li>Optionally includes a parent reference</li>

<h3><u>Common Tree Operations</u></h3>

<h4><b>Traversal Methods</b></h4>
<li>Pre-order: Process root, then left subtree, then right subtree</li>
<li>In-order (Binary trees): Process left subtree, then root, then right subtree</li>
<li>Post-order: Process all subtrees, then root</li>
<li>Level-order: Process nodes level by level</li>

<h4><b>Utility Operations</b></h4>
<li>Finding height and depth</li>
<li>Counting nodes</li>
<li>Checking if balanced</li>
<li>Finding lowest common ancestor</li>

<h3><u>Implementation Considerations</u></h3>
<table>
<tr><th>Feature</th><th>Trade-offs</th></tr>
<tr><td>Parent References</td><td>More memory, easier traversal up the tree</td></tr>
<tr><td>Child List vs. Fixed References</td><td>Flexibility vs. Memory efficiency</td></tr>
<tr><td>Recursive vs. Iterative</td><td>Code simplicity vs. Stack space</td></tr>
</table>`,
  codeExample: `class BinaryTreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
        self.parent = None  # Optional parent reference

class BinaryTree:
    def __init__(self):
        self.root = None
    
    def insert_level_order(self, value):
        """Insert a value into the tree in level-order"""
        new_node = BinaryTreeNode(value)
        if not self.root:
            self.root = new_node
            return

        # Use queue for level-order traversal
        queue = [self.root]
        while queue:
            node = queue.pop(0)
            
            # Try to insert in left subtree
            if not node.left:
                node.left = new_node
                new_node.parent = node
                return
            else:
                queue.append(node.left)
            
            # Try to insert in right subtree
            if not node.right:
                node.right = new_node
                new_node.parent = node
                return
            else:
                queue.append(node.right)

    def traversal_preorder(self, node, result=None):
        """Pre-order traversal: Root -> Left -> Right"""
        if result is None:
            result = []
        if node:
            result.append(node.value)
            self.traversal_preorder(node.left, result)
            self.traversal_preorder(node.right, result)
        return result

    def traversal_inorder(self, node, result=None):
        """In-order traversal: Left -> Root -> Right"""
        if result is None:
            result = []
        if node:
            self.traversal_inorder(node.left, result)
            result.append(node.value)
            self.traversal_inorder(node.right, result)
        return result

# Example usage
tree = BinaryTree()
for value in [1, 2, 3, 4, 5]:
    tree.insert_level_order(value)

print("Pre-order traversal:", tree.traversal_preorder(tree.root))
print("In-order traversal:", tree.traversal_inorder(tree.root))`,
  exercises: [
    {
      prompt: 'Implement a post-order traversal method for the BinaryTree class.',
      initialCode: `def traversal_postorder(self, node, result=None):
    # Add your code here`,
      solution: `def traversal_postorder(self, node, result=None):
    if result is None:
        result = []
    if node:
        self.traversal_postorder(node.left, result)
        self.traversal_postorder(node.right, result)
        result.append(node.value)
    return result`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement a method to count the total number of nodes in a binary tree.',
      initialCode: `def count_nodes(self, node):
    # Add your code here`,
      solution: `def count_nodes(self, node):
    if not node:
        return 0
    return 1 + self.count_nodes(node.left) + self.count_nodes(node.right)`,
      difficulty: Difficulty.Beginner,
    }
  ],
  quizzes: [
    {
      question: 'Which traversal visits the root node first?',
      options: [
        'In-order',
        'Pre-order',
        'Post-order',
        'Level-order',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. In-order visits left subtree before root.',
        'Correct! Pre-order traversal visits the root node first, then left subtree, then right subtree.',
        'Incorrect. Post-order visits both subtrees before root.',
        'Incorrect. Level-order visits nodes level by level, but not necessarily root first.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What is the space complexity of recursive tree traversal?',
      options: [
        'O(1)',
        'O(log n)',
        'O(n)',
        'O(n^2)',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Recursive calls use stack space.',
        'Correct! For a balanced tree, recursive traversal uses O(log n) stack space.',
        'Incorrect. This would only be true for completely unbalanced trees.',
        'Incorrect. Tree traversal never requires quadratic space.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const treePropertiesData: LessonContent = {
  title: 'Tree Properties and Characteristics',
  content: `<p>
Tree properties help us understand and analyze tree structures. Each property provides insight into the tree's shape, efficiency, and potential use cases. Let's explore these properties in detail, building from basic concepts to more complex characteristics.
</p>

<p>
Imagine a tree as a family tree where each generation represents a level. The depth tells us how many generations separate a family member from the founder (root), while the height tells us how many generations exist in total. The size represents the total number of family members.
</p>

<h3><u>Fundamental Properties</u></h3>

<h4><b>Depth</b></h4>
<p>
The depth of a node represents its distance from the root. Think of depth as counting the number of steps needed to reach a node when starting from the root. The root has depth 0, its children have depth 1, and so on. Understanding depth helps us analyze how "deep" specific nodes are in our tree structure.
</p>

<h4><b>Height</b></h4>
<p>
The height of a tree or subtree measures the length of the longest path from a node to its deepest leaf. While depth looks upward toward the root, height looks downward toward the leaves. A leaf node has height 0, and the height of a tree is the height of its root node. The height property is crucial for analyzing tree efficiency and balance.
</p>

<h4><b>Size</b></h4>
<p>
The size of a tree is the total number of nodes it contains. Understanding size helps us analyze space complexity and choose appropriate algorithms. For a binary tree, we can calculate the relationship between height (h) and potential size: a perfect binary tree of height h has 2^(h+1) - 1 nodes.
</p>

<h3><u>Advanced Properties</u></h3>

<h4><b>Balance</b></h4>
<p>
A balanced tree is one where the heights of left and right subtrees of every node differ by at most one level. Balance is crucial for maintaining efficient operations. When a tree becomes unbalanced, operations like search can degrade from O(log n) to O(n) complexity. Think of balance like distributing weight evenly - it helps maintain stability and efficiency.
</p>

<h4><b>Complete vs Perfect Trees</b></h4>
<p>
A complete tree fills all levels except possibly the last, which fills from left to right. A perfect tree has all levels completely filled. These properties affect efficiency and are especially important in heap implementations and balanced tree algorithms.
</p>

<h3><u>Property Relationships</u></h3>
<table>
<tr><th>Property</th><th>Binary Tree Constraints</th><th>Impact on Performance</th></tr>
<tr><td>Height vs Size</td><td>log₂(n+1) ≤ height ≤ n</td><td>Affects all traversal operations</td></tr>
<tr><td>Balance Factor</td><td>|left_height - right_height| ≤ 1</td><td>Maintains O(log n) operations</td></tr>
<tr><td>Internal Nodes</td><td>Have 1 or 2 children</td><td>Affects tree density and shape</td></tr>
</table>`,
  codeExample: `class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class TreeProperties:
    def calculate_depth(self, root, target_node, current_depth=0):
        """
        Calculate the depth of a target node in the tree.
        Returns -1 if node is not found.
        """
        if not root:
            return -1
        
        # Found the target node
        if root == target_node:
            return current_depth
            
        # Search in left and right subtrees
        left_depth = self.calculate_depth(root.left, target_node, current_depth + 1)
        if left_depth != -1:
            return left_depth
            
        return self.calculate_depth(root.right, target_node, current_depth + 1)

    def calculate_height(self, node):
        """
        Calculate the height of a tree or subtree.
        An empty tree has height -1, a leaf has height 0.
        """
        if not node:
            return -1
            
        # Height is the maximum height of left or right subtree, plus 1
        left_height = self.calculate_height(node.left)
        right_height = self.calculate_height(node.right)
        return max(left_height, right_height) + 1

    def calculate_size(self, node):
        """
        Calculate the total number of nodes in the tree.
        """
        if not node:
            return 0
            
        # Size is sum of left subtree, right subtree, plus current node
        return 1 + self.calculate_size(node.left) + self.calculate_size(node.right)

    def is_balanced(self, node):
        """
        Check if the tree is balanced.
        Returns (is_balanced, height).
        """
        if not node:
            return True, -1
            
        # Check balance of left and right subtrees
        left_balanced, left_height = self.is_balanced(node.left)
        right_balanced, right_height = self.is_balanced(node.right)
        
        # Current node is balanced if:
        # 1. Both subtrees are balanced
        # 2. Height difference is at most 1
        is_balanced = (left_balanced and right_balanced and 
                      abs(left_height - right_height) <= 1)
        
        current_height = max(left_height, right_height) + 1
        return is_balanced, current_height

    def is_complete(self, node, index=0, node_count=None):
        """
        Check if the tree is complete.
        A complete tree is one where all levels except possibly the last
        are completely filled, and all nodes are as left as possible.
        """
        if not node:
            return True
            
        # For first call, calculate total nodes
        if node_count is None:
            node_count = self.calculate_size(node)
            
        # If index >= node_count, tree is not complete
        if index >= node_count:
            return False
            
        # Recursively check left and right subtrees
        return (self.is_complete(node.left, 2 * index + 1, node_count) and
                self.is_complete(node.right, 2 * index + 2, node_count))

# Example usage
def create_sample_tree():
    """Create a sample balanced binary tree"""
    root = TreeNode(1)
    root.left = TreeNode(2)
    root.right = TreeNode(3)
    root.left.left = TreeNode(4)
    root.left.right = TreeNode(5)
    return root

# Create tree and analyze properties
tree = create_sample_tree()
props = TreeProperties()

print(f"Tree height: {props.calculate_height(tree)}")
print(f"Tree size: {props.calculate_size(tree)}")
is_balanced, _ = props.is_balanced(tree)
print(f"Is balanced: {is_balanced}")
print(f"Is complete: {props.is_complete(tree)}")`,
  exercises: [
    {
      prompt: 'Implement a function that returns the maximum possible number of nodes in a binary tree of a given height.',
      initialCode: `def max_nodes_at_height(height):
    # Add your code here
    pass`,
      solution: `def max_nodes_at_height(height):
    # A perfect binary tree of height h has 2^(h+1) - 1 nodes
    return (2 ** (height + 1)) - 1`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Write a function that determines if a binary tree is perfect (all levels are completely full).',
      initialCode: `def is_perfect(node):
    # Add your code here
    pass`,
      solution: `def is_perfect(node):
    height = -1
    def get_height(node):
        if not node:
            return -1
        left_height = get_height(node.left)
        right_height = get_height(node.right)
        if left_height != right_height:
            return -float('inf')  # Invalid height for imperfect trees
        return left_height + 1
    
    height = get_height(node)
    return height >= 0  # Returns True only if all levels are full`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'What is the minimum height of a binary tree with 7 nodes?',
      options: [
        '1',
        '2',
        '3',
        '4',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. A height of 1 can only accommodate 3 nodes maximum.',
        'Correct! With height 2, we can fit exactly 7 nodes in a complete binary tree.',
        'Incorrect. Height 3 is more than necessary for 7 nodes.',
        'Incorrect. Height 4 is much more than necessary for 7 nodes.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the relationship between the height h of a balanced binary tree and its number of nodes n?',
      options: [
        'h = n',
        'h = n/2',
        'h ≈ log₂(n)',
        'h = √n',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. This would be the case for a completely unbalanced tree.',
        'Incorrect. This would not account for the exponential growth of nodes per level.',
        'Correct! In a balanced binary tree, the height is logarithmic in the number of nodes.',
        'Incorrect. The square root relationship does not accurately represent the tree structure.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What makes a binary tree complete?',
      options: [
        'All levels must be fully filled',
        'All nodes must have exactly two children',
        'All levels except the last must be fully filled, and the last level filled from left to right',
        'The left subtree must have more nodes than the right subtree',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. This describes a perfect binary tree, not just complete.',
        'Incorrect. This would be a full binary tree.',
        'Correct! A complete binary tree fills nodes from left to right, with all levels except possibly the last being full.',
        'Incorrect. This is not a requirement for complete trees.',
      ],
      difficulty: Difficulty.Beginner,
    }
  ]
};

const commonTreePatternsData: LessonContent = {
  title: 'Common Tree Interview Patterns',
  content: `<p>
When approaching tree problems in interviews, success often comes from recognizing common patterns and understanding how to adapt them to different scenarios. Let's explore these patterns systematically, building from fundamental approaches to more sophisticated techniques.
</p>

<h3><u>Core Problem-Solving Patterns</u></h3>

<h4><b>Pattern 1: Recursive DFS (Depth-First Search) Exploration</b></h4>
<p>
The recursive DFS pattern forms the foundation of many tree problems. Think of it as exploring a maze by following each path to its end before backtracking. This pattern is particularly powerful because it naturally mirrors the recursive structure of trees.
</p>

<p>
The key to mastering recursive DFS is understanding its three components:
1. Base case: Usually when we hit a null node or leaf
2. Processing logic: What we do at each node
3. Recursive calls: How we explore left and right subtrees
</p>

<h4><b>Pattern 2: State Passing Through Recursion</b></h4>
<p>
Many tree problems require maintaining state as we traverse the tree. This pattern is like leaving breadcrumbs as you explore a maze, helping you track important information during the traversal. Common types of state include:
</p>
<li>Path sums or other accumulating values</li>
<li>Parent or ancestor information</li>
<li>Level or depth information</li>
<li>Previous node values for validation</li>

<h4><b>Pattern 3: Level-wise Processing (BFS)</b></h4>
<p>
Breadth-First Search (BFS) is essential when you need to process trees level by level. Think of it as exploring a building floor by floor rather than room by room. This pattern is crucial for problems involving:
</p>
<li>Level averages or sums</li>
<li>Zigzag traversal</li>
<li>Finding nearest nodes</li>
<li>Tree width or level-specific properties</li>

<h3><u>Advanced Patterns</u></h3>

<h4><b>Pattern 4: Tree Construction</b></h4>
<p>
Tree construction problems often follow specific patterns based on the input format:
</p>
<li>From traversal pairs (e.g., preorder + inorder)</li>
<li>From level-order or serialized format</li>
<li>From parent-child relationships</li>

<h4><b>Pattern 5: Tree Modification</b></h4>
<p>
Modification problems require careful handling of node connections and often involve:
</p>
<li>Maintaining parent references</li>
<li>Handling edge cases at roots and leaves</li>
<li>Preserving tree properties during changes</li>

<h3><u>Common Time/Space Complexities</u></h3>
<table>
<tr><th>Pattern</th><th>Time Complexity</th><th>Space Complexity</th><th>Notes</th></tr>
<tr><td>DFS</td><td>O(n)</td><td>O(h)</td><td>h is height of tree</td></tr>
<tr><td>BFS</td><td>O(n)</td><td>O(w)</td><td>w is maximum width</td></tr>
<tr><td>Construction</td><td>O(n)</td><td>O(n)</td><td>Usually requires hash maps</td></tr>
<tr><td>Modification</td><td>O(n)</td><td>O(h)</td><td>May need parent pointers</td></tr>
</table>`,
  codeExample: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class TreePatterns:
    def validate_bst(self, root):
        """
        Pattern 1: Recursive DFS with range validation
        Time: O(n), Space: O(h) where h is height
        """
        def is_valid_bst(node, min_val, max_val):
            if not node:
                return True
            
            # Check current node's constraints
            if node.val <= min_val or node.val >= max_val:
                return False
            
            # Recursively validate left and right subtrees
            # Left subtree values must be less than current node
            # Right subtree values must be greater than current node
            return (is_valid_bst(node.left, min_val, node.val) and
                    is_valid_bst(node.right, node.val, max_val))
        
        return is_valid_bst(root, float('-inf'), float('inf'))

    def path_sum(self, root, target_sum):
        """
        Pattern 2: State passing through recursion
        Time: O(n), Space: O(h)
        """
        def find_paths(node, remaining, current_path, all_paths):
            if not node:
                return
            
            # Add current node to path
            current_path.append(node.val)
            
            # Check if we've reached a leaf and found target sum
            if not node.left and not node.right and remaining == node.val:
                all_paths.append(current_path[:])
            
            # Recursively explore paths
            find_paths(node.left, remaining - node.val, current_path, all_paths)
            find_paths(node.right, remaining - node.val, current_path, all_paths)
            
            # Backtrack by removing current node
            current_path.pop()
        
        all_paths = []
        find_paths(root, target_sum, [], all_paths)
        return all_paths

    def level_order_traversal(self, root):
        """
        Pattern 3: Level-wise processing using BFS
        Time: O(n), Space: O(w) where w is maximum width
        """
        if not root:
            return []
        
        result = []
        queue = [(root, 0)]  # (node, level)
        
        while queue:
            level_size = len(queue)
            current_level = []
            
            # Process all nodes at current level
            for _ in range(level_size):
                node, level = queue.pop(0)
                current_level.append(node.val)
                
                # Add children to queue
                if node.left:
                    queue.append((node.left, level + 1))
                if node.right:
                    queue.append((node.right, level + 1))
            
            result.append(current_level)
        
        return result

    def build_tree(self, preorder, inorder):
        """
        Pattern 4: Tree construction from traversals
        Time: O(n), Space: O(n)
        """
        if not preorder or not inorder:
            return None
        
        # First preorder element is root
        root = TreeNode(preorder[0])
        
        # Find root position in inorder
        mid = inorder.index(preorder[0])
        
        # Recursively build left and right subtrees
        root.left = self.build_tree(preorder[1:mid+1], inorder[:mid])
        root.right = self.build_tree(preorder[mid+1:], inorder[mid+1:])
        
        return root

    def flatten_tree(self, root):
        """
        Pattern 5: Tree modification to linked list
        Time: O(n), Space: O(h)
        """
        def flatten_helper(node):
            if not node:
                return None
            
            # Save references to left and right
            left_tree = node.left
            right_tree = node.right
            
            # Flatten left and right subtrees
            left_tail = flatten_helper(left_tree)
            right_tail = flatten_helper(right_tree)
            
            # Connect flattened left tree to right
            if left_tail:
                node.right = left_tree
                left_tail.right = right_tree
                node.left = None
            
            # Return tail of flattened tree
            return right_tail if right_tail else (left_tail if left_tail else node)
        
        flatten_helper(root)`,
  exercises: [
    {
      prompt: 'Implement a function to find the lowest common ancestor (LCA) of two nodes in a binary tree. The function should return null if either node is not present in the tree.',
      initialCode: `def lowest_common_ancestor(root, p, q):
    # Add your solution here
    pass`,
      solution: `def lowest_common_ancestor(root, p, q):
    # Base case: empty tree or found target node
    if not root or root == p or root == q:
        return root
    
    # Search in left and right subtrees
    left = lowest_common_ancestor(root.left, p, q)
    right = lowest_common_ancestor(root.right, p, q)
    
    # If both nodes found in different subtrees, current node is LCA
    if left and right:
        return root
    
    # Return non-null node (either found node or LCA)
    return left if left else right`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Write a function to determine if a binary tree is symmetric around its center (mirror image of itself).',
      initialCode: `def is_symmetric(root):
    # Add your solution here
    pass`,
      solution: `def is_symmetric(root):
    def is_mirror(left, right):
        # Base cases
        if not left and not right:
            return True
        if not left or not right:
            return False
        
        # Check if subtrees are mirrors:
        # 1. Current nodes have same value
        # 2. Left's left matches Right's right
        # 3. Left's right matches Right's left
        return (left.val == right.val and
                is_mirror(left.left, right.right) and
                is_mirror(left.right, right.left))
    
    return not root or is_mirror(root.left, root.right)`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'Which traversal pattern would be most efficient for finding the average value of each level in a binary tree?',
      options: [
        'Preorder DFS',
        'Inorder DFS',
        'Postorder DFS',
        'Level-order BFS',
      ],
      correctAnswer: 3,
      explanations: [
        'Incorrect. Preorder DFS would require additional bookkeeping to track levels.',
        'Incorrect. Inorder DFS would not process nodes by level.',
        'Incorrect. Postorder DFS would process nodes in the wrong order for level averages.',
        'Correct! Level-order BFS naturally processes nodes level by level, making it perfect for computing level averages.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'When solving a problem that requires tracking paths from root to leaves, which pattern is most appropriate?',
      options: [
        'BFS with a queue',
        'DFS with path state',
        'Level-order traversal',
        'Bottom-up recursion',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. BFS makes it harder to track complete paths.',
        'Correct! DFS with path state naturally maintains the current path during traversal.',
        'Incorrect. Level-order traversal does not maintain path information.',
        'Incorrect. Bottom-up recursion works backward, making path tracking more difficult.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the space complexity of a recursive DFS solution for a balanced binary tree?',
      options: [
        'O(1)',
        'O(log n)',
        'O(n)',
        'O(n²)',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Recursive calls require stack space.',
        'Correct! For a balanced tree, the maximum recursion depth is logarithmic.',
        'Incorrect. This would only be true for a completely unbalanced tree.',
        'Incorrect. Tree traversal never requires quadratic space.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const binaryTreeBasicsData: LessonContent = {
  title: 'Binary Tree Basics',
  content: `<p>
Imagine organizing your family photos in a digital album. You might start with the oldest generation at the top, then branch out to their children below, and their children's children below that. This branching structure, where each person can have at most two children, mirrors how a binary tree works in computer science.
</p>

<p>
A binary tree is one of the most fundamental and elegant data structures in computer science. Its power lies in its recursive nature - each node in a binary tree is itself the root of a smaller binary tree. This property makes binary trees particularly well-suited for divide-and-conquer algorithms and hierarchical data representation.
</p>

<h3><u>Understanding Binary Trees</u></h3>

<p>
At its core, a binary tree consists of nodes connected by edges, with some special properties:
</p>

<h4><b>Node Structure</b></h4>
<p>
Each node in a binary tree contains three essential components:
</p>
<li>A data element that holds the node's value</li>
<li>A reference to its left child (which can be null)</li>
<li>A reference to its right child (which can be null)</li>

<p>
Think of each node as a container with three compartments: one for the value it holds, and two doors that might lead to other containers (its children). When a door leads nowhere, we say that child reference is null.
</p>

<h4><b>Binary Tree Properties</b></h4>
<p>
What makes a tree "binary" is that each node can have at most two children. This constraint gives binary trees several interesting properties:
</p>

<li>Every node has exactly one parent (except the root, which has none)</li>
<li>A node with no children is called a leaf node</li>
<li>The path from the root to any node is unique</li>

<h3><u>Types of Binary Trees</u></h3>

<h4><b>Full Binary Tree</b></h4>
<p>
A full binary tree is like a well-organized family where parents either have no children or exactly two children. There are no single parents in a full binary tree. This property makes full binary trees particularly useful for expressing mathematical expressions where operators always have two operands.
</p>

<h4><b>Complete Binary Tree</b></h4>
<p>
Imagine filling a theater from left to right, row by row. A complete binary tree follows this same pattern - all levels are filled from left to right, with the last level potentially partially filled. This property makes complete binary trees perfect for implementing heap data structures.
</p>

<h4><b>Perfect Binary Tree</b></h4>
<p>
A perfect binary tree is like a pyramid where every level is completely full. Each internal node has exactly two children, and all leaves are at the same level. While rare in practice, perfect binary trees help us understand the theoretical maximum efficiency of tree operations.
</p>

<h3><u>Key Operations</u></h3>
<table>
<tr><th>Operation</th><th>Description</th><th>Common Use Cases</th></tr>
<tr><td>Insertion</td><td>Adding a new node to the tree</td><td>Building trees, adding data</td></tr>
<tr><td>Traversal</td><td>Visiting all nodes in a specific order</td><td>Processing tree data, validation</td></tr>
<tr><td>Search</td><td>Finding a specific value</td><td>Data retrieval, validation</td></tr>
<tr><td>Deletion</td><td>Removing a node while maintaining structure</td><td>Data maintenance, cleanup</td></tr>
</table>`,
  codeExample: `class BinaryTreeNode:
    def __init__(self, value):
        """
        Initialize a binary tree node with a value and null child references.
        Think of this as creating a new container that can hold a value
        and potentially connect to two other containers.
        """
        self.value = value  # The data this node holds
        self.left = None    # Reference to left child
        self.right = None   # Reference to right child

class BinaryTree:
    def __init__(self):
        """
        Initialize an empty binary tree.
        The tree starts with no nodes, like an empty family tree.
        """
        self.root = None  # The topmost node of the tree

    def insert_level_order(self, value):
        """
        Insert a new value into the binary tree in level-order fashion.
        This ensures we build a complete binary tree, filling each level
        from left to right before moving to the next level.
        
        Think of this like filling seats in a theater, row by row,
        from left to right.
        """
        new_node = BinaryTreeNode(value)
        
        # If tree is empty, make new node the root
        if not self.root:
            self.root = new_node
            return

        # Use a queue to keep track of nodes to process
        # This helps us move level by level through the tree
        queue = [self.root]
        while queue:
            current = queue.pop(0)  # Get the next node to process

            # If there's space for a left child, add the new node there
            if not current.left:
                current.left = new_node
                return
            else:
                queue.append(current.left)  # Process this node later

            # If there's space for a right child, add the new node there
            if not current.right:
                current.right = new_node
                return
            else:
                queue.append(current.right)  # Process this node later

    def print_level_order(self):
        """
        Print the tree level by level, showing the structure clearly.
        This is like taking a photo of each generation in a family tree.
        """
        if not self.root:
            return

        # Use a queue to process nodes level by level
        queue = [(self.root, 0)]  # Track each node and its level
        current_level = 0
        level_nodes = []

        while queue:
            node, level = queue.pop(0)

            # If we've moved to a new level, print the previous level
            if level > current_level:
                print(f"Level {current_level}:", " ".join(map(str, level_nodes)))
                current_level = level
                level_nodes = []

            # Add this node's value to the current level
            level_nodes.append(node.value)

            # Add children to process later
            if node.left:
                queue.append((node.left, level + 1))
            if node.right:
                queue.append((node.right, level + 1))

        # Print the last level
        print(f"Level {current_level}:", " ".join(map(str, level_nodes)))

# Example usage showing how to build and visualize a binary tree
def demonstrate_binary_tree():
    """
    Create and demonstrate a binary tree with some basic operations.
    This shows how the tree grows level by level.
    """
    tree = BinaryTree()
    
    # Insert values 1 through 7 to create a complete binary tree
    for value in range(1, 8):
        tree.insert_level_order(value)
        print(f"\\nAfter inserting {value}:")
        tree.print_level_order()

    return tree

# Create and show a sample tree
sample_tree = demonstrate_binary_tree()`,
  exercises: [
    {
      prompt: 'Write a function that counts the total number of nodes in a binary tree. Consider both iterative and recursive approaches - which seems more natural to you and why?',
      initialCode: `def count_nodes(root):
    # Add your solution here - try both approaches!
    pass`,
      solution: `# Recursive solution - often more elegant for tree problems
def count_nodes_recursive(root):
    if not root:  # Base case: empty tree has 0 nodes
        return 0
    # Count current node plus all nodes in left and right subtrees
    return 1 + count_nodes_recursive(root.left) + count_nodes_recursive(root.right)

# Iterative solution - uses a queue to track nodes
def count_nodes_iterative(root):
    if not root:
        return 0
    
    count = 0
    queue = [root]
    
    while queue:
        node = queue.pop(0)
        count += 1
        
        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)
    
    return count`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Implement a function that determines the height of a binary tree. The height is the length of the path from the root to the deepest leaf. Consider how you might handle edge cases like an empty tree.',
      initialCode: `def tree_height(root):
    # Add your solution here
    pass`,
      solution: `def tree_height(root):
    # Base case: empty tree has height -1
    # (This means a single node tree has height 0)
    if not root:
        return -1
    
    # The height is the maximum height of either subtree,
    # plus 1 for the current level
    left_height = tree_height(root.left)
    right_height = tree_height(root.right)
    
    return max(left_height, right_height) + 1`,
      difficulty: Difficulty.Beginner,
    }
  ],
  quizzes: [
    {
      question: 'In a binary tree with 7 nodes, what is the minimum possible height (considering the root has height 0)?',
      options: [
        '1',
        '2',
        '3',
        '4',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. A height of 1 can only accommodate 3 nodes maximum.',
        'Correct! With 7 nodes, the minimum height is 2, achieved in a complete binary tree structure.',
        'Incorrect. While possible, this is not the minimum height needed.',
        'Incorrect. This height would be excessive for just 7 nodes.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What makes a binary tree "complete"?',
      options: [
        'Every node has exactly two children',
        'All leaves are at the same level',
        'All levels are filled from left to right, with the last level potentially partially filled',
        'Every node has either zero or two children',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. This describes a perfect binary tree.',
        'Incorrect. This also describes a perfect binary tree.',
        'Correct! A complete binary tree fills nodes from left to right at each level, like filling seats in a theater.',
        'Incorrect. This describes a full binary tree.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What is the maximum number of leaves possible in a binary tree of height 3 (root at height 0)?',
      options: [
        '4',
        '8',
        '16',
        '7',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. A binary tree of height 3 can have more leaves than this.',
        'Correct! At height 3, level 3 can have at most 2³ = 8 leaves.',
        'Incorrect. This exceeds what\'s possible at height 3.',
        'Incorrect. The maximum is 8 leaves at level 3.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const treeTraversalData: LessonContent = {
  title: 'Tree Traversal: Understanding Different Ways to Visit Every Node',
  content: `<p>
Imagine you're exploring an ancient castle with many interconnected rooms. Just as there are different ways to systematically visit every room in the castle - floor by floor, wing by wing, or following a specific path - there are several systematic ways to visit every node in a tree. Each traversal method reveals different aspects of the tree's structure and serves different purposes in solving problems.
</p>

<h3><u>Understanding Tree Traversal</u></h3>

<p>
At its core, tree traversal is about visiting every node in the tree exactly once, but the order in which we visit the nodes can significantly affect how we understand and process the tree's information. Think about reading a book - we could read it front to back, back to front, or even chapter by chapter. Each way gives us a different perspective on the story.
</p>

<h3><u>Depth-First Traversals: Exploring Deep Before Wide</u></h3>

<h4><b>Inorder Traversal (Left -> Node -> Right)</b></h4>
<p>
Inorder traversal is like reading words on a page - we naturally move from left to right, with the current word (node) in between. For a binary search tree, this traversal gives us the elements in sorted order, making it particularly useful for tasks that need sorted data.
</p>

<p>
The process follows three steps for each node:
1. Traverse the left subtree completely
2. Visit the current node
3. Traverse the right subtree completely
</p>

<h4><b>Preorder Traversal (Node -> Left -> Right)</b></h4>
<p>
Preorder traversal is like creating an outline of a document - we note the main point (root) before diving into the details (subtrees). This traversal is particularly useful when you want to recreate or copy the tree, as it preserves the hierarchical structure of the original tree.
</p>

<p>
The steps at each node are:
1. Visit the current node
2. Traverse the left subtree
3. Traverse the right subtree
</p>

<h4><b>Postorder Traversal (Left -> Right -> Node)</b></h4>
<p>
Postorder traversal is like cleaning a house - you clean the rooms (child nodes) before cleaning the hallway that connects them (parent node). This approach is essential when you need to process child nodes before their parents, such as calculating folder sizes in a file system or evaluating mathematical expressions.
</p>

<p>
For each node, we:
1. Traverse the left subtree
2. Traverse the right subtree
3. Visit the current node
</p>

<h3><u>Breadth-First Traversal: Level by Level Exploration</u></h3>

<h4><b>Level-Order Traversal</b></h4>
<p>
Level-order traversal is like taking a group photo where people stand in rows. We process the tree level by level, from top to bottom, visiting all nodes at the current level before moving to the next level. This traversal is particularly useful for problems that involve level-specific operations or when we need to process nodes based on their distance from the root.
</p>

<h3><u>Choosing the Right Traversal</u></h3>
<table>
<tr><th>Traversal Type</th><th>Best Use Cases</th><th>Key Characteristics</th></tr>
<tr><td>Inorder</td><td>BST operations, sorted sequences</td><td>Visits BST nodes in sorted order</td></tr>
<tr><td>Preorder</td><td>Tree copying, serialization</td><td>Root processed before children</td></tr>
<tr><td>Postorder</td><td>Resource cleanup, expression evaluation</td><td>Children processed before parent</td></tr>
<tr><td>Level-order</td><td>Level-specific operations, nearest neighbors</td><td>Process by distance from root</td></tr>
</table>`,
  codeExample: `class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class TreeTraversalMethods:
    def inorder_traversal(self, root):
        """
        Performs inorder traversal (Left -> Node -> Right).
        Perfect for BST as it gives nodes in sorted order.
        
        Time: O(n) where n is number of nodes
        Space: O(h) where h is height of tree for recursion stack
        """
        def inorder_recursive(node, result):
            if node:
                # First, process entire left subtree
                inorder_recursive(node.left, result)
                # Then, process current node
                result.append(node.value)
                # Finally, process entire right subtree
                inorder_recursive(node.right, result)
            
        result = []
        inorder_recursive(root, result)
        return result

    def preorder_traversal(self, root):
        """
        Performs preorder traversal (Node -> Left -> Right).
        Useful for creating a copy of the tree or serialization.
        Here we show both recursive and iterative approaches.
        
        Time: O(n) for both approaches
        Space: O(h) recursive, O(n) iterative worst case
        """
        # Recursive approach
        def preorder_recursive(node, result):
            if node:
                # First, process current node
                result.append(node.value)
                # Then, traverse left subtree
                preorder_recursive(node.left, result)
                # Finally, traverse right subtree
                preorder_recursive(node.right, result)
        
        # Iterative approach using stack
        def preorder_iterative(root):
            if not root:
                return []
            
            result = []
            stack = [root]
            
            while stack:
                node = stack.pop()
                result.append(node.value)
                
                # Push right child first (so left is processed first)
                if node.right:
                    stack.append(node.right)
                if node.left:
                    stack.append(node.left)
            
            return result
        
        # Use recursive approach by default
        result = []
        preorder_recursive(root, result)
        return result

    def postorder_traversal(self, root):
        """
        Performs postorder traversal (Left -> Right -> Node).
        Essential for operations that need children processed before parents.
        
        Time: O(n)
        Space: O(h) for recursion stack
        """
        def postorder_recursive(node, result):
            if node:
                # First, process entire left subtree
                postorder_recursive(node.left, result)
                # Then, process entire right subtree
                postorder_recursive(node.right, result)
                # Finally, process current node
                result.append(node.value)
        
        result = []
        postorder_recursive(root, result)
        return result

    def level_order_traversal(self, root):
        """
        Performs level-order traversal using a queue.
        Processes tree level by level, perfect for level-specific operations.
        
        Time: O(n)
        Space: O(w) where w is maximum width of tree
        """
        if not root:
            return []
        
        result = []
        queue = [(root, 0)]  # (node, level)
        current_level = 0
        level_nodes = []
        
        while queue:
            node, level = queue.pop(0)
            
            # If we've moved to a new level, add current level to result
            if level > current_level:
                result.append(level_nodes)
                level_nodes = []
                current_level = level
            
            level_nodes.append(node.value)
            
            # Add children to queue with next level number
            if node.left:
                queue.append((node.left, level + 1))
            if node.right:
                queue.append((node.right, level + 1))
        
        # Don't forget to add the last level
        if level_nodes:
            result.append(level_nodes)
        
        return result

def demonstrate_traversals():
    """
    Creates a sample tree and demonstrates all traversal methods.
    """
    traversal = TreeTraversalMethods()
    
    # Create a sample tree:
    #       1
    #      / \\
    #     2   3
    #    / \\
    #   4   5
    
    root = TreeNode(1)
    root.left = TreeNode(2)
    root.right = TreeNode(3)
    root.left.left = TreeNode(4)
    root.left.right = TreeNode(5)
    
    print("Tree traversals for:")
    print("    1")
    print("   / \\")
    print("  2   3")
    print(" / \\")
    print("4   5")
    
    print("\\nInorder traversal:", traversal.inorder_traversal(root))
    print("Preorder traversal:", traversal.preorder_traversal(root))
    print("Postorder traversal:", traversal.postorder_traversal(root))
    print("Level-order traversal:", traversal.level_order_traversal(root))

# Run demonstration
demonstrate_traversals()`,
  exercises: [
    {
      prompt: 'Implement a modified level-order traversal that prints the tree in a zigzag pattern (left to right for one level, right to left for the next). Think about how you can modify the basic level-order traversal to achieve this pattern.',
      initialCode: `def zigzag_level_order(root):
    # Add your solution here
    pass`,
      solution: `def zigzag_level_order(root):
    if not root:
        return []
    
    result = []
    queue = [(root, 0)]  # (node, level)
    current_level = 0
    level_nodes = []
    left_to_right = True  # Direction flag
    
    while queue:
        level_size = len(queue)  # Process level by level
        level_nodes = []
        
        # Process all nodes at current level
        for _ in range(level_size):
            node, level = queue.pop(0)
            level_nodes.append(node.value)
            
            if node.left:
                queue.append((node.left, level + 1))
            if node.right:
                queue.append((node.right, level + 1))
        
        # Add nodes in correct direction
        result.append(level_nodes if left_to_right else level_nodes[::-1])
        left_to_right = not left_to_right  # Switch direction
    
    return result`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Write a function that performs boundary traversal of a binary tree (printing all nodes on the tree\'s boundary in anti-clockwise order). This combines aspects of different traversal methods to achieve a specific pattern.',
      initialCode: `def boundary_traversal(root):
    # Add your solution here
    pass`,
      solution: `def boundary_traversal(root):
    def add_left_boundary(node, res):
        while node:
            if node.left or node.right:  # Skip leaf nodes
                res.append(node.value)
            if node.left:
                node = node.left
            else:
                node = node.right
    
    def add_leaves(node, res):
        if not node:
            return
        if not node.left and not node.right:
            res.append(node.value)
            return
        add_leaves(node.left, res)
        add_leaves(node.right, res)
    
    def add_right_boundary(node, res):
        if not node:
            return
        stack = []
        while node:
            if node.left or node.right:  # Skip leaf nodes
                stack.append(node.value)
            if node.right:
                node = node.right
            else:
                node = node.left
        res.extend(reversed(stack))
    
    if not root:
        return []
    
    result = [root.value]
    if not root.left and not root.right:
        return result
    
    # Add left boundary (top to bottom)
    if root.left:
        add_left_boundary(root.left, result)
    
    # Add leaf nodes (left to right)
    add_leaves(root, result)
    
    # Add right boundary (bottom to top)
    if root.right:
        add_right_boundary(root.right, result)
    
    return result`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Which traversal should you use to evaluate a binary expression tree where operators are internal nodes and operands are leaf nodes?',
      options: [
        'Inorder traversal',
        'Preorder traversal',
        'Postorder traversal',
        'Level-order traversal',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Inorder would not process operators in the correct order for evaluation.',
        'Incorrect. Processing operators before operands would not give correct results.',
        'Correct! Postorder ensures operands are processed before their operators, which is necessary for correct evaluation.',
        'Incorrect. Level-order would not maintain proper operator precedence.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'If you need to create an exact copy of a binary tree, which traversal would be most helpful?',
      options: [
        'Inorder traversal',
        'Preorder traversal',
        'Postorder traversal',
        'Level-order traversal',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Inorder traversal alone cannot uniquely determine tree structure.',
        'Correct! Preorder traversal visits parent before children, making it perfect for recreating the tree structure.',
        'Incorrect. Processing children before parents makes reconstruction more complex.',
        'Incorrect. While possible, level-order makes tree reconstruction more complicated.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'Which traversal would be most efficient for finding the average value at each level of a tree?',
      options: [
        'Inorder traversal',
        'Preorder traversal',
        'Postorder traversal',
        'Level-order traversal',
      ],
      correctAnswer: 3,
      explanations: [
        'Incorrect. Inorder mixes nodes from different levels.',
        'Incorrect. Preorder doesn\'t group nodes by level.',
        'Incorrect. Postorder doesn\'t maintain level information.',
        'Correct! Level-order naturally groups nodes by their level, making it perfect for level-based calculations.',
      ],
      difficulty: Difficulty.Beginner,
    }
  ]
};

const treeViewsData: LessonContent = {
  title: 'Tree Views: Different Perspectives of a Binary Tree',
  content: `<p>
Imagine walking around a large oak tree in your garden. As you move around it, you see different profiles of the tree – some branches visible from the left might be hidden when viewed from the right, while a view from above reveals a completely different pattern of branches. Similarly, when we talk about tree views in computer science, we're looking at different perspectives of a binary tree structure, each revealing unique aspects of its organization.
</p>

<h3><u>Understanding Tree Views</u></h3>

<p>
Before we dive into specific views, let's understand what we mean by a "view" of a binary tree. A view represents what nodes would be visible if you were looking at the tree from a particular direction or perspective. This concept helps us solve many practical problems, from understanding tree structure to detecting patterns in the data organization.
</p>

<h3><u>Left View: Seeing the Tree from the Left</u></h3>

<p>
The left view shows us what we would see if we were looking at the tree from the left side. Imagine shining a light from the left – the nodes that the light hits first at each level form the left view. Understanding this view helps us identify:
</p>

<li>The leftmost visible node at each level</li>
<li>The outline of the tree from the left perspective</li>
<li>Important structural patterns that might be hidden in other views</li>

<h4><b>Implementation Approaches for Left View</b></h4>
<p>
We can find the left view in two main ways:
</p>

<li>Level Order Traversal: Process level by level, keeping track of the first node at each level</li>
<li>Recursive Approach: Keep track of the maximum level seen so far and include nodes that appear at a new level</li>

<h3><u>Right View: The Mirror Perspective</u></h3>

<p>
The right view is like looking at the tree from the right side. Think of standing on the right side of the tree and noting which nodes you can see first at each level. This view is particularly useful for:
</p>

<li>Understanding the tree's rightward growth pattern</li>
<li>Identifying imbalances in the tree structure</li>
<li>Finding nodes that might be hidden in other perspectives</li>

<h3><u>Top View: A Bird's Eye Perspective</u></h3>

<p>
The top view represents what you would see if you were looking down at the tree from above. Imagine a drone taking a photo of the tree from directly overhead – nodes that align vertically would overlap, and we keep track of the first node we see at each horizontal position. This view helps us:
</p>

<li>Understand the horizontal spread of the tree</li>
<li>Identify patterns in node distribution</li>
<li>Visualize the tree's overall structure from a new perspective</li>

<h3><u>Applications and Use Cases</u></h3>
<table>
<tr><th>View Type</th><th>Primary Applications</th><th>Key Characteristics</th></tr>
<tr><td>Left View</td><td>Boundary analysis, Structure verification</td><td>Shows leftmost visible nodes</td></tr>
<tr><td>Right View</td><td>Pattern detection, Balance checking</td><td>Shows rightmost visible nodes</td></tr>
<tr><td>Top View</td><td>Distribution analysis, Layout planning</td><td>Shows vertical alignment</td></tr>
</table>`,
  codeExample: `class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class TreeViews:
    def get_left_view(self, root):
        """
        Returns the left view of the binary tree using level order traversal.
        This shows what you would see looking at the tree from the left side.
        
        Time Complexity: O(n) where n is number of nodes
        Space Complexity: O(w) where w is maximum width of tree
        """
        if not root:
            return []
            
        result = []
        queue = [(root, 0)]  # (node, level)
        max_level = -1  # Keep track of levels we've seen
        
        while queue:
            node, level = queue.pop(0)
            
            # If this is the first node we're seeing at this level
            if level > max_level:
                result.append(node.value)
                max_level = level
            
            # Add children to queue
            # Process left child first to ensure we get leftmost nodes
            if node.left:
                queue.append((node.left, level + 1))
            if node.right:
                queue.append((node.right, level + 1))
        
        return result

    def get_right_view_recursive(self, root):
        """
        Returns the right view using a recursive approach.
        This shows what you would see looking at the tree from the right side.
        
        Time Complexity: O(n)
        Space Complexity: O(h) where h is height of tree
        """
        def right_view_helper(node, level, max_level, result):
            if not node:
                return
            
            # If we're at a new level, this node is visible from the right
            if level > max_level[0]:
                result.append(node.value)
                max_level[0] = level
            
            # Process right child first to ensure we get rightmost nodes
            right_view_helper(node.right, level + 1, max_level, result)
            right_view_helper(node.left, level + 1, max_level, result)
        
        result = []
        max_level = [-1]  # Use list to allow modification in recursive calls
        right_view_helper(root, 0, max_level, result)
        return result

    def get_top_view(self, root):
        """
        Returns the top view of the binary tree.
        This shows what you would see looking at the tree from above.
        Uses horizontal distance to track vertical alignment of nodes.
        
        Time Complexity: O(n)
        Space Complexity: O(w) where w is the width of the tree
        """
        if not root:
            return []
        
        # Map horizontal distance to node value
        # We only keep the first node we see at each horizontal distance
        distance_map = {}
        
        # Queue elements: (node, horizontal_distance)
        queue = [(root, 0)]
        min_distance = max_distance = 0
        
        while queue:
            node, hd = queue.pop(0)
            
            # Only add to map if this horizontal distance hasn't been seen
            if hd not in distance_map:
                distance_map[hd] = node.value
                min_distance = min(min_distance, hd)
                max_distance = max(max_distance, hd)
            
            # Add children with updated horizontal distances
            if node.left:
                queue.append((node.left, hd - 1))
            if node.right:
                queue.append((node.right, hd + 1))
        
        # Return values from left to right
        return [distance_map[d] for d in range(min_distance, max_distance + 1)]

def demonstrate_tree_views():
    """
    Creates a sample tree and demonstrates different views.
    """
    # Create a sample tree:
    #       1
    #      / \\
    #     2   3
    #    / \\   \\
    #   4   5   6
    #      /
    #     7
    
    root = TreeNode(1)
    root.left = TreeNode(2)
    root.right = TreeNode(3)
    root.left.left = TreeNode(4)
    root.left.right = TreeNode(5)
    root.right.right = TreeNode(6)
    root.left.right.left = TreeNode(7)
    
    views = TreeViews()
    
    print("Tree Views Demonstration:")
    print("\\nLeft View:", views.get_left_view(root))
    print("Right View:", views.get_right_view_recursive(root))
    print("Top View:", views.get_top_view(root))

    print("\\nVisualization of the tree:")
    print("        1")
    print("      /   \\")
    print("     2     3")
    print("    / \\     \\")
    print("   4   5     6")
    print("      /")
    print("     7")

# Run demonstration
demonstrate_tree_views()`,
  exercises: [
    {
      prompt: 'Implement a function to find the bottom view of a binary tree. Similar to the top view, but we want to see the last nodes visible from the bottom when looking from above.',
      initialCode: `def get_bottom_view(root):
    # Add your solution here
    pass`,
      solution: `def get_bottom_view(root):
    if not root:
        return []
    
    # Map horizontal distance to node value
    # We keep updating values to get the last node at each distance
    distance_map = {}
    
    # Queue elements: (node, horizontal_distance)
    queue = [(root, 0)]
    min_distance = max_distance = 0
    
    while queue:
        node, hd = queue.pop(0)
        
        # Always update the value at this horizontal distance
        # as we want the last node encountered at each position
        distance_map[hd] = node.value
        min_distance = min(min_distance, hd)
        max_distance = max(max_distance, hd)
        
        if node.left:
            queue.append((node.left, hd - 1))
        if node.right:
            queue.append((node.right, hd + 1))
    
    # Return values from left to right
    return [distance_map[d] for d in range(min_distance, max_distance + 1)]`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement a function to find the diagonal view of a binary tree. In the diagonal view, nodes that can be reached by following only right pointers form one diagonal.',
      initialCode: `def get_diagonal_view(root):
    # Add your solution here
    pass`,
      solution: `def get_diagonal_view(root):
    if not root:
        return []
    
    # Dictionary to store nodes in each diagonal
    diagonals = {}
    
    def traverse_diagonal(node, diagonal_level):
        if not node:
            return
            
        # Add node to current diagonal level
        if diagonal_level not in diagonals:
            diagonals[diagonal_level] = []
        diagonals[diagonal_level].append(node.value)
        
        # Going left increases diagonal level
        traverse_diagonal(node.left, diagonal_level + 1)
        # Going right maintains same diagonal level
        traverse_diagonal(node.right, diagonal_level)
    
    traverse_diagonal(root, 0)
    
    # Return diagonals from top to bottom
    return [diagonals[level] for level in sorted(diagonals.keys())]`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'What determines if a node is part of the left view of a binary tree?',
      options: [
        'It must be a left child',
        'It must be the first node encountered at its level when traversing from left to right',
        'It must be the leftmost node in the tree',
        'It must have a left child',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. A right child can be part of the left view if it\'s visible from the left.',
        'Correct! The left view includes the first node we see at each level when looking from the left.',
        'Incorrect. A node doesn\'t need to be the leftmost to be visible from the left.',
        'Incorrect. Nodes in the left view don\'t need to have left children.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What is the key concept used to determine the top view of a binary tree?',
      options: [
        'Level order traversal',
        'Horizontal distance from root',
        'Height of the node',
        'Number of children',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. While level order is used in implementation, it\'s not the key concept.',
        'Correct! Horizontal distance helps us track which nodes align vertically when viewed from above.',
        'Incorrect. Height doesn\'t determine if a node is visible from the top.',
        'Incorrect. Number of children doesn\'t affect top view visibility.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'When implementing the right view recursively, why do we process the right child before the left child?',
      options: [
        'To improve efficiency',
        'To maintain tree balance',
        'To ensure we see the rightmost node at each level first',
        'It doesn\'t matter which child we process first',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Processing order doesn\'t affect efficiency.',
        'Incorrect. View calculations don\'t affect tree balance.',
        'Correct! Processing right child first ensures we capture the rightmost visible node at each level.',
        'Incorrect. The processing order is crucial for getting the correct right view.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const treePropertiesCheckingData: LessonContent = {
  title: 'Understanding and Verifying Tree Properties',
  content: `<p>
When we study trees in nature, we can learn a lot about their health and structure by examining properties like symmetry, balance, and how completely they fill their space. Similarly, in computer science, verifying these properties in binary trees helps us understand their structure and ensure they meet specific requirements for different applications.
</p>

<h3><u>Symmetry: Finding Mirror Images</u></h3>

<p>
A symmetric tree is like looking at your reflection in a mirror – if you fold the tree down the middle through its root, the left and right sides should match perfectly. Just as symmetry in architecture often indicates careful design, symmetry in a binary tree often suggests an organized, balanced structure.
</p>

<p>
When we verify symmetry, we need to think about matching elements in pairs. For each node on the left side, we need to find its corresponding node on the right side. This means that:
</p>

<li>The values in corresponding nodes must match</li>
<li>The left child of a node on one side must correspond to the right child on the other side</li>
<li>The structure must match on both sides, even for empty (null) nodes</li>

<p>
Understanding symmetry verification requires thinking recursively: if two subtrees are symmetric, their children must also form symmetric pairs. This recursive pattern continues all the way down to the leaves.
</p>

<h3><u>Balance: Maintaining Equilibrium</u></h3>

<p>
Think about balancing a mobile – if one side becomes too heavy, the whole structure tilts. Similarly, a binary tree is considered balanced when the heights of left and right subtrees at every node differ by at most one level. This property is crucial because it helps maintain efficient operations.
</p>

<p>
When checking for balance, we need to:
</p>

<li>Calculate heights of left and right subtrees</li>
<li>Compare these heights to ensure they differ by at most one</li>
<li>Verify this property holds recursively for every node in the tree</li>

<p>
The challenge in verifying balance lies in efficiently tracking heights while traversing the tree. We want to avoid recalculating heights multiple times for the same nodes.
</p>

<h3><u>Completeness: Proper Level Filling</u></h3>

<p>
A complete binary tree is like filling seats in a theater – you fill each row from left to right before moving to the next row, and the last row might not be entirely full. This property is particularly important in heap implementations and ensures efficient memory usage.
</p>

<p>
Verifying completeness requires checking that:
</p>

<li>All levels except possibly the last are completely full</li>
<li>The last level fills from left to right without gaps</li>
<li>Once we find a missing child, there should be no more nodes in that level</li>

<p>
The key to understanding completeness verification is recognizing that we need to track both the level and position of each node to ensure proper filling order.
</p>

<h3><u>Property Relationships and Trade-offs</u></h3>
<table>
<tr><th>Property</th><th>Impact on Performance</th><th>Common Applications</th><th>Verification Cost</th></tr>
<tr><td>Symmetry</td><td>Visual structure</td><td>Pattern matching, visualization</td><td>O(n) time, O(h) space</td></tr>
<tr><td>Balance</td><td>O(log n) operations</td><td>AVL trees, efficient searching</td><td>O(n) time, O(h) space</td></tr>
<tr><td>Completeness</td><td>Space efficiency</td><td>Heaps, priority queues</td><td>O(n) time, O(w) space</td></tr>
</table>`,
  codeExample: `class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class TreePropertyVerifier:
    def is_symmetric(self, root):
        """
        Verifies if the binary tree is symmetric around its center.
        Think of folding the tree down the middle - both sides should match.
        
        Time Complexity: O(n) where n is number of nodes
        Space Complexity: O(h) where h is height of tree for recursion
        """
        def are_mirrors(left, right):
            # If both nodes are None, this part is symmetric
            if not left and not right:
                return True
            
            # If one node is None and other isn't, not symmetric
            if not left or not right:
                return False
            
            # For these subtrees to be mirrors:
            # 1. Current nodes must have same value
            # 2. Left's left must match Right's right
            # 3. Left's right must match Right's left
            return (left.value == right.value and
                    are_mirrors(left.left, right.right) and
                    are_mirrors(left.right, right.left))
        
        # Handle empty tree case (considered symmetric)
        if not root:
            return True
            
        # Check if left and right subtrees are mirrors
        return are_mirrors(root.left, root.right)

    def is_balanced(self, root):
        """
        Verifies if the tree is height-balanced.
        Each node's left and right subtrees should have heights 
        differing by at most one.
        
        Returns: (is_balanced, height)
        
        Time Complexity: O(n)
        Space Complexity: O(h) for recursion stack
        """
        def check_balance(node):
            # Base case: empty subtree is balanced with height -1
            if not node:
                return True, -1
            
            # Check left and right subtrees
            left_balanced, left_height = check_balance(node.left)
            right_balanced, right_height = check_balance(node.right)
            
            # Calculate current height
            current_height = max(left_height, right_height) + 1
            
            # Check balance conditions:
            # 1. Both subtrees must be balanced
            # 2. Height difference must be at most 1
            is_balanced = (left_balanced and right_balanced and 
                         abs(left_height - right_height) <= 1)
            
            return is_balanced, current_height
        
        balanced, _ = check_balance(root)
        return balanced

    def is_complete(self, root):
        """
        Verifies if the tree is complete.
        A complete tree has all levels filled except possibly the last,
        which fills from left to right.
        
        Time Complexity: O(n)
        Space Complexity: O(w) where w is maximum width
        """
        if not root:
            return True
        
        # Use level order traversal with node indexing
        queue = [(root, 0)]  # (node, position)
        node_count = 0
        
        while queue:
            node, pos = queue.pop(0)
            
            # Node positions must be consecutive
            # If we find a gap, tree is not complete
            if pos != node_count:
                return False
            
            node_count += 1
            
            # Add children to queue with calculated positions
            # For node at position i:
            # - Left child position: 2i + 1
            # - Right child position: 2i + 2
            if node.left:
                queue.append((node.left, 2 * pos + 1))
            if node.right:
                # Can't have right child if left is missing
                if not node.left:
                    return False
                queue.append((node.right, 2 * pos + 2))
        
        return True

def demonstrate_property_verification():
    """
    Creates sample trees to demonstrate property verification.
    Shows step-by-step how each property is checked.
    """
    verifier = TreePropertyVerifier()
    
    # Create a symmetric tree:
    #       1
    #      / \\
    #     2   2
    #    / \\ / \\
    #   3   4 4  3
    symmetric_root = TreeNode(1)
    symmetric_root.left = TreeNode(2)
    symmetric_root.right = TreeNode(2)
    symmetric_root.left.left = TreeNode(3)
    symmetric_root.left.right = TreeNode(4)
    symmetric_root.right.left = TreeNode(4)
    symmetric_root.right.right = TreeNode(3)
    
    # Create a balanced but not symmetric tree:
    #       1
    #      / \\
    #     2   3
    #    /     \\
    #   4       5
    balanced_root = TreeNode(1)
    balanced_root.left = TreeNode(2)
    balanced_root.right = TreeNode(3)
    balanced_root.left.left = TreeNode(4)
    balanced_root.right.right = TreeNode(5)
    
    # Create a complete tree:
    #       1
    #      / \\
    #     2   3
    #    / \\
    #   4   5
    complete_root = TreeNode(1)
    complete_root.left = TreeNode(2)
    complete_root.right = TreeNode(3)
    complete_root.left.left = TreeNode(4)
    complete_root.left.right = TreeNode(5)
    
    print("Property Verification Results:")
    
    print("\\nSymmetric Tree Tests:")
    print("Is symmetric:", verifier.is_symmetric(symmetric_root))
    print("Is balanced:", verifier.is_balanced(symmetric_root))
    print("Is complete:", verifier.is_complete(symmetric_root))
    
    print("\\nBalanced Tree Tests:")
    print("Is symmetric:", verifier.is_symmetric(balanced_root))
    print("Is balanced:", verifier.is_balanced(balanced_root))
    print("Is complete:", verifier.is_complete(balanced_root))
    
    print("\\nComplete Tree Tests:")
    print("Is symmetric:", verifier.is_symmetric(complete_root))
    print("Is balanced:", verifier.is_balanced(complete_root))
    print("Is complete:", verifier.is_complete(complete_root))

# Run demonstration
demonstrate_property_verification()`,
  exercises: [
    {
      prompt: 'Implement a function to check if a binary tree is perfect (all internal nodes have exactly two children and all leaves are at the same level). Think about how this relates to completeness and balance.',
      initialCode: `def is_perfect(root):
    # Add your solution here
    pass`,
      solution: `def is_perfect(root):
    def get_depth(node):
        """Helper function to get the depth of leftmost leaf"""
        depth = 0
        while node:
            depth += 1
            node = node.left
        return depth
        
    def check_perfect(node, depth, level=0):
        # Base case: empty tree is perfect
        if not node:
            return True
            
        # Leaf node should be at the maximum depth
        if not node.left and not node.right:
            return level == depth - 1
            
        # Internal node must have both children
        if not node.left or not node.right:
            return False
            
        # Recursively check both subtrees
        return (check_perfect(node.left, depth, level + 1) and
                check_perfect(node.right, depth, level + 1))
    
    if not root:
        return True
        
    depth = get_depth(root)
    return check_perfect(root, depth)`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Write a function that determines if a binary tree is height-balanced while also tracking the minimum and maximum heights. This helps identify how close the tree is to being perfectly balanced.',
      initialCode: `def check_balance_with_heights(root):
    # Return (is_balanced, min_height, max_height)
    pass`,
      solution: `def check_balance_with_heights(root):
    def check_heights(node):
        if not node:
            return True, 0, 0  # balanced, min_height, max_height
            
        # Check left subtree
        left_balanced, left_min, left_max = check_heights(node.left)
        # Check right subtree
        right_balanced, right_min, right_max = check_heights(node.right)
        
        # Calculate heights for current subtree
        min_height = min(left_min, right_min) + 1
        max_height = max(left_max, right_max) + 1
        
        # Check if balanced at this node
        is_balanced = (left_balanced and right_balanced and 
                      abs(left_max - right_min) <= 1)
        
        return is_balanced, min_height, max_height
    
    return check_heights(root)`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'What must be true for a binary tree to be symmetric?',
      options: [
        'Left and right subtrees must be identical',
        'Left and right subtrees must be mirror images of each other',
        'All nodes must have the same value',
        'The tree must be balanced',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Identical subtrees would create a copy, not a mirror image.',
        'Correct! A symmetric tree has left and right subtrees that mirror each other, like a reflection.',
        'Incorrect. Node values can differ in a symmetric tree.',
        'Incorrect. Balance is a separate property from symmetry.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What is the key requirement for a binary tree to be complete?',
      options: [
        'All levels must be fully filled',
        'The tree must be symmetric',
        'All levels except possibly the last must be full, and the last level fills from left to right',
        'All leaf nodes must be at the same level',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. A complete tree can have an incomplete last level.',
        'Incorrect. Completeness doesn\'t require symmetry.',
        'Correct! This defines completeness - all levels filled except maybe the last, which fills left to right.',
        'Incorrect. This describes a perfect binary tree.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the maximum allowed difference in heights between left and right subtrees for a tree to be balanced?',
      options: [
        '0 levels',
        '1 level',
        '2 levels',
        'No limit',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. This would be too restrictive and require perfect balance.',
        'Correct! A height difference of at most 1 between subtrees defines a balanced tree.',
        'Incorrect. This would allow too much imbalance.',
        'Incorrect. Without a limit, the tree wouldn\'t be considered balanced.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const bstConceptData: LessonContent = {
  title: 'Understanding Binary Search Trees: Properties and Implementation',
  content: `<p>
Imagine you're looking up a word in a dictionary. You don't start from page one and read every word - instead, you might open the book somewhere in the middle, see if your word would come before or after that page, and then repeat this process with the relevant half. This intuitive search strategy is exactly how a Binary Search Tree works, making it one of the most elegant and practical data structures in computer science.
</p>

<h3><u>The Heart of BSTs: The BST Property</u></h3>

<p>
At its core, a Binary Search Tree maintains a fundamental ordering property that makes all its operations efficient. For every node in the tree:
</p>

<li>All values in its left subtree must be strictly less than the node's value</li>
<li>All values in its right subtree must be strictly greater than the node's value</li>
<li>Both the left and right subtrees must themselves be valid BSTs</li>

<p>
This ordering creates a powerful property: at each node, we can make a decision that eliminates roughly half of our remaining search space. Think about how this mirrors our dictionary example - each time we make a comparison, we can ignore half of the remaining pages.
</p>

<h3><u>Understanding BST Operations Through Analogies</u></h3>

<h4><b>Search: Following the Trail</b></h4>
<p>
Searching in a BST is like following a trail with clear signposts. At each node (signpost), you ask yourself one simple question: is what I'm looking for less than or greater than what I see here? This single comparison tells you which path to take - left for "less than", right for "greater than". This process continues until you either find what you're looking for or reach the end of a path (indicating the value isn't in the tree).
</p>

<h4><b>Insertion: Finding the Right Spot</b></h4>
<p>
Inserting into a BST is like adding a new book to a perfectly organized bookshelf. You carry your book along the shelves, comparing it with other books until you find the exact spot where it belongs. The BST's property ensures there's exactly one correct spot for each new value.
</p>

<h4><b>Deletion: The Complex Dance</b></h4>
<p>
Deletion is like removing a book from a shelf while ensuring all other books remain perfectly organized. The complexity comes from maintaining the BST property when the node we're removing has two children. We need to find a suitable replacement that maintains our ordering - typically either the largest value from the left subtree (inorder predecessor) or the smallest value from the right subtree (inorder successor).
</p>

<h3><u>The Power and Limitations of BSTs</u></h3>
<table>
<tr><th>Operation</th><th>Average Case</th><th>Worst Case</th><th>When It Happens</th></tr>
<tr><td>Search</td><td>O(log n)</td><td>O(n)</td><td>Tree becomes a linked list</td></tr>
<tr><td>Insert</td><td>O(log n)</td><td>O(n)</td><td>Inserting sorted/reverse sorted data</td></tr>
<tr><td>Delete</td><td>O(log n)</td><td>O(n)</td><td>Tree is severely unbalanced</td></tr>
</table>`,
  codeExample: `class BSTNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinarySearchTree:
    def __init__(self):
        """
        Initialize an empty BST.
        The tree starts with no nodes, like an empty bookshelf.
        """
        self.root = None

    def insert(self, value):
        """
        Inserts a new value into the BST while maintaining the BST property.
        Think of it like finding the right spot for a book on a sorted bookshelf.
        
        Time Complexity: O(log n) average, O(n) worst case
        Space Complexity: O(1) iterative, O(log n) recursive
        """
        def insert_recursive(node, value):
            # If we've reached an empty spot, this is where our value belongs
            if node is None:
                return BSTNode(value)
            
            # Decide which path to take based on BST property
            if value < node.value:
                node.left = insert_recursive(node.left, value)
            else:
                node.right = insert_recursive(node.right, value)
            
            return node
        
        # If tree is empty, new node becomes the root
        if self.root is None:
            self.root = BSTNode(value)
        else:
            insert_recursive(self.root, value)

    def search(self, value):
        """
        Searches for a value in the BST.
        Like following a trail with clear signposts at each step.
        
        Time Complexity: O(log n) average, O(n) worst case
        Space Complexity: O(1) iterative
        """
        current = self.root
        path = []  # Keep track of our search path for visualization
        
        while current:
            path.append(current.value)
            if value == current.value:
                return True, path
            elif value < current.value:
                current = current.left
            else:
                current = current.right
                
        return False, path

    def delete(self, value):
        """
        Removes a value from the BST while maintaining the BST property.
        This is the most complex operation due to the need to handle
        multiple cases and maintain the BST property.
        
        Time Complexity: O(log n) average, O(n) worst case
        Space Complexity: O(log n) due to recursion
        """
        def find_min(node):
            current = node
            while current.left:
                current = current.left
            return current

        def delete_recursive(node, value):
            # Base case: empty tree or value not found
            if not node:
                return None
                
            # Search for the node to delete
            if value < node.value:
                node.left = delete_recursive(node.left, value)
            elif value > node.value:
                node.right = delete_recursive(node.right, value)
            else:
                # Node found! Now handle the three deletion cases:
                
                # Case 1: Leaf node (no children)
                if not node.left and not node.right:
                    return None
                
                # Case 2: Single child
                if not node.left:
                    return node.right
                if not node.right:
                    return node.left
                
                # Case 3: Two children
                # Find the inorder successor (smallest value in right subtree)
                successor = find_min(node.right)
                # Copy successor's value to current node
                node.value = successor.value
                # Delete the successor (which has at most one child)
                node.right = delete_recursive(node.right, successor.value)
            
            return node

        self.root = delete_recursive(self.root, value)

    def inorder_traversal(self):
        """
        Returns list of values in sorted order.
        This demonstrates a key BST property: inorder traversal
        produces sorted sequence.
        
        Time Complexity: O(n)
        Space Complexity: O(n) for result list
        """
        result = []
        
        def inorder_recursive(node):
            if node:
                inorder_recursive(node.left)
                result.append(node.value)
                inorder_recursive(node.right)
        
        inorder_recursive(self.root)
        return result

def demonstrate_bst():
    """
    Creates and demonstrates a BST with various operations.
    Shows how the BST maintains its ordering property.
    """
    bst = BinarySearchTree()
    
    # Insert some values
    values = [50, 30, 70, 20, 40, 60, 80]
    print("Inserting values:", values)
    
    for value in values:
        bst.insert(value)
        print(f"\\nAfter inserting {value}:")
        print("Sorted order (inorder traversal):", bst.inorder_traversal())
    
    # Demonstrate search
    search_value = 40
    found, path = bst.search(search_value)
    print(f"\\nSearching for {search_value}")
    print("Search path:", ' -> '.join(map(str, path)))
    print("Result:", 'Found' if found else 'Not found')
    
    # Demonstrate deletion
    delete_value = 30
    print(f"\\nDeleting {delete_value}")
    bst.delete(delete_value)
    print("After deletion (inorder):", bst.inorder_traversal())

# Run demonstration
demonstrate_bst()`,
  exercises: [
    {
      prompt: 'Implement a function to find the kth smallest element in a BST. This is a great example of how the BST property can be used for order statistics.',
      initialCode: `def find_kth_smallest(root, k):
    # Add your solution here
    pass`,
      solution: `def find_kth_smallest(root, k):
    def inorder_count(node):
        nonlocal k, result
        if not node or k < 0:
            return
            
        # Process left subtree
        inorder_count(node.left)
        
        # Process current node
        k -= 1
        if k == 0:
            result = node.value
            return
            
        # Process right subtree
        inorder_count(node.right)
    
    result = None
    inorder_count(root)
    return result`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Write a function to find the floor and ceiling values for a given input in a BST. The floor is the largest value smaller than or equal to the input, and the ceiling is the smallest value larger than or equal to the input.',
      initialCode: `def find_floor_ceiling(root, target):
    # Return (floor, ceiling)
    # Use None if floor/ceiling doesn't exist
    pass`,
      solution: `def find_floor_ceiling(root, target):
    floor = ceiling = None
    current = root
    
    while current:
        if current.value == target:
            return target, target
            
        if current.value < target:
            # Current value could be the floor
            floor = current.value
            current = current.right
        else:
            # Current value could be the ceiling
            ceiling = current.value
            current = current.left
    
    return floor, ceiling`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'What makes a binary tree a valid BST?',
      options: [
        'All right nodes must be greater than left nodes',
        'Each node must have exactly two children',
        'For every node, all values in left subtree must be less than node, and all values in right subtree must be greater',
        'The tree must be balanced',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. The relationship is between nodes and their entire subtrees, not just direct children.',
        'Incorrect. BST nodes can have 0, 1, or 2 children.',
        'Correct! This is the BST property that enables efficient searching.',
        'Incorrect. While balance is desirable, it\'s not required for BST validity.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What is the most challenging case when deleting a node from a BST?',
      options: [
        'Deleting a leaf node',
        'Deleting a node with one child',
        'Deleting a node with two children',
        'Deleting the root node',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Leaf nodes are the simplest case - just remove them.',
        'Incorrect. Single child cases are straightforward - replace with the child.',
        'Correct! This case requires finding a successor/predecessor and maintains BST property.',
        'Incorrect. Root deletion follows the same cases as any other node.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the time complexity of searching in a perfectly balanced BST?',
      options: [
        'O(1)',
        'O(log n)',
        'O(n)',
        'O(n log n)',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. BST search cannot achieve constant time.',
        'Correct! Each comparison eliminates half of the remaining nodes.',
        'Incorrect. This is the worst case for an unbalanced BST.',
        'Incorrect. This complexity is more typical of sorting algorithms.',
      ],
      difficulty: Difficulty.Beginner,
    }
  ]
};

const bstOperationsData: LessonContent = {
  title: 'Binary Search Tree Operations: A Deep Dive into Search, Insertion, and Deletion',
  content: `<p>
When we work with Binary Search Trees, each operation is like playing a strategic game where every move must maintain the tree's special ordering property. Let's explore how these operations work, understanding not just the mechanics but the reasoning behind each step.
</p>

<h3><u>The Search Operation: Following the Trail</u></h3>

<p>
Searching in a BST is like following a well-marked trail where each marker gives you a clear direction. Imagine you're looking for a specific number, let's say 42. At each node, you ask yourself one simple question: "Is 42 less than or greater than the current node's value?" This single comparison tells you exactly which path to take – left for "less than," right for "greater than."
</p>

<p>
This process is remarkably efficient because each decision eliminates roughly half of the remaining possibilities. Think about how this mirrors the way you might search for a word in a dictionary – each time you open the book, you eliminate half of the remaining pages. This is why BST search typically takes logarithmic time in balanced trees.
</p>

<h3><u>The Insertion Operation: Finding the Perfect Spot</u></h3>

<p>
Insertion is like finding the right spot for a new book on a perfectly organized bookshelf. You start at the root and follow the same decision-making process as searching until you find an empty spot (a null pointer) where the new value belongs. The BST property ensures that this spot is unique and maintains the correct ordering.
</p>

<p>
What makes insertion fascinating is that the same set of values can create different tree shapes depending on the order of insertion. This is why the first value inserted becomes the root, and subsequent values determine the overall structure. Understanding this helps us see why some insertion orders lead to balanced trees while others create inefficient, unbalanced structures.
</p>

<h3><u>The Deletion Operation: A Three-Act Play</u></h3>

<p>
Deletion is the most complex BST operation because removing a node might require restructuring part of the tree. It's like removing a book from a shelf while ensuring all other books remain perfectly ordered. Let's understand the three possible scenarios we might encounter:
</p>

<h4><b>Act 1: Leaf Node Deletion</b></h4>
<p>
The simplest case occurs when we're removing a leaf node (one with no children). Like removing a book from the end of a shelf, we can simply remove it without affecting any other nodes. We just update its parent to point to null instead of the node we're removing.
</p>

<h4><b>Act 2: Single Child Deletion</b></h4>
<p>
When the node we're removing has exactly one child, we can bypass the node by connecting its parent directly to its child. This is like removing a book and sliding the remaining books over to close the gap. The BST property is maintained because all values in the subtree are still in their correct position relative to the parent.
</p>

<h4><b>Act 3: Two Children Deletion</b></h4>
<p>
The most challenging case occurs when the node has two children. We can't simply promote one child because it might violate the BST property. Instead, we need to find a suitable replacement that maintains the ordering. We have two options:

1. Use the largest value in the left subtree (inorder predecessor)
2. Use the smallest value in the right subtree (inorder successor)

Either choice works because these values are positioned perfectly to maintain the BST property – all values to their left are smaller, all values to their right are larger.
</p>

<h3><u>Understanding Operation Complexities</u></h3>
<table>
<tr><th>Operation</th><th>Average Case</th><th>Worst Case</th><th>Space Usage</th></tr>
<tr><td>Search</td><td>O(log n)</td><td>O(n)</td><td>O(1) iterative</td></tr>
<tr><td>Insert</td><td>O(log n)</td><td>O(n)</td><td>O(1) iterative</td></tr>
<tr><td>Delete</td><td>O(log n)</td><td>O(n)</td><td>O(1) iterative</td></tr>
</table>`,
  codeExample: `class BSTNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BSTOperations:
    def search_with_path(self, root, target):
        """
        Searches for a value in the BST while tracking the path taken.
        This helps us understand how the search narrows down possibilities.
        
        Returns: (found, path_taken)
        Time: O(log n) average, O(n) worst case
        Space: O(1) for the search itself
        """
        current = root
        path = []  # Track our decision-making process
        
        while current:
            # Record each node we visit
            path.append(current.value)
            
            if target == current.value:
                return True, path
            elif target < current.value:
                # Target is smaller, so it must be in left subtree
                current = current.left
            else:
                # Target is larger, so it must be in right subtree
                current = current.right
        
        return False, path

    def insert_with_explanation(self, root, value):
        """
        Inserts a value into the BST with detailed explanation of the process.
        Shows how we find the correct spot while maintaining BST property.
        
        Returns: (new_root, explanation)
        Time: O(log n) average, O(n) worst case
        Space: O(log n) for recursion
        """
        explanation = []
        
        def insert_recursive(node, value):
            if not node:
                explanation.append(f"Found insertion point for {value}")
                return BSTNode(value)
            
            explanation.append(f"Comparing {value} with {node.value}")
            if value < node.value:
                explanation.append(f"{value} is less than {node.value}, going left")
                node.left = insert_recursive(node.left, value)
            else:
                explanation.append(f"{value} is greater than or equal to {node.value}, going right")
                node.right = insert_recursive(node.right, value)
            
            return node
        
        new_root = insert_recursive(root, value)
        return new_root, explanation

    def delete_with_explanation(self, root, value):
        """
        Deletes a value from the BST with detailed explanation of which
        case is being handled and why certain choices are made.
        
        Returns: (new_root, explanation)
        Time: O(log n) average, O(n) worst case
        Space: O(log n) for recursion
        """
        explanation = []
        
        def find_min(node):
            current = node
            while current.left:
                current = current.left
            return current.value
        
        def delete_recursive(node, value):
            if not node:
                explanation.append(f"Value {value} not found in tree")
                return None
            
            if value < node.value:
                explanation.append(f"Looking for {value} in left subtree of {node.value}")
                node.left = delete_recursive(node.left, value)
            elif value > node.value:
                explanation.append(f"Looking for {value} in right subtree of {node.value}")
                node.right = delete_recursive(node.right, value)
            else:
                # Found the node to delete
                explanation.append(f"Found node to delete: {node.value}")
                
                # Case 1: Leaf node
                if not node.left and not node.right:
                    explanation.append("Case 1: Node is a leaf - simply remove it")
                    return None
                
                # Case 2: Single child
                if not node.left:
                    explanation.append(
                        "Case 2: Node has only right child - replace with right child"
                    )
                    return node.right
                if not node.right:
                    explanation.append(
                        "Case 2: Node has only left child - replace with left child"
                    )
                    return node.left
                
                # Case 3: Two children
                explanation.append(
                    "Case 3: Node has two children - find inorder successor"
                )
                successor = find_min(node.right)
                explanation.append(
                    f"Found successor {successor} to replace {node.value}"
                )
                node.value = successor
                explanation.append(
                    f"Now deleting successor {successor} from right subtree"
                )
                node.right = delete_recursive(node.right, successor)
            
            return node
        
        new_root = delete_recursive(root, value)
        return new_root, explanation

def demonstrate_operations():
    """
    Demonstrates BST operations with detailed explanations.
    Shows step-by-step how each operation works and why.
    """
    # Create initial BST
    root = BSTNode(20)
    root.left = BSTNode(10)
    root.right = BSTNode(30)
    root.left.right = BSTNode(15)
    root.right.left = BSTNode(25)
    
    ops = BSTOperations()
    
    # Demonstrate search
    print("Searching for 15:")
    found, path = ops.search_with_path(root, 15)
    print("Path taken:", ' -> '.join(map(str, path)))
    print("Result:", 'Found' if found else 'Not found')
    
    # Demonstrate insertion
    print("\nInserting 23:")
    root, explanation = ops.insert_with_explanation(root, 23)
    for step in explanation:
        print(step)
    
    # Demonstrate deletion
    print("\nDeleting 10:")
    root, explanation = ops.delete_with_explanation(root, 10)
    for step in explanation:
        print(step)

# Run demonstration
demonstrate_operations()`,
  exercises: [
    {
      prompt: 'Implement a function that verifies if a given binary tree is a valid BST. Consider how to handle edge cases like duplicate values and ensuring the entire subtree (not just immediate children) satisfies the BST property.',
      initialCode: `def is_valid_bst(root):
    # Add your solution here
    pass`,
      solution: `def is_valid_bst(root):
    def validate(node, min_val=float('-inf'), max_val=float('inf')):
        if not node:
            return True
            
        # Current node's value must be within valid range
        if node.value <= min_val or node.value >= max_val:
            return False
            
        # Left subtree must be less than current node's value
        # Right subtree must be greater than current node's value
        return (validate(node.left, min_val, node.value) and
                validate(node.right, node.value, max_val))
    
    return validate(root)`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Write a function that finds the closest value to a given target in a BST. This combines the BST search property with tracking the closest value seen so far.',
      initialCode: `def find_closest_value(root, target):
    # Add your solution here
    pass`,
      solution: `def find_closest_value(root, target):
    def find_closest_recursive(node, target, closest):
        if not node:
            return closest
        
        # Update closest if current node is closer to target
        if abs(target - closest) > abs(target - node.value):
            closest = node.value
        
        # Decide which subtree to explore
        if target < node.value:
            return find_closest_recursive(node.left, target, closest)
        elif target > node.value:
            return find_closest_recursive(node.right, target, closest)
        else:
            return closest  # Found exact match
    
    if not root:
        return None
        
    return find_closest_recursive(root, target, root.value)`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'When deleting a node with two children from a BST, which nodes can be used to replace it?',
      options: [
        'Any node in the tree',
        'Any leaf node',
        'Either the largest value in the left subtree or smallest value in the right subtree',
        'Only nodes at the same level',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. The replacement node must maintain the BST property.',
        'Incorrect. Not all leaf nodes would maintain the BST property.',
        'Correct! These nodes (predecessor or successor) are perfectly positioned to maintain the BST property.',
        'Incorrect. Level has no bearing on maintaining the BST property.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'Why is BST insertion generally more efficient than searching an unsorted array?',
      options: [
        'BSTs always require less memory',
        'BST insertion visits every node',
        'Each comparison in a BST eliminates roughly half the remaining nodes',
        'BSTs automatically balance themselves',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Memory usage isn\'t related to insertion efficiency.',
        'Incorrect. Efficient BST insertion doesn\'t visit every node.',
        'Correct! This property gives BSTs their logarithmic time complexity for balanced trees.',
        'Incorrect. Basic BSTs don\'t automatically balance.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What makes the deletion of a node with two children more complex than other cases?',
      options: [
        'It requires more memory',
        'It needs to maintain the BST property while restructuring the tree',
        'It always creates an unbalanced tree',
        'It requires visiting every node',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Memory usage isn\'t the main challenge.',
        'Correct! Finding a suitable replacement while maintaining the BST property is the key challenge.',
        'Incorrect. Deletion doesn\'t necessarily affect balance.',
        'Incorrect. We only need to visit nodes along the path to the target.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const bstValidationData: LessonContent = {
  title: 'Understanding Binary Search Tree Validation: Beyond Simple Comparisons',
  content: `<p>
Imagine you're a museum curator tasked with verifying if a family tree painting is authentic. You wouldn't just check if each parent is older than their children - you'd need to verify that the dates make sense across multiple generations. Similarly, validating a Binary Search Tree isn't just about checking immediate parent-child relationships; it's about ensuring the entire structure maintains a specific ordering property across all levels.
</p>

<h3><u>Understanding BST Validation: The Complete Picture</u></h3>

<p>
At first glance, BST validation might seem simple: ensure each node is greater than its left child and less than its right child. However, this naive approach misses crucial aspects of the BST property. Consider a tree where a node's value is greater than its left child but smaller than a value deeper in its left subtree. Such a tree would violate the BST property despite satisfying the simple parent-child comparison.
</p>

<p>
The complete BST property states that for any node:
- Every value in its entire left subtree must be less than the node's value
- Every value in its entire right subtree must be greater than the node's value
- Both subtrees must themselves be valid BSTs
</p>

<h3><u>The Range-Based Validation Approach</u></h3>

<p>
A powerful way to validate a BST is to think about valid ranges for values. As we traverse down the tree, we maintain a valid range for each node:
</p>

<h4><b>Moving Left</b></h4>
<p>
When we move to a left child, we keep the same lower bound (as values must still be greater than previous ancestors), but our upper bound becomes the parent's value. This ensures all values in the left subtree remain less than the parent.
</p>

<h4><b>Moving Right</b></h4>
<p>
When we move to a right child, our lower bound becomes the parent's value (as all values must be greater than the parent), while the upper bound remains the same. This ensures all values in the right subtree remain greater than the parent.
</p>

<h3><u>Common Validation Edge Cases</u></h3>

<h4><b>Handling Duplicates</b></h4>
<p>
Different BST implementations might have different policies about duplicate values. Some common approaches include:
- No duplicates allowed (strict inequality)
- Duplicates allowed in right subtree (non-strict inequality for right side)
- Duplicates allowed in left subtree (non-strict inequality for left side)
</p>

<h4><b>Empty Trees and Single Nodes</b></h4>
<p>
Remember that empty trees and single nodes are valid BSTs by definition. The validation logic should handle these base cases correctly:
- An empty tree is always a valid BST
- A single node is always a valid BST
- A leaf node is always a valid BST within its allowed range
</p>

<h3><u>Understanding Time and Space Complexity</u></h3>
<table>
<tr><th>Approach</th><th>Time Complexity</th><th>Space Complexity</th><th>Key Advantage</th></tr>
<tr><td>Range-Based</td><td>O(n)</td><td>O(h)</td><td>Handles all cases correctly</td></tr>
<tr><td>Inorder Traversal</td><td>O(n)</td><td>O(n)</td><td>Simpler to understand</td></tr>
<tr><td>Parent-Child Only</td><td>O(n)</td><td>O(h)</td><td>Insufficient - doesn't work</td></tr>
</table>`,
  codeExample: `class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BSTValidator:
    def is_valid_bst_range(self, root):
        """
        Validates if a binary tree is a BST using the range approach.
        For each node, maintains a valid range for its value.
        
        Time Complexity: O(n) where n is number of nodes
        Space Complexity: O(h) where h is height of tree
        """
        def validate(node, min_val=float('-inf'), max_val=float('inf')):
            # Base case: empty trees are valid BSTs
            if not node:
                return True
            
            # Check if current node's value is within valid range
            if node.value <= min_val or node.value >= max_val:
                return False
            
            # Recursively validate left and right subtrees with updated ranges
            # Left subtree: all values must be less than current node
            # Right subtree: all values must be greater than current node
            return (validate(node.left, min_val, node.value) and
                    validate(node.right, node.value, max_val))
        
        return validate(root)

    def is_valid_bst_inorder(self, root):
        """
        Validates BST using inorder traversal approach.
        A valid BST will yield values in ascending order.
        
        Time Complexity: O(n)
        Space Complexity: O(n) for storing all values
        """
        def inorder(node, values):
            if not node:
                return
            
            # Traverse left subtree
            inorder(node.left, values)
            
            # Check if current value maintains ascending order
            if values and values[-1] >= node.value:
                return False
            values.append(node.value)
            
            # Traverse right subtree
            return inorder(node.right, values)
        
        values = []
        inorder(root, values)
        
        # Check if values are in strictly ascending order
        for i in range(1, len(values)):
            if values[i] <= values[i-1]:
                return False
        return True

    def demonstrate_validation_cases(self):
        """
        Creates various test cases to demonstrate BST validation,
        including edge cases and common mistakes.
        """
        # Case 1: Valid BST
        #       5
        #      / \\
        #     3   7
        #    / \\
        #   1   4
        valid_bst = TreeNode(5)
        valid_bst.left = TreeNode(3)
        valid_bst.right = TreeNode(7)
        valid_bst.left.left = TreeNode(1)
        valid_bst.left.right = TreeNode(4)
        
        # Case 2: Invalid BST (violates property across levels)
        #       5
        #      / \\
        #     3   7
        #    / \\
        #   1   6  <- violates BST property
        invalid_bst = TreeNode(5)
        invalid_bst.left = TreeNode(3)
        invalid_bst.right = TreeNode(7)
        invalid_bst.left.left = TreeNode(1)
        invalid_bst.left.right = TreeNode(6)  # Greater than parent's parent
        
        # Case 3: Single node (valid BST)
        single_node = TreeNode(1)
        
        # Test all cases
        test_cases = [
            ("Valid BST", valid_bst),
            ("Invalid BST", invalid_bst),
            ("Single Node BST", single_node),
            ("Empty BST", None)
        ]
        
        for name, root in test_cases:
            print(f"\\nTesting {name}:")
            print("Range-based validation:", self.is_valid_bst_range(root))
            print("Inorder validation:", self.is_valid_bst_inorder(root))

def explain_common_mistakes():
    """
    Creates and explains examples of common BST validation mistakes.
    """
    def wrong_validation(root):
        """
        Incorrect validation that only checks immediate parent-child relationships
        """
        if not root:
            return True
            
        # This approach is wrong because it doesn't verify the BST
        # property across multiple levels
        is_valid = True
        if root.left:
            is_valid = is_valid and root.left.value < root.value
        if root.right:
            is_valid = is_valid and root.right.value > root.value
            
        return (is_valid and
                wrong_validation(root.left) and
                wrong_validation(root.right))
    
    # Create a tree that would pass the wrong validation
    # but is actually invalid
    #       5
    #      / \\
    #     3   7
    #    / \\
    #   1   6  <- violates BST property but parent-child check won't catch it
    root = TreeNode(5)
    root.left = TreeNode(3)
    root.right = TreeNode(7)
    root.left.left = TreeNode(1)
    root.left.right = TreeNode(6)
    
    validator = BSTValidator()
    print("Testing tree with subtle BST violation:")
    print("Incorrect validation (only parent-child):", wrong_validation(root))
    print("Correct validation (range-based):", validator.is_valid_bst_range(root))
    print("\\nWhy the difference?")
    print("The incorrect validation only checks immediate parent-child relationships.")
    print("It misses violations that occur across multiple levels of the tree.")
    print("The node with value 6 is correctly greater than its parent (3)")
    print("but violates the BST property because it's greater than its grandparent (5)")

# Run demonstrations
validator = BSTValidator()
validator.demonstrate_validation_cases()
print("\\nExplaining Common Validation Mistakes:")
explain_common_mistakes()`,
  exercises: [
    {
      prompt: 'Implement a function that checks if a binary tree is a valid BST while also keeping track of the minimum and maximum values in the tree. This helps understand the range of values in the BST.',
      initialCode: `def validate_bst_with_range(root):
    # Return (is_valid, min_value, max_value)
    # Return (True, None, None) for empty tree
    pass`,
      solution: `def validate_bst_with_range(root):
    def validate(node, min_val=float('-inf'), max_val=float('inf')):
        if not node:
            return True, None, None
            
        # Validate current node's value range
        if node.value <= min_val or node.value >= max_val:
            return False, None, None
            
        # Check left subtree
        left_valid, left_min, left_max = validate(node.left, min_val, node.value)
        if not left_valid:
            return False, None, None
            
        # Check right subtree
        right_valid, right_min, right_max = validate(node.right, node.value, max_val)
        if not right_valid:
            return False, None, None
            
        # Calculate min and max values for current subtree
        curr_min = left_min if left_min is not None else node.value
        curr_max = right_max if right_max is not None else node.value
        
        return True, curr_min, curr_max
    
    return validate(root)`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Write a function that validates a BST while also ensuring that no two adjacent levels have values that differ by more than a given threshold. This combines BST validation with an additional constraint.',
      initialCode: `def validate_bst_with_threshold(root, threshold):
    # Return True if valid BST and adjacent levels differ by at most threshold
    pass`,
      solution: `def validate_bst_with_threshold(root, threshold):
    def validate(node, min_val=float('-inf'), max_val=float('inf'), parent_val=None):
        if not node:
            return True
            
        # Check BST property
        if node.value <= min_val or node.value >= max_val:
            return False
            
        # Check threshold with parent if it exists
        if parent_val is not None and abs(node.value - parent_val) > threshold:
            return False
            
        # Validate children with updated ranges and current value as parent
        return (validate(node.left, min_val, node.value, node.value) and
                validate(node.right, node.value, max_val, node.value))
    
    return validate(root)`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why is checking only parent-child relationships insufficient for BST validation?',
      options: [
        'It takes too much time',
        'It misses violations that occur across multiple levels',
        'It can\'t handle empty trees',
        'It uses too much memory',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Time complexity isn\'t the issue here.',
        'Correct! A value might be valid compared to its parent but invalid compared to an ancestor.',
        'Incorrect. Empty tree handling is a separate concern.',
        'Incorrect. Memory usage isn\'t the main problem.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the key insight behind the range-based BST validation approach?',
      options: [
        'It visits nodes in order',
        'It maintains valid ranges for each subtree',
        'It counts the number of nodes',
        'It checks tree balance',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Order of traversal isn\'t the key insight.',
        'Correct! By maintaining valid ranges, we ensure the BST property holds across all levels.',
        'Incorrect. Node counting isn\'t related to BST validation.',
        'Incorrect. Balance isn\'t required for BST validity.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'How should a BST validation function handle an empty tree?',
      options: [
        'Return false',
        'Return true',
        'Throw an error',
        'Keep searching',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. An empty tree is a valid BST by definition.',
        'Correct! An empty tree satisfies the BST property vacuously.',
        'Incorrect. Empty trees are valid input cases.',
        'Incorrect. There\'s nothing to search in an empty tree.',
      ],
      difficulty: Difficulty.Beginner,
    }
  ]
};

const bstBalancingData: LessonContent = {
  title: 'Understanding and Maintaining BST Balance',
  content: `<p>
Imagine you're organizing books on a bookshelf. If you stack all the books on one side, the shelf might tip over. Similarly, when a Binary Search Tree becomes unbalanced, with most nodes concentrated on one side, its performance suffers significantly. Understanding and maintaining balance is crucial for ensuring BSTs perform efficiently.
</p>

<h3><u>Why Balance Matters: The Performance Impact</u></h3>

<p>
A balanced BST provides O(log n) time complexity for operations like search, insert, and delete. However, when a tree becomes unbalanced, these operations can degrade to O(n) time complexity. Think about searching a phonebook: if all entries were arranged in a single column instead of being spread across the page, finding a name would take much longer.
</p>

<p>
Consider what happens when we insert values in sorted order (1, 2, 3, 4, 5) into a BST. Without balancing, we get a linear structure that behaves more like a linked list than a tree. Each operation now requires visiting every node rather than eliminating half the possibilities at each step.
</p>

<h3><u>Understanding Tree Balance</u></h3>

<p>
A BST is considered balanced when the heights of the left and right subtrees of every node differ by at most one. This ensures that the tree maintains its logarithmic performance characteristics. Think of it like maintaining equal weight distribution on both sides of a scale.
</p>

<h4><b>Balance Factor</b></h4>
<p>
The balance factor of a node is the height of its right subtree minus the height of its left subtree. For a balanced tree, this value must be -1, 0, or 1 for every node. When the balance factor falls outside this range, we need to perform rotations to restore balance.
</p>

<h3><u>Rotation Operations: The Building Blocks of Balancing</u></h3>

<p>
Tree rotations are like dance moves that rearrange nodes while preserving the BST property. There are two basic types of rotations:
</p>

<h4><b>Left Rotation</b></h4>
<p>
Used when a tree is heavy on the right side. Think of it as picking up a node and rotating it counterclockwise, making its right child the new root of the subtree. This operation maintains the BST property while reducing the height of the right subtree.
</p>

<h4><b>Right Rotation</b></h4>
<p>
Used when a tree is heavy on the left side. Similar to left rotation but in the opposite direction. The left child becomes the new root of the subtree, reducing the height of the left side while maintaining the BST property.
</p>

<h3><u>Self-Balancing Techniques</u></h3>
<table>
<tr><th>Technique</th><th>Balance Strategy</th><th>Performance Guarantee</th><th>Trade-offs</th></tr>
<tr><td>AVL Trees</td><td>Strict balance</td><td>Perfect O(log n)</td><td>More rotations</td></tr>
<tr><td>Red-Black Trees</td><td>Relaxed balance</td><td>O(log n)</td><td>More complex, fewer rotations</td></tr>
<tr><td>Splay Trees</td><td>Access-based</td><td>Amortized O(log n)</td><td>Recently accessed nodes stay near root</td></tr>
</table>`,
  codeExample: `class AVLNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
        self.height = 1  # Height of node in tree

class AVLTree:
    def get_height(self, node):
        """
        Returns the height of a node.
        Empty nodes have height 0.
        """
        if not node:
            return 0
        return node.height

    def update_height(self, node):
        """
        Updates the height of a node based on its children's heights.
        Important for maintaining balance information.
        """
        if node:
            node.height = 1 + max(self.get_height(node.left),
                                self.get_height(node.right))

    def get_balance(self, node):
        """
        Calculates the balance factor of a node.
        Balance factor = height(right subtree) - height(left subtree)
        """
        if not node:
            return 0
        return self.get_height(node.right) - self.get_height(node.left)

    def left_rotate(self, y):
        """
        Performs a left rotation on node y.
        This operation maintains BST property while rebalancing.
        
        Before:     y               After:      x
                  /  \\                        /  \\
                T1    x                      y    T3
                     /  \\                  /  \\
                    T2   T3               T1   T2
        """
        x = y.right
        T2 = x.left

        # Perform rotation
        x.left = y
        y.right = T2

        # Update heights
        self.update_height(y)
        self.update_height(x)

        return x

    def right_rotate(self, x):
        """
        Performs a right rotation on node x.
        Mirror image of left_rotate.
        
        Before:     x               After:      y
                  /  \\                        /  \\
                y    T3                     T1    x
               / \\                              /  \\
              T1  T2                           T2   T3
        """
        y = x.left
        T2 = y.right

        # Perform rotation
        y.right = x
        x.left = T2

        # Update heights
        self.update_height(x)
        self.update_height(y)

        return y

    def insert(self, root, value):
        """
        Inserts a new value into the AVL tree while maintaining balance.
        Returns the new root of the subtree.
        """
        # 1. Perform standard BST insert
        if not root:
            return AVLNode(value)

        if value < root.value:
            root.left = self.insert(root.left, value)
        else:
            root.right = self.insert(root.right, value)

        # 2. Update height of current node
        self.update_height(root)

        # 3. Get balance factor to check if node became unbalanced
        balance = self.get_balance(root)

        # 4. Handle the four cases of imbalance
        
        # Left Left Case
        if balance < -1 and value < root.left.value:
            return self.right_rotate(root)

        # Right Right Case
        if balance > 1 and value > root.right.value:
            return self.left_rotate(root)

        # Left Right Case
        if balance < -1 and value > root.left.value:
            root.left = self.left_rotate(root.left)
            return self.right_rotate(root)

        # Right Left Case
        if balance > 1 and value < root.right.value:
            root.right = self.right_rotate(root.right)
            return self.left_rotate(root)

        return root

def demonstrate_balancing():
    """
    Demonstrates how AVL tree maintains balance during insertions.
    """
    avl = AVLTree()
    root = None
    
    print("Inserting values in order: 1, 2, 3, 4, 5")
    print("Notice how the tree rebalances automatically")
    
    values = [1, 2, 3, 4, 5]
    for value in values:
        print(f"\\nInserting {value}:")
        root = avl.insert(root, value)
        print(f"Root value: {root.value}")
        print(f"Root balance factor: {avl.get_balance(root)}")

    print("\\nFinal tree maintains balance, unlike an unbalanced BST")
    print("Maximum height difference between subtrees: 1")

def explain_rotation_cases():
    """
    Explains the four cases that require rotations in AVL trees.
    """
    print("Four Cases of Imbalance in AVL Trees:")
    print("\\n1. Left Left Case (Right Rotation)")
    print("   When a node becomes left-heavy and the new value")
    print("   was inserted into the left subtree of the left child")
    
    print("\\n2. Right Right Case (Left Rotation)")
    print("   When a node becomes right-heavy and the new value")
    print("   was inserted into the right subtree of the right child")
    
    print("\\n3. Left Right Case (Left-Right Rotation)")
    print("   When a node becomes left-heavy and the new value")
    print("   was inserted into the right subtree of the left child")
    
    print("\\n4. Right Left Case (Right-Left Rotation)")
    print("   When a node becomes right-heavy and the new value")
    print("   was inserted into the left subtree of the right child")

# Run demonstrations
demonstrate_balancing()
explain_rotation_cases()`,
  exercises: [
    {
      prompt: 'Implement a function that determines if an AVL tree is properly balanced. The function should verify that the balance factor at each node is within the valid range (-1 to 1) and that heights are correctly maintained.',
      initialCode: `def is_valid_avl(root):
    # Add your solution here
    pass`,
      solution: `def is_valid_avl(root):
    def get_height(node):
        if not node:
            return 0
        return node.height
    
    def validate(node):
        if not node:
            return True, 0  # (is_valid, height)
        
        # Check left subtree
        left_valid, left_height = validate(node.left)
        if not left_valid:
            return False, 0
        
        # Check right subtree
        right_valid, right_height = validate(node.right)
        if not right_valid:
            return False, 0
        
        # Verify balance factor
        balance = right_height - left_height
        if abs(balance) > 1:
            return False, 0
        
        # Verify stored height is correct
        actual_height = 1 + max(left_height, right_height)
        if node.height != actual_height:
            return False, 0
        
        return True, actual_height
    
    is_valid, _ = validate(root)
    return is_valid`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Write a function that takes an unbalanced BST and converts it into a balanced AVL tree. This involves rebalancing the entire tree rather than maintaining balance during insertions.',
      initialCode: `def balance_bst(root):
    # Add your solution here
    pass`,
      solution: `def balance_bst(root):
    def get_inorder(node):
        if not node:
            return []
        return get_inorder(node.left) + [node.value] + get_inorder(node.right)
    
    def build_balanced_tree(values, start, end):
        if start > end:
            return None
            
        mid = (start + end) // 2
        node = AVLNode(values[mid])
        
        node.left = build_balanced_tree(values, start, mid - 1)
        node.right = build_balanced_tree(values, mid + 1, end)
        
        # Update height
        left_height = node.left.height if node.left else 0
        right_height = node.right.height if node.right else 0
        node.height = 1 + max(left_height, right_height)
        
        return node
    
    # Get sorted values from BST
    values = get_inorder(root)
    # Rebuild as balanced tree
    return build_balanced_tree(values, 0, len(values) - 1)`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'What is the maximum allowed difference in heights between the left and right subtrees in an AVL tree?',
      options: [
        '0',
        '1',
        '2',
        'No limit',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. This would be too restrictive and require perfect balance.',
        'Correct! AVL trees maintain a balance factor between -1 and 1 at every node.',
        'Incorrect. This would allow too much imbalance for AVL properties.',
        'Incorrect. AVL trees have strict balance requirements.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'When is a Left-Right rotation needed in an AVL tree?',
      options: [
        'When the tree is left-heavy and the new value is in the right subtree of the left child',
        'When the tree is right-heavy and needs rebalancing',
        'When the tree has more than two levels',
        'When performing an insertion',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct! This specific imbalance pattern requires a left rotation followed by a right rotation.',
        'Incorrect. Right-heavy trees need different rotation patterns.',
        'Incorrect. Tree depth alone doesn\'t determine rotation type.',
        'Incorrect. Not all insertions require rotations.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the time complexity of rebalancing an AVL tree after an insertion?',
      options: [
        'O(1)',
        'O(log n)',
        'O(n)',
        'O(n log n)',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Rebalancing requires traversing back up the tree.',
        'Correct! We only need to check and potentially rotate nodes along the path from the insertion point to the root.',
        'Incorrect. AVL balancing is more efficient than this.',
        'Incorrect. This would be too slow for practical use.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
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
  title: 'Morris Traversal: Understanding Tree Traversal Without Extra Space',
  content: `<p>
Imagine you're exploring a vast cave system with countless branching paths. Traditional traversal methods are like leaving markers or ropes to find your way back - they work well but require extra resources. Morris Traversal is like finding your way by temporarily creating small connecting passages between locations, using them to navigate, and then restoring the original layout. This ingenious technique lets us traverse a binary tree using no extra space, making it particularly valuable for memory-constrained environments.
</p>

<h3><u>The Core Insight: Temporary Threading</u></h3>

<p>
The key insight behind Morris Traversal is that in any binary tree, some nodes have null right pointers that we can temporarily repurpose. Think of these null pointers as unused space that we can briefly "borrow" to create temporary pathways back to parent nodes. We create these temporary connections (called "threads") carefully, use them for navigation, and then restore them to their original state.
</p>

<h4><b>The Building Blocks</b></h4>
<p>
To understand Morris Traversal, let's break down its fundamental components:
</p>

<li>Predecessor: The rightmost node in a left subtree (the last node we visit before returning to the parent in inorder traversal)</li>
<li>Threading: Temporarily connecting a predecessor node's right pointer back to its inorder successor</li>
<li>Restoration: Detecting and removing these temporary connections as we use them</li>

<h3><u>How Morris Traversal Works</u></h3>

<h4><b>The Process</b></h4>
<p>
For each node in our traversal:
1. If there's no left child, process the current node and move right
2. If there is a left child:
   - Find the inorder predecessor (rightmost node in left subtree)
   - If its right pointer is null, create a thread to current node
   - If it already has a thread, we've returned via that thread, so remove it
</p>

<h4><b>The Magic of O(1) Space</b></h4>
<p>
What makes Morris Traversal special is that it achieves O(1) space complexity by:
- Using existing null pointers instead of extra storage
- Creating and removing threads as we go
- Never needing to store more than one temporary connection at a time
</p>

<h3><u>Advantages and Trade-offs</u></h3>
<table>
<tr><th>Aspect</th><th>Morris Traversal</th><th>Traditional Methods</th></tr>
<tr><td>Space Complexity</td><td>O(1)</td><td>O(h) or O(n)</td></tr>
<tr><td>Time Complexity</td><td>O(n) amortized</td><td>O(n)</td></tr>
<tr><td>Tree Modification</td><td>Temporary</td><td>None</td></tr>
<tr><td>Implementation</td><td>More complex</td><td>Simpler</td></tr>
</table>

<p>
While Morris Traversal is more complex to implement, its space efficiency makes it invaluable in memory-constrained environments or when traversing extremely large trees.
</p>`,
  codeExample: `class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class MorrisTraversal:
    def inorder_morris(self, root):
        """
        Performs inorder traversal using Morris Traversal technique.
        Uses O(1) extra space by temporarily modifying the tree structure.
        
        Time Complexity: O(n) amortized
        Space Complexity: O(1)
        """
        result = []
        current = root
        
        while current:
            # Case 1: No left child
            if not current.left:
                # Process current node and move right
                result.append(current.value)
                current = current.right
            else:
                # Case 2: Has left child
                # Find the inorder predecessor (rightmost node in left subtree)
                predecessor = current.left
                while (predecessor.right and predecessor.right != current):
                    predecessor = predecessor.right
                
                # Case 2a: Predecessor's right is null
                if not predecessor.right:
                    # Create thread to current node
                    predecessor.right = current
                    current = current.left
                # Case 2b: Predecessor's right points to current
                else:
                    # We've returned via the thread - remove it
                    predecessor.right = None
                    result.append(current.value)
                    current = current.right
        
        return result

    def preorder_morris(self, root):
        """
        Performs preorder traversal using Morris Traversal.
        Similar to inorder but processes nodes when creating threads.
        
        Time Complexity: O(n) amortized
        Space Complexity: O(1)
        """
        result = []
        current = root
        
        while current:
            if not current.left:
                result.append(current.value)
                current = current.right
            else:
                predecessor = current.left
                while (predecessor.right and predecessor.right != current):
                    predecessor = predecessor.right
                
                if not predecessor.right:
                    # Process node when creating thread (preorder)
                    result.append(current.value)
                    predecessor.right = current
                    current = current.left
                else:
                    predecessor.right = None
                    current = current.right
        
        return result

    def demonstrate_threading(self, root):
        """
        Demonstrates how threading works by showing the tree state
        at each step of Morris Traversal.
        """
        current = root
        step = 1
        
        while current:
            print(f"\\nStep {step}:")
            print(f"Current node: {current.value}")
            
            if not current.left:
                print("No left child, moving right")
                current = current.right
            else:
                predecessor = current.left
                while (predecessor.right and predecessor.right != current):
                    predecessor = predecessor.right
                
                if not predecessor.right:
                    print(f"Creating thread from {predecessor.value} to {current.value}")
                    predecessor.right = current
                    current = current.left
                else:
                    print(f"Removing thread from {predecessor.value} to {current.value}")
                    predecessor.right = None
                    current = current.right
            
            step += 1

def create_sample_tree():
    """
    Creates a sample tree for demonstration:
           1
          / \\
         2   3
        / \\
       4   5
    """
    root = TreeNode(1)
    root.left = TreeNode(2)
    root.right = TreeNode(3)
    root.left.left = TreeNode(4)
    root.left.right = TreeNode(5)
    return root

def demonstrate_morris_traversal():
    """
    Demonstrates both inorder and preorder Morris Traversal
    and shows how threading works.
    """
    morris = MorrisTraversal()
    root = create_sample_tree()
    
    print("Tree Structure:")
    print("    1")
    print("   / \\")
    print("  2   3")
    print(" / \\")
    print("4   5")
    
    print("\\nMorris Inorder Traversal:", morris.inorder_morris(root))
    print("Morris Preorder Traversal:", morris.preorder_morris(root))
    
    print("\\nDemonstrating Threading Process:")
    morris.demonstrate_threading(create_sample_tree())

# Run demonstration
demonstrate_morris_traversal()`,
  exercises: [
    {
      prompt: `Implement a function that uses Morris Traversal to find the kth smallest element in a BST. This combines the space efficiency of Morris Traversal with order statistics.`,
      initialCode: `def morris_kth_smallest(root, k):
    # Add your solution here
    pass`,
      solution: `def morris_kth_smallest(root, k):
    current = root
    count = 0
    result = None
    
    while current and count < k:
        if not current.left:
            count += 1
            if count == k:
                result = current.value
            current = current.right
        else:
            predecessor = current.left
            while (predecessor.right and predecessor.right != current):
                predecessor = predecessor.right
            
            if not predecessor.right:
                predecessor.right = current
                current = current.left
            else:
                predecessor.right = None
                count += 1
                if count == k:
                    result = current.value
                current = current.right
    
    return result`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Write a function that uses Morris Traversal to check if a binary tree is a valid BST. This shows how Morris Traversal can be used for tree validation without extra space.',
      initialCode: `def morris_is_bst(root):
    # Add your solution here
    pass`,
      solution: `def morris_is_bst(root):
    current = root
    prev_value = float('-inf')
    is_valid = True
    
    while current:
        if not current.left:
            # Process current node
            if current.value <= prev_value:
                is_valid = False
            prev_value = current.value
            current = current.right
        else:
            predecessor = current.left
            while (predecessor.right and predecessor.right != current):
                predecessor = predecessor.right
            
            if not predecessor.right:
                predecessor.right = current
                current = current.left
            else:
                predecessor.right = None
                # Process current node
                if current.value <= prev_value:
                    is_valid = False
                prev_value = current.value
                current = current.right
    
    return is_valid`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'What is the key feature that enables Morris Traversal to achieve O(1) space complexity?',
      options: [
        'Using a stack efficiently',
        'Temporarily reusing null right pointers as threads',
        'Skipping certain nodes during traversal',
        'Using recursion carefully',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Morris Traversal doesn\'t use a stack at all.',
        'Correct! By temporarily repurposing null right pointers as threads, Morris Traversal avoids needing extra space.',
        'Incorrect. Morris Traversal visits all nodes.',
        'Incorrect. Morris Traversal is an iterative algorithm.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'When implementing Morris Traversal, what indicates that we\'ve returned to a node via a thread?',
      options: [
        'The current node is null',
        'We\'ve reached a leaf node',
        'The predecessor\'s right pointer points to the current node',
        'The left subtree is empty',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. A null node isn\'t related to thread detection.',
        'Incorrect. Leaf nodes don\'t indicate thread returns.',
        'Correct! Finding that the predecessor\'s right pointer already points to current means we\'ve returned via that thread.',
        'Incorrect. Empty left subtrees don\'t involve threading.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is a potential disadvantage of Morris Traversal compared to traditional methods?',
      options: [
        'Higher space complexity',
        'Lower time efficiency',
        'Temporary modification of tree structure',
        'Cannot handle unbalanced trees',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Morris Traversal has optimal space complexity.',
        'Incorrect. Time complexity remains O(n).',
        'Correct! Morris Traversal temporarily modifies the tree structure, which might not be acceptable in all situations.',
        'Incorrect. Morris Traversal works with any binary tree.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const specialTraversalsData: LessonContent = {
  title: 'Special Tree Traversals: Understanding Advanced Patterns',
  content: `<p>
Traditional tree traversals like inorder and preorder follow fixed patterns, but sometimes we need to view our tree from different perspectives. Think of a tree as a building - while we usually explore it floor by floor or room by room, we might sometimes want to trace its outer walls or look at it from different angles. Special traversals give us these unique perspectives on our tree's structure.
</p>

<h3><u>Boundary Traversal: Tracing the Outline</u></h3>

<p>
Imagine drawing the silhouette of a tree on paper. The boundary traversal is like tracing that silhouette - it visits nodes that form the "outline" of the tree when viewed from the left side, around the leaves, and back up the right side. This traversal helps us understand the tree's external structure and is particularly useful in visual representations.
</p>

<p>
A boundary traversal consists of three parts:
</p>
<li>Left boundary: Nodes along the leftmost path (excluding leaves)</li>
<li>Leaves: All leaf nodes from left to right</li>
<li>Right boundary: Nodes along the rightmost path (excluding leaves) in bottom-up order</li>

<h3><u>Vertical Order Traversal: A Side View</u></h3>

<p>
If you were to shine a light directly onto the side of a tree, nodes at the same horizontal distance from the root would cast shadows at the same point. Vertical order traversal organizes nodes based on this horizontal distance, giving us a different perspective on the tree's structure. This traversal is particularly useful when we need to understand vertical relationships between nodes.
</p>

<h4><b>Key Concepts in Vertical Order</b></h4>
<p>
To understand vertical order traversal, we need to grasp several important concepts:
</p>
<li>Horizontal Distance (HD): Distance from the root, negative for left path, positive for right</li>
<li>Level: Depth of the node from root (used for ordering nodes at same HD)</li>
<li>Column groups: Nodes sharing the same horizontal distance</li>

<h3><u>Diagonal Traversal: Following Slopes</u></h3>

<p>
Diagonal traversal follows paths that move at a 45-degree angle through the tree. Think of it as tracing lines that run parallel to the diagonal from upper-left to lower-right. Nodes on the same diagonal share a common property: they can be reached by following the same number of left edges from the root.
</p>

<h3><u>Characteristics and Applications</u></h3>
<table>
<tr><th>Traversal Type</th><th>Key Feature</th><th>Common Applications</th><th>Space Complexity</th></tr>
<tr><td>Boundary</td><td>Captures outline</td><td>Visual representations, tree perimeter</td><td>O(h)</td></tr>
<tr><td>Vertical Order</td><td>Groups by horizontal distance</td><td>Vertical relationships, mapping</td><td>O(n)</td></tr>
<tr><td>Diagonal</td><td>Follows diagonal paths</td><td>Pattern analysis, diagonal relationships</td><td>O(n)</td></tr>
</table>`,
  codeExample: `class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class SpecialTraversals:
    def boundary_traversal(self, root):
        """
        Performs a boundary traversal of the tree.
        Returns nodes forming the tree's outline: left boundary,
        leaves from left to right, right boundary (bottom up).
        
        Time: O(n), Space: O(h) where h is height
        """
        def is_leaf(node):
            return not node.left and not node.right
            
        def add_left_boundary(node, result):
            if not node or is_leaf(node):
                return
                
            result.append(node.value)
            # Follow left path if exists, otherwise right
            if node.left:
                add_left_boundary(node.left, result)
            else:
                add_left_boundary(node.right, result)
                
        def add_leaves(node, result):
            if not node:
                return
                
            if is_leaf(node):
                result.append(node.value)
                return
                
            add_leaves(node.left, result)
            add_leaves(node.right, result)
            
        def add_right_boundary(node, result):
            if not node or is_leaf(node):
                return
                
            # Process right boundary bottom-up
            if node.right:
                add_right_boundary(node.right, result)
            else:
                add_right_boundary(node.left, result)
            result.append(node.value)
        
        if not root:
            return []
            
        result = [root.value]
        
        # Add three parts of boundary
        if not is_leaf(root):
            add_left_boundary(root.left, result)  # Left boundary
            add_leaves(root, result)              # Leaves
            add_right_boundary(root.right, result)# Right boundary
            
        return result

    def vertical_order_traversal(self, root):
        """
        Performs a vertical order traversal.
        Groups nodes by their horizontal distance from root.
        Within each group, orders by level and then value.
        
        Time: O(n log n), Space: O(n)
        """
        if not root:
            return []
            
        # Map horizontal distance to list of (level, value) pairs
        columns = {}
        queue = [(root, 0, 0)]  # (node, hd, level)
        min_hd = max_hd = 0
        
        while queue:
            node, hd, level = queue.pop(0)
            
            # Add to appropriate column
            if hd not in columns:
                columns[hd] = []
            columns[hd].append((level, node.value))
            
            min_hd = min(min_hd, hd)
            max_hd = max(max_hd, hd)
            
            # Add children with updated horizontal distance
            if node.left:
                queue.append((node.left, hd - 1, level + 1))
            if node.right:
                queue.append((node.right, hd + 1, level + 1))
        
        # Build result by processing columns left to right
        result = []
        for hd in range(min_hd, max_hd + 1):
            if hd in columns:
                # Sort by level, then by value
                column = sorted(columns[hd])
                result.append([val for level, val in column])
        
        return result

    def diagonal_traversal(self, root):
        """
        Performs a diagonal traversal of the tree.
        Groups nodes that can be reached by following the same
        number of left edges from root.
        
        Time: O(n), Space: O(n)
        """
        if not root:
            return []
            
        # Map diagonal level to list of values
        diagonals = {}
        queue = [(root, 0)]  # (node, diagonal_level)
        max_diagonal = 0
        
        while queue:
            node, d = queue.pop(0)
            
            # Process nodes at current diagonal level
            if d not in diagonals:
                diagonals[d] = []
            diagonals[d].append(node.value)
            
            # Left child increases diagonal level
            if node.left:
                queue.append((node.left, d + 1))
            # Right child stays at same diagonal level
            if node.right:
                queue.append((node.right, d))
                
            max_diagonal = max(max_diagonal, d)
        
        # Collect results by diagonal level
        return [diagonals[d] for d in range(max_diagonal + 1)]

def demonstrate_special_traversals():
    """
    Creates a sample tree and demonstrates all special traversals.
    """
    #       1
    #      / \\
    #     2   3
    #    / \\ / \\
    #   4   5 6  7
    
    root = TreeNode(1)
    root.left = TreeNode(2)
    root.right = TreeNode(3)
    root.left.left = TreeNode(4)
    root.left.right = TreeNode(5)
    root.right.left = TreeNode(6)
    root.right.right = TreeNode(7)
    
    traversals = SpecialTraversals()
    
    print("Tree Structure:")
    print("      1")
    print("     / \\")
    print("    2   3")
    print("   / \\ / \\")
    print("  4  5 6  7")
    
    print("\\nBoundary Traversal:", traversals.boundary_traversal(root))
    print("Vertical Order Traversal:", traversals.vertical_order_traversal(root))
    print("Diagonal Traversal:", traversals.diagonal_traversal(root))

# Run demonstration
demonstrate_special_traversals()`,
  exercises: [
    {
      prompt: 'Implement a function that performs a vertical sum traversal, where for each vertical line (same horizontal distance from root), we calculate the sum of all node values. This combines vertical order traversal with aggregate calculations.',
      initialCode: `def vertical_sum(root):
    # Return list of sums for each vertical line from leftmost to rightmost
    pass`,
      solution: `def vertical_sum(root):
    if not root:
        return []
        
    # Map horizontal distance to sum
    sums = {}
    queue = [(root, 0)]  # (node, hd)
    min_hd = max_hd = 0
    
    while queue:
        node, hd = queue.pop(0)
        
        # Add to sum for this horizontal distance
        sums[hd] = sums.get(hd, 0) + node.value
        
        min_hd = min(min_hd, hd)
        max_hd = max(max_hd, hd)
        
        if node.left:
            queue.append((node.left, hd - 1))
        if node.right:
            queue.append((node.right, hd + 1))
    
    # Return sums from leftmost to rightmost vertical line
    return [sums[hd] for hd in range(min_hd, max_hd + 1)]`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Write a function that performs a custom diagonal traversal where we also track the level of each node within its diagonal. This helps understand both diagonal relationships and depth information.',
      initialCode: `def diagonal_with_levels(root):
    # Return list of lists, where each inner list contains
    # tuples of (value, level) for nodes in the same diagonal
    pass`,
      solution: `def diagonal_with_levels(root):
    if not root:
        return []
        
    # Map diagonal to list of (value, level) pairs
    diagonals = {}
    queue = [(root, 0, 0)]  # (node, diagonal, level)
    max_diagonal = 0
    
    while queue:
        node, d, level = queue.pop(0)
        
        if d not in diagonals:
            diagonals[d] = []
        diagonals[d].append((node.value, level))
        
        # Left child creates new diagonal
        if node.left:
            queue.append((node.left, d + 1, level + 1))
        # Right child continues same diagonal
        if node.right:
            queue.append((node.right, d, level + 1))
            
        max_diagonal = max(max_diagonal, d)
    
    return [diagonals[d] for d in range(max_diagonal + 1)]`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'What defines the boundary of a binary tree in boundary traversal?',
      options: [
        'All leaf nodes',
        'The leftmost and rightmost nodes only',
        'Left boundary nodes, leaf nodes, and right boundary nodes in that order',
        'Any nodes visible from outside the tree',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Leaf nodes are only one part of the boundary.',
        'Incorrect. This misses the leaf nodes in between.',
        'Correct! The boundary consists of left boundary (top-down), leaves (left-right), and right boundary (bottom-up).',
        'Incorrect. "Visible from outside" is too vague and imprecise.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'How is horizontal distance calculated in vertical order traversal?',
      options: [
        'By counting total nodes from root to target',
        'By counting edges from root, decreasing for left, increasing for right',
        'By measuring physical distance in the tree',
        'By counting all left edges minus right edges',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Total nodes don\'t determine horizontal distance.',
        'Correct! We decrease HD for left moves and increase for right moves from root.',
        'Incorrect. Physical distance isn\'t relevant in tree structure.',
        'Incorrect. This would give incorrect results for many paths.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What characterizes nodes in the same diagonal during diagonal traversal?',
      options: [
        'They have the same value',
        'They have the same depth from root',
        'They can be reached using the same number of left edges from root',
        'They are all leaf nodes',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Node values don\'t determine diagonal placement.',
        'Incorrect. Nodes in same diagonal can be at different depths.',
        'Correct! The number of left edges taken from root determines the diagonal.',
        'Incorrect. Diagonal can include both internal and leaf nodes.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const treeTransformationsData: LessonContent = {
  title: 'Tree Transformations: Reshaping Trees While Preserving Information',
  content: `<p>
Just as a skilled origami artist can transform a flat sheet of paper into various shapes while preserving the paper's essence, we can transform binary trees into different structures while maintaining their core information. These transformations allow us to adapt our trees for different uses or view their data in new ways.
</p>

<h3><u>Flattening: From Tree to Linear Structure</u></h3>

<p>
Imagine taking a complex organizational chart and converting it into a single line of succession. Tree flattening is similar - we transform our multi-level tree into a linear structure that preserves some meaningful order of the nodes. This transformation is particularly useful when we need to serialize our tree or convert it to a format that's easier to store or transmit.
</p>

<p>
There are several ways to flatten a tree, each preserving different properties:
</p>
<li>Preorder flattening: Maintains the hierarchical relationship between nodes</li>
<li>Inorder flattening: For BSTs, maintains the sorted order of elements</li>
<li>Linked-list style: Creates a linear structure with only right pointers</li>

<h3><u>Inverting: Creating Mirror Images</u></h3>

<p>
Think about looking at a tree's reflection in a mirror - what was on the left is now on the right, and vice versa. Inverting a binary tree creates this mirror image by swapping every node's left and right children. This transformation helps us understand symmetry in tree structures and is often used in graphics and user interface layouts where we need to flip hierarchical structures.
</p>

<h4><b>Properties of Inverted Trees</b></h4>
<p>
When we invert a tree:
</p>
<li>The root remains the same</li>
<li>Every left child becomes a right child and vice versa</li>
<li>The tree's shape is preserved, just mirrored</li>
<li>Paths from root to any leaf are reversed left-right</li>

<h3><u>Pruning: Strategic Removal of Subtrees</u></h3>

<p>
Just as a gardener prunes a tree to promote healthy growth or achieve a desired shape, we can prune binary trees by removing subtrees that don't meet certain criteria. This transformation is valuable when we need to eliminate parts of the tree that aren't relevant to our current needs or don't satisfy specific conditions.
</p>

<h4><b>Common Pruning Criteria</b></h4>
<p>
Trees can be pruned based on various conditions:
</p>
<li>Path sum requirements (e.g., remove paths that don't sum to a target value)</li>
<li>Depth limitations (e.g., limit tree to certain height)</li>
<li>Value-based conditions (e.g., remove subtrees with all values less than a threshold)</li>

<h3><u>Understanding the Impact</u></h3>
<table>
<tr><th>Transformation</th><th>Preserves Structure</th><th>Preserves Values</th><th>Common Applications</th></tr>
<tr><td>Flattening</td><td>No</td><td>Yes</td><td>Serialization, linked list conversion</td></tr>
<tr><td>Inverting</td><td>Yes (mirrored)</td><td>Yes</td><td>UI layouts, symmetry operations</td></tr>
<tr><td>Pruning</td><td>Partially</td><td>Partially</td><td>Optimization, filtering</td></tr>
</table>`,
  codeExample: `class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class TreeTransformations:
    def flatten_to_linked_list(self, root):
        """
        Flattens the binary tree into a right-skewed linked list in preorder.
        Modifies the tree in-place.
        
        Time Complexity: O(n)
        Space Complexity: O(1) if using Morris Traversal approach
        """
        # Return if tree is empty
        if not root:
            return None
            
        current = root
        while current:
            # If left child exists, make it the right child
            if current.left:
                # Find the rightmost node in left subtree
                predecessor = current.left
                while predecessor.right:
                    predecessor = predecessor.right
                
                # Connect rightmost node to current's right subtree
                predecessor.right = current.right
                # Move left subtree to right
                current.right = current.left
                current.left = None
            
            # Move to next node
            current = current.right
            
        return root

    def invert_binary_tree(self, root):
        """
        Inverts the binary tree by swapping left and right children
        of every node. Creates a mirror image of the original tree.
        
        Time Complexity: O(n)
        Space Complexity: O(h) for recursion stack
        """
        # Base case: empty tree or leaf node
        if not root:
            return None
            
        # Swap left and right children
        root.left, root.right = root.right, root.left
        
        # Recursively invert left and right subtrees
        self.invert_binary_tree(root.left)
        self.invert_binary_tree(root.right)
        
        return root

    def prune_tree(self, root, target_sum):
        """
        Prunes the tree by removing paths that don't sum to target_sum.
        A path is valid if sum from root to leaf equals target_sum.
        
        Time Complexity: O(n)
        Space Complexity: O(h) for recursion stack
        """
        def prune_recursive(node, current_sum):
            if not node:
                return None
                
            # Add current node's value to path sum
            current_sum += node.value
            
            # If it's a leaf, keep it only if sum matches target
            if not node.left and not node.right:
                return node if current_sum == target_sum else None
                
            # Recursively prune left and right subtrees
            node.left = prune_recursive(node.left, current_sum)
            node.right = prune_recursive(node.right, current_sum)
            
            # If both children were pruned and this isn't root level path,
            # this node should be pruned too
            return node if (node.left or node.right) else None
            
        return prune_recursive(root, 0)

    def print_tree_structure(self, root, level=0, prefix="Root: "):
        """
        Helper function to visualize tree structure.
        """
        if not root:
            return
            
        print("  " * level + prefix + str(root.value))
        if root.left:
            self.print_tree_structure(root.left, level + 1, "L--- ")
        if root.right:
            self.print_tree_structure(root.right, level + 1, "R--- ")

def demonstrate_transformations():
    """
    Creates sample trees and demonstrates various transformations.
    """
    transformations = TreeTransformations()
    
    # Create a sample tree:
    #       1
    #      / \\
    #     2   3
    #    / \\
    #   4   5
    
    root = TreeNode(1)
    root.left = TreeNode(2)
    root.right = TreeNode(3)
    root.left.left = TreeNode(4)
    root.left.right = TreeNode(5)
    
    print("Original Tree:")
    transformations.print_tree_structure(root)
    
    # Demonstrate flattening
    print("\\nAfter Flattening:")
    flattened = transformations.flatten_to_linked_list(root.left)  # Use subtree for example
    current = flattened
    flat_values = []
    while current:
        flat_values.append(current.value)
        current = current.right
    print("Flattened values:", flat_values)
    
    # Demonstrate inverting
    print("\\nAfter Inverting:")
    inverted = transformations.invert_binary_tree(root)
    transformations.print_tree_structure(inverted)
    
    # Demonstrate pruning
    prune_tree = TreeNode(5)
    prune_tree.left = TreeNode(4)
    prune_tree.right = TreeNode(8)
    prune_tree.left.left = TreeNode(11)
    prune_tree.left.left.left = TreeNode(7)
    prune_tree.left.left.right = TreeNode(2)
    
    print("\\nBefore Pruning (target sum = 22):")
    transformations.print_tree_structure(prune_tree)
    
    pruned = transformations.prune_tree(prune_tree, 22)
    print("\\nAfter Pruning:")
    transformations.print_tree_structure(pruned)

# Run demonstration
demonstrate_transformations()`,
  exercises: [
    {
      prompt: 'Implement a function that converts a binary tree into a zigzag linked list, where each level alternates between going left-to-right and right-to-left. This combines flattening with level-aware processing.',
      initialCode: `def flatten_zigzag(root):
    # Add your solution here
    pass`,
      solution: `def flatten_zigzag(root):
    if not root:
        return None
    
    # Collect nodes level by level
    levels = []
    queue = [(root, 0)]
    
    while queue:
        level_nodes = []
        level_size = len(queue)
        
        for _ in range(level_size):
            node, level = queue.pop(0)
            level_nodes.append(node)
            
            if node.left:
                queue.append((node.left, level + 1))
            if node.right:
                queue.append((node.right, level + 1))
        
        # Reverse alternate levels
        if level % 2:
            level_nodes.reverse()
        levels.extend(level_nodes)
    
    # Connect nodes in zigzag order
    for i in range(len(levels) - 1):
        levels[i].left = None
        levels[i].right = levels[i + 1]
    
    # Clean up last node
    if levels:
        levels[-1].left = None
        levels[-1].right = None
    
    return levels[0] if levels else None`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Write a function that prunes a binary tree based on a predicate function that evaluates each subtree. The predicate should be able to make decisions based on the entire subtree, not just individual nodes.',
      initialCode: `def prune_by_predicate(root, predicate):
    # predicate is a function that takes a node and returns bool
    # Add your solution here
    pass`,
      solution: `def prune_by_predicate(root, predicate):
    def evaluate_subtree(node):
        if not node:
            return None
        
        # First, recursively evaluate and prune children
        node.left = evaluate_subtree(node.left)
        node.right = evaluate_subtree(node.right)
        
        # Then evaluate current subtree with pruned children
        return node if predicate(node) else None
    
    return evaluate_subtree(root)

# Example usage:
# def example_predicate(node):
#     # Keep subtree if it contains any even values
#     def has_even_value(n):
#         if not n: return False
#         return (n.value % 2 == 0 or 
#                has_even_value(n.left) or 
#                has_even_value(n.right))
#     return has_even_value(node)`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'What must be preserved when flattening a BST to maintain its search property?',
      options: [
        'The depth of nodes',
        'The inorder traversal sequence',
        'The preorder traversal sequence',
        'The parent-child relationships',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Depth isn\'t relevant to BST property.',
        'Correct! The inorder sequence maintains the BST\'s ordering property.',
        'Incorrect. Preorder sequence doesn\'t maintain BST ordering.',
        'Incorrect. Parent-child relationships change during flattening.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What happens to the paths from root to leaves when a binary tree is inverted?',
      options: [
        'They maintain the same length',
        'They become sorted',
        'Their left-right directions are reversed',
        'They become shorter',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Length is preserved but this isn\'t the key change.',
        'Incorrect. Inversion doesn\'t sort paths.',
        'Correct! Each left move becomes right and vice versa in the inverted tree.',
        'Incorrect. Path lengths remain the same.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'When pruning a binary tree, what happens to a node whose children are all pruned?',
      options: [
        'It becomes a leaf node',
        'It must be pruned too if it doesn\'t satisfy the condition',
        'It\'s always kept',
        'It\'s always removed',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. The node might need to be pruned itself.',
        'Correct! If a node\'s children are pruned, it must be evaluated against the pruning condition.',
        'Incorrect. The node might need to be pruned.',
        'Incorrect. The node might satisfy the condition on its own.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const treeComparisonsData: LessonContent = {
  title: 'Tree Comparison Problems: Understanding Structural and Value-Based Relationships',
  content: `<p>
Imagine you're an art curator comparing intricate family crests. Just as you might need to determine if two crests are identical, if one is contained within another, or if one is a mirror image of itself, we often need to compare trees in similar ways. Tree comparison problems help us understand relationships between tree structures, which is crucial for many practical applications.
</p>

<h3><u>Same Tree: Perfect Matching</u></h3>

<p>
Determining if two trees are the same is like comparing two elaborate origami creations. They must be identical not just in their overall shape, but in every single fold and crease. In tree terms, this means that both trees must have identical structure and matching values at every corresponding position.
</p>

<p>
When comparing trees for equality, we need to verify that:
</p>
<li>Both trees have nodes in the same positions</li>
<li>Corresponding nodes have the same values</li>
<li>The relationship between nodes (parent-child connections) is identical</li>

<h3><u>Subtree: Finding Trees Within Trees</u></h3>

<p>
Checking if one tree is a subtree of another is like looking for a smaller pattern within a larger tapestry. This problem appears in many practical scenarios, such as checking if one organization's structure is contained within a larger organization, or if one XML document is embedded within another.
</p>

<h4><b>Key Considerations in Subtree Verification</b></h4>
<p>
To verify a subtree relationship, we must:
</p>
<li>Find potential root matches in the larger tree</li>
<li>For each potential match, verify entire subtree structure</li>
<li>Handle edge cases like empty trees and single nodes</li>

<h3><u>Symmetric Tree: Self-Reflection</u></h3>

<p>
A symmetric tree is like a reflection in a still pond - if you draw a line down the middle, each side perfectly mirrors the other. This property is particularly interesting because it reveals structural patterns and can be crucial in applications involving balanced designs or pattern matching.
</p>

<h4><b>Properties of Symmetric Trees</b></h4>
<p>
A tree is symmetric if:
</p>
<li>The root's left and right subtrees mirror each other in structure</li>
<li>Each node's value matches its corresponding node in the mirror position</li>
<li>This pattern continues recursively through all levels</li>

<h3><u>Common Pitfalls and Edge Cases</u></h3>
<table>
<tr><th>Comparison Type</th><th>Key Challenges</th><th>Edge Cases</th><th>Common Mistakes</th></tr>
<tr><td>Same Tree</td><td>Matching structure and values</td><td>Empty trees, single nodes</td><td>Only checking values</td></tr>
<tr><td>Subtree</td><td>Finding starting points</td><td>Duplicate values</td><td>Partial matching</td></tr>
<tr><td>Symmetric</td><td>Recursive mirroring</td><td>Single-child nodes</td><td>Only checking one level</td></tr>
</table>`,
  codeExample: `class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class TreeComparisons:
    def is_same_tree(self, p, q):
        """
        Determines if two binary trees are exactly the same in
        structure and values.
        
        Time Complexity: O(min(n1, n2)) - we can stop early on mismatch
        Space Complexity: O(min(h1, h2)) for recursion stack
        """
        # Base cases: both empty or one empty
        if not p and not q:
            return True
        if not p or not q:
            return False
            
        # Check current nodes and recursively check subtrees
        return (p.value == q.value and
                self.is_same_tree(p.left, q.left) and
                self.is_same_tree(p.right, q.right))

    def is_subtree(self, root, subRoot):
        """
        Checks if subRoot is a subtree of root, meaning there exists
        a node in root such that the subtree rooted at it is identical
        to subRoot.
        
        Time Complexity: O(m * n) where m, n are tree sizes
        Space Complexity: O(h) for recursion stack
        """
        # Base cases
        if not subRoot:
            return True  # Empty tree is subtree of any tree
        if not root:
            return False  # Non-empty tree can't be subtree of empty tree
            
        # If trees match from this point, return true
        if self.is_same_tree(root, subRoot):
            return True
            
        # If not, check left and right subtrees
        return (self.is_subtree(root.left, subRoot) or
                self.is_subtree(root.right, subRoot))

    def is_symmetric(self, root):
        """
        Determines if a binary tree is symmetric around its center
        (mirror image of itself).
        
        Time Complexity: O(n)
        Space Complexity: O(h) for recursion stack
        """
        def are_mirrors(left, right):
            # Base cases
            if not left and not right:
                return True
            if not left or not right:
                return False
                
            # Check if these nodes form a mirror:
            # 1. Values match
            # 2. Left's left matches Right's right
            # 3. Left's right matches Right's left
            return (left.value == right.value and
                    are_mirrors(left.left, right.right) and
                    are_mirrors(left.right, right.left))
        
        # Empty tree is symmetric
        if not root:
            return True
            
        # Check if left and right subtrees are mirrors
        return are_mirrors(root.left, root.right)

def demonstrate_comparisons():
    """
    Creates sample trees to demonstrate each type of comparison.
    """
    comparisons = TreeComparisons()
    
    # Create trees for "same tree" comparison
    tree1 = TreeNode(1)
    tree1.left = TreeNode(2)
    tree1.right = TreeNode(3)
    
    tree2 = TreeNode(1)
    tree2.left = TreeNode(2)
    tree2.right = TreeNode(3)
    
    print("Same Tree Test:")
    print("Trees are same:", comparisons.is_same_tree(tree1, tree2))
    
    # Create trees for subtree test
    main_tree = TreeNode(3)
    main_tree.left = TreeNode(4)
    main_tree.right = TreeNode(5)
    main_tree.left.left = TreeNode(1)
    main_tree.left.right = TreeNode(2)
    
    sub_tree = TreeNode(4)
    sub_tree.left = TreeNode(1)
    sub_tree.right = TreeNode(2)
    
    print("\\nSubtree Test:")
    print("Is subtree:", comparisons.is_subtree(main_tree, sub_tree))
    
    # Create symmetric tree
    sym_tree = TreeNode(1)
    sym_tree.left = TreeNode(2)
    sym_tree.right = TreeNode(2)
    sym_tree.left.left = TreeNode(3)
    sym_tree.left.right = TreeNode(4)
    sym_tree.right.left = TreeNode(4)
    sym_tree.right.right = TreeNode(3)
    
    print("\\nSymmetric Tree Test:")
    print("Is symmetric:", comparisons.is_symmetric(sym_tree))

def explain_comparison_edge_cases():
    """
    Demonstrates important edge cases in tree comparisons.
    """
    print("Edge Cases in Tree Comparisons:")
    print("\\n1. Same Tree Edge Cases:")
    print("- Both trees empty")
    print("- One tree empty, one non-empty")
    print("- Same values but different structure")
    
    print("\\n2. Subtree Edge Cases:")
    print("- Empty subtree (always true)")
    print("- Larger 'subtree' than main tree")
    print("- Matching values but different structure")
    
    print("\\n3. Symmetric Tree Edge Cases:")
    print("- Empty tree (symmetric by definition)")
    print("- Single node (symmetric)")
    print("- Same values but asymmetric structure")

# Run demonstrations
demonstrate_comparisons()
explain_comparison_edge_cases()`,
  exercises: [
    {
      prompt: 'Implement a function that determines if two trees are almost identical, meaning they are identical in structure and their corresponding node values differ by at most a given threshold. This combines structural comparison with value tolerance.',
      initialCode: `def are_almost_identical(root1, root2, threshold):
    # Return True if trees are identical in structure and
    # corresponding values differ by at most threshold
    pass`,
      solution: `def are_almost_identical(root1, root2, threshold):
    def compare_with_threshold(node1, node2):
        # Base cases
        if not node1 and not node2:
            return True
        if not node1 or not node2:
            return False
            
        # Check if values are within threshold
        if abs(node1.value - node2.value) > threshold:
            return False
            
        # Recursively check both subtrees
        return (compare_with_threshold(node1.left, node2.left) and
                compare_with_threshold(node1.right, node2.right))
    
    return compare_with_threshold(root1, root2)`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Write a function that determines if one tree is a mirror subtree of another. A mirror subtree is like a regular subtree, but it matches when reflected. This combines subtree checking with symmetry concepts.',
      initialCode: `def has_mirror_subtree(root, sub_root):
    # Return True if sub_root appears anywhere in root
    # either normally or as a mirror image
    pass`,
      solution: `def has_mirror_subtree(root, sub_root):
    def are_mirror_trees(t1, t2):
        if not t1 and not t2:
            return True
        if not t1 or not t2:
            return False
            
        return (t1.value == t2.value and
                are_mirror_trees(t1.left, t2.right) and
                are_mirror_trees(t1.right, t2.left))
    
    def is_same_or_mirror(t1, t2):
        if not t1 and not t2:
            return True
        if not t1 or not t2:
            return False
            
        # Check both regular and mirror match
        return ((t1.value == t2.value and
                 is_same_or_mirror(t1.left, t2.left) and
                 is_same_or_mirror(t1.right, t2.right)) or
                are_mirror_trees(t1, t2))
    
    # Base cases
    if not sub_root:
        return True
    if not root:
        return False
        
    # Check if current trees match or are mirrors
    if is_same_or_mirror(root, sub_root):
        return True
        
    # Recursively check subtrees
    return (has_mirror_subtree(root.left, sub_root) or
            has_mirror_subtree(root.right, sub_root))`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'What is required for two trees to be considered the same?',
      options: [
        'They must have the same values in any order',
        'They must have the same structure but values can differ',
        'They must have identical structure and matching values at corresponding positions',
        'They must have the same number of nodes',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. The order of values matters in tree equality.',
        'Incorrect. Both structure and values must match.',
        'Correct! Trees must match exactly in both structure and values at each position.',
        'Incorrect. Having the same number of nodes is necessary but not sufficient.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'When is an empty tree considered a subtree of another tree?',
      options: [
        'Never',
        'Only if the main tree is also empty',
        'Always',
        'Only if the main tree has leaf nodes',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Empty trees are valid subtrees.',
        'Incorrect. Empty tree is a subtree of any tree.',
        'Correct! An empty tree is considered a subtree of any tree by definition.',
        'Incorrect. Leaf nodes aren\'t relevant to this case.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What makes a binary tree symmetric?',
      options: [
        'All values at each level are the same',
        'Left and right subtrees have the same number of nodes',
        'Left and right subtrees are mirror images of each other',
        'All leaf nodes are at the same level',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Same values don\'t ensure symmetry.',
        'Incorrect. Equal size doesn\'t ensure mirror structure.',
        'Correct! The left and right subtrees must be perfect mirror images.',
        'Incorrect. Leaf level equality isn\'t sufficient for symmetry.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const pathOperationsData: LessonContent = {
  title: 'Tree Path Operations: Finding and Analyzing Paths in Binary Trees',
  content: `<p>
Imagine you're exploring an ancient castle with interconnected rooms and corridors. Each room might contain treasure, and you need to find paths that lead to specific amounts of treasure or particular sequences of rooms. Working with paths in binary trees is similar - we're looking for sequences of nodes that satisfy certain conditions or lead to specific goals.
</p>

<h3><u>Understanding Tree Paths</u></h3>

<p>
A path in a binary tree is like a trail through our castle - it starts at one point (often the root) and follows connections between nodes until it reaches an end point (often a leaf). Each path tells a story through the values it encounters, and different problems ask us to find paths with particular properties.
</p>

<h3><u>Path Sum Problems: Adding Up the Journey</u></h3>

<p>
Path sum problems are like treasure hunting in our castle analogy. Instead of just finding any path, we're looking for paths where the treasures in each room add up to a specific amount. These problems come in several variations:
</p>

<h4><b>Basic Path Sum</b></h4>
<p>
The simplest version asks if there exists a root-to-leaf path whose node values sum to a target. This is like checking if there's any path through the castle where the treasures sum to a specific amount. Key considerations include:
</p>
<li>Must start at root and end at leaf</li>
<li>Can only move downward (parent to child)</li>
<li>Need to track running sum along the path</li>

<h4><b>Path Sum II</b></h4>
<p>
This variation asks us to find all paths that sum to the target. Instead of just checking existence, we need to collect and return all valid paths. This requires:
</p>
<li>Tracking the current path as we traverse</li>
<li>Making copies of paths when we find valid ones</li>
<li>Backtracking to explore all possibilities</li>

<h4><b>Path Sum III</b></h4>
<p>
The most complex variation allows paths to start and end anywhere in the tree. This is like finding treasure sequences between any two rooms in our castle. This introduces new challenges:
</p>
<li>Paths can start at any node</li>
<li>Don't need to end at leaves</li>
<li>Need to handle both positive and negative values</li>

<h3><u>Finding Special Paths</u></h3>

<p>
Beyond sum-based problems, we often need to find paths with special properties:
</p>

<h4><b>Maximum Path Sum</b></h4>
<p>
Finding the path with the largest sum is like finding the most valuable route through our castle. This introduces interesting challenges:
</p>
<li>Handling negative values</li>
<li>Deciding when to start new paths vs extending existing ones</li>
<li>Tracking both local and global maximums</li>

<h4><b>Longest/Shortest Paths</b></h4>
<p>
Sometimes we need to find paths based on length rather than sum. This might involve:
</p>
<li>Finding the deepest leaves</li>
<li>Finding the shortest path between two nodes</li>
<li>Finding paths with specific length properties</li>

<h3><u>Common Techniques and Trade-offs</u></h3>
<table>
<tr><th>Technique</th><th>Advantages</th><th>Disadvantages</th><th>Best For</th></tr>
<tr><td>DFS with Stack</td><td>Memory efficient</td><td>Must backtrack</td><td>Root-to-leaf paths</td></tr>
<tr><td>BFS with Queue</td><td>Shortest paths</td><td>More memory</td><td>Level-based paths</td></tr>
<tr><td>Recursive</td><td>Clean code</td><td>Stack space</td><td>Top-down paths</td></tr>
</table>`,
  codeExample: `class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class PathOperations:
    def has_path_sum(self, root, target_sum):
        """
        Determines if there exists a root-to-leaf path that sums to target_sum.
        Uses recursive DFS approach.
        
        Time Complexity: O(n)
        Space Complexity: O(h) for recursion stack
        """
        def dfs(node, remaining):
            if not node:
                return False
            
            # Update remaining sum
            remaining -= node.value
            
            # If leaf node, check if we've hit our target
            if not node.left and not node.right:
                return remaining == 0
            
            # Otherwise, check either subtree
            return (dfs(node.left, remaining) or 
                   dfs(node.right, remaining))
        
        return dfs(root, target_sum)

    def find_all_paths(self, root, target_sum):
        """
        Finds all root-to-leaf paths that sum to target_sum.
        Returns list of all valid paths.
        
        Time Complexity: O(n^2) worst case for skewed tree
        Space Complexity: O(h) for recursion, O(n) for storing paths
        """
        def dfs(node, remaining, path, paths):
            if not node:
                return
            
            # Add current node to path
            path.append(node.value)
            
            # Check if we've found a valid path at a leaf
            if not node.left and not node.right and remaining == node.value:
                paths.append(path[:])
            
            # Recurse on children with updated remaining sum
            dfs(node.left, remaining - node.value, path, paths)
            dfs(node.right, remaining - node.value, path, paths)
            
            # Backtrack by removing current node
            path.pop()
        
        all_paths = []
        dfs(root, target_sum, [], all_paths)
        return all_paths

    def path_sum_iii(self, root, target_sum):
        """
        Counts all paths that sum to target_sum.
        Paths can start and end anywhere.
        Uses prefix sum technique for efficiency.
        
        Time Complexity: O(n)
        Space Complexity: O(h)
        """
        def dfs(node, curr_sum, prefix_sums):
            if not node:
                return 0
            
            # Update current sum and count paths ending here
            curr_sum += node.value
            path_count = prefix_sums.get(curr_sum - target_sum, 0)
            
            # Update prefix sums map
            prefix_sums[curr_sum] = prefix_sums.get(curr_sum, 0) + 1
            
            # Recurse on children
            count = (path_count +
                    dfs(node.left, curr_sum, prefix_sums) +
                    dfs(node.right, curr_sum, prefix_sums))
            
            # Backtrack by removing current sum
            prefix_sums[curr_sum] -= 1
            
            return count
        
        return dfs(root, 0, {0: 1})

    def max_path_sum(self, root):
        """
        Finds the maximum path sum between any two nodes.
        Path must follow tree edges without revisiting nodes.
        
        Time Complexity: O(n)
        Space Complexity: O(h)
        """
        def max_gain(node):
            nonlocal max_sum
            
            if not node:
                return 0
            
            # Compute max gain from left and right subtrees
            left_gain = max(max_gain(node.left), 0)
            right_gain = max(max_gain(node.right), 0)
            
            # Check if new path through this node is best so far
            current_path_sum = node.value + left_gain + right_gain
            max_sum = max(max_sum, current_path_sum)
            
            # Return max path sum that can be used by parent
            return node.value + max(left_gain, right_gain)
        
        max_sum = float('-inf')
        max_gain(root)
        return max_sum

def demonstrate_path_operations():
    """
    Creates sample trees and demonstrates various path operations.
    """
    ops = PathOperations()
    
    # Create a sample tree:
    #       10
    #      /  \\
    #     5    15
    #    / \\     \\
    #   3   7     18
    
    root = TreeNode(10)
    root.left = TreeNode(5)
    root.right = TreeNode(15)
    root.left.left = TreeNode(3)
    root.left.right = TreeNode(7)
    root.right.right = TreeNode(18)
    
    print("Sample Tree Path Operations:")
    
    # Test path sum existence
    target = 18  # Path: 10 -> 5 -> 3
    print(f"\\nHas path sum {target}?", ops.has_path_sum(root, target))
    
    # Find all paths with sum
    target = 25  # Paths: 10 -> 15, 10 -> 5 -> 7
    print(f"\\nAll paths with sum {target}:", ops.find_all_paths(root, target))
    
    # Count all paths with sum
    target = 15
    print(f"\\nNumber of paths with sum {target}:", ops.path_sum_iii(root, target))
    
    # Find maximum path sum
    print("\\nMaximum path sum:", ops.max_path_sum(root))

# Run demonstration
demonstrate_path_operations()`,
  exercises: [
    {
      prompt: 'Implement a function that finds the path between two given nodes in a binary tree. The path should be represented as a list of values traversed. Consider that the path might go up before going down.',
      initialCode: `def find_path_between_nodes(root, start_val, end_val):
    # Return the path from start_val to end_val
    # Return empty list if no path exists
    pass`,
      solution: `def find_path_between_nodes(root, start_val, end_val):
    def find_path_to_node(node, target, path):
        if not node:
            return False
            
        # Add current node to path
        path.append(node.value)
        
        # Check if we found target
        if node.value == target:
            return True
            
        # Check children
        if (find_path_to_node(node.left, target, path) or
            find_path_to_node(node.right, target, path)):
            return True
            
        # Backtrack if target not found in this path
        path.pop()
        return False
    
    # First find path to start_val
    path_to_start = []
    find_path_to_node(root, start_val, path_to_start)
    
    # Then find path to end_val
    path_to_end = []
    find_path_to_node(root, end_val, path_to_end)
    
    # Find lowest common ancestor index
    lca_index = 0
    while (lca_index < len(path_to_start) and 
           lca_index < len(path_to_end) and
           path_to_start[lca_index] == path_to_end[lca_index]):
        lca_index += 1
    
    # Construct final path
    result = path_to_start[:-1]  # Exclude start node to avoid duplication
    result.extend(path_to_end[lca_index-1:])  # Include LCA
    
    return result`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Write a function that finds all paths in a binary tree where the product of node values equals a given target. This is similar to path sum but uses multiplication instead of addition.',
      initialCode: `def find_product_paths(root, target):
    # Return list of paths where node values multiply to target
    pass`,
      solution: `def find_product_paths(root, target):
    def dfs(node, current_product, path, paths):
        if not node:
            return
            
        # Update current path and product
        path.append(node.value)
        current_product *= node.value
        
        # Check if we've found a valid path at a leaf
        if not node.left and not node.right:
            if current_product == target:
                paths.append(path[:])
        
        # Recurse on children
        dfs(node.left, current_product, path, paths)
        dfs(node.right, current_product, path, paths)
        
        # Backtrack
        path.pop()
    
    all_paths = []
    dfs(root, 1, [], all_paths)
    return all_paths`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'What is the key difference between basic path sum and path sum III?',
      options: [
        'Path sum III only works with positive numbers',
        'Path sum III allows paths to start and end anywhere',
        'Path sum III only works with leaf nodes',
        'Path sum III requires more memory',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Path sum III works with both positive and negative numbers.',
        'Correct! Path sum III is more flexible, allowing paths between any nodes in the tree.',
        'Incorrect. Path sum III doesn\'t require paths to end at leaves.',
        'Incorrect. Memory complexity isn\'t the key difference.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'When finding the maximum path sum in a binary tree, why do we take max(gain, 0) for subtrees?',
      options: [
        'To handle empty subtrees',
        'To ignore negative paths that would reduce our sum',
        'To ensure the path is connected',
        'To prevent integer overflow',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Empty subtrees return 0 by default.',
        'Correct! We ignore negative paths because they would only decrease our sum.',
        'Incorrect. Path connectivity is handled by the traversal.',
        'Incorrect. This isn\'t related to overflow prevention.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the purpose of backtracking in path finding algorithms?',
      options: [
        'To save memory',
        'To improve performance',
        'To remove current node from path when exploring other branches',
        'To handle negative values',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Memory savings is a side effect, not the main purpose.',
        'Incorrect. Performance isn\'t the primary reason.',
        'Correct! Backtracking ensures we explore all possible paths by removing nodes when we\'re done with a branch.',
        'Incorrect. Handling negative values is unrelated to backtracking.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const avlTreesData: LessonContent = {
  title: 'AVL Trees: Understanding Self-Balancing Binary Search Trees',
  content: `<p>
Imagine you're building a tower of playing cards. If you stack them unevenly, the tower becomes unstable and might collapse. Similarly, when a binary search tree becomes unbalanced, its performance degrades. AVL trees solve this problem by automatically maintaining balance, much like a skilled builder who adjusts card placement to keep the tower stable.
</p>

<h3><u>What Makes AVL Trees Special</u></h3>

<p>
AVL trees, named after their inventors Adelson-Velsky and Landis, are binary search trees that maintain a special property: the heights of any node's left and right subtrees can differ by at most one. This balance property ensures that operations remain efficient even as the tree grows.
</p>

<h4><b>The Balance Factor</b></h4>
<p>
The key to understanding AVL trees is the balance factor - the difference between the heights of a node's right and left subtrees. For any node in an AVL tree:
</p>
<li>Balance Factor = Height(Right Subtree) - Height(Left Subtree)</li>
<li>Must be -1, 0, or 1 for the tree to be balanced</li>
<li>When this property is violated, we need to rebalance</li>

<h3><u>Self-Balancing Through Rotations</u></h3>

<p>
When an AVL tree becomes unbalanced after an insertion or deletion, it uses rotations to restore balance. Think of rotations like rearranging a mobile to keep it balanced - we move nodes around while maintaining the binary search tree property.
</p>

<h4><b>Four Types of Rotations</b></h4>

<p>
1. Left Rotation (LL):
   - Used when right subtree becomes too heavy
   - Pivot node becomes left child of its right child
</p>

<p>
2. Right Rotation (RR):
   - Used when left subtree becomes too heavy
   - Pivot node becomes right child of its left child
</p>

<p>
3. Left-Right Rotation (LR):
   - Left child first rotated left
   - Then node rotated right
</p>

<p>
4. Right-Left Rotation (RL):
   - Right child first rotated right
   - Then node rotated left
</p>

<h3><u>When to Use AVL Trees</u></h3>

<p>
AVL trees are particularly useful when:
</p>
<li>You need guaranteed O(log n) operations</li>
<li>The data structure will experience many lookups</li>
<li>Balance is critical for performance</li>
<li>The frequency of insertions/deletions is moderate</li>

<h3><u>Performance Characteristics</u></h3>
<table>
<tr><th>Operation</th><th>Average Case</th><th>Worst Case</th><th>Space Usage</th></tr>
<tr><td>Search</td><td>O(log n)</td><td>O(log n)</td><td>O(1)</td></tr>
<tr><td>Insert</td><td>O(log n)</td><td>O(log n)</td><td>O(1)</td></tr>
<tr><td>Delete</td><td>O(log n)</td><td>O(log n)</td><td>O(1)</td></tr>
<tr><td>Rotation</td><td>O(1)</td><td>O(1)</td><td>O(1)</td></tr>
</table>`,
  codeExample: `class AVLNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
        self.height = 1  # Height starts at 1 for new nodes

class AVLTree:
    def get_height(self, node):
        """
        Returns the height of a node.
        Empty nodes have height 0.
        """
        if not node:
            return 0
        return node.height

    def get_balance(self, node):
        """
        Calculates the balance factor of a node.
        Balance factor = height(right subtree) - height(left subtree)
        """
        if not node:
            return 0
        return self.get_height(node.right) - self.get_height(node.left)

    def update_height(self, node):
        """
        Updates the height of a node based on its children's heights.
        Height = 1 + max(height of left child, height of right child)
        """
        if node:
            node.height = 1 + max(self.get_height(node.left),
                                self.get_height(node.right))

    def left_rotate(self, y):
        """
        Performs a left rotation on node y.
        
             y                               x
            / \\     Left Rotation          /  \\
           T1  x   --------------->       y    T3
              / \\                       / \\
             T2  T3                    T1  T2
        """
        x = y.right
        T2 = x.left

        # Perform rotation
        x.left = y
        y.right = T2

        # Update heights
        self.update_height(y)
        self.update_height(x)

        return x

    def right_rotate(self, x):
        """
        Performs a right rotation on node x.
        
             x                               y
            / \\     Right Rotation        /  \\
           y   T3   --------------->     T1   x
          / \\                               / \\
         T1  T2                            T2  T3
        """
        y = x.left
        T2 = y.right

        # Perform rotation
        y.right = x
        x.left = T2

        # Update heights
        self.update_height(x)
        self.update_height(y)

        return y

    def insert(self, root, value):
        """
        Inserts a new value into the AVL tree and maintains balance.
        Returns the new root of the balanced subtree.
        
        Time Complexity: O(log n)
        Space Complexity: O(log n) for recursion stack
        """
        # 1. Perform standard BST insert
        if not root:
            return AVLNode(value)

        if value < root.value:
            root.left = self.insert(root.left, value)
        else:
            root.right = self.insert(root.right, value)

        # 2. Update height of current node
        self.update_height(root)

        # 3. Get balance factor to check if node became unbalanced
        balance = self.get_balance(root)

        # 4. Handle the four cases of imbalance

        # Left Left Case
        if balance < -1 and value < root.left.value:
            return self.right_rotate(root)

        # Right Right Case
        if balance > 1 and value > root.right.value:
            return self.left_rotate(root)

        # Left Right Case
        if balance < -1 and value > root.left.value:
            root.left = self.left_rotate(root.left)
            return self.right_rotate(root)

        # Right Left Case
        if balance > 1 and value < root.right.value:
            root.right = self.right_rotate(root.right)
            return self.left_rotate(root)

        return root

    def print_tree(self, root, level=0, prefix="Root: "):
        """
        Prints the AVL tree structure with heights and balance factors.
        """
        if not root:
            return

        print("  " * level + prefix + f"{root.value} (h={root.height}, b={self.get_balance(root)})")
        if root.left:
            self.print_tree(root.left, level + 1, "L--- ")
        if root.right:
            self.print_tree(root.right, level + 1, "R--- ")

def demonstrate_avl():
    """
    Demonstrates AVL tree operations and balancing.
    """
    avl = AVLTree()
    root = None

    # Insert values that would cause imbalance in regular BST
    values = [10, 20, 30, 40, 50]
    print("Inserting values:", values)
    
    for value in values:
        print(f"\\nInserting {value}:")
        root = avl.insert(root, value)
        print("Tree after insertion:")
        avl.print_tree(root)

    print("\\nNotice how the tree remains balanced after each insertion")
    print("Final height:", root.height)
    print("Maximum height of equivalent unbalanced BST would be", len(values))

def explain_rotations():
    """
    Explains when and why each type of rotation is needed.
    """
    print("AVL Tree Rotation Types:\\n")
    
    print("1. Left Rotation (LL):")
    print("   - Used when right subtree becomes too heavy")
    print("   - Example: Inserting increasing values (10, 20, 30)")
    
    print("\\n2. Right Rotation (RR):")
    print("   - Used when left subtree becomes too heavy")
    print("   - Example: Inserting decreasing values (30, 20, 10)")
    
    print("\\n3. Left-Right Rotation (LR):")
    print("   - Used when imbalance is in left child's right subtree")
    print("   - Example: Inserting 10, 5, 7")
    
    print("\\n4. Right-Left Rotation (RL):")
    print("   - Used when imbalance is in right child's left subtree")
    print("   - Example: Inserting 10, 20, 15")

# Run demonstrations
demonstrate_avl()
explain_rotations()`,
  exercises: [
    {
      prompt: 'Implement the delete operation for an AVL tree. Remember to maintain balance after deletion. Consider all cases where rebalancing might be needed.',
      initialCode: `def delete(self, root, value):
    # Add your solution here
    pass`,
      solution: `def delete(self, root, value):
    # 1. Perform standard BST delete
    if not root:
        return None
        
    if value < root.value:
        root.left = self.delete(root.left, value)
    elif value > root.value:
        root.right = self.delete(root.right, value)
    else:
        # Node with only one child or no child
        if not root.left:
            return root.right
        elif not root.right:
            return root.left
            
        # Node with two children
        # Get inorder successor (smallest in right subtree)
        temp = self.get_min_value_node(root.right)
        root.value = temp.value
        root.right = self.delete(root.right, temp.value)
    
    # If tree had only one node, return
    if not root:
        return None
    
    # 2. Update height
    self.update_height(root)
    
    # 3. Get balance factor
    balance = self.get_balance(root)
    
    # 4. Balance if needed
    # Left Left Case
    if balance < -1 and self.get_balance(root.left) <= 0:
        return self.right_rotate(root)
    
    # Left Right Case
    if balance < -1 and self.get_balance(root.left) > 0:
        root.left = self.left_rotate(root.left)
        return self.right_rotate(root)
    
    # Right Right Case
    if balance > 1 and self.get_balance(root.right) >= 0:
        return self.left_rotate(root)
    
    # Right Left Case
    if balance > 1 and self.get_balance(root.right) < 0:
        root.right = self.right_rotate(root.right)
        return self.left_rotate(root)
    
    return root

def get_min_value_node(self, root):
    current = root
    while current.left:
        current = current.left
    return current`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Write a function that verifies if a given binary tree is a valid AVL tree. Check both the BST property and balance factor requirements.',
      initialCode: `def is_valid_avl(root):
    # Return True if tree is valid AVL tree
    pass`,
      solution: `def is_valid_avl(root):
    def get_height(node):
        if not node:
            return 0
        return node.height
    
    def is_bst(node, min_val=float('-inf'), max_val=float('inf')):
        if not node:
            return True
            
        if node.value <= min_val or node.value >= max_val:
            return False
            
        return (is_bst(node.left, min_val, node.value) and
                is_bst(node.right, node.value, max_val))
    
    def check_balance_and_height(node):
        if not node:
            return True, 0
            
        # Check left subtree
        left_valid, left_height = check_balance_and_height(node.left)
        if not left_valid:
            return False, 0
            
        # Check right subtree
        right_valid, right_height = check_balance_and_height(node.right)
        if not right_valid:
            return False, 0
            
        # Verify balance factor
        balance = right_height - left_height
        if abs(balance) > 1:
            return False, 0
            
        # Verify stored height is correct
        actual_height = 1 + max(left_height, right_height)
        if node.height != actual_height:
            return False, 0
            
        return True, actual_height
    
    return is_bst(root) and check_balance_and_height(root)[0]`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'What is the maximum allowed difference in height between the left and right subtrees in an AVL tree?',
      options: [
        '0',
        '1',
        '2',
        'log n',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. This would be too restrictive.',
        'Correct! The balance factor must be -1, 0, or 1.',
        'Incorrect. This would allow too much imbalance.',
        'Incorrect. The height difference is constant.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'When is a Left-Right rotation needed in an AVL tree?',
      options: [
        'When the tree is left-heavy',
        'When the tree is right-heavy',
        'When an imbalance occurs in the left child\'s right subtree',
        'When inserting into an empty tree',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Left-heaviness alone doesn\'t determine the rotation type.',
        'Incorrect. Right-heavy trees need different rotations.',
        'Correct! LR rotation is needed when the imbalance involves the right subtree of a left child.',
        'Incorrect. Empty trees don\'t need rotation.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the time complexity of rebalancing after an AVL tree insertion?',
      options: [
        'O(1)',
        'O(log n)',
        'O(n)',
        'O(n log n)',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. While rotations themselves take O(1), we need to update heights along the path.',
        'Correct! We need to update heights and check balance along the path from insertion to root.',
        'Incorrect. AVL properties ensure we never need to visit all nodes.',
        'Incorrect. Rebalancing is more efficient than this.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const redBlackTreesData: LessonContent = {
  title: 'Red-Black Trees: A Different Approach to Balance',
  content: `<p>
Imagine you're painting a family tree where each generation alternates between two colors, following specific rules to ensure the tree remains balanced and organized. This is similar to how Red-Black trees work - they use node coloring rules to maintain a form of balance that's more flexible than AVL trees but still guarantees efficient operations.
</p>

<p>
Red-Black trees represent a fascinating balance between strict AVL trees and unbalanced binary search trees. They provide good enough balance for efficient operations while requiring fewer rotations than AVL trees, making them particularly useful in situations where insertions and deletions are frequent.
</p>

<h3><u>The Five Rules That Define Red-Black Trees</u></h3>

<p>
Every Red-Black tree must satisfy five fundamental properties that work together to ensure balance:
</p>

<h4><b>Property 1: Node Coloring</b></h4>
<p>
Every node must be either red or black, much like assigning one of two categories to each family member in our family tree analogy. This binary property helps us track and maintain balance through simple rules.
</p>

<h4><b>Property 2: Root Property</b></h4>
<p>
The root must be black. Think of this as establishing the foundation of our colored family tree - we always start with a black node at the top.
</p>

<h4><b>Property 3: Red Node Children</b></h4>
<p>
The children of a red node must be black. In our family tree analogy, this would mean that if a person is marked in red, their children must be marked in black. This prevents consecutive red nodes, which would indicate an imbalance.
</p>

<h4><b>Property 4: Null Leaf Property</b></h4>
<p>
All null leaves are considered black. These are the endpoints of our tree, and considering them black helps maintain our counting properties.
</p>

<h4><b>Property 5: Black Height Property</b></h4>
<p>
Every path from the root to a null leaf must contain the same number of black nodes. This is the key to the tree's balance - while red nodes can vary, the black nodes provide a consistent structure.
</p>

<h3><u>Maintaining Balance Through Color</u></h3>

<p>
Unlike AVL trees, which focus purely on height differences, Red-Black trees use a combination of node colors and rotations to maintain balance. This approach leads to some interesting properties:
</p>

<li>The longest possible path is no more than twice the length of the shortest path</li>
<li>The height of a Red-Black tree is at most 2*log(n+1)</li>
<li>Insert and delete operations typically require fewer rotations than AVL trees</li>

<h3><u>Operations and Recoloring</u></h3>
<table>
<tr><th>Operation</th><th>Primary Steps</th><th>Recoloring Cases</th><th>Rotation Cases</th></tr>
<tr><td>Insert</td><td>BST insert + Color red</td><td>Uncle is red</td><td>Uncle is black</td></tr>
<tr><td>Delete</td><td>BST delete + Fix double black</td><td>Sibling black, children black</td><td>Various sibling cases</td></tr>
<tr><td>Search</td><td>Standard BST search</td><td>None</td><td>None</td></tr>
</table>`,
  codeExample: `class RBNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
        self.parent = None
        self.color = "RED"  # New nodes are always red
        self.is_null = False

class RedBlackTree:
    def __init__(self):
        self.NIL = RBNode(None)  # Sentinel null node
        self.NIL.color = "BLACK"
        self.NIL.is_null = True
        self.root = self.NIL

    def insert(self, value):
        """
        Inserts a new value into the Red-Black tree.
        First performs a standard BST insert, then fixes Red-Black properties.
        
        Time Complexity: O(log n)
        Space Complexity: O(1)
        """
        node = RBNode(value)
        node.left = self.NIL
        node.right = self.NIL
        
        # Standard BST insert
        parent = None
        current = self.root
        
        while current != self.NIL:
            parent = current
            if node.value < current.value:
                current = current.left
            else:
                current = current.right
        
        node.parent = parent
        
        if parent is None:
            self.root = node  # Tree was empty
        elif node.value < parent.value:
            parent.left = node
        else:
            parent.right = node
        
        # Fix Red-Black tree properties
        self._fix_insert(node)

    def _fix_insert(self, node):
        """
        Fixes Red-Black tree properties after insertion.
        Handles different cases through rotations and recoloring.
        """
        while node.parent and node.parent.color == "RED":
            if node.parent == node.parent.parent.left:
                uncle = node.parent.parent.right
                
                # Case 1: Uncle is red
                if uncle.color == "RED":
                    node.parent.color = "BLACK"
                    uncle.color = "BLACK"
                    node.parent.parent.color = "RED"
                    node = node.parent.parent
                else:
                    # Case 2: Uncle is black, node is right child
                    if node == node.parent.right:
                        node = node.parent
                        self._left_rotate(node)
                    
                    # Case 3: Uncle is black, node is left child
                    node.parent.color = "BLACK"
                    node.parent.parent.color = "RED"
                    self._right_rotate(node.parent.parent)
            else:
                # Same as above with "left" and "right" exchanged
                uncle = node.parent.parent.left
                
                if uncle.color == "RED":
                    node.parent.color = "BLACK"
                    uncle.color = "BLACK"
                    node.parent.parent.color = "RED"
                    node = node.parent.parent
                else:
                    if node == node.parent.left:
                        node = node.parent
                        self._right_rotate(node)
                    
                    node.parent.color = "BLACK"
                    node.parent.parent.color = "RED"
                    self._left_rotate(node.parent.parent)
        
        self.root.color = "BLACK"  # Ensure root property

    def _left_rotate(self, x):
        """
        Performs a left rotation on node x.
        
            x                  y
           / \\                / \\
          T1  y     -->      x   T3
             / \\            / \\
            T2  T3         T1  T2
        """
        y = x.right
        x.right = y.left
        
        if y.left != self.NIL:
            y.left.parent = x
            
        y.parent = x.parent
        
        if x.parent is None:
            self.root = y
        elif x == x.parent.left:
            x.parent.left = y
        else:
            x.parent.right = y
            
        y.left = x
        x.parent = y

    def _right_rotate(self, y):
        """
        Performs a right rotation on node y.
        
            y                  x
           / \\                / \\
          x   T3     -->     T1  y
         / \\                    / \\
        T1  T2                 T2  T3
        """
        x = y.left
        y.left = x.right
        
        if x.right != self.NIL:
            x.right.parent = y
            
        x.parent = y.parent
        
        if y.parent is None:
            self.root = x
        elif y == y.parent.left:
            y.parent.left = x
        else:
            y.parent.right = x
            
        x.right = y
        y.parent = x

    def print_tree(self, node=None, level=0, prefix="Root: "):
        """
        Prints the Red-Black tree structure showing colors.
        """
        if node is None:
            node = self.root
            
        if node != self.NIL:
            print("  " * level + prefix + f"{node.value} ({node.color})")
            if node.left:
                self.print_tree(node.left, level + 1, "L--- ")
            if node.right:
                self.print_tree(node.right, level + 1, "R--- ")

def demonstrate_rb_tree():
    """
    Demonstrates Red-Black tree operations and properties.
    """
    rb_tree = RedBlackTree()
    
    # Insert values that would cause imbalance in regular BST
    values = [7, 3, 18, 10, 22, 8, 11, 26, 2, 6, 13]
    print("Inserting values:", values)
    
    for value in values:
        print(f"\\nInserting {value}:")
        rb_tree.insert(value)
        print("Tree after insertion:")
        rb_tree.print_tree()
        
    print("\\nNotice how the tree maintains its Red-Black properties:")
    print("1. Root is always black")
    print("2. No two consecutive red nodes")
    print("3. All paths have same number of black nodes")

# Run demonstration
demonstrate_rb_tree()`,
  exercises: [
    {
      prompt: 'Implement a function that verifies if a binary tree satisfies all Red-Black tree properties. Remember to check node colors, the root property, red node children, and black height consistency.',
      initialCode: `def is_valid_rb_tree(root):
    # Return True if tree satisfies all RB properties
    pass`,
      solution: `def is_valid_rb_tree(root):
    def check_black_height(node):
        if not node:
            return 0
            
        left_height = check_black_height(node.left)
        right_height = check_black_height(node.right)
        
        # Invalid black height
        if left_height == -1 or right_height == -1:
            return -1
            
        # Heights must be equal
        if left_height != right_height:
            return -1
            
        # Add 1 to height if current node is black
        return left_height + (1 if node.color == "BLACK" else 0)
    
    def is_valid_rb_node(node, min_val=float('-inf'), max_val=float('inf')):
        if not node:
            return True
            
        # Check BST property
        if node.value <= min_val or node.value >= max_val:
            return False
            
        # Check red property (red node can't have red children)
        if node.color == "RED":
            if (node.left and node.left.color == "RED") or \
               (node.right and node.right.color == "RED"):
                return False
                
        return (is_valid_rb_node(node.left, min_val, node.value) and
                is_valid_rb_node(node.right, node.value, max_val))
    
    # Empty tree is valid
    if not root:
        return True
        
    # Root must be black
    if root.color != "BLACK":
        return False
        
    # Check red property and BST property
    if not is_valid_rb_node(root):
        return False
        
    # Check black height property
    return check_black_height(root) != -1`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Write a function that counts the number of black nodes on any path from root to leaf in a Red-Black tree. All paths should return the same count if the tree is valid.',
      initialCode: `def count_black_nodes(root):
    # Return count of black nodes and whether all paths have same count
    pass`,
      solution: `def count_black_nodes(root):
    def count_black_path(node):
        # Returns (is_valid, black_count)
        if not node:
            return True, 0
            
        left_valid, left_count = count_black_path(node.left)
        right_valid, right_count = count_black_path(node.right)
        
        # If either subtree is invalid or counts don't match
        if not left_valid or not right_valid or left_count != right_count:
            return False, 0
            
        # Add current node to count if it's black
        return True, left_count + (1 if node.color == "BLACK" else 0)
    
    valid, count = count_black_path(root)
    return valid, count`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'What is a key difference between Red-Black trees and AVL trees?',
      options: [
        'Red-Black trees are always perfectly balanced',
        'Red-Black trees allow more imbalance but guarantee logarithmic height',
        'Red-Black trees cannot handle duplicate values',
        'Red-Black trees require more rotations per operation',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Red-Black trees allow some imbalance.',
        'Correct! Red-Black trees maintain looser balance but still ensure O(log n) operations.',
        'Incorrect. Both tree types can handle duplicates.',
        'Incorrect. Red-Black trees typically require fewer rotations than AVL trees.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'Why are new nodes always colored red in a Red-Black tree?',
      options: [
        'To make the tree look better',
        'To minimize the number of property violations that need fixing',
        'Because red nodes are faster to process',
        'To maintain the black height property',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Node color serves a functional purpose.',
        'Correct! Adding a red node doesn\'t violate the black height property.',
        'Incorrect. Node color doesn\'t affect processing speed.',
        'Incorrect. Adding black nodes would disrupt black height.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What guarantees Red-Black tree operations remain logarithmic?',
      options: [
        'All paths must have exactly the same length',
        'The longest path can\'t be more than twice the shortest path',
        'All nodes must alternate between red and black',
        'The tree must be perfectly balanced',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Paths can have different lengths.',
        'Correct! This property ensures O(log n) height and operation time.',
        'Incorrect. No such alternation requirement exists.',
        'Incorrect. Red-Black trees don\'t require perfect balance.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const bTreesData: LessonContent = {
  title: 'B-Trees: Bringing Balance to Large Datasets',
  content: `<p>
Imagine you're organizing a massive library with millions of books. Storing all the books in a simple binary tree would create an impractically tall structure, making it slow to find any particular book. B-trees solve this problem much like a library uses multiple shelves per row and multiple rows per section - they store multiple values in each node and allow multiple children, creating a shorter, broader structure that's perfect for managing large amounts of data.
</p>

<h3><u>Understanding B-Trees: Beyond Binary</u></h3>

<p>
B-trees are a fundamental evolution in tree data structures, designed specifically for systems that read and write large blocks of data. Just as a library organizes books to minimize the number of shelves a librarian must visit, B-trees organize data to minimize the number of disk accesses needed to find any piece of information.
</p>

<h4><b>Key Properties of B-Trees</b></h4>
<p>
A B-tree of order m has several important properties that work together to maintain efficiency:
</p>

<li>Every node can have up to m-1 keys and m children</li>
<li>All leaves appear at the same level</li>
<li>Internal nodes are at least half full</li>
<li>Keys within a node are sorted</li>
<li>Keys in a node separate the ranges of keys in its subtrees</li>

<h3><u>Node Structure and Organization</u></h3>

<p>
Each node in a B-tree serves as a container for multiple keys and pointers to children. Think of each node like a sorted array of values with spaces between them for pointers to subtrees. This structure allows each node to:
</p>

<li>Store multiple keys in sorted order</li>
<li>Maintain pointers to children between keys</li>
<li>Efficiently split when it becomes too full</li>
<li>Merge with siblings when it becomes too empty</li>

<h3><u>Operations in B-Trees</u></h3>

<h4><b>Searching</b></h4>
<p>
Searching in a B-tree is like looking for a book in a well-organized library. At each node, we:
</p>

<li>Compare our search key with the node's keys</li>
<li>Either find our value or determine which child to visit next</li>
<li>Repeat until we find the value or reach a leaf</li>

<h4><b>Insertion</b></h4>
<p>
Inserting into a B-tree requires careful management to maintain all properties:
</p>

<li>Find the appropriate leaf node for insertion</li>
<li>Insert the key in sorted order</li>
<li>Split nodes that become too full</li>
<li>Propagate splits up the tree if necessary</li>

<h4><b>Deletion</b></h4>
<p>
Deletion is the most complex operation, requiring careful rebalancing:
</p>

<li>Find and remove the key</li>
<li>If necessary, replace with predecessor or successor</li>
<li>Rebalance nodes that become too empty</li>
<li>Merge nodes when necessary</li>

<h3><u>Performance Characteristics</u></h3>
<table>
<tr><th>Operation</th><th>Average Case</th><th>Worst Case</th><th>Space Usage</th></tr>
<tr><td>Search</td><td>O(log n)</td><td>O(log n)</td><td>O(1)</td></tr>
<tr><td>Insert</td><td>O(log n)</td><td>O(log n)</td><td>O(1)</td></tr>
<tr><td>Delete</td><td>O(log n)</td><td>O(log n)</td><td>O(1)</td></tr>
<tr><td>Node Split/Merge</td><td>O(m)</td><td>O(m)</td><td>O(m)</td></tr>
</table>`,
  codeExample: `class BTreeNode:
    def __init__(self, leaf=True, order=5):
        """
        Initialize a B-tree node.
        
        Args:
            leaf: Whether this node is a leaf
            order: Maximum number of children (m in m-way B-tree)
        """
        self.leaf = leaf
        self.keys = []         # Sorted list of keys
        self.children = []     # List of children pointers
        self.order = order     # Maximum number of children
        
    def is_full(self):
        """Check if node has maximum number of keys."""
        return len(self.keys) >= self.order - 1

class BTree:
    def __init__(self, order=5):
        """
        Initialize an empty B-tree of given order.
        
        Args:
            order: Maximum number of children per node
        """
        self.root = BTreeNode(leaf=True, order=order)
        self.order = order

    def search(self, key, node=None):
        """
        Search for a key in the B-tree.
        Returns (node, index) if found, else None.
        
        Time Complexity: O(log n)
        Space Complexity: O(1)
        """
        if node is None:
            node = self.root
            
        # Find the first key greater than or equal to k
        i = 0
        while i < len(node.keys) and key > node.keys[i]:
            i += 1
            
        # If we found the key
        if i < len(node.keys) and key == node.keys[i]:
            return (node, i)
            
        # If we reached a leaf, key is not in tree
        if node.leaf:
            return None
            
        # Recurse on appropriate child
        return self.search(key, node.children[i])

    def insert(self, key):
        """
        Insert a key into the B-tree.
        Splits nodes as necessary to maintain B-tree properties.
        
        Time Complexity: O(log n)
        Space Complexity: O(1)
        """
        root = self.root
        
        # If root is full, split it
        if root.is_full():
            new_root = BTreeNode(leaf=False, order=self.order)
            new_root.children.append(self.root)
            self._split_child(new_root, 0)
            self.root = new_root
            
        self._insert_non_full(self.root, key)

    def _split_child(self, parent, index):
        """
        Split a full child node at given index of parent.
        
        Args:
            parent: Parent node
            index: Index of full child in parent's children list
        """
        order = self.order
        child = parent.children[index]
        
        # Create new node to hold right half
        new_node = BTreeNode(leaf=child.leaf, order=order)
        
        # Move right half of child's keys to new node
        mid = order // 2
        new_node.keys = child.keys[mid+1:]
        child.keys = child.keys[:mid]
        
        # Move right half of child's children if not leaf
        if not child.leaf:
            new_node.children = child.children[mid+1:]
            child.children = child.children[:mid+1]
            
        # Move middle key up to parent
        parent.keys.insert(index, child.keys[mid])
        parent.children.insert(index + 1, new_node)

    def _insert_non_full(self, node, key):
        """
        Insert key into non-full node.
        Splits child if necessary.
        """
        i = len(node.keys) - 1
        
        if node.leaf:
            # Find insertion position and insert key
            while i >= 0 and key < node.keys[i]:
                i -= 1
            node.keys.insert(i + 1, key)
            
        else:
            # Find child that should contain key
            while i >= 0 and key < node.keys[i]:
                i -= 1
            i += 1
            
            # If child is full, split it
            if node.children[i].is_full():
                self._split_child(node, i)
                if key > node.keys[i]:
                    i += 1
                    
            self._insert_non_full(node.children[i], key)

    def print_tree(self, node=None, level=0):
        """Print B-tree structure."""
        if node is None:
            node = self.root
            
        print("  " * level + str(node.keys))
        
        if not node.leaf:
            for child in node.children:
                self.print_tree(child, level + 1)

def demonstrate_btree():
    """
    Demonstrates B-tree operations with a simple example.
    """
    print("Creating a B-tree of order 3:")
    btree = BTree(order=3)
    
    values = [3, 7, 1, 5, 2, 6, 4]
    print("Inserting values:", values)
    
    for value in values:
        print(f"\\nInserting {value}:")
        btree.insert(value)
        print("Current tree structure:")
        btree.print_tree()
        
    print("\\nFinal B-tree properties:")
    print("- All nodes have at most 2 keys")
    print("- All leaves are at same level")
    print("- Keys within nodes are sorted")
    print("- Each internal node is at least half full")

# Run demonstration
demonstrate_btree()`,
  exercises: [
    {
      prompt: 'Implement a function that verifies if a given tree satisfies all B-tree properties. Consider node occupancy, key ordering, and leaf level requirements.',
      initialCode: `def is_valid_btree(root, order):
    # Return True if tree satisfies B-tree properties
    pass`,
      solution: `def is_valid_btree(root, order):
    def check_node(node, min_key=float('-inf'), max_key=float('inf')):
        # Check number of keys
        if len(node.keys) > order - 1:
            return False, None
            
        # Check key ordering
        for i in range(len(node.keys)):
            if node.keys[i] <= min_key or node.keys[i] >= max_key:
                return False, None
            if i > 0 and node.keys[i] <= node.keys[i-1]:
                return False, None
                
        # If internal node, check minimum keys (half full)
        if not node.leaf and len(node.keys) < (order - 1) // 2:
            return False, None
            
        # If leaf, return height of 0
        if node.leaf:
            return True, 0
            
        # Check children count matches keys + 1
        if len(node.children) != len(node.keys) + 1:
            return False, None
            
        # Check all children and their heights
        height = None
        for i, child in enumerate(node.children):
            # Determine key range for this child
            left = node.keys[i-1] if i > 0 else min_key
            right = node.keys[i] if i < len(node.keys) else max_key
            
            valid, child_height = check_node(child, left, right)
            if not valid:
                return False, None
                
            # All children must be at same height
            if height is None:
                height = child_height
            elif height != child_height:
                return False, None
                
        return True, height + 1
    
    valid, _ = check_node(root)
    return valid`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Write a function that finds the optimal order (m) for a B-tree given a maximum node size in bytes and the sizes of keys and child pointers.',
      initialCode: `def find_optimal_order(max_node_size, key_size, pointer_size):
    # Return optimal order m for B-tree
    pass`,
      solution: `def find_optimal_order(max_node_size, key_size, pointer_size):
    # For order m:
    # Node contains (m-1) keys and m pointers
    # Total size = (m-1)*key_size + m*pointer_size
    # Solve for largest m where total_size <= max_node_size
    
    # max_node_size >= (m-1)*key_size + m*pointer_size
    # max_node_size >= m*key_size - key_size + m*pointer_size
    # max_node_size + key_size >= m*(key_size + pointer_size)
    # m <= (max_node_size + key_size)/(key_size + pointer_size)
    
    m = (max_node_size + key_size) // (key_size + pointer_size)
    
    # Ensure m is at least 3 (minimum for B-tree)
    return max(3, m)`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'What is the main advantage of B-trees over binary search trees?',
      options: [
        'They use less memory',
        'They reduce disk I/O by storing multiple keys per node',
        'They are always perfectly balanced',
        'They support faster insertion',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. B-trees actually use more memory per node.',
        'Correct! By storing multiple keys per node, B-trees reduce the number of disk accesses needed.',
        'Incorrect. While B-trees maintain balance, this isn\'t their main advantage.',
        'Incorrect. Insertion can be more complex due to splits.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'Why must nodes in a B-tree be at least half full?',
      options: [
        'To save memory',
        'To maintain tree balance and height bounds',
        'To speed up searching',
        'To simplify insertion',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Memory efficiency isn\'t the primary reason.',
        'Correct! Minimum occupancy ensures logarithmic height and balanced structure.',
        'Incorrect. Search speed depends more on height than node fullness.',
        'Incorrect. Minimum occupancy actually makes insertion more complex.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What determines the order (m) of a B-tree in practice?',
      options: [
        'The number of records in the database',
        'The size of disk blocks and keys',
        'The depth of the tree',
        'The number of concurrent users',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Total record count doesn\'t determine order.',
        'Correct! Order is typically chosen to maximize disk block usage.',
        'Incorrect. Tree depth is a result of order, not a determining factor.',
        'Incorrect. Concurrency doesn\'t affect order choice.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const nAryTreesData: LessonContent = {
  title: 'N-ary Trees: Understanding Trees with Multiple Children',
  content: `<p>
Imagine you're creating a digital representation of your entire family tree, including all siblings at each generation. Unlike a binary tree that can only show two children per parent (like showing just the oldest and youngest), an N-ary tree lets you represent all children for each parent. This flexibility makes N-ary trees perfect for modeling hierarchical relationships where nodes can have any number of children.
</p>

<h3><u>Understanding N-ary Trees</u></h3>

<p>
N-ary trees extend the concept of binary trees by allowing each node to have any number of children. Just as an organization chart shows a CEO with multiple department heads, who each have multiple team leaders, an N-ary tree naturally represents hierarchical structures where elements can have multiple children.
</p>

<h4><b>Core Properties</b></h4>
<p>
N-ary trees maintain several important properties that distinguish them:
</p>

<li>Each node can have any number of children (from 0 to N)</li>
<li>Children are typically ordered (first child, second child, etc.)</li>
<li>All nodes share the same maximum number of children (N)</li>
<li>The actual number of children can vary from node to node</li>

<h3><u>Implementation Approaches</u></h3>

<p>
There are two main ways to implement N-ary trees, each with its own advantages:
</p>

<h4><b>1. Array of Children</b></h4>
<p>
This approach stores children in a dynamic array or list:
</p>
<li>Simple and intuitive representation</li>
<li>Easy to add and remove children</li>
<li>Efficient when number of children varies widely</li>
<li>More memory efficient for sparse trees</li>

<h4><b>2. First Child/Next Sibling</b></h4>
<p>
This approach uses two pointers per node:
</p>
<li>One pointer to the first child</li>
<li>One pointer to the next sibling</li>
<li>Converts N-ary tree to binary tree structure</li>
<li>More memory efficient for fixed-size nodes</li>

<h3><u>Common Operations and Traversals</u></h3>

<p>
Working with N-ary trees requires adapting familiar tree operations:
</p>

<h4><b>Traversal Patterns</b></h4>
<li>Depth-First: Process all descendants before siblings</li>
<li>Breadth-First: Process all siblings before descendants</li>
<li>Level Order: Process nodes level by level</li>

<h3><u>Performance Characteristics</u></h3>
<table>
<tr><th>Implementation</th><th>Child Access</th><th>Add Child</th><th>Memory Usage</th></tr>
<tr><td>Array of Children</td><td>O(1)</td><td>O(1) amortized</td><td>O(n)</td></tr>
<tr><td>First Child/Next Sibling</td><td>O(n)</td><td>O(1)</td><td>O(n)</td></tr>
<tr><td>Fixed Array</td><td>O(1)</td><td>O(1)</td><td>O(nN)</td></tr>
</table>`,
  codeExample: `class NAryNode:
    def __init__(self, value):
        """
        Initialize an N-ary tree node with a dynamic list of children.
        This approach offers flexibility in the number of children.
        """
        self.value = value
        self.children = []  # List to store references to child nodes

class NAryTree:
    def __init__(self):
        """
        Initialize an empty N-ary tree.
        """
        self.root = None

    def add_child(self, parent, value):
        """
        Adds a child with given value to the specified parent node.
        
        Time Complexity: O(1) amortized
        Space Complexity: O(1)
        """
        new_node = NAryNode(value)
        if not parent:
            if not self.root:
                self.root = new_node
            return new_node
        parent.children.append(new_node)
        return new_node

    def traverse_dfs(self, root):
        """
        Performs depth-first traversal of the tree.
        Visits all descendants before moving to siblings.
        
        Time Complexity: O(n)
        Space Complexity: O(h) where h is maximum depth
        """
        if not root:
            return []
            
        result = [root.value]  # Process current node
        
        # Recursively process all children
        for child in root.children:
            result.extend(self.traverse_dfs(child))
            
        return result

    def traverse_bfs(self, root):
        """
        Performs breadth-first traversal of the tree.
        Processes all nodes at current level before moving deeper.
        
        Time Complexity: O(n)
        Space Complexity: O(w) where w is maximum width
        """
        if not root:
            return []
            
        result = []
        queue = [root]
        
        while queue:
            node = queue.pop(0)
            result.append(node.value)
            
            # Add all children to queue
            queue.extend(node.children)
            
        return result

    def traverse_level_order(self, root):
        """
        Performs level-order traversal, returning nodes grouped by level.
        
        Time Complexity: O(n)
        Space Complexity: O(w) where w is maximum width
        """
        if not root:
            return []
            
        result = []
        level = [root]
        
        while level:
            result.append([node.value for node in level])
            next_level = []
            
            for node in level:
                next_level.extend(node.children)
                
            level = next_level
            
        return result

    def find_height(self, root):
        """
        Calculates the height of the tree (longest path from root to leaf).
        
        Time Complexity: O(n)
        Space Complexity: O(h) for recursion stack
        """
        if not root:
            return 0
            
        # If leaf node, height is 0
        if not root.children:
            return 0
            
        # Find maximum height among all children
        max_child_height = max(self.find_height(child) for child in root.children)
        
        return max_child_height + 1

def demonstrate_nary_tree():
    """
    Demonstrates N-ary tree operations with a simple example.
    """
    tree = NAryTree()
    
    # Create a sample tree:
    #       1
    #    /  |  \\
    #   2   3   4
    #  /|   |
    # 5 6   7
    
    root = tree.add_child(None, 1)
    node2 = tree.add_child(root, 2)
    node3 = tree.add_child(root, 3)
    node4 = tree.add_child(root, 4)
    tree.add_child(node2, 5)
    tree.add_child(node2, 6)
    tree.add_child(node3, 7)
    
    print("Tree Traversals:")
    print("DFS:", tree.traverse_dfs(root))
    print("BFS:", tree.traverse_bfs(root))
    print("Level Order:", tree.traverse_level_order(root))
    print("Tree Height:", tree.find_height(root))

# Run demonstration
demonstrate_nary_tree()`,
  exercises: [
    {
      prompt: 'Implement a function that finds all paths from root to leaves in an N-ary tree. Each path should be represented as a list of node values.',
      initialCode: `def find_all_paths(root):
    # Return list of all root-to-leaf paths
    pass`,
      solution: `def find_all_paths(root):
    def dfs(node, current_path, all_paths):
        if not node:
            return
            
        # Add current node to path
        current_path.append(node.value)
        
        # If leaf node, save the path
        if not node.children:
            all_paths.append(current_path[:])
        
        # Recursively process all children
        for child in node.children:
            dfs(child, current_path, all_paths)
            
        # Backtrack
        current_path.pop()
    
    all_paths = []
    dfs(root, [], all_paths)
    return all_paths`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Write a function that converts an N-ary tree to its binary tree representation using the first-child/next-sibling approach. Each node in the binary tree should have a "left" pointer to its first child and a "right" pointer to its next sibling.',
      initialCode: `def convert_to_binary_tree(root):
    # Convert N-ary tree to binary tree using first-child/next-sibling
    pass`,
      solution: `class BinaryNode:
    def __init__(self, value):
        self.value = value
        self.left = None   # First child
        self.right = None  # Next sibling

def convert_to_binary_tree(root):
    if not root:
        return None
        
    # Create binary node for current N-ary node
    binary_root = BinaryNode(root.value)
    
    # Convert children to binary tree format
    if root.children:
        # First child becomes left child
        binary_root.left = convert_to_binary_tree(root.children[0])
        
        # Convert remaining children to siblings
        current = binary_root.left
        for child in root.children[1:]:
            current.right = convert_to_binary_tree(child)
            current = current.right
    
    return binary_root`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'What is the main advantage of using an array of children versus first-child/next-sibling representation?',
      options: [
        'It uses less memory',
        'It provides faster access to any child',
        'It makes deletion easier',
        'It requires fewer pointers',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Array representation typically uses more memory.',
        'Correct! Array provides O(1) access to any child versus O(n) for sibling links.',
        'Incorrect. Deletion complexity is similar for both approaches.',
        'Incorrect. Array approach may use more pointers total.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'How does level-order traversal differ in N-ary trees compared to binary trees?',
      options: [
        'It visits more nodes at each level',
        'It requires a different algorithm',
        'It uses more memory',
        'The basic approach remains the same',
      ],
      correctAnswer: 3,
      explanations: [
        'Incorrect. This is a consequence, not a difference in approach.',
        'Incorrect. The algorithm concept is the same.',
        'Incorrect. Memory usage scales with width in both cases.',
        'Correct! The level-by-level processing approach remains unchanged.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What determines the height of an N-ary tree?',
      options: [
        'The total number of nodes',
        'The maximum number of children per node',
        'The longest path from root to any leaf',
        'The average number of children per node',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Total nodes don\'t directly determine height.',
        'Incorrect. Maximum children affects width more than height.',
        'Correct! Height is determined by the longest root-to-leaf path.',
        'Incorrect. Average children doesn\'t determine height.',
      ],
      difficulty: Difficulty.Beginner,
    }
  ]
};

const segmentTreesData: LessonContent = {
  title: 'Segment Trees: Efficient Range Query Operations',
  content: `<p>
Imagine you're managing a weather station that needs to quickly answer questions about temperature ranges: "What was the highest temperature between days 10 and 20?" or "What was the average temperature last week?" While you could scan through all the readings each time, that would be inefficient. Segment trees solve this problem by organizing data in a way that makes range queries remarkably efficient, just like having pre-calculated summaries for different time periods.
</p>

<p>
Think of a segment tree as a hierarchical summary of your data. At the top level, it maintains information about the entire range. As you move down the tree, each level breaks the range into smaller segments, maintaining summaries for those sub-ranges. This structure allows us to answer range queries by combining just a few pre-computed summaries instead of processing every individual element.
</p>

<h3><u>Understanding Segment Trees</u></h3>

<p>
A segment tree is a binary tree where each node represents a range of the input array:
</p>

<li>The root represents the entire array range [0, n-1]</li>
<li>Each internal node divides its range into two equal or almost equal parts</li>
<li>Leaf nodes represent individual array elements</li>
<li>Each node stores some useful information about its range (sum, minimum, maximum, etc.)</li>

<h3><u>Key Operations and Their Intuition</u></h3>

<h4><b>Building the Tree</b></h4>
<p>
Building a segment tree is like creating a summary report with increasingly fine-grained detail levels. We:
</p>
<li>Start with the full range at the root</li>
<li>Recursively divide ranges into halves</li>
<li>Compute and store summary information for each range</li>
<li>Continue until we reach individual elements</li>

<h4><b>Range Queries</b></h4>
<p>
Querying a range is like gathering information from pre-computed summaries. We:
</p>
<li>Start at the root and examine its range</li>
<li>If a node's range is fully within our query range, use its pre-computed value</li>
<li>If a node's range partially overlaps, explore its children</li>
<li>Combine results from different nodes to get the final answer</li>

<h4><b>Point Updates</b></h4>
<p>
Updating a value is like revising a report, where we need to:
</p>
<li>Locate the leaf node for the updated position</li>
<li>Change its value</li>
<li>Recalculate summaries for all ancestor nodes</li>

<h3><u>Performance Characteristics</u></h3>
<table>
<tr><th>Operation</th><th>Time Complexity</th><th>Space Complexity</th><th>Key Advantage</th></tr>
<tr><td>Build</td><td>O(n)</td><td>O(n)</td><td>One-time cost</td></tr>
<tr><td>Query</td><td>O(log n)</td><td>O(1)</td><td>Faster than linear scan</td></tr>
<tr><td>Update</td><td>O(log n)</td><td>O(1)</td><td>Maintains tree property</td></tr>
<tr><td>Space</td><td>-</td><td>O(n)</td><td>Linear in input size</td></tr>
</table>`,
  codeExample: `class SegmentTree:
    def __init__(self, arr):
        """
        Initialize a segment tree from an array.
        Supports range sum queries and point updates.
        
        Time Complexity: O(n) for construction
        Space Complexity: O(n) for tree storage
        """
        self.n = len(arr)
        # Tree array size is about 2*n to accommodate all nodes
        self.tree = [0] * (4 * self.n)  # Use 4*n for safe size
        if self.n > 0:
            self._build(arr, 0, 0, self.n - 1)

    def _build(self, arr, node, start, end):
        """
        Recursively build the segment tree.
        Each node stores sum of elements in its range.
        
        Args:
            arr: Input array
            node: Current node index in segment tree
            start: Start of current range
            end: End of current range
        """
        # Base case: leaf node
        if start == end:
            self.tree[node] = arr[start]
            return
            
        # Recursively build left and right subtrees
        mid = (start + end) // 2
        left_child = 2 * node + 1
        right_child = 2 * node + 2
        
        self._build(arr, left_child, start, mid)
        self._build(arr, right_child, mid + 1, end)
        
        # Internal node's value is sum of children
        self.tree[node] = self.tree[left_child] + self.tree[right_child]

    def range_sum(self, left, right):
        """
        Query the sum of elements in range [left, right].
        
        Time Complexity: O(log n)
        Space Complexity: O(1)
        """
        def query(node, start, end, left, right):
            # If range is completely outside, return 0
            if start > right or end < left:
                return 0
                
            # If range is completely inside query range, return node's value
            if left <= start and end <= right:
                return self.tree[node]
                
            # Partial overlap: query both children
            mid = (start + end) // 2
            left_sum = query(2 * node + 1, start, mid, left, right)
            right_sum = query(2 * node + 2, mid + 1, end, left, right)
            return left_sum + right_sum
            
        return query(0, 0, self.n - 1, left, right)

    def update(self, index, value):
        """
        Update value at given index.
        
        Time Complexity: O(log n)
        Space Complexity: O(1)
        """
        def update_tree(node, start, end, index, value):
            # Base case: leaf node
            if start == end:
                self.tree[node] = value
                return
                
            # Update appropriate child
            mid = (start + end) // 2
            left_child = 2 * node + 1
            right_child = 2 * node + 2
            
            if index <= mid:
                update_tree(left_child, start, mid, index, value)
            else:
                update_tree(right_child, mid + 1, end, index, value)
                
            # Recalculate current node's value
            self.tree[node] = self.tree[left_child] + self.tree[right_child]
            
        update_tree(0, 0, self.n - 1, index, value)

def demonstrate_segment_tree():
    """
    Demonstrates segment tree operations with examples.
    """
    # Create array and build segment tree
    arr = [1, 3, 5, 7, 9, 11]
    print("Original array:", arr)
    
    st = SegmentTree(arr)
    
    # Demonstrate range queries
    print("\\nRange Queries:")
    print("Sum of range [1,3]:", st.range_sum(1, 3))  # Should be 15 (3+5+7)
    print("Sum of range [0,5]:", st.range_sum(0, 5))  # Should be 36 (entire array)
    
    # Demonstrate updates
    print("\\nUpdating index 2 from 5 to 10:")
    st.update(2, 10)
    print("New sum of range [1,3]:", st.range_sum(1, 3))  # Should be 20 (3+10+7)
    
    print("\\nObserve how the tree maintains range sums efficiently")
    print("Each query takes O(log n) time instead of O(n)")

def demonstrate_advanced_usage():
    """
    Shows more complex use cases of segment trees.
    """
    # Create temperature data
    temperatures = [22, 24, 21, 25, 23, 22, 26, 28]
    print("Temperature readings:", temperatures)
    
    st = SegmentTree(temperatures)
    
    print("\\nAnalyzing temperature ranges:")
    print("Average temp days 2-5:", 
          st.range_sum(2, 5) / (5-2+1))  # Calculate average
    
    print("\\nUpdating day 3 temperature to 27:")
    st.update(3, 27)
    print("New average for days 2-5:", 
          st.range_sum(2, 5) / (5-2+1))

# Run demonstrations
demonstrate_segment_tree()
demonstrate_advanced_usage()`,
  exercises: [
    {
      prompt: 'Implement a segment tree for finding the minimum value in ranges. Instead of maintaining sum, each node should store the minimum value in its range.',
      initialCode: `class MinSegmentTree:
    def __init__(self, arr):
        # Implement minimum segment tree
        pass`,
      solution: `class MinSegmentTree:
    def __init__(self, arr):
        self.n = len(arr)
        self.tree = [float('inf')] * (4 * self.n)
        if self.n > 0:
            self._build(arr, 0, 0, self.n - 1)
    
    def _build(self, arr, node, start, end):
        if start == end:
            self.tree[node] = arr[start]
            return
            
        mid = (start + end) // 2
        left_child = 2 * node + 1
        right_child = 2 * node + 2
        
        self._build(arr, left_child, start, mid)
        self._build(arr, right_child, mid + 1, end)
        
        self.tree[node] = min(self.tree[left_child], 
                             self.tree[right_child])
    
    def range_min(self, left, right):
        def query(node, start, end, left, right):
            if start > right or end < left:
                return float('inf')
                
            if left <= start and end <= right:
                return self.tree[node]
                
            mid = (start + end) // 2
            left_min = query(2 * node + 1, start, mid, left, right)
            right_min = query(2 * node + 2, mid + 1, end, left, right)
            return min(left_min, right_min)
            
        return query(0, 0, self.n - 1, left, right)
    
    def update(self, index, value):
        def update_tree(node, start, end, index, value):
            if start == end:
                self.tree[node] = value
                return
                
            mid = (start + end) // 2
            if index <= mid:
                update_tree(2 * node + 1, start, mid, index, value)
            else:
                update_tree(2 * node + 2, mid + 1, end, index, value)
                
            self.tree[node] = min(self.tree[2 * node + 1],
                                self.tree[2 * node + 2])
            
        update_tree(0, 0, self.n - 1, index, value)`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Write a function that uses a segment tree to find the number of elements in a range that are greater than a given value. This combines range queries with a custom condition.',
      initialCode: `def count_greater_in_range(segment_tree, left, right, value):
    # Return count of elements > value in range [left, right]
    pass`,
      solution: `class CountSegmentTree:
    def __init__(self, arr):
        self.n = len(arr)
        # Each node stores array of values in its range
        self.tree = [[] for _ in range(4 * self.n)]
        if self.n > 0:
            self._build(arr, 0, 0, self.n - 1)
    
    def _build(self, arr, node, start, end):
        if start == end:
            self.tree[node] = [arr[start]]
            return
            
        mid = (start + end) // 2
        self._build(arr, 2 * node + 1, start, mid)
        self._build(arr, 2 * node + 2, mid + 1, end)
        
        # Merge sorted arrays
        left = self.tree[2 * node + 1]
        right = self.tree[2 * node + 2]
        merged = []
        i, j = 0, 0
        while i < len(left) and j < len(right):
            if left[i] <= right[j]:
                merged.append(left[i])
                i += 1
            else:
                merged.append(right[j])
                j += 1
        merged.extend(left[i:])
        merged.extend(right[j:])
        self.tree[node] = merged
    
    def count_greater(self, left, right, value):
        def query(node, start, end, left, right, value):
            if start > right or end < left:
                return 0
                
            if left <= start and end <= right:
                # Binary search to count values greater than target
                arr = self.tree[node]
                pos = len(arr) - 1
                while pos >= 0 and arr[pos] > value:
                    pos -= 1
                return len(arr) - (pos + 1)
                
            mid = (start + end) // 2
            left_count = query(2 * node + 1, start, mid, 
                             left, right, value)
            right_count = query(2 * node + 2, mid + 1, end, 
                              left, right, value)
            return left_count + right_count
            
        return query(0, 0, self.n - 1, left, right, value)`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why are segment trees more efficient than array scanning for range queries?',
      options: [
        'They store all possible range combinations',
        'They organize data hierarchically to avoid scanning entire ranges',
        'They compress the data to save space',
        'They sort the data for faster access',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Storing all combinations would require O(n²) space.',
        'Correct! The hierarchical structure allows us to use pre-computed results for large ranges.',
        'Incorrect. Segment trees actually use more space than the original array.',
        'Incorrect. Sorting wouldn\'t help with range queries.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What determines the height of a segment tree?',
      options: [
        'The maximum value in the array',
        'The type of query being performed',
        'The logarithm of the array size',
        'The number of updates performed',
      ],
correctAnswer: 2,
      explanations: [
        'Incorrect. Values don\'t affect tree structure.',
        'Incorrect. Query type doesn\'t affect tree height.',
        'Correct! The height is O(log n) because each level splits ranges in half.',
        'Incorrect. Updates don\'t change tree height.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What happens to parent nodes when we update a leaf node in a segment tree?',
      options: [
        'Nothing, only the leaf changes',
        'All parent nodes up to the root must be recalculated',
        'Only immediate parent needs updating',
        'The entire tree must be rebuilt',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Parent summaries would become invalid.',
        'Correct! We must update all ancestors to maintain correct range summaries.',
        'Incorrect. Changes affect all ancestors, not just the parent.',
        'Incorrect. Only the path to root needs updating, not the whole tree.',
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};

const treeDPData: LessonContent = {
  title: 'Dynamic Programming on Trees: Solving Complex Tree Problems Efficiently',
  content: `<p>
Imagine you're planning a company party and need to decide which employees to invite. The company hierarchy forms a tree, and due to office dynamics, if you invite a manager, you can't invite their direct reports. You want to maximize the "fun factor" while respecting these constraints. This is a classic example of dynamic programming on trees, where we need to make optimal decisions while considering the tree's structure.
</p>

<p>
Dynamic programming on trees combines the power of dynamic programming's optimal substructure with tree traversal's hierarchical nature. Just as traditional dynamic programming breaks problems into overlapping subproblems, tree DP breaks problems into subtrees, solving them recursively and combining their results intelligently.
</p>

<h3><u>Understanding Tree DP Fundamentals</u></h3>

<p>
Tree dynamic programming follows several key principles that help us solve complex problems efficiently:
</p>

<h4><b>1. State Definition</b></h4>
<p>
The first crucial step is defining what information we need at each node. This typically includes:
</p>
<li>The current node's value or properties</li>
<li>Results from children nodes</li>
<li>Additional parameters that affect decisions</li>
<li>Any constraints we need to track</li>

<h4><b>2. State Transitions</b></h4>
<p>
We need to define how states at a node relate to its children's states. Common patterns include:
</p>
<li>Taking maximum/minimum values from children</li>
<li>Combining results with different decisions at current node</li>
<li>Aggregating values while respecting constraints</li>

<h3><u>Common Tree DP Patterns</u></h3>

<h4><b>1. Include/Exclude Pattern</b></h4>
<p>
This pattern appears in problems where we make binary decisions at each node:
</p>
<li>Whether to include a node in our solution</li>
<li>How the decision affects children's possibilities</li>
<li>Maintaining optimal results for both choices</li>

<h4><b>2. Path-based Pattern</b></h4>
<p>
Used when we need to find optimal paths in the tree:
</p>
<li>Tracking path properties (length, sum, etc.)</li>
<li>Handling path constraints</li>
<li>Combining paths from different children</li>

<h3><u>Performance and Trade-offs</u></h3>
<table>
<tr><th>Aspect</th><th>Typical Complexity</th><th>Memory Usage</th><th>Key Consideration</th></tr>
<tr><td>State Size</td><td>O(n * states)</td><td>O(n * states)</td><td>Number of states per node</td></tr>
<tr><td>Recursion</td><td>O(n)</td><td>O(h)</td><td>Stack depth</td></tr>
<tr><td>Memoization</td><td>-</td><td>O(n * states)</td><td>Cache size vs speed</td></tr>
</table>`,
  codeExample: `class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class TreeDP:
    def max_independent_set(self, root):
        """
        Solves the maximum independent set problem on a binary tree.
        This is similar to the company party problem - we want to select
        nodes such that no two adjacent nodes are selected, while
        maximizing the sum of selected values.
        
        Returns tuple of (include_max, exclude_max) for each subtree.
        
        Time Complexity: O(n)
        Space Complexity: O(h) for recursion stack
        """
        def solve(node):
            if not node:
                return 0, 0
            
            # Get results from left and right subtrees
            left_inc, left_exc = solve(node.left)
            right_inc, right_exc = solve(node.right)
            
            # If we include current node:
            # - We must exclude its children
            # - Add current node's value
            include = node.value + left_exc + right_exc
            
            # If we exclude current node:
            # - We can take maximum of include/exclude for each child
            exclude = max(left_inc, left_exc) + max(right_inc, right_exc)
            
            return include, exclude
        
        if not root:
            return 0
        
        include, exclude = solve(root)
        return max(include, exclude)

    def max_path_sum(self, root):
        """
        Finds the maximum path sum between any two nodes in the tree.
        A path can start and end at any nodes and must follow tree edges.
        
        Uses global variable to track maximum path sum seen so far.
        
        Time Complexity: O(n)
        Space Complexity: O(h) for recursion stack
        """
        self.max_sum = float('-inf')
        
        def max_gain(node):
            if not node:
                return 0
            
            # Calculate maximum path sums from left and right subtrees
            # Take max with 0 to handle negative values
            left_gain = max(max_gain(node.left), 0)
            right_gain = max(max_gain(node.right), 0)
            
            # Current path sum includes node value and both gains
            current_path_sum = node.value + left_gain + right_gain
            
            # Update global maximum if current path is better
            self.max_sum = max(self.max_sum, current_path_sum)
            
            # Return maximum single path including current node
            # Can only use one child to extend path to parent
            return node.value + max(left_gain, right_gain)
        
        max_gain(root)
        return self.max_sum

    def diameter(self, root):
        """
        Finds the longest path between any two nodes in the tree.
        Path length is measured in number of edges.
        
        Uses similar pattern to max_path_sum but counts edges.
        
        Time Complexity: O(n)
        Space Complexity: O(h)
        """
        self.max_diameter = 0
        
        def height(node):
            if not node:
                return 0
            
            left_height = height(node.left)
            right_height = height(node.right)
            
            # Path through current node uses both heights
            current_diameter = left_height + right_height
            
            # Update global maximum if current path is longer
            self.max_diameter = max(self.max_diameter, current_diameter)
            
            # Return height of current subtree to parent
            return 1 + max(left_height, right_height)
        
        height(root)
        return self.max_diameter

def demonstrate_tree_dp():
    """
    Demonstrates tree dynamic programming with examples.
    """
    # Create a sample tree for testing
    #       1
    #      / \\
    #     2   3
    #    / \\   \\
    #   4   5   6
    
    root = TreeNode(1)
    root.left = TreeNode(2)
    root.right = TreeNode(3)
    root.left.left = TreeNode(4)
    root.left.right = TreeNode(5)
    root.right.right = TreeNode(6)
    
    dp = TreeDP()
    
    print("Tree Dynamic Programming Examples:\\n")
    
    # Maximum Independent Set
    print("Maximum Independent Set Value:", dp.max_independent_set(root))
    print("This represents the maximum sum we can achieve")
    print("without selecting adjacent nodes.\\n")
    
    # Maximum Path Sum
    print("Maximum Path Sum:", dp.max_path_sum(root))
    print("This is the highest sum possible along any path")
    print("between any two nodes in the tree.\\n")
    
    # Tree Diameter
    print("Tree Diameter:", dp.diameter(root))
    print("This is the length of the longest path")
    print("between any two nodes in the tree.")

def explain_patterns():
    """
    Explains common patterns in tree dynamic programming.
    """
    print("\\nCommon Tree DP Patterns:")
    
    print("\\n1. Include/Exclude Pattern")
    print("- Used when making binary decisions at each node")
    print("- Maintains two states: with and without current node")
    print("- Example: Maximum Independent Set")
    
    print("\\n2. Path-based Pattern")
    print("- Used for finding optimal paths through tree")
    print("- Often uses global variable to track best result")
    print("- Example: Maximum Path Sum")
    
    print("\\n3. Height-based Pattern")
    print("- Combines information about subtree heights")
    print("- Often used for tree property problems")
    print("- Example: Tree Diameter")

# Run demonstrations
demonstrate_tree_dp()
explain_patterns()`,
  exercises: [
    {
      prompt: 'Implement a function that finds the minimum number of cameras needed to monitor a binary tree, where each camera can monitor its own node, its parent, and its children. This is a variation of the include/exclude pattern.',
      initialCode: `def min_cameras(root):
    # Return minimum number of cameras needed
    pass`,
      solution: `def min_cameras(root):
    # States: 0 = not monitored, 1 = monitored, 2 = has camera
    def dfs(node, parent):
        if not node:
            return 0, 1  # no cameras needed, considered monitored
            
        cameras_left, state_left = dfs(node.left, node)
        cameras_right, state_right = dfs(node.right, node)
        
        cameras = cameras_left + cameras_right
        
        # If either child is not monitored, need camera here
        if state_left == 0 or state_right == 0:
            return cameras + 1, 2
            
        # If either child has camera, this node is monitored
        if state_left == 2 or state_right == 2:
            return cameras, 1
            
        # Children are monitored but don't have cameras
        # This node needs monitoring from parent
        return cameras, 0
        
    cameras, state = dfs(root, None)
    # Add camera if root is not monitored
    return cameras + (1 if state == 0 else 0)`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Write a function that finds the length of the longest path in the tree where all nodes have the same value. This combines path-based DP with value comparison.',
      initialCode: `def longest_uniform_path(root):
    # Return length of longest path with same values
    pass`,
      solution: `def longest_uniform_path(root):
    max_length = [0]  # Use list for mutable global variable
    
    def dfs(node):
        if not node:
            return 0
            
        # Get longest paths from children with same value
        left_len = dfs(node.left)
        left_len = left_len + 1 if (node.left and 
                                   node.left.value == node.value) else 0
        
        right_len = dfs(node.right)
        right_len = right_len + 1 if (node.right and 
                                     node.right.value == node.value) else 0
        
        # Path through current node uses both lengths
        max_length[0] = max(max_length[0], left_len + right_len)
        
        # Return longer path to parent
        return max(left_len, right_len)
    
    dfs(root)
    return max_length[0]`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why is dynamic programming particularly useful for tree problems?',
      options: [
        'Trees are always balanced',
        'Tree problems always have overlapping subproblems',
        'Tree structure naturally breaks into independent subproblems at each node',
        'Dynamic programming makes trees more efficient',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Tree balance isn\'t relevant to DP applicability.',
        'Incorrect. Not all tree problems have overlapping subproblems.',
        'Correct! Tree structure provides natural subproblems at each node that can be solved independently.',
        'Incorrect. Efficiency depends on the specific problem and solution.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the key insight behind the include/exclude pattern in tree DP?',
      options: [
        'Always include leaf nodes',
        'Maintain two states to handle dependent decisions',
        'Exclude all nodes to minimize cost',
        'Include nodes randomly',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Leaf nodes aren\'t always included.',
        'Correct! Keeping both states lets us handle decisions that affect adjacent nodes.',
        'Incorrect. Excluding all nodes rarely gives optimal solutions.',
        'Incorrect. Random selection won\'t give optimal results.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'When do we need a global variable in tree DP solutions?',
      options: [
        'For all tree problems',
        'When node states need to be shared',
        'When the optimal solution might not include the root',
        'Only for balanced trees',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Not all problems need global variables.',
        'Incorrect. Node states can often be passed through parameters.',
        'Correct! Global variables help track optimal solutions that might occur in subtrees.',
        'Incorrect. Tree balance doesn\'t affect need for global variables.',
      ],
      difficulty: Difficulty.Advanced,
    }
  ]
};

const treeDistanceData: LessonContent = {
  title: 'Tree Distance Problems: Understanding Paths and Distances in Trees',
  content: `<p>
Imagine you're designing a computer network where each device connects to others in a tree-like structure. You need to answer questions like "What's the shortest path between two computers?" or "Which device would be the best central hub to minimize connection distances?" These are examples of tree distance problems, where we need to understand and calculate various types of distances within a tree structure.
</p>

<h3><u>Understanding Tree Distances</u></h3>

<p>
In trees, distance is typically measured by counting edges along the path between nodes. Think of it like counting the number of steps you need to take to get from one point to another, where you can only walk along the tree's branches. This simple concept leads to several interesting problems and applications.
</p>

<h4><b>Key Distance Concepts</b></h4>
<p>
There are several important ways to think about distances in trees:
</p>

<li>Node-to-Node Distance: The length of the unique path between any two nodes</li>
<li>Height Distance: The maximum distance from a node to any leaf in its subtree</li>
<li>Depth Distance: The distance from a node to the root</li>
<li>Diameter: The maximum distance between any two nodes in the tree</li>

<h3><u>Common Distance Problems</u></h3>

<h4><b>1. Lowest Common Ancestor (LCA)</b></h4>
<p>
Finding the lowest common ancestor is crucial for distance calculations because:
</p>
<li>The path between any two nodes must pass through their LCA</li>
<li>Distance can be calculated using depths relative to LCA</li>
<li>LCA helps decompose distance calculations into simpler parts</li>

<h4><b>2. Distance Queries</b></h4>
<p>
Efficiently answering distance queries often involves:
</p>
<li>Preprocessing the tree to enable fast queries</li>
<li>Using LCA to break down distance calculations</li>
<li>Maintaining additional information at each node</li>

<h4><b>3. Centroid Finding</b></h4>
<p>
Finding the tree's centroid (node that minimizes maximum distance to all other nodes) involves:
</p>
<li>Understanding how distances change as we move through the tree</li>
<li>Analyzing subtree sizes and their impact on distances</li>
<li>Finding balance points in the tree structure</li>

<h3><u>Performance Considerations</u></h3>
<table>
<tr><th>Operation</th><th>Without Preprocessing</th><th>With Preprocessing</th><th>Space Used</th></tr>
<tr><td>Single Distance</td><td>O(n)</td><td>O(log n)</td><td>O(n)</td></tr>
<tr><td>All Pairs</td><td>O(n²)</td><td>O(n log n)</td><td>O(n²)</td></tr>
<tr><td>Centroid</td><td>O(n)</td><td>-</td><td>O(1)</td></tr>
</table>`,
  codeExample: `class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class TreeDistance:
    def find_lca(self, root, p, q):
        """
        Finds the lowest common ancestor of nodes p and q.
        This is fundamental for many distance calculations.
        
        Time Complexity: O(n)
        Space Complexity: O(h) for recursion stack
        """
        if not root or root == p or root == q:
            return root
            
        # Look for p and q in left and right subtrees
        left = self.find_lca(root.left, p, q)
        right = self.find_lca(root.right, p, q)
        
        # If found in different subtrees, current node is LCA
        if left and right:
            return root
            
        # Return whichever result is non-null
        return left if left else right

    def distance_between_nodes(self, root, p, q):
        """
        Calculates the distance (number of edges) between nodes p and q.
        Uses LCA to break the problem into two parts.
        
        Time Complexity: O(n)
        Space Complexity: O(h)
        """
        def find_distance(node, target, distance):
            if not node:
                return -1
            if node == target:
                return distance
                
            # Try left subtree
            left_dist = find_distance(node.left, target, distance + 1)
            if left_dist != -1:
                return left_dist
                
            # Try right subtree
            return find_distance(node.right, target, distance + 1)
        
        # First find LCA
        lca = self.find_lca(root, p, q)
        if not lca:
            return -1
            
        # Distance is sum of distances from LCA to each node
        d1 = find_distance(lca, p, 0)
        d2 = find_distance(lca, q, 0)
        
        if d1 != -1 and d2 != -1:
            return d1 + d2
        return -1

    def find_tree_centroid(self, root):
        """
        Finds the centroid of the tree - the node that minimizes
        the maximum distance to all other nodes.
        
        Uses the fact that centroid divides tree into roughly equal parts.
        
        Time Complexity: O(n)
        Space Complexity: O(h)
        """
        def count_nodes(node):
            if not node:
                return 0
            return 1 + count_nodes(node.left) + count_nodes(node.right)
        
        def find_centroid(node, total_nodes):
            if not node:
                return None
                
            # Count nodes in current subtree
            curr_size = 1
            if node.left:
                curr_size += count_nodes(node.left)
            if node.right:
                curr_size += count_nodes(node.right)
                
            # Check if any subtree is too large
            if node.left and count_nodes(node.left) > total_nodes/2:
                return find_centroid(node.left, total_nodes)
            if node.right and count_nodes(node.right) > total_nodes/2:
                return find_centroid(node.right, total_nodes)
                
            # If no subtree too large, this is centroid
            return node
        
        total = count_nodes(root)
        return find_centroid(root, total)

    def all_distances(self, root):
        """
        Calculates distances from every node to every other node.
        Uses dynamic programming to avoid redundant calculations.
        
        Time Complexity: O(n²)
        Space Complexity: O(n²)
        """
        def dfs(node, parent, distances, depth):
            if not node:
                return
                
            # Store depth for current node
            distances[node] = {node: 0}  # Distance to self is 0
            
            for ancestor, d in distances[parent].items():
                distances[node][ancestor] = d + 1
                distances[ancestor][node] = d + 1
                
            dfs(node.left, node, distances, depth + 1)
            dfs(node.right, node, distances, depth + 1)
        
        if not root:
            return {}
            
        distances = {root: {root: 0}}
        dfs(root.left, root, distances, 1)
        dfs(root.right, root, distances, 1)
        return distances

def demonstrate_distances():
    """
    Demonstrates various tree distance calculations.
    """
    # Create a sample tree:
    #       1
    #      / \\
    #     2   3
    #    / \\   \\
    #   4   5   6
    
    root = TreeNode(1)
    root.left = TreeNode(2)
    root.right = TreeNode(3)
    root.left.left = TreeNode(4)
    root.left.right = TreeNode(5)
    root.right.right = TreeNode(6)
    
    td = TreeDistance()
    
    print("Tree Distance Examples:\\n")
    
    # Distance between nodes
    node1 = root.left.left  # Node 4
    node2 = root.right.right  # Node 6
    dist = td.distance_between_nodes(root, node1, node2)
    print(f"Distance between nodes 4 and 6: {dist}")
    
    # Find centroid
    centroid = td.find_tree_centroid(root)
    print(f"Tree centroid value: {centroid.value}")
    
    # Calculate all distances
    distances = td.all_distances(root)
    print("\\nAll-pairs distances:")
    for node1 in distances:
        for node2 in distances[node1]:
            print(f"{node1.value} to {node2.value}: {distances[node1][node2]}")

# Run demonstration
demonstrate_distances()`,
  exercises: [
    {
      prompt: 'Implement a function that finds the nodes that are exactly K distance away from a target node in a binary tree. Consider that paths can go through parent nodes.',
      initialCode: `def nodes_at_distance_k(root, target, k):
    # Return list of nodes at distance k from target
    pass`,
      solution: `def nodes_at_distance_k(root, target, k):
    def add_parent_pointers(node, parent):
        if not node:
            return
        node.parent = parent
        add_parent_pointers(node.left, node)
        add_parent_pointers(node.right, node)
    
    def find_nodes(node, distance, visited):
        if not node or node in visited or distance > k:
            return []
        
        if distance == k:
            return [node.value]
            
        visited.add(node)
        result = []
        
        # Check in all three directions: left, right, and parent
        if node.left:
            result.extend(find_nodes(node.left, distance + 1, visited))
        if node.right:
            result.extend(find_nodes(node.right, distance + 1, visited))
        if hasattr(node, 'parent') and node.parent:
            result.extend(find_nodes(node.parent, distance + 1, visited))
            
        return result
    
    # First add parent pointers to allow upward traversal
    add_parent_pointers(root, None)
    
    return find_nodes(target, 0, set())`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Write a function that finds the longest distance between two leaves in a binary tree. The path must go through the tree edges and can pass through any node, including the root.',
      initialCode: `def longest_leaf_to_leaf_path(root):
    # Return the maximum distance between any two leaves
    pass`,
      solution: `def longest_leaf_to_leaf_path(root):
    max_length = [0]  # Use list for mutable global variable
    
    def height_and_path(node):
        if not node:
            return -1, False
            
        # Get heights and leaf info from children
        left_h, left_is_leaf = height_and_path(node.left)
        right_h, right_is_leaf = height_and_path(node.right)
        
        # Current node is leaf if no children
        is_leaf = not node.left and not node.right
        
        # If path through current node connects leaves
        if left_is_leaf and right_is_leaf:
            max_length[0] = max(max_length[0], 
                              left_h + right_h + 2)
        
        # Return height to parent and whether subtree has leaf
        return (max(left_h, right_h) + 1,
                is_leaf or left_is_leaf or right_is_leaf)
    
    height_and_path(root)
    return max_length[0]`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why is the Lowest Common Ancestor important for distance calculations?',
      options: [
        'It\'s always the midpoint between nodes',
        'It\'s needed for balancing the tree',
        'It lets us break distance calculation into two simpler parts',
        'It\'s required for tree traversal',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. LCA isn\'t necessarily at the midpoint.',
        'Incorrect. LCA isn\'t related to tree balancing.',
        'Correct! LCA helps us calculate distances by splitting into distances from LCA to each target node.',
        'Incorrect. Tree traversal doesn\'t require LCA.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What characterizes a tree\'s centroid?',
      options: [
        'It\'s always the root node',
        'It\'s the node with the most children',
        'No subtree contains more than half of all nodes',
        'It\'s always a leaf node',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. The centroid can be any node.',
        'Incorrect. Number of direct children isn\'t relevant.',
        'Correct! This property defines the centroid and minimizes maximum distance to other nodes.',
        'Incorrect. The centroid is rarely a leaf.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the key challenge in finding nodes at distance K from a target?',
      options: [
        'Counting nodes',
        'Tree height',
        'Paths can go through parents',
        'Tree balance',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Node counting isn\'t the main challenge.',
        'Incorrect. Tree height isn\'t the key issue.',
        'Correct! We need to handle paths that go up through parents and then down other branches.',
        'Incorrect. Tree balance doesn\'t affect the algorithm.',
      ],
      difficulty: Difficulty.Advanced,
    }
  ]
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
