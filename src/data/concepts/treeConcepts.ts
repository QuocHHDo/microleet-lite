import { Concept, createConcept, Difficulty } from '@/common/commonConcept';
import { generateTimeComplexityTable } from '@/utils/generateTimeComplexityTable';

export const treeConcepts: Concept[] = [
  createConcept(
    1,
    'What is a Tree? How does it differ from other data structures?',
    `
  **Definition:** A tree is a hierarchical data structure consisting of nodes, where each node has a value and a list of references to its child nodes. The topmost node is called the root, and nodes with no children are called leaves.
  
  **Basic Structure:** Trees are composed of nodes connected by edges, forming a hierarchical structure. Each node can have zero or more child nodes.
  
  **Example:**
  \`\`\`python
  class TreeNode:
      def __init__(self, value):
          self.value = value
          self.children = []
  
  root = TreeNode(1)
  child1 = TreeNode(2)
  child2 = TreeNode(3)
  root.children.append(child1)
  root.children.append(child2)
  \`\`\`
  
  **Key Characteristics:**
  - **Hierarchical Structure:** Trees represent hierarchical relationships between elements.
  - **Root Node:** The topmost node in the tree.
  - **Parent-Child Relationship:** Each node (except the root) has a parent node, and each node can have multiple child nodes.
  - **Leaf Nodes:** Nodes with no children.
      `,
    Difficulty.Beginner,
  ),
  createConcept(
    2,
    'What are the advantages and disadvantages of using trees?',
    `
  <h2>Advantages:</h2>
  <ul>
    <li><strong>Hierarchical Representation:</strong> Trees are ideal for representing hierarchical data structures like file systems, organizational charts, and more.</li>
    <li><strong>Efficient Operations:</strong> Many tree operations, such as searching, insertion, and deletion, can be efficient depending on the type of tree (e.g., O(log n) for balanced trees).</li>
    <li><strong>Flexibility:</strong> Trees can be easily extended to support various types of data and relationships.</li>
  </ul>
  
  <h2>Disadvantages:</h2>
  <ul>
    <li><strong>Complexity:</strong> Trees can be more complex to implement and manage compared to linear data structures like arrays and lists.</li>
    <li><strong>Balancing:</strong> Some types of trees require balancing to maintain efficient operations, which can add complexity.</li>
    <li><strong>Memory Overhead:</strong> Trees may have higher memory overhead due to the need to store references to child nodes.</li>
  </ul>
  
  **Example:**
  \`\`\`python
  class TreeNode:
      def __init__(self, value):
          self.value = value
          self.children = []
  
  root = TreeNode(1)
  child1 = TreeNode(2)
  child2 = TreeNode(3)
  root.children.append(child1)
  root.children.append(child2)
  \`\`\`
  
  **Key Points:**
  - Trees are ideal for hierarchical data structures.
  - Balancing and memory overhead are common challenges when using trees.
      `,
    Difficulty.Beginner,
  ),
  createConcept(
    3,
    'What is the time complexity of common operations on a tree (search, insertion, deletion)?',
    `
**Time Complexity of Common Operations on Trees:**
${generateTimeComplexityTable([
  {
    name: 'Search',
    complexity: 'O(n) for unbalanced trees, O(log n) for balanced trees',
    explanation:
      'Searching in a tree depends on its balance. Unbalanced trees can degrade to O(n), while balanced trees like AVL or Red-Black trees maintain O(log n).',
  },
  {
    name: 'Insertion',
    complexity: 'O(n) for unbalanced trees, O(log n) for balanced trees',
    explanation:
      'Insertion in a tree depends on its balance. Unbalanced trees can degrade to O(n), while balanced trees maintain O(log n).',
  },
  {
    name: 'Deletion',
    complexity: 'O(n) for unbalanced trees, O(log n) for balanced trees',
    explanation:
      'Deletion in a tree depends on its balance. Unbalanced trees can degrade to O(n), while balanced trees maintain O(log n).',
  },
])}
**Key Points:**
- The time complexity of tree operations depends on the balance of the tree.
- Balanced trees like AVL and Red-Black trees ensure efficient operations with O(log n) time complexity.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    4,
    'Explain the difference between a tree and a graph.',
    `
  **Trees:**
  - **Hierarchical Structure:** Trees represent hierarchical relationships between elements.
  - **Single Root:** Trees have a single root node.
  - **No Cycles:** Trees do not contain cycles.
  - **Parent-Child Relationship:** Each node (except the root) has a parent node, and each node can have multiple child nodes.
  
  **Graphs:**
  - **Network Structure:** Graphs represent network-like structures where nodes can have multiple connections.
  - **Multiple Roots:** Graphs can have multiple "root" nodes or no root at all.
  - **Cycles Allowed:** Graphs can contain cycles.
  - **Edges:** Nodes in a graph are connected by edges, which can be directed or undirected.
  
  **Key Points:**
  - Trees are a specific type of graph with additional constraints (no cycles, single root).
  - Graphs are more general and can represent a wider variety of relationships.
      `,
    Difficulty.Beginner,
  ),
  createConcept(
    5,
    'What are some common use cases for trees in programming?',
    `
  **Common Use Cases for Trees:**
  <ul>
    <li><strong>File Systems:</strong> Trees are used to represent hierarchical file systems where directories contain files and subdirectories.</li>
    <li><strong>Organizational Charts:</strong> Trees are used to represent organizational structures where each node represents an employee or department.</li>
    <li><strong>Binary Search Trees (BST):</strong> BSTs are used for efficient searching, insertion, and deletion operations.</li>
    <li><strong>AVL and Red-Black Trees:</strong> These balanced trees are used in databases and other applications requiring efficient operations.</li>
    <li><strong>Trie (Prefix Tree):</strong> Tries are used for efficient string searching and prefix matching.</li>
    <li><strong>Decision Trees:</strong> Decision trees are used in machine learning for classification and regression tasks.</li>
  </ul>
  
  **Example:**
  \`\`\`python
  class TreeNode:
      def __init__(self, value):
          self.value = value
          self.children = []
  
  root = TreeNode("Root")
  child1 = TreeNode("Child1")
  child2 = TreeNode("Child2")
  root.children.append(child1)
  root.children.append(child2)
  \`\`\`
  
  **Key Points:**
  - Trees are versatile and can be applied to various hierarchical scenarios.
  - Understanding the use cases helps in choosing the right data structure for a given problem.
      `,
    Difficulty.Beginner,
  ),
];
