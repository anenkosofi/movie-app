import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  margin: 0 auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    row-gap: 24px;
    column-gap: 8px;

    margin: 0;
  }

  @media screen and (min-width: 1280px) {
    justify-content: center;
  }
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 280px;

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 16px) / 3);
  }
  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 32px) / 5);
  }
`;

const Item = styled(NavLink)`
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: #ec9706;
    transform: scale(1.1);
  }
`;

const Poster = styled.img`
  height: 365px;
  object-fit: cover;

  @media screen and (max-width: 767px) {
    width: 280px;
    height: 390px;
  }
`;

const MovieInfo = styled.div`
  padding: 12px 4px;
`;

export { List, ListItem, Item, Poster, MovieInfo };
