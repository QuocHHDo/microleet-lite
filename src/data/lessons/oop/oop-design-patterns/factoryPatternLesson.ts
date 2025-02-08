import { Difficulty } from '@/common/commonConcept';
import { Curriculum, LessonContent, LessonsTab, PriorityLevel } from '@/common/commonLesson';
import { mock } from 'node:test';

export const factoryPatternCurriculum: Curriculum = {
  title: 'Factory Pattern Curriculum',
  description:
    'Encapsulate object creation in a dedicated factory method or class.',
  sections: [
    {
      id: 1,
      title: 'Fundamentals',
      topics: [
        {
          id: 'factory-purpose',
          title: 'Purpose & Use Cases',
          description:
            'Centralizing object creation logic for maintainability and abstraction.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'simple-factory-vs-factory-method',
          title: 'Variations',
          description:
            'Differences between Simple Factory, Factory Method, and Abstract Factory.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 2,
      title: 'Interview Prep',
      topics: [
        {
          id: 'mock-questions',
          title: 'Typical Interview Questions',
          description:
            'When to use a factory, code snippets, and real-world scenarios like GUIs or database connectors.',
          priority: PriorityLevel.Essential,
        },
      ],
    },
  ],
};

// 1) Purpose & Use Cases
const factoryPurposeData: LessonContent = {
  title: 'Purpose & Use Cases',
  content: `
The **Factory Pattern** centralizes object creation logic. It allows you to create objects without exposing the instantiation details to the client.

<h3>
Why a Factory?
</h3>

1. **Maintainability**: All creation code in one place.  
2. **Abstraction**: Clients ask the factory for an object without knowing the exact class used.  
3. **Testability**: Simplify substituting different implementations in tests.

<h3>
Simple Python Example
</h3>

\`\`\`python
class ShapeFactory:
    def create_shape(self, shape_type):
        if shape_type == "circle":
            return Circle()
        elif shape_type == "square":
            return Square()
        ...
\`\`\`
`,
  exercises: [
    {
      prompt: `Create a Python "VehicleFactory" with a method "create_vehicle(type)", returning either a "Car" or "Truck" object. Show how client code might call this factory.`,
      initialCode: '',
      solution: `"""
class Car:
    def drive(self):
        print("Driving a car")

class Truck:
    def drive(self):
        print("Driving a truck")

class VehicleFactory:
    def create_vehicle(self, vehicle_type):
        if vehicle_type == "car":
            return Car()
        elif vehicle_type == "truck":
            return Truck()
        else:
            raise ValueError("Unknown vehicle type")

# Client usage
factory = VehicleFactory()
vehicle = factory.create_vehicle("car")
vehicle.drive()  # "Driving a car"
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Explain in a paragraph how a factory approach can simplify adding new vehicle types in the future, referencing the open-closed principle.`,
      initialCode: '',
      solution: `"""
By isolating creation logic in the factory, you only modify the factory (or extend it) to accommodate new vehicle types. 
Existing client code doesn't change because it relies on the factory's interface, 
supporting OCP by making the system open for extension but closed to changes in the client code.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'Why might a centralized factory improve testability?',
      options: [
        'It forces all dependencies to be global',
        'Tests can supply mock or alternate factories, generating controlled objects',
        'It disallows subclassing of the objects created',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Global dependencies harm testability.',
        'Correct! A test can replace the real factory with one returning mock objects.',
        'Incorrect. Factories don\'t inherently forbid subclassing.'
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 2) Variations
const factoryVariationsData: LessonContent = {
  title: 'Variations',
  content: `
Common factory variations:

<h3>
Simple Factory
</h3>

A single function or class method that creates objects based on a parameter. Usually not strictly a design pattern but a stepping stone.

<h3>
Factory Method
</h3>

An object-oriented approach where subclasses decide which concrete product to create by overriding a method.

<h3>
Abstract Factory
</h3>

Provides an interface to create families of related objects without specifying their concrete classes.

<h3>
Python Example: Factory Method
</h3>

\`\`\`python
class Creator:
    def factory_method(self):
        raise NotImplementedError

    def some_operation(self):
        product = self.factory_method()
        return product.use()

class ConcreteCreator(Creator):
    def factory_method(self):
        return ConcreteProduct()
\`\`\`
`,
  exercises: [
    {
      prompt: `Write a minimal "Creator" and "ConcreteCreator" in Python using the Factory Method concept. The "Creator" has a "create_product()" abstract method, and "some_operation()" that uses it.`,
      initialCode: '',
      solution: `"""
from abc import ABC, abstractmethod

class Product(ABC):
    @abstractmethod
    def use(self):
        pass

class ConcreteProduct(Product):
    def use(self):
        return "Using ConcreteProduct"

class Creator(ABC):
    @abstractmethod
    def create_product(self) -> Product:
        pass

    def some_operation(self):
        product = self.create_product()
        return product.use()

class ConcreteCreator(Creator):
    def create_product(self):
        return ConcreteProduct()

# Usage
creator = ConcreteCreator()
print(creator.some_operation())  # "Using ConcreteProduct"
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Explain in a paragraph what an "Abstract Factory" might look like in Python for creating a family of products (e.g., "Window" and "Scrollbar") for different OS themes.`,
      initialCode: '',
      solution: `"""
An Abstract Factory in Python could define an interface (ABC) with methods like create_window() and create_scrollbar(). 
Concrete factories, e.g., WindowsFactory or LinuxFactory, implement these methods to return platform-specific Window and Scrollbar objects. 
This way, client code calls the abstract factory methods without needing details of which OS theme it\'s building for.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'What distinguishes a Factory Method from a Simple Factory?',
      options: [
        'They are exactly the same; there is no difference in design pattern terminology',
        'Factory Method is an OOP approach where creation is deferred to subclasses; Simple Factory is often just a function or static method with conditional logic',
        'Simple Factory forbids any subclassing',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. They are recognized as distinct patterns/idioms.',
        'Correct! Factory Method uses inheritance, while Simple Factory uses a direct function or static logic.',
        'Incorrect. Simple Factory doesn\'t forbid subclassing but is typically not an OOP-based pattern.'
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 3) Typical Interview Questions
const factoryMockQuestionsData: LessonContent = {
  title: 'Typical Interview Questions',
  content: `
Interviewers may ask when to use a factory or how to code one.

<h3>
Common Scenarios
</h3>

- Creating GUI widgets for different platforms.  
- Returning different database connectors (SQL vs. NoSQL) using the same interface.  
- Deciding which logging object to produce based on config.

<h3>
Sample Question
</h3>

“**Explain how you\'d design a system to create database connection objects without exposing the concrete classes to client code.**”
`,
  exercises: [
    {
      prompt: `Provide a short code example of a "DBFactory" in Python that returns either a "MySQLConnector" or "SQLiteConnector" based on a config string. Show how a client might use this factory without knowing which connector they got.`,
      initialCode: '',
      solution: `"""
class MySQLConnector:
    def connect(self):
        print("Connecting to MySQL")

class SQLiteConnector:
    def connect(self):
        print("Connecting to SQLite")

class DBFactory:
    def get_db_connector(self, db_type):
        if db_type == "mysql":
            return MySQLConnector()
        elif db_type == "sqlite":
            return SQLiteConnector()
        else:
            raise ValueError("Unknown DB type")

# Client usage
factory = DBFactory()
connector = factory.get_db_connector("mysql")
connector.connect()  # "Connecting to MySQL"
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Explain how you\'d answer an interview question about the difference between Factory Method and Abstract Factory in Python, referencing typical real-world usage.`,
      initialCode: '',
      solution: `"""
Factory Method uses inheritance: each creator subclass decides which product to create. 
Abstract Factory creates families of related objects (e.g., windows, scrollbars) without specifying their concrete types. 
In real-world usage, Factory Method might be enough for single products, 
while Abstract Factory is used for multiple related products within a specific theme or environment.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'What is a common real-world scenario for a factory question in interviews?',
      options: [
        'Writing a purely global function that modifies the entire codebase',
        'Deciding which objects to create for different configurations (e.g., database type) without exposing concrete classes',
        'Using reflection in every single method call',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Global modifications are not typical factory usage.',
        'Correct! Factories are often asked about in the context of choosing an implementation at runtime.',
        'Incorrect. Reflection can be a tool, but not the typical interview scenario about factories.'
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const factoryPatternLessons: Record<string, LessonContent> = {
  'factory-purpose': factoryPurposeData,
  'simple-factory-vs-factory-method': factoryVariationsData,
  'mock-questions': factoryMockQuestionsData
}
export const factoryPatternLessonsTab: LessonsTab = {
  curriculum: factoryPatternCurriculum,
  lessons: factoryPatternLessons
}