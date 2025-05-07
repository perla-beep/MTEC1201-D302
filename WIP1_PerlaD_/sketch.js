function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(195, 236, 250);
  stroke(0)
  //ellipse(400,400,20,20)
  //quad(350,500,300,800,500,800,450,500,)

  //grass
  fill(147, 245, 140)
  rect(0,450,width,height/2)

  //road
  fill(247, 188, 111)
  triangle(250,800,400,400,550,800)

  //house
  fill(247, 148, 246)
  rect(300,350,200,150)
  triangle(300,350,500,350,400,250)

  //door
  noStroke();
  fill(217, 140, 245)
  ellipse(400,440,45,45)
  rect(378,440,45,60)

  Tree(200,300)
}

function Tree(x,y){
  push();
  strokeWeight(50);
  stroke(99, 58, 39);
  line(x,y,x,y+200);
  strokeWeight(40);
  stroke(143, 81, 53);
  line(x,y,x,y+200);

  fill(46, 120, 48);
  stroke(46, 120, 48)
  circle(x,y-50,80);
  circle(x-50,y-20,80);
  circle(x+50,y-20,80);
  circle(x-39,y+40,80);
  circle(x+40,y+40,80);
  pop();
}