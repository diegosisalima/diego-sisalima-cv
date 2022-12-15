import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/InfoSummary.css";
import cvDiego from "../assets/static/cv-diego.pdf";

const InfoSummary = () => {
  return (
    <section className="info">
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
  );
};

export default InfoSummary;
