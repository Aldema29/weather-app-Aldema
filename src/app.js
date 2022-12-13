function formatDate(timestamp) {
let date = new Date(timestamp);
let hours = timestamp.getHours();
if (hours < 10) {
    hours = `0${hours}`;
}
let minutes = date .getMinutes();
if (minutes < 10) {
    minutes = `0${minutes}`;
}
let days = [
"sunday", 
"Monday", 
"Tuesday", 
"Wednesday", 
"Thursday", 
"Friday", 
"Saturday",];
let day = days[date.getDay()];
return `${day} ${hours}:${minutes}`;
}


function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humdityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let dateElement = document.querySelector("#date");
    let iconElement = document.querySelector("#icon");

    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humdityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round(response.data.main.wind);
    dateElement.innerHTML = formatDate(response.data.dt * 1000);
    iconElement.setAttribute(
        "src",
        `http://openweathermap.org/img/wn/04d@2x.png`
        );
}


    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let city = "Tel aviv";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(displayTemperature);
