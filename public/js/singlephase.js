import MainScene from "./MainScene.js";

const config = {
  width: 640,
  height: 640,
  type: Phaser.AUTO,
  parent: "phaser-game",
  scene: [MainScene],
};

let snake = new Phaser.Game(config);
