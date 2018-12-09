var jaguar = undefined;
var killCircle = undefined;
var killCircleTwo = undefined;

function makeText(value){
  $('#hits').remove();
  var ourHits = createP(value);
  ourHits.id('hits');
}

// GETS CALLED ONCE
function setup() {
  jaguar = new Jaguar(windowWidth, $('#grass').height())
  createCanvas(1000, 1000);
  initDatabase(makeText);
}

// THIS GETS CALLED 30 per second
function draw() {
  clear();
  if(jaguar){
    if(jaguar.isShot(mouseX, mouseY)){
      killCircle = {x: mouseX, y: mouseY};
    } else {
      killCircle = undefined;
    }
    drawKillCircles();
    jaguar.render();

  }
}

function mousePressed(){
  jaguar.setJumping(true);
  if(jaguar.isShot(mouseX, mouseY)){
    jaguar.explode();
    killCircleTwo = {x: mouseX, y: mouseY};
    updateHits(HITS + 1);
  } else {
    killCircleTwo = undefined;
  }
}


function drawKillCircles(){
  if(killCircle){
    crossHair(killCircle.x, killCircle.y);
  }

  if(killCircleTwo){
    crossHair(killCircleTwo.x, killCircleTwo.y);
  }
}

function crossHair(x,y){
  stroke('red');
  strokeWeight(3);
  noFill();
  ellipse(x, y, 20);
  line(x, y, x+13, y);
  line(x, y, x-13, y);
  line(x, y, x, y+13);
  line(x, y, x, y-13);

}
