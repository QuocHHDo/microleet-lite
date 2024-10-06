import { createProblem, Problem } from '@/common/commonProblem';

export const setProblems: Problem[] = [
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
      {
        code: `def contains_duplicate_sort(nums):
    # Sort the array
    nums.sort()
    # Iterate through the array and check for consecutive duplicates
    for i in range(len(nums) - 1):
        if nums[i] == nums[i + 1]:
            return True
    # If no duplicates are found, return False
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
    'Intersection of Two Arrays (Leetcode 349)',
    'Easy',
    'Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.',
    [
      {
        code: `def intersection(nums1, nums2):
    # Convert both arrays to sets
    set1 = set(nums1)
    set2 = set(nums2)
    # Find the intersection of the two sets
    result = set1.intersection(set2)
    # Convert the result set back to a list and return
    return list(result)`,
        timeComplexity: 'O(n + m)',
        spaceComplexity: 'O(n + m)',
        explanation:
          'This solution converts both arrays to sets and finds the intersection using the built-in set method.',
      },
      {
        code: `def intersection_brute_force(nums1, nums2):
    # Create an empty set to store the result
    result = set()
    # Iterate through each number in the first array
    for num in nums1:
        # If the number is in the second array, add it to the result set
        if num in nums2:
            result.add(num)
    # Convert the result set back to a list and return
    return list(result)`,
        timeComplexity: 'O(n * m)',
        spaceComplexity: 'O(min(n, m))',
        explanation:
          'This brute force solution checks each number in the first array to see if it is in the second array.',
      },
    ],
    'Use sets to find the intersection of two arrays.',
    'https://leetcode.com/problems/intersection-of-two-arrays/',
  ),
  createProblem(
    'Happy Number (Leetcode 202)',
    'Easy',
    'Write an algorithm to determine if a number n is "happy". A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.',
    [
      {
        code: `def is_happy(n):
    # Create a set to store seen numbers
    seen = set()
    # Loop until the number becomes 1 or we detect a cycle
    while n != 1:
        # If the number is already seen, it means we are in a cycle
        if n in seen:
            return False
        # Add the number to the seen set
        seen.add(n)
        # Calculate the sum of the squares of the digits
        n = sum(int(digit) ** 2 for digit in str(n))
    # If the loop ends with n == 1, it is a happy number
    return True`,
        timeComplexity: 'O(log n)',
        spaceComplexity: 'O(log n)',
        explanation:
          'This solution uses a set to detect cycles in the number transformation process.',
      },
    ],
    'Use a set to detect cycles in the number transformation process.',
    'https://leetcode.com/problems/happy-number/',
  ),
  createProblem(
    'Single Number (Leetcode 136)',
    'Easy',
    'Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.',
    [
      {
        code: `def single_number(nums):
    # Create a set to store unique numbers
    num_set = set()
    # Iterate through each number in the array
    for num in nums:
        # If the number is already in the set, remove it
        if num in num_set:
            num_set.remove(num)
        # Otherwise, add the number to the set
        else:
            num_set.add(num)
    # The remaining number in the set is the single number
    return num_set.pop()`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        explanation:
          'This solution uses a set to store unique numbers and removes them when they appear twice, leaving the single number.',
      },
      {
        code: `def single_number_xor(nums):
    # Initialize the result to 0
    result = 0
    # XOR all numbers in the array
    for num in nums:
        result ^= num
    # The result will be the single number
    return result`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        explanation:
          'This solution uses the XOR operation to find the single number. XORing a number with itself results in 0, so the single number remains.',
      },
    ],
    'Use a set to track unique numbers or XOR operation to find the single number.',
    'https://leetcode.com/problems/single-number/',
  ),
  createProblem(
    'Longest Substring Without Repeating Characters (Leetcode 3)',
    'Medium',
    'Given a string s, find the length of the longest substring without repeating characters.',
    [
      {
        code: `def length_of_longest_substring(s):
    # Initialize the start of the window and the maximum length
    start = 0
    max_length = 0
    # Create a set to store characters in the current window
    char_set = set()
    # Iterate through the string with the end of the window
    for end in range(len(s)):
        # If the character is already in the set, move the start of the window
        while s[end] in char_set:
            char_set.remove(s[start])
            start += 1
        # Add the current character to the set
        char_set.add(s[end])
        # Update the maximum length of the substring
        max_length = max(max_length, end - start + 1)
    return max_length`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(min(n, m))',
        explanation:
          'This solution uses a sliding window approach with a set to find the longest substring without repeating characters.',
      },
    ],
    'Use a set to track characters in the current window and a sliding window approach to find the longest substring without repeating characters.',
    'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
  ),
  createProblem(
    'Find All Numbers Disappeared in an Array (Leetcode 448)',
    'Easy',
    'Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.',
    [
      {
        code: `def find_disappeared_numbers(nums):
    # Create a set from the input array
    num_set = set(nums)
    # Create a list to store the missing numbers
    missing_numbers = []
    # Iterate through the range [1, n]
    for num in range(1, len(nums) + 1):
        # If the number is not in the set, add it to the missing numbers list
        if num not in num_set:
            missing_numbers.append(num)
    return missing_numbers`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        explanation:
          'This solution uses a set to store the numbers in the input array and checks for missing numbers in the range [1, n].',
      },
    ],
    'Use a set to store the numbers in the input array and check for missing numbers in the range [1, n].',
    'https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/',
  ),
  createProblem(
    'Intersection of Two Arrays II (Leetcode 350)',
    'Easy',
    'Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.',
    [
      {
        code: `def intersect(nums1, nums2):
    # Create a dictionary to count the frequency of each number in nums1
    count_dict = {}
    for num in nums1:
        count_dict[num] = count_dict.get(num, 0) + 1
    # Create a list to store the result
    result = []
    # Iterate through each number in nums2
    for num in nums2:
        # If the number is in the dictionary and its count is greater than 0, add it to the result
        if count_dict.get(num, 0) > 0:
            result.append(num)
            # Decrease the count in the dictionary
            count_dict[num] -= 1
    return result`,
        timeComplexity: 'O(n + m)',
        spaceComplexity: 'O(min(n, m))',
        explanation:
          'This solution uses a dictionary to count the frequency of each number in nums1 and then iterates through nums2 to find the intersection.',
      },
    ],
    'Use a dictionary to count the frequency of each number in nums1 and then iterate through nums2 to find the intersection.',
    'https://leetcode.com/problems/intersection-of-two-arrays-ii/',
  ),
  createProblem(
    'First Unique Character in a String (Leetcode 387)',
    'Easy',
    'Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.',
    [
      {
        code: `def first_uniq_char(s):
    # Create a dictionary to count the frequency of each character
    char_count = {}
    for char in s:
        char_count[char] = char_count.get(char, 0) + 1
    # Iterate through the string to find the first character with a frequency of 1
    for i, char in enumerate(s):
        if char_count[char] == 1:
            return i
    # If no unique character is found, return -1
    return -1`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        explanation:
          'This solution uses a dictionary to count the frequency of each character in the string and then iterates through the string to find the first unique character.',
      },
    ],
    'Use a dictionary to count the frequency of each character and find the first unique character.',
    'https://leetcode.com/problems/first-unique-character-in-a-string/',
  ),
  createProblem(
    'Subarray Sum Equals K (Leetcode 560)',
    'Medium',
    'Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.',
    [
      {
        code: `def subarray_sum(nums, k):
    # Create a dictionary to store the cumulative sum and its frequency
    sum_count = {0: 1}
    # Initialize the cumulative sum and the count of subarrays
    cumulative_sum = 0
    count = 0
    # Iterate through the array
    for num in nums:
        # Update the cumulative sum
        cumulative_sum += num
        # If the difference between the cumulative sum and k is in the dictionary
        if cumulative_sum - k in sum_count:
            # Add the frequency of the difference to the count
            count += sum_count[cumulative_sum - k]
        # Update the frequency of the cumulative sum in the dictionary
        sum_count[cumulative_sum] = sum_count.get(cumulative_sum, 0) + 1
    return count`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        explanation:
          'This solution uses a dictionary to store the cumulative sum and its frequency. It checks if the difference between the cumulative sum and k is in the dictionary to find the subarrays with the sum equal to k.',
      },
    ],
    'Use a dictionary to store the cumulative sum and its frequency to find subarrays with the sum equal to k.',
    'https://leetcode.com/problems/subarray-sum-equals-k/',
  ),
];
