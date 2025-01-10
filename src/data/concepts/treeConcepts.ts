import { Concept, createConcept, Difficulty } from '@/common/commonConcept';

export const treeConcepts: Concept[] = [
  createConcept(
    1,
    'What is a Tree? How does it differ from other data structures?',
    `
**Definition:** A tree is a hierarchical data structure made up of nodes connected by edges. Each node may have zero or more children, and the topmost node is the root.

**Basic Structure:**  
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
- **Hierarchical:** Nodes form a hierarchy with a single root.
- **Parent-Child:** Every node (except root) has exactly one parent.
- **Leaf Nodes:** Nodes without children.
- **No Cycles:** Unlike general graphs, standard trees have no cycles.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    2,
    'What are the advantages and disadvantages of using trees?',
    `
<h2>Advantages:</h2>
<ul>
  <li><strong>Hierarchical Representation:</strong> Perfect for data like file systems or organizational charts.</li>
  <li><strong>Efficient Operations:</strong> Balanced trees offer O(log n) search, insertion, and deletion.</li>
  <li><strong>Flexibility:</strong> Easily adapted to different needs (e.g., BST, Trie, segment tree).</li>
</ul>

<h2>Disadvantages:</h2>
<ul>
  <li><strong>Implementation Complexity:</strong> More involved than linear structures (arrays/lists).</li>
  <li><strong>Balancing Overhead:</strong> Maintaining balance (e.g., AVL, Red-Black) adds complexity.</li>
  <li><strong>Memory Usage:</strong> Storing child pointers can consume more memory than contiguous arrays.</li>
</ul>

**Key Points:**
- Trees are indispensable for hierarchical data.
- Balancing and extra pointers can complicate usage but often pay off in performance.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    3,
    'What is the time complexity of common operations on a tree (search, insertion, deletion)?',
    `
**Time Complexity of Tree Operations:**
| Operation   | Unbalanced Tree | Balanced Tree (e.g., AVL, Red-Black) |
|-------------|-----------------|--------------------------------------|
| **Search**    | O(n)           | O(log n)                             |
| **Insertion** | O(n)           | O(log n)                             |
| **Deletion**  | O(n)           | O(log n)                             |

**Key Points:**
- For unbalanced trees, performance may degrade to O(n).
- Balanced trees retain O(log n) complexity through rebalancing operations.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    4,
    'Explain the difference between a tree and a graph.',
    `
**Tree:**
- **Hierarchical:** Single root, with levels of children.
- **No Cycles:** Any node can be reached by exactly one path.
- **Parent-Child Relationship:** Exactly one parent for each node (except root).

**Graph:**
- **Network Structure:** Any node can connect to any other node(s).
- **Cycles Allowed:** Loops and multiple paths may exist between nodes.
- **Edges:** May be undirected or directed, potentially with weights.

**Key Points:**
- A tree is essentially a special case of a graph with no cycles and a single root.
- Graphs can represent far more complex relationships (e.g., networks).
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    5,
    'What are some common use cases for trees in programming?',
    `
**Common Use Cases:**
- **File Systems:** Directories as nodes, files/subdirectories as children.
- **Organizational Charts:** Each employee or department is a node under a hierarchical structure.
- **Binary Search Trees (BSTs):** Efficient search, insertion, and deletion when balanced.
- **Tries (Prefix Trees):** Optimal for fast string lookups (e.g., autocomplete).
- **Machine Learning (Decision Trees):** Classify data by node-based decisions.
- **Heaps (Binary Trees):** Priority queues, scheduling.

**Key Points:**
- Trees thrive when data has a clear hierarchy or requires efficient ordered operations.
- Different specialized trees (BST, AVL, Trie) address different performance requirements.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    6,
    'Binary Tree vs. N-ary Tree',
    `
**Binary Tree:**
- **Two Children Max:** Each node has at most two children (left and right).
- **Common Variants:** BST, AVL, Red-Black, heaps.
- **Use Cases:** Searching, priority queues, expression trees.

**N-ary Tree:**
- **Unlimited Children:** Each node can have any number of children.
- **Use Cases:** File systems, organizational hierarchies, general hierarchical data.

**Key Points:**
- Binary trees are popular for algorithmic efficiency and simpler node structures.
- N-ary trees fit real-world hierarchical data that isn't naturally binary.
    `,
    Difficulty.Intermediate,
  ),
  createConcept(
    7,
    'Depth-First Search (DFS) and Breadth-First Search (BFS) in Trees',
    `
**DFS:**
- **Traverse Deeply First:** Go down each branch before backtracking.
- **Implementations:** Recursively (preorder/inorder/postorder) or via a stack.
- **Use Cases:** Depth-based traversal, tree-based expression evaluations.

**BFS:**
- **Level Order Traversal:** Visit all nodes at each level before moving to the next.
- **Implementation:** Typically uses a queue.
- **Use Cases:** Shortest path in unweighted trees, level-by-level processing.

**Key Points:**
- DFS is often easier to implement recursively.
- BFS reveals nodes in layers, useful for shortest path in unweighted contexts.
    `,
    Difficulty.Intermediate,
  ),
  createConcept(
    8,
    'Tree Traversal Orders: Preorder, Inorder, Postorder, Level Order',
    `
**Preorder (Root, Left, Right):**
1. Visit root.
2. Traverse left subtree (preorder).
3. Traverse right subtree (preorder).

**Inorder (Left, Root, Right):**
1. Traverse left subtree (inorder).
2. Visit root.
3. Traverse right subtree (inorder).

**Postorder (Left, Right, Root):**
1. Traverse left subtree (postorder).
2. Traverse right subtree (postorder).
3. Visit root.

**Level Order (Breadth-First):**
- Traverse levels from top to bottom using a queue.

**Key Points:**
- Preorder is good for creating copies of trees or prefix expression output.
- Inorder is key for BSTs, as it yields sorted data.
- Postorder aids in tree deletion or postfix expression creation.
- Level order helps process nodes by depth or distance from root.
    `,
    Difficulty.Intermediate,
  ),
  createConcept(
    9,
    'Balanced Trees: AVL and Red-Black Trees',
    `
**AVL Tree:**
- **Height Difference:** Maintains a strict balance factor (|left_height - right_height| ≤ 1).
- **Rotations:** Insertions/deletions may trigger single or double rotations.
- **Performance:** Guarantees O(log n) for search, insert, delete with potentially more rotations than Red-Black.

**Red-Black Tree:**
- **Color Properties:** Nodes are colored red or black to maintain balance with fewer constraints than AVL.
- **Fewer Rotations:** Typically less balancing overhead, still O(log n) operations.
- **Practical Use:** Commonly used in language library data structures (e.g., C++ std::map).

**Key Points:**
- Both ensure O(log n) performance by self-balancing.
- AVL is more rigidly balanced (fewer disbalanced heights), Red-Black often simpler to implement with fewer rotations on average.
    `,
    Difficulty.Advanced,
  ),
  createConcept(
    10,
    'B-Trees and B+ Trees in Databases',
    `
**B-Tree:**
- **Multi-Way Balanced Tree:** Each node can have multiple children.
- **Disk-Friendly:** Minimizes disk I/O by storing more data in each node.
- **Used In:** File systems, databases where block-based storage is relevant.

**B+ Tree:**
- **Leaf Nodes Contain Data:** Internal nodes hold only keys that guide search.
- **Linked Leaves:** Easier range queries, as all records are in leaf level.
- **Very Common in Databases:** Allows range scans and efficient inserts/deletes.

**Key Points:**
- B-Trees and B+ Trees excel in external storage systems.
- They reduce tree height and leverage large node sizes to minimize disk reads.
    `,
    Difficulty.Advanced,
  ),
];

