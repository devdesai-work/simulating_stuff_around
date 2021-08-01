var xoff = 0;
function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(51);
    //var x = random(width);
    var x = map(noise(xoff), 0, 1, 0 , width);
    
    ellipse(x, 300, 24, 24);
    xoff += 0.01;
}