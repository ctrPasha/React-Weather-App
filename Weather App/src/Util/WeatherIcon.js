import Sunny from '../assets/Sunny.svg';
import PartlyCloudy from '../assets/Partly-Cloudy.png';
import Cloudy from '../assets/Cloudy.png';
import HeavySnow from '../assets/Heavy-Snow.png';
import LightSnow from '../assets/Light-Snow.png';
import Snow from '../assets/Snow.png';
import LightRain from '../assets/Light-Rain.png';
import Rain from '../assets/Rain.png';
import ThunderStorm from '../assets/Thunderstorm.png';
import Lightning from '../assets/lightning.png';
import Fog from '../assets/Fog.png';
import NA from '../assets/NA.png';
import HeavyRain from '../assets/Heavy-Rain.png';
import Haze from '../assets/haze.png'


const WeatherIcon = (description) => {
  const desc = description.toLowerCase();

  switch (desc) {
    case "clear sky":
    case "clear":
      return Sunny;
    case "clouds": 
      return Cloudy;
    case "few clouds":
    case "scattered clouds":
    case "broken clouds":
      return PartlyCloudy;
    case "shower rain":
    case "rain":
      return Rain;
    case "thunderstorm":
      return ThunderStorm;
    case "snow":
      return Snow;
    case "light snow":
      return LightSnow;
    case "heavy snow":
      return HeavySnow;
    case "mist":
    case "fog":
      return Fog;
    case "haze":
      return Haze;
    case "drizzle":
      return LightRain;
    default:
      return NA;
  }
}

export default WeatherIcon;