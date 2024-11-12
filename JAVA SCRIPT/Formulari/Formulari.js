const firstName = document.getElementById("nom");
const lastname = document.getElementById("cognoms");
const age = document.getElementById("edat");
const address = document.getElementById("adreca");
const mail = document.getElementById("email");
const telefon = document.getElementById("telefon");
const nameTutor = document.getElementById("nomTutor");
const lastnameTutor = document.getElementById("cognomsTutor");
const menor = document.getElementById("menor");
const button = document.querySelector("button");
const msgError = document.querySelectorAll(".error");

const addError = (element, message) => {
    const errorElement = document.createElement('p');
    errorElement.textContent = message;
    errorElement.style.color = 'green';
};

button.addEventListener('click', (event) => {
    event.preventDefault();

    let valid = true;


    if (firstName.value.length === 0) {
        let errorP = firstName.parentNode.querySelector(".error")
        addError(errorP, "El camp Nom NO pot estar buït");
        valid = false;
    }
    if (lastname.value.length === 0) {
        let errorP = lastnameTutor.parentNode.querySelector(".error")
        addError(errorP, "El camp Cognoms NO pot estar buït");
        valid = false;
    }
    if (address.value.length === 0) {
        addError(msgError[2], "El camp Adreça NO pot estar buït");
        valid = false;
    }
    if (age.value.length === 0) {
        let errorP = age.parentNode.querySelector(".error")
        addError(errorP, "El camp EDAT NO pot estar buït");
        valid = false;
    } else if (parseInt(age.value) < 18) {
        menor.style.display = "block";

    }
    if (mail.value.length === 0) {
        let errorP = firstName.parentNode.querySelector(".error")
        addError(errorP, "El camp Email NO pot estar buït");
        valid = false;
    }
    if (telefon.value.length === 0) {
        let errorP = firstName.parentNode.querySelector(".error")
        addError(errorP, "El camp Telèfon NO pot estar buït");
        valid = false;
    }

    // dades tutor en cas que l'usuari sigui menor d'edat
    if (parseInt(age.value) < 18) {
        if (nameTutor.value.length === 0) {
            let errorP = nameTutor.parentNode.querySelector(".error")
            addError(errorP, "El camp Nom Tutor NO pot estar buït");
            valid = false;
        }
        if (lastnameTutor.value.length === 0) {
            let errorP = lastnameTutor.parentNode.querySelector(".error")
            addError(errorP, "El camp Cognoms Tutor NO pot estar buït");
            valid = false;
        }
    }

    // si tot es valid mostra la pàgina de gracies :)
    if (valid) {
        window.location.href = "Correctament.html";
    }
});
