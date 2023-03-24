// import FilmMainInfo from 'components/FilmMainInfo/FIlmMainInfo';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from 'utils/getFunctions';
import { lazy, Suspense } from 'react';
const FilmMainInfo = lazy(() => import('components/FilmMainInfo/FIlmMainInfo'));
const StyledLink = lazy(() =>
  import('./MovieDetails.styled').then(module => ({
    ...module,
    default: module.StyledLink,
  }))
);
const List = lazy(() =>
  import('./MovieDetails.styled').then(module => ({
    ...module,
    default: module.List,
  }))
);

const MovieDetais = () => {
  const { movieId } = useParams();
  const [moviedDetails, setMovieDetails] = useState('current');
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const abortController = new AbortController();
    setStatus('pending');

    getMovieDetails(movieId, abortController)
      .then(responce => {
        setMovieDetails(responce.data);
        setStatus('resolved');
      })
      .catch(() => setStatus('rejected'));

    return () => {
      abortController.abort();
    };
  }, [movieId]);

  return (
    <div>
      {status === 'pending' && <p>Loading...</p>}
      {status === 'resolved' && (
        <>
          <Suspense fallback={<p>Loading FilmMainInfo and Links ... </p>}>
            <FilmMainInfo moviedDetails={moviedDetails} />
            <List>
              <li>
                <StyledLink to="cast">Cast</StyledLink>
              </li>
              <li>
                <StyledLink to="reviews">Reviews</StyledLink>
              </li>
            </List>
            <Outlet />
          </Suspense>
        </>
      )}
      {status === 'rejected' && <p>rejected</p>}
    </div>
  );
};

export default MovieDetais;
