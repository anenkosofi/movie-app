import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  MdOutlinePlaylistAdd,
  MdOutlinePlaylistAddCheck,
} from 'react-icons/md';
import {
  getMovieById,
  getTVSeriesById,
  getSimilarMovies,
} from 'services/tmdbApi';
import { MovieCategoryList } from 'components/MovieCategoryList';
import {
  Details,
  Container,
  MovieContent,
  Poster,
  MovieInfo,
  Title,
  Genres,
  ButtonWrapper,
  SimilarMovieContent,
} from './MovieDetails.styled';
import defaultPicture from '../../images/placeholder.jpg';

export const MovieDetails = ({ type, category }) => {
  const [movie, setMovie] = useState(null);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [watched, setWatched] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    switch (type) {
      case 'movies':
        getMovieById(movieId).then(setMovie);
        break;

      case 'tv':
        getTVSeriesById(movieId).then(setMovie);
        break;

      case 'library':
        if (category === 'movies') {
          getMovieById(movieId).then(setMovie);
        } else if (category === 'tv') {
          getTVSeriesById(movieId).then(setMovie);
        }
        break;

      default:
        return;
    }
  }, [movieId, type, category]);

  useEffect(() => {
    getSimilarMovies(movieId).then(({ results }) => setSimilarMovies(results));
  }, [movieId]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('watchList'));
    if (!savedData) {
      localStorage.setItem('watchList', JSON.stringify(watchList));
    } else {
      localStorage.setItem(
        'watchList',
        JSON.stringify([...savedData, ...watchList])
      );
    }
  }, [watchList]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('watched'));
    if (!savedData) {
      localStorage.setItem('watched', JSON.stringify(watched));
    } else {
      localStorage.setItem(
        'watched',
        JSON.stringify([...savedData, ...watched])
      );
    }
  }, [watched]);

  const setMovieToLocalStorage = ({ name, id, type }) => {
    switch (name) {
      case 'watchList':
        if (type === 'movies') {
          getMovieById(id).then(movie =>
            setWatchList(prevState => [...prevState, movie])
          );
        } else if (type === 'tv') {
          getTVSeriesById(id).then(movie =>
            setWatchList(prevState => [...prevState, movie])
          );
        }
        break;

      case 'watched':
        if (type === 'movies') {
          getMovieById(id).then(movie =>
            setWatched(prevState => [...prevState, movie])
          );
        } else if (type === 'tv') {
          getTVSeriesById(id).then(movie =>
            setWatched(prevState => [...prevState, movie])
          );
        }
        break;

      default:
        return;
    }
  };

  if (!movie) {
    return;
  }
  const { id, backdrop_path, genres, overview, poster_path, name, title } =
    movie;

  return (
    <Details
      style={{
        backgroundImage: backdrop_path
          ? `url(https://image.tmdb.org/t/p/original${backdrop_path})`
          : defaultPicture,
      }}
    >
      <Container>
        <MovieContent>
          <Poster
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/original${poster_path}`
                : defaultPicture
            }
            alt={title}
          ></Poster>
          <MovieInfo>
            <Title>{title || name}</Title>
            <Genres>
              {genres.map(({ name }) => (
                <span key={name}>{name}</span>
              ))}
            </Genres>
            <p>{overview}</p>
            <ButtonWrapper>
              <button
                type="button"
                onClick={() =>
                  setMovieToLocalStorage({ name: 'watchList', id, type })
                }
              >
                <MdOutlinePlaylistAdd size={24} />
                <span>Add to watchlist</span>
              </button>
              <button
                type="button"
                onClick={() =>
                  setMovieToLocalStorage({ name: 'watched', id, type })
                }
              >
                <MdOutlinePlaylistAddCheck size={24} />
                <span>Mark as watched</span>
              </button>
            </ButtonWrapper>
          </MovieInfo>
        </MovieContent>
        <SimilarMovieContent>
          <h2>You might also like</h2>
          <MovieCategoryList items={similarMovies} type={type} />
        </SimilarMovieContent>
      </Container>
    </Details>
  );
};
