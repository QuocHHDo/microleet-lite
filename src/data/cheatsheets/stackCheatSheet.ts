import { CheatSheetItem, createCheatSheet } from '@/common/commonCheatSheet';

export const stackCheatSheet: CheatSheetItem[] = [
  createCheatSheet(
    'Creating a stack',
    'stack = []',
    'Initializes an empty stack using a list.',
    'create',
    'O(1)',
    'N/A',
  ),
  createCheatSheet(
    'Pushing an element onto the stack',
    'stack.append(1)',
    'Adds the element 1 to the top of the stack.',
    'add',
    'O(1)',
    'Appending to a large stack can cause memory reallocation.',
  ),
  createCheatSheet(
    'Popping an element from the stack',
    'stack.pop()',
    'Removes and returns the top element of the stack.',
    'remove',
    'O(1)',
    'Popping from an empty stack will raise an error.',
  ),
  createCheatSheet(
    'Checking if the stack is empty',
    'len(stack) == 0',
    'Returns True if the stack is empty, otherwise False.',
    'utility',
    'O(1)',
    'N/A',
  ),
  createCheatSheet(
    'Accessing the top element',
    'stack[-1]',
    'Returns the top element of the stack without removing it.',
    'access',
    'O(1)',
    'Accessing the top element of an empty stack will raise an error.',
  ),
  createCheatSheet(
    'Length of the stack',
    'len(stack)',
    'Returns the number of elements in the stack.',
    'utility',
    'O(1)',
    'N/A',
  ),
  createCheatSheet(
    'Clearing the stack',
    'stack.clear()',
    'Removes all elements from the stack, making it empty.',
    'remove',
    'O(1)',
    'Clearing a stack does not free up memory immediately.',
  ),
  createCheatSheet(
    'Copying a stack',
    'new_stack = stack.copy()',
    'Creates a shallow copy of the stack.',
    'utility',
    'O(n)',
    'Copying a large stack can be memory-intensive.',
  ),
  createCheatSheet(
    'Reversing the stack',
    'stack.reverse()',
    'Reverses the order of elements in the stack.',
    'modify',
    'O(n)',
    'Reversing a large stack can be memory-intensive.',
  ),
  createCheatSheet(
    'Checking if an element is in the stack',
    '3 in stack',
    'Returns True if the element 3 is in the stack, otherwise False.',
    'search',
    'O(n)',
    'Checking for an element in a large stack can be slow.',
  ),
  createCheatSheet(
    'Counting occurrences of an element',
    'stack.count(3)',
    'Returns the number of times the element 3 appears in the stack.',
    'search',
    'O(n)',
    'Counting occurrences in a large stack can be slow.',
  ),
  createCheatSheet(
    'Finding the index of an element',
    'stack.index(3)',
    'Returns the index of the first occurrence of the element 3.',
    'search',
    'O(n)',
    'Searching for an element not in the stack will raise an error.',
  ),
  createCheatSheet(
    'Extending the stack',
    'stack.extend([4, 5])',
    'Adds the elements 4 and 5 to the top of the stack.',
    'add',
    'O(k)',
    'Extending a stack with a large number of elements can cause memory reallocation.',
  ),
  createCheatSheet(
    'Concatenating stacks',
    'stack + [6, 7]',
    'Concatenates the stack with another list [6, 7].',
    'add',
    'O(n + m)',
    'Concatenating large stacks can be memory-intensive.',
  ),
  createCheatSheet(
    'Removing an element by value',
    'stack.remove(2)',
    'Removes the first occurrence of the element 2 from the stack.',
    'remove',
    'O(n)',
    'Removing an element from a large stack can be slow.',
  ),
  createCheatSheet(
    'Inserting an element at a specific index',
    'stack.insert(1, 99)',
    'Inserts the element 99 at index 1, shifting other elements to the right.',
    'add',
    'O(n)',
    'Inserting at the beginning of a large stack can be slow.',
  ),
  createCheatSheet(
    'Slicing the stack',
    'stack[1:3]',
    'Returns a new list containing elements from index 1 to 2 (3 is excluded).',
    'access',
    'O(k)',
    'Slicing a large stack can be memory-intensive.',
  ),
  createCheatSheet(
    'Sorting the stack',
    'stack.sort()',
    'Sorts the stack in ascending order.',
    'modify',
    'O(n log n)',
    'Sorting a large stack can be memory-intensive.',
  ),
  createCheatSheet(
    'Sorting the stack in descending order',
    'stack.sort(reverse=True)',
    'Sorts the stack in descending order.',
    'modify',
    'O(n log n)',
    'Sorting a large stack can be memory-intensive.',
  ),
];
