import React from 'react';
import { format } from 'date-fns';
import { WeatherStatusCard } from './WeatherStatusCard';
import styled from 'styled-components';

const WeatherStatusUl = styled.ul`
  list-style: none;
  padding-left: 0;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 1rem;
  row-gap: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

type Props = {
  timeline: Timeline;
  location: {
    latlong: LatLongPair;
    name: string;
  };
};

/**
 * Renders a weather status timeline
 */
export function ForecastTimelineItem({ timeline, location }: Props) {
  return (
    <li data-testid="ForecastTimelineItem">
      <h3>
        {location.name} - {format(new Date(timeline.startTime), 'dd/LL/yy')} -{' '}
        {format(new Date(timeline.endTime), 'dd/LL/yy')}
      </h3>
      <br />
      <WeatherStatusUl>
        {timeline.intervals.map(interval => (
          <WeatherStatusCard interval={interval} key={interval.startTime} />
        ))}
      </WeatherStatusUl>
    </li>
  );
}
