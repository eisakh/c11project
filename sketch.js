var run,bomb,coin,road,power,energy,line,linee
var roadImg,runAnimation,bombImg,coinImg,runAnimation,energyImg


function preload(){
 roadImg=loadImage("path.png") 
 bombImg=loadImage("bomb.png")
coinImg=loadImage("coin.png")
runAnimation=loadAnimation("Runner-1.png","Runner-2.png")
energyImg=loadImage("energyDrink.png")
}

function setup(){
  background(0);
  createCanvas(400, 400);
 
  line=createSprite(80,310,1,100)










road =createSprite(200,200)
road.addImage(roadImg)
road.velocityY=3



run=createSprite(200,310)
run.addAnimation("running",runAnimation)
run.scale=0.05


}

function draw(){
  run.x = World.mouseX;
  background("black")
  
  run.collide(line);


  drawSprites()
  
  var select_sprites=Math.round(random(1,3))
  
 

if(frameCount% 100== 0){
if (select_sprites==1){
  createbomb()
}else (select_sprites==2)
{
createcoin()
}



}

var select_sprites=Math.round(random(1))
  
 

if(frameCount% 300== 0){
if (select_sprites==1){
  createEnergy()
}
}


if(road.y>400){

road.y=height/2

}
}

function createbomb(){
bomb=createSprite(random(80,320),40,10,10)
bomb.addImage(bombImg)
bomb.velocityY=2
bomb.scale=0.08
bomb.lifetime=150

}


function createcoin(){
coin=createSprite(random(80,320),40,10,10)
coin.addImage(coinImg)
coin.velocityY=2
coin.scale=0.4
coin.lifetime=150
}







function createEnergy(){
  energy=createSprite(random(80,320),40,10,10)
  energy.addImage(energyImg)
  energy.velocityY=2
  energy.scale=0.08
  energy.lifetime=150
}
  

