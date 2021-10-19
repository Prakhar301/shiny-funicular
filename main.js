harry_potter="";
peter_pan="";
function preload(){
    harry_potter=loadSound("Harry Potter Theme.mp3");
    peter_pan=loadSound("Peter Pan.mp3");
}
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,400,400);
}