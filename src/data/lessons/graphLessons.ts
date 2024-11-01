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

const graphLessons: Record<string, LessonContent> = {};
export const graphLessonsTab: LessonsTab = {
  curriculum: graphCurriculum,
  lessons: graphLessons,
};
