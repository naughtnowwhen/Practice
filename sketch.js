var bubble = {
  x:200,
  y:180,


  display: function () {
    stroke(255);
    noFill();
    ellipse(this.x, this.y, 30, 30);
  },
  move: function () {

    // very cool, by having x and y tend towards a more random number the bubble slowly moves off screen. It be cool to have a bunch of bubble objects and set a seeker value so that all the bubbles start off randomly but slowly move towards that seeker value
    this.x = this.x + random(-1,1);
    this.y = this.y + random(-1,1);
  }
};

var bubble1 = {
    x:210,
    y:190,
  
  
    display: function () {
      stroke(255);
      noFill();
      ellipse(this.x, this.y, 30, 30);
    },
    move: function () {
  
      // very cool, by having x and y tend towards a more random number the bubble slowly moves off screen. It be cool to have a bunch of bubble objects and set a seeker value so that all the bubbles start off randomly but slowly move towards that seeker value
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
  bubble1.move();
  bubble1.display();
}