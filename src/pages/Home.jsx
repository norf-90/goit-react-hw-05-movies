import FilmList from 'components/FilmList/FilmList';
import { useState, useEffect } from 'react';
import { getTrends } from 'utils/getFunctions';

const Home = () => {
  const [films, setFilms] = useState();
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');
    getTrends()
      .then(({ data }) => {
        setFilms(data.results);
        setStatus('resolved');
      })
      .catch(() => setStatus('rejected'));
  }, []);

  return (
    <main>
      {status === 'pending' && <p>Loading</p>}
      {status === 'resolved' && <FilmList films={films} />}
      {status === 'rejected' && <p>Something went wrong</p>}
    </main>
  );
};

export default Home;
