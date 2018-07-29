var num = 50;
var nums = [25,50,75,100];
var index = 0;
var myArray = ['goose','gander','pheasant','blueJay'];
RandNumGen = function () {
  return Math.random() * 200;
};
var RandFill = [RandNumGen(),RandNumGen(),RandNumGen()];
console.log(RandFill);

var smallIncrementArray = [];

for (var j = 0; j < 10; j++){
  var smallIncrement = j * .05;
  smallIncrementArray.push(smallIncrement);

}


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  for (var i = 0; i < myArray.length; i ++) {
    stroke(255);
    noFill();
    for (var y = 0; y < 5; y++){
    ellipse( 10 + ((smallIncrementArray[y]) + 2) * nums[i],50, nums[i], nums[i]);
    }

  }


  fill(RandFill[0],RandFill[1],RandFill[2]);
  textSize(20);
  text(myArray[index], 20,200);

}

//didn't work when it was in the draw loop, keep these separated!
function mousePressed() {
  index ++;
  if (index === myArray.length) {
    index = 0;
  }
}











// pauses on debugger for some reason but still works.
// var y = 3;
// console.log(y);