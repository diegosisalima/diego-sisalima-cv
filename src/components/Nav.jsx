import { NavLink, Link } from "react-router-dom";
import react from "../assets/react.svg";
import "../assets/css/Nav.css";
// import SidebarCart from "./SidebarCart";
import { useState } from "react";

const Nav = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleView = () => setMenuActive(!menuActive);

  const styleNavActive = {
    color: "chocolate",
  };

  return (
    <header className="header filter">
      <nav className="nav mx-wd-container">
        <li className="logo">
          <NavLink to="/">
            <i className="bx bxs-home"></i>
          </NavLink>
        </li>
        <ul className={`${menuActive ? "menu active" : "menu"}`}>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? styleNavActive : undefined)}
              onClick={toggleView}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => (isActive ? styleNavActive : undefined)}
              onClick={toggleView}
            >
              Acerca de mi
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              style={({ isActive }) => (isActive ? styleNavActive : undefined)}
              onClick={toggleView}
            >
              Mi portafolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              style={({ isActive }) => (isActive ? styleNavActive : undefined)}
              onClick={toggleView}
            >
              Contacto
            </NavLink>
          </li>
        </ul>
        <div className="icons">
          <li>
            <a
              href="https://www.linkedin.com/in/diego-sisalima-b2a4458a/"
              target="_blank"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
          </li>
          <li>
            <Link to="/contact">
              <i className="bx bxs-envelope"></i>
            </Link>
          </li>
          <Link className="btn-menu active" onClick={toggleView}>
            <i className="bx bx-menu"></i>
          </Link>
        </div>
      </nav>
    </header>
  );
};
export default Nav;
