//constants
const pluja = document.getElementById("pluja");
const sol = document.getElementById("solejat");
const nubes = document.getElementById("nublat");
const electrica = document.getElementById("electrica");
const temperatura = document.getElementById("temperatura");
const tempMax = document.getElementById("tempMax");
const tempMin = document.getElementById("tempMin");

//apikey
async function getData() {
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=41.4534225&lon=2.1837151&appid=7cb282215cc1f147e4dfabe19f69be24&units=metric&lang=ca";
    try {
        const response = await fetch(url);
        const data = await response.json();
        const weather = data.weather[0];
        const main = data.main;

        //sol
        if (weather.main === "Clear") {
            sol.style.display = "block"
            pluja.style.display = "none"
            nubes.style.display = "none"
            electrica.style.display = "none"
        }
        //nubes
        else if (weather.main === "Clouds") {
            sol.style.display = "none"
            pluja.style.display = "none"
            nubes.style.display = "block"
            electrica.style.display = "none"
        }
        //pluja
        else if (weather.main === "Rain") {
            sol.style.display = "none"
            pluja.style.display = "block"
            nubes.style.display = "none"
            electrica.style.display = "none"
        }
        //tormenta elèctrica

        else if (weather.main === "Thunderstorm") {
            sol.style.display = "none"
            pluja.style.display = "none"
            nubes.style.display = "none"
            electrica.style.display = "block"
        }
    temperatura.innerText = `${main.temp} °C`;
    tempMax.innerText = `${main.temp_max} °C`;
    tempMin.innerText = `${main.temp_min} °C`;
}
catch (error) {
    console.error("Error")
}
}
getData();









