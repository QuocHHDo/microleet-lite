import { Concept, createConcept, Difficulty } from '@/common/commonConcept';

export const dictionaryConcepts: Concept[] = [
  createConcept(
    1,
    'What is a Dictionary? How does it differ from other data structures?',
    `
**Definition:** A dictionary (also known as a map, hash map, or associative array) is a collection of key-value pairs, where each key is unique. Dictionaries provide efficient lookup, insertion, and deletion operations based on keys.

**Basic Structure:** Dictionaries store data in the form of key-value pairs, allowing for fast access to values using their associated keys.

**Example:**
\`\`\`python
my_dict = {'name': 'Alice', 'age': 30, 'city': 'New York'}
print(my_dict['name'])  # Output: Alice
\`\`\`

**Key Characteristics:**
- **Key-Value Pairs:** Each element in a dictionary consists of a key and its associated value.
- **Unique Keys:** Keys must be unique within a dictionary.
- **Hash Table Implementation:** Dictionaries are typically implemented using hash tables, which provide efficient average-case time complexity for operations.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    2,
    'What are the advantages and disadvantages of using dictionaries?',
    `
<h2>Advantages:</h2>
<ul>
  <li><strong>Efficient Operations:</strong> Dictionaries provide O(1) average-case time complexity for lookup, insertion, and deletion.</li>
  <li><strong>Flexibility:</strong> Dictionaries can store values of any type, making them highly versatile.</li>
  <li><strong>Dynamic Size:</strong> Dictionaries can grow or shrink dynamically as elements are added or removed.</li>
</ul>

<h2>Disadvantages:</h2>
<ul>
  <li><strong>Memory Overhead:</strong> Dictionaries may have higher memory usage compared to simpler data structures like arrays or lists.</li>
  <li><strong>Orderless (in many languages):</strong> The order of elements is not guaranteed, which can be a limitation in some use cases.</li>
  <li><strong>Key Collisions:</strong> Although rare, hash collisions can lead to slower operations.</li>
</ul>

**Key Points:**
- Dictionaries are ideal for scenarios requiring efficient key-based operations.
- For ordered or simpler data, lists or arrays may be more suitable.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    3,
    'What is the time complexity of common operations on a dictionary (lookup, insertion, deletion)?',
    `
**Time Complexity of Common Operations on Dictionaries:**
| Operation | Complexity                 | Explanation                                                                    |
|-----------|----------------------------|--------------------------------------------------------------------------------|
| **Lookup**    | O(1) average, O(n) worst | Typically O(1) due to hashing, but collisions can degrade performance.         |
| **Insertion** | O(1) average, O(n) worst | Inserting a key-value pair is typically O(1). Collisions can cause a slowdown. |
| **Deletion**  | O(1) average, O(n) worst | Deleting by key is typically O(1). Collisions can degrade performance.         |
| **Iteration** | O(n)                    | Iterating over all elements takes O(n), where n is the number of entries.      |

**Key Points:**
- Dictionaries are optimized for key-based access with an O(1) average-case time complexity.
- Worst-case O(n) behavior occurs under heavy hash collisions or poor hash distributions.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    4,
    'Explain the difference between a dictionary and a list.',
    `
**Dictionaries:**
- **Key-Value Pairs:** Data is stored as key-value pairs.
- **Unique Keys:** Keys must be unique.
- **Hash Table Implementation:** Efficient average-case time complexity for lookups.
- **Not Necessarily Ordered:** Order is not guaranteed in many implementations (though Python 3.7+ maintains insertion order, it's more of a language-specific detail).

**Lists:**
- **Indexed Elements:** Data is stored in a sequential, zero-based index.
- **Duplicate Elements:** Lists can contain duplicates.
- **Array Implementation:** Provides fast access by index.
- **Ordered:** Element order is guaranteed.

**Key Points:**
- Use dictionaries when you need fast key-based lookups.
- Use lists when order and index-based access are important.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    5,
    'What are some common use cases for dictionaries in programming?',
    `
**Common Use Cases for Dictionaries:**
- **Caching:** Store frequently accessed data for quick retrieval.
- **Database Indexing:** Provide fast lookups for records based on unique keys.
- **Configuration Management:** Store application settings with keys and corresponding values.
- **Counting Frequencies:** Track the frequency of elements in a collection.
- **Graph Representation:** Map nodes to their neighbors in adjacency lists.
- **Data Aggregation:** Summarize or group data by categories.

**Example (counting frequencies):**
\`\`\`python
words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
frequency = {}
for word in words:
    if word in frequency:
        frequency[word] += 1
    else:
        frequency[word] = 1
print(frequency)  # Output: {'apple': 3, 'banana': 2, 'orange': 1}
\`\`\`

**Key Points:**
- Dictionaries shine in scenarios needing O(1) average-case lookups by key.
- Often used when linking unique identifiers to complex data structures.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    6,
    'How do hashing and collision resolution work in dictionaries?',
    `
**Hashing:** Converts a key into a numerical hash value that determines where the key-value pair is stored in memory.

**Collision Resolution:** Occurs when two keys map to the same index.
- **Open Addressing:** Finds another open slot in the table (e.g., linear probing, quadratic probing).
- **Separate Chaining:** Stores colliding elements in a linked list or similar structure at that slot.

**Key Points:**
- Effective hashing and collision resolution minimize worst-case lookups.
- Different languages and libraries can implement these mechanisms differently under the hood.
    `,
    Difficulty.Intermediate,
  ),
  createConcept(
    7,
    'How do dictionaries handle resizing or rehashing, and why is it important?',
    `
**Definition:** Resizing or rehashing occurs when a dictionary reaches a certain load factor (ratio of number of elements to hash table size).

**Why It Matters:**
- **Performance:** Keeping the load factor balanced ensures O(1) average-case operations.
- **Implementation Detail:** Many languages grow the underlying hash table size automatically, recalculating the hash positions for all elements.

**Example (pseudo-flow):**
1. Detect load factor above threshold.
2. Allocate a larger table.
3. Recompute positions for existing keys.
4. Insert each key-value pair into the new table.

**Key Points:**
- Resizing ensures dictionaries remain efficient as elements grow.
- It can briefly impact performance during the rehash, but it\'s essential to maintain fast lookups overall.
    `,
    Difficulty.Intermediate,
  ),
  createConcept(
    8,
    'When would you consider using an Ordered Dictionary (or TreeMap) over a standard dictionary?',
    `
**Ordered Dictionary (OrderedDict/Python or TreeMap/Java):**
- **Maintains Order:** Preserves insertion order or sorts keys (in the case of TreeMap).
- **Use Cases:** Situations where iteration order or sorted order is critical (e.g., LRU caching, range queries).

**Trade-Offs:**
- **Space and Time Costs:** Storing or enforcing order can increase overhead and affect performance.
- **Alternative Structures:** Some environments have "sorted dictionaries" or "treemaps" that maintain keys in a balanced tree, enabling in-order traversal or range lookups.

**Key Points:**
- Standard dictionaries typically do not provide guaranteed key ordering.
- Ordered dictionaries or tree-based maps fill that gap at the cost of extra overhead.
    `,
    Difficulty.Intermediate,
  ),
];
