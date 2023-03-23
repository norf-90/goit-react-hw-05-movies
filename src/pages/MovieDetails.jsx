import FilmMainInfo from 'components/FilmMainInfo/FIlmMainInfo';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from 'utils/getFunctions';

const MovieDetais = () => {
  const { movieId } = useParams();
  const [moviedDetails, setMovieDetails] = useState('current');
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');

    getMovieDetails(movieId)
      .then(responce => {
        setMovieDetails(responce.data);
        setStatus('resolved');
      })
      .catch(() => setStatus('rejected'));
  }, [movieId]);

  return (
    <>
      <div>
        {status === 'pending' && <p>Loading...</p>}
        {status === 'resolved' && (
          <>
            <FilmMainInfo moviedDetails={moviedDetails} />
            <ul>
              <li>
                <NavLink to="cast">Cast</NavLink>
              </li>
              <li>
                <NavLink to="reviews">Reviews</NavLink>
              </li>
              <Outlet />
            </ul>
          </>
        )}
        {status === 'rejected' && <p>rejected</p>}
      </div>
    </>
  );
};

export default MovieDetais;
