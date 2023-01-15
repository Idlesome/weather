import React from 'react';
import { getWeatherCodeDescription, WeatherCode } from '../api/weather-codes';

/**
 * Attempts to display human readable weather code from the given
 * weatherCode number. If not, falls back to "Unknown"
 *
 * @param weatherCode a weatherCode number
 */
export function WeatherStatusCode({ weatherCode }: { weatherCode: number }) {
  try {
    const weatherCodeValue = getWeatherCodeDescription(
      String(weatherCode) as WeatherCode
    );
    return <>{weatherCodeValue}</>;
  } catch (error) {
    // Report the error so it's not hidden
    // eslint-disable-next-line no-console
    console.error(error);
    return <>Unknown</>;
  }
}
