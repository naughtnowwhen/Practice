var num = 50;
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
  
  ellipse(50,num, nums[0], nums[0]);
  ellipse(100,2 * num, nums[1], nums[1]);
  ellipse(200,3 * num,nums[2], nums[2]);
  ellipse(300,4 * num,nums[3], nums[3]);

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