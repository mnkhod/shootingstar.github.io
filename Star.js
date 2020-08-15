class Star {
  constructor(){
    this.x = random(-width,width);
    this.y = random(-height,height);
    this.z = random(width);
  }

  update(){
    this.z -=1;
  }

  show(){
    fill(255);
    noStroke();

    let sx = map(this.x/this.z,0,1,0,width);
    let sy = map(this.y/this.z,0,1,0,height);

    ellipse(sx,sy,8,8);
  }

}
