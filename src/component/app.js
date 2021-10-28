import React from "react";
import Searchbar from "./searchbar";
import Temperature from "./temperature";
import { useState } from "react";

function App() {
  const [weatherData, updateWeatherData] = useState("");
  const [weathercity, updateWeathercity] = useState(null);
  const [atmosphere, updateatmosphere] = useState("");
  const [value, updatevalue] = useState("");

  const weatherTemp = (tem, city, description) => {
    updateWeatherData(tem);
    updateWeathercity(city);
    updateatmosphere(description);
  };

  const weatherValue = (val) => {
    updatevalue(val);
  };
  // console.log(value);
  return (
    <>
      <div className="container">
        <Searchbar temp={weatherTemp} val={weatherValue} />
        {console.log(weathercity, value)}
        {weathercity ? (
          <Temperature
            weatherdata={weatherData}
            weatherCity={weathercity}
            atmosphere={atmosphere}
          />
        ) : (
          <div className="error">
            <img
              style={{ width: "130px" }}
              src="https://cdn1.iconfinder.com/data/icons/duotone-weather/24/unknown_weather-512.png"
              alt=""
            />
            <h1>Enter your city</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
