var garden,rabbit;
var gardenImg,rabbitImg;
var apple;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

spawnApples();

function draw() {
  background(0);

  var selecao=Math.round(random(1,3));
  if (frameCount)
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  rabbit.x=World.mouseX;
  
}

function spawnApples(){
  apple = createSprite(random(50,350),50,20,20);
  apple.addImage(appleImg);
  apple.scale=0.07;
  apple.velocityY=3;
  apple.lifeTime=300;
}

