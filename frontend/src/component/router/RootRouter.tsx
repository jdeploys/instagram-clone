import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routeItems } from './routeItems';

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
    </BrowserRouter>
  );
};

export default RootRouter;
