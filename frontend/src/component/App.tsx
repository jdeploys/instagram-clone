import React, { Suspense } from 'react';
import RootRouter from './router/RootRouter';
import Loading from './loader/Loading';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContainer } from '@/container/auth';

function App() {
  return (
    <Suspense fallback={Loading}>
      <AuthContainer.Provider>
        <ToastContainer />
        <RootRouter />
      </AuthContainer.Provider>
    </Suspense>
  );
}

export default App;
