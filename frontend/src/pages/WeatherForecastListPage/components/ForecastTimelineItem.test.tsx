import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import React from 'react';
import { ForecastTimelineItem } from './ForecastTimelineItem';
import { mockTimelines } from 'src/test-utils/mocks/timelines';

const location: WeatherLocation = {
  name: 'Oxford',
  latlong: '51.7520209,-1.2577263000000585',
};

const mockTimeline = mockTimelines[0];

describe.concurrent('<ForecastTimelineItem/>', () => {
  it('renders the location title', () => {
    render(
      <ForecastTimelineItem location={location} timeline={mockTimeline} />
    );
    screen.getByText(location.name, { exact: false });
  });

  it('renders headings for days', async () => {
    render(
      <ForecastTimelineItem location={location} timeline={mockTimeline} />
    );
    const sundayHeadings = await screen.findAllByRole('heading', {
      name: 'Sun',
    });
    expect(sundayHeadings.length).toBe(3);
  });
});
