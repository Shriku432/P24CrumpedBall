var paper1
var rectangle1,rectangle2,rectangle3
var dustbin1
var ground


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
const Body = Matter.Body;

function preload()
{

//helicopterIMG=loadImage("helicopter.png")    
//packageIMG=loadImage("package.png")

}

function setup() {
     createCanvas(800,700);
    rectMode(CENTER)
    
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2

    }
    paperSprite=createSprite(100,650,10,10);

    rectangle1Sprite=createSprite(360,630,10,60);
    rectangle2Sprite=createSprite(480,655,250,10);
    rectangel3sprite=createSprite(610,630,10,60);
    
    
    
    groundSprite=createSprite(width/2, height-35,width,10);
    groundSprite.shapecolor=color(255)

    engine = Engine.create();
    world = engine.world;

    paper = Bodies.circle(width/2 , 200 , 5 ,{restitution:0.1, isStatic:true});
    World.add(world, paper);




    ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
    World.add(world, ground);
    
   
    Engine.run(engine);    

}


function draw() {
  rectMode(CENTER);
  background(0); 
  Engine.update(engine);
  

  
  drawSprites();

}

function keyPressed() {
 if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85});
 }
}