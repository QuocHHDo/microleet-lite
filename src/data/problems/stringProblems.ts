import { Problem, createProblem } from '../../common/commonProblem';

export const stringProblems: Problem[] = [
  createProblem(
    'Valid Palindrome (LC-125)',
    'Easy',
    'Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.',
    [
      {
        code: `def is_palindrome(s: str) -> bool:
    # Convert the string to lowercase and remove non-alphanumeric characters
    s = ''.join(char.lower() for char in s if char.isalnum())
    
    # Check if the string is equal to its reverse
    return s == s[::-1]`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        explanation:
          'This solution converts the string to lowercase and removes non-alphanumeric characters. It then checks if the cleaned string is equal to its reverse.',
      },
      {
        code: `def is_palindrome(s: str) -> bool:
    # Initialize two pointers, one at the start and one at the end of the string
    left, right = 0, len(s) - 1
    
    while left < right:
        # Move the left pointer to the right until it points to an alphanumeric character
        while left < right and not s[left].isalnum():
            left += 1
        
        # Move the right pointer to the left until it points to an alphanumeric character
        while left < right and not s[right].isalnum():
            right -= 1
        
        # Compare the characters at the left and right pointers
        if s[left].lower() != s[right].lower():
            return False
        
        # Move the pointers towards the center
        left += 1
        right -= 1
    
    return True`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        explanation:
          'This solution uses two pointers to check characters from the start and end of the string. It skips non-alphanumeric characters and compares the remaining characters.',
      },
    ],
    'Use two pointers to check characters from both ends of the string.',
    'https://leetcode.com/problems/valid-palindrome/',
  ),
  createProblem(
    'Reverse String (LC-344)',
    'Easy',
    'Write a function that reverses a string. The input string is given as an array of characters.',
    [
      {
        code: `def reverse_string(s: List[str]) -> None:
    # Initialize two pointers, one at the start and one at the end of the string
    left, right = 0, len(s) - 1
    
    # Swap characters from both ends until the pointers meet
    while left < right:
        s[left], s[right] = s[right], s[left]
        left += 1
        right -= 1`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        explanation:
          'This solution uses two pointers to swap characters from the start and end of the string until the pointers meet.',
      },
      {
        code: `def reverse_string(s: List[str]) -> None:
    # Use Python's built-in reverse method
    s.reverse()`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        explanation:
          "This solution uses Python's built-in reverse method to reverse the string in place.",
      },
    ],
    'Use two pointers to swap characters from both ends of the string.',
    'https://leetcode.com/problems/reverse-string/',
  ),
  createProblem(
    'First Unique Character in a String (LC-387)',
    'Easy',
    'Given a string, find the first non-repeating character in it and return its index. If it does not exist, return -1.',
    [
      {
        code: `def first_uniq_char(s: str) -> int:
    # Create a dictionary to count the frequency of each character
    char_count = {}
    
    # Count the frequency of each character
    for char in s:
        if char in char_count:
            char_count[char] += 1
        else:
            char_count[char] = 1
    
    # Find the first character with a frequency of 1
    for i, char in enumerate(s):
        if char_count[char] == 1:
            return i
    
    return -1`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        explanation:
          'This solution uses a dictionary to count the frequency of each character. It then iterates through the string to find the first character with a frequency of 1.',
      },
      {
        code: `def first_uniq_char(s: str) -> int:
    # Use a set to track seen characters
    seen = set()
    
    # Iterate through the string
    for i, char in enumerate(s):
        # If the character is not in the set, check the rest of the string
        if char not in seen:
            seen.add(char)
            if s.count(char) == 1:
                return i
    
    return -1`,
        timeComplexity: 'O(n^2)',
        spaceComplexity: 'O(n)',
        explanation:
          'This solution uses a set to track seen characters. It checks the frequency of each character using the count method, which results in higher time complexity.',
      },
    ],
    'Use a dictionary to count the frequency of each character.',
    'https://leetcode.com/problems/first-unique-character-in-a-string/',
  ),
  createProblem(
    'Valid Anagram (LC-242)',
    'Easy',
    'Given two strings s and t, return true if t is an anagram of s, and false otherwise.',
    [
      {
        code: `def is_anagram(s: str, t: str) -> bool:
    # If the lengths of the strings are different, they cannot be anagrams
    if len(s) != len(t):
        return False
    
    # Create a dictionary to count the frequency of each character in s
    char_count = {}
    
    # Count the frequency of each character in s
    for char in s:
        if char in char_count:
            char_count[char] += 1
        else:
            char_count[char] = 1
    
    # Decrease the count for each character in t
    for char in t:
        if char in char_count:
            char_count[char] -= 1
            # If the count becomes negative, t has more of this character than s
            if char_count[char] < 0:
                return False
        else:
            # If the character is not in the dictionary, t has a character that s does not
            return False
    
    return True`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        explanation:
          'This solution uses a dictionary to count the frequency of each character in s. It then decreases the count for each character in t and checks if the counts match.',
      },
      {
        code: `def is_anagram(s: str, t: str) -> bool:
    # Sort both strings and compare them
    return sorted(s) == sorted(t)`,
        timeComplexity: 'O(n log n)',
        spaceComplexity: 'O(n)',
        explanation:
          'This solution sorts both strings and compares them. If they are equal, they are anagrams.',
      },
    ],
    'Use a dictionary to count the frequency of each character.',
    'https://leetcode.com/problems/valid-anagram/',
  ),
  createProblem(
    'Longest Substring Without Repeating Characters (LC-3)',
    'Medium',
    'Given a string, find the length of the longest substring without repeating characters.',
    [
      {
        code: `def length_of_longest_substring(s: str) -> int:
    # Initialize variables to track the longest substring and the current substring
    max_length = 0
    start = 0
    char_index_map = {}
    
    # Iterate through the string
    for i, char in enumerate(s):
        # If the character is already in the current substring, move the start pointer
        if char in char_index_map and char_index_map[char] >= start:
            start = char_index_map[char] + 1
        
        # Update the character's index in the map
        char_index_map[char] = i
        
        # Update the maximum length
        max_length = max(max_length, i - start + 1)
    
    return max_length`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(min(n, m))',
        explanation:
          'This solution uses a sliding window approach with a dictionary to track the last seen index of each character. It adjusts the window size to ensure no repeating characters.',
      },
      {
        code: `def length_of_longest_substring(s: str) -> int:
    # Initialize variables to track the longest substring and the current substring
    max_length = 0
    start = 0
    char_set = set()
    
    # Iterate through the string
    for i, char in enumerate(s):
        # If the character is already in the current substring, move the start pointer
        while char in char_set:
            char_set.remove(s[start])
            start += 1
        
        # Add the character to the set
        char_set.add(char)
        
        # Update the maximum length
        max_length = max(max_length, i - start + 1)
    
    return max_length`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(min(n, m))',
        explanation:
          'This solution uses a sliding window approach with a set to track characters in the current substring. It adjusts the window size to ensure no repeating characters.',
      },
    ],
    'Use a sliding window approach with a dictionary or set to track characters.',
    'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
  ),
  createProblem(
    'String to Integer (atoi) (LC-8)',
    'Medium',
    'Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.',
    [
      {
        code: `def my_atoi(s: str) -> int:
    # Remove leading whitespace
    s = s.lstrip()
    
    # Check for an empty string
    if not s:
        return 0
    
    # Initialize variables to track the sign and the result
    sign = 1
    result = 0
    index = 0
    
    # Check for a sign character
    if s[index] == '-' or s[index] == '+':
        sign = -1 if s[index] == '-' else 1
        index += 1
    
    # Process the digits
    while index < len(s) and s[index].isdigit():
        result = result * 10 + int(s[index])
        index += 1
    
    # Apply the sign
    result *= sign
    
    # Clamp the result to the 32-bit signed integer range
    result = max(min(result, 2**31 - 1), -2**31)
    
    return result`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        explanation:
          'This solution removes leading whitespace, checks for a sign character, and processes digits to form the integer. It clamps the result to the 32-bit signed integer range.',
      },
      {
        code: `def my_atoi(s: str) -> int:
    # Use regular expressions to extract the integer part
    import re
    match = re.match(r'^\\s*([+-]?\\d+)', s)
    
    if not match:
        return 0
    
    # Convert the matched string to an integer
    result = int(match.group(1))
    
    # Clamp the result to the 32-bit signed integer range
    result = max(min(result, 2**31 - 1), -2**31)
    
    return result`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        explanation:
          'This solution uses regular expressions to extract the integer part of the string. It then converts the matched string to an integer and clamps it to the 32-bit signed integer range.',
      },
    ],
    'Use regular expressions or manual processing to extract and convert the integer part of the string.',
    'https://leetcode.com/problems/string-to-integer-atoi/',
  ),
  createProblem(
    'Longest Palindromic Substring (LC-5)',
    'Medium',
    'Given a string s, return the longest palindromic substring in s.',
    [
      {
        code: `def longest_palindrome(s: str) -> str:
    def expand_around_center(left: int, right: int) -> str:
        # Expand around the center to find the longest palindrome
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return s[left + 1:right]
    
    # Initialize the longest palindrome
    longest = ""
    
    # Iterate through the string
    for i in range(len(s)):
        # Check for odd-length palindromes
        odd = expand_around_center(i, i)
        if len(odd) > len(longest):
            longest = odd
        
        # Check for even-length palindromes
        even = expand_around_center(i, i + 1)
        if len(even) > len(longest):
            longest = even
    
    return longest`,
        timeComplexity: 'O(n^2)',
        spaceComplexity: 'O(1)',
        explanation:
          'This solution uses a helper function to expand around each center of the string. It checks for both odd and even-length palindromes and keeps track of the longest one found.',
      },
      {
        code: `def longest_palindrome(s: str) -> str:
    # Reverse the string and find the longest common substring
    s_reversed = s[::-1]
    n = len(s)
    dp = [[0] * (n + 1) for _ in range(n + 1)]
    longest = 0
    end_index = 0
    
    for i in range(1, n + 1):
        for j in range(1, n + 1):
            if s[i - 1] == s_reversed[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
                if dp[i][j] > longest and i - dp[i][j] == n - j:
                    longest = dp[i][j]
                    end_index = i
    
    return s[end_index - longest:end_index]`,
        timeComplexity: 'O(n^2)',
        spaceComplexity: 'O(n^2)',
        explanation:
          'This solution uses dynamic programming to find the longest common substring between the original string and its reverse. It ensures the substring is a palindrome by checking the indices.',
      },
    ],
    'Use a helper function to expand around each center of the string.',
    'https://leetcode.com/problems/longest-palindromic-substring',
  ),
  createProblem(
    'Group Anagrams (LC-49)',
    'Medium',
    'Given an array of strings, group the anagrams together. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.',
    [
      {
        code: `def group_anagrams(strs: List[str]) -> List[List[str]]:
    # Create a dictionary to store groups of anagrams
    anagram_groups = {}
    
    # Iterate through each string in the input list
    for s in strs:
        # Sort the string to use it as a key in the dictionary
        sorted_str = ''.join(sorted(s))
        
        # If the sorted string is already a key, append the original string to the list
        if sorted_str in anagram_groups:
            anagram_groups[sorted_str].append(s)
        else:
            # Otherwise, create a new list with the original string
            anagram_groups[sorted_str] = [s]
    
    # Return the values of the dictionary as a list of lists
    return list(anagram_groups.values())`,
        timeComplexity: 'O(n * k log k)',
        spaceComplexity: 'O(n * k)',
        explanation:
          'This solution uses a dictionary to group anagrams. It sorts each string to use as a key and appends the original string to the corresponding list in the dictionary.',
      },
      {
        code: `def group_anagrams(strs: List[str]) -> List[List[str]]:
    # Create a dictionary to store groups of anagrams
    anagram_groups = {}
    
    # Iterate through each string in the input list
    for s in strs:
        # Use the frequency of characters as a key in the dictionary
        char_count = [0] * 26
        for char in s:
            char_count[ord(char) - ord('a')] += 1
        
        # Convert the list to a tuple to use as a key
        key = tuple(char_count)
        
        # If the key is already in the dictionary, append the original string to the list
        if key in anagram_groups:
            anagram_groups[key].append(s)
        else:
            # Otherwise, create a new list with the original string
            anagram_groups[key] = [s]
    
    # Return the values of the dictionary as a list of lists
    return list(anagram_groups.values())`,
        timeComplexity: 'O(n * k)',
        spaceComplexity: 'O(n * k)',
        explanation:
          'This solution uses a dictionary to group anagrams. It uses the frequency of characters as a key and appends the original string to the corresponding list in the dictionary.',
      },
    ],
    'Use a dictionary to group anagrams by sorting each string or using character frequency.',
    'https://leetcode.com/problems/group-anagrams/',
  ),
  createProblem(
    'Minimum Window Substring (LC-76)',
    'Hard',
    'Given two strings s and t, return the minimum window in s which will contain all the characters in t. If there is no such window in s that covers all characters in t, return the empty string.',
    [
      {
        code: `def min_window(s: str, t: str) -> str:
    from collections import Counter
    
    # Create a counter for the characters in t
    t_count = Counter(t)
    required = len(t_count)
    
    # Initialize variables to track the window
    formed = 0
    window_counts = {}
    ans = float("inf"), None, None
    
    # Initialize two pointers to represent the window
    left, right = 0, 0
    
    # Expand the window by moving the right pointer
    while right < len(s):
        char = s[right]
        window_counts[char] = window_counts.get(char, 0) + 1
        
        # If the frequency of the current character matches the required frequency, increment the formed count
        if char in t_count and window_counts[char] == t_count[char]:
            formed += 1
        
        # Try to contract the window by moving the left pointer
        while left <= right and formed == required:
            char = s[left]
            
            # Update the minimum window size
            if right - left + 1 < ans[0]:
                ans = (right - left + 1, left, right)
            
            # The character at the left pointer is no longer part of the window
            window_counts[char] -= 1
            if char in t_count and window_counts[char] < t_count[char]:
                formed -= 1
            
            # Move the left pointer to the right
            left += 1
        
        # Move the right pointer to the right
        right += 1
    
    # Return the minimum window substring
    return "" if ans[0] == float("inf") else s[ans[1]:ans[2] + 1]`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(k)',
        explanation:
          'This solution uses a sliding window approach with two pointers to find the minimum window substring. It uses a dictionary to count the frequency of characters in the current window and adjusts the window size to ensure it contains all characters in t.',
      },
      {
        code: `def min_window(s: str, t: str) -> str:
    from collections import Counter
    
    # Create a counter for the characters in t
    t_count = Counter(t)
    required = len(t_count)
    
    # Initialize variables to track the window
    formed = 0
    window_counts = {}
    ans = float("inf"), None, None
    
    # Initialize two pointers to represent the window
    left, right = 0, 0
    
    # Expand the window by moving the right pointer
    while right < len(s):
        char = s[right]
        window_counts[char] = window_counts.get(char, 0) + 1
        
        # If the frequency of the current character matches the required frequency, increment the formed count
        if char in t_count and window_counts[char] == t_count[char]:
            formed += 1
        
        # Try to contract the window by moving the left pointer
        while left <= right and formed == required:
            char = s[left]
            
            # Update the minimum window size
            if right - left + 1 < ans[0]:
                ans = (right - left + 1, left, right)
            
            # The character at the left pointer is no longer part of the window
            window_counts[char] -= 1
            if char in t_count and window_counts[char] < t_count[char]:
                formed -= 1
            
            # Move the left pointer to the right
            left += 1
        
        # Move the right pointer to the right
        right += 1
    
    # Return the minimum window substring
    return "" if ans[0] == float("inf") else s[ans[1]:ans[2] + 1]`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(k)',
        explanation:
          'This solution uses a sliding window approach with two pointers to find the minimum window substring. It uses a dictionary to count the frequency of characters in the current window and adjusts the window size to ensure it contains all characters in t.',
      },
    ],
    'Use a sliding window approach with two pointers to find the minimum window substring.',
    'https://leetcode.com/problems/minimum-window-substring/',
  ),
  createProblem(
    'Regular Expression Matching (LC-10)',
    'Hard',
    "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*'.",
    [
      {
        code: `def is_match(s: str, p: str) -> bool:
    # Create a 2D DP table to store the results of subproblems
    dp = [[False] * (len(p) + 1) for _ in range(len(s) + 1)]
    
    # Base case: an empty string and an empty pattern match
    dp[0][0] = True
    
    # Fill the first row of the DP table
    for j in range(1, len(p) + 1):
        if p[j - 1] == '*':
            dp[0][j] = dp[0][j - 2]
    
    # Fill the DP table
    for i in range(1, len(s) + 1):
        for j in range(1, len(p) + 1):
            if p[j - 1] == '.' or p[j - 1] == s[i - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            elif p[j - 1] == '*':
                dp[i][j] = dp[i][j - 2]
                if p[j - 2] == '.' or p[j - 2] == s[i - 1]:
                    dp[i][j] = dp[i][j] or dp[i - 1][j]
    
    return dp[len(s)][len(p)]`,
        timeComplexity: 'O(n * m)',
        spaceComplexity: 'O(n * m)',
        explanation:
          'This solution uses dynamic programming to solve the regular expression matching problem. It fills a 2D DP table where dp[i][j] represents whether the first i characters of s match the first j characters of p.',
      },
      {
        code: `def is_match(s: str, p: str) -> bool:
    # Base case: if the pattern is empty, the string must also be empty
    if not p:
        return not s
    
    # Check if the first character matches
    first_match = bool(s) and (p[0] == '.' or p[0] == s[0])
    
    # If the pattern has a '*', we need to consider two cases
    if len(p) >= 2 and p[1] == '*':
        # Case 1: '*' matches zero preceding elements
        # Case 2: '*' matches one or more preceding elements
        return (is_match(s, p[2:]) or (first_match and is_match(s[1:], p)))
    else:
        # If there is no '*', move to the next character in both string and pattern
        return first_match and is_match(s[1:], p[1:])`,
        timeComplexity: 'O(2^n)',
        spaceComplexity: 'O(n + m)',
        explanation:
          "This solution uses recursion to solve the regular expression matching problem. It handles the '*' character by considering two cases: matching zero or more preceding elements.",
      },
    ],
    'Use dynamic programming to solve the regular expression matching problem.',
    'https://leetcode.com/problems/regular-expression-matching/',
  ),
];
