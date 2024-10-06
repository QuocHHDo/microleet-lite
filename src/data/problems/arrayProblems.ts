import { createProblem, Problem } from '@/common/commonProblem';

export const arrayProblems: Problem[] = [
  createProblem(
    'Two Sum (Leetcode 1)',
    'Easy',
    'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
    [
      {
        code: `def two_sum(nums, target):
    num_dict = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_dict:
            return [num_dict[complement], i]
        num_dict[num] = i
    return []`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        explanation:
          'This solution uses a hash map to store the complement of each number. It checks for the complement in a single pass, making the solution efficient.',
      },
      {
        code: `def two_sum_brute_force(nums, target):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
    return []`,
        timeComplexity: 'O(n^2)',
        spaceComplexity: 'O(1)',
        explanation:
          'This brute force solution checks every pair of numbers to find a match, resulting in higher time complexity.',
      },
    ],
    'Use a hash map to store the complement of each number.',
    'https://leetcode.com/problems/two-sum/',
  ),
  createProblem(
    'Valid Anagram (Leetcode 242)',
    'Easy',
    'Given two strings s and t, return true if t is an anagram of s, and false otherwise.',
    [
      {
        code: `def is_anagram(s, t):
    if len(s) != len(t):
        return False
    char_count = {}
    for char in s:
        char_count[char] = char_count.get(char, 0) + 1
    for char in t:
        if char_count.get(char, 0) == 0:
            return False
        char_count[char] -= 1
    return True`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        explanation:
          'This solution uses a hash map to count the frequency of each character in the first string and then checks the second string against this count.',
      },
      {
        code: `def is_anagram_sort(s, t):
    return sorted(s) == sorted(t)`,
        timeComplexity: 'O(n log n)',
        spaceComplexity: 'O(n)',
        explanation:
          'This solution sorts both strings and compares them. Sorting has a higher time complexity but is simple to implement.',
      },
    ],
    'Count the frequency of each character in both strings.',
    'https://leetcode.com/problems/valid-anagram/',
  ),
  createProblem(
    'Contains Duplicate (Leetcode 217)',
    'Easy',
    'Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.',
    [
      {
        code: `def contains_duplicate(nums):
    num_set = set()
    for num in nums:
        if num in num_set:
            return True
        num_set.add(num)
    return False`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        explanation:
          'This solution uses a set to store unique numbers and checks for duplicates in a single pass.',
      },
      {
        code: `def contains_duplicate_sort(nums):
    nums.sort()
    for i in range(len(nums) - 1):
        if nums[i] == nums[i + 1]:
            return True
    return False`,
        timeComplexity: 'O(n log n)',
        spaceComplexity: 'O(1)',
        explanation:
          'This solution sorts the array and then checks for consecutive duplicate numbers.',
      },
    ],
    'Use a set to track seen numbers.',
    'https://leetcode.com/problems/contains-duplicate/',
  ),
  createProblem(
    'Group Anagrams (Leetcode 49)',
    'Medium',
    'Given an array of strings strs, group the anagrams together. You can return the answer in any order.',
    [
      {
        code: `def group_anagrams(strs):
    anagram_groups = {}
    for s in strs:
        sorted_str = ''.join(sorted(s))
        if sorted_str in anagram_groups:
            anagram_groups[sorted_str].append(s)
        else:
            anagram_groups[sorted_str] = [s]
    return list(anagram_groups.values())`,
        timeComplexity: 'O(n * k log k)',
        spaceComplexity: 'O(n * k)',
        explanation:
          'This solution uses a dictionary to group anagrams by their sorted characters.',
      },
      {
        code: `def group_anagrams_count(strs):
    anagram_groups = {}
    for s in strs:
        count = [0] * 26
        for char in s:
            count[ord(char) - ord('a')] += 1
        count_tuple = tuple(count)
        if count_tuple in anagram_groups:
            anagram_groups[count_tuple].append(s)
        else:
            anagram_groups[count_tuple] = [s]
    return list(anagram_groups.values())`,
        timeComplexity: 'O(n * k)',
        spaceComplexity: 'O(n * k)',
        explanation:
          'This solution uses a dictionary to group anagrams by their character counts.',
      },
    ],
    'Use a dictionary to group strings by their sorted characters or character counts.',
    'https://leetcode.com/problems/group-anagrams/',
  ),
  createProblem(
    'Top K Frequent Elements (Leetcode 347)',
    'Medium',
    'Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.',
    [
      {
        code: `def top_k_frequent(nums, k):
    frequency = {}
    for num in nums:
        frequency[num] = frequency.get(num, 0) + 1
    buckets = [[] for _ in range(len(nums) + 1)]
    for num, freq in frequency.items():
        buckets[freq].append(num)
    result = []
    for i in range(len(buckets) - 1, 0, -1):
        for num in buckets[i]:
            result.append(num)
            if len(result) == k:
                return result`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        explanation:
          'This solution uses a dictionary to count frequencies and bucket sort to find the top k frequent elements.',
      },
      {
        code: `def top_k_frequent_heap(nums, k):
    frequency = {}
    for num in nums:
        frequency[num] = frequency.get(num, 0) + 1
    min_heap = []
    for num, freq in frequency.items():
        heapq.heappush(min_heap, (freq, num))
        if len(min_heap) > k:
            heapq.heappop(min_heap)
    result = [num for freq, num in min_heap]
    return result`,
        timeComplexity: 'O(n log k)',
        spaceComplexity: 'O(n + k)',
        explanation:
          'This solution uses a dictionary to count frequencies and a min-heap to find the top k frequent elements.',
      },
    ],
    'Use a dictionary to count frequencies and a heap or bucket sort to find the top k frequent elements.',
    'https://leetcode.com/problems/top-k-frequent-elements/',
  ),
  createProblem(
    'Encode and Decode Strings (Leetcode 271)',
    'Medium',
    'Design an algorithm to encode a list of strings to a string and decode the string back to the original list of strings. The encoded string should be as compact as possible.',
    [
      {
        code: `class Codec:
    def encode(self, strs):
        encoded_str = ''
        for s in strs:
            encoded_str += str(len(s)) + '#' + s
        return encoded_str

    def decode(self, s):
        decoded_strs = []
        i = 0
        while i < len(s):
            delimiter_index = s.find('#', i)
            length = int(s[i:delimiter_index])
            decoded_strs.append(s[delimiter_index + 1:delimiter_index + 1 + length])
            i = delimiter_index + 1 + length
        return decoded_strs`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        explanation:
          'This solution encodes the list of strings into a single string by appending the length of each string followed by a delimiter and the string itself.',
      },
    ],
    'Use a delimiter to separate the length of each string from the string itself.',
    'https://leetcode.com/problems/encode-and-decode-strings/',
  ),
  createProblem(
    'Product of Array Except Self (Leetcode 238)',
    'Medium',
    'Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer. You must write an algorithm that runs in O(n) time and without using the division operation.',
    [
      {
        code: `def product_except_self(nums):
    n = len(nums)
    answer = [1] * n
    prefix_product = 1
    for i in range(n):
        answer[i] *= prefix_product
        prefix_product *= nums[i]
    suffix_product = 1
    for i in range(n - 1, -1, -1):
        answer[i] *= suffix_product
        suffix_product *= nums[i]
    return answer`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        explanation:
          'This solution uses two passes to calculate the product of all elements except the current one by using prefix and suffix products.',
      },
    ],
    'Use prefix and suffix products to avoid using the division operation.',
    'https://leetcode.com/problems/product-of-array-except-self/',
  ),
  createProblem(
    'Longest Consecutive Sequence (Leetcode 128)',
    'Medium',
    'Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in O(n) time.',
    [
      {
        code: `def longest_consecutive(nums):
    if not nums:
        return 0
    num_set = set(nums)
    longest_streak = 0
    for num in num_set:
        if num - 1 not in num_set:
            current_num = num
            current_streak = 1
            while current_num + 1 in num_set:
                current_num += 1
                current_streak += 1
            longest_streak = max(longest_streak, current_streak)
    return longest_streak`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        explanation:
          'This solution uses a set to store the numbers for O(1) lookups and only starts counting the length of a consecutive sequence if the current number is the start of a sequence.',
      },
    ],
    'Use a set to achieve O(1) lookups and only start counting sequences from the smallest number in each sequence.',
    'https://leetcode.com/problems/longest-consecutive-sequence/',
  ),
];
