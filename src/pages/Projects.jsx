import React from "react";
import ProjectCard from "../components/ProjectCard";
import "./css/projects.css";

const Projects = () => {
  window.scrollTo(100, 100);
  return (
    <div className="projects mx-wd-container page-height">
      <h2 className="h2-page">
        <i class="bx bxs-cog bx-spin"></i> <br /> Projects
      </h2>
      <div className="flex-galery">
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
