import "./ProjectsItem.scss";
import { useSelector } from "react-redux";
import { selectMatrixRain } from "@/features/MatrixRain/matrixRainSlice";

type ProjectsItemProps = {
  image: string;
  description: string;
  projectUrl: string;
};

export const ProjectsItem = (props: ProjectsItemProps) => {
  const { image, description, projectUrl } = props;
  const isMatrixRainEnabled = useSelector(selectMatrixRain);

  return (
    <article className="projects-list__item">
      <a href={projectUrl} target="_blank">
        <img
          src={image}
          alt={description}
          style={{ filter: isMatrixRainEnabled ? "invert(1)" : "none" }}
        />
      </a>
    </article>
  );
};
