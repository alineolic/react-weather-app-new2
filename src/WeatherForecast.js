import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);

function handleResponse(response) {
setForecast(response.data.daily);
setLoaded(true);
}

if (loaded) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <WeatherForecastDay data={forecast[0]} />
        </div>
        </div>
      </div>
  );

} else {
  let apiKey = "3a5b83d2290ca8aeea736a82a10e7ea7";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  
  axios.get(apiUrl).then(handleResponse);

  return null;
}
}
