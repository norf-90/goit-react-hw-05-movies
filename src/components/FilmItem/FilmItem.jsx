import { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
const ListLink = lazy(() =>
  import('./FilmItem.styled').then(module => ({
    ...module,
    default: module.ListLink,
  }))
);

const FilmItem = props => {
  const { id, title, poster_path } = props.film;

  return (
    <li>
      <Suspense fallback={'One more loading ... =)))'}>
        <ListLink
          to={
            window.location.href.includes('/movies') ? `${id}` : `movies/${id}`
          }
        >
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : 'https://media1.giphy.com/media/MFVY2h4oOw0PSpgGIG/200.webp?cid=ecf05e47s4sh81t2vzrc5e7faiiv3ljj8dgivkwhh7ffpix4&rid=200.webp&ct=s'
            }
            alt={`${title} poster`}
            height="50"
          />
          <p>{title}</p>
        </ListLink>
      </Suspense>
    </li>
  );
};

FilmItem.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.isRequired,
  }),
};

export default FilmItem;
