import React from "react";

const Header = () => {
  return (
    <header>
      <ul className="links">
        <li>
          <a href="#accueil" className="isActive?" onclick="active">
            <i className="fas fa-home"></i>Accueil
          </a>
        </li>
        <li>
          <a href="#competence" onclick="changeColor(this)">
            <i className="fas fa-mountain"></i>Compétences
          </a>
        </li>
        <li>
          <a href="#portfolio" onclick="changeColor(this)">
            <i className="fas fa-suitcase"></i>Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" onclick="changeColor(this)">
            <i className="fas fa-address-card"></i>Contact
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
