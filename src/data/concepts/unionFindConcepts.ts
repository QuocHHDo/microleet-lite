import { Concept, createConcept, Difficulty } from '@/common/commonConcept';

export const unionFindConcepts: Concept[] = [
  createConcept(
    1,
    'What is Union-Find? How does it work?',
    `
**Definition:** Union-Find (also called Disjoint Set Union, DSU) is a data structure that keeps track of elements partitioned into disjoint (non-overlapping) sets. It provides near-constant-time operations to add new sets, merge existing sets, and determine whether elements are in the same set.

**Basic Structure:** Union-Find consists of two main operations:
- **Find:** Determine which set an element belongs to
- **Union:** Merge two sets into one

**Example:**
\`\`\`python
class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n

    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])  # Path compression
        return self.parent[x]

    def union(self, x, y):
        root_x = self.find(x)
        root_y = self.find(y)

        if root_x == root_y:
            return False

        # Union by rank
        if self.rank[root_x] < self.rank[root_y]:
            self.parent[root_x] = root_y
        elif self.rank[root_x] > self.rank[root_y]:
            self.parent[root_y] = root_x
        else:
            self.parent[root_y] = root_x
            self.rank[root_x] += 1

        return True

# Usage
uf = UnionFind(5)
uf.union(0, 1)
uf.union(1, 2)
print(uf.find(0) == uf.find(2))  # True, they're in the same set
\`\`\`

**Use Cases:**
- Detecting cycles in graphs
- Finding connected components
- Kruskal's algorithm for Minimum Spanning Tree
- Network connectivity problems
`,
    Difficulty.Beginner,
  ),
  createConcept(
    2,
    'What are Path Compression and Union by Rank?',
    `
**Path Compression:** An optimization technique that flattens the structure of the tree when find() is called, making future queries faster.

**Union by Rank:** Always attach the smaller tree under the root of the larger tree to keep the tree balanced.

**Time Complexity:**
- Without optimizations: O(n) per operation
- With both optimizations: O(α(n)) per operation, where α is the inverse Ackermann function (practically constant)

**Example of the optimization impact:**
\`\`\`python
# Without path compression - slower
def find_naive(self, x):
    while self.parent[x] != x:
        x = self.parent[x]
    return x

# With path compression - much faster
def find_optimized(self, x):
    if self.parent[x] != x:
        self.parent[x] = self.find_optimized(self.parent[x])
    return self.parent[x]
\`\`\`
`,
    Difficulty.Intermediate,
  ),
];
