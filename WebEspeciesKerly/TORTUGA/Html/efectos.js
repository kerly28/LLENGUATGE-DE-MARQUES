// Esperamos que el DOM se cargue completamente
document.addEventListener('DOMContentLoaded', function () {
    // Obtenemos el botón por su id
    const boton = document.getElementById('botonFondo');

    // Añadimos el evento de clic al botón
    boton.addEventListener('click', function () {
        // Cambiamos la imagen de fondo del body
        document.body.style.backgroundImage = "url('agua.jpg')";
    });
});

