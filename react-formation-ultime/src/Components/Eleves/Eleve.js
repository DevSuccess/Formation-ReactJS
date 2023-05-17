import React from "react";
import "./Eleve.css";

class Eleve extends React.Component {
  render() {
    return (
      <div className="eleve">
        <h1>Elon Musk</h1>
        <p>
          Moyenne scolaire : <b>25/20</b>
        </p>
      </div>
    );
  }
}

export default Eleve;
