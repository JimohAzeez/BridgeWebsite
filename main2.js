// @ts-check 
var Screen = document.getElementById("DisplayCanvas");

alert("got hereeeeeee");

import {StopDisplay} from "./main.js";


const ctx = Screen.getContext('2d');

const CANVAS_WIDTH = Screen.width = 400;

const CANVAS_HEIGHT = Screen.height = 465;
const theImage = new Image();

var OurImage1 = new Image();
var OurImage2 = new Image();
var OurImage3 = new Image();

var counter = 1;
var slower = 0;
var destinationX1 = 0;
var destinationX2 = CANVAS_WIDTH;
var destinationX3 = CANVAS_WIDTH * 2;
var allMovedOut = -CANVAS_WIDTH * 2;

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
//

ctx.drawImage(OurImage1, destinationX1, 0, 600, 600);
ctx.drawImage(OurImage2, destinationX2, 0, 600, 600);
ctx.drawImage(OurImage3, destinationX3, 0, 600, 600);


function animate() {

    //alert("The src is " + (600 - destinationX1));

    //for moving the images. While the image is on motion i.e the animation frame,
    //if (slower % 10 == 0) {

        //to clear the pane and show another Image in another position changed by destination x 
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        //to Move the images, 2 Images at a time.
        //ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        ctx.drawImage(OurImage1, destinationX1, 0, 600, 600);
        ctx.drawImage(OurImage2, destinationX2, 0, 600, 600);
        ctx.drawImage(OurImage3, destinationX3, 0, 600, 600);

        destinationX1--;
        destinationX2--;
        destinationX3--;

        //to change Image when the visible image has moved to the end of the pane.
        if (destinationX1 <= allMovedOut) {
            //alert("ends ==> "+destinationX1);
            destinationX1 = 600;
        } else if (destinationX2 <= allMovedOut) {
            destinationX2 = 600;
        } else if (destinationX3 <= allMovedOut) {
            destinationX3 = 600;
        }

    //}

    // to take time and ensure that the display is slower
    slower++;
    // alert("This is what stopDisplay is " + StopDisplay);

   // if (StopDisplay == 0) {
    //to reloop the pane
    requestAnimationFrame(animate);
    
//}else { alert("This is what stopDisplay is " + StopDisplay) }
//alert("ends ==> ");
}

animate();
