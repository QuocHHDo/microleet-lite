export interface EdgeCategory {
  id: string;
  label: string;
  /** Why interviewers care: the bug this case catches. */
  why: string;
  /**
   * Does a user test exercise this category? `answer` is the reference solution's output for
   * `args`, so categories can depend on the result (e.g. "the answer is -1").
   */
  covers: (args: any[], answer: any) => boolean;
  /** A concrete test the user could have written. `input` is the argument list. */
  hidden: { input: any[]; expected: any };
}

export interface EdgeDrill {
  id: string;
  title: string;
  statement: string;
  signature: string;
  entryPoint: string;
  /** Example of the argument-list format, shown to the user. */
  inputExample: string;
  /** Trusted JS reference solution used to check the user's expected outputs. */
  reference: string;
  categories: EdgeCategory[];
}

const OPENERS = '([{';
const CLOSERS = ')]}';
const distinctBrackets = (s: string) => new Set(String(s).split("").filter((c) => OPENERS.includes(c) || CLOSERS.includes(c)).map((c) => OPENERS.indexOf(c) >= 0 ? OPENERS.indexOf(c) : CLOSERS.indexOf(c))).size;

const allEqual = (xs: any[]) => xs.every((x) => x === xs[0]);
const allDistinct = (xs: any[]) => new Set(xs).size === xs.length;

