import React from "react";

import Languages from "../components/Competence/Languages";
import Skills from "../components/Competence/Skills";
import Hobbies from "../components/Competence/Hobbies";

const Competence = () => {
  return (
    <section className="competenceContent">
      <Languages />
      <Skills />
      <Hobbies />
    </section>
  );
};

export default Competence;
