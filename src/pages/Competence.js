import React from "react";
import mongodb from "../assets/img/mongodb.webp";
import figma from "../assets/img/figma_small.svg";
import Scroll from "../components/Competence/Scroll";
// import Languages from "../components/Competence/Languages";
// import Portfolio from "../components/Competence/Portfolio";

const Competence = () => {
  return (
    <section className="competence" id="competence">
      <Scroll />
      <h2>COMPÉTENCES</h2>
      <div className="skills">
        {/* <!-- Frontend --> */}
        <div className="competenceBox">
          <h3>Frontend</h3>
          <div className="skillsContent">
            <div className="column">
              <div className="skillsBox">
                <i className="fab fa-html5 red"></i>
                <p>HTML5</p>
              </div>
              <div className="skillsBox">
                <i className="fab fa-css3 blue"></i>
                <p>CSS3</p>
              </div>
              <div className="skillsBox">
                <i className="fab fa-sass violet"></i>
                <p>Sass</p>
              </div>
              <div className="skillsBox">
                <i className="fab fa-js yellow"></i>
                <p>JavaScript</p>
              </div>
            </div>
            <div className="column">
              <div className="skillsBox">
                <i className="fab fa-react react"></i>
                <p>React</p>
              </div>
              <div className="skillsBox">
                <i className="fab fa-github"></i>
                <p>Git</p>
              </div>
              <div className="skillsBox">
                <i className="fas fa-gavel"></i>
                <p>SEO</p>
              </div>
              <div className="skillsBox">
                <i className="fas fa-lock"></i>
                <p>Cybersécurité</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Backend --> */}
        <div className="competenceBox">
          <h3>Backend</h3>
          <div className="column">
            <div className="skillsBox">
              <i className="fab fa-node-js green"></i>
              <p>NodeJS</p>
            </div>
            <div class="skillsBox leave">
              <img src={mongodb} alt="photo mongoDB" />
              <p>MongoDB</p>
              <div className="skillsBox">
                <img src={figma} alt="figma" />
                <p>Figma</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Languages /> */}
    </section>
  );
};

export default Competence;
