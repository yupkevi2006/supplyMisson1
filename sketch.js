var helicopterIMG, helicopter, package,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	var canvas = createCanvas(800, 700);
	engine = Engine.create();
	world=engine.world;
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	 var options={
		restitution:1.0
	 }

	rectMode(CENTER);
	

	package=createSprite(width/2, 80, 10,10,);
	package.addImage(packageIMG)
	
	package.scale=0.2

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterIMG);
	helicopter.scale=0.6;
	//package.x= packageBody.position.x 
  //package.y= packageBody.position.y 
    


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	var options={
		restitution:1.0
		isStatic:true
	
	}

	packageBody = Bodies.circle(width/2 , 200 , 5 ,options);

	World.add(world, packageBody);


	//Create a Ground
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  Engine.update(engine)
  drawSprites();
 
}

function keyPressed() {
 if (keyDown === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	
  }
}



