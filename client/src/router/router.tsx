import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { routes } from './routes';
import { history } from 'src/store';

export const Router: React.FC = () => (
  <ConnectedRouter history={history}>
    <Switch>
      {routes.map(({ component: Component, title, ...restOfRoute }, index) => {
        return (
          <Route key={index} {...restOfRoute}>
            <Component title={title} />
          </Route>
        );
      })}
    </Switch>
  </ConnectedRouter>
);
