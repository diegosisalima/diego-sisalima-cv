import "./css/presentation.css";
import { Link } from "react-router-dom";
const Presentation = () => {
  return (
    <div className="presentation">
      <div className="drop-shadow">
        {/* <img className="presentation__img" src={"diego.webp"} alt="" /> */}
        <i className="bx bxs-hand bx-tada"></i>
      </div>
      <div className="presentation__name drop-shadow">
        <h1 className="presentation__h1-border ">Diego Sisalima</h1>
        <h1 className="presentation__h1-wave">Diego Sisalima</h1>
      </div>

      <p className="presentation__p txt-shadow">
        <span>📍 Cuenca, Ecuador</span>
        <span>🎂 1995-12-9</span>
      </p>
      <h2 className="gradient-text">Desarrollador Frontend</h2>
      <ul className="presentation__icons-container">
        <li className="presentation__icons-li">
          <a
            className="presentation__a"
            href="https://www.linkedin.com/in/diego-sisalima/"
            rel="noreferrer"
            target="_blank"
            title="linkedin"
          >
            <i className="bx bxl-linkedin trans-scale"></i>
          </a>
        </li>
        <li className="presentation__icons-li ">
          <a
            className="presentation__a"
            href="https://github.com/diegoSisalima"
            target="_blank"
            rel="noreferrer"
            title="github"
          >
            <i className="bx bxl-github trans-scale"></i>
          </a>
        </li>
        <li className="presentation__icons-li">
          <Link className="presentation__a" to="/contact" title="Contact">
            <i class="bx bxs-envelope"></i>
          </Link>
        </li>
        <li className="presentation__icons-li">
          <a
            className="presentation__a"
            href="https://docs.google.com/document/d/1y2Hr3rHf6fhXUGewHTB0EQ_JiKyiVMeU/edit?usp=sharing&ouid=103605140254930368268&rtpof=true&sd=true"
            target="_blank"
            rel="noreferrer"
            title="CV"
          >
            <i class="bx bxs-file"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Presentation;
