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

const buildingGraphsData: LessonContent = {
  title: 'Building Graphs',
  content: `
  <p>
  Building graphs is a fundamental skill in programming interviews, particularly for algorithm-based problems. It involves converting problem inputs into graph representations, which can be adjacency lists or matrices. This skill is crucial for solving various graph-related problems such as shortest path, traversal, and connectivity.
  </p>
  <h3>Graph Representations</h3>
  <p>
  Graphs can be represented in two common ways:
  </p>
  <ul>
    <li><strong>Adjacency List:</strong> Efficient for sparse graphs, using a list of lists to represent connections.</li>
    <li><strong>Adjacency Matrix:</strong> Useful for dense graphs, using a 2D array to represent connections.</li>
  </ul>
  <p>
  The choice of representation depends on the problem's requirements and the graph's density.
  </p>
  `,
  codeExample: `function buildAdjacencyList(edges: [number, number][]): Map<number, number[]> {
    const graph = new Map<number, number[]>();
    for (const [u, v] of edges) {
      if (!graph.has(u)) {
        graph.set(u, []);
      }
      if (!graph.has(v)) {
        graph.set(v, []);
      }
      graph.get(u)!.push(v);
      graph.get(v)!.push(u);
    }
    return graph;
  }`,
  exercises: [
    {
      prompt: 'Implement a function to create an adjacency list from a list of edges.',
      initialCode: `function buildAdjacencyList(edges: [number, number][]): Map<number, number[]> {
  // Your code here
}`,
      solution: `function buildAdjacencyList(edges: [number, number][]): Map<number, number[]> {
  const graph = new Map<number, number[]>();
  for (const [u, v] of edges) {
    if (!graph.has(u)) {
      graph.set(u, []);
    }
    if (!graph.has(v)) {
      graph.set(v, []);
    }
    graph.get(u)!.push(v);
    graph.get(v)!.push(u);
  }
  return graph;
}`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Implement a function to create an adjacency matrix from a list of edges.',
      initialCode: `function buildAdjacencyMatrix(edges: [number, number][], numNodes: number): number[][] {
  // Your code here
}`,
      solution: `function buildAdjacencyMatrix(edges: [number, number][], numNodes: number): number[][] {
  const graph: number[][] = Array.from({ length: numNodes }, () => Array(numNodes).fill(0));
  for (const [u, v] of edges) {
    graph[u][v] = 1;
    graph[v][u] = 1;
  }
  return graph;
}`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which graph representation is more space-efficient for sparse graphs?',
      options: ['Adjacency List', 'Adjacency Matrix', 'Both are equally efficient', 'Neither'],
      correctAnswer: 0,
      explanations: [
        'Correct. Adjacency lists are more space-efficient for sparse graphs.',
        'Incorrect. Adjacency matrices use more space for sparse graphs.',
        'Incorrect. They are not equally efficient.',
        'Incorrect. Adjacency lists are efficient for sparse graphs.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What is the time complexity of checking if an edge exists in an adjacency list?',
      options: ['O(1)', 'O(V)', 'O(E)', 'O(V + E)'],
      correctAnswer: 1,
      explanations: [
        'Incorrect. O(1) is for adjacency matrices.',
        'Correct. O(V) in the worst case for adjacency lists.',
        'Incorrect. O(E) is not typical for this operation.',
        'Incorrect. O(V + E) is for graph traversal algorithms.',
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

const bfsPatternData: LessonContent = {
  title: 'BFS Pattern',
  content: `<p>
    Breadth-First Search (BFS) is a graph traversal algorithm that explores all the neighbors at the current depth before moving to nodes at the next depth level. It is widely used for finding the shortest path in unweighted graphs, level-order traversal in trees, and grid traversal problems.
  </p>
  <p>
    BFS is particularly useful for problems like finding the shortest path in a maze or determining the levels in a tree.
  </p>`,
  codeExample: `// BFS implementation using a queue
function bfs(graph, startNode) {
    const visited = new Set();
    const queue = [startNode];
    visited.add(startNode);
    
    while(queue.length > 0) {
        const current = queue.shift();
        console.log(current);
        
        for(let neighbor of graph[current]) {
            if(!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}

// Example usage
const graph = {
    A: ['B', 'C'],
    B: ['A', 'D'],
    C: ['A', 'E'],
    D: ['B'],
    E: ['C']
};
bfs(graph, 'A');`,
  exercises: [
    {
      prompt: 'Implement BFS to find the shortest path in an unweighted graph.',
      initialCode: `// Write your solution here
function bfsShortestPath(graph, start, end) {
    // Implement BFS to find the shortest path
}`,
      solution: `function bfsShortestPath(graph, start, end) {
    const queue = [[start]];
    const visited = new Set();
    visited.add(start);
    
    while(queue.length > 0) {
        const path = queue.shift();
        const lastNode = path[path.length - 1];
        
        if(lastNode === end) {
            return path;
        }
        
        for(let neighbor of graph[lastNode]) {
            if(!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([...path, neighbor]);
            }
        }
    }
    return null;
}`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'When is BFS preferred over DFS?',
      options: [
        'When finding the shortest path in an unweighted graph',
        'When the graph is deep and narrow',
        'When memory is a constraint',
        'None of the above',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct. BFS is ideal for finding the shortest path in unweighted graphs.',
        'Incorrect. DFS is更适合 deep and narrow graphs.',
        'Incorrect. BFS typically uses more memory than DFS.',
        'Incorrect.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const dfsPatternData: LessonContent = {
  title: 'DFS Pattern',
  content: `<p>
    Depth-First Search (DFS) is a graph traversal algorithm that explores as far as possible along each branch before backtracking. It is useful for path finding, backtracking problems like N-Queens, and solving island problems in matrices.
  </p>
  <p>
    DFS can be implemented iteratively or recursively and is suitable for scenarios where you need to explore all possible paths.
  </p>`,
  codeExample: `// Recursive DFS implementation
function dfs(graph, node, visited = new Set()) {
    visited.add(node);
    console.log(node);
    
    for(let neighbor of graph[node]) {
        if(!visited.has(neighbor)) {
            dfs(graph, neighbor, visited);
        }
    }
}

// Example usage
const graph = {
    A: ['B', 'C'],
    B: ['A', 'D'],
    C: ['A', 'E'],
    D: ['B'],
    E: ['C']
};
dfs(graph, 'A');`,
  exercises: [
    {
      prompt: 'Implement DFS to find all paths from a start node to an end node in a graph.',
      initialCode: `// Write your solution here
function dfsAllPaths(graph, start, end, path = [], allPaths = []) {
    // Implement DFS to find all paths
    return allPaths;
}`,
      solution: `function dfsAllPaths(graph, start, end, path = [], allPaths = []) {
    path.push(start);
    if(start === end) {
        allPaths.push([...path]);
    } else {
        for(let neighbor of graph[start]) {
            if(!path.includes(neighbor)) {
                dfsAllPaths(graph, neighbor, end, path, allPaths);
            }
        }
    }
    path.pop();
    return allPaths;
}`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a typical use case for DFS?',
      options: [
        'Finding the shortest path in an unweighted graph',
        'Solving puzzles like mazes or Sudoku',
        'Level-order traversal of a tree',
        'All of the above',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. BFS is better for shortest path in unweighted graphs.',
        'Correct. DFS is useful for backtracking in puzzles.',
        'Incorrect. Level-order traversal is typically done with BFS.',
        'Incorrect.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const matrixTraversalData: LessonContent = {
  title: 'Matrix as Graph',
  content: `<p>
    Treating a matrix as a graph involves considering each cell as a node and its adjacent cells as edges. This approach is useful for solving problems like island counting, shortest path in a matrix, and flood fill.
  </p>
  <p>
    Graph traversal techniques like BFS and DFS can be applied to matrices to solve these problems efficiently.
  </p>`,
  codeExample: `// BFS for island counting in a matrix
function countIslands(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const visited = new Array(rows).fill(false).map(() => new Array(cols).fill(false));
    let count = 0;
    
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(matrix[i][j] === 1 && !visited[i][j]) {
                bfs(matrix, i, j, visited);
                count++;
            }
        }
    }
    return count;
}

function bfs(matrix, i, j, visited) {
    const queue = [[i, j]];
    visited[i][j] = true;
    
    while(queue.length > 0) {
        const [x, y] = queue.shift();
        
        // Explore neighbors
        if(x > 0 && matrix[x-1][y] === 1 && !visited[x-1][y]) {
            visited[x-1][y] = true;
            queue.push([x-1, y]);
        }
        // Add other directions similarly
    }
}

// Example usage
const matrix = [
    [1, 1, 0],
    [0, 1, 0],
    [0, 0, 1]
];
console.log(countIslands(matrix)); // Output: 2`,
  exercises: [
    {
      prompt: 'Implement a flood fill algorithm using DFS on a given matrix.',
      initialCode: `// Write your solution here
function floodFill(matrix, sr, sc, newColor) {
    // Implement DFS for flood fill
}`,
      solution: `function floodFill(matrix, sr, sc, newColor) {
    const originalColor = matrix[sr][sc];
    if(originalColor === newColor) return matrix;
    
    function dfs(x, y) {
        if(x < 0 || x >= matrix.length || y < 0 || y >= matrix[0].length || matrix[x][y] !== originalColor) {
            return;
        }
        matrix[x][y] = newColor;
        dfs(x+1, y);
        dfs(x-1, y);
        dfs(x, y+1);
        dfs(x, y-1);
    }
    
    dfs(sr, sc);
    return matrix;
}`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which traversal method is typically used for finding the number of islands in a matrix?',
      options: [
        'BFS',
        'DFS',
        'Either BFS or DFS',
        'Neither BFS nor DFS',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. BFS can be used, but it is not the only option.',
        'Incorrect. DFS can be used, but it is not the only option.',
        'Correct. Both BFS and DFS can be used for island counting.',
        'Incorrect.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const islandProblemsData: LessonContent = {
  title: 'Island Problems',
  content: `<p>
    Island problems involve identifying and counting distinct islands in a grid, where land is represented by '1's and water by '0's. These problems are common in scenarios like geography and computer vision. DFS or BFS algorithms are typically used to traverse and mark visited lands.
  </p>
  <p>
    The approach involves iterating through each cell in the grid, and when an unvisited land cell is found, a DFS or BFS traversal is initiated to mark all connected land cells as visited, incrementing the island count for each such traversal.
  </p>
  <p>
    The time complexity is O(M*N), where M is the number of rows and N is the number of columns, and space complexity is O(M*N) for the visited matrix.
  </p>`,
  codeExample: `// Function to count the number of islands in a grid
function countIslands(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = new Array(rows).fill(false).map(() => new Array(cols).fill(false));
    let count = 0;
    
    function dfs(r, c) {
        if(r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === '0' || visited[r][c]) {
            return;
        }
        visited[r][c] = true;
        // Explore in all four directions
        dfs(r+1, c);
        dfs(r-1, c);
        dfs(r, c+1);
        dfs(r, c-1);
    }
    
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(grid[i][j] === '1' && !visited[i][j]) {
                dfs(i, j);
                count++;
            }
        }
    }
    return count;
}`,
  exercises: [
    {
      prompt: 'Implement island counting using BFS.',
      initialCode: `// Write your solution here
function countIslandsBFS(grid) {
    // Implement BFS to count islands
}`,
      solution: `function countIslandsBFS(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = new Array(rows).fill(false).map(() => new Array(cols).fill(false));
    let count = 0;
    const directions = [[1,0], [-1,0], [0,1], [0,-1]];
    
    function bfs(r, c) {
        const queue = [[r, c]];
        visited[r][c] = true;
        
        while(queue.length > 0) {
            const [x, y] = queue.shift();
            for(const [dx, dy] of directions) {
                const nx = x + dx;
                const ny = y + dy;
                if(nx >= 0 && nx < rows && ny >= 0 && ny < cols && grid[nx][ny] === '1' && !visited[nx][ny]) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny]);
                }
            }
        }
    }
    
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(grid[i][j] === '1' && !visited[i][j]) {
                bfs(i, j);
                count++;
            }
        }
    }
    return count;
}`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which algorithm is commonly used to solve island problems?',
      options: ['DFS', 'BFS', 'Both DFS and BFS', 'Neither DFS nor BFS'],
      correctAnswer: 2,
      explanations: [
        'DFS is commonly used.',
        'BFS is also commonly used.',
        'Correct. Both DFS and BFS are suitable.',
        'Incorrect.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const graphConnectivityData: LessonContent = {
  title: 'Connected Components',
  content: `<p>
    Connected components in a graph are subsets of vertices where each vertex is reachable from any other vertex in the same subset. This concept is crucial in analyzing social networks, network connectivity, and more. DFS or BFS can be used to identify these components.
  </p>
  <p>
    The algorithm involves iterating through each vertex, and for each unvisited vertex, performing a DFS or BFS to mark all reachable vertices, thus identifying a new connected component.
  </p>
  <p>
    The time complexity is O(V+E), where V is the number of vertices and E is the number of edges.
  </p>`,
  codeExample: `// Function to find the number of connected components in an undirected graph
function countConnectedComponents(graph, numVertices) {
    const visited = new Array(numVertices).fill(false);
    let count = 0;
    
    function dfs(u) {
        visited[u] = true;
        for(const v of graph[u]) {
            if(!visited[v]) {
                dfs(v);
            }
        }
    }
    
    for(let i = 0; i < numVertices; i++) {
        if(!visited[i]) {
            dfs(i);
            count++;
        }
    }
    return count;
}`,
  exercises: [
    {
      prompt: 'Implement connected components finding using DFS.',
      initialCode: `// Write your solution here
function findConnectedComponentsDFS(graph, numVertices) {
    // Implement DFS to find connected components
}`,
      solution: `function findConnectedComponentsDFS(graph, numVertices) {
    const visited = new Array(numVertices).fill(false);
    let count = 0;
    
    function dfs(u) {
        visited[u] = true;
        for(const v of graph[u]) {
            if(!visited[v]) {
                dfs(v);
            }
        }
    }
    
    for(let i = 0; i < numVertices; i++) {
        if(!visited[i]) {
            dfs(i);
            count++;
        }
    }
    return count;
}`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'What is a connected component in a graph?',
      options: [
        'A subset of vertices where each vertex is connected to every other vertex.',
        'A subset of vertices where each vertex is reachable from any other vertex in the subset.',
        'A subset of vertices with no edges between them.',
        'None of the above.',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. It does not require each vertex to be connected to every other vertex, just reachable.',
        'Correct.',
        'Incorrect. This describes an independent set.',
        'Incorrect.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const bipartiteGraphData: LessonContent = {
  title: 'Bipartite Graph Pattern',
  content: `<p>
    A bipartite graph is a graph whose vertices can be divided into two disjoint and independent sets U and V such that every edge connects a vertex in U to one in V. Bipartite graphs are useful in solving scheduling and matching problems.
  </p>
  <p>
    To check if a graph is bipartite, we can use BFS or DFS to attempt to color the graph using two colors such that no two adjacent vertices have the same color.
  </p>
  <p>
    The time complexity is O(V+E), where V is the number of vertices and E is the number of edges.
  </p>`,
  codeExample: `// Function to check if a graph is bipartite
function isBipartite(graph, numVertices) {
    const color = new Array(numVertices).fill(-1);
    
    function bfs(u) {
        const queue = [u];
        color[u] = 0;
        
        while(queue.length > 0) {
            const current = queue.shift();
            for(const v of graph[current]) {
                if(color[v] === -1) {
                    color[v] = color[current] ^ 1;
                    queue.push(v);
                } else if(color[v] === color[current]) {
                    return false;
                }
            }
        }
        return true;
    }
    
    for(let i = 0; i < numVertices; i++) {
        if(color[i] === -1) {
            if(!bfs(i)) {
                return false;
            }
        }
    }
    return true;
}`,
  exercises: [
    {
      prompt: 'Implement bipartite check using DFS.',
      initialCode: `// Write your solution here
function isBipartiteDFS(graph, numVertices) {
    // Implement DFS to check bipartiteness
}`,
      solution: `function isBipartiteDFS(graph, numVertices) {
    const color = new Array(numVertices).fill(-1);
    
    function dfs(u, c) {
        color[u] = c;
        for(const v of graph[u]) {
            if(color[v] === -1) {
                if(!dfs(v, c ^ 1)) {
                    return false;
                }
            } else if(color[v] === c) {
                return false;
            }
        }
        return true;
    }
    
    for(let i = 0; i < numVertices; i++) {
        if(color[i] === -1) {
            if(!dfs(i, 0)) {
                return false;
            }
        }
    }
    return true;
}`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which algorithm is suitable for checking bipartiteness?',
      options: ['DFS', 'BFS', 'Both DFS and BFS', 'Neither DFS nor BFS'],
      correctAnswer: 2,
      explanations: [
        'DFS is suitable.',
        'BFS is suitable.',
        'Correct. Both DFS and BFS can be used.',
        'Incorrect.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const shortestPathData: LessonContent = {
  title: 'Implementing Dijkstra and BFS for shortest path problems',
  content: `<p>
Shortest path problems involve finding the path with the minimum cost between two nodes in a graph. 
Two common algorithms for solving these problems are Dijkstra's algorithm and Breadth-First Search (BFS).
</p>

<h3>Dijkstra's Algorithm</h3>
<p>
Dijkstra's algorithm is used to find the shortest path from a source node to all other nodes in a graph with non-negative edge weights.
</p>
<p>
Time Complexity: O((V + E) log V) using a priority queue, where V is the number of vertices and E is the number of edges.
</p>

<h3>Breadth-First Search (BFS)</h3>
<p>
BFS is used to find the shortest path in an unweighted graph or a graph with uniform edge weights.
</p>
<p>
Time Complexity: O(V + E), where V is the number of vertices and E is the number of edges.
</p>`,
  codeExample: `# Dijkstra's Algorithm
import heapq

def dijkstra(graph, start):
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    heap = [(0, start)]
    
    while heap:
        current_distance, current_node = heapq.heappop(heap)
        if current_distance > distances[current_node]:
            continue
        for neighbor, weight in graph[current_node].items():
            distance = current_distance + weight
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(heap, (distance, neighbor))
    return distances

# BFS for Shortest Path in Unweighted Graph
from collections import deque

def bfs_shortest_path(graph, start, end):
    visited = set()
    queue = deque([(start, 0)])
    
    while queue:
        node, distance = queue.popleft()
        if node == end:
            return distance
        if node not in visited:
            visited.add(node)
            for neighbor in graph[node]:
                queue.append((neighbor, distance + 1))
    return -1`,
  exercises: [
    {
      prompt: 'Implement Dijkstra’s algorithm to find the shortest path from a source node in a weighted graph.',
      initialCode: `# Write your solution here
def dijkstra(graph, start):
    # Initialize distances
    distances = {}
    return distances`,
      solution: `# Solution for Dijkstra's Algorithm
import heapq

def dijkstra(graph, start):
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    heap = [(0, start)]
    
    while heap:
        current_distance, current_node = heapq.heappop(heap)
        if current_distance > distances[current_node]:
            continue
        for neighbor, weight in graph[current_node].items():
            distance = current_distance + weight
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(heap, (distance, neighbor))
    return distances`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement BFS to find the shortest path in an unweighted graph.',
      initialCode: `# Write your solution here
from collections import deque

def bfs_shortest_path(graph, start, end):
    # Initialize queue and visited set
    queue = deque()
    visited = set()
    return -1`,
      solution: `# Solution for BFS Shortest Path
from collections import deque

def bfs_shortest_path(graph, start, end):
    visited = set()
    queue = deque([(start, 0)])
    
    while queue:
        node, distance = queue.popleft()
        if node == end:
            return distance
        if node not in visited:
            visited.add(node)
            for neighbor in graph[node]:
                queue.append((neighbor, distance + 1))
    return -1`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Modify Dijkstra’s algorithm to return the actual shortest path, not just the distances.',
      initialCode: `# Write your solution here
def dijkstra_with_path(graph, start):
    # Initialize distances and paths
    distances = {}
    paths = {}
    return distances, paths`,
      solution: `# Solution for Dijkstra's Algorithm with Path
import heapq

def dijkstra_with_path(graph, start):
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    paths = {start: []}
    heap = [(0, start)]
    
    while heap:
        current_distance, current_node = heapq.heappop(heap)
        if current_distance > distances[current_node]:
            continue
        for neighbor, weight in graph[current_node].items():
            distance = current_distance + weight
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                paths[neighbor] = paths[current_node] + [neighbor]
                heapq.heappush(heap, (distance, neighbor))
    return distances, paths`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'Which algorithm is used to find the shortest path in a graph with non-negative edge weights?',
      options: [
        'BFS',
        'DFS',
        'Dijkstra’s Algorithm',
        'Bellman-Ford Algorithm',
      ],
      correctAnswer: 2,
      explanations: [
        'BFS is used for unweighted graphs.',
        'DFS is not suitable for finding shortest paths.',
        'Correct. Dijkstra’s Algorithm finds the shortest path in graphs with non-negative weights.',
        'Bellman-Ford can handle negative weights but is slower.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What is the time complexity of Dijkstra’s algorithm using a priority queue?',
      options: [
        'O(V^2)',
        'O(V + E)',
        'O((V + E) log V)',
        'O(V)',
      ],
      correctAnswer: 2,
      explanations: [
        'This is the time complexity without a priority queue.',
        'This is the time complexity of BFS.',
        'Correct. With a priority queue, it’s O((V + E) log V).',
        'This is incorrect.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'Which algorithm is more efficient for finding the shortest path in an unweighted graph?',
      options: [
        'Dijkstra’s Algorithm',
        'BFS',
        'DFS',
        'A* Search',
      ],
      correctAnswer: 1,
      explanations: [
        'Dijkstra’s can be used but is less efficient than BFS for unweighted graphs.',
        'Correct. BFS is more efficient for unweighted graphs.',
        'DFS does not find the shortest path.',
        'A* is suitable for graphs with heuristics.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const pathExistenceData: LessonContent = {
  title: 'Finding if Path Exists Between Nodes and All Paths Problems',
  content: `<p>
Path existence problems involve determining whether a path exists between two nodes in a graph. 
Common algorithms used to solve these problems include Depth-First Search (DFS) and Breadth-First Search (BFS).
</p>

<h3>Depth-First Search (DFS)</h3>
<p>
DFS explores as far as possible along each branch before backtracking and can be used to detect a path between two nodes.
</p>
<p>
Time Complexity: O(V + E), where V is the number of vertices and E is the number of edges.
</p>

<h3>Breadth-First Search (BFS)</h3>
<p>
BFS explores all nodes at the current depth level before moving on to nodes at the next depth level and can also find the shortest path in unweighted graphs.
</p>
<p>
Time Complexity: O(V + E), where V is the number of vertices and E is the number of edges.
</p>`,
  codeExample: `# DFS to Check Path Existence
def dfs_check_path(graph, start, end, visited=None):
    if visited is None:
        visited = set()
    if start == end:
        return True
    if start in visited:
        return False
    visited.add(start)
    for neighbor in graph[start]:
        if dfs_check_path(graph, neighbor, end, visited):
            return True
    return False

# BFS to Check Path Existence
from collections import deque

def bfs_check_path(graph, start, end):
    visited = set()
    queue = deque([start])
    
    while queue:
        node = queue.popleft()
        if node == end:
            return True
        if node not in visited:
            visited.add(node)
            for neighbor in graph[node]:
                queue.append(neighbor)
    return False`,
  exercises: [
    {
      prompt: 'Implement DFS to check if a path exists between two nodes in a graph.',
      initialCode: `# Write your solution here
def dfs_check_path(graph, start, end, visited=None):
    if visited is None:
        visited = set()
    # Implement DFS
    return False`,
      solution: `# Solution for DFS Path Existence
def dfs_check_path(graph, start, end, visited=None):
    if visited is None:
        visited = set()
    if start == end:
        return True
    if start in visited:
        return False
    visited.add(start)
    for neighbor in graph[start]:
        if dfs_check_path(graph, neighbor, end, visited):
            return True
    return False`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Implement BFS to check if a path exists between two nodes in a graph.',
      initialCode: `# Write your solution here
from collections import deque

def bfs_check_path(graph, start, end):
    visited = set()
    queue = deque([start])
    # Implement BFS
    return False`,
      solution: `# Solution for BFS Path Existence
from collections import deque

def bfs_check_path(graph, start, end):
    visited = set()
    queue = deque([start])
    
    while queue:
        node = queue.popleft()
        if node == end:
            return True
        if node not in visited:
            visited.add(node)
            for neighbor in graph[node]:
                queue.append(neighbor)
    return False`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Modify the DFS function to return all paths between two nodes in a graph.',
      initialCode: `# Write your solution here
def dfs_all_paths(graph, start, end, path=[], paths=[]):
    # Implement DFS to find all paths
    return paths`,
      solution: `# Solution for All Paths with DFS
def dfs_all_paths(graph, start, end, path=[], paths=[]):
    path = path + [start]
    if start == end:
        paths.append(path)
    for neighbor in graph[start]:
        if neighbor not in path:
            dfs_all_paths(graph, neighbor, end, path, paths)
    return paths`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'Which algorithm is more suitable for finding if a path exists in an unweighted graph?',
      options: [
        'DFS',
        'BFS',
        'Dijkstra’s Algorithm',
        'Both DFS and BFS',
      ],
      correctAnswer: 3,
      explanations: [
        'DFS can be used to find path existence.',
        'BFS can also be used to find path existence.',
        'Dijkstra’s is not necessary for unweighted graphs.',
        'Correct. Both DFS and BFS can be used.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What is the time complexity of BFS for checking path existence in a graph?',
      options: [
        'O(V)',
        'O(E)',
        'O(V + E)',
        'O(V^2)',
      ],
      correctAnswer: 2,
      explanations: [
        'This is incomplete; it should be O(V + E).',
        'This is incomplete; it should be O(V + E).',
        'Correct. BFS has a time complexity of O(V + E).',
        'This is incorrect.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'Can DFS be used to find the shortest path in an unweighted graph?',
      options: [
        'Yes, always.',
        'No, BFS is more appropriate.',
        'Yes, but only if the graph is a tree.',
        'No, DFS cannot find any paths.',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect; DFS does not guarantee the shortest path.',
        'Correct. BFS is more appropriate for finding the shortest path in unweighted graphs.',
        'DFS can find paths in trees, but it doesn’t guarantee the shortest path.',
        'This is incorrect; DFS can find paths.',
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

const courseScheduleData: LessonContent = {
  title: 'Course Schedule Pattern',
  content: `<p>
  Course prerequisite problems involve determining if it's possible to complete all courses given their dependencies. 
  This can be modeled using directed graphs, where nodes represent courses and edges represent prerequisites. 
  The goal is to detect if a valid course order exists, which involves checking for cycles in the graph.
  </p>
  
  <h3>Topological Sorting</h3>
  <p>
  Topological sort is used to linearly order the courses respecting all prerequisites. 
  If a topological order exists, the courses can be completed; otherwise, there's a cycle.
  </p>
  <p>
  Time Complexity: O(V + E), where V is the number of courses and E is the number of prerequisites.
  </p>`,
  codeExample: `# Topological Sort using DFS
  def canFinish(numCourses, prerequisites):
      from collections import defaultdict, deque
      graph = defaultdict(list)
      visited = [0] * numCourses  # 0: unvisited, 1: visiting, 2: visited
      
      # Build graph
      for course, prereq in prerequisites:
          graph[prereq].append(course)
      
      def hasCycle(node):
          if visited[node] == 1:
              return True
          if visited[node] == 2:
              return False
          
          visited[node] = 1
          for neighbor in graph[node]:
              if hasCycle(neighbor):
                  return True
          visited[node] = 2
          return False
      
      for node in range(numCourses):
          if visited[node] == 0 and hasCycle(node):
              return False
      return True
  `,
  exercises: [
    {
      prompt: 'Implement topological sort using Kahn’s algorithm.',
      initialCode: `# Write your solution here
      def kahn_topological_sort(graph, num_nodes):
          from collections import deque
          # Initialize indegrees and adjacency list
          return []`,
      solution: `# Solution using Kahn's Algorithm
      def kahn_topological_sort(graph, num_nodes):
          from collections import deque
          indegree = {node: 0 for node in graph}
          for node in graph:
              for neighbor in graph[node]:
                  indegree[neighbor] += 1
          
          queue = deque([node for node in graph if indegree[node] == 0])
          result = []
          
          while queue:
              node = queue.popleft()
              result.append(node)
              for neighbor in graph[node]:
                  indegree[neighbor] -= 1
                  if indegree[neighbor] == 0:
                      queue.append(neighbor)
          
          if len(result) == num_nodes:
              return result
          else:
              return []  # Cycle exists
      `,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What algorithm is used to detect if a course schedule is possible?',
      options: [
        'Dijkstra’s Algorithm',
        'Topological Sort',
        'DFS',
        'BFS',
      ],
      correctAnswer: 1,
      explanations: [
        'Dijkstra’s is for shortest paths.',
        'Correct. Topological sort detects cycle in DAG.',
        'DFS is part of topological sort.',
        'BFS is also used in topological sort (Kahn’s algorithm).',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const buildOrderData: LessonContent = {
  title: 'Build Order Problems',
  content: `<p>
  Build order problems involve determining the order of building components or executing tasks with dependencies. 
  This is similar to course scheduling and can be solved using topological sorting.
  </p>
  
  <h3>Application in Build Systems</h3>
  <p>
  In software development, build systems use dependency graphs to determine the order of compiling modules or building components.
  </p>
  <p>
  Time Complexity: O(V + E), where V is the number of tasks and E is the number of dependencies.
  </p>`,
  codeExample: `# Build Order using Kahn’s Algorithm
  def build_order(projects, dependencies):
      from collections import deque
      graph = {project: [] for project in projects}
      indegree = {project: 0 for project in projects}
      
      for prereq, course in dependencies:
          graph[prereq].append(course)
          indegree[course] += 1
      
      queue = deque([project for project in projects if indegree[project] == 0])
      result = []
      
      while queue:
          project = queue.popleft()
          result.append(project)
          for dependent in graph[project]:
              indegree[dependent] -= 1
              if indegree[dependent] == 0:
                  queue.append(dependent)
      
      if len(result) == len(projects):
          return result
      else:
          return None  # Cycle exists
  `,
  exercises: [
    {
      prompt: 'Implement a function to determine the build order given projects and dependencies.',
      initialCode: `# Write your solution here
      def build_order(projects, dependencies):
          # Build graph and find order
          return []`,
      solution: `# Solution for Build Order
      def build_order(projects, dependencies):
          from collections import deque
          graph = {project: [] for project in projects}
          indegree = {project: 0 for project in projects}
          
          for prereq, course in dependencies:
              graph[prereq].append(course)
              indegree[course] += 1
          
          queue = deque([project for project in projects if indegree[project] == 0])
          result = []
          
          while queue:
              project = queue.popleft()
              result.append(project)
              for dependent in graph[project]:
                  indegree[dependent] -= 1
                  if indegree[dependent] == 0:
                      queue.append(dependent)
          
          if len(result) == len(projects):
              return result
          else:
              return None  # Cycle exists
      `,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which algorithm is suitable for determining build order?',
      options: [
        'Dijkstra’s Algorithm',
        'Topological Sort',
        'DFS',
        'BFS',
      ],
      correctAnswer: 1,
      explanations: [
        'Dijkstra’s is for shortest paths.',
        'Correct. Topological sort applies to build order.',
        'DFS is part of topological sort.',
        'BFS is also used in topological sort (Kahn’s algorithm).',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const parallelCoursesData: LessonContent = {
  title: 'Parallel Execution',
  content: `<p>
  Parallel execution problems involve scheduling tasks with dependencies to minimize completion time. 
  This can be approached by finding the critical path in a Directed Acyclic Graph (DAG).
  </p>
  
  <h3>Critical Path Method</h3>
  <p>
  The critical path is the longest path in the DAG, determining the minimum time required to complete all tasks.
  </p>
  <p>
  Time Complexity: O(V + E), where V is the number of tasks and E is the number of dependencies.
  </p>`,
  codeExample: `# Finding Critical Path
  def critical_path(graph, start, end):
      # Step 1: Topological sort
      order = topological_sort(graph)
      
      # Step 2: Calculate longest path from start to end
      dist = {node: 0 for node in graph}
      for node in order:
          for neighbor in graph[node]:
              if dist[neighbor] < dist[node] + 1:
                  dist[neighbor] = dist[node] + 1
      
      return dist[end]
  
  def topological_sort(graph):
      from collections import deque
      indegree = {node: 0 for node in graph}
      for node in graph:
          for neighbor in graph[node]:
              indegree[neighbor] += 1
              
      queue = deque([node for node in graph if indegree[node] == 0])
      result = []
      
      while queue:
          node = queue.popleft()
          result.append(node)
          for neighbor in graph[node]:
              indegree[neighbor] -= 1
              if indegree[neighbor] == 0:
                  queue.append(neighbor)
                  
      return result
  `,
  exercises: [
    {
      prompt: 'Implement a function to find the minimum time to complete tasks with dependencies.',
      initialCode: `# Write your solution here
      def min_time_to_complete_tasks(graph, start, end):
          # Find critical path
          return 0`,
      solution: `# Solution for Minimum Time to Complete Tasks
      def min_time_to_complete_tasks(graph, start, end):
          # Step 1: Topological sort
          order = topological_sort(graph)
          
          # Step 2: Calculate longest path from start to end
          dist = {node: 0 for node in graph}
          for node in order:
              for neighbor in graph[node]:
                  if dist[neighbor] < dist[node] + 1:
                      dist[neighbor] = dist[node] + 1
          
          return dist[end]
      
      def topological_sort(graph):
          from collections import deque
          indegree = {node: 0 for node in graph}
          for node in graph:
              for neighbor in graph[node]:
                  indegree[neighbor] += 1
                  
          queue = deque([node for node in graph if indegree[node] == 0])
          result = []
          
          while queue:
              node = queue.popleft()
              result.append(node)
              for neighbor in graph[node]:
                  indegree[neighbor] -= 1
                  if indegree[neighbor] == 0:
                      queue.append(neighbor)
                  
          return result
      `,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'What is the critical path in task scheduling?',
      options: [
        'The shortest path in the graph.',
        'The path with the least number of tasks.',
        'The longest path in the graph.',
        'The path with the highest number of dependencies.',
      ],
      correctAnswer: 2,
      explanations: [
        'The critical path is not necessarily the shortest path.',
        'Incorrect. It is the longest path.',
        'Correct. The critical path determines the minimum completion time.',
        'Incorrect. It is about the duration, not the number of dependencies.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const redundantConnectionData: LessonContent = {
  title: 'Redundant Connection Pattern',
  content: `<p>
  A redundant connection in a graph is an edge that creates a cycle. 
  Union-Find helps detect such edges by grouping nodes into sets and checking if an edge connects nodes already in the same set.
  </p>`,
  codeExample: `function findRedundantConnection(n: number, edges: number[][]): number[] {
      const parent: number[] = Array(n + 1).fill(0).map((_, i) => i);
      const rank: number[] = Array(n + 1).fill(1);
      
      function find(u: number): number {
          if (parent[u] !== u) {
              parent[u] = find(parent[u]);
          }
          return parent[u];
      }
      
      function union(u: number, v: number): boolean {
          const pu = find(u);
          const pv = find(v);
          
          if (pu === pv) return false;
          
          if (rank[pu] > rank[pv]) {
              parent[pv] = pu;
              rank[pu] += rank[pv];
          } else {
              parent[pu] = pv;
              rank[pv] += rank[pu];
          }
          return true;
      }
      
      for (const [u, v] of edges) {
          if (!union(u, v)) {
              return [u, v];
          }
      }
      return [];
  }`,
  exercises: [
    {
      prompt: 'Implement the Union-Find data structure with path compression and union by rank.',
      initialCode: `class UnionFind {
    constructor(n: number) {}
    find(u: number): number {}
    union(u: number, v: number): boolean {}
  }`,
      solution: `class UnionFind {
    private parent: number[];
    private rank: number[];
    
    constructor(n: number) {
        this.parent = Array(n).fill(0).map((_, i) => i);
        this.rank = Array(n).fill(1);
    }
    
    find(u: number): number {
        if (this.parent[u] !== u) {
            this.parent[u] = this.find(this.parent[u]);
        }
        return this.parent[u];
    }
    
    union(u: number, v: number): boolean {
        const pu = this.find(u);
        const pv = this.find(v);
        
        if (pu === pv) return false;
        
        if (this.rank[pu] > this.rank[pv]) {
            this.parent[pv] = pu;
            this.rank[pu] += this.rank[pv];
        } else {
            this.parent[pu] = pv;
            this.rank[pv] += this.rank[pu];
        }
        return true;
    }
}`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Find the redundant connection in a given list of edges.',
      initialCode: `function findRedundantConnection(n: number, edges: number[][]): number[] {
    // Implement using Union-Find
}`,
      solution: `function findRedundantConnection(n: number, edges: number[][]): number[] {
    const parent: number[] = Array(n + 1).fill(0).map((_, i) => i);
    const rank: number[] = Array(n + 1).fill(1);
    
    function find(u: number): number {
        if (parent[u] !== u) {
            parent[u] = find(parent[u]);
        }
        return parent[u];
    }
    
    function union(u: number, v: number): boolean {
        const pu = find(u);
        const pv = find(v);
        
        if (pu === pv) return false;
        
        if (rank[pu] > rank[pv]) {
            parent[pv] = pu;
            rank[pu] += rank[pv];
        } else {
            parent[pu] = pv;
            rank[pv] += rank[pu];
        }
        return true;
    }
    
    for (const [u, v] of edges) {
        if (!union(u, v)) {
            return [u, v];
        }
    }
    return [];
}`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the purpose of Union-Find in detecting redundant connections?',
      options: [
        'To find the shortest path between nodes',
        'To group nodes into connected components',
        'To calculate the number of provinces',
        'To merge accounts based on shared emails',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Union-Find is not used for finding the shortest path.',
        'Correct. Union-Find helps group nodes into connected components to detect cycles.',
        'Incorrect. While Union-Find can count provinces, it’s not its primary purpose in redundant connection detection.',
        'Incorrect. That is for a different pattern.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const provinceCountingData: LessonContent = {
  title: 'Province Counting Pattern',
  content: `<p>
  Counting provinces involves finding the number of connected components in a graph. 
  Union-Find efficiently groups nodes and counts the distinct sets.
  </p>`,
  codeExample: `function countProvinces(n: number, connections: number[][]): number {
      const parent: number[] = Array(n).fill(0).map((_, i) => i);
      
      function find(u: number): number {
          if (parent[u] !== u) {
              parent[u] = find(parent[u]);
          }
          return parent[u];
      }
      
      for (const [u, v] of connections) {
          const pu = find(u);
          const pv = find(v);
          if (pu !== pv) {
              parent[pu] = pv;
          }
      }
      
      const provinces = new Set<number>();
      for (let i = 0; i < n; i++) {
          provinces.add(find(i));
      }
      return provinces.size;
  }`,
  exercises: [
    {
      prompt: 'Implement Union-Find to count connected components in a graph.',
      initialCode: `function countProvinces(n: number, connections: number[][]): number {
    // Implement using Union-Find
}`,
      solution: `function countProvinces(n: number, connections: number[][]): number {
    const parent: number[] = Array(n).fill(0).map((_, i) => i);
    
    function find(u: number): number {
        if (parent[u] !== u) {
            parent[u] = find(parent[u]);
        }
        return parent[u];
    }
    
    for (const [u, v] of connections) {
        const pu = find(u);
        const pv = find(v);
        if (pu !== pv) {
            parent[pu] = pv;
        }
    }
    
    const provinces = new Set<number>();
    for (let i = 0; i < n; i++) {
        provinces.add(find(i));
    }
    return provinces.size;
}`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Modify the function to handle large inputs efficiently.',
      initialCode: `function countProvincesOptimized(n: number, connections: number[][]): number {
    // Optimize for large inputs
}`,
      solution: `function countProvincesOptimized(n: number, connections: number[][]): number {
    const parent: number[] = Array(n).fill(0).map((_, i) => i);
    const rank: number[] = Array(n).fill(1);
    
    function find(u: number): number {
        if (parent[u] !== u) {
            parent[u] = find(parent[u]);
        }
        return parent[u];
    }
    
    function union(u: number, v: number): void {
        const pu = find(u);
        const pv = find(v);
        
        if (pu === pv) return;
        
        if (rank[pu] > rank[pv]) {
            parent[pv] = pu;
            rank[pu] += rank[pv];
        } else {
            parent[pu] = pv;
            rank[pv] += rank[pu];
        }
    }
    
    for (const [u, v] of connections) {
        union(u, v);
    }
    
    const provinces = new Set<number>();
    for (let i = 0; i < n; i++) {
        provinces.add(find(i));
    }
    return provinces.size;
}`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'How does Union-Find help in counting provinces?',
      options: [
        'By finding the shortest path between provinces',
        'By grouping nodes into connected components',
        'By detecting redundant connections',
        'By merging accounts based on shared emails',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Union-Find is not used for finding the shortest path.',
        'Correct. Union-Find groups nodes into connected components to count provinces.',
        'Incorrect. That is for a different pattern.',
        'Incorrect. That is for a different pattern.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const accountMergeData: LessonContent = {
  title: 'Account Merge Pattern',
  content: `<p>
  Merging accounts based on shared emails can be modeled using Union-Find to group accounts into single entities.
  </p>`,
  codeExample: `function accountsMerge(accounts: string[][]): string[][] {
      const emailToIndex: { [email: string]: number } = {};
      const parent: number[] = [];
      
      function find(u: number): number {
          if (parent[u] !== u) {
              parent[u] = find(parent[u]);
          }
          return parent[u];
      }
      
      function union(u: number, v: number): void {
          const pu = find(u);
          const pv = find(v);
          if (pu !== pv) {
              parent[pu] = pv;
          }
      }
      
      // Build email to index mapping
      let index = 0;
      for (const account of accounts) {
          for (let i = 1; i < account.length; i++) {
              const email = account[i];
              if (!emailToIndex.hasOwnProperty(email)) {
                  emailToIndex[email] = index++;
              }
          }
      }
      
      // Initialize parent array
      parent.length = index;
      for (let i = 0; i < index; i++) {
          parent[i] = i;
      }
      
      // Union emails from the same account
      for (const account of accounts) {
          const firstEmailIndex = emailToIndex[account[1]];
          for (let i = 2; i < account.length; i++) {
              const emailIndex = emailToIndex[account[i]];
              union(firstEmailIndex, emailIndex);
          }
      }
      
      // Group emails by root parent
      const groups: { [root: number]: string[] } = {};
      for (const email in emailToIndex) {
          const root = find(emailToIndex[email]);
          if (!groups.hasOwnProperty(root)) {
              groups[root] = [];
          }
          groups[root].push(email);
      }
      
      // Sort emails and prepend the name
      const result: string[][] = [];
      for (const group in groups) {
          const name = accounts[Number(group)].[0];
          const sortedEmails = groups[group].sort();
          result.push([name, ...sortedEmails]);
      }
      
      return result;
  }`,
  exercises: [
    {
      prompt: 'Implement the account merge function using Union-Find.',
      initialCode: `function accountsMerge(accounts: string[][]): string[][] {
    // Implement using Union-Find
}`,
      solution: `function accountsMerge(accounts: string[][]): string[][] {
    const emailToIndex: { [email: string]: number } = {};
    const parent: number[] = [];
    
    function find(u: number): number {
        if (parent[u] !== u) {
            parent[u] = find(parent[u]);
        }
        return parent[u];
    }
    
    function union(u: number, v: number): void {
        const pu = find(u);
        const pv = find(v);
        if (pu !== pv) {
            parent[pu] = pv;
        }
    }
    
    // Build email to index mapping
    let index = 0;
    for (const account of accounts) {
        for (let i = 1; i < account.length; i++) {
            const email = account[i];
            if (!emailToIndex.hasOwnProperty(email)) {
                emailToIndex[email] = index++;
            }
        }
    }
    
    // Initialize parent array
    parent.length = index;
    for (let i = 0; i < index; i++) {
        parent[i] = i;
    }
    
    // Union emails from the same account
    for (const account of accounts) {
        const firstEmailIndex = emailToIndex[account[1]];
        for (let i = 2; i < account.length; i++) {
            const emailIndex = emailToIndex[account[i]];
            union(firstEmailIndex, emailIndex);
        }
    }
    
    // Group emails by root parent
    const groups: { [root: number]: string[] } = {};
    for (const email in emailToIndex) {
        const root = find(emailToIndex[email]);
        if (!groups.hasOwnProperty(root)) {
            groups[root] = [];
        }
        groups[root].push(email);
    }
    
    // Sort emails and prepend the name
    const result: string[][] = [];
    for (const group in groups) {
        const name = accounts[Number(group)].[0];
        const sortedEmails = groups[group].sort();
        result.push([name, ...sortedEmails]);
    }
    
    return result;
}`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Handle edge cases like duplicate emails and multiple account overlaps.',
      initialCode: `function accountsMergeEdgeCases(accounts: string[][]): string[][] {
    // Handle edge cases
}`,
      solution: `function accountsMergeEdgeCases(accounts: string[][]): string[][] {
    const emailToIndex: { [email: string]: number } = {};
    const parent: number[] = [];
    const emailToName: { [email: string]: string } = {};
    
    function find(u: number): number {
        if (parent[u] !== u) {
            parent[u] = find(parent[u]);
        }
        return parent[u];
    }
    
    function union(u: number, v: number): void {
        const pu = find(u);
        const pv = find(v);
        if (pu !== pv) {
            parent[pu] = pv;
        }
    }
    
    // Build email to index and name mapping
    let index = 0;
    for (const account of accounts) {
        const name = account[0];
        for (let i = 1; i < account.length; i++) {
            const email = account[i];
            if (!emailToIndex.hasOwnProperty(email)) {
                emailToIndex[email] = index++;
                emailToName[email] = name;
            }
        }
    }
    
    // Initialize parent array
    parent.length = index;
    for (let i = 0; i < index; i++) {
        parent[i] = i;
    }
    
    // Union emails from the same account
    for (const account of accounts) {
        const firstEmailIndex = emailToIndex[account[1]];
        for (let i = 2; i < account.length; i++) {
            const emailIndex = emailToIndex[account[i]];
            union(firstEmailIndex, emailIndex);
        }
    }
    
    // Group emails by root parent
    const groups: { [root: number]: string[] } = {};
    for (const email in emailToIndex) {
        const root = find(emailToIndex[email]);
        if (!groups.hasOwnProperty(root)) {
            groups[root] = [];
        }
        groups[root].push(email);
    }
    
    // Sort emails and prepend the name
    const result: string[][] = [];
    for (const group in groups) {
        const name = emailToName[groups[group][0]];
        const sortedEmails = groups[group].sort();
        result.push([name, ...sortedEmails]);
    }
    
    return result;
}`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'How is the account merge problem modeled using Union-Find?',
      options: [
        'As a shortest path problem',
        'As a cycle detection problem',
        'As a connected components problem',
        'As a tree traversal problem',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. It is not modeled as a shortest path problem.',
        'Incorrect. While cycles can be detected, the primary model is connected components.',
        'Correct. Accounts are grouped into connected components based on shared emails.',
        'Incorrect. It is not primarily a tree traversal problem.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const wordTransformationData: LessonContent = {
  title: 'Word Transformation',
  content: `<p>
  Word ladder problems involve transforming one word into another by changing one letter at a time, with each intermediate word being valid. 
  This can be solved using BFS to find the shortest transformation sequence.
  </p>`,
  codeExample: `function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
      const wordSet = new Set(wordList);
      if (!wordSet.has(endWord)) return 0;
      
      const queue: [string, number][] = [[beginWord, 1]];
      const visited: Set<string> = new Set([beginWord]);
      
      while (queue.length > 0) {
          const [currentWord, steps] = queue.shift()!;
          if (currentWord === endWord) return steps;
          
          for (let i = 0; i < currentWord.length; i++) {
              const chars = currentWord.split('');
              for (let c = 'a'; c <= 'z'; c++) {
                  chars[i] = c;
                  const nextWord = chars.join('');
                  if (wordSet.has(nextWord) && !visited.has(nextWord)) {
                      visited.add(nextWord);
                      queue.push([nextWord, steps + 1]);
                  }
              }
          }
      }
      return 0;
  }`,
  exercises: [
    {
      prompt: 'Implement the word ladder algorithm to find the shortest transformation sequence.',
      initialCode: `function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    // Implement using BFS
}`,
      solution: `function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;
    
    const queue: [string, number][] = [[beginWord, 1]];
    const visited: Set<string> = new Set([beginWord]);
    
    while (queue.length > 0) {
        const [currentWord, steps] = queue.shift()!;
        if (currentWord === endWord) return steps;
        
        for (let i = 0; i < currentWord.length; i++) {
            const chars = currentWord.split('');
            for (let c = 'a'; c <= 'z'; c++) {
                chars[i] = c;
                const nextWord = chars.join('');
                if (wordSet.has(nextWord) && !visited.has(nextWord)) {
                    visited.add(nextWord);
                    queue.push([nextWord, steps + 1]);
                }
            }
        }
    }
    return 0;
}`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which algorithm is best suited for solving word ladder problems?',
      options: [
        'DFS',
        'BFS',
        'Dijkstra’s Algorithm',
        'A* Search',
      ],
      correctAnswer: 1,
      explanations: [
        'DFS can get stuck in long paths.',
        'Correct. BFS finds the shortest path in unweighted graphs.',
        'Dijkstra’s is unnecessary for unweighted graphs.',
        'A* is suitable for weighted graphs with heuristics.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const graphCloneData: LessonContent = {
  title: 'Graph Clone Pattern',
  content: `<p>
  Cloning a graph involves creating a deep copy of the graph, ensuring that all nodes and edges are duplicated without referencing the original graph.
  This can be achieved using DFS or BFS.
  </p>`,
  codeExample: `class Node {
    val: number;
    neighbors: Node[];
    constructor(val?: number) {
        this.val = (val === undefined ? 0 : val);
        this.neighbors = [];
    }
}

function cloneGraph(node: Node | null): Node | null {
    if (!node) return null;
    
    const visited: { [key: number]: Node } = {};
    
    function dfs(original: Node): Node {
        if (visited[original.val]) return visited[original.val];
        
        const clone = new Node(original.val);
        visited[original.val] = clone;
        
        for (const neighbor of original.neighbors) {
            clone.neighbors.push(dfs(neighbor));
        }
        
        return clone;
    }
    
    return dfs(node);
}`,
  exercises: [
    {
      prompt: 'Implement a function to clone a graph using DFS.',
      initialCode: `function cloneGraph(node: Node | null): Node | null {
    // Implement using DFS
}`,
      solution: `function cloneGraph(node: Node | null): Node | null {
    if (!node) return null;
    
    const visited: { [key: number]: Node } = {};
    
    function dfs(original: Node): Node {
        if (visited[original.val]) return visited[original.val];
        
        const clone = new Node(original.val);
        visited[original.val] = clone;
        
        for (const neighbor of original.neighbors) {
            clone.neighbors.push(dfs(neighbor));
        }
        
        return clone;
    }
    
    return dfs(node);
}`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the best approach to clone a graph?',
      options: [
        'DFS',
        'BFS',
        'Both DFS and BFS',
        'Neither DFS nor BFS',
      ],
      correctAnswer: 2,
      explanations: [
        'DFS can be used to traverse and clone the graph.',
        'BFS can also be used to traverse and clone the graph.',
        'Correct. Both DFS and BFS are suitable for cloning a graph.',
        'Incorrect. Both DFS and BFS can be used.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const minHeightTreesData: LessonContent = {
  title: 'Minimum Height Trees',
  content: `<p>
  Finding minimum height trees involves identifying the centroids of a tree. 
  Centroids are nodes that, when removed, divide the tree into subtrees of minimal size.
  </p>`,
  codeExample: `function findMinHeightTrees(n: number, edges: number[][]): number[] {
      if (n === 1) return [0];
      
      const adj: number[][] = Array(n).fill([]).map(() => []);
      const degree: number[] = Array(n).fill(0);
      
      for (const [u, v] of edges) {
          adj[u].push(v);
          adj[v].push(u);
          degree[u]++;
          degree[v]++;
      }
      
      const leaves: number[] = [];
      for (let i = 0; i < n; i++) {
          if (degree[i] === 1) leaves.push(i);
      }
      
      let remaining = n;
      while (remaining > 2) {
          const size = leaves.length;
          remaining -= size;
          for (const u of leaves) {
              for (const v of adj[u]) {
                  degree[v]--;
                  if (degree[v] === 1) leaves.push(v);
              }
          }
          leaves.splice(0, size);
      }
      
      return leaves;
  }`,
  exercises: [
    {
      prompt: 'Implement a function to find the minimum height trees in a given tree.',
      initialCode: `function findMinHeightTrees(n: number, edges: number[][]): number[] {
    // Implement to find centroids
}`,
      solution: `function findMinHeightTrees(n: number, edges: number[][]): number[] {
    if (n === 1) return [0];
    
    const adj: number[][] = Array(n).fill([]).map(() => []);
    const degree: number[] = Array(n).fill(0);
    
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
        degree[u]++;
        degree[v]++;
    }
    
    const leaves: number[] = [];
    for (let i = 0; i < n; i++) {
        if (degree[i] === 1) leaves.push(i);
    }
    
    let remaining = n;
    while (remaining > 2) {
        const size = leaves.length;
        remaining -= size;
        for (const u of leaves) {
            for (const v of adj[u]) {
                degree[v]--;
                if (degree[v] === 1) leaves.push(v);
            }
        }
        leaves.splice(0, size);
    }
    
    return leaves;
}`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is a centroid in a tree?',
      options: [
        'A node with the highest value',
        'A node that minimizes the height of the tree',
        'A node with the most neighbors',
        'A node in the middle of the tree',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Centroids are not about node values.',
        'Correct. Centroids minimize the height when removed.',
        'Incorrect. Centroids are not necessarily high-degree nodes.',
        'Incorrect. Centroids are about subtree sizes, not position.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const stateTrackingData: LessonContent = {
  title: 'State Tracking',
  content: `<p>
  State tracking is crucial in graph traversal to manage visited nodes, prevent infinite loops, and ensure correct processing in algorithms like DFS and BFS.
  </p>`,
  codeExample: `function dfs(graph: number[][], start: number): void {
      const visited: boolean[] = new Array(graph.length).fill(false);
      function traverse(node: number): void {
          visited[node] = true;
          console.log(node);
          for (const neighbor of graph[node]) {
              if (!visited[neighbor]) {
                  traverse(neighbor);
              }
          }
      }
      traverse(start);
  }`,
  exercises: [
    {
      prompt: 'Implement DFS with state tracking to avoid revisiting nodes.',
      initialCode: `function dfs(graph: number[][], start: number): void {
    // Implement DFS with visited tracking
}`,
      solution: `function dfs(graph: number[][], start: number): void {
    const visited: boolean[] = new Array(graph.length).fill(false);
    function traverse(node: number): void {
        visited[node] = true;
        console.log(node);
        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                traverse(neighbor);
            }
        }
    }
    traverse(start);
}`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Why is state tracking important in graph traversal?',
      options: [
        'To increase the speed of traversal',
        'To prevent infinite loops and ensure each node is processed correctly',
        'To mark nodes with the highest priority',
        'To color nodes for visualization',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. State tracking primarily prevents infinite loops.',
        'Correct. It prevents revisiting nodes and ensures correct traversal.',
        'Incorrect. State tracking is not about priority marking.',
        'Incorrect. Coloring is not related to state tracking in traversal.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const optimizationData: LessonContent = {
  title: 'Space-Time Optimization',
  content: `<p>
  Optimizing graph algorithms involves enhancing efficiency in terms of time and space, such as choosing appropriate data structures and reducing algorithm complexity.
  </p>`,
  codeExample: `function bfsLevelOrder(graph: number[][], start: number): number[] {
      const visited: boolean[] = new Array(graph.length).fill(false);
      const queue: number[] = [start];
      visited[start] = true;
      const levels: number[] = new Array(graph.length).fill(0);
      let level = 1;
      while (queue.length > 0) {
          const levelSize = queue.length;
          for (let i = 0; i < levelSize; i++) {
              const current = queue.shift()!;
              levels[current] = level;
              for (const neighbor of graph[current]) {
                  if (!visited[neighbor]) {
                      visited[neighbor] = true;
                      queue.push(neighbor);
                  }
              }
          }
          level++;
      }
      return levels;
  }`,
  exercises: [
    {
      prompt: 'Optimize BFS to track the level of each node in a graph.',
      initialCode: `function bfsLevelOrder(graph: number[][], start: number): number[] {
    // Optimize BFS for level-wise traversal
}`,
      solution: `function bfsLevelOrder(graph: number[][], start: number): number[] {
    const visited: boolean[] = new Array(graph.length).fill(false);
    const queue: number[] = [start];
    visited[start] = true;
    const levels: number[] = new Array(graph.length).fill(0);
    let level = 1;
    while (queue.length > 0) {
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const current = queue.shift()!;
            levels[current] = level;
            for (const neighbor of graph[current]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
        level++;
    }
    return levels;
}`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a common optimization technique in graph algorithms?',
      options: [
        'Using a priority queue in DFS',
        'Increasing recursion depth',
        'Reducing space complexity by avoiding visited arrays',
        'Choosing appropriate data structures for adjacency representation',
      ],
      correctAnswer: 3,
      explanations: [
        'Incorrect. Priority queues are typically used in Dijkstra’s algorithm, not DFS.',
        'Incorrect. Increasing recursion depth can lead to stack overflow.',
        'Incorrect. Avoiding visited arrays can lead to incorrect traversal.',
        'Correct. Choosing appropriate data structures can optimize space and time.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const edgeCasesData: LessonContent = {
  title: 'Edge Cases',
  content: `<p>
  Handling edge cases in graph problems ensures robustness, such as managing empty graphs, single-node graphs, and disconnected components.
  </p>`,
  codeExample: `function isGraphEmpty(graph: number[][]): boolean {
      for (const neighbors of graph) {
          if (neighbors.length > 0) {
              return false;
          }
      }
      return true;
  }`,
  exercises: [
    {
      prompt: 'Implement a function to check if a graph is empty or contains disconnected components.',
      initialCode: `function checkGraphEdgeCases(graph: number[][]): string {
    // Handle empty graphs and disconnected components
}`,
      solution: `function checkGraphEdgeCases(graph: number[][]): string {
    const visited: boolean[] = new Array(graph.length).fill(false);
    const queue: number[] = [];
    let hasDisconnected = false;
    
    // Check for empty graph
    let isEmpty = true;
    for (const neighbors of graph) {
        if (neighbors.length > 0) {
            isEmpty = false;
            break;
        }
    }
    if (isEmpty) return 'Empty graph';
    
    // Perform BFS to check for disconnected components
    for (let i = 0; i < graph.length; i++) {
        if (!visited[i]) {
            if (queue.length > 0) {
                hasDisconnected = true;
                break;
            }
            queue.push(i);
            visited[i] = true;
            while (queue.length > 0) {
                const current = queue.shift()!;
                for (const neighbor of graph[current]) {
                    if (!visited[neighbor]) {
                        visited[neighbor] = true;
                        queue.push(neighbor);
                    }
                }
            }
        }
    }
    if (hasDisconnected) return 'Graph has disconnected components';
    return 'Graph is connected';
}`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is an example of an edge case in graph problems?',
      options: [
        'A graph with a single node',
        'A graph with all nodes connected',
        'A graph with weighted edges',
        'A graph with cycles',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct. A single-node graph is a common edge case.',
        'Incorrect. All nodes connected is a standard case.',
        'Incorrect. Weighted edges are part of general graph problems.',
        'Incorrect. Cycles are part of general graph structures.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const graphLessons: Record<string, LessonContent> = {
  'graph-concepts': basicGraphConceptsData,
  'graph-representation': graphRepresentationData,
  'graph-building': buildingGraphsData,
  'graph-properties': graphPropertiesData,
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
