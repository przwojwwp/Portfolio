import { ProjectsItem } from "../ProjectsItem/ProjectsItem";
import { projects } from "@/data/projects";
import "./ProjectsList.scss";
import { Button } from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  selectMatrixRain,
  toggleMatrixRain,
} from "../../features/MatrixRain/matrixRainSlice";

export const ProjectsList = () => {
  const isMatrixRainEnabled = useSelector(selectMatrixRain);
  const dispatch = useDispatch();

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
      <Button handleButtonClick={() => dispatch(toggleMatrixRain())}>
        {isMatrixRainEnabled ? "Stop The Rain" : "Make It Rain"}
      </Button>
    </section>
  );
};
