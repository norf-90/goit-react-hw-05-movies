import { useEffect, useState } from 'react';
import { getGenres } from 'utils/getFunctions';

const FilmMainInfo = props => {
  const [genres, setGenres] = useState(() =>
    JSON.parse(localStorage.getItem('genres'))
  );

  const {
    title,
    poster_path,
    release_date,
    budget,
    overview,
    vote_average,
    genres: filmGenres,
  } = props.moviedDetails;

  useEffect(() => {
    if (genres) return;
    getGenres()
      .then(data => {
        setGenres(data);
      })
      .catch();
  }, [genres]);

  const generateGenres = () => {
    const filmGenresIds = filmGenres.map(({ id }) => id);
    return genres
      .filter(genre => filmGenresIds.includes(genre.id))
      .map(genre => genre.name)
      .join(', ');
  };

  return (
    genres && (
      <div>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={`${title} poster`}
            width="200"
          />
        </div>
        <div>
          <h2>{title}</h2>
          <p>Genres: {generateGenres()}</p>
          <p>Release: {release_date}</p>
          <p>Budget: {budget} $</p>
          <p>Votes: {vote_average}</p>
          <p>{overview}</p>
        </div>
      </div>
    )
  );
};

export default FilmMainInfo;
