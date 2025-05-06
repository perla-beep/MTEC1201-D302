/* Perla De Santiago
Title: Cute flowers
Instructions: Click to spawn flowers and animals
*/

let animals = [];
let animalPosition = [];
let flowers = []; // array to hold flower objects

function preload() {
  animals[0] = loadImage('images/bunny.png');
  animals[1] = loadImage('images/chick.png');
  animals[2] = loadImage('images/kitten.png');
  animals[3] = loadImage('images/puppy.png');
}

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES); // w/o this the flowers spin very fast
}

function draw() {
  background(255, 240, 245);

  //flowers
  for (let i = 0; i < flowers.length; i++) {
    flowers[i].sway();
    flowers[i].display();
  }

  //animals 
  for (let i = 0; i < animalPosition.length; i++) {
    imageMode(CENTER);
    image(animalPosition[i].r, animalPosition[i].x, animalPosition[i].y, 80, 80);
  }
}

// when click animal and flower appear 
// Referenced; https://p5js.org/tutorials/data-structure-garden/ 
function mousePressed() {
  flowers.push(new Flower(mouseX, mouseY, color(random(200,255), random(180,255), random(200,255)))); //push saves
  let a = {
    r: random(animals), x: mouseX + random(-30, 30), y: mouseY + random(-60, -20)
  };

  animalPosition.push(a); //adds to array
}

class Flower {
  constructor(x, y, petalColor) {
    this.x = x;
    this.y = y;
    this.petalColor = petalColor;
    this.angle = random(0, 360);
  }

  sway() { // https://editor.p5js.org/Xiangyi/sketches/oJ83erGXQ 
    this.angle += 1; // changes how fast it rotates
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
