var pacman,pacmanImg;
var g1,g1Img;
var g2,g2Img;
var g3,g3Img;
var g4,g4Img;
var dotImg;
var SpDot;

var edges;

function preload() {
    pacmanImg=loadAnimation("pacman1.png","pacman2.png");
g1Img=loadImage("G1.png");
g2Img=loadImage("G2.png");
g3Img=loadImage("G3.png");
g4Img=loadImage("G4.png");

dotImg=loadImage("Coins.png");
}
function setup() {
createCanvas(1690,836);
       
    pacman = createSprite(140 ,760,40,40);
    pacman.addAnimation("pacman",pacmanImg);
    pacman.scale=0.6

g1 = createSprite(820,400,40,40);
g1.addImage(g1Img);
g1.scale=0.2;

g2 = createSprite(740,400,40,40);
g2.addImage(g2Img);
g2.scale=0.2;

g3 = createSprite(650,400,40,40);
g3.addImage(g3Img);
g3.scale=0.2;

g4 = createSprite(890,400,40,40);
g4.addImage(g4Img);
g4.scale=0.2;


//LEFT SIDE DOTS
var d1 =createSprite(130,140,20,20);
d1.addImage(dotImg);
var d2 =createSprite(130,200,20,20);
d2.addImage(dotImg);
var d3 =createSprite(130,260,20,20);
d3.addImage(dotImg);
var d4 =createSprite(130,320,20,20);
d4.addImage(dotImg);
var d5 =createSprite(130,380,20,20);
d5.addImage(dotImg);
var d6 =createSprite(130,440,20,20);
d6.addImage(dotImg);
var d7 =createSprite(130,500,20,20);
d7.addImage(dotImg);
var d8 =createSprite(130,560,20,20);
d8.addImage(dotImg);
var d9 =createSprite(130,620,20,20);
d9.addImage(dotImg);
var d10 =createSprite(130,680,20,20);
d10.addImage(dotImg);


//RIGHT SIDE DOTS
var d11 =createSprite(1470,140,20,20);
d11.addImage(dotImg);
var d12 =createSprite(1470,200,20,20);
d12.addImage(dotImg);
var d13 =createSprite(1470,260,20,20);
d13.addImage(dotImg);
var d14 =createSprite(1470,320,20,20);
d14.addImage(dotImg);
var d15 =createSprite(1470,380,20,20);
d15.addImage(dotImg);
var d16 =createSprite(1470,440,20,20);
d16.addImage(dotImg);
var d17 =createSprite(1470,500,20,20);
d17.addImage(dotImg);
var d18 =createSprite(1470,560,20,20);
d18.addImage(dotImg);
var d19 =createSprite(1470,620,20,20);
d19.addImage(dotImg);
var d20 =createSprite(1470,680,20,20);
d20.addImage(dotImg);


//TOP DOTS
var d21 =createSprite(280,80,20,20);
d21.addImage(dotImg);
var d22 =createSprite(340,80,20,20);
d22.addImage(dotImg);
var d23 =createSprite(400,80,20,20);
d23.addImage(dotImg);
var d24 =createSprite(460,80,20,20);
d24.addImage(dotImg);
var d25 =createSprite(520,80,20,20);
d25.addImage(dotImg);
var d26 =createSprite(580,80,20,20);
d26.addImage(dotImg);
var d27 =createSprite(640,80,20,20);
d27.addImage(dotImg);
var d28 =createSprite(720,80,20,20);
d28.addImage(dotImg);
var d29 =createSprite(780,80,20,20);
d29.addImage(dotImg);
var d30 =createSprite(840,80,20,20);
d30.addImage(dotImg);
var d31 =createSprite(900,80,20,20);
d31.addImage(dotImg);
var d32 =createSprite(960,80,20,20);
d32.addImage(dotImg);
var d33 =createSprite(1020,80,20,20);
d33.addImage(dotImg);
var d34 =createSprite(1080,80,20,20);
d34.addImage(dotImg);
var d35 =createSprite(1140,80,20,20);
d35.addImage(dotImg);
var d36 =createSprite(1200,80,20,20);
d36.addImage(dotImg);
var d37 =createSprite(1260,80,20,20);
d37.addImage(dotImg);
var d38 =createSprite(1320,80,20,20);
d38.addImage(dotImg);


//BOTTOM DOTS
var d39 =createSprite(280,760,20,20);
d39.addImage(dotImg);
var d40 =createSprite(340,760,20,20);
d40.addImage(dotImg);
var d41 =createSprite(400,760,20,20);
d41.addImage(dotImg);
var d42 =createSprite(460,760,20,20);
d42.addImage(dotImg);
var d43 =createSprite(520,760,20,20);
d43.addImage(dotImg);
var d44 =createSprite(580,760,20,20);
d44.addImage(dotImg);
var d45 =createSprite(640,760,20,20);
d45.addImage(dotImg);
var d46 =createSprite(720,760,20,20);
d46.addImage(dotImg);
var d47 =createSprite(780,760,20,20);
d47.addImage(dotImg);
var d48 =createSprite(840,760,20,20);
d48.addImage(dotImg);
var d49 =createSprite(900,760,20,20);
d49.addImage(dotImg);
var d50 =createSprite(960,760,20,20);
d50.addImage(dotImg);
var d51=createSprite(1020,760,20,20);
d51.addImage(dotImg);
var d52 =createSprite(1080,760,20,20);
d52.addImage(dotImg);
var d53 =createSprite(1140,760,20,20);
d53.addImage(dotImg);
var d54 =createSprite(1200,760,20,20);
d54.addImage(dotImg);
var d55 =createSprite(1260,760,20,20);
d55.addImage(dotImg);
var d56 =createSprite(1320,760,20,20);
d56.addImage(dotImg);


//LEFT SIDE :2
var d57 =createSprite(280,140,20,20);
d57.addImage(dotImg);
var d58 =createSprite(280,200,20,20);
d58.addImage(dotImg);
var d59 =createSprite(280,260,20,20);
d59.addImage(dotImg);
var d60 =createSprite(280,320,20,20);
d60.addImage(dotImg);
var d61 =createSprite(280,380,20,20);
d61.addImage(dotImg);
var d62 =createSprite(280,440,20,20);
d62.addImage(dotImg);
var d63 =createSprite(280,500,20,20);
d63.addImage(dotImg);
var d64 =createSprite(280,560,20,20);
d64.addImage(dotImg);
var d65 =createSprite(280,620,20,20);
d65.addImage(dotImg);
var d66 =createSprite(280,680,20,20);
d66.addImage(dotImg);


//RIGHT SIDE DOTS:2
var d67 =createSprite(1320,140,20,20);
d67.addImage(dotImg);
var d68 =createSprite(1320,200,20,20);
d68.addImage(dotImg);
var d69 =createSprite(1320,260,20,20);
d69.addImage(dotImg);
var d70 =createSprite(1320,320,20,20);
d70.addImage(dotImg);
var d71 =createSprite(1320,380,20,20);
d71.addImage(dotImg);
var d72 =createSprite(1320,440,20,20);
d72.addImage(dotImg);
var d73 =createSprite(1320,500,20,20);
d73.addImage(dotImg);
var d74 =createSprite(1320,560,20,20);
d74.addImage(dotImg);
var d75 =createSprite(1320,620,20,20);
d75.addImage(dotImg);
var d76 =createSprite(1320,680,20,20);
d76.addImage(dotImg);


//LEFT SIDE DOTS:3
var d77 =createSprite(460,200,20);
d77.addImage(dotImg);
var d78 =createSprite(460,260,20,20);
d78.addImage(dotImg);
var d79 =createSprite(460,320,20,20);
d79.addImage(dotImg);
var d80 =createSprite(460,380,20,20);
d80.addImage(dotImg);
var d81 =createSprite(460,440,20,20);
d81.addImage(dotImg);
var d82 =createSprite(460,500,20,20);
d82.addImage(dotImg);
var d83 =createSprite(460,560,20,20);
d83.addImage(dotImg);
var d84 =createSprite(460,620,20,20);
d84.addImage(dotImg);

//RIGHT SIDE DOTS:3
var d85 =createSprite(1080,200,20);
d85.addImage(dotImg);
var d86 =createSprite(1080,260,20,20);
d86.addImage(dotImg);
var d87 =createSprite(1080,320,20,20);
d87.addImage(dotImg);
var d88 =createSprite(1080,380,20,20);
d88.addImage(dotImg);
var d89 =createSprite(1080,440,20,20);
d89.addImage(dotImg);
var d90 =createSprite(1080,500,20,20);
d90.addImage(dotImg);
var d91 =createSprite(1080,560,20,20);
d91.addImage(dotImg);
var d92 =createSprite(1080,620,20,20);
d92.addImage(dotImg);

//TOP SIDE DOTS:2
var d93 =createSprite(520,200,20,20);
d93.addImage(dotImg);
var d94 =createSprite(580,200,20,20);
d94.addImage(dotImg);
var d95 =createSprite(640,200,20,20);
d95.addImage(dotImg);
var d96 =createSprite(720,200,20,20);
d96.addImage(dotImg);
var d97 =createSprite(780,200,20,20);
d97.addImage(dotImg);
var d98 =createSprite(840,200,20,20);
d98.addImage(dotImg);
var d99 =createSprite(900,200,20,20);
d99.addImage(dotImg);
var d100 =createSprite(960,200,20,20);
d100.addImage(dotImg);
var d101 =createSprite(1020,200,20,20);
d101.addImage(dotImg);



//SPECIAL DOTS
var s1 =createSprite(130,80,30,30);

var s2 =createSprite(1470,80,30,30);

var s3 =createSprite(1460,760,30,30);



w1 = createSprite(55,418,10,800);

w2 = createSprite(1545,418,10,800);

w3 = createSprite(800,825,1500,10);

w4 = createSprite(800,10,1500,10);

//top second layer
w5 =  createSprite(700,155,610,10);

//bottom second layer 
w6 =  createSprite(780,675,770,10);

//left side second layer
w7 =  createSprite(400,418,10,510);

//right side second layer
w8 =  createSprite(1160 ,418,10,520);

//top layer third layer
w9 =  createSprite(760,265,429,10);

//bottom layer third layer
w10 =  createSprite(550,400,10,280);

//left side third layer 
w11 =  createSprite(980,400,10,280 );

//right side third layer
w12 =  createSprite(705,540,320,10);

w13 = createSprite(200,418,10,510)

w14 = createSprite(1400,418,10,510)



}

