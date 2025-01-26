import { Concept, createConcept, Difficulty } from '@/common/commonConcept';

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
- **Directed vs. Undirected:** Edges can be one-way or two-way.
- **Weighted vs. Unweighted:** Edges can have costs or be unweighted.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    2,
    'What are the advantages and disadvantages of using graphs?',
    `
<h2>Advantages:</h2>
<ul>
  <li><strong>Flexibility:</strong> Graphs can represent a wide variety of relationships.</li>
  <li><strong>Versatility:</strong> Used in social networks, transportation networks, and more.</li>
  <li><strong>Efficient Algorithms:</strong> Shortest paths, spanning trees, etc., are well-studied and performant.</li>
</ul>

<h2>Disadvantages:</h2>
<ul>
  <li><strong>Complexity:</strong> More complex to implement and manage than linear structures.</li>
  <li><strong>Memory Overhead:</strong> Storing references to vertices and edges can be memory-intensive.</li>
  <li><strong>Algorithmic Challenges:</strong> Some graph problems are computationally hard (NP-hard).</li>
</ul>

**Key Points:**
- Graphs excel at representing complex relationships.
- Memory overhead and complexity can be higher compared to simpler structures.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    3,
    'What is the time complexity of common operations on a graph (search, insertion, deletion)?',
    `
**Time Complexity of Common Operations on Graphs:**
| Operation              | Complexity  | Explanation                                                                                      |
|------------------------|------------ |--------------------------------------------------------------------------------------------------|
| **Search (BFS/DFS)**   | O(V + E)    | Traversing all vertices (V) and edges (E).                                                       |
| **Insertion (Vertex)** | O(1)        | Adding a new vertex generally takes constant time.                                               |
| **Insertion (Edge)**   | O(1)        | Adding an edge to an adjacency list or similar structure is typically constant time.             |
| **Deletion (Vertex)**  | O(V + E)    | Removing a vertex and all edges that connect to it.                                              |
| **Deletion (Edge)**    | O(1)        | Removing a specific edge if quickly accessible in an adjacency list.                             |

**Key Points:**
- BFS/DFS takes O(V + E), which covers all vertices and edges.
- Deleting a vertex can be more expensive, as connected edges must also be removed.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    4,
    'Explain the difference between a graph and a tree.',
    `
**Graphs:**
- **Network Structure:** Nodes can have multiple connections.
- **Multiple Roots:** Can have several "root" nodes or none at all.
- **Cycles Allowed:** May contain cycles.
- **Directed or Undirected:** Edges can be one-way or two-way.

**Trees:**
- **Hierarchical Structure:** Strict parent-child relationships.
- **Single Root:** Has exactly one root node.
- **No Cycles:** A tree has no cycles by definition.
- **Edges:** Each child has exactly one parent (except the root).

**Key Points:**
- A tree is a special kind of graph with no cycles and a single root.
- Graphs are more general; they can model any network-like system, cycles included.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    5,
    'What are some common use cases for graphs in programming?',
    `
**Common Use Cases for Graphs:**
- **Social Networks:** Model relationships among users or entities.
- **Transportation Networks:** Model roads, routes, and connections.
- **Web Crawlers:** Represent the web with pages as vertices and links as edges.
- **Recommendation Systems:** Represent user-item interactions for personalized suggestions.
- **Dependency Graphs:** Track module or task dependencies in software.
- **Game AI:** Represent game maps and possible paths for agents.

