// MY API KEY //
var weatherAPIKey = '08c8a83685b58ad87965dccade10f114';
var weatherAPIURL = "https://api.openweathermap.org"

// variable to store the searched city //
var city="";

var searchCity = $("#search-city");
var searchButton = $("#search-button");
var currentCity = $("#current-city");
var currentTemperature = $("#temperature");
var currentHumidty= $("#humidity");
var currentWSpeed=$("#wind-speed");
var sCity=[];
// searches the city to see if it exists in the entries from the storage
function find(c){
    for (var i=0; i<sCity.length; i++){
        if(c.toUpperCase()===sCity[i]){
            return -1;
        }
    }
    return 1;
    console.log()
};

function renderCurrentWeather(city, weatherData) {
    let date = moment().format("DD/MM/YYYY");
    let tempC = weatherData["main"]["temp"];
    let windKph = weatherData["wind"]["speed"];
    let humidity = weatherData["main"]["humidity"];

    let iconUrl = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    let iconDescription = weatherData.weather[0].description || weatherData[0].main

    let card = $("<div>")
    let cardBody = $("<div>")
    let weatherIcon = $("<img>")

    let heading = $("<h2>")
    let tempEl = $("<p>")
    let windEl = $("<p>")
    let humidityEl = $("<p>")

    card.attr("class", "card");

    cardBody.attr("class", "card-body");

    card.append(cardBody);

    heading.attr("class", "h3 card title")
    tempEl.attr("class", "card-text")
    windEl.attr("class", "card-text")
    humidityEl.attr("class", "card-text")

    heading.text(`${city}(${date})`)
    weatherIcon.attr("src", iconUrl);
    weatherIcon.attr("alt", iconDescription);

    heading.append(weatherIcon);

    tempEl.text(`Temp ${tempC} C`)
    windEl.text(`Wind ${windKph} KPH`);
    humidityEl.text(`Humidity ${humidity} %`)
    cardBody.append(heading, weatherIcon, tempEl, windEl, humidityEl);
    

    todayContainer.html("");
    todayContainer.append(card);

}

function renderForecast(weatherData) {
    let headingCol = $("<div>");
    let heading = $("<h4>");

    headingCol.attr("class", "col-12");
    heading.text("5-day forecast");
    headingCol.append(heading);

    forecastContainer.html("")

    forecastContainer.append(headingCol);

    let futureForecast = weatherData.filter(function (forecast) {
        return forecast.dt_txt.includes("12")
    });

    console.log()

};
