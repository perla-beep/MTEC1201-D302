
//Perla De Santiago
// Instuctions: Press r to make the apples fall and f to put them back
// Press n to turn it into night time
// Press d to turn it into day time
// Click LMB to change the color of the roof and door
// 

let Time = 0;
let t1= 3000;
let t2= 4000;
let xLocation=0;

let xa1=550;
let xa2=580;
let xa3=630;
let xa4=670;
let ya1=420;
let ya2=480;
let ya3=430;
let ya4=490;

let r=250;
let g=179;
let b=65;

function setup(){
  createCanvas(1000,900) //y , x
}

function draw(){
  background(113, 192, 245);
  fill(247, 243, 10);
  noStroke();
  ellipse(800,100,100,100);

  if(Time>t1){
  background(3, 23, 97);
  fill(190, 195, 212);
  ellipse(800,100,100,100);
  fill(245, 242, 105);
  star(300,300);
  star(470,120);
  star(800,450);
  star(100,250);
  star(600,350);
  star(700,50);
  }
  Time=millis();

  if (Time>t2){
    keyPressed();
  }
  
  //tree
  strokeWeight(50);
  stroke(99, 58, 39);
  line(600,500,600,700);
  strokeWeight(40);
  stroke(143, 81, 53);
  line(600,500,600,700);
  fill(46, 120, 48);
  stroke(46, 120, 48);
  circle(600,410,80);
  circle(555,480,80);
  circle(640,480,80);
  circle(555,440,80);
  circle(640,440,80);

  //landscape
  noStroke();
  fill(123, 242, 104);
  rect(0,650,1000,500);
  ellipse(180,750,500,500);//x,y,width,tall
  //house
  fill(245, 196, 118);
  rect(85,350,200,200);//x,y
  fill(r, g, b);
  triangle(85,350,185,250,285,350);
  rect(144,450,80,100);
  //road
  fill(87, 86, 84);
  rect(0,700,1000,170);
  stroke(247, 170, 15);
  strokeWeight(10);
  line(0,780,100,780);
  line(200,780,300,780);
  line(400,780,500,780);
  line(600,780,700,780);
  line(800,780,900,780);
  line(1000,780,1100,780);

  //apples
  fill(255,0,0);
  noStroke();
  ellipse(xa1,ya1,30);
  ellipse(xa2,ya2,30);
  ellipse(xa3,ya3,30);
  ellipse(xa4,ya4,30);
  if (ya1 < 650) {
    ya1 ++;
  }
  if (ya2 < 650) {
    ya2 ++;
  }
  if (ya3 < 650){
    ya3 += 5
  }
  if (ya4 < 650) {
    ya4 += 2;
  }

  flower(200,600);
  flower(100,550);
  flower(300,520);
  flower(50,600);
  flower(350,580);
  flower(800,620);
  flower(900,625);

  //car
  fill(0)
  noStroke();
  ellipse(xLocation-30,740,30,30);
  ellipse(xLocation+30,740,30,30);
  fill(250, 142, 187);
  ellipse(xLocation,700,120,80);
  fill(95, 145, 237,180);
  ellipse(xLocation+30,690,40,30);
  fill(243, 247, 119);
  xLocation=xLocation=xLocation+1
  xLocation+=3;
  if(xLocation>1000){
    xLocation=0;
  }
}

function keyPressed(){
  if (key === 'f'){
    ya1=420
    ya2=480
    ya3=430
    ya4=490
  }
   if (key === 'd'){
    if (t2<Time){
  background(113, 192, 245);
  fill(247, 243, 10);
  noStroke();
  ellipse(800,100,100,100);
    }
  }
  if(key === 'n')
    t1=3000
}


function flower(x,y){
  strokeWeight(2);
  stroke(252, 139, 158);
  fill(247, 69, 99);
  circle(x,y+40,10);
  circle(x,y+60,10);
  circle(x-10,y+45,10);
  circle(x+10,y+45,10);
  circle(x-10,y+55,10);
  circle(x+10,y+55,10);
  fill(239, 247, 126);
  circle(x,y+50,20);
}

function star(x,y){
ellipse(x,y,10,30);
ellipse(x,y,30,10);
}

function mousePressed(){
  r = random(233);
  g = random(150);
  b = random(70);
}
