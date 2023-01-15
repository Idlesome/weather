import { render, screen } from '@testing-library/react';
import React from 'react';
import { WeatherStatusCode } from './WeatherStatusCode';

const mockInterval = {
  startTime: '2023-01-15T06:00:00Z',
  values: { temperature: 7.18, weatherCodeDay: 10010 },
};

describe('<WeatherStatusCode/>', () => {
  it('renders a converted weather description', () => {
    render(
      <WeatherStatusCode weatherCode={mockInterval.values.weatherCodeDay} />
    );
    screen.getByText('Cloudy');
  });

  it('renders a fallback for unsupported weather codes', () => {
    render(<WeatherStatusCode weatherCode={-1} />);
    screen.getByText('Unknown');
  });
});
