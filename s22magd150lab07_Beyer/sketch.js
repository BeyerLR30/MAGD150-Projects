let Bee1;
var a=50;
var b=350;
var c=650;
var d=[100,200,300,400,500,600];


function setup() {
  
  background(255);
  createCanvas(700, 600);
  Bee1= new Bee();
}

function draw() {
  
  let c1=color('#04caec');
  background(c1);
  fill(210,210,0);
  ellipse(0,0,200,200);
  clouds();
  Bee1.move();
  Bee1.draw();
  grass();
  flowers();
  
}

function grass(){
  for (let x=0; x<=width; x+=3){
    stroke(0,190,0);
    strokeWeight(2);
    line(x,600,x,500);
  }
} 

function flowers(){
  
  let c2=color('#C780D6');
  let c3=color('#018EEB')
  let c4=color('#45968C')
  let c5=color('#D6CF18')
  let c6=color('#FA87BB')
  
  stroke(0,150,0);
  line(d[0],500,d[0],450);
  line(d[1],500,d[1],450);
  line(d[2],500,d[2],450);
  line(d[3],500,d[3],450);
  line(d[4],500,d[4],450);
  line(d[5],500,d[5],450);
  fill(255,0,0);
  noStroke();
  ellipse(d[0],450,30,30);
  ellipse(93,445,20,30);
  ellipse(107,445,20,30);
  fill(c2);
  ellipse(d[1],450,30,30);
  ellipse(193,445,20,30);
  ellipse(207,445,20,30);
  fill(c3);
  ellipse(d[2],450,30,30);
  ellipse(293,445,20,30);
  ellipse(307,445,20,30);
  fill(c4);
  ellipse(d[3],450,30,30);
  ellipse(393,445,20,30);
  ellipse(407,445,20,30);
  fill(c5);
  ellipse(d[4],450,30,30);
  ellipse(493,445,20,30);
  ellipse(507,445,20,30);
  fill(c6);
  ellipse(d[5],450,30,30);
  ellipse(593,445,20,30);
  ellipse(607,445,20,30);
}

function clouds(){
  
  fill(240,240,240);
  noStroke();
  ellipse(a,90,100,100);
  ellipse(a+30,45,100,100);
  ellipse(a+70,100,100,100);
  ellipse(a+90,55,100,100);
  ellipse(a+120,90,100,100);
  
  ellipse(b,140,100,100);
  ellipse(b+30,95,100,100);
  ellipse(b+70,150,100,100);
  ellipse(b+90,105,100,100);
  ellipse(b+120,140,100,100);
  
  ellipse(c,90,100,100);
  ellipse(c+30,45,100,100);
  ellipse(c+70,100,100,100);
  ellipse(c+90,55,100,100);
  ellipse(c+120,90,100,100);
  
  a+=0.5
  b+=0.5
  c+=0.5
  
  if (a-100>width){
    a=-200;
  }
  if (b-100>width){
    b=-200;
  }
  if (c-100>width){
    c=-200;
  }
  
}