import { useState, useEffect, useRef } from 'react';
import { SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { getNowPlayingMovies } from 'services/tmdbApi';
import { Container, HeroSwiper, PrevButton, NextButton } from './Hero.styled';

export const Hero = () => {
  const [images, setImages] = useState([]);

  console.log(images);

  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  useEffect(() => {
    getNowPlayingMovies().then(({ results }) => setImages(results));
  }, []);

  return (
    <Container>
      <HeroSwiper
        modules={[Navigation, EffectFade]}
        navigation={{
          prevEl: swiperNavPrevRef.current,
          nextEl: swiperNavNextRef.current,
        }}
        speed={800}
        slidesPerView={1}
        loop
        onInit={swiper => {
          swiper.params.navigation.prevEl = swiperNavPrevRef.current;
          swiper.params.navigation.nextEl = swiperNavNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {images.map(({ id, backdrop_path, title }) => (
          <SwiperSlide key={id}>
            <img
              src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
              alt={title}
            />
          </SwiperSlide>
        ))}
        <PrevButton ref={swiperNavPrevRef}>
          <IoIosArrowBack size={36} />
        </PrevButton>
        <NextButton ref={swiperNavNextRef}>
          <IoIosArrowForward size={36} />
        </NextButton>
      </HeroSwiper>
    </Container>
  );
};
