function setup() {
  createCanvas(800,800);
  fixed_rect=createSprite(600, 400, 50, 80);
  fixed_rect.shapeColor = "green";
  moving_rect=createSprite(400, 200, 50, 80);
  moving_rect.shapeColor = "green";
}

function draw() {
  background(0);  

moving_rect.x=World.mouseX;
moving_rect.y=World.mouseY;

if(moving_rect.x-fixed_rect.x<fixed_rect.width/2+moving_rect.width/2&&
  fixed_rect.x-moving_rect.x<fixed_rect.width/2+moving_rect.width/2&&
  moving_rect.y-fixed_rect.y<fixed_rect.width/2+moving_rect.width/2&&
  fixed_rect.y-moving_rect.y<fixed_rect.width/2+moving_rect.width/2){
    fixed_rect.shapeColor = "red";
    moving_rect.shapeColor = "red";}
    else{
      fixed_rect.shapeColor = "green";
      moving_rect.shapeColor = "green";


    }
  

  drawSprites();
}