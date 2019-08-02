//SET SKETCH HEIGHT AND WIDTH
var pWidth = window.innerWidth - 15;
var pHeight = window.innerHeight - 15;

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
var soundWave;

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
    frameRate(60);
    soundWave = new p5.Oscillator();
    soundWave.setType('sine');
}//close setup

function draw() {
    //BACKGROUND
    background( 95, 95, 95);
    
    //CHECKERED BOARD
    for (i = 0 ; i < gridSizeY ; i++ ){
      for (j = 0 ; j < gridSizeX  ; j++) { 

        //UPDATE COLORS
        aSquareR += 5;
        aSquareR %= 255;
        aSquareG += 25;
        aSquareG %= 255;
        aSquareB += 15;
        aSquareB %= 255;
        bSquareR += 3;
        bSquareR %= 255;
        bSquareG += 2;
        bSquareG %= 255;
        bSquareB += 6;
        bSquareB %= 255;

        //UPDATE FILLSTYLE AFTER COLOR IS SELECTED
        if ( (i%2 == 0 && j%2 ==0) || (i%2 == 1 && j%2 == 1)  ) {
            fill(200, 100, 120);
        }//close if
        else {
            fill(23, 14, 198);
        }

        //COLOR SELECTED SQUARE
        if ( j == xPos && i == yPos ){
            fill(25, 25, 25);
        }//close if selected position square

        //DRAW EACH RECTANGLE IN THE LOOPS
         rect(j*squareSize , i*squareSize , squareSize, squareSize);  
        }//close inner for loop
    }//close outter for loop
    
    //PLAY SOUND
    //soundWave.start();
    soundWave.amp(0.5);
    soundWave.frequency(220);
    //soundWave.stop();
    
}//close draw
