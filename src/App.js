import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Kitchen from './components/views/Kitchen/Kitchen';
import Order from './components/views/Order/Order';
import OrderNew from './components/views/OrderNew/OrderNew';
import Orders from './components/views/Orders/Orders';
import Table from './components/views/Table/Table';
import Tables from './components/views/Tables/Tables';

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            component={Dashboard}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + '/login'}
            component={Login}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + '/kitchen'}
            component={Kitchen}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + '/ordering/order/:id'}
            component={Order}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + '/ordering/new'}
            component={OrderNew}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + '/ordering'}
            component={Orders}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + '/tables/booking/:id'}
            component={Table}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + '/tables/event/:id'}
            component={Table}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + '/tables'}
            component={Tables}
          />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
