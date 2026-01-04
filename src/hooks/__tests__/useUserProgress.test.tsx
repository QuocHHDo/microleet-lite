import { renderHook, act } from '@testing-library/react';
import { useUserProgress } from '../useUserProgress';
import { DEFAULT_USER_PROGRESS, STORAGE_KEY } from '@/common/userProgress';

describe('useUserProgress', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
    jest.clearAllMocks();
  });

  it('initializes with default progress when localStorage is empty', () => {
    const { result } = renderHook(() => useUserProgress());

    expect(result.current.isLoaded).toBe(true);
    expect(result.current.progress).toEqual(DEFAULT_USER_PROGRESS);
  });

  it('loads existing progress from localStorage', () => {
    const mockProgress = {
      ...DEFAULT_USER_PROGRESS,
      topics: {
        arrays: { points: 100, completedConcepts: ['arrays-0'] },
      },
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(mockProgress));

    const { result } = renderHook(() => useUserProgress());

    expect(result.current.progress.topics.arrays.points).toBe(100);
  });

  it('adds points to a topic', () => {
    const { result } = renderHook(() => useUserProgress());

    act(() => {
      result.current.addPoints('arrays', 10);
    });

    expect(result.current.getTopicProgress('arrays').points).toBe(10);
  });

  it('completes a concept', () => {
    const { result } = renderHook(() => useUserProgress());

    act(() => {
      result.current.completeСoncept('arrays', 'concept-1');
    });

    expect(result.current.isConceptComplete('arrays', 'concept-1')).toBe(true);
  });

  it('uncompletes a concept', () => {
    const { result } = renderHook(() => useUserProgress());

    act(() => {
      result.current.completeСoncept('arrays', 'concept-1');
      result.current.uncompleteСoncept('arrays', 'concept-1');
    });

    expect(result.current.isConceptComplete('arrays', 'concept-1')).toBe(false);
  });

  it('updates problem understanding', () => {
    const { result } = renderHook(() => useUserProgress());

    act(() => {
      result.current.updateProblemUnderstanding('two-sum', 4);
    });

    expect(result.current.getProblemUnderstanding('two-sum')).toBe(4);
  });

  it('updates preferences', () => {
    const { result } = renderHook(() => useUserProgress());

    act(() => {
      result.current.updatePreferences({ darkMode: true, viewMode: 'list' });
    });

    expect(result.current.progress.preferences.darkMode).toBe(true);
    expect(result.current.progress.preferences.viewMode).toBe('list');
  });

  it('exports progress as JSON string', () => {
    const { result } = renderHook(() => useUserProgress());

    act(() => {
      result.current.addPoints('arrays', 50);
    });

    const exported = result.current.exportProgress();
    const parsed = JSON.parse(exported);

    expect(parsed.topics.arrays.points).toBe(50);
  });

  it('imports valid progress', () => {
    const { result } = renderHook(() => useUserProgress());

    const importData = {
      version: 1,
      topics: {
        trees: { points: 200, completedConcepts: ['tree-1', 'tree-2'] },
      },
      problemUnderstanding: { 'binary-tree': 5 },
      preferences: { darkMode: true },
    };

    let success;
    act(() => {
      success = result.current.importProgress(JSON.stringify(importData));
    });

    expect(success).toBe(true);
    expect(result.current.progress.topics.trees.points).toBe(200);
  });

  it('rejects invalid import data', () => {
    const { result } = renderHook(() => useUserProgress());

    let success;
    act(() => {
      success = result.current.importProgress('{ "invalid": true }');
    });

    expect(success).toBe(false);
  });

  it('resets all progress', () => {
    const { result } = renderHook(() => useUserProgress());

    act(() => {
      result.current.addPoints('arrays', 100);
      result.current.resetProgress();
    });

    expect(result.current.progress).toEqual(DEFAULT_USER_PROGRESS);
  });

  it('persists to localStorage on updates', () => {
    const { result } = renderHook(() => useUserProgress());

    act(() => {
      result.current.addPoints('arrays', 25);
    });

    const stored = localStorage.getItem(STORAGE_KEY);
    const parsed = JSON.parse(stored!);

    expect(parsed.topics.arrays.points).toBe(25);
  });

  it('does not duplicate concepts when completing multiple times', () => {
    const { result } = renderHook(() => useUserProgress());

    act(() => {
      result.current.completeСoncept('arrays', 'concept-1');
      result.current.completeСoncept('arrays', 'concept-1');
      result.current.completeСoncept('arrays', 'concept-1');
    });

    const concepts = result.current.getTopicProgress('arrays').completedConcepts;
    expect(concepts.filter((c) => c === 'concept-1').length).toBe(1);
  });
});
