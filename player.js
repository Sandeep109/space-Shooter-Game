var p;
var size;
var heading;
var pVel;
var force;
var boostColor;
var touch;
var playerColor;
var Score;
var Health;

function updatePlayer() {
    boostColor = color(0)
        //move and rotate player 
        
      
    if (keyIsDown(LEFT_ARROW)) {
        heading -= 6;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        heading += 6;
    }
    if (keyIsDown(UP_ARROW)) {
        force = p5.Vector.fromAngle(radians(heading));
        pVel.add(force.mult(0.2));
        push();
        translate(p.x, p.y);
        rotate(radians(heading));
        //flame stuff
    
    
        
        imageMode(CENTER)
            image(boost,-size - 30, size * -.0,size*4,size*2) 
            pop();
    }
 
        //contain player
    if (p.x > displayWidth) {
        p.x = 0
    }
    if (p.x < 0) {
        p.x = displayWidth
    }
    if (p.y > displayHeight-125) {
        p.y = 0
    }
    if (p.y < 0) {
        p.y = displayHeight-125
    }


    //update player location
    pVel.mult(0.978);
    p.add(pVel);
    //draw the player
    push();
    translate(p.x, p.y);
    rotate(radians(heading));
    //flame stuff


    
 
    //health


    fill(playerColor);
    imageMode(CENTER)
    image(pI,size , -size/10 ,size*6,size*6)
    
    pop();
    fill(255);
    text(Health, p.x - 20, p.y + 45)

    fill(255);
    text(Score, 25, 25);

}


////line(lasers[i].x, lasers[i].y, lasers[i].x + laserVel[i].x * 4, lasers[i].y + laserVel[i].y * 4)