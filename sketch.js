var spaceShip;
var spaceShipImage;
var bg,bgImage;
var astronaut,astronautImage,astronautGroup;
var asteroid,asteroidImage,asteroidGroup;
var score=0;      

function preload(){
    spaceShipImage=loadImage("./spaceship.png")
    bgImage=loadImage("./spaceBG.jpg")
    astronautImage=loadImage("./Astronaut.png")
    asteroidImage=loadImage("./Asteroid.png")
}

function setup(){
  createCanvas(windowWidth,windowHeight);

  bg=createSprite(width/2,height/2,width,height);
  bg.addImage(bgImage);
  bg.velocityY=4

  spaceShip=createSprite(width/2,height-200);
  spaceShip.addImage(spaceShipImage);
  spaceShip.scale=0.5
  spaceShip.debug=false
  spaceShip.setCollider("circle",0,0,200)

  astronautGroup=new Group()
  asteroidGroup=new Group()

   

  
}

function draw() {
  if (bg.y>height){
    bg.y=height/2
  }

  if (keyDown("left")&& spaceShip.x>0){
    spaceShip.x-=15

  }

  if (keyDown("right")&& spaceShip.x<width){
    spaceShip.x+=15

  }

  if (spaceShip.isTouching(astronautGroup)){
    for(var i=0; i<astronautGroup.length; i++){
      if(spaceShip.isTouching(astronautGroup[i])){
        astronautGroup[i].destroy()
      }
    }
    score+=10
  }

  spawnAstronaut()
  spawnAsteroid()
  drawSprites()
  fill("white")
  textSize(30)
  text("Score : "+score,width/3-500,50)
 
}


function spawnAstronaut(){
    var randomFrames=Math.round(random(100,200));
    if (frameCount%randomFrames==0){ 
        astronaut=createSprite(random(100,width-100),-50)
        astronaut.addImage(astronautImage)
        astronaut.velocityY=2;
        astronaut.lifetime=height/2
        astronaut.scale=0.2;
        astronautGroup.add(astronaut)
    }
    
}

function spawnAsteroid(){
  var randomFrames=Math.round(random(100,200));
  if (frameCount%randomFrames==0){ 
      asteroid=createSprite(random(100,width-100),-50)
      asteroid.addImage(asteroidImage)
      asteroid.velocityY=4;
      asteroid.lifetime=height/4
      asteroid.scale=0.2;
      asteroidGroup.add(asteroid)
  }
}

