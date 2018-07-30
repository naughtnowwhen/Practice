var bubbles = [];
var bubbleSize = 20;

function setup () {
  createCanvas(1000, 1000);
// with this commented out, new bubble objects are only created with the next function, mouse dragged
  for (var j = 0; j < 10; j ++){
    bubbles[j] = new Bubble(random(width),random(height));
  }
}

function mouseDragged(){
  bubbles.push(new Bubble(mouseX, mouseY));
}

function draw () {
  background(150);
  for (var i = 0; i < bubbles.length; i ++) {
    bubbles[i].move();
    bubbles[i].display();
  }
  if (bubbles.length > 30) {
      // interesting, this will draw 30 bubbles (from int in this if statement) but then begin unshifting them, and then bubbles[i].draw causes an error because by i gets unshifted.
      bubbles.unshift(0);
  }

}



function Bubble (x,y) {
  this.x = x;
  this.y = y;
  this.display = function () {
    stroke(10);
    fill(random(10,255),0,160,40);
    ellipse(this.x, this.y, bubbleSize, bubbleSize);
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

