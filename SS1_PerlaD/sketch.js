/*//////////////////////////////////////////////////////////////////////////////
///"Cute floating flower" by Perla D.S
///A theme I would like to explore would be learning
///how to make things that include pastel colors the sketch
///ties up with it because I wanted to draw something cute using cute colors
/////////////////////////////////////////////////////////////////////////////*/

function setup (){
  createCanvas(800,800);
  background(100,200,300);

  //guide lines
  //line(400,800,400,0);
  //line(0,400,800,400);

  //stem
  strokeWeight(20);
  stroke(3,148,20);
  line(400,400,400,600);
  strokeWeight(10);
  stroke(4,184,25);
  line(400,400,400,600);

  strokeWeight(8);
  stroke(252, 139, 158);

  //flower head
  fill(247, 69, 99);
  circle(400,350,60);
  circle(350,380,60);
  circle(450,380,60);
  circle(361,440,60);
  circle(440,440,60);
  
  fill(239, 247, 126);
  circle(400,400,100);

  //clouds
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