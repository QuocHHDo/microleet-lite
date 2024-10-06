import { createProblem, Problem } from '../../common/commonProblem';

export const linkedListProblems: Problem[] = [
  createProblem(
    'Reverse Linked List (Leetcode 206)',
    'Easy',
    'Given the head of a singly linked list, reverse the list, and return the reversed list.',
    [
      {
        code: `def reverse_linked_list(head):
    # Initialize previous node as None and current node as head
    prev = None
    current = head
    
    # Iterate through the list
    while current:
        # Store the next node
        next_node = current.next
        
        # Reverse the current node's pointer
        current.next = prev
        
        # Move pointers one position ahead
        prev = current
        current = next_node
    
    # Return the new head of the reversed list
    return prev`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        explanation:
          'This solution reverses the linked list in place by adjusting the pointers of each node.',
      },
      {
        code: `def reverse_linked_list_recursive(head):
    # Base case: if the list is empty or has only one node
    if not head or not head.next:
        return head
    
    # Recursively reverse the rest of the list
    new_head = reverse_linked_list_recursive(head.next)
    
    # Reverse the current node's pointer
    head.next.next = head
    head.next = None
    
    # Return the new head of the reversed list
    return new_head`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        explanation:
          'This recursive solution reverses the linked list by recursively reversing the rest of the list and adjusting the pointers.',
      },
    ],
    'Use three pointers to reverse the direction of the links.',
    'https://leetcode.com/problems/reverse-linked-list/',
  ),
  createProblem(
    'Merge Two Sorted Lists (Leetcode 21)',
    'Easy',
    'Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.',
    [
      {
        code: `def merge_two_lists(l1, l2):
    # Create a dummy node to serve as the head of the merged list
    dummy = ListNode(0)
    current = dummy
    
    # Traverse both lists and merge them
    while l1 and l2:
        if l1.val < l2.val:
            current.next = l1
            l1 = l1.next
        else:
            current.next = l2
            l2 = l2.next
        current = current.next
    
    # Append the remaining nodes of either list
    current.next = l1 if l1 else l2
    
    # Return the merged list
    return dummy.next`,
        timeComplexity: 'O(n + m)',
        spaceComplexity: 'O(1)',
        explanation:
          'This solution merges two sorted linked lists by comparing the nodes of both lists and adjusting the pointers accordingly.',
      },
      {
        code: `def merge_two_lists_recursive(l1, l2):
    # Base case: if one of the lists is empty, return the other list
    if not l1:
        return l2
    if not l2:
        return l1
    
    # Recursively merge the lists
    if l1.val < l2.val:
        l1.next = merge_two_lists_recursive(l1.next, l2)
        return l1
    else:
        l2.next = merge_two_lists_recursive(l1, l2.next)
        return l2`,
        timeComplexity: 'O(n + m)',
        spaceComplexity: 'O(n + m)',
        explanation:
          'This recursive solution merges two sorted linked lists by recursively merging the rest of the lists and adjusting the pointers.',
      },
    ],
    'Use a dummy node to simplify the merging process.',
    'https://leetcode.com/problems/merge-two-sorted-lists/',
  ),
  createProblem(
    'Reorder List (Leetcode 143)',
    'Medium',
    'Given a singly linked list L: L0 → L1 → … → Ln-1 → Ln, reorder it to: L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …',
    [
      {
        code: `def reorder_list(head):
    if not head or not head.next:
        return
    
    # Find the middle of the list using the slow and fast pointer technique
    slow, fast = head, head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    
    # Reverse the second half of the list
    prev, current = None, slow
    while current:
        next_node = current.next
        current.next = prev
        prev = current
        current = next_node
    
    # Merge the two halves
    first, second = head, prev
    while second.next:
        first.next, first = second, first.next
        second.next, second = first, second.next`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        explanation:
          'This solution first finds the middle of the list, reverses the second half, and then merges the two halves in the required order.',
      },
      {
        code: `def reorder_list_using_stack(head):
    if not head or not head.next:
        return
    
    # Find the middle of the list using the slow and fast pointer technique
    slow, fast = head, head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    
    # Use a stack to store the second half of the list
    stack = []
    current = slow
    while current:
        stack.append(current)
        current = current.next
    
    # Merge the two halves
    first = head
    while stack:
        next_node = first.next
        first.next = stack.pop()
        first.next.next = next_node
        first = next_node
    
    # Set the next of the last node to None
    first.next = None`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        explanation:
          'This solution uses a stack to store the second half of the list and then merges the two halves in the required order.',
      },
    ],
    'Find the middle of the list, reverse the second half, and merge the two halves.',
    'https://leetcode.com/problems/reorder-list/',
  ),
  createProblem(
    'Remove Nth Node From End of List (Leetcode 19)',
    'Medium',
    'Given the head of a linked list, remove the nth node from the end of the list and return its head.',
    [
      {
        code: `def remove_nth_from_end(head, n):
    # Create a dummy node to handle edge cases
    dummy = ListNode(0)
    dummy.next = head
    first = dummy
    second = dummy
    
    # Move first pointer n+1 steps ahead
    for _ in range(n + 1):
        first = first.next
    
    # Move first to the end, maintaining the gap
    while first:
        first = first.next
        second = second.next
    
    # Remove the nth node from the end
    second.next = second.next.next
    
    # Return the head of the modified list
    return dummy.next`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        explanation:
          'This solution uses two pointers to maintain a gap of n nodes between them and then removes the nth node from the end.',
      },
      {
        code: `def remove_nth_from_end_using_length(head, n):
    # Calculate the length of the list
    length = 0
    current = head
    while current:
        length += 1
        current = current.next
    
    # If the node to remove is the head, return the next node
    if length == n:
        return head.next
    
    # Find the node before the nth node from the end
    current = head
    for _ in range(length - n - 1):
        current = current.next
    
    # Remove the nth node from the end
    current.next = current.next.next
    
    # Return the head of the modified list
    return head`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        explanation:
          'This solution calculates the length of the list and then removes the nth node from the end by finding the node before it.',
      },
    ],
    'Use two pointers with a gap of n nodes to find the nth node from the end.',
    'https://leetcode.com/problems/remove-nth-node-from-end-of-list/',
  ),
  createProblem(
    'Linked List Cycle (Leetcode 141)',
    'Easy',
    'Given head, the head of a linked list, determine if the linked list has a cycle in it.',
    [
      {
        code: `def has_cycle(head):
    # Handle edge cases
    if not head or not head.next:
        return False
    
    # Initialize slow and fast pointers
    slow = head
    fast = head.next
    
    # Use the "Tortoise and Hare" algorithm to detect a cycle
    while slow != fast:
        if not fast or not fast.next:
            return False
        slow = slow.next
        fast = fast.next.next
    
    # If the pointers meet, there is a cycle
    return True`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        explanation:
          'This solution uses the "Tortoise and Hare" algorithm to detect a cycle in the linked list.',
      },
      {
        code: `def has_cycle_using_set(head):
    # Use a set to store visited nodes
    visited = set()
    current = head
    
    # Traverse the list
    while current:
        if current in visited:
            return True
        visited.add(current)
        current = current.next
    
    # If no cycle is found, return False
    return False`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        explanation:
          'This solution uses a set to store visited nodes and checks for cycles by comparing the current node with the set.',
      },
    ],
    'Use two pointers moving at different speeds to detect a cycle.',
    'https://leetcode.com/problems/linked-list-cycle/',
  ),
  createProblem(
    'Merge K Sorted Linked Lists (Leetcode 23)',
    'Hard',
    'You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.',
    [
      {
        code: `def merge_k_lists(lists):
    import heapq
    
    # Create a dummy node to serve as the head of the merged list
    dummy = ListNode(0)
    current = dummy
    
    # Initialize a min-heap
    heap = []
    
    # Push the first node of each list into the heap
    for i, l in enumerate(lists):
        if l:
            heapq.heappush(heap, (l.val, i, l))
    
    # Merge the lists using the heap
    while heap:
        val, i, node = heapq.heappop(heap)
        current.next = node
        current = current.next
        if node.next:
            heapq.heappush(heap, (node.next.val, i, node.next))
    
    # Return the merged list
    return dummy.next`,
        timeComplexity: 'O(n log k)',
        spaceComplexity: 'O(k)',
        explanation:
          'This solution uses a min-heap to merge k sorted linked lists efficiently.',
      },
      {
        code: `def merge_k_lists_divide_and_conquer(lists):
    if not lists:
        return None
    
    # Helper function to merge two lists
    def merge_two_lists(l1, l2):
        dummy = ListNode(0)
        current = dummy
        while l1 and l2:
            if l1.val < l2.val:
                current.next = l1
                l1 = l1.next
            else:
                current.next = l2
                l2 = l2.next
            current = current.next
        current.next = l1 if l1 else l2
        return dummy.next
    
    # Divide and conquer approach
    while len(lists) > 1:
        merged_lists = []
        for i in range(0, len(lists), 2):
            l1 = lists[i]
            l2 = lists[i + 1] if i + 1 < len(lists) else None
            merged_lists.append(merge_two_lists(l1, l2))
        lists = merged_lists
    
    # Return the merged list
    return lists[0]`,
        timeComplexity: 'O(n log k)',
        spaceComplexity: 'O(1)',
        explanation:
          'This solution uses a divide and conquer approach to merge k sorted linked lists by repeatedly merging pairs of lists.',
      },
    ],
    'Use a min-heap to keep track of the smallest elements from each list.',
    'https://leetcode.com/problems/merge-k-sorted-lists/',
  ),
];
