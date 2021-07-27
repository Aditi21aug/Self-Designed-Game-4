var bg,form,system,code,security;
var treasure;
var score=0;
var database;
var q1="How many staircases are there at Hogwarts?"
var q2="Who was the Gamekeeper of Hogwarts?"
var q3="Who was known as the Brightest Witch of her age?"
var q4="Who was the Godfather of Harry Potter?"
var q5="What was another name of Lord Voldemort?"
var q=[q1,q2,q3,q4,q5];
function preload() {
 
  
  bg= loadImage("Images/Image 6.jpg")
 
  
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  security = new Security();
  system = new System();
  code = new Code();
  for(var rand=0; rand<5; rand++)
  {
     security.display(rand);
  }
}

function draw() {
  background(bg);
  
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
// add code for changing the background to the treasure background

  if(score === 3) {
    clear()
    background(treasure)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

}