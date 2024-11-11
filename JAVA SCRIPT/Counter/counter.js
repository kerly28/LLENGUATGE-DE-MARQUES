// constants
const fcbGoals = document.getElementById("goles-barça");
const madridScore = document.getElementById("goles-madrid");
const fcbButton = document.querySelector(".team #barça ~ .boton");
const madridButton = document.querySelector(".team #madrid ~ .boton");

// variables
let fcbCount = 0;
let madridCount = 0;

fcbButton.addEventListener("click", function () {
    fcbCount++;
    fcbGoals.textContent = fcbCount;
});

madridButton.addEventListener("click", function () {
    madridCount++;
    madridScore.textContent = madridCount;
});
