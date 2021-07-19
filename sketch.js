var seaImg, sea;
var emyImg, emy, emyGroup;
var fsh, fshImg;
var gameState = "play"
var wm, wmImg, wmGroup, food;
food=0;

function preload(){
  seaImg = loadImage("seap.png");
  emyImg = loadImage("emy.png");
  fshImg = loadImage("animal-clipart-fish-16.png");
  wmImg = loadImage("unnamed.png");
}

function setup() {
  
  createCanvas(600, 600);
  
  sea = createSprite(300,300);
  sea.addImage("seas",seaImg);
  sea.velocityX = 1;
  emyGroup= new Group();
  wmGroup= new Group();
  fsh=createSprite(300, 300);
  fsh.addImage(fshImg);
  fsh.scale=0.03
}

function draw() {
  background(200);
  edges= createEdgeSprites();
  fsh.collide(edges);
  if(gameState=="play"){
    if(keyDown("left_arrow")){
      fsh.x=fsh.x-2;
     }
     if(keyDown("right_arrow")){
       fsh.x=fsh.x+2;
      }
      if(keyDown("up_arrow")){
       fsh.y=fsh.y-2;
      }
      if(keyDown("down_arrow")){
        fsh.y=fsh.y+2;
       }
     
 
    if(fsh.isTouching(wmGroup)){
     food=food+1
     wm.destroy();
      }

  if(fsh.isTouching(emyGroup)){
    fsh.destroy();
    gameState="end";
    sea.velocityX=0;
  }
  if(sea.x > 400){
      sea.x = 200;
    }
     
   emyspawn();
   wmspawn();
  }
  drawSprites();
  text("Food: "+ food, 100, 100);
  if(gameState=="end"){
    emyGroup.destroyEach();
    wmGroup.destroyEach();
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 225, 300);
  }
}

 
function emyspawn(){
  if(frameCount % 300 == 0){
    emy=createSprite(-50, 120);
    emy.scale=0.2
    emy.addImage(emyImg);
    emy.y=Math.round(random(120, 400));
    emy.velocityX= 1;
    emy.lifetime=800;
    emyGroup.add(emy);

  }
}
function wmspawn(){
    if(frameCount % 200 == 0){
      wm=createSprite(-50, 120);
      wm.scale=0.2
      wm.addImage(wmImg);
      wm.y=Math.round(random(120, 400));
      wm.velocityX= 3.5;
      wm.lifetime=800;
      wmGroup.add(wm);
  
    }
  }