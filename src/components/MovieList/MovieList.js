import { List, ListItem, Item, Poster, MovieInfo } from './MovieList.styled';
import defaultPicture from '../../images/placeholder.jpg';

export const MovieList = ({ items, type }) => {
  return (
    <List>
      {items.map(({ id, poster_path, title }) => (
        <ListItem key={id}>
          <Item to={`/${type}/${id}`}>
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
