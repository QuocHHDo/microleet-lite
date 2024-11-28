import { Difficulty } from '@/common/commonConcept';
import { Curriculum, LessonContent, LessonsTab, PriorityLevel } from '@/common/commonLesson';

const queueCurriculum: Curriculum = {
  title: 'Queue Curriculum',
  description: 'A focused guide to mastering queue-based coding interview problems',
  sections: [
    {
      id: 1,
      title: 'Queue Fundamentals',
      topics: [
        {
          id: 'queue-concept',
          title: 'Queue Concept and Properties',
          description: 'Understanding FIFO principle and time complexity analysis',
          priority: PriorityLevel.Essential
        },
        {
          id: 'queue-implementation',
          title: 'Queue Implementation',
          description: 'Implementing queue using arrays and linked lists, handling full/empty cases',
          priority: PriorityLevel.Essential
        },
        {
          id: 'queue-operations',
          title: 'Basic Queue Operations',
          description: 'Mastering enqueue, dequeue, peek, isEmpty with common edge cases',
          priority: PriorityLevel.Essential
        }
      ]
    },
    {
      id: 2,
      title: 'BFS Pattern Problems',
      topics: [
        {
          id: 'tree-bfs',
          title: 'Tree Level Order Problems',
          description: 'Level order traversal, zigzag traversal, level averages, right side view',
          priority: PriorityLevel.Essential
        },
        {
          id: 'graph-bfs',
          title: 'Graph BFS Problems',
          description: 'Shortest path, word ladder, open the lock, rotting oranges',
          priority: PriorityLevel.Essential
        },
        {
          id: 'matrix-bfs',
          title: 'Matrix BFS Problems',
          description: '01 matrix, walls and gates, shortest bridge, pacific atlantic water flow',
          priority: PriorityLevel.Essential
        }
      ]
    },
    {
      id: 3,
      title: 'Priority Queue Patterns',
      topics: [
        {
          id: 'priority-basics',
          title: 'Priority Queue Essentials',
          description: 'Using built-in priority queue/heap for coding problems',
          priority: PriorityLevel.Essential
        },
        {
          id: 'top-k-pattern',
          title: 'Top-K Pattern Problems',
          description: 'Kth largest element, top K frequent elements, K closest points',
          priority: PriorityLevel.Essential
        },
        {
          id: 'merge-pattern',
          title: 'K-way Merge Problems',
          description: 'Merge K sorted lists/arrays, smallest range covering K lists',
          priority: PriorityLevel.Important
        }
      ]
    },
    {
      id: 4,
      title: 'Deque and Sliding Window',
      topics: [
        {
          id: 'sliding-window-maximum',
          title: 'Sliding Window Maximum',
          description: 'Finding maximum in sliding window using deque, template approach',
          priority: PriorityLevel.Important
        },
        {
          id: 'deque-problems',
          title: 'Deque-based Problems',
          description: 'Moving average, sliding window problems requiring order maintenance',
          priority: PriorityLevel.Important
        },
        {
          id: 'monotonic-deque',
          title: 'Monotonic Deque Problems',
          description: 'Jump game problems, remove duplicates problems',
          priority: PriorityLevel.Beneficial
        }
      ]
    },
    {
      id: 5,
      title: 'Queue in Array Problems',
      topics: [
        {
          id: 'circular-queue',
          title: 'Circular Queue Problems',
          description: 'Design circular queue, moving average from data stream',
          priority: PriorityLevel.Important
        },
        {
          id: 'queue-reconstruction',
          title: 'Queue Reconstruction',
          description: 'Reconstruct queue by height, task scheduler problems',
          priority: PriorityLevel.Important
        }
      ]
    },
    {
      id: 6,
      title: 'Advanced BFS Applications',
      topics: [
        {
          id: 'multi-source-bfs',
          title: 'Multi-source BFS',
          description: '01 matrix, walls and gates, rotting oranges variations',
          priority: PriorityLevel.Important
        },
        {
          id: 'bidirectional-bfs',
          title: 'Bidirectional BFS',
          description: 'Word ladder, minimum genetic mutation problems',
          priority: PriorityLevel.Beneficial
        }
      ]
    }
  ]
} as const;

