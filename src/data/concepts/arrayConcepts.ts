import { Concept, createConcept, Difficulty } from '@/common/commonConcept';
import { generateTimeComplexityTable } from '@/utils/generateTimeComplexityTable';

export const arrayConcepts: Concept[] = [
  createConcept(
    1,
    'What is an Array? How does it differ from other data structures?',
    `
  **Definition:** An array is a collection of elements, all of the same type, stored in contiguous memory locations.
  
  **Basic Structure:** Arrays store elements in a linear fashion, allowing for efficient access to any element using an index.
  
  **Example:**
  \`\`\`python
  my_array = [1, 2, 3, 4, 5]
  \`\`\`
  
  **Key Characteristics:**
  - **Fixed Size:** Arrays have a fixed size, determined when they are created.
  - **Random Access:** Access elements directly using their index with O(1) time complexity.
  - **Contiguous Memory:** Elements are stored consecutively in memory, making access more efficient.
      `,
    Difficulty.Beginner,
  ),
  createConcept(
    2,
    'What are the advantages and disadvantages of using arrays?',
    `
  <h2>Advantages:</h2>
  <ul>
    <li><strong>Fast Access:</strong> Arrays allow for <strong>O(1) time complexity</strong> for accessing elements using their index.</li>
    <li><strong>Memory Efficiency:</strong> Elements are stored in <strong>contiguous memory locations</strong>, which can be more memory-efficient.</li>
    <li><strong>Simple Implementation:</strong> Arrays are straightforward to implement and use in most programming languages.</li>
  </ul>
  
  <h2>Disadvantages:</h2>
  <ul>
    <li><strong>Fixed Size:</strong> Arrays have a <strong>fixed size</strong>, which can lead to wasted memory if the array is not fully utilized or insufficient memory if the array needs to grow.</li>
    <li><strong>Insertion and Deletion:</strong> Inserting or deleting elements in the middle of an array can be inefficient, requiring <strong>shifting of subsequent elements</strong>.</li>
    <li><strong>Memory Allocation:</strong> Dynamically resizing an array can be costly and may require <strong>copying elements to a new location</strong>.</li>
  </ul>
  
  **Example:**
  \`\`\`python
  # Fast access example
  my_array = [1, 2, 3, 4, 5]
  print(my_array[2])  # Output: 3
  
  # Inefficient insertion example
  my_array.insert(2, 10)  # Requires shifting elements
  \`\`\`
  
  **Key Points:**
  - Arrays are ideal for scenarios where the size is known and access patterns are random.
  - For dynamic data structures, other data structures like <strong>linked lists</strong> or <strong>dynamic arrays</strong> (e.g., Python's list) may be more suitable.
      `,
    Difficulty.Beginner,
  ),
  createConcept(
    3,
    'What is the time complexity of common operations on an array (access, insertion, deletion)?',
    `
**Time Complexity of Common Operations on Arrays:**
${generateTimeComplexityTable([
  {
    name: 'Access',
    complexity: 'O(1)',
    explanation:
      'Accessing an element in an array by its index is a direct operation.',
  },
  {
    name: 'Insertion - Append',
    complexity: 'O(1) (amortized)',
    explanation:
      'Appending an element to the end of an array is typically O(1).',
  },
  {
    name: 'Insertion - Begin/Mid',
    complexity: 'O(n)',
    explanation:
      'Inserting at the beginning/middle requires shifting elements.',
  },
  {
    name: 'Deletion - At the End',
    complexity: 'O(1)',
    explanation: 'Deleting from the end is O(1) as it just adjusts the size.',
  },
  {
    name: 'Deletion - Begin/Mid',
    complexity: 'O(n)',
    explanation:
      'Deleting at the beginning or middle requires shifting elements.',
  },
])}
**Key Points:**
- Arrays are optimized for fast access but can be inefficient for insertions and deletions, especially in the middle or at the beginning.
- Dynamic arrays (e.g., Python's list) handle resizing more efficiently with amortized O(1) append operations.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    4,
    'Explain the difference between static and dynamic arrays.',
    `
  **Static Arrays:**
  - **Fixed Size:** Static arrays have a fixed size, determined when they are created.
  - **Memory Allocation:** Memory is allocated at the time of creation, and it cannot be changed.
  - **Example:** In C, you might declare an array like this: \`int arr[10];\`
  
  **Dynamic Arrays:**
  - **Resizable:** Dynamic arrays can resize themselves as needed.
  - **Memory Allocation:** Memory is allocated dynamically, and the array can grow or shrink as elements are added or removed.
  - **Example:** In Python, a list is a dynamic array: \`my_list = [1, 2, 3]\` and you can append elements without worrying about the size.
  
  **Key Points:**
  - Static arrays are more memory-efficient but less flexible.
  - Dynamic arrays are more flexible but may require more memory management.
      `,
    Difficulty.Beginner,
  ),
];
