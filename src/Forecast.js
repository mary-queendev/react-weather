import React from "react";

export default function Forecast(props) {
  return (
    <div>
        <div className="date">Weather Forecast;</div>
      <div className="forecast">
        <div className="row">
          <div className="col cols">
            <div className="forecastDay">Thursday</div>
            <img className="forecastIcon" src={props.icon.imgUrl} />
            <div className="forecastMaxTemp">max 9 C</div>
            <div className="forecastMinTemp">min 17 C</div>
          </div>
        </div>
      </div>
    </div>
  );
}
