var tRex;
var obstacle;
var obj1, obj2;

function setup() {
  createCanvas(800,400);

  tRex = createSprite(300, 200, 50, 50);
  tRex.debug = false;

  obstacle = createSprite(600, 200, 50, 50);
  obstacle.debug = false;
}

function draw() {
  background(255,255,255);  
  tRex.y = mouseY;
  tRex.x = mouseX;


if (isTouching (tRex, obstacle) ) //called function
{ 
  //only add coordinates in true but not in false
  // true ex. reset coordinate...

  tRex.shapeColor = "pink";
  obstacle.shapeColor = "green";
}
else
{
  tRex.shapeColor = "black";
  obstacle.shapeColor = "black";
}
  
  drawSprites();
}