import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  li {
    flex-basis: calc((100% - 4 * 16px) / 5);
  }

  img {
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

export { List, Character };
