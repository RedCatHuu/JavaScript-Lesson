"use strict";
function Pen(color, length){
  this.color = color;
  this.length = length;
  this.draw = function(){
    this.length -= 1;
  };
}
let penR = new Pen("red", 15);
let penG = new Pen("green", 20);
let penB = new Pen("blue", 8);
// 初期設定はpenR
let pen = penR;

function stroke(){
  pen.draw();
  let pencil = document.getElementById("pencil");
  pencil.style.width = pen.length + "cm";
  pencil.style.backgroundColor = pen.color;
  pencil.textContent = "色=" + pen.color + "長さ=" + pen.length;
}

function pickR(){
  pen = penR;
}

function pickG(){
  pen = penG;
}

function pickB(){
  pen = penB;
}