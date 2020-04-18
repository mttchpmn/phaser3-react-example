# Phaser3 React Example

## About

This is a simple POC to demonstrate how Phaser3 can be integrated easily into a Create-React-App app. The embedded Phaser game is that of [phaser3-platformer](https://github.com/mttchpmn/phaser3-platformer).

The Phaser logic lives inside the `./src/Game/` folder, which exports the `Game` component for React to render. The `Game` component is simply a div with an id of `game-container` which Phaser then latches onto and injects the game within.

The game is a simple 'platformer' style HTML5 game built using Phaser3. The player must collect stars to increase their score. After all stars are collected, a bomb will release and the next wave of stars will spawn. If the player touches a bomb it is game over.

## Screens

![Gameplay](/public/assets/screen.png)

## Controls

Arrow keys to move and jump.
