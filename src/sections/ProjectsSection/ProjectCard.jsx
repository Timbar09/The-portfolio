import Button from "../../components/Button";

const ProjectCard = ({ className = "", title, description }) => {
  return (
    <li class={`project__card ${className}`} tabIndex="0">
      <div class="project__card--container grid grid-pi-c p-2">
        <div class="project__card--info flex flex-col gap-2">
          <h3>{title}</h3>

          <p>{description}</p>

          <div class="project__card--details flex flex-jc-sb gap-1">
            <ul className="project__card--tech__list flex flex-ai-c flex-jc-sb gap-1">
              <li className="project__card--tech__item">HTML</li>
              <li className="project__card--tech__item">CSS</li>
              <li className="project__card--tech__item">JavaScript</li>
            </ul>

            <div className="project__card--button">
              <Button type="secondary" name="View more" />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
