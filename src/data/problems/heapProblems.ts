import { createProblem, Problem } from '@/common/commonProblem';

export const heapProblems: Problem[] = [
  createProblem(
    'Kth Largest Element in an Array (Leetcode 215)',
    'Medium',
    'Given an integer array nums and an integer k, return the kth largest element in the array. Note that it is the kth largest element in the sorted order, not the kth distinct element.',
    [
      {
        code: `import heapq

def findKthLargest(nums, k):
    # Initialize a min-heap
    min_heap = []
    
    # Iterate through the array
    for num in nums:
        # Push the current number onto the heap
        heapq.heappush(min_heap, num)
        # If the heap size exceeds k, pop the smallest element
        if len(min_heap) > k:
            heapq.heappop(min_heap)
    
    # The kth largest element will be the smallest element in the heap
    return min_heap[0]`,
        timeComplexity: 'O(n log k)',
        spaceComplexity: 'O(k)',
        explanation:
          'This solution uses a min-heap to keep track of the k largest elements. It pushes each element onto the heap and pops the smallest element if the heap size exceeds k.',
      },
    ],
    'Use a min-heap to keep track of the k largest elements.',
    'https://leetcode.com/problems/kth-largest-element-in-an-array/',
  ),
  createProblem(
    'Top K Frequent Elements (Leetcode 347)',
    'Medium',
    'Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.',
    [
      {
        code: `from collections import Counter
import heapq

def topKFrequent(nums, k):
    # Count the frequency of each number
    frequency = Counter(nums)
    
    # Initialize a min-heap
    min_heap = []
    
    # Iterate through the frequency dictionary
    for num, freq in frequency.items():
        # Push the frequency and number onto the heap
        heapq.heappush(min_heap, (freq, num))
        # If the heap size exceeds k, pop the smallest element
        if len(min_heap) > k:
            heapq.heappop(min_heap)
    
    # Extract the k most frequent elements from the heap
    result = [num for freq, num in min_heap]
    return result`,
        timeComplexity: 'O(n log k)',
        spaceComplexity: 'O(n + k)',
        explanation:
          'This solution uses a min-heap to find the k most frequent elements. It pushes each frequency and number onto the heap and pops the smallest element if the heap size exceeds k.',
      },
    ],
    'Use a min-heap to find the k most frequent elements.',
    'https://leetcode.com/problems/top-k-frequent-elements/',
  ),
  createProblem(
    'Merge k Sorted Lists (Leetcode 23)',
    'Hard',
    'You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.',
    [
      {
        code: `import heapq

def mergeKLists(lists):
    # Initialize a min-heap
    min_heap = []
    
    # Push the first node of each list onto the heap
    for i, lst in enumerate(lists):
        if lst:
            heapq.heappush(min_heap, (lst.val, i, lst))
    
    # Initialize a dummy node and a pointer to the current node
    dummy = ListNode(0)
    current = dummy
    
    # While there are elements in the heap
    while min_heap:
        # Pop the smallest element from the heap
        val, i, node = heapq.heappop(min_heap)
        # Append the node to the merged list
        current.next = node
        current = current.next
        # If there are more nodes in the current list, push the next node onto the heap
        if node.next:
            heapq.heappush(min_heap, (node.next.val, i, node.next))
    
    # Return the merged list
    return dummy.next`,
        timeComplexity: 'O(n log k)',
        spaceComplexity: 'O(k)',
        explanation:
          'This solution uses a min-heap to merge k sorted lists. It pushes the first node of each list onto the heap and pops the smallest element, appending it to the merged list. If there are more nodes in the current list, it pushes the next node onto the heap.',
      },
    ],
    'Use a min-heap to merge k sorted lists.',
    'https://leetcode.com/problems/merge-k-sorted-lists/',
  ),
  createProblem(
    'Find Median from Data Stream (Leetcode 295)',
    'Hard',
    'The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values. Design a data structure that supports the following two operations: void addNum(int num) - Add a integer number from the data stream to the data structure. double findMedian() - Return the median of all elements so far.',
    [
      {
        code: `import heapq

class MedianFinder:
    def __init__(self):
        # Initialize two heaps: a max-heap for the lower half and a min-heap for the upper half
        self.max_heap = []
        self.min_heap = []

    def addNum(self, num: int) -> None:
        # Push the negative of the number onto the max-heap
        heapq.heappush(self.max_heap, -num)
        
        # Pop the largest element from the max-heap and push it onto the min-heap
        heapq.heappush(self.min_heap, -heapq.heappop(self.max_heap))
        
        # If the size of the min-heap is greater than the size of the max-heap,
        # pop the smallest element from the min-heap and push it onto the max-heap
        if len(self.min_heap) > len(self.max_heap):
            heapq.heappush(self.max_heap, -heapq.heappop(self.min_heap))

    def findMedian(self) -> float:
        # If the size of the max-heap is greater than the size of the min-heap,
        # the median is the largest element in the max-heap
        if len(self.max_heap) > len(self.min_heap):
            return -self.max_heap[0]
        # Otherwise, the median is the average of the largest element in the max-heap
        # and the smallest element in the min-heap
        return (-self.max_heap[0] + self.min_heap[0]) / 2`,
        timeComplexity: 'O(log n) for addNum, O(1) for findMedian',
        spaceComplexity: 'O(n)',
        explanation:
          'This solution uses two heaps to find the median of a data stream. The max-heap stores the lower half of the numbers, and the min-heap stores the upper half. The median is the largest element in the max-heap if the size of the max-heap is greater than the size of the min-heap, or the average of the largest element in the max-heap and the smallest element in the min-heap otherwise.',
      },
    ],
    'Use two heaps to find the median of a data stream.',
    'https://leetcode.com/problems/find-median-from-data-stream/',
  ),
  createProblem(
    'Sliding Window Maximum (Leetcode 239)',
    'Hard',
    'You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.',
    [
      {
        code: `from collections import deque

def maxSlidingWindow(nums, k):
    # Initialize a deque to store indices of elements
    dq = deque()
    # Initialize an empty list to store the maximum values
    max_values = []
    
    # Iterate through the array
    for i, num in enumerate(nums):
        # Remove elements from the deque that are out of the current window
        if dq and dq[0] == i - k:
            dq.popleft()
        # Remove elements from the deque that are smaller than the current element
        while dq and nums[dq[-1]] < num:
            dq.pop()
        # Add the current element's index to the deque
        dq.append(i)
        # If the current index is at least k - 1, add the maximum value to the result list
        if i >= k - 1:
            max_values.append(nums[dq[0]])
    
    return max_values`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(k)',
        explanation:
          'This solution uses a deque to store the indices of the elements in the current window. The deque is maintained such that the first element is always the maximum element in the current window. Elements are removed from the deque if they are out of the current window or if they are smaller than the current element.',
      },
    ],
    'Use a deque to maintain the maximum element in the current window.',
    'https://leetcode.com/problems/sliding-window-maximum/',
  ),
  createProblem(
    'K Closest Points to Origin (Leetcode 973)',
    'Medium',
    'Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0). The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).',
    [
      {
        code: `import heapq

def kClosest(points, k):
    # Initialize a max-heap
    max_heap = []
    
    # Iterate through the points
    for x, y in points:
        # Calculate the distance squared
        distance_squared = x * x + y * y
        # Push the negative distance squared and the point onto the heap
        heapq.heappush(max_heap, (-distance_squared, [x, y]))
        # If the heap size exceeds k, pop the largest element
        if len(max_heap) > k:
            heapq.heappop(max_heap)
    
    # Extract the k closest points from the heap
    result = [point for _, point in max_heap]
    return result`,
        timeComplexity: 'O(n log k)',
        spaceComplexity: 'O(k)',
        explanation:
          'This solution uses a max-heap to find the k closest points to the origin. It pushes the negative distance squared and the point onto the heap and pops the largest element if the heap size exceeds k.',
      },
    ],
    'Use a max-heap to find the k closest points to the origin.',
    'https://leetcode.com/problems/k-closest-points-to-origin/',
  ),
  createProblem(
    'Reorganize String (Leetcode 767)',
    'Medium',
    'Given a string s, rearrange the characters of s so that any two adjacent characters are not the same. Return any possible rearrangement of s or return "" if not possible.',
    [
      {
        code: `from collections import Counter
import heapq

def reorganizeString(s):
    # Count the frequency of each character
    frequency = Counter(s)
    
    # Initialize a max-heap
    max_heap = []
    
    # Push the frequency and character onto the heap
    for char, freq in frequency.items():
        heapq.heappush(max_heap, (-freq, char))
    
    # Initialize the result string
    result = []
    
    # While there are elements in the heap
    while max_heap:
        # Pop the character with the highest frequency
        freq, char = heapq.heappop(max_heap)
        # If the result is not empty and the last character in the result is the same as the current character,
        # pop the next character with the highest frequency
        if result and result[-1] == char:
            if not max_heap:
                return ""
            next_freq, next_char = heapq.heappop(max_heap)
            result.append(next_char)
            if next_freq < -1:
                heapq.heappush(max_heap, (next_freq + 1, next_char))
        # Append the current character to the result
        result.append(char)
        if freq < -1:
            heapq.heappush(max_heap, (freq + 1, char))
    
    return "".join(result)`,
        timeComplexity: 'O(n log n)',
        spaceComplexity: 'O(n)',
        explanation:
          'This solution uses a max-heap to rearrange the characters of the string. It pushes the frequency and character onto the heap and pops the character with the highest frequency. If the last character in the result is the same as the current character, it pops the next character with the highest frequency.',
      },
    ],
    'Use a max-heap to rearrange the characters of the string.',
    'https://leetcode.com/problems/reorganize-string/',
  ),
  createProblem(
    'Minimum Cost to Connect Sticks (Leetcode 1167)',
    'Medium',
    'You have some number of sticks with positive integer lengths. These lengths are given as an array sticks, where sticks[i] is the length of the ith stick. You can connect any two sticks of lengths x and y into one stick by paying a cost of x + y. You must connect all the sticks until there is only one stick remaining. Return the minimum cost to connect all the sticks.',
    [
      {
        code: `import heapq

def connectSticks(sticks):
    # Initialize a min-heap
    min_heap = sticks[:]
    heapq.heapify(min_heap)
    
    # Initialize the total cost
    total_cost = 0
    
    # While there are more than one stick in the heap
    while len(min_heap) > 1:
        # Pop the two smallest sticks
        first = heapq.heappop(min_heap)
        second = heapq.heappop(min_heap)
        # Calculate the cost to connect them
        cost = first + second
        # Add the cost to the total cost
        total_cost += cost
        # Push the connected stick back onto the heap
        heapq.heappush(min_heap, cost)
    
    return total_cost`,
        timeComplexity: 'O(n log n)',
        spaceComplexity: 'O(n)',
        explanation:
          'This solution uses a min-heap to connect the sticks with the minimum cost. It pops the two smallest sticks, calculates the cost to connect them, adds the cost to the total cost, and pushes the connected stick back onto the heap.',
      },
    ],
    'Use a min-heap to connect the sticks with the minimum cost.',
    'https://leetcode.com/problems/minimum-cost-to-connect-sticks/',
  ),
];
