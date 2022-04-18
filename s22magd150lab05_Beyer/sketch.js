function setup() {
  createCanvas(600,600);
  
  x=180;
  y=180;
  z=130;
  a=130;
  b=2;
}

function draw() {
  
  let c=color('#c5c3a2');
  let c2=color('#ed0808');
  background(c);
  
  noStroke();
  fill(0);
  rectMode(RADIUS);
  rect(width/2,180,190,140);
  fill(a);
  rectMode(CENTER);
  rect(width/2,180,320,230);
  
  fill(60);
  rectMode(RADIUS);
  rect(width/2,480,150,120);
  
  fill(c2);
  ellipse(190,400,50,50);
  fill(255);
  textSize(15);
  text("power",170,405);
  
  if(mouseX>=165 && mouseX<=215 && mouseY>=375 && mouseY<=425) {
    fill(255,100);
    ellipse(190,400,50,50);
  } else {
    fill(c2);
  }
  
  fill(160);
  rect(300,510,90,50);
  fill(0);
  textSize(20);
  text("change channel",230,515);
  
  if(mouseX>=210 && mouseX<=390 && mouseY>=460 && mouseY<=560) {
    fill(255,70);
    rect(300,510,90,50);
  } else {
    fill(160);
  }
  
  fill(z);
  ellipse(x,y,80,80);
  x+=b
    if(x-180<=0 || x+180>=width) {
  b*=-1
    }
}

  function mouseClicked(){
    
    if(mouseX>165 && mouseX<215 && mouseY>375 && mouseY<425 && z==130 && a==130) { 
      z='#f9ee40';
      a='#7fcbf2';
    } else if(mouseX>165 && mouseX<215 && mouseY>375 && mouseY<425 && z=='#f9ee40' && a=='#7fcbf2') {
      z=130;
      a=130;
    } else if(mouseX>165 && mouseX<215 && mouseY>375 && mouseY<425 && z=='#df6fdb' && a=='#428635') {
      z=130;
      a=130;
    } else if(mouseX>=210 && mouseX<=390 && mouseY>=460 && mouseY<=560 && z=='#f9ee40' && a=='#7fcbf2') {
        z='#df6fdb';
        a='#428635';
  } else if(mouseX>=210 && mouseX<=390 && mouseY>=460 && mouseY<=560 && z=='#df6fdb' && a=='#428635') {
        z='#f9ee40';
        a='#7fcbf2';
      }
  }