import { useState, useEffect } from 'react';
import { getByName } from 'utils/getByName';
import { useSearchParams, useLocation } from 'react-router-dom';
import { MovieList } from 'components/MovieList/MovieList';
import css from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (query) {
      getByName(query).then(movies => setMovies(movies));
    }
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.text.value;
    setSearchParams(value !== '' ? { query: value } : '');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className={css.input}
          defaultValue={query}
          name="text"
          type="text"
        />
        <button className={css.button} type="submit">
          search
        </button>
      </form>
      <MovieList
        movies={movies}
        style={css.link}
        state={{ from: location }}
      ></MovieList>
    </>
  );
};

export default Movies;
