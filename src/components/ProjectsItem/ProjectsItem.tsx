import "./ProjectsItem.scss";

type ProjectsItemProps = {
  image: string;
  description: string;
  projectUrl: string;
};

export const ProjectsItem = (props: ProjectsItemProps) => {
  const { image, description, projectUrl } = props;

  return (
    <article className="projects-list__item">
      <a href={projectUrl} target="_blank">
        <img src={image} alt={description} />
      </a>
    </article>
  );
};
