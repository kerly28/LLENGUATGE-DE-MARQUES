const name = document.getElementById("text");
const mail = document.getElementById("email");
const title=document.getElementById("title");
const msg=document.getElementById("textarea");
const button = document.querySelector("button");
const addError = (element, message) => {

    const errorElement = document.createElement('p');
    errorElement.textContent = message;
    errorElement.style.color = 'green';
    element.appendChild(errorElement);
};

button.addEventListener('click', (event) => {
    event.preventDefault();

    let valid = true;

    if (name.value.length === 0) {
        let errorP = name.parentNode.querySelector(".error")
        addError(errorP, "El camp Nom NO pot estar buït");
        valid = false;
    }
    if (mail.value.length === 0) {
        let errorP = mail.parentNode.querySelector(".error")
        addError(errorP, "El camp Correu NO pot estar buït");
        valid = false;
    }
    if (title.value.length === 0) {
        let errorP = title.parentNode.querySelector(".error")
        addError(errorP, "El camp títol NO pot estar buït");
        valid = false;
    }
    if (msg.value.length===0){
        let errorP=msg.parentNode.querySelector(".error")
        addError(errorP,"El camp Missatge NO pot estar buït")
    }

    // si tot es valid mostra la pàgina de gracies :)
    if (valid) {
        window.location.href = "Correctament.html";
    }
});
