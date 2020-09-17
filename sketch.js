var jumper;
var barrier1, barrier2, barrier3,barrier4;

var gameState = 0;
var lives = 3;

function setup(){
createCanvas(400,600);
jumper = createSprite(200,550,10,10);
jumper.shapeColor = color(255,255,255);
barrier1 = createSprite(5,300,10,600);
barrier1.shapeColor = color(255,0,0);
barrier2 = createSprite(395,300,10,600);
barrier2.shapeColor = color(255,0,0);
barrier3 = createSprite(200,595,400,10);
barrier3.shapeColor = color(255,0,0);
 barrier4 = createSprite(200,5,400,10);
 barrier4.shapeColor = color(255,0,0);
}
function draw(){
background(0);
if(gameState === 0){
    var obstacle1,obstacle2;
if(World.frameCount % 120 === 0 ){
    obstacle1 = createSprite(random(50,250),-700,random(10,90),random(10,90));
    obstacle1.shapeColor = color(random(0,255),random(0,255),random(0,255));
    obstacle1.velocityY = 3;
    obstacle2 = createSprite(random(150,350),-900,40,40);
    obstacle2.shapeColor = color(random(0,255),random(0,255),random(0,255));
    obstacle2.velocityY = 3; 
    }
   

console.log(World.frameCount/20);
if (keyWentDown(UP_ARROW)){
jumper.velocityY = -7;
}else if(keyWentUp(UP_ARROW)){
jumper.velocityY = 0;    
}
if (keyWentDown(DOWN_ARROW)){
    jumper.velocityY = 7;
    }else if(keyWentUp(DOWN_ARROW)){
    jumper.velocityY = 0;    
    }



if(keyWentDown(RIGHT_ARROW))
    {
jumper.velocityX = 7;
} 
if(keyWentUp(RIGHT_ARROW)){
    jumper.velocityX = 0;
    }
    if(keyWentDown(LEFT_ARROW)){
        jumper.velocityX = -7;
        }else if(keyWentUp(LEFT_ARROW)){
        jumper.velocityX = 0;
        }
       
   
    if(lives <= 0){
       gameState = 1;
        text("press up arrow to restart",200,300);
    }

}
  if(gameState === 1){
        obstacle1.velocityY = 0;
        obstacle2.velocityY = 0;
        jumper.velocityX = 0;
        jumper.velocityY = 0;
        if(keyDown(UP_ARROW)){
            gameState = 1;
            lives = 3;

        }
    }
    text("lives left: " + lives, 50,50);
    text("Avoid Falling Objects!!!", jumper.x -  50,jumper.y - 20);
camera.position.x = jumper.x;
camera.position.y = jumper.y;
jumper.collide(barrier1);
jumper.collide(barrier2);
jumper.collide(barrier3);
jumper.collide(barrier4);
drawSprites();
}


