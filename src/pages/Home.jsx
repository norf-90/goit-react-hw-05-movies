import { lazy } from 'react';
import { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { getTrends } from 'utils/getFunctions';
const FilmList = lazy(() => import('components/FilmList/FilmList'));

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
      {status === 'pending' && <p>Loading...</p>}
      {status === 'resolved' && (
        <Suspense fallback={<p>Loading FilmList...</p>}>
          <FilmList films={films} />
        </Suspense>
      )}
      {status === 'rejected' && <p>Something went wrong</p>}
    </main>
  );
};

export default Home;
