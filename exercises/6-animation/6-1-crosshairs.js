"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

document.onmousemove = drawCrosshair;

function drawCrosshair(a){
    context.fillRect(0, 0, width, height);
    context.strokeStyle = "red";
    context.lineWidth = 7;
    context.beginPath();
    context.moveTo(a.pageX, 0);
    context.lineTo(a.pageX, height);
    context.moveTo(0, a.pageY);
    context.lineTo(width, a.pageY);
    context.stroke();
}