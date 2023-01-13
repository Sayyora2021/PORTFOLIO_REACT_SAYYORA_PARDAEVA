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
          <img src={project.cover} alt={project.alt} />
          <div className="info">
            {project.title}
            <p>{project.description}</p>
            <a href={project.site}> Site du projet</a>
            <a herf={project.git}> Code du projet</a>
          </div>
        </div>
      ))}

      <Hobbies />
    </section>
  );
};

export default Portfolio;
