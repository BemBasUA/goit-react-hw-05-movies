import { useState, useEffect, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import { getMovieDetails } from 'utils/getMovieDetails';
import { Outlet, useLocation } from 'react-router-dom';
import css from './MovieDetails.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: #000;
  padding: 2px;
  font-size: 15px;
  text-decoration: none;
  &.active {
    color: #8e0303;
  }
`;

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
            <StyledLink
              to={'cast'}
              state={{ from: location.state?.from ?? '/' }}
            >
              Cast
            </StyledLink>
          </li>
          <li>
            <StyledLink
              to={'reviews'}
              state={{ from: location.state?.from ?? '/' }}
            >
              Reviews
            </StyledLink>
          </li>
        </ul>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
