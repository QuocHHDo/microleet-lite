# Quick Start Checklist - Continue TypeScript Conversion

## What's Been Done ✅
- ✅ Fibonacci Pattern section in oneDimensionalDP.ts (1 codeExample + 3 exercises)
- ✅ Created comprehensive documentation and templates
- ✅ Established conversion patterns and rules

## What To Do Next 🚀

### Immediate Next Steps (Start Here!)

1. **Read the Template**
   ```bash
   # Open this file in your editor
   CONVERSION_TEMPLATE.md
   ```
   - Review the Before/After examples
   - Familiarize yourself with conversion rules
   - Keep this open as reference while working

2. **Choose Next Section**
   Recommended order:
   - **Start with**: `oneDimensionalDP.ts` - Climbing Stairs Pattern (Line 1410)
   - Why: Most similar to completed Fibonacci section

3. **Follow This Workflow for Each Section**

   **Step 1: Read Python Code**
   ```bash
   # Open the file
   src/data/lessons/dsa/dynamicProgramming/oneDimensionalDP.ts

   # Navigate to line 1410 (Climbing Stairs Pattern)
   # Find the codeExample field with Python code
   ```

   **Step 2: Convert to TypeScript**
   - Copy Python code
   - Apply rules from CONVERSION_TEMPLATE.md
   - Create TypeScript version
   - Key conversions:
     - `def climb_stairs(n):` → `function climbStairs(n: number): number {`
     - `for i in range(n):` → `for (let i = 0; i < n; i++)`
     - `len(nums)` → `nums.length`
     - `max(a, b)` → `Math.max(a, b)`

   **Step 3: Replace in File**
   Use Edit tool (or manual edit):
   ```typescript
   // Find:
   codeExample: `def climb_stairs(n):
       ...python code...`

   // Replace with:
   codeExample: {
     python: `def climb_stairs(n):
       ...python code...`,
     typescript: `function climbStairs(n: number): number {
       ...typescript code...
     }`
   }
   ```

   **Step 4: Repeat for Exercises**
   - Convert initialCode
   - Convert solution
   - Use same dual-language structure

   **Step 5: Test**
   ```bash
   npm run build
   ```
   - If errors: fix TypeScript syntax
   - If success: commit and move to next section

### Section-by-Section Checklist

#### oneDimensionalDP.ts
- [x] Fibonacci Pattern (COMPLETED)
- [ ] Climbing Stairs Pattern (Line 1410) - **START HERE**
  - [ ] codeExample
  - [ ] Exercise 1
  - [ ] Exercise 2
  - [ ] Exercise 3
  - [ ] Test build
- [ ] House Robber Pattern (Line 2072)
  - [ ] codeExample
  - [ ] Exercise 1
  - [ ] Exercise 2
  - [ ] Exercise 3
  - [ ] Test build
- [ ] Min Cost Climbing (Line 3037)
  - [ ] codeExample
  - [ ] Exercise 1
  - [ ] Exercise 2
  - [ ] Exercise 3
  - [ ] Test build
- [ ] Decode Ways (Line 3920)
  - [ ] codeExample
  - [ ] Exercise 1
  - [ ] Exercise 2
  - [ ] Test build

#### stringDP.ts
- [ ] Add import: `import { CodeContent } from '@/common/commonLanguage';`
- [ ] Palindromic Substrings
  - [ ] codeExample
  - [ ] Exercise 1
  - [ ] Exercise 2
- [ ] Longest Palindromic Subsequence
  - [ ] codeExample
  - [ ] Exercise 1
  - [ ] Exercise 2
- [ ] Word Break
  - [ ] codeExample
  - [ ] Exercise 1
  - [ ] Exercise 2
- [ ] Longest Increasing Subsequence
  - [ ] codeExample
  - [ ] Exercise 1
  - [ ] Exercise 2
  - [ ] Exercise 3
- [ ] Test build

