import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { getMovieCast, getTVSeriesCast } from 'services/tmdbApi';
import { List, ListItem, Character } from './Cast.styled';
import defaultPicture from '../../images/placeholder-profile.jpg';

export const Cast = ({ id, type }) => {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    switch (type) {
      case 'movies':
        getMovieCast(id).then(({ cast }) => setCast(cast));
        break;

      case 'tv':
        getTVSeriesCast(id).then(({ cast }) => setCast(cast));
        break;

      default:
        return;
    }
  }, [id, type]);

  if (!cast) {
    return;
  }

  return (
    <List>
      <Swiper spaceBetween={12} slidesPerView={'auto'}>
        {cast.map(({ id, character, name, profile_path }) => (
          <SwiperSlide key={id} style={{ width: '120px' }}>
            <ListItem>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : defaultPicture
                }
                alt={name}
              />
              <div>
                <p>{name}</p>
                <Character>{character}</Character>
              </div>
            </ListItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </List>
  );
};
