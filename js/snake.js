class Snake {
  constructor() {
    // The "snake" need to be an array, do we can extend it
    this.body = [];
    // The head is a vector starting in top left corner
    this.body[0] = createVector(0, 0);
    // Set the direction for the snake
    this.xDir = 0;
    this.yDir = 0;
  }

  // Method to detect if the snake eats the food
  eat(pos) {
    const x = this.body[0].x;
    const y = this.body[0].y;

    if (x === pos.x && y === pos.y) {
      console.log('Food Eaten');
      return true;
    }
    return false;
  }

  // Method to move the snake based on the key pressed
  setDir(x, y) {
    this.xDir = x;
    this.yDir = y;
  }

  // Move the snake
  update() {
    this.body[0].x += this.xDir;
    this.body[0].y += this.yDir;
  }

  // Put the snake on the canvas
  show() {
    noStroke();
    fill(255);

    rect(this.body[0].x, this.body[0].y, 1, 1);
  }
}
