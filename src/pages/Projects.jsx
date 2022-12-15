import React from "react";
import ProjectCard from "../components/ProjectCard";
import "../assets/css/Projects.css";

const Projects = () => {
  return (
    <div className="projects mx-wd-container page-height">
      <h1 className="projects-title">
        <i class="bx bx-code-alt bx-tada"></i> <br /> Projects
      </h1>
      <div className="cards-container">
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
