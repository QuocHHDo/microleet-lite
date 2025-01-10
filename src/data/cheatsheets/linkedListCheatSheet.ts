import { CheatSheetItem, createCheatSheet, OperationTypes } from '@/common/commonCheatSheet';

export const linkedListCheatSheet: CheatSheetItem[] = [
  // CREATE
  createCheatSheet(
    'Creating a linked list',
    `class Node:
  def __init__(self, data):
    self.data = data
    self.next = None

head = Node(1)
head.next = Node(2)
head.next.next = Node(3)`,
    'Defines a Node class and creates a linked list with elements 1, 2, and 3.',
    OperationTypes.Create,
    'O(n)',
    'Creating a large linked list can be memory-intensive.',
  ),

  // ADD
  createCheatSheet(
    'Appending to the end of a linked list',
    `def append(head, data):
  if not head:
    return Node(data)
  current = head
  while current.next:
    current = current.next
  current.next = Node(data)
  return head`,
    'Adds a new node with the given data to the end of the linked list.',
    OperationTypes.Add,
    'O(n)',
    'Appending to a large linked list can be slow.',
  ),
  createCheatSheet(
    'Inserting at the beginning of a linked list',
    `def insert_at_beginning(head, data):
  new_node = Node(data)
  new_node.next = head
  return new_node`,
    'Inserts a new node with the given data at the beginning of the linked list.',
    OperationTypes.Add,
    'O(1)',
    'N/A',
  ),
  createCheatSheet(
    'Inserting at a specific position',
    `def insert_at_position(head, data, position):
  if position == 0:
    return insert_at_beginning(head, data)
  new_node = Node(data)
  current = head
  for _ in range(position - 1):
    if not current:
      return head
    current = current.next
  new_node.next = current.next
  current.next = new_node
  return head`,
    'Inserts a new node with the given data at the specified position in the linked list.',
    OperationTypes.Add,
    'O(n)',
    'Inserting beyond the list length does nothing.',
  ),

  // REMOVE
  createCheatSheet(
    'Removing the first node',
    `def remove_first(head):
  if not head:
    return None
  return head.next`,
    'Removes the first node from the linked list.',
    OperationTypes.Remove,
    'O(1)',
    'Removing from an empty list returns None.',
  ),
  createCheatSheet(
    'Removing the last node',
    `def remove_last(head):
  if not head or not head.next:
    return None
  current = head
  while current.next.next:
    current = current.next
  current.next = None
  return head`,
    'Removes the last node from the linked list.',
    OperationTypes.Remove,
    'O(n)',
    'Removing from a single-node list returns None.',
  ),
  createCheatSheet(
    'Removing a node at a specific position',
    `def remove_at_position(head, position):
  if not head:
    return None
  if position == 0:
    return head.next
  current = head
  for _ in range(position - 1):
    if not current.next:
      return head
    current = current.next
  if not current.next:
    return head
  current.next = current.next.next
  return head`,
    'Removes the node at the specified position in the linked list.',
    OperationTypes.Remove,
    'O(n)',
    'Removing beyond the list length does nothing.',
  ),

  // ACCESS
  createCheatSheet(
    'Accessing the first node',
    'head.data',
    'Accesses the data of the first node in the linked list.',
    OperationTypes.Access,
    'O(1)',
    'Accessing from an empty list raises an error.',
  ),
  createCheatSheet(
    'Accessing the last node',
    `def get_last(head):
  if not head:
    return None
  current = head
  while current.next:
    current = current.next
  return current.data`,
    'Accesses the data of the last node in the linked list.',
    OperationTypes.Access,
    'O(n)',
    'Accessing from an empty list returns None.',
  ),
  createCheatSheet(
    'Accessing a node at a specific position',
    `def get_at_position(head, position):
  if not head:
    return None
  current = head
  for _ in range(position):
    if not current:
      return None
    current = current.next
  return current.data if current else None`,
    'Accesses the data of the node at the specified position in the linked list.',
    OperationTypes.Access,
    'O(n)',
    'Accessing beyond the list length returns None.',
  ),

  // MODIFY
  createCheatSheet(
    'Reversing a linked list',
    `def reverse_list(head):
  prev = None
  current = head
  while current:
    next_node = current.next
    current.next = prev
    prev = current
    current = next_node
  return prev`,
    'Reverses the order of nodes in the linked list.',
    OperationTypes.Modify,
    'O(n)',
    'Reversing a large linked list can be memory-intensive.',
  ),
  createCheatSheet(
    'Sorting a linked list',
    `def sort_list(head):
  if not head or not head.next:
    return head

  def merge_sort(node):
    if not node or not node.next:
      return node
    mid = get_middle(node)
    next_to_mid = mid.next
    mid.next = None
    left = merge_sort(node)
    right = merge_sort(next_to_mid)
    return merge(left, right)

  def merge(left, right):
    dummy = Node(0)
    current = dummy
    while left and right:
      if left.data < right.data:
        current.next = left
        left = left.next
      else:
        current.next = right
        right = right.next
      current = current.next
    current.next = left if left else right
    return dummy.next

  def get_middle(node):
    if not node:
      return node
    slow = node
    fast = node
    while fast.next and fast.next.next:
      slow = slow.next
      fast = fast.next.next
    return slow

  return merge_sort(head)`,
    'Sorts the linked list in ascending order using merge sort.',
    OperationTypes.Modify,
    'O(n log n)',
    'Sorting can be memory-intensive.',
  ),

  // SEARCH
  createCheatSheet(
    'Finding the middle node',
    `def find_middle(head):
  if not head:
    return None
  slow = head
  fast = head
  while fast and fast.next:
    slow = slow.next
    fast = fast.next.next
  return slow.data`,
    'Finds the middle node of the linked list (returns its data).',
    OperationTypes.Search,
    'O(n)',
    'Empty list returns None.',
  ),
  createCheatSheet(
    'Checking for a cycle in the linked list',
    `def has_cycle(head):
  if not head or not head.next:
    return False
  slow = head
  fast = head.next
  while slow != fast:
    if not fast or not fast.next:
      return False
    slow = slow.next
    fast = fast.next.next
  return True`,
    'Checks if the linked list contains a cycle using the fast and slow pointers approach.',
    OperationTypes.Search,
    'O(n)',
    'Large lists can slow cycle detection.',
  ),

  // UTILITY
  createCheatSheet(
    'Length of a linked list',
    `def list_length(head):
  length = 0
  current = head
  while current:
    length += 1
    current = current.next
  return length`,
    'Returns the number of nodes in the linked list.',
    OperationTypes.Utility,
    'O(n)',
    'N/A',
  ),
  createCheatSheet(
    'Copy a linked list',
    `def copy_list(head):
  if not head:
    return None
  new_head = Node(head.data)
  current_old = head.next
  current_new = new_head
  while current_old:
    current_new.next = Node(current_old.data)
    current_new = current_new.next
    current_old = current_old.next
  return new_head`,
    'Creates a shallow copy of the linked list.',
    OperationTypes.Utility,
    'O(n)',
    'Copying a large linked list can be memory-intensive.',
  ),
];

