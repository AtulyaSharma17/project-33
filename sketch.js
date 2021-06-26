var snowflake,snowflakeImg
var bgImg

function preload() {
  snowflakeImg = loadImage("snow4.webp");
  bgImg = loadImage("snow2.jpg")
}


function setup() {
  createCanvas(800,600);
 
}

function draw() {
  background(bgImg);  
  drawSprites();
  createSnowflake();
}

function createSnowflake(){
  if(frameCount%10===0){
  snowflake = createSprite(random(0,900), 0, 30, 30);
  snowflake.velocityX = -2;
  snowflake.velocityY = 4;
  snowflake.addImage(snowflakeImg);
  snowflake.scale = 0.1;
  }
}
