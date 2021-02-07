var hr;
var mn;
var sc;
var hrAngle;
var mnAngle;
var scAngle;




function setup() {
  createCanvas(800,700);
  hr = hour();
  mn = minute();
  sc = second();
  

 // createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
  hr = hour();
  mn = minute();
  sc = second();
//text(mouseX+", "+mouseY, 10, 10);
  scAngle = map(sc, 0, 70, 0, 360)
  mnAngle = map(mn, 0, 70, 0, 360)
  hrAngle = map(hr, 0,15, 0, 360)

  stroke(0);
rect(10, 100,790, 200);

stroke(255, 0, 0);
strokeWeight(7);

var m = line(760, 180, mnAngle,180 )

stroke(0, 255, 0);
strokeWeight(7);
var h = line(760, 115, hrAngle, 115)

stroke(0, 0, 255);
strokeWeight(7);
var s = line(760, 270, scAngle,270 )

strokeWeight(1);
stroke(255);
fill(0);
textSize(15) 
text(hr, hrAngle, 115)
text(mn, mnAngle, 180)
text(sc, scAngle, 270)

text("Minutes", 745, 180)
text("Hours", 750, 115)
text("Seconds", 740, 270)


  drawSprites();
}