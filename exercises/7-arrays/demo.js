"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let bubblesAmount = 50;
let xPos = [];
let yPos = [];
let sizes = [];
let ySpeeds = [];
setup();

function setup(){
    console.log(xPos);
    for(let i=0; i<bubblesAmount; i++){
    xPos [i] = width/2;
    yPos [i] = height-50;
    sizes [i] = 30+ Math.random()*20;
    ySpeeds = Math.random()*10;
}

update();
}
function update(){
    context.fillStyle = "white";
    context.fillRect(0,0,width,height);

    for (let i=0; i<bubblesAmount; i++){
        yPos[i] -=ySpeeds;
        xPos[i] += Math.random()*5;
        drawBubble(xPos[i],yPos[i],sizes[i],180);
    }
    requestAnimationFrame(update);
}
function drawBubble(x,y,size,hue){
    context.fillStyle = Utils.hsl(hue,50,50);
    Utils.fillAndStrokeCircle(x,y,radius);
    context.fillStyle = Utils.hsl(hue,50,40);
    Utils.fillAndStrokeCircle(x+radius/3,y-radius/2,radius);
    
}
