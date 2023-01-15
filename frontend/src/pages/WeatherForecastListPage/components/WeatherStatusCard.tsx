import React from 'react';
import styled from 'styled-components';
import { format, isToday } from 'date-fns';
import { Temperature } from './Temperature';
import { WeatherStatusCode } from './WeatherStatusCode';

const WeatherStatusLi = styled.li<{ isToday: boolean }>`
  border: 1px solid ${({ isToday }) => (isToday ? '#999' : '#ccc')};
  background: rgba(0, 0, 0, ${({ isToday }) => (isToday ? '0.04' : '0.02')});
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem;
  h4 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
  text-align: center;
  span {
    margin-bottom: 0.5rem;
  }
`;

const getIntervalIsToday = (interval: TimelineInterval) =>
  isToday(new Date(interval.startTime));

/**
 * Displays a card with weather status information for the given interval
 * If the interval happened today, the card is highlighted
 *
 * @param interval The weather interval to display status information for
 */
export function WeatherStatusCard({
  interval,
}: {
  interval: TimelineInterval;
}) {
  const isToday = getIntervalIsToday(interval);
  return (
    <WeatherStatusLi isToday={isToday}>
      <h4>{format(new Date(interval.startTime), 'eee')}</h4>
      <span>
        <Temperature temperature={interval.values.temperature} />
      </span>
      <small>
        <WeatherStatusCode weatherCode={interval.values.weatherCodeDay} />
      </small>
    </WeatherStatusLi>
  );
}
