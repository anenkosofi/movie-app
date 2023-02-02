import { useState, useEffect } from 'react';
import { getTrendingTVSeries, getTVSeriesByQuery } from 'services/tmdbApi';
import { SearchBar } from 'components/SearchBar';
import { MovieList } from 'components/MovieList';
import { LoadMoreButton } from 'components/LoadMoreButton';
import {
  MoviesWrapper,
  Container,
  InnerWrapper,
} from 'pages/Movies/Movies.styled';

const TVSeries = ({ type }) => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [series, setSeries] = useState([]);
  const [total, setTotal] = useState(0);

  const submitHandler = query => {
    setQuery(query);
    setPage(1);
    setSeries([]);
  };

  const loadMoreHandler = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    getTrendingTVSeries().then(({ results }) => setSeries(results));
  }, []);

  useEffect(() => {
    if (!query) {
      return;
    }
    getTVSeriesByQuery(query, page).then(({ results, total_results }) => {
      if (total_results) {
        setSeries(prevSeries => [...prevSeries, ...results]);
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
          <MovieList items={series} type={type} />
          {series.length < total && (
            <LoadMoreButton onClick={loadMoreHandler} />
          )}
        </InnerWrapper>
      </Container>
    </MoviesWrapper>
  );
};

export default TVSeries;
