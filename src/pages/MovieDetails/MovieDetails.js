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
  getSimilarTVSeries,
} from 'services/tmdbApi';
import { MovieCategoryList } from 'components/MovieCategoryList';
import { Cast } from 'components/Cast';
import { Trailer } from 'components/Trailer';
import {
  Details,
  Container,
  MovieContent,
  Poster,
  MovieInfo,
  Title,
  Genres,
  ButtonWrapper,
  AdditionalMovieContent,
} from './MovieDetails.styled';
import defaultPicture from '../../images/placeholder.jpg';

const MovieDetails = ({ type, category }) => {
  const [movie, setMovie] = useState(null);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [watchList, setWatchList] = useState(() => {
    return JSON.parse(localStorage.getItem('watchList')) ?? [];
  });
  const [watched, setWatched] = useState(() => {
    return JSON.parse(localStorage.getItem('watched')) ?? [];
  });
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
    switch (type) {
      case 'movies':
        getSimilarMovies(movieId).then(({ results }) =>
          setSimilarMovies(results)
        );
        break;

      case 'tv':
        getSimilarTVSeries(movieId).then(({ results }) =>
          setSimilarMovies(results)
        );
        break;

      default:
        return;
    }
  }, [movieId, type]);

  useEffect(() => {
    localStorage.setItem('watchList', JSON.stringify(watchList));
  }, [watchList]);

  useEffect(() => {
    localStorage.setItem('watched', JSON.stringify(watched));
  }, [watched]);

  const setMovieToLocalStorage = ({ name, id, type }) => {
    switch (name) {
      case 'watchList':
        if (watchList.find(({ id: movieId }) => movieId === id)) {
          setWatchList(prevState =>
            prevState.filter(({ id: movieId }) => movieId !== id)
          );
          return;
        }
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
        if ([...watched].find(({ id: movieId }) => movieId === id)) {
          setWatched(prevState =>
            prevState.filter(({ id: movieId }) => movieId !== id)
          );
          return;
        }
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
                <span>
                  {[...watchList].find(({ id: movieId }) => movieId === id)
                    ? 'Remove from queue'
                    : 'Add to queue'}
                </span>
              </button>
              <button
                type="button"
                onClick={() =>
                  setMovieToLocalStorage({ name: 'watched', id, type })
                }
              >
                <MdOutlinePlaylistAddCheck size={24} />
                <span>
                  {[...watched].find(({ id: movieId }) => movieId === id)
                    ? 'Remove from watched'
                    : 'Add to watched'}
                </span>
              </button>
            </ButtonWrapper>
          </MovieInfo>
        </MovieContent>
        <AdditionalMovieContent>
          <h2>Videos</h2>
          <Trailer id={id} type={type} />
        </AdditionalMovieContent>
        <AdditionalMovieContent>
          <h2>Cast</h2>
          <Cast id={id} type={type} />
        </AdditionalMovieContent>
        <AdditionalMovieContent>
          <h2>You might also like</h2>
          <MovieCategoryList items={similarMovies} type={type} />
        </AdditionalMovieContent>
      </Container>
    </Details>
  );
};

export default MovieDetails;
