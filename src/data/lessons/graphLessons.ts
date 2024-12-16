import { Difficulty } from '@/common/commonConcept';
import { Curriculum, LessonContent, LessonsTab, PriorityLevel } from '@/common/commonLesson';

const graphCurriculum: Curriculum = {
  title: 'Graph Curriculum',
  description:
    'Master graph algorithms and patterns to solve LeetCode problems and ace technical interviews',
  sections: [
    {
      id: 1,
      title: 'Graph Fundamentals',
      topics: [
        {
          id: 'graph-concepts',
          title: 'Basic Graph Concepts',
          description: 'Understanding vertices, edges, and graph types through LeetCode examples',
          priority: PriorityLevel.Essential
        },
        {
          id: 'graph-representation',
          title: 'Graph Representation',
          description: 'Implementing adjacency lists and matrices - crucial for coding interviews',
          priority: PriorityLevel.Essential
        },
        {
          id: 'graph-building',
          title: 'Building Graphs',
          description: 'Converting problem input into graph representation - a key interview skill',
          priority: PriorityLevel.Essential
        },
      ],
    },
    {
      id: 2,
      title: 'Graph Traversal Patterns',
      topics: [
        {
          id: 'bfs-pattern',
          title: 'BFS Pattern',
          description: 'Solving shortest path, level-order, and grid traversal problems using BFS',
          priority: PriorityLevel.Essential
        },
        {
          id: 'dfs-pattern',
          title: 'DFS Pattern',
          description: 'Using DFS for path finding, backtracking, and island problems',
          priority: PriorityLevel.Essential
        },
        {
          id: 'matrix-traversal',
          title: 'Matrix as Graph',
          description: 'Tackling matrix problems using graph traversal techniques',
          priority: PriorityLevel.Essential
        },
      ],
    },
    {
      id: 3,
      title: 'Common Graph Patterns',
      topics: [
        {
          id: 'island-problems',
          title: 'Island Problems',
          description: 'Solving number of islands and related grid-based graph problems',
          priority: PriorityLevel.Essential
        },
        {
          id: 'graph-connectivity',
          title: 'Connected Components',
          description: 'Finding and counting connected components in various graph types',
          priority: PriorityLevel.Essential
        },
        {
          id: 'bipartite-check',
          title: 'Bipartite Graph Pattern',
          description: 'Checking bipartite property and solving coloring problems',
          priority: PriorityLevel.Important
        },
      ],
    },
    {
      id: 4,
      title: 'Path Finding Problems',
      topics: [
        {
          id: 'shortest-path',
          title: 'Shortest Path Patterns',
          description: 'Implementing Dijkstra and BFS for shortest path problems',
          priority: PriorityLevel.Essential
        },
        {
          id: 'path-existence',
          title: 'Path Existence Problems',
          description: 'Finding if path exists between nodes and all paths problems',
          priority: PriorityLevel.Essential
        },
        {
          id: 'cycle-detection',
          title: 'Cycle Detection',
          description: 'Detecting cycles in directed and undirected graphs',
          priority: PriorityLevel.Essential
        },
      ],
    },
    {
      id: 5,
      title: 'Topological Sort Patterns',
      topics: [
        {
          id: 'course-schedule',
          title: 'Course Schedule Pattern',
          description: 'Solving course prerequisite and dependency problems',
          priority: PriorityLevel.Essential
        },
        {
          id: 'build-order',
          title: 'Build Order Problems',
          description: 'Handling build dependencies and task scheduling',
          priority: PriorityLevel.Important
        },
        {
          id: 'parallel-courses',
          title: 'Parallel Execution',
          description: 'Finding minimum time to complete tasks with dependencies',
          priority: PriorityLevel.Important
        },
      ],
    },
    {
      id: 6,
      title: 'Union-Find Applications',
      topics: [
        {
          id: 'redundant-connection',
          title: 'Redundant Connection Pattern',
          description: 'Using Union-Find to detect and handle redundant edges',
          priority: PriorityLevel.Important
        },
        {
          id: 'number-of-provinces',
          title: 'Province Counting Pattern',
          description: 'Counting connected components using Union-Find',
          priority: PriorityLevel.Important
        },
        {
          id: 'accounts-merge',
          title: 'Account Merge Pattern',
          description: 'Solving account merging and similar grouping problems',
          priority: PriorityLevel.Beneficial
        },
      ],
    },
    {
      id: 7,
      title: 'Advanced Problem Patterns',
      topics: [
        {
          id: 'word-ladder',
          title: 'Word Transformation',
          description: 'Solving word ladder and string transformation problems',
          priority: PriorityLevel.Important
        },
        {
          id: 'graph-clone',
          title: 'Graph Clone Pattern',
          description: 'Deep copying graphs while maintaining structure',
          priority: PriorityLevel.Important
        },
        {
          id: 'min-height-trees',
          title: 'Minimum Height Trees',
          description: 'Finding centroids and similar tree-related graph problems',
          priority: PriorityLevel.Beneficial
        },
      ],
    },
    {
      id: 8,
      title: 'Implementation Techniques',
      topics: [
        {
          id: 'state-tracking',
          title: 'State Tracking',
          description: 'Managing visited states and handling complex graph states',
          priority: PriorityLevel.Essential
        },
        {
          id: 'optimization',
          title: 'Space-Time Optimization',
          description: 'Optimizing graph solutions for interview performance',
          priority: PriorityLevel.Essential
        },
        {
          id: 'edge-cases',
          title: 'Edge Cases',
          description: 'Handling empty graphs, single nodes, and disconnected components',
          priority: PriorityLevel.Essential
        },
      ],
    },
  ],
} as const;

const basicGraphConceptsData = {
  title: 'Graph Concepts and Implementation',
  content: `<p>
Graphs are versatile data structures that represent relationships between objects. Think of a graph like a social network, where:
</p>
<li>Each person is a vertex (or node)</li>
<li>Friendships are edges connecting vertices</li>
<li>Connections can be one-way (directed) or mutual (undirected)</li>

<p>Understanding graphs is crucial for solving problems involving networks, paths, and relationships between entities.</p>

<h3><u>Types of Graphs</u></h3>

<h4><b>Undirected Graphs</b></h4>
<li>Edges have no direction (mutual connections)</li>
<li>Example: Facebook friendships (if A is friends with B, B is friends with A)</li>
<li>Represented by symmetric adjacency matrix or list</li>

<h4><b>Directed Graphs (Digraphs)</b></h4>
<li>Edges have direction (one-way connections)</li>
<li>Example: Twitter follows (A following B doesn't mean B follows A)</li>
<li>Can have cycles or be acyclic (DAG)</li>

<h4><b>Weighted Graphs</b></h4>
<li>Edges have associated values (weights)</li>
<li>Example: Road networks where weights represent distances</li>
<li>Used in shortest path algorithms</li>

<h3><u>Graph Representations</u></h3>

<h4><b>Adjacency Matrix</b></h4>
<li>2D array where matrix[i][j] indicates edge from i to j</li>
<li>Space complexity: O(V²)</li>
<li>Best for dense graphs</li>

<h4><b>Adjacency List</b></h4>
<li>Array/map of lists where index/key represents vertex</li>
<li>Space complexity: O(V + E)</li>
<li>Best for sparse graphs</li>

<h3><u>Common Operations</u></h3>
<table>
<tr><th>Operation</th><th>Adjacency Matrix</th><th>Adjacency List</th></tr>
<tr><td>Add Edge</td><td>O(1)</td><td>O(1)</td></tr>
<tr><td>Remove Edge</td><td>O(1)</td><td>O(V)</td></tr>
<tr><td>Check if edge exists</td><td>O(1)</td><td>O(V)</td></tr>
<tr><td>Find neighbors</td><td>O(V)</td><td>O(neighbors)</td></tr>
<tr><td>Memory</td><td>O(V²)</td><td>O(V + E)</td></tr>
</table>`,
  codeExample: `# Graph implementation using Adjacency List
class Graph:
    def __init__(self, directed=False):
        self.graph = {}
        self.directed = directed
    
    def add_vertex(self, vertex):
        """Add a vertex to the graph if it doesn't exist."""
        if vertex not in self.graph:
            self.graph[vertex] = []
    
    def add_edge(self, vertex1, vertex2):
        """Add an edge between vertex1 and vertex2."""
        # Add vertices if they don't exist
        self.add_vertex(vertex1)
        self.add_vertex(vertex2)
        
        # Add the edges
        self.graph[vertex1].append(vertex2)
        if not self.directed:
            self.graph[vertex2].append(vertex1)
    
    def get_neighbors(self, vertex):
        """Get all neighbors of a vertex."""
        return self.graph.get(vertex, [])

# Example usage
# Create an undirected graph
g = Graph()

# Add edges
g.add_edge(0, 1)
g.add_edge(0, 2)
g.add_edge(1, 2)
g.add_edge(2, 3)

# Print adjacency list
for vertex in g.graph:
    print(f"Vertex {vertex} neighbors: {g.get_neighbors(vertex)}")

# Create a directed graph
dg = Graph(directed=True)
dg.add_edge(0, 1)  # Only creates edge 0 -> 1
dg.add_edge(1, 2)  # Only creates edge 1 -> 2

# Print adjacency list
for vertex in dg.graph:
    print(f"Vertex {vertex} neighbors: {dg.get_neighbors(vertex)}")`,
  exercises: [
    {
      prompt: 'Implement an undirected graph using adjacency list and add edges to create a simple triangle (vertices 0, 1, 2 all connected to each other).',
      initialCode: `# Write your solution here
class Graph:
    def __init__(self):
        self.graph = {}
    
    def add_edge(self, v1, v2):
        # Your code here
        pass`,
      solution: `class Graph:
    def __init__(self):
        self.graph = {}
    
    def add_edge(self, v1, v2):
        # Add vertices if they don't exist
        if v1 not in self.graph:
            self.graph[v1] = []
        if v2 not in self.graph:
            self.graph[v2] = []
        
        # Add edges in both directions
        self.graph[v1].append(v2)
        self.graph[v2].append(v1)

# Create the triangle
g = Graph()
g.add_edge(0, 1)
g.add_edge(1, 2)
g.add_edge(2, 0)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Implement a method to check if an edge exists between two vertices in an undirected graph.',
      initialCode: `class Graph:
    def __init__(self):
        self.graph = {}
    
    def has_edge(self, v1, v2):
        # Your code here
        pass`,
      solution: `class Graph:
    def __init__(self):
        self.graph = {}
    
    def has_edge(self, v1, v2):
        # Check if vertices exist
        if v1 not in self.graph or v2 not in self.graph:
            return False
        
        # Check if edge exists in either direction
        return v2 in self.graph[v1] or v1 in self.graph[v2]`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'What is the main difference between directed and undirected graphs?',
      options: [
        'Directed graphs can only have two vertices',
        'Undirected graphs cannot have cycles',
        'Directed graphs have one-way edges while undirected have two-way connections',
        'Directed graphs cannot be weighted'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Both directed and undirected graphs can have any number of vertices.',
        'Incorrect. Undirected graphs can have cycles.',
        'Correct! In directed graphs, edges have a direction (A→B), while in undirected graphs, edges are bidirectional (A↔B).',
        'Incorrect. Both directed and undirected graphs can be weighted.'
      ],
      difficulty: Difficulty.Beginner
    },
    {
      question: 'Which graph representation is more space-efficient for sparse graphs?',
      options: [
        'Adjacency Matrix',
        'Adjacency List',
        'Both use the same space',
        'It depends on the number of vertices'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Adjacency Matrix always uses O(V²) space.',
        'Correct! Adjacency List uses O(V + E) space, which is more efficient for sparse graphs where E << V².',
        'Incorrect. They have different space complexities.',
        'Incorrect. While both depend on V, Adjacency List is always more efficient for sparse graphs.'
      ],
      difficulty: Difficulty.Intermediate
    },
    {
      question: 'What is the time complexity of finding all neighbors of a vertex in an adjacency list representation?',
      options: [
        'O(1)',
        'O(V)',
        'O(E)',
        'O(degree of vertex)'
      ],
      correctAnswer: 3,
      explanations: [
        'Incorrect. Finding neighbors requires traversing the vertex\'s adjacency list.',
        'Incorrect. We only need to traverse the edges connected to the vertex.',
        'Incorrect. We only look at edges connected to the specific vertex.',
        'Correct! We only need to traverse the list of adjacent vertices, which is equal to the vertex\'s degree.'
      ],
      difficulty: Difficulty.Intermediate
    }
  ]
};

const graphRepresentationData = {
  title: 'Graph Representation Implementation',
  content: `<p>
Understanding how to represent graphs in code is fundamental to solving graph problems effectively. Let's explore the two main approaches through a practical example of modeling a small social network where users can follow each other.
</p>

<p>
Imagine we have a small social network with four users (numbered 0-3). User 0 follows Users 1 and 2, User 1 follows User 2, and Users 2 and 3 follow each other. This real-world scenario will help us understand the trade-offs between different representations.
</p>

<h3><u>Adjacency Matrix Representation</u></h3>

<p>
An adjacency matrix uses a 2D array where matrix[i][j] indicates if there's an edge from vertex i to vertex j. Think of it as a grid where each cell answers the question: "Does row vertex connect to column vertex?"
</p>

<p>For our social network example:</p>
<pre>
    0  1  2  3
0   0  1  1  0   # User 0 follows 1 and 2
1   0  0  1  0   # User 1 follows 2
2   0  0  0  1   # User 2 follows 3
3   0  0  1  0   # User 3 follows 2
</pre>

<h4><b>Advantages of Adjacency Matrix:</b></h4>
<li>Constant-time O(1) edge lookup</li>
<li>Simple to implement and understand</li>
<li>Efficient for dense graphs where most vertices are connected</li>
<li>Easy to implement graph algorithms that require frequent edge weight updates</li>

<h4><b>Disadvantages of Adjacency Matrix:</b></h4>
<li>Uses O(V²) space regardless of number of edges</li>
<li>Wastes space for sparse graphs</li>
<li>Requires O(V²) time to initialize</li>

<h3><u>Adjacency List Representation</u></h3>

<p>
An adjacency list uses an array or dictionary where each index/key stores a list of its neighboring vertices. Think of it as each vertex maintaining a "friends list" of vertices it connects to.
</p>

<p>For our social network example:</p>
<pre>
0 -> [1, 2]    # User 0's following list
1 -> [2]       # User 1's following list
2 -> [3]       # User 2's following list
3 -> [2]       # User 3's following list
</pre>

<h4><b>Advantages of Adjacency List:</b></h4>
<li>Space-efficient for sparse graphs: O(V + E)</li>
<li>Faster iteration over all edges</li>
<li>More efficient for most graph algorithms</li>

<h4><b>Disadvantages of Adjacency List:</b></h4>
<li>Slower edge lookup: O(degree) in worst case</li>
<li>More complex to implement</li>
<li>Less cache-friendly due to non-continuous memory storage</li>

<h3><u>When to Use Each</u></h3>
<table>
<tr><th>Use Adjacency Matrix When</th><th>Use Adjacency List When</th></tr>
<tr>
  <td>Graph is dense (E ≈ V²)</td>
  <td>Graph is sparse (E << V²)</td>
</tr>
<tr>
  <td>Need fast edge weight updates</td>
  <td>Need to save space</td>
</tr>
<tr>
  <td>Need constant-time edge lookup</td>
  <td>Need fast iteration over edges</td>
</tr>
<tr>
  <td>Graph is small (V < 1000)</td>
  <td>Graph is large</td>
</tr>
</table>`,

  codeExample: `# Implementing both representations for comparison
class GraphMatrix:
    """Graph representation using adjacency matrix"""
    def __init__(self, num_vertices):
        # Initialize V x V matrix with zeros
        self.V = num_vertices
        self.graph = [[0 for _ in range(num_vertices)] for _ in range(num_vertices)]
    
    def add_edge(self, from_vertex, to_vertex, weight=1):
        """Add an edge from source to destination vertex"""
        if 0 <= from_vertex < self.V and 0 <= to_vertex < self.V:
            self.graph[from_vertex][to_vertex] = weight
    
    def has_edge(self, from_vertex, to_vertex):
        """Check if edge exists between vertices in O(1) time"""
        if 0 <= from_vertex < self.V and 0 <= to_vertex < self.V:
            return bool(self.graph[from_vertex][to_vertex])
        return False
    
    def get_neighbors(self, vertex):
        """Get all vertices that vertex connects to"""
        if 0 <= vertex < self.V:
            return [i for i in range(self.V) if self.graph[vertex][i]]
        return []

class GraphList:
    """Graph representation using adjacency list"""
    def __init__(self):
        # Initialize empty dictionary for adjacency lists
        self.graph = {}
    
    def add_vertex(self, vertex):
        """Add a new vertex to the graph"""
        if vertex not in self.graph:
            self.graph[vertex] = []
    
    def add_edge(self, from_vertex, to_vertex):
        """Add an edge from source to destination vertex"""
        # Add vertices if they don't exist
        self.add_vertex(from_vertex)
        self.add_vertex(to_vertex)
        # Add the edge
        if to_vertex not in self.graph[from_vertex]:
            self.graph[from_vertex].append(to_vertex)
    
    def has_edge(self, from_vertex, to_vertex):
        """Check if edge exists between vertices in O(degree) time"""
        return from_vertex in self.graph and to_vertex in self.graph[from_vertex]
    
    def get_neighbors(self, vertex):
        """Get all vertices that vertex connects to"""
        return self.graph.get(vertex, [])

# Example usage comparing both implementations
def compare_representations():
    # Create social network using both representations
    matrix_graph = GraphMatrix(4)
    list_graph = GraphList()
    
    # Add edges representing our social network
    edges = [(0,1), (0,2), (1,2), (2,3), (3,2)]
    
    # Add to matrix representation
    for from_v, to_v in edges:
        matrix_graph.add_edge(from_v, to_v)
    
    # Add to list representation
    for from_v, to_v in edges:
        list_graph.add_edge(from_v, to_v)
    
    # Compare operations
    vertex = 0
    print(f"Matrix neighbors of {vertex}: {matrix_graph.get_neighbors(vertex)}")
    print(f"List neighbors of {vertex}: {list_graph.get_neighbors(vertex)}")
    
    # Compare edge checking
    print(f"Matrix has edge 0->1: {matrix_graph.has_edge(0,1)}")
    print(f"List has edge 0->1: {list_graph.has_edge(0,1)}")

# Run comparison
compare_representations()`,

  exercises: [
    {
      prompt: 'Implement a method in the GraphMatrix class to count the total number of edges in the graph. Remember that in a directed graph, each 1 in the matrix represents one edge.',
      initialCode: `class GraphMatrix:
    def __init__(self, num_vertices):
        self.V = num_vertices
        self.graph = [[0 for _ in range(num_vertices)] for _ in range(num_vertices)]
    
    def count_edges(self):
        # Your code here
        pass`,
      solution: `class GraphMatrix:
    def __init__(self, num_vertices):
        self.V = num_vertices
        self.graph = [[0 for _ in range(num_vertices)] for _ in range(num_vertices)]
    
    def count_edges(self):
        edge_count = 0
        for i in range(self.V):
            for j in range(self.V):
                if self.graph[i][j]:
                    edge_count += 1
        return edge_count`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Implement a method in the GraphList class to convert the adjacency list representation to an adjacency matrix. Assume all vertex IDs are consecutive integers starting from 0.',
      initialCode: `class GraphList:
    def __init__(self):
        self.graph = {}
    
    def to_matrix(self):
        # Your code here
        pass`,
      solution: `class GraphList:
    def __init__(self):
        self.graph = {}
    
    def to_matrix(self):
        # Find the number of vertices
        num_vertices = max(max(self.graph.keys()), 
                         max([v for neighbors in self.graph.values() 
                             for v in neighbors])) + 1
        
        # Create empty matrix
        matrix = [[0 for _ in range(num_vertices)] 
                 for _ in range(num_vertices)]
        
        # Fill matrix based on adjacency lists
        for vertex in self.graph:
            for neighbor in self.graph[vertex]:
                matrix[vertex][neighbor] = 1
                
        return matrix`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement a method in both graph classes to find the vertex with the highest out-degree (most outgoing edges).',
      initialCode: `def find_highest_degree_vertex(graph):
    # Your code here - should work with either GraphMatrix or GraphList
    pass`,
      solution: `def find_highest_degree_vertex(graph):
    if isinstance(graph, GraphMatrix):
        max_degree = -1
        max_vertex = -1
        for i in range(graph.V):
            degree = sum(graph.graph[i])
            if degree > max_degree:
                max_degree = degree
                max_vertex = i
        return max_vertex
    
    elif isinstance(graph, GraphList):
        max_degree = -1
        max_vertex = -1
        for vertex in graph.graph:
            degree = len(graph.graph[vertex])
            if degree > max_degree:
                max_degree = degree
                max_vertex = vertex
        return max_vertex
    
    return None  # Invalid graph type`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'For a graph with 1000 vertices and only 2000 edges, which representation would typically be more space-efficient?',
      options: [
        'Adjacency Matrix because it\'s simpler to implement',
        'Adjacency List because the graph is sparse',
        'Both would use the same amount of space',
        'It depends on the type of edges'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Implementation simplicity doesn\'t affect space efficiency.',
        'Correct! An adjacency list would use O(V + E) = O(3000) space, while matrix would use O(V²) = O(1,000,000) space.',
        'Incorrect. They have different space complexities.',
        'Incorrect. The space efficiency depends on the number of vertices and edges, not their type.'
      ],
      difficulty: Difficulty.Beginner
    },
    {
      question: 'What is the time complexity of checking if there is an edge between two vertices in an adjacency list representation?',
      options: [
        'O(1) always',
        'O(V) in worst case',
        'O(E) in worst case',
        'O(degree of vertex) in worst case'
      ],
      correctAnswer: 3,
      explanations: [
        'Incorrect. We need to search through the adjacency list.',
        'Incorrect. We only need to search through one vertex\'s neighbors.',
        'Incorrect. We only search through one vertex\'s edges.',
        'Correct! We need to search through all neighbors of the source vertex.'
      ],
      difficulty: Difficulty.Intermediate
    },
    {
      question: 'When implementing a dense graph where edge weights need frequent updates, which representation is more suitable?',
      options: [
        'Adjacency List because it\'s more space-efficient',
        'Adjacency Matrix because of O(1) access and update time',
        'Either one would work equally well',
        'Neither, a different representation would be needed'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Space efficiency is less important for dense graphs.',
        'Correct! Adjacency matrix provides constant-time access and updates to edge weights.',
        'Incorrect. Matrix representation has clear advantages for this use case.',
        'Incorrect. These are the two main representations and matrix works well here.'
      ],
      difficulty: Difficulty.Advanced
    }
  ]
};

const buildingGraphsData = {
  title: 'Converting Problems into Graph Representations',
  content: `<p>
One of the most challenging aspects of graph problems isn't implementing the algorithms - it's recognizing when and how to model the problem as a graph. Let's develop a systematic approach to building graphs from problem descriptions.
</p>

<h3><u>The Graph Building Framework</u></h3>

<p>When approaching a problem, ask yourself these key questions:</p>

<h4><b>1. What do the vertices represent?</b></h4>
<p>Look for discrete elements that could be nodes:</p>
<li>Individual items (cities, people, tasks)</li>
<li>States in a system (game positions, conditions)</li>
<li>Points in time or space (coordinates, timestamps)</li>
<li>Combined elements (pairs, groups, intervals)</li>

<h4><b>2. What do the edges represent?</b></h4>
<p>Look for relationships or transitions between vertices:</p>
<li>Direct connections (roads, friendships)</li>
<li>Dependencies (prerequisites, hierarchies)</li>
<li>Transformations (state changes, moves)</li>
<li>Flow of resources (network capacity, information)</li>

<h4><b>3. What properties matter?</b></h4>
<p>Consider the characteristics needed:</p>
<li>Direction (one-way vs. two-way relationships)</li>
<li>Weights (distances, costs, capacities)</li>
<li>Constraints (limits, restrictions)</li>
<li>Special conditions (cycles, paths, connectivity)</li>

<h3><u>Common Problem Patterns</u></h3>

<h4><b>1. Connectivity Problems</b></h4>
<p>
Example: "Given a list of friendships between people, determine if person A can reach person B through their network."
</p>
<pre>
Input: [["Alice", "Bob"], ["Bob", "Charlie"], ["David", "Eve"]]
Query: Can Alice reach Charlie?

Graph Building:
- Vertices: People (Alice, Bob, Charlie, David, Eve)
- Edges: Friendships (undirected)
- Properties: Connected components matter
</pre>

<h4><b>2. Dependency Problems</b></h4>
<p>
Example: "Given a list of tasks and their prerequisites, find a valid order to complete all tasks."
</p>
<pre>
Input: [[1,0], [2,1], [3,1]]  # [task, prerequisite]
Meaning: Task 1 needs Task 0, Task 2 needs Task 1, Task 3 needs Task 1

Graph Building:
- Vertices: Tasks (0,1,2,3)
- Edges: Prerequisites (directed)
- Properties: No cycles allowed (DAG)
</pre>

<h4><b>3. State Transformation Problems</b></h4>
<p>
Example: "Given a string, what's the minimum number of character changes needed to transform it into another string?"
</p>
<pre>
Input: start = "hit", end = "cog", dictionary = ["hot","dot","dog","lot","log","cog"]

Graph Building:
- Vertices: Words in dictionary + start word
- Edges: Connect words differing by one letter
- Properties: Undirected, unweighted
</pre>

<h4><b>4. Grid Problems</b></h4>
<p>
Example: "Find the shortest path from start to end in a maze where 0 represents paths and 1 represents walls."
</p>
<pre>
Input: [
    [0,0,1],
    [1,0,0],
    [0,0,0]
]

Graph Building:
- Vertices: Cell coordinates (i,j)
- Edges: Adjacent walkable cells
- Properties: Undirected, grid constraints
</pre>`,

  codeExample: `# Demonstration of converting different problems to graphs

class GraphBuilder:
    """Helper class for converting problem inputs into graph representations"""
    
    @staticmethod
    def build_from_edge_list(edges, directed=False):
        """
        Builds graph from list of edges
        Example: [["A", "B"], ["B", "C"]] → Graph with A-B-C connections
        """
        graph = {}
        
        for v1, v2 in edges:
            # Add vertices if they don't exist
            if v1 not in graph: graph[v1] = []
            if v2 not in graph: graph[v2] = []
            
            # Add edges
            graph[v1].append(v2)
            if not directed:
                graph[v2].append(v1)
                
        return graph

    @staticmethod
    def build_from_grid(grid):
        """
        Converts a 2D grid into a graph where vertices are coordinates
        Example: [[0,0,1],[1,0,0]] → Graph with connected walkable cells
        """
        graph = {}
        rows, cols = len(grid), len(grid[0])
        
        # Helper to get valid neighbors
        def get_neighbors(i, j):
            directions = [(0,1), (1,0), (0,-1), (-1,0)]  # right, down, left, up
            neighbors = []
            
            for di, dj in directions:
                ni, nj = i + di, j + dj
                if (0 <= ni < rows and 0 <= nj < cols and grid[ni][nj] == 0):
                    neighbors.append((ni, nj))
            return neighbors
        
        # Build graph
        for i in range(rows):
            for j in range(cols):
                if grid[i][j] == 0:  # if walkable cell
                    graph[(i,j)] = get_neighbors(i, j)
                    
        return graph

    @staticmethod
    def build_from_transformations(words):
        """
        Builds graph where edges connect words that differ by one character
        Example: ["hot", "dot", "dog"] → Graph with hot-dot-dog connections
        """
        graph = {word: [] for word in words}
        
        # Helper to check if words differ by one character
        def diff_by_one(w1, w2):
            if len(w1) != len(w2): return False
            differences = 0
            for c1, c2 in zip(w1, w2):
                if c1 != c2: differences += 1
            return differences == 1
        
        # Connect words that differ by one character
        for i, word1 in enumerate(words):
            for word2 in words[i+1:]:
                if diff_by_one(word1, word2):
                    graph[word1].append(word2)
                    graph[word2].append(word1)
                    
        return graph

    @staticmethod
    def build_from_dependencies(prerequisites):
        """
        Builds directed graph from dependency pairs
        Example: [[1,0], [2,1]] → Graph showing 0 → 1 → 2 dependencies
        """
        graph = {}
        
        # Initialize graph with all tasks
        tasks = set()
        for task, prereq in prerequisites:
            tasks.add(task)
            tasks.add(prereq)
        for task in tasks:
            graph[task] = []
            
        # Add dependencies
        for task, prereq in prerequisites:
            graph[prereq].append(task)
            
        return graph`,

  exercises: [
    {
      prompt: 'Given a list of airport connections as [from, to] pairs, build a graph that represents the flight network. Include a method to find all direct destinations from an airport.',
      initialCode: `class FlightNetwork:
    def __init__(self, connections):
        self.graph = {}  # Complete this
        
    def get_destinations(self, airport):
        # Complete this
        pass`,
      solution: `class FlightNetwork:
    def __init__(self, connections):
        self.graph = {}
        # Build graph from connections
        for src, dst in connections:
            if src not in self.graph:
                self.graph[src] = []
            if dst not in self.graph:
                self.graph[dst] = []
            self.graph[src].append(dst)
    
    def get_destinations(self, airport):
        return self.graph.get(airport, [])

# Example usage:
# flights = FlightNetwork([["JFK", "LAX"], ["LAX", "SFO"], ["JFK", "LHR"]])
# print(flights.get_destinations("JFK"))  # ["LAX", "LHR"]`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Given a chess board represented as an 8x8 grid, build a graph that represents all possible moves for a knight from any position. Then find all possible positions a knight can reach in one move from a given position.',
      initialCode: `class KnightMoves:
    def __init__(self):
        self.graph = {}  # Complete this
        
    def get_possible_moves(self, position):
        # Complete this
        pass`,
      solution: `class KnightMoves:
    def __init__(self):
        self.graph = {}
        # Build graph for all board positions
        for row in range(8):
            for col in range(8):
                self.graph[(row, col)] = self._calculate_moves(row, col)
    
    def _calculate_moves(self, row, col):
        # Knight moves in L-shape: 2 in one direction, 1 in perpendicular
        moves = [
            (2,1), (2,-1), (-2,1), (-2,-1),
            (1,2), (1,-2), (-1,2), (-1,-2)
        ]
        valid_moves = []
        
        for dr, dc in moves:
            new_row, new_col = row + dr, col + dc
            if 0 <= new_row < 8 and 0 <= new_col < 8:
                valid_moves.append((new_row, new_col))
                
        return valid_moves
    
    def get_possible_moves(self, position):
        row, col = position
        return self.graph.get((row, col), [])`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'Given a problem about finding the shortest sequence of word transformations where you can change one letter at a time, what should the vertices and edges represent?',
      options: [
        'Vertices: Letters, Edges: Words containing those letters',
        'Vertices: Words, Edges: Pairs of words differing by one letter',
        'Vertices: Letter positions, Edges: Possible letter changes',
        'Vertices: Transformations, Edges: Words'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. This would make it difficult to track valid word transformations.',
        'Correct! This representation allows us to find paths between words through valid transformations.',
        'Incorrect. This would make it hard to ensure words remain valid during transformations.',
        'Incorrect. This reverses the natural relationship between words and transformations.'
      ],
      difficulty: Difficulty.Beginner
    },
    {
      question: 'In a problem about task scheduling with dependencies, why should we use a directed graph instead of an undirected graph?',
      options: [
        'Directed graphs are always more efficient',
        'To prevent cycles in the graph',
        'To represent the one-way nature of dependencies (if A needs B, B doesn\'t necessarily need A)',
        'To use less memory'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. The choice between directed and undirected depends on the problem.',
        'Incorrect. While cycle detection is important, that\'s not why we use directed graphs.',
        'Correct! Dependencies have a specific direction - if task A requires task B, that doesn\'t mean B requires A.',
        'Incorrect. Both representations use similar amounts of memory.'
      ],
      difficulty: Difficulty.Intermediate
    },
    {
      question: 'When converting a maze problem into a graph, what is the most appropriate way to represent walls?',
      options: [
        'As weighted edges with high costs',
        'As separate vertices connected to walkable spaces',
        'Simply don\'t create vertices or edges for wall positions',
        'As self-loops in the graph'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. This complicates the representation and doesn\'t prevent wall traversal.',
        'Incorrect. This adds unnecessary complexity and could allow invalid paths.',
        'Correct! By only creating vertices and edges for walkable spaces, we naturally prevent paths through walls.',
        'Incorrect. Self-loops don\'t properly represent the blocking nature of walls.'
      ],
      difficulty: Difficulty.Intermediate
    }
  ]
};

