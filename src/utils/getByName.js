import axios from 'axios';
import { API_KEY } from 'assets/API_KEY';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function getByName(name) {
  return await axios
    .get(axios.defaults.baseURL + 'search/movie', {
      params: {
        api_key: API_KEY,
        query: name,
      },
    })
    .then(movies => movies.data.results);
}
