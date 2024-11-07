const button=document.querySelector("button")
const inputText=document.getElementById("textInput");
const ul=document.querySelector('ul')

function add(){

    if (inputText.value.length===0){
        alert( `El text està buït`)
    }
    else {
        const node = document.createElement("li")
        node.textContent= inputText.value
        ul.appendChild(node)
    }
}

button.addEventListener('click',add)