import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Routes from '../utils/routes';

import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Switch>
          {Routes.map((route, index) => (
            <Route
              key={index}
              exact={route.subRoutes.some(({ exact }) => exact)}
              path={route.subRoutes.map(({ path }) => path)}
            >
              <route.layout>
                {route.subRoutes.map((subRoute, index) => <Route key={index} {...subRoute} />)}
              </route.layout>
            </Route>
          ))}
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
