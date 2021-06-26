var btn_red;
var btn_green;

var r = 0;
var g =0;
var b = 0;

function setup() {
  createCanvas(400, 400);  
  btn_red = createButton("Red")
  btn_red.position(10,200)
  btn_green = createButton("Green")
  btn_green.position(60,200)
  btn_red.mousePressed(Background_red)
  btn_green.mousePressed(Background_green)
}

function draw() {
  background(r,g,b);
 


}

function Background_red(){
  r=255
  g= 0
  b= 0
}

function Background_green(){
  r =0
  g = 255
  b = 0
}