const bfsPatternData = {
  title: 'Mastering the BFS Pattern',
  content: `<p>
Breadth-First Search (BFS) is like exploring a maze by spreading out in all directions one step at a time, rather than going deep down a single path. Imagine dropping a pebble in a pond - the ripples spread out in concentric circles, reaching points at the same distance before moving further out. This is exactly how BFS works!
</p>

<h3><u>Understanding BFS Fundamentals</u></h3>

<p>
The core idea of BFS is to explore all nodes at the current distance from the starting point before moving to nodes that are farther away. This property makes BFS perfect for finding shortest paths and exploring levels in a structured way.
</p>

<h4><b>The BFS Template</b></h4>
<p>Every BFS solution follows this general pattern:</p>

1. Initialize a queue with the starting point(s)
2. Track visited nodes to avoid cycles
3. While the queue isn't empty:
   - Get the next node to explore
   - Process current node if needed
   - Add unvisited neighbors to queue

<h4><b>Key Properties That Make BFS Useful</b></h4>
<li>Guarantees shortest path in unweighted graphs</li>
<li>Explores nodes level by level</li>
<li>Uses extra memory for queue but avoids deep recursion</li>
<li>Perfect for problems involving "minimum steps" or "nearest" concepts</li>

<h3><u>Common BFS Problem Patterns</u></h3>

<h4><b>1. Shortest Path Problems</b></h4>
<p>
Example: "Find the shortest path from start to end in a maze."
</p>
<pre>
Input: 
[
    [0, 0, 0, 1],
    [1, 1, 0, 1],
    [0, 0, 0, 0]
]
Start: (0,0), End: (2,3)

Key Implementation Points:
- Track distance at each step
- Mark cells as visited to avoid cycles
- Check valid moves in all directions
</pre>

<h4><b>2. Level Order Problems</b></h4>
<p>
Example: "Process a tree level by level, like printing a binary tree's nodes by level."
</p>
<pre>
Input:
     1
   /   \
  2     3
 / \   /
4   5 6

Key Implementation Points:
- Process entire level before moving to next
- Track level size in queue
- Maintain level information
</pre>

<h4><b>3. Multi-Source BFS</b></h4>
<p>
Example: "Find the distance of each land cell from nearest water cell in a grid."
</p>
<pre>
Input:
[
    [W, L, L],
    [L, L, L],
    [L, L, W]
]
W = Water, L = Land

Key Implementation Points:
- Start with all sources in queue
- Update distances as you go
- Process multiple starting points simultaneously
</pre>

<h3><u>When to Use BFS</u></h3>

<p>Consider BFS when you see these problem characteristics:</p>

<h4><b>Definite Signs:</b></h4>
<li>Problem asks for "shortest path" or "minimum steps"</li>
<li>Need to process elements "level by level"</li>
<li>Finding "nearest" or "minimum distance" to something</li>
<li>Graph/tree traversal where distance matters</li>

<h4><b>Possible Signs:</b></h4>
<li>Grid-based problems with movement in multiple directions</li>
<li>Problems involving "spreading" or "infection" patterns</li>
<li>Finding all points within a certain distance</li>
<li>State transformation problems with equal cost moves</li>`,

  codeExample: `# Comprehensive implementation of common BFS patterns

from collections import deque
from typing import List, Tuple, Optional

class BFSPatterns:
    """Collection of common BFS pattern implementations"""
    
    def shortest_path_grid(self, grid: List[List[int]], start: Tuple[int, int], 
                          end: Tuple[int, int]) -> int:
        """
        Find shortest path length from start to end in a grid.
        0 represents walkable cells, 1 represents walls.
        Returns -1 if no path exists.
        """
        if not grid or not grid[0]:
            return -1
            
        rows, cols = len(grid), len(grid[0])
        queue = deque([(start[0], start[1], 0)])  # (row, col, distance)
        visited = {start}  # Track visited cells
        directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]  # right, down, left, up
        
        while queue:
            row, col, distance = queue.popleft()
            
            # Check if we reached the end
            if (row, col) == end:
                return distance
            
            # Explore all four directions
            for dx, dy in directions:
                new_row, new_col = row + dx, col + dy
                new_pos = (new_row, new_col)
                
                # Check if move is valid and cell hasn't been visited
                if (0 <= new_row < rows and 
                    0 <= new_col < cols and 
                    grid[new_row][new_col] == 0 and 
                    new_pos not in visited):
                    
                    visited.add(new_pos)
                    queue.append((new_row, new_col, distance + 1))
        
        return -1  # No path found
    
    def level_order_traversal(self, root: 'TreeNode') -> List[List[int]]:
        """
        Process a binary tree level by level.
        Returns list of levels, where each level is a list of node values.
        """
        if not root:
            return []
            
        result = []
        queue = deque([root])
        
        while queue:
            level_size = len(queue)  # Number of nodes at current level
            current_level = []
            
            # Process all nodes at current level
            for _ in range(level_size):
                node = queue.popleft()
                current_level.append(node.val)
                
                # Add children for next level
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            
            result.append(current_level)
        
        return result
    
    def multi_source_bfs(self, grid: List[List[str]]) -> List[List[int]]:
        """
        Find distance of each land cell to nearest water cell.
        'W' represents water, 'L' represents land.
        Returns grid where each cell contains distance to nearest water.
        """
        if not grid or not grid[0]:
            return []
            
        rows, cols = len(grid), len(grid[0])
        distances = [[float('inf')] * cols for _ in range(rows)]
        queue = deque()
        
        # Add all water cells as starting points
        for i in range(rows):
            for j in range(cols):
                if grid[i][j] == 'W':
                    distances[i][j] = 0
                    queue.append((i, j))
        
        directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]
        
        # Process all cells, spreading out from water
        while queue:
            row, col = queue.popleft()
            
            for dx, dy in directions:
                new_row, new_col = row + dx, col + dy
                
                # Check if move is valid and improves distance
                if (0 <= new_row < rows and 
                    0 <= new_col < cols and 
                    distances[new_row][new_col] == float('inf')):
                    
                    distances[new_row][new_col] = distances[row][col] + 1
                    queue.append((new_row, new_col))
        
        return distances`,

  exercises: [
    {
      prompt: 'Implement a function that finds the minimum number of steps needed to transform one word into another, given a dictionary of valid words. You can change one letter at a time, and each intermediate word must be in the dictionary.',
      initialCode: `def word_ladder(start: str, end: str, dictionary: List[str]) -> int:
    """
    Returns minimum steps to transform start into end.
    Returns -1 if transformation is impossible.
    Example:
    start = "hit", end = "cog", dictionary = ["hot","dot","dog","lot","log","cog"]
    Returns: 5 (hit -> hot -> dot -> dog -> cog)
    """
    # Your code here
    pass`,
      solution: `def word_ladder(start: str, end: str, dictionary: List[str]) -> int:
    # Add start word to dictionary
    dictionary = set(dictionary)
    dictionary.add(start)
    
    if end not in dictionary:
        return -1
    
    queue = deque([(start, 1)])  # (word, steps)
    visited = {start}
    
    while queue:
        word, steps = queue.popleft()
        
        # Try changing each character
        for i in range(len(word)):
            # Try all possible letters
            for c in 'abcdefghijklmnopqrstuvwxyz':
                new_word = word[:i] + c + word[i+1:]
                
                if new_word == end:
                    return steps
                
                if new_word in dictionary and new_word not in visited:
                    visited.add(new_word)
                    queue.append((new_word, steps + 1))
    
    return -1`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement a function that finds the nearest exit from a maze. The maze is represented as a grid where 0 is a walkable cell and 1 is a wall. An exit is any walkable cell on the border of the grid. Return the minimum steps needed to reach any exit from the starting position.',
      initialCode: `def nearest_exit(maze: List[List[int]], start: Tuple[int, int]) -> int:
    """
    Returns minimum steps to reach any exit.
    Returns -1 if no exit is reachable.
    Example:
    maze = [
        [0,0,0,1],
        [1,1,0,1],
        [0,0,0,0]
    ]
    start = (1,2)
    Returns: 2
    """
    # Your code here
    pass`,
      solution: `def nearest_exit(maze: List[List[int]], start: Tuple[int, int]) -> int:
    rows, cols = len(maze), len(maze[0])
    queue = deque([(start[0], start[1], 0)])  # (row, col, steps)
    visited = {start}
    directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]
    
    def is_exit(row: int, col: int) -> bool:
        # Cell must be on border and not the starting position
        return ((row == 0 or row == rows - 1 or 
                col == 0 or col == cols - 1) and 
                (row, col) != start)
    
    while queue:
        row, col, steps = queue.popleft()
        
        # Check if current cell is an exit
        if is_exit(row, col):
            return steps
        
        # Try all directions
        for dx, dy in directions:
            new_row, new_col = row + dx, col + dy
            new_pos = (new_row, new_col)
            
            if (0 <= new_row < rows and 
                0 <= new_col < cols and 
                maze[new_row][new_col] == 0 and 
                new_pos not in visited):
                
                visited.add(new_pos)
                queue.append((new_row, new_col, steps + 1))
    
    return -1`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why does BFS guarantee the shortest path in an unweighted graph?',
      options: [
        'Because it uses less memory than DFS',
        'Because it explores all possible paths simultaneously',
        'Because it visits nodes in order of increasing distance from the start',
        'Because it marks nodes as visited'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Memory usage doesn\'t affect path finding accuracy.',
        'Incorrect. While BFS does explore multiple paths, this isn\'t why it guarantees shortest path.',
        'Correct! BFS explores nodes in layers, so it always finds the shortest path to a node before finding any longer paths.',
        'Incorrect. Marking nodes as visited prevents cycles but doesn\'t guarantee shortest paths.'
      ],
      difficulty: Difficulty.Beginner
    },
    {
      question: 'In a binary tree level-order traversal, why do we need to track the size of each level?',
      options: [
        'To optimize memory usage',
        'To prevent infinite loops',
        'To know how many nodes to process before moving to the next level',
        'To detect leaf nodes'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Level size tracking isn\'t related to memory optimization.',
        'Incorrect. Infinite loops are prevented by the tree structure itself.',
        'Correct! We need to know how many nodes are at the current level to process them together before moving to their children.',
        'Incorrect. Leaf nodes can be detected by checking for null children.'
      ],
      difficulty: Difficulty.Intermediate
    },
    {
      question: 'What is the advantage of multi-source BFS over running single-source BFS multiple times?',
      options: [
        'It uses less memory',
        'It processes overlapping regions only once',
        'It requires fewer queue operations',
        'It prevents infinite loops'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Multi-source BFS might actually use more memory initially.',
        'Correct! By processing all sources simultaneously, areas reachable from multiple sources are processed only once, making it more efficient.',
        'Incorrect. The total number of queue operations might be similar.',
        'Incorrect. Both approaches can handle cycles properly.'
      ],
      difficulty: Difficulty.Advanced
    }
  ]
};

const dfsPatternData = {
  title: 'Mastering the DFS Pattern',
  content: `<p>
Imagine exploring a vast cave system with a single flashlight. Instead of looking at all nearby passages before going deeper, you pick one passage and follow it as far as it goes. When you reach a dead end, you backtrack to the last junction and try a different path. This is exactly how Depth-First Search (DFS) works - it explores deeply into a structure before backtracking to explore other paths.
</p>

<h3><u>Understanding DFS Fundamentals</u></h3>

<p>
DFS excels at exhaustive exploration and path finding. Its natural recursive structure makes it particularly powerful for problems involving backtracking or exhaustive search. Unlike BFS's level-by-level approach, DFS dives deep first, making it memory-efficient but not guaranteed to find the shortest path.
</p>

<h4><b>The DFS Template</b></h4>
<p>
DFS typically follows this recursive pattern:
</p>

1. Check base cases (success or failure conditions)
2. Mark current node as visited
3. For each unvisited neighbor:
   - Recursively explore that neighbor
   - Backtrack if needed (undo changes)
4. Return result

<p>
DFS can be implemented either recursively or iteratively using a stack. The recursive approach often leads to cleaner, more intuitive code, while the iterative approach might be necessary for very deep structures to avoid stack overflow.
</p>

<h3><u>Common DFS Problem Patterns</u></h3>

<h4><b>1. Path Finding Problems</b></h4>
<p>
Finding paths with specific properties, like paths with maximum score or paths following certain rules.
</p>
<pre>
Example: Find all paths from root to leaf in a binary tree with sum equal to a target.

      10
     /  \
    5    15
   / \    \
  3   7    18

Target = 18
Valid paths: 10->5->3 and 10->15->18

Key Implementation Points:
- Track current path and sum
- Backtrack by removing elements from path
- Consider all possible choices at each step
</pre>

<h4><b>2. Grid/Matrix Exploration</b></h4>
<p>
Problems involving connected regions or exploring grid-based structures.
</p>
<pre>
Example: Count number of islands (connected 1's) in a binary grid.

1 1 0 0 0
1 1 0 0 0
0 0 1 0 0
0 0 0 1 1

Answer: 3 islands

Key Implementation Points:
- Mark visited cells to avoid cycles
- Explore in all valid directions
- Consider boundary conditions
</pre>

<h4><b>3. Backtracking Problems</b></h4>
<p>
Problems requiring trying multiple possibilities and undoing choices that don't work.
</p>
<pre>
Example: Generate all valid combinations of N pairs of parentheses.

N = 2
Output: ["(())", "()()"]

Key Implementation Points:
- Track current state (open/close counts)
- Make valid choices only
- Backtrack to try different choices
</pre>

<h3><u>When to Use DFS</u></h3>

<p>Consider DFS when you encounter these characteristics:</p>

<h4><b>Definite Signs:</b></h4>
<li>Need to find all possible solutions</li>
<li>Problems involving paths or sequences</li>
<li>Need to explore exhaustively</li>
<li>Detecting cycles or validating structures</li>

<h4><b>Problem-Specific Indicators:</b></h4>
<li>Tree/Graph problems requiring complete traversal</li>
<li>Problems involving combinations or permutations</li>
<li>Connected component or flood fill problems</li>
<li>Problems requiring backtracking</li>`,

  codeExample: `# Comprehensive implementation of common DFS patterns

from typing import List, Set, Dict

class DFSPatterns:
    """Collection of common DFS pattern implementations"""
    
    def path_sum_tree(self, root: 'TreeNode', target: int) -> List[List[int]]:
        """
        Find all root-to-leaf paths that sum to target.
        Returns list of valid paths, where each path is a list of node values.
        """
        def dfs(node: 'TreeNode', remaining: int, current_path: List[int], 
                result: List[List[int]]) -> None:
            if not node:
                return
                
            # Add current node to path
            current_path.append(node.val)
            
            # Check if we've reached a leaf with correct sum
            if not node.left and not node.right and remaining == node.val:
                result.append(current_path[:])  # Add copy of current path
            
            # Recurse on children with updated remaining sum
            dfs(node.left, remaining - node.val, current_path, result)
            dfs(node.right, remaining - node.val, current_path, result)
            
            # Backtrack: remove current node from path
            current_path.pop()
        
        result = []
        dfs(root, target, [], result)
        return result
    
    def count_islands(self, grid: List[List[int]]) -> int:
        """
        Count number of islands (connected 1's) in binary grid.
        Uses DFS to explore each island fully when found.
        """
        if not grid or not grid[0]:
            return 0
            
        rows, cols = len(grid), len(grid[0])
        islands = 0
        
        def explore_island(row: int, col: int) -> None:
            # Check boundaries and if current cell is land
            if (row < 0 or row >= rows or col < 0 or col >= cols or 
                grid[row][col] != 1):
                return
            
            # Mark current cell as visited by changing it to 0
            grid[row][col] = 0
            
            # Explore all adjacent cells
            directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]
            for dx, dy in directions:
                explore_island(row + dx, col + dy)
        
        # Search for unvisited islands
        for i in range(rows):
            for j in range(cols):
                if grid[i][j] == 1:
                    islands += 1
                    explore_island(i, j)  # Explore entire island
        
        return islands
    
    def generate_parentheses(self, n: int) -> List[str]:
        """
        Generate all valid combinations of n pairs of parentheses.
        Uses DFS with backtracking to build valid combinations.
        """
        def dfs(open_count: int, close_count: int, current: str, 
                result: List[str]) -> None:
            # Base case: valid combination found
            if len(current) == 2 * n:
                result.append(current)
                return
            
            # Try adding open parenthesis if we have any left
            if open_count < n:
                dfs(open_count + 1, close_count, current + '(', result)
            
            # Try adding close parenthesis if it's valid
            if close_count < open_count:
                dfs(open_count, close_count + 1, current + ')', result)
        
        result = []
        dfs(0, 0, '', result)
        return result`,

  exercises: [
    {
      prompt: 'Implement a function that finds if there exists a path in a binary tree where the sum of values equals a target. Return true if such a path exists, false otherwise.',
      initialCode: `def has_path_sum(root: 'TreeNode', target: int) -> bool:
    """
    Determine if the tree has a root-to-leaf path summing to target.
    """
    # Your code here
    pass`,
      solution: `def has_path_sum(root: 'TreeNode', target: int) -> bool:
    if not root:
        return False
    
    # Base case: leaf node
    if not root.left and not root.right:
        return target == root.val
    
    # Recursively check children with updated target
    remaining = target - root.val
    return (has_path_sum(root.left, remaining) or 
            has_path_sum(root.right, remaining))`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Implement a function that finds the size of the largest connected component of 1\'s in a binary grid. Cells are connected if they are adjacent horizontally or vertically.',
      initialCode: `def largest_island(grid: List[List[int]]) -> int:
    """
    Find size of largest connected component of 1's.
    Returns 0 if no 1's exist.
    """
    # Your code here
    pass`,
      solution: `def largest_island(grid: List[List[int]]) -> int:
    if not grid or not grid[0]:
        return 0
        
    rows, cols = len(grid), len(grid[0])
    max_size = 0
    
    def explore_island(row: int, col: int) -> int:
        if (row < 0 or row >= rows or col < 0 or col >= cols or 
            grid[row][col] != 1):
            return 0
        
        # Mark as visited
        grid[row][col] = 0
        size = 1
        
        # Explore in all directions
        directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]
        for dx, dy in directions:
            size += explore_island(row + dx, col + dy)
        
        return size
    
    # Search for islands
    for i in range(rows):
        for j in range(cols):
            if grid[i][j] == 1:
                max_size = max(max_size, explore_island(i, j))
    
    return max_size`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'Why might DFS be preferred over BFS for finding all possible paths in a graph?',
      options: [
        'Because DFS is always faster than BFS',
        'Because DFS naturally maintains the current path during traversal',
        'Because DFS uses less memory overall',
        'Because DFS always finds shorter paths'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. The speed depends on the specific problem and graph structure.',
        'Correct! DFS naturally maintains the current path as it explores deeply, making it easier to track and backtrack paths.',
        'Incorrect. While DFS often uses less memory, this isn\'t why it\'s better for path finding.',
        'Incorrect. DFS doesn\'t guarantee finding shorter paths.'
      ],
      difficulty: Difficulty.Beginner
    },
    {
      question: 'What is the key difference between using DFS for tree traversal versus graph traversal?',
      options: [
        'DFS can\'t be used on graphs',
        'Tree traversal doesn\'t need a visited set',
        'Graph traversal is always faster',
        'Trees use more memory for DFS'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. DFS works well on both trees and graphs.',
        'Correct! Trees don\'t have cycles, so we don\'t need to track visited nodes, unlike graphs where we must prevent infinite loops.',
        'Incorrect. Speed depends on the specific structure and problem.',
        'Incorrect. Trees typically use less memory than graphs for traversal.'
      ],
      difficulty: Difficulty.Intermediate
    },
    {
      question: 'In backtracking problems using DFS, why is it important to undo changes after exploring a path?',
      options: [
        'To save memory',
        'To improve performance',
        'To explore all possible combinations correctly',
        'To reduce code complexity'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Undoing changes isn\'t primarily about memory management.',
        'Incorrect. While it might affect performance, this isn\'t the main reason.',
        'Correct! Backtracking ensures we restore the state properly to explore all possibilities without interference from previous attempts.',
        'Incorrect. Backtracking actually adds some complexity to the implementation.'
      ],
      difficulty: Difficulty.Advanced
    }
  ]
};

const matrixTraversalData = {
  title: 'Matrix as Graph: A Unified Approach',
  content: `<p>
Imagine a chess board where each square can connect to its neighbors. By thinking of a matrix as a graph, where each cell is a vertex that connects to adjacent cells, we unlock powerful graph traversal techniques to solve matrix problems. This mental model transforms seemingly complex matrix problems into familiar graph patterns.
</p>

<h3><u>The Matrix-Graph Connection</u></h3>

<p>
In a matrix, each cell can be thought of as a vertex in a graph, with edges to its neighboring cells. This transformation gives us several key insights:
</p>

<li>Each cell (i,j) becomes a unique vertex</li>
<li>Adjacent cells become connected vertices</li>
<li>Cell values become vertex properties</li>
<li>Valid moves become edge definitions</li>

<p>
For example, in a typical matrix problem allowing movement in four directions:
</p>
<pre>
Matrix:         Graph Representation:
1 2 3          (0,0) --- (0,1) --- (0,2)
4 5 6           |         |         |
7 8 9          (1,0) --- (1,1) --- (1,2)
                |         |         |
              (2,0) --- (2,1) --- (2,2)
</pre>

<h3><u>Core Implementation Patterns</u></h3>

<h4><b>1. Direction Arrays</b></h4>
<p>
One of the most useful patterns for matrix traversal is using direction arrays to define valid moves:
</p>
<pre>
# Four directions (Up, Right, Down, Left)
directions = [(-1,0), (0,1), (1,0), (0,-1)]

# Eight directions (including diagonals)
directions = [(-1,-1), (-1,0), (-1,1),
             (0,-1),         (0,1),
             (1,-1),  (1,0),  (1,1)]

# Knight moves
directions = [(-2,-1), (-2,1), (-1,-2), (-1,2),
             (1,-2),  (1,2),  (2,-1),  (2,1)]
</pre>

<h4><b>2. Boundary Checking</b></h4>
<p>
Matrix problems always require careful boundary checking. The standard pattern is:
</p>
<pre>
def is_valid(row: int, col: int, rows: int, cols: int) -> bool:
    return 0 <= row < rows and 0 <= col < cols
</pre>

<h3><u>Common Problem Types</u></h3>

<h4><b>1. Connected Components</b></h4>
<p>
Finding and processing connected regions in a matrix, like islands or continuous areas.
</p>
<pre>
Example: Count number of islands
1 1 0
1 0 0    Answer: 2 islands
0 0 1

Key Techniques:
- Use DFS/BFS to explore connected cells
- Mark visited cells to avoid revisiting
- Process each unvisited cell as potential start
</pre>

<h4><b>2. Path Finding</b></h4>
<p>
Finding paths with specific properties between cells.
</p>
<pre>
Example: Find shortest path through maze
S 0 1
1 1 0    S: Start, E: End
1 0 E    0: Path, 1: Wall

Key Techniques:
- Use BFS for shortest path
- Track distance/steps
- Handle obstacles/walls
</pre>

<h4><b>3. Matrix Transformation</b></h4>
<p>
Problems requiring changing the matrix based on conditions or patterns.
</p>
<pre>
Example: Flood fill from a starting point
1 1 1    Start at (1,1) with color 2
1 1 1 → 1 2 2
1 1 1    1 2 2

Key Techniques:
- Careful state tracking
- Order of processing matters
- Consider effect of changes
</pre>

<h3><u>Advanced Patterns</u></h3>

<p>Some sophisticated patterns that often appear in matrix problems:</p>

<h4><b>1. Layer-by-Layer Processing</b></h4>
<li>Processing matrix in concentric rectangles</li>
<li>Useful for spiral traversal or border processing</li>
<li>Requires careful boundary management</li>

<h4><b>2. Multiple Source Traversal</b></h4>
<li>Starting BFS/DFS from multiple points</li>
<li>Useful for distance or influence problems</li>
<li>Requires coordinated traversal tracking</li>`,

  codeExample: `# Comprehensive implementation of matrix traversal patterns

from collections import deque
from typing import List, Set, Tuple

class MatrixPatterns:
    """Collection of common matrix traversal patterns"""
    
    def __init__(self):
        # Common direction patterns
        self.FOUR_DIR = [(-1,0), (0,1), (1,0), (0,-1)]  # Up, Right, Down, Left
        self.EIGHT_DIR = [(-1,-1), (-1,0), (-1,1),
                         (0,-1),          (0,1),
                         (1,-1),  (1,0),  (1,1)]
    
    def is_valid(self, row: int, col: int, rows: int, cols: int) -> bool:
        """Check if cell coordinates are within matrix bounds"""
        return 0 <= row < rows and 0 <= col < cols
    
    def flood_fill(self, matrix: List[List[int]], start: Tuple[int, int], 
                  new_color: int) -> List[List[int]]:
        """
        Fill connected region with new color starting from given cell.
        Uses DFS for filling.
        """
        if not matrix or not matrix[0]:
            return matrix
            
        rows, cols = len(matrix), len(matrix[0])
        start_row, start_col = start
        old_color = matrix[start_row][start_col]
        
        if old_color == new_color:
            return matrix
        
        def dfs(row: int, col: int) -> None:
            # Check bounds and color match
            if not self.is_valid(row, col, rows, cols) or matrix[row][col] != old_color:
                return
            
            # Fill current cell
            matrix[row][col] = new_color
            
            # Recursively fill neighbors
            for dx, dy in self.FOUR_DIR:
                dfs(row + dx, col + dy)
        
        dfs(start_row, start_col)
        return matrix
    
    def shortest_path(self, matrix: List[List[int]], start: Tuple[int, int],
                     end: Tuple[int, int]) -> int:
        """
        Find shortest path length between start and end cells.
        Returns -1 if no path exists.
        0 represents path, 1 represents wall.
        """
        if not matrix or not matrix[0]:
            return -1
            
        rows, cols = len(matrix), len(matrix[0])
        queue = deque([(start[0], start[1], 0)])  # (row, col, distance)
        visited = {start}
        
        while queue:
            row, col, dist = queue.popleft()
            
            # Check if we reached the end
            if (row, col) == end:
                return dist
            
            # Try all four directions
            for dx, dy in self.FOUR_DIR:
                new_row, new_col = row + dx, col + dy
                new_pos = (new_row, new_col)
                
                if (self.is_valid(new_row, new_col, rows, cols) and
                    matrix[new_row][new_col] == 0 and
                    new_pos not in visited):
                    visited.add(new_pos)
                    queue.append((new_row, new_col, dist + 1))
        
        return -1
    
    def process_matrix_layers(self, matrix: List[List[int]]) -> List[int]:
        """
        Process matrix in spiral order (layer by layer).
        Returns elements in spiral order.
        """
        if not matrix or not matrix[0]:
            return []
            
        result = []
        rows, cols = len(matrix), len(matrix[0])
        left, right = 0, cols - 1
        top, bottom = 0, rows - 1
        
        while left <= right and top <= bottom:
            # Process top row
            for j in range(left, right + 1):
                result.append(matrix[top][j])
            
            # Process right column
            for i in range(top + 1, bottom + 1):
                result.append(matrix[i][right])
            
            if left < right and top < bottom:
                # Process bottom row
                for j in range(right - 1, left - 1, -1):
                    result.append(matrix[bottom][j])
                
                # Process left column
                for i in range(bottom - 1, top, -1):
                    result.append(matrix[i][left])
            
            left += 1
            right -= 1
            top += 1
            bottom -= 1
        
        return result`,

  exercises: [
    {
      prompt: 'Implement a function that determines if there exists a path from the top row to the bottom row in a binary matrix, moving only through cells containing 1s.',
      initialCode: `def exists_path(matrix: List[List[int]]) -> bool:
    """
    Return True if path exists from any cell in top row
    to any cell in bottom row through 1s.
    """
    # Your code here
    pass`,
      solution: `def exists_path(matrix: List[List[int]]) -> bool:
    if not matrix or not matrix[0]:
        return False
    
    rows, cols = len(matrix), len(matrix[0])
    visited = set()
    
    def dfs(row: int, col: int) -> bool:
        # Check bounds, value, and visited
        if (not 0 <= col < cols or 
            matrix[row][col] != 1 or 
            (row, col) in visited):
            return False
        
        # Reached bottom row
        if row == rows - 1:
            return True
        
        visited.add((row, col))
        
        # Try all possible moves
        directions = [(1,0), (0,1), (-1,0), (0,-1)]
        for dx, dy in directions:
            new_row, new_col = row + dx, col + dy
            if 0 <= new_row < rows and dfs(new_row, new_col):
                return True
        
        return False
    
    # Try starting from each cell in top row
    return any(matrix[0][j] == 1 and dfs(0, j) 
              for j in range(cols))`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement a function that finds the size of the largest connected group of 1s in a binary matrix, where cells are connected by their diagonals as well.',
      initialCode: `def largest_connected_region(matrix: List[List[int]]) -> int:
    """
    Return size of largest connected region of 1s,
    considering 8-directional connectivity.
    """
    # Your code here
    pass`,
      solution: `def largest_connected_region(matrix: List[List[int]]) -> int:
    if not matrix or not matrix[0]:
        return 0
    
    rows, cols = len(matrix), len(matrix[0])
    max_size = 0
    
    def explore_region(row: int, col: int) -> int:
        if (not 0 <= row < rows or 
            not 0 <= col < cols or 
            matrix[row][col] != 1):
            return 0
        
        # Mark as visited
        matrix[row][col] = 0
        size = 1
        
        # Explore all 8 directions
        directions = [(-1,-1), (-1,0), (-1,1),
                     (0,-1),          (0,1),
                     (1,-1),  (1,0),  (1,1)]
        
        for dx, dy in directions:
            size += explore_region(row + dx, col + dy)
        
        return size
    
    # Try each unvisited cell as potential start
    for i in range(rows):
        for j in range(cols):
            if matrix[i][j] == 1:
                max_size = max(max_size, explore_region(i, j))
    
    return max_size`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'When traversing a matrix as a graph, why do we need to track visited cells separately even though we can modify the matrix?',
      options: [
        'We don\'t need to track visited cells if we can modify the matrix',
        'To avoid modifying the original matrix',
        'To handle cases where we need to revisit cells',
        'To improve performance'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Even if we can modify the matrix, sometimes we need to preserve it.',
        'Correct! Tracking visited cells separately allows us to traverse the matrix without modifying the original data, which might be needed later.',
        'Incorrect. If we need to revisit cells, we would use a different traversal strategy.',
        'Incorrect. Using a visited set might actually use more memory.'
      ],
      difficulty: Difficulty.Beginner
    },
    {
      question: 'What is the key advantage of using direction arrays for matrix traversal?',
      options: [
        'They make the code run faster',
        'They reduce memory usage',
        'They make the code more concise and less error-prone',
        'They allow diagonal movement'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Direction arrays don\'t affect performance significantly.',
        'Incorrect. They don\'t affect memory usage significantly.',
        'Correct! Direction arrays provide a clean, systematic way to handle movement in the matrix, reducing the chance of errors and making the code more maintainable.',
        'Incorrect. While they can be used for diagonal movement, that\'s not their main advantage.'
      ],
      difficulty: Difficulty.Intermediate
    },
    {
      question: 'When processing a matrix layer by layer (like in spiral order), what is the most important consideration?',
      options: [
        'Memory usage',
        'Processing speed',
        'Boundary tracking and adjustment',
        'Direction management'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Memory usage is typically not a major concern for layer processing.',
        'Incorrect. Processing speed is usually determined by the matrix size.',
        'Correct! Carefully tracking and adjusting boundaries is crucial to avoid processing cells multiple times or missing cells.',
        'Incorrect. While direction changes matter, boundary management is more fundamental.'
      ],
      difficulty: Difficulty.Advanced
    }
  ]
};

