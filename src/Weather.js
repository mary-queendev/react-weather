import React from "react";
import "./Weather.css";
import Forecast from "./Forecast";
import MyLocation from "./MyLocation";

export default function Weather() {
  let weatherData = {
    city: "New York",
    date: "14/04/2023",
    time: "02:00pm",
    description: "cloudy",
    humidity: 60,
    windspeed: 5,
    temperature: 32,
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
  };
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
                  {weatherData.temperature}
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
}
