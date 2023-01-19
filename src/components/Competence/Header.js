import React, { useState } from "react";

const Header = () => {
  const [activeLink, setActiveLink] = useState([]);
  const handleClick = (index) => {
    setActiveLink((previouseLink) => {
      let newActiveLink = [...previouseLink];
      newActiveLink[index] = !newActiveLink[index];
      return newActiveLink;
    });
  };

  return (
    <header>
      <ul className="links ">
        <li>
          <a
            href="#accueil"
            className={activeLink[0] ? "header-active" : ""}
            onClick={() => handleClick(0)}
          >
            <i className="fas fa-home"></i>Accueil
          </a>
        </li>
        <li>
          <a
            href="#competence"
            className={activeLink[1] ? "header-active" : ""}
            onClick={() => handleClick(1)}
          >
            <i className="fas fa-mountain"></i>Compétences
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className={activeLink[2] ? "header-active" : ""}
            onClick={() => handleClick(2)}
          >
            <i className="fas fa-suitcase"></i>Portfolio
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activeLink[3] ? "header-active" : ""}
            onClick={() => handleClick(3)}
          >
            <i className="fas fa-address-card"></i>Contact
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