**Key Points:**
- Graphs suit network-like scenarios where connections are crucial.
- Many graph-based problems use well-known algorithms (e.g., BFS, DFS).
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    6,
    'Graph Traversal: BFS vs. DFS',
    `
**Breadth-First Search (BFS):**
- **Approach:** Visit nodes level by level (or distance by distance) from the start.
- **Use Cases:** Shortest path in an unweighted graph, finding connected components.
\`\`\`python
from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    visited.add(start)
    while queue:
        node = queue.popleft()
        # Process the node here
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
\`\`\`

**Depth-First Search (DFS):**
- **Approach:** Go as far as possible down one path before backtracking.
- **Use Cases:** Topological sort, cycle detection, connected components.
\`\`\`python
def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    visited.add(start)
    # Process the node here
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)
\`\`\`

**Key Points:**
- BFS is useful for shortest paths in unweighted graphs.
- DFS explores deep paths, helping with tasks like cycle detection or path enumeration.
    `,
    Difficulty.Intermediate,
  ),
  createConcept(
    7,
    'Detecting Cycles in Directed Graphs',
    `
**Definition:** Cycle detection determines if there is a path from a node back to itself in a directed graph.

**Approach (DFS-based):**
1. **Maintain Two Sets (or colors):**
   - **Visited:** Nodes visited in the current traversal.
   - **Recursion Stack (or 'ancestors'):** Nodes in the current DFS path.
2. **DFS and Marking:** When visiting a node, add it to both sets. If a node is revisited while still in the recursion stack, a cycle is detected.
3. **Backtrack:** Remove the node from the recursion stack upon exiting that path.

**Example (pseudo-code):**
\`\`\`python
def detect_cycle_dfs(graph, node, visited, rec_stack):
    visited.add(node)
    rec_stack.add(node)
    for neighbor in graph[node]:
        if neighbor not in visited:
            if detect_cycle_dfs(graph, neighbor, visited, rec_stack):
                return True
        elif neighbor in rec_stack:
            return True
    rec_stack.remove(node)
    return False

def has_cycle(graph):
    visited = set()
    rec_stack = set()
    for node in graph:
        if node not in visited:
            if detect_cycle_dfs(graph, node, visited, rec_stack):
                return True
    return False
\`\`\`

**Key Points:**
- Cycle detection is essential in dependency graphs, scheduling, and more.
- Directed edges complicate cycle detection, as back edges can form loops.
    `,
    Difficulty.Intermediate,
  ),
  createConcept(
    8,
    'Shortest Path in Weighted Graphs: Dijkstra vs. Bellman-Ford',
    `
**Dijkstra's Algorithm:**
- **Purpose:** Finds the shortest path from a source to all vertices in a graph with non-negative edge weights.
- **Complexity:** O(E log V) with a priority queue implementation.
- **Key Points:** Faster than Bellman-Ford if edges are guaranteed non-negative.

**Bellman-Ford Algorithm:**
- **Purpose:** Handles graphs with negative edge weights (but no negative cycles).
- **Complexity:** O(V * E) because it relaxes edges up to V-1 times.
- **Key Points:** Detects negative cycles if a further relaxation is possible after V-1 iterations.

**Example Use Cases:**
- **Dijkstra:** Road networks (non-negative distances).
- **Bellman-Ford:** Financial arbitrage or other scenarios with negative edges but no negative cycles.

**Key Points:**
- Dijkstra is more efficient but restricted to non-negative edges.
- Bellman-Ford is slower but can handle negative edges and detect negative cycles.
    `,
    Difficulty.Advanced,
  ),
  createConcept(
    9,
    'Minimum Spanning Tree: Kruskal vs. Prim',
    `
**Minimum Spanning Tree (MST):** A subset of edges that connects all vertices with the minimum total edge weight (for weighted, undirected graphs).

**Kruskal’s Algorithm:**
1. Sort edges by weight.
2. Pick the smallest edge that doesn’t create a cycle (use a Union-Find to check).
3. Repeat until all vertices are connected.

**Prim’s Algorithm:**
1. Start from any vertex, pick the smallest edge connecting to a new vertex.
2. Keep adding the smallest edge that connects a visited vertex to an unvisited one.
3. Repeat until all vertices are included.

**Complexity:**
- **Kruskal:** O(E log E) due to edge sorting and near O(1) union-find operations.
- **Prim:** O(E log V) with a priority queue for retrieving minimum edges.

**Key Points:**
- Both find an MST, but differ in approach and data structures.
- Kruskal often easier for sparse graphs; Prim can be efficient for dense graphs with a priority queue.
    `,
    Difficulty.Advanced,
  ),
];
