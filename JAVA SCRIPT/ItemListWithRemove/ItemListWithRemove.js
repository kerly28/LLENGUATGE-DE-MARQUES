const button = document.querySelector("button");
const inputText = document.getElementById("textInput");
const ul = document.querySelector('ul');

// cada element de la llista tingui un botó esborrar, que al clicar-se esborri l'element de la llista
function add() {

    if (inputText.value.length === 0) {
        alert(`El text està buït :c`)
    } else {
        const node = document.createElement("li")
        node.textContent = inputText.value
        ul.appendChild(node)

        //boton de borrar
        const deleteButton = document.createElement("button")
        deleteButton.textContent = "Delete -.-"

        deleteButton.addEventListener(`click`, function (){
            ul.removeChild(node);
        });
        node.appendChild(deleteButton);
        ul.appendChild(node);

        inputText.value = "";

    }
}


button.addEventListener('click', add)