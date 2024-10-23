import { Concept } from '@/common/commonConcept';

export function filterConcepts(
  concepts: Concept[],
  filter: 'all' | 'completed' | 'uncompleted',
  completedTopics: Record<number, boolean>,
  searchTerm: string,
): Concept[] {
  return concepts.filter((concept) => {
    const matchesFilter =
      (filter === 'completed' && completedTopics[concept.id]) ||
      (filter === 'uncompleted' && !completedTopics[concept.id]) ||
      filter === 'all';
    const matchesSearch = concept.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });
}