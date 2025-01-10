import { CheatSheetItem, createCheatSheet, OperationTypes } from '@/common/commonCheatSheet';

export const setCheatSheet: CheatSheetItem[] = [
  // CREATE
  createCheatSheet(
    'Creating a set',
    `my_set = {1, 2, 3}`,
    'Initializes a set with the elements 1, 2, and 3.',
    OperationTypes.Create,
    'O(n)',
    'If the set is very large, memory usage can be significant.',
  ),
  createCheatSheet(
    'Set comprehension',
    `{x for x in range(5)}`,
    'Creates a set {0, 1, 2, 3, 4} using a concise syntax.',
    OperationTypes.Create,
    'O(n)',
    'Nested set comprehensions can be hard to read and maintain.',
  ),

  // ADD
  createCheatSheet(
    'Adding an element',
    `my_set.add(4)`,
    'Adds the element 4 to the set.',
    OperationTypes.Add,
    'O(1)',
    'Adding an element that already exists has no effect.',
  ),
  createCheatSheet(
    'Updating a set with another set',
    `my_set.update({5, 6})`,
    'Adds the elements 5 and 6 to my_set.',
    OperationTypes.Add,
    'O(k)',
    'Updating a set with many elements can cause memory reallocation.',
  ),

  // REMOVE
  createCheatSheet(
    'Removing an element',
    `my_set.remove(2)`,
    'Removes the element 2 from the set.',
    OperationTypes.Remove,
    'O(1)',
    'Removing a non-existent element raises a KeyError.',
  ),
  createCheatSheet(
    'Discarding an element',
    `my_set.discard(2)`,
    'Removes element 2 if it exists; does nothing otherwise.',
    OperationTypes.Remove,
    'O(1)',
    'Discarding a non-existent element has no effect.',
  ),
  createCheatSheet(
    'Popping an element',
    `my_set.pop()`,
    'Removes and returns an arbitrary element from the set.',
    OperationTypes.Remove,
    'O(1)',
    'Popping from an empty set raises a KeyError.',
  ),
  createCheatSheet(
    'Clearing a set',
    `my_set.clear()`,
    'Removes all elements from the set, leaving it empty.',
    OperationTypes.Remove,
    'O(1)',
    'Does not immediately free memory.',
  ),

  // SEARCH
  createCheatSheet(
    'Checking membership',
    `3 in my_set`,
    'Returns True if 3 is in my_set, otherwise False.',
    OperationTypes.Search,
    'O(1)',
    'N/A',
  ),

  // UTILITY
  createCheatSheet(
    'Finding the union of two sets',
    `my_set.union({4, 5})`,
    'Returns a new set with elements from both my_set and {4, 5}.',
    OperationTypes.Utility,
    'O(n + m)',
    'Can be memory-intensive for large sets.',
  ),
  createCheatSheet(
    'Finding the intersection of two sets',
    `my_set.intersection({3, 4})`,
    'Returns a new set with elements common to both sets.',
    OperationTypes.Utility,
    'O(min(n, m))',
    'Intersection of large sets can be memory-intensive.',
  ),
  createCheatSheet(
    'Finding the difference of two sets',
    `my_set.difference({3, 4})`,
    'Returns a new set with elements in my_set but not in {3, 4}.',
    OperationTypes.Utility,
    'O(n)',
    'Difference of large sets can be memory-intensive.',
  ),
  createCheatSheet(
    'Finding the symmetric difference of two sets',
    `my_set.symmetric_difference({3, 4})`,
    'Returns a new set with elements in either set but not in both.',
    OperationTypes.Utility,
    'O(n + m)',
    'Symmetric difference of large sets can be memory-intensive.',
  ),
  createCheatSheet(
    'Checking if a set is a subset',
    `my_set.issubset({1, 2, 3, 4})`,
    'Returns True if all elements of my_set are in the other set.',
    OperationTypes.Utility,
    'O(n)',
    'N/A',
  ),
  createCheatSheet(
    'Checking if a set is a superset',
    `my_set.issuperset({1, 2})`,
    'Returns True if my_set contains all elements of {1, 2}.',
    OperationTypes.Utility,
    'O(n)',
    'N/A',
  ),
  createCheatSheet(
    'Checking if two sets are disjoint',
    `my_set.isdisjoint({4, 5})`,
    'Returns True if my_set and {4, 5} have no common elements.',
    OperationTypes.Utility,
    'O(n)',
    'N/A',
  ),
  createCheatSheet(
    'Length of a set',
    `len(my_set)`,
    'Returns the number of elements in my_set.',
    OperationTypes.Utility,
    'O(1)',
    'N/A',
  ),
  createCheatSheet(
    'Copy a set',
    `new_set = my_set.copy()`,
    'Creates a shallow copy of my_set.',
    OperationTypes.Utility,
    'O(n)',
    'Copying a large set can be memory-intensive.',
  ),
];

