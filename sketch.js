
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


 
var ball;
var leftSide;
var rightSide;
var groundobj;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

  

	//Create the Bodies Here.
    var ball_options = 
	{
    restitution: 0.3,
	  //friction: 0,
	  density: 1.2

	}
      ball= Bodies.circle(300,350,20,ball_options);
	  World.add(world,ball)
    
    var ground_options = 
    {
      isStatic: true

    }

    groundobj= Bodies.rectangle(600,690,1200,20,ground_options);
    World.add(world,groundobj);

    leftSide= Bodies.rectangle(1000,630,20,130,ground_options);
    World.add(world,leftSide);

    rightSide= Bodies.rectangle(800,630,20,130,ground_options);
    World.add(world,rightSide);

	 // Engine.run(engine);

	 rectMode(CENTER);
}
function draw() {
  
  background(0);
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20);
 
  rect(groundobj.position.x,groundobj.position.y,1200,20);
  rect(leftSide.position.x,leftSide.position.y,20,130);
  rect(rightSide.position.x,rightSide.position.y,20,130);

  if (keyCode === UP_ARROW)
  {
   Matter.Body.applyForce(ball,{x:0,y:0},{x:0.50,y:-0.50});
  }
 

  drawSprites();
 
}



 
