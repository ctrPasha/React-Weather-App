import { useState } from "react";
import "./SearchCities.css";
import { CiSearch } from "react-icons/ci";
import axios from 'axios';

function SearchCities({ setWeatherData, isCelcius, setCurrentLocation }) {
  const [searchLocation, setLocation] = useState("");
  const [countryCode, setCountryCode] = useState("");
  
  const unit = isCelcius ? "metric" : "imperial";
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchLocation},${countryCode}&units=${unit}&appid=${apiKey}`;
  
  

  const search = async () => {
    console.log("Searching for: ", searchLocation, countryCode);

    try {
      const res = await axios.get(url);
      const data = res.data;

      const setNewData = {
        city: data.name,
        countryCode: data.sys.country,
        day: "Today",
        date: new Date().toISOString(),
        desc: data.weather[0].main,
        icon: data.weather[0].description,
        temp: Math.round(data.main.temp),
        feelsLike: Math.round(data.main.feels_like),
        lowTemp: Math.round(data.main.temp_min),
        highTemp: Math.round(data.main.temp_max),
        humidity: Math.round(data.main.humidity),
        wind: Math.round(data.wind.speed * 3.6).toFixed(1),
        timezone: data.timezone,
        dt: data.dt
      };

      setWeatherData(setNewData);
      setCurrentLocation({ city: data.name, country: data.sys.country });
    } catch (err) {
      console.error(err);
    }
  }

  const keyPress = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  const inputChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchLocation}
        placeholder="Search Cities"
        onChange={inputChange}
        onKeyDown={keyPress}
      />
      <CiSearch id="search-icon" onClick={search} />
    </div>
  );
}

export default SearchCities;