function draw() {
background("black");  

edges=createEdgeSprites();


g1.addSpeed(0.5,20)
g2.addSpeed(0.5,30)
g3.addSpeed(0.5,45)
g4.addSpeed(0.5,50)

g1.bounceOff(w1)
g1.bounceOff(w2)
g1.bounceOff(w3)
g1.bounceOff(w4)
g1.bounceOff(w5)
g1.bounceOff(w6)
g1.bounceOff(w7)
g1.bounceOff(w8)
g1.bounceOff(w9)
g1.bounceOff(w10)
g1.bounceOff(w11)
g1.bounceOff(w12)
g1.bounceOff(w13)
g1.bounceOff(w14)
g1.bounceOff(edges)

g2.bounceOff(w1)
g2.bounceOff(w2)
g2.bounceOff(w3)
g2.bounceOff(w4)
g2.bounceOff(w5)
g2.bounceOff(w6)
g2.bounceOff(w7)
g2.bounceOff(w8)
g2.bounceOff(w9)
g2.bounceOff(w10)
g2.bounceOff(w11)
g2.bounceOff(w12)
g2.bounceOff(w13)
g2.bounceOff(w14)
g2.bounceOff(edges)

g3.bounceOff(w1)
g3.bounceOff(w2)
g3.bounceOff(w3)
g3.bounceOff(w4)
g3.bounceOff(w5)
g3.bounceOff(w6)
g3.bounceOff(w7)
g3.bounceOff(w8)
g3.bounceOff(w9)
g3.bounceOff(w10)
g3.bounceOff(w11)
g3.bounceOff(w12)
g3.bounceOff(w13)
g3.bounceOff(w14)
g3.bounceOff(edges)

g4.bounceOff(w1)
g4.bounceOff(w2)
g4.bounceOff(w3)
g4.bounceOff(w4)
g4.bounceOff(w5)
g4.bounceOff(w6)
g4.bounceOff(w7)
g4.bounceOff(w8)
g4.bounceOff(w9)
g4.bounceOff(w10)
g4.bounceOff(w11)
g4.bounceOff(w12)
g4.bounceOff(w13)
g4.bounceOff(w14)
g4.bounceOff(edges)



if(keyDown(RIGHT_ARROW)){
    pacman.x=pacman.x+4;
}
if(keyDown(LEFT_ARROW)){
    pacman.x=pacman.x-4;
}
if(keyDown(UP_ARROW)){
    pacman.y=pacman.y-4;
}
if(keyDown(DOWN_ARROW)){
    pacman.y=pacman.y+4;
}








 
drawSprites();

}


function L1(){

}