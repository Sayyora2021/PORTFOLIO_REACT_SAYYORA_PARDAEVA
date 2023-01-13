import React, { useState } from "react";
import Hobbies from "../Competence/Hobbies";
import projects from "../../projects.json";

const Portfolio = () => {
  const [card] = useState([]);
  <div>test [card]</div>;
  console.log(projects);

  return (
    <section className="portfolio" id="portfolio">
      <h2>PORTFOLIO</h2>

      {projects.map((project, index) => (
        <div key={index} className="project" id="p1">
          <img src={project.cover} alt="projets" />
        </div>
      ))}
      {projects.map((item, index) => (
        <div key={item} className="info"></div>
      ))}
      <Hobbies />
    </section>
  );
};

export default Portfolio;
