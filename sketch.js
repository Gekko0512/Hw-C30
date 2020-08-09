const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var division1,division2,division3,division4,division5,division6,division7,division8;


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,height,480,20);
  //divisions
  division1 = new Divisions(0,800,30,divisionHeight) ;
  division2 = new Divisions(80,800,30,divisionHeight) ;
  division3 = new Divisions(160,800,30,divisionHeight) ;
  division4 = new Divisions(240,800,30,divisionHeight) ;
  division5 = new Divisions(320,800,30,divisionHeight) ;
  division6 = new Divisions(400,800,30,divisionHeight) ;
  division7 = new Divisions(480,800,30,divisionHeight) ;
  //division8 = new Divisions(0,800,30,divisionHeight) ;
  

 /* for(var k = 0;k <= width ; k = k+80){
      
      divisions.push();
  }
*/



  
}

function draw() {
  background(255,255,255);  
  drawSprites();
}