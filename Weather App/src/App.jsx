import "./App.css";
import SearchCities from "./components/Search Cities/SearchCities";
import CurrentWeather from "./components/Current Weather/CurrentWeather";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [isCelcius, setIsCelcius] = useState(true);
  const [currentLocation, setCurrentLocation] = useState({
    city: "Portland",
    country: "US",
  });

  useEffect(() => {
    const fetchWeather = async () => {
      const { city, country } = currentLocation;
      const units = isCelcius ? "metric" : "imperial";
      const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=${units}&appid=${apiKey}`;

      

      try {
        const res = await axios.get(url);
        const data = res.data;

        const portlandData = {
          city: data.name,
          day: "Today",
          countryCode: data.sys.country,
          date: new Date().toISOString(),
          desc: data.weather[0].main,
          icon: data.weather[0].description,
          temp: Math.round(data.main.temp),
          feelsLike: Math.round(data.main.feels_like),
          lowTemp: Math.round(data.main.temp_min),
          highTemp: Math.round(data.main.temp_max),
          humidity: Math.round(data.main.humidity),
          wind: Math.round(data.wind.speed * (isCelcius ? 3.6 : 1)).toFixed(1),
        };

        setWeatherData(portlandData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchWeather();
  }, [isCelcius, currentLocation]);
  

  const toggleUnits = () => {
    setIsCelcius((prev) => !prev);
  };

  return (
    <div className="App">
      <div className="header">
        <SearchCities
          setWeatherData={setWeatherData}
          isCelcius={isCelcius}
          setCurrentLocation={setCurrentLocation}
        />
      </div>
      <div className="current-weather">
        <CurrentWeather
          currWeatherData={weatherData}
          toggleUnit={toggleUnits}
          isCelcius={isCelcius}
        />
      </div>
    </div>
  );
}

export default App;
