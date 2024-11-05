// Al fer clic a un dels botons--> One button clicked

const buttons = document.querySelectorAll('button');  // Selecciona todos los botones
const ps = document.querySelector('.result');  // Selecciona el contenedor donde cambiarás el texto

function Ps() {
    for (let p in ps)

    ps.textContent = `One button clicked`;
}


for (button of buttons) {
    buttons.addEventListener('click', Ps);
}


// resultado profe
