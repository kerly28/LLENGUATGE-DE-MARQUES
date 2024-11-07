// resultado profe
const button = document.querySelector("button");
const input=document.querySelector("#nameInput");
const result=document.querySelector("#result");
function changeName(){
    let name = input.value
    result.textContent = `Hello ${name}!`
}
button.addEventListener('click',changeName)