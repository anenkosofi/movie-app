import styled from 'styled-components';

const List = styled.div`
  .swiper {
    height: 216px;

    @media screen and (min-width: 768px) {
      height: 232px;
    }
  }
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 120px;
    height: 180px;
    object-fit: cover;

    border-radius: 4px;
  }

  div {
    padding: 8px;
  }

  p {
    font-size: 12px;
  }
`;

const Character = styled.p`
  margin-top: 4px;

  color: #808080;
`;

export { List, ListItem, Character };
