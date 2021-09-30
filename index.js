var code = document.querySelector("h4");
var code = document.querySelector("h5");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var gradient = document.getElementById("gradient");
var typeGrad = document.querySelector("#type-grad");


function setGradient() {
    gradient.style.background =
        "linear-gradient(  " + typeGrad.value
        + ", "
        + color1.value
        + ", "
        + color2.value
        + ")";
    code.innerText = gradient.style.background + ";";
}


var flg = localStorage.getItem('on_load_counter');

    if (flg === null) {
        flg = 0;
    }

    flg++;

    localStorage.setItem("on_load_counter", flg);

    document.getElementById('incrementCount').innerHTML = flg;
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
typeGrad.addEventListener("input", setGradient);

   
