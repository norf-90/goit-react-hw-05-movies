import { lazy, Suspense } from 'react';
import { useEffect, useState } from 'react';
import { getMovie } from 'utils/getFunctions';
const FilmList = lazy(() => import('components/FilmList/FilmList'));
const SearchForm = lazy(() =>
  import('./Movies.styled').then(module => ({
    ...module,
    default: module.SearchForm,
  }))
);
const SubmitButton = lazy(() =>
  import('./Movies.styled').then(module => ({
    ...module,
    default: module.SubmitButton,
  }))
);
const SearchInput = lazy(() =>
  import('./Movies.styled').then(module => ({
    ...module,
    default: module.SearchInput,
  }))
);

const Movies = () => {
  const [films, setFilms] = useState(null);
  const [status, setStatus] = useState('idle');
  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const handleChange = () => {
    const form = document.getElementById('query');
    setInputValue(form.elements.searchValue.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchValue(inputValue);
    setInputValue('');
  };

  useEffect(() => {
    if (!searchValue.trim()) return;
    let abortController = new AbortController();

    const updateAbortController = newAbortController =>
      (abortController = newAbortController);

    setStatus('pending');
    getMovie(searchValue, abortController, updateAbortController)
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
          value={inputValue}
          name="searchValue"
          placeholder="input film name"
          required
          onChange={handleChange}
          autoComplete="off"
        />
        <SubmitButton type="submit">Search</SubmitButton>
      </SearchForm>
      {status === 'pending' && <p>Loading...</p>}
      {status === 'resolved' && (
        <Suspense fallback={<p>Loading FilmList ...</p>}>
          <FilmList films={films} />
        </Suspense>
      )}
      {status === 'rejected' && <p>Something went wrong</p>}
    </main>
  );
};

export default Movies;
