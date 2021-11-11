const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box;
var strinker, distructive, carange, lecherous, muckspout;
var speedo, blaster, wiz;
var backgroundImg, platform;
var slingshot;
var bg ="images/background.jpg";


function preload(){
    getBackgroundImg();

}



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    platform = new Platform(150,305,300,135);
    ground= new Ground(600,height,1200,100);
    box= new Box(700,320,70,70);
    carange = new carange(810,350,70,70) 
    
}

function draw(){
    Engine.update(engine);
    box.display()
    platform.display()
    ground.display()
    carange.display()
}