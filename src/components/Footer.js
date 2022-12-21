import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <h1>Contactez-moi</h1>
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
          <div className="button">
            <i className="fas fa-paper-plane"></i>
            <p className="name">sayyorapardaeva@gmail.com</p>
          </div>
        </li>
        <li>
          <div className="button">
            <i className="fas fa-phone"></i>
            <p className="name">07 69 78 47 33</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
