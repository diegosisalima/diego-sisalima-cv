import projectsData from "../json/projectsData.json";
import "./css/projectCard.css";
const ProjectCard = () => {
  return projectsData.frontend.projects.map((project) => (
    <div className="project-card" key={project.id}>
      <p className="project-card__title">
        {project.name}{" "}
        <i
          className="bx bxs-badge-check"
          style={{ fontSize: "1rem", color: "green" }}
        ></i>
      </p>
      <p className="project-card__subtitle">{project.type}</p>
      <section className="project-card__main">
        <div href="#project-1" className="project-card__div-img">
          <a href="https://clima-ds.netlify.app/" target="_blank">
            <img src={project.image} alt="" />
          </a>
        </div>
        <ul className="project-card__tags">
          {project.tags.map((tag) => (
            <li key={project.id} className="project-card__li">
              <small>▪ {tag}</small>
            </li>
          ))}
        </ul>
        <p className="project-card__description">{project.description}</p>
      </section>
      <footer className="project-card__links">
        <a
          href={project.github}
          target="_blank"
          title="repositorio"
          className="project-card__a"
        >
          <i className="bx bxl-github"></i> Github
        </a>
        {/* <a href="" title="mas información">
            <i className="bx bxs-info-circle trans-scale"></i>
          </a> */}
        <a
          href={project.netlify}
          target="_blank"
          title="ver projecto"
          className="project-card__a"
        >
          <i className="bx bx-link-external"></i> Ver proyecto
        </a>
      </footer>
    </div>
  ));
};
export default ProjectCard;
