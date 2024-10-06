import { Concept, createConcept, Difficulty } from '@/common/commonConcept';
import { generateTimeComplexityTable } from '@/utils/generateTimeComplexityTable';

export const graphConcepts: Concept[] = [
  createConcept(
    1,
    'What is a Graph? How does it differ from other data structures?',
    `
  **Definition:** A graph is a non-linear data structure consisting of nodes (vertices) and edges that connect these nodes. Graphs are used to represent relationships between objects.
  
  **Basic Structure:** Graphs are composed of vertices (nodes) and edges (connections between nodes). Edges can be directed (one-way) or undirected (two-way).
  
  **Example:**
  \`\`\`python
  class Graph:
      def __init__(self):
          self.graph = {}
  
      def add_edge(self, u, v):
          if u not in self.graph:
              self.graph[u] = []
          self.graph[u].append(v)
  
  g = Graph()
  g.add_edge(0, 1)
  g.add_edge(0, 2)
  g.add_edge(1, 2)
  g.add_edge(2, 0)
  g.add_edge(2, 3)
  g.add_edge(3, 3)
  \`\`\`
  
  **Key Characteristics:**
  - **Vertices (Nodes):** The fundamental units of a graph.
  - **Edges (Connections):** The connections between vertices.
  - **Directed vs. Undirected:** Edges can be one-way (directed) or two-way (undirected).
  - **Weighted vs. Unweighted:** Edges can have weights (costs) or be unweighted.
      `,
    Difficulty.Beginner,
  ),
  createConcept(
    2,
    'What are the advantages and disadvantages of using graphs?',
    `
  <h2>Advantages:</h2>
  <ul>
    <li><strong>Flexibility:</strong> Graphs can represent a wide variety of relationships between objects.</li>
    <li><strong>Versatility:</strong> Graphs are used in many applications, including social networks, transportation networks, and more.</li>
    <li><strong>Efficient Algorithms:</strong> Many graph algorithms, such as shortest path and minimum spanning tree, are well-studied and efficient.</li>
  </ul>
  
  <h2>Disadvantages:</h2>
  <ul>
    <li><strong>Complexity:</strong> Graphs can be more complex to implement and manage compared to linear data structures.</li>
    <li><strong>Memory Overhead:</strong> Graphs may have higher memory overhead due to the need to store references to vertices and edges.</li>
    <li><strong>Algorithmic Challenges:</strong> Some graph problems are computationally hard (NP-hard) and may require sophisticated algorithms.</li>
  </ul>
  
  **Example:**
  \`\`\`python
  class Graph:
      def __init__(self):
          self.graph = {}
  
      def add_edge(self, u, v):
          if u not in self.graph:
              self.graph[u] = []
          self.graph[u].append(v)
  
  g = Graph()
  g.add_edge(0, 1)
  g.add_edge(0, 2)
  g.add_edge(1, 2)
  g.add_edge(2, 0)
  g.add_edge(2, 3)
  g.add_edge(3, 3)
  \`\`\`
  
  **Key Points:**
  - Graphs are ideal for representing complex relationships between objects.
  - Memory overhead and algorithmic challenges are common when using graphs.
      `,
    Difficulty.Beginner,
  ),
  createConcept(
    3,
    'What is the time complexity of common operations on a graph (search, insertion, deletion)?',
    `
**Time Complexity of Common Operations on Graphs:**
${generateTimeComplexityTable([
  {
    name: 'Search (BFS/DFS)',
    complexity: 'O(V + E)',
    explanation:
      'Searching a graph using Breadth-First Search (BFS) or Depth-First Search (DFS) takes O(V + E) time, where V is the number of vertices and E is the number of edges.',
  },
  {
    name: 'Insertion (Vertex)',
    complexity: 'O(1)',
    explanation:
      'Inserting a new vertex into a graph typically takes O(1) time.',
  },
  {
    name: 'Insertion (Edge)',
    complexity: 'O(1)',
    explanation: 'Inserting a new edge into a graph typically takes O(1) time.',
  },
  {
    name: 'Deletion (Vertex)',
    complexity: 'O(V + E)',
    explanation:
      'Deleting a vertex and all its edges takes O(V + E) time, as all edges connected to the vertex need to be removed.',
  },
  {
    name: 'Deletion (Edge)',
    complexity: 'O(1)',
    explanation: 'Deleting an edge typically takes O(1) time.',
  },
])}
**Key Points:**
- The time complexity of graph operations depends on the number of vertices (V) and edges (E).
- Search operations like BFS and DFS take O(V + E) time.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    4,
    'Explain the difference between a graph and a tree.',
    `
  **Graphs:**
  - **Network Structure:** Graphs represent network-like structures where nodes can have multiple connections.
  - **Multiple Roots:** Graphs can have multiple "root" nodes or no root at all.
  - **Cycles Allowed:** Graphs can contain cycles.
  - **Edges:** Nodes in a graph are connected by edges, which can be directed or undirected.
  
  **Trees:**
  - **Hierarchical Structure:** Trees represent hierarchical relationships between elements.
  - **Single Root:** Trees have a single root node.
  - **No Cycles:** Trees do not contain cycles.
  - **Parent-Child Relationship:** Each node (except the root) has a parent node, and each node can have multiple child nodes.
  
  **Key Points:**
  - Trees are a specific type of graph with additional constraints (no cycles, single root).
  - Graphs are more general and can represent a wider variety of relationships.
      `,
    Difficulty.Beginner,
  ),
  createConcept(
    5,
    'What are some common use cases for graphs in programming?',
    `
  **Common Use Cases for Graphs:**
  <ul>
    <li><strong>Social Networks:</strong> Graphs are used to represent relationships between users in social networks.</li>
    <li><strong>Transportation Networks:</strong> Graphs are used to model road networks, flight routes, and other transportation systems.</li>
    <li><strong>Web Crawlers:</strong> Graphs are used to represent the structure of the web, with pages as nodes and links as edges.</li>
    <li><strong>Recommendation Systems:</strong> Graphs are used to model user-item interactions and make personalized recommendations.</li>
    <li><strong>Dependency Graphs:</strong> Graphs are used to represent dependencies between tasks or modules in software systems.</li>
    <li><strong>Game AI:</strong> Graphs are used to represent game maps and paths for AI agents.</li>
  </ul>
  
  **Example:**
  \`\`\`python
  class Graph:
      def __init__(self):
          self.graph = {}
  
      def add_edge(self, u, v):
          if u not in self.graph:
              self.graph[u] = []
          self.graph[u].append(v)
  
  g = Graph()
  g.add_edge(0, 1)
  g.add_edge(0, 2)
  g.add_edge(1, 2)
  g.add_edge(2, 0)
  g.add_edge(2, 3)
  g.add_edge(3, 3)
  \`\`\`
  
  **Key Points:**
  - Graphs are versatile and can be applied to various network-like scenarios.
  - Understanding the use cases helps in choosing the right data structure for a given problem.
      `,
    Difficulty.Beginner,
  ),
];
