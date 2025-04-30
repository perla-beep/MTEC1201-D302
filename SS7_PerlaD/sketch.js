//Perla De Santiago 
let snowflake1;
let snowflake2;
let snowflake3;

function setup(){
  createCanvas(800,800)

  snowflake1 = new Snowflake()
  snowflake2 = new Snowflake()
  snowflake3 = new Snowflake()
}

function draw(){
  background (121, 186, 247)

  snowflake1.fall()
  snowflake2.fall()
  snowflake3.fall()

}

class Snowflake{
  constructor(x,y){
    xLocation = x;
    yLocation = y;
  }

  fall({
    if (xLocation > 900)
    {
      xLocation = -100
    }
    
  
  })
}