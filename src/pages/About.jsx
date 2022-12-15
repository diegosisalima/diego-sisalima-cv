import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/About.css";
import imgDiego from "../assets/img/diego.webp";
import cvDiego from "../assets/static/cv-diego.pdf";

const About = () => {
  return (
    <div className="about mx-wd-container page-height">
      <h2 className="about-title">
        <i class="bx bxs-meh-blank bx-tada" style={{ color: "chocolate" }}></i>
        <br /> Acerca de mi
      </h2>
      <div className="info-personal">
        <i className="bx bxs-map"> Cuenca, Ecuador</i>
        <i class="bx bxs-cake"> 1995-12-09</i>
        <i class="bx bxs-videos"> HBO max</i>
      </div>

      <div className="profiles">
        <section className="profile" data-aos="fade-right" data-aos-delay="100">
          <div className="box-img">
            <img src={imgDiego} alt="Diego Sisalima" className="img-diego" />
          </div>
          <p className="name">Diego Sisalima</p>
          <p className="service gradient-text ">Desarrollador Frontend</p>
          <ul className="icons">
            <a
              href="https://www.linkedin.com/in/diego-sisalima-b2a4458a/"
              target="_blank"
            >
              <i className="bx bxl-linkedin trans-scale"></i>
            </a>
            <a href="https://github.com/diegoSisalima" target="_blank">
              <i className="bx bxl-github trans-scale"></i>
            </a>
          </ul>
          <div className="btns">
            <Link to="/contact" className="a-btn">
              <i className="bx bxs-envelope"></i> Contactar
            </Link>
            <a
              href="https://drive.google.com/file/d/1mqHetKah_iX2NorzOkCIp3V1MuG1JIb_/view?usp=share_link"
              className="a-btn"
              target="_blank"
            >
              <i class="bx bxs-file"></i>
              Ver CV
            </a>
            <a href={cvDiego} download="cv-diego-sisalima.pdf">
              <i className="bx bxs-download"> </i>
            </a>
          </div>
        </section>

        <section
          className="description"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <fieldset className="section acerca">
            <legend>Sobre mí</legend>
            <p className="description">
              <code>
                Me gusta estar en constante aprendizaje para fortalecer mis
                habilidades y aptitudes; amante del minimalismo, buenas
                prácticas y del código bien organizado.
              </code>
            </p>
            {/* <progress value="90" min="0" max="100"></progress> */}
          </fieldset>
          <fieldset className="technologies">
            <legend>Techologies</legend>
            <div className="basic">
              <i className="bx bxl-css3" style={{ color: "#057dcd" }}></i> CSS3
              <i className="bx bxl-html5" style={{ color: "#c7522a" }}></i>HTML5
              <i className="bx bxl-javascript" style={{ color: "#ffa600" }}></i>
              JavaScript
            </div>
            <br />
            <div className="complementaris">
              <i className="bx bxl-git" style={{ color: "#e74c3c" }}></i>Git
              <i className="bx bxl-react" style={{ color: "#1982c4" }}></i>React
              <i className="bx bxl-redux" style={{ color: "#8e44ad" }}></i>Redux
            </div>
          </fieldset>
        </section>
      </div>
    </div>
  );
};

export default About;
