import React, { useState } from "react";
import Hobbies from "../Competence/Hobbies";
import project from "../../project.json";

const Portfolio = () => {
  const [card] = useState([]);
  <div>test [card]</div>;
  return (
    <section className="portfolio" id="portfolio">
      <h2>PORTFOLIO</h2>
      {project.map((projet, index) => (
        <div key={index} className="">
          <img src={projet.cover} alt="projets" />
        </div>
      ))}
      <Hobbies />
    </section>
  );
};

export default Portfolio;
