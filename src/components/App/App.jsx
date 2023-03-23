import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import Home from 'pages/Home';
import MovieDetais from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetais />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
