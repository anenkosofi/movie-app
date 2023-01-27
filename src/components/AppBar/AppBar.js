import { NavLink } from 'react-router-dom';

export const AppBar = () => {
  return (
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="movies">Movies</NavLink>
      <NavLink to="tv">TV Series</NavLink>
    </header>
  );
};
