var bubble = {
  x:200,
  y:180,


  display: function () {
    stroke(255);
    noFill();
    ellipse(this.x, this.y, 30, 30);
  },
  move: function () {
    this.x = this.x + random(-1,1);
    this.y = this.y + random(-1,1);
  }
};

function setup () {
  createCanvas(550, 350);
}

function draw () {
  background(10);
  bubble.move();
  bubble.display();
}