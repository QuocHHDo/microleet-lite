import { createLesson, Lesson } from '../../common/commonLesson';

export const linkedListLessons: Lesson[] = [
  createLesson(
    'Creating and Accessing Linked Lists',
    'Learn how to create linked lists in Python and access elements by traversing the list.',
    `class Node:\n  def __init__(self, data):\n    self.data = data\n    self.next = None\n\nhead = Node(1)\nhead.next = Node(2)\nhead.next.next = Node(3)\n\ndef print_list(head):\n  current = head\n  while current:\n    print(current.data)\n    current = current.next\n\nprint_list(head)`,
    'Create a linked list with three nodes and print the second node.',
    `class Node:\n  def __init__(self, data):\n    self.data = data\n    self.next = None\n\nhead = Node(1)\n# Create the linked list and print the second node here`,
    `class Node:\n  def __init__(self, data):\n    self.data = data\n    self.next = None\n\nhead = Node(1)\nhead.next = Node(2)\nhead.next.next = Node(3)\n\ndef print_second_node(head):\n  if head and head.next:\n    print(head.next.data)\n\nprint_second_node(head)`,
    'How do you access the second node in a linked list?',
    ['head.next', 'head[1]', 'head.data[1]', 'head.next.next'],
    0,
  ),
];
