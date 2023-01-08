import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    // <header className="navigation">
    //   <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
    //     <i className="fas fa-home"></i>
    //     <span>Accueil</span>
    //   </NavLink>

    //   <NavLink
    //     to="/competence"
    //     className={(nav) => (nav.isActive ? "nav-active" : "")}
    //   >
    //     <i className="fas fa-mountain"></i>

    //     <span>Compétences</span>
    //   </NavLink>
    //   <NavLink
    //     to="/portfolio"
    //     className={(nav) => (nav.isActive ? "nav-active" : "")}
    //   >
    //     <i className="fas fa-suitcase"></i>

    //     <span>Portfolio</span>
    //   </NavLink>
    //   <NavLink
    //     to="/contact"
    //     className={(nav) => (nav.isActive ? "nav-active" : "")}
    //   >
    //     <i className="fas fa-address-card"></i>

    //     <span>Contact</span>
    //   </NavLink>
    // </header>
    <header>
      <ul class="links">
        <li>
          {" "}
          <a href="#accueil">
            {" "}
            <i class="fas fa-home"></i>Accueil
          </a>
        </li>
        <li>
          <a href="#competence">
            <i class="fas fa-mountain"></i>Compétences
          </a>
        </li>
        <li>
          <a href="#portfolio">
            {" "}
            <i class="fas fa-suitcase"></i>Portfolio
          </a>
        </li>
        <li>
          {" "}
          <a href="#contact">
            <i class="fas fa-address-card"></i>Contact
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Navigation;
