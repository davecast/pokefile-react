import axios from 'axios';

export default function request(
  url,
  config = {
    method: 'GET',
    params: {},
    body: {},
    headers: {
      'Accept-Language': 'en-US,en;q=0.5',
    },
  }
) {
  return axios.request({
    ...config,
    data: config.body,
    url,
  });
}
