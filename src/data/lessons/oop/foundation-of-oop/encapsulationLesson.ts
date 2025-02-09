import { Difficulty } from '@/common/commonConcept';
import {
  Curriculum,
  LessonContent,
  LessonsTab,
  PriorityLevel,
} from '@/common/commonLesson';

export const encapsulationCurriculum: Curriculum = {
  title: 'Encapsulation Curriculum',
  description:
    'A focused guide to mastering Encapsulation, one of the core pillars of OOP, ensuring data integrity and maintainable code.',
  sections: [
    {
      id: 1,
      title: 'Encapsulation Fundamentals',
      topics: [
        {
          id: 'encapsulation-definition',
          title: 'Definition & Purpose',
          description:
            'Explains the concept of bundling data and methods together while restricting direct access to internal data.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'encapsulation-benefits-analogy',
          title: 'Benefits & Real-World Analogies',
          description:
            'Highlights how Encapsulation improves maintainability, security, and clarity, with everyday examples (e.g., vending machine).',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'encapsulation-mechanics',
          title: 'How It Works',
          description:
            'Covers how classes expose behaviors (methods) while keeping properties hidden or restricted.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 2,
      title: 'Implementation & Best Practices',
      topics: [
        {
          id: 'access-modifiers',
          title: 'Access Modifiers',
          description:
            'Explores public, private, and protected scopes, and how they reinforce Encapsulation.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'getter-setter-pattern',
          title: 'Getters, Setters, and Control Methods',
          description:
            'Discusses how accessors and mutators enforce data integrity and logging requirements.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'over-encapsulation',
          title: 'Avoiding Over-Encapsulation',
          description:
            'Explains when private fields or too many set/get methods can become cumbersome.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 3,
      title: 'Interview Preparation & Pitfalls',
      topics: [
        {
          id: 'common-misconceptions',
          title: 'Common Misconceptions',
          description:
            'Clarifies misconceptions about data hiding and how Encapsulation differs from other OOP pillars.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'mock-questions',
          title: 'Typical Interview Questions',
          description:
            'Lists sample interviewer prompts and real scenarios like “Refactor a class to encapsulate fields.”',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'pitfalls-practices',
          title: 'Pitfalls & Best Practices',
          description:
            'Covers examples of encapsulation done poorly, and best practices to highlight during interviews.',
          priority: PriorityLevel.Important,
        },
      ],
    },
  ],
};

const encapsulationDefinitionData: LessonContent = {
  title: 'Encapsulation: Protecting and Organizing Data Effectively',
  content: `
Encapsulation is one of the fundamental principles of Object-Oriented Programming (OOP). It allows bundling of data (variables) and methods (functions) that operate on the data into a single unit called a class, while restricting direct access to some of the object's components.

<h3>Why is Encapsulation Important?</h3>

- **Data Protection:** Prevents unintended modification of data by restricting access.
- **Maintainability:** Centralizes where changes occur, making code easier to modify and debug.
- **Flexibility:** Allows controlled interaction through well-defined interfaces.

<h3>Encapsulation in Practice</h3>

Let's explore encapsulation using a BankAccount example:

\`\`\`python
class BankAccount:
    def __init__(self, account_number, balance):
        self.__account_number = account_number  # Private attribute
        self.__balance = balance  # Private attribute

    def deposit(self, amount):
        """Public method to add money to the balance."""
        if amount > 0:
            self.__balance += amount
            print(f"Deposited \${amount}. New balance: \${self.__balance}")
        else:
            print("Deposit amount must be positive.")

    def get_balance(self):
        """Public method to access the balance."""
        return self.__balance

# Usage
account = BankAccount("12345", 1000)
account.deposit(500)  # Allowed
print(account.get_balance())  # Allowed
\`\`\`

<h3>Key Concepts of Encapsulation</h3>

1. **Access Modifiers:**
   - **Public:** Accessible from anywhere.
   - **Private:** Accessible only within the class.
   - **Protected:** Accessible within the class and its subclasses.

2. **Encapsulation Techniques:**
   - Use of private fields with controlled access through getter/setter methods or properties.

<h3>Benefits of Encapsulation</h3>

- Stronger data integrity via controlled access.
- Centralized logic for data validation and manipulation.
- Improved maintainability in larger applications.

<h3>Common Misconceptions</h3>

1. **Encapsulation ≠ Data Hiding:**  
Encapsulation is not just about making variables private; it is about providing controlled access.

2. **Encapsulation ≠ Security:**  
It doesn't replace security practices like encryption, but it helps enforce proper access within the code.
  `,
  exercises: [
    {
      prompt: `Create a Python class \`Employee\` that encapsulates private attributes such as name and salary. Provide getter and setter methods to control access. Also log a message whenever the salary is updated (e.g., “Salary updated”).`,
      initialCode: `class Employee:
    def __init__(self, name, salary):
        # Your implementation here
        pass

    def get_salary(self):
        pass

    def set_salary(self, amount):
        pass
`,
      solution: `class Employee:
    def __init__(self, name, salary):
        self.__name = name
        self.__salary = salary if salary >= 0 else 0

    def get_name(self):
        return self.__name

    def get_salary(self):
        return self.__salary

    def set_salary(self, amount):
        if amount >= 0:
            self.__salary = amount
            print("Salary updated")
        else:
            print("Invalid salary amount")
`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Implement a Python class to demonstrate encapsulation by providing private fields and appropriate accessor methods. Include a method that checks some condition (e.g., if year > 10, print a message).`,
      initialCode: `class Car:
    # Your implementation here
    pass
`,
      solution: `class Car:
    def __init__(self, model, year):
        self.__model = model
        self.__year = year

    def get_model(self):
        return self.__model

    def set_model(self, model):
        self.__model = model

    def get_year(self):
        return self.__year

    def set_year(self, year):
        self.__year = year

    def service_check(self):
        import datetime
        current_year = datetime.datetime.now().year
        if current_year - self.__year > 10:
            print(f"{self.__model} needs an extensive service check!")
        else:
            print(f"{self.__model} is relatively new!")
`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary purpose of encapsulation in OOP?',
      options: [
        'To speed up code execution',
        'To restrict access to certain parts of an object and control data manipulation',
        'To make the code more colorful',
        'To replace complex code with simple code',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Encapsulation does not inherently affect performance.',
        'Correct! Encapsulation restricts direct access and centralizes control of data.',
        'Incorrect. Encapsulation has no relation to aesthetics.',
        'Incorrect. Encapsulation aims to improve maintainability, not to arbitrarily simplify logic.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question:
        'Which access modifier is used to restrict access to within the same class only?',
      options: ['public', 'protected', 'private', 'internal'],
      correctAnswer: 2,
      explanations: [
        'Incorrect. Public allows access from anywhere.',
        'Incorrect. Protected allows access within subclasses.',
        'Correct! Private restricts access to within the same class.',
        'Incorrect. Internal is not a standard modifier in Python.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const encapsulationBenefitsAnalogyData: LessonContent = {
  title: 'Encapsulation Benefits & Real-World Analogies',
  content: `
Encapsulation offers significant benefits to software development, improving maintainability, security, and modularity. It allows bundling of data and methods into a single unit, restricting direct access to internal implementation details.

<h3>Benefits of Encapsulation</h3>

- **Improved Maintainability:** By isolating changes within a class, code maintenance becomes easier and less error-prone.
- **Enhanced Security:** Internal data is protected from unintended access or modification.
- **Modular Development:** Encapsulation promotes better code organization and reusability.
- **Data Integrity:** Access control ensures valid and consistent states of objects.

<h3>Real-World Analogies</h3>

1. **Vending Machine:**  
   The buttons (public methods) are accessible, while the internal mechanism (private data and processes) is hidden.
2. **Car Dashboard:**  
   The dashboard provides controls to the driver without exposing the engine internals.
3. **Bank Account:**  
   The user interacts via deposit/withdraw methods without directly changing the balance attribute.

<h3>Encapsulation in Software Design</h3>
Encapsulation is applied in software to:

- Hide complex logic behind simple interfaces.
- Prevent direct access to critical data.
- Make debugging and testing easier by centralizing logic.
  `,
  exercises: [
    {
      prompt: `Describe encapsulation using a real-world analogy (other than a vending machine or car), then implement a Python class to demonstrate the same principle.`,
      initialCode: '',
      solution: `"""
Example analogy:
A 'Smart Home Thermostat' that shows only a simple interface to set temperature, but hides the internal sensors and control logic.

Corresponding class:
"""

class SmartThermostat:
    def __init__(self, temperature):
        self.__temperature = temperature

    def get_temperature(self):
        return self.__temperature

    def set_temperature(self, temperature):
        if 50 <= temperature <= 90:
            self.__temperature = temperature
        else:
            print("Temperature out of valid range!")
`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following best describes encapsulation?',
      options: [
        'Hiding internal details and exposing only necessary functionalities',
        'Making all class attributes public',
        'Allowing unrestricted access to all variables',
        'Reducing the size of the codebase',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct! Encapsulation hides internal details while exposing required functionalities.',
        'Incorrect. Making everything public is the opposite of encapsulation.',
        'Incorrect. Unrestricted access is not part of encapsulation principles.',
        'Incorrect. Encapsulation reorganizes and structures code rather than deleting large portions.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const encapsulationMechanicsData: LessonContent = {
  title: 'How Encapsulation Works',
  content: `
Encapsulation is implemented in programming by restricting direct access to data and providing controlled access through methods. This ensures the internal state of an object is protected from unintended interference.

<h3>Core Concepts of Encapsulation</h3>

1. **Private Attributes:** Attributes that cannot be accessed directly from outside the class.
2. **Getter and Setter Methods:** Methods that allow controlled access to private attributes.
3. **Access Modifiers:** Define the intended visibility of class members (public, private, protected), though Python mainly uses naming conventions.

<h3>Encapsulation in Python</h3>

In Python, encapsulation is achieved using underscores to signal intent:
- **Public Attributes:** Accessible from anywhere (no underscore).
- **Protected Attributes:** Prefixed with a single underscore (e.g., _attribute).
- **Private Attributes:** Prefixed with double underscores (e.g., __attribute) to discourage direct access.

Example:

\`\`\`python
class Person:
    def __init__(self, name, age):
        self.__name = name  # Private
        self.__age = age    # Private

    def get_name(self):
        return self.__name

    def set_age(self, age):
        if age > 0:
            self.__age = age
\`\`\`

<h3>Benefits of Encapsulation</h3>

- Prevents accidental data modification.
- Provides a controlled way of accessing data.
- Enhances code structure, clarity, and maintainability.

<h3>Best Practices</h3>

- Use private attributes for sensitive data.
- Provide getter and setter methods to validate changes or retrieve info safely.
  `,
  exercises: [
    {
      prompt: `Implement a class called \`Book\` that uses encapsulation to protect 'title' and 'author' details. Only allow non-empty strings for both. Also include a method to display the book information.`,
      initialCode: '',
      solution: `class Book:
    def __init__(self, title, author):
        self.__title = title
        self.__author = author

    def get_title(self):
        return self.__title

    def set_title(self, title):
        if title.strip():
            self.__title = title
        else:
            print("Title cannot be empty.")

    def get_author(self):
        return self.__author

    def set_author(self, author):
        if author.strip():
            self.__author = author
        else:
            print("Author cannot be empty.")

    def display_info(self):
        print(f"Title: {self.__title}, Author: {self.__author}")
`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary purpose of encapsulation?',
      options: [
        'To allow direct access to class variables',
        'To restrict and control data access',
        'To reduce memory usage',
        'To increase code execution speed',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Encapsulation explicitly aims to PREVENT direct access to class variables, encouraging controlled access through methods like getters/setters.',
        'Correct. Encapsulation focuses on restricting and regulating access to data (via private variables and public methods) to maintain data integrity and enforce validation.',
        'Incorrect. Memory optimization is unrelated to encapsulation, which deals with access control rather than resource management.',
        'Incorrect. Execution speed is not a goal of encapsulation. It prioritizes maintainability and security over performance optimization.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const accessModifiersData: LessonContent = {
  title: 'Understanding Access Modifiers in Python',
  content: `
Access modifiers in Python help define the intended accessibility of class members (attributes and methods). Though Python doesn't enforce these modifiers the same way as some other languages, naming conventions clarify how each member is meant to be used.

<h3>Types of Access Modifiers</h3>

1. **Public:**
   - Accessible from anywhere.
   - No special notation required.

2. **Protected:**
   - Indicated by a single underscore (e.g., _attribute).
   - Implies usage is intended within the class and its subclasses.

3. **Private:**
   - Indicated by double underscores (e.g., __attribute).
   - Not directly accessible outside the class (name mangling in Python).

<h3>Benefits of Access Modifiers</h3>

- Reinforce encapsulation by guiding how class members should be used.
- Prevent unintended direct access to critical attributes.
- Encourage a clear separation between internal and external class interfaces.

<h3>Best Practices</h3>

- Use private attributes for sensitive data and when validation is needed.
- Expose only what external code genuinely needs, reducing coupling.
- Follow naming conventions consistently to communicate intent.
  `,
  exercises: [
    {
      prompt: `Create a Python class that demonstrates public, protected, and private attributes with appropriate access methods. Include code comments about how each member is intended to be used.`,
      initialCode: '',
      solution: `class Demo:
    def __init__(self):
        self.public_var = "I am public"         # Intended for universal access
        self._protected_var = "I am protected"  # Intended for internal or subclass use
        self.__private_var = "I am private"     # Intended for internal class use only

    def show_vars(self):
        print("Public:", self.public_var)
        print("Protected:", self._protected_var)
        print("Private:", self.__private_var)

    def get_private_var(self):
        return self.__private_var
`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which access modifier in Python suggests an attribute is meant to be modified only within subclasses or the defining class?',
      options: [
        'Public',
        'Protected (single underscore)',
        'Private (double underscores)',
        'None of the above',
      ],
      correctAnswer: 1,
      explanations: [
        "Incorrect. Public attributes have no access restrictions and are fully accessible.",
        "Correct! Protected (single underscore) is a convention indicating internal/subclass use.",
        "Incorrect. Private (double underscores) use name-mangling for class-only access, not subclasses.",
        "Incorrect. The correct answer is 'Protected (single underscore)'."
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const getterSetterPatternData: LessonContent = {
  title: 'Getters and Setters in Python',
  content: `
Getters and setters are methods used to control how private attributes are accessed and modified. They allow for validation, logging, or other logic whenever a property is read or updated.

<h3>Why Use Getters and Setters?</h3>

- **Data Validation:** Ensures only valid data is stored.
- **Encapsulation:** Restricts direct access to sensitive data.
- **Logging and Monitoring:** Tracks changes or triggers events when attributes change.

<h3>Implementing Getters and Setters</h3>

\`\`\`python
class Employee:
    def __init__(self, name, salary):
        self.__name = name
        self.__salary = salary

    # Getter method
    def get_salary(self):
        return self.__salary

    # Setter method
    def set_salary(self, salary):
        if salary > 0:
            self.__salary = salary
        else:
            raise ValueError("Salary must be positive")
\`\`\`

<h3>Using Python's @property Decorator</h3>

Python provides the \`@property\` decorator to define getters and setters with a more elegant syntax:

\`\`\`python
class Product:
    def __init__(self, price):
        self.__price = price

    @property
    def price(self):
        return self.__price

    @price.setter
    def price(self, value):
        if value > 0:
            self.__price = value
        else:
            raise ValueError("Price must be greater than zero")
\`\`\`

<h3>Advantages of @property</h3>

- Simplifies syntax for getting and setting attributes.
- Encourages clean, Pythonic code.
- Maintains encapsulation without changing how attributes are accessed in the rest of the codebase.
  `,
  exercises: [
    {
      prompt: `Implement a class with private attributes for name and age, providing appropriate getters and setters using the @property decorator. 
- Validate that age is > 0 
- Trim whitespace for name, ensuring it's not empty.`,
      initialCode: '',
      solution: `class Person:
    def __init__(self, name, age):
        self.__name = name.strip()
        self.__age = age

    @property
    def name(self):
        return self.__name

    @name.setter
    def name(self, value):
        trimmed = value.strip()
        if trimmed:
            self.__name = trimmed
        else:
            raise ValueError("Name cannot be empty.")

    @property
    def age(self):
        return self.__age

    @age.setter
    def age(self, value):
        if value > 0:
            self.__age = value
        else:
            raise ValueError("Age must be positive.")
`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the primary purpose of using getters and setters?',
      options: [
        'To directly access attributes from outside the class',
        'To enforce encapsulation and data validation',
        'To increase code complexity',
      ],
      correctAnswer: 1,
      explanations: [
        "Incorrect. Getters/setters control access, not enable direct attribute access.",
        "Correct! They enforce encapsulation and validate/modify data during access.",
        "Incorrect. While they add structure, their purpose is control, not complexity."
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const overEncapsulationData: LessonContent = {
  title: 'Avoiding Over-Encapsulation in Python',
  content: `
Over-encapsulation occurs when you excessively wrap attributes behind getters and setters or use private attributes unnecessarily. While encapsulation is essential, doing too much can complicate your code.

<h3>Problems Caused by Over-Encapsulation</h3>

- **Reduced Readability:** Too many layers of methods obscure the code\'s intent.
- **Increased Boilerplate:** You spend time writing trivial getters/setters without meaningful logic.
- **Performance Overhead:** Additional method calls can introduce minor inefficiencies.

<h3>When to Avoid Over-Encapsulation</h3>

- If the attribute doesn\'t need validation or special checks.
- When exposing it publicly does not risk data corruption or misuse.
- If adding a getter/setter adds no clear benefit to the design.

<h3>Example of Over-Encapsulation</h3>

\`\`\`python
class User:
    def __init__(self, username):
        self.__username = username

    def get_username(self):
        return self.__username

    def set_username(self, username):
        if len(username) > 0:
            self.__username = username
\`\`\`

<h3>Improved Approach</h3>

\`\`\`python
class User:
    def __init__(self, username):
        self._username = username  # Could also be fully public if no validation needed
\`\`\`

<h3>Best Practices</h3>

- Encapsulate only when necessary to protect data or enforce invariants.
- Avoid trivial getters/setters for purely internal data that needs no checks.
- Keep code simple and focused on real requirements.
  `,
  exercises: [
    {
      prompt: `Refactor the given class by removing unnecessary getters and setters and simplifying the design. Only keep encapsulation if there is a specific need for data validation or logging.`,
      initialCode: `class Employee:
    def __init__(self, name):
        self.__name = name

    def get_name(self):
        return self.__name

    def set_name(self, name):
        self.__name = name
`,
      solution: `class Employee:
    def __init__(self, name):
        self.name = name  # Directly accessible if no checks are required
`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is a downside of over-encapsulation?',
      options: [
        'Cleaner, more readable code',
        'Reduced readability and maintainability',
        'Automatically validated data',
      ],
      correctAnswer: 1,
      explanations: [
        "Incorrect. Over-encapsulation often makes code harder to follow, not cleaner.",
        "Correct! Excessive encapsulation can clutter code and harm readability/maintainability.",
        "Incorrect. Automatic validation is a benefit, not a downside."
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const commonMisconceptionsData: LessonContent = {
  title: 'Common Misconceptions About Encapsulation',
  content: `
Encapsulation is often misunderstood. Understanding these misconceptions is crucial to using this principle effectively.

<h3>Common Misconceptions</h3>

1. **Encapsulation ≠ Just Making Attributes Private:**  
It\'s not enough to hide data; true encapsulation provides controlled access through public methods or properties.

2. **Encapsulation ≠ Security:**  
While it prevents accidental misuse, it doesn\'t replace rigorous security measures like encryption or permissions.

3. **Encapsulation Is Unnecessary in Small Projects:**  
Even small codebases benefit from well-defined interfaces and data integrity, making future scaling simpler.

<h3>Clarifying Encapsulation</h3>

Encapsulation provides:
- A single access point for reading or modifying internal state.
- Improved maintainability, because changing how data is stored requires edits in only one place.
- A clear delineation between the internal workings of a class and its external interface.

<h3>Example of Correct Encapsulation</h3>

\`\`\`python
class BankAccount:
    def __init__(self, balance):
        self.__balance = balance

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount

    def get_balance(self):
        return self.__balance
\`\`\`
  `,
  exercises: [
    {
      prompt: `Identify and correct the misconceptions in the following class by implementing encapsulation properly. Currently, the class gives full public access to the balance.`,
      initialCode: `class MyBankAccount:
    def __init__(self, balance):
        self.balance = balance
`,
      solution: `class MyBankAccount:
    def __init__(self, balance):
        self.__balance = balance

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount

    def get_balance(self):
        return self.__balance
`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [  
    {  
      question: 'Which of the following is a misconception about encapsulation?',  
      options: [  
        'Encapsulation helps maintain code structure',  
        'Encapsulation replaces the need for security measures like encryption',  
        'Encapsulation allows controlled access to data',  
      ],  
      correctAnswer: 1,  
      explanations: [  
        "Incorrect. Encapsulation does help maintain code structure (valid purpose, not a misconception).",  
        "Correct! Encapsulation isn\'t a security solution; doesn\'t replace encryption/security protocols.",  
        "Incorrect. Controlled access is a core goal of encapsulation (not a misconception)."  
      ],  
      difficulty: Difficulty.Beginner,  
    },  
  ],  
};

const mockQuestionsData: LessonContent = {
  title: 'Typical Interview Questions on Encapsulation',
  content: `
Preparing for technical interviews often involves mastering encapsulation. These questions assess your understanding of how to protect and manage data in OOP designs.

<h3>Sample Interview Questions</h3>

1. **Conceptual Questions:**
   - What is encapsulation, and why is it important?
   - How does encapsulation differ from abstraction?
   - What are the benefits of encapsulation in large projects?

2. **Code-Based Questions:**
   - Given a class with public attributes, refactor it to enforce encapsulation.
   - Write a class demonstrating getter/setter methods with validation.

3. **Scenario-Based Questions:**
   - How would you use encapsulation to protect sensitive information in a banking system?
   - How do you balance readability and encapsulation in smaller codebases?

<h3>Example Question</h3>

\`\`\`python
class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

employee = Employee("John", 50000)
print(employee.salary)
\`\`\`

**Question:** How would you refactor this class to encapsulate 'salary' and validate that it\'s non-negative?

<h3>Best Practices for Answering</h3>

- Define the core idea of encapsulation clearly.
- Provide concise code examples if requested.
- Highlight its benefits (maintainability, data integrity, etc.).
  `,
  exercises: [
    {
      prompt: `Refactor the given \`Student\` class to follow encapsulation. Require age >= 0, and create a method to display the student\'s info in a readable format.`,
      initialCode: `class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age
`,
      solution: `class Student:
    def __init__(self, name, age):
        self.__name = name
        self.__age = age if age >= 0 else 0

    def get_name(self):
        return self.__name

    def get_age(self):
        return self.__age

    def set_age(self, age):
        if age >= 0:
            self.__age = age

    def display_info(self):
        print(f"Name: {self.__name}, Age: {self.__age}")
`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [  
    {  
      question: 'Which of the following best describes encapsulation?',  
      options: [  
        'Hiding implementation details and exposing controlled access',  
        'Allowing direct access to all attributes',  
        'Using global variables for data management',  
      ],  
      correctAnswer: 0,  
      explanations: [  
        "Correct! Encapsulation hides implementation details and restricts direct data access.",  
        "Incorrect. Encapsulation discourages direct access to attributes.",  
        "Incorrect. Global variables violate encapsulation principles."  
      ],  
      difficulty: Difficulty.Intermediate,  
    },  
  ],  
};

const pitfallsPracticesData: LessonContent = {
  title: 'Pitfalls and Best Practices in Encapsulation',
  content: `
Encapsulation is a powerful concept, but incorrect usage can hinder your code's clarity and maintainability. Below are common pitfalls and recommended practices.

<h3>Common Pitfalls of Encapsulation</h3>

1. **Over-Encapsulation:**  
   Wrapping every attribute with getters/setters, even when not needed, can clutter your code.

2. **Exposing Too Much:**  
   Making too many methods or attributes public defeats the purpose of restricted access.

3. **Inconsistent Validation:**  
   Not applying the same validation rules across constructors, setters, and other relevant methods can result in unpredictable states.

<h3>Best Practices for Effective Encapsulation</h3>

- **Balance:** Encapsulate attributes that need protection, leave harmless data as public if it simplifies usage.
- **Validation:** Consistently validate inputs in constructors and setters.
- **Minimal Exposure:** Only provide methods that external code truly needs.

<h3>Example of Proper Encapsulation</h3>

\`\`\`python
class Product:
    def __init__(self, name, price):
        self.__name = name
        self.__price = price

    def get_price(self):
        return self.__price

    def set_price(self, price):
        if price > 0:
            self.__price = price
        else:
            raise ValueError("Price must be positive")
\`\`\`

<h3>Conclusion</h3>
By adhering to these practices—avoiding over-encapsulation, maintaining consistent validation, and minimizing public interfaces—you can create robust and maintainable software.
  `,
  exercises: [
    {
      prompt: `Identify the issues in the following class and refactor it to follow encapsulation best practices:
- The \`speed\` attribute is public, allowing negative values.
- There's a trivial setter. Instead, create an \`accelerate\` method to increment speed safely.
- If speed is set below zero, handle it appropriately.`,
      initialCode: `class Car:
    def __init__(self, speed):
        self.speed = speed

    def set_speed(self, speed):
        self.speed = speed
`,
      solution: `class Car:
    def __init__(self, speed):
        self.__speed = speed if speed >= 0 else 0

    def get_speed(self):
        return self.__speed

    def accelerate(self, increment):
        if increment > 0:
            self.__speed += increment
        else:
            print("Increment must be positive.")
`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [  
    {  
      question: 'Which of the following is a pitfall of encapsulation?',  
      options: [  
        'Overusing private attributes and trivial getters/setters',  
        'Applying consistent validation',  
        'Providing a minimal public interface',  
      ],  
      correctAnswer: 0,  
      explanations: [  
        "Correct! Overusing encapsulation (e.g., trivial getters/setters) adds boilerplate without value.",  
        "Incorrect. Consistent validation is a benefit, not a pitfall.",  
        "Incorrect. A minimal public interface is a best practice for encapsulation."  
      ],  
      difficulty: Difficulty.Intermediate,  
    },  
  ],  
};

const encapsulationLesson: Record<string, LessonContent> = {
  'encapsulation-definition': encapsulationDefinitionData,
  'encapsulation-benefits-analogy': encapsulationBenefitsAnalogyData,
  'encapsulation-mechanics': encapsulationMechanicsData,
  'access-modifiers': accessModifiersData,
  'getter-setter-pattern': getterSetterPatternData,
  'over-encapsulation': overEncapsulationData,
  'common-misconceptions': commonMisconceptionsData,
  'mock-questions': mockQuestionsData,
  'pitfalls-practices': pitfallsPracticesData,
};

export const encapsulationLessonsTab: LessonsTab = {
  curriculum: encapsulationCurriculum,
  lessons: encapsulationLesson,
};
