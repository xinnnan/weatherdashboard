localStorage.clear();
var APIKey="65268c68694b0c9b8ef9a3e888f3be6b";
var city;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
fetch(queryURL)
