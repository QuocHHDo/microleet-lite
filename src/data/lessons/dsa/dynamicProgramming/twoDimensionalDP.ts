import { LessonContent } from '@/common/commonLesson';
import { Difficulty } from '@/common/commonConcept';


// SECTION 3: 2D DYNAMIC PROGRAMMING
// ============================================================================

const gridPathData: LessonContent = {
  title: 'Grid Path Problems',
  content: `Grid path problems are the gateway to 2D dynamic programming. They extend 1D sequential DP into a 2D grid where we navigate from one corner to another, making decisions at each cell. These problems beautifully demonstrate how DP tables mirror the problem structure.

<h2>The Classic Problem: Unique Paths</h2>

<div class="bg-blue-50 p-4 rounded-lg my-4">
  <p><strong>Problem (LeetCode 62):</strong> A robot is located at the top-left corner of an m × n grid. The robot can only move either down or right at any point in time. How many possible unique paths are there to reach the bottom-right corner?</p>
</div>

<div class="example-box">
  <h3>Example:</h3>
  <div class="bg-gray-50 p-3 rounded my-2">
    <p><strong>Input:</strong> m = 3, n = 2</p>
    <p><strong>Output:</strong> 3</p>
    <p><strong>Explanation:</strong> From top-left to bottom-right, there are 3 paths:</p>
    <ul class="ml-4 mt-2">
      <li>1. Right → Right → Down</li>
      <li>2. Right → Down → Right</li>
      <li>3. Down → Right → Right</li>
    </ul>
  </div>
</div>

<h2>Why This is 2D DP</h2>

<p>Unlike 1D problems where state depends on previous positions in a sequence, grid problems require tracking position in TWO dimensions:</p>

<div class="visualization">
  <pre>
1D DP: dp[i] depends on dp[i-1], dp[i-2], ...
       State: one index

2D DP: dp[i][j] depends on dp[i-1][j], dp[i][j-1], ...
       State: two indices (row, column)

Grid Structure:
    0   1   2   (columns)
  ┌───┬───┬───┐
0 │ S │   │   │  S = Start
  ├───┼───┼───┤
1 │   │   │   │
  ├───┼───┼───┤
2 │   │   │ E │  E = End
  └───┴───┴───┘
(rows)

To reach (i,j): came from (i-1,j) or (i,j-1)
  </pre>
</div>

<h2>DP Framework for Grid Problems</h2>

<table class="min-w-full border-collapse border border-gray-300">
  <tr class="bg-gray-100">
    <th class="border p-2">Step</th>
    <th class="border p-2">Unique Paths</th>
  </tr>
  <tr>
    <td class="border p-2"><strong>1. Define State</strong></td>
    <td class="border p-2">dp[i][j] = number of unique paths to reach cell (i, j)</td>
  </tr>
  <tr>
    <td class="border p-2"><strong>2. Base Cases</strong></td>
    <td class="border p-2">dp[0][0] = 1 (start)<br>dp[0][j] = 1 (first row)<br>dp[i][0] = 1 (first column)</td>
  </tr>
  <tr>
    <td class="border p-2"><strong>3. Transition</strong></td>
    <td class="border p-2">dp[i][j] = dp[i-1][j] + dp[i][j-1]<br>(paths from above + paths from left)</td>
  </tr>
  <tr>
    <td class="border p-2"><strong>4. Order</strong></td>
    <td class="border p-2">Row by row, left to right</td>
  </tr>
  <tr>
    <td class="border p-2"><strong>5. Answer</strong></td>
    <td class="border p-2">dp[m-1][n-1] (bottom-right)</td>
  </tr>
</table>

<h2>Common Grid DP Patterns</h2>

<h3>Pattern 1: Counting Paths</h3>
<div class="pattern-box">
  <p><strong>Operation:</strong> Sum paths from reachable previous cells</p>
  <p><strong>Recurrence:</strong> dp[i][j] = sum of dp[previous_cells]</p>
  <p><strong>Examples:</strong> Unique Paths, Unique Paths II</p>
</div>

<h3>Pattern 2: Optimizing Path Cost</h3>
<div class="pattern-box">
  <p><strong>Operation:</strong> Minimize/maximize cost to reach cell</p>
  <p><strong>Recurrence:</strong> dp[i][j] = grid[i][j] + min/max(dp[previous_cells])</p>
  <p><strong>Examples:</strong> Minimum Path Sum, Maximum Path Sum</p>
</div>

<h3>Pattern 3: Path with Constraints</h3>
<div class="pattern-box">
  <p><strong>Operation:</strong> Count/optimize paths with restrictions</p>
  <p><strong>Recurrence:</strong> Conditional transitions based on constraints</p>
  <p><strong>Examples:</strong> Paths with obstacles, Cherry Pickup</p>
</div>

<h2>Key Problem Variations</h2>

<h3>Variation 1: Unique Paths II (With Obstacles)</h3>
<p>Some cells are blocked (obstacles).</p>
<div class="bg-yellow-50 p-4 rounded-lg my-4">
  <p><strong>Change:</strong> If grid[i][j] is obstacle, dp[i][j] = 0</p>
  <p><strong>Transition:</strong> Only add paths from non-obstacle neighbors</p>
</div>

<h3>Variation 2: Minimum Path Sum</h3>
<p>Each cell has a cost, find minimum total cost path.</p>
<div class="bg-yellow-50 p-4 rounded-lg my-4">
  <p><strong>Change:</strong> dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1])</p>
  <p><strong>Goal:</strong> Optimize instead of count</p>
</div>

<h3>Variation 3: Different Movement Options</h3>
<p>Can move in more directions (diagonal, any direction).</p>
<div class="bg-yellow-50 p-4 rounded-lg my-4">
  <p><strong>Change:</strong> Consider more previous cells in transition</p>
  <p><strong>Example:</strong> Falling path sum (can move diagonally)</p>
</div>

<h2>Space Optimization</h2>

<p>Grid DP often allows space optimization:</p>

<div class="bg-green-50 p-4 rounded-lg my-4">
  <p><strong>Observation:</strong> dp[i][j] only depends on current and previous row</p>
  <p><strong>Optimization:</strong> Use two 1D arrays instead of 2D array</p>
  <p><strong>Space:</strong> O(m × n) → O(n)</p>
  <p><strong>Even better:</strong> Sometimes can use single array with in-place updates</p>
</div>

<h2>Common Interview Problems</h2>

<div class="bg-blue-50 p-4 rounded-lg my-4">
  <ol>
    <li><strong>Unique Paths</strong> - LeetCode 62</li>
    <li><strong>Unique Paths II</strong> - LeetCode 63 (with obstacles)</li>
    <li><strong>Minimum Path Sum</strong> - LeetCode 64</li>
    <li><strong>Maximal Square</strong> - LeetCode 221</li>
    <li><strong>Dungeon Game</strong> - LeetCode 174 (reverse DP)</li>
    <li><strong>Cherry Pickup</strong> - LeetCode 741 (two paths)</li>
    <li><strong>Minimum Falling Path Sum</strong> - LeetCode 931</li>
  </ol>
</div>

<h2>Problem-Solving Template</h2>

<pre class="bg-gray-100 p-4 rounded">
# Grid DP Pattern Recognition:
# - 2D grid structure ✓
# - Navigate from start to end ✓
# - Limited movement options ✓
# - Count paths OR optimize cost ✓

# Step 1: Define state
# dp[i][j] = [what does reaching (i,j) represent?]

# Step 2: Identify base cases
# Usually first row and/or first column
# dp[0][0] = starting value

# Step 3: Determine valid movements
# Can move: right, down, diagonal, etc.

# Step 4: Write transition
# dp[i][j] = f(dp[reachable previous cells])

# Step 5: Choose computation order
# Usually: top-to-bottom, left-to-right

# Step 6: Handle edge cases
# Obstacles, boundaries, special cells

# Step 7: Optimize space
# If dp[i][j] only needs previous row, use O(n) space
</pre>

<h2>Debugging Grid DP</h2>

<ol>
  <li><strong>Visualize small example:</strong> Draw 3×3 grid and fill manually</li>
  <li><strong>Check boundary conditions:</strong> First row, first column, corners</li>
  <li><strong>Verify movement logic:</strong> Are you checking all valid directions?</li>
  <li><strong>Watch for off-by-one:</strong> Remember 0-indexing vs 1-indexing</li>
  <li><strong>Test obstacles:</strong> Ensure blocked cells are handled correctly</li>
</ol>

<div class="bg-yellow-50 p-4 rounded-lg my-4">
  <strong>Pro Tip:</strong> Grid DP problems often have elegant combinatorial solutions too (like Unique Paths = C(m+n-2, m-1)), but DP is more general and handles obstacles and costs naturally.
</div>`,
  codeExample: `# ============================================================================
# GRID PATH PROBLEMS: Complete Implementation Guide
# ============================================================================

# PROBLEM 1: Unique Paths - LeetCode 62
# ============================================================================

def unique_paths_2d(m, n):
    """
    Count unique paths in m × n grid (only move right or down).

    State: dp[i][j] = paths to reach (i, j)
    Base: dp[0][j] = 1, dp[i][0] = 1 (only one way along edges)
    Transition: dp[i][j] = dp[i-1][j] + dp[i][j-1]

    Time: O(m*n), Space: O(m*n)
    """
    # Create DP table
    dp = [[0] * n for _ in range(m)]

    # Base cases: first row and column
    for i in range(m):
        dp[i][0] = 1
    for j in range(n):
        dp[0][j] = 1

    # Fill table
    for i in range(1, m):
        for j in range(1, n):
            dp[i][j] = dp[i-1][j] + dp[i][j-1]

    return dp[m-1][n-1]


def unique_paths_optimized(m, n):
    """
    Space-optimized version using single array.

    Observation: dp[i][j] only needs current and previous row.
    We can reuse array by updating in-place.

    Time: O(m*n), Space: O(n)
    """
    # Single row array
    dp = [1] * n  # First row all 1s

    # Process each row
    for i in range(1, m):
        for j in range(1, n):
            # dp[j] currently holds previous row value (dp[i-1][j])
            # dp[j-1] already updated to current row value (dp[i][j-1])
            dp[j] = dp[j] + dp[j-1]

    return dp[n-1]


# ============================================================================
# PROBLEM 2: Unique Paths II - With Obstacles - LeetCode 63
# ============================================================================

def unique_paths_with_obstacles(obstacle_grid):
    """
    Count paths in grid with obstacles.
    obstacle_grid[i][j] = 1 means obstacle.

    State: dp[i][j] = paths to (i,j), or 0 if obstacle
    Transition: if not obstacle, dp[i][j] = dp[i-1][j] + dp[i][j-1]

    Time: O(m*n), Space: O(n)
    """
    if not obstacle_grid or obstacle_grid[0][0] == 1:
        return 0

    m, n = len(obstacle_grid), len(obstacle_grid[0])

    # Space-optimized: single row
    dp = [0] * n
    dp[0] = 1

    for i in range(m):
        for j in range(n):
            if obstacle_grid[i][j] == 1:
                dp[j] = 0  # Obstacle blocks all paths
            elif j > 0:
                dp[j] += dp[j-1]

    return dp[n-1]


def unique_paths_with_obstacles_2d(obstacle_grid):
    """
    Same problem with 2D DP table for clarity.
    """
    if not obstacle_grid or obstacle_grid[0][0] == 1:
        return 0

    m, n = len(obstacle_grid), len(obstacle_grid[0])
    dp = [[0] * n for _ in range(m)]

    # Base case: start cell
    dp[0][0] = 1

    # First column
    for i in range(1, m):
        if obstacle_grid[i][0] == 0:
            dp[i][0] = dp[i-1][0]

    # First row
    for j in range(1, n):
        if obstacle_grid[0][j] == 0:
            dp[0][j] = dp[0][j-1]

    # Fill rest
    for i in range(1, m):
        for j in range(1, n):
            if obstacle_grid[i][j] == 0:
                dp[i][j] = dp[i-1][j] + dp[i][j-1]

    return dp[m-1][n-1]


# ============================================================================
# PROBLEM 3: Minimum Path Sum - LeetCode 64
# ============================================================================

def min_path_sum(grid):
    """
    Find minimum sum path from top-left to bottom-right.

    State: dp[i][j] = minimum sum to reach (i, j)
    Base: dp[0][0] = grid[0][0]
    Transition: dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1])

    Time: O(m*n), Space: O(n)
    """
    if not grid:
        return 0

    m, n = len(grid), len(grid[0])

    # Space-optimized: single row
    prev = [0] * n
    prev[0] = grid[0][0]

    # Initialize first row
    for j in range(1, n):
        prev[j] = prev[j-1] + grid[0][j]

    # Process remaining rows
    for i in range(1, m):
        curr = [0] * n
        curr[0] = prev[0] + grid[i][0]

        for j in range(1, n):
            curr[j] = grid[i][j] + min(prev[j], curr[j-1])

        prev = curr

    return prev[n-1]


# ============================================================================
# PROBLEM 4: Maximum Path Sum (Variant)
# ============================================================================

def max_path_sum(grid):
    """
    Find maximum sum path from top-left to bottom-right.

    Same structure as min path sum, but use max instead.

    Time: O(m*n), Space: O(n)
    """
    if not grid:
        return 0

    m, n = len(grid), len(grid[0])
    prev = [0] * n
    prev[0] = grid[0][0]

    for j in range(1, n):
        prev[j] = prev[j-1] + grid[0][j]

    for i in range(1, m):
        curr = [0] * n
        curr[0] = prev[0] + grid[i][0]

        for j in range(1, n):
            curr[j] = grid[i][j] + max(prev[j], curr[j-1])

        prev = curr

    return prev[n-1]


# ============================================================================
# PROBLEM 5: Dungeon Game - LeetCode 174 (Reverse DP)
# ============================================================================

def calculate_minimum_hp(dungeon):
    """
    Find minimum initial health needed to reach bottom-right.
    Cells can have positive (health) or negative (damage) values.

    Key insight: Work backwards from end!

    State: dp[i][j] = minimum health needed to reach end from (i,j)
    Base: dp[m-1][n-1] = max(1, 1 - dungeon[m-1][n-1])
    Transition: dp[i][j] = max(1, min(dp[i+1][j], dp[i][j+1]) - dungeon[i][j])

    Time: O(m*n), Space: O(n)
    """
    if not dungeon:
        return 0

    m, n = len(dungeon), len(dungeon[0])

    # Work backwards: start from bottom-right
    dp = [[0] * n for _ in range(m)]

    # Base case: end cell
    dp[m-1][n-1] = max(1, 1 - dungeon[m-1][n-1])

    # Last column (can only go up)
    for i in range(m-2, -1, -1):
        dp[i][n-1] = max(1, dp[i+1][n-1] - dungeon[i][n-1])

    # Last row (can only go left)
    for j in range(n-2, -1, -1):
        dp[m-1][j] = max(1, dp[m-1][j+1] - dungeon[m-1][j])

    # Fill rest (working backwards)
    for i in range(m-2, -1, -1):
        for j in range(n-2, -1, -1):
            min_health_on_exit = min(dp[i+1][j], dp[i][j+1])
            dp[i][j] = max(1, min_health_on_exit - dungeon[i][j])

    return dp[0][0]


# ============================================================================
# VISUALIZATION HELPERS
# ============================================================================

def visualize_unique_paths(m, n):
    """
    Show DP table construction for unique paths.
    """
    dp = [[0] * n for _ in range(m)]

    # Initialize
    for i in range(m):
        dp[i][0] = 1
    for j in range(n):
        dp[0][j] = 1

    print(f"Unique Paths: {m} × {n} grid\\n")
    print("=" * 60)
    print("Initial state (base cases):")
    print_grid(dp)

    # Fill table with visualization
    for i in range(1, m):
        for j in range(1, n):
            dp[i][j] = dp[i-1][j] + dp[i][j-1]

    print("\\nFinal DP table:")
    print_grid(dp)
    print("=" * 60)
    print(f"\\nAnswer: {dp[m-1][n-1]} unique paths")

    return dp[m-1][n-1]


def print_grid(grid):
    """Pretty print 2D grid."""
    for row in grid:
        print("  " + " ".join(f"{val:4}" for val in row))


def visualize_min_path_sum(grid):
    """
    Show DP table for minimum path sum.
    """
    m, n = len(grid), len(grid[0])
    dp = [[0] * n for _ in range(m)]

    print("Minimum Path Sum:\\n")
    print("Input grid:")
    print_grid(grid)

    # Build DP table
    dp[0][0] = grid[0][0]

    for j in range(1, n):
        dp[0][j] = dp[0][j-1] + grid[0][j]

    for i in range(1, m):
        dp[i][0] = dp[i-1][0] + grid[i][0]

    for i in range(1, m):
        for j in range(1, n):
            dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1])

    print("\\nDP table (minimum sums):")
    print_grid(dp)
    print(f"\\nMinimum path sum: {dp[m-1][n-1]}")

    return dp[m-1][n-1]


# ============================================================================
# TESTING
# ============================================================================

if __name__ == "__main__":
    print("GRID PATH PROBLEMS DEMONSTRATIONS\\n")

    # Test 1: Unique Paths
    print("1. UNIQUE PATHS (3×3 grid):")
    visualize_unique_paths(3, 3)

    print("\\n\\n2. MINIMUM PATH SUM:")
    grid = [
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1]
    ]
    visualize_min_path_sum(grid)

    print("\\n\\n3. UNIQUE PATHS WITH OBSTACLES:")
    obstacle_grid = [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
    ]
    result = unique_paths_with_obstacles(obstacle_grid)
    print("Grid (1 = obstacle):")
    print_grid(obstacle_grid)
    print(f"\\nUnique paths: {result}")`,
  exercises: [
    {
      prompt: 'Implement Unique Paths using space-optimized DP (O(n) space). Count the number of unique paths in an m×n grid moving only right or down.',
      initialCode: `def unique_paths(m, n):
    """
    Count unique paths from top-left to bottom-right.
    Can only move right or down.

    State: dp[i][j] = number of paths to reach (i, j)
    Base: dp[0][j] = 1, dp[i][0] = 1
    Transition: dp[i][j] = dp[i-1][j] + dp[i][j-1]

    Args:
        m: Number of rows
        n: Number of columns

    Returns:
        Number of unique paths

    Examples:
        unique_paths(3, 2) -> 3
        unique_paths(3, 7) -> 28
    """
    # Your code here
    pass`,
      solution: `def unique_paths(m, n):
    """
    Unique Paths with space optimization.
    Time: O(m*n), Space: O(n)
    """
    # Use single array
    dp = [1] * n  # First row all 1s

    # Process each subsequent row
    for i in range(1, m):
        for j in range(1, n):
            # dp[j] = paths from above (previous row)
            # dp[j-1] = paths from left (current row)
            dp[j] = dp[j] + dp[j-1]

    return dp[n-1]

# With 2D table for understanding
def unique_paths_2d(m, n):
    dp = [[0] * n for _ in range(m)]

    # Base cases
    for i in range(m):
        dp[i][0] = 1
    for j in range(n):
        dp[0][j] = 1

    # Fill table
    for i in range(1, m):
        for j in range(1, n):
            dp[i][j] = dp[i-1][j] + dp[i][j-1]

    return dp[m-1][n-1]`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Solve Unique Paths II: Count unique paths in a grid with obstacles. Cells with value 1 are obstacles.',
      initialCode: `def unique_paths_with_obstacles(obstacle_grid):
    """
    Count unique paths avoiding obstacles.

    obstacle_grid[i][j] = 1 means obstacle, 0 means passable.

    Args:
        obstacle_grid: 2D array with obstacles marked as 1

    Returns:
        Number of unique paths

    Examples:
        grid = [[0,0,0],[0,1,0],[0,0,0]] -> 2
        grid = [[0,1],[0,0]] -> 1
    """
    # Your code here
    pass`,
      solution: `def unique_paths_with_obstacles(obstacle_grid):
    """
    Unique Paths II with space optimization.
    Time: O(m*n), Space: O(n)
    """
    if not obstacle_grid or obstacle_grid[0][0] == 1:
        return 0

    m, n = len(obstacle_grid), len(obstacle_grid[0])
    dp = [0] * n
    dp[0] = 1  # Start position

    for i in range(m):
        for j in range(n):
            if obstacle_grid[i][j] == 1:
                # Obstacle: no paths through here
                dp[j] = 0
            elif j > 0:
                # Add paths from left
                dp[j] += dp[j-1]

    return dp[n-1]

# With 2D table
def unique_paths_with_obstacles_2d(obstacle_grid):
    if not obstacle_grid or obstacle_grid[0][0] == 1:
        return 0

    m, n = len(obstacle_grid), len(obstacle_grid[0])
    dp = [[0] * n for _ in range(m)]
    dp[0][0] = 1

    # First column
    for i in range(1, m):
        if obstacle_grid[i][0] == 0:
            dp[i][0] = dp[i-1][0]
        # else stays 0 (obstacle blocks path)

    # First row
    for j in range(1, n):
        if obstacle_grid[0][j] == 0:
            dp[0][j] = dp[0][j-1]

    # Fill rest
    for i in range(1, m):
        for j in range(1, n):
            if obstacle_grid[i][j] == 0:
                dp[i][j] = dp[i-1][j] + dp[i][j-1]

    return dp[m-1][n-1]`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Solve Minimum Path Sum: Find the path from top-left to bottom-right that minimizes the sum of values along the path.',
      initialCode: `def min_path_sum(grid):
    """
    Find minimum sum path from top-left to bottom-right.
    Can only move right or down.

    State: dp[i][j] = minimum sum to reach (i, j)
    Transition: dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1])

    Args:
        grid: 2D array of integers

    Returns:
        Minimum path sum

    Examples:
        grid = [[1,3,1],[1,5,1],[4,2,1]] -> 7
        # Path: 1→3→1→1→1 = 7
    """
    # Your code here
    pass`,
      solution: `def min_path_sum(grid):
    """
    Minimum Path Sum with space optimization.
    Time: O(m*n), Space: O(n)
    """
    if not grid:
        return 0

    m, n = len(grid), len(grid[0])
    prev = [0] * n
    prev[0] = grid[0][0]

    # Initialize first row
    for j in range(1, n):
        prev[j] = prev[j-1] + grid[0][j]

    # Process remaining rows
    for i in range(1, m):
        curr = [0] * n
        curr[0] = prev[0] + grid[i][0]

        for j in range(1, n):
            curr[j] = grid[i][j] + min(prev[j], curr[j-1])

        prev = curr

    return prev[n-1]

# In-place modification (if allowed)
def min_path_sum_inplace(grid):
    """Modify grid in-place to save space."""
    if not grid:
        return 0

    m, n = len(grid), len(grid[0])

    # First row
    for j in range(1, n):
        grid[0][j] += grid[0][j-1]

    # First column
    for i in range(1, m):
        grid[i][0] += grid[i-1][0]

    # Fill rest
    for i in range(1, m):
        for j in range(1, n):
            grid[i][j] += min(grid[i-1][j], grid[i][j-1])

    return grid[m-1][n-1]`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Why do we initialize the first row and first column to all 1s in the Unique Paths problem?',
      options: [
        'It\'s a programming convention',
        'Because there\'s only one way to reach any cell in the first row (keep going right) or first column (keep going down)',
        'To make the code simpler',
        'It doesn\'t matter what we initialize them to',
      ],
      correctAnswer: 1,
      explanations: [
        'It\'s not just convention - there\'s a mathematical reason.',
        'Correct! To reach any cell in the first row, you can only go right repeatedly (one unique path). Similarly, to reach any cell in the first column, you can only go down repeatedly (one unique path). These serve as base cases for the DP recurrence.',
        'While it may simplify code, that\'s not the fundamental reason - it\'s about correctness.',
        'The initialization is critical for the correctness of the DP solution.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'In the space-optimized Unique Paths solution using O(n) space, why can we reuse the same array?',
      options: [
        'To save memory',
        'Because dp[i][j] only depends on dp[i-1][j] (above) and dp[i][j-1] (left), which we process in order',
        'Because all values are the same',
        'It\'s a trick that doesn\'t always work',
      ],
      correctAnswer: 1,
      explanations: [
        'While saving memory is the benefit, this doesn\'t explain why it\'s correct.',
        'Correct! When we process row i, dp[j] initially contains dp[i-1][j] from the previous row. As we iterate left to right, dp[j-1] already contains the updated value dp[i][j-1] from the current row. So we can compute dp[i][j] = dp[i-1][j] + dp[i][j-1] using just one array!',
        'The values are different; the key is the dependency pattern.',
        'This optimization works reliably for grid DP when processing in the right order.',
      ],
      difficulty: Difficulty.Advanced,
    },
    {
      question: 'How does handling obstacles in Unique Paths II differ from the basic Unique Paths?',
      options: [
        'We need a completely different algorithm',
        'We simply set dp[i][j] = 0 for obstacle cells, since no paths go through them',
        'We need to use BFS instead of DP',
        'Obstacles don\'t affect the solution',
      ],
      correctAnswer: 1,
      explanations: [
        'The algorithm structure remains the same, just with a modification.',
        'Correct! The DP structure is identical, but when obstacle_grid[i][j] == 1, we set dp[i][j] = 0 because no paths can go through an obstacle. This naturally propagates through the DP: cells reachable only through obstacles will also have 0 paths.',
        'DP works perfectly for this problem; BFS would be unnecessarily complex.',
        'Obstacles critically affect the solution by blocking certain paths.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'Why does the Dungeon Game problem require working backwards from the end instead of forward from the start?',
      options: [
        'To make the problem harder',
        'Because we need to ensure we have enough health at each step to survive to the end, which we can only compute if we know the requirements going forward',
        'It doesn\'t matter which direction we process',
        'Because the grid is upside down',
      ],
      correctAnswer: 1,
      explanations: [
        'The direction isn\'t arbitrary - there\'s a logical necessity.',
        'Correct! If we work forward, we\'d know how much health we have but not how much we NEED. Working backward, we can compute the minimum health required at each cell to successfully reach the end. For example, if the end cell needs 1 HP and has -5 damage, we need 6 HP entering it. This requirement propagates backward through the grid.',
        'The direction is crucial for correctness in this problem.',
        'The grid orientation doesn\'t change; it\'s about the dependency structure.',
      ],
      difficulty: Difficulty.Advanced,
    },
  ],
};

const longestCommonSubsequenceData: LessonContent = {
  title: 'Longest Common Subsequence (LCS)',
  content: `The Longest Common Subsequence (LCS) problem is one of the most fundamental 2D DP problems. It's the foundation for understanding diff algorithms (like git diff), DNA sequence alignment, and many real-world text comparison tools.

<h2>Problem Definition</h2>

<div class="bg-blue-50 p-4 rounded-lg my-4">
  <p><strong>Problem:</strong> Given two strings \\\`text1\\\` and \\\`text2\\\`, return the length of their longest common subsequence. If there is no common subsequence, return 0.</p>

  <p><strong>Note:</strong> A subsequence is a sequence that appears in the same relative order, but not necessarily contiguous. For example, "ace" is a subsequence of "abcde".</p>
</div>

<div class="example-box">
  <h3>Example 1:</h3>
  <div class="bg-gray-50 p-3 rounded my-2">
    <p><strong>Input:</strong> text1 = "abcde", text2 = "ace"</p>
    <p><strong>Output:</strong> 3</p>
    <p><strong>Explanation:</strong> The longest common subsequence is "ace" with length 3</p>
  </div>

  <h3>Example 2:</h3>
  <div class="bg-gray-50 p-3 rounded my-2">
    <p><strong>Input:</strong> text1 = "abc", text2 = "abc"</p>
    <p><strong>Output:</strong> 3</p>
    <p><strong>Explanation:</strong> The longest common subsequence is "abc" with length 3</p>
  </div>

  <h3>Example 3:</h3>
  <div class="bg-gray-50 p-3 rounded my-2">
    <p><strong>Input:</strong> text1 = "abc", text2 = "def"</p>
    <p><strong>Output:</strong> 0</p>
    <p><strong>Explanation:</strong> There is no common subsequence</p>
  </div>
</div>

<h2>Why Is This 2D DP?</h2>

<p>LCS requires tracking position in BOTH strings simultaneously:</p>

<div class="visualization">
  <pre>
String 1: A B C D E
String 2: A C E

We need to track:
- How much of string 1 we've considered (index i)
- How much of string 2 we've considered (index j)

State: dp[i][j] = LCS of first i chars of text1 and first j chars of text2

Decision at each position:
- If text1[i-1] == text2[j-1]: characters match!
- Otherwise: skip character from text1 OR text2
  </pre>
</div>

<h2>The Recursive Insight</h2>

<p>Let's think recursively first. At any position i in text1 and j in text2:</p>

\\\`\\\`\\\`python
def lcs_recursive(text1, text2, i, j):
    # Base case: reached end of either string
    if i == 0 or j == 0:
        return 0

    # Case 1: Characters match
    if text1[i-1] == text2[j-1]:
        return 1 + lcs_recursive(text1, text2, i-1, j-1)

    # Case 2: Characters don't match - try both options
    else:
        skip_text1 = lcs_recursive(text1, text2, i-1, j)
        skip_text2 = lcs_recursive(text1, text2, i, j-1)
        return max(skip_text1, skip_text2)
\\\`\\\`\\\`

<p><strong>Why this is inefficient:</strong> For text1="ABC" and text2="AC", we compute lcs("AB", "A") multiple times. This exponential overlap screams DP!</p>

<h2>The 2D DP Solution</h2>

<h3>Step 1: Define the State</h3>

<div class="bg-green-50 p-4 rounded-lg my-4">
  <p><strong>State Definition:</strong></p>
  <p>\\\`dp[i][j]\\\` = length of LCS of \\\`text1[0...i-1]\\\` and \\\`text2[0...j-1]\\\`</p>

  <p><strong>Why i-1 and j-1?</strong> We use 1-indexed DP table for cleaner base cases. \\\`dp[0][j]\\\` and \\\`dp[i][0]\\\` represent empty string scenarios.</p>
</div>

<h3>Step 2: Base Cases</h3>

\\\`\\\`\\\`python
# If either string is empty, LCS is 0
dp[0][j] = 0 for all j  # text1 is empty
dp[i][0] = 0 for all i  # text2 is empty
\\\`\\\`\\\`

<h3>Step 3: State Transition</h3>

<div class="bg-yellow-50 p-4 rounded-lg my-4">
  <p><strong>Transition Equation:</strong></p>
  <pre>
if text1[i-1] == text2[j-1]:
    # Characters match! Add 1 to LCS without these chars
    dp[i][j] = 1 + dp[i-1][j-1]
else:
    # Characters don't match - take best of:
    # 1. Skip current char from text1: dp[i-1][j]
    # 2. Skip current char from text2: dp[i][j-1]
    dp[i][j] = max(dp[i-1][j], dp[i][j-1])
  </pre>
</div>

<h3>Visual Example: text1="ABCDE", text2="ACE"</h3>

<p>Building the DP table step by step:</p>

<div class="visualization">
  <pre>
       ""  A  C  E
    "" 0   0  0  0
    A  0   1  1  1    ← A matches A: 1 + dp[0][0] = 1
    B  0   1  1  1    ← B doesn't match: max(dp[0][1], dp[1][0]) = 1
    C  0   1  2  2    ← C matches C: 1 + dp[1][1] = 2
    D  0   1  2  2    ← D doesn't match: max(dp[2][2], dp[3][1]) = 2
    E  0   1  2  3    ← E matches E: 1 + dp[3][2] = 3

Final answer: dp[5][3] = 3
LCS: "ACE"
  </pre>
</div>

<h2>Complete Implementation</h2>

\\\`\\\`\\\`python
def longest_common_subsequence(text1: str, text2: str) -> int:
    """
    Find the length of the longest common subsequence.

    Time: O(m * n) where m = len(text1), n = len(text2)
    Space: O(m * n) for the DP table
    """
    m, n = len(text1), len(text2)

    # Create DP table with extra row/column for empty string
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    # Fill the table
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i-1] == text2[j-1]:
                # Characters match - extend previous LCS
                dp[i][j] = 1 + dp[i-1][j-1]
            else:
                # Take best result from skipping either character
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])

    return dp[m][n]

# Example usage
print(longest_common_subsequence("abcde", "ace"))  # Output: 3
print(longest_common_subsequence("abc", "abc"))    # Output: 3
print(longest_common_subsequence("abc", "def"))    # Output: 0
\\\`\\\`\\\`

<h2>Printing the Actual LCS</h2>

<p>To reconstruct the actual subsequence (not just its length), we backtrack through the DP table:</p>

\\\`\\\`\\\`python
def find_lcs_string(text1: str, text2: str) -> str:
    """
    Find the actual longest common subsequence string.
    """
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    # Build DP table
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i-1] == text2[j-1]:
                dp[i][j] = 1 + dp[i-1][j-1]
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])

    # Backtrack to find the LCS
    lcs = []
    i, j = m, n

    while i > 0 and j > 0:
        if text1[i-1] == text2[j-1]:
            # This character is part of LCS
            lcs.append(text1[i-1])
            i -= 1
            j -= 1
        elif dp[i-1][j] > dp[i][j-1]:
            # Came from top (skipped text1[i-1])
            i -= 1
        else:
            # Came from left (skipped text2[j-1])
            j -= 1

    # Reverse since we built backwards
    return ''.join(reversed(lcs))

# Example
print(find_lcs_string("ABCDE", "ACE"))  # Output: "ACE"
\\\`\\\`\\\`

<h2>Space Optimization</h2>

<p>Since each row only depends on the previous row, we can optimize space to O(n):</p>

\\\`\\\`\\\`python
def lcs_space_optimized(text1: str, text2: str) -> int:
    """
    Space-optimized LCS using only two rows.

    Time: O(m * n)
    Space: O(n)
    """
    m, n = len(text1), len(text2)

    # Two rows: previous and current
    prev = [0] * (n + 1)
    curr = [0] * (n + 1)

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i-1] == text2[j-1]:
                curr[j] = 1 + prev[j-1]
            else:
                curr[j] = max(prev[j], curr[j-1])

        # Swap rows
        prev, curr = curr, prev

    return prev[n]
\\\`\\\`\\\`

<h2>Common Variations</h2>

<h3>1. Longest Common Substring (Contiguous)</h3>

<p>Different from subsequence - characters must be consecutive:</p>

\\\`\\\`\\\`python
def longest_common_substring(text1: str, text2: str) -> int:
    """
    Find length of longest common SUBSTRING (must be contiguous).
    """
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    max_length = 0

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i-1] == text2[j-1]:
                # Extend the current substring
                dp[i][j] = 1 + dp[i-1][j-1]
                max_length = max(max_length, dp[i][j])
            else:
                # Reset to 0 - substring must be contiguous!
                dp[i][j] = 0

    return max_length

print(longest_common_substring("ABCDE", "ACE"))   # 1 (just "A" or "C" or "E")
print(longest_common_substring("ABCDE", "BCDEF")) # 4 ("BCDE")
\\\`\\\`\\\`

<h3>2. Shortest Common Supersequence</h3>

<p>Find the shortest string that has both text1 and text2 as subsequences:</p>

\\\`\\\`\\\`python
def shortest_common_supersequence_length(text1: str, text2: str) -> int:
    """
    The shortest supersequence includes all chars from both strings,
    with LCS chars appearing only once.

    Formula: len(text1) + len(text2) - LCS_length
    """
    lcs_len = longest_common_subsequence(text1, text2)
    return len(text1) + len(text2) - lcs_len

print(shortest_common_supersequence_length("AGGTAB", "GXTXAYB"))
# LCS = "GTAB" (length 4)
# Result: 6 + 7 - 4 = 9
\\\`\\\`\\\`

<h2>Real-World Applications</h2>

<ul>
  <li><strong>Diff Tools (Git):</strong> Finding differences between file versions</li>
  <li><strong>DNA Sequence Alignment:</strong> Comparing genetic sequences</li>
  <li><strong>Plagiarism Detection:</strong> Finding common text segments</li>
  <li><strong>Auto-complete/Spell Check:</strong> Finding similar strings</li>
  <li><strong>Version Control:</strong> Merging changes from different branches</li>
</ul>

<h2>Key Insights</h2>

<div class="bg-purple-50 p-4 rounded-lg my-4">
  <p><strong>Pattern Recognition:</strong></p>
  <ul>
    <li>Comparing two sequences → Think 2D DP</li>
    <li>State = position in both sequences</li>
    <li>Match case: extend previous result</li>
    <li>Mismatch case: try both options (skip from either sequence)</li>
    <li>This pattern applies to: LCS, Edit Distance, String Matching</li>
  </ul>
</div>

<h2>Time and Space Complexity</h2>

<table class="w-full border-collapse my-4">
  <thead>
    <tr class="bg-gray-200">
      <th class="border p-3">Approach</th>
      <th class="border p-3">Time</th>
      <th class="border p-3">Space</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border p-3">Naive Recursion</td>
      <td class="border p-3">O(2^(m+n))</td>
      <td class="border p-3">O(m+n) stack</td>
    </tr>
    <tr class="bg-gray-50">
      <td class="border p-3">2D DP</td>
      <td class="border p-3">O(m × n)</td>
      <td class="border p-3">O(m × n)</td>
    </tr>
    <tr>
      <td class="border p-3">Space Optimized</td>
      <td class="border p-3">O(m × n)</td>
      <td class="border p-3">O(min(m, n))</td>
    </tr>
  </tbody>
</table>`,
  codeExample: `# Complete LCS implementation with all variations

def longest_common_subsequence(text1: str, text2: str) -> int:
    """
    Classic LCS - find length of longest common subsequence.

    Args:
        text1: First string
        text2: Second string

    Returns:
        Length of LCS

    Time: O(m * n)
    Space: O(m * n)
    """
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i-1] == text2[j-1]:
                dp[i][j] = 1 + dp[i-1][j-1]
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])

    return dp[m][n]


def find_lcs_string(text1: str, text2: str) -> str:
    """
    Find the actual LCS string (not just length).
    """
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    # Build DP table
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i-1] == text2[j-1]:
                dp[i][j] = 1 + dp[i-1][j-1]
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])

    # Backtrack
    lcs = []
    i, j = m, n
    while i > 0 and j > 0:
        if text1[i-1] == text2[j-1]:
            lcs.append(text1[i-1])
            i -= 1
            j -= 1
        elif dp[i-1][j] > dp[i][j-1]:
            i -= 1
        else:
            j -= 1

    return ''.join(reversed(lcs))


def lcs_space_optimized(text1: str, text2: str) -> int:
    """
    Space-optimized LCS using rolling array.

    Time: O(m * n)
    Space: O(n)
    """
    m, n = len(text1), len(text2)
    prev = [0] * (n + 1)
    curr = [0] * (n + 1)

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i-1] == text2[j-1]:
                curr[j] = 1 + prev[j-1]
            else:
                curr[j] = max(prev[j], curr[j-1])
        prev, curr = curr, prev

    return prev[n]


def longest_common_substring(text1: str, text2: str) -> int:
    """
    Find longest common SUBSTRING (must be contiguous).
    Different from subsequence!
    """
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    max_length = 0

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i-1] == text2[j-1]:
                dp[i][j] = 1 + dp[i-1][j-1]
                max_length = max(max_length, dp[i][j])
            else:
                dp[i][j] = 0  # Must reset - substring is contiguous!

    return max_length


def shortest_common_supersequence_length(text1: str, text2: str) -> int:
    """
    Find length of shortest string containing both text1 and text2.

    Formula: len(text1) + len(text2) - LCS_length
    The LCS chars appear once, all others appear separately.
    """
    lcs_len = longest_common_subsequence(text1, text2)
    return len(text1) + len(text2) - lcs_len


# Example usage and test cases
if __name__ == "__main__":
    # Test LCS length
    print("LCS Tests:")
    print(longest_common_subsequence("ABCDE", "ACE"))      # 3
    print(longest_common_subsequence("ABC", "ABC"))        # 3
    print(longest_common_subsequence("ABC", "DEF"))        # 0
    print(longest_common_subsequence("AGGTAB", "GXTXAYB")) # 4 (GTAB)

    # Test finding actual LCS string
    print("\\nLCS String:")
    print(find_lcs_string("ABCDE", "ACE"))                 # "ACE"
    print(find_lcs_string("AGGTAB", "GXTXAYB"))            # "GTAB"

    # Test space-optimized version
    print("\\nSpace-Optimized:")
    print(lcs_space_optimized("ABCDE", "ACE"))             # 3

    # Test LCS substring (contiguous)
    print("\\nLCS Substring:")
    print(longest_common_substring("ABCDE", "ACE"))        # 1
    print(longest_common_substring("ABCDE", "BCDEF"))      # 4 ("BCDE")

    # Test shortest common supersequence
    print("\\nShortest Common Supersequence:")
    print(shortest_common_supersequence_length("AGGTAB", "GXTXAYB"))  # 9`,
  exercises: [
    {
      prompt: 'Implement a function to find the LCS of two strings. Return the length.',
      initialCode: `def longest_common_subsequence(text1, text2):
    """
    Find the length of the longest common subsequence.

    Args:
        text1: First string
        text2: Second string

    Returns:
        Length of LCS

    Examples:
        >>> longest_common_subsequence("ABCDE", "ACE")
        3
        >>> longest_common_subsequence("ABC", "DEF")
        0
    """
    # Your code here
    pass`,
      solution: `def longest_common_subsequence(text1, text2):
    """
    Find the length of the longest common subsequence.
    """
    m, n = len(text1), len(text2)

    # Create DP table
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    # Fill table
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i-1] == text2[j-1]:
                # Characters match - extend LCS
                dp[i][j] = 1 + dp[i-1][j-1]
            else:
                # Take best of skipping from either string
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])

    return dp[m][n]

# Test
print(longest_common_subsequence("ABCDE", "ACE"))  # 3
print(longest_common_subsequence("ABC", "DEF"))    # 0`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement a function to find the actual LCS string (not just the length). Use backtracking through the DP table.',
      initialCode: `def find_lcs_string(text1, text2):
    """
    Find the actual longest common subsequence string.

    Returns:
        The LCS string

    Example:
        >>> find_lcs_string("ABCDE", "ACE")
        "ACE"
    """
    # Your code here
    pass`,
      solution: `def find_lcs_string(text1, text2):
    """
    Find the actual LCS string using backtracking.
    """
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    # Build DP table
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i-1] == text2[j-1]:
                dp[i][j] = 1 + dp[i-1][j-1]
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])

    # Backtrack to find LCS
    lcs = []
    i, j = m, n

    while i > 0 and j > 0:
        if text1[i-1] == text2[j-1]:
            # This char is in LCS
            lcs.append(text1[i-1])
            i -= 1
            j -= 1
        elif dp[i-1][j] > dp[i][j-1]:
            # Came from top
            i -= 1
        else:
            # Came from left
            j -= 1

    # Reverse since we built backwards
    return ''.join(reversed(lcs))

# Test
print(find_lcs_string("ABCDE", "ACE"))     # "ACE"
print(find_lcs_string("AGGTAB", "GXTXAYB")) # "GTAB"`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement longest common SUBSTRING (must be contiguous). This is different from subsequence!',
      initialCode: `def longest_common_substring(text1, text2):
    """
    Find length of longest common SUBSTRING.
    Unlike subsequence, characters must be consecutive.

    Example:
        >>> longest_common_substring("ABCDE", "BCDEF")
        4  # "BCDE"
    """
    # Your code here
    pass`,
      solution: `def longest_common_substring(text1, text2):
    """
    Find longest common SUBSTRING (contiguous).
    """
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    max_length = 0

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i-1] == text2[j-1]:
                # Extend current substring
                dp[i][j] = 1 + dp[i-1][j-1]
                max_length = max(max_length, dp[i][j])
            else:
                # Reset! Substring must be contiguous
                dp[i][j] = 0

    return max_length

# Test
print(longest_common_substring("ABCDE", "ACE"))    # 1
print(longest_common_substring("ABCDE", "BCDEF"))  # 4`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the key difference between subsequence and substring?',
      options: [
        'There is no difference',
        'Subsequence must be contiguous, substring can have gaps',
        'Subsequence can have gaps (preserve order), substring must be contiguous',
        'Substring is always longer',
      ],
      correctAnswer: 2,
      explanations: [
        'They are very different! Subsequence allows gaps, substring does not.',
        'This is backwards - subsequence allows gaps, substring must be contiguous.',
        'Correct! A subsequence preserves relative order but doesn\'t need consecutive characters. For example, "ACE" is a subsequence of "ABCDE" but not a substring. A substring must be contiguous like "BCD".',
        'Length depends on the specific strings, not the concept.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'In the LCS DP table, what does dp[i][j] represent?',
      options: [
        'Whether character i matches character j',
        'LCS of text1[i] and text2[j]',
        'LCS of first i characters of text1 and first j characters of text2',
        'The i-th character in the LCS',
      ],
      correctAnswer: 2,
      explanations: [
        'No, dp stores lengths, not boolean matches.',
        'Close, but it\'s not just those single characters - it\'s all chars up to those indices.',
        'Correct! dp[i][j] = LCS length for text1[0...i-1] and text2[0...j-1]. We use 1-indexed table where dp[0][j] and dp[i][0] represent empty string cases.',
        'No, it stores a length, not a character.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'When text1[i-1] != text2[j-1] (characters don\'t match), what is the transition?',
      options: [
        'dp[i][j] = 0',
        'dp[i][j] = dp[i-1][j-1]',
        'dp[i][j] = max(dp[i-1][j], dp[i][j-1])',
        'dp[i][j] = dp[i-1][j] + dp[i][j-1]',
      ],
      correctAnswer: 2,
      explanations: [
        'Wrong - we don\'t reset to 0 for LCS (that\'s for substring). We keep the best result so far.',
        'Wrong - the diagonal doesn\'t help if characters don\'t match.',
        'Correct! When characters don\'t match, we try both options: skip current char from text1 (dp[i-1][j]) or skip from text2 (dp[i][j-1]), and take the maximum.',
        'Wrong - we take max, not sum. We\'re finding the longest single subsequence, not counting paths.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the time complexity of the LCS algorithm?',
      options: [
        'O(m + n)',
        'O(m × n)',
        'O(2^(m+n))',
        'O(m × n × log(m+n))',
      ],
      correctAnswer: 1,
      explanations: [
        'Too optimistic - we need to compare every character of text1 with every character of text2.',
        'Correct! We fill an m×n table with constant work per cell, giving O(m × n) time complexity.',
        'This is the recursive approach without memoization, not the DP solution.',
        'The DP approach doesn\'t need any logarithmic factor.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const editDistanceData: LessonContent = {
  title: 'Edit Distance (Levenshtein Distance)',
  content: `Edit Distance, also known as Levenshtein Distance, is a fundamental algorithm in computer science that measures the minimum number of single-character edits needed to transform one string into another. It's used in spell checkers, DNA sequence alignment, plagiarism detection, and more.

<h2>Problem Definition</h2>

<div class="bg-blue-50 p-4 rounded-lg my-4">
  <p><strong>Problem (LeetCode 72):</strong> Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.</p>

  <p><strong>Allowed Operations:</strong></p>
  <ul>
    <li>Insert a character</li>
    <li>Delete a character</li>
    <li>Replace a character</li>
  </ul>
</div>

<div class="example-box">
  <h3>Example 1:</h3>
  <div class="bg-gray-50 p-3 rounded my-2">
    <p><strong>Input:</strong> word1 = "horse", word2 = "ros"</p>
    <p><strong>Output:</strong> 3</p>
    <p><strong>Explanation:</strong> Transform "horse" to "ros" in 3 operations:</p>
    <ul class="ml-4 mt-2">
      <li>1. horse → rorse (replace 'h' with 'r')</li>
      <li>2. rorse → rose (remove 'r')</li>
      <li>3. rose → ros (remove 'e')</li>
    </ul>
  </div>

  <h3>Example 2:</h3>
  <div class="bg-gray-50 p-3 rounded my-2">
    <p><strong>Input:</strong> word1 = "intention", word2 = "execution"</p>
    <p><strong>Output:</strong> 5</p>
    <p><strong>Explanation:</strong> Transform "intention" to "execution" in 5 operations:</p>
    <ul class="ml-4 mt-2">
      <li>1. intention → inention (remove 't')</li>
      <li>2. inention → enention (replace 'i' with 'e')</li>
      <li>3. enention → exention (replace 'n' with 'x')</li>
      <li>4. exention → exection (replace 'n' with 'c')</li>
      <li>5. exection → execution (insert 'u')</li>
    </ul>
  </div>
</div>

<h2>Why This is 2D DP</h2>

<p>Similar to LCS, Edit Distance requires tracking positions in BOTH strings:</p>

<div class="visualization">
  <pre>
String 1: H O R S E
String 2: R O S

State: dp[i][j] = minimum edits to convert word1[0...i-1] to word2[0...j-1]

At each position, we have up to 3 choices:
1. Insert: dp[i][j-1] + 1
2. Delete: dp[i-1][j] + 1
3. Replace: dp[i-1][j-1] + (0 if chars match, 1 if different)
  </pre>
</div>

<h2>The Recursive Insight</h2>

<p>Think recursively: to convert word1[0...i] to word2[0...j]:</p>

\`\`\`python
def edit_distance_recursive(word1, word2, i, j):
    # Base cases
    if i == 0:
        return j  # Insert j characters
    if j == 0:
        return i  # Delete i characters

    # Characters match - no edit needed
    if word1[i-1] == word2[j-1]:
        return edit_distance_recursive(word1, word2, i-1, j-1)

    # Characters differ - try all 3 operations
    insert = edit_distance_recursive(word1, word2, i, j-1) + 1
    delete = edit_distance_recursive(word1, word2, i-1, j) + 1
    replace = edit_distance_recursive(word1, word2, i-1, j-1) + 1

    return min(insert, delete, replace)
\`\`\`

<p><strong>Why DP?</strong> For "abc" -> "def", we compute the same subproblems multiple times. This exponential redundancy makes DP necessary!</p>

<h2>The 2D DP Solution</h2>

<h3>Step 1: Define the State</h3>

<div class="bg-green-50 p-4 rounded-lg my-4">
  <p><strong>State Definition:</strong></p>
  <p>\`dp[i][j]\` = minimum edits to convert \`word1[0...i-1]\` to \`word2[0...j-1]\`</p>

  <p><strong>Why 1-indexed?</strong> \`dp[0][j]\` represents converting empty string to \`word2[0...j-1]\` (j insertions), and \`dp[i][0]\` represents converting \`word1[0...i-1]\` to empty string (i deletions).</p>
</div>

<h3>Step 2: Base Cases</h3>

\`\`\`python
# Converting empty string to word2[0...j-1] requires j insertions
dp[0][j] = j for all j

# Converting word1[0...i-1] to empty string requires i deletions
dp[i][0] = i for all i
\`\`\`

<h3>Step 3: State Transition</h3>

<div class="bg-yellow-50 p-4 rounded-lg my-4">
  <p><strong>Transition Equation:</strong></p>
  <pre>
if word1[i-1] == word2[j-1]:
    # Characters match - no edit needed
    dp[i][j] = dp[i-1][j-1]
else:
    # Try all 3 operations and take minimum:
    insert = dp[i][j-1] + 1      # Insert word2[j-1]
    delete = dp[i-1][j] + 1      # Delete word1[i-1]
    replace = dp[i-1][j-1] + 1   # Replace word1[i-1] with word2[j-1]

    dp[i][j] = min(insert, delete, replace)
  </pre>
</div>

<h3>Visual Example: word1="HORSE", word2="ROS"</h3>

<p>Building the DP table:</p>

<div class="visualization">
  <pre>
        ""  R  O  S
    ""  0   1  2  3
    H   1   1  2  3
    O   2   2  1  2
    R   3   2  2  2
    S   4   3  3  2
    E   5   4  4  3

How to read:
- dp[0][0] = 0: empty to empty needs 0 edits
- dp[1][1] = 1: H->R needs 1 replace
- dp[2][2] = 1: HO->RO needs 1 replace (H->R)
- dp[3][3] = 2: HOR->ROS needs 2 edits
- dp[5][3] = 3: HORSE->ROS needs 3 edits

Final answer: dp[5][3] = 3
  </pre>
</div>

<h2>Complete Implementation</h2>

\`\`\`python
def min_distance(word1: str, word2: str) -> int:
    """
    Find minimum edit distance between two words.

    Time: O(m * n) where m = len(word1), n = len(word2)
    Space: O(m * n) for the DP table
    """
    m, n = len(word1), len(word2)

    # Create DP table
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    # Base cases
    for i in range(m + 1):
        dp[i][0] = i  # Delete all characters from word1
    for j in range(n + 1):
        dp[0][j] = j  # Insert all characters from word2

    # Fill table
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i-1] == word2[j-1]:
                # Characters match - no edit
                dp[i][j] = dp[i-1][j-1]
            else:
                # Take minimum of insert, delete, replace
                dp[i][j] = 1 + min(
                    dp[i][j-1],      # Insert
                    dp[i-1][j],      # Delete
                    dp[i-1][j-1]     # Replace
                )

    return dp[m][n]

# Examples
print(min_distance("horse", "ros"))        # 3
print(min_distance("intention", "execution"))  # 5
\`\`\`

<h2>Understanding Each Operation</h2>

<table class="w-full border-collapse my-4">
  <thead>
    <tr class="bg-gray-200">
      <th class="border p-3">Operation</th>
      <th class="border p-3">DP Transition</th>
      <th class="border p-3">Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border p-3"><strong>Insert</strong></td>
      <td class="border p-3">\`dp[i][j-1] + 1\`</td>
      <td class="border p-3">We already converted \`word1[0...i-1]\` to \`word2[0...j-2]\`. Now insert \`word2[j-1]\`</td>
    </tr>
    <tr class="bg-gray-50">
      <td class="border p-3"><strong>Delete</strong></td>
      <td class="border p-3">\`dp[i-1][j] + 1\`</td>
      <td class="border p-3">Delete \`word1[i-1]\`, then convert \`word1[0...i-2]\` to \`word2[0...j-1]\`</td>
    </tr>
    <tr>
      <td class="border p-3"><strong>Replace</strong></td>
      <td class="border p-3">\`dp[i-1][j-1] + 1\`</td>
      <td class="border p-3">Replace \`word1[i-1]\` with \`word2[j-1]\`, then both strings aligned by one char</td>
    </tr>
  </tbody>
</table>

<h2>Space Optimization</h2>

<p>Since we only need the previous row, we can optimize to O(n) space:</p>

\`\`\`python
def min_distance_optimized(word1: str, word2: str) -> int:
    """
    Space-optimized edit distance using rolling arrays.

    Time: O(m * n)
    Space: O(n)
    """
    m, n = len(word1), len(word2)

    # Use two arrays: previous and current row
    prev = list(range(n + 1))  # Base case: dp[0][j] = j
    curr = [0] * (n + 1)

    for i in range(1, m + 1):
        curr[0] = i  # Base case: dp[i][0] = i

        for j in range(1, n + 1):
            if word1[i-1] == word2[j-1]:
                curr[j] = prev[j-1]
            else:
                curr[j] = 1 + min(
                    curr[j-1],    # Insert
                    prev[j],      # Delete
                    prev[j-1]     # Replace
                )

        # Swap arrays
        prev, curr = curr, prev

    return prev[n]
\`\`\`

<h2>Reconstructing the Edit Sequence</h2>

<p>To find the actual operations (not just the count), we backtrack:</p>

\`\`\`python
def min_distance_with_path(word1: str, word2: str):
    """
    Find edit distance and the actual sequence of operations.
    """
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    # Build DP table
    for i in range(m + 1):
        dp[i][0] = i
    for j in range(n + 1):
        dp[0][j] = j

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i-1] == word2[j-1]:
                dp[i][j] = dp[i-1][j-1]
            else:
                dp[i][j] = 1 + min(dp[i][j-1], dp[i-1][j], dp[i-1][j-1])

    # Backtrack to find operations
    operations = []
    i, j = m, n

    while i > 0 or j > 0:
        if i == 0:
            operations.append(f"Insert '{word2[j-1]}'")
            j -= 1
        elif j == 0:
            operations.append(f"Delete '{word1[i-1]}'")
            i -= 1
        elif word1[i-1] == word2[j-1]:
            i -= 1
            j -= 1
        else:
            # Find which operation was used
            if dp[i][j] == dp[i-1][j-1] + 1:
                operations.append(f"Replace '{word1[i-1]}' with '{word2[j-1]}'")
                i -= 1
                j -= 1
            elif dp[i][j] == dp[i-1][j] + 1:
                operations.append(f"Delete '{word1[i-1]}'")
                i -= 1
            else:
                operations.append(f"Insert '{word2[j-1]}'")
                j -= 1

    return dp[m][n], list(reversed(operations))

# Example
distance, ops = min_distance_with_path("horse", "ros")
print(f"Distance: {distance}")
for op in ops:
    print(f"  {op}")
\`\`\`

<h2>Variations and Applications</h2>

<h3>1. Weighted Edit Distance</h3>

<p>Different operations can have different costs:</p>

\`\`\`python
def weighted_edit_distance(word1, word2, insert_cost=1, delete_cost=1, replace_cost=1):
    """
    Edit distance with different costs for different operations.
    """
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    for i in range(m + 1):
        dp[i][0] = i * delete_cost
    for j in range(n + 1):
        dp[0][j] = j * insert_cost

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i-1] == word2[j-1]:
                dp[i][j] = dp[i-1][j-1]
            else:
                dp[i][j] = min(
                    dp[i][j-1] + insert_cost,
                    dp[i-1][j] + delete_cost,
                    dp[i-1][j-1] + replace_cost
                )

    return dp[m][n]
\`\`\`

<h3>2. One Edit Distance (LeetCode 161)</h3>

<p>Check if two strings are exactly one edit apart:</p>

\`\`\`python
def is_one_edit_distance(s: str, t: str) -> bool:
    """
    Check if strings are exactly one edit apart.
    Optimized: O(n) time, O(1) space.
    """
    m, n = len(s), len(t)

    # Must differ by at most 1 in length
    if abs(m - n) > 1:
        return False

    # Ensure s is the shorter string
    if m > n:
        s, t = t, s
        m, n = n, m

    for i in range(m):
        if s[i] != t[i]:
            # If same length, rest must match (replace)
            if m == n:
                return s[i+1:] == t[i+1:]
            # If different length, rest of s must match rest of t (insert/delete)
            else:
                return s[i:] == t[i+1:]

    # All chars matched - valid if lengths differ by 1 (one insert/delete)
    return m + 1 == n
\`\`\`

<h2>Real-World Applications</h2>

<ul>
  <li><strong>Spell Checkers:</strong> Finding closest dictionary word to a misspelling</li>
  <li><strong>DNA Sequence Alignment:</strong> Comparing genetic sequences for mutations</li>
  <li><strong>Plagiarism Detection:</strong> Finding similar documents despite minor changes</li>
  <li><strong>Version Control:</strong> Computing diffs between file versions</li>
  <li><strong>Auto-correct:</strong> Suggesting corrections based on edit distance</li>
  <li><strong>Fuzzy Search:</strong> Finding approximate matches in databases</li>
</ul>

<h2>Key Insights</h2>

<div class="bg-purple-50 p-4 rounded-lg my-4">
  <p><strong>Edit Distance vs LCS:</strong></p>
  <ul>
    <li><strong>LCS:</strong> Finds longest common subsequence (no modifications, only keep/skip)</li>
    <li><strong>Edit Distance:</strong> Finds minimum modifications (insert/delete/replace)</li>
    <li><strong>Relationship:</strong> Edit distance = m + n - 2×LCS (when only insert/delete allowed)</li>
  </ul>

  <p class="mt-4"><strong>Pattern Recognition:</strong></p>
  <ul>
    <li>String transformation → Think Edit Distance</li>
    <li>Multiple operations to choose → Take minimum</li>
    <li>Comparing two sequences → 2D DP with both indices</li>
  </ul>
</div>

<h2>Time and Space Complexity</h2>

<table class="w-full border-collapse my-4">
  <thead>
    <tr class="bg-gray-200">
      <th class="border p-3">Approach</th>
      <th class="border p-3">Time</th>
      <th class="border p-3">Space</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border p-3">Naive Recursion</td>
      <td class="border p-3">O(3^(m+n))</td>
      <td class="border p-3">O(m+n) stack</td>
    </tr>
    <tr class="bg-gray-50">
      <td class="border p-3">2D DP</td>
      <td class="border p-3">O(m × n)</td>
      <td class="border p-3">O(m × n)</td>
    </tr>
    <tr>
      <td class="border p-3">Space Optimized</td>
      <td class="border p-3">O(m × n)</td>
      <td class="border p-3">O(min(m, n))</td>
    </tr>
  </tbody>
</table>`,
  codeExample: `# Complete Edit Distance implementation

def min_distance(word1: str, word2: str) -> int:
    """
    Classic Edit Distance (Levenshtein Distance).
    Find minimum number of operations to convert word1 to word2.

    Operations: Insert, Delete, Replace

    Time: O(m * n)
    Space: O(m * n)
    """
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    # Base cases
    for i in range(m + 1):
        dp[i][0] = i
    for j in range(n + 1):
        dp[0][j] = j

    # Fill table
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i-1] == word2[j-1]:
                dp[i][j] = dp[i-1][j-1]
            else:
                dp[i][j] = 1 + min(
                    dp[i][j-1],      # Insert
                    dp[i-1][j],      # Delete
                    dp[i-1][j-1]     # Replace
                )

    return dp[m][n]


def min_distance_optimized(word1: str, word2: str) -> int:
    """
    Space-optimized version using rolling arrays.

    Time: O(m * n)
    Space: O(n)
    """
    m, n = len(word1), len(word2)
    prev = list(range(n + 1))
    curr = [0] * (n + 1)

    for i in range(1, m + 1):
        curr[0] = i
        for j in range(1, n + 1):
            if word1[i-1] == word2[j-1]:
                curr[j] = prev[j-1]
            else:
                curr[j] = 1 + min(curr[j-1], prev[j], prev[j-1])
        prev, curr = curr, prev

    return prev[n]


def min_distance_with_operations(word1: str, word2: str):
    """
    Find edit distance and the actual sequence of operations.
    """
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    # Build DP table
    for i in range(m + 1):
        dp[i][0] = i
    for j in range(n + 1):
        dp[0][j] = j

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i-1] == word2[j-1]:
                dp[i][j] = dp[i-1][j-1]
            else:
                dp[i][j] = 1 + min(dp[i][j-1], dp[i-1][j], dp[i-1][j-1])

    # Backtrack to find operations
    operations = []
    i, j = m, n

    while i > 0 or j > 0:
        if i == 0:
            operations.append(f"Insert '{word2[j-1]}'")
            j -= 1
        elif j == 0:
            operations.append(f"Delete '{word1[i-1]}'")
            i -= 1
        elif word1[i-1] == word2[j-1]:
            i -= 1
            j -= 1
        else:
            if dp[i][j] == dp[i-1][j-1] + 1:
                operations.append(f"Replace '{word1[i-1]}' -> '{word2[j-1]}'")
                i -= 1
                j -= 1
            elif dp[i][j] == dp[i-1][j] + 1:
                operations.append(f"Delete '{word1[i-1]}'")
                i -= 1
            else:
                operations.append(f"Insert '{word2[j-1]}'")
                j -= 1

    return dp[m][n], list(reversed(operations))


def is_one_edit_distance(s: str, t: str) -> bool:
    """
    Check if two strings are exactly one edit apart.
    Optimized: O(n) time, O(1) space.
    """
    m, n = len(s), len(t)

    if abs(m - n) > 1:
        return False

    if m > n:
        s, t = t, s
        m, n = n, m

    for i in range(m):
        if s[i] != t[i]:
            if m == n:
                return s[i+1:] == t[i+1:]
            else:
                return s[i:] == t[i+1:]

    return m + 1 == n


# Example usage and tests
if __name__ == "__main__":
    # Test basic edit distance
    print("Edit Distance Tests:")
    print(min_distance("horse", "ros"))           # 3
    print(min_distance("intention", "execution")) # 5
    print(min_distance("", "abc"))                # 3
    print(min_distance("abc", ""))                # 3

    # Test space-optimized version
    print("\\nSpace-Optimized:")
    print(min_distance_optimized("horse", "ros")) # 3

    # Test with operation tracking
    print("\\nWith Operations:")
    dist, ops = min_distance_with_operations("horse", "ros")
    print(f"Distance: {dist}")
    for op in ops:
        print(f"  {op}")

    # Test one edit distance
    print("\\nOne Edit Distance:")
    print(is_one_edit_distance("ab", "acb"))      # True
    print(is_one_edit_distance("cab", "ad"))      # False
    print(is_one_edit_distance("1203", "1213"))   # True`,
  exercises: [
    {
      prompt: 'Implement the edit distance algorithm. Return the minimum number of operations.',
      initialCode: `def min_distance(word1, word2):
    """
    Find minimum edit distance between two words.

    Args:
        word1: Source string
        word2: Target string

    Returns:
        Minimum number of edits (insert/delete/replace)

    Examples:
        >>> min_distance("horse", "ros")
        3
        >>> min_distance("intention", "execution")
        5
    """
    # Your code here
    pass`,
      solution: `def min_distance(word1, word2):
    """
    Find minimum edit distance using 2D DP.
    """
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    # Base cases
    for i in range(m + 1):
        dp[i][0] = i  # Delete all from word1
    for j in range(n + 1):
        dp[0][j] = j  # Insert all from word2

    # Fill table
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i-1] == word2[j-1]:
                dp[i][j] = dp[i-1][j-1]
            else:
                dp[i][j] = 1 + min(
                    dp[i][j-1],      # Insert
                    dp[i-1][j],      # Delete
                    dp[i-1][j-1]     # Replace
                )

    return dp[m][n]

# Test
print(min_distance("horse", "ros"))  # 3
print(min_distance("intention", "execution"))  # 5`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement the space-optimized version of edit distance using only O(n) space.',
      initialCode: `def min_distance_optimized(word1, word2):
    """
    Space-optimized edit distance using rolling arrays.

    Time: O(m * n)
    Space: O(n)
    """
    # Your code here
    pass`,
      solution: `def min_distance_optimized(word1, word2):
    """
    Space-optimized edit distance.
    """
    m, n = len(word1), len(word2)
    prev = list(range(n + 1))
    curr = [0] * (n + 1)

    for i in range(1, m + 1):
        curr[0] = i

        for j in range(1, n + 1):
            if word1[i-1] == word2[j-1]:
                curr[j] = prev[j-1]
            else:
                curr[j] = 1 + min(
                    curr[j-1],    # Insert
                    prev[j],      # Delete
                    prev[j-1]     # Replace
                )

        prev, curr = curr, prev

    return prev[n]

# Test
print(min_distance_optimized("horse", "ros"))  # 3`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Implement is_one_edit_distance: check if two strings are exactly one edit apart. Optimize for O(n) time and O(1) space.',
      initialCode: `def is_one_edit_distance(s, t):
    """
    Check if two strings are exactly one edit apart.

    Example:
        >>> is_one_edit_distance("ab", "acb")
        True
        >>> is_one_edit_distance("cab", "ad")
        False
    """
    # Your code here
    pass`,
      solution: `def is_one_edit_distance(s, t):
    """
    Check if exactly one edit apart.
    """
    m, n = len(s), len(t)

    # Must differ by at most 1
    if abs(m - n) > 1:
        return False

    # Make s the shorter string
    if m > n:
        s, t = t, s
        m, n = n, m

    for i in range(m):
        if s[i] != t[i]:
            # Same length: rest must match (replace)
            if m == n:
                return s[i+1:] == t[i+1:]
            # Different length: insert/delete
            else:
                return s[i:] == t[i+1:]

    # All matched - valid if differ by 1
    return m + 1 == n

# Test
print(is_one_edit_distance("ab", "acb"))    # True
print(is_one_edit_distance("cab", "ad"))    # False`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'What does dp[i][j] represent in the Edit Distance algorithm?',
      options: [
        'Whether character i equals character j',
        'Minimum edits to convert word1[0...i-1] to word2[0...j-1]',
        'The i-th operation needed',
        'Total number of matching characters',
      ],
      correctAnswer: 1,
      explanations: [
        'No, dp stores edit counts, not boolean comparisons.',
        'Correct! dp[i][j] represents the minimum number of operations needed to transform the first i characters of word1 into the first j characters of word2.',
        'No, it stores the minimum total edits, not individual operations.',
        'No, it tracks edit distance, not matches.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'When word1[i-1] == word2[j-1] (characters match), what is the transition?',
      options: [
        'dp[i][j] = dp[i-1][j-1]',
        'dp[i][j] = dp[i-1][j-1] + 1',
        'dp[i][j] = min(dp[i-1][j], dp[i][j-1])',
        'dp[i][j] = 0',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct! When characters match, no edit is needed. We just take the result from dp[i-1][j-1] (both strings aligned by one character without any operation).',
        'Wrong - we don\'t add 1 when characters match since no edit is needed.',
        'Wrong - this doesn\'t account for the matching diagonal case.',
        'Wrong - we carry forward previous edits, not reset to 0.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What does dp[i][j-1] + 1 represent in the edit distance transition?',
      options: [
        'Delete operation',
        'Replace operation',
        'Insert operation',
        'Match operation',
      ],
      correctAnswer: 2,
      explanations: [
        'No, delete is dp[i-1][j] + 1.',
        'No, replace is dp[i-1][j-1] + 1.',
        'Correct! dp[i][j-1] + 1 means we already converted word1[0...i-1] to word2[0...j-2], and now we INSERT word2[j-1] to complete the transformation.',
        'No, there\'s no operation when characters match.',
      ],
      difficulty: Difficulty.Advanced,
    },
    {
      question: 'What is the relationship between Edit Distance and LCS?',
      options: [
        'They are unrelated',
        'Edit Distance = LCS',
        'Edit Distance = m + n - 2×LCS (with only insert/delete)',
        'LCS = Edit Distance + m + n',
      ],
      correctAnswer: 2,
      explanations: [
        'They are related! Both are classic string DP problems.',
        'No, they measure different things.',
        'Correct! When only insert and delete are allowed (no replace), the edit distance equals m + n - 2×LCS. This is because we delete (m - LCS) chars from word1 and insert (n - LCS) chars from word2.',
        'No, this formula is incorrect.',
      ],
      difficulty: Difficulty.Advanced,
    },
  ],
};

// ============================================================================

export const twoDimensionalDPLessons = {
  'grid-paths': gridPathData,
  'longest-common-subsequence': longestCommonSubsequenceData,
  'edit-distance': editDistanceData,
};
