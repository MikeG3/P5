//set canvas height and width
var pWidth = window.innerWidth;
var pHeight = window.innerHeight;

//GLOBAL VARIABLES
var frameCounter = 0;
var i = 0;
var j = 0;
var xPos = 4;
var yPos = 8;
var gridSizeX = 30;
var gridSizeY = 30;
var squareSize = 15;
var aSquareR = 0;
var aSquareG = 0;
var aSquareB = 0;
var aSquareA = 0.5;
var bSquareR = 0;
var bSquareG = 0;
var bSquareB = 0;
var bSquareA = 0.5;
var grayColor = 0;
var incrementing = true;


//RESPOND TO ARROW KEY INPUT (ASCII 37-40)
window.addEventListener('keydown', move );

//FUNCTIONS
function move(key) {
    if (key.keyCode == 37) {xPos = (xPos-1)%gridSizeX; if (xPos < 0) { xPos += gridSizeX; } }
    if (key.keyCode == 39) {xPos = (xPos+1)%gridSizeX; if (xPos > gridSizeX) { xPos -= gridSizeX; } }
    if (key.keyCode == 38) {yPos = (yPos-1)%gridSizeY; if (yPos < 0) { yPos += gridSizeY; } }
    if (key.keyCode == 40) {yPos = (yPos+1)%gridSizeY; if (yPos > gridSizeY) { yPos -= gridSizeY; } }
}//close move function

function setup() {
  createCanvas(pWidth, pHeight);
}//close setup

function draw() {
    background( 95, 95, 95);
    rect(50, 50, 80, 80);
}//close draw
