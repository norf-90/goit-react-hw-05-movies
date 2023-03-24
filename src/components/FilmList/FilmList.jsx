import { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
const FilmItem = lazy(() => import('components/FilmItem/FilmItem'));
const List = lazy(() =>
  import('./FilmList.styled').then(module => ({
    ...module,
    default: module.List,
  }))
);

const FilmList = props => {
  const { films } = props;
  return (
    <List>
      {films.map(({ id, ...filmInfo }) => (
        <Suspense fallback={<p>Loading FilmItem...</p>}>
          <FilmItem key={id} film={{ ...filmInfo, id }} />
        </Suspense>
      ))}
    </List>
  );
};

FilmList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.isRequired,
    })
  ),
};

export default FilmList;
