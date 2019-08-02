/*
SOUND PAD
4 OCTAVES X 7 NOTES PER SCALE = 28 ROWS
32 COLUMNS FOR 32ND NOTES

ADD:
SCALE CHANGER -> THAT CHANGES THE FREQUENCIES TO A DIFFERENT SCALE
NOTE CHANGER -> CHANGES FREQUENCIES BASED ON DIFFERENT ROOT NOTE
SOUND FX
TEMPO CHANGER
*/

//SET SKETCH HEIGHT AND WIDTH
var pWidth = window.innerWidth - 15;
var pHeight = window.innerHeight - 15;

//GLOBAL VARIABLES
var frameCounter = 100;
var i = 0;
var j = 0;
var k = 0;
var xPos = 4;
var yPos = 8;
var gridSizeX = 28;
var gridSizeY = 32;
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
var soundWaves = [gridSizeX*gridSizeY];
var selectedSquares = [][];

//RESPOND TO ARROW KEY INPUT (ASCII 37-40)
window.addEventListener('keydown', move );

//FUNCTIONS
function move(key) {
    //MOVE SELECTED SQUARE IN GRID WITH ARROW KEYS
    if (key.keyCode == 37) {xPos = (xPos-1)%gridSizeX; if (xPos < 0) { xPos += gridSizeX; } }
    if (key.keyCode == 39) {xPos = (xPos+1)%gridSizeX; if (xPos > gridSizeX) { xPos -= gridSizeX; } }
    if (key.keyCode == 38) {yPos = (yPos-1)%gridSizeY; if (yPos < 0) { yPos += gridSizeY; } }
    if (key.keyCode == 40) {yPos = (yPos+1)%gridSizeY; if (yPos > gridSizeY) { yPos -= gridSizeY; } }
    //TOGGLE SELECTED SQUARE
    if (key.keyCode == 13) { yPos = (yPos+1)%gridSizeY; if (yPos > gridSizeY) { yPos -= gridSizeY; } }
}//close move function

function setup() {
  createCanvas(pWidth, pHeight);
    frameRate(60);
    //CONSTRUCT AND INTIALIZE SOUND WAVES FOR ALL ROWS
    for (i = 0 ; i < gridSizeX ; i++) {
        soundWaves[i] = new p5.Oscillator();
        soundWaves[i].start();
        soundWaves[i].setType('sine');
        soundWaves[i].amp(0.0);
        soundWaves[i].freq( (i*100) );
    }//close for
    //INITIALIZE ALL SELECTED SQUARES TO FALSE
    /*
     for (i = 0 ; i < gridSizeY ; i++ ){
      for (j = 0 ; j < gridSizeX  ; j++) { 
          //bSquareA = 1;
          //selectedSquares[j][i] = false;
      }//close inner for
    }//close outer for
    */
}//close setup

//DRAW LOOPS FOREVER
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

        //COLOR SELECTED SQUARES
          /*
        if ( selectedSquares[i][j] ){
            fill(125, 125, 125);
        }//close if selected position square
        */
        //COLOR SELECTED SQUARE
        if ( j == xPos && i == yPos ){
            fill(25, 25, 25);
        }//close if selected position square
          

        //DRAW EACH RECTANGLE IN THE LOOPS
         rect(j*squareSize , i*squareSize , squareSize, squareSize);  
        }//close inner for loop
    }//close outter for loop
    
    //PLAY SOUND

    
    //UPDATE FRAME COUNT
    frameCounter++;
}//close draw
