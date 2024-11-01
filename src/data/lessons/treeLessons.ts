import { Curriculum, LessonContent, LessonsTab } from '@/common/commonLesson';

const treeCurriculum: Curriculum = {
  title: 'Tree Curriculum',
  description:
    'A comprehensive guide to mastering tree data structures and algorithms',
  sections: [
    {
      id: 1,
      title: 'Tree Fundamentals',
      topics: [
        {
          id: 'tree-concept',
          title: 'Tree Concepts and Terminology',
          description:
            'Understanding basic tree structure, nodes, edges, root, leaves, and height',
        },
        {
          id: 'tree-implementation',
          title: 'Tree Implementation',
          description: 'Implementing basic tree structure and node classes',
        },
        {
          id: 'tree-properties',
          title: 'Tree Properties',
          description: 'Understanding depth, height, size, and balanced trees',
        },
      ],
    },
    {
      id: 2,
      title: 'Binary Trees',
      topics: [
        {
          id: 'binary-tree-basics',
          title: 'Binary Tree Basics',
          description: 'Understanding and implementing binary trees',
        },
        {
          id: 'tree-traversal',
          title: 'Tree Traversal',
          description:
            'Inorder, preorder, postorder, and level-order traversals',
        },
        {
          id: 'tree-construction',
          title: 'Tree Construction',
          description: 'Building trees from traversal sequences',
        },
        {
          id: 'tree-properties-checking',
          title: 'Tree Properties Verification',
          description: 'Checking symmetry, balance, and completeness',
        },
      ],
    },
    {
      id: 3,
      title: 'Binary Search Trees',
      topics: [
        {
          id: 'bst-concept',
          title: 'BST Properties and Implementation',
          description: 'Understanding BST properties and basic operations',
        },
        {
          id: 'bst-operations',
          title: 'BST Operations',
          description: 'Insertion, deletion, and search in BST',
        },
        {
          id: 'bst-validation',
          title: 'BST Validation',
          description: 'Verifying if a binary tree is a valid BST',
        },
        {
          id: 'bst-balancing',
          title: 'BST Balancing',
          description: 'Understanding and handling BST balance',
        },
      ],
    },
    {
      id: 4,
      title: 'Advanced Tree Traversal',
      topics: [
        {
          id: 'iterative-traversal',
          title: 'Iterative Traversal',
          description:
            'Stack-based iterative implementations of tree traversals',
        },
        {
          id: 'morris-traversal',
          title: 'Morris Traversal',
          description: 'Understanding and implementing Morris traversal',
        },
        {
          id: 'special-traversals',
          title: 'Special Traversals',
          description:
            'Boundary traversal, vertical order, and diagonal traversals',
        },
      ],
    },
    {
      id: 5,
      title: 'Tree Modifications',
      topics: [
        {
          id: 'tree-transformations',
          title: 'Tree Transformations',
          description: 'Flattening, inverting, and pruning trees',
        },
        {
          id: 'subtree-operations',
          title: 'Subtree Operations',
          description: 'Finding, validating, and manipulating subtrees',
        },
        {
          id: 'path-operations',
          title: 'Path Operations',
          description: 'Path sum problems and path finding algorithms',
        },
      ],
    },
    {
      id: 6,
      title: 'Balanced Trees',
      topics: [
        {
          id: 'avl-trees',
          title: 'AVL Trees',
          description: 'Understanding and implementing AVL trees',
        },
        {
          id: 'red-black-trees',
          title: 'Red-Black Trees',
          description: 'Understanding and implementing Red-Black trees',
        },
        {
          id: 'b-trees',
          title: 'B-Trees',
          description: 'Understanding B-trees and their variations',
        },
      ],
    },
    {
      id: 7,
      title: 'Special Tree Types',
      topics: [
        {
          id: 'n-ary-trees',
          title: 'N-ary Trees',
          description: 'Working with trees having multiple children',
        },
        {
          id: 'trie',
          title: 'Trie (Prefix Tree)',
          description: 'Understanding and implementing trie data structure',
        },
        {
          id: 'segment-trees',
          title: 'Segment Trees',
          description: 'Understanding and implementing segment trees',
        },
        {
          id: 'fenwick-trees',
          title: 'Fenwick Trees (Binary Indexed Trees)',
          description: 'Understanding and implementing Fenwick trees',
        },
      ],
    },
    {
      id: 8,
      title: 'Tree in Graphs',
      topics: [
        {
          id: 'spanning-trees',
          title: 'Spanning Trees',
          description: 'Understanding minimum spanning trees and algorithms',
        },
        {
          id: 'lowest-common-ancestor',
          title: 'Lowest Common Ancestor',
          description: 'Finding LCA and its applications',
        },
        {
          id: 'tree-serialization',
          title: 'Tree Serialization',
          description: 'Serializing and deserializing tree structures',
        },
      ],
    },
    {
      id: 9,
      title: 'Advanced Tree Algorithms',
      topics: [
        {
          id: 'tree-dp',
          title: 'Dynamic Programming on Trees',
          description: 'Solving tree problems using dynamic programming',
        },
        {
          id: 'tree-distance',
          title: 'Tree Distance Problems',
          description: 'Calculating distances and path-related problems',
        },
        {
          id: 'tree-coloring',
          title: 'Tree Coloring',
          description: 'Solving tree coloring and marking problems',
        },
      ],
    },
    {
      id: 10,
      title: 'Tree in System Design',
      topics: [
        {
          id: 'file-systems',
          title: 'File System Design',
          description: 'Using trees in file system implementation',
        },
        {
          id: 'expression-trees',
          title: 'Expression Trees',
          description: 'Building and evaluating expression trees',
        },
        {
          id: 'decision-trees',
          title: 'Decision Trees',
          description: 'Understanding and implementing decision trees',
        },
      ],
    },
  ],
} as const;

const treeLessons: Record<string, LessonContent> = {};

export const treeLessonsTab: LessonsTab = {
  curriculum: treeCurriculum,
  lessons: treeLessons,
};
