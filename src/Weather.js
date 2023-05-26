import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import Forecast from "./Forecast";
import MyLocation from "./MyLocation";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({});
  const [ready, setReady] = useState(false);

  function displayWeather(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      city: response.data.name,
      humidity: response.data.main.humidity,
      windspeed: response.data.wind.speed,
      description: response.data.weather[0].description,
      imgUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: "14/04/2023",
      time: "06:00pm",
    });
    setReady(true);
  }
  if (ready) {
    return (
      <div className="container cover">
        <form className="top">
          <input
            type="text"
            className="input"
            placeholder="Input City"
            autoComplete="off"
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
        <MyLocation />

        <div className="row">
          <div className="col">
            <div className="city">{weatherData.city}</div>
            <div className="date">Last updated: {weatherData.date}</div>
            <div className="date">{weatherData.time}</div>
          </div>

          <div className="col">
            <div className="symbol">
              <img alt={weatherData.description} src={weatherData.imgUrl}></img>
            </div>

            <div className="temp">
              <div>
                <div className="desc">{weatherData.description}</div>
                <span className="units">
                  <span href="#" className="active">
                    {Math.round(weatherData.temperature)}
                  </span>
                  °C |<a href="/">°F</a>
                </span>
              </div>
            </div>
          </div>

          <div className="col temp others">
            <ul>
              <li>
                Humidity: <span>{weatherData.humidity}</span>%
              </li>
              <li>
                Windspeed: <span>{weatherData.windspeed}</span>m/H
              </li>
            </ul>
          </div>
        </div>

        <Forecast />
      </div>
    );
  } else {
    const apiKey = "3499ef150985eccadd080ff408a018df";
    
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);

    return "loading...";
  }
}
