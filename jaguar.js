// THIS FILE DEFINES A JAGUAR

var Jaguar = function(x, y){
  this.x = x;
  this.y = y;
  this.height = 100;
  this.width = 260;
  this.isJumping = false;
  this.lengthOfJump = 100;
  this.origX = undefined;
  this.origY = undefined;

  this.move = function(){
    this.x = this.x + this.incX;
    this.y = this.y + this.incY;
  }

  this.render = function(){
    $('#jaguar').css('top', this.y - this.height);
    $('#jaguar').css('left', this.x - this.width);
  }

  this.jump = function(){

    if(Math.abs(this.x - this.origX) > this.lengthOfJump){
      this.isJumping = false;
      return;
    }

    this.x = this.x - 1;
    this.y = (Math.sin(((Math.abs(this.origX - this.x)*Math.PI)/this.lengthOfJump))*0.5;
  }

  this.setJumping = function(value){
    this.isJumping = value;
    this.origX = this.x;
    this.origY = this.y;
  }
}
