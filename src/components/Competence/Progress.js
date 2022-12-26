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
      {skill.languages.map((item) => {
        let xpYears = 1;
        let progress = (item.xp / xpYears) * 100 + "%";
        return (
          <div key={item.id} className="langaugesList">
            <li>{item.value}</li>
            <div className="progress" style={{ width: progress }}></div>
          </div>
        );
      })}
    </div>
  );
};

export default Progress;