#### twoDimensionalDP.ts
- [ ] Add import: `import { CodeContent } from '@/common/commonLanguage';`
- [ ] Section 1
  - [ ] codeExample
  - [ ] Exercises
- [ ] Section 2
  - [ ] codeExample
  - [ ] Exercises
- [ ] Section 3
  - [ ] codeExample
  - [ ] Exercises
- [ ] Test build

### Common Conversion Patterns (Quick Reference)

```typescript
// Functions
def func(n):                    → function func(n: number): number {

// Arrays
dp = [0] * n                    → const dp: number[] = Array(n).fill(0)

// Loops
for i in range(n):              → for (let i = 0; i < n; i++)

// Conditionals
if not nums:                    → if (!nums || nums.length === 0) {

// Built-ins
len(arr)                        → arr.length
max(a, b)                       → Math.max(a, b)
min(a, b)                       → Math.min(a, b)

// Booleans
True/False                      → true/false
None                            → null
```

### Testing Commands

```bash
# After each section:
npm run build        # Check for TypeScript errors

# After each file:
npm run dev          # Visual verification in browser
# Navigate to the DP lessons and spot-check code examples

# Final test:
npm run build && npm run dev
```

### Time Tracking (Recommended)

Track your time to stay on schedule:
- Each codeExample: ~30-45 min
- Each exercise: ~15-20 min
- Each section (1 codeExample + 3 exercises): ~2-3 hours
- Testing per section: ~15 min

### Tips for Success

1. **Work in focused blocks**
   - Set timer for 2 hours
   - Complete 1 full section per block
   - Take break between sections

2. **Test frequently**
   - Build after each section
   - Don't accumulate errors

3. **Use the template**
   - Keep CONVERSION_TEMPLATE.md open
   - Reference completed Fibonacci section
   - Copy patterns from similar code

4. **Don't rush**
   - Accuracy > Speed
   - TypeScript must be functionally equivalent
   - Proper type annotations are important

5. **Commit often**
   - Commit after each successful section
   - Makes it easy to roll back if needed

### If You Get Stuck

1. **Syntax Error?**
   - Check CONVERSION_TEMPLATE.md
   - Look at completed Fibonacci section
   - TypeScript compiler error message usually helpful

2. **Not Sure About Types?**
   - Use these defaults:
     - `n`, `i`, `j`, `amount` → `number`
     - `nums`, `cost`, `arr` → `number[]`
     - `s`, `text`, `word` → `string`
     - `word_dict` → `string[]`

3. **Complex Expression?**
   - Convert it piece by piece
   - Test TypeScript syntax in isolation
   - Refer to similar pattern in template

### Progress Tracking

Update this as you go:

**Date Started**: _________
**Current Section**: _________
**Sections Completed**: ____ / 12
**Estimated Completion**: _________

**Today's Goal**: Complete _____ sections
**This Week's Goal**: Complete _____ file(s)

### Success Indicators

You're on the right track when:
- ✅ Build completes without errors
- ✅ Code looks clean and readable
- ✅ Type annotations are present
- ✅ No `any` types (unless necessary)
- ✅ Logic matches Python version exactly

### Quick Command Reference

```bash
# Navigate to project
cd C:\Users\xxgol\microleet-lite

# Open files
# oneDimensionalDP.ts: Line 1410 (next section)
# stringDP.ts: Start from top
# twoDimensionalDP.ts: Start from top

# Build & test
npm run build
npm run dev

# View docs
# CONVERSION_TEMPLATE.md (your main reference)
# DP_CONVERSION_STATUS.md (detailed status)
# TYPESCRIPT_CONVERSION_SUMMARY.md (overview)
```

## Ready to Start?

1. Open `CONVERSION_TEMPLATE.md`
2. Open `src/data/lessons/dsa/dynamicProgramming/oneDimensionalDP.ts`
3. Navigate to line 1410 (Climbing Stairs Pattern)
4. Find the codeExample with Python code
5. Start converting using the template!

**Good luck! You've got this! 🚀**

The hard part (establishing the pattern) is done. Now it's systematic work following the template.
