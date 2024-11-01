import { Curriculum, LessonContent, LessonsTab } from '@/common/commonLesson';

const heapCurriculum: Curriculum = {
  title: 'Heap Curriculum',
  description:
    'A comprehensive guide to mastering heap data structure and its applications',
  sections: [
    {
      id: 1,
      title: 'Heap Fundamentals',
      topics: [
        {
          id: 'heap-concept',
          title: 'Heap Concepts',
          description: 'Understanding heap properties, types, and structure',
        },
        {
          id: 'heap-implementation',
          title: 'Basic Heap Implementation',
          description: 'Implementing binary heap using arrays',
        },
        {
          id: 'heap-properties',
          title: 'Heap Properties',
          description:
            'Complete binary tree, heap order property, shape property',
        },
      ],
    },
    {
      id: 2,
      title: 'Basic Heap Operations',
      topics: [
        {
          id: 'heap-insertion',
          title: 'Insertion Operation',
          description: 'Adding elements and maintaining heap property',
        },
        {
          id: 'heap-extraction',
          title: 'Extraction Operation',
          description: 'Removing elements and restructuring heap',
        },
        {
          id: 'heapify',
          title: 'Heapify Process',
          description: 'Converting arrays into valid heaps',
        },
        {
          id: 'heap-update',
          title: 'Update Operations',
          description: 'Modifying elements and maintaining structure',
        },
      ],
    },
    {
      id: 3,
      title: 'Heap Types',
      topics: [
        {
          id: 'min-heap',
          title: 'Min Heap',
          description: 'Implementation and applications of min heap',
        },
        {
          id: 'max-heap',
          title: 'Max Heap',
          description: 'Implementation and applications of max heap',
        },
        {
          id: 'dual-heap',
          title: 'Dual Heap',
          description: 'Managing two heaps for median finding',
        },
      ],
    },
    {
      id: 4,
      title: 'Heap Sort',
      topics: [
        {
          id: 'heapsort-implementation',
          title: 'HeapSort Implementation',
          description: 'Understanding and implementing heapsort',
        },
        {
          id: 'heapsort-analysis',
          title: 'HeapSort Analysis',
          description: 'Time complexity and comparison with other sorts',
        },
        {
          id: 'heapsort-variations',
          title: 'HeapSort Variations',
          description: 'Optimizations and special cases',
        },
      ],
    },
    {
      id: 5,
      title: 'Priority Queue',
      topics: [
        {
          id: 'priority-queue-concept',
          title: 'Priority Queue Concepts',
          description:
            'Understanding priority queue implementation using heaps',
        },
        {
          id: 'priority-queue-operations',
          title: 'Priority Queue Operations',
          description: 'Implementing core priority queue functionality',
        },
        {
          id: 'priority-applications',
          title: 'Priority Queue Applications',
          description: 'Real-world applications and problem solving',
        },
      ],
    },
    {
      id: 6,
      title: 'Advanced Heap Variations',
      topics: [
        {
          id: 'binomial-heap',
          title: 'Binomial Heap',
          description: 'Understanding and implementing binomial heaps',
        },
        {
          id: 'fibonacci-heap',
          title: 'Fibonacci Heap',
          description: 'Understanding and implementing Fibonacci heaps',
        },
        {
          id: 'leftist-heap',
          title: 'Leftist Heap',
          description: 'Understanding and implementing leftist heaps',
        },
      ],
    },
    {
      id: 7,
      title: 'K-Way Operations',
      topics: [
        {
          id: 'k-way-merge',
          title: 'K-Way Merge',
          description: 'Merging k sorted arrays using heaps',
        },
        {
          id: 'k-smallest',
          title: 'K Smallest Elements',
          description: 'Finding k smallest elements in arrays/streams',
        },
        {
          id: 'k-closest',
          title: 'K Closest Points',
          description: 'Finding k closest points using heaps',
        },
      ],
    },
    {
      id: 8,
      title: 'Heap in Graph Algorithms',
      topics: [
        {
          id: 'dijkstra-heap',
          title: "Dijkstra's Algorithm with Heap",
          description: 'Using heap in shortest path algorithms',
        },
        {
          id: 'prim-heap',
          title: "Prim's Algorithm with Heap",
          description: 'Using heap in minimum spanning tree',
        },
        {
          id: 'network-optimization',
          title: 'Network Optimization',
          description: 'Heap applications in network algorithms',
        },
      ],
    },
    {
      id: 9,
      title: 'Advanced Applications',
      topics: [
        {
          id: 'stream-median',
          title: 'Stream Median',
          description: 'Finding median in data streams',
        },
        {
          id: 'scheduling',
          title: 'Task Scheduling',
          description: 'Solving scheduling problems using heaps',
        },
        {
          id: 'stock-price',
          title: 'Stock Price Operations',
          description: 'Managing stock prices using heaps',
        },
      ],
    },
    {
      id: 10,
      title: 'System Design with Heaps',
      topics: [
        {
          id: 'cache-implementation',
          title: 'Cache Design',
          description: 'Using heaps in cache implementations',
        },
        {
          id: 'load-balancing',
          title: 'Load Balancing',
          description: 'Heap-based load balancing strategies',
        },
        {
          id: 'resource-allocation',
          title: 'Resource Allocation',
          description: 'Managing system resources using heaps',
        },
      ],
    },
  ],
} as const;

const heapLessons: Record<string, LessonContent> = {};

export const heapLessonsTab: LessonsTab = {
  curriculum: heapCurriculum,
  lessons: heapLessons,
};
