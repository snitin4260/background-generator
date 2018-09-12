let firstColorInput = document.querySelector("#firstColor");
let secondColorInput = document.querySelector("#secondColor");
let body = document.querySelector("body");
let backgroundColorText = document.querySelector(".backgroundTextValue");

function changeBackground() {
    body.style.background = `linear-gradient(to right,${firstColorInput.value},${secondColorInput.value})`;
    backgroundColorText.textContent = 
    ` background: linear-gradient(to right,
         ${ firstColorInput.value }, ${ secondColorInput.value }) `;

}

firstColorInput.addEventListener("input",function() {
    changeBackground();
   
})

secondColorInput.addEventListener("input", function () {
    changeBackground();
});