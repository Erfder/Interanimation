/*
     Name:
     Date:
     Class & Section:  WIA-####
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/
if(Modernizr.canvas){
    var canv = document.getElementById("canvas1");
    var draw = canv.getContext("2d");
    draw.fillStyle = 'rgb(100, 175, 255)';
    draw.strokeStyle = 'rgb(0, 0, 0)';
    draw.fillRect(0, 0, 50, 100);
    draw.strokeRect(0, 0, 50, 100);
}else{
    alert('Your browser is out of date and/or does not support canvas');
}


/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/



//I am using Modernizr checks every time in case I wanted to use a polyfill. Otherwise I would use the drawOnCanvas Function.
//Doing this, however, will shove the alert in your face 7 times, and I am aware of this.
if(Modernizr.canvas){
    var circ = document.getElementById("canvas2");
    var drawc = circ.getContext("2d");
    drawc.fillStyle = 'rgba(250, 17, 0, .5)';
    drawc.strokeStyle = 'rgba(0,0,0)';
    drawc.beginPath();
    drawc.arc(50,50,20,0,(Math.PI*2));
    drawc.fill();
    drawc.stroke();
}else{
    alert('Your browser is out of date and/or does not support canvas');
}




/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


if(Modernizr.canvas){
    var star = document.getElementById("canvas3");
    var draws = star.getContext("2d");
    draws.strokeStyle = 'rgb(156,232,113)';
    draws.fillStyle = 'rgb(156,232,113)';
    draws.beginPath();
    draws.moveTo(100,100);
    draws.lineTo(110,100);
    draws.lineTo(100,105);
    draws.lineTo(105,115);
    draws.lineTo(95,108);
    draws.lineTo(85,115);
    draws.lineTo(90,105);
    draws.lineTo(80,100);
    draws.lineTo(90,100);
    draws.lineTo(95,90);
    draws.lineTo(100,100);
    draws.stroke();
    draws.fill();
}else{
    alert('Your browser is out of date and/or does not support canvas');
}


/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/
if(Modernizr.canvas){
    var bc = document.getElementById("canvas4");
    var drawb = bc.getContext("2d");
    drawb.strokeStyle = 'rgb(0, 0, 0)';
    drawb.beginPath();
    drawb.moveTo(50,50);
    drawb.bezierCurveTo(50,0, 131,0, 131,50);
    drawb.bezierCurveTo(131,35, 104,35, 104,50);
    drawb.bezierCurveTo(104,35, 77,35, 77,50);
    drawb.bezierCurveTo(77,35, 50,35, 50,50);
    drawb.stroke();
}else{
    alert('Your browser is out of date and/or does not support canvas');
}

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

if(Modernizr.canvas){
    var text = document.getElementById("canvas5");
    var drawt = text.getContext("2d");
    drawt.font = "10pt Arial";
    drawt.fillText("The logo canvas is at the bottom and enormous", 0,25);
}else{
    alert('Your browser is out of date and/or does not support canvas');
}

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

if(Modernizr.canvas){
    var imag = document.getElementById("canvas7");
    var drawi = imag.getContext("2d");
    var logo = new Image();
    logo.onload = function () {
        drawi.drawImage(logo, 0,0);
        drawi.drawImage(logo, 0,1088, 1650,544);
        drawi.drawImage(logo, 280,131, 340,350, 0,1700, 300,300);
    };
    logo.src = "image/logo.png"; //This image is 3300 x 1088 pixels... -__-
}else{
    alert('Your browser is out of date and/or does not support canvas');
}


/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

if(Modernizr.canvas){
    var combo = document.getElementById("canvas6");
    var drawk = combo.getContext("2d");
    drawk.fillStyle = 'rgb(100, 175, 255)';
    drawk.strokeStyle = 'rgb(0, 0, 0)';
    drawk.fillRect(0, 0, 100, 100);
    drawk.strokeRect(-1, -1, 100, 100);

    var bgcurve = new Path2D();
    bgcurve.moveTo(0,0);
    bgcurve.bezierCurveTo(0,100, 100,0, 100,100);
    drawk.stroke(bgcurve);

    var circle = new Path2D();
    drawk.fillStyle = "red";
    circle.arc(50,40,25,(Math.PI),(Math.PI*2));
    drawk.stroke(circle);
    drawk.fill(circle);

    var circle2 = new Path2D();
    drawk.fillStyle = "white";
    circle2.arc(50,40,25,0,(Math.PI));
    drawk.stroke(circle2);
    drawk.fill(circle2);

    var line = new Path2D();
    line.moveTo(25,40);
    line.lineTo(75,40);
    drawk.stroke(line);

    var innercircle = new Path2D();
    innercircle.arc(50,40,7,0,(Math.PI*2));
    drawk.stroke(innercircle);
    drawk.fill(innercircle);

    drawk.strokeStyle = "Yellow";
    drawk.font = "10pt Arial";
    drawk.strokeText("Pokemon", 23,85);

}else{
    alert('Your browser is out of date and/or does not support canvas');
}


