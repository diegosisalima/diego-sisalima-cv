import "../assets/css/ProjectCard.css";
import projectsData from "../json/projectsData.json";
const ProjectCard = () => {
  return projectsData.map((project) => (
    <div
      className="project-card clima"
      data-aos="flip-up"
      data-aos-delay="100"
      key={project.id}
    >
      <p className="title">
        {project.name}{" "}
        <i
          className="bx bxs-badge-check"
          style={{ fontSize: "1rem", color: "green" }}
        ></i>
      </p>
      <small className="subtitle">Frontend ▪ React.js</small>
      <div href="#project-1" className="img-item">
        <a href="https://clima-ds.netlify.app/" target="_blank">
          <img src={project.image} alt="" />
        </a>
      </div>
      <p className="description">{project.description}</p>
      <div className="a-btns">
        <section className="icons">
          <a href={project.github} target="_blank" title="repositorio">
            <i className="bx bxl-github trans-scale"></i>
          </a>
          {/* <a href="" title="mas información">
            <i className="bx bxs-info-circle trans-scale"></i>
          </a> */}
        </section>
        <a href={project.netlify} target="_blank" className="a-btn">
          <i className="bx bx-link-external trans-scale">_</i>Ver proyecto
        </a>
      </div>
    </div>
  ));
};
export default ProjectCard;
