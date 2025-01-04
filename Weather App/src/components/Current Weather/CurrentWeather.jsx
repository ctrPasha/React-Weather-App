import "./CurrentWeather.css";
import WeatherIcon from "../../Util/WeatherIcon.js";
import Humidity from "../../assets/Humidity.svg";
import Wind from "../../assets/Wind.svg";
import { useState } from "react";

function CurrentWeather({ currWeatherData, toggleUnit, isCelcius }) {
  // Just a small check to see if data is loading correctly
  if (!currWeatherData) {
    return <div>Loading...</div>;
  }

  const {
    city,
    day,
    date,
    temp,
    lowTemp,
    highTemp,
    feelsLike,
    humidity,
    wind,
    desc,
    countryCode,
  } = currWeatherData;

  const degreeSymbol = "°";

  const formatDate = new Date(date).toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

  

  const unit = isCelcius ? "C" : "F";
  const windUnit = isCelcius ? "km/h" : "mph";

  return (
    <div className="Weather">
     
      <div className="location">
        
        <h1 className="city-name">
          {city}{countryCode && `, ${countryCode}`}
        </h1>
      </div>
      
      <div className="info-div">
        <div className="day">
          <p>
            {day} {formatDate}
          </p>
        </div>

        <div className="description">
          <h1>{desc}</h1>
        </div>

        <div className="icon-container">
          <img
            className="weather-icon"
            src={WeatherIcon(desc)}
            alt={desc + "-icon"}
          />
        </div>

        <div className="current-temp">
          <h1>
            {temp}
            <span className="degree-symbol">{degreeSymbol}</span>
          </h1>
          
        </div>

        <div className="feels-like">
          <h5>Feels Like {feelsLike}</h5>
        </div>

        <div className="low-high-container">
          <div className="low">
            L
            <p>
              {lowTemp}
              {degreeSymbol}
            </p>
          </div>

          <div className="high">
            H
            <p>
              {highTemp}
              {degreeSymbol}
            </p>
          </div>
        </div>

        <div className="highlights">
          <div className="humidity-container">
            <img className="humidity" src={Humidity} alt="Humidity" />
            <p>{humidity}%</p>
          </div>

          <div className="wind-container">
            <img className="wind" src={Wind} alt="Wind" />
            <p>
              {wind} {windUnit}
            </p>
          </div>
        </div>

        <div className="highlights-text">
          <div className="humidity-text">
            <p>Humidity</p>
          </div>
          <div className="wind-text">
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
      <div className="toggleWrapper">
        <input
          type="checkbox"
          id="toggle"
          className="toggleCheckbox"
          onChange={toggleUnit}
          checked={!isCelcius}
        />
        <label htmlFor="toggle" className="toggleContainer">
          <div>C{degreeSymbol}</div>
          <div>F{degreeSymbol}</div>
        </label>
      </div>
    
    </div>
  );
}

export default CurrentWeather;
