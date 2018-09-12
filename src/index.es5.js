"use strict";

var firstColorInput = document.querySelector("#firstColor");
var secondColorInput = document.querySelector("#secondColor");
var body = document.querySelector("body");
var backgroundColorText = document.querySelector(".backgroundTextValue");

function changeBackground() {
  body.style.background = "linear-gradient(to right,".concat(firstColorInput.value, ",").concat(secondColorInput.value, ")");
  backgroundColorText.textContent = " background: linear-gradient(to right,\n         ".concat(firstColorInput.value, ", ").concat(secondColorInput.value, ") ");
}

firstColorInput.addEventListener("input", function () {
  changeBackground();
});
secondColorInput.addEventListener("input", function () {
  changeBackground();
});
