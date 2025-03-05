// import KatVRImage from "@/assets/project_katVR-icon.svg";
import "./ProjectsItem.scss";
import { projectsIcons } from "@/assets/index";

export const ProjectsItem = () => {
  return (
    <article className="projects-list__item">
      <img src={projectsIcons.katVR} alt="KateVR Page" />
    </article>
  );
};
