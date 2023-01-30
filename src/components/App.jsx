import { Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { SharedLayout } from './SharedLayout';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { TVSeries } from 'pages/TVSeries';
import { Library } from 'pages/Library';
import { MovieDetails } from 'pages/MovieDetails';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="movies/:movieId"
            element={<MovieDetails type="movies" />}
          />
          <Route path="tv/:movieId" element={<MovieDetails type="tv" />} />
          <Route path="movies" element={<Movies type="movies" />} />
          <Route
            path="movies/:movieId"
            element={<MovieDetails type="movies" />}
          />
          <Route path="tv" element={<TVSeries type="tv" />} />
          <Route path="tv/:movieId" element={<MovieDetails type="tv" />} />
          <Route path="library" element={<Library type="library" />} />
          <Route
            path="library/:movieId"
            element={<MovieDetails type="library" category="movies" />}
          />
          <Route
            path="library/:movieId"
            element={<MovieDetails type="library" category="tv" />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
