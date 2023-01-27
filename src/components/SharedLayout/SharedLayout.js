import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar';

export const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
};
