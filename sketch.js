const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var pig2;
var log1;
var box3;
var box4;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,320,70,70);
    box2 = new Box(1000,320,70,70);
    box3=new Box(800,270,70,70)
    box4=new Box(1000,270,70,70);
    box5=new Box(900,220,70,70)
    ground = new Ground(600,height,1200,20)
    pig1=new Pig(900,320)
    pig2=new Pig(900,270)
    log1=new Log(900,280,300,PI/2)
    log2=new Log(900,240,300,PI/2);
    log3=new Log(850,200,150,PI/6);
    log4=new Log(950,190,150,-PI/6);
    bird=new Bird(400,100);


}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}