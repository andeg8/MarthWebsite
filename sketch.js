function setup() {
  createCanvas(600,800);
}

function draw() {
  var x = random(0,600);
  var y = random(0,800);
  var d = 50;
  ellipse(x,y,d,d);
}

function keyTyped() {
  if (key === 's') {
    saveCanvas('mymarth','gif');
  }
}