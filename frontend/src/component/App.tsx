import React, { Suspense } from 'react';
import RootRouter from './router/RootRouter';
import Loading from './loader/Loading';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Suspense fallback={Loading}>
      <ToastContainer />
      <RootRouter />
    </Suspense>
  );
}

export default App;
