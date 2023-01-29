import { MovieListSection } from 'components/MovieListSection';
import { Container, Wrapper, SectionWrapper } from './Home.styled';

export const Home = () => {
  return (
    <main>
      <Container>
        <Wrapper>
          <div>Slider</div>
          <SectionWrapper>
            <MovieListSection category="popularMovies" />
            <MovieListSection category="topRatedMovies" />
            <MovieListSection category="popularTVSeries" />
            <MovieListSection category="topRatedTVSeries" />
          </SectionWrapper>
        </Wrapper>
      </Container>
    </main>
  );
};
