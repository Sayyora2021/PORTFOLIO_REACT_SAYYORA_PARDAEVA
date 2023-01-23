import React, { useState } from "react";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleClickLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <header className={`navbar ${showLinks ? "show-links" : "hid"}`}>
      <div className="navbar-hidden"></div>
      <ul className="nav-links " onClick={handleClickLinks}>
        <li className="nav-item">
          <a href="#accueil" className="navlink">
            <i className="fas fa-home"></i>Accueil
          </a>
        </li>
        <li className="nav-item">
          <a href="#competence" className="navlink">
            <i className="fas fa-mountain"></i>Compétences
          </a>
        </li>
        <li className="nav-item">
          <a href="#portfolio" className="navlink">
            <i className="fas fa-suitcase"></i>Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="navlink">
            <i className="fas fa-address-card"></i>Contact
          </a>
        </li>
      </ul>
      <button className="navbar-burger" onClick={handleClickLinks}>
        <span className="burger-bar"></span>
      </button>
    </header>
  );
};

export default Header;
