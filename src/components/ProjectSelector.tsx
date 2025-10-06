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
      <div className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
        {icon}
        <button
          aria-pressed={showFreelances}
          onClick={() => setShowFreelances(true)}
        >
          <h2 className={showFreelances ? "font-bold" : "text-gray-600/80"}>
            Freelances
          </h2>
        </button>
        <span>/</span>
        <button
          aria-pressed={!showFreelances}
          onClick={() => setShowFreelances(false)}
        >
          <h2 className={!showFreelances ? "font-bold" : "text-gray-600/80"}>
            Proyectos
          </h2>
        </button>
      </div>
      {showFreelances ? freelancesComponent : projectsComponent}
    </>
  );
}
