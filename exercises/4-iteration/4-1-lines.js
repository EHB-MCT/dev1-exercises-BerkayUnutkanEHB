"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
let width = context.canvas.width;
let height = context.canvas.height;
background();
function background() {

    context.fillStyle = "#ffa500";
    context.fillRect(0, 0, width, height);
}
drawThisThing();
function drawThisThing() {
    context.strokeStyle = "white";
    let step = 20;
    let amount = width / step;

    for(let i = 0; i < amount; i++){
        Utils.drawLine(0+ (step*i), 0, width-(step*i), height);

    }
    let amountB = height / step;
    for(let i = 0; i < amountB; i++){
        Utils.drawLine(0, 0+(step*i), width, height-(step*i));
}
}
/*
let horizontallines = 60;
let verticallines = 30;

let width = 600;
let height= 300;

drawLines();

function drawLines(){
    context.fillStyle = "orange";
    context.fillRect(0, 0, width, height);
    context.strokeStyle = "white";
    context.lineWidth = 2;

    let xSpacing = width/horizontallines;
    let ySpacing = height / verticallines;

    for(let i=0; i < horizontallines; i++){
        
        Utils.drawLine(i*xSpacing,0,width-i*xSpacing,height);
    }
    console.log(9 % 7)
    for(let i = 0; i<=verticallines; i++){
        Utils.drawLine(0,i*ySpacing,width, height- i* ySpacing);

    }

}

*/ 










