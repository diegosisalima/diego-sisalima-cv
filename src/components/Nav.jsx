import { NavLink, Link } from "react-router-dom";
import "./css/nav.css";
import { useState } from "react";

const Nav = () => {
  const styleNavActive = {
    color: "chocolate",
  };
  const [isNavShow, setIsNavShow] = useState(false);
  const handleNav = () => {
    setIsNavShow(!isNavShow);
  };
  return (
    <div className={`nav ${isNavShow && "nav-bg"}`}>
      <Link to="/" className="nav__a">
        <h2 className="nav__h2">Diego Sisalima</h2>
      </Link>
      <ul className={`nav__ul ${isNavShow && "nav__ul-show nav-bg"} `}>
        <li>
          <Link to="/about" className="nav__a" onClick={handleNav}>
            Acerca de
          </Link>
        </li>
        <li>
          <Link to="/projects" className="nav__a" onClick={handleNav}>
            Proyectos
          </Link>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="nav__a"
            onClick={handleNav}
            style={({ isActive }) => (isActive ? styleNavActive : undefined)}
          >
            Contacto
          </NavLink>
        </li>
      </ul>
      <i className="bx bx-menu" onClick={handleNav}></i>
    </div>
  );
};
export default Nav;
