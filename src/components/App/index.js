// == Import : npm
import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

// == Import : local
import './app.scss';
import Header from 'src/containers/headerContainer';

// == Composant
const App = () => {
  const { pathname } = useLocation();
  const changeTitle = () => {
    switch (pathname) {
      case '/':
        document.title = 'Home | Space';
        break;
      default:
        document.title = 'Space';
    }
  };

  useEffect(() => {
    changeTitle();
  });

  return (
    <div id="app">
      <Switch>
        <Route path="/">
          <Header />
        </Route>
      </Switch>
    </div>
  );
};
// == Export
export default App;
