import { Concept, createConcept, Difficulty } from '@/common/commonConcept';

export const stackConcepts: Concept[] = [
  createConcept(
    1,
    'What is a Stack? How does it differ from other data structures?',
    `
**Definition:** A stack is a linear data structure following Last In, First Out (LIFO). The most recently added (top) item is the first to be removed.

**Basic Structure:** 
- **Push:** Add an element to the top.
- **Pop:** Remove the top element.

**Example:**
\`\`\`python
my_stack = []
my_stack.append(1)  # Push 1
my_stack.append(2)  # Push 2
print(my_stack.pop())  # Removes 2 -> Output: 2
\`\`\`

**Key Characteristics:**
- **LIFO Order:** Last-added element is the first one out.
- **Limited Access:** Only the top element is directly accessible.
- **Common Uses:** Function call stacks, undo operations, expression parsing.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    2,
    'What are the advantages and disadvantages of using stacks?',
    `
<h2>Advantages:</h2>
<ul>
  <li><strong>Simple Implementation:</strong> Easy to implement with arrays or linked lists.</li>
  <li><strong>O(1) Push/Pop:</strong> Adding or removing from the top is constant time.</li>
  <li><strong>LIFO Mechanism:</strong> Perfect when the last inserted item must be accessed first.</li>
</ul>

<h2>Disadvantages:</h2>
<ul>
  <li><strong>Limited Access:</strong> Only the top element can be removed or viewed.</li>
  <li><strong>No Random Access:</strong> Inspecting deeper elements requires popping above elements.</li>
  <li><strong>Overflow/Underflow Risks:</strong> Requires careful capacity management or checks if empty.</li>
</ul>

**Key Points:**
- Great for LIFO scenarios.
- Not suitable for random or indexed retrieval.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    3,
    'What is the time complexity of common operations on a stack (push, pop, peek)?',
    `
**Time Complexity of Stack Operations:**
| Operation | Complexity | Explanation                                                  |
|-----------|-----------|--------------------------------------------------------------|
| **Push**  | O(1)       | Adding an item to the top is constant time.                 |
| **Pop**   | O(1)       | Removing the top item is also constant time.                |
| **Peek**  | O(1)       | Inspecting the top element is immediate.                    |
| **Search**| O(n)       | Finding an item requires traversing all elements potentially.|

**Key Points:**
- Highly efficient for LIFO operations.
- Searching deeper elements is linear in the worst case.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    4,
    'Explain the difference between a stack and a queue.',
    `
**Stack:**
- **LIFO Principle:** Last In, First Out.
- **Main Operations:** \`push\` (add to top), \`pop\` (remove from top).
- **Use Cases:** Call stacks, undo operations, expression parsing.

**Queue:**
- **FIFO Principle:** First In, First Out.
- **Main Operations:** \`enqueue\` (add to rear), \`dequeue\` (remove from front).
- **Use Cases:** Task scheduling, BFS, printer queues.

**Key Points:**
- Stacks process elements in reverse arrival order (LIFO).
- Queues process them in arrival order (FIFO).
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    5,
    'What are some common use cases for stacks in programming?',
    `
**Common Use Cases:**
- **Function Call Management:** Manages local variables and return addresses.
- **Undo Mechanisms:** Revert to previous states by popping from the stack.
- **Expression Evaluation:** Parse tokens in infix/postfix expressions.
- **Backtracking Algorithms:** Push states, pop when backtracking.
- **Browser History:** Navigating back uses a stack-like behavior.

**Example (Undo Mechanism):**
\`\`\`python
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
print(text)  # Hello World
undo()
print(text)  # Hello
\`\`\`

**Key Points:**
- Stacks shine where reversing a sequence of actions is necessary.
- LIFO is central to many everyday programming tasks.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    6,
    'Implementing a Stack using a Linked List',
    `
**Definition:** Instead of using an array, maintain a linked list where the head represents the top of the stack.

**Approach:**
1. **Push:** Insert a new node at the head in O(1).
2. **Pop:** Remove the head node in O(1).

**Pseudo-code Example:**
\`\`\`python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedStack:
    def __init__(self):
        self.head = None

    def push(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def pop(self):
        if not self.head:
            return None
        popped = self.head.data
        self.head = self.head.next
        return popped
\`\`\`

**Key Points:**
- Avoids potential resizing issues of an array.
- Memory usage can be more flexible but requires extra space for pointers.
    `,
    Difficulty.Intermediate,
  ),
  createConcept(
    7,
    'How to check for balanced parentheses in an expression using a stack?',
    `
**Algorithm:**
1. Traverse the string character by character.
2. When encountering an opening bracket (\\\`(\\\`, \\\`[\\\`, \\\`{\\\`), push it onto the stack.
3. When encountering a closing bracket (\\\`)\\\`, \\\`]\\\`, \\\`}\\\`), check the top of the stack:
   - If the top is a matching opening bracket, pop it.
   - Else, the parentheses are unbalanced.

**Example (Python):**
\`\`\`python
def is_balanced(s):
    stack = []
    pairs = {')': '(', ']': '[', '}': '{'}

    for char in s:
        if char in '([{':
            stack.append(char)
        elif char in ')]}':
            if not stack or stack[-1] != pairs[char]:
                return False
            stack.pop()
    return len(stack) == 0
\`\`\`

**Key Points:**
- Classic stack usage for validating nested structures.
- Returns \`True\` only if all opening brackets have a matching closing bracket.
    `,
    Difficulty.Intermediate,
  ),
  createConcept(
    8,
    'Evaluating Postfix (Reverse Polish) Expressions with a Stack',
    `
**Postfix Evaluation:**
1. Read tokens from left to right.
2. If the token is a number, push it to the stack.
3. If the token is an operator, pop the top two numbers, apply the operator, and push the result back.

**Example:**
\`\`\`python
def evaluate_postfix(expression):
    stack = []
    for token in expression.split():
        if token.isdigit():
            stack.append(int(token))
        else:
            b = stack.pop()
            a = stack.pop()
            if token == '+': res = a + b
            elif token == '-': res = a - b
            elif token == '*': res = a * b
            elif token == '/': res = a // b  # integer div
            stack.append(res)
    return stack.pop() if stack else None

expr = "2 3 * 5 4 * +"
print(evaluate_postfix(expr))  # 26
\`\`\`

**Key Points:**
- Stacks simplify postfix or prefix expression evaluations.
- Each operator operates on the most recent operands (popped from the stack).
    `,
    Difficulty.Intermediate,
  ),
  createConcept(
    9,
    'Using Stacks for Backtracking in Depth-First Search (DFS)',
    `
**Definition:** DFS can be implemented with recursion or an explicit stack.

**Algorithm (Iterative DFS):**
1. Push the start node onto the stack.
2. While stack is not empty:
   - Pop the top node.
   - Process it and mark as visited.
   - Push unvisited neighbors onto the stack.

**Example (Pseudo-code):**
\`\`\`python
def dfs(graph, start):
    stack = [start]
    visited = set()

    while stack:
        node = stack.pop()
        if node not in visited:
            visited.add(node)
            print(node, end=' ')
            # Add neighbors in reverse order if needed
            for neighbor in graph[node]:
                if neighbor not in visited:
                    stack.append(neighbor)
\`\`\`

**Key Points:**
- Eliminates the need for recursion, controlling DFS explicitly.
- Great when recursion depth might be large or to avoid stack overflow in languages with limited call stacks.
    `,
    Difficulty.Advanced,
  ),
  createConcept(
    10,
    'Min Stack / Get Min in O(1)',
    `
**Problem:** Design a stack that can push, pop, and retrieve the minimum element in O(1) time.

**Approach:**
1. Maintain a normal stack for values.
2. Maintain a secondary stack (or track) for the current minimum after each push/pop.

**Pseudo-code:**
\`\`\`python
class MinStack:
    def __init__(self):
        self.main_stack = []
        self.min_stack = []

    def push(self, x):
        self.main_stack.append(x)
        if not self.min_stack or x <= self.min_stack[-1]:
            self.min_stack.append(x)

    def pop(self):
        val = self.main_stack.pop()
        if val == self.min_stack[-1]:
            self.min_stack.pop()
        return val

    def get_min(self):
        return self.min_stack[-1] if self.min_stack else None
\`\`\`

**Key Points:**
- The \`min_stack\` tracks the minimum values historically.
- When an element is popped from \`main_stack\`, if it matches \`min_stack\`\'s top, pop from there too.
    `,
    Difficulty.Advanced,
  ),
];
