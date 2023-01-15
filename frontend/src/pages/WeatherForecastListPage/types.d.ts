type LatLongPair = `${string},${string}`;

type TimelineInterval = {
  startTime: string;
  values: {
    temperature: number;
    weatherCodeDay: number;
  };
};

type Timeline = {
  timestep: string;
  endTime: string;
  startTime: string;
  intervals: TimelineInterval[];
};

type WeatherLocation = {
  name: string;
  latlong: LatLongPair;
};
