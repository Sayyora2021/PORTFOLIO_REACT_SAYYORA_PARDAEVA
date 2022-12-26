import React from "react";
import photo from "../assets/img/maphoto.jpg";
import Competence from "./Competence";

const Home = () => {
  return (
    <main className="home">
      <article className="about">
        <div className="info">
          <h1>Sayyora Pardaeva</h1>
          <h2>
            Récemment diplomée en développement web et dotée d’une solide base
            théroique, pratique, je suis à la recherche d’une alternance en web
            développement à Lyon et alentours, pour évoluer mes connaissances en
            informatique.
          </h2>
        </div>
        <div className="imgRight">
          <img src={photo} alt=" profil" className="image" />
        </div>
      </article>
      <section className="homeContent">
        <h2 className="textCenter">Développeuse web débutante</h2>
        <div className="cv">
          <a href="../assets/img/Sayyora Pardaeva.png" target="blank">
            Télécharger CV
          </a>
        </div>
      </section>
      <section>
        <Competence />
      </section>
    </main>
  );
};

export default Home;
