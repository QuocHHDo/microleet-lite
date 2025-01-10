import { CheatSheetItem, createCheatSheet, OperationTypes } from '@/common/commonCheatSheet';

export const stringCheatSheet: CheatSheetItem[] = [
  // CREATE
  createCheatSheet(
    'Creating a string',
    `my_string = "Hello, World!"`,
    'Initializes a string with the value "Hello, World!".',
    OperationTypes.Create,
    'O(1)',
    'N/A',
  ),
  createCheatSheet(
    'String concatenation',
    `greeting = "Hello" + " " + "World!"`,
    'Concatenates three strings into "Hello World!".',
    OperationTypes.Create,
    'O(n + m)',
    'Concatenating large strings can be memory-intensive.',
  ),

  // ACCESS
  createCheatSheet(
    'Accessing characters',
    `first_char = my_string[0]`,
    'Accesses the first character of the string.',
    OperationTypes.Access,
    'O(1)',
    'Index out of range raises an IndexError.',
  ),
  createCheatSheet(
    'Slicing a string',
    `substring = my_string[1:5]`,
    'Returns a substring from index 1 to 4 (5 excluded).',
    OperationTypes.Access,
    'O(k)',
    'Slicing a large string can be memory-intensive.',
  ),

  // MODIFY
  createCheatSheet(
    'String to uppercase',
    `upper_string = my_string.upper()`,
    'Converts the string to uppercase, returning a new string.',
    OperationTypes.Modify,
    'O(n)',
    'N/A',
  ),
  createCheatSheet(
    'String to lowercase',
    `lower_string = my_string.lower()`,
    'Converts the string to lowercase, returning a new string.',
    OperationTypes.Modify,
    'O(n)',
    'N/A',
  ),
  createCheatSheet(
    'Replacing substrings',
    `new_string = my_string.replace("World", "Universe")`,
    'Replaces all occurrences of "World" with "Universe".',
    OperationTypes.Modify,
    'O(n)',
    'N/A',
  ),
  createCheatSheet(
    'Splitting a string',
    `words = my_string.split(" ")`,
    'Splits the string into a list of words using space as the delimiter.',
    OperationTypes.Modify,
    'O(n)',
    'N/A',
  ),
  createCheatSheet(
    'Joining strings',
    `joined_string = "-".join(words)`,
    'Joins a list of words into a single string with "-" as the separator.',
    OperationTypes.Modify,
    'O(n)',
    'N/A',
  ),
  createCheatSheet(
    'Stripping whitespace',
    `stripped_string = my_string.strip()`,
    'Removes leading and trailing whitespace.',
    OperationTypes.Modify,
    'O(n)',
    'N/A',
  ),

  // SEARCH
  createCheatSheet(
    'Finding substrings',
    `index = my_string.find("World")`,
    'Returns the index of the first occurrence of "World" (or -1 if not found).',
    OperationTypes.Search,
    'O(n)',
    'N/A',
  ),
  createCheatSheet(
    'Counting occurrences',
    `count = my_string.count("o")`,
    'Returns the number of times "o" appears in the string.',
    OperationTypes.Search,
    'O(n)',
    'N/A',
  ),
  createCheatSheet(
    'Checking if a string starts with a prefix',
    `starts_with = my_string.startswith("Hello")`,
    'Returns True if the string starts with "Hello", otherwise False.',
    OperationTypes.Search,
    'O(k)',
    'N/A',
  ),
  createCheatSheet(
    'Checking if a string ends with a suffix',
    `ends_with = my_string.endswith("World!")`,
    'Returns True if the string ends with "World!", otherwise False.',
    OperationTypes.Search,
    'O(k)',
    'N/A',
  ),
  createCheatSheet(
    'Checking if a string is alphanumeric',
    `is_alnum = my_string.isalnum()`,
    'Returns True if all characters are alphanumeric, otherwise False.',
    OperationTypes.Search,
    'O(n)',
    'N/A',
  ),
  createCheatSheet(
    'Checking if a string is alphabetic',
    `is_alpha = my_string.isalpha()`,
    'Returns True if all characters are alphabetic, otherwise False.',
    OperationTypes.Search,
    'O(n)',
    'N/A',
  ),
  createCheatSheet(
    'Checking if a string is numeric',
    `is_digit = my_string.isdigit()`,
    'Returns True if all characters are digits, otherwise False.',
    OperationTypes.Search,
    'O(n)',
    'N/A',
  ),
  createCheatSheet(
    'Checking if a string is lowercase',
    `is_lower = my_string.islower()`,
    'Returns True if all characters are lowercase, otherwise False.',
    OperationTypes.Search,
    'O(n)',
    'N/A',
  ),
  createCheatSheet(
    'Checking if a string is uppercase',
    `is_upper = my_string.isupper()`,
    'Returns True if all characters are uppercase, otherwise False.',
    OperationTypes.Search,
    'O(n)',
    'N/A',
  ),

  // UTILITY
  createCheatSheet(
    'String length',
    `length = len(my_string)`,
    'Returns the length of the string.',
    OperationTypes.Utility,
    'O(1)',
    'N/A',
  ),
];

