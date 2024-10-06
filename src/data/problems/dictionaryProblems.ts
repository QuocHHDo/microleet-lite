import { createProblem, Problem } from '@/common/commonProblem';

export const dictionaryProblems: Problem[] = [
  createProblem(
    'Two Sum (Leetcode 1)',
    'Easy',
    'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
    [
      {
        code: `def two_sum(nums, target):
    # Initialize an empty dictionary to store the complement of each number
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
    'Group Anagrams (Leetcode 49)',
    'Medium',
    'Given an array of strings strs, group the anagrams together. You can return the answer in any order.',
    [
      {
        code: `from collections import defaultdict

def group_anagrams(strs):
    # Initialize a defaultdict to store groups of anagrams
    anagram_groups = defaultdict(list)
    
    # Iterate through each string in the input list
    for s in strs:
        # Sort the string and use it as the key in the dictionary
        sorted_str = ''.join(sorted(s))
        # Append the original string to the list corresponding to the sorted string key
        anagram_groups[sorted_str].append(s)
    
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
        code: `from collections import Counter
import heapq

def top_k_frequent(nums, k):
    # Count the frequency of each number using Counter
    frequency = Counter(nums)
    
    # Use a min-heap to find the top k frequent elements
    min_heap = []
    for num, freq in frequency.items():
        heapq.heappush(min_heap, (freq, num))
        if len(min_heap) > k:
            heapq.heappop(min_heap)
    
    # Extract the top k frequent elements from the heap
    result = [num for freq, num in min_heap]
    return result`,
        timeComplexity: 'O(n log k)',
        spaceComplexity: 'O(n + k)',
        explanation:
          'This solution uses a dictionary to count frequencies and a min-heap to find the top k frequent elements.',
      },
    ],
    'Use a dictionary to count frequencies and a heap to find the top k frequent elements.',
    'https://leetcode.com/problems/top-k-frequent-elements/',
  ),
  createProblem(
    'Longest Substring Without Repeating Characters (Leetcode 3)',
    'Medium',
    'Given a string s, find the length of the longest substring without repeating characters.',
    [
      {
        code: `def length_of_longest_substring(s):
    # Initialize a dictionary to store the last seen index of each character
    char_index = {}
    # Initialize the start of the window and the maximum length
    start = 0
    max_length = 0
    
    # Iterate through the string with the end of the window
    for end in range(len(s)):
        # If the character is already seen and is within the current window
        if s[end] in char_index and char_index[s[end]] >= start:
            # Move the start of the window to the right of the last seen index of the character
            start = char_index[s[end]] + 1
        
        # Update the last seen index of the character
        char_index[s[end]] = end
        # Update the maximum length of the substring
        max_length = max(max_length, end - start + 1)
    
    return max_length`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(min(n, m))',
        explanation:
          'This solution uses a dictionary to store the last seen index of each character. It uses a sliding window approach to find the longest substring without repeating characters.',
      },
    ],
    'Use a dictionary to store the last seen index of each character and a sliding window approach to find the longest substring without repeating characters.',
    'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
  ),
  createProblem(
    'Subarray Sum Equals K (Leetcode 560)',
    'Medium',
    'Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.',
    [
      {
        code: `def subarray_sum(nums, k):
    # Initialize a dictionary to store the cumulative sum and its frequency
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
  createProblem(
    'Word Pattern (Leetcode 290)',
    'Easy',
    'Given a pattern and a string s, find if s follows the same pattern. Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.',
    [
      {
        code: `def word_pattern(pattern, s):
    # Split the string s into words
    words = s.split()
    
    # If the lengths of the pattern and the words are different, return False
    if len(pattern) != len(words):
        return False
    
    # Initialize dictionaries to map characters to words and vice versa
    char_to_word = {}
    word_to_char = {}
    
    # Iterate through the pattern and words simultaneously
    for char, word in zip(pattern, words):
        # If the character is already mapped to a different word, return False
        if char in char_to_word and char_to_word[char] != word:
            return False
        # If the word is already mapped to a different character, return False
        if word in word_to_char and word_to_char[word] != char:
            return False
        
        # Map the character to the word and the word to the character
        char_to_word[char] = word
        word_to_char[word] = char
    
    return True`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        explanation:
          'This solution uses two dictionaries to map characters to words and words to characters. It checks for a bijection between the pattern and the words.',
      },
    ],
    'Use two dictionaries to map characters to words and words to characters to check for a bijection.',
    'https://leetcode.com/problems/word-pattern/',
  ),
  createProblem(
    'Isomorphic Strings (Leetcode 205)',
    'Easy',
    'Given two strings s and t, determine if they are isomorphic. Two strings s and t are isomorphic if the characters in s can be replaced to get t. All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.',
    [
      {
        code: `def is_isomorphic(s, t):
    # If the lengths of the strings are different, they cannot be isomorphic
    if len(s) != len(t):
        return False
    
    # Initialize dictionaries to map characters from s to t and vice versa
    s_to_t = {}
    t_to_s = {}
    
    # Iterate through the strings simultaneously
    for char_s, char_t in zip(s, t):
        # If the character from s is already mapped to a different character in t, return False
        if char_s in s_to_t and s_to_t[char_s] != char_t:
            return False
        # If the character from t is already mapped to a different character in s, return False
        if char_t in t_to_s and t_to_s[char_t] != char_s:
            return False
        
        # Map the characters from s to t and t to s
        s_to_t[char_s] = char_t
        t_to_s[char_t] = char_s
    
    return True`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        explanation:
          'This solution uses two dictionaries to map characters from s to t and t to s. It checks for a bijection between the characters of the two strings.',
      },
    ],
    'Use two dictionaries to map characters from s to t and t to s to check for a bijection.',
    'https://leetcode.com/problems/isomorphic-strings/',
  ),
  createProblem(
    'First Unique Character in a String (Leetcode 387)',
    'Easy',
    'Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.',
    [
      {
        code: `from collections import Counter

def first_uniq_char(s):
    # Count the frequency of each character in the string
    char_count = Counter(s)
    
    # Iterate through the string to find the first character with a frequency of 1
    for i, char in enumerate(s):
        if char_count[char] == 1:
            return i
    
    # If no unique character is found, return -1
    return -1`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        explanation:
          'This solution uses a Counter to count the frequency of each character in the string. It then iterates through the string to find the first character with a frequency of 1.',
      },
    ],
    'Use a Counter to count the frequency of each character and find the first unique character.',
    'https://leetcode.com/problems/first-unique-character-in-a-string/',
  ),
  createProblem(
    'Intersection of Two Arrays II (Leetcode 350)',
    'Easy',
    'Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.',
    [
      {
        code: `from collections import Counter

def intersect(nums1, nums2):
    # Count the frequency of each number in both arrays
    count1 = Counter(nums1)
    count2 = Counter(nums2)
    
    # Initialize an empty list to store the intersection
    result = []
    
    # Iterate through the numbers in the first count dictionary
    for num in count1:
        # If the number is also in the second count dictionary, add the minimum count to the result
        if num in count2:
            result.extend([num] * min(count1[num], count2[num]))
    
    return result`,
        timeComplexity: 'O(n + m)',
        spaceComplexity: 'O(min(n, m))',
        explanation:
          'This solution uses two Counters to count the frequency of each number in both arrays. It then iterates through the numbers in the first count dictionary and adds the minimum count of each number to the result.',
      },
    ],
    'Use two Counters to count the frequency of each number and find the intersection.',
    'https://leetcode.com/problems/intersection-of-two-arrays-ii/',
  ),
];
