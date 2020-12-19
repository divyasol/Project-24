
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground,line1,line2,line3,line4;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 650);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.	

	var line1_options=
	{
		isStatic: true
	}
	line1 = Bodies.rectangle(550,590,50,0,line1_options);

	World.add(world ,line1);

	var line2_options=
	{
		isStatic: true
	}

	line2 = Bodies.rectangle(750,590,50,0,line2_options);


	World.add(world ,line2);

	var line3_options=
	{
		isStatic: true
	}

	line3 = Bodies.rectangle(650,620,50,0,line3_options);


	World.add(world ,line3);
	fill("pink")

	var ball_options=
	{
	  restitution: 0.8,
	  denstiy: 1.2,
	  friction: 0.5,
	}
	
	ball = Bodies.circle(400,600,20,ball_options);



	World.add(world ,ball);

	var options=
	{
		isStatic: true
	}

	ground = Bodies.rectangle(500,640,800,15,options);


	World.add(world ,ground);

	Engine.run(engine);
  
}


function draw() {
   background(0);

  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,30,30);  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1000,20);  
  rect(line1.position.x,line1.position.y,20,80);  
  rect(line2.position.x,line2.position.y,20,80);  
  rect(line3.position.x,line3.position.y,180,20);  


  drawSprites(); 
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(ball.body,ball.position,{x:100,y:-85});
	 }
   }
   
   



