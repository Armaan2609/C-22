const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        restitution: 1.0
    }

    var ground_option={
        isStatic: true
    }

    var ball_options ={
        restitution: 1.0
    }

   object= Bodies.rectangle(200,30,20,20,object_options);
    World.add(world,object);

ground=Bodies.rectangle(200,350,400,10,ground_option);
    World.add(world,ground);

    ball=Bodies.circle(100,100,20,ball_options);
    World.add(world,ball);

   


    console.log(object);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    rectMode(CENTER);
    noStroke()
    fill("red")
    rect(object.position.x,object.position.y,20,20);
    fill("yellow")
    rect(ground.position.x,ground.position.y,400,10);
    fill("red")
    ellipse(ball.position.x,ball.position.y,40);
}
