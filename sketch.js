var font;
var vehicles = [];
var gui;
var defineSize = 100;
var fillColor = '#FFFFFF';
var letter = ['A', 'B', 'C', 'D', 'E', 'F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','&'];
var type = 'type';
var randomise = false;

function preload() {
  font = loadFont('assets/RobotoMono-Bold.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  gui = createGui('VARIABLES 01').setPosition(50, 50);
  sliderRange(0,1000,10);
  gui.addGlobals('fillColor','type','randomise');
  
  frameRate(60);
  textAlign(CENTER);

/*    if (randomise === true){

  var randomLetter = random(letter);

  } else {

    var randomLetter = write;
  }

  var points = font.textToPoints(randomLetter, windowWidth/2-150, windowHeight/2+150, 500, {
    sampleFactor: 0.2
  });

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);

      for (var i = 0; i < vehicles.length; i = i = i + 1) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }

  }  */
  
}


function draw() {

  var mx = map(mouseX,0,windowWidth,0,255);
  var my = map(mouseY,0,windowHeight,0,255);
  var a = sin(radians(frameCount)) * mx;
  var b = sin(radians(frameCount)) * my;
  var c = cos(radians(frameCount))*100;

  background(a,b,c);
  fill(fillColor);


  for (var i = 0; i < vehicles.length; i = i = i + 1) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }

  push();
  noStroke();
  textFont(font);
  text('Press ENTER', windowWidth/2,windowHeight-50,50);
  pop();
}

function keyPressed(){
  if (keyCode === ENTER) {

    if (randomise === true){

  var randomLetter = random(letter);

  } else {

    var randomLetter = type;
  }

  var points = font.textToPoints(randomLetter, random(windowWidth), random(windowHeight), 500, {
    sampleFactor: 0.2
  });

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);

  }

}

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
