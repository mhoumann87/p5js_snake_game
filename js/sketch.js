/*
 * The classic snake game made in p5JS and based on this
 * video from the coding train on Youtube:
 * https://github.com/mhoumann87/p5js_snake_game
 */

let snake;
// Const to decide how big the snake parts are
const rez = 10;

function setup() {
  // Store the canvas in a variable
  const myCanvas = createCanvas(400, 400);
  // So you can place it where you want on the page
  myCanvas.parent('game');

  // Create a new snake
  snake = new Snake(rez);
}

// The keyPressed function is a p5js function that runs every time user
// interacts with the keyboard
function keyPressed() {
  // The snake moves based on the arrow used

  switch (keyCode) {
    case LEFT_ARROW:
    case 65:
      snake.setDir(-1, 0);
      break;
    case RIGHT_ARROW:
    case 68:
      snake.setDir(1, 0);
      break;
    case UP_ARROW:
    case 87:
      snake.setDir(0, -1);
      break;
    case DOWN_ARROW:
    case 83:
      snake.setDir(0, 1);
      break;
  }
}

function draw() {
  background(0);

  snake.update();
  snake.show();
}
