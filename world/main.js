var xpos = 50
var ypos = 50
var diameter = 30
var xspeed = 10
var yspeed = 7;


function setup() {
    createCanvas(1000, 800);
    background(0);
}

function draw() {
    ellipse(xpos, ypos ,diameter ,diameter);
    xpos += xspeed;
    ypos += yspeed;
    
    if(xpos >=width || xpos <=0){
        xspeed *= -1
    }
    if(ypos >=height || ypos <=0){
        yspeed *= -1
    }
}

console.log("this is a test")