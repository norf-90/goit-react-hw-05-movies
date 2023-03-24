import { useEffect, useState } from 'react';
import { getGenres } from 'utils/getFunctions';
import {
  Wrapper,
  Title,
  TextWrapper,
  Text,
  Property,
} from './FilmMainInfo.styled';

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
      <Wrapper>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={`${title} poster`}
          width="200"
        />

        <TextWrapper>
          <Title>{title}</Title>
          <Text>
            <Property>Genres:</Property> {generateGenres()}
          </Text>
          <Text>
            <Property>Release:</Property> {release_date}
          </Text>
          <Text>
            <Property>Budget:</Property> {budget} $
          </Text>
          <Text>
            <Property>Votes:</Property> {vote_average}
          </Text>
          <Text>{overview}</Text>
        </TextWrapper>
      </Wrapper>
    )
  );
};

export default FilmMainInfo;
