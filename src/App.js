import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/Home'

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/">
                <p>I am going to be a cloned Netflix application</p>
            </Route>
            <Route path="/signin">
                <p>I will be the sign in page</p>
            </Route>
            <Route path="/browse">
                <p>I will be the browse page</p>
            </Route>
            <Route path="/home">
                <Home/>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
