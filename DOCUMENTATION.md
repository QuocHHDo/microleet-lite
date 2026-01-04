# Microleet Lite - Technical Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture & Structure](#architecture--structure)
3. [Features Implemented](#features-implemented)
4. [Code Patterns](#code-patterns)
5. [Known Issues](#known-issues)
6. [TODOs](#todos)
7. [Future Enhancements](#future-enhancements)

---

## Project Overview

### Purpose

Microleet Lite is an interactive educational platform designed to help students and developers master Data Structures, Algorithms, and Object-Oriented Programming concepts. The project addresses the common challenge of preparing for technical interviews by providing a structured, self-paced learning environment with hands-on practice and immediate feedback.

### Original Goals

1. **Comprehensive Coverage**: Provide complete coverage of fundamental data structures (Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, etc.) and OOP principles (Encapsulation, Inheritance, Polymorphism, SOLID, Design Patterns)

2. **Multi-Format Learning**: Offer multiple learning modalities for each topic:
   - Detailed lessons with step-by-step explanations
   - Practice problems similar to LeetCode
   - Quick concept references
   - Cheat sheets for rapid review

3. **Progress Tracking**: Build motivation through a points system and completion tracking

4. **Interactive Experience**: Enable hands-on learning with interactive code examples and quizzes

5. **Self-Contained**: Create a fully client-side application with no backend dependencies

### Target Audience

- Computer Science students preparing for technical interviews
- Self-taught developers learning fundamental concepts
- Bootcamp graduates reinforcing core knowledge
- Experienced developers reviewing specific topics

---

## Architecture & Structure

### Technology Decisions

#### Next.js 14 App Router
- **Why**: Modern React framework with excellent developer experience, built-in routing, and static generation capabilities
- **App Router**: Chosen for its simplified data fetching, improved layouts, and better TypeScript support
- **Trade-off**: Requires `'use client'` directive for interactive components, increasing bundle size slightly

#### TypeScript
- **Why**: Type safety prevents runtime errors, improves IDE autocomplete, and serves as inline documentation
- **Strict Mode**: Enabled for maximum type safety

#### Tailwind CSS
- **Why**: Utility-first approach enables rapid UI development and consistent styling
- **Custom Theme**: Extended with HSL color variables for dark mode support
- **Typography Plugin**: Handles markdown content styling automatically

#### shadcn/ui (Radix UI)
- **Why**: Accessible, unstyled primitives that integrate perfectly with Tailwind
- **Components Used**: Accordion, Tabs, Select, Progress, ScrollArea, Tooltip, etc.
- **Benefit**: Accessibility built-in, keyboard navigation, ARIA attributes

#### CodeMirror
- **Why**: Lightweight, extensible code editor with Python syntax highlighting
- **Use Case**: Display code examples with proper formatting and syntax highlighting
- **Note**: Chosen over Monaco Editor due to smaller bundle size

#### Client-Side State Management
- **Why**: No backend needed; all data is static and embedded in the application
- **localStorage**: Persists user progress, points, and completion state across sessions
- **Trade-off**: Data not synced across devices, but eliminates need for authentication/backend

### Directory Structure

```
C:\Users\xxgol\microleet-lite\
├── .github/
│   └── workflows/          # CI/CD pipelines (build, test, deploy)
├── .next/                  # Next.js build output (generated)
├── node_modules/           # Dependencies
├── public/                 # Static assets
├── src/
│   ├── app/                # Next.js 14 App Router
│   │   ├── layout.tsx              # Root layout with Navbar
│   │   ├── leetcode/
│   │   │   ├── page.tsx            # LeetCode hub page
│   │   │   └── topics/[topic]/     # 12 data structure pages
│   │   ├── oop/
│   │   │   ├── page.tsx            # OOP hub page
│   │   │   └── topics/[category]/[topic]/  # 30+ OOP topic pages
│   │   ├── software-engineering/   # Placeholder
│   │   ├── coming-soon/            # Placeholder
│   │   └── terms-of-service/       # Placeholder
│   │
│   ├── components/         # React components (30 components)
│   │   ├── Navbar.tsx              # Main navigation
│   │   ├── ModulePage.tsx          # CORE: Reusable topic page template
│   │   ├── MicroLesson.tsx         # CORE: Lesson content renderer
│   │   ├── LeetCodeProblems.tsx    # Practice problems display
│   │   ├── Concepts.tsx            # Concept accordion with filtering
│   │   ├── CheatSheet.tsx          # Quick reference with search
│   │   ├── LeetcodePage.tsx        # Data structures hub
│   │   ├── OOPPage.tsx             # OOP hub
│   │   └── [30+ other components]
│   │
│   ├── common/             # TypeScript interfaces (4 files)
│   │   ├── commonLesson.ts         # Lesson, Curriculum, Topic types
│   │   ├── commonProblem.ts        # Problem, Solution types
│   │   ├── commonConcept.ts        # Concept, Difficulty enum
│   │   └── commonCheatSheet.ts     # CheatSheetItem, OperationTypes enum
│   │
│   ├── data/               # Content data (TypeScript, not JSON)
│   │   ├── lessons/
│   │   │   ├── leetcode/           # 12 lesson files (arrays, trees, etc.)
│   │   │   └── oop/                # 30+ OOP lesson files
│   │   ├── problems/               # 12 problem files
│   │   ├── concepts/               # 12 concept files
│   │   ├── cheatsheets/            # 12 cheat sheet files
│   │   └── leetcodeTopics.tsx      # Topic metadata
│   │
│   ├── hooks/              # Custom React hooks
│   │   ├── useLocalStorage.tsx     # Generic localStorage hook
│   │   └── usePoints.tsx           # Points tracking hook
│   │
│   ├── lib/                # Utility libraries
│   │   └── utils.ts                # cn() for className merging
│   │
│   ├── styles/
│   │   └── globals.css             # Global styles, Tailwind imports
│   │
│   └── utils/              # Helper functions (if any)
│
├── components.json         # shadcn/ui configuration
├── next.config.mjs         # Next.js configuration
├── package.json            # Dependencies and scripts
├── postcss.config.mjs      # PostCSS configuration
├── tailwind.config.js      # Tailwind theme customization
├── tsconfig.json           # TypeScript configuration
├── .eslintrc.json          # ESLint rules
├── .prettierrc             # Prettier formatting rules
└── README.md               # Project overview
```

### Key Components and Responsibilities

#### Layout Components

**`layout.tsx`** (src/app/layout.tsx:1)
- Root layout for entire application
- Renders `<Navbar />` and main content area
- Applies global CSS
- Uses `'use client'` for client-side interactivity

**`Navbar.tsx`** (src/components/Navbar.tsx:1)
- Main navigation bar
- "Microleet Lite" branding
- Links to LeetCode, OOP, Software Engineering sections
- Responsive mobile menu

#### Hub/Landing Pages

**`LeetcodePage.tsx`** (src/components/LeetcodePage.tsx:1)
- Landing page for data structures section
- Displays 12 topic cards (Arrays, Trees, Graphs, etc.)
- Search functionality across topics
- Filter by difficulty
- Grid/List view toggle
- Expandable sections with descriptions

**`OOPPage.tsx`** (src/components/OOPPage.tsx:1)
- Landing page for OOP section
- Organized into 6 categories:
  - Foundation of OOP
  - Classes & Objects
  - Interfaces & Abstract Classes
  - SOLID Principles
  - OOP Design Patterns
  - Error Handling & Exceptions
- Modular card layout
- Direct navigation to specific topics

#### Core Content Components

**`ModulePage.tsx`** (src/components/ModulePage.tsx:1)
- **MOST IMPORTANT COMPONENT**: Reusable template for all topic pages
- Accepts props:
  - `title`: Module title
  - `lessonsTab`: Curriculum with lessons
  - `problems`: Practice problems array
  - `cheatSheetItems`: Quick reference items
  - `concepts`: Core concepts array
- Renders 4 tabs:
  - **Lessons**: Detailed curriculum
  - **Practice**: LeetCode-style problems
  - **Concepts**: Key concepts with completion tracking
  - **Cheat Sheet**: Quick reference guide
- Tabs conditionally shown based on provided data
- Uses Radix UI Tabs for accessibility

**`MicroLesson.tsx`** (src/components/MicroLesson.tsx:1)
- Renders individual lesson content
- **Complex State Management**: Uses `useReducer` for:
  - User code submissions
  - Quiz answers
  - Solution visibility
  - Explanation visibility
- **Sidebar Navigation**: `LessonsSidebar` for curriculum navigation
- **Main Content**: `MainContent` with lessons, exercises, quizzes
- **Tabs**: Learn, Exercise, Quiz tabs
- Tracks progress through lessons

**`LeetCodeProblems.tsx`** (src/components/LeetCodeProblems.tsx:1)
- Displays practice problems with:
  - Problem title, description, difficulty badge
  - Multiple solutions per problem
  - Time/Space complexity analysis
  - Code examples with syntax highlighting
- **Understanding Levels**: User can mark understanding (localStorage)
- Accordion-style layout (one problem open at a time)

**`Concepts.tsx`** (src/components/Concepts.tsx:1)
- Displays core concepts for a topic
- **Filtering**: All / Completed / Uncompleted
- **Search**: Debounced search (300ms delay)
- **Completion Tracking**: Mark concepts complete for +5 points
- Markdown rendering with `react-markdown`
- Difficulty badges (Easy, Medium, Hard)
- Progress bar showing completion percentage

**`CheatSheet.tsx`** (src/components/CheatSheet.tsx:1)
- Quick reference guide for operations
- **Search**: Debounced search across titles/descriptions
- **Filter by Operation Type**:
  - Creation, Access, Insertion, Deletion, Search, Traversal, etc.
- Displays:
  - Operation name
  - Code example with CodeMirror
  - Time/Space complexity
  - Description

#### Sub-Components

**`CurriculumHeader.tsx`** - Module title and description display
**`LessonsSidebar.tsx`** - Curriculum navigation sidebar
**`MainContent.tsx`** - Main lesson content area with tabs
**`ModuleOverview.tsx`** - Simple title + description component
**`DifficultyBadge.tsx`** - Colored badges for difficulty levels
**`ExerciseTab.tsx`** - Exercise display and submission
**`LearnTab.tsx`** - Learn content tab
**`LessonsTab.tsx`** - Lessons list view
**`QuizTab.tsx`** - Quiz display and grading

#### UI Components (shadcn/ui)

Pre-built accessible components from shadcn/ui:
- `Accordion`, `Alert`, `Avatar`, `Badge`, `Button`, `Card`, `Checkbox`, `Input`, `Progress`, `ScrollArea`, `Select`, `Skeleton`, `Switch`, `Tabs`, `Tooltip`

### Data Flow

```
Data Files (TypeScript)
    ↓
Topic Pages (e.g., arrays/page.tsx)
    ↓
ModulePage Component (receives all data as props)
    ↓
Tab Components (Lessons, Practice, Concepts, CheatSheet)
    ↓
User Interactions (mark complete, submit code, etc.)
    ↓
localStorage (persist progress, points)
    ↓
Custom Hooks (useLocalStorage, usePoints)
    ↓
UI Updates (progress bars, badges, completion state)
```

**Key Flow Principles:**
1. **Data is Static**: All content stored as TypeScript objects in `src/data/`
2. **Props Down**: Data flows from page → ModulePage → Tab components
3. **State Up**: User actions update localStorage, hooks re-render components
4. **No API Calls**: Completely client-side application

### State Management Approach

#### localStorage Strategy

**Why localStorage?**
- No backend infrastructure needed
- Instant read/write performance
- Persists across browser sessions
- Simple API

**What's Stored?**
- User points per topic (e.g., `arrayPoints: 150`)
- Completed concepts (e.g., `completedConcepts: ['arrays-0', 'arrays-1']`)
- Problem understanding levels (e.g., `problemUnderstanding: {'two-sum': 3}`)
- Dark mode preference
- Other UI preferences

**SSR Safety:**
- Custom `useLocalStorage` hook checks for `window` object
- Prevents hydration mismatches
- Returns default values on server

#### Custom Hooks

**`useLocalStorage.tsx`** (src/hooks/useLocalStorage.tsx:1)
```typescript
function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void]
```
- Generic hook for any localStorage value
- Handles JSON serialization/deserialization
- SSR-safe with window check
- Synchronizes state with localStorage

**`usePoints.tsx`** (src/hooks/usePoints.tsx:1)
```typescript
function usePoints(storageKey: string = 'arrayPoints'): [number, () => void]
```
- Specialized hook for points tracking
- Default increment: +5 points
- Used for concept completion rewards

#### Component State (useReducer)

**MicroLesson.tsx** uses `useReducer` for complex state:
```typescript
type State = {
  userCode: { [key: string]: string };
  quizAnswers: { [key: string]: string };
  showSolution: { [key: string]: boolean };
  showExplanation: { [key: string]: boolean };
};

type Action =
  | { type: 'SET_USER_CODE'; lessonId: string; code: string }
  | { type: 'SET_QUIZ_ANSWER'; lessonId: string; answer: string }
  | { type: 'TOGGLE_SOLUTION'; lessonId: string }
  | { type: 'TOGGLE_EXPLANATION'; lessonId: string };
```

**Benefits:**
- Predictable state updates
- Easy to debug
- Scales well with complexity
- Similar to Redux pattern

### API Routes/Endpoints

**No API routes exist.** This is a fully static, client-side application with no backend. All data is embedded in the application bundle as TypeScript modules.

**Implications:**
- ✅ No server costs
- ✅ Fast initial load (static generation)
- ✅ Works offline after first load
- ❌ Cannot sync data across devices
- ❌ No user authentication
- ❌ All data public (in bundle)

### External Dependencies

#### Production Dependencies (package.json:12-52)

**Core Framework:**
- `next@14.2.1` - React framework with App Router
- `react@^18` - UI library
- `react-dom@^18` - DOM rendering

**UI Component Libraries:**
- `@radix-ui/*` (10 packages) - Accessible UI primitives
- `lucide-react@^0.441.0` - Icon library
- `@fortawesome/*` (3 packages) - Additional icons
- `react-icons@^5.3.0` - More icon options

**Code Display:**
- `@codemirror/*` (3 packages) - Code editor
- `@uiw/react-codemirror@^4.23.2` - React wrapper
- `react-syntax-highlighter@^15.5.0` - Syntax highlighting

**Markdown Rendering:**
- `react-markdown@^9.0.1` - Markdown to React
- `remark-gfm@^4.0.0` - GitHub Flavored Markdown
- `remark-html@^16.0.1` - Markdown to HTML
- `rehype-raw@^7.0.0` - Raw HTML in markdown

**Forms & Validation:**
- `react-hook-form@^7.53.0` - Form state management
- `@hookform/resolvers@^3.9.0` - Validation resolvers
- `zod@^3.23.8` - Schema validation
- `yup@^1.4.0` - Alternative schema validation

**Utilities:**
- `axios@^1.7.5` - HTTP client (may not be used)
- `clsx@^2.1.1` - Conditional className utility
- `tailwind-merge@^2.5.2` - Merge Tailwind classes
- `class-variance-authority@^0.7.0` - Component variants
- `framer-motion@^11.9.0` - Animation library
- `react-collapse@^5.1.1` - Collapse animations
- `react-tooltip@^5.28.0` - Tooltips
- `tailwindcss-animate@^1.0.7` - Tailwind animations

#### Development Dependencies (package.json:54-72)

- `typescript@^5` - Type checking
- `eslint@^8.57.0` + plugins - Linting
- `prettier@3.3.3` - Code formatting
- `tailwindcss@^3.4.11` - CSS framework
- `@tailwindcss/typography@^0.5.15` - Typography plugin
- `postcss@^8.4.45` - CSS processing
- `autoprefixer@^10.4.20` - CSS vendor prefixes
- `@types/*` - TypeScript type definitions

**Potentially Unused:**
- `axios` - No API calls detected in codebase
- Some icon libraries may be redundant

---

## Features Implemented

### 1. Data Structures Learning Path (12 Topics)

**Topics Covered:**
1. Arrays (src/app/leetcode/topics/arrays/page.tsx:1)
2. Strings (src/app/leetcode/topics/strings/page.tsx:1)
3. Dictionaries (src/app/leetcode/topics/dictionaries/page.tsx:1)
4. Tuples (src/app/leetcode/topics/tuples/page.tsx:1)
5. Sets (src/app/leetcode/topics/sets/page.tsx:1)
6. Linked Lists (src/app/leetcode/topics/linked-lists/page.tsx:1)
7. Stacks (src/app/leetcode/topics/stacks/page.tsx:1)
8. Queues (src/app/leetcode/topics/queues/page.tsx:1)
9. Heaps (src/app/leetcode/topics/heaps/page.tsx:1)
10. Trees (src/app/leetcode/topics/trees/page.tsx:1)
11. Tries (src/app/leetcode/topics/tries/page.tsx:1)
12. Graphs (src/app/leetcode/topics/graphs/page.tsx:1)

**Each Topic Includes:**
- Detailed lessons with explanations
- Practice problems with solutions
- Core concepts
- Cheat sheet with operations

### 2. Object-Oriented Programming (30+ Topics)

**Categories:**

**Foundation of OOP (5 topics):**
- Abstraction
- Encapsulation
- Inheritance
- Polymorphism
- Overloading vs. Overriding

**Classes & Objects (5 topics):**
- Class Anatomy
- Constructors
- Methods & Properties
- Object Lifecycles
- Composition vs. Inheritance

**Interfaces & Abstract Classes (4 topics):**
- Interface Definition & Purpose
- Interface vs. Implementation Inheritance
- Abstract Classes vs. Concrete Classes
- Interface Segregation Principle

**SOLID Principles (5 topics):**
- Single Responsibility Principle (SRP)
- Open/Closed Principle (OCP)
- Liskov Substitution Principle (LSP)
- Interface Segregation Principle (ISP)
- Dependency Inversion Principle (DIP)

**OOP Design Patterns (8 topics):**
- Singleton
- Factory
- Observer
- Strategy
- Decorator
- Adapter
- Facade
- Composite

**Error Handling & Exceptions (5 topics):**
- Try-Catch-Finally
- Custom Exceptions
- Exception Hierarchies
- Resource Management
- Logging Practices

### 3. Multi-Tab Learning Experience

**Lessons Tab:**
- Detailed curriculum with multiple lessons per topic
- Sidebar navigation
- Interactive exercises with code submission
- Quizzes with immediate feedback
- Progress tracking through lessons

**Practice Tab:**
- LeetCode-style problems
- Multiple difficulty levels (Easy, Medium, Hard)
- Multiple solutions per problem
- Time/Space complexity analysis
- Understanding level tracking (1-5 scale)
- Syntax highlighting

**Concepts Tab:**
- Core concepts with markdown explanations
- Difficulty badges
- Completion tracking (+5 points per concept)
- Filter by completion status
- Search functionality
- Progress bar

**Cheat Sheet Tab:**
- Quick reference for common operations
- Code examples with CodeMirror
- Complexity analysis
- Filter by operation type (Creation, Access, Insertion, etc.)
- Search across operations

### 4. Progress Tracking System

**Points System:**
- Earn +5 points for each concept marked complete
- Points persist in localStorage
- Points tracked per topic (e.g., `arrayPoints`, `treePoints`)
- Visual progress indicator

**Completion Tracking:**
- Track completed concepts
- Track problem understanding levels
- Progress persists across sessions
- Visual feedback (checkmarks, badges)

**Progress Bar:**
- Shows percentage of concepts completed
- Updates in real-time
- Color-coded (green when complete)

### 5. Interactive Code Environment

**CodeMirror Integration:**
- Read-only code viewing
- Python syntax highlighting
- Line numbers
- Syntax-aware formatting
- Theme support (light/dark)

**Syntax Highlighting:**
- Multiple language support (Python, JavaScript, etc.)
- Code block styling in markdown
- Inline code highlighting

**Code Examples:**
- Copy-paste friendly
- Formatted for readability
- Annotated with comments

### 6. Search & Filtering

**LeetCode Hub Search:**
- Search across all topics
- Real-time filtering
- Search by topic name or description

**Concepts Search:**
- Debounced search (300ms)
- Search across concept titles and descriptions
- Maintains filter state while searching

**CheatSheet Search:**
- Search operations by name or description
- Debounced for performance
- Combined with operation type filter

**Filter Options:**
- Difficulty (Easy, Medium, Hard)
- Completion status (All, Completed, Uncompleted)
- Operation type (Creation, Access, Insertion, etc.)
- View mode (Grid, List)

### 7. Responsive Design

**Mobile-First Approach:**
- Tailwind responsive breakpoints (sm, md, lg, xl)
- Hamburger menu for mobile navigation
- Responsive grid layouts
- Touch-friendly UI elements

**Grid/List Toggle:**
- Switch between grid and list views
- Preference persisted in state
- Optimized for different screen sizes

**Accessibility:**
- Keyboard navigation (Radix UI)
- ARIA attributes
- Focus management
- Screen reader support

### 8. Dark Mode Support

**Implementation:**
- CSS variable-based theming
- HSL color system
- Class-based toggle (`.dark` class)
- Persisted in localStorage
- Smooth transitions

**Theme Variables:**
- Background colors
- Text colors
- Border colors
- Card backgrounds
- Code block themes

### 9. Markdown Rendering

**Features:**
- GitHub Flavored Markdown (GFM)
- Tables, lists, headings
- Code blocks with syntax highlighting
- Inline code
- Links and images
- Raw HTML support (rehype-raw)

**Use Cases:**
- Lesson content
- Concept descriptions
- Problem descriptions
- Instructions and explanations

---

## Code Patterns

### 1. Component Composition Pattern

**ModulePage as Composition Root:**
```typescript
// Each topic page follows this pattern
<ModulePage
  title="Arrays"
  lessonsTab={arrayLessons}
  problems={arrayProblems}
  cheatSheetItems={arrayCheatSheet}
  concepts={arrayConcepts}
/>
```

**Benefits:**
- Single source of truth for topic pages
- Consistent layout across all topics
- Easy to add new topics
- Separation of data and presentation

### 2. Custom Hooks Pattern

**useLocalStorage Hook:**
```typescript
const [points, setPoints] = useLocalStorage('arrayPoints', 0);
```

**Benefits:**
- Reusable state logic
- SSR-safe
- Encapsulates localStorage complexity
- Type-safe with generics

**usePoints Hook:**
```typescript
const [points, addPoints] = usePoints('arrayPoints');
```

**Benefits:**
- Specialized for points system
- Consistent point increment (+5)
- Simpler API for common use case

### 3. Data-First Architecture

**Centralized Data Files:**
```
src/data/
  lessons/
    leetcode/arrayLessons.ts
  problems/arrayProblems.ts
  concepts/arrayConcepts.ts
  cheatsheets/arrayCheatSheet.ts
```

**TypeScript Objects (not JSON):**
```typescript
export const arrayLessons: Curriculum = {
  title: 'Array Fundamentals',
  description: '...',
  sections: [...]
};
```

**Benefits:**
- Type checking on data
- Import/export simplicity
- No runtime parsing
- IDE autocomplete for data

### 4. Interface-First Design

**Common Interfaces:**
```typescript
// src/common/commonLesson.ts
interface Curriculum { ... }
interface LessonContent { ... }
interface Topic { ... }

// src/common/commonProblem.ts
interface Problem { ... }
interface Solution { ... }

// src/common/commonConcept.ts
interface Concept { ... }
enum Difficulty { Easy, Medium, Hard }
```

**Benefits:**
- Consistent data structure
- Type safety across components
- Easy refactoring
- Documentation through types

### 5. Reducer Pattern for Complex State

**MicroLesson State Management:**
```typescript
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_USER_CODE':
      return {
        ...state,
        userCode: { ...state.userCode, [action.lessonId]: action.code }
      };
    case 'TOGGLE_SOLUTION':
      return {
        ...state,
        showSolution: {
          ...state.showSolution,
          [action.lessonId]: !state.showSolution[action.lessonId]
        }
      };
    // ...
  }
};
```

**Benefits:**
- Predictable state updates
- Easy to test
- Scales with complexity
- Clear action tracking

### 6. Debounced Search Pattern

**Search Implementation:**
```typescript
const [searchTerm, setSearchTerm] = useState('');
const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

useEffect(() => {
  const timer = setTimeout(() => {
    setDebouncedSearchTerm(searchTerm);
  }, 300);
  return () => clearTimeout(timer);
}, [searchTerm]);
```

**Benefits:**
- Reduces re-renders
- Better performance
- Smoother UX
- Fewer wasted computations

### 7. Conditional Rendering Pattern

**Tab Visibility Logic:**
```typescript
<Tabs defaultValue="lessons">
  <TabsList>
    {lessonsTab && <TabsTrigger value="lessons">Lessons</TabsTrigger>}
    {problems && problems.length > 0 && (
      <TabsTrigger value="practice">Practice</TabsTrigger>
    )}
    {concepts && concepts.length > 0 && (
      <TabsTrigger value="concepts">Concepts</TabsTrigger>
    )}
    {cheatSheetItems && cheatSheetItems.length > 0 && (
      <TabsTrigger value="cheat-sheet">Cheat Sheet</TabsTrigger>
    )}
  </TabsList>
</Tabs>
```

**Benefits:**
- Flexible content structure
- Only show relevant tabs
- Graceful degradation
- Easy to extend

### 8. Utility-First Styling

**Tailwind CSS Pattern:**
```typescript
<div className="container mx-auto px-4 py-8">
  <h1 className="text-4xl font-bold mb-6">Title</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Cards */}
  </div>
</div>
```

**Benefits:**
- Rapid development
- Consistent spacing/sizing
- Responsive by default
- No CSS file overhead

**Class Merging Utility:**
```typescript
// src/lib/utils.ts
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

**Benefits:**
- Conditional classes
- Merge conflicts resolved
- Consistent class handling

### 9. Route Groups Pattern (Next.js App Router)

**OOP Topic Organization:**
```
src/app/oop/topics/
  (foundation-of-oop)/
    abstraction/page.tsx
    encapsulation/page.tsx
  (class-and-objects)/
    constructors/page.tsx
  (solid-principles)/
    srp/page.tsx
```

**Benefits:**
- Organized file structure
- Groups don't affect URL
- Easier navigation in IDE
- Clear category separation

### 10. Props Spreading Pattern

**Component Reusability:**
```typescript
interface DifficultyBadgeProps {
  difficulty: Difficulty;
  className?: string;
}

<DifficultyBadge
  difficulty={concept.difficulty}
  className="ml-2"
/>
```

**Benefits:**
- Type-safe props
- Optional className override
- Flexible styling
- Component composition

---

## Known Issues

### 1. No Backend / User Authentication

**Issue:** All progress stored in localStorage
**Impact:**
- Cannot sync across devices
- Data lost if browser cache cleared
- No user accounts
- No cloud backup

**Workaround:** Manual export/import feature could be added

### 2. Bundle Size

**Issue:** All content embedded in JavaScript bundle
**Impact:**
- Large initial download
- All lessons/problems loaded upfront
- Slower initial page load

**Potential Solution:** Code splitting, lazy loading, or move to CMS

### 3. No Search Engine Optimization (SEO)

**Issue:** Client-side rendering with `'use client'` directive
**Impact:**
- Search engines may not index content
- No server-side rendering for dynamic pages
- Metadata not optimized per page

**Potential Solution:** Migrate to server components where possible

### 4. Axios Dependency Unused

**Issue:** `axios` package in dependencies but no API calls detected
**Impact:** Unnecessary bundle size
**Fix:** Remove from package.json

### 5. Multiple Icon Libraries

**Issue:** FontAwesome, React Icons, AND Lucide React all installed
**Impact:** Increased bundle size, inconsistent icon usage
**Fix:** Standardize on one library

### 6. No Error Boundaries

**Issue:** No error boundaries for graceful error handling
**Impact:** Unhandled errors crash entire app
**Fix:** Add error boundaries at route level

### 7. No Loading States

**Issue:** No skeleton loaders or loading indicators
**Impact:** Poor UX during navigation
**Fix:** Add Skeleton components from shadcn/ui

### 8. localStorage Data Structure Inconsistency

**Issue:** Different keys for different topics (`arrayPoints`, `treePoints`, etc.)
**Impact:** Hard to manage centrally, no global progress view
**Potential Solution:** Unified data structure in localStorage

### 9. No TypeScript Strict Null Checks in Some Places

**Issue:** Some components may not handle null/undefined safely
**Impact:** Potential runtime errors
**Fix:** Enable strict null checks, add null guards

### 10. No Unit Tests

**Issue:** No test files detected
**Impact:** No automated testing, refactoring risk
**Fix:** Add Jest + React Testing Library

---

## TODOs

### From Codebase Analysis

**No explicit TODO comments found in source code.**

The codebase appears to be in a functional state without inline TODOs, though the following improvements are implied by the architecture:

### Implied TODOs (Based on Structure)

1. **Complete Placeholder Pages**
   - `/software-engineering` page (currently placeholder)
   - `/coming-soon` page (needs content)
   - `/terms-of-service` page (needs content)

2. **Add Root Page Content**
   - `src/app/page.tsx` does not exist
   - Need a landing/home page

3. **Standardize Icon Usage**
   - Currently using 3 icon libraries
   - Choose one and remove others

4. **Remove Unused Dependencies**
   - `axios` appears unused
   - Audit all dependencies

5. **Add Error Handling**
   - Error boundaries for each route
   - Graceful fallbacks

6. **Add Loading States**
   - Skeleton loaders during navigation
   - Better UX feedback

7. **Add Tests**
   - Unit tests for components
   - Integration tests for user flows
   - E2E tests for critical paths

8. **SEO Optimization**
   - Add metadata to each page
   - Server-side rendering where possible
   - Sitemap generation

9. **Accessibility Audit**
   - WCAG compliance check
   - Keyboard navigation testing
   - Screen reader testing

10. **Performance Optimization**
    - Code splitting
    - Lazy loading for heavy components
    - Image optimization

---

## Future Enhancements

### 1. User Authentication & Cloud Sync

**Description:** Add user accounts with cloud-based progress storage
**Benefits:**
- Sync across devices
- Persistent data
- User profiles
- Social features

**Implementation:**
- Backend API (Express, Fastify, or Next.js API routes)
- Database (PostgreSQL, MongoDB, Firebase)
- Authentication (NextAuth.js, Clerk, Auth0)
- Data migration from localStorage

### 2. Community Features

**Description:** Add discussion forums, comments, and peer learning
**Features:**
- Comment on lessons/problems
- Share solutions
- Upvote helpful explanations
- Ask questions
- Instructor/TA responses

**Implementation:**
- Discussion system (Disqus, custom)
- Markdown comments
- Moderation tools

### 3. Code Execution Environment

**Description:** Allow users to run code in browser
**Features:**
- Execute Python/JavaScript code
- See output in real-time
- Test against hidden test cases
- Submit solutions for validation

**Implementation:**
- Web Assembly Python interpreter (Pyodide)
- Sandboxed code execution
- Test case runner
- Judge system (like LeetCode)

### 4. Adaptive Learning Path

**Description:** AI-powered personalized learning recommendations
**Features:**
- Analyze user performance
- Recommend next topics
- Identify weak areas
- Suggest practice problems

**Implementation:**
- Machine learning models
- Performance analytics
- Recommendation engine

### 5. Video Lessons

**Description:** Add video explanations for complex topics
**Features:**
- Embedded videos
- Timestamps for key concepts
- Transcripts
- Closed captions

**Implementation:**
- Video hosting (YouTube, Vimeo, self-hosted)
- Video player component
- Transcript generation

### 6. Spaced Repetition System

**Description:** Implement flashcards and spaced repetition
**Features:**
- Flashcard generation from concepts
- Spaced repetition algorithm (SM-2)
- Review schedule
- Retention tracking

**Implementation:**
- Flashcard component
- Algorithm implementation
- Scheduling system

### 7. Gamification

**Description:** Add badges, achievements, and leaderboards
**Features:**
- Earn badges for milestones
- Achievement system
- Daily streaks
- Leaderboards (optional opt-in)
- XP/leveling system

**Implementation:**
- Achievement definitions
- Badge artwork
- Leaderboard backend

### 8. Mobile App

**Description:** Native mobile apps (iOS, Android)
**Features:**
- Offline access
- Push notifications
- Mobile-optimized UI
- Code editor for mobile

**Implementation:**
- React Native or Flutter
- Shared codebase with web
- Mobile-specific features

### 9. Content Management System (CMS)

**Description:** Move content from TypeScript files to CMS
**Benefits:**
- Non-technical editors can update content
- Versioning and drafts
- Multi-language support
- Smaller bundle size

**Implementation:**
- Headless CMS (Contentful, Sanity, Strapi)
- API integration
- Content migration

### 10. Advanced Analytics

**Description:** Detailed learning analytics dashboard
**Features:**
- Time spent on topics
- Problem-solving patterns
- Concept mastery levels
- Learning streaks
- Personalized insights

**Implementation:**
- Analytics backend
- Data visualization (Chart.js, D3.js)
- Dashboard UI

### 11. Export/Import Progress

**Description:** Allow users to export/import progress data
**Features:**
- Export to JSON
- Import from JSON
- Backup/restore functionality
- Share progress with others

**Implementation:**
- JSON serialization
- File download/upload
- Data validation

### 12. Multi-Language Support (i18n)

**Description:** Internationalization for multiple languages
**Languages:** Spanish, French, Chinese, etc.
**Implementation:**
- i18next or next-intl
- Translation files
- Language switcher

### 13. Collaboration Features

**Description:** Study groups and pair programming
**Features:**
- Create study groups
- Shared progress tracking
- Live coding sessions
- Screen sharing

**Implementation:**
- WebRTC for real-time collaboration
- Collaborative code editor (Yjs, Firepad)
- Group management

### 14. Interview Preparation Mode

**Description:** Timed mock interviews with random problems
**Features:**
- Random problem selection
- Timer
- Hints system
- Mock interview recordings
- Performance feedback

**Implementation:**
- Timer component
- Problem randomization
- Recording functionality

### 15. API for Third-Party Integrations

**Description:** Public API for integrations with other tools
**Use Cases:**
- IDE plugins
- Discord bots
- Browser extensions
- LMS integrations

**Implementation:**
- REST or GraphQL API
- API documentation
- Rate limiting
- API keys

---

## Conclusion

Microleet Lite is a well-architected, client-side learning platform with comprehensive coverage of data structures and OOP concepts. The codebase demonstrates modern React patterns, TypeScript best practices, and a clear separation of concerns. While currently limited to client-side functionality, the foundation is solid for future enhancements like user authentication, cloud sync, and community features.

The modular architecture makes it easy to add new topics, extend existing features, and maintain the codebase over time. The use of TypeScript, interface-first design, and reusable components ensures type safety and code quality.

**Key Strengths:**
- ✅ Comprehensive educational content
- ✅ Well-organized file structure
- ✅ Type-safe codebase
- ✅ Reusable component architecture
- ✅ Modern tech stack
- ✅ Accessible UI (Radix UI)

**Areas for Improvement:**
- 🔧 Add backend for user accounts
- 🔧 Implement testing
- 🔧 Optimize bundle size
- 🔧 Add error boundaries
- 🔧 Improve SEO
- 🔧 Remove unused dependencies

This documentation should help you (or any developer) quickly understand the project structure, make informed architectural decisions, and continue development effectively.
