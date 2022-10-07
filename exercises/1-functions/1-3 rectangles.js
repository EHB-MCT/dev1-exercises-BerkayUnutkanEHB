"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawRectangle();

function drawRectangle() {
    //vierkant
    context.beginPath();
    context.rect(350, 75, 25, 25);
    context.fill();
    context.stroke();
    context.beginPath();
    context.rect(50, 375, 25, 25);
    context.fill();
    context.stroke();

    context.lineWidth=1;
    context.strokeStyle="red";

    context.beginPath();
    context.rect(50, 50, 175, 175);
    context.stroke();

    context.beginPath();
    context.rect(225, 250, 175, 175);
    context.stroke();

    context.beginPath();
    context.rect(125, 150, 175, 175);
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(300, 100, 50, 50);
    context.stroke();

    context.beginPath();
    context.rect(75, 325, 50, 50);
    context.stroke();
    
    

    

    

    

    


}