const queueConceptData: LessonContent = {
  title: 'Queue Concept and Properties',
  content: `
Queues are fundamental data structures that follow the First-In-First-Out (FIFO) principle, 
similar to a real-world queue like people waiting in line. In a queue, the first element 
added is the first one to be removed, mimicking how the first person in line is served first.

Key Characteristics of Queues:
- FIFO (First-In-First-Out) principle
- Elements are added at one end (rear/back)
- Elements are removed from the other end (front)
- Supports two primary operations: enqueue (add) and dequeue (remove)

Time Complexity Analysis:
- Enqueue operation: O(1) time complexity
- Dequeue operation: O(1) time complexity
- Peek (view front element): O(1) time complexity
- Check if empty: O(1) time complexity

Common Use Cases:
- Task scheduling in operating systems
- Breadth-First Search (BFS) algorithms
- Print job scheduling
- Handling asynchronous data transfer
- Managing resources in computer networks
`, 
  codeExample: `# Basic Queue Implementation in Python
class Queue:
    def __init__(self):
        self.items = []

    def is_empty(self):
        return len(self.items) == 0

    def enqueue(self, item):
        self.items.append(item)  # O(1) operation

    def dequeue(self):
        if not self.is_empty():
            return self.items.pop(0)  # O(n) operation
        raise IndexError("Queue is empty")

    def front(self):
        if not self.is_empty():
            return self.items[0]
        raise IndexError("Queue is empty")

# Example usage
queue = Queue()
queue.enqueue(1)  # Queue: [1]
queue.enqueue(2)  # Queue: [1, 2]
queue.enqueue(3)  # Queue: [1, 2, 3]

print(queue.dequeue())  # Outputs: 1
print(queue.front())    # Outputs: 2
`,
  difficulty: Difficulty.Beginner,
  exercises: [
    {
      prompt: 'Implement a method to check if a queue is full when using a fixed-size array.',
      initialCode: `# Write your solution here
def is_full(self):
    # Implement the is_full method
    pass`,
      solution: `def is_full(self):
    return len(self.items) >= self.max_size`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Create a method that returns the size of the queue.',
      initialCode: `# Write your solution here
def size(self):
    # Implement the size method
    pass`,
      solution: `def size(self):
    return len(self.items)`,
      difficulty: Difficulty.Beginner,
    }
  ],
  quizzes: [
    {
      question: 'What is the primary characteristic of a Queue data structure?',
      options: [
        'Last-In-First-Out (LIFO)',
        'First-In-First-Out (FIFO)',
        'Random access',
        'Sorted order'
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. This describes a Stack.',
        'Correct. Queues follow the First-In-First-Out principle.',
        'Incorrect. Queues do not provide random access.',
        'Incorrect. Queues are not inherently sorted.'
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What is the typical time complexity of enqueue and dequeue operations?',
      options: [
        'O(n)',
        'O(log n)',
        'O(1)',
        'O(n log n)'
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect for most queue implementations.',
        'Incorrect. This is not the standard queue operation complexity.',
        'Correct. Enqueue and dequeue are typically O(1) operations.',
        'Incorrect. This is more complex than queue operations.'
      ],
      difficulty: Difficulty.Intermediate,
    }
  ]
};
const queueImplementationData: LessonContent = {
  title: 'Queue Implementation',
  content: `<p>
  Queues can be implemented using various structures like arrays and linked lists. 
  Array-based queues provide quick access but may need resizing, while linked list queues offer dynamic sizing without reallocation.
  </p>`,
  codeExample: `# Queue Implementation using Linked List
  class Node:
      def __init__(self, value):
          self.value = value
          self.next = None
  
  class LinkedListQueue:
      def __init__(self):
          self.front = self.rear = None
  
      def enqueue(self, value):
          new_node = Node(value)
          if self.rear:
              self.rear.next = new_node
          self.rear = new_node
          if self.front is None:
              self.front = new_node
  
      def dequeue(self):
          if self.front:
              value = self.front.value
              self.front = self.front.next
              if self.front is None:
                  self.rear = None
              return value`,
  exercises: [
    {
      prompt:
        'Implement a linked list queue and enqueue the values [10, 20, 30].',
      initialCode: `# Write your solution here
  queue = LinkedListQueue()
  # Enqueue values, then test dequeue`,
      solution: `# Expected order for dequeue is 10, 20, 30`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which advantage does a linked list queue offer over an array-based queue?',
      options: [
        'Faster access time',
        'Dynamic sizing without reallocation',
        'More memory-efficient for large data',
        'Simpler to implement',
      ],
      correctAnswer: 1,
      explanations: [
        'Correct. Linked list queues can grow dynamically, avoiding the need for resizing.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const queueOperationsData: LessonContent = {
  title: 'Basic Queue Operations',
  content: `<p>
  Queues support basic operations: enqueue (add an element to the end), dequeue (remove from the front), peek (view the front element),
  and isEmpty (check if the queue is empty). These operations ensure efficient, controlled access.
  </p>`,
  codeExample: `# Queue Operations Example
  class QueueOperations:
      def __init__(self):
          self.queue = []
  
      def enqueue(self, item):
          self.queue.append(item)
  
      def dequeue(self):
          return self.queue.pop(0) if self.queue else None
  
      def peek(self):
          return self.queue[0] if self.queue else None
  
      def is_empty(self):
          return len(self.queue) == 0`,
  exercises: [
    {
      prompt:
        'Using the QueueOperations class, enqueue values [5, 15, 25], then dequeue one and peek.',
      initialCode: `# Implement enqueue, dequeue, and peek on a queue`,
      solution: `# Expected output: Dequeued value: 5, Peek value: 15`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'What is the result of the peek operation on an empty queue?',
      options: [
        'Returns None or equivalent',
        'Throws an error',
        'Returns the last element',
        'Adds a default value',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct. Peek returns None (or equivalent) on an empty queue.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};
const circularConceptData: LessonContent = {
  title: 'Circular Queue Concept',
  content: `<p>
  A circular queue is a linear data structure that follows the FIFO principle but wraps around to reuse space when it reaches the end of the array.
  It is useful in situations where a fixed amount of memory is required, avoiding wasted space from shifting elements as in regular queues.
  </p>`,
  codeExample: `# Circular Queue Example (concept demonstration)
  class CircularQueue:
      def __init__(self, size):
          self.queue = [None] * size
          self.size = size
          self.front = self.rear = -1
  
      def enqueue(self, item):
          if (self.rear + 1) % self.size == self.front:
              print("Queue is full")
          elif self.front == -1:  # Empty queue
              self.front = self.rear = 0
              self.queue[self.rear] = item
          else:
              self.rear = (self.rear + 1) % self.size
              self.queue[self.rear] = item
  
      def dequeue(self):
          if self.front == -1:
              print("Queue is empty")
          elif self.front == self.rear:
              temp = self.queue[self.front]
              self.front = self.rear = -1
              return temp
          else:
              temp = self.queue[self.front]
              self.front = (self.front + 1) % self.size
              return temp`,
  exercises: [
    {
      prompt:
        'Explain why a circular queue is more efficient for memory usage compared to a standard queue.',
      initialCode: `# Write a brief explanation here`,
      solution: `A circular queue uses the same memory repeatedly by wrapping around, reducing the need to shift elements.`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'What happens if an element is enqueued in a circular queue that is full?',
      options: [
        'The first element is overwritten',
        'An error occurs or the operation is prevented',
        'The queue expands',
        'The last element is removed first',
      ],
      correctAnswer: 1,
      explanations: [
        'Correct. Enqueuing to a full circular queue is typically not allowed to prevent data loss.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const graphBfsData: LessonContent = {
  title: 'Graph BFS',
  content: `<p>
  When applied to graphs, BFS efficiently explores all reachable nodes starting from a specified node, handling each node and its neighbors sequentially.
  This approach is useful for finding the shortest path in unweighted graphs.
  </p>`,
  codeExample: `# BFS Implementation for Graph Traversal
  def bfs_graph(graph, start):
      visited = set()
      queue = deque([start])
      visited.add(start)
  
      while queue:
          node = queue.popleft()
          print(node)  # Process the node
  
          for neighbor in graph[node]:
              if neighbor not in visited:
                  visited.add(neighbor)
                  queue.append(neighbor)`,
  exercises: [
    {
      prompt:
        'Modify the BFS graph traversal to keep track of the shortest path from the start node to each node.',
      initialCode: `# Store path lengths or predecessors during BFS`,
      solution: `# Expected solution stores distances or predecessor nodes to reconstruct shortest paths`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question:
        'In an unweighted graph, what property does BFS guarantee if we start from a specific node?',
      options: [
        'It finds the shortest path to each reachable node',
        'It finds the longest path to each reachable node',
        'It visits nodes based on edge weights',
        'It only visits nodes once',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct. BFS ensures the shortest path in terms of the number of edges in an unweighted graph.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const matrixBfsProblemsData: LessonContent = {
  title: 'Matrix BFS Problems',
  content: `<p>
Matrix BFS (Breadth-First Search) problems involve traversing a matrix to solve various problems such as finding the shortest path, identifying connected components, or determining the flow of water. 
This lesson covers common matrix BFS problems and their solutions.
</p>

<ul>
<li><strong>01 Matrix:</strong> Finding the distance to the nearest 0 for each cell in a binary matrix.</li>
<li><strong>Walls and Gates:</strong> Filling a room with the shortest distance to a gate.</li>
<li><strong>Shortest Bridge:</strong> Finding the shortest bridge between two islands in a binary matrix.</li>
<li><strong>Pacific Atlantic Water Flow:</strong> Determining cells where water can flow to both the Pacific and Atlantic oceans.</li>
<li><strong>Time Complexity:</strong> Analyzing the efficiency of BFS in matrix problems.</li>
<li><strong>Space Complexity:</strong> Understanding the memory usage of BFS in matrix problems.</li>
</ul>`,
  codeExample: `# 01 Matrix Problem
from collections import deque

def updateMatrix(matrix):
    rows, cols = len(matrix), len(matrix[0])
    directions = [(1, 0), (-1, 0), (0, 1), (0, -1)]
    queue = deque()
    
    for r in range(rows):
        for c in range(cols):
            if matrix[r][c] == 0:
                queue.append((r, c))
            else:
                matrix[r][c] = float('inf')
    
    while queue:
        r, c = queue.popleft()
        for dr, dc in directions:
            nr, nc = r + dr, c + dc
            if 0 <= nr < rows and 0 <= nc < cols and matrix[nr][nc] > matrix[r][c] + 1:
                matrix[nr][nc] = matrix[r][c] + 1
                queue.append((nr, nc))
    
    return matrix

matrix = [[0, 0, 0], [0, 1, 0], [1, 1, 1]]
print(updateMatrix(matrix))  # Output: [[0, 0, 0], [0, 1, 0], [1, 2, 1]]

# Walls and Gates Problem
def wallsAndGates(rooms):
    if not rooms:
        return
    
    rows, cols = len(rooms), len(rooms[0])
    directions = [(1, 0), (-1, 0), (0, 1), (0, -1)]
    queue = deque()
    
    for r in range(rows):
        for c in range(cols):
            if rooms[r][c] == 0:
                queue.append((r, c))
    
    while queue:
        r, c = queue.popleft()
        for dr, dc in directions:
            nr, nc = r + dr, c + dc
            if 0 <= nr < rows and 0 <= nc < cols and rooms[nr][nc] == float('inf'):
                rooms[nr][nc] = rooms[r][c] + 1
                queue.append((nr, nc))
    
    return rooms

rooms = [[float('inf'), -1, 0, float('inf')],
         [float('inf'), float('inf'), float('inf'), -1],
         [float('inf'), -1, float('inf'), -1],
         [0, -1, float('inf'), float('inf')]]
print(wallsAndGates(rooms))  # Output: [[3, -1, 0, 1], [2, 2, 1, -1], [1, -1, 2, -1], [0, -1, 3, 4]]

# Shortest Bridge Problem
def shortestBridge(A):
    rows, cols = len(A), len(A[0])
    directions = [(1, 0), (-1, 0), (0, 1), (0, -1)]
    queue = deque()
    
    def dfs(r, c):
        if 0 <= r < rows and 0 <= c < cols and A[r][c] == 1:
            A[r][c] = 2
            queue.append((r, c))
            for dr, dc in directions:
                dfs(r + dr, c + dc)
    
    found = False
    for r in range(rows):
        if found:
            break
        for c in range(cols):
            if A[r][c] == 1:
                dfs(r, c)
                found = True
                break
    
    distance = 0
    while queue:
        for _ in range(len(queue)):
            r, c = queue.popleft()
            for dr, dc in directions:
                nr, nc = r + dr, c + dc
                if 0 <= nr < rows and 0 <= nc < cols:
                    if A[nr][nc] == 1:
                        return distance
                    elif A[nr][nc] == 0:
                        A[nr][nc] = 2
                        queue.append((nr, nc))
        distance += 1
    
    return distance

A = [[0, 1], [1, 0]]
print(shortestBridge(A))  # Output: 1

# Pacific Atlantic Water Flow Problem
def pacificAtlantic(matrix):
    if not matrix:
        return []
    
    rows, cols = len(matrix), len(matrix[0])
    directions = [(1, 0), (-1, 0), (0, 1), (0, -1)]
    pacific_reachable = set()
    atlantic_reachable = set()
    
    def bfs(reachable):
        queue = deque(reachable)
        while queue:
            (r, c) = queue.popleft()
            for dr, dc in directions:
                nr, nc = r + dr, c + dc
                if 0 <= nr < rows and 0 <= nc < cols and (nr, nc) not in reachable and matrix[nr][nc] >= matrix[r][c]:
                    queue.append((nr, nc))
                    reachable.add((nr, nc))
    
    for r in range(rows):
        pacific_reachable.add((r, 0))
        atlantic_reachable.add((r, cols - 1))
    
    for c in range(cols):
        pacific_reachable.add((0, c))
        atlantic_reachable.add((rows - 1, c))
    
    bfs(pacific_reachable)
    bfs(atlantic_reachable)
    
    return list(pacific_reachable & atlantic_reachable)

matrix = [[1, 2, 2, 3, 5],
          [3, 2, 3, 4, 4],
          [2, 4, 5, 3, 1],
          [6, 7, 1, 4, 5],
          [5, 1, 1, 2, 4]]
print(pacificAtlantic(matrix))  # Output: [(0, 4), (1, 3), (1, 4), (2, 2), (3, 0), (3, 1), (4, 0)]`,
  exercises: [
    {
      prompt:
        'Given a binary matrix, find the distance to the nearest 0 for each cell. If a cell is 0, its distance is 0.',
      initialCode: `# Write your solution here
from collections import deque

def updateMatrix(matrix):
    return 

matrix = [[0, 0, 0], [0, 1, 0], [1, 1, 1]]
print(updateMatrix(matrix))`,
      solution: `from collections import deque

def updateMatrix(matrix):
    rows, cols = len(matrix), len(matrix[0])
    directions = [(1, 0), (-1, 0), (0, 1), (0, -1)]
    queue = deque()
    
    for r in range(rows):
        for c in range(cols):
            if matrix[r][c] == 0:
                queue.append((r, c))
            else:
                matrix[r][c] = float('inf')
    
    while queue:
        r, c = queue.popleft()
        for dr, dc in directions:
            nr, nc = r + dr, c + dc
            if 0 <= nr < rows and 0 <= nc < cols and matrix[nr][nc] > matrix[r][c] + 1:
                matrix[nr][nc] = matrix[r][c] + 1
                queue.append((nr, nc))
    
    return matrix

matrix = [[0, 0, 0], [0, 1, 0], [1, 1, 1]]
print(updateMatrix(matrix))`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Given a matrix representing rooms with walls (-1) and gates (0), fill each room with the shortest distance to a gate. If a room is a wall or a gate, its distance is unchanged.',
      initialCode: `# Write your solution here
def wallsAndGates(rooms):
    return 

rooms = [[float('inf'), -1, 0, float('inf')],
         [float('inf'), float('inf'), float('inf'), -1],
         [float('inf'), -1, float('inf'), -1],
         [0, -1, float('inf'), float('inf')]]
print(wallsAndGates(rooms))`,
      solution: `from collections import deque

def wallsAndGates(rooms):
    if not rooms:
        return
    
    rows, cols = len(rooms), len(rooms[0])
    directions = [(1, 0), (-1, 0), (0, 1), (0, -1)]
    queue = deque()
    
    for r in range(rows):
        for c in range(cols):
            if rooms[r][c] == 0:
                queue.append((r, c))
    
    while queue:
        r, c = queue.popleft()
        for dr, dc in directions:
            nr, nc = r + dr, c + dc
            if 0 <= nr < rows and 0 <= nc < cols and rooms[nr][nc] == float('inf'):
                rooms[nr][nc] = rooms[r][c] + 1
                queue.append((nr, nc))
    
    return rooms

rooms = [[float('inf'), -1, 0, float('inf')],
         [float('inf'), float('inf'), float('inf'), -1],
         [float('inf'), -1, float('inf'), -1],
         [0, -1, float('inf'), float('inf')]]
print(wallsAndGates(rooms))`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Given a binary matrix representing an island, find the shortest bridge between two islands. A bridge is a path of 1s connecting two separate islands.',
      initialCode: `# Write your solution here
def shortestBridge(A):
    return 

A = [[0, 1], [1, 0]]
print(shortestBridge(A))`,
      solution: `from collections import deque

def shortestBridge(A):
    rows, cols = len(A), len(A[0])
    directions = [(1, 0), (-1, 0), (0, 1), (0, -1)]
    queue = deque()
    
    def dfs(r, c):
        if 0 <= r < rows and 0 <= c < cols and A[r][c] == 1:
            A[r][c] = 2
            queue.append((r, c))
            for dr, dc in directions:
                dfs(r + dr, c + dc)
    
    found = False
    for r in range(rows):
        if found:
            break
        for c in range(cols):
            if A[r][c] == 1:
                dfs(r, c)
                found = True
                break
    
    distance = 0
    while queue:
        for _ in range(len(queue)):
            r, c = queue.popleft()
            for dr, dc in directions:
                nr, nc = r + dr, c + dc
                if 0 <= nr < rows and 0 <= nc < cols:
                    if A[nr][nc] == 1:
                        return distance
                    elif A[nr][nc] == 0:
                        A[nr][nc] = 2
                        queue.append((nr, nc))
        distance += 1
    
    return distance

A = [[0, 1], [1, 0]]
print(shortestBridge(A))`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which of the following is the correct way to implement BFS for the 01 matrix problem?',
      options: [
        'Using a queue to store coordinates and updating distances layer by layer.',
        'Using a stack to store coordinates and updating distances layer by layer.',
        'Using a queue to store coordinates and updating distances recursively.',
        'Using a stack to store coordinates and updating distances recursively.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. BFS uses a queue to explore nodes layer by layer, ensuring the shortest path is found.',
        'This is incorrect. BFS should use a queue, not a stack.',
        'This is incorrect. BFS should not use recursion.',
        'This is incorrect. BFS should use a queue, not a stack.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of the following is the correct way to implement BFS for the walls and gates problem?',
      options: [
        'Using a queue to store coordinates and updating distances layer by layer.',
        'Using a stack to store coordinates and updating distances layer by layer.',
        'Using a queue to store coordinates and updating distances recursively.',
        'Using a stack to store coordinates and updating distances recursively.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. BFS uses a queue to explore nodes layer by layer, ensuring the shortest path is found.',
        'This is incorrect. BFS should use a queue, not a stack.',
        'This is incorrect. BFS should not use recursion.',
        'This is incorrect. BFS should use a queue, not a stack.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'Which of the following is the correct way to implement BFS for the shortest bridge problem?',
      options: [
        'Using a queue to store coordinates and updating distances layer by layer.',
        'Using a stack to store coordinates and updating distances layer by layer.',
        'Using a queue to store coordinates and updating distances recursively.',
        'Using a stack to store coordinates and updating distances recursively.',
      ],
      correctAnswer: 0,
      explanations: [
        'This is correct. BFS uses a queue to explore nodes layer by layer, ensuring the shortest path is found.',
        'This is incorrect. BFS should use a queue, not a stack.',
        'This is incorrect. BFS should not use recursion.',
        'This is incorrect. BFS should use a queue, not a stack.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const priorityBasicsData: LessonContent = {
  title: 'Priority Queue Essentials',
  content: `<p>
Priority queues are data structures that allow efficient access to the element with the highest priority. 
In Python, priority queues can be implemented using the <strong>heapq</strong> module, which provides heap data structure operations.
</p>

<p>
A heap is a binary tree where the parent node is always less than or equal to its child nodes (min-heap), or greater than or equal to its child nodes (max-heap). 
Python's <strong>heapq</strong> module provides functions to create and manipulate min-heaps.
</p>`,
  codeExample: `import heapq

# Creating a min-heap
min_heap = []
heapq.heappush(min_heap, 5)
heapq.heappush(min_heap, 3)
heapq.heappush(min_heap, 7)

# Pop elements in ascending order
print(heapq.heappop(min_heap))  # Output: 3
print(heapq.heappop(min_heap))  # Output: 5
print(heapq.heappop(min_heap))  # Output: 7

# Creating a max-heap using negative values
max_heap = []
heapq.heappush(max_heap, -5)
heapq.heappush(max_heap, -3)
heapq.heappush(max_heap, -7)

# Pop elements in descending order
print(-heapq.heappop(max_heap))  # Output: 7
print(-heapq.heappop(max_heap))  # Output: 5
print(-heapq.heappop(max_heap))  # Output: 3`,
  exercises: [
    {
      prompt: 'Implement a function to find the smallest element in a list using a min-heap.',
      initialCode: `import heapq

def find_smallest(numbers):
    # Write your code here
    pass`,
      solution: `import heapq

def find_smallest(numbers):
    if not numbers:
        return None
    min_heap = numbers.copy()
    heapq.heapify(min_heap)
    return heapq.heappop(min_heap)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Implement a function to find the largest element in a list using a max-heap.',
      initialCode: `import heapq

def find_largest(numbers):
    # Write your code here
    pass`,
      solution: `import heapq

def find_largest(numbers):
    if not numbers:
        return None
    max_heap = [-num for num in numbers]
    heapq.heapify(max_heap)
    return -heapq.heappop(max_heap)`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which function is used to push an element onto a heap in Python?',
      options: ['heap_push()', 'push_heap()', 'heapq.heappush()', 'heapq.push()'],
      correctAnswer: 2,
      explanations: [
        'This is incorrect. The correct function is heapq.heappush().',
        'This is incorrect. The correct function is heapq.heappush().',
        'This is correct. heapq.heappush() adds an element to the heap.',
        'This is incorrect. The correct function is heapq.heappush().',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'How do you convert a list into a heap in Python?',
      options: ['heapq.heapify(list)', 'heapq.make_heap(list)', 'heapq.create_heap(list)', 'heapq.build_heap(list)'],
      correctAnswer: 0,
      explanations: [
        'This is correct. heapq.heapify(list) converts a list into a heap in-place.',
        'This is incorrect. There is no heapq.make_heap() function.',
        'This is incorrect. There is no heapq.create_heap() function.',
        'This is incorrect. There is no heapq.build_heap() function.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const topKPatternsData: LessonContent = {
  title: 'Top-K Pattern Problems',
  content: `<p>
Top-K problems involve finding the top K elements based on certain criteria, such as largest, smallest, or most frequent.
</p>

<p>
Common top-K problems include:
<ul>
  <li>Kth largest element in an array</li>
  <li>Top K frequent elements</li>
  <li>K closest points to the origin</li>
</ul>
</p>`,
  codeExample: `import heapq

def find_kth_largest(nums, k):
    min_heap = []
    for num in nums:
        heapq.heappush(min_heap, num)
        if len(min_heap) > k:
            heapq.heappop(min_heap)
    return min_heap[0]

# Example usage:
nums = [3, 2, 1, 5, 6, 4]
k = 2
print(find_kth_largest(nums, k))  # Output: 5`,
  exercises: [
    {
      prompt: 'Implement a function to find the top K frequent elements in a list.',
      initialCode: `from typing import List
from collections import Counter

def top_k_frequent(nums: List[int], k: int) -> List[int]:
    # Write your code here
    pass`,
      solution: `from typing import List
from collections import Counter
import heapq

def top_k_frequent(nums: List[int], k: int) -> List[int]:
    count = Counter(nums)
    heap = []
    for num, freq in count.items():
        heapq.heappush(heap, (freq, num))
        if len(heap) > k:
            heapq.heappop(heap)
    result = []
    while heap:
        result.append(heapq.heappop(heap)[1])
    return result[::-1]`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement a function to find the K closest points to the origin in a 2D plane.',
      initialCode: `from typing import List
import math

def k_closest_points(points: List[List[int]], k: int) -> List[List[int]]:
    # Write your code here
    pass`,
      solution: `from typing import List
import heapq

def k_closest_points(points: List[List[int]], k: int) -> List[List[int]]:
    heap = []
    for point in points:
        dist = point[0]**2 + point[1]**2
        heapq.heappush(heap, (-dist, point))
        if len(heap) > k:
            heapq.heappop(heap)
    result = []
    while heap:
        result.append(heapq.heappop(heap)[1])
    return result`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a common top-K problem?',
      options: ['Finding the Kth smallest element', 'Finding the Kth largest element', 'Finding the K closest points', 'All of the above'],
      correctAnswer: 3,
      explanations: [
        'Finding the Kth smallest element is a top-K problem.',
        'Finding the Kth largest element is a top-K problem.',
        'Finding the K closest points is a top-K problem.',
        'All options are valid top-K problems.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'Which data structure is commonly used to solve top-K problems efficiently?',
      options: ['Array', 'LinkedList', 'Heap', 'Stack'],
      correctAnswer: 2,
      explanations: [
        'Arrays can be used but are not the most efficient for this purpose.',
        'LinkedLists are not efficient for top-K problems.',
        'Heaps are efficient for managing and retrieving top-K elements.',
        'Stacks are not suitable for top-K problems.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const mergePatternsData: LessonContent = {
  title: 'K-way Merge Problems',
  content: `<p>
K-way merge problems involve merging K sorted lists into a single sorted list.
</p>

<p>
Common K-way merge problems include:
<ul>
  <li>Merging K sorted arrays</li>
  <li>Finding the smallest range that covers at least one element from each of the K lists</li>
</ul>
</p>`,
  codeExample: `import heapq

def merge_k_sorted_lists(lists: List[List[int]]) -> List[int]:
    heap = []
    # Initialize heap with the first element of each list
    for i, lst in enumerate(lists):
        if lst:
            heapq.heappush(heap, (lst[0], i, 0))
    result = []
    while heap:
        val, list_idx, element_idx = heapq.heappop(heap)
        result.append(val)
        if element_idx + 1 < len(lists[list_idx]):
            next_val = lists[list_idx][element_idx + 1]
            heapq.heappush(heap, (next_val, list_idx, element_idx + 1))
    return result

# Example usage:
lists = [
    [1, 4, 5],
    [1, 3, 4],
    [2, 6]
]
print(merge_k_sorted_lists(lists))  # Output: [1, 1, 2, 3, 4, 4, 5, 6]`,
  exercises: [
    {
      prompt: 'Implement a function to merge K sorted lists into one sorted list.',
      initialCode: `from typing import List

def merge_k_sorted_lists(lists: List[List[int]]) -> List[int]:
    # Write your code here
    pass`,
      solution: `from typing import List
import heapq

def merge_k_sorted_lists(lists: List[List[int]]) -> List[int]:
    heap = []
    for i, lst in enumerate(lists):
        if lst:
            heapq.heappush(heap, (lst[0], i, 0))
    result = []
    while heap:
        val, list_idx, element_idx = heapq.heappop(heap)
        result.append(val)
        if element_idx + 1 < len(lists[list_idx]):
            next_val = lists[list_idx][element_idx + 1]
            heapq.heappush(heap, (next_val, list_idx, element_idx + 1))
    return result`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement a function to find the smallest range that includes at least one element from each of the K lists.',
      initialCode: `from typing import List

def smallest_range_covering_k_lists(lists: List[List[int]]) -> List[int]:
    # Write your code here
    pass`,
      solution: `from typing import List
import heapq
import sys

def smallest_range_covering_k_lists(lists: List[List[int]]) -> List[int]:
    heap = []
    current_max = -sys.maxsize
    for i, lst in enumerate(lists):
        if lst:
            heapq.heappush(heap, (lst[0], i, 0))
            if lst[0] > current_max:
                current_max = lst[0]
    range_start = 0
    range_end = 0
    min_range = sys.maxsize
    while heap:
        val, list_idx, element_idx = heapq.heappop(heap)
        if current_max - val < min_range:
            min_range = current_max - val
            range_start = val
            range_end = current_max
        if element_idx + 1 < len(lists[list_idx]):
            next_val = lists[list_idx][element_idx + 1]
            heapq.heappush(heap, (next_val, list_idx, element_idx + 1))
            if next_val > current_max:
                current_max = next_val
        else:
            break
    return [range_start, range_end]`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'What is the time complexity of merging K sorted lists of total N elements using a min-heap?',
      options: ['O(N log K)', 'O(N log N)', 'O(K log N)', 'O(NK)'],
      correctAnswer: 0,
      explanations: [
        'Correct. The time complexity is O(N log K) where N is the total number of elements and K is the number of lists.',
        'Incorrect. O(N log N) is higher than necessary.',
        'Incorrect. O(K log N) is not the correct complexity for this problem.',
        'Incorrect. O(NK) is not efficient for this problem.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'Which of the following is a common application of K-way merge problems?',
      options: ['Database sorting', 'File merging', 'Network routing', 'All of the above'],
      correctAnswer: 3,
      explanations: [
        'Database sorting often involves merging sorted data.',
        'File merging is a direct application of K-way merge.',
        'Network routing can use similar strategies for path merging.',
        'All options are valid applications of K-way merge problems.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const slidingWindowMaximumData: LessonContent = {
  title: 'Sliding Window Maximum',
  content: `<p>
    The sliding window maximum problem involves finding the maximum value in each sliding window of a specified size within an array. 
    A deque (double-ended queue) is an efficient data structure to solve this problem by maintaining the indices of potential maximum values.
  </p>`,
  codeExample: `from collections import deque

def sliding_window_max(nums: List[int], k: int) -> List[int]:
    dq = deque()
    result = []
    for i in range(len(nums)):
        while dq and nums[i] >= nums[dq[-1]]:
            dq.pop()
        dq.append(i)
        if dq[0] <= i - k:
            dq.popleft()
        if i >= k - 1:
            result.append(nums[dq[0]])
    return result`,
  exercises: [
    {
      prompt: 'Implement a sliding window maximum function for an array of strings based on their lengths.',
      initialCode: `from collections import deque

def sliding_window_max_strings(strings: List[str], k: int) -> List[str]:
    # Implement here
    pass`,
      solution: `from collections import deque

def sliding_window_max_strings(strings: List[str], k: int) -> List[str]:
    dq = deque()
    result = []
    for i in range(len(strings)):
        while dq and len(strings[i]) >= len(strings[dq[-1]]):
            dq.pop()
        dq.append(i)
        if dq[0] <= i - k:
            dq.popleft()
        if i >= k - 1:
            result.append(strings[dq[0]])
    return result`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Why is a deque suitable for the sliding window maximum problem?',
      options: [
        'Because it supports fast insertion and deletion at both ends.',
        'Because it can automatically sort elements.',
        'Because it can store a large amount of data.',
        'Because it supports random access.',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct. A deque allows efficient addition and removal of elements at both ends, making it suitable for maintaining the maximum value in a sliding window.',
        'Incorrect. A deque does not automatically sort elements.',
        'Incorrect. This is not the main reason for using a deque.',
        'Incorrect. A deque does not support efficient random access.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ]  
};

const dequeProblemsData: LessonContent = {
  title: 'Deque-based Problems',
  content: `<p>
    Deques are versatile data structures that allow efficient insertion and deletion at both ends. 
    They are particularly useful in problems that require maintaining an ordered list of elements, such as moving averages or sliding windows.
  </p>`,
  codeExample: `from collections import deque

def moving_average(nums: List[int], k: int) -> None:
    dq = deque()
    window_sum = 0
    for num in nums:
        dq.append(num)
        window_sum += num
        if len(dq) > k:
            window_sum -= dq.popleft()
        if len(dq) == k:
            print(window_sum / k)`,
  exercises: [
    {
      prompt: 'Implement a deque from scratch in Python with append, appendleft, pop, and popleft operations.',
      initialCode: `class ScratchDeque:
    def __init__(self):
        self.data = []
        
    # Implement append, appendleft, pop, and popleft here
    pass`,
      solution: `class ScratchDeque:
    def __init__(self):
        self.data = []
        
    def append(self, value):
        self.data.append(value)
        
    def appendleft(self, value):
        self.data.insert(0, value)
        
    def pop(self):
        if self.data:
            return self.data.pop()
        return None
        
    def popleft(self):
        if self.data:
            return self.data.pop(0)
        return None`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the time complexity of inserting an element at the beginning of a deque?',
      options: [
        'O(1)',
        'O(n)',
        'O(log n)',
        'O(1) amortized',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct. Inserting elements at either end of a deque has O(1) time complexity.',
        'Incorrect. This is the complexity for inserting in the middle of a list.',
        'Incorrect. This is not the correct complexity.',
        'Incorrect. It is O(1), not amortized O(1).',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],  
};

const monotonicDequeData: LessonContent = {
  title: 'Monotonic Deque Problems',
  content: `<p>
    A monotonic deque is a deque that maintains its elements in a monotonic order. 
    It is particularly useful in problems like jump games or removing duplicates where order matters.
  </p>`,
  codeExample: `from collections import deque

def jump_game(nums: List[int]) -> List[int]:
    dq = deque()
    dq.append(0)
    for i in range(1, len(nums)):
        while dq and nums[dq[-1]] < nums[i]:
            dq.pop()
        dq.append(i)
        if dq[0] <= i - nums[i]:
            dq.popleft()
    return list(dq)`,
  exercises: [
    {
      prompt: 'Implement a monotonic deque to solve the "next greater element" problem for an array.',
      initialCode: `from collections import deque

def next_greater_elements(nums: List[int]) -> List[int]:
    # Implement here
    pass`,
      solution: `from collections import deque

def next_greater_elements(nums: List[int]) -> List[int]:
    stack = deque()
    result = [-1] * len(nums)
    for i in range(len(nums)):
        while stack and nums[i] > nums[stack[-1]]:
            idx = stack.pop()
            result[idx] = nums[i]
        stack.append(i)
    return result`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'How does a monotonic deque differ from a standard deque?',
      options: [
        'It maintains the monotonicity of elements.',
        'It can only be operated on one end.',
        'It automatically sorts elements.',
        'It does not allow deletion operations.',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct. A monotonic deque maintains elements in a monotonic order.',
        'Incorrect. A deque allows operations at both ends.',
        'Incorrect. It does not automatically sort; the monotonicity must be maintained programmatically.',
        'Incorrect. A deque allows deletion operations.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],  
};

const circularQueueData: LessonContent = {
  title: 'Circular Queue Problems',
  content: `<p>
    A circular queue is a queue that uses a circular buffer to store its elements. 
    It wraps around when the end of the buffer is reached, effectively making it a circular structure. 
    This is useful in scenarios where the queue needs to be fixed in size and used continuously without resetting.
  </p>`,
  codeExample: `class CircularQueue {
    constructor(private capacity: number) {
      this.capacity = capacity;
      this.queue = new Array(capacity).fill(null);
      this.front = -1;
      this.rear = -1;
    }

    enqueue(value: any): boolean {
      if (this.isFull()) {
        return false;
      }
      if (this.isEmpty()) {
        this.front = 0;
      }
      this.rear = (this.rear + 1) % this.capacity;
      this.queue[this.rear] = value;
      return true;
    }

    dequeue(): any {
      if (this.isEmpty()) {
        return null;
      }
      const value = this.queue[this.front];
      if (this.front === this.rear) {
        this.front = -1;
        this.rear = -1;
      } else {
        this.front = (this.front + 1) % this.capacity;
      }
      return value;
    }

    isFull(): boolean {
      return (this.rear + 1) % this.capacity === this.front;
    }

    isEmpty(): boolean {
      return this.front === -1;
    }
  }

  // Example usage:
  const cq = new CircularQueue(5);
  cq.enqueue(1); // true
  cq.enqueue(2); // true
  cq.dequeue();  // 1
  cq.enqueue(3); // true
  cq.enqueue(4); // true
  cq.enqueue(5); // true
  cq.enqueue(6); // false (queue is full)`,
  exercises: [
    {
      prompt: 'Implement a CircularQueue class with enqueue, dequeue, isFull, and isEmpty methods.',
      initialCode: `class CircularQueue {
    constructor(private capacity: number) {
      // Initialize queue, front, and rear
    }

    enqueue(value: any): boolean {
      // Implement enqueue logic
    }

    dequeue(): any {
      // Implement dequeue logic
    }

    isFull(): boolean {
      // Implement isFull logic
    }

    isEmpty(): boolean {
      // Implement isEmpty logic
    }
  }`,
      solution: `// Solution code provided above`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement a moving average calculator using a circular queue to handle streaming data.',
      initialCode: `class MovingAverage {
    constructor(private windowSize: number) {
      // Initialize circular queue and sum
    }

    next(value: number): number {
      // Implement moving average logic
    }
  }`,
      solution: `class MovingAverage {
    private cq: CircularQueue;
    private sum: number;

    constructor(private windowSize: number) {
      this.cq = new CircularQueue(windowSize);
      this.sum = 0;
    }

    next(value: number): number {
      if (this.cq.isFull()) {
        this.sum -= this.cq.dequeue();
      }
      this.cq.enqueue(value);
      this.sum += value;
      return this.sum / this.cq.capacity;
    }
  }`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the main advantage of a circular queue over a regular queue?',
      options: [
        'It uses less memory.',
        'It allows faster access to elements.',
        'It prevents the need to shift elements when enqueueing or dequeueing.',
        'It can handle unlimited elements.',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Memory usage is similar.',
        'Incorrect. Access speed is not significantly different.',
        'Correct. Circular queues prevent the need to shift elements, optimizing operations.',
        'Incorrect. Circular queues have a fixed size.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'How do you handle the wrap-around in a circular queue implementation?',
      options: [
        'By resetting the index to 0 when it exceeds the capacity.',
        'By using modulo operations to cycle the index.',
        'By increasing the capacity dynamically.',
        'By stopping enqueue operations when the queue is full.',
      ],
      correctAnswer: 1,
      explanations: [
        'Correct. Modulo operations are used to cycle the index back to 0.',
        'Incorrect. Modulo operations are the standard way, not resetting manually.',
        'Incorrect. Circular queues have a fixed capacity.',
        'Incorrect. Enqueue should return false when full, not stop.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const queueReconstructionData: LessonContent = {
  title: 'Queue Reconstruction',
  content: `<p>
    Queue reconstruction involves arranging a list of people based on their heights and the number of taller or equally 
    tall people in front of them. This problem can be efficiently solved by sorting the people and using a queue to place 
    them in the correct positions.
  </p>`,
  codeExample: `function reconstructQueue(people: [number, number][]): [number, number][] {
    // Sort the people by descending height, then ascending k
    people.sort((a, b) => {
      if (a[0] !== b[0]) return b[0] - a[0];
      return a[1] - b[1];
    });

    const queue: [number, number][] = [];
    for (const person of people) {
      queue.splice(person[1], 0, person);
    }
    return queue;
  }

  // Example usage:
  const people = [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]];
  console.log(reconstructQueue(people));
  // Output: [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]`,
  exercises: [
    {
      prompt: 'Implement a function to reconstruct a queue based on heights and k values.',
      initialCode: `function reconstructQueue(people: [number, number][]): [number, number][] {
    // Implement queue reconstruction logic
  }`,
      solution: `function reconstructQueue(people: [number, number][]): [number, number][] {
    people.sort((a, b) => {
      if (a[0] !== b[0]) return b[0] - a[0];
      return a[1] - b[1];
    });

    const queue: [number, number][] = [];
    for (const person of people) {
      queue.splice(person[1], 0, person);
    }
    return queue;
  }`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement a task scheduler that schedules tasks with given cooldown periods using a queue.',
      initialCode: `class TaskScheduler {
    constructor(private tasks: string[], private cooldown: number) {
      // Implement task scheduling logic
    }

    schedule(): number {
      // Return the minimum time units needed to finish all tasks
    }
  }`,
      solution: `class TaskScheduler {
    private queue: [string, number][];

    constructor(private tasks: string[], private cooldown: number) {
      this.queue = [];
    }

    schedule(): number {
      const taskCounts: { [key: string]: number } = {};
      for (const task of this.tasks) {
        taskCounts[task] = (taskCounts[task] || 0) + 1;
      }

      const heap = Object.entries(taskCounts).map(([task, count]) => [-count, task]);
      heap.sort((a, b) => a[0] - b[0]);

      let time = 0;
      while (heap.length > 0) {
        const coolDownTasks: [string, number][] = [];
        for (let i = 0; i < Math.min(26, heap.length); i++) {
          const [count, task] = heap.shift()!;
          time++;
          if (count < -1) {
            coolDownTasks.push([task, count + 1]);
          }
        }
        for (const [task, count] of coolDownTasks) {
          heap.push([count, task]);
          heap.sort((a, b) => a[0] - b[0]);
        }
        if (heap.length > 0) {
          time += this.cooldown;
        }
      }
      return time;
    }
  }`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'What is the first step in reconstructing the queue by heights?',
      options: [
        'Place the tallest people first.',
        'Sort the people by height in ascending order.',
        'Sort the people by k values in descending order.',
        'Start by placing people with k=0.',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct. Sorting by descending height and ascending k values is the first step.',
        'Incorrect. Ascending height is not the correct approach.',
        'Incorrect. Sorting by k values alone is insufficient.',
        'Incorrect. While k=0 is important, height sorting is the primary step.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'How do you handle task scheduling to ensure tasks are executed with the required cooldown?',
      options: [
        'Use a priority queue to schedule tasks based on frequency.',
        'Execute tasks in the order they appear without considering cooldown.',
        'Ignore cooldown periods to minimize time.',
        'Randomly schedule tasks and check for cooldown conflicts.',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct. A priority queue helps manage task frequency and cooldowns efficiently.',
        'Incorrect. This approach does not account for cooldowns.',
        'Incorrect. Ignoring cooldowns can lead to violations of scheduling rules.',
        'Incorrect. Random scheduling is inefficient and may not respect cooldowns.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const treeBfsData: LessonContent = {
  title: 'Tree Level Order Traversal',
  content: `<p>
  In trees, BFS is commonly used for level-order traversal, processing each level of the tree from top to bottom.
  Using a queue to maintain nodes at each level, BFS visits each node layer by layer, making it ideal for tree-based operations.
  </p>`,
  codeExample: `# Level Order Traversal for a Binary Tree
  from collections import deque
  
  def level_order_traversal(root):
      if not root:
          return []
  
      queue = deque([root])
      result = []
  
      while queue:
          level = []
          for _ in range(len(queue)):
              node = queue.popleft()
              level.append(node.val)
              if node.left:
                  queue.append(node.left)
              if node.right:
                  queue.append(node.right)
          result.append(level)
      
      return result`,
  exercises: [
    {
      prompt:
        'Write a function to print each level of a binary tree in reverse order using BFS.',
      initialCode: `# Use a queue to traverse levels in BFS and a stack to reverse levels`,
      solution: `# Expected solution should use a stack to hold levels for reversed output`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question:
        'Which structure ensures that BFS in trees processes nodes level by level?',
      options: ['Stack', 'Priority queue', 'Queue', 'Linked list'],
      correctAnswer: 2,
      explanations: [
        'Correct. A queue enables BFS to explore nodes level by level, which is essential for level-order traversal.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const multiSourceBFSData: LessonContent = {
  title: 'Multi-source BFS',
  content: `<p>
    Multi-source BFS involves performing a breadth-first search from multiple starting points simultaneously. 
    This approach is particularly useful in scenarios where you need to find the shortest distance from any of several starting points to various destinations.
  </p>
  <p>
    Common applications include:
    <ul>
      <li>01 Matrix: Finding the distance of the nearest 0 for each cell in a binary matrix.</li>
      <li>Walls and Gates: Finding the shortest distance from each empty room to the nearest gate.</li>
      <li>Rotting Oranges: Simulating the spread of rot in a grid of oranges.</li>
    </ul>
  </p>`,
  codeExample: `from collections import deque

def walls_and_gates(rooms: List[List[int]]) -> None:
    if not rooms:
        return
    rows, cols = len(rooms), len(rooms[0])
    queue = deque()
    for r in range(rows):
        for c in range(cols):
            if rooms[r][c] == 0:
                queue.append((r, c))
    directions = [(-1,0),(1,0),(0,-1),(0,1)]
    while queue:
        r, c = queue.popleft()
        for dr, dc in directions:
            nr, nc = r + dr, c + dc
            if 0 <= nr < rows and 0 <= nc < cols and rooms[nr][nc] == 2147483647:
                rooms[nr][nc] = rooms[r][c] + 1
                queue.append((nr, nc))`,
  exercises: [
    {
      prompt: 'Implement a function to calculate the minimum distance from multiple sources in a grid for the 01 Matrix problem.',
      initialCode: `from collections import deque
def updateMatrix(matrix: List[List[int]]) -> List[List[int]]:
    # Implement here
    pass`,
      solution: `from collections import deque

def updateMatrix(matrix: List[List[int]]) -> List[List[int]]:
    if not matrix:
        return []
    rows, cols = len(matrix), len(matrix[0])
    queue = deque()
    for r in range(rows):
        for c in range(cols):
            if matrix[r][c] == 0:
                queue.append((r, c))
            else:
                matrix[r][c] = -1
    directions = [(-1,0),(1,0),(0,-1),(0,1)]
    distance = 0
    while queue:
        for _ in range(len(queue)):
            r, c = queue.popleft()
            for dr, dc in directions:
                nr, nc = r + dr, c + dc
                if 0 <= nr < rows and 0 <= nc < cols and matrix[nr][nc] == -1:
                    matrix[nr][nc] = matrix[r][c] + 1
                    queue.append((nr, nc))
    return matrix`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement a function to simulate the spread of rot in a grid of oranges using multi-source BFS for the Rotting Oranges problem.',
      initialCode: `from collections import deque
def orangesRotting(grid: List[List[int]]) -> int:
    # Implement here
    pass`,
      solution: `from collections import deque

def orangesRotting(grid: List[List[int]]) -> int:
    if not grid:
        return 0
    rows, cols = len(grid), len(grid[0])
    queue = deque()
    fresh = 0
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == 2:
                queue.append((r, c))
            elif grid[r][c] == 1:
                fresh += 1
    directions = [(-1,0),(1,0),(0,-1),(0,1)]
    minutes = 0
    while queue and fresh > 0:
        minutes += 1
        for _ in range(len(queue)):
            r, c = queue.popleft()
            for dr, dc in directions:
                nr, nc = r + dr, c + dc
                if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == 1:
                    grid[nr][nc] = 2
                    fresh -= 1
                    queue.append((nr, nc))
    return minutes if fresh == 0 else -1`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'When is multi-source BFS particularly useful?',
      options: [
        'When searching from multiple starting points simultaneously.',
        'When dealing with unweighted graphs only.',
        'When the graph is densely connected.',
        'When you need to find the longest path in a graph.',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct. Multi-source BFS is useful for searching from multiple starting points.',
        'Incorrect. It can be used in both weighted and unweighted graphs with appropriate modifications.',
        'Incorrect. It is not limited to densely connected graphs.',
        'Incorrect. BFS is not suitable for finding the longest path.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'How does multi-source BFS handle multiple starting points?',
      options: [
        'By initializing the queue with all starting points and propagating outwards.',
        'By performing separate BFS for each starting point and taking the minimum distance.',
        'By randomly selecting one starting point and ignoring the others.',
        'By prioritizing starting points based on their position in the grid.',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct. The queue is initialized with all starting points, and BFS propagates outwards.',
        'Incorrect. Multi-source BFS handles all starting points simultaneously, not separately.',
        'Incorrect. All starting points are considered in the search.',
        'Incorrect. There is no prioritization based on position; all starting points are treated equally.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const bidirectionalBFSData: LessonContent = {
  title: 'Bidirectional BFS',
  content: `<p>
    Bidirectional BFS is a search strategy that conducts two simultaneous searches: one from the start and one from the goal, meeting in the middle. 
    This approach significantly reduces the search space compared to standard BFS, making it faster for certain problems.
  </p>
  <p>
    Common applications include:
    <ul>
      <li>Word Ladder: Transforming one word into another by changing one letter at a time.</li>
      <li>Minimum Genetic Mutation: Finding the shortest sequence of mutations from a starting gene to a target gene.</li>
    </ul>
  </p>`,
  codeExample: `from collections import deque

def word_ladder(begin: str, end: str, word_list: List[str]) -> int:
    from collections import deque
    word_set = set(word_list)
    if end not in word_set:
        return 0
    front = {begin}
    back = {end}
    steps = 0
    while front and back:
        steps += 1
        if len(front) > len(back):
            front, back = back, front
        next_front = set()
        for word in front:
            for i in range(len(word)):
                for c in 'abcdefghijklmnopqrstuvwxyz':
                    new_word = word[:i] + c + word[i+1:]
                    if new_word in back:
                        return steps + 1
                    if new_word in word_set:
                        word_set.remove(new_word)
                        next_front.add(new_word)
        front = next_front
    return 0`,
  exercises: [
    {
      prompt: 'Implement the Word Ladder problem using bidirectional BFS.',
      initialCode: `from collections import deque
def word_ladder(begin: str, end: str, word_list: List[str]) -> int:
    # Implement here
    pass`,
      solution: `from collections import deque

def word_ladder(begin: str, end: str, word_list: List[str]) -> int:
    word_set = set(word_list)
    if end not in word_set:
        return 0
    front = {begin}
    back = {end}
    steps = 0
    while front and back:
        steps += 1
        if len(front) > len(back):
            front, back = back, front
        next_front = set()
        for word in front:
            for i in range(len(word)):
                for c in 'abcdefghijklmnopqrstuvwxyz':
                    new_word = word[:i] + c + word[i+1:]
                    if new_word in back:
                        return steps + 1
                    if new_word in word_set:
                        word_set.remove(new_word)
                        next_front.add(new_word)
        front = next_front
    return 0`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement a function to find the shortest sequence of mutations from a starting gene to a target gene using bidirectional BFS for the Minimum Genetic Mutation problem.',
      initialCode: `from collections import deque
def minGeneticMutation(start: str, end: str, bank: List[str]) -> int:
    # Implement here
    pass`,
      solution: `from collections import deque

def minGeneticMutation(start: str, end: str, bank: List[str]) -> int:
    bank_set = set(bank)
    if end not in bank_set:
        return -1
    front = {start}
    back = {end}
    steps = 0
    while front and back:
        steps += 1
        if len(front) > len(back):
            front, back = back, front
        next_front = set()
        for gene in front:
            gene_list = list(gene)
            for i in range(len(gene_list)):
                original = gene_list[i]
                for c in 'ACGT':
                    if c != original:
                        gene_list[i] = c
                        new_gene = ''.join(gene_list)
                        if new_gene in back:
                            return steps + 1
                        if new_gene in bank_set:
                            bank_set.remove(new_gene)
                            next_front.add(new_gene)
                gene_list[i] = original
        front = next_front
    return -1`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What are the advantages of bidirectional BFS over standard BFS?',
      options: [
        'It reduces the search space by searching from both start and end simultaneously.',
        'It always finds the optimal solution faster than standard BFS.',
        'It requires less memory than standard BFS.',
        'It is easier to implement than standard BFS.',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct. Bidirectional BFS reduces the search space significantly.',
        'Incorrect. While it often finds solutions faster, it does not always guarantee the fastest finding of the optimal solution.',
        'Incorrect. Memory usage can be similar or even higher due to maintaining two fronts.',
        'Incorrect. Bidirectional BFS can be more complex to implement correctly.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'In which scenarios is bidirectional BFS most effective?',
      options: [
        'When the path from start to goal is very long.',
        'When the branching factor is high and memory is limited.',
        'When the graph is unweighted and the start and goal are known.',
        'When the graph is a tree with no cycles.',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Bidirectional BFS is not specifically designed for long paths but for reducing search space.',
        'Incorrect. High branching factor and limited memory can make bidirectional BFS challenging.',
        'Correct. It is effective in unweighted graphs where both start and goal are known.',
        'Incorrect. It can be used in graphs with cycles as well.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const queueLessons: Record<string, LessonContent> = {
  'queue-concept': queueConceptData,
  'queue-implementation': queueImplementationData,
  'queue-operations': queueOperationsData,
  'circular-concept': circularConceptData,
  'tree-bfs': treeBfsData,
  'graph-bfs': graphBfsData,
  'matrix-bfs': matrixBfsProblemsData,
  'priority-basics': priorityBasicsData,
  'top-k-pattern': topKPatternsData,
  'merge-pattern': mergePatternsData,
  'sliding-window-maximum': slidingWindowMaximumData,
  'deque-problems': dequeProblemsData,
  'monotonic-deque': monotonicDequeData,
  'circular-queue': circularQueueData,
  'queue-reconstruction': queueReconstructionData,
  'multi-source-bfs': multiSourceBFSData,
  'bidirectional-bfs': bidirectionalBFSData,

};
export const queueLessonsTab: LessonsTab = {
  curriculum: queueCurriculum,
  lessons: queueLessons,
};