const islandProblemsData = {
  title: 'Mastering Island Problems',
  content: `<p>
Imagine looking down at an archipelago from above, trying to count the islands and understand their shapes. This is exactly what we're doing when solving island problems - we're analyzing connected components in a grid where each cell is either land or water. These problems are beautiful because they teach us fundamental graph traversal concepts while being visually intuitive.
</p>

<p>
Let's start with a simple example to build our intuition. Consider this grid where 1 represents land and 0 represents water:
</p>

<pre>
1 1 0 0 0
1 1 0 0 0
0 0 1 0 0
0 0 0 1 1

This grid contains 3 distinct islands. But why? Because land cells are only considered part of the same island if they connect horizontally or vertically (not diagonally).
</pre>

<h3><u>Core Concepts for Solving Island Problems</u></h3>

<p>
Understanding these fundamental concepts will help us solve any island-related problem:
</p>

<h4><b>1. Connected Components</b></h4>
<p>
Each island is a connected component in graph terms. Two land cells belong to the same island if you can walk from one to the other through land cells using only up, down, left, and right movements. This is the foundation of all island problems.
</p>

<h4><b>2. Graph Traversal</b></h4>
<p>
We can use either DFS or BFS to explore an island. Think of it like a flood fill - when we find a land cell, we explore all connected land cells to "map out" the entire island. Both approaches work well:
</p>

<pre>
DFS: Like walking the island, always taking the first path you see until you hit water
BFS: Like spreading out in all directions simultaneously from each land cell
</pre>

<h4><b>3. Visited Cell Tracking</b></h4>
<p>
We need to keep track of cells we've already visited to avoid counting the same island multiple times. There are two common approaches:
</p>

<li>Modify the input grid (set visited cells to 0)</li>
<li>Use a separate visited set/matrix</li>

<h3><u>Common Island Problem Patterns</u></h3>

<h4><b>1. Basic Island Counting</b></h4>
<p>
The foundational problem: count the total number of islands in the grid. This teaches us the basic traversal pattern that we'll build upon for more complex problems.
</p>

<h4><b>2. Island Characteristics</b></h4>
<p>
Problems that ask about island properties:
</p>
<li>Maximum island size</li>
<li>Island perimeter</li>
<li>Island shapes</li>
<li>Number of distinct island shapes</li>

<h4><b>3. Island Modifications</b></h4>
<p>
Problems involving changing the grid:
</p>
<li>Removing islands of certain sizes</li>
<li>Growing or shrinking islands</li>
<li>Connecting islands</li>

<h3><u>Advanced Island Patterns</u></h3>

<h4><b>1. Multiple Colors</b></h4>
<p>
Some problems involve multiple types of land or different colors, requiring careful handling of when cells should be considered connected:
</p>
<pre>
R R B
R B B
B B R

Are all red (R) cells one island? What about blue (B) cells?
The answer depends on the problem's definition of connectivity.
</pre>

<h4><b>2. Dynamic Changes</b></h4>
<p>
Some problems involve a changing grid:
</p>
<li>Adding new land cells</li>
<li>Flooding cells (turning land to water)</li>
<li>Tracking island count as grid changes</li>`,

  codeExample: `# Comprehensive implementation of island problem patterns

from collections import deque
from typing import List, Set, Dict, Tuple

class IslandPatterns:
    """Collection of solutions for various island problems"""
    
    def __init__(self):
        # Common direction patterns
        self.FOUR_DIR = [(0, 1), (1, 0), (0, -1), (-1, 0)]  # right, down, left, up
    
    def count_islands(self, grid: List[List[int]]) -> int:
        """
        Count number of islands in binary grid.
        Uses DFS to explore and mark islands.
        Time: O(rows * cols), Space: O(rows * cols) for recursion stack
        """
        if not grid or not grid[0]:
            return 0
            
        rows, cols = len(grid), len(grid[0])
        islands = 0
        
        def explore_island(row: int, col: int) -> None:
            # Check boundaries and if cell is land
            if (row < 0 or row >= rows or col < 0 or 
                col >= cols or grid[row][col] != 1):
                return
            
            # Mark as visited by changing to water
            grid[row][col] = 0
            
            # Explore all adjacent cells
            for dx, dy in self.FOUR_DIR:
                explore_island(row + dx, col + dy)
        
        # Search for unvisited islands
        for i in range(rows):
            for j in range(cols):
                if grid[i][j] == 1:
                    islands += 1
                    explore_island(i, j)
        
        return islands

    def max_island_size(self, grid: List[List[int]]) -> int:
        """
        Find size of largest island.
        Uses DFS with size tracking.
        Time: O(rows * cols), Space: O(rows * cols)
        """
        if not grid or not grid[0]:
            return 0
            
        rows, cols = len(grid), len(grid[0])
        max_size = 0
        
        def measure_island(row: int, col: int) -> int:
            if (row < 0 or row >= rows or col < 0 or 
                col >= cols or grid[row][col] != 1):
                return 0
            
            # Mark as visited
            grid[row][col] = 0
            size = 1
            
            # Add sizes from all directions
            for dx, dy in self.FOUR_DIR:
                size += measure_island(row + dx, col + dy)
            
            return size
        
        # Find largest island
        for i in range(rows):
            for j in range(cols):
                if grid[i][j] == 1:
                    max_size = max(max_size, measure_island(i, j))
        
        return max_size

    def island_perimeter(self, grid: List[List[int]]) -> int:
        """
        Calculate perimeter of island.
        Each water edge or grid boundary contributes 1 to perimeter.
        Time: O(rows * cols), Space: O(1)
        """
        if not grid or not grid[0]:
            return 0
            
        rows, cols = len(grid), len(grid[0])
        perimeter = 0
        
        for i in range(rows):
            for j in range(cols):
                if grid[i][j] == 1:
                    # Check all four edges
                    for dx, dy in self.FOUR_DIR:
                        ni, nj = i + dx, j + dy
                        # Add 1 for each water edge or boundary
                        if (ni < 0 or ni >= rows or 
                            nj < 0 or nj >= cols or 
                            grid[ni][nj] == 0):
                            perimeter += 1
        
        return perimeter`,

  exercises: [
    {
      prompt: 'Implement a function that determines if all cells of value 1 form a single island (are all connected). Return true if there is exactly one island that contains all land cells.',
      initialCode: `def is_single_island(grid: List[List[int]]) -> bool:
    """
    Return True if all land cells form a single island.
    False if there are multiple islands or no land cells.
    """
    # Your code here
    pass`,
      solution: `def is_single_island(grid: List[List[int]]) -> bool:
    if not grid or not grid[0]:
        return False
    
    rows, cols = len(grid), len(grid[0])
    total_land = sum(cell for row in grid for cell in row)
    
    if total_land == 0:
        return False
    
    # Find first land cell
    start = None
    for i in range(rows):
        for j in range(cols):
            if grid[i][j] == 1:
                start = (i, j)
                break
        if start:
            break
    
    # Count connected cells from first land cell
    connected = 0
    stack = [start]
    visited = {start}
    
    while stack:
        row, col = stack.pop()
        connected += 1
        
        for dx, dy in [(0,1), (1,0), (0,-1), (-1,0)]:
            new_row, new_col = row + dx, col + dy
            if (0 <= new_row < rows and 
                0 <= new_col < cols and 
                grid[new_row][new_col] == 1 and 
                (new_row, new_col) not in visited):
                stack.append((new_row, new_col))
                visited.add((new_row, new_col))
    
    return connected == total_land`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement a function that finds the number of distinct island shapes in a grid. Two islands are considered to have the same shape if one can be translated (not rotated or reflected) to match the other exactly.',
      initialCode: `def distinct_islands(grid: List[List[int]]) -> int:
    """
    Return number of distinct island shapes.
    Islands are same shape if they can be translated to match exactly.
    """
    # Your code here
    pass`,
      solution: `def distinct_islands(grid: List[List[int]]) -> int:
    if not grid or not grid[0]:
        return 0
        
    rows, cols = len(grid), len(grid[0])
    shapes = set()  # Store unique shape signatures
    
    def explore_shape(row: int, col: int, 
                     base_row: int, base_col: int, 
                     path: List[Tuple[int, int]]) -> None:
        if (row < 0 or row >= rows or col < 0 or 
            col >= cols or grid[row][col] != 1):
            return
        
        # Mark as visited
        grid[row][col] = 0
        
        # Add relative coordinates to path
        path.append((row - base_row, col - base_col))
        
        # Explore all directions
        for dx, dy in [(0,1), (1,0), (0,-1), (-1,0)]:
            explore_shape(row + dx, col + dy, 
                        base_row, base_col, path)
    
    # Find all distinct shapes
    for i in range(rows):
        for j in range(cols):
            if grid[i][j] == 1:
                path = []
                explore_shape(i, j, i, j, path)
                shapes.add(tuple(path))
    
    return len(shapes)`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why do we typically use grid modification (setting cells to 0) instead of a separate visited set in island problems?',
      options: [
        'Because it\'s faster',
        'Because it uses less memory',
        'Because most island problems allow grid modification',
        'Because it prevents stack overflow'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. The performance difference is negligible.',
        'Correct! Modifying the grid directly saves the space that would be needed for a separate visited set, making it more memory efficient.',
        'Incorrect. While many problems do allow modification, that\'s not the main reason.',
        'Incorrect. Stack overflow is prevented by the grid size, not the visited tracking method.'
      ],
      difficulty: Difficulty.Beginner
    },
    {
      question: 'What is the key difference between using DFS and BFS for exploring islands?',
      options: [
        'DFS finds larger islands first',
        'BFS uses less memory',
        'DFS uses less memory due to not needing a queue',
        'BFS guarantees finding the smallest islands first'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. The order of finding islands depends on grid scanning order.',
        'Incorrect. BFS typically uses more memory due to the queue.',
        'Correct! DFS uses recursive call stack or a smaller stack, while BFS needs a queue that might grow larger.',
        'Incorrect. BFS explores in order of distance from start, not island size.'
      ],
      difficulty: Difficulty.Intermediate
    },
    {
      question: 'When solving a problem about finding distinct island shapes, why do we need to store relative coordinates instead of absolute coordinates?',
      options: [
        'To save memory',
        'To handle larger grids',
        'To identify same shapes in different locations',
        'To improve performance'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Memory usage is similar for both approaches.',
        'Incorrect. Grid size doesn\'t affect the choice.',
        'Correct! Relative coordinates allow us to identify the same shape appearing in different grid locations, as the shape signature will be the same regardless of position.',
        'Incorrect. Performance is not significantly different.'
      ],
      difficulty: Difficulty.Advanced
    }
  ]
};

const graphConnectivityData = {
  title: 'Understanding Graph Connectivity',
  content: `<p>
Imagine a social network where each person is a point and friendships are lines connecting these points. Some groups of friends might all know each other, forming tight-knit clusters, while other groups might be completely separate. These clusters are what we call connected components - groups where you can reach any member from any other member by following the connections.
</p>

<h3><u>What Makes Components Connected?</u></h3>

<p>
A connected component is a group of vertices where there exists a path between any two vertices in the group, and no path exists to vertices outside the group. Think of it like islands in an ocean - you can walk anywhere on your island, but you can't walk to other islands.
</p>

<p>
Let's look at a simple example:
</p>

<pre>
    A --- B   C --- D
    |     |         |
    E --- F   G     H

This graph has two connected components:
1. {A, B, E, F} - everyone can reach everyone
2. {C, D, H, G} - even though G isn't directly connected to H,
   it's part of the component because it connects through C-D-H
</pre>

<h3><u>Finding Connected Components</u></h3>

<p>
We can find connected components using either Depth-First Search (DFS) or Breadth-First Search (BFS). The process is like exploring different islands:
</p>

1. Start at any unvisited vertex
2. Explore everything reachable from that vertex (finding one component)
3. Move to another unvisited vertex and repeat
4. Continue until all vertices are visited

<h3><u>Applications and Variations</u></h3>

<h4><b>1. Strong Components in Directed Graphs</b></h4>
<p>
In directed graphs, we need a stricter definition. A strongly connected component requires that any vertex can reach any other vertex AND vice versa. This is like a group of cities where you can drive from any city to any other city using one-way roads.
</p>

<pre>
A → B → C    In this graph:
↑   ↓   ↓    {A, B} form one strongly connected component
D ← E ← F    {C}, {D}, {E}, {F} are separate components
</pre>

<h4><b>2. Biconnected Components</b></h4>
<p>
A biconnected component remains connected even if you remove any single vertex. These are important in network reliability - they identify parts of the network that won't be disconnected by a single point of failure.
</p>

<h4><b>3. Dynamic Connectivity</b></h4>
<p>
Some applications need to handle graphs that change over time. We might need to:
</p>

- Add or remove edges
- Check if two vertices are connected
- Count the number of components
- Merge or split components

<h3><u>Implementation Strategies</u></h3>

<h4><b>1. DFS-Based Approach</b></h4>
<p>
DFS is often the simplest approach for finding components. We can:
</p>

- Use recursion for clean, intuitive code
- Track components using visited sets
- Build components as we explore

<h4><b>2. Union-Find Approach</b></h4>
<p>
For dynamic graphs, Union-Find (Disjoint Set) data structure is often better:
</p>

- Efficiently handles edge additions
- Quick connectivity checks
- Maintains components implicitly

<h4><b>3. Kosaraju's Algorithm</b></h4>
<p>
For finding strongly connected components in directed graphs:
</p>

- Performs two DFS passes
- Uses graph and its transpose
- Groups vertices into strong components`,

  codeExample: `# Comprehensive implementation of connected components algorithms

from collections import defaultdict
from typing import List, Set, Dict

class ConnectedComponents:
    """Implementations of various connectivity algorithms"""
    
    def find_components_undirected(self, vertices: int, 
                                 edges: List[List[int]]) -> List[Set[int]]:
        """
        Find connected components in an undirected graph using DFS.
        Returns list of components, where each component is a set of vertices.
        Time: O(V + E), Space: O(V)
        """
        # Build adjacency list
        graph = defaultdict(list)
        for v1, v2 in edges:
            graph[v1].append(v2)
            graph[v2].append(v1)
        
        def explore_component(vertex: int, visited: Set[int], 
                            component: Set[int]) -> None:
            """Explore and build one component using DFS"""
            visited.add(vertex)
            component.add(vertex)
            
            for neighbor in graph[vertex]:
                if neighbor not in visited:
                    explore_component(neighbor, visited, component)
        
        # Find all components
        visited = set()
        components = []
        
        for vertex in range(vertices):
            if vertex not in visited:
                component = set()
                explore_component(vertex, visited, component)
                components.append(component)
        
        return components

    class UnionFind:
        """Union-Find data structure for dynamic connectivity"""
        
        def __init__(self, size: int):
            self.parent = list(range(size))
            self.rank = [0] * size
            self.count = size  # Number of components
        
        def find(self, x: int) -> int:
            """Find component identifier (root) for element x"""
            if self.parent[x] != x:
                self.parent[x] = self.find(self.parent[x])  # Path compression
            return self.parent[x]
        
        def union(self, x: int, y: int) -> None:
            """Merge components containing x and y"""
            px, py = self.find(x), self.find(y)
            if px == py:
                return
            
            # Union by rank
            if self.rank[px] < self.rank[py]:
                px, py = py, px
            self.parent[py] = px
            if self.rank[px] == self.rank[py]:
                self.rank[px] += 1
            
            self.count -= 1
        
        def connected(self, x: int, y: int) -> bool:
            """Check if x and y are in the same component"""
            return self.find(x) == self.find(y)
        
        def component_count(self) -> int:
            """Get current number of components"""
            return self.count

    def find_strongly_connected(self, vertices: int, 
                              edges: List[List[int]]) -> List[Set[int]]:
        """
        Find strongly connected components using Kosaraju's algorithm.
        Returns list of components, where each component is a set of vertices.
        Time: O(V + E), Space: O(V)
        """
        # Build adjacency lists for graph and transpose
        graph = defaultdict(list)
        transpose = defaultdict(list)
        for v1, v2 in edges:
            graph[v1].append(v2)
            transpose[v2].append(v1)
        
        def dfs_first_pass(vertex: int, visited: Set[int], 
                          order: List[int]) -> None:
            """First DFS pass to get finishing order"""
            visited.add(vertex)
            for neighbor in graph[vertex]:
                if neighbor not in visited:
                    dfs_first_pass(neighbor, visited, order)
            order.append(vertex)
        
        def dfs_second_pass(vertex: int, visited: Set[int], 
                           component: Set[int]) -> None:
            """Second DFS pass to find components"""
            visited.add(vertex)
            component.add(vertex)
            for neighbor in transpose[vertex]:
                if neighbor not in visited:
                    dfs_second_pass(neighbor, visited, component)
        
        # First pass - get finishing order
        visited = set()
        finish_order = []
        for vertex in range(vertices):
            if vertex not in visited:
                dfs_first_pass(vertex, visited, finish_order)
        
        # Second pass - find components
        visited = set()
        components = []
        
        # Process vertices in reverse finishing order
        for vertex in reversed(finish_order):
            if vertex not in visited:
                component = set()
                dfs_second_pass(vertex, visited, component)
                components.append(component)
        
        return components`,

  exercises: [
    {
      prompt: 'Implement a function that determines if removing a given vertex will increase the number of connected components in an undirected graph. This identifies articulation points (cut vertices) in the graph.',
      initialCode: `def is_cut_vertex(n: int, edges: List[List[int]], vertex: int) -> bool:
    """
    Return True if removing vertex increases number of components.
    n: number of vertices
    edges: list of [u, v] pairs representing edges
    vertex: vertex to check
    """
    # Your code here
    pass`,
      solution: `def is_cut_vertex(n: int, edges: List[List[int]], vertex: int) -> bool:
    # Build adjacency list excluding the target vertex
    graph = defaultdict(list)
    for u, v in edges:
        if u != vertex and v != vertex:
            graph[u].append(v)
            graph[v].append(u)
    
    def explore_component(start: int, visited: Set[int]) -> None:
        """Explore one component using DFS"""
        visited.add(start)
        for neighbor in graph[start]:
            if neighbor not in visited:
                explore_component(neighbor, visited)
    
    # Count components after removing vertex
    visited = set()
    components = 0
    
    # Skip the removed vertex in our exploration
    for v in range(n):
        if v != vertex and v not in visited:
            components += 1
            explore_component(v, visited)
    
    # Original component count is 1 for connected graph
    # If new count > 1, vertex was a cut vertex
    return components > 1`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement a function that finds all bridges in an undirected graph. A bridge is an edge that, when removed, increases the number of connected components.',
      initialCode: `def find_bridges(n: int, edges: List[List[int]]) -> List[List[int]]:
    """
    Return list of edges that are bridges.
    n: number of vertices
    edges: list of [u, v] pairs representing edges
    """
    # Your code here
    pass`,
      solution: `def find_bridges(n: int, edges: List[List[int]]) -> List[List[int]]:
    # Build adjacency list
    graph = defaultdict(list)
    for u, v in edges:
        graph[u].append(v)
        graph[v].append(u)
    
    discovery = [-1] * n  # When vertex was discovered
    low = [-1] * n       # Lowest discovery time reachable
    time = [0]          # Current discovery time
    bridges = []
    
    def dfs(vertex: int, parent: int) -> None:
        discovery[vertex] = low[vertex] = time[0]
        time[0] += 1
        
        for neighbor in graph[vertex]:
            if neighbor == parent:
                continue
            
            if discovery[neighbor] == -1:
                dfs(neighbor, vertex)
                low[vertex] = min(low[vertex], low[neighbor])
                
                # If neighbor can't reach vertex's earlier ancestors
                # this edge is a bridge
                if low[neighbor] > discovery[vertex]:
                    bridges.append([vertex, neighbor])
            else:
                # Update low value if we found a back edge
                low[vertex] = min(low[vertex], discovery[neighbor])
    
    # Find bridges using modified DFS
    for vertex in range(n):
        if discovery[vertex] == -1:
            dfs(vertex, -1)
    
    return bridges`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why might we prefer Union-Find over DFS for dynamic connectivity problems?',
      options: [
        'Because Union-Find uses less memory',
        'Because Union-Find is always faster',
        'Because Union-Find efficiently handles incremental changes and queries',
        'Because Union-Find is easier to implement'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Memory usage is comparable between the approaches.',
        'Incorrect. DFS can be faster for static graphs.',
        'Correct! Union-Find excels at maintaining components as edges are added and checking connectivity quickly.',
        'Incorrect. DFS is often simpler to implement for basic connectivity.'
      ],
      difficulty: Difficulty.Beginner
    },
    {
      question: 'What is the key insight behind Kosaraju\'s algorithm for finding strongly connected components?',
      options: [
        'Running DFS twice makes it more accurate',
        'The transpose graph reveals strong connections',
        'Strong components remain strongly connected in the transpose graph',
        'DFS naturally finds strong components'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Running DFS twice isn\'t about accuracy.',
        'Incorrect. The transpose alone doesn\'t reveal strong connections.',
        'Correct! A strongly connected component remains strongly connected when all edges are reversed, which is key to the algorithm\'s correctness.',
        'Incorrect. Simple DFS cannot find strongly connected components.'
      ],
      difficulty: Difficulty.Intermediate
    },
    {
      question: 'Why do we need path compression and union by rank in the Union-Find data structure?',
      options: [
        'To reduce memory usage',
        'To make the code simpler',
        'To achieve nearly constant time operations',
        'To handle more vertices'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. These optimizations don\'t primarily affect memory usage.',
        'Incorrect. They actually make the code more complex.',
        'Correct! Together, these optimizations achieve nearly constant time operations through balanced trees and flat hierarchies.',
        'Incorrect. The structure can handle any number of vertices without these optimizations.'
      ],
      difficulty: Difficulty.Advanced
    }
  ]
};

const bipartiteGraphData = {
  title: 'Understanding Bipartite Graphs',
  content: `<p>
Imagine you're organizing a dance where everyone needs to find a dance partner. There are two groups: leaders and followers. Each person can only partner with someone from the other group - leaders can only dance with followers, and followers can only dance with leaders. This is exactly how a bipartite graph works - it's a graph whose vertices can be divided into two groups where connections only exist between groups, never within a group.
</p>

<h3><u>What Makes a Graph Bipartite?</u></h3>

<p>
A graph is bipartite if we can color all its vertices using just two colors (let's say red and blue) such that no two adjacent vertices share the same color. This seemingly simple property has profound implications and applications.
</p>

<pre>
A simple bipartite graph:
Red   Blue
1 ---- 2
|      |
3 ---- 4
|      |
5 ---- 6

Not bipartite (odd cycle):
1 ---- 2
|     /
3 ---/
</pre>

<h3><u>Key Properties of Bipartite Graphs</u></h3>

<p>
Understanding these properties helps us identify and work with bipartite graphs:
</p>

<h4><b>1. Two-Coloring Property</b></h4>
<li>Vertices can be colored using exactly two colors</li>
<li>Adjacent vertices must have different colors</li>
<li>The coloring partitions vertices into two independent sets</li>

<h4><b>2. No Odd Cycles</b></h4>
<li>Cannot contain cycles with odd number of vertices</li>
<li>This is both necessary and sufficient for bipartiteness</li>
<li>Even cycles are allowed</li>

<h3><u>Checking for Bipartiteness</u></h3>

<p>
We can check if a graph is bipartite using either DFS or BFS. The key idea is to:
</p>

1. Start at any vertex and color it (say, red)
2. Color all its neighbors the opposite color (blue)
3. Continue this alternating pattern
4. If we ever try to color a vertex with a different color than previously assigned, the graph is not bipartite

<h3><u>Common Applications</u></h3>

<h4><b>1. Matching Problems</b></h4>
<p>
Perfect for scenarios with two distinct groups:
</p>
<li>Students and Classes</li>
<li>Workers and Jobs</li>
<li>Buyers and Sellers</li>

<h4><b>2. Resource Allocation</b></h4>
<p>
Useful for assigning resources with constraints:
</p>
<li>Teachers to Time Slots</li>
<li>Processes to Processors</li>
<li>Tasks to Workers</li>

<h4><b>3. Conflict Resolution</b></h4>
<p>
Helps identify and resolve conflicts:
</p>
<li>Chemical Reactions</li>
<li>Schedule Conflicts</li>
<li>Compatible Assignments</li>

<h3><u>Implementation Strategies</u></h3>

<h4><b>1. BFS Approach</b></h4>
<p>
BFS is often preferred because:
</p>
<li>It's more intuitive for coloring layer by layer</li>
<li>It naturally handles disconnected components</li>
<li>It's easier to track the alternating pattern</li>

<h4><b>2. DFS Approach</b></h4>
<p>
DFS can also work well:
</p>
<li>Uses less memory</li>
<li>Simpler recursive implementation</li>
<li>Good for finding odd cycles if not bipartite</li>`,

  codeExample: `# Comprehensive implementation of bipartite graph checking

from collections import deque
from typing import List, Dict, Set

class BipartiteChecker:
    """Class for checking and working with bipartite graphs"""
    
    def is_bipartite_bfs(self, graph: List[List[int]]) -> bool:
        """
        Check if graph is bipartite using BFS.
        graph: adjacency list representation
        Returns: True if graph is bipartite, False otherwise
        Time: O(V + E), Space: O(V)
        """
        if not graph:
            return True
            
        n = len(graph)
        # -1: uncolored, 0: red, 1: blue
        colors = [-1] * n
        
        # Handle potential disconnected components
        for start in range(n):
            if colors[start] != -1:
                continue
                
            # Start BFS from this uncolored vertex
            queue = deque([start])
            colors[start] = 0  # Color first vertex red
            
            while queue:
                vertex = queue.popleft()
                current_color = colors[vertex]
                next_color = 1 - current_color  # Alternate colors
                
                # Process all neighbors
                for neighbor in graph[vertex]:
                    if colors[neighbor] == -1:
                        # Uncolored neighbor - assign opposite color
                        colors[neighbor] = next_color
                        queue.append(neighbor)
                    elif colors[neighbor] != next_color:
                        # Color conflict - not bipartite
                        return False
        
        return True
    
    def is_bipartite_dfs(self, graph: List[List[int]]) -> bool:
        """
        Check if graph is bipartite using DFS.
        graph: adjacency list representation
        Returns: True if graph is bipartite, False otherwise
        Time: O(V + E), Space: O(V)
        """
        if not graph:
            return True
            
        n = len(graph)
        colors = [-1] * n  # -1: uncolored, 0: red, 1: blue
        
        def dfs(vertex: int, color: int) -> bool:
            """
            Try to color current vertex and its neighbors.
            Returns False if coloring fails, True if successful.
            """
            colors[vertex] = color
            
            for neighbor in graph[vertex]:
                if colors[neighbor] == -1:
                    # Uncolored neighbor - try opposite color
                    if not dfs(neighbor, 1 - color):
                        return False
                elif colors[neighbor] == color:
                    # Same color conflict - not bipartite
                    return False
            
            return True
        
        # Handle potential disconnected components
        for vertex in range(n):
            if colors[vertex] == -1:
                if not dfs(vertex, 0):
                    return False
        
        return True
    
    def find_maximum_matching(self, graph: List[List[int]]) -> List[List[int]]:
        """
        Find maximum matching in bipartite graph using Ford-Fulkerson.
        Returns list of matched pairs.
        Time: O(VE), Space: O(V)
        """
        if not graph or not self.is_bipartite_bfs(graph):
            return []
            
        n = len(graph)
        matches = [-1] * n  # stores current matching
        
        def find_augmenting_path(vertex: int, visited: Set[int]) -> bool:
            """Find path to increase matching size"""
            for neighbor in graph[vertex]:
                if neighbor not in visited:
                    visited.add(neighbor)
                    
                    # Either neighbor is unmatched or
                    # we can find alternating path from their match
                    if (matches[neighbor] == -1 or 
                        find_augmenting_path(matches[neighbor], visited)):
                        matches[neighbor] = vertex
                        matches[vertex] = neighbor
                        return True
            
            return False
        
        # Try to find augmenting path from each unmatched vertex
        for vertex in range(n):
            if matches[vertex] == -1:
                find_augmenting_path(vertex, set([vertex]))
        
        # Convert matches to pairs
        result = []
        seen = set()
        for i, match in enumerate(matches):
            if match != -1 and i not in seen:
                result.append([i, match])
                seen.add(i)
                seen.add(match)
                
        return result`,

  exercises: [
    {
      prompt: 'Implement a function that determines if it\'s possible to divide students into two groups such that no two students who dislike each other are in the same group. The input is a list of pairs where each pair [a,b] indicates students a and b dislike each other.',
      initialCode: `def possible_grouping(n: int, dislikes: List[List[int]]) -> bool:
    """
    Return True if students can be divided into two groups
    with no dislikes within same group.
    n: number of students (1 to n)
    dislikes: list of [a,b] pairs indicating mutual dislike
    """
    # Your code here
    pass`,
      solution: `def possible_grouping(n: int, dislikes: List[List[int]]) -> bool:
    # Build adjacency list from dislikes
    graph = [[] for _ in range(n + 1)]  # 1-based indexing
    for a, b in dislikes:
        graph[a].append(b)
        graph[b].append(a)
    
    # Try to color students using two colors
    colors = [0] * (n + 1)  # 0: uncolored, 1: group1, -1: group2
    
    def can_color(student: int, color: int) -> bool:
        if colors[student] != 0:
            # Return True if already colored correctly
            return colors[student] == color
            
        colors[student] = color
        # Try to color all disliked students with opposite color
        for disliked in graph[student]:
            if not can_color(disliked, -color):
                return False
        return True
    
    # Try to color each uncolored student
    for student in range(1, n + 1):
        if colors[student] == 0:
            if not can_color(student, 1):
                return False
    
    return True`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement a function that finds the minimum number of operations needed to make a graph bipartite, where in each operation you can remove one edge.',
      initialCode: `def min_edges_to_bipartite(n: int, edges: List[List[int]]) -> int:
    """
    Return minimum number of edges to remove to make graph bipartite.
    n: number of vertices
    edges: list of [u,v] pairs representing edges
    """
    # Your code here
    pass`,
      solution: `def min_edges_to_bipartite(n: int, edges: List[List[int]]) -> int:
    # Build adjacency list
    graph = [[] for _ in range(n)]
    for u, v in edges:
        graph[u].append(v)
        graph[v].append(u)
    
    colors = [-1] * n  # -1: uncolored, 0: red, 1: blue
    bad_edges = 0
    
    def color_and_count(vertex: int, color: int) -> bool:
        """Color vertices and count conflicting edges"""
        nonlocal bad_edges
        colors[vertex] = color
        
        for neighbor in graph[vertex]:
            if colors[neighbor] == -1:
                color_and_count(neighbor, 1 - color)
            elif colors[neighbor] == color:
                # Conflict found - edge needs to be removed
                bad_edges += 1
        
        return True
    
    # Process each component
    for vertex in range(n):
        if colors[vertex] == -1:
            color_and_count(vertex, 0)
    
    # Each conflict was counted twice (once from each end)
    return bad_edges // 2`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why is it impossible for a bipartite graph to contain an odd cycle?',
      options: [
        'Because odd cycles use too many edges',
        'Because odd cycles require more than two colors',
        'Because odd cycles create too many connections',
        'Because odd cycles are disconnected'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. The number of edges isn\'t the issue.',
        'Correct! In an odd cycle, after coloring alternately, you return to the start needing a different color than it started with, making two colors insufficient.',
        'Incorrect. The number of connections isn\'t the primary issue.',
        'Incorrect. Cycles are connected by definition.'
      ],
      difficulty: Difficulty.Beginner
    },
    {
      question: 'What is the key advantage of using BFS over DFS for bipartite checking?',
      options: [
        'BFS is always faster',
        'BFS uses less memory',
        'BFS naturally colors level by level, making it easier to understand and implement',
        'BFS can handle larger graphs'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Both algorithms have the same time complexity.',
        'Incorrect. BFS typically uses more memory due to the queue.',
        'Correct! BFS\'s level-by-level approach naturally matches the alternating color pattern of bipartite graphs.',
        'Incorrect. Both algorithms can handle graphs of any size.'
      ],
      difficulty: Difficulty.Intermediate
    },
    {
      question: 'In a bipartite graph matching problem, what is an augmenting path?',
      options: [
        'Any path between two vertices',
        'A path that makes the graph bipartite',
        'A path that allows us to increase the size of the matching',
        'A path between matched vertices'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Not all paths are augmenting paths.',
        'Incorrect. Augmenting paths relate to matching, not bipartiteness.',
        'Correct! An augmenting path is an alternating path starting and ending with unmatched vertices, allowing us to increase the matching size.',
        'Incorrect. Augmenting paths must include unmatched vertices.'
      ],
      difficulty: Difficulty.Advanced
    }
  ]
};

const shortestPathData = {
  title: 'Understanding Shortest Path Algorithms',
  content: `<p>
Imagine you're a delivery driver trying to find the fastest route between cities. Sometimes the shortest physical distance isn't the quickest path - highways might be faster than direct back roads, or some routes might have traffic delays. This is exactly what shortest path algorithms help us solve: finding the optimal path between points, considering various types of "weights" or costs.
</p>

<h3><u>Core Concepts of Shortest Paths</u></h3>

<p>
Before diving into specific algorithms, let's understand what makes shortest path problems interesting and challenging. A shortest path isn't always obvious - it might involve taking seemingly indirect routes that ultimately provide the best overall solution.
</p>

<h4><b>Key Terms and Concepts:</b></h4>
<li>Path Weight: Total cost of all edges in a path</li>
<li>Optimal Substructure: Any subpath of a shortest path is itself a shortest path</li>
<li>Edge Relaxation: Process of updating distance if better path is found</li>

<h3><u>Choosing the Right Algorithm</u></h3>

<p>
Different shortest path algorithms are suited for different scenarios. Here's how to choose:
</p>

<h4><b>1. Unweighted Graphs (BFS)</b></h4>
<p>
When all edges have equal weight (cost 1), BFS is the simplest and most efficient choice:
</p>
<li>Guarantees shortest path</li>
<li>Simple to implement</li>
<li>O(V + E) time complexity</li>
<li>Great for maze-type problems</li>

<h4><b>2. Weighted Graphs (Dijkstra's)</b></h4>
<p>
When edges have different positive weights, Dijkstra's algorithm is the go-to solution:
</p>
<li>Handles varying edge weights</li>
<li>Efficient for single-source shortest paths</li>
<li>O((V + E)log V) with priority queue</li>
<li>Cannot handle negative weights</li>

<h4><b>3. Graphs with Negative Weights (Bellman-Ford)</b></h4>
<p>
When your graph might have negative weights, you'll need Bellman-Ford:
</p>
<li>Handles negative weights</li>
<li>Detects negative cycles</li>
<li>O(VE) time complexity</li>
<li>Slower but more versatile</li>

<h3><u>Understanding Edge Relaxation</u></h3>

<p>
Edge relaxation is the core operation in shortest path algorithms. The concept is simple but powerful:
</p>

<pre>
If we have vertices A, B, and C:
Current best distance to B = 10
Edge from B to C has weight 5
Current best distance to C = 20

We can "relax" edge B->C because:
10 + 5 = 15 < 20 (current distance to C)
So we update distance to C to 15
</pre>

<h3><u>Common Pitfalls and Solutions</u></h3>

<p>
When implementing shortest path algorithms, watch out for:
</p>

<h4><b>1. Initialization</b></h4>
<li>Properly initialize distances (usually infinity except source)</li>
<li>Set up parent pointers for path reconstruction</li>
<li>Handle disconnected components</li>

<h4><b>2. Path Reconstruction</b></h4>
<li>Maintain parent/predecessor information</li>
<li>Track path during algorithm execution</li>
<li>Build path in reverse from destination</li>

<h4><b>3. Edge Cases</b></h4>
<li>Empty graphs</li>
<li>Single-vertex graphs</li>
<li>Disconnected components</li>
<li>Self-loops and parallel edges</li>`,

  codeExample: `# Comprehensive implementation of shortest path algorithms

from collections import deque
from typing import List, Dict, Set, Optional
import heapq

class ShortestPathFinder:
    """Class implementing various shortest path algorithms"""
    
    def bfs_shortest_path(self, graph: List[List[int]], 
                         start: int, end: int) -> List[int]:
        """
        Find shortest path in unweighted graph using BFS.
        Returns path from start to end, or empty list if no path exists.
        Time: O(V + E), Space: O(V)
        """
        if start == end:
            return [start]
            
        n = len(graph)
        parent = [-1] * n  # Track path
        visited = {start}
        queue = deque([start])
        
        while queue:
            vertex = queue.popleft()
            
            # Check all neighbors
            for neighbor in graph[vertex]:
                if neighbor not in visited:
                    visited.add(neighbor)
                    parent[neighbor] = vertex
                    queue.append(neighbor)
                    
                    # Found end - reconstruct path
                    if neighbor == end:
                        path = []
                        current = end
                        while current != -1:
                            path.append(current)
                            current = parent[current]
                        return path[::-1]
        
        return []  # No path exists
    
    def dijkstra_shortest_path(self, graph: List[List[tuple]], 
                             start: int, end: int) -> tuple:
        """
        Find shortest path in weighted graph using Dijkstra's algorithm.
        graph: adjacency list of (neighbor, weight) tuples
        Returns (distance, path), or (float('inf'), []) if no path exists
        Time: O((V + E)log V), Space: O(V)
        """
        n = len(graph)
        distances = [float('inf')] * n
        distances[start] = 0
        parent = [-1] * n
        visited = set()
        
        # Priority queue holds (distance, vertex)
        pq = [(0, start)]
        
        while pq:
            dist, vertex = heapq.heappop(pq)
            
            # Skip if we've found better path
            if vertex in visited:
                continue
                
            visited.add(vertex)
            
            # Found end - reconstruct path
            if vertex == end:
                path = []
                current = end
                while current != -1:
                    path.append(current)
                    current = parent[current]
                return (dist, path[::-1])
            
            # Check all neighbors
            for neighbor, weight in graph[vertex]:
                if neighbor in visited:
                    continue
                
                new_dist = dist + weight
                
                # Update if we found better path
                if new_dist < distances[neighbor]:
                    distances[neighbor] = new_dist
                    parent[neighbor] = vertex
                    heapq.heappush(pq, (new_dist, neighbor))
        
        return (float('inf'), [])  # No path exists
    
    def reconstruct_path(self, parent: List[int], 
                        end: int) -> List[int]:
        """Helper function to reconstruct path from parent array"""
        path = []
        current = end
        
        while current != -1:
            path.append(current)
            current = parent[current]
            
        return path[::-1] if path else []
    
    def modify_for_different_weights(self, graph: List[List[tuple]], 
                                   weight_func) -> List[List[tuple]]:
        """
        Transform graph using custom weight function.
        Useful for different types of "shortest" paths.
        """
        n = len(graph)
        modified = [[] for _ in range(n)]
        
        for vertex in range(n):
            for neighbor, weight in graph[vertex]:
                new_weight = weight_func(weight)
                modified[vertex].append((neighbor, new_weight))
                
        return modified`,

  exercises: [
    {
      prompt: 'Implement a function that finds the path with the least number of edges between two vertices, even in a weighted graph. The actual edge weights should be ignored.',
      initialCode: `def shortest_edge_path(graph: List[List[tuple]], 
                        start: int, end: int) -> List[int]:
    """
    Find path with minimum number of edges.
    graph: adjacency list of (neighbor, weight) tuples
    Returns path from start to end, or empty list if no path exists.
    """
    # Your code here
    pass`,
      solution: `def shortest_edge_path(graph: List[List[tuple]], 
                        start: int, end: int) -> List[int]:
    if start == end:
        return [start]
        
    n = len(graph)
    parent = [-1] * n
    visited = {start}
    queue = deque([start])
    
    while queue:
        vertex = queue.popleft()
        
        # Check all neighbors, ignoring weights
        for neighbor, _ in graph[vertex]:
            if neighbor not in visited:
                visited.add(neighbor)
                parent[neighbor] = vertex
                queue.append(neighbor)
                
                if neighbor == end:
                    # Reconstruct path
                    path = []
                    current = end
                    while current != -1:
                        path.append(current)
                        current = parent[current]
                    return path[::-1]
    
    return []  # No path exists`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement a function that finds the path between two vertices where the maximum edge weight in the path is minimized. This is sometimes called the "bottleneck shortest path".',
      initialCode: `def min_max_weight_path(graph: List[List[tuple]], 
                          start: int, end: int) -> tuple:
    """
    Find path minimizing the maximum edge weight used.
    Returns (max_weight, path) or (float('inf'), []) if no path exists.
    """
    # Your code here
    pass`,
      solution: `def min_max_weight_path(graph: List[List[tuple]], 
                          start: int, end: int) -> tuple:
    n = len(graph)
    parent = [-1] * n
    max_weights = [float('inf')] * n
    max_weights[start] = 0
    visited = set()
    
    # Priority queue holds (max_weight, vertex)
    pq = [(0, start)]
    
    while pq:
        max_weight, vertex = heapq.heappop(pq)
        
        if vertex in visited:
            continue
            
        visited.add(vertex)
        
        if vertex == end:
            # Reconstruct path
            path = []
            current = end
            while current != -1:
                path.append(current)
                current = parent[current]
            return (max_weight, path[::-1])
        
        for neighbor, weight in graph[vertex]:
            if neighbor in visited:
                continue
            
            # Update if this path has smaller maximum weight
            path_max = max(max_weight, weight)
            if path_max < max_weights[neighbor]:
                max_weights[neighbor] = path_max
                parent[neighbor] = vertex
                heapq.heappush(pq, (path_max, neighbor))
    
    return (float('inf'), [])  # No path exists`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why does Dijkstra\'s algorithm fail with negative edge weights?',
      options: [
        'Because it uses a priority queue',
        'Because negative weights make paths longer',
        'Because it assumes visited vertices have optimal distances',
        'Because negative weights use too much memory'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. The priority queue implementation isn\'t the issue.',
        'Incorrect. While negative weights do affect path lengths, this isn\'t why the algorithm fails.',
        'Correct! Dijkstra\'s algorithm assumes that once a vertex is visited, we\'ve found its shortest path. Negative weights can invalidate this assumption as better paths might be found later.',
        'Incorrect. Memory usage isn\'t affected by edge weight values.'
      ],
      difficulty: Difficulty.Beginner
    },
    {
      question: 'Why might we prefer BFS over Dijkstra\'s algorithm for unweighted graphs?',
      options: [
        'BFS is always faster than Dijkstra\'s',
        'BFS uses less memory',
        'BFS is simpler and more efficient for equal weights',
        'BFS can handle negative weights'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. BFS is only faster for unweighted graphs.',
        'Incorrect. Both algorithms use similar amounts of memory.',
        'Correct! When all edges have equal weight, BFS provides a simpler solution with better performance since we don\'t need a priority queue.',
        'Incorrect. BFS doesn\'t consider edge weights at all.'
      ],
      difficulty: Difficulty.Intermediate
    },
    {
      question: 'What is the significance of edge relaxation in shortest path algorithms?',
      options: [
        'It makes the algorithm run faster',
        'It reduces memory usage',
        'It updates distances when better paths are found',
        'It prevents cycles in the graph'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Edge relaxation doesn\'t affect algorithm speed.',
        'Incorrect. Edge relaxation doesn\'t affect memory usage.',
        'Correct! Edge relaxation is the fundamental operation that updates vertex distances when we find better paths, ensuring we eventually find the shortest paths.',
        'Incorrect. Edge relaxation isn\'t related to cycle detection.'
      ],
      difficulty: Difficulty.Advanced
    }
  ]
};

