function setup(){ 
    createCanvas(400 ,400 );
}
function draw() {
    background(200 , 200, 200);
    noStroke();
    fill(0,0,0);
    //black pole
    rect(50,20,5,360);
    //black
    rect(55,22,250,40);
    //white
    fill(255,255,255);
    rect(55,62,250,15);
    //red
    fill(146,37,41);
    rect(55,70,250,40);
    //white
    fill(255,255,255);
    rect(55,110,250,15);
    //green
    fill(0,102,0)
    rect(55,118,250,40)
    //shield
    fill(146,37,41)
    ellipse(180,90,40,80)
    //black shield  
    fill(0,0,0) 
    ellipse(165,90,8,40)
    //black shield r
    ellipse(195,90,8,40)
    //white shield ul
    fill(255,255,255)
    ellipse(177,67,3,30)
    //white shield ur
    ellipse(184,67,3,30)
    //white circle
    ellipse(180,90,12,12)
    //white shield dl
    ellipse(178,113,3,30)
    //white shield dr
    ellipse(185,113,3,30)
    //spear 1 l
    fill(0,0,255)
    //triangle(13,60,120,40,130,45)
    //ellipse(164,53,5,35,120)
}