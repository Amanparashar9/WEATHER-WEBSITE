// API call
let weather = {
    "apiKey": "535e77e4f70609271824f287e7cc1eec",
    fetchWeather: function(city) {
        fetch(
                "https://api.openweathermap.org/data/2.5/weather?q=" +
                city +
                "&units=metric&exclude=minutely,alerts&appid=" +
                this.apiKey

            )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {

        const { main } = data.weather[0];
        const { name } = data; //display name
        const { icon, description } = data.weather[0]; //display icon and description
        const { temp, humidity } = data.main; // display temp and humidity
        const { speed } = data.wind; // displa wind speed
        console.log(name, icon, description, temp, humidity, speed); // all show in console
        document.querySelector(".city").innerText = "weather in " + name; // display in website
        document.querySelector(".icon").src =
            "http://openweathermap.org/img/wn/" + icon + "@2x.png"; // for icon
        document.querySelector(".description").innerText = description; // for description
        document.querySelector(".temp").innerText = temp + " °C"; // for temperature
        document.querySelector(".humidity").innerText = "Humidity:" + humidity + " %"; // for humidity
        document.querySelector(".wind").innerText = "Wind Speed:" + speed + " km/h"; // for wind speed
        // switch case use for wheather background according to their weather situation. 
        switch (main) {
            case "Snow":
                document.getElementById("wrapper").style.backgroundImage =
                    "url('../ASSETS/snow.gif') ";
                document.getElementById("wrapper").style.color = "white";

                break;
            case "Clouds":
                document.getElementById("wrapper").style.backgroundImage =
                    "url('../ASSETS/clouds.gif')";
                document.getElementById("wrapper").style.color = "black";
                break;
            case "Fog":
                document.getElementById("wrapper").style.backgroundImage =
                    "url('../ASSETS/fog.gif')";
                document.getElementById("wrapper").style.color = "black";
                break;
            case "Rain":
                document.getElementById("wrapper").style.backgroundImage =
                    "url('../ASSETS/rain.gif') ";
                document.getElementById("wrapper").style.color = "black";
                break;
            case "Clear":
                document.getElementById("wrapper").style.backgroundImage =
                    "url('../ASSETS/clear.gif')";
                document.getElementById("wrapper").style.color = "black";
                break;
            case "Thunderstorm":
                document.getElementById("wrapper").style.backgroundImage =
                    "url('../ASSETS/thunderstorm.gif')";
                document.getElementById("wrapper").style.color = "black";
                break;
            default:
                document.getElementById("wrapper").style.backgroundImage =
                    "url('../ASSETS/clear.gif') ";
                document.getElementById("wrapper").style.color = "black";
                break;
        }
    },
    // for search bar
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};
document.querySelector(".search button").addEventListener("click", function() {
    weather.search()
});
// when click on enter it displays weather
document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search();
    }
})