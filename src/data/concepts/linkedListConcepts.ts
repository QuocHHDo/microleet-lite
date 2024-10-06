import { Difficulty, Concept, createConcept } from '@/common/commonConcept';
import { generateTimeComplexityTable } from '@/utils/generateTimeComplexityTable';

export const linkedListConcepts: Concept[] = [
  createConcept(
    1,
    'What is a linked list? How does it differ from an array?',
    `
  **Definition:** A linked list is a linear data structure where elements are stored in nodes, and each node points to the next node in the sequence.
  
  **Basic Structure:** Each node contains data and a reference (or link) to the next node in the list.

  **Key Characteristics:**
  - **Dynamic Size:** Linked lists can grow or shrink in size during the execution of a program.
  - **Sequential Access:** Access elements sequentially, starting from the head node, with O(n) time complexity for accessing an element.
  - **Non-Contiguous Memory:** Nodes are stored in non-contiguous memory locations, linked by pointers.
  
  **Differences from Arrays:**
  - **Memory Allocation:** Arrays are allocated contiguous memory, while linked lists use non-contiguous memory.
  - **Size:** Arrays have a fixed size, whereas linked lists can dynamically change size.
  - **Access Time:** Arrays allow O(1) time complexity for random access, while linked lists require O(n) for sequential access.
  - **Insertion/Deletion:** Linked lists are more efficient for insertions and deletions, especially at the beginning or middle, compared to arrays.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    2,
    'Explain the time complexity of common operations on a linked list (access, insertion, deletion).',
    `
  **Time Complexity of Common Operations on Linked Lists:**
  ${generateTimeComplexityTable([
    {
      name: 'Access',
      complexity: 'O(n)',
      explanation:
        'Accessing an element in a linked list requires traversing from the head node.',
    },
    {
      name: 'Insertion - At the Beginning',
      complexity: 'O(1)',
      explanation:
        'Inserting at the beginning of a linked list is efficient as it only requires updating the head pointer.',
    },
    {
      name: 'Insertion - At the End',
      complexity: 'O(n)',
      explanation:
        'Inserting at the end requires traversing the entire list to find the last node.',
    },
    {
      name: 'Insertion - In the Middle',
      complexity: 'O(n)',
      explanation:
        'Inserting in the middle requires traversing to the desired position.',
    },
    {
      name: 'Deletion - At the Beginning',
      complexity: 'O(1)',
      explanation:
        'Deleting at the beginning is efficient as it only requires updating the head pointer.',
    },
    {
      name: 'Deletion - At the End',
      complexity: 'O(n)',
      explanation:
        'Deleting at the end requires traversing the entire list to find the second-to-last node.',
    },
    {
      name: 'Deletion - In the Middle',
      complexity: 'O(n)',
      explanation:
        'Deleting in the middle requires traversing to the desired position.',
    },
  ])}
  
  **Key Points:**
  - Linked lists are optimized for efficient insertions and deletions, especially at the beginning.
  - Accessing elements is less efficient compared to arrays due to the need for sequential traversal.
      `,
    Difficulty.Beginner,
  ),
  createConcept(
    3,
    'What are the different types of linked lists?',
    `
  **Types of Linked Lists:**
  - **Singly Linked List:** Each node points to the next node in the sequence. The last node points to null.
  - **Doubly Linked List:** Each node has two pointers: one to the next node and one to the previous node. The last node's next pointer points to null, and the first node's previous pointer points to null.
  - **Circular Linked List:** The last node points to the first node, creating a circular structure. Can be either singly or doubly linked.
  
  **Example:**
  \`\`\`python
  # Singly Linked List Node
  class Node:
      def __init__(self, data):
          self.data = data
          self.next = None
  
  # Doubly Linked List Node
  class Node:
      def __init__(self, data):
          self.data = data
          self.next = None
          self.prev = None
  \`\`\`
  
  **Key Points:**
  - Singly linked lists are simpler but do not allow backward traversal.
  - Doubly linked lists allow bidirectional traversal but require more memory.
  - Circular linked lists can be useful for scenarios where you need to cycle through elements.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    4,
    'What are the advantages and disadvantages of using linked lists?',
    `
  <h2>Advantages:</h2>
  <ul>
    <li><strong>Dynamic Size:</strong> Linked lists can grow or shrink in size during the execution of a program.</li>
    <li><strong>Efficient Insertions/Deletions:</strong> Insertions and deletions, especially at the beginning, are efficient.</li>
    <li><strong>Flexibility:</strong> Linked lists can be easily reorganized and resized.</li>
  </ul>
  
  <h2>Disadvantages:</h2>
  <ul>
    <li><strong>Sequential Access:</strong> Accessing elements requires traversing the list, leading to O(n) time complexity.</li>
    <li><strong>Memory Overhead:</strong> Each node requires additional memory for the pointer(s).</li>
    <li><strong>No Random Access:</strong> Unlike arrays, linked lists do not allow direct access to elements by index.</li>
  </ul>
  
  **Example:**
  \`\`\`python
  # Efficient insertion at the beginning
  new_node = Node(10)
  new_node.next = head
  head = new_node
  
  # Inefficient access example
  current = head
  while current:
      print(current.data)
      current = current.next
  \`\`\`
  
  **Key Points:**
  - Linked lists are ideal for scenarios where frequent insertions and deletions are required.
  - For random access and fixed-size data structures, arrays may be more suitable.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    5,
    'How would you reverse a singly linked list?',
    `
  **Algorithm:**
  1. Initialize three pointers: \`prev\` as NULL, \`current\` as head, and \`next\` as NULL.
  2. Iterate through the linked list:
     - Store the next node: \`next = current.next\`
     - Reverse the current node's pointer: \`current.next = prev\`
     - Move pointers one position ahead: \`prev = current\`, \`current = next\`
  3. After the loop, \`prev\` will point to the new head of the reversed list.
  
  **Example:**
  \`\`\`python
  def reverse_linked_list(head):
      prev = None
      current = head
      while current is not None:
          next = current.next
          current.next = prev
          prev = current
          current = next
      head = prev
      return head
  \`\`\`
  
  **Key Points:**
  - Reversing a linked list involves changing the direction of the pointers.
  - The new head of the reversed list will be the last node of the original list.
    `,
    Difficulty.Intermediate,
  ),
  createConcept(
    6,
    'How do you detect a loop in a linked list?',
    `
  **Algorithm (Floyd's Cycle-Finding Algorithm):**
  1. Initialize two pointers: \`slow\` and \`fast\`, both starting at the head of the list.
  2. Move \`slow\` by one step and \`fast\` by two steps until they meet or \`fast\` reaches the end of the list.
  3. If \`slow\` and \`fast\` meet, there is a loop in the linked list.
  
  **Example:**
  \`\`\`python
  def detect_loop(head):
      slow = head
      fast = head
      while fast and fast.next:
          slow = slow.next
          fast = fast.next.next
          if slow == fast:
              return True
      return False
  \`\`\`
  
  **Key Points:**
  - This algorithm is also known as the "Tortoise and Hare" algorithm.
  - It efficiently detects loops with a time complexity of O(n) and space complexity of O(1).
    `,
    Difficulty.Intermediate,
  ),
  createConcept(
    7,
    'How do you find the middle element of a linked list in one pass?',
    `
  **Algorithm:**
  1. Initialize two pointers: \`slow\` and \`fast\`, both starting at the head of the list.
  2. Move \`slow\` by one step and \`fast\` by two steps until \`fast\` reaches the end of the list.
  3. When \`fast\` reaches the end, \`slow\` will be at the middle of the list.
  
  **Example:**
  \`\`\`python
  def find_middle(head):
      slow = head
      fast = head
      while fast and fast.next:
          slow = slow.next
          fast = fast.next.next
      return slow.data
  \`\`\`
  
  **Key Points:**
  - This algorithm uses the "Tortoise and Hare" approach to find the middle element in one pass.
  - It has a time complexity of O(n) and space complexity of O(1).
    `,
    Difficulty.Intermediate,
  ),
  createConcept(
    8,
    'How do you remove duplicates from an unsorted linked list?',
    `
  **Algorithm:**
  1. Use a hash set to keep track of the elements that have been seen.
  2. Traverse the linked list:
     - If the current node's data is in the hash set, remove the node.
     - Otherwise, add the current node's data to the hash set.
  
  **Example:**
  \`\`\`python
  def remove_duplicates(head):
      if not head:
          return head
      seen = set()
      current = head
      previous = None
      while current:
          if current.data in seen:
              previous.next = current.next
          else:
              seen.add(current.data)
              previous = current
          current = current.next
      return head
  \`\`\`
  
  **Key Points:**
  - This algorithm uses a hash set to efficiently check for duplicates.
  - It has a time complexity of O(n) and space complexity of O(n).
    `,
    Difficulty.Intermediate,
  ),
  createConcept(
    9,
    'How do you merge two sorted linked lists into one sorted linked list?',
    `
  **Algorithm:**
  1. Initialize a dummy node to serve as the head of the merged list.
  2. Use a pointer to keep track of the current position in the merged list.
  3. Traverse both linked lists:
     - Compare the current nodes of both lists.
     - Append the smaller node to the merged list and move the pointer of the corresponding list.
  4. If one list is exhausted, append the remaining nodes of the other list.
  
  **Example:**
  \`\`\`python
  def merge_sorted_lists(l1, l2):
      dummy = Node(0)
      current = dummy
      while l1 and l2:
          if l1.data < l2.data:
              current.next = l1
              l1 = l1.next
          else:
              current.next = l2
              l2 = l2.next
          current = current.next
      if l1:
          current.next = l1
      elif l2:
          current.next = l2
      return dummy.next
  \`\`\`
  
  **Key Points:**
  - This algorithm merges two sorted linked lists in O(n + m) time, where n and m are the lengths of the two lists.
  - It uses a dummy node to simplify the merging process.
    `,
    Difficulty.Intermediate,
  ),
  createConcept(
    10,
    'How do you implement a stack using a linked list?',
    `
  **Algorithm:**
  1. Use a singly linked list to implement the stack.
  2. The head of the linked list represents the top of the stack.
  3. Push operation: Insert a new node at the beginning of the linked list.
  4. Pop operation: Remove the node at the beginning of the linked list.
  
  **Example:**
  \`\`\`python
  class Stack:
      def __init__(self):
          self.head = None
  
      def push(self, data):
          new_node = Node(data)
          new_node.next = self.head
          self.head = new_node
  
      def pop(self):
          if self.head:
              data = self.head.data
              self.head = self.head.next
              return data
          return None
  \`\`\`
  
  **Key Points:**
  - Using a linked list for a stack allows for dynamic resizing.
  - The push and pop operations are both O(1) time complexity.
    `,
    Difficulty.Intermediate,
  ),
];
