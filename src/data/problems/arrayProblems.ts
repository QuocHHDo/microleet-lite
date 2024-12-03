import { createProblem, Problem } from '@/common/commonProblem';

export const arrayProblems: Problem[] = [
  createProblem(
    'Two Sum (Leetcode 1)',
    'Easy',
    'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
    [
      {
        code: `def two_sum(nums, target):
    # Create a dictionary to store the complement of each number
    num_dict = {}
    # Iterate through the list of numbers with their indices
    for i, num in enumerate(nums):
        # Calculate the complement of the current number
        complement = target - num
        # Check if the complement is already in the dictionary
        if complement in num_dict:
            # If found, return the indices of the complement and the current number
            return [num_dict[complement], i]
        # Otherwise, store the current number and its index in the dictionary
        num_dict[num] = i
    # If no solution is found, return an empty list
    return []`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        explanation:
          'This solution uses a dictionary to store the complement of each number. It checks for the complement in a single pass, making the solution efficient.',
      },
    ],
    'Use a dictionary to store the complement of each number.',
    'https://leetcode.com/problems/two-sum/',
  ),
  createProblem(
    'Valid Anagram (Leetcode 242)',
    'Easy',
    'Given two strings s and t, return true if t is an anagram of s, and false otherwise.',
    [
      {
        code: `def is_anagram(s, t):
    # If the lengths of the strings are different, they cannot be anagrams
    if len(s) != len(t):
        return False
    # Initialize a dictionary to count the frequency of each character in s
    char_count = {}
    # Count the frequency of each character in s
    for char in s:
        char_count[char] = char_count.get(char, 0) + 1
    # Decrease the count for each character in t
    for char in t:
        # If the character is not in the dictionary or its count is zero, return False
        if char_count.get(char, 0) == 0:
            return False
        char_count[char] -= 1
    # If all characters have the same frequency, return True
    return True`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        explanation:
          'This solution uses a dictionary to count the frequency of each character in the first string and then checks the second string against this count.',
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
    # Create an empty set to store unique numbers
    num_set = set()
    # Iterate through each number in the array
    for num in nums:
        # If the number is already in the set, return True
        if num in num_set:
            return True
        # Otherwise, add the number to the set
        num_set.add(num)
    # If no duplicates are found, return False
    return False`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        explanation:
          'This solution uses a set to store unique numbers and checks for duplicates in a single pass.',
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
    # Initialize a dictionary to store groups of anagrams
    anagram_groups = {}
    # Iterate through each string in the input list
    for s in strs:
        # Sort the string and use it as the key in the dictionary
        sorted_str = ''.join(sorted(s))
        # Append the original string to the list corresponding to the sorted string key
        if sorted_str in anagram_groups:
            anagram_groups[sorted_str].append(s)
        else:
            anagram_groups[sorted_str] = [s]
    # Return the list of anagram groups
    return list(anagram_groups.values())`,
        timeComplexity: 'O(n * k log k)',
        spaceComplexity: 'O(n * k)',
        explanation:
          'This solution uses a dictionary to group anagrams by their sorted characters.',
      },
    ],
    'Use a dictionary to group strings by their sorted characters.',
    'https://leetcode.com/problems/group-anagrams/',
  ),
  createProblem(
    'Top K Frequent Elements (Leetcode 347)',
    'Medium',
    'Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.',
    [
      {
        code: `def top_k_frequent(nums, k):
    # Count the frequency of each number
    frequency = {}
    for num in nums:
        frequency[num] = frequency.get(num, 0) + 1
    # Use a list of tuples to store the numbers and their frequencies
    freq_list = [(freq, num) for num, freq in frequency.items()]
    # Sort the list by frequency in descending order
    freq_list.sort(reverse=True)
    # Extract the top k frequent elements
    result = [num for freq, num in freq_list[:k]]
    return result`,
        timeComplexity: 'O(n log n)',
        spaceComplexity: 'O(n)',
        explanation:
          'This solution uses a dictionary to count frequencies and a list of tuples to sort the numbers by their frequencies.',
      },
    ],
    'Use a dictionary to count frequencies and a list of tuples to sort the numbers by their frequencies.',
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
        # Encode the list of strings into a single string
        encoded_str = ''
        for s in strs:
            # Append the length of the string followed by a delimiter and the string itself
            encoded_str += str(len(s)) + '#' + s
        return encoded_str

    def decode(self, s):
        # Decode the encoded string back to the original list of strings
        decoded_strs = []
        i = 0
        while i < len(s):
            # Find the delimiter
            delimiter_index = s.find('#', i)
            # Get the length of the string
            length = int(s[i:delimiter_index])
            # Get the string
            decoded_strs.append(s[delimiter_index + 1:delimiter_index + 1 + length])
            # Move the index to the next string
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
    # Initialize the result array with 1s
    answer = [1] * n
    # Calculate the prefix products
    prefix_product = 1
    for i in range(n):
        answer[i] *= prefix_product
        prefix_product *= nums[i]
    # Calculate the suffix products
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
    # Convert the array to a set for O(1) lookups
    num_set = set(nums)
    longest_streak = 0
    # Iterate through each number in the set
    for num in num_set:
        # Only start counting if the number is the start of a sequence
        if num - 1 not in num_set:
            current_num = num
            current_streak = 1
            # Count the length of the consecutive sequence
            while current_num + 1 in num_set:
                current_num += 1
                current_streak += 1
            # Update the longest streak
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
