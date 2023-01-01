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
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
