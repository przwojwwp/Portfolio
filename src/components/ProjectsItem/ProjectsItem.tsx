import KatVRImage from "@/assets/katVR-layout.svg";
import "./ProjectsItem.scss";

export const ProjectsItem = () => {
  return (
    <article className="projects-list__item">
      <img src={KatVRImage} alt="KateVR Page" />
    </article>
  );
};
