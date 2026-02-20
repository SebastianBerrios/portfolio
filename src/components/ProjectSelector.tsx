import { useState } from "react";

import type { ReactNode } from "react";

interface ProjectSelectorProps {
  icon?: ReactNode;
  projectsComponent?: ReactNode;
  freelancesComponent?: ReactNode;
  children?: ReactNode;
}

export default function ProjectSelector({
  icon,
  projectsComponent,
  freelancesComponent,
}: ProjectSelectorProps) {
  const [showFreelances, setShowFreelances] = useState<boolean>(true);

  return (
    <>
      <div className="flex items-center mb-10 gap-x-3 text-black/80 dark:text-white">
        {icon && (
          <span className="text-amber-500 dark:text-amber-400">{icon}</span>
        )}
        <div className="flex items-end gap-1">
          <button
            aria-pressed={showFreelances}
            onClick={() => setShowFreelances(true)}
            className="relative pb-2 px-0.5"
          >
            <h2
              className={`text-3xl font-semibold transition-colors duration-200 ${
                showFreelances
                  ? "text-gray-900 dark:text-white font-bold"
                  : "text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400"
              }`}
            >
              Freelances
            </h2>
            <span
              className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-amber-400 transition-all duration-300 ${
                showFreelances ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
              style={{ transformOrigin: "left" }}
            />
          </button>

          <span className="text-3xl text-gray-200 dark:text-gray-700 mb-2 select-none">
            /
          </span>

          <button
            aria-pressed={!showFreelances}
            onClick={() => setShowFreelances(false)}
            className="relative pb-2 px-0.5"
          >
            <h2
              className={`text-3xl font-semibold transition-colors duration-200 ${
                !showFreelances
                  ? "text-gray-900 dark:text-white font-bold"
                  : "text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400"
              }`}
            >
              Proyectos
            </h2>
            <span
              className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-amber-400 transition-all duration-300 ${
                !showFreelances ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
              style={{ transformOrigin: "left" }}
            />
          </button>
        </div>
      </div>

      {showFreelances ? freelancesComponent : projectsComponent}
    </>
  );
}
