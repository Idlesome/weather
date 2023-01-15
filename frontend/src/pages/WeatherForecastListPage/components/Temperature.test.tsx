import { render, screen } from '@testing-library/react';
import React from 'react';
import { Temperature } from './Temperature';

const mockInterval = {
  startTime: '2023-01-15T06:00:00Z',
  values: { temperature: 7.18, weatherCodeDay: 10010 },
};

describe('<Temperature/>', () => {
  it('renders a temperature', () => {
    render(<Temperature temperature={mockInterval.values.temperature} />);
    screen.getByText(/7°C/);
  });
});
