import { WeatherForecastListPage } from 'src/pages/WeatherForecastListPage/WeatherForecastListPage';
import React from 'react';
import { ErrorBoundary } from './common/global/ErrorBoundary';
import { FallbackComponent } from './common/global/FallbackComponent';
import './App.css';

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      <WeatherForecastListPage />
    </ErrorBoundary>
  );
};

export { App };
