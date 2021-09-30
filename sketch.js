var ship,ship_travelling,edges;
var sea;
var seaImage;

function preload(){
ship_travelling = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImage = loadAnimation("sea.png");

}

function setup(){
  createCanvas(1366,500);
  sea=createSprite(200,180,400,30);
  sea.addAnimation("sea",seaImage);
  //creating ship;
  ship = createSprite(50,160,20,50);
  ship.addAnimation("travelling",ship_travelling);
  edges = createEdgeSprites();

//adding scale and position to ship
ship.scale = 0.3;
ship.x = 400;
  ship.y=230;
  
}

function draw() {
  background("blue");
 drawSprites();
}