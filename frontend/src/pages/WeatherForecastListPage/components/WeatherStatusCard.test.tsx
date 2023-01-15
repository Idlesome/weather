import { render, screen } from '@testing-library/react';
import React from 'react';
import { WeatherStatusCard } from './WeatherStatusCard';

const mockInterval = {
  startTime: '2023-01-15T06:00:00Z',
  values: { temperature: 7.18, weatherCodeDay: 10010 },
};

describe('<WeatherStatusCard/>', () => {
  it('renders the day in a heading', () => {
    render(<WeatherStatusCard interval={mockInterval} />);
    screen.getByRole('heading', { name: 'Sun' });
  });
});
