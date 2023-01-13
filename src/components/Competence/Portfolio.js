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
        <div key={index} className="">
          <img src={project.cover} alt="projets" />
        </div>
      ))}
      <Hobbies />
    </section>
  );
};

export default Portfolio;
