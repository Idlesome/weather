// @TODO move this to backend as an env var
const API_KEY = 'BK0MBLhlknhaiHIg7zsYt5pgqlczQCA4';
const API_BASE_URL = 'https://api.tomorrow.io/v4/';

export async function fetchTimelines(
  location: LatLongPair
): Promise<Timeline[]> {
  const searchParams = new URLSearchParams([
    ['location', location],
    ['fields', 'temperature,weatherCodeDay'],
    ['timesteps', '1d'],
    ['units', 'metric'],
    ['timezone', 'Europe/London'],
    ['apikey', API_KEY],
  ]);
  const queryString = searchParams.toString();
  const response = await fetch(`${API_BASE_URL}/timelines?${queryString}`);
  return (await response.json()).data.timelines as Timeline[];
}
