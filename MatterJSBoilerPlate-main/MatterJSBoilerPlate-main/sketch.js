const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, btn1, btn2; 

function preload()
{
	
}

function setup() {

	
	createCanvas(800, 700);

	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	engine = Engine.create();
	world = engine.world;

	btn1 = createImg("right.png");
	btn1.position(220,30);
	btn1.size(50,50);
	btn1.mouseClicked(hforce);
  
	btn2 = createImg("up.png");
	btn2.position(130,30);
	btn2.size(50,50);
	btn2.mouseClicked(vforce);

	ball = Matter.Bodies.circle(200,100,20,ball_options);
	World.add(world, ball);

	ground = new Ground(200,390,400,20);
	right = new Ground(390,200,20,400);
 	left = new Ground(10,200,20,400);
	top_wall = new Ground(200,10,400,20);

	rectMode(CENTER);
 	ellipseMode(RADIUS);

	Engine.run(engine);
}

function draw() {

  background(51);

  ground.show()
  right.show()
  left.show()
  top_wall.show()

  ellipse(ball.position.x,ball.position.y,20,20)

  Engine.update(engine);

  drawSprites();
 
}


function hforce() {
	Matter.Body.applyForce(ball,{x:0, y:0}, {x:0.05, y:0})
  }
 
function vforce() {
	Matter.Body.applyForce(ball,{x:0, y:0}, {x:0, y:-0.05});
  }

