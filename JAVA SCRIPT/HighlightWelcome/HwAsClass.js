const pw=document.querySelector("p");
const button= document.querySelector("button");

function highlight() {
pw.classList.toggle("highlighted")
}

button.addEventListener(`click`, highlight);