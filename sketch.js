const Engine= Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint = Matter.Constraint

var engine,world,boy;


function preload(){
boyimage1= loadAnimation("Boy1.png","Boy2.png","Boy3.png","Boy4.png","Boy5.png","Boy6.png","Boy7.png","Boy8.png","Boy9.png","Boy10.png")

}


function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world;



boy= new Boy()


var ground_options={'isStatic': true}
ground=Bodies.rectangle(400,390,800,10,ground_options)
World.add(world,ground)

}

function draw() {
  background("cyan");  
Engine.update(engine)


boy.display()
rectMode(CENTER)
rect(ground.position.x,ground.position.y,800,10)

  drawSprites();
}

function mouseDragged(){


}

