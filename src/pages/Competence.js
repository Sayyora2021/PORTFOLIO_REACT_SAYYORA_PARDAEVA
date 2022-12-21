import React from "react";
import Navigation from "../components/Navigation";
import Languages from "../components/Competence/Languages";
import Experience from "../components/Competence/Experience";
import Hobbies from "../components/Competence/Hobbies";

const Competence = () => {
  return (
    <div className="competence">
      <Navigation />
      <div className="comptenceContent">
        <Languages />
        <Experience />
        <Hobbies />
        Skills c'est ici
      </div>
    </div>
  );
};

export default Competence;
