import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getMovieDetails } from 'utils/getMovieDetails';
import { Outlet, useLocation } from 'react-router-dom';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovieDetails(movieId).then(movie => {
      setMovie({
        name: movie.name || movie.title,
        genres: movie.genres
          .map(genre => {
            return genre.name;
          })
          .join(', '),
        overview: movie.overview,
        poster: 'https://image.tmdb.org/t/p/w500' + movie.poster_path,
        score: movie.vote_average,
      });
    });
  }, [movieId]);

  return (
    <div>
      <Link className={css.back_link} to={location.state?.from ?? '/'}>
        Back
      </Link>
      <div className={css.wrapper}>
        <img className={css.image} src={movie.poster} alt="poster"></img>
        <div>
          <h2>{movie.name}</h2>
          <p className={css.text}>User score: {movie.score}</p>
          <p className={css.text}>Overview</p>
          <p>{movie.overview}</p>
          <p className={css.text}>Genres</p>
          <p>{movie.genres}</p>
        </div>
      </div>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to={'cast'} state={{ from: location.state?.from ?? '/' }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to={'reviews'} state={{ from: location.state?.from ?? '/' }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
