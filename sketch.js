
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rbody1,rbody2,rbody3;
var paper1;
var ground1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
//left block
	rbody1=createSprite(650,630,10,50);

rbody1.shapeColor=color(255,0,0);
//right block
rbody2=createSprite(780,630,10,50);
rbody2.shapeColor=color(255,0,0);
//lower block
rbody3=createSprite(715,655,130,10);
rbody3.shapeColor=color(255,0,0);


	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper1=new paper(50,50,35);
ground1=new ground(300,675,1000,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  ground1.display();
  keypressed();
 
  drawSprites();
 
}


function keypressed() {
	if (keyCode===UP_ARROW) {
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:30,y:-63});
		
	}
}
