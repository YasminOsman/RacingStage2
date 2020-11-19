var canvas, backgroundImg;
var gameState = 0;
var playerCount;
var database;
var form, player, game;
var allPlayers;

function setup(){
  database = firebase.database();
  console.log(database);
  canvas = createCanvas(400, 400);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  if (playerCount === 4) {
    game.update();
  }
  if (gameState === 1) {
    clear();
    game.play();
  }
  
}

