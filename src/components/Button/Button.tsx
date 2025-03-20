import "./Button.scss";
import "../ProjectsItem/ProjectsItem.scss";

interface Props {
  handleButtonClick: () => void;
  children: React.ReactNode;
}

export const Button = ({ handleButtonClick, children }: Props) => {
  return (
    <article className="projects-list__item">
      <button type="button" onClick={handleButtonClick} className="matrix-btn">
        {children}
      </button>
    </article>
  );
};
