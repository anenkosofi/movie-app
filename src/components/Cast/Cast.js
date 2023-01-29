import { useState, useEffect } from 'react';
import { getMovieCast } from 'services/tmdbApi';
import { List, Character } from './Cast.styled';

export const Cast = ({ id }) => {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    getMovieCast(id).then(({ cast }) => setCast(cast));
  }, [id]);

  if (!cast) {
    return;
  }

  return (
    <List>
      {cast.splice(0, 5).map(({ id, character, name, profile_path }) => (
        <li key={id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${profile_path}`}
            alt={name}
          />
          <div>
            <p>{name}</p>
            <Character>{character}</Character>
          </div>
        </li>
      ))}
    </List>
  );
};
