import {
  CheatSheetItem,
  createCheatSheet,
  OperationTypes,
} from '@/common/commonCheatSheet';

export const stackCheatSheet: CheatSheetItem[] = [
  // CREATE
  createCheatSheet(
    'Creating a stack',
    `stack = []`,
    'Initializes an empty stack using a list.',
    OperationTypes.Create,
    'O(1)',
    'N/A',
  ),

  // ADD
  createCheatSheet(
    'Pushing an element onto the stack',
    `stack.append(1)`,
    'Adds the element 1 to the top of the stack.',
    OperationTypes.Add,
    'O(1)',
    'Appending to a large stack can cause memory reallocation.',
  ),
  createCheatSheet(
    'Extending the stack',
    `stack.extend([4, 5])`,
    'Adds the elements 4 and 5 to the top of the stack.',
    OperationTypes.Add,
    'O(k)',
    'Extending a large stack can cause memory reallocation.',
  ),
  createCheatSheet(
    'Concatenating stacks',
    `stack + [6, 7]`,
    'Concatenates the stack with another list `[6, 7]` and returns a new list.',
    OperationTypes.Add,
    'O(n + m)',
    'Concatenating large stacks can be memory-intensive.',
  ),
  createCheatSheet(
    'Inserting an element at a specific index',
    `stack.insert(1, 99)`,
    'Inserts the element 99 at index 1, shifting other elements to the right.',
    OperationTypes.Add,
    'O(n)',
    'Inserting at the beginning of a large stack can be slow.',
  ),

  // REMOVE
  createCheatSheet(
    'Popping an element from the stack',
    `stack.pop()`,
    'Removes and returns the top element of the stack.',
    OperationTypes.Remove,
    'O(1)',
    'Popping from an empty stack raises an error.',
  ),
  createCheatSheet(
    'Clearing the stack',
    `stack.clear()`,
    'Removes all elements from the stack, making it empty.',
    OperationTypes.Remove,
    'O(1)',
    'Clearing does not free up memory immediately.',
  ),
  createCheatSheet(
    'Removing an element by value',
    `stack.remove(2)`,
    'Removes the first occurrence of the element 2 from the stack.',
    OperationTypes.Remove,
    'O(n)',
    'Removing an element from a large stack can be slow.',
  ),

  // ACCESS
  createCheatSheet(
    'Accessing the top element',
    `stack[-1]`,
    'Returns the top element of the stack without removing it.',
    OperationTypes.Access,
    'O(1)',
    'Accessing an empty stack raises an error.',
  ),
  createCheatSheet(
    'Slicing the stack',
    `stack[1:3]`,
    'Returns a new list containing elements from index 1 to 2 (3 is excluded).',
    OperationTypes.Access,
    'O(k)',
    'Slicing a large stack can be memory-intensive.',
  ),

  // MODIFY
  createCheatSheet(
    'Reversing the stack',
    `stack.reverse()`,
    'Reverses the order of elements in the stack in place.',
    OperationTypes.Modify,
    'O(n)',
    'Reversing a large stack can be memory-intensive.',
  ),
  createCheatSheet(
    'Sorting the stack',
    `stack.sort()`,
    'Sorts the stack in ascending order in place.',
    OperationTypes.Modify,
    'O(n log n)',
    'Sorting a large stack can be memory-intensive.',
  ),
  createCheatSheet(
    'Sorting the stack in descending order',
    `stack.sort(reverse=True)`,
    'Sorts the stack in descending order in place.',
    OperationTypes.Modify,
    'O(n log n)',
    'Sorting a large stack can be memory-intensive.',
  ),

  // SEARCH
  createCheatSheet(
    'Checking if an element is in the stack',
    `3 in stack`,
    'Returns True if 3 is in the stack, otherwise False.',
    OperationTypes.Search,
    'O(n)',
    'Checking a large stack can be slow.',
  ),
  createCheatSheet(
    'Counting occurrences of an element',
    `stack.count(3)`,
    'Returns how many times the element 3 appears in the stack.',
    OperationTypes.Search,
    'O(n)',
    'Counting in a large stack can be slow.',
  ),
  createCheatSheet(
    'Finding the index of an element',
    `stack.index(3)`,
    'Returns the index of the first occurrence of the element 3.',
    OperationTypes.Search,
    'O(n)',
    'Raises a ValueError if 3 is not in the stack.',
  ),

  // UTILITY
  createCheatSheet(
    'Checking if the stack is empty',
    `len(stack) == 0`,
    'Returns True if the stack is empty, otherwise False.',
    OperationTypes.Utility,
    'O(1)',
    'N/A',
  ),
  createCheatSheet(
    'Length of the stack',
    `len(stack)`,
    'Returns the number of elements in the stack.',
    OperationTypes.Utility,
    'O(1)',
    'N/A',
  ),
  createCheatSheet(
    'Copying a stack',
    `new_stack = stack.copy()`,
    'Creates a shallow copy of the stack.',
    OperationTypes.Utility,
    'O(n)',
    'Copying a large stack can be memory-intensive.',
  ),
];
