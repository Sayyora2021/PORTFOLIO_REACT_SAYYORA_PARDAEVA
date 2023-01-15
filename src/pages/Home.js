import React from "react";
import photo from "../assets/img/myphoto.webp";
import cv from "../assets/img/CV-développeuse web débutante.webp";
import Competences from "./Competence";
import Portfolio from "../components/Competence/Portfolio";

const Home = () => {
  return (
    <main>
      <section className="home" id="accueil">
        <div className="imgRight">
          <img src={photo} alt=" profil" className="image" />
        </div>
        <article className="about">
          <h1>Sayyora Pardaeva</h1>
          <h2 className="profession">Développeuse web débutante</h2>
          <p>
            Récemment diplomée en développement web et dotée d’une solide base
            théroique, pratique, je suis à la recherche d’une alternance en web
            développement à Lyon et alentours, pour évoluer mes connaissances en
            informatique.
          </p>
        </article>
        <div className="line"></div>
        <div className="cv">
          <a href={cv} className="btn" download="">
            <span> Télécharger le CV</span>
            <i className="bx bx-download"></i>
          </a>
        </div>
      </section>
      <Competences />
      <Portfolio />
    </main>
  );
};

export default Home;
