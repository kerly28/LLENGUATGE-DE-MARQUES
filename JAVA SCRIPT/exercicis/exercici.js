// Cambiar el color de fondo del cuerpo al hacer clic en el botón
document.getElementById('cambiar-color').addEventListener('click', function () {
    const colores = ['#FFCDD2', '#C8E6C9', '#BBDEFB', '#FFF9C4'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
    alert(`Color de fondo cambiado a: ${colorAleatorio}`);
});

// Efecto de desplazamiento suave para los enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        destino.scrollIntoView({ behavior: 'smooth' });
    });
});

// Seleccionamos el header
const header = document.getElementById('header');

// Detectamos el desplazamiento
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});
