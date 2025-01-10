import { Concept, createConcept, Difficulty } from '@/common/commonConcept';

export const setConcepts: Concept[] = [
  createConcept(
    1,
    'What is a Set? How does it differ from other data structures?',
    `
**Definition:** A set is an unordered collection of unique elements. Sets prevent duplicates and provide efficient membership testing and set operations like union, intersection, and difference.

**Basic Structure:** Typically implemented with a hash table, ensuring average O(1) membership and insertion.

**Example:**
\`\`\`python
my_set = {1, 2, 3, 4, 5}
print(my_set)  # Output: {1, 2, 3, 4, 5}
\`\`\`

**Key Characteristics:**
- **Unique Elements:** No duplicates allowed.
- **Unordered:** No fixed arrangement of elements.
- **Hash Table Implementation:** Ensures fast average-case lookups.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    2,
    'What are the advantages and disadvantages of using sets?',
    `
<h2>Advantages:</h2>
<ul>
  <li><strong>Efficient Membership Testing:</strong> O(1) on average.</li>
  <li><strong>Duplicates Removed Automatically:</strong> Ideal when uniqueness is mandatory.</li>
  <li><strong>Set Operations:</strong> Native support for union, intersection, difference, etc.</li>
</ul>

<h2>Disadvantages:</h2>
<ul>
  <li><strong>Unordered:</strong> Cannot rely on element order.</li>
  <li><strong>Memory Overhead:</strong> Hash tables can use more space than arrays/lists.</li>
  <li><strong>No Index Access:</strong> Cannot directly retrieve elements by index.</li>
</ul>

**Key Points:**
- Excellent for unique-element scenarios and quick membership checks.
- If ordering or indexing is important, lists or arrays may be more appropriate.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    3,
    'What is the time complexity of common operations on a set (membership testing, insertion, deletion)?',
    `
**Time Complexity of Common Set Operations:**
| Operation           | Complexity                | Explanation                                                     |
|---------------------|---------------------------|-----------------------------------------------------------------|
| **Membership Test** | O(1) average, O(n) worst  | Hash collisions can degrade performance but are typically rare. |
| **Insertion**       | O(1) average, O(n) worst  | Inserting new elements also relies on hash distribution.        |
| **Deletion**        | O(1) average, O(n) worst  | Removing an element is also typically O(1) on average.          |
| **Union**           | O(m + n)                  | Combining two sets depends on the sizes of both sets.           |
| **Intersection**    | O(min(m, n))              | Only need to check elements in the smaller set.                 |
| **Difference**      | O(m)                      | For set A - B, each element in A is checked against B.          |

**Key Points:**
- Sets excel at O(1) average-case operations but can degrade under poor hashing.
- Bulk operations like union/intersection have performance proportional to set sizes.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    4,
    'Explain the difference between a set and a list.',
    `
**Sets:**
- **Unique Elements:** Automatically removes duplicates.
- **Unordered:** No predictable element order.
- **Hash Table Based:** Optimized for fast lookups.
- **No Index Access:** You can’t do something like \`my_set[0]\`.

**Lists:**
- **Indexed Elements:** Maintains insertion order (in most languages).
- **Duplicates Allowed:** Permits identical elements.
- **Array Based:** Optimized for random index access.
- **Ordered:** Elements remain in the order you inserted them.

**Key Points:**
- Use sets to enforce uniqueness or quickly check membership.
- Use lists when you need a specific sequence or index-based access.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    5,
    'What are some common use cases for sets in programming?',
    `
**Common Use Cases:**
- **Removing Duplicates:** Convert a list to a set to eliminate repetition.
- **Membership Testing:** Check if an item exists in O(1) on average.
- **Set Operations:** Union, intersection, difference for fast aggregations or comparisons.
- **Uniqueness Constraints:** Ensure no duplicate IDs or data points.
- **Deduplication / Filtering:** Quick way to clean up repeating elements.

**Example (Removing duplicates):**
\`\`\`python
my_list = [1, 2, 2, 3, 4, 4, 5]
unique_elements = set(my_list)
print(unique_elements)  # {1, 2, 3, 4, 5}
\`\`\`

**Key Points:**
- Perfect for managing collections where you only need unique items.
- Integrated set operations make it powerful for data manipulation.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    6,
    'Ordered vs. Unordered Sets',
    `
**Ordered Set (e.g., TreeSet in Java, std::set in C++):**
- **Maintains Sorted Order:** Elements kept in ascending (or a defined) order.
- **Tree-Based Implementation:** Often balanced binary search trees (like Red-Black trees).
- **Operations:** O(log n) for insert, remove, and lookup.

**Unordered Set (e.g., HashSet in Java, std::unordered_set in C++):**
- **Hash Table Implementation:** Elements stored in buckets based on hash values.
- **Operations:** O(1) average for insert, remove, and lookup (O(n) worst case).
- **No Guaranteed Order:** The iteration order is not predictable.

**Key Points:**
- Ordered sets allow in-order iteration but cost O(log n) per operation.
- Unordered sets yield faster average operations but no meaningful ordering.
    `,
    Difficulty.Intermediate,
  ),
  createConcept(
    7,
    'Frozenset in Python and Immutability Concepts',
    `
**Frozenset:** An immutable version of a regular Python \`set\`. Once created, elements cannot be added or removed.

**Why Immutability Matters:**
- **Hashability:** A frozenset can be used as a key in a dictionary or as an element in another set.
- **Thread Safety:** Immutable objects reduce accidental changes in concurrent environments.
- **Functional Programming:** Emphasizes use of immutable data to avoid side effects.

**Example:**
\`\`\`python
my_set = {1, 2, 3}
my_frozenset = frozenset(my_set)
# my_frozenset.add(4)  # Error: cannot add to a frozenset
\`\`\`

**Key Points:**
- Frozensets preserve set features (unique elements, fast lookups) but prevent modification.
- Useful for data that must remain constant once created.
    `,
    Difficulty.Intermediate,
  ),
  createConcept(
    8,
    'Disjoint Set (Union-Find) for Partitioning',
    `
**Definition:** A disjoint set (or Union-Find) data structure keeps track of elements partitioned into distinct sets, allowing efficient union and find operations.

**Core Operations:**
1. **Find(x):** Determines which set x belongs to (finds root representative).
2. **Union(x, y):** Merges the sets containing x and y.

**Implementation Details:**
- **Parent Array:** Each element points to its "parent". A root element points to itself.
- **Path Compression:** Speeds up future queries by flattening the tree.
- **Union by Rank/Size:** Attach smaller tree under the root of the larger tree.

**Key Points:**
- Used in connectivity checks (e.g., checking if two nodes are in the same connected component).
- Common in Kruskal’s MST algorithm and other partitioning scenarios.
    `,
    Difficulty.Advanced,
  ),
  createConcept(
    9,
    'Collision Handling and Rehashing in Hash-Based Sets',
    `
**Collision Handling:** Occurs when two elements hash to the same bucket.
- **Separate Chaining:** Store colliding elements in a linked list or another structure.
- **Open Addressing:** Probe alternative buckets (linear, quadratic, double hashing).

**Rehashing:**
- **Load Factor:** If the ratio of elements to buckets exceeds a threshold, the set resizes.
- **Process:** Allocate a bigger table, re-insert existing elements, recalculate their positions.

**Key Points:**
- Collision handling prevents data loss when two elements share a hash.
- Rehashing ensures a balanced load factor, maintaining O(1) average complexities.
    `,
    Difficulty.Advanced,
  ),
];

