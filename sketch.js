var recT, move;

function setup() {
  createCanvas(800,800);

  recT=createSprite(400, 400, 50, 80);
  move=createSprite(200,300,70,50)

  recT.shapeColor="orange"
  move.shapeColor="orange"
}

function draw() {
  background(255,255,255); 

  move.y=World.mouseY 
  move.x=World.mouseX

  if(move.x-recT.x < recT.width/2+move.width/2 && recT.x-move.x < recT.width/2+move.width/2 && move.y-recT.y < recT.height/2+move.height/2 && recT.y-move.y < recT.height/2+move.height/2){
    move.shapeColor="pink"
    recT.shapeColor="pink"
  }
  
  else{
    move.shapeColor="orange"
    recT.shapeColor="orange"
  }
  drawSprites();
}