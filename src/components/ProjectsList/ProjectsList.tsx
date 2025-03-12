import { ProjectsItem } from "../ProjectsItem/ProjectsItem";
import { projects } from "@/data/projects";
import "./ProjectsList.scss";

export const ProjectsList = () => {
  return (
    <section className="projects-list">
      {projects.map((project) => (
        <ProjectsItem
          key={project.id}
          image={project.image}
          description={project.description}
          projectUrl={project.projectUrl}
        />
      ))}
    </section>
  );
};
