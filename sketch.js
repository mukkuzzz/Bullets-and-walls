var bullet,wall;
var thickness,weight,speed;

function setup() {
  createCanvas(1600,400);
  thickness = random(22,83);
  speed = random(223,321);
  height = random(30,52);
  bullet = createSprite(50, 200,50, 20);
  bullet.shapeColor = "black";
  wall = createSprite(1300,200,thickness,height/2);
 
bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);  
 
  if (wall.x - bullet.x < (bullet.width+wall.width)/2) {
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);    
     if (damage > 10) {
       bullet.shapeColor = color(255,0,0);
     }
     if (damage < 10) {
      bullet.shapeColor = color(0,255,0);
    }
  }
    drawSprites();
    }   