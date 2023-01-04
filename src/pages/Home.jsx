import React from "react";
import "./css/home.css";
import Presentation from "../components/Presentation";
import { About, Projects, Contact } from "./Index.jsx";

const Home = () => {
  return (
    <>
      <div className="home page-height">
        <div className="hero-image-filter">
          <Presentation />
        </div>
      </div>
      <About />
      <div className="hero-image-filter">
        <Projects />
      </div>
      <Contact />
    </>
  );
};

export default Home;
