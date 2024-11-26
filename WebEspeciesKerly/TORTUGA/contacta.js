const firstname=document.getElementById("text");
const email=document.getElementById("email");
const titlee=document.getElementById("title");
const msg=document.getElementById("textarea");
const button = document.querySelector("button");

const addError = (element, message) => {

    const errorElement = document.createElement('p');
    errorElement.textContent = message;
    errorElement.style.color = 'green';
    errorElement.ariaSetSize
    element.appendChild(errorElement);
};

button.addEventListener('click', (event) => {
    event.preventDefault();

    let valid = true;

    if (firstname.value.length === 0) {
        let errorP = firstname.parentNode.querySelector(".error")
        addError(errorP, "El camp Nom NO pot estar buït");
        valid = false;
    }
    if (email.value.length === 0) {
        let errorP = email.parentNode.querySelector(".error")
        addError(errorP, "El camp correu electrònic NO pot estar buït");
        valid = false;
    }
    if (titlee.value.length === 0) {
        let errorP = titlee.parentNode.querySelector(".error")
        addError(errorP, "El camp Títol NO pot estar buït");
        valid = false;
    }
    if (msg.value.length === 0) {
        let errorP = msg.parentNode.querySelector(".error")
        addError(errorP, "El camp Telèfon NO pot estar buït");
        valid = false;
    }
    if (valid) {
        window.location.href = "correctamentortuga.html";
    }
});






