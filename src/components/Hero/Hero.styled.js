import { Swiper } from 'swiper/react';
import styled from 'styled-components';

const Container = styled.div``;

const HeroSwiper = styled(Swiper)`
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:after {
    position: absolute;
    content: ' ';
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to top,
      rgb(33, 33, 33, 1),
      rgb(33, 33, 33, 0.2)
    );
    pointer-events: visible;
    z-index: 1;
  }
`;

const PrevButton = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;

  cursor: pointer;

  z-index: 2;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    color: #fce205;
  }
`;

const NextButton = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;

  cursor: pointer;

  z-index: 2;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    color: #fce205;
  }
`;

export { Container, HeroSwiper, PrevButton, NextButton };
