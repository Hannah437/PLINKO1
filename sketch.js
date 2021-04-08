const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var divisions = []
var plinkos = []
var particles = []

function setup() {
  createCanvas(480,600);
  engine = Engine.create();
  console.log(engine);
  world = engine.world

  ground = new Ground();

  for(var i = 0; i< 480; i= i+70){
    divisions.push(new Division(i))
  }

  for(var i = 50; i< 480; i= i+50){
    plinkos.push(new Plinko(i, 100))

  }
  for(var i = 25; i< 480; i= i+50){
    plinkos.push(new Plinko(i, 150))

  }
  for(var i = 50; i< 480; i= i+50){
    plinkos.push(new Plinko(i, 200))

  }
  for(var i = 25; i< 480; i= i+50){
    plinkos.push(new Plinko(i, 250))

  }
  for(var i = 50; i< 480; i= i+50){
    plinkos.push(new Plinko(i, 300))

  }
  
}

function draw() {
  background("black");  
  Engine.update(engine);

  ground.display();

  if(frameCount%60 ===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10,10))
  }
  
  for(var i =0; i< divisions.length; i++){
    divisions[i].display();
  }

  for(var i =0; i< plinkos.length; i++){
    plinkos[i].display();
  }
  for(var i = 0; i < particles.length; i++ ){
    particles[i].display();
  }
}