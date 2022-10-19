"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

let width = context.canvas.width;
let height = context.canvas.height;

let i = 0;
while (1<=1200){
    context.beginPath();
    context.ellipse(300,300,Math.PI)
    context.fill();
    
}
