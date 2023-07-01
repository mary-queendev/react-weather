import React, { useState } from "react";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  function maxTemperature(temp){
  
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div>
        <div className="date">Weather Forecast;</div>
        <div className="forecast">
          <div className="row">
            <div className="col cols">
              <div className="forecastDay">{forecast[0].dt}</div>
              {/* <img className="forecastIcon" src={} /> */}
              <div className="forecastMaxTemp">
                max {forecast[0].temp.max} C
              </div>
              <div className="forecastMinTemp">
                min {forecast[0].temp.min} C
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let lat = props.forecastInfo.lat;
    let lon = props.forecastInfo.lon;
    let apiKey = "3499ef150985eccadd080ff408a018df";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
