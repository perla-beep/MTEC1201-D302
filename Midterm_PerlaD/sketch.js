function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);

  flower();
}

function apple(){
let xapple1=320;
let xapple2=390;
let xapple3=400;
let xapple4=450;
let apple1y=380;
let apple2y=410;
let apple3y=340;
let apple4y=450;
let r = 148;
let g = 21;
let b = 21;

  background(113, 192, 245);
  //trunk
  strokeWeight(50);
  stroke(99, 58, 39);
  line(400,400,400,600);
  strokeWeight(40);
  stroke(143, 81, 53);
  line(400,400,400,600);
  //leaves
  fill(46, 120, 48);
  stroke(46, 120, 48)
  circle(400,350,80);
  circle(350,380,80);
  circle(450,380,80);
  circle(361,440,80);
  circle(440,440,80);
  //grass
  noStroke();
  fill(123, 242, 104)
  rect(0,600,900,400)
  //flowers
  fill(247, 69, 99);
  circle(30,650,10);
  circle(25,655,10);
  circle(35,655,10);
  circle(30,660,10);
  fill(239, 247, 126);
  circle(30,655,11);
  fill(247, 69, 99);
  circle(700,650,10);
  circle(695,655,10);
  circle(705,655,10);
  circle(700,660,10);
  fill(239, 247, 126);
  circle(700,655,11);
  //cloud1
  fill(255,255,255);
  noStroke();
  circle(100,100,80);
  circle(60,130,80);
  circle(140,130,80);
  circle(100,130,80);
  //cloud2
  circle(700,100,80);
  circle(660,130,80);
  circle(740,130,80);
  circle(700,130,80);
  //apple
  fill(r,g,b)
  ellipse(xapple1,apple1y,30)
  ellipse(xapple2,apple2y,30)
  ellipse(xapple3,apple3y,30)
  ellipse(xapple4,apple4y,30)
  if (apple1y < 600) {
    apple1y ++;
  }
  if (apple2y < 600) {
    apple2y ++;
  }
  if (apple4y < 600) {
    apple4y +=5;
  }

  //star following cursor
  fill(245, 242, 105)
  ellipse(mouseX,mouseY,10,30)
  ellipse(mouseX,mouseY,30,10)
}
  
function flower(){
  background(100,200,300);
  strokeWeight(20);
  stroke(3,148,20);
  line(400,400,400,600);
  strokeWeight(10);
  stroke(4,184,25);
  line(400,400,400,600);
  strokeWeight(8);
  stroke(252, 139, 158);
  fill(247, 69, 99);
  circle(400,350,60);
  circle(350,380,60);
  circle(450,380,60);
  circle(361,440,60);
  circle(440,440,60);
  fill(239, 247, 126);
  circle(400,400,100);
  fill(255,255,255);
  noStroke();
  circle(200,200,80);
  circle(160,230,80);
  circle(240,230,80);
  circle(200,230,80);
  circle(600,200,80);
  circle(560,230,80);
  circle(640,230,80);
  circle(600,230,80);
}

function png(){


}