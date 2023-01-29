import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Details = styled.section`
  position: relative;
`;

const Banner = styled.div`
  position: relative;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-image: linear-gradient(
      to top,
      rgb(33, 33, 33, 1),
      rgb(33, 33, 33, 0.6)
    );
  }
`;

const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

const MovieContent = styled.div`
  position: absolute;
  top: 10%;
  left: 0;
  display: flex;
  align-items: flex-end;
  padding: 36px 48px;
  gap: 36px;
`;

const NavItem = styled(NavLink)`
  position: absolute;
  top: -60px;
  left: 48px;
  display: flex;
  align-items: center;
  gap: 4px;

  padding: 12px 12px;

  border-radius: 4px;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  span {
    display: none;
  }

  @media screen and (min-width: 768px) {
    span {
      display: inline-flex;

      font-size: 16px;
    }
  }

  &.active {
    color: #1e1e1e;
    background-color: rgba(191, 191, 191, 0.5);
  }
`;

const Poster = styled.img`
  width: 320px;
  object-fit: contain;

  border-radius: 4px;
`;

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 860px;
`;

const Title = styled.h1`
  font-size: 64px;
`;

const Genres = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  span {
    padding: 8px 24px;

    font-size: 16px;
    background-color: #212121;

    border: 2px solid #ffffff;
    border-radius: 30px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    font-size: 20px;

    width: 210px;
    height: 50px;

    color: #1e1e1e;
    background-color: rgba(191, 191, 191, 0.5);

    border: none;
    border-radius: 4px;
    cursor: pointer;
    outline: none;

    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      color: #212121;
      background-color: #fce205;
      box-shadow: 0px 8px 12px -4px rgba(236, 151, 6, 0.32);
    }
  }
`;

export {
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
};
