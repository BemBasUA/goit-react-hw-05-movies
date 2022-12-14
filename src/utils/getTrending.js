import axios from 'axios';
import { API_KEY } from 'assets/API_KEY';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function getTrending() {
  return await axios
    .get(axios.defaults.baseURL + 'trending/all/day', {
      params: {
        api_key: API_KEY,
      },
    })
    .then(movies => movies.data.results);
}
