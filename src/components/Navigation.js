import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header className="navigation">
      <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
        <i className="fas fa-home"></i>
        <span>Accueil</span>
      </NavLink>
      <a className="navigate" href="#competence">
        Compétnces
      </a>
      <NavLink
        to="/competence"
        className={(nav) => (nav.isActive ? "nav-active" : "")}
      >
        <i className="fas fa-mountain"></i>

        <span>Compétences</span>
      </NavLink>
      <NavLink
        to="/portfolio"
        className={(nav) => (nav.isActive ? "nav-active" : "")}
      >
        <i className="fas fa-suitcase"></i>

        <span>Portfolio</span>
      </NavLink>
      <NavLink
        to="/contact"
        className={(nav) => (nav.isActive ? "nav-active" : "")}
      >
        <i className="fas fa-address-card"></i>

        <span>Contact</span>
      </NavLink>
    </header>
    // <section id="compétences"></section>
  );
};

export default Navigation;
