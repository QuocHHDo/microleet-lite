import { Difficulty } from '@/common/commonConcept';
import {
  Curriculum,
  LessonContent,
  LessonsTab,
  PriorityLevel,
} from '@/common/commonLesson';

export const customExceptionsCurriculum: Curriculum = {
  title: 'Custom Exceptions Curriculum',
  description:
    'Create domain-specific exception classes to signal errors more clearly.',
  sections: [
    {
      id: 1,
      title: 'Why Custom Exceptions',
      topics: [
        {
          id: 'domain-logic',
          title: 'Domain Logic Clarity',
          description:
            'Enhance maintainability by making errors more explicit to the domain.',
          priority: PriorityLevel.Essential,
        },
      ],
    },
    {
      id: 2,
      title: 'Implementation & Best Practices',
      topics: [
        {
          id: 'naming-conventions',
          title: 'Naming Conventions',
          description:
            'Convey the nature of the error clearly (e.g., InsufficientFundsException).',
          priority: PriorityLevel.Important,
        },
        {
          id: 'serialization',
          title: 'Serialization & Logging',
          description:
            'Considerations when transferring exceptions across boundaries or logging them.',
          priority: PriorityLevel.Beneficial,
        },
      ],
    },
  ],
};

// 1) Domain Logic Clarity
const domainLogicData: LessonContent = {
  title: 'Domain Logic Clarity',
  content: `
Custom exceptions let you signal errors in a way that reflects your specific domain. 

<h3>
Enhance Maintainability
</h3>

By using classes like **InsufficientFundsException** or **InvalidTransactionException**, you make it clear what went wrong. This is more descriptive than generic exceptions like **ValueError** or **RuntimeError**, improving readability and debugging.

<h3>
Python Example
</h3>

\`\`\`python
class InsufficientFundsException(Exception):
    pass

def withdraw(account_balance, amount):
    if amount > account_balance:
        raise InsufficientFundsException("Not enough funds")
    return account_balance - amount
\`\`\`
`,
  exercises: [
    {
      prompt: `Create a Python exception class "DomainError" and a subclass "OrderNotFoundError". Show how you might raise "OrderNotFoundError" in a function that looks up an order by ID.`,
      initialCode: '',
      solution: `class DomainError(Exception):
    """Base domain error."""

class OrderNotFoundError(DomainError):
    """Raised when an order is not found."""

def find_order(order_id):
    # Suppose we don't find the order in DB
    raise OrderNotFoundError(f"Order {order_id} does not exist.")`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Explain in a short paragraph how descriptive custom exceptions reduce ambiguity in logs or error messages, referencing real domain-specific errors.`,
      initialCode: '',
      solution: `"""
When logs or traces report an 'OrderNotFoundError', it's instantly clear what happened. 
Generic exceptions like 'KeyError' or 'IndexError' might not reveal the domain context. 
Descriptive class names clarify whether it's a business logic issue (missing order) or a technical problem.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'Which is a primary advantage of using custom exceptions in Python?',
      options: [
        'They prevent all runtime errors automatically',
        'They describe domain-specific errors more accurately than built-in exceptions',
        'They require no code changes for new errors',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Custom exceptions do not automatically prevent runtime errors.',
        'Correct! Custom exceptions clarify the nature of domain-level issues.',
        'Incorrect. You must still define and raise them as needed.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 2) Naming Conventions
const namingConventionsData: LessonContent = {
  title: 'Naming Conventions',
  content: `
Good naming for custom exceptions highlights the nature of the error. Use **Error** or **Exception** as a suffix, and be precise about what went wrong.

<h3>
Examples
</h3>

- **InvalidTransactionError**  
- **UserNotAuthorizedException**  
- **OutOfStockError**  

Python does not enforce a strict naming scheme, but consistent suffixes like *Error* or *Exception* help clarify usage.
`,
  exercises: [
    {
      prompt: `Give examples of three well-named custom exceptions for a hypothetical e-commerce system, explaining each. For instance "PaymentDeclinedError", "InventoryShortageError", etc.`,
      initialCode: '',
      solution: `"""
1. PaymentDeclinedError: Raised when a payment gateway refuses the transaction.
2. InventoryShortageError: Raised when there's insufficient stock to fulfill an order.
3. InvalidCouponError: Raised when a user attempts to apply a non-existent or expired coupon.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'What is a recommended practice when naming custom exceptions in Python?',
      options: [
        "Always end with “Exception” or “Error” to indicate it's an exception class",
        'Include the entire stack trace in the class name',
        'Use non-descriptive code numbers (e.g., Error42, Error99)',
      ],
      correctAnswer: 0,
      explanations: [
        "Correct! “PaymentError”, “FileReadException”, etc., clarify the class's nature.",
        'Incorrect. The stack trace is not part of the class name.',
        'Incorrect. Numeric codes alone are non-descriptive.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 3) Serialization & Logging
const serializationData: LessonContent = {
  title: 'Serialization & Logging',
  content: `
When exceptions cross process or service boundaries, you may need to **serialize** them. Logging them consistently is also crucial.

<h3>
Transferring Exceptions Across Boundaries
</h3>

In distributed systems, you might package exception info into a structured format (JSON) before sending it across the network.

<h3>
Logging Custom Exceptions
</h3>

Use structured logs: log the exception class name, message, and stack trace. This helps isolate issues quickly.
`,
  exercises: [
    {
      prompt: `Write a short snippet in Python that catches a custom exception "InsufficientFundsError" and logs it with structured info (e.g., error type, error message).`,
      initialCode: '',
      solution: `"""
import logging

class InsufficientFundsError(Exception):
    pass

try:
    raise InsufficientFundsError("Balance is 0, withdrawal of 50 not possible")
except InsufficientFundsError as e:
    logging.error({
        "error_type": e.__class__.__name__,
        "message": str(e)
    })
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `In a short paragraph, explain why JSON or other structured formats might be more helpful for logging or transporting exceptions compared to plain text, referencing external log aggregators.`,
      initialCode: '',
      solution: `"""
Structured formats like JSON allow external tools (e.g., ELK stack, Splunk) to parse and index data consistently. 
Fields like 'error_type' or 'timestamp' become searchable or filterable, 
making logs easier to analyze than plain text lines.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'Why might you serialize a custom exception to JSON before sending it across a network boundary?',
      options: [
        'To ensure it can be reconstructed or understood by the receiving service',
        'Because plain text is always forbidden',
        'Because exceptions cannot be logged in plain text',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct! JSON or similar formats let another service parse the error details.',
        'Incorrect. Plain text is not strictly forbidden, but less structured.',
        'Incorrect. Exceptions can be logged in plain text, but structured data is often more useful.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const customExceptionsLessons: Record<string, LessonContent> = {
  'domain-logic': domainLogicData,
  'naming-conventions': namingConventionsData,
  serialization: serializationData,
};

export const customExceptionsLessonsTab: LessonsTab = {
  curriculum: customExceptionsCurriculum,
  lessons: customExceptionsLessons,
};
