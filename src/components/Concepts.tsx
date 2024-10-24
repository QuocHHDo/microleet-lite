'use client';
import React, { useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';
import { filterConcepts } from '@/utils/filterConcepts';
import useDebounce from '../hooks/useDebounce';
import { Concept } from '@/common/commonConcept';
import { renderContent } from '@/utils/renderContent';

interface ConceptsTabProps {
  concepts: Concept[];
  completedConcepts: Record<number, boolean>;
  expandedConcepts: Record<number, boolean>;
  filter: 'all' | 'completed' | 'uncompleted';
  setFilter: (filter: 'all' | 'completed' | 'uncompleted') => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  toggleConcept: (id: number) => void;
  markAsCompleted: (id: number) => void;
  darkMode: boolean;
}

const Concepts: React.FC<ConceptsTabProps> = ({
  concepts,
  completedConcepts,
  expandedConcepts,
  filter,
  setFilter,
  searchTerm,
  setSearchTerm,
  toggleConcept,
  markAsCompleted,
}) => {
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const filteredConcepts: Concept[] = useMemo(() => {
    return filterConcepts(
      concepts,
      filter,
      completedConcepts,
      debouncedSearchTerm,
    );
  }, [filter, completedConcepts, debouncedSearchTerm]);

  return (
    <Card className="mt-4">
      <CardContent className="pt-6">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 space-y-2 sm:space-y-0 sm:space-x-2">
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-2 top-3 h-4 w-4 text-gray-500" />
            <Input
              type="text"
              placeholder="Search concepts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 w-full"
            />
          </div>
          <div className="flex space-x-2">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              onClick={() => setFilter('all')}
            >
              All
            </Button>
            <Button
              variant={filter === 'uncompleted' ? 'default' : 'outline'}
              onClick={() => setFilter('uncompleted')}
            >
              To Do
            </Button>
            <Button
              variant={filter === 'completed' ? 'default' : 'outline'}
              onClick={() => setFilter('completed')}
            >
              Completed
            </Button>
          </div>
        </div>

        {filteredConcepts.map((concept) => (
          <Card
            key={concept.id}
            className={`mb-4 ${expandedConcepts[concept.id] ? 'border-blue-500' : ''}`}
          >
            <CardHeader
              className="cursor-pointer"
              onClick={() => toggleConcept(concept.id)}
            >
              <CardTitle className="flex justify-between items-center">
                <span>{concept.title}</span>
                {expandedConcepts[concept.id] ? <ChevronUp /> : <ChevronDown />}
              </CardTitle>
            </CardHeader>
            {expandedConcepts[concept.id] && (
              <CardContent className="p-4">
                {renderContent(concept.description)}
                <div className="mt-4">
                  <Button
                    variant={
                      completedConcepts[concept.id] ? 'default' : 'outline'
                    }
                    onClick={() => markAsCompleted(concept.id)}
                    className="complete-button"
                  >
                    {completedConcepts[concept.id] ? (
                      <>
                        <CheckCircle className="mr-2" /> Completed
                      </>
                    ) : (
                      'Mark as Completed'
                    )}
                  </Button>

                  {completedConcepts[concept.id] && (
                    <div className="p-2 bg-green-200 rounded-md text-green-800 mt-4">
                      Lesson marked as completed! 🎉
                    </div>
                  )}
                </div>
              </CardContent>
            )}
          </Card>
        ))}

        {filteredConcepts.length === 0 && (
          <div className="text-center text-gray-600">
            No concepts found. Try adjusting your search or filter.
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Concepts;
