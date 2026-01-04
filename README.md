# Microleet Lite

An interactive educational platform for mastering Data Structures, Algorithms, and Object-Oriented Programming concepts through structured lessons, practice problems, and interactive code examples.

## Problem Statement

Technical interview preparation and learning fundamental programming concepts often lacks engaging, structured, and interactive learning experiences. Microleet Lite bridges this gap by providing a comprehensive, self-paced learning environment with built-in progress tracking and hands-on practice.

## Key Features

- **Structured Learning Paths**: 12 data structure topics and 30+ OOP concepts organized into clear modules
- **Multi-Format Learning**: Each topic includes lessons, practice problems, concepts, and quick-reference cheat sheets
- **Interactive Code Environment**: CodeMirror integration for viewing and experimenting with code examples
- **Progress Tracking**: Points system and completion tracking persisted in browser localStorage
- **LeetCode-Style Problems**: Practice problems with multiple solutions, difficulty levels, and complexity analysis
- **Smart Search & Filtering**: Find topics, concepts, and operations quickly with debounced search
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- **Dark Mode Support**: Theme switching with CSS variable-based theming

## Tech Stack

### Core
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5
- **UI Library**: React 18
- **Styling**: Tailwind CSS

### UI Components
- **Component Library**: shadcn/ui (Radix UI primitives)
- **Icons**: FontAwesome, React Icons, Lucide React
- **Animations**: Framer Motion

### Code & Markdown
- **Code Editor**: CodeMirror with Python language support
- **Syntax Highlighting**: react-syntax-highlighter
- **Markdown Rendering**: react-markdown with remark-gfm

### State & Forms
- **State Management**: React Hooks + localStorage
- **Form Handling**: react-hook-form
- **Validation**: Zod & Yup

### Development
- **Linting**: ESLint
- **Formatting**: Prettier
- **Build Tool**: Next.js built-in tooling

## Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation & Running

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Format code
npm run format
```

The application will be available at `http://localhost:3000`

## Project Structure

```
src/
├── app/              # Next.js 14 App Router pages
├── components/       # React components
├── common/           # TypeScript interfaces
├── data/             # Lessons, problems, and content
├── hooks/            # Custom React hooks
├── lib/              # Utility libraries
├── styles/           # Global CSS
└── utils/            # Helper functions
```

## Documentation

For detailed architecture, implementation details, and development guidelines, see [DOCUMENTATION.md](./DOCUMENTATION.md).

## License

Private project.
