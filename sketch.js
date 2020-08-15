var stars = [];

function setup(){
  body = document.querySelector('body');
  createCanvas(body.offsetWidth,body.offsetHeight);

  for (let i=0;i<800;i++){
   stars[i] = new Star();
  }
}

function draw(){
  background(0);

  for(star of stars){
    star.update();
    star.show();
  }
}
