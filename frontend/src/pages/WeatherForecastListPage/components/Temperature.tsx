import React from 'react';

/**
 * Re-usable component to standardise the display of temperatures
 */
export function Temperature({ temperature }: { temperature: number }) {
  return <>{Math.round(temperature)}&deg;C</>;
}
