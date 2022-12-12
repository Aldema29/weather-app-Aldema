function showUser(response) {
    alert(`The user name is ${response.data.name}`);
}


let apiKey = "6210bfb6041b002d1b53875oa36td949";
let url = "https://api.shecodes.io/weather/v1/current?query=Tel-aviv&key=6210bfb6041b002d1b53875oa36td949&units=metric"



  let url = "https://jsonplaceholder.typicode.com/users/1";
  axios.get(url).then(showUser);