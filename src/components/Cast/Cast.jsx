import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'utils/getFunctions';
import { List, ListItem } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();
    getCast(movieId, abortController)
      .then(({ data: { cast } }) => {
        setCast(cast);
      })
      .catch();

    return () => abortController.abort();
  }, [movieId]);

  return (
    <List>
      {cast &&
        cast.map(({ name, profile_path, character, id }) => {
          return (
            <ListItem key={id}>
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
            </ListItem>
          );
        })}
    </List>
  );
};

export default Cast;
