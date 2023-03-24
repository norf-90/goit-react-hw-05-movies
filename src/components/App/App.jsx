import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const SharedLayout = lazy(() => import('components/SharedLayout/SharedLayout'));
const Home = lazy(() => import('pages/Home'));
const MovieDetais = lazy(() => import('pages/MovieDetails'));
const Movies = lazy(() => import('pages/Movies'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading components ...</p>}>
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
      </Suspense>
    </div>
  );
};
