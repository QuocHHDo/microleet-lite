'use client';

import React from 'react';
import { Language, LANGUAGE_LABELS } from '@/common/commonLanguage';
import { useUserProgress } from '@/hooks/useUserProgress';
import { Code2 } from 'lucide-react';

interface LanguageSelectorProps {
  availableLanguages?: Language[];
  className?: string;
}

export function LanguageSelector({
  availableLanguages = ['python', 'typescript'],
  className = '',
}: LanguageSelectorProps) {
  const { progress, updatePreferences } = useUserProgress();
  const selectedLanguage = progress.preferences.language || 'python';

  const handleLanguageChange = (language: Language) => {
    updatePreferences({ language });
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Code2 className="h-4 w-4 text-muted-foreground" />
      <span className="text-sm font-medium text-muted-foreground">Language:</span>
      <div className="flex gap-1 rounded-md border border-border p-1">
        {availableLanguages.map((lang) => (
          <button
            key={lang}
            onClick={() => handleLanguageChange(lang)}
            className={`
              px-3 py-1 text-sm font-medium rounded transition-colors
              ${
                selectedLanguage === lang
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }
            `}
          >
            {LANGUAGE_LABELS[lang]}
          </button>
        ))}
      </div>
    </div>
  );
}
