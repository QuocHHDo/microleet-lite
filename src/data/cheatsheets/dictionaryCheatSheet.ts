import { CheatSheetItem, createCheatSheet, OperationTypes } from '@/common/commonCheatSheet';

export const dictionaryCheatSheet: CheatSheetItem[] = [
  // CREATE
  createCheatSheet(
    'Creating a dictionary',
    'my_dict = {"key1": "value1", "key2": "value2"}',
    'Initializes a dictionary with key-value pairs.',
    OperationTypes.Create,
    'O(1)',
    'N/A',
  ),
  createCheatSheet(
    'Creating a dictionary from keys',
    'keys = ["key1", "key2", "key3"]\nmy_dict = dict.fromkeys(keys, "default_value")',
    'Creates a dictionary with the given keys and a default value.',
    OperationTypes.Create,
    'O(n)',
    'n is the number of keys.',
  ),
  createCheatSheet(
    'Dictionary comprehension',
    '{k: k**2 for k in range(5)}',
    'Creates a dictionary using a concise syntax; keys are 0..4, values are their squares.',
    OperationTypes.Create,
    'O(n)',
    'N/A',
  ),

  // ADD
  createCheatSheet(
    'Adding a key-value pair',
    'my_dict["key3"] = "value3"',
    'Adds a new key-value pair to the dictionary.',
    OperationTypes.Add,
    'O(1)',
    'N/A',
  ),

  // ACCESS
  createCheatSheet(
    'Accessing a value by key',
    'value = my_dict["key1"]',
    'Retrieves the value associated with the key "key1".',
    OperationTypes.Access,
    'O(1)',
    'Accessing a non-existent key will raise a KeyError.',
  ),
  createCheatSheet(
    'Getting a value with a default',
    'value = my_dict.get("key4", "default_value")',
    'Returns the value for "key4" if it exists, otherwise returns "default_value".',
    OperationTypes.Access,
    'O(1)',
    'N/A',
  ),
  createCheatSheet(
    'Checking if a key exists',
    '"key1" in my_dict',
    'Returns True if "key1" is a key in the dictionary, otherwise False.',
    OperationTypes.Search,
    'O(1)',
    'N/A',
  ),
  createCheatSheet(
    'Checking for key membership',
    'if "key1" in my_dict:',
    'Another way to check if "key1" is present in the dictionary.',
    OperationTypes.Search,
    'O(1)',
    'N/A',
  ),

  // MODIFY
  createCheatSheet(
    'Updating a value by key',
    'my_dict["key1"] = "new_value"',
    'Updates the value associated with "key1".',
    OperationTypes.Modify,
    'O(1)',
    'N/A',
  ),
  createCheatSheet(
    'Setting a default value',
    'value = my_dict.setdefault("key4", "default_value")',
    'Sets "key4" to "default_value" if it is not already in the dictionary. Returns the final value.',
    OperationTypes.Modify,
    'O(1)',
    'N/A',
  ),
  createCheatSheet(
    'Updating a dictionary with another dictionary',
    'my_dict.update({"key5": "value5", "key6": "value6"})',
    'Adds or overwrites key-value pairs from another dictionary.',
    OperationTypes.Modify,
    'O(k)',
    'k is the number of key-value pairs in the other dictionary.',
  ),

  // REMOVE
  createCheatSheet(
    'Removing a key-value pair',
    'del my_dict["key2"]',
    'Removes the pair associated with "key2".',
    OperationTypes.Remove,
    'O(1)',
    'Removing a non-existent key will raise a KeyError.',
  ),
  createCheatSheet(
    'Popping a key-value pair',
    'value = my_dict.pop("key1")',
    'Removes and returns the value associated with "key1".',
    OperationTypes.Remove,
    'O(1)',
    'Popping a non-existent key will raise a KeyError.',
  ),
  createCheatSheet(
    'Popping an arbitrary key-value pair',
    'key, value = my_dict.popitem()',
    'Removes and returns an arbitrary key-value pair from the dictionary.',
    OperationTypes.Remove,
    'O(1)',
    'Popping from an empty dictionary will raise a KeyError.',
  ),
  createCheatSheet(
    'Clearing the dictionary',
    'my_dict.clear()',
    'Removes all key-value pairs from the dictionary, leaving it empty.',
    OperationTypes.Remove,
    'O(1)',
    'N/A',
  ),

  // UTILITY
  createCheatSheet(
    'Getting the length of the dictionary',
    'length = len(my_dict)',
    'Returns the number of key-value pairs in the dictionary.',
    OperationTypes.Utility,
    'O(1)',
    'N/A',
  ),
  createCheatSheet(
    'Copying a dictionary',
    'new_dict = my_dict.copy()',
    'Creates a shallow copy of the dictionary.',
    OperationTypes.Utility,
    'O(n)',
    'n is the number of key-value pairs. Nested objects are still referenced.',
  ),
  createCheatSheet(
    'Merging dictionaries',
    'dict1 = {"key1": "value1"}\ndict2 = {"key2": "value2"}\nmerged_dict = {**dict1, **dict2}',
    'Merges two dictionaries into a new dictionary.',
    OperationTypes.Utility,
    'O(n + m)',
    'n and m are the sizes of the dictionaries. Overlapping keys are overwritten by dict2.',
  ),
  createCheatSheet(
    'Getting all keys',
    'keys = my_dict.keys()',
    'Returns a view object of all keys in the dictionary.',
    OperationTypes.Utility,
    'O(1)',
    'N/A',
  ),
  createCheatSheet(
    'Getting all values',
    'values = my_dict.values()',
    'Returns a view object of all values in the dictionary.',
    OperationTypes.Utility,
    'O(1)',
    'N/A',
  ),
  createCheatSheet(
    'Getting all key-value pairs',
    'items = my_dict.items()',
    'Returns a view object of all key-value pairs in the dictionary.',
    OperationTypes.Utility,
    'O(1)',
    'N/A',
  ),
  createCheatSheet(
    'Iterating over keys',
    'for key in my_dict:\n    print(key, my_dict[key])',
    'Iterates over all keys in the dictionary.',
    OperationTypes.Utility,
    'O(n)',
    'n is the number of key-value pairs.',
  ),
  createCheatSheet(
    'Iterating over values',
    'for value in my_dict.values():\n    print(value)',
    'Iterates over all values in the dictionary.',
    OperationTypes.Utility,
    'O(n)',
    'n is the number of key-value pairs.',
  ),
  createCheatSheet(
    'Iterating over key-value pairs',
    'for key, value in my_dict.items():\n    print(key, value)',
    'Iterates over all key-value pairs in the dictionary.',
    OperationTypes.Utility,
    'O(n)',
    'n is the number of key-value pairs.',
  ),
];
