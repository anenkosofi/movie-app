import { List, ListItem, Item, Poster, MovieInfo } from './MovieList.styled';
import defaultPicture from '../../images/default-movie-picture.png';
export const MovieList = ({ items }) => {
  return (
    <List>
      {items.map(({ id, poster_path, title }) => (
        <ListItem key={id}>
          <Item to={`/${id}`}>
            <Poster
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : defaultPicture
              }
              alt={title}
            />
            <MovieInfo>
              <p>{title}</p>
            </MovieInfo>
          </Item>
        </ListItem>
      ))}
    </List>
  );
};
