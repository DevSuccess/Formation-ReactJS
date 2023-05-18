// Librairies
import React from "react";
import "./App.css";

// Composants
import Eleve from "../Eleves/Eleve";

class App extends React.Component {
  state = {
    eleves: [
      {
        nom: "Eva Dupont",
        moyenne: 15,
        citation: "\"Allez toujours plus loins !\"",
      },
      { nom: "Timothée Galo", moyenne: 5, citation: null },
    ],
  };
  render() {
    return (
      <div className="App">
        <h1>Bienvenue</h1>
        {this.state.eleves.map((value, k) => (
          <Eleve key={k} nom={value.nom} moyenne={value.moyenne}>
            {value.citation}
          </Eleve>
        ))}
      </div>
    );
  }
}

export default App;
