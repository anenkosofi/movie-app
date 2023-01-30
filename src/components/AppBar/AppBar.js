import { BiHomeHeart, BiFilm } from 'react-icons/bi';
import { GiFilmProjector } from 'react-icons/gi';
import { MdOutlineVideoLibrary } from 'react-icons/md';
import {
  Bar,
  Container,
  Navigation,
  StyledLogo,
  StyledLink,
} from './AppBar.styled';
import logo from '../../images/tmdb-logo.png';

export const AppBar = () => {
  return (
    <Bar>
      <Container>
        <Navigation>
          <StyledLogo to="/">
            <img src={logo} alt="logo" width={48} />
          </StyledLogo>
          <nav>
            <StyledLink to="/">
              <BiHomeHeart size={24} />
              <span>Home</span>
            </StyledLink>
            <StyledLink to="movies">
              <BiFilm size={24} />
              <span>Movies</span>
            </StyledLink>
            <StyledLink to="tv">
              <GiFilmProjector size={24} />
              <span>TV Series</span>
            </StyledLink>
            <StyledLink to="library">
              <MdOutlineVideoLibrary size={24} />
              <span>Library</span>
            </StyledLink>
          </nav>
        </Navigation>
      </Container>
    </Bar>
  );
};
