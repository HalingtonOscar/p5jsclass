var diameter = 30

function setup() {
    createCanvas(1000, 800);

}

function draw() {
     
    background(0);

    for(var xpos = 25; xpos < width; xpos +=35){
        for(var ypos = 25; ypos < height; ypos +=35){
            fill(random(0), random(255), random(255));
            
            ellipse(xpos, ypos ,diameter ,diameter);
        }
    }
   
}