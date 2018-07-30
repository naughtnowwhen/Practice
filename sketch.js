var bubbles = [];
var bubbleSize = 20;

function setup () {
  createCanvas(1000, 1000);
}

function mousePressed(){
  bubbles.push(new Bubble(mouseX, mouseY));
}

function draw () {
  background(150);
  for (var i = 0; i < bubbles.length; i ++) {
    bubbles[i].update();
    bubbles[i].display();
  }
}



function Bubble (x,y) {
  this.x = x;
  this.y = y;
  this.lifespan = 255;
  this.display = function () {
    stroke(10);
    fill(random(10,255), this.lifespan);
    ellipse(this.x, this.y, bubbleSize, bubbleSize);
  };
  this.update = function () {
    this.x = this.x + random(-1,1);
    this.y = this.y + random(-1,1);
    this.lifespan--;

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

