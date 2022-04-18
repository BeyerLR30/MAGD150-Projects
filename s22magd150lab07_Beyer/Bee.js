class Bee {
  
constructor(){
  var x,y;
  var c;
  
  this.x=100;
  this.y=250;

}
  
  move(){
    
    this.x+=1.5;
    
    if (this.x-100>width){
      this.x=-50;
    }
    
  }
  
  draw(){
    fill(255); //color of bee's wing is white
    stroke(0); //outline of bee wing is black
    ellipse(this.x-5,230,10,30); //creates shape of bee's wing
    let c=color('#eada2a'); //yellow color of bee's body
    rectMode(CENTER); //shape of bee
    fill(c);
    noStroke();
    rect(this.x,this.y,60,30); //size of bee
    fill(0); //black color of stripes
    rect(this.x-10,this.y,10,30); //first stripe location
    rect(this.x+10,this.y,10,30); //second stripe location
   
  }
}