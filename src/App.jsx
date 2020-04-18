import React from "react";
import Phaser from "phaser";
import Game from "./Game";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Phaser Game</h1>
        <Game />
      </div>
    );
  }
}

export default App;