const pathExistenceData = {
  title: 'Understanding Path Existence and Path Finding',
  content: `<p>
Imagine you're trying to figure out if you can reach your friend's house through a network of city streets, where some intersections are connected and others aren't. This is essentially what path existence problems help us solve - determining whether we can get from one point to another through a series of connected steps.
</p>

<h3><u>Understanding Path Existence</u></h3>

<p>
A path exists between two vertices if we can reach one from the other by following edges. While this sounds simple, there are many variations and nuances to consider. Let's explore a simple example:
</p>

<pre>
    A --- B   D
    |     |   |
    C     E   F

Can we reach E from A? Yes (A → B → E)
Can we reach F from A? No (F is in a separate component)
</pre>

<h3><u>Types of Path Problems</u></h3>

<h4><b>1. Simple Path Existence</b></h4>
<p>
The most basic question: "Can we reach vertex B from vertex A?"
Important considerations:
</p>
<li>Only care about existence, not the path itself</li>
<li>Often can stop early once target is found</li>
<li>Need to handle cycles and avoid infinite loops</li>

<h4><b>2. Path with Constraints</b></h4>
<p>
More complex variations add rules about valid paths:
</p>
<li>Paths must go through certain vertices</li>
<li>Paths must avoid certain vertices</li>
<li>Paths must use particular types of edges</li>
<li>Paths must be under certain length</li>

<h4><b>3. All Possible Paths</b></h4>
<p>
Finding every possible path between vertices:
</p>
<li>Must handle cycles carefully</li>
<li>Need efficient backtracking</li>
<li>May need to limit path length</li>
<li>Could have exponential number of paths</li>

<h3><u>Choosing the Right Approach</u></h3>

<h4><b>1. DFS Approach</b></h4>
<p>
Best when:
</p>
<li>Just need to find if path exists</li>
<li>Want to find all possible paths</li>
<li>Memory is a concern</li>
<li>Graph might be very deep</li>

<h4><b>2. BFS Approach</b></h4>
<p>
Best when:
</p>
<li>Need shortest path</li>
<li>Graph might have cycles</li>
<li>Want to find path with fewest edges</li>
<li>Graph is relatively balanced in depth</li>

<h3><u>Common Challenges and Solutions</u></h3>

<h4><b>1. Cycle Detection</b></h4>
<p>
Handling cycles is crucial to avoid infinite loops:
</p>
<pre>
A → B → C → A  (cycle)
Need to track visited vertices to avoid getting stuck
</pre>

<h4><b>2. Path Recording</b></h4>
<p>
Different ways to track paths:
</p>
<li>Parent pointers for single path</li>
<li>Path stack for backtracking</li>
<li>Visited set for cycle avoidance</li>

<h4><b>3. Performance Optimization</b></h4>
<p>
Key techniques to improve efficiency:
</p>
<li>Early termination when path is found</li>
<li>Efficient visited node tracking</li>
<li>Pruning invalid paths early</li>`,

  codeExample: `# Comprehensive implementation of path existence algorithms

from collections import deque
from typing import List, Set, Dict, Optional, List

class PathFinder:
    """Class implementing various path finding algorithms"""
    
    def path_exists_dfs(self, graph: List[List[int]], 
                       start: int, end: int) -> bool:
        """
        Check if path exists between start and end using DFS.
        Simple existence check with early termination.
        Time: O(V + E), Space: O(V)
        """
        def dfs(vertex: int, visited: Set[int]) -> bool:
            if vertex == end:
                return True
            
            visited.add(vertex)
            
            for neighbor in graph[vertex]:
                if neighbor not in visited:
                    if dfs(neighbor, visited):
                        return True
            
            return False
        
        return dfs(start, set())
    
    def find_all_paths(self, graph: List[List[int]], 
                      start: int, end: int, 
                      max_length: Optional[int] = None) -> List[List[int]]:
        """
        Find all simple paths from start to end.
        Optional max_length parameter to limit path length.
        Time: O(V!), Space: O(V) for recursion stack
        """
        def dfs(vertex: int, path: List[int], 
               paths: List[List[int]]) -> None:
            # Check max length constraint
            if max_length and len(path) > max_length:
                return
            
            # Found valid path
            if vertex == end:
                paths.append(path[:])
                return
            
            # Try all unvisited neighbors
            for neighbor in graph[vertex]:
                if neighbor not in path:  # Avoid cycles
                    path.append(neighbor)
                    dfs(neighbor, path, paths)
                    path.pop()  # Backtrack
        
        all_paths = []
        dfs(start, [start], all_paths)
        return all_paths
    
    def path_with_constraints(self, graph: List[List[int]], 
                            start: int, end: int,
                            required: Set[int], 
                            forbidden: Set[int]) -> Optional[List[int]]:
        """
        Find path from start to end that visits all required vertices
        and avoids forbidden vertices.
        Returns None if no such path exists.
        """
        def dfs(vertex: int, visited: Set[int], 
               path: List[int], required_left: Set[int]) -> bool:
            # Check if current vertex is forbidden
            if vertex in forbidden:
                return False
            
            path.append(vertex)
            visited.add(vertex)
            
            # Update required vertices
            if vertex in required_left:
                required_left.remove(vertex)
            
            # Check if we've found valid path
            if vertex == end and not required_left:
                return True
            
            # Try all unvisited neighbors
            for neighbor in graph[vertex]:
                if neighbor not in visited:
                    if dfs(neighbor, visited, path, required_left):
                        return True
            
            # Backtrack
            path.pop()
            visited.remove(vertex)
            if vertex in required:
                required_left.add(vertex)
            
            return False
        
        path = []
        if start in forbidden or end in forbidden:
            return None
        
        # Make copy of required set for modification
        required_left = set(required)
        if dfs(start, set(), path, required_left):
            return path
        
        return None
    
    def bidirectional_search(self, graph: List[List[int]], 
                           start: int, end: int) -> Optional[List[int]]:
        """
        Find path using bidirectional search (simultaneously from start and end).
        Often faster than unidirectional search.
        Time: O(b^(d/2)) where b is branching factor and d is distance
        """
        if start == end:
            return [start]
        
        # Forward and backward search queues
        forward_queue = deque([start])
        backward_queue = deque([end])
        
        # Track visited vertices and parents
        forward_visited = {start: None}
        backward_visited = {end: None}
        
        def reconstruct_path(meeting_point: int) -> List[int]:
            """Reconstruct path when searches meet"""
            path = []
            
            # Build path from start to meeting point
            current = meeting_point
            while current is not None:
                path.append(current)
                current = forward_visited[current]
            path = path[::-1]
            
            # Build path from meeting point to end
            current = backward_visited[meeting_point]
            while current is not None:
                path.append(current)
                current = backward_visited[current]
            
            return path
        
        # Alternate between forward and backward search
        while forward_queue and backward_queue:
            # Forward search
            vertex = forward_queue.popleft()
            for neighbor in graph[vertex]:
                if neighbor in backward_visited:
                    # Searches met - reconstruct path
                    forward_visited[neighbor] = vertex
                    return reconstruct_path(neighbor)
                if neighbor not in forward_visited:
                    forward_visited[neighbor] = vertex
                    forward_queue.append(neighbor)
            
            # Backward search
            vertex = backward_queue.popleft()
            for neighbor in graph[vertex]:
                if neighbor in forward_visited:
                    # Searches met - reconstruct path
                    backward_visited[neighbor] = vertex
                    return reconstruct_path(neighbor)
                if neighbor not in backward_visited:
                    backward_visited[neighbor] = vertex
                    backward_queue.append(neighbor)
        
        return None  # No path exists`,

  exercises: [
    {
      prompt: 'Implement a function that determines if there exists a path from start to end using at most k edges. Return true if such a path exists, false otherwise.',
      initialCode: `def path_exists_with_k_edges(graph: List[List[int]], 
                              start: int, end: int, k: int) -> bool:
    """
    Check if path exists using at most k edges.
    graph: adjacency list representation
    k: maximum number of edges allowed
    """
    # Your code here
    pass`,
      solution: `def path_exists_with_k_edges(graph: List[List[int]], 
                              start: int, end: int, k: int) -> bool:
    def dfs(vertex: int, edges_used: int, visited: Set[int]) -> bool:
        # Found path within edge limit
        if vertex == end:
            return True
        
        # Used too many edges
        if edges_used == k:
            return False
        
        visited.add(vertex)
        
        # Try all unvisited neighbors
        for neighbor in graph[vertex]:
            if neighbor not in visited:
                if dfs(neighbor, edges_used + 1, visited):
                    return True
        
        visited.remove(vertex)  # Backtrack
        return False
    
    return dfs(start, 0, set())`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement a function that finds a path from start to end that visits vertices in ascending order (each vertex number must be larger than the previous vertex in the path).',
      initialCode: `def ascending_path(graph: List[List[int]], 
                   start: int, end: int) -> List[int]:
    """
    Find path where vertices are in ascending order.
    Returns empty list if no such path exists.
    """
    # Your code here
    pass`,
      solution: `def ascending_path(graph: List[List[int]], 
                   start: int, end: int) -> List[int]:
    def dfs(vertex: int, path: List[int]) -> bool:
        path.append(vertex)
        
        # Found valid path
        if vertex == end:
            return True
        
        # Try neighbors in sorted order
        neighbors = sorted(graph[vertex])
        for neighbor in neighbors:
            # Check ascending order constraint
            if neighbor > vertex:
                if dfs(neighbor, path):
                    return True
        
        path.pop()  # Backtrack
        return False
    
    if start > end:
        return []
    
    path = []
    if dfs(start, path):
        return path
    return []`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why might bidirectional search be faster than regular BFS or DFS for finding a path?',
      options: [
        'Because it uses less memory',
        'Because it searches from both ends, reducing the search space',
        'Because it can handle cycles better',
        'Because it always finds the shortest path'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Bidirectional search typically uses more memory due to tracking two search frontiers.',
        'Correct! By searching from both ends, the search space is roughly squared in size, often making it much faster to find a path.',
        'Incorrect. Cycle handling is similar in both approaches.',
        'Incorrect. Both BFS and bidirectional search can find shortest paths in unweighted graphs.'
      ],
      difficulty: Difficulty.Beginner
    },
    {
      question: 'What is the key challenge when finding all possible paths between two vertices?',
      options: [
        'Memory management',
        'Cycle detection',
        'The potentially exponential number of paths',
        'Finding the shortest path'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. While memory is a concern, it\'s not the main challenge.',
        'Incorrect. Cycle detection is important but manageable.',
        'Correct! The number of possible paths can grow exponentially with graph size, making it computationally expensive for large graphs.',
        'Incorrect. Finding all paths is different from finding the shortest path.'
      ],
      difficulty: Difficulty.Intermediate
    },
    {
      question: 'When implementing path finding with constraints, why is backtracking important?',
      options: [
        'To save memory',
        'To avoid infinite loops',
        'To explore all possible solutions',
        'To find shorter paths'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Backtracking isn\'t primarily about memory usage.',
        'Incorrect. Infinite loops are prevented by visited sets.',
        'Correct! Backtracking allows us to try different paths and undo choices that don\'t work, ensuring we can explore all possibilities.',
        'Incorrect. Backtracking doesn\'t specifically help find shorter paths.'
      ],
      difficulty: Difficulty.Advanced
    }
  ]
};

