var tom,tomImg,tomImg1;
var bgImg;
var jerry,jerryImg,jerryImg1;
function preload() {
    //load the images here
    tomImg=loadAnimation("images/cat1.png");
    jerryImg=loadAnimation("images/mouse1.png");
    tomImg1=loadAnimation("images/cat2.png","images/cat3.png");
    jerryImg1=loadAnimation("images/mouse2.png","images/mouse3.png");
  bgImg=loadImage("images/garden.png");










}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(700,650,20,20);
    tom.addAnimation("cat",tomImg);
    tom.addAnimation("cat1",tomImg1);
    tom.velocityX=2;
    tom.scale=0.2;
    jerry=createSprite(300,650,20,20);
    jerry.velocityX=2;
    jerry.addAnimation("mouse",jerryImg);
    jerry.addAnimation("mouse1",jerryImg1);
    jerry.scale=0.2;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<(tom.width-mouse.width)/2)
    {
        tom.velocityX=0;
        jerry.velocityX=0;
        jerry.addAnimation("jerryRunning",tomImg1);
        jerry.changeAnimation("jerryRunning");
       tom.addAnimation("catRunning",tomImg1);
       tom.changeAnimation("catRunning");
       
      
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown(LEFT_ARROW))
  {
     jerry.addAnimation("mouseTeasing",mouseImg1);
     jerry.changeAniamtion("mouseTeasing");
     jerry.frameDelay=25;

  }
  if(keyDown(RIGHT_ARROW))
  {
      jerry.addAnimation("mouse2",jerryImg1);
      jerry.changeAnimation("mouse2");
      jerry.frameDelay=25;
  }
if(keyDown(LEFT_ARROW))
{
    tom.addAnimation("tomTeasing",tomImg1);
    tom.changeAnimation("tomTeasing");
    tom.frameDelay=25;
}
if(keyDown(RIGHT_ARROW))
{
    tom.addAnimation("tom2",tomImg1);
    tom.changeAnimation("tom2");
    tom.frameDelay=25;
}

}
