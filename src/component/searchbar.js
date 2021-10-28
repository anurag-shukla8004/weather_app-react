import axios from "axios";
import React, { useState, useEffect } from "react";
export const API_KEY = "dcf906ddb2579eb852337401af0966d0";

function Searchbar(props) {
  const [city, updateCity] = useState("");
  const [time, updatetime] = useState();
  let temperatur = null;
  let weatherCity = null;
  let weatherdescription = null;

  useEffect(() => {
    weatherApi("kanpur");
  }, []);

  const weatherApi = async (cit) => {
    temperatur = "";
    weatherCity = null;
    weatherdescription = "";
    props.temp(temperatur, weatherCity, weatherdescription);
    const req = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cit}&appid=${API_KEY}`
    );

    temperatur = req.data.main;
    weatherCity = req.data.name;
    weatherdescription = req.data.weather[0].description;
    console.log(req.data.name);

    props.temp(temperatur, weatherCity, weatherdescription);
  };
  // const getCity = (event) => {
  //   updateCity(event.target.value);
  //   weatherApi();
  // };

  const onTextChange = (event) => {
    clearTimeout(time);
    props.val(event.target.value);
    updateCity(event.target.value);
    const Timeout = setTimeout(() => {
      weatherApi(event.target.value);
    }, 100);
    updatetime(Timeout);
  };

  return (
    <>
      <div className="main">
        <form>
          <input
            type="text"
            placeholder="Enter the city"
            value={city}
            onChange={onTextChange}
          />
        </form>
      </div>
    </>
  );
}

export default Searchbar;
