import FilmItem from 'components/FilmItem/FilmItem';
import { List } from './FilmList.styled';

const FilmList = props => {
  const { films } = props;
  return (
    <List>
      {films.map(({ id, ...filmInfo }) => (
        <FilmItem key={id} film={{ ...filmInfo, id }} />
      ))}
    </List>
  );
};

export default FilmList;
