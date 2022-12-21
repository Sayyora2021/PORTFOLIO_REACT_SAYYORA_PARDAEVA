import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <h1>Réseaux sociaux et contacts</h1>
      <ul>
        <li>
          <i className="fab fa-linkedin"></i>
          <a href="https://www.linkedin.com/in/sayyora-pardaeva/">
            {" "}
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <i className="fab fa-github"></i>
          <a href="https://github.com/Sayyora2021">
            <span>Github</span>
          </a>
        </li>
        <li>
          <i className="fab fa-twitter"></i>
          <a href="https://twitter.com/PardaevaSayyora">
            <span>Twitter</span>
          </a>
        </li>
        <li>
          <div>
            <i className="fas fa-paper-plane button"></i>
            <p className="name">sayyorapardaeva@gmail.com</p>
          </div>
        </li>
        <li>
          <i className="fas fa-phone"></i>
          <h3>07 69 78 47 33</h3>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
