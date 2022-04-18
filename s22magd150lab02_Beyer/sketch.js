function setup() {
  createCanvas(500, 500);
}

function draw() {
  let a=color(53,23,92);
  background(a);
  
  let b=color(107,45,118,70);
  fill(b);
  quad(0,400, 0,150, 500,100, 500,370);
  
  stroke(220);
  strokeWeight(3);
  point(30,30);
  point(20,110);
  point(150,40);
  point(230,20);
  point(250,100);
  point(380,80);
  point(450,30);
  point(470,90);
  point(35,200);
  point(90,250);
  point(130,180);
  point(180,220);
  point(270,160);
  point(430,150);
  point(480,210);
  point(30,290);
  point(10,380);
  point(40,470);
  point(140,490);
  point(230,450);
  point(250,300);
  point(310,340);
  point(290,400);
  point(330,480);
  point(390,420);
  point(490,300);
  point(450,340);
  point(440,470);
  point(480,400);
  
  let c=color('#D131C0');
  fill(c);
  noStroke();
  ellipse(120,100,100,100);
  
  strokeWeight(5);
  let d=color('#7AF60A');
  stroke(d);
  noFill();
  bezier(69,90, 0,110, 250,130, 171,95);
  
  stroke(255);
  strokeWeight(5);
  let e=color('#90ACC1');
  fill(e);
  triangle(320,250, 370,130, 415,250);
  triangle(370,215, 480,250, 370,285);
  triangle(415,250, 370,370, 320,250);
  triangle(370,285, 260,250, 370,215);
  
  noStroke();
  let f=color('hsb(187,65%,65%)');
  fill(f);
  ellipse(370,250,140,140);
  
  stroke(255);
  quad(330,250, 370,210, 410,250, 370,290);
  
  let g=color('#001FB0');
  fill(g);
  stroke(255);
  strokeWeight(1);
  beginShape(TRIANGLE_FAN);
  vertex(390,50);
  vertex(390,40);
  vertex(398,50);
  vertex(390,60);
  vertex(380,50);
  vertex(390,40);
  endShape();
  beginShape(TRIANGLE_FAN);
  vertex(380,40);
  vertex(380,30);
  vertex(390,40);
  vertex(380,50);
  vertex(370,40);
  vertex(380,30);
  endShape();
  
  fill(170);
  noStroke();
  quad(370,40, 350,60, 330,40, 350,30);
  
  noFill();
  stroke(255);
  strokeWeight(2);
  ellipse(350,43, 10,10);
  fill(255);
  point(350,43);
  
  fill(g);
  stroke(255);
  strokeWeight(1);
  beginShape(TRIANGLE_FAN);
  vertex(320,40);
  vertex(320,30);
  vertex(330,40);
  vertex(320,50);
  vertex(310,40);
  vertex(320,30);
  endShape();
  beginShape(TRIANGLE_FAN);
  vertex(310,50);
  vertex(310,40);
  vertex(320,50);
  vertex(310,60);
  vertex(302,50);
  vertex(310,40);
  endShape();
  
  noStroke();
  let h=color('#CF5C42');
  fill(h);
  ellipse(130,370, 190,190);
  let i=color('#AA1500');
  fill(i);
  arc(130,370, 190,190, 0, radians(210), OPEN);
  
}