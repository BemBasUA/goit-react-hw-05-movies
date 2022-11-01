import { Header } from './Header/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <>
      <Header></Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
