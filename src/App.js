import './App.scss';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Route, Switch } from 'react-router-dom';

import Artists from './components/pages/Artists/Artists';
import Home from './components/pages/Home/Home';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Song from './components/pages/Song/SongContainer';
import Songs from './components/pages/Songs/Songs';

// import pages

const App = () => (
  <MainLayout>
    <TransitionGroup>
      <CSSTransition timeout={300} classNames="fade">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/songs" component={Songs} />
          <Route exact path="/artists" component={Artists} />
          <Route exact path="/play/:songId" component={Song} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  </MainLayout>
);

export default App;
