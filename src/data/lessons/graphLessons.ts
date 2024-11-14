import { Difficulty } from '@/common/commonConcept';
import { Curriculum, LessonContent, LessonsTab } from '@/common/commonLesson';

const graphCurriculum: Curriculum = {
  title: 'Graph Curriculum',
  description:
    'A comprehensive guide to mastering graph theory, algorithms, and applications',
  sections: [
    {
      id: 1,
      title: 'Graph Fundamentals',
      topics: [
        {
          id: 'graph-concepts',
          title: 'Basic Graph Concepts',
          description:
            'Understanding vertices, edges, directed/undirected graphs',
        },
        {
          id: 'graph-representation',
          title: 'Graph Representation',
          description:
            'Adjacency matrix, adjacency list, edge list implementations',
        },
        {
          id: 'graph-properties',
          title: 'Graph Properties',
          description: 'Connectivity, cycles, degrees, weights, and paths',
        },
      ],
    },
    {
      id: 2,
      title: 'Graph Traversal',
      topics: [
        {
          id: 'bfs',
          title: 'Breadth-First Search',
          description: 'BFS implementation and applications',
        },
        {
          id: 'dfs',
          title: 'Depth-First Search',
          description: 'DFS implementation and applications',
        },
        {
          id: 'traversal-applications',
          title: 'Traversal Applications',
          description: 'Connected components, flood fill, maze problems',
        },
      ],
    },
    {
      id: 3,
      title: 'Shortest Paths',
      topics: [
        {
          id: 'dijkstra',
          title: "Dijkstra's Algorithm",
          description: 'Single-source shortest path in weighted graphs',
        },
        {
          id: 'bellman-ford',
          title: 'Bellman-Ford Algorithm',
          description: 'Shortest paths with negative weights',
        },
        {
          id: 'floyd-warshall',
          title: 'Floyd-Warshall Algorithm',
          description: 'All-pairs shortest paths',
        },
      ],
    },
    {
      id: 4,
      title: 'Minimum Spanning Trees',
      topics: [
        {
          id: 'kruskal',
          title: "Kruskal's Algorithm",
          description: 'MST using edge sorting and union-find',
        },
        {
          id: 'prim',
          title: "Prim's Algorithm",
          description: 'MST using priority queue',
        },
        {
          id: 'union-find',
          title: 'Union-Find Structure',
          description: 'Disjoint set implementation and optimization',
        },
      ],
    },
    {
      id: 5,
      title: 'Graph Cycles',
      topics: [
        {
          id: 'cycle-detection',
          title: 'Cycle Detection',
          description: 'Finding cycles in directed and undirected graphs',
        },
        {
          id: 'topological-sort',
          title: 'Topological Sort',
          description: 'Ordering vertices in directed acyclic graphs',
        },
        {
          id: 'strongly-connected',
          title: 'Strongly Connected Components',
          description: "Kosaraju's and Tarjan's algorithms",
        },
      ],
    },
    {
      id: 6,
      title: 'Network Flow',
      topics: [
        {
          id: 'max-flow',
          title: 'Maximum Flow',
          description: 'Ford-Fulkerson and Edmonds-Karp algorithms',
        },
        {
          id: 'min-cut',
          title: 'Minimum Cut',
          description: 'Min-cut max-flow theorem and applications',
        },
        {
          id: 'bipartite-matching',
          title: 'Bipartite Matching',
          description: 'Maximum bipartite matching algorithms',
        },
      ],
    },
    {
      id: 7,
      title: 'Advanced Graph Algorithms',
      topics: [
        {
          id: 'articulation-bridges',
          title: 'Articulation Points and Bridges',
          description: 'Finding critical vertices and edges',
        },
        {
          id: 'euler-hamilton',
          title: 'Euler and Hamiltonian Paths',
          description: 'Finding special paths in graphs',
        },
        {
          id: 'traveling-salesman',
          title: 'Traveling Salesman Problem',
          description: 'Exact and approximate solutions for TSP',
        },
      ],
    },
    {
      id: 8,
      title: 'Graph Coloring and Independence',
      topics: [
        {
          id: 'graph-coloring',
          title: 'Graph Coloring',
          description: 'Vertex and edge coloring algorithms',
        },
        {
          id: 'independent-sets',
          title: 'Independent Sets',
          description: 'Finding maximum independent sets',
        },
        {
          id: 'vertex-cover',
          title: 'Vertex Cover',
          description: 'Minimum vertex cover algorithms',
        },
      ],
    },
    {
      id: 9,
      title: 'Special Graphs',
      topics: [
        {
          id: 'bipartite-graphs',
          title: 'Bipartite Graphs',
          description: 'Properties and algorithms for bipartite graphs',
        },
        {
          id: 'planar-graphs',
          title: 'Planar Graphs',
          description: 'Understanding and working with planar graphs',
        },
        {
          id: 'directed-acyclic',
          title: 'Directed Acyclic Graphs',
          description: 'Special algorithms for DAGs',
        },
      ],
    },
    {
      id: 10,
      title: 'Advanced Applications',
      topics: [
        {
          id: 'graph-dp',
          title: 'Dynamic Programming on Graphs',
          description: 'Solving graph problems using DP',
        },
        {
          id: 'network-design',
          title: 'Network Design Problems',
          description: 'Solving network optimization problems',
        },
        {
          id: 'social-networks',
          title: 'Social Network Analysis',
          description: 'Algorithms for analyzing large networks',
        },
      ],
    },
  ],
} as const;

