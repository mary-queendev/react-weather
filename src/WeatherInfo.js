import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col">
          <div className="city">{props.info.city}</div>
          <span className="date">
            Last updated- <FormattedDate date={props.info.date} />
          </span>
          <div className="date"></div>
        </div>

        <div className="col">
          <div className="symbol">
            <img alt={props.info.description} src={props.info.imgUrl}></img>
          </div>

          <div className="temp">
            <div>
              <div className="desc">{props.info.description}</div>
              <span className="units">
                <span href="#" className="active">
                  {Math.round(props.info.temperature)}
                </span>
                °C |<a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>

        <div className="col temp others">
          <ul>
            <li>
              Humidity: <span>{props.info.humidity}</span>%
            </li>
            <li>
              Windspeed: <span>{props.info.windspeed}</span>m/H
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
