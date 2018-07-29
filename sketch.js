var num = 73;
var nums = [25,55,100,75];
var index = 0;
var myArray = ['goose','gander','pheasant','blueJay'];
RandNumGen = function () {
  return Math.random() * 200; 
};
 var RandFill = [RandNumGen(),RandNumGen(),RandNumGen()];
 console.log(RandFill);


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  ellipse(100,100,num, num);
  ellipse(200,200,nums[2], nums[2]);

  fill(RandFill[0],RandFill[1],RandFill[2]);
  textSize(20);
  text('rainbow', 20,200);
  text(myArray[0],75,300);
  text(myArray[index],150,350);
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