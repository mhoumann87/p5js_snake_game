class Snake {
  constructor() {
    this.body = [];
    this.body[0] = createVector(0, 0);
    this.xDir = 0;
    this.yDir = 0;
  }

  update() {
    this.body[0].x += this.xDir;
    this.body[0].y += this.yDir;
  }

  show() {
    noStroke();
    fill(255);

    rect(this.body[0].x, this.body[0].y, 10, 10);
  }
}
