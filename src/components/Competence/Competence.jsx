import React, { lazy, Suspense } from "react";
import mongodb from "../../assets/img/mongodb.webp";
import figma from "../../assets/img/figma_small.webp";
import csharp from "../../assets/img/c.webp";
import sql from "../../assets/img/sql.webp";
import mysql from "../../assets/img/mysql.webp";
import dbeaver from "../../assets/img/dbeaver.webp";
import dotnet from "../../assets/img/dotnet.webp";
import aspnet from "../../assets/img/aspnet.webp";
import entity from "../../assets/img/entity.webp";
import vscode from "../../assets/img/visual.webp";
import vs from "../../assets/img/vs.webp";
// import Scroll from "./Scroll";
const Scroll = lazy(() => import("./Scroll"));

const Competence = () => {
  return (
    <section className="competence" id="competence">
      <Suspense fallback={<div>Loading</div>}>
        <Scroll />
      </Suspense>

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
          <div className="skillsContent">
          <div className="column">
          <div className="skillsBox ">
              <img src={dotnet} alt="dotnet" className="logo" />
              <p>DotNet 6</p>
            </div> 
          <div className="skillsBox ">
              <img src={csharp} alt="csharp" className="logo" />
              <p>C#</p>
            </div>
             <div className="skillsBox ">
              <img src={aspnet} alt="aspnet" className="logo" />
              <p>ASP.NET core</p>
            </div> 
            <div className="skillsBox ">
              <img src={entity} alt="entity" className="logo" />
              <p>Entity Framework</p>
            </div> 
            <div className="skillsBox">
              <i className="fab fa-node-js green"></i>
              <p>NodeJS</p>
            </div>
           
            </div>
             {/* <!-- Deuxième colonne --> */}
            <div className="column">
                  
            <div className="skillsBox ">
              <img src={sql} alt="sql" className="logo-vertical" />
              <p>SQL</p>
            </div>
            <div className="skillsBox ">
              <img src={mysql} alt="mysql" className="logo-vertical" />
              <p>MySQL</p>
            </div>
            <div className="skillsBox ">
              <img src={dbeaver} alt="dbeaver" className="logo-vertical" />
              <p>Dbeaver</p>
            </div>
            <div className="skillsBox">
              <img src={mongodb} alt=" mongoDB" className="logo" />
              <p>MongoDB</p>
            </div>
            
            </div>
        
        </div>
        </div>
         {/* <!-- Environnement technique --> */}
        <div className="competenceBox">
        <h3>Environnement technique</h3>
          <div className="skillsContent">
          <div className="column">
          <div className="skillsBox ">
              <img src={vscode} alt="vscode" className="logo" />
              <p>Visual Studio code</p>
            </div>
            <div className="skillsBox ">
              <img src={vs} alt="visual studio" className="logo" />
              <p>Visual Studio</p>
            </div>
            <div className="skillsBox ">
              <img src={figma} alt="figma" className="logo" />
              <p>Figma</p>
            </div>
          </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Competence;
