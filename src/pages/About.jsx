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
          Autodidacta, amante del minimalismo, buenas prácticas y del código
          bien organizado.
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
            , pero también he realizado varios proyectos backend con Node js.
          </p>
          <p>
            Abierto al aprendizaje de nuevos lenguajes, actualmente estoy
            aprendiendo{" "}
            <a href="https://nextjs.org/" target={"_blank"}>
              Next js
            </a>{" "}
            y{" "}
            <a href="https://www.typescriptlang.org/" target={"_blank"}>
              TypeScript
            </a>
          </p>
        </div>

        <fieldset className="about__technologies">
          <legend className="about__legend">Tecnologías</legend>
          <ul className="flex-galery">
            <li>
              <a
                target={"_blank"}
                href="https://es.reactjs.org/docs/getting-started.html"
                className="about__tecnologies-icon"
              >
                <i className="bx bxl-react" style={{ color: "#1982c4" }}></i>
                <p>React</p>
              </a>
            </li>
            <li>
              <a
                href="https://redux.js.org/"
                className="about__tecnologies-icon"
                target={"_blank"}
              >
                <i className="bx bxl-redux" style={{ color: "#8e44ad" }}></i>
                <p>Redux</p>
              </a>
            </li>
            <li>
              <a
                href="https://www.javascript.com/"
                target={"_blank"}
                className="about__tecnologies-icon"
              >
                <i
                  className="bx bxl-javascript"
                  style={{ color: "#ffa600" }}
                ></i>
                <p>JavaScript</p>
              </a>
            </li>
            <li>
              <a
                href="https://tailwindcss.com/"
                className="about__tecnologies-icon"
                target={"_blank"}
              >
                <i class="bx bxl-tailwind-css" style={{ color: "#38bdf8" }}></i>
                <p>Tailwindcss</p>
              </a>
            </li>
            <li>
              <a
                href="https://nodejs.org/en/about"
                target={"_blank"}
                className="about__tecnologies-icon"
              >
                <i class="bx bxl-nodejs" style={{ color: "#27ae60" }}></i>
                <p>Node js</p>
              </a>
            </li>
            <li>
              <a
                href="https://git-scm.com/"
                className="about__tecnologies-icon"
                target={"_blank"}
              >
                <i className="bx bxl-git" style={{ color: "#e74c3c" }}></i>
                <p>Git</p>
              </a>
            </li>
            <li>
              <a
                href="https://developer.mozilla.org/es/docs/Web/CSS"
                className="about__tecnologies-icon"
                target={"_blank"}
              >
                <i className="bx bxl-css3" style={{ color: "#057dcd" }}></i>
                <p>CSS3</p>
              </a>
            </li>
            <li>
              <a
                href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
                className="about__tecnologies-icon"
                target={"_blank"}
              >
                <i className="bx bxl-html5" style={{ color: "#c7522a" }}></i>
                <p>HTML5</p>
              </a>
            </li>
          </ul>
        </fieldset>
      </section>
    </div>
  );
};

export default About;
