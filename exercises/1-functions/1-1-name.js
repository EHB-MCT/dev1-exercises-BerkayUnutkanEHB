"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawName();

function drawName() {
    //letter B
    context.lineWidth=5;
    context.strokeStyle="blue";

    context.beginPath();
    context.moveTo(300, 300);
    context.lineTo(300, 500);
    context.lineTo(380, 500);
    context.lineTo(380, 400);
    context.lineTo(300, 400);
    context.lineTo(350, 400);
    context.lineTo(350, 300);
    context.lineTo(300, 300);
    context.stroke();
   
    //letter E
    context.strokeStyle="yellow";

    context.beginPath();
    context.moveTo(400, 400);
    context.lineTo(400, 300);
    context.lineTo(400, 500);
    context.lineTo(500, 500);
    context.lineTo(400, 500);
    context.lineTo(400, 400);
    context.lineTo(450, 400);
    context.lineTo(400, 400);
    context.lineTo(400, 300);
    context.lineTo(500, 300);
    context.stroke();

    //letter R
    context.strokeStyle="green";

    context.beginPath();
    context.moveTo(525, 500);
    context.lineTo(525, 300);
    context.lineTo(625, 300);
    context.lineTo(525, 400);
    context.lineTo(625, 500);
    context.stroke();

    //letter K
    context.strokeStyle="red";

    context.beginPath();
    context.moveTo(640, 500);
    context.lineTo(640, 300);
    context.lineTo(640, 400);
    context.lineTo(740, 300);
    context.lineTo(640, 400);
    context.lineTo(740, 500);
    
    context.stroke();

    //letter A
    context.strokeStyle="orange";

    context.beginPath();
    context.moveTo(760, 500);
    context.lineTo(800, 300);
    context.lineTo(860, 500);
    context.moveTo(760, 500);
    context.lineTo(780, 400);
    context.lineTo(830, 400);

    
    context.stroke();

    //letter Y
    context.strokeStyle="purple";

    context.beginPath();
    context.moveTo(880, 500);
    context.lineTo(980, 300);
    context.moveTo(920, 420);
    context.lineTo(900, 300);

    
    
    

    
    context.stroke();
}

