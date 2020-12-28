
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  ground1 = new Ground(400,690,20,20);
  box1 = new Box(750,300,20,20);
  box2 = new Box(700,200,20,20);
  box3 = new Box(650,250,20,20);
  ball1 = new Ball(400,350,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  ball1.display();
  drawSprites();
 
}

