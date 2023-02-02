import { useState } from 'react';
import { RiFileListLine, RiMovie2Line } from 'react-icons/ri';
import { MovieList } from 'components/MovieList';
import {
  MoviesWrapper,
  Container,
  InnerWrapper,
  ButtonWrapper,
} from './Library.styled';

const Library = ({ type }) => {
  const [watchList] = useState(() => {
    return JSON.parse(localStorage.getItem('watchList')) ?? [];
  });
  const [watched] = useState(() => {
    return JSON.parse(localStorage.getItem('watched')) ?? [];
  });
  const allMoviesId = [...watchList, ...watched].map(({ id }) => id);
  const uniqueMoviesId = allMoviesId.filter(
    (id, index, array) => array.indexOf(id) === index
  );
  const uniqueMovies = uniqueMoviesId.map(id => {
    return [...watchList, ...watched].find(movie => movie.id === id);
  });
  const [movies, setMovies] = useState(uniqueMovies);

  const chooseMovieListToShow = name => {
    switch (name) {
      case 'watchList':
        setMovies([...watchList]);
        break;

      case 'watched':
        setMovies([...watched]);
        break;

      default:
        return;
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
              <span>Queue</span>
            </button>
            <button
              type="button"
              onClick={() => chooseMovieListToShow('watched')}
            >
              <RiMovie2Line size={24} />
              <span>Watched</span>
            </button>
          </ButtonWrapper>
          <MovieList items={movies} type={type} />
        </InnerWrapper>
      </Container>
    </MoviesWrapper>
  );
};

export default Library;
