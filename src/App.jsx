import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Connexion from './components/Connexion/Connexion';
import FirebaseContext from './components/Firebase/Context';
import Inscription from './components/Inscription/Inscription';
import About from './components/Pages/About';
import Home from './components/Pages/Home';
import Reservation from './components/Pages/Reservation';

function App() {
  return (
    <>
      <div className='App'>
        <FirebaseContext>
          <Router>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/reservation'>
                <Reservation />
              </Route>
              <Route exact path='/about'>
                <About />
              </Route>
              <Route exact path='/inscription'>
                <Inscription />
              </Route>
              <Route exact path='/connexion'>
                <Connexion />
              </Route>
            </Switch>
          </Router>
        </FirebaseContext>
      </div>
    </>
  );
}

export default App;