const basicGraphConceptsData: LessonContent = {
  title: 'Basic Graph Concepts',
  content: `<p>
Graphs are a fundamental data structure in computer science, used to model relationships between objects. Understanding the basic concepts of graphs is crucial for working with graph algorithms and applications.
</p>

<ul>
<li><strong>Vertices (Nodes):</strong> The fundamental units of a graph, representing objects or entities.</li>
<li><strong>Edges:</strong> Connections between vertices, representing relationships or interactions.</li>
<li><strong>Directed Graphs:</strong> Graphs where edges have a direction, indicating a one-way relationship.</li>
<li><strong>Undirected Graphs:</strong> Graphs where edges do not have a direction, indicating a mutual relationship.</li>
</ul>`,
  codeExample: `# Vertex Class
class Vertex:
    def __init__(self, id):
        self.id = id
        self.neighbors = []

# Edge Class
class Edge:
    def __init__(self, src, dest, weight=None):
        self.src = src
        self.dest = dest
        self.weight = weight

# Graph Class
class Graph:
    def __init__(self, directed=False):
        self.vertices = {}
        self.directed = directed

    def add_vertex(self, id):
        if id not in self.vertices:
            self.vertices[id] = Vertex(id)

    def add_edge(self, src, dest, weight=None):
        if src not in self.vertices:
            self.add_vertex(src)
        if dest not in self.vertices:
            self.add_vertex(dest)
        self.vertices[src].neighbors.append(Edge(src, dest, weight))
        if not self.directed:
            self.vertices[dest].neighbors.append(Edge(dest, src, weight))`,
  exercises: [
    {
      prompt: 'Implement the addition of vertices and edges in a graph.',
      initialCode: `# Write your solution here
class Graph:
    def __init__(self, directed=False):
        self.vertices = {}
        self.directed = directed

    def add_vertex(self, id):
        if id not in self.vertices:
            self.vertices[id] = Vertex(id)

    def add_edge(self, src, dest, weight=None):
        if src not in self.vertices:
            self.add_vertex(src)
        if dest not in self.vertices:
            self.add_vertex(dest)
        self.vertices[src].neighbors.append(Edge(src, dest, weight))
        if not self.directed:
            self.vertices[dest].neighbors.append(Edge(dest, src, weight))`,
      solution: `class Graph:
    def __init__(self, directed=False):
        self.vertices = {}
        self.directed = directed

    def add_vertex(self, id):
        if id not in self.vertices:
            self.vertices[id] = Vertex(id)

    def add_edge(self, src, dest, weight=None):
        if src not in self.vertices:
            self.add_vertex(src)
        if dest not in self.vertices:
            self.add_vertex(dest)
        self.vertices[src].neighbors.append(Edge(src, dest, weight))
        if not self.directed:
            self.vertices[dest].neighbors.append(Edge(dest, src, weight))`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Implement a function to check if two vertices are connected by an edge.',
      initialCode: `# Write your solution here
def are_connected(self, src, dest):
    if src not in self.vertices or dest not in self.vertices:
        return False
    for edge in self.vertices[src].neighbors:
        if edge.dest == dest:
            return True
    return False`,
      solution: `def are_connected(self, src, dest):
    if src not in self.vertices or dest not in self.vertices:
        return False
    for edge in self.vertices[src].neighbors:
        if edge.dest == dest:
            return True
    return False`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a fundamental unit of a graph?',
      options: [
        'Edge',
        'Vertex',
        'Path',
        'Cycle',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. An edge is a connection between vertices.',
        'This is correct. A vertex is a fundamental unit of a graph.',
        'This is incorrect. A path is a sequence of edges connecting vertices.',
        'This is incorrect. A cycle is a path that starts and ends at the same vertex.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What is the difference between a directed and an undirected graph?',
      options: [
        'Directed graphs have weights, undirected graphs do not',
        'Directed graphs have cycles, undirected graphs do not',
        'Directed graphs have edges with direction, undirected graphs do not',
        'Directed graphs have more vertices, undirected graphs have fewer',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. Weights are not exclusive to directed graphs.',
        'This is incorrect. Both directed and undirected graphs can have cycles.',
        'This is correct. Directed graphs have edges with direction, while undirected graphs do not.',
        'This is incorrect. The number of vertices is not a distinguishing factor.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const graphRepresentationData: LessonContent = {
  title: 'Graph Representation',
  content: `<p>
Graphs can be represented in various ways, each with its own advantages and disadvantages. The choice of representation depends on the specific use case and the operations that need to be performed.
</p>

<ul>
<li><strong>Adjacency Matrix:</strong> A 2D array where the value at matrix[i][j] represents the edge between vertex i and vertex j.</li>
<li><strong>Adjacency List:</strong> An array of lists where each list contains the neighbors of a vertex.</li>
<li><strong>Edge List:</strong> A list of edges, where each edge is represented as a tuple (src, dest, weight).</li>
</ul>`,
  codeExample: `# Adjacency Matrix Representation
class GraphMatrix:
    def __init__(self, num_vertices):
        self.num_vertices = num_vertices
        self.matrix = [[0] * num_vertices for _ in range(num_vertices)]

    def add_edge(self, src, dest, weight=1):
        self.matrix[src][dest] = weight
        self.matrix[dest][src] = weight

# Adjacency List Representation
class GraphList:
    def __init__(self):
        self.adj_list = {}

    def add_vertex(self, id):
        if id not in self.adj_list:
            self.adj_list[id] = []

    def add_edge(self, src, dest, weight=None):
        if src not in self.adj_list:
            self.add_vertex(src)
        if dest not in self.adj_list:
            self.add_vertex(dest)
        self.adj_list[src].append((dest, weight))
        self.adj_list[dest].append((src, weight))

# Edge List Representation
class GraphEdgeList:
    def __init__(self):
        self.edges = []

    def add_edge(self, src, dest, weight=None):
        self.edges.append((src, dest, weight))`,
  exercises: [
    {
      prompt: 'Implement the adjacency matrix representation of a graph.',
      initialCode: `# Write your solution here
class GraphMatrix:
    def __init__(self, num_vertices):
        self.num_vertices = num_vertices
        self.matrix = [[0] * num_vertices for _ in range(num_vertices)]

    def add_edge(self, src, dest, weight=1):
        self.matrix[src][dest] = weight
        self.matrix[dest][src] = weight`,
      solution: `class GraphMatrix:
    def __init__(self, num_vertices):
        self.num_vertices = num_vertices
        self.matrix = [[0] * num_vertices for _ in range(num_vertices)]

    def add_edge(self, src, dest, weight=1):
        self.matrix[src][dest] = weight
        self.matrix[dest][src] = weight`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement the adjacency list representation of a graph.',
      initialCode: `# Write your solution here
class GraphList:
    def __init__(self):
        self.adj_list = {}

    def add_vertex(self, id):
        if id not in self.adj_list:
            self.adj_list[id] = []

    def add_edge(self, src, dest, weight=None):
        if src not in self.adj_list:
            self.add_vertex(src)
        if dest not in self.adj_list:
            self.add_vertex(dest)
        self.adj_list[src].append((dest, weight))
        self.adj_list[dest].append((src, weight))`,
      solution: `class GraphList:
    def __init__(self):
        self.adj_list = {}

    def add_vertex(self, id):
        if id not in self.adj_list:
            self.adj_list[id] = []

    def add_edge(self, src, dest, weight=None):
        if src not in self.adj_list:
            self.add_vertex(src)
        if dest not in self.adj_list:
            self.add_vertex(dest)
        self.adj_list[src].append((dest, weight))
        self.adj_list[dest].append((src, weight))`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement the edge list representation of a graph.',
      initialCode: `# Write your solution here
class GraphEdgeList:
    def __init__(self):
        self.edges = []

    def add_edge(self, src, dest, weight=None):
        self.edges.append((src, dest, weight))`,
      solution: `class GraphEdgeList:
    def __init__(self):
        self.edges = []

    def add_edge(self, src, dest, weight=None):
        self.edges.append((src, dest, weight))`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a common representation of a graph?',
      options: [
        'Linked list',
        'Tree',
        'Adjacency matrix',
        'Stack',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. A linked list is not a common representation of a graph.',
        'This is incorrect. A tree is a specific type of graph, but not a common representation.',
        'This is correct. An adjacency matrix is a common representation of a graph.',
        'This is incorrect. A stack is not a common representation of a graph.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the main advantage of using an adjacency list over an adjacency matrix?',
      options: [
        'Saves space for sparse graphs',
        'Faster edge insertion',
        'Easier to implement',
        'All of the above',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. An adjacency list saves space for sparse graphs.',
        'This is incorrect. Edge insertion is not necessarily faster in an adjacency list.',
        'This is incorrect. Ease of implementation is subjective.',
        'This is incorrect. Not all of the above are advantages of an adjacency list.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const graphPropertiesData: LessonContent = {
  title: 'Graph Properties',
  content: `<p>
Understanding the properties of graphs is essential for solving graph-related problems. These properties include connectivity, cycles, degrees, weights, and paths.
</p>

<ul>
<li><strong>Connectivity:</strong> A graph is connected if there is a path between any two vertices.</li>
<li><strong>Cycles:</strong> A cycle is a path that starts and ends at the same vertex.</li>
<li><strong>Degrees:</strong> The degree of a vertex is the number of edges connected to it.</li>
<li><strong>Weights:</strong> Edges can have weights representing the cost or distance between vertices.</li>
<li><strong>Paths:</strong> A path is a sequence of edges connecting vertices.</li>
</ul>`,
  codeExample: `# Graph Class
class Graph:
    def __init__(self, directed=False):
        self.vertices = {}
        self.directed = directed

    def add_vertex(self, id):
        if id not in self.vertices:
            self.vertices[id] = Vertex(id)

    def add_edge(self, src, dest, weight=None):
        if src not in self.vertices:
            self.add_vertex(src)
        if dest not in self.vertices:
            self.add_vertex(dest)
        self.vertices[src].neighbors.append(Edge(src, dest, weight))
        if not self.directed:
            self.vertices[dest].neighbors.append(Edge(dest, src, weight))

    def is_connected(self):
        visited = set()
        def dfs(vertex):
            visited.add(vertex)
            for edge in self.vertices[vertex].neighbors:
                if edge.dest not in visited:
                    dfs(edge.dest)
        dfs(next(iter(self.vertices)))
        return len(visited) == len(self.vertices)

    def has_cycle(self):
        visited = set()
        def dfs(vertex, parent):
            visited.add(vertex)
            for edge in self.vertices[vertex].neighbors:
                if edge.dest not in visited:
                    if dfs(edge.dest, vertex):
                        return True
                elif edge.dest != parent:
                    return True
            return False
        for vertex in self.vertices:
            if vertex not in visited:
                if dfs(vertex, None):
                    return True
        return False`,
  exercises: [
    {
      prompt: 'Implement a function to check if a graph is connected.',
      initialCode: `# Write your solution here
def is_connected(self):
    visited = set()
    def dfs(vertex):
        visited.add(vertex)
        for edge in self.vertices[vertex].neighbors:
            if edge.dest not in visited:
                dfs(edge.dest)
    dfs(next(iter(self.vertices)))
    return len(visited) == len(self.vertices)`,
      solution: `def is_connected(self):
    visited = set()
    def dfs(vertex):
        visited.add(vertex)
        for edge in self.vertices[vertex].neighbors:
            if edge.dest not in visited:
                dfs(edge.dest)
    dfs(next(iter(self.vertices)))
    return len(visited) == len(self.vertices)`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement a function to check if a graph has a cycle.',
      initialCode: `# Write your solution here
def has_cycle(self):
    visited = set()
    def dfs(vertex, parent):
        visited.add(vertex)
        for edge in self.vertices[vertex].neighbors:
            if edge.dest not in visited:
                if dfs(edge.dest, vertex):
                    return True
            elif edge.dest != parent:
                return True
        return False
    for vertex in self.vertices:
        if vertex not in visited:
            if dfs(vertex, None):
                return True
    return False`,
      solution: `def has_cycle(self):
    visited = set()
    def dfs(vertex, parent):
        visited.add(vertex)
        for edge in self.vertices[vertex].neighbors:
            if edge.dest not in visited:
                if dfs(edge.dest, vertex):
                    return True
            elif edge.dest != parent:
                return True
        return False
    for vertex in self.vertices:
        if vertex not in visited:
            if dfs(vertex, None):
                return True
    return False`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a property of a connected graph?',
      options: [
        'There is a path between any two vertices',
        'There is no path between any two vertices',
        'There is exactly one path between any two vertices',
        'There is a cycle between any two vertices',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. A connected graph has a path between any two vertices.',
        'This is incorrect. A connected graph has at least one path between any two vertices.',
        'This is incorrect. There can be multiple paths between two vertices in a connected graph.',
        'This is incorrect. A cycle is not a defining property of a connected graph.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the degree of a vertex in a graph?',
      options: [
        'The number of vertices connected to it',
        'The number of edges connected to it',
        'The number of cycles it is part of',
        'The number of paths it is part of',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. The degree is the number of edges, not vertices.',
        'This is correct. The degree of a vertex is the number of edges connected to it.',
        'This is incorrect. The degree is not related to the number of cycles.',
        'This is incorrect. The degree is not related to the number of paths.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const bfsData: LessonContent = {
  title: 'Breadth-First Search',
  content: `<p>
Breadth-First Search (BFS) is an algorithm for traversing or searching tree or graph data structures. It starts at the tree root (or some arbitrary node of a graph) and explores all of the neighbor nodes at the present depth level before moving on to nodes at the next depth level.
</p>

<ul>
<li><strong>Queue:</strong> BFS uses a queue to keep track of the nodes to visit next.</li>
<li><strong>Level Order Traversal:</strong> BFS explores nodes level by level.</li>
<li><strong>Applications:</strong> Shortest path in an unweighted graph, web crawlers, and social networking sites.</li>
</ul>`,
  codeExample: `# BFS Implementation
from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    visited.add(start)
    while queue:
        vertex = queue.popleft()
        print(vertex)
        for neighbor in graph[vertex]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)`,
  exercises: [
    {
      prompt: 'Implement BFS for a graph.',
      initialCode: `# Write your solution here
from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    visited.add(start)
    while queue:
        vertex = queue.popleft()
        print(vertex)
        for neighbor in graph[vertex]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)`,
      solution: `from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    visited.add(start)
    while queue:
        vertex = queue.popleft()
        print(vertex)
        for neighbor in graph[vertex]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement a function to find the shortest path in an unweighted graph using BFS.',
      initialCode: `# Write your solution here
from collections import deque

def shortest_path(graph, start, end):
    visited = set()
    queue = deque([(start, 0)])
    visited.add(start)
    while queue:
        vertex, distance = queue.popleft()
        if vertex == end:
            return distance
        for neighbor in graph[vertex]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append((neighbor, distance + 1))
    return -1`,
      solution: `from collections import deque

def shortest_path(graph, start, end):
    visited = set()
    queue = deque([(start, 0)])
    visited.add(start)
    while queue:
        vertex, distance = queue.popleft()
        if vertex == end:
            return distance
        for neighbor in graph[vertex]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append((neighbor, distance + 1))
    return -1`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a characteristic of BFS?',
      options: [
        'Uses a stack',
        'Uses a queue',
        'Explores nodes depth-first',
        'Explores nodes level-by-level',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. BFS uses a queue, not a stack.',
        'This is correct. BFS uses a queue to keep track of the nodes to visit next.',
        'This is incorrect. BFS explores nodes level-by-level, not depth-first.',
        'This is correct. BFS explores nodes level-by-level.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is a common application of BFS?',
      options: [
        'Finding the shortest path in an unweighted graph',
        'Finding the longest path in a graph',
        'Sorting numbers',
        'Balancing trees',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. BFS is commonly used to find the shortest path in an unweighted graph.',
        'This is incorrect. BFS is not used to find the longest path in a graph.',
        'This is incorrect. BFS is not used for sorting numbers.',
        'This is incorrect. BFS is not used for balancing trees.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const dfsData: LessonContent = {
  title: 'Depth-First Search',
  content: `<p>
Depth-First Search (DFS) is an algorithm for traversing or searching tree or graph data structures. It starts at the root node (or some arbitrary node of a graph) and explores as far as possible along each branch before backtracking.
</p>

<ul>
<li><strong>Stack:</strong> DFS uses a stack to keep track of the nodes to visit next.</li>
<li><strong>Recursive:</strong> DFS can be implemented recursively.</li>
<li><strong>Applications:</strong> Topological sorting, cycle detection, and solving puzzles like mazes.</li>
</ul>`,
  codeExample: `# DFS Implementation
def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    visited.add(start)
    print(start)
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)`,
  exercises: [
    {
      prompt: 'Implement DFS for a graph.',
      initialCode: `# Write your solution here
def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    visited.add(start)
    print(start)
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)`,
      solution: `def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    visited.add(start)
    print(start)
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement a function to detect cycles in a graph using DFS.',
      initialCode: `# Write your solution here
def has_cycle(graph):
    visited = set()
    def dfs(vertex, parent):
        visited.add(vertex)
        for neighbor in graph[vertex]:
            if neighbor not in visited:
                if dfs(neighbor, vertex):
                    return True
            elif neighbor != parent:
                return True
        return False
    for vertex in graph:
        if vertex not in visited:
            if dfs(vertex, None):
                return True
    return False`,
      solution: `def has_cycle(graph):
    visited = set()
    def dfs(vertex, parent):
        visited.add(vertex)
        for neighbor in graph[vertex]:
            if neighbor not in visited:
                if dfs(neighbor, vertex):
                    return True
            elif neighbor != parent:
                return True
        return False
    for vertex in graph:
        if vertex not in visited:
            if dfs(vertex, None):
                return True
    return False`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a characteristic of DFS?',
      options: [
        'Uses a queue',
        'Uses a stack',
        'Explores nodes level-by-level',
        'Explores nodes depth-first',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. DFS uses a stack, not a queue.',
        'This is correct. DFS uses a stack to keep track of the nodes to visit next.',
        'This is incorrect. DFS explores nodes depth-first, not level-by-level.',
        'This is correct. DFS explores nodes depth-first.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is a common application of DFS?',
      options: [
        'Finding the shortest path in an unweighted graph',
        'Finding the longest path in a graph',
        'Topological sorting',
        'Balancing trees',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. DFS is not used to find the shortest path in an unweighted graph.',
        'This is incorrect. DFS is not used to find the longest path in a graph.',
        'This is correct. DFS is commonly used for topological sorting.',
        'This is incorrect. DFS is not used for balancing trees.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const traversalApplicationsData: LessonContent = {
  title: 'Traversal Applications',
  content: `<p>
Graph traversal algorithms like BFS and DFS have various applications in solving real-world problems. These include finding connected components, flood fill, and solving maze problems.
</p>

<ul>
<li><strong>Connected Components:</strong> Finding all connected components in an undirected graph.</li>
<li><strong>Flood Fill:</strong> Filling an area with a specific color, often used in image processing.</li>
<li><strong>Maze Problems:</strong> Solving maze problems using graph traversal techniques.</li>
</ul>`,
  codeExample: `# Connected Components
def connected_components(graph):
    visited = set()
    components = []
    def dfs(vertex):
        visited.add(vertex)
        component.append(vertex)
        for neighbor in graph[vertex]:
            if neighbor not in visited:
                dfs(neighbor)
    for vertex in graph:
        if vertex not in visited:
            component = []
            dfs(vertex)
            components.append(component)
    return components

# Flood Fill
def flood_fill(image, sr, sc, new_color):
    rows, cols = len(image), len(image[0])
    original_color = image[sr][sc]
    if original_color == new_color:
        return image
    def dfs(r, c):
        if image[r][c] == original_color:
            image[r][c] = new_color
            if r >= 1: dfs(r - 1, c)
            if r + 1 < rows: dfs(r + 1, c)
            if c >= 1: dfs(r, c - 1)
            if c + 1 < cols: dfs(r, c + 1)
    dfs(sr, sc)
    return image`,
  exercises: [
    {
      prompt: 'Implement a function to find all connected components in an undirected graph.',
      initialCode: `# Write your solution here
def connected_components(graph):
    visited = set()
    components = []
    def dfs(vertex):
        visited.add(vertex)
        component.append(vertex)
        for neighbor in graph[vertex]:
            if neighbor not in visited:
                dfs(neighbor)
    for vertex in graph:
        if vertex not in visited:
            component = []
            dfs(vertex)
            components.append(component)
    return components`,
      solution: `def connected_components(graph):
    visited = set()
    components = []
    def dfs(vertex):
        visited.add(vertex)
        component.append(vertex)
        for neighbor in graph[vertex]:
            if neighbor not in visited:
                dfs(neighbor)
    for vertex in graph:
        if vertex not in visited:
            component = []
            dfs(vertex)
            components.append(component)
    return components`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement the flood fill algorithm to fill an area with a specific color.',
      initialCode: `# Write your solution here
def flood_fill(image, sr, sc, new_color):
    rows, cols = len(image), len(image[0])
    original_color = image[sr][sc]
    if original_color == new_color:
        return image
    def dfs(r, c):
        if image[r][c] == original_color:
            image[r][c] = new_color
            if r >= 1: dfs(r - 1, c)
            if r + 1 < rows: dfs(r + 1, c)
            if c >= 1: dfs(r, c - 1)
            if c + 1 < cols: dfs(r, c + 1)
    dfs(sr, sc)
    return image`,
      solution: `def flood_fill(image, sr, sc, new_color):
    rows, cols = len(image), len(image[0])
    original_color = image[sr][sc]
    if original_color == new_color:
        return image
    def dfs(r, c):
        if image[r][c] == original_color:
            image[r][c] = new_color
            if r >= 1: dfs(r - 1, c)
            if r + 1 < rows: dfs(r + 1, c)
            if c >= 1: dfs(r, c - 1)
            if c + 1 < cols: dfs(r, c + 1)
    dfs(sr, sc)
    return image`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is an application of graph traversal?',
      options: [
        'Sorting numbers',
        'Finding connected components',
        'Balancing trees',
        'Graph traversal',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. Sorting numbers is not an application of graph traversal.',
        'This is correct. Finding connected components is an application of graph traversal.',
        'This is incorrect. Balancing trees is not an application of graph traversal.',
        'This is incorrect. Graph traversal is not an application of itself.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the main goal of the flood fill algorithm?',
      options: [
        'Fill an area with a specific color',
        'Find the shortest path',
        'Sort the pixels',
        'Balance the image',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The main goal of the flood fill algorithm is to fill an area with a specific color.',
        'This is incorrect. Finding the shortest path is not the main goal of the flood fill algorithm.',
        'This is incorrect. Sorting the pixels is not the main goal of the flood fill algorithm.',
        'This is incorrect. Balancing the image is not the main goal of the flood fill algorithm.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const dijkstraData: LessonContent = {
  title: "Dijkstra's Algorithm",
  content: `<p>
Dijkstra's algorithm is an algorithm for finding the shortest paths between nodes in a graph, which may represent, for example, road networks. It was conceived by computer scientist Edsger W. Dijkstra in 1956 and published three years later.
</p>

<ul>
<li><strong>Greedy Algorithm:</strong> Dijkstra's algorithm is a greedy algorithm that always selects the shortest path.</li>
<li><strong>Priority Queue:</strong> Dijkstra's algorithm uses a priority queue to efficiently find the next node with the smallest distance.</li>
<li><strong>Applications:</strong> Routing protocols, GPS navigation, and network routing.</li>
</ul>`,
  codeExample: `# Dijkstra's Algorithm Implementation
import heapq

def dijkstra(graph, start):
    distances = {vertex: float('infinity') for vertex in graph}
    distances[start] = 0
    priority_queue = [(0, start)]
    while priority_queue:
        current_distance, current_vertex = heapq.heappop(priority_queue)
        if current_distance > distances[current_vertex]:
            continue
        for neighbor, weight in graph[current_vertex].items():
            distance = current_distance + weight
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(priority_queue, (distance, neighbor))
    return distances`,
  exercises: [
    {
      prompt: 'Implement Dijkstra\'s algorithm for finding the shortest path in a weighted graph.',
      initialCode: `# Write your solution here
import heapq

def dijkstra(graph, start):
    distances = {vertex: float('infinity') for vertex in graph}
    distances[start] = 0
    priority_queue = [(0, start)]
    while priority_queue:
        current_distance, current_vertex = heapq.heappop(priority_queue)
        if current_distance > distances[current_vertex]:
            continue
        for neighbor, weight in graph[current_vertex].items():
            distance = current_distance + weight
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(priority_queue, (distance, neighbor))
    return distances`,
      solution: `import heapq

def dijkstra(graph, start):
    distances = {vertex: float('infinity') for vertex in graph}
    distances[start] = 0
    priority_queue = [(0, start)]
    while priority_queue:
        current_distance, current_vertex = heapq.heappop(priority_queue)
        if current_distance > distances[current_vertex]:
            continue
        for neighbor, weight in graph[current_vertex].items():
            distance = current_distance + weight
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(priority_queue, (distance, neighbor))
    return distances`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Implement a function to find the shortest path from a start node to an end node using Dijkstra\'s algorithm.',
      initialCode: `# Write your solution here
import heapq

def dijkstra_shortest_path(graph, start, end):
    distances = {vertex: float('infinity') for vertex in graph}
    distances[start] = 0
    priority_queue = [(0, start)]
    previous_vertices = {vertex: None for vertex in graph}
    while priority_queue:
        current_distance, current_vertex = heapq.heappop(priority_queue)
        if current_distance > distances[current_vertex]:
            continue
        for neighbor, weight in graph[current_vertex].items():
            distance = current_distance + weight
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                previous_vertices[neighbor] = current_vertex
                heapq.heappush(priority_queue, (distance, neighbor))
    path, current_vertex = [], end
    while previous_vertices[current_vertex] is not None:
        path.insert(0, current_vertex)
        current_vertex = previous_vertices[current_vertex]
    if path:
        path.insert(0, start)
    return path`,
      solution: `import heapq

def dijkstra_shortest_path(graph, start, end):
    distances = {vertex: float('infinity') for vertex in graph}
    distances[start] = 0
    priority_queue = [(0, start)]
    previous_vertices = {vertex: None for vertex in graph}
    while priority_queue:
        current_distance, current_vertex = heapq.heappop(priority_queue)
        if current_distance > distances[current_vertex]:
            continue
        for neighbor, weight in graph[current_vertex].items():
            distance = current_distance + weight
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                previous_vertices[neighbor] = current_vertex
                heapq.heappush(priority_queue, (distance, neighbor))
    path, current_vertex = [], end
    while previous_vertices[current_vertex] is not None:
        path.insert(0, current_vertex)
        current_vertex = previous_vertices[current_vertex]
    if path:
        path.insert(0, start)
    return path`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a characteristic of Dijkstra\'s algorithm?',
      options: [
        'Uses a stack',
        'Uses a priority queue',
        'Explores nodes depth-first',
        'Explores nodes level-by-level',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. Dijkstra\'s algorithm uses a priority queue, not a stack.',
        'This is correct. Dijkstra\'s algorithm uses a priority queue to efficiently find the next node with the smallest distance.',
        'This is incorrect. Dijkstra\'s algorithm does not explore nodes depth-first.',
        'This is incorrect. Dijkstra\'s algorithm does not explore nodes level-by-level.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is a common application of Dijkstra\'s algorithm?',
      options: [
        'Finding the shortest path in an unweighted graph',
        'Finding the longest path in a graph',
        'Routing protocols',
        'Balancing trees',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. Dijkstra\'s algorithm is used for weighted graphs, not unweighted graphs.',
        'This is incorrect. Dijkstra\'s algorithm is not used to find the longest path in a graph.',
        'This is correct. Routing protocols is a common application of Dijkstra\'s algorithm.',
        'This is incorrect. Dijkstra\'s algorithm is not used for balancing trees.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const bellmanFordData: LessonContent = {
  title: 'Bellman-Ford Algorithm',
  content: `<p>
The Bellman-Ford algorithm is an algorithm that computes shortest paths from a single source vertex to all of the other vertices in a weighted digraph. It is slower than Dijkstra's algorithm for the same problem, but more versatile, as it is capable of handling graphs in which some of the edge weights are negative numbers.
</p>

<ul>
<li><strong>Dynamic Programming:</strong> Bellman-Ford algorithm uses dynamic programming to solve the shortest path problem.</li>
<li><strong>Negative Weights:</strong> Bellman-Ford algorithm can handle graphs with negative edge weights.</li>
<li><strong>Applications:</strong> Currency conversion, arbitrage detection, and routing protocols.</li>
</ul>`,
  codeExample: `# Bellman-Ford Algorithm Implementation
def bellman_ford(graph, start):
    distances = {vertex: float('infinity') for vertex in graph}
    distances[start] = 0
    for _ in range(len(graph) - 1):
        for vertex in graph:
            for neighbor, weight in graph[vertex].items():
                if distances[vertex] + weight < distances[neighbor]:
                    distances[neighbor] = distances[vertex] + weight
    for vertex in graph:
        for neighbor, weight in graph[vertex].items():
            if distances[vertex] + weight < distances[neighbor]:
                raise ValueError("Graph contains a negative-weight cycle")
    return distances`,
  exercises: [
    {
      prompt: 'Implement the Bellman-Ford algorithm for finding the shortest path in a weighted graph with negative weights.',
      initialCode: `# Write your solution here
def bellman_ford(graph, start):
    distances = {vertex: float('infinity') for vertex in graph}
    distances[start] = 0
    for _ in range(len(graph) - 1):
        for vertex in graph:
            for neighbor, weight in graph[vertex].items():
                if distances[vertex] + weight < distances[neighbor]:
                    distances[neighbor] = distances[vertex] + weight
    for vertex in graph:
        for neighbor, weight in graph[vertex].items():
            if distances[vertex] + weight < distances[neighbor]:
                raise ValueError("Graph contains a negative-weight cycle")
    return distances`,
      solution: `def bellman_ford(graph, start):
    distances = {vertex: float('infinity') for vertex in graph}
    distances[start] = 0
    for _ in range(len(graph) - 1):
        for vertex in graph:
            for neighbor, weight in graph[vertex].items():
                if distances[vertex] + weight < distances[neighbor]:
                    distances[neighbor] = distances[vertex] + weight
    for vertex in graph:
        for neighbor, weight in graph[vertex].items():
            if distances[vertex] + weight < distances[neighbor]:
                raise ValueError("Graph contains a negative-weight cycle")
    return distances`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Implement a function to detect negative weight cycles using the Bellman-Ford algorithm.',
      initialCode: `# Write your solution here
def detect_negative_cycle(graph, start):
    distances = {vertex: float('infinity') for vertex in graph}
    distances[start] = 0
    for _ in range(len(graph) - 1):
        for vertex in graph:
            for neighbor, weight in graph[vertex].items():
                if distances[vertex] + weight < distances[neighbor]:
                    distances[neighbor] = distances[vertex] + weight
    for vertex in graph:
        for neighbor, weight in graph[vertex].items():
            if distances[vertex] + weight < distances[neighbor]:
                return True
    return False`,
      solution: `def detect_negative_cycle(graph, start):
    distances = {vertex: float('infinity') for vertex in graph}
    distances[start] = 0
    for _ in range(len(graph) - 1):
        for vertex in graph:
            for neighbor, weight in graph[vertex].items():
                if distances[vertex] + weight < distances[neighbor]:
                    distances[neighbor] = distances[vertex] + weight
    for vertex in graph:
        for neighbor, weight in graph[vertex].items():
            if distances[vertex] + weight < distances[neighbor]:
                return True
    return False`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a characteristic of the Bellman-Ford algorithm?',
      options: [
        'Uses a stack',
        'Uses a priority queue',
        'Can handle negative weights',
        'Explores nodes level-by-level',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. The Bellman-Ford algorithm does not use a stack.',
        'This is incorrect. The Bellman-Ford algorithm does not use a priority queue.',
        'This is correct. The Bellman-Ford algorithm can handle graphs with negative edge weights.',
        'This is incorrect. The Bellman-Ford algorithm does not explore nodes level-by-level.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is a common application of the Bellman-Ford algorithm?',
      options: [
        'Finding the shortest path in an unweighted graph',
        'Finding the longest path in a graph',
        'Currency conversion',
        'Balancing trees',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. The Bellman-Ford algorithm is used for weighted graphs, not unweighted graphs.',
        'This is incorrect. The Bellman-Ford algorithm is not used to find the longest path in a graph.',
        'This is correct. Currency conversion is a common application of the Bellman-Ford algorithm.',
        'This is incorrect. The Bellman-Ford algorithm is not used for balancing trees.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const floydWarshallData: LessonContent = {
  title: 'Floyd-Warshall Algorithm',
  content: `<p>
The Floyd-Warshall algorithm is an algorithm for finding shortest paths in a weighted graph with positive or negative edge weights (but with no negative cycles). A single execution of the algorithm will find the lengths (summed weights) of shortest paths between all pairs of vertices.
</p>

<ul>
<li><strong>Dynamic Programming:</strong> Floyd-Warshall algorithm uses dynamic programming to solve the all-pairs shortest path problem.</li>
<li><strong>All-Pairs Shortest Paths:</strong> Floyd-Warshall algorithm finds the shortest paths between all pairs of vertices.</li>
<li><strong>Applications:</strong> Network routing, transportation networks, and GPS navigation.</li>
</ul>`,
  codeExample: `# Floyd-Warshall Algorithm Implementation
def floyd_warshall(graph):
    distances = {vertex: {vertex: float('infinity') for vertex in graph} for vertex in graph}
    for vertex in graph:
        distances[vertex][vertex] = 0
        for neighbor, weight in graph[vertex].items():
            distances[vertex][neighbor] = weight
    for k in graph:
        for i in graph:
            for j in graph:
                if distances[i][j] > distances[i][k] + distances[k][j]:
                    distances[i][j] = distances[i][k] + distances[k][j]
    return distances`,
  exercises: [
    {
      prompt: 'Implement the Floyd-Warshall algorithm for finding the shortest paths between all pairs of vertices in a weighted graph.',
      initialCode: `# Write your solution here
def floyd_warshall(graph):
    distances = {vertex: {vertex: float('infinity') for vertex in graph} for vertex in graph}
    for vertex in graph:
        distances[vertex][vertex] = 0
        for neighbor, weight in graph[vertex].items():
            distances[vertex][neighbor] = weight
    for k in graph:
        for i in graph:
            for j in graph:
                if distances[i][j] > distances[i][k] + distances[k][j]:
                    distances[i][j] = distances[i][k] + distances[k][j]
    return distances`,
      solution: `def floyd_warshall(graph):
    distances = {vertex: {vertex: float('infinity') for vertex in graph} for vertex in graph}
    for vertex in graph:
        distances[vertex][vertex] = 0
        for neighbor, weight in graph[vertex].items():
            distances[vertex][neighbor] = weight
    for k in graph:
        for i in graph:
            for j in graph:
                if distances[i][j] > distances[i][k] + distances[k][j]:
                    distances[i][j] = distances[i][k] + distances[k][j]
    return distances`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Implement a function to detect negative weight cycles using the Floyd-Warshall algorithm.',
      initialCode: `# Write your solution here
def detect_negative_cycle(graph):
    distances = {vertex: {vertex: float('infinity') for vertex in graph} for vertex in graph}
    for vertex in graph:
        distances[vertex][vertex] = 0
        for neighbor, weight in graph[vertex].items():
            distances[vertex][neighbor] = weight
    for k in graph:
        for i in graph:
            for j in graph:
                if distances[i][j] > distances[i][k] + distances[k][j]:
                    distances[i][j] = distances[i][k] + distances[k][j]
    for vertex in graph:
        if distances[vertex][vertex] < 0:
            return True
    return False`,
      solution: `def detect_negative_cycle(graph):
    distances = {vertex: {vertex: float('infinity') for vertex in graph} for vertex in graph}
    for vertex in graph:
        distances[vertex][vertex] = 0
        for neighbor, weight in graph[vertex].items():
            distances[vertex][neighbor] = weight
    for k in graph:
        for i in graph:
            for j in graph:
                if distances[i][j] > distances[i][k] + distances[k][j]:
                    distances[i][j] = distances[i][k] + distances[k][j]
    for vertex in graph:
        if distances[vertex][vertex] < 0:
            return True
    return False`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a characteristic of the Floyd-Warshall algorithm?',
      options: [
        'Uses a stack',
        'Uses a priority queue',
        'Finds all-pairs shortest paths',
        'Explores nodes level-by-level',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. The Floyd-Warshall algorithm does not use a stack.',
        'This is incorrect. The Floyd-Warshall algorithm does not use a priority queue.',
        'This is correct. The Floyd-Warshall algorithm finds the shortest paths between all pairs of vertices.',
        'This is incorrect. The Floyd-Warshall algorithm does not explore nodes level-by-level.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is a common application of the Floyd-Warshall algorithm?',
      options: [
        'Finding the shortest path in an unweighted graph',
        'Finding the longest path in a graph',
        'Network routing',
        'Balancing trees',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. The Floyd-Warshall algorithm is used for weighted graphs, not unweighted graphs.',
        'This is incorrect. The Floyd-Warshall algorithm is not used to find the longest path in a graph.',
        'This is correct. Network routing is a common application of the Floyd-Warshall algorithm.',
        'This is incorrect. The Floyd-Warshall algorithm is not used for balancing trees.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const kruskalData: LessonContent = {
  title: "Kruskal's Algorithm",
  content: `<p>
Kruskal's algorithm is a greedy algorithm that finds a minimum spanning tree for a weighted undirected graph. This means it finds a subset of the edges that forms a tree that includes every vertex, where the total weight of all the edges in the tree is minimized.
</p>

<ul>
<li><strong>Edge Sorting:</strong> Kruskal's algorithm sorts all the edges in non-decreasing order of their weight.</li>
<li><strong>Union-Find:</strong> Kruskal's algorithm uses the union-find data structure to detect cycles.</li>
<li><strong>Applications:</strong> Network design, clustering, and image segmentation.</li>
</ul>`,
  codeExample: `# Kruskal's Algorithm Implementation
class UnionFind:
    def __init__(self, size):
        self.parent = list(range(size))
        self.rank = [1] * size

    def find(self, p):
        if self.parent[p] != p:
            self.parent[p] = self.find(self.parent[p])
        return self.parent[p]

    def union(self, p, q):
        rootP = self.find(p)
        rootQ = self.find(q)
        if rootP != rootQ:
            if self.rank[rootP] > self.rank[rootQ]:
                self.parent[rootQ] = rootP
            elif self.rank[rootP] < self.rank[rootQ]:
                self.parent[rootP] = rootQ
            else:
                self.parent[rootQ] = rootP
                self.rank[rootP] += 1

def kruskal(edges, num_vertices):
    uf = UnionFind(num_vertices)
    edges.sort(key=lambda x: x[2])
    mst = []
    for edge in edges:
        u, v, weight = edge
        if uf.find(u) != uf.find(v):
            uf.union(u, v)
            mst.append(edge)
    return mst`,
  exercises: [
    {
      prompt: 'Implement Kruskal\'s algorithm for finding the minimum spanning tree.',
      initialCode: `# Write your solution here
class UnionFind:
    def __init__(self, size):
        self.parent = list(range(size))
        self.rank = [1] * size

    def find(self, p):
        if self.parent[p] != p:
            self.parent[p] = self.find(self.parent[p])
        return self.parent[p]

    def union(self, p, q):
        rootP = self.find(p)
        rootQ = self.find(q)
        if rootP != rootQ:
            if self.rank[rootP] > self.rank[rootQ]:
                self.parent[rootQ] = rootP
            elif self.rank[rootP] < self.rank[rootQ]:
                self.parent[rootP] = rootQ
            else:
                self.parent[rootQ] = rootP
                self.rank[rootP] += 1

def kruskal(edges, num_vertices):
    uf = UnionFind(num_vertices)
    edges.sort(key=lambda x: x[2])
    mst = []
    for edge in edges:
        u, v, weight = edge
        if uf.find(u) != uf.find(v):
            uf.union(u, v)
            mst.append(edge)
    return mst`,
      solution: `class UnionFind:
    def __init__(self, size):
        self.parent = list(range(size))
        self.rank = [1] * size

    def find(self, p):
        if self.parent[p] != p:
            self.parent[p] = self.find(self.parent[p])
        return self.parent[p]

    def union(self, p, q):
        rootP = self.find(p)
        rootQ = self.find(q)
        if rootP != rootQ:
            if self.rank[rootP] > self.rank[rootQ]:
                self.parent[rootQ] = rootP
            elif self.rank[rootP] < self.rank[rootQ]:
                self.parent[rootP] = rootQ
            else:
                self.parent[rootQ] = rootP
                self.rank[rootP] += 1

def kruskal(edges, num_vertices):
    uf = UnionFind(num_vertices)
    edges.sort(key=lambda x: x[2])
    mst = []
    for edge in edges:
        u, v, weight = edge
        if uf.find(u) != uf.find(v):
            uf.union(u, v)
            mst.append(edge)
    return mst`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Implement a function to detect cycles in a graph using the union-find data structure.',
      initialCode: `# Write your solution here
def detect_cycle(edges, num_vertices):
    uf = UnionFind(num_vertices)
    for edge in edges:
        u, v = edge
        if uf.find(u) == uf.find(v):
            return True
        uf.union(u, v)
    return False`,
      solution: `def detect_cycle(edges, num_vertices):
    uf = UnionFind(num_vertices)
    for edge in edges:
        u, v = edge
        if uf.find(u) == uf.find(v):
            return True
        uf.union(u, v)
    return False`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a characteristic of Kruskal\'s algorithm?',
      options: [
        'Uses a stack',
        'Uses a priority queue',
        'Sorts edges by weight',
        'Explores nodes level-by-level',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. Kruskal\'s algorithm does not use a stack.',
        'This is incorrect. Kruskal\'s algorithm does not use a priority queue.',
        'This is correct. Kruskal\'s algorithm sorts all the edges in non-decreasing order of their weight.',
        'This is incorrect. Kruskal\'s algorithm does not explore nodes level-by-level.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is a common application of Kruskal\'s algorithm?',
      options: [
        'Finding the shortest path in an unweighted graph',
        'Finding the longest path in a graph',
        'Network design',
        'Balancing trees',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. Kruskal\'s algorithm is used for weighted graphs, not unweighted graphs.',
        'This is incorrect. Kruskal\'s algorithm is not used to find the longest path in a graph.',
        'This is correct. Network design is a common application of Kruskal\'s algorithm.',
        'This is incorrect. Kruskal\'s algorithm is not used for balancing trees.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const primData: LessonContent = {
  title: "Prim's Algorithm",
  content: `<p>
Prim's algorithm is a greedy algorithm that finds a minimum spanning tree for a weighted undirected graph. This means it finds a subset of the edges that forms a tree that includes every vertex, where the total weight of all the edges in the tree is minimized.
</p>

<ul>
<li><strong>Priority Queue:</strong> Prim's algorithm uses a priority queue to efficiently find the next edge with the smallest weight.</li>
<li><strong>Greedy Approach:</strong> Prim's algorithm always selects the smallest weight edge that connects the tree to a new vertex.</li>
<li><strong>Applications:</strong> Network design, clustering, and image segmentation.</li>
</ul>`,
  codeExample: `# Prim's Algorithm Implementation
import heapq

def prim(graph, start):
    mst = []
    visited = set()
    heap = [(0, start)]
    while heap:
        cost, node = heapq.heappop(heap)
        if node not in visited:
            visited.add(node)
            mst.append((cost, node))
            for neighbor, weight in graph[node]:
                if neighbor not in visited:
                    heapq.heappush(heap, (weight, neighbor))
    return mst`,
  exercises: [
    {
      prompt: 'Implement Prim\'s algorithm for finding the minimum spanning tree.',
      initialCode: `# Write your solution here
import heapq

def prim(graph, start):
    mst = []
    visited = set()
    heap = [(0, start)]
    while heap:
        cost, node = heapq.heappop(heap)
        if node not in visited:
            visited.add(node)
            mst.append((cost, node))
            for neighbor, weight in graph[node]:
                if neighbor not in visited:
                    heapq.heappush(heap, (weight, neighbor))
    return mst`,
      solution: `import heapq

def prim(graph, start):
    mst = []
    visited = set()
    heap = [(0, start)]
    while heap:
        cost, node = heapq.heappop(heap)
        if node not in visited:
            visited.add(node)
            mst.append((cost, node))
            for neighbor, weight in graph[node]:
                if neighbor not in visited:
                    heapq.heappush(heap, (weight, neighbor))
    return mst`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Implement a function to find the minimum spanning tree starting from any node using Prim\'s algorithm.',
      initialCode: `# Write your solution here
import heapq

def prim_any_start(graph):
    start = next(iter(graph))
    mst = []
    visited = set()
    heap = [(0, start)]
    while heap:
        cost, node = heapq.heappop(heap)
        if node not in visited:
            visited.add(node)
            mst.append((cost, node))
            for neighbor, weight in graph[node]:
                if neighbor not in visited:
                    heapq.heappush(heap, (weight, neighbor))
    return mst`,
      solution: `import heapq

def prim_any_start(graph):
    start = next(iter(graph))
    mst = []
    visited = set()
    heap = [(0, start)]
    while heap:
        cost, node = heapq.heappop(heap)
        if node not in visited:
            visited.add(node)
            mst.append((cost, node))
            for neighbor, weight in graph[node]:
                if neighbor not in visited:
                    heapq.heappush(heap, (weight, neighbor))
    return mst`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a characteristic of Prim\'s algorithm?',
      options: [
        'Uses a stack',
        'Uses a priority queue',
        'Sorts edges by weight',
        'Explores nodes level-by-level',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. Prim\'s algorithm does not use a stack.',
        'This is correct. Prim\'s algorithm uses a priority queue to efficiently find the next edge with the smallest weight.',
        'This is incorrect. Prim\'s algorithm does not sort edges by weight.',
        'This is incorrect. Prim\'s algorithm does not explore nodes level-by-level.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is a common application of Prim\'s algorithm?',
      options: [
        'Finding the shortest path in an unweighted graph',
        'Finding the longest path in a graph',
        'Network design',
        'Balancing trees',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. Prim\'s algorithm is used for weighted graphs, not unweighted graphs.',
        'This is incorrect. Prim\'s algorithm is not used to find the longest path in a graph.',
        'This is correct. Network design is a common application of Prim\'s algorithm.',
        'This is incorrect. Prim\'s algorithm is not used for balancing trees.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const unionFindData: LessonContent = {
  title: 'Union-Find Structure',
  content: `<p>
The union-find data structure, also known as the disjoint-set data structure, is a data structure that keeps track of a set of elements partitioned into a number of disjoint (non-overlapping) subsets. It supports two main operations: find and union.
</p>

<ul>
<li><strong>Find:</strong> Determines which subset a particular element is in. This can be used for determining if two elements are in the same subset.</li>
<li><strong>Union:</strong> Joins two subsets into a single subset.</li>
<li><strong>Applications:</strong> Kruskal's algorithm, cycle detection, and dynamic connectivity problems.</li>
</ul>`,
  codeExample: `# Union-Find Implementation
class UnionFind:
    def __init__(self, size):
        self.parent = list(range(size))
        self.rank = [1] * size

    def find(self, p):
        if self.parent[p] != p:
            self.parent[p] = self.find(self.parent[p])
        return self.parent[p]

    def union(self, p, q):
        rootP = self.find(p)
        rootQ = self.find(q)
        if rootP != rootQ:
            if self.rank[rootP] > self.rank[rootQ]:
                self.parent[rootQ] = rootP
            elif self.rank[rootP] < self.rank[rootQ]:
                self.parent[rootP] = rootQ
            else:
                self.parent[rootQ] = rootP
                self.rank[rootP] += 1`,
  exercises: [
    {
      prompt: 'Implement the union-find data structure with path compression and union by rank.',
      initialCode: `# Write your solution here
class UnionFind:
    def __init__(self, size):
        self.parent = list(range(size))
        self.rank = [1] * size

    def find(self, p):
        if self.parent[p] != p:
            self.parent[p] = self.find(self.parent[p])
        return self.parent[p]

    def union(self, p, q):
        rootP = self.find(p)
        rootQ = self.find(q)
        if rootP != rootQ:
            if self.rank[rootP] > self.rank[rootQ]:
                self.parent[rootQ] = rootP
            elif self.rank[rootP] < self.rank[rootQ]:
                self.parent[rootP] = rootQ
            else:
                self.parent[rootQ] = rootP
                self.rank[rootP] += 1`,
      solution: `class UnionFind:
    def __init__(self, size):
        self.parent = list(range(size))
        self.rank = [1] * size

    def find(self, p):
        if self.parent[p] != p:
            self.parent[p] = self.find(self.parent[p])
        return self.parent[p]

    def union(self, p, q):
        rootP = self.find(p)
        rootQ = self.find(q)
        if rootP != rootQ:
            if self.rank[rootP] > self.rank[rootQ]:
                self.parent[rootQ] = rootP
            elif self.rank[rootP] < self.rank[rootQ]:
                self.parent[rootP] = rootQ
            else:
                self.parent[rootQ] = rootP
                self.rank[rootP] += 1`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Implement a function to detect cycles in a graph using the union-find data structure.',
      initialCode: `# Write your solution here
def detect_cycle(edges, num_vertices):
    uf = UnionFind(num_vertices)
    for edge in edges:
        u, v = edge
        if uf.find(u) == uf.find(v):
            return True
        uf.union(u, v)
    return False`,
      solution: `def detect_cycle(edges, num_vertices):
    uf = UnionFind(num_vertices)
    for edge in edges:
        u, v = edge
        if uf.find(u) == uf.find(v):
            return True
        uf.union(u, v)
    return False`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a characteristic of the union-find data structure?',
      options: [
        'Uses a stack',
        'Uses a priority queue',
        'Supports find and union operations',
        'Explores nodes level-by-level',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. The union-find data structure does not use a stack.',
        'This is incorrect. The union-find data structure does not use a priority queue.',
        'This is correct. The union-find data structure supports find and union operations.',
        'This is incorrect. The union-find data structure does not explore nodes level-by-level.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is a common application of the union-find data structure?',
      options: [
        'Finding the shortest path in an unweighted graph',
        'Finding the longest path in a graph',
        'Cycle detection',
        'Balancing trees',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. The union-find data structure is not used to find the shortest path in an unweighted graph.',
        'This is incorrect. The union-find data structure is not used to find the longest path in a graph.',
        'This is correct. Cycle detection is a common application of the union-find data structure.',
        'This is incorrect. The union-find data structure is not used for balancing trees.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const cycleDetectionData: LessonContent = {
  title: 'Cycle Detection',
  content: `<p>
Cycle detection is the process of finding cycles in a graph. A cycle in a graph is a non-empty trail in which the first and last vertices are the same. Cycle detection is important in various applications, such as deadlock detection in operating systems and finding feedback loops in business processes.
</p>

<ul>
<li><strong>Directed Graphs:</strong> Cycle detection in directed graphs involves checking for cycles in a directed graph.</li>
<li><strong>Undirected Graphs:</strong> Cycle detection in undirected graphs involves checking for cycles in an undirected graph.</li>
<li><strong>Applications:</strong> Deadlock detection, feedback loops, and dependency resolution.</li>
</ul>`,
  codeExample: `# Cycle Detection in Directed Graph
def has_cycle_directed(graph):
    visited = set()
    rec_stack = set()
    def dfs(node):
        visited.add(node)
        rec_stack.add(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                if dfs(neighbor):
                    return True
            elif neighbor in rec_stack:
                return True
        rec_stack.remove(node)
        return False
    for node in graph:
        if node not in visited:
            if dfs(node):
                return True
    return False

# Cycle Detection in Undirected Graph
def has_cycle_undirected(graph):
    visited = set()
    def dfs(node, parent):
        visited.add(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                if dfs(neighbor, node):
                    return True
            elif neighbor != parent:
                return True
        return False
    for node in graph:
        if node not in visited:
            if dfs(node, None):
                return True
    return False`,
  exercises: [
    {
      prompt: 'Implement a function to detect cycles in a directed graph.',
      initialCode: `# Write your solution here
def has_cycle_directed(graph):
    visited = set()
    rec_stack = set()
    def dfs(node):
        visited.add(node)
        rec_stack.add(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                if dfs(neighbor):
                    return True
            elif neighbor in rec_stack:
                return True
        rec_stack.remove(node)
        return False
    for node in graph:
        if node not in visited:
            if dfs(node):
                return True
    return False`,
      solution: `def has_cycle_directed(graph):
    visited = set()
    rec_stack = set()
    def dfs(node):
        visited.add(node)
        rec_stack.add(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                if dfs(neighbor):
                    return True
            elif neighbor in rec_stack:
                return True
        rec_stack.remove(node)
        return False
    for node in graph:
        if node not in visited:
            if dfs(node):
                return True
    return False`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement a function to detect cycles in an undirected graph.',
      initialCode: `# Write your solution here
def has_cycle_undirected(graph):
    visited = set()
    def dfs(node, parent):
        visited.add(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                if dfs(neighbor, node):
                    return True
            elif neighbor != parent:
                return True
        return False
    for node in graph:
        if node not in visited:
            if dfs(node, None):
                return True
    return False`,
      solution: `def has_cycle_undirected(graph):
    visited = set()
    def dfs(node, parent):
        visited.add(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                if dfs(neighbor, node):
                    return True
            elif neighbor != parent:
                return True
        return False
    for node in graph:
        if node not in visited:
            if dfs(node, None):
                return True
    return False`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a characteristic of cycle detection in directed graphs?',
      options: [
        'Uses a stack',
        'Uses a priority queue',
        'Checks for cycles in a directed graph',
        'Explores nodes level-by-level',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. Cycle detection in directed graphs does not use a stack.',
        'This is incorrect. Cycle detection in directed graphs does not use a priority queue.',
        'This is correct. Cycle detection in directed graphs checks for cycles in a directed graph.',
        'This is incorrect. Cycle detection in directed graphs does not explore nodes level-by-level.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is a common application of cycle detection?',
      options: [
        'Finding the shortest path in an unweighted graph',
        'Finding the longest path in a graph',
        'Deadlock detection',
        'Balancing trees',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. Cycle detection is not used to find the shortest path in an unweighted graph.',
        'This is incorrect. Cycle detection is not used to find the longest path in a graph.',
        'This is correct. Deadlock detection is a common application of cycle detection.',
        'This is incorrect. Cycle detection is not used for balancing trees.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const topologicalSortData: LessonContent = {
  title: 'Topological Sort',
  content: `<p>
Topological sort is an ordering of vertices in a directed acyclic graph (DAG) such that for every directed edge uv, vertex u comes before vertex v in the ordering. Topological sorting for a graph is not possible if the graph is not a DAG.
</p>

<ul>
<li><strong>Directed Acyclic Graph (DAG):</strong> Topological sort is applicable only to DAGs.</li>
<li><strong>Kahn's Algorithm:</strong> A common algorithm for topological sorting using BFS.</li>
<li><strong>Applications:</strong> Dependency resolution, task scheduling, and course prerequisites.</li>
</ul>`,
  codeExample: `# Topological Sort Implementation
from collections import deque

def topological_sort(graph):
    in_degree = {vertex: 0 for vertex in graph}
    for vertex in graph:
        for neighbor in graph[vertex]:
            in_degree[neighbor] += 1
    queue = deque([vertex for vertex in in_degree if in_degree[vertex] == 0])
    topo_order = []
    while queue:
        vertex = queue.popleft()
        topo_order.append(vertex)
        for neighbor in graph[vertex]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)
    return topo_order if len(topo_order) == len(graph) else []`,
  exercises: [
    {
      prompt: 'Implement the topological sort algorithm for a directed acyclic graph (DAG).',
      initialCode: `# Write your solution here
from collections import deque

def topological_sort(graph):
    in_degree = {vertex: 0 for vertex in graph}
    for vertex in graph:
        for neighbor in graph[vertex]:
            in_degree[neighbor] += 1
    queue = deque([vertex for vertex in in_degree if in_degree[vertex] == 0])
    topo_order = []
    while queue:
        vertex = queue.popleft()
        topo_order.append(vertex)
        for neighbor in graph[vertex]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)
    return topo_order if len(topo_order) == len(graph) else []`,
      solution: `from collections import deque

def topological_sort(graph):
    in_degree = {vertex: 0 for vertex in graph}
    for vertex in graph:
        for neighbor in graph[vertex]:
            in_degree[neighbor] += 1
    queue = deque([vertex for vertex in in_degree if in_degree[vertex] == 0])
    topo_order = []
    while queue:
        vertex = queue.popleft()
        topo_order.append(vertex)
        for neighbor in graph[vertex]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)
    return topo_order if len(topo_order) == len(graph) else []`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement a function to check if a graph is a directed acyclic graph (DAG) using topological sort.',
      initialCode: `# Write your solution here
def is_dag(graph):
    in_degree = {vertex: 0 for vertex in graph}
    for vertex in graph:
        for neighbor in graph[vertex]:
            in_degree[neighbor] += 1
    queue = deque([vertex for vertex in in_degree if in_degree[vertex] == 0])
    topo_order = []
    while queue:
        vertex = queue.popleft()
        topo_order.append(vertex)
        for neighbor in graph[vertex]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)
    return len(topo_order) == len(graph)`,
      solution: `def is_dag(graph):
    in_degree = {vertex: 0 for vertex in graph}
    for vertex in graph:
        for neighbor in graph[vertex]:
            in_degree[neighbor] += 1
    queue = deque([vertex for vertex in in_degree if in_degree[vertex] == 0])
    topo_order = []
    while queue:
        vertex = queue.popleft()
        topo_order.append(vertex)
        for neighbor in graph[vertex]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)
    return len(topo_order) == len(graph)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a characteristic of topological sort?',
      options: [
        'Applicable to undirected graphs',
        'Applicable to directed acyclic graphs (DAGs)',
        'Uses a stack',
        'Explores nodes level-by-level',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. Topological sort is not applicable to undirected graphs.',
        'This is correct. Topological sort is applicable to directed acyclic graphs (DAGs).',
        'This is incorrect. Topological sort does not use a stack.',
        'This is incorrect. Topological sort does not explore nodes level-by-level.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is a common application of topological sort?',
      options: [
        'Finding the shortest path in an unweighted graph',
        'Finding the longest path in a graph',
        'Dependency resolution',
        'Balancing trees',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. Topological sort is not used to find the shortest path in an unweighted graph.',
        'This is incorrect. Topological sort is not used to find the longest path in a graph.',
        'This is correct. Dependency resolution is a common application of topological sort.',
        'This is incorrect. Topological sort is not used for balancing trees.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const stronglyConnectedData: LessonContent = {
  title: 'Strongly Connected Components',
  content: `<p>
Strongly connected components (SCCs) are a subset of vertices in a directed graph such that every vertex in the subset is reachable from every other vertex in the subset. Identifying SCCs is important for understanding the structure of a directed graph.
</p>

<ul>
<li><strong>Kosaraju's Algorithm:</strong> A two-pass algorithm that finds SCCs by performing two DFS traversals.</li>
<li><strong>Tarjan's Algorithm:</strong> A one-pass algorithm that finds SCCs using a single DFS traversal.</li>
<li><strong>Applications:</strong> Social networks, dependency resolution, and circuit design.</li>
</ul>`,
  codeExample: `# Kosaraju's Algorithm Implementation
def kosaraju(graph):
    def dfs(node, visited, stack):
        visited.add(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                dfs(neighbor, visited, stack)
        stack.append(node)

    def reverse_graph(graph):
        rev_graph = {vertex: [] for vertex in graph}
        for vertex in graph:
            for neighbor in graph[vertex]:
                rev_graph[neighbor].append(vertex)
        return rev_graph

    def dfs_scc(node, visited, scc):
        visited.add(node)
        scc.append(node)
        for neighbor in rev_graph[node]:
            if neighbor not in visited:
                dfs_scc(neighbor, visited, scc)

    stack = []
    visited = set()
    for vertex in graph:
        if vertex not in visited:
            dfs(vertex, visited, stack)

    rev_graph = reverse_graph(graph)
    visited.clear()
    sccs = []
    while stack:
        vertex = stack.pop()
        if vertex not in visited:
            scc = []
            dfs_scc(vertex, visited, scc)
            sccs.append(scc)
    return sccs`,
  exercises: [
    {
      prompt: 'Implement Kosaraju\'s algorithm for finding strongly connected components (SCCs) in a directed graph.',
      initialCode: `# Write your solution here
def kosaraju(graph):
    def dfs(node, visited, stack):
        visited.add(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                dfs(neighbor, visited, stack)
        stack.append(node)

    def reverse_graph(graph):
        rev_graph = {vertex: [] for vertex in graph}
        for vertex in graph:
            for neighbor in graph[vertex]:
                rev_graph[neighbor].append(vertex)
        return rev_graph

    def dfs_scc(node, visited, scc):
        visited.add(node)
        scc.append(node)
        for neighbor in rev_graph[node]:
            if neighbor not in visited:
                dfs_scc(neighbor, visited, scc)

    stack = []
    visited = set()
    for vertex in graph:
        if vertex not in visited:
            dfs(vertex, visited, stack)

    rev_graph = reverse_graph(graph)
    visited.clear()
    sccs = []
    while stack:
        vertex = stack.pop()
        if vertex not in visited:
            scc = []
            dfs_scc(vertex, visited, scc)
            sccs.append(scc)
    return sccs`,
      solution: `def kosaraju(graph):
    def dfs(node, visited, stack):
        visited.add(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                dfs(neighbor, visited, stack)
        stack.append(node)

    def reverse_graph(graph):
        rev_graph = {vertex: [] for vertex in graph}
        for vertex in graph:
            for neighbor in graph[vertex]:
                rev_graph[neighbor].append(vertex)
        return rev_graph

    def dfs_scc(node, visited, scc):
        visited.add(node)
        scc.append(node)
        for neighbor in rev_graph[node]:
            if neighbor not in visited:
                dfs_scc(neighbor, visited, scc)

    stack = []
    visited = set()
    for vertex in graph:
        if vertex not in visited:
            dfs(vertex, visited, stack)

    rev_graph = reverse_graph(graph)
    visited.clear()
    sccs = []
    while stack:
        vertex = stack.pop()
        if vertex not in visited:
            scc = []
            dfs_scc(vertex, visited, scc)
            sccs.append(scc)
    return sccs`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Implement Tarjan\'s algorithm for finding strongly connected components (SCCs) in a directed graph.',
      initialCode: `# Write your solution here
def tarjan(graph):
    index = 0
    stack = []
    indices = {}
    low_links = {}
    on_stack = set()
    sccs = []

    def strongconnect(node):
        nonlocal index
        indices[node] = index
        low_links[node] = index
        index += 1
        stack.append(node)
        on_stack.add(node)

        for neighbor in graph[node]:
            if neighbor not in indices:
                strongconnect(neighbor)
                low_links[node] = min(low_links[node], low_links[neighbor])
            elif neighbor in on_stack:
                low_links[node] = min(low_links[node], indices[neighbor])

        if low_links[node] == indices[node]:
            scc = []
            while True:
                v = stack.pop()
                on_stack.remove(v)
                scc.append(v)
                if v == node:
                    break
            sccs.append(scc)

    for vertex in graph:
        if vertex not in indices:
            strongconnect(vertex)

    return sccs`,
      solution: `def tarjan(graph):
    index = 0
    stack = []
    indices = {}
    low_links = {}
    on_stack = set()
    sccs = []

    def strongconnect(node):
        nonlocal index
        indices[node] = index
        low_links[node] = index
        index += 1
        stack.append(node)
        on_stack.add(node)

        for neighbor in graph[node]:
            if neighbor not in indices:
                strongconnect(neighbor)
                low_links[node] = min(low_links[node], low_links[neighbor])
            elif neighbor in on_stack:
                low_links[node] = min(low_links[node], indices[neighbor])

        if low_links[node] == indices[node]:
            scc = []
            while True:
                v = stack.pop()
                on_stack.remove(v)
                scc.append(v)
                if v == node:
                    break
            sccs.append(scc)

    for vertex in graph:
        if vertex not in indices:
            strongconnect(vertex)

    return sccs`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a characteristic of strongly connected components (SCCs)?',
      options: [
        'Every vertex in the subset is reachable from every other vertex in the subset',
        'Applicable to undirected graphs',
        'Uses a stack',
        'Explores nodes level-by-level',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. Every vertex in the subset is reachable from every other vertex in the subset.',
        'This is incorrect. SCCs are applicable to directed graphs, not undirected graphs.',
        'This is incorrect. SCCs do not use a stack.',
        'This is incorrect. SCCs do not explore nodes level-by-level.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is a common application of strongly connected components (SCCs)?',
      options: [
        'Finding the shortest path in an unweighted graph',
        'Finding the longest path in a graph',
        'Social networks',
        'Balancing trees',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. SCCs are not used to find the shortest path in an unweighted graph.',
        'This is incorrect. SCCs are not used to find the longest path in a graph.',
        'This is correct. Social networks is a common application of SCCs.',
        'This is incorrect. SCCs are not used for balancing trees.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const maxFlowData: LessonContent = {
  title: 'Maximum Flow',
  content: `<p>
Maximum flow is a problem in graph theory where the goal is to find the maximum amount of flow that can be sent from a source node to a sink node in a directed graph with capacities on the edges.
</p>

<ul>
<li><strong>Ford-Fulkerson Algorithm:</strong> A greedy algorithm that iteratively finds augmenting paths and increases the flow along these paths.</li>
<li><strong>Edmonds-Karp Algorithm:</strong> A specific implementation of the Ford-Fulkerson algorithm that uses BFS to find the shortest augmenting path.</li>
<li><strong>Applications:</strong> Network routing, resource allocation, and matching problems.</li>
</ul>`,
  codeExample: `# Ford-Fulkerson Algorithm Implementation
def ford_fulkerson(graph, source, sink):
    def bfs(graph, source, sink, parent):
        visited = set()
        queue = [source]
        visited.add(source)
        while queue:
            u = queue.pop(0)
            for v, capacity in graph[u].items():
                if v not in visited and capacity > 0:
                    queue.append(v)
                    visited.add(v)
                    parent[v] = u
                    if v == sink:
                        return True
        return False

    max_flow = 0
    parent = {}
    while bfs(graph, source, sink, parent):
        path_flow = float('inf')
        s = sink
        while s != source:
            path_flow = min(path_flow, graph[parent[s]][s])
            s = parent[s]
        max_flow += path_flow
        v = sink
        while v != source:
            u = parent[v]
            graph[u][v] -= path_flow
            if u not in graph[v]:
                graph[v][u] = 0
            graph[v][u] += path_flow
            v = parent[v]
    return max_flow`,
  exercises: [
    {
      prompt: 'Implement the Ford-Fulkerson algorithm for finding the maximum flow in a network.',
      initialCode: `# Write your solution here
def ford_fulkerson(graph, source, sink):
    def bfs(graph, source, sink, parent):
        visited = set()
        queue = [source]
        visited.add(source)
        while queue:
            u = queue.pop(0)
            for v, capacity in graph[u].items():
                if v not in visited and capacity > 0:
                    queue.append(v)
                    visited.add(v)
                    parent[v] = u
                    if v == sink:
                        return True
        return False

    max_flow = 0
    parent = {}
    while bfs(graph, source, sink, parent):
        path_flow = float('inf')
        s = sink
        while s != source:
            path_flow = min(path_flow, graph[parent[s]][s])
            s = parent[s]
        max_flow += path_flow
        v = sink
        while v != source:
            u = parent[v]
            graph[u][v] -= path_flow
            if u not in graph[v]:
                graph[v][u] = 0
            graph[v][u] += path_flow
            v = parent[v]
    return max_flow`,
      solution: `def ford_fulkerson(graph, source, sink):
    def bfs(graph, source, sink, parent):
        visited = set()
        queue = [source]
        visited.add(source)
        while queue:
            u = queue.pop(0)
            for v, capacity in graph[u].items():
                if v not in visited and capacity > 0:
                    queue.append(v)
                    visited.add(v)
                    parent[v] = u
                    if v == sink:
                        return True
        return False

    max_flow = 0
    parent = {}
    while bfs(graph, source, sink, parent):
        path_flow = float('inf')
        s = sink
        while s != source:
            path_flow = min(path_flow, graph[parent[s]][s])
            s = parent[s]
        max_flow += path_flow
        v = sink
        while v != source:
            u = parent[v]
            graph[u][v] -= path_flow
            if u not in graph[v]:
                graph[v][u] = 0
            graph[v][u] += path_flow
            v = parent[v]
    return max_flow`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Implement the Edmonds-Karp algorithm for finding the maximum flow in a network.',
      initialCode: `# Write your solution here
def edmonds_karp(graph, source, sink):
    def bfs(graph, source, sink, parent):
        visited = set()
        queue = [source]
        visited.add(source)
        while queue:
            u = queue.pop(0)
            for v, capacity in graph[u].items():
                if v not in visited and capacity > 0:
                    queue.append(v)
                    visited.add(v)
                    parent[v] = u
                    if v == sink:
                        return True
        return False

    max_flow = 0
    parent = {}
    while bfs(graph, source, sink, parent):
        path_flow = float('inf')
        s = sink
        while s != source:
            path_flow = min(path_flow, graph[parent[s]][s])
            s = parent[s]
        max_flow += path_flow
        v = sink
        while v != source:
            u = parent[v]
            graph[u][v] -= path_flow
            if u not in graph[v]:
                graph[v][u] = 0
            graph[v][u] += path_flow
            v = parent[v]
    return max_flow`,
      solution: `def edmonds_karp(graph, source, sink):
    def bfs(graph, source, sink, parent):
        visited = set()
        queue = [source]
        visited.add(source)
        while queue:
            u = queue.pop(0)
            for v, capacity in graph[u].items():
                if v not in visited and capacity > 0:
                    queue.append(v)
                    visited.add(v)
                    parent[v] = u
                    if v == sink:
                        return True
        return False

    max_flow = 0
    parent = {}
    while bfs(graph, source, sink, parent):
        path_flow = float('inf')
        s = sink
        while s != source:
            path_flow = min(path_flow, graph[parent[s]][s])
            s = parent[s]
        max_flow += path_flow
        v = sink
        while v != source:
            u = parent[v]
            graph[u][v] -= path_flow
            if u not in graph[v]:
                graph[v][u] = 0
            graph[v][u] += path_flow
            v = parent[v]
    return max_flow`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a characteristic of the Ford-Fulkerson algorithm?',
      options: [
        'Uses a stack',
        'Uses a priority queue',
        'Iteratively finds augmenting paths',
        'Explores nodes level-by-level',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. The Ford-Fulkerson algorithm does not use a stack.',
        'This is incorrect. The Ford-Fulkerson algorithm does not use a priority queue.',
        'This is correct. The Ford-Fulkerson algorithm iteratively finds augmenting paths.',
        'This is incorrect. The Ford-Fulkerson algorithm does not explore nodes level-by-level.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is a common application of the maximum flow problem?',
      options: [
        'Finding the shortest path in an unweighted graph',
        'Finding the longest path in a graph',
        'Network routing',
        'Balancing trees',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. The maximum flow problem is not used to find the shortest path in an unweighted graph.',
        'This is incorrect. The maximum flow problem is not used to find the longest path in a graph.',
        'This is correct. Network routing is a common application of the maximum flow problem.',
        'This is incorrect. The maximum flow problem is not used for balancing trees.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const minCutData: LessonContent = {
  title: 'Minimum Cut',
  content: `<p>
The minimum cut problem is a problem in graph theory where the goal is to find the minimum cut, which is a partition of the vertices of a graph into two subsets such that the sum of the weights of the edges between the two subsets is minimized.
</p>

<ul>
<li><strong>Min-cut Max-flow Theorem:</strong> The minimum cut is equal to the maximum flow in a network.</li>
<li><strong>Applications:</strong> Network reliability, image segmentation, and clustering.</li>
</ul>`,
  codeExample: `# Minimum Cut Implementation
def min_cut(graph, source, sink):
    def bfs(graph, source, sink, parent):
        visited = set()
        queue = [source]
        visited.add(source)
        while queue:
            u = queue.pop(0)
            for v, capacity in graph[u].items():
                if v not in visited and capacity > 0:
                    queue.append(v)
                    visited.add(v)
                    parent[v] = u
                    if v == sink:
                        return True
        return False

    max_flow = 0
    parent = {}
    while bfs(graph, source, sink, parent):
        path_flow = float('inf')
        s = sink
        while s != source:
            path_flow = min(path_flow, graph[parent[s]][s])
            s = parent[s]
        max_flow += path_flow
        v = sink
        while v != source:
            u = parent[v]
            graph[u][v] -= path_flow
            if u not in graph[v]:
                graph[v][u] = 0
            graph[v][u] += path_flow
            v = parent[v]

    def dfs(graph, source, visited):
        stack = [source]
        while stack:
            u = stack.pop()
            if u not in visited:
                visited.add(u)
                for v, capacity in graph[u].items():
                    if capacity > 0 and v not in visited:
                        stack.append(v)

    visited = set()
    dfs(graph, source, visited)
    min_cut_edges = []
    for u in visited:
        for v, capacity in graph[u].items():
            if v not in visited and capacity == 0:
                min_cut_edges.append((u, v))
    return min_cut_edges`,
  exercises: [
    {
      prompt: 'Implement the minimum cut algorithm using the max-flow min-cut theorem.',
      initialCode: `# Write your solution here
def min_cut(graph, source, sink):
    def bfs(graph, source, sink, parent):
        visited = set()
        queue = [source]
        visited.add(source)
        while queue:
            u = queue.pop(0)
            for v, capacity in graph[u].items():
                if v not in visited and capacity > 0:
                    queue.append(v)
                    visited.add(v)
                    parent[v] = u
                    if v == sink:
                        return True
        return False

    max_flow = 0
    parent = {}
    while bfs(graph, source, sink, parent):
        path_flow = float('inf')
        s = sink
        while s != source:
            path_flow = min(path_flow, graph[parent[s]][s])
            s = parent[s]
        max_flow += path_flow
        v = sink
        while v != source:
            u = parent[v]
            graph[u][v] -= path_flow
            if u not in graph[v]:
                graph[v][u] = 0
            graph[v][u] += path_flow
            v = parent[v]

    def dfs(graph, source, visited):
        stack = [source]
        while stack:
            u = stack.pop()
            if u not in visited:
                visited.add(u)
                for v, capacity in graph[u].items():
                    if capacity > 0 and v not in visited:
                        stack.append(v)

    visited = set()
    dfs(graph, source, visited)
    min_cut_edges = []
    for u in visited:
        for v, capacity in graph[u].items():
            if v not in visited and capacity == 0:
                min_cut_edges.append((u, v))
    return min_cut_edges`,
      solution: `def min_cut(graph, source, sink):
    def bfs(graph, source, sink, parent):
        visited = set()
        queue = [source]
        visited.add(source)
        while queue:
            u = queue.pop(0)
            for v, capacity in graph[u].items():
                if v not in visited and capacity > 0:
                    queue.append(v)
                    visited.add(v)
                    parent[v] = u
                    if v == sink:
                        return True
        return False

    max_flow = 0
    parent = {}
    while bfs(graph, source, sink, parent):
        path_flow = float('inf')
        s = sink
        while s != source:
            path_flow = min(path_flow, graph[parent[s]][s])
            s = parent[s]
        max_flow += path_flow
        v = sink
        while v != source:
            u = parent[v]
            graph[u][v] -= path_flow
            if u not in graph[v]:
                graph[v][u] = 0
            graph[v][u] += path_flow
            v = parent[v]

    def dfs(graph, source, visited):
        stack = [source]
        while stack:
            u = stack.pop()
            if u not in visited:
                visited.add(u)
                for v, capacity in graph[u].items():
                    if capacity > 0 and v not in visited:
                        stack.append(v)

    visited = set()
    dfs(graph, source, visited)
    min_cut_edges = []
    for u in visited:
        for v, capacity in graph[u].items():
            if v not in visited and capacity == 0:
                min_cut_edges.append((u, v))
    return min_cut_edges`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Implement a function to find the minimum cut in a network using the max-flow min-cut theorem.',
      initialCode: `# Write your solution here
def min_cut(graph, source, sink):
    def bfs(graph, source, sink, parent):
        visited = set()
        queue = [source]
        visited.add(source)
        while queue:
            u = queue.pop(0)
            for v, capacity in graph[u].items():
                if v not in visited and capacity > 0:
                    queue.append(v)
                    visited.add(v)
                    parent[v] = u
                    if v == sink:
                        return True
        return False

    max_flow = 0
    parent = {}
    while bfs(graph, source, sink, parent):
        path_flow = float('inf')
        s = sink
        while s != source:
            path_flow = min(path_flow, graph[parent[s]][s])
            s = parent[s]
        max_flow += path_flow
        v = sink
        while v != source:
            u = parent[v]
            graph[u][v] -= path_flow
            if u not in graph[v]:
                graph[v][u] = 0
            graph[v][u] += path_flow
            v = parent[v]

    def dfs(graph, source, visited):
        stack = [source]
        while stack:
            u = stack.pop()
            if u not in visited:
                visited.add(u)
                for v, capacity in graph[u].items():
                    if capacity > 0 and v not in visited:
                        stack.append(v)

    visited = set()
    dfs(graph, source, visited)
    min_cut_edges = []
    for u in visited:
        for v, capacity in graph[u].items():
            if v not in visited and capacity == 0:
                min_cut_edges.append((u, v))
    return min_cut_edges`,
      solution: `def min_cut(graph, source, sink):
    def bfs(graph, source, sink, parent):
        visited = set()
        queue = [source]
        visited.add(source)
        while queue:
            u = queue.pop(0)
            for v, capacity in graph[u].items():
                if v not in visited and capacity > 0:
                    queue.append(v)
                    visited.add(v)
                    parent[v] = u
                    if v == sink:
                        return True
        return False

    max_flow = 0
    parent = {}
    while bfs(graph, source, sink, parent):
        path_flow = float('inf')
        s = sink
        while s != source:
            path_flow = min(path_flow, graph[parent[s]][s])
            s = parent[s]
        max_flow += path_flow
        v = sink
        while v != source:
            u = parent[v]
            graph[u][v] -= path_flow
            if u not in graph[v]:
                graph[v][u] = 0
            graph[v][u] += path_flow
            v = parent[v]

    def dfs(graph, source, visited):
        stack = [source]
        while stack:
            u = stack.pop()
            if u not in visited:
                visited.add(u)
                for v, capacity in graph[u].items():
                    if capacity > 0 and v not in visited:
                        stack.append(v)

    visited = set()
    dfs(graph, source, visited)
    min_cut_edges = []
    for u in visited:
        for v, capacity in graph[u].items():
            if v not in visited and capacity == 0:
                min_cut_edges.append((u, v))
    return min_cut_edges`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a characteristic of the minimum cut problem?',
      options: [
        'Finds the maximum flow in a network',
        'Finds the minimum cut in a network',
        'Uses a stack',
        'Explores nodes level-by-level',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. The minimum cut problem finds the minimum cut, not the maximum flow.',
        'This is correct. The minimum cut problem finds the minimum cut in a network.',
        'This is incorrect. The minimum cut problem does not use a stack.',
        'This is incorrect. The minimum cut problem does not explore nodes level-by-level.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is a common application of the minimum cut problem?',
      options: [
        'Finding the shortest path in an unweighted graph',
        'Finding the longest path in a graph',
        'Network reliability',
        'Balancing trees',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. The minimum cut problem is not used to find the shortest path in an unweighted graph.',
        'This is incorrect. The minimum cut problem is not used to find the longest path in a graph.',
        'This is correct. Network reliability is a common application of the minimum cut problem.',
        'This is incorrect. The minimum cut problem is not used for balancing trees.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const bipartiteMatchingData: LessonContent = {
  title: 'Bipartite Matching',
  content: `<p>
Bipartite matching is a problem in graph theory where the goal is to find a matching in a bipartite graph, which is a set of edges such that no two edges share a common vertex.
</p>

<ul>
<li><strong>Maximum Bipartite Matching:</strong> Finding the maximum number of edges in a bipartite matching.</li>
<li><strong>Applications:</strong> Job assignment, resource allocation, and matching problems.</li>
</ul>`,
  codeExample: `# Maximum Bipartite Matching Implementation
def max_bipartite_matching(graph, left_nodes, right_nodes):
    def bpm(u, matchR, seen):
        for v in right_nodes:
            if graph[u][v] and not seen[v]:
                seen[v] = True
                if matchR[v] == -1 or bpm(matchR[v], matchR, seen):
                    matchR[v] = u
                    return True
        return False

    matchR = {v: -1 for v in right_nodes}
    result = 0
    for u in left_nodes:
        seen = {v: False for v in right_nodes}
        if bpm(u, matchR, seen):
            result += 1
    return result`,
  exercises: [
    {
      prompt: 'Implement the maximum bipartite matching algorithm.',
      initialCode: `# Write your solution here
def max_bipartite_matching(graph, left_nodes, right_nodes):
    def bpm(u, matchR, seen):
        for v in right_nodes:
            if graph[u][v] and not seen[v]:
                seen[v] = True
                if matchR[v] == -1 or bpm(matchR[v], matchR, seen):
                    matchR[v] = u
                    return True
        return False

    matchR = {v: -1 for v in right_nodes}
    result = 0
    for u in left_nodes:
        seen = {v: False for v in right_nodes}
        if bpm(u, matchR, seen):
            result += 1
    return result`,
      solution: `def max_bipartite_matching(graph, left_nodes, right_nodes):
    def bpm(u, matchR, seen):
        for v in right_nodes:
            if graph[u][v] and not seen[v]:
                seen[v] = True
                if matchR[v] == -1 or bpm(matchR[v], matchR, seen):
                    matchR[v] = u
                    return True
        return False

    matchR = {v: -1 for v in right_nodes}
    result = 0
    for u in left_nodes:
        seen = {v: False for v in right_nodes}
        if bpm(u, matchR, seen):
            result += 1
    return result`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Implement a function to find the maximum bipartite matching in a bipartite graph.',
      initialCode: `# Write your solution here
def max_bipartite_matching(graph, left_nodes, right_nodes):
    def bpm(u, matchR, seen):
        for v in right_nodes:
            if graph[u][v] and not seen[v]:
                seen[v] = True
                if matchR[v] == -1 or bpm(matchR[v], matchR, seen):
                    matchR[v] = u
                    return True
        return False

    matchR = {v: -1 for v in right_nodes}
    result = 0
    for u in left_nodes:
        seen = {v: False for v in right_nodes}
        if bpm(u, matchR, seen):
            result += 1
    return result`,
      solution: `def max_bipartite_matching(graph, left_nodes, right_nodes):
    def bpm(u, matchR, seen):
        for v in right_nodes:
            if graph[u][v] and not seen[v]:
                seen[v] = True
                if matchR[v] == -1 or bpm(matchR[v], matchR, seen):
                    matchR[v] = u
                    return True
        return False

    matchR = {v: -1 for v in right_nodes}
    result = 0
    for u in left_nodes:
        seen = {v: False for v in right_nodes}
        if bpm(u, matchR, seen):
            result += 1
    return result`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a characteristic of bipartite matching?',
      options: [
        'Finds the maximum flow in a network',
        'Finds the maximum matching in a bipartite graph',
        'Uses a stack',
        'Explores nodes level-by-level',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. Bipartite matching finds the maximum matching in a bipartite graph, not the maximum flow in a network.',
        'This is correct. Bipartite matching finds the maximum matching in a bipartite graph.',
        'This is incorrect. Bipartite matching does not use a stack.',
        'This is incorrect. Bipartite matching does not explore nodes level-by-level.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is a common application of bipartite matching?',
      options: [
        'Finding the shortest path in an unweighted graph',
        'Finding the longest path in a graph',
        'Job assignment',
        'Balancing trees',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. Bipartite matching is not used to find the shortest path in an unweighted graph.',
        'This is incorrect. Bipartite matching is not used to find the longest path in a graph.',
        'This is correct. Job assignment is a common application of bipartite matching.',
        'This is incorrect. Bipartite matching is not used for balancing trees.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const articulationBridgesData: LessonContent = {
  title: 'Articulation Points and Bridges',
  content: `<p>
Articulation points and bridges are critical components in graph theory, particularly in identifying vulnerabilities in network structures.
</p>

<ul>
<li><strong>Articulation Points:</strong> Vertices whose removal increases the number of connected components in a graph.</li>
<li><strong>Bridges:</strong> Edges whose removal increases the number of connected components in a graph.</li>
</ul>

<p>
These concepts are crucial in network reliability and vulnerability analysis.
</p>`,
  codeExample: `# Finding Articulation Points and Bridges in a graph
def find_articulation_points_and_bridges(graph):
    n = len(graph)
    low = [0] * n
    disc = [0] * n
    time = [0]
    ap = [False] * n
    bridges = []

    def dfs(u, parent):
        children = 0
        disc[u] = time[0]
        low[u] = time[0]
        time[0] += 1

        for v in graph[u]:
            if disc[v] == 0:  # If v is not visited yet, then make it a child of u
                children += 1
                dfs(v, u)
                low[u] = min(low[u], low[v])

                if parent != -1 and low[v] >= disc[u]:
                    ap[u] = True
                if low[v] > disc[u]:
                    bridges.append((u, v))
            elif v != parent:  # Update low value of u for parent function calls
                low[u] = min(low[u], disc[v])

        if parent == -1 and children > 1:
            ap[u] = True

    for i in range(n):
        if disc[i] == 0:
            dfs(i, -1)

    articulation_points = [i for i, x in enumerate(ap) if x]
    return articulation_points, bridges

# Example usage
graph = {
    0: [1, 2],
    1: [0, 2],
    2: [0, 1, 3],
    3: [2]
}
articulation_points, bridges = find_articulation_points_and_bridges(graph)
print("Articulation Points:", articulation_points)
print("Bridges:", bridges)`,
  exercises: [
    {
      prompt: 'Identify the articulation points and bridges in the given graph.',
      initialCode: `# Write your solution here
graph = {
    0: [1, 2],
    1: [0, 2],
    2: [0, 1, 3],
    3: [2]
}
articulation_points, bridges = find_articulation_points_and_bridges(graph)
print("Articulation Points:", articulation_points)
print("Bridges:", bridges)`,
      solution: `def find_articulation_points_and_bridges(graph):
    n = len(graph)
    low = [0] * n
    disc = [0] * n
    time = [0]
    ap = [False] * n
    bridges = []

    def dfs(u, parent):
        children = 0
        disc[u] = time[0]
        low[u] = time[0]
        time[0] += 1

        for v in graph[u]:
            if disc[v] == 0:
                children += 1
                dfs(v, u)
                low[u] = min(low[u], low[v])

                if parent != -1 and low[v] >= disc[u]:
                    ap[u] = True
                if low[v] > disc[u]:
                    bridges.append((u, v))
            elif v != parent:
                low[u] = min(low[u], disc[v])

        if parent == -1 and children > 1:
            ap[u] = True

    for i in range(n):
        if disc[i] == 0:
            dfs(i, -1)

    articulation_points = [i for i, x in enumerate(ap) if x]
    return articulation_points, bridges

graph = {
    0: [1, 2],
    1: [0, 2],
    2: [0, 1, 3],
    3: [2]
}
articulation_points, bridges = find_articulation_points_and_bridges(graph)
print("Articulation Points:", articulation_points)
print("Bridges:", bridges)`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'What is an articulation point in a graph?',
      options: [
        'A vertex whose removal increases the number of connected components.',
        'An edge whose removal increases the number of connected components.',
        'A vertex with the highest degree.',
        'An edge with the highest weight.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. An articulation point is a vertex whose removal increases the number of connected components.',
        'This is incorrect. An edge whose removal increases the number of connected components is called a bridge.',
        'This is incorrect. The degree of a vertex is not related to articulation points.',
        'This is incorrect. The weight of an edge is not related to articulation points.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const eulerHamiltonianData: LessonContent = {
  title: 'Euler and Hamiltonian Paths',
  content: `<p>
Euler and Hamiltonian paths are special types of paths in graph theory that visit all vertices or edges in a graph.
</p>

<ul>
<li><strong>Euler Path:</strong> A path that visits every edge exactly once.</li>
<li><strong>Euler Circuit:</strong> An Euler path that starts and ends at the same vertex.</li>
<li><strong>Hamiltonian Path:</strong> A path that visits every vertex exactly once.</li>
<li><strong>Hamiltonian Circuit:</strong> A Hamiltonian path that starts and ends at the same vertex.</li>
</ul>

<p>
These paths are important in various applications, such as circuit design and logistics.
</p>`,
  codeExample: `# Finding Eulerian Path in a graph
def find_eulerian_path(graph):
    from collections import defaultdict
    in_degree = defaultdict(int)
    out_degree = defaultdict(int)
    edge_count = 0

    for u in graph:
        for v in graph[u]:
            out_degree[u] += 1
            in_degree[v] += 1
            edge_count += 1

    start = None
    for u in graph:
        if out_degree[u] - in_degree[u] == 1:
            start = u
            break

    if start is None:
        start = next(iter(graph))

    path = []
    def dfs(u):
        while out_degree[u] > 0:
            out_degree[u] -= 1
            v = graph[u].pop()
            dfs(v)
        path.append(u)

    dfs(start)
    path.reverse()
    return path if len(path) == edge_count + 1 else None

# Example usage
graph = {
    0: [1],
    1: [2],
    2: [0, 3],
    3: [4],
    4: [2]
}
eulerian_path = find_eulerian_path(graph)
print("Eulerian Path:", eulerian_path)`,
  exercises: [
    {
      prompt: 'Find the Eulerian path in the given graph.',
      initialCode: `# Write your solution here
graph = {
    0: [1],
    1: [2],
    2: [0, 3],
    3: [4],
    4: [2]
}
eulerian_path = find_eulerian_path(graph)
print("Eulerian Path:", eulerian_path)`,
      solution: `def find_eulerian_path(graph):
    from collections import defaultdict
    in_degree = defaultdict(int)
    out_degree = defaultdict(int)
    edge_count = 0

    for u in graph:
        for v in graph[u]:
            out_degree[u] += 1
            in_degree[v] += 1
            edge_count += 1

    start = None
    for u in graph:
        if out_degree[u] - in_degree[u] == 1:
            start = u
            break

    if start is None:
        start = next(iter(graph))

    path = []
    def dfs(u):
        while out_degree[u] > 0:
            out_degree[u] -= 1
            v = graph[u].pop()
            dfs(v)
        path.append(u)

    dfs(start)
    path.reverse()
    return path if len(path) == edge_count + 1 else None

graph = {
    0: [1],
    1: [2],
    2: [0, 3],
    3: [4],
    4: [2]
}
eulerian_path = find_eulerian_path(graph)
print("Eulerian Path:", eulerian_path)`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'What is an Eulerian path in a graph?',
      options: [
        'A path that visits every vertex exactly once.',
        'A path that visits every edge exactly once.',
        'A path that visits every vertex and edge exactly once.',
        'A path that visits every vertex and edge at least once.',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. An Eulerian path visits every edge exactly once, not every vertex.',
        'This is correct. An Eulerian path visits every edge exactly once.',
        'This is incorrect. An Eulerian path visits every edge exactly once, not every vertex and edge.',
        'This is incorrect. An Eulerian path visits every edge exactly once, not every vertex and edge at least once.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const travelingSalesmanData: LessonContent = {
  title: 'Traveling Salesman Problem',
  content: `<p>
The Traveling Salesman Problem (TSP) is a classic optimization problem in computer science and operations research.
</p>

<ul>
<li><strong>Exact Solutions:</strong> Techniques like dynamic programming and branch and bound to find the optimal solution.</li>
<li><strong>Approximate Solutions:</strong> Heuristics and approximation algorithms to find near-optimal solutions efficiently.</li>
</ul>

<p>
TSP is NP-hard, meaning there is no known polynomial-time algorithm to solve it exactly for large instances.
</p>`,
  codeExample: `# Approximate solution for TSP using Nearest Neighbor algorithm
def tsp_nearest_neighbor(graph, start):
    n = len(graph)
    visited = [False] * n
    path = [start]
    visited[start] = True
    current = start

    for _ in range(n - 1):
        next_city = None
        min_distance = float('inf')
        for v in range(n):
            if not visited[v] and graph[current][v] < min_distance:
                min_distance = graph[current][v]
                next_city = v
        path.append(next_city)
        visited[next_city] = True
        current = next_city

    path.append(start)
    return path

# Example usage
graph = [
    [0, 10, 15, 20],
    [10, 0, 35, 25],
    [15, 35, 0, 30],
    [20, 25, 30, 0]
]
start_city = 0
tsp_path = tsp_nearest_neighbor(graph, start_city)
print("TSP Path:", tsp_path)`,
  exercises: [
    {
      prompt: 'Find the approximate solution for TSP using the Nearest Neighbor algorithm.',
      initialCode: `# Write your solution here
graph = [
    [0, 10, 15, 20],
    [10, 0, 35, 25],
    [15, 35, 0, 30],
    [20, 25, 30, 0]
]
start_city = 0
tsp_path = tsp_nearest_neighbor(graph, start_city)
print("TSP Path:", tsp_path)`,
      solution: `def tsp_nearest_neighbor(graph, start):
    n = len(graph)
    visited = [False] * n
    path = [start]
    visited[start] = True
    current = start

    for _ in range(n - 1):
        next_city = None
        min_distance = float('inf')
        for v in range(n):
            if not visited[v] and graph[current][v] < min_distance:
                min_distance = graph[current][v]
                next_city = v
        path.append(next_city)
        visited[next_city] = True
        current = next_city

    path.append(start)
    return path

graph = [
    [0, 10, 15, 20],
    [10, 0, 35, 25],
    [15, 35, 0, 30],
    [20, 25, 30, 0]
]
start_city = 0
tsp_path = tsp_nearest_neighbor(graph, start_city)
print("TSP Path:", tsp_path)`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'What is the Traveling Salesman Problem (TSP)?',
      options: [
        'Finding the shortest path that visits every vertex exactly once and returns to the starting vertex.',
        'Finding the shortest path that visits every edge exactly once.',
        'Finding the shortest path that visits every vertex and edge exactly once.',
        'Finding the shortest path that visits every vertex at least once.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. TSP is about finding the shortest path that visits every vertex exactly once and returns to the starting vertex.',
        'This is incorrect. TSP is about visiting vertices, not edges.',
        'This is incorrect. TSP is about visiting vertices exactly once, not edges.',
        'This is incorrect. TSP is about visiting vertices exactly once, not at least once.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const graphColoringData: LessonContent = {
  title: 'Graph Coloring',
  content: `<p>
Graph coloring is a fundamental problem in graph theory where the goal is to assign colors to the vertices of a graph such that no two adjacent vertices share the same color.
</p>

<ul>
<li><strong>Vertex Coloring:</strong> Assigning colors to vertices such that no two adjacent vertices have the same color.</li>
<li><strong>Edge Coloring:</strong> Assigning colors to edges such that no two adjacent edges have the same color.</li>
</ul>

<p>
Graph coloring has applications in various fields, including scheduling, register allocation, and map coloring.
</p>`,
  codeExample: `# Greedy algorithm for vertex coloring
def graph_coloring(graph):
    colors = {}
    for vertex in graph:
        used_colors = set(colors.get(neighbor) for neighbor in graph[vertex] if neighbor in colors)
        for color in range(len(graph)):
            if color not in used_colors:
                colors[vertex] = color
                break
    return colors

# Example usage
graph = {
    0: [1, 2],
    1: [0, 2],
    2: [0, 1, 3],
    3: [2]
}
vertex_colors = graph_coloring(graph)
print("Vertex Colors:", vertex_colors)`,
  exercises: [
    {
      prompt: 'Color the vertices of the given graph using the greedy algorithm.',
      initialCode: `# Write your solution here
graph = {
    0: [1, 2],
    1: [0, 2],
    2: [0, 1, 3],
    3: [2]
}
vertex_colors = graph_coloring(graph)
print("Vertex Colors:", vertex_colors)`,
      solution: `def graph_coloring(graph):
    colors = {}
    for vertex in graph:
        used_colors = set(colors.get(neighbor) for neighbor in graph[vertex] if neighbor in colors)
        for color in range(len(graph)):
            if color not in used_colors:
                colors[vertex] = color
                break
    return colors

graph = {
    0: [1, 2],
    1: [0, 2],
    2: [0, 1, 3],
    3: [2]
}
vertex_colors = graph_coloring(graph)
print("Vertex Colors:", vertex_colors)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the goal of vertex coloring in graph theory?',
      options: [
        'To assign colors to vertices such that no two adjacent vertices share the same color.',
        'To assign colors to edges such that no two adjacent edges share the same color.',
        'To assign colors to vertices such that every vertex has a unique color.',
        'To assign colors to edges such that every edge has a unique color.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The goal of vertex coloring is to assign colors to vertices such that no two adjacent vertices share the same color.',
        'This is incorrect. This describes edge coloring, not vertex coloring.',
        'This is incorrect. This is not a requirement for vertex coloring.',
        'This is incorrect. This describes edge coloring, not vertex coloring.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const independentSetsData: LessonContent = {
  title: 'Independent Sets',
  content: `<p>
An independent set in a graph is a set of vertices such that no two vertices in the set are adjacent.
</p>

<ul>
<li><strong>Maximum Independent Set:</strong> The largest possible independent set in a graph.</li>
<li><strong>Finding Independent Sets:</strong> Algorithms to find or approximate the maximum independent set.</li>
</ul>

<p>
Independent sets are important in various applications, such as scheduling and resource allocation.
</p>`,
  codeExample: `# Greedy algorithm to find a large independent set
def find_independent_set(graph):
    independent_set = set()
    vertices = list(graph.keys())
    vertices.sort(key=lambda v: len(graph[v]), reverse=True)

    for vertex in vertices:
        if all(neighbor not in independent_set for neighbor in graph[vertex]):
            independent_set.add(vertex)

    return independent_set

# Example usage
graph = {
    0: [1, 2],
    1: [0, 2],
    2: [0, 1, 3],
    3: [2]
}
independent_set = find_independent_set(graph)
print("Independent Set:", independent_set)`,
  exercises: [
    {
      prompt: 'Find a large independent set in the given graph using the greedy algorithm.',
      initialCode: `# Write your solution here
graph = {
    0: [1, 2],
    1: [0, 2],
    2: [0, 1, 3],
    3: [2]
}
independent_set = find_independent_set(graph)
print("Independent Set:", independent_set)`,
      solution: `def find_independent_set(graph):
    independent_set = set()
    vertices = list(graph.keys())
    vertices.sort(key=lambda v: len(graph[v]), reverse=True)

    for vertex in vertices:
        if all(neighbor not in independent_set for neighbor in graph[vertex]):
            independent_set.add(vertex)

    return independent_set

graph = {
    0: [1, 2],
    1: [0, 2],
    2: [0, 1, 3],
    3: [2]
}
independent_set = find_independent_set(graph)
print("Independent Set:", independent_set)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is an independent set in a graph?',
      options: [
        'A set of vertices such that no two vertices in the set are adjacent.',
        'A set of edges such that no two edges in the set are adjacent.',
        'A set of vertices such that every vertex in the set is adjacent to every other vertex.',
        'A set of edges such that every edge in the set is adjacent to every other edge.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. An independent set is a set of vertices such that no two vertices in the set are adjacent.',
        'This is incorrect. This describes an independent set of edges, not vertices.',
        'This is incorrect. This describes a clique, not an independent set.',
        'This is incorrect. This describes a clique of edges, not an independent set.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const vertexCoverData: LessonContent = {
  title: 'Vertex Cover',
  content: `<p>
A vertex cover in a graph is a set of vertices such that each edge of the graph is incident to at least one vertex in the set.
</p>

<ul>
<li><strong>Minimum Vertex Cover:</strong> The smallest possible vertex cover in a graph.</li>
<li><strong>Finding Vertex Covers:</strong> Algorithms to find or approximate the minimum vertex cover.</li>
</ul>

<p>
Vertex cover is important in various applications, such as network design and computational biology.
</p>`,
  codeExample: `# Greedy algorithm to find a small vertex cover
def find_vertex_cover(graph):
    vertex_cover = set()
    edges = [(u, v) for u in graph for v in graph[u]]

    while edges:
        u, v = edges.pop()
        vertex_cover.add(u)
        vertex_cover.add(v)
        edges = [(x, y) for x, y in edges if x not in vertex_cover and y not in vertex_cover]

    return vertex_cover

# Example usage
graph = {
    0: [1, 2],
    1: [0, 2],
    2: [0, 1, 3],
    3: [2]
}
vertex_cover = find_vertex_cover(graph)
print("Vertex Cover:", vertex_cover)`,
  exercises: [
    {
      prompt: 'Find a small vertex cover in the given graph using the greedy algorithm.',
      initialCode: `# Write your solution here
graph = {
    0: [1, 2],
    1: [0, 2],
    2: [0, 1, 3],
    3: [2]
}
vertex_cover = find_vertex_cover(graph)
print("Vertex Cover:", vertex_cover)`,
      solution: `def find_vertex_cover(graph):
    vertex_cover = set()
    edges = [(u, v) for u in graph for v in graph[u]]

    while edges:
        u, v = edges.pop()
        vertex_cover.add(u)
        vertex_cover.add(v)
        edges = [(x, y) for x, y in edges if x not in vertex_cover and y not in vertex_cover]

    return vertex_cover

graph = {
    0: [1, 2],
    1: [0, 2],
    2: [0, 1, 3],
    3: [2]
}
vertex_cover = find_vertex_cover(graph)
print("Vertex Cover:", vertex_cover)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is a vertex cover in a graph?',
      options: [
        'A set of vertices such that each edge of the graph is incident to at least one vertex in the set.',
        'A set of edges such that each vertex of the graph is incident to at least one edge in the set.',
        'A set of vertices such that no two vertices in the set are adjacent.',
        'A set of edges such that no two edges in the set are adjacent.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. A vertex cover is a set of vertices such that each edge of the graph is incident to at least one vertex in the set.',
        'This is incorrect. This describes an edge cover, not a vertex cover.',
        'This is incorrect. This describes an independent set, not a vertex cover.',
        'This is incorrect. This describes an independent set of edges, not a vertex cover.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const bipartiteGraphsData: LessonContent = {
  title: 'Bipartite Graphs',
  content: `<p>
A bipartite graph is a graph whose vertices can be divided into two disjoint and independent sets such that no two graph vertices within the same set are adjacent.
</p>

<ul>
<li><strong>Properties:</strong> A graph is bipartite if and only if it contains no odd-length cycles.</li>
<li><strong>Algorithms:</strong> Techniques to determine if a graph is bipartite, such as graph coloring and BFS/DFS.</li>
</ul>

<p>
Bipartite graphs have applications in various fields, including matching problems and network flows.
</p>`,
  codeExample: `# Check if a graph is bipartite using BFS
def is_bipartite(graph):
    color = {}
    for vertex in graph:
        if vertex not in color:
            queue = [vertex]
            color[vertex] = 0
            while queue:
                u = queue.pop(0)
                for v in graph[u]:
                    if v not in color:
                        color[v] = 1 - color[u]
                        queue.append(v)
                    elif color[v] == color[u]:
                        return False
    return True

# Example usage
graph = {
    0: [1, 2],
    1: [0, 3],
    2: [0, 3],
    3: [1, 2]
}
print("Is Bipartite:", is_bipartite(graph))`,
  exercises: [
    {
      prompt: 'Determine if the given graph is bipartite using the BFS algorithm.',
      initialCode: `# Write your solution here
graph = {
    0: [1, 2],
    1: [0, 3],
    2: [0, 3],
    3: [1, 2]
}
print("Is Bipartite:", is_bipartite(graph))`,
      solution: `def is_bipartite(graph):
    color = {}
    for vertex in graph:
        if vertex not in color:
            queue = [vertex]
            color[vertex] = 0
            while queue:
                u = queue.pop(0)
                for v in graph[u]:
                    if v not in color:
                        color[v] = 1 - color[u]
                        queue.append(v)
                    elif color[v] == color[u]:
                        return False
    return True

graph = {
    0: [1, 2],
    1: [0, 3],
    2: [0, 3],
    3: [1, 2]
}
print("Is Bipartite:", is_bipartite(graph))`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is a bipartite graph?',
      options: [
        'A graph whose vertices can be divided into two disjoint and independent sets such that no two graph vertices within the same set are adjacent.',
        'A graph with only even-length cycles.',
        'A graph with only odd-length cycles.',
        'A graph with no cycles.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. A bipartite graph is a graph whose vertices can be divided into two disjoint and independent sets such that no two graph vertices within the same set are adjacent.',
        'This is incorrect. A bipartite graph can have both even and odd-length cycles.',
        'This is incorrect. A bipartite graph cannot have odd-length cycles.',
        'This is incorrect. A bipartite graph can have cycles.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const planarGraphsData: LessonContent = {
  title: 'Planar Graphs',
  content: `<p>
A planar graph is a graph that can be embedded in the plane, i.e., it can be drawn on the plane in such a way that its edges intersect only at their endpoints.
</p>

<ul>
<li><strong>Properties:</strong> Planar graphs have specific properties, such as the Euler's formula, which relates the number of vertices, edges, and faces.</li>
<li><strong>Algorithms:</strong> Techniques to determine if a graph is planar, such as Kuratowski's theorem and the Hopcroft-Tarjan planarity testing algorithm.</li>
</ul>

<p>
Planar graphs are important in various applications, including circuit design and geographic information systems.
</p>`,
  codeExample: `# Check if a graph is planar using Kuratowski's theorem
def is_planar(graph):
    # Simplified check for demonstration purposes
    # In practice, this would involve more complex algorithms
    if len(graph) > 4:
        return False
    return True

# Example usage
graph = {
    0: [1, 2],
    1: [0, 2],
    2: [0, 1]
}
print("Is Planar:", is_planar(graph))`,
  exercises: [
    {
      prompt: 'Determine if the given graph is planar using a simplified version of Kuratowski\'s theorem.',
      initialCode: `# Write your solution here
graph = {
    0: [1, 2],
    1: [0, 2],
    2: [0, 1]
}
print("Is Planar:", is_planar(graph))`,
      solution: `def is_planar(graph):
    # Simplified check for demonstration purposes
    # In practice, this would involve more complex algorithms
    if len(graph) > 4:
        return False
    return True

graph = {
    0: [1, 2],
    1: [0, 2],
    2: [0, 1]
}
print("Is Planar:", is_planar(graph))`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is a planar graph?',
      options: [
        'A graph that can be embedded in the plane, i.e., it can be drawn on the plane in such a way that its edges intersect only at their endpoints.',
        'A graph with no edges.',
        'A graph with only one vertex.',
        'A graph with no vertices.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. A planar graph is a graph that can be embedded in the plane, i.e., it can be drawn on the plane in such a way that its edges intersect only at their endpoints.',
        'This is incorrect. A graph with no edges can be considered planar, but it is not the definition of a planar graph.',
        'This is incorrect. A graph with only one vertex can be considered planar, but it is not the definition of a planar graph.',
        'This is incorrect. A graph with no vertices is not a valid graph.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const directedAcyclicGraphsData: LessonContent = {
  title: 'Directed Acyclic Graphs',
  content: `<p>
A Directed Acyclic Graph (DAG) is a directed graph with no directed cycles.
</p>

<ul>
<li><strong>Properties:</strong> DAGs have specific properties, such as the ability to perform topological sorting.</li>
<li><strong>Algorithms:</strong> Techniques to work with DAGs, such as topological sorting, shortest path algorithms (e.g., Dijkstra's and Bellman-Ford), and dynamic programming.</li>
</ul>

<p>
DAGs are important in various applications, including scheduling, data processing, and dependency resolution.
</p>`,
  codeExample: `# Topological sort using DFS
def topological_sort(graph):
    visited = set()
    stack = []

    def dfs(vertex):
        visited.add(vertex)
        for neighbor in graph.get(vertex, []):
            if neighbor not in visited:
                dfs(neighbor)
        stack.append(vertex)

    for vertex in graph:
        if vertex not in visited:
            dfs(vertex)

    return stack[::-1]

# Example usage
graph = {
    0: [1, 2],
    1: [3],
    2: [3],
    3: []
}
print("Topological Sort:", topological_sort(graph))`,
  exercises: [
    {
      prompt: 'Perform a topological sort on the given DAG using DFS.',
      initialCode: `# Write your solution here
graph = {
    0: [1, 2],
    1: [3],
    2: [3],
    3: []
}
print("Topological Sort:", topological_sort(graph))`,
      solution: `def topological_sort(graph):
    visited = set()
    stack = []

    def dfs(vertex):
        visited.add(vertex)
        for neighbor in graph.get(vertex, []):
            if neighbor not in visited:
                dfs(neighbor)
        stack.append(vertex)

    for vertex in graph:
        if vertex not in visited:
            dfs(vertex)

    return stack[::-1]

graph = {
    0: [1, 2],
    1: [3],
    2: [3],
    3: []
}
print("Topological Sort:", topological_sort(graph))`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is a Directed Acyclic Graph (DAG)?',
      options: [
        'A directed graph with no directed cycles.',
        'A graph with no edges.',
        'A graph with only one vertex.',
        'A graph with no vertices.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. A Directed Acyclic Graph (DAG) is a directed graph with no directed cycles.',
        'This is incorrect. A graph with no edges can be considered a DAG, but it is not the definition of a DAG.',
        'This is incorrect. A graph with only one vertex can be considered a DAG, but it is not the definition of a DAG.',
        'This is incorrect. A graph with no vertices is not a valid graph.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const graphDpData: LessonContent = {
  title: 'Dynamic Programming on Graphs',
  content: `<p>
Dynamic Programming (DP) is a powerful technique for solving complex problems by breaking them down into simpler subproblems. When applied to graphs, DP can solve a variety of problems efficiently.
</p>

<ul>
<li><strong>Shortest Path Problems:</strong> Using DP to solve problems like the Floyd-Warshall algorithm for all-pairs shortest paths.</li>
<li><strong>Maximum Flow Problems:</strong> Techniques like the Ford-Fulkerson method and Edmonds-Karp algorithm.</li>
<li><strong>Graph Traversal:</strong> DP can be used in conjunction with graph traversal algorithms like DFS and BFS to solve problems such as finding the longest path in a DAG.</li>
</ul>

<p>
DP on graphs is crucial for optimizing solutions to complex graph problems.
</p>`,
  codeExample: `# Floyd-Warshall algorithm for all-pairs shortest paths
def floyd_warshall(graph):
    n = len(graph)
    dist = [[float('inf')] * n for _ in range(n)]

    for i in range(n):
        dist[i][i] = 0

    for u in graph:
        for v, weight in graph[u]:
            dist[u][v] = weight

    for k in range(n):
        for i in range(n):
            for j in range(n):
                if dist[i][j] > dist[i][k] + dist[k][j]:
                    dist[i][j] = dist[i][k] + dist[k][j]

    return dist

# Example usage
graph = {
    0: [(1, 5), (2, 3)],
    1: [(2, 2), (3, 6)],
    2: [(3, 7)],
    3: []
}
shortest_paths = floyd_warshall(graph)
print("Shortest Paths:", shortest_paths)`,
  exercises: [
    {
      prompt: 'Implement the Floyd-Warshall algorithm to find the shortest paths between all pairs of vertices in the given graph.',
      initialCode: `# Write your solution here
graph = {
    0: [(1, 5), (2, 3)],
    1: [(2, 2), (3, 6)],
    2: [(3, 7)],
    3: []
}
shortest_paths = floyd_warshall(graph)
print("Shortest Paths:", shortest_paths)`,
      solution: `def floyd_warshall(graph):
    n = len(graph)
    dist = [[float('inf')] * n for _ in range(n)]

    for i in range(n):
        dist[i][i] = 0

    for u in graph:
        for v, weight in graph[u]:
            dist[u][v] = weight

    for k in range(n):
        for i in range(n):
            for j in range(n):
                if dist[i][j] > dist[i][k] + dist[k][j]:
                    dist[i][j] = dist[i][k] + dist[k][j]

    return dist

graph = {
    0: [(1, 5), (2, 3)],
    1: [(2, 2), (3, 6)],
    2: [(3, 7)],
    3: []
}
shortest_paths = floyd_warshall(graph)
print("Shortest Paths:", shortest_paths)`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary advantage of using Dynamic Programming on graphs?',
      options: [
        'It allows for efficient computation of complex graph problems by breaking them down into simpler subproblems.',
        'It guarantees the shortest path in all cases.',
        'It can solve any graph problem in constant time.',
        'It is the only method for solving graph problems.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. DP on graphs allows for efficient computation of complex graph problems by breaking them down into simpler subproblems.',
        'This is incorrect. While DP can find the shortest path in many cases, it does not guarantee the shortest path in all cases.',
        'This is incorrect. DP does not solve all graph problems in constant time.',
        'This is incorrect. There are other methods for solving graph problems.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const networkDesignProblemsData: LessonContent = {
  title: 'Network Design Problems',
  content: `<p>
Network design problems involve optimizing the structure and flow of networks to meet specific objectives, such as minimizing costs or maximizing efficiency.
</p>

<ul>
<li><strong>Minimum Spanning Tree (MST):</strong> Algorithms like Kruskal's and Prim's to find the MST.</li>
<li><strong>Shortest Path Problems:</strong> Algorithms like Dijkstra's and Bellman-Ford to find the shortest paths.</li>
<li><strong>Maximum Flow Problems:</strong> Techniques like the Ford-Fulkerson method and Edmonds-Karp algorithm.</li>
</ul>

<p>
Network design problems are essential in various applications, including telecommunications, transportation, and logistics.
</p>`,
  codeExample: `# Kruskal's algorithm for Minimum Spanning Tree
def find(parent, i):
    if parent[i] == i:
        return i
    return find(parent, parent[i])

def union(parent, rank, x, y):
    root_x = find(parent, x)
    root_y = find(parent, y)

    if rank[root_x] < rank[root_y]:
        parent[root_x] = root_y
    elif rank[root_x] > rank[root_y]:
        parent[root_y] = root_x
    else:
        parent[root_y] = root_x
        rank[root_x] += 1

def kruskal_mst(graph):
    result = []
    i, e = 0, 0
    graph = sorted(graph, key=lambda item: item[2])
    parent = []
    rank = []

    for node in range(len(graph)):
        parent.append(node)
        rank.append(0)

    while e < len(graph) - 1:
        u, v, w = graph[i]
        i += 1
        x = find(parent, u)
        y = find(parent, v)

        if x != y:
            e += 1
            result.append([u, v, w])
            union(parent, rank, x, y)

    return result

# Example usage
graph = [
    [0, 1, 5],
    [0, 2, 3],
    [1, 2, 2],
    [1, 3, 6],
    [2, 3, 7]
]
mst = kruskal_mst(graph)
print("Minimum Spanning Tree:", mst)`,
  exercises: [
    {
      prompt: 'Implement Kruskal\'s algorithm to find the Minimum Spanning Tree (MST) for the given graph.',
      initialCode: `# Write your solution here
graph = [
    [0, 1, 5],
    [0, 2, 3],
    [1, 2, 2],
    [1, 3, 6],
    [2, 3, 7]
]
mst = kruskal_mst(graph)
print("Minimum Spanning Tree:", mst)`,
      solution: `def find(parent, i):
    if parent[i] == i:
        return i
    return find(parent, parent[i])

def union(parent, rank, x, y):
    root_x = find(parent, x)
    root_y = find(parent, y)

    if rank[root_x] < rank[root_y]:
        parent[root_x] = root_y
    elif rank[root_x] > rank[root_y]:
        parent[root_y] = root_x
    else:
        parent[root_y] = root_x
        rank[root_x] += 1

def kruskal_mst(graph):
    result = []
    i, e = 0, 0
    graph = sorted(graph, key=lambda item: item[2])
    parent = []
    rank = []

    for node in range(len(graph)):
        parent.append(node)
        rank.append(0)

    while e < len(graph) - 1:
        u, v, w = graph[i]
        i += 1
        x = find(parent, u)
        y = find(parent, v)

        if x != y:
            e += 1
            result.append([u, v, w])
            union(parent, rank, x, y)

    return result

graph = [
    [0, 1, 5],
    [0, 2, 3],
    [1, 2, 2],
    [1, 3, 6],
    [2, 3, 7]
]
mst = kruskal_mst(graph)
print("Minimum Spanning Tree:", mst)`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary objective of network design problems?',
      options: [
        'Optimizing the structure and flow of networks to meet specific objectives, such as minimizing costs or maximizing efficiency.',
        'Finding the shortest path between two nodes.',
        'Finding the maximum flow in a network.',
        'Determining the minimum spanning tree of a graph.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The primary objective of network design problems is to optimize the structure and flow of networks to meet specific objectives.',
        'This is incorrect. While finding the shortest path is a part of network design, it is not the primary objective.',
        'This is incorrect. Finding the maximum flow is a part of network design, but it is not the primary objective.',
        'This is incorrect. Finding the minimum spanning tree is a part of network design, but it is not the primary objective.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const socialNetworkAnalysisData: LessonContent = {
  title: 'Social Network Analysis',
  content: `<p>
Social Network Analysis (SNA) is the process of investigating social structures through the use of networks and graph theory.
</p>

<ul>
<li><strong>Centrality Measures:</strong> Techniques like degree centrality, betweenness centrality, and closeness centrality to identify important nodes.</li>
<li><strong>Community Detection:</strong> Algorithms like the Girvan-Newman algorithm and modularity-based methods to identify communities within a network.</li>
<li><strong>Influence Models:</strong> Techniques to model and predict the spread of influence in a network.</li>
</ul>

<p>
SNA is important in various applications, including marketing, epidemiology, and social science research.
</p>`,
  codeExample: `# Degree centrality calculation
def degree_centrality(graph):
    centrality = {}
    for node in graph:
        centrality[node] = len(graph[node])
    return centrality

# Example usage
graph = {
    0: [1, 2],
    1: [0, 2, 3],
    2: [0, 1, 3],
    3: [1, 2]
}
centrality = degree_centrality(graph)
print("Degree Centrality:", centrality)`,
  exercises: [
    {
      prompt: 'Calculate the degree centrality for each node in the given social network graph.',
      initialCode: `# Write your solution here
graph = {
    0: [1, 2],
    1: [0, 2, 3],
    2: [0, 1, 3],
    3: [1, 2]
}
centrality = degree_centrality(graph)
print("Degree Centrality:", centrality)`,
      solution: `def degree_centrality(graph):
    centrality = {}
    for node in graph:
        centrality[node] = len(graph[node])
    return centrality

graph = {
    0: [1, 2],
    1: [0, 2, 3],
    2: [0, 1, 3],
    3: [1, 2]
}
centrality = degree_centrality(graph)
print("Degree Centrality:", centrality)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary goal of Social Network Analysis (SNA)?',
      options: [
        'Investigating social structures through the use of networks and graph theory.',
        'Finding the shortest path between two nodes.',
        'Finding the maximum flow in a network.',
        'Determining the minimum spanning tree of a graph.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. The primary goal of SNA is to investigate social structures through the use of networks and graph theory.',
        'This is incorrect. While finding the shortest path is a part of SNA, it is not the primary goal.',
        'This is incorrect. Finding the maximum flow is not the primary goal of SNA.',
        'This is incorrect. Determining the minimum spanning tree is not the primary goal of SNA.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const graphLessons: Record<string, LessonContent> = {
  'graph-concepts': basicGraphConceptsData,
  'graph-representation': graphRepresentationData,
  'graph-properties': graphPropertiesData,
  'bfs': bfsData,
  'dfs': dfsData,
  'traversal-applications': traversalApplicationsData,
  'dijkstra': dijkstraData,
  'bellman-ford': bellmanFordData,
  'floyd-warshall': floydWarshallData,
  'kruskal': kruskalData,
  'prim': primData,
  'union-find': unionFindData,
  'cycle-detection': cycleDetectionData,
  'topological-sort': topologicalSortData,
  'strongly-connected': stronglyConnectedData,
  'max-flow': maxFlowData,
  'min-cut': minCutData,
  'bipartite-matching': bipartiteMatchingData,
  'articulation-bridges': articulationBridgesData,
  'euler-hamilton': eulerHamiltonianData,
  'traveling-salesman': travelingSalesmanData,
  'graph-coloring': graphColoringData,
  'independent-sets': independentSetsData,
  'vertex-cover': vertexCoverData,
  'bipartite-graphs': bipartiteGraphsData,
  'planar-graphs': planarGraphsData,
  'directed-acyclic': directedAcyclicGraphsData,
  'graph-dp': graphDpData,
  'network-design': networkDesignProblemsData,
  'social-networks': socialNetworkAnalysisData,

};
export const graphLessonsTab: LessonsTab = {
  curriculum: graphCurriculum,
  lessons: graphLessons,
};
