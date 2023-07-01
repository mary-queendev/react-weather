import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({});
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState(props.defaultCity);

  function displayWeather(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      coordinates: response.data.coord,
      city: response.data.name,
      humidity: response.data.main.humidity,
      windspeed: response.data.wind.speed,
      description: response.data.weather[0].description,
      imgUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
    });
    setReady(true);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "3499ef150985eccadd080ff408a018df";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  if (ready) {
    return (
      <div className="container cover">
        <form className="top" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            placeholder="Input City"
            autoComplete="off"
            onChange={handleCityChange}
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>

        <WeatherInfo info={weatherData} />
        <Forecast forecastInfo={weatherData.coordinates}/>
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
