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
        <Eleve nom = "Eva Dupont" moyenne= "15"/>
        <Eleve nom = "Timothé Galo" moyenne= "8"/>
      </div>
    );
  }
}

export default App;
