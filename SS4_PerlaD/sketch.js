//Perla DS "Chicken attempt" I find chicken very cute
// So i wanted to include it in my sketch
let chicken;
let cTime = 0;
let t1=3000;


function preload()
{
  chicken= loadImage("images/chicken.png");
  egg= loadImage("images/egg.png")
}

function setup(){
  createCanvas(800,800);
  background(254,228,169);
  imageMode(CENTER);
}

function draw(){
  cTime=millis();

  background(254,228,169);
  textSize(60)
  textAlign(CENTER)
  text("CUTE CHICK",0,100,800,200);
  image(chicken, width/2,height/2);

  if(cTime>t1){
    background(76,196,210)
    image(egg, width/2,height/2)
    text("mmmm yummy egg",0,100,800,200)
  }


}
