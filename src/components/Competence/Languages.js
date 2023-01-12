import React, { Component } from "react";
import Progress from "./Progress";

class Languages extends Component {
  state = {
    frontend: [
      { id: 1, value: "HTML5", icon: "html5" },
      { id: 2, value: "CSS3", icon: "css3" },
      { id: 3, value: "Sass", icon: "sass" },
      { id: 4, value: "JavaScript", icon: "js" },
      { id: 5, value: "React", icon: "react" },
      { id: 6, value: "Git", icon: "github" },
      { id: 7, value: "SEO", icon: "gavel" },
      { id: 3, value: "Cybersécurité", icon: "lock" },
    ],
    backend: [
      { id: 1, value: "NodeJs", icon: "nodejs" },
      { id: 2, value: "MongoDB/Express", icon: "MongoDB" },
      { id: 4, value: "Material UI", icon: "figma" },
    ],
  };
  render() {
    let { frontend, backend } = this.state;
    return (
      <div className="languagesFrameworks">
        <Progress
          frontend={frontend}
          className="competence-box"
          title="Frontend"
        />
        <Progress
          frontend={backend}
          className="competence-box"
          title="Backend"
        />
      </div>
    );
  }
}

export default Languages;
