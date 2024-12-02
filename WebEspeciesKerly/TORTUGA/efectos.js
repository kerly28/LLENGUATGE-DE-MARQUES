
// efecte zoom imatges
const images = document.querySelectorAll('.animal img');


images.forEach(image => {
    image.addEventListener('mouseover', function() {
        image.style.transform = 'scale(1.2)';
    });

    image.addEventListener('mouseout', function() {
        image.style.transform = 'scale(1)';
    });
});


//titol zoom

document.addEventListener('DOMContentLoaded', function () {
    const title = document.querySelector('#cap h1');

    title.addEventListener('mouseenter', function () {
        title.style.transform = 'scale(1.2)';
        title.style.color = '#000000';
        title.style.transition = 'all 0.3s ease';
    });

    title.addEventListener('mouseleave', function () {
        title.style.transform = 'scale(1)';
        title.style.color = 'limegreen';
        title.style.textShadow = 'none'; // Elimina la sombra
    });
});