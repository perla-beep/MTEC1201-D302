/* Name: Perla De Santiago
Title: Cute Balloons
Instructions: Click anywhere to spawn bunny balloons.*/

let balloons = [];

function setup() {
  createCanvas(800, 600);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(14);

  Balloons();
}

function draw() {
  background(255, 230, 240); 

  //clouds
  fill(255, 250, 250);
  for (let x = 0; x < width; x += 120) {
    ellipse(x + 60, 100, 100, 60);
    ellipse(x + 90, 130, 80, 50);
    ellipse(x + 30, 120, 70, 45);
  }

  //ballons
  for (let i = balloons.length - 1; i >= 0; i--) {
    balloons[i].move();
    balloons[i].display();

    if (balloons[i].y < -100) {
      balloons.splice(i, 1); //removes ballon that floated off screen 
    }
  }
}

// when click ballons show up
function mousePressed() {
  Balloons();
}

function Balloons() {
  for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = height + random(50, 150); 
    let c = color(random(200, 255), random(200, 255), random(200, 255)); //anywhere near pink fo pastel colors
    balloons.push(new BunnyBalloon(x, y, c));
  }
}

class BunnyBalloon {
  constructor(x, y, c) {
    this.x = x;
    this.y = y;
    this.c = c;
    this.speed = random(1, 2);
  }

  move() {
    this.y -= this.speed;
  }

  display() {
    fill(this.c);
    ellipse(this.x, this.y, 60, 70); // body

    // ears
    fill(this.c);
    ellipse(this.x - 15, this.y - 40, 15, 30);
    ellipse(this.x + 15, this.y - 40, 15, 30);

    // inner ears
    fill(255, 220, 235);
    ellipse(this.x - 15, this.y - 40, 8, 20);
    ellipse(this.x + 15, this.y - 40, 8, 20);   
  }
}
