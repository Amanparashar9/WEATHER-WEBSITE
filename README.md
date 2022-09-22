# Weather website using HTML, CSS , and JAVASCRIPT. 

This weather website show you the weather, city, temperature , description , humidity and wind .Also show the weather situation with a background gif.

This website fetch the API of weather and shows the weather situation#

I also work on the readibility of UI. 

# This weather website contains four page.
1) - index.html
2) - style.css
3) - script.js
4) - assests folder for images 

# Fetch API

` 
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
    `

- Here is my project front page
![Screenshot 2022-09-18 111105](https://user-images.githubusercontent.com/107232134/190887564-5ae09502-0106-4c25-9818-4652cb1995e8.png)
-working-
![Screenshot 2022-09-18 110948](https://user-images.githubusercontent.com/107232134/190887573-abdaee05-7675-4654-a53d-a8210a82a2b6.png)
