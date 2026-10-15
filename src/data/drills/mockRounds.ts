export interface ClarifyTopic {
  /** What a strong candidate would ask about. */
  question: string;
  /** Why the answer changes the solution. */
  why: string;
  /** Lowercase fragments; a user question containing any of them counts as asking about this. */
  keywords: string[];
}

export interface MockInfo {
  /** Visible examples shown during the coding phase. `input` is the argument list. */
  examples: { input: any[]; expected: any }[];
  clarify: ClarifyTopic[];
  /** The reference approach, revealed in the debrief. */
  approach: string;
  /** Accepted answers for complexity; the first is the one shown. */
  time: string[];
  space: string[];
  complexityNote?: string;
}

/** Keyed by EdgeDrill id: each mock round reuses that problem's reference solution and edge cases. */
export const MOCK_INFO: Record<string, MockInfo> = {
  'valid-parentheses': {
    examples: [
      { input: ['()[]{}'], expected: true },
      { input: ['(]'], expected: false },
    ],
    clarify: [
      { question: 'Can the string be empty?', why: 'Decides the answer for "" (true) and whether you may index s[0].', keywords: ['empty', 'blank', 'zero length', 'length 0'] },
      { question: 'Is the input only brackets, or can other characters appear?', why: 'Other characters would need to be skipped rather than pushed.', keywords: ['other char', 'only brackets', 'only contain', 'other symbol', 'letters', 'characters'] },
      { question: 'Must brackets match in type and nesting order, not just count?', why: 'Pins down that "([)]" is invalid.', keywords: ['order', 'nest', 'type', 'interleav', 'match'] },
      { question: 'How long can the input be?', why: 'Confirms an O(n) stack solution is fine.', keywords: ['how long', 'how large', 'how big', 'size', 'constraint', 'limit', 'max length'] },
    ],
    approach: 'Scan left to right. Push each opener on a stack. For a closer, the top of the stack must be its matching opener; pop it, otherwise return false. At the end the stack must be empty.',
    time: ['O(n)'],
    space: ['O(n)'],
  },
  'contains-duplicate': {
    examples: [
      { input: [[1, 2, 3, 1]], expected: true },
      { input: [[1, 2, 3, 4]], expected: false },
    ],
    clarify: [
      { question: 'Can the array be empty?', why: 'An empty array has no duplicates.', keywords: ['empty', 'zero element', 'no element'] },
      { question: 'Can values be negative or zero, and what is the value range?', why: 'Rules out using the value directly as an array index.', keywords: ['negative', 'range', 'zero', 'bound', 'integer'] },
      { question: 'Do I return a boolean, or which value is duplicated?', why: 'Changes what you need to track.', keywords: ['boolean', 'return', 'which', 'output', 'true or false'] },
      { question: 'May I modify or sort the input?', why: 'Sorting gives O(1) extra space at the cost of O(n log n) time.', keywords: ['modify', 'sort', 'in place', 'in-place', 'mutat'] },
    ],
    approach: 'Put elements in a hash set as you scan. If an element is already in the set, return true. If the scan finishes, return false. (Alternative: sort, then compare neighbors.)',
    time: ['O(n)'],
    space: ['O(n)'],
    complexityNote: 'Sorting instead gives O(n log n) time and O(1) extra space.',
  },
  'maximum-subarray': {
    examples: [
      { input: [[-2, 1, -3, 4, -1, 2, 1, -5, 4]], expected: 6 },
      { input: [[5, 4, -1, 7, 8]], expected: 23 },
    ],
    clarify: [
      { question: 'Can the array contain negative numbers?', why: 'With all-negative input the answer is the largest single element, not 0.', keywords: ['negative', 'positive', 'sign'] },
      { question: 'Can the array be empty, and must the subarray be non-empty?', why: 'Decides whether 0 is an allowed answer.', keywords: ['empty', 'non-empty', 'at least one', 'at least 1'] },
      { question: 'Does subarray mean contiguous (not subsequence)?', why: 'A subsequence version is a different, easier problem.', keywords: ['contiguous', 'subsequence', 'consecutive', 'adjacent'] },
      { question: 'How large can the array and the values be (overflow)?', why: 'Large sums may need care in some languages.', keywords: ['overflow', 'large', 'size', 'limit', 'bound', 'range', 'how big', 'how long'] },
    ],
    approach: "Kadane's algorithm: keep the best sum of a subarray ending at the current index (extend the previous one or restart here), and track the maximum seen. Initialize from the first element, not 0.",
    time: ['O(n)'],
    space: ['O(1)'],
  },
  'valid-palindrome': {
    examples: [
      { input: ['race a car'], expected: false },
      { input: ['madam'], expected: true },
    ],
    clarify: [
      { question: 'Is the comparison case-sensitive?', why: '"Aa" is only a palindrome if case is ignored.', keywords: ['case', 'upper', 'lower', 'capital'] },
      { question: 'What about spaces and punctuation: ignore them?', why: 'Decides whether pointers must skip characters.', keywords: ['punctuation', 'space', 'alphanumeric', 'special', 'non-letter', 'symbol', 'whitespace'] },
      { question: 'Can the string be empty, and is an empty string a palindrome?', why: 'The base case for your loop.', keywords: ['empty', 'blank'] },
      { question: 'ASCII only, or Unicode?', why: 'Unicode makes character comparison and case folding harder.', keywords: ['ascii', 'unicode', 'encoding', 'accent', 'non-english'] },
    ],
    approach: 'Two pointers from both ends. Skip non-alphanumeric characters, compare the lowercased characters, move inward. Any mismatch returns false; the pointers crossing returns true.',
    time: ['O(n)'],
    space: ['O(1)', 'O(n)'],
    complexityNote: 'O(1) with in-place pointers; O(n) if you build a cleaned copy first.',
  },
  'longest-substring': {
    examples: [
      { input: ['abcabcbb'], expected: 3 },
      { input: ['pwwkew'], expected: 3 },
    ],
    clarify: [
      { question: 'What characters can appear (ASCII, Unicode, case)?', why: 'Determines the size of any lookup table.', keywords: ['ascii', 'unicode', 'character set', 'charset', 'alphabet', 'letters', 'case', 'what characters', 'which characters'] },
      { question: 'Can the string be empty?', why: 'The answer should be 0.', keywords: ['empty', 'blank'] },
      { question: 'Do I return the length or the substring itself?', why: 'Returning the substring means tracking its start as well.', keywords: ['length', 'return', 'substring itself', 'output', 'actual substring'] },
      { question: 'How long can the string be?', why: 'Confirms a single-pass O(n) approach is needed.', keywords: ['how long', 'size', 'constraint', 'limit', 'how large', 'max'] },
    ],
    approach: 'Sliding window with a map from character to its last index. For each right index, if the character was last seen inside the window, move left to just past it (never backwards). Track the largest window.',
    time: ['O(n)'],
    space: ['O(min(n, k))', 'O(k)', 'O(n)', 'O(1)'],
    complexityNote: 'k is the alphabet size, so many people write O(1) or O(min(n, k)).',
  },
  'product-except-self': {
    examples: [
      { input: [[1, 2, 3, 4]], expected: [24, 12, 8, 6] },
      { input: [[2, 5, 1]], expected: [5, 2, 10] },
    ],
    clarify: [
      { question: 'Can the array contain zeros?', why: 'Zeros break the "total product divided by each element" shortcut.', keywords: ['zero'] },
      { question: 'May I use division?', why: 'Forbidding it forces the prefix/suffix approach.', keywords: ['division', 'divide'] },
      { question: 'Can numbers be negative, and could the product overflow?', why: 'Signs carry through; overflow bounds the integer type.', keywords: ['negative', 'overflow', 'range', 'large', 'bound', '32', 'integer'] },
      { question: 'What is the minimum length of the array?', why: 'A length-1 array has no "other" elements.', keywords: ['length', 'at least', 'minimum', 'single', 'one element', 'empty'] },
    ],
    approach: 'Two passes. First pass: out[i] = product of everything to the left of i. Second pass from the right: multiply out[i] by the running product of everything to the right. No division, so zeros are handled automatically.',
    time: ['O(n)'],
    space: ['O(1)', 'O(n)'],
    complexityNote: 'O(1) extra space if the output array is not counted.',
  },
  'coin-change': {
    examples: [
      { input: [[1, 2, 5], 11], expected: 3 },
      { input: [[1, 2, 5], 7], expected: 2 },
    ],
    clarify: [
      { question: 'Can each coin be used any number of times?', why: 'Unlimited reuse makes this unbounded knapsack; limited use is a different DP.', keywords: ['unlimited', 'reuse', 'infinite', 'as many', 'each coin', 'any number', 'multiple times', 'repeat'] },
      { question: 'What if the amount is 0?', why: 'The answer should be 0 coins, not -1.', keywords: ['amount 0', 'zero', 'amount is 0', 'amount of 0'] },
      { question: 'What do I return if the amount cannot be made?', why: 'Fixes the sentinel (-1) and the impossible path.', keywords: ['impossible', 'not possible', 'cannot', "can't", 'no way', 'no solution', 'unreachable', 'fail'] },
      { question: 'Are coin values positive, distinct and sorted?', why: 'Zero or negative coins would break the DP; sorting affects pruning.', keywords: ['positive', 'distinct', 'duplicate', 'unique', 'negative', 'sorted'] },
    ],
    approach: 'Bottom-up DP: dp[a] is the fewest coins for amount a, with dp[0] = 0 and everything else infinity. For each a and each coin c <= a, dp[a] = min(dp[a], dp[a - c] + 1). Return -1 if dp[amount] is still infinity. Greedy fails (coins [1, 3, 4], amount 6).',
    time: ['O(amount × coins)', 'O(amount*coins)', 'O(a*n)', 'O(n*m)', 'O(s*n)', 'O(amount*n)'],
    space: ['O(amount)', 'O(a)', 'O(s)'],
  },
  'first-unique-char': {
    examples: [
      { input: ['leetcode'], expected: 0 },
      { input: ['loveleetcode'], expected: 2 },
    ],
    clarify: [
      { question: 'Is the comparison case-sensitive?', why: '"a" and "A" are different characters unless told otherwise.', keywords: ['case', 'upper', 'lower'] },
      { question: 'Can the string be empty?', why: 'The answer should be -1.', keywords: ['empty', 'blank'] },
      { question: 'Do I return the index or the character?', why: 'Changes what the final scan returns.', keywords: ['index', 'return', 'which', 'output', 'position'] },
      { question: 'Which characters can appear (ASCII, lowercase only, Unicode)?', why: 'A fixed alphabet allows an array instead of a map.', keywords: ['ascii', 'unicode', 'lowercase', 'alphabet', 'letters', 'character set', 'charset', 'what characters', 'which characters'] },
    ],
    approach: 'Two passes. Count every character in a map. Then scan the string again and return the first index whose count is 1, or -1 if none.',
    time: ['O(n)'],
    space: ['O(1)', 'O(k)', 'O(n)'],
    complexityNote: 'Constant if the alphabet is fixed, otherwise O(k) for k distinct characters.',
  },
};
