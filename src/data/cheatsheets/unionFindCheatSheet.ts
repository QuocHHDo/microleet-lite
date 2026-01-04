import {
  CheatSheetItem,
  createCheatSheet,
  OperationTypes,
} from '@/common/commonCheatSheet';

export const unionFindCheatSheet: CheatSheetItem[] = [
  // CREATE
  createCheatSheet(
    'Creating a Union-Find structure',
    `class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n`,
    'Initializes a Union-Find data structure with n elements, each in its own set.',
    OperationTypes.Create,
    'O(N)',
    'N is the number of elements. Each element starts as its own parent.',
  ),

  // FIND
  createCheatSheet(
    'Find operation (with path compression)',
    `def find(self, x):
    if self.parent[x] != x:
        self.parent[x] = self.find(self.parent[x])
    return self.parent[x]`,
    'Finds the root of the set containing element x, with path compression optimization.',
    OperationTypes.Access,
    'O(α(N))',
    'α(N) is the inverse Ackermann function, practically constant time.',
  ),

  // UNION
  createCheatSheet(
    'Union operation (by rank)',
    `def union(self, x, y):
    root_x = self.find(x)
    root_y = self.find(y)

    if root_x == root_y:
        return False

    if self.rank[root_x] < self.rank[root_y]:
        self.parent[root_x] = root_y
    elif self.rank[root_x] > self.rank[root_y]:
        self.parent[root_y] = root_x
    else:
        self.parent[root_y] = root_x
        self.rank[root_x] += 1

    return True`,
    'Merges the sets containing x and y using union by rank.',
    OperationTypes.Modify,
    'O(α(N))',
    'Returns False if x and y are already in the same set, True otherwise.',
  ),

  // CHECK CONNECTIVITY
  createCheatSheet(
    'Check if elements are connected',
    `def connected(self, x, y):
    return self.find(x) == self.find(y)`,
    'Checks if two elements are in the same set.',
    OperationTypes.Access,
    'O(α(N))',
    'Returns True if x and y have the same root.',
  ),

  // COUNT COMPONENTS
  createCheatSheet(
    'Count connected components',
    `class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))
        self.components = n

    def union(self, x, y):
        root_x = self.find(x)
        root_y = self.find(y)

        if root_x != root_y:
            self.parent[root_x] = root_y
            self.components -= 1

    def get_count(self):
        return self.components`,
    'Tracks the number of disjoint sets.',
    OperationTypes.Access,
    'O(1)',
    'Decrements component count when union merges two different sets.',
  ),
];
