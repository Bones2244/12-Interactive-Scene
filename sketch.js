// Project Title
// Your Name(s)
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let carX = 100
let carY = 0
let cX = 0
let cY = 0
function setup() {
  //This function get run once at the start of the program
  createCanvas(800, 600);
  background(240);
  // ellipseMode(CORNER);
  ellipseMode(CENTER);
  rectMode(CENTER);

  //Set the number of frames per second
  frameRate(15);

}

function draw() {
  background("grey");
  fill("grey");
  strokeWeight(5);
  fill('white');
  strokeWeight(3);
  
cY += 5;

  //boundry 1.
  
  //lane 2.
  line(220, 30, 220, 80);
  line(220, 130, 220, 180);
  line(220, 230, 220, 280);
  line(220, 330, 220, 380)
  line(220, 430, 220, 480);
  line(220, 530, 220, 580);


  //lane 3.  
  line(370, 30, 370, 80);
  line(370, 130, 370, 180);
  line(370, 230, 370, 280);
  line(370, 330, 370, 380);
  line(370, 430, 370, 480);
  line(370, 530, 370, 580);


  //lane 4.
  line(520, 30, 520, 80);
  line(520,130,520,180);
  line(520, 230, 520, 280);
  line(520, 330, 520, 380);
  line(520, 430, 520, 480);
  line(520, 530, 520, 580);

//line 5.
line(630,30,630,80)

  fill("white")
  //ellipse(200,200,20,20)


  //car
  drawCar(150,cY)



}

function drawCar(x, y) {
  ellipse(x-35, y-20, 20)
  ellipse(x+35,y-20,20)
  ellipse(x-35,y+25,20 )
  ellipse(x+35, y+25, 20)
  rect(x, y, 65, 80)

}