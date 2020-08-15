class Star {
  constructor(){
    this.x = random(0,width);
    this.y = random(0,height);
    this.z = random(0,width);
  }

  update(){

  }

  show(){
    fill(255);
    noStroke();
    ellipse(this.x,this.y,8,8);
  }

}
