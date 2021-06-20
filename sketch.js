var ship = ["ship-1.png","ship-2.png","ship-3.png","ship-4.png"];

var seaImage, sea, ship, ship_1, edges
function preload(){
seaImage = loadImage("sea.png");
ship_1 = loadAnimation("ship-1.png", "ship-2.png");


  
}

function setup(){
createCanvas(400,400);
sea = createSprite (850, 200, 400, 400); 
sea.addImage(seaImage); 
sea.velocityX = -4; 
ship = createSprite (200, 210, 10, 80); 
ship.addAnimation("normal", ship_1); 
 
ship.scale = 0.4; 
sea.scale = 0.4;
}

function draw() {
  
  
  if (sea.x<0)
  {
    sea.x = 200;
  }  
background("white");
 edges = createEdgeSprites();
  drawSprites();
 
}


