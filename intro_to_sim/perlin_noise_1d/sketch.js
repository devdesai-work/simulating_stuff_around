var xoff1 = 0;
var xoff2 = 10000;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(51);
    //var x = random(width);
    var x = map(noise(xoff1), 0, 1, 0 , width);
    var y = map(noise(xoff2), 0, 1, 0 , height);

    
    ellipse(x, y, 24, 24);
    xoff1 += 0.01;
    xoff2 += 0.01;
  
}