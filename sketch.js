var pI,BI,BGI,boost,laser;

var booster

function preload() {
    laserSound = loadSound('laser.ogg');
    deathSound = loadSound('death.ogg');
    pI = loadImage("player.png");
    BI = loadImage("asteroid.png");
    BGI = loadImage("bg.jpg")
    boost = loadImage("boost.png")
    laser = loadImage("laser.jpg")
}



function setup() {
    createCanvas(displayWidth,displayHeight-125);
    p = createVector(width / 2, height / 2)
    pVel = createVector(0, 0);
    force = createVector(0, 0);
    size = 10;
    heading = 0;
    boostColor = color(0, 255, 0);
    playerColor = color(255);
    Score = 0;
    Health = 200;
    bb = [];
    bbVel = [];
    bbSize = 25;

    for (var i = 0; i < 5; i++) {
        bb.push(createVector(random(0, width), random(0, height)));
        bbVel.push(p5.Vector.random2D().mult(random(0.25, 2.25)));
    }
}

function draw() {
    background(BGI);

    updatePlayer();
    updateBubbles();
    updateLasers();

}