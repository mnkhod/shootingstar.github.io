var stars = [];
var speed;
var ms = 1000;

function setup(){
  body = document.querySelector('body');
  createCanvas(body.offsetWidth,body.offsetHeight);

  for (let i=0;i<800;i++){
   stars[i] = new Star();
  }
}

function draw(){

  if(mouseX){
    ms = mouseX;
  }

  background(0);
  speed = map(ms,0,width,0,20);

  translate(width/2,height/2);
  for(star of stars){
    star.update(speed);
    star.show();
  }
}

function touchMoved(event){
  ms = event.changedTouches[0].pageX;
}
