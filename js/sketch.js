/*
 * The classic snake game made in p5JS and based on this
 * video from the coding train on Youtube:
 * https://github.com/mhoumann87/p5js_snake_game
 */

let snake, food, w, h;
// Const to decide how big the snake parts are
const rez = 10;

function setup() {
  // Store the canvas in a variable
  const myCanvas = createCanvas(400, 400);
  // So you can place it where you want on the page
  myCanvas.parent('game');

  // Get the food location
  placeFood();

  // Create a new snake
  snake = new Snake(rez);
}

function placeFood() {
  // Make x and d y for the location based on width and height
  const x = floor(random(width));
  const y = floor(random(height));

  console.log(w, h, x, y);

  // Place the food on the canvas
  food = createVector(x, y);
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
  noStroke();

  // Update and show the snake based on the methods in the class
  snake.update();
  snake.show();

  // Put the food on the canvas and make it green
  fill(0, 255, 0);
  rect(food.x, food.y, rez, rez);
}
