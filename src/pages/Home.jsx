import React from "react";
import "../assets/css/Home.css";
import imgDiego from "../assets/img/diego.webp";
import InfoSummary from "../components/InfoSummary.jsx";
import { About, Projects, Contact } from "./Index.jsx";

const Home = () => {
  return (
    <>
      <div className="home mx-wd-container page-height">
        <section className="hi">
          <div className="name">
            <i className="bx bxs-hand bx-tada"></i>
            <p className="border">Bienvenido</p>
            <p className="wave">Bienvenido</p>
          </div>
        </section>
        <section className="profile">
          <div className="box-img">
            <img src={imgDiego} alt="Diego Sisalima" className="img-diego" />
          </div>
        </section>
        <InfoSummary />
      </div>
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
