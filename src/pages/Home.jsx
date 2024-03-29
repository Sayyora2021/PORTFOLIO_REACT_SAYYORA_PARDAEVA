import React, { lazy, Suspense } from "react";
import photo from "../assets/img/maphoto.webp";
import cv from "../assets/img/Sayyora-Pardaeva.webp";

const Competences = lazy(() => import("../components/Competence/Competence"));
const Portfolio = lazy(() => import("../components/Competence/Portfolio"));
const Contact = lazy(() => import("../components/Competence/Contact"));

const Home = () => {
  return (
    <main>
      <section className="home" id="accueil">
        <div className="imgRight">
          <img src={photo} alt=" profil" className="image" />
        </div>
        <article className="about">
          <h1>Sayyora Pardaeva</h1>
          <h2 className="profession">Développeuse .NET Junior</h2>
          <p>
          Passionnée par la programmation, diplômée en développement web et certifiée 
          en formation .NET, je suis à la recherche d'une opportunité dans le domaine 
          du développement .NET ou du développement web à Lyon et ses alentours. 
          J'ai une appétence pour le backend. 
          Mon objectif est d'approfondir mes connaissances en informatique et 
          de contribuer de manière significative à des projets stimulants.
          </p>
        </article>
        <div className="line"></div>
        <div className="cv">
          <a
            href={cv}
            className="btn"
            download=""
            aria-label="Read more about CV"
          >
            <span> Télécharger le CV</span>
            <i className="bx bx-download"></i>
          </a>
        </div>
      </section>
      <Suspense fallback={<div>Loading</div>}>
        <Competences />
      </Suspense>
      <Suspense fallback={<div>Loading</div>}>
        <Portfolio />
      </Suspense>
      <Suspense fallback={<div>Loading</div>}>
        <Contact />
      </Suspense>
    </main>
  );
};

export default Home;