const cycleDetectionData = {
  title: 'Understanding Cycle Detection in Graphs',
  content: `<p>
Imagine you're planning a road trip and want to make sure your route doesn't accidentally loop back on itself. Or think of a task scheduler ensuring that no task depends on itself through a chain of other tasks. These are real-world examples of cycle detection - finding loops in graphs where you can start at a vertex and follow edges until you return to where you started.
</p>

<h3><u>Understanding Cycles in Different Graph Types</u></h3>

<p>
The way we detect cycles differs between undirected and directed graphs. Let's understand why:
</p>

<h4><b>Undirected Graphs</b></h4>
<p>
In an undirected graph, a cycle exists when we can start at a vertex and follow edges to return to the start, without using any edge twice. For example:
</p>

<pre>
    A --- B
    |     |    This has a cycle: A-B-C-A
    C ----

    A --- B
    |         This has no cycles
    C
</pre>

<h4><b>Directed Graphs</b></h4>
<p>
In a directed graph, we need to follow edges in their specified direction to find cycles. This makes the problem more nuanced:
</p>

<pre>
    A → B
    ↑   ↓    This has a cycle: A→B→C→A
    C ←

    A → B
    ↑   ↓    This has no cycles
    D   C
</pre>

<h3><u>Core Detection Strategies</u></h3>

<p>
There are several ways to detect cycles, each with its own advantages:
</p>

<h4><b>1. DFS with Colors (Three-Color Method)</b></h4>
<p>
This elegant approach uses three states to track vertices:
</p>
<li>WHITE: Unvisited vertex</li>
<li>GRAY: Vertex being explored (in current path)</li>
<li>BLACK: Completely explored vertex</li>

<p>
Finding a gray vertex during exploration indicates a cycle.
</p>

<h4><b>2. DFS with Path Tracking</b></h4>
<p>
This method keeps track of vertices in the current exploration path:
</p>
<li>Maintain a set of vertices in current path</li>
<li>Add vertices as we explore deeper</li>
<li>Remove vertices when backtracking</li>
<li>Finding a vertex already in path indicates cycle</li>

<h4><b>3. Union-Find for Undirected Graphs</b></h4>
<p>
A different approach specifically for undirected graphs:
</p>
<li>Start with each vertex in its own set</li>
<li>Process edges one by one</li>
<li>If edge connects vertices in same set, cycle found</li>
<li>Otherwise, union the sets</li>

<h3><u>Common Applications</u></h3>

<h4><b>1. Dependency Detection</b></h4>
<p>
Crucial for finding circular dependencies in:
</p>
<li>Build systems</li>
<li>Package managers</li>
<li>Task schedulers</li>

<h4><b>2. Deadlock Detection</b></h4>
<p>
Important in operating systems:
</p>
<li>Resource allocation graphs</li>
<li>Process dependencies</li>
<li>Lock ordering</li>

<h4><b>3. Circuit Analysis</b></h4>
<p>
Used in electronic circuit design:
</p>
<li>Finding feedback loops</li>
<li>Circuit optimization</li>
<li>Signal flow analysis</li>

<h3><u>Edge Cases and Challenges</u></h3>

<p>
Watch out for these special situations:
</p>

<h4><b>1. Self Loops</b></h4>
<p>
A vertex directly connected to itself:
</p>
<pre>
    A → A
</pre>

<h4><b>2. Multi-Edge Cycles</b></h4>
<p>
Multiple edges between same vertices:
</p>
<pre>
    A ⇄ B
</pre>

<h4><b>3. Disconnected Components</b></h4>
<p>
Need to check all components:
</p>
<pre>
    A → B    C → D
         ↑      ↓
         E ← F ←
</pre>`,

  codeExample: `# Comprehensive implementation of cycle detection algorithms

from enum import Enum
from typing import List, Set, Dict, Optional

class Color(Enum):
    """Colors for DFS cycle detection"""
    WHITE = 0  # Unvisited
    GRAY = 1   # In current path
    BLACK = 2  # Completed

class CycleDetector:
    """Class implementing various cycle detection algorithms"""
    
    def has_cycle_directed_colors(self, graph: List[List[int]]) -> bool:
        """
        Detect cycle in directed graph using three-color method.
        Time: O(V + E), Space: O(V)
        """
        def dfs(vertex: int, colors: List[Color]) -> bool:
            # Gray vertex found - cycle detected
            if colors[vertex] == Color.GRAY:
                return True
            
            # Black vertex found - already explored
            if colors[vertex] == Color.BLACK:
                return False
            
            # Mark as being explored
            colors[vertex] = Color.GRAY
            
            # Check all neighbors
            for neighbor in graph[vertex]:
                if dfs(neighbor, colors):
                    return True
            
            # Mark as completely explored
            colors[vertex] = Color.BLACK
            return False
        
        n = len(graph)
        colors = [Color.WHITE] * n
        
        # Check each vertex in case of disconnected components
        for vertex in range(n):
            if colors[vertex] == Color.WHITE:
                if dfs(vertex, colors):
                    return True
        
        return False
    
    def has_cycle_directed_path(self, graph: List[List[int]]) -> bool:
        """
        Detect cycle in directed graph using path tracking.
        Returns tuple (bool, list) where list contains cycle if found.
        Time: O(V + E), Space: O(V)
        """
        def dfs(vertex: int, path: List[int], 
               visited: Set[int], on_path: Set[int]) -> Optional[List[int]]:
            # Vertex already in current path - cycle found
            if vertex in on_path:
                # Extract cycle
                idx = path.index(vertex)
                return path[idx:]
            
            # Already fully explored this vertex
            if vertex in visited:
                return None
            
            visited.add(vertex)
            on_path.add(vertex)
            path.append(vertex)
            
            # Check all neighbors
            for neighbor in graph[vertex]:
                cycle = dfs(neighbor, path, visited, on_path)
                if cycle:
                    return cycle
            
            # Backtrack
            path.pop()
            on_path.remove(vertex)
            return None
        
        n = len(graph)
        visited = set()
        
        # Check each vertex
        for vertex in range(n):
            if vertex not in visited:
                cycle = dfs(vertex, [], visited, set())
                if cycle:
                    return True, cycle
        
        return False, []
    
    def has_cycle_undirected(self, n: int, edges: List[List[int]]) -> bool:
        """
        Detect cycle in undirected graph using Union-Find.
        Time: O(E * α(n)) where α is inverse Ackermann function
        Space: O(V)
        """
        class UnionFind:
            def __init__(self, size: int):
                self.parent = list(range(size))
                self.rank = [0] * size
            
            def find(self, x: int) -> int:
                if self.parent[x] != x:
                    self.parent[x] = self.find(self.parent[x])
                return self.parent[x]
            
            def union(self, x: int, y: int) -> bool:
                px, py = self.find(x), self.find(y)
                
                if px == py:
                    return False  # Cycle detected
                
                if self.rank[px] < self.rank[py]:
                    px, py = py, px
                self.parent[py] = px
                if self.rank[px] == self.rank[py]:
                    self.rank[px] += 1
                return True
        
        uf = UnionFind(n)
        
        # Process each edge
        for u, v in edges:
            if not uf.union(u, v):
                return True
        
        return False
    
    def find_all_cycles(self, graph: List[List[int]]) -> List[List[int]]:
        """
        Find all simple cycles in directed graph using Johnson's algorithm.
        Returns list of cycles, where each cycle is a list of vertices.
        Time: O((V + E)(C + 1)) where C is number of cycles
        Space: O(V + E)
        """
        def unblock(u: int, blocked: Set[int], 
                   b: Dict[int, Set[int]]) -> None:
            """Unblock vertex and propagate"""
            if u in blocked:
                blocked.remove(u)
                while b[u]:
                    w = b[u].pop()
                    unblock(w, blocked, b)
        
        def circuit(v: int, start: int, stack: List[int],
                   blocked: Set[int], b: Dict[int, Set[int]]) -> bool:
            """Find cycles starting from v"""
            found_cycle = False
            stack.append(v)
            blocked.add(v)
            
            # Check all neighbors
            for w in graph[v]:
                if w == start:  # Cycle found
                    cycles.append(stack[:])
                    found_cycle = True
                elif w not in blocked:
                    if circuit(w, start, stack, blocked, b):
                        found_cycle = True
            
            if found_cycle:
                unblock(v, blocked, b)
            else:
                for w in graph[v]:
                    if v not in b[w]:
                        b[w].add(v)
            
            stack.pop()
            return found_cycle
        
        cycles = []
        n = len(graph)
        
        # Try each vertex as potential start
        for start in range(n):
            blocked = set()
            b = {v: set() for v in range(n)}
            stack = []
            circuit(start, start, stack, blocked, b)
        
        return cycles`,

  exercises: [
    {
      prompt: 'Implement a function that determines if removing a particular edge would break all cycles in a directed graph. Return true if the edge is crucial for all cycles.',
      initialCode: `def is_critical_cycle_edge(graph: List[List[int]], 
                            u: int, v: int) -> bool:
    """
    Return True if edge u->v is part of all cycles in graph.
    graph: adjacency list representation
    """
    # Your code here
    pass`,
      solution: `def is_critical_cycle_edge(graph: List[List[int]], 
                            u: int, v: int) -> bool:
    def has_cycle_without_edge(start: int, 
                             skip_u: int, skip_v: int) -> bool:
        """Check if cycle exists avoiding edge u->v"""
        visited = set()
        path = set()
        
        def dfs(vertex: int) -> bool:
            if vertex in path:
                return True
            if vertex in visited:
                return False
                
            visited.add(vertex)
            path.add(vertex)
            
            for neighbor in graph[vertex]:
                # Skip the edge we're testing
                if vertex == skip_u and neighbor == skip_v:
                    continue
                if dfs(neighbor):
                    return True
            
            path.remove(vertex)
            return False
        
        return dfs(start)
    
    # First check if graph has any cycle
    has_original_cycle = False
    n = len(graph)
    visited = set()
    path = set()
    
    def has_cycle(vertex: int) -> bool:
        if vertex in path:
            return True
        if vertex in visited:
            return False
            
        visited.add(vertex)
        path.add(vertex)
        
        for neighbor in graph[vertex]:
            if has_cycle(neighbor):
                return True
        
        path.remove(vertex)
        return False
    
    # Check for any cycle
    for vertex in range(n):
        if vertex not in visited:
            if has_cycle(vertex):
                has_original_cycle = True
                break
    
    if not has_original_cycle:
        return False
    
    # Check if removing edge breaks all cycles
    return not has_cycle_without_edge(u, u, v)`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Implement a function that counts the number of different simple cycles (cycles that don\'t visit any vertex more than once except the start/end) in an undirected graph.',
      initialCode: `def count_simple_cycles(n: int, edges: List[List[int]]) -> int:
    """
    Count number of simple cycles in undirected graph.
    n: number of vertices
    edges: list of [u,v] pairs representing edges
    """
    # Your code here
    pass`,
      solution: `def count_simple_cycles(n: int, edges: List[List[int]]) -> int:
    # Build adjacency list
    graph = [[] for _ in range(n)]
    for u, v in edges:
        graph[u].append(v)
        graph[v].append(u)
    
    def dfs(start: int, vertex: int, path: List[int], 
           visited: Set[int]) -> int:
        # Found cycle back to start
        if len(path) > 2 and vertex == start:
            return 1
        
        count = 0
        visited.add(vertex)
        
        for neighbor in graph[vertex]:
            # Only consider forward edges to avoid counting
            # same cycle multiple times
            if neighbor not in visited and neighbor > start:
                path.append(neighbor)
                count += dfs(start, neighbor, path, visited)
                path.pop()
            elif neighbor == start and len(path) > 2:
                count += 1
        
        visited.remove(vertex)
        return count
    
    total_cycles = 0
    for vertex in range(n):
        total_cycles += dfs(vertex, vertex, [vertex], set())
    
    # Each cycle was counted twice (once from each direction)
    return total_cycles // 2`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why does the three-color method use three states instead of just two (visited/unvisited)?',
      options: [
        'To save memory',
        'To make the algorithm faster',
        'To distinguish between vertices in the current path and fully explored vertices',
        'To handle disconnected components'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Using three colors actually uses more memory than two.',
        'Incorrect. The number of colors doesn\'t significantly affect speed.',
        'Correct! The gray color specifically identifies vertices in the current exploration path, which is crucial for cycle detection.',
        'Incorrect. Disconnected components can be handled with just two colors.'
      ],
      difficulty: Difficulty.Beginner
    },
    {
      question: 'What is the key difference between cycle detection in directed vs undirected graphs?',
      options: [
        'Directed graphs can\'t have cycles',
        'Undirected graphs always have cycles',
        'In directed graphs, cycles must follow edge directions while undirected graphs allow bidirectional travel',
        'Cycle detection is faster in directed graphs'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Directed graphs can definitely have cycles.',
        'Incorrect. Many undirected graphs are acyclic.',
        'Correct! In directed graphs we must respect edge directions when finding cycles, while in undirected graphs we can traverse edges in either direction, making cycle detection conceptually different.',
        'Incorrect. The speed depends on the specific algorithm and graph structure, not the graph type.'
      ],
      difficulty: Difficulty.Intermediate
    },
    {
      question: 'When using Union-Find for cycle detection in undirected graphs, what indicates a cycle has been found?',
      options: [
        'When a vertex has no parent',
        'When we find vertices already in the same set',
        'When we can\'t merge two sets',
        'When all vertices are visited'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Having no parent is normal for set representatives.',
        'Correct! Finding two vertices already in the same set means there\'s an existing path between them, so adding an edge creates a cycle.',
        'Incorrect. Union-Find operations don\'t fail to merge sets.',
        'Incorrect. Visiting all vertices doesn\'t indicate a cycle.'
      ],
      difficulty: Difficulty.Advanced
    }
  ]
};

const courseScheduleData = {
  title: 'Understanding Course Schedule and Dependency Problems',
  content: `<p>
Imagine you're planning your college courses for the upcoming semester. Some courses require that you complete other courses first - for example, you might need to take "Calculus I" before "Calculus II". These prerequisite relationships form a directed graph where courses are vertices and prerequisites are edges. But how do we determine if it's possible to take all the courses, and in what order should we take them?
</p>

<h3><u>Understanding the Core Problem</u></h3>

<p>
Let's start with a simple example to build our intuition:
</p>

<pre>
Courses: CS101, CS102, CS201, CS202
Prerequisites:
- CS102 requires CS101
- CS201 requires CS101
- CS202 requires CS102, CS201

This forms a graph:
CS101 → CS102 → CS202
   ↘    ↗
   CS201

Can we take all courses? Yes!
One valid order: CS101, CS102, CS201, CS202
</pre>

<h3><u>Key Insights</u></h3>

<p>
The course schedule problem teaches us several important concepts:
</p>

<h4><b>1. Directed Acyclic Graphs (DAGs)</b></h4>
<p>
A valid course schedule must form a DAG because:
</p>
<li>Direction matters (prerequisites flow one way)</li>
<li>No cycles allowed (can't have circular dependencies)</li>
<li>The ordering creates a natural progression</li>

<h4><b>2. Topological Sorting</b></h4>
<p>
Finding a valid course order is equivalent to topological sorting:
</p>
<li>Start with courses that have no prerequisites</li>
<li>Take these courses first</li>
<li>Remove them from consideration</li>
<li>Repeat with newly available courses</li>

<h3><u>Common Variations</u></h3>

<h4><b>1. Basic Schedule Possibility</b></h4>
<p>
The simplest version asks if it's possible to complete all courses:
</p>
<li>Check for cycles (impossible if cycles exist)</li>
<li>Ensure all courses are reachable</li>
<li>Return true/false for possibility</li>

<h4><b>2. Finding Valid Order</b></h4>
<p>
Return a valid sequence of courses:
</p>
<li>Detect if possible first</li>
<li>Use either DFS or Kahn's algorithm</li>
<li>Return any valid ordering</li>

<h4><b>3. Semester Planning</b></h4>
<p>
Group courses into minimum number of semesters:
</p>
<li>Each semester can take courses whose prerequisites are met</li>
<li>Try to parallelize courses when possible</li>
<li>Minimize total number of semesters</li>

<h3><u>Two Main Approaches</u></h3>

<h4><b>1. DFS with Cycle Detection</b></h4>
<p>
This approach uses colors to track vertex states:
</p>
<li>White: Unvisited course</li>
<li>Gray: Course being processed (in current path)</li>
<li>Black: Course fully processed</li>

<p>
Finding a gray vertex while exploring indicates a cycle (impossible schedule).
</p>

<h4><b>2. Kahn's Algorithm (BFS)</b></h4>
<p>
This approach tracks in-degree (number of prerequisites) for each course:
</p>
<li>Start with courses having no prerequisites</li>
<li>Take these courses, reducing in-degree of dependent courses</li>
<li>Add newly available courses (in-degree = 0) to queue</li>
<li>Track courses taken to ensure all are possible</li>`,

  codeExample: `# Comprehensive implementation of course schedule solutions

from collections import defaultdict, deque
from enum import Enum
from typing import List, Set, Dict, Optional

class CourseScheduler:
    """Class implementing various course scheduling algorithms"""
    
    def can_finish_dfs(self, numCourses: int, 
                      prerequisites: List[List[int]]) -> bool:
        """
        Determine if it's possible to finish all courses using DFS.
        Time: O(V + E), Space: O(V + E)
        """
        # Build adjacency list
        graph = defaultdict(list)
        for course, prereq in prerequisites:
            graph[course].append(prereq)
        
        # Track visited courses
        # 0: unvisited, 1: visiting, 2: completed
        visited = [0] * numCourses
        
        def has_cycle(course: int) -> bool:
            # Visiting this course again in current path - cycle found
            if visited[course] == 1:
                return True
            # Already fully explored - no cycle here
            if visited[course] == 2:
                return False
            
            # Mark as being visited
            visited[course] = 1
            
            # Check all prerequisites
            for prereq in graph[course]:
                if has_cycle(prereq):
                    return True
            
            # Mark as completed
            visited[course] = 2
            return False
        
        # Check each course
        for course in range(numCourses):
            if has_cycle(course):
                return False
        
        return True
    
    def find_order_kahns(self, numCourses: int, 
                        prerequisites: List[List[int]]) -> List[int]:
        """
        Find valid course ordering using Kahn's algorithm.
        Returns empty list if impossible.
        Time: O(V + E), Space: O(V + E)
        """
        # Build adjacency list and in-degree count
        graph = defaultdict(list)
        in_degree = [0] * numCourses
        
        for course, prereq in prerequisites:
            graph[prereq].append(course)
            in_degree[course] += 1
        
        # Initialize queue with courses having no prerequisites
        queue = deque([i for i in range(numCourses) if in_degree[i] == 0])
        order = []
        
        # Process all courses
        while queue:
            course = queue.popleft()
            order.append(course)
            
            # Reduce in-degree for dependent courses
            for dependent in graph[course]:
                in_degree[dependent] -= 1
                # If all prerequisites met, add to queue
                if in_degree[dependent] == 0:
                    queue.append(dependent)
        
        # Return order if all courses included, empty list if impossible
        return order if len(order) == numCourses else []
    
    def minimum_semesters(self, numCourses: int, 
                         prerequisites: List[List[int]]) -> int:
        """
        Find minimum number of semesters needed.
        Returns -1 if impossible.
        Time: O(V + E), Space: O(V + E)
        """
        # Build adjacency list
        graph = defaultdict(list)
        in_degree = [0] * numCourses
        
        for course, prereq in prerequisites:
            graph[prereq].append(course)
            in_degree[course] += 1
        
        # Initialize with courses having no prerequisites
        queue = deque([(i, 1) for i in range(numCourses) 
                      if in_degree[i] == 0])
        max_semester = 0
        courses_taken = 0
        
        # Process all courses
        while queue:
            course, semester = queue.popleft()
            courses_taken += 1
            max_semester = max(max_semester, semester)
            
            # Process dependent courses
            for dependent in graph[course]:
                in_degree[dependent] -= 1
                if in_degree[dependent] == 0:
                    queue.append((dependent, semester + 1))
        
        return max_semester if courses_taken == numCourses else -1
    
    def is_optimal_schedule(self, numCourses: int,
                          prerequisites: List[List[int]],
                          schedule: List[int]) -> bool:
        """
        Verify if given schedule is optimal (takes minimum possible semesters).
        Time: O(V + E), Space: O(V + E)
        """
        # Build prerequisite sets for quick lookup
        prereq_sets = defaultdict(set)
        for course, prereq in prerequisites:
            prereq_sets[course].add(prereq)
        
        # Track when each course is taken
        course_times = [0] * numCourses
        current_time = 1
        
        for course in schedule:
            # Find latest prerequisite completion time
            max_prereq_time = 0
            for prereq in prereq_sets[course]:
                if course_times[prereq] == 0:
                    return False  # Prerequisite not taken
                max_prereq_time = max(max_prereq_time, 
                                    course_times[prereq])
            
            # Course must be taken after all prerequisites
            if max_prereq_time >= current_time:
                return False
            
            course_times[course] = current_time
            current_time += 1
        
        return True`,

  exercises: [
    {
      prompt: 'Implement a function that determines if adding a new prerequisite relationship between two courses would make the course schedule impossible to complete.',
      initialCode: `def would_create_cycle(numCourses: int,
                         prerequisites: List[List[int]],
                         new_prereq: List[int]) -> bool:
    """
    Return True if adding new_prereq would create a cycle.
    new_prereq: [course, prerequisite]
    """
    # Your code here
    pass`,
      solution: `def would_create_cycle(numCourses: int,
                         prerequisites: List[List[int]],
                         new_prereq: List[int]) -> bool:
    # Build graph including new prerequisite
    graph = defaultdict(list)
    for course, prereq in prerequisites:
        graph[course].append(prereq)
    
    course, prereq = new_prereq
    graph[course].append(prereq)
    
    def has_path(start: int, target: int, visited: Set[int]) -> bool:
        """Check if path exists from start to target"""
        if start == target:
            return True
        
        visited.add(start)
        
        for next_course in graph[start]:
            if next_course not in visited:
                if has_path(next_course, target, visited):
                    return True
        
        return False
    
    # Check if new prerequisite creates path from
    # prerequisite back to course (cycle)
    return has_path(prereq, course, set())`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement a function that finds all courses that must be taken before a given target course (all direct and indirect prerequisites).',
      initialCode: `def find_all_prerequisites(numCourses: int,
                             prerequisites: List[List[int]],
                             target: int) -> List[int]:
    """
    Return list of all courses that must be taken before target.
    """
    # Your code here
    pass`,
      solution: `def find_all_prerequisites(numCourses: int,
                             prerequisites: List[List[int]],
                             target: int) -> List[int]:
    # Build adjacency list
    graph = defaultdict(list)
    for course, prereq in prerequisites:
        graph[course].append(prereq)
    
    # Use DFS to find all prerequisites
    required = set()
    
    def find_prereqs(course: int) -> None:
        for prereq in graph[course]:
            if prereq not in required:
                required.add(prereq)
                find_prereqs(prereq)
    
    # Start from target course
    find_prereqs(target)
    
    return list(required)`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why is cycle detection crucial in course scheduling problems?',
      options: [
        'To optimize the schedule length',
        'To minimize the number of courses',
        'Because cycles represent impossible prerequisites',
        'To reduce memory usage'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Cycle detection isn\'t about optimization.',
        'Incorrect. The number of courses is fixed by the problem.',
        'Correct! A cycle in prerequisites means no valid order exists, as each course in the cycle requires another course in the cycle to be taken first.',
        'Incorrect. Cycle detection isn\'t related to memory usage.'
      ],
      difficulty: Difficulty.Beginner
    },
    {
      question: 'What advantage does Kahn\'s algorithm have over DFS for course scheduling?',
      options: [
        'It\'s always faster',
        'It naturally produces a valid course order',
        'It uses less memory',
        'It can handle cycles better'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Both algorithms have similar time complexity.',
        'Correct! Kahn\'s algorithm builds the course order as it goes, while DFS needs additional processing to produce an order.',
        'Incorrect. Both algorithms use similar amounts of memory.',
        'Incorrect. Both algorithms can detect cycles equally well.'
      ],
      difficulty: Difficulty.Intermediate
    },
    {
      question: 'When grouping courses into semesters, what determines the minimum number of semesters needed?',
      options: [
        'The total number of courses',
        'The longest prerequisite chain',
        'The number of starting courses',
        'The average number of prerequisites'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Total courses alone don\'t determine semester count.',
        'Correct! The longest chain of prerequisites determines the minimum number of semesters, as these courses must be taken sequentially.',
        'Incorrect. Starting courses affect parallelization but not minimum semesters.',
        'Incorrect. Average prerequisites don\'t determine minimum semesters.'
      ],
      difficulty: Difficulty.Advanced
    }
  ]
};

const buildOrderData = {
  title: 'Mastering Build Order and Task Scheduling',
  content: `<p>
Let's start by understanding what happens when you build a large software project. Imagine you're compiling a program that consists of multiple files. Some files depend on others - for example, if file A uses functions defined in file B, then B must be compiled before A. This creates a network of dependencies that determines the order in which files must be compiled.
</p>

<p>
The same pattern appears in many other scenarios: deploying microservices where some services depend on others, running data processing tasks where outputs of some tasks feed into others, or installing software packages where certain packages require others to be installed first.
</p>

<h3><u>The Build Order Challenge</u></h3>

<p>
Consider this example of a small software project:
</p>

<pre>
Files in project:
- database.cpp
- config.cpp (needs database.cpp)
- api.cpp (needs config.cpp)
- utils.cpp
- main.cpp (needs api.cpp and utils.cpp)

This creates a dependency graph:
database → config → api → main
                         ↗ 
           utils -------→

A valid build order would be:
database → utils → config → api → main
</pre>

<h3><u>Core Concepts</u></h3>

<p>
Build order problems teach us several fundamental concepts about dependency management:
</p>

<h4><b>1. Dependency Graph Properties</b></h4>
<p>
The dependency relationships must form a Directed Acyclic Graph (DAG) because:
</p>
<li>Direction matters (if A depends on B, B cannot depend on A)</li>
<li>Cycles make building impossible (circular dependencies)</li>
<li>Multiple valid orders may exist (any topological sort is valid)</li>

<h4><b>2. Build System Requirements</b></h4>
<p>
A good build system needs to:
</p>
<li>Detect circular dependencies early</li>
<li>Parallelize independent tasks when possible</li>
<li>Handle partial builds efficiently</li>
<li>Track changes to rebuild only what's necessary</li>

<h3><u>Solution Strategies</u></h3>

<h4><b>1. Dependency Resolution</b></h4>
<p>
We can solve build order problems using two main approaches:
</p>

<h4><b>DFS-based Resolution</b></h4>
<p>
This approach follows dependencies deeply:
</p>
<li>Start with any unbuilt component</li>
<li>Recursively build all its dependencies first</li>
<li>Mark components as built when completed</li>
<li>Handle cycles by tracking exploration path</li>

<h4><b>Level-based Resolution</b></h4>
<p>
This approach builds in waves:
</p>
<li>Find all components with no dependencies</li>
<li>Build these components in parallel</li>
<li>Remove them from the graph</li>
<li>Repeat with newly independent components</li>

<h3><u>Handling Real-World Complexity</u></h3>

<h4><b>1. Optional Dependencies</b></h4>
<p>
Some build systems need to handle optional dependencies:
</p>
<li>Features that can be enabled/disabled</li>
<li>Platform-specific components</li>
<li>Development vs. production dependencies</li>

<h4><b>2. Version Conflicts</b></h4>
<p>
Modern build systems often deal with version requirements:
</p>
<li>Different components requiring different versions</li>
<li>Version compatibility ranges</li>
<li>Resolving version conflicts</li>

<h4><b>3. Dynamic Dependencies</b></h4>
<p>
Some systems have dependencies that change at runtime:
</p>
<li>Plugin systems</li>
<li>Feature flags</li>
<li>Environment-specific dependencies</li>`,

  codeExample: `# Comprehensive implementation of build order resolution

from collections import defaultdict, deque
from enum import Enum
from typing import List, Set, Dict, Optional, Tuple

class BuildSystem:
    """Class implementing build order resolution algorithms"""
    
    def find_build_order_dfs(self, components: List[str],
                            dependencies: List[Tuple[str, str]]) -> List[str]:
        """
        Find valid build order using DFS.
        components: list of all components
        dependencies: list of (component, dependency) pairs
        Returns build order or raises exception if impossible
        Time: O(V + E), Space: O(V + E)
        """
        # Build dependency graph
        graph = defaultdict(list)
        for comp, dep in dependencies:
            graph[comp].append(dep)
        
        # Track build states
        # 0: unvisited, 1: visiting, 2: built
        build_states = {comp: 0 for comp in components}
        build_order = []
        
        def build_component(comp: str) -> None:
            # Check for circular dependency
            if build_states[comp] == 1:
                raise ValueError(f"Circular dependency detected involving {comp}")
            # Already built
            if build_states[comp] == 2:
                return
                
            build_states[comp] = 1  # Mark as being built
            
            # Build all dependencies first
            for dep in graph[comp]:
                build_component(dep)
            
            build_states[comp] = 2  # Mark as built
            build_order.append(comp)
        
        # Try to build each component
        for component in components:
            if build_states[component] == 0:
                build_component(component)
        
        # Reverse to get correct build order
        return build_order[::-1]
    
    def find_build_order_kahn(self, components: List[str],
                            dependencies: List[Tuple[str, str]]) -> List[str]:
        """
        Find valid build order using Kahn's algorithm.
        Naturally handles parallel build possibilities.
        Time: O(V + E), Space: O(V + E)
        """
        # Build dependency graph and count dependencies
        graph = defaultdict(list)
        in_degree = defaultdict(int)
        
        # Initialize all components
        for comp in components:
            in_degree[comp] = 0
        
        # Add dependencies
        for comp, dep in dependencies:
            graph[dep].append(comp)
            in_degree[comp] += 1
        
        # Find all components with no dependencies
        queue = deque([comp for comp in components if in_degree[comp] == 0])
        build_order = []
        
        # Process all components
        while queue:
            # These components can be built in parallel
            level = []
            for _ in range(len(queue)):
                component = queue.popleft()
                level.append(component)
                
                # Update dependent components
                for dependent in graph[component]:
                    in_degree[dependent] -= 1
                    if in_degree[dependent] == 0:
                        queue.append(dependent)
            
            build_order.extend(level)
        
        # Check if all components were built
        if len(build_order) != len(components):
            raise ValueError("Circular dependency detected")
            
        return build_order
    
    def optimize_parallel_builds(self, components: List[str],
                               dependencies: List[Tuple[str, str]],
                               max_parallel: int) -> List[List[str]]:
        """
        Organize build order into parallel build levels,
        respecting maximum parallel build limit.
        Returns list of levels, where each level can be built in parallel.
        """
        # Build dependency graph and count dependencies
        graph = defaultdict(list)
        in_degree = defaultdict(int)
        
        for comp in components:
            in_degree[comp] = 0
        
        for comp, dep in dependencies:
            graph[dep].append(comp)
            in_degree[comp] += 1
        
        # Track component build times (could be read from build history)
        build_times = {comp: 1 for comp in components}
        
        # Process components in levels
        queue = deque([comp for comp in components if in_degree[comp] == 0])
        build_levels = []
        
        while queue:
            # Get components ready to build
            available = []
            while queue and len(available) < max_parallel:
                available.append(queue.popleft())
            
            if not available:
                break
                
            # Create build level
            build_levels.append(available)
            
            # Update dependencies
            for component in available:
                for dependent in graph[component]:
                    in_degree[dependent] -= 1
                    if in_degree[dependent] == 0:
                        queue.append(dependent)
        
        return build_levels`,

  exercises: [
    {
      prompt: 'Implement a function that determines if modifying a component would require rebuilding another specific component (directly or indirectly dependent on it).',
      initialCode: `def requires_rebuild(components: List[str],
                       dependencies: List[Tuple[str, str]],
                       modified: str,
                       target: str) -> bool:
    """
    Return True if modifying 'modified' requires rebuilding 'target'.
    """
    # Your code here
    pass`,
      solution: `def requires_rebuild(components: List[str],
                       dependencies: List[Tuple[str, str]],
                       modified: str,
                       target: str) -> bool:
    # Build dependency graph (reverse of build order)
    graph = defaultdict(list)
    for comp, dep in dependencies:
        graph[comp].append(dep)
    
    def is_dependent(current: str, visited: Set[str]) -> bool:
        """Check if current component depends on modified component"""
        if current == modified:
            return True
        
        if current in visited:
            return False
            
        visited.add(current)
        
        # Check all dependencies
        for dep in graph[current]:
            if is_dependent(dep, visited):
                return True
                
        return False
    
    # Check if target depends on modified component
    return is_dependent(target, set())`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement a function that finds the minimum set of components that need to be rebuilt when multiple components are modified.',
      initialCode: `def minimum_rebuild_set(components: List[str],
                          dependencies: List[Tuple[str, str]],
                          modified: List[str]) -> Set[str]:
    """
    Return set of all components that need to be rebuilt.
    """
    # Your code here
    pass`,
      solution: `def minimum_rebuild_set(components: List[str],
                          dependencies: List[Tuple[str, str]],
                          modified: List[str]) -> Set[str]:
    # Build forward dependency graph
    graph = defaultdict(list)
    for comp, dep in dependencies:
        graph[dep].append(comp)
    
    # Find all affected components using BFS
    rebuild_set = set(modified)
    queue = deque(modified)
    
    while queue:
        component = queue.popleft()
        
        # Check all components that depend on this one
        for dependent in graph[component]:
            if dependent not in rebuild_set:
                rebuild_set.add(dependent)
                queue.append(dependent)
    
    return rebuild_set`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why is it important to detect circular dependencies in a build system?',
      options: [
        'To optimize build time',
        'To save memory usage',
        'Because circular dependencies make building impossible',
        'To improve code organization'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. While optimization is important, circular dependency detection is about feasibility.',
        'Incorrect. Memory usage isn\'t related to circular dependency detection.',
        'Correct! Circular dependencies create a situation where no valid build order exists, as each component in the cycle requires another to be built first.',
        'Incorrect. Code organization is a separate concern from build feasibility.'
      ],
      difficulty: Difficulty.Beginner
    },
    {
      question: 'What advantage does level-based build resolution have over DFS-based resolution?',
      options: [
        'It uses less memory',
        'It naturally identifies components that can be built in parallel',
        'It\'s always faster',
        'It handles circular dependencies better'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Both approaches use similar amounts of memory.',
        'Correct! Level-based resolution groups independent components together, making it easier to parallelize the build process.',
        'Incorrect. Performance depends on the specific dependency structure.',
        'Incorrect. Both approaches can detect circular dependencies equally well.'
      ],
      difficulty: Difficulty.Intermediate
    },
    {
      question: 'When optimizing parallel builds, what determines the minimum number of build levels needed?',
      options: [
        'The total number of components',
        'The longest chain of dependencies',
        'The number of modified components',
        'The maximum parallel build limit'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Total components alone don\'t determine required levels.',
        'Correct! The longest chain of dependent components determines the minimum number of sequential build steps required, as these must be built in order.',
        'Incorrect. Modified components affect what needs rebuilding but not minimum levels.',
        'Incorrect. Parallel limit affects how many components can build together but not minimum levels.'
      ],
      difficulty: Difficulty.Advanced
    }
  ]
};

const parallelCoursesData = {
  title: 'Optimizing Parallel Task Execution',
  content: `<p>
Imagine you're managing the construction of a building. Some tasks like laying the foundation must happen before others like building walls, but tasks like painting different rooms can happen simultaneously. Your goal is to complete the project as quickly as possible by doing independent tasks in parallel. This is exactly the challenge we face when optimizing parallel task execution.
</p>

<h3><u>Understanding Parallel Execution</u></h3>

<p>
Let's start with a simple example to build our intuition:
</p>

<pre>
Tasks:
A: Setup Database (2 hours)
B: Configure API (1 hour, needs A)
C: Write Tests (2 hours)
D: Deploy Service (1 hour, needs B)
E: Run Integration Tests (1 hour, needs B, C)

This forms a dependency graph with task durations:
A(2) → B(1) → D(1)
         ↘    
  C(2) → E(1)

Minimum completion time: 4 hours
(A→B can run in parallel with C, then D and E can run in parallel)
</pre>

<h3><u>Key Concepts in Parallel Scheduling</u></h3>

<h4><b>1. Critical Path</b></h4>
<p>
The critical path is the longest path through the dependency graph, determining the minimum possible completion time. Key points:
</p>
<li>Sum of task durations along the path</li>
<li>Cannot be shortened by parallelization</li>
<li>Any delay in critical path tasks delays the entire project</li>

<h4><b>2. Task Levels</b></h4>
<p>
Tasks can be organized into levels based on dependencies:
</p>
<li>Level 0: Tasks with no dependencies</li>
<li>Level N: Tasks whose dependencies are in levels 0 to N-1</li>
<li>Tasks in same level can run in parallel</li>

<h4><b>3. Resource Constraints</b></h4>
<p>
Real systems often have limited resources:
</p>
<li>Maximum number of parallel tasks</li>
<li>Different resource types (CPU, memory, etc.)</li>
<li>Resource sharing impacts performance</li>

<h3><u>Optimization Strategies</u></h3>

<h4><b>1. Level-Based Scheduling</b></h4>
<p>
Group tasks by their dependency levels:
</p>
<li>Identify tasks that can start immediately</li>
<li>Schedule them in parallel</li>
<li>Move to tasks whose dependencies are met</li>
<li>Balance level sizes with resource constraints</li>

<h4><b>2. Priority Scheduling</b></h4>
<p>
Prioritize tasks based on:
</p>
<li>Position in critical path</li>
<li>Number of dependent tasks</li>
<li>Task duration</li>
<li>Resource availability</li>

<h4><b>3. Dynamic Scheduling</b></h4>
<p>
Adapt schedule based on runtime conditions:
</p>
<li>Monitor task progress</li>
<li>Reallocate resources as needed</li>
<li>Handle task failures and retries</li>
<li>Balance load across resources</li>`,

  codeExample: `# Comprehensive implementation of parallel execution scheduling

from collections import defaultdict, deque
from typing import List, Dict, Set, Optional, Tuple
import heapq

class ParallelScheduler:
    """Class implementing parallel task scheduling algorithms"""
    
    def find_minimum_time(self, tasks: List[Tuple[int, int]], 
                         dependencies: List[List[int]], 
                         num_workers: int) -> int:
        """
        Calculate minimum time to complete all tasks with limited workers.
        tasks: list of (task_id, duration) pairs
        dependencies: list of [task, dependency] pairs
        num_workers: maximum number of parallel tasks
        Returns: minimum completion time
        Time: O(V + E), Space: O(V + E)
        """
        # Build dependency graph and count dependencies
        n = len(tasks)
        graph = defaultdict(list)
        in_degree = [0] * n
        durations = [0] * n
        
        # Initialize task durations
        for task_id, duration in tasks:
            durations[task_id] = duration
        
        # Build graph and count dependencies
        for task, dep in dependencies:
            graph[dep].append(task)
            in_degree[task] += 1
        
        # Track earliest possible start time for each task
        earliest_start = [0] * n
        
        # Priority queue holds (start_time, task_id)
        # Tasks with earlier possible start times are prioritized
        pq = []
        
        # Add tasks with no dependencies
        for task in range(n):
            if in_degree[task] == 0:
                heapq.heappush(pq, (0, task))
        
        current_time = 0
        workers_available = num_workers
        running_tasks = []  # (end_time, task_id)
        
        while pq or running_tasks:
            # Complete tasks that are done
            while running_tasks and running_tasks[0][0] <= current_time:
                end_time, completed_task = heapq.heappop(running_tasks)
                workers_available += 1
                
                # Add tasks that now have all dependencies met
                for next_task in graph[completed_task]:
                    in_degree[next_task] -= 1
                    if in_degree[next_task] == 0:
                        earliest_start[next_task] = max(
                            earliest_start[next_task],
                            end_time
                        )
                        heapq.heappush(pq, 
                                     (earliest_start[next_task], next_task))
            
            # Start new tasks if workers are available
            while pq and workers_available > 0:
                start_time, task = heapq.heappop(pq)
                # Update current_time if we need to wait for task to be ready
                current_time = max(current_time, start_time)
                end_time = current_time + durations[task]
                heapq.heappush(running_tasks, (end_time, task))
                workers_available -= 1
            
            # Move time to next event (task completion)
            if running_tasks and workers_available == 0:
                current_time = running_tasks[0][0]
        
        return current_time
    
    def find_critical_path(self, tasks: List[Tuple[int, int]], 
                          dependencies: List[List[int]]) -> List[int]:
        """
        Find the critical path through task dependency graph.
        Returns list of task IDs in critical path.
        Time: O(V + E), Space: O(V + E)
        """
        n = len(tasks)
        graph = defaultdict(list)
        durations = [0] * n
        
        # Initialize task durations and build graph
        for task_id, duration in tasks:
            durations[task_id] = duration
        for task, dep in dependencies:
            graph[dep].append(task)
        
        # Calculate earliest completion times
        earliest = [0] * n
        
        def calculate_earliest(task: int) -> int:
            if earliest[task] != 0:
                return earliest[task]
            
            max_prereq = 0
            for dep in dependencies:
                if dep[0] == task:
                    max_prereq = max(max_prereq, 
                                   calculate_earliest(dep[1]))
            
            earliest[task] = max_prereq + durations[task]
            return earliest[task]
        
        # Calculate latest start times
        completion_time = max(calculate_earliest(task) 
                            for task in range(n))
        latest = [completion_time] * n
        
        def calculate_latest(task: int) -> None:
            for dep in dependencies:
                if dep[1] == task:
                    latest[task] = min(latest[task],
                                     latest[dep[0]] - durations[dep[0]])
                    calculate_latest(dep[1])
        
        for task in range(n):
            calculate_latest(task)
        
        # Find tasks with zero slack (on critical path)
        critical_path = []
        for task in range(n):
            if earliest[task] == latest[task]:
                critical_path.append(task)
        
        return critical_path
    
    def find_optimal_worker_count(self, tasks: List[Tuple[int, int]], 
                                dependencies: List[List[int]], 
                                max_workers: int) -> Tuple[int, int]:
        """
        Find optimal number of workers balancing completion time and efficiency.
        Returns (optimal_workers, completion_time)
        """
        best_workers = 1
        best_efficiency = 0
        best_time = float('inf')
        
        # Try different worker counts
        for workers in range(1, max_workers + 1):
            time = self.find_minimum_time(tasks, dependencies, workers)
            total_work = sum(duration for _, duration in tasks)
            efficiency = total_work / (time * workers)
            
            # Update if better efficiency found
            if efficiency > best_efficiency:
                best_efficiency = efficiency
                best_workers = workers
                best_time = time
            # Break if adding workers doesn't help
            elif time == best_time:
                break
        
        return best_workers, best_time`,

  exercises: [
    {
      prompt: 'Implement a function that determines the minimum number of parallel processing units needed to complete all tasks within a given time limit.',
      initialCode: `def min_required_workers(tasks: List[Tuple[int, int]],
                          dependencies: List[List[int]],
                          time_limit: int) -> int:
    """
    Return minimum number of workers needed to complete within time_limit.
    Return -1 if impossible regardless of workers.
    """
    # Your code here
    pass`,
      solution: `def min_required_workers(tasks: List[Tuple[int, int]],
                          dependencies: List[List[int]],
                          time_limit: int) -> int:
    # First check if time limit is even possible (critical path)
    n = len(tasks)
    graph = defaultdict(list)
    durations = [0] * n
    
    for task_id, duration in tasks:
        durations[task_id] = duration
    for task, dep in dependencies:
        graph[dep].append(task)
    
    # Calculate minimum possible time (critical path)
    min_time = [0] * n
    
    def calculate_min_time(task: int) -> int:
        if min_time[task] != 0:
            return min_time[task]
        
        max_prereq = 0
        for next_task in graph[task]:
            max_prereq = max(max_prereq, 
                           calculate_min_time(next_task))
        
        min_time[task] = max_prereq + durations[task]
        return min_time[task]
    
    critical_path_time = max(calculate_min_time(task) 
                           for task in range(n))
    
    if critical_path_time > time_limit:
        return -1
    
    # Binary search for minimum workers needed
    left, right = 1, n
    while left < right:
        mid = (left + right) // 2
        scheduler = ParallelScheduler()
        completion_time = scheduler.find_minimum_time(
            tasks, dependencies, mid)
        
        if completion_time <= time_limit:
            right = mid
        else:
            left = mid + 1
    
    return left`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Implement a function that returns the maximum number of tasks that could be running in parallel at any point during optimal execution.',
      initialCode: `def max_parallel_tasks(tasks: List[Tuple[int, int]],
                       dependencies: List[List[int]]) -> int:
    """
    Return maximum number of tasks that could run simultaneously
    in an optimal schedule.
    """
    # Your code here
    pass`,
      solution: `def max_parallel_tasks(tasks: List[Tuple[int, int]],
                       dependencies: List[List[int]]) -> int:
    n = len(tasks)
    graph = defaultdict(list)
    in_degree = [0] * n
    durations = [0] * n
    
    # Build graph and initialize
    for task_id, duration in tasks:
        durations[task_id] = duration
    for task, dep in dependencies:
        graph[dep].append(task)
        in_degree[task] += 1
    
    # Track task start and end events
    events = []  # (time, delta_tasks)
    time = 0
    ready = [(0, task) for task in range(n) 
             if in_degree[task] == 0]
    heapq.heapify(ready)
    
    while ready:
        start_time, task = heapq.heappop(ready)
        time = max(time, start_time)
        
        # Add start and end events
        events.append((time, 1))  # Task starts
        events.append((time + durations[task], -1))  # Task ends
        
        # Process dependent tasks
        for next_task in graph[task]:
            in_degree[next_task] -= 1
            if in_degree[next_task] == 0:
                heapq.heappush(ready, 
                             (time + durations[task], next_task))
    
    # Find maximum concurrent tasks
    events.sort()  # Sort by time
    current = max_concurrent = 0
    for _, delta in events:
        current += delta
        max_concurrent = max(max_concurrent, current)
    
    return max_concurrent`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why is finding the critical path important for parallel task scheduling?',
      options: [
        'To minimize memory usage',
        'To determine the theoretical minimum completion time',
        'To maximize worker utilization',
        'To simplify the implementation'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Critical path analysis isn\'t about memory optimization.',
        'Correct! The critical path determines the minimum possible completion time, as these tasks must be executed sequentially regardless of available workers.',
        'Incorrect. Worker utilization is a separate concern from critical path analysis.',
        'Incorrect. Critical path analysis actually adds complexity to the implementation.'
      ],
      difficulty: Difficulty.Beginner
    },
    {
      question: 'What determines the optimal number of workers for parallel task execution?',
      options: [
        'The total number of tasks',
        'The balance between parallelization benefit and worker efficiency',
        'The length of the critical path',
        'The number of dependencies'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Total tasks alone don\'t determine optimal worker count.',
        'Correct! The optimal number balances the benefit of parallel execution against worker efficiency and overhead.',
        'Incorrect. Critical path length affects minimum time but not optimal worker count.',
        'Incorrect. Dependencies affect execution order but not optimal worker count directly.'
      ],
      difficulty: Difficulty.Intermediate
    },
{
      question: 'When might adding more workers not improve completion time?',
      options: [
        'When tasks are too small',
        'When all remaining tasks are on the critical path',
        'When memory usage is too high',
        'When there are too many dependencies'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Task size affects efficiency but isn\'t the main factor limiting parallelization.',
        'Correct! Tasks on the critical path must be executed sequentially, so adding workers won\'t help once only critical path tasks remain.',
        'Incorrect. Memory usage is a resource constraint but doesn\'t determine if parallelization helps.',
        'Incorrect. Dependencies affect execution order but don\'t directly limit parallelization benefits.'
      ],
      difficulty: Difficulty.Intermediate
    },
    {
      question: 'What makes level-based scheduling effective for parallel execution?',
      options: [
        'It uses less memory than other approaches',
        'It naturally groups independent tasks that can run in parallel',
        'It\'s easier to implement',
        'It always produces optimal schedules'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Memory usage isn\'t the primary advantage of level-based scheduling.',
        'Correct! Level-based scheduling identifies tasks that have no dependencies on each other and can therefore run in parallel, making it natural for parallel execution.',
        'Incorrect. Implementation complexity isn\'t the main benefit.',
        'Incorrect. Level-based scheduling doesn\'t guarantee optimal schedules in all cases.'
      ],
      difficulty: Difficulty.Advanced
    }
  ]
};

const redundantConnectionData = {
  title: 'Understanding Redundant Connections and Cycle Detection',
  content: `<p>
Imagine you're designing a computer network where every machine needs to be connected to the network, either directly or through other machines. As you add connections, you might occasionally add one that's redundant - the machines it connects were already able to reach each other through other paths. Understanding these redundant connections is crucial for network optimization and troubleshooting.
</p>

<h3><u>Understanding Redundant Connections</u></h3>

<p>
Let's start with a simple example to build our intuition about redundant connections:
</p>

<pre>
Initially:           After adding redundant edge:
1 --- 2             1 --- 2
    \                   \   \\
     3                   3

The second edge between 2 and 3 is redundant because 
these nodes could already reach each other through node 1.
</pre>

<h3><u>Why Redundant Connections Matter</u></h3>

<p>
Understanding redundant connections helps us solve several important problems:
</p>

<h4><b>1. Network Design</b></h4>
<p>
In network planning, we might need to:
</p>
<li>Identify unnecessary connections</li>
<li>Find backup paths for reliability</li>
<li>Optimize network costs</li>
<li>Manage network complexity</li>

<h4><b>2. Cycle Detection</b></h4>
<p>
Redundant connections create cycles, which can:
</p>
<li>Cause infinite loops in routing</li>
<li>Create broadcast storms</li>
<li>Complicate path finding</li>
<li>Impact network performance</li>

<h3><u>Using Union-Find for Detection</u></h3>

<p>
Union-Find provides an elegant solution for finding redundant connections. Here's how it works:
</p>

<h4><b>1. Basic Approach</b></h4>
<p>
For each edge we encounter:
</p>
<li>Check if vertices are already connected</li>
<li>If connected, edge is redundant</li>
<li>If not, union the vertices</li>
<li>Continue until all edges processed</li>

<h4><b>2. Path Compression</b></h4>
<p>
We can optimize Union-Find with path compression:
</p>
<li>Flatten trees during find operations</li>
<li>Reduce future lookup times</li>
<li>Maintain near-constant time operations</li>
<li>Preserve correctness guarantees</li>

<h4><b>3. Union by Rank</b></h4>
<p>
Further optimization using ranks:
</p>
<li>Track tree depths</li>
<li>Attach shorter trees under taller ones</li>
<li>Keep trees balanced</li>
<li>Minimize path lengths</li>`,

  codeExample: `# Comprehensive implementation of redundant connection detection

from typing import List, Set, Dict, Optional, Tuple

class UnionFind:
    """Optimized Union-Find implementation"""
    
    def __init__(self, size: int):
        """Initialize with all nodes in separate sets"""
        self.parent = list(range(size))
        self.rank = [0] * size
    
    def find(self, x: int) -> int:
        """Find set representative with path compression"""
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
    
    def union(self, x: int, y: int) -> bool:
        """
        Unite sets containing x and y.
        Returns False if already united, True if newly united.
        """
        px, py = self.find(x), self.find(y)
        if px == py:
            return False
        
        # Union by rank
        if self.rank[px] < self.rank[py]:
            px, py = py, px
        self.parent[py] = px
        if self.rank[px] == self.rank[py]:
            self.rank[px] += 1
        return True

class RedundantConnectionFinder:
    """Class for finding and analyzing redundant connections"""
    
    def find_redundant_connection(self, 
                                edges: List[List[int]]) -> List[int]:
        """
        Find a redundant edge in the graph.
        Returns last edge that creates a cycle.
        Time: O(N * α(N)), Space: O(N)
        """
        n = len(edges)
        uf = UnionFind(n + 1)  # +1 for 1-based indexing
        
        for edge in edges:
            if not uf.union(edge[0], edge[1]):
                return edge
        return []
    
    def find_all_redundant_connections(self, 
                                     edges: List[List[int]]) -> List[List[int]]:
        """
        Find all redundant edges that could be removed
        while maintaining connectivity.
        Returns edges in order they're found.
        """
        n = len(edges)
        redundant = []
        
        # Try removing each edge and check connectivity
        for i in range(n):
            uf = UnionFind(n + 1)
            connected = True
            
            # Process all edges except current one
            for j, edge in enumerate(edges):
                if i != j:
                    uf.union(edge[0], edge[1])
            
            # Check if graph remains connected
            root = uf.find(1)
            for v in range(2, n + 1):
                if uf.find(v) != root:
                    connected = False
                    break
            
            if connected:
                redundant.append(edges[i])
        
        return redundant
    
    def find_critical_connections(self,
                                n: int,
                                edges: List[List[int]]) -> List[List[int]]:
        """
        Find edges that cannot be removed without
        disconnecting the graph (bridges).
        Returns list of critical edges.
        """
        # Build adjacency list
        graph = [[] for _ in range(n)]
        for u, v in edges:
            graph[u].append(v)
            graph[v].append(u)
        
        # Track discovery times and lowest reachable vertex
        discovery = [-1] * n
        low = [-1] * n
        time = [0]
        bridges = []
        
        def dfs(vertex: int, parent: int) -> None:
            discovery[vertex] = low[vertex] = time[0]
            time[0] += 1
            
            for neighbor in graph[vertex]:
                if neighbor == parent:
                    continue
                    
                if discovery[neighbor] == -1:
                    dfs(neighbor, vertex)
                    low[vertex] = min(low[vertex], low[neighbor])
                    
                    # Bridge found
                    if low[neighbor] > discovery[vertex]:
                        bridges.append([vertex, neighbor])
                else:
                    low[vertex] = min(low[vertex], discovery[neighbor])
        
        # Find bridges in each component
        for vertex in range(n):
            if discovery[vertex] == -1:
                dfs(vertex, -1)
        
        return bridges`,

  exercises: [
    {
      prompt: 'Implement a function that finds the minimum number of edges to remove to eliminate all cycles in the graph while keeping it connected.',
      initialCode: `def min_edges_to_remove(n: int, 
                        edges: List[List[int]]) -> List[List[int]]:
    """
    Find minimum set of edges to remove to make graph
    a tree (connected and acyclic).
    Return list of edges to remove.
    """
    # Your code here
    pass`,
      solution: `def min_edges_to_remove(n: int, 
                        edges: List[List[int]]) -> List[List[int]]:
    class UnionFind:
        def __init__(self, size):
            self.parent = list(range(size))
            self.rank = [0] * size
        
        def find(self, x):
            if self.parent[x] != x:
                self.parent[x] = self.find(self.parent[x])
            return self.parent[x]
        
        def union(self, x, y):
            px, py = self.find(x), self.find(y)
            if px == py:
                return False
            if self.rank[px] < self.rank[py]:
                px, py = py, px
            self.parent[py] = px
            if self.rank[px] == self.rank[py]:
                self.rank[px] += 1
            return True
    
    uf = UnionFind(n)
    edges_to_remove = []
    
    # Sort edges to prefer keeping lower weighted edges
    edges.sort(key=lambda x: x[2] if len(x) > 2 else 0)
    
    # Try to add each edge
    for edge in edges:
        if not uf.union(edge[0], edge[1]):
            edges_to_remove.append(edge)
    
    return edges_to_remove`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Implement a function that determines if removing a given edge would create more than two components in the graph.',
      initialCode: `def would_create_components(n: int,
                            edges: List[List[int]],
                            edge_to_remove: List[int]) -> bool:
    """
    Return True if removing edge_to_remove would create
    more than two components.
    """
    # Your code here
    pass`,
      solution: `def would_create_components(n: int,
                            edges: List[List[int]],
                            edge_to_remove: List[int]) -> bool:
    def count_components(graph):
        """Count number of components using DFS"""
        visited = set()
        count = 0
        
        def dfs(vertex):
            visited.add(vertex)
            for neighbor in graph[vertex]:
                if neighbor not in visited:
                    dfs(neighbor)
        
        for vertex in range(n):
            if vertex not in visited:
                count += 1
                dfs(vertex)
        
        return count
    
    # Build graph without the edge to remove
    graph = [[] for _ in range(n)]
    for u, v in edges:
        if [u, v] != edge_to_remove and [v, u] != edge_to_remove:
            graph[u].append(v)
            graph[v].append(u)
    
    # Count components after removal
    components = count_components(graph)
    return components > 2`,
      difficulty: Difficulty.Intermediate,
    }
  ],
  quizzes: [
    {
      question: 'Why is Union-Find particularly well-suited for finding redundant connections?',
      options: [
        'Because it uses less memory than other approaches',
        'Because it can efficiently determine if vertices are already connected',
        'Because it works better with large graphs',
        'Because it handles disconnected components'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Memory usage isn\'t the main advantage.',
        'Correct! Union-Find can quickly determine if two vertices are already connected, making it perfect for identifying redundant edges that connect already-connected components.',
        'Incorrect. While it scales well, this isn\'t the main advantage.',
        'Incorrect. Other algorithms can handle disconnected components equally well.'
      ],
      difficulty: Difficulty.Beginner
    },
    {
      question: 'What makes an edge redundant in terms of graph connectivity?',
      options: [
        'It connects to isolated vertices',
        'It creates a cycle in an otherwise acyclic graph',
        'It connects different components',
        'It has a high weight'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Edges to isolated vertices are essential for connectivity.',
        'Correct! A redundant edge creates an alternative path between vertices that are already connected, forming a cycle.',
        'Incorrect. Edges between components are essential for connectivity.',
        'Incorrect. Edge weight doesn\'t determine redundancy.'
      ],
      difficulty: Difficulty.Intermediate
    },
    {
      question: 'Why is path compression important when using Union-Find for redundant connection detection?',
      options: [
        'To save memory',
        'To make the code simpler',
        'To maintain near-constant time operations through tree balancing',
        'To handle disconnected components'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Path compression doesn\'t significantly affect memory usage.',
        'Incorrect. Path compression actually adds some complexity to the code.',
        'Correct! Path compression helps maintain efficient operations by keeping trees balanced and shallow, leading to near-constant time operations.',
        'Incorrect. Component handling isn\'t affected by path compression.'
      ],
      difficulty: Difficulty.Advanced
    }
  ]
};
//   content: `<p>
//   A redundant connection in a graph is an edge that creates a cycle. 
//   Union-Find helps detect such edges by grouping nodes into sets and checking if an edge connects nodes already in the same set.
//   </p>`,
//   codeExample: `function findRedundantConnection(n: number, edges: number[][]): number[] {
//       const parent: number[] = Array(n + 1).fill(0).map((_, i) => i);
//       const rank: number[] = Array(n + 1).fill(1);
      
//       function find(u: number): number {
//           if (parent[u] !== u) {
//               parent[u] = find(parent[u]);
//           }
//           return parent[u];
//       }
      
//       function union(u: number, v: number): boolean {
//           const pu = find(u);
//           const pv = find(v);
          
//           if (pu === pv) return false;
          
//           if (rank[pu] > rank[pv]) {
//               parent[pv] = pu;
//               rank[pu] += rank[pv];
//           } else {
//               parent[pu] = pv;
//               rank[pv] += rank[pu];
//           }
//           return true;
//       }
      
//       for (const [u, v] of edges) {
//           if (!union(u, v)) {
//               return [u, v];
//           }
//       }
//       return [];
//   }`,
//   exercises: [
//     {
//       prompt: 'Implement the Union-Find data structure with path compression and union by rank.',
//       initialCode: `class UnionFind {
//     constructor(n: number) {}
//     find(u: number): number {}
//     union(u: number, v: number): boolean {}
//   }`,
//       solution: `class UnionFind {
//     private parent: number[];
//     private rank: number[];
    
//     constructor(n: number) {
//         this.parent = Array(n).fill(0).map((_, i) => i);
//         this.rank = Array(n).fill(1);
//     }
    
//     find(u: number): number {
//         if (this.parent[u] !== u) {
//             this.parent[u] = this.find(this.parent[u]);
//         }
//         return this.parent[u];
//     }
    
//     union(u: number, v: number): boolean {
//         const pu = this.find(u);
//         const pv = this.find(v);
        
//         if (pu === pv) return false;
        
//         if (this.rank[pu] > this.rank[pv]) {
//             this.parent[pv] = pu;
//             this.rank[pu] += this.rank[pv];
//         } else {
//             this.parent[pu] = pv;
//             this.rank[pv] += this.rank[pu];
//         }
//         return true;
//     }
// }`,
//       difficulty: Difficulty.Intermediate,
//     },
//     {
//       prompt: 'Find the redundant connection in a given list of edges.',
//       initialCode: `function findRedundantConnection(n: number, edges: number[][]): number[] {
//     // Implement using Union-Find
// }`,
//       solution: `function findRedundantConnection(n: number, edges: number[][]): number[] {
//     const parent: number[] = Array(n + 1).fill(0).map((_, i) => i);
//     const rank: number[] = Array(n + 1).fill(1);
    
//     function find(u: number): number {
//         if (parent[u] !== u) {
//             parent[u] = find(parent[u]);
//         }
//         return parent[u];
//     }
    
//     function union(u: number, v: number): boolean {
//         const pu = find(u);
//         const pv = find(v);
        
//         if (pu === pv) return false;
        
//         if (rank[pu] > rank[pv]) {
//             parent[pv] = pu;
//             rank[pu] += rank[pv];
//         } else {
//             parent[pu] = pv;
//             rank[pv] += rank[pu];
//         }
//         return true;
//     }
    
//     for (const [u, v] of edges) {
//         if (!union(u, v)) {
//             return [u, v];
//         }
//     }
//     return [];
// }`,
//       difficulty: Difficulty.Intermediate,
//     },
//   ],
//   quizzes: [
//     {
//       question: 'What is the purpose of Union-Find in detecting redundant connections?',
//       options: [
//         'To find the shortest path between nodes',
//         'To group nodes into connected components',
//         'To calculate the number of provinces',
//         'To merge accounts based on shared emails',
//       ],
//       correctAnswer: 1,
//       explanations: [
//         'Incorrect. Union-Find is not used for finding the shortest path.',
//         'Correct. Union-Find helps group nodes into connected components to detect cycles.',
//         'Incorrect. While Union-Find can count provinces, it’s not its primary purpose in redundant connection detection.',
//         'Incorrect. That is for a different pattern.',
//       ],
//       difficulty: Difficulty.Beginner,
//     },
//   ],
// };

const provinceCountingData = {
  title: 'Mastering Province Counting with Union-Find',
  content: `<p>
Imagine looking at a map where some cities are connected by roads. A province is formed by all cities that can reach each other through these roads. If we know which cities are directly connected, how can we figure out how many distinct provinces exist? This is exactly what the province counting pattern helps us solve.
</p>

<p>
This pattern appears in many contexts beyond geography. We might need to find groups of connected friends in a social network, clusters of related items in a dataset, or networks of interconnected computers. At its core, we're looking for groups of connected elements.
</p>

<h3><u>Understanding Through Examples</u></h3>

<p>
Let's start with a simple example to build our intuition:
</p>

<pre>
Cities: A, B, C, D, E
Direct connections:
- A connected to B
- B connected to C
- D connected to E

This forms two provinces:
Province 1: A-B-C (all connected through roads)
Province 2: D-E (connected to each other but not to others)
</pre>

<h3><u>The Power of Union-Find</u></h3>

<p>
While we could solve this problem using DFS or BFS, Union-Find offers a particularly elegant solution. Union-Find is a data structure that excels at managing disjoint sets and answering questions about connectivity. Here's how it works:
</p>

<h4><b>1. Core Operations</b></h4>
<p>
Union-Find provides two main operations:
</p>
<li>'Find' determines which set (province) an element belongs to</li>
<li>'Union' combines two sets when we discover they're connected</li>

<h4><b>2. Path Compression</b></h4>
<p>
A key optimization in Union-Find that makes operations nearly constant time:
</p>
<li>When finding an element's set, update it to point directly to the root</li>
<li>Flattens trees over time, making future operations faster</li>
<li>Turns O(N) worst case into nearly O(1) amortized</li>

<h4><b>3. Union by Rank</b></h4>
<p>
Another optimization that keeps trees balanced:
</p>
<li>Track the 'rank' (approximate depth) of each tree</li>
<li>Attach smaller trees under larger ones</li>
<li>Prevents trees from becoming too deep</li>

<h3><u>Implementation Strategies</u></h3>

<h4><b>1. Basic Approach</b></h4>
<p>
The simplest implementation starts with:
</p>
<li>Each element in its own set</li>
<li>Process connections one by one</li>
<li>Count unique roots at the end</li>

<h4><b>2. Early Termination</b></h4>
<p>
We can optimize by:
</p>
<li>Tracking the current number of provinces</li>
<li>Decrementing when provinces merge</li>
<li>Stopping when we achieve target count</li>

<h4><b>3. Dynamic Connectivity</b></h4>
<p>
For changing connections:
</p>
<li>Handle both adding and removing connections</li>
<li>Maintain count incrementally</li>
<li>Support efficient queries</li>

<h3><u>Common Variations</u></h3>

<h4><b>1. Friend Circles</b></h4>
<p>
A classic variation where:
</p>
<li>Input is a symmetrical matrix</li>
<li>Matrix[i][j] = 1 means i and j are friends</li>
<li>Need to find number of friend groups</li>

<h4><b>2. Islands and Grids</b></h4>
<p>
Applying to 2D grids where:
</p>
<li>Connected cells form an island</li>
<li>Need to convert grid positions to unique IDs</li>
<li>Handle special connectivity rules</li>`,

  codeExample: `# Comprehensive implementation of province counting with Union-Find

from typing import List, Set, Dict, Optional

class UnionFind:
    """Optimized Union-Find implementation with path compression and union by rank"""
    
    def __init__(self, size: int):
        """Initialize with all elements in separate sets"""
        self.parent = list(range(size))  # Each element points to itself
        self.rank = [0] * size           # Track tree depths
        self.count = size                # Number of disjoint sets
        
    def find(self, x: int) -> int:
        """Find set identifier for element x with path compression"""
        if self.parent[x] != x:
            # Path compression: Point directly to root on find
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
    
    def union(self, x: int, y: int) -> bool:
        """
        Unite sets containing x and y.
        Returns True if sets were merged, False if already united.
        """
        px, py = self.find(x), self.find(y)
        
        # Already in same set
        if px == py:
            return False
        
        # Union by rank: Attach smaller tree under root of larger
        if self.rank[px] < self.rank[py]:
            px, py = py, px
        self.parent[py] = px
        
        # If same rank, increment rank of combined tree
        if self.rank[px] == self.rank[py]:
            self.rank[px] += 1
        
        # Merged two sets into one
        self.count -= 1
        return True
    
    def get_count(self) -> int:
        """Get current number of disjoint sets"""
        return self.count
    
    def connected(self, x: int, y: int) -> bool:
        """Check if x and y are in same set"""
        return self.find(x) == self.find(y)

class ProvinceCounter:
    """Class implementing province counting algorithms"""
    
    def count_provinces_matrix(self, is_connected: List[List[int]]) -> int:
        """
        Count provinces from connectivity matrix.
        is_connected[i][j] = 1 if city i and j are connected.
        Time: O(N²), Space: O(N)
        """
        n = len(is_connected)
        uf = UnionFind(n)
        
        # Only need to check upper triangle of symmetric matrix
        for i in range(n):
            for j in range(i + 1, n):
                if is_connected[i][j]:
                    uf.union(i, j)
        
        return uf.get_count()
    
    def count_provinces_edges(self, n: int, edges: List[List[int]]) -> int:
        """
        Count provinces from edge list representation.
        Time: O(E * α(N)), Space: O(N)
        """
        uf = UnionFind(n)
        
        for x, y in edges:
            uf.union(x, y)
            
        return uf.get_count()
    
    def count_provinces_grid(self, grid: List[List[int]]) -> int:
        """
        Count provinces in 2D grid where 1s form provinces.
        Time: O(R*C * α(R*C)), Space: O(R*C)
        """
        if not grid or not grid[0]:
            return 0
            
        rows, cols = len(grid), len(grid[0])
        
        def get_id(r: int, c: int) -> int:
            """Convert 2D position to unique ID"""
            return r * cols + c
        
        # Initialize Union-Find with size for all cells
        uf = UnionFind(rows * cols)
        provinces = 0  # Count cells that are part of provinces
        
        # Process all cells
        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == 1:
                    provinces += 1
                    cell_id = get_id(r, c)
                    
                    # Check adjacent cells (up, left)
                    for dr, dc in [(-1, 0), (0, -1)]:
                        nr, nc = r + dr, c + dc
                        if (0 <= nr < rows and 
                            0 <= nc < cols and 
                            grid[nr][nc] == 1):
                            # Merge provinces if found adjacent province
                            if uf.union(cell_id, get_id(nr, nc)):
                                provinces -= 1
        
        return provinces`,

  exercises: [
    {
      prompt: 'Implement a function that determines if adding a new connection between two cities would reduce the number of provinces. Return true if the provinces would merge.',
      initialCode: `def would_reduce_provinces(n: int, 
                           connections: List[List[int]],
                           new_connection: List[int]) -> bool:
    """
    Return True if new_connection would merge two provinces.
    """
    # Your code here
    pass`,
      solution: `def would_reduce_provinces(n: int, 
                           connections: List[List[int]],
                           new_connection: List[int]) -> bool:
    # Initialize Union-Find structure
    uf = UnionFind(n)
    
    # Process existing connections
    for x, y in connections:
        uf.union(x, y)
    
    # Check if new connection would merge different provinces
    x, y = new_connection
    return not uf.connected(x, y)`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement a function that finds the minimum number of new connections needed to unite all provinces into one.',
      initialCode: `def min_connections_needed(n: int, 
                            connections: List[List[int]]) -> List[List[int]]:
    """
    Return list of new connections needed to unite all provinces.
    Return empty list if already united.
    """
    # Your code here
    pass`,
      solution: `def min_connections_needed(n: int, 
                            connections: List[List[int]]) -> List[List[int]]:
    # Initialize Union-Find
    uf = UnionFind(n)
    
    # Process existing connections
    for x, y in connections:
        uf.union(x, y)
    
    if uf.get_count() == 1:
        return []  # Already united
        
    # Find one city from each province
    province_reps = set()
    for i in range(n):
        province_reps.add(uf.find(i))
    
    # Connect adjacent provinces
    new_connections = []
    reps = list(province_reps)
    for i in range(len(reps) - 1):
        new_connections.append([reps[i], reps[i + 1]])
    
    return new_connections`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why is path compression important in Union-Find?',
      options: [
        'It reduces memory usage',
        'It makes operations nearly constant time',
        'It prevents cycles in the data structure',
        'It simplifies the implementation'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Path compression doesn\'t significantly affect memory usage.',
        'Correct! Path compression flattens trees over time, making subsequent operations nearly constant time instead of linear.',
        'Incorrect. Union-Find trees can\'t have cycles by design.',
        'Incorrect. Path compression actually adds some implementation complexity.'
      ],
      difficulty: Difficulty.Beginner
    },
    {
      question: 'What is the key advantage of using Union-Find for province counting compared to DFS?',
      options: [
        'Union-Find uses less memory',
        'Union-Find handles dynamic connections more efficiently',
        'Union-Find is always faster',
        'Union-Find is easier to implement'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Both approaches use similar amounts of memory.',
        'Correct! Union-Find excels at handling dynamic connections and queries about connectivity, while DFS would need to reprocess the entire graph.',
        'Incorrect. DFS can be faster for static graphs.',
        'Incorrect. DFS is often simpler to implement.'
      ],
      difficulty: Difficulty.Intermediate
    },
    {
      question: 'Why do we use union by rank in addition to path compression?',
      options: [
        'To save memory',
        'To make the code simpler',
        'To prevent trees from becoming unbalanced',
        'To handle disconnected components'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Union by rank doesn\'t primarily affect memory usage.',
        'Incorrect. It actually makes the implementation more complex.',
        'Correct! Union by rank ensures trees stay balanced by always attaching smaller trees under larger ones, preventing performance degradation.',
        'Incorrect. Disconnected components are handled naturally without union by rank.'
      ],
      difficulty: Difficulty.Advanced
    }
  ]
};

const accountMergeData = {
  title: 'Understanding Account Merging and Identity Resolution',
  content: `<p>
Imagine you're working at an email service provider, and you discover that some users have created multiple accounts using different email addresses. You want to merge these accounts to give users a better experience and maintain accurate records. This is the essence of the account merge pattern - identifying and combining related entities based on shared attributes.
</p>

<p>
Let's look at a simple example to understand what we're trying to solve:
</p>

<pre>
Account 1: John [john@gmail.com, john@work.com]
Account 2: Johnny [john@gmail.com, johnny@gmail.com]
Account 3: John Doe [johndoe@yahoo.com, john@work.com]

These should merge into one account:
John [john@gmail.com, john@work.com, johnny@gmail.com, johndoe@yahoo.com]

Why? Because the email addresses create connections:
- Account 1 and 2 share john@gmail.com
- Account 1 and 3 share john@work.com
</pre>

<h3><u>Core Concepts in Account Merging</u></h3>

<h4><b>1. Identity Resolution</b></h4>
<p>
At its heart, account merging is about establishing identity:
</p>
<li>Different records might represent the same entity</li>
<li>Shared attributes suggest common identity</li>
<li>Transitive relationships matter (if A=B and B=C, then A=C)</li>

<h4><b>2. Connection Types</b></h4>
<p>
We need to understand different ways accounts can be connected:
</p>
<li>Direct connections (shared email)</li>
<li>Indirect connections (through other accounts)</li>
<li>Strength of connection (how many attributes match)</li>

<h3><u>Solution Approaches</u></h3>

<h4><b>1. Graph-Based Solution</b></h4>
<p>
We can model this as a graph problem:
</p>
<li>Vertices represent email addresses</li>
<li>Edges connect emails belonging to same account</li>
<li>Connected components represent merged accounts</li>

<h4><b>2. Union-Find Solution</b></h4>
<p>
Union-Find provides an elegant way to handle merging:
</p>
<li>Each email starts in its own set</li>
<li>Union emails from same account</li>
<li>Find operation identifies final grouping</li>

<h3><u>Practical Considerations</u></h3>

<h4><b>1. Name Handling</b></h4>
<p>
Account names need careful consideration:
</p>
<li>Different spellings of same name</li>
<li>Name conflicts between accounts</li>
<li>Choosing primary name for merged account</li>

<h4><b>2. Data Consistency</b></h4>
<p>
Merging must maintain data integrity:
</p>
<li>Preserve all user data</li>
<li>Handle conflicting information</li>
<li>Maintain audit trail of merges</li>

<h4><b>3. Performance Optimization</b></h4>
<p>
Real systems need efficient implementation:
</p>
<li>Handle large numbers of accounts</li>
<li>Process merges incrementally</li>
<li>Support efficient queries</li>`,

  codeExample: `# Comprehensive implementation of account merging solutions

from collections import defaultdict
from typing import List, Set, Dict, Optional

class AccountMerger:
    """Class implementing account merging algorithms"""
    
    def merge_accounts(self, accounts: List[List[str]]) -> List[List[str]]:
        """
        Merge accounts based on shared emails.
        Each account is [name, email1, email2, ...].
        Returns merged accounts sorted by name and emails.
        Time: O(NK log(NK)) where N is number of accounts, K is max emails
        Space: O(NK)
        """
        # Email to name mapping
        email_to_name = {}
        
        # Build email graph
        graph = defaultdict(set)
        for account in accounts:
            name = account[0]
            # Add edges between first email and all others
            first_email = account[1]
            for email in account[1:]:
                graph[first_email].add(email)
                graph[email].add(first_email)
                email_to_name[email] = name
                
        # Find connected components using DFS
        def dfs(email: str, component: Set[str], 
               visited: Set[str]) -> None:
            visited.add(email)
            component.add(email)
            for neighbor in graph[email]:
                if neighbor not in visited:
                    dfs(neighbor, component, visited)
        
        # Process all emails
        visited = set()
        merged = []
        
        for email in graph:
            if email not in visited:
                component = set()
                dfs(email, component, visited)
                # Add account with name and sorted emails
                name = email_to_name[email]
                merged.append([name] + sorted(component))
        
        return sorted(merged)  # Sort by name for consistency
    
    def merge_accounts_union_find(self, 
                                accounts: List[List[str]]) -> List[List[str]]:
        """
        Merge accounts using Union-Find approach.
        More efficient for incremental updates.
        """
        class UnionFind:
            def __init__(self):
                self.parent = {}
                self.rank = defaultdict(int)
            
            def find(self, x: str) -> str:
                if x not in self.parent:
                    self.parent[x] = x
                if self.parent[x] != x:
                    self.parent[x] = self.find(self.parent[x])
                return self.parent[x]
            
            def union(self, x: str, y: str) -> None:
                px, py = self.find(x), self.find(y)
                if px == py:
                    return
                if self.rank[px] < self.rank[py]:
                    px, py = py, px
                self.parent[py] = px
                if self.rank[px] == self.rank[py]:
                    self.rank[px] += 1
        
        # Initialize Union-Find and name mapping
        uf = UnionFind()
        email_to_name = {}
        
        # Process all accounts
        for account in accounts:
            name = account[0]
            first_email = account[1]
            
            # Union all emails in account
            for email in account[1:]:
                email_to_name[email] = name
                uf.union(first_email, email)
        
        # Group emails by their representatives
        merged_groups = defaultdict(set)
        for email in email_to_name:
            merged_groups[uf.find(email)].add(email)
        
        # Build final result
        return [[email_to_name[rep]] + sorted(emails) 
                for rep, emails in merged_groups.items()]
    
    def merge_incrementally(self, existing_accounts: List[List[str]], 
                          new_account: List[str]) -> List[List[str]]:
        """
        Merge new account into existing accounts efficiently.
        Handles incremental updates without full recomputation.
        """
        # Initialize with existing structure
        email_to_account = {}
        affected_accounts = set()
        
        # Find accounts that share emails with new account
        name = new_account[0]
        for email in new_account[1:]:
            if email in email_to_account:
                affected_accounts.add(email_to_account[email])
        
        # No overlap - add as new account
        if not affected_accounts:
            return existing_accounts + [new_account]
        
        # Merge affected accounts
        merged_emails = set(new_account[1:])
        for account_idx in affected_accounts:
            merged_emails.update(existing_accounts[account_idx][1:])
        
        # Create new merged account
        merged_account = [name] + sorted(merged_emails)
        
        # Remove affected accounts and add merged one
        return ([account for i, account in enumerate(existing_accounts)
                if i not in affected_accounts] + [merged_account])`,

  exercises: [
    {
      prompt: 'Implement a function that determines if adding a new email address to an account would cause any account merges. Return the list of account indices that would be merged.',
      initialCode: `def find_affected_accounts(accounts: List[List[str]], 
                             account_idx: int,
                             new_email: str) -> List[int]:
    """
    Return indices of accounts that would merge if new_email 
    is added to accounts[account_idx].
    """
    # Your code here
    pass`,
      solution: `def find_affected_accounts(accounts: List[List[str]], 
                             account_idx: int,
                             new_email: str) -> List[int]:
    # Build email to account index mapping
    email_to_accounts = defaultdict(set)
    for i, account in enumerate(accounts):
        for email in account[1:]:
            email_to_accounts[email].add(i)
    
    # Find all accounts that would be connected
    affected = {account_idx}
    visited = set()
    queue = [account_idx]
    
    # Add accounts connected through new email
    if new_email in email_to_accounts:
        affected.update(email_to_accounts[new_email])
        queue.extend(email_to_accounts[new_email])
    
    # Find all transitively connected accounts
    while queue:
        idx = queue.pop(0)
        if idx in visited:
            continue
        visited.add(idx)
        
        # Check all emails in this account
        for email in accounts[idx][1:]:
            for connected_idx in email_to_accounts[email]:
                if connected_idx not in visited:
                    affected.add(connected_idx)
                    queue.append(connected_idx)
    
    return sorted(list(affected))`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement a function that suggests potential account merges based on similar names and shared email domains (e.g., work emails). Return pairs of account indices that might represent the same person.',
      initialCode: `def suggest_merges(accounts: List[List[str]]) -> List[List[int]]:
    """
    Return pairs of account indices that might be the same person.
    Consider similar names and shared email domains.
    """
    # Your code here
    pass`,
      solution: `def suggest_merges(accounts: List[List[str]]) -> List[List[int]]:
    def get_domain(email: str) -> str:
        return email.split('@')[1]
    
    def name_similarity(name1: str, name2: str) -> float:
        """Simple name similarity score"""
        name1 = name1.lower().split()
        name2 = name2.lower().split()
        common = set(name1) & set(name2)
        total = set(name1) | set(name2)
        return len(common) / len(total)
    
    suggestions = []
    
    # Group accounts by domain
    domain_accounts = defaultdict(list)
    for i, account in enumerate(accounts):
        domains = {get_domain(email) 
                  for email in account[1:]}
        for domain in domains:
            domain_accounts[domain].append(i)
    
    # Check accounts with shared domains
    checked_pairs = set()
    for domain, indices in domain_accounts.items():
        for i in range(len(indices)):
            for j in range(i + 1, len(indices)):
                idx1, idx2 = indices[i], indices[j]
                if (idx1, idx2) in checked_pairs:
                    continue
                checked_pairs.add((idx1, idx2))
                
                # Check name similarity
                name1 = accounts[idx1][0]
                name2 = accounts[idx2][0]
                if name_similarity(name1, name2) > 0.5:
                    suggestions.append([idx1, idx2])
    
    return suggestions`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why is transitive closure important in account merging problems?',
      options: [
        'To save memory',
        'To improve performance',
        'To ensure all related accounts are merged correctly',
        'To handle name conflicts'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Transitive closure isn\'t about memory optimization.',
        'Incorrect. While it might affect performance, that\'s not its main purpose.',
        'Correct! Transitive closure ensures that if account A is connected to B, and B to C, then A, B, and C are all merged, even if A and C don\'t share direct connections.',
        'Incorrect. Name conflicts are a separate concern from transitive closure.'
      ],
      difficulty: Difficulty.Beginner
    },
    {
      question: 'What advantage does Union-Find have over DFS for account merging?',
      options: [
        'Union-Find uses less memory',
        'Union-Find handles incremental updates more efficiently',
        'Union-Find always produces better merged results',
        'Union-Find is easier to implement'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Both approaches use similar amounts of memory.',
        'Correct! Union-Find can efficiently handle new accounts or emails being added without reprocessing everything, while DFS would need to rebuild the entire graph.',
        'Incorrect. Both approaches produce the same merged results.',
        'Incorrect. DFS is often simpler to implement initially.'
      ],
      difficulty: Difficulty.Intermediate
    },
    {
      question: 'When suggesting potential account merges, why should we consider both email domains and name similarity?',
      options: [
        'To reduce memory usage',
        'To process accounts faster',
        'To avoid false positives and increase accuracy',
        'To handle more accounts'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Using multiple criteria isn\'t about memory optimization.',
        'Incorrect. Adding criteria actually makes processing slower.',
        'Correct! Using both email domains and name similarity helps reduce incorrect merge suggestions by requiring multiple matching attributes, improving the accuracy of suggestions.',
        'Incorrect. The number of accounts handled isn\'t affected by the criteria used.'
      ],
      difficulty: Difficulty.Advanced
    }
  ]
};

const wordTransformationData = {
  title: 'Mastering Word Transformation Problems',
  content: `<p>
Imagine you're playing a word game where you need to transform one word into another by changing just one letter at a time. Every word you create along the way must be a valid word. For example, transforming "COLD" to "WARM" might go: COLD → CORD → CARD → WARD → WARM. This is the essence of word transformation problems, and they teach us important lessons about graph traversal and string manipulation.
</p>

<h3><u>Understanding the Challenge</u></h3>

<p>
Let's start by breaking down what makes these problems interesting. For our transformation to be valid, we need to:
</p>

<li>Change only one letter at a time</li>
<li>Ensure each intermediate word is valid</li>
<li>Find the shortest possible sequence</li>

<p>
Consider this example with a small dictionary:
</p>

<pre>
Start word: DOG
End word: CAT
Dictionary: {DOG, LOG, COG, CAG, CAT}

Valid transformation: DOG → COG → CAG → CAT
This takes 3 steps and is the shortest possible path.
</pre>

<h3><u>Graph Representation</u></h3>

<p>
The key insight is that we can model this as a graph problem where:
</p>

<p>Each word is a vertex in our graph, and we create an edge between words that differ by exactly one letter. Our challenge then becomes finding the shortest path in this graph. This transforms our string problem into a graph problem we know how to solve!</p>

<pre>
For example, with words DOG, LOG, COG:
- DOG connects to LOG (D→L)
- DOG connects to COG (D→C)
- LOG connects to COG (L→C)

This forms an undirected graph:
DOG -- LOG
 |      |
 |      |
COG ----'
</pre>

<h3><u>Key Optimization Strategies</u></h3>

<h4><b>1. Efficient Word Comparison</b></h4>
<p>
Instead of checking every pair of words, we can be smarter about finding neighbors:
</p>

<li>For each position in the word, try all possible letters</li>
<li>Check if resulting words exist in our dictionary</li>
<li>This reduces comparisons from O(n²) to O(n * L * 26) where L is word length</li>

<h4><b>2. Bidirectional Search</b></h4>
<p>
We can search from both ends simultaneously:
</p>

<li>Start searches from both beginning and end words</li>
<li>Stop when searches meet in the middle</li>
<li>This can dramatically reduce the search space</li>

<h4><b>3. Pattern-Based Grouping</b></h4>
<p>
We can group words by patterns to find neighbors quickly:
</p>

<li>Replace each character with a wildcard one at a time</li>
<li>Group words that share the same pattern</li>
<li>Words in the same group differ by one letter</li>

<h3><u>Common Variations</u></h3>

<h4><b>1. Variable Word Length</b></h4>
<p>
Some variations allow:
</p>
<li>Adding or removing letters</li>
<li>Multiple letters changing at once</li>
<li>Different costs for different transformations</li>

<h4><b>2. Custom Constraints</b></h4>
<p>
Additional rules might include:
</p>
<li>Required intermediate words</li>
<li>Forbidden words or patterns</li>
<li>Limited number of certain transformations</li>`,

  codeExample: `# Comprehensive implementation of word transformation solutions

from collections import defaultdict, deque
from typing import List, Set, Dict, Optional
import string

class WordTransformer:
    """Class implementing word transformation algorithms"""
    
    def find_shortest_transformation(self, 
                                   beginWord: str,
                                   endWord: str,
                                   wordList: List[str]) -> List[str]:
        """
        Find shortest transformation path from beginWord to endWord.
        Returns the sequence of words or empty list if no path exists.
        Uses bidirectional BFS for efficiency.
        Time: O(N * L * 26) where N is number of words, L is word length
        Space: O(N)
        """
        # Create set for O(1) lookup
        wordSet = set(wordList)
        if endWord not in wordSet:
            return []
            
        # Add beginWord to set if not present
        if beginWord not in wordSet:
            wordSet.add(beginWord)
        
        # Create word pattern mapping for efficient neighbor finding
        pattern_to_words = defaultdict(list)
        for word in wordSet:
            for i in range(len(word)):
                # Create pattern with wildcard at position i
                pattern = word[:i] + '*' + word[i+1:]
                pattern_to_words[pattern].append(word)
        
        # Helper function to find neighbors of a word
        def get_neighbors(word: str) -> List[str]:
            neighbors = []
            for i in range(len(word)):
                pattern = word[:i] + '*' + word[i+1:]
                neighbors.extend(pattern_to_words[pattern])
            return neighbors
        
        # Bidirectional BFS
        # Forward search from beginWord
        forward_queue = deque([beginWord])
        forward_visited = {beginWord: [beginWord]}
        
        # Backward search from endWord
        backward_queue = deque([endWord])
        backward_visited = {endWord: [endWord]}
        
        def build_path(forward_path: List[str], 
                      backward_path: List[str]) -> List[str]:
            """Combine forward and backward paths"""
            return forward_path + backward_path[-2::-1]
        
        # Search until queues are empty or paths meet
        while forward_queue and backward_queue:
            # Expand forward search
            for _ in range(len(forward_queue)):
                word = forward_queue.popleft()
                for neighbor in get_neighbors(word):
                    if neighbor in backward_visited:
                        # Found intersection - build complete path
                        return build_path(forward_visited[word],
                                       backward_visited[neighbor])
                    if neighbor not in forward_visited:
                        forward_visited[neighbor] = forward_visited[word] + [neighbor]
                        forward_queue.append(neighbor)
            
            # Expand backward search
            for _ in range(len(backward_queue)):
                word = backward_queue.popleft()
                for neighbor in get_neighbors(word):
                    if neighbor in forward_visited:
                        # Found intersection - build complete path
                        return build_path(forward_visited[neighbor],
                                       backward_visited[word])
                    if neighbor not in backward_visited:
                        backward_visited[neighbor] = backward_visited[word] + [neighbor]
                        backward_queue.append(neighbor)
        
        return []  # No path found
    
    def group_similar_words(self, words: List[str]) -> Dict[str, List[str]]:
        """
        Group words that differ by one letter.
        Returns dictionary mapping patterns to lists of words.
        Used for efficient neighbor finding.
        """
        groups = defaultdict(list)
        for word in words:
            # Create patterns with wildcard at each position
            for i in range(len(word)):
                pattern = word[:i] + '*' + word[i+1:]
                groups[pattern].append(word)
        return groups
    
    def has_valid_transformation(self, beginWord: str,
                               endWord: str,
                               wordList: List[str],
                               maxSteps: int) -> bool:
        """
        Check if transformation is possible within maxSteps.
        More efficient than finding complete path when only
        possibility matters.
        """
        wordSet = set(wordList)
        if endWord not in wordSet:
            return False
        
        queue = deque([(beginWord, 0)])
        visited = {beginWord}
        
        while queue:
            word, steps = queue.popleft()
            if steps > maxSteps:
                return False
            if word == endWord:
                return True
            
            # Try changing each letter
            for i in range(len(word)):
                for c in string.ascii_lowercase:
                    next_word = word[:i] + c + word[i+1:]
                    if next_word in wordSet and next_word not in visited:
                        visited.add(next_word)
                        queue.append((next_word, steps + 1))
        
        return False`,

  exercises: [
    {
      prompt: 'Implement a function that determines if two words can be transformed into each other using only transpositions (swapping adjacent letters). Each intermediate word must be valid.',
      initialCode: `def can_transpose(word1: str, word2: str, 
                   dictionary: Set[str]) -> bool:
    """
    Return True if word1 can be transformed to word2
    using only valid adjacent letter swaps.
    """
    # Your code here
    pass`,
      solution: `def can_transpose(word1: str, word2: str, 
                   dictionary: Set[str]) -> bool:
    if len(word1) != len(word2) or word1 == word2:
        return False
    
    def get_transpositions(word: str) -> List[str]:
        """Get all possible words by swapping adjacent letters"""
        result = []
        for i in range(len(word) - 1):
            # Swap letters at i and i+1
            new_word = (word[:i] + word[i+1] + 
                       word[i] + word[i+2:])
            if new_word in dictionary:
                result.append(new_word)
        return result
    
    # BFS to find transformation
    queue = deque([word1])
    visited = {word1}
    
    while queue:
        word = queue.popleft()
        for next_word in get_transpositions(word):
            if next_word == word2:
                return True
            if next_word not in visited:
                visited.add(next_word)
                queue.append(next_word)
    
    return False`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement a function that finds all words that can be reached from a starting word within a given number of transformations, where each transformation can change any number of letters in the same position (e.g., changing all "a"s to "e"s in one step).',
      initialCode: `def find_reachable_words(start: str, 
                         dictionary: Set[str],
                         max_steps: int) -> Set[str]:
    """
    Find all words reachable within max_steps transformations,
    where each transformation changes all instances of a letter.
    """
    # Your code here
    pass`,
      solution: `def find_reachable_words(start: str, 
                         dictionary: Set[str],
                         max_steps: int) -> Set[str]:
    def get_letter_positions(word: str) -> Dict[str, List[int]]:
        """Get positions of each letter in word"""
        positions = defaultdict(list)
        for i, c in enumerate(word):
            positions[c].append(i)
        return positions
    
    def apply_transformation(word: str, 
                           old_char: str, 
                           new_char: str) -> str:
        """Replace all instances of old_char with new_char"""
        return ''.join(new_char if c == old_char else c 
                      for c in word)
    
    reachable = {start}
    current_words = {start}
    
    for _ in range(max_steps):
        next_words = set()
        for word in current_words:
            # Try replacing each letter with every other letter
            letter_pos = get_letter_positions(word)
            for old_char in letter_pos:
                for new_char in string.ascii_lowercase:
                    if new_char != old_char:
                        transformed = apply_transformation(
                            word, old_char, new_char)
                        if (transformed in dictionary and 
                            transformed not in reachable):
                            next_words.add(transformed)
                            reachable.add(transformed)
        
        current_words = next_words
        if not current_words:
            break
    
    return reachable`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why is bidirectional search particularly effective for word transformation problems?',
      options: [
        'It uses less memory',
        'It reduces the search space by meeting in the middle',
        'It always finds longer paths',
        'It works better with large dictionaries'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Bidirectional search actually uses more memory to track two search frontiers.',
        'Correct! By searching from both ends, the search space grows as r^(d/2) + r^(d/2) instead of r^d, where r is the branching factor and d is the path length.',
        'Incorrect. Bidirectional search finds the same shortest path as unidirectional search.',
        'Incorrect. Dictionary size affects both approaches similarly.'
      ],
      difficulty: Difficulty.Beginner
    },
    {
      question: 'What makes pattern-based grouping of words efficient?',
      options: [
        'It uses less memory than other approaches',
        'It allows finding neighbors without checking every word',
        'It makes the code simpler',
        'It works better for longer words'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Pattern-based grouping actually uses more memory to store the patterns.',
        'Correct! By grouping words by patterns, we can instantly find all words that differ by one letter at a specific position, without checking every word in the dictionary.',
        'Incorrect. Pattern-based grouping adds implementation complexity.',
        'Incorrect. Word length doesn\'t significantly affect the benefits of pattern-based grouping.'
      ],
      difficulty: Difficulty.Intermediate
    },
    {
      question: 'Why might checking for transformation possibility be faster than finding the actual path?',
      options: [
        'It uses different algorithms',
        'It can stop as soon as any valid path is found',
        'It requires less memory',
        'It works better for large dictionaries'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Both approaches typically use BFS.',
        'Correct! When only checking possibility, we can stop at the first valid path found, while finding the shortest path requires exploring all paths of the same length.',
        'Incorrect. Memory usage is similar for both approaches.',
        'Incorrect. Dictionary size affects both approaches similarly.'
      ],
      difficulty: Difficulty.Advanced
    }
  ]
};

const graphCloneData = {
  title: 'Mastering Graph Cloning',
  content: `<p>
Imagine you're creating a game where players can design their own game maps, represented as graphs. When a player wants to save a modified version of an existing map while keeping the original intact, you'll need to create a deep copy of the graph - this is the essence of graph cloning.
</p>

<h3><u>Understanding Graph Cloning</u></h3>

<p>
Let's start with what makes graph cloning challenging. Consider this simple graph:
</p>

<pre>
Original Graph:
    1 → 2
    ↓ ↗
    3

A proper clone must:
1. Create new nodes (1', 2', 3')
2. Preserve connections (1' → 2', 1' → 3', 3' → 2')
3. Maintain the exact structure
4. Be completely independent of original
</pre>

<h3><u>Key Challenges</u></h3>

<h4><b>1. Reference vs Value</b></h4>
<p>
The main complexity comes from references:
</p>
<li>Nodes might contain complex data</li>
<li>Multiple edges might point to same node</li>
<li>Can't simply copy node by node</li>
<li>Must track what's already been cloned</li>

<h4><b>2. Cyclic Dependencies</b></h4>
<p>
Cycles create special challenges:
</p>
<pre>
A → B → C
↑     ↓
D ← E ← F

Need to handle cycles without:
- Infinite loops
- Duplicate nodes
- Missing connections
</pre>

<h3><u>Solution Strategies</u></h3>

<h4><b>1. Hash Map Approach</b></h4>
<p>
Use a hash map to track cloned nodes:
</p>
<li>Map original nodes to their clones</li>
<li>Check map before creating new nodes</li>
<li>Use map to recreate connections</li>
<li>Handles cycles naturally</li>

<h4><b>2. DFS Approach</b></h4>
<p>
Traverse and clone simultaneously:
</p>
<li>Clone current node</li>
<li>Recursively clone neighbors</li>
<li>Track visited nodes</li>
<li>Connect cloned nodes</li>

<h3><u>Special Considerations</u></h3>

<h4><b>1. Node Data</b></h4>
<p>
Nodes might contain:
</p>
<li>Simple values (need shallow copy)</li>
<li>Complex objects (need deep copy)</li>
<li>References to external data</li>
<li>Custom data structures</li>

<h4><b>2. Edge Properties</b></h4>
<p>
Don't forget about edges:
</p>
<li>Weights or costs</li>
<li>Directional information</li>
<li>Types or categories</li>
<li>Additional metadata</li>

<h4><b>3. Graph Properties</b></h4>
<p>
Consider overall graph characteristics:
</p>
<li>Connectivity information</li>
<li>Graph metadata</li>
<li>Global properties</li>
<li>Performance constraints</li>`,

  codeExample: `# Comprehensive implementation of graph cloning algorithms

from typing import Dict, Set, Optional, Any
from copy import deepcopy

class Node:
    """Graph node with value and neighbors"""
    
    def __init__(self, val: Any = 0, 
                 neighbors: Optional[list] = None):
        self.val = val
        self.neighbors = neighbors or []

class GraphCloner:
    """Class implementing various graph cloning approaches"""
    
    def clone_graph_hashmap(self, node: 'Node') -> 'Node':
        """
        Clone graph using hash map approach.
        Returns deep copy starting from given node.
        Time: O(V + E), Space: O(V)
        """
        if not node:
            return None
        
        # Hash map to store created nodes
        clones = {}
        
        def clone_node(original: 'Node') -> 'Node':
            # Already cloned this node
            if original in clones:
                return clones[original]
            
            # Create new node with same value
            clone = Node(deepcopy(original.val))
            clones[original] = clone
            
            # Clone all neighbors
            for neighbor in original.neighbors:
                clone.neighbors.append(clone_node(neighbor))
            
            return clone
        
        return clone_node(node)
    
    def clone_graph_dfs(self, node: 'Node') -> 'Node':
        """
        Clone graph using DFS approach.
        Naturally handles cycles through visited set.
        Time: O(V + E), Space: O(V)
        """
        def dfs(original: 'Node', 
               visited: Dict['Node', 'Node']) -> 'Node':
            if not original:
                return None
            
            # Already visited this node
            if original in visited:
                return visited[original]
            
            # Create new node
            clone = Node(deepcopy(original.val))
            visited[original] = clone
            
            # Clone neighbors depth-first
            for neighbor in original.neighbors:
                clone.neighbors.append(dfs(neighbor, visited))
            
            return clone
        
        return dfs(node, {})
    
    def clone_graph_bfs(self, node: 'Node') -> 'Node':
        """
        Clone graph using BFS approach.
        Good for level-by-level cloning.
        Time: O(V + E), Space: O(V)
        """
        if not node:
            return None
        
        # Create clone of first node
        clone = Node(deepcopy(node.val))
        clones = {node: clone}
        
        # Queue of nodes to process
        queue = [node]
        
        while queue:
            original = queue.pop(0)
            
            # Process all neighbors
            for neighbor in original.neighbors:
                if neighbor not in clones:
                    # Create new clone for unvisited neighbor
                    clones[neighbor] = Node(deepcopy(neighbor.val))
                    queue.append(neighbor)
                # Add cloned neighbor to current node's neighbors
                clones[original].neighbors.append(clones[neighbor])
        
        return clone
    
    def clone_with_metadata(self, node: 'Node', 
                          metadata: Dict[Node, Any]) -> 'Node':
        """
        Clone graph while preserving metadata for nodes.
        Useful when nodes have associated data beyond basic structure.
        """
        if not node:
            return None
        
        clones = {}
        
        def clone_with_data(original: 'Node') -> 'Node':
            if original in clones:
                return clones[original]
            
            # Create new node with value and metadata
            clone = Node(deepcopy(original.val))
            if original in metadata:
                clone.metadata = deepcopy(metadata[original])
            
            clones[original] = clone
            
            # Clone neighbors
            for neighbor in original.neighbors:
                clone.neighbors.append(clone_with_data(neighbor))
            
            return clone
        
        return clone_with_data(node)`,

  exercises: [
    {
      prompt: 'Implement a function that clones a graph while reversing all edge directions. The resulting graph should have the same structure but with all edges pointing in the opposite direction.',
      initialCode: `def clone_and_reverse(node: 'Node') -> 'Node':
    """
    Return deep copy of graph with all edges reversed.
    """
    # Your code here
    pass`,
      solution: `def clone_and_reverse(node: 'Node') -> 'Node':
    if not node:
        return None
    
    # First clone all nodes
    clones = {}
    def create_nodes(original: 'Node') -> 'Node':
        if original in clones:
            return clones[original]
        
        clone = Node(deepcopy(original.val))
        clones[original] = clone
        
        for neighbor in original.neighbors:
            create_nodes(neighbor)
        
        return clone
    
    # Create all nodes first
    create_nodes(node)
    
    # Now create reversed edges
    for original, clone in clones.items():
        # Each neighbor should point back to this node
        for neighbor in original.neighbors:
            clones[neighbor].neighbors.append(clone)
    
    return clones[node]`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement a function that clones a weighted graph where each edge has a multiplier value, and all edge weights in the clone should be multiplied by a given factor while preserving the structure.',
      initialCode: `def clone_and_scale_weights(node: 'WeightedNode',
                              factor: float) -> 'WeightedNode':
    """
    Clone graph and multiply all edge weights by factor.
    WeightedNode has .val, .neighbors, and .weights properties.
    """
    # Your code here
    pass`,
      solution: `def clone_and_scale_weights(node: 'WeightedNode',
                              factor: float) -> 'WeightedNode':
    if not node:
        return None
    
    clones = {}
    
    def clone_node(original: 'WeightedNode') -> 'WeightedNode':
        if original in clones:
            return clones[original]
        
        # Create new node with same value
        clone = WeightedNode(deepcopy(original.val))
        clones[original] = clone
        
        # Clone neighbors and scale weights
        for i, neighbor in enumerate(original.neighbors):
            clone.neighbors.append(clone_node(neighbor))
            clone.weights.append(original.weights[i] * factor)
        
        return clone
    
    return clone_node(node)`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why is using a hash map crucial for efficient graph cloning?',
      options: [
        'To save memory',
        'To improve performance',
        'To prevent creating duplicate nodes for cycles',
        'To maintain the original graph structure'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Hash maps actually use additional memory.',
        'Incorrect. While they help performance, that\'s not their primary purpose.',
        'Correct! Hash maps let us track which nodes we\'ve already cloned, preventing duplicates when we encounter cycles or multiple paths to the same node.',
        'Incorrect. The structure is maintained regardless of using a hash map.'
      ],
      difficulty: Difficulty.Beginner
    },
    {
      question: 'What is the key difference between DFS and BFS approaches to graph cloning?',
      options: [
        'DFS uses less memory',
        'BFS is always faster',
        'DFS clones depth-first while BFS clones level-by-level',
        'BFS handles cycles better'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Both approaches use similar amounts of memory.',
        'Incorrect. Performance is similar for both approaches.',
        'Correct! DFS follows paths to their end before backtracking, while BFS clones all nodes at the current level before moving deeper. This can be important when managing memory or handling very deep graphs.',
        'Incorrect. Both approaches handle cycles equally well with proper tracking.'
      ],
      difficulty: Difficulty.Intermediate
    },
    {
      question: 'Why is deepcopy necessary when cloning node values?',
      options: [
        'To improve performance',
        'To handle primitive types',
        'To ensure complex values are truly independent in the clone',
        'To maintain graph structure'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Deepcopy actually has more overhead.',
        'Incorrect. Primitive types don\'t need deepcopy.',
        'Correct! When node values contain complex objects, deepcopy ensures the cloned nodes have completely independent copies of these objects, preventing unintended sharing of data.',
        'Incorrect. Graph structure is maintained by the cloning algorithm, not deepcopy.'
      ],
      difficulty: Difficulty.Advanced
    }
  ]
};

const minHeightTreesData = {
  title: 'Understanding Minimum Height Trees and Graph Centroids',
  content: `<p>
Imagine you're planning to build a network of computer servers where any server can reach any other server through the network. To minimize communication delays, you want to choose a central server that minimizes the maximum number of hops to reach any other server. This is essentially what we're trying to solve with minimum height trees - finding the best "center" points in a graph that minimize the maximum distance to any other point.
</p>

<h3><u>Understanding the Problem</u></h3>

<p>
Let's start with a simple example to build our intuition. Consider this line of nodes:
</p>

<pre>
1 --- 2 --- 3 --- 4 --- 5

If we pick node 1 as root:      If we pick node 3 as root:
    1                               3
    |                            /     \\
    2                          2         4
    |                        /             \\
    3                      1                 5
    |                                
    4
    |
    5
Height: 4                     Height: 2

Node 3 gives us minimum height because it's in the center!
</pre>

<h3><u>Key Insights</u></h3>

<p>
The key realization is that the roots of minimum height trees must be the centroids of the graph. A centroid is a node that minimizes the maximum distance to all other nodes. Some important properties:
</p>

<h4><b>1. Number of Centroids</b></h4>
<p>
A tree can have either one or two centroids:
</p>
<li>One centroid for odd-diameter trees</li>
<li>Two adjacent centroids for even-diameter trees</li>
<li>Never more than two centroids</li>

<h4><b>2. Finding Centroids</b></h4>
<p>
We can find centroids through a process of elimination:
</p>
<li>Remove all leaf nodes (nodes with one neighbor)</li>
<li>This creates new leaf nodes</li>
<li>Keep removing leaves until 1 or 2 nodes remain</li>
<li>These are the centroids</li>

<h3><u>Solution Strategy</u></h3>

<h4><b>1. Topological Peeling</b></h4>
<p>
The most efficient approach uses a "peeling" strategy:
</p>
<li>Start from the outside (leaves)</li>
<li>Work inward layer by layer</li>
<li>Stop when we can't peel anymore</li>

<h4><b>2. Implementation Details</b></h4>
<p>
Key aspects to consider:
</p>
<li>Track node degrees (number of neighbors)</li>
<li>Maintain a queue of current leaves</li>
<li>Update neighbors when removing nodes</li>
<li>Handle the final 1-2 nodes carefully</li>

<h3><u>Applications and Variations</u></h3>

<h4><b>1. Network Design</b></h4>
<p>
Practical applications include:
</p>
<li>Placing central servers</li>
<li>Designing network topologies</li>
<li>Minimizing network diameter</li>
<li>Optimizing communication paths</li>

<h4><b>2. Problem Variations</b></h4>
<p>
Common variations include:
</p>
<li>Weighted edges (different distances)</li>
<li>Multiple centroids allowed</li>
<li>Constraints on centroid locations</li>
<li>Dynamic graph changes</li>`,

  codeExample: `# Comprehensive implementation of minimum height trees algorithms

from collections import defaultdict, deque
from typing import List, Set, Dict, Optional

class MinHeightTreeFinder:
    """Class implementing minimum height tree algorithms"""
    
    def find_min_height_trees(self, n: int, 
                            edges: List[List[int]]) -> List[int]:
        """
        Find roots that give minimum height trees.
        Uses topological peeling approach.
        Time: O(V + E), Space: O(V + E)
        """
        # Handle special cases
        if n <= 2:
            return list(range(n))
            
        # Build adjacency list
        graph = defaultdict(set)
        for u, v in edges:
            graph[u].add(v)
            graph[v].add(u)
        
        # Start with all leaves
        leaves = deque([node for node in range(n) 
                       if len(graph[node]) == 1])
        
        remaining_nodes = n
        
        # Keep peeling until we reach centroids
        while remaining_nodes > 2:
            remaining_nodes -= len(leaves)
            new_leaves = deque()
            
            # Process current level of leaves
            for leaf in leaves:
                # Get the leaf's only neighbor
                neighbor = graph[leaf].pop()
                # Remove leaf from neighbor's adjacency list
                graph[neighbor].remove(leaf)
                # If neighbor becomes leaf, add to next round
                if len(graph[neighbor]) == 1:
                    new_leaves.append(neighbor)
            
            leaves = new_leaves
        
        # Remaining nodes are centroids
        return list(leaves)
    
    def find_centroids_weighted(self, n: int,
                              weighted_edges: List[List[int]]) -> List[int]:
        """
        Find centroids in weighted graph.
        weighted_edges: [from, to, weight]
        Returns nodes that minimize maximum weighted distance.
        """
        # Build weighted adjacency list
        graph = defaultdict(list)
        for u, v, w in weighted_edges:
            graph[u].append((v, w))
            graph[v].append((u, w))
        
        def find_farthest(start: int) -> tuple:
            """Find farthest node and distance from start"""
            distances = [-1] * n
            distances[start] = 0
            max_dist = 0
            farthest = start
            queue = deque([(start, 0)])
            
            while queue:
                node, dist = queue.popleft()
                
                for neighbor, weight in graph[node]:
                    new_dist = dist + weight
                    if distances[neighbor] == -1:
                        distances[neighbor] = new_dist
                        queue.append((neighbor, new_dist))
                        if new_dist > max_dist:
                            max_dist = new_dist
                            farthest = neighbor
            
            return farthest, max_dist
        
        # Find diameter ends
        end1, _ = find_farthest(0)
        end2, diameter = find_farthest(end1)
        
        # Find middle points of longest path
        def find_middle_points(start: int, 
                             target: int) -> List[int]:
            """Find nodes at diameter/2 distance on path"""
            path = []
            distances = [-1] * n
            distances[start] = 0
            prev = [-1] * n
            queue = deque([(start, 0)])
            
            while queue:
                node, dist = queue.popleft()
                if node == target:
                    # Reconstruct path
                    curr = target
                    while curr != -1:
                        path.append(curr)
                        curr = prev[curr]
                    break
                
                for neighbor, weight in graph[node]:
                    if distances[neighbor] == -1:
                        distances[neighbor] = dist + weight
                        prev[neighbor] = node
                        queue.append((neighbor, dist + weight))
            
            # Find middle points
            target_dist = diameter / 2
            middle_points = []
            curr_dist = 0
            
            for i in range(len(path) - 1):
                next_dist = curr_dist + graph[path[i]][0][1]
                if curr_dist <= target_dist <= next_dist:
                    middle_points.append(path[i])
                    if len(middle_points) == 2:
                        break
                curr_dist = next_dist
            
            return middle_points
        
        return find_middle_points(end1, end2)`,

  exercises: [
    {
      prompt: 'Implement a function that determines if removing a given edge would increase the height of all possible minimum height trees.',
      initialCode: `def would_increase_height(n: int,
                          edges: List[List[int]],
                          edge_to_remove: List[int]) -> bool:
    """
    Return True if removing edge_to_remove increases
    minimum possible tree height.
    """
    # Your code here
    pass`,
      solution: `def would_increase_height(n: int,
                          edges: List[List[int]],
                          edge_to_remove: List[int]) -> bool:
    # Build graph excluding the edge to remove
    graph = defaultdict(set)
    for u, v in edges:
        if [u, v] != edge_to_remove and [v, u] != edge_to_remove:
            graph[u].add(v)
            graph[v].add(u)
    
    # Check if graph becomes disconnected
    def bfs(start: int, visited: Set[int]) -> int:
        """Return max distance from start"""
        max_dist = 0
        queue = deque([(start, 0)])
        visited.add(start)
        
        while queue:
            node, dist = queue.popleft()
            max_dist = max(max_dist, dist)
            
            for neighbor in graph[node]:
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append((neighbor, dist + 1))
        
        return max_dist
    
    # Check both components after edge removal
    visited = set()
    height1 = bfs(edge_to_remove[0], visited)
    
    # If second component unreachable, edge was critical
    if edge_to_remove[1] not in visited:
        height2 = bfs(edge_to_remove[1], visited)
        # Compare new height with original
        return max(height1, height2) > (n - 1) // 2
    
    return False`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Implement a function that finds all nodes that could be centroids if we\'re allowed to add one new edge between any two nodes.',
      initialCode: `def possible_centroids_with_edge(n: int,
                              edges: List[List[int]]) -> Set[int]:
    """
    Return set of nodes that could be centroids after
    adding one edge between any two nodes.
    """
    # Your code here
    pass`,
      solution: `def possible_centroids_with_edge(n: int,
                              edges: List[List[int]]) -> Set[int]:
    # Build initial graph
    graph = defaultdict(set)
    for u, v in edges:
        graph[u].add(v)
        graph[v].add(u)
    
    def get_heights(root: int) -> Dict[int, int]:
        """Get heights of all nodes from root"""
        heights = {}
        queue = deque([(root, 0)])
        visited = {root}
        
        while queue:
            node, height = queue.popleft()
            heights[node] = height
            
            for neighbor in graph[node]:
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append((neighbor, height + 1))
        
        return heights
    
    possible = set()
    
    # Try each node as potential centroid
    for node in range(n):
        heights = get_heights(node)
        max_height = max(heights.values())
        
        # Node could be centroid if adding an edge
        # can reduce maximum height
        if max_height <= (n - 1) // 2 + 1:
            possible.add(node)
    
    return possible`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why can a tree have at most two centroids?',
      options: [
        'Because trees are binary structures',
        'Because more centroids would create cycles',
        'Due to the triangle inequality property',
        'Because centroids must minimize maximum distance to all other nodes'
      ],
      correctAnswer: 3,
      explanations: [
        'Incorrect. Trees don\'t have to be binary.',
        'Incorrect. Number of centroids doesn\'t affect cycles.',
        'Incorrect. While related, this isn\'t the main reason.',
        'Correct! If we had three centroids, the middle one would be closer to all nodes than the outer ones, contradicting their status as centroids.'
      ],
      difficulty: Difficulty.Beginner
    },
    {
      question: 'What is the key insight behind the topological peeling approach?',
      options: [
        'It uses less memory than other approaches',
        'Centroids must be the last remaining nodes after removing leaves',
        'It\'s faster than other algorithms',
        'It works better for large graphs'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Memory usage isn\'t the key insight.',
        'Correct! Because centroids are furthest from leaves, they will be the last nodes remaining when we repeatedly remove leaf nodes.',
        'Incorrect. While efficient, speed isn\'t the key insight.',
        'Incorrect. The approach works equally well for all graph sizes.'
      ],
      difficulty: Difficulty.Intermediate
    },
    {
      question: 'Why do we need special handling for weighted edges when finding centroids?',
      options: [
        'To save memory',
        'Because weights affect the actual distances between nodes',
        'To improve algorithm performance',
        'To handle disconnected components'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Memory usage isn\'t affected by edge weights.',
        'Correct! With weighted edges, the actual distance between nodes depends on edge weights, not just the number of edges, so we need to account for weights when finding minimal height paths.',
        'Incorrect. Performance isn\'t the main consideration.',
        'Incorrect. Connectivity isn\'t affected by edge weights.'
      ],
      difficulty: Difficulty.Advanced
    }
  ]
};

const stateTrackingData = {
  title: 'Mastering State Tracking in Graph Algorithms',
  content: `<p>
Imagine you're exploring a complex maze where some rooms can be visited multiple times under different conditions - maybe you need to collect a key before opening certain doors, or some paths only become available after activating switches. This is similar to how we need to track states in graph algorithms - it's not just about where we are, but also about the conditions under which we're there.
</p>

<h3><u>Understanding State Tracking</u></h3>

<p>
State tracking goes beyond simple visited/unvisited marking. Consider this example of a graph where nodes can be visited multiple times with different keys:
</p>

<pre>
       [A]
     /  |  \\
   [B] [C] [D]
     \\  |  /
       [E]

If we need key1 to enter C and key2 to enter D:
- Path A→B→E is valid with no keys
- Path A→C→E requires key1
- Path A→D→E requires key2

We must track not just which nodes we've visited, but what keys we had when visiting them.
</pre>

<h3><u>Common State Components</u></h3>

<p>
State tracking often involves multiple dimensions:
</p>

<h4><b>1. Location State</b></h4>
<p>
Where we are in the graph:
</p>
<li>Current node</li>
<li>Path taken to reach here</li>
<li>Available neighbors</li>
<li>Direction of travel</li>

<h4><b>2. Condition State</b></h4>
<p>
What conditions are true:
</p>
<li>Collected items or keys</li>
<li>Activated switches</li>
<li>Resources remaining</li>
<li>Time or step count</li>

<h4><b>3. Restriction State</b></h4>
<p>
What limitations apply:
</p>
<li>Blocked paths</li>
<li>Required conditions</li>
<li>Time limits</li>
<li>Resource constraints</li>

<h3><u>State Management Strategies</u></h3>

<h4><b>1. State Encoding</b></h4>
<p>
How to represent complex states:
</p>
<li>Bit manipulation for efficient storage</li>
<li>State objects for clarity</li>
<li>Hash functions for comparison</li>
<li>Immutable state copies</li>

<h4><b>2. State Transitions</b></h4>
<p>
Managing state changes:
</p>
<li>Valid state transitions</li>
<li>State update rules</li>
<li>Transition validation</li>
<li>State restoration</li>

<h3><u>Common Patterns</u></h3>

<h4><b>1. Key Collection</b></h4>
<p>
Managing collected items:
</p>
<li>Tracking available keys</li>
<li>Door/key matching</li>
<li>Order dependencies</li>

<h4><b>2. Resource Management</b></h4>
<p>
Handling limited resources:
</p>
<li>Fuel or energy levels</li>
<li>Item usage</li>
<li>Time constraints</li>

<h4><b>3. Multi-Unit Coordination</b></h4>
<p>
Managing multiple entities:
</p>
<li>Unit positions</li>
<li>Interaction rules</li>
<li>Collision avoidance</li>`,

  codeExample: `# Comprehensive implementation of state tracking strategies

from collections import defaultdict, deque
from typing import List, Set, Dict, Optional, Tuple
from dataclasses import dataclass
from enum import Enum

class StateTracker:
    """Class implementing various state tracking approaches"""
    
    @dataclass(frozen=True)
    class State:
        """Immutable state class for graph exploration"""
        position: Tuple[int, int]  # Current position
        keys: int  # Bit mask of collected keys
        steps: int  # Steps taken
        resources: int  # Remaining resources
        
        def has_key(self, key: int) -> bool:
            """Check if state has specific key"""
            return bool(self.keys & (1 << key))
        
        def add_key(self, key: int) -> 'State':
            """Return new state with added key"""
            return StateTracker.State(
                position=self.position,
                keys=self.keys | (1 << key),
                steps=self.steps,
                resources=self.resources
            )
        
        def move(self, new_pos: Tuple[int, int], 
                cost: int) -> 'State':
            """Return new state after moving to new position"""
            return StateTracker.State(
                position=new_pos,
                keys=self.keys,
                steps=self.steps + 1,
                resources=self.resources - cost
            )
    
    def shortest_path_with_keys(self, 
                              grid: List[List[str]], 
                              initial_resources: int) -> int:
        """
        Find shortest path collecting keys and opening doors.
        '@' is start, 'a-f' are keys, 'A-F' are doors, '#' is wall.
        Returns minimum steps needed or -1 if impossible.
        """
        rows, cols = len(grid), len(grid[0])
        
        # Find starting position
        start = None
        for i in range(rows):
            for j in range(cols):
                if grid[i][j] == '@':
                    start = (i, j)
                    break
            if start:
                break
        
        # Initialize state tracking
        initial_state = self.State(
            position=start,
            keys=0,
            steps=0,
            resources=initial_resources
        )
        
        # Track visited states
        visited = set()
        queue = deque([initial_state])
        
        # Directions for movement
        directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]
        
        while queue:
            state = queue.popleft()
            
            # Skip if we've seen this state
            state_hash = (state.position, state.keys)
            if state_hash in visited:
                continue
            visited.add(state_hash)
            
            row, col = state.position
            
            # Check if current cell has a key
            cell = grid[row][col]
            if 'a' <= cell <= 'f':
                key = ord(cell) - ord('a')
                if not state.has_key(key):
                    state = state.add_key(key)
            
            # Try all directions
            for dx, dy in directions:
                new_row, new_col = row + dx, col + dy
                
                # Check bounds and walls
                if not (0 <= new_row < rows and 
                       0 <= new_col < cols and
                       grid[new_row][new_col] != '#'):
                    continue
                
                # Check doors
                cell = grid[new_row][new_col]
                if 'A' <= cell <= 'F':
                    door = ord(cell) - ord('A')
                    if not state.has_key(door):
                        continue
                
                # Create new state for this move
                new_state = state.move((new_row, new_col), 1)
                
                # Check resources
                if new_state.resources < 0:
                    continue
                
                queue.append(new_state)
        
        return -1  # No valid path found
    
    def track_multiple_units(self, 
                           grid: List[List[str]], 
                           units: List[Tuple[int, int]]) -> List[List[int]]:
        """
        Find paths for multiple units avoiding collisions.
        Returns list of paths or empty list if impossible.
        """
        @dataclass(frozen=True)
        class MultiState:
            positions: Tuple[Tuple[int, int], ...]
            steps: int
            
        rows, cols = len(grid), len(grid[0])
        num_units = len(units)
        
        # Initialize state
        initial_positions = tuple(units)
        initial_state = MultiState(
            positions=initial_positions,
            steps=0
        )
        
        # Track visited states and paths
        visited = set()
        queue = deque([(initial_state, [[] for _ in range(num_units)])])
        
        while queue:
            state, paths = queue.popleft()
            
            # Skip visited states
            if state.positions in visited:
                continue
            visited.add(state.positions)
            
            # Try moving each unit
            for unit in range(num_units):
                row, col = state.positions[unit]
                
                for dx, dy in [(0, 1), (1, 0), (0, -1), (-1, 0)]:
                    new_row, new_col = row + dx, col + dy
                    
                    # Check validity of move
                    if not (0 <= new_row < rows and 
                           0 <= new_col < cols and
                           grid[new_row][new_col] != '#'):
                        continue
                    
                    # Create new positions with this unit moved
                    new_positions = list(state.positions)
                    new_positions[unit] = (new_row, new_col)
                    
                    # Check for collisions
                    if len(set(new_positions)) != len(new_positions):
                        continue
                    
                    # Create new paths
                    new_paths = [path[:] for path in paths]
                    new_paths[unit].append((new_row, new_col))
                    
                    # Create new state
                    new_state = MultiState(
                        positions=tuple(new_positions),
                        steps=state.steps + 1
                    )
                    
                    queue.append((new_state, new_paths))
        
        return []  # No valid paths found`,

  exercises: [
    {
      prompt: 'Implement a function that finds a path through a grid where some cells can only be visited during certain time ranges (e.g., moving platforms or time-based barriers).',
      initialCode: `def find_path_with_time(grid: List[List[str]],
                     time_constraints: Dict[Tuple[int, int], 
                                        List[Tuple[int, int]]]) -> List[Tuple[int, int]]:
    """
    Find path through grid respecting time constraints.
    time_constraints maps positions to list of (start_time, end_time) pairs
    when the cell can be visited.
    """
    # Your code here
    pass`,
      solution: `def find_path_with_time(grid: List[List[str]],
                     time_constraints: Dict[Tuple[int, int], 
                                        List[Tuple[int, int]]]) -> List[Tuple[int, int]]:
    @dataclass(frozen=True)
    class TimeState:
        position: Tuple[int, int]
        time: int
    
    rows, cols = len(grid), len(grid[0])
    
    def is_valid_time(pos: Tuple[int, int], time: int) -> bool:
        """Check if position can be visited at given time"""
        if pos not in time_constraints:
            return True
        return any(start <= time <= end 
                  for start, end in time_constraints[pos])
    
    # Start from (0,0), aiming for (rows-1, cols-1)
    start_state = TimeState((0, 0), 0)
    queue = deque([(start_state, [start_state.position])])
    visited = set()
    
    while queue:
        state, path = queue.popleft()
        
        if state.position == (rows-1, cols-1):
            return path
        
        if state in visited:
            continue
        visited.add(state)
        
        row, col = state.position
        time = state.time
        
        # Try all directions
        for dx, dy in [(0,1), (1,0), (0,-1), (-1,0)]:
            new_row, new_col = row + dx, col + dy
            new_pos = (new_row, new_col)
            new_time = time + 1
            
            if (0 <= new_row < rows and 
                0 <= new_col < cols and
                grid[new_row][new_col] != '#' and
                is_valid_time(new_pos, new_time)):
                
                new_state = TimeState(new_pos, new_time)
                queue.append((new_state, path + [new_pos]))
    
    return []  # No path found`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Implement a function that finds paths for multiple units through a grid where each unit has different capabilities (e.g., some can cross water, others can climb walls) and they must all reach their targets.',
      initialCode: `def find_paths_with_abilities(grid: List[List[str]],
                           starts: List[Tuple[int, int]],
                           targets: List[Tuple[int, int]],
                           abilities: List[Set[str]]) -> List[List[Tuple[int, int]]]:
    """
    Find paths for units with different abilities.
    abilities[i] contains terrain types unit i can traverse.
    """
    # Your code here
    pass`,
      solution: `def find_paths_with_abilities(grid: List[List[str]],
                           starts: List[Tuple[int, int]],
                           targets: List[Tuple[int, int]],
                           abilities: List[Set[str]]) -> List[List[Tuple[int, int]]]:
    @dataclass(frozen=True)
    class UnitState:
        positions: Tuple[Tuple[int, int], ...]
    
    rows, cols = len(grid), len(grid[0])
    num_units = len(starts)
    
    def can_move(unit: int, pos: Tuple[int, int]) -> bool:
        """Check if unit can move to position"""
        row, col = pos
        return (0 <= row < rows and
                0 <= col < cols and
                grid[row][col] in abilities[unit])
    
    # Initialize state tracking
    initial_state = UnitState(tuple(starts))
    queue = deque([(initial_state, [[] for _ in range(num_units)])])
    visited = set()
    
    while queue:
        state, paths = queue.popleft()
        
        # Check if all units reached targets
        if all(pos == target 
               for pos, target in zip(state.positions, targets)):
            return paths
        
        if state in visited:
            continue
        visited.add(state)
        
        # Try moving each unit
        for unit in range(num_units):
            row, col = state.positions[unit]
            
            for dx, dy in [(0,1), (1,0), (0,-1), (-1,0)]:
                new_row, new_col = row + dx, col + dy
                new_pos = (new_row, new_col)
                
                if can_move(unit, new_pos):
                    # Create new positions with this unit moved
                    new_positions = list(state.positions)
                    new_positions[unit] = new_pos
                    
                    # Check for collisions
                    if len(set(new_positions)) != len(new_positions):
                        continue
                    
                                        new_state = UnitState(tuple(new_positions))
                    
                    # Create new paths
                    new_paths = [path[:] for path in paths]
                    new_paths[unit].append(new_pos)
                    
                    queue.append((new_state, new_paths))
    
    return []  # No valid paths found`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why is simple visited/unvisited tracking sometimes insufficient for graph problems?',
      options: [
        'Because it uses too much memory',
        'Because it makes algorithms slower',
        'Because nodes might need to be visited multiple times under different conditions',
        'Because it doesn\'t work with large graphs'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Memory usage isn\'t the main limitation of simple visited tracking.',
        'Incorrect. Simple visited tracking is actually faster but may miss valid solutions.',
        'Correct! Many problems require tracking additional state information because the same node might need to be visited multiple times under different conditions (e.g., with different keys or resources).',
        'Incorrect. Simple visited tracking works fine with large graphs when appropriate.'
      ],
      difficulty: Difficulty.Beginner
    },
    {
      question: 'What is the key advantage of using immutable state objects?',
      options: [
        'They use less memory',
        'They make debugging easier by preventing accidental state modifications',
        'They are faster to process',
        'They work better with large graphs'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Immutable objects often use more memory as they require copying.',
        'Correct! Immutable states prevent bugs by ensuring state changes are explicit and traceable, making it easier to debug and reason about state transitions.',
        'Incorrect. Immutable objects are usually slower due to copying.',
        'Incorrect. The benefits of immutability are independent of graph size.'
      ],
      difficulty: Difficulty.Intermediate
    },
    {
      question: 'Why might we use bit manipulation for state encoding?',
      options: [
        'To make the code simpler',
        'To improve readability',
        'To efficiently store and compare multiple boolean conditions',
        'To handle larger graphs'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Bit manipulation usually makes code more complex.',
        'Incorrect. Bit manipulation typically reduces readability.',
        'Correct! Bit manipulation allows efficient storage and comparison of multiple boolean conditions (like collected keys or activated switches) using a single integer.',
        'Incorrect. Graph size doesn\'t affect the benefits of bit manipulation.'
      ],
      difficulty: Difficulty.Advanced
    }
  ]
};

const optimizationData = {
  title: 'Mastering Graph Algorithm Optimization',
  content: `<p>
Let's imagine you're designing a navigation system for a large city. The basic algorithm works, but it's too slow for real-time use and uses too much memory. This is a common situation in graph algorithms - getting a solution working is just the first step. Making it efficient enough for practical use requires careful optimization.
</p>

<h3><u>Understanding Performance Bottlenecks</u></h3>

<p>
Consider this example of finding all paths between two points in a graph:
</p>

<pre>
Unoptimized approach:
- Store complete paths in memory
- Check every possible path
- Keep full visited set

Memory usage grows exponentially!

Optimized approach:
- Store only current path
- Use pruning to skip invalid paths early
- Use bit manipulation for visited set
- Avoid unnecessary copies

Same result, dramatically better performance!
</pre>

<h3><u>Space Optimization Techniques</u></h3>

<p>
Memory optimization is crucial for handling large graphs. Here are key strategies:
</p>

<h4><b>1. Efficient Data Structures</b></h4>
<p>
Choose the right structure for your needs:
</p>
<li>Adjacency Lists vs. Matrices: O(V²) vs O(V + E) space</li>
<li>Bit Sets for visited tracking: 8x memory reduction</li>
<li>Integer encoding for states: Compress complex states into bits</li>
<li>Path compression in Union-Find: Reduce tree depths</li>

<h4><b>2. Memory Reuse</b></h4>
<p>
Avoid unnecessary allocations:
</p>
<li>Reuse containers when possible</li>
<li>Update in-place instead of creating copies</li>
<li>Pool frequently allocated objects</li>
<li>Clear and reuse collections</li>

<h3><u>Time Optimization Techniques</u></h3>

<h4><b>1. Early Termination</b></h4>
<p>
Stop processing as soon as possible:
</p>
<li>Check termination conditions first</li>
<li>Prune invalid paths early</li>
<li>Use bounds to skip unnecessary work</li>
<li>Exit as soon as answer is found</li>

<h4><b>2. Efficient Searching</b></h4>
<p>
Choose the right search strategy:
</p>
<li>Bidirectional search for faster pathfinding</li>
<li>A* when heuristics are available</li>
<li>Jump point search for grid graphs</li>
<li>Iterative deepening for memory constraints</li>

<h3><u>Advanced Optimization Patterns</u></h3>

<h4><b>1. State Compression</b></h4>
<p>
Reduce memory usage for states:
</p>
<li>Bit fields for boolean flags</li>
<li>Pack multiple values into integers</li>
<li>Use enums instead of strings</li>
<li>Remove redundant state information</li>

<h4><b>2. Caching and Memoization</b></h4>
<p>
Cache results to avoid recomputation:
</p>
<li>Store frequently accessed results</li>
<li>Use LRU caches for limited memory</li>
<li>Clear cache when no longer needed</li>
<li>Choose appropriate cache size</li>`,

  codeExample: `# Comprehensive implementation of optimization techniques

from collections import deque
from typing import List, Set, Dict, Optional, Any
import heapq

class OptimizedGraphSolver:
    """Class demonstrating various graph optimization techniques"""
    
    def shortest_path_optimized(self, 
                              graph: List[List[tuple]],
                              start: int,
                              end: int) -> tuple:
        """
        Find shortest path using optimized Dijkstra's algorithm.
        Returns (distance, path) using minimal memory.
        Time: O((V + E)log V), Space: O(V)
        """
        n = len(graph)
        # Use arrays instead of dictionaries for better memory usage
        distances = [float('inf')] * n
        distances[start] = 0
        # Store only parent pointers instead of full paths
        parent = [-1] * n
        
        # Use efficient binary heap
        pq = [(0, start)]
        # Use bit set for visited tracking
        visited = 0
        
        while pq:
            dist, vertex = heapq.heappop(pq)
            
            # Early termination when we find target
            if vertex == end:
                # Reconstruct path only when needed
                path = []
                current = end
                while current != -1:
                    path.append(current)
                    current = parent[current]
                return (dist, path[::-1])
            
            # Skip if already visited (bit check is faster than set)
            if visited & (1 << vertex):
                continue
            visited |= (1 << vertex)
            
            # Process neighbors
            for neighbor, weight in graph[vertex]:
                if visited & (1 << neighbor):
                    continue
                
                new_dist = dist + weight
                if new_dist < distances[neighbor]:
                    distances[neighbor] = new_dist
                    parent[neighbor] = vertex
                    heapq.heappush(pq, (new_dist, neighbor))
        
        return (float('inf'), [])
    
    def find_all_paths_optimized(self,
                               graph: List[List[int]],
                               start: int,
                               end: int,
                               max_length: Optional[int] = None) -> List[List[int]]:
        """
        Find all paths between nodes with optimizations.
        Uses minimal memory and early pruning.
        """
        def dfs(vertex: int,
               path: List[int],
               visited: int,
               all_paths: List[List[int]]) -> None:
            """Optimized DFS using bit operations and pruning"""
            # Early termination checks
            if max_length and len(path) > max_length:
                return
            if vertex == end:
                # Copy path only when we find a valid one
                all_paths.append(path[:])
                return
            
            # Use bit operations for visited checks
            visited |= (1 << vertex)
            path.append(vertex)
            
            # Process neighbors with pruning
            for neighbor in graph[vertex]:
                if not (visited & (1 << neighbor)):
                    dfs(neighbor, path, visited, all_paths)
            
            # Backtrack (reuse path list)
            path.pop()
            visited &= ~(1 << vertex)
        
        all_paths = []
        dfs(start, [], 0, all_paths)
        return all_paths
    
    def bfs_with_state_compression(self,
                                 graph: List[List[int]],
                                 start: int,
                                 keys_needed: List[int]) -> int:
        """
        BFS with compressed state tracking.
        Uses bit manipulation to track collected keys.
        """
        # Encode state as (position, keys) where keys is a bit mask
        initial_state = (start, 0)
        seen_states = {initial_state}
        queue = deque([(initial_state, 0)])  # (state, steps)
        
        while queue:
            (pos, keys), steps = queue.popleft()
            
            # Check if we have all keys (bit mask comparison)
            target_keys = sum(1 << k for k in keys_needed)
            if keys == target_keys:
                return steps
            
            for neighbor in graph[pos]:
                new_keys = keys
                # Update keys if we find a new one
                if neighbor in keys_needed:
                    new_keys |= (1 << neighbor)
                
                new_state = (neighbor, new_keys)
                if new_state not in seen_states:
                    seen_states.add(new_state)
                    queue.append((new_state, steps + 1))
        
        return -1
    
    def optimize_memory_usage(self, 
                            original_graph: List[List[tuple]]) -> List[List[int]]:
        """
        Optimize graph representation for memory usage.
        Converts weighted edges to minimal representation.
        """
        n = len(original_graph)
        # Use array of arrays instead of dictionaries
        optimized = [[] for _ in range(n)]
        
        for vertex in range(n):
            # Sort neighbors for better cache locality
            neighbors = sorted(original_graph[vertex])
            for neighbor, weight in neighbors:
                # Store only essential information
                optimized[vertex].append(neighbor)
        
        return optimized`,

  exercises: [
    {
      prompt: 'Implement a memory-efficient solution for finding the shortest path that visits all nodes exactly once (Traveling Salesman Problem). Use bit manipulation to track visited nodes.',
      initialCode: `def tsp_optimized(graph: List[List[int]]) -> int:
    """
    Find shortest path visiting all nodes once.
    Use bit manipulation for visited set.
    Return minimum cost or -1 if impossible.
    """
    # Your code here
    pass`,
      solution: `def tsp_optimized(graph: List[List[int]]) -> int:
    n = len(graph)
    # Use bit mask to represent visited nodes
    all_visited = (1 << n) - 1
    
    # dp[pos][mask] = min cost to visit remaining nodes
    # Initialize with -1 for memoization
    dp = [[-1] * (1 << n) for _ in range(n)]
    
    def solve(pos: int, mask: int) -> int:
        # Base case: visited all nodes
        if mask == all_visited:
            return graph[pos][0] if graph[pos][0] > 0 else float('inf')
        
        # Check memoized result
        if dp[pos][mask] != -1:
            return dp[pos][mask]
        
        ans = float('inf')
        # Try visiting each unvisited node
        for next_pos in range(n):
            if not mask & (1 << next_pos) and graph[pos][next_pos]:
                new_cost = graph[pos][next_pos] + solve(
                    next_pos, mask | (1 << next_pos))
                ans = min(ans, new_cost)
        
        dp[pos][mask] = ans
        return ans
    
    # Start from node 0 with only it visited
    result = solve(0, 1)
    return result if result != float('inf') else -1`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Implement a space-efficient solution for finding all cycles in a graph that uses constant extra space per recursive call.',
      initialCode: `def find_cycles_optimized(graph: List[List[int]]) -> List[List[int]]:
    """
    Find all cycles in graph using minimal extra space.
    Return list of cycles where each cycle is a list of vertices.
    """
    # Your code here
    pass`,
      solution: `def find_cycles_optimized(graph: List[List[int]]) -> List[List[int]]:
    n = len(graph)
    cycles = []
    # Use bit manipulation for visited tracking
    visited = 0
    # Reuse path array to save space
    path = []
    
    def dfs(vertex: int, start: int, path_pos: int) -> None:
        # Use bit operations for visited checks
        if visited & (1 << vertex):
            # Found cycle if we return to start
            if vertex == start and path_pos > 2:
                # Only copy path when cycle is found
                cycles.append(path[:path_pos])
            return
        
        visited |= (1 << vertex)
        path.append(vertex)
        
        for neighbor in graph[vertex]:
            if neighbor >= start:  # Avoid duplicate cycles
                dfs(neighbor, start, path_pos + 1)
        
        # Backtrack
        visited &= ~(1 << vertex)
        path.pop()
    
    # Try each vertex as potential cycle start
    for start in range(n):
        path.clear()  # Reuse path array
        dfs(start, start, 0)
    
    return cycles`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why is bit manipulation particularly effective for state tracking in graph algorithms?',
      options: [
        'Because it makes the code easier to read',
        'Because it uses less CPU time',
        'Because it dramatically reduces memory usage and enables faster comparisons',
        'Because it works better with large graphs'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Bit manipulation typically makes code harder to read.',
        'Incorrect. While bit operations are fast, this isn\'t the main benefit.',
        'Correct! Bit manipulation can store multiple boolean states in a single integer, reducing memory usage by up to 32x or 64x, while also enabling very fast state comparisons using bitwise operations.',
        'Incorrect. The benefits of bit manipulation are independent of graph size.'
      ],
      difficulty: Difficulty.Beginner
    },
    {
      question: 'What is the main advantage of using arrays instead of hash maps for graph representation?',
      options: [
        'Arrays are easier to use',
        'Arrays provide better cache locality and use less memory overhead',
        'Arrays are thread-safe',
        'Arrays allow dynamic resizing'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Hash maps are often easier to use.',
        'Correct! Arrays store elements contiguously in memory, providing better cache performance, and avoid the overhead of hash map buckets and load factors.',
        'Incorrect. Array thread-safety depends on usage.',
        'Incorrect. Hash maps handle dynamic sizing better than arrays.'
      ],
      difficulty: Difficulty.Intermediate
    },
    {
      question: 'Why is early termination checking so important for graph algorithm optimization?',
      options: [
        'To use less memory',
        'To make the code simpler',
        'To avoid exploring paths that cannot lead to a better solution',
        'To handle larger graphs'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Early termination primarily saves time, not memory.',
        'Incorrect. Early termination checks can make code more complex.',
        'Correct! Early termination allows us to stop exploring paths as soon as we know they cannot improve our solution, potentially saving exponential amounts of computation.',
        'Incorrect. Early termination benefits are independent of graph size.'
      ],
      difficulty: Difficulty.Advanced
    }
  ]
};

const edgeCasesData = {
  title: 'Mastering Edge Case Handling in Graph Algorithms',
  content: `<p>
Imagine you're developing a social network feature that finds connections between users. Your algorithm works perfectly for typical cases, but what happens when you encounter a user with no connections? Or when the entire network consists of just one person? These scenarios, which we call edge cases, can break our algorithms if we don't handle them carefully.
</p>

<h3><u>Common Edge Cases in Graphs</u></h3>

<p>
Let's explore the main categories of edge cases that often cause problems:
</p>

<h4><b>1. Empty Structures</b></h4>
<p>
We need to handle several types of empty scenarios:
</p>
<li>Empty graph (no vertices)</li>
<li>Graph with vertices but no edges</li>
<li>Empty paths or cycles</li>
<li>Null or undefined inputs</li>

<h4><b>2. Minimal Structures</b></h4>
<p>
The smallest possible valid cases need special attention:
</p>
<li>Single-vertex graphs</li>
<li>Single-edge graphs</li>
<li>Self-loops</li>
<li>Two-vertex cycles</li>

<h4><b>3. Disconnected Components</b></h4>
<p>
Graphs that aren't fully connected create special challenges:
</p>
<li>Multiple isolated components</li>
<li>Single vertices disconnected from main graph</li>
<li>Components connected by a single edge</li>
<li>Unreachable target vertices</li>

<h3><u>Problems Edge Cases Can Cause</u></h3>

<p>
Let's look at how edge cases can break common algorithms:
</p>

<pre>
DFS with no exit check:
def dfs(graph, start):
    visited = set()
    def explore(vertex):
        visited.add(vertex)
        for neighbor in graph[vertex]:  # Fails if vertex not in graph!
            if neighbor not in visited:
                explore(neighbor)
    explore(start)

BFS assuming connected graph:
def find_path(graph, start, end):
    queue = deque([start])
    while queue:  # Never finds path if end unreachable
        vertex = queue.popleft()
        for neighbor in graph[vertex]:
            queue.append(neighbor)
    return path  # What path to return if no connection?
</pre>

<h3><u>Systematic Edge Case Handling</u></h3>

<h4><b>1. Input Validation</b></h4>
<p>
Always validate inputs before processing:
</p>
<li>Check for null/undefined values</li>
<li>Verify graph structure is valid</li>
<li>Ensure vertices exist</li>
<li>Validate edge properties</li>

<h4><b>2. Boundary Checking</b></h4>
<p>
Guard against boundary violations:
</p>
<li>Check array indices</li>
<li>Verify vertex existence before access</li>
<li>Handle empty collections</li>
<li>Guard against infinite loops</li>

<h4><b>3. Return Value Handling</b></h4>
<p>
Choose appropriate return values for edge cases:
</p>
<li>Empty collections vs null</li>
<li>Special values (-1, infinity)</li>
<li>Error codes or exceptions</li>
<li>Meaningful default values</li>`,

  codeExample: `# Comprehensive implementation of edge case handling

from collections import deque
from typing import List, Set, Dict, Optional
from dataclasses import dataclass
import math

@dataclass
class GraphValidationError(Exception):
    """Custom exception for graph validation errors"""
    message: str
    details: Dict = None

class RobustGraphAlgorithms:
    """Class demonstrating thorough edge case handling"""
    
    def validate_graph(self, graph: List[List[int]]) -> None:
        """
        Thoroughly validate graph structure.
        Raises GraphValidationError if invalid.
        """
        # Check for null graph
        if graph is None:
            raise GraphValidationError("Graph cannot be None")
        
        # Check for empty graph
        if not graph:
            raise GraphValidationError("Graph cannot be empty")
        
        n = len(graph)
        
        # Validate each adjacency list
        for i, neighbors in enumerate(graph):
            if neighbors is None:
                raise GraphValidationError(
                    f"Adjacency list for vertex {i} is None")
            
            # Check each neighbor
            for neighbor in neighbors:
                if not (0 <= neighbor < n):
                    raise GraphValidationError(
                        f"Invalid neighbor {neighbor} for vertex {i}",
                        {"vertex": i, "invalid_neighbor": neighbor})
    
    def find_path_robust(self, 
                        graph: List[List[int]], 
                        start: int, 
                        end: int) -> Optional[List[int]]:
        """
        Find path between vertices with thorough edge case handling.
        Returns None if no path exists or inputs invalid.
        """
        try:
            # Validate inputs
            self.validate_graph(graph)
            n = len(graph)
            
            if not (0 <= start < n and 0 <= end < n):
                raise GraphValidationError(
                    "Start or end vertex out of range",
                    {"start": start, "end": end, "n": n})
            
            # Handle trivial cases
            if start == end:
                return [start]
            
            # Standard BFS with careful edge case handling
            queue = deque([(start, [start])])
            visited = {start}
            
            while queue:
                vertex, path = queue.popleft()
                
                # Safely handle possibly missing adjacency lists
                neighbors = graph[vertex]
                if neighbors is None:
                    continue
                
                for neighbor in neighbors:
                    # Validate neighbor index
                    if not (0 <= neighbor < n):
                        continue
                    
                    if neighbor == end:
                        return path + [neighbor]
                    
                    if neighbor not in visited:
                        visited.add(neighbor)
                        queue.append((neighbor, path + [neighbor]))
            
            # No path found
            return None
            
        except GraphValidationError as e:
            # Log error details and return None
            print(f"Validation error: {e.message}")
            if e.details:
                print(f"Details: {e.details}")
            return None
        except Exception as e:
            # Log unexpected errors and return None
            print(f"Unexpected error: {str(e)}")
            return None
    
    def find_components_robust(self, 
                             graph: List[List[int]]) -> List[List[int]]:
        """
        Find connected components with edge case handling.
        Returns list of components or empty list if invalid.
        """
        try:
            # Validate graph
            self.validate_graph(graph)
            n = len(graph)
            
            def explore_component(start: int, 
                                visited: Set[int]) -> List[int]:
                """Safely explore one component"""
                component = []
                stack = [start]
                
                while stack:
                    vertex = stack.pop()
                    if vertex in visited:
                        continue
                    
                    visited.add(vertex)
                    component.append(vertex)
                    
                    # Safely handle neighbors
                    neighbors = graph[vertex]
                    if neighbors is None:
                        continue
                    
                    for neighbor in neighbors:
                        if (0 <= neighbor < n and 
                            neighbor not in visited):
                            stack.append(neighbor)
                
                return component
            
            # Find all components
            components = []
            visited = set()
            
            for vertex in range(n):
                if vertex not in visited:
                    component = explore_component(vertex, visited)
                    if component:  # Don't add empty components
                        components.append(component)
            
            return components
            
        except GraphValidationError:
            return []  # Return empty list for invalid graph
        
    def calculate_distances_robust(self, 
                                 graph: List[List[int]], 
                                 start: int) -> Dict[int, int]:
        """
        Calculate distances from start vertex with edge case handling.
        Returns dict of distances or empty dict if invalid.
        infinity for unreachable vertices.
        """
        try:
            # Validate inputs
            self.validate_graph(graph)
            n = len(graph)
            
            if not (0 <= start < n):
                raise GraphValidationError(
                    "Start vertex out of range",
                    {"start": start, "n": n})
            
            # Initialize distances
            distances = {v: math.inf for v in range(n)}
            distances[start] = 0
            
            # BFS for unweighted shortest paths
            queue = deque([start])
            visited = {start}
            
            while queue:
                vertex = queue.popleft()
                
                # Safely handle neighbors
                neighbors = graph[vertex]
                if neighbors is None:
                    continue
                
                for neighbor in neighbors:
                    if not (0 <= neighbor < n):
                        continue
                    
                    if neighbor not in visited:
                        visited.add(neighbor)
                        distances[neighbor] = distances[vertex] + 1
                        queue.append(neighbor)
            
            return distances
            
        except GraphValidationError:
            return {}  # Return empty dict for invalid inputs`,

  exercises: [
    {
      prompt: 'Implement a function that finds the shortest cycle in a graph, handling all edge cases including self-loops, parallel edges, and disconnected components.',
      initialCode: `def find_shortest_cycle_robust(graph: List[List[int]]) -> Optional[List[int]]:
    """
    Find shortest cycle in graph, handling all edge cases.
    Returns None if no cycle or invalid input.
    """
    # Your code here
    pass`,
      solution: `def find_shortest_cycle_robust(graph: List[List[int]]) -> Optional[List[int]]:
    if not graph or not isinstance(graph, list):
        return None
    
    n = len(graph)
    shortest_cycle = None
    shortest_length = float('inf')
    
    def bfs_shortest_cycle(start: int) -> Optional[List[int]]:
        # Track both distance and parent for path reconstruction
        parent = {}
        distance = {start: 0}
        queue = deque([start])
        
        while queue:
            vertex = queue.popleft()
            
            # Safely handle neighbors
            if not isinstance(graph[vertex], list):
                continue
                
            for neighbor in graph[vertex]:
                # Validate neighbor
                if not isinstance(neighbor, int) or neighbor < 0 or neighbor >= n:
                    continue
                
                # Found cycle back to start
                if neighbor == start and vertex != parent.get(vertex, -1):
                    # Reconstruct cycle
                    cycle = [start]
                    current = vertex
                    while current != start:
                        cycle.append(current)
                        current = parent[current]
                    cycle.append(start)
                    return cycle
                
                # Normal BFS processing
                if neighbor not in distance:
                    distance[neighbor] = distance[vertex] + 1
                    parent[neighbor] = vertex
                    queue.append(neighbor)
        
        return None
    
    # Check each vertex as potential cycle start
    for start in range(n):
        # Handle self-loops
        if isinstance(graph[start], list) and start in graph[start]:
            return [start, start]
            
        cycle = bfs_shortest_cycle(start)
        if cycle:
            if len(cycle) < shortest_length:
                shortest_cycle = cycle
                shortest_length = len(cycle)
    
    return shortest_cycle`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Implement a function that determines if a graph is bipartite, handling all edge cases including disconnected components, single vertices, and empty graphs.',
      initialCode: `def is_bipartite_robust(graph: List[List[int]]) -> bool:
    """
    Check if graph is bipartite, handling all edge cases.
    Empty graph and single vertex are considered bipartite.
    """
    # Your code here
    pass`,
      solution: `def is_bipartite_robust(graph: List[List[int]]) -> bool:
    # Handle empty graph
    if not graph:
        return True
        
    n = len(graph)
    # Initialize colors as None (unvisited)
    colors = [None] * n
    
    def is_component_bipartite(start: int) -> bool:
        if not isinstance(graph[start], list):
            return True
            
        # Start with color 0
        queue = deque([start])
        colors[start] = 0
        
        while queue:
            vertex = queue.popleft()
            
            # Safely handle neighbors
            if not isinstance(graph[vertex], list):
                continue
                
            for neighbor in graph[vertex]:
                # Validate neighbor
                if not isinstance(neighbor, int) or neighbor < 0 or neighbor >= n:
                    continue
                
                # Uncolored neighbor
                if colors[neighbor] is None:
                    colors[neighbor] = 1 - colors[vertex]
                    queue.append(neighbor)
                # Color conflict
                elif colors[neighbor] == colors[vertex]:
                    return False
        
        return True
    
    # Check each component
    for vertex in range(n):
        if colors[vertex] is None:
            if not is_component_bipartite(vertex):
                return False
    
    return True`,
      difficulty: Difficulty.Advanced,
    }
  ],
  quizzes: [
    {
      question: 'Why is checking for null adjacency lists important in graph algorithms?',
      options: [
        'To save memory',
        'To make the code faster',
        'To prevent null pointer exceptions and undefined behavior',
        'To handle disconnected components'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Null checking is about safety, not memory usage.',
        'Incorrect. Null checking adds a small overhead.',
        'Correct! Null adjacency lists can cause crashes if not checked, making algorithms unreliable. Proper checking prevents these runtime errors.',
        'Incorrect. Disconnected components are handled differently.'
      ],
      difficulty: Difficulty.Beginner
    },
    {
      question: 'What is the best way to handle unreachable vertices in shortest path algorithms?',
      options: [
        'Ignore them completely',
        'Assign them distance zero',
        'Mark them with infinity or a special value',
        'Remove them from the graph'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Ignoring unreachable vertices loses important information.',
        'Incorrect. Zero distance implies the vertex is reachable.',
        'Correct! Using infinity or a special value clearly indicates that no path exists while preserving the vertex in the result.',
        'Incorrect. Removing vertices changes the graph structure.'
      ],
      difficulty: Difficulty.Intermediate
    },
    {
      question: 'Why should empty components be handled specially in connected component algorithms?',
      options: [
        'To improve performance',
        'To save memory',
        'To avoid returning misleading empty lists that could cause issues later',
        'To handle larger graphs'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Performance isn\'t the main concern.',
        'Incorrect. Memory usage is minimal for empty components.',
        'Correct! Empty components can cause problems in code that assumes components contain vertices. Filtering them out prevents these issues.',
      ],
      difficulty: Difficulty.Intermediate
      },
      {
        question: 'Why should edge cases be considered during algorithm design rather than added later?',
        options: [
          'To make the code faster',
          'To use less memory',
          'To ensure the core algorithm naturally handles all cases correctly',
          'To make debugging easier'
        ],
        correctAnswer: 2,
        explanations: [
          'Incorrect. Edge case handling may actually add some overhead.',
          'Incorrect. Memory usage isn\'t the primary consideration.',
          'Correct! Designing algorithms with edge cases in mind leads to more robust solutions that handle all cases naturally, rather than adding special case handling as an afterthought which can make code more complex and error-prone.',
          'Incorrect. While it may help debugging, this isn\'t the main reason.'
        ],
        difficulty: Difficulty.Advanced
      }
  ]
};

const graphLessons: Record<string, LessonContent> = {
  'graph-concepts': basicGraphConceptsData,
  'graph-representation': graphRepresentationData,
  'graph-building': buildingGraphsData,
  'bfs-pattern': bfsPatternData,
  'dfs-pattern': dfsPatternData,
  'matrix-traversal': matrixTraversalData,
  'island-problems': islandProblemsData,
  'graph-connectivity': graphConnectivityData,
  'bipartite-check': bipartiteGraphData,
  'shortest-path': shortestPathData,
  'path-existence': pathExistenceData,
  'cycle-detection': cycleDetectionData,
  'course-schedule': courseScheduleData,
  'build-order': buildOrderData,
  'parallel-courses': parallelCoursesData,
  'redundant-connection': redundantConnectionData,
  'number-of-provinces': provinceCountingData,
  'accounts-merge': accountMergeData,
  'word-ladder': wordTransformationData,
  'graph-clone': graphCloneData,
  'min-height-trees': minHeightTreesData,
  'state-tracking': stateTrackingData,
  'optimization': optimizationData,
  'edge-cases': edgeCasesData,

};
export const graphLessonsTab: LessonsTab = {
  curriculum: graphCurriculum,
  lessons: graphLessons,
};
