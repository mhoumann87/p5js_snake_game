/*
 * The classic snake game made in p5JS and based on this
 * video from the coding train on Youtube:
 * https://github.com/mhoumann87/p5js_snake_game
 */

// Initiate the variables we need
let snake, food, w, h;
// Set the resolution for the game
const rez = 10;

function setup() {
  // Store the canvas in a variable
  const myCanvas = createCanvas(400, 400);
  // So you can place it where you want on the page
  myCanvas.parent('game');

  // Get width and height based on the resolution
  w = floor(width / rez);
  h = floor(height / rez);

  // Set the frame rate so the game slows down a bit
  frameRate(10);
  // Get the food location
  placeFood();

  // Create a new snake
  snake = new Snake();
}

function placeFood() {
  // Make x and d y for the location based on w and h
  const x = floor(random(w));
  const y = floor(random(h));

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
  // Use out rez variable to scale every thing in the canvas
  scale(rez);

  background(0);
  noStroke();

  // Check to see if the food is eaten
  if (snake.eat(food)) {
    placeFood();
  }

  // Update and show the snake based on the methods in the class
  snake.update();
  snake.show();

  // Put the food on the canvas and make it green
  fill(0, 255, 0);
  rect(food.x, food.y, 1, 1);
}
