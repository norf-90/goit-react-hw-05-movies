import FilmList from 'components/FilmList/FilmList';
import { useState, useEffect } from 'react';
// import { ClipLoader } from 'react-spinners';
import { getTrends } from 'utils/getFunctions';

const Home = () => {
  const [films, setFilms] = useState();
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const abortController = new AbortController();
    setStatus('pending');
    getTrends(abortController)
      .then(({ data }) => {
        setFilms(data.results);
        setStatus('resolved');
      })
      .catch(() => setStatus('rejected'));

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <main>
      {/* {status === 'pending' && <ClipLoader color="#ffffff" />} */}
      {status === 'resolved' && <FilmList films={films} />}
      {status === 'rejected' && <p>Something went wrong</p>}
    </main>
  );
};

export default Home;
