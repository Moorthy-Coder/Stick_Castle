const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var ground;

var boundleftPillar, boundrightPillar;
var LeftPillar, RightPillar;
var middleLeftPillar, middleRightPillar;
var innerLeftPillar, innerRightPillar;
var mainLeftPillar, mainRightPillar;

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;

  boundleftPillar = new Pillar(50, 300, 10, 400);
  LeftPillar = new Pillar(70, 300, 20, 350);
  middleLeftPillar = new Pillar(100, 300, 25, 300);
  innerLeftPillar = new Pillar(130, 300, 30, 250);
  mainLeftPillar = new Pillar(170, 300, 35, 350);

  mainRightPillar = new Pillar(230, 300, 35, 350);
  innerRightPillar = new Pillar(270, 300, 30, 250);
  middleRightPillar = new Pillar(300, 300, 25, 300);
  RightPillar = new Pillar(330, 300, 20, 350);
  boundrightPillar = new Pillar(350, 300, 10, 400);
}

function draw() {
  background(0);
  Engine.update(engine);

  boundleftPillar.display();
  LeftPillar.display();
  middleLeftPillar.display();
  innerLeftPillar.display();
  mainLeftPillar.display();
  triangle(60, 125, 80, 125, 70, 100);
  // triangle(115, 255, 145, 255, 130, 230);

  triangle(152.5,125,247.5,125,200,50);

  // triangle(285, 205, 255, 205, 370, 180);
  triangle(340, 125, 320, 125, 330, 100);
  mainRightPillar.display();
  innerRightPillar.display();
  middleRightPillar.display();
  RightPillar.display();
  boundrightPillar.display();

}