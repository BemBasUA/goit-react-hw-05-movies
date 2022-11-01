import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'utils/getMovieCredits';
import css from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    return () => {
      getMovieCredits(movieId).then(cast => {
        cast.map(actor => {
          return setCast(prevState => [
            ...prevState,
            {
              name: actor.name,
              id: actor.id,
              character: actor.character,
              photo: 'https://image.tmdb.org/t/p/w500' + actor.profile_path,
            },
          ]);
        });
      });
    };
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast.map(actor => {
          return (
            <li key={actor.id}>
              <img className={css.image} src={actor.photo} alt="actor_photo" />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;
