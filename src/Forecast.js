import React from "react";
import axios from "axios"

export default function Forecast(props) {
  function handleResponse(event){
    event.preventDefault();
    console.log(props)
  }
 

  let lat= props.forecastInfo.coordinates.lat;
  let lon= props.forecastInfo.coordinates.lon;
  let apiKey= "3499ef150985eccadd080ff408a018df";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`

  axios.get(apiUrl).then(handleResponse)
   
  return (
    <div>
        <div className="date">Weather Forecast;</div>
      <div className="forecast">
        <div className="row">
          <div className="col cols">
            <div className="forecastDay">Thursday</div>
            <img className="forecastIcon" src={props.forecastInfo.imgUrl} />
            <div className="forecastMaxTemp">max 9 C</div>
            <div className="forecastMinTemp">min 17 C</div>
          </div>
        </div>
      </div>
    </div>
  );
}
