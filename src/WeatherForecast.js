import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
function handleResponse(response) {
console.log(response.data);
}

  let apiKey = "3a5b83d2290ca8aeea736a82a10e7ea7";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="01d" size={32}/>
        <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19</span>
        <span className="WeatherForecast-temperature-min">9</span>
        </div>
        </div>
      </div>
    </div>
  );
}
