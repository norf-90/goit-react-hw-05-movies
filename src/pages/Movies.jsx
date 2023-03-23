import { useState } from 'react';
import FilmList from 'components/FilmList/FilmList';
import { getMovie } from 'utils/getFunctions';

const Movies = () => {
  const [films, setFilms] = useState(null);
  const [status, setStatus] = useState('idle');
  const [searchName, setSearchName] = useState('');

  const handleChange = () => {
    const form = document.getElementById('query');
    setSearchName(form.elements.name.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setStatus('pending');
    getMovie(searchName)
      .then(({ data }) => {
        setFilms(data.results);
        setStatus('resolved');
      })
      .catch(() => setStatus('rejected'));
  };

  return (
    <main>
      <form id="query" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          name="name"
          value={searchName}
          placeholder="input film name"
        />
        <button type="submit">Search</button>
      </form>
      {status === 'pending' && <p>Loading</p>}
      {status === 'resolved' && <FilmList films={films} />}
      {status === 'rejected' && <p>Something went wrong</p>}
    </main>
  );
};

export default Movies;
