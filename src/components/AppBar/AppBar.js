import { BiHomeHeart, BiFilm, BiCameraMovie } from 'react-icons/bi';
import { Bar, Container, Navigation, StyledLink } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Bar>
      <Container>
        <Navigation>
          <StyledLink to="/">
            <BiHomeHeart size={24} />
            <span>Home</span>
          </StyledLink>
          <StyledLink to="movies">
            <BiFilm size={24} />
            <span>Movies</span>
          </StyledLink>
          <StyledLink to="tv">
            <BiCameraMovie size={24} />
            <span>TV Series</span>
          </StyledLink>
        </Navigation>
      </Container>
    </Bar>
  );
};
