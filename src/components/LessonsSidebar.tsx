import React from 'react';
import { ChevronDown, ChevronRight, CheckCircle } from 'lucide-react';
import { Section } from '@/common/commonLesson';

interface LessonsSidebarProps {
  curriculum: {
    sections: Section[];
  };
  expandedSections: Record<string, boolean>;
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
  isCompleted,
}) => (
  <div className="col-span-4 space-y-4">
    {curriculum?.sections.map((section: Section) => (
      <div
        key={section.id}
        className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
      >
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
            {isCompleted && <CheckCircle className="h-5 w-5 text-green-500" />}
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
              {section.topics.map((topic) => (
                <li
                  key={topic.id}
                  onClick={() => handleTopicSelect(topic.id)}
                  className={`
                    flex items-center gap-3 mx-2 px-4 py-3 rounded-lg cursor-pointer
                    transition-all duration-200
                    ${
                      selectedTopicId === topic.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'hover:bg-gray-100'
                    }
                  `}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      selectedTopicId === topic.id
                        ? 'bg-blue-600'
                        : 'bg-gray-400'
                    }`}
                  />
                  <span className="text-sm">{topic.title}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    ))}
  </div>
);

export default LessonsSidebar;
