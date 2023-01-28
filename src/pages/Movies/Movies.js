import { useState, useEffect } from 'react';
import { getTrendingMovies, getMovieByQuery } from 'services/tmdbApi';
import { SearchBar } from 'components/SearchBar';
import { MovieList } from 'components/MovieList';
import { LoadMoreButton } from 'components/LoadMoreButton';
import { MoviesWrapper, Container, InnerWrapper } from './Movies.styled';

export const Movies = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [total, setTotal] = useState(0);

  const submitHandler = query => {
    setQuery(query);
    setPage(1);
    setMovies([]);
  };

  const loadMoreHandler = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    getTrendingMovies().then(({ results }) => setMovies(results));
  }, []);

  useEffect(() => {
    if (!query) {
      return;
    }
    getMovieByQuery(query, page).then(({ results, total_results }) => {
      if (total_results) {
        setMovies(prevMovies => [...prevMovies, ...results]);
        setTotal(total_results);
      }
    });
  }, [page, query]);

  return (
    <MoviesWrapper>
      <Container>
        <InnerWrapper>
          <h1>Trending today</h1>
          <SearchBar onSubmit={submitHandler} />
          <MovieList items={movies} />
          {movies.length < total && (
            <LoadMoreButton onClick={loadMoreHandler} />
          )}
        </InnerWrapper>
      </Container>
    </MoviesWrapper>
  );
};
