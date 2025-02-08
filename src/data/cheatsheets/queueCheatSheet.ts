import {
  CheatSheetItem,
  createCheatSheet,
  OperationTypes,
} from '@/common/commonCheatSheet';

export const queueCheatSheet: CheatSheetItem[] = [
  // CREATE
  createCheatSheet(
    'Creating a queue',
    `from collections import deque
queue = deque()`,
    'Initializes an empty queue using the deque class from the collections module.',
    OperationTypes.Create,
    'O(1)',
    'N/A',
  ),

  // ADD
  createCheatSheet(
    'Enqueuing an element',
    'queue.append(1)',
    'Adds the element 1 to the end of the queue.',
    OperationTypes.Add,
    'O(1)',
    'Appending to a large queue can cause memory reallocation.',
  ),
  createCheatSheet(
    'Extending the queue',
    'queue.extend([4, 5])',
    'Adds the elements 4 and 5 to the end of the queue.',
    OperationTypes.Add,
    'O(k)',
    'Extending a queue with many elements can cause memory reallocation.',
  ),
  createCheatSheet(
    'Concatenating queues',
    'queue + deque([6, 7])',
    'Concatenates the queue with another deque [6, 7]. Returns a new deque.',
    OperationTypes.Add,
    'O(n + m)',
    'Concatenating large queues can be memory-intensive.',
  ),
  createCheatSheet(
    'Inserting an element at a specific index',
    'queue.insert(1, 99)',
    'Inserts the element 99 at index 1, shifting other elements to the right.',
    OperationTypes.Add,
    'O(n)',
    'Inserting at the beginning of a large queue can be slow.',
  ),

  // REMOVE
  createCheatSheet(
    'Dequeuing an element',
    'queue.popleft()',
    'Removes and returns the front element of the queue.',
    OperationTypes.Remove,
    'O(1)',
    'Dequeuing from an empty queue will raise an error.',
  ),
  createCheatSheet(
    'Clearing the queue',
    'queue.clear()',
    'Removes all elements from the queue, making it empty.',
    OperationTypes.Remove,
    'O(1)',
    'Clearing does not free up memory immediately.',
  ),
  createCheatSheet(
    'Removing an element by value',
    'queue.remove(2)',
    'Removes the first occurrence of the element 2 from the queue.',
    OperationTypes.Remove,
    'O(n)',
    'Removing an element from a large queue can be slow.',
  ),

  // ACCESS
  createCheatSheet(
    'Accessing the front element',
    'queue[0]',
    'Returns the front element of the queue without removing it.',
    OperationTypes.Access,
    'O(1)',
    'Accessing an empty queue will raise an error.',
  ),
  createCheatSheet(
    'Accessing the rear element',
    'queue[-1]',
    'Returns the rear element of the queue without removing it.',
    OperationTypes.Access,
    'O(1)',
    'Accessing an empty queue will raise an error.',
  ),
  createCheatSheet(
    'Slicing the queue',
    'list(queue)[1:3]',
    'Returns a new list containing elements from index 1 to 2 (3 is excluded).',
    OperationTypes.Access,
    'O(k)',
    'Slicing a large queue can be memory-intensive.',
  ),

  // MODIFY
  createCheatSheet(
    'Reversing the queue',
    'queue.reverse()',
    'Reverses the order of elements in the queue in place.',
    OperationTypes.Modify,
    'O(n)',
    'Reversing a large queue can be memory-intensive.',
  ),
  createCheatSheet(
    'Sorting the queue',
    'sorted(queue)',
    'Returns a new sorted list from the elements of the queue (ascending order).',
    OperationTypes.Modify,
    'O(n log n)',
    'Sorting a large queue can be memory-intensive.',
  ),
  createCheatSheet(
    'Sorting the queue in descending order',
    'sorted(queue, reverse=True)',
    'Returns a new list of the queue\'s elements in descending order.',
    OperationTypes.Modify,
    'O(n log n)',
    'Sorting a large queue can be memory-intensive.',
  ),

  // SEARCH
  createCheatSheet(
    'Checking if an element is in the queue',
    '3 in queue',
    'Returns True if the element 3 is in the queue, otherwise False.',
    OperationTypes.Search,
    'O(n)',
    'Checking for an element in a large queue can be slow.',
  ),
  createCheatSheet(
    'Counting occurrences of an element',
    'queue.count(3)',
    'Returns the number of times the element 3 appears in the queue.',
    OperationTypes.Search,
    'O(n)',
    'Counting occurrences in a large queue can be slow.',
  ),
  createCheatSheet(
    'Finding the index of an element',
    'queue.index(3)',
    'Returns the index of the first occurrence of the element 3.',
    OperationTypes.Search,
    'O(n)',
    'Searching for an element not in the queue raises an error.',
  ),

  // UTILITY
  createCheatSheet(
    'Checking if the queue is empty',
    'len(queue) == 0',
    'Returns True if the queue is empty, otherwise False.',
    OperationTypes.Utility,
    'O(1)',
    'N/A',
  ),
  createCheatSheet(
    'Length of the queue',
    'len(queue)',
    'Returns the number of elements in the queue.',
    OperationTypes.Utility,
    'O(1)',
    'N/A',
  ),
  createCheatSheet(
    'Copying a queue',
    'new_queue = queue.copy()',
    'Creates a shallow copy of the queue.',
    OperationTypes.Utility,
    'O(n)',
    'Copying a large queue can be memory-intensive.',
  ),
];
