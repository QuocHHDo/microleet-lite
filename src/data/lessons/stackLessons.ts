import { Difficulty } from '@/common/commonConcept';
import { Curriculum, LessonContent, LessonsTab } from '@/common/commonLesson';

const stackCurriculum: Curriculum = {
  title: 'Stack Curriculum',
  description:
    'A comprehensive guide to mastering stack data structure and its applications',
  sections: [
    {
      id: 1,
      title: 'Stack Fundamentals',
      topics: [
        {
          id: 'stack-concept',
          title: 'Stack Concept and Properties',
          description:
            'Understanding LIFO principle and basic stack operations',
        },
        {
          id: 'stack-implementation',
          title: 'Stack Implementation',
          description: 'Implementing stack using arrays and linked lists',
        },
        {
          id: 'stack-operations',
          title: 'Basic Stack Operations',
          description: 'Push, pop, peek, and isEmpty operations',
        },
      ],
    },
    {
      id: 2,
      title: 'Stack Applications',
      topics: [
        {
          id: 'expression-evaluation',
          title: 'Expression Evaluation',
          description:
            'Evaluating arithmetic and boolean expressions using stack',
        },
        {
          id: 'parentheses-matching',
          title: 'Parentheses Matching',
          description: 'Validating and matching different types of brackets',
        },
        {
          id: 'function-calls',
          title: 'Function Call Management',
          description: 'Understanding function call stack and recursion',
        },
      ],
    },
    {
      id: 3,
      title: 'String Manipulation with Stacks',
      topics: [
        {
          id: 'string-reversal',
          title: 'String Reversal',
          description: 'Using stack to reverse strings and sequences',
        },
        {
          id: 'backspace-string',
          title: 'Backspace String Compare',
          description: 'Handling backspace characters in strings',
        },
        {
          id: 'text-editor-operations',
          title: 'Text Editor Operations',
          description: 'Implementing undo/redo functionality using stacks',
        },
      ],
    },
    {
      id: 4,
      title: 'Monotonic Stack',
      topics: [
        {
          id: 'monotonic-concept',
          title: 'Monotonic Stack Concept',
          description:
            'Understanding increasing and decreasing monotonic stacks',
        },
        {
          id: 'next-greater-element',
          title: 'Next Greater Element',
          description: 'Finding next greater elements using monotonic stack',
        },
        {
          id: 'histogram-problems',
          title: 'Histogram Problems',
          description:
            'Solving rectangle and area problems using monotonic stack',
        },
      ],
    },
    {
      id: 5,
      title: 'Stack with Special Operations',
      topics: [
        {
          id: 'min-max-stack',
          title: 'Min/Max Stack',
          description:
            'Implementing stack with constant time minimum/maximum operations',
        },
        {
          id: 'stack-with-increment',
          title: 'Stack with Increment Operation',
          description: 'Implementing stack with bulk increment operations',
        },
      ],
    },
    {
      id: 6,
      title: 'Multiple Stacks',
      topics: [
        {
          id: 'two-stacks',
          title: 'Two Stacks',
          description: 'Problems involving operations with two stacks',
        },
        {
          id: 'stack-sequences',
          title: 'Stack Sequences',
          description: 'Validating push and pop sequences',
        },
      ],
    },
    {
      id: 7,
      title: 'Stack and Tree Problems',
      topics: [
        {
          id: 'tree-traversal',
          title: 'Tree Traversal using Stack',
          description: 'Implementing iterative tree traversals using stack',
        },
        {
          id: 'expression-tree',
          title: 'Expression Tree Evaluation',
          description: 'Building and evaluating expression trees using stack',
        },
      ],
    },
    {
      id: 8,
      title: 'Advanced Stack Techniques',
      topics: [
        {
          id: 'stack-sorting',
          title: 'Stack Sorting',
          description: 'Techniques for sorting elements in a stack',
        },
        {
          id: 'stack-optimization',
          title: 'Stack Optimization',
          description:
            'Space and time optimization techniques for stack operations',
        },
      ],
    },
  ],
};
const stackConceptData: LessonContent = {
  title: 'Stack Concept and Properties',
  content: `<p>
  A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle. Understanding stacks is crucial as they form the basis of many algorithms and system processes.
  </p>
  
  <ul>
  <li><strong>LIFO Principle:</strong> The last element added to the stack is the first one to be removed</li>
  <li><strong>Real-world Analogies:</strong> 
    <ul>
      <li>Stack of plates in a cafeteria</li>
      <li>Stack of books on a desk</li>
      <li>Browser's back button history</li>
    </ul>
  </li>
  <li><strong>Key Properties:</strong>
    <ul>
      <li>Elements can only be added/removed from one end (top)</li>
      <li>Random access is not allowed</li>
      <li>Useful for tracking state and reversing sequences</li>
    </ul>
  </li>
  <li><strong>Common Applications:</strong>
    <ul>
      <li>Function call stack in programming languages</li>
      <li>Expression evaluation and syntax parsing</li>
      <li>Undo mechanisms in text editors</li>
      <li>Backtracking algorithms</li>
    </ul>
  </li>
  </ul>`,
  codeExample: `# Conceptual visualization of stack operations
  def demonstrate_stack_concept():
      stack = []  # Empty stack
      
      # Pushing elements (LIFO demonstration)
      print("Pushing elements:")
      stack.append("First")    # Bottom of stack
      print(stack)            # ['First']
      stack.append("Second")   
      print(stack)            # ['First', 'Second']
      stack.append("Third")    # Top of stack
      print(stack)            # ['First', 'Second', 'Third']
      
      # Popping elements (LIFO demonstration)
      print("\nPopping elements:")
      print("Popped:", stack.pop())  # Returns "Third"
      print(stack)                   # ['First', 'Second']
      print("Popped:", stack.pop())  # Returns "Second"
      print(stack)                   # ['First']
      
  # Run demonstration
  demonstrate_stack_concept()
  
  # Real-world example: Browser back button history
  class BrowserHistory:
      def __init__(self):
          self.history = []
          
      def visit_page(self, url):
          self.history.append(url)
          print(f"Visited: {url}")
          
      def go_back(self):
          if self.history:
              previous_page = self.history.pop()
              print(f"Going back from: {previous_page}")
              return self.history[-1] if self.history else None
              
  # Example usage
  browser = BrowserHistory()
  browser.visit_page("google.com")
  browser.visit_page("github.com")
  browser.visit_page("stackoverflow.com")
  browser.go_back()  # Returns to github.com`,
  exercises: [
    {
      prompt:
        'Explain how the LIFO principle works using a real-world example of your choice.',
      initialCode: `# Write a comment explaining your example
  # Then implement a simple demonstration using a list
  
  def demonstrate_lifo():
      # Your code here
      pass`,
      solution: `# Example: Book stack on a desk
  # When we pile books, we can only add or remove from the top
  
  def demonstrate_lifo():
      book_stack = []
      
      # Adding books to stack
      book_stack.append("Book 1 (Bottom)")
      book_stack.append("Book 2 (Middle)")
      book_stack.append("Book 3 (Top)")
      
      print("Stack of books:", book_stack)
      
      # Removing books (can only take from top)
      top_book = book_stack.pop()
      print("Removed top book:", top_book)
      print("Remaining stack:", book_stack)
  
  demonstrate_lifo()`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which principle does a stack data structure follow?',
      options: [
        'FIFO (First-In-First-Out)',
        'LIFO (Last-In-First-Out)',
        'Random Access',
        'Ordered Access',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. FIFO is the principle used by queues.',
        'This is correct! Stack follows LIFO principle where the last element added is the first to be removed.',
        'This is incorrect. Stacks do not allow random access to elements.',
        'This is incorrect. While stacks are ordered, they specifically follow LIFO.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const stackImplementationData: LessonContent = {
  title: 'Stack Implementation',
  content: `<p>
  Stacks can be implemented using different underlying data structures, most commonly using arrays (lists in Python) or linked lists. Each implementation has its own advantages and trade-offs.
  </p>
  
  <ul>
  <li><strong>Array-based Implementation:</strong>
    <ul>
      <li>Uses a dynamic array (list in Python)</li>
      <li>Simple to implement</li>
      <li>Memory efficient for small stacks</li>
      <li>May require resizing for large stacks</li>
    </ul>
  </li>
  <li><strong>Linked List Implementation:</strong>
    <ul>
      <li>Uses nodes with references</li>
      <li>No size limitations</li>
      <li>No resizing needed</li>
      <li>Extra memory for node references</li>
    </ul>
  </li>
  </ul>`,
  codeExample: `# Array-based Stack Implementation
  class ArrayStack:
      def __init__(self):
          self.items = []
      
      def push(self, item):
          self.items.append(item)  # O(1) amortized
      
      def pop(self):
          if not self.is_empty():
              return self.items.pop()  # O(1)
          raise IndexError("Stack is empty")
      
      def peek(self):
          if not self.is_empty():
              return self.items[-1]  # O(1)
          raise IndexError("Stack is empty")
      
      def is_empty(self):
          return len(self.items) == 0  # O(1)
      
      def size(self):
          return len(self.items)  # O(1)
  
  # Linked List-based Stack Implementation
  class Node:
      def __init__(self, data):
          self.data = data
          self.next = None
  
  class LinkedStack:
      def __init__(self):
          self.top = None
          self._size = 0
      
      def push(self, item):
          new_node = Node(item)  # O(1)
          new_node.next = self.top
          self.top = new_node
          self._size += 1
      
      def pop(self):
          if self.is_empty():
              raise IndexError("Stack is empty")
          item = self.top.data  # O(1)
          self.top = self.top.next
          self._size -= 1
          return item
      
      def peek(self):
          if self.is_empty():
              raise IndexError("Stack is empty")
          return self.top.data  # O(1)
      
      def is_empty(self):
          return self.top is None  # O(1)
      
      def size(self):
          return self._size  # O(1)
  
  # Example usage of both implementations
  def compare_implementations():
      # Array Stack
      array_stack = ArrayStack()
      array_stack.push(1)
      array_stack.push(2)
      print("Array Stack:", array_stack.peek())  # 2
      
      # Linked Stack
      linked_stack = LinkedStack()
      linked_stack.push(1)
      linked_stack.push(2)
      print("Linked Stack:", linked_stack.peek())  # 2`,
  exercises: [
    {
      prompt: 'Implement a stack with a maximum capacity using an array.',
      initialCode: `class BoundedStack:
      def __init__(self, capacity):
          # Your code here
          pass
          
      def push(self, item):
          # Your code here
          pass
          
      def pop(self):
          # Your code here
          pass
          
      def is_full(self):
          # Your code here
          pass`,
      solution: `class BoundedStack:
      def __init__(self, capacity):
          self.capacity = capacity
          self.items = []
          
      def push(self, item):
          if self.is_full():
              raise OverflowError("Stack is full")
          self.items.append(item)
          
      def pop(self):
          if not self.items:
              raise IndexError("Stack is empty")
          return self.items.pop()
          
      def is_full(self):
          return len(self.items) >= self.capacity
  
  # Test the implementation
  stack = BoundedStack(2)
  stack.push(1)
  stack.push(2)
  # stack.push(3)  # This would raise OverflowError`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'What is the main advantage of using a linked list implementation over an array implementation for a stack?',
      options: [
        'Better memory usage',
        'No need for capacity management',
        'Faster operations',
        'Simpler implementation',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. Linked lists actually use more memory due to the node references.',
        'This is correct! Linked lists can grow without needing to resize or manage capacity.',
        'This is incorrect. Both implementations have O(1) operations.',
        'This is incorrect. Array implementation is typically simpler.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const stackOperationsData: LessonContent = {
  title: 'Basic Stack Operations',
  content: `<p>
  Every stack data structure supports a core set of operations that allow for efficient manipulation of the data. Understanding these operations and their time complexities is crucial for effective stack usage.
  </p>
  
  <ul>
  <li><strong>Core Operations:</strong>
    <ul>
      <li>push(item): Add an element to the top</li>
      <li>pop(): Remove and return the top element</li>
      <li>peek()/top(): View the top element without removing</li>
      <li>isEmpty(): Check if stack is empty</li>
    </ul>
  </li>
  <li><strong>Time Complexities:</strong>
    <ul>
      <li>All basic operations are O(1)</li>
      <li>No iteration through elements needed</li>
      <li>Direct access to top element</li>
    </ul>
  </li>
  </ul>`,
  codeExample: `class Stack:
      def __init__(self):
          self.items = []
          
      def push(self, item):
          """Add item to top of stack"""
          self.items.append(item)  # O(1) amortized
          
      def pop(self):
          """Remove and return top item"""
          if self.is_empty():
              raise IndexError("Pop from empty stack")
          return self.items.pop()  # O(1)
          
      def peek(self):
          """Return top item without removing"""
          if self.is_empty():
              raise IndexError("Peek at empty stack")
          return self.items[-1]  # O(1)
          
      def is_empty(self):
          """Return True if stack is empty"""
          return len(self.items) == 0  # O(1)
          
      def size(self):
          """Return number of items in stack"""
          return len(self.items)  # O(1)
  
  # Demonstration of operations
  def demonstrate_operations():
      stack = Stack()
      
      # Push operation
      print("Pushing elements:")
      stack.push(1)
      stack.push(2)
      stack.push(3)
      print("Stack after pushes:", stack.items)  # [1, 2, 3]
      
      # Peek operation
      print("Top element (peek):", stack.peek())  # 3
      
      # Pop operation
      print("Popped element:", stack.pop())  # 3
      print("Stack after pop:", stack.items)  # [1, 2]
      
      # isEmpty operation
      print("Is stack empty?", stack.is_empty())  # False
      
      # Size operation
      print("Stack size:", stack.size())  # 2
  
  # Run demonstration
  demonstrate_operations()`,
  exercises: [
    {
      prompt:
        'Implement a function that uses stack operations to check if a string is a palindrome.',
      initialCode: `def is_palindrome(s):
      # Your code here using stack operations
      pass`,
      solution: `def is_palindrome(s):
      stack = []
      # Push first half of characters onto stack
      mid = len(s) // 2
      for i in range(mid):
          stack.append(s[i])
      
      # Skip middle character for odd length strings
      start_index = mid + 1 if len(s) % 2 != 0 else mid
      
      # Compare second half with stack elements
      for i in range(start_index, len(s)):
          if not stack or stack.pop() != s[i]:
              return False
              
      return True
  
  # Test cases
  print(is_palindrome("racecar"))  # True
  print(is_palindrome("hello"))    # False`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the time complexity of the peek operation in a stack?',
      options: ['O(1)', 'O(n)', 'O(log n)', 'O(n log n)'],
      correctAnswer: 0,
      explanations: [
        'This is correct! Peek only accesses the top element, which is always O(1).',
        'This is incorrect. Peek does not need to traverse the stack.',
        'This is incorrect. Peek does not involve any searching.',
        'This is incorrect. Peek is a simple operation with no iteration.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};
const expressionEvaluationData: LessonContent = {
  title: 'Expression Evaluation',
  content: `<p>
  Stacks are essential in evaluating arithmetic and boolean expressions by managing operators and operands systematically.
  When an operator appears, the stack helps store previous operations or values, facilitating the evaluation process.
  </p>
  
  <ul>
  <li><strong>Postfix Evaluation:</strong> Utilizes a single stack to evaluate operators after operands.</li>
  <li><strong>Prefix Evaluation:</strong> Reverses operands and operators for quick access.</li>
  <li><strong>Infix Evaluation:</strong> Manages operator precedence and parentheses.</li>
  </ul>`,
  codeExample: `# Postfix Evaluation
  # O(n) time, where n is the expression length
  def evaluate_postfix(expression):
      stack = []
      for token in expression:
          if token.isdigit():
              stack.append(int(token))
          else:
              b = stack.pop()
              a = stack.pop()
              if token == '+':
                  stack.append(a + b)
              elif token == '-':
                  stack.append(a - b)
      return stack.pop()
  
  # Infix to Postfix Conversion
  # O(n) time & space
  def infix_to_postfix(expression):
      precedence = {'+':1, '-':1, '*':2, '/':2}
      output = []
      stack = []
      for token in expression:
          if token.isalnum():
              output.append(token)
          elif token == '(':
              stack.append(token)
          elif token == ')':
              while stack and stack[-1] != '(':
                  output.append(stack.pop())
              stack.pop()
          else:
              while (stack and stack[-1] != '(' and
                     precedence[token] <= precedence[stack[-1]]):
                  output.append(stack.pop())
              stack.append(token)
      while stack:
          output.append(stack.pop())
      return ''.join(output)`,
  exercises: [
    {
      prompt:
        'Evaluate the postfix expression "23*54*+" using stack operations.',
      initialCode: `# Write your solution here
  result = `,
      solution: `result = evaluate_postfix("23*54*+")`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Convert the infix expression "(A+B)*C" to postfix notation.',
      initialCode: `# Write your solution here
  postfix = `,
      solution: `postfix = infix_to_postfix("(A+B)*C")`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which stack operation is used to evaluate postfix expressions?',
      options: [
        'Push only',
        'Push and pop',
        'Only pop',
        'Neither push nor pop',
      ],
      correctAnswer: 1,
      explanations: [
        'Push and pop are both used to manage operands and operators in the stack.',
        'Correct. Stack evaluations require both pushing and popping.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const parenthesesMatchingData: LessonContent = {
  title: 'Parentheses Matching',
  content: `<p>
  Matching parentheses is crucial in syntax validation, where each opening parenthesis needs a corresponding closing one. Stacks help ensure a valid match by processing each symbol sequentially.
  </p>
  
  <ul>
  <li><strong>Types of Brackets:</strong> Curly braces, square brackets, and parentheses.</li>
  <li><strong>Validating Parentheses:</strong> Ensures each open symbol is closed in the correct order.</li>
  </ul>`,
  codeExample: `# Matching Parentheses
  # O(n) time, where n is the expression length
  def is_valid(expression):
      stack = []
      mapping = {')': '(', '}': '{', ']': '['}
      for char in expression:
          if char in mapping:
              top_element = stack.pop() if stack else '#'
              if mapping[char] != top_element:
                  return False
          else:
              stack.append(char)
      return not stack`,
  exercises: [
    {
      prompt:
        'Validate the expression "( [ { } ] )" using stack-based matching.',
      initialCode: `# Write your solution here
  is_valid_expression = `,
      solution: `is_valid_expression = is_valid("([{}])")`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'What data structure is best suited for parentheses matching?',
      options: ['Queue', 'Stack', 'List', 'Set'],
      correctAnswer: 1,
      explanations: [
        'Correct, stacks handle Last-In-First-Out operations, perfect for matching pairs.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const functionCallData: LessonContent = {
  title: 'Function Call Management',
  content: `<p>
  Function calls use a call stack, a structure that manages each active function. When a function calls another, it pushes onto the stack, resuming execution when popped.
  </p>
  
  <ul>
  <li><strong>Recursive Calls:</strong> Repeatedly pushes functions onto the stack until base cases are met.</li>
  <li><strong>Function Frames:</strong> Contains variables and return addresses for each call.</li>
  </ul>`,
  codeExample: `# Recursive Factorial Calculation
  # O(n) time & space, where n is the number of recursive calls
  def factorial(n):
      if n <= 1:
          return 1
      return n * factorial(n - 1)
  
  # Stack Overflow Error Example
  # Recursion depth limitation can cause a stack overflow if not controlled
  def overflow_example(n):
      return overflow_example(n+1)`,
  exercises: [
    {
      prompt: 'Write a recursive function to calculate the factorial of 5.',
      initialCode: `# Write your solution here
  factorial_of_5 = `,
      solution: `factorial_of_5 = factorial(5)`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'What happens if a recursive function has no base case?',
      options: [
        'It stops immediately.',
        'It causes a stack overflow error.',
        'It returns 0.',
        'It returns an empty list.',
      ],
      correctAnswer: 1,
      explanations: [
        'A missing base case in recursion leads to an endless loop and stack overflow.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const stringReversalData: LessonContent = {
  title: 'String Reversal Using Stacks',
  content: `<p>
  String reversal is one of the fundamental applications of stacks. The LIFO property of stacks makes them naturally suited for reversing sequences of characters or elements.
  </p>
  
  <ul>
  <li><strong>Key Concepts:</strong>
    <ul>
      <li>Characters are pushed onto stack in order</li>
      <li>Popping returns characters in reverse order</li>
      <li>Useful for palindrome checking</li>
      <li>Can be extended to any sequence reversal</li>
    </ul>
  </li>
  <li><strong>Applications:</strong>
    <ul>
      <li>Word reversal in text processing</li>
      <li>Palindrome verification</li>
      <li>Reverse parsing</li>
      <li>DNA sequence analysis</li>
    </ul>
  </li>
  </ul>`,
  codeExample: `class Stack:
      def __init__(self):
          self.items = []
          
      def push(self, item):
          self.items.append(item)
          
      def pop(self):
          if not self.is_empty():
              return self.items.pop()
          return None
          
      def is_empty(self):
          return len(self.items) == 0
  
  def reverse_string(s: str) -> str:
      """
      Reverses a string using a stack
      Time Complexity: O(n)
      Space Complexity: O(n)
      """
      stack = Stack()
      
      # Push all characters to stack
      for char in s:
          stack.push(char)
      
      # Pop characters to build reversed string
      reversed_str = ''
      while not stack.is_empty():
          reversed_str += stack.pop()
      
      return reversed_str
  
  # More advanced example: Reverse words in a sentence
  def reverse_words(sentence: str) -> str:
      """
      Reverses individual words in a sentence
      Example: "hello world" -> "olleh dlrow"
      """
      words = sentence.split()
      reversed_words = [reverse_string(word) for word in words]
      return ' '.join(reversed_words)
  
  # Example usage:
  text = "Hello World!"
  print(f"Original: {text}")
  print(f"Reversed: {reverse_string(text)}")  # "!dlroW olleH"
  
  sentence = "Python is awesome"
  print(f"Original words: {sentence}")
  print(f"Reversed words: {reverse_words(sentence)}")  # "nohtyP si emosewa"`,
  exercises: [
    {
      prompt:
        'Implement a function that checks if a string is a palindrome using a stack.',
      initialCode: `def is_palindrome(s: str) -> bool:
      # Your code here
      pass`,
      solution: `def is_palindrome(s: str) -> bool:
      """
      Checks if a string is a palindrome using a stack
      Time Complexity: O(n)
      Space Complexity: O(n)
      """
      stack = Stack()
      s = s.lower()  # Convert to lowercase for case-insensitive comparison
      
      # Push first half of characters to stack
      mid = len(s) // 2
      for i in range(mid):
          stack.push(s[i])
      
      # Skip middle character for odd-length strings
      start = mid + 1 if len(s) % 2 == 1 else mid
      
      # Compare second half with stack
      for i in range(start, len(s)):
          if stack.pop() != s[i]:
              return False
      
      return True
  
  # Test cases
  print(is_palindrome("radar"))  # True
  print(is_palindrome("hello"))  # False
  print(is_palindrome("Madam"))  # True`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'What is the time complexity of reversing a string using a stack?',
      options: ['O(1)', 'O(n)', 'O(n²)', 'O(log n)'],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. We need to process each character.',
        'This is correct! We need to push and pop each character once.',
        'This is incorrect. String reversal with stack is linear.',
        'This is incorrect. We must process every character.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const backspaceStringData: LessonContent = {
  title: 'Backspace String Compare',
  content: `<p>
  Backspace string comparison is a common interview problem that involves processing strings with backspace characters ('#'). Stacks are particularly useful for this as they can efficiently handle the backspace operation.
  </p>
  
  <ul>
  <li><strong>Key Concepts:</strong>
    <ul>
      <li>Backspace ('#') removes previous character</li>
      <li>Stack tracks current string state</li>
      <li>Empty backspace on empty stack is ignored</li>
      <li>Final comparison after processing both strings</li>
    </ul>
  </li>
  <li><strong>Common Variations:</strong>
    <ul>
      <li>Different backspace characters</li>
      <li>Multiple character deletion</li>
      <li>Forward and backward deletion</li>
    </ul>
  </li>
  </ul>`,
  codeExample: `def process_string(s: str) -> str:
      """
      Process a string with backspace characters
      Time Complexity: O(n)
      Space Complexity: O(n)
      """
      stack = []
      
      for char in s:
          if char != '#':
              stack.append(char)
          elif stack:  # If there's a backspace and stack isn't empty
              stack.pop()
      
      return ''.join(stack)
  
  def backspace_compare(s: str, t: str) -> bool:
      """
      Compare two strings with backspace characters
      Returns True if strings are equal after processing
      """
      return process_string(s) == process_string(t)
  
  # More efficient two-pointer solution
  def backspace_compare_optimal(s: str, t: str) -> bool:
      """
      Compare strings using two pointers
      Time Complexity: O(n)
      Space Complexity: O(1)
      """
      def get_next_valid_char(string: str, index: int) -> int:
          backspace_count = 0
          while index >= 0:
              if string[index] == '#':
                  backspace_count += 1
              elif backspace_count > 0:
                  backspace_count -= 1
              else:
                  return index
              index -= 1
          return index
  
      i, j = len(s) - 1, len(t) - 1
      
      while i >= 0 or j >= 0:
          i = get_next_valid_char(s, i)
          j = get_next_valid_char(t, j)
          
          if i >= 0 and j >= 0 and s[i] != t[j]:
              return False
          if (i >= 0) != (j >= 0):
              return False
          
          i -= 1
          j -= 1
      
      return True
  
  # Example usage:
  s1 = "ab#c"    # Processes to "ac"
  t1 = "ad#c"    # Processes to "ac"
  print(backspace_compare(s1, t1))  # True
  
  s2 = "ab##"    # Processes to ""
  t2 = "c#d#"    # Processes to ""
  print(backspace_compare(s2, t2))  # True
  
  s3 = "a#c"     # Processes to "c"
  t3 = "b"       # Processes to "b"
  print(backspace_compare(s3, t3))  # False`,
  exercises: [
    {
      prompt:
        'Implement a function that processes a string with multiple types of delete operations ("*" deletes one char, "**" deletes two chars).',
      initialCode: `def process_advanced_backspace(s: str) -> str:
      # Your code here
      pass`,
      solution: `def process_advanced_backspace(s: str) -> str:
      stack = []
      i = 0
      
      while i < len(s):
          if s[i] == '*':
              if i + 1 < len(s) and s[i + 1] == '*':
                  # Delete two characters
                  if len(stack) >= 2:
                      stack.pop()
                      stack.pop()
                  elif len(stack) == 1:
                      stack.pop()
                  i += 2
              else:
                  # Delete one character
                  if stack:
                      stack.pop()
                  i += 1
          else:
              stack.append(s[i])
              i += 1
      
      return ''.join(stack)
  
  # Test cases
  print(process_advanced_backspace("abc**d"))    # "ad"
  print(process_advanced_backspace("abc*d*"))    # "ab"
  print(process_advanced_backspace("abc****"))   # ""
  print(process_advanced_backspace("**abc"))     # "abc"`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question:
        'What is the space complexity of the basic backspace string compare solution using a stack?',
      options: ['O(1)', 'O(n)', 'O(n²)', 'O(log n)'],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. We need space to store processed characters.',
        'This is correct! We need space proportional to the input string length.',
        'This is incorrect. Space complexity is linear.',
        'This is incorrect. Space needed grows linearly with input.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const textEditorOperationsData: LessonContent = {
  title: 'Text Editor Operations Using Stacks',
  content: `<p>
  Text editors commonly use stacks to implement undo/redo functionality. Two stacks are typically used: one for undo operations and another for redo operations.
  </p>
  
  <ul>
  <li><strong>Key Operations:</strong>
    <ul>
      <li>Write: Add new text and push to undo stack</li>
      <li>Undo: Pop from undo stack and push to redo stack</li>
      <li>Redo: Pop from redo stack and push to undo stack</li>
      <li>New action clears redo stack</li>
    </ul>
  </li>
  <li><strong>Applications:</strong>
    <ul>
      <li>Text editors</li>
      <li>Document processors</li>
      <li>Drawing applications</li>
      <li>Any system requiring state management</li>
    </ul>
  </li>
  </ul>`,
  codeExample: `class TextEditor:
      def __init__(self):
          self.text = ""
          self.undo_stack = []
          self.redo_stack = []
      
      def write(self, text: str):
          """
          Write text to the editor
          Time Complexity: O(1)
          """
          self.undo_stack.append(self.text)
          self.text = self.text + text
          self.redo_stack.clear()  # Clear redo stack on new write
      
      def delete(self, count: int):
          """
          Delete last 'count' characters
          Time Complexity: O(1)
          """
          if count <= len(self.text):
              self.undo_stack.append(self.text)
              self.text = self.text[:-count]
              self.redo_stack.clear()
      
      def undo(self) -> bool:
          """
          Undo last operation
          Time Complexity: O(1)
          """
          if self.undo_stack:
              self.redo_stack.append(self.text)
              self.text = self.undo_stack.pop()
              return True
          return False
      
      def redo(self) -> bool:
          """
          Redo last undone operation
          Time Complexity: O(1)
          """
          if self.redo_stack:
              self.undo_stack.append(self.text)
              self.text = self.redo_stack.pop()
              return True
          return False
      
      def get_text(self) -> str:
          """
          Get current text
          Time Complexity: O(1)
          """
          return self.text
  
  # Example usage:
  editor = TextEditor()
  editor.write("Hello")
  print(editor.get_text())  # "Hello"
  
  editor.write(" World")
  print(editor.get_text())  # "Hello World"
  
  editor.undo()
  print(editor.get_text())  # "Hello"
  
  editor.redo()
  print(editor.get_text())  # "Hello World"
  
  editor.delete(6)
  print(editor.get_text())  # "Hello"`,
  exercises: [
    {
      prompt:
        'Extend the TextEditor class to support cursor position and insert operations.',
      initialCode: `class AdvancedTextEditor:
      def __init__(self):
          # Your code here
          pass`,
      solution: `class AdvancedTextEditor:
      def __init__(self):
          self.text = ""
          self.cursor = 0
          self.undo_stack = []
          self.redo_stack = []
      
      def save_state(self):
          self.undo_stack.append((self.text, self.cursor))
          self.redo_stack.clear()
      
      def insert(self, text: str):
          self.save_state()
          self.text = self.text[:self.cursor] + text + self.text[self.cursor:]
          self.cursor += len(text)
      
      def move_cursor(self, position: int):
          self.cursor = max(0, min(position, len(self.text)))
      
      def delete_at_cursor(self, count: int):
          self.save_state()
          self.text = self.text[:self.cursor] + self.text[self.cursor + count:]
      
      def undo(self):
          if self.undo_stack:
              self.redo_stack.append((self.text, self.cursor))
              self.text, self.cursor = self.undo_stack.pop()
              return True
          return False
      
      def redo(self):
          if self.redo_stack:
              self.undo_stack.append((self.text, self.cursor))
              self.text, self.cursor = self.redo_stack.pop()
              return True
          return False
  
  # Test the implementation
  editor = AdvancedTextEditor()
  editor.insert("Hello")
  editor.move_cursor(1)
  editor.insert("i ")  # "Hi ello"
  print(editor.text)
  editor.undo()
  print(editor.text)  # "Hello"`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question:
        'What happens to the redo stack when a new write operation is performed?',
      options: [
        'Nothing changes',
        'It gets cleared',
        'Top item is removed',
        'Items are merged',
      ],
      correctAnswer: 1,
      explanations: [
        'This is incorrect. Redo stack must be cleared as new action creates new future.',
        'This is correct! Redo stack is cleared because the new action creates a new future.',
        'This is incorrect. Entire redo stack becomes invalid.',
        'This is incorrect. No merging occurs with new actions.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};
const monotonicConceptData: LessonContent = {
  title: 'Monotonic Stack Concept',
  content: `<p>
  A monotonic stack is a specialized stack that maintains elements in a specific order—either increasing or decreasing.
  These stacks are especially useful in optimizing problems involving comparisons, like finding the next greater or smaller element.
  </p>
  
  <ul>
  <li><strong>Increasing Monotonic Stack:</strong> Keeps elements in an increasing order, discarding elements smaller than the current one.</li>
  <li><strong>Decreasing Monotonic Stack:</strong> Maintains a decreasing order, useful for finding previous smaller elements.</li>
  </ul>`,
  codeExample: `# Increasing Monotonic Stack Example
  # O(n) time complexity, where n is the length of the array
  def increasing_stack(arr):
      stack = []
      result = []
      for value in arr:
          while stack and stack[-1] > value:
              stack.pop()
          stack.append(value)
          result.append(stack[:])  # Snapshot of the current stack state
      return result
  
  # Decreasing Monotonic Stack Example
  # O(n) time complexity
  def decreasing_stack(arr):
      stack = []
      result = []
      for value in arr:
          while stack and stack[-1] < value:
              stack.pop()
          stack.append(value)
          result.append(stack[:])  # Snapshot of the current stack state
      return result`,
  exercises: [
    {
      prompt:
        'Create an increasing monotonic stack for the array [3, 1, 4, 2].',
      initialCode: `# Write your solution here
  result_increasing_stack = `,
      solution: `result_increasing_stack = increasing_stack([3, 1, 4, 2])`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'What is a key property of a monotonic stack?',
      options: [
        'It keeps elements in any random order.',
        'It maintains a strictly increasing or decreasing order.',
        'It keeps only even numbers.',
        'It can contain duplicate elements in sequence.',
      ],
      correctAnswer: 1,
      explanations: [
        'Correct. Monotonic stacks maintain a specific order (increasing or decreasing).',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const nextGreaterElementData: LessonContent = {
  title: 'Next Greater Element',
  content: `<p>
  Finding the next greater element (NGE) for each element in an array is a common problem that can be efficiently solved using a monotonic stack.
  In this problem, each element is compared with others to find the first larger element to its right.
  </p>`,
  codeExample: `# Next Greater Element using Monotonic Stack
  # O(n) time complexity, where n is the length of the array
  def next_greater_element(arr):
      stack = []
      result = [-1] * len(arr)
      for i in range(len(arr) - 1, -1, -1):
          while stack and stack[-1] <= arr[i]:
              stack.pop()
          if stack:
              result[i] = stack[-1]
          stack.append(arr[i])
      return result`,
  exercises: [
    {
      prompt:
        'Use a monotonic stack to find the next greater element for [4, 5, 2, 10, 8].',
      initialCode: `# Write your solution here
  next_greater = `,
      solution: `next_greater = next_greater_element([4, 5, 2, 10, 8])`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'What is the time complexity of finding the next greater element using a monotonic stack?',
      options: ['O(n)', 'O(n^2)', 'O(log n)', 'O(1)'],
      correctAnswer: 0,
      explanations: [
        'Correct. A monotonic stack solution for NGE has O(n) time complexity.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const histogramProblemsData: LessonContent = {
  title: 'Histogram Problems',
  content: `<p>
  Histogram problems, such as finding the largest rectangle area, are classic applications of monotonic stacks.
  These problems involve finding the maximum rectangle area under a histogram or other rectangle-related questions.
  </p>`,
  codeExample: `# Largest Rectangle in Histogram using Monotonic Stack
  # O(n) time complexity, where n is the number of bars in the histogram
  def largest_rectangle_area(heights):
      stack = []
      max_area = 0
      heights.append(0)  # Append 0 height to ensure all bars are processed
      for i, h in enumerate(heights):
          while stack and heights[stack[-1]] > h:
              height = heights[stack.pop()]
              width = i if not stack else i - stack[-1] - 1
              max_area = max(max_area, height * width)
          stack.append(i)
      heights.pop()  # Restore original histogram
      return max_area`,
  exercises: [
    {
      prompt:
        'Find the largest rectangle area for the histogram [2, 1, 5, 6, 2, 3].',
      initialCode: `# Write your solution here
  max_area = `,
      solution: `max_area = largest_rectangle_area([2, 1, 5, 6, 2, 3])`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'What does each element in the stack represent when solving histogram problems?',
      options: [
        'The width of the rectangle.',
        'The height of the rectangle.',
        'The indices of the histogram bars.',
        'The area of the largest rectangle found so far.',
      ],
      correctAnswer: 2,
      explanations: [
        'Correct. The stack stores the indices of histogram bars to calculate areas.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};
const minMaxStackData: LessonContent = {
  title: 'Min/Max Stack',
  content: `<p>
  A Min/Max Stack supports regular stack operations along with constant time minimum and maximum operations.
  By keeping track of the min/max values at each level, these stacks can perform quick lookups.
  </p>`,
  codeExample: `# Min/Max Stack Implementation
  class MinMaxStack:
      def __init__(self):
          self.stack = []
          self.min_max_stack = []  # Holds min and max values at each level
  
      def push(self, value):
          min_val = min(value, self.min_max_stack[-1][0] if self.min_max_stack else value)
          max_val = max(value, self.min_max_stack[-1][1] if self.min_max_stack else value)
          self.min_max_stack.append((min_val, max_val))
          self.stack.append(value)
  
      def pop(self):
          if self.stack:
              self.min_max_stack.pop()
              return self.stack.pop()
      
      def get_min(self):
          return self.min_max_stack[-1][0] if self.min_max_stack else None
  
      def get_max(self):
          return self.min_max_stack[-1][1] if self.min_max_stack else None`,
  exercises: [
    {
      prompt:
        'Implement the Min/Max Stack and find the minimum and maximum after pushing [3, 1, 5, 2].',
      initialCode: `# Write your solution here
  min_max_stack = MinMaxStack()
  # Push values and test get_min and get_max`,
      solution: `min_max_stack.push(3)
  min_max_stack.push(1)
  min_max_stack.push(5)
  min_max_stack.push(2)
  min_value = min_max_stack.get_min()
  max_value = min_max_stack.get_max()`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'What is the time complexity of get_min and get_max in a Min/Max Stack?',
      options: ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'],
      correctAnswer: 0,
      explanations: [
        'Correct. Min and max values are updated on each push, making these operations O(1).',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const stackWithIncrementData: LessonContent = {
  title: 'Stack with Increment Operation',
  content: `<p>
  In a stack with increment operation, you can increment the bottom k elements by a specified value in constant time.
  This is achieved by maintaining an auxiliary array to track the increment for each level.
  </p>`,
  codeExample: `# Stack with Increment Operation
  class StackWithIncrement:
      def __init__(self):
          self.stack = []
          self.increment = []  # Tracks increments at each level
  
      def push(self, value):
          self.stack.append(value)
          self.increment.append(0)
  
      def pop(self):
          if not self.stack:
              return None
          if len(self.increment) > 1:
              self.increment[-2] += self.increment[-1]
          return self.stack.pop() + self.increment.pop()
  
      def increment_bottom_k(self, k, value):
          if self.increment:
              self.increment[min(k, len(self.increment)) - 1] += value`,
  exercises: [
    {
      prompt:
        'Implement StackWithIncrement and test increment_bottom_k operation on [1, 2, 3] with k=2 and value=5.',
      initialCode: `# Write your solution here
  stack_increment = StackWithIncrement()
  # Push values, call increment_bottom_k, and test pop`,
      solution: `stack_increment.push(1)
  stack_increment.push(2)
  stack_increment.push(3)
  stack_increment.increment_bottom_k(2, 5)
  value = stack_increment.pop()`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which auxiliary data structure is used in a stack with increment operation to handle increments?',
      options: ['Auxiliary Stack', 'Queue', 'Increment Array', 'Linked List'],
      correctAnswer: 2,
      explanations: [
        'Correct. The increment array keeps track of increments for each stack level.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const twoStacksData: LessonContent = {
  title: 'Two Stacks',
  content: `<p>
  Two stacks can be utilized to solve various problems, including simulating a queue (Deque) or balancing complex operations.
  For instance, a single array can represent two stacks growing towards each other from opposite ends.
  </p>`,
  codeExample: `# Implementing Two Stacks in a single array
  class TwoStacks:
      def __init__(self, n):
          self.size = n
          self.array = [None] * n
          self.top1 = -1
          self.top2 = n
  
      def push1(self, value):
          if self.top1 < self.top2 - 1:
              self.top1 += 1
              self.array[self.top1] = value
  
      def push2(self, value):
          if self.top1 < self.top2 - 1:
              self.top2 -= 1
              self.array[self.top2] = value
  
      def pop1(self):
          if self.top1 >= 0:
              value = self.array[self.top1]
              self.top1 -= 1
              return value
  
      def pop2(self):
          if self.top2 < self.size:
              value = self.array[self.top2]
              self.top2 += 1
              return value`,
  exercises: [
    {
      prompt:
        'Implement TwoStacks and perform push1 and push2 operations in an array of size 5.',
      initialCode: `# Write your solution here
  two_stacks = TwoStacks(5)
  # Push values and test pop1 and pop2`,
      solution: `two_stacks.push1(3)
  two_stacks.push2(5)
  two_stacks.push1(7)
  pop_val1 = two_stacks.pop1()
  pop_val2 = two_stacks.pop2()`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is a typical use case of two stacks in one array?',
      options: [
        'To save memory in stack-heavy applications.',
        'To avoid overflow in stack implementations.',
        'To simulate a double-ended queue.',
        'To store elements in a linked list format.',
      ],
      correctAnswer: 2,
      explanations: [
        'Correct. Two stacks in a single array are useful for simulating a deque.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const stackSequencesData: LessonContent = {
  title: 'Stack Sequences',
  content: `<p>
  Stack sequences involve verifying if a particular pop sequence is valid for a given push sequence.
  This type of problem is essential in validating operations and understanding stack constraints.
  </p>`,
  codeExample: `# Valid Stack Sequences
  def validate_stack_sequences(pushed, popped):
      stack = []
      j = 0
      for value in pushed:
          stack.append(value)
          while stack and stack[-1] == popped[j]:
              stack.pop()
              j += 1
      return j == len(popped)`,
  exercises: [
    {
      prompt:
        'Determine if [1, 2, 3, 4, 5] is a valid pop sequence for [4, 5, 3, 2, 1].',
      initialCode: `# Write your solution here
  is_valid = `,
      solution: `is_valid = validate_stack_sequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1])`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'What condition must be met for a sequence to be a valid stack pop sequence?',
      options: [
        'The sequence must be in reverse order.',
        'It must have fewer elements than the push sequence.',
        'It must be achievable by only popping from the stack.',
        'The sequence must follow a specific order with no repeats.',
      ],
      correctAnswer: 2,
      explanations: [
        'Correct. Valid pop sequences are achievable only by popping from the stack without reordering.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};
const treeTraversalData: LessonContent = {
  title: 'Tree Traversal using Stack',
  content: `<p>
  Iterative tree traversal is an efficient way to traverse trees without recursion, utilizing a stack to maintain the traversal state.
  This method is particularly useful in in-order, pre-order, and post-order traversal in binary trees.
  </p>`,
  codeExample: `# Iterative In-Order Traversal using Stack
  def inorder_traversal(root):
      stack, result = [], []
      current = root
      while stack or current:
          while current:
              stack.append(current)
              current = current.left
          current = stack.pop()
          result.append(current.val)
          current = current.right
      return result`,
  exercises: [
    {
      prompt:
        'Implement iterative in-order traversal on a binary tree with values [1, 2, 3, null, 4, 5].',
      initialCode: `# Write your solution here
  root = TreeNode(1)
  # Construct the tree, then call inorder_traversal`,
      solution: `# Expected output should follow in-order: [2, 4, 1, 5, 3]`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'What is the primary advantage of using an iterative approach for tree traversal?',
      options: [
        'Simplifies code complexity',
        'Avoids excessive memory usage from recursion',
        'Makes traversal faster than recursion',
        'Reduces the need for auxiliary data structures',
      ],
      correctAnswer: 1,
      explanations: [
        'Correct. Iterative traversal avoids recursion stack overhead, saving memory.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const expressionTreeData: LessonContent = {
  title: 'Expression Tree Evaluation',
  content: `<p>
  An expression tree is a binary tree where leaf nodes represent operands, and internal nodes represent operators.
  Using a stack to build and evaluate expression trees is efficient for parsing and evaluating complex expressions.
  </p>`,
  codeExample: `# Expression Tree Evaluation
  class ExpressionTree:
      def __init__(self, value):
          self.value = value
          self.left = None
          self.right = None
  
  def evaluate(root):
      if root is None:
          return 0
      if not root.left and not root.right:
          return int(root.value)
      left_sum = evaluate(root.left)
      right_sum = evaluate(root.right)
      if root.value == '+':
          return left_sum + right_sum
      elif root.value == '-':
          return left_sum - right_sum
      elif root.value == '*':
          return left_sum * right_sum
      elif root.value == '/':
          return left_sum / right_sum`,
  exercises: [
    {
      prompt:
        'Build and evaluate the expression tree for the expression "3 + (4 * 5)".',
      initialCode: `# Write your solution here
  root = ExpressionTree('+')
  # Build the tree structure for "3 + (4 * 5)"`,
      solution: `# Expected evaluation result: 23`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'In an expression tree, where are operators typically located?',
      options: [
        'At leaf nodes',
        'In the root only',
        'At internal nodes',
        'In the left subtree',
      ],
      correctAnswer: 2,
      explanations: [
        'Correct. Operators are found in internal nodes, with operands at the leaves.',
      ],
      difficulty: Difficulty.Advanced,
    },
  ],
};

const stackSortingData: LessonContent = {
  title: 'Stack Sorting',
  content: `<p>
  Sorting a stack involves rearranging elements such that the minimum (or maximum) element is at the top.
  This can be achieved using auxiliary stacks or recursion.
  </p>`,
  codeExample: `# Sorting a Stack using an Auxiliary Stack
  def sort_stack(stack):
      auxiliary_stack = []
      while stack:
          temp = stack.pop()
          while auxiliary_stack and auxiliary_stack[-1] > temp:
              stack.append(auxiliary_stack.pop())
          auxiliary_stack.append(temp)
      return auxiliary_stack`,
  exercises: [
    {
      prompt:
        'Sort the stack [34, 3, 31, 98, 92, 23] using an auxiliary stack.',
      initialCode: `# Write your solution here
  stack = [34, 3, 31, 98, 92, 23]
  # Sort and print sorted stack`,
      solution: `# Expected sorted stack: [3, 23, 31, 34, 92, 98]`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the purpose of an auxiliary stack in stack sorting?',
      options: [
        'To hold elements temporarily for comparison',
        'To store duplicates',
        'To reverse the stack',
        'To reduce sorting time',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct. The auxiliary stack holds values temporarily to order elements.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const stackOptimizationData: LessonContent = {
  title: 'Stack Optimization',
  content: `<p>
  Stack optimization focuses on improving both space and time efficiency in stack operations, especially in high-performance applications.
  Common techniques include reducing unnecessary stack operations and using data structures like sparse stacks.
  </p>`,
  codeExample: `# Optimizing Stack Operations with Lazy Evaluation
  class OptimizedStack:
      def __init__(self):
          self.stack = []
          self.lazy_increments = []
  
      def push(self, value):
          self.stack.append(value)
          self.lazy_increments.append(0)
  
      def pop(self):
          if not self.stack:
              return None
          if len(self.lazy_increments) > 1:
              self.lazy_increments[-2] += self.lazy_increments[-1]
          return self.stack.pop() + self.lazy_increments.pop()
  
      def increment(self, k, val):
          if self.lazy_increments:
              self.lazy_increments[min(k, len(self.lazy_increments)) - 1] += val`,
  exercises: [
    {
      prompt:
        'Optimize stack operations by implementing lazy increments on the stack [5, 2, 8] with k=2 and increment=3.',
      initialCode: `# Write your solution here
  opt_stack = OptimizedStack()
  # Push values, call increment, and test pop`,
      solution: `opt_stack.push(5)
  opt_stack.push(2)
  opt_stack.push(8)
  opt_stack.increment(2, 3)
  value = opt_stack.pop()`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question:
        'Which technique helps to optimize bulk increment operations in stacks?',
      options: [
        'Lazy Evaluation',
        'Recursive Calls',
        'Auxiliary Arrays',
        'Double Stacking',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct. Lazy Evaluation delays updates, reducing unnecessary operations.',
      ],
      difficulty: Difficulty.Advanced,
    },
  ],
};

const stackLessons: Record<string, LessonContent> = {
  'stack-concept': stackConceptData,
  'stack-implementation': stackImplementationData,
  'stack-operations': stackOperationsData,
  'expression-evaluation': expressionEvaluationData,
  'parentheses-matching': parenthesesMatchingData,
  'function-calls': functionCallData,
  'string-reversal': stringReversalData,
  'backspace-string': backspaceStringData,
  'text-editor-operations': textEditorOperationsData,
  'monotonic-concept': monotonicConceptData,
  'next-greater-element': nextGreaterElementData,
  'histogram-problems': histogramProblemsData,
  'min-max-stack': minMaxStackData,
  'stack-with-increment': stackWithIncrementData,
  'two-stacks': twoStacksData,
  'stack-sequences': stackSequencesData,
  'tree-traversal': treeTraversalData,
  'expression-tree': expressionTreeData,
  'stack-sorting': stackSortingData,
  'stack-optimization': stackOptimizationData,
};
export const stackLessonsTab: LessonsTab = {
  curriculum: stackCurriculum,
  lessons: stackLessons,
};
