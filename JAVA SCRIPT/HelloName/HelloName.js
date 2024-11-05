
const button = document.querySelector('button');
const nameInput = document.getElementById('nameInput');
const resultParagraph = document.getElementById('result');

button.addEventListener('click', function() {

    const name = nameInput.value;

    resultParagraph.textContent = `Hello ${name}!`;
});




// resultado profe
const button = document.querySelector("button");
const input=document.querySelector("#nameInput");
const result=document.querySelector("#result");
function changeName(){
    let name = input.valueOf()
    result.textContent = `Hello ${name}`
}
button.addEventListener('click',changeName)