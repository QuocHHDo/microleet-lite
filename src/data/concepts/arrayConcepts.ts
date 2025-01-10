import { Concept, createConcept, Difficulty } from '@/common/commonConcept';

export const arrayConcepts: Concept[] = [
  createConcept(
    1,
    'What is an Array? How does it differ from other data structures?',
    `
**Definition:** An array is a collection of elements, all of the same type, stored in contiguous memory locations.

**Basic Structure:** Arrays store elements in a linear fashion, allowing for efficient access to any element using an index.

**Example:**
\`\`\`python
my_array = [1, 2, 3, 4, 5]
\`\`\`

**Key Characteristics:**
- **Fixed Size:** Arrays have a fixed size, determined when they are created.
- **Random Access:** Access elements directly using their index with O(1) time complexity.
- **Contiguous Memory:** Elements are stored consecutively in memory, making access more efficient.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    2,
    'What are the advantages and disadvantages of using arrays?',
    `
<h2>Advantages:</h2>
<ul>
  <li><strong>Fast Access:</strong> Arrays allow for <strong>O(1) time complexity</strong> for accessing elements using their index.</li>
  <li><strong>Memory Efficiency:</strong> Elements are stored in <strong>contiguous memory locations</strong>, which can be more memory-efficient.</li>
  <li><strong>Simple Implementation:</strong> Arrays are straightforward to implement and use in most programming languages.</li>
</ul>

<h2>Disadvantages:</h2>
<ul>
  <li><strong>Fixed Size:</strong> Arrays have a <strong>fixed size</strong>, which can lead to wasted memory if the array is not fully utilized or insufficient memory if the array needs to grow.</li>
  <li><strong>Insertion and Deletion:</strong> Inserting or deleting elements in the middle of an array can be inefficient, requiring <strong>shifting of subsequent elements</strong>.</li>
  <li><strong>Memory Allocation:</strong> Dynamically resizing an array can be costly and may require <strong>copying elements to a new location</strong>.</li>
</ul>

**Example:**
\`\`\`python
# Fast access example
my_array = [1, 2, 3, 4, 5]
print(my_array[2])  # Output: 3

# Inefficient insertion example
my_array.insert(2, 10)  # Requires shifting elements
\`\`\`

**Key Points:**
- Arrays are ideal for scenarios where the size is known and access patterns are random.
- For dynamic data structures, other data structures like <strong>linked lists</strong> or <strong>dynamic arrays</strong> (e.g., Python's list) may be more suitable.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    3,
    'What is the time complexity of common operations on an array (access, insertion, deletion)?',
    `
**Time Complexity of Common Operations on Arrays:**
| Operation              | Complexity | Explanation                                                        |
|------------------------|------------|--------------------------------------------------------------------|
| **Access (by index)**  | O(1)       | Directly retrieves the element by its index.                       |
| **Insertion - Append** | O(1)*      | Appending at the end is typically O(1) amortized for dynamic arrays|
| **Insertion - Begin/Mid** | O(n)   | Requires shifting elements to make space.                           |
| **Deletion - End**     | O(1)       | Removing from the end just adjusts the size of the array.          |
| **Deletion - Begin/Mid** | O(n)    | Requires shifting elements to fill the gap.                         |

> *Amortized O(1) for dynamic arrays in many languages.

**Key Points:**
- Arrays are optimized for fast access but can be inefficient for insertions and deletions at the beginning or in the middle.
- Dynamic arrays (e.g., Python's list) handle resizing more efficiently with amortized O(1) append operations.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    4,
    'Explain the difference between static and dynamic arrays.',
    `
**Static Arrays:**
- **Fixed Size:** Static arrays have a fixed size, determined when they are created.
- **Memory Allocation:** Memory is allocated at the time of creation, and it cannot be changed.
- **Example:** In C, you might declare an array like this: \`int arr[10];\`

**Dynamic Arrays:**
- **Resizable:** Dynamic arrays can resize themselves as needed.
- **Memory Allocation:** Memory is allocated dynamically, and the array can grow or shrink as elements are added or removed.
- **Example:** In Python, a list is a dynamic array: \`my_list = [1, 2, 3]\` and you can append elements without worrying about the size.

**Key Points:**
- Static arrays are more memory-efficient but less flexible.
- Dynamic arrays are more flexible but may require more memory management.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    5,
    'What is the Two-Pointer Technique and how is it used in array problems?',
    `
**Definition:** The two-pointer technique uses two indices (or pointers) that traverse the array in a coordinated fashion to find a solution.

**Common Use Cases:**
- **Removing Duplicates:** Move one pointer ahead to find unique elements while another pointer marks the place to insert them.
- **Pair Sums/Sorting:** In a sorted array, one pointer starts at the beginning and another at the end to find pairs that meet a target condition.

**Example (removing duplicates in a sorted array):**
\`\`\`python
def remove_duplicates(nums):
    if not nums:
        return 0
    write_index = 1
    for i in range(1, len(nums)):
        if nums[i] != nums[i - 1]:
            nums[write_index] = nums[i]
            write_index += 1
    return write_index
\`\`\`

**Key Points:**
- Reduces potential time complexity compared to nested loops.
- Often used in tandem with sorting to simplify pointer movements.
    `,
    Difficulty.Intermediate,
  ),
  createConcept(
    6,
    'Explain the Sliding Window Technique for subarray problems.',
    `
**Definition:** The sliding window technique involves a window (subarray) defined by two pointers that move over the array to process parts of it incrementally.

**Common Use Cases:**
- **Finding Subarray Sums:** Keep track of the current sum while expanding or shrinking the window.
- **Longest or Shortest Substrings/Subarrays:** Move the right pointer to expand the window, and move the left pointer to shrink it based on specific conditions (e.g., sum exceeding a target).

**Example (finding maximum sum of a subarray of size k):**
\`\`\`python
def max_subarray_sum(nums, k):
    window_sum = sum(nums[:k])
    max_sum = window_sum
    for i in range(k, len(nums)):
        window_sum += nums[i] - nums[i - k]
        max_sum = max(max_sum, window_sum)
    return max_sum
\`\`\`

**Key Points:**
- Highly efficient for problems involving contiguous subarray searches.
- Avoids recomputing sums or metrics from scratch at each step by updating the window incrementally.
    `,
    Difficulty.Intermediate,
  ),
  createConcept(
    7,
    'What is a Prefix Sum array and how can it help in array queries?',
    `
**Definition:** A prefix sum array stores the cumulative sum of elements up to each index. This allows for quick range sum calculations.

**Example:**
\`\`\`python
def prefix_sum_array(nums):
    prefix = [0] * len(nums)
    prefix[0] = nums[0]
    for i in range(1, len(nums)):
        prefix[i] = prefix[i - 1] + nums[i]
    return prefix

def range_sum(prefix, left, right):
    if left == 0:
        return prefix[right]
    return prefix[right] - prefix[left - 1]
\`\`\`

**Key Points:**
- Computing range sums \`[l, r]\` becomes O(1) after an O(n) preprocessing step.
- Useful in subarray sum problems, cumulative metrics, and partial search optimizations.
    `,
    Difficulty.Intermediate,
  ),
  createConcept(
    8,
    'When and how do you apply Binary Search in arrays?',
    `
**Definition:** Binary search is used on sorted arrays to find an element (or boundary) in O(log n) time.

**Typical Scenarios:**
- **Finding a Target Element:** Repeatedly halve the search space until the target is found or the subarray becomes empty.
- **Finding Boundaries:** In “lower bound” or “upper bound” problems, binary search identifies the first or last position where a condition holds.

**Pseudocode (standard binary search):**
\`\`\`python
def binary_search(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
\`\`\`

**Key Points:**
- Array must be sorted, or a strategy must be in place for partial ordering.
- Commonly used in interview questions to achieve better than O(n) search time.
    `,
    Difficulty.Intermediate,
  ),
  createConcept(
    9,
    'What are in-place array operations, and why are they important?',
    `
**Definition:** In-place operations modify the array directly without using additional significant space.

**Common Examples:**
- **Reversing an Array:** Swap elements in-place using two pointers.
- **Rotating an Array:** Use reverse operations or modular arithmetic to minimize extra space.
- **Partitioning (e.g., QuickSort Partition):** Rearrange elements around a pivot index in-place.

**Example (in-place reversal):**
\`\`\`python
def reverse_array(nums):
    left, right = 0, len(nums) - 1
    while left < right:
        nums[left], nums[right] = nums[right], nums[left]
        left += 1
        right -= 1
\`\`\`

**Key Points:**
- Conserves memory and is often more efficient.
- Required by certain interview questions to prove understanding of space complexity.
    `,
    Difficulty.Intermediate,
  ),
];
