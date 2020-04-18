import React, { Component } from "react";
import Phaser from "phaser";

import GameScene from "./scenes/GameScene";

class Game extends Component {
  componentDidMount() {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 300 },
        },
      },
      scene: [GameScene],
      parent: "game-container",
    };

    new Phaser.Game(config);
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <div id="game-container" />;
  }
}

export default Game;
