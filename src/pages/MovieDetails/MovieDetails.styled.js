import styled from 'styled-components';

const Details = styled.section`
  position: relative;
  padding: 68px 0;
  height: 100vh;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    padding: 164px 0;
  }

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
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  padding: 16px 0;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }

  @media screen and (min-width: 1280px) {
    gap: 36px;
  }
`;

const Poster = styled.img`
  width: 300px;
  object-fit: cover;

  border-radius: 4px;

  @media screen and (min-width: 768px) {
    width: 268px;
  }
  @media screen and (min-width: 1280px) {
    width: 320px;
  }
`;

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  text-align: center;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    text-align: left;
  }

  p {
    font-size: 16px;

    @media screen and (min-width: 1280px) {
      font-size: 20px;
    }
  }
`;

const Title = styled.h1`
  font-size: 36px;

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 64px;
  }
`;

const Genres = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 12px;
  row-gap: 8px;

  span {
    padding: 4px 8px;
    font-size: 12px;
    background-color: #212121;

    border: 1px solid #ffffff;
    border-radius: 30px;

    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 1280px) {
      padding: 8px 24px;
      font-size: 16px;

      border-width: 2px;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  @media screen and (min-width: 1280px) {
    gap: 36px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;

    width: 134px;
    height: 44px;

    font-size: 16px;

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

    @media screen and (min-width: 768px) {
      width: 180px;
      height: 50px;
    }

    @media screen and (min-width: 1280px) {
      width: 210px;

      font-size: 20px;
    }
  }
`;

const AdditionalMovieContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 16px 0;

  font-size: 16px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export {
  Details,
  Container,
  MovieContent,
  Poster,
  MovieInfo,
  Title,
  Genres,
  ButtonWrapper,
  AdditionalMovieContent,
};
