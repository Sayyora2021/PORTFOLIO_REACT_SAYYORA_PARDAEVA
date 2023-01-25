import React, { useState } from "react";
import projects from "../../projects.json";

const Portfolio = () => {
  const [card] = useState([]);
  <div>test {card}</div>;
  console.log(projects);

  return (
    <section id="portfolio">
      <h2>PROJETS</h2>
      <div className="portfolio">
        {projects.map((project) => (
          <div
            key={project.id}
            className={
              project.id === "0" || project.id === "2" || project.id === "4"
                ? "right-style"
                : project.id === "1" || project.id === "3" || project.id === "5"
                ? "left-style"
                : ""
            }
          >
            <div className="project">
              <img src={project.cover} alt={project.alt} />
              <div className="info">
                {project.title}
                <p>{project.description}</p>
                {project.site && (
                  <a href={project.site} aria-label="read more about site">
                    {" "}
                    Site du projet
                  </a>
                )}
                <a href={project.git} aria-label="read more about github">
                  {" "}
                  Code du projet
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
