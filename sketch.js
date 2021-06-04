var bg,bg2,form,system,code,security;
var score=0;

function preload() {
 
  
  bg= loadImage("bcg.jpg")
  //load image for the treasure background
  bg2=loadImage("bcg2.jpg")
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
// add code for changing the background to the treasure background

if(score === 3) {
  clear()
  background(bg2)
  stroke("black")
  strokeWeight("10")
  fill("white")
  textSize(60);
  text("The Award For The Best Teacher !!!",10, 170);
  text("Thank You Ma'am And Love you alot !!!",10, 270);
}
  

 

  drawSprites()
}