import { useState, useEffect } from 'react';
import { getTrending } from 'utils/getTrending';
import { useLocation } from 'react-router-dom';
import { MovieList } from 'components/MovieList/MovieList';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrending().then(movies => setMovies(movies));
  }, []);

  return (
    <>
      <div className={css.container}>
        <h2 className={css.title}>Trending today</h2>
        <MovieList
          movies={movies}
          path={'movies/'}
          style={css.link}
          state={{ from: location }}
        ></MovieList>
      </div>
    </>
  );
};

export default Home;
