import React from "react";

const Progress = (skill) => {
  console.log(skill);
  return (
    <div className={skill.className}>
      <h3>{skill.title}</h3>

      <div className="years">
        <span>Année d'experience</span>
        <span> 1 an</span>
      </div>
      {skill.frontend.map((item, index) => {
        return (
          <div key={index} className="color">
            <li>{item.value}</li>
            <i className={`fas fa-${item.icon} iconsize`}></i>
            <i className={`fab fa-${item.icon} iconsize`}></i>
          </div>
        );
      })}
    </div>
  );
};

export default Progress;
