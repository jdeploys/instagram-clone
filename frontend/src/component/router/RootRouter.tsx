import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routeItems } from './routeItems';
import NavBar from '@/component/nav/NavBar';

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routeItems.map((route) => (
          <Route
            exact={route.exact}
            path={route.path}
            key={String(route.path)}
            component={route.component}
          />
        ))}
      </Switch>
      <NavBar />
    </BrowserRouter>
  );
};

export default RootRouter;
