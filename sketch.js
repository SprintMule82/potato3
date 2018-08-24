function setup() {
  createCanvas(1800, 1000);
  ball.direction = [1, 1];
}

function draw() {
  background(255);
  ball.draw();
  ball.move();
  ball.bounce();
}

let ball = {
  "position": [50, 50],
  "direction": [0, 0],
  "speed": 20,
  "size": 250,
  "draw": function() {
    stroke(random(255), random(255), random(255));
    strokeWeight(this.size);
    point(this.position[0], this.position[1]);
  },
  "move": function() {
    this.position[0] += this.direction[0] * this.speed;
    this.position[1] += this.direction[1] * this.speed;
  },
  "bounce": function() {
    if (this.position[0] > width - this.size || this.position[0] < 0) {
      this.direction[0] *= -1;
    } else if (this.position[1] > height - this.size || this.position[1] < 0) {
      this.direction[1] *= -1;
    }
  }
}