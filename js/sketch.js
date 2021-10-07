/*
 * The classic snake game made in p5JS and based on this
 * video from the coding train on Youtube:
 * https://github.com/mhoumann87/p5js_snake_game
 */

let snake;

function setup() {
  const myCanvas = createCanvas(400, 400);
  myCanvas.parent('game');

  snake = new Snake();
}

function draw() {
  background(0);

  snake.update();
  snake.show();
}
