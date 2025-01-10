import { CheatSheetItem, createCheatSheet, OperationTypes } from '@/common/commonCheatSheet';

export const graphCheatSheet: CheatSheetItem[] = [
  // CREATE
  createCheatSheet(
    'Creating an adjacency list',
    `graph = {
    "A": ["B", "C"],
    "B": ["A", "D", "E"],
    "C": ["A", "F"],
    "D": ["B"],
    "E": ["B", "F"],
    "F": ["C", "E"]
}`,
    'Initializes a graph using an adjacency list representation.',
    OperationTypes.Create,
    'O(V + E)',
    'V is the number of vertices, E is the number of edges. Make sure each vertex has a list, even if empty.',
  ),

  // ADD
  createCheatSheet(
    'Adding a vertex',
    'graph["G"] = []',
    'Adds a new vertex "G" to the graph with no connected edges.',
    OperationTypes.Add,
    'O(1)',
    'Ensure the key "G" does not already exist, or its contents might be overwritten.',
  ),
  createCheatSheet(
    'Adding an edge',
    'graph["A"].append("G")',
    'Adds a new edge from vertex "A" to vertex "G". For undirected graphs, also append "A" to graph["G"].',
    OperationTypes.Add,
    'O(1)',
    'If adding to an undirected graph, remember to update both adjacency lists.',
  ),

  // REMOVE
  createCheatSheet(
    'Removing a vertex',
    `del graph["G"]
for vertex in graph:
    if "G" in graph[vertex]:
        graph[vertex].remove("G")`,
    'Removes vertex "G" and all associated edges from the graph.',
    OperationTypes.Remove,
    'O(V + E)',
    'Iterate over all vertices to remove references to "G".',
  ),
  createCheatSheet(
    'Removing an edge',
    'graph["A"].remove("G")',
    'Removes the edge from vertex "A" to vertex "G". For undirected graphs, also remove "A" from graph["G"].',
    OperationTypes.Remove,
    'O(1)',
    'Raises a ValueError if "G" is not in graph["A"]. Check for membership first.',
  ),

  // TRAVERSAL
  createCheatSheet(
    'Breadth-First Search (BFS)',
    `from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    while queue:
        vertex = queue.popleft()
        if vertex not in visited:
            print(vertex)
            visited.add(vertex)
            for neighbor in graph[vertex]:
                if neighbor not in visited:
                    queue.append(neighbor)`,
    'Performs a BFS traversal starting from the given vertex, visiting neighbors in a queue-based manner.',
    OperationTypes.Traversal,
    'O(V + E)',
    'Useful for finding shortest paths in unweighted graphs. Avoid repeated visits by tracking visited vertices.',
  ),
  createCheatSheet(
    'Depth-First Search (DFS)',
    `def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    visited.add(start)
    print(start)
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)
    return visited`,
    'Performs a DFS traversal starting from the given vertex, visiting neighbors recursively.',
    OperationTypes.Traversal,
    'O(V + E)',
    'Can use a stack-based iteration instead of recursion if stack depth is a concern.',
  ),

  // SEARCH
  createCheatSheet(
    'Finding the shortest path using BFS',
    `from collections import deque

def shortest_path(graph, start, end):
    queue = deque([(start, [start])])
    visited = set([start])
    while queue:
        vertex, path = queue.popleft()
        for neighbor in graph[vertex]:
            if neighbor not in visited:
                visited.add(neighbor)
                if neighbor == end:
                    return path + [neighbor]
                queue.append((neighbor, path + [neighbor]))`,
    'Uses BFS to find the shortest path between two vertices in an unweighted graph.',
    OperationTypes.Search,
    'O(V + E)',
    'Stops as soon as the end vertex is found. Keep track of paths in the queue to reconstruct the route.',
  ),
  createCheatSheet(
    'Detecting a cycle in an undirected graph',
    `def has_cycle(graph):
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
    'Checks for cycles by running DFS. If a visited neighbor is not the parent, a cycle exists.',
    OperationTypes.Utility,
    'O(V + E)',
    'Only relevant for undirected graphs. For directed graphs, the cycle check differs.',
  ),
  createCheatSheet(
    'Topological sort using DFS',
    `def topological_sort(graph):
    visited = set()
    stack = []

    def dfs(vertex):
        visited.add(vertex)
        for neighbor in graph[vertex]:
            if neighbor not in visited:
                dfs(neighbor)
        stack.append(vertex)

    for vertex in graph:
        if vertex not in visited:
            dfs(vertex)
    return stack[::-1]`,
    'Produces a topological ordering of vertices in a Directed Acyclic Graph (DAG).',
    OperationTypes.Utility,
    'O(V + E)',
    'If the graph has a cycle, no valid topological order exists.',
  ),
  createCheatSheet(
    "Dijkstra's algorithm for shortest paths",
    `import heapq

def dijkstra(graph, start):
    distances = {vertex: float("inf") for vertex in graph}
    distances[start] = 0
    pq = [(0, start)]

    while pq:
        current_distance, current_vertex = heapq.heappop(pq)
        if current_distance > distances[current_vertex]:
            continue
        
        for neighbor, weight in graph[current_vertex].items():
            distance = current_distance + weight
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(pq, (distance, neighbor))

    return distances`,
    'Finds the shortest distance from a start vertex to all others in a weighted graph (non-negative weights).',
    OperationTypes.Search,
    'O((V + E) log V)',
    'Graph should store neighbors in a dict-like structure, e.g. graph[u] = {v: w, ...}.',
  ),
  createCheatSheet(
    "Bellman-Ford algorithm for shortest path",
    `def bellman_ford(graph, start):
    distances = {vertex: float("inf") for vertex in graph}
    distances[start] = 0

    for _ in range(len(graph) - 1):
        for u in graph:
            for v, weight in graph[u].items():
                if distances[u] + weight < distances[v]:
                    distances[v] = distances[u] + weight

    # Check for negative-weight cycles
    for u in graph:
        for v, weight in graph[u].items():
            if distances[u] + weight < distances[v]:
                raise ValueError("Graph contains a negative-weight cycle")

    return distances`,
    'Calculates shortest distances in a weighted graph, even with negative edges (but no negative cycles).',
    OperationTypes.Search,
    'O(V * E)',
    'Raise an exception if a negative cycle is detected.',
  ),
  createCheatSheet(
    'Floyd-Warshall algorithm for all-pairs shortest paths',
    `def floyd_warshall(graph):
    dist = {u: {v: float("inf") for v in graph} for u in graph}
    for u in graph:
        dist[u][u] = 0
        for v, weight in graph[u].items():
            dist[u][v] = weight

    for k in graph:
        for i in graph:
            for j in graph:
                if dist[i][j] > dist[i][k] + dist[k][j]:
                    dist[i][j] = dist[i][k] + dist[k][j]
    
    return dist`,
    'Computes the shortest paths between every pair of vertices in a weighted graph (handles positive or negative edges, no negative cycles).',
    OperationTypes.Search,
    'O(V^3)',
    'Memory usage can be substantial for large V, since it stores a 2D dist matrix.',
  ),

  // UTILITY
  createCheatSheet(
    "Kruskal's algorithm for MST (Minimum Spanning Tree)",
    `def find(parent, i):
    if parent[i] == i:
        return i
    parent[i] = find(parent, parent[i])  # Path compression
    return parent[i]

def union(parent, rank, x, y):
    if rank[x] < rank[y]:
        parent[x] = y
    elif rank[x] > rank[y]:
        parent[y] = x
    else:
        parent[y] = x
        rank[x] += 1

def kruskal(edges, vertices):
    # edges is a list of (u, v, w), vertices is a list or set of vertices
    result = []
    parent = {}
    rank = {}

    for v in vertices:
        parent[v] = v
        rank[v] = 0

    # Sort edges by weight
    edges.sort(key=lambda x: x[2])

    e = 0  # Count edges in MST
    i = 0  # Index variable for sorted edges
    while e < len(vertices) - 1 and i < len(edges):
        u, v, w = edges[i]
        i += 1
        x = find(parent, u)
        y = find(parent, v)
        if x != y:
            e += 1
            result.append((u, v, w))
            union(parent, rank, x, y)
    return result`,
    "Constructs the MST of a weighted undirected graph by sorting edges and uniting sets.",
    OperationTypes.Utility,
    'O(E log E)',
    'E is the number of edges; sorting dominates the complexity.',
  ),
  createCheatSheet(
    "Prim's algorithm for MST",
    `import heapq

def prim(graph, start):
    mst = []
    visited = set([start])
    edges = [(weight, start, adj) for adj, weight in graph[start].items()]
    heapq.heapify(edges)

    while edges:
        weight, frm, to = heapq.heappop(edges)
        if to not in visited:
            visited.add(to)
            mst.append((frm, to, weight))
            for nxt, w in graph[to].items():
                if nxt not in visited:
                    heapq.heappush(edges, (w, to, nxt))

    return mst`,
    "Builds the MST of a weighted undirected graph by greedily expanding the frontier from a start vertex.",
    OperationTypes.Utility,
    'O((V + E) log V)',
    'Requires adjacency dict: graph[u] = {v: weight, ...}.',
  ),
];