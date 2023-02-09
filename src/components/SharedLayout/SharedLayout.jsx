import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from './SharedLayout.styled';
import { AppBar } from '../AppBar/AppBar';
import { Loader } from '../Loader/Loader';

import { Ani } from '../Ani/Ani';

export const SharedLayout = () => {
  return (
    <Container>
      <Ani/>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ToastContainer position="top-center" autoClose={2000} theme="colored" />
    </Container>
  );
};
