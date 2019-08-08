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
var frameCounter = 0;
var i = 0;
var j = 0;
var k = 0;
var xPos = 0;
var yPos = 0;
var gridSizeX = 32;
var gridSizeY = 28;
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
var soundWaves = [gridSizeY];
var selectedSquares = [gridSizeY];
var hole, half, quarter, eigth;
var tempo = 100000;           //integer value used for counter to start/stop oscillator

//RESPOND TO ARROW KEY INPUT (ASCII 37-40)
window.addEventListener('keydown', move );

//FUNCTIONS
function move(key) {
    //MOVE SELECTED SQUARE IN GRID WITH ARROW KEYS
    if (key.keyCode == 37) {xPos -= 1; if (xPos < 0) { xPos += gridSizeX; } }
    if (key.keyCode == 39) {xPos +=1; if (xPos == gridSizeX) { xPos = 0; } }
    if (key.keyCode == 38) {yPos -= 1; if (yPos < 0) { yPos += gridSizeY; } }
    if (key.keyCode == 40) {yPos += 1; if (yPos == gridSizeY) { yPos = 0;} }
    //TOGGLE SELECTED SQUARE
    if (key.keyCode == 13) { selectedSquares[yPos][xPos] = !selectedSquares[yPos][xPos];  }
}//close move function

function setup() {
    createCanvas(pWidth, pHeight);
    background( 95, 95, 95);
    frameRate(60);
    //CONSTRUCT AND INTIALIZE SOUND WAVES FOR ALL ROWS
    for (i = 0 ; i < gridSizeY ; i++) {
        soundWaves[i] = new p5.Oscillator();
        soundWaves[i].start();
        soundWaves[i].setType('sine');
        soundWaves[i].amp(0.0);
        soundWaves[i].freq( (i*50+350) );
        //INITIALIZE ALL SQUARES TO FLASE, NOT SELECTED
        selectedSquares[i] = new Array(); 
        for (j = 0 ; j < gridSizeX ; j++) {
             selectedSquares[i].push(false);
         }//close for j
    }//close for i
    //CONSTRUCT ENVELOPES FOR TONE DURATION
    hole = new p5.Env();
    hole.setADSR(0.9, 0.9, 0.9, 0.9)
    hole.setRange(1, 0);
}//close setup

//DRAW LOOPS FOREVER
function draw() {

    
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
        if ( selectedSquares[i][j] ){
            fill(25, 255, 75);
        }//close if selected position squares
        //COLOR SELECTED SQUARE
        if ( j == xPos && i == yPos ){
            fill(25, 25, 25);
        }//close if selected position square
        if ( j == xPos && i == yPos && selectedSquares[i][j]){
            fill(75, 20, 50);
        }//close if selected position square
        //DRAW EACH RECTANGLE IN THE LOOPS
         rect(j*squareSize , i*squareSize , squareSize, squareSize); 
         
         /* 
         //PLAY SOUND
         if ( selectedSquares[i][j] ){
            soundWaves[i].amp(0.5);
         }//close if
         */ 
        }//close inner for loop
        
    }//close outter for loop
    
    //PLAY SOUND
    for ( i = 0 ; i < gridSizeX ; i++ ) {
        for ( j = 0 ; j < gridSizeY ; j++ ) {
             if ( selectedSquares[j][i] ){      //PLAY SOUNDS
                soundWaves[j].amp(0.5);
             }//close if selected square
        }//close for j to play sound
        for ( j= 0 ; j < tempo ; j++ ){ k++; console.log(k);}  //DELAY SOUNDS FOR TEMPO TIME
         for ( j = 0 ; j < gridSizeY ; j++ ) {
             if ( selectedSquares[j][i] ){      //TURN OFF SOUND
                soundWaves[j].amp(0.0);
             }//close if selected square 
         }//close for j to stop sound
    }//close for i
    
    //UPDATE FRAME COUNT
    frameCounter++;
}//close draw
