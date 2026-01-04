// Language support for multi-language code examples
export type Language = 'python' | 'typescript';

export const SUPPORTED_LANGUAGES: Language[] = ['python', 'typescript'];

export const LANGUAGE_LABELS: Record<Language, string> = {
  python: 'Python',
  typescript: 'TypeScript',
};

export const LANGUAGE_FILE_EXTENSIONS: Record<Language, string> = {
  python: '.py',
  typescript: '.ts',
};

// Multi-language code content
// TypeScript is optional to allow gradual migration from Python-only content
export interface CodeContent {
  python: string;
  typescript?: string;
}

// Helper to check if code content is a string (old format) or CodeContent (new format)
export function isCodeContent(code: string | CodeContent): code is CodeContent {
  return typeof code === 'object' && code !== null && 'python' in code;
}

// Helper to get code for a specific language with fallback
export function getCodeForLanguage(
  code: string | CodeContent,
  language: Language
): string {
  if (typeof code === 'string') {
    // Legacy format - assume it's Python
    return code;
  }

  // Return the requested language, or fall back to Python
  return code[language] || code.python;
}

// Helper to check if a language is available for given code
export function isLanguageAvailable(
  code: string | CodeContent,
  language: Language
): boolean {
  if (typeof code === 'string') {
    // Legacy format - only Python available
    return language === 'python';
  }

  return !!code[language];
}
