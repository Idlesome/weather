import { useEffect, useState } from 'react';
import { fetchTimelines } from './fetch-timelines';

/**
 * Uses location API to get weather timeline data for the specified location
 *
 * @param location the LatLongPair coordinate location string to use for location data
 */
export function useTimelines(location: LatLongPair) {
  const [timelines, setTimelines] = useState<Timeline[]>([]);
  const [status, setStatus] = useState<LoadingStatus>('initial');
  const [error, setError] = useState('');

  useEffect(() => {
    (async function loadTimelines() {
      try {
        setTimelines(await fetchTimelines(location));
        setStatus('complete');
      } catch (error) {
        // Report the error to console
        // eslint-disable-next-line no-console
        console.error(error);
        setError(error.toString());
        setStatus('failed');
      }
    })();
  }, [location]);

  return {
    status,
    timelines,
    error,
  };
}
