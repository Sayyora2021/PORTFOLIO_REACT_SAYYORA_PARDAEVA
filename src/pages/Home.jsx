import React, { lazy, Suspense } from "react";
import photo from "../assets/img/maphoto.webp";
import cv from "../assets/img/CV-Pardaeva Sayyora-Développeuse .NET.pdf";

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
          Développeuse .NET avec 2 ans d'éxperience en C#, APIs et tests unitaires, 
          et des connaissances en frontend (Angular/React). Je recherche un poste à Lyon 
          pour allier ma passion du backend à des projets techniques ambitieux. 
          Parlons-en !
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
