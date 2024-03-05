// @ts-check 
var Screen = document.getElementById("DisplayCanvas");

const ctx = Screen.getContext('2d');

const CANVAS_WIDTH = Screen.width = 400;

const CANVAS_HEIGHT = Screen.height = 465;
const theImage = new Image();

var OurImage1 = new Image();
var OurImage2 = new Image();
var OurImage3 = new Image();

var counter = 1;
var AllX = 0;
var slowerLevel = 0;
var destinationX1 = 0;
var destinationX2 = CANVAS_WIDTH;
var destinationX3 = CANVAS_WIDTH * 2;
var CANVASCOUNTER = 0;
var allMovedOut = -CANVAS_WIDTH * 2;

AllX= destinationX1+destinationX2+destinationX3;

slowerLevel = 2.0;
//const hand = document.getElementById("hand");
var ImageArray = ['businessman.jpg',
    'colorful-tomatoes.jpg',
    'Workers Discussing.jpg'
];

OurImage1.src = ImageArray[0];
OurImage2.src = ImageArray[1];
OurImage3.src = ImageArray[2];

/*
function animate() {

    alert("The src is " + 600 - destinationX);

    //for moving the images. While the image is on motion.

    if (slower % 40 == 0) {
        //to Move the images, 2 Images at a time.
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        ctx.drawImage(OurImage, destinationX, 0, 600, 600);
        ctx.drawImage(OurImage2, destinationX2, 0, 600, 600);

        //to change Image when the visible image has moved to the end of the pane.
        if (destinationX <= - CANVAS_WIDTH || destinationX2 <= - CANVAS_WIDTH) {
            counter++;

            if (destinationX <= - CANVAS_WIDTH) {
                OurImage.src = ImageArray[counter];

                if (counter >= 2) {

                    counter = 0;
                    OurImage2.src = ImageArray[counter];
                } else { OurImage2.src = ImageArray[counter + 1]; }
                //to redeclare the position of the 1st and sencond image to be visible and moved
                destinationX = CANVAS_WIDTH;
                destinationX2 = 0;
            }

            if (destinationX2 <= - CANVAS_WIDTH) {
                OurImage.src = ImageArray[counter];

                if (counter >= 2) {

                    counter = 0;
                    OurImage2.src = ImageArray[counter];
                } else { OurImage2.src = ImageArray[counter + 1]; }
                //to redeclare the position of the 1st and sencond image to be visible and moved
                destinationX = 0;
                destinationX2 = CANVAS_WIDTH;
            }

            //to prevent the image selection from getting out of the array of images
            if (counter > 2) {
                counter = 0;
            } else { counter++; }


            destinationX--;
            destinationX2--;
        }




    }



    // to take time and ensure that the display is slower
    slower++;

    //to reloop the pane
    requestAnimationFrame(animate);

}

/*OurImage.onload = function(){
    ctx.drawImage(OurImage,0,0, 600, 600); // Or at whatever offset you like
  };

*/

ctx.drawImage(OurImage1, destinationX1, 0, 600, 600);
ctx.drawImage(OurImage2, destinationX2, 0, 600, 600);
ctx.drawImage(OurImage3, destinationX3, 0, 600, 600);

ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

//const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
function Delay (value) { //alert ("Here Nau1");
            setInterval(() => {
                alert ("Here Nau1");
            }, value);
        }

function animate() {
        
        ctx.drawImage(OurImage1, destinationX1, 0, 400, 600);
        ctx.drawImage(OurImage2, destinationX2, 0, 400, 600);
        ctx.drawImage(OurImage3, destinationX3, 0, 400, 600);

        destinationX1=destinationX1-slowerLevel;
        destinationX2=destinationX2-slowerLevel;
        destinationX3=destinationX3-slowerLevel;
        CANVASCOUNTER=CANVASCOUNTER+slowerLevel;
        //alert("Yes, the canvas Width => "+CANVAS_WIDTH+ " While the  destination is ==> "+destinationX1);
        if (CANVASCOUNTER==CANVAS_WIDTH){
            //alert("Yes, the canvas Width => "+CANVAS_WIDTH+ " While the  destination is ==> "+destinationX1);
            Delay(5000);
            CANVASCOUNTER=0;

        }


        if (destinationX1 <= allMovedOut) {
            destinationX1 = 400;
        } else if (destinationX2 <= allMovedOut) {
            destinationX2 = 400;
        } else if (destinationX3 <= allMovedOut) {
            destinationX3 = 400;
        }

    requestAnimationFrame(animate);

}


animate();
