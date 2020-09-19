var fixedRect,movingRect;
 function setup() {
    createCanvas(800,400);
   fixedRect = createSprite(200, 200, 50, 100);
    movingRect = createSprite(400,200,100,50);
     fixedRect.shapeColor = "orange";
      movingRect.shapeColor = "orange";
      fixedRect.debug = true; movingRect.debug = true;
    movingRect.velocityX=-4;
    fixedRect.velocityX=4;
    } 
     function draw() {
        background(0);
        //movingRect.x = mouseX;
         // movingRect.y = mouseY;
          bounceOff(movingRect,fixedRect);
          
             
              drawSprites(); 
            }

