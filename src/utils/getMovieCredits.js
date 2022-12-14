import axios from 'axios';
import { API_KEY } from 'assets/API_KEY';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function getMovieCredits(id) {
  return await axios
    .get(axios.defaults.baseURL + `movie/${id}/credits`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then(movie => movie.data.cast);
}
