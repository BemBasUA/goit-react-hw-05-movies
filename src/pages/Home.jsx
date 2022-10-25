import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrending } from 'utils/getTrending';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending().then(movies => setMovies(movies));
  }, []);

  return movies.map(movie => {
    console.log(movie);
    return (
      <Link key={movie.id} style={{ display: 'block' }}>
        {movie.name || movie.title}
      </Link>
    );
  });
};
