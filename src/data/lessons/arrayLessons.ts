import { createLesson, Lesson } from '../../common/commonLesson';

export const arrayLessons: Lesson[] = [
  createLesson(
    'Creating and Accessing Lists',
    'Learn how to create lists in Python and access elements by index.',
    `my_list = [1, 2, 3, 4, 5]\nprint(my_list[0])`,
    'Create a list of numbers and access the second element.',
    `my_list = [1, 2, 3, 4, 5]\n# Access the second element here`,
    `my_list = [1, 2, 3, 4, 5]\nsecond_element = my_list[1]`,
    'How do you access the first element in a Python list?',
    ['my_list[0]', 'my_list[1]', 'my_list.first()', 'my_list[-1]'],
    0,
  ),
  createLesson(
    'Basic Operations on Lists',
    'Master basic list operations like append, insert, remove, extend, pop, and more.',
    `my_list = [1, 2, 3]\nmy_list.append(4)\nprint(my_list)`,
    'Append a number to the list and then remove an element.',
    `my_list = [1, 2, 3]\n# Append and remove elements`,
    `my_list = [1, 2, 3]\nmy_list.append(4)\nmy_list.remove(2)`,
    'Which method is used to add an element to a list?',
    ['insert', 'append', 'pop', 'remove'],
    1,
  ),
  createLesson(
    'List Slicing',
    'Learn how to slice lists in Python to access subsets of data.',
    `my_list = [1, 2, 3, 4, 5]\nprint(my_list[1:4])`,
    'Slice the list to get the first three elements.',
    `my_list = [1, 2, 3, 4, 5]\n# Slice the list here`,
    `my_list = [1, 2, 3, 4, 5]\nfirst_three = my_list[:3]`,
    'What does my_list[1:3] return?',
    ['[2, 3, 4]', '[1, 2]', '[2, 3]', '[1, 3]'],
    2,
  ),
  createLesson(
    'List Comprehensions',
    'Understand list comprehensions to create lists efficiently in Python.',
    `squares = [x ** 2 for x in range(5)]\nprint(squares)`,
    'Use a list comprehension to create a list of even numbers from 0 to 10.',
    `# Create a list of even numbers here`,
    `even_numbers = [x for x in range(11) if x % 2 == 0]`,
    'Which of the following is a correct list comprehension?',
    [
      '[x for x in range(10)]',
      '[x ** 2 for x in range(10)]',
      '[x if x % 2 == 0 for x in range(10)]',
      '[x for range(10)]',
    ],
    1,
  ),
];
