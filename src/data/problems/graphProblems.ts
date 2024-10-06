import { createProblem, Problem } from '@/common/commonProblem';

export const graphProblems: Problem[] = [
  createProblem(
    'Clone Graph (Leetcode 133)',
    'Medium',
    'Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph. Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.',
    [
      {
        code: `class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []

def cloneGraph(node):
    if not node:
        return None
    
    # Initialize a dictionary to store the cloned nodes
    cloned_nodes = {}
    
    def dfs(node):
        # If the node is already cloned, return the cloned node
        if node in cloned_nodes:
            return cloned_nodes[node]
        
        # Create a new node with the same value
        clone = Node(node.val)
        # Store the cloned node in the dictionary
        cloned_nodes[node] = clone
        
        # Recursively clone the neighbors
        for neighbor in node.neighbors:
            clone.neighbors.append(dfs(neighbor))
        
        return clone
    
    # Start the DFS from the given node
    return dfs(node)`,
        timeComplexity: 'O(V + E)',
        spaceComplexity: 'O(V)',
        explanation:
          'This solution uses Depth-First Search (DFS) to clone the graph. It maintains a dictionary to store the cloned nodes and recursively clones each node and its neighbors.',
      },
    ],
    'Use Depth-First Search (DFS) to clone the graph.',
    'https://leetcode.com/problems/clone-graph/',
  ),
  createProblem(
    'Course Schedule (Leetcode 207)',
    'Medium',
    'There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai. Return true if you can finish all courses. Otherwise, return false.',
    [
      {
        code: `def canFinish(numCourses, prerequisites):
    # Initialize the graph as an adjacency list
    graph = [[] for _ in range(numCourses)]
    # Initialize the in-degree array
    in_degree = [0] * numCourses
    
    # Build the graph and in-degree array
    for dest, src in prerequisites:
        graph[src].append(dest)
        in_degree[dest] += 1
    
    # Initialize the queue with all nodes having in-degree 0
    queue = [i for i in range(numCourses) if in_degree[i] == 0]
    
    # Initialize the count of visited nodes
    visited_count = 0
    
    # Process the nodes in the queue
    while queue:
        node = queue.pop(0)
        visited_count += 1
        
        # Decrease the in-degree of the neighbors
        for neighbor in graph[node]:
            in_degree[neighbor] -= 1
            # If the in-degree becomes 0, add it to the queue
            if in_degree[neighbor] == 0:
                queue.append(neighbor)
    
    # If all nodes are visited, return true
    return visited_count == numCourses`,
        timeComplexity: 'O(V + E)',
        spaceComplexity: 'O(V + E)',
        explanation:
          "This solution uses Kahn's algorithm for Topological Sorting to detect cycles in the graph. It maintains an in-degree array and a queue to process nodes with in-degree 0.",
      },
    ],
    "Use Kahn's algorithm for Topological Sorting to detect cycles in the graph.",
    'https://leetcode.com/problems/course-schedule/',
  ),
  createProblem(
    'Number of Islands (Leetcode 200)',
    'Medium',
    "Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.",
    [
      {
        code: `def numIslands(grid):
    if not grid:
        return 0
    
    rows, cols = len(grid), len(grid[0])
    num_islands = 0
    
    def dfs(r, c):
        # Check if the current cell is out of bounds or is water
        if r < 0 or c < 0 or r >= rows or c >= cols or grid[r][c] == '0':
            return
        
        # Mark the current cell as visited
        grid[r][c] = '0'
        
        # Recursively visit the adjacent cells
        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)
    
    # Iterate through each cell in the grid
    for r in range(rows):
        for c in range(cols):
            # If the cell is land, start a DFS to mark the entire island
            if grid[r][c] == '1':
                dfs(r, c)
                num_islands += 1
    
    return num_islands`,
        timeComplexity: 'O(m * n)',
        spaceComplexity: 'O(m * n)',
        explanation:
          'This solution uses Depth-First Search (DFS) to explore and mark all cells of an island. It iterates through each cell in the grid and starts a DFS whenever it encounters a land cell.',
      },
    ],
    'Use Depth-First Search (DFS) to explore and mark all cells of an island.',
    'https://leetcode.com/problems/number-of-islands/',
  ),
  createProblem(
    'Network Delay Time (Leetcode 743)',
    'Medium',
    'You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target. We will send a signal from a given node k. Return the minimum time it takes for all the n nodes to receive the signal. If it is impossible for all the n nodes to receive the signal, return -1.',
    [
      {
        code: `import heapq

def networkDelayTime(times, n, k):
    # Initialize the graph as an adjacency list
    graph = [[] for _ in range(n + 1)]
    for u, v, w in times:
        graph[u].append((v, w))
    
    # Initialize the distance array with infinity
    distance = [float('inf')] * (n + 1)
    distance[k] = 0
    
    # Initialize the priority queue with the starting node
    pq = [(0, k)]
    
    # Process the nodes in the priority queue
    while pq:
        dist, node = heapq.heappop(pq)
        
        # If the current distance is greater than the stored distance, skip
        if dist > distance[node]:
            continue
        
        # Update the distances to the neighbors
        for neighbor, weight in graph[node]:
            new_dist = dist + weight
            if new_dist < distance[neighbor]:
                distance[neighbor] = new_dist
                heapq.heappush(pq, (new_dist, neighbor))
    
    # Find the maximum distance in the distance array
    max_dist = max(distance[1:])
    
    # If any node is unreachable, return -1
    return max_dist if max_dist < float('inf') else -1`,
        timeComplexity: 'O(E log V)',
        spaceComplexity: 'O(V + E)',
        explanation:
          "This solution uses Dijkstra's algorithm to find the shortest path from the source node to all other nodes. It maintains a priority queue to process the nodes in order of their distance from the source.",
      },
    ],
    "Use Dijkstra's algorithm to find the shortest path from the source node to all other nodes.",
    'https://leetcode.com/problems/network-delay-time/',
  ),
  createProblem(
    'Cheapest Flights Within K Stops (Leetcode 787)',
    'Medium',
    'There are n cities connected by m flights. Each flight starts from city u and arrives at v with a price w. Given all the cities and flights, together with starting city src and the destination dst, your task is to find the cheapest price from src to dst with up to k stops. If there is no such route, return -1.',
    [
      {
        code: `import heapq

def findCheapestPrice(n, flights, src, dst, k):
    # Initialize the graph as an adjacency list
    graph = [[] for _ in range(n)]
    for u, v, w in flights:
        graph[u].append((v, w))
    
    # Initialize the priority queue with the starting node
    pq = [(0, src, k + 1)]
    
    # Process the nodes in the priority queue
    while pq:
        price, node, stops = heapq.heappop(pq)
        
        # If the current node is the destination, return the price
        if node == dst:
            return price
        
        # If there are no more stops left, continue
        if stops > 0:
            for neighbor, weight in graph[node]:
                heapq.heappush(pq, (price + weight, neighbor, stops - 1))
    
    # If no route is found, return -1
    return -1`,
        timeComplexity: 'O(E log V)',
        spaceComplexity: 'O(V + E)',
        explanation:
          "This solution uses a modified version of Dijkstra's algorithm to find the cheapest path from the source node to the destination node with up to k stops. It maintains a priority queue to process the nodes in order of their price from the source.",
      },
    ],
    "Use a modified version of Dijkstra's algorithm to find the cheapest path with up to k stops.",
    'https://leetcode.com/problems/cheapest-flights-within-k-stops/',
  ),
  createProblem(
    'Reconstruct Itinerary (Leetcode 332)',
    'Hard',
    'Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], reconstruct the itinerary in order. All of the tickets belong to a man who departs from JFK. Thus, the itinerary must begin with JFK. If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].',
    [
      {
        code: `from collections import defaultdict

def findItinerary(tickets):
    # Initialize the graph as an adjacency list
    graph = defaultdict(list)
    for src, dst in sorted(tickets, reverse=True):
        graph[src].append(dst)
    
    # Initialize the itinerary list
    itinerary = []
    
    def dfs(airport):
        # Visit all the neighbors in lexical order
        while graph[airport]:
            dfs(graph[airport].pop())
        # Add the current airport to the itinerary
        itinerary.append(airport)
    
    # Start the DFS from JFK
    dfs("JFK")
    
    # Return the itinerary in reverse order
    return itinerary[::-1]`,
        timeComplexity: 'O(E log E)',
        spaceComplexity: 'O(E)',
        explanation:
          'This solution uses Depth-First Search (DFS) to reconstruct the itinerary. It sorts the tickets to ensure the smallest lexical order and uses a stack to build the itinerary in reverse order.',
      },
    ],
    'Use Depth-First Search (DFS) to reconstruct the itinerary in lexical order.',
    'https://leetcode.com/problems/reconstruct-itinerary/',
  ),
  createProblem(
    'Word Ladder (Leetcode 127)',
    'Hard',
    "Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that: Only one letter can be changed at a time. Each transformed word must exist in the word list. Note that beginWord is not a transformed word. Return 0 if there is no such transformation sequence.",
    [
      {
        code: `from collections import deque

def ladderLength(beginWord, endWord, wordList):
    # Convert the word list to a set for O(1) lookups
    word_set = set(wordList)
    
    # If the endWord is not in the word list, return 0
    if endWord not in word_set:
        return 0
    
    # Initialize the queue for BFS with the beginWord
    queue = deque([(beginWord, 1)])
    
    # Process the nodes in the queue
    while queue:
        word, length = queue.popleft()
        
        # If the current word is the endWord, return the length
        if word == endWord:
            return length
        
        # Generate all possible transformations of the current word
        for i in range(len(word)):
            for c in 'abcdefghijklmnopqrstuvwxyz':
                next_word = word[:i] + c + word[i + 1:]
                
                # If the next word is in the word set, add it to the queue
                if next_word in word_set:
                    word_set.remove(next_word)
                    queue.append((next_word, length + 1))
    
    # If no transformation sequence is found, return 0
    return 0`,
        timeComplexity: 'O(M^2 * N)',
        spaceComplexity: 'O(M * N)',
        explanation:
          'This solution uses Breadth-First Search (BFS) to find the shortest transformation sequence. It generates all possible transformations of the current word and checks if they exist in the word list.',
      },
    ],
    'Use Breadth-First Search (BFS) to find the shortest transformation sequence.',
    'https://leetcode.com/problems/word-ladder/',
  ),
];
