import React from 'react';

interface NavigationProps {
  lessons: { title: string }[];
  activeLesson: number;
  setActiveLesson: (index: number) => void;
  completedLessons?: number[];
}

const Navigation: React.FC<NavigationProps> = ({
  lessons,
  activeLesson,
  setActiveLesson,
  completedLessons,
}) => {
  return (
    <nav className="w-64 bg-gray-100 p-6">
      <h2 className="text-xl font-bold mb-4">Lessons</h2>
      <ul>
        {lessons.map((lesson, index) => {
          const isCompleted = completedLessons?.includes(index);
          const isLocked = index > 0 && !completedLessons?.includes(index - 1);

          return (
            <li key={index} className="mb-2">
              <button
                onClick={() => !isLocked && setActiveLesson(index)}
                disabled={isLocked}
                className={`w-full text-left p-2 rounded ${
                  activeLesson === index
                    ? 'bg-blue-600 text-white'
                    : isLocked
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'hover:bg-gray-200'
                }`}
              >
                {lesson.title}
                {isCompleted && <span className="ml-2 text-green-500">✔</span>}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
