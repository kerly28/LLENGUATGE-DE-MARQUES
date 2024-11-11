/* constants
const name=document.getElementById("nom");
const lastname=document.getElementById("cognoms");
const age=document.getElementById("edat");
const address=document.getElementById("adreca");
const mail=document.getElementById("email");
const telefon=document.getElementById("telefon");
const nameTutor=document.getElementById("nomTutor");
const lastnameTutor=document.getElementById("cognomsTutor"); */

// constants

/* const form=document.querySelectorAll("form");

function notnull (){

} */


    // Mostrar el formulario del tutor si la persona es menor de edad
    document.getElementById("edat").addEventListener("input", function() {
    const edat = parseInt(this.value);
    document.getElementById("menor").style.display = edad < 18 ? "block" : "none";
});

    // Validación y envío del formulario
    document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Evita el envío del formulario

    // Comprobar si todos los campos requeridos están completos
    const isValid = [...this.elements].every(input => input.required ? input.value.trim() !== "" : true);

    if (isValid) {
    document.getElementById("success-message").style.display = "block";  // Mostrar mensaje de éxito
    this.reset();  // Limpiar el formulario
} else {
    alert("Por favor, rellene todos los campos obligatorios.");  // Mostrar alerta si hay campos vacíos
}
});
