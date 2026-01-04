import { createProblem, Problem } from '@/common/commonProblem';

export const unionFindProblems: Problem[] = [
  createProblem(
    'Number of Connected Components in an Undirected Graph (Leetcode 323)',
    'Medium',
    'Given n nodes labeled from 0 to n - 1 and a list of undirected edges, write a function to find the number of connected components in an undirected graph.',
    [
      {
        code: `class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))
        self.components = n

    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]

    def union(self, x, y):
        root_x = self.find(x)
        root_y = self.find(y)

        if root_x != root_y:
            self.parent[root_x] = root_y
            self.components -= 1

def countComponents(n, edges):
    uf = UnionFind(n)

    for u, v in edges:
        uf.union(u, v)

    return uf.components

# Example usage
n = 5
edges = [[0,1], [1,2], [3,4]]
print(countComponents(n, edges))  # Output: 2`,
        timeComplexity: 'O(E * α(N))',
        spaceComplexity: 'O(N)',
      },
    ],
  ),
  createProblem(
    'Graph Valid Tree (Leetcode 261)',
    'Medium',
    'Given n nodes labeled from 0 to n - 1 and a list of undirected edges, check if these edges make up a valid tree.',
    [
      {
        code: `class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n

    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]

    def union(self, x, y):
        root_x = self.find(x)
        root_y = self.find(y)

        if root_x == root_y:
            return False  # Cycle detected

        if self.rank[root_x] < self.rank[root_y]:
            self.parent[root_x] = root_y
        elif self.rank[root_x] > self.rank[root_y]:
            self.parent[root_y] = root_x
        else:
            self.parent[root_y] = root_x
            self.rank[root_x] += 1

        return True

def validTree(n, edges):
    # A tree must have exactly n-1 edges
    if len(edges) != n - 1:
        return False

    uf = UnionFind(n)

    # Check for cycles
    for u, v in edges:
        if not uf.union(u, v):
            return False

    return True

# Example usage
n = 5
edges = [[0,1], [0,2], [0,3], [1,4]]
print(validTree(n, edges))  # Output: True`,
        timeComplexity: 'O(E * α(N))',
        spaceComplexity: 'O(N)',
      },
    ],
  ),
  createProblem(
    'Redundant Connection (Leetcode 684)',
    'Medium',
    'In this problem, a tree is an undirected graph that is connected and has no cycles. Given a graph that started as a tree with n nodes, with one additional edge added, find the edge that can be removed to make it a tree again.',
    [
      {
        code: `class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n + 1))

    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]

    def union(self, x, y):
        root_x = self.find(x)
        root_y = self.find(y)

        if root_x == root_y:
            return False  # Already in same set - this edge creates a cycle

        self.parent[root_x] = root_y
        return True

def findRedundantConnection(edges):
    uf = UnionFind(len(edges))

    for u, v in edges:
        if not uf.union(u, v):
            return [u, v]  # This edge creates a cycle

    return []

# Example usage
edges = [[1,2], [1,3], [2,3]]
print(findRedundantConnection(edges))  # Output: [2,3]`,
        timeComplexity: 'O(N * α(N))',
        spaceComplexity: 'O(N)',
      },
    ],
  ),
];
