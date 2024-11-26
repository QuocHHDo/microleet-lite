import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Filter } from 'lucide-react';
import { Curriculum, PriorityLevel, Section } from '@/common/commonLesson';
import { Tooltip } from '@radix-ui/react-tooltip';
import { TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { Checkbox } from '@/components/ui/checkbox';

interface LessonsSidebarProps {
  curriculum: Curriculum;
  expandedSections: Record<number, boolean>;
  toggleSection: (sectionId: number) => void;
  selectedTopicId: string;
  handleTopicSelect: (topicId: string) => void;
  isCompleted?: boolean;
}

const LessonsSidebar: React.FC<LessonsSidebarProps> = ({
  curriculum,
  expandedSections,
  toggleSection,
  selectedTopicId,
  handleTopicSelect,
}) => {
  const [selectedPriorities, setSelectedPriorities] = useState<
    Set<PriorityLevel>
  >(
    new Set(
      Object.values(PriorityLevel).filter(
        (p): p is PriorityLevel =>
          typeof p === 'number' && p !== PriorityLevel.Unset,
      ),
    ),
  );
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);

  const getPriorityDescription = (priority: PriorityLevel): string => {
    switch (priority) {
      case PriorityLevel.Essential:
        return 'Required for all technical interviews.';
      case PriorityLevel.Important:
        return 'Frequently asked in most company interviews.';
      case PriorityLevel.Beneficial:
        return 'Common in top-tier company interviews (e.g., FAANG).';
      case PriorityLevel.Optional:
        return 'Rarely asked but useful for deep learning.';
      case PriorityLevel.Unset:
        return 'Priority not yet determined.';
      default:
        return '';
    }
  };

  const getPriorityBadgeClass = (priority: PriorityLevel): string => {
    const baseClass = 'px-2 py-1 rounded-full text-xs font-medium';
    switch (priority) {
      case PriorityLevel.Essential:
        return `${baseClass} bg-red-100 text-red-700`;
      case PriorityLevel.Important:
        return `${baseClass} bg-yellow-100 text-yellow-700`;
      case PriorityLevel.Beneficial:
        return `${baseClass} bg-green-100 text-green-700`;
      case PriorityLevel.Optional:
        return `${baseClass} bg-gray-100 text-gray-700`;
      default:
        return `${baseClass} bg-gray-100 text-gray-500`;
    }
  };

  const togglePriority = (priority: PriorityLevel) => {
    const newSelectedPriorities = new Set(selectedPriorities);
    if (newSelectedPriorities.has(priority)) {
      newSelectedPriorities.delete(priority);
    } else {
      newSelectedPriorities.add(priority);
    }
    setSelectedPriorities(newSelectedPriorities);
  };

  const getSelectedPrioritiesText = () => {
    const priorityLevelCount = Object.keys(PriorityLevel).length / 2;
    if (selectedPriorities.size === priorityLevelCount) return 'All priorities';
    if (selectedPriorities.size === 0) return 'No priorities selected';
    return `${selectedPriorities.size - 1} ${selectedPriorities.size - 1 === 1 ? 'priority' : 'priorities'} selected`;
  };

  const shouldShowTopic = (topic: { priority?: PriorityLevel }) => {
    // If topic has no priority, always show it
    if (topic.priority === undefined) return true;
    // Otherwise, check if its priority is selected
    return selectedPriorities.has(topic.priority as PriorityLevel);
  };

  const FilterSection = () => (
    <div className="bg-gray-50 border-b">
      <button
        onClick={() => setIsFilterExpanded(!isFilterExpanded)}
        className="w-full p-4 flex items-center justify-between hover:bg-gray-100 transition-colors"
      >
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-gray-500" />
          <span className="text-sm font-medium text-gray-700">
            Filter by Priority
          </span>
          <span className="text-xs text-gray-500">
            ({getSelectedPrioritiesText()})
          </span>
        </div>
        {isFilterExpanded ? (
          <ChevronDown className="h-4 w-4 text-gray-400" />
        ) : (
          <ChevronRight className="h-4 w-4 text-gray-400" />
        )}
      </button>

      {isFilterExpanded && (
        <div className="p-4 pt-0 space-y-2">
          {Object.values(PriorityLevel)
            .filter(
              (p): p is PriorityLevel =>
                typeof p === 'number' && p !== PriorityLevel.Unset,
            )
            .map((priority) => (
              <div key={priority} className="flex items-center space-x-2">
                <Checkbox
                  id={`priority-${priority}`}
                  checked={selectedPriorities.has(priority)}
                  onCheckedChange={() => togglePriority(priority)}
                />
                <label
                  htmlFor={`priority-${priority}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  <span className={getPriorityBadgeClass(priority)}>
                    {PriorityLevel[priority]}
                  </span>
                </label>
              </div>
            ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="col-span-4 space-y-4">
      <div className="border rounded-xl overflow-hidden shadow-sm">
        <FilterSection />
        <TooltipProvider>
          {curriculum?.sections.map((section: Section) => (
            <div key={section.id} className="border-t first:border-t-0">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-600 font-semibold">
                    {section.id}
                  </span>
                  <h2 className="text-lg font-semibold">{section.title}</h2>
                </div>
                <div className="flex items-center gap-2">
                  {expandedSections[section.id] ? (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </button>

              {expandedSections[section.id] && (
                <div className="bg-gray-50">
                  <ul className="py-2">
                    {section.topics.filter(shouldShowTopic).map((topic) => (
                      <li
                        key={topic.id}
                        onClick={() => handleTopicSelect(topic.id)}
                        className={`flex items-center gap-3 mx-2 px-4 py-3 rounded-lg cursor-pointer
                            ${
                              selectedTopicId === topic.id
                                ? 'bg-blue-100 text-blue-700'
                                : 'hover:bg-gray-100'
                            } transition-all duration-200`}
                      >
                        {topic.priority !== undefined ? (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span
                                className={getPriorityBadgeClass(
                                  topic.priority as PriorityLevel,
                                )}
                              >
                                {PriorityLevel[topic.priority as PriorityLevel]}
                              </span>
                            </TooltipTrigger>
                            <TooltipContent className="max-w-[200px]">
                              <p>
                                {getPriorityDescription(
                                  topic.priority as PriorityLevel,
                                )}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        ) : (
                          <span className={getPriorityBadgeClass(-1)}>
                            Unset
                          </span>
                        )}
                        <span className="text-sm">{topic.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </TooltipProvider>
      </div>
    </div>
  );
};

export default LessonsSidebar;
