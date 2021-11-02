const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg,ground,tower,canon,cannonball
var angle

function preload() {

  bg = loadImage("assets/background.gif");
}

function setup() {
  angle = -PI/8
  canvas = createCanvas(1200, 600);  
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(0,height-5,width*2,5);
  tower = new Tower(100,height-250,150,350)
  canon = new Cannon(width/2 - 450,height/2 - 180,150,100,angle)
  cannonball = new CannonBall(canon.x,canon.y)
}

function draw() {
  Engine.update(engine);
  background(bg);
  ground.display();
  tower.display();
  canon.display();
  cannonball.display();  
}

function keyReleased(){
  console.log(keyCode)
  if(keyCode == 39){
    cannonball.shoot();
  }
}



