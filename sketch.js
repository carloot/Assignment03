function setup() {
  frameRate(100);
  createCanvas(400, 400);
  angleMode (DEGREES);
}

function draw() {
  noStroke();
  for(var x = 25; x < width; x += 25)
  {for(var y = 25; y < height; y += 25)
  { var x1 = x/20;
    var y1 = y/20;
    var customHue = x / width * 255;
    var customSaturation = y / height * 255;
    fill(customHue, customSaturation, 100);
    ellipse (frameCount * cos(frameCount * x1), frameCount * sin(frameCount * y1), random()*20);}
  }

}
