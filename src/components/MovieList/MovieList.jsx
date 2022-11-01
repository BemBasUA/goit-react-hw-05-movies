import { Link } from 'react-router-dom';

export const MovieList = ({ movies, path, style, state }) => {
  return movies.map(movie => {
    if (path) {
      return (
        <Link
          className={style}
          to={path + `${movie.id}`}
          key={movie.id}
          style={{ display: 'block' }}
          state={state}
        >
          {movie.name || movie.title}
        </Link>
      );
    } else {
      return (
        <Link
          className={style}
          to={`${movie.id}`}
          key={movie.id}
          style={{ display: 'block' }}
          state={state}
        >
          {movie.name || movie.title}
        </Link>
      );
    }
  });
};
