import { Concept, createConcept, Difficulty } from '@/common/commonConcept';

export const tupleConcepts: Concept[] = [
  createConcept(
    1,
    'What is a Tuple? How does it differ from other data structures?',
    `
**Definition:** A tuple is an ordered, immutable collection of elements. Once created, the elements cannot be altered.

**Basic Structure:**
\`\`\`python
my_tuple = (1, 2, 3, 4, 5)
print(my_tuple[2])  # Output: 3
\`\`\`

**Key Characteristics:**
- **Immutable:** Elements cannot be changed after creation.
- **Ordered:** The element sequence is fixed.
- **Heterogeneous Elements:** Tuples can contain values of various types.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    2,
    'What are the advantages and disadvantages of using tuples?',
    `
<h2>Advantages:</h2>
<ul>
  <li><strong>Immutable:</strong> Ensures data integrity; accidental changes are prevented.</li>
  <li><strong>Memory Efficiency:</strong> Often more memory-friendly than lists.</li>
  <li><strong>Performance:</strong> Can be faster for lookups and iterations due to immutability.</li>
</ul>

<h2>Disadvantages:</h2>
<ul>
  <li><strong>Immutable:</strong> Cannot modify or resize once created.</li>
  <li><strong>Fewer Methods:</strong> Tuples lack many of the built-in methods lists have.</li>
  <li><strong>No In-Place Updates:</strong> Changes require creating a new tuple.</li>
</ul>

**Key Points:**
- Tuples excel in scenarios where data should remain constant.
- Dynamic or frequently changing data is better suited for lists or other mutable structures.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    3,
    'What is the time complexity of common operations on a tuple (access, insertion, deletion)?',
    `
**Time Complexity of Tuple Operations:**
| Operation   | Complexity | Explanation                                                         |
|-------------|-----------|---------------------------------------------------------------------|
| **Access**    | O(1)       | Directly index an element by position.                             |
| **Insertion** | N/A        | Not supported (immutability).                                      |
| **Deletion**  | N/A        | Not supported (immutability).                                      |
| **Iteration** | O(n)       | Visiting each element is proportional to the tuple size (n).       |

**Key Points:**
- Tuples are optimized for quick access and iteration.
- Insertion or deletion requires creating a new tuple, reflecting their immutable nature.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    4,
    'Explain the difference between a tuple and a list.',
    `
**Tuples:**
- **Immutable:** Contents cannot change after creation.
- **Ordered:** Each element is stored in a fixed position.
- **Fewer Methods:** Limited built-in operations.
- **Memory-Efficient:** Less overhead compared to lists.

**Lists:**
- **Mutable:** Can insert, delete, or update elements.
- **Ordered:** Retain the order of insertion.
- **Greater Flexibility:** More methods for sorting, appending, etc.
- **Resizable:** Can grow or shrink in size dynamically.

**Key Points:**
- Use tuples for data integrity and faster, static structures.
- Use lists for dynamic data where in-place modifications are needed.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    5,
    'What are some common use cases for tuples in programming?',
    `
**Common Use Cases:**
- **Returning Multiple Values:** Functions can return multiple items in a tuple.
- **Dictionary Keys:** Tuples can serve as dictionary keys (lists cannot).
- **Unpacking:** Easily assign multiple variables at once.
- **Immutable Data Storage:** Ensures certain data remains unchanged (e.g., coordinates).

**Example:**
\`\`\`python
def get_coordinates():
    return (3, 4)

x, y = get_coordinates()
print(x, y)  # 3 4
\`\`\`

**Key Points:**
- Tuples shine where structure and immutability matter.
- Frequent changes to data suggest using a mutable structure.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    6,
    'Named Tuples for Improved Readability',
    `
**Definition:** Named tuples (e.g., \`collections.namedtuple\` in Python) extend regular tuples by providing named fields.

**Example:**
\`\`\`python
from collections import namedtuple

Point = namedtuple('Point', ['x', 'y'])
p = Point(x=1, y=2)
print(p.x, p.y)  # 1 2
\`\`\`

**Benefits:**
- **Readability:** Access fields by name instead of index.
- **Immutability:** Behaves like a standard tuple (cannot alter fields).
- **Lightweight:** Similar memory footprint, just more convenient access.

**Key Points:**
- Ideal for small, immutable records where field names enhance clarity.
    `,
    Difficulty.Intermediate,
  ),
  createConcept(
    7,
    'Tuple Packing and Unpacking',
    `
  **Packing:** Group values into a tuple without explicitly calling \\\`tuple\\\`.
  \`\`\`python
  my_tuple = 1, 2, 3
  \`\`\`
  
  **Unpacking:** Split a tuple into separate variables.
  \`\`\`python
  a, b, c = my_tuple  # a=1, b=2, c=3
  \`\`\`
  
  **Extended Unpacking (Python 3+):**
  \`\`\`python
  a, *rest = (1, 2, 3, 4)
  # a = 1, rest = [2, 3, 4]
  \`\`\`
  
  **Use Cases:**
  - **Multiple Returns:** \\\`return x, y, z\\\` then \\\`a, b, c = func()\\\`
  - **Sequence Processing:** Easily split leading/trailing elements.
  
  **Key Points:**
  - A concise way to handle sequence data.
  - Minimizes boilerplate while preserving immutability.
    `,
    Difficulty.Intermediate,
  ),
  createConcept(
    8,
    'When and Why to Prefer Tuples for Dictionary Keys',
    `
**Scenario:** Need a compound key that remains stable (e.g., 2D coordinates, multi-part IDs).

**Rationale:**
- **Hashable:** Tuples are hashable if their contents are also hashable.
- **Immutable:** Eliminates accidental modification of key fields.
- **Concise Syntax:** \`dict[((x, y))] = value\` is straightforward.

**Example:**
\`\`\`python
grid = {}
grid[(0, 0)] = "Start"
grid[(1, 2)] = "Treasure"
print(grid[(1, 2)])  # "Treasure"
\`\`\`

**Key Points:**
- Tuples make safe, readable keys for complex lookups.
- Use caution if any element in the tuple is mutable, as that breaks hashability.
    `,
    Difficulty.Intermediate,
  ),
  createConcept(
    9,
    'Performance and Memory Footprint: Tuples vs. Lists',
    `
**Memory Usage:**
- Tuples are often slightly smaller than lists of the same size because they don't need extra room for potential growth.

**Performance:**
- **Creation:** Tuples can be created faster since they are fixed in size.
- **Iteration:** Similar or marginally faster than lists in some languages due to immutability guarantees.
- **Access:** Both have O(1) indexing.

**Trade-Offs:**
- If the data must change, lists are better. 
- If you want a lightweight, read-only structure, tuples perform well.

**Key Points:**
- Subtle performance gains with tuples can be beneficial in tight loops or large data sets.
- Gains vary by language implementation and usage patterns.
    `,
    Difficulty.Advanced,
  ),
  createConcept(
    10,
    'Functional Programming and Immutability with Tuples',
    `
**Functional Paradigm:**
- **Side-Effect-Free:** Functions avoid altering data in place, often returning new tuples instead.
- **Predictable Behavior:** Immutability eases reasoning about state and concurrency.

**Use Cases:**
- **Concurrent Systems:** Immutable objects like tuples reduce race conditions.
- **Pure Functions:** Return new tuples without mutating inputs.

**Key Points:**
- Tuples align well with functional programming idioms.
- Immutability fosters safer parallel or multi-threaded operations.
    `,
    Difficulty.Advanced,
  ),
];
