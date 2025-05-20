// click door to enter inside house
// P to be able to add flowers to grass
// R to reset flowers

let scene = 3;
let flowers = [];
let open = 0


function preload(){
  mh = loadImage("images/mousehouse.png")
  doll = loadImage("images/doll.png")
  mh2 = loadImage("images/mousehousev2.png")
}

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES)
}

function draw() {
  if (scene == 1){
    scene1();
  }

  if (scene == 2){
    scene2();
  }

  if (scene == 3){
    scene3();
  }

  if (scene == 4){
    scene4();
  }

function Tree(x,y,r,g,b){
  push();
  strokeWeight(50);
  stroke(99, 58, 39);
  rect(x,y,5,200)

  fill(r,g,b);
  stroke(46, 120, 48)
  circle(x,y-50,80);
  circle(x-50,y-20,80);
  circle(x+50,y-20,80);
  circle(x-39,y+40,80);
  circle(x+40,y+40,80);
  pop();
}

function Window(x,y,r,g,b){
  push();
  rectMode(CENTER);

  stroke(255); // White outline
  strokeWeight(6);
  fill(r, g, b); // Light blue window glass
  rect(x, y, 50, 50); // Outer window

  stroke(255);
  strokeWeight(4);
  line(x - 20, y, x + 20, y); // Horizontal divider
  line(x, y - 20, x, y + 20); // Vertical divider
  pop();

}

function Back(x,y){
  push();
  textAlign(CENTER)
  fill(0)
  textSize(15)
  text("Go Back",x-15,y-25,70,50)
  textSize(50)
  text("▼",x,y,45,50)
  //text("dijef",x,y,width,height)
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
  fill(255, 255, 255)
  ellipse(400,440,50,50)
  rect(376,440,49,60)
  fill(232, 219, 102)
  ellipse(400,440,45,45)
  rect(378,440,45,60)
 
  Window(340,420,135, 206, 250)
  Window(460,420,135, 206, 250)
  Tree(150,300,46, 120, 48)
  Tree(650,300,46, 120, 48)

  for (let i = 0; i < flowers.length; i++) {
    flowers[i].sway();
    flowers[i].display();
  }


}

function scene2(){ // inside house
  background(275)
  stroke(0)
  fill(221, 166, 237)//ceiling color
  line(0,800,200,600)
  line(0,0,200,200)
  line(800,0,600,200)
  line(800,800,600,600)
  fill(255, 194, 240)//wall color
  quad(0,0,0,800,200,600,200,200)
  rect(200,200,400,400)
  quad(800,800,600,600,600,200,800,0)
  fill(178, 250, 170)// floor color
  quad(0,800,200,600,600,600,800,800)
  
  noStroke();
  fill(51, 51, 51)
  ellipse(230,580,20,20)
  rect(220,580,20,20)

  Back(380,750);
  //rect(x,y,w,h)
}

function scene3(){ // mouse home
  image(mh,0,0,width,height)
  image(doll,640,550,100,100)

  Back(380,750);
}

function scene4(){ //mouse house scary
  image(mh2,0,0,width,height)
  fill(0)
  rect(0, 0, width, height / 2 * (1 - open))
  rect(0, height- height / 2 * (1 - open), width, height / 2 * (1 - open))
  if (open < 1) {
    open += 0.0040; 
  }

  Back(380,750);
}



}

function mousePressed(){
  if(scene == 1 && mouseX > 378 && mouseX < 423 && mouseY > 440 && mouseY<500){
    scene = 2
  }
  else if(scene == 2 && mouseX > 380 && mouseX<423 && mouseY > 750 && mouseY<800) {
    scene = 1
  }

  if(scene == 2 && mouseX > 220 && mouseX < 240 && mouseY > 560 && mouseY < 600){
    scene = 3
  }
  else if(scene == 3 && mouseX > 380 && mouseX<423 && mouseY > 750 && mouseY<800) {
    scene = 2
}

  if(scene == 3 && mouseX > 640 && mouseX < 740 && mouseY > 550 && mouseY < 650){
    scene = 4
  }
  else if(scene == 4 && mouseX > 380 && mouseX<423 && mouseY > 750 && mouseY<800){
    scene = 5
  }

}

function keyPressed(){
  if (key == 'r' || key =='R'){
    flowers = [];
  }

  if (scene == 1 && mouseY > 450 && key == 'p' || key == 'P') {
    let petalColor = color(random(200,255), random(150,255), random(180,255));
    flowers.push(new Flower(mouseX, mouseY, petalColor));
  }
}



class Flower {
  constructor(x, y, petalColor) {
    this.x = x;
    this.y = y;
    this.petalColor = petalColor;
    this.angle = random(0, 360);
  }

  sway() {
    this.angle += 1;// changes how fast it rotates
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.angle) * 5;
    noStroke();
    fill(this.petalColor);
    for (let i = 0; i < 6; i++) {
      ellipse(0, 10, 20, 40);
      rotate(60);
    }
    fill(255, 255, 200);
    ellipse(0, 0, 20, 20);
    pop();
  }
}
