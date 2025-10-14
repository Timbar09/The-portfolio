import TechItem from "./TechItem";

const ProjectModalText = ({ project }) => {
  const { overview, problem, features, summary } = project.description;

  return (
    <div className="project__modal--body__text p-2 grid grid-gap-2">
      <section className="project__modal--body__text--overview">
        <h3>Overview</h3>

        <p className="my-2"> {overview} </p>
      </section>

      <section className="project__modal--body__text--tech">
        <h3>Technologies Used</h3>

        <ul className="flex flex-jc-c flex_lg-jc-fs flex-ai-fs flex-wrap gap-1 my-2">
          {project.tech.map((item, index) => (
            <TechItem key={index} item={item} isCardHovered={true} />
          ))}
        </ul>
      </section>

      <section className="project__modal--body__text--problem">
        <h3>Problem Statement</h3>

        <p className="my-2"> {problem} </p>
      </section>

      <section className="project__modal--body__text--features">
        <h3>Features & Functionalities</h3>

        <ul className="pl-3 my-2">
          {features.map((item, index) => (
            <li key={index}>
              <span>{`${item.split(":")[0]}: `}</span>
              {item.split(":")[1]}
            </li>
          ))}
        </ul>
      </section>

      <section className="project__modal--body__text--summary">
        <h3>Summary</h3>

        <p className="my-2"> {summary} </p>
      </section>
    </div>
  );
};

export default ProjectModalText;
