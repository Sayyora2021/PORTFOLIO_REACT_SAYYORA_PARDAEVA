import React, { lazy, Suspense } from "react";
import photo from "../assets/img/myphoto.webp";
import cv from "../assets/img/Sayyora-Pardaeva-CV-web-développeur-junior.webp";

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
          <h2 className="profession">Développeuse web débutante</h2>
          <p>
            Récemment diplômée en développement web et dotée d’une solide base
            théorique, pratique, je suis à la recherche d’un CDI où alternance
            en web développement à Lyon et alentours, pour évoluer mes
            connaissances en informatique.
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
