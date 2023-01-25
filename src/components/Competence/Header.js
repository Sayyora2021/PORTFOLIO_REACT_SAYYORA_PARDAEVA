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
          <a
            href="#accueil"
            className="navlink"
            aria-label="read more about homepage"
          >
            <i className="fas fa-home"></i>Accueil
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#competence"
            className="navlink"
            aria-label="read more about competences"
          >
            <i className="fas fa-mountain"></i>Compétences
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            className="navlink"
            aria-label="read more about portfolio"
          >
            <i className="fas fa-suitcase"></i>Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            className="navlink"
            aria-label="read more about contact"
          >
            <i className="fas fa-address-card"></i>Contact
          </a>
        </li>
      </ul>
      <button
        id="nav-btn"
        className="navbar-burger"
        onClick={handleClickLinks}
        aria-label="text"
      >
        <span className="burger-bar"></span>
      </button>
    </header>
  );
};

export default Header;
