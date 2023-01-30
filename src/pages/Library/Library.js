import { useState } from 'react';
import { RiFileListLine, RiMovie2Line } from 'react-icons/ri';
import { MovieList } from 'components/MovieList';
import {
  MoviesWrapper,
  Container,
  InnerWrapper,
  ButtonWrapper,
} from './Library.styled';

export const Library = () => {
  const [watchList] = useState(() => {
    return JSON.parse(localStorage.getItem('watchList')) ?? [];
  });
  const [watched] = useState(() => {
    return JSON.parse(localStorage.getItem('watched')) ?? [];
  });
  const [movies, setMovies] = useState([...watchList, ...watched]);

  const chooseMovieListToShow = name => {
    switch (name) {
      case 'watchList':
        setMovies([...watchList]);
        break;

      case 'watched':
        setMovies([...watched]);
        break;

      default:
        setMovies([...watchList, ...watched]);
    }
  };

  return (
    <MoviesWrapper>
      <Container>
        <InnerWrapper>
          <ButtonWrapper>
            <button
              type="button"
              onClick={() => chooseMovieListToShow('watchList')}
            >
              <RiFileListLine size={24} />
              <span>Watchlist</span>
            </button>
            <button
              type="button"
              onClick={() => chooseMovieListToShow('watched')}
            >
              <RiMovie2Line size={24} />
              <span>Watched</span>
            </button>
          </ButtonWrapper>
          <MovieList items={movies} />
        </InnerWrapper>
      </Container>
    </MoviesWrapper>
  );
};
