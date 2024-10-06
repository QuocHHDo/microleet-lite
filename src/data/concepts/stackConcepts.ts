import { Concept, createConcept, Difficulty } from '@/common/commonConcept';
import { generateTimeComplexityTable } from '@/utils/generateTimeComplexityTable';

export const stackConcepts: Concept[] = [
  createConcept(
    1,
    'What is a Stack? How does it differ from other data structures?',
    `
  **Definition:** A stack is a linear data structure that follows the Last In, First Out (LIFO) principle. This means that the last element added to the stack will be the first one to be removed.
  
  **Basic Structure:** Stacks typically support two main operations: push (add an element to the top) and pop (remove the top element).
  
  **Example:**
  \`\`\`python
  my_stack = []
  my_stack.append(1)  # Push 1 onto the stack
  my_stack.append(2)  # Push 2 onto the stack
  print(my_stack.pop())  # Pop 2 from the stack (Output: 2)
  \`\`\`
  
  **Key Characteristics:**
  - **LIFO Order:** The last element added is the first one to be removed.
  - **Limited Access:** Elements can only be accessed from the top of the stack.
  - **Common Use Cases:** Function call management, undo mechanisms, expression evaluation, and more.
      `,
    Difficulty.Beginner,
  ),
  createConcept(
    2,
    'What are the advantages and disadvantages of using stacks?',
    `
  <h2>Advantages:</h2>
  <ul>
    <li><strong>Simple Implementation:</strong> Stacks are straightforward to implement and use.</li>
    <li><strong>Efficient Operations:</strong> Both push and pop operations are O(1) time complexity.</li>
    <li><strong>Useful for LIFO Scenarios:</strong> Ideal for scenarios where the last added element needs to be processed first.</li>
  </ul>
  
  <h2>Disadvantages:</h2>
  <ul>
    <li><strong>Limited Access:</strong> Only the top element can be accessed directly.</li>
    <li><strong>Not Suitable for Random Access:</strong> Cannot access elements in the middle of the stack efficiently.</li>
    <li><strong>Potential for Overflow/Underflow:</strong> If not managed properly, stacks can overflow (too many elements) or underflow (no elements to pop).</li>
  </ul>
  
  **Example:**
  \`\`\`python
  my_stack = []
  my_stack.append(1)  # Push 1 onto the stack
  my_stack.append(2)  # Push 2 onto the stack
  print(my_stack.pop())  # Pop 2 from the stack (Output: 2)
  \`\`\`
  
  **Key Points:**
  - Stacks are ideal for scenarios where LIFO order is required.
  - For random access or FIFO order, other data structures like arrays or queues may be more suitable.
      `,
    Difficulty.Beginner,
  ),
  createConcept(
    3,
    'What is the time complexity of common operations on a stack (push, pop, peek)?',
    `
**Time Complexity of Common Operations on Stacks:**
${generateTimeComplexityTable([
  {
    name: 'Push',
    complexity: 'O(1)',
    explanation:
      'Adding an element to the top of the stack is a constant-time operation.',
  },
  {
    name: 'Pop',
    complexity: 'O(1)',
    explanation:
      'Removing the top element from the stack is a constant-time operation.',
  },
  {
    name: 'Peek',
    complexity: 'O(1)',
    explanation:
      'Accessing the top element without removing it is a constant-time operation.',
  },
  {
    name: 'Search',
    complexity: 'O(n)',
    explanation:
      'Searching for an element in the stack requires iterating through all elements.',
  },
])}
**Key Points:**
- Stacks are optimized for fast push and pop operations, making them efficient for LIFO scenarios.
- Searching for an element in a stack is inefficient due to the need to iterate through all elements.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    4,
    'Explain the difference between a stack and a queue.',
    `
  **Stacks:**
  - **LIFO Principle:** Last In, First Out. The last element added is the first one to be removed.
  - **Operations:** Mainly push (add to the top) and pop (remove from the top).
  - **Example:** Function call management, undo mechanisms, expression evaluation.
  
  **Queues:**
  - **FIFO Principle:** First In, First Out. The first element added is the first one to be removed.
  - **Operations:** Mainly enqueue (add to the end) and dequeue (remove from the front).
  - **Example:** Task scheduling, message processing, breadth-first search algorithms.
  
  **Key Points:**
  - Stacks are ideal for LIFO scenarios, while queues are ideal for FIFO scenarios.
  - Both data structures are linear and have their specific use cases depending on the order of processing required.
      `,
    Difficulty.Beginner,
  ),
  createConcept(
    5,
    'What are some common use cases for stacks in programming?',
    `
  **Common Use Cases for Stacks:**
  <ul>
    <li><strong>Function Call Management:</strong> Stacks are used to manage function calls and their local variables in most programming languages.</li>
    <li><strong>Undo Mechanisms:</strong> Stacks can be used to implement undo functionality in applications.</li>
    <li><strong>Expression Evaluation:</strong> Stacks are used in algorithms to evaluate mathematical expressions, especially those involving parentheses and operators.</li>
    <li><strong>Backtracking Algorithms:</strong> Stacks are used in backtracking algorithms to keep track of the current state and revert to previous states.</li>
    <li><strong>Browser History:</strong> Stacks can be used to implement the back button functionality in web browsers.</li>
  </ul>
  
  **Example:**
  \`\`\`python
  # Simple undo mechanism using a stack
  undo_stack = []
  text = ""
  
  def add_text(new_text):
      global text
      undo_stack.append(text)
      text += new_text
  
  def undo():
      global text
      if undo_stack:
          text = undo_stack.pop()
  
  add_text("Hello")
  add_text(" World")
  print(text)  # Output: Hello World
  undo()
  print(text)  # Output: Hello
  \`\`\`
  
  **Key Points:**
  - Stacks are versatile and can be applied to various scenarios requiring LIFO order.
  - Understanding the use cases helps in choosing the right data structure for a given problem.
      `,
    Difficulty.Beginner,
  ),
];
