import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FirebaseContext from './components/Firebase/Context';
import Home from './components/Landing/Home';

function App() {
  return (
    <>
      <div className='App'>
        <FirebaseContext>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </FirebaseContext>
      </div>
    </>
  );
}

export default App;
