import { CheatSheetItem, createCheatSheet, OperationTypes } from '@/common/commonCheatSheet';

export const heapCheatSheet: CheatSheetItem[] = [
  // CREATE
  createCheatSheet(
    'Creating a min-heap',
    `import heapq
min_heap = []
heapq.heapify(min_heap)`,
    'Initializes an empty min-heap using the `heapq` module.',
    OperationTypes.Create,
    'O(n)',
    'N/A',
  ),
  createCheatSheet(
    'Creating a max-heap',
    `import heapq
max_heap = []
heapq.heapify(max_heap)`,
    'Initializes an empty max-heap using the `heapq` module. Note that `heapq` only provides a min-heap structure by default, so you must invert the values when pushing/popping for a max-heap.',
    OperationTypes.Create,
    'O(n)',
    'N/A',
  ),
  createCheatSheet(
    'Heapifying a list',
    'heapq.heapify(my_list)',
    'Converts an existing list `my_list` into a min-heap in place.',
    OperationTypes.Create,
    'O(n)',
    'N/A',
  ),
  createCheatSheet(
    'Creating a priority queue',
    `import heapq
priority_queue = []
heapq.heappush(priority_queue, (priority, item))`,
    'Creates a priority queue using a min-heap, where the priority is the first element in the tuple.',
    OperationTypes.Create,
    'O(log n)',
    'N/A',
  ),

  // ADD
  createCheatSheet(
    'Inserting an element into a min-heap',
    'heapq.heappush(min_heap, 5)',
    'Pushes the element 5 onto the min-heap, maintaining heap order.',
    OperationTypes.Add,
    'O(log n)',
    'N/A',
  ),
  createCheatSheet(
    'Inserting an element into a max-heap',
    'heapq.heappush(max_heap, -5)',
    'Pushes the element 5 onto the max-heap by inserting its negated value (-5).',
    OperationTypes.Add,
    'O(log n)',
    'N/A',
  ),

  // REMOVE
  createCheatSheet(
    'Extracting the minimum element from a min-heap',
    'min_element = heapq.heappop(min_heap)',
    'Removes and returns the smallest element from the min-heap.',
    OperationTypes.Remove,
    'O(log n)',
    'Popping from an empty heap raises an IndexError.',
  ),
  createCheatSheet(
    'Extracting the maximum element from a max-heap',
    'max_element = -heapq.heappop(max_heap)',
    'Removes and returns the largest element from the max-heap by negating the popped value.',
    OperationTypes.Remove,
    'O(log n)',
    'Popping from an empty heap raises an IndexError.',
  ),
  createCheatSheet(
    'Extracting the highest priority item from a priority queue',
    'priority, item = heapq.heappop(priority_queue)',
    'Removes and returns the item with the highest priority (lowest priority number) from the priority queue.',
    OperationTypes.Remove,
    'O(log n)',
    'Popping from an empty priority queue raises an IndexError.',
  ),

  // ACCESS
  createCheatSheet(
    'Accessing the minimum element in a min-heap',
    'min_element = min_heap[0]',
    'Returns the smallest element without removing it from the min-heap.',
    OperationTypes.Access,
    'O(1)',
    'Accessing an empty heap raises an IndexError.',
  ),
  createCheatSheet(
    'Accessing the maximum element in a max-heap',
    'max_element = -max_heap[0]',
    'Returns the largest element in the max-heap by negating the smallest value.',
    OperationTypes.Access,
    'O(1)',
    'Accessing an empty heap raises an IndexError.',
  ),

  // MODIFY
  createCheatSheet(
    'Replacing the minimum element in a min-heap',
    'removed_element = heapq.heapreplace(min_heap, 10)',
    'Removes the smallest element and inserts 10 into the min-heap in one operation.',
    OperationTypes.Modify,
    'O(log n)',
    'Useful for replacing the top and keeping heap size constant.',
  ),
  createCheatSheet(
    'Replacing the maximum element in a max-heap',
    'removed_element = -heapq.heapreplace(max_heap, -10)',
    'Removes the largest element and inserts 10 into the max-heap by negating values.',
    OperationTypes.Modify,
    'O(log n)',
    'Useful for maintaining the size of the max-heap.',
  ),
  createCheatSheet(
    'Pushing and popping from a min-heap',
    'result = heapq.heappushpop(min_heap, 10)',
    'Pushes 10 onto the min-heap, then immediately pops and returns the smallest element.',
    OperationTypes.Modify,
    'O(log n)',
    'More efficient than pushing followed by popping.',
  ),
  createCheatSheet(
    'Pushing and popping from a max-heap',
    'result = -heapq.heappushpop(max_heap, -10)',
    'Pushes 10 (negated) onto the max-heap, then pops and returns the largest element by negating again.',
    OperationTypes.Modify,
    'O(log n)',
    'More efficient than separate push and pop calls.',
  ),

  // UTILITY
  createCheatSheet(
    'Merging two heaps',
    'merged_iter = heapq.merge(heap1, heap2)',
    'Returns an iterator that merges the elements of two sorted inputs in sorted order.',
    OperationTypes.Utility,
    'O(n + m)',
    'n and m are the sizes of the two heaps/lists.',
  ),
  createCheatSheet(
    'Finding the n smallest elements',
    'smallest_elements = heapq.nsmallest(3, my_list)',
    'Returns the 3 smallest elements from `my_list` using a heap-based approach.',
    OperationTypes.Utility,
    'O(n log k)',
    'k is the number of elements to find.',
  ),
  createCheatSheet(
    'Finding the n largest elements',
    'largest_elements = heapq.nlargest(3, my_list)',
    'Returns the 3 largest elements from `my_list` using a heap-based approach.',
    OperationTypes.Utility,
    'O(n log k)',
    'k is the number of elements to find.',
  ),
  createCheatSheet(
    'Checking if a list is a valid min-heap',
    'is_min_heap = all(my_list[i] >= my_list[(i - 1) // 2] for i in range(1, len(my_list)))',
    'Verifies that each node is greater than or equal to its parent, a requirement for a valid min-heap.',
    OperationTypes.Utility,
    'O(n)',
    'N/A',
  ),
  createCheatSheet(
    'Checking if a list is a valid max-heap',
    'is_max_heap = all(my_list[i] <= my_list[(i - 1) // 2] for i in range(1, len(my_list)))',
    'Verifies that each node is less than or equal to its parent, a requirement for a valid max-heap.',
    OperationTypes.Utility,
    'O(n)',
    'N/A',
  ),
  createCheatSheet(
    'Sorting a list using a heap',
    'sorted_list = heapq.nsmallest(len(my_list), my_list)',
    'Sorts `my_list` by retrieving all elements in ascending order.',
    OperationTypes.Utility,
    'O(n log n)',
    'Equivalent to using a min-heap and popping repeatedly.',
  ),
];

