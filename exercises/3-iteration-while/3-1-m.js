"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawWormhole();
}

function drawWormhole() {
    let i = 0;
    let step = 20;
    let amount = 1000/step;
    while (i < amount ) {
        Utils.drawLine(200,200,200+(i*step),50);
        Utils.drawLine(200,200,40+(i*step),450);
        /*niet af */
        i++;
    }
}