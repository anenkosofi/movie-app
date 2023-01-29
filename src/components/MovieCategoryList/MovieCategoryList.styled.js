import { NavLink } from 'react-router-dom';
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
`;

const Item = styled(NavLink)`
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: #ec9706;
  }
`;

const Poster = styled.img`
  object-fit: cover;
`;

const MovieInfo = styled.div`
  padding: 12px 4px;

  text-align: center;
`;

export { List, ListItem, Item, Poster, MovieInfo };
