import { MovieCategoryList } from 'components/MovieCategoryList';

export const MovieListSection = ({ items, type }) => {
  return (
    <section>
      <div>
        <h2>Heading</h2>
        <p>View more</p>
      </div>
      <MovieCategoryList items={items} type={type} />
    </section>
  );
};
