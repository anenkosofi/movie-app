import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Bar = styled.header`
  padding: 12px 0;
  background-color: rgba(255, 255, 255, 0.074);
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

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 4px;
  }
`;

const StyledLogo = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 12px;

  border-radius: 4px;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: #1e1e1e;
    background-color: rgba(191, 191, 191, 0.5);
  }
`;

const StyledLink = styled(NavLink)`
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
    }
  }

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: #1e1e1e;
    background-color: rgba(191, 191, 191, 0.5);
  }

  &.active {
    color: #212121;
    background-color: #fce205;
  }
`;

export { Bar, Container, Navigation, StyledLogo, StyledLink };
