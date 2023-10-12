function displayTemperature(response) {}
let apiKey = "d1f7e3b91c5b96f60aeaa566fd26ade7";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Cape town&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displaytemperature);
