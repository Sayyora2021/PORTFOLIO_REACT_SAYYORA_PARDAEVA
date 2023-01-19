import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="error">
      <div className="notFound">
        <h2>Désolé, cette page n'existe pas</h2>
        <Link to="/" className="btn">
          <i className="fas fa-home"></i>
          <span>Accueil</span>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
