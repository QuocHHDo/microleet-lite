import {
  CheatSheetItem,
  createCheatSheet,
  OperationTypes,
} from '@/common/commonCheatSheet';

export const tupleCheatSheet: CheatSheetItem[] = [
  // CREATE
  createCheatSheet(
    'Creating a tuple',
    `my_tuple = (1, 2, 3)`,
    'Initializes a tuple with the elements 1, 2, and 3.',
    OperationTypes.Create,
    'O(n)',
    'Memory usage can be significant for large tuples.',
  ),
  createCheatSheet(
    'Tuple packing',
    `my_tuple = 1, 2, 3`,
    'Creates a tuple by implicitly packing values (1, 2, 3).',
    OperationTypes.Create,
    'O(n)',
    'Often concise but can be less explicit.',
  ),
  createCheatSheet(
    'Tuple unpacking',
    `a, b, c = my_tuple`,
    'Assigns tuple elements to individual variables a, b, c.',
    OperationTypes.Create,
    'O(n)',
    'Number of variables must match the tuple length.',
  ),
  createCheatSheet(
    'Tuple with a single element',
    `single_tuple = (1,)`,
    'Defines a tuple containing just one element (note the trailing comma).',
    OperationTypes.Create,
    'O(1)',
    'A trailing comma differentiates it from a parenthesized expression.',
  ),
  createCheatSheet(
    'Tuple with no elements',
    `empty_tuple = ()`,
    'Creates an empty tuple with no elements.',
    OperationTypes.Create,
    'O(1)',
    'N/A',
  ),

  // ACCESS
  createCheatSheet(
    'Accessing elements',
    `first_elem = my_tuple[0]`,
    'Retrieves the first element of the tuple (index 0).',
    OperationTypes.Access,
    'O(1)',
    'IndexError if out of bounds.',
  ),
  createCheatSheet(
    'Slicing a tuple',
    `slice_of_tuple = my_tuple[1:3]`,
    'Returns a new tuple from index 1 to 2 (3 is excluded).',
    OperationTypes.Access,
    'O(k)',
    'Slicing large tuples can be memory-intensive.',
  ),

  // MODIFY
  createCheatSheet(
    'Concatenating tuples',
    `merged = my_tuple + (4, 5)`,
    'Creates a new tuple by concatenating `(4, 5)` to `my_tuple`.',
    OperationTypes.Modify,
    'O(n + m)',
    'Memory-intensive with large tuples.',
  ),
  createCheatSheet(
    'Repeating a tuple',
    `repeated = my_tuple * 3`,
    'Repeats the tuple 3 times to form a new tuple.',
    OperationTypes.Modify,
    'O(n * k)',
    'Memory-intensive if repeated many times.',
  ),
  createCheatSheet(
    'Sorting a tuple',
    `sorted_list = sorted(my_tuple)`,
    'Returns a new **list** of the tuple’s elements in ascending order.',
    OperationTypes.Modify,
    'O(n log n)',
    'Sorting large tuples can be memory-intensive.',
  ),
  createCheatSheet(
    'Reversing a tuple',
    `reversed_tuple = my_tuple[::-1]`,
    'Creates a new tuple with the elements in reverse order.',
    OperationTypes.Modify,
    'O(n)',
    'Memory-intensive for large tuples.',
  ),

  // SEARCH
  createCheatSheet(
    'Finding the index of an element',
    `idx = my_tuple.index(2)`,
    'Returns the index of the first occurrence of `2`.',
    OperationTypes.Search,
    'O(n)',
    'Raises ValueError if element is not found.',
  ),
  createCheatSheet(
    'Counting occurrences of an element',
    `count_2 = my_tuple.count(2)`,
    'Counts how many times `2` appears in the tuple.',
    OperationTypes.Search,
    'O(n)',
    'Slow if the tuple is large.',
  ),
  createCheatSheet(
    'Check if an element exists',
    `result = 2 in my_tuple`,
    'Returns True if `2` is in `my_tuple`, otherwise False.',
    OperationTypes.Search,
    'O(n)',
    'Slower for large tuples.',
  ),

  // UTILITY
  createCheatSheet(
    'Length of a tuple',
    `length = len(my_tuple)`,
    'Returns the number of elements in `my_tuple`.',
    OperationTypes.Utility,
    'O(1)',
    'N/A',
  ),
  createCheatSheet(
    'Copy a tuple',
    `copy_tuple = my_tuple[:]`,
    'Creates a shallow copy of the tuple.',
    OperationTypes.Utility,
    'O(n)',
    'Memory-intensive if the tuple is large.',
  ),
  createCheatSheet(
    'Tuple as dictionary keys',
    `my_dict = {(1, 2): "value"}`,
    'Demonstrates that tuples are hashable and can serve as dict keys.',
    OperationTypes.Utility,
    'O(1)',
    'Tuples must be immutable (no mutable types inside).',
  ),
  createCheatSheet(
    'Tuple as elements in a set',
    `my_set = {(1, 2), (3, 4)}`,
    'Tuples can also be placed in sets since they are hashable.',
    OperationTypes.Utility,
    'O(1)',
    'Mutable elements inside the tuple would break hashing.',
  ),
  createCheatSheet(
    'Tuple comparison',
    `(1, 2) < (1, 3)`,
    'Compares two tuples lexicographically (element by element).',
    OperationTypes.Utility,
    'O(n)',
    'Comparison stops at the first differing element.',
  ),
];
