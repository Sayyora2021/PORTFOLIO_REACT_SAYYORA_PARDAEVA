import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-text">
        <span>Sayyora Pardaeva</span>

        <div className="social">
          <a
            href="https://www.linkedin.com/in/sayyora-pardaeva/"
            aria-label="Read more about linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          <a
            href="https://github.com/Sayyora2021"
            aria-label="Read more about github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>

          <a
            href="mailto:sayyorapardaeva@gmail.com"
            aria-label="Read more about mail"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>

        <p>2022 © Sayyora Pardaeva. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
