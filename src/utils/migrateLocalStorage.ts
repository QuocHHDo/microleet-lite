import { UserProgress, DEFAULT_USER_PROGRESS, STORAGE_KEY } from '@/common/userProgress';

/**
 * Migrate old localStorage structure to new centralized structure
 * This runs once to convert existing data
 */
export function migrateLocalStorage(): boolean {
  if (typeof window === 'undefined') return false;

  try {
    // Check if new structure already exists
    const existing = localStorage.getItem(STORAGE_KEY);
    if (existing) {
      console.log('Migration skipped: New structure already exists');
      return false;
    }

    const newProgress: UserProgress = {
      ...DEFAULT_USER_PROGRESS,
      topics: {},
      problemUnderstanding: {},
    };

    // Migrate old topic points (e.g., "arrayPoints", "treePoints")
    const topicNames = [
      'array',
      'string',
      'dictionary',
      'tuple',
      'set',
      'linkedList',
      'stack',
      'queue',
      'heap',
      'tree',
      'trie',
      'graph',
    ];

    let migratedData = false;

    topicNames.forEach((topic) => {
      const pointsKey = `${topic}Points`;
      const points = localStorage.getItem(pointsKey);

      if (points) {
        const topicKey = topic.toLowerCase().replace(/([A-Z])/g, '-$1').toLowerCase();
        newProgress.topics[topicKey] = {
          points: parseInt(points, 10) || 0,
          completedConcepts: [],
        };
        migratedData = true;

        // Remove old key
        localStorage.removeItem(pointsKey);
        console.log(`Migrated ${pointsKey}: ${points} points`);
      }
    });

    // Migrate completed concepts
    const completedConcepts = localStorage.getItem('completedConcepts');
    if (completedConcepts) {
      try {
        const parsed = JSON.parse(completedConcepts) as string[];
        // Group by topic (assuming format like "arrays-0", "trees-1")
        parsed.forEach((conceptId) => {
          const [topic] = conceptId.split('-');
          if (topic) {
            if (!newProgress.topics[topic]) {
              newProgress.topics[topic] = {
                points: 0,
                completedConcepts: [],
              };
            }
            newProgress.topics[topic].completedConcepts.push(conceptId);
          }
        });
        localStorage.removeItem('completedConcepts');
        migratedData = true;
        console.log(`Migrated ${parsed.length} completed concepts`);
      } catch (e) {
        console.error('Error migrating completed concepts:', e);
      }
    }

    // Migrate problem understanding
    const problemUnderstanding = localStorage.getItem('problemUnderstanding');
    if (problemUnderstanding) {
      try {
        newProgress.problemUnderstanding = JSON.parse(problemUnderstanding);
        localStorage.removeItem('problemUnderstanding');
        migratedData = true;
        console.log('Migrated problem understanding');
      } catch (e) {
        console.error('Error migrating problem understanding:', e);
      }
    }

    // Migrate preferences
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode) {
      newProgress.preferences.darkMode = darkMode === 'true';
      localStorage.removeItem('darkMode');
      migratedData = true;
    }

    const viewMode = localStorage.getItem('viewMode');
    if (viewMode && (viewMode === 'grid' || viewMode === 'list')) {
      newProgress.preferences.viewMode = viewMode;
      localStorage.removeItem('viewMode');
      migratedData = true;
    }

    // Save new structure
    if (migratedData) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
      console.log('✅ Migration completed successfully!');
      console.log('New structure:', newProgress);
      return true;
    } else {
      console.log('No old data found to migrate');
      return false;
    }
  } catch (error) {
    console.error('Error during migration:', error);
    return false;
  }
}

/**
 * Initialize migration on app load
 */
export function initializeMigration(): void {
  if (typeof window === 'undefined') return;

  // Check if migration has already been attempted
  const migrationCompleted = localStorage.getItem('migration_completed');

  if (!migrationCompleted) {
    console.log('🔄 Starting localStorage migration...');
    const success = migrateLocalStorage();

    // Mark migration as attempted (even if no data was found)
    localStorage.setItem('migration_completed', 'true');

    if (success) {
      console.log('✅ Migration successful!');
    }
  }
}
