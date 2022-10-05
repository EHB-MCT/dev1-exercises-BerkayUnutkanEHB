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
    context.lineTo(500, 400);
    context.stroke();

    

}