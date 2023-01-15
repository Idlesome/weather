import React from 'react';
import { Container } from 'src/common/global/Container';
import styled from 'styled-components';
import { useTimelines } from '../api/use-timeline';
import { ForecastTimelineItem } from './ForecastTimelineItem';

const LocationStatusUl = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0;
`;

type Props = {
  location: {
    latlong: LatLongPair;
    name: string;
  };
};

/**
 * Fetches and renders weather forecast timelines for Oxford
 * Displays a loading state when fetching
 *
 * Note: currently only renders one timeline per location since only one is requested
 * from the API but could support more in future
 */
export function ForecastTimelineList({ location }: Props) {
  const { status, timelines, error } = useTimelines(location.latlong);

  const loading = ['initial', 'loading'].includes(status);

  return (
    <Container>
      {loading && <div>Loading</div>}
      {status === 'failed' && <div>{error}</div>}
      <LocationStatusUl>
        {timelines.map(timeline => (
          <ForecastTimelineItem
            location={location}
            timeline={timeline}
            key={timeline.startTime + timeline.endTime}
          />
        ))}
      </LocationStatusUl>
    </Container>
  );
}
