import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <h1>Sayyora Pardaeva</h1>
        <h2 className="textCenter">Développeuse web débutante</h2>
        <div className="cv">
          <a href="../assets/img/Sayyora Pardaeva.pdf" target="blank">
            Télécharger CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
