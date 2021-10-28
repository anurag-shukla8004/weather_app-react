import React from "react";

function temperature(props) {
  // console.log(props.weatherdata);
  return (
    <>
      <div className="temp">
        <h3>{props.weatherCity}</h3>
        <h2>{props.atmosphere}</h2>
        <h1>{(props.weatherdata.temp - 273.15).toFixed(1)}°C</h1>
      </div>
      <div>
        <h2>
          max:{(props.weatherdata.temp_max - 273.15).toFixed(1)}°C | min:{" "}
          {(props.weatherdata.temp_min - 273.15).toFixed(1)}°C
        </h2>
      </div>
    </>
  );
}

export default temperature;
