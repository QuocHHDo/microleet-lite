import { Concept, createConcept, Difficulty } from '@/common/commonConcept';
import { generateTimeComplexityTable } from '@/utils/generateTimeComplexityTable';

export const setConcepts: Concept[] = [
  createConcept(
    1,
    'What is a Set? How does it differ from other data structures?',
    `
  **Definition:** A set is an unordered collection of unique elements. Sets do not allow duplicate values and provide efficient membership testing and set operations like union, intersection, and difference.
  
  **Basic Structure:** Sets store elements in an unordered manner, and each element must be unique.
  
  **Example:**
  \`\`\`python
  my_set = {1, 2, 3, 4, 5}
  print(my_set)  # Output: {1, 2, 3, 4, 5}
  \`\`\`
  
  **Key Characteristics:**
  - **Unique Elements:** Sets do not allow duplicate values.
  - **Unordered:** The elements in a set are not stored in any particular order.
  - **Hash Table Implementation:** Sets are typically implemented using hash tables, which provide efficient average-case time complexity for operations.
      `,
    Difficulty.Beginner,
  ),
  createConcept(
    2,
    'What are the advantages and disadvantages of using sets?',
    `
  <h2>Advantages:</h2>
  <ul>
    <li><strong>Efficient Membership Testing:</strong> Sets provide O(1) average-case time complexity for membership testing.</li>
    <li><strong>Unique Elements:</strong> Sets automatically handle duplicate values, ensuring that each element is unique.</li>
    <li><strong>Set Operations:</strong> Sets support efficient set operations like union, intersection, and difference.</li>
  </ul>
  
  <h2>Disadvantages:</h2>
  <ul>
    <li><strong>Unordered:</strong> The elements in a set are not stored in any particular order, which can be a limitation in some use cases.</li>
    <li><strong>Memory Overhead:</strong> Sets may have higher memory overhead compared to simpler data structures like arrays or lists.</li>
    <li><strong>No Index Access:</strong> Elements in a set cannot be accessed using an index, unlike arrays or lists.</li>
  </ul>
  
  **Example:**
  \`\`\`python
  my_set = {1, 2, 3, 4, 5}
  print(3 in my_set)  # Output: True
  \`\`\`
  
  **Key Points:**
  - Sets are ideal for scenarios where unique elements and efficient membership testing are required.
  - For ordered data or indexed access, other data structures like lists or arrays may be more suitable.
      `,
    Difficulty.Beginner,
  ),
  createConcept(
    3,
    'What is the time complexity of common operations on a set (membership testing, insertion, deletion)?',
    `
**Time Complexity of Common Operations on Sets:**
${generateTimeComplexityTable([
  {
    name: 'Membership Testing',
    complexity: 'O(1) average, O(n) worst case',
    explanation:
      'Testing if an element is in a set is typically O(1) on average, but can degrade to O(n) in the worst case due to hash collisions.',
  },
  {
    name: 'Insertion',
    complexity: 'O(1) average, O(n) worst case',
    explanation:
      'Inserting an element into a set is typically O(1) on average, but can degrade to O(n) in the worst case due to hash collisions.',
  },
  {
    name: 'Deletion',
    complexity: 'O(1) average, O(n) worst case',
    explanation:
      'Deleting an element from a set is typically O(1) on average, but can degrade to O(n) in the worst case due to hash collisions.',
  },
  {
    name: 'Union',
    complexity: 'O(m + n)',
    explanation:
      'Union of two sets takes O(m + n) time, where m and n are the sizes of the two sets.',
  },
  {
    name: 'Intersection',
    complexity: 'O(min(m, n))',
    explanation:
      'Intersection of two sets takes O(min(m, n)) time, where m and n are the sizes of the two sets.',
  },
  {
    name: 'Difference',
    complexity: 'O(m)',
    explanation:
      'Difference of two sets takes O(m) time, where m is the size of the first set.',
  },
])}
**Key Points:**
- Sets are optimized for efficient membership testing, insertion, and deletion, with average-case time complexity of O(1).
- Worst-case time complexity can degrade to O(n) due to hash collisions.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    4,
    'Explain the difference between a set and a list.',
    `
  **Sets:**
  - **Unique Elements:** Sets do not allow duplicate values.
  - **Unordered:** The elements in a set are not stored in any particular order.
  - **Hash Table Implementation:** Sets are typically implemented using hash tables, which provide efficient average-case time complexity for operations.
  - **No Index Access:** Elements in a set cannot be accessed using an index.
  
  **Lists:**
  - **Indexed Elements:** Lists store data in an ordered sequence, allowing for access to elements using their index.
  - **Duplicate Elements:** Lists can contain duplicate elements.
  - **Array Implementation:** Lists are typically implemented using arrays, which provide efficient average-case time complexity for indexed access.
  - **Ordered:** The order of elements in a list is guaranteed.
  
  **Key Points:**
  - Sets are optimized for unique elements and efficient membership testing, while lists are optimized for indexed access and ordered storage.
  - Both data structures are versatile but have different use cases depending on the requirements.
      `,
    Difficulty.Beginner,
  ),
  createConcept(
    5,
    'What are some common use cases for sets in programming?',
    `
  **Common Use Cases for Sets:**
  <ul>
    <li><strong>Removing Duplicates:</strong> Sets are used to remove duplicate elements from a collection.</li>
    <li><strong>Membership Testing:</strong> Sets are used to efficiently test if an element is present in a collection.</li>
    <li><strong>Set Operations:</strong> Sets are used to perform operations like union, intersection, and difference on collections of elements.</li>
    <li><strong>Uniqueness Constraints:</strong> Sets are used to enforce uniqueness constraints in data models.</li>
    <li><strong>Mathematical Sets:</strong> Sets are used to represent mathematical sets and perform set operations.</li>
    <li><strong>Data Deduplication:</strong> Sets are used in data deduplication processes to ensure that only unique data is stored.</li>
  </ul>
  
  **Example:**
  \`\`\`python
  # Removing duplicates using a set
  my_list = [1, 2, 2, 3, 4, 4, 5]
  unique_elements = set(my_list)
  print(unique_elements)  # Output: {1, 2, 3, 4, 5}
  \`\`\`
  
  **Key Points:**
  - Sets are versatile and can be applied to various scenarios requiring unique elements and efficient membership testing.
  - Understanding the use cases helps in choosing the right data structure for a given problem.
      `,
    Difficulty.Beginner,
  ),
];
