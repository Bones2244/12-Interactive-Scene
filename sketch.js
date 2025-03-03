// Project Title
// Your Name(s)
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let carX = 100
let carY = 0
let cX = 150
let cY = 0
let cX2 = 325
let cY2 = 0
let cX3 = 460
let cY3 = 0
let cX4 = 620
let cY4 = 0
let uX = 400
let uY = 540
let X = 140
let Xx = 700
let lives = 3
let tree;
let over;
let score = 0
function setup() {
  //This function get run once at the start of the program
  createCanvas(800, 600);
  background(240);
  // ellipseMode(CORNER);
  ellipseMode(CENTER);
  rectMode(CENTER);

  //Set the number of frames per second
  frameRate(25);

}
function preload() {
  tree = loadImage('img/tree.Png');
  over = loadImage('img/gameOver.Png')

}


function draw() {
  background("grey");
  fill("grey");
  strokeWeight(5);
  fill('white');
  strokeWeight(3);

  //car speed
  cY += 18;
  cY2 += 6;
  cY3 += 12;
  cY4 += 24

  //boundry 
  if (uX > 660) {
    uX = 660
  }
  if (uX < 120) {
    uX = 120
  }
  //boundry 1.

  //lane 2.
  line(240, 30, 240, 80);
  line(240, 130, 240, 180);
  line(240, 230, 240, 280);
  line(240, 330, 240, 380)
  line(240, 430, 240, 480);
  line(240, 530, 240, 580);
  //boundry
  line(80, 0, 80, 600)
  line(700, 0, 700, 600)




  //lane 3.  
  line(390, 30, 390, 80);
  line(390, 130, 390, 180);
  line(390, 230, 390, 280);
  line(390, 330, 390, 380);
  line(390, 430, 390, 480);
  line(390, 530, 390, 580);


  //lane 4.
  line(540, 30, 540, 80);
  line(540, 130, 540, 180);
  line(540, 230, 540, 280);
  line(540, 330, 540, 380);
  line(540, 430, 540, 480);
  line(540, 530, 540, 580);

  //line 5.
  //line(630,30,630,80)

  //grass
  fill(1, 150, 32)
  rect(0, 300, 154, 600)
  rect(780, 300, 154, 600)


  image(tree, 724, 20, 60, 80)
  image(tree, 724, 160, 60, 80)
  image(tree, 724, 300, 60, 80)
  image(tree, 724, 440, 60, 80)
  image(tree, 6, 20, 60, 80);
  image(tree, 6, 160, 60, 80)
  image(tree, 6, 300, 60, 80)
  image(tree, 6, 440, 60, 80)
  //ellipse(200,200,20,20)


  //car hits car
  if (cY >= 500 && cY <= 580) {
    if (abs(uX - cX) <= 65) {
      lives -= 1
      cY = 0

    }
  }
  if (cY2 >= 500 && cY2 <= 580) {
    if (abs(uX - cX2) <= 65) {
      lives -= 1
      cY2 = 0
    }
  }
  if (cY3 >= 500 && cY3 <= 580) {
    if (abs(uX - cX3) <= 65) {
      lives -= 1
      cY3 = 0
    }
  }
  if (cY4 >= 500 && cY4 <= 580) {
    if (abs(uX - cX4) <= 65) {
      lives -= 1
      cY4 = 0
    }
  }



  // respawn car
  if (cY > 650) {
    cY = -20
    score += 5
  }
  if (cY2 > 650) {
    cY2 = -20
    score += 5
  }
  if (cY3 > 650) {
    cY3 = -20
    score += 5
  }
  if (cY4 > 650) {
    cY4 = -20
    score += 5
  }
  fill(50, 50, 50)
  //car
  drawCar(cX, cY)
  drawCar(cX2, cY2)
  drawCar(cX3, cY3)
  drawCar(cX4, cY4)
  //player car
  drawUserCar(uX, uY)
  fill('black')
  textSize(20)
  text("LIVES LEFT", 90, 20)
  text(lives, 90, 40)
  text("SCORE", 560, 20)
  text(score, 560, 40)


  //respawn screen
  if (lives < 1) {
    image(over, 0, 0, 800, 600)
    fill('red')
    textSize(50)
    //text("GAME OVER", 144, 180)
    text("PRESS R TO RESPAWN", 110, 530)
  
    if (keyIsDown(82)) {
      lives = 3
      score = 0
    }
  }
  //car keys

  //speed boost
  if (keyIsDown(LEFT_ARROW) && keyIsDown(32)) {
    uX -= 50;
  } else if (keyIsDown(LEFT_ARROW)) {
    uX -= 15;
  }
  if (keyIsDown(RIGHT_ARROW) && keyIsDown(32)) {
    uX += 50;

  } else if (keyIsDown(RIGHT_ARROW)) {
    uX += 15;
  }
  //if (uX < 200) {
  //  uX = uX + 10;
  // }


}




function drawCar(x, y) {
  //fill(random(0,255),random(0,255),random(0,255));
  fill(255, 255, 255)
  ellipse(x - 35, y - 20, 20)
  ellipse(x + 35, y - 20, 20)
  ellipse(x - 35, y + 25, 20)
  ellipse(x + 35, y + 25, 20)
  rect(x, y, 65, 80)

}
function drawUserCar(x, y) {
  //fill(random(0,255),random(0,255),random(0,255));
  fill(255, 0, 0)
  ellipse(x - 35, y - 20, 20)
  ellipse(x + 35, y - 20, 20)
  ellipse(x - 35, y + 25, 20)
  ellipse(x + 35, y + 25, 20)
  rect(x, y, 65, 80)

}


  //fill(random(0,255),random(0,255),random(0,255));

 //text(mouseX + " " + mouseY, 350, 390);
  //score += 10;
