import { Difficulty, Concept, createConcept } from '@/common/commonConcept';

export const linkedListConcepts: Concept[] = [
  createConcept(
    1,
    'What is a linked list? How does it differ from an array?',
    `
**Definition:** A linked list is a linear data structure where elements are stored in nodes, and each node points to the next node in the sequence.

**Basic Structure:** Each node contains data and a reference (or link) to the next node in the list.

**Key Characteristics:**
- **Dynamic Size:** Can grow or shrink during execution.
- **Sequential Access:** O(n) time to access an element by traversing from the head.
- **Non-Contiguous Memory:** Nodes reside in scattered memory locations.

**Differences from Arrays:**
- **Memory Allocation:** Arrays are contiguous; linked lists are not.
- **Size:** Arrays have fixed size; linked lists adjust dynamically.
- **Access Time:** Arrays allow O(1) random access; linked lists are O(n).
- **Insertion/Deletion:** Linked lists are more efficient for insert/delete, especially at the beginning or middle.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    2,
    'Explain the time complexity of common operations on a linked list (access, insertion, deletion).',
    `
**Time Complexity of Common Operations on Linked Lists:**
| Operation                    | Complexity | Explanation                                                                   |
|-----------------------------|------------|-------------------------------------------------------------------------------|
| **Access**                  | O(n)       | Must traverse from the head to reach an element.                              |
| **Insertion - At Beginning**| O(1)       | Updating the head pointer is constant time.                                   |
| **Insertion - At End**      | O(n)       | Requires traversal to find the last node.                                     |
| **Insertion - In Middle**   | O(n)       | Must traverse to the insertion point.                                         |
| **Deletion - At Beginning** | O(1)       | Resetting the head pointer is constant time.                                  |
| **Deletion - At End**       | O(n)       | Requires traversal to find the second-to-last node.                           |
| **Deletion - In Middle**    | O(n)       | Must traverse to the node’s predecessor.                                      |

**Key Points:**
- Linked lists excel at insertions/deletions at the head.
- Access and end insertions/deletions are less efficient due to sequential traversal.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    3,
    'What are the different types of linked lists?',
    `
**Types of Linked Lists:**
- **Singly Linked List:** Each node points forward to the next node. Last node points to null.
- **Doubly Linked List:** Each node has two pointers (next and prev). Allows bidirectional traversal.
- **Circular Linked List:** Last node points back to the first node, creating a cycle. Can be singly or doubly linked.

**Example:**
\`\`\`python
# Singly Linked List Node
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

# Doubly Linked List Node
class DoubleNode:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None
\`\`\`

**Key Points:**
- Singly linked lists require less memory but can’t traverse backwards.
- Doubly linked lists allow reverse traversal but use more memory.
- Circular variants enable continuous traversal of the list.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    4,
    'What are the advantages and disadvantages of using linked lists?',
    `
<h2>Advantages:</h2>
<ul>
  <li><strong>Dynamic Size:</strong> Easy to grow or shrink at runtime.</li>
  <li><strong>Efficient Insertions/Deletions:</strong> Especially at the beginning.</li>
  <li><strong>Flexible Reorganization:</strong> Nodes can be moved or rearranged without shifting large blocks of memory.</li>
</ul>

<h2>Disadvantages:</h2>
<ul>
  <li><strong>Sequential Access:</strong> O(n) to reach an arbitrary element.</li>
  <li><strong>Memory Overhead:</strong> Each node requires extra space for pointers.</li>
  <li><strong>No Random Indexing:</strong> Cannot directly access an element by index.</li>
</ul>

**Key Points:**
- Ideal for frequent insertions/deletions.
- Arrays are typically better for random indexing and contiguous storage.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    5,
    'How would you reverse a singly linked list?',
    `
**Algorithm:**
1. Use three pointers: \`prev = None\`, \`current = head\`, and \`next = None\`.
2. Loop until \`current\` is null:
   - \`next = current.next\`
   - \`current.next = prev\`
   - \`prev = current\`
   - \`current = next\`
3. At the end, \`prev\` becomes the new head.

**Example:**
\`\`\`python
def reverse_linked_list(head):
    prev = None
    current = head
    while current is not None:
        nxt = current.next
        current.next = prev
        prev = current
        current = nxt
    return prev
\`\`\`

**Key Points:**
- Reassigns each node’s \`.next\` pointer in a single pass.
- \`prev\` points to the new head at completion.
    `,
    Difficulty.Intermediate,
  ),
  createConcept(
    6,
    'How do you detect a loop in a linked list?',
    `
**Floyd’s Cycle Detection (Tortoise and Hare):**
1. Initialize two pointers: \`slow\` and \`fast\`, both at the head.
2. Move \`slow\` by one and \`fast\` by two.
3. If they ever meet, a loop is present.
4. If \`fast\` or \`fast.next\` becomes null, there’s no loop.

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
- O(n) time, O(1) extra space.
- Commonly used for loop detection in singly linked lists.
    `,
    Difficulty.Intermediate,
  ),
  createConcept(
    7,
    'How do you find the middle element of a linked list in one pass?',
    `
**Algorithm (Tortoise and Hare):**
1. Initialize \`slow\` and \`fast\` at head.
2. \`slow\` moves one step, \`fast\` moves two steps.
3. When \`fast\` reaches the end, \`slow\` is at the middle.

**Example:**
\`\`\`python
def find_middle(head):
    slow, fast = head, head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow
\`\`\`

**Key Points:**
- O(n) time, O(1) space.
- Avoids storing all nodes or counting them first.
    `,
    Difficulty.Intermediate,
  ),
  createConcept(
    8,
    'How do you remove duplicates from an unsorted linked list?',
    `
**Algorithm:**
1. Maintain a hash set of seen values.
2. Traverse the list with two pointers: \`current\` and \`previous\`.
3. If \`current.data\` is in seen, remove \`current\` by linking \`previous.next\` to \`current.next\`.
4. Otherwise, add \`current.data\` to seen and advance both pointers.

**Example:**
\`\`\`python
def remove_duplicates(head):
    if not head:
        return head
    seen = set()
    current = head
    prev = None
    while current:
        if current.data in seen:
            prev.next = current.next
        else:
            seen.add(current.data)
            prev = current
        current = current.next
    return head
\`\`\`

**Key Points:**
- O(n) time, O(n) space with a hash set.
- Alternatively, sorting the list first (if feasible) can simplify duplicate removal.
    `,
    Difficulty.Intermediate,
  ),
  createConcept(
    9,
    'How do you merge two sorted linked lists into one sorted linked list?',
    `
**Algorithm:**
1. Create a dummy node to simplify edge cases.
2. Compare heads of both lists, attach the smaller one to the \`current\` pointer, and move that list’s pointer forward.
3. Continue until one list is empty, then attach the remainder of the other list.

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
    current.next = l1 if l1 else l2
    return dummy.next
\`\`\`

**Key Points:**
- O(n + m) time, where n and m are the lengths of the two lists.
- Dummy node reduces edge-case complexity.
    `,
    Difficulty.Intermediate,
  ),
  createConcept(
    10,
    'How do you implement a stack using a linked list?',
    `
**Algorithm:**
1. Use a singly linked list where the head represents the top of the stack.
2. **Push:** Insert at the head (O(1)).
3. **Pop:** Remove from the head (O(1)).

**Example:**
\`\`\`python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class Stack:
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
- Dynamic resizing and O(1) push/pop.
- Stack top is always at the head of the list.
    `,
    Difficulty.Intermediate,
  ),
  createConcept(
    11,
    'How do you find the intersection node of two singly linked lists?',
    `
**Definition:** Two singly linked lists may intersect at some node. From that point on, they share the same tail.

**Approach:**
1. Calculate the lengths of both lists (lenA and lenB).
2. Advance the pointer of the longer list by \`abs(lenA - lenB)\` nodes.
3. Traverse both lists simultaneously until you find a common node.

**Example (pseudo-code):**
\`\`\`python
def get_intersection_node(headA, headB):
    lenA = length(headA)
    lenB = length(headB)

    # Advance the longer list
    if lenA > lenB:
        for _ in range(lenA - lenB):
            headA = headA.next
    else:
        for _ in range(lenB - lenA):
            headB = headB.next

    # Traverse both lists simultaneously
    while headA and headB:
        if headA == headB:
            return headA
        headA = headA.next
        headB = headB.next

    return None
\`\`\`

**Key Points:**
- O(m + n) time, where m and n are the lengths of the two lists.
- Space complexity is O(1). We rely on pointer manipulation, not extra data structures.
    `,
    Difficulty.Intermediate,
  ),
  createConcept(
    12,
    'How do you copy a linked list with random pointers?',
    `
**Definition:** Each node has a \`next\` pointer and an additional \`random\` pointer, which can point to any node in the list (or null).

**Approach (Two-Pass Algorithm):**
1. **First Pass:** Clone each node and insert it right after the original node.
2. **Assign Random Pointers:** For each original node’s clone, set \`clone.random = original.random.next\`.
3. **Separate Lists:** Detach the cloned list from the original list.

**Key Points:**
- Common interview question for deep-copying complex linked structures.
- Achieves O(n) time and O(1) extra space (disregarding the new list).
    `,
    Difficulty.Advanced,
  ),
  createConcept(
    13,
    'How do you perform a quicksort on a linked list?',
    `
**Quicksort Overview:**
- **Partition:** Select a pivot node. Rearrange elements so smaller ones come before pivot, larger after pivot.
- **Recur:** Recursively quicksort the sublists before and after the pivot.

**Linked List Adaptations:**
1. **Partition Step:** Must rearrange pointers around the pivot without random indexing.
2. **Efficiency:** Might be less efficient than mergesort on a linked list due to repeated pointer manipulations and no random access.

**Key Points:**
- Mergesort is often preferred for linked lists (O(n log n)), but quicksort can be used in certain in-place scenarios.
- Careful pointer handling is required during partitioning.
    `,
    Difficulty.Advanced,
  ),
  createConcept(
    14,
    'Implementing an LRU (Least Recently Used) cache using a doubly linked list',
    `
**Definition:** LRU cache evicts the least recently used item when capacity is exceeded.

**Approach:**
1. **Hash Map + Doubly Linked List:** 
   - **Hash Map:** O(1) access to nodes by key.
   - **Doubly Linked List:** Nodes stored with key-value. Most recent at one end (head), least recent at the other (tail).
2. **Access or Update:** Move accessed node to the head (most recent).
3. **Eviction:** Remove the tail node when capacity is exceeded.

**Key Points:**
- Common interview question. Combines O(1) lookups with efficient reorder/eviction.
- Doubly linked list enables O(1) node removal in any position.
    `,
    Difficulty.Advanced,
  ),
];

