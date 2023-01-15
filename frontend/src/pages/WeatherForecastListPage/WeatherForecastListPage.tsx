import { Layout } from 'src/common/global/Layout';
import React from 'react';
import { ForecastTimelineList } from './components/ForecastTimelineList';

const location: WeatherLocation = {
  name: 'Oxford',
  latlong: '51.7520209,-1.2577263000000585',
};

export function WeatherForecastListPage() {
  return (
    <Layout>
      <ForecastTimelineList location={location} />
    </Layout>
  );
}
