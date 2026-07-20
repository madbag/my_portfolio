import Experience from "../AboutCard/Experience";
import TechStack from "../AboutCard/TechStack";
import ProjectCard from "../ProjectsCard/ProjectCard";
import projects from "../ProjectsCard/projectsData";

function ProjectsGrid() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,240px)] gap-x-8 gap-y-10">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
}

export default function Cards() {
  return (
    <div className="p-6 lg:p-10 flex flex-col gap-12">
      {/*<Experience />*/}
      <div>
        <h2 className="text-sm font-medium text-black mb-4">Projects</h2>
        <ProjectsGrid />
      </div>

      <footer className="mt-auto pt-6">
            <p className="text-xs items-center text-black/40">
                Madhushree Boyle &copy; {new Date().getFullYear()}
            </p>
      </footer>
    </div>
  );
}
