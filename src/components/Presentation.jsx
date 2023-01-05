import "./css/presentation.css";
const Presentation = () => {
  return (
    <div className="presentation">
      <div className="drop-shadow">
        <img className="presentation__img" src={"diego.webp"} alt="" />
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
            href="https://www.linkedin.com/in/diego-sisalima-b2a4458a/"
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
          <a className="presentation__a" href="#contact" title="Contact">
            <i class="bx bxs-envelope"></i>
          </a>
        </li>
        <li className="presentation__icons-li">
          <a
            className="presentation__a"
            href="https://drive.google.com/file/d/1mqHetKah_iX2NorzOkCIp3V1MuG1JIb_/view?usp=share_link"
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
