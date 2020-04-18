import React from "react";
import Phaser from "phaser";
import Game from "./Game";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 style={{ textAlign: "center" }}>React - Phaser3 Platformer</h1>
        <Game />
      </div>
    );
  }
}

export default App;
