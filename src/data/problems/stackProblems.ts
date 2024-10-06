import { createProblem, Problem } from '@/common/commonProblem';

export const stackProblems: Problem[] = [
  createProblem(
    'Valid Parentheses (Leetcode 20)',
    'Easy',
    "Given a string s containing just the characters '(', ')', '{', '}', '[', and ']', determine if the input string is valid. An input string is valid if: Open brackets must be closed by the same type of brackets. Open brackets must be closed in the correct order.",
    [
      {
        code: `def is_valid(s):
    # Create a mapping of closing brackets to their corresponding opening brackets
    bracket_map = {')': '(', '}': '{', ']': '['}
    # Initialize an empty stack to keep track of opening brackets
    stack = []
    
    # Iterate through each character in the stringa
    for char in s:
        # If the character is a closing bracket
        if char in bracket_map:
            # Pop the top element from the stack if it's not empty, otherwise use a dummy value
            top_element = stack.pop() if stack else '#'
            # Check if the popped element matches the corresponding opening bracket
            if bracket_map[char] != top_element:
                return False
        else:
            # If the character is an opening bracket, push it onto the stack
            stack.append(char)
    
    # If the stack is empty, all opening brackets have been matched correctly
    return not stack`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        explanation:
          'This solution uses a stack to ensure that each opening bracket is matched with a corresponding closing bracket in the correct order.',
      },
    ],
    'Use a stack to ensure that each opening bracket is matched with a corresponding closing bracket in the correct order.',
    'https://leetcode.com/problems/valid-parentheses/',
  ),
  createProblem(
    'Min Stack (Leetcode 155)',
    'Medium',
    'Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.',
    [
      {
        code: `class MinStack:
    def __init__(self):
        # Initialize two stacks: one for the actual values and one for the minimum values
        self.stack = []
        self.min_stack = []

    def push(self, val: int) -> None:
        # Push the value onto the main stack
        self.stack.append(val)
        # If the min_stack is empty or the value is less than or equal to the current minimum, push it onto the min_stack
        if not self.min_stack or val <= self.min_stack[-1]:
            self.min_stack.append(val)

    def pop(self) -> None:
        # Pop the top value from the main stack
        if self.stack:
            val = self.stack.pop()
            # If the popped value is the current minimum, pop it from the min_stack as well
            if val == self.min_stack[-1]:
                self.min_stack.pop()

    def top(self) -> int:
        # Return the top value from the main stack
        if self.stack:
            return self.stack[-1]

    def getMin(self) -> int:
        # Return the current minimum value from the min_stack
        if self.min_stack:
            return self.min_stack[-1]`,
        timeComplexity: 'O(1) for all operations',
        spaceComplexity: 'O(n)',
        explanation:
          'This solution uses two stacks: one for the actual values and one for the minimum values. The min_stack keeps track of the minimum value at each state of the stack.',
      },
    ],
    'Use two stacks: one for the actual values and one for the minimum values.',
    'https://leetcode.com/problems/min-stack/',
  ),
  createProblem(
    'Evaluate Reverse Polish Notation (Leetcode 150)',
    'Medium',
    'Evaluate the value of an arithmetic expression in Reverse Polish Notation. Valid operators are +, -, *, and /. Each operand may be an integer or another expression.',
    [
      {
        code: `def evalRPN(tokens):
    # Initialize an empty stack to store operands
    stack = []
    
    # Iterate through each token in the input list
    for token in tokens:
        # If the token is an operator, pop the top two elements from the stack
        if token in "+-*/":
            b = stack.pop()
            a = stack.pop()
            # Perform the operation and push the result back onto the stack
            if token == '+':
                stack.append(a + b)
            elif token == '-':
                stack.append(a - b)
            elif token == '*':
                stack.append(a * b)
            elif token == '/':
                stack.append(int(a / b))  # Use integer division
        else:
            # If the token is an operand, convert it to an integer and push it onto the stack
            stack.append(int(token))
    
    # The final result will be the only element left in the stack
    return stack[0]`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        explanation:
          'This solution uses a stack to evaluate the expression in Reverse Polish Notation. Operands are pushed onto the stack, and when an operator is encountered, the top two operands are popped, the operation is performed, and the result is pushed back onto the stack.',
      },
    ],
    'Use a stack to evaluate the expression in Reverse Polish Notation.',
    'https://leetcode.com/problems/evaluate-reverse-polish-notation/',
  ),
  createProblem(
    'Daily Temperatures (Leetcode 739)',
    'Medium',
    'Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.',
    [
      {
        code: `def dailyTemperatures(temperatures):
    # Initialize an array of the same length as temperatures with 0s
    answer = [0] * len(temperatures)
    # Initialize an empty stack to store indices of temperatures
    stack = []
    
    # Iterate through each temperature with its index
    for i, temp in enumerate(temperatures):
        # While the stack is not empty and the current temperature is greater than the temperature at the index stored at the top of the stack
        while stack and temperatures[stack[-1]] < temp:
            # Pop the top index from the stack
            prev_index = stack.pop()
            # Calculate the number of days until a warmer temperature and store it in the answer array
            answer[prev_index] = i - prev_index
        # Push the current index onto the stack
        stack.append(i)
    
    return answer`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        explanation:
          'This solution uses a stack to keep track of indices of temperatures. For each temperature, it checks if the current temperature is warmer than the temperature at the index stored at the top of the stack. If so, it calculates the number of days until a warmer temperature and stores it in the answer array.',
      },
    ],
    'Use a stack to keep track of indices of temperatures and calculate the number of days until a warmer temperature.',
    'https://leetcode.com/problems/daily-temperatures/',
  ),
  createProblem(
    'Decode String (Leetcode 394)',
    'Medium',
    'Given an encoded string, return its decoded string. The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.',
    [
      {
        code: `def decodeString(s):
    # Initialize an empty stack to store characters and numbers
    stack = []
    # Initialize current number and current string variables
    current_num = 0
    current_str = ''
    
    # Iterate through each character in the input string
    for char in s:
        if char.isdigit():
            # If the character is a digit, update the current number
            current_num = current_num * 10 + int(char)
        elif char == '[':
            # If the character is '[', push the current number and current string onto the stack
            stack.append(current_str)
            stack.append(current_num)
            # Reset current number and current string
            current_num = 0
            current_str = ''
        elif char == ']':
            # If the character is ']', pop the number and previous string from the stack
            num = stack.pop()
            prev_str = stack.pop()
            # Repeat the current string num times and concatenate it with the previous string
            current_str = prev_str + num * current_str
        else:
            # If the character is a letter, append it to the current string
            current_str += char
    
    return current_str`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        explanation:
          'This solution uses a stack to decode the string. It keeps track of the current number and current string, and when it encounters a closing bracket, it pops the number and previous string from the stack, repeats the current string the specified number of times, and concatenates it with the previous string.',
      },
    ],
    'Use a stack to decode the string by keeping track of the current number and current string.',
    'https://leetcode.com/problems/decode-string/',
  ),
  createProblem(
    'Largest Rectangle in Histogram (Leetcode 84)',
    'Hard',
    "Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.",
    [
      {
        code: `def largestRectangleArea(heights):
    # Initialize the maximum area variable
    max_area = 0
    # Initialize an empty stack to store indices of heights
    stack = []
    
    # Iterate through each height with its index
    for i, h in enumerate(heights):
        # While the stack is not empty and the current height is less than the height at the index stored at the top of the stack
        while stack and h < heights[stack[-1]]:
            # Pop the top index from the stack
            height = heights[stack.pop()]
            # Calculate the width of the rectangle
            width = i if not stack else i - stack[-1] - 1
            # Update the maximum area
            max_area = max(max_area, height * width)
        # Push the current index onto the stack
        stack.append(i)
    
    # After the loop, there may be remaining indices in the stack
    while stack:
        # Pop the top index from the stack
        height = heights[stack.pop()]
        # Calculate the width of the rectangle
        width = len(heights) if not stack else len(heights) - stack[-1] - 1
        # Update the maximum area
        max_area = max(max_area, height * width)
    
    return max_area`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        explanation:
          'This solution uses a stack to keep track of indices of heights. For each height, it checks if the current height is less than the height at the index stored at the top of the stack. If so, it calculates the area of the rectangle formed by the popped height and updates the maximum area.',
      },
    ],
    'Use a stack to keep track of indices of heights and calculate the area of the largest rectangle.',
    'https://leetcode.com/problems/largest-rectangle-in-histogram/',
  ),
];
