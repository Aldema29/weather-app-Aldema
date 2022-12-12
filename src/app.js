function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let dateElement = document.querySelector("#date");
    let iconElement = document.querySelector("#icon");

    function search(city) {
        let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(displayTemperature);
      }
      
      function handleSubmit(event) {
        event.preventDefault();
        let cityInputElement = document.querySelector("#city-input");
        search(cityInputElement.value);
      }
      
      let form = document.querySelector("#search-form");
      form.addEventListener("submit", handleSubmit);
      
      search("Tel-Aviv");