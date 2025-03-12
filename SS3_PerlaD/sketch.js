/* Perla DS - "Apples falling from tree UPDATED" 
This sketch ties with my theme because its something calming and I
can use a mix of cute colors*/
//Click screen to change apple colors

let xapple1=320;
let xapple2=390;
let xapple3=400;
let xapple4=450;

let apple1y=380;
let apple2y=410;
let apple3y=340;
let apple4y=450;

let red = 148;
let green = 21;
let blue = 21;

function setup() {
  createCanvas(800, 800);
  background(113, 192, 245);
}

function draw(){
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
  fill(red,green,blue)
  ellipse(xapple1,apple1y,30)
  ellipse(xapple2,apple2y,30)
  ellipse(xapple3,apple3y,30)
  ellipse(xapple4,apple4y,30)
  if (apple1y < 600) {
    apple1y ++;
	print("first test TRUE");
  }
  else if(apple1y=600){
	apple1y=380;
  	print("SECOND TEST TRUE");
  }
  else{
	background(143, 186, 242);
  }

  if (apple2y < 600) {
    apple2y +=2;
  }
  else if(apple2y=600){
	apple2y=410;
	print("first test TRUE");
  }
  else{
	background(143, 186, 242);
  }

  if (apple4y < 600) {
    apple4y +=1;
  }
  else if(apple4y=600){
	apple4y=450;
	print("first test TRUE");
  }
  else{
	background(143, 186, 242);
  }

  //star following cursor
  fill(245, 242, 105)
  ellipse(mouseX,mouseY,10,30)
  ellipse(mouseX,mouseY,30,10)
}
  
function mousePressed(){ 
	red = random(122,255);
	green = random(0,140);
	blue = random(0,140);
}