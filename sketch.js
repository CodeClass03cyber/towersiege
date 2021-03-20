const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() 
{
              createCanvas(900,400);
              engine = Engine.create();
              world = engine.world;
              Engine.run(engine);
              ground = new Ground();
              stand1 = new Stand(390,300,250,10);
              stand2 = new Stand(700,200,200,10);
 
  //level one
            
            block1 = new Block1(300,275,30,50);
            block2 = new Block1(330,275,30,50);
            block3 = new Block1(360,275,30,50);
            block4 = new Block1(390,275,30,50);
            block5 = new Block1(420,275,30,50);
            block6 = new Block1(450,275,30,50);
            block7 = new Block1(480,275,30,50);
  //level two
            block8 = new Block2(330,235,30,50);
            block9 = new Block2(360,235,30,50);
            block10 = new Block2(390,235,30,50);
            block11 = new Block2(420,235,30,50);
            block12 = new Block2(450,235,30,50);
  //level three
            block13 = new Block3(360,195,30,50);
            block14 = new Block3(390,195,30,50);
            block15 = new Block3(420,195,30,50);
  //top
            block16 = new Block4(390,155,30,50);

  //set 2 for second stand
  //level one
            blocks1 = new Block1(640,175,30,50);
            blocks2 = new Block1(670,175,30,50);
            blocks3 = new Block1(700,175,30,50);
            blocks4 = new Block1(730,175,30,50);
            blocks5 = new Block1(760,175,30,50);
  //level two
            blocks6 = new Block2(670,135,30,50);
            blocks7 = new Block2(700,135,30,50);
            blocks8 = new Block2(730,135,30,50);
  //top
            blocks9 = new Block3(700,95,30,50);

  //ball holder with slings.

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});

}
function draw()
              {
                background("black"); 
              
                
                textSize(20);
                fill("White");
                text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

                ground.display();
                stand1.display();
                stand2.display();

                strokeWeight(2);
                stroke(15);
                fill("skyblue");

                block1.display();
                block2.display();
                block3.display();
                block4.display();
                block5.display();
                block6.display();
                block7.display();
                
                block8.display();
                block9.display();
                block10.display();
                block11.display();
                block12.display();
                
                block13.display();
                block14.display();
                block15.display();
                
                block16.display();
                
                blocks1.display();
                blocks2.display();
                blocks3.display();
                blocks4.display();
                blocks5.display();
               
                blocks6.display();
                blocks7.display();
                blocks8.display();

                blocks9.display();
                
                imageMode(CENTER)
                image(polygon_img ,ball.position.x,ball.position.y,40,40);

                slingShot.display();
              }
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}