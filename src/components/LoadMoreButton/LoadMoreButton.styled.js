import styled from 'styled-components';

export const LoadMore = styled.button`
  font-size: 20px;

  padding: 12px 16px;
  margin: 0 auto;

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
`;
