const pw=document.querySelector("p");
const button= document.querySelector("button");


function Color(){
pw.style.backgroundColor = "#9bc9a5";
pw.style.border = "1px solid black";
}

button.addEventListener(`click`, Color);