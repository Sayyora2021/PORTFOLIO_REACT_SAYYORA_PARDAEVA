import React from "react";
import photo from "../assets/img/maphoto.jpg";
import cv from "../assets/img/Sayyora-Pardaeva-CV.png";
import Competences from "./Competence";

const Home = () => {
  return (
    <main className="home">
      <div className="imgRight">
        <img src={photo} alt=" profil" className="image" />
      </div>
      <article className="about">
        <h1>Sayyora Pardaeva</h1>
        <h2>Développeuse web débutante</h2>
        <p>
          Récemment diplomée en développement web et dotée d’une solide base
          théroique, pratique, je suis à la recherche d’une alternance en web
          développement à Lyon et alentours, pour évoluer mes connaissances en
          informatique.
        </p>
      </article>

      <div class="cv">
        <a href={cv} class="btn" download="">
          <span> Télécharger le CV</span>
          <i class="bx bx-download"></i>
        </a>
      </div>
      <section id="competences">
        <Competences />
      </section>
    </main>
  );
};

export default Home;
