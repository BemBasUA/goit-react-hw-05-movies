import axios from 'axios';
import { API_KEY } from 'assets/API_KEY';

export async function getMovieReviews(id) {
  return await axios
    .get(axios.defaults.baseURL + `movie/${id}/reviews`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then(movie => movie.data.results);
}
