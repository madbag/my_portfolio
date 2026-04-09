import About from "../AboutCard/About";
import Experience from "../AboutCard/Experience";
import TechStack from "../AboutCard/TechStack";
import ProjectCard from "../ProjectsCard/ProjectCard";
import projects from "../ProjectsCard/projectsData";

const containerClass = "max-w-325 mx-auto px-4";

function AboutRow() {
  return (
    <div className={`${containerClass} grid grid-cols-1 sm:grid-cols-3 gap-5 items-start`}>
      <About />
      <TechStack />
      <Experience />
    </div>
  );
}

function ProjectsMasonry() {
  return (
    <div className={`${containerClass} columns-1 sm:columns-2 lg:columns-3 gap-5`}>
      {projects.map((project) => (
        <div key={project.title} className="break-inside-avoid mb-5">
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  );
}

export default function Cards({ activeSection }) {
  if (activeSection === "Projects") {
    return <ProjectsMasonry />;
  }

  if (activeSection === "About") {
    return <AboutRow />;
  }

  return (
    <div className={`${containerClass} flex flex-col gap-5`}>
      <AboutRow />
      <ProjectsMasonry />
    </div>
  );
}
