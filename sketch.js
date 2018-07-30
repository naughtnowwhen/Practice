var bubbles = [];

function setup () {
  createCanvas(550, 350);
  for (var j = 0; j < 10; j ++){
    bubbles[j] = new Bubble();
  }
}

function mousePressed(){
  bubbles.push(new Bubble());
}

function draw () {
  background(10);
  for (var i = 0; i < bubbles.length; i ++) {
    bubbles[i].move();
    bubbles[i].display();
  }
}



function Bubble () {
  this.x = random(0, width);
  this.y = random(0, height);
  this.display = function () {
    stroke(255);
    noFill();
    ellipse(this.x, this.y, 10, 10);
  };
  this.move = function () {
    this.x = this.x + random(-1,1);
    this.y = this.y + random(-1,1);
  };
}

// function setup () {
//   createCanvas(550, 350);
//   for (var j = 0; j < 1000; j ++){
//     bubbles[j] = {
//       x:random(0,width),
//       y:random(0, height),


//       display: function () {
//         stroke(255);
//         noFill();
//         ellipse(this.x, this.y, 30, 30);
//       },
//       move: function () {


//       // very cool, by having x and y tend towards a more random number the bubble slowly moves off screen. It be cool to have a bunch of bubble objects and set a seeker value so that all the bubbles start off randomly but slowly move towards that seeker value
//         this.x = this.x + random(-1,1);
//         this.y = this.y + random(-1,1);
//       }
//     };
//   }
//   console.log(bubbles);
// }

