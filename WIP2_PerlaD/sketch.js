// click door to enter inside house

let scene = 1;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  if (scene == 1){
    scene1();
  }

  if (scene == 2){
    scene2();
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

function scene1(){ // outside house
  background(195, 236, 250);
  stroke(0)

  //grass
  fill(147, 245, 140)
  rect(0,450,width,height/2)

  //road
  fill(247, 188, 111)
  triangle(250,800,400,400,550,800)

  //house
  fill(243, 255, 153)
  rect(300,350,200,150)

  fill(253,164,117)
  triangle(300,350,500,350,400,250)

  //door
  noStroke();
  fill(232, 219, 102)
  ellipse(400,440,45,45)
  rect(378,440,45,60)
 
  Tree(150,300)

}
}

function scene2(){ // inside house
  background(243, 255, 153)
  fill(0)
  quad(150,400,100,800,700,800,700,400,)
  //quad(x,y,x,y,x,y,x,y,)
  //rect(x,y,w,h)
}

function mousePressed(){
  if(scene == 1 && mouseX > 378 && mouseX < 423 && mouseY > 440 && mouseY<500){
    scene = 2
  }
}
