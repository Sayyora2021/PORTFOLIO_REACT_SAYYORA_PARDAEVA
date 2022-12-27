import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Centres d'intérêts</h3>
      <div className="list">
        <ul>
          <li>
            <i className="fas fa-walking"></i>
            Randonné
          </li>
          <li>
            <i className="fas fa-swimmer"></i>
            Natation
          </li>
          <li>
            <i className="fas fa-globe"></i>
            Voyages
          </li>
          <li>
            <i className="fas fa-music"></i>
            Musique
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hobbies;
