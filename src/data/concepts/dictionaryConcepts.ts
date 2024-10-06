import { Concept, createConcept, Difficulty } from '@/common/commonConcept';
import { generateTimeComplexityTable } from '@/utils/generateTimeComplexityTable';

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
    <li><strong>Efficient Operations:</strong> Dictionaries provide O(1) average-case time complexity for lookup, insertion, and deletion operations.</li>
    <li><strong>Flexibility:</strong> Dictionaries can store values of any type, including other dictionaries, making them highly versatile.</li>
    <li><strong>Dynamic Size:</strong> Dictionaries can grow or shrink dynamically as elements are added or removed.</li>
  </ul>
  
  <h2>Disadvantages:</h2>
  <ul>
    <li><strong>Memory Overhead:</strong> Dictionaries may have higher memory overhead compared to simpler data structures like arrays or lists.</li>
    <li><strong>Orderless:</strong> The order of elements in a dictionary is not guaranteed, which can be a limitation in some use cases.</li>
    <li><strong>Key Collisions:</strong> In rare cases, hash collisions can occur, leading to slightly slower operations.</li>
  </ul>
  
  **Example:**
  \`\`\`python
  my_dict = {'name': 'Alice', 'age': 30, 'city': 'New York'}
  print(my_dict['name'])  # Output: Alice
  \`\`\`
  
  **Key Points:**
  - Dictionaries are ideal for scenarios where efficient key-based lookup, insertion, and deletion are required.
  - For ordered data or simpler data structures, other data structures like lists or arrays may be more suitable.
      `,
    Difficulty.Beginner,
  ),
  createConcept(
    3,
    'What is the time complexity of common operations on a dictionary (lookup, insertion, deletion)?',
    `
**Time Complexity of Common Operations on Dictionaries:**
${generateTimeComplexityTable([
  {
    name: 'Lookup',
    complexity: 'O(1) average, O(n) worst case',
    explanation:
      'Looking up a value by its key is typically O(1) on average, but can degrade to O(n) in the worst case due to hash collisions.',
  },
  {
    name: 'Insertion',
    complexity: 'O(1) average, O(n) worst case',
    explanation:
      'Inserting a key-value pair is typically O(1) on average, but can degrade to O(n) in the worst case due to hash collisions.',
  },
  {
    name: 'Deletion',
    complexity: 'O(1) average, O(n) worst case',
    explanation:
      'Deleting a key-value pair is typically O(1) on average, but can degrade to O(n) in the worst case due to hash collisions.',
  },
  {
    name: 'Iteration',
    complexity: 'O(n)',
    explanation:
      'Iterating over all key-value pairs in a dictionary takes O(n) time, where n is the number of elements.',
  },
])}
**Key Points:**
- Dictionaries are optimized for efficient key-based operations, with average-case time complexity of O(1) for lookup, insertion, and deletion.
- Worst-case time complexity can degrade to O(n) due to hash collisions.
    `,
    Difficulty.Beginner,
  ),
  createConcept(
    4,
    'Explain the difference between a dictionary and a list.',
    `
  **Dictionaries:**
  - **Key-Value Pairs:** Dictionaries store data in the form of key-value pairs, allowing for fast access to values using their associated keys.
  - **Unique Keys:** Keys must be unique within a dictionary.
  - **Hash Table Implementation:** Dictionaries are typically implemented using hash tables, which provide efficient average-case time complexity for operations.
  - **Orderless:** The order of elements in a dictionary is not guaranteed.
  
  **Lists:**
  - **Indexed Elements:** Lists store data in an ordered sequence, allowing for access to elements using their index.
  - **Duplicate Elements:** Lists can contain duplicate elements.
  - **Array Implementation:** Lists are typically implemented using arrays, which provide efficient average-case time complexity for indexed access.
  - **Ordered:** The order of elements in a list is guaranteed.
  
  **Key Points:**
  - Dictionaries are optimized for key-based lookup, insertion, and deletion, while lists are optimized for indexed access and ordered storage.
  - Both data structures are versatile but have different use cases depending on the requirements.
      `,
    Difficulty.Beginner,
  ),
  createConcept(
    5,
    'What are some common use cases for dictionaries in programming?',
    `
  **Common Use Cases for Dictionaries:**
  <ul>
    <li><strong>Caching:</strong> Dictionaries are used to implement caching mechanisms, where frequently accessed data is stored for quick retrieval.</li>
    <li><strong>Database Indexing:</strong> Dictionaries are used to index database records, allowing for efficient lookup based on unique keys.</li>
    <li><strong>Configuration Management:</strong> Dictionaries are used to store configuration settings, where keys represent configuration options and values represent their settings.</li>
    <li><strong>Counting Frequencies:</strong> Dictionaries are used to count the frequency of elements in a collection, where keys represent elements and values represent their counts.</li>
    <li><strong>Graph Representation:</strong> Dictionaries are used to represent graphs, where keys represent nodes and values represent their connections (edges).</li>
    <li><strong>Data Aggregation:</strong> Dictionaries are used to aggregate data, where keys represent categories and values represent aggregated data for each category.</li>
  </ul>
  
  **Example:**
  \`\`\`python
  # Counting frequencies using a dictionary
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
  - Dictionaries are versatile and can be applied to various scenarios requiring efficient key-based operations.
  - Understanding the use cases helps in choosing the right data structure for a given problem.
      `,
    Difficulty.Beginner,
  ),
];
