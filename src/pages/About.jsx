import React from "react";
import "./css/about.css";

const About = () => {
  return (
    <div className="about mx-wd-container page-height">
      <h2 className="about__title h2-page">
        <i class="bx bxs-meh-blank bx-tada"></i>
        <br /> Acerca de mi
      </h2>
      <section className="about__main">
        <p className="about__description">
          Me gusta estar en constante aprendizaje para fortalecer mis
          habilidades y aptitudes; amante del minimalismo, buenas prácticas y
          del código bien organizado.
        </p>
        <progress />
        <fieldset className="about__technologies">
          <legend className="about__legend">Tecnologías</legend>
          <ul className="flex-galery">
            <li>
              <i className="bx bxl-css3" style={{ color: "#057dcd" }}></i>
              <p>CSS3</p>
            </li>
            <li>
              <i className="bx bxl-html5" style={{ color: "#c7522a" }}></i>
              <p>HTML5</p>
            </li>
            <li>
              <i className="bx bxl-javascript" style={{ color: "#ffa600" }}></i>
              <p>JavaScript</p>
            </li>
            <li>
              <i className="bx bxl-git" style={{ color: "#e74c3c" }}></i>
              <p>Git</p>
            </li>
            <li>
              <i className="bx bxl-react" style={{ color: "#1982c4" }}></i>
              <p>React</p>
            </li>
            <li>
              <i className="bx bxl-redux" style={{ color: "#8e44ad" }}></i>
              <p>Redux</p>
            </li>
          </ul>
        </fieldset>
      </section>
    </div>
  );
};

export default About;
