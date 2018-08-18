import React from 'react';
import { Route } from 'react-router-dom';
import Navigation from './containers/Navigation.js';
import Notifications from './features/notifications/notifications.js';

const Layout = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={matchProps => (
      <div>
        <Navigation/>
        <Component {...matchProps} />
        <Notifications />
      </div>
    )} />
  )
};

export default Layout;