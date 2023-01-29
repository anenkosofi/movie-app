import { useState, useEffect } from 'react';
import {
  getPopularMovies,
  getTopRatedMovies,
  getPopularTVSeries,
  getTopRatedTVSeries,
} from 'services/tmdbApi';
import { MovieCategoryList } from 'components/MovieCategoryList';
import { Section, Heading } from './MovieListSection.styled';

export const MovieListSection = ({ category }) => {
  const [heading, setHeading] = useState('');
  const [movies, setMovies] = useState([]);
  const [type, setType] = useState('');

  useEffect(() => {
    switch (category) {
      case 'popularMovies':
        setHeading('Popular Movies');
        getPopularMovies().then(({ results }) => setMovies(results));
        setType('movies');
        break;

      case 'topRatedMovies':
        setHeading('Top Rated Movies');
        getTopRatedMovies().then(({ results }) => setMovies(results));
        setType('movies');
        break;

      case 'popularTVSeries':
        setHeading('Popular TV Series');
        getPopularTVSeries().then(({ results }) => setMovies(results));
        setType('tv');
        break;

      case 'topRatedTVSeries':
        setHeading('Top Rated TV Series');
        getTopRatedTVSeries().then(({ results }) => setMovies(results));
        setType('tv');
        break;

      default:
        return;
    }
  }, [category]);

  return (
    <Section>
      <Heading>{heading}</Heading>
      <MovieCategoryList items={movies} type={type} />
    </Section>
  );
};
