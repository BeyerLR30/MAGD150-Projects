var c;
var c1;
var c2;
var s;
var a;

function setup() {
  createCanvas(600,600);
}

function draw() {
  
  background(30);
  stars(); 
  spaceship(); 
  words(); //represents all words and numbers on-screen
  asteroids();
  lasers(); //red lines that come from the spaceship

}

function stars(){
  for (s=50;s<600;s+=100){ //placement of stars horizontally
    strokeWeight(2);
    stroke(255);
    point(s,50);
  for (a=50;a<600;a+=100){ //placement of stars vertically
    stroke(255);
    point(s,a);
  }
  }
}

function spaceship(){
  let c=color('#1524dc');
  stroke(255);
  strokeWeight(2);
  line(300,495,300,545);
  stroke(c);
  strokeWeight(4);
  line(295,520,285,540);
  line(305,520,315,540);
  stroke(255);
  strokeWeight(2);
  line(284,540,284,530);
  line(316,540,316,530);
  rectMode(RADIUS);
  fill(c);
  stroke(235);
  rect(width/2,520,5,20);
}

function words(){
  let c1=color('#D65633');
  stroke(c1);
  strokeWeight(2);
  fill(c1);
  textSize(30);
  text('H I G H', 431,50);
  text('S C O R E',445,90);
  fill(255);
  stroke(255);
  text('3 0 0 0 0 ',445,130);
}

function asteroids(){ //includes size,location, and color of ellipses
  push();
  fill(120);
  stroke(80);
  strokeWeight(5);
  ellipse(60,280,45,45); 
  translate(50,-70); //moves next ellipse up and right
  ellipse(100,200,60,60);
  translate(150,150);
  scale(0.7); //new size of following ellipse compared to previous ellipse
  ellipse(100,200,60,60);
  translate(190,-145);
  scale(1.5);
  ellipse(100,200,60,60);
  translate(150,200);
  scale(0.5);
  ellipse(100,200,60,60);
  pop();
}

function lasers() { 
  let c2=color('#f10814');
  fill(c2);
  noStroke();
  rect(300,370,0.5,10);
  translate(350,370);
  rotate(60)
  rect(-30,-30,0.5,10);
  translate(140,-60);
  rotate(-120);
  rect(-30,-30,0.5,10);
}