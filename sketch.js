
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground,Pball;
var bin;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world

	ground = new Ground(600,680,1200,20)
	bin = new dustbin(600,610)
	Pball=new ball(100,350);
	wall1=new wall(650,620,25,100);
	wall2 = new wall(550,620,20,100)

	Engine.run(engine);
}

function draw() {
  background("grey");
  Pball.display();
  ground.display();
  wall1.display(); 
  wall2.display();
  bin.display();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW){
		
		Matter.Body.applyForce(Pball.Bodies, Pball.Bodies.position, {x:60, y:-60})
	}
}


