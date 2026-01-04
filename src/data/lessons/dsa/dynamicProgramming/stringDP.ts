import { LessonContent } from '@/common/commonLesson';
import { Difficulty } from '@/common/commonConcept';


// SECTION 5: STRING DP PATTERNS
// ============================================================================

const palindromicSubstringsData: LessonContent = {
  title: 'Palindromic Substrings',
  content: `<div>
<h1>Palindromic Substrings: Counting and Finding</h1>

<p>Palindrome problems are classic string DP challenges. The key insight: a string is a palindrome if its first and last characters match AND the inner substring is a palindrome.</p>

<h2>Key Pattern</h2>

<p><strong>Recurrence:</strong> \`isPalindrome[i][j] = (s[i] == s[j]) AND isPalindrome[i+1][j-1]\`</p>

<h2>Count Palindromic Substrings (LeetCode 647)</h2>

\`\`\`python
def count_substrings(s: str) -> int:
    """
    Count all palindromic substrings.
    Time: O(n²), Space: O(n²)
    """
    n = len(s)
    dp = [[False] * n for _ in range(n)]
    count = 0

    # Every single character is a palindrome
    for i in range(n):
        dp[i][i] = True
        count += 1

    # Check length 2
    for i in range(n - 1):
        if s[i] == s[i + 1]:
            dp[i][i + 1] = True
            count += 1

    # Check length 3 and above
    for length in range(3, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            if s[i] == s[j] and dp[i + 1][j - 1]:
                dp[i][j] = True
                count += 1

    return count
\`\`\`

<h2>Expand Around Center Approach</h2>

<p>More space-efficient O(1) space solution:</p>

\`\`\`python
def count_substrings_optimized(s: str) -> int:
    """
    Expand around each center.
    Time: O(n²), Space: O(1)
    """
    def expand(left, right):
        count = 0
        while left >= 0 and right < len(s) and s[left] == s[right]:
            count += 1
            left -= 1
            right += 1
        return count

    total = 0
    for i in range(len(s)):
        # Odd length palindromes (center at i)
        total += expand(i, i)
        # Even length palindromes (center between i and i+1)
        total += expand(i, i + 1)

    return total
\`\`\`

</div>`,
  codeExample: `def count_substrings(s):
    """Count palindromic substrings - DP approach."""
    n = len(s)
    dp = [[False] * n for _ in range(n)]
    count = 0

    for i in range(n):
        dp[i][i] = True
        count += 1

    for i in range(n - 1):
        if s[i] == s[i + 1]:
            dp[i][i + 1] = True
            count += 1

    for length in range(3, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            if s[i] == s[j] and dp[i + 1][j - 1]:
                dp[i][j] = True
                count += 1

    return count`,
  exercises: [
    {
      prompt: 'Implement a function that counts all palindromic substrings in a given string using the DP approach.',
      initialCode: `def count_palindromic_substrings(s):
    """
    Count all palindromic substrings in string s.

    Args:
        s: Input string
    Returns:
        Number of palindromic substrings
    """
    # Your code here
    pass`,
      solution: `def count_palindromic_substrings(s):
    """Count palindromic substrings using DP."""
    if not s:
        return 0

    n = len(s)
    dp = [[False] * n for _ in range(n)]
    count = 0

    # Single characters
    for i in range(n):
        dp[i][i] = True
        count += 1

    # Length 2
    for i in range(n - 1):
        if s[i] == s[i + 1]:
            dp[i][i + 1] = True
            count += 1

    # Length 3+
    for length in range(3, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            if s[i] == s[j] and dp[i + 1][j - 1]:
                dp[i][j] = True
                count += 1

    return count`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Find the longest palindromic substring in a string using the expand-around-center approach.',
      initialCode: `def longest_palindrome(s):
    """
    Find the longest palindromic substring.

    Args:
        s: Input string
    Returns:
        The longest palindromic substring
    """
    # Your code here
    pass`,
      solution: `def longest_palindrome(s):
    """Find longest palindromic substring."""
    if not s:
        return ""

    def expand(left, right):
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return left + 1, right - 1

    start, end = 0, 0

    for i in range(len(s)):
        # Odd length
        l1, r1 = expand(i, i)
        # Even length
        l2, r2 = expand(i, i + 1)

        # Update if we found longer
        if r1 - l1 > end - start:
            start, end = l1, r1
        if r2 - l2 > end - start:
            start, end = l2, r2

    return s[start:end + 1]`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the key recurrence relation for checking if s[i..j] is a palindrome?',
      options: [
        's[i] == s[j]',
        's[i] == s[j] AND s[i+1..j-1] is palindrome',
        's[i] == s[j] OR s[i+1..j-1] is palindrome',
        'Compare s[i..j] with its reverse',
      ],
      correctAnswer: 1,
      explanations: [
        'Not sufficient - the inner substring must also be palindrome.',
        'Correct! A substring is palindrome if first and last chars match AND the inner part is also a palindrome.',
        'We need AND, not OR.',
        'This works but is not the DP recurrence.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the space complexity advantage of expand-around-center over DP?',
      options: [
        'Both use O(n²) space',
        'Expand uses O(1), DP uses O(n²)',
        'Expand uses O(n), DP uses O(n²)',
        'No difference in space complexity',
      ],
      correctAnswer: 1,
      explanations: [
        'Expand-around-center uses constant space!',
        'Correct! Expand-around-center only needs a few variables (O(1)), while DP needs 2D array (O(n²)).',
        'Expand uses O(1), not O(n).',
        'There is a significant difference!',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the difference between palindromic substring and palindromic subsequence?',
      options: [
        'Substring must be contiguous, subsequence can skip characters',
        'They are the same thing',
        'Subsequence must be contiguous, substring can skip',
        'Substring is always longer than subsequence',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct! Substring must use consecutive characters. Subsequence can pick characters from anywhere while maintaining order.',
        'They are fundamentally different!',
        'It\'s the opposite - substring is contiguous.',
        'Either can be longer depending on the string.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'Why do we check palindromes by increasing length (1, 2, 3, ...) in DP approach?',
      options: [
        'For better performance',
        'To ensure inner substrings are computed before outer ones',
        'To handle edge cases',
        'It doesn\'t matter what order',
      ],
      correctAnswer: 1,
      explanations: [
        'Order doesn\'t affect performance.',
        'Correct! We must compute dp[i+1][j-1] before dp[i][j]. Processing by increasing length ensures dependencies are already computed.',
        'Edge cases are handled separately.',
        'Order is critical for correctness!',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const longestPalindromicSubsequenceData: LessonContent = {
  title: 'Longest Palindromic Subsequence',
  content: `<div>
<h1>Longest Palindromic Subsequence (LPS)</h1>

<p>Find the longest subsequence that is a palindrome. This is different from longest palindromic substring (which must be contiguous).</p>

<h2>Problem (LeetCode 516)</h2>

<pre>
Input: "bbbab"
Output: 4 (subsequence "bbbb")

Input: "cbbd"
Output: 2 (subsequence "bb")
</pre>

<h2>Key Insight</h2>

<p>LPS of string s = LCS of s and reverse(s)! But we can solve it more directly:</p>

<h2>DP Solution</h2>

\`\`\`python
def longest_palindrome_subseq(s: str) -> int:
    """
    Longest palindromic subsequence.
    dp[i][j] = LPS length in s[i...j]

    Time: O(n²), Space: O(n²)
    """
    n = len(s)
    dp = [[0] * n for _ in range(n)]

    # Base case: single character
    for i in range(n):
        dp[i][i] = 1

    # Fill table
    for length in range(2, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1

            if s[i] == s[j]:
                # Characters match - add 2 to inner LPS
                dp[i][j] = dp[i + 1][j - 1] + 2
            else:
                # Take max of skipping either end
                dp[i][j] = max(dp[i + 1][j], dp[i][j - 1])

    return dp[0][n - 1]
\`\`\`

<h2>Minimum Insertions to Make Palindrome</h2>

<p>Related problem: Minimum insertions to make string a palindrome = n - LPS</p>

\`\`\`python
def min_insertions_for_palindrome(s):
    """Minimum insertions = length - LPS."""
    return len(s) - longest_palindrome_subseq(s)
\`\`\`

</div>`,
  codeExample: `def longest_palindrome_subseq(s):
    """Longest palindromic subsequence."""
    n = len(s)
    dp = [[0] * n for _ in range(n)]

    for i in range(n):
        dp[i][i] = 1

    for length in range(2, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            if s[i] == s[j]:
                dp[i][j] = dp[i + 1][j - 1] + 2
            else:
                dp[i][j] = max(dp[i + 1][j], dp[i][j - 1])

    return dp[0][n - 1]`,
  exercises: [
    {
      prompt: 'Implement a function to find the length of the longest palindromic subsequence in a string.',
      initialCode: `def longest_palindrome_subseq(s):
    """
    Find length of longest palindromic subsequence.

    Args:
        s: Input string
    Returns:
        Length of LPS
    """
    # Your code here
    pass`,
      solution: `def longest_palindrome_subseq(s):
    """Find LPS length using DP."""
    n = len(s)
    dp = [[0] * n for _ in range(n)]

    # Base case: single character
    for i in range(n):
        dp[i][i] = 1

    # Fill table
    for length in range(2, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            if s[i] == s[j]:
                dp[i][j] = dp[i + 1][j - 1] + 2
            else:
                dp[i][j] = max(dp[i + 1][j], dp[i][j - 1])

    return dp[0][n - 1]`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Find the minimum number of insertions needed to make a string a palindrome.',
      initialCode: `def min_insertions_palindrome(s):
    """
    Minimum insertions to make string palindrome.

    Args:
        s: Input string
    Returns:
        Minimum number of insertions needed
    """
    # Your code here
    pass`,
      solution: `def min_insertions_palindrome(s):
    """Minimum insertions = n - LPS."""
    def lps(s):
        n = len(s)
        dp = [[0] * n for _ in range(n)]

        for i in range(n):
            dp[i][i] = 1

        for length in range(2, n + 1):
            for i in range(n - length + 1):
                j = i + length - 1
                if s[i] == s[j]:
                    dp[i][j] = dp[i + 1][j - 1] + 2
                else:
                    dp[i][j] = max(dp[i + 1][j], dp[i][j - 1])

        return dp[0][n - 1]

    return len(s) - lps(s)`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What does dp[i][j] represent in Longest Palindromic Subsequence?',
      options: [
        'Whether s[i..j] is a palindrome',
        'Length of longest palindromic subsequence in s[i..j]',
        'Number of palindromes in s[i..j]',
        'The palindromic subsequence itself',
      ],
      correctAnswer: 1,
      explanations: [
        'We\'re computing length, not boolean.',
        'Correct! dp[i][j] stores the length of the longest palindromic subsequence in substring s[i..j].',
        'We\'re finding the longest one, not counting all.',
        'We store the length, not the actual subsequence.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'When s[i] == s[j], what is the recurrence for dp[i][j]?',
      options: [
        'dp[i][j] = max(dp[i+1][j], dp[i][j-1])',
        'dp[i][j] = dp[i+1][j-1] + 2',
        'dp[i][j] = dp[i+1][j-1] + 1',
        'dp[i][j] = 2',
      ],
      correctAnswer: 1,
      explanations: [
        'This is when characters don\'t match.',
        'Correct! When s[i] == s[j], we include both characters (add 2) plus the LPS of the inner substring.',
        'We add 2, not 1, since we include both matching characters.',
        'We also need to include the inner LPS.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'How is LPS related to Longest Common Subsequence (LCS)?',
      options: [
        'LPS = LCS of string and its reverse',
        'They are unrelated',
        'LPS is always longer than LCS',
        'LCS is a special case of LPS',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct! LPS can be computed as LCS(s, reverse(s)). A palindrome reads same forwards and backwards.',
        'They are closely related!',
        'Not always true.',
        'LPS is a special case that can be solved with LCS.',
      ],
      difficulty: Difficulty.Advanced,
    },
    {
      question: 'What is the relationship between minimum insertions to make a palindrome and LPS?',
      options: [
        'Minimum insertions = LPS',
        'Minimum insertions = n - LPS',
        'Minimum insertions = 2n - LPS',
        'No relationship',
      ],
      correctAnswer: 1,
      explanations: [
        'We need to insert characters that are missing from the palindrome.',
        'Correct! Characters already in LPS don\'t need insertion. We only insert n - LPS characters to complete the palindrome.',
        'This would be too many insertions.',
        'There is a direct relationship!',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const wordBreakData: LessonContent = {
  title: 'Word Break',
  content: `<div>
<h1>Word Break: Segment String into Dictionary Words</h1>

<p>Given a string and a dictionary, can we segment the string into space-separated dictionary words?</p>

<h2>Problem (LeetCode 139)</h2>

<pre>
s = "leetcode"
wordDict = ["leet", "code"]
Output: true (can be segmented as "leet code")

s = "applepenapple"
wordDict = ["apple", "pen"]
Output: true (can be segmented as "apple pen apple")

s = "catsandog"
wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false
</pre>

<h2>DP Solution</h2>

\`\`\`python
def word_break(s: str, wordDict: list[str]) -> bool:
    """
    Check if string can be segmented into dictionary words.
    dp[i] = True if s[0...i-1] can be segmented

    Time: O(n² * m) where m = avg word length
    Space: O(n)
    """
    n = len(s)
    word_set = set(wordDict)
    dp = [False] * (n + 1)
    dp[0] = True  # Empty string

    for i in range(1, n + 1):
        for j in range(i):
            # Check if s[0...j-1] can be segmented
            # AND s[j...i-1] is in dictionary
            if dp[j] and s[j:i] in word_set:
                dp[i] = True
                break

    return dp[n]
\`\`\`

<h2>Word Break II: Return All Segmentations</h2>

\`\`\`python
def word_break_ii(s: str, wordDict: list[str]) -> list[str]:
    """
    Return all possible segmentations.
    Uses memoization for efficiency.
    """
    word_set = set(wordDict)
    memo = {}

    def backtrack(start):
        if start in memo:
            return memo[start]

        if start == len(s):
            return [[]]

        results = []
        for end in range(start + 1, len(s) + 1):
            word = s[start:end]
            if word in word_set:
                for rest in backtrack(end):
                    results.append([word] + rest)

        memo[start] = results
        return results

    return [' '.join(words) for words in backtrack(0)]
\`\`\`

</div>`,
  codeExample: `def word_break(s, wordDict):
    """Word Break - DP solution."""
    n = len(s)
    word_set = set(wordDict)
    dp = [False] * (n + 1)
    dp[0] = True

    for i in range(1, n + 1):
        for j in range(i):
            if dp[j] and s[j:i] in word_set:
                dp[i] = True
                break

    return dp[n]`,
  exercises: [
    {
      prompt: 'Implement Word Break: determine if a string can be segmented into dictionary words.',
      initialCode: `def word_break(s, word_dict):
    """
    Check if string can be segmented into dictionary words.

    Args:
        s: Input string
        word_dict: List of dictionary words
    Returns:
        True if can be segmented, False otherwise
    """
    # Your code here
    pass`,
      solution: `def word_break(s, word_dict):
    """Word Break using DP."""
    n = len(s)
    word_set = set(word_dict)
    dp = [False] * (n + 1)
    dp[0] = True

    for i in range(1, n + 1):
        for j in range(i):
            if dp[j] and s[j:i] in word_set:
                dp[i] = True
                break

    return dp[n]`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement Word Break II: return all possible ways to segment the string.',
      initialCode: `def word_break_ii(s, word_dict):
    """
    Return all possible segmentations.

    Args:
        s: Input string
        word_dict: List of dictionary words
    Returns:
        List of all possible segmentations
    """
    # Your code here
    pass`,
      solution: `def word_break_ii(s, word_dict):
    """Word Break II with backtracking and memoization."""
    word_set = set(word_dict)
    memo = {}

    def backtrack(start):
        if start in memo:
            return memo[start]
        if start == len(s):
            return [[]]

        results = []
        for end in range(start + 1, len(s) + 1):
            word = s[start:end]
            if word in word_set:
                for rest in backtrack(end):
                    results.append([word] + rest)

        memo[start] = results
        return results

    return [' '.join(words) for words in backtrack(0)]`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'What does dp[i] represent in the Word Break problem?',
      options: [
        'The i-th word in the dictionary',
        'Whether s[0...i-1] can be segmented into dictionary words',
        'The number of ways to segment s[0...i-1]',
        'The longest word ending at position i',
      ],
      correctAnswer: 1,
      explanations: [
        'dp[i] is about the string, not dictionary.',
        'Correct! dp[i] = True if the substring s[0...i-1] can be segmented using dictionary words.',
        'We\'re checking possibility, not counting ways.',
        'We\'re checking segmentation, not finding words.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'Why do we convert wordDict to a set in the Word Break solution?',
      options: [
        'Sets use less memory',
        'For O(1) word lookup instead of O(n)',
        'To remove duplicate words',
        'It\'s not necessary',
      ],
      correctAnswer: 1,
      explanations: [
        'Sets may use more memory than lists.',
        'Correct! Converting to set gives O(1) average-case lookup. Using a list would be O(n) for each check.',
        'While sets remove duplicates, that\'s not the main reason.',
        'It\'s critical for performance!',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the time complexity of the DP Word Break solution?',
      options: [
        'O(n)',
        'O(n²)',
        'O(n² * m) where m is avg word length',
        'O(n * m) where m is number of words',
      ],
      correctAnswer: 2,
      explanations: [
        'We need nested loops.',
        'We also need to consider substring extraction.',
        'Correct! Nested loops give O(n²), and substring extraction s[j:i] takes O(m) average time.',
        'We iterate over all positions, not just dictionary words.',
      ],
      difficulty: Difficulty.Advanced,
    },
    {
      question: 'What is the main difference between Word Break I and Word Break II?',
      options: [
        'Word Break I uses DP, II uses backtracking',
        'Word Break I checks if segmentation exists, II returns all segmentations',
        'Word Break II is always faster',
        'They solve the same problem',
      ],
      correctAnswer: 1,
      explanations: [
        'Both can use DP, but II typically uses backtracking with memoization.',
        'Correct! Word Break I (LeetCode 139) is a decision problem (yes/no). Word Break II (LeetCode 140) enumerates all solutions.',
        'Word Break II is typically slower as it finds all solutions.',
        'They have different objectives!',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const longestIncreasingSubsequenceData: LessonContent = {
  title: 'Longest Increasing Subsequence (LIS)',
  content: `<div>
<h1>Longest Increasing Subsequence: A Classic DP Problem</h1>

<p>Find the length of the longest strictly increasing subsequence in an array. This is one of the most important DP patterns for coding interviews.</p>

<h2>Problem (LeetCode 300)</h2>

<pre>
Input: nums = [10,9,2,5,3,7,101,18]
Output: 4 (subsequence [2,3,7,101])

Input: nums = [0,1,0,3,2,3]
Output: 4 (subsequence [0,1,2,3])
</pre>

<h2>Solution 1: O(n²) Dynamic Programming</h2>

<p><strong>Key Insight:</strong> dp[i] = length of LIS ending at index i</p>

\`\`\`python
def length_of_LIS(nums: list[int]) -> int:
    """
    Find longest increasing subsequence length.
    dp[i] = longest LIS ending at nums[i]

    Time: O(n²), Space: O(n)
    """
    if not nums:
        return 0

    n = len(nums)
    dp = [1] * n  # Each element is an LIS of length 1

    for i in range(1, n):
        for j in range(i):
            # If nums[j] < nums[i], we can extend LIS ending at j
            if nums[j] < nums[i]:
                dp[i] = max(dp[i], dp[j] + 1)

    return max(dp)
\`\`\`

<h2>Solution 2: O(n log n) with Binary Search</h2>

<p>More efficient solution using patience sorting technique:</p>

\`\`\`python
from bisect import bisect_left

def length_of_LIS_optimized(nums: list[int]) -> int:
    """
    Optimized LIS using binary search.
    tails[i] = smallest tail element of all LIS of length i+1

    Time: O(n log n), Space: O(n)
    """
    if not nums:
        return 0

    tails = []

    for num in nums:
        # Find position where num should be inserted
        pos = bisect_left(tails, num)

        if pos == len(tails):
            # num is larger than all tails, extend LIS
            tails.append(num)
        else:
            # Replace to keep tails[pos] as small as possible
            tails[pos] = num

    return len(tails)
\`\`\`

<h2>Why Binary Search Works</h2>

<p>The <code>tails</code> array maintains the smallest possible tail for each LIS length:</p>

<ul>
  <li><strong>tails[0]</strong> = smallest tail of all LIS of length 1</li>
  <li><strong>tails[1]</strong> = smallest tail of all LIS of length 2</li>
  <li><strong>tails[i]</strong> = smallest tail of all LIS of length i+1</li>
</ul>

<p>The tails array is always sorted, allowing binary search!</p>

<h2>Related Problems</h2>

<table class="w-full border-collapse my-4">
  <thead>
    <tr class="bg-gray-200">
      <th class="border p-3">Problem</th>
      <th class="border p-3">Variation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border p-3">Longest Increasing Subsequence II</td>
      <td class="border p-3">With constraint on max difference</td>
    </tr>
    <tr class="bg-gray-50">
      <td class="border p-3">Number of LIS</td>
      <td class="border p-3">Count all LIS of max length</td>
    </tr>
    <tr>
      <td class="border p-3">Russian Doll Envelopes</td>
      <td class="border p-3">2D LIS problem</td>
    </tr>
    <tr class="bg-gray-50">
      <td class="border p-3">Max Length of Pair Chain</td>
      <td class="border p-3">LIS with pairs</td>
    </tr>
  </tbody>
</table>

<h2>Building the Actual Subsequence</h2>

\`\`\`python
def find_LIS(nums: list[int]) -> list[int]:
    """
    Return the actual LIS (not just length).
    """
    if not nums:
        return []

    n = len(nums)
    dp = [1] * n
    parent = [-1] * n

    for i in range(1, n):
        for j in range(i):
            if nums[j] < nums[i] and dp[j] + 1 > dp[i]:
                dp[i] = dp[j] + 1
                parent[i] = j

    # Find max length and its ending index
    max_len = max(dp)
    max_idx = dp.index(max_len)

    # Reconstruct LIS
    lis = []
    idx = max_idx
    while idx != -1:
        lis.append(nums[idx])
        idx = parent[idx]

    return lis[::-1]
\`\`\`

</div>`,
  codeExample: `# Longest Increasing Subsequence - O(n²) solution

def length_of_LIS(nums):
    """
    Find LIS length using DP.
    dp[i] = longest LIS ending at nums[i]
    """
    if not nums:
        return 0

    n = len(nums)
    dp = [1] * n

    for i in range(1, n):
        for j in range(i):
            if nums[j] < nums[i]:
                dp[i] = max(dp[i], dp[j] + 1)

    return max(dp)

# Example
nums = [10, 9, 2, 5, 3, 7, 101, 18]
print(length_of_LIS(nums))  # 4 (subsequence [2,3,7,101])

# O(n log n) solution
from bisect import bisect_left

def length_of_LIS_fast(nums):
    """Optimized LIS using binary search."""
    tails = []
    for num in nums:
        pos = bisect_left(tails, num)
        if pos == len(tails):
            tails.append(num)
        else:
            tails[pos] = num
    return len(tails)

print(length_of_LIS_fast(nums))  # 4`,
  exercises: [
    {
      prompt: 'Implement LIS using the O(n²) DP approach.',
      initialCode: `def length_of_LIS(nums):
    """
    Find length of longest increasing subsequence.

    Args:
        nums: List of integers
    Returns:
        Length of LIS
    """
    # Your code here
    pass`,
      solution: `def length_of_LIS(nums):
    """LIS using O(n²) DP."""
    if not nums:
        return 0

    n = len(nums)
    dp = [1] * n

    for i in range(1, n):
        for j in range(i):
            if nums[j] < nums[i]:
                dp[i] = max(dp[i], dp[j] + 1)

    return max(dp)`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement LIS using the O(n log n) approach with binary search.',
      initialCode: `def length_of_LIS_optimized(nums):
    """
    Find LIS length using binary search.

    Args:
        nums: List of integers
    Returns:
        Length of LIS
    """
    # Your code here
    pass`,
      solution: `from bisect import bisect_left

def length_of_LIS_optimized(nums):
    """LIS using O(n log n) with binary search."""
    if not nums:
        return 0

    tails = []

    for num in nums:
        pos = bisect_left(tails, num)
        if pos == len(tails):
            tails.append(num)
        else:
            tails[pos] = num

    return len(tails)`,
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Find the actual longest increasing subsequence (not just its length).',
      initialCode: `def find_LIS(nums):
    """
    Return the actual LIS.

    Args:
        nums: List of integers
    Returns:
        The LIS as a list
    """
    # Your code here
    pass`,
      solution: `def find_LIS(nums):
    """Return actual LIS using parent tracking."""
    if not nums:
        return []

    n = len(nums)
    dp = [1] * n
    parent = [-1] * n

    for i in range(1, n):
        for j in range(i):
            if nums[j] < nums[i] and dp[j] + 1 > dp[i]:
                dp[i] = dp[j] + 1
                parent[i] = j

    # Find max length and its ending index
    max_len = max(dp)
    max_idx = dp.index(max_len)

    # Reconstruct LIS
    lis = []
    idx = max_idx
    while idx != -1:
        lis.append(nums[idx])
        idx = parent[idx]

    return lis[::-1]`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'What does dp[i] represent in the O(n²) LIS algorithm?',
      options: [
        'The i-th element of the array',
        'Length of LIS ending at index i',
        'Length of LIS starting at index i',
        'Whether index i is in the LIS',
      ],
      correctAnswer: 1,
      explanations: [
        'dp[i] is about subsequence length, not array values.',
        'Correct! dp[i] = length of longest increasing subsequence that ends at nums[i].',
        'We track subsequences ending at i, not starting at i.',
        'We store length, not boolean membership.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What is the time complexity improvement of the binary search approach over standard DP?',
      options: [
        'O(n²) to O(n)',
        'O(n²) to O(n log n)',
        'O(n log n) to O(n)',
        'No improvement',
      ],
      correctAnswer: 1,
      explanations: [
        'Binary search doesn\'t eliminate the O(n) outer loop.',
        'Correct! Standard DP is O(n²) with nested loops. Binary search reduces inner operation to O(log n), giving O(n log n).',
        'Standard DP is O(n²), not O(n log n).',
        'There is a significant improvement!',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'In the O(n log n) solution, what does tails[i] represent?',
      options: [
        'The i-th element of the LIS',
        'Smallest tail element of all LIS of length i+1',
        'Length of LIS ending at index i',
        'The i-th smallest element',
      ],
      correctAnswer: 1,
      explanations: [
        'tails doesn\'t store the actual LIS.',
        'Correct! tails[i] = smallest possible tail element among all increasing subsequences of length i+1.',
        'That\'s what dp[i] represents in the O(n²) solution.',
        'tails is about LIS lengths, not element ordering.',
      ],
      difficulty: Difficulty.Advanced,
    },
    {
      question: 'Why is the tails array in the O(n log n) solution always sorted?',
      options: [
        'Because we sort it explicitly',
        'Because longer subsequences must have larger tail elements',
        'It\'s not always sorted',
        'Because we use binary search',
      ],
      correctAnswer: 1,
      explanations: [
        'We never explicitly sort tails.',
        'Correct! If we have a longer increasing subsequence, its tail must be >= the tail of any shorter increasing subsequence.',
        'It is always sorted by construction!',
        'We use binary search BECAUSE it\'s sorted, not the other way around.',
      ],
      difficulty: Difficulty.Advanced,
    },
  ],
};

// ============================================================================

export const stringDPLessons = {
  'palindromic-substrings': palindromicSubstringsData,
  'longest-palindromic-subsequence': longestPalindromicSubsequenceData,
  'longest-increasing-subsequence': longestIncreasingSubsequenceData,
  'word-break': wordBreakData,
};
