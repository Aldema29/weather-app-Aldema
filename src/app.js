let apiKey = "4805d215b0d139399d8997a4c097e47c";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?g=Tel Aviv&appid=${apiKey}&units=metric`;


axios.get(url).then(displayTemperature);