var jaguar = undefined;

// GETS CALLED ONCE
function setup() {
  jaguar = new Jaguar(windowWidth, $('#grass').height())
}

// THIS GETS CALLED 30 per second
function draw() {
  if(jaguar){
    if(jaguar.isJumping){
      jaguar.jump();
    }
    jaguar.render();
  }
}

function mousePressed(){
  jaguar.setJumping(true);
}
