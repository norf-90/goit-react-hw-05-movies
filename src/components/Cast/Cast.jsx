import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'utils/getFunctions';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId)
      .then(({ data: { cast } }) => {
        setCast(cast);
      })
      .catch();
  }, [movieId]);

  return (
    <ul>
      {cast &&
        cast.map(({ name, profile_path, character, id }) => {
          return (
            <li key={id}>
              <h3>{name}</h3>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : 'https://media0.giphy.com/media/B7aksBgcJzFDO/giphy.gif?cid=ecf05e47j34sc1hadvhhjt44g57zxhzrh9qy0sii6gx1pkpa&rid=giphy.gif&ct=g'
                }
                alt={`${name} poster`}
                width="100"
              />
              <p>Character: {character}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default Cast;
