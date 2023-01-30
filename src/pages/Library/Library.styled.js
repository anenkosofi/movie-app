import styled from 'styled-components';

const MoviesWrapper = styled.section`
  padding: 36px 0;
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
  gap: 36px;
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

    color: #fefefe;
    background-color: transparent;

    border: 2px solid #fefefe;
    border-radius: 4px;
    cursor: pointer;
    outline: none;

    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      border-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      color: #212121;
      background-color: #fce205;
      border-color: #fce205;
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

export { MoviesWrapper, Container, InnerWrapper, ButtonWrapper };
