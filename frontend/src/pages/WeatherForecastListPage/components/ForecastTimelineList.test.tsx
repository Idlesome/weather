import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import React from 'react';
import { ForecastTimelineList } from './ForecastTimelineList';
import { mockTimelines } from 'src/test-utils/mocks/timelines';

const location: WeatherLocation = {
  name: 'Oxford',
  latlong: '51.7520209,-1.2577263000000585',
};

vi.mock('../api/fetch-timelines.ts', () => ({
  fetchTimelines: () => Promise.resolve(mockTimelines),
}));

describe('<ForecastTimelineList/>', () => {
  it('renders a loading state', async () => {
    render(<ForecastTimelineList location={location} />);
    screen.getByText('Loading');
    await waitForElementToBeRemoved(() => screen.queryByText('Loading'));
  });

  it('renders a list of timelines', async () => {
    render(<ForecastTimelineList location={location} />);
    const timelineElements = await screen.findAllByTestId(
      'ForecastTimelineItem'
    );
    expect(timelineElements.length).toBe(mockTimelines.length);
  });
});
