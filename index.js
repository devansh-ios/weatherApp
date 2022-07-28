const input = document.getElementById("input");
function getWeather() {
  let city = input.value;

  let api =
    `https://api.openweathermap.org/data/2.5/weather?q=` +
    city +
    `&appid=393137e7df6ef70a81e3c85150f62bec`;
  let output = document.getElementById("output");
  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let weather = data.weather[0].main;

      output.innerHTML =
        city +
        "<br/>" +
        " weather- " +
        weather +
        " <br />" +
        "Description -" +
        data.weather[0].description +
        "<br/>" +
        " temperature- " +
        data.main.feels_like +
        "k" +
        "<br/>Cloud- " +
        data.clouds.all +
        "% <br/> Humidity- " +
        data.main.humidity +
        "%";
    });
}
