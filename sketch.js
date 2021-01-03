
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
  boyImg = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,600,800,30)
	tree = new Tree(600, 399)
	stone = new Stone(200,500,50,50)
	mango1 = new Mango(525, 310)
	mango2 = new Mango(562.5, 370)
	mango3 = new Mango(600, 320)
	mango4 = new Mango(637.5, 360)
	mango5 = new Mango(675, 340)
	Constraint1 = new Constrainter(stone.body, { x: 100, y: 400 });

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  boy = image(boyImg,110, 380, 150, 250)
  ground.display()
  tree.display()
  stone.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  drawSprites();
  DetectCollision(stone, mango5)
  DetectCollision(stone, mango4)
  DetectCollision(stone, mango3)
  DetectCollision(stone, mango2)
  DetectCollision(stone, mango1)
}
function mouseDragged() {
	Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY })
}
function mouseReleased() {
	Constraint1.fly();
}
function DetectCollision(lstone,lmango) {
	mangobodypos = lmango.body.position
	stonebodypos = lstone.body.position

	var distance = dist(stonebodypos.x, stonebodypos.y, mangobodypos.x, mangobodypos.y)
	if (distance <= lmango.r + lstone.r) {
		Matter.body.setStatic(lmango.body,false)
    }
}
function keyPressed() {
	if () {

    }
}

