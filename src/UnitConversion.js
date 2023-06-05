import React, { useState } from "react";

export default function UnitConversion(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelcius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if(unit==="celsius"){
    return (
      <span className="units">
        <span className="active">{Math.round(props.celsius)} </span>
        <span>
          °C |
        </span>
        <a href="/" onClick={showFahrenheit}>
          °F
        </a>
      </span>
    );
  } else{
      let fahrenheit = (props.celsius * 9) / 5 + 32;
      return (
        <span className="units">
          <span className="active">{Math.round(fahrenheit)} </span>
          <a href="/" onClick={showCelcius}>
            °C |
          </a>
          <span>
            °F
          </span>
        </span>
      );
  }
}
