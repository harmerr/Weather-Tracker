let searchBtn = document.getElementById('show-weather').addEventListener('click', search)

async function search() {
    let zip = document.getElementById('zipcode').value
    var weather = fetch("https://api.openweathermap.org/data/2.5/weather?zip=" + zip + "&appid=ce33798b72d6ea63a1e95262de135293&units=imperial")
    .then(response => response.json()).then(data => {
        console.log(data)
        document.getElementById('city-name').innerHTML = data.name
        document.getElementById('lat').innerHTML = data.coord.lat
        document.getElementById('lon').innerHTML = data.coord.lon
        document.getElementById('weather-main').innerHTML = data.weather[0].main
        document.getElementById('weather-desc').innerHTML = data.weather[0].description
        document.getElementById('wind-speed').innerHTML = data.wind.speed
        document.getElementById('wind-degree').innerHTML = data.wind.deg
        document.getElementById('temp-current').innerHTML = data.main.temp
        document.getElementById('temp-min').innerHTML = data.main.temp_min
        document.getElementById('temp-max').innerHTML = data.main.temp_max
        document.getElementById('humidity').innerHTML = data.main.humidity

    })
}
