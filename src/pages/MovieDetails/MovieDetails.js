import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import {
  MdOutlinePlaylistAdd,
  MdOutlinePlaylistAddCheck,
} from 'react-icons/md';
import { HiOutlineArrowCircleLeft } from 'react-icons/hi';
import { getMovieById, getTVSeriesById } from 'services/tmdbApi';
import {
  Details,
  Banner,
  Container,
  MovieContent,
  NavItem,
  Poster,
  MovieInfo,
  Title,
  Genres,
  ButtonWrapper,
} from './MovieDetails.styled';
import defaultPicture from '../../images/placeholder.jpg';

export const MovieDetails = ({ type }) => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    switch (type) {
      case 'movies':
        getMovieById(movieId).then(setMovie);
        break;

      case 'tv':
        getTVSeriesById(movieId).then(setMovie);
        break;

      default:
        return;
    }
  }, [movieId, type]);

  if (!movie) {
    return;
  }
  const { backdrop_path, genres, overview, poster_path, name, title } = movie;

  const backLinkHref = location.state?.from ?? '/';

  return (
    <Details>
      <Banner
        style={{
          backgroundImage: backdrop_path
            ? `url(https://image.tmdb.org/t/p/original${backdrop_path})`
            : defaultPicture,
        }}
      ></Banner>
      <NavItem to={backLinkHref}>
        <HiOutlineArrowCircleLeft size={24} />
        <span>Go back</span>
      </NavItem>
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
            <button type="button">
              <MdOutlinePlaylistAdd size={24} />
              <span>Add to wishlist</span>
            </button>
            <button type="button">
              <MdOutlinePlaylistAddCheck size={24} />
              <span>Mark as watched</span>
            </button>
          </ButtonWrapper>
        </MovieInfo>
      </MovieContent>
      <Container></Container>
    </Details>
  );
};
