import { useState, useEffect } from 'react';
import { getMovieVideos, getTVSeriesVideos } from 'services/tmdbApi';
import { TrailerWrapper } from './Trailer.styled';

export const Trailer = ({ id, type }) => {
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    switch (type) {
      case 'movies':
        getMovieVideos(id).then(({ results }) => {
          const trailerInfo = results.find(({ type }) => type === 'Trailer');
          setTrailer(trailerInfo);
        });
        break;

      case 'tv':
        getTVSeriesVideos(id).then(({ results }) => {
          const trailerInfo = results.find(({ type }) => type === 'Trailer');
          setTrailer(trailerInfo);
        });
        break;

      default:
        return;
    }
  }, [id, type]);

  if (!trailer) {
    return;
  }
  const { name, key } = trailer;
  return (
    <TrailerWrapper>
      <iframe
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${key}`}
        title={name}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </TrailerWrapper>
  );
};
