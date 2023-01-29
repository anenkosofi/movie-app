import { NavLink } from 'react-router-dom';
import defaultPicture from '../../images/placeholder.jpg';

export const MovieCategoryList = ({ items, type }) => {
  return (
    <ul>
      {items.map(({ id, poster_path, title }) => (
        <li key={id}>
          <NavLink to={`/${type}/${id}`}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : defaultPicture
              }
              alt={title}
            />
            <div>
              <p>{title}</p>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
