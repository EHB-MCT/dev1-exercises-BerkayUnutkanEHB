"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawRectangle();

function drawRectangle() {
    //vierkant
    context.beginPath();
    context.rect(350, 50, 25, 25);
    context.fill();
    context.stroke();
    context.beginPath();
    context.rect(50, 350, 25, 25);
    context.fill();
    context.stroke();

    context.lineWidth=1;
    context.strokeStyle="red";

    context.beginPath();
    context.rect(50, 50, 175, 175);
    context.stroke();

    context.beginPath();
    context.rect(125, 125, 175, 175);
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(300, 75, 50, 50);
    context.stroke();

    context.beginPath();
    context.rect(75, 300, 50, 50);
    context.stroke();

    

    

    

    


}