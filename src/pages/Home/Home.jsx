import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrending } from 'utils/getTrending';
import { useLocation } from 'react-router-dom';
import css from './Home.module.css';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrending().then(movies => setMovies(movies));
  }, []);

  return (
    <div className={css.container}>
      <h2 className={css.title}>Trending today</h2>
      {movies.map(movie => {
        return (
          <Link
            className={css.link}
            to={`movies/${movie.id}`}
            key={movie.id}
            style={{ display: 'block' }}
            state={{ from: location }}
          >
            {movie.name || movie.title}
          </Link>
        );
      })}
    </div>
  );
};
