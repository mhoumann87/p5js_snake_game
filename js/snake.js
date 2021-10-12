class Snake {
  constructor() {
    // A variable to store the length of the snake
    this.length = 0;
    // The "snake" need to be an array, do we can extend it
    this.body = [];
    // The head is a vector starting in top left corner
    this.body[0] = createVector(0, 0);
    // Set the direction for the snake
    this.xDir = 0;
    this.yDir = 0;
  }

  // When the snake eats the food, it will get longer by i pixel,
  // scaled to rez
  grow() {
    // Get the position of the head and make a copy
    const head = this.body[this.body.length - 1].copy();
    this.length++;
    this.body.push(head);
  }

  // Function to check it game is over
  endGame() {
    // Get the x and y positions of the head
    const x = this.body[this.body.length - 1].x;
    const y = this.body[this.body.length - 1].y;

    // If the snake touches one of the walls, the game is over
    if (x > w || x < 0 || y > h || y < 0) {
      return true;
    }

    // If the snake touches it self the game is over
    for (let i = 0; i < this.body.length - 1; i++) {
      // get the different parts of the snake
      const part = this.body[i];
      // Check to see if x and y is at the same place as the part
      if (part.x == x && part.y == y) {
        return true;
      }
    }

    return false;
  }

  // Method to detect if the snake eats the food
  eat(pos) {
    const x = this.body[this.body.length - 1].x;
    const y = this.body[this.body.length - 1].y;

    if (x === pos.x && y === pos.y) {
      this.grow();
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
    // Make a copy of the "head" of the snake
    const head = this.body[this.body.length - 1].copy();
    // Pull position 0 in the array from the array
    this.body.shift();
    // Set the direction of the snake
    head.x += this.xDir;
    head.y += this.yDir;
    // Push the head to the end of the snake
    this.body.push(head);
  }

  // Put the snake on the canvas
  show() {
    for (let i = 0; i < this.body.length; i++) {
      noStroke();
      fill(255);

      rect(this.body[i].x, this.body[i].y, 1, 1);
    }
  }
}
