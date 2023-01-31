import styled from 'styled-components';

export const TrailerWrapper = styled.div`
  width: 280px;
  height: 200px;
  margin: 0 auto;

  @media screen and (min-width: 480px) {
    width: 320px;
    height: 240px;
  }

  @media screen and (min-width: 768px) {
    width: 720px;
    height: 405px;
  }
  @media screen and (min-width: 1280px) {
    width: 848px;
    height: 477px;
  }

  iframe {
    width: 100%;
    height: 100%;
  }
`;
