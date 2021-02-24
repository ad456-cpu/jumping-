var canvas;
var music;
var object1;
var object2;
var object3;
var object4;
var boxsprite;

function preload(){
    music = loadSound("music.mp3");

}


function setup(){
    createCanvas(1000,800);
    canvas = createCanvas(1200,600);
    boxsprite=createSprite(random(20,750));
    boxsprite.shapeColor="white";
    boxsprite.velocityY=3;
    object1=createSprite(200,500);
    object1.shapeColor="green";
    object2=createSprite(400,500);
    object2.shapeColor="red";
    object3=createSprite(600,500);
    object3.shapeColor="orange";
    object4=createSprite(800,500);
    object4.shapeColor="blue";

    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(0);
    //create edgeSprite
    createEdgeSprites();

if(object1.isTouching(boxsprite) && boxsprite.bounceOff(object1)){
  boxsprite.shapeColor="green"; 
}

if(object2.isTouching(boxsprite) && boxsprite.bounceOff(object2)){
    boxsprite.shapeColor="red"; 
  }   
  
  if(object3.isTouching(boxsprite) && boxsprite.bounceOff(object3)){
    boxsprite.shapeColor="orange"; 
  }  
  
  if(object4.isTouching(boxsprite) && boxsprite.bounceOff(object4)){
    boxsprite.shapeColor="blue"; 
  } 
  
  
  //add condition to check if box touching surface and make it box




    drawSprites();
}
