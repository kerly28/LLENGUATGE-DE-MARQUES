
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollY = window.scrollY;
    const heightMax = 600;
    const heightMin = 100;

    const newHeight = Math.max(heightMin, heightMax - scrollY);

    header.style.height = newHeight + 'px';
});
