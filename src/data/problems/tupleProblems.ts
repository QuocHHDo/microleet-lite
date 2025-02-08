import { createProblem, Problem } from '@/common/commonProblem';

export const tupleProblems: Problem[] = [
  createProblem(
    'Max Tuple Pair (Custom Problem)',
    'Easy',
    'Given a list of tuples where each tuple contains two integers, return the tuple with the maximum sum of its elements.',
    [
      {
        code: `def max_tuple_pair(tuples):
    # Initialize variables to store the maximum sum and the corresponding tuple
    max_sum = float('-inf')
    max_tuple = None
    # Iterate through the list of tuples
    for t in tuples:
        # Calculate the sum of the current tuple
        current_sum = sum(t)
        # Update the maximum sum and the corresponding tuple if the current sum is greater
        if current_sum > max_sum:
            max_sum = current_sum
            max_tuple = t
    return max_tuple`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        explanation:
          'This solution iterates through each tuple, calculates the sum of each tuple\'s elements, and keeps track of the maximum sum and corresponding tuple.',
      },
    ],
    'Calculate the sum of each tuple and track the maximum sum.',
    'https://custom-url.com/max-tuple-pair',
  ),
  createProblem(
    'Sort Tuples by First Element (Custom Problem)',
    'Easy',
    'Given a list of tuples, sort them by the first element in each tuple.',
    [
      {
        code: `def sort_by_first(tuples):
    # Sort the list of tuples by the first element in each tuple
    return sorted(tuples, key=lambda x: x[0])`,
        timeComplexity: 'O(n log n)',
        spaceComplexity: 'O(n)',
        explanation:
          'This solution uses the built-in sorted function, which sorts the tuples by the first element in each tuple using a lambda function.',
      },
    ],
    'Use Python\'s built-in sorted function with a lambda key to sort by the first element.',
    'https://custom-url.com/sort-tuples-by-first-element',
  ),
  createProblem(
    'Tuple Swap (Custom Problem)',
    'Easy',
    'Given a tuple of two elements, swap them and return the new tuple.',
    [
      {
        code: `def swap_tuple(t):
    # Swap the elements of the tuple
    return (t[1], t[0])`,
        timeComplexity: 'O(1)',
        spaceComplexity: 'O(1)',
        explanation:
          'This solution swaps the two elements of the tuple in constant time since tuples have a fixed size.',
      },
    ],
    'Swap the two elements of the tuple.',
    'https://custom-url.com/tuple-swap',
  ),
  createProblem(
    'Tuple to Dictionary (Custom Problem)',
    'Medium',
    'Given a list of tuples where each tuple contains two elements, convert them into a dictionary where the first element of the tuple is the key and the second element is the value.',
    [
      {
        code: `def tuple_to_dict(tuples):
    # Convert the list of tuples into a dictionary
    return dict(tuples)`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        explanation:
          'This solution converts the list of tuples into a dictionary by using Python\'s built-in dict constructor, which takes a list of key-value pairs.',
      },
    ],
    'Use Python\'s dict constructor to convert the tuples into key-value pairs.',
    'https://custom-url.com/tuple-to-dict',
  ),
  createProblem(
    'Find Tuple with Specific Value (Custom Problem)',
    'Medium',
    'Given a list of tuples and an integer x, find the first tuple where the second element is equal to x.',
    [
      {
        code: `def find_tuple_with_value(tuples, x):
    # Iterate through the list of tuples
    for t in tuples:
        # Check if the second element equals x
        if t[1] == x:
            return t
    # Return None if no such tuple is found
    return None`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        explanation:
          'This solution iterates through the tuples and returns the first tuple where the second element equals the target value.',
      },
    ],
    'Iterate through the tuples and check the second element against the target value.',
    'https://custom-url.com/find-tuple-with-specific-value',
  ),
];
