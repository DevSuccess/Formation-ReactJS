// Librairies
import React from "react";
import "./App.css";

// Composants
import Eleve from "../Eleves/Eleve";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Bienvenue</h1>
        <Eleve />
      </div>
    );
  }
}

export default App;
