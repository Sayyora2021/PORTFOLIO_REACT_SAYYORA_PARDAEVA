import React from "react";

import Languages from "../components/Competence/Languages";
import Skills from "../components/Competence/Skills";
import Hobbies from "../components/Competence/Hobbies";

const Competence = () => {
  return (
    <div className="competence">
      <div className="competenceContent">
        <Languages />
        <Skills />
        <Hobbies />
      </div>
    </div>
  );
};

export default Competence;
