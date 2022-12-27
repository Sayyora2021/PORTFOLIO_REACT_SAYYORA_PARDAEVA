import React, { Component } from "react";
import Progress from "./Progress";

class Languages extends Component {
  state = {
    frontend: [
      { id: 1, value: "JavaScript", xp: 1.8 },
      { id: 2, value: "HTML5 & CSS3", xp: 2 },
      { id: 3, value: "NodeJs", xp: 0.7 },
    ],
    backend: [
      { id: 1, value: "React", xp: 0.4 },
      { id: 2, value: "MongoDB/Express", xp: 0.8 },
      { id: 3, value: "Sass", xp: 2 },
      { id: 4, value: "Material UI", xp: 0.5 },
    ],
  };
  render() {
    let { frontend, backend } = this.state;
    return (
      <div className="languagesFrameworks">
        <Progress
          frontend={frontend}
          className="languageProgress"
          title="Frontend"
        />
        <Progress
          frontend={backend}
          className="frameWorkProgress"
          title="Backend"
        />
      </div>
    );
  }
}

export default Languages;
