import { CurrentWeatherData } from './current-weather-data';
import { ForecastWeatherData } from './forecast-weather-data';

export interface WheatherData {
  currentWeatherData: CurrentWeatherData;
  forecastWeatherData: ForecastWeatherData;
}
