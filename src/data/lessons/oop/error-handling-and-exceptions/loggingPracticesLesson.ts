import { Difficulty } from '@/common/commonConcept';
import {
  Curriculum,
  LessonContent,
  LessonsTab,
  PriorityLevel,
} from '@/common/commonLesson';

export const loggingPracticesCurriculum: Curriculum = {
  title: 'Logging Practices Curriculum',
  description:
    'Adopt structured logging practices for better debugging, error analysis, and auditing.',
  sections: [
    {
      id: 1,
      title: 'Why Logging Matters',
      topics: [
        {
          id: 'log-levels',
          title: 'Log Levels & Strategy',
          description:
            'How to choose between DEBUG, INFO, WARN, ERROR, and FATAL levels.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'production-readiness',
          title: 'Production Readiness',
          description:
            "Ensuring logs don't expose sensitive data while still being informative.",
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 2,
      title: 'Tools & Frameworks',
      topics: [
        {
          id: 'common-libraries',
          title: 'Common Logging Libraries',
          description:
            'Briefly covers Log4j, SLF4J, Winston, or other platform-specific tools.',
          priority: PriorityLevel.Important,
        },
      ],
    },
  ],
};

// 1) Log Levels & Strategy
const logLevelsData: LessonContent = {
  title: 'Log Levels & Strategy',
  content: `
Logging levels—**DEBUG**, **INFO**, **WARN**, **ERROR**, **FATAL**—help categorize message importance and urgency.

<h3>
Choosing the Right Level
</h3>

- **DEBUG**: Detailed info for development or troubleshooting.  
- **INFO**: General application flow messages.  
- **WARN**: Something unexpected, but the app can recover.  
- **ERROR**: A serious issue preventing normal operation.  
- **FATAL**: App cannot continue, immediate attention needed.

<h3>
Implementation Example (Python logging)
</h3>

\`\`\`python
import logging

logging.debug("Starting function X")
logging.info("User logged in")
logging.warning("Low disk space")
logging.error("Failed to save file")
logging.critical("System out of memory!")
\`\`\`
`,
  exercises: [
    {
      prompt: `Provide a Python snippet configuring the logging module to log only WARNING and above to a file, but DEBUG and above to the console. Summarize why this might be useful.`,
      initialCode: '',
      solution: `"""
import logging

logger = logging.getLogger()
logger.setLevel(logging.DEBUG)

# Console handler (DEBUG level)
ch = logging.StreamHandler()
ch.setLevel(logging.DEBUG)

# File handler (WARNING level)
fh = logging.FileHandler('app.log')
fh.setLevel(logging.WARNING)

logger.addHandler(ch)
logger.addHandler(fh)

logger.debug("Debug message - shown in console only")
logger.warning("Warning message - shown in both console and file")
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `Explain in a short paragraph how using log levels helps differentiate important issues from routine operations, mentioning how it aids in production support.`,
      initialCode: '',
      solution: `"""
Proper log levels let you filter noise and focus on critical errors in production. 
DEBUG logs can be silenced to avoid overwhelming logs, while ERROR or FATAL entries stand out for urgent triage. 
This selective visibility streamlines support and speeds up troubleshooting.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        "Which log level is typically used to report non-critical issues that might need attention, but don't halt the app?",
      options: ['DEBUG', 'WARN', 'ERROR'],
      correctAnswer: 1,
      explanations: [
        'Incorrect. DEBUG is more for developmental detail.',
        'Correct! WARN indicates a recoverable or potentially concerning situation.',
        'Incorrect. ERROR suggests more severe issues preventing normal operation.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 2) Production Readiness
const productionReadinessData: LessonContent = {
  title: 'Production Readiness',
  content: `
When deploying to production, logs must be **informative but safe**—avoid leaking passwords or secrets.

<h3>
Sensitive Data
</h3>

Mask or redact fields like **password**, **credit card**, or **token**. Overexposure can cause security risks.

<h3>
Structured Logging
</h3>

Use JSON or key-value pairs for logs. Tools like ELK (Elasticsearch, Logstash, Kibana) can parse structured data effectively.

<h3>
Logging Strategy
</h3>

- Configure lower log levels (WARN, ERROR) in production for performance.  
- Keep more verbose logs (DEBUG) for development or staging environments.
`,
  exercises: [
    {
      prompt: `Write a short snippet showing how you might redact sensitive fields (like "password") before logging a user object in Python. Summarize the approach.`,
      initialCode: '',
      solution: `"""
user_info = {
    "username": "alice",
    "password": "secret123"
}

def redact_sensitive(data):
    data_copy = dict(data)
    if "password" in data_copy:
        data_copy["password"] = "***REDACTED***"
    return data_copy

redacted_user = redact_sensitive(user_info)
print(redacted_user)
# {'username': 'alice', 'password': '***REDACTED***'}
"""`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: `In a paragraph, discuss how ignoring sensitive data in logs aligns with compliance needs (e.g., GDPR, PCI-DSS), referencing the importance of safe production logs.`,
      initialCode: '',
      solution: `"""
Many regulations (GDPR, PCI-DSS) require minimizing personal or financial data exposure. 
Logging raw passwords or credit card numbers can violate these rules. 
Redacting or omitting sensitive details in production logs helps maintain compliance and user trust.
"""`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question:
        'What is a key practice for ensuring production logs do not expose sensitive data?',
      options: [
        'Logging every piece of user input verbatim',
        'Redacting or masking fields like passwords and tokens before output',
        'Switching off logs entirely',
      ],
      correctAnswer: 1,
      explanations: [
        'Incorrect. That would risk leaking personal or confidential data.',
        'Correct! Masking sensitive info helps maintain compliance and security.',
        'Incorrect. Completely disabling logs can hamper debugging and auditing.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// 3) Common Logging Libraries
const commonLibrariesData: LessonContent = {
  title: 'Common Logging Libraries',
  content: `
Different ecosystems have popular libraries for structured, flexible logging.

<h3>
Python
</h3>

- **logging**: Built-in module  
- **loguru**: Third-party library with user-friendly APIs

<h3>
Java
</h3>

- **Log4j**, **SLF4J** for abstraction, and **Logback** as an implementation.

<h3>
Node.js
</h3>

- **Winston**, **pino**, etc.

Regardless of language, consistent log formatting and level usage is crucial.
`,
  exercises: [
    {
      prompt: `Write a short code snippet for Winston in Node.js as an example, just to illustrate cross-platform logging best practices.`,
      initialCode: '',
      solution: `"""
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console()
  ]
});

logger.info('Hello from Winston');
"""`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question:
        'Which library is commonly used for logging in Python besides the built-in logging module?',
      options: ['Logback', 'Loguru', 'SLF4J'],
      correctAnswer: 1,
      explanations: [
        'Incorrect. Logback is a Java library.',
        'Correct! Loguru is a popular Python logging alternative.',
        'Incorrect. SLF4J is a Java logging facade.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const loggingPracticesLessons: Record<string, LessonContent> = {
  'log-levels': logLevelsData,
  'production-readiness': productionReadinessData,
  'common-libraries': commonLibrariesData,
};
export const loggingPracticesLessonsTab: LessonsTab = {
  curriculum: loggingPracticesCurriculum,
  lessons: loggingPracticesLessons,
};
