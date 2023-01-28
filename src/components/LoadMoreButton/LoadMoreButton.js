import { LoadMore } from './LoadMoreButton.styled';

export const LoadMoreButton = ({ onClick }) => {
  return (
    <LoadMore type="button" onClick={onClick}>
      Load more
    </LoadMore>
  );
};
