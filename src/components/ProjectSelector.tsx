import { useState } from "react";

export default function ProjectSelector({
  icon,
  projectsComponent,
  freelancesComponent,
}: any) {
  const [projects, setProjects] = useState<boolean>(true);

  return (
    <>
      <div className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
        {icon}
        <button onClick={() => setProjects(true)}>
          <h2 className={projects ? "font-bold" : "text-gray-600/80"}>
            Freelances
          </h2>
        </button>
        <span>/</span>
        <button onClick={() => setProjects(false)}>
          <h2 className={projects ? "text-gray-600/80" : "font-bold"}>
            Proyectos
          </h2>
        </button>
      </div>
      {projects ? freelancesComponent : projectsComponent}
    </>
  );
}
