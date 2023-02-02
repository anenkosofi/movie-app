import { Hero } from 'components/Hero';
import { MovieListSection } from 'components/MovieListSection';
import { Container, Wrapper, SectionWrapper } from './Home.styled';

const Home = () => {
  return (
    <main>
      <Hero />
      <Container>
        <Wrapper>
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

export default Home;
