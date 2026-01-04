import { useState, useEffect, useCallback } from 'react';
import {
  UserProgress,
  DEFAULT_USER_PROGRESS,
  STORAGE_KEY,
  TopicProgress,
} from '@/common/userProgress';

/**
 * Centralized hook for managing all user progress in localStorage
 */
export function useUserProgress() {
  const [progress, setProgress] = useState<UserProgress>(DEFAULT_USER_PROGRESS);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load progress from localStorage on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as UserProgress;
        setProgress(parsed);
      }
    } catch (error) {
      console.error('Error loading user progress:', error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Listen for custom storage events to sync state across components
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleStorageChange = (e: Event) => {
      const customEvent = e as CustomEvent<UserProgress>;
      if (customEvent.detail) {
        setProgress(customEvent.detail);
      }
    };

    window.addEventListener('userProgressUpdate', handleStorageChange);
    return () => {
      window.removeEventListener('userProgressUpdate', handleStorageChange);
    };
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (!isLoaded) return;
    if (typeof window === 'undefined') return;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
      // Dispatch custom event to sync state across all components
      window.dispatchEvent(new CustomEvent('userProgressUpdate', { detail: progress }));
    } catch (error) {
      console.error('Error saving user progress:', error);
    }
  }, [progress, isLoaded]);

  // Get progress for a specific topic
  const getTopicProgress = useCallback(
    (topicName: string): TopicProgress => {
      return (
        progress.topics[topicName] || {
          points: 0,
          completedConcepts: [],
        }
      );
    },
    [progress],
  );

  // Update topic progress
  const updateTopicProgress = useCallback(
    (topicName: string, updates: Partial<TopicProgress>) => {
      setProgress((prev) => ({
        ...prev,
        topics: {
          ...prev.topics,
          [topicName]: {
            ...getTopicProgress(topicName),
            ...updates,
            lastAccessed: new Date().toISOString(),
          },
        },
      }));
    },
    [getTopicProgress],
  );

  // Add points to a topic
  const addPoints = useCallback(
    (topicName: string, points: number = 5) => {
      const current = getTopicProgress(topicName);
      updateTopicProgress(topicName, {
        points: current.points + points,
      });
    },
    [getTopicProgress, updateTopicProgress],
  );

  // Mark concept as complete
  const completeСoncept = useCallback(
    (topicName: string, conceptId: string) => {
      const current = getTopicProgress(topicName);
      if (!current.completedConcepts.includes(conceptId)) {
        updateTopicProgress(topicName, {
          completedConcepts: [...current.completedConcepts, conceptId],
        });
      }
    },
    [getTopicProgress, updateTopicProgress],
  );

  // Mark concept as incomplete
  const uncompleteСoncept = useCallback(
    (topicName: string, conceptId: string) => {
      const current = getTopicProgress(topicName);
      updateTopicProgress(topicName, {
        completedConcepts: current.completedConcepts.filter((id) => id !== conceptId),
      });
    },
    [getTopicProgress, updateTopicProgress],
  );

  // Check if concept is complete
  const isConceptComplete = useCallback(
    (topicName: string, conceptId: string): boolean => {
      const current = getTopicProgress(topicName);
      return current.completedConcepts.includes(conceptId);
    },
    [getTopicProgress],
  );

  // Update problem understanding
  const updateProblemUnderstanding = useCallback((problemId: string, level: number) => {
    setProgress((prev) => ({
      ...prev,
      problemUnderstanding: {
        ...prev.problemUnderstanding,
        [problemId]: level,
      },
    }));
  }, []);

  // Get problem understanding
  const getProblemUnderstanding = useCallback(
    (problemId: string): number => {
      return progress.problemUnderstanding[problemId] || 0;
    },
    [progress],
  );

  // Update preferences
  const updatePreferences = useCallback((updates: Partial<typeof progress.preferences>) => {
    setProgress((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        ...updates,
      },
    }));
  }, []);

  // Export progress as JSON
  const exportProgress = useCallback((): string => {
    return JSON.stringify(progress, null, 2);
  }, [progress]);

  // Import progress from JSON
  const importProgress = useCallback((jsonString: string): boolean => {
    try {
      const imported = JSON.parse(jsonString) as UserProgress;

      // Validate structure
      if (!imported.version || !imported.topics || !imported.problemUnderstanding) {
        throw new Error('Invalid progress data structure');
      }

      setProgress(imported);
      return true;
    } catch (error) {
      console.error('Error importing progress:', error);
      return false;
    }
  }, []);

  // Reset all progress
  const resetProgress = useCallback(() => {
    setProgress(DEFAULT_USER_PROGRESS);
  }, []);

  return {
    progress,
    isLoaded,
    getTopicProgress,
    updateTopicProgress,
    addPoints,
    completeСoncept,
    uncompleteСoncept,
    isConceptComplete,
    updateProblemUnderstanding,
    getProblemUnderstanding,
    updatePreferences,
    exportProgress,
    importProgress,
    resetProgress,
  };
}
