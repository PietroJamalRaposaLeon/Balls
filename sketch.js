
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var treco1,treco2,treco3;

var engine,world;

var ball1,ball2,ball3,ball4;

var elise,elise2;

var angulo = 60;

var angulo2 = 60;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    var treco1_opition = {
    isStatic: true
	}
	var treco2_opition = {
	isStatic: true
	}
    var treco3_opition = {
    isStatic: true
	}
	var ball1_opition = {
    restitution: 0.95,
    frictionAir:0.01
	}

	engine = Engine.create();
	world = engine.world;
    
    elise = Bodies.rectangle(400,150,200,10,treco1_opition);
    fill("brown");
    World.add(world,elise);

    elise2 = Bodies.rectangle(400,150,200,10,treco1_opition);
    fill("brown");
    World.add(world,elise2);
    

	//Crie os Corpos aqui.
   treco1 = Bodies.rectangle(400,700,800,10,treco1_opition);
   fill("red");
   World.add(world,treco1);
   Engine.run(engine);
   treco2 = Bodies.rectangle(600,400,300,10,treco2_opition);
   fill("red");
   World.add(world,treco2);
   Engine.run(engine);   
   treco3 = Bodies.rectangle(200,400,300,10,treco3_opition);
   fill("red");
   World.add(world,treco3);
   Engine.run(engine); 
   
   ball1 = Bodies.circle(400,-10,20,ball1_opition);
   World.add(world,ball1);
 
   ball2 = Bodies.circle(500,-90,20,ball1_opition);
   World.add(world,ball2);

   ball3 = Bodies.circle(300,50,20,ball1_opition);
   World.add(world,ball3);

   ball4 = Bodies.circle(200,0,20,ball1_opition);
   World.add(world,ball4);

}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("lightgreen");

  Matter.Body.rotate(elise,angulo);
  angulo = angulo +30;
  push();
  translate(elise.position.x,elise.position.y);
  rotate(angulo);
  rect(0,0,200,10);
  pop();

  Matter.Body.rotate(elise2,angulo2);
  angulo2 = angulo2 -40;
  push();//abre configurações
  translate(elise2.position.x, elise2.position.y);//faz girar a partir do centro
  rotate(angulo2); // pega o angulo pra rotação
  rect(0,0,200,10);
  pop();

  rect(treco1.position.x,treco1.position.y,800,10);
  rect(treco2.position.x,treco2.position.y,300,10);
  rect(treco3.position.x,treco3.position.y,300,10);
  ellipse(ball1.position.x,ball1.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,20);
  ellipse(ball3.position.x,ball3.position.y,20);
  ellipse(ball4.position.x,ball4.position.y,20);
  drawSprites();
 
}



