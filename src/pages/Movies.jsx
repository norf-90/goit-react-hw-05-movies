import { useEffect, useState } from 'react';
import FilmList from 'components/FilmList/FilmList';
import { getMovie } from 'utils/getFunctions';
import { SearchForm, SubmitButton, SearchInput } from './Movies.styled';

const Movies = () => {
  const [films, setFilms] = useState(null);
  const [status, setStatus] = useState('idle');
  const [searchValue, setSearchValue] = useState('');
  // let abortController = useRef();

  // const updateAbortController = newAbortController => {
  //   abortController.current = newAbortController;
  // };

  const handleSubmit = e => {
    e.preventDefault();
    const form = document.getElementById('query');
    setSearchValue(form.elements.searchValue.value);
  };

  useEffect(() => {
    if (!searchValue.trim()) return;
    const abortController = new AbortController();
    setStatus('pending');
    getMovie(searchValue, abortController)
      .then(({ data }) => {
        setFilms(data.results);
        setStatus('resolved');
      })
      .catch(() => setStatus('rejected'));

    return () => {
      abortController.abort();
    };
  }, [searchValue]);

  return (
    <main>
      <SearchForm id="query" onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          name="searchValue"
          placeholder="input film name"
          required
          autoComplete="off"
        />
        <SubmitButton type="submit">Search</SubmitButton>
      </SearchForm>
      {status === 'pending' && <p>Loading</p>}
      {status === 'resolved' && <FilmList films={films} />}
      {status === 'rejected' && <p>Something went wrong</p>}
    </main>
  );
};

export default Movies;
