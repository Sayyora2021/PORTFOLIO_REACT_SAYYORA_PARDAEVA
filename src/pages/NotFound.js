import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="error">
      <div className="notFound">
        <h3>Désolé, cette page n'existe pas</h3>
        <Link to="/">
          <i className="fas fa-home"></i>
          <span>Accueil</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
