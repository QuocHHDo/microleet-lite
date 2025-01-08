import { Difficulty } from '@/common/commonConcept';
import {
  Curriculum,
  LessonContent,
  LessonsTab,
  PriorityLevel,
} from '@/common/commonLesson';

const stackCurriculum: Curriculum = {
  title: 'Stack Curriculum',
  description:
    'A comprehensive guide to mastering stack data structure and its applications in technical interviews',
  sections: [
    {
      id: 1,
      title: 'Stack Fundamentals',
      topics: [
        {
          id: 'stack-concept',
          title: 'Stack Concept and Properties',
          description:
            'Understanding LIFO principle, time complexities, and use cases',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'stack-implementation',
          title: 'Stack Implementation',
          description:
            'Implementing stack using arrays and linked lists, comparing trade-offs',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'stack-operations',
          title: 'Basic Stack Operations',
          description:
            'Push, pop, peek, isEmpty operations with edge cases and error handling',
          priority: PriorityLevel.Essential,
        },
      ],
    },
    {
      id: 2,
      title: 'Common Interview Problems',
      topics: [
        {
          id: 'parentheses-matching',
          title: 'Parentheses Matching',
          description:
            'Validating and matching different types of brackets, handling nested structures',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'expression-evaluation',
          title: 'Expression Evaluation',
          description:
            'Evaluating arithmetic expressions, handling operators precedence',
          priority: PriorityLevel.Important,
        },
        {
          id: 'next-greater-element',
          title: 'Next Greater Element',
          description:
            'Finding next greater elements using monotonic stack pattern',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 3,
      title: 'String Manipulation with Stacks',
      topics: [
        {
          id: 'backspace-string',
          title: 'Backspace String Compare',
          description:
            'Handling backspace characters in strings, optimizing space usage',
          priority: PriorityLevel.Important,
        },
        {
          id: 'string-reversal',
          title: 'String Reversal and Manipulation',
          description: 'Using stack for string operations and transformations',
          priority: PriorityLevel.Important,
        },
        {
          id: 'text-editor-operations',
          title: 'Text Editor Operations',
          description:
            'Implementing undo/redo functionality, handling complex operations',
          priority: PriorityLevel.Beneficial,
        },
      ],
    },
    {
      id: 4,
      title: 'Monotonic Stack Patterns',
      topics: [
        {
          id: 'monotonic-concept',
          title: 'Monotonic Stack Concept',
          description:
            'Understanding and implementing increasing/decreasing monotonic stacks',
          priority: PriorityLevel.Important,
        },
        {
          id: 'histogram-problems',
          title: 'Histogram Problems',
          description:
            'Solving largest rectangle and area problems using monotonic stack',
          priority: PriorityLevel.Important,
        },
        {
          id: 'temperature-problems',
          title: 'Daily Temperatures Pattern',
          description:
            'Solving next warmer/cooler day type problems using monotonic stack',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 5,
      title: 'Advanced Stack Implementations',
      topics: [
        {
          id: 'min-max-stack',
          title: 'Min/Max Stack',
          description:
            'Implementing stack with O(1) minimum/maximum operations',
          priority: PriorityLevel.Important,
        },
        {
          id: 'two-stacks',
          title: 'Two Stacks Problems',
          description: 'Solving problems involving operations with two stacks',
          priority: PriorityLevel.Beneficial,
        },
        {
          id: 'stack-sequences',
          title: 'Stack Sequences',
          description:
            'Validating push and pop sequences, understanding stack permutations',
          priority: PriorityLevel.Beneficial,
        },
      ],
    },
    {
      id: 6,
      title: 'Stack in Tree Traversal',
      topics: [
        {
          id: 'tree-traversal',
          title: 'Iterative Tree Traversal',
          description:
            'Implementing inorder, preorder, and postorder traversals using stack',
          priority: PriorityLevel.Important,
        },
        {
          id: 'expression-tree',
          title: 'Expression Tree Evaluation',
          description: 'Building and evaluating expression trees using stack',
          priority: PriorityLevel.Beneficial,
        },
      ],
    },
  ],
} as const;

const stackConceptData: LessonContent = {
  title: 'Stack Concept and Properties',
  content: `<p>
A stack is an elegant data structure that follows the <strong>Last-In-First-Out (LIFO)</strong> principle. Imagine a stack of books - you can only add or remove books from the top. This simple yet powerful concept is fundamental in computer science.
</p>

<h3><u>Core Properties</u></h3>
<p>The key characteristics that define a stack are:</p>
<li>Elements can only be added to the top (push operation)</li>
<li>Elements can only be removed from the top (pop operation)</li>
<li>Only the top element is accessible at any time (peek/top operation)</li>
<li>Elements are removed in the reverse order they were added</li>

<h3><u>Real-world Analogies</u></h3>
<p>Understanding stacks becomes intuitive when we consider everyday examples:</p>
<li>A stack of plates in a cafeteria</li>
<li>The browser's back button history</li>
<li>The 'undo' feature in text editors</li>
<li>Call stack in program execution</li>

<h3><u>Operation Complexities</u></h3>
<table>
<tr><th>Operation</th><th>Time Complexity</th><th>Description</th></tr>
<tr><td>Push</td><td>O(1)</td><td>Add element to top</td></tr>
<tr><td>Pop</td><td>O(1)</td><td>Remove top element</td></tr>
<tr><td>Peek/Top</td><td>O(1)</td><td>View top element</td></tr>
<tr><td>IsEmpty</td><td>O(1)</td><td>Check if stack is empty</td></tr>
<tr><td>Size</td><td>O(1)</td><td>Get number of elements</td></tr>
</table>

<h3><u>Common Use Cases</u></h3>
<p>Stacks are essential in many programming scenarios:</p>
<li>Expression evaluation and syntax parsing</li>
<li>Function call management (call stack)</li>
<li>Depth-first search algorithm implementation</li>
<li>Backtracking problems</li>
<li>String reversal and palindrome checking</li>`,
  codeExample: `# Basic stack operations demonstration
def demonstrate_stack():
    stack = []  # Initialize empty stack
    
    # Push operations
    print("Pushing elements: 5, 3, 8")
    stack.append(5)  # Push 5
    stack.append(3)  # Push 3
    stack.append(8)  # Push 8
    print(f"Current stack: {stack}")  # [5, 3, 8]
    
    # Peek operation
    if stack:
        print(f"Top element: {stack[-1]}")  # 8
    
    # Pop operation
    popped = stack.pop()
    print(f"Popped element: {popped}")  # 8
    print(f"Stack after pop: {stack}")  # [5, 3]
    
    # Size operation
    print(f"Stack size: {len(stack)}")  # 2
    
    # IsEmpty operation
    print(f"Is stack empty? {len(stack) == 0}")  # False
    
    # Clear stack
    while stack:
        stack.pop()
    print(f"Is stack empty now? {len(stack) == 0}")  # True

# Run demonstration
demonstrate_stack()`,
  exercises: [
    {
      prompt:
        'Implement a function that uses a stack to check if a string of parentheses is balanced. Example: "(())" is balanced, "())" is not.',
      initialCode: `def is_balanced(parentheses):
    # Write your solution here
    return True`,
      solution: `def is_balanced(parentheses):
    stack = []
    for p in parentheses:
        if p == '(':
            stack.append(p)
        elif p == ')':
            if not stack:
                return False
            stack.pop()
    return len(stack) == 0`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Create a function that uses a stack to reverse a string.',
      initialCode: `def reverse_string(s):
    # Write your solution here
    return ""`,
      solution: `def reverse_string(s):
    stack = []
    # Push all characters to stack
    for char in s:
        stack.append(char)
    
    # Pop all characters to form reversed string
    reversed_str = ""
    while stack:
        reversed_str += stack.pop()
    return reversed_str`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'What is the defining principle of a stack data structure?',
      options: [
        'First-In-First-Out (FIFO)',
        'Last-In-First-Out (LIFO)',
        'Random access to elements',
        'Sorted element storage',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. FIFO is the principle of queues, not stacks.',
        'Correct! Stacks follow LIFO - the last element added is the first one removed.',
        'Incorrect. Stacks only allow access to the top element.',
        'Incorrect. Stacks do not maintain sorted order.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which operation would you use to view the top element without removing it?',
      options: ['pop()', 'peek() or top()', 'push()', 'isEmpty()'],
      correctAnswer: 1,
      explanations: [
        'Incorrect. pop() removes the top element.',
        'Correct! peek() or top() allows you to view the top element without removing it.',
        'Incorrect. push() adds a new element.',
        'Incorrect. isEmpty() checks if the stack has any elements.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const stackImplementationData: LessonContent = {
  title: 'Stack Implementation',
  content: `<p>
Stacks can be implemented using different underlying data structures, each with its own trade-offs. The two most common implementations are <strong>array-based</strong> and <strong>linked list-based</strong> stacks.
</p>

<h3><u>Array-based Implementation</u></h3>
<p>Advantages:</p>
<li>Simple implementation</li>
<li>Memory-efficient for fixed-size stacks</li>
<li>Excellent cache locality</li>
<li>Fast random access if needed</li>

<p>Disadvantages:</p>
<li>Size limitation (if using static array)</li>
<li>Potential waste of memory (if overallocating)</li>
<li>Resizing operations can be costly</li>

<h3><u>Linked List-based Implementation</u></h3>
<p>Advantages:</p>
<li>Dynamic size by nature</li>
<li>No need for resizing</li>
<li>Efficient memory usage</li>
<li>O(1) insertion and deletion</li>

<p>Disadvantages:</p>
<li>Extra memory for node pointers</li>
<li>Poor cache locality</li>
<li>No random access</li>

<h3><u>Implementation Considerations</u></h3>
<p>When choosing an implementation, consider:</p>
<li>Expected stack size and variations</li>
<li>Memory constraints</li>
<li>Performance requirements</li>
<li>Additional operations needed</li>`,
  codeExample: `# Array-based Stack Implementation
class ArrayStack:
    def __init__(self, capacity=10):
        self.capacity = capacity
        self.stack = [None] * capacity
        self.size = 0
    
    def push(self, item):
        if self.size == self.capacity:
            self._resize(2 * self.capacity)
        self.stack[self.size] = item
        self.size += 1
    
    def pop(self):
        if self.is_empty():
            raise Exception("Stack is empty")
        self.size -= 1
        item = self.stack[self.size]
        self.stack[self.size] = None
        if self.size > 0 and self.size == self.capacity // 4:
            self._resize(self.capacity // 2)
        return item
    
    def peek(self):
        if self.is_empty():
            raise Exception("Stack is empty")
        return self.stack[self.size - 1]
    
    def is_empty(self):
        return self.size == 0
    
    def _resize(self, new_capacity):
        temp = [None] * new_capacity
        for i in range(self.size):
            temp[i] = self.stack[i]
        self.stack = temp
        self.capacity = new_capacity

# Linked List-based Stack Implementation
class Node:
    def __init__(self, item):
        self.item = item
        self.next = None

class LinkedStack:
    def __init__(self):
        self.top = None
        self.size = 0
    
    def push(self, item):
        new_node = Node(item)
        new_node.next = self.top
        self.top = new_node
        self.size += 1
    
    def pop(self):
        if self.is_empty():
            raise Exception("Stack is empty")
        item = self.top.item
        self.top = self.top.next
        self.size -= 1
        return item
    
    def peek(self):
        if self.is_empty():
            raise Exception("Stack is empty")
        return self.top.item
    
    def is_empty(self):
        return self.top is None

# Usage example
def compare_implementations():
    # Array-based stack
    array_stack = ArrayStack()
    array_stack.push(1)
    array_stack.push(2)
    print(f"Array stack peek: {array_stack.peek()}")  # 2
    
    # Linked list-based stack
    linked_stack = LinkedStack()
    linked_stack.push(1)
    linked_stack.push(2)
    print(f"Linked stack peek: {linked_stack.peek()}")  # 2`,
  exercises: [
    {
      prompt:
        'Implement a method in ArrayStack class that returns the minimum element in the stack without removing elements.',
      initialCode: `class ArrayStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []  # Hint: Use this to track minimums
    
    def get_minimum(self):
        # Write your solution here
        pass`,
      solution: `class ArrayStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []
    
    def push(self, item):
        self.stack.append(item)
        if not self.min_stack or item <= self.min_stack[-1]:
            self.min_stack.append(item)
    
    def pop(self):
        if not self.stack:
            raise Exception("Stack is empty")
        item = self.stack.pop()
        if item == self.min_stack[-1]:
            self.min_stack.pop()
        return item
    
    def get_minimum(self):
        if not self.min_stack:
            raise Exception("Stack is empty")
        return self.min_stack[-1]`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'What is the main advantage of a linked list-based stack implementation over an array-based one?',
      options: [
        'Better cache locality',
        'Faster push operations',
        'No size limitations',
        'Less memory usage',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Array-based implementations have better cache locality.',
        'Incorrect. Push operations are O(1) for both implementations.',
        'Correct! Linked list-based stacks can grow indefinitely without requiring resizing.',
        'Incorrect. Linked lists actually use more memory due to node pointers.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const stackOperationsData: LessonContent = {
  title: 'Basic Stack Operations',
  content: `<p>
Understanding stack operations is fundamental to using this data structure effectively. Let's explore each operation in detail, including their proper usage and common pitfalls to avoid.
</p>

<h3><u>Core Stack Operations</u></h3>

<h4><b>1. Push Operation</b></h4>
<p>
The push operation adds an element to the top of the stack. Think of it like placing a book on top of a stack of books. When implementing push, we need to consider:
</p>
<li>Stack overflow conditions in fixed-size implementations</li>
<li>Memory allocation in dynamic implementations</li>
<li>Maintaining the size counter</li>

<h4><b>2. Pop Operation</b></h4>
<p>
Pop removes and returns the top element from the stack. Continuing our book analogy, it's like taking the topmost book off the stack. Key considerations include:
</p>
<li>Handling empty stack scenarios (stack underflow)</li>
<li>Proper memory management (clearing references)</li>
<li>Updating the size counter</li>

<h4><b>3. Peek/Top Operation</b></h4>
<p>
Peek allows us to view the top element without removing it. It's like looking at the cover of the top book without picking it up. Important aspects:
</p>
<li>Never modifies the stack structure</li>
<li>Must handle empty stack cases</li>
<li>Should not affect the size counter</li>

<h4><b>4. isEmpty Operation</b></h4>
<p>
This operation checks if the stack contains any elements. It's a crucial safety check that should be used before operations that might fail on an empty stack. Key points:
</p>
<li>Essential for preventing underflow errors</li>
<li>Should be O(1) time complexity</li>
<li>Often used in conjunction with other operations</li>

<h3><u>Error Handling Best Practices</u></h3>
<p>
Robust stack implementations should handle these common error scenarios:
</p>
<li>Stack overflow (when using fixed-size arrays)</li>
<li>Stack underflow (attempting to pop/peek from empty stack)</li>
<li>Memory allocation failures</li>
<li>Invalid input validation</li>`,
  codeExample: `class Stack:
    """
    A robust stack implementation with error handling and edge cases.
    """
    def __init__(self, capacity=None):
        self.items = []
        self.capacity = capacity
    
    def push(self, item):
        """
        Adds an item to the top of the stack.
        
        Args:
            item: The element to be pushed onto the stack
            
        Raises:
            StackOverflowError: If stack is at capacity
            ValueError: If item is None
        """
        if item is None:
            raise ValueError("Cannot push None value onto stack")
            
        if self.capacity and len(self.items) >= self.capacity:
            raise StackOverflowError("Stack is at capacity")
            
        self.items.append(item)
    
    def pop(self):
        """
        Removes and returns the top item from the stack.
        
        Returns:
            The top element of the stack
            
        Raises:
            StackUnderflowError: If stack is empty
        """
        if self.is_empty():
            raise StackUnderflowError("Cannot pop from empty stack")
            
        return self.items.pop()
    
    def peek(self):
        """
        Returns the top item without removing it.
        
        Returns:
            The top element of the stack
            
        Raises:
            StackUnderflowError: If stack is empty
        """
        if self.is_empty():
            raise StackUnderflowError("Cannot peek empty stack")
            
        return self.items[-1]
    
    def is_empty(self):
        """
        Checks if the stack is empty.
        
        Returns:
            bool: True if stack is empty, False otherwise
        """
        return len(self.items) == 0
    
    def size(self):
        """
        Returns the current number of elements in the stack.
        
        Returns:
            int: Number of elements in stack
        """
        return len(self.items)
    
    def clear(self):
        """
        Removes all elements from the stack.
        """
        self.items.clear()

# Custom exceptions for better error handling
class StackOverflowError(Exception):
    pass

class StackUnderflowError(Exception):
    pass

# Example usage with error handling
def demonstrate_stack_operations():
    # Create a stack with capacity of 3
    stack = Stack(capacity=3)
    
    try:
        # Push operations
        print("Pushing elements: 1, 2, 3")
        stack.push(1)
        stack.push(2)
        stack.push(3)
        
        # This would raise StackOverflowError
        # stack.push(4)
        
        # Peek operation
        top_element = stack.peek()
        print(f"Top element (peek): {top_element}")  # 3
        
        # Pop operations
        while not stack.is_empty():
            popped = stack.pop()
            print(f"Popped: {popped}")
        
        # This would raise StackUnderflowError
        # stack.pop()
        
    except StackOverflowError as e:
        print(f"Stack overflow error: {e}")
    except StackUnderflowError as e:
        print(f"Stack underflow error: {e}")
    except ValueError as e:
        print(f"Value error: {e}")

# Run demonstration
demonstrate_stack_operations()`,
  exercises: [
    {
      prompt:
        'Implement a method called transfer_stack that moves all elements from one stack to another while maintaining the original order.',
      initialCode: `def transfer_stack(source, destination):
    # Write your solution here
    pass`,
      solution: `def transfer_stack(source, destination):
    # First, use temporary stack to reverse elements
    temp_stack = Stack()
    
    # Move elements from source to temp (reverses order)
    while not source.is_empty():
        temp_stack.push(source.pop())
    
    # Move elements from temp to destination (restores order)
    while not temp_stack.is_empty():
        destination.push(temp_stack.pop())`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Implement a stack method that finds and returns the largest element in the stack without modifying the original stack structure.',
      initialCode: `def find_max(stack):
    # Write your solution here
    pass`,
      solution: `def find_max(stack):
    if stack.is_empty():
        raise StackUnderflowError("Cannot find max in empty stack")
        
    # Use temporary stack to store elements while finding max
    temp_stack = Stack()
    max_element = float('-inf')
    
    # Find max while moving elements to temp stack
    while not stack.is_empty():
        current = stack.pop()
        max_element = max(max_element, current)
        temp_stack.push(current)
    
    # Restore original stack
    while not temp_stack.is_empty():
        stack.push(temp_stack.pop())
        
    return max_element`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What should happen when pop() is called on an empty stack?',
      options: [
        'Return None',
        'Return a default value',
        'Throw an exception',
        'Add a default element and return it',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Returning None could be confused with a valid stack element.',
        'Incorrect. Returning a default value could lead to silent errors.',
        'Correct! Throwing an exception clearly indicates the error condition and prevents invalid operations.',
        'Incorrect. Adding elements automatically could lead to unexpected behavior.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which stack operation can be used to safely check if pop() can be called?',
      options: ['peek()', 'isEmpty()', 'size()', 'capacity()'],
      correctAnswer: 1,
      explanations: [
        'Incorrect. peek() itself can throw an exception on empty stack.',
        'Correct! isEmpty() safely checks if the stack has any elements before attempting pop().',
        'Incorrect. size() returns the number of elements but requires additional comparison.',
        'Incorrect. capacity() relates to maximum size, not current contents.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'What is the best practice for handling stack overflow in a fixed-size implementation?',
      options: [
        'Silently ignore additional elements',
        'Automatically resize the stack',
        'Remove oldest elements to make space',
        'Throw an exception before overflow occurs',
      ],
      correctAnswer: 3,
      explanations: [
        'Incorrect. Ignoring elements could lead to data loss without warning.',
        'Incorrect. Fixed-size implementations should not resize automatically.',
        'Incorrect. Removing old elements violates stack principles.',
        'Correct! Throwing an exception prevents overflow and alerts the user to the capacity issue.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const parenthesesMatchingData: LessonContent = {
  title: 'Parentheses Matching',
  content: `<p>
Parentheses matching is a classic problem that elegantly demonstrates the power of stacks. When we read code or mathematical expressions, proper bracket matching is essential for understanding the structure and ensuring correctness. Let's explore how stacks make this task straightforward and efficient.
</p>

<h3><u>Understanding Bracket Matching</u></h3>
<p>
Consider this expression: <code>{[()]}()</code>. How do we know it's valid? Our brain naturally keeps track of opening brackets and matches them with closing ones. A stack helps us implement this same intuitive process programmatically.
</p>

<h3><u>Matching Rules</u></h3>
<p>For an expression to be properly matched, it must follow these rules:</p>
<li>Each opening bracket must have a corresponding closing bracket of the same type</li>
<li>Brackets must be closed in the reverse order they were opened (LIFO principle)</li>
<li>A closing bracket cannot appear before its corresponding opening bracket</li>
<li>The expression must be completely matched at the end (empty stack)</li>

<h3><u>Types of Brackets</u></h3>
<table>
<tr><th>Type</th><th>Opening</th><th>Closing</th><th>Common Use</th></tr>
<tr><td>Parentheses</td><td>(</td><td>)</td><td>Arithmetic expressions, function calls</td></tr>
<tr><td>Square Brackets</td><td>[</td><td>]</td><td>Array indexing, optional parameters</td></tr>
<tr><td>Curly Braces</td><td>{</td><td>}</td><td>Code blocks, object literals</td></tr>
<tr><td>Angle Brackets</td><td><</td><td>></td><td>Generics, XML tags</td></tr>
</table>

<h3><u>Common Edge Cases</u></h3>
<p>When implementing bracket matching, be sure to handle these situations:</p>
<li>Empty string (typically considered valid)</li>
<li>String with only opening brackets</li>
<li>String with only closing brackets</li>
<li>Mixed bracket types in wrong order (e.g., "{[}]")</li>
<li>Nested structures of significant depth</li>`,
  codeExample: `class BracketMatcher:
    def __init__(self):
        self.opening_brackets = "({[<"
        self.closing_brackets = ")}]>"
        self.bracket_pairs = dict(zip(self.closing_brackets, self.opening_brackets))
    
    def is_valid_brackets(self, expression):
        """
        Validates if brackets in the expression are properly matched.
        
        Args:
            expression (str): String containing brackets to validate
            
        Returns:
            bool: True if brackets are properly matched, False otherwise
            
        Example:
            >>> matcher = BracketMatcher()
            >>> matcher.is_valid_brackets("{[()]}") 
            True
            >>> matcher.is_valid_brackets("{[}]")
            False
        """
        stack = []
        
        for char in expression:
            if char in self.opening_brackets:
                # For opening bracket, push to stack
                stack.append(char)
            elif char in self.closing_brackets:
                # For closing bracket, check if it matches the last opening bracket
                if not stack:  # Stack is empty - no opening bracket to match
                    return False
                
                # Get corresponding opening bracket for this closing bracket
                expected_opening = self.bracket_pairs[char]
                
                # Check if it matches the last opening bracket
                if stack.pop() != expected_opening:
                    return False
        
        # Expression is valid only if all brackets are matched (stack is empty)
        return len(stack) == 0
    
    def find_mismatch_position(self, expression):
        """
        Finds the position of first bracket mismatch in the expression.
        
        Args:
            expression (str): String containing brackets to check
            
        Returns:
            int: Position of first mismatch, or -1 if expression is valid
            
        Example:
            >>> matcher = BracketMatcher()
            >>> matcher.find_mismatch_position("{[}]")
            2  # The '}' at position 2 doesn't match with '['
        """
        stack = []  # Stack will store tuples of (bracket, position)
        
        for i, char in enumerate(expression):
            if char in self.opening_brackets:
                stack.append((char, i))
            elif char in self.closing_brackets:
                if not stack:
                    return i  # Closing bracket with no opening bracket
                
                opening_bracket, _ = stack.pop()
                if opening_bracket != self.bracket_pairs[char]:
                    return i  # Mismatched bracket types
        
        # If there are any unclosed brackets, return position of first one
        return stack[0][1] if stack else -1

# Example usage with detailed error reporting
def validate_brackets(expression):
    matcher = BracketMatcher()
    if matcher.is_valid_brackets(expression):
        print(f"Expression '{expression}' has valid bracket matching")
    else:
        mismatch_pos = matcher.find_mismatch_position(expression)
        if mismatch_pos != -1:
            print(f"Bracket mismatch at position {mismatch_pos} in '{expression}'")
            print(" " * (mismatch_pos + 1) + "^")  # Visual pointer to mismatch

# Test cases demonstrating various scenarios
test_expressions = [
    "{[()]}",      # Valid nested brackets
    "{[}]",        # Invalid nesting
    "((())",       # Unclosed bracket
    "]",           # Closing bracket without opening
    "",            # Empty string (valid)
    "{[()]}()"     # Multiple valid groups
]

for expr in test_expressions:
    validate_brackets(expr)`,
  exercises: [
    {
      prompt:
        'Implement a function that returns the maximum nesting depth of brackets in a valid expression. For example, "{[()]}" has depth 3.',
      initialCode: `def max_nesting_depth(expression):
    # Write your solution here
    return 0`,
      solution: `def max_nesting_depth(expression):
    if not expression:
        return 0
        
    stack = []
    max_depth = 0
    current_depth = 0
    
    for char in expression:
        if char in "({[<":
            current_depth += 1
            max_depth = max(max_depth, current_depth)
            stack.append(char)
        elif char in ")}]>":
            if not stack:
                return 0  # Invalid expression
            stack.pop()
            current_depth -= 1
    
    # If stack is not empty, expression is invalid
    return max_depth if not stack else 0`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Create a function that completes a partially written bracket expression by adding the minimum number of closing brackets needed. For example, "({[" becomes "({[]})".',
      initialCode: `def complete_brackets(partial_expr):
    # Write your solution here
    return ""`,
      solution: `def complete_brackets(partial_expr):
    if not partial_expr:
        return ""
        
    # Map of opening to closing brackets
    closing_map = {"(": ")", "{": "}", "[": "]", "<": ">"}
    stack = []
    
    # Process opening brackets
    for char in partial_expr:
        if char in "({[<":
            stack.append(char)
        elif char in ")}]>":
            if not stack or closing_map[stack[-1]] != char:
                return ""  # Invalid expression
            stack.pop()
    
    # Add closing brackets for remaining opening brackets
    result = partial_expr
    while stack:
        opening = stack.pop()
        result += closing_map[opening]
    
    return result`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which of these bracket expressions is valid?',
      options: ['([)]', '{[()]}', '{[}]', '((()]'],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Brackets must be closed in the reverse order they were opened.',
        'Correct! Each bracket is properly nested and closed in the correct order.',
        'Incorrect. The closing brackets are in the wrong order.',
        'Incorrect. There is an extra closing bracket.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'What is the maximum nesting depth of the expression "({[()]})"?',
      options: ['3', '4', '5', '6'],
      correctAnswer: 1,
      explanations: [
        'Incorrect. The expression goes deeper than 3 levels.',
        'Correct! The deepest bracket is 4 levels deep: ({[()]})',
        'Incorrect. The expression only reaches 4 levels of nesting.',
        'Incorrect. The expression only reaches 4 levels of nesting.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const expressionEvaluationData: LessonContent = {
  title: 'Expression Evaluation',
  content: `<p>
Expression evaluation is a fundamental task in compilers and calculators. It demonstrates how stacks can elegantly handle complex hierarchical structures while respecting operator precedence. Let's explore how we can transform and evaluate mathematical expressions using stacks.
</p>

<h3><u>Understanding Expression Types</u></h3>
<p>Mathematical expressions can be written in three main notations:</p>
<li><strong>Infix</strong>: Operators between operands (e.g., "3 + 4 * 2")</li>
<li><strong>Prefix</strong>: Operators before operands (e.g., "+ 3 * 4 2")</li>
<li><strong>Postfix</strong>: Operators after operands (e.g., "3 4 2 * +")</li>

<h3><u>Operator Precedence</u></h3>
<table>
<tr><th>Operator</th><th>Precedence</th><th>Associativity</th></tr>
<tr><td>^</td><td>3</td><td>Right to Left</td></tr>
<tr><td>*, /</td><td>2</td><td>Left to Right</td></tr>
<tr><td>+, -</td><td>1</td><td>Left to Right</td></tr>
</table>

<h3><u>Evaluation Process</u></h3>
<p>The evaluation typically involves two main steps:</p>
<li>Converting infix expression to postfix (using operator stack)</li>
<li>Evaluating postfix expression (using operand stack)</li>

<h3><u>Common Challenges</u></h3>
<p>When implementing expression evaluation, consider these aspects:</p>
<li>Handling negative numbers</li>
<li>Dealing with floating-point arithmetic</li>
<li>Managing operator precedence</li>
<li>Processing multi-digit numbers</li>
<li>Handling division by zero</li>`,
  codeExample: `class ExpressionEvaluator:
    def __init__(self):
        self.operators = {
            '+': (1, lambda x, y: x + y),
            '-': (1, lambda x, y: x - y),
            '*': (2, lambda x, y: x * y),
            '/': (2, lambda x, y: x / y),
            '^': (3, lambda x, y: x ** y)
        }
    
    def infix_to_postfix(self, expression):
        """
        Converts infix expression to postfix notation.
        
        Args:
            expression (str): Space-separated infix expression
            
        Returns:
            str: Space-separated postfix expression
            
        Example:
            >>> evaluator = ExpressionEvaluator()
            >>> evaluator.infix_to_postfix("3 + 4 * 2")
            "3 4 2 * +"
        """
        output = []
        operator_stack = []
        
        for token in expression.split():
            if self._is_number(token):
                output.append(token)
            elif token in self.operators:
                while (operator_stack and 
                       operator_stack[-1] in self.operators and 
                       self.operators[operator_stack[-1]][0] >= self.operators[token][0]):
                    output.append(operator_stack.pop())
                operator_stack.append(token)
            elif token == '(':
                operator_stack.append(token)
            elif token == ')':
                while operator_stack and operator_stack[-1] != '(':
                    output.append(operator_stack.pop())
                operator_stack.pop()  # Remove '('
        
        while operator_stack:
            output.append(operator_stack.pop())
            
        return ' '.join(output)
    
    def evaluate_postfix(self, postfix_expr):
        """
        Evaluates a postfix expression.
        
        Args:
            postfix_expr (str): Space-separated postfix expression
            
        Returns:
            float: Result of evaluation
            
        Example:
            >>> evaluator = ExpressionEvaluator()
            >>> evaluator.evaluate_postfix("3 4 2 * +")
            11.0
        """
        stack = []
        
        try:
            for token in postfix_expr.split():
                if self._is_number(token):
                    stack.append(float(token))
                else:
                    # Pop operands in reverse order
                    b = stack.pop()
                    a = stack.pop()
                    # Apply operator and push result
                    result = self.operators[token][1](a, b)
                    stack.append(result)
            
            return stack[0]
            
        except ZeroDivisionError:
            raise ValueError("Division by zero")
        except:
            raise ValueError("Invalid expression")
    
    def evaluate(self, expression):
        """
        Evaluates an infix expression.
        
        Args:
            expression (str): Space-separated infix expression
            
        Returns:
            float: Result of evaluation
            
        Example:
            >>> evaluator = ExpressionEvaluator()
            >>> evaluator.evaluate("3 + 4 * 2")
            11.0
        """
        postfix = self.infix_to_postfix(expression)
        return self.evaluate_postfix(postfix)
    
    def _is_number(self, token):
        """Checks if a token is a number (integer or float)."""
        try:
            float(token)
            return True
        except ValueError:
            return False

def demonstrate_evaluation():
    evaluator = ExpressionEvaluator()
    expressions = [
        "3 + 4 * 2",          # Basic precedence
        "( 3 + 4 ) * 2",      # Parentheses
        "2 ^ 3 + 1",          # Exponentiation
        "15 / 3 * 5",         # Left-to-right evaluation
    ]
    
    for expr in expressions:
        try:
            postfix = evaluator.infix_to_postfix(expr)
            result = evaluator.evaluate(expr)
            print(f"Infix:   {expr}")
            print(f"Postfix: {postfix}")
print(f"Result:  {result}")
        except ValueError as e:
            print(f"Error evaluating {expr}: {e}")

# Run demonstration
demonstrate_evaluation()`,
  exercises: [
    {
      prompt:
        'Implement a function that evaluates expressions with unary minus operators. For example, "-3 + 4 * -2" should evaluate to -11.',
      initialCode: `def evaluate_with_unary(expression):
    # Write your solution here
    return 0`,
      solution: `def evaluate_with_unary(expression):
    def tokenize(expr):
        """Convert expression into tokens, handling unary minus."""
        tokens = []
        for i, char in enumerate(expr.split()):
            if char == '-' and (i == 0 or expr.split()[i-1] in '+-*/^('):
                tokens.extend(['(', '0', '-'])
            else:
                tokens.append(char)
        return tokens

    evaluator = ExpressionEvaluator()
    tokenized = ' '.join(tokenize(expression))
    return evaluator.evaluate(tokenized)`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question:
        'Why is postfix notation easier to evaluate than infix notation?',
      options: [
        'It requires fewer operations',
        'It eliminates the need for operator precedence',
        'It uses less memory',
        "It's faster to parse",
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. The number of operations remains the same.',
        'Correct! In postfix notation, the order of operations is already determined by the position of operators.',
        'Incorrect. Memory usage depends on the expression complexity.',
        'Incorrect. Parsing complexity is similar.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const nextGreaterElementData: LessonContent = {
  title: 'Next Greater Element Using Monotonic Stack',
  content: `<p>
The Next Greater Element (NGE) pattern is a powerful application of stacks that demonstrates how maintaining monotonicity can solve seemingly complex problems efficiently. This pattern is particularly useful in problems involving finding the next larger value in a sequence.
</p>

<h3><u>Understanding the Pattern</u></h3>
<p>
For each element in an array, the Next Greater Element is the first larger element that appears to its right. If no such element exists, we typically use -1 or a special value to indicate this. For example, in the array [4, 5, 2, 25], the next greater elements are:
</p>
<li>4 → 5 (next element is larger)</li>
<li>5 → 25 (skips 2 as it's smaller)</li>
<li>2 → 25 (first larger element to the right)</li>
<li>25 → -1 (no larger element exists)</li>

<h3><u>The Monotonic Stack Approach</u></h3>
<p>
A monotonic stack maintains elements in either increasing or decreasing order. For NGE, we use a decreasing stack, which means:
</p>
<li>We push elements onto the stack if they're smaller than the top</li>
<li>When we find a larger element, we pop and process all smaller elements</li>
<li>This ensures we always find the next greater element efficiently</li>

<h3><u>Common Variations</u></h3>
<p>The pattern can be adapted for several variations:</p>
<li>Next Smaller Element (use increasing stack)</li>
<li>Previous Greater Element (traverse from left)</li>
<li>Circular Array (connect end to beginning)</li>
<li>Temperature differences (as in Daily Temperatures problem)</li>`,
  codeExample: `class MonotonicStack:
    def find_next_greater_elements(self, arr):
        """
        Finds the next greater element for each element in the array.
        
        Args:
            arr (List[int]): Input array
            
        Returns:
            List[int]: Array where each element is the next greater element
                      for the corresponding input element
        
        Example:
            >>> finder = MonotonicStack()
            >>> finder.find_next_greater_elements([4, 5, 2, 25])
            [5, 25, 25, -1]
        """
        n = len(arr)
        result = [-1] * n  # Initialize with -1 for elements with no greater next
        stack = []  # Stack will store indices
        
        # Process all elements one by one
        for i in range(n):
            current = arr[i]
            
            # While stack has elements and current element is greater than
            # element at stack top, we've found next greater element for
            # element at stack top
            while stack and current > arr[stack[-1]]:
                prev_index = stack.pop()
                result[prev_index] = current
            
            # Push current element's index onto stack
            stack.append(i)
        
        return result
    
    def find_next_greater_circular(self, arr):
        """
        Finds next greater element in a circular array.
        
        Args:
            arr (List[int]): Input array
            
        Returns:
            List[int]: Array of next greater elements considering circular nature
            
        Example:
            >>> finder = MonotonicStack()
            >>> finder.find_next_greater_circular([3, 1, 2, 4])
            [4, 2, 4, 3]
        """
        n = len(arr)
        result = [-1] * n
        stack = []
        
        # Process array twice to handle circular nature
        for i in range(n * 2):
            current = arr[i % n]
            
            while stack and current > arr[stack[-1]]:
                prev_index = stack.pop()
                result[prev_index] = current
            
            if i < n:  # Only push indices from first iteration
                stack.append(i)
        
        return result
    
    def daily_temperatures(self, temperatures):
        """
        Given daily temperatures, finds number of days until warmer temperature.
        
        Args:
            temperatures (List[int]): Daily temperatures
            
        Returns:
            List[int]: Days until warmer temperature for each day
            
        Example:
            >>> finder = MonotonicStack()
            >>> finder.daily_temperatures([73, 74, 75, 71, 69, 72, 76, 73])
            [1, 1, 4, 2, 1, 1, 0, 0]
        """
        n = len(temperatures)
        result = [0] * n
        stack = []
        
        for i in range(n):
            current = temperatures[i]
            
            while stack and current > temperatures[stack[-1]]:
                prev_day = stack.pop()
                result[prev_day] = i - prev_day  # Calculate days difference
            
            stack.append(i)
        
        return result

def demonstrate_monotonic_stack():
    finder = MonotonicStack()
    
    # Basic next greater element
    arr1 = [4, 5, 2, 25]
    result1 = finder.find_next_greater_elements(arr1)
    print(f"Array: {arr1}")
    print(f"Next greater elements: {result1}")
    
    # Circular array
    arr2 = [3, 1, 2, 4]
    result2 = finder.find_next_greater_circular(arr2)
    print(f"Circular array: {arr2}")
    print(f"Circular next greater: {result2}")
    
    # Daily temperatures
    temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
    result3 = finder.daily_temperatures(temperatures)
    print(f"Temperatures: {temperatures}")
    print(f"Days until warmer: {result3}")

# Run demonstration
demonstrate_monotonic_stack()`,
  exercises: [
    {
      prompt:
        'Implement a function to find the next smaller element for each element in an array. Return -1 if no smaller element exists.',
      initialCode: `def find_next_smaller_elements(arr):
    # Write your solution here
    return []`,
      solution: `def find_next_smaller_elements(arr):
    n = len(arr)
    result = [-1] * n
    stack = []  # Stack will store indices
    
    for i in range(n):
        current = arr[i]
        
        # Pop elements from stack while current is smaller
        while stack and current < arr[stack[-1]]:
            prev_index = stack.pop()
            result[prev_index] = current
            
        stack.append(i)
    
    return result`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Given an array of integers, find the span of each element. The span of an element is the number of consecutive elements just before the current element (including itself) that are less than or equal to it.',
      initialCode: `def calculate_span(arr):
    # Write your solution here
    return []`,
      solution: `def calculate_span(arr):
    n = len(arr)
    span = [1] * n  # Each element has minimum span of 1
    stack = []  # Stack will store indices
    
    for i in range(n):
        # Pop elements while current is greater
        while stack and arr[i] >= arr[stack[-1]]:
            stack.pop()
            
        # If stack is empty, all previous elements are smaller
        # Otherwise, span is difference between current index and top of stack
        span[i] = i + 1 if not stack else i - stack[-1]
        
        stack.append(i)
    
    return span`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question:
        'Why do we store indices instead of values in the monotonic stack?',
      options: [
        'To save memory',
        'To handle duplicate elements',
        'To calculate positions and distances',
        'To improve time complexity',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Storing indices uses similar memory.',
        'Incorrect. Duplicates can be handled with values too.',
        'Correct! Indices allow us to calculate positions and distances between elements.',
        'Incorrect. Time complexity remains the same.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'What is the time complexity of finding next greater elements using a monotonic stack?',
      options: ['O(n²)', 'O(n log n)', 'O(n)', 'O(1)'],
      correctAnswer: 2,
      explanations: [
        'Incorrect. The monotonic stack approach is more efficient.',
        'Incorrect. No sorting is needed.',
        'Correct! Each element is pushed and popped at most once.',
        'Incorrect. We need to process each element.',
      ],
      difficulty: Difficulty.Intermediate,
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

const backspaceStringData: LessonContent = {
  title: 'Backspace String Compare',
  content: `<p>
Understanding how to handle backspace characters in strings is a fascinating problem that teaches us important lessons about string manipulation and space optimization. Imagine you're building a text editor - when users type the backspace key, it erases the previous character. How would you compare two strings to see if they're equivalent after processing all backspaces?
</p>

<h3><u>Understanding the Problem</u></h3>
<p>
Let's start with a simple example. Consider these two strings:
"ab#c" and "ad#c"
</p>
<p>
When we process them:
- "ab#c" becomes "ac" (b is deleted by #)
- "ad#c" becomes "ac" (d is deleted by #)
So these strings are equivalent after processing backspaces.
</p>

<h3><u>Key Considerations</u></h3>
<p>
When solving this problem, we need to think about several important aspects:
</p>
<li>Multiple consecutive backspaces: "abc##d" → "ad"</li>
<li>Backspace on empty string: "#abc" → "abc"</li>
<li>All characters deleted: "abc###" → ""</li>
<li>Space efficiency: Can we compare without building new strings?</li>

<h3><u>Solution Approaches</u></h3>
<p>
There are three main ways to solve this problem, each with different trade-offs:
</p>

<h4><b>1. Build Final Strings (Stack Approach)</b></h4>
<p>
Use a stack to build the final string by pushing regular characters and popping for backspaces. This is intuitive but uses O(n) extra space.
</p>

<h4><b>2. Two-Pointer Approach (Space-Optimal)</b></h4>
<p>
Compare characters from right to left, counting backspaces as we go. This uses O(1) space but is more complex to implement.
</p>

<h4><b>3. In-place Character Count</b></h4>
<p>
Count valid characters and backspaces in a single pass, then build final strings. This is a good balance between clarity and efficiency.
</p>`,
  codeExample: `class BackspaceComparer:
    def compare_with_stack(self, s: str, t: str) -> bool:
        """
        Compares two strings with backspaces using stack approach.
        
        Args:
            s (str): First string with backspaces
            t (str): Second string with backspaces
            
        Returns:
            bool: True if strings are equal after processing backspaces
            
        Example:
            >>> comparer = BackspaceComparer()
            >>> comparer.compare_with_stack("ab#c", "ad#c")
            True  # Both become "ac"
        """
        def build_final_string(input_str: str) -> str:
            stack = []
            for char in input_str:
                if char != '#':
                    stack.append(char)
                elif stack:  # If there's a character to delete
                    stack.pop()
            return ''.join(stack)
        
        return build_final_string(s) == build_final_string(t)
    
    def compare_space_optimal(self, s: str, t: str) -> bool:
        """
        Compares strings using two-pointer approach with O(1) space.
        
        This method is more complex but uses constant extra space.
        We traverse both strings from right to left, handling backspaces
        as we encounter them.
        """
        def get_next_valid_char(string: str, index: int) -> tuple[int, str]:
            backspaces = 0
            # Skip characters until we find a valid one
            while index >= 0:
                if string[index] == '#':
                    backspaces += 1
                elif backspaces > 0:
                    backspaces -= 1
                else:
                    return index, string[index]
                index -= 1
            return index, ''
        
        # Compare characters from right to left
        i, j = len(s) - 1, len(t) - 1
        
        while i >= 0 or j >= 0:
            # Get next valid characters from both strings
            i, char1 = get_next_valid_char(s, i)
            j, char2 = get_next_valid_char(t, j)
            
            if char1 != char2:
                return False
            
            i -= 1
            j -= 1
        
        return True
    
    def compare_with_character_count(self, s: str, t: str) -> bool:
        """
        Compares strings by counting valid characters and backspaces.
        
        This approach offers a good balance between readability and efficiency.
        We first count how many valid characters we'll have, then build
        the final strings accordingly.
        """
        def process_string(input_str: str) -> str:
            # First pass: count valid characters
            valid_count = 0
            backspaces = 0
            for char in reversed(input_str):
                if char == '#':
                    backspaces += 1
                elif backspaces > 0:
                    backspaces -= 1
                else:
                    valid_count += 1
            
            # Second pass: build final string
            result = []
            backspaces = 0
            for char in reversed(input_str):
                if char == '#':
                    backspaces += 1
                elif backspaces > 0:
                    backspaces -= 1
                else:
                    result.append(char)
                if len(result) == valid_count:
                    break
            
            return ''.join(reversed(result))
        
        return process_string(s) == process_string(t)

# Demonstration with detailed examples
def demonstrate_backspace_comparison():
    comparer = BackspaceComparer()
    
    test_cases = [
        ("ab#c", "ad#c"),      # Basic case
        ("abc##d", "ad"),      # Multiple backspaces
        ("#abc", "abc"),       # Leading backspace
        ("a##c", "#c"),        # Different number of backspaces
        ("a#c", "b#c"),        # Same ending, different start
        ("abc###", ""),        # All characters deleted
    ]
    
    for s, t in test_cases:
        # Test all three approaches
        stack_result = comparer.compare_with_stack(s, t)
        optimal_result = comparer.compare_space_optimal(s, t)
        count_result = comparer.compare_with_character_count(s, t)
        
        print(f"Comparing '{s}' with '{t}':")
        print(f"Stack approach: {stack_result}")
        print(f"Space-optimal approach: {optimal_result}")
        print(f"Character count approach: {count_result}")

# Run demonstration
demonstrate_backspace_comparison()`,
  exercises: [
    {
      prompt:
        'Implement a function that returns the final string after processing backspaces, but iterating from left to right only once. Each backspace removes one character if possible.',
      initialCode: `def process_string_single_pass(s: str) -> str:
    # Write your solution here
    return ""`,
      solution: `def process_string_single_pass(s: str) -> str:
    result = []
    for char in s:
        if char != '#':
            result.append(char)
        elif result:  # If there's a character to delete
            result.pop()
    return ''.join(result)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a function that counts how many different ways you can insert backspace characters into a string to produce a given target string. For example, to get "ac" from starting string "abc", you could use "abc#" or "ab#c".',
      initialCode: `def count_backspace_combinations(start: str, target: str) -> int:
    # Write your solution here
    return 0`,
      solution: `def count_backspace_combinations(start: str, target: str) -> int:
    def backtrack(curr_pos: int, target_pos: int, memo={}) -> int:
        # Base cases
        if target_pos == len(target):
            return 1 if curr_pos >= len(start) else 0
        if curr_pos >= len(start):
            return 0
            
        # Check memoization
        key = (curr_pos, target_pos)
        if key in memo:
            return memo[key]
            
        ways = 0
        # Try matching current character
        if start[curr_pos] == target[target_pos]:
            ways += backtrack(curr_pos + 1, target_pos + 1, memo)
            
        # Try skipping current character (using backspace)
        ways += backtrack(curr_pos + 1, target_pos, memo)
        
        memo[key] = ways
        return ways
        
    return backtrack(0, 0)`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question:
        'Why might the two-pointer approach be preferred over the stack approach in certain situations?',
      options: [
        "It's always faster",
        'It uses constant extra space',
        "It's easier to implement",
        'It handles more edge cases',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. The time complexity is the same for both approaches.',
        'Correct! The two-pointer approach uses O(1) extra space compared to O(n) for the stack approach.',
        'Incorrect. The two-pointer approach is actually more complex to implement.',
        'Incorrect. Both approaches handle the same edge cases.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'What is a potential disadvantage of the space-optimal (two-pointer) approach?',
      options: [
        'Higher time complexity',
        'More complex implementation',
        'Cannot handle multiple backspaces',
        'Requires sorting the input',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. The time complexity remains O(n).',
        'Correct! The two-pointer approach requires more complex logic to handle backspaces while traversing backwards.',
        'Incorrect. It handles multiple backspaces correctly.',
        'Incorrect. No sorting is needed.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const stringReversalData: LessonContent = {
  title: 'String Reversal and Manipulation Using Stacks',
  content: `<p>
String manipulation is a fundamental skill in programming, and stacks provide an elegant way to handle many string operations. Understanding how to use stacks for string manipulation will not only help you solve specific string problems but also deepen your understanding of both data structures.
</p>

<p>
Think of a stack like a stack of books - when you want to reverse their order, you pick up each book and place it on a new pile. This same principle helps us manipulate strings in powerful ways.
</p>

<h3><u>Core String Operations with Stacks</u></h3>

<h4><b>1. Basic String Reversal</b></h4>
<p>
The most fundamental operation is string reversal. When we push each character onto a stack and then pop them off, they naturally come out in reverse order. This works because stacks follow the Last-In-First-Out (LIFO) principle.
</p>

<h4><b>2. Word-by-Word Reversal</b></h4>
<p>
Sometimes we need to reverse words while maintaining their internal character order. For example, "Hello World" becomes "World Hello". This requires a more sophisticated use of the stack, where entire words become our stack elements.
</p>

<h4><b>3. Nested String Processing</b></h4>
<p>
Stacks excel at handling nested structures in strings, such as:
</p>
<li>Reversing text within parentheses: "abc(def)ghi" → "abc(fed)ghi"</li>
<li>Processing nested tags: "&lt;div&gt;&lt;span&gt;text&lt;/span&gt;&lt;/div&gt;"</li>
<li>Handling multiple levels of quotes or brackets</li>

<h3><u>Key Patterns and Techniques</u></h3>
<p>
When working with strings and stacks, keep these patterns in mind:
</p>
<li>Character-by-character processing for basic reversal</li>
<li>Token-based processing for word-level operations</li>
<li>Multiple stacks for complex transformations</li>
<li>Stack pairs for matching operations</li>`,
  codeExample: `class StringManipulator:
    def reverse_string(self, s: str) -> str:
        """
        Reverses a string using a stack.
        
        This method demonstrates the most basic use of a stack for string manipulation.
        Time complexity: O(n), Space complexity: O(n)
        
        Args:
            s (str): Input string to reverse
            
        Returns:
            str: Reversed string
            
        Example:
            >>> manipulator = StringManipulator()
            >>> manipulator.reverse_string("hello")
            "olleh"
        """
        # Create a stack and push all characters
        stack = []
        for char in s:
            stack.append(char)
        
        # Pop characters to build reversed string
        reversed_str = ""
        while stack:
            reversed_str += stack.pop()
            
        return reversed_str
    
    def reverse_words(self, s: str) -> str:
        """
        Reverses the order of words in a string.
        Words themselves maintain their character order.
        
        Args:
            s (str): Input string with words
            
        Returns:
            str: String with reversed word order
            
        Example:
            >>> manipulator = StringManipulator()
            >>> manipulator.reverse_words("Hello World")
            "World Hello"
        """
        # Split into words and push onto stack
        words = s.split()
        stack = []
        
        for word in words:
            stack.append(word)
        
        # Pop words to build reversed string
        result = []
        while stack:
            result.append(stack.pop())
            
        return " ".join(result)
    
    def reverse_parentheses(self, s: str) -> str:
        """
        Reverses the characters in each level of parentheses.
        
        Args:
            s (str): String with possibly nested parentheses
            
        Returns:
            str: String with reversed content within parentheses
            
        Example:
            >>> manipulator = StringManipulator()
            >>> manipulator.reverse_parentheses("abc(def)ghi")
            "abc(fed)ghi"
        """
        stack = []
        current = ""
        
        for char in s:
            if char == '(':
                # Save current string and start new one
                stack.append(current)
                current = ""
            elif char == ')':
                # Reverse current string and append to previous
                current = current[::-1]
                if stack:
                    current = stack.pop() + current
            else:
                current += char
                
        return current
    
    def process_nested_tags(self, s: str) -> str:
        """
        Processes nested HTML-like tags, ensuring proper nesting.
        
        Args:
            s (str): String with HTML-like tags
            
        Returns:
            str: Processed string with proper tag nesting
            
        Example:
            >>> manipulator = StringManipulator()
            >>> manipulator.process_nested_tags("<div><p>text</p></div>")
            "valid"
        """
        stack = []
        i = 0
        
        while i < len(s):
            if s[i] == '<':
                if i + 1 < len(s) and s[i + 1] == '/':
                    # Closing tag
                    end = s.find('>', i)
                    if end == -1:
                        return "invalid"
                    tag = s[i+2:end]
                    if not stack or stack.pop() != tag:
                        return "invalid"
                    i = end + 1
                else:
                    # Opening tag
                    end = s.find('>', i)
                    if end == -1:
                        return "invalid"
                    tag = s[i+1:end]
                    stack.append(tag)
                    i = end + 1
            else:
                i += 1
                
        return "valid" if not stack else "invalid"

def demonstrate_string_manipulation():
    manipulator = StringManipulator()
    
    # Basic string reversal
    text = "Hello, World!"
    reversed_text = manipulator.reverse_string(text)
    print(f"Original: {text}")
    print(f"Reversed: {reversed_text}")
    
    # Word reversal
    sentence = "Python is amazing"
    reversed_words = manipulator.reverse_words(sentence)
    print(f"Original sentence: {sentence}")
    print(f"Reversed words: {reversed_words}")
    
    # Parentheses reversal
    nested = "abc(def(ghi)jkl)mno"
    reversed_paren = manipulator.reverse_parentheses(nested)
    print(f"Original nested: {nested}")
    print(f"Reversed within parentheses: {reversed_paren}")
    
    # Tag processing
    tags = "<div><span>text</span></div>"
    result = manipulator.process_nested_tags(tags)
    print(f"Tags: {tags}")
    print(f"Tag validation result: {result}")

# Run demonstration
demonstrate_string_manipulation()`,
  exercises: [
    {
      prompt:
        'Implement a function that removes consecutive duplicate characters from a string using a stack. For example, "abbaca" should become "ca".',
      initialCode: `def remove_duplicates(s: str) -> str:
    # Write your solution here
    return ""`,
      solution: `def remove_duplicates(s: str) -> str:
    stack = []
    
    for char in s:
        # If stack has same character on top, pop it
        if stack and stack[-1] == char:
            stack.pop()
        else:
            # Otherwise, push current character
            stack.append(char)
    
    return ''.join(stack)`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a function that evaluates a mathematical expression containing only addition and multiplication, respecting operator precedence. For example, "2+3*4" should return 14.',
      initialCode: `def evaluate_expression(s: str) -> int:
    # Write your solution here
    return 0`,
      solution: `def evaluate_expression(s: str) -> int:
    stack = []
    current_number = 0
    last_operator = '+'
    
    for i, char in enumerate(s + '+'):  # Add '+' to process last number
        if char.isdigit():
            current_number = current_number * 10 + int(char)
        elif char in '+*':
            if last_operator == '+':
                stack.append(current_number)
            elif last_operator == '*':
                stack.append(stack.pop() * current_number)
                
            current_number = 0
            last_operator = char
    
    return sum(stack)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'When using a stack for string reversal, what determines the space complexity?',
      options: [
        'The length of the output string',
        'The number of unique characters',
        'The length of the input string',
        'The number of operations performed',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. The output string is separate from the stack space.',
        'Incorrect. The stack stores all characters, not just unique ones.',
        'Correct! The stack needs to store all characters of the input string.',
        'Incorrect. Space complexity depends on storage, not operations.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Why is a stack particularly useful for processing nested structures in strings?',
      options: [
        'It provides fast random access',
        'It maintains the order of elements',
        'It matches the natural nesting structure',
        'It reduces time complexity',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Stacks do not provide random access.',
        'Incorrect. While true, this is not the main advantage for nested structures.',
        'Correct! The LIFO property of stacks naturally matches how nested structures are processed.',
        'Incorrect. The time complexity remains linear.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const textEditorOperationsData: LessonContent = {
  title: 'Text Editor Operations with Stacks',
  content: `<p>
Modern text editors are marvels of software engineering that we use every day. At their core, they rely on stacks to implement some of their most fundamental features, particularly the undo and redo operations. Let's explore how these work and build our own simplified text editor.
</p>

<h3><u>Understanding Text Editor Operations</u></h3>
<p>
Think about how you use a text editor. You type some text, make changes, and sometimes need to undo those changes. Every operation you perform becomes part of a history that you can traverse backwards (undo) and forwards (redo). This history forms a natural stack structure.
</p>

<h3><u>Core Concepts</u></h3>

<h4><b>1. Operation Types</b></h4>
<p>Text editors typically handle these basic operations:</p>
<li>Insert: Adding text at the current cursor position</li>
<li>Delete: Removing text at the current cursor position</li>
<li>Replace: Changing existing text to new text</li>
<li>Cursor Movement: Changing the insertion point</li>

<h4><b>2. The Two-Stack Model</b></h4>
<p>
Modern editors use two stacks to implement undo/redo:
</p>
<li>Undo Stack: Stores operations that have been performed</li>
<li>Redo Stack: Stores operations that have been undone</li>

<h4><b>3. Operation State</b></h4>
<p>
Each operation needs to store enough information to:
</p>
<li>Undo itself (reverse the change)</li>
<li>Redo itself (reapply the change)</li>
<li>Maintain cursor position information</li>

<h3><u>Implementation Considerations</u></h3>
<p>
When implementing a text editor, we need to consider:
</p>
<li>Memory efficiency (not storing too much history)</li>
<li>Performance (operations should be fast)</li>
<li>Complex operations (like multi-line editing)</li>
<li>Group operations (treating multiple changes as one)</li>`,
  codeExample: `class TextOperation:
    """Base class for text operations"""
    def __init__(self, position: int):
        self.position = position
    
    def apply(self, text: str) -> str:
        """Apply the operation to the text"""
        raise NotImplementedError
    
    def undo(self, text: str) -> str:
        """Undo the operation"""
        raise NotImplementedError

class InsertOperation(TextOperation):
    def __init__(self, position: int, text: str):
        super().__init__(position)
        self.text = text
    
    def apply(self, text: str) -> str:
        return text[:self.position] + self.text + text[self.position:]
    
    def undo(self, text: str) -> str:
        end_pos = self.position + len(self.text)
        return text[:self.position] + text[end_pos:]

class DeleteOperation(TextOperation):
    def __init__(self, position: int, length: int):
        super().__init__(position)
        self.length = length
        self.deleted_text = ""  # Will store the deleted text for undo
    
    def apply(self, text: str) -> str:
        self.deleted_text = text[self.position:self.position + self.length]
        return text[:self.position] + text[self.position + self.length:]
    
    def undo(self, text: str) -> str:
        return text[:self.position] + self.deleted_text + text[self.position:]

class TextEditor:
    def __init__(self):
        self.text = ""
        self.undo_stack = []  # Stack of operations that can be undone
        self.redo_stack = []  # Stack of operations that can be redone
        self.cursor_position = 0
    
    def insert(self, text: str):
        """
        Insert text at the current cursor position.
        
        Args:
            text (str): Text to insert
            
        Example:
            >>> editor = TextEditor()
            >>> editor.insert("Hello")
            >>> editor.insert(" World")
            >>> print(editor.get_text())
            "Hello World"
        """
        operation = InsertOperation(self.cursor_position, text)
        self._execute_operation(operation)
        self.cursor_position += len(text)
        self.redo_stack.clear()  # Clear redo stack on new operation
    
    def delete(self, length: int = 1):
        """
        Delete specified number of characters at cursor position.
        
        Args:
            length (int): Number of characters to delete
            
        Example:
            >>> editor = TextEditor()
            >>> editor.insert("Hello")
            >>> editor.cursor_position = 0
            >>> editor.delete(2)
            >>> print(editor.get_text())
            "llo"
        """
        if self.cursor_position + length > len(self.text):
            length = len(self.text) - self.cursor_position
        
        if length > 0:
            operation = DeleteOperation(self.cursor_position, length)
            self._execute_operation(operation)
            self.redo_stack.clear()
    
    def undo(self):
        """
        Undo the last operation.
        
        Example:
            >>> editor = TextEditor()
            >>> editor.insert("Hello")
            >>> editor.undo()
            >>> print(editor.get_text())
            ""
        """
        if self.undo_stack:
            operation = self.undo_stack.pop()
            self.text = operation.undo(self.text)
            self.redo_stack.append(operation)
            # Restore cursor position
            self.cursor_position = operation.position
    
    def redo(self):
        """
        Redo the last undone operation.
        
        Example:
            >>> editor = TextEditor()
            >>> editor.insert("Hello")
            >>> editor.undo()
            >>> editor.redo()
            >>> print(editor.get_text())
            "Hello"
        """
        if self.redo_stack:
            operation = self.redo_stack.pop()
            self._execute_operation(operation)
    
    def _execute_operation(self, operation: TextOperation):
        """Internal method to execute an operation"""
        self.text = operation.apply(self.text)
        self.undo_stack.append(operation)
    
    def get_text(self) -> str:
        """Get current text content"""
        return self.text
    
    def move_cursor(self, position: int):
        """Move cursor to specified position"""
        self.cursor_position = max(0, min(position, len(self.text)))

def demonstrate_text_editor():
    editor = TextEditor()
    
    # Basic text insertion
    print("Inserting text...")
    editor.insert("Hello")
    print(f"Current text: {editor.get_text()}")
    
    # Moving cursor and inserting
    editor.move_cursor(5)
    editor.insert(" World")
    print(f"After second insert: {editor.get_text()}")
    
    # Undo last operation
    editor.undo()
    print(f"After undo: {editor.get_text()}")
    
    # Redo the operation
    editor.redo()
    print(f"After redo: {editor.get_text()}")
    
    # Delete some text
    editor.move_cursor(5)
    editor.delete(6)  # Delete " World"
    print(f"After delete: {editor.get_text()}")

# Run demonstration
demonstrate_text_editor()`,
  exercises: [
    {
      prompt:
        'Implement a method in the TextEditor class that allows grouping multiple operations together so they can be undone/redone as a single unit.',
      initialCode: `def start_operation_group(self):
    # Write your solution here
    pass

def end_operation_group(self):
    # Write your solution here
    pass`,
      solution: `class OperationGroup(TextOperation):
    def __init__(self):
        super().__init__(0)
        self.operations = []
    
    def add_operation(self, operation):
        self.operations.append(operation)
        if not self.operations:
            self.position = operation.position
    
    def apply(self, text):
        result = text
        for op in self.operations:
            result = op.apply(result)
        return result
    
    def undo(self, text):
        result = text
        for op in reversed(self.operations):
            result = op.undo(result)
        return result

class TextEditor:
    def start_operation_group(self):
        self.current_group = OperationGroup()
    
    def end_operation_group(self):
        if hasattr(self, 'current_group'):
            if self.current_group.operations:
                self.undo_stack.append(self.current_group)
            del self.current_group
    
    def _execute_operation(self, operation):
        if hasattr(self, 'current_group'):
            self.current_group.add_operation(operation)
            self.text = operation.apply(self.text)
        else:
            self.text = operation.apply(self.text)
            self.undo_stack.append(operation)`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt:
        'Add a method to implement "find and replace" functionality that can be undone as a single operation.',
      initialCode: `def find_and_replace(self, find_text: str, replace_text: str) -> int:
    # Write your solution here
    # Return number of replacements made
    return 0`,
      solution: `def find_and_replace(self, find_text: str, replace_text: str) -> int:
    if not find_text:
        return 0
        
    self.start_operation_group()
    count = 0
    pos = 0
    
    while True:
        pos = self.text.find(find_text, pos)
        if pos == -1:
            break
            
        # Move cursor and perform replace
        self.move_cursor(pos)
        self.delete(len(find_text))
        self.insert(replace_text)
        
        # Update position for next search
        pos += len(replace_text)
        count += 1
    
    self.end_operation_group()
    return count`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Why do we clear the redo stack when a new operation is performed?',
      options: [
        'To save memory',
        'To maintain operation ordering',
        'Because redone operations are no longer valid',
        'To improve performance',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Memory savings is a side effect, not the main reason.',
        'Incorrect. Operation ordering is maintained by the undo stack.',
        'Correct! Once a new operation is performed after undos, the previous redo path is no longer valid.',
        'Incorrect. Performance impact is minimal.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'What is the main advantage of using the Command pattern (TextOperation class) for editor operations?',
      options: [
        'It reduces memory usage',
        'It allows operations to store their own undo logic',
        'It makes the code run faster',
        'It simplifies the cursor management',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. The pattern might actually use more memory to store operation states.',
        'Correct! Each operation knows how to undo itself, making the system more maintainable and extensible.',
        'Incorrect. Performance is not the main benefit of this pattern.',
        'Incorrect. Cursor management is handled separately.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const monotonicConceptData: LessonContent = {
  title: 'Understanding Monotonic Stacks',
  content: `<p>
Imagine you're standing in a city looking at different buildings. As you scan from left to right, sometimes you see taller buildings that make previous ones invisible from your viewpoint. This visual intuition captures the essence of a monotonic stack - it maintains a sequence where each element's relationship to its neighbors follows a strict pattern of increasing or decreasing values.
</p>

<h3><u>What is a Monotonic Stack?</u></h3>
<p>
A monotonic stack is a stack that maintains numbers in a strictly increasing or strictly decreasing order from bottom to top. When we add a new element, we remove elements that would violate this property. This simple rule creates a powerful tool for solving various problems involving finding the next or previous greater/smaller elements.
</p>

<h3><u>Types of Monotonic Stacks</u></h3>
<p>There are two main types:</p>

<h4><b>1. Monotonic Increasing Stack</b></h4>
<p>
Elements increase from bottom to top. When adding a new element, we pop elements that are greater than it. This helps find the "next smaller" element for each value.
</p>
<p>Example sequence: [1, 3, 5, 7]</p>

<h4><b>2. Monotonic Decreasing Stack</b></h4>
<p>
Elements decrease from bottom to top. When adding a new element, we pop elements that are smaller than it. This helps find the "next greater" element for each value.
</p>
<p>Example sequence: [7, 5, 3, 1]</p>

<h3><u>Key Properties</u></h3>
<p>Understanding these properties is crucial:</p>
<li>At most one push and one pop per element</li>
<li>Maintains relationships between elements implicitly</li>
<li>O(n) time complexity for processing n elements</li>
<li>Can handle duplicates with careful implementation</li>

<h3><u>Common Applications</u></h3>
<p>Monotonic stacks excel at solving:</p>
<li>Next/Previous Greater Element problems</li>
<li>Temperature span problems</li>
<li>Rectangle in Histogram</li>
<li>Building with ocean view problems</li>`,
  codeExample: `class MonotonicStack:
    """
    A comprehensive implementation of monotonic stack patterns with visualization.
    """
    
    def build_monotonic_increasing(self, arr):
        """
        Builds a monotonic increasing stack, maintaining elements in ascending order.
        
        Args:
            arr (List[int]): Input array
            
        Returns:
            List[List]: List of stack states for visualization
            
        Example:
            >>> stack = MonotonicStack()
            >>> stack.build_monotonic_increasing([3, 1, 4, 2])
            Visualizes how stack changes with each element
        """
        stack = []
        states = []  # For visualization
        
        for num in arr:
            # Remove elements larger than current to maintain increasing order
            while stack and stack[-1] > num:
                stack.pop()
            stack.append(num)
            states.append(stack.copy())  # Save current state
            
        return states
    
    def build_monotonic_decreasing(self, arr):
        """
        Builds a monotonic decreasing stack, maintaining elements in descending order.
        
        Args:
            arr (List[int]): Input array
            
        Returns:
            List[List]: List of stack states for visualization
        """
        stack = []
        states = []
        
        for num in arr:
            # Remove elements smaller than current to maintain decreasing order
            while stack and stack[-1] < num:
                stack.pop()
            stack.append(num)
            states.append(stack.copy())
            
        return states
    
    def find_next_greater_elements(self, arr):
        """
        Uses monotonic decreasing stack to find next greater element for each value.
        
        Args:
            arr (List[int]): Input array
            
        Returns:
            Dict[int, int]: Maps each element to its next greater element
            
        Example:
            >>> stack = MonotonicStack()
            >>> stack.find_next_greater_elements([4, 5, 2, 10])
            {4: 5, 5: 10, 2: 10, 10: None}
        """
        stack = []
        result = {}
        
        for num in arr:
            # Process all elements that have 'num' as their next greater element
            while stack and stack[-1] < num:
                prev = stack.pop()
                result[prev] = num
            stack.append(num)
        
        # Elements remaining in stack have no next greater element
        for num in stack:
            result[num] = None
            
        return result
    
    def find_previous_smaller_elements(self, arr):
        """
        Uses monotonic increasing stack to find previous smaller element for each value.
        
        Args:
            arr (List[int]): Input array
            
        Returns:
            Dict[int, int]: Maps each element to its previous smaller element
        """
        stack = []
        result = {}
        
        for num in arr:
            while stack and stack[-1] > num:
                stack.pop()
            result[num] = stack[-1] if stack else None
            stack.append(num)
            
        return result

def demonstrate_monotonic_patterns():
    stack = MonotonicStack()
    
    # Demonstrate increasing stack
    arr1 = [3, 1, 4, 2]
    print("Building monotonic increasing stack:")
    states = stack.build_monotonic_increasing(arr1)
    for i, state in enumerate(states):
        print(f"After processing {arr1[i]}: {state}")
    
    # Demonstrate decreasing stack
    arr2 = [4, 5, 2, 10]
    print("Building monotonic decreasing stack:")
    states = stack.build_monotonic_decreasing(arr2)
    for i, state in enumerate(states):
        print(f"After processing {arr2[i]}: {state}")
    
    # Find next greater elements
    result = stack.find_next_greater_elements(arr2)
    print("Next greater elements:")
    for num, next_greater in result.items():
        print(f"{num} -> {next_greater if next_greater else 'None'}")
    
    # Find previous smaller elements
    result = stack.find_previous_smaller_elements(arr2)
    print("Previous smaller elements:")
    for num, prev_smaller in result.items():
        print(f"{num} -> {prev_smaller if prev_smaller else 'None'}")

# Run demonstration
demonstrate_monotonic_patterns()`,
  exercises: [
    {
      prompt:
        'Implement a function that finds the number of days until a warmer temperature using a monotonic stack. Given array of daily temperatures, return array where result[i] is number of days until warmer temperature.',
      initialCode: `def daily_temperatures(temperatures):
    # Write your solution here
    return []`,
      solution: `def daily_temperatures(temperatures):
    stack = []  # Stack will store indices
    n = len(temperatures)
    result = [0] * n
    
    for i in range(n):
        while stack and temperatures[i] > temperatures[stack[-1]]:
            prev_day = stack.pop()
            result[prev_day] = i - prev_day
        stack.append(i)
    
    return result`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Implement a function that determines if an array can be divided into chunks where each chunk contains consecutive integers in any order.',
      initialCode: `def can_chunk_array(arr):
    # Write your solution here
    return False`,
      solution: `def can_chunk_array(arr):
    stack = []
    curr_max = float('-inf')
    
    for num in arr:
        # Keep track of maximum in current chunk
        curr_max = max(curr_max, num)
        stack.append(num)
        
        # When we've found all numbers up to current max,
        # we've completed a valid chunk
        if curr_max == len(stack):
            stack.clear()
            curr_max = float('-inf')
    
    # If stack is empty, all chunks were valid
    return len(stack) == 0`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question:
        'What is the key property that makes a stack monotonic increasing?',
      options: [
        'Elements are sorted in ascending order',
        'Elements increase from top to bottom',
        'Each element is greater than all elements below it',
        'Each element appears only once',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Elements being sorted is not sufficient.',
        'Incorrect. Elements increase from bottom to top.',
        'Correct! Each element must be greater than all elements below it in the stack.',
        'Incorrect. Monotonic stacks can handle duplicates with proper implementation.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Why is a monotonic stack more efficient than a brute force approach for finding next greater elements?',
      options: [
        'It uses less memory',
        'It processes each element exactly once',
        'It maintains useful ordering information implicitly',
        'It sorts the elements automatically',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Memory usage is not the main advantage.',
        'Incorrect. Each element might be processed multiple times.',
        'Correct! The stack structure maintains relationships between elements, eliminating need for repeated scanning.',
        'Incorrect. Sorting is not part of the monotonic stack operation.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const histogramProblemsData: LessonContent = {
  title: 'Solving Histogram Problems Using Monotonic Stacks',
  content: `<p>
Imagine walking through a city of rectangular buildings with different heights. If you wanted to find the largest rectangular billboard that could be placed across these buildings, how would you do it? This is essentially what we're solving with histogram problems, and monotonic stacks provide an elegant solution.
</p>

<h3><u>Understanding Histogram Problems</u></h3>
<p>
A histogram is represented by an array of non-negative integers where each value represents the height of a bar. The key challenge is finding the largest rectangular area that can be formed within these bars. This might sound simple at first, but there's a beautiful complexity to it that reveals itself as we dig deeper.
</p>

<h3><u>Why Monotonic Stacks?</u></h3>
<p>
Think about how you'd find the largest rectangle manually. For each bar, you'd need to:
</p>
<li>Look left to find the first shorter bar</li>
<li>Look right to find the first shorter bar</li>
<li>Calculate the area between these boundaries</li>

<p>
A monotonic stack lets us do this efficiently by maintaining a sequence of bars in increasing order of height. When we find a shorter bar, we know we've found a boundary, and we can calculate areas for all taller bars we've seen so far.
</p>

<h3><u>Key Insights</u></h3>
<p>
The crucial insights that make this approach work are:
</p>
<li>A rectangle's height is limited by its shortest bar</li>
<li>The width extends until we find a shorter bar on either side</li>
<li>We only need to calculate areas when we find these boundaries</li>

<h3><u>Common Variations</u></h3>
<p>
This pattern appears in several problems:
</p>
<li>Largest Rectangle in Histogram</li>
<li>Maximum Rectangle in Binary Matrix</li>
<li>Container With Most Water</li>
<li>Trapping Rain Water</li>`,
  codeExample: `class HistogramSolver:
    """
    A comprehensive solution for histogram-related problems using monotonic stacks.
    """
    
    def largest_rectangle_area(self, heights):
        """
        Finds the largest rectangular area possible in a histogram.
        
        The key insight is that for each bar, we want to find the first lower bar
        on both left and right. The monotonic stack helps us find these boundaries
        efficiently.
        
        Args:
            heights (List[int]): Array of bar heights
            
        Returns:
            int: Area of largest rectangle
            
        Example:
            >>> solver = HistogramSolver()
            >>> solver.largest_rectangle_area([2, 1, 5, 6, 2, 3])
            10  # Rectangle of height 2 spanning from index 0 to 4
        """
        stack = []  # Stack will store indices
        max_area = 0
        heights = heights + [0]  # Add sentinel value to handle last calculations
        
        for i, height in enumerate(heights):
            start = i
            
            # While we have a higher bar in stack, we've found a right boundary
            while stack and heights[stack[-1]] > height:
                # Pop the higher bar and calculate its maximum possible area
                bar_height = heights[stack.pop()]
                # Width is current position minus the next lower bar on left
                width = i - stack[-1] - 1 if stack else i
                max_area = max(max_area, bar_height * width)
            
            stack.append(i)
        
        return max_area
    
    def maximal_rectangle(self, matrix):
        """
        Finds the largest rectangle containing only 1's in a binary matrix.
        
        This problem reduces to finding largest rectangle in histogram for each row,
        where we treat consecutive 1's as building up height.
        
        Args:
            matrix (List[List[str]]): Binary matrix of '0's and '1's
            
        Returns:
            int: Area of largest rectangle
            
        Example:
            >>> solver = HistogramSolver()
            >>> solver.maximal_rectangle([
                ["1","0","1","0","0"],
                ["1","0","1","1","1"],
                ["1","1","1","1","1"],
                ["1","0","0","1","0"]
            ])
            6  # Rectangle from row 1 to 2, columns 2 to 4
        """
        if not matrix or not matrix[0]:
            return 0
            
        nums = [int(n) for n in matrix[0]]
        max_area = self.largest_rectangle_area(nums)
        
        # For each row, calculate heights and find largest rectangle
        for i in range(1, len(matrix)):
            for j in range(len(matrix[0])):
                # If current cell is 1, add to height; otherwise, reset height
                nums[j] = nums[j] + 1 if matrix[i][j] == "1" else 0
            
            max_area = max(max_area, self.largest_rectangle_area(nums))
        
        return max_area
    
    def trap_rain_water(self, heights):
        """
        Calculates how much water can be trapped between bars.
        
        Uses two monotonic stacks (from left and right) to find boundaries
        that can trap water.
        
        Args:
            heights (List[int]): Array of bar heights
            
        Returns:
            int: Total units of water that can be trapped
            
        Example:
            >>> solver = HistogramSolver()
            >>> solver.trap_rain_water([0,1,0,2,1,0,1,3,2,1,2,1])
            6  # Water is trapped in various pockets between bars
        """
        if not heights:
            return 0
            
        left, right = 0, len(heights) - 1
        left_max = right_max = water = 0
        
        while left < right:
            # Process shorter boundary first
            if heights[left] < heights[right]:
                if heights[left] >= left_max:
                    left_max = heights[left]
                else:
                    water += left_max - heights[left]
                left += 1
            else:
                if heights[right] >= right_max:
                    right_max = heights[right]
                else:
                    water += right_max - heights[right]
                right -= 1
        
        return water

def demonstrate_histogram_solutions():
    solver = HistogramSolver()
    
    # Demonstrate largest rectangle in histogram
    heights = [2, 1, 5, 6, 2, 3]
    area = solver.largest_rectangle_area(heights)
    print(f"Largest rectangle in histogram {heights}: {area}")
    
    # Demonstrate maximal rectangle in matrix
    matrix = [
        ["1","0","1","0","0"],
        ["1","0","1","1","1"],
        ["1","1","1","1","1"],
        ["1","0","0","1","0"]
    ]
    max_rect = solver.maximal_rectangle(matrix)
    print(f"Maximal rectangle in matrix: {max_rect}")
    
    # Demonstrate trapping rain water
    heights = [0,1,0,2,1,0,1,3,2,1,2,1]
    water = solver.trap_rain_water(heights)
    print(f"Water trapped: {water}")

# Run demonstration
demonstrate_histogram_solutions()`,
  exercises: [
    {
      prompt:
        'Implement a function that finds the minimum area rectangle that can encompass all bars in the histogram. The rectangle must fully contain all bars.',
      initialCode: `def minimum_containing_rectangle(heights):
    # Write your solution here
    return 0`,
      solution: `def minimum_containing_rectangle(heights):
    if not heights:
        return 0
    
    # Find maximum height and width of histogram
    max_height = max(heights)
    width = len(heights)
    
    # The minimum rectangle must have the width of the histogram
    # and height of the tallest bar
    return max_height * width`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Given a histogram, find the count of all possible rectangles (width × height) that can be formed using complete bars (not partial heights).',
      initialCode: `def count_all_rectangles(heights):
    # Write your solution here
    return 0`,
      solution: `def count_all_rectangles(heights):
    n = len(heights)
    count = 0
    
    # For each possible width
    for width in range(1, n + 1):
        # For each starting position
        for start in range(n - width + 1):
            # Find minimum height in this window
            min_height = min(heights[start:start + width])
            # Add all possible rectangles with this width and heights
            # from 1 to min_height
            count += min_height
    
    return count`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question:
        'Why do we add a sentinel value (0) at the end of the heights array in largest_rectangle_area?',
      options: [
        'To handle edge cases with empty arrays',
        'To force processing of remaining stack elements',
        'To improve performance',
        'To mark the end of the array',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Empty arrays are handled separately.',
        'Correct! The sentinel ensures we process any remaining rectangles in the stack.',
        'Incorrect. Performance improvement is minimal.',
        'Incorrect. Array length already marks the end.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'What is the key insight that allows the monotonic stack approach to work efficiently for histogram problems?',
      options: [
        'It sorts the heights in ascending order',
        'It maintains boundaries for potential rectangles',
        'It calculates areas for all possible combinations',
        'It reduces the search space randomly',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Sorting is not part of the solution.',
        'Correct! The stack maintains boundaries of potential rectangles implicitly.',
        "Incorrect. We don't need to calculate all combinations.",
        'Incorrect. The search space reduction is systematic, not random.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const dailyTemperaturesPatternData: LessonContent = {
  title: 'Daily Temperature Patterns Using Monotonic Stacks',
  content: `<p>
Imagine you're planning outdoor activities and want to know how long you might need to wait for warmer weather. This real-world scenario perfectly illustrates the daily temperatures problem, where we need to find how many days until a warmer temperature for each day. Let's explore how monotonic stacks provide an elegant and efficient solution to this and similar problems.
</p>

<p>
The beauty of using monotonic stacks for temperature patterns lies in how they naturally match our problem-solving instincts. When we encounter a warmer day, we naturally look back at recent colder days and update our understanding. This is exactly what a monotonic stack does programmatically.
</p>

<h3><u>Understanding Temperature Patterns</u></h3>
<p>
Temperature pattern problems typically ask us to analyze relationships between temperatures on different days. The most common variations include:
</p>
<li>Finding the next warmer day</li>
<li>Finding the next cooler day</li>
<li>Finding temperature spans (how many consecutive days maintain a temperature relationship)</li>
<li>Finding the longest streak of increasing or decreasing temperatures</li>

<h3><u>Why Monotonic Stacks Work</u></h3>
<p>
Monotonic stacks are particularly well-suited for temperature problems because:
</p>
<li>They maintain a history of temperatures in a meaningful order</li>
<li>They automatically eliminate days that can't be the answer</li>
<li>They process each temperature exactly once</li>
<li>They handle relationships between non-adjacent days effortlessly</li>

<h3><u>Core Pattern</u></h3>
<p>
The fundamental approach involves:
</p>
<li>Using a monotonic stack to store indices (not just temperatures)</li>
<li>Processing temperatures in chronological order</li>
<li>Maintaining relationships between days implicitly in the stack structure</li>
<li>Calculating day differences when we find matches</li>`,
  codeExample: `class TemperatureAnalyzer:
    """
    A comprehensive solution for temperature pattern problems using monotonic stacks.
    Each method includes detailed visualization of the stack's state to aid understanding.
    """
    
    def find_next_warmer_days(self, temperatures):
        """
        For each day, finds how many days until a warmer temperature.
        
        Uses a monotonic decreasing stack to efficiently track days that could potentially
        be waiting for a warmer temperature.
        
        Args:
            temperatures (List[int]): Daily temperatures
            
        Returns:
            List[int]: Number of days until warmer temperature for each day
            
        Example:
            >>> analyzer = TemperatureAnalyzer()
            >>> analyzer.find_next_warmer_days([73, 74, 75, 71, 69, 72, 76, 73])
            [1, 1, 4, 2, 1, 1, 0, 0]  # Shows days until warmer temperature
        """
        n = len(temperatures)
        result = [0] * n  # Initialize with 0 (no warmer day found)
        stack = []  # Stack will store indices
        states = []  # For visualization
        
        for curr_day, curr_temp in enumerate(temperatures):
            # Process days that have curr_day as their next warmer day
            while stack and temperatures[stack[-1]] < curr_temp:
                prev_day = stack.pop()
                result[prev_day] = curr_day - prev_day
            
            stack.append(curr_day)
            states.append((stack.copy(), result.copy()))  # Save state
        
        return result, states
    
    def find_next_cooler_days(self, temperatures):
        """
        For each day, finds how many days until a cooler temperature.
        
        Uses a monotonic increasing stack to track days waiting for a cooler temperature.
        
        Args:
            temperatures (List[int]): Daily temperatures
            
        Returns:
            List[int]: Number of days until cooler temperature for each day
            
        Example:
            >>> analyzer = TemperatureAnalyzer()
            >>> analyzer.find_next_cooler_days([73, 74, 75, 71, 69, 72, 76, 73])
            [3, 3, 1, 1, 0, 2, 1, 0]
        """
        n = len(temperatures)
        result = [0] * n
        stack = []
        states = []
        
        for curr_day, curr_temp in enumerate(temperatures):
            while stack and temperatures[stack[-1]] > curr_temp:
                prev_day = stack.pop()
                result[prev_day] = curr_day - prev_day
            
            stack.append(curr_day)
            states.append((stack.copy(), result.copy()))
        
        return result, states
    
    def find_temperature_span(self, temperatures):
        """
        For each day, finds the span of consecutive previous days with temperature
        less than or equal to the current day's temperature.
        
        Args:
            temperatures (List[int]): Daily temperatures
            
        Returns:
            List[int]: Span of consecutive days for each day
            
        Example:
            >>> analyzer = TemperatureAnalyzer()
            >>> analyzer.find_temperature_span([70, 68, 72, 71, 73, 70, 75])
            [1, 1, 3, 1, 5, 1, 7]  # Shows temperature spans
        """
        n = len(temperatures)
        spans = [1] * n  # Each day has minimum span of 1
        stack = []  # Stack will store (index, temperature) pairs
        states = []
        
        for curr_day, curr_temp in enumerate(temperatures):
            # Remove days with higher temperatures
            while stack and stack[-1][1] <= curr_temp:
                prev_day, _ = stack.pop()
                spans[curr_day] += spans[prev_day]
            
            stack.append((curr_day, curr_temp))
            states.append((stack.copy(), spans.copy()))
        
        return spans, states

def demonstrate_temperature_patterns():
    analyzer = TemperatureAnalyzer()
    temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
    
    # Demonstrate next warmer days
    warmer_days, warmer_states = analyzer.find_next_warmer_days(temperatures)
    print("Analyzing next warmer days:")
    print(f"Temperatures: {temperatures}")
    print(f"Days until warmer: {warmer_days}")
    
    # Show stack progression for warmer days
    print("Stack progression for warmer days:")
    for day, (stack, result) in enumerate(warmer_states):
        print(f"Day {day} (Temp: {temperatures[day]}):")
        print(f"Stack: {[(i, temperatures[i]) for i in stack]}")
        print(f"Current result: {result}")
    
    # Demonstrate next cooler days
    cooler_days, cooler_states = analyzer.find_next_cooler_days(temperatures)
    print("Analyzing next cooler days:")
    print(f"Days until cooler: {cooler_days}")
    
    # Demonstrate temperature spans
    spans, span_states = analyzer.find_temperature_span(temperatures)
    print("Analyzing temperature spans:")
    print(f"Temperature spans: {spans}")

# Run demonstration
demonstrate_temperature_patterns()`,
  exercises: [
    {
      prompt:
        'Implement a function that finds the length of the longest streak of strictly increasing temperatures.',
      initialCode: `def longest_increasing_streak(temperatures):
    # Write your solution here
    return 0`,
      solution: `def longest_increasing_streak(temperatures):
    if not temperatures:
        return 0
        
    max_streak = current_streak = 1
    
    for i in range(1, len(temperatures)):
        if temperatures[i] > temperatures[i-1]:
            current_streak += 1
            max_streak = max(max_streak, current_streak)
        else:
            current_streak = 1
    
    return max_streak`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Create a function that finds the number of days in the future having at least one day before them with a higher temperature. For example, in [73, 74, 75, 71, 69, 72, 76, 73], days with index 3, 4, 5, and 7 qualify.',
      initialCode: `def days_with_higher_before(temperatures):
    # Write your solution here
    return 0`,
      solution: `def days_with_higher_before(temperatures):
    stack = []  # Monotonic decreasing stack
    count = 0
    max_so_far = float('-inf')
    
    for temp in temperatures:
        # If we've seen a higher temperature before,
        # this day counts
        if temp < max_so_far:
            count += 1
        
        max_so_far = max(max_so_far, temp)
    
    return count`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Why do we store indices instead of temperatures in the stack for the daily temperatures problem?',
      options: [
        'To save memory',
        'To calculate day differences',
        'To handle duplicate temperatures',
        'To improve time complexity',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Storing indices uses similar memory to storing temperatures.',
        'Correct! Indices allow us to calculate how many days between temperatures.',
        'Incorrect. Duplicates can be handled with either approach.',
        'Incorrect. Time complexity remains O(n) either way.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'What determines whether we should use a monotonic increasing or decreasing stack for temperature problems?',
      options: [
        'The size of the temperature array',
        'Whether we want next warmer or cooler day',
        'The range of temperatures',
        'The number of duplicate temperatures',
      ],
      correctAnswer: 1,
      explanations: [
        "Incorrect. Array size doesn't affect the choice.",
        'Correct! We use decreasing for next warmer and increasing for next cooler.',
        "Incorrect. Temperature range doesn't affect the stack type.",
        "Incorrect. Duplicates don't determine stack type.",
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const minMaxStackData: LessonContent = {
  title: 'Min/Max Stack Implementation',
  content: `<p>
Imagine you're analyzing stock market data and need to track not just the current price, but also answer questions like "what was the lowest price we've seen?" or "what's the peak price since we started tracking?" A min/max stack lets us answer these questions instantly while maintaining all the regular stack operations.
</p>

<p>
The key insight that makes this possible is maintaining a history of minimum and maximum values as we go. Every time we add or remove an element, we keep track of what the extremes would be if we stopped at that point. Think of it like taking a snapshot of the smallest and largest values at each step in our stack's journey.
</p>

<h3><u>Core Operations</u></h3>
<p>
A min/max stack extends regular stack operations with constant-time access to extremes:
</p>
<li>push(x): Adds element x to the top</li>
<li>pop(): Removes and returns the top element</li>
<li>getMin(): Returns the smallest element currently in the stack</li>
<li>getMax(): Returns the largest element currently in the stack</li>

<h3><u>Implementation Approaches</u></h3>

<h4><b>1. Using Parallel Stacks</b></h4>
<p>
The most intuitive approach uses separate stacks for tracking minimums and maximums alongside the main stack. When adding an element:
</p>
<li>The main stack gets the value normally</li>
<li>The min stack gets the value if it's less than or equal to the current min</li>
<li>The max stack gets the value if it's greater than or equal to the current max</li>

<p>
This approach trades some extra memory for cleaner, more maintainable code. The parallel stacks create a clear separation of concerns and make the logic easier to follow.
</p>

<h4><b>2. Using Augmented Elements</b></h4>
<p>
An alternative approach wraps each element with its corresponding min and max values at that point. While this uses more memory per element, it might be more suitable when:
</p>
<li>You need to segment or split the stack</li>
<li>You want to serialize the stack with its min/max information</li>
<li>You need to support operations like "get minimum up to index n"</li>`,
  codeExample: `class MinMaxStack:
    """
    A stack implementation providing O(1) access to both minimum and maximum elements.
    Uses parallel stacks for clarity and maintainability.
    
    Each operation maintains three synchronized stacks:
    - Main stack: Holds actual values
    - Min stack: Tracks minimum value history
    - Max stack: Tracks maximum value history
    """
    
    def __init__(self):
        # Main stack holds all elements
        self.stack = []
        # Min stack maintains minimums at each step
        self.min_stack = []
        # Max stack maintains maximums at each step
        self.max_stack = []
    
    def push(self, value: int) -> None:
        """
        Adds a value to the stack while maintaining min/max information.
        O(1) time complexity.
        
        Args:
            value: The number to add to the stack
            
        Example:
            >>> stack = MinMaxStack()
            >>> stack.push(3)  # min=3, max=3
            >>> stack.push(1)  # min=1, max=3
            >>> stack.push(4)  # min=1, max=4
        """
        # Always push to main stack
        self.stack.append(value)
        
        # Update minimum - if first element or new min found
        if not self.min_stack or value <= self.min_stack[-1]:
            self.min_stack.append(value)
            
        # Update maximum - if first element or new max found
        if not self.max_stack or value >= self.max_stack[-1]:
            self.max_stack.append(value)
    
    def pop(self) -> int:
        """
        Removes and returns the top element while maintaining min/max information.
        O(1) time complexity.
        
        Returns:
            The top element from the stack
            
        Raises:
            IndexError: If stack is empty
            
        Example:
            >>> stack = MinMaxStack()
            >>> stack.push(1); stack.push(2)
            >>> stack.pop()  # Returns 2
            >>> stack.get_min()  # Returns 1
        """
        if not self.stack:
            raise IndexError("Cannot pop from empty stack")
        
        value = self.stack.pop()
        
        # If we're removing current min/max, update respective stacks
        if value == self.min_stack[-1]:
            self.min_stack.pop()
        if value == self.max_stack[-1]:
            self.max_stack.pop()
            
        return value
    
    def get_min(self) -> int:
        """
        Returns the minimum element in O(1) time.
        
        Returns:
            The smallest element currently in the stack
            
        Raises:
            IndexError: If stack is empty
            
        Example:
            >>> stack = MinMaxStack()
            >>> stack.push(3); stack.push(1); stack.push(4)
            >>> stack.get_min()  # Returns 1
        """
        if not self.min_stack:
            raise IndexError("Stack is empty")
        return self.min_stack[-1]
    
    def get_max(self) -> int:
        """
        Returns the maximum element in O(1) time.
        
        Returns:
            The largest element currently in the stack
            
        Raises:
            IndexError: If stack is empty
            
        Example:
            >>> stack = MinMaxStack()
            >>> stack.push(3); stack.push(1); stack.push(4)
            >>> stack.get_max()  # Returns 4
        """
        if not self.max_stack:
            raise IndexError("Stack is empty")
        return self.max_stack[-1]
    
    def peek(self) -> int:
        """
        Returns the top element without removing it.
        O(1) time complexity.
        
        Returns:
            The top element of the stack
            
        Raises:
            IndexError: If stack is empty
        """
        if not self.stack:
            raise IndexError("Stack is empty")
        return self.stack[-1]
    
    def is_empty(self) -> bool:
        """Returns whether the stack is empty."""
        return len(self.stack) == 0

def demonstrate_min_max_stack():
    """
    Demonstrates the behavior of MinMaxStack with real-world examples.
    """
    stack = MinMaxStack()
    
    # Simulate tracking stock prices throughout a day
    print("Tracking stock prices:")
    
    prices = [
        (100, "Opening price"),
        (105, "Morning rally"),
        (98,  "Mid-day dip"),
        (103, "Afternoon recovery"),
        (110, "Closing high")
    ]
    
    for price, description in prices:
        stack.push(price)
        print(f"Added {price} ({description})")
        print(f"Current price: \${stack.peek()}")
        print(f"Day's low: \${stack.get_min()}")
        print(f"Day's high: \${stack.get_max()}")
    
    print("Rewinding the day (popping prices):")
    while not stack.is_empty():
        price = stack.pop()
        if not stack.is_empty():
            print(f"After removing \${price}")
            print(f"Previous price: \${stack.peek()}")
            print(f"Updated low: \${stack.get_min()}")
            print(f"Updated high: \${stack.get_max()}")
        else:
            print("Reached start of day")

# Run demonstration
demonstrate_min_max_stack()`,
  exercises: [
    {
      prompt:
        'Implement a method in MinMaxStack that returns the current range (difference between maximum and minimum) in O(1) time.',
      initialCode: `def get_range(self) -> int:
    # Write your solution here
    return 0`,
      solution: `def get_range(self) -> int:
    """
    Returns the range (max - min) of elements in O(1) time.
    
    Returns:
        The difference between the largest and smallest elements
        
    Raises:
        IndexError: If stack is empty
        
    Example:
        >>> stack = MinMaxStack()
        >>> stack.push(3); stack.push(7); stack.push(2)
        >>> stack.get_range()  # Returns 5 (7 - 2)
    """
    if self.is_empty():
        raise IndexError("Stack is empty")
    return self.get_max() - self.get_min()`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt:
        'Implement the augmented element approach for MinMaxStack where each stack element stores its corresponding min and max values.',
      initialCode: `class AugmentedMinMaxStack:
    def __init__(self):
        # Write your solution here
        pass`,
      solution: `class AugmentedMinMaxStack:
    """
    MinMaxStack implementation using augmented elements.
    Each stack element is a tuple of (value, min_at_point, max_at_point).
    """
    def __init__(self):
        self.stack = []
    
    def push(self, value: int) -> None:
        current_min = min(value, self.get_min()) if self.stack else value
        current_max = max(value, self.get_max()) if self.stack else value
        self.stack.append((value, current_min, current_max))
    
    def pop(self) -> int:
        if not self.stack:
            raise IndexError("Stack is empty")
        return self.stack.pop()[0]
    
    def get_min(self) -> int:
        if not self.stack:
            raise IndexError("Stack is empty")
        return self.stack[-1][1]
    
    def get_max(self) -> int:
        if not self.stack:
            raise IndexError("Stack is empty")
        return self.stack[-1][2]`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Why do we need separate min and max stacks instead of just tracking current min/max values?',
      options: [
        'To improve memory efficiency',
        'To handle duplicate values',
        'To maintain history when popping elements',
        'To reduce time complexity',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. The separate stacks actually use more memory.',
        'Incorrect. Duplicates can be handled without separate stacks.',
        'Correct! The stacks maintain the history of min/max values, which is essential when elements are popped.',
        'Incorrect. Time complexity would be O(1) either way.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'When implementing a min/max stack, why do we push to the min_stack when the new value is less than or equal to (≤) the current min, rather than strictly less than (<)?',
      options: [
        'To improve performance',
        'To handle empty stack cases',
        'To handle duplicate values correctly',
        'To reduce memory usage',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Performance is not affected by this choice.',
        'Incorrect. Empty stack cases are handled separately.',
        'Correct! Using ≤ ensures we maintain correct minimum values when popping duplicate values.',
        'Incorrect. This might actually use more memory in some cases.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const twoStacksData: LessonContent = {
  title: 'Solving Problems with Two Stacks',
  content: `<p>
Imagine you're browsing the internet and using the back and forward buttons. The back button lets you revisit previous pages in the order opposite to how you viewed them, while the forward button reverses your back button clicks. This behavior perfectly illustrates how two stacks can work together - one stack handling the "back" history and another handling the "forward" history.
</p>

<p>
We often discover that a single stack isn't enough to solve certain problems efficiently. By using two stacks in coordination, we can implement complex behaviors that would be difficult or impossible with just one stack. The key is understanding how to make the stacks work together, each playing a specific role in the solution.
</p>

<h3><u>Why Two Stacks?</u></h3>
<p>
Two stacks working together can achieve several powerful capabilities:
</p>
<li>Converting LIFO (stack) behavior into FIFO (queue) behavior</li>
<li>Implementing undo/redo functionality</li>
<li>Sorting elements using additional space</li>
<li>Processing expressions with multiple types of data</li>

<h3><u>Common Patterns</u></h3>
<p>
When working with two stacks, we typically see these patterns:
</p>
<li>Using one stack as temporary storage while operating on the other</li>
<li>Dividing responsibilities between the stacks (e.g., one for numbers, one for operators)</li>
<li>Using stacks to reverse elements at different stages of processing</li>
<li>Maintaining two different views of the same data</li>

<h3><u>Key Implementation Considerations</u></h3>
<p>
When implementing two-stack solutions, we need to consider:
</p>
<li>When to transfer elements between stacks</li>
<li>How to maintain consistency between the stacks</li>
<li>How to handle edge cases when one or both stacks are empty</li>
<li>How to optimize operations to minimize element transfers</li>`,
  codeExample: `class TwoStackQueue:
    """
    Implements a queue using two stacks. This demonstrates how two stacks
    working together can achieve FIFO (First-In-First-Out) behavior.
    
    The key insight is that transferring elements between stacks reverses
    their order, allowing us to achieve queue-like behavior.
    
    Time Complexity:
    - Enqueue: O(1)
    - Dequeue: Amortized O(1), worst case O(n)
    """
    
    def __init__(self):
        self.enqueue_stack = []  # Stack for new elements
        self.dequeue_stack = []  # Stack for removing elements
    
    def enqueue(self, value):
        """
        Adds a value to the back of the queue.
        Always pushes to enqueue_stack, maintaining O(1) time complexity.
        
        Example:
            >>> queue = TwoStackQueue()
            >>> queue.enqueue(1)
            >>> queue.enqueue(2)
            >>> queue.enqueue(3)  # Queue now contains: 1, 2, 3
        """
        self.enqueue_stack.append(value)
    
    def dequeue(self):
        """
        Removes and returns the first element in the queue.
        
        If dequeue_stack is empty, transfers all elements from enqueue_stack.
        This reverses their order, putting the oldest element on top.
        
        Example:
            >>> queue = TwoStackQueue()
            >>> queue.enqueue(1); queue.enqueue(2)
            >>> queue.dequeue()  # Returns 1
            >>> queue.dequeue()  # Returns 2
        """
        # If dequeue stack is empty, transfer elements
        if not self.dequeue_stack:
            if not self.enqueue_stack:
                raise IndexError("Queue is empty")
            
            # Transfer all elements, reversing their order
            while self.enqueue_stack:
                self.dequeue_stack.append(self.enqueue_stack.pop())
        
        return self.dequeue_stack.pop()

class BrowserHistory:
    """
    Implements browser-like back/forward navigation using two stacks.
    One stack maintains backward history, the other forward history.
    
    Time Complexity: All operations O(1)
    """
    
    def __init__(self, homepage):
        self.back_stack = []  # Stack for back history
        self.forward_stack = []  # Stack for forward history
        self.current_page = homepage
    
    def visit(self, url):
        """
        Visits a new page, clearing forward history.
        
        Example:
            >>> browser = BrowserHistory("google.com")
            >>> browser.visit("youtube.com")
            >>> browser.visit("github.com")
        """
        # Save current page to back history
        self.back_stack.append(self.current_page)
        # Set new current page
        self.current_page = url
        # Clear forward history
        self.forward_stack = []
    
    def back(self):
        """
        Moves backward one page in history.
        
        Example:
            >>> browser = BrowserHistory("google.com")
            >>> browser.visit("youtube.com")
            >>> browser.back()  # Returns to google.com
        """
        if not self.back_stack:
            return self.current_page
        
        # Save current page to forward history
        self.forward_stack.append(self.current_page)
        # Go to previous page
        self.current_page = self.back_stack.pop()
        return self.current_page
    
    def forward(self):
        """
        Moves forward one page in history.
        
        Example:
            >>> browser = BrowserHistory("google.com")
            >>> browser.visit("youtube.com")
            >>> browser.back()
            >>> browser.forward()  # Returns to youtube.com
        """
        if not self.forward_stack:
            return self.current_page
        
        # Save current page to back history
        self.back_stack.append(self.current_page)
        # Go to next page
        self.current_page = self.forward_stack.pop()
        return self.current_page

def demonstrate_two_stacks():
    print("Demonstrating Queue Implementation with Two Stacks:")
    queue = TwoStackQueue()
    
    # Enqueue demonstration
    print("Enqueuing elements: 1, 2, 3")
    for i in range(1, 4):
        queue.enqueue(i)
        print(f"Enqueued: {i}")
        print(f"Enqueue stack: {queue.enqueue_stack}")
        print(f"Dequeue stack: {queue.dequeue_stack}")
    
    # Dequeue demonstration
    print("Dequeuing elements:")
    for _ in range(3):
        value = queue.dequeue()
        print(f"Dequeued: {value}")
        print(f"Enqueue stack: {queue.enqueue_stack}")
        print(f"Dequeue stack: {queue.dequeue_stack}")
    
    print("Demonstrating Browser History:")
    browser = BrowserHistory("google.com")
    
    # Simulate browsing
    pages = ["youtube.com", "github.com", "stackoverflow.com"]
    print("Visiting pages:")
    for page in pages:
        browser.visit(page)
        print(f"Visited: {page}")
        print(f"Back stack: {browser.back_stack}")
        print(f"Forward stack: {browser.forward_stack}")
    
    # Demonstrate navigation
    print("Navigating back:")
    for _ in range(2):
        page = browser.back()
        print(f"Current page: {page}")
        print(f"Back stack: {browser.back_stack}")
        print(f"Forward stack: {browser.forward_stack}")

# Run demonstration
demonstrate_two_stacks()`,
  exercises: [
    {
      prompt:
        'Implement a stack sorting method using an additional stack. The sorted stack should have the smallest elements on top.',
      initialCode: `def sort_stack(stack):
    # Write your solution here
    # Return the sorted stack
    return []`,
      solution: `def sort_stack(stack):
    """
    Sorts a stack in ascending order (smallest elements on top) using
    an additional stack as temporary storage.
    
    Args:
        stack: List representing the stack to sort
        
    Returns:
        The sorted stack
        
    Example:
        >>> sort_stack([3, 1, 4, 2])
        [1, 2, 3, 4]  # Top to bottom
    """
    temp_stack = []
    
    while stack:
        # Remove an element from the input stack
        current = stack.pop()
        
        # Move elements from temp_stack back to input stack
        # until we find the right position for current
        while temp_stack and temp_stack[-1] > current:
            stack.append(temp_stack.pop())
        
        # Place current in its sorted position
        temp_stack.append(current)
    
    # Transfer elements back to original stack (will be in ascending order)
    while temp_stack:
        stack.append(temp_stack.pop())
        
    return stack`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Create a text editor history class that supports typing characters and undo/redo operations using two stacks.',
      initialCode: `class TextEditor:
    def __init__(self):
        # Write your solution here
        pass`,
      solution: `class TextEditor:
    """
    Text editor with undo/redo functionality using two stacks.
    
    Example:
        >>> editor = TextEditor()
        >>> editor.type('h')
        >>> editor.type('i')  # Text is "hi"
        >>> editor.undo()     # Text is "h"
        >>> editor.redo()     # Text is "hi"
    """
    def __init__(self):
        self.text = ""
        self.undo_stack = []  # Stores previous states
        self.redo_stack = []  # Stores undone states
    
    def type(self, char):
        # Save current state for undo
        self.undo_stack.append(self.text)
        # Add new character
        self.text += char
        # Clear redo history after new action
        self.redo_stack = []
    
    def undo(self):
        if not self.undo_stack:
            return
        
        # Save current state for redo
        self.redo_stack.append(self.text)
        # Restore previous state
        self.text = self.undo_stack.pop()
        
    def redo(self):
        if not self.redo_stack:
            return
            
        # Save current state for undo
        self.undo_stack.append(self.text)
        # Restore next state
        self.text = self.redo_stack.pop()
    
    def get_text(self):
        return self.text`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question:
        'In the two-stack queue implementation, why do we only transfer elements when the dequeue stack is empty?',
      options: [
        'To save memory',
        'To maintain FIFO order',
        'To amortize the transfer cost',
        'To handle edge cases',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Memory usage is the same either way.',
        'Incorrect. FIFO order would be maintained even with frequent transfers.',
        'Correct! By transferring elements only when necessary, we achieve amortized O(1) time complexity for dequeue operations.',
        'Incorrect. Edge cases are handled regardless of transfer timing.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'What is the key insight that makes the browser history implementation work efficiently?',
      options: [
        'Using recursion',
        'Maintaining two separate histories',
        'Sorting the URLs',
        'Caching the pages',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. The implementation is iterative, not recursive.',
        'Correct! Separate back and forward stacks naturally maintain the correct order for navigation.',
        "Incorrect. URLs don't need to be sorted for navigation.",
        'Incorrect. The implementation focuses on navigation order, not page content.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const stackSequencesData: LessonContent = {
  title: 'Stack Sequences and Permutations',
  content: `<p>
Imagine you're managing a railway station where trains arrive on one track and need to depart on another. Between these tracks, there's a side track that can temporarily hold trains, but it operates like a stack - trains must leave in the opposite order they entered. This classic problem perfectly illustrates the concept of stack sequences: given a sequence of arrivals, what departure sequences are possible?
</p>

<p>
Understanding stack sequences helps us reason about what arrangements are possible when we process elements through a stack. This knowledge is crucial for validating whether a given sequence could have been generated using stack operations and for understanding the limitations of stack-based processing.
</p>

<h3><u>Understanding Stack Permutations</u></h3>
<p>
When we have a sequence of n elements that pass through a stack, not all n! possible permutations can be achieved. The stack's LIFO (Last-In-First-Out) property creates specific restrictions on what orderings are possible. For example, if we push elements 1, 2, 3 onto a stack, we can never produce the output sequence 3, 1, 2 because once 3 is on top, we must remove it before accessing 1 or 2.
</p>

<h3><u>Key Insights</u></h3>
<p>
Several fundamental principles govern stack sequences:
</p>
<li>Once an element is popped, all elements pushed after it must be popped before any elements pushed before it</li>
<li>The relative order of elements in the input sequence creates constraints on possible output sequences</li>
<li>We can validate a sequence by simulating the stack operations that would be needed to produce it</li>

<h3><u>Pattern Recognition</u></h3>
<p>
A sequence is not a valid stack permutation if it requires "reaching through" the stack to access elements. In mathematical terms, it must avoid the pattern 231 (where we need to output the middle number last among any three numbers maintaining their relative input order).
</p>`,
  codeExample: `class StackSequenceValidator:
    """
    A comprehensive solution for validating and analyzing stack sequences.
    Includes methods for checking validity and generating possible sequences.
    """
    
    def is_valid_sequence(self, push_sequence, pop_sequence):
        """
        Determines if a pop sequence could be generated from a push sequence
        using a stack.
        
        Args:
            push_sequence: List of elements in push order
            pop_sequence: List of elements in pop order to validate
            
        Returns:
            bool: True if sequence is valid, False otherwise
            
        Example:
            >>> validator = StackSequenceValidator()
            >>> validator.is_valid_sequence([1, 2, 3], [2, 1, 3])
            True  # Can be achieved by: push(1), push(2), pop(2), pop(1), push(3), pop(3)
        """
        if len(push_sequence) != len(pop_sequence):
            return False
            
        stack = []
        push_idx = 0
        
        # Try to generate pop_sequence using stack operations
        for value in pop_sequence:
            # Keep pushing until we find our target value
            while (not stack or stack[-1] != value) and push_idx < len(push_sequence):
                stack.append(push_sequence[push_idx])
                push_idx += 1
            
            # If we found our value on top of stack, pop it
            if stack and stack[-1] == value:
                stack.pop()
            else:
                return False
        
        return True
    
    def generate_valid_sequences(self, sequence):
        """
        Generates all valid stack sequences for a given input sequence.
        
        Args:
            sequence: Input sequence of elements
            
        Returns:
            List of all possible valid output sequences
            
        Example:
            >>> validator = StackSequenceValidator()
            >>> validator.generate_valid_sequences([1, 2])
            [[1, 2], [2, 1]]  # All possible valid outputs
        """
        def backtrack(pushed, popped, stack, current, result):
            if len(current) == len(sequence):
                result.append(current[:])
                return
            
            # Try pop if stack is not empty
            if stack:
                value = stack.pop()
                current.append(value)
                backtrack(pushed, popped + 1, stack, current, result)
                current.pop()
                stack.append(value)
            
            # Try push if elements remain
            if pushed < len(sequence):
                stack.append(sequence[pushed])
                backtrack(pushed + 1, popped, stack, current, result)
                stack.pop()
        
        result = []
        backtrack(0, 0, [], [], result)
        return result
    
    def explain_sequence(self, push_sequence, pop_sequence):
        """
        Provides a step-by-step explanation of how to achieve a valid sequence.
        
        Args:
            push_sequence: Input sequence
            pop_sequence: Desired output sequence
            
        Returns:
            List of operation steps if sequence is valid, None otherwise
            
        Example:
            >>> validator = StackSequenceValidator()
            >>> validator.explain_sequence([1, 2, 3], [2, 1, 3])
            ['Push 1', 'Push 2', 'Pop 2', 'Pop 1', 'Push 3', 'Pop 3']
        """
        if not self.is_valid_sequence(push_sequence, pop_sequence):
            return None
            
        steps = []
        stack = []
        push_idx = 0
        
        for value in pop_sequence:
            while (not stack or stack[-1] != value) and push_idx < len(push_sequence):
                steps.append(f"Push {push_sequence[push_idx]}")
                stack.append(push_sequence[push_idx])
                push_idx += 1
                
            steps.append(f"Pop {value}")
            stack.pop()
            
        return steps

def demonstrate_stack_sequences():
    validator = StackSequenceValidator()
    
    # Demonstrate sequence validation
    push_seq = [1, 2, 3]
    valid_pop_seq = [2, 1, 3]
    invalid_pop_seq = [3, 1, 2]
    
    print("Stack Sequence Validation:")
    print(f"Push sequence: {push_seq}")
    print(f"Testing valid sequence {valid_pop_seq}")
    if validator.is_valid_sequence(push_seq, valid_pop_seq):
        steps = validator.explain_sequence(push_seq, valid_pop_seq)
        print("Valid! Steps to achieve this sequence:")
        for step in steps:
            print(f"  {step}")
    
    print(f"Testing invalid sequence {invalid_pop_seq}")
    if not validator.is_valid_sequence(push_seq, invalid_pop_seq):
        print("Invalid: This sequence cannot be achieved with a stack")
    
    # Demonstrate sequence generation
    small_seq = [1, 2]
    print(f"Generating all valid sequences for {small_seq}:")
    valid_sequences = validator.generate_valid_sequences(small_seq)
    for seq in valid_sequences:
        print(f"  {seq}")
        if seq != valid_sequences[-1]:  # If not last sequence
            steps = validator.explain_sequence(small_seq, seq)
            print("  Steps:")
            for step in steps:
                print(f"    {step}")

# Run demonstration
demonstrate_stack_sequences()`,
  exercises: [
    {
      prompt:
        'Implement a function that counts the number of valid stack sequences possible for a given input sequence length n. For example, n=2 has 2 valid sequences, n=3 has 5 valid sequences.',
      initialCode: `def count_valid_sequences(n):
    # Write your solution here
    return 0`,
      solution: `def count_valid_sequences(n):
    """
    Counts the number of valid stack sequences for length n.
    Uses Catalan numbers: C(n) = (1/(n+1)) * (2n choose n)
    
    Args:
        n: Length of sequence
        
    Returns:
        Number of possible valid sequences
    """
    def catalan(n):
        if n <= 1:
            return 1
            
        # Calculate (2n choose n) / (n + 1)
        result = 1
        for i in range(n):
            result *= (2 * n - i)
            result //= (i + 1)
        result //= (n + 1)
        
        return result
    
    return catalan(n)`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt:
        'Create a function that finds the lexicographically smallest valid stack sequence that can be generated from a given input sequence.',
      initialCode: `def find_smallest_valid_sequence(sequence):
    # Write your solution here
    return []`,
      solution: `def find_smallest_valid_sequence(sequence):
    """
    Finds the lexicographically smallest valid stack sequence.
    
    Args:
        sequence: Input sequence of elements
        
    Returns:
        Smallest valid sequence possible
        
    Example:
        >>> find_smallest_valid_sequence([1, 2, 3])
        [1, 2, 3]  # The original sequence is the smallest
    """
    stack = []
    result = []
    next_push = 0
    sequence = list(sequence)  # Make a copy
    
    while result and next_push < len(sequence):
        # If we can push and it would give us a smaller next element
        while next_push < len(sequence) and (
            not stack or 
            (stack[-1] > sequence[next_push] and 
             sequence[next_push] < min(sequence[next_push+1:], default=float('inf')))
        ):
            stack.append(sequence[next_push])
            next_push += 1
            
        # Pop smallest available element
        if stack:
            result.append(stack.pop())
    
    # Empty the stack
    while stack:
        result.append(stack.pop())
        
    return result`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question:
        'Why is the sequence [3, 1, 2] impossible to achieve by pushing [1, 2, 3] through a stack?',
      options: [
        'The stack is not large enough',
        'We cannot access 1 and 2 after pushing 3',
        'The numbers must remain in order',
        'We need two stacks to achieve this',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Stack size is not the issue here.',
        'Correct! Once 3 is pushed, it must be popped before we can access 1 or 2, making this sequence impossible.',
        'Incorrect. Valid stack sequences can reorder elements.',
        'Incorrect. No number of stacks can produce this sequence with these constraints.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'What determines whether a sequence can be generated using stack operations?',
      options: [
        'The length of the sequence',
        'The presence of ascending numbers',
        'The absence of pattern 231',
        'The number of unique elements',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Length alone does not determine validity.',
        'Incorrect. Valid sequences can be ascending or descending.',
        'Correct! The pattern 231 (needing to output the middle number last among three numbers) is impossible with stack operations.',
        'Incorrect. Uniqueness of elements is not a factor.',
      ],
      difficulty: Difficulty.Advanced,
    },
  ],
};

const treeTraversalData: LessonContent = {
  title: 'Iterative Tree Traversal Using Stacks',
  content: `<p>
Imagine you're exploring a vast family tree, trying to document everyone's stories. You could do this recursively, diving deep into each branch before returning, but what if you needed to pause and resume your exploration? This is where iterative traversal using stacks becomes invaluable - it gives us explicit control over the exploration process.
</p>

<p>
Converting recursive tree traversals to iterative versions is a fascinating journey that deepens our understanding of both trees and stacks. The recursive versions are elegant in their simplicity, but by converting them to iterative form, we gain insights into how recursion works under the hood and how the computer actually manages these operations.
</p>

<h3><u>Understanding Tree Traversal Orders</u></h3>
<p>
Before diving into the iterative implementations, let's understand what each traversal means:
</p>

<h4><b>Inorder Traversal (Left → Root → Right)</b></h4>
<p>
Think of this as reading a mathematical expression - we want to process the left subtree first, then the current node, then the right subtree. For a binary search tree, this gives us elements in sorted order. The key insight for iterative implementation is that we need to go as far left as possible while remembering the nodes we've seen using a stack.
</p>

<h4><b>Preorder Traversal (Root → Left → Right)</b></h4>
<p>
Imagine creating a copy of the tree or serializing it - we process the current node before its children. This is perhaps the most intuitive to implement iteratively because we can process nodes immediately upon encountering them.
</p>

<h4><b>Postorder Traversal (Left → Right → Root)</b></h4>
<p>
Think of this as computing sizes of directories - we need to process all subdirectories before we can know the size of the current directory. This is the trickiest to implement iteratively because we need to know when we've finished processing both children before processing the current node.
</p>

<h3><u>Key Insights for Iterative Implementation</u></h3>
<p>
The stack in our iterative versions serves two crucial purposes:
</p>
<li>It keeps track of nodes we've seen but haven't fully processed yet</li>
<li>It maintains the path back to ancestor nodes we'll need to process later</li>
<li>It mimics the system's call stack that would be used in the recursive version</li>

<h3><u>Common Patterns</u></h3>
<p>
When implementing iterative traversals, look for these patterns:
</p>
<li>Using a stack to remember nodes we'll need to return to</li>
<li>Maintaining state about whether we've seen a node's children</li>
<li>Using null values or flags to mark when to process nodes</li>`,
  codeExample: `class TreeNode:
    """
    Basic tree node structure with helper method for creating test trees.
    """
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
    
    @staticmethod
    def create_sample_tree():
        """Creates a sample tree for testing traversals."""
        root = TreeNode(1)
        root.left = TreeNode(2)
        root.right = TreeNode(3)
        root.left.left = TreeNode(4)
        root.left.right = TreeNode(5)
        return root

class TreeTraversal:
    """
    Comprehensive implementation of iterative tree traversals.
    Each method includes detailed explanation of the algorithm's steps.
    """
    
    def inorder_iterative(self, root):
        """
        Performs inorder traversal iteratively using a stack.
        
        The key insight is to go as far left as possible, then process nodes
        as we pop them off the stack, using the stack to remember the path back.
        
        Args:
            root: Root node of the binary tree
            
        Returns:
            List of node values in inorder sequence
            
        Example:
            >>> traversal = TreeTraversal()
            >>> root = TreeNode.create_sample_tree()
            >>> traversal.inorder_iterative(root)
            [4, 2, 5, 1, 3]  # Left → Root → Right
        """
        result = []
        stack = []
        current = root
        
        while current or stack:
            # Go as far left as possible
            while current:
                stack.append(current)
                current = current.left
            
            # Process current node and go right
            current = stack.pop()
            result.append(current.val)
            current = current.right
        
        return result
    
    def preorder_iterative(self, root):
        """
        Performs preorder traversal iteratively using a stack.
        
        Preorder is naturally suited for iterative implementation
        because we process nodes as soon as we see them.
        
        Args:
            root: Root node of the binary tree
            
        Returns:
            List of node values in preorder sequence
            
        Example:
            >>> traversal = TreeTraversal()
            >>> root = TreeNode.create_sample_tree()
            >>> traversal.preorder_iterative(root)
            [1, 2, 4, 5, 3]  # Root → Left → Right
        """
        if not root:
            return []
            
        result = []
        stack = [root]
        
        while stack:
            # Process current node immediately
            current = stack.pop()
            result.append(current.val)
            
            # Push right child first (so left is processed first)
            if current.right:
                stack.append(current.right)
            if current.left:
                stack.append(current.left)
        
        return result
    
    def postorder_iterative(self, root):
        """
        Performs postorder traversal iteratively using a stack.
        
        This is the most complex traversal to implement iteratively
        because we need to track when we've finished processing children.
        
        Args:
            root: Root node of the binary tree
             
        Returns:
            List of node values in postorder sequence
            
        Example:
            >>> traversal = TreeTraversal()
            >>> root = TreeNode.create_sample_tree()
            >>> traversal.postorder_iterative(root)
            [4, 5, 2, 3, 1]  # Left → Right → Root
        """
        if not root:
            return []
            
        result = []
        stack = []
        current = root
        last_processed = None
        
        while current or stack:
            # Go as far left as possible
            while current:
                stack.append(current)
                current = current.left
            
            # Peek at the top node
            current = stack[-1]
            
            # If right child exists and hasn't been processed,
            # process right subtree
            if current.right and current.right != last_processed:
                current = current.right
            else:
                # Process current node
                result.append(current.val)
                last_processed = stack.pop()
                current = None
        
        return result
    
    def _print_traversal_state(self, method, values, stack):
        """Helper method to visualize traversal state."""
        stack_vals = [node.val for node in stack]
        print(f"{method} Traversal State:")
        print(f"Values processed: {values}")
        print(f"Stack: {stack_vals}")

def demonstrate_traversals():
    """
    Demonstrates all three traversal methods with detailed state information.
    """
    tree = TreeNode.create_sample_tree()
    traversal = TreeTraversal()
    
    print("Tree Structure:")
    print("     1")
    print("   /   \\")
    print("  2     3")
    print(" / \\")
    print("4   5")
    
    # Demonstrate each traversal
    methods = [
        ('Inorder', traversal.inorder_iterative),
        ('Preorder', traversal.preorder_iterative),
        ('Postorder', traversal.postorder_iterative)
    ]
    
    for name, method in methods:
        result = method(tree)
        print(f"{name} Traversal Result: {result}")
        print(f"Expected visiting order: {name}")
        print("  - Inorder:   Left → Root → Right")
        print("  - Preorder:  Root → Left → Right")
        print("  - Postorder: Left → Right → Root")

# Run demonstration
demonstrate_traversals()`,
  exercises: [
    {
      prompt:
        'Implement a function that performs level-order traversal using a single stack (instead of the usual queue approach).',
      initialCode: `def level_order_with_stack(root):
    # Write your solution here
    return []`,
      solution: `def level_order_with_stack(root):
    """
    Performs level-order traversal using a stack by reversing levels.
    
    The trick is to build each level in reverse order first, then
    reverse it before adding to the result.
    
    Args:
        root: Root node of the binary tree
        
    Returns:
        List of lists, each inner list containing one level's values
    """
    if not root:
        return []
        
    result = []
    current_level = [root]
    
    while current_level:
        # Process current level
        values = [node.val for node in current_level]
        result.append(values)
        
        # Build next level in reverse order
        next_level = []
        for node in reversed(current_level):
            if node.right:
                next_level.append(node.right)
            if node.left:
                next_level.append(node.left)
        
        current_level = next_level
    
    return result`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt:
        'Implement a method that returns true if a binary tree is symmetric around its center using an iterative approach with stack(s).',
      initialCode: `def is_symmetric(root):
    # Write your solution here
    return False`,
      solution: `def is_symmetric(root):
    """
    Checks if a binary tree is symmetric using two stacks.
    
    We traverse the left and right subtrees simultaneously,
    comparing corresponding nodes.
    
    Args:
        root: Root node of the binary tree
        
    Returns:
        bool: True if tree is symmetric, False otherwise
    """
    if not root:
        return True
        
    stack_left = [root.left]
    stack_right = [root.right]
    
    while stack_left and stack_right:
        left = stack_left.pop()
        right = stack_right.pop()
        
        if not left and not right:
            continue
        if not left or not right:
            return False
        if left.val != right.val:
            return False
            
        stack_left.extend([left.left, left.right])
        stack_right.extend([right.right, right.left])
    
    return not stack_left and not stack_right`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Why is postorder traversal the most challenging to implement iteratively?',
      options: [
        'It requires more memory',
        'We need to track when children are processed',
        'The order is more complex',
        'It requires multiple stacks',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Memory usage is similar for all traversals.',
        'Correct! We need to know when both children have been processed before processing the parent.',
        'Incorrect. The order itself is not more complex than other traversals.',
        'Incorrect. A single stack is sufficient for all traversals.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'In the iterative inorder traversal, why do we go as far left as possible before processing nodes?',
      options: [
        'To optimize memory usage',
        'To match recursive behavior',
        'To ensure correct ordering',
        'To improve performance',
      ],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Memory usage is not the primary concern.',
        'Incorrect. While it matches recursive behavior, this is not the main reason.',
        'Correct! Inorder requires processing all left children before the current node.',
        'Incorrect. Performance is similar regardless of processing order.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const expressionTreeData: LessonContent = {
  title: 'Expression Tree Building and Evaluation',
  content: `<p>
Think about how we solve mathematical expressions like "(3 + 4) * (5 - 2)". We naturally break them down into smaller parts, solve those parts, and combine the results. An expression tree helps us formalize this process, turning our expression into a tree structure where operators are internal nodes and numbers are leaves. This representation makes both the structure and evaluation order crystal clear.
</p>

<p>
Expression trees are particularly fascinating because they bridge the gap between how we write expressions (infix notation) and how computers evaluate them. When we build and evaluate these trees using stacks, we're implementing the same process that compilers use to transform and compute our mathematical expressions.
</p>

<h3><u>Understanding Expression Trees</u></h3>
<p>
An expression tree has several key properties that make it powerful:
</p>
<li>Leaf nodes contain operands (numbers)</li>
<li>Internal nodes contain operators</li>
<li>The structure of the tree enforces operator precedence</li>
<li>Evaluating the tree automatically follows the correct order of operations</li>

<h3><u>Building Expression Trees</u></h3>
<p>
We can build expression trees from both postfix and infix expressions. The postfix approach is more straightforward because the expression is already in the right order for evaluation. For infix expressions, we need to handle operator precedence and parentheses carefully. The process typically involves:
</p>
<li>Converting infix to postfix notation (if starting with infix)</li>
<li>Using a stack to build the tree from the postfix expression</li>
<li>Connecting nodes in the correct order based on operator precedence</li>

<h3><u>Evaluating Expression Trees</u></h3>
<p>
The evaluation process can be done recursively or iteratively. The iterative approach using a stack is particularly interesting because it shows how we can systematically evaluate complex expressions without recursion. When evaluating:
</p>
<li>We need to evaluate child subtrees before their parent nodes</li>
<li>We can use a stack to keep track of intermediate results</li>
<li>The evaluation follows a postorder traversal pattern</li>`,
  codeExample: `class ExpressionNode:
    """
    Node class for expression trees, handling both operators and operands.
    Includes helper methods for evaluation and string representation.
    """
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
        
    def is_operator(self):
        """Checks if node contains an operator."""
        return self.value in {'+', '-', '*', '/'}

class ExpressionTree:
    """
    Comprehensive implementation of expression tree operations.
    Includes building from postfix notation and evaluation.
    """
    
    def __init__(self):
        self.root = None
        self.operators = {
            '+': (lambda x, y: x + y, 1),
            '-': (lambda x, y: x - y, 1),
            '*': (lambda x, y: x * y, 2),
            '/': (lambda x, y: x / y, 2)
        }
    
    def build_from_postfix(self, expression):
        """
        Builds expression tree from postfix notation.
        
        Args:
            expression: List of tokens in postfix notation
            
        Example:
            >>> tree = ExpressionTree()
            >>> tree.build_from_postfix(['3', '4', '+', '5', '*'])
            Creates tree for (3 + 4) * 5
        """
        stack = []
        
        for token in expression:
            node = ExpressionNode(token)
            
            if token in self.operators:
                # Operator node: pop two operands and attach
                node.right = stack.pop()
                node.left = stack.pop()
                stack.append(node)
            else:
                # Operand node: just push to stack
                stack.append(node)
        
        self.root = stack.pop() if stack else None
    
    def evaluate_iterative(self):
        """
        Evaluates expression tree iteratively using a stack.
        
        Returns:
            Numerical result of evaluation
            
        Example:
            >>> tree = ExpressionTree()
            >>> tree.build_from_postfix(['3', '4', '+', '5', '*'])
            >>> tree.evaluate_iterative()
            35  # (3 + 4) * 5 = 35
        """
        if not self.root:
            return None
            
        stack = []
        current = self.root
        last_visited = None
        result_stack = []
        
        while current or stack:
            # Push all left children onto stack
            while current:
                stack.append(current)
                current = current.left
            
            # Peek at top node
            current = stack[-1]
            
            # If right child exists and hasn't been visited,
            # process right subtree
            if current.right and current.right != last_visited:
                current = current.right
            else:
                current = stack.pop()
                # Process current node
                if current.is_operator():
                    right = float(result_stack.pop())
                    left = float(result_stack.pop())
                    operation = self.operators[current.value][0]
                    result_stack.append(operation(left, right))
                else:
                    result_stack.append(current.value)
                
                last_visited = current
                current = None
        
        return float(result_stack[0])
    
    def infix_to_postfix(self, expression):
        """
        Converts infix expression to postfix notation.
        
        Args:
            expression: List of tokens in infix notation
            
        Returns:
            List of tokens in postfix notation
            
        Example:
            >>> tree = ExpressionTree()
            >>> tree.infix_to_postfix(['(', '3', '+', '4', ')', '*', '5'])
            ['3', '4', '+', '5', '*']
        """
        precedence = {op: level for op, (_, level) in self.operators.items()}
        stack = []
        output = []
        
        for token in expression:
            if token in self.operators:
                # Process operators based on precedence
                while (stack and stack[-1] != '(' and 
                       precedence[stack[-1]] >= precedence[token]):
                    output.append(stack.pop())
                stack.append(token)
            elif token == '(':
                stack.append(token)
            elif token == ')':
                # Process everything until matching parenthesis
                while stack and stack[-1] != '(':
                    output.append(stack.pop())
                if stack:
                    stack.pop()  # Remove '('
            else:
                # Operand: add to output
                output.append(token)
        
        # Add remaining operators
        while stack:
            output.append(stack.pop())
            
        return output
    
    def print_tree(self, node=None, level=0):
        """Prints visual representation of the tree."""
        if node is None:
            node = self.root
        if node:
            self.print_tree(node.right, level + 1)
            print('  ' * level + str(node.value))
            self.print_tree(node.left, level + 1)

def demonstrate_expression_tree():
    """
    Demonstrates expression tree construction and evaluation with detailed steps.
    """
    tree = ExpressionTree()
    
    # Example 1: Simple expression
    print("Example 1: 3 + 4 * 5")
    infix = ['3', '+', '4', '*', '5']
    postfix = tree.infix_to_postfix(infix)
    print(f"Infix: {' '.join(infix)}")
    print(f"Postfix: {' '.join(postfix)}")
    
    tree.build_from_postfix(postfix)
    print("Expression Tree:")
    tree.print_tree()
    
    result = tree.evaluate_iterative()
    print(f"Result: {result}")
    
    # Example 2: Expression with parentheses
    print("Example 2: (3 + 4) * 5")
    infix = ['(', '3', '+', '4', ')', '*', '5']
    postfix = tree.infix_to_postfix(infix)
    print(f"Infix: {' '.join(infix)}")
    print(f"Postfix: {' '.join(postfix)}")
    
    tree.build_from_postfix(postfix)
    print("Expression Tree:")
    tree.print_tree()
    
    result = tree.evaluate_iterative()
    print(f"Result: {result}")

# Run demonstration
demonstrate_expression_tree()`,
  exercises: [
    {
      prompt:
        'Implement a method that validates whether an expression tree represents a valid mathematical expression (proper number of operands for each operator, no invalid operators).',
      initialCode: `def is_valid_expression_tree(root):
    # Write your solution here
    return True`,
      solution: `def is_valid_expression_tree(root):
    """
    Validates an expression tree iteratively using a stack.
    
    Args:
        root: Root node of the expression tree
        
    Returns:
        bool: True if tree represents valid expression
        
    Example:
        >>> is_valid_expression_tree(tree.root)
        True
    """
    if not root:
        return True
        
    stack = [root]
    valid_operators = {'+', '-', '*', '/'}
    
    while stack:
        node = stack.pop()
        
        if node.is_operator():
            # Operators must have exactly two children
            if not (node.left and node.right):
                return False
            if node.value not in valid_operators:
                return False
                
            stack.extend([node.left, node.right])
        else:
            # Operands must be leaves and valid numbers
            if node.left or node.right:
                return False
            try:
                float(node.value)
            except ValueError:
                return False
    
    return True`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt:
        'Create a method that optimizes a constant expression subtree into a single node (e.g., a subtree representing "2 + 3" becomes a single node containing "5").',
      initialCode: `def optimize_constants(root):
    # Write your solution here
    return root`,
      solution: `def optimize_constants(root):
    """
    Optimizes constant expressions in the tree.
    
    Args:
        root: Root node of the expression tree
        
    Returns:
        Root of optimized tree
        
    Example:
        >>> tree = ExpressionTree()
        >>> tree.root = optimize_constants(tree.root)
    """
    if not root:
        return None
        
    # First optimize children
    root.left = optimize_constants(root.left)
    root.right = optimize_constants(root.right)
    
    # If this is an operator node with constant children
    if (root.is_operator() and root.left and root.right and
        not root.left.is_operator() and not root.right.is_operator()):
        try:
            # Try to evaluate constant expression
            left_val = float(root.left.value)
            right_val = float(root.right.value)
            
            operation = {
                '+': lambda x, y: x + y,
                '-': lambda x, y: x - y,
                '*': lambda x, y: x * y,
                '/': lambda x, y: x / y
            }[root.value]
            
            # Create new constant node
            result = operation(left_val, right_val)
            return ExpressionNode(str(result))
        except (ValueError, ZeroDivisionError):
            pass
    
    return root`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question:
        'Why do we build expression trees from postfix notation rather than infix notation directly?',
      options: [
        'Postfix notation uses less memory',
        'The operator precedence is already resolved',
        'It makes the tree more balanced',
        "It's faster to evaluate",
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Memory usage is similar for both notations.',
        'Correct! Postfix notation already has operators in the correct order, making tree construction straightforward.',
        'Incorrect. Tree balance depends on the expression, not the notation.',
        'Incorrect. Evaluation time is the same once the tree is built.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question:
        'What traversal order does evaluating an expression tree follow?',
      options: ['Preorder', 'Inorder', 'Postorder', 'Level-order'],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Preorder would process operators before having operand values.',
        'Incorrect. Inorder traversal matches how we write expressions but not how we evaluate them.',
        'Correct! We need to evaluate both children before we can apply the operator at a node.',
        'Incorrect. Level-order would not respect operator precedence.',
      ],
      difficulty: Difficulty.Intermediate,
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
  'temperature-problems': dailyTemperaturesPatternData,
  'two-stacks': twoStacksData,
  'stack-sequences': stackSequencesData,
  'tree-traversal': treeTraversalData,
  'expression-tree': expressionTreeData,
};
export const stackLessonsTab: LessonsTab = {
  curriculum: stackCurriculum,
  lessons: stackLessons,
};
