import { Difficulty } from '@/common/commonConcept';
import {
  Curriculum,
  LessonContent,
  LessonsTab,
  PriorityLevel,
} from '@/common/commonLesson';

const unionFindCurriculum: Curriculum = {
  title: 'Union-Find Curriculum',
  description:
    'Master Union-Find (Disjoint Set Union) data structure to solve connectivity and grouping problems efficiently',
  sections: [
    {
      id: 1,
      title: 'Union-Find Fundamentals',
      topics: [
        {
          id: 'union-find-concept',
          title: 'Union-Find Concepts',
          description:
            'Understanding disjoint sets and their applications in solving connectivity problems',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'union-find-implementation',
          title: 'Basic Union-Find Implementation',
          description:
            'Implementing Union-Find with parent array - foundation for advanced optimizations',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'union-find-operations',
          title: 'Core Operations',
          description:
            'Understanding Find and Union operations with their time complexities',
          priority: PriorityLevel.Essential,
        },
      ],
    },
    {
      id: 2,
      title: 'Optimizations',
      topics: [
        {
          id: 'path-compression',
          title: 'Path Compression',
          description:
            'Optimizing Find operation by flattening tree structure',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'union-by-rank',
          title: 'Union by Rank',
          description:
            'Optimizing Union operation by balancing tree heights',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'time-complexity-analysis',
          title: 'Time Complexity with Optimizations',
          description:
            'Understanding inverse Ackermann function and near-constant time operations',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 3,
      title: 'Common Patterns',
      topics: [
        {
          id: 'connectivity-problems',
          title: 'Connectivity Problems',
          description:
            'Using Union-Find to determine if elements are connected',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'component-counting',
          title: 'Counting Components',
          description:
            'Tracking the number of disjoint sets dynamically',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'cycle-detection',
          title: 'Cycle Detection',
          description:
            'Detecting cycles in graphs using Union-Find',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 4,
      title: 'Advanced Applications',
      topics: [
        {
          id: 'mst-kruskal',
          title: 'Minimum Spanning Tree (Kruskal\'s Algorithm)',
          description:
            'Using Union-Find to build minimum spanning trees',
          priority: PriorityLevel.Important,
        },
        {
          id: 'network-connectivity',
          title: 'Network Connectivity',
          description:
            'Solving network and connection-related problems',
          priority: PriorityLevel.Important,
        },
        {
          id: 'graph-validation',
          title: 'Graph Validation',
          description:
            'Validating graph properties like tree structure',
          priority: PriorityLevel.Beneficial,
        },
      ],
    },
  ],
};

const lessonContents: Record<string, LessonContent> = {
  'union-find-concept': {
    title: 'Union-Find Concepts',
    content: `<div>
<h1>Understanding Union-Find (Disjoint Set Union)</h1>

<h2>What is Union-Find?</h2>
<p>Union-Find, also known as Disjoint Set Union (DSU), is a data structure that keeps track of elements partitioned into disjoint (non-overlapping) sets. It provides near-constant-time operations to:</p>
<ul>
  <li><strong>Find:</strong> Determine which set an element belongs to</li>
  <li><strong>Union:</strong> Merge two sets into one</li>
</ul>

<h2>When to Use Union-Find?</h2>
<p>Union-Find is the go-to data structure for:</p>
<ul>
  <li>Detecting cycles in undirected graphs</li>
  <li>Finding connected components</li>
  <li>Implementing Kruskal's Minimum Spanning Tree algorithm</li>
  <li>Determining if two elements are in the same group</li>
  <li>Network connectivity problems</li>
</ul>

<h2>Basic Structure</h2>
<p>Each element initially forms its own set. We use an array where each index represents an element, and the value represents its parent. Initially, each element is its own parent.</p>

</div>`,
    codeExample: `# Basic Union-Find structure
class UnionFind:
    def __init__(self, n):
        # Each element is its own parent initially
        self.parent = list(range(n))

    def find(self, x):
        # Find root of element x
        if self.parent[x] != x:
            return self.find(self.parent[x])
        return x

    def union(self, x, y):
        # Merge sets containing x and y
        root_x = self.find(x)
        root_y = self.find(y)

        if root_x != root_y:
            self.parent[root_x] = root_y
            return True
        return False

# Example usage
uf = UnionFind(5)  # Elements: 0, 1, 2, 3, 4
uf.union(0, 1)     # Merge sets {0} and {1}
uf.union(1, 2)     # Merge sets {0,1} and {2}
print(uf.find(0) == uf.find(2))  # True - in same set`,
    exercises: [
      {
        prompt:
          'Implement a basic Union-Find structure with find and union operations for n elements.',
        initialCode: `class UnionFind:
    def __init__(self, n):
        # Initialize parent array
        pass

    def find(self, x):
        # Find root of x
        pass

    def union(self, x, y):
        # Merge sets containing x and y
        pass`,
        solution: `class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))

    def find(self, x):
        if self.parent[x] != x:
            return self.find(self.parent[x])
        return x

    def union(self, x, y):
        root_x = self.find(x)
        root_y = self.find(y)

        if root_x != root_y:
            self.parent[root_x] = root_y
            return True
        return False`,
        difficulty: Difficulty.Beginner,
      },
    ],
    quizzes: [
      {
        question:
          'What is the primary purpose of the Union-Find data structure?',
        options: [
          'To sort elements efficiently',
          'To track disjoint sets and support find and union operations',
          'To implement a priority queue',
          'To perform binary search',
        ],
        correctAnswer: 1,
        explanations: [
          'Incorrect. Union-Find is not designed for sorting.',
          'Correct! Union-Find maintains disjoint sets and provides efficient find and union operations.',
          'Incorrect. Priority queues are typically implemented with heaps.',
          'Incorrect. Binary search requires sorted data, not disjoint sets.',
        ],
        difficulty: Difficulty.Beginner,
      },
    ],
  },

  'path-compression': {
    title: 'Path Compression Optimization',
    content: `<div>
<h1>Path Compression</h1>

<h2>The Problem with Naive Find</h2>
<p>In the basic implementation, repeated find operations can create long chains, making find() slow (O(n) worst case).</p>

<h2>Path Compression Solution</h2>
<p>During the find operation, we can flatten the tree structure by making every node point directly to the root. This dramatically speeds up future operations.</p>

<h2>Implementation</h2>
<p>We modify the find() method to set each node's parent to the root as we traverse up the tree:</p>

<h2>Time Complexity</h2>
<p>With path compression, the amortized time complexity of find becomes O(α(n)), where α is the inverse Ackermann function - effectively constant time.</p>

</div>`,
    codeExample: `class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))

    def find(self, x):
        # Path compression: make x point directly to root
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]

    def union(self, x, y):
        root_x = self.find(x)
        root_y = self.find(y)

        if root_x != root_y:
            self.parent[root_x] = root_y
            return True
        return False

# Example showing path compression benefit
uf = UnionFind(6)
# Create chain: 0 -> 1 -> 2 -> 3 -> 4 -> 5
for i in range(5):
    uf.parent[i] = i + 1

# First find(0) compresses path
print(uf.find(0))  # Returns 5, compresses entire chain
# Now parent[0] = 5 (points directly to root)
print(uf.parent[0])  # 5`,
    exercises: [
      {
        prompt:
          'Implement Union-Find with path compression in the find operation.',
        initialCode: `class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))

    def find(self, x):
        # Add path compression
        pass`,
        solution: `class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))

    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]`,
        difficulty: Difficulty.Intermediate,
      },
    ],
    quizzes: [
      {
        question:
          'What is the main benefit of path compression in Union-Find?',
        options: [
          'It reduces memory usage',
          'It flattens the tree structure for faster future operations',
          'It sorts the elements',
          'It prevents duplicate elements',
        ],
        correctAnswer: 1,
        explanations: [
          'Incorrect. Path compression does not reduce memory usage.',
          'Correct! Path compression makes nodes point directly to the root, flattening the tree and speeding up future find operations.',
          'Incorrect. Path compression does not sort elements.',
          'Incorrect. Path compression does not prevent duplicates.',
        ],
        difficulty: Difficulty.Intermediate,
      },
    ],
  },

  'union-by-rank': {
    title: 'Union by Rank Optimization',
    content: `<div>
<h1>Union by Rank</h1>

<h2>The Problem with Naive Union</h2>
<p>Without optimization, union operations can create unbalanced trees, leading to slow find operations.</p>

<h2>Union by Rank Solution</h2>
<p>We keep track of the "rank" (approximate depth) of each tree. When merging, we always attach the tree with smaller rank under the root of the tree with larger rank.</p>

<h2>Benefits</h2>
<ul>
  <li>Keeps trees balanced</li>
  <li>Prevents creation of long chains</li>
  <li>Combined with path compression, achieves O(α(n)) time</li>
</ul>

</div>`,
    codeExample: `class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n  # Track rank of each tree

    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]

    def union(self, x, y):
        root_x = self.find(x)
        root_y = self.find(y)

        if root_x == root_y:
            return False

        # Attach smaller rank tree under larger rank tree
        if self.rank[root_x] < self.rank[root_y]:
            self.parent[root_x] = root_y
        elif self.rank[root_x] > self.rank[root_y]:
            self.parent[root_y] = root_x
        else:
            # Equal ranks - attach y under x, increase x's rank
            self.parent[root_y] = root_x
            self.rank[root_x] += 1

        return True`,
    exercises: [
      {
        prompt:
          'Implement Union-Find with both path compression and union by rank.',
        initialCode: `class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n

    def find(self, x):
        # Add path compression
        pass

    def union(self, x, y):
        # Add union by rank
        pass`,
        solution: `class UnionFind:
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
            return False

        if self.rank[root_x] < self.rank[root_y]:
            self.parent[root_x] = root_y
        elif self.rank[root_x] > self.rank[root_y]:
            self.parent[root_y] = root_x
        else:
            self.parent[root_y] = root_x
            self.rank[root_x] += 1

        return True`,
        difficulty: Difficulty.Intermediate,
      },
    ],
    quizzes: [
      {
        question:
          'Why do we use union by rank in Union-Find?',
        options: [
          'To reduce memory usage',
          'To keep trees balanced and prevent long chains',
          'To enable parallel processing',
          'To sort the elements',
        ],
        correctAnswer: 1,
        explanations: [
          'Incorrect. Union by rank does not reduce memory usage.',
          'Correct! Union by rank keeps trees balanced by attaching smaller trees under larger trees, preventing deep chains.',
          'Incorrect. Union by rank is not specifically for parallel processing.',
          'Incorrect. Union by rank does not sort elements.',
        ],
        difficulty: Difficulty.Intermediate,
      },
    ],
  },
};

export const unionFindLessonsTab: LessonsTab = {
  curriculum: unionFindCurriculum,
  lessons: lessonContents,
};
