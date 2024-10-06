import { Concept, createConcept, Difficulty } from '@/common/commonConcept';
import { generateTimeComplexityTable } from '@/utils/generateTimeComplexityTable';

export const tupleConcepts: Concept[] = [
  createConcept(
    1,
    'What is a Tuple? How does it differ from other data structures?',
    `
  **Definition:** A tuple is an ordered, immutable collection of elements. Tuples are similar to lists, but they cannot be modified after creation.
  
  **Basic Structure:** Tuples store elements in a fixed order, and each element can be accessed using its index.
  
  **Example:**
  \`\`\`python
  my_tuple = (1, 2, 3, 4, 5)
  print(my_tuple[2])  # Output: 3
  \`\`\`
  
  **Key Characteristics:**
  - **Immutable:** Once a tuple is created, its elements cannot be changed.
  - **Ordered:** The elements in a tuple are stored in a specific order.
  - **Heterogeneous Elements:** Tuples can contain elements of different types.
      `,
    Difficulty.Beginner,
  ),
  createConcept(
    2,
    'What are the advantages and disadvantages of using tuples?',
    `
  <h2>Advantages:</h2>
  <ul>
    <li><strong>Immutable:</strong> Tuples are immutable, which can be advantageous in scenarios where data integrity and consistency are important.</li>
    <li><strong>Memory Efficiency:</strong> Tuples are generally more memory-efficient than lists because they are immutable and do not require additional memory for resizing.</li>
    <li><strong>Performance:</strong> Tuples can be slightly faster than lists for certain operations because of their immutability.</li>
  </ul>
  
  <h2>Disadvantages:</h2>
  <ul>
    <li><strong>Immutable:</strong> The immutability of tuples can be a limitation in scenarios where dynamic data modification is required.</li>
    <li><strong>Limited Functionality:</strong> Tuples have fewer methods and operations compared to lists, which can limit their functionality.</li>
    <li><strong>No Resizing:</strong> Tuples cannot be resized after creation, which can be a limitation in scenarios where dynamic resizing is required.</li>
  </ul>
  
  **Example:**
  \`\`\`python
  my_tuple = (1, 2, 3, 4, 5)
  print(my_tuple[2])  # Output: 3
  \`\`\`
  
  **Key Points:**
  - Tuples are ideal for scenarios where data integrity and immutability are important.
  - For dynamic data structures, other data structures like lists may be more suitable.
      `,
    Difficulty.Beginner,
  ),
  createConcept(
    3,
    'What is the time complexity of common operations on a tuple (access, insertion, deletion)?',
    `
**Time Complexity of Common Operations on Tuples:**
${generateTimeComplexityTable([
  {
    name: 'Access',
    complexity: 'O(1)',
    explanation:
      'Accessing an element in a tuple by its index is a constant-time operation.',
  },
  {
    name: 'Insertion',
    complexity: 'N/A',
    explanation:
      'Insertion is not possible in tuples because they are immutable.',
  },
  {
    name: 'Deletion',
    complexity: 'N/A',
    explanation:
      'Deletion is not possible in tuples because they are immutable.',
  },
  {
    name: 'Iteration',
    complexity: 'O(n)',
    explanation:
      'Iterating over all elements in a tuple takes O(n) time, where n is the number of elements.',
  },
])}
**Key Points:**
- Tuples are optimized for fast access but do not support insertion or deletion due to their immutability.
- Iterating over a tuple takes O(n) time.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    4,
    'Explain the difference between a tuple and a list.',
    `
  **Tuples:**
  - **Immutable:** Tuples are immutable, meaning their elements cannot be changed after creation.
  - **Ordered:** The elements in a tuple are stored in a specific order.
  - **Heterogeneous Elements:** Tuples can contain elements of different types.
  - **Memory Efficiency:** Tuples are generally more memory-efficient than lists.
  
  **Lists:**
  - **Mutable:** Lists are mutable, meaning their elements can be changed after creation.
  - **Ordered:** The elements in a list are stored in a specific order.
  - **Heterogeneous Elements:** Lists can contain elements of different types.
  - **Dynamic Resizing:** Lists can be resized after creation, allowing for dynamic data modification.
  
  **Key Points:**
  - Tuples are optimized for scenarios where data integrity and immutability are important.
  - Lists are optimized for scenarios where dynamic data modification and resizing are required.
      `,
    Difficulty.Beginner,
  ),
  createConcept(
    5,
    'What are some common use cases for tuples in programming?',
    `
  **Common Use Cases for Tuples:**
  <ul>
    <li><strong>Returning Multiple Values:</strong> Tuples are often used to return multiple values from a function.</li>
    <li><strong>Data Integrity:</strong> Tuples are used to ensure data integrity by preventing accidental modification of data.</li>
    <li><strong>Heterogeneous Data Storage:</strong> Tuples are used to store heterogeneous data, such as a combination of strings, numbers, and other types.</li>
    <li><strong>Dictionary Keys:</strong> Tuples can be used as keys in dictionaries, whereas lists cannot.</li>
    <li><strong>Unpack Values:</strong> Tuples are used to unpack values into variables in a single operation.</li>
    <li><strong>Immutable Data Structures:</strong> Tuples are used to represent immutable data structures, such as coordinates or dates.</li>
  </ul>
  
  **Example:**
  \`\`\`python
  # Returning multiple values using a tuple
  def get_coordinates():
      return (3, 4)
  
  x, y = get_coordinates()
  print(x, y)  # Output: 3 4
  \`\`\`
  
  **Key Points:**
  - Tuples are versatile and can be applied to various scenarios requiring immutability and data integrity.
  - Understanding the use cases helps in choosing the right data structure for a given problem.
      `,
    Difficulty.Beginner,
  ),
];
