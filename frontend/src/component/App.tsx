import React, { Suspense } from 'react';
import RootRouter from './router/RootRouter';
import Loading from './loader/Loading';

function App() {
  return (
    <Suspense fallback={Loading}>
      <RootRouter />
    </Suspense>
  );
}

export default App;
