// THIS FILE DEFINES A JAGUAR

var Jaguar = function(x, y){
  this.x = x;
  this.y = y;
  this.height = 100;
  this.width = 260;
  this.isJumping = false;
  this.lengthOfJump = 360;
  this.origX = undefined;
  this.origY = undefined;
  this.xInc = -5;
  this.wasKilled = false;

  this.render = function(){
    if(jaguar.isJumping){
      jaguar.jump();
    }
    $('#jaguar').css('top', this.y - this.height);
    $('#jaguar').css('left', this.x - this.width);
  }

  this.jump = function(){

    if(Math.abs(this.x - this.origX) > this.lengthOfJump){
      this.isJumping = false;
      this.wasKilled = false;
      this.x = random(-this.width, windowWidth + this.width);
      return;
    }

    this.x = this.x + this.xInc;
    this.y = this.y - Math.sin(((Math.abs(this.origX - this.x)*Math.PI)/this.lengthOfJump*2))*16;
  }


  this.setJumping = function(value){
    if(this.isJumping){
      return
    }

    if(!this.wasKilled === true){
      this.origX = this.x;
      this.origY = this.y;
    }

    if(this.x < 0){
      this.xInc = 5;
      $('#jaguar').css('-webkit-transform', 'scaleX(-1)');
      $('#jaguar').css('transform', 'scaleX(-1)');
    }
    if(this.x > windowWidth){
      this.xInc = -5;
      $('#jaguar').css('-webkit-transform', 'scaleX(1)');
      $('#jaguar').css('transform', 'scaleX(1)');
    }

    this.isJumping = value;
  }

  this.isShot = function(mX, mY){
    if(!this.isJumping){
      return false;
    }

    var x1 = this.xInc === -5 ? this.x - this.width : this.x;
    var y1 = this.y - this.height;
    var length = this.xInc === -5 ? this.width* .5 : this.width* -0.5;
    var height = this.height*.75;
    var x2 = x1 + length;
    var y2 = y1 + height;

    if((mX > x1 && mX < x2 ||
      mX < x1 && mX > x2) &&
      (mY > y1 && mY < y2 ||
      mY < y1 && mY > y2)){
        return true;
    }
    return false;

  }

  this.showHitFunction = function(){
    var x1 = this.xInc === -5 ? this.x - this.width : this.x;
    var y1 = this.y - this.height;
    var length = this.xInc === -5 ? this.width* .5 : this.width* -0.5;
    var height = this.height*.75;
    rect(x1, y1, length, height);
  }

  this.explode = function(){
    console.log("EXPLODEEEEE");
    this.isJumping = false;
    this.wasKilled = true;
  }
}
