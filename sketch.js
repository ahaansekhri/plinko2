var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var score = 0;
var gamestate = "start";

var particle;
var turn = 0;

var divisionHeight=300;
var score =0;
function setup() {

  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)

  text("Score : "+score,20,30);
  text("100",20,600);
  text("100",100,600);
  text("100",180,600);
  text("250",260,600);
  text("500",340,600);
  text("500",420,600);
  text("250",500,600);
  text("100",580,600);
  text("100",660,600);
  text("100",740,600);
  

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

 
   if(particle != null){
     particle.display();

    if(particle.body.position.y>760){
      
      if(particle.body.position.x<250|| particle.body.position.x>=600){
        score = score + 100;
        particle = null;
        if(turn>= 5){
          gamestate = "end"
        }
      }

      if(particle != null){
        if(particle.body.position.x>=301 && particle.body.position.x<=499){
          score = score + 500;
          particle = null;
          if(turn>= 5){
            gamestate = "end"
          }
        }
      }

      if(particle != null){
        if(particle.body.position.x>=251 && particle.body.position.x<=300){
          score = score + 250;
          particle = null;
          if(turn>= 5){
            gamestate = "end"
          }
        }
      }

      if(particle != null){
        if(particle.body.position.x>=500 && particle.body.position.x<=550){
          score = score + 250;
          particle = null;
          if(turn>= 5){
            gamestate = "end"
          }
        }
      }
    }
   }
     
   

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(gamestate === 'end'){
     textSize(50);
     text("Gameover!",300,320);
   }
}

function mousePressed(){
  if(gamestate != "end"){
    particle = new Particle(mouseX,15,10)
    turn++;
  }
}