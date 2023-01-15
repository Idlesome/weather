import { render } from '@testing-library/react';
import React from 'react';
import { WeatherForecastListPage } from './WeatherForecastListPage';
import { mockTimelines } from 'src/test-utils/mocks/timelines';

vi.mock('./api/fetch-timelines.ts', () => ({
  fetchTimelines: () => Promise.resolve(mockTimelines),
}));

describe('<WeatherForecastListPage/>', () => {
  it('renders without error', async () => {
    render(<WeatherForecastListPage />);
  });
});
