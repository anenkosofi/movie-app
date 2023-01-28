import styled from 'styled-components';

const MoviesWrapper = styled.section`
  padding: 36px 0;

  text-align: center;
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

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  h1 {
    font-size: 36px;

    @media screen and (min-width: 480px) {
      font-size: 42px;
    }

    @media screen and (min-width: 768px) {
      font-size: 56px;
    }
  }
`;

export { MoviesWrapper, Container, InnerWrapper };
