import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {
  List,
  ListItem,
  Item,
  Poster,
  MovieInfo,
} from './MovieCategoryList.styled';
import defaultPicture from '../../images/placeholder-home.jpg';

export const MovieCategoryList = ({ items, type }) => {
  return (
    <List>
      <Swiper spaceBetween={12} slidesPerView={'auto'}>
        {items.map(({ id, backdrop_path, title, name }) => (
          <SwiperSlide key={id} style={{ width: '280px' }}>
            <ListItem>
              <Item to={`/${type}/${id}`}>
                <Poster
                  src={
                    backdrop_path
                      ? `https://image.tmdb.org/t/p/original${backdrop_path}`
                      : defaultPicture
                  }
                  alt={title || name}
                />
                <MovieInfo>
                  <p>{title || name}</p>
                </MovieInfo>
              </Item>
            </ListItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </List>
  );
};
