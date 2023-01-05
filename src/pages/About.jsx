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
        <p className="about__summary">
          Autodidacta, siempre en constante aprendizaje para fortalecer mis
          habilidades y aptitudes, amante del minimalismo, buenas prácticas y
          del código bien organizado.
        </p>
        <progress />
        <div className="about__description">
          <p>
            Soy un desarrollador ecuatoriano, mi principal área de
            especialización es el <b>FRONT-END</b> con{" "}
            <b>
              <a
                href="https://es.reactjs.org/docs/getting-started.html"
                target={"_blank"}
              >
                React
              </a>
            </b>{" "}
            y{" "}
            <b>
              <a href="https://www.javascript.com/" target={"_blank"}>
                JavaScript
              </a>
            </b>
            , pero abierto al aprendizaje de nuevos lenguajes si la ocasión lo
            amerita,
          </p>
          <p>
            He realizado varios <a href="/#/projects">proyectos frontend</a> con{" "}
            <b>
              <a
                href="https://es.reactjs.org/docs/getting-started.html"
                target={"_blank"}
              >
                React
              </a>
            </b>{" "}
            desde cero, sin ningún tipo de framework CSS y utilizando pura
            lógica{" "}
            <b>
              <a href="https://www.javascript.com/" target={"_blank"}>
                JavaScript
              </a>
            </b>
            . Actualmente estoy empezando a aprender "backend" con{" "}
            <a href="https://expressjs.com/" target={"_blank"}>
              Express.js
            </a>{" "}
            y{" "}
            <a href="https://www.postgresql.org/" target={"_blank"}>
              PostgreSQL
            </a>
          </p>
        </div>

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
