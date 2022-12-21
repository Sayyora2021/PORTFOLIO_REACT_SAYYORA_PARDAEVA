import React from "react";
import photo from "../assets/img/photo.jpg";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header className="fond">
      <div className="id">
        <div className="idContent">
          <img src={photo} alt=" profil" className="image" />
          <h1>Sayyora Pardaeva</h1>
          <h2>
            Récemment diplomée en développement web et dotée d’une solide base
            théroique, pratique, je suis à la recherche d’une alternance en
            développement web pour évoluer mes connaissances en informatique.
          </h2>
        </div>
      </div>

      <div className="navigation">
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <i className="fas fa-home"></i>
          <span>Accueil</span>
        </NavLink>
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
      </div>
    </header>
  );
};

export default Navigation;
