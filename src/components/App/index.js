// == Import : npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import : local
import './app.scss';
import Header from 'src/containers/headerContainer';
import History from 'src/containers/historyContainer';
import Upcoming from 'src/containers/upcomingContainer';
import Dragons from 'src/containers/dragonsContainer';
import Roadster from 'src/containers/roadsterContainer';
import Footer from 'src/components/Footer';

import { scrollingAppearance } from 'src/utils';

// == Composant
const App = () => {
  document.title = 'Home | Space';
  scrollingAppearance();

  return (
    <div id="app">
      <Switch>
        <Route exact path="/space">
          <Header />
          <History />
          <Upcoming />
          <Dragons />
          <Roadster />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
};
// == Export
export default App;
