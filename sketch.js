const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var circle1,point,e


function preload() {
}

function setup(){
    var canvas = createCanvas(1200,1200);
    engine = Engine.create();
    


    world = engine.world;
    var holder_options = {
        isStatic:true
}

    holder = Bodies.rectangle(200,100,200,20,holder_options);
    World.add(world,holder);

var circle_options = {
    'restitution':1.0,
    'density':1.0
}

    circle1 = Bodies.circle(220,200,40,circle_options)
    World.add(world,circle1);

    var constraint_options = {
       bodyA: circle1,
       bodyB: holder, 
       stiffness:0.004,
       length:10
    }
   
    var string = Constraint.create(constraint_options);
    
    World.add(world,string);
    
    //point = new Pendulum(circle1.body,{x:600,y:100});
    
}

function draw(){
    background("black");
    Engine.update(engine);
    rectMode(CENTER);
    rect(holder.position.x,holder.position.y,200,20)

    ellipseMode(RADIUS);
    ellipse(circle1.position.x,circle1.position.y,40,40)

    line(circle1.position.x,circle1.position.y,holder.position.x,holder.position.y);

    if(keyCode === 32){
        circle1.position.y = mouseY
        circle1.position.x = mouseX
    }
    else if(keyCode === ENTER){
        circle1.position.x = 200
        //circle1.position.y = 200
    }
}