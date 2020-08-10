var packageSprite,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	packageIMG=loadImage("paperball.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	 
	leftSprite=createSprite(350,600,8,120);
	bottomSprite=createSprite(400,650,100,20);
	rightSprite=createSprite(450,600,8,120);

    paperSprite=createSprite(width/2, 80, 10,10);
	paperSprite.addImage(packageIMG);
	paperSprite.scale=0.2;

	paperBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, paperBody);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperSprite.x= paperBody.position.x 
  paperSprite.y= paperBody.position.y

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(paperBody,false);
}
}
