var garden,rabbit;
var gardenImg,rabbitImg,appleImg,orangeImg,redImg;
var orange, red, apple;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
  
// Mover el fondo
 garden=createSprite(200,200);
 garden.addImage("garden", gardenImg);

//crear sprite de rabbit (conejo)
 rabbit = createSprite(180,340,30,30);
 rabbit.scale = 0.09;
 rabbit.addImage("rabbit", rabbitImg);

 


}




function draw() {
  background("green");
  createApples();
  createOrange();
  createRed();

  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;
  drawSprites();
  
 
  
}

function createApples() {
  
 apple = createSprites(random(50, 350), 40, 10, 10);
 apple.addImage("apple", appleImg);
 apple.scale = 0.07;
 apple.velocityY = 3;
 apple.lifetime = 150;


}


function createOrange(){
  
 orange = createSprite(random(50, 350),40, 10, 10);
 orange.addImage("orange", orangeImg);
 orange.scale = 0.07;
 orange.velocityY = 3;
 orange.lifetime = 150;
  

  
}

function createRed(){
  
 red = createSprite(random(50, 350),40, 10, 10);
 red.addImage("red", redImg);
 red.scale = 0.08;
 red.velocityY = 3;
 red.lifetime = 150;



}