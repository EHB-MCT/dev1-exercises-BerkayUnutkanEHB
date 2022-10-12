"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawRectangle();

function drawRectangle() {
    //vierkant
    context.beginPath();
    context.rect(320, 50, 30, 30);
    context.fill();
    context.stroke();
    context.beginPath();
    context.rect(50, 320, 30, 30);
    context.fill();
    context.stroke();

    context.lineWidth=1;
    context.strokeStyle="red";

    context.beginPath();
    context.rect(50, 50, 150, 150);
    context.stroke();

    context.beginPath();
    context.rect(125, 125, 150, 150);
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(275, 80, 45, 45);
    context.stroke();

    context.beginPath();
    context.rect(80, 275, 45, 45);
    context.stroke();

    context.beginPath();
    context.rect(200, 200, 150, 150);
    context.stroke();










}