"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawDiagonalGrid();
}

function drawDiagonalGrid() {
    let i = 0;
    while (i < 6) {
        let spacing = 30;
        let x = 50;
        let y = 200;
        Utils.drawLine(x+spacing*i, y+spacing*i, y+spacing*i, x+spacing*i);
        Utils.drawLine(y-spacing* i, x+ spacing*i, 350-spacing*i, y+spacing*i);
        i+=1 ;
    }
}