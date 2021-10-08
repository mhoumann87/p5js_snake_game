class Snake {
  constructor(rez) {
    // The "snake" need to be an array, do we can extend it
    this.body = [];
    // The head is a vector starting in top left corner
    this.body[0] = createVector(0, 0);
    // Set the direction for the snake
    this.xDir = 0;
    this.yDir = 0;

    this.size = rez;
  }

  // Function to move the snake based on the key pressed
  setDir(x, y) {
    this.xDir = x;
    this.yDir = y;
  }

  update() {
    this.body[0].x += this.xDir;
    this.body[0].y += this.yDir;
  }

  show() {
    noStroke();
    fill(255);

    rect(this.body[0].x, this.body[0].y, this.size, this.size);
  }
}