export const EDGE_DRILLS: EdgeDrill[] = [
  {
    id: 'valid-parentheses',
    title: 'Valid Parentheses',
    statement:
      'Given a string s of only the characters ( ) [ ] { }, return true if every bracket is closed by the same type in the correct order. s may be empty.',
    signature: 'isValid(s: string): boolean',
    entryPoint: 'isValid',
    inputExample: '["()[]{}"]',
    reference: `function isValid(s){const st=[];const m={')':'(',']':'[','}':'{'};for(const c of s){if(c in m){if(st.pop()!==m[c])return false}else st.push(c)}return st.length===0}`,
    categories: [
      { id: 'empty', label: 'Empty string', why: 'Code that reads s[0] or assumes at least one bracket crashes or answers wrong.', covers: ([s]) => s === '', hidden: { input: [''], expected: true } },
      { id: 'single', label: 'Single bracket', why: 'A lone opener must leave the stack non-empty, so the answer is false.', covers: ([s]) => s.length === 1, hidden: { input: ['('], expected: false } },
      { id: 'closer-first', label: 'Starts with a closing bracket', why: 'Popping an empty stack is the classic crash or false positive.', covers: ([s]) => s.length > 0 && CLOSERS.includes(s[0]), hidden: { input: [')('], expected: false } },
      { id: 'only-openers', label: 'Only opening brackets', why: 'Everything matched so far but the stack is not empty at the end.', covers: ([s]) => s.length > 0 && String(s).split("").every((c) => OPENERS.includes(c)), hidden: { input: ['(['], expected: false } },
      { id: 'mismatched-types', label: 'Mismatched bracket types', why: 'Counting brackets instead of tracking order and type passes the easy tests and fails here.', covers: ([s], a) => a === false && distinctBrackets(s) >= 2, hidden: { input: ['([)]'], expected: false } },
      { id: 'nested-valid', label: 'Valid nesting across types', why: 'Confirms you do not only handle flat sequences like "()[]".', covers: ([s], a) => a === true && s.length >= 4 && distinctBrackets(s) >= 2, hidden: { input: ['{[()]}'], expected: true } },
    ],
  },
  {
    id: 'contains-duplicate',
    title: 'Contains Duplicate',
    statement: 'Given an integer array nums (possibly empty), return true if any value appears at least twice, otherwise false.',
    signature: 'containsDuplicate(nums: number[]): boolean',
    entryPoint: 'containsDuplicate',
    inputExample: '[[1, 2, 3, 1]]',
    reference: `function containsDuplicate(nums){return new Set(nums).size!==nums.length}`,
    categories: [
      { id: 'empty', label: 'Empty array', why: 'Nothing can repeat; the answer is false, and indexing nums[0] would break.', covers: ([n]) => n.length === 0, hidden: { input: [[]], expected: false } },
      { id: 'single', label: 'Single element', why: 'One element cannot repeat, which off-by-one loops often get wrong.', covers: ([n]) => n.length === 1, hidden: { input: [[1]], expected: false } },
      { id: 'adjacent', label: 'Duplicates next to each other', why: 'The simplest duplicate; catches loops that skip neighbors.', covers: ([n]) => n.some((x: number, i: number) => i > 0 && x === n[i - 1]), hidden: { input: [[1, 1]], expected: true } },
      { id: 'far-apart', label: 'Duplicates far apart', why: 'Catches solutions that only compare neighbors.', covers: ([n]) => n.some((x: number, i: number) => n.indexOf(x) !== i && i - n.indexOf(x) >= 2), hidden: { input: [[1, 2, 3, 1]], expected: true } },
      { id: 'all-same', label: 'All elements equal', why: 'A value repeated many times; tests that you stop correctly and do not double count.', covers: ([n]) => n.length >= 3 && allEqual(n), hidden: { input: [[7, 7, 7]], expected: true } },
      { id: 'negatives-zero', label: 'Negative numbers or zero', why: 'Solutions using the value as an array index or a falsy check break here.', covers: ([n]) => n.some((x: number) => x <= 0), hidden: { input: [[-1, 0, -1]], expected: true } },
      { id: 'all-distinct', label: 'Longer array, all distinct', why: 'The "no" case at realistic size; guards against always returning true.', covers: ([n]) => n.length >= 5 && allDistinct(n), hidden: { input: [[1, 2, 3, 4, 5]], expected: false } },
    ],
  },
  {
    id: 'maximum-subarray',
    title: 'Maximum Subarray',
    statement: 'Given a non-empty integer array nums, return the largest sum of any contiguous (non-empty) subarray.',
    signature: 'maxSubArray(nums: number[]): number',
    entryPoint: 'maxSubArray',
    inputExample: '[[-2, 1, -3, 4]]',
    reference: `function maxSubArray(nums){let cur=nums[0],best=nums[0];for(let i=1;i<nums.length;i++){cur=Math.max(nums[i],cur+nums[i]);best=Math.max(best,cur)}return best}`,
    categories: [
      { id: 'single', label: 'Single element', why: 'Loops that start at index 1 or assume a pair need this to behave.', covers: ([n]) => n.length === 1, hidden: { input: [[-3]], expected: -3 } },
      { id: 'all-negative', label: 'All numbers negative', why: 'Initializing best = 0 returns 0, but the subarray must be non-empty. The answer is the largest single element.', covers: ([n]) => n.length >= 2 && n.every((x: number) => x < 0), hidden: { input: [[-3, -1, -2]], expected: -1 } },
      { id: 'all-positive', label: 'All numbers positive', why: 'The best subarray is the whole array; catches premature resets.', covers: ([n]) => n.length >= 2 && n.every((x: number) => x > 0), hidden: { input: [[1, 2, 3]], expected: 6 } },
      { id: 'zeros', label: 'Contains zeros', why: 'Zeros neither help nor hurt; checks your comparisons are not strict in the wrong place.', covers: ([n]) => n.includes(0), hidden: { input: [[0, -1, 0]], expected: 0 } },
      { id: 'negative-ends', label: 'Negative at both ends, positives inside', why: 'The best run must start and end in the middle; catches solutions that anchor to the array ends.', covers: ([n]) => n.length >= 3 && n[0] < 0 && n[n.length - 1] < 0 && n.some((x: number) => x > 0), hidden: { input: [[-2, 1, -3, 4, -1, 2, 1, -5]], expected: 6 } },
    ],
  },
  {
    id: 'valid-palindrome',
    title: 'Valid Palindrome',
    statement:
      'Given a string s, return true if it reads the same forwards and backwards after lowercasing it and removing every character that is not a letter or digit. s may be empty.',
    signature: 'isPalindrome(s: string): boolean',
    entryPoint: 'isPalindrome',
    inputExample: '["A man, a plan, a canal: Panama"]',
    reference: `function isPalindrome(s){const t=s.toLowerCase().replace(/[^a-z0-9]/g,'');let i=0,j=t.length-1;while(i<j){if(t[i++]!==t[j--])return false}return true}`,
    categories: [
      { id: 'empty', label: 'Empty string', why: 'An empty string is a palindrome; confirms your two pointers never cross badly.', covers: ([s]) => s === '', hidden: { input: [''], expected: true } },
      { id: 'single', label: 'Single character', why: 'The pointers start equal; makes sure you do not compare a character with itself wrongly.', covers: ([s]) => s.length === 1, hidden: { input: ['a'], expected: true } },
      { id: 'only-symbols', label: 'Only punctuation or spaces', why: 'After cleaning nothing is left, so it is a palindrome; naive pointer loops walk off the string.', covers: ([s]) => s.length > 0 && !/[a-zA-Z0-9]/.test(s), hidden: { input: ['.,'], expected: true } },
      { id: 'mixed-case', label: 'Mixed upper and lower case', why: 'Forgetting to normalize case turns "Aa" into a false negative.', covers: ([s]) => /[A-Z]/.test(s) && /[a-z]/.test(s), hidden: { input: ['Aa'], expected: true } },
      { id: 'inner-symbols', label: 'Punctuation or spaces between letters', why: 'Pointers must skip non-alphanumerics from both sides.', covers: ([s]) => /[a-zA-Z0-9]/.test(s) && /[^a-zA-Z0-9]/.test(s), hidden: { input: ['A man, a plan, a canal: Panama'], expected: true } },
      { id: 'digits-letters', label: 'Digits and letters together', why: '"0P" is not a palindrome; checks that digits are kept and compared as characters, not stripped with the symbols.', covers: ([s]) => /[0-9]/.test(s) && /[a-zA-Z]/.test(s), hidden: { input: ['0P'], expected: false } },
    ],
  },
  {
    id: 'longest-substring',
    title: 'Longest Substring Without Repeating Characters',
    statement: 'Given a string s (possibly empty), return the length of the longest substring that has no repeated character.',
    signature: 'lengthOfLongestSubstring(s: string): number',
    entryPoint: 'lengthOfLongestSubstring',
    inputExample: '["abcabcbb"]',
    reference: `function lengthOfLongestSubstring(s){const last=new Map();let left=0,best=0;for(let r=0;r<s.length;r++){const c=s[r];if(last.has(c)&&last.get(c)>=left)left=last.get(c)+1;last.set(c,r);best=Math.max(best,r-left+1)}return best}`,
    categories: [
      { id: 'empty', label: 'Empty string', why: 'The answer is 0; solutions that initialize best to 1 get it wrong.', covers: ([s]) => s === '', hidden: { input: [''], expected: 0 } },
      { id: 'single', label: 'Single character', why: 'The smallest non-empty input; answer 1.', covers: ([s]) => s.length === 1, hidden: { input: ['a'], expected: 1 } },
      { id: 'all-same', label: 'Every character the same', why: 'The window must shrink on every step; answer 1.', covers: ([s]) => s.length >= 2 && allEqual(String(s).split("")), hidden: { input: ['bbbb'], expected: 1 } },
      { id: 'all-unique', label: 'No repeats at all', why: 'The window never shrinks; the answer is the whole string.', covers: ([s]) => s.length >= 2 && allDistinct(String(s).split("")), hidden: { input: ['abc'], expected: 3 } },
      {
        id: 'stale-repeat',
        label: 'A repeat that is already outside the window ("abba")',
        why: 'If you move the left edge to last[c] + 1 without a max(), it jumps backwards on the final "a" and returns 3 instead of 2.',
        covers: ([s]) => {
          const last = new Map<string, number>();
          let left = 0;
          for (let r = 0; r < s.length; r++) {
            const p = last.get(s[r]);
            if (p !== undefined) {
              if (p < left) return true;
              left = p + 1;
            }
            last.set(s[r], r);
          }
          return false;
        },
        hidden: { input: ['abba'], expected: 2 },
      },
      { id: 'non-letters', label: 'Spaces, digits or symbols', why: 'Solutions using a 26-slot array indexed by letter break on anything else.', covers: ([s]) => /[^a-zA-Z]/.test(s), hidden: { input: ['a b a'], expected: 3 } },
    ],
  },
  {
    id: 'product-except-self',
    title: 'Product of Array Except Self',
    statement: 'Given an integer array nums of length at least 2, return an array where answer[i] is the product of every element except nums[i]. Do not use division.',
    signature: 'productExceptSelf(nums: number[]): number[]',
    entryPoint: 'productExceptSelf',
    inputExample: '[[1, 2, 3, 4]]',
    reference: `function productExceptSelf(nums){const n=nums.length;const out=new Array(n).fill(1);let p=1;for(let i=0;i<n;i++){out[i]=p;p*=nums[i]}let s=1;for(let i=n-1;i>=0;i--){out[i]*=s;s*=nums[i]}return out}`,
    categories: [
      { id: 'one-zero', label: 'Exactly one zero', why: 'Only the zero\'s own slot is non-zero. Dividing the total by each element divides by zero here.', covers: ([n]) => n.filter((x: number) => x === 0).length === 1, hidden: { input: [[1, 2, 0, 4]], expected: [0, 0, 8, 0] } },
      { id: 'many-zeros', label: 'Two or more zeros', why: 'Every slot is zero; a "handle one zero" special case is not enough.', covers: ([n]) => n.filter((x: number) => x === 0).length >= 2, hidden: { input: [[0, 0, 3]], expected: [0, 0, 0] } },
      { id: 'negatives', label: 'Negative numbers', why: 'Signs must carry through the running products.', covers: ([n]) => n.some((x: number) => x < 0), hidden: { input: [[-1, 2, -3]], expected: [-6, 3, -2] } },
      { id: 'length-two', label: 'Exactly two elements', why: 'Each answer is just the other element; the smallest allowed size and a common off-by-one.', covers: ([n]) => n.length === 2, hidden: { input: [[3, 4]], expected: [4, 3] } },
    ],
  },
  {
    id: 'coin-change',
    title: 'Coin Change',
    statement:
      'Given an array of distinct positive coin values and a non-negative integer amount, return the fewest coins that sum exactly to amount (each coin can be reused), or -1 if impossible.',
    signature: 'coinChange(coins: number[], amount: number): number',
    entryPoint: 'coinChange',
    inputExample: '[[1, 2, 5], 11]',
    reference: `function coinChange(coins,amount){const dp=new Array(amount+1).fill(Infinity);dp[0]=0;for(let a=1;a<=amount;a++){for(const c of coins){if(c<=a&&dp[a-c]+1<dp[a])dp[a]=dp[a-c]+1}}return dp[amount]===Infinity?-1:dp[amount]}`,
    categories: [
      { id: 'zero', label: 'Amount is 0', why: 'Zero coins make zero; solutions that return -1 for "nothing to do" fail.', covers: ([, amount]) => amount === 0, hidden: { input: [[1, 2, 5], 0], expected: 0 } },
      { id: 'impossible', label: 'Amount cannot be made', why: 'The -1 path; infinity sentinels that leak into the answer show up here.', covers: (_a, answer) => answer === -1, hidden: { input: [[2], 3], expected: -1 } },
      {
        id: 'greedy-trap',
        label: 'Greedy (largest coin first) gives the wrong answer',
        why: 'With coins [1, 3, 4] and amount 6, greedy picks 4+1+1 (3 coins) but 3+3 uses 2.',
        covers: ([coins, amount], answer) => {
          if (answer === -1 || amount <= 0) return false;
          let rem = amount;
          let count = 0;
          for (const c of [...coins].sort((a: number, b: number) => b - a)) {
            count += Math.floor(rem / c);
            rem %= c;
          }
          return rem !== 0 || count !== answer;
        },
        hidden: { input: [[1, 3, 4], 6], expected: 2 },
      },
      { id: 'coin-too-big', label: 'A coin larger than the amount', why: 'Indexing dp[a - coin] with a negative index is a common crash.', covers: ([coins, amount]) => amount > 0 && coins.some((c: number) => c > amount), hidden: { input: [[1, 5], 3], expected: 3 } },
      { id: 'single-coin', label: 'Only one coin type', why: 'Reusing a coin is the only way to reach the amount.', covers: ([coins], answer) => coins.length === 1 && answer > 0, hidden: { input: [[5], 10], expected: 2 } },
    ],
  },
  {
    id: 'first-unique-char',
    title: 'First Unique Character in a String',
    statement: 'Given a string s (possibly empty), return the index of its first character that appears exactly once, or -1 if there is none.',
    signature: 'firstUniqChar(s: string): number',
    entryPoint: 'firstUniqChar',
    inputExample: '["leetcode"]',
    reference: `function firstUniqChar(s){const c=new Map();for(const ch of s)c.set(ch,(c.get(ch)||0)+1);for(let i=0;i<s.length;i++)if(c.get(s[i])===1)return i;return -1}`,
    categories: [
      { id: 'empty', label: 'Empty string', why: 'There is no unique character, so -1; guards against returning 0 by default.', covers: ([s]) => s === '', hidden: { input: [''], expected: -1 } },
      { id: 'single', label: 'Single character', why: 'The only character is trivially unique, at index 0.', covers: ([s]) => s.length === 1, hidden: { input: ['z'], expected: 0 } },
      { id: 'none-unique', label: 'Every character repeats', why: 'The -1 path on a non-empty string.', covers: ([s], a) => s.length > 0 && a === -1, hidden: { input: ['aabb'], expected: -1 } },
      { id: 'unique-last', label: 'The only unique character is last', why: 'Catches scans that stop one early.', covers: ([s], a) => s.length > 1 && a === s.length - 1, hidden: { input: ['aabbc'], expected: 4 } },
      { id: 'case', label: 'Same letter in different case', why: '"a" and "A" are different characters; lowercasing the input changes the answer.', covers: ([s]) => String(s).split("").some((c: string) => c.toLowerCase() !== c.toUpperCase() && s.includes(c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase())), hidden: { input: ['aA'], expected: 0 } },
    ],
  },
];
