import { createProblem, Problem } from '@/common/commonProblem';

export const queueProblems: Problem[] = [
  createProblem(
    'Implement Queue using Stacks (Leetcode 232)',
    'Easy',
    'Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).',
    [
      {
        code: `class MyQueue:
    def __init__(self):
        # Initialize two stacks: one for pushing elements and one for popping elements
        self.push_stack = []
        self.pop_stack = []

    def push(self, x: int) -> None:
        # Push the element onto the push_stack
        self.push_stack.append(x)

    def pop(self) -> int:
        # If the pop_stack is empty, transfer elements from the push_stack
        self.peek()
        # Pop and return the top element from the pop_stack
        return self.pop_stack.pop()

    def peek(self) -> int:
        # If the pop_stack is empty, transfer elements from the push_stack
        if not self.pop_stack:
            while self.push_stack:
                self.pop_stack.append(self.push_stack.pop())
        # Return the top element from the pop_stack
        return self.pop_stack[-1]

    def empty(self) -> bool:
        # Check if both stacks are empty
        return not self.push_stack and not self.pop_stack`,
        timeComplexity: 'O(1) amortized for push, pop, and peek',
        spaceComplexity: 'O(n)',
        explanation:
          'This solution uses two stacks to implement a queue. The push_stack is used for enqueue operations, and the pop_stack is used for dequeue operations. Elements are transferred between the stacks as needed to maintain the FIFO order.',
      },
    ],
    'Use two stacks to implement a queue.',
    'https://leetcode.com/problems/implement-queue-using-stacks/',
  ),
  createProblem(
    'Number of Recent Calls (Leetcode 933)',
    'Easy',
    'You have a RecentCounter class which counts the number of recent requests within a certain time frame. Implement the RecentCounter class: RecentCounter() Initializes the counter with zero recent requests. int ping(int t) Adds a new request at time t, where t represents some time in milliseconds, and returns the number of requests that has happened in the past 3000 milliseconds (including the new request).',
    [
      {
        code: `from collections import deque

class RecentCounter:
    def __init__(self):
        # Initialize a deque to store the recent requests
        self.requests = deque()

    def ping(self, t: int) -> int:
        # Add the new request time to the deque
        self.requests.append(t)
        # Remove requests that are older than 3000 milliseconds
        while self.requests[0] < t - 3000:
            self.requests.popleft()
        # Return the number of recent requests
        return len(self.requests)`,
        timeComplexity: 'O(1) amortized',
        spaceComplexity: 'O(n)',
        explanation:
          'This solution uses a deque to store the recent requests. When a new request is added, it removes any requests that are older than 3000 milliseconds. The length of the deque represents the number of recent requests.',
      },
    ],
    'Use a deque to store recent requests and remove old requests as needed.',
    'https://leetcode.com/problems/number-of-recent-calls/',
  ),
  createProblem(
    'Design Circular Queue (Leetcode 622)',
    'Medium',
    'Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".',
    [
      {
        code: `class MyCircularQueue:
    def __init__(self, k: int):
        # Initialize the queue with a fixed size k
        self.queue = [None] * k
        self.head = 0
        self.tail = 0
        self.size = 0
        self.capacity = k

    def enQueue(self, value: int) -> bool:
        # Check if the queue is full
        if self.isFull():
            return False
        # Add the value to the tail of the queue
        self.queue[self.tail] = value
        self.tail = (self.tail + 1) % self.capacity
        self.size += 1
        return True

    def deQueue(self) -> bool:
        # Check if the queue is empty
        if self.isEmpty():
            return False
        # Remove the value from the head of the queue
        self.queue[self.head] = None
        self.head = (self.head + 1) % self.capacity
        self.size -= 1
        return True

    def Front(self) -> int:
        # Return the value at the head of the queue
        return -1 if self.isEmpty() else self.queue[self.head]

    def Rear(self) -> int:
        # Return the value at the tail of the queue
        return -1 if self.isEmpty() else self.queue[(self.tail - 1) % self.capacity]

    def isEmpty(self) -> bool:
        # Check if the queue is empty
        return self.size == 0

    def isFull(self) -> bool:
        # Check if the queue is full
        return self.size == self.capacity`,
        timeComplexity: 'O(1) for all operations',
        spaceComplexity: 'O(k)',
        explanation:
          'This solution implements a circular queue using an array. The head and tail pointers are used to keep track of the front and rear of the queue, and the size variable is used to track the number of elements in the queue.',
      },
    ],
    'Use an array and pointers to implement a circular queue.',
    'https://leetcode.com/problems/design-circular-queue/',
  ),
  createProblem(
    'Sliding Window Maximum (Leetcode 239)',
    'Hard',
    'You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.',
    [
      {
        code: `from collections import deque

def maxSlidingWindow(nums, k):
    # Initialize an empty deque to store indices of elements
    dq = deque()
    # Initialize an empty list to store the maximum values
    max_values = []
    
    # Iterate through each element in the array
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
    'Task Scheduler (Leetcode 621)',
    'Medium',
    'Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle. However, there is a non-negative integer n that represents the cooldown period between two same tasks (the same letter in the array), that is that there must be at least n units of time between any two same tasks. Return the least number of units of times that the CPU will take to finish all the given tasks.',
    [
      {
        code: `from collections import Counter, deque
import heapq

def leastInterval(tasks, n):
    # Count the frequency of each task
    task_count = Counter(tasks)
    # Initialize a max-heap to store the frequencies of the tasks
    max_heap = [-count for count in task_count.values()]
    heapq.heapify(max_heap)
    # Initialize a deque to store the tasks that are waiting for cooldown
    wait_queue = deque()
    # Initialize the time counter
    time = 0
    
    # While there are tasks in the max-heap or the wait_queue
    while max_heap or wait_queue:
        # If there are tasks in the max-heap, pop the task with the highest frequency
        if max_heap:
            current_task = heapq.heappop(max_heap)
            # If the task is not completed, add it to the wait_queue with the remaining cooldown time
            if current_task < -1:
                wait_queue.append((current_task + 1, time + n))
        # If there are tasks in the wait_queue and the cooldown time has passed, add them back to the max-heap
        if wait_queue and wait_queue[0][1] == time:
            heapq.heappush(max_heap, wait_queue.popleft()[0])
        # Increment the time counter
        time += 1
    
    return time`,
        timeComplexity: 'O(n log m)',
        spaceComplexity: 'O(m)',
        explanation:
          'This solution uses a max-heap to store the frequencies of the tasks and a deque to store the tasks that are waiting for cooldown. The max-heap ensures that the task with the highest frequency is always processed first, and the deque ensures that tasks are not processed again until their cooldown period has passed.',
      },
    ],
    'Use a max-heap and a deque to schedule tasks with a cooldown period.',
    'https://leetcode.com/problems/task-scheduler/',
  ),
  createProblem(
    'Design Snake Game (Leetcode 353)',
    'Medium',
    "Design a Snake game that is played on a device with screen size = width x height. The snake is initially positioned at the top left corner (0,0) with length = 1 unit. You are given a list of food's positions in row-column order. When a snake eats the food, its length and the game's score both increase by 1. Each food appears one by one on the screen. For example, the second food will not appear until the first food was eaten by the snake. When a food does appear on the screen, it is guaranteed that it will not appear on a block occupied by the snake.",
    [
      {
        code: `from collections import deque

class SnakeGame:
    def __init__(self, width: int, height: int, food: List[List[int]]):
        # Initialize the game with the given width, height, and food positions
        self.width = width
        self.height = height
        self.food = food
        self.food_index = 0
        # Initialize the snake with its initial position
        self.snake = deque([(0, 0)])
        self.snake_set = set([(0, 0)])
        self.direction_map = {
            'U': (-1, 0),
            'D': (1, 0),
            'L': (0, -1),
            'R': (0, 1)
        }

    def move(self, direction: str) -> int:
        # Get the new head position based on the direction
        head = self.snake[0]
        new_head = (head[0] + self.direction_map[direction][0], head[1] + self.direction_map[direction][1])
        
        # Check if the new head position is out of bounds
        if new_head[0] < 0 or new_head[0] >= self.height or new_head[1] < 0 or new_head[1] >= self.width:
            return -1
        
        # Check if the new head position collides with the snake's body
        if new_head in self.snake_set and new_head != self.snake[-1]:
            return -1
        
        # Check if the new head position is on a food position
        if self.food_index < len(self.food) and new_head == tuple(self.food[self.food_index]):
            self.food_index += 1
        else:
            # Remove the tail from the snake and the set
            tail = self.snake.pop()
            self.snake_set.remove(tail)
        
        # Add the new head to the snake and the set
        self.snake.appendleft(new_head)
        self.snake_set.add(new_head)
        
        # Return the current score
        return len(self.snake) - 1`,
        timeComplexity: 'O(1)',
        spaceComplexity: 'O(n)',
        explanation:
          "This solution uses a deque to represent the snake and a set to keep track of the snake's body positions. The deque allows efficient addition and removal of elements from both ends, and the set allows efficient collision detection.",
      },
    ],
    "Use a deque to represent the snake and a set to keep track of the snake's body positions.",
    'https://leetcode.com/problems/design-snake-game/',
  ),
];
