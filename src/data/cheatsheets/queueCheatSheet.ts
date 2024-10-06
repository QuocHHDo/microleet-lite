import { CheatSheetItem, createCheatSheet } from '@/common/commonCheatSheet';

export const queueCheatSheet: CheatSheetItem[] = [
  createCheatSheet(
    'Creating a queue',
    'from collections import deque\nqueue = deque()',
    'Initializes an empty queue using the deque class from the collections module.',
    'create',
    'O(1)',
    'N/A',
  ),
  createCheatSheet(
    'Enqueuing an element',
    'queue.append(1)',
    'Adds the element 1 to the end of the queue.',
    'add',
    'O(1)',
    'Appending to a large queue can cause memory reallocation.',
  ),
  createCheatSheet(
    'Dequeuing an element',
    'queue.popleft()',
    'Removes and returns the front element of the queue.',
    'remove',
    'O(1)',
    'Dequeuing from an empty queue will raise an error.',
  ),
  createCheatSheet(
    'Checking if the queue is empty',
    'len(queue) == 0',
    'Returns True if the queue is empty, otherwise False.',
    'utility',
    'O(1)',
    'N/A',
  ),
  createCheatSheet(
    'Accessing the front element',
    'queue[0]',
    'Returns the front element of the queue without removing it.',
    'access',
    'O(1)',
    'Accessing the front element of an empty queue will raise an error.',
  ),
  createCheatSheet(
    'Accessing the rear element',
    'queue[-1]',
    'Returns the rear element of the queue without removing it.',
    'access',
    'O(1)',
    'Accessing the rear element of an empty queue will raise an error.',
  ),
  createCheatSheet(
    'Length of the queue',
    'len(queue)',
    'Returns the number of elements in the queue.',
    'utility',
    'O(1)',
    'N/A',
  ),
  createCheatSheet(
    'Clearing the queue',
    'queue.clear()',
    'Removes all elements from the queue, making it empty.',
    'remove',
    'O(1)',
    'Clearing a queue does not free up memory immediately.',
  ),
  createCheatSheet(
    'Copying a queue',
    'new_queue = queue.copy()',
    'Creates a shallow copy of the queue.',
    'utility',
    'O(n)',
    'Copying a large queue can be memory-intensive.',
  ),
  createCheatSheet(
    'Reversing the queue',
    'queue.reverse()',
    'Reverses the order of elements in the queue.',
    'modify',
    'O(n)',
    'Reversing a large queue can be memory-intensive.',
  ),
  createCheatSheet(
    'Checking if an element is in the queue',
    '3 in queue',
    'Returns True if the element 3 is in the queue, otherwise False.',
    'search',
    'O(n)',
    'Checking for an element in a large queue can be slow.',
  ),
  createCheatSheet(
    'Counting occurrences of an element',
    'queue.count(3)',
    'Returns the number of times the element 3 appears in the queue.',
    'search',
    'O(n)',
    'Counting occurrences in a large queue can be slow.',
  ),
  createCheatSheet(
    'Finding the index of an element',
    'queue.index(3)',
    'Returns the index of the first occurrence of the element 3.',
    'search',
    'O(n)',
    'Searching for an element not in the queue will raise an error.',
  ),
  createCheatSheet(
    'Extending the queue',
    'queue.extend([4, 5])',
    'Adds the elements 4 and 5 to the end of the queue.',
    'add',
    'O(k)',
    'Extending a queue with a large number of elements can cause memory reallocation.',
  ),
  createCheatSheet(
    'Concatenating queues',
    'queue + deque([6, 7])',
    'Concatenates the queue with another deque [6, 7].',
    'add',
    'O(n + m)',
    'Concatenating large queues can be memory-intensive.',
  ),
  createCheatSheet(
    'Removing an element by value',
    'queue.remove(2)',
    'Removes the first occurrence of the element 2 from the queue.',
    'remove',
    'O(n)',
    'Removing an element from a large queue can be slow.',
  ),
  createCheatSheet(
    'Inserting an element at a specific index',
    'queue.insert(1, 99)',
    'Inserts the element 99 at index 1, shifting other elements to the right.',
    'add',
    'O(n)',
    'Inserting at the beginning of a large queue can be slow.',
  ),
  createCheatSheet(
    'Slicing the queue',
    'list(queue)[1:3]',
    'Returns a new list containing elements from index 1 to 2 (3 is excluded).',
    'access',
    'O(k)',
    'Slicing a large queue can be memory-intensive.',
  ),
  createCheatSheet(
    'Sorting the queue',
    'sorted(queue)',
    'Returns a new sorted list from the elements of the queue.',
    'modify',
    'O(n log n)',
    'Sorting a large queue can be memory-intensive.',
  ),
  createCheatSheet(
    'Sorting the queue in descending order',
    'sorted(queue, reverse=True)',
    'Returns a new sorted list from the elements of the queue in descending order.',
    'modify',
    'O(n log n)',
    'Sorting a large queue can be memory-intensive.',
  ),
];
