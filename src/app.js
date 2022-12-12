function displayTemperature(response){
    console.log(response.data);
}

let apiKey = "6210bfb6041b002d1b53875oa36td949";
let apiUrl = "https://api.shecodes.io/weather/v1/current?query=Tel Aviv&key=6210bfb6041b002d1b53875oa36td949&units=metric"

axios.get(apiUrl).then(displayTemperature);