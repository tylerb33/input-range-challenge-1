console.log ("works");

let sliderInput = document.getElementById("slider");
let typeInput = document.getElementById("type");


function sliderSetType() {
	typeInput.value = sliderInput.value;
}

function typeSetSlider() {
	sliderInput.value = typeInput.value;
}


sliderInput.addEventListener("mousemove", sliderSetType);
typeInput.addEventListener("keyup", typeSetSlider);