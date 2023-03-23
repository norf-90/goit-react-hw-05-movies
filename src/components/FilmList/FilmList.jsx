import FilmItem from 'components/FilmItem/FilmItem';

const FilmList = props => {
  const { films } = props;
  return (
    <ul>
      {films.map(({ id, ...filmInfo }) => (
        <FilmItem key={id} film={{ ...filmInfo, id }} />
      ))}
    </ul>
  );
};

export default FilmList;